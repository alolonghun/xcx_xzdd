!function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return t[o].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var n={};e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){t.exports=n(75)},,function(t,e,n){"use strict";function o(t){return t=t.toString(),t[1]?t:"0"+t}function r(t){var e=t.getFullYear(),n=t.getMonth()+1,r=t.getDate(),i=t.getHours(),a=t.getMinutes(),s=t.getSeconds();return[e,n,r].map(o).join("/")+" "+[i,a,s].map(o).join(":")}function i(t){var e;if("object"==(void 0===t?"undefined":(0,u.default)(t)))if(null===t)e=null;else if(t instanceof Array){e=[];for(var n=0,o=t.length;n<o;n++)e.push(i(t[n]))}else{e={};for(var r in t)e[r]=i(t[r])}else e=t;return e}function a(){}var s=n(3),u=function(t){return t&&t.__esModule?t:{default:t}}(s);n(71);t.exports={formatNumber:o,formatTime:r,login:a,clone:i}},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var r=n(4),i=o(r),a=n(55),s=o(a),u="function"==typeof s.default&&"symbol"==typeof i.default?function(t){return typeof t}:function(t){return t&&"function"==typeof s.default&&t.constructor===s.default&&t!==s.default.prototype?"symbol":typeof t};e.default="function"==typeof s.default&&"symbol"===u(i.default)?function(t){return void 0===t?"undefined":u(t)}:function(t){return t&&"function"==typeof s.default&&t.constructor===s.default&&t!==s.default.prototype?"symbol":void 0===t?"undefined":u(t)}},function(t,e,n){t.exports={default:n(5),__esModule:!0}},function(t,e,n){n(6),n(50),t.exports=n(54).f("iterator")},function(t,e,n){"use strict";var o=n(7)(!0);n(10)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=o(e,n),this._i+=t.length,{value:t,done:!1})})},function(t,e,n){var o=n(8),r=n(9);t.exports=function(t){return function(e,n){var i,a,s=String(r(e)),u=o(n),c=s.length;return u<0||u>=c?t?"":void 0:(i=s.charCodeAt(u),i<55296||i>56319||u+1===c||(a=s.charCodeAt(u+1))<56320||a>57343?t?s.charAt(u):i:t?s.slice(u,u+2):a-56320+(i-55296<<10)+65536)}}},function(t,e){var n=Math.ceil,o=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?o:n)(t)}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,n){"use strict";var o=n(11),r=n(12),i=n(27),a=n(17),s=n(28),u=n(29),c=n(30),f=n(46),p=n(48),l=n(47)("iterator"),d=!([].keys&&"next"in[].keys()),g=function(){return this};t.exports=function(t,e,n,h,b,_,y){c(n,e,h);var v,m,x,w=function(t){if(!d&&t in k)return k[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},S=e+" Iterator",O="values"==b,T=!1,k=t.prototype,P=k[l]||k["@@iterator"]||b&&k[b],j=P||w(b),z=b?O?w("entries"):j:void 0,D="Array"==e?k.entries||P:P;if(D&&(x=p(D.call(new t)))!==Object.prototype&&(f(x,S,!0),o||s(x,l)||a(x,l,g)),O&&P&&"values"!==P.name&&(T=!0,j=function(){return P.call(this)}),o&&!y||!d&&!T&&k[l]||a(k,l,j),u[e]=j,u[S]=g,b)if(v={values:O?j:w("values"),keys:_?j:w("keys"),entries:z},y)for(m in v)m in k||i(k,m,v[m]);else r(r.P+r.F*(d||T),e,v);return v}},function(t,e){t.exports=!0},function(t,e,n){var o=n(13),r=n(14),i=n(15),a=n(17),s=function(t,e,n){var u,c,f,p=t&s.F,l=t&s.G,d=t&s.S,g=t&s.P,h=t&s.B,b=t&s.W,_=l?r:r[e]||(r[e]={}),y=_.prototype,v=l?o:d?o[e]:(o[e]||{}).prototype;l&&(n=e);for(u in n)(c=!p&&v&&void 0!==v[u])&&u in _||(f=c?v[u]:n[u],_[u]=l&&"function"!=typeof v[u]?n[u]:h&&c?i(f,o):b&&v[u]==f?function(t){var e=function(e,n,o){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,o)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(f):g&&"function"==typeof f?i(Function.call,f):f,g&&((_.virtual||(_.virtual={}))[u]=f,t&s.R&&y&&!y[u]&&a(y,u,f)))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,t.exports=s},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e){var n=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=n)},function(t,e,n){var o=n(16);t.exports=function(t,e,n){if(o(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,o){return t.call(e,n,o)};case 3:return function(n,o,r){return t.call(e,n,o,r)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){var o=n(18),r=n(26);t.exports=n(22)?function(t,e,n){return o.f(t,e,r(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var o=n(19),r=n(21),i=n(25),a=Object.defineProperty;e.f=n(22)?Object.defineProperty:function(t,e,n){if(o(t),e=i(e,!0),o(n),r)try{return a(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var o=n(20);t.exports=function(t){if(!o(t))throw TypeError(t+" is not an object!");return t}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){t.exports=!n(22)&&!n(23)(function(){return 7!=Object.defineProperty(n(24)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){t.exports=!n(23)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){var o=n(20),r=n(13).document,i=o(r)&&o(r.createElement);t.exports=function(t){return i?r.createElement(t):{}}},function(t,e,n){var o=n(20);t.exports=function(t,e){if(!o(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!o(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!o(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!o(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){t.exports=n(17)},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e){t.exports={}},function(t,e,n){"use strict";var o=n(31),r=n(26),i=n(46),a={};n(17)(a,n(47)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=o(a,{next:r(1,n)}),i(t,e+" Iterator")}},function(t,e,n){var o=n(19),r=n(32),i=n(44),a=n(41)("IE_PROTO"),s=function(){},u=function(){var t,e=n(24)("iframe"),o=i.length;for(e.style.display="none",n(45).appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write("<script>document.F=Object<\/script>"),t.close(),u=t.F;o--;)delete u.prototype[i[o]];return u()};t.exports=Object.create||function(t,e){var n;return null!==t?(s.prototype=o(t),n=new s,s.prototype=null,n[a]=t):n=u(),void 0===e?n:r(n,e)}},function(t,e,n){var o=n(18),r=n(19),i=n(33);t.exports=n(22)?Object.defineProperties:function(t,e){r(t);for(var n,a=i(e),s=a.length,u=0;s>u;)o.f(t,n=a[u++],e[n]);return t}},function(t,e,n){var o=n(34),r=n(44);t.exports=Object.keys||function(t){return o(t,r)}},function(t,e,n){var o=n(28),r=n(35),i=n(38)(!1),a=n(41)("IE_PROTO");t.exports=function(t,e){var n,s=r(t),u=0,c=[];for(n in s)n!=a&&o(s,n)&&c.push(n);for(;e.length>u;)o(s,n=e[u++])&&(~i(c,n)||c.push(n));return c}},function(t,e,n){var o=n(36),r=n(9);t.exports=function(t){return o(r(t))}},function(t,e,n){var o=n(37);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==o(t)?t.split(""):Object(t)}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var o=n(35),r=n(39),i=n(40);t.exports=function(t){return function(e,n,a){var s,u=o(e),c=r(u.length),f=i(a,c);if(t&&n!=n){for(;c>f;)if((s=u[f++])!=s)return!0}else for(;c>f;f++)if((t||f in u)&&u[f]===n)return t||f||0;return!t&&-1}}},function(t,e,n){var o=n(8),r=Math.min;t.exports=function(t){return t>0?r(o(t),9007199254740991):0}},function(t,e,n){var o=n(8),r=Math.max,i=Math.min;t.exports=function(t,e){return t=o(t),t<0?r(t+e,0):i(t,e)}},function(t,e,n){var o=n(42)("keys"),r=n(43);t.exports=function(t){return o[t]||(o[t]=r(t))}},function(t,e,n){var o=n(13),r=o["__core-js_shared__"]||(o["__core-js_shared__"]={});t.exports=function(t){return r[t]||(r[t]={})}},function(t,e){var n=0,o=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+o).toString(36))}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){t.exports=n(13).document&&document.documentElement},function(t,e,n){var o=n(18).f,r=n(28),i=n(47)("toStringTag");t.exports=function(t,e,n){t&&!r(t=n?t:t.prototype,i)&&o(t,i,{configurable:!0,value:e})}},function(t,e,n){var o=n(42)("wks"),r=n(43),i=n(13).Symbol,a="function"==typeof i;(t.exports=function(t){return o[t]||(o[t]=a&&i[t]||(a?i:r)("Symbol."+t))}).store=o},function(t,e,n){var o=n(28),r=n(49),i=n(41)("IE_PROTO"),a=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=r(t),o(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?a:null}},function(t,e,n){var o=n(9);t.exports=function(t){return Object(o(t))}},function(t,e,n){n(51);for(var o=n(13),r=n(17),i=n(29),a=n(47)("toStringTag"),s=["NodeList","DOMTokenList","MediaList","StyleSheetList","CSSRuleList"],u=0;u<5;u++){var c=s[u],f=o[c],p=f&&f.prototype;p&&!p[a]&&r(p,a,c),i[c]=i.Array}},function(t,e,n){"use strict";var o=n(52),r=n(53),i=n(29),a=n(35);t.exports=n(10)(Array,"Array",function(t,e){this._t=a(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,r(1)):"keys"==e?r(0,n):"values"==e?r(0,t[n]):r(0,[n,t[n]])},"values"),i.Arguments=i.Array,o("keys"),o("values"),o("entries")},function(t,e){t.exports=function(){}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,n){e.f=n(47)},function(t,e,n){t.exports={default:n(56),__esModule:!0}},function(t,e,n){n(57),n(68),n(69),n(70),t.exports=n(14).Symbol},function(t,e,n){"use strict";var o=n(13),r=n(28),i=n(22),a=n(12),s=n(27),u=n(58).KEY,c=n(23),f=n(42),p=n(46),l=n(43),d=n(47),g=n(54),h=n(59),b=n(60),_=n(61),y=n(64),v=n(19),m=n(35),x=n(25),w=n(26),S=n(31),O=n(65),T=n(67),k=n(18),P=n(33),j=T.f,z=k.f,D=O.f,E=o.Symbol,M=o.JSON,A=M&&M.stringify,I=d("_hidden"),F=d("toPrimitive"),N={}.propertyIsEnumerable,L=f("symbol-registry"),q=f("symbols"),C=f("op-symbols"),J=Object.prototype,B="function"==typeof E,R=o.QObject,U=!R||!R.prototype||!R.prototype.findChild,W=i&&c(function(){return 7!=S(z({},"a",{get:function(){return z(this,"a",{value:7}).a}})).a})?function(t,e,n){var o=j(J,e);o&&delete J[e],z(t,e,n),o&&t!==J&&z(J,e,o)}:z,G=function(t){var e=q[t]=S(E.prototype);return e._k=t,e},H=B&&"symbol"==typeof E.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof E},K=function(t,e,n){return t===J&&K(C,e,n),v(t),e=x(e,!0),v(n),r(q,e)?(n.enumerable?(r(t,I)&&t[I][e]&&(t[I][e]=!1),n=S(n,{enumerable:w(0,!1)})):(r(t,I)||z(t,I,w(1,{})),t[I][e]=!0),W(t,e,n)):z(t,e,n)},Y=function(t,e){v(t);for(var n,o=_(e=m(e)),r=0,i=o.length;i>r;)K(t,n=o[r++],e[n]);return t},V=function(t,e){return void 0===e?S(t):Y(S(t),e)},Q=function(t){var e=N.call(this,t=x(t,!0));return!(this===J&&r(q,t)&&!r(C,t))&&(!(e||!r(this,t)||!r(q,t)||r(this,I)&&this[I][t])||e)},X=function(t,e){if(t=m(t),e=x(e,!0),t!==J||!r(q,e)||r(C,e)){var n=j(t,e);return!n||!r(q,e)||r(t,I)&&t[I][e]||(n.enumerable=!0),n}},Z=function(t){for(var e,n=D(m(t)),o=[],i=0;n.length>i;)r(q,e=n[i++])||e==I||e==u||o.push(e);return o},$=function(t){for(var e,n=t===J,o=D(n?C:m(t)),i=[],a=0;o.length>a;)!r(q,e=o[a++])||n&&!r(J,e)||i.push(q[e]);return i};B||(E=function(){if(this instanceof E)throw TypeError("Symbol is not a constructor!");var t=l(arguments.length>0?arguments[0]:void 0),e=function(n){this===J&&e.call(C,n),r(this,I)&&r(this[I],t)&&(this[I][t]=!1),W(this,t,w(1,n))};return i&&U&&W(J,t,{configurable:!0,set:e}),G(t)},s(E.prototype,"toString",function(){return this._k}),T.f=X,k.f=K,n(66).f=O.f=Z,n(63).f=Q,n(62).f=$,i&&!n(11)&&s(J,"propertyIsEnumerable",Q,!0),g.f=function(t){return G(d(t))}),a(a.G+a.W+a.F*!B,{Symbol:E});for(var tt="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),et=0;tt.length>et;)d(tt[et++]);for(var tt=P(d.store),et=0;tt.length>et;)h(tt[et++]);a(a.S+a.F*!B,"Symbol",{for:function(t){return r(L,t+="")?L[t]:L[t]=E(t)},keyFor:function(t){if(H(t))return b(L,t);throw TypeError(t+" is not a symbol!")},useSetter:function(){U=!0},useSimple:function(){U=!1}}),a(a.S+a.F*!B,"Object",{create:V,defineProperty:K,defineProperties:Y,getOwnPropertyDescriptor:X,getOwnPropertyNames:Z,getOwnPropertySymbols:$}),M&&a(a.S+a.F*(!B||c(function(){var t=E();return"[null]"!=A([t])||"{}"!=A({a:t})||"{}"!=A(Object(t))})),"JSON",{stringify:function(t){if(void 0!==t&&!H(t)){for(var e,n,o=[t],r=1;arguments.length>r;)o.push(arguments[r++]);return e=o[1],"function"==typeof e&&(n=e),!n&&y(e)||(e=function(t,e){if(n&&(e=n.call(this,t,e)),!H(e))return e}),o[1]=e,A.apply(M,o)}}}),E.prototype[F]||n(17)(E.prototype,F,E.prototype.valueOf),p(E,"Symbol"),p(Math,"Math",!0),p(o.JSON,"JSON",!0)},function(t,e,n){var o=n(43)("meta"),r=n(20),i=n(28),a=n(18).f,s=0,u=Object.isExtensible||function(){return!0},c=!n(23)(function(){return u(Object.preventExtensions({}))}),f=function(t){a(t,o,{value:{i:"O"+ ++s,w:{}}})},p=function(t,e){if(!r(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,o)){if(!u(t))return"F";if(!e)return"E";f(t)}return t[o].i},l=function(t,e){if(!i(t,o)){if(!u(t))return!0;if(!e)return!1;f(t)}return t[o].w},d=function(t){return c&&g.NEED&&u(t)&&!i(t,o)&&f(t),t},g=t.exports={KEY:o,NEED:!1,fastKey:p,getWeak:l,onFreeze:d}},function(t,e,n){var o=n(13),r=n(14),i=n(11),a=n(54),s=n(18).f;t.exports=function(t){var e=r.Symbol||(r.Symbol=i?{}:o.Symbol||{});"_"==t.charAt(0)||t in e||s(e,t,{value:a.f(t)})}},function(t,e,n){var o=n(33),r=n(35);t.exports=function(t,e){for(var n,i=r(t),a=o(i),s=a.length,u=0;s>u;)if(i[n=a[u++]]===e)return n}},function(t,e,n){var o=n(33),r=n(62),i=n(63);t.exports=function(t){var e=o(t),n=r.f;if(n)for(var a,s=n(t),u=i.f,c=0;s.length>c;)u.call(t,a=s[c++])&&e.push(a);return e}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e){e.f={}.propertyIsEnumerable},function(t,e,n){var o=n(37);t.exports=Array.isArray||function(t){return"Array"==o(t)}},function(t,e,n){var o=n(35),r=n(66).f,i={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(t){try{return r(t)}catch(t){return a.slice()}};t.exports.f=function(t){return a&&"[object Window]"==i.call(t)?s(t):r(o(t))}},function(t,e,n){var o=n(34),r=n(44).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return o(t,r)}},function(t,e,n){var o=n(63),r=n(26),i=n(35),a=n(25),s=n(28),u=n(21),c=Object.getOwnPropertyDescriptor;e.f=n(22)?c:function(t,e){if(t=i(t),e=a(e,!0),u)try{return c(t,e)}catch(t){}if(s(t,e))return r(!o.f.call(t,e),t[e])}},function(t,e){},function(t,e,n){n(59)("asyncIterator")},function(t,e,n){n(59)("observable")},function(t,e){"use strict";var n={api_banner_list:"https://api.xiaozhangbang.org/banner/list",api_bigshot_list:"https://api.xiaozhangbang.org/bigshot/list",api_driedfood_list:"https://api.xiaozhangbang.org/driedfood/list",api_wechat_login:"https://api.xiaozhangbang.org/wechat/login",api_user_info:"https://api.xiaozhangbang.org/user/info",api_wechat_getuserinfo:"https://api.xiaozhangbang.org/wechat/getuserinfo",api_bigshot_detail:"https://api.xiaozhangbang.org/bigshot/detail",api_driedfood_detail:"https://api.xiaozhangbang.org/driedfood/detail",api_driedfood_comment_list:"https://api.xiaozhangbang.org/driedfood/comment/list",api_bigshot_comment_list:"https://api.xiaozhangbang.org/bigshot/comment/list",api_user_collection:"https://api.xiaozhangbang.org/user/collection",api_user_uncollection:"https://api.xiaozhangbang.org/user/uncollection",api_user_subscribe:"https://api.xiaozhangbang.org/user/subscribe",user_subscribe_driedfood:"https://api.xiaozhangbang.org/user/subscribe/driedfood",user_subscribe_bigshot:"https://api.xiaozhangbang.org/user/subscribe/bigshot",api_user_unsubscribe:"https://api.xiaozhangbang.org/user/unsubscribe",api_user_collection_list:"https://api.xiaozhangbang.org/user/collection/list",api_user_subscribe_list:"https://api.xiaozhangbang.org/user/subscribe/list",api_user_driedfood_click:"https://api.xiaozhangbang.org/user/driedfood/click",api_user_bigshot_click:"https://api.xiaozhangbang.org/user/bigshot/click",api_driedfood_video_detail:"https://api.xiaozhangbang.org/driedfood/video/detail",api_driedfood_video_play:"https://api.xiaozhangbang.org/driedfood/video/play",api_user_driedfood_play:"https://api.xiaozhangbang.org/user/driedfood/play",api_bigshot_video_detail:"https://api.xiaozhangbang.org/bigshot/video/detail",api_bigshot_video_play:"https://api.xiaozhangbang.org/bigshot/video/play",api_user_bigshot_play:"https://api.xiaozhangbang.org/user/bigshot/play",api_bigshot_comment_point:"https://api.xiaozhangbang.org/bigshot/comment/point",api_driedfood_comment_point:"https://api.xiaozhangbang.org/driedfood/comment/point",api_user_recharge:"https://api.xiaozhangbang.org/user/recharge",api_user_create_bigshot_comment:"https://api.xiaozhangbang.org/user/create/bigshot/comment",api_user_create_driedfood_comment:"https://api.xiaozhangbang.org/user/create/driedfood/comment",api_user_account_info:"https://api.xiaozhangbang.org/user/account/info",api_user_bangbi_recode:"https://api.xiaozhangbang.org/user/bangbi/recode",api_user_info_update:"https://api.xiaozhangbang.org/user/info/update",api_user_join_vip:"https://api.xiaozhangbang.org/user/join/vip",api_xlog:"https://api.xiaozhangbang.org/debug"};t.exports=n},,,,function(t,e,n){"use strict";var o=n(2),r=getApp(),i=r.getURL();Page({data:{showInfo:!1,showList:!0,showJudge:!1,id:0,detail:null,video_list:[],page:1,allPage:1,allDone:!1,comment:[],is_collection:0,is_subscribe:0,playStatus:null},onLoad:function(t){t.id?(this.setData({id:t.id}),this.getDetail(),this.userHistory()):(wx.showToast({title:"无法获取到ID",icon:"warn",duration:2e3}),wx.navigateBack(1))},onShareAppMessage:function(t){var e=this;return{title:e.data.detail.entity.title,path:"/pages/dk_detail/detail?id="+e.data.id}},onShow:function(){var t=this;wx.getBackgroundAudioPlayerState({method:"POST",success:function(e){e.title=wx.getStorageSync("musicTitle"),e.bg=wx.getStorageSync("musicBg"),e.id=wx.getStorageSync("musicId"),console.log(e),t.setData({playStatus:e})}})},showInfoTab:function(t){this.setData({showInfo:!0,showList:!1,showJudge:!1})},showListTab:function(t){this.setData({showInfo:!1,showList:!0,showJudge:!1})},showJudgeTab:function(t){this.setData({showInfo:!1,showList:!1,showJudge:!0}),this.loadMore()},getDetail:function(){var t=this;wx.request({url:i.api_bigshot_detail,data:{token:r.globalData.token,big_shot_id:t.data.id},method:"POST",success:function(e){console.log(e),e.data.code?(console.log(e.data.msg),wx.showToast({title:e.data.msg,duration:2e3,complete:function(){setTimeout(function(){wx.navigateBack(1)},2e3)}})):t.setData({detail:e.data.data,video_list:e.data.data.video_list,is_subscribe:e.data.data.entity.is_subscribe,is_collection:e.data.data.entity.is_collection})}})},loadMore:function(t){var e=this;e.data.page>e.data.allPage?e.setData({allDone:!0}):wx.request({url:i.api_bigshot_comment_list,data:{page:e.data.page,page_num:10,big_shot_id:e.data.id,token:r.globalData.token},method:"POST",success:function(t){e.setData({comment:e.data.comment.concat(t.data.data.data_list),allPage:t.data.data.page_num,page:e.data.page+1}),e.data.page>e.data.allPage&&e.setData({allDone:!0})}})},userCollection:function(t){var e=this;wx.request({url:i.api_user_collection,data:{mid:e.data.id,type:1,token:r.globalData.token},method:"POST",success:function(t){t.data.code?console.log(t.data.msg):(wx.showToast({title:"收藏成功",icon:"success",duration:2e3}),e.setData({is_collection:1}))}})},userVote:function(t){var e=this,n=t.currentTarget.dataset.index;if(t.currentTarget.dataset.can)return wx.showToast({title:"你已经点过赞了",icon:"warn",duration:2e3}),!1;wx.request({url:i.api_bigshot_comment_point,data:{big_shot_comment_id:t.currentTarget.dataset.id,token:r.globalData.token},method:"POST",success:function(t){if(t.data.code)wx.showToast({title:t.data.msg,icon:"warn",duration:2e3});else{var r=o.clone(e.data.comment);r[n].point_number=r[n].point_number+1,r[n].is_point=1,e.setData({comment:r})}}})},userSubscribe:function(t){var e=this;wx.request({url:i.user_subscribe_bigshot,data:{big_shot_id:e.data.id,token:r.globalData.token},methods:"POST",success:function(t){if(console.log(t),t.data.code)return wx.showToast({title:t.data.msg,icon:"success",duration:2e3}),!1;if(!0!==t.data.data){var n=t.data.data;wx.requestPayment({timeStamp:n.timeStamp.toString(),nonceStr:n.nonceStr,package:n.package,signType:n.signType,paySign:n.paySign,success:function(t){console.log(t),wx.showToast({title:"订阅成功!",icon:"success",duration:2e3}),e.setData({is_subscribe:1})},fail:function(t){return console.log(t),wx.showToast({title:"取消充值!",icon:"fail",duration:2e3}),!1}})}else wx.showToast({title:t.data.msg,icon:"success",duration:2e3}),e.setData({is_subscribe:1})}})},userUncollection:function(t){var e=this;wx.request({url:i.api_user_uncollection,data:{mid:e.data.id,type:1,token:r.globalData.token},method:"POST",success:function(t){t.data.code?console.log(t.data.msg):(wx.showToast({title:"取消收藏成功",icon:"success",duration:2e3}),e.setData({is_collection:0}))}})},userUnsubscribe:function(t){var e=this;wx.request({url:i.api_user_unsubscribe,data:{mid:e.data.id,type:1,token:r.globalData.token},method:"POST",success:function(t){t.data.code?console.log(t.data.msg):(wx.showToast({title:"取消订阅成功",icon:"success",duration:2e3}),e.setData({is_subscribe:0}))}})},userHistory:function(t){var e=this;wx.request({url:i.api_user_bigshot_click,data:{big_shot_id:e.data.id,token:r.globalData.token},method:"POST",success:function(t){console.log(t.data.msg)}})},openVideoDetail:function(t){wx.navigateTo({url:"../dk_play/play?id="+t.currentTarget.dataset.id})},openPlay:function(t){var e=this,n=e.data.playStatus.id;return n&&("d"==n.substr(0,1)?wx.navigateTo({url:"../dk_play/play?play=true&id="+n.substr(1)}):wx.navigateTo({url:"../gh_play/play?play=true&id="+n.substr(1)})),!1},stopMusic:function(t){var e=this;wx.pauseBackgroundAudio();var n=o.clone(e.data.playStatus);return n.status=0,e.setData({playStatus:n}),!1},playMusic:function(t){var e=this;wx.playBackgroundAudio({dataUrl:e.data.playStatus.dataUrl,title:e.data.playStatus.title,coverImgUrl:e.data.playStatus.bg});var n=o.clone(e.data.playStatus);return n.status=1,e.setData({playStatus:n}),!1}})}]);