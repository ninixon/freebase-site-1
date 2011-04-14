
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
(function(b){b.fn.collapse_module=function(f){var c=b(f);f=b(this);var a=f.get(0),e=b(".trigger:first",a),g=b(".module-section",a),i=f.slice(1),k=c.css("margin-left");e.click(function(){if(e.hasClass("collapsed"))c.animate({marginLeft:k},function(){g.slideDown(function(){e.removeClass("collapsed")});i.fadeIn()});else{i.fadeOut();g.slideUp(function(){c.animate({marginLeft:0});e.addClass("collapsed")})}return false})}})(jQuery);
(function(b){b.fn.collapse_module=function(f){var c=b(f);f=b(this);var a=f.get(0),e=b(".trigger:first",a),g=b(".module-section",a),i=f.slice(1),k=c.css("margin-left");e.click(function(){if(e.hasClass("collapsed"))c.animate({marginLeft:k},function(){g.slideDown(function(){e.removeClass("collapsed")});i.fadeIn()});else{i.fadeOut();g.slideUp(function(){c.animate({marginLeft:0});e.addClass("collapsed")})}return false})}})(jQuery);
(function(b,f){function c(a){return!b(a).parents().andSelf().filter(function(){return b.curCSS(this,"visibility")==="hidden"||b.expr.filters.hidden(this)}).length}b.ui=b.ui||{};if(!b.ui.version){b.extend(b.ui,{version:"1.8.10",keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,
PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91}});b.fn.extend({_focus:b.fn.focus,focus:function(a,e){return typeof a==="number"?this.each(function(){var g=this;setTimeout(function(){b(g).focus();e&&e.call(g)},a)}):this._focus.apply(this,arguments)},scrollParent:function(){var a;a=b.browser.msie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(b.curCSS(this,
"position",1))&&/(auto|scroll)/.test(b.curCSS(this,"overflow",1)+b.curCSS(this,"overflow-y",1)+b.curCSS(this,"overflow-x",1))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(b.curCSS(this,"overflow",1)+b.curCSS(this,"overflow-y",1)+b.curCSS(this,"overflow-x",1))}).eq(0);return/fixed/.test(this.css("position"))||!a.length?b(document):a},zIndex:function(a){if(a!==f)return this.css("zIndex",a);if(this.length){a=b(this[0]);for(var e;a.length&&a[0]!==document;){e=a.css("position");
if(e==="absolute"||e==="relative"||e==="fixed"){e=parseInt(a.css("zIndex"),10);if(!isNaN(e)&&e!==0)return e}a=a.parent()}}return 0},disableSelection:function(){return this.bind((b.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(a){a.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}});b.each(["Width","Height"],function(a,e){function g(l,o,p,q){b.each(i,function(){o-=parseFloat(b.curCSS(l,"padding"+this,true))||0;if(p)o-=parseFloat(b.curCSS(l,
"border"+this+"Width",true))||0;if(q)o-=parseFloat(b.curCSS(l,"margin"+this,true))||0});return o}var i=e==="Width"?["Left","Right"]:["Top","Bottom"],k=e.toLowerCase(),n={innerWidth:b.fn.innerWidth,innerHeight:b.fn.innerHeight,outerWidth:b.fn.outerWidth,outerHeight:b.fn.outerHeight};b.fn["inner"+e]=function(l){if(l===f)return n["inner"+e].call(this);return this.each(function(){b(this).css(k,g(this,l)+"px")})};b.fn["outer"+e]=function(l,o){if(typeof l!=="number")return n["outer"+e].call(this,l);return this.each(function(){b(this).css(k,
g(this,l,true,o)+"px")})}});b.extend(b.expr[":"],{data:function(a,e,g){return!!b.data(a,g[3])},focusable:function(a){var e=a.nodeName.toLowerCase(),g=b.attr(a,"tabindex");if("area"===e){e=a.parentNode;g=e.name;if(!a.href||!g||e.nodeName.toLowerCase()!=="map")return false;a=b("img[usemap=#"+g+"]")[0];return!!a&&c(a)}return(/input|select|textarea|button|object/.test(e)?!a.disabled:"a"==e?a.href||!isNaN(g):!isNaN(g))&&c(a)},tabbable:function(a){var e=b.attr(a,"tabindex");return(isNaN(e)||e>=0)&&b(a).is(":focusable")}});
b(function(){var a=document.body,e=a.appendChild(e=document.createElement("div"));b.extend(e.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0});b.support.minHeight=e.offsetHeight===100;b.support.selectstart="onselectstart"in e;a.removeChild(e).style.display="none"});b.extend(b.ui,{plugin:{add:function(a,e,g){a=b.ui[a].prototype;for(var i in g){a.plugins[i]=a.plugins[i]||[];a.plugins[i].push([e,g[i]])}},call:function(a,e,g){if((e=a.plugins[e])&&a.element[0].parentNode)for(var i=0;i<e.length;i++)a.options[e[i][0]]&&
e[i][1].apply(a.element,g)}},contains:function(a,e){return document.compareDocumentPosition?a.compareDocumentPosition(e)&16:a!==e&&a.contains(e)},hasScroll:function(a,e){if(b(a).css("overflow")==="hidden")return false;var g=e&&e==="left"?"scrollLeft":"scrollTop",i=false;if(a[g]>0)return true;a[g]=1;i=a[g]>0;a[g]=0;return i},isOverAxis:function(a,e,g){return a>e&&a<e+g},isOver:function(a,e,g,i,k,n){return b.ui.isOverAxis(a,g,k)&&b.ui.isOverAxis(e,i,n)}})}})(jQuery);
(function(b){b.widget("ui.slider",b.ui.mouse,{widgetEventPrefix:"slide",options:{animate:false,distance:0,max:100,min:0,orientation:"horizontal",range:false,step:1,value:0,values:null},_create:function(){var f=this,c=this.options;this._mouseSliding=this._keySliding=false;this._animateOff=true;this._handleIndex=null;this._detectOrientation();this._mouseInit();this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget ui-widget-content ui-corner-all");c.disabled&&this.element.addClass("ui-slider-disabled ui-disabled");
this.range=b([]);if(c.range){if(c.range===true){this.range=b("<div></div>");if(!c.values)c.values=[this._valueMin(),this._valueMin()];if(c.values.length&&c.values.length!==2)c.values=[c.values[0],c.values[0]]}else this.range=b("<div></div>");this.range.appendTo(this.element).addClass("ui-slider-range");if(c.range==="min"||c.range==="max")this.range.addClass("ui-slider-range-"+c.range);this.range.addClass("ui-widget-header")}b(".ui-slider-handle",this.element).length===0&&b("<a href='#'></a>").appendTo(this.element).addClass("ui-slider-handle");
if(c.values&&c.values.length)for(;b(".ui-slider-handle",this.element).length<c.values.length;)b("<a href='#'></a>").appendTo(this.element).addClass("ui-slider-handle");this.handles=b(".ui-slider-handle",this.element).addClass("ui-state-default ui-corner-all");this.handle=this.handles.eq(0);this.handles.add(this.range).filter("a").click(function(a){a.preventDefault()}).hover(function(){c.disabled||b(this).addClass("ui-state-hover")},function(){b(this).removeClass("ui-state-hover")}).focus(function(){if(c.disabled)b(this).blur();
else{b(".ui-slider .ui-state-focus").removeClass("ui-state-focus");b(this).addClass("ui-state-focus")}}).blur(function(){b(this).removeClass("ui-state-focus")});this.handles.each(function(a){b(this).data("index.ui-slider-handle",a)});this.handles.keydown(function(a){var e=true,g=b(this).data("index.ui-slider-handle"),i,k,n;if(!f.options.disabled){switch(a.keyCode){case b.ui.keyCode.HOME:case b.ui.keyCode.END:case b.ui.keyCode.PAGE_UP:case b.ui.keyCode.PAGE_DOWN:case b.ui.keyCode.UP:case b.ui.keyCode.RIGHT:case b.ui.keyCode.DOWN:case b.ui.keyCode.LEFT:e=
false;if(!f._keySliding){f._keySliding=true;b(this).addClass("ui-state-active");i=f._start(a,g);if(i===false)return}break}n=f.options.step;i=f.options.values&&f.options.values.length?(k=f.values(g)):(k=f.value());switch(a.keyCode){case b.ui.keyCode.HOME:k=f._valueMin();break;case b.ui.keyCode.END:k=f._valueMax();break;case b.ui.keyCode.PAGE_UP:k=f._trimAlignValue(i+(f._valueMax()-f._valueMin())/5);break;case b.ui.keyCode.PAGE_DOWN:k=f._trimAlignValue(i-(f._valueMax()-f._valueMin())/5);break;case b.ui.keyCode.UP:case b.ui.keyCode.RIGHT:if(i===
f._valueMax())return;k=f._trimAlignValue(i+n);break;case b.ui.keyCode.DOWN:case b.ui.keyCode.LEFT:if(i===f._valueMin())return;k=f._trimAlignValue(i-n);break}f._slide(a,g,k);return e}}).keyup(function(a){var e=b(this).data("index.ui-slider-handle");if(f._keySliding){f._keySliding=false;f._stop(a,e);f._change(a,e);b(this).removeClass("ui-state-active")}});this._refreshValue();this._animateOff=false},destroy:function(){this.handles.remove();this.range.remove();this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all").removeData("slider").unbind(".slider");
this._mouseDestroy();return this},_mouseCapture:function(f){var c=this.options,a,e,g,i,k;if(c.disabled)return false;this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()};this.elementOffset=this.element.offset();a=this._normValueFromMouse({x:f.pageX,y:f.pageY});e=this._valueMax()-this._valueMin()+1;i=this;this.handles.each(function(n){var l=Math.abs(a-i.values(n));if(e>l){e=l;g=b(this);k=n}});if(c.range===true&&this.values(1)===c.min){k+=1;g=b(this.handles[k])}if(this._start(f,
k)===false)return false;this._mouseSliding=true;i._handleIndex=k;g.addClass("ui-state-active").focus();c=g.offset();this._clickOffset=!b(f.target).parents().andSelf().is(".ui-slider-handle")?{left:0,top:0}:{left:f.pageX-c.left-g.width()/2,top:f.pageY-c.top-g.height()/2-(parseInt(g.css("borderTopWidth"),10)||0)-(parseInt(g.css("borderBottomWidth"),10)||0)+(parseInt(g.css("marginTop"),10)||0)};this.handles.hasClass("ui-state-hover")||this._slide(f,k,a);return this._animateOff=true},_mouseStart:function(){return true},
_mouseDrag:function(f){var c=this._normValueFromMouse({x:f.pageX,y:f.pageY});this._slide(f,this._handleIndex,c);return false},_mouseStop:function(f){this.handles.removeClass("ui-state-active");this._mouseSliding=false;this._stop(f,this._handleIndex);this._change(f,this._handleIndex);this._clickOffset=this._handleIndex=null;return this._animateOff=false},_detectOrientation:function(){this.orientation=this.options.orientation==="vertical"?"vertical":"horizontal"},_normValueFromMouse:function(f){var c;
if(this.orientation==="horizontal"){c=this.elementSize.width;f=f.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)}else{c=this.elementSize.height;f=f.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)}c=f/c;if(c>1)c=1;if(c<0)c=0;if(this.orientation==="vertical")c=1-c;f=this._valueMax()-this._valueMin();return this._trimAlignValue(this._valueMin()+c*f)},_start:function(f,c){var a={handle:this.handles[c],value:this.value()};if(this.options.values&&this.options.values.length){a.value=
this.values(c);a.values=this.values()}return this._trigger("start",f,a)},_slide:function(f,c,a){var e;if(this.options.values&&this.options.values.length){e=this.values(c?0:1);if(this.options.values.length===2&&this.options.range===true&&(c===0&&a>e||c===1&&a<e))a=e;if(a!==this.values(c)){e=this.values();e[c]=a;f=this._trigger("slide",f,{handle:this.handles[c],value:a,values:e});this.values(c?0:1);f!==false&&this.values(c,a,true)}}else if(a!==this.value()){f=this._trigger("slide",f,{handle:this.handles[c],
value:a});f!==false&&this.value(a)}},_stop:function(f,c){var a={handle:this.handles[c],value:this.value()};if(this.options.values&&this.options.values.length){a.value=this.values(c);a.values=this.values()}this._trigger("stop",f,a)},_change:function(f,c){if(!this._keySliding&&!this._mouseSliding){var a={handle:this.handles[c],value:this.value()};if(this.options.values&&this.options.values.length){a.value=this.values(c);a.values=this.values()}this._trigger("change",f,a)}},value:function(f){if(arguments.length){this.options.value=
this._trimAlignValue(f);this._refreshValue();this._change(null,0)}return this._value()},values:function(f,c){var a,e,g;if(arguments.length>1){this.options.values[f]=this._trimAlignValue(c);this._refreshValue();this._change(null,f)}if(arguments.length)if(b.isArray(arguments[0])){a=this.options.values;e=arguments[0];for(g=0;g<a.length;g+=1){a[g]=this._trimAlignValue(e[g]);this._change(null,g)}this._refreshValue()}else return this.options.values&&this.options.values.length?this._values(f):this.value();
else return this._values()},_setOption:function(f,c){var a,e=0;if(b.isArray(this.options.values))e=this.options.values.length;b.Widget.prototype._setOption.apply(this,arguments);switch(f){case "disabled":if(c){this.handles.filter(".ui-state-focus").blur();this.handles.removeClass("ui-state-hover");this.handles.attr("disabled","disabled");this.element.addClass("ui-disabled")}else{this.handles.removeAttr("disabled");this.element.removeClass("ui-disabled")}break;case "orientation":this._detectOrientation();
this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation);this._refreshValue();break;case "value":this._animateOff=true;this._refreshValue();this._change(null,0);this._animateOff=false;break;case "values":this._animateOff=true;this._refreshValue();for(a=0;a<e;a+=1)this._change(null,a);this._animateOff=false;break}},_value:function(){var f=this.options.value;return f=this._trimAlignValue(f)},_values:function(f){var c,a;if(arguments.length){c=this.options.values[f];
return c=this._trimAlignValue(c)}else{c=this.options.values.slice();for(a=0;a<c.length;a+=1)c[a]=this._trimAlignValue(c[a]);return c}},_trimAlignValue:function(f){if(f<=this._valueMin())return this._valueMin();if(f>=this._valueMax())return this._valueMax();var c=this.options.step>0?this.options.step:1,a=(f-this._valueMin())%c;alignValue=f-a;if(Math.abs(a)*2>=c)alignValue+=a>0?c:-c;return parseFloat(alignValue.toFixed(5))},_valueMin:function(){return this.options.min},_valueMax:function(){return this.options.max},
_refreshValue:function(){var f=this.options.range,c=this.options,a=this,e=!this._animateOff?c.animate:false,g,i={},k,n,l,o;if(this.options.values&&this.options.values.length)this.handles.each(function(p){g=(a.values(p)-a._valueMin())/(a._valueMax()-a._valueMin())*100;i[a.orientation==="horizontal"?"left":"bottom"]=g+"%";b(this).stop(1,1)[e?"animate":"css"](i,c.animate);if(a.options.range===true)if(a.orientation==="horizontal"){if(p===0)a.range.stop(1,1)[e?"animate":"css"]({left:g+"%"},c.animate);
if(p===1)a.range[e?"animate":"css"]({width:g-k+"%"},{queue:false,duration:c.animate})}else{if(p===0)a.range.stop(1,1)[e?"animate":"css"]({bottom:g+"%"},c.animate);if(p===1)a.range[e?"animate":"css"]({height:g-k+"%"},{queue:false,duration:c.animate})}k=g});else{n=this.value();l=this._valueMin();o=this._valueMax();g=o!==l?(n-l)/(o-l)*100:0;i[a.orientation==="horizontal"?"left":"bottom"]=g+"%";this.handle.stop(1,1)[e?"animate":"css"](i,c.animate);if(f==="min"&&this.orientation==="horizontal")this.range.stop(1,
1)[e?"animate":"css"]({width:g+"%"},c.animate);if(f==="max"&&this.orientation==="horizontal")this.range[e?"animate":"css"]({width:100-g+"%"},{queue:false,duration:c.animate});if(f==="min"&&this.orientation==="vertical")this.range.stop(1,1)[e?"animate":"css"]({height:g+"%"},c.animate);if(f==="max"&&this.orientation==="vertical")this.range[e?"animate":"css"]({height:100-g+"%"},{queue:false,duration:c.animate})}}});b.extend(b.ui.slider,{version:"1.8.10"})})(jQuery);
(function(b,f){f.filters={init_domain_type_property_filter:function(c){b(":text[name=domain], :text[name=type], :text[name=property]",c).suggest({service_url:f.h.legacy_fb_url(),type:["/type/domain","/type/type","/type/property"],type_strict:"any"}).bind("fb-select",function(a,e){var g=b(this);g.val(e.id);var i=e["n:type"].id;if(i==="/type/domain")g.attr("name","domain");else if(i==="/type/type")g.attr("name","type");else i==="/type/property"&&g.attr("name","property");this.form.submit()})},init_limit_slider_filter:function(c,
a,e,g,i){var k=b(".limit-slider",c),n=b(".current-limit",c),l=b("input[name=limit]",c),o=parseInt(l.val()||a,10);k.slider({value:o,min:e||1,max:g||100,step:i||10,slide:function(p,q){n.css({color:"#f71"});n.text(q.value)},stop:function(p,q){n.css({color:"#333"});l.val(q.value);q.value!=o&&l[0].form.submit()}})}};b(function(){b(".filter-form-trigger").click(function(){var c=b(this).siblings(".filter-form");c.is(":hidden")?c.slideDown(function(){b(":text:first",c).focus()}):c.slideUp()})})})(jQuery,
window.freebase);
(function(b){var f=function(){return typeof window.innerWidth!="undefined"?function(){return{w:window.innerWidth,h:window.innerHeight}}:typeof document.documentElement!="undefined"&&typeof document.documentElement.clientWidth!="undefined"&&document.documentElement.clientWidth!=0?function(){return{w:document.documentElement.clientWidth,h:document.documentElement.clientHeight}}:function(){return{w:document.getElementsByTagName("body")[0].clientWidth,h:document.getElementsByTagName("body")[0].clientHeight}}}();window.kbs=
function(c){b(".kbs.current",c).removeClass("current");var a=b(".domain-section:first",c),e=b(".domain-section:last",c),g=this.scroll_to=function(d){var h=b(document).scrollTop();b(document).height();var j=f().h;j=h+j;var m=d.offset().top;d=m+d.height();if(m<h)b(document).scrollTop(m);else d>j&&b(document).scrollTop(h+(d-j))},i=this.get_current=function(){return b(".kbs.current:first",c)},k=this.set_next=function(d,h,j){if(h.length){d.removeClass("current");h.addClass("current");j||g(h)}},n=this.next_domain=
function(d){var h=i(),j=l(h);if(j){j=j.find(".kbs:first");k(h,j,d)}},l=this._next_domain=function(d){if(!(d&&d.length))return b(".domain-section:first",c);d=d.closest(".domain-section");return!d.length||d[0]===e[0]?a:d.next(".domain-section")},o=this.prev_domain=function(){var d=i(),h=p(d);if(h){h=h.find(".kbs:first");k(d,h)}},p=this._prev_domain=function(d){if(!(d&&d.length))return b(".domain-section:last",c);var h=d.closest(".domain-section");if(d.closest(".property-section").length||d.closest(".type-section").length)return h;
return!h.length||h[0]===a[0]?e:h.prev(".domain-section")},q=this.next_type=function(){var d=i(),h=u(d);if(h){h=h.find(".kbs:first");k(d,h)}},u=this._next_type=function(d){if(!(d&&d.length))return b(".type-section:first",c);var h=d.closest(".domain-section");d=d.closest(".type-section");d=d.length?d.next(".type-section"):h.find(".type-section:first");if(!(d&&d.length)){var j=l(h);if(j)for(;j.get(0)!==h.get(0);){d=j.find(".type-section:first");if(d.length)break;j=l(j)}}return d},r=this.prev_type=function(){var d=
i(),h=t(d);if(h){h=h.find(".kbs:first");k(d,h)}},t=this._prev_type=function(d){if(!(d&&d.length))return b(".type-section:last",c);var h=d.closest(".domain-section"),j=d.closest(".type-section");if(d.closest(".property-section").length)return j;var m;if(j.length)m=j.prev(".type-section");if(!(m&&m.length))if(d=p(h))for(;d.get(0)!==h.get(0);){m=d.find(".type-section:last");if(m.length)break;d=p(d)}return m},x=this.next_prop=function(){var d=i(),h=w(d);if(h){h=h.find(".kbs:first");k(d,h)}},w=this._next_prop=
function(d){if(!(d&&d.length))return b(".property-section:first",c);var h=d.closest(".domain-section"),j=d.closest(".type-section"),m=d.closest(".property-section");h=m.length?m.next(".property-section"):j.length?j.find(".property-section:first"):h.find(".property-section:first");if(!(h&&h.length))if(d=u(d))for(;d.get(0)!==j.get(0);){h=d.find(".property-section:first");if(h.length)break;if(j.get(0)==null)j=d;d=u(d)}return h},z=this.prev_prop=function(){var d=i(),h=y(d);if(h){h=h.find(".kbs:first");
k(d,h)}},y=this._prev_prop=function(d){if(!(d&&d.length))return b(".property-section:last",c);var h=d.closest(".domain-section"),j=d.closest(".type-section"),m=d.closest(".property-section");if(d.closest(".data-section").length)return m;var s;if(m.length)s=m.prev(".property-section");if(!(s&&s.length))if(r=j.length?t(j):t(h))for(;r.get(0)!==j.get(0);){s=r.find(".property-section:last");if(s.length)break;if(j.get(0)==null)j=r;r=t(r)}return s};this.next=function(){var d=i(),h=this._next(d);h&&k(d,h)};
this._next=function(d){if(!(d&&d.length))return b(".domain-section:first .kbs:first",c);var h=d.closest(".domain-section"),j=d.closest(".type-section"),m=d.closest(".property-section");if(d.closest(".data-section").length){d=d.next(".kbs");if(d.length)return d;d=m.next(".property-section").find(".kbs:first");if(d.length)return d;d=j.next(".type-section").find(".kbs:first")}else if(m.length){d=m.find(".data-section:first .kbs:first");if(d.length)return d;d=m.next(".property-section").find(".kbs:first");
if(d.length)return d;d=j.next(".type-section").find(".kbs:first")}else if(j.length){d=j.find(".property-section:first .kbs:first");if(d.length)return d;d=j.next(".type-section").find(".kbs:first")}else d=h.find(".type-section:first .kbs:first");if(d.length)return d;return h.get(0)===e.get(0)?a.find(".kbs:first"):h.next(".domain-section").find(".kbs:first")};this.prev=function(){var d=i(),h=this._prev(d);h&&k(d,h)};this._prev=function(d){if(!(d&&d.length)){d=b(".data-section:last .kbs:last",c);d.length||
(d=b(".property-section:last .kbs:first",c));d.length||(d=b(".type-section:last .kbs:first",c));d.length||(d=b(".domain-section:last .kbs:first",c));return d}var h=d.closest(".domain-section"),j=d.closest(".type-section"),m=d.closest(".property-section");if(d.closest(".data-section").length){d=d.prev(".kbs");if(d.length)return d;return m.find(".kbs:first")}else if(m.length){d=m.prev(".property-section").find(".kbs:last");if(d.length)return d;return j.find(".kbs:first")}else if(j.length){d=j.prev(".type-section").find(".kbs:last");
if(d.length)return d;return h.find(".kbs:first")}else return h.get(0)===a.get(0)?e.find(".kbs:last"):h.prev(".domain-section").find(".kbs:last")};this.edit=function(){this.get_current().trigger("edit")};var v=this;b(document).unbind(".kbs").bind("keydown.kbs",function(d){var h=d.target;if(h==document.body||h==document||h==window||h==b("html")[0]){h=d.keyCode;if(h===68)d.shiftKey?o():n();else if(h===84)d.shiftKey?r():q();else if(h===80)d.shiftKey?z():x();else if(h===74)v.next();else if(h===75)v.prev();
else h===69&&v.edit()}})}})(jQuery);
(function(b,f){var c=window.propbox={init:function(a,e){e=b.extend({lang:"/lang/en"},e);if(!e.base_url)throw new Error("base_url required in propbox options");if(!e.id)throw new Error("topic id required in propbox options");if(!e.lang)throw new Error("lang required in propbox options");c.options=e;c.kbs=new f(a);c.kbs.set_next(c.kbs.get_current(),b(".kbs:visible:first",a,true));b(".kbs",a).live("click",function(){var g=c.kbs.get_current();c.kbs.set_next(g,b(this),true)}).live("edit",function(){b(this).find(".submenu:first li:first a").click()}).hover(c.row_menu_hoverover,
c.row_menu_hoverout)},row_menu_hoverover:function(){var a=b(this);c.row_menu_hoverover.timeout=setTimeout(function(){a.addClass("row-hover")},300)},row_menu_hoverout:function(){clearTimeout(c.row_menu_hoverover.timeout);b(this).removeClass("row-hover")},get_script:function(a,e){var g=c.get_script.cache;if(!g)g=c.get_script.cache={};var i=g[a];if(i)if(i.state===1)i.callbacks.push(e);else i.state===4&&e();else{i=g[a]={state:0,callbacks:[e]};b.ajax({url:c.options.base_url+a,dataType:"script",beforeSend:function(){i.state=
1},success:function(){i.state=4;b.each(i.callbacks,function(k,n){n()})},error:function(){i.state=-1}})}},_dojo_loaded:false,_dojo_version:"1.6.0",get_dojo:function(a,e){e()},prop_edit:function(a){b(a).parents(".property-section").find(".data-section .data-row:first .nicemenu:first .headmenu:first a").click();return false},prop_add:function(a){var e=b(a).parents(".property-section");if(e.is(".editing"))return false;e.addClass("editing");c.get_dojo(c.options.lang,function(){c.get_script("/propbox-edit.mf.js",
function(){c.edit.prop_add_begin(e)})});return false},value_edit:function(a){console.log("value_edit");var e=b(a).parents(".data-row:first"),g=e.parents(".property-section");if(g.is(".editing"))return false;g.addClass("editing");c.get_dojo(c.options.lang,function(){c.get_script("/propbox-edit.mf.js",function(){c.edit.value_edit_begin(g,e)})});return false},value_delete:function(a){if(b(a).parents(".data-row:first").parents(".property-section").is(".editing"))return false;return false}}})(jQuery,window.kbs);
(function(b,f,c){var a=f.topic={init:function(){c.init("#topic-data",{id:f.c.id,base_url:f.h.ajax_url("lib/propbox"),lang:f.lang||"/lang/en",suggest:{service_url:f.h.legacy_fb_url(),service_path:"/private/suggest",flyout_service_url:f.h.legacy_fb_url(),flyout_service_path:"/private/flyout",mqlread_url:f.h.fb_api_url("/api/service/mqlread"),category:"object",type:"/common/topic",status:["","Searching...","Select an item from the list:"]}});b(".column.nav > .module").collapse_module(".section");f.filters.init_domain_type_property_filter(".column.nav");
f.filters.init_limit_slider_filter("#limit-slider",10,1,100,1);b(".toolbar-trigger").click(function(){var e=b(".add-type").first(),g=b(this).closest(".toolbar"),i=b(this);if(e.is(":visible")){g.removeClass("active");i.removeClass("active");e.slideUp()}else{i.addClass("active");g.addClass("active");e.slideDown()}})}};b(window).bind("fb.permission.has_permission",function(e,g){g&&b(".edit").show()});b(a.init)})(jQuery,window.freebase,window.propbox);
