!function(r,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("lodash"),require("color"),require("coreUtilsLib")):"function"==typeof define&&define.amd?define(["lodash","color","coreUtilsLib"],t):"object"==typeof exports?exports["skin-utils"]=t(require("lodash"),require("color"),require("coreUtilsLib")):r["skin-utils"]=t(r.lodash,r.color,r.coreUtilsLib)}(this,(function(r,t,n){return function(r){var t={};function n(e){if(t[e])return t[e].exports;var i=t[e]={i:e,l:!1,exports:{}};return r[e].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=r,n.c=t,n.d=function(r,t,e){n.o(r,t)||Object.defineProperty(r,t,{enumerable:!0,get:e})},n.r=function(r){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},n.t=function(r,t){if(1&t&&(r=n(r)),8&t)return r;if(4&t&&"object"==typeof r&&r&&r.__esModule)return r;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:r}),2&t&&"string"!=typeof r)for(var i in r)n.d(e,i,function(t){return r[t]}.bind(null,i));return e},n.n=function(r){var t=r&&r.__esModule?function(){return r.default}:function(){return r};return n.d(t,"a",t),t},n.o=function(r,t){return Object.prototype.hasOwnProperty.call(r,t)},n.p="",n(n.s=2)}([function(t,n){t.exports=r},function(r,t,n){"use strict";var e=n(0),i=n(4),o=n(5).checkIsParamAnAliasAndGetUnaliasedValue,a={brightness:function(r,t){return r.value(t*r.hsv().v)},alpha:function(r,t){return r.alpha(t*r.alpha())},decrease:function(r,t){return e.parseInt(r)-e.parseInt(t)},increase:function(r,t){return e.parseInt(r)+e.parseInt(t)},multiply:function(r,t){return e.parseInt(r)*parseFloat(t)},max:function(r,t){return Math.max(e.parseInt(r),e.parseInt(t))},eval:function(r,t,n){return n[t](r)}};function u(r,t,n,e){return n&&n[r]?function(r,t,n){return a[t.type]?a[t.type](r,t.value,n):r}(t,n[r],e):t}function s(r,t,n){var i=e.isUndefined(t[r])?n[r]:t[r];if(!e.isArray(i))return i;if(1===i.length)return t[i[0]]||n[i[0]];var o="";return i=e.reduce(i,(function(r,i){var a,u,s=t[i]||n[i];return o=o||(a=s,u=e.parseInt(a).toString(),a=a.toString(),isNaN(u)||a===u?"":a.substr(a.indexOf(u)+u.length)),r+e.parseInt(s)}),0),"x"===o&&(o="px"),i+o}r.exports={renderParam:function(r,t,n,c,f){if(!t.params)return"";var l=o(t.params[r]),p=s(r,n,t.paramsDefaults);if(void 0===p||!l)return"";switch(l){case"BG_COLOR":case"COLOR":case"COLOR_ALPHA":p=function(r,t,n,i){var o="alpha-"+(Array.isArray(n[t])&&n[t][0]||t),u=e.isUndefined(i[o])?n[o]:i[o];return e.isUndefined(u)||(r=a.alpha(r,parseFloat(u))),r}(p=function(r,t){var n=r.split("color_");return 2===n.length&&(r=t[e.parseInt(n[1])]),e.includes(r,",")&&!e.includes(r,"rgb")&&(r="rgba("+r+")"),i(r)}(p,c),r,t.paramsDefaults,n);break;case"BORDER_RADIUS":n[r]&&(p=function(r){var t="";return e.forEach(r.replace(/px/g,"").split(" "),(function(r){var n=Math.min(e.parseInt(r),99999);t+=" "+n+(0===n?"":"px")})),r=t.substring(1)}(p));break;case"BORDER_SIZES":n[r]&&(p=function(r){if("number"==typeof r)return Math.min(e.parseInt(r),99999)+"px";var t="";return e.forEach(r.replace(/px/g,"").split(" "),(function(r){var n=Math.min(e.parseInt(r),99999);t+=" "+n+(0===n?"":"px")})),r=t.substring(1)}(p));break;case"BOX_SHADOW":if(function(r,t,n){var e="boxShadowToggleOn-"+r;return"false"===(t[e]||n[e])}(r,n,t.paramsDefaults))return""}return{type:l,value:p=u(r,p,t.paramsMutators,f)}}}},function(r,t,n){"use strict";r.exports={createSkinCss:n(3),renderParam:n(1).renderParam}},function(r,t,n){"use strict";var e=n(0),i=n(1),o=n(6),a=n(8);function u(r){return isNaN(r)?r:r+"px"}var s={BORDER_RADIUS:function(r){return"border-radius:"+r+";"},BORDER_SIZES:function(r){return"border-width:"+r+";"},BOX_SHADOW:function(r){return"box-shadow:"+r+";"},FONT:function(r){return"font:"+r},FONT_FAMILY:function(r){return"font-family:"+r+";"},TRANSITION:function(r){return"transition:"+r+";"},INVERTED_ZOOM:function(r){return"zoom:"+r+";"},INVERTED_ZOOM_FIXED:function(r){return"zoom:"+r+";"},ORIENTATION_ZOOM_FIX:function(r){return"zoom:"+r+";"},ZOOM_BY_SCREEN_PROPERTIES:function(r){return"zoom:"+r+";"},DEFAULT:e.identity},c={BORDER_RADIUS:e.identity,BORDER_SIZES:e.identity,TRANSITION:e.identity,ALPHA:e.identity,BORDER_SIDES:e.constant(""),ICON_TYPE:e.constant(""),BOX_SHADOW:u,SIZE:u,FONT:function(r,t){return o.fontToCSSWithoutColor(r,t)},FONT_FAMILY:function(r){return o.getFullFontFamily(r)},COLOR:function(r){return r.hexString()},BG_COLOR:function(r){return r.alpha()>0?r.rgbaString():"transparent"},COLOR_ALPHA:function(r){return r.alpha()>0?r.rgbaString():"transparent"},INVERTED_ZOOM:function(r,t,n){return n.siteZoomRatio},INVERTED_ZOOM_FIXED:function(r,t,n){return n.invertedZoomRatio},ORIENTATION_ZOOM_FIX:function(r,t,n){return n.orientationZoomFix},ZOOM_BY_SCREEN_PROPERTIES:function(r,t,n){return n.mobileZoom},URL:function(r,t,n){return"BASE_THEME_DIRECTORY"===r?n.baseThemeUrl:"WEB_THEME_DIRECTORY"===r?n.webThemeUrl:r},DEFAULT:e.identity};function f(r,t,n,i){var o=i.renderingEnv;return e.isNil(r)?"":(s[t]||s.DEFAULT)((c[t]||c.DEFAULT)(r,n,o))}function l(r,t,n,o,a){var u=i.renderParam(r,t,n,o.color,a.evals),s="SIZE"===u.type&&e.isString(u.value)?e.map(u.value.split(" "),(function(r){return{value:r,type:"SIZE"}})):[u];return e.map(s,(function(r){return f(r.value,r.type,o,a)}))}function p(r,t,n,o,u){return r.$render(function(r){return"."+r}(o),function(r,t,n,o){return e.mapValues(r.params,(function(a,u){var s=i.renderParam(u,r,t,n.color,o.evals);return function(r,t,n,i){var o=i.renderingEnv;if(e.isNil(r))return"";return(c[t]||c.DEFAULT)(r,n,o)}(s.value,s.type,n,o)}))}(r,t,n,u),a)}function d(r,t,n,o,a){return e.map(r.css,(function(u,s){var c="@"===s[0]?o+"_":"."+o;return(s=s.replace(/%/g,c))+" {"+(u=function(r,t){return r.replace(/((-webkit-)?animation(-name)?: ?)/gim,"$1"+t+"_")}(u=function(r,t,n,e,o){return r.replace(/\[(.*?)\]/g,(function(r,a){var u=i.renderParam(a,t,n,e.color,o.evals);return f(u.value,u.type,e,o)}))}(u=function(r,t,n,i,o){return r.replace(/calc\(\[([\w\d]+)\] ([-+*\/]) \[([\w\d]+)\]\)/g,(function(r,a,u,s){for(var c=l(a,t,n,i,o),f=l(s,t,n,i,o),p=e.template("calc(${p1} ${sign} ${p2})"),d=[],O=0;O<Math.max(c.length,f.length);O++)d.push(p({p1:c[O]||c[0],p2:f[O]||f[0],sign:u}));return d.join(" ")}))}(u,r,t,n,a),r,t,n,a),o))+"}"})).join("\n")}function O(r,t,n,i){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{evals:{}};return function(r){return"function"==typeof r.$render}(r)?p(r,t,n,i,o):d(r,t,n,i,o)+function(r,t,n,i){return r.mediaQueries&&r.mediaQueries.length?e.map(r.mediaQueries,(function(r){var e=O({css:r.css},t,n,i);return[r.query,"{",e,"}"].join("")})).join("\n"):""}(r,t,n,i)}r.exports=O},function(r,n){r.exports=t},function(r,t,n){"use strict";var e=n(0),i=["BORDER_SIZE","BORDER_TOP_SIZE","BORDER_BOTTOM_SIZE","BORDER_LEFT_SIZE","BORDER_RIGHT_SIZE","PADDING_SIZE","PADDING_TOP_SIZE","PADDING_BOTTOM_SIZE","PADDING_LEFT_SIZE","PADDING_RIGHT_SIZE","MARGIN_SIZE","MARGIN_TOP_SIZE","MARGIN_BOTTOM_SIZE","MARGIN_LEFT_SIZE","MARGIN_RIGHT_SIZE","BG_SIZE","WIDTH_SIZE","HEIGHT_SIZE","TOP_SIZE","BOTTOM_SIZE","LEFT_SIZE","RIGHT_SIZE","TEXT_SIZE"],o=["TEXT_COLOR","BORDER_COLOR"],a=["BORDER_COLOR_ALPHA","BOX_SHADOW_COLOR_ALPHA","TEXT_COLOR_LEGACY_ALPHA"],u=["BG_COLOR_ALPHA"],s={};e.forEach(i,(function(r){s[r]="SIZE"})),e.forEach(o,(function(r){s[r]="COLOR"})),e.forEach(a,(function(r){s[r]="COLOR_ALPHA"})),e.forEach(u,(function(r){s[r]="BG_COLOR"}));r.exports={checkIsParamAnAliasAndGetUnaliasedValue:function(r){return s[r]?s[r]:r},PARAM_ALIAS_MAP:s,SIZE_ALIASES:i,COLOR_ALIASES:o,COLOR_ALPHA_ALIASES:a,BG_COLOR_ALIASES:u}},function(r,t,n){"use strict";var e=n(0),i=n(7).fonts;function o(r){var t=r,n=i.getFontFallback(r);return n&&(t=t+","+n),t=t.replace(/[^,]*[^\w,\d\-][^,]*/g,(function(r){return"'"+r.replace(/\+/g," ")+"'"}))}r.exports={fontToCSSWithoutColor:function(r,t){return function(r){var t=r;e.includes(t,"#")&&(t=t.slice(0,t.indexOf("#"))),t=t.replace(/\{color_\d+\}/,"");var n=i.getFontFamily(t),a=o(n);return t.replace(n,a)+";"}(function(r,t){if(e.startsWith(r,"font_")){var n=r.split("font_");if(2===n.length)return t.font[n[1]]}return r}(r,t))},getFullFontFamily:o}},function(r,t){r.exports=n},function(r,t,n){"use strict";var e=n(0),i=n(9),o=n(10),a=n(20),u=n(21),s=n(22),c=n(23),f=n(24);r.exports={identity:e.identity,calcTagBorderSize:c,getInnerBorderRadius:i,getFontWithSizeInRange:o,isEmptyCSSValue:a,getValueByCondition:u,getColorWithOpacity:s,increaseAlphaChannel:f}},function(r,t,n){"use strict";r.exports=function(r,t){var n=+t.replace("px","");if(isNaN(n))return r;function e(r){var t=r-n;return t>0?t:0}var i=[],o=r.split(" "),a=Array.isArray(o),u=0;for(o=a?o:o[Symbol.iterator]();;){var s;if(a){if(u>=o.length)break;s=o[u++]}else{if((u=o.next()).done)break;s=u.value}var c=+s.replace("px","");if(isNaN(c))return r;i.push(e(c)+"px")}return i.join(" ")}},function(r,t,n){"use strict";var e=n(11),i=/^(\d+)(.+)/;r.exports=function(r,t,n){var o=void 0;try{o=e(r)}catch(t){return r}var a=o.size.match(i);if(null===a)return r;var u=parseInt(a[1],10),s=a[2];return u<t&&(u=t),u>n&&(u=n),o.style+" "+o.variant+" "+o.weight+" "+u+s+"/"+o.lineHeight+" "+o.family.join(", ")}},function(r,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=n(12),i=n(13),o=n(14),a=n(15),u=n(16),s=n(17),c=n(18),f="[parse-css-font]",l=["style","weight","stretch","variant"];function p(r,t){return void 0===t&&(t=Error),new t(f+" "+r)}function d(r){var t=parseFloat(r);return t.toString()===r?t:r}t.default=function(r){if("string"!=typeof r)throw p("Expected a string.",TypeError);if(""===r)throw p("Cannot parse an empty string.");if(-1!==i.indexOf(r))return{system:r};var t={lineHeight:"normal",stretch:"",style:"",variant:"",weight:""},n=[function(r){if(-1===a.indexOf(r))return;if(t.style)throw p("Font style already defined.");return t.style=r},function(r){if(-1===o.indexOf(r))return;if(t.weight)throw p("Font weight already defined.");return t.weight=r},function(r){if(-1===u.indexOf(r))return;if(t.stretch)throw p("Font stretch already defined.");return t.stretch=r},function(r){return!c.isSize(r)&&(t.variant=t.variant?[t.variant,r].join(" "):r)}],f=s.splitBySpaces(r);r:for(var O=f.shift();O;O=f.shift())if("normal"!==O){for(var _=0,E=n;_<E.length;_++){if((0,E[_])(O))continue r}var v=s.split(O,["/"]);if(t.size=v[0],v[1]?t.lineHeight=d(v[1]):"/"===f[0]&&(f.shift(),t.lineHeight=d(f.shift())),!f.length)throw p("Missing required font-family.");t.family=s.splitByCommas(f.join(" ")).map(e);for(var h=0,I=l;h<I.length;h++){var m=I[h];t[m]=t[m]||"normal"}return t}throw p("Missing required font-size.")},r.exports=Object.assign(t.default,t)},function(r,t){var n=/[\'\"]/;r.exports=function(r){return r?(n.test(r.charAt(0))&&(r=r.substr(1)),n.test(r.charAt(r.length-1))&&(r=r.substr(0,r.length-1)),r):""}},function(r){r.exports=JSON.parse('["caption","icon","menu","message-box","small-caption","status-bar"]')},function(r){r.exports=JSON.parse('["normal","bold","bolder","lighter","100","200","300","400","500","600","700","800","900"]')},function(r){r.exports=JSON.parse('["normal","italic","oblique"]')},function(r){r.exports=JSON.parse('["normal","condensed","semi-condensed","extra-condensed","ultra-condensed","expanded","semi-expanded","extra-expanded","ultra-expanded"]')},function(r,t,n){"use strict";function e(r,t,n){var e=(void 0===n?{}:n).last,i=void 0!==e&&e;if("string"!=typeof r)throw new TypeError("expected a string");if(!Array.isArray(t))throw new TypeError("expected a string array of separators");if("boolean"!=typeof i)throw new TypeError("expected a Boolean value for options.last");for(var o=[],a="",u=!1,s=0,c=!1,f=!1,l=0,p=r;l<p.length;l++){var d=p[l];c?f?f=!1:"\\"===d?f=!0:d===c&&(c=!1):'"'===d||"'"===d?c=d:"("===d?s+=1:")"===d?s>0&&(s-=1):0===s&&-1!==t.indexOf(d)&&(u=!0),u?(""!==a&&o.push(a.trim()),a="",u=!1):a+=d}return(i||""!==a)&&o.push(a.trim()),o}Object.defineProperty(t,"__esModule",{value:!0}),t.split=e,t.splitBySpaces=function(r){return e(r,[" ","\n","\t"])},t.splitByCommas=function(r){return e(r,[","],{last:!0})}},function(r,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=n(19);t.isSize=function(r){return/^[\d\.]/.test(r)||-1!==r.indexOf("/")||-1!==e.indexOf(r)}},function(r){r.exports=JSON.parse('["xx-small","x-small","small","medium","large","x-large","xx-large","larger","smaller"]')},function(r,t,n){"use strict";function e(r){return"0"===r||"none"===r||"0px"===r||""===r}r.exports=function(){for(var r=arguments.length,t=Array(r),n=0;n<r;n++)t[n]=arguments[n];return t.every((function(r){return e(r)}))}},function(r,t,n){"use strict";r.exports=function(r,t,n){return"true"===n?r:t}},function(r,t,n){"use strict";var e=/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/;r.exports=function(r,t){if(!r)return r;var n=r.match(e);if(null===n)return r;var i=n[1],o=n[2],a=n[3];return void 0===i||void 0===o||void 0===a?r:"rgba("+n[1]+", "+n[2]+", "+n[3]+", "+t+")"}},function(r,t,n){"use strict";var e=function(r){return Number(r.replace("px",""))};r.exports=function(r,t,n){var i=Math.min(e(t),e(n));return e(r)>i?i+"px":r}},function(r,t,n){"use strict";r.exports=function(r,t){if("transparent"!==r){t/=100;var n=r.split(","),e=parseFloat(n[3]);return n[0]+","+n[1]+","+n[2]+", "+(e+t>1?1:parseFloat((e+t).toFixed(2)))+")"}return r}}])}));
//# sourceMappingURL=skin-utils.js.map