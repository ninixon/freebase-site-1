
/*
 * Copyright 2012, Google Inc.
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
 *
 * Additional Licenses for Third Party components can be found here:
 * http://wiki.freebase.com/wiki/Freebase_Site_License
 *
 */
(function(d){d.extend({tablesorter:new function(){function a(d,a){c(d+","+((new Date).getTime()-a.getTime())+"ms")}function c(d){"undefined"!=typeof console&&"undefined"!=typeof console.debug?console.log(d):alert(d)}function e(a,A){var p="";if(0!=a.tBodies.length){var i=a.tBodies[0].rows;if(i[0])for(var b=[],h=i[0].cells.length,l=0;l<h;l++){var g=!1;d.metadata&&d(A[l]).metadata()&&d(A[l]).metadata().sorter?g=k(d(A[l]).metadata().sorter):a.config.headers[l]&&a.config.headers[l].sorter&&(g=k(a.config.headers[l].sorter));
if(!g)a:{for(var g=a,e=i,f=-1,j=l,o=m.length,t=!1,r=!1,v=!0;""==r&&v;)f++,e[f]?(t=e[f].cells[j],r=d.trim(n(g.config,t)),g.config.debug&&c("Checking if value was empty on row:"+f)):v=!1;for(e=1;e<o;e++)if(m[e].is(r,g,t)){g=m[e];break a}g=m[0]}a.config.debug&&(p+="column:"+l+" parser:"+g.id+"\n");b.push(g)}a.config.debug&&c(p);return b}}function k(d){for(var a=m.length,c=0;c<a;c++)if(m[c].id.toLowerCase()==d.toLowerCase())return m[c];return!1}function f(q){var c;q.config.debug&&(c=new Date);for(var e=
q.tBodies[0]&&q.tBodies[0].rows.length||0,i=q.tBodies[0].rows[0]&&q.tBodies[0].rows[0].cells.length||0,b=q.config.parsers,h={row:[],normalized:[]},l=0;l<e;++l){var g=d(q.tBodies[0].rows[l]),k=[];if(g.hasClass(q.config.cssChildRow))h.row[h.row.length-1]=h.row[h.row.length-1].add(g);else{h.row.push(g);for(var j=0;j<i;++j)k.push(b[j].format(n(q.config,g[0].cells[j]),q,g[0].cells[j]));k.push(h.normalized.length);h.normalized.push(k)}}q.config.debug&&a("Building cache for "+e+" rows:",c);return h}function n(a,
c){var e="";if(!c)return"";a.supportsTextContent||(a.supportsTextContent=c.textContent||!1);return e="simple"==a.textExtraction?a.supportsTextContent?c.textContent:c.childNodes[0]&&c.childNodes[0].hasChildNodes()?c.childNodes[0].innerHTML:c.innerHTML:"function"==typeof a.textExtraction?a.textExtraction(c):d(c).text()}function v(c,e){var p;c.config.debug&&(p=new Date);for(var i=e.row,b=e.normalized,h=b.length,l=b[0].length-1,g=d(c.tBodies[0]),f=[],k=0;k<h;k++){var j=b[k][l];f.push(i[j]);if(!c.config.appender)for(var n=
i[j].length,m=0;m<n;m++)g[0].appendChild(i[j][m])}c.config.appender&&c.config.appender(c,f);f=null;c.config.debug&&a("Rebuilt table:",p);B(c);setTimeout(function(){d(c).trigger("sortEnd")},0)}function w(a,d){return a.config.headers[d]&&a.config.headers[d].lockedOrder?a.config.headers[d].lockedOrder:!1}function B(a){for(var d=a.config.widgets,c=d.length,e=0;e<c;e++)x(d[e]).format(a)}function x(a){for(var d=u.length,c=0;c<d;c++)if(u[c].id.toLowerCase()==a.toLowerCase())return u[c]}function C(a,c,e,
i){c.removeClass(i[0]).removeClass(i[1]);var b=[];c.each(function(){this.sortDisabled||(b[this.column]=d(this))});a=e.length;for(c=0;c<a;c++)b[e[c][0]].addClass(i[e[c][1]])}function y(d,c,e){var i,b;d.config.debug&&(i=new Date);var h="var sortWrapper = function(a,b) {",l=c.length;for(b=0;b<l;b++)var g=c[b][0],f=c[b][1],g="text"==d.config.parsers[g].type?0==f?o("text","asc",g):o("text","desc",g):0==f?o("numeric","asc",g):o("numeric","desc",g),k="e"+b,h=h+("var "+k+" = "+g),h=h+("if("+k+") { return "+
k+"; } "),h=h+"else { ";b=e.normalized[0].length-1;h+="return a["+b+"]-b["+b+"];";for(b=0;b<l;b++)h+="}; ";h+="return 0; }; ";d.config.debug&&a("Evaling expression:"+h,new Date);eval(h);e.normalized.sort(sortWrapper);d.config.debug&&a("Sorting on "+c.toString()+" and dir "+f+" time:",i);return e}function o(a,d,c){var e="a["+c+"]",c="b["+c+"]";if("text"==a&&"asc"==d)return"("+e+" == "+c+" ? 0 : ("+e+" === null ? Number.POSITIVE_INFINITY : ("+c+" === null ? Number.NEGATIVE_INFINITY : ("+e+" < "+c+") ? -1 : 1 )));";
if("text"==a&&"desc"==d)return"("+e+" == "+c+" ? 0 : ("+e+" === null ? Number.POSITIVE_INFINITY : ("+c+" === null ? Number.NEGATIVE_INFINITY : ("+c+" < "+e+") ? -1 : 1 )));";if("numeric"==a&&"asc"==d)return"("+e+" === null && "+c+" === null) ? 0 :("+e+" === null ? Number.POSITIVE_INFINITY : ("+c+" === null ? Number.NEGATIVE_INFINITY : "+e+" - "+c+"));";if("numeric"==a&&"desc"==d)return"("+e+" === null && "+c+" === null) ? 0 :("+e+" === null ? Number.POSITIVE_INFINITY : ("+c+" === null ? Number.NEGATIVE_INFINITY : "+
c+" - "+e+"));"}var m=[],u=[];this.defaults={cssHeader:"header",cssAsc:"headerSortUp",cssDesc:"headerSortDown",cssChildRow:"expand-child",sortInitialOrder:"asc",sortMultiSortKey:"shiftKey",sortForce:null,sortAppend:null,sortLocaleCompare:!0,textExtraction:"simple",parsers:{},widgets:[],widgetZebra:{css:["even","odd"]},headers:{},widthFixed:!1,cancelSelection:!0,sortList:[],headerList:[],dateFormat:"us",decimal:"/.|,/g",onRenderHeader:null,selectorHeaders:"thead th",debug:!1};this.benchmark=a;this.construct=
function(k){return this.each(function(){if(this.tHead&&this.tBodies){var m,p,i;this.config={};i=d.extend(this.config,d.tablesorter.defaults,k);m=d(this);d.data(this,"tablesorter",i);var b=this,h;b.config.debug&&(h=new Date);for(var l=[],g={},o=b.getElementsByTagName("THEAD")[0].getElementsByTagName("TR"),u=0;u<o.length;u++)for(var H=o[u].cells,E=0;E<H.length;E++){var t=H[E],r=t.parentNode.rowIndex,F=r+"-"+t.cellIndex,K=t.rowSpan||1,t=t.colSpan||1,D;"undefined"==typeof l[r]&&(l[r]=[]);var s;for(s=
0;s<l[r].length+1;s++)if("undefined"==typeof l[r][s]){D=s;break}g[F]=D;for(s=r;s<r+K;s++){"undefined"==typeof l[s]&&(l[s]=[]);for(var F=l[s],G=D;G<D+t;G++)F[G]="x"}}var z=d(b.config.selectorHeaders,b).each(function(a){this.column=g[this.parentNode.rowIndex+"-"+this.cellIndex];this.count=this.order="Number"!=typeof b.config.sortInitialOrder?"desc"==b.config.sortInitialOrder.toLowerCase()?1:0:1==b.config.sortInitialOrder?1:0;if(d.metadata&&!1===d(this).metadata().sorter||b.config.headers[a]&&!1===b.config.headers[a].sorter)this.sortDisabled=
!0;w(b,a)&&(this.order=this.lockedOrder=w(b,a));if(!this.sortDisabled){var c=d(this).addClass(b.config.cssHeader);b.config.onRenderHeader&&b.config.onRenderHeader.apply(c)}b.config.headerList[a]=this});b.config.debug&&(a("Built headers:",h),c(z));this.config.parsers=e(this,z);p=f(this);var I=[i.cssDesc,i.cssAsc];if(this.config.widthFixed){var J=d("<colgroup>");d("tr:first td",this.tBodies[0]).each(function(){J.append(d("<col>").css("width",d(this).width()))});d(this).prepend(J)}z.click(function(b){var a=
m[0].tBodies[0]&&m[0].tBodies[0].rows.length||0;if(!this.sortDisabled&&a>0){m.trigger("sortStart");d(this);a=this.column;this.order=this.count++%2;if(this.lockedOrder)this.order=this.lockedOrder;if(b[i.sortMultiSortKey]){a:{for(var b=i.sortList,c=b.length,h=0;h<c;h++)if(b[h][0]==a){b=true;break a}b=false}if(b)for(b=0;b<i.sortList.length;b++){c=i.sortList[b];h=i.headerList[c[0]];if(c[0]==a){h.count=c[1];h.count++;c[1]=h.count%2}}else i.sortList.push([a,this.order])}else{i.sortList=[];if(i.sortForce!=
null){c=i.sortForce;for(b=0;b<c.length;b++)c[b][0]!=a&&i.sortList.push(c[b])}i.sortList.push([a,this.order])}setTimeout(function(){C(m[0],z,i.sortList,I);v(m[0],y(m[0],i.sortList,p))},1);return false}}).mousedown(function(){if(i.cancelSelection){this.onselectstart=function(){return false};return false}});m.bind("update",function(){var b=this;setTimeout(function(){b.config.parsers=e(b,z);p=f(b)},1)}).bind("updateCell",function(b,a){var d=this.config,c=[a.parentNode.rowIndex-1,a.cellIndex];p.normalized[c[0]][c[1]]=
d.parsers[c[1]].format(n(d,a),a)}).bind("sorton",function(b,a){d(this).trigger("sortStart");i.sortList=a;for(var c=i.sortList,h=this.config,e=c.length,l=0;l<e;l++){var g=c[l],k=h.headerList[g[0]];k.count=g[1];k.count++}C(this,z,c,I);v(this,y(this,c,p))}).bind("appendCache",function(){v(this,p)}).bind("applyWidgetId",function(b,a){x(a).format(this)}).bind("applyWidgets",function(){B(this)});d.metadata&&(d(this).metadata()&&d(this).metadata().sortlist)&&(i.sortList=d(this).metadata().sortlist);0<i.sortList.length&&
m.trigger("sorton",[i.sortList]);B(this)}})};this.addParser=function(a){for(var c=m.length,d=!0,e=0;e<c;e++)m[e].id.toLowerCase()==a.id.toLowerCase()&&(d=!1);d&&m.push(a)};this.addWidget=function(a){u.push(a)};this.formatFloat=function(a){a=parseFloat(a);return isNaN(a)?0:a};this.formatInt=function(a){a=parseInt(a);return isNaN(a)?0:a};this.isDigit=function(a){return/^[-+]?\d*$/.test(d.trim(a.replace(/[,.']/g,"")))};this.clearTableBody=function(a){d.browser.msie?function(){for(;this.firstChild;)this.removeChild(this.firstChild)}.apply(a.tBodies[0]):
a.tBodies[0].innerHTML=""}}});d.fn.extend({tablesorter:d.tablesorter.construct});var f=d.tablesorter;f.addParser({id:"text",is:function(){return!0},format:function(a){return d.trim(a.toLocaleLowerCase())},type:"text"});f.addParser({id:"digit",is:function(a,c){return d.tablesorter.isDigit(a,c.config)},format:function(a){return d.tablesorter.formatFloat(a)},type:"numeric"});f.addParser({id:"currency",is:function(a){return/^[\u00a3$\u20ac?.]/.test(a)},format:function(a){return d.tablesorter.formatFloat(a.replace(RegExp(/[\u00a3$\u20ac]/g),
""))},type:"numeric"});f.addParser({id:"ipAddress",is:function(a){return/^\d{2,3}[\.]\d{2,3}[\.]\d{2,3}[\.]\d{2,3}$/.test(a)},format:function(a){for(var a=a.split("."),c="",e=a.length,k=0;k<e;k++)var f=a[k],c=2==f.length?c+("0"+f):c+f;return d.tablesorter.formatFloat(c)},type:"numeric"});f.addParser({id:"url",is:function(a){return/^(https?|ftp|file):\/\/$/.test(a)},format:function(a){return jQuery.trim(a.replace(RegExp(/(https?|ftp|file):\/\//),""))},type:"text"});f.addParser({id:"isoDate",is:function(a){return/^\d{4}[\/-]\d{1,2}[\/-]\d{1,2}$/.test(a)},
format:function(a){return d.tablesorter.formatFloat(""!=a?(new Date(a.replace(RegExp(/-/g),"/"))).getTime():"0")},type:"numeric"});f.addParser({id:"percent",is:function(a){return/\%$/.test(d.trim(a))},format:function(a){return d.tablesorter.formatFloat(a.replace(RegExp(/%/g),""))},type:"numeric"});f.addParser({id:"usLongDate",is:function(a){return a.match(RegExp(/^[A-Za-z]{3,10}\.? [0-9]{1,2}, ([0-9]{4}|'?[0-9]{2}) (([0-2]?[0-9]:[0-5][0-9])|([0-1]?[0-9]:[0-5][0-9]\s(AM|PM)))$/))},format:function(a){return d.tablesorter.formatFloat((new Date(a)).getTime())},
type:"numeric"});f.addParser({id:"shortDate",is:function(a){return/\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4}/.test(a)},format:function(a,c){var e=c.config,a=a.replace(/\-/g,"/");if("us"==e.dateFormat)a=a.replace(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})/,"$3/$1/$2");else if("uk"==e.dateFormat)a=a.replace(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})/,"$3/$2/$1");else if("dd/mm/yy"==e.dateFormat||"dd-mm-yy"==e.dateFormat)a=a.replace(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{2})/,"$1/$2/$3");return d.tablesorter.formatFloat((new Date(a)).getTime())},
type:"numeric"});f.addParser({id:"time",is:function(a){return/^(([0-2]?[0-9]:[0-5][0-9])|([0-1]?[0-9]:[0-5][0-9]\s(am|pm)))$/.test(a)},format:function(a){return d.tablesorter.formatFloat((new Date("2000/01/01 "+a)).getTime())},type:"numeric"});f.addParser({id:"metadata",is:function(){return!1},format:function(a,c,e){a=c.config;a=!a.parserMetadataName?"sortValue":a.parserMetadataName;return d(e).metadata()[a]},type:"numeric"});f.addWidget({id:"zebra",format:function(a){var c;a.config.debug&&(c=new Date);
var e,f=-1,j;d("tr:visible",a.tBodies[0]).each(function(){e=d(this);e.hasClass(a.config.cssChildRow)||f++;j=0==f%2;e.removeClass(a.config.widgetZebra.css[j?0:1]).addClass(a.config.widgetZebra.css[j?1:0])});a.config.debug&&d.tablesorter.benchmark("Applying Zebra widget",c)}})})(jQuery);
(function(d){d(function(){d.tablesorter&&(d("<div>"),d.tablesorter.defaults.cssAsc="column-header-asc",d.tablesorter.defaults.cssDesc="column-header-desc",d.tablesorter.defaults.cssHeader="column-header",d.tablesorter.addParser({id:"datetime",is:function(){return!1},format:function(f,a,c){return d("[datetime]:first",c).attr("datetime")},type:"text"}),d.tablesorter.addParser({id:"ignoreCase",is:function(){return!1},format:function(d){return d.toLowerCase()},type:"text"}),d.tablesorter.addParser({id:"string",
is:function(){return!1},format:function(d){return d},type:"text"}),d.tablesorter.addParser({id:"number",is:function(){return!1},format:function(f,a,c){f=d(".number:first",c).attr("data-value");null==f&&(f=Number.MIN_VALUE);return f},type:"numeric"}),d(".table-sortable").each(function(){d(this).tablesorter()}))})})(jQuery);
(function(d){d.fn.fixedcolumn=function(f){var a=d.extend(!0,{},f);return this.each(function(){(a.all?d(this).find("tr:first").children():d(this).find("tr:first").find("> :first-child")).each(function(){var a=d(this),e=a[0].nodeName.toUpperCase();if("TD"===e||"TH"===e)e=a.width(),0<e&&d(":first-child",a).width(e).css("display","inline-block")})})}})(jQuery);
(function(d){var f="undefined"!=typeof window.innerWidth?function(){return{w:window.innerWidth,h:window.innerHeight}}:"undefined"!=typeof document.documentElement&&"undefined"!=typeof document.documentElement.clientWidth&&0!=document.documentElement.clientWidth?function(){return{w:document.documentElement.clientWidth,h:document.documentElement.clientHeight}}:function(){return{w:document.getElementsByTagName("body")[0].clientWidth,h:document.getElementsByTagName("body")[0].clientHeight}};window.kbs=
function(a){d(".kbs.current",a).removeClass("current");var c=d(".domain-section:first",a),e=d(".domain-section:last",a),k=this.scroll_to=function(b){var a=d(document).scrollTop();d(document).height();var c=f().h,c=a+c,e=b.offset().top,b=e+b.height();e<a?d(document).scrollTop(e):b>c&&d(document).scrollTop(a+(b-c))},j=this.get_current=function(){return d(".kbs.current:first",a)},n=this.set_next=function(b,a,d){b=b||j();a.length&&(b.removeClass("current"),a.addClass("current"),d||k(a))},v=this.next_domain=
function(b){var a=j(),d=w(a);d&&(d=d.find(".kbs:first"),n(a,d,b))},w=this._next_domain=function(b){if(!b||!b.length)return d(".domain-section:first",a);b=b.closest(".domain-section");return!b.length||b[0]===e[0]?c:b.next(".domain-section")},B=this.prev_domain=function(){var b=j(),a=x(b);a&&(a=a.find(".kbs:first"),n(b,a))},x=this._prev_domain=function(b){if(!b||!b.length)return d(".domain-section:last",a);var h=b.closest(".domain-section");return b.closest(".property-section").length||b.closest(".type-section").length?
h:!h.length||h[0]===c[0]?e:h.prev(".domain-section")},C=this.next_type=function(){var b=j(),a=y(b);a&&(a=a.find(".kbs:first"),n(b,a))},y=this._next_type=function(b){if(!b||!b.length)return d(".type-section:first",a);var c=b.closest(".domain-section"),b=b.closest(".type-section"),b=b.length?b.next(".type-section"):c.find(".type-section:first");if(!b||!b.length){var e=w(c);if(e)for(;e.get(0)!==c.get(0);){b=e.find(".type-section:first");if(b.length)break;e=w(e)}}return b},o=this.prev_type=function(){var a=
j(),d=m(a);d&&(d=d.find(".kbs:first"),n(a,d))},m=this._prev_type=function(b){if(!b||!b.length)return d(".type-section:last",a);var c=b.closest(".domain-section"),e=b.closest(".type-section");if(b.closest(".property-section").length)return e;var g;e.length&&(g=e.prev(".type-section"));if(!g||!g.length)if(b=x(c))for(;b.get(0)!==c.get(0);){g=b.find(".type-section:last");if(g.length)break;b=x(b)}return g},u=this.next_prop=function(){var a=j(),d=q(a);d&&(d=d.find(".kbs:first"),n(a,d))},q=this._next_prop=
function(b){if(!b||!b.length)return d(".property-section:first",a);var c=b.closest(".domain-section"),e=b.closest(".type-section"),g=b.closest(".property-section"),c=g.length?g.next(".property-section"):e.length?e.find(".property-section:first"):c.find(".property-section:first");if(!c||!c.length)if(b=y(b))for(;b.get(0)!==e.get(0);){c=b.find(".property-section:first");if(c.length)break;null==e.get(0)&&(e=b);b=y(b)}return c},A=this.prev_prop=function(){var a=j(),d=p(a);d&&(d=d.find(".kbs:first"),n(a,
d))},p=this._prev_prop=function(b){if(!b||!b.length)return d(".property-section:last",a);var c=b.closest(".domain-section"),e=b.closest(".type-section"),g=b.closest(".property-section");if(b.closest(".data-section").length)return g;var f;g.length&&(f=g.prev(".property-section"));if(!f||!f.length)if(o=e.length?m(e):m(c))for(;o.get(0)!==e.get(0);){f=o.find(".property-section:last");if(f.length)break;null==e.get(0)&&(e=o);o=m(o)}return f};this.next=function(){var a=j(),d=this._next(a);d&&n(a,d)};this._next=
function(b){if(!b||!b.length)return d(".domain-section:first .kbs:first",a);var h=b.closest(".domain-section"),f=b.closest(".type-section"),g=b.closest(".property-section");if(b.closest(".data-section").length){b=b.next(".kbs");if(b.length)return b;b=g.next(".property-section").find(".kbs:first");if(b.length)return b;b=f.next(".type-section").find(".kbs:first")}else if(g.length){b=g.find(".data-section:first .kbs:first");if(b.length)return b;b=g.next(".property-section").find(".kbs:first");if(b.length)return b;
b=f.next(".type-section").find(".kbs:first")}else if(f.length){b=f.find(".property-section:first .kbs:first");if(b.length)return b;b=f.next(".type-section").find(".kbs:first")}else b=h.find(".type-section:first .kbs:first");return b.length?b:h.get(0)===e.get(0)?c.find(".kbs:first"):h.next(".domain-section").find(".kbs:first")};this.prev=function(){var a=j(),d=this._prev(a);d&&n(a,d)};this._prev=function(b){if(!b||!b.length)return b=d(".data-section:last .kbs:last",a),b.length||(b=d(".property-section:last .kbs:first",
a)),b.length||(b=d(".type-section:last .kbs:first",a)),b.length||(b=d(".domain-section:last .kbs:first",a)),b;var f=b.closest(".domain-section"),k=b.closest(".type-section"),g=b.closest(".property-section");return b.closest(".data-section").length?(b=b.prev(".kbs"),b.length?b:g.find(".kbs:first")):g.length?(b=g.prev(".property-section").find(".kbs:last"),b.length?b:k.find(".kbs:first")):k.length?(b=k.prev(".type-section").find(".kbs:last"),b.length?b:f.find(".kbs:first")):f.get(0)===c.get(0)?e.find(".kbs:last"):
f.prev(".domain-section").find(".kbs:last")};this.edit=function(){this.get_current().trigger("edit")};var i=this;d(document).unbind(".kbs").bind("keydown.kbs",function(a){var c=a.target;if(c==document.body||c==document||c==window||c==d("html")[0])c=a.keyCode,68===c?a.shiftKey?B():v():84===c?a.shiftKey?o():C():80===c?a.shiftKey?A():u():74===c?i.next():75===c?i.prev():69===c&&i.edit()})}})(jQuery);
(function(d,f){var a=window.propbox={init:function(c,e){e=d.extend({lang:"/lang/en"},e);if(!e.base_ajax_url)throw Error("base_ajax_url required in propbox options");if(!e.base_static_url)throw Error("base_static_url required in propbox options");if(!e.id)throw Error("topic id required in propbox options");if(!e.lang)throw Error("lang required in propbox options");a.options=e;a.kbs=new f(c);a.kbs.set_next(a.kbs.get_current(),d(".kbs:visible:first",c,!0));d(".kbs",c).live("click",function(){var c=a.kbs.get_current();
a.kbs.set_next(c,d(this),!0)}).live("edit",function(){var a=d(this).find(".headmenu:first").data("submenu");a&&d("li:first a:first",a).click()});a.init_menus(c)},init_menus:function(c,e){c=d(c||document);e&&d(".nicemenu",c).nicemenu();(c&&c.is(".data-row")?c:d(".data-row",c)).hover(a.row_menu_hoverover,a.row_menu_hoverout);d(".nicemenu .headmenu",c).add(d(".nicemenu .default-action",c)).click("click",function(){if(a.kbs){var c=a.kbs.get_current();c&&a.kbs.set_next(c,d(this).parents(".kbs:first"),
!0)}return!1})},row_menu_hoverover:function(){var c=d(this);a.row_menu_hoverover.timeout=setTimeout(function(){c.addClass("row-hover")},300)},row_menu_hoverout:function(){clearTimeout(a.row_menu_hoverover.timeout);d(this).removeClass("row-hover")},get_script:function(c,e){var f=a.get_script.cache;f||(f=a.get_script.cache={});var j=f[c];j?1===j.state?j.callbacks.push(e):4===j.state&&e():(j=f[c]={state:0,callbacks:[e]},d.ajax({url:a.options.base_static_url+c,dataType:"script",beforeSend:function(){j.state=
1},success:function(){j.state=4;d.each(j.callbacks,function(a,c){c()})},error:function(){j.state=-1}}))},prop_edit:function(c,e){var f=d(c).parents(".submenu").data("headmenu").parents(".property-section").find(".data-section .data-row:first:visible .nicemenu:first .headmenu:first a");f.length?f.click():a.prop_add(c,e);return!1},prop_add:function(c,e){var f=d(c).parents(".submenu").data("headmenu").parents(".property-section");a.get_script("/propbox-edit.mf.js",function(){a.edit.prop_add_begin(f,
e)});return!1},value_edit:function(c){var e=d(c).parents(".submenu").data("headmenu").parents(".data-row:first"),f=e.parents(".property-section");a.get_script("/propbox-edit.mf.js",function(){a.edit.value_edit_begin(f,e)});return!1},value_delete:function(c){var e=d(c).parents(".submenu").data("headmenu").parents(".data-row:first"),f=e.parents(".property-section");a.get_script("/propbox-edit.mf.js",function(){a.edit.value_delete_begin(f,e)});return!1},close_message:function(a){d(a).parents(".row-msg:first").remove();
return!1}}})(jQuery,window.kbs);
(function(d,f,a){var c=f.i18n_tab={init:function(){d("#i18n-table").fixedcolumn();a.init_menus()},add_name:function(a,k){var j=d(a).parents(".data-row:first");f.get_script(f.h.static_url("i18n-edit.mf.js"),function(){c.edit.add_name_begin(j,k)});return!1},edit_name:function(a,k,j){var n=d(a).parents(".submenu").data("headmenu").parents(".data-row:first");f.get_script(f.h.static_url("i18n-edit.mf.js"),function(){c.edit.edit_name_begin(n,k,j)});return!1},delete_name:function(a,k,j){var n=d(a).parents(".submenu").data("headmenu").parents(".data-row:first");
f.get_script(f.h.static_url("i18n-edit.mf.js"),function(){c.edit.delete_name_begin(n,k,j)});return!1}};d(c.init)})(jQuery,window.freebase,window.propbox);