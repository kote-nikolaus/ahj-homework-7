!function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=70)}([function(t,n,e){(function(n){var e=function(t){return t&&t.Math==Math&&t};t.exports=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof n&&n)||Function("return this")()}).call(this,e(49))},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n,e){var r=e(3),o=e(30),i=e(9),c=e(11),u=Object.defineProperty;n.f=r?u:function(t,n,e){if(i(t),n=c(n,!0),i(e),o)try{return u(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){var r=e(4);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,e){var r=e(0),o=e(18),i=e(1),c=e(19),u=e(23),a=e(42),f=o("wks"),s=r.Symbol,l=a?s:s&&s.withoutSetter||c;t.exports=function(t){return i(f,t)||(u&&i(s,t)?f[t]=s[t]:f[t]=l("Symbol."+t)),f[t]}},function(t,n,e){var r=e(27),o=e(29);t.exports=function(t){return r(o(t))}},function(t,n,e){var r=e(3),o=e(2),i=e(10);t.exports=r?function(t,n,e){return o.f(t,n,i(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){var r=e(5);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,e){var r=e(5);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n){t.exports={}},function(t,n,e){var r=e(38),o=e(0),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][n]||o[t]&&o[t][n]}},function(t,n,e){var r=e(0),o=e(15).f,i=e(8),c=e(32),u=e(16),a=e(37),f=e(54);t.exports=function(t,n){var e,s,l,p,d,v=t.target,y=t.global,h=t.stat;if(e=y?r:h?r[v]||u(v,{}):(r[v]||{}).prototype)for(s in n){if(p=n[s],l=t.noTargetGet?(d=o(e,s))&&d.value:e[s],!f(y?s:v+(h?".":"#")+s,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;a(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),c(e,s,p,t)}}},function(t,n,e){var r=e(3),o=e(26),i=e(10),c=e(7),u=e(11),a=e(1),f=e(30),s=Object.getOwnPropertyDescriptor;n.f=r?s:function(t,n){if(t=c(t),n=u(n,!0),f)try{return s(t,n)}catch(t){}if(a(t,n))return i(!o.f.call(t,n),t[n])}},function(t,n,e){var r=e(0),o=e(8);t.exports=function(t,n){try{o(r,t,n)}catch(e){r[t]=n}return n}},function(t,n,e){var r=e(18),o=e(19),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,n,e){var r=e(36),o=e(34);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.6.4",mode:r?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++e+r).toString(36)}},function(t,n,e){var r=e(39),o=e(22).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,n,e){var r=e(40),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,n,e){var r=e(4);t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},function(t,n,e){var r=e(28);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,n,e){var r=e(29);t.exports=function(t){return Object(r(t))}},function(t,n,e){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);n.f=i?function(t){var n=o(this,t);return!!n&&n.enumerable}:r},function(t,n,e){var r=e(4),o=e(28),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,n,e){var r=e(3),o=e(4),i=e(31);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,n,e){var r=e(0),o=e(5),i=r.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},function(t,n,e){var r=e(0),o=e(8),i=e(1),c=e(16),u=e(33),a=e(35),f=a.get,s=a.enforce,l=String(String).split("String");(t.exports=function(t,n,e,u){var a=!!u&&!!u.unsafe,f=!!u&&!!u.enumerable,p=!!u&&!!u.noTargetGet;"function"==typeof e&&("string"!=typeof n||i(e,"name")||o(e,"name",n),s(e).source=l.join("string"==typeof n?n:"")),t!==r?(a?!p&&t[n]&&(f=!0):delete t[n],f?t[n]=e:o(t,n,e)):f?t[n]=e:c(n,e)})(Function.prototype,"toString",(function(){return"function"==typeof this&&f(this).source||u(this)}))},function(t,n,e){var r=e(34),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return o.call(t)}),t.exports=r.inspectSource},function(t,n,e){var r=e(0),o=e(16),i=r["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},function(t,n,e){var r,o,i,c=e(50),u=e(0),a=e(5),f=e(8),s=e(1),l=e(17),p=e(12),d=u.WeakMap;if(c){var v=new d,y=v.get,h=v.has,m=v.set;r=function(t,n){return m.call(v,t,n),n},o=function(t){return y.call(v,t)||{}},i=function(t){return h.call(v,t)}}else{var g=l("state");p[g]=!0,r=function(t,n){return f(t,g,n),n},o=function(t){return s(t,g)?t[g]:{}},i=function(t){return s(t,g)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(n){var e;if(!a(n)||(e=o(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return e}}}},function(t,n){t.exports=!1},function(t,n,e){var r=e(1),o=e(51),i=e(15),c=e(2);t.exports=function(t,n){for(var e=o(n),u=c.f,a=i.f,f=0;f<e.length;f++){var s=e[f];r(t,s)||u(t,s,a(n,s))}}},function(t,n,e){var r=e(0);t.exports=r},function(t,n,e){var r=e(1),o=e(7),i=e(52).indexOf,c=e(12);t.exports=function(t,n){var e,u=o(t),a=0,f=[];for(e in u)!r(c,e)&&r(u,e)&&f.push(e);for(;n.length>a;)r(u,e=n[a++])&&(~i(f,e)||f.push(e));return f}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,e){var r=e(23);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,n,e){var r=e(39),o=e(22);t.exports=Object.keys||function(t){return r(t,o)}},function(t,n,e){var r=e(6);n.f=r},function(t,n,e){var r=e(5),o=e(24),i=e(6)("species");t.exports=function(t,n){var e;return o(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!o(e.prototype)?r(e)&&null===(e=e[i])&&(e=void 0):e=void 0),new(void 0===e?Array:e)(0===n?0:n)}},function(t,n,e){var r,o,i=e(0),c=e(68),u=i.process,a=u&&u.versions,f=a&&a.v8;f?o=(r=f.split("."))[0]+r[1]:c&&(!(r=c.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=c.match(/Chrome\/(\d+)/))&&(o=r[1]),t.exports=o&&+o},function(t,n,e){},function(t,n,e){"use strict";var r=e(14),o=e(0),i=e(13),c=e(36),u=e(3),a=e(23),f=e(42),s=e(4),l=e(1),p=e(24),d=e(5),v=e(9),y=e(25),h=e(7),m=e(11),g=e(10),b=e(55),x=e(43),S=e(20),w=e(58),O=e(41),j=e(15),E=e(2),k=e(26),T=e(8),P=e(32),L=e(18),M=e(17),_=e(12),I=e(19),C=e(6),F=e(44),N=e(59),q=e(60),A=e(35),D=e(61).forEach,B=M("hidden"),H=C("toPrimitive"),R=A.set,W=A.getterFor("Symbol"),G=Object.prototype,X=o.Symbol,z=i("JSON","stringify"),J=j.f,$=E.f,K=w.f,Q=k.f,V=L("symbols"),Y=L("op-symbols"),U=L("string-to-symbol-registry"),Z=L("symbol-to-string-registry"),tt=L("wks"),nt=o.QObject,et=!nt||!nt.prototype||!nt.prototype.findChild,rt=u&&s((function(){return 7!=b($({},"a",{get:function(){return $(this,"a",{value:7}).a}})).a}))?function(t,n,e){var r=J(G,n);r&&delete G[n],$(t,n,e),r&&t!==G&&$(G,n,r)}:$,ot=function(t,n){var e=V[t]=b(X.prototype);return R(e,{type:"Symbol",tag:t,description:n}),u||(e.description=n),e},it=f?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof X},ct=function(t,n,e){t===G&&ct(Y,n,e),v(t);var r=m(n,!0);return v(e),l(V,r)?(e.enumerable?(l(t,B)&&t[B][r]&&(t[B][r]=!1),e=b(e,{enumerable:g(0,!1)})):(l(t,B)||$(t,B,g(1,{})),t[B][r]=!0),rt(t,r,e)):$(t,r,e)},ut=function(t,n){v(t);var e=h(n),r=x(e).concat(lt(e));return D(r,(function(n){u&&!at.call(e,n)||ct(t,n,e[n])})),t},at=function(t){var n=m(t,!0),e=Q.call(this,n);return!(this===G&&l(V,n)&&!l(Y,n))&&(!(e||!l(this,n)||!l(V,n)||l(this,B)&&this[B][n])||e)},ft=function(t,n){var e=h(t),r=m(n,!0);if(e!==G||!l(V,r)||l(Y,r)){var o=J(e,r);return!o||!l(V,r)||l(e,B)&&e[B][r]||(o.enumerable=!0),o}},st=function(t){var n=K(h(t)),e=[];return D(n,(function(t){l(V,t)||l(_,t)||e.push(t)})),e},lt=function(t){var n=t===G,e=K(n?Y:h(t)),r=[];return D(e,(function(t){!l(V,t)||n&&!l(G,t)||r.push(V[t])})),r};(a||(P((X=function(){if(this instanceof X)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,n=I(t),e=function(t){this===G&&e.call(Y,t),l(this,B)&&l(this[B],n)&&(this[B][n]=!1),rt(this,n,g(1,t))};return u&&et&&rt(G,n,{configurable:!0,set:e}),ot(n,t)}).prototype,"toString",(function(){return W(this).tag})),P(X,"withoutSetter",(function(t){return ot(I(t),t)})),k.f=at,E.f=ct,j.f=ft,S.f=w.f=st,O.f=lt,F.f=function(t){return ot(C(t),t)},u&&($(X.prototype,"description",{configurable:!0,get:function(){return W(this).description}}),c||P(G,"propertyIsEnumerable",at,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!a,sham:!a},{Symbol:X}),D(x(tt),(function(t){N(t)})),r({target:"Symbol",stat:!0,forced:!a},{for:function(t){var n=String(t);if(l(U,n))return U[n];var e=X(n);return U[n]=e,Z[e]=n,e},keyFor:function(t){if(!it(t))throw TypeError(t+" is not a symbol");if(l(Z,t))return Z[t]},useSetter:function(){et=!0},useSimple:function(){et=!1}}),r({target:"Object",stat:!0,forced:!a,sham:!u},{create:function(t,n){return void 0===n?b(t):ut(b(t),n)},defineProperty:ct,defineProperties:ut,getOwnPropertyDescriptor:ft}),r({target:"Object",stat:!0,forced:!a},{getOwnPropertyNames:st,getOwnPropertySymbols:lt}),r({target:"Object",stat:!0,forced:s((function(){O.f(1)}))},{getOwnPropertySymbols:function(t){return O.f(y(t))}}),z)&&r({target:"JSON",stat:!0,forced:!a||s((function(){var t=X();return"[null]"!=z([t])||"{}"!=z({a:t})||"{}"!=z(Object(t))}))},{stringify:function(t,n,e){for(var r,o=[t],i=1;arguments.length>i;)o.push(arguments[i++]);if(r=n,(d(n)||void 0!==t)&&!it(t))return p(n)||(n=function(t,n){if("function"==typeof r&&(n=r.call(this,t,n)),!it(n))return n}),o[1]=n,z.apply(null,o)}});X.prototype[H]||T(X.prototype,H,X.prototype.valueOf),q(X,"Symbol"),_[B]=!0},function(t,n){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(t){"object"==typeof window&&(e=window)}t.exports=e},function(t,n,e){var r=e(0),o=e(33),i=r.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},function(t,n,e){var r=e(13),o=e(20),i=e(41),c=e(9);t.exports=r("Reflect","ownKeys")||function(t){var n=o.f(c(t)),e=i.f;return e?n.concat(e(t)):n}},function(t,n,e){var r=e(7),o=e(21),i=e(53),c=function(t){return function(n,e,c){var u,a=r(n),f=o(a.length),s=i(c,f);if(t&&e!=e){for(;f>s;)if((u=a[s++])!=u)return!0}else for(;f>s;s++)if((t||s in a)&&a[s]===e)return t||s||0;return!t&&-1}};t.exports={includes:c(!0),indexOf:c(!1)}},function(t,n,e){var r=e(40),o=Math.max,i=Math.min;t.exports=function(t,n){var e=r(t);return e<0?o(e+n,0):i(e,n)}},function(t,n,e){var r=e(4),o=/#|\.prototype\./,i=function(t,n){var e=u[c(t)];return e==f||e!=a&&("function"==typeof n?r(n):!!n)},c=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},u=i.data={},a=i.NATIVE="N",f=i.POLYFILL="P";t.exports=i},function(t,n,e){var r,o=e(9),i=e(56),c=e(22),u=e(12),a=e(57),f=e(31),s=e(17),l=s("IE_PROTO"),p=function(){},d=function(t){return"<script>"+t+"<\/script>"},v=function(){try{r=document.domain&&new ActiveXObject("htmlfile")}catch(t){}var t,n;v=r?function(t){t.write(d("")),t.close();var n=t.parentWindow.Object;return t=null,n}(r):((n=f("iframe")).style.display="none",a.appendChild(n),n.src=String("javascript:"),(t=n.contentWindow.document).open(),t.write(d("document.F=Object")),t.close(),t.F);for(var e=c.length;e--;)delete v.prototype[c[e]];return v()};u[l]=!0,t.exports=Object.create||function(t,n){var e;return null!==t?(p.prototype=o(t),e=new p,p.prototype=null,e[l]=t):e=v(),void 0===n?e:i(e,n)}},function(t,n,e){var r=e(3),o=e(2),i=e(9),c=e(43);t.exports=r?Object.defineProperties:function(t,n){i(t);for(var e,r=c(n),u=r.length,a=0;u>a;)o.f(t,e=r[a++],n[e]);return t}},function(t,n,e){var r=e(13);t.exports=r("document","documentElement")},function(t,n,e){var r=e(7),o=e(20).f,i={}.toString,c="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return c&&"[object Window]"==i.call(t)?function(t){try{return o(t)}catch(t){return c.slice()}}(t):o(r(t))}},function(t,n,e){var r=e(38),o=e(1),i=e(44),c=e(2).f;t.exports=function(t){var n=r.Symbol||(r.Symbol={});o(n,t)||c(n,t,{value:i.f(t)})}},function(t,n,e){var r=e(2).f,o=e(1),i=e(6)("toStringTag");t.exports=function(t,n,e){t&&!o(t=e?t:t.prototype,i)&&r(t,i,{configurable:!0,value:n})}},function(t,n,e){var r=e(62),o=e(27),i=e(25),c=e(21),u=e(45),a=[].push,f=function(t){var n=1==t,e=2==t,f=3==t,s=4==t,l=6==t,p=5==t||l;return function(d,v,y,h){for(var m,g,b=i(d),x=o(b),S=r(v,y,3),w=c(x.length),O=0,j=h||u,E=n?j(d,w):e?j(d,0):void 0;w>O;O++)if((p||O in x)&&(g=S(m=x[O],O,b),t))if(n)E[O]=g;else if(g)switch(t){case 3:return!0;case 5:return m;case 6:return O;case 2:a.call(E,m)}else if(s)return!1;return l?-1:f||s?s:E}};t.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6)}},function(t,n,e){var r=e(63);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 0:return function(){return t.call(n)};case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,n,e){"use strict";var r=e(14),o=e(3),i=e(0),c=e(1),u=e(5),a=e(2).f,f=e(37),s=i.Symbol;if(o&&"function"==typeof s&&(!("description"in s.prototype)||void 0!==s().description)){var l={},p=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),n=this instanceof p?new s(t):void 0===t?s():s(t);return""===t&&(l[n]=!0),n};f(p,s);var d=p.prototype=s.prototype;d.constructor=p;var v=d.toString,y="Symbol(test)"==String(s("test")),h=/^Symbol\((.*)\)[^)]+$/;a(d,"description",{configurable:!0,get:function(){var t=u(this)?this.valueOf():this,n=v.call(t);if(c(l,t))return"";var e=y?n.slice(7,-1):n.replace(h,"$1");return""===e?void 0:e}}),r({global:!0,forced:!0},{Symbol:p})}},function(t,n,e){"use strict";var r=e(14),o=e(4),i=e(24),c=e(5),u=e(25),a=e(21),f=e(66),s=e(45),l=e(67),p=e(6),d=e(46),v=p("isConcatSpreadable"),y=d>=51||!o((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),h=l("concat"),m=function(t){if(!c(t))return!1;var n=t[v];return void 0!==n?!!n:i(t)};r({target:"Array",proto:!0,forced:!y||!h},{concat:function(t){var n,e,r,o,i,c=u(this),l=s(c,0),p=0;for(n=-1,r=arguments.length;n<r;n++)if(i=-1===n?c:arguments[n],m(i)){if(p+(o=a(i.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(e=0;e<o;e++,p++)e in i&&f(l,p,i[e])}else{if(p>=9007199254740991)throw TypeError("Maximum allowed index exceeded");f(l,p++,i)}return l.length=p,l}})},function(t,n,e){"use strict";var r=e(11),o=e(2),i=e(10);t.exports=function(t,n,e){var c=r(n);c in t?o.f(t,c,i(0,e)):t[c]=e}},function(t,n,e){var r=e(4),o=e(6),i=e(46),c=o("species");t.exports=function(t){return i>=51||!r((function(){var n=[];return(n.constructor={})[c]=function(){return{foo:1}},1!==n[t](Boolean).foo}))}},function(t,n,e){var r=e(13);t.exports=r("navigator","userAgent")||""},function(t,n,e){var r=e(3),o=e(2).f,i=Function.prototype,c=i.toString,u=/^\s*function ([^ (]*)/;r&&!("name"in i)&&o(i,"name",{configurable:!0,get:function(){try{return c.call(this).match(u)[1]}catch(t){return""}}})},function(t,n,e){"use strict";e.r(n);e(47),e(48),e(64),e(65),e(69);var r=document.getElementById("tasks-box"),o=document.getElementById("add-button"),i=document.getElementById("modal"),c=document.getElementById("name"),u=document.getElementById("description");function a(t){t.preventDefault(),i.classList.remove("modal-active")}function f(t){if(t.preventDefault(),i.classList.add("modal-active"),t.currentTarget.classList.contains("add-button"))c.value="",u.value="",i.dataset.id="-1";else{var n=t.currentTarget.closest(".ticket-full");c.value=n.querySelector(".ticket-name").textContent,i.dataset.id=n.dataset.id}document.getElementById("cancel-button").addEventListener("click",a),i.addEventListener("submit",p)}function s(t,n){var e="method=".concat(n),r="https://ahj-homework-7.herokuapp.com/?".concat(e),o=new XMLHttpRequest;o.open("POST",r,!0),o.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),o.responseType="json",o.addEventListener("readystatechange",(function(){4===o.readyState&&200===o.status&&console.log(o.response)})),o.send(t)}function l(){r.innerHTML="";var t="https://ahj-homework-7.herokuapp.com/?".concat("method=allTickets"),n=new XMLHttpRequest;n.open("GET",t,!0),n.responseType="json",n.addEventListener("readystatechange",(function(){if(4===n.readyState&&200===n.status)for(var t=n.response,e=0;e<t.length;e+=1){var o=y(t[e]);r.appendChild(o)}})),n.send()}function p(t){(t.preventDefault(),"-1"!==i.dataset.id)?s("id=".concat(i.dataset.id,"&name=").concat(c.value,"&description=").concat(u.value),"editTicket"):s("name=".concat(c.value,"&description=").concat(u.value),"createTicket");l(),a(t)}function d(t){t.preventDefault();var n=t.currentTarget,e=n.closest(".ticket-full").dataset.id;n.classList.contains("done-button-pressed")?s("id=".concat(e,"&status=false"),"changeStatus"):s("id=".concat(e,"&status=true"),"changeStatus");l()}function v(t){t.preventDefault();var n=t.currentTarget.closest(".ticket-full").querySelector(".ticket-description");if(n.classList.contains("hidden")){var e=t.currentTarget.closest(".ticket-full").dataset.id,r="method=ticketById&id=".concat(e),o="https://ahj-homework-7.herokuapp.com/?".concat(r),i=new XMLHttpRequest;i.open("GET",o,!0),i.responseType="json",i.addEventListener("readystatechange",(function(){if(4===i.readyState&&200===i.status){var t=i.response;n.textContent=t.description,n.classList.remove("hidden")}})),i.send()}else l()}function y(t){var n=document.createElement("div");n.className="ticket-full",n.dataset.id=t.id,n.innerHTML="<div class='ticket-short'>\n  <button class='done-button'></button>\n  <div class='ticket-name'>".concat(t.name,"</div>\n  <div class='ticket-date'>").concat(t.created,"</div>\n  <button class='ticket-button edit-button'></button></div>\n  <div class='ticket-description hidden'></div>");var e=n.querySelector(".done-button");return t.status&&e.classList.add("done-button-pressed"),e.addEventListener("click",d),n.querySelector(".edit-button").addEventListener("click",f),n.querySelector(".ticket-name").addEventListener("click",v),n}o.addEventListener("click",f),document.addEventListener("DOMContentLoaded",l)}]);
//# sourceMappingURL=main.js.map