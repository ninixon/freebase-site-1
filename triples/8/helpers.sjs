var mf = acre.require("MANIFEST").mf;
var h = mf.require("core", "helpers");
var i18n = mf.require("i18n", "i18n");

/**
 * return a triples data structure.
 * where s=subject, p=predicate and o=object.
 * In addition, a mql query representing the triple is provided.
 *
 * @param subject:String - mql id
 * @param predicate:String - mql property
 * @param object:Object - the object {id:String} or {value:String, lang:String(optional), namespace:String(optional)}
 */
function triple(subject, predicate, object, namespace, value) {
  var o = {
    s: subject,
    p: predicate
  };
  if (namespace && value) {
    o.o = {namespace:namespace, value:value};
  }
  else if ("id" in object) {
    o.o = {id: object.id};
  }
  else if ("value" in object) {
    o.o = {value: object.value};
    ["lang", "namespace"].forEach(function(key) {
      if (key in object) {
        o.o[key] = object[key];
      }
    });
    if (object.link && object.link.target_value && object.link.target_value.lang) {
      o.o.lang = object.link.target_value.lang;
    }
  }
  o.mql = {id: subject};
  o.mql[predicate] = h.extend({}, o.o);
  o.mql = JSON.stringify(o.mql);
  return o;
};

function format_number(n) {
  if (n < 10) {
    return "<10";
  }
  var i;
  for (i=20; i<100; i+=10) {
    if (n < i) {
      return h.sprintf("%s+", (i-10));
    }
  }
  for (i=200; i<1000; i+=100) {
    if (n < i) {
      return h.sprintf("%s+", (i-100));
    }
  }
  if (n < 10000) {
    return h.sprintf("%sk", Math.round(n/100)/10);
  }
  return h.sprintf("%sk", i18n.format_number(Math.round(n/1000)));
};

function is_valid(link) {
  return (link.valid === false) ? false : true;
};

function valid_class(link) {
  return is_valid(link) ? "valid": "invalid";
};

function link_class(link) {
  var operation = "";
  if (link.operation != null) {
    operation = link.operation;
  }
  return h.trim(h.sprintf("%s %s", valid_class(link), operation));
};
