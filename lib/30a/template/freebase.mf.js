
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
 *
 * Additional Licenses for Third Party components can be found here:
 * http://wiki.freebase.com/wiki/Freebase_Site_License
 *
 */
/*

 Cookie plugin

 Copyright (c) 2006 Klaus Hartl (stilbuero.de)
 Dual licensed under the MIT and GPL licenses:
 http://www.opensource.org/licenses/mit-license.php
 http://www.gnu.org/licenses/gpl.html

*/
if(!("JSON"in window&&window.JSON)){if(!this.JSON)this.JSON={};(function(){function a(h){return h<10?"0"+h:h}function d(h){b.lastIndex=0;return b.test(h)?'"'+h.replace(b,function(k){var l=i[k];return typeof l==="string"?l:"\\u"+("0000"+k.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+h+'"'}function g(h,k){var l,m,n,r,q=c,p,o=k[h];if(o&&typeof o==="object"&&typeof o.toJSON==="function")o=o.toJSON(h);if(typeof j==="function")o=j.call(k,h,o);switch(typeof o){case "string":return d(o);case "number":return isFinite(o)?
String(o):"null";case "boolean":case "null":return String(o);case "object":if(!o)return"null";c+=f;p=[];if(Object.prototype.toString.apply(o)==="[object Array]"){r=o.length;for(l=0;l<r;l+=1)p[l]=g(l,o)||"null";n=p.length===0?"[]":c?"[\n"+c+p.join(",\n"+c)+"\n"+q+"]":"["+p.join(",")+"]";c=q;return n}if(j&&typeof j==="object"){r=j.length;for(l=0;l<r;l+=1){m=j[l];if(typeof m==="string")if(n=g(m,o))p.push(d(m)+(c?": ":":")+n)}}else for(m in o)if(Object.hasOwnProperty.call(o,m))if(n=g(m,o))p.push(d(m)+
(c?": ":":")+n);n=p.length===0?"{}":c?"{\n"+c+p.join(",\n"+c)+"\n"+q+"}":"{"+p.join(",")+"}";c=q;return n}}if(typeof Date.prototype.toJSON!=="function"){Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+a(this.getUTCMonth()+1)+"-"+a(this.getUTCDate())+"T"+a(this.getUTCHours())+":"+a(this.getUTCMinutes())+":"+a(this.getUTCSeconds())+"Z":null};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()}}var e=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
b=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,c,f,i={"\u0008":"\\b","\t":"\\t","\n":"\\n","\u000c":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},j;if(typeof JSON.stringify!=="function")JSON.stringify=function(h,k,l){var m;f=c="";if(typeof l==="number")for(m=0;m<l;m+=1)f+=" ";else if(typeof l==="string")f=l;if((j=k)&&typeof k!=="function"&&(typeof k!=="object"||typeof k.length!=="number"))throw new Error("JSON.stringify");return g("",
{"":h})};if(typeof JSON.parse!=="function")JSON.parse=function(h,k){function l(n,r){var q,p,o=n[r];if(o&&typeof o==="object")for(q in o)if(Object.hasOwnProperty.call(o,q)){p=l(o,q);if(p!==undefined)o[q]=p;else delete o[q]}return k.call(n,r,o)}var m;h=String(h);e.lastIndex=0;if(e.test(h))h=h.replace(e,function(n){return"\\u"+("0000"+n.charCodeAt(0).toString(16)).slice(-4)});if(/^[\],:{}\s]*$/.test(h.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){m=eval("("+h+")");return typeof k==="function"?l({"":m},""):m}throw new SyntaxError("JSON.parse");}})()}
(function(a){a.factory=function(d,g){if(a.fn[d])throw"$.fn."+d+" plugin already exists";else if(a[d])throw"$."+d+" class already exists";a.fn[d]=function(e){return this.each(function(){var b=a(this),c=b.data("$."+d);c&&c._destroy();c=new a[d](b,e);b.data("$."+d,c)})};a[d]=function(e,b){this.options=a.extend(true,{},a[d].defaults,b);this.element=e;this.init()};a.extend(a[d].prototype,{init:function(){},_destroy:function(){}},g);return a[d]}})(jQuery);
jQuery.cookie=function(a,d,g){if(typeof d!="undefined"){g=g||{};if(d===null){d="";g=$.extend({},g);g.expires=-1}var e="";if(g.expires&&(typeof g.expires=="number"||g.expires.toUTCString)){if(typeof g.expires=="number"){e=new Date;e.setTime(e.getTime()+g.expires*24*60*60*1E3)}else e=g.expires;e="; expires="+e.toUTCString()}var b=g.path?"; path="+g.path:"",c=g.domain?"; domain="+g.domain:"";g=g.secure?"; secure":"";document.cookie=[a,"=",encodeURIComponent(d),e,b,c,g].join("")}else{d=null;if(document.cookie&&
document.cookie!=""){g=document.cookie.split(";");for(e=0;e<g.length;e++){b=jQuery.trim(g[e]);if(b.substring(0,a.length+1)==a+"="){d=decodeURIComponent(b.substring(a.length+1));break}}}return d}};
(function(){var a={};$.extend({localstore:function(d,g,e,b){var c=document.location.hostname,f=document.location.protocol;if(typeof g!=="undefined"){var i=JSON.stringify(g);if(!e&&window.globalStorage)if(g===null)delete window.globalStorage[c][f+d];else window.globalStorage[c][f+d]=i;else if(!e&&window.localStorage&&window.localStorage.setItem)g===null?window.localStorage.removeItem(f+d):window.localStorage.setItem(f+d,i);else if(e!==false){e={};e.domain=fb.get_cookie_domain();g===null?$.cookie(d,
null,e):$.cookie(d,i,$.extend(e,b||{expires:14,path:"/"}))}else if(g===null)delete a[d];else a[d]=i;return g}else{if(!e&&window.globalStorage){if(window.globalStorage[c][f+d])g=window.globalStorage[c][f+d].value}else g=!e&&window.localStorage?window.localStorage.getItem(f+d):e!==false?$.cookie(d):a[d];if(g!=""&&g!==null&&g!==undefined)return JSON.parse(g,null)}return null}})})();
(function(a){function d(e,b){this.options=a.extend(true,{},b);this.input=a(e);this.placeholder=this.input.attr("placeholder")||"";this.init()}if("placeholder"in document.createElement("input"))a.fn.placeholder=function(){return this};else{var g=a.fn.val;a.fn.val=function(e){if(e===undefined)if(this.hasClass("placeholder"))return"";return g.apply(this,[e])};d.prototype={init:function(){var e=this,b=this.input.val();if(b===""||b===this.placeholder)this.input.val(this.placeholder).addClass("placeholder");
this.input.bind("focus.placeholder",function(c){return e.focus(c)}).bind("blur.placeholder",function(c){return e.blur(c)});this.input[0].form&&a(this.input[0].form).bind("submit",function(c){return e.submit(c)})},destroy:function(){this.input.unbind(".placeholder");this.input[0].form&&a(this.input[0].form).unbind(".placeholder")},focus:function(){this.input.hasClass("placeholder")&&this.input.val("").removeClass("placeholder")},blur:function(){this.input.val()===""&&this.input.val(this.input.attr("placeholder")).addClass("placeholder")},
submit:function(){this.input.hasClass("placeholder")&&this.input.val("")}};a.fn.placeholder=function(e){return this.each(function(){var b=a(this);b.unbind(".placeholder");if(b.is(":text")||b.is("textarea"))if(b.attr("placeholder")){(b=a.data(this,"placeholder"))&&b.destroy();a.data(this,"placeholder",new d(this,e))}})}}})(jQuery);
(function(a){a.extend({metadata:{defaults:{type:"class",name:"metadata",cre:/({.*})/,single:"metadata"},setType:function(d,g){this.defaults.type=d;this.defaults.name=g},get:function(d,g){var e=a.extend({},this.defaults,g);if(!e.single.length)e.single="metadata";var b=a.data(d,e.single);if(b)return b;b="{}";var c=function(j){if(typeof j!="string")return j;return j=eval("("+j+")")};if(e.type=="html5"){var f={};a(d.attributes).each(function(){var j=this.nodeName;if(j.match(/^data-/))j=j.replace(/^data-/,
"");else return true;f[j]=c(this.nodeValue)})}else{if(e.type=="class"){var i=e.cre.exec(d.className);if(i)b=i[1]}else if(e.type=="elem"){if(!d.getElementsByTagName)return;i=d.getElementsByTagName(e.name);if(i.length)b=a.trim(i[0].innerHTML)}else if(d.getAttribute!=undefined)if(i=d.getAttribute(e.name))b=i;f=c(b.indexOf("{")<0?"{"+b+"}":b)}a.data(d,e.single,f);return f}}});a.fn.metadata=function(d){return a.metadata.get(this[0],d)}})(jQuery);
(function(a){a(function(){if(a.tablesorter){console.log("$.tablesorter");var d=a("<div>");a.tablesorter.defaults.cssAsc="column-header-asc";a.tablesorter.defaults.cssDesc="column-header-desc";a.tablesorter.defaults.cssHeader="column-header";a.tablesorter.addParser({id:"datetime",is:function(){return false},format:function(g){d.html(g);return d.find("time:first").attr("datetime")},type:"text"});a.tablesorter.addParser({id:"ignoreCase",is:function(){return false},format:function(g){d.html(g);return d.text().toLowerCase()},
type:"text"});a.tablesorter.addParser({id:"string",is:function(){return false},format:function(g){d.html(g);return d.text()},type:"text"});a.tablesorter.addParser({id:"number",is:function(){return false},format:function(g){d.html(g);g=d.find(".number:first").attr("data-value");if(g==null)return Number.MAX_VALUE;return g},type:"numeric"});a(".table-sortable").each(function(){a(this).tablesorter()})}})})(jQuery);
(function(a,d){function g(e){return!a(e).parents().andSelf().filter(function(){return a.curCSS(this,"visibility")==="hidden"||a.expr.filters.hidden(this)}).length}a.ui=a.ui||{};if(!a.ui.version){a.extend(a.ui,{version:"1.8.10",keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,
PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91}});a.fn.extend({_focus:a.fn.focus,focus:function(e,b){return typeof e==="number"?this.each(function(){var c=this;setTimeout(function(){a(c).focus();b&&b.call(c)},e)}):this._focus.apply(this,arguments)},scrollParent:function(){var e;e=a.browser.msie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(a.curCSS(this,
"position",1))&&/(auto|scroll)/.test(a.curCSS(this,"overflow",1)+a.curCSS(this,"overflow-y",1)+a.curCSS(this,"overflow-x",1))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(a.curCSS(this,"overflow",1)+a.curCSS(this,"overflow-y",1)+a.curCSS(this,"overflow-x",1))}).eq(0);return/fixed/.test(this.css("position"))||!e.length?a(document):e},zIndex:function(e){if(e!==d)return this.css("zIndex",e);if(this.length){e=a(this[0]);for(var b;e.length&&e[0]!==document;){b=e.css("position");
if(b==="absolute"||b==="relative"||b==="fixed"){b=parseInt(e.css("zIndex"),10);if(!isNaN(b)&&b!==0)return b}e=e.parent()}}return 0},disableSelection:function(){return this.bind((a.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(e){e.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}});a.each(["Width","Height"],function(e,b){function c(h,k,l,m){a.each(f,function(){k-=parseFloat(a.curCSS(h,"padding"+this,true))||0;if(l)k-=parseFloat(a.curCSS(h,
"border"+this+"Width",true))||0;if(m)k-=parseFloat(a.curCSS(h,"margin"+this,true))||0});return k}var f=b==="Width"?["Left","Right"]:["Top","Bottom"],i=b.toLowerCase(),j={innerWidth:a.fn.innerWidth,innerHeight:a.fn.innerHeight,outerWidth:a.fn.outerWidth,outerHeight:a.fn.outerHeight};a.fn["inner"+b]=function(h){if(h===d)return j["inner"+b].call(this);return this.each(function(){a(this).css(i,c(this,h)+"px")})};a.fn["outer"+b]=function(h,k){if(typeof h!=="number")return j["outer"+b].call(this,h);return this.each(function(){a(this).css(i,
c(this,h,true,k)+"px")})}});a.extend(a.expr[":"],{data:function(e,b,c){return!!a.data(e,c[3])},focusable:function(e){var b=e.nodeName.toLowerCase(),c=a.attr(e,"tabindex");if("area"===b){b=e.parentNode;c=b.name;if(!e.href||!c||b.nodeName.toLowerCase()!=="map")return false;e=a("img[usemap=#"+c+"]")[0];return!!e&&g(e)}return(/input|select|textarea|button|object/.test(b)?!e.disabled:"a"==b?e.href||!isNaN(c):!isNaN(c))&&g(e)},tabbable:function(e){var b=a.attr(e,"tabindex");return(isNaN(b)||b>=0)&&a(e).is(":focusable")}});
a(function(){var e=document.body,b=e.appendChild(b=document.createElement("div"));a.extend(b.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0});a.support.minHeight=b.offsetHeight===100;a.support.selectstart="onselectstart"in b;e.removeChild(b).style.display="none"});a.extend(a.ui,{plugin:{add:function(e,b,c){e=a.ui[e].prototype;for(var f in c){e.plugins[f]=e.plugins[f]||[];e.plugins[f].push([b,c[f]])}},call:function(e,b,c){if((b=e.plugins[b])&&e.element[0].parentNode)for(var f=0;f<b.length;f++)e.options[b[f][0]]&&
b[f][1].apply(e.element,c)}},contains:function(e,b){return document.compareDocumentPosition?e.compareDocumentPosition(b)&16:e!==b&&e.contains(b)},hasScroll:function(e,b){if(a(e).css("overflow")==="hidden")return false;var c=b&&b==="left"?"scrollLeft":"scrollTop",f=false;if(e[c]>0)return true;e[c]=1;f=e[c]>0;e[c]=0;return f},isOverAxis:function(e,b,c){return e>b&&e<b+c},isOver:function(e,b,c,f,i,j){return a.ui.isOverAxis(e,c,i)&&a.ui.isOverAxis(b,f,j)}})}})(jQuery);
(function(a,d){if(a.cleanData){var g=a.cleanData;a.cleanData=function(b){for(var c=0,f;(f=b[c])!=null;c++)a(f).triggerHandler("remove");g(b)}}else{var e=a.fn.remove;a.fn.remove=function(b,c){return this.each(function(){if(!c)if(!b||a.filter(b,[this]).length)a("*",this).add([this]).each(function(){a(this).triggerHandler("remove")});return e.call(a(this),b,c)})}}a.widget=function(b,c,f){var i=b.split(".")[0],j;b=b.split(".")[1];j=i+"-"+b;if(!f){f=c;c=a.Widget}a.expr[":"][j]=function(h){return!!a.data(h,
b)};a[i]=a[i]||{};a[i][b]=function(h,k){arguments.length&&this._createWidget(h,k)};c=new c;c.options=a.extend(true,{},c.options);a[i][b].prototype=a.extend(true,c,{namespace:i,widgetName:b,widgetEventPrefix:a[i][b].prototype.widgetEventPrefix||b,widgetBaseClass:j},f);a.widget.bridge(b,a[i][b])};a.widget.bridge=function(b,c){a.fn[b]=function(f){var i=typeof f==="string",j=Array.prototype.slice.call(arguments,1),h=this;f=!i&&j.length?a.extend.apply(null,[true,f].concat(j)):f;if(i&&f.charAt(0)==="_")return h;
i?this.each(function(){var k=a.data(this,b),l=k&&a.isFunction(k[f])?k[f].apply(k,j):k;if(l!==k&&l!==d){h=l;return false}}):this.each(function(){var k=a.data(this,b);k?k.option(f||{})._init():a.data(this,b,new c(f,this))});return h}};a.Widget=function(b,c){arguments.length&&this._createWidget(b,c)};a.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",options:{disabled:false},_createWidget:function(b,c){a.data(c,this.widgetName,this);this.element=a(c);this.options=a.extend(true,{},this.options,
this._getCreateOptions(),b);var f=this;this.element.bind("remove."+this.widgetName,function(){f.destroy()});this._create();this._trigger("create");this._init()},_getCreateOptions:function(){return a.metadata&&a.metadata.get(this.element[0])[this.widgetName]},_create:function(){},_init:function(){},destroy:function(){this.element.unbind("."+this.widgetName).removeData(this.widgetName);this.widget().unbind("."+this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass+"-disabled ui-state-disabled")},
widget:function(){return this.element},option:function(b,c){var f=b;if(arguments.length===0)return a.extend({},this.options);if(typeof b==="string"){if(c===d)return this.options[b];f={};f[b]=c}this._setOptions(f);return this},_setOptions:function(b){var c=this;a.each(b,function(f,i){c._setOption(f,i)});return this},_setOption:function(b,c){this.options[b]=c;if(b==="disabled")this.widget()[c?"addClass":"removeClass"](this.widgetBaseClass+"-disabled ui-state-disabled").attr("aria-disabled",c);return this},
enable:function(){return this._setOption("disabled",false)},disable:function(){return this._setOption("disabled",true)},_trigger:function(b,c,f){var i=this.options[b];c=a.Event(c);c.type=(b===this.widgetEventPrefix?b:this.widgetEventPrefix+b).toLowerCase();f=f||{};if(c.originalEvent){b=a.event.props.length;for(var j;b;){j=a.event.props[--b];c[j]=c.originalEvent[j]}}this.element.trigger(c,f);return!(a.isFunction(i)&&i.call(this.element[0],c,f)===false||c.isDefaultPrevented())}}})(jQuery);
(function(a){a.widget("ui.mouse",{options:{cancel:":input,option",distance:1,delay:0},_mouseInit:function(){var d=this;this.element.bind("mousedown."+this.widgetName,function(g){return d._mouseDown(g)}).bind("click."+this.widgetName,function(g){if(true===a.data(g.target,d.widgetName+".preventClickEvent")){a.removeData(g.target,d.widgetName+".preventClickEvent");g.stopImmediatePropagation();return false}});this.started=false},_mouseDestroy:function(){this.element.unbind("."+this.widgetName)},_mouseDown:function(d){d.originalEvent=
d.originalEvent||{};if(!d.originalEvent.mouseHandled){this._mouseStarted&&this._mouseUp(d);this._mouseDownEvent=d;var g=this,e=d.which==1,b=typeof this.options.cancel=="string"?a(d.target).parents().add(d.target).filter(this.options.cancel).length:false;if(!e||b||!this._mouseCapture(d))return true;this.mouseDelayMet=!this.options.delay;if(!this.mouseDelayMet)this._mouseDelayTimer=setTimeout(function(){g.mouseDelayMet=true},this.options.delay);if(this._mouseDistanceMet(d)&&this._mouseDelayMet(d)){this._mouseStarted=
this._mouseStart(d)!==false;if(!this._mouseStarted){d.preventDefault();return true}}this._mouseMoveDelegate=function(c){return g._mouseMove(c)};this._mouseUpDelegate=function(c){return g._mouseUp(c)};a(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate);d.preventDefault();return d.originalEvent.mouseHandled=true}},_mouseMove:function(d){if(a.browser.msie&&!(document.documentMode>=9)&&!d.button)return this._mouseUp(d);if(this._mouseStarted){this._mouseDrag(d);
return d.preventDefault()}if(this._mouseDistanceMet(d)&&this._mouseDelayMet(d))(this._mouseStarted=this._mouseStart(this._mouseDownEvent,d)!==false)?this._mouseDrag(d):this._mouseUp(d);return!this._mouseStarted},_mouseUp:function(d){a(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate);if(this._mouseStarted){this._mouseStarted=false;d.target==this._mouseDownEvent.target&&a.data(d.target,this.widgetName+".preventClickEvent",
true);this._mouseStop(d)}return false},_mouseDistanceMet:function(d){return Math.max(Math.abs(this._mouseDownEvent.pageX-d.pageX),Math.abs(this._mouseDownEvent.pageY-d.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return true}})})(jQuery);
(function(a){a.ui=a.ui||{};var d=/left|center|right/,g=/top|center|bottom/,e=a.fn.position,b=a.fn.offset;a.fn.position=function(c){if(!c||!c.of)return e.apply(this,arguments);c=a.extend({},c);var f=a(c.of),i=f[0],j=(c.collision||"flip").split(" "),h=c.offset?c.offset.split(" "):[0,0],k,l,m;if(i.nodeType===9){k=f.width();l=f.height();m={top:0,left:0}}else if(i.setTimeout){k=f.width();l=f.height();m={top:f.scrollTop(),left:f.scrollLeft()}}else if(i.preventDefault){c.at="left top";k=l=0;m={top:c.of.pageY,
left:c.of.pageX}}else{k=f.outerWidth();l=f.outerHeight();m=f.offset()}a.each(["my","at"],function(){var n=(c[this]||"").split(" ");if(n.length===1)n=d.test(n[0])?n.concat(["center"]):g.test(n[0])?["center"].concat(n):["center","center"];n[0]=d.test(n[0])?n[0]:"center";n[1]=g.test(n[1])?n[1]:"center";c[this]=n});if(j.length===1)j[1]=j[0];h[0]=parseInt(h[0],10)||0;if(h.length===1)h[1]=h[0];h[1]=parseInt(h[1],10)||0;if(c.at[0]==="right")m.left+=k;else if(c.at[0]==="center")m.left+=k/2;if(c.at[1]==="bottom")m.top+=
l;else if(c.at[1]==="center")m.top+=l/2;m.left+=h[0];m.top+=h[1];return this.each(function(){var n=a(this),r=n.outerWidth(),q=n.outerHeight(),p=parseInt(a.curCSS(this,"marginLeft",true))||0,o=parseInt(a.curCSS(this,"marginTop",true))||0,v=r+p+(parseInt(a.curCSS(this,"marginRight",true))||0),w=q+o+(parseInt(a.curCSS(this,"marginBottom",true))||0),s=a.extend({},m),t;if(c.my[0]==="right")s.left-=r;else if(c.my[0]==="center")s.left-=r/2;if(c.my[1]==="bottom")s.top-=q;else if(c.my[1]==="center")s.top-=
q/2;s.left=Math.round(s.left);s.top=Math.round(s.top);t={left:s.left-p,top:s.top-o};a.each(["left","top"],function(u,x){a.ui.position[j[u]]&&a.ui.position[j[u]][x](s,{targetWidth:k,targetHeight:l,elemWidth:r,elemHeight:q,collisionPosition:t,collisionWidth:v,collisionHeight:w,offset:h,my:c.my,at:c.at})});a.fn.bgiframe&&n.bgiframe();n.offset(a.extend(s,{using:c.using}))})};a.ui.position={fit:{left:function(c,f){var i=a(window);i=f.collisionPosition.left+f.collisionWidth-i.width()-i.scrollLeft();c.left=
i>0?c.left-i:Math.max(c.left-f.collisionPosition.left,c.left)},top:function(c,f){var i=a(window);i=f.collisionPosition.top+f.collisionHeight-i.height()-i.scrollTop();c.top=i>0?c.top-i:Math.max(c.top-f.collisionPosition.top,c.top)}},flip:{left:function(c,f){if(f.at[0]!=="center"){var i=a(window);i=f.collisionPosition.left+f.collisionWidth-i.width()-i.scrollLeft();var j=f.my[0]==="left"?-f.elemWidth:f.my[0]==="right"?f.elemWidth:0,h=f.at[0]==="left"?f.targetWidth:-f.targetWidth,k=-2*f.offset[0];c.left+=
f.collisionPosition.left<0?j+h+k:i>0?j+h+k:0}},top:function(c,f){if(f.at[1]!=="center"){var i=a(window);i=f.collisionPosition.top+f.collisionHeight-i.height()-i.scrollTop();var j=f.my[1]==="top"?-f.elemHeight:f.my[1]==="bottom"?f.elemHeight:0,h=f.at[1]==="top"?f.targetHeight:-f.targetHeight,k=-2*f.offset[1];c.top+=f.collisionPosition.top<0?j+h+k:i>0?j+h+k:0}}}};if(!a.offset.setOffset){a.offset.setOffset=function(c,f){if(/static/.test(a.curCSS(c,"position")))c.style.position="relative";var i=a(c),
j=i.offset(),h=parseInt(a.curCSS(c,"top",true),10)||0,k=parseInt(a.curCSS(c,"left",true),10)||0;j={top:f.top-j.top+h,left:f.left-j.left+k};"using"in f?f.using.call(c,j):i.css(j)};a.fn.offset=function(c){var f=this[0];if(!f||!f.ownerDocument)return null;if(c)return this.each(function(){a.offset.setOffset(this,c)});return b.call(this)}}})(jQuery);(function(a){window.freebase=window.fb={mwLWTReloading:false};window.SERVER&&typeof window.SERVER==="object"&&a.extend(window.freebase,window.SERVER)})(jQuery);
(function(a,d){if(a.cookie("mwLWTReloaded"))a.cookie("mwLWTReloaded",null,{path:"/"});else{var g=0,e=0;if(d.mwLastWriteTime)e=d.mwLastWriteTime||0;if(document.cookie&&document.cookie!="")for(var b=document.cookie.split(";"),c=0,f=b.length;c<f;c++){var i=a.trim(b[c]);if(i.indexOf("mwLastWriteTime=")===0){i=decodeURIComponent(i.substring(16)).split("|");if(i.length)g=i[0]}}b=g?parseInt(g,10):-1;c=e?parseInt(e,10):-1;if(g&&e&&c<b){a.cookie("mwLWTReloaded","true",{path:"/"});d.mwLWTReloading=true;window.location.reload(true)}}})(jQuery,
window.freebase);
(function(a,d){if(!d.mwLWTReloading){if(!window.console)window.console={log:a.noop,info:a.noop,debug:a.noop,warn:a.noop,error:a.noop};d.dispatch=function(b,c,f,i){if(typeof c!=="function")return false;b=a.event.fix(b||window.event);f||(f=[]);i||(i=this);return c.apply(i,[b].concat(f))};d.get_script=function(b,c){var f=d.get_script.cache,i=f[b];if(i)if(i.state===1)i.callbacks.push(c);else i.state===4&&c();else{i=f[b]={state:0,callbacks:[c]};a.ajax({url:b,dataType:"script",beforeSend:function(){i.state=1},
success:function(){i.state=4;a.each(i.callbacks,function(j,h){h()})},error:function(){i.state=-1}})}};d.get_script.cache={};a(window).bind("fb.user.signedin",function(b,c){console.log("fb.user.signedin",c.id);d.user=c;var f=a("#nav-username a:first");if(f.length){console.log(d.user,d.user.id,d.user.name);f[0].href+=d.user.id.substring(1);var i=d.h.image_url(c.id,{maxwidth:25,maxheight:25,mode:"fillcropmid"});i=a("<img src="+i+" />");f.prepend(i)}a("#signedin").show()}).bind("fb.user.signedout",function(){console.log("fb.user.signedout");
a("#signedout").show()});var g=a.cookie("fb-account-name");if(g){var e={id:"/user/"+g,name:g};setTimeout(function(){a(window).trigger("fb.user.signedin",e)},0)}else setTimeout(function(){a(window).trigger("fb.user.signedout")},0);d.window_position=function(){var b={};if(typeof window.innerWidth=="number"){b.width=window.outerWidth;b.height=window.outerHeight;b.top=window.screenY;b.left=window.screenX}else if(document.documentElement&&(document.documentElement.clientWidth||document.documentElement.clientHeight)){b.width=
document.body.clientWidth;b.height=document.body.clientHeight;b.top=window.screenTop;b.left=window.screenLeft}return b};d.popup=function(b,c,f,i){c=c||300;f=f||300;var j=d.window_position(),h=Math.floor((j.width-c)/2)+j.left;j=Math.floor((j.height-f)/2)+j.top;if(/chrome/.test(navigator.userAgent.toLowerCase()))f+=50;c={width:c,height:f,top:j,left:h,directories:"no",location:"no",menubar:"no",resizable:"no",scrollbars:"yes",status:"no",toolbar:"no"};f=[];for(var k in c)f.push(k+"="+c[k]);return window.open(b,
i||"",f.join())};d.login_popup=function(b){b||(b=function(){window.location.reload()});var c=d.popup("/account/signin",900,600,"Freebase");if(c.opener==null)c.opener=self;window.onsignin=b;window.focus&&c.focus();return false};d.logout_popup=function(b){b||(b=function(){window.location.href="/"});var c=d.popup("/account/signout",900,600,"Freebase");if(c.opener==null)c.opener=self;window.onsignout=b;window.focus&&c.focus();return false};a(function(){var b=a("#header > #nav-utilities > .language-picker"),
c=a(".current-lang",b);a("select",b).bind("change",function(){var f=a(this).find(":selected").text();c.text(f)})});a(function(){d.suggest_options={service_defaults:{service_url:d.h.suggest_url(),service_path:"",flyout_service_url:d.h.flyout_url(),flyout_service_path:"",key:d.acre.freebase.api_key},search:function(){return a.extend({},d.suggest_options.service_defaults,{status:null,parent:"#site-search-box",align:"right",category:"object",filter:"(all without:fus)"})},_operator:function(){var b=Array.prototype.slice.call(arguments),
c=b.shift(),f=a.extend({},d.suggest_options.service_defaults,{type:b.length===1?b[0]:b,type_strict:c}),i=[c];a.each(b,function(j,h){i.push("type:"+h)});f.filter="("+i.join(" ")+")";return f},any:function(){var b=Array.prototype.slice.call(arguments);b.unshift("any");return d.suggest_options._operator.apply(null,b)},all:function(){var b=Array.prototype.slice.call(arguments);b.unshift("all");return d.suggest_options._operator.apply(null,b)},should:function(){var b=Array.prototype.slice.call(arguments);
b.unshift("should");return d.suggest_options._operator.apply(null,b)},instance:function(b){var c=a.extend({},d.suggest_options.service_defaults,{category:"instance",type:b,type_strict:d.h.is_metaweb_system_type(b)?"any":"should"}),f=["any","type:"+b,"without:fus","without:inst"];a.each(["user","domain","type"],function(i,j){if(b==="/freebase/"+j+"_profile"){f.push("type:/type/"+j);return false}});b==="/book/book_subject"&&f.push("type:/base/skosbase/skos_concept");c.filter="("+f.join(" ")+")";return c},
cotype:function(){var b=a.extend({},d.suggest_options.service_defaults,{category:"cotype"}),c=["all","type:/type/type","(not domain:/type)","(not domain:/freebase)","(any (not domain:/common) (any type:/common/topic type:/common/uri_template type:/common/uri_property))"];d.user?c.push("(any without:hidden source:"+d.user.id+")"):c.push("without:hidden");b.filter="("+c.join(" ")+")";if(d.acre.freebase.googleapis_url)b.mql_filter=[{"/freebase/type_hints/enumeration":{value:true,optional:"forbidden"},
"/freebase/type_hints/mediator":{value:true,optional:"forbidden"}}];return b},included_type:function(){return d.suggest_options.cotype()},expected_type:function(){var b=a.extend({},d.suggest_options.service_defaults,{category:"expected_type"}),c=["all","type:/type/type"];d.user?c.push("(any without:hidden source:"+d.user.id+")"):c.push("without:hidden");b.filter="("+c.join(" ")+")";return b},delegate_property:function(){var b=a.extend({},d.suggest_options.service_defaults,{type:"/type/property",type_strict:"any"}),
c=["all","type:/type/property","(not domain:/type)"];d.user?c.push("(any without:hidden source:"+d.user.id+")"):c.push("without:hidden");b.filter="("+c.join(" ")+")";return b}}});a(function(){var b=a("#SearchBox .SearchBox-input,#fb-search-input"),c=a("#fb-search");b.suggest(d.suggest_options.search());var f=a("#site-search-label"),i=a("#site-search-box .fbs-pane");b.bind("fb-select",function(j,h){window.location=d.h.fb_url(h.id);return false}).bind("fb-pane-show",function(){f.html("<span>Select an item from the list</span>").removeClass("loading")}).bind("fb-textchange",
function(){a.trim(b.val())===""?f.html("<span>Start typing to get some suggestions</span>").removeClass("loading"):f.html("<span>Searching...</span>").addClass("loading")}).bind("fb-error",function(){f.html("<span>Sorry, something went wrong. Please try again later</span>").removeClass("loading")}).focus(function(){if(!f.is(":visible")){a("#site-search-label").slideDown("fast");c.addClass("active")}}).blur(function(){if(!i.is(":visible")&&f.is(":visible")){a("#site-search-label").slideUp("fast");
c.removeClass("active")}});a(".SearchBox-form").submit(function(){return a.trim(a("#fb-search-input").val()).length==0?false:true});a("input, textarea").placeholder()});d.disable=function(b){a(b).attr("disabled","disabled").addClass("disabled")};d.enable=function(b){a(b).removeAttr("disabled").removeClass("disabled")};d.lang_select=function(b,c){if(c==="/lang/en"){a(this).removeAttr("name");if(!a(":input[name]",this.form).length){window.location=a(this.form).attr("action");return}}this.form.submit()};
d.edit_lang_select=function(b,c){setTimeout(function(){a(window).trigger("fb.edit.lang.select",c)},0)};d.devbar={div:a("#devbar"),touch:function(){/\.(freebase|sandbox\-freebase)\.com$/.test(d.acre.request.server_name)?a.ajax({url:d.acre.freebase.service_url+"/api/service/touch",dataType:"jsonp"}):a.ajax({url:"/acre/touch"});return false},txn_ids:[],txn:function(){return d.devbar.view_txn(this.href,d.devbar.txn_ids)},view_txn:function(b,c){if(c&&c.length)window.location=b+"?"+a.param({tid:c},true);
return false},ajaxComplete:function(b){if(b&&b.readyState===4)(b=b.getResponseHeader("x-metaweb-tid"))&&d.devbar.txn_ids.push(b)},init:function(){a("#signedin").hover(function(){a("#user-controls").fadeIn();a(this).addClass("active")},function(){a("#user-controls").fadeOut();a(this).removeClass("active")});a("#devbar-touch > a").click(d.devbar.touch);d.tid&&d.devbar.txn_ids.push(d.tid);a("#devbar-txn > a").click(d.devbar.txn);a.ajaxSetup({complete:d.devbar.ajaxComplete})}};d.devbar.init()}})(jQuery,
window.freebase);
(function(a,d){var g=d.h={type:a.type||function(){var e={};"Boolean Number String Function Array Date RegExp Object".split(" ").forEach(function(b){e["[object "+b+"]"]=b.toLowerCase()});return function(b){return b==null?String(b):e[Object.prototype.toString.call(b)]||"object"}}(),parse_params:function(e){if(a.isArray(e)){var b={};a.each(e,function(c,f){b[f[0]]=f[1]});return b}return e},build_url:function(e){if(e&&e.indexOf("://")===-1)throw"Host must contain scheme: "+e;var b=e||"",c,f;if(arguments.length>
1){c=Array.prototype.slice.call(arguments);c.shift();for(var i=[],j=0,h=c.length;j<h;j++){var k=c[j];if(g.type(k)==="string")i.push(k);else{f={};for(j=j;j<h;j++)f=a.extend(f,g.parse_params(c[j]));break}}c=i.join("")}if(c&&c.indexOf("/")!==0)throw"Path must begin with a '/': "+c;if(c)b+=c;if(b==="")b="/";a.isEmptyObject(f)||(b+="?"+a.param(f,true));return b},fb_url:function(){var e=Array.prototype.slice.call(arguments);e.unshift(null);d.lang!=="/lang/en"&&e.push({lang:d.lang});return g.build_url.apply(null,
e)},ajax_url:function(){var e=Array.prototype.slice.call(arguments);e.unshift("/ajax");return g.reentrant_url.apply(null,e)},static_url:function(){var e=Array.prototype.slice.call(arguments);e.unshift("/static");return g.reentrant_url.apply(null,e)},reentrant_url:function(e,b){b=g.resolve_reentrant_path(b);b=b.replace(/^\/\//,e+"/");var c=Array.prototype.slice.call(arguments,2);c.unshift(b);c.unshift(null);return g.build_url.apply(null,c)},resolve_reentrant_path:function(e){e=e||"";if(e.indexOf("//")==
0)return e;if(e.indexOf("lib/")===0)return d.acre.current_script.app.path+e.substring(3);else{if(e&&e[0]!="/")e="/"+e;return d.acre.request.script.app.path+e}},suggest_url:function(){return d.acre.freebase.googleapis_url?g.build_url(d.acre.freebase.googleapis_url,"/search"):g.legacy_fb_url("/private/suggest")},flyout_url:function(){return g.legacy_fb_url("/private/flyout")},legacy_fb_url:function(){var e=Array.prototype.slice.call(arguments),b=d.acre.freebase.site_host.replace(/^(https?\:\/\/)([^\.]+)\./,
"$1www.").replace(":"+d.acre.request.server_port,"");e.unshift(b);return g.build_url.apply(null,e)},fb_api_url:function(){var e=Array.prototype.slice.call(arguments);e.unshift(d.acre.freebase.service_url);return g.build_url.apply(null,e)},fb_googleapis_url:function(){if(d.acre.freebase.googleapis_url){var e=Array.prototype.slice.call(arguments);e.unshift(d.acre.freebase.googleapis_url);return g.build_url.apply(null,e)}throw"fb.acre.freebase.googleapis_url is not defined";},wiki_url:function(){var e=
Array.prototype.slice.call(arguments);e.unshift("http://wiki.freebase.com","/wiki/");return g.build_url.apply(null,e)},lib_base_url:function(e){e=d.acre.metadata.libs[e];return e.base_url+e.version},image_url:function(e,b){return d.acre.freebase.imgurl(e,b.maxwidth,b.maxheight,b.mode,b.pad,b.errorid)},is_metaweb_system_type:function(e){return e.indexOf("/type/")===0||e.indexOf("/common/")===0&&e!=="/common/topic"||e.indexOf("/freebase/")===0&&e.indexOf("_profile")===e.length-8}}})(jQuery,window.freebase);
(function(a,d){var g=d.permission={init:function(){if(d.user){var e=d.c;e&&e.id&&a.ajax({url:d.h.ajax_url("lib/permission/has_permission"),data:{id:e.id,user_id:d.user.id},dataType:"json",success:function(b){g.has_permission=b.result&&b.result.has_permission===true;console.log("has_permission",g.has_permission);a(window).trigger("fb.permission.has_permission",g.has_permission)}})}}};a(window).bind("fb.user.signedin",g.init);a(window).bind("fb.permission.has_permission",function(e,b){b&&a(".edit").show()})})(jQuery,
window.freebase);
(function(a,d){d.require("dojo.date.stamp");d.require("dojo.date.locale");d.require("dojo.number");var g,e=false,b={"long":1,"short":1,full:1,medium:1},c=/^\d{4}$/,f=/^\d{4}\-\d{2}$/,i=/L/g,j=window.i18n={normalize_pattern:function(h){return h.replace(i,"M")},ize:function(h){j.ize_datetime(h);j.ize_number(h)},ize_datetime:function(h){h=a("time",h).each(function(){var k=a(this),l=k.attr("datetime");if(l){var m=k.attr("data-format");l=j.datetime(l,m);k.text(l)}});e&&h.attr("dir","rtl");h.css("visibility",
"visible")},ize_datetime_input:function(h){h=a(h);var k=h.val();if(k!==""){k=j.datetime(k);h.val(k)}e&&h.attr("dir","rtl")},datetime:function(h,k){var l=d.date.stamp.fromISOString(h),m={selector:"date"};if(k)if(b[k])m.formatLength=k;else m.datePattern=g["dateFormatItem-"+k];else m.datePattern=c.test(h)?g["dateFormatItem-y"]:f.test(h)?g["dateFormatItem-yMMM"]:g["dateFormat-long"];if(m.datePattern)m.datePattern=j.normalize_pattern(m.datePattern);return d.date.locale.format(l,m)},ize_number:function(h){h=
a(".number",h).each(function(){var k=a(this),l=k.attr("data-value");if(l!=null){l=j.number(l);k.text(l)}});e&&h.attr("dir","rtl");h.css("visibility","visible")},ize_number_input:function(h){h=a(h);var k=h.val();if(k!==""){k=j.number(k);h.val(k)}e&&h.attr("dir","rtl")},number:function(h){return d.number.format(h)},_get_edit_script:function(h,k){j._get_edit_script.loaded?k():a.getScript(h+"/i18n-edit.mf.js",function(){j._get_edit_script.loaded=1;k()})},text_edit:function(h,k,l,m,n){j._get_edit_script(k,
function(){j.edit.text_edit_begin(k,l,m,n)});return false}};d.ready(function(){if(d.locale==="ar"||d.locale==="he")e=true;g=d.date.locale._getGregorianBundle();j.ize()})})(jQuery,dojo);