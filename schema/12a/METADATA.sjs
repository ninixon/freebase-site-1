var METADATA = {
  "mounts": {
    "lib": "//18a.lib.www.tags.svn.freebase-site.googlecode.dev"
  }, 
  "freebase": {
    "write_user": "appeditoruser"
  }, 
  "app_tag": "12a", 
  "app_version": 12, 
  "app_key": "schema"
};

acre.require(METADATA.mounts.lib + "/loader.sjs").extend_metadata(METADATA);