!function(t){function n(r){if(e[r])return e[r].exports;var o=e[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}var e={};n.m=t,n.c=e,n.p="",n(0)}([function(t,n,e){t.exports=e(1)},function(t,n,e){"use strict";var r=(e(2),e(71));App({onLaunch:function(){this.getToken(),this.getUserSystem()},getUserInfo:function(t){var n=this;this.globalData.userInfo?"function"==typeof t&&t(this.globalData.userInfo):(n.globalData.userInfo=wx.getStorageSync("userInfo"),"function"==typeof t&&t(n.globalData.userInfo))},getToken:function(){var t=this,n=wx.getStorageSync("token");n?t.globalData.token=n:(wx.showLoading({title:"加载中..."}),wx.login({method:"POST",success:function(n){n.code?(wx.request({url:r.api_wechat_login,method:"POST",data:{code:n.code},success:function(n){console.log(n.data),n.data.code||(t.globalData.token=n.data.data,wx.setStorageSync("token",n.data.data),wx.hideLoading(),wx.reLaunch({url:"ganhuo?login=true"}))}}),wx.getUserInfo({success:function(t){wx.setStorageSync("userInfo",t)}})):console.log("获取用户登录态失败！"+n.errMsg)},withCredentials:!0}))},xlog:function(t,n){var e=this,o=(new Date).getMilliseconds();wx.request({url:r.api_xlog,method:"POST",data:{k:t+"||"+n,token:e.globalData.token,time:o}})},getURL:function(){for(var t in r){if(r[t].indexOf(this.globalData.version)>0)break;r[t]+=this.globalData.version}return r},getErr:function(t,n){var e=new Date;return wx.setStorageSync("cache_error",wx.getStorageSync("cache_error")+"#"+e.getTime()+"|"+n+"|"+t)},getUserSystem:function(){var t=this;wx.getSystemInfo({success:function(n){t.globalData.userSystem=n}})},globalData:{userInfo:null,token:null,cartData:{type:"",id:0,price:0,vip:0,title:"",detailId:0},version:"?v=v1.1.8",userSystem:null}})},function(t,n,e){"use strict";function r(t){return t=t.toString(),t[1]?t:"0"+t}function o(t){var n=t.getFullYear(),e=t.getMonth()+1,o=t.getDate(),i=t.getHours(),a=t.getMinutes(),u=t.getSeconds();return[n,e,o].map(r).join("/")+" "+[i,a,u].map(r).join(":")}function i(t){var n;if("object"==(void 0===t?"undefined":(0,s.default)(t)))if(null===t)n=null;else if(t instanceof Array){n=[];for(var e=0,r=t.length;e<r;e++)n.push(i(t[e]))}else{n={};for(var o in t)n[o]=i(t[o])}else n=t;return n}function a(){}var u=e(3),s=function(t){return t&&t.__esModule?t:{default:t}}(u);e(71);t.exports={formatNumber:r,formatTime:o,login:a,clone:i}},function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}n.__esModule=!0;var o=e(4),i=r(o),a=e(55),u=r(a),s="function"==typeof u.default&&"symbol"==typeof i.default?function(t){return typeof t}:function(t){return t&&"function"==typeof u.default&&t.constructor===u.default&&t!==u.default.prototype?"symbol":typeof t};n.default="function"==typeof u.default&&"symbol"===s(i.default)?function(t){return void 0===t?"undefined":s(t)}:function(t){return t&&"function"==typeof u.default&&t.constructor===u.default&&t!==u.default.prototype?"symbol":void 0===t?"undefined":s(t)}},function(t,n,e){t.exports={default:e(5),__esModule:!0}},function(t,n,e){e(6),e(50),t.exports=e(54).f("iterator")},function(t,n,e){"use strict";var r=e(7)(!0);e(10)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,n=this._t,e=this._i;return e>=n.length?{value:void 0,done:!0}:(t=r(n,e),this._i+=t.length,{value:t,done:!1})})},function(t,n,e){var r=e(8),o=e(9);t.exports=function(t){return function(n,e){var i,a,u=String(o(n)),s=r(e),c=u.length;return s<0||s>=c?t?"":void 0:(i=u.charCodeAt(s),i<55296||i>56319||s+1===c||(a=u.charCodeAt(s+1))<56320||a>57343?t?u.charAt(s):i:t?u.slice(s,s+2):a-56320+(i-55296<<10)+65536)}}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n,e){"use strict";var r=e(11),o=e(12),i=e(27),a=e(17),u=e(28),s=e(29),c=e(30),f=e(46),p=e(48),l=e(47)("iterator"),g=!([].keys&&"next"in[].keys()),h=function(){return this};t.exports=function(t,n,e,d,b,y,v){c(e,n,d);var _,x,m,w=function(t){if(!g&&t in z)return z[t];switch(t){case"keys":case"values":return function(){return new e(this,t)}}return function(){return new e(this,t)}},S=n+" Iterator",O="values"==b,j=!1,z=t.prototype,k=z[l]||z["@@iterator"]||b&&z[b],P=k||w(b),E=b?O?w("entries"):P:void 0,I="Array"==n?z.entries||k:k;if(I&&(m=p(I.call(new t)))!==Object.prototype&&(f(m,S,!0),r||u(m,l)||a(m,l,h)),O&&k&&"values"!==k.name&&(j=!0,P=function(){return k.call(this)}),r&&!v||!g&&!j&&z[l]||a(z,l,P),s[n]=P,s[S]=h,b)if(_={values:O?P:w("values"),keys:y?P:w("keys"),entries:E},v)for(x in _)x in z||i(z,x,_[x]);else o(o.P+o.F*(g||j),n,_);return _}},function(t,n){t.exports=!0},function(t,n,e){var r=e(13),o=e(14),i=e(15),a=e(17),u=function(t,n,e){var s,c,f,p=t&u.F,l=t&u.G,g=t&u.S,h=t&u.P,d=t&u.B,b=t&u.W,y=l?o:o[n]||(o[n]={}),v=y.prototype,_=l?r:g?r[n]:(r[n]||{}).prototype;l&&(e=n);for(s in e)(c=!p&&_&&void 0!==_[s])&&s in y||(f=c?_[s]:e[s],y[s]=l&&"function"!=typeof _[s]?e[s]:d&&c?i(f,r):b&&_[s]==f?function(t){var n=function(n,e,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,e)}return new t(n,e,r)}return t.apply(this,arguments)};return n.prototype=t.prototype,n}(f):h&&"function"==typeof f?i(Function.call,f):f,h&&((y.virtual||(y.virtual={}))[s]=f,t&u.R&&v&&!v[s]&&a(v,s,f)))};u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,t.exports=u},function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(t,n){var e=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=e)},function(t,n,e){var r=e(16);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n,e){var r=e(18),o=e(26);t.exports=e(22)?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){var r=e(19),o=e(21),i=e(25),a=Object.defineProperty;n.f=e(22)?Object.defineProperty:function(t,n,e){if(r(t),n=i(n,!0),r(e),o)try{return a(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){var r=e(20);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,e){t.exports=!e(22)&&!e(23)(function(){return 7!=Object.defineProperty(e(24)("div"),"a",{get:function(){return 7}}).a})},function(t,n,e){t.exports=!e(23)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n,e){var r=e(20),o=e(13).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,n,e){var r=e(20);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,e){t.exports=e(17)},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n){t.exports={}},function(t,n,e){"use strict";var r=e(31),o=e(26),i=e(46),a={};e(17)(a,e(47)("iterator"),function(){return this}),t.exports=function(t,n,e){t.prototype=r(a,{next:o(1,e)}),i(t,n+" Iterator")}},function(t,n,e){var r=e(19),o=e(32),i=e(44),a=e(41)("IE_PROTO"),u=function(){},s=function(){var t,n=e(24)("iframe"),r=i.length;for(n.style.display="none",e(45).appendChild(n),n.src="javascript:",t=n.contentWindow.document,t.open(),t.write("<script>document.F=Object<\/script>"),t.close(),s=t.F;r--;)delete s.prototype[i[r]];return s()};t.exports=Object.create||function(t,n){var e;return null!==t?(u.prototype=r(t),e=new u,u.prototype=null,e[a]=t):e=s(),void 0===n?e:o(e,n)}},function(t,n,e){var r=e(18),o=e(19),i=e(33);t.exports=e(22)?Object.defineProperties:function(t,n){o(t);for(var e,a=i(n),u=a.length,s=0;u>s;)r.f(t,e=a[s++],n[e]);return t}},function(t,n,e){var r=e(34),o=e(44);t.exports=Object.keys||function(t){return r(t,o)}},function(t,n,e){var r=e(28),o=e(35),i=e(38)(!1),a=e(41)("IE_PROTO");t.exports=function(t,n){var e,u=o(t),s=0,c=[];for(e in u)e!=a&&r(u,e)&&c.push(e);for(;n.length>s;)r(u,e=n[s++])&&(~i(c,e)||c.push(e));return c}},function(t,n,e){var r=e(36),o=e(9);t.exports=function(t){return r(o(t))}},function(t,n,e){var r=e(37);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n,e){var r=e(35),o=e(39),i=e(40);t.exports=function(t){return function(n,e,a){var u,s=r(n),c=o(s.length),f=i(a,c);if(t&&e!=e){for(;c>f;)if((u=s[f++])!=u)return!0}else for(;c>f;f++)if((t||f in s)&&s[f]===e)return t||f||0;return!t&&-1}}},function(t,n,e){var r=e(8),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n,e){var r=e(8),o=Math.max,i=Math.min;t.exports=function(t,n){return t=r(t),t<0?o(t+n,0):i(t,n)}},function(t,n,e){var r=e(42)("keys"),o=e(43);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,n,e){var r=e(13),o=r["__core-js_shared__"]||(r["__core-js_shared__"]={});t.exports=function(t){return o[t]||(o[t]={})}},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n,e){t.exports=e(13).document&&document.documentElement},function(t,n,e){var r=e(18).f,o=e(28),i=e(47)("toStringTag");t.exports=function(t,n,e){t&&!o(t=e?t:t.prototype,i)&&r(t,i,{configurable:!0,value:n})}},function(t,n,e){var r=e(42)("wks"),o=e(43),i=e(13).Symbol,a="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=a&&i[t]||(a?i:o)("Symbol."+t))}).store=r},function(t,n,e){var r=e(28),o=e(49),i=e(41)("IE_PROTO"),a=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?a:null}},function(t,n,e){var r=e(9);t.exports=function(t){return Object(r(t))}},function(t,n,e){e(51);for(var r=e(13),o=e(17),i=e(29),a=e(47)("toStringTag"),u=["NodeList","DOMTokenList","MediaList","StyleSheetList","CSSRuleList"],s=0;s<5;s++){var c=u[s],f=r[c],p=f&&f.prototype;p&&!p[a]&&o(p,a,c),i[c]=i.Array}},function(t,n,e){"use strict";var r=e(52),o=e(53),i=e(29),a=e(35);t.exports=e(10)(Array,"Array",function(t,n){this._t=a(t),this._i=0,this._k=n},function(){var t=this._t,n=this._k,e=this._i++;return!t||e>=t.length?(this._t=void 0,o(1)):"keys"==n?o(0,e):"values"==n?o(0,t[e]):o(0,[e,t[e]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(t,n){t.exports=function(){}},function(t,n){t.exports=function(t,n){return{value:n,done:!!t}}},function(t,n,e){n.f=e(47)},function(t,n,e){t.exports={default:e(56),__esModule:!0}},function(t,n,e){e(57),e(68),e(69),e(70),t.exports=e(14).Symbol},function(t,n,e){"use strict";var r=e(13),o=e(28),i=e(22),a=e(12),u=e(27),s=e(58).KEY,c=e(23),f=e(42),p=e(46),l=e(43),g=e(47),h=e(54),d=e(59),b=e(60),y=e(61),v=e(64),_=e(19),x=e(35),m=e(25),w=e(26),S=e(31),O=e(65),j=e(67),z=e(18),k=e(33),P=j.f,E=z.f,I=O.f,M=r.Symbol,T=r.JSON,D=T&&T.stringify,A=g("_hidden"),F=g("toPrimitive"),N={}.propertyIsEnumerable,L=f("symbol-registry"),C=f("symbols"),R=f("op-symbols"),U=Object.prototype,W="function"==typeof M,J=r.QObject,G=!J||!J.prototype||!J.prototype.findChild,K=i&&c(function(){return 7!=S(E({},"a",{get:function(){return E(this,"a",{value:7}).a}})).a})?function(t,n,e){var r=P(U,n);r&&delete U[n],E(t,n,e),r&&t!==U&&E(U,n,r)}:E,Y=function(t){var n=C[t]=S(M.prototype);return n._k=t,n},q=W&&"symbol"==typeof M.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof M},B=function(t,n,e){return t===U&&B(R,n,e),_(t),n=m(n,!0),_(e),o(C,n)?(e.enumerable?(o(t,A)&&t[A][n]&&(t[A][n]=!1),e=S(e,{enumerable:w(0,!1)})):(o(t,A)||E(t,A,w(1,{})),t[A][n]=!0),K(t,n,e)):E(t,n,e)},H=function(t,n){_(t);for(var e,r=y(n=x(n)),o=0,i=r.length;i>o;)B(t,e=r[o++],n[e]);return t},Q=function(t,n){return void 0===n?S(t):H(S(t),n)},V=function(t){var n=N.call(this,t=m(t,!0));return!(this===U&&o(C,t)&&!o(R,t))&&(!(n||!o(this,t)||!o(C,t)||o(this,A)&&this[A][t])||n)},X=function(t,n){if(t=x(t),n=m(n,!0),t!==U||!o(C,n)||o(R,n)){var e=P(t,n);return!e||!o(C,n)||o(t,A)&&t[A][n]||(e.enumerable=!0),e}},Z=function(t){for(var n,e=I(x(t)),r=[],i=0;e.length>i;)o(C,n=e[i++])||n==A||n==s||r.push(n);return r},$=function(t){for(var n,e=t===U,r=I(e?R:x(t)),i=[],a=0;r.length>a;)!o(C,n=r[a++])||e&&!o(U,n)||i.push(C[n]);return i};W||(M=function(){if(this instanceof M)throw TypeError("Symbol is not a constructor!");var t=l(arguments.length>0?arguments[0]:void 0),n=function(e){this===U&&n.call(R,e),o(this,A)&&o(this[A],t)&&(this[A][t]=!1),K(this,t,w(1,e))};return i&&G&&K(U,t,{configurable:!0,set:n}),Y(t)},u(M.prototype,"toString",function(){return this._k}),j.f=X,z.f=B,e(66).f=O.f=Z,e(63).f=V,e(62).f=$,i&&!e(11)&&u(U,"propertyIsEnumerable",V,!0),h.f=function(t){return Y(g(t))}),a(a.G+a.W+a.F*!W,{Symbol:M});for(var tt="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),nt=0;tt.length>nt;)g(tt[nt++]);for(var tt=k(g.store),nt=0;tt.length>nt;)d(tt[nt++]);a(a.S+a.F*!W,"Symbol",{for:function(t){return o(L,t+="")?L[t]:L[t]=M(t)},keyFor:function(t){if(q(t))return b(L,t);throw TypeError(t+" is not a symbol!")},useSetter:function(){G=!0},useSimple:function(){G=!1}}),a(a.S+a.F*!W,"Object",{create:Q,defineProperty:B,defineProperties:H,getOwnPropertyDescriptor:X,getOwnPropertyNames:Z,getOwnPropertySymbols:$}),T&&a(a.S+a.F*(!W||c(function(){var t=M();return"[null]"!=D([t])||"{}"!=D({a:t})||"{}"!=D(Object(t))})),"JSON",{stringify:function(t){if(void 0!==t&&!q(t)){for(var n,e,r=[t],o=1;arguments.length>o;)r.push(arguments[o++]);return n=r[1],"function"==typeof n&&(e=n),!e&&v(n)||(n=function(t,n){if(e&&(n=e.call(this,t,n)),!q(n))return n}),r[1]=n,D.apply(T,r)}}}),M.prototype[F]||e(17)(M.prototype,F,M.prototype.valueOf),p(M,"Symbol"),p(Math,"Math",!0),p(r.JSON,"JSON",!0)},function(t,n,e){var r=e(43)("meta"),o=e(20),i=e(28),a=e(18).f,u=0,s=Object.isExtensible||function(){return!0},c=!e(23)(function(){return s(Object.preventExtensions({}))}),f=function(t){a(t,r,{value:{i:"O"+ ++u,w:{}}})},p=function(t,n){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,r)){if(!s(t))return"F";if(!n)return"E";f(t)}return t[r].i},l=function(t,n){if(!i(t,r)){if(!s(t))return!0;if(!n)return!1;f(t)}return t[r].w},g=function(t){return c&&h.NEED&&s(t)&&!i(t,r)&&f(t),t},h=t.exports={KEY:r,NEED:!1,fastKey:p,getWeak:l,onFreeze:g}},function(t,n,e){var r=e(13),o=e(14),i=e(11),a=e(54),u=e(18).f;t.exports=function(t){var n=o.Symbol||(o.Symbol=i?{}:r.Symbol||{});"_"==t.charAt(0)||t in n||u(n,t,{value:a.f(t)})}},function(t,n,e){var r=e(33),o=e(35);t.exports=function(t,n){for(var e,i=o(t),a=r(i),u=a.length,s=0;u>s;)if(i[e=a[s++]]===n)return e}},function(t,n,e){var r=e(33),o=e(62),i=e(63);t.exports=function(t){var n=r(t),e=o.f;if(e)for(var a,u=e(t),s=i.f,c=0;u.length>c;)s.call(t,a=u[c++])&&n.push(a);return n}},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n){n.f={}.propertyIsEnumerable},function(t,n,e){var r=e(37);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,n,e){var r=e(35),o=e(66).f,i={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],u=function(t){try{return o(t)}catch(t){return a.slice()}};t.exports.f=function(t){return a&&"[object Window]"==i.call(t)?u(t):o(r(t))}},function(t,n,e){var r=e(34),o=e(44).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,n,e){var r=e(63),o=e(26),i=e(35),a=e(25),u=e(28),s=e(21),c=Object.getOwnPropertyDescriptor;n.f=e(22)?c:function(t,n){if(t=i(t),n=a(n,!0),s)try{return c(t,n)}catch(t){}if(u(t,n))return o(!r.f.call(t,n),t[n])}},function(t,n){},function(t,n,e){e(59)("asyncIterator")},function(t,n,e){e(59)("observable")},function(t,n){"use strict";var e={api_banner_list:"https://api.xiaozhangbang.org/banner/list",api_bigshot_list:"https://api.xiaozhangbang.org/bigshot/list",api_driedfood_list:"https://api.xiaozhangbang.org/driedfood/list",api_wechat_login:"https://api.xiaozhangbang.org/wechat/login",api_user_info:"https://api.xiaozhangbang.org/user/info",api_wechat_getuserinfo:"https://api.xiaozhangbang.org/wechat/getuserinfo",api_bigshot_detail:"https://api.xiaozhangbang.org/bigshot/detail",api_driedfood_detail:"https://api.xiaozhangbang.org/driedfood/detail",api_driedfood_comment_list:"https://api.xiaozhangbang.org/driedfood/comment/list",api_bigshot_comment_list:"https://api.xiaozhangbang.org/bigshot/comment/list",api_user_collection:"https://api.xiaozhangbang.org/user/collection",api_user_uncollection:"https://api.xiaozhangbang.org/user/uncollection",api_user_subscribe:"https://api.xiaozhangbang.org/user/subscribe",user_subscribe_driedfood:"https://api.xiaozhangbang.org/user/subscribe/driedfood",user_subscribe_bigshot:"https://api.xiaozhangbang.org/user/subscribe/bigshot",api_user_unsubscribe:"https://api.xiaozhangbang.org/user/unsubscribe",api_user_collection_list:"https://api.xiaozhangbang.org/user/collection/list",api_user_subscribe_list:"https://api.xiaozhangbang.org/user/subscribe/list",api_user_driedfood_click:"https://api.xiaozhangbang.org/user/driedfood/click",api_user_bigshot_click:"https://api.xiaozhangbang.org/user/bigshot/click",api_driedfood_video_detail:"https://api.xiaozhangbang.org/driedfood/video/detail",api_driedfood_video_play:"https://api.xiaozhangbang.org/driedfood/video/play",api_user_driedfood_play:"https://api.xiaozhangbang.org/user/driedfood/play",api_bigshot_video_detail:"https://api.xiaozhangbang.org/bigshot/video/detail",api_bigshot_video_play:"https://api.xiaozhangbang.org/bigshot/video/play",api_user_bigshot_play:"https://api.xiaozhangbang.org/user/bigshot/play",api_bigshot_comment_point:"https://api.xiaozhangbang.org/bigshot/comment/point",api_driedfood_comment_point:"https://api.xiaozhangbang.org/driedfood/comment/point",api_user_recharge:"https://api.xiaozhangbang.org/user/recharge",api_user_create_bigshot_comment:"https://api.xiaozhangbang.org/user/create/bigshot/comment",api_user_create_driedfood_comment:"https://api.xiaozhangbang.org/user/create/driedfood/comment",api_user_account_info:"https://api.xiaozhangbang.org/user/account/info",api_user_bangbi_recode:"https://api.xiaozhangbang.org/user/bangbi/recode",api_user_info_update:"https://api.xiaozhangbang.org/user/info/update",api_user_join_vip:"https://api.xiaozhangbang.org/user/join/vip",api_xlog:"https://api.xiaozhangbang.org/debug"};t.exports=e}]);