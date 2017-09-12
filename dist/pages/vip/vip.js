!function(t){function n(o){if(e[o])return e[o].exports;var r=e[o]={exports:{},id:o,loaded:!1};return t[o].call(r.exports,r,r.exports,n),r.loaded=!0,r.exports}var e={};n.m=t,n.c=e,n.p="",n(0)}([function(t,n,e){t.exports=e(88)},,function(t,n,e){"use strict";function o(t){return t=t.toString(),t[1]?t:"0"+t}function r(t){var n=t.getFullYear(),e=t.getMonth()+1,r=t.getDate(),i=t.getHours(),a=t.getMinutes(),u=t.getSeconds();return[n,e,r].map(o).join("/")+" "+[i,a,u].map(o).join(":")}function i(t){var n;if("object"==(void 0===t?"undefined":(0,s.default)(t)))if(null===t)n=null;else if(t instanceof Array){n=[];for(var e=0,o=t.length;e<o;e++)n.push(i(t[e]))}else{n={};for(var r in t)n[r]=i(t[r])}else n=t;return n}function a(){}var u=e(3),s=function(t){return t&&t.__esModule?t:{default:t}}(u);e(71);t.exports={formatNumber:o,formatTime:r,login:a,clone:i}},function(t,n,e){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}n.__esModule=!0;var r=e(4),i=o(r),a=e(55),u=o(a),s="function"==typeof u.default&&"symbol"==typeof i.default?function(t){return typeof t}:function(t){return t&&"function"==typeof u.default&&t.constructor===u.default&&t!==u.default.prototype?"symbol":typeof t};n.default="function"==typeof u.default&&"symbol"===s(i.default)?function(t){return void 0===t?"undefined":s(t)}:function(t){return t&&"function"==typeof u.default&&t.constructor===u.default&&t!==u.default.prototype?"symbol":void 0===t?"undefined":s(t)}},function(t,n,e){t.exports={default:e(5),__esModule:!0}},function(t,n,e){e(6),e(50),t.exports=e(54).f("iterator")},function(t,n,e){"use strict";var o=e(7)(!0);e(10)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,n=this._t,e=this._i;return e>=n.length?{value:void 0,done:!0}:(t=o(n,e),this._i+=t.length,{value:t,done:!1})})},function(t,n,e){var o=e(8),r=e(9);t.exports=function(t){return function(n,e){var i,a,u=String(r(n)),s=o(e),c=u.length;return s<0||s>=c?t?"":void 0:(i=u.charCodeAt(s),i<55296||i>56319||s+1===c||(a=u.charCodeAt(s+1))<56320||a>57343?t?u.charAt(s):i:t?u.slice(s,s+2):a-56320+(i-55296<<10)+65536)}}},function(t,n){var e=Math.ceil,o=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?o:e)(t)}},function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n,e){"use strict";var o=e(11),r=e(12),i=e(27),a=e(17),u=e(28),s=e(29),c=e(30),f=e(46),p=e(48),l=e(47)("iterator"),g=!([].keys&&"next"in[].keys()),d=function(){return this};t.exports=function(t,n,e,h,y,b,v){c(e,n,h);var _,x,m,w=function(t){if(!g&&t in z)return z[t];switch(t){case"keys":case"values":return function(){return new e(this,t)}}return function(){return new e(this,t)}},S=n+" Iterator",O="values"==y,j=!1,z=t.prototype,P=z[l]||z["@@iterator"]||y&&z[y],T=P||w(y),k=y?O?w("entries"):T:void 0,M="Array"==n?z.entries||P:P;if(M&&(m=p(M.call(new t)))!==Object.prototype&&(f(m,S,!0),o||u(m,l)||a(m,l,d)),O&&P&&"values"!==P.name&&(j=!0,T=function(){return P.call(this)}),o&&!v||!g&&!j&&z[l]||a(z,l,T),s[n]=T,s[S]=d,y)if(_={values:O?T:w("values"),keys:b?T:w("keys"),entries:k},v)for(x in _)x in z||i(z,x,_[x]);else r(r.P+r.F*(g||j),n,_);return _}},function(t,n){t.exports=!0},function(t,n,e){var o=e(13),r=e(14),i=e(15),a=e(17),u=function(t,n,e){var s,c,f,p=t&u.F,l=t&u.G,g=t&u.S,d=t&u.P,h=t&u.B,y=t&u.W,b=l?r:r[n]||(r[n]={}),v=b.prototype,_=l?o:g?o[n]:(o[n]||{}).prototype;l&&(e=n);for(s in e)(c=!p&&_&&void 0!==_[s])&&s in b||(f=c?_[s]:e[s],b[s]=l&&"function"!=typeof _[s]?e[s]:h&&c?i(f,o):y&&_[s]==f?function(t){var n=function(n,e,o){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,e)}return new t(n,e,o)}return t.apply(this,arguments)};return n.prototype=t.prototype,n}(f):d&&"function"==typeof f?i(Function.call,f):f,d&&((b.virtual||(b.virtual={}))[s]=f,t&u.R&&v&&!v[s]&&a(v,s,f)))};u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,t.exports=u},function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(t,n){var e=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=e)},function(t,n,e){var o=e(16);t.exports=function(t,n,e){if(o(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,o){return t.call(n,e,o)};case 3:return function(e,o,r){return t.call(n,e,o,r)}}return function(){return t.apply(n,arguments)}}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n,e){var o=e(18),r=e(26);t.exports=e(22)?function(t,n,e){return o.f(t,n,r(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){var o=e(19),r=e(21),i=e(25),a=Object.defineProperty;n.f=e(22)?Object.defineProperty:function(t,n,e){if(o(t),n=i(n,!0),o(e),r)try{return a(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){var o=e(20);t.exports=function(t){if(!o(t))throw TypeError(t+" is not an object!");return t}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,e){t.exports=!e(22)&&!e(23)(function(){return 7!=Object.defineProperty(e(24)("div"),"a",{get:function(){return 7}}).a})},function(t,n,e){t.exports=!e(23)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n,e){var o=e(20),r=e(13).document,i=o(r)&&o(r.createElement);t.exports=function(t){return i?r.createElement(t):{}}},function(t,n,e){var o=e(20);t.exports=function(t,n){if(!o(t))return t;var e,r;if(n&&"function"==typeof(e=t.toString)&&!o(r=e.call(t)))return r;if("function"==typeof(e=t.valueOf)&&!o(r=e.call(t)))return r;if(!n&&"function"==typeof(e=t.toString)&&!o(r=e.call(t)))return r;throw TypeError("Can't convert object to primitive value")}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,e){t.exports=e(17)},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n){t.exports={}},function(t,n,e){"use strict";var o=e(31),r=e(26),i=e(46),a={};e(17)(a,e(47)("iterator"),function(){return this}),t.exports=function(t,n,e){t.prototype=o(a,{next:r(1,e)}),i(t,n+" Iterator")}},function(t,n,e){var o=e(19),r=e(32),i=e(44),a=e(41)("IE_PROTO"),u=function(){},s=function(){var t,n=e(24)("iframe"),o=i.length;for(n.style.display="none",e(45).appendChild(n),n.src="javascript:",t=n.contentWindow.document,t.open(),t.write("<script>document.F=Object<\/script>"),t.close(),s=t.F;o--;)delete s.prototype[i[o]];return s()};t.exports=Object.create||function(t,n){var e;return null!==t?(u.prototype=o(t),e=new u,u.prototype=null,e[a]=t):e=s(),void 0===n?e:r(e,n)}},function(t,n,e){var o=e(18),r=e(19),i=e(33);t.exports=e(22)?Object.defineProperties:function(t,n){r(t);for(var e,a=i(n),u=a.length,s=0;u>s;)o.f(t,e=a[s++],n[e]);return t}},function(t,n,e){var o=e(34),r=e(44);t.exports=Object.keys||function(t){return o(t,r)}},function(t,n,e){var o=e(28),r=e(35),i=e(38)(!1),a=e(41)("IE_PROTO");t.exports=function(t,n){var e,u=r(t),s=0,c=[];for(e in u)e!=a&&o(u,e)&&c.push(e);for(;n.length>s;)o(u,e=n[s++])&&(~i(c,e)||c.push(e));return c}},function(t,n,e){var o=e(36),r=e(9);t.exports=function(t){return o(r(t))}},function(t,n,e){var o=e(37);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==o(t)?t.split(""):Object(t)}},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n,e){var o=e(35),r=e(39),i=e(40);t.exports=function(t){return function(n,e,a){var u,s=o(n),c=r(s.length),f=i(a,c);if(t&&e!=e){for(;c>f;)if((u=s[f++])!=u)return!0}else for(;c>f;f++)if((t||f in s)&&s[f]===e)return t||f||0;return!t&&-1}}},function(t,n,e){var o=e(8),r=Math.min;t.exports=function(t){return t>0?r(o(t),9007199254740991):0}},function(t,n,e){var o=e(8),r=Math.max,i=Math.min;t.exports=function(t,n){return t=o(t),t<0?r(t+n,0):i(t,n)}},function(t,n,e){var o=e(42)("keys"),r=e(43);t.exports=function(t){return o[t]||(o[t]=r(t))}},function(t,n,e){var o=e(13),r=o["__core-js_shared__"]||(o["__core-js_shared__"]={});t.exports=function(t){return r[t]||(r[t]={})}},function(t,n){var e=0,o=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+o).toString(36))}},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n,e){t.exports=e(13).document&&document.documentElement},function(t,n,e){var o=e(18).f,r=e(28),i=e(47)("toStringTag");t.exports=function(t,n,e){t&&!r(t=e?t:t.prototype,i)&&o(t,i,{configurable:!0,value:n})}},function(t,n,e){var o=e(42)("wks"),r=e(43),i=e(13).Symbol,a="function"==typeof i;(t.exports=function(t){return o[t]||(o[t]=a&&i[t]||(a?i:r)("Symbol."+t))}).store=o},function(t,n,e){var o=e(28),r=e(49),i=e(41)("IE_PROTO"),a=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=r(t),o(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?a:null}},function(t,n,e){var o=e(9);t.exports=function(t){return Object(o(t))}},function(t,n,e){e(51);for(var o=e(13),r=e(17),i=e(29),a=e(47)("toStringTag"),u=["NodeList","DOMTokenList","MediaList","StyleSheetList","CSSRuleList"],s=0;s<5;s++){var c=u[s],f=o[c],p=f&&f.prototype;p&&!p[a]&&r(p,a,c),i[c]=i.Array}},function(t,n,e){"use strict";var o=e(52),r=e(53),i=e(29),a=e(35);t.exports=e(10)(Array,"Array",function(t,n){this._t=a(t),this._i=0,this._k=n},function(){var t=this._t,n=this._k,e=this._i++;return!t||e>=t.length?(this._t=void 0,r(1)):"keys"==n?r(0,e):"values"==n?r(0,t[e]):r(0,[e,t[e]])},"values"),i.Arguments=i.Array,o("keys"),o("values"),o("entries")},function(t,n){t.exports=function(){}},function(t,n){t.exports=function(t,n){return{value:n,done:!!t}}},function(t,n,e){n.f=e(47)},function(t,n,e){t.exports={default:e(56),__esModule:!0}},function(t,n,e){e(57),e(68),e(69),e(70),t.exports=e(14).Symbol},function(t,n,e){"use strict";var o=e(13),r=e(28),i=e(22),a=e(12),u=e(27),s=e(58).KEY,c=e(23),f=e(42),p=e(46),l=e(43),g=e(47),d=e(54),h=e(59),y=e(60),b=e(61),v=e(64),_=e(19),x=e(35),m=e(25),w=e(26),S=e(31),O=e(65),j=e(67),z=e(18),P=e(33),T=j.f,k=z.f,M=O.f,E=o.Symbol,F=o.JSON,A=F&&F.stringify,D=g("_hidden"),I=g("toPrimitive"),N={}.propertyIsEnumerable,C=f("symbol-registry"),B=f("symbols"),L=f("op-symbols"),R=Object.prototype,W="function"==typeof E,U=o.QObject,J=!U||!U.prototype||!U.prototype.findChild,K=i&&c(function(){return 7!=S(k({},"a",{get:function(){return k(this,"a",{value:7}).a}})).a})?function(t,n,e){var o=T(R,n);o&&delete R[n],k(t,n,e),o&&t!==R&&k(R,n,o)}:k,q=function(t){var n=B[t]=S(E.prototype);return n._k=t,n},G=W&&"symbol"==typeof E.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof E},Y=function(t,n,e){return t===R&&Y(L,n,e),_(t),n=m(n,!0),_(e),r(B,n)?(e.enumerable?(r(t,D)&&t[D][n]&&(t[D][n]=!1),e=S(e,{enumerable:w(0,!1)})):(r(t,D)||k(t,D,w(1,{})),t[D][n]=!0),K(t,n,e)):k(t,n,e)},V=function(t,n){_(t);for(var e,o=b(n=x(n)),r=0,i=o.length;i>r;)Y(t,e=o[r++],n[e]);return t},H=function(t,n){return void 0===n?S(t):V(S(t),n)},Q=function(t){var n=N.call(this,t=m(t,!0));return!(this===R&&r(B,t)&&!r(L,t))&&(!(n||!r(this,t)||!r(B,t)||r(this,D)&&this[D][t])||n)},X=function(t,n){if(t=x(t),n=m(n,!0),t!==R||!r(B,n)||r(L,n)){var e=T(t,n);return!e||!r(B,n)||r(t,D)&&t[D][n]||(e.enumerable=!0),e}},Z=function(t){for(var n,e=M(x(t)),o=[],i=0;e.length>i;)r(B,n=e[i++])||n==D||n==s||o.push(n);return o},$=function(t){for(var n,e=t===R,o=M(e?L:x(t)),i=[],a=0;o.length>a;)!r(B,n=o[a++])||e&&!r(R,n)||i.push(B[n]);return i};W||(E=function(){if(this instanceof E)throw TypeError("Symbol is not a constructor!");var t=l(arguments.length>0?arguments[0]:void 0),n=function(e){this===R&&n.call(L,e),r(this,D)&&r(this[D],t)&&(this[D][t]=!1),K(this,t,w(1,e))};return i&&J&&K(R,t,{configurable:!0,set:n}),q(t)},u(E.prototype,"toString",function(){return this._k}),j.f=X,z.f=Y,e(66).f=O.f=Z,e(63).f=Q,e(62).f=$,i&&!e(11)&&u(R,"propertyIsEnumerable",Q,!0),d.f=function(t){return q(g(t))}),a(a.G+a.W+a.F*!W,{Symbol:E});for(var tt="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),nt=0;tt.length>nt;)g(tt[nt++]);for(var tt=P(g.store),nt=0;tt.length>nt;)h(tt[nt++]);a(a.S+a.F*!W,"Symbol",{for:function(t){return r(C,t+="")?C[t]:C[t]=E(t)},keyFor:function(t){if(G(t))return y(C,t);throw TypeError(t+" is not a symbol!")},useSetter:function(){J=!0},useSimple:function(){J=!1}}),a(a.S+a.F*!W,"Object",{create:H,defineProperty:Y,defineProperties:V,getOwnPropertyDescriptor:X,getOwnPropertyNames:Z,getOwnPropertySymbols:$}),F&&a(a.S+a.F*(!W||c(function(){var t=E();return"[null]"!=A([t])||"{}"!=A({a:t})||"{}"!=A(Object(t))})),"JSON",{stringify:function(t){if(void 0!==t&&!G(t)){for(var n,e,o=[t],r=1;arguments.length>r;)o.push(arguments[r++]);return n=o[1],"function"==typeof n&&(e=n),!e&&v(n)||(n=function(t,n){if(e&&(n=e.call(this,t,n)),!G(n))return n}),o[1]=n,A.apply(F,o)}}}),E.prototype[I]||e(17)(E.prototype,I,E.prototype.valueOf),p(E,"Symbol"),p(Math,"Math",!0),p(o.JSON,"JSON",!0)},function(t,n,e){var o=e(43)("meta"),r=e(20),i=e(28),a=e(18).f,u=0,s=Object.isExtensible||function(){return!0},c=!e(23)(function(){return s(Object.preventExtensions({}))}),f=function(t){a(t,o,{value:{i:"O"+ ++u,w:{}}})},p=function(t,n){if(!r(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,o)){if(!s(t))return"F";if(!n)return"E";f(t)}return t[o].i},l=function(t,n){if(!i(t,o)){if(!s(t))return!0;if(!n)return!1;f(t)}return t[o].w},g=function(t){return c&&d.NEED&&s(t)&&!i(t,o)&&f(t),t},d=t.exports={KEY:o,NEED:!1,fastKey:p,getWeak:l,onFreeze:g}},function(t,n,e){var o=e(13),r=e(14),i=e(11),a=e(54),u=e(18).f;t.exports=function(t){var n=r.Symbol||(r.Symbol=i?{}:o.Symbol||{});"_"==t.charAt(0)||t in n||u(n,t,{value:a.f(t)})}},function(t,n,e){var o=e(33),r=e(35);t.exports=function(t,n){for(var e,i=r(t),a=o(i),u=a.length,s=0;u>s;)if(i[e=a[s++]]===n)return e}},function(t,n,e){var o=e(33),r=e(62),i=e(63);t.exports=function(t){var n=o(t),e=r.f;if(e)for(var a,u=e(t),s=i.f,c=0;u.length>c;)s.call(t,a=u[c++])&&n.push(a);return n}},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n){n.f={}.propertyIsEnumerable},function(t,n,e){var o=e(37);t.exports=Array.isArray||function(t){return"Array"==o(t)}},function(t,n,e){var o=e(35),r=e(66).f,i={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],u=function(t){try{return r(t)}catch(t){return a.slice()}};t.exports.f=function(t){return a&&"[object Window]"==i.call(t)?u(t):r(o(t))}},function(t,n,e){var o=e(34),r=e(44).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return o(t,r)}},function(t,n,e){var o=e(63),r=e(26),i=e(35),a=e(25),u=e(28),s=e(21),c=Object.getOwnPropertyDescriptor;n.f=e(22)?c:function(t,n){if(t=i(t),n=a(n,!0),s)try{return c(t,n)}catch(t){}if(u(t,n))return r(!o.f.call(t,n),t[n])}},function(t,n){},function(t,n,e){e(59)("asyncIterator")},function(t,n,e){e(59)("observable")},function(t,n){"use strict";var e={api_banner_list:"https://api.xiaozhangbang.org/banner/list",api_bigshot_list:"https://api.xiaozhangbang.org/bigshot/list",api_driedfood_list:"https://api.xiaozhangbang.org/driedfood/list",api_wechat_login:"https://api.xiaozhangbang.org/wechat/login",api_user_info:"https://api.xiaozhangbang.org/user/info",api_wechat_getuserinfo:"https://api.xiaozhangbang.org/wechat/getuserinfo",api_bigshot_detail:"https://api.xiaozhangbang.org/bigshot/detail",api_driedfood_detail:"https://api.xiaozhangbang.org/driedfood/detail",api_driedfood_comment_list:"https://api.xiaozhangbang.org/driedfood/comment/list",api_bigshot_comment_list:"https://api.xiaozhangbang.org/bigshot/comment/list",api_user_collection:"https://api.xiaozhangbang.org/user/collection",api_user_uncollection:"https://api.xiaozhangbang.org/user/uncollection",api_user_subscribe:"https://api.xiaozhangbang.org/user/subscribe",user_subscribe_driedfood:"https://api.xiaozhangbang.org/user/subscribe/driedfood",user_subscribe_bigshot:"https://api.xiaozhangbang.org/user/subscribe/bigshot",api_user_unsubscribe:"https://api.xiaozhangbang.org/user/unsubscribe",api_user_collection_list:"https://api.xiaozhangbang.org/user/collection/list",api_user_subscribe_list:"https://api.xiaozhangbang.org/user/subscribe/list",api_user_driedfood_click:"https://api.xiaozhangbang.org/user/driedfood/click",api_user_bigshot_click:"https://api.xiaozhangbang.org/user/bigshot/click",api_driedfood_video_detail:"https://api.xiaozhangbang.org/driedfood/video/detail",api_driedfood_video_play:"https://api.xiaozhangbang.org/driedfood/video/play",api_user_driedfood_play:"https://api.xiaozhangbang.org/user/driedfood/play",api_bigshot_video_detail:"https://api.xiaozhangbang.org/bigshot/video/detail",api_bigshot_video_play:"https://api.xiaozhangbang.org/bigshot/video/play",api_user_bigshot_play:"https://api.xiaozhangbang.org/user/bigshot/play",api_bigshot_comment_point:"https://api.xiaozhangbang.org/bigshot/comment/point",api_driedfood_comment_point:"https://api.xiaozhangbang.org/driedfood/comment/point",api_user_recharge:"https://api.xiaozhangbang.org/user/recharge",api_user_create_bigshot_comment:"https://api.xiaozhangbang.org/user/create/bigshot/comment",api_user_create_driedfood_comment:"https://api.xiaozhangbang.org/user/create/driedfood/comment",api_user_account_info:"https://api.xiaozhangbang.org/user/account/info",api_user_bangbi_recode:"https://api.xiaozhangbang.org/user/bangbi/recode",api_user_info_update:"https://api.xiaozhangbang.org/user/info/update",api_user_join_vip:"https://api.xiaozhangbang.org/user/join/vip",api_xlog:"https://api.xiaozhangbang.org/debug"};t.exports=e},,,,,,function(t,n,e){"use strict";n.__esModule=!0;var o=e(78),r=function(t){return t&&t.__esModule?t:{default:t}}(o);n.default=function(t,n,e){return n in t?(0,r.default)(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}},function(t,n,e){t.exports={default:e(79),__esModule:!0}},function(t,n,e){e(80);var o=e(14).Object;t.exports=function(t,n,e){return o.defineProperty(t,n,e)}},function(t,n,e){var o=e(12);o(o.S+o.F*!e(22),"Object",{defineProperty:e(18).f})},,,,,,,,function(t,n,e){"use strict";var o,r=e(77),i=function(t){return t&&t.__esModule?t:{default:t}}(r),a=e(2),u=getApp(),s=u.getURL();Page({data:(o={money:0,cindex:0,interest:[],scale:["请选择","1家校区","2-5家校区","6家及以上校区"],sindex:0,company:["请选择","在线教育","体制内","职业教育","国际教育","艺术教育","幼儿教育","K12教育","语言教育"]},(0,i.default)(o,"cindex",0),(0,i.default)(o,"choose",new Array(8)),(0,i.default)(o,"submitFlag",!1),(0,i.default)(o,"playStatus",null),o),onLoad:function(){},onShow:function(){var t=this;wx.getBackgroundAudioPlayerState({success:function(n){n.title=wx.getStorageSync("musicTitle"),n.bg=wx.getStorageSync("musicBg"),n.id=wx.getStorageSync("musicId"),console.log(n),t.setData({playStatus:n})}})},onShareAppMessage:function(t){return{title:"校长得道--加入邦友",path:"/pages/vip/vip"}},payForVip:function(t){wx.request({url:s.api_user_join_vip,data:{token:u.globalData.token},method:"POST",success:function(t){if(t.data.code)wx.showToast({title:t.data.msg,icon:"success",duration:2e3});else if(!0!==t.data.data){var n=t.data.data;wx.requestPayment({timeStamp:n.timeStamp.toString(),nonceStr:n.nonceStr,package:n.package,signType:n.signType,paySign:n.paySign,success:function(t){console.log(t),wx.showToast({title:"支付成功!",icon:"success",duration:2e3,complete:function(){wx.setStorageSync("vip",!0),wx.navigateBack({delta:1})}})},fail:function(t){console.log(t),wx.showToast({title:"取消充值!",icon:"fail",duration:2e3})}})}else wx.showToast({title:t.data.msg,icon:"success",duration:2e3,complete:function(){wx.setStorageSync("vip",!0),wx.navigateBack({delta:1})}})}})},choose:function(t){var n=this,e=t.currentTarget.dataset,o=a.clone(n.data.choose);o[e.index]?o[e.index]=null:o[e.index]=e.value,n.setData({choose:o})},scaleChange:function(t){this.setData({sindex:t.detail.value})},companyChange:function(t){this.setData({cindex:t.detail.value})},formSubmit:function(t){var n=this,e=t.detail.value;if(console.log(e),e.real_name.length<2)return wx.showToast({title:"姓名不合法",duration:2e3}),!1;if(e.mobile.length<11)return wx.showToast({title:"手机不合法",duration:2e3}),!1;var o=a.clone(e);if(o.interest=n.data.choose.join(","),e.scale>0?o.scale=n.data.scale[e.scale]:o.scale="",e.company_type>0?o.company_type=n.data.company[e.company_type]:o.company_type="",o.token=u.globalData.token,n.data.submitFlag)wx.showToast({title:"提交太频繁!",icon:"success",duration:2e3}),setTimeout(function(){n.setData({submitFlag:!1})},5e3);else{var r;n.setData({submitFlag:!0}),wx.request((r={url:s.api_user_info_update,data:o,method:"POST"},(0,i.default)(r,"method","POST"),(0,i.default)(r,"success",function(t){console.log(t),t.data.code?wx.showToast({title:t.data.msg,icon:"success",duration:2e3}):(wx.showToast({title:t.data.msg,icon:"success",duration:2e3}),setTimeout(function(){n.payForVip()},2e3)),n.setData({submitFlag:!1})}),r))}},openPlay:function(t){var n=this,e=n.data.playStatus.id;return e&&("d"==e.substr(0,1)?wx.navigateTo({url:"../dk_play/play?play=true&id="+e.substr(1)}):wx.navigateTo({url:"../gh_play/play?play=true&id="+e.substr(1)})),!1},stopMusic:function(t){var n=this;wx.pauseBackgroundAudio();var e=a.clone(n.data.playStatus);return e.status=0,n.setData({playStatus:e}),!1},playMusic:function(t){var n=this;wx.playBackgroundAudio({dataUrl:n.data.playStatus.dataUrl,title:n.data.playStatus.title,coverImgUrl:n.data.playStatus.bg});var e=a.clone(n.data.playStatus);return e.status=1,n.setData({playStatus:e}),!1}})}]);