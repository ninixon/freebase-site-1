var METADATA = {
  "mounts": {
    "lib": "//109.lib.www.branches.svn.freebase-site.googlecode.dev"
  }, 
  "app_tag": null, 
  "app_version": 83, 
  "app_key": "appeditor"
};

acre.require(METADATA.mounts.lib + "/helper/helpers.sjs").extend_metadata(METADATA, "lib");
