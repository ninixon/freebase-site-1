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

var h = acre.require("helper/helpers.sjs");

function extend_metadata(md, scope) {
  
  function fix_up_paths(md, label) {
    for (var hdlr in md.handlers) {
      var handler = md.handlers[hdlr];
      if (handler.indexOf("/") !== 0) {
        md.handlers[hdlr] = label + "/" + handler;      
      }
    }

    for (var mnt in md.mounts) {
      var mount = md.mounts[mnt];
      if(mount.indexOf("/") !== 0) {
        md.mounts[mnt] = label + "/" + mount; 
      }
    }

    if (md.error_page && (md.error_page.indexOf("/") !== 0)) {
        md.error_page = label + "/" + md.error_page;
    }
    
    if (md.template_base && (md.template_base.indexOf("/") !== 0)) {
        md.template_base = label + "/" + md.template_base;
    }
  };

  // get site METADATA
  var site_md = JSON.parse(scope.acre.require("METADATA").body);
  fix_up_paths(site_md, "site");

  // get lib METADATA
  var lib_md = JSON.parse(scope.acre.require("lib/METADATA").body);
  fix_up_paths(lib_md, "lib");  
  
  var final_md = h.extend(true, {}, lib_md, site_md, md);
  
  // make sure we update the original object
  h.extend(true, md, final_md);
  return md;
};
