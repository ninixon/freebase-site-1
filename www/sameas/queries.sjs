/*
 * Copyright 2010, Google Inc.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *     * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above
 * copyright notice, this list of conditions and the following disclaimer
 * in the documentation and/or other materials provided with the
 * distribution.
 *     * Neither the name of Google Inc. nor the names of its
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

var h = acre.require("lib/helper/helpers.sjs");
var i18n = acre.require("lib/i18n/i18n.sjs");
var freebase = acre.require("lib/promise/apis").freebase;
var deferred = acre.require("lib/promise/apis").deferred;


/**

[{
  "id": "/en/bob_dylan",
  "/common/topic/weblink": [{
    "key":         null,
    "url":         null,
    "template": {
      "id":       null,
      "name":     null,
      "ns": {
        "id": null,
        "/base/sameas/web_id/authority": {
          "id":       null,
          "optional": true
        }
      },
      "template": null
    },
    "category": {
      optional: true,
      id: null
    },
    "description": null
  }]
}]

 */

function weblinks2(id) {
  var q = {
    id: id,
    "/common/topic/weblink": [{
      optional: true,
      key: null,
      url: null,
      template: {
        id: null,
        ns: {
          id: null,
          "/base/sameas/web_id/authority": {
            optional: true,
            id: null,
            name: i18n.mql.query.name()
          }
        },
        template: null
      },
      category: {
        optional: true,
        id: null,
        name: i18n.mql.query.name()
      },
      description: null
    }]
  };
  return freebase.mqlread(q, {extended:1})
    .then(function(env) {
      return env.result["/common/topic/weblink"];
    });
};


var NO_CATEGORY = {
  id: "NO_CATEGORY",
  name: "NO_CATEGORY"
};

function weblinks_by_category(id) {
  return weblinks2(id)
    .then(function(links) {
      var categories = {};
      links.forEach(function(link) {
        var category = link.category || NO_CATEGORY;
        var seen = categories[category.id];
        if (!seen) {
          seen = categories[category.id] = {category:category, weblinks:[]};
        }

        var weblink = {
          key: link.key,
          url: link.url,
          description: link.description,
          template: link.template.template,
          ns: link.template.ns.id,
          authority: link.template.ns["/base/sameas/web_id/authority"]
        };
        seen.weblinks.push(weblink);
      });
      for (var k in categories) {
        categories[k].weblinks.sort(weblinks_sort);
      }
      return categories;
    });
};

function weblinks_sort(a, b) {
  if (a.authority && b.authority) {
    var aname = i18n.display_name(a.authority);
    var bname = i18n.display_name(b.authority);
    return b.name < a.name;
  }
  else if (a.authority) {
    return 1;
  }
  else if (b.authority) {
    return -1;
  }
  var adesc = a.description;
  var bdesc = b.description;
  return bdesc < a.desc;
};




var _link_compare_key = function(link) {
 // proper order should be official, template, topic, uri
 if (link.template && link.category) {
   var cat = link.category.id;

   if (cat === '/common/annotation_category/official_website') {
     return 0;
   } else if (cat === '/common/annotation_category/topic_webpage') {
     return 2;
   } else if (link.template && link.template.ns !== '/uri') {
     return 1;
   }
 }

 return 3;
};

var weblinks = function(id, namespace) {
 var q = {
   "id": id,
   "/common/topic/weblink": [{
     "optional": true,
     "category": {
       "id": null,
       "name": null,
       "optional": true
     },
     "url": null,
     "description": null,
     "template": {
       "id": null,
       "name": null,
       "a:ns": {
         "id": '/wikipedia/en',
         "optional": 'forbidden'
       },
       "ns": null
     },
     "key": null
   }]
 };

 if (namespace) {
   q['/common/topic/weblink'][0]['template']['b:ns'] = {'id': namespace};
 }

 return freebase.mqlread(q, {extended:1})
   .then(function(envelope) {
     if (!envelope.result) {
       return [];
     }

     var links = envelope.result['/common/topic/weblink'] || [];
     //links.sort(key=link_compare_key);
     return links;
   });
};


var _make_key = function(namespace, key) {
  return namespace + ' ' + key;
};

var _get_authorityless_keys = function(keys, url_map) {
  var namespaces = {};
  keys.forEach(function(key) {
    var namespace = key.namespace.id;
    if (namespace.indexOf('/m') !== 0) {
      if (!namespaces.namespace) {
        namespaces.namespace = [];
      }
      namespaces.namespace.push(key.value);
    }
  });

  var fake_authorities = [];
  for (var namespace_id in namespaces) {
    var namespace_keys = namespaces[namespace_id];
    var namespace_key_entries = [];
    namespace_keys.forEach(function(key) {
      namespace_key_entries.push({
        key: key,
        url: url_map[_make_key(namespace_id, key)]
      });
    });

    var best_url = null;
    if (namespace_key_entries.length === 1) {
      best_url = namespace_key_entries[0].url;
    }

    fake_authorities.push({
      id: namespace_id,
      name: namespace_id,
      namespaces: [{
        id: namespace_id,
        keys: namespace_key_entries
      }],
      total_keys: namespace_keys.length,
      best_url: best_url
    });
  }

  return fake_authorities;
};

var keys_by_authority = function(topic_id) {
  // {
  //   id: '/authority/twitter',
  //   name: 'Twitter',
  //   total_keys: 1,
  //   namespaces: [{
  //     id: '/authority/twitter/user',
  //     keys: [{
  //       key: 'ladygaga',
  //       url: 'http://twitter.com/ladygaga'
  //     }]
  //   }]
  // }

  var key_query = [{
    'id': null,
    'name': null,
    'type': '/base/sameas/api_provider',
    '!/base/sameas/web_id/authority': [{
      'id': null,
      '/type/namespace/keys': [{
        'value':null,
        '/type/key/namespace': topic_id
      }]
    }]
  }];

  var weblink_query = {
    'id': topic_id,
    '/common/topic/weblink': [{
      optional: true,
      'key': null,
      'url': null,
      'template': {
        'ns': null,
        'a:ns': {
          'id': '/uri',
          'optional': 'forbidden'
        }
      }
    }],
    'key': [{
      'namespace': {
        'id': null,
        'type': '/type/namespace',
        '/base/sameas/web_id/authority': {
          'id': null,
          'optional': 'forbidden'
        }
      },
      'value': null,
      'optional': true
    }]
  };

  return deferred.all({
    topic: freebase.mqlread({id: topic_id, mid: null}),
    keys: freebase.mqlread(key_query),
    weblinks: freebase.mqlread(weblink_query, {extended: 1})})
  .then(function(results) {
    var topic = results.topic.result || {};
    var keys = results.keys.result || {};
    var weblinks = results.weblinks.result || {};
    var url_map = {};
    console.log(weblinks);
    if (weblinks['/common/topic/weblink']) {
      weblinks['/common/topic/weblink'].forEach(function(link) {
        url_map[_make_key(link.template.ns, link.key)] = link.url;
      });
    }

    // First result is a null to leave space for Metaweb
    var result = [null];
    keys.forEach(function(authority) {
      var total_keys = 0;
      var namespaces = [];

      authority['!/base/sameas/web_id/authority'].forEach(function(namespace) {
        if (authority.id === '/en/metaweb') {
          namespace['/type/namespace/keys'].forEach(function(key) {
            url_map[_make_key(namespace.id, key.value)] = namespace['id'] + '/' + key.value;
          });
        }

        var keys = [];
        namespace['/type/namespace/keys'].forEach(function(key) {
          keys.push({
            key: key.value,
            url: url_map[_make_key(namespace.id, key.value)]
          });
        });

        namespaces.push({id: namespace.id, keys: keys});
        total_keys += keys.length;
      });

      var best_url;
      if (namespaces.length === 1) {
        if (namespaces[0].keys.length == 1) {
          best_url = namespaces[0].keys[0].url;
        }
      } else if (authority.id === '/en/wikipedia') {
        best_url = namespaces[0].keys[0].url;
      }

      var authority_entry = {
        id: authority.id,
        name: authority.name,
        namespaces: namespaces,
        total_keys: total_keys,
        best_url: best_url
      };

      if (authority_entry.id == '/en/metaweb') {
        // Fill in the metaweb result placeholder
        result[0] = authority_entry;
        authority_entry.name = 'Freebase';
        if (topic) {
          var mid = topic.mid;
          if (!authority_entry.namespaces) {
            authority_entry.namespaces = [];
          }
          authority_entry.namespaces.push({
            'id': '/m',
            'keys': [{
              key: mid.split('/')[2],
              url: h.fb_url("/inspect", mid)
            }]
          });
          total_keys = total_keys + 1;
          authority_entry.total_keys = total_keys;
        }
      } else {
        result.push(authority_entry);
      }
    });

    result.concat(_get_authorityless_keys(weblinks.key, url_map));

    // Get rid of the metaweb result placeholder
    if (!result[0]) {
      result = result.slice(1);
    }
    return result;
  });
};
