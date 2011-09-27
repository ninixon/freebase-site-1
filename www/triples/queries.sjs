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
var i18n = acre.require("lib/i18n/i18n.sjs");
var h = acre.require("lib/helper/helpers.sjs");
var apis = acre.require("lib/promise/apis.sjs");
var deferred = apis.deferred;
var freebase = apis.freebase;
var th = acre.require("helpers.sjs");
var fh = acre.require("lib/filter/helpers.sjs");
var creator = acre.require("lib/queries/creator.sjs");

function links(id, filters) {
  filters = h.extend({}, filters);
  var q = {
    id: id,
    "/type/reflect/any_master": [{
      optional: true,
      id: null,
      mid: null,
      name: i18n.mql.query.name(),
      link: creator.extend({
        master_property: null,
        timestamp: null
      })
    }],
    "/type/reflect/any_reverse": [{
      optional: true,
      id: null,
      mid: null,
      name: i18n.mql.query.name(),
      link: creator.extend({
        master_property: null,
        timestamp: null
      })
    }],
    "/type/reflect/any_value": [{
      optional: true,
      link: creator.extend({
        master_property: null,
        timestamp: null,
        target_value: {}
      })
    }]
  };
  return freebase.mqlread(q, mqlread_options(filters))
    .then(function(env) {
      return env.result;
    })
    .then(function(result) {
      result.any_master = result["/type/reflect/any_master"];
      result.any_reverse = result["/type/reflect/any_reverse"];
      result.any_value = result["/type/reflect/any_value"];
      result.any_master.forEach(function(l) {
        l.any_master = 1;
      });
      result.any_reverse.forEach(function(l) {
        l.any_reverse = 1;
      });
      result.any_value.forEach(function(l) {
        l.any_value = 1;
      });
      result.all = result.any_master.concat(result.any_reverse).concat(result.any_value);
      result.all.sort(function(a, b) {
        return b.link.timestamp < a.link.timestamp;
      });
      return result;
    });
};


function names_aliases(id, filters) {
  filters = h.extend({}, filters);
  var q = creator.extend([{
    type: "/type/link",
    "a:master_property": {
      "id|=": ["/type/object/name", "/common/topic/alias"],
      limit: 0
    },
    master_property: null,
    source: {
      id: id
    },
    target_value: {},
    timestamp: null,
    optional: true,
    sort: "-timestamp"
  }]);
  apply_filters(q[0], filters);
  return freebase.mqlread(q, mqlread_options(filters))
    .then(function(env) {
      return env.result;
    });
};

function keys(id, filters) {
  filters = h.extend({}, filters);
  var source_keys = creator.extend([{
    type: "/type/link",
    master_property: "/type/namespace/keys",
    source: {id: null},
    target: {id: id},
    target_value: {},
    timestamp: null,
    optional: true,
    sort: "-timestamp"
  }]);
  var target_keys = creator.extend([{
    type: "/type/link",
    master_property: "/type/namespace/keys",
    source: {id: id},
    target: {id: null},
    target_value: {},
    timestamp: null,
    optional: true,
    sort: "-timestamp"
  }]);
  apply_filters(source_keys[0], filters);
  apply_filters(target_keys[0], filters);
  var promises = [];
  var options = mqlread_options(filters);
  [source_keys, target_keys].forEach(function(q) {
    promises.push(freebase.mqlread(q, options)
      .then(function(env) {
        return env.result;
      })
    );
  });
  return deferred.all(promises)
    .then(function([keys1, keys2]) {
      var result = keys1.concat(keys2);
      var limit = filters.limit || 100;
      if (result.length > limit) {
        result = result.slice(0, limit);
      }
      return result;
    });
};

function outgoing(id, filters) {
  filters = h.extend({}, filters);
  var q = creator.extend([{
    type: "/type/link",
    master_property: null,
    "forbid:master_property": {
      "id|=": ["/type/object/name", "/common/topic/alias", "/type/namespace/keys"],
      optional: "forbidden",
      limit: 0
    },
    source: {id: id},
    target: {id:null, mid:null, name:i18n.mql.query.name(), optional:true},
    target_value: {},
    timestamp: null,
    optional: true,
    sort: "-timestamp"
  }]);
  apply_filters(q[0], filters);
  return freebase.mqlread(q, mqlread_options(filters))
    .then(function(env) {
      return env.result;
    });
};

function incoming(id, filters) {
  filters = h.extend({}, filters);
  var q = creator.extend([{
    type: "/type/link",
    "forbid:master_property": {
      "id|=": ["/type/namespace/keys"],
      optional: "forbidden",
      limit: 0
    },
    master_property: null,
    source: {
      id: null,
      mid: null,
      guid: null,
      name: i18n.mql.query.name()
    },
    target: {
      id: id,
      guid: null
    },
    timestamp: null,
    optional: true,
    sort: "-timestamp"
  }]);
  apply_filters(q[0], filters);
  return freebase.mqlread(q, mqlread_options(filters))
    .then(function(env) {
      return env.result;
    });
};

function type_links(id, filters) {
  filters = h.extend({}, filters);
  var q = creator.extend([{
    type: "/type/link",
    master_property: {
      id: id
    },
    source: {id:null, mid:null, guid:null, name:i18n.mql.query.name()},
    target: {id:null, mid:null, name:i18n.mql.query.name(), optional:true},
    target_value: {},
    timestamp: null,
    optional: true,
    sort: "-timestamp"
  }]);
  apply_limit(q[0], filters.limit);
  apply_timestamp(q[0], filters.timestamp);
  apply_creator(q[0], filters.creator);
  apply_historical(q[0], filters.historical);
  return freebase.mqlread(q, mqlread_options(filters))
    .then(function(env) {
      return env.result;
    });
};

function attribution_links(id, filters) {
  filters = h.extend({}, filters);
  var q = [{
    type: "/type/link",
    master_property: null,
    source: {id:null, mid:null, guid:null, name:i18n.mql.query.name()},
    target: {id:null, mid:null, name:i18n.mql.query.name(), optional:true},
    target_value: {},
    creator: id,
    timestamp: null,
    optional: true,
    sort: "-timestamp"
  }];
  apply_limit(q[0], filters.limit);
  apply_timestamp(q[0], filters.timestamp);
  apply_creator(q[0], filters.creator);
  apply_historical(q[0], filters.historical);
  return freebase.mqlread(q, mqlread_options(filters))
    .then(function(env) {
      return env.result;
    });
};


/**
 * Apply filter constraint helpers
 */

function apply_filters(clause, filters) {
  if (!filters) {
    return clause;
  }
  apply_limit(clause, filters.limit);
  apply_timestamp(clause, filters.timestamp);
  apply_creator(clause, filters.creator);
  apply_historical(clause, filters.historical);
  apply_domain_type_property(clause, filters.domain, filters.type, filters.property);
};

function apply_limit(clause, limit) {
  if (limit) {
    clause.limit = limit;
  }
  return clause;
};

function apply_timestamp(clause, timestamp) {
  if (timestamp) {
    if (!h.isArray(timestamp)) {
      timestamp = [timestamp];
    }
    var len = timestamp.length;
    if (len === 1) {
      clause["filter:timestamp>="] = fh.timestamp(timestamp[0]);
    }
    else if (len === 2) {
      timestamp.sort(function(a,b) {
        return b < a;
      });
      clause["filter:timestamp>="] = fh.timestamp(timestamp[0]);
      clause["filter:timestamp<"] = fh.timestamp(timestamp[1]);
    }
  }
  return clause;
};

function apply_creator(clause, creator) {
  if (creator) {
    if (!h.isArray(creator)) {
      creator = [creator];
    }
    if (creator.length) {
      clause["filter:creator"] = {"id|=": creator};
    }
  }
  return clause;
};

function apply_historical(clause, historical) {
  if (historical) {
    clause.valid = null;
    clause.operation = null;
  }
  return clause;
};

function apply_domain_type_property(clause, domain, type, property) {
  if (domain) {
    clause["filter:master_property"] = {schema:{domain:domain}};
  }
  else if (type) {
    clause["filter:master_property"] = {schema:type};
  }
  else if (property) {
    clause["filter:master_property"] = property;
  }
  return clause;
};

function mqlread_options(filters) {
  var options = {};
  if (!filters) {
    return options;
  }
  if (filters.as_of_time) {
    options.as_of_time = filters.as_of_time;
  }
  return options;
};
