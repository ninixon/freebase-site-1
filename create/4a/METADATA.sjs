var METADATA = {
  "mounts": {
    "lib": "//17a.lib.www.tags.svn.freebase-site.googlecode.dev"
  }, 
  "app_version": 4, 
  "app_tag": "4a", 
  "app_key": "create"
};

acre.require(METADATA.mounts.lib + "/loader.sjs").extend_metadata(METADATA);