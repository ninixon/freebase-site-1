var METADATA = {
  "mounts": {
    "site": "//20a.site.www.tags.svn.freebase-site.googlecode.dev"
  }, 
  "app_version": "22", 
  "app_tag": "22a", 
  "app_key": "data"
};

acre.require(METADATA.mounts.site + "/lib/helper/helpers.sjs").extend_metadata(METADATA, "site");