var METADATA = {
  "app_tag": "39a", 
  "app_key": "apps", 
  "extensions": {
    "gif": {
      "media_type": "image/gif", 
      "handler": "tagged_binary"
    }, 
    "mf.css": {
      "media_type": "text/css", 
      "handler": "tagged_static"
    }, 
    "jpg": {
      "media_type": "image/jpg", 
      "handler": "tagged_binary"
    }, 
    "omf.js": {
      "media_type": "text/javascript", 
      "handler": "js_manifest"
    }, 
    "mf.js": {
      "media_type": "text/javascript", 
      "handler": "tagged_static"
    }, 
    "omf.css": {
      "media_type": "text/css", 
      "handler": "css_manifest"
    }, 
    "png": {
      "media_type": "image/png", 
      "handler": "tagged_binary"
    }
  }, 
  "ttl": -1, 
  "mounts": {
    "libraries": "//2.libraries.apps.freebase.dev", 
    "site": "//35a.site.www.tags.svn.freebase-site.googlecode.dev", 
    "service": "//service"
  }, 
  "app_version": "39"
};

acre.require(METADATA.mounts.site + "/lib/helper/helpers.sjs").extend_metadata(METADATA, "site");
