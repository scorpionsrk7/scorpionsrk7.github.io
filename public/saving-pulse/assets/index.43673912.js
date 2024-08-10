var v_=Object.defineProperty;var y_=(e,t,n)=>t in e?v_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var z=(e,t,n)=>(y_(e,typeof t!="symbol"?t+"":t,n),n);function ly(e,t){return t.forEach(function(n){n&&typeof n!="string"&&!Array.isArray(n)&&Object.keys(n).forEach(function(r){if(r!=="default"&&!(r in e)){var i=Object.getOwnPropertyDescriptor(n,r);Object.defineProperty(e,r,i.get?i:{enumerable:!0,get:function(){return n[r]}})}})}),Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}const x_=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}};x_();function b_(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function Hn(e){if(e.__esModule)return e;var t=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(e).forEach(function(n){var r=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:function(){return e[n]}})}),t}var C={exports:{}},ne={};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var Zg=Object.getOwnPropertySymbols,w_=Object.prototype.hasOwnProperty,__=Object.prototype.propertyIsEnumerable;function S_(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function k_(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de",Object.getOwnPropertyNames(e)[0]==="5")return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map(function(o){return t[o]});if(r.join("")!=="0123456789")return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(o){i[o]=o}),Object.keys(Object.assign({},i)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var cy=k_()?Object.assign:function(e,t){for(var n,r=S_(e),i,o=1;o<arguments.length;o++){n=Object(arguments[o]);for(var s in n)w_.call(n,s)&&(r[s]=n[s]);if(Zg){i=Zg(n);for(var a=0;a<i.length;a++)__.call(n,i[a])&&(r[i[a]]=n[i[a]])}}return r};/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lh=cy,ho=60103,uy=60106;ne.Fragment=60107;ne.StrictMode=60108;ne.Profiler=60114;var dy=60109,fy=60110,hy=60112;ne.Suspense=60113;var py=60115,gy=60116;if(typeof Symbol=="function"&&Symbol.for){var Qt=Symbol.for;ho=Qt("react.element"),uy=Qt("react.portal"),ne.Fragment=Qt("react.fragment"),ne.StrictMode=Qt("react.strict_mode"),ne.Profiler=Qt("react.profiler"),dy=Qt("react.provider"),fy=Qt("react.context"),hy=Qt("react.forward_ref"),ne.Suspense=Qt("react.suspense"),py=Qt("react.memo"),gy=Qt("react.lazy")}var Jg=typeof Symbol=="function"&&Symbol.iterator;function C_(e){return e===null||typeof e!="object"?null:(e=Jg&&e[Jg]||e["@@iterator"],typeof e=="function"?e:null)}function oa(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var my={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},vy={};function po(e,t,n){this.props=e,this.context=t,this.refs=vy,this.updater=n||my}po.prototype.isReactComponent={};po.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error(oa(85));this.updater.enqueueSetState(this,e,t,"setState")};po.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function yy(){}yy.prototype=po.prototype;function Dh(e,t,n){this.props=e,this.context=t,this.refs=vy,this.updater=n||my}var zh=Dh.prototype=new yy;zh.constructor=Dh;Lh(zh,po.prototype);zh.isPureReactComponent=!0;var Ih={current:null},xy=Object.prototype.hasOwnProperty,by={key:!0,ref:!0,__self:!0,__source:!0};function wy(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)xy.call(t,r)&&!by.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:ho,type:e,key:o,ref:s,props:i,_owner:Ih.current}}function P_(e,t){return{$$typeof:ho,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function jh(e){return typeof e=="object"&&e!==null&&e.$$typeof===ho}function O_(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var em=/\/+/g;function Gu(e,t){return typeof e=="object"&&e!==null&&e.key!=null?O_(""+e.key):t.toString(36)}function gl(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case ho:case uy:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+Gu(s,0):r,Array.isArray(i)?(n="",e!=null&&(n=e.replace(em,"$&/")+"/"),gl(i,t,n,"",function(c){return c})):i!=null&&(jh(i)&&(i=P_(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(em,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",Array.isArray(e))for(var a=0;a<e.length;a++){o=e[a];var l=r+Gu(o,a);s+=gl(o,t,n,l,i)}else if(l=C_(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=r+Gu(o,a++),s+=gl(o,t,n,l,i);else if(o==="object")throw t=""+e,Error(oa(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t));return s}function Ra(e,t,n){if(e==null)return e;var r=[],i=0;return gl(e,r,"","",function(o){return t.call(n,o,i++)}),r}function M_(e){if(e._status===-1){var t=e._result;t=t(),e._status=0,e._result=t,t.then(function(n){e._status===0&&(n=n.default,e._status=1,e._result=n)},function(n){e._status===0&&(e._status=2,e._result=n)})}if(e._status===1)return e._result;throw e._result}var _y={current:null};function Un(){var e=_y.current;if(e===null)throw Error(oa(321));return e}var E_={ReactCurrentDispatcher:_y,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:Ih,IsSomeRendererActing:{current:!1},assign:Lh};ne.Children={map:Ra,forEach:function(e,t,n){Ra(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ra(e,function(){t++}),t},toArray:function(e){return Ra(e,function(t){return t})||[]},only:function(e){if(!jh(e))throw Error(oa(143));return e}};ne.Component=po;ne.PureComponent=Dh;ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=E_;ne.cloneElement=function(e,t,n){if(e==null)throw Error(oa(267,e));var r=Lh({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=Ih.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)xy.call(t,l)&&!by.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:ho,type:e.type,key:i,ref:o,props:r,_owner:s}};ne.createContext=function(e,t){return t===void 0&&(t=null),e={$$typeof:fy,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider={$$typeof:dy,_context:e},e.Consumer=e};ne.createElement=wy;ne.createFactory=function(e){var t=wy.bind(null,e);return t.type=e,t};ne.createRef=function(){return{current:null}};ne.forwardRef=function(e){return{$$typeof:hy,render:e}};ne.isValidElement=jh;ne.lazy=function(e){return{$$typeof:gy,_payload:{_status:-1,_result:e},_init:M_}};ne.memo=function(e,t){return{$$typeof:py,type:e,compare:t===void 0?null:t}};ne.useCallback=function(e,t){return Un().useCallback(e,t)};ne.useContext=function(e,t){return Un().useContext(e,t)};ne.useDebugValue=function(){};ne.useEffect=function(e,t){return Un().useEffect(e,t)};ne.useImperativeHandle=function(e,t,n){return Un().useImperativeHandle(e,t,n)};ne.useLayoutEffect=function(e,t){return Un().useLayoutEffect(e,t)};ne.useMemo=function(e,t){return Un().useMemo(e,t)};ne.useReducer=function(e,t,n){return Un().useReducer(e,t,n)};ne.useRef=function(e){return Un().useRef(e)};ne.useState=function(e){return Un().useState(e)};ne.version="17.0.2";C.exports=ne;var ft=C.exports,Ps=ly({__proto__:null,default:ft},[C.exports]),Dc={exports:{}},Yt={},Sy={exports:{}},ky={};/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){var t,n,r,i;if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}if(typeof window=="undefined"||typeof MessageChannel!="function"){var l=null,c=null,u=function(){if(l!==null)try{var L=e.unstable_now();l(!0,L),l=null}catch(N){throw setTimeout(u,0),N}};t=function(L){l!==null?setTimeout(t,0,L):(l=L,setTimeout(u,0))},n=function(L,N){c=setTimeout(L,N)},r=function(){clearTimeout(c)},e.unstable_shouldYield=function(){return!1},i=e.unstable_forceFrameRate=function(){}}else{var d=window.setTimeout,f=window.clearTimeout;if(typeof console!="undefined"){var g=window.cancelAnimationFrame;typeof window.requestAnimationFrame!="function"&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"),typeof g!="function"&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")}var v=!1,y=null,p=-1,m=5,x=0;e.unstable_shouldYield=function(){return e.unstable_now()>=x},i=function(){},e.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):m=0<L?Math.floor(1e3/L):5};var b=new MessageChannel,w=b.port2;b.port1.onmessage=function(){if(y!==null){var L=e.unstable_now();x=L+m;try{y(!0,L)?w.postMessage(null):(v=!1,y=null)}catch(N){throw w.postMessage(null),N}}else v=!1},t=function(L){y=L,v||(v=!0,w.postMessage(null))},n=function(L,N){p=d(function(){L(e.unstable_now())},N)},r=function(){f(p),p=-1}}function _(L,N){var T=L.length;L.push(N);e:for(;;){var $=T-1>>>1,F=L[$];if(F!==void 0&&0<M(F,N))L[$]=N,L[T]=F,T=$;else break e}}function k(L){return L=L[0],L===void 0?null:L}function P(L){var N=L[0];if(N!==void 0){var T=L.pop();if(T!==N){L[0]=T;e:for(var $=0,F=L.length;$<F;){var O=2*($+1)-1,Q=L[O],D=O+1,de=L[D];if(Q!==void 0&&0>M(Q,T))de!==void 0&&0>M(de,Q)?(L[$]=de,L[D]=T,$=D):(L[$]=Q,L[O]=T,$=O);else if(de!==void 0&&0>M(de,T))L[$]=de,L[D]=T,$=D;else break e}}return N}return null}function M(L,N){var T=L.sortIndex-N.sortIndex;return T!==0?T:L.id-N.id}var E=[],A=[],j=1,I=null,W=3,Z=!1,V=!1,K=!1;function q(L){for(var N=k(A);N!==null;){if(N.callback===null)P(A);else if(N.startTime<=L)P(A),N.sortIndex=N.expirationTime,_(E,N);else break;N=k(A)}}function ie(L){if(K=!1,q(L),!V)if(k(E)!==null)V=!0,t(ve);else{var N=k(A);N!==null&&n(ie,N.startTime-L)}}function ve(L,N){V=!1,K&&(K=!1,r()),Z=!0;var T=W;try{for(q(N),I=k(E);I!==null&&(!(I.expirationTime>N)||L&&!e.unstable_shouldYield());){var $=I.callback;if(typeof $=="function"){I.callback=null,W=I.priorityLevel;var F=$(I.expirationTime<=N);N=e.unstable_now(),typeof F=="function"?I.callback=F:I===k(E)&&P(E),q(N)}else P(E);I=k(E)}if(I!==null)var O=!0;else{var Q=k(A);Q!==null&&n(ie,Q.startTime-N),O=!1}return O}finally{I=null,W=T,Z=!1}}var vt=i;e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(L){L.callback=null},e.unstable_continueExecution=function(){V||Z||(V=!0,t(ve))},e.unstable_getCurrentPriorityLevel=function(){return W},e.unstable_getFirstCallbackNode=function(){return k(E)},e.unstable_next=function(L){switch(W){case 1:case 2:case 3:var N=3;break;default:N=W}var T=W;W=N;try{return L()}finally{W=T}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=vt,e.unstable_runWithPriority=function(L,N){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var T=W;W=L;try{return N()}finally{W=T}},e.unstable_scheduleCallback=function(L,N,T){var $=e.unstable_now();switch(typeof T=="object"&&T!==null?(T=T.delay,T=typeof T=="number"&&0<T?$+T:$):T=$,L){case 1:var F=-1;break;case 2:F=250;break;case 5:F=1073741823;break;case 4:F=1e4;break;default:F=5e3}return F=T+F,L={id:j++,callback:N,priorityLevel:L,startTime:T,expirationTime:F,sortIndex:-1},T>$?(L.sortIndex=T,_(A,L),k(E)===null&&L===k(A)&&(K?r():K=!0,n(ie,T-$))):(L.sortIndex=F,_(E,L),V||Z||(V=!0,t(ve))),L},e.unstable_wrapCallback=function(L){var N=W;return function(){var T=W;W=N;try{return L.apply(this,arguments)}finally{W=T}}}})(ky);Sy.exports=ky;/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zc=C.exports,Me=cy,Ke=Sy.exports;function R(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!zc)throw Error(R(227));var Cy=new Set,Os={};function fi(e,t){to(e,t),to(e+"Capture",t)}function to(e,t){for(Os[e]=t,e=0;e<t.length;e++)Cy.add(t[e])}var Bn=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),N_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,tm=Object.prototype.hasOwnProperty,nm={},rm={};function T_(e){return tm.call(rm,e)?!0:tm.call(nm,e)?!1:N_.test(e)?rm[e]=!0:(nm[e]=!0,!1)}function A_(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function $_(e,t,n,r){if(t===null||typeof t=="undefined"||A_(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function xt(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var rt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){rt[e]=new xt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];rt[t]=new xt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){rt[e]=new xt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){rt[e]=new xt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){rt[e]=new xt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){rt[e]=new xt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){rt[e]=new xt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){rt[e]=new xt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){rt[e]=new xt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Fh=/[\-:]([a-z])/g;function Bh(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Fh,Bh);rt[t]=new xt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Fh,Bh);rt[t]=new xt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Fh,Bh);rt[t]=new xt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){rt[e]=new xt(e,1,!1,e.toLowerCase(),null,!1,!1)});rt.xlinkHref=new xt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){rt[e]=new xt(e,1,!1,e.toLowerCase(),null,!0,!0)});function Wh(e,t,n,r){var i=rt.hasOwnProperty(t)?rt[t]:null,o=i!==null?i.type===0:r?!1:!(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N");o||($_(t,n,i,r)&&(n=null),r||i===null?T_(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var hi=zc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ko=60103,Kr=60106,Qn=60107,Vh=60108,ss=60114,Hh=60109,Uh=60110,Ic=60112,as=60113,Wl=60120,jc=60115,Yh=60116,Xh=60121,Kh=60128,Py=60129,Gh=60130,Qd=60131;if(typeof Symbol=="function"&&Symbol.for){var Ye=Symbol.for;Ko=Ye("react.element"),Kr=Ye("react.portal"),Qn=Ye("react.fragment"),Vh=Ye("react.strict_mode"),ss=Ye("react.profiler"),Hh=Ye("react.provider"),Uh=Ye("react.context"),Ic=Ye("react.forward_ref"),as=Ye("react.suspense"),Wl=Ye("react.suspense_list"),jc=Ye("react.memo"),Yh=Ye("react.lazy"),Xh=Ye("react.block"),Ye("react.scope"),Kh=Ye("react.opaque.id"),Py=Ye("react.debug_trace_mode"),Gh=Ye("react.offscreen"),Qd=Ye("react.legacy_hidden")}var im=typeof Symbol=="function"&&Symbol.iterator;function Mo(e){return e===null||typeof e!="object"?null:(e=im&&e[im]||e["@@iterator"],typeof e=="function"?e:null)}var qu;function Go(e){if(qu===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);qu=t&&t[1]||""}return`
`+qu+e}var Qu=!1;function La(e,t){if(!e||Qu)return"";Qu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(l){var r=l}Reflect.construct(e,[],t)}else{try{t.call()}catch(l){r=l}e.call(t.prototype)}else{try{throw Error()}catch(l){r=l}e()}}catch(l){if(l&&r&&typeof l.stack=="string"){for(var i=l.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a])return`
`+i[s].replace(" at new "," at ");while(1<=s&&0<=a);break}}}finally{Qu=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Go(e):""}function R_(e){switch(e.tag){case 5:return Go(e.type);case 16:return Go("Lazy");case 13:return Go("Suspense");case 19:return Go("SuspenseList");case 0:case 2:case 15:return e=La(e.type,!1),e;case 11:return e=La(e.type.render,!1),e;case 22:return e=La(e.type._render,!1),e;case 1:return e=La(e.type,!0),e;default:return""}}function Ii(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Qn:return"Fragment";case Kr:return"Portal";case ss:return"Profiler";case Vh:return"StrictMode";case as:return"Suspense";case Wl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Uh:return(e.displayName||"Context")+".Consumer";case Hh:return(e._context.displayName||"Context")+".Provider";case Ic:var t=e.render;return t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case jc:return Ii(e.type);case Xh:return Ii(e._render);case Yh:t=e._payload,e=e._init;try{return Ii(e(t))}catch{}}return null}function Sr(e){switch(typeof e){case"boolean":case"number":case"object":case"string":case"undefined":return e;default:return""}}function Oy(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function L_(e){var t=Oy(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n!="undefined"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Da(e){e._valueTracker||(e._valueTracker=L_(e))}function My(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Oy(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Vl(e){if(e=e||(typeof document!="undefined"?document:void 0),typeof e=="undefined")return null;try{return e.activeElement||e.body}catch{return e.body}}function Zd(e,t){var n=t.checked;return Me({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}function om(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Sr(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ey(e,t){t=t.checked,t!=null&&Wh(e,"checked",t,!1)}function Jd(e,t){Ey(e,t);var n=Sr(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ef(e,t.type,n):t.hasOwnProperty("defaultValue")&&ef(e,t.type,Sr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function sm(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ef(e,t,n){(t!=="number"||Vl(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}function D_(e){var t="";return zc.Children.forEach(e,function(n){n!=null&&(t+=n)}),t}function tf(e,t){return e=Me({children:void 0},t),(t=D_(t.children))&&(e.children=t),e}function ji(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Sr(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function nf(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(R(91));return Me({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function am(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(R(92));if(Array.isArray(n)){if(!(1>=n.length))throw Error(R(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Sr(n)}}function Ny(e,t){var n=Sr(t.value),r=Sr(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function lm(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}var rf={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};function Ty(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function of(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ty(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var za,Ay=function(e){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!==rf.svg||"innerHTML"in e)e.innerHTML=t;else{for(za=za||document.createElement("div"),za.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=za.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ms(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ls={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},z_=["Webkit","ms","Moz","O"];Object.keys(ls).forEach(function(e){z_.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ls[t]=ls[e]})});function $y(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ls.hasOwnProperty(e)&&ls[e]?(""+t).trim():t+"px"}function Ry(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=$y(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var I_=Me({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function sf(e,t){if(t){if(I_[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(R(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(R(60));if(!(typeof t.dangerouslySetInnerHTML=="object"&&"__html"in t.dangerouslySetInnerHTML))throw Error(R(61))}if(t.style!=null&&typeof t.style!="object")throw Error(R(62))}}function af(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}function qh(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var lf=null,Fi=null,Bi=null;function cm(e){if(e=aa(e)){if(typeof lf!="function")throw Error(R(280));var t=e.stateNode;t&&(t=Uc(t),lf(e.stateNode,e.type,t))}}function Ly(e){Fi?Bi?Bi.push(e):Bi=[e]:Fi=e}function Dy(){if(Fi){var e=Fi,t=Bi;if(Bi=Fi=null,cm(e),t)for(e=0;e<t.length;e++)cm(t[e])}}function Qh(e,t){return e(t)}function zy(e,t,n,r,i){return e(t,n,r,i)}function Zh(){}var Iy=Qh,Gr=!1,Zu=!1;function Jh(){(Fi!==null||Bi!==null)&&(Zh(),Dy())}function j_(e,t,n){if(Zu)return e(t,n);Zu=!0;try{return Iy(e,t,n)}finally{Zu=!1,Jh()}}function Es(e,t){var n=e.stateNode;if(n===null)return null;var r=Uc(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(R(231,t,typeof n));return n}var cf=!1;if(Bn)try{var Eo={};Object.defineProperty(Eo,"passive",{get:function(){cf=!0}}),window.addEventListener("test",Eo,Eo),window.removeEventListener("test",Eo,Eo)}catch{cf=!1}function F_(e,t,n,r,i,o,s,a,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(u){this.onError(u)}}var cs=!1,Hl=null,Ul=!1,uf=null,B_={onError:function(e){cs=!0,Hl=e}};function W_(e,t,n,r,i,o,s,a,l){cs=!1,Hl=null,F_.apply(B_,arguments)}function V_(e,t,n,r,i,o,s,a,l){if(W_.apply(this,arguments),cs){if(cs){var c=Hl;cs=!1,Hl=null}else throw Error(R(198));Ul||(Ul=!0,uf=c)}}function pi(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&1026)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function jy(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function um(e){if(pi(e)!==e)throw Error(R(188))}function H_(e){var t=e.alternate;if(!t){if(t=pi(e),t===null)throw Error(R(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return um(i),e;if(o===r)return um(i),t;o=o.sibling}throw Error(R(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(R(189))}}if(n.alternate!==r)throw Error(R(190))}if(n.tag!==3)throw Error(R(188));return n.stateNode.current===n?e:t}function Fy(e){if(e=H_(e),!e)return null;for(var t=e;;){if(t.tag===5||t.tag===6)return t;if(t.child)t.child.return=t,t=t.child;else{if(t===e)break;for(;!t.sibling;){if(!t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}}return null}function dm(e,t){for(var n=e.alternate;t!==null;){if(t===e||t===n)return!0;t=t.return}return!1}var By,ep,Wy,Vy,df=!1,mn=[],cr=null,ur=null,dr=null,Ns=new Map,Ts=new Map,No=[],fm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ff(e,t,n,r,i){return{blockedOn:e,domEventName:t,eventSystemFlags:n|16,nativeEvent:i,targetContainers:[r]}}function hm(e,t){switch(e){case"focusin":case"focusout":cr=null;break;case"dragenter":case"dragleave":ur=null;break;case"mouseover":case"mouseout":dr=null;break;case"pointerover":case"pointerout":Ns.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ts.delete(t.pointerId)}}function To(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e=ff(t,n,r,i,o),t!==null&&(t=aa(t),t!==null&&ep(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function U_(e,t,n,r,i){switch(t){case"focusin":return cr=To(cr,e,t,n,r,i),!0;case"dragenter":return ur=To(ur,e,t,n,r,i),!0;case"mouseover":return dr=To(dr,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Ns.set(o,To(Ns.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Ts.set(o,To(Ts.get(o)||null,e,t,n,r,i)),!0}return!1}function Y_(e){var t=qr(e.target);if(t!==null){var n=pi(t);if(n!==null){if(t=n.tag,t===13){if(t=jy(n),t!==null){e.blockedOn=t,Vy(e.lanePriority,function(){Ke.unstable_runWithPriority(e.priority,function(){Wy(n)})});return}}else if(t===3&&n.stateNode.hydrate){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ml(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ip(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n!==null)return t=aa(n),t!==null&&ep(t),e.blockedOn=n,!1;t.shift()}return!0}function pm(e,t,n){ml(e)&&n.delete(t)}function X_(){for(df=!1;0<mn.length;){var e=mn[0];if(e.blockedOn!==null){e=aa(e.blockedOn),e!==null&&By(e);break}for(var t=e.targetContainers;0<t.length;){var n=ip(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n!==null){e.blockedOn=n;break}t.shift()}e.blockedOn===null&&mn.shift()}cr!==null&&ml(cr)&&(cr=null),ur!==null&&ml(ur)&&(ur=null),dr!==null&&ml(dr)&&(dr=null),Ns.forEach(pm),Ts.forEach(pm)}function Ao(e,t){e.blockedOn===t&&(e.blockedOn=null,df||(df=!0,Ke.unstable_scheduleCallback(Ke.unstable_NormalPriority,X_)))}function Hy(e){function t(i){return Ao(i,e)}if(0<mn.length){Ao(mn[0],e);for(var n=1;n<mn.length;n++){var r=mn[n];r.blockedOn===e&&(r.blockedOn=null)}}for(cr!==null&&Ao(cr,e),ur!==null&&Ao(ur,e),dr!==null&&Ao(dr,e),Ns.forEach(t),Ts.forEach(t),n=0;n<No.length;n++)r=No[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<No.length&&(n=No[0],n.blockedOn===null);)Y_(n),n.blockedOn===null&&No.shift()}function Ia(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ti={animationend:Ia("Animation","AnimationEnd"),animationiteration:Ia("Animation","AnimationIteration"),animationstart:Ia("Animation","AnimationStart"),transitionend:Ia("Transition","TransitionEnd")},Ju={},Uy={};Bn&&(Uy=document.createElement("div").style,"AnimationEvent"in window||(delete Ti.animationend.animation,delete Ti.animationiteration.animation,delete Ti.animationstart.animation),"TransitionEvent"in window||delete Ti.transitionend.transition);function Fc(e){if(Ju[e])return Ju[e];if(!Ti[e])return e;var t=Ti[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Uy)return Ju[e]=t[n];return e}var Yy=Fc("animationend"),Xy=Fc("animationiteration"),Ky=Fc("animationstart"),Gy=Fc("transitionend"),qy=new Map,tp=new Map,K_=["abort","abort",Yy,"animationEnd",Xy,"animationIteration",Ky,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart","lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",Gy,"transitionEnd","waiting","waiting"];function np(e,t){for(var n=0;n<e.length;n+=2){var r=e[n],i=e[n+1];i="on"+(i[0].toUpperCase()+i.slice(1)),tp.set(r,t),qy.set(r,i),fi(i,[r])}}var G_=Ke.unstable_now;G_();var ye=8;function Ei(e){if((1&e)!==0)return ye=15,1;if((2&e)!==0)return ye=14,2;if((4&e)!==0)return ye=13,4;var t=24&e;return t!==0?(ye=12,t):(e&32)!==0?(ye=11,32):(t=192&e,t!==0?(ye=10,t):(e&256)!==0?(ye=9,256):(t=3584&e,t!==0?(ye=8,t):(e&4096)!==0?(ye=7,4096):(t=4186112&e,t!==0?(ye=6,t):(t=62914560&e,t!==0?(ye=5,t):e&67108864?(ye=4,67108864):(e&134217728)!==0?(ye=3,134217728):(t=805306368&e,t!==0?(ye=2,t):(1073741824&e)!==0?(ye=1,1073741824):(ye=8,e))))))}function q_(e){switch(e){case 99:return 15;case 98:return 10;case 97:case 96:return 8;case 95:return 2;default:return 0}}function Q_(e){switch(e){case 15:case 14:return 99;case 13:case 12:case 11:case 10:return 98;case 9:case 8:case 7:case 6:case 4:case 5:return 97;case 3:case 2:case 1:return 95;case 0:return 90;default:throw Error(R(358,e))}}function As(e,t){var n=e.pendingLanes;if(n===0)return ye=0;var r=0,i=0,o=e.expiredLanes,s=e.suspendedLanes,a=e.pingedLanes;if(o!==0)r=o,i=ye=15;else if(o=n&134217727,o!==0){var l=o&~s;l!==0?(r=Ei(l),i=ye):(a&=o,a!==0&&(r=Ei(a),i=ye))}else o=n&~s,o!==0?(r=Ei(o),i=ye):a!==0&&(r=Ei(a),i=ye);if(r===0)return 0;if(r=31-kr(r),r=n&((0>r?0:1<<r)<<1)-1,t!==0&&t!==r&&(t&s)===0){if(Ei(t),i<=ye)return t;ye=i}if(t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-kr(t),i=1<<n,r|=e[n],t&=~i;return r}function Qy(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Yl(e,t){switch(e){case 15:return 1;case 14:return 2;case 12:return e=Ni(24&~t),e===0?Yl(10,t):e;case 10:return e=Ni(192&~t),e===0?Yl(8,t):e;case 8:return e=Ni(3584&~t),e===0&&(e=Ni(4186112&~t),e===0&&(e=512)),e;case 2:return t=Ni(805306368&~t),t===0&&(t=268435456),t}throw Error(R(358,e))}function Ni(e){return e&-e}function ed(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Bc(e,t,n){e.pendingLanes|=t;var r=t-1;e.suspendedLanes&=r,e.pingedLanes&=r,e=e.eventTimes,t=31-kr(t),e[t]=n}var kr=Math.clz32?Math.clz32:eS,Z_=Math.log,J_=Math.LN2;function eS(e){return e===0?32:31-(Z_(e)/J_|0)|0}var tS=Ke.unstable_UserBlockingPriority,nS=Ke.unstable_runWithPriority,vl=!0;function rS(e,t,n,r){Gr||Zh();var i=rp,o=Gr;Gr=!0;try{zy(i,e,t,n,r)}finally{(Gr=o)||Jh()}}function iS(e,t,n,r){nS(tS,rp.bind(null,e,t,n,r))}function rp(e,t,n,r){if(vl){var i;if((i=(t&4)===0)&&0<mn.length&&-1<fm.indexOf(e))e=ff(null,e,t,n,r),mn.push(e);else{var o=ip(e,t,n,r);if(o===null)i&&hm(e,r);else{if(i){if(-1<fm.indexOf(e)){e=ff(o,e,t,n,r),mn.push(e);return}if(U_(o,e,t,n,r))return;hm(e,r)}ux(e,t,r,null,n)}}}}function ip(e,t,n,r){var i=qh(r);if(i=qr(i),i!==null){var o=pi(i);if(o===null)i=null;else{var s=o.tag;if(s===13){if(i=jy(o),i!==null)return i;i=null}else if(s===3){if(o.stateNode.hydrate)return o.tag===3?o.stateNode.containerInfo:null;i=null}else o!==i&&(i=null)}}return ux(e,t,r,i,n),null}var er=null,op=null,yl=null;function Zy(){if(yl)return yl;var e,t=op,n=t.length,r,i="value"in er?er.value:er.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return yl=i.slice(e,1<r?1-r:void 0)}function xl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ja(){return!0}function gm(){return!1}function Lt(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ja:gm,this.isPropagationStopped=gm,this}return Me(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ja)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ja)},persist:function(){},isPersistent:ja}),t}var go={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sp=Lt(go),sa=Me({},go,{view:0,detail:0}),oS=Lt(sa),td,nd,$o,Wc=Me({},sa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ap,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==$o&&($o&&e.type==="mousemove"?(td=e.screenX-$o.screenX,nd=e.screenY-$o.screenY):nd=td=0,$o=e),td)},movementY:function(e){return"movementY"in e?e.movementY:nd}}),mm=Lt(Wc),sS=Me({},Wc,{dataTransfer:0}),aS=Lt(sS),lS=Me({},sa,{relatedTarget:0}),rd=Lt(lS),cS=Me({},go,{animationName:0,elapsedTime:0,pseudoElement:0}),uS=Lt(cS),dS=Me({},go,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),fS=Lt(dS),hS=Me({},go,{data:0}),vm=Lt(hS),pS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vS(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=mS[e])?!!t[e]:!1}function ap(){return vS}var yS=Me({},sa,{key:function(e){if(e.key){var t=pS[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=xl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?gS[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ap,charCode:function(e){return e.type==="keypress"?xl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?xl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),xS=Lt(yS),bS=Me({},Wc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ym=Lt(bS),wS=Me({},sa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ap}),_S=Lt(wS),SS=Me({},go,{propertyName:0,elapsedTime:0,pseudoElement:0}),kS=Lt(SS),CS=Me({},Wc,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),PS=Lt(CS),OS=[9,13,27,32],lp=Bn&&"CompositionEvent"in window,us=null;Bn&&"documentMode"in document&&(us=document.documentMode);var MS=Bn&&"TextEvent"in window&&!us,Jy=Bn&&(!lp||us&&8<us&&11>=us),xm=String.fromCharCode(32),bm=!1;function ex(e,t){switch(e){case"keyup":return OS.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function tx(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ai=!1;function ES(e,t){switch(e){case"compositionend":return tx(t);case"keypress":return t.which!==32?null:(bm=!0,xm);case"textInput":return e=t.data,e===xm&&bm?null:e;default:return null}}function NS(e,t){if(Ai)return e==="compositionend"||!lp&&ex(e,t)?(e=Zy(),yl=op=er=null,Ai=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Jy&&t.locale!=="ko"?null:t.data;default:return null}}var TS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wm(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!TS[e.type]:t==="textarea"}function nx(e,t,n,r){Ly(r),t=Xl(t,"onChange"),0<t.length&&(n=new sp("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ds=null,$s=null;function AS(e){ax(e,0)}function Vc(e){var t=Ri(e);if(My(t))return e}function $S(e,t){if(e==="change")return t}var rx=!1;if(Bn){var id;if(Bn){var od="oninput"in document;if(!od){var _m=document.createElement("div");_m.setAttribute("oninput","return;"),od=typeof _m.oninput=="function"}id=od}else id=!1;rx=id&&(!document.documentMode||9<document.documentMode)}function Sm(){ds&&(ds.detachEvent("onpropertychange",ix),$s=ds=null)}function ix(e){if(e.propertyName==="value"&&Vc($s)){var t=[];if(nx(t,$s,e,qh(e)),e=AS,Gr)e(t);else{Gr=!0;try{Qh(e,t)}finally{Gr=!1,Jh()}}}}function RS(e,t,n){e==="focusin"?(Sm(),ds=t,$s=n,ds.attachEvent("onpropertychange",ix)):e==="focusout"&&Sm()}function LS(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Vc($s)}function DS(e,t){if(e==="click")return Vc(t)}function zS(e,t){if(e==="input"||e==="change")return Vc(t)}function IS(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ft=typeof Object.is=="function"?Object.is:IS,jS=Object.prototype.hasOwnProperty;function Rs(e,t){if(Ft(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++)if(!jS.call(t,n[r])||!Ft(e[n[r]],t[n[r]]))return!1;return!0}function km(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Cm(e,t){var n=km(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=km(n)}}function ox(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ox(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Pm(){for(var e=window,t=Vl();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Vl(e.document)}return t}function hf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var FS=Bn&&"documentMode"in document&&11>=document.documentMode,$i=null,pf=null,fs=null,gf=!1;function Om(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;gf||$i==null||$i!==Vl(r)||(r=$i,"selectionStart"in r&&hf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),fs&&Rs(fs,r)||(fs=r,r=Xl(pf,"onSelect"),0<r.length&&(t=new sp("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=$i)))}np("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),0);np("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1);np(K_,2);for(var Mm="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),sd=0;sd<Mm.length;sd++)tp.set(Mm[sd],0);to("onMouseEnter",["mouseout","mouseover"]);to("onMouseLeave",["mouseout","mouseover"]);to("onPointerEnter",["pointerout","pointerover"]);to("onPointerLeave",["pointerout","pointerover"]);fi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fi("onBeforeInput",["compositionend","keypress","textInput","paste"]);fi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));fi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sx=new Set("cancel close invalid load scroll toggle".split(" ").concat(qo));function Em(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,V_(r,t,void 0,e),e.currentTarget=null}function ax(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;Em(i,a,c),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,c=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;Em(i,a,c),o=l}}}if(Ul)throw e=uf,Ul=!1,uf=null,e}function be(e,t){var n=fx(t),r=e+"__bubble";n.has(r)||(cx(t,e,2,!1),n.add(r))}var Nm="_reactListening"+Math.random().toString(36).slice(2);function lx(e){e[Nm]||(e[Nm]=!0,Cy.forEach(function(t){sx.has(t)||Tm(t,!1,e,null),Tm(t,!0,e,null)}))}function Tm(e,t,n,r){var i=4<arguments.length&&arguments[4]!==void 0?arguments[4]:0,o=n;if(e==="selectionchange"&&n.nodeType!==9&&(o=n.ownerDocument),r!==null&&!t&&sx.has(e)){if(e!=="scroll")return;i|=2,o=r}var s=fx(o),a=e+"__"+(t?"capture":"bubble");s.has(a)||(t&&(i|=4),cx(o,e,i,t),s.add(a))}function cx(e,t,n,r){var i=tp.get(t);switch(i===void 0?2:i){case 0:i=rS;break;case 1:i=iS;break;default:i=rp}n=i.bind(null,t,n,e),i=void 0,!cf||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ux(e,t,n,r,i){var o=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=qr(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}j_(function(){var c=o,u=qh(n),d=[];e:{var f=qy.get(e);if(f!==void 0){var g=sp,v=e;switch(e){case"keypress":if(xl(n)===0)break e;case"keydown":case"keyup":g=xS;break;case"focusin":v="focus",g=rd;break;case"focusout":v="blur",g=rd;break;case"beforeblur":case"afterblur":g=rd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=mm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=aS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=_S;break;case Yy:case Xy:case Ky:g=uS;break;case Gy:g=kS;break;case"scroll":g=oS;break;case"wheel":g=PS;break;case"copy":case"cut":case"paste":g=fS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=ym}var y=(t&4)!==0,p=!y&&e==="scroll",m=y?f!==null?f+"Capture":null:f;y=[];for(var x=c,b;x!==null;){b=x;var w=b.stateNode;if(b.tag===5&&w!==null&&(b=w,m!==null&&(w=Es(x,m),w!=null&&y.push(Ls(x,w,b)))),p)break;x=x.return}0<y.length&&(f=new g(f,v,null,n,u),d.push({event:f,listeners:y}))}}if((t&7)===0){e:{if(f=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",f&&(t&16)===0&&(v=n.relatedTarget||n.fromElement)&&(qr(v)||v[mo]))break e;if((g||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,g?(v=n.relatedTarget||n.toElement,g=c,v=v?qr(v):null,v!==null&&(p=pi(v),v!==p||v.tag!==5&&v.tag!==6)&&(v=null)):(g=null,v=c),g!==v)){if(y=mm,w="onMouseLeave",m="onMouseEnter",x="mouse",(e==="pointerout"||e==="pointerover")&&(y=ym,w="onPointerLeave",m="onPointerEnter",x="pointer"),p=g==null?f:Ri(g),b=v==null?f:Ri(v),f=new y(w,x+"leave",g,n,u),f.target=p,f.relatedTarget=b,w=null,qr(u)===c&&(y=new y(m,x+"enter",v,n,u),y.target=b,y.relatedTarget=p,w=y),p=w,g&&v)t:{for(y=g,m=v,x=0,b=y;b;b=xi(b))x++;for(b=0,w=m;w;w=xi(w))b++;for(;0<x-b;)y=xi(y),x--;for(;0<b-x;)m=xi(m),b--;for(;x--;){if(y===m||m!==null&&y===m.alternate)break t;y=xi(y),m=xi(m)}y=null}else y=null;g!==null&&Am(d,f,g,y,!1),v!==null&&p!==null&&Am(d,p,v,y,!0)}}e:{if(f=c?Ri(c):window,g=f.nodeName&&f.nodeName.toLowerCase(),g==="select"||g==="input"&&f.type==="file")var _=$S;else if(wm(f))if(rx)_=zS;else{_=LS;var k=RS}else(g=f.nodeName)&&g.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(_=DS);if(_&&(_=_(e,c))){nx(d,_,n,u);break e}k&&k(e,f,c),e==="focusout"&&(k=f._wrapperState)&&k.controlled&&f.type==="number"&&ef(f,"number",f.value)}switch(k=c?Ri(c):window,e){case"focusin":(wm(k)||k.contentEditable==="true")&&($i=k,pf=c,fs=null);break;case"focusout":fs=pf=$i=null;break;case"mousedown":gf=!0;break;case"contextmenu":case"mouseup":case"dragend":gf=!1,Om(d,n,u);break;case"selectionchange":if(FS)break;case"keydown":case"keyup":Om(d,n,u)}var P;if(lp)e:{switch(e){case"compositionstart":var M="onCompositionStart";break e;case"compositionend":M="onCompositionEnd";break e;case"compositionupdate":M="onCompositionUpdate";break e}M=void 0}else Ai?ex(e,n)&&(M="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(M="onCompositionStart");M&&(Jy&&n.locale!=="ko"&&(Ai||M!=="onCompositionStart"?M==="onCompositionEnd"&&Ai&&(P=Zy()):(er=u,op="value"in er?er.value:er.textContent,Ai=!0)),k=Xl(c,M),0<k.length&&(M=new vm(M,e,null,n,u),d.push({event:M,listeners:k}),P?M.data=P:(P=tx(n),P!==null&&(M.data=P)))),(P=MS?ES(e,n):NS(e,n))&&(c=Xl(c,"onBeforeInput"),0<c.length&&(u=new vm("onBeforeInput","beforeinput",null,n,u),d.push({event:u,listeners:c}),u.data=P))}ax(d,t)})}function Ls(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Xl(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Es(e,n),o!=null&&r.unshift(Ls(e,o,i)),o=Es(e,t),o!=null&&r.push(Ls(e,o,i))),e=e.return}return r}function xi(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Am(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=Es(n,o),l!=null&&s.unshift(Ls(n,l,a))):i||(l=Es(n,o),l!=null&&s.push(Ls(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}function Kl(){}var ad=null,ld=null;function dx(e,t){switch(e){case"button":case"input":case"select":case"textarea":return!!t.autoFocus}return!1}function mf(e,t){return e==="textarea"||e==="option"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var $m=typeof setTimeout=="function"?setTimeout:void 0,BS=typeof clearTimeout=="function"?clearTimeout:void 0;function cp(e){e.nodeType===1?e.textContent="":e.nodeType===9&&(e=e.body,e!=null&&(e.textContent=""))}function Wi(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break}return e}function Rm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var cd=0;function WS(e){return{$$typeof:Kh,toString:e,valueOf:e}}var Hc=Math.random().toString(36).slice(2),tr="__reactFiber$"+Hc,Gl="__reactProps$"+Hc,mo="__reactContainer$"+Hc,Lm="__reactEvents$"+Hc;function qr(e){var t=e[tr];if(t)return t;for(var n=e.parentNode;n;){if(t=n[mo]||n[tr]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Rm(e);e!==null;){if(n=e[tr])return n;e=Rm(e)}return t}e=n,n=e.parentNode}return null}function aa(e){return e=e[tr]||e[mo],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ri(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(R(33))}function Uc(e){return e[Gl]||null}function fx(e){var t=e[Lm];return t===void 0&&(t=e[Lm]=new Set),t}var vf=[],Li=-1;function $r(e){return{current:e}}function _e(e){0>Li||(e.current=vf[Li],vf[Li]=null,Li--)}function $e(e,t){Li++,vf[Li]=e.current,e.current=t}var Cr={},pt=$r(Cr),Pt=$r(!1),ri=Cr;function no(e,t){var n=e.type.contextTypes;if(!n)return Cr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ot(e){return e=e.childContextTypes,e!=null}function ql(){_e(Pt),_e(pt)}function Dm(e,t,n){if(pt.current!==Cr)throw Error(R(168));$e(pt,t),$e(Pt,n)}function hx(e,t,n){var r=e.stateNode;if(e=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(R(108,Ii(t)||"Unknown",i));return Me({},n,r)}function bl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Cr,ri=pt.current,$e(pt,e),$e(Pt,Pt.current),!0}function zm(e,t,n){var r=e.stateNode;if(!r)throw Error(R(169));n?(e=hx(e,t,ri),r.__reactInternalMemoizedMergedChildContext=e,_e(Pt),_e(pt),$e(pt,e)):_e(Pt),$e(Pt,n)}var up=null,ei=null,VS=Ke.unstable_runWithPriority,dp=Ke.unstable_scheduleCallback,yf=Ke.unstable_cancelCallback,HS=Ke.unstable_shouldYield,Im=Ke.unstable_requestPaint,xf=Ke.unstable_now,US=Ke.unstable_getCurrentPriorityLevel,Yc=Ke.unstable_ImmediatePriority,px=Ke.unstable_UserBlockingPriority,gx=Ke.unstable_NormalPriority,mx=Ke.unstable_LowPriority,vx=Ke.unstable_IdlePriority,ud={},YS=Im!==void 0?Im:function(){},An=null,wl=null,dd=!1,jm=xf(),ut=1e4>jm?xf:function(){return xf()-jm};function ro(){switch(US()){case Yc:return 99;case px:return 98;case gx:return 97;case mx:return 96;case vx:return 95;default:throw Error(R(332))}}function yx(e){switch(e){case 99:return Yc;case 98:return px;case 97:return gx;case 96:return mx;case 95:return vx;default:throw Error(R(332))}}function ii(e,t){return e=yx(e),VS(e,t)}function Ds(e,t,n){return e=yx(e),dp(e,t,n)}function Cn(){if(wl!==null){var e=wl;wl=null,yf(e)}xx()}function xx(){if(!dd&&An!==null){dd=!0;var e=0;try{var t=An;ii(99,function(){for(;e<t.length;e++){var n=t[e];do n=n(!0);while(n!==null)}}),An=null}catch(n){throw An!==null&&(An=An.slice(e+1)),dp(Yc,Cn),n}finally{dd=!1}}}var XS=hi.ReactCurrentBatchConfig;function Zt(e,t){if(e&&e.defaultProps){t=Me({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Ql=$r(null),Zl=null,Di=null,Jl=null;function fp(){Jl=Di=Zl=null}function hp(e){var t=Ql.current;_e(Ql),e.type._context._currentValue=t}function bx(e,t){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)===t){if(n===null||(n.childLanes&t)===t)break;n.childLanes|=t}else e.childLanes|=t,n!==null&&(n.childLanes|=t);e=e.return}}function Vi(e,t){Zl=e,Jl=Di=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(en=!0),e.firstContext=null)}function Vt(e,t){if(Jl!==e&&t!==!1&&t!==0)if((typeof t!="number"||t===1073741823)&&(Jl=e,t=1073741823),t={context:e,observedBits:t,next:null},Di===null){if(Zl===null)throw Error(R(308));Di=t,Zl.dependencies={lanes:0,firstContext:t,responders:null}}else Di=Di.next=t;return e._currentValue}var qn=!1;function pp(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null},effects:null}}function wx(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function fr(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function hr(e,t){if(e=e.updateQueue,e!==null){e=e.shared;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}}function Fm(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function zs(e,t,n,r){var i=e.updateQueue;qn=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,s===null?o=c:s.next=c,s=l;var u=e.alternate;if(u!==null){u=u.updateQueue;var d=u.lastBaseUpdate;d!==s&&(d===null?u.firstBaseUpdate=c:d.next=c,u.lastBaseUpdate=l)}}if(o!==null){d=i.baseState,s=0,u=c=l=null;do{a=o.lane;var f=o.eventTime;if((r&a)===a){u!==null&&(u=u.next={eventTime:f,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var g=e,v=o;switch(a=t,f=n,v.tag){case 1:if(g=v.payload,typeof g=="function"){d=g.call(f,d,a);break e}d=g;break e;case 3:g.flags=g.flags&-4097|64;case 0:if(g=v.payload,a=typeof g=="function"?g.call(f,d,a):g,a==null)break e;d=Me({},d,a);break e;case 2:qn=!0}}o.callback!==null&&(e.flags|=32,a=i.effects,a===null?i.effects=[o]:a.push(o))}else f={eventTime:f,lane:a,tag:o.tag,payload:o.payload,callback:o.callback,next:null},u===null?(c=u=f,l=d):u=u.next=f,s|=a;if(o=o.next,o===null){if(a=i.shared.pending,a===null)break;o=a.next,a.next=null,i.lastBaseUpdate=a,i.shared.pending=null}}while(1);u===null&&(l=d),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=u,ca|=s,e.lanes=s,e.memoizedState=d}}function Bm(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(R(191,i));i.call(r)}}}var _x=new zc.Component().refs;function ec(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Me({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Xc={isMounted:function(e){return(e=e._reactInternals)?pi(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=At(),i=pr(e),o=fr(r,i);o.payload=t,n!=null&&(o.callback=n),hr(e,o),gr(e,i,r)},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=At(),i=pr(e),o=fr(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),hr(e,o),gr(e,i,r)},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=At(),r=pr(e),i=fr(n,r);i.tag=2,t!=null&&(i.callback=t),hr(e,i),gr(e,r,n)}};function Wm(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!Rs(n,r)||!Rs(i,o):!0}function Sx(e,t,n){var r=!1,i=Cr,o=t.contextType;return typeof o=="object"&&o!==null?o=Vt(o):(i=Ot(t)?ri:pt.current,r=t.contextTypes,o=(r=r!=null)?no(e,i):Cr),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Xc,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Vm(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Xc.enqueueReplaceState(t,t.state,null)}function bf(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=_x,pp(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Vt(o):(o=Ot(t)?ri:pt.current,i.context=no(e,o)),zs(e,n,i,r),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(ec(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Xc.enqueueReplaceState(i,i.state,null),zs(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4)}var Fa=Array.isArray;function Ro(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(R(309));var r=n.stateNode}if(!r)throw Error(R(147,e));var i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var s=r.refs;s===_x&&(s=r.refs={}),o===null?delete s[i]:s[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(R(284));if(!n._owner)throw Error(R(290,e))}return e}function Ba(e,t){if(e.type!=="textarea")throw Error(R(31,Object.prototype.toString.call(t)==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":t))}function kx(e){function t(p,m){if(e){var x=p.lastEffect;x!==null?(x.nextEffect=m,p.lastEffect=m):p.firstEffect=p.lastEffect=m,m.nextEffect=null,m.flags=8}}function n(p,m){if(!e)return null;for(;m!==null;)t(p,m),m=m.sibling;return null}function r(p,m){for(p=new Map;m!==null;)m.key!==null?p.set(m.key,m):p.set(m.index,m),m=m.sibling;return p}function i(p,m){return p=Or(p,m),p.index=0,p.sibling=null,p}function o(p,m,x){return p.index=x,e?(x=p.alternate,x!==null?(x=x.index,x<m?(p.flags=2,m):x):(p.flags=2,m)):m}function s(p){return e&&p.alternate===null&&(p.flags=2),p}function a(p,m,x,b){return m===null||m.tag!==6?(m=md(x,p.mode,b),m.return=p,m):(m=i(m,x),m.return=p,m)}function l(p,m,x,b){return m!==null&&m.elementType===x.type?(b=i(m,x.props),b.ref=Ro(p,m,x),b.return=p,b):(b=Cl(x.type,x.key,x.props,null,p.mode,b),b.ref=Ro(p,m,x),b.return=p,b)}function c(p,m,x,b){return m===null||m.tag!==4||m.stateNode.containerInfo!==x.containerInfo||m.stateNode.implementation!==x.implementation?(m=vd(x,p.mode,b),m.return=p,m):(m=i(m,x.children||[]),m.return=p,m)}function u(p,m,x,b,w){return m===null||m.tag!==7?(m=Xi(x,p.mode,b,w),m.return=p,m):(m=i(m,x),m.return=p,m)}function d(p,m,x){if(typeof m=="string"||typeof m=="number")return m=md(""+m,p.mode,x),m.return=p,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ko:return x=Cl(m.type,m.key,m.props,null,p.mode,x),x.ref=Ro(p,null,m),x.return=p,x;case Kr:return m=vd(m,p.mode,x),m.return=p,m}if(Fa(m)||Mo(m))return m=Xi(m,p.mode,x,null),m.return=p,m;Ba(p,m)}return null}function f(p,m,x,b){var w=m!==null?m.key:null;if(typeof x=="string"||typeof x=="number")return w!==null?null:a(p,m,""+x,b);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Ko:return x.key===w?x.type===Qn?u(p,m,x.props.children,b,w):l(p,m,x,b):null;case Kr:return x.key===w?c(p,m,x,b):null}if(Fa(x)||Mo(x))return w!==null?null:u(p,m,x,b,null);Ba(p,x)}return null}function g(p,m,x,b,w){if(typeof b=="string"||typeof b=="number")return p=p.get(x)||null,a(m,p,""+b,w);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Ko:return p=p.get(b.key===null?x:b.key)||null,b.type===Qn?u(m,p,b.props.children,w,b.key):l(m,p,b,w);case Kr:return p=p.get(b.key===null?x:b.key)||null,c(m,p,b,w)}if(Fa(b)||Mo(b))return p=p.get(x)||null,u(m,p,b,w,null);Ba(m,b)}return null}function v(p,m,x,b){for(var w=null,_=null,k=m,P=m=0,M=null;k!==null&&P<x.length;P++){k.index>P?(M=k,k=null):M=k.sibling;var E=f(p,k,x[P],b);if(E===null){k===null&&(k=M);break}e&&k&&E.alternate===null&&t(p,k),m=o(E,m,P),_===null?w=E:_.sibling=E,_=E,k=M}if(P===x.length)return n(p,k),w;if(k===null){for(;P<x.length;P++)k=d(p,x[P],b),k!==null&&(m=o(k,m,P),_===null?w=k:_.sibling=k,_=k);return w}for(k=r(p,k);P<x.length;P++)M=g(k,p,P,x[P],b),M!==null&&(e&&M.alternate!==null&&k.delete(M.key===null?P:M.key),m=o(M,m,P),_===null?w=M:_.sibling=M,_=M);return e&&k.forEach(function(A){return t(p,A)}),w}function y(p,m,x,b){var w=Mo(x);if(typeof w!="function")throw Error(R(150));if(x=w.call(x),x==null)throw Error(R(151));for(var _=w=null,k=m,P=m=0,M=null,E=x.next();k!==null&&!E.done;P++,E=x.next()){k.index>P?(M=k,k=null):M=k.sibling;var A=f(p,k,E.value,b);if(A===null){k===null&&(k=M);break}e&&k&&A.alternate===null&&t(p,k),m=o(A,m,P),_===null?w=A:_.sibling=A,_=A,k=M}if(E.done)return n(p,k),w;if(k===null){for(;!E.done;P++,E=x.next())E=d(p,E.value,b),E!==null&&(m=o(E,m,P),_===null?w=E:_.sibling=E,_=E);return w}for(k=r(p,k);!E.done;P++,E=x.next())E=g(k,p,P,E.value,b),E!==null&&(e&&E.alternate!==null&&k.delete(E.key===null?P:E.key),m=o(E,m,P),_===null?w=E:_.sibling=E,_=E);return e&&k.forEach(function(j){return t(p,j)}),w}return function(p,m,x,b){var w=typeof x=="object"&&x!==null&&x.type===Qn&&x.key===null;w&&(x=x.props.children);var _=typeof x=="object"&&x!==null;if(_)switch(x.$$typeof){case Ko:e:{for(_=x.key,w=m;w!==null;){if(w.key===_){switch(w.tag){case 7:if(x.type===Qn){n(p,w.sibling),m=i(w,x.props.children),m.return=p,p=m;break e}break;default:if(w.elementType===x.type){n(p,w.sibling),m=i(w,x.props),m.ref=Ro(p,w,x),m.return=p,p=m;break e}}n(p,w);break}else t(p,w);w=w.sibling}x.type===Qn?(m=Xi(x.props.children,p.mode,b,x.key),m.return=p,p=m):(b=Cl(x.type,x.key,x.props,null,p.mode,b),b.ref=Ro(p,m,x),b.return=p,p=b)}return s(p);case Kr:e:{for(w=x.key;m!==null;){if(m.key===w)if(m.tag===4&&m.stateNode.containerInfo===x.containerInfo&&m.stateNode.implementation===x.implementation){n(p,m.sibling),m=i(m,x.children||[]),m.return=p,p=m;break e}else{n(p,m);break}else t(p,m);m=m.sibling}m=vd(x,p.mode,b),m.return=p,p=m}return s(p)}if(typeof x=="string"||typeof x=="number")return x=""+x,m!==null&&m.tag===6?(n(p,m.sibling),m=i(m,x),m.return=p,p=m):(n(p,m),m=md(x,p.mode,b),m.return=p,p=m),s(p);if(Fa(x))return v(p,m,x,b);if(Mo(x))return y(p,m,x,b);if(_&&Ba(p,x),typeof x=="undefined"&&!w)switch(p.tag){case 1:case 22:case 0:case 11:case 15:throw Error(R(152,Ii(p.type)||"Component"))}return n(p,m)}}var tc=kx(!0),Cx=kx(!1),la={},xn=$r(la),Is=$r(la),js=$r(la);function Qr(e){if(e===la)throw Error(R(174));return e}function wf(e,t){switch($e(js,t),$e(Is,e),$e(xn,la),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:of(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=of(t,e)}_e(xn),$e(xn,t)}function io(){_e(xn),_e(Is),_e(js)}function Hm(e){Qr(js.current);var t=Qr(xn.current),n=of(t,e.type);t!==n&&($e(Is,e),$e(xn,n))}function gp(e){Is.current===e&&(_e(xn),_e(Is))}var Ae=$r(0);function nc(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&64)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ln=null,nr=null,bn=!1;function Px(e,t){var n=Bt(5,null,null,0);n.elementType="DELETED",n.type="DELETED",n.stateNode=t,n.return=e,n.flags=8,e.lastEffect!==null?(e.lastEffect.nextEffect=n,e.lastEffect=n):e.firstEffect=e.lastEffect=n}function Um(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,!0):!1;case 13:return!1;default:return!1}}function _f(e){if(bn){var t=nr;if(t){var n=t;if(!Um(e,t)){if(t=Wi(n.nextSibling),!t||!Um(e,t)){e.flags=e.flags&-1025|2,bn=!1,Ln=e;return}Px(Ln,n)}Ln=e,nr=Wi(t.firstChild)}else e.flags=e.flags&-1025|2,bn=!1,Ln=e}}function Ym(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ln=e}function Wa(e){if(e!==Ln)return!1;if(!bn)return Ym(e),bn=!0,!1;var t=e.type;if(e.tag!==5||t!=="head"&&t!=="body"&&!mf(t,e.memoizedProps))for(t=nr;t;)Px(e,t),t=Wi(t.nextSibling);if(Ym(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(R(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){nr=Wi(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}nr=null}}else nr=Ln?Wi(e.stateNode.nextSibling):null;return!0}function fd(){nr=Ln=null,bn=!1}var Hi=[];function mp(){for(var e=0;e<Hi.length;e++)Hi[e]._workInProgressVersionPrimary=null;Hi.length=0}var hs=hi.ReactCurrentDispatcher,Wt=hi.ReactCurrentBatchConfig,Fs=0,Ie=null,lt=null,et=null,rc=!1,ps=!1;function _t(){throw Error(R(321))}function vp(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ft(e[n],t[n]))return!1;return!0}function yp(e,t,n,r,i,o){if(Fs=o,Ie=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,hs.current=e===null||e.memoizedState===null?GS:qS,e=n(r,i),ps){o=0;do{if(ps=!1,!(25>o))throw Error(R(301));o+=1,et=lt=null,t.updateQueue=null,hs.current=QS,e=n(r,i)}while(ps)}if(hs.current=ac,t=lt!==null&&lt.next!==null,Fs=0,et=lt=Ie=null,rc=!1,t)throw Error(R(300));return e}function Zr(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return et===null?Ie.memoizedState=et=e:et=et.next=e,et}function gi(){if(lt===null){var e=Ie.alternate;e=e!==null?e.memoizedState:null}else e=lt.next;var t=et===null?Ie.memoizedState:et.next;if(t!==null)et=t,lt=e;else{if(e===null)throw Error(R(310));lt=e,e={memoizedState:lt.memoizedState,baseState:lt.baseState,baseQueue:lt.baseQueue,queue:lt.queue,next:null},et===null?Ie.memoizedState=et=e:et=et.next=e}return et}function vn(e,t){return typeof t=="function"?t(e):t}function Lo(e){var t=gi(),n=t.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=e;var r=lt,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){i=i.next,r=r.baseState;var a=s=o=null,l=i;do{var c=l.lane;if((Fs&c)===c)a!==null&&(a=a.next={lane:0,action:l.action,eagerReducer:l.eagerReducer,eagerState:l.eagerState,next:null}),r=l.eagerReducer===e?l.eagerState:e(r,l.action);else{var u={lane:c,action:l.action,eagerReducer:l.eagerReducer,eagerState:l.eagerState,next:null};a===null?(s=a=u,o=r):a=a.next=u,Ie.lanes|=c,ca|=c}l=l.next}while(l!==null&&l!==i);a===null?o=r:a.next=s,Ft(r,t.memoizedState)||(en=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=a,n.lastRenderedState=r}return[t.memoizedState,n.dispatch]}function Do(e){var t=gi(),n=t.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);Ft(o,t.memoizedState)||(en=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Xm(e,t,n){var r=t._getVersion;r=r(t._source);var i=t._workInProgressVersionPrimary;if(i!==null?e=i===r:(e=e.mutableReadLanes,(e=(Fs&e)===e)&&(t._workInProgressVersionPrimary=r,Hi.push(t))),e)return n(t._source);throw Hi.push(t),Error(R(350))}function Ox(e,t,n,r){var i=yt;if(i===null)throw Error(R(349));var o=t._getVersion,s=o(t._source),a=hs.current,l=a.useState(function(){return Xm(i,t,n)}),c=l[1],u=l[0];l=et;var d=e.memoizedState,f=d.refs,g=f.getSnapshot,v=d.source;d=d.subscribe;var y=Ie;return e.memoizedState={refs:f,source:t,subscribe:r},a.useEffect(function(){f.getSnapshot=n,f.setSnapshot=c;var p=o(t._source);if(!Ft(s,p)){p=n(t._source),Ft(u,p)||(c(p),p=pr(y),i.mutableReadLanes|=p&i.pendingLanes),p=i.mutableReadLanes,i.entangledLanes|=p;for(var m=i.entanglements,x=p;0<x;){var b=31-kr(x),w=1<<b;m[b]|=p,x&=~w}}},[n,t,r]),a.useEffect(function(){return r(t._source,function(){var p=f.getSnapshot,m=f.setSnapshot;try{m(p(t._source));var x=pr(y);i.mutableReadLanes|=x&i.pendingLanes}catch(b){m(function(){throw b})}})},[t,r]),Ft(g,n)&&Ft(v,t)&&Ft(d,r)||(e={pending:null,dispatch:null,lastRenderedReducer:vn,lastRenderedState:u},e.dispatch=c=wp.bind(null,Ie,e),l.queue=e,l.baseQueue=null,u=Xm(i,t,n),l.memoizedState=l.baseState=u),u}function Mx(e,t,n){var r=gi();return Ox(r,e,t,n)}function zo(e){var t=Zr();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e=t.queue={pending:null,dispatch:null,lastRenderedReducer:vn,lastRenderedState:e},e=e.dispatch=wp.bind(null,Ie,e),[t.memoizedState,e]}function ic(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ie.updateQueue,t===null?(t={lastEffect:null},Ie.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Km(e){var t=Zr();return e={current:e},t.memoizedState=e}function oc(){return gi().memoizedState}function Sf(e,t,n,r){var i=Zr();Ie.flags|=e,i.memoizedState=ic(1|t,n,void 0,r===void 0?null:r)}function xp(e,t,n,r){var i=gi();r=r===void 0?null:r;var o=void 0;if(lt!==null){var s=lt.memoizedState;if(o=s.destroy,r!==null&&vp(r,s.deps)){ic(t,n,o,r);return}}Ie.flags|=e,i.memoizedState=ic(1|t,n,o,r)}function Gm(e,t){return Sf(516,4,e,t)}function sc(e,t){return xp(516,4,e,t)}function Ex(e,t){return xp(4,2,e,t)}function Nx(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Tx(e,t,n){return n=n!=null?n.concat([e]):null,xp(4,2,Nx.bind(null,t,e),n)}function bp(){}function Ax(e,t){var n=gi();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&vp(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function $x(e,t){var n=gi();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&vp(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function KS(e,t){var n=ro();ii(98>n?98:n,function(){e(!0)}),ii(97<n?97:n,function(){var r=Wt.transition;Wt.transition=1;try{e(!1),t()}finally{Wt.transition=r}})}function wp(e,t,n){var r=At(),i=pr(e),o={lane:i,action:n,eagerReducer:null,eagerState:null,next:null},s=t.pending;if(s===null?o.next=o:(o.next=s.next,s.next=o),t.pending=o,s=e.alternate,e===Ie||s!==null&&s===Ie)ps=rc=!0;else{if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var a=t.lastRenderedState,l=s(a,n);if(o.eagerReducer=s,o.eagerState=l,Ft(l,a))return}catch{}finally{}gr(e,i,r)}}var ac={readContext:Vt,useCallback:_t,useContext:_t,useEffect:_t,useImperativeHandle:_t,useLayoutEffect:_t,useMemo:_t,useReducer:_t,useRef:_t,useState:_t,useDebugValue:_t,useDeferredValue:_t,useTransition:_t,useMutableSource:_t,useOpaqueIdentifier:_t,unstable_isNewReconciler:!1},GS={readContext:Vt,useCallback:function(e,t){return Zr().memoizedState=[e,t===void 0?null:t],e},useContext:Vt,useEffect:Gm,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Sf(4,2,Nx.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Sf(4,2,e,t)},useMemo:function(e,t){var n=Zr();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Zr();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e=r.queue={pending:null,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},e=e.dispatch=wp.bind(null,Ie,e),[r.memoizedState,e]},useRef:Km,useState:zo,useDebugValue:bp,useDeferredValue:function(e){var t=zo(e),n=t[0],r=t[1];return Gm(function(){var i=Wt.transition;Wt.transition=1;try{r(e)}finally{Wt.transition=i}},[e]),n},useTransition:function(){var e=zo(!1),t=e[0];return e=KS.bind(null,e[1]),Km(e),[e,t]},useMutableSource:function(e,t,n){var r=Zr();return r.memoizedState={refs:{getSnapshot:t,setSnapshot:null},source:e,subscribe:n},Ox(r,e,t,n)},useOpaqueIdentifier:function(){if(bn){var e=!1,t=WS(function(){throw e||(e=!0,n("r:"+(cd++).toString(36))),Error(R(355))}),n=zo(t)[1];return(Ie.mode&2)===0&&(Ie.flags|=516,ic(5,function(){n("r:"+(cd++).toString(36))},void 0,null)),t}return t="r:"+(cd++).toString(36),zo(t),t},unstable_isNewReconciler:!1},qS={readContext:Vt,useCallback:Ax,useContext:Vt,useEffect:sc,useImperativeHandle:Tx,useLayoutEffect:Ex,useMemo:$x,useReducer:Lo,useRef:oc,useState:function(){return Lo(vn)},useDebugValue:bp,useDeferredValue:function(e){var t=Lo(vn),n=t[0],r=t[1];return sc(function(){var i=Wt.transition;Wt.transition=1;try{r(e)}finally{Wt.transition=i}},[e]),n},useTransition:function(){var e=Lo(vn)[0];return[oc().current,e]},useMutableSource:Mx,useOpaqueIdentifier:function(){return Lo(vn)[0]},unstable_isNewReconciler:!1},QS={readContext:Vt,useCallback:Ax,useContext:Vt,useEffect:sc,useImperativeHandle:Tx,useLayoutEffect:Ex,useMemo:$x,useReducer:Do,useRef:oc,useState:function(){return Do(vn)},useDebugValue:bp,useDeferredValue:function(e){var t=Do(vn),n=t[0],r=t[1];return sc(function(){var i=Wt.transition;Wt.transition=1;try{r(e)}finally{Wt.transition=i}},[e]),n},useTransition:function(){var e=Do(vn)[0];return[oc().current,e]},useMutableSource:Mx,useOpaqueIdentifier:function(){return Do(vn)[0]},unstable_isNewReconciler:!1},ZS=hi.ReactCurrentOwner,en=!1;function kt(e,t,n,r){t.child=e===null?Cx(t,null,n,r):tc(t,e.child,n,r)}function qm(e,t,n,r,i){n=n.render;var o=t.ref;return Vi(t,i),r=yp(e,t,n,r,o,i),e!==null&&!en?(t.updateQueue=e.updateQueue,t.flags&=-517,e.lanes&=~i,Dn(e,t,i)):(t.flags|=1,kt(e,t,r,i),t.child)}function Qm(e,t,n,r,i,o){if(e===null){var s=n.type;return typeof s=="function"&&!Op(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,Rx(e,t,s,r,i,o)):(e=Cl(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}return s=e.child,(i&o)===0&&(i=s.memoizedProps,n=n.compare,n=n!==null?n:Rs,n(i,r)&&e.ref===t.ref)?Dn(e,t,o):(t.flags|=1,e=Or(s,r),e.ref=t.ref,e.return=t,t.child=e)}function Rx(e,t,n,r,i,o){if(e!==null&&Rs(e.memoizedProps,r)&&e.ref===t.ref)if(en=!1,(o&i)!==0)(e.flags&16384)!==0&&(en=!0);else return t.lanes=e.lanes,Dn(e,t,o);return kf(e,t,n,r,o)}function hd(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden"||r.mode==="unstable-defer-without-hiding")if((t.mode&4)===0)t.memoizedState={baseLanes:0},Ha(t,n);else if((n&1073741824)!==0)t.memoizedState={baseLanes:0},Ha(t,o!==null?o.baseLanes:n);else return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e},Ha(t,e),null;else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,Ha(t,r);return kt(e,t,i,n),t.child}function Lx(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=128)}function kf(e,t,n,r,i){var o=Ot(n)?ri:pt.current;return o=no(t,o),Vi(t,i),n=yp(e,t,n,r,o,i),e!==null&&!en?(t.updateQueue=e.updateQueue,t.flags&=-517,e.lanes&=~i,Dn(e,t,i)):(t.flags|=1,kt(e,t,n,i),t.child)}function Zm(e,t,n,r,i){if(Ot(n)){var o=!0;bl(t)}else o=!1;if(Vi(t,i),t.stateNode===null)e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2),Sx(t,n,r),bf(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=Vt(c):(c=Ot(n)?ri:pt.current,c=no(t,c));var u=n.getDerivedStateFromProps,d=typeof u=="function"||typeof s.getSnapshotBeforeUpdate=="function";d||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==c)&&Vm(t,s,r,c),qn=!1;var f=t.memoizedState;s.state=f,zs(t,r,s,i),l=t.memoizedState,a!==r||f!==l||Pt.current||qn?(typeof u=="function"&&(ec(t,n,u,r),l=t.memoizedState),(a=qn||Wm(t,n,a,r,f,l,c))?(d||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4)):(typeof s.componentDidMount=="function"&&(t.flags|=4),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=c,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4),r=!1)}else{s=t.stateNode,wx(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:Zt(t.type,a),s.props=c,d=t.pendingProps,f=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Vt(l):(l=Ot(n)?ri:pt.current,l=no(t,l));var g=n.getDerivedStateFromProps;(u=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==d||f!==l)&&Vm(t,s,r,l),qn=!1,f=t.memoizedState,s.state=f,zs(t,r,s,i);var v=t.memoizedState;a!==d||f!==v||Pt.current||qn?(typeof g=="function"&&(ec(t,n,g,r),v=t.memoizedState),(c=qn||Wm(t,n,c,r,f,v,l))?(u||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,v,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,v,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=256)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=256),t.memoizedProps=r,t.memoizedState=v),s.props=r,s.state=v,s.context=l,r=c):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=256),r=!1)}return Cf(e,t,n,r,o,i)}function Cf(e,t,n,r,i,o){Lx(e,t);var s=(t.flags&64)!==0;if(!r&&!s)return i&&zm(t,n,!1),Dn(e,t,o);r=t.stateNode,ZS.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=tc(t,e.child,null,o),t.child=tc(t,null,a,o)):kt(e,t,a,o),t.memoizedState=r.state,i&&zm(t,n,!0),t.child}function Jm(e){var t=e.stateNode;t.pendingContext?Dm(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Dm(e,t.context,!1),wf(e,t.containerInfo)}var Va={dehydrated:null,retryLane:0};function e0(e,t,n){var r=t.pendingProps,i=Ae.current,o=!1,s;return(s=(t.flags&64)!==0)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,t.flags&=-65):e!==null&&e.memoizedState===null||r.fallback===void 0||r.unstable_avoidThisFallback===!0||(i|=1),$e(Ae,i&1),e===null?(r.fallback!==void 0&&_f(t),e=r.children,i=r.fallback,o?(e=t0(t,e,i,n),t.child.memoizedState={baseLanes:n},t.memoizedState=Va,e):typeof r.unstable_expectedLoadTime=="number"?(e=t0(t,e,i,n),t.child.memoizedState={baseLanes:n},t.memoizedState=Va,t.lanes=33554432,e):(n=Mp({mode:"visible",children:e},t.mode,n,null),n.return=t,t.child=n)):e.memoizedState!==null?o?(r=r0(e,t,r.children,r.fallback,n),o=t.child,i=e.child.memoizedState,o.memoizedState=i===null?{baseLanes:n}:{baseLanes:i.baseLanes|n},o.childLanes=e.childLanes&~n,t.memoizedState=Va,r):(n=n0(e,t,r.children,n),t.memoizedState=null,n):o?(r=r0(e,t,r.children,r.fallback,n),o=t.child,i=e.child.memoizedState,o.memoizedState=i===null?{baseLanes:n}:{baseLanes:i.baseLanes|n},o.childLanes=e.childLanes&~n,t.memoizedState=Va,r):(n=n0(e,t,r.children,n),t.memoizedState=null,n)}function t0(e,t,n,r){var i=e.mode,o=e.child;return t={mode:"hidden",children:t},(i&2)===0&&o!==null?(o.childLanes=0,o.pendingProps=t):o=Mp(t,i,0,null),n=Xi(n,i,r,null),o.return=e,n.return=e,o.sibling=n,e.child=o,n}function n0(e,t,n,r){var i=e.child;return e=i.sibling,n=Or(i,{mode:"visible",children:n}),(t.mode&2)===0&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(e.nextEffect=null,e.flags=8,t.firstEffect=t.lastEffect=e),t.child=n}function r0(e,t,n,r,i){var o=t.mode,s=e.child;e=s.sibling;var a={mode:"hidden",children:n};return(o&2)===0&&t.child!==s?(n=t.child,n.childLanes=0,n.pendingProps=a,s=n.lastEffect,s!==null?(t.firstEffect=n.firstEffect,t.lastEffect=s,s.nextEffect=null):t.firstEffect=t.lastEffect=null):n=Or(s,a),e!==null?r=Or(e,r):(r=Xi(r,o,i,null),r.flags|=2),r.return=t,n.return=t,n.sibling=r,t.child=n,r}function i0(e,t){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),bx(e.return,t)}function pd(e,t,n,r,i,o){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,lastEffect:o}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i,s.lastEffect=o)}function o0(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(kt(e,t,r.children,n),r=Ae.current,(r&2)!==0)r=r&1|2,t.flags|=64;else{if(e!==null&&(e.flags&64)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&i0(e,n);else if(e.tag===19)i0(e,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if($e(Ae,r),(t.mode&2)===0)t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&nc(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),pd(t,!1,i,n,o,t.lastEffect);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&nc(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}pd(t,!0,n,null,o,t.lastEffect);break;case"together":pd(t,!1,null,null,void 0,t.lastEffect);break;default:t.memoizedState=null}return t.child}function Dn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ca|=t.lanes,(n&t.childLanes)!==0){if(e!==null&&t.child!==e.child)throw Error(R(153));if(t.child!==null){for(e=t.child,n=Or(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Or(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}return null}var Dx,Pf,zx,Ix;Dx=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Pf=function(){};zx=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Qr(xn.current);var o=null;switch(n){case"input":i=Zd(e,i),r=Zd(e,r),o=[];break;case"option":i=tf(e,i),r=tf(e,r),o=[];break;case"select":i=Me({},i,{value:void 0}),r=Me({},r,{value:void 0}),o=[];break;case"textarea":i=nf(e,i),r=nf(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Kl)}sf(n,r);var s;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Os.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Os.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&be("scroll",e),o||a===l||(o=[])):typeof l=="object"&&l!==null&&l.$$typeof===Kh?l.toString():(o=o||[]).push(c,l))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};Ix=function(e,t,n,r){n!==r&&(t.flags|=4)};function Io(e,t){if(!bn)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function JS(e,t,n){var r=t.pendingProps;switch(t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return Ot(t.type)&&ql(),null;case 3:return io(),_e(Pt),_e(pt),mp(),r=t.stateNode,r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Wa(t)?t.flags|=4:r.hydrate||(t.flags|=256)),Pf(t),null;case 5:gp(t);var i=Qr(js.current);if(n=t.type,e!==null&&t.stateNode!=null)zx(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=128);else{if(!r){if(t.stateNode===null)throw Error(R(166));return null}if(e=Qr(xn.current),Wa(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[tr]=t,r[Gl]=o,n){case"dialog":be("cancel",r),be("close",r);break;case"iframe":case"object":case"embed":be("load",r);break;case"video":case"audio":for(e=0;e<qo.length;e++)be(qo[e],r);break;case"source":be("error",r);break;case"img":case"image":case"link":be("error",r),be("load",r);break;case"details":be("toggle",r);break;case"input":om(r,o),be("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},be("invalid",r);break;case"textarea":am(r,o),be("invalid",r)}sf(n,o),e=null;for(var s in o)o.hasOwnProperty(s)&&(i=o[s],s==="children"?typeof i=="string"?r.textContent!==i&&(e=["children",i]):typeof i=="number"&&r.textContent!==""+i&&(e=["children",""+i]):Os.hasOwnProperty(s)&&i!=null&&s==="onScroll"&&be("scroll",r));switch(n){case"input":Da(r),sm(r,o,!0);break;case"textarea":Da(r),lm(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Kl)}r=e,t.updateQueue=r,r!==null&&(t.flags|=4)}else{switch(s=i.nodeType===9?i:i.ownerDocument,e===rf.html&&(e=Ty(n)),e===rf.html?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[tr]=t,e[Gl]=r,Dx(e,t,!1,!1),t.stateNode=e,s=af(n,r),n){case"dialog":be("cancel",e),be("close",e),i=r;break;case"iframe":case"object":case"embed":be("load",e),i=r;break;case"video":case"audio":for(i=0;i<qo.length;i++)be(qo[i],e);i=r;break;case"source":be("error",e),i=r;break;case"img":case"image":case"link":be("error",e),be("load",e),i=r;break;case"details":be("toggle",e),i=r;break;case"input":om(e,r),i=Zd(e,r),be("invalid",e);break;case"option":i=tf(e,r);break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Me({},r,{value:void 0}),be("invalid",e);break;case"textarea":am(e,r),i=nf(e,r),be("invalid",e);break;default:i=r}sf(n,i);var a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?Ry(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Ay(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ms(e,l):typeof l=="number"&&Ms(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Os.hasOwnProperty(o)?l!=null&&o==="onScroll"&&be("scroll",e):l!=null&&Wh(e,o,l,s))}switch(n){case"input":Da(e),sm(e,r,!1);break;case"textarea":Da(e),lm(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Sr(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?ji(e,!!r.multiple,o,!1):r.defaultValue!=null&&ji(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Kl)}dx(n,r)&&(t.flags|=4)}t.ref!==null&&(t.flags|=128)}return null;case 6:if(e&&t.stateNode!=null)Ix(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(R(166));n=Qr(js.current),Qr(xn.current),Wa(t)?(r=t.stateNode,n=t.memoizedProps,r[tr]=t,r.nodeValue!==n&&(t.flags|=4)):(r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[tr]=t,t.stateNode=r)}return null;case 13:return _e(Ae),r=t.memoizedState,(t.flags&64)!==0?(t.lanes=n,t):(r=r!==null,n=!1,e===null?t.memoizedProps.fallback!==void 0&&Wa(t):n=e.memoizedState!==null,r&&!n&&(t.mode&2)!==0&&(e===null&&t.memoizedProps.unstable_avoidThisFallback!==!0||(Ae.current&1)!==0?nt===0&&(nt=3):((nt===0||nt===3)&&(nt=4),yt===null||(ca&134217727)===0&&(yo&134217727)===0||Ui(yt,ht))),(r||n)&&(t.flags|=4),null);case 4:return io(),Pf(t),e===null&&lx(t.stateNode.containerInfo),null;case 10:return hp(t),null;case 17:return Ot(t.type)&&ql(),null;case 19:if(_e(Ae),r=t.memoizedState,r===null)return null;if(o=(t.flags&64)!==0,s=r.rendering,s===null)if(o)Io(r,!1);else{if(nt!==0||e!==null&&(e.flags&64)!==0)for(e=t.child;e!==null;){if(s=nc(e),s!==null){for(t.flags|=64,Io(r,!1),o=s.updateQueue,o!==null&&(t.updateQueue=o,t.flags|=4),r.lastEffect===null&&(t.firstEffect=null),t.lastEffect=r.lastEffect,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=2,o.nextEffect=null,o.firstEffect=null,o.lastEffect=null,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return $e(Ae,Ae.current&1|2),t.child}e=e.sibling}r.tail!==null&&ut()>Af&&(t.flags|=64,o=!0,Io(r,!1),t.lanes=33554432)}else{if(!o)if(e=nc(s),e!==null){if(t.flags|=64,o=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Io(r,!0),r.tail===null&&r.tailMode==="hidden"&&!s.alternate&&!bn)return t=t.lastEffect=r.lastEffect,t!==null&&(t.nextEffect=null),null}else 2*ut()-r.renderingStartTime>Af&&n!==1073741824&&(t.flags|=64,o=!0,Io(r,!1),t.lanes=33554432);r.isBackwards?(s.sibling=t.child,t.child=s):(n=r.last,n!==null?n.sibling=s:t.child=s,r.last=s)}return r.tail!==null?(n=r.tail,r.rendering=n,r.tail=n.sibling,r.lastEffect=t.lastEffect,r.renderingStartTime=ut(),n.sibling=null,t=Ae.current,$e(Ae,o?t&1|2:t&1),n):null;case 23:case 24:return Pp(),e!==null&&e.memoizedState!==null!=(t.memoizedState!==null)&&r.mode!=="unstable-defer-without-hiding"&&(t.flags|=4),null}throw Error(R(156,t.tag))}function ek(e){switch(e.tag){case 1:Ot(e.type)&&ql();var t=e.flags;return t&4096?(e.flags=t&-4097|64,e):null;case 3:if(io(),_e(Pt),_e(pt),mp(),t=e.flags,(t&64)!==0)throw Error(R(285));return e.flags=t&-4097|64,e;case 5:return gp(e),null;case 13:return _e(Ae),t=e.flags,t&4096?(e.flags=t&-4097|64,e):null;case 19:return _e(Ae),null;case 4:return io(),null;case 10:return hp(e),null;case 23:case 24:return Pp(),null;default:return null}}function _p(e,t){try{var n="",r=t;do n+=R_(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i}}function Of(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var tk=typeof WeakMap=="function"?WeakMap:Map;function jx(e,t,n){n=fr(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){cc||(cc=!0,$f=r),Of(e,t)},n}function Fx(e,t,n){n=fr(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return Of(e,t),r(i)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){typeof r!="function"&&(yn===null?yn=new Set([this]):yn.add(this),Of(e,t));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}var nk=typeof WeakSet=="function"?WeakSet:Set;function s0(e){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(n){mr(e,n)}else t.current=null}function rk(e,t){switch(t.tag){case 0:case 11:case 15:case 22:return;case 1:if(t.flags&256&&e!==null){var n=e.memoizedProps,r=e.memoizedState;e=t.stateNode,t=e.getSnapshotBeforeUpdate(t.elementType===t.type?n:Zt(t.type,n),r),e.__reactInternalSnapshotBeforeUpdate=t}return;case 3:t.flags&256&&cp(t.stateNode.containerInfo);return;case 5:case 6:case 4:case 17:return}throw Error(R(163))}function ik(e,t,n){switch(n.tag){case 0:case 11:case 15:case 22:if(t=n.updateQueue,t=t!==null?t.lastEffect:null,t!==null){e=t=t.next;do{if((e.tag&3)===3){var r=e.create;e.destroy=r()}e=e.next}while(e!==t)}if(t=n.updateQueue,t=t!==null?t.lastEffect:null,t!==null){e=t=t.next;do{var i=e;r=i.next,i=i.tag,(i&4)!==0&&(i&1)!==0&&(Gx(n,e),fk(n,e)),e=r}while(e!==t)}return;case 1:e=n.stateNode,n.flags&4&&(t===null?e.componentDidMount():(r=n.elementType===n.type?t.memoizedProps:Zt(n.type,t.memoizedProps),e.componentDidUpdate(r,t.memoizedState,e.__reactInternalSnapshotBeforeUpdate))),t=n.updateQueue,t!==null&&Bm(n,t,e);return;case 3:if(t=n.updateQueue,t!==null){if(e=null,n.child!==null)switch(n.child.tag){case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}Bm(n,t,e)}return;case 5:e=n.stateNode,t===null&&n.flags&4&&dx(n.type,n.memoizedProps)&&e.focus();return;case 6:return;case 4:return;case 12:return;case 13:n.memoizedState===null&&(n=n.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&Hy(n))));return;case 19:case 17:case 20:case 21:case 23:case 24:return}throw Error(R(163))}function a0(e,t){for(var n=e;;){if(n.tag===5){var r=n.stateNode;if(t)r=r.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{r=n.stateNode;var i=n.memoizedProps.style;i=i!=null&&i.hasOwnProperty("display")?i.display:null,r.style.display=$y("display",i)}}else if(n.tag===6)n.stateNode.nodeValue=t?"":n.memoizedProps;else if((n.tag!==23&&n.tag!==24||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}}function l0(e,t){if(ei&&typeof ei.onCommitFiberUnmount=="function")try{ei.onCommitFiberUnmount(up,t)}catch{}switch(t.tag){case 0:case 11:case 14:case 15:case 22:if(e=t.updateQueue,e!==null&&(e=e.lastEffect,e!==null)){var n=e=e.next;do{var r=n,i=r.destroy;if(r=r.tag,i!==void 0)if((r&4)!==0)Gx(t,n);else{r=t;try{i()}catch(o){mr(r,o)}}n=n.next}while(n!==e)}break;case 1:if(s0(t),e=t.stateNode,typeof e.componentWillUnmount=="function")try{e.props=t.memoizedProps,e.state=t.memoizedState,e.componentWillUnmount()}catch(o){mr(t,o)}break;case 5:s0(t);break;case 4:Bx(e,t)}}function c0(e){e.alternate=null,e.child=null,e.dependencies=null,e.firstEffect=null,e.lastEffect=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.return=null,e.updateQueue=null}function u0(e){return e.tag===5||e.tag===3||e.tag===4}function d0(e){e:{for(var t=e.return;t!==null;){if(u0(t))break e;t=t.return}throw Error(R(160))}var n=t;switch(t=n.stateNode,n.tag){case 5:var r=!1;break;case 3:t=t.containerInfo,r=!0;break;case 4:t=t.containerInfo,r=!0;break;default:throw Error(R(161))}n.flags&16&&(Ms(t,""),n.flags&=-17);e:t:for(n=e;;){for(;n.sibling===null;){if(n.return===null||u0(n.return)){n=null;break e}n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue t;n.child.return=n,n=n.child}if(!(n.flags&2)){n=n.stateNode;break e}}r?Mf(e,n,t):Ef(e,n,t)}function Mf(e,t,n){var r=e.tag,i=r===5||r===6;if(i)e=i?e.stateNode:e.stateNode.instance,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Kl));else if(r!==4&&(e=e.child,e!==null))for(Mf(e,t,n),e=e.sibling;e!==null;)Mf(e,t,n),e=e.sibling}function Ef(e,t,n){var r=e.tag,i=r===5||r===6;if(i)e=i?e.stateNode:e.stateNode.instance,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ef(e,t,n),e=e.sibling;e!==null;)Ef(e,t,n),e=e.sibling}function Bx(e,t){for(var n=t,r=!1,i,o;;){if(!r){r=n.return;e:for(;;){if(r===null)throw Error(R(160));switch(i=r.stateNode,r.tag){case 5:o=!1;break e;case 3:i=i.containerInfo,o=!0;break e;case 4:i=i.containerInfo,o=!0;break e}r=r.return}r=!0}if(n.tag===5||n.tag===6){e:for(var s=e,a=n,l=a;;)if(l0(s,l),l.child!==null&&l.tag!==4)l.child.return=l,l=l.child;else{if(l===a)break e;for(;l.sibling===null;){if(l.return===null||l.return===a)break e;l=l.return}l.sibling.return=l.return,l=l.sibling}o?(s=i,a=n.stateNode,s.nodeType===8?s.parentNode.removeChild(a):s.removeChild(a)):i.removeChild(n.stateNode)}else if(n.tag===4){if(n.child!==null){i=n.stateNode.containerInfo,o=!0,n.child.return=n,n=n.child;continue}}else if(l0(e,n),n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return,n.tag===4&&(r=!1)}n.sibling.return=n.return,n=n.sibling}}function gd(e,t){switch(t.tag){case 0:case 11:case 14:case 15:case 22:var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var r=n=n.next;do(r.tag&3)===3&&(e=r.destroy,r.destroy=void 0,e!==void 0&&e()),r=r.next;while(r!==n)}return;case 1:return;case 5:if(n=t.stateNode,n!=null){r=t.memoizedProps;var i=e!==null?e.memoizedProps:r;e=t.type;var o=t.updateQueue;if(t.updateQueue=null,o!==null){for(n[Gl]=r,e==="input"&&r.type==="radio"&&r.name!=null&&Ey(n,r),af(e,i),t=af(e,r),i=0;i<o.length;i+=2){var s=o[i],a=o[i+1];s==="style"?Ry(n,a):s==="dangerouslySetInnerHTML"?Ay(n,a):s==="children"?Ms(n,a):Wh(n,s,a,t)}switch(e){case"input":Jd(n,r);break;case"textarea":Ny(n,r);break;case"select":e=n._wrapperState.wasMultiple,n._wrapperState.wasMultiple=!!r.multiple,o=r.value,o!=null?ji(n,!!r.multiple,o,!1):e!==!!r.multiple&&(r.defaultValue!=null?ji(n,!!r.multiple,r.defaultValue,!0):ji(n,!!r.multiple,r.multiple?[]:"",!1))}}}return;case 6:if(t.stateNode===null)throw Error(R(162));t.stateNode.nodeValue=t.memoizedProps;return;case 3:n=t.stateNode,n.hydrate&&(n.hydrate=!1,Hy(n.containerInfo));return;case 12:return;case 13:t.memoizedState!==null&&(Cp=ut(),a0(t.child,!0)),f0(t);return;case 19:f0(t);return;case 17:return;case 23:case 24:a0(t,t.memoizedState!==null);return}throw Error(R(163))}function f0(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new nk),t.forEach(function(r){var i=gk.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function ok(e,t){return e!==null&&(e=e.memoizedState,e===null||e.dehydrated!==null)?(t=t.memoizedState,t!==null&&t.dehydrated===null):!1}var sk=Math.ceil,lc=hi.ReactCurrentDispatcher,Sp=hi.ReactCurrentOwner,U=0,yt=null,He=null,ht=0,oi=0,Nf=$r(0),nt=0,Kc=null,vo=0,ca=0,yo=0,kp=0,Tf=null,Cp=0,Af=1/0;function xo(){Af=ut()+500}var B=null,cc=!1,$f=null,yn=null,Pr=!1,gs=null,Qo=90,Rf=[],Lf=[],Fn=null,ms=0,Df=null,_l=-1,Rn=0,Sl=0,vs=null,kl=!1;function At(){return(U&48)!==0?ut():_l!==-1?_l:_l=ut()}function pr(e){if(e=e.mode,(e&2)===0)return 1;if((e&4)===0)return ro()===99?1:2;if(Rn===0&&(Rn=vo),XS.transition!==0){Sl!==0&&(Sl=Tf!==null?Tf.pendingLanes:0),e=Rn;var t=4186112&~Sl;return t&=-t,t===0&&(e=4186112&~e,t=e&-e,t===0&&(t=8192)),t}return e=ro(),(U&4)!==0&&e===98?e=Yl(12,Rn):(e=q_(e),e=Yl(e,Rn)),e}function gr(e,t,n){if(50<ms)throw ms=0,Df=null,Error(R(185));if(e=Gc(e,t),e===null)return null;Bc(e,t,n),e===yt&&(yo|=t,nt===4&&Ui(e,ht));var r=ro();t===1?(U&8)!==0&&(U&48)===0?zf(e):(Ht(e,n),U===0&&(xo(),Cn())):((U&4)===0||r!==98&&r!==99||(Fn===null?Fn=new Set([e]):Fn.add(e)),Ht(e,n)),Tf=e}function Gc(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}function Ht(e,t){for(var n=e.callbackNode,r=e.suspendedLanes,i=e.pingedLanes,o=e.expirationTimes,s=e.pendingLanes;0<s;){var a=31-kr(s),l=1<<a,c=o[a];if(c===-1){if((l&r)===0||(l&i)!==0){c=t,Ei(l);var u=ye;o[a]=10<=u?c+250:6<=u?c+5e3:-1}}else c<=t&&(e.expiredLanes|=l);s&=~l}if(r=As(e,e===yt?ht:0),t=ye,r===0)n!==null&&(n!==ud&&yf(n),e.callbackNode=null,e.callbackPriority=0);else{if(n!==null){if(e.callbackPriority===t)return;n!==ud&&yf(n)}t===15?(n=zf.bind(null,e),An===null?(An=[n],wl=dp(Yc,xx)):An.push(n),n=ud):t===14?n=Ds(99,zf.bind(null,e)):(n=Q_(t),n=Ds(n,Wx.bind(null,e))),e.callbackPriority=t,e.callbackNode=n}}function Wx(e){if(_l=-1,Sl=Rn=0,(U&48)!==0)throw Error(R(327));var t=e.callbackNode;if(Rr()&&e.callbackNode!==t)return null;var n=As(e,e===yt?ht:0);if(n===0)return null;var r=n,i=U;U|=16;var o=Yx();(yt!==e||ht!==r)&&(xo(),Yi(e,r));do try{ck();break}catch(a){Ux(e,a)}while(1);if(fp(),lc.current=o,U=i,He!==null?r=0:(yt=null,ht=0,r=nt),(vo&yo)!==0)Yi(e,0);else if(r!==0){if(r===2&&(U|=64,e.hydrate&&(e.hydrate=!1,cp(e.containerInfo)),n=Qy(e),n!==0&&(r=Zo(e,n))),r===1)throw t=Kc,Yi(e,0),Ui(e,n),Ht(e,ut()),t;switch(e.finishedWork=e.current.alternate,e.finishedLanes=n,r){case 0:case 1:throw Error(R(345));case 2:Vr(e);break;case 3:if(Ui(e,n),(n&62914560)===n&&(r=Cp+500-ut(),10<r)){if(As(e,0)!==0)break;if(i=e.suspendedLanes,(i&n)!==n){At(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=$m(Vr.bind(null,e),r);break}Vr(e);break;case 4:if(Ui(e,n),(n&4186112)===n)break;for(r=e.eventTimes,i=-1;0<n;){var s=31-kr(n);o=1<<s,s=r[s],s>i&&(i=s),n&=~o}if(n=i,n=ut()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*sk(n/1960))-n,10<n){e.timeoutHandle=$m(Vr.bind(null,e),n);break}Vr(e);break;case 5:Vr(e);break;default:throw Error(R(329))}}return Ht(e,ut()),e.callbackNode===t?Wx.bind(null,e):null}function Ui(e,t){for(t&=~kp,t&=~yo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-kr(t),r=1<<n;e[n]=-1,t&=~r}}function zf(e){if((U&48)!==0)throw Error(R(327));if(Rr(),e===yt&&(e.expiredLanes&ht)!==0){var t=ht,n=Zo(e,t);(vo&yo)!==0&&(t=As(e,t),n=Zo(e,t))}else t=As(e,0),n=Zo(e,t);if(e.tag!==0&&n===2&&(U|=64,e.hydrate&&(e.hydrate=!1,cp(e.containerInfo)),t=Qy(e),t!==0&&(n=Zo(e,t))),n===1)throw n=Kc,Yi(e,0),Ui(e,t),Ht(e,ut()),n;return e.finishedWork=e.current.alternate,e.finishedLanes=t,Vr(e),Ht(e,ut()),null}function ak(){if(Fn!==null){var e=Fn;Fn=null,e.forEach(function(t){t.expiredLanes|=24&t.pendingLanes,Ht(t,ut())})}Cn()}function Vx(e,t){var n=U;U|=1;try{return e(t)}finally{U=n,U===0&&(xo(),Cn())}}function Hx(e,t){var n=U;U&=-2,U|=8;try{return e(t)}finally{U=n,U===0&&(xo(),Cn())}}function Ha(e,t){$e(Nf,oi),oi|=t,vo|=t}function Pp(){oi=Nf.current,_e(Nf)}function Yi(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,BS(n)),He!==null)for(n=He.return;n!==null;){var r=n;switch(r.tag){case 1:r=r.type.childContextTypes,r!=null&&ql();break;case 3:io(),_e(Pt),_e(pt),mp();break;case 5:gp(r);break;case 4:io();break;case 13:_e(Ae);break;case 19:_e(Ae);break;case 10:hp(r);break;case 23:case 24:Pp()}n=n.return}yt=e,He=Or(e.current,null),ht=oi=vo=t,nt=0,Kc=null,kp=yo=ca=0}function Ux(e,t){do{var n=He;try{if(fp(),hs.current=ac,rc){for(var r=Ie.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}rc=!1}if(Fs=0,et=lt=Ie=null,ps=!1,Sp.current=null,n===null||n.return===null){nt=1,Kc=t,He=null;break}e:{var o=e,s=n.return,a=n,l=t;if(t=ht,a.flags|=2048,a.firstEffect=a.lastEffect=null,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l;if((a.mode&2)===0){var u=a.alternate;u?(a.updateQueue=u.updateQueue,a.memoizedState=u.memoizedState,a.lanes=u.lanes):(a.updateQueue=null,a.memoizedState=null)}var d=(Ae.current&1)!==0,f=s;do{var g;if(g=f.tag===13){var v=f.memoizedState;if(v!==null)g=v.dehydrated!==null;else{var y=f.memoizedProps;g=y.fallback===void 0?!1:y.unstable_avoidThisFallback!==!0?!0:!d}}if(g){var p=f.updateQueue;if(p===null){var m=new Set;m.add(c),f.updateQueue=m}else p.add(c);if((f.mode&2)===0){if(f.flags|=64,a.flags|=16384,a.flags&=-2981,a.tag===1)if(a.alternate===null)a.tag=17;else{var x=fr(-1,1);x.tag=2,hr(a,x)}a.lanes|=1;break e}l=void 0,a=t;var b=o.pingCache;if(b===null?(b=o.pingCache=new tk,l=new Set,b.set(c,l)):(l=b.get(c),l===void 0&&(l=new Set,b.set(c,l))),!l.has(a)){l.add(a);var w=pk.bind(null,o,c,a);c.then(w,w)}f.flags|=4096,f.lanes=t;break e}f=f.return}while(f!==null);l=Error((Ii(a.type)||"A React component")+` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`)}nt!==5&&(nt=2),l=_p(l,a),f=s;do{switch(f.tag){case 3:o=l,f.flags|=4096,t&=-t,f.lanes|=t;var _=jx(f,o,t);Fm(f,_);break e;case 1:o=l;var k=f.type,P=f.stateNode;if((f.flags&64)===0&&(typeof k.getDerivedStateFromError=="function"||P!==null&&typeof P.componentDidCatch=="function"&&(yn===null||!yn.has(P)))){f.flags|=4096,t&=-t,f.lanes|=t;var M=Fx(f,o,t);Fm(f,M);break e}}f=f.return}while(f!==null)}Kx(n)}catch(E){t=E,He===n&&n!==null&&(He=n=n.return);continue}break}while(1)}function Yx(){var e=lc.current;return lc.current=ac,e===null?ac:e}function Zo(e,t){var n=U;U|=16;var r=Yx();yt===e&&ht===t||Yi(e,t);do try{lk();break}catch(i){Ux(e,i)}while(1);if(fp(),U=n,lc.current=r,He!==null)throw Error(R(261));return yt=null,ht=0,nt}function lk(){for(;He!==null;)Xx(He)}function ck(){for(;He!==null&&!HS();)Xx(He)}function Xx(e){var t=qx(e.alternate,e,oi);e.memoizedProps=e.pendingProps,t===null?Kx(e):He=t,Sp.current=null}function Kx(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&2048)===0){if(n=JS(n,t,oi),n!==null){He=n;return}if(n=t,n.tag!==24&&n.tag!==23||n.memoizedState===null||(oi&1073741824)!==0||(n.mode&4)===0){for(var r=0,i=n.child;i!==null;)r|=i.lanes|i.childLanes,i=i.sibling;n.childLanes=r}e!==null&&(e.flags&2048)===0&&(e.firstEffect===null&&(e.firstEffect=t.firstEffect),t.lastEffect!==null&&(e.lastEffect!==null&&(e.lastEffect.nextEffect=t.firstEffect),e.lastEffect=t.lastEffect),1<t.flags&&(e.lastEffect!==null?e.lastEffect.nextEffect=t:e.firstEffect=t,e.lastEffect=t))}else{if(n=ek(t),n!==null){n.flags&=2047,He=n;return}e!==null&&(e.firstEffect=e.lastEffect=null,e.flags|=2048)}if(t=t.sibling,t!==null){He=t;return}He=t=e}while(t!==null);nt===0&&(nt=5)}function Vr(e){var t=ro();return ii(99,uk.bind(null,e,t)),null}function uk(e,t){do Rr();while(gs!==null);if((U&48)!==0)throw Error(R(327));var n=e.finishedWork;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(R(177));e.callbackNode=null;var r=n.lanes|n.childLanes,i=r,o=e.pendingLanes&~i;e.pendingLanes=i,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=i,e.mutableReadLanes&=i,e.entangledLanes&=i,i=e.entanglements;for(var s=e.eventTimes,a=e.expirationTimes;0<o;){var l=31-kr(o),c=1<<l;i[l]=0,s[l]=-1,a[l]=-1,o&=~c}if(Fn!==null&&(r&24)===0&&Fn.has(e)&&Fn.delete(e),e===yt&&(He=yt=null,ht=0),1<n.flags?n.lastEffect!==null?(n.lastEffect.nextEffect=n,r=n.firstEffect):r=n:r=n.firstEffect,r!==null){if(i=U,U|=32,Sp.current=null,ad=vl,s=Pm(),hf(s)){if("selectionStart"in s)a={start:s.selectionStart,end:s.selectionEnd};else e:if(a=(a=s.ownerDocument)&&a.defaultView||window,(c=a.getSelection&&a.getSelection())&&c.rangeCount!==0){a=c.anchorNode,o=c.anchorOffset,l=c.focusNode,c=c.focusOffset;try{a.nodeType,l.nodeType}catch{a=null;break e}var u=0,d=-1,f=-1,g=0,v=0,y=s,p=null;t:for(;;){for(var m;y!==a||o!==0&&y.nodeType!==3||(d=u+o),y!==l||c!==0&&y.nodeType!==3||(f=u+c),y.nodeType===3&&(u+=y.nodeValue.length),(m=y.firstChild)!==null;)p=y,y=m;for(;;){if(y===s)break t;if(p===a&&++g===o&&(d=u),p===l&&++v===c&&(f=u),(m=y.nextSibling)!==null)break;y=p,p=y.parentNode}y=m}a=d===-1||f===-1?null:{start:d,end:f}}else a=null;a=a||{start:0,end:0}}else a=null;ld={focusedElem:s,selectionRange:a},vl=!1,vs=null,kl=!1,B=r;do try{dk()}catch(E){if(B===null)throw Error(R(330));mr(B,E),B=B.nextEffect}while(B!==null);vs=null,B=r;do try{for(s=e;B!==null;){var x=B.flags;if(x&16&&Ms(B.stateNode,""),x&128){var b=B.alternate;if(b!==null){var w=b.ref;w!==null&&(typeof w=="function"?w(null):w.current=null)}}switch(x&1038){case 2:d0(B),B.flags&=-3;break;case 6:d0(B),B.flags&=-3,gd(B.alternate,B);break;case 1024:B.flags&=-1025;break;case 1028:B.flags&=-1025,gd(B.alternate,B);break;case 4:gd(B.alternate,B);break;case 8:a=B,Bx(s,a);var _=a.alternate;c0(a),_!==null&&c0(_)}B=B.nextEffect}}catch(E){if(B===null)throw Error(R(330));mr(B,E),B=B.nextEffect}while(B!==null);if(w=ld,b=Pm(),x=w.focusedElem,s=w.selectionRange,b!==x&&x&&x.ownerDocument&&ox(x.ownerDocument.documentElement,x)){for(s!==null&&hf(x)&&(b=s.start,w=s.end,w===void 0&&(w=b),"selectionStart"in x?(x.selectionStart=b,x.selectionEnd=Math.min(w,x.value.length)):(w=(b=x.ownerDocument||document)&&b.defaultView||window,w.getSelection&&(w=w.getSelection(),a=x.textContent.length,_=Math.min(s.start,a),s=s.end===void 0?_:Math.min(s.end,a),!w.extend&&_>s&&(a=s,s=_,_=a),a=Cm(x,_),o=Cm(x,s),a&&o&&(w.rangeCount!==1||w.anchorNode!==a.node||w.anchorOffset!==a.offset||w.focusNode!==o.node||w.focusOffset!==o.offset)&&(b=b.createRange(),b.setStart(a.node,a.offset),w.removeAllRanges(),_>s?(w.addRange(b),w.extend(o.node,o.offset)):(b.setEnd(o.node,o.offset),w.addRange(b)))))),b=[],w=x;w=w.parentNode;)w.nodeType===1&&b.push({element:w,left:w.scrollLeft,top:w.scrollTop});for(typeof x.focus=="function"&&x.focus(),x=0;x<b.length;x++)w=b[x],w.element.scrollLeft=w.left,w.element.scrollTop=w.top}vl=!!ad,ld=ad=null,e.current=n,B=r;do try{for(x=e;B!==null;){var k=B.flags;if(k&36&&ik(x,B.alternate,B),k&128){b=void 0;var P=B.ref;if(P!==null){var M=B.stateNode;switch(B.tag){case 5:b=M;break;default:b=M}typeof P=="function"?P(b):P.current=b}}B=B.nextEffect}}catch(E){if(B===null)throw Error(R(330));mr(B,E),B=B.nextEffect}while(B!==null);B=null,YS(),U=i}else e.current=n;if(Pr)Pr=!1,gs=e,Qo=t;else for(B=r;B!==null;)t=B.nextEffect,B.nextEffect=null,B.flags&8&&(k=B,k.sibling=null,k.stateNode=null),B=t;if(r=e.pendingLanes,r===0&&(yn=null),r===1?e===Df?ms++:(ms=0,Df=e):ms=0,n=n.stateNode,ei&&typeof ei.onCommitFiberRoot=="function")try{ei.onCommitFiberRoot(up,n,void 0,(n.current.flags&64)===64)}catch{}if(Ht(e,ut()),cc)throw cc=!1,e=$f,$f=null,e;return(U&8)!==0||Cn(),null}function dk(){for(;B!==null;){var e=B.alternate;kl||vs===null||((B.flags&8)!==0?dm(B,vs)&&(kl=!0):B.tag===13&&ok(e,B)&&dm(B,vs)&&(kl=!0));var t=B.flags;(t&256)!==0&&rk(e,B),(t&512)===0||Pr||(Pr=!0,Ds(97,function(){return Rr(),null})),B=B.nextEffect}}function Rr(){if(Qo!==90){var e=97<Qo?97:Qo;return Qo=90,ii(e,hk)}return!1}function fk(e,t){Rf.push(t,e),Pr||(Pr=!0,Ds(97,function(){return Rr(),null}))}function Gx(e,t){Lf.push(t,e),Pr||(Pr=!0,Ds(97,function(){return Rr(),null}))}function hk(){if(gs===null)return!1;var e=gs;if(gs=null,(U&48)!==0)throw Error(R(331));var t=U;U|=32;var n=Lf;Lf=[];for(var r=0;r<n.length;r+=2){var i=n[r],o=n[r+1],s=i.destroy;if(i.destroy=void 0,typeof s=="function")try{s()}catch(l){if(o===null)throw Error(R(330));mr(o,l)}}for(n=Rf,Rf=[],r=0;r<n.length;r+=2){i=n[r],o=n[r+1];try{var a=i.create;i.destroy=a()}catch(l){if(o===null)throw Error(R(330));mr(o,l)}}for(a=e.current.firstEffect;a!==null;)e=a.nextEffect,a.nextEffect=null,a.flags&8&&(a.sibling=null,a.stateNode=null),a=e;return U=t,Cn(),!0}function h0(e,t,n){t=_p(n,t),t=jx(e,t,1),hr(e,t),t=At(),e=Gc(e,1),e!==null&&(Bc(e,1,t),Ht(e,t))}function mr(e,t){if(e.tag===3)h0(e,e,t);else for(var n=e.return;n!==null;){if(n.tag===3){h0(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(yn===null||!yn.has(r))){e=_p(t,e);var i=Fx(n,e,1);if(hr(n,i),i=At(),n=Gc(n,1),n!==null)Bc(n,1,i),Ht(n,i);else if(typeof r.componentDidCatch=="function"&&(yn===null||!yn.has(r)))try{r.componentDidCatch(t,e)}catch{}break}}n=n.return}}function pk(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=At(),e.pingedLanes|=e.suspendedLanes&n,yt===e&&(ht&n)===n&&(nt===4||nt===3&&(ht&62914560)===ht&&500>ut()-Cp?Yi(e,0):kp|=n),Ht(e,t)}function gk(e,t){var n=e.stateNode;n!==null&&n.delete(t),t=0,t===0&&(t=e.mode,(t&2)===0?t=1:(t&4)===0?t=ro()===99?1:2:(Rn===0&&(Rn=vo),t=Ni(62914560&~Rn),t===0&&(t=4194304))),n=At(),e=Gc(e,t),e!==null&&(Bc(e,t,n),Ht(e,n))}var qx;qx=function(e,t,n){var r=t.lanes;if(e!==null)if(e.memoizedProps!==t.pendingProps||Pt.current)en=!0;else if((n&r)!==0)en=(e.flags&16384)!==0;else{switch(en=!1,t.tag){case 3:Jm(t),fd();break;case 5:Hm(t);break;case 1:Ot(t.type)&&bl(t);break;case 4:wf(t,t.stateNode.containerInfo);break;case 10:r=t.memoizedProps.value;var i=t.type._context;$e(Ql,i._currentValue),i._currentValue=r;break;case 13:if(t.memoizedState!==null)return(n&t.child.childLanes)!==0?e0(e,t,n):($e(Ae,Ae.current&1),t=Dn(e,t,n),t!==null?t.sibling:null);$e(Ae,Ae.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&64)!==0){if(r)return o0(e,t,n);t.flags|=64}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),$e(Ae,Ae.current),r)break;return null;case 23:case 24:return t.lanes=0,hd(e,t,n)}return Dn(e,t,n)}else en=!1;switch(t.lanes=0,t.tag){case 2:if(r=t.type,e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2),e=t.pendingProps,i=no(t,pt.current),Vi(t,n),i=yp(null,t,r,e,i,n),t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0){if(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ot(r)){var o=!0;bl(t)}else o=!1;t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,pp(t);var s=r.getDerivedStateFromProps;typeof s=="function"&&ec(t,r,s,e),i.updater=Xc,t.stateNode=i,i._reactInternals=t,bf(t,r,e,n),t=Cf(null,t,r,!0,o,n)}else t.tag=0,kt(null,t,i,n),t=t.child;return t;case 16:i=t.elementType;e:{switch(e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2),e=t.pendingProps,o=i._init,i=o(i._payload),t.type=i,o=t.tag=vk(i),e=Zt(i,e),o){case 0:t=kf(null,t,i,e,n);break e;case 1:t=Zm(null,t,i,e,n);break e;case 11:t=qm(null,t,i,e,n);break e;case 14:t=Qm(null,t,i,Zt(i.type,e),r,n);break e}throw Error(R(306,i,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Zt(r,i),kf(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Zt(r,i),Zm(e,t,r,i,n);case 3:if(Jm(t),r=t.updateQueue,e===null||r===null)throw Error(R(282));if(r=t.pendingProps,i=t.memoizedState,i=i!==null?i.element:null,wx(e,t),zs(t,r,null,n),r=t.memoizedState.element,r===i)fd(),t=Dn(e,t,n);else{if(i=t.stateNode,(o=i.hydrate)&&(nr=Wi(t.stateNode.containerInfo.firstChild),Ln=t,o=bn=!0),o){if(e=i.mutableSourceEagerHydrationData,e!=null)for(i=0;i<e.length;i+=2)o=e[i],o._workInProgressVersionPrimary=e[i+1],Hi.push(o);for(n=Cx(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|1024,n=n.sibling}else kt(e,t,r,n),fd();t=t.child}return t;case 5:return Hm(t),e===null&&_f(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,mf(r,i)?s=null:o!==null&&mf(r,o)&&(t.flags|=16),Lx(e,t),kt(e,t,s,n),t.child;case 6:return e===null&&_f(t),null;case 13:return e0(e,t,n);case 4:return wf(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=tc(t,null,r,n):kt(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Zt(r,i),qm(e,t,r,i,n);case 7:return kt(e,t,t.pendingProps,n),t.child;case 8:return kt(e,t,t.pendingProps.children,n),t.child;case 12:return kt(e,t,t.pendingProps.children,n),t.child;case 10:e:{r=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value;var a=t.type._context;if($e(Ql,a._currentValue),a._currentValue=o,s!==null)if(a=s.value,o=Ft(a,o)?0:(typeof r._calculateChangedBits=="function"?r._calculateChangedBits(a,o):1073741823)|0,o===0){if(s.children===i.children&&!Pt.current){t=Dn(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var l=a.dependencies;if(l!==null){s=a.child;for(var c=l.firstContext;c!==null;){if(c.context===r&&(c.observedBits&o)!==0){a.tag===1&&(c=fr(-1,n&-n),c.tag=2,hr(a,c)),a.lanes|=n,c=a.alternate,c!==null&&(c.lanes|=n),bx(a.return,n),l.lanes|=n;break}c=c.next}}else s=a.tag===10&&a.type===t.type?null:a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===t){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}kt(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,o=t.pendingProps,r=o.children,Vi(t,n),i=Vt(i,o.unstable_observedBits),r=r(i),t.flags|=1,kt(e,t,r,n),t.child;case 14:return i=t.type,o=Zt(i,t.pendingProps),o=Zt(i.type,o),Qm(e,t,i,o,r,n);case 15:return Rx(e,t,t.type,t.pendingProps,r,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Zt(r,i),e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2),t.tag=1,Ot(r)?(e=!0,bl(t)):e=!1,Vi(t,n),Sx(t,r,i),bf(t,r,i,n),Cf(null,t,r,!0,e,n);case 19:return o0(e,t,n);case 23:return hd(e,t,n);case 24:return hd(e,t,n)}throw Error(R(156,t.tag))};function mk(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.flags=0,this.lastEffect=this.firstEffect=this.nextEffect=null,this.childLanes=this.lanes=0,this.alternate=null}function Bt(e,t,n,r){return new mk(e,t,n,r)}function Op(e){return e=e.prototype,!(!e||!e.isReactComponent)}function vk(e){if(typeof e=="function")return Op(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ic)return 11;if(e===jc)return 14}return 2}function Or(e,t){var n=e.alternate;return n===null?(n=Bt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.nextEffect=null,n.firstEffect=null,n.lastEffect=null),n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Cl(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")Op(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Qn:return Xi(n.children,i,o,t);case Py:s=8,i|=16;break;case Vh:s=8,i|=1;break;case ss:return e=Bt(12,n,t,i|8),e.elementType=ss,e.type=ss,e.lanes=o,e;case as:return e=Bt(13,n,t,i),e.type=as,e.elementType=as,e.lanes=o,e;case Wl:return e=Bt(19,n,t,i),e.elementType=Wl,e.lanes=o,e;case Gh:return Mp(n,i,o,t);case Qd:return e=Bt(24,n,t,i),e.elementType=Qd,e.lanes=o,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Hh:s=10;break e;case Uh:s=9;break e;case Ic:s=11;break e;case jc:s=14;break e;case Yh:s=16,r=null;break e;case Xh:s=22;break e}throw Error(R(130,e==null?e:typeof e,""))}return t=Bt(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Xi(e,t,n,r){return e=Bt(7,e,r,t),e.lanes=n,e}function Mp(e,t,n,r){return e=Bt(23,e,r,t),e.elementType=Gh,e.lanes=n,e}function md(e,t,n){return e=Bt(6,e,null,t),e.lanes=n,e}function vd(e,t,n){return t=Bt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function yk(e,t,n){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.pendingContext=this.context=null,this.hydrate=n,this.callbackNode=null,this.callbackPriority=0,this.eventTimes=ed(0),this.expirationTimes=ed(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ed(0),this.mutableSourceEagerHydrationData=null}function xk(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Kr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function uc(e,t,n,r){var i=t.current,o=At(),s=pr(i);e:if(n){n=n._reactInternals;t:{if(pi(n)!==n||n.tag!==1)throw Error(R(170));var a=n;do{switch(a.tag){case 3:a=a.stateNode.context;break t;case 1:if(Ot(a.type)){a=a.stateNode.__reactInternalMemoizedMergedChildContext;break t}}a=a.return}while(a!==null);throw Error(R(171))}if(n.tag===1){var l=n.type;if(Ot(l)){n=hx(n,l,a);break e}}n=a}else n=Cr;return t.context===null?t.context=n:t.pendingContext=n,t=fr(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),hr(i,t),gr(i,s,o),s}function yd(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function p0(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ep(e,t){p0(e,t),(e=e.alternate)&&p0(e,t)}function bk(){return null}function Np(e,t,n){var r=n!=null&&n.hydrationOptions!=null&&n.hydrationOptions.mutableSources||null;if(n=new yk(e,t,n!=null&&n.hydrate===!0),t=Bt(3,null,null,t===2?7:t===1?3:0),n.current=t,t.stateNode=n,pp(t),e[mo]=n.current,lx(e.nodeType===8?e.parentNode:e),r)for(e=0;e<r.length;e++){t=r[e];var i=t._getVersion;i=i(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i)}this._internalRoot=n}Np.prototype.render=function(e){uc(e,this._internalRoot,null,null)};Np.prototype.unmount=function(){var e=this._internalRoot,t=e.containerInfo;uc(null,e,null,function(){t[mo]=null})};function ua(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function wk(e,t){if(t||(t=e?e.nodeType===9?e.documentElement:e.firstChild:null,t=!(!t||t.nodeType!==1||!t.hasAttribute("data-reactroot"))),!t)for(var n;n=e.lastChild;)e.removeChild(n);return new Np(e,0,t?{hydrate:!0}:void 0)}function qc(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o._internalRoot;if(typeof i=="function"){var a=i;i=function(){var c=yd(s);a.call(c)}}uc(t,s,e,i)}else{if(o=n._reactRootContainer=wk(n,r),s=o._internalRoot,typeof i=="function"){var l=i;i=function(){var c=yd(s);l.call(c)}}Hx(function(){uc(t,s,e,i)})}return yd(s)}By=function(e){if(e.tag===13){var t=At();gr(e,4,t),Ep(e,4)}};ep=function(e){if(e.tag===13){var t=At();gr(e,67108864,t),Ep(e,67108864)}};Wy=function(e){if(e.tag===13){var t=At(),n=pr(e);gr(e,n,t),Ep(e,n)}};Vy=function(e,t){return t()};lf=function(e,t,n){switch(t){case"input":if(Jd(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Uc(r);if(!i)throw Error(R(90));My(r),Jd(r,i)}}}break;case"textarea":Ny(e,n);break;case"select":t=n.value,t!=null&&ji(e,!!n.multiple,t,!1)}};Qh=Vx;zy=function(e,t,n,r,i){var o=U;U|=4;try{return ii(98,e.bind(null,t,n,r,i))}finally{U=o,U===0&&(xo(),Cn())}};Zh=function(){(U&49)===0&&(ak(),Rr())};Iy=function(e,t){var n=U;U|=2;try{return e(t)}finally{U=n,U===0&&(xo(),Cn())}};function Qx(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ua(t))throw Error(R(200));return xk(e,t,null,n)}var _k={Events:[aa,Ri,Uc,Ly,Dy,Rr,{current:!1}]},jo={findFiberByHostInstance:qr,bundleType:0,version:"17.0.2",rendererPackageName:"react-dom"},Sk={bundleType:jo.bundleType,version:jo.version,rendererPackageName:jo.rendererPackageName,rendererConfig:jo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:hi.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Fy(e),e===null?null:e.stateNode},findFiberByHostInstance:jo.findFiberByHostInstance||bk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var Ua=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ua.isDisabled&&Ua.supportsFiber)try{up=Ua.inject(Sk),ei=Ua}catch{}}Yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_k;Yt.createPortal=Qx;Yt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(R(188)):Error(R(268,Object.keys(e)));return e=Fy(t),e=e===null?null:e.stateNode,e};Yt.flushSync=function(e,t){var n=U;if((n&48)!==0)return e(t);U|=1;try{if(e)return ii(99,e.bind(null,t))}finally{U=n,Cn()}};Yt.hydrate=function(e,t,n){if(!ua(t))throw Error(R(200));return qc(null,e,t,!0,n)};Yt.render=function(e,t,n){if(!ua(t))throw Error(R(200));return qc(null,e,t,!1,n)};Yt.unmountComponentAtNode=function(e){if(!ua(e))throw Error(R(40));return e._reactRootContainer?(Hx(function(){qc(null,null,e,!1,function(){e._reactRootContainer=null,e[mo]=null})}),!0):!1};Yt.unstable_batchedUpdates=Vx;Yt.unstable_createPortal=function(e,t){return Qx(e,t,2<arguments.length&&arguments[2]!==void 0?arguments[2]:null)};Yt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ua(n))throw Error(R(200));if(e==null||e._reactInternals===void 0)throw Error(R(38));return qc(e,t,n,!1,r)};Yt.version="17.0.2";function Zx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Zx)}catch(e){console.error(e)}}Zx(),Dc.exports=Yt;var Jx=Dc.exports,kk=ly({__proto__:null,default:Jx},[Dc.exports]);/**
 * @remix-run/router v1.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Bs(){return Bs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Bs.apply(this,arguments)}var rr;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(rr||(rr={}));const g0="popstate";function Ck(e){e===void 0&&(e={});function t(i,o){let{pathname:s="/",search:a="",hash:l=""}=mi(i.location.hash.substr(1));return!s.startsWith("/")&&!s.startsWith(".")&&(s="/"+s),If("",{pathname:s,search:a,hash:l},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(i,o){let s=i.document.querySelector("base"),a="";if(s&&s.getAttribute("href")){let l=i.location.href,c=l.indexOf("#");a=c===-1?l:l.slice(0,c)}return a+"#"+(typeof o=="string"?o:dc(o))}function r(i,o){Tp(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(o)+")")}return Ok(t,n,r,e)}function je(e,t){if(e===!1||e===null||typeof e=="undefined")throw new Error(t)}function Tp(e,t){if(!e){typeof console!="undefined"&&console.warn(t);try{throw new Error(t)}catch{}}}function Pk(){return Math.random().toString(36).substr(2,8)}function m0(e,t){return{usr:e.state,key:e.key,idx:t}}function If(e,t,n,r){return n===void 0&&(n=null),Bs({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?mi(t):t,{state:n,key:t&&t.key||r||Pk()})}function dc(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function mi(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Ok(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=rr.Pop,l=null,c=u();c==null&&(c=0,s.replaceState(Bs({},s.state,{idx:c}),""));function u(){return(s.state||{idx:null}).idx}function d(){a=rr.Pop;let p=u(),m=p==null?null:p-c;c=p,l&&l({action:a,location:y.location,delta:m})}function f(p,m){a=rr.Push;let x=If(y.location,p,m);n&&n(x,p),c=u()+1;let b=m0(x,c),w=y.createHref(x);try{s.pushState(b,"",w)}catch(_){if(_ instanceof DOMException&&_.name==="DataCloneError")throw _;i.location.assign(w)}o&&l&&l({action:a,location:y.location,delta:1})}function g(p,m){a=rr.Replace;let x=If(y.location,p,m);n&&n(x,p),c=u();let b=m0(x,c),w=y.createHref(x);s.replaceState(b,"",w),o&&l&&l({action:a,location:y.location,delta:0})}function v(p){let m=i.location.origin!=="null"?i.location.origin:i.location.href,x=typeof p=="string"?p:dc(p);return x=x.replace(/ $/,"%20"),je(m,"No window.location.(origin|href) available to create URL for href: "+x),new URL(x,m)}let y={get action(){return a},get location(){return e(i,s)},listen(p){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(g0,d),l=p,()=>{i.removeEventListener(g0,d),l=null}},createHref(p){return t(i,p)},createURL:v,encodeLocation(p){let m=v(p);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:f,replace:g,go(p){return s.go(p)}};return y}var v0;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(v0||(v0={}));function Mk(e,t,n){return n===void 0&&(n="/"),Ek(e,t,n,!1)}function Ek(e,t,n,r){let i=typeof t=="string"?mi(t):t,o=Ap(i.pathname||"/",n);if(o==null)return null;let s=eb(e);Nk(s);let a=null;for(let l=0;a==null&&l<s.length;++l){let c=Bk(o);a=jk(s[l],c,r)}return a}function eb(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,a)=>{let l={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};l.relativePath.startsWith("/")&&(je(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let c=vr([r,l.relativePath]),u=n.concat(l);o.children&&o.children.length>0&&(je(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),eb(o.children,t,u,c)),!(o.path==null&&!o.index)&&t.push({path:c,score:zk(c,o.index),routesMeta:u})};return e.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,s);else for(let l of tb(o.path))i(o,s,l)}),t}function tb(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=tb(r.join("/")),a=[];return a.push(...s.map(l=>l===""?o:[o,l].join("/"))),i&&a.push(...s),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function Nk(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Ik(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Tk=/^:[\w-]+$/,Ak=3,$k=2,Rk=1,Lk=10,Dk=-2,y0=e=>e==="*";function zk(e,t){let n=e.split("/"),r=n.length;return n.some(y0)&&(r+=Dk),t&&(r+=$k),n.filter(i=>!y0(i)).reduce((i,o)=>i+(Tk.test(o)?Ak:o===""?Rk:Lk),r)}function Ik(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function jk(e,t,n){n===void 0&&(n=!1);let{routesMeta:r}=e,i={},o="/",s=[];for(let a=0;a<r.length;++a){let l=r[a],c=a===r.length-1,u=o==="/"?t:t.slice(o.length)||"/",d=x0({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},u),f=l.route;if(!d&&c&&n&&!r[r.length-1].route.index&&(d=x0({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},u)),!d)return null;Object.assign(i,d.params),s.push({params:i,pathname:vr([o,d.pathname]),pathnameBase:Uk(vr([o,d.pathnameBase])),route:f}),d.pathnameBase!=="/"&&(o=vr([o,d.pathnameBase]))}return s}function x0(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Fk(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,u,d)=>{let{paramName:f,isOptional:g}=u;if(f==="*"){let y=a[d]||"";s=o.slice(0,o.length-y.length).replace(/(.)\/+$/,"$1")}const v=a[d];return g&&!v?c[f]=void 0:c[f]=(v||"").replace(/%2F/g,"/"),c},{}),pathname:o,pathnameBase:s,pattern:e}}function Fk(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Tp(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function Bk(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Tp(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Ap(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Wk(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?mi(e):e;return{pathname:n?n.startsWith("/")?n:Vk(n,t):t,search:Yk(r),hash:Xk(i)}}function Vk(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function xd(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Hk(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function $p(e,t){let n=Hk(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Rp(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=mi(e):(i=Bs({},e),je(!i.pathname||!i.pathname.includes("?"),xd("?","pathname","search",i)),je(!i.pathname||!i.pathname.includes("#"),xd("#","pathname","hash",i)),je(!i.search||!i.search.includes("#"),xd("#","search","hash",i)));let o=e===""||i.pathname==="",s=o?"/":i.pathname,a;if(s==null)a=n;else{let d=t.length-1;if(!r&&s.startsWith("..")){let f=s.split("/");for(;f[0]==="..";)f.shift(),d-=1;i.pathname=f.join("/")}a=d>=0?t[d]:"/"}let l=Wk(i,a),c=s&&s!=="/"&&s.endsWith("/"),u=(o||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||u)&&(l.pathname+="/"),l}const vr=e=>e.join("/").replace(/\/\/+/g,"/"),Uk=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Yk=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Xk=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Kk(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Gk=["post","put","patch","delete"];[...Gk];/**
 * React Router v6.25.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ws(){return Ws=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ws.apply(this,arguments)}const Lp=C.exports.createContext(null),qk=C.exports.createContext(null),Lr=C.exports.createContext(null),Qc=C.exports.createContext(null),Pn=C.exports.createContext({outlet:null,matches:[],isDataRoute:!1}),nb=C.exports.createContext(null);function Qk(e,t){let{relative:n}=t===void 0?{}:t;bo()||je(!1);let{basename:r,navigator:i}=C.exports.useContext(Lr),{hash:o,pathname:s,search:a}=ib(e,{relative:n}),l=s;return r!=="/"&&(l=s==="/"?r:vr([r,s])),i.createHref({pathname:l,search:a,hash:o})}function bo(){return C.exports.useContext(Qc)!=null}function Xt(){return bo()||je(!1),C.exports.useContext(Qc).location}function rb(e){C.exports.useContext(Lr).static||C.exports.useLayoutEffect(e)}function Dr(){let{isDataRoute:e}=C.exports.useContext(Pn);return e?h5():Zk()}function Zk(){bo()||je(!1);let e=C.exports.useContext(Lp),{basename:t,future:n,navigator:r}=C.exports.useContext(Lr),{matches:i}=C.exports.useContext(Pn),{pathname:o}=Xt(),s=JSON.stringify($p(i,n.v7_relativeSplatPath)),a=C.exports.useRef(!1);return rb(()=>{a.current=!0}),C.exports.useCallback(function(c,u){if(u===void 0&&(u={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let d=Rp(c,JSON.parse(s),o,u.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:vr([t,d.pathname])),(u.replace?r.replace:r.push)(d,u.state,u)},[t,r,s,o,e])}const Jk=C.exports.createContext(null);function e5(e){let t=C.exports.useContext(Pn).outlet;return t&&C.exports.createElement(Jk.Provider,{value:e},t)}function t5(){let{matches:e}=C.exports.useContext(Pn),t=e[e.length-1];return t?t.params:{}}function ib(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=C.exports.useContext(Lr),{matches:i}=C.exports.useContext(Pn),{pathname:o}=Xt(),s=JSON.stringify($p(i,r.v7_relativeSplatPath));return C.exports.useMemo(()=>Rp(e,JSON.parse(s),o,n==="path"),[e,s,o,n])}function n5(e,t){return r5(e,t)}function r5(e,t,n,r){bo()||je(!1);let{navigator:i}=C.exports.useContext(Lr),{matches:o}=C.exports.useContext(Pn),s=o[o.length-1],a=s?s.params:{};s&&s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let c=Xt(),u;if(t){var d;let p=typeof t=="string"?mi(t):t;l==="/"||((d=p.pathname)==null?void 0:d.startsWith(l))||je(!1),u=p}else u=c;let f=u.pathname||"/",g=f;if(l!=="/"){let p=l.replace(/^\//,"").split("/"),m=f.replace(/^\//,"").split("/");g="/"+m.slice(p.length).join("/")}let v=Mk(e,{pathname:g}),y=l5(v&&v.map(p=>Object.assign({},p,{params:Object.assign({},a,p.params),pathname:vr([l,i.encodeLocation?i.encodeLocation(p.pathname).pathname:p.pathname]),pathnameBase:p.pathnameBase==="/"?l:vr([l,i.encodeLocation?i.encodeLocation(p.pathnameBase).pathname:p.pathnameBase])})),o,n,r);return t&&y?C.exports.createElement(Qc.Provider,{value:{location:Ws({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:rr.Pop}},y):y}function i5(){let e=f5(),t=Kk(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return C.exports.createElement(C.exports.Fragment,null,C.exports.createElement("h2",null,"Unexpected Application Error!"),C.exports.createElement("h3",{style:{fontStyle:"italic"}},t),n?C.exports.createElement("pre",{style:i},n):null,o)}const o5=C.exports.createElement(i5,null);class s5 extends C.exports.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?C.exports.createElement(Pn.Provider,{value:this.props.routeContext},C.exports.createElement(nb.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function a5(e){let{routeContext:t,match:n,children:r}=e,i=C.exports.useContext(Lp);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),C.exports.createElement(Pn.Provider,{value:t},r)}function l5(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if((o=n)!=null&&o.errors)e=n.matches;else return null}let s=e,a=(i=n)==null?void 0:i.errors;if(a!=null){let u=s.findIndex(d=>d.route.id&&(a==null?void 0:a[d.route.id])!==void 0);u>=0||je(!1),s=s.slice(0,Math.min(s.length,u+1))}let l=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let u=0;u<s.length;u++){let d=s[u];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(c=u),d.route.id){let{loaderData:f,errors:g}=n,v=d.route.loader&&f[d.route.id]===void 0&&(!g||g[d.route.id]===void 0);if(d.route.lazy||v){l=!0,c>=0?s=s.slice(0,c+1):s=[s[0]];break}}}return s.reduceRight((u,d,f)=>{let g,v=!1,y=null,p=null;n&&(g=a&&d.route.id?a[d.route.id]:void 0,y=d.route.errorElement||o5,l&&(c<0&&f===0?(p5("route-fallback",!1),v=!0,p=null):c===f&&(v=!0,p=d.route.hydrateFallbackElement||null)));let m=t.concat(s.slice(0,f+1)),x=()=>{let b;return g?b=y:v?b=p:d.route.Component?b=C.exports.createElement(d.route.Component,null):d.route.element?b=d.route.element:b=u,C.exports.createElement(a5,{match:d,routeContext:{outlet:u,matches:m,isDataRoute:n!=null},children:b})};return n&&(d.route.ErrorBoundary||d.route.errorElement||f===0)?C.exports.createElement(s5,{location:n.location,revalidation:n.revalidation,component:y,error:g,children:x(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):x()},null)}var ob=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(ob||{}),fc=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(fc||{});function c5(e){let t=C.exports.useContext(Lp);return t||je(!1),t}function u5(e){let t=C.exports.useContext(qk);return t||je(!1),t}function d5(e){let t=C.exports.useContext(Pn);return t||je(!1),t}function sb(e){let t=d5(),n=t.matches[t.matches.length-1];return n.route.id||je(!1),n.route.id}function f5(){var e;let t=C.exports.useContext(nb),n=u5(fc.UseRouteError),r=sb(fc.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function h5(){let{router:e}=c5(ob.UseNavigateStable),t=sb(fc.UseNavigateStable),n=C.exports.useRef(!1);return rb(()=>{n.current=!0}),C.exports.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Ws({fromRouteId:t},o)))},[e,t])}const b0={};function p5(e,t,n){!t&&!b0[e]&&(b0[e]=!0)}const g5="startTransition";Ps[g5];function m5(e){let{to:t,replace:n,state:r,relative:i}=e;bo()||je(!1);let{future:o,static:s}=C.exports.useContext(Lr),{matches:a}=C.exports.useContext(Pn),{pathname:l}=Xt(),c=Dr(),u=Rp(t,$p(a,o.v7_relativeSplatPath),l,i==="path"),d=JSON.stringify(u);return C.exports.useEffect(()=>c(JSON.parse(d),{replace:n,state:r,relative:i}),[c,d,i,n,r]),null}function Dp(e){return e5(e.context)}function ue(e){je(!1)}function v5(e){let{basename:t="/",children:n=null,location:r,navigationType:i=rr.Pop,navigator:o,static:s=!1,future:a}=e;bo()&&je(!1);let l=t.replace(/^\/*/,"/"),c=C.exports.useMemo(()=>({basename:l,navigator:o,static:s,future:Ws({v7_relativeSplatPath:!1},a)}),[l,a,o,s]);typeof r=="string"&&(r=mi(r));let{pathname:u="/",search:d="",hash:f="",state:g=null,key:v="default"}=r,y=C.exports.useMemo(()=>{let p=Ap(u,l);return p==null?null:{location:{pathname:p,search:d,hash:f,state:g,key:v},navigationType:i}},[l,u,d,f,g,v,i]);return y==null?null:C.exports.createElement(Lr.Provider,{value:c},C.exports.createElement(Qc.Provider,{children:n,value:y}))}function y5(e){let{children:t,location:n}=e;return n5(jf(t),n)}new Promise(()=>{});function jf(e,t){t===void 0&&(t=[]);let n=[];return C.exports.Children.forEach(e,(r,i)=>{if(!C.exports.isValidElement(r))return;let o=[...t,i];if(r.type===C.exports.Fragment){n.push.apply(n,jf(r.props.children,o));return}r.type!==ue&&je(!1),!r.props.index||!r.props.children||je(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=jf(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.25.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ff(){return Ff=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ff.apply(this,arguments)}function x5(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function b5(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function w5(e,t){return e.button===0&&(!t||t==="_self")&&!b5(e)}const _5=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],S5="6";try{window.__reactRouterVersion=S5}catch{}const k5="startTransition",w0=Ps[k5],C5="flushSync";kk[C5];const P5="useId";Ps[P5];function O5(e){let{basename:t,children:n,future:r,window:i}=e,o=C.exports.useRef();o.current==null&&(o.current=Ck({window:i,v5Compat:!0}));let s=o.current,[a,l]=C.exports.useState({action:s.action,location:s.location}),{v7_startTransition:c}=r||{},u=C.exports.useCallback(d=>{c&&w0?w0(()=>l(d)):l(d)},[l,c]);return C.exports.useLayoutEffect(()=>s.listen(u),[s,u]),C.exports.createElement(v5,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:s,future:r})}const M5=typeof window!="undefined"&&typeof window.document!="undefined"&&typeof window.document.createElement!="undefined",E5=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Oe=C.exports.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:s,state:a,target:l,to:c,preventScrollReset:u,unstable_viewTransition:d}=t,f=x5(t,_5),{basename:g}=C.exports.useContext(Lr),v,y=!1;if(typeof c=="string"&&E5.test(c)&&(v=c,M5))try{let b=new URL(window.location.href),w=c.startsWith("//")?new URL(b.protocol+c):new URL(c),_=Ap(w.pathname,g);w.origin===b.origin&&_!=null?c=_+w.search+w.hash:y=!0}catch{}let p=Qk(c,{relative:i}),m=N5(c,{replace:s,state:a,target:l,preventScrollReset:u,relative:i,unstable_viewTransition:d});function x(b){r&&r(b),b.defaultPrevented||m(b)}return C.exports.createElement("a",Ff({},f,{href:v||p,onClick:y||o?r:x,ref:n,target:l}))});var _0;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(_0||(_0={}));var S0;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(S0||(S0={}));function N5(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:s,unstable_viewTransition:a}=t===void 0?{}:t,l=Dr(),c=Xt(),u=ib(e,{relative:s});return C.exports.useCallback(d=>{if(w5(d,n)){d.preventDefault();let f=r!==void 0?r:dc(c)===dc(u);l(e,{replace:f,state:i,preventScrollReset:o,relative:s,unstable_viewTransition:a})}},[c,l,u,r,i,n,e,o,s,a])}var zp={exports:{}},me={};/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zc=60103,Jc=60106,da=60107,fa=60108,ha=60114,pa=60109,ga=60110,ma=60112,va=60113,Ip=60120,ya=60115,xa=60116,ab=60121,lb=60122,cb=60117,ub=60129,db=60131;if(typeof Symbol=="function"&&Symbol.for){var Je=Symbol.for;Zc=Je("react.element"),Jc=Je("react.portal"),da=Je("react.fragment"),fa=Je("react.strict_mode"),ha=Je("react.profiler"),pa=Je("react.provider"),ga=Je("react.context"),ma=Je("react.forward_ref"),va=Je("react.suspense"),Ip=Je("react.suspense_list"),ya=Je("react.memo"),xa=Je("react.lazy"),ab=Je("react.block"),lb=Je("react.server.block"),cb=Je("react.fundamental"),ub=Je("react.debug_trace_mode"),db=Je("react.legacy_hidden")}function an(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Zc:switch(e=e.type,e){case da:case ha:case fa:case va:case Ip:return e;default:switch(e=e&&e.$$typeof,e){case ga:case ma:case xa:case ya:case pa:return e;default:return t}}case Jc:return t}}}var T5=pa,A5=Zc,$5=ma,R5=da,L5=xa,D5=ya,z5=Jc,I5=ha,j5=fa,F5=va;me.ContextConsumer=ga;me.ContextProvider=T5;me.Element=A5;me.ForwardRef=$5;me.Fragment=R5;me.Lazy=L5;me.Memo=D5;me.Portal=z5;me.Profiler=I5;me.StrictMode=j5;me.Suspense=F5;me.isAsyncMode=function(){return!1};me.isConcurrentMode=function(){return!1};me.isContextConsumer=function(e){return an(e)===ga};me.isContextProvider=function(e){return an(e)===pa};me.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Zc};me.isForwardRef=function(e){return an(e)===ma};me.isFragment=function(e){return an(e)===da};me.isLazy=function(e){return an(e)===xa};me.isMemo=function(e){return an(e)===ya};me.isPortal=function(e){return an(e)===Jc};me.isProfiler=function(e){return an(e)===ha};me.isStrictMode=function(e){return an(e)===fa};me.isSuspense=function(e){return an(e)===va};me.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===da||e===ha||e===ub||e===fa||e===va||e===Ip||e===db||typeof e=="object"&&e!==null&&(e.$$typeof===xa||e.$$typeof===ya||e.$$typeof===pa||e.$$typeof===ga||e.$$typeof===ma||e.$$typeof===cb||e.$$typeof===ab||e[0]===lb)};me.typeOf=an;zp.exports=me;function B5(e){function t(N,T,$,F,O){for(var Q=0,D=0,de=0,le=0,fe,G,qe=0,wt=0,re,it=re=fe=0,ce=0,Qe=0,Po=0,Ze=0,$a=$.length,Oo=$a-1,qt,Y="",De="",Xu="",Ku="",Kn;ce<$a;){if(G=$.charCodeAt(ce),ce===Oo&&D+le+de+Q!==0&&(D!==0&&(G=D===47?10:47),le=de=Q=0,$a++,Oo++),D+le+de+Q===0){if(ce===Oo&&(0<Qe&&(Y=Y.replace(f,"")),0<Y.trim().length)){switch(G){case 32:case 9:case 59:case 13:case 10:break;default:Y+=$.charAt(ce)}G=59}switch(G){case 123:for(Y=Y.trim(),fe=Y.charCodeAt(0),re=1,Ze=++ce;ce<$a;){switch(G=$.charCodeAt(ce)){case 123:re++;break;case 125:re--;break;case 47:switch(G=$.charCodeAt(ce+1)){case 42:case 47:e:{for(it=ce+1;it<Oo;++it)switch($.charCodeAt(it)){case 47:if(G===42&&$.charCodeAt(it-1)===42&&ce+2!==it){ce=it+1;break e}break;case 10:if(G===47){ce=it+1;break e}}ce=it}}break;case 91:G++;case 40:G++;case 34:case 39:for(;ce++<Oo&&$.charCodeAt(ce)!==G;);}if(re===0)break;ce++}switch(re=$.substring(Ze,ce),fe===0&&(fe=(Y=Y.replace(d,"").trim()).charCodeAt(0)),fe){case 64:switch(0<Qe&&(Y=Y.replace(f,"")),G=Y.charCodeAt(1),G){case 100:case 109:case 115:case 45:Qe=T;break;default:Qe=K}if(re=t(T,Qe,re,G,O+1),Ze=re.length,0<ie&&(Qe=n(K,Y,Po),Kn=a(3,re,Qe,T,W,I,Ze,G,O,F),Y=Qe.join(""),Kn!==void 0&&(Ze=(re=Kn.trim()).length)===0&&(G=0,re="")),0<Ze)switch(G){case 115:Y=Y.replace(k,s);case 100:case 109:case 45:re=Y+"{"+re+"}";break;case 107:Y=Y.replace(x,"$1 $2"),re=Y+"{"+re+"}",re=V===1||V===2&&o("@"+re,3)?"@-webkit-"+re+"@"+re:"@"+re;break;default:re=Y+re,F===112&&(re=(De+=re,""))}else re="";break;default:re=t(T,n(T,Y,Po),re,F,O+1)}Xu+=re,re=Po=Qe=it=fe=0,Y="",G=$.charCodeAt(++ce);break;case 125:case 59:if(Y=(0<Qe?Y.replace(f,""):Y).trim(),1<(Ze=Y.length))switch(it===0&&(fe=Y.charCodeAt(0),fe===45||96<fe&&123>fe)&&(Ze=(Y=Y.replace(" ",":")).length),0<ie&&(Kn=a(1,Y,T,N,W,I,De.length,F,O,F))!==void 0&&(Ze=(Y=Kn.trim()).length)===0&&(Y="\0\0"),fe=Y.charCodeAt(0),G=Y.charCodeAt(1),fe){case 0:break;case 64:if(G===105||G===99){Ku+=Y+$.charAt(ce);break}default:Y.charCodeAt(Ze-1)!==58&&(De+=i(Y,fe,G,Y.charCodeAt(2)))}Po=Qe=it=fe=0,Y="",G=$.charCodeAt(++ce)}}switch(G){case 13:case 10:D===47?D=0:1+fe===0&&F!==107&&0<Y.length&&(Qe=1,Y+="\0"),0<ie*vt&&a(0,Y,T,N,W,I,De.length,F,O,F),I=1,W++;break;case 59:case 125:if(D+le+de+Q===0){I++;break}default:switch(I++,qt=$.charAt(ce),G){case 9:case 32:if(le+Q+D===0)switch(qe){case 44:case 58:case 9:case 32:qt="";break;default:G!==32&&(qt=" ")}break;case 0:qt="\\0";break;case 12:qt="\\f";break;case 11:qt="\\v";break;case 38:le+D+Q===0&&(Qe=Po=1,qt="\f"+qt);break;case 108:if(le+D+Q+Z===0&&0<it)switch(ce-it){case 2:qe===112&&$.charCodeAt(ce-3)===58&&(Z=qe);case 8:wt===111&&(Z=wt)}break;case 58:le+D+Q===0&&(it=ce);break;case 44:D+de+le+Q===0&&(Qe=1,qt+="\r");break;case 34:case 39:D===0&&(le=le===G?0:le===0?G:le);break;case 91:le+D+de===0&&Q++;break;case 93:le+D+de===0&&Q--;break;case 41:le+D+Q===0&&de--;break;case 40:if(le+D+Q===0){if(fe===0)switch(2*qe+3*wt){case 533:break;default:fe=1}de++}break;case 64:D+de+le+Q+it+re===0&&(re=1);break;case 42:case 47:if(!(0<le+Q+de))switch(D){case 0:switch(2*G+3*$.charCodeAt(ce+1)){case 235:D=47;break;case 220:Ze=ce,D=42}break;case 42:G===47&&qe===42&&Ze+2!==ce&&($.charCodeAt(Ze+2)===33&&(De+=$.substring(Ze,ce+1)),qt="",D=0)}}D===0&&(Y+=qt)}wt=qe,qe=G,ce++}if(Ze=De.length,0<Ze){if(Qe=T,0<ie&&(Kn=a(2,De,Qe,N,W,I,Ze,F,O,F),Kn!==void 0&&(De=Kn).length===0))return Ku+De+Xu;if(De=Qe.join(",")+"{"+De+"}",V*Z!==0){switch(V!==2||o(De,2)||(Z=0),Z){case 111:De=De.replace(w,":-moz-$1")+De;break;case 112:De=De.replace(b,"::-webkit-input-$1")+De.replace(b,"::-moz-$1")+De.replace(b,":-ms-input-$1")+De}Z=0}}return Ku+De+Xu}function n(N,T,$){var F=T.trim().split(p);T=F;var O=F.length,Q=N.length;switch(Q){case 0:case 1:var D=0;for(N=Q===0?"":N[0]+" ";D<O;++D)T[D]=r(N,T[D],$).trim();break;default:var de=D=0;for(T=[];D<O;++D)for(var le=0;le<Q;++le)T[de++]=r(N[le]+" ",F[D],$).trim()}return T}function r(N,T,$){var F=T.charCodeAt(0);switch(33>F&&(F=(T=T.trim()).charCodeAt(0)),F){case 38:return T.replace(m,"$1"+N.trim());case 58:return N.trim()+T.replace(m,"$1"+N.trim());default:if(0<1*$&&0<T.indexOf("\f"))return T.replace(m,(N.charCodeAt(0)===58?"":"$1")+N.trim())}return N+T}function i(N,T,$,F){var O=N+";",Q=2*T+3*$+4*F;if(Q===944){N=O.indexOf(":",9)+1;var D=O.substring(N,O.length-1).trim();return D=O.substring(0,N).trim()+D+";",V===1||V===2&&o(D,1)?"-webkit-"+D+D:D}if(V===0||V===2&&!o(O,1))return O;switch(Q){case 1015:return O.charCodeAt(10)===97?"-webkit-"+O+O:O;case 951:return O.charCodeAt(3)===116?"-webkit-"+O+O:O;case 963:return O.charCodeAt(5)===110?"-webkit-"+O+O:O;case 1009:if(O.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+O+O;case 978:return"-webkit-"+O+"-moz-"+O+O;case 1019:case 983:return"-webkit-"+O+"-moz-"+O+"-ms-"+O+O;case 883:if(O.charCodeAt(8)===45)return"-webkit-"+O+O;if(0<O.indexOf("image-set(",11))return O.replace(j,"$1-webkit-$2")+O;break;case 932:if(O.charCodeAt(4)===45)switch(O.charCodeAt(5)){case 103:return"-webkit-box-"+O.replace("-grow","")+"-webkit-"+O+"-ms-"+O.replace("grow","positive")+O;case 115:return"-webkit-"+O+"-ms-"+O.replace("shrink","negative")+O;case 98:return"-webkit-"+O+"-ms-"+O.replace("basis","preferred-size")+O}return"-webkit-"+O+"-ms-"+O+O;case 964:return"-webkit-"+O+"-ms-flex-"+O+O;case 1023:if(O.charCodeAt(8)!==99)break;return D=O.substring(O.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+D+"-webkit-"+O+"-ms-flex-pack"+D+O;case 1005:return v.test(O)?O.replace(g,":-webkit-")+O.replace(g,":-moz-")+O:O;case 1e3:switch(D=O.substring(13).trim(),T=D.indexOf("-")+1,D.charCodeAt(0)+D.charCodeAt(T)){case 226:D=O.replace(_,"tb");break;case 232:D=O.replace(_,"tb-rl");break;case 220:D=O.replace(_,"lr");break;default:return O}return"-webkit-"+O+"-ms-"+D+O;case 1017:if(O.indexOf("sticky",9)===-1)break;case 975:switch(T=(O=N).length-10,D=(O.charCodeAt(T)===33?O.substring(0,T):O).substring(N.indexOf(":",7)+1).trim(),Q=D.charCodeAt(0)+(D.charCodeAt(7)|0)){case 203:if(111>D.charCodeAt(8))break;case 115:O=O.replace(D,"-webkit-"+D)+";"+O;break;case 207:case 102:O=O.replace(D,"-webkit-"+(102<Q?"inline-":"")+"box")+";"+O.replace(D,"-webkit-"+D)+";"+O.replace(D,"-ms-"+D+"box")+";"+O}return O+";";case 938:if(O.charCodeAt(5)===45)switch(O.charCodeAt(6)){case 105:return D=O.replace("-items",""),"-webkit-"+O+"-webkit-box-"+D+"-ms-flex-"+D+O;case 115:return"-webkit-"+O+"-ms-flex-item-"+O.replace(M,"")+O;default:return"-webkit-"+O+"-ms-flex-line-pack"+O.replace("align-content","").replace(M,"")+O}break;case 973:case 989:if(O.charCodeAt(3)!==45||O.charCodeAt(4)===122)break;case 931:case 953:if(A.test(N)===!0)return(D=N.substring(N.indexOf(":")+1)).charCodeAt(0)===115?i(N.replace("stretch","fill-available"),T,$,F).replace(":fill-available",":stretch"):O.replace(D,"-webkit-"+D)+O.replace(D,"-moz-"+D.replace("fill-",""))+O;break;case 962:if(O="-webkit-"+O+(O.charCodeAt(5)===102?"-ms-"+O:"")+O,$+F===211&&O.charCodeAt(13)===105&&0<O.indexOf("transform",10))return O.substring(0,O.indexOf(";",27)+1).replace(y,"$1-webkit-$2")+O}return O}function o(N,T){var $=N.indexOf(T===1?":":"{"),F=N.substring(0,T!==3?$:10);return $=N.substring($+1,N.length-1),ve(T!==2?F:F.replace(E,"$1"),$,T)}function s(N,T){var $=i(T,T.charCodeAt(0),T.charCodeAt(1),T.charCodeAt(2));return $!==T+";"?$.replace(P," or ($1)").substring(4):"("+T+")"}function a(N,T,$,F,O,Q,D,de,le,fe){for(var G=0,qe=T,wt;G<ie;++G)switch(wt=q[G].call(u,N,qe,$,F,O,Q,D,de,le,fe)){case void 0:case!1:case!0:case null:break;default:qe=wt}if(qe!==T)return qe}function l(N){switch(N){case void 0:case null:ie=q.length=0;break;default:if(typeof N=="function")q[ie++]=N;else if(typeof N=="object")for(var T=0,$=N.length;T<$;++T)l(N[T]);else vt=!!N|0}return l}function c(N){return N=N.prefix,N!==void 0&&(ve=null,N?typeof N!="function"?V=1:(V=2,ve=N):V=0),c}function u(N,T){var $=N;if(33>$.charCodeAt(0)&&($=$.trim()),L=$,$=[L],0<ie){var F=a(-1,T,$,$,W,I,0,0,0,0);F!==void 0&&typeof F=="string"&&(T=F)}var O=t(K,$,T,0,0);return 0<ie&&(F=a(-2,O,$,$,W,I,O.length,0,0,0),F!==void 0&&(O=F)),L="",Z=0,I=W=1,O}var d=/^\0+/g,f=/[\0\r\f]/g,g=/: */g,v=/zoo|gra/,y=/([,: ])(transform)/g,p=/,\r+?/g,m=/([\t\r\n ])*\f?&/g,x=/@(k\w+)\s*(\S*)\s*/,b=/::(place)/g,w=/:(read-only)/g,_=/[svh]\w+-[tblr]{2}/,k=/\(\s*(.*)\s*\)/g,P=/([\s\S]*?);/g,M=/-self|flex-/g,E=/[^]*?(:[rp][el]a[\w-]+)[^]*/,A=/stretch|:\s*\w+\-(?:conte|avail)/,j=/([^-])(image-set\()/,I=1,W=1,Z=0,V=1,K=[],q=[],ie=0,ve=null,vt=0,L="";return u.use=l,u.set=c,e!==void 0&&c(e),u}var W5={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function fb(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var V5=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Bf=fb(function(e){return V5.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),hb={exports:{}},pe={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ge=typeof Symbol=="function"&&Symbol.for,jp=Ge?Symbol.for("react.element"):60103,Fp=Ge?Symbol.for("react.portal"):60106,eu=Ge?Symbol.for("react.fragment"):60107,tu=Ge?Symbol.for("react.strict_mode"):60108,nu=Ge?Symbol.for("react.profiler"):60114,ru=Ge?Symbol.for("react.provider"):60109,iu=Ge?Symbol.for("react.context"):60110,Bp=Ge?Symbol.for("react.async_mode"):60111,ou=Ge?Symbol.for("react.concurrent_mode"):60111,su=Ge?Symbol.for("react.forward_ref"):60112,au=Ge?Symbol.for("react.suspense"):60113,H5=Ge?Symbol.for("react.suspense_list"):60120,lu=Ge?Symbol.for("react.memo"):60115,cu=Ge?Symbol.for("react.lazy"):60116,U5=Ge?Symbol.for("react.block"):60121,Y5=Ge?Symbol.for("react.fundamental"):60117,X5=Ge?Symbol.for("react.responder"):60118,K5=Ge?Symbol.for("react.scope"):60119;function Dt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case jp:switch(e=e.type,e){case Bp:case ou:case eu:case nu:case tu:case au:return e;default:switch(e=e&&e.$$typeof,e){case iu:case su:case cu:case lu:case ru:return e;default:return t}}case Fp:return t}}}function pb(e){return Dt(e)===ou}pe.AsyncMode=Bp;pe.ConcurrentMode=ou;pe.ContextConsumer=iu;pe.ContextProvider=ru;pe.Element=jp;pe.ForwardRef=su;pe.Fragment=eu;pe.Lazy=cu;pe.Memo=lu;pe.Portal=Fp;pe.Profiler=nu;pe.StrictMode=tu;pe.Suspense=au;pe.isAsyncMode=function(e){return pb(e)||Dt(e)===Bp};pe.isConcurrentMode=pb;pe.isContextConsumer=function(e){return Dt(e)===iu};pe.isContextProvider=function(e){return Dt(e)===ru};pe.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===jp};pe.isForwardRef=function(e){return Dt(e)===su};pe.isFragment=function(e){return Dt(e)===eu};pe.isLazy=function(e){return Dt(e)===cu};pe.isMemo=function(e){return Dt(e)===lu};pe.isPortal=function(e){return Dt(e)===Fp};pe.isProfiler=function(e){return Dt(e)===nu};pe.isStrictMode=function(e){return Dt(e)===tu};pe.isSuspense=function(e){return Dt(e)===au};pe.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===eu||e===ou||e===nu||e===tu||e===au||e===H5||typeof e=="object"&&e!==null&&(e.$$typeof===cu||e.$$typeof===lu||e.$$typeof===ru||e.$$typeof===iu||e.$$typeof===su||e.$$typeof===Y5||e.$$typeof===X5||e.$$typeof===K5||e.$$typeof===U5)};pe.typeOf=Dt;hb.exports=pe;var Wp=hb.exports,G5={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},q5={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Q5={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},gb={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Vp={};Vp[Wp.ForwardRef]=Q5;Vp[Wp.Memo]=gb;function k0(e){return Wp.isMemo(e)?gb:Vp[e.$$typeof]||G5}var Z5=Object.defineProperty,J5=Object.getOwnPropertyNames,C0=Object.getOwnPropertySymbols,eC=Object.getOwnPropertyDescriptor,tC=Object.getPrototypeOf,P0=Object.prototype;function mb(e,t,n){if(typeof t!="string"){if(P0){var r=tC(t);r&&r!==P0&&mb(e,r,n)}var i=J5(t);C0&&(i=i.concat(C0(t)));for(var o=k0(e),s=k0(t),a=0;a<i.length;++a){var l=i[a];if(!q5[l]&&!(n&&n[l])&&!(s&&s[l])&&!(o&&o[l])){var c=eC(t,l);try{Z5(e,l,c)}catch{}}}}return e}var nC=mb;function tn(){return(tn=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var O0=function(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n},Wf=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!zp.exports.typeOf(e)},hc=Object.freeze([]),yr=Object.freeze({});function oo(e){return typeof e=="function"}function M0(e){return e.displayName||e.name||"Component"}function Hp(e){return e&&typeof e.styledComponentId=="string"}var so=typeof process!="undefined"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Up=typeof window!="undefined"&&"HTMLElement"in window,rC=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process!="undefined"&&process.env!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""?{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY:!1)),iC={};function si(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var oC=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,o=i.length,s=o;n>=s;)(s<<=1)<0&&si(16,""+n);this.groupSizes=new Uint32Array(s),this.groupSizes.set(i),this.length=s;for(var a=o;a<s;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(n+1),c=0,u=r.length;c<u;c++)this.tag.insertRule(l,r[c])&&(this.groupSizes[n]++,l++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),o=i+r;this.groupSizes[n]=0;for(var s=i;s<o;s++)this.tag.deleteRule(i)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],o=this.indexOfGroup(n),s=o+i,a=o;a<s;a++)r+=this.tag.getRule(a)+`/*!sc*/
`;return r},e}(),Pl=new Map,pc=new Map,ys=1,Ya=function(e){if(Pl.has(e))return Pl.get(e);for(;pc.has(ys);)ys++;var t=ys++;return Pl.set(e,t),pc.set(t,e),t},sC=function(e){return pc.get(e)},aC=function(e,t){t>=ys&&(ys=t+1),Pl.set(e,t),pc.set(t,e)},lC="style["+so+'][data-styled-version="5.3.11"]',cC=new RegExp("^"+so+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),uC=function(e,t,n){for(var r,i=n.split(","),o=0,s=i.length;o<s;o++)(r=i[o])&&e.registerName(t,r)},dC=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],i=0,o=n.length;i<o;i++){var s=n[i].trim();if(s){var a=s.match(cC);if(a){var l=0|parseInt(a[1],10),c=a[2];l!==0&&(aC(c,l),uC(e,c,a[3]),e.getTag().insertRules(l,r)),r.length=0}else r.push(s)}}},fC=function(){return typeof __webpack_nonce__!="undefined"?__webpack_nonce__:null},vb=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){for(var l=a.childNodes,c=l.length;c>=0;c--){var u=l[c];if(u&&u.nodeType===1&&u.hasAttribute(so))return u}}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(so,"active"),r.setAttribute("data-styled-version","5.3.11");var s=fC();return s&&r.setAttribute("nonce",s),n.insertBefore(r,o),r},hC=function(){function e(n){var r=this.element=vb(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var o=document.styleSheets,s=0,a=o.length;s<a;s++){var l=o[s];if(l.ownerNode===i)return l}si(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),pC=function(){function e(n){var r=this.element=vb(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),o=this.nodes[n];return this.element.insertBefore(i,o||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),gC=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),E0=Up,mC={isServer:!Up,useCSSOMInjection:!rC},gc=function(){function e(n,r,i){n===void 0&&(n=yr),r===void 0&&(r={}),this.options=tn({},mC,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&Up&&E0&&(E0=!1,function(o){for(var s=document.querySelectorAll(lC),a=0,l=s.length;a<l;a++){var c=s[a];c&&c.getAttribute(so)!=="active"&&(dC(o,c),c.parentNode&&c.parentNode.removeChild(c))}}(this))}e.registerId=function(n){return Ya(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(tn({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,o=r.useCSSOMInjection,s=r.target,n=i?new gC(s):o?new hC(s):new pC(s),new oC(n)));var n,r,i,o,s},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(Ya(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},t.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(Ya(n),i)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(Ya(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,o="",s=0;s<i;s++){var a=sC(s);if(a!==void 0){var l=n.names.get(a),c=r.getGroup(s);if(l&&c&&l.size){var u=so+".g"+s+'[id="'+a+'"]',d="";l!==void 0&&l.forEach(function(f){f.length>0&&(d+=f+",")}),o+=""+c+u+'{content:"'+d+`"}/*!sc*/
`}}}return o}(this)},e}(),vC=/(a)(d)/gi,N0=function(e){return String.fromCharCode(e+(e>25?39:97))};function Vf(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=N0(t%52)+n;return(N0(t%52)+n).replace(vC,"$1-$2")}var zi=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},yb=function(e){return zi(5381,e)};function xb(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(oo(n)&&!Hp(n))return!1}return!0}var yC=yb("5.3.11"),xC=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&xb(t),this.componentId=n,this.baseHash=zi(yC,n),this.baseStyle=r,gc.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))o.push(this.staticRulesId);else{var s=ai(this.rules,t,n,r).join(""),a=Vf(zi(this.baseHash,s)>>>0);if(!n.hasNameForId(i,a)){var l=r(s,"."+a,void 0,i);n.insertRules(i,a,l)}o.push(a),this.staticRulesId=a}else{for(var c=this.rules.length,u=zi(this.baseHash,r.hash),d="",f=0;f<c;f++){var g=this.rules[f];if(typeof g=="string")d+=g;else if(g){var v=ai(g,t,n,r),y=Array.isArray(v)?v.join(""):v;u=zi(u,y+f),d+=y}}if(d){var p=Vf(u>>>0);if(!n.hasNameForId(i,p)){var m=r(d,"."+p,void 0,i);n.insertRules(i,p,m)}o.push(p)}}return o.join(" ")},e}(),bC=/^\s*\/\/.*$/gm,wC=[":","[",".","#"];function _C(e){var t,n,r,i,o=e===void 0?yr:e,s=o.options,a=s===void 0?yr:s,l=o.plugins,c=l===void 0?hc:l,u=new B5(a),d=[],f=function(y){function p(m){if(m)try{y(m+"}")}catch{}}return function(m,x,b,w,_,k,P,M,E,A){switch(m){case 1:if(E===0&&x.charCodeAt(0)===64)return y(x+";"),"";break;case 2:if(M===0)return x+"/*|*/";break;case 3:switch(M){case 102:case 112:return y(b[0]+x),"";default:return x+(A===0?"/*|*/":"")}case-2:x.split("/*|*/}").forEach(p)}}}(function(y){d.push(y)}),g=function(y,p,m){return p===0&&wC.indexOf(m[n.length])!==-1||m.match(i)?y:"."+t};function v(y,p,m,x){x===void 0&&(x="&");var b=y.replace(bC,""),w=p&&m?m+" "+p+" { "+b+" }":b;return t=x,n=p,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),u(m||!p?"":p,w)}return u.use([].concat(c,[function(y,p,m){y===2&&m.length&&m[0].lastIndexOf(n)>0&&(m[0]=m[0].replace(r,g))},f,function(y){if(y===-2){var p=d;return d=[],p}}])),v.hash=c.length?c.reduce(function(y,p){return p.name||si(15),zi(y,p.name)},5381).toString():"",v}var bb=ft.createContext();bb.Consumer;var wb=ft.createContext(),SC=(wb.Consumer,new gc),Hf=_C();function _b(){return C.exports.useContext(bb)||SC}function Sb(){return C.exports.useContext(wb)||Hf}var kC=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=Hf);var s=r.name+o.hash;i.hasNameForId(r.id,s)||i.insertRules(r.id,s,o(r.rules,s,"@keyframes"))},this.toString=function(){return si(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=Hf),this.name+t.hash},e}(),CC=/([A-Z])/,PC=/([A-Z])/g,OC=/^ms-/,MC=function(e){return"-"+e.toLowerCase()};function T0(e){return CC.test(e)?e.replace(PC,MC).replace(OC,"-ms-"):e}var A0=function(e){return e==null||e===!1||e===""};function ai(e,t,n,r){if(Array.isArray(e)){for(var i,o=[],s=0,a=e.length;s<a;s+=1)(i=ai(e[s],t,n,r))!==""&&(Array.isArray(i)?o.push.apply(o,i):o.push(i));return o}if(A0(e))return"";if(Hp(e))return"."+e.styledComponentId;if(oo(e)){if(typeof(c=e)!="function"||c.prototype&&c.prototype.isReactComponent||!t)return e;var l=e(t);return ai(l,t,n,r)}var c;return e instanceof kC?n?(e.inject(n,r),e.getName(r)):e:Wf(e)?function u(d,f){var g,v,y=[];for(var p in d)d.hasOwnProperty(p)&&!A0(d[p])&&(Array.isArray(d[p])&&d[p].isCss||oo(d[p])?y.push(T0(p)+":",d[p],";"):Wf(d[p])?y.push.apply(y,u(d[p],p)):y.push(T0(p)+": "+(g=p,(v=d[p])==null||typeof v=="boolean"||v===""?"":typeof v!="number"||v===0||g in W5||g.startsWith("--")?String(v).trim():v+"px")+";"));return f?[f+" {"].concat(y,["}"]):y}(e):e.toString()}var $0=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function mt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return oo(e)||Wf(e)?$0(ai(O0(hc,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:$0(ai(O0(e,n)))}var kb=function(e,t,n){return n===void 0&&(n=yr),e.theme!==n.theme&&e.theme||t||n.theme},EC=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,NC=/(^-|-$)/g;function bd(e){return e.replace(EC,"-").replace(NC,"")}var Cb=function(e){return Vf(yb(e)>>>0)};function Xa(e){return typeof e=="string"&&!0}var Uf=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},TC=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function AC(e,t,n){var r=e[n];Uf(t)&&Uf(r)?Pb(r,t):e[n]=t}function Pb(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var i=0,o=n;i<o.length;i++){var s=o[i];if(Uf(s))for(var a in s)TC(a)&&AC(e,s[a],a)}return e}var Vs=ft.createContext();Vs.Consumer;function $C(e){var t=C.exports.useContext(Vs),n=C.exports.useMemo(function(){return function(r,i){if(!r)return si(14);if(oo(r)){var o=r(i);return o}return Array.isArray(r)||typeof r!="object"?si(8):i?tn({},i,{},r):r}(e.theme,t)},[e.theme,t]);return e.children?ft.createElement(Vs.Provider,{value:n},e.children):null}var wd={};function Ob(e,t,n){var r=Hp(e),i=!Xa(e),o=t.attrs,s=o===void 0?hc:o,a=t.componentId,l=a===void 0?function(x,b){var w=typeof x!="string"?"sc":bd(x);wd[w]=(wd[w]||0)+1;var _=w+"-"+Cb("5.3.11"+w+wd[w]);return b?b+"-"+_:_}(t.displayName,t.parentComponentId):a,c=t.displayName,u=c===void 0?function(x){return Xa(x)?"styled."+x:"Styled("+M0(x)+")"}(e):c,d=t.displayName&&t.componentId?bd(t.displayName)+"-"+t.componentId:t.componentId||l,f=r&&e.attrs?Array.prototype.concat(e.attrs,s).filter(Boolean):s,g=t.shouldForwardProp;r&&e.shouldForwardProp&&(g=t.shouldForwardProp?function(x,b,w){return e.shouldForwardProp(x,b,w)&&t.shouldForwardProp(x,b,w)}:e.shouldForwardProp);var v,y=new xC(n,d,r?e.componentStyle:void 0),p=y.isStatic&&s.length===0,m=function(x,b){return function(w,_,k,P){var M=w.attrs,E=w.componentStyle,A=w.defaultProps,j=w.foldedComponentIds,I=w.shouldForwardProp,W=w.styledComponentId,Z=w.target,V=function(F,O,Q){F===void 0&&(F=yr);var D=tn({},O,{theme:F}),de={};return Q.forEach(function(le){var fe,G,qe,wt=le;for(fe in oo(wt)&&(wt=wt(D)),wt)D[fe]=de[fe]=fe==="className"?(G=de[fe],qe=wt[fe],G&&qe?G+" "+qe:G||qe):wt[fe]}),[D,de]}(kb(_,C.exports.useContext(Vs),A)||yr,_,M),K=V[0],q=V[1],ie=function(F,O,Q,D){var de=_b(),le=Sb(),fe=O?F.generateAndInjectStyles(yr,de,le):F.generateAndInjectStyles(Q,de,le);return fe}(E,P,K),ve=k,vt=q.$as||_.$as||q.as||_.as||Z,L=Xa(vt),N=q!==_?tn({},_,{},q):_,T={};for(var $ in N)$[0]!=="$"&&$!=="as"&&($==="forwardedAs"?T.as=N[$]:(I?I($,Bf,vt):!L||Bf($))&&(T[$]=N[$]));return _.style&&q.style!==_.style&&(T.style=tn({},_.style,{},q.style)),T.className=Array.prototype.concat(j,W,ie!==W?ie:null,_.className,q.className).filter(Boolean).join(" "),T.ref=ve,C.exports.createElement(vt,T)}(v,x,b,p)};return m.displayName=u,(v=ft.forwardRef(m)).attrs=f,v.componentStyle=y,v.displayName=u,v.shouldForwardProp=g,v.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):hc,v.styledComponentId=d,v.target=r?e.target:e,v.withComponent=function(x){var b=t.componentId,w=function(k,P){if(k==null)return{};var M,E,A={},j=Object.keys(k);for(E=0;E<j.length;E++)M=j[E],P.indexOf(M)>=0||(A[M]=k[M]);return A}(t,["componentId"]),_=b&&b+"-"+(Xa(x)?x:bd(M0(x)));return Ob(x,tn({},w,{attrs:f,componentId:_}),n)},Object.defineProperty(v,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(x){this._foldedDefaultProps=r?Pb({},e.defaultProps,x):x}}),Object.defineProperty(v,"toString",{value:function(){return"."+v.styledComponentId}}),i&&nC(v,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),v}var Yf=function(e){return function t(n,r,i){if(i===void 0&&(i=yr),!zp.exports.isValidElementType(r))return si(1,String(r));var o=function(){return n(r,i,mt.apply(void 0,arguments))};return o.withConfig=function(s){return t(n,r,tn({},i,{},s))},o.attrs=function(s){return t(n,r,tn({},i,{attrs:Array.prototype.concat(i.attrs,s).filter(Boolean)}))},o}(Ob,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){Yf[e]=Yf(e)});var RC=function(){function e(n,r){this.rules=n,this.componentId=r,this.isStatic=xb(n),gc.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(n,r,i,o){var s=o(ai(this.rules,r,i,o).join(""),""),a=this.componentId+n;i.insertRules(a,a,s)},t.removeStyles=function(n,r){r.clearRules(this.componentId+n)},t.renderStyles=function(n,r,i,o){n>2&&gc.registerId(this.componentId+n),this.removeStyles(n,i),this.createStyles(n,r,i,o)},e}();function LC(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=mt.apply(void 0,[e].concat(n)),o="sc-global-"+Cb(JSON.stringify(i)),s=new RC(i,o);function a(c){var u=_b(),d=Sb(),f=C.exports.useContext(Vs),g=C.exports.useRef(u.allocateGSInstance(o)).current;return u.server&&l(g,c,u,f,d),C.exports.useLayoutEffect(function(){if(!u.server)return l(g,c,u,f,d),function(){return s.removeStyles(g,u)}},[g,c,u,f,d]),null}function l(c,u,d,f,g){if(s.isStatic)s.renderStyles(c,iC,d,g);else{var v=tn({},u,{theme:kb(u,f,a.defaultProps)});s.renderStyles(c,v,d,g)}}return ft.memo(a)}var H=Yf;const DC=LC`

html {
  scroll-behavior: smooth;
  font-size: 10px;
}

body {
  background: ${e=>e.theme.body};
  color: ${e=>e.theme.text};
}
body::-webkit-scrollbar {
  width: 5px;
}

body::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  outline: 1px solid slategrey;
}

.container {
  padding: 2rem 0.5rem 0;
  background: ${e=>e.theme.body};
  color: ${e=>e.theme.text};
}
a {
  color: ${e=>e.theme.text};
}

.app {
  display: block;
  max-width: 1400px;
  margin: 0 auto;
}

.hide {
  display: none !important;
}
@media (min-width: 768px) {
  .app {
    .main {
      padding: 0 0 55px 0;
      // padding: 0 15px 55px 75px;

      &.sidebar-open {
        // padding-left: 265px;
      }

    }

    .container {
      padding: 2rem;
      background: ${e=>e.theme.body};
      color: ${e=>e.theme.text};
    }
  }
}

@media (max-width: 767px) {
  .app {
    .main {
      // h1 {
      //   display: none;
      // }

      .hide-mb {
        display: none;
      }
    }
  }
}

@media (min-width: 768px) {
  body {
    background: ${e=>e.theme.bodyDesktop};
  }
}

@keyframes pageAnim {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`,zC={header:"#ffffff",headerDesktop:"#ffffff",body:"#ffffff",bodyDesktop:"#F7F7F8",sideBar:"#efeff1",color:"#9147ff",textColor:"#000",hover:"#0000001a",soft:"#777777",bits:"#e9e9e9",softDesktop:"#555555",border:"#efeff1",darkModeBg:"#dedede",iconColor:"#0e0e10",profit:"#0f0",loss:"#f00",lightText:"#b7b7b7"},IC={header:"#0e0e10",headerDesktop:"#18181B",body:"#000000",bodyDesktop:"#0e0e10",sideBar:"#1f1f23",color:"#9147ff",textColor:"#fcfaff",hover:"#ffffff1a",soft:"#adadb8",bits:"#333333",softDesktop:"#cdcdb8",border:"#ffffff1a",darkModeBg:"#9147ff",iconColor:"#adadb8",profit:"#0f0",loss:"#f00",lightText:"#b7b7b7"};var wo={exports:{}},jC="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",FC=jC,BC=FC;function Mb(){}function Eb(){}Eb.resetWarningCache=Mb;var WC=function(){function e(r,i,o,s,a,l){if(l!==BC){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Eb,resetWarningCache:Mb};return n.PropTypes=n,n};wo.exports=WC();var Mr=ft.createContext(null);function VC(e){e()}var Nb=VC,HC=function(t){return Nb=t},UC=function(){return Nb};function YC(){var e=UC(),t=null,n=null;return{clear:function(){t=null,n=null},notify:function(){e(function(){for(var i=t;i;)i.callback(),i=i.next})},get:function(){for(var i=[],o=t;o;)i.push(o),o=o.next;return i},subscribe:function(i){var o=!0,s=n={callback:i,next:null,prev:n};return s.prev?s.prev.next=s:t=s,function(){!o||t===null||(o=!1,s.next?s.next.prev=s.prev:n=s.prev,s.prev?s.prev.next=s.next:t=s.next)}}}}var R0={notify:function(){},get:function(){return[]}};function Tb(e,t){var n,r=R0;function i(d){return l(),r.subscribe(d)}function o(){r.notify()}function s(){u.onStateChange&&u.onStateChange()}function a(){return Boolean(n)}function l(){n||(n=t?t.addNestedSub(s):e.subscribe(s),r=YC())}function c(){n&&(n(),n=void 0,r.clear(),r=R0)}var u={addNestedSub:i,notifyNestedSubs:o,handleChangeWrapper:s,isSubscribed:a,trySubscribe:l,tryUnsubscribe:c,getListeners:function(){return r}};return u}var Xf=typeof window!="undefined"&&typeof window.document!="undefined"&&typeof window.document.createElement!="undefined"?C.exports.useLayoutEffect:C.exports.useEffect,uu={exports:{}},ba={};/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var XC=C.exports,Ab=60103;ba.Fragment=60107;if(typeof Symbol=="function"&&Symbol.for){var L0=Symbol.for;Ab=L0("react.element"),ba.Fragment=L0("react.fragment")}var KC=XC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,GC=Object.prototype.hasOwnProperty,qC={key:!0,ref:!0,__self:!0,__source:!0};function $b(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)GC.call(t,r)&&!qC.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Ab,type:e,key:o,ref:s,props:i,_owner:KC.current}}ba.jsx=$b;ba.jsxs=$b;uu.exports=ba;const h=uu.exports.jsx,S=uu.exports.jsxs,Ve=uu.exports.Fragment;function QC(e){var t=e.store,n=e.context,r=e.children,i=C.exports.useMemo(function(){var a=Tb(t);return{store:t,subscription:a}},[t]),o=C.exports.useMemo(function(){return t.getState()},[t]);Xf(function(){var a=i.subscription;return a.onStateChange=a.notifyNestedSubs,a.trySubscribe(),o!==t.getState()&&a.notifyNestedSubs(),function(){a.tryUnsubscribe(),a.onStateChange=null}},[i,o]);var s=n||Mr;return h(s.Provider,{value:i,children:r})}function ae(){return ae=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ae.apply(null,arguments)}function Yn(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.includes(r))continue;n[r]=e[r]}return n}function Rb(){var e=C.exports.useContext(Mr);return e}function Lb(e){e===void 0&&(e=Mr);var t=e===Mr?Rb:function(){return C.exports.useContext(e)};return function(){var r=t(),i=r.store;return i}}var ZC=Lb();function JC(e){e===void 0&&(e=Mr);var t=e===Mr?ZC:Lb(e);return function(){var r=t();return r.dispatch}}var Yp=JC(),e4=function(t,n){return t===n};function t4(e,t,n,r){var i=C.exports.useReducer(function(v){return v+1},0),o=i[1],s=C.exports.useMemo(function(){return Tb(n,r)},[n,r]),a=C.exports.useRef(),l=C.exports.useRef(),c=C.exports.useRef(),u=C.exports.useRef(),d=n.getState(),f;try{if(e!==l.current||d!==c.current||a.current){var g=e(d);u.current===void 0||!t(g,u.current)?f=g:f=u.current}else f=u.current}catch(v){throw a.current&&(v.message+=`
The error may be correlated with this previous error:
`+a.current.stack+`

`),v}return Xf(function(){l.current=e,c.current=d,u.current=f,a.current=void 0}),Xf(function(){function v(){try{var y=n.getState();if(y===c.current)return;var p=l.current(y);if(t(p,u.current))return;u.current=p,c.current=y}catch(m){a.current=m}o()}return s.onStateChange=v,s.trySubscribe(),v(),function(){return s.tryUnsubscribe()}},[n,s]),f}function n4(e){e===void 0&&(e=Mr);var t=e===Mr?Rb:function(){return C.exports.useContext(e)};return function(r,i){i===void 0&&(i=e4);var o=t(),s=o.store,a=o.subscription,l=t4(r,i,s,a);return C.exports.useDebugValue(l),l}}var bt=n4();HC(Dc.exports.unstable_batchedUpdates);const r4=H.header`
  display: none;
  position: fixed;
  top: 0px;
  z-index: 20;
  max-width: 1400px;
  width: 100%;

  .header-box {
    position: relative;
    width: 100%;
    display: block;
    height: 50px;
    background-color: ${e=>e.theme.headerDesktop};
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
    z-index: 10;

    header {
      background-color: ${e=>e.theme.headerDesktop};
      color: ${e=>e.theme.textColor};
      max-width: 1400px;
      width: 100%;
      display: flex;
      align-items: center;
      height: 100%;
      justify-content: space-between;

      .left {
        display: block;
        height: 100%;

        ul {
          display: flex;
          height: 100%;

          li {
            // width: 100%;
            height: 100%;
            display: block;
            margin: 0 15px;
            cursor: pointer;
            font-size: 15px;
            font-weight: 500;

            .link {
              color: ${e=>e.theme.textColor};
            }

            .item {
              height: 100%;
              display: flex;
              align-items: center;
              justify-content: center;
              transition: 0.3s;

              .logo {
                font-size: 30px;
                display: flex;
                align-items: center;
                justify-content: center;
                color: ${e=>e.theme.color};
                transition: 0.3s;
                fill: #fff;
                stroke: #fff;
                position: relative;
                z-index: 4;
                overflow: hidden;

                img {
                  height: 4.5rem;
                }
                .logo-bg {
                  z-index: -1;
                  width: 19px;
                  height: 20px;
                  position: absolute;
                  top: 1px;
                  background-color: #fff;
                  border-bottom-right-radius: 8px;
                }
              }

              .item-icon {
                width: 26px;
                height: 26px;
                padding: 6px;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                transition: 0.3s;
                border-radius: 5px;

                &:hover {
                  background-color: ${e=>e.theme.hover};
                }
              }
            }

            &:hover {
              .item {
                .logo {
                  transform: translate(2px, -2px);
                }
              }
              .link {
                color: ${e=>e.theme.color};
              }
            }
          }
          .active {
            border-bottom: 2px solid ${e=>e.theme.color};

            .link {
              color: ${e=>e.theme.color};
            }
          }
        }
      }

      .bottom {
        // flex: 1;

        
      }

      .right {
        display: flex;
        align-items: center;

        .search-bar {
          max-width: 400px;
          width: 100%;
          height: 35px;
          background-color: ${e=>e.theme.soft}31;
          border-radius: 5px;
          overflow: hidden;
          display: flex;
          align-items: center;
          margin: 0 auto;

          input {
            flex: 1;
            background-color: transparent;
            height: 100%;
            padding: 0 10px;
            font-size: 15px;
            color: ${e=>e.theme.textColor};
            transition: 0.2s;
            border: 2px solid transparent;
            border-top-left-radius: 5px;
            border-bottom-left-radius: 5px;

            &:focus {
              background-color: ${e=>e.theme.headerDesktop};
              border: 2px solid ${e=>e.theme.color};
            }
          }

          .search-icon {
            width: 40px;
            height: 100%;
            background-color: ${e=>e.theme.border};
            font-size: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
          }
        }
        .right-icons {
          display: block;

          ul {
            display: flex;
            align-items: center;

            li {
              width: 30px;
              height: 30px;
              font-size: 18px;
              display: flex;
              align-items: center;
              justify-content: center;
              cursor: pointer;
              transition: 0.3s;
              border-radius: 5px;
              margin: 0 3px;

              &.bits {
                span {
                  display: none;
                  font-size: 13px;
                  font-weight: 500;
                  margin-left: 5px;
                }

                &:hover {
                  background-color: ${e=>e.theme.hover};
                }
              }

              &:hover {
                background-color: ${e=>e.theme.hover};
              }
            }
          }
        }

        .profile-desktop {
          margin: 0 20px 0 10px;
        }
      }
    }
  }

  @media (min-width: 768px) {
    display: block;
  }

  @media (min-width: 1200px) {
    .header-box header {
      .right .right-icons ul li {
        font-size: 21px;
        margin: 0 8px;
        &.bits {
          width: 95px;
          font-size: 17px;
          background-color: ${e=>e.theme.bits};

          span {
            display: block;
            font-size: 14px;
          }
        }
      }
    }
  }

  @media (min-width: 1440px) {
    .header-box header {
      .left {
        ul li {
          font-size: 18px;

          .item .item-icon {
            width: 28px;
            height: 28px;
          }
        }
      }
    }
  }
`;var Db={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},D0=ft.createContext&&ft.createContext(Db),xr=globalThis&&globalThis.__assign||function(){return xr=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},xr.apply(this,arguments)},i4=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function zb(e){return e&&e.map(function(t,n){return ft.createElement(t.tag,xr({key:n},t.attr),zb(t.child))})}function ee(e){return function(t){return ft.createElement(o4,xr({attr:xr({},e.attr)},t),zb(e.child))}}function o4(e){var t=function(n){var r=e.attr,i=e.size,o=e.title,s=i4(e,["attr","size","title"]),a=i||n.size||"1em",l;return n.className&&(l=n.className),e.className&&(l=(l?l+" ":"")+e.className),ft.createElement("svg",xr({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,s,{className:l,style:xr(xr({color:e.color||n.color},n.style),e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),o&&ft.createElement("title",null,o),e.children)};return D0!==void 0?ft.createElement(D0.Consumer,null,function(n){return t(n)}):t(Db)}function s4(e){return ee({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M4.5 12a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-1zm3 0a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1zm3 0a.5.5 0 0 1-.5-.5v-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5h-1z"}},{tag:"path",attr:{d:"M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"}}]})(e)}function Xp(e){return ee({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"}}]})(e)}function Kp(e){return ee({tag:"svg",attr:{viewBox:"0 0 192 512"},child:[{tag:"path",attr:{d:"M96 184c39.8 0 72 32.2 72 72s-32.2 72-72 72-72-32.2-72-72 32.2-72 72-72zM24 80c0 39.8 32.2 72 72 72s72-32.2 72-72S135.8 8 96 8 24 40.2 24 80zm0 352c0 39.8 32.2 72 72 72s72-32.2 72-72-32.2-72-72-72-72 32.2-72 72z"}}]})(e)}function a4(e){return ee({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M4 6h2v12H4zm4 7h8.586l-4.293 4.293 1.414 1.414L20.414 12l-6.707-6.707-1.414 1.414L16.586 11H8z"}}]})(e)}function Ib(e){return ee({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"}}]})(e)}function l4(e){return ee({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412l7.332 7.332c.17.299.498.492.875.492a.99.99 0 0 0 .792-.409l7.415-7.415c2.354-2.354 2.354-6.049-.002-8.416a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595zm6.791 1.61c1.563 1.571 1.564 4.025.002 5.588L12 18.586l-6.793-6.793c-1.562-1.563-1.561-4.017-.002-5.584.76-.756 1.754-1.172 2.799-1.172s2.035.416 2.789 1.17l.5.5a.999.999 0 0 0 1.414 0l.5-.5c1.512-1.509 4.074-1.505 5.584-.002z"}}]})(e)}function jb(e){return ee({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M11.999 1.993C6.486 1.994 2 6.48 1.999 11.994c0 5.514 4.486 10 10.001 10 5.514-.001 10-4.487 10-10 0-5.514-4.486-10-10.001-10.001zM12 19.994c-4.412 0-8.001-3.589-8.001-8 .001-4.411 3.59-8 8-8.001C16.411 3.994 20 7.583 20 11.994c0 4.41-3.589 7.999-8 8z"}},{tag:"path",attr:{d:"m12.012 7.989-4.005 4.005 4.005 4.004v-3.004h3.994v-2h-3.994z"}}]})(e)}function Kf(e){return ee({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M18.464 2.114a.998.998 0 0 0-1.033.063l-13 9a1.003 1.003 0 0 0 0 1.645l13 9A1 1 0 0 0 19 21V3a1 1 0 0 0-.536-.886zM17 19.091 6.757 12 17 4.909v14.182z"}}]})(e)}function c4(e){return ee({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M19 2H5c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h3.586L12 21.414 15.414 18H19c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 14h-4.414L12 18.586 9.414 16H5V4h14v12z"}}]})(e)}function Gp(e){return ee({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"}}]})(e)}function mc(e){return ee({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"}}]})(e)}const u4=H.div`
  .profile-box {
    cursor: pointer;
    position: relative;

    .profile {
      width: 30px;
      height: 30px;
      border-radius: 999px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      background-color: #9147ff;
      font-size: 22px;
    }

    .profile-menu {
      display: none;
      position: absolute;
      width: 200px;
      background-color: ${e=>e.theme.header};
      color: ${e=>e.theme.textColor};
      top: 35px;
      right: 0px;
      border-radius: 10px;
      box-shadow: 0 0 3px 2px rgba(0, 0, 0, 0.1);
      z-index: 10;
      padding: 10px;
      animation: pageAnim 0.3s;

      .menu-box {
        width: 100%;
        font-size: 1.8rem;

        hr {
          background-color: ${e=>e.theme.border};
          height: 1px;
          margin: 10px 0;
        }

        .profile-info {
          display: flex;
          align-items: center;

          .pp {
            width: 40px;
            height: 40px;
            border-radius: 999px;
            background-color: #9147ff;
            color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 30px;
          }

          .info {
            display: block;
            padding: 10px;
            font-size: 14px;

            .username {
              font-weight: 600;
              padding: 3px 0;
            }

            .status {
              display: flex;
              align-items: center;
              color: ${e=>e.theme.soft};

              .status-icon {
                font-size: 7px;
              }
              .status-icon.online {
                color: limegreen;
              }

              span {
                font-size: 13px;
                margin-left: 5px;
              }
            }
          }
        }

        .status-button {
          width: 100%;
          margin: 20px 0;
          padding: 0 5px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 14px;
        }

        .menu-list {
          display: block;

          ul {
            display: block;

            li {
              width: 100%;
              padding: 8px 5px;
              transition: 0.3s;
              border-radius: 5px;
              display: flex;
              align-items: center;
              justify-content: space-between;

              .item {
                display: flex;
                align-items: center;
                font-size: 18px;

                span {
                  margin-left: 8px;
                  font-size: 13px;
                }
              }

              &:hover {
                background-color: ${e=>e.theme.border};
              }
            }
          }
        }
      }
    }
    // Show the menu when you click the profile
    .show-profile-menu {
      display: block;
    }
  }
`;function d4(e){return ee({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"}}]})(e)}function f4(e){return ee({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 2H3v16h5v4l4-4h5l4-4V2zM11 11V7M16 11V7"}}]})(e)}function h4(e){return ee({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}},{tag:"circle",attr:{cx:"8.5",cy:"7",r:"4"}},{tag:"line",attr:{x1:"23",y1:"11",x2:"17",y2:"11"}}]})(e)}function p4(e){return ee({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}},{tag:"circle",attr:{cx:"9",cy:"7",r:"4"}},{tag:"path",attr:{d:"M23 21v-2a4 4 0 0 0-3-3.87"}},{tag:"path",attr:{d:"M16 3.13a4 4 0 0 1 0 7.75"}}]})(e)}function _d(e){return ee({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z"}}]})(e)}function g4(e){return ee({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z"}}]})(e)}function m4(e){return ee({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95a15.65 15.65 0 00-1.38-3.56A8.03 8.03 0 0118.92 8zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56A7.987 7.987 0 015.08 16zm2.95-8H5.08a7.987 7.987 0 014.33-3.56A15.65 15.65 0 008.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 01-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"}}]})(e)}function Fb(e){return ee({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"}}]})(e)}function v4(e){return ee({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z"}}]})(e)}function y4(e){return ee({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M17 8l-1.41 1.41L17.17 11H9v2h8.17l-1.58 1.58L17 16l4-4-4-4zM5 5h7V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h7v-2H5V5z"}}]})(e)}function x4(e){return ee({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M15 8v8H5V8h10m1-2H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4V7c0-.55-.45-1-1-1z"}}]})(e)}function Bb(e){return ee({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M9.37 5.51A7.35 7.35 0 009.1 7.5c0 4.08 3.32 7.4 7.4 7.4.68 0 1.35-.09 1.99-.27A7.014 7.014 0 0112 19c-3.86 0-7-3.14-7-7 0-2.93 1.81-5.45 4.37-6.49zM12 3a9 9 0 109 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 01-4.4 2.26 5.403 5.403 0 01-3.14-9.8c-.44-.06-.9-.1-1.36-.1z"}}]})(e)}function b4(e){return ee({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M13.1714 12.0007L8.22168 7.05093L9.63589 5.63672L15.9999 12.0007L9.63589 18.3646L8.22168 16.9504L13.1714 12.0007Z"}}]})(e)}function w4(e){return ee({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M21 19.9997C21 20.552 20.5523 20.9997 20 20.9997H4C3.44772 20.9997 3 20.552 3 19.9997V9.48882C3 9.18023 3.14247 8.88893 3.38606 8.69947L11.3861 2.47725C11.7472 2.19639 12.2528 2.19639 12.6139 2.47725L20.6139 8.69947C20.8575 8.88893 21 9.18023 21 9.48882V19.9997ZM19 18.9997V9.97791L12 4.53346L5 9.97791V18.9997H19ZM7 14.9997H17V16.9997H7V14.9997Z"}}]})(e)}function _4(e){return ee({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M5 2H19C19.5523 2 20 2.44772 20 3V22.1433C20 22.4194 19.7761 22.6434 19.5 22.6434C19.4061 22.6434 19.314 22.6168 19.2344 22.5669L12 18.0313L4.76559 22.5669C4.53163 22.7136 4.22306 22.6429 4.07637 22.4089C4.02647 22.3293 4 22.2373 4 22.1433V3C4 2.44772 4.44772 2 5 2ZM18 4H6V19.4324L12 15.6707L18 19.4324V4Z"}}]})(e)}function S4(e){return ee({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"}}]})(e)}function k4(e){return ee({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M4.41085 14.5259L7.81249 11.1243L10.6409 13.9527L13.7978 10.7958L12.0049 9.00293H17.0049V14.0029L15.212 12.21L10.6409 16.7811L7.81249 13.9527L5.33834 16.4268C6.77158 18.5823 9.22233 20.0029 12.0049 20.0029C16.4232 20.0029 20.0049 16.4212 20.0049 12.0029C20.0049 7.58465 16.4232 4.00293 12.0049 4.00293C7.5866 4.00293 4.00488 7.58465 4.00488 12.0029C4.00488 12.8845 4.14747 13.7327 4.41085 14.5259ZM2.87288 16.0841L2.86275 16.074L2.86662 16.0701C2.31276 14.8276 2.00488 13.4512 2.00488 12.0029C2.00488 6.48008 6.48204 2.00293 12.0049 2.00293C17.5277 2.00293 22.0049 6.48008 22.0049 12.0029C22.0049 17.5258 17.5277 22.0029 12.0049 22.0029C7.93574 22.0029 4.43426 19.5725 2.87288 16.0841Z"}}]})(e)}function C4(e){return ee({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853Z"}}]})(e)}function P4(e){return ee({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M4 18H6V20H18V4H6V6H4V3C4 2.44772 4.44772 2 5 2H19C19.5523 2 20 2.44772 20 3V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V18ZM6 11H13V13H6V16L1 12L6 8V11Z"}}]})(e)}function Gf(e){return ee({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M8.68735 4.00008L11.294 1.39348C11.6845 1.00295 12.3176 1.00295 12.7082 1.39348L15.3148 4.00008H19.0011C19.5533 4.00008 20.0011 4.4478 20.0011 5.00008V8.68637L22.6077 11.293C22.9982 11.6835 22.9982 12.3167 22.6077 12.7072L20.0011 15.3138V19.0001C20.0011 19.5524 19.5533 20.0001 19.0011 20.0001H15.3148L12.7082 22.6067C12.3176 22.9972 11.6845 22.9972 11.294 22.6067L8.68735 20.0001H5.00106C4.44877 20.0001 4.00106 19.5524 4.00106 19.0001V15.3138L1.39446 12.7072C1.00393 12.3167 1.00393 11.6835 1.39446 11.293L4.00106 8.68637V5.00008C4.00106 4.4478 4.44877 4.00008 5.00106 4.00008H8.68735ZM6.00106 6.00008V9.5148L3.51578 12.0001L6.00106 14.4854V18.0001H9.51578L12.0011 20.4854L14.4863 18.0001H18.0011V14.4854L20.4863 12.0001L18.0011 9.5148V6.00008H14.4863L12.0011 3.5148L9.51578 6.00008H6.00106ZM12.0011 16.0001C9.79192 16.0001 8.00106 14.2092 8.00106 12.0001C8.00106 9.79094 9.79192 8.00008 12.0011 8.00008C14.2102 8.00008 16.0011 9.79094 16.0011 12.0001C16.0011 14.2092 14.2102 16.0001 12.0011 16.0001ZM12.0011 14.0001C13.1056 14.0001 14.0011 13.1047 14.0011 12.0001C14.0011 10.8955 13.1056 10.0001 12.0011 10.0001C10.8965 10.0001 10.0011 10.8955 10.0011 12.0001C10.0011 13.1047 10.8965 14.0001 12.0011 14.0001Z"}}]})(e)}function O4(e){return ee({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M3.5 2h-1v5h1V2zm6.1 5H6.4L6 6.45v-1L6.4 5h3.2l.4.5v1l-.4.5zm-5 3H1.4L1 9.5v-1l.4-.5h3.2l.4.5v1l-.4.5zm3.9-8h-1v2h1V2zm-1 6h1v6h-1V8zm-4 3h-1v3h1v-3zm7.9 0h3.19l.4-.5v-.95l-.4-.5H11.4l-.4.5v.95l.4.5zm2.1-9h-1v6h1V2zm-1 10h1v2h-1v-2z"}}]})(e)}const M4=H.div`
  .button-box {
    width: 36px;
    height: 18px;
    border: 2px solid ${e=>e.theme.textColor};
    background-color: ${e=>e.theme.header};
    border-radius: 999px;
    position: relative;
    display: flex;
    align-items: center;

    .ball {
      position: absolute;
      left: 2px;
      background-color: ${e=>e.theme.textColor};
      width: 12px;
      height: 12px;
      border-radius: 999px;
      transition: 0.3s cubic-bezier(0.24, 0.01, 0.77, 1.42);
    }
  }
  .button-true {
    border: 2px solid ${e=>e.theme.color};

    .ball {
      transform: translateX(16px);
      background-color: ${e=>e.theme.color};
    }
  }
`;function Jt(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+e+(n.length?" "+n.map(function(i){return"'"+i+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function Er(e){return!!e&&!!e[Pe]}function Wn(e){var t;return!!e&&(function(n){if(!n||typeof n!="object")return!1;var r=Object.getPrototypeOf(n);if(r===null)return!0;var i=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return i===Object||typeof i=="function"&&Function.toString.call(i)===z4}(e)||Array.isArray(e)||!!e[V0]||!!(!((t=e.constructor)===null||t===void 0)&&t[V0])||qp(e)||Qp(e))}function li(e,t,n){n===void 0&&(n=!1),_o(e)===0?(n?Object.keys:Gi)(e).forEach(function(r){n&&typeof r=="symbol"||t(r,e[r],e)}):e.forEach(function(r,i){return t(i,r,e)})}function _o(e){var t=e[Pe];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:qp(e)?2:Qp(e)?3:0}function Ki(e,t){return _o(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function E4(e,t){return _o(e)===2?e.get(t):e[t]}function Wb(e,t,n){var r=_o(e);r===2?e.set(t,n):r===3?e.add(n):e[t]=n}function Vb(e,t){return e===t?e!==0||1/e==1/t:e!=e&&t!=t}function qp(e){return L4&&e instanceof Map}function Qp(e){return D4&&e instanceof Set}function Hr(e){return e.o||e.t}function Zp(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=Ub(e);delete t[Pe];for(var n=Gi(t),r=0;r<n.length;r++){var i=n[r],o=t[i];o.writable===!1&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(t[i]={configurable:!0,writable:!0,enumerable:o.enumerable,value:e[i]})}return Object.create(Object.getPrototypeOf(e),t)}function Jp(e,t){return t===void 0&&(t=!1),eg(e)||Er(e)||!Wn(e)||(_o(e)>1&&(e.set=e.add=e.clear=e.delete=N4),Object.freeze(e),t&&li(e,function(n,r){return Jp(r,!0)},!0)),e}function N4(){Jt(2)}function eg(e){return e==null||typeof e!="object"||Object.isFrozen(e)}function wn(e){var t=Jf[e];return t||Jt(18,e),t}function T4(e,t){Jf[e]||(Jf[e]=t)}function qf(){return Hs}function Sd(e,t){t&&(wn("Patches"),e.u=[],e.s=[],e.v=t)}function vc(e){Qf(e),e.p.forEach(A4),e.p=null}function Qf(e){e===Hs&&(Hs=e.l)}function z0(e){return Hs={p:[],l:Hs,h:e,m:!0,_:0}}function A4(e){var t=e[Pe];t.i===0||t.i===1?t.j():t.g=!0}function kd(e,t){t._=t.p.length;var n=t.p[0],r=e!==void 0&&e!==n;return t.h.O||wn("ES5").S(t,e,r),r?(n[Pe].P&&(vc(t),Jt(4)),Wn(e)&&(e=yc(t,e),t.l||xc(t,e)),t.u&&wn("Patches").M(n[Pe].t,e,t.u,t.s)):e=yc(t,n,[]),vc(t),t.u&&t.v(t.u,t.s),e!==Hb?e:void 0}function yc(e,t,n){if(eg(t))return t;var r=t[Pe];if(!r)return li(t,function(a,l){return I0(e,r,t,a,l,n)},!0),t;if(r.A!==e)return t;if(!r.P)return xc(e,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var i=r.i===4||r.i===5?r.o=Zp(r.k):r.o,o=i,s=!1;r.i===3&&(o=new Set(i),i.clear(),s=!0),li(o,function(a,l){return I0(e,r,i,a,l,n,s)}),xc(e,i,!1),n&&e.u&&wn("Patches").N(r,n,e.u,e.s)}return r.o}function I0(e,t,n,r,i,o,s){if(Er(i)){var a=yc(e,i,o&&t&&t.i!==3&&!Ki(t.R,r)?o.concat(r):void 0);if(Wb(n,r,a),!Er(a))return;e.m=!1}else s&&n.add(i);if(Wn(i)&&!eg(i)){if(!e.h.D&&e._<1)return;yc(e,i),t&&t.A.l||xc(e,i)}}function xc(e,t,n){n===void 0&&(n=!1),!e.l&&e.h.D&&e.m&&Jp(t,n)}function Cd(e,t){var n=e[Pe];return(n?Hr(n):e)[t]}function j0(e,t){if(t in e)for(var n=Object.getPrototypeOf(e);n;){var r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=Object.getPrototypeOf(n)}}function Zn(e){e.P||(e.P=!0,e.l&&Zn(e.l))}function Pd(e){e.o||(e.o=Zp(e.t))}function Zf(e,t,n){var r=qp(t)?wn("MapSet").F(t,n):Qp(t)?wn("MapSet").T(t,n):e.O?function(i,o){var s=Array.isArray(i),a={i:s?1:0,A:o?o.A:qf(),P:!1,I:!1,R:{},l:o,t:i,k:null,o:null,j:null,C:!1},l=a,c=Us;s&&(l=[a],c=Jo);var u=Proxy.revocable(l,c),d=u.revoke,f=u.proxy;return a.k=f,a.j=d,f}(t,n):wn("ES5").J(t,n);return(n?n.A:qf()).p.push(r),r}function $4(e){return Er(e)||Jt(22,e),function t(n){if(!Wn(n))return n;var r,i=n[Pe],o=_o(n);if(i){if(!i.P&&(i.i<4||!wn("ES5").K(i)))return i.t;i.I=!0,r=F0(n,o),i.I=!1}else r=F0(n,o);return li(r,function(s,a){i&&E4(i.t,s)===a||Wb(r,s,t(a))}),o===3?new Set(r):r}(e)}function F0(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return Zp(e)}function R4(){function e(o,s){var a=i[o];return a?a.enumerable=s:i[o]=a={configurable:!0,enumerable:s,get:function(){var l=this[Pe];return Us.get(l,o)},set:function(l){var c=this[Pe];Us.set(c,o,l)}},a}function t(o){for(var s=o.length-1;s>=0;s--){var a=o[s][Pe];if(!a.P)switch(a.i){case 5:r(a)&&Zn(a);break;case 4:n(a)&&Zn(a)}}}function n(o){for(var s=o.t,a=o.k,l=Gi(a),c=l.length-1;c>=0;c--){var u=l[c];if(u!==Pe){var d=s[u];if(d===void 0&&!Ki(s,u))return!0;var f=a[u],g=f&&f[Pe];if(g?g.t!==d:!Vb(f,d))return!0}}var v=!!s[Pe];return l.length!==Gi(s).length+(v?0:1)}function r(o){var s=o.k;if(s.length!==o.t.length)return!0;var a=Object.getOwnPropertyDescriptor(s,s.length-1);if(a&&!a.get)return!0;for(var l=0;l<s.length;l++)if(!s.hasOwnProperty(l))return!0;return!1}var i={};T4("ES5",{J:function(o,s){var a=Array.isArray(o),l=function(u,d){if(u){for(var f=Array(d.length),g=0;g<d.length;g++)Object.defineProperty(f,""+g,e(g,!0));return f}var v=Ub(d);delete v[Pe];for(var y=Gi(v),p=0;p<y.length;p++){var m=y[p];v[m]=e(m,u||!!v[m].enumerable)}return Object.create(Object.getPrototypeOf(d),v)}(a,o),c={i:a?5:4,A:s?s.A:qf(),P:!1,I:!1,R:{},l:s,t:o,k:l,o:null,g:!1,C:!1};return Object.defineProperty(l,Pe,{value:c,writable:!0}),l},S:function(o,s,a){a?Er(s)&&s[Pe].A===o&&t(o.p):(o.u&&function l(c){if(c&&typeof c=="object"){var u=c[Pe];if(u){var d=u.t,f=u.k,g=u.R,v=u.i;if(v===4)li(f,function(b){b!==Pe&&(d[b]!==void 0||Ki(d,b)?g[b]||l(f[b]):(g[b]=!0,Zn(u)))}),li(d,function(b){f[b]!==void 0||Ki(f,b)||(g[b]=!1,Zn(u))});else if(v===5){if(r(u)&&(Zn(u),g.length=!0),f.length<d.length)for(var y=f.length;y<d.length;y++)g[y]=!1;else for(var p=d.length;p<f.length;p++)g[p]=!0;for(var m=Math.min(f.length,d.length),x=0;x<m;x++)f.hasOwnProperty(x)||(g[x]=!0),g[x]===void 0&&l(f[x])}}}}(o.p[0]),t(o.p))},K:function(o){return o.i===4?n(o):r(o)}})}var B0,Hs,tg=typeof Symbol!="undefined"&&typeof Symbol("x")=="symbol",L4=typeof Map!="undefined",D4=typeof Set!="undefined",W0=typeof Proxy!="undefined"&&Proxy.revocable!==void 0&&typeof Reflect!="undefined",Hb=tg?Symbol.for("immer-nothing"):((B0={})["immer-nothing"]=!0,B0),V0=tg?Symbol.for("immer-draftable"):"__$immer_draftable",Pe=tg?Symbol.for("immer-state"):"__$immer_state",z4=""+Object.prototype.constructor,Gi=typeof Reflect!="undefined"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,Ub=Object.getOwnPropertyDescriptors||function(e){var t={};return Gi(e).forEach(function(n){t[n]=Object.getOwnPropertyDescriptor(e,n)}),t},Jf={},Us={get:function(e,t){if(t===Pe)return e;var n=Hr(e);if(!Ki(n,t))return function(i,o,s){var a,l=j0(o,s);return l?"value"in l?l.value:(a=l.get)===null||a===void 0?void 0:a.call(i.k):void 0}(e,n,t);var r=n[t];return e.I||!Wn(r)?r:r===Cd(e.t,t)?(Pd(e),e.o[t]=Zf(e.A.h,r,e)):r},has:function(e,t){return t in Hr(e)},ownKeys:function(e){return Reflect.ownKeys(Hr(e))},set:function(e,t,n){var r=j0(Hr(e),t);if(r!=null&&r.set)return r.set.call(e.k,n),!0;if(!e.P){var i=Cd(Hr(e),t),o=i==null?void 0:i[Pe];if(o&&o.t===n)return e.o[t]=n,e.R[t]=!1,!0;if(Vb(n,i)&&(n!==void 0||Ki(e.t,t)))return!0;Pd(e),Zn(e)}return e.o[t]===n&&(n!==void 0||t in e.o)||Number.isNaN(n)&&Number.isNaN(e.o[t])||(e.o[t]=n,e.R[t]=!0),!0},deleteProperty:function(e,t){return Cd(e.t,t)!==void 0||t in e.t?(e.R[t]=!1,Pd(e),Zn(e)):delete e.R[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var n=Hr(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{writable:!0,configurable:e.i!==1||t!=="length",enumerable:r.enumerable,value:n[t]}},defineProperty:function(){Jt(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){Jt(12)}},Jo={};li(Us,function(e,t){Jo[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}}),Jo.deleteProperty=function(e,t){return Jo.set.call(this,e,t,void 0)},Jo.set=function(e,t,n){return Us.set.call(this,e[0],t,n,e[0])};var I4=function(){function e(n){var r=this;this.O=W0,this.D=!0,this.produce=function(i,o,s){if(typeof i=="function"&&typeof o!="function"){var a=o;o=i;var l=r;return function(y){var p=this;y===void 0&&(y=a);for(var m=arguments.length,x=Array(m>1?m-1:0),b=1;b<m;b++)x[b-1]=arguments[b];return l.produce(y,function(w){var _;return(_=o).call.apply(_,[p,w].concat(x))})}}var c;if(typeof o!="function"&&Jt(6),s!==void 0&&typeof s!="function"&&Jt(7),Wn(i)){var u=z0(r),d=Zf(r,i,void 0),f=!0;try{c=o(d),f=!1}finally{f?vc(u):Qf(u)}return typeof Promise!="undefined"&&c instanceof Promise?c.then(function(y){return Sd(u,s),kd(y,u)},function(y){throw vc(u),y}):(Sd(u,s),kd(c,u))}if(!i||typeof i!="object"){if((c=o(i))===void 0&&(c=i),c===Hb&&(c=void 0),r.D&&Jp(c,!0),s){var g=[],v=[];wn("Patches").M(i,c,g,v),s(g,v)}return c}Jt(21,i)},this.produceWithPatches=function(i,o){if(typeof i=="function")return function(c){for(var u=arguments.length,d=Array(u>1?u-1:0),f=1;f<u;f++)d[f-1]=arguments[f];return r.produceWithPatches(c,function(g){return i.apply(void 0,[g].concat(d))})};var s,a,l=r.produce(i,o,function(c,u){s=c,a=u});return typeof Promise!="undefined"&&l instanceof Promise?l.then(function(c){return[c,s,a]}):[l,s,a]},typeof(n==null?void 0:n.useProxies)=="boolean"&&this.setUseProxies(n.useProxies),typeof(n==null?void 0:n.autoFreeze)=="boolean"&&this.setAutoFreeze(n.autoFreeze)}var t=e.prototype;return t.createDraft=function(n){Wn(n)||Jt(8),Er(n)&&(n=$4(n));var r=z0(this),i=Zf(this,n,void 0);return i[Pe].C=!0,Qf(r),i},t.finishDraft=function(n,r){var i=n&&n[Pe],o=i.A;return Sd(o,r),kd(void 0,o)},t.setAutoFreeze=function(n){this.D=n},t.setUseProxies=function(n){n&&!W0&&Jt(20),this.O=n},t.applyPatches=function(n,r){var i;for(i=r.length-1;i>=0;i--){var o=r[i];if(o.path.length===0&&o.op==="replace"){n=o.value;break}}i>-1&&(r=r.slice(i+1));var s=wn("Patches").$;return Er(n)?s(n,r):this.produce(n,function(a){return s(a,r)})},e}(),Rt=new I4,Yb=Rt.produce;Rt.produceWithPatches.bind(Rt);Rt.setAutoFreeze.bind(Rt);Rt.setUseProxies.bind(Rt);Rt.applyPatches.bind(Rt);Rt.createDraft.bind(Rt);Rt.finishDraft.bind(Rt);function Ys(e){return Ys=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ys(e)}function j4(e,t){if(Ys(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(Ys(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function F4(e){var t=j4(e,"string");return Ys(t)=="symbol"?t:t+""}function B4(e,t,n){return(t=F4(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function H0(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function U0(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?H0(Object(n),!0).forEach(function(r){B4(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):H0(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function st(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var Y0=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),Od=function(){return Math.random().toString(36).substring(7).split("").join(".")},bc={INIT:"@@redux/INIT"+Od(),REPLACE:"@@redux/REPLACE"+Od(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+Od()}};function W4(e){if(typeof e!="object"||e===null)return!1;for(var t=e;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function Xb(e,t,n){var r;if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(st(0));if(typeof t=="function"&&typeof n=="undefined"&&(n=t,t=void 0),typeof n!="undefined"){if(typeof n!="function")throw new Error(st(1));return n(Xb)(e,t)}if(typeof e!="function")throw new Error(st(2));var i=e,o=t,s=[],a=s,l=!1;function c(){a===s&&(a=s.slice())}function u(){if(l)throw new Error(st(3));return o}function d(y){if(typeof y!="function")throw new Error(st(4));if(l)throw new Error(st(5));var p=!0;return c(),a.push(y),function(){if(!!p){if(l)throw new Error(st(6));p=!1,c();var x=a.indexOf(y);a.splice(x,1),s=null}}}function f(y){if(!W4(y))throw new Error(st(7));if(typeof y.type=="undefined")throw new Error(st(8));if(l)throw new Error(st(9));try{l=!0,o=i(o,y)}finally{l=!1}for(var p=s=a,m=0;m<p.length;m++){var x=p[m];x()}return y}function g(y){if(typeof y!="function")throw new Error(st(10));i=y,f({type:bc.REPLACE})}function v(){var y,p=d;return y={subscribe:function(x){if(typeof x!="object"||x===null)throw new Error(st(11));function b(){x.next&&x.next(u())}b();var w=p(b);return{unsubscribe:w}}},y[Y0]=function(){return this},y}return f({type:bc.INIT}),r={dispatch:f,subscribe:d,getState:u,replaceReducer:g},r[Y0]=v,r}function V4(e){Object.keys(e).forEach(function(t){var n=e[t],r=n(void 0,{type:bc.INIT});if(typeof r=="undefined")throw new Error(st(12));if(typeof n(void 0,{type:bc.PROBE_UNKNOWN_ACTION()})=="undefined")throw new Error(st(13))})}function H4(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var i=t[r];typeof e[i]=="function"&&(n[i]=e[i])}var o=Object.keys(n),s;try{V4(n)}catch(a){s=a}return function(l,c){if(l===void 0&&(l={}),s)throw s;for(var u=!1,d={},f=0;f<o.length;f++){var g=o[f],v=n[g],y=l[g],p=v(y,c);if(typeof p=="undefined")throw c&&c.type,new Error(st(14));d[g]=p,u=u||p!==y}return u=u||o.length!==Object.keys(l).length,u?d:l}}function wc(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.length===0?function(r){return r}:t.length===1?t[0]:t.reduce(function(r,i){return function(){return r(i.apply(void 0,arguments))}})}function U4(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return function(){var i=r.apply(void 0,arguments),o=function(){throw new Error(st(15))},s={getState:i.getState,dispatch:function(){return o.apply(void 0,arguments)}},a=t.map(function(l){return l(s)});return o=wc.apply(void 0,a)(i.dispatch),U0(U0({},i),{},{dispatch:o})}}}function Kb(e){var t=function(r){var i=r.dispatch,o=r.getState;return function(s){return function(a){return typeof a=="function"?a(i,o,e):s(a)}}};return t}var Gb=Kb();Gb.withExtraArgument=Kb;var X0=Gb,qb=globalThis&&globalThis.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])},e(t,n)};return function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),Y4=globalThis&&globalThis.__generator||function(e,t){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,s;return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(c){return function(u){return l([c,u])}}function l(c){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(o=c[0]&2?i.return:c[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,c[1])).done)return o;switch(i=0,o&&(c=[c[0]&2,o.value]),c[0]){case 0:case 1:o=c;break;case 4:return n.label++,{value:c[1],done:!1};case 5:n.label++,i=c[1],c=[0];continue;case 7:c=n.ops.pop(),n.trys.pop();continue;default:if(o=n.trys,!(o=o.length>0&&o[o.length-1])&&(c[0]===6||c[0]===2)){n=0;continue}if(c[0]===3&&(!o||c[1]>o[0]&&c[1]<o[3])){n.label=c[1];break}if(c[0]===6&&n.label<o[1]){n.label=o[1],o=c;break}if(o&&n.label<o[2]){n.label=o[2],n.ops.push(c);break}o[2]&&n.ops.pop(),n.trys.pop();continue}c=t.call(e,n)}catch(u){c=[6,u],i=0}finally{r=o=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}},ao=globalThis&&globalThis.__spreadArray||function(e,t){for(var n=0,r=t.length,i=e.length;n<r;n++,i++)e[i]=t[n];return e},X4=Object.defineProperty,K4=Object.defineProperties,G4=Object.getOwnPropertyDescriptors,K0=Object.getOwnPropertySymbols,q4=Object.prototype.hasOwnProperty,Q4=Object.prototype.propertyIsEnumerable,G0=function(e,t,n){return t in e?X4(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},br=function(e,t){for(var n in t||(t={}))q4.call(t,n)&&G0(e,n,t[n]);if(K0)for(var r=0,i=K0(t);r<i.length;r++){var n=i[r];Q4.call(t,n)&&G0(e,n,t[n])}return e},Md=function(e,t){return K4(e,G4(t))},Z4=function(e,t,n){return new Promise(function(r,i){var o=function(l){try{a(n.next(l))}catch(c){i(c)}},s=function(l){try{a(n.throw(l))}catch(c){i(c)}},a=function(l){return l.done?r(l.value):Promise.resolve(l.value).then(o,s)};a((n=n.apply(e,t)).next())})},J4=typeof window!="undefined"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?wc:wc.apply(null,arguments)};function e3(e){if(typeof e!="object"||e===null)return!1;var t=Object.getPrototypeOf(e);if(t===null)return!0;for(var n=t;Object.getPrototypeOf(n)!==null;)n=Object.getPrototypeOf(n);return t===n}function wr(e,t){function n(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];if(t){var o=t.apply(void 0,r);if(!o)throw new Error("prepareAction did not return an object");return br(br({type:e,payload:o.payload},"meta"in o&&{meta:o.meta}),"error"in o&&{error:o.error})}return{type:e,payload:r[0]}}return n.toString=function(){return""+e},n.type=e,n.match=function(r){return r.type===e},n}var t3=function(e){qb(t,e);function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=e.apply(this,n)||this;return Object.setPrototypeOf(i,t.prototype),i}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(t.bind.apply(t,ao([void 0],n[0].concat(this)))):new(t.bind.apply(t,ao([void 0],n.concat(this))))},t}(Array),n3=function(e){qb(t,e);function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=e.apply(this,n)||this;return Object.setPrototypeOf(i,t.prototype),i}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(t.bind.apply(t,ao([void 0],n[0].concat(this)))):new(t.bind.apply(t,ao([void 0],n.concat(this))))},t}(Array);function eh(e){return Wn(e)?Yb(e,function(){}):e}function r3(e){return typeof e=="boolean"}function i3(){return function(t){return o3(t)}}function o3(e){e===void 0&&(e={});var t=e.thunk,n=t===void 0?!0:t;e.immutableCheck,e.serializableCheck,e.actionCreatorCheck;var r=new t3;return n&&(r3(n)?r.push(X0):r.push(X0.withExtraArgument(n.extraArgument))),r}var s3=!0;function a3(e){var t=i3(),n=e||{},r=n.reducer,i=r===void 0?void 0:r,o=n.middleware,s=o===void 0?t():o,a=n.devTools,l=a===void 0?!0:a,c=n.preloadedState,u=c===void 0?void 0:c,d=n.enhancers,f=d===void 0?void 0:d,g;if(typeof i=="function")g=i;else if(e3(i))g=H4(i);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var v=s;typeof v=="function"&&(v=v(t));var y=U4.apply(void 0,v),p=wc;l&&(p=J4(br({trace:!s3},typeof l=="object"&&l)));var m=new n3(y),x=m;Array.isArray(f)?x=ao([y],f):typeof f=="function"&&(x=f(m));var b=p.apply(void 0,x);return Xb(g,u,b)}function Qb(e){var t={},n=[],r,i={addCase:function(o,s){var a=typeof o=="string"?o:o.type;if(!a)throw new Error("`builder.addCase` cannot be called with an empty action type");if(a in t)throw new Error("`builder.addCase` cannot be called with two reducers for the same action type");return t[a]=s,i},addMatcher:function(o,s){return n.push({matcher:o,reducer:s}),i},addDefaultCase:function(o){return r=o,i}};return e(i),[t,n,r]}function l3(e){return typeof e=="function"}function c3(e,t,n,r){n===void 0&&(n=[]);var i=typeof t=="function"?Qb(t):[t,n,r],o=i[0],s=i[1],a=i[2],l;if(l3(e))l=function(){return eh(e())};else{var c=eh(e);l=function(){return c}}function u(d,f){d===void 0&&(d=l());var g=ao([o[f.type]],s.filter(function(v){var y=v.matcher;return y(f)}).map(function(v){var y=v.reducer;return y}));return g.filter(function(v){return!!v}).length===0&&(g=[a]),g.reduce(function(v,y){if(y)if(Er(v)){var p=v,m=y(p,f);return m===void 0?v:m}else{if(Wn(v))return Yb(v,function(x){return y(x,f)});var m=y(v,f);if(m===void 0){if(v===null)return v;throw Error("A case reducer on a non-draftable value must not return undefined")}return m}return v},d)}return u.getInitialState=l,u}function u3(e,t){return e+"/"+t}function vi(e){var t=e.name;if(!t)throw new Error("`name` is a required option for createSlice");var n=typeof e.initialState=="function"?e.initialState:eh(e.initialState),r=e.reducers||{},i=Object.keys(r),o={},s={},a={};i.forEach(function(u){var d=r[u],f=u3(t,u),g,v;"reducer"in d?(g=d.reducer,v=d.prepare):g=d,o[u]=g,s[f]=g,a[u]=v?wr(f,v):wr(f)});function l(){var u=typeof e.extraReducers=="function"?Qb(e.extraReducers):[e.extraReducers],d=u[0],f=d===void 0?{}:d,g=u[1],v=g===void 0?[]:g,y=u[2],p=y===void 0?void 0:y,m=br(br({},f),s);return c3(n,function(x){for(var b in m)x.addCase(b,m[b]);for(var w=0,_=v;w<_.length;w++){var k=_[w];x.addMatcher(k.matcher,k.reducer)}p&&x.addDefaultCase(p)})}var c;return{name:t,reducer:function(u,d){return c||(c=l()),c(u,d)},actions:a,caseReducers:o,getInitialState:function(){return c||(c=l()),c.getInitialState()}}}var d3="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",f3=function(e){e===void 0&&(e=21);for(var t="",n=e;n--;)t+=d3[Math.random()*64|0];return t},h3=["name","message","stack","code"],Ed=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),q0=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),p3=function(e){if(typeof e=="object"&&e!==null){for(var t={},n=0,r=h3;n<r.length;n++){var i=r[n];typeof e[i]=="string"&&(t[i]=e[i])}return t}return{message:String(e)}};(function(){function e(t,n,r){var i=wr(t+"/fulfilled",function(c,u,d,f){return{payload:c,meta:Md(br({},f||{}),{arg:d,requestId:u,requestStatus:"fulfilled"})}}),o=wr(t+"/pending",function(c,u,d){return{payload:void 0,meta:Md(br({},d||{}),{arg:u,requestId:c,requestStatus:"pending"})}}),s=wr(t+"/rejected",function(c,u,d,f,g){return{payload:f,error:(r&&r.serializeError||p3)(c||"Rejected"),meta:Md(br({},g||{}),{arg:d,requestId:u,rejectedWithValue:!!f,requestStatus:"rejected",aborted:(c==null?void 0:c.name)==="AbortError",condition:(c==null?void 0:c.name)==="ConditionError"})}}),a=typeof AbortController!="undefined"?AbortController:function(){function c(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return c.prototype.abort=function(){},c}();function l(c){return function(u,d,f){var g=r!=null&&r.idGenerator?r.idGenerator(c):f3(),v=new a,y;function p(x){y=x,v.abort()}var m=function(){return Z4(this,null,function(){var x,b,w,_,k,P,M;return Y4(this,function(E){switch(E.label){case 0:return E.trys.push([0,4,,5]),_=(x=r==null?void 0:r.condition)==null?void 0:x.call(r,c,{getState:d,extra:f}),m3(_)?[4,_]:[3,2];case 1:_=E.sent(),E.label=2;case 2:if(_===!1||v.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return k=new Promise(function(A,j){return v.signal.addEventListener("abort",function(){return j({name:"AbortError",message:y||"Aborted"})})}),u(o(g,c,(b=r==null?void 0:r.getPendingMeta)==null?void 0:b.call(r,{requestId:g,arg:c},{getState:d,extra:f}))),[4,Promise.race([k,Promise.resolve(n(c,{dispatch:u,getState:d,extra:f,requestId:g,signal:v.signal,abort:p,rejectWithValue:function(A,j){return new Ed(A,j)},fulfillWithValue:function(A,j){return new q0(A,j)}})).then(function(A){if(A instanceof Ed)throw A;return A instanceof q0?i(A.payload,g,c,A.meta):i(A,g,c)})])];case 3:return w=E.sent(),[3,5];case 4:return P=E.sent(),w=P instanceof Ed?s(null,g,c,P.payload,P.meta):s(P,g,c),[3,5];case 5:return M=r&&!r.dispatchConditionRejection&&s.match(w)&&w.meta.condition,M||u(w),[2,w]}})})}();return Object.assign(m,{abort:p,requestId:g,arg:c,unwrap:function(){return m.then(g3)}})}}return Object.assign(l,{pending:o,rejected:s,fulfilled:i,typePrefix:t})}return e.withTypes=function(){return e},e})();function g3(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function m3(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var ng="listenerMiddleware";wr(ng+"/add");wr(ng+"/removeAll");wr(ng+"/remove");var Q0;typeof queueMicrotask=="function"&&queueMicrotask.bind(typeof window!="undefined"?window:typeof global!="undefined"?global:globalThis);R4();const Zb=vi({name:"site",initialState:{darkStatus:!1,sideBarStatus:!0},reducers:{setDarkMode:e=>{e.darkStatus=!e.darkStatus},setSideBarStatus:e=>{e.sideBarStatus=!e.sideBarStatus}}}),{setDarkMode:Jb,setSideBarStatus:v3}=Zb.actions;var y3=Zb.reducer;const Z0=({whichStatus:e,changeStatus:t})=>{const[n,r]=C.exports.useState(!1),i=Yp();return h(M4,{children:h("div",{className:`button-box ${n?"button-true":""}`,onClick:()=>{!e||(r(!n),e==="online"?t():i(Jb()))},children:h("div",{className:"ball"})})})},x3=()=>{let e=Dr();const[t,n]=C.exports.useState(!1),[r,i]=C.exports.useState(!1);return h(u4,{children:S("div",{className:"profile-box",children:[h("div",{className:"profile",onClick:()=>n(!t),children:h(mc,{})}),h("div",{className:`profile-menu ${t?"show-profile-menu":""}`,children:S("div",{className:"menu-box",children:[S("div",{className:"profile-info",children:[h("div",{className:"pp",children:h(mc,{})}),S("div",{className:"info",children:[h("div",{className:"username",children:"khaleesi"}),S("div",{className:"status",children:[h("div",{className:`status-icon ${r?"online":""}`,children:h(Xp,{})}),h("span",{children:r?"Online":"Offline"})]})]})]}),S("div",{className:"status-button",children:[h("span",{children:"Online"}),h(Z0,{whichStatus:"online",changeStatus:()=>i(!r)})]}),h("div",{className:"menu-list",children:S("ul",{children:[h("li",{children:S("div",{className:"item",children:[h(h4,{})," ",h("span",{children:"Channel"})]})}),h("li",{children:S("div",{className:"item",children:[h(O4,{})," ",h("span",{children:"Video Producer"})]})}),h("li",{children:S("div",{className:"item",children:[h(s4,{})," ",h("span",{children:"Creator Dashboard"})]})}),h("li",{children:S("div",{className:"item",children:[h(d4,{})," ",h("span",{children:"Safety"})]})}),h("hr",{}),h("li",{children:S("div",{className:"item",children:[h(Gf,{})," ",h("span",{children:"Settings"})]})}),h("li",{children:S("div",{className:"item",children:[h(f4,{style:{transform:"rotate(180deg)"}})," ",h("span",{children:"BetterTTV Settings"})]})}),S("li",{children:[S("div",{className:"item",children:[h(m4,{})," ",h("span",{children:"Language"})]}),h(b4,{})]}),S("li",{children:[S("div",{className:"item",children:[h(Bb,{})," ",h("span",{children:"Dark Theme"})]}),h(Z0,{whichStatus:"darkmode"})]}),h("hr",{}),h("li",{children:S("div",{className:"item",onClick:()=>{document.cookie="isLoggedIn="+!1,e("/login")},children:[h(y4,{style:{transform:"rotate(180deg)"}})," ",h("span",{children:"Log Out"})]})})]})})]})})]})})},b3=H.div`
  .sidebar-box {
    display: none;
    position: fixed;
    // left: 0;
    top: 0;
    width: 55px;
    height: 100vh;
    background-color: ${e=>e.theme.sideBar};
    z-index: 9;
    box-shadow: 1px 0 3px rgba(0, 0, 0, 0.1);
    padding-top: 60px;
    transition: 0.3s;

    .list-title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px;
      height: 50px;

      h1 {
        width: 80%;
        text-transform: uppercase;
        font-size: 0px;
        color: ${e=>e.theme.softDesktop};
        transition: 0.3s;
        opacity: 0;
      }

      .title-icon {
        font-size: 20px;
        display: flex;
        margin-right: 8px;
        transition: 0.3s;
        cursor: pointer;
        color: ${e=>e.theme.textColor};

        @media (max-width: 1199px) {
          & {
            display: none;
          }
        }
      }

      .followed,
      .camera {
        font-size: 20px;
        display: flex;
        margin-right: 8px;
        transition: 0.3s;
        cursor: pointer;
        color: ${e=>e.theme.textColor};
      }
      @media (min-width: 1200px) {
        .followed {
          display: none;
        }
      }
    }

    .side-search {
      display: none;
      padding: 0 10px;
      position: absolute;
      bottom: 10px;
      animation: pageAnim 1s;
    }

    .list ul li {
      .item .hover-section {
        display: none;
        animation: pageAnim 1s;
      }
    }

    &:hover {
      width: 250px;

      .list-title {
        display: flex;

        h1 {
          font-size: 13px;
          opacity: 1;
        }

        .followed,
        .camera {
          display: none;
        }
      }

      @media (min-height: 800px) {
        .side-search {
          display: block;
        }
      }

      .list {
        .show-more span {
          font-size: 13px;
          opacity: 1;

          &:hover {
            text-decoration: underline;
          }
        }

        ul li {
          width: 250px;

          .item .hover-section {
            display: flex;
          }
        }
      }
    }
  }

  .side-open {
    // width: 250px;

    .list-title {
      display: flex;

      h1 {
        font-size: 13px;
        opacity: 1;
      }

      .title-icon {
        transform: rotate(180deg);
      }
      .camera {
        display: none;
      }
    }

    @media (min-height: 800px) {
      .side-search {
        display: block;
      }
    }

    .list {
      .show-more span {
        font-size: 13px;
        opacity: 1;

        &:hover {
          text-decoration: underline;
        }
      }

      ul li {
        width: 250px;

        .item .hover-section {
          display: flex;
        }
      }
    }

    @media (max-width: 1199px) {
      display: none;
    }
  }
`,w3=H.div`
  li {
    display: block;
    padding: 10px;
    height: 50px;
    color: ${e=>e.theme.textColor};
    cursor: pointer;
    transition: 0.3s;

    .item {
      display: flex;
      align-items: center;
      font-size: 15px;
      width: 100%;

      .pp {
        display: block;
        border-radius: 999px;
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
      }

      .hover-section {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-left: 10px;
        flex: 1;

        .info {
          display: block;

          .username {
            font-weight: 600;
          }
          .title {
            color: ${e=>e.theme.soft};
            font-size: 13px;
          }
        }

        .live {
          display: flex;
          width: 25%;
          align-items: center;

          .live-icon {
            color: red;
            font-size: 7px;
          }

          span {
            font-size: 14px;
            padding-left: 5px;
          }
        }
      }
    }

    &:hover {
      background-color: ${e=>e.theme.hover};
    }
  }
`,_3=H.div`
  .list {
    display: block;
    margin-bottom: 10px;

    .show-more {
      padding: 10px;
      width: 100px;

      span {
        transition: 0.3s;
        font-size: 0px;
        color: ${e=>e.theme.color};
        font-weight: 500;
        cursor: pointer;
        opacity: 0;
      }
    }
  }
`,S3=({user:e,imageId:t})=>h(w3,{children:h("li",{children:S("div",{className:"item",children:[h("div",{className:"pp",children:h("img",{src:`https://i.pravatar.cc/5${t}`})}),S("div",{className:"hover-section",children:[S("div",{className:"info",children:[h("div",{className:"username",children:e.username}),h("div",{className:"title",children:e.game})]}),S("div",{className:"live",children:[h("div",{className:"live-icon",children:h(Xp,{})}),h("span",{children:"333"})]})]})]})})}),J0=()=>{const{users:e}=bt(t=>t.user);return h(_3,{children:S("div",{className:"list",children:[h("ul",{children:e.map((t,n)=>{if(!(n>4))return h(S3,{user:t,imageId:n},n)})}),h("div",{className:"show-more",children:h("span",{children:"Show More"})})]})})},k3=H.div`
  display: block;
  width: 100%;

  .searchbar-box {
    width: 100%;
    background-color: ${e=>e.theme.hover};
    color: ${e=>e.theme.textColor};
    display: flex;
    align-items: center;
    height: 30px;
    border-radius: 5px;
    padding-left: 5px;
    border: 2px solid transparent;
    transition: 0.3s;

    .search-icon {
      font-size: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }

    .input {
      background-color: transparent;
      flex: 1;
      font-size: 13px;
      padding: 10px;
      color: ${e=>e.theme.textColor};
    }
  }
  .searchbar-box.focus {
    background-color: transparent;
    border: 2px solid ${e=>e.theme.color};
  }
`,e2=({placeholder:e})=>{const[t,n]=C.exports.useState(!1);return h(k3,{children:S("div",{className:`searchbar-box ${t?"focus":""}`,children:[h("div",{className:"search-icon",children:h(Gp,{})}),h("input",{type:"text",placeholder:e,className:"input",onFocus:()=>n(!0),onBlur:()=>n(!1)})]})})},C3=({mySize:e})=>{const{sideBarStatus:t}=bt(r=>r.site),n=Yp();return h(b3,{children:S("div",{className:"sidebar-box",children:[S("div",{className:"list-title",children:[h("h1",{children:"Followed Channels"}),h("div",{className:"title-icon",onClick:()=>n(v3(!t)),children:h(a4,{})}),h("div",{className:"followed",children:h(l4,{})})]}),h(J0,{}),S("div",{className:"list-title",children:[h("h1",{children:"Recommended Channels"}),h("div",{className:"camera",children:h(x4,{})})]}),h(J0,{}),h("div",{className:"side-search",children:h(e2,{placeholder:"Search to Add Friends"})})]})})},P3=({mySize:e})=>{const{pathname:t}=Xt();return h(r4,{children:S(Ve,{children:[h("div",{className:"header-box",children:S("header",{children:[h("div",{className:"left",children:S("ul",{children:[h("li",{children:h("div",{className:"item",children:h(Oe,{to:"/",children:h("div",{className:"logo",children:h("img",{src:"./public/images/logo/filtered/savingpulse-mb-transparent.png"})})})})}),h("li",{className:t==="/mutual-funds"?"active":"",children:h(Oe,{to:"/mutual-funds",className:"link",children:h("div",{className:"item",children:"Mutual funds"})})}),h("li",{className:t==="/following"?"active":"",children:h(Oe,{to:"/following",className:"link",children:h("div",{className:"item",children:"Following"})})}),h("li",{className:t==="/"?"active":"",children:h(Oe,{to:"/",className:"link",children:h("div",{className:"item",children:"Home"})})}),h("li",{className:t==="/ipo"?"active":"",children:h(Oe,{to:"/ipo",className:"link",children:h("div",{className:"item",children:"IPO's"})})}),h("li",{className:t==="/offers"?"active":"",children:h(Oe,{to:"/offers",className:"link",children:h("div",{className:"item",children:"Offers"})})}),h("li",{children:h("div",{className:"item",children:h(Kp,{className:"item-icon"})})})]})}),h("div",{className:"bottom"}),S("div",{className:"right",children:[S("div",{className:"search-bar",children:[h("input",{type:"text",placeholder:"Search"}),h("div",{className:"search-icon",children:h(Gp,{})})]}),h("div",{className:"right-icons",children:h("ul",{children:h("li",{children:h(c4,{})})})}),h("div",{className:"profile-desktop",children:h(x3,{})})]})]})}),h("div",{className:"left-bar",children:h(C3,{mySize:e})})]})})},O3=H.header`
  display: none;

  // Header Navbar
  header {
    width: 100%;
    height: 75px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${e=>e.theme.header};
    color: ${e=>e.theme.iconColor};
    padding: 10px;
    position: fixed;
    top: 0;
    z-index: 4;

    .logo {
      border: 2px dashed #9147ff;
      border-radius: 100%;
      padding: 0.5rem;
      min-width: 6rem;
      min-height: 6rem;

      img {
        height: 45px;
      }
    }

    .page-name {
      margin-left: 10px;
      font-size: 2rem;
      font-weight: 600;
    }

    .profile-box {
      width: 40px;
      height: 40px;
      background-color: #9147ff;
      border-radius: 999px;
      display: flex;
      align-items: center;
      // padding-bottom: 3px;
      justify-content: center;
      font-size: 24px;
      overflow: hidden;
      color: #fff;
      cursor: pointer;
    }

    .right-buttons {
      display: flex;
      justify-content: right;
      align-items: center;
      flex: 1;
      font-size: 3rem;

      & > * {
        cursor: pointer;
      }
    }
  }

  // Bottom Navbar
  nav {
    position: fixed;
    bottom: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 8rem;
    min-height: 60px;
    background-color: ${e=>e.theme.header};
    z-index: 4;

    .item {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 26px;
      color: ${e=>e.theme.iconColor};
      cursor: pointer;
      transition: 0.3s;
      padding: 1rem 0;

      span {
        font-size: 1.5rem;
        margin-top: 5px;
        text-align: center;
        width: 7rem;
      }

      .item__browse {
        transform: rotateY(180deg);
      }
    }

    .active {
      color: ${e=>e.theme.color};
    }
  }

  // Profile Menu
  .profile-menu-box {
    display: none;

    &.visible {
      display: block;
    }
  }

  @media (max-width: 767px) {
    display: block;
  }
`,M3=H.div`
  // Mobile Search
  display: none;

  &.search-visible {
    display: block;
  }

  .search-box {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: ${e=>e.theme.header};
    z-index: 5;
    animation: searchBarAnim 0.3s;

    .search-bar {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 70px;
      display: flex;
      align-items: center;
      padding: 0 10px;
      font-size: 30px;

      .search-close {
        margin-right: 10px;
        cursor: pointer;
      }

      input {
        width: 100%;
        background-color: ${e=>e.theme.border};
        color: ${e=>e.theme.textColor};
        height: 60%;
        padding: 10px;
        border-radius: 8px;
        font-size: 18px;
      }
    }

    .search-result {
      margin-top: 70px;
      padding: 0 2rem;
      p {
        padding: 2rem 1rem;
        font-size: 1.4rem;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        border-bottom: 1px solid #ececec;
        border-top: 1px solid #ececec;

        &:hover {
          background: ${e=>e.theme.hover};
        }
        svg {
          margin-right: 0.5rem;
        }

        .click-to-copy {
          margin-left: auto;
          color: ${e=>e.theme.color};
          cursor: pointer;
        }
      }
    }
  }

  @keyframes searchBarAnim {
    0% {
      display: block;
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;function E3(e){return ee({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M456.69 421.39L362.6 327.3a173.81 173.81 0 0034.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 00327.3 362.6l94.09 94.09a25 25 0 0035.3-35.3zM97.92 222.72a124.8 124.8 0 11124.8 124.8 124.95 124.95 0 01-124.8-124.8z"}}]})(e)}const N3=async(e,t={})=>{const{method:n="GET",headers:r={},body:i}=t;try{const o=await fetch(e,{method:n,headers:{"Content-Type":"application/json",...r},body:n==="GET"?void 0:JSON.stringify(i)});if(!o.ok){const s=await o.json();throw new Error(s.message||"Something went wrong")}return await o.json()}catch(o){throw console.error("API Request Error:",o.message),new Error(o.message||"Something went wrong")}},rg=()=>{const{protocol:e,hostname:t}=window.location;return t==="localhost"||t==="127.0.0.1"?`${e}//${t}/star-mf`:"http://savingpulse.com"},ig=async e=>await N3(e),du=(e="")=>{const t=$3(e);return ig(t)},T3=e=>{const t=`${rg()}/mutual-funds/${e}?ajax=true`;return ig(t)},A3=e=>{const t=`${rg()}/search-for-schemes/${encodeURIComponent(e)}?ajax=true`;return ig(t)},$3=e=>{const n={schemes:"/schemes","sip-with-100":"/schemes/sip-with-100","high-return":"/schemes/high-return","tax-saving":"/schemes/tax-saving","large-cap":"/schemes/large-cap","mid-cap":"/schemes/mid-cap","small-cap":"/schemes/small-cap"}[e]||"";return`${rg()}${n}?ajax=true`};function R3(e){return ee({tag:"svg",attr:{version:"1.1",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 4.736c-0.515 0-0.933-0.418-0.933-0.933v-2.798c0-0.515 0.418-0.933 0.933-0.933s0.933 0.418 0.933 0.933v2.798c0 0.515-0.418 0.933-0.933 0.933z"}},{tag:"path",attr:{d:"M8 15.577c-0.322 0-0.583-0.261-0.583-0.583v-2.798c0-0.322 0.261-0.583 0.583-0.583s0.583 0.261 0.583 0.583v2.798c0 0.322-0.261 0.583-0.583 0.583z"}},{tag:"path",attr:{d:"M5.902 5.24c-0.302 0-0.596-0.157-0.758-0.437l-1.399-2.423c-0.241-0.418-0.098-0.953 0.32-1.194s0.953-0.098 1.194 0.32l1.399 2.423c0.241 0.418 0.098 0.953-0.32 1.194-0.138 0.079-0.288 0.117-0.436 0.117z"}},{tag:"path",attr:{d:"M11.498 14.582c-0.181 0-0.358-0.094-0.455-0.262l-1.399-2.423c-0.145-0.251-0.059-0.572 0.192-0.717s0.572-0.059 0.717 0.192l1.399 2.423c0.145 0.251 0.059 0.572-0.192 0.717-0.083 0.048-0.173 0.070-0.262 0.070z"}},{tag:"path",attr:{d:"M4.365 6.718c-0.138 0-0.279-0.035-0.407-0.109l-2.423-1.399c-0.39-0.225-0.524-0.724-0.299-1.115s0.724-0.524 1.115-0.299l2.423 1.399c0.39 0.225 0.524 0.724 0.299 1.115-0.151 0.262-0.425 0.408-0.707 0.408z"}},{tag:"path",attr:{d:"M14.057 11.964c-0.079 0-0.159-0.020-0.233-0.063l-2.423-1.399c-0.223-0.129-0.299-0.414-0.171-0.637s0.414-0.299 0.637-0.171l2.423 1.399c0.223 0.129 0.299 0.414 0.171 0.637-0.086 0.15-0.243 0.233-0.404 0.233z"}},{tag:"path",attr:{d:"M3.803 8.758h-2.798c-0.418 0-0.758-0.339-0.758-0.758s0.339-0.758 0.758-0.758h2.798c0.419 0 0.758 0.339 0.758 0.758s-0.339 0.758-0.758 0.758z"}},{tag:"path",attr:{d:"M14.995 8.466c-0 0 0 0 0 0h-2.798c-0.258-0-0.466-0.209-0.466-0.466s0.209-0.466 0.466-0.466c0 0 0 0 0 0h2.798c0.258 0 0.466 0.209 0.466 0.466s-0.209 0.466-0.466 0.466z"}},{tag:"path",attr:{d:"M1.943 12.197c-0.242 0-0.477-0.125-0.606-0.35-0.193-0.335-0.079-0.762 0.256-0.955l2.423-1.399c0.335-0.193 0.762-0.079 0.955 0.256s0.079 0.762-0.256 0.955l-2.423 1.399c-0.11 0.064-0.23 0.094-0.349 0.094z"}},{tag:"path",attr:{d:"M11.635 6.368c-0.161 0-0.318-0.084-0.404-0.233-0.129-0.223-0.052-0.508 0.171-0.637l2.423-1.399c0.223-0.129 0.508-0.052 0.637 0.171s0.052 0.508-0.171 0.637l-2.423 1.399c-0.073 0.042-0.154 0.063-0.233 0.063z"}},{tag:"path",attr:{d:"M4.502 14.699c-0.109 0-0.219-0.028-0.32-0.086-0.307-0.177-0.412-0.569-0.235-0.876l1.399-2.423c0.177-0.307 0.569-0.412 0.876-0.235s0.412 0.569 0.235 0.876l-1.399 2.423c-0.119 0.206-0.334 0.321-0.556 0.321z"}},{tag:"path",attr:{d:"M10.098 4.832c-0.079 0-0.159-0.020-0.233-0.063-0.223-0.129-0.299-0.414-0.171-0.637l1.399-2.423c0.129-0.223 0.414-0.299 0.637-0.171s0.299 0.414 0.171 0.637l-1.399 2.423c-0.086 0.15-0.243 0.233-0.404 0.233z"}}]})(e)}function L3(e){return ee({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M384 336H192c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16l140.1 0L400 115.9V320c0 8.8-7.2 16-16 16zM192 384H384c35.3 0 64-28.7 64-64V115.9c0-12.7-5.1-24.9-14.1-33.9L366.1 14.1c-9-9-21.2-14.1-33.9-14.1H192c-35.3 0-64 28.7-64 64V320c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H256c35.3 0 64-28.7 64-64V416H272v32c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192c0-8.8 7.2-16 16-16H96V128H64z"}}]})(e)}const D3=({searchStatus:e,setSearchStatus:t})=>{const[n,r]=C.exports.useState(""),[i,o]=C.exports.useState(!1),[s,a]=C.exports.useState([]),l=f=>{f.target.value.length<3};C.exports.useEffect(()=>{if(console.log(n),n.length<3)return;o(!0),(async()=>{try{const g=encodeURIComponent(n),v=await A3(g);a(v)}catch(g){console.log(g)}finally{o(!1)}})()},[n]);const c=f=>{r(f.target.value)},u=C.exports.useRef(null);C.exports.useState("Copy this text to clipboard!");const d=()=>{const f=u.current.innerText;navigator.clipboard.writeText(f).then(()=>{console.log("Text copied to clipboard!")}).catch(g=>{console.error("Failed to copy text: ",g)})};return h(M3,{className:e?"search-visible":"",children:S("div",{className:"search-box",children:[S("div",{className:"search-bar",children:[h(Fb,{className:"search-close",onClick:()=>t(!e)}),h("input",{type:"text",value:n,onChange:c,onKeyDown:l,placeholder:"Search..."})]}),h("div",{className:"search-result",children:i?h("div",{children:h(R3,{})}):s.map((f,g)=>S("p",{children:[S(Oe,{to:`/mutual-fund/${f.Scheme_Code}`,children:[h(E3,{})," ",h("span",{ref:u,children:f.Scheme_Name})]},g),h("span",{onClick:d,className:"click-to-copy",children:h(L3,{})})]},g))})]})})},z3=H.div`
  position: fixed;
  bottom: 60px;
  left: 0;
  width: 100%;
  height: 95vh;
  background-color: ${e=>e.theme.header}d9;
  z-index: 5;

  .profile-menu-container {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 97%;
    overflow-y: scroll;
    background-color: ${e=>e.theme.header};
    padding: 0;
    animation: profileMenuAnim 0.3s;
    box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.2);
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    z-index: 10;

    .title {
      position: sticky;
      top: 0;
      left: 0;
      background-color: ${e=>e.theme.header};
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-weight: 500;
      padding: 15px 13px;
      z-index: 10;

      h1 {
        font-weight: 500;
        font-size: 20px;
        color: ${e=>e.theme.textColor};
      }

      span {
        position: absolute;
        color: ${e=>e.theme.textColor};
        right: 15px;
        font-size: 15px;
        cursor: pointer;
        transition: opacity 0.3s;

        &:hover {
          opacity: 0.8;
        }
      }
    }

    .user {
      width: 100%;
      background-color: ${e=>e.theme.header};
      border-radius: 10px;
      padding: 10px;
      margin-bottom: 20px;
      border: 1px solid ${e=>e.theme.border};
      display: flex;
      flex-direction: column;
      align-items: center;

      .user-since {
        font-size: 1.2rem;
      }
      .user__top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px;

        .user-box {
          width: 60px;
          height: 60px;
          background-color: #9147ff;
          border-radius: 999px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-size: 28px;
          padding-bottom: 4px;
          cursor: pointer;
        }

        button {
          background-color: ${e=>e.theme.color};
          padding: 7px 14px;
          max-width: 110px;
          width: 100%;
          border-radius: 50px;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-weight: 600;
          cursor: pointer;
          transition: 0.3s;

          &:hover {
            opacity: 0.8;
          }

          .cast-icon {
            font-size: 18px;
          }
        }
      }

      .user__bottom {
        padding: 0 10px;

        .username {
          font-weight: 600;
          color: ${e=>e.theme.textColor};
        }
        .status {
          font-size: 13px;
          opacity: 0.8;
          padding: 5px 0;
          color: ${e=>e.theme.soft};
        }
      }
    }

    .settings {
      width: 100%;
      background-color: ${e=>e.theme.header};
      border-radius: 10px;
      padding: 10px;
      margin-bottom: 15px;
      border: 1px solid ${e=>e.theme.border};

      ul {
        width: 100%;
        display: block;

        li {
          width: 100%;
          padding: 10px 0;
          cursor: pointer;

          &:not(:last-child) {
            border-bottom: 1px solid ${e=>e.theme.border};
          }

          .settings__title {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 10px;
            color: ${e=>e.theme.textColor};
            transition: filter 0.1s;

            .title-left {
              display: flex;
              align-items: center;
              font-size: 15px;
              font-weight: 400;

              .title-icon {
                margin-right: 10px;
                font-size: 25px;
              }
            }
          }

          &:hover:not(:last-child) .settings__title {
            filter: contrast(50%);
          }
        }
      }
    }

    @keyframes profileMenuAnim {
      0% {
        transform: translateY(1000px);
      }
      100% {
        transform: translateY(0);
      }
    }
  }
`,I3=H.div`
  .darkMode-container {
    width: 44px;
    height: 24px;
    border-radius: 999px;
    background-color: ${e=>e.theme.darkModeBg};
    position: relative;

    .ball {
      position: absolute;
      top: 2px;
      left: 2px;
      width: 20px;
      height: 20px;
      background-color: #fff;
      border-radius: 999px;
      transition: 0.3s cubic-bezier(0.24, 0.01, 0.77, 1.42);
    }
    .ball.dark {
      transform: translateX(20px);
    }
  }
`,j3=()=>{const{darkStatus:e}=bt(r=>r.site),t=Yp();return h(I3,{children:h("div",{className:"darkMode-container",onClick:r=>(r.preventDefault(),t(Jb())),children:h("div",{className:`ball ${e?"dark":""}`})})})},F3=({handleCloseProfileMenu:e})=>{let t=Dr();return h(z3,{children:S("div",{className:"profile-menu-container",children:[S("div",{className:"title",children:[h(Fb,{onClick:e}),h("h1",{children:"Account"}),h(Gf,{})]}),S("div",{className:"user",children:[h("div",{className:"user__top",children:h("div",{className:"user-box",children:h(mc,{})})}),h("div",{className:"user__bottom",children:h("div",{className:"username",children:"Arun Suthar"})}),h("span",{className:"user-since",children:"Member since 2020"})]}),h("div",{className:"settings",children:S("ul",{children:[h("li",{children:S("div",{className:"settings__title",children:[S("div",{className:"title-left",children:[h(g4,{className:"title-icon"}),"Subscriptions"]}),h(_d,{})]})}),h("li",{children:S("div",{className:"settings__title",children:[S("div",{className:"title-left",children:[h(p4,{className:"title-icon"}),"Friends"]}),h(_d,{})]})}),h("li",{children:h(Oe,{to:"/settings",children:S("div",{className:"settings__title",children:[S("div",{className:"title-left",children:[h(Gf,{className:"title-icon"}),"Settings"]}),h(_d,{})]})})}),h("li",{children:S("div",{className:"settings__title",children:[S("div",{className:"title-left",children:[h(Bb,{className:"title-icon"}),"Dark Mode"]}),h(j3,{})]})}),h("li",{children:h("div",{className:"settings__title",onClick:()=>{document.cookie="isLoggedIn="+!1,t("/login")},children:S("div",{className:"title-left",children:[h(P4,{className:"title-icon"}),"Logout"]})})})]})})]})})},B3=()=>{const{pathname:e}=Xt(),[t,n]=C.exports.useState(!1),[r,i]=C.exports.useState(!1),o=()=>i(!r);let s="Home";switch(e){case"/mutual-funds":s="Mutual Funds";break;case"/following":s="Mutual Funds";break;case"/":s="Home";break;case"/ipo":s="Intial Public Offers";break;case"/offers":s="Offers";break;case"/all-mutual-funds":s="All Mutual Funds";break}return S(O3,{children:[S("header",{children:[h(Oe,{to:"/",children:h("div",{className:"logo",children:h("img",{src:"./images/logo/filtered/savingpulse-mb-transparent.png"})})}),h("h1",{className:"page-name",children:s}),h(D3,{searchStatus:t,setSearchStatus:n}),S("div",{className:"right-buttons",children:[h(Gp,{onClick:()=>n(!t)}),"\xA0 \xA0",h("div",{className:`profile-menu-box ${r?"visible":""}`,children:h(F3,{handleCloseProfileMenu:o})}),h("div",{className:"profile-box",children:h(mc,{onClick:()=>i(!r)})})]})]}),S("nav",{children:[h(Oe,{to:"/mutual-funds",onClick:()=>i(!1),children:S("div",{className:`item ${e==="/mutual-funds"?"active":""}`,children:[h(k4,{}),h("span",{children:"Funds"})]})}),h(Oe,{to:"/following",onClick:()=>i(!1),children:S("div",{className:`item ${e==="/following"?"active":""}`,children:[h(C4,{}),h("span",{children:"Following"})]})}),h(Oe,{to:"/",onClick:()=>i(!1),children:S("div",{className:`item ${e==="/"?"active":""}`,children:[h(w4,{}),h("span",{children:"Home"})]})}),h(Oe,{to:"/ipo",onClick:()=>i(!1),children:S("div",{className:`item ${e==="/ipo"?"active":""}`,children:[h(S4,{className:"item__browse"}),h("span",{children:"IPO"})]})}),h(Oe,{to:"/offers",onClick:()=>i(!1),children:S("div",{className:`item ${e==="/offers"?"active":""}`,children:[h(v4,{className:"item__profile"}),h("span",{children:"Offers"})]})})]})]})},W3=({mySize:e})=>S("div",{className:"header",children:[h(B3,{}),h(P3,{mySize:e})]}),V3=H.div`
  // Mobile
  .ipos-mobile {
    display: none;

    .ipos-box {
      padding: 75px 10px;
      color: ${e=>e.theme.textColor};
      background-color: ${e=>e.theme.header};
      position: relative;
      z-index: 3;
      animation: pageAnim 0.3s ease-in-out;

      .navigation {
        width: 100%;
        display: flex;
        align-items: center;
        margin: 10px 0;
        font-size: 1.8rem;
        font-weight: 500;

        & > div {
          border-bottom: 2px solid transparent;
          padding: 5px 10px;
          cursor: pointer;
          user-select: none;
        }

        .nav-item {
          margin-left: 10px;
        }

        .nav-active {
          border-bottom: 2px solid ${e=>e.theme.color};
          color: ${e=>e.theme.color};
          transition: 0.3s;
        }
      }
    }

    @media (max-width: 767px) {
      display: block;
    }
  }

  // Desktop
  .ipos-desktop {
    display: none;

    .ipos-box {
      display: block;

      .page-title {
        color: ${e=>e.theme.textColor};
        font-size: 50px;
        padding: 30px 0;
      }

      .nav {
        margin-top: 40px;
        ul {
          display: flex;
          gap: 5px;

          li {
            font-size: 18px;
            height: 35px;
            font-weight: 500;
            margin-right: 10px;
          }
        }
      }

      .search-filter {
        margin-top: 20px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: ${e=>e.theme.textColor};

        .search-box {
          width: 320px;
          display: flex;
          align-items: center;

          span {
            font-size: 13px;
            font-weight: 600;
            width: 80px;
          }
        }

        .filter {
          width: 250px;
          display: flex;
          align-items: center;
          font-size: 13px;
          font-weight: 600;

          span {
            width: 60px;
          }

          .sort {
            display: flex;
            align-items: center;
            height: 30px;
            padding: 0 10px;
            border-radius: 5px;
            background-color: ${e=>e.theme.hover};
            cursor: pointer;
            transition: 0.1s;
            user-select: none;

            .sort-icon {
              font-size: 20px;
              display: flex;
              align-items: center;
              justify-content: center;
            }

            &:hover {
              box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.3);
            }
          }
        }
      }
    }

    @media (min-width: 768px) {
      display: block;
    }
  }
`,H3=H.div`
  border-bottom: 1px solid #ebe7e7;
  padding-bottom: 10px;

  .ipo-box {
    padding: 2rem 0 0 0;
    .header {
      display: flex;
    }
    .picture img {
      width: 100px;
      border: 1px solid #ececec;
      margin-right: 1rem;
      border-radius: 20%;
    }
    .name {
      padding: 10px 0;
      font-weight: 500;
      font-size: 1.8rem;
    }
    .offer {
      font-size: 1.4rem;
      padding: 1rem 0;
    }

    .actions {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .tags {
        font-size: 14px;
        padding: 1rem 0;
        display: flex;
        gap: 1rem;

        .tag {
          display: inline-block;
          padding: 0.8rem 1.2rem;
          background-color: ${e=>e.theme.hover};
          border-radius: 5px;
          cursor: pointer;
          color: #9147ff;
          font-weight: 500;
        }
      }

      .action-link {
        display: flex;
        gap: 1rem;

        a {
          background-color: rgb(145, 71, 255);
          padding: 0.8rem 1.2rem;
          border-radius: 5px;
          color: rgb(255, 255, 255);
          cursor: pointer;
          transition: all 0.3s ease 0s;
          font-size: 1.4rem;
        }
      }
    }

    .more-details {
      display: flex;
      flex-direction: row;
      align-content: space-around;
      justify-content: space-between;
      align-items: center;
      font-size: 1.4rem;

      div {
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 1rem;
        align-items: center;
      }
      .divider {
        height: 5.5rem;
        width: 1px;
        padding: 1px 0px;
        background-color: ${e=>e.theme.border};
      }
    }
  }
`,Nd=({ipo:e})=>{var t,n,r;return h(H3,{children:S("div",{className:"ipo-box",children:[S("div",{className:"header",children:[h("div",{className:"picture",children:h("img",{src:e.image,alt:""})}),S("div",{children:[h("h2",{className:"name",children:e.name}),S("p",{className:"offer",children:["Offer date: ",(t=e==null?void 0:e.date)==null?void 0:t.start," - ",(n=e==null?void 0:e.date)==null?void 0:n.end]})]})]}),S("div",{className:"actions",children:[S("div",{className:"tags",children:[h("div",{className:"tag",children:e.exchange}),h("div",{className:"tag",children:"Live"})]}),S("div",{className:"action-link",children:[h(Oe,{className:"link",to:"",title:"Apply",children:"Apply"}),S(Oe,{className:"link",to:"",title:"Check Allotment",children:[h("span",{className:"hide-mb1",children:"Check "}),"Allotment"]})]})]}),S("div",{className:"more-details",children:[S("div",{children:[h("span",{children:"Offer Price"}),h("span",{children:(r=e==null?void 0:e.price)==null?void 0:r.offer})]}),h("div",{className:"divider"}),S("div",{children:[h("span",{children:"Lot Size"}),h("span",{children:e.lotSize})]}),h("div",{className:"divider"}),S("div",{children:[h("span",{children:"Subscription"}),S("span",{children:[e.subscriptions," times"]})]})]})]})})},U3=H.div`
  display: block;
  width: 100%;

  .tags-box {
    display: block;
    width: 100%;

    ul {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 10px;

      li {
        display: block;

        .item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background-color: ${e=>e.theme.color};
          border-radius: 10px;
          height: 45px;
          padding: 0 15px;
          color: #fff;
          transition: 0.3s;
          cursor: pointer;

          span {
            font-size: 24px;
            font-weight: 500;
          }

          .icon {
            cursor: pointer;
          }
        }

        &:hover {
          .item {
            background-color: ${e=>e.theme.color}e9;
          }
        }
      }

      @media (max-width: 1199px) {
        & {
          grid-template-columns: repeat(4, 1fr);

          li:nth-last-child(1) {
            display: none;
          }
        }
      }
      @media (max-width: 1023px) {
        & {
          grid-template-columns: repeat(3, 1fr);

          li:nth-last-child(2) {
            display: none;
          }
        }
      }
    }
  }
`,Y3=()=>h(U3,{children:h("div",{className:"tags-box",children:S("ul",{children:[h("li",{children:S("div",{className:"item",children:[h("span",{children:"Games"}),h("div",{className:"icon",children:h("img",{src:"https://static.twitchcdn.net/assets/gaming-e9019587744b56b11b43.svg",alt:""})})]})}),h("li",{children:S("div",{className:"item",children:[h("span",{children:"IRL"}),h("div",{className:"icon",children:h("img",{src:"https://static.twitchcdn.net/assets/irl-baa32e8e64a6974282c0.svg",alt:""})})]})}),h("li",{children:S("div",{className:"item",children:[h("span",{children:"Music"}),h("div",{className:"icon",children:h("img",{src:"https://static.twitchcdn.net/assets/music-5fb4595a30d04d991e24.svg",alt:""})})]})}),h("li",{children:S("div",{className:"item",children:[h("span",{children:"Esports"}),h("div",{className:"icon",children:h("img",{src:"https://static.twitchcdn.net/assets/esports-7a078acca57531d11e29.svg",alt:""})})]})}),h("li",{children:S("div",{className:"item",children:[h("span",{children:"Creative"}),h("div",{className:"icon",children:h("img",{src:"https://static.twitchcdn.net/assets/creative-6423fb5fbcf31fadee38.svg",alt:""})})]})})]})})}),X3=H.div`
  width: 100%;
  height: 100%;

  .link-box {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 2px solid transparent;

    .link {
      color: ${e=>e.theme.textColor};
      transition: 0.3s;
    }

    &:hover {
      .link {
        color: ${e=>e.theme.color};
      }
    }
  }

  .link-box.active {
    border-bottom: 2px solid ${e=>e.theme.color};

    a {
      color: ${e=>e.theme.color};
    }
  }
`,ir=({title:e,to:t})=>{const{pathname:n}=Xt();return h(X3,{children:h("div",{className:`link-box ${n==t?"active":""}`,children:h(Oe,{to:t||"/",className:"link",children:e||"default"})})})};var t2={};function K3(e){if(e&&e.__esModule)return e;var t={};if(e!=null){for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}}return t.default=e,t}var n2=K3,Nr={};function G3(e){return e&&e.__esModule?e:{default:e}}var q3=G3;function th(){return r2=th=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},th.apply(this,arguments)}var r2=th;function Q3(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}var Z3=Q3,J3=Z3;function eP(e,t){if(e==null)return{};var n=J3(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(n[r]=e[r]))}return n}var tP=eP;function nP(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var rP=nP;function e1(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function iP(e,t,n){return t&&e1(e.prototype,t),n&&e1(e,n),e}var oP=iP;function qi(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?qi=function(n){return typeof n}:qi=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},qi(e)}function Ol(e){return typeof Symbol=="function"&&qi(Symbol.iterator)==="symbol"?nh=Ol=function(n){return qi(n)}:nh=Ol=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":qi(n)},Ol(e)}var nh=Ol;function sP(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var aP=sP,lP=nh,cP=aP;function uP(e,t){return t&&(lP(t)==="object"||typeof t=="function")?t:cP(e)}var dP=uP;function rh(e){return i2=rh=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},rh(e)}var i2=rh;function ih(e,t){return o2=ih=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},ih(e,t)}var o2=ih,fP=o2;function hP(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&fP(e,t)}var pP=hP,gP=function(){},og=gP,wa={};function mP(e){return e&&e.__esModule?e:{default:e}}var fu=mP,hu={},s2=fu;Object.defineProperty(hu,"__esModule",{value:!0});hu.default=void 0;var vP=s2(C.exports);s2(og);var yP=function(t){t.index;var n=t.children;vP.default.Children.count(n)},xP=yP;hu.default=xP;var sg={},_a={};Object.defineProperty(_a,"__esModule",{value:!0});_a.default=void 0;var bP={RESISTANCE_COEF:.6,UNCERTAINTY_THRESHOLD:3};_a.default=bP;var a2=fu;Object.defineProperty(sg,"__esModule",{value:!0});sg.default=_P;var wP=a2(C.exports),t1=a2(_a);function _P(e){var t=e.children,n=e.startIndex,r=e.startX,i=e.pageX,o=e.viewLength,s=e.resistance,a=wP.default.Children.count(t)-1,l=n+(r-i)/o,c;return s?l<0?l=Math.exp(l*t1.default.RESISTANCE_COEF)-1:l>a&&(l=a+1-Math.exp((a-l)*t1.default.RESISTANCE_COEF)):l<0?(l=0,c=(l-n)*o+i):l>a&&(l=a,c=(l-n)*o+i),{index:l,startX:c}}var pu={},SP=fu;Object.defineProperty(pu,"__esModule",{value:!0});pu.default=void 0;var n1=SP(C.exports),kP=function(t,n){var r=!1,i=function(u){return u?u.key:"empty"};if(t.children.length&&n.children.length){var o=n1.default.Children.map(t.children,i),s=o[t.index];if(s!=null){var a=n1.default.Children.map(n.children,i),l=a[n.index];s===l&&(r=!0)}}return r},CP=kP;pu.default=CP;var gu={};Object.defineProperty(gu,"__esModule",{value:!0});gu.default=void 0;function PP(e,t){var n=e%t;return n<0?n+t:n}var OP=PP;gu.default=OP;(function(e){var t=fu;Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"checkIndexBounds",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(e,"computeIndex",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(e,"constant",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(e,"getDisplaySameSlide",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(e,"mod",{enumerable:!0,get:function(){return s.default}});var n=t(hu),r=t(sg),i=t(_a),o=t(pu),s=t(gu)})(wa);var MP=n2,Xn=q3;Object.defineProperty(Nr,"__esModule",{value:!0});Nr.getDomTreeShapes=l2;Nr.findNativeHandler=c2;Nr.default=Nr.SwipeableViewsContext=void 0;var Ka=Xn(r2),EP=Xn(tP),NP=Xn(rP),TP=Xn(oP),AP=Xn(dP),$P=Xn(i2),RP=Xn(pP),En=MP(C.exports);Xn(wo.exports);Xn(og);var Ga=wa;function r1(e,t,n,r){return e.addEventListener(t,n,r),{remove:function(){e.removeEventListener(t,n,r)}}}var i1={container:{direction:"ltr",display:"flex",willChange:"transform"},slide:{width:"100%",WebkitFlexShrink:0,flexShrink:0,overflow:"auto"}},fn={root:{x:{overflowX:"hidden"},"x-reverse":{overflowX:"hidden"},y:{overflowY:"hidden"},"y-reverse":{overflowY:"hidden"}},flexDirection:{x:"row","x-reverse":"row-reverse",y:"column","y-reverse":"column-reverse"},transform:{x:function(t){return"translate(".concat(-t,"%, 0)")},"x-reverse":function(t){return"translate(".concat(t,"%, 0)")},y:function(t){return"translate(0, ".concat(-t,"%)")},"y-reverse":function(t){return"translate(0, ".concat(t,"%)")}},length:{x:"width","x-reverse":"width",y:"height","y-reverse":"height"},rotationMatrix:{x:{x:[1,0],y:[0,1]},"x-reverse":{x:[-1,0],y:[0,1]},y:{x:[0,1],y:[1,0]},"y-reverse":{x:[0,-1],y:[1,0]}},scrollPosition:{x:"scrollLeft","x-reverse":"scrollLeft",y:"scrollTop","y-reverse":"scrollTop"},scrollLength:{x:"scrollWidth","x-reverse":"scrollWidth",y:"scrollHeight","y-reverse":"scrollHeight"},clientLength:{x:"clientWidth","x-reverse":"clientWidth",y:"clientHeight","y-reverse":"clientHeight"}};function Td(e,t){var n=t.duration,r=t.easeFunction,i=t.delay;return"".concat(e," ").concat(n," ").concat(r," ").concat(i)}function Ad(e,t){var n=fn.rotationMatrix[t];return{pageX:n.x[0]*e.pageX+n.x[1]*e.pageY,pageY:n.y[0]*e.pageX+n.y[1]*e.pageY}}function qa(e){return e.touches=[{pageX:e.pageX,pageY:e.pageY}],e}function l2(e,t){for(var n=[];e&&e!==t&&e!==document.body&&!e.hasAttribute("data-swipeable");){var r=window.getComputedStyle(e);r.getPropertyValue("position")==="absolute"||r.getPropertyValue("overflow-x")==="hidden"?n=[]:(e.clientWidth>0&&e.scrollWidth>e.clientWidth||e.clientHeight>0&&e.scrollHeight>e.clientHeight)&&n.push({element:e,scrollWidth:e.scrollWidth,scrollHeight:e.scrollHeight,clientWidth:e.clientWidth,clientHeight:e.clientHeight,scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}),e=e.parentNode}return n}var Ur=null;function c2(e){var t=e.domTreeShapes,n=e.pageX,r=e.startX,i=e.axis;return t.some(function(o){var s=n>=r;(i==="x"||i==="y")&&(s=!s);var a=Math.round(o[fn.scrollPosition[i]]),l=a>0,c=a+o[fn.clientLength[i]]<o[fn.scrollLength[i]];return s&&c||!s&&l?(Ur=o.element,!0):!1})}var u2=En.createContext();Nr.SwipeableViewsContext=u2;var mu=function(e){(0,RP.default)(t,e);function t(n){var r;return(0,NP.default)(this,t),r=(0,AP.default)(this,(0,$P.default)(t).call(this,n)),r.rootNode=null,r.containerNode=null,r.ignoreNextScrollEvents=!1,r.viewLength=0,r.startX=0,r.lastX=0,r.vx=0,r.startY=0,r.isSwiping=void 0,r.started=!1,r.startIndex=0,r.transitionListener=null,r.touchMoveListener=null,r.activeSlide=null,r.indexCurrent=null,r.firstRenderTimeout=null,r.setRootNode=function(i){r.rootNode=i},r.setContainerNode=function(i){r.containerNode=i},r.setActiveSlide=function(i){r.activeSlide=i,r.updateHeight()},r.handleSwipeStart=function(i){var o=r.props.axis,s=Ad(i.touches[0],o);r.viewLength=r.rootNode.getBoundingClientRect()[fn.length[o]],r.startX=s.pageX,r.lastX=s.pageX,r.vx=0,r.startY=s.pageY,r.isSwiping=void 0,r.started=!0;var a=window.getComputedStyle(r.containerNode),l=a.getPropertyValue("-webkit-transform")||a.getPropertyValue("transform");if(l&&l!=="none"){var c=l.split("(")[1].split(")")[0].split(","),u=window.getComputedStyle(r.rootNode),d=Ad({pageX:parseInt(c[4],10),pageY:parseInt(c[5],10)},o);r.startIndex=-d.pageX/(r.viewLength-parseInt(u.paddingLeft,10)-parseInt(u.paddingRight,10))||0}},r.handleSwipeMove=function(i){if(!r.started){r.handleTouchStart(i);return}if(!(Ur!==null&&Ur!==r.rootNode)){var o=r.props,s=o.axis,a=o.children,l=o.ignoreNativeScroll,c=o.onSwitching,u=o.resistance,d=Ad(i.touches[0],s);if(r.isSwiping===void 0){var f=Math.abs(d.pageX-r.startX),g=Math.abs(d.pageY-r.startY),v=f>g&&f>Ga.constant.UNCERTAINTY_THRESHOLD;if(!u&&(s==="y"||s==="y-reverse")&&(r.indexCurrent===0&&r.startX<d.pageX||r.indexCurrent===En.Children.count(r.props.children)-1&&r.startX>d.pageX)){r.isSwiping=!1;return}if(f>g&&i.preventDefault(),v===!0||g>Ga.constant.UNCERTAINTY_THRESHOLD){r.isSwiping=v,r.startX=d.pageX;return}}if(r.isSwiping===!0){i.preventDefault(),r.vx=r.vx*.5+(d.pageX-r.lastX)*.5,r.lastX=d.pageX;var y=(0,Ga.computeIndex)({children:a,resistance:u,pageX:d.pageX,startIndex:r.startIndex,startX:r.startX,viewLength:r.viewLength}),p=y.index,m=y.startX;if(Ur===null&&!l){var x=l2(i.target,r.rootNode),b=c2({domTreeShapes:x,startX:r.startX,pageX:d.pageX,axis:s});if(b)return}m?r.startX=m:Ur===null&&(Ur=r.rootNode),r.setIndexCurrent(p);var w=function(){c&&c(p,"move")};(r.state.displaySameSlide||!r.state.isDragging)&&r.setState({displaySameSlide:!1,isDragging:!0},w),w()}}},r.handleSwipeEnd=function(){if(Ur=null,!!r.started&&(r.started=!1,r.isSwiping===!0)){var i=r.state.indexLatest,o=r.indexCurrent,s=i-o,a;Math.abs(r.vx)>r.props.threshold?r.vx>0?a=Math.floor(o):a=Math.ceil(o):Math.abs(s)>r.props.hysteresis?a=s>0?Math.floor(o):Math.ceil(o):a=i;var l=En.Children.count(r.props.children)-1;a<0?a=0:a>l&&(a=l),r.setIndexCurrent(a),r.setState({indexLatest:a,isDragging:!1},function(){r.props.onSwitching&&r.props.onSwitching(a,"end"),r.props.onChangeIndex&&a!==i&&r.props.onChangeIndex(a,i,{reason:"swipe"}),o===i&&r.handleTransitionEnd()})}},r.handleTouchStart=function(i){r.props.onTouchStart&&r.props.onTouchStart(i),r.handleSwipeStart(i)},r.handleTouchEnd=function(i){r.props.onTouchEnd&&r.props.onTouchEnd(i),r.handleSwipeEnd(i)},r.handleMouseDown=function(i){r.props.onMouseDown&&r.props.onMouseDown(i),i.persist(),r.handleSwipeStart(qa(i))},r.handleMouseUp=function(i){r.props.onMouseUp&&r.props.onMouseUp(i),r.handleSwipeEnd(qa(i))},r.handleMouseLeave=function(i){r.props.onMouseLeave&&r.props.onMouseLeave(i),r.started&&r.handleSwipeEnd(qa(i))},r.handleMouseMove=function(i){r.props.onMouseMove&&r.props.onMouseMove(i),r.started&&r.handleSwipeMove(qa(i))},r.handleScroll=function(i){if(r.props.onScroll&&r.props.onScroll(i),i.target===r.rootNode){if(r.ignoreNextScrollEvents){r.ignoreNextScrollEvents=!1;return}var o=r.state.indexLatest,s=Math.ceil(i.target.scrollLeft/i.target.clientWidth)+o;r.ignoreNextScrollEvents=!0,i.target.scrollLeft=0,r.props.onChangeIndex&&s!==o&&r.props.onChangeIndex(s,o,{reason:"focus"})}},r.updateHeight=function(){if(r.activeSlide!==null){var i=r.activeSlide.children[0];i!==void 0&&i.offsetHeight!==void 0&&r.state.heightLatest!==i.offsetHeight&&r.setState({heightLatest:i.offsetHeight})}},r.state={indexLatest:n.index,isDragging:!1,renderOnlyActive:!n.disableLazyLoading,heightLatest:0,displaySameSlide:!0},r.setIndexCurrent(n.index),r}return(0,TP.default)(t,[{key:"componentDidMount",value:function(){var r=this;this.transitionListener=r1(this.containerNode,"transitionend",function(i){i.target===r.containerNode&&r.handleTransitionEnd()}),this.touchMoveListener=r1(this.rootNode,"touchmove",function(i){r.props.disabled||r.handleSwipeMove(i)},{passive:!1}),this.props.disableLazyLoading||(this.firstRenderTimeout=setTimeout(function(){r.setState({renderOnlyActive:!1})},0)),this.props.action&&this.props.action({updateHeight:this.updateHeight})}},{key:"UNSAFE_componentWillReceiveProps",value:function(r){var i=r.index;typeof i=="number"&&i!==this.props.index&&(this.setIndexCurrent(i),this.setState({displaySameSlide:(0,Ga.getDisplaySameSlide)(this.props,r),indexLatest:i}))}},{key:"componentWillUnmount",value:function(){this.transitionListener.remove(),this.touchMoveListener.remove(),clearTimeout(this.firstRenderTimeout)}},{key:"getSwipeableViewsContext",value:function(){var r=this;return{slideUpdateHeight:function(){r.updateHeight()}}}},{key:"setIndexCurrent",value:function(r){if(!this.props.animateTransitions&&this.indexCurrent!==r&&this.handleTransitionEnd(),this.indexCurrent=r,this.containerNode){var i=this.props.axis,o=fn.transform[i](r*100);this.containerNode.style.WebkitTransform=o,this.containerNode.style.transform=o}}},{key:"handleTransitionEnd",value:function(){!this.props.onTransitionEnd||this.state.displaySameSlide||this.state.isDragging||this.props.onTransitionEnd()}},{key:"render",value:function(){var r=this,i=this.props;i.action;var o=i.animateHeight,s=i.animateTransitions,a=i.axis,l=i.children,c=i.containerStyle,u=i.disabled;i.disableLazyLoading;var d=i.enableMouseEvents;i.hysteresis,i.ignoreNativeScroll,i.index,i.onChangeIndex,i.onSwitching,i.onTransitionEnd,i.resistance;var f=i.slideStyle,g=i.slideClassName,v=i.springConfig,y=i.style;i.threshold;var p=(0,EP.default)(i,["action","animateHeight","animateTransitions","axis","children","containerStyle","disabled","disableLazyLoading","enableMouseEvents","hysteresis","ignoreNativeScroll","index","onChangeIndex","onSwitching","onTransitionEnd","resistance","slideStyle","slideClassName","springConfig","style","threshold"]),m=this.state,x=m.displaySameSlide,b=m.heightLatest,w=m.indexLatest,_=m.isDragging,k=m.renderOnlyActive,P=u?{}:{onTouchStart:this.handleTouchStart,onTouchEnd:this.handleTouchEnd},M=!u&&d?{onMouseDown:this.handleMouseDown,onMouseUp:this.handleMouseUp,onMouseLeave:this.handleMouseLeave,onMouseMove:this.handleMouseMove}:{},E=(0,Ka.default)({},i1.slide,f),A,j;if(_||!s||x)A="all 0s ease 0s",j="all 0s ease 0s";else if(A=Td("transform",v),j=Td("-webkit-transform",v),b!==0){var I=", ".concat(Td("height",v));A+=I,j+=I}var W={height:null,WebkitFlexDirection:fn.flexDirection[a],flexDirection:fn.flexDirection[a],WebkitTransition:j,transition:A};if(!k){var Z=fn.transform[a](this.indexCurrent*100);W.WebkitTransform=Z,W.transform=Z}return o&&(W.height=b),En.createElement(u2.Provider,{value:this.getSwipeableViewsContext()},En.createElement("div",(0,Ka.default)({ref:this.setRootNode,style:(0,Ka.default)({},fn.root[a],y)},p,P,M,{onScroll:this.handleScroll}),En.createElement("div",{ref:this.setContainerNode,style:(0,Ka.default)({},W,i1.container,c),className:"react-swipeable-view-container"},En.Children.map(l,function(V,K){if(k&&K!==w)return null;var q,ie=!0;return K===w&&(ie=!1,o&&(q=r.setActiveSlide,E.overflowY="hidden")),En.createElement("div",{ref:q,style:E,className:g,"aria-hidden":ie,"data-swipeable":"true"},V)}))))}}]),t}(En.Component);mu.displayName="ReactSwipableView";mu.propTypes={};mu.defaultProps={animateHeight:!1,animateTransitions:!0,axis:"x",disabled:!1,disableLazyLoading:!1,enableMouseEvents:!1,hysteresis:.6,ignoreNativeScroll:!1,index:0,threshold:5,springConfig:{duration:"0.35s",easeFunction:"cubic-bezier(0.15, 0.3, 0.25, 1)",delay:"0s"},resistance:!1};var LP=mu;Nr.default=LP;(function(e){var t=n2;Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(e,"SwipeableViewsContext",{enumerable:!0,get:function(){return n.SwipeableViewsContext}});var n=t(Nr)})(t2);var d2=b_(t2);const DP=H.div`
  padding: 7.5rem 0.5rem;

  .navigation {
    width: 100%;
    display: flex;
    align-items: center;
    margin: 10px 0;
    font-size: 1.8rem;
    font-weight: 500;

    & > div {
      border-bottom: 2px solid transparent;
      padding: 5px 10px;
      cursor: pointer;
      user-select: none;
      color: ${e=>e.theme.textColor};
    }

    .nav-active {
      border-bottom: 2px solid ${e=>e.theme.color};
      color: ${e=>e.theme.color};
      transition: 0.3s;
    }
  }
`,ag=({tabs:e=[]})=>{const[t,n]=C.exports.useState(0);return S(DP,{children:[h("div",{className:"tab-manager",children:h("div",{className:"navigation",children:e.map((r,i)=>h("div",{className:t===i?"nav-active":"",onClick:()=>n(i),children:r.title},i))})}),h(d2,{index:t,onChangeIndex:n,children:e.map((r,i)=>h("div",{children:r.component},i))})]})},bi=()=>{C.exports.useState(!0);const{ipos:e}=bt(t=>t.ipos);return h(Ve,{children:S(V3,{children:[h("div",{className:"ipos-mobile1",children:h(ag,{tabs:[{name:"all",title:"All",component:h("div",{className:"container",children:e.map((t,n)=>h(Nd,{ipo:t,imageId:n},n))})},{name:"mainline",title:"Mainline",component:h("div",{className:"container",children:e.map((t,n)=>t.type!=="mainline"?null:h(Nd,{ipo:t,imageId:n},n))})},{name:"sme",title:"SME",component:h("div",{className:"container",children:e.map((t,n)=>t.type!=="sme"?null:h(Nd,{ipo:t,imageId:n},n))})}]})}),h("div",{className:"browse-desktop",children:S("div",{className:"ipo-box",children:[h("h1",{className:"page-title",children:"Browse"}),h(Y3,{}),h("div",{className:"nav",children:S("ul",{children:[h("li",{children:h(ir,{to:"/browse",title:"Categories"})}),h("li",{children:h(ir,{to:"/browse/all",title:"Live Channels"})})]})}),S("div",{className:"search-filter",children:[S("div",{className:"search-box",children:[h("span",{children:"Filter by"}),h(e2,{placeholder:"Search Tags"})]}),S("div",{className:"filter",children:[h("span",{children:"Sort by"}),S("div",{className:"sort",children:["Recommended For You",h("div",{className:"sort-icon",children:h(Ib,{})})]})]})]}),h(Dp,{})]})})]})})},zP=H.div`
  //Following mobile
  .follow-mobile {
    display: none;

    .follow-box {
      padding: 75px 10px;
      background-color: ${e=>e.theme.header};
      color: ${e=>e.theme.textColor};
      position: relative;
      z-index: 3;
      animation: pageAnim 0.3s ease-in-out;

      h1 {
        background-color: ${e=>e.theme.header};
      }

      h3 {
        font-size: 18px;
        width: 100%;
        position: sticky;
        top: 50px;
        padding: 8px 0;
        background-color: ${e=>e.theme.header};
      }
    }

    @media (max-width: 767px) {
      display: block;
    }
  }

  //Following Desktop
  .follow-desktop {
    display: none;

    .follow-box {
      display: block;
      padding: 8.5rem 1rem;

      .page-title {
        color: ${e=>e.theme.textColor};
        font-size: 50px;
        padding: 30px 0;
      }

      .nav {
        ul {
          display: flex;
          gap: 5px;

          li {
            font-size: 18px;
            height: 35px;
            font-weight: 500;
            margin-right: 10px;
          }
        }
      }
    }

    @media (min-width: 768px) {
      display: block;
    }
  }
`,IP=H.div`
  .channel-box {
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    z-index: 2;

    .live-screen {
      position: relative;
      width: 35%;
      min-width: 150px !important;
      min-height: 50px;
      background-color: black;
      border-radius: 3px;
      overflow: hidden;
      z-index: -1;

      span {
        position: absolute;
        bottom: 2px;
        left: 5px;
        color: #fff;
        font-size: 12px;
        display: flex;
        align-items: center;
        text-shadow: 0 1px 1px #000;
        gap: 3px;

        .live-icon {
          color: red;
          font-size: 9px;
        }
      }
    }

    .live-info {
      flex: 1;
      padding: 0 10px;

      .user {
        display: flex;

        .user-pp {
          width: 15px;
          height: 15px;
          border-radius: 999px;
          overflow: hidden;
        }

        .user-name {
          padding-left: 5px;
          color: ${e=>e.theme.textColor};
          font-weight: 600;
        }
      }

      .title,
      .game {
        color: ${e=>e.theme.soft};
        font-size: 14px;
      }

      .tags {
        display: flex;
        font-size: 13px;

        .tag {
          padding: 2px 5px;
          background-color: ${e=>e.theme.textColor}10;
          border-radius: 999px;
          color: ${e=>e.theme.textColor};
        }
      }
    }
  }
`,jP=({user:e,imageId:t})=>h(IP,{children:S("div",{className:"channel-box",children:[S("div",{className:"live-screen",children:[h("img",{src:e.liveScreen,alt:""}),S("span",{children:[h(Xp,{className:"live-icon"})," ",e.viewers]})]}),S("div",{className:"live-info",children:[S("div",{className:"user",children:[h("div",{className:"user-pp",children:h("img",{src:`https://i.pravatar.cc/5${t}`,alt:""})}),h("div",{className:"user-name",children:e.username})]}),h("div",{className:"title",children:e.title}),h("div",{className:"game",children:e.game}),h("div",{className:"tags",children:h("div",{className:"tag",children:e.tag})})]})]})}),FP=()=>{const{users:e}=bt(t=>t.user);return h(Ve,{children:e.map((t,n)=>h(jP,{user:t,imageId:n},n))})},BP=H.div`
  .offline-box {
    display: flex;
    align-items: center;
    width: 100%;
    margin: 10px 0 20px 0;

    .left {
      width: 30px;
      margin-right: 10px;

      .pp {
        border-radius: 999px;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
      }
    }

    .right {
      font-size: 15px;
      color: ${e=>e.theme.textColor};

      .username {
        font-weight: 600;
        cursor: pointer;
      }
      .videos {
        font-size: 13px;
      }
    }
  }
`,WP=({user:e,imageId:t})=>h(BP,{children:S("div",{className:"offline-box",children:[h("div",{className:"left",children:h("div",{className:"pp",children:h("img",{src:`https://i.pravatar.cc/5${t}`,alt:""})})}),S("div",{className:"right",children:[h("div",{className:"username",children:e.username}),h("div",{className:"videos",children:"7 new videos"})]})]})}),VP=()=>{const{users:e}=bt(t=>t.user);return h(Ve,{children:e.map((t,n)=>{if(n<3)return h(WP,{user:t,imageId:n},n)})})},HP=()=>(Xt(),h(Ve,{children:S(zP,{children:[h("div",{className:"follow-mobile",children:S("div",{className:"follow-box",children:[h("h1",{children:"Following"}),h("h3",{children:"Your Live Channels"}),h(FP,{}),h("h3",{children:"Your Offline Channels"}),h(VP,{})]})}),h("div",{className:"follow-desktop",children:S("div",{className:"follow-box",children:[h("div",{className:"nav",children:S("ul",{children:[h("li",{children:h(ir,{to:"/following",title:"Overview"})}),h("li",{children:h(ir,{to:"/following/live",title:"Live"})}),h("li",{children:h(ir,{to:"/following/videos",title:"Videos"})}),h("li",{children:h(ir,{to:"/following/categories",title:"Categories"})})]})}),h("div",{className:"page",children:h(Dp,{})})]})})]})})),UP=H.div`
  .channel-box {
    margin-top: 10px;
    flex: 1;

    .live-screen {
      cursor: pointer;
      transition: 0.2s;
      position: relative;

      img {
        transition: 0.2s;
      }

      .live {
        position: absolute;
        top: 7%;
        left: 5%;
        color: #fff;
        background-color: red;
        padding: 2px 4px;
        font-size: 13px;
        text-transform: uppercase;
        font-weight: 500;
        border-radius: 5px;
        transition: 0.2s;
      }
      .viewers {
        position: absolute;
        bottom: 7%;
        left: 5%;
        padding: 2px 3px;
        color: #fff;
        font-size: 13px;
        border-radius: 5px;
        background-color: rgba(0, 0, 0, 0.7);
        transition: 0.2s;
      }
      .invisible {
        display: none;
      }

      .video {
        display: none;

        .video-tag {
          position: absolute;
          padding: 2px 3px;
          color: #fff;
          font-size: 13px;
          border-radius: 5px;
          transition: 0.2s;
        }
        .top {
          top: 7%;
          left: 5%;
          background-color: rgba(0, 0, 0, 0.7);
        }
        .bottom {
          position: absolute;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.7);
          bottom: 7%;
          left: 5%;
        }

        .bottom-right {
          bottom: 7%;
          right: 5%;
          background-color: rgba(0, 0, 0, 0.7);
        }
        &.video-visible {
          display: block;
        }
      }

      &:hover {
        background-color: ${e=>e.theme.color};

        img,
        .live,
        .viewers,
        .video > * {
          transform: translate(6px, -3px);
        }
      }
    }

    .channel-info {
      display: flex;
      justify-content: space-between;
      padding: 5px;

      .left {
        display: flex;

        .pp {
          display: block;

          img {
            width: 40px;
            height: 40px;
            border-radius: 999px;
            cursor: pointer;
          }
        }

        .profile-info {
          padding: 0 10px;
          font-size: 14px;
          color: ${e=>e.theme.textColor};

          .title {
            font-weight: 500;
          }
          .username {
            padding: 5px 0;
          }

          .username,
          .game {
            cursor: pointer;
            color: ${e=>e.theme.soft};
          }

          .tags {
            display: flex;
            gap: 5px;
            align-items: center;
            margin-top: 5px;

            .tag {
              padding: 4px 8px;
              background-color: ${e=>e.theme.hover};
              border-radius: 10px;
              cursor: pointer;
            }
          }
        }
      }

      .right {
        cursor: pointer;
      }
    }
  }
  @media (max-width: 1679px) {
    &:nth-last-child(1) {
      display: none;
    }
  }
  @media (max-width: 1439px) {
    &:nth-last-child(2) {
      display: none;
    }
  }
  @media (max-width: 1279px) {
    &:nth-last-child(3) {
      display: none;
    }
  }
  @media (max-width: 1023px) {
    &:nth-last-child(4) {
      display: none;
    }
  }
`,YP=H.div`
  .channels-box {
    display: block;
    margin-top: 30px;
    color: ${e=>e.theme.textColor};

    h1 {
      font-size: 18px;
      font-weight: 500;
      padding: 5px 0;
    }

    .list {
      display: flex;
      gap: 10px;
    }
  }
`,XP=({user:e,imageId:t,video:n})=>h(UP,{children:S("div",{className:"channel-box",children:[S("div",{className:"live-screen",children:[h("img",{src:e.liveScreen,alt:""}),h("div",{className:`live ${n?"invisible":""}`,children:"live"}),h("div",{className:`viewers ${n?"invisible":""}`,children:"333 viewers"}),S("div",{className:`video ${n?"video-visible":""}`,children:[h("div",{className:"video-tag top",children:"11:44"}),h("div",{className:"video-tag bottom-right",children:"4 hours ago"}),h("div",{className:"video-tag bottom",children:"188 views"})]})]}),S("div",{className:"channel-info",children:[S("div",{className:"left",children:[h("div",{className:"pp",children:h("img",{src:`https://i.pravatar.cc/5${t}`,alt:""})}),S("div",{className:"profile-info",children:[h("div",{className:"title",children:e.title}),h("div",{className:"username",children:e.username}),h("div",{className:"game",children:e.game}),S("div",{className:"tags",children:[h("div",{className:"tag",children:"English"}),h("div",{className:"tag",children:"Esports"})]})]})]}),h("div",{className:"right",children:h(Kp,{})})]})]})}),ct=({channelTitle:e,video:t})=>{const{users:n}=bt(r=>r.user);return h(YP,{children:S("div",{className:"channels-box",children:[e&&h("h1",{children:e}),h("div",{className:"list",children:n.map((r,i)=>{if(i<6)return h(XP,{user:r,imageId:i,video:t},i)})})]})})},$d=()=>S(Ve,{children:[h(ct,{}),h(ct,{}),h(ct,{}),h(ct,{}),h(ct,{}),h(ct,{}),h(ct,{}),h(ct,{})]}),KP=H.div`
  display: block;
  width: 100%;
  padding: 0 5px;

  .game-box {
    font-size: 15px;
    color: ${e=>e.theme.textColor};

    .game-picture {
      cursor: pointer;
      transition: 0.2s;

      img {
        width: 100%;
        transition: 0.2s;
      }

      &:hover {
        background-color: ${e=>e.theme.color};

        img {
          transform: translate(6px, -3px);
        }
      }
    }

    .game-name {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .name {
        font-weight: 500;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        line-height: 1.6;
        cursor: pointer;
      }

      .other-icon {
        font-size: 13px;
        cursor: pointer;
      }
    }

    .game-viewers {
      display: inline-block;
      font-size: 14px;
      line-height: 1.6;
      color: ${e=>e.theme.soft};
    }

    .tags {
      font-size: 14px;
      margin-top: 5px;

      .tag {
        display: inline-block;
        padding: 4px 8px;
        background-color: ${e=>e.theme.hover};
        border-radius: 10px;
        cursor: pointer;
      }
    }
  }

  @media (max-width: 1919px) {
    &:nth-last-child(-n + 3) {
      display: none;
    }
  }
  @media (max-width: 1679px) {
    &:nth-last-child(-n + 4) {
      display: none;
    }
  }
  @media (max-width: 1439px) {
    &:nth-last-child(-n + 5) {
      display: none;
    }
  }
  @media (max-width: 1279px) {
    &:nth-last-child(-n + 7) {
      display: none;
    }
  }
  @media (max-width: 1023px) {
    &:nth-last-child(-n + 8) {
      display: none;
    }
  }
  @media (max-width: 833px) {
    &:nth-last-child(-n + 9) {
      display: none;
    }
  }
`,GP=H.div`
  .categories-box {
    display: block;
    margin-top: 30px;

    h1 {
      font-size: 18px;
      font-weight: 500;
      padding: 5px 0;

      span {
        cursor: pointer;
        color: ${e=>e.theme.color};
        font-weight: 600;

        &:hover {
          text-decoration: underline;
        }
      }
    }

    .list {
      display: grid;
      margin-top: 10px;
      grid-template-columns: repeat(12, calc(100% / 12));
    }

    @media (max-width: 1919px) {
      .list {
        grid-template-columns: repeat(9, calc(100% / 9));
      }
    }
    @media (max-width: 1679px) {
      .list {
        grid-template-columns: repeat(8, calc(100% / 8));
      }
    }
    @media (max-width: 1439px) {
      .list {
        grid-template-columns: repeat(7, calc(100% / 7));
      }
    }
    @media (max-width: 1279px) {
      .list {
        grid-template-columns: repeat(5, calc(100% / 5));
      }
    }
    @media (max-width: 1023px) {
      .list {
        grid-template-columns: repeat(4, calc(100% / 4));
      }
    }
    @media (max-width: 833px) {
      .list {
        grid-template-columns: repeat(3, calc(100% / 3));
      }
    }
  }
`,qP=({game:e})=>h(KP,{children:S("div",{className:"game-box",children:[h("div",{className:"game-picture",children:h("img",{src:e.image,alt:""})}),S("div",{className:"game-name",children:[h("div",{className:"name",children:e.name}),h("div",{className:"other-icon",children:h(Kp,{})})]}),S("div",{className:"game-viewers",children:[e.viewer," viewers"]}),h("div",{className:"tags",children:h("div",{className:"tag",children:"English"})})]})}),f2=({title:e,boldTitle:t})=>{const{games:n}=bt(r=>r.category);return h(GP,{children:S("div",{className:"categories-box",children:[S("h1",{children:[h("span",{children:t})," ",e]}),h("div",{className:"list",children:n.map((r,i)=>h(qP,{game:r},i))})]})})},QP=H.div`
  .show-more {
    display: flex;
    align-items: center;
    margin: 30px 0;

    span {
      font-size: 13px;
      font-weight: 600;
      padding: 5px 15px;
      margin: 0 10px;
      background-color: ${e=>e.theme.bodyDesktop};
      color: ${e=>e.theme.color};
      display: flex;
      align-items: center;
      cursor: pointer;
      border-radius: 5px;

      .down-icon {
        font-size: 20px;
      }

      &:hover {
        background-color: ${e=>e.theme.hover};
      }
    }
  }

  .show-more::before,
  .show-more::after {
    content: "";
    height: 1px;
    flex: 1;
    background-color: ${e=>e.theme.hover};
  }
`,Qa=({title:e})=>h(QP,{children:h("div",{className:"show-more",children:e&&S("span",{children:[e,h(Ib,{className:"down-icon"})]})})}),ZP=()=>S("div",{className:"overview-box",children:[h(ct,{channelTitle:"Live channels"}),h(Qa,{title:"Show more"}),h(ct,{channelTitle:"Recommended channels"}),h(Qa,{title:"Show more"}),h(ct,{channelTitle:"Latest videos",video:!0}),h(Qa,{title:"Show more"}),h(f2,{title:"Live categories"}),h(Qa,{})]}),JP=()=>h(Ve,{children:h(ct,{channelTitle:"Live channels"})}),eO=()=>h(Ve,{children:S("div",{className:"overview-page",children:[h(ct,{channelTitle:"Latest videos",video:!0}),h(ct,{video:!0}),h(ct,{video:!0}),h(ct,{video:!0})]})}),tO=()=>h(Ve,{children:h(f2,{title:"Live categories"})}),nO=H.div`
  // Mobile
  .offers-mobile {
    display: none;

    .offers-box {
      padding: 75px 10px;
      color: ${e=>e.theme.textColor};
      background-color: ${e=>e.theme.header};
      position: relative;
      z-index: 3;
      animation: pageAnim 0.3s ease-in-out;

      .navigation {
        width: 100%;
        display: flex;
        align-items: center;
        margin: 10px 0;
        font-size: 1.8rem;
        font-weight: 500;

        & > div {
          border-bottom: 2px solid transparent;
          padding: 5px 10px;
          cursor: pointer;
          user-select: none;
        }

        .nav-active {
          border-bottom: 2px solid ${e=>e.theme.color};
          color: ${e=>e.theme.color};
          transition: 0.3s;
        }
      }
    }

    @media (max-width: 767px) {
      display: block;
    }
  }

  //Offers Desktop
  .offers-desktop {
    display: none;

    .offers-box {
      display: block;

      .page-title {
        color: ${e=>e.theme.textColor};
        font-size: 50px;
        padding: 30px 0;
      }

      .nav {
        ul {
          display: flex;
          gap: 5px;

          li {
            font-size: 18px;
            height: 35px;
            font-weight: 500;
            margin-right: 10px;
          }
        }
      }
    }

    @media (min-width: 768px) {
      display: block;
    }
  }
`,rO=H.div`
  border-bottom: 1px solid #ebe7e7;
  padding-bottom: 10px;

  .offer-box {
    .offer-name {
      padding: 10px 0;
      font-weight: 500;
      font-size: 1.6rem;
    }

    .know-more button {
      margin-top: 5px;
      background-color: rgb(145, 71, 255);
      padding: 10px 14px;
      width: 115px;
      border-radius: 5px;
      color: rgb(255, 255, 255);
      font-weight: 600;
      cursor: pointer;
      -webkit-transition: all 0.3s ease 0s;
      transition: all 0.3s ease 0s;
    }
  }
`,o1=({offer:e})=>h(rO,{children:S("div",{className:"offer-box",children:[h("h2",{className:"offer-name",children:e.name}),h(Oe,{to:"/{offer.href}",children:h("div",{className:"offer-picture",children:h("img",{src:e.image,alt:""})})}),h("div",{className:"know-more",children:h("button",{children:"Know More..."})})]})}),iO=()=>{const{offers:e}=bt(t=>t.offers);return h(Ve,{children:h("div",{className:"offers-mobile",children:S(nO,{children:[h(ag,{tabs:[{name:"brokers",title:"Brokers",component:h("div",{className:"container",children:e.map((t,n)=>{if(t.type!=="advisor")return h(o1,{offer:t,imageId:n},n)})})},{name:"advisors",title:"Advisors",component:h("div",{className:"container",children:e.map((t,n)=>{if(t.type!=="advisor")return h(o1,{offer:t,imageId:n},n)})})}]}),h("div",{className:"offers-desktop",children:S("div",{className:"offers-box",children:[h("h1",{className:"page-title",children:"Offers"}),h("div",{className:"nav",children:S("ul",{children:[h("li",{children:h(ir,{to:"/offers/brokers",title:"Brokers"})}),h("li",{children:h(ir,{to:"/offers/advisors",title:"Advisors"})})]})}),h("div",{className:"page",children:h(Dp,{})})]})})]})})})},oO=H.div`
  border-bottom: 1px solid #ebe7e7;
  padding-bottom: 10px;

  .offer-box {
    display: flex;
    background: white;
    padding: 2rem;
    margin: 1rem 0;

    .left-side {
      display: flex;
      flex-direction: column;

      .picture img {
        width: 120px;
      }

      .name {
        font-size: 1.6rem;
        font-weight: 500;
      }
    }

    .right-side {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      padding: 10px;

      .available-options,
      .action-buttons {
        display: flex;
        list-style: none;
        gap: 10px;
        margin-bottom: 2rem;
      }

      .action-buttons {
        li {
          background-color: #9147ff;
        }
      }
      li {
        padding: 1rem 2rem;
        font-size: 1.4rem;
        background-color: #c4834a;
        color: white;
      }

      .new-info {
        font-size: 1.4rem;

        li {
          color: inherit;
          background: inherit;
        }
      }
    }

    @media (min-width: 768px) {
      // display: block;
    }
  }
`,s1=({type:e=""})=>{const{offers:t}=bt(n=>n.offers);return h(oO,{children:t.map((n,r)=>{if(n.type===e)return S("div",{className:`offer-box offer-${n.id}`,children:[S("div",{className:"left-side",children:[h("div",{className:"picture",children:h("img",{src:n.image,alt:""})}),h("h2",{className:"name",children:n.name})]}),S("div",{className:"right-side",children:[S("div",{children:[S("ul",{className:"available-options",children:[h("li",{children:"Equity"}),h("li",{children:"Future"}),h("li",{children:"Option"}),h("li",{children:"Commodity"})]}),S("ul",{className:"new-info",children:[h("li",{children:"Account Opening"}),h("li",{children:"Account Maintenance"}),h("li",{children:"Account Maintenance"}),h("li",{children:"Account Maintenance"})]})]}),S("ul",{className:"action-buttons",children:[h("li",{children:"View Details"}),h("li",{children:"Open Account"})]})]})]},n.id)})})},oh=e=>e?e.toLowerCase().replace(/\b\w/g,t=>t.toUpperCase()):"",sO=H.div`
  .scheme-container {
    display: flex;
    -webkit-box-align: center;
    align-items: start;
    width: 100%;
    border-bottom: 1px solid rgb(224, 224, 224);
    padding: 1rem;
    border-radius: 1rem;
  }

  img {
    width: 60px;
    height: 60px;
    border-radius: 20%;
    object-fit: contain;
    border: 1px solid #ececec;
  }

  .info {
    flex-grow: 1;
    margin: 0 1rem;
    padding-top: 1rem;

    .name {
      font-size: 1.2rem;
      color: ${e=>e.theme.textColor};
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .description {
      font-size: 1.2rem;
      color: #757575;
      margin-top: 4px;
      // text-transform: lowercase;
    }
  }

  .return div {
    font-size: 1.2rem;
    font-weight: 600;
    color: #757575;
    padding-top: 1rem;

    .popular {
      display: none;
    }
  }
`,h2=({scheme:e,activeFilter:t})=>h(sO,{children:h(Oe,{className:"link",to:`/mutual-fund/${e.Scheme_Code}`,title:e.name,children:S("div",{className:"scheme-container",children:[h("div",{className:"image",children:h("img",{src:`./images/amc-logo/${e.amc_logo}`,alt:""})}),S("div",{className:"info",children:[h("div",{className:"name",children:oh(e.Scheme_Name)}),S("div",{className:"description",children:[h("strong",{children:"Type: "})," ",oh(e.Scheme_Type)]})]}),h("div",{className:"return",children:S("div",{className:"1",children:[h("span",{className:"normal",children:"10%"}),S("span",{className:"popular",children:["3Y ",h("br",{})," 15%"]})]})})]})})}),aO={black:"#000",white:"#fff"};var Xs=aO;const lO={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"};var wi=lO;const cO={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff"};var _i=cO;const uO={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"};var Si=uO;const dO={50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea"};var ki=dO;const fO={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"};var Ci=fO;const hO={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00"};var Fo=hO;const pO={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"};var gO=pO;function ci(e){let t="https://mui.com/production-error/?code="+e;for(let n=1;n<arguments.length;n+=1)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified MUI error #"+e+"; visit "+t+" for the full message."}var mO=Object.freeze(Object.defineProperty({__proto__:null,default:ci},Symbol.toStringTag,{value:"Module"})),p2="$$material",vO=!1;function yO(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function xO(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var bO=function(){function e(n){var r=this;this._insertTag=function(i){var o;r.tags.length===0?r.insertionPoint?o=r.insertionPoint.nextSibling:r.prepend?o=r.container.firstChild:o=r.before:o=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,o),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!vO:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(xO(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var o=yO(i);try{o.insertRule(r,o.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){var i;return(i=r.parentNode)==null?void 0:i.removeChild(r)}),this.tags=[],this.ctr=0},e}(),ot="-ms-",_c="-moz-",oe="-webkit-",g2="comm",lg="rule",cg="decl",wO="@import",m2="@keyframes",_O="@layer",SO=Math.abs,vu=String.fromCharCode,kO=Object.assign;function CO(e,t){return tt(e,0)^45?(((t<<2^tt(e,0))<<2^tt(e,1))<<2^tt(e,2))<<2^tt(e,3):0}function v2(e){return e.trim()}function PO(e,t){return(e=t.exec(e))?e[0]:e}function se(e,t,n){return e.replace(t,n)}function sh(e,t){return e.indexOf(t)}function tt(e,t){return e.charCodeAt(t)|0}function Ks(e,t,n){return e.slice(t,n)}function hn(e){return e.length}function ug(e){return e.length}function Za(e,t){return t.push(e),e}function OO(e,t){return e.map(t).join("")}var yu=1,lo=1,y2=0,Mt=0,We=0,So="";function xu(e,t,n,r,i,o,s){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:yu,column:lo,length:s,return:""}}function Bo(e,t){return kO(xu("",null,null,"",null,null,0),e,{length:-e.length},t)}function MO(){return We}function EO(){return We=Mt>0?tt(So,--Mt):0,lo--,We===10&&(lo=1,yu--),We}function $t(){return We=Mt<y2?tt(So,Mt++):0,lo++,We===10&&(lo=1,yu++),We}function _n(){return tt(So,Mt)}function Ml(){return Mt}function Sa(e,t){return Ks(So,e,t)}function Gs(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function x2(e){return yu=lo=1,y2=hn(So=e),Mt=0,[]}function b2(e){return So="",e}function El(e){return v2(Sa(Mt-1,ah(e===91?e+2:e===40?e+1:e)))}function NO(e){for(;(We=_n())&&We<33;)$t();return Gs(e)>2||Gs(We)>3?"":" "}function TO(e,t){for(;--t&&$t()&&!(We<48||We>102||We>57&&We<65||We>70&&We<97););return Sa(e,Ml()+(t<6&&_n()==32&&$t()==32))}function ah(e){for(;$t();)switch(We){case e:return Mt;case 34:case 39:e!==34&&e!==39&&ah(We);break;case 40:e===41&&ah(e);break;case 92:$t();break}return Mt}function AO(e,t){for(;$t()&&e+We!==47+10;)if(e+We===42+42&&_n()===47)break;return"/*"+Sa(t,Mt-1)+"*"+vu(e===47?e:$t())}function $O(e){for(;!Gs(_n());)$t();return Sa(e,Mt)}function RO(e){return b2(Nl("",null,null,null,[""],e=x2(e),0,[0],e))}function Nl(e,t,n,r,i,o,s,a,l){for(var c=0,u=0,d=s,f=0,g=0,v=0,y=1,p=1,m=1,x=0,b="",w=i,_=o,k=r,P=b;p;)switch(v=x,x=$t()){case 40:if(v!=108&&tt(P,d-1)==58){sh(P+=se(El(x),"&","&\f"),"&\f")!=-1&&(m=-1);break}case 34:case 39:case 91:P+=El(x);break;case 9:case 10:case 13:case 32:P+=NO(v);break;case 92:P+=TO(Ml()-1,7);continue;case 47:switch(_n()){case 42:case 47:Za(LO(AO($t(),Ml()),t,n),l);break;default:P+="/"}break;case 123*y:a[c++]=hn(P)*m;case 125*y:case 59:case 0:switch(x){case 0:case 125:p=0;case 59+u:m==-1&&(P=se(P,/\f/g,"")),g>0&&hn(P)-d&&Za(g>32?l1(P+";",r,n,d-1):l1(se(P," ","")+";",r,n,d-2),l);break;case 59:P+=";";default:if(Za(k=a1(P,t,n,c,u,i,a,b,w=[],_=[],d),o),x===123)if(u===0)Nl(P,t,k,k,w,o,d,a,_);else switch(f===99&&tt(P,3)===110?100:f){case 100:case 108:case 109:case 115:Nl(e,k,k,r&&Za(a1(e,k,k,0,0,i,a,b,i,w=[],d),_),i,_,d,a,r?w:_);break;default:Nl(P,k,k,k,[""],_,0,a,_)}}c=u=g=0,y=m=1,b=P="",d=s;break;case 58:d=1+hn(P),g=v;default:if(y<1){if(x==123)--y;else if(x==125&&y++==0&&EO()==125)continue}switch(P+=vu(x),x*y){case 38:m=u>0?1:(P+="\f",-1);break;case 44:a[c++]=(hn(P)-1)*m,m=1;break;case 64:_n()===45&&(P+=El($t())),f=_n(),u=d=hn(b=P+=$O(Ml())),x++;break;case 45:v===45&&hn(P)==2&&(y=0)}}return o}function a1(e,t,n,r,i,o,s,a,l,c,u){for(var d=i-1,f=i===0?o:[""],g=ug(f),v=0,y=0,p=0;v<r;++v)for(var m=0,x=Ks(e,d+1,d=SO(y=s[v])),b=e;m<g;++m)(b=v2(y>0?f[m]+" "+x:se(x,/&\f/g,f[m])))&&(l[p++]=b);return xu(e,t,n,i===0?lg:a,l,c,u)}function LO(e,t,n){return xu(e,t,n,g2,vu(MO()),Ks(e,2,-2),0)}function l1(e,t,n,r){return xu(e,t,n,cg,Ks(e,0,r),Ks(e,r+1,-1),r)}function Qi(e,t){for(var n="",r=ug(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function DO(e,t,n,r){switch(e.type){case _O:if(e.children.length)break;case wO:case cg:return e.return=e.return||e.value;case g2:return"";case m2:return e.return=e.value+"{"+Qi(e.children,r)+"}";case lg:e.value=e.props.join(",")}return hn(n=Qi(e.children,r))?e.return=e.value+"{"+n+"}":""}function zO(e){var t=ug(e);return function(n,r,i,o){for(var s="",a=0;a<t;a++)s+=e[a](n,r,i,o)||"";return s}}function IO(e){return function(t){t.root||(t=t.return)&&e(t)}}var jO=function(t,n,r){for(var i=0,o=0;i=o,o=_n(),i===38&&o===12&&(n[r]=1),!Gs(o);)$t();return Sa(t,Mt)},FO=function(t,n){var r=-1,i=44;do switch(Gs(i)){case 0:i===38&&_n()===12&&(n[r]=1),t[r]+=jO(Mt-1,n,r);break;case 2:t[r]+=El(i);break;case 4:if(i===44){t[++r]=_n()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=vu(i)}while(i=$t());return t},BO=function(t,n){return b2(FO(x2(t),n))},c1=new WeakMap,WO=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,i=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!c1.get(r))&&!i){c1.set(t,!0);for(var o=[],s=BO(n,o),a=r.props,l=0,c=0;l<s.length;l++)for(var u=0;u<a.length;u++,c++)t.props[c]=o[l]?s[l].replace(/&\f/g,a[u]):a[u]+" "+s[l]}}},VO=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function w2(e,t){switch(CO(e,t)){case 5103:return oe+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return oe+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return oe+e+_c+e+ot+e+e;case 6828:case 4268:return oe+e+ot+e+e;case 6165:return oe+e+ot+"flex-"+e+e;case 5187:return oe+e+se(e,/(\w+).+(:[^]+)/,oe+"box-$1$2"+ot+"flex-$1$2")+e;case 5443:return oe+e+ot+"flex-item-"+se(e,/flex-|-self/,"")+e;case 4675:return oe+e+ot+"flex-line-pack"+se(e,/align-content|flex-|-self/,"")+e;case 5548:return oe+e+ot+se(e,"shrink","negative")+e;case 5292:return oe+e+ot+se(e,"basis","preferred-size")+e;case 6060:return oe+"box-"+se(e,"-grow","")+oe+e+ot+se(e,"grow","positive")+e;case 4554:return oe+se(e,/([^-])(transform)/g,"$1"+oe+"$2")+e;case 6187:return se(se(se(e,/(zoom-|grab)/,oe+"$1"),/(image-set)/,oe+"$1"),e,"")+e;case 5495:case 3959:return se(e,/(image-set\([^]*)/,oe+"$1$`$1");case 4968:return se(se(e,/(.+:)(flex-)?(.*)/,oe+"box-pack:$3"+ot+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+oe+e+e;case 4095:case 3583:case 4068:case 2532:return se(e,/(.+)-inline(.+)/,oe+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(hn(e)-1-t>6)switch(tt(e,t+1)){case 109:if(tt(e,t+4)!==45)break;case 102:return se(e,/(.+:)(.+)-([^]+)/,"$1"+oe+"$2-$3$1"+_c+(tt(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~sh(e,"stretch")?w2(se(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(tt(e,t+1)!==115)break;case 6444:switch(tt(e,hn(e)-3-(~sh(e,"!important")&&10))){case 107:return se(e,":",":"+oe)+e;case 101:return se(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+oe+(tt(e,14)===45?"inline-":"")+"box$3$1"+oe+"$2$3$1"+ot+"$2box$3")+e}break;case 5936:switch(tt(e,t+11)){case 114:return oe+e+ot+se(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return oe+e+ot+se(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return oe+e+ot+se(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return oe+e+ot+e+e}return e}var HO=function(t,n,r,i){if(t.length>-1&&!t.return)switch(t.type){case cg:t.return=w2(t.value,t.length);break;case m2:return Qi([Bo(t,{value:se(t.value,"@","@"+oe)})],i);case lg:if(t.length)return OO(t.props,function(o){switch(PO(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Qi([Bo(t,{props:[se(o,/:(read-\w+)/,":"+_c+"$1")]})],i);case"::placeholder":return Qi([Bo(t,{props:[se(o,/:(plac\w+)/,":"+oe+"input-$1")]}),Bo(t,{props:[se(o,/:(plac\w+)/,":"+_c+"$1")]}),Bo(t,{props:[se(o,/:(plac\w+)/,ot+"input-$1")]})],i)}return""})}},UO=[HO],_2=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(y){var p=y.getAttribute("data-emotion");p.indexOf(" ")!==-1&&(document.head.appendChild(y),y.setAttribute("data-s",""))})}var i=t.stylisPlugins||UO,o={},s,a=[];s=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(y){for(var p=y.getAttribute("data-emotion").split(" "),m=1;m<p.length;m++)o[p[m]]=!0;a.push(y)});var l,c=[WO,VO];{var u,d=[DO,IO(function(y){u.insert(y)})],f=zO(c.concat(i,d)),g=function(p){return Qi(RO(p),f)};l=function(p,m,x,b){u=x,g(p?p+"{"+m.styles+"}":m.styles),b&&(v.inserted[m.name]=!0)}}var v={key:n,sheet:new bO({key:n,container:s,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:o,registered:{},insert:l};return v.sheet.hydrate(a),v},YO=!0;function XO(e,t,n){var r="";return n.split(" ").forEach(function(i){e[i]!==void 0?t.push(e[i]+";"):r+=i+" "}),r}var S2=function(t,n,r){var i=t.key+"-"+n.name;(r===!1||YO===!1)&&t.registered[i]===void 0&&(t.registered[i]=n.styles)},k2=function(t,n,r){S2(t,n,r);var i=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var o=n;do t.insert(n===o?"."+i:"",o,t.sheet,!0),o=o.next;while(o!==void 0)}};function KO(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var GO={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},qO=!1,QO=/[A-Z]|^ms/g,ZO=/_EMO_([^_]+?)_([^]*?)_EMO_/g,C2=function(t){return t.charCodeAt(1)===45},u1=function(t){return t!=null&&typeof t!="boolean"},Rd=fb(function(e){return C2(e)?e:e.replace(QO,"-$&").toLowerCase()}),d1=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(ZO,function(r,i,o){return pn={name:i,styles:o,next:pn},i})}return GO[t]!==1&&!C2(t)&&typeof n=="number"&&n!==0?n+"px":n},JO="Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";function qs(e,t,n){if(n==null)return"";var r=n;if(r.__emotion_styles!==void 0)return r;switch(typeof n){case"boolean":return"";case"object":{var i=n;if(i.anim===1)return pn={name:i.name,styles:i.styles,next:pn},i.name;var o=n;if(o.styles!==void 0){var s=o.next;if(s!==void 0)for(;s!==void 0;)pn={name:s.name,styles:s.styles,next:pn},s=s.next;var a=o.styles+";";return a}return eM(e,t,n)}case"function":{if(e!==void 0){var l=pn,c=n(e);return pn=l,qs(e,t,c)}break}}var u=n;if(t==null)return u;var d=t[u];return d!==void 0?d:u}function eM(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=qs(e,t,n[i])+";";else for(var o in n){var s=n[o];if(typeof s!="object"){var a=s;t!=null&&t[a]!==void 0?r+=o+"{"+t[a]+"}":u1(a)&&(r+=Rd(o)+":"+d1(o,a)+";")}else{if(o==="NO_COMPONENT_SELECTOR"&&qO)throw new Error(JO);if(Array.isArray(s)&&typeof s[0]=="string"&&(t==null||t[s[0]]===void 0))for(var l=0;l<s.length;l++)u1(s[l])&&(r+=Rd(o)+":"+d1(o,s[l])+";");else{var c=qs(e,t,s);switch(o){case"animation":case"animationName":{r+=Rd(o)+":"+c+";";break}default:r+=o+"{"+c+"}"}}}}return r}var f1=/label:\s*([^\s;\n{]+)\s*(;|$)/g,pn;function dg(e,t,n){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var r=!0,i="";pn=void 0;var o=e[0];if(o==null||o.raw===void 0)r=!1,i+=qs(n,t,o);else{var s=o;i+=s[0]}for(var a=1;a<e.length;a++)if(i+=qs(n,t,e[a]),r){var l=o;i+=l[a]}f1.lastIndex=0;for(var c="",u;(u=f1.exec(i))!==null;)c+="-"+u[1];var d=KO(i)+c;return{name:d,styles:i,next:pn}}var tM=function(t){return t()},P2=Ps["useInsertionEffect"]?Ps["useInsertionEffect"]:!1,nM=P2||tM,h1=P2||C.exports.useLayoutEffect,O2=C.exports.createContext(typeof HTMLElement!="undefined"?_2({key:"css"}):null),rM=O2.Provider,M2=function(t){return C.exports.forwardRef(function(n,r){var i=C.exports.useContext(O2);return t(n,i,r)})},bu=C.exports.createContext({}),fg={exports:{}};(function(e){function t(){return e.exports=t=Object.assign?Object.assign.bind():function(n){for(var r=1;r<arguments.length;r++){var i=arguments[r];for(var o in i)({}).hasOwnProperty.call(i,o)&&(n[o]=i[o])}return n},e.exports.__esModule=!0,e.exports.default=e.exports,t.apply(null,arguments)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports})(fg);var iM=M2(function(e,t){var n=e.styles,r=dg([n],void 0,C.exports.useContext(bu)),i=C.exports.useRef();return h1(function(){var o=t.key+"-global",s=new t.sheet.constructor({key:o,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),a=!1,l=document.querySelector('style[data-emotion="'+o+" "+r.name+'"]');return t.sheet.tags.length&&(s.before=t.sheet.tags[0]),l!==null&&(a=!0,l.setAttribute("data-emotion",o),s.hydrate([l])),i.current=[s,a],function(){s.flush()}},[t]),h1(function(){var o=i.current,s=o[0],a=o[1];if(a){o[1]=!1;return}if(r.next!==void 0&&k2(t,r.next,!0),s.tags.length){var l=s.tags[s.tags.length-1].nextElementSibling;s.before=l,s.flush()}t.insert("",r,s,!1)},[t,r.name]),null});function Sc(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return dg(t)}var hg=function(){var t=Sc.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},oM=Bf,sM=function(t){return t!=="theme"},p1=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?oM:sM},g1=function(t,n,r){var i;if(n){var o=n.shouldForwardProp;i=t.__emotion_forwardProp&&o?function(s){return t.__emotion_forwardProp(s)&&o(s)}:o}return typeof i!="function"&&r&&(i=t.__emotion_forwardProp),i},aM=!1,lM=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return S2(n,r,i),nM(function(){return k2(n,r,i)}),null},cM=function e(t,n){var r=t.__emotion_real===t,i=r&&t.__emotion_base||t,o,s;n!==void 0&&(o=n.label,s=n.target);var a=g1(t,n,r),l=a||p1(i),c=!l("as");return function(){var u=arguments,d=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(o!==void 0&&d.push("label:"+o+";"),u[0]==null||u[0].raw===void 0)d.push.apply(d,u);else{d.push(u[0][0]);for(var f=u.length,g=1;g<f;g++)d.push(u[g],u[0][g])}var v=M2(function(y,p,m){var x=c&&y.as||i,b="",w=[],_=y;if(y.theme==null){_={};for(var k in y)_[k]=y[k];_.theme=C.exports.useContext(bu)}typeof y.className=="string"?b=XO(p.registered,w,y.className):y.className!=null&&(b=y.className+" ");var P=dg(d.concat(w),p.registered,_);b+=p.key+"-"+P.name,s!==void 0&&(b+=" "+s);var M=c&&a===void 0?p1(x):l,E={};for(var A in y)c&&A==="as"||M(A)&&(E[A]=y[A]);return E.className=b,m&&(E.ref=m),C.exports.createElement(C.exports.Fragment,null,C.exports.createElement(lM,{cache:p,serialized:P,isStringTag:typeof x=="string"}),C.exports.createElement(x,E))});return v.displayName=o!==void 0?o:"Styled("+(typeof i=="string"?i:i.displayName||i.name||"Component")+")",v.defaultProps=t.defaultProps,v.__emotion_real=v,v.__emotion_base=i,v.__emotion_styles=d,v.__emotion_forwardProp=a,Object.defineProperty(v,"toString",{value:function(){return s===void 0&&aM?"NO_COMPONENT_SELECTOR":"."+s}}),v.withComponent=function(y,p){return e(y,ae({},n,p,{shouldForwardProp:g1(v,p,!0)})).apply(void 0,d)},v}},uM=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],lh=cM.bind();uM.forEach(function(e){lh[e]=lh(e)});let ch;typeof document=="object"&&(ch=_2({key:"css",prepend:!0}));function dM(e){const{injectFirst:t,children:n}=e;return t&&ch?h(rM,{value:ch,children:n}):n}function fM(e){return e==null||Object.keys(e).length===0}function hM(e){const{styles:t,defaultTheme:n={}}=e;return h(iM,{styles:typeof t=="function"?i=>t(fM(i)?n:i):t})}/**
 * @mui/styled-engine v5.16.6
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function E2(e,t){return lh(e,t)}const pM=(e,t)=>{Array.isArray(e.__emotion_styles)&&(e.__emotion_styles=t(e.__emotion_styles))};var gM=Object.freeze(Object.defineProperty({__proto__:null,default:E2,internal_processStyles:pM,ThemeContext:bu,keyframes:hg,css:Sc,StyledEngineProvider:dM,GlobalStyles:hM},Symbol.toStringTag,{value:"Module"}));function Jn(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function N2(e){if(!Jn(e))return e;const t={};return Object.keys(e).forEach(n=>{t[n]=N2(e[n])}),t}function Sn(e,t,n={clone:!0}){const r=n.clone?ae({},e):e;return Jn(e)&&Jn(t)&&Object.keys(t).forEach(i=>{Jn(t[i])&&Object.prototype.hasOwnProperty.call(e,i)&&Jn(e[i])?r[i]=Sn(e[i],t[i],n):n.clone?r[i]=Jn(t[i])?N2(t[i]):t[i]:r[i]=t[i]}),r}var mM=Object.freeze(Object.defineProperty({__proto__:null,default:Sn,isPlainObject:Jn},Symbol.toStringTag,{value:"Module"}));const vM=["values","unit","step"],yM=e=>{const t=Object.keys(e).map(n=>({key:n,val:e[n]}))||[];return t.sort((n,r)=>n.val-r.val),t.reduce((n,r)=>ae({},n,{[r.key]:r.val}),{})};function T2(e){const{values:t={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:n="px",step:r=5}=e,i=Yn(e,vM),o=yM(t),s=Object.keys(o);function a(f){return`@media (min-width:${typeof t[f]=="number"?t[f]:f}${n})`}function l(f){return`@media (max-width:${(typeof t[f]=="number"?t[f]:f)-r/100}${n})`}function c(f,g){const v=s.indexOf(g);return`@media (min-width:${typeof t[f]=="number"?t[f]:f}${n}) and (max-width:${(v!==-1&&typeof t[s[v]]=="number"?t[s[v]]:g)-r/100}${n})`}function u(f){return s.indexOf(f)+1<s.length?c(f,s[s.indexOf(f)+1]):a(f)}function d(f){const g=s.indexOf(f);return g===0?a(s[1]):g===s.length-1?l(s[g]):c(f,s[s.indexOf(f)+1]).replace("@media","@media not all and")}return ae({keys:s,values:o,up:a,down:l,between:c,only:u,not:d,unit:n},i)}const xM={borderRadius:4};var bM=xM;function xs(e,t){return t?Sn(e,t,{clone:!1}):e}const pg={xs:0,sm:600,md:900,lg:1200,xl:1536},m1={keys:["xs","sm","md","lg","xl"],up:e=>`@media (min-width:${pg[e]}px)`};function Vn(e,t,n){const r=e.theme||{};if(Array.isArray(t)){const o=r.breakpoints||m1;return t.reduce((s,a,l)=>(s[o.up(o.keys[l])]=n(t[l]),s),{})}if(typeof t=="object"){const o=r.breakpoints||m1;return Object.keys(t).reduce((s,a)=>{if(Object.keys(o.values||pg).indexOf(a)!==-1){const l=o.up(a);s[l]=n(t[a],a)}else{const l=a;s[l]=t[l]}return s},{})}return n(t)}function wM(e={}){var t;return((t=e.keys)==null?void 0:t.reduce((r,i)=>{const o=e.up(i);return r[o]={},r},{}))||{}}function _M(e,t){return e.reduce((n,r)=>{const i=n[r];return(!i||Object.keys(i).length===0)&&delete n[r],n},t)}function gg(e){if(typeof e!="string")throw new Error(ci(7));return e.charAt(0).toUpperCase()+e.slice(1)}var SM=Object.freeze(Object.defineProperty({__proto__:null,default:gg},Symbol.toStringTag,{value:"Module"}));function wu(e,t,n=!0){if(!t||typeof t!="string")return null;if(e&&e.vars&&n){const r=`vars.${t}`.split(".").reduce((i,o)=>i&&i[o]?i[o]:null,e);if(r!=null)return r}return t.split(".").reduce((r,i)=>r&&r[i]!=null?r[i]:null,e)}function kc(e,t,n,r=n){let i;return typeof e=="function"?i=e(n):Array.isArray(e)?i=e[n]||r:i=wu(e,n)||r,t&&(i=t(i,r,e)),i}function Fe(e){const{prop:t,cssProperty:n=e.prop,themeKey:r,transform:i}=e,o=s=>{if(s[t]==null)return null;const a=s[t],l=s.theme,c=wu(l,r)||{};return Vn(s,a,d=>{let f=kc(c,i,d);return d===f&&typeof d=="string"&&(f=kc(c,i,`${t}${d==="default"?"":gg(d)}`,d)),n===!1?f:{[n]:f}})};return o.propTypes={},o.filterProps=[t],o}function kM(e){const t={};return n=>(t[n]===void 0&&(t[n]=e(n)),t[n])}const CM={m:"margin",p:"padding"},PM={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},v1={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},OM=kM(e=>{if(e.length>2)if(v1[e])e=v1[e];else return[e];const[t,n]=e.split(""),r=CM[t],i=PM[n]||"";return Array.isArray(i)?i.map(o=>r+o):[r+i]}),mg=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],vg=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"];[...mg,...vg];function ka(e,t,n,r){var i;const o=(i=wu(e,t,!1))!=null?i:n;return typeof o=="number"?s=>typeof s=="string"?s:o*s:Array.isArray(o)?s=>typeof s=="string"?s:o[s]:typeof o=="function"?o:()=>{}}function A2(e){return ka(e,"spacing",8)}function Ca(e,t){if(typeof t=="string"||t==null)return t;const n=Math.abs(t),r=e(n);return t>=0?r:typeof r=="number"?-r:`-${r}`}function MM(e,t){return n=>e.reduce((r,i)=>(r[i]=Ca(t,n),r),{})}function EM(e,t,n,r){if(t.indexOf(n)===-1)return null;const i=OM(n),o=MM(i,r),s=e[n];return Vn(e,s,o)}function $2(e,t){const n=A2(e.theme);return Object.keys(e).map(r=>EM(e,t,r,n)).reduce(xs,{})}function Ee(e){return $2(e,mg)}Ee.propTypes={};Ee.filterProps=mg;function Ne(e){return $2(e,vg)}Ne.propTypes={};Ne.filterProps=vg;function NM(e=8){if(e.mui)return e;const t=A2({spacing:e}),n=(...r)=>(r.length===0?[1]:r).map(o=>{const s=t(o);return typeof s=="number"?`${s}px`:s}).join(" ");return n.mui=!0,n}function _u(...e){const t=e.reduce((r,i)=>(i.filterProps.forEach(o=>{r[o]=i}),r),{}),n=r=>Object.keys(r).reduce((i,o)=>t[o]?xs(i,t[o](r)):i,{});return n.propTypes={},n.filterProps=e.reduce((r,i)=>r.concat(i.filterProps),[]),n}function jt(e){return typeof e!="number"?e:`${e}px solid`}function Kt(e,t){return Fe({prop:e,themeKey:"borders",transform:t})}const TM=Kt("border",jt),AM=Kt("borderTop",jt),$M=Kt("borderRight",jt),RM=Kt("borderBottom",jt),LM=Kt("borderLeft",jt),DM=Kt("borderColor"),zM=Kt("borderTopColor"),IM=Kt("borderRightColor"),jM=Kt("borderBottomColor"),FM=Kt("borderLeftColor"),BM=Kt("outline",jt),WM=Kt("outlineColor"),Su=e=>{if(e.borderRadius!==void 0&&e.borderRadius!==null){const t=ka(e.theme,"shape.borderRadius",4),n=r=>({borderRadius:Ca(t,r)});return Vn(e,e.borderRadius,n)}return null};Su.propTypes={};Su.filterProps=["borderRadius"];_u(TM,AM,$M,RM,LM,DM,zM,IM,jM,FM,Su,BM,WM);const ku=e=>{if(e.gap!==void 0&&e.gap!==null){const t=ka(e.theme,"spacing",8),n=r=>({gap:Ca(t,r)});return Vn(e,e.gap,n)}return null};ku.propTypes={};ku.filterProps=["gap"];const Cu=e=>{if(e.columnGap!==void 0&&e.columnGap!==null){const t=ka(e.theme,"spacing",8),n=r=>({columnGap:Ca(t,r)});return Vn(e,e.columnGap,n)}return null};Cu.propTypes={};Cu.filterProps=["columnGap"];const Pu=e=>{if(e.rowGap!==void 0&&e.rowGap!==null){const t=ka(e.theme,"spacing",8),n=r=>({rowGap:Ca(t,r)});return Vn(e,e.rowGap,n)}return null};Pu.propTypes={};Pu.filterProps=["rowGap"];const VM=Fe({prop:"gridColumn"}),HM=Fe({prop:"gridRow"}),UM=Fe({prop:"gridAutoFlow"}),YM=Fe({prop:"gridAutoColumns"}),XM=Fe({prop:"gridAutoRows"}),KM=Fe({prop:"gridTemplateColumns"}),GM=Fe({prop:"gridTemplateRows"}),qM=Fe({prop:"gridTemplateAreas"}),QM=Fe({prop:"gridArea"});_u(ku,Cu,Pu,VM,HM,UM,YM,XM,KM,GM,qM,QM);function Zi(e,t){return t==="grey"?t:e}const ZM=Fe({prop:"color",themeKey:"palette",transform:Zi}),JM=Fe({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette",transform:Zi}),eE=Fe({prop:"backgroundColor",themeKey:"palette",transform:Zi});_u(ZM,JM,eE);function Tt(e){return e<=1&&e!==0?`${e*100}%`:e}const tE=Fe({prop:"width",transform:Tt}),yg=e=>{if(e.maxWidth!==void 0&&e.maxWidth!==null){const t=n=>{var r,i;const o=((r=e.theme)==null||(r=r.breakpoints)==null||(r=r.values)==null?void 0:r[n])||pg[n];return o?((i=e.theme)==null||(i=i.breakpoints)==null?void 0:i.unit)!=="px"?{maxWidth:`${o}${e.theme.breakpoints.unit}`}:{maxWidth:o}:{maxWidth:Tt(n)}};return Vn(e,e.maxWidth,t)}return null};yg.filterProps=["maxWidth"];const nE=Fe({prop:"minWidth",transform:Tt}),rE=Fe({prop:"height",transform:Tt}),iE=Fe({prop:"maxHeight",transform:Tt}),oE=Fe({prop:"minHeight",transform:Tt});Fe({prop:"size",cssProperty:"width",transform:Tt});Fe({prop:"size",cssProperty:"height",transform:Tt});const sE=Fe({prop:"boxSizing"});_u(tE,yg,nE,rE,iE,oE,sE);const aE={border:{themeKey:"borders",transform:jt},borderTop:{themeKey:"borders",transform:jt},borderRight:{themeKey:"borders",transform:jt},borderBottom:{themeKey:"borders",transform:jt},borderLeft:{themeKey:"borders",transform:jt},borderColor:{themeKey:"palette"},borderTopColor:{themeKey:"palette"},borderRightColor:{themeKey:"palette"},borderBottomColor:{themeKey:"palette"},borderLeftColor:{themeKey:"palette"},outline:{themeKey:"borders",transform:jt},outlineColor:{themeKey:"palette"},borderRadius:{themeKey:"shape.borderRadius",style:Su},color:{themeKey:"palette",transform:Zi},bgcolor:{themeKey:"palette",cssProperty:"backgroundColor",transform:Zi},backgroundColor:{themeKey:"palette",transform:Zi},p:{style:Ne},pt:{style:Ne},pr:{style:Ne},pb:{style:Ne},pl:{style:Ne},px:{style:Ne},py:{style:Ne},padding:{style:Ne},paddingTop:{style:Ne},paddingRight:{style:Ne},paddingBottom:{style:Ne},paddingLeft:{style:Ne},paddingX:{style:Ne},paddingY:{style:Ne},paddingInline:{style:Ne},paddingInlineStart:{style:Ne},paddingInlineEnd:{style:Ne},paddingBlock:{style:Ne},paddingBlockStart:{style:Ne},paddingBlockEnd:{style:Ne},m:{style:Ee},mt:{style:Ee},mr:{style:Ee},mb:{style:Ee},ml:{style:Ee},mx:{style:Ee},my:{style:Ee},margin:{style:Ee},marginTop:{style:Ee},marginRight:{style:Ee},marginBottom:{style:Ee},marginLeft:{style:Ee},marginX:{style:Ee},marginY:{style:Ee},marginInline:{style:Ee},marginInlineStart:{style:Ee},marginInlineEnd:{style:Ee},marginBlock:{style:Ee},marginBlockStart:{style:Ee},marginBlockEnd:{style:Ee},displayPrint:{cssProperty:!1,transform:e=>({"@media print":{display:e}})},display:{},overflow:{},textOverflow:{},visibility:{},whiteSpace:{},flexBasis:{},flexDirection:{},flexWrap:{},justifyContent:{},alignItems:{},alignContent:{},order:{},flex:{},flexGrow:{},flexShrink:{},alignSelf:{},justifyItems:{},justifySelf:{},gap:{style:ku},rowGap:{style:Pu},columnGap:{style:Cu},gridColumn:{},gridRow:{},gridAutoFlow:{},gridAutoColumns:{},gridAutoRows:{},gridTemplateColumns:{},gridTemplateRows:{},gridTemplateAreas:{},gridArea:{},position:{},zIndex:{themeKey:"zIndex"},top:{},right:{},bottom:{},left:{},boxShadow:{themeKey:"shadows"},width:{transform:Tt},maxWidth:{style:yg},minWidth:{transform:Tt},height:{transform:Tt},maxHeight:{transform:Tt},minHeight:{transform:Tt},boxSizing:{},fontFamily:{themeKey:"typography"},fontSize:{themeKey:"typography"},fontStyle:{themeKey:"typography"},fontWeight:{themeKey:"typography"},letterSpacing:{},textTransform:{},lineHeight:{},textAlign:{},typography:{cssProperty:!1,themeKey:"typography"}};var Pa=aE;function lE(...e){const t=e.reduce((r,i)=>r.concat(Object.keys(i)),[]),n=new Set(t);return e.every(r=>n.size===Object.keys(r).length)}function cE(e,t){return typeof e=="function"?e(t):e}function R2(){function e(n,r,i,o){const s={[n]:r,theme:i},a=o[n];if(!a)return{[n]:r};const{cssProperty:l=n,themeKey:c,transform:u,style:d}=a;if(r==null)return null;if(c==="typography"&&r==="inherit")return{[n]:r};const f=wu(i,c)||{};return d?d(s):Vn(s,r,v=>{let y=kc(f,u,v);return v===y&&typeof v=="string"&&(y=kc(f,u,`${n}${v==="default"?"":gg(v)}`,v)),l===!1?y:{[l]:y}})}function t(n){var r;const{sx:i,theme:o={}}=n||{};if(!i)return null;const s=(r=o.unstable_sxConfig)!=null?r:Pa;function a(l){let c=l;if(typeof l=="function")c=l(o);else if(typeof l!="object")return l;if(!c)return null;const u=wM(o.breakpoints),d=Object.keys(u);let f=u;return Object.keys(c).forEach(g=>{const v=cE(c[g],o);if(v!=null)if(typeof v=="object")if(s[g])f=xs(f,e(g,v,o,s));else{const y=Vn({theme:o},v,p=>({[g]:p}));lE(y,v)?f[g]=t({sx:v,theme:o}):f=xs(f,y)}else f=xs(f,e(g,v,o,s))}),_M(d,f)}return Array.isArray(i)?i.map(a):a(i)}return t}const L2=R2();L2.filterProps=["sx"];var Ou=L2;function D2(e,t){const n=this;return n.vars&&typeof n.getColorSchemeSelector=="function"?{[n.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/,"*:where($1)")]:t}:n.palette.mode===e?t:{}}const uE=["breakpoints","palette","spacing","shape"];function xg(e={},...t){const{breakpoints:n={},palette:r={},spacing:i,shape:o={}}=e,s=Yn(e,uE),a=T2(n),l=NM(i);let c=Sn({breakpoints:a,direction:"ltr",components:{},palette:ae({mode:"light"},r),spacing:l,shape:ae({},bM,o)},s);return c.applyStyles=D2,c=t.reduce((u,d)=>Sn(u,d),c),c.unstable_sxConfig=ae({},Pa,s==null?void 0:s.unstable_sxConfig),c.unstable_sx=function(d){return Ou({sx:d,theme:this})},c}var dE=Object.freeze(Object.defineProperty({__proto__:null,default:xg,private_createBreakpoints:T2,unstable_applyStyles:D2},Symbol.toStringTag,{value:"Module"}));function fE(e){return Object.keys(e).length===0}function hE(e=null){const t=C.exports.useContext(bu);return!t||fE(t)?e:t}const pE=xg();function gE(e=pE){return hE(e)}const mE=["sx"],vE=e=>{var t,n;const r={systemProps:{},otherProps:{}},i=(t=e==null||(n=e.theme)==null?void 0:n.unstable_sxConfig)!=null?t:Pa;return Object.keys(e).forEach(o=>{i[o]?r.systemProps[o]=e[o]:r.otherProps[o]=e[o]}),r};function z2(e){const{sx:t}=e,n=Yn(e,mE),{systemProps:r,otherProps:i}=vE(n);let o;return Array.isArray(t)?o=[r,...t]:typeof t=="function"?o=(...s)=>{const a=t(...s);return Jn(a)?ae({},r,a):r}:o=ae({},r,t),ae({},i,{sx:o})}var yE=Object.freeze(Object.defineProperty({__proto__:null,default:Ou,unstable_createStyleFunctionSx:R2,extendSxProp:z2,unstable_defaultSxConfig:Pa},Symbol.toStringTag,{value:"Module"}));const y1=e=>e,xE=()=>{let e=y1;return{configure(t){e=t},generate(t){return e(t)},reset(){e=y1}}},bE=xE();var I2=bE;function j2(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=j2(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function wE(){for(var e,t,n=0,r="",i=arguments.length;n<i;n++)(e=arguments[n])&&(t=j2(e))&&(r&&(r+=" "),r+=t);return r}const _E=["className","component"];function SE(e={}){const{themeId:t,defaultTheme:n,defaultClassName:r="MuiBox-root",generateClassName:i}=e,o=E2("div",{shouldForwardProp:a=>a!=="theme"&&a!=="sx"&&a!=="as"})(Ou);return C.exports.forwardRef(function(l,c){const u=gE(n),d=z2(l),{className:f,component:g="div"}=d,v=Yn(d,_E);return h(o,ae({as:g,ref:c,className:wE(f,i?i(r):r),theme:t&&u[t]||u},v))})}const kE={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",open:"open",readOnly:"readOnly",required:"required",selected:"selected"};function F2(e,t,n="Mui"){const r=kE[t];return r?`${n}-${r}`:`${I2.generate(e)}-${t}`}function B2(e,t,n="Mui"){const r={};return t.forEach(i=>{r[i]=F2(e,i,n)}),r}var uh={exports:{}},ge={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bg=Symbol.for("react.element"),wg=Symbol.for("react.portal"),Mu=Symbol.for("react.fragment"),Eu=Symbol.for("react.strict_mode"),Nu=Symbol.for("react.profiler"),Tu=Symbol.for("react.provider"),Au=Symbol.for("react.context"),CE=Symbol.for("react.server_context"),$u=Symbol.for("react.forward_ref"),Ru=Symbol.for("react.suspense"),Lu=Symbol.for("react.suspense_list"),Du=Symbol.for("react.memo"),zu=Symbol.for("react.lazy"),PE=Symbol.for("react.offscreen"),W2;W2=Symbol.for("react.module.reference");function Gt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case bg:switch(e=e.type,e){case Mu:case Nu:case Eu:case Ru:case Lu:return e;default:switch(e=e&&e.$$typeof,e){case CE:case Au:case $u:case zu:case Du:case Tu:return e;default:return t}}case wg:return t}}}ge.ContextConsumer=Au;ge.ContextProvider=Tu;ge.Element=bg;ge.ForwardRef=$u;ge.Fragment=Mu;ge.Lazy=zu;ge.Memo=Du;ge.Portal=wg;ge.Profiler=Nu;ge.StrictMode=Eu;ge.Suspense=Ru;ge.SuspenseList=Lu;ge.isAsyncMode=function(){return!1};ge.isConcurrentMode=function(){return!1};ge.isContextConsumer=function(e){return Gt(e)===Au};ge.isContextProvider=function(e){return Gt(e)===Tu};ge.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===bg};ge.isForwardRef=function(e){return Gt(e)===$u};ge.isFragment=function(e){return Gt(e)===Mu};ge.isLazy=function(e){return Gt(e)===zu};ge.isMemo=function(e){return Gt(e)===Du};ge.isPortal=function(e){return Gt(e)===wg};ge.isProfiler=function(e){return Gt(e)===Nu};ge.isStrictMode=function(e){return Gt(e)===Eu};ge.isSuspense=function(e){return Gt(e)===Ru};ge.isSuspenseList=function(e){return Gt(e)===Lu};ge.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Mu||e===Nu||e===Eu||e===Ru||e===Lu||e===PE||typeof e=="object"&&e!==null&&(e.$$typeof===zu||e.$$typeof===Du||e.$$typeof===Tu||e.$$typeof===Au||e.$$typeof===$u||e.$$typeof===W2||e.getModuleId!==void 0)};ge.typeOf=Gt;uh.exports=ge;const OE=/^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;function V2(e){const t=`${e}`.match(OE);return t&&t[1]||""}function H2(e,t=""){return e.displayName||e.name||V2(e)||t}function x1(e,t,n){const r=H2(t);return e.displayName||(r!==""?`${n}(${r})`:n)}function ME(e){if(e!=null){if(typeof e=="string")return e;if(typeof e=="function")return H2(e,"Component");if(typeof e=="object")switch(e.$$typeof){case uh.exports.ForwardRef:return x1(e,e.render,"ForwardRef");case uh.exports.Memo:return x1(e,e.type,"memo");default:return}}}var EE=Object.freeze(Object.defineProperty({__proto__:null,default:ME,getFunctionName:V2},Symbol.toStringTag,{value:"Module"}));function dh(e,t){const n=ae({},t);return Object.keys(e).forEach(r=>{if(r.toString().match(/^(components|slots)$/))n[r]=ae({},e[r],n[r]);else if(r.toString().match(/^(componentsProps|slotProps)$/)){const i=e[r]||{},o=t[r];n[r]={},!o||!Object.keys(o)?n[r]=i:!i||!Object.keys(i)?n[r]=o:(n[r]=ae({},o),Object.keys(i).forEach(s=>{n[r][s]=dh(i[s],o[s])}))}else n[r]===void 0&&(n[r]=e[r])}),n}function U2(e,t=Number.MIN_SAFE_INTEGER,n=Number.MAX_SAFE_INTEGER){return Math.max(t,Math.min(e,n))}var NE=Object.freeze(Object.defineProperty({__proto__:null,default:U2},Symbol.toStringTag,{value:"Module"}));function TE(e,t=0,n=1){return U2(e,t,n)}function AE(e){e=e.slice(1);const t=new RegExp(`.{1,${e.length>=6?2:1}}`,"g");let n=e.match(t);return n&&n[0].length===1&&(n=n.map(r=>r+r)),n?`rgb${n.length===4?"a":""}(${n.map((r,i)=>i<3?parseInt(r,16):Math.round(parseInt(r,16)/255*1e3)/1e3).join(", ")})`:""}function Y2(e){if(e.type)return e;if(e.charAt(0)==="#")return Y2(AE(e));const t=e.indexOf("("),n=e.substring(0,t);if(["rgb","rgba","hsl","hsla","color"].indexOf(n)===-1)throw new Error(ci(9,e));let r=e.substring(t+1,e.length-1),i;if(n==="color"){if(r=r.split(" "),i=r.shift(),r.length===4&&r[3].charAt(0)==="/"&&(r[3]=r[3].slice(1)),["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(i)===-1)throw new Error(ci(10,i))}else r=r.split(",");return r=r.map(o=>parseFloat(o)),{type:n,values:r,colorSpace:i}}function $E(e){const{type:t,colorSpace:n}=e;let{values:r}=e;return t.indexOf("rgb")!==-1?r=r.map((i,o)=>o<3?parseInt(i,10):i):t.indexOf("hsl")!==-1&&(r[1]=`${r[1]}%`,r[2]=`${r[2]}%`),t.indexOf("color")!==-1?r=`${n} ${r.join(" ")}`:r=`${r.join(", ")}`,`${t}(${r})`}function RE(e,t){return e=Y2(e),t=TE(t),(e.type==="rgb"||e.type==="hsl")&&(e.type+="a"),e.type==="color"?e.values[3]=`/${t}`:e.values[3]=t,$E(e)}function LE(e,t,n=void 0){const r={};return Object.keys(e).forEach(i=>{r[i]=e[i].reduce((o,s)=>{if(s){const a=t(s);a!==""&&o.push(a),n&&n[s]&&o.push(n[s])}return o},[]).join(" ")}),r}const DE=C.exports.createContext(void 0);function zE(e){const{theme:t,name:n,props:r}=e;if(!t||!t.components||!t.components[n])return r;const i=t.components[n];return i.defaultProps?dh(i.defaultProps,r):!i.styleOverrides&&!i.variants?dh(i,r):r}function IE({props:e,name:t}){const n=C.exports.useContext(DE);return zE({props:e,name:t,theme:{components:n}})}function jE(e,t){return ae({toolbar:{minHeight:56,[e.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[e.up("sm")]:{minHeight:64}}},t)}var Be={},_g={exports:{}};(function(e){function t(n){return n&&n.__esModule?n:{default:n}}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports})(_g);var FE=Hn(mO),BE=Hn(NE),X2=_g.exports;Object.defineProperty(Be,"__esModule",{value:!0});Be.alpha=Q2;Be.blend=e9;Be.colorChannel=void 0;var WE=Be.darken=kg;Be.decomposeColor=Ut;Be.emphasize=Z2;var VE=Be.getContrastRatio=GE;Be.getLuminance=Cc;Be.hexToRgb=K2;Be.hslToRgb=q2;var HE=Be.lighten=Cg;Be.private_safeAlpha=qE;Be.private_safeColorChannel=void 0;Be.private_safeDarken=QE;Be.private_safeEmphasize=JE;Be.private_safeLighten=ZE;Be.recomposeColor=ko;Be.rgbToHex=KE;var b1=X2(FE),UE=X2(BE);function Sg(e,t=0,n=1){return(0,UE.default)(e,t,n)}function K2(e){e=e.slice(1);const t=new RegExp(`.{1,${e.length>=6?2:1}}`,"g");let n=e.match(t);return n&&n[0].length===1&&(n=n.map(r=>r+r)),n?`rgb${n.length===4?"a":""}(${n.map((r,i)=>i<3?parseInt(r,16):Math.round(parseInt(r,16)/255*1e3)/1e3).join(", ")})`:""}function YE(e){const t=e.toString(16);return t.length===1?`0${t}`:t}function Ut(e){if(e.type)return e;if(e.charAt(0)==="#")return Ut(K2(e));const t=e.indexOf("("),n=e.substring(0,t);if(["rgb","rgba","hsl","hsla","color"].indexOf(n)===-1)throw new Error((0,b1.default)(9,e));let r=e.substring(t+1,e.length-1),i;if(n==="color"){if(r=r.split(" "),i=r.shift(),r.length===4&&r[3].charAt(0)==="/"&&(r[3]=r[3].slice(1)),["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(i)===-1)throw new Error((0,b1.default)(10,i))}else r=r.split(",");return r=r.map(o=>parseFloat(o)),{type:n,values:r,colorSpace:i}}const G2=e=>{const t=Ut(e);return t.values.slice(0,3).map((n,r)=>t.type.indexOf("hsl")!==-1&&r!==0?`${n}%`:n).join(" ")};Be.colorChannel=G2;const XE=(e,t)=>{try{return G2(e)}catch{return e}};Be.private_safeColorChannel=XE;function ko(e){const{type:t,colorSpace:n}=e;let{values:r}=e;return t.indexOf("rgb")!==-1?r=r.map((i,o)=>o<3?parseInt(i,10):i):t.indexOf("hsl")!==-1&&(r[1]=`${r[1]}%`,r[2]=`${r[2]}%`),t.indexOf("color")!==-1?r=`${n} ${r.join(" ")}`:r=`${r.join(", ")}`,`${t}(${r})`}function KE(e){if(e.indexOf("#")===0)return e;const{values:t}=Ut(e);return`#${t.map((n,r)=>YE(r===3?Math.round(255*n):n)).join("")}`}function q2(e){e=Ut(e);const{values:t}=e,n=t[0],r=t[1]/100,i=t[2]/100,o=r*Math.min(i,1-i),s=(c,u=(c+n/30)%12)=>i-o*Math.max(Math.min(u-3,9-u,1),-1);let a="rgb";const l=[Math.round(s(0)*255),Math.round(s(8)*255),Math.round(s(4)*255)];return e.type==="hsla"&&(a+="a",l.push(t[3])),ko({type:a,values:l})}function Cc(e){e=Ut(e);let t=e.type==="hsl"||e.type==="hsla"?Ut(q2(e)).values:e.values;return t=t.map(n=>(e.type!=="color"&&(n/=255),n<=.03928?n/12.92:((n+.055)/1.055)**2.4)),Number((.2126*t[0]+.7152*t[1]+.0722*t[2]).toFixed(3))}function GE(e,t){const n=Cc(e),r=Cc(t);return(Math.max(n,r)+.05)/(Math.min(n,r)+.05)}function Q2(e,t){return e=Ut(e),t=Sg(t),(e.type==="rgb"||e.type==="hsl")&&(e.type+="a"),e.type==="color"?e.values[3]=`/${t}`:e.values[3]=t,ko(e)}function qE(e,t,n){try{return Q2(e,t)}catch{return e}}function kg(e,t){if(e=Ut(e),t=Sg(t),e.type.indexOf("hsl")!==-1)e.values[2]*=1-t;else if(e.type.indexOf("rgb")!==-1||e.type.indexOf("color")!==-1)for(let n=0;n<3;n+=1)e.values[n]*=1-t;return ko(e)}function QE(e,t,n){try{return kg(e,t)}catch{return e}}function Cg(e,t){if(e=Ut(e),t=Sg(t),e.type.indexOf("hsl")!==-1)e.values[2]+=(100-e.values[2])*t;else if(e.type.indexOf("rgb")!==-1)for(let n=0;n<3;n+=1)e.values[n]+=(255-e.values[n])*t;else if(e.type.indexOf("color")!==-1)for(let n=0;n<3;n+=1)e.values[n]+=(1-e.values[n])*t;return ko(e)}function ZE(e,t,n){try{return Cg(e,t)}catch{return e}}function Z2(e,t=.15){return Cc(e)>.5?kg(e,t):Cg(e,t)}function JE(e,t,n){try{return Z2(e,t)}catch{return e}}function e9(e,t,n,r=1){const i=(l,c)=>Math.round((l**(1/r)*(1-n)+c**(1/r)*n)**r),o=Ut(e),s=Ut(t),a=[i(o.values[0],s.values[0]),i(o.values[1],s.values[1]),i(o.values[2],s.values[2])];return ko({type:"rgb",values:a})}const t9=["mode","contrastThreshold","tonalOffset"],w1={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:Xs.white,default:Xs.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}},Ld={text:{primary:Xs.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:Xs.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}};function _1(e,t,n,r){const i=r.light||r,o=r.dark||r*1.5;e[t]||(e.hasOwnProperty(n)?e[t]=e[n]:t==="light"?e.light=HE(e.main,i):t==="dark"&&(e.dark=WE(e.main,o)))}function n9(e="light"){return e==="dark"?{main:Si[200],light:Si[50],dark:Si[400]}:{main:Si[700],light:Si[400],dark:Si[800]}}function r9(e="light"){return e==="dark"?{main:_i[200],light:_i[50],dark:_i[400]}:{main:_i[500],light:_i[300],dark:_i[700]}}function i9(e="light"){return e==="dark"?{main:wi[500],light:wi[300],dark:wi[700]}:{main:wi[700],light:wi[400],dark:wi[800]}}function o9(e="light"){return e==="dark"?{main:ki[400],light:ki[300],dark:ki[700]}:{main:ki[700],light:ki[500],dark:ki[900]}}function s9(e="light"){return e==="dark"?{main:Ci[400],light:Ci[300],dark:Ci[700]}:{main:Ci[800],light:Ci[500],dark:Ci[900]}}function a9(e="light"){return e==="dark"?{main:Fo[400],light:Fo[300],dark:Fo[700]}:{main:"#ed6c02",light:Fo[500],dark:Fo[900]}}function l9(e){const{mode:t="light",contrastThreshold:n=3,tonalOffset:r=.2}=e,i=Yn(e,t9),o=e.primary||n9(t),s=e.secondary||r9(t),a=e.error||i9(t),l=e.info||o9(t),c=e.success||s9(t),u=e.warning||a9(t);function d(y){return VE(y,Ld.text.primary)>=n?Ld.text.primary:w1.text.primary}const f=({color:y,name:p,mainShade:m=500,lightShade:x=300,darkShade:b=700})=>{if(y=ae({},y),!y.main&&y[m]&&(y.main=y[m]),!y.hasOwnProperty("main"))throw new Error(ci(11,p?` (${p})`:"",m));if(typeof y.main!="string")throw new Error(ci(12,p?` (${p})`:"",JSON.stringify(y.main)));return _1(y,"light",x,r),_1(y,"dark",b,r),y.contrastText||(y.contrastText=d(y.main)),y},g={dark:Ld,light:w1};return Sn(ae({common:ae({},Xs),mode:t,primary:f({color:o,name:"primary"}),secondary:f({color:s,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:f({color:a,name:"error"}),warning:f({color:u,name:"warning"}),info:f({color:l,name:"info"}),success:f({color:c,name:"success"}),grey:gO,contrastThreshold:n,getContrastText:d,augmentColor:f,tonalOffset:r},g[t]),i)}const c9=["fontFamily","fontSize","fontWeightLight","fontWeightRegular","fontWeightMedium","fontWeightBold","htmlFontSize","allVariants","pxToRem"];function u9(e){return Math.round(e*1e5)/1e5}const S1={textTransform:"uppercase"},k1='"Roboto", "Helvetica", "Arial", sans-serif';function d9(e,t){const n=typeof t=="function"?t(e):t,{fontFamily:r=k1,fontSize:i=14,fontWeightLight:o=300,fontWeightRegular:s=400,fontWeightMedium:a=500,fontWeightBold:l=700,htmlFontSize:c=16,allVariants:u,pxToRem:d}=n,f=Yn(n,c9),g=i/14,v=d||(m=>`${m/c*g}rem`),y=(m,x,b,w,_)=>ae({fontFamily:r,fontWeight:m,fontSize:v(x),lineHeight:b},r===k1?{letterSpacing:`${u9(w/x)}em`}:{},_,u),p={h1:y(o,96,1.167,-1.5),h2:y(o,60,1.2,-.5),h3:y(s,48,1.167,0),h4:y(s,34,1.235,.25),h5:y(s,24,1.334,0),h6:y(a,20,1.6,.15),subtitle1:y(s,16,1.75,.15),subtitle2:y(a,14,1.57,.1),body1:y(s,16,1.5,.15),body2:y(s,14,1.43,.15),button:y(a,14,1.75,.4,S1),caption:y(s,12,1.66,.4),overline:y(s,12,2.66,1,S1),inherit:{fontFamily:"inherit",fontWeight:"inherit",fontSize:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}};return Sn(ae({htmlFontSize:c,pxToRem:v,fontFamily:r,fontSize:i,fontWeightLight:o,fontWeightRegular:s,fontWeightMedium:a,fontWeightBold:l},p),f,{clone:!1})}const f9=.2,h9=.14,p9=.12;function Ce(...e){return[`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${f9})`,`${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${h9})`,`${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${p9})`].join(",")}const g9=["none",Ce(0,2,1,-1,0,1,1,0,0,1,3,0),Ce(0,3,1,-2,0,2,2,0,0,1,5,0),Ce(0,3,3,-2,0,3,4,0,0,1,8,0),Ce(0,2,4,-1,0,4,5,0,0,1,10,0),Ce(0,3,5,-1,0,5,8,0,0,1,14,0),Ce(0,3,5,-1,0,6,10,0,0,1,18,0),Ce(0,4,5,-2,0,7,10,1,0,2,16,1),Ce(0,5,5,-3,0,8,10,1,0,3,14,2),Ce(0,5,6,-3,0,9,12,1,0,3,16,2),Ce(0,6,6,-3,0,10,14,1,0,4,18,3),Ce(0,6,7,-4,0,11,15,1,0,4,20,3),Ce(0,7,8,-4,0,12,17,2,0,5,22,4),Ce(0,7,8,-4,0,13,19,2,0,5,24,4),Ce(0,7,9,-4,0,14,21,2,0,5,26,4),Ce(0,8,9,-5,0,15,22,2,0,6,28,5),Ce(0,8,10,-5,0,16,24,2,0,6,30,5),Ce(0,8,11,-5,0,17,26,2,0,6,32,5),Ce(0,9,11,-5,0,18,28,2,0,7,34,6),Ce(0,9,12,-6,0,19,29,2,0,7,36,6),Ce(0,10,13,-6,0,20,31,3,0,8,38,7),Ce(0,10,13,-6,0,21,33,3,0,8,40,7),Ce(0,10,14,-6,0,22,35,3,0,8,42,7),Ce(0,11,14,-7,0,23,36,3,0,9,44,8),Ce(0,11,15,-7,0,24,38,3,0,9,46,8)];var m9=g9;const v9=["duration","easing","delay"],y9={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},x9={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function C1(e){return`${Math.round(e)}ms`}function b9(e){if(!e)return 0;const t=e/36;return Math.round((4+15*t**.25+t/5)*10)}function w9(e){const t=ae({},y9,e.easing),n=ae({},x9,e.duration);return ae({getAutoHeightDuration:b9,create:(i=["all"],o={})=>{const{duration:s=n.standard,easing:a=t.easeInOut,delay:l=0}=o;return Yn(o,v9),(Array.isArray(i)?i:[i]).map(c=>`${c} ${typeof s=="string"?s:C1(s)} ${a} ${typeof l=="string"?l:C1(l)}`).join(",")}},e,{easing:t,duration:n})}const _9={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500};var S9=_9;const k9=["breakpoints","mixins","spacing","palette","transitions","typography","shape"];function J2(e={},...t){const{mixins:n={},palette:r={},transitions:i={},typography:o={}}=e,s=Yn(e,k9);if(e.vars)throw new Error(ci(18));const a=l9(r),l=xg(e);let c=Sn(l,{mixins:jE(l.breakpoints,n),palette:a,shadows:m9.slice(),typography:d9(a,o),transitions:w9(i),zIndex:ae({},S9)});return c=Sn(c,s),c=t.reduce((u,d)=>Sn(u,d),c),c.unstable_sxConfig=ae({},Pa,s==null?void 0:s.unstable_sxConfig),c.unstable_sx=function(d){return Ou({sx:d,theme:this})},c}function C9(e){return String(e).match(/[\d.\-+]*\s*(.*)/)[1]||""}function P9(e){return parseFloat(e)}const O9=J2();var M9=O9,Oa={},Pg={exports:{}};(function(e){function t(n,r){if(n==null)return{};var i={};for(var o in n)if({}.hasOwnProperty.call(n,o)){if(r.includes(o))continue;i[o]=n[o]}return i}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports})(Pg);var E9=Hn(gM),N9=Hn(mM),T9=Hn(SM),A9=Hn(EE),$9=Hn(dE),R9=Hn(yE),Co=_g.exports;Object.defineProperty(Oa,"__esModule",{value:!0});var L9=Oa.default=K9;Oa.shouldForwardProp=Tl;Oa.systemDefaultTheme=void 0;var It=Co(fg.exports),fh=Co(Pg.exports),P1=W9(E9),D9=N9;Co(T9);Co(A9);var z9=Co($9),I9=Co(R9);const j9=["ownerState"],F9=["variants"],B9=["name","slot","skipVariantsResolver","skipSx","overridesResolver"];function ew(e){if(typeof WeakMap!="function")return null;var t=new WeakMap,n=new WeakMap;return(ew=function(r){return r?n:t})(e)}function W9(e,t){if(!t&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var n=ew(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(o!=="default"&&Object.prototype.hasOwnProperty.call(e,o)){var s=i?Object.getOwnPropertyDescriptor(e,o):null;s&&(s.get||s.set)?Object.defineProperty(r,o,s):r[o]=e[o]}return r.default=e,n&&n.set(e,r),r}function V9(e){return Object.keys(e).length===0}function H9(e){return typeof e=="string"&&e.charCodeAt(0)>96}function Tl(e){return e!=="ownerState"&&e!=="theme"&&e!=="sx"&&e!=="as"}const U9=Oa.systemDefaultTheme=(0,z9.default)(),Y9=e=>e&&e.charAt(0).toLowerCase()+e.slice(1);function Ja({defaultTheme:e,theme:t,themeId:n}){return V9(t)?e:t[n]||t}function X9(e){return e?(t,n)=>n[e]:null}function Al(e,t){let{ownerState:n}=t,r=(0,fh.default)(t,j9);const i=typeof e=="function"?e((0,It.default)({ownerState:n},r)):e;if(Array.isArray(i))return i.flatMap(o=>Al(o,(0,It.default)({ownerState:n},r)));if(!!i&&typeof i=="object"&&Array.isArray(i.variants)){const{variants:o=[]}=i;let a=(0,fh.default)(i,F9);return o.forEach(l=>{let c=!0;typeof l.props=="function"?c=l.props((0,It.default)({ownerState:n},r,n)):Object.keys(l.props).forEach(u=>{(n==null?void 0:n[u])!==l.props[u]&&r[u]!==l.props[u]&&(c=!1)}),c&&(Array.isArray(a)||(a=[a]),a.push(typeof l.style=="function"?l.style((0,It.default)({ownerState:n},r,n)):l.style))}),a}return i}function K9(e={}){const{themeId:t,defaultTheme:n=U9,rootShouldForwardProp:r=Tl,slotShouldForwardProp:i=Tl}=e,o=s=>(0,I9.default)((0,It.default)({},s,{theme:Ja((0,It.default)({},s,{defaultTheme:n,themeId:t}))}));return o.__mui_systemSx=!0,(s,a={})=>{(0,P1.internal_processStyles)(s,_=>_.filter(k=>!(k!=null&&k.__mui_systemSx)));const{name:l,slot:c,skipVariantsResolver:u,skipSx:d,overridesResolver:f=X9(Y9(c))}=a,g=(0,fh.default)(a,B9),v=u!==void 0?u:c&&c!=="Root"&&c!=="root"||!1,y=d||!1;let p,m=Tl;c==="Root"||c==="root"?m=r:c?m=i:H9(s)&&(m=void 0);const x=(0,P1.default)(s,(0,It.default)({shouldForwardProp:m,label:p},g)),b=_=>typeof _=="function"&&_.__emotion_real!==_||(0,D9.isPlainObject)(_)?k=>Al(_,(0,It.default)({},k,{theme:Ja({theme:k.theme,defaultTheme:n,themeId:t})})):_,w=(_,...k)=>{let P=b(_);const M=k?k.map(b):[];l&&f&&M.push(j=>{const I=Ja((0,It.default)({},j,{defaultTheme:n,themeId:t}));if(!I.components||!I.components[l]||!I.components[l].styleOverrides)return null;const W=I.components[l].styleOverrides,Z={};return Object.entries(W).forEach(([V,K])=>{Z[V]=Al(K,(0,It.default)({},j,{theme:I}))}),f(j,Z)}),l&&!v&&M.push(j=>{var I;const W=Ja((0,It.default)({},j,{defaultTheme:n,themeId:t})),Z=W==null||(I=W.components)==null||(I=I[l])==null?void 0:I.variants;return Al({variants:Z},(0,It.default)({},j,{theme:W}))}),y||M.push(o);const E=M.length-k.length;if(Array.isArray(_)&&E>0){const j=new Array(E).fill("");P=[..._,...j],P.raw=[..._.raw,...j]}const A=x(P,...M);return s.muiName&&(A.muiName=s.muiName),A};return x.withConfig&&(w.withConfig=x.withConfig),w}}function G9(e){return e!=="ownerState"&&e!=="theme"&&e!=="sx"&&e!=="as"}const q9=e=>G9(e)&&e!=="classes";var Q9=q9;const Z9=L9({themeId:p2,defaultTheme:M9,rootShouldForwardProp:Q9});var J9=Z9;function tw(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=tw(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function e6(){for(var e,t,n=0,r="",i=arguments.length;n<i;n++)(e=arguments[n])&&(t=tw(e))&&(r&&(r+=" "),r+=t);return r}function t6(e){return IE(e)}const n6=B2("MuiBox",["root"]);var r6=n6;const i6=J2(),o6=SE({themeId:p2,defaultTheme:i6,defaultClassName:r6.root,generateClassName:I2.generate});var rn=o6;function s6(e){return F2("MuiSkeleton",e)}B2("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const a6=["animation","className","component","height","style","variant","width"];let Pc=e=>e,O1,M1,E1,N1;const l6=e=>{const{classes:t,variant:n,animation:r,hasChildren:i,width:o,height:s}=e;return LE({root:["root",n,r,i&&"withChildren",i&&!o&&"fitContent",i&&!s&&"heightAuto"]},s6,t)},c6=hg(O1||(O1=Pc`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),u6=hg(M1||(M1=Pc`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`)),d6=J9("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],n.animation!==!1&&t[n.animation],n.hasChildren&&t.withChildren,n.hasChildren&&!n.width&&t.fitContent,n.hasChildren&&!n.height&&t.heightAuto]}})(({theme:e,ownerState:t})=>{const n=C9(e.shape.borderRadius)||"px",r=P9(e.shape.borderRadius);return ae({display:"block",backgroundColor:e.vars?e.vars.palette.Skeleton.bg:RE(e.palette.text.primary,e.palette.mode==="light"?.11:.13),height:"1.2em"},t.variant==="text"&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${r}${n}/${Math.round(r/.6*10)/10}${n}`,"&:empty:before":{content:'"\\00a0"'}},t.variant==="circular"&&{borderRadius:"50%"},t.variant==="rounded"&&{borderRadius:(e.vars||e).shape.borderRadius},t.hasChildren&&{"& > *":{visibility:"hidden"}},t.hasChildren&&!t.width&&{maxWidth:"fit-content"},t.hasChildren&&!t.height&&{height:"auto"})},({ownerState:e})=>e.animation==="pulse"&&Sc(E1||(E1=Pc`
      animation: ${0} 2s ease-in-out 0.5s infinite;
    `),c6),({ownerState:e,theme:t})=>e.animation==="wave"&&Sc(N1||(N1=Pc`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 2s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          ${0},
          transparent
        );
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `),u6,(t.vars||t).palette.action.hover)),f6=C.exports.forwardRef(function(t,n){const r=t6({props:t,name:"MuiSkeleton"}),{animation:i="pulse",className:o,component:s="span",height:a,style:l,variant:c="text",width:u}=r,d=Yn(r,a6),f=ae({},r,{animation:i,component:s,variant:c,hasChildren:Boolean(d.children)}),g=l6(f);return h(d6,ae({as:s,ref:n,className:e6(g.root,o),ownerState:f},d,{style:ae({width:u,height:a},l)}))});var Te=f6;const h6=()=>h(Ve,{children:S(rn,{sx:{display:"flex",flexDirection:"column",gap:2,width:"100%",justifyContent:"center"},children:[h(Te,{variant:"text",sx:{fontSize:"1rem"}}),h(Te,{variant:"circular",width:60,height:60}),h(Te,{variant:"h1",sx:{fontSize:"1rem"}}),h(Te,{variant:"h1",sx:{fontSize:"1rem"}}),h(Te,{variant:"rectangular",width:"100%",height:300}),h(Te,{variant:"h1",sx:{fontSize:"1rem",width:"300px"}}),S(rn,{sx:{display:"flex",flexDirection:"row",gap:3,width:"100%",justifyContent:"center",marginTop:4},children:[h(Te,{variant:"rounded",width:210,height:60}),h(Te,{variant:"rounded",width:210,height:60})]}),h(Te,{variant:"h1",sx:{fontSize:"3rem"}}),h(Te,{variant:"h1",sx:{fontSize:"3rem"}})]})}),p6=()=>h(Ve,{children:[0,1,2,3,4,5].map(e=>S(rn,{sx:{display:"flex",flexDirection:"column",gap:1,width:"100%"},children:[h(Te,{variant:"rounded",width:230,height:85}),S(rn,{sx:{pt:.5},children:[h(Te,{}),h(Te,{width:"60%"})]})]},e))}),g6=()=>h(Ve,{children:[0,1,2,3,4,5].map(e=>S(rn,{sx:{my:2},children:[h(Te,{variant:"rounded",width:50,height:50}),S(rn,{sx:{pt:.5},children:[h(Te,{}),h(Te,{width:"60%"})]})]},e))}),m6=()=>h(Ve,{children:[0,1,2,3,4,5].map(e=>S(rn,{sx:{display:"flex",alignItems:"justify-center",marginBottom:"30px"},children:[h(rn,{sx:{width:60,height:60,marginRight:2},children:h(Te,{variant:"rounded",width:60,height:60})}),S(rn,{sx:{pt:.5},width:"100%",children:[h(Te,{}),h(Te,{width:"60%"})]})]},e))}),v6=()=>h(Ve,{children:[0,1,2,3,4,5].map(e=>S(rn,{sx:{display:"flex",flexDirection:"column",gap:1,width:"100%"},children:[h(Te,{variant:"rounded",width:230,height:60}),S(rn,{sx:{pt:.5},children:[h(Te,{}),h(Te,{width:"60%"})]})]},e))});H.div`
  border: 1px solid #e0e0e0;

  .amc-image {
    margin-right: auto;
    
    img {
      border-radius: 20%;
      object-fit: cover;
    }
  }

  .amc-details {
    display: flex;
    justify-content: space-between;
    width: 100%;
    
    .amc-content{
      max-width: 210px;
      // font-weight: 600;

      .name {
        font-size: 1.2rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: ${e=>e.theme.textColor};
      }
      .description {
        font-size: 10px;
        color: #757575;
        margin-top: 4px;
        
        svg{
          vertical-align: middle;
        }
      }
    }

  .return{
    text-align: right;
    // font-weight: 600;
    color: #757575;
    
    .total-return{
      // font-weight: 700;
      font-size: 12px;
    }
  }

@media (min-width: 768px) {
  .name {
    font-size: 1.4rem;
  }
}
`;const y6=({schemes:e,loading:t})=>h(Ve,{children:t?p6():e.map((n,r)=>h(h2,{scheme:n},r))}),x6=H.div`
  .quick-access-container {
    display: flex;
    overflow: auto;
    gap: 1rem;
    margin-top: 10px;

    .item {
      display: flex;
      min-width: 20rem;
      flex-direction: row;
      align-items: flex-start;
      gap: 0.5rem;
      border: 1px solid rgb(224, 224, 224);
      padding: 1rem;
      border-radius: 1rem;

      .name {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        p {
          font-size: 1.4rem;
          font-weight: 600;
        }
        img {
          width: 3rem;
        }
      }
      .description {
        margin-top: 2rem;
        font-size: 1.2rem;
      }
    }
  }

  @media (min-width: 768px) {
    .name {
      font-size: 1.4rem;
    }
  }
`,b6=({loading:e})=>h(x6,{children:h("div",{className:"quick-access-container",children:e?v6():[{name:"SIP Calculator",url:"sip",logo:"sip-calc.webp",desc:"Easily calculate SIP returns and plan your investments."},{name:"Loan Calculator",url:"loan",logo:"sip-calc.webp",desc:"Estimate loan payments and interest rates accurately."}].map((n,r)=>h("div",{className:"item",children:S(Oe,{className:"link",to:"",children:[S("div",{className:"name",children:[h("img",{src:`./images/${n.logo}`,alt:""}),h("p",{children:n.name})]}),h("div",{className:"description",children:oh(n.desc)})]})},r))})}),w6=({collections:e,loading:t})=>h(Ve,{children:t?g6():e.map((n,r)=>S(Oe,{to:`/schemes/${n.url}`,children:[h("div",{className:"",children:h("img",{src:`./public/images/collection/${n.image}`,alt:""})}),h("div",{className:"name",children:n.name})]},r))}),_6=H.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;

  .filter-button {
    padding: 0.2rem 0;
    cursor: pointer;
    transition: background-color 0.3s;
    border-radius: 5px;
    font-size: 1.4rem;
    font-weight: 600;
    // color: ${e=>e.theme.textColor};
    color: rgb(145, 71, 255);
    background-color: ${e=>e.theme.header};
    cursor: pointer;
    border-bottom: 1px dashed;
  }
`,S6=({activeFilter:e,onFilterChange:t})=>{const[n,r]=C.exports.useState(1),i=o=>{t(o),r(o==3?1:o+1)};return h(_6,{children:S("div",{className:"year-filters",children:[n===1&&h("button",{className:"filter-button",onClick:()=>i(1),children:"< > 1Y Returns"}),n===2&&h("button",{className:"filter-button",onClick:()=>i(2),children:"< > 3Y Returns"}),n===3&&h("button",{className:"filter-button",onClick:()=>i(0),children:"< > 5Y Returns"})]})})},k6=H.div`
  .schemes-header {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    margin: 1rem 0px;
    align-items: center;

    h2 {
      font-size: 1.8rem;
    }
  }
`,Iu=({schemes:e,loading:t,customHeader:n})=>{const[r,i]=C.exports.useState(0),[o,s]=C.exports.useState(!1);return t===!1&&e.length===0&&s(!0),S(k6,{children:[h("div",{className:"schemes-header",children:n?h("h2",{children:n}):S(Ve,{children:[h("h2",{children:"Mutual Funds"}),h(S6,{activeFilter:r,onFilterChange:i})]})}),t?m6():e.map((a,l)=>h(h2,{scheme:a},l))]})},C6=H.div`
  border-bottom: 1px solid #ebe7e7;
  padding-bottom: 10px;
  overflow-y: hidden;

  .explore-box {
    padding: 2rem 1rem 0;
    background: white;
  }

  h2 {
    color: ${e=>e.theme.textColor};
    font-size: 18px;
  }
  .division {
    margin-bottom: 30px;
  }

  .popular-funds {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 18px;

    .link {
      font-size: 16px;
      color: ${e=>e.theme.color};
      font-weight: 700;
    }
  }

  .popular-items {
    display: flex;
    overflow: auto;
    gap: 1.5rem;
    margin-top: 10px;

    .scheme-container {
      display: flex;
      min-width: 27rem;
      flex-direction: column;
      align-items: flex-start;
      gap: 0.5rem;
      border: 1px solid rgb(224, 224, 224);
      padding: 1rem;
      position: relative;

      .info {
        margin-left: 0;
        padding: 0;
        .name {
          -webkit-line-clamp: 1;
        }
      }
      .return {
        position: absolute;
        right: 0;
        margin-right: 1rem;
        div {
          padding-top: 0;
        }
        .normal { display: none; }
        .popular { display: initial; }
      }
    }
  }

  .popular-items::-webkit-scrollbar {
    display: none;
  }

  .collection-section {
    .collection-items {
      margin-top: 15px;
      display: grid;
      margin-top: 15px;
      grid-template-columns: 1fr 1fr 1fr;
      justify-items: center;
      align-items: center;
      row-gap: 2rem;

      img {
        height: 5rem;
      }
      .name {
        font-size: 1.2rem;
        margin-top: 1rem;
      }
    }
  }

  @media (min-width: 768px) {
    .amc-info {
      .name {
        font-size: 1.4rem;
        color: #44475b;
        font-weight: 600;
      }
    }
    .collection-container {
      .collection-content {
        .name {
          font-size: 1.4rem;
        }
      }
    }
  }
`,P6=()=>{const{collections:e}=bt(c=>c.amcCollection),[t,n]=C.exports.useState(!1),[r,i]=C.exports.useState([]),[o,s]=C.exports.useState(void 0),[a,l]=C.exports.useState(!0);return C.exports.useEffect(()=>{(async()=>{try{const u=await du("schemes");i(u)}catch(u){s(u)}finally{l(!1)}})()},[]),h(C6,{children:S("div",{className:"container",children:[S("div",{className:"popular-fund-section division",children:[S("div",{className:"popular-funds",children:[h("h2",{children:"Popular Funds"}),h(Oe,{className:"link",to:"/all-mutual-funds",title:"All Mutual Funds",children:"All Mutual Funds"})]}),h("div",{className:"popular-items",children:h(y6,{schemes:r,loading:a})})]}),S("div",{className:"collection-section division",children:[h("h2",{children:"Collections"}),h("div",{className:"collection-items",children:h(w6,{collections:e,loading:t})})]}),S("div",{className:"quick-access-section division",children:[h("h2",{children:"Quick Access"}),h(b6,{schemes:r,loading:a})]}),h("div",{className:"all-mf-section division",children:h(Iu,{schemes:r,loading:a})})]})})},Gn=(e,t)=>{var i;let n=Math.abs(e);n=(i=n==null?void 0:n.toFixed(0))==null?void 0:i.replace(/\B(?=(\d{3})+(?!\d))/g,",");let r=n.split(",");if(r.length>1){let o=r[r.length-1];n=r.slice(0,r.length-1).join("").replace(/\B(?=(\d{2})+(?!\d))/g,",")+","+o}return t==="simple"?{paisa:`\u20B9${n}`}:{paisa:e>0?`+ \u20B9${n}`:`- \u20B9${n}`,color:e>0?"#0add8c":"#f00"}},O6=H.div`
  .division {
    margin-bottom: 30px;
    h2 {
      font-size: 18px;
    }
  }
  .investment-container {
    border: 1px solid ${e=>e.theme.border};
    border-radius: 5px;
    .total-amt {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 10px;

      .amt-section {
        display: flex;
        justify-content: space-between;
      }

      .amt-box {
        .title {
          text-align: left;
        }
      }
      .amt-box,
      .return {
        .amt {
          font-size: 16px;
        }
        .title {
          color: #757575;
          font-size: 10px;
        }
      }
      .return {
        text-align: right;
      }
    }
  }

  .xirr-return {
    display: flex;
    font-size: 12px;
    border-top: 1px solid ${e=>e.theme.border};
    justify-content: space-between;
    padding: 10px 20px;

    div {
      span {
        color: #757575;
        font-size: 10px;
        margin-right: 10px;
      }
    }
    a {
      color: ${e=>e.theme.color};
    }
  }
`,M6=()=>{bt(n=>n.schemes);const e=6e3,t=-5e3;return h(O6,{children:S("div",{className:"container",children:[h("div",{className:"division section-heading",children:h("h2",{children:"Investments"})}),S("div",{className:"investment-container",children:[S("div",{className:"total-amt",children:[S("div",{className:"amt-section current",children:[S("div",{className:"amt-box",children:[h("div",{className:"title",children:"Current"}),S("div",{className:"amt",style:{color:Gn(e,"simple").color},children:[Gn(e,"simple").paisa," "]})]}),S("div",{className:"return",children:[h("div",{className:"title",children:"Total Returns"}),S("div",{className:"amt",style:{color:Gn(e).color},children:[Gn(e).paisa," "]})]})]}),S("div",{className:"amt-section invested",children:[S("div",{className:"amt-box",children:[h("div",{className:"title",children:"Invested"}),S("div",{className:"amt",style:{color:Gn(t,"simple").color},children:[Gn(t,"simple").paisa," "]})]}),S("div",{className:"return",children:[h("div",{className:"title",children:"1D Returns"}),S("div",{className:"amt",style:{color:Gn(t).color},children:[Gn(t).paisa," "]})]})]})]}),S("div",{className:"xirr-return",children:[S("div",{className:"",children:[h("span",{children:"XIRR"}),"17.23%"]}),h(Oe,{to:"",title:"aa",children:"Portfolio analysis"})]})]})]})})},E6=H.div`
`,N6=()=>h(E6,{children:h(ag,{tabs:[{name:"explore",title:"Explore",component:h(P6,{})},{name:"dashboard",title:"Dashboard",component:h(M6,{})}]})}),T6=H.div`
  // Mobile
  .header {
    display: block;
    width: 100%;
    font-size: 2rem;
    position: absolute;
    top: 10px;
    z-index: 1;
    padding: 20px 30px;
  }
  .login-mobile {
    background-color: white;
    height: 100vh;

    .slider {
      height: 100%;
    }

    .header {
      display: block;
      padding: 10px;
      width: 100%;
      font-size: 2rem;
    }

    .login-container {
      margin: 0px auto;
      width: 100%;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      

      .login-otp,
      .login-google {
        width: 30rem;
        padding: 1rem;
        font-size: 1.8rem;
      }

      .no-account {
        font-size: 1.4rem;
        padding: 2rem;

        a {
          color: #9147ff;
        }
      }
    }


    .login-box {
      padding: 75px 10px;
      color: ${e=>e.theme.textColor};
      background-color: ${e=>e.theme.header};
      position: relative;
      z-index: 3;
      animation: pageAnim 0.3s ease-in-out;
    }

    @media (max-width: 767px) {
      // display: block;
    }
  }

  // Desktop
  .login-desktop {
    display: none;

    .login-box {
      display: block;

      .page-title {
        color: ${e=>e.theme.textColor};
        font-size: 50px;
        padding: 30px 0;
      }
    }

    @media (min-width: 768px) {
      // display: block;
    }
  }
`;var nw={};function A6(e){return e&&e.__esModule?e:{default:e}}var ju=A6,Og={};function hh(){return Fu=hh=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},hh.apply(this,arguments)}var Fu=hh;function $6(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}var R6=$6,L6=R6;function D6(e,t){if(e==null)return{};var n=L6(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(n[r]=e[r]))}return n}var Mg=D6;function z6(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var Eg=z6;function T1(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function I6(e,t,n){return t&&T1(e.prototype,t),n&&T1(e,n),e}var Ng=I6;function Ji(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Ji=function(n){return typeof n}:Ji=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Ji(e)}function $l(e){return typeof Symbol=="function"&&Ji(Symbol.iterator)==="symbol"?ph=$l=function(n){return Ji(n)}:ph=$l=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":Ji(n)},$l(e)}var ph=$l;function j6(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var F6=j6,B6=ph,W6=F6;function V6(e,t){return t&&(B6(t)==="object"||typeof t=="function")?t:W6(e)}var Tg=V6;function gh(e){return Bu=gh=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},gh(e)}var Bu=gh;function mh(e,t){return rw=mh=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},mh(e,t)}var rw=mh,H6=rw;function U6(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&H6(e,t)}var Ag=U6;function Y6(e,t){if(e===t)return!0;if(!e||!t)return!1;var n=Object.keys(e),r=Object.keys(t),i=n.length;if(r.length!==i)return!1;for(var o=0;o<i;o++){var s=n[o];if(e[s]!==t[s]||!Object.prototype.hasOwnProperty.call(t,s))return!1}return!0}function X6(e,t){if(e===t)return!0;if(!e||!t)return!1;var n=e.length;if(t.length!==n)return!1;for(var r=0;r<n;r++)if(e[r]!==t[r])return!1;return!0}var K6=Object.freeze(Object.defineProperty({__proto__:null,shallowEqualArrays:X6,shallowEqualObjects:Y6},Symbol.toStringTag,{value:"Module"})),G6=Hn(K6),Ma={},iw={exports:{}};(function(e){function t(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports})(iw);var ow={exports:{}},sw={exports:{}},Ea={exports:{}};(function(e){function t(n){return e.exports=t=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},e.exports.__esModule=!0,e.exports.default=e.exports,t(n)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports})(Ea);var aw={exports:{}};(function(e){var t=Ea.exports.default;function n(r,i){if(t(r)!="object"||!r)return r;var o=r[Symbol.toPrimitive];if(o!==void 0){var s=o.call(r,i||"default");if(t(s)!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(i==="string"?String:Number)(r)}e.exports=n,e.exports.__esModule=!0,e.exports.default=e.exports})(aw);(function(e){var t=Ea.exports.default,n=aw.exports;function r(i){var o=n(i,"string");return t(o)=="symbol"?o:o+""}e.exports=r,e.exports.__esModule=!0,e.exports.default=e.exports})(sw);(function(e){var t=sw.exports;function n(i,o){for(var s=0;s<o.length;s++){var a=o[s];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(i,t(a.key),a)}}function r(i,o,s){return o&&n(i.prototype,o),s&&n(i,s),Object.defineProperty(i,"prototype",{writable:!1}),i}e.exports=r,e.exports.__esModule=!0,e.exports.default=e.exports})(ow);var lw={exports:{}},cw={exports:{}};(function(e){function t(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports})(cw);(function(e){var t=Ea.exports.default,n=cw.exports;function r(i,o){if(o&&(t(o)=="object"||typeof o=="function"))return o;if(o!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return n(i)}e.exports=r,e.exports.__esModule=!0,e.exports.default=e.exports})(lw);var uw={exports:{}};(function(e){function t(n){return e.exports=t=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},e.exports.__esModule=!0,e.exports.default=e.exports,t(n)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports})(uw);var dw={exports:{}},fw={exports:{}};(function(e){function t(n,r){return e.exports=t=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,o){return i.__proto__=o,i},e.exports.__esModule=!0,e.exports.default=e.exports,t(n,r)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports})(fw);(function(e){var t=fw.exports;function n(r,i){if(typeof i!="function"&&i!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(i&&i.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),Object.defineProperty(r,"prototype",{writable:!1}),i&&t(r,i)}e.exports=n,e.exports.__esModule=!0,e.exports.default=e.exports})(dw);var hw={exports:{}};(function(e){var t=Pg.exports;function n(r,i){if(r==null)return{};var o,s,a=t(r,i);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(r);for(s=0;s<l.length;s++)o=l[s],i.includes(o)||{}.propertyIsEnumerable.call(r,o)&&(a[o]=r[o])}return a}e.exports=n,e.exports.__esModule=!0,e.exports.default=e.exports})(hw);Object.defineProperty(Ma,"__esModule",{value:!0});function ln(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var q6=ln(iw.exports),Q6=ln(ow.exports),Z6=ln(lw.exports),J6=ln(uw.exports),eN=ln(dw.exports),tN=ln(Ea.exports),nN=ln(hw.exports),rN=ln(fg.exports),iN=ln(C.exports);ln(wo.exports);ln(og);function oN(e,t,n){return Object.defineProperty(e,t,n)}var sN=function(){var e=null;return function(){if(e!==null)return e;var t=!1;try{window.addEventListener("test",null,oN({},"passive",{get:function(){t=!0}}))}catch{}return e=t,t}()}(),aN={capture:!1,passive:!1};function pw(e){return rN({},aN,e)}function gw(e,t,n){var r=[e,t];return r.push(sN?n:n.capture),r}function A1(e,t,n,r){e.addEventListener.apply(e,gw(t,n,r))}function $1(e,t,n,r){e.removeEventListener.apply(e,gw(t,n,r))}function lN(e,t){e.children,e.target;var n=nN(e,["children","target"]);Object.keys(n).forEach(function(r){if(r.substring(0,2)==="on"){var i=n[r],o=tN(i),s=o==="object",a=o==="function";if(!(!s&&!a)){var l=r.substr(-7).toLowerCase()==="capture",c=r.substring(2).toLowerCase();c=l?c.substring(0,c.length-7):c,s?t(c,i.handler,i.options):t(c,i,pw({capture:l}))}}})}function cN(e,t){return{handler:e,options:pw(t)}}var mw=function(e){eN(t,e);function t(){return q6(this,t),Z6(this,J6(t).apply(this,arguments))}return Q6(t,[{key:"componentDidMount",value:function(){this.applyListeners(A1)}},{key:"componentDidUpdate",value:function(r){this.applyListeners($1,r),this.applyListeners(A1)}},{key:"componentWillUnmount",value:function(){this.applyListeners($1)}},{key:"applyListeners",value:function(r){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.props,o=i.target;if(o){var s=o;typeof o=="string"&&(s=window[o]),lN(i,r.bind(null,s))}}},{key:"render",value:function(){return this.props.children||null}}]),t}(iN.PureComponent);mw.propTypes={};Ma.withOptions=cN;Ma.default=mw;var On=ju;Object.defineProperty(Og,"__esModule",{value:!0});Og.default=xN;var R1=On(Fu),uN=On(Mg),dN=On(Eg),fN=On(Ng),hN=On(Tg),pN=On(Bu),gN=On(Ag),Wo=On(C.exports);On(wo.exports);var mN=G6,vN=On(Ma),yN=wa;function xN(e){var t=function(n){(0,gN.default)(r,n);function r(i){var o;return(0,dN.default)(this,r),o=(0,hN.default)(this,(0,pN.default)(r).call(this,i)),o.timer=null,o.state={},o.handleInterval=function(){var s=o.props,a=s.children,l=s.direction,c=s.onChangeIndex,u=s.slideCount,d=o.state.index,f=d;l==="incremental"?f+=1:f-=1,(u||a)&&(f=(0,yN.mod)(f,u||Wo.default.Children.count(a))),o.props.index===void 0&&o.setState({index:f}),c&&c(f,d)},o.handleChangeIndex=function(s,a,l){o.props.index===void 0&&o.setState({index:s}),o.props.onChangeIndex&&o.props.onChangeIndex(s,a,l)},o.handleSwitching=function(s,a){o.timer?(clearInterval(o.timer),o.timer=null):a==="end"&&o.startInterval(),o.props.onSwitching&&o.props.onSwitching(s,a)},o.handleVisibilityChange=function(s){s.target.hidden?clearInterval(o.timer):o.startInterval()},o.state.index=i.index||0,o}return(0,fN.default)(r,[{key:"componentDidMount",value:function(){this.startInterval()}},{key:"UNSAFE_componentWillReceiveProps",value:function(o){var s=o.index;typeof s=="number"&&s!==this.props.index&&this.setState({index:s})}},{key:"componentDidUpdate",value:function(o){var s=!(0,mN.shallowEqualObjects)({index:o.index,interval:o.interval,autoplay:o.autoplay},{index:this.props.index,interval:this.props.interval,autoplay:this.props.autoplay});s&&this.startInterval()}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}},{key:"startInterval",value:function(){var o=this.props,s=o.autoplay,a=o.interval;clearInterval(this.timer),s&&(this.timer=setInterval(this.handleInterval,a))}},{key:"render",value:function(){var o=this.props,s=o.autoplay;o.direction,o.index,o.interval;var a=o.onChangeIndex,l=(0,uN.default)(o,["autoplay","direction","index","interval","onChangeIndex"]),c=this.state.index;return s?Wo.default.createElement(vN.default,{target:"document",onVisibilityChange:this.handleVisibilityChange},Wo.default.createElement(e,(0,R1.default)({index:c,onChangeIndex:this.handleChangeIndex,onSwitching:this.handleSwitching},l))):Wo.default.createElement(e,(0,R1.default)({index:c,onChangeIndex:a},l))}}]),r}(Wo.default.Component);return t.propTypes={},t.defaultProps={autoplay:!0,direction:"incremental",interval:3e3},t}var $g={},vh={exports:{}};(function(e,t){function n(l){if(l&&typeof l=="object"){var c=l.which||l.keyCode||l.charCode;c&&(l=c)}if(typeof l=="number")return s[l];var u=String(l),d=r[u.toLowerCase()];if(d)return d;var d=i[u.toLowerCase()];if(d)return d;if(u.length===1)return u.charCodeAt(0)}n.isEventKey=function(c,u){if(c&&typeof c=="object"){var d=c.which||c.keyCode||c.charCode;if(d==null)return!1;if(typeof u=="string"){var f=r[u.toLowerCase()];if(f)return f===d;var f=i[u.toLowerCase()];if(f)return f===d}else if(typeof u=="number")return u===d;return!1}},t=e.exports=n;var r=t.code=t.codes={backspace:8,tab:9,enter:13,shift:16,ctrl:17,alt:18,"pause/break":19,"caps lock":20,esc:27,space:32,"page up":33,"page down":34,end:35,home:36,left:37,up:38,right:39,down:40,insert:45,delete:46,command:91,"left command":91,"right command":93,"numpad *":106,"numpad +":107,"numpad -":109,"numpad .":110,"numpad /":111,"num lock":144,"scroll lock":145,"my computer":182,"my calculator":183,";":186,"=":187,",":188,"-":189,".":190,"/":191,"`":192,"[":219,"\\":220,"]":221,"'":222},i=t.aliases={windows:91,"\u21E7":16,"\u2325":18,"\u2303":17,"\u2318":91,ctl:17,control:17,option:18,pause:19,break:19,caps:20,return:13,escape:27,spc:32,spacebar:32,pgup:33,pgdn:34,ins:45,del:46,cmd:91};/*!
 * Programatically add the following
 */for(o=97;o<123;o++)r[String.fromCharCode(o)]=o-32;for(var o=48;o<58;o++)r[o-48]=o;for(o=1;o<13;o++)r["f"+o]=o+111;for(o=0;o<10;o++)r["numpad "+o]=o+96;var s=t.names=t.title={};for(o in r)s[r[o]]=o;for(var a in i)r[a]=i[a]})(vh,vh.exports);var cn=ju;Object.defineProperty($g,"__esModule",{value:!0});$g.default=NN;var bN=cn(Fu),wN=cn(Mg),_N=cn(Eg),SN=cn(Ng),kN=cn(Tg),CN=cn(Bu),PN=cn(Ag),el=cn(C.exports);cn(wo.exports);var ON=cn(vh.exports),MN=cn(Ma),EN=wa;function NN(e){var t=function(n){(0,PN.default)(r,n);function r(){var i,o;(0,_N.default)(this,r);for(var s=arguments.length,a=new Array(s),l=0;l<s;l++)a[l]=arguments[l];return o=(0,kN.default)(this,(i=(0,CN.default)(r)).call.apply(i,[this].concat(a))),o.state={},o.handleKeyDown=function(c){var u,d=o.props,f=d.axis,g=f===void 0?"x":f,v=d.children,y=d.onChangeIndex,p=d.slideCount;switch((0,ON.default)(c)){case"page down":case"down":g==="y"?u="decrease":g==="y-reverse"&&(u="increase");break;case"left":g==="x"?u="decrease":g==="x-reverse"&&(u="increase");break;case"page up":case"up":g==="y"?u="increase":g==="y-reverse"&&(u="decrease");break;case"right":g==="x"?u="increase":g==="x-reverse"&&(u="decrease");break}if(u){var m=o.state.index,x=m;u==="increase"?x+=1:x-=1,(p||v)&&(x=(0,EN.mod)(x,p||el.default.Children.count(v))),o.props.index===void 0&&o.setState({index:x}),y&&y(x,m)}},o.handleChangeIndex=function(c,u,d){o.props.index===void 0&&o.setState({index:c}),o.props.onChangeIndex&&o.props.onChangeIndex(c,u,d)},o}return(0,SN.default)(r,[{key:"UNSAFE_componentWillMount",value:function(){this.setState({index:this.props.index||0})}},{key:"UNSAFE_componentWillReceiveProps",value:function(o){var s=o.index;typeof s=="number"&&s!==this.props.index&&this.setState({index:s})}},{key:"render",value:function(){var o=this.props;o.index,o.onChangeIndex;var s=(0,wN.default)(o,["index","onChangeIndex"]),a=this.state.index;return el.default.createElement(MN.default,{target:"window",onKeyDown:this.handleKeyDown},el.default.createElement(e,(0,bN.default)({index:a,onChangeIndex:this.handleChangeIndex},s)))}}]),r}(el.default.Component);return t.propTypes={},t}var Rg={};function TN(e){if(e&&e.__esModule)return e;var t={};if(e!=null){for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}}return t.default=e,t}var AN=TN,$N=AN,zr=ju;Object.defineProperty(Rg,"__esModule",{value:!0});Rg.default=WN;var RN=zr(Fu),LN=zr(Mg),DN=zr(Eg),zN=zr(Ng),IN=zr(Tg),jN=zr(Bu),FN=zr(Ag),L1=$N(C.exports);zr(wo.exports);var BN=wa;function WN(e){var t=function(n){(0,FN.default)(r,n);function r(i){var o;return(0,DN.default)(this,r),o=(0,IN.default)(this,(0,jN.default)(r).call(this,i)),o.timer=null,o.state={},o.handleChangeIndex=function(s,a,l){var c=o.props,u=c.slideCount,d=c.onChangeIndex,f=s-a,g=o.state.index+f;u&&(g=(0,BN.mod)(g,u)),o.props.index===void 0&&o.setIndex(g,s,f),d&&d(g,o.state.index,l)},o.handleTransitionEnd=function(){o.timer=setTimeout(function(){o.setWindow()},0),o.props.onTransitionEnd&&o.props.onTransitionEnd()},o.state.index=i.index||0,o}return(0,zN.default)(r,[{key:"UNSAFE_componentWillMount",value:function(){this.setWindow(this.state.index)}},{key:"UNSAFE_componentWillReceiveProps",value:function(o){var s=o.index;if(typeof s=="number"&&s!==this.props.index){var a=s-this.props.index;this.setIndex(s,this.state.indexContainer+a,a)}}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}},{key:"setIndex",value:function(o,s,a){var l={index:o,indexContainer:s,indexStart:this.state.indexStart,indexStop:this.state.indexStop};a>0&&(!this.props.slideCount||l.indexStop<this.props.slideCount-1)&&(l.indexStop+=1),o>l.indexStop&&(l.indexStop=o);var c=l.indexStart-o;c>0&&(l.indexContainer+=c,l.indexStart-=c),this.setState(l)}},{key:"setWindow",value:function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.state.index,s=this.props.slideCount,a=this.props.overscanSlideBefore,l=this.props.overscanSlideAfter;s&&(a>o&&(a=o),l+o>s-1&&(l=s-o-1)),this.setState({indexContainer:a,indexStart:o-a,indexStop:o+l})}},{key:"render",value:function(){var o=this.props;o.children,o.index,o.onChangeIndex,o.onTransitionEnd,o.overscanSlideAfter,o.overscanSlideBefore,o.slideCount;for(var s=o.slideRenderer,a=(0,LN.default)(o,["children","index","onChangeIndex","onTransitionEnd","overscanSlideAfter","overscanSlideBefore","slideCount","slideRenderer"]),l=this.state,c=l.indexContainer,u=l.indexStart,d=l.indexStop,f=[],g=u;g<=d;g+=1)f.push(s({index:g,key:g}));return L1.default.createElement(e,(0,RN.default)({index:c,onChangeIndex:this.handleChangeIndex,onTransitionEnd:this.handleTransitionEnd},a),f)}}]),r}(L1.PureComponent);return t.propTypes={},t.defaultProps={overscanSlideAfter:2,overscanSlideBefore:3},t}(function(e){var t=ju;Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"autoPlay",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(e,"bindKeyboard",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(e,"virtualize",{enumerable:!0,get:function(){return i.default}});var n=t(Og),r=t($g),i=t(Rg)})(nw);const VN=H.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 10;
  left: 50%;
  transform: translateX(-50%);

  .dot {
    width: 1rem;
    height: 1rem;
    background: #ccc;
    margin: 0 5px;
    transition: width 0.3s ease-in-out;
  }
  .active-dot {
    width: 3rem;
    background: #000;
  }
`,HN=({count:e,index:t})=>h(VN,{children:Array.from({length:e}).map((n,r)=>h("div",{className:`dot ${t===r?"active-dot":""}`},r))}),UN=nw.autoPlay(d2),YN=H.div`
  position: inherit;
  width: 100%;

  .slide {
    padding: 15px;
    min-height: 100px;
    height: 70vh;
    margin: 6px auto;
    display: flex;
    -webkit-box-align: center;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;

    img {
      margin: 0 auto;
      width: 100px;
      margin-bottom: 3rem;
    }
  }
  .slide1 {
    background: #FEA900;
  }
  .slide2 {
    background: #B3DC4A;
  }
  .slide3 {
    background: #6AC0FF;
  }
  .pagination {
    position: absolute;
    bottom: 10;
    left: 50%;
    transform: translateX(-50%);
  }
`,XN=()=>{const[e,t]=C.exports.useState(0),n=r=>{t(r)};return C.exports.useEffect(()=>{const r=setInterval(()=>{t(i=>(i+1)%3)},9e3);return()=>clearInterval(r)},[]),S(YN,{children:[S(UN,{index:e,onChangeIndex:n,children:[S("div",{className:"slide",children:[h("img",{src:"./images/logo/savingpulse-logos_transparent.png",alt:""}),h("h2",{children:"Simple & free investing"}),h("p",{children:"Make investment easy in mutual funds"})]}),S("div",{className:"slide",children:[h("img",{src:"./images/logo/savingpulse-logos_transparent.png",alt:""}),h("h2",{children:"Direct mutual funds"}),h("p",{children:"Earn up to 2% extra!"})]}),S("div",{className:"slide",children:[h("img",{src:"./images/logo/savingpulse-logos_transparent.png",alt:""}),h("h2",{children:"Start in 2 minutes"}),h("p",{children:"100% peperless investing - SIP & One-time"})]})]}),h(HN,{count:3,index:e})]})},vw=H.div`
  // Mobile
  .login-with {
    background-color: white;
    height: 100vh;
    width: 100%;
    position: absolute;
    top: 0;
    padding: 2rem;

    .header {
      display: block;
      padding: 10px;
      width: 100%;
      font-size: 2rem;
    }

    .content {
        margin: 15rem 1rem 2rem;
      h2 {
        font-size: 4.5rem;
      }
      p {
        padding: 20px 0;
        font-size: 1.4rem;
      }
      label {
        display: flex;
        align-items: center;
        justify-content: center;
        align-items: center;
        font-size: 2.5rem;
        margin-top: 6rem;
        opacity: 0.75;
        

        input[type=number] {
          padding: 0 10px;
          border: 0.2rem solid #ececec;
          margin: 0.5rem;
          width: 25rem;
          height: 5rem;
          display: -webkit-box;
          display: -webkit-flex;
          display: -ms-flexbox;
          display: -webkit-box;
          display: -webkit-flex;
          display: -ms-flexbox;
          display: flex;
          font-size: 2.5rem;
          text-align: center;
          letter-spacing: 5px;
        }
      }
    }
    .controls .next {
      margin: 6px;
    }
    .controls button {
      width: 300px;
      padding: 1rem;
      font-size: 1.8rem;
      margin: 0 auto;
    }
    .numbers ul {
      display: grid;
      grid-template-columns: 3fr 3fr 3fr;
      display: none;

      li {
        text-align: center;
        font-size: 3rem;
        padding: 2rem;
        background: #ececec;
        margin: 6px;
      }
      img {
        width: 200px;
        margin: 20vh auto;
        align-items: center;
        display: flex;
      }

      .login-container {
        margin: 0 auto;
        width: 80%;
        text-align: center;
        padding: 10px;
        position: absolute;
        bottom: 50px;

        .login-otp,
        .login-google {
          margin: 0 auto;
          padding: 20px;
          background: #9147ff;
          border-radius: 20px;
          margin: 5px;
          text-align: center;
          font-size: 1.8rem;
          color: white;
        }

        .sp-button {
          padding: 3rem;
          font-size: 1.8rem;
        }
        .no-account {
          font-size: 1.4rem;
          padding: 2rem;

          a {
            color: #9147ff;
          }
        }
      }
    }

    .home-box {
      padding: 75px 10px;
      color: ${e=>e.theme.textColor};
      background-color: ${e=>e.theme.header};
      position: relative;
      z-index: 3;
      animation: pageAnim 0.3s ease-in-out;
    }

    @media (max-width: 767px) {
      // display: block;
    }
  }

  // Desktop
  .home-desktop {
    display: none;

    .home-box {
      display: block;

      .page-title {
        color: ${e=>e.theme.textColor};
        font-size: 50px;
        padding: 30px 0;
      }
    }

    @media (min-width: 768px) {
      // display: block;
    }
  }
`,D1=mt`var(--white, #fff)`,KN=mt`var(--primaryDisableCTAFill, #767676)`,GN=mt`var(--secondaryCTABorder, #999)`,qN=mt`var(--primaryCTAFill, #9147ff)`,Dd=mt`var(--primaryCTAFillRGB, 145, 71 ,255)`,QN=mt`var(--primaryCTABorder, #c5d1df)`,ZN=mt`var(--primaryErrorCTAFill, #d9534f)`,zd=mt`var(--primaryErrorCTAFillRGB, 229, 28, 38)`,JN=mt`var(--primaryErrorCTABorder, #d43f3a)`,eT=mt`var(--secondaryCTAFill, #333)`,Id=mt`var(--secondaryCTAFillRGB, 51, 51, 51)`,tT=mt`var(--primaryCTABorder, #979797)`,nT=mt`#ee8950`,rT=mt`#ec7939`,Oc=H.div`
  .sp-button {
    min-height: 3.5rem;
    cursor: pointer;
    color: ${D1};
    line-height: normal;
    border-radius: 0.4rem;
    font-size: 1.4rem;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    border: 1px solid transparent;
    white-space: nowrap;
    appearance: auto;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.1s ease 0s;
    vertical-align: middle;
    padding: 0 3rem;
    outline-color: ${D1};
    outline-offset: -4px;
    user-select: none;
    text-decoration: none;
    width: fit-content;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -o-user-select: none;
  }
  .sp-button:focus-visible {
    outline-style: double;
  }
  .sp-button:disabled {
    cursor: not-allowed;
    background-color: ${KN};
    border: 1px solid ${GN};
  }
  .sp-button.transparent {
    background-color: transparent;
  }
  .sp-button.warning {
    background-color: ${nT}
    border-color: ${rT};
  }

  .sp-button.primary {
    background-color: ${qN};
    border-color: ${QN};
  }
  .sp-button.primary:hover {
    background-color: rgba(${Dd}, 0.9);
  }
  .sp-button.primary:focus-visible {
    background-color: rgba(${Dd}, 0.8);
  }
  .sp-button.primary:active {
    background-color: rgba(${Dd}, 0.7);
  }

  .sp-button.danger {
    background-color: ${ZN};
    border-color: ${JN};
  }
  .sp-button.danger:hover {
    background-color: rgba(${zd}, 0.9);
  }
  .sp-button.danger:focus-visible {
    background-color: rgba(${zd}, 0.8);
  }
  .sp-button.danger:active {
    background-color: rgba(${zd}, 0.7);
  }

  .sp-button.dark {
    background-color: ${eT};
    border-color: ${tT};
  }
  .sp-button.dark:hover {
    background-color: rgba(${Id}, 0.9);
  }
  .sp-button.dark:focus-visible {
    background-color: rgba(${Id}, 0.8);
  }
  .sp-button.dark:active {
    background-color: rgba(${Id}, 0.7);
  }
`,iT=({type:e=""})=>{bt(i=>i.offers);const[t,n]=C.exports.useState(!1);let r=Dr();return h(vw,{children:S("div",{className:`login-with ${t?"hide":""}`,children:[S("div",{className:"content",children:[h("h2",{children:"Enter 6 digit OTP we sent"}),h("p",{children:"We will send you a confirmation code."}),h("label",{children:h("input",{type:"number",pattern:"[0-9]",placeholder:"######"})})]}),S("div",{className:"controls",children:[h("div",{className:"next",children:h(Oc,{children:h("button",{className:"sp-button primary",onClick:()=>{document.cookie="isLoggedIn="+!0,r("/mutual-funds")},children:"Submit"})})}),h("div",{className:"numbers",children:S("ul",{children:[h("li",{children:"1"}),h("li",{children:"2"}),h("li",{children:"3"}),h("li",{children:"4"}),h("li",{children:"5"}),h("li",{children:"6"}),h("li",{children:"7"}),h("li",{children:"8"}),h("li",{children:"9"}),h("li",{children:"0"}),h("li",{children:h(jb,{})})]})})]})]})})},oT=()=>{const[e,t]=C.exports.useState(!1),[n,r]=C.exports.useState(!1);return S(vw,{children:[S("div",{className:`login-with ${e?"hide":""}`,children:[S("div",{className:"content",children:[h("h2",{children:"Enter your mobile number"}),h("p",{children:"We will send you a confirmation code."}),S("label",{children:[h("span",{children:"+91"})," ",h("input",{type:"number",pattern:"[0-9]",maxLength:"10",placeholder:"8947973174"})]})]}),S("div",{className:"controls",children:[h("div",{className:"next",children:h(Oc,{children:h("button",{className:"sp-button primary",onClick:()=>r(!0),children:"Next"})})}),h("div",{className:"numbers",children:S("ul",{children:[h("li",{children:"1"}),h("li",{children:"2"}),h("li",{children:"3"}),h("li",{children:"4"}),h("li",{children:"5"}),h("li",{children:"6"}),h("li",{children:"7"}),h("li",{children:"8"}),h("li",{children:"9"}),h("li",{children:"0"}),h("li",{children:h(jb,{})})]})})]})]}),n?h(iT,{}):null]})},sT=H.div`
  border-bottom: 1px solid #ebe7e7;
  padding-bottom: 10px;

  .offer-box {
    display: flex;
    background: white;
    padding: 2rem;
    margin: 1rem 0;

    .left-side {
      display: flex;
      flex-direction: column;
      
      .picture img {
        width: 120px;
      }
    
      .name {
        font-size: 1.6rem;
        font-weight: 500;
      }
    }

    .right-side {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      padding: 10px;

      .available-options,
      .action-buttons {
        display: flex;
        list-style: none;
        gap: 10px;
        margin-bottom: 2rem;
      }

      .action-buttons {
        li {
          background-color: #9147ff;
        }
      }
      li {
        padding: 1rem 2rem;
        font-size: 1.4rem;
        background-color: #c4834a;
        color: white;
      }

      .new-info {
        font-size: 1.4rem;

        li {
          color: inherit;
          background: inherit;
        }
      }
    }

    @media (min-width: 768px) {
      // display: block;
    }
  }
`,aT=({type:e=""})=>{const{offers:t}=bt(n=>n.offers);return h(sT,{children:t.map((n,r)=>{if(n.type===e)return S("div",{className:`offer-box offer-${n.id}`,children:[S("div",{className:"left-side",children:[h("div",{className:"picture",children:h("img",{src:n.image,alt:""})}),h("h2",{className:"name",children:n.name})]}),h("div",{className:"right-side",children:S("ul",{className:"action-buttons",children:[h("li",{children:"View Details"}),h("li",{children:"Open Account"})]})})]},n.id)})})},z1=()=>{const[e,t]=C.exports.useState(!1),[n,r]=C.exports.useState(!1),i=()=>{t(!1),r(!1)};let o=Dr();return document.cookie.split(";").filter(a=>a.indexOf("isLoggedIn=true")>=0).length!==0&&o("/mutual-funds"),h(Ve,{children:S(T6,{children:[S("div",{className:`login-mobile ${e?"hide1":""}`,children:[h("div",{className:"slider",children:h(XN,{})}),S("div",{className:"login-container",children:[h(Oc,{children:h("div",{className:"login-otp sp-button primary",onClick:()=>t(!0),children:"Sign in with OTP"})}),h(Oc,{children:h("div",{className:"login-google sp-button primary",onClick:()=>r(!0),children:"Sign in with google"})}),S("div",{className:"no-account",children:["Don't have an account? ",h(Oe,{to:"/signup",children:"Signup"})]})]})]}),e&&S("div",{children:[h("div",{className:"header",onClick:i,children:h(Kf,{})}),h(oT,{})]}),n&&S("div",{children:[h("div",{className:"header",onClick:i,children:h(Kf,{})}),h(aT,{})]})]})})},lT=H.div`
  .accordion {
    width: 100%;
    // border: 1px solid #ccc;
    border-radius: 4px;
    overflow: hidden;

    .accordion-item {
      border-bottom: 1px solid rgb(204 204 204 / 50%);
    }

    .accordion-title {
      // background-color: #f7f7f7;
      padding: 1.5rem 0;
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .accordion-content {
      padding: 15px;
      background-color: #fff;
    }

    .accordion-title {
      h2 { margin: 0; }

      svg { 
        width: 24px;
      }
    }
  }
`,cT=({title:e,content:t})=>{const[n,r]=C.exports.useState(!1);return S("div",{className:"accordion-item",children:[S("div",{className:"accordion-title",onClick:()=>{r(!n)},children:[h("h2",{children:e}),h("span",{children:n?h("svg",{style:{transform:"rotate(180deg)"},focusable:"false",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:h("path",{fill:"%23747878",d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"})}):h("svg",{focusable:"false",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:h("path",{fill:"%23747878",d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"})})})]}),n&&h("div",{className:"accordion-content",children:t})]})},uT=({items:e})=>h(lT,{children:h("div",{className:"accordion",children:e.map((t,n)=>h(cT,{title:t.title,content:t.content},n))})});/*!
 * @kurkle/color v0.3.2
 * https://github.com/kurkle/color#readme
 * (c) 2023 Jukka Kurkela
 * Released under the MIT License
 */function Na(e){return e+.5|0}const or=(e,t,n)=>Math.max(Math.min(e,n),t);function es(e){return or(Na(e*2.55),0,255)}function _r(e){return or(Na(e*255),0,255)}function $n(e){return or(Na(e/2.55)/100,0,1)}function I1(e){return or(Na(e*100),0,100)}const zt={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},yh=[..."0123456789ABCDEF"],dT=e=>yh[e&15],fT=e=>yh[(e&240)>>4]+yh[e&15],tl=e=>(e&240)>>4===(e&15),hT=e=>tl(e.r)&&tl(e.g)&&tl(e.b)&&tl(e.a);function pT(e){var t=e.length,n;return e[0]==="#"&&(t===4||t===5?n={r:255&zt[e[1]]*17,g:255&zt[e[2]]*17,b:255&zt[e[3]]*17,a:t===5?zt[e[4]]*17:255}:(t===7||t===9)&&(n={r:zt[e[1]]<<4|zt[e[2]],g:zt[e[3]]<<4|zt[e[4]],b:zt[e[5]]<<4|zt[e[6]],a:t===9?zt[e[7]]<<4|zt[e[8]]:255})),n}const gT=(e,t)=>e<255?t(e):"";function mT(e){var t=hT(e)?dT:fT;return e?"#"+t(e.r)+t(e.g)+t(e.b)+gT(e.a,t):void 0}const vT=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function yw(e,t,n){const r=t*Math.min(n,1-n),i=(o,s=(o+e/30)%12)=>n-r*Math.max(Math.min(s-3,9-s,1),-1);return[i(0),i(8),i(4)]}function yT(e,t,n){const r=(i,o=(i+e/60)%6)=>n-n*t*Math.max(Math.min(o,4-o,1),0);return[r(5),r(3),r(1)]}function xT(e,t,n){const r=yw(e,1,.5);let i;for(t+n>1&&(i=1/(t+n),t*=i,n*=i),i=0;i<3;i++)r[i]*=1-t-n,r[i]+=t;return r}function bT(e,t,n,r,i){return e===i?(t-n)/r+(t<n?6:0):t===i?(n-e)/r+2:(e-t)/r+4}function Lg(e){const n=e.r/255,r=e.g/255,i=e.b/255,o=Math.max(n,r,i),s=Math.min(n,r,i),a=(o+s)/2;let l,c,u;return o!==s&&(u=o-s,c=a>.5?u/(2-o-s):u/(o+s),l=bT(n,r,i,u,o),l=l*60+.5),[l|0,c||0,a]}function Dg(e,t,n,r){return(Array.isArray(t)?e(t[0],t[1],t[2]):e(t,n,r)).map(_r)}function zg(e,t,n){return Dg(yw,e,t,n)}function wT(e,t,n){return Dg(xT,e,t,n)}function _T(e,t,n){return Dg(yT,e,t,n)}function xw(e){return(e%360+360)%360}function ST(e){const t=vT.exec(e);let n=255,r;if(!t)return;t[5]!==r&&(n=t[6]?es(+t[5]):_r(+t[5]));const i=xw(+t[2]),o=+t[3]/100,s=+t[4]/100;return t[1]==="hwb"?r=wT(i,o,s):t[1]==="hsv"?r=_T(i,o,s):r=zg(i,o,s),{r:r[0],g:r[1],b:r[2],a:n}}function kT(e,t){var n=Lg(e);n[0]=xw(n[0]+t),n=zg(n),e.r=n[0],e.g=n[1],e.b=n[2]}function CT(e){if(!e)return;const t=Lg(e),n=t[0],r=I1(t[1]),i=I1(t[2]);return e.a<255?`hsla(${n}, ${r}%, ${i}%, ${$n(e.a)})`:`hsl(${n}, ${r}%, ${i}%)`}const j1={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},F1={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function PT(){const e={},t=Object.keys(F1),n=Object.keys(j1);let r,i,o,s,a;for(r=0;r<t.length;r++){for(s=a=t[r],i=0;i<n.length;i++)o=n[i],a=a.replace(o,j1[o]);o=parseInt(F1[s],16),e[a]=[o>>16&255,o>>8&255,o&255]}return e}let nl;function OT(e){nl||(nl=PT(),nl.transparent=[0,0,0,0]);const t=nl[e.toLowerCase()];return t&&{r:t[0],g:t[1],b:t[2],a:t.length===4?t[3]:255}}const MT=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function ET(e){const t=MT.exec(e);let n=255,r,i,o;if(!!t){if(t[7]!==r){const s=+t[7];n=t[8]?es(s):or(s*255,0,255)}return r=+t[1],i=+t[3],o=+t[5],r=255&(t[2]?es(r):or(r,0,255)),i=255&(t[4]?es(i):or(i,0,255)),o=255&(t[6]?es(o):or(o,0,255)),{r,g:i,b:o,a:n}}}function NT(e){return e&&(e.a<255?`rgba(${e.r}, ${e.g}, ${e.b}, ${$n(e.a)})`:`rgb(${e.r}, ${e.g}, ${e.b})`)}const jd=e=>e<=.0031308?e*12.92:Math.pow(e,1/2.4)*1.055-.055,Pi=e=>e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4);function TT(e,t,n){const r=Pi($n(e.r)),i=Pi($n(e.g)),o=Pi($n(e.b));return{r:_r(jd(r+n*(Pi($n(t.r))-r))),g:_r(jd(i+n*(Pi($n(t.g))-i))),b:_r(jd(o+n*(Pi($n(t.b))-o))),a:e.a+n*(t.a-e.a)}}function rl(e,t,n){if(e){let r=Lg(e);r[t]=Math.max(0,Math.min(r[t]+r[t]*n,t===0?360:1)),r=zg(r),e.r=r[0],e.g=r[1],e.b=r[2]}}function bw(e,t){return e&&Object.assign(t||{},e)}function B1(e){var t={r:0,g:0,b:0,a:255};return Array.isArray(e)?e.length>=3&&(t={r:e[0],g:e[1],b:e[2],a:255},e.length>3&&(t.a=_r(e[3]))):(t=bw(e,{r:0,g:0,b:0,a:1}),t.a=_r(t.a)),t}function AT(e){return e.charAt(0)==="r"?ET(e):ST(e)}class Qs{constructor(t){if(t instanceof Qs)return t;const n=typeof t;let r;n==="object"?r=B1(t):n==="string"&&(r=pT(t)||OT(t)||AT(t)),this._rgb=r,this._valid=!!r}get valid(){return this._valid}get rgb(){var t=bw(this._rgb);return t&&(t.a=$n(t.a)),t}set rgb(t){this._rgb=B1(t)}rgbString(){return this._valid?NT(this._rgb):void 0}hexString(){return this._valid?mT(this._rgb):void 0}hslString(){return this._valid?CT(this._rgb):void 0}mix(t,n){if(t){const r=this.rgb,i=t.rgb;let o;const s=n===o?.5:n,a=2*s-1,l=r.a-i.a,c=((a*l===-1?a:(a+l)/(1+a*l))+1)/2;o=1-c,r.r=255&c*r.r+o*i.r+.5,r.g=255&c*r.g+o*i.g+.5,r.b=255&c*r.b+o*i.b+.5,r.a=s*r.a+(1-s)*i.a,this.rgb=r}return this}interpolate(t,n){return t&&(this._rgb=TT(this._rgb,t._rgb,n)),this}clone(){return new Qs(this.rgb)}alpha(t){return this._rgb.a=_r(t),this}clearer(t){const n=this._rgb;return n.a*=1-t,this}greyscale(){const t=this._rgb,n=Na(t.r*.3+t.g*.59+t.b*.11);return t.r=t.g=t.b=n,this}opaquer(t){const n=this._rgb;return n.a*=1+t,this}negate(){const t=this._rgb;return t.r=255-t.r,t.g=255-t.g,t.b=255-t.b,this}lighten(t){return rl(this._rgb,2,t),this}darken(t){return rl(this._rgb,2,-t),this}saturate(t){return rl(this._rgb,1,t),this}desaturate(t){return rl(this._rgb,1,-t),this}rotate(t){return kT(this._rgb,t),this}}/*!
 * Chart.js v4.4.3
 * https://www.chartjs.org
 * (c) 2024 Chart.js Contributors
 * Released under the MIT License
 */function Mn(){}const $T=(()=>{let e=0;return()=>e++})();function te(e){return e===null||typeof e=="undefined"}function we(e){if(Array.isArray&&Array.isArray(e))return!0;const t=Object.prototype.toString.call(e);return t.slice(0,7)==="[object"&&t.slice(-6)==="Array]"}function J(e){return e!==null&&Object.prototype.toString.call(e)==="[object Object]"}function Re(e){return(typeof e=="number"||e instanceof Number)&&isFinite(+e)}function Et(e,t){return Re(e)?e:t}function X(e,t){return typeof e=="undefined"?t:e}const RT=(e,t)=>typeof e=="string"&&e.endsWith("%")?parseFloat(e)/100:+e/t,ww=(e,t)=>typeof e=="string"&&e.endsWith("%")?parseFloat(e)/100*t:+e;function xe(e,t,n){if(e&&typeof e.call=="function")return e.apply(n,t)}function he(e,t,n,r){let i,o,s;if(we(e))if(o=e.length,r)for(i=o-1;i>=0;i--)t.call(n,e[i],i);else for(i=0;i<o;i++)t.call(n,e[i],i);else if(J(e))for(s=Object.keys(e),o=s.length,i=0;i<o;i++)t.call(n,e[s[i]],s[i])}function Mc(e,t){let n,r,i,o;if(!e||!t||e.length!==t.length)return!1;for(n=0,r=e.length;n<r;++n)if(i=e[n],o=t[n],i.datasetIndex!==o.datasetIndex||i.index!==o.index)return!1;return!0}function Ec(e){if(we(e))return e.map(Ec);if(J(e)){const t=Object.create(null),n=Object.keys(e),r=n.length;let i=0;for(;i<r;++i)t[n[i]]=Ec(e[n[i]]);return t}return e}function _w(e){return["__proto__","prototype","constructor"].indexOf(e)===-1}function LT(e,t,n,r){if(!_w(e))return;const i=t[e],o=n[e];J(i)&&J(o)?Zs(i,o,r):t[e]=Ec(o)}function Zs(e,t,n){const r=we(t)?t:[t],i=r.length;if(!J(e))return e;n=n||{};const o=n.merger||LT;let s;for(let a=0;a<i;++a){if(s=r[a],!J(s))continue;const l=Object.keys(s);for(let c=0,u=l.length;c<u;++c)o(l[c],e,s,n)}return e}function bs(e,t){return Zs(e,t,{merger:DT})}function DT(e,t,n){if(!_w(e))return;const r=t[e],i=n[e];J(r)&&J(i)?bs(r,i):Object.prototype.hasOwnProperty.call(t,e)||(t[e]=Ec(i))}const W1={"":e=>e,x:e=>e.x,y:e=>e.y};function zT(e){const t=e.split("."),n=[];let r="";for(const i of t)r+=i,r.endsWith("\\")?r=r.slice(0,-1)+".":(n.push(r),r="");return n}function IT(e){const t=zT(e);return n=>{for(const r of t){if(r==="")break;n=n&&n[r]}return n}}function Tr(e,t){return(W1[t]||(W1[t]=IT(t)))(e)}function Ig(e){return e.charAt(0).toUpperCase()+e.slice(1)}const Js=e=>typeof e!="undefined",Ar=e=>typeof e=="function",V1=(e,t)=>{if(e.size!==t.size)return!1;for(const n of e)if(!t.has(n))return!1;return!0};function jT(e){return e.type==="mouseup"||e.type==="click"||e.type==="contextmenu"}const ke=Math.PI,Se=2*ke,FT=Se+ke,Nc=Number.POSITIVE_INFINITY,BT=ke/180,ze=ke/2,jr=ke/4,H1=ke*2/3,sr=Math.log10,kn=Math.sign;function ws(e,t,n){return Math.abs(e-t)<n}function U1(e){const t=Math.round(e);e=ws(e,t,e/1e3)?t:e;const n=Math.pow(10,Math.floor(sr(e))),r=e/n;return(r<=1?1:r<=2?2:r<=5?5:10)*n}function WT(e){const t=[],n=Math.sqrt(e);let r;for(r=1;r<n;r++)e%r===0&&(t.push(r),t.push(e/r));return n===(n|0)&&t.push(n),t.sort((i,o)=>i-o).pop(),t}function co(e){return!isNaN(parseFloat(e))&&isFinite(e)}function VT(e,t){const n=Math.round(e);return n-t<=e&&n+t>=e}function Sw(e,t,n){let r,i,o;for(r=0,i=e.length;r<i;r++)o=e[r][n],isNaN(o)||(t.min=Math.min(t.min,o),t.max=Math.max(t.max,o))}function nn(e){return e*(ke/180)}function jg(e){return e*(180/ke)}function Y1(e){if(!Re(e))return;let t=1,n=0;for(;Math.round(e*t)/t!==e;)t*=10,n++;return n}function kw(e,t){const n=t.x-e.x,r=t.y-e.y,i=Math.sqrt(n*n+r*r);let o=Math.atan2(r,n);return o<-.5*ke&&(o+=Se),{angle:o,distance:i}}function xh(e,t){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}function HT(e,t){return(e-t+FT)%Se-ke}function Nt(e){return(e%Se+Se)%Se}function ea(e,t,n,r){const i=Nt(e),o=Nt(t),s=Nt(n),a=Nt(o-i),l=Nt(s-i),c=Nt(i-o),u=Nt(i-s);return i===o||i===s||r&&o===s||a>l&&c<u}function Xe(e,t,n){return Math.max(t,Math.min(n,e))}function UT(e){return Xe(e,-32768,32767)}function zn(e,t,n,r=1e-6){return e>=Math.min(t,n)-r&&e<=Math.max(t,n)+r}function Fg(e,t,n){n=n||(s=>e[s]<t);let r=e.length-1,i=0,o;for(;r-i>1;)o=i+r>>1,n(o)?i=o:r=o;return{lo:i,hi:r}}const In=(e,t,n,r)=>Fg(e,n,r?i=>{const o=e[i][t];return o<n||o===n&&e[i+1][t]===n}:i=>e[i][t]<n),YT=(e,t,n)=>Fg(e,n,r=>e[r][t]>=n);function XT(e,t,n){let r=0,i=e.length;for(;r<i&&e[r]<t;)r++;for(;i>r&&e[i-1]>n;)i--;return r>0||i<e.length?e.slice(r,i):e}const Cw=["push","pop","shift","splice","unshift"];function KT(e,t){if(e._chartjs){e._chartjs.listeners.push(t);return}Object.defineProperty(e,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[t]}}),Cw.forEach(n=>{const r="_onData"+Ig(n),i=e[n];Object.defineProperty(e,n,{configurable:!0,enumerable:!1,value(...o){const s=i.apply(this,o);return e._chartjs.listeners.forEach(a=>{typeof a[r]=="function"&&a[r](...o)}),s}})})}function X1(e,t){const n=e._chartjs;if(!n)return;const r=n.listeners,i=r.indexOf(t);i!==-1&&r.splice(i,1),!(r.length>0)&&(Cw.forEach(o=>{delete e[o]}),delete e._chartjs)}function Pw(e){const t=new Set(e);return t.size===e.length?e:Array.from(t)}const Ow=function(){return typeof window=="undefined"?function(e){return e()}:window.requestAnimationFrame}();function Mw(e,t){let n=[],r=!1;return function(...i){n=i,r||(r=!0,Ow.call(window,()=>{r=!1,e.apply(t,n)}))}}function GT(e,t){let n;return function(...r){return t?(clearTimeout(n),n=setTimeout(e,t,r)):e.apply(this,r),t}}const Bg=e=>e==="start"?"left":e==="end"?"right":"center",at=(e,t,n)=>e==="start"?t:e==="end"?n:(t+n)/2,qT=(e,t,n,r)=>e===(r?"left":"right")?n:e==="center"?(t+n)/2:t;function Ew(e,t,n){const r=t.length;let i=0,o=r;if(e._sorted){const{iScale:s,_parsed:a}=e,l=s.axis,{min:c,max:u,minDefined:d,maxDefined:f}=s.getUserBounds();d&&(i=Xe(Math.min(In(a,l,c).lo,n?r:In(t,l,s.getPixelForValue(c)).lo),0,r-1)),f?o=Xe(Math.max(In(a,s.axis,u,!0).hi+1,n?0:In(t,l,s.getPixelForValue(u),!0).hi+1),i,r)-i:o=r-i}return{start:i,count:o}}function Nw(e){const{xScale:t,yScale:n,_scaleRanges:r}=e,i={xmin:t.min,xmax:t.max,ymin:n.min,ymax:n.max};if(!r)return e._scaleRanges=i,!0;const o=r.xmin!==t.min||r.xmax!==t.max||r.ymin!==n.min||r.ymax!==n.max;return Object.assign(r,i),o}const il=e=>e===0||e===1,K1=(e,t,n)=>-(Math.pow(2,10*(e-=1))*Math.sin((e-t)*Se/n)),G1=(e,t,n)=>Math.pow(2,-10*e)*Math.sin((e-t)*Se/n)+1,_s={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>-e*(e-2),easeInOutQuad:e=>(e/=.5)<1?.5*e*e:-.5*(--e*(e-2)-1),easeInCubic:e=>e*e*e,easeOutCubic:e=>(e-=1)*e*e+1,easeInOutCubic:e=>(e/=.5)<1?.5*e*e*e:.5*((e-=2)*e*e+2),easeInQuart:e=>e*e*e*e,easeOutQuart:e=>-((e-=1)*e*e*e-1),easeInOutQuart:e=>(e/=.5)<1?.5*e*e*e*e:-.5*((e-=2)*e*e*e-2),easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>(e-=1)*e*e*e*e+1,easeInOutQuint:e=>(e/=.5)<1?.5*e*e*e*e*e:.5*((e-=2)*e*e*e*e+2),easeInSine:e=>-Math.cos(e*ze)+1,easeOutSine:e=>Math.sin(e*ze),easeInOutSine:e=>-.5*(Math.cos(ke*e)-1),easeInExpo:e=>e===0?0:Math.pow(2,10*(e-1)),easeOutExpo:e=>e===1?1:-Math.pow(2,-10*e)+1,easeInOutExpo:e=>il(e)?e:e<.5?.5*Math.pow(2,10*(e*2-1)):.5*(-Math.pow(2,-10*(e*2-1))+2),easeInCirc:e=>e>=1?e:-(Math.sqrt(1-e*e)-1),easeOutCirc:e=>Math.sqrt(1-(e-=1)*e),easeInOutCirc:e=>(e/=.5)<1?-.5*(Math.sqrt(1-e*e)-1):.5*(Math.sqrt(1-(e-=2)*e)+1),easeInElastic:e=>il(e)?e:K1(e,.075,.3),easeOutElastic:e=>il(e)?e:G1(e,.075,.3),easeInOutElastic(e){return il(e)?e:e<.5?.5*K1(e*2,.1125,.45):.5+.5*G1(e*2-1,.1125,.45)},easeInBack(e){return e*e*((1.70158+1)*e-1.70158)},easeOutBack(e){return(e-=1)*e*((1.70158+1)*e+1.70158)+1},easeInOutBack(e){let t=1.70158;return(e/=.5)<1?.5*(e*e*(((t*=1.525)+1)*e-t)):.5*((e-=2)*e*(((t*=1.525)+1)*e+t)+2)},easeInBounce:e=>1-_s.easeOutBounce(1-e),easeOutBounce(e){return e<1/2.75?7.5625*e*e:e<2/2.75?7.5625*(e-=1.5/2.75)*e+.75:e<2.5/2.75?7.5625*(e-=2.25/2.75)*e+.9375:7.5625*(e-=2.625/2.75)*e+.984375},easeInOutBounce:e=>e<.5?_s.easeInBounce(e*2)*.5:_s.easeOutBounce(e*2-1)*.5+.5};function Wg(e){if(e&&typeof e=="object"){const t=e.toString();return t==="[object CanvasPattern]"||t==="[object CanvasGradient]"}return!1}function q1(e){return Wg(e)?e:new Qs(e)}function Fd(e){return Wg(e)?e:new Qs(e).saturate(.5).darken(.1).hexString()}const QT=["x","y","borderWidth","radius","tension"],ZT=["color","borderColor","backgroundColor"];function JT(e){e.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),e.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:t=>t!=="onProgress"&&t!=="onComplete"&&t!=="fn"}),e.set("animations",{colors:{type:"color",properties:ZT},numbers:{type:"number",properties:QT}}),e.describe("animations",{_fallback:"animation"}),e.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:t=>t|0}}}})}function eA(e){e.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})}const Q1=new Map;function tA(e,t){t=t||{};const n=e+JSON.stringify(t);let r=Q1.get(n);return r||(r=new Intl.NumberFormat(e,t),Q1.set(n,r)),r}function Ta(e,t,n){return tA(t,n).format(e)}const Tw={values(e){return we(e)?e:""+e},numeric(e,t,n){if(e===0)return"0";const r=this.chart.options.locale;let i,o=e;if(n.length>1){const c=Math.max(Math.abs(n[0].value),Math.abs(n[n.length-1].value));(c<1e-4||c>1e15)&&(i="scientific"),o=nA(e,n)}const s=sr(Math.abs(o)),a=isNaN(s)?1:Math.max(Math.min(-1*Math.floor(s),20),0),l={notation:i,minimumFractionDigits:a,maximumFractionDigits:a};return Object.assign(l,this.options.ticks.format),Ta(e,r,l)},logarithmic(e,t,n){if(e===0)return"0";const r=n[t].significand||e/Math.pow(10,Math.floor(sr(e)));return[1,2,3,5,10,15].includes(r)||t>.8*n.length?Tw.numeric.call(this,e,t,n):""}};function nA(e,t){let n=t.length>3?t[2].value-t[1].value:t[1].value-t[0].value;return Math.abs(n)>=1&&e!==Math.floor(e)&&(n=e-Math.floor(e)),n}var Wu={formatters:Tw};function rA(e){e.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",clip:!0,grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(t,n)=>n.lineWidth,tickColor:(t,n)=>n.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:Wu.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),e.route("scale.ticks","color","","color"),e.route("scale.grid","color","","borderColor"),e.route("scale.border","color","","borderColor"),e.route("scale.title","color","","color"),e.describe("scale",{_fallback:!1,_scriptable:t=>!t.startsWith("before")&&!t.startsWith("after")&&t!=="callback"&&t!=="parser",_indexable:t=>t!=="borderDash"&&t!=="tickBorderDash"&&t!=="dash"}),e.describe("scales",{_fallback:"scale"}),e.describe("scale.ticks",{_scriptable:t=>t!=="backdropPadding"&&t!=="callback",_indexable:t=>t!=="backdropPadding"})}const ui=Object.create(null),bh=Object.create(null);function Ss(e,t){if(!t)return e;const n=t.split(".");for(let r=0,i=n.length;r<i;++r){const o=n[r];e=e[o]||(e[o]=Object.create(null))}return e}function Bd(e,t,n){return typeof t=="string"?Zs(Ss(e,t),n):Zs(Ss(e,""),t)}class iA{constructor(t,n){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=r=>r.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(r,i)=>Fd(i.backgroundColor),this.hoverBorderColor=(r,i)=>Fd(i.borderColor),this.hoverColor=(r,i)=>Fd(i.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(t),this.apply(n)}set(t,n){return Bd(this,t,n)}get(t){return Ss(this,t)}describe(t,n){return Bd(bh,t,n)}override(t,n){return Bd(ui,t,n)}route(t,n,r,i){const o=Ss(this,t),s=Ss(this,r),a="_"+n;Object.defineProperties(o,{[a]:{value:o[n],writable:!0},[n]:{enumerable:!0,get(){const l=this[a],c=s[i];return J(l)?Object.assign({},c,l):X(l,c)},set(l){this[a]=l}}})}apply(t){t.forEach(n=>n(this))}}var Le=new iA({_scriptable:e=>!e.startsWith("on"),_indexable:e=>e!=="events",hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}},[JT,eA,rA]);function oA(e){return!e||te(e.size)||te(e.family)?null:(e.style?e.style+" ":"")+(e.weight?e.weight+" ":"")+e.size+"px "+e.family}function Tc(e,t,n,r,i){let o=t[i];return o||(o=t[i]=e.measureText(i).width,n.push(i)),o>r&&(r=o),r}function sA(e,t,n,r){r=r||{};let i=r.data=r.data||{},o=r.garbageCollect=r.garbageCollect||[];r.font!==t&&(i=r.data={},o=r.garbageCollect=[],r.font=t),e.save(),e.font=t;let s=0;const a=n.length;let l,c,u,d,f;for(l=0;l<a;l++)if(d=n[l],d!=null&&!we(d))s=Tc(e,i,o,s,d);else if(we(d))for(c=0,u=d.length;c<u;c++)f=d[c],f!=null&&!we(f)&&(s=Tc(e,i,o,s,f));e.restore();const g=o.length/2;if(g>n.length){for(l=0;l<g;l++)delete i[o[l]];o.splice(0,g)}return s}function Fr(e,t,n){const r=e.currentDevicePixelRatio,i=n!==0?Math.max(n/2,.5):0;return Math.round((t-i)*r)/r+i}function Z1(e,t){!t&&!e||(t=t||e.getContext("2d"),t.save(),t.resetTransform(),t.clearRect(0,0,e.width,e.height),t.restore())}function wh(e,t,n,r){Aw(e,t,n,r,null)}function Aw(e,t,n,r,i){let o,s,a,l,c,u,d,f;const g=t.pointStyle,v=t.rotation,y=t.radius;let p=(v||0)*BT;if(g&&typeof g=="object"&&(o=g.toString(),o==="[object HTMLImageElement]"||o==="[object HTMLCanvasElement]")){e.save(),e.translate(n,r),e.rotate(p),e.drawImage(g,-g.width/2,-g.height/2,g.width,g.height),e.restore();return}if(!(isNaN(y)||y<=0)){switch(e.beginPath(),g){default:i?e.ellipse(n,r,i/2,y,0,0,Se):e.arc(n,r,y,0,Se),e.closePath();break;case"triangle":u=i?i/2:y,e.moveTo(n+Math.sin(p)*u,r-Math.cos(p)*y),p+=H1,e.lineTo(n+Math.sin(p)*u,r-Math.cos(p)*y),p+=H1,e.lineTo(n+Math.sin(p)*u,r-Math.cos(p)*y),e.closePath();break;case"rectRounded":c=y*.516,l=y-c,s=Math.cos(p+jr)*l,d=Math.cos(p+jr)*(i?i/2-c:l),a=Math.sin(p+jr)*l,f=Math.sin(p+jr)*(i?i/2-c:l),e.arc(n-d,r-a,c,p-ke,p-ze),e.arc(n+f,r-s,c,p-ze,p),e.arc(n+d,r+a,c,p,p+ze),e.arc(n-f,r+s,c,p+ze,p+ke),e.closePath();break;case"rect":if(!v){l=Math.SQRT1_2*y,u=i?i/2:l,e.rect(n-u,r-l,2*u,2*l);break}p+=jr;case"rectRot":d=Math.cos(p)*(i?i/2:y),s=Math.cos(p)*y,a=Math.sin(p)*y,f=Math.sin(p)*(i?i/2:y),e.moveTo(n-d,r-a),e.lineTo(n+f,r-s),e.lineTo(n+d,r+a),e.lineTo(n-f,r+s),e.closePath();break;case"crossRot":p+=jr;case"cross":d=Math.cos(p)*(i?i/2:y),s=Math.cos(p)*y,a=Math.sin(p)*y,f=Math.sin(p)*(i?i/2:y),e.moveTo(n-d,r-a),e.lineTo(n+d,r+a),e.moveTo(n+f,r-s),e.lineTo(n-f,r+s);break;case"star":d=Math.cos(p)*(i?i/2:y),s=Math.cos(p)*y,a=Math.sin(p)*y,f=Math.sin(p)*(i?i/2:y),e.moveTo(n-d,r-a),e.lineTo(n+d,r+a),e.moveTo(n+f,r-s),e.lineTo(n-f,r+s),p+=jr,d=Math.cos(p)*(i?i/2:y),s=Math.cos(p)*y,a=Math.sin(p)*y,f=Math.sin(p)*(i?i/2:y),e.moveTo(n-d,r-a),e.lineTo(n+d,r+a),e.moveTo(n+f,r-s),e.lineTo(n-f,r+s);break;case"line":s=i?i/2:Math.cos(p)*y,a=Math.sin(p)*y,e.moveTo(n-s,r-a),e.lineTo(n+s,r+a);break;case"dash":e.moveTo(n,r),e.lineTo(n+Math.cos(p)*(i?i/2:y),r+Math.sin(p)*y);break;case!1:e.closePath();break}e.fill(),t.borderWidth>0&&e.stroke()}}function jn(e,t,n){return n=n||.5,!t||e&&e.x>t.left-n&&e.x<t.right+n&&e.y>t.top-n&&e.y<t.bottom+n}function Vu(e,t){e.save(),e.beginPath(),e.rect(t.left,t.top,t.right-t.left,t.bottom-t.top),e.clip()}function Hu(e){e.restore()}function aA(e,t,n,r,i){if(!t)return e.lineTo(n.x,n.y);if(i==="middle"){const o=(t.x+n.x)/2;e.lineTo(o,t.y),e.lineTo(o,n.y)}else i==="after"!=!!r?e.lineTo(t.x,n.y):e.lineTo(n.x,t.y);e.lineTo(n.x,n.y)}function lA(e,t,n,r){if(!t)return e.lineTo(n.x,n.y);e.bezierCurveTo(r?t.cp1x:t.cp2x,r?t.cp1y:t.cp2y,r?n.cp2x:n.cp1x,r?n.cp2y:n.cp1y,n.x,n.y)}function cA(e,t){t.translation&&e.translate(t.translation[0],t.translation[1]),te(t.rotation)||e.rotate(t.rotation),t.color&&(e.fillStyle=t.color),t.textAlign&&(e.textAlign=t.textAlign),t.textBaseline&&(e.textBaseline=t.textBaseline)}function uA(e,t,n,r,i){if(i.strikethrough||i.underline){const o=e.measureText(r),s=t-o.actualBoundingBoxLeft,a=t+o.actualBoundingBoxRight,l=n-o.actualBoundingBoxAscent,c=n+o.actualBoundingBoxDescent,u=i.strikethrough?(l+c)/2:c;e.strokeStyle=e.fillStyle,e.beginPath(),e.lineWidth=i.decorationWidth||2,e.moveTo(s,u),e.lineTo(a,u),e.stroke()}}function dA(e,t){const n=e.fillStyle;e.fillStyle=t.color,e.fillRect(t.left,t.top,t.width,t.height),e.fillStyle=n}function di(e,t,n,r,i,o={}){const s=we(t)?t:[t],a=o.strokeWidth>0&&o.strokeColor!=="";let l,c;for(e.save(),e.font=i.string,cA(e,o),l=0;l<s.length;++l)c=s[l],o.backdrop&&dA(e,o.backdrop),a&&(o.strokeColor&&(e.strokeStyle=o.strokeColor),te(o.strokeWidth)||(e.lineWidth=o.strokeWidth),e.strokeText(c,n,r,o.maxWidth)),e.fillText(c,n,r,o.maxWidth),uA(e,n,r,c,o),r+=Number(i.lineHeight);e.restore()}function ta(e,t){const{x:n,y:r,w:i,h:o,radius:s}=t;e.arc(n+s.topLeft,r+s.topLeft,s.topLeft,1.5*ke,ke,!0),e.lineTo(n,r+o-s.bottomLeft),e.arc(n+s.bottomLeft,r+o-s.bottomLeft,s.bottomLeft,ke,ze,!0),e.lineTo(n+i-s.bottomRight,r+o),e.arc(n+i-s.bottomRight,r+o-s.bottomRight,s.bottomRight,ze,0,!0),e.lineTo(n+i,r+s.topRight),e.arc(n+i-s.topRight,r+s.topRight,s.topRight,0,-ze,!0),e.lineTo(n+s.topLeft,r)}const fA=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,hA=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function pA(e,t){const n=(""+e).match(fA);if(!n||n[1]==="normal")return t*1.2;switch(e=+n[2],n[3]){case"px":return e;case"%":e/=100;break}return t*e}const gA=e=>+e||0;function Vg(e,t){const n={},r=J(t),i=r?Object.keys(t):t,o=J(e)?r?s=>X(e[s],e[t[s]]):s=>e[s]:()=>e;for(const s of i)n[s]=gA(o(s));return n}function $w(e){return Vg(e,{top:"y",right:"x",bottom:"y",left:"x"})}function ti(e){return Vg(e,["topLeft","topRight","bottomLeft","bottomRight"])}function gt(e){const t=$w(e);return t.width=t.left+t.right,t.height=t.top+t.bottom,t}function Ue(e,t){e=e||{},t=t||Le.font;let n=X(e.size,t.size);typeof n=="string"&&(n=parseInt(n,10));let r=X(e.style,t.style);r&&!(""+r).match(hA)&&(console.warn('Invalid font style specified: "'+r+'"'),r=void 0);const i={family:X(e.family,t.family),lineHeight:pA(X(e.lineHeight,t.lineHeight),n),size:n,style:r,weight:X(e.weight,t.weight),string:""};return i.string=oA(i),i}function ts(e,t,n,r){let i=!0,o,s,a;for(o=0,s=e.length;o<s;++o)if(a=e[o],a!==void 0&&(t!==void 0&&typeof a=="function"&&(a=a(t),i=!1),n!==void 0&&we(a)&&(a=a[n%a.length],i=!1),a!==void 0))return r&&!i&&(r.cacheable=!1),a}function mA(e,t,n){const{min:r,max:i}=e,o=ww(t,(i-r)/2),s=(a,l)=>n&&a===0?0:a+l;return{min:s(r,-Math.abs(o)),max:s(i,o)}}function Ir(e,t){return Object.assign(Object.create(e),t)}function Hg(e,t=[""],n,r,i=()=>e[0]){const o=n||e;typeof r=="undefined"&&(r=zw("_fallback",e));const s={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:e,_rootScopes:o,_fallback:r,_getTarget:i,override:a=>Hg([a,...e],t,o,r)};return new Proxy(s,{deleteProperty(a,l){return delete a[l],delete a._keys,delete e[0][l],!0},get(a,l){return Lw(a,l,()=>kA(l,t,e,a))},getOwnPropertyDescriptor(a,l){return Reflect.getOwnPropertyDescriptor(a._scopes[0],l)},getPrototypeOf(){return Reflect.getPrototypeOf(e[0])},has(a,l){return ev(a).includes(l)},ownKeys(a){return ev(a)},set(a,l,c){const u=a._storage||(a._storage=i());return a[l]=u[l]=c,delete a._keys,!0}})}function uo(e,t,n,r){const i={_cacheable:!1,_proxy:e,_context:t,_subProxy:n,_stack:new Set,_descriptors:Rw(e,r),setContext:o=>uo(e,o,n,r),override:o=>uo(e.override(o),t,n,r)};return new Proxy(i,{deleteProperty(o,s){return delete o[s],delete e[s],!0},get(o,s,a){return Lw(o,s,()=>yA(o,s,a))},getOwnPropertyDescriptor(o,s){return o._descriptors.allKeys?Reflect.has(e,s)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(e,s)},getPrototypeOf(){return Reflect.getPrototypeOf(e)},has(o,s){return Reflect.has(e,s)},ownKeys(){return Reflect.ownKeys(e)},set(o,s,a){return e[s]=a,delete o[s],!0}})}function Rw(e,t={scriptable:!0,indexable:!0}){const{_scriptable:n=t.scriptable,_indexable:r=t.indexable,_allKeys:i=t.allKeys}=e;return{allKeys:i,scriptable:n,indexable:r,isScriptable:Ar(n)?n:()=>n,isIndexable:Ar(r)?r:()=>r}}const vA=(e,t)=>e?e+Ig(t):t,Ug=(e,t)=>J(t)&&e!=="adapters"&&(Object.getPrototypeOf(t)===null||t.constructor===Object);function Lw(e,t,n){if(Object.prototype.hasOwnProperty.call(e,t)||t==="constructor")return e[t];const r=n();return e[t]=r,r}function yA(e,t,n){const{_proxy:r,_context:i,_subProxy:o,_descriptors:s}=e;let a=r[t];return Ar(a)&&s.isScriptable(t)&&(a=xA(t,a,e,n)),we(a)&&a.length&&(a=bA(t,a,e,s.isIndexable)),Ug(t,a)&&(a=uo(a,i,o&&o[t],s)),a}function xA(e,t,n,r){const{_proxy:i,_context:o,_subProxy:s,_stack:a}=n;if(a.has(e))throw new Error("Recursion detected: "+Array.from(a).join("->")+"->"+e);a.add(e);let l=t(o,s||r);return a.delete(e),Ug(e,l)&&(l=Yg(i._scopes,i,e,l)),l}function bA(e,t,n,r){const{_proxy:i,_context:o,_subProxy:s,_descriptors:a}=n;if(typeof o.index!="undefined"&&r(e))return t[o.index%t.length];if(J(t[0])){const l=t,c=i._scopes.filter(u=>u!==l);t=[];for(const u of l){const d=Yg(c,i,e,u);t.push(uo(d,o,s&&s[e],a))}}return t}function Dw(e,t,n){return Ar(e)?e(t,n):e}const wA=(e,t)=>e===!0?t:typeof e=="string"?Tr(t,e):void 0;function _A(e,t,n,r,i){for(const o of t){const s=wA(n,o);if(s){e.add(s);const a=Dw(s._fallback,n,i);if(typeof a!="undefined"&&a!==n&&a!==r)return a}else if(s===!1&&typeof r!="undefined"&&n!==r)return null}return!1}function Yg(e,t,n,r){const i=t._rootScopes,o=Dw(t._fallback,n,r),s=[...e,...i],a=new Set;a.add(r);let l=J1(a,s,n,o||n,r);return l===null||typeof o!="undefined"&&o!==n&&(l=J1(a,s,o,l,r),l===null)?!1:Hg(Array.from(a),[""],i,o,()=>SA(t,n,r))}function J1(e,t,n,r,i){for(;n;)n=_A(e,t,n,r,i);return n}function SA(e,t,n){const r=e._getTarget();t in r||(r[t]={});const i=r[t];return we(i)&&J(n)?n:i||{}}function kA(e,t,n,r){let i;for(const o of t)if(i=zw(vA(o,e),n),typeof i!="undefined")return Ug(e,i)?Yg(n,r,e,i):i}function zw(e,t){for(const n of t){if(!n)continue;const r=n[e];if(typeof r!="undefined")return r}}function ev(e){let t=e._keys;return t||(t=e._keys=CA(e._scopes)),t}function CA(e){const t=new Set;for(const n of e)for(const r of Object.keys(n).filter(i=>!i.startsWith("_")))t.add(r);return Array.from(t)}function Iw(e,t,n,r){const{iScale:i}=e,{key:o="r"}=this._parsing,s=new Array(r);let a,l,c,u;for(a=0,l=r;a<l;++a)c=a+n,u=t[c],s[a]={r:i.parse(Tr(u,o),c)};return s}const PA=Number.EPSILON||1e-14,fo=(e,t)=>t<e.length&&!e[t].skip&&e[t],jw=e=>e==="x"?"y":"x";function OA(e,t,n,r){const i=e.skip?t:e,o=t,s=n.skip?t:n,a=xh(o,i),l=xh(s,o);let c=a/(a+l),u=l/(a+l);c=isNaN(c)?0:c,u=isNaN(u)?0:u;const d=r*c,f=r*u;return{previous:{x:o.x-d*(s.x-i.x),y:o.y-d*(s.y-i.y)},next:{x:o.x+f*(s.x-i.x),y:o.y+f*(s.y-i.y)}}}function MA(e,t,n){const r=e.length;let i,o,s,a,l,c=fo(e,0);for(let u=0;u<r-1;++u)if(l=c,c=fo(e,u+1),!(!l||!c)){if(ws(t[u],0,PA)){n[u]=n[u+1]=0;continue}i=n[u]/t[u],o=n[u+1]/t[u],a=Math.pow(i,2)+Math.pow(o,2),!(a<=9)&&(s=3/Math.sqrt(a),n[u]=i*s*t[u],n[u+1]=o*s*t[u])}}function EA(e,t,n="x"){const r=jw(n),i=e.length;let o,s,a,l=fo(e,0);for(let c=0;c<i;++c){if(s=a,a=l,l=fo(e,c+1),!a)continue;const u=a[n],d=a[r];s&&(o=(u-s[n])/3,a[`cp1${n}`]=u-o,a[`cp1${r}`]=d-o*t[c]),l&&(o=(l[n]-u)/3,a[`cp2${n}`]=u+o,a[`cp2${r}`]=d+o*t[c])}}function NA(e,t="x"){const n=jw(t),r=e.length,i=Array(r).fill(0),o=Array(r);let s,a,l,c=fo(e,0);for(s=0;s<r;++s)if(a=l,l=c,c=fo(e,s+1),!!l){if(c){const u=c[t]-l[t];i[s]=u!==0?(c[n]-l[n])/u:0}o[s]=a?c?kn(i[s-1])!==kn(i[s])?0:(i[s-1]+i[s])/2:i[s-1]:i[s]}MA(e,i,o),EA(e,o,t)}function ol(e,t,n){return Math.max(Math.min(e,n),t)}function TA(e,t){let n,r,i,o,s,a=jn(e[0],t);for(n=0,r=e.length;n<r;++n)s=o,o=a,a=n<r-1&&jn(e[n+1],t),o&&(i=e[n],s&&(i.cp1x=ol(i.cp1x,t.left,t.right),i.cp1y=ol(i.cp1y,t.top,t.bottom)),a&&(i.cp2x=ol(i.cp2x,t.left,t.right),i.cp2y=ol(i.cp2y,t.top,t.bottom)))}function AA(e,t,n,r,i){let o,s,a,l;if(t.spanGaps&&(e=e.filter(c=>!c.skip)),t.cubicInterpolationMode==="monotone")NA(e,i);else{let c=r?e[e.length-1]:e[0];for(o=0,s=e.length;o<s;++o)a=e[o],l=OA(c,a,e[Math.min(o+1,s-(r?0:1))%s],t.tension),a.cp1x=l.previous.x,a.cp1y=l.previous.y,a.cp2x=l.next.x,a.cp2y=l.next.y,c=a}t.capBezierPoints&&TA(e,n)}function Xg(){return typeof window!="undefined"&&typeof document!="undefined"}function Kg(e){let t=e.parentNode;return t&&t.toString()==="[object ShadowRoot]"&&(t=t.host),t}function Ac(e,t,n){let r;return typeof e=="string"?(r=parseInt(e,10),e.indexOf("%")!==-1&&(r=r/100*t.parentNode[n])):r=e,r}const Uu=e=>e.ownerDocument.defaultView.getComputedStyle(e,null);function $A(e,t){return Uu(e).getPropertyValue(t)}const RA=["top","right","bottom","left"];function ni(e,t,n){const r={};n=n?"-"+n:"";for(let i=0;i<4;i++){const o=RA[i];r[o]=parseFloat(e[t+"-"+o+n])||0}return r.width=r.left+r.right,r.height=r.top+r.bottom,r}const LA=(e,t,n)=>(e>0||t>0)&&(!n||!n.shadowRoot);function DA(e,t){const n=e.touches,r=n&&n.length?n[0]:e,{offsetX:i,offsetY:o}=r;let s=!1,a,l;if(LA(i,o,e.target))a=i,l=o;else{const c=t.getBoundingClientRect();a=r.clientX-c.left,l=r.clientY-c.top,s=!0}return{x:a,y:l,box:s}}function Yr(e,t){if("native"in e)return e;const{canvas:n,currentDevicePixelRatio:r}=t,i=Uu(n),o=i.boxSizing==="border-box",s=ni(i,"padding"),a=ni(i,"border","width"),{x:l,y:c,box:u}=DA(e,n),d=s.left+(u&&a.left),f=s.top+(u&&a.top);let{width:g,height:v}=t;return o&&(g-=s.width+a.width,v-=s.height+a.height),{x:Math.round((l-d)/g*n.width/r),y:Math.round((c-f)/v*n.height/r)}}function zA(e,t,n){let r,i;if(t===void 0||n===void 0){const o=e&&Kg(e);if(!o)t=e.clientWidth,n=e.clientHeight;else{const s=o.getBoundingClientRect(),a=Uu(o),l=ni(a,"border","width"),c=ni(a,"padding");t=s.width-c.width-l.width,n=s.height-c.height-l.height,r=Ac(a.maxWidth,o,"clientWidth"),i=Ac(a.maxHeight,o,"clientHeight")}}return{width:t,height:n,maxWidth:r||Nc,maxHeight:i||Nc}}const sl=e=>Math.round(e*10)/10;function IA(e,t,n,r){const i=Uu(e),o=ni(i,"margin"),s=Ac(i.maxWidth,e,"clientWidth")||Nc,a=Ac(i.maxHeight,e,"clientHeight")||Nc,l=zA(e,t,n);let{width:c,height:u}=l;if(i.boxSizing==="content-box"){const f=ni(i,"border","width"),g=ni(i,"padding");c-=g.width+f.width,u-=g.height+f.height}return c=Math.max(0,c-o.width),u=Math.max(0,r?c/r:u-o.height),c=sl(Math.min(c,s,l.maxWidth)),u=sl(Math.min(u,a,l.maxHeight)),c&&!u&&(u=sl(c/2)),(t!==void 0||n!==void 0)&&r&&l.height&&u>l.height&&(u=l.height,c=sl(Math.floor(u*r))),{width:c,height:u}}function tv(e,t,n){const r=t||1,i=Math.floor(e.height*r),o=Math.floor(e.width*r);e.height=Math.floor(e.height),e.width=Math.floor(e.width);const s=e.canvas;return s.style&&(n||!s.style.height&&!s.style.width)&&(s.style.height=`${e.height}px`,s.style.width=`${e.width}px`),e.currentDevicePixelRatio!==r||s.height!==i||s.width!==o?(e.currentDevicePixelRatio=r,s.height=i,s.width=o,e.ctx.setTransform(r,0,0,r,0,0),!0):!1}const jA=function(){let e=!1;try{const t={get passive(){return e=!0,!1}};Xg()&&(window.addEventListener("test",null,t),window.removeEventListener("test",null,t))}catch{}return e}();function nv(e,t){const n=$A(e,t),r=n&&n.match(/^(\d+)(\.\d+)?px$/);return r?+r[1]:void 0}function Xr(e,t,n,r){return{x:e.x+n*(t.x-e.x),y:e.y+n*(t.y-e.y)}}function FA(e,t,n,r){return{x:e.x+n*(t.x-e.x),y:r==="middle"?n<.5?e.y:t.y:r==="after"?n<1?e.y:t.y:n>0?t.y:e.y}}function BA(e,t,n,r){const i={x:e.cp2x,y:e.cp2y},o={x:t.cp1x,y:t.cp1y},s=Xr(e,i,n),a=Xr(i,o,n),l=Xr(o,t,n),c=Xr(s,a,n),u=Xr(a,l,n);return Xr(c,u,n)}const WA=function(e,t){return{x(n){return e+e+t-n},setWidth(n){t=n},textAlign(n){return n==="center"?n:n==="right"?"left":"right"},xPlus(n,r){return n-r},leftForLtr(n,r){return n-r}}},VA=function(){return{x(e){return e},setWidth(e){},textAlign(e){return e},xPlus(e,t){return e+t},leftForLtr(e,t){return e}}};function eo(e,t,n){return e?WA(t,n):VA()}function Fw(e,t){let n,r;(t==="ltr"||t==="rtl")&&(n=e.canvas.style,r=[n.getPropertyValue("direction"),n.getPropertyPriority("direction")],n.setProperty("direction",t,"important"),e.prevTextDirection=r)}function Bw(e,t){t!==void 0&&(delete e.prevTextDirection,e.canvas.style.setProperty("direction",t[0],t[1]))}function Ww(e){return e==="angle"?{between:ea,compare:HT,normalize:Nt}:{between:zn,compare:(t,n)=>t-n,normalize:t=>t}}function rv({start:e,end:t,count:n,loop:r,style:i}){return{start:e%n,end:t%n,loop:r&&(t-e+1)%n===0,style:i}}function HA(e,t,n){const{property:r,start:i,end:o}=n,{between:s,normalize:a}=Ww(r),l=t.length;let{start:c,end:u,loop:d}=e,f,g;if(d){for(c+=l,u+=l,f=0,g=l;f<g&&s(a(t[c%l][r]),i,o);++f)c--,u--;c%=l,u%=l}return u<c&&(u+=l),{start:c,end:u,loop:d,style:e.style}}function Vw(e,t,n){if(!n)return[e];const{property:r,start:i,end:o}=n,s=t.length,{compare:a,between:l,normalize:c}=Ww(r),{start:u,end:d,loop:f,style:g}=HA(e,t,n),v=[];let y=!1,p=null,m,x,b;const w=()=>l(i,b,m)&&a(i,b)!==0,_=()=>a(o,m)===0||l(o,b,m),k=()=>y||w(),P=()=>!y||_();for(let M=u,E=u;M<=d;++M)x=t[M%s],!x.skip&&(m=c(x[r]),m!==b&&(y=l(m,i,o),p===null&&k()&&(p=a(m,i)===0?M:E),p!==null&&P()&&(v.push(rv({start:p,end:M,loop:f,count:s,style:g})),p=null),E=M,b=m));return p!==null&&v.push(rv({start:p,end:d,loop:f,count:s,style:g})),v}function Hw(e,t){const n=[],r=e.segments;for(let i=0;i<r.length;i++){const o=Vw(r[i],e.points,t);o.length&&n.push(...o)}return n}function UA(e,t,n,r){let i=0,o=t-1;if(n&&!r)for(;i<t&&!e[i].skip;)i++;for(;i<t&&e[i].skip;)i++;for(i%=t,n&&(o+=i);o>i&&e[o%t].skip;)o--;return o%=t,{start:i,end:o}}function YA(e,t,n,r){const i=e.length,o=[];let s=t,a=e[t],l;for(l=t+1;l<=n;++l){const c=e[l%i];c.skip||c.stop?a.skip||(r=!1,o.push({start:t%i,end:(l-1)%i,loop:r}),t=s=c.stop?l:null):(s=l,a.skip&&(t=l)),a=c}return s!==null&&o.push({start:t%i,end:s%i,loop:r}),o}function XA(e,t){const n=e.points,r=e.options.spanGaps,i=n.length;if(!i)return[];const o=!!e._loop,{start:s,end:a}=UA(n,i,o,r);if(r===!0)return iv(e,[{start:s,end:a,loop:o}],n,t);const l=a<s?a+i:a,c=!!e._fullLoop&&s===0&&a===i-1;return iv(e,YA(n,s,l,c),n,t)}function iv(e,t,n,r){return!r||!r.setContext||!n?t:KA(e,t,n,r)}function KA(e,t,n,r){const i=e._chart.getContext(),o=ov(e.options),{_datasetIndex:s,options:{spanGaps:a}}=e,l=n.length,c=[];let u=o,d=t[0].start,f=d;function g(v,y,p,m){const x=a?-1:1;if(v!==y){for(v+=l;n[v%l].skip;)v-=x;for(;n[y%l].skip;)y+=x;v%l!==y%l&&(c.push({start:v%l,end:y%l,loop:p,style:m}),u=m,d=y%l)}}for(const v of t){d=a?d:v.start;let y=n[d%l],p;for(f=d+1;f<=v.end;f++){const m=n[f%l];p=ov(r.setContext(Ir(i,{type:"segment",p0:y,p1:m,p0DataIndex:(f-1)%l,p1DataIndex:f%l,datasetIndex:s}))),GA(p,u)&&g(d,f-1,v.loop,u),y=m,u=p}d<f-1&&g(d,f-1,v.loop,u)}return c}function ov(e){return{backgroundColor:e.backgroundColor,borderCapStyle:e.borderCapStyle,borderDash:e.borderDash,borderDashOffset:e.borderDashOffset,borderJoinStyle:e.borderJoinStyle,borderWidth:e.borderWidth,borderColor:e.borderColor}}function GA(e,t){if(!t)return!1;const n=[],r=function(i,o){return Wg(o)?(n.includes(o)||n.push(o),n.indexOf(o)):o};return JSON.stringify(e,r)!==JSON.stringify(t,r)}/*!
 * Chart.js v4.4.3
 * https://www.chartjs.org
 * (c) 2024 Chart.js Contributors
 * Released under the MIT License
 */class qA{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(t,n,r,i){const o=n.listeners[i],s=n.duration;o.forEach(a=>a({chart:t,initial:n.initial,numSteps:s,currentStep:Math.min(r-n.start,s)}))}_refresh(){this._request||(this._running=!0,this._request=Ow.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(t=Date.now()){let n=0;this._charts.forEach((r,i)=>{if(!r.running||!r.items.length)return;const o=r.items;let s=o.length-1,a=!1,l;for(;s>=0;--s)l=o[s],l._active?(l._total>r.duration&&(r.duration=l._total),l.tick(t),a=!0):(o[s]=o[o.length-1],o.pop());a&&(i.draw(),this._notify(i,r,t,"progress")),o.length||(r.running=!1,this._notify(i,r,t,"complete"),r.initial=!1),n+=o.length}),this._lastDate=t,n===0&&(this._running=!1)}_getAnims(t){const n=this._charts;let r=n.get(t);return r||(r={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},n.set(t,r)),r}listen(t,n,r){this._getAnims(t).listeners[n].push(r)}add(t,n){!n||!n.length||this._getAnims(t).items.push(...n)}has(t){return this._getAnims(t).items.length>0}start(t){const n=this._charts.get(t);!n||(n.running=!0,n.start=Date.now(),n.duration=n.items.reduce((r,i)=>Math.max(r,i._duration),0),this._refresh())}running(t){if(!this._running)return!1;const n=this._charts.get(t);return!(!n||!n.running||!n.items.length)}stop(t){const n=this._charts.get(t);if(!n||!n.items.length)return;const r=n.items;let i=r.length-1;for(;i>=0;--i)r[i].cancel();n.items=[],this._notify(t,n,Date.now(),"complete")}remove(t){return this._charts.delete(t)}}var Nn=new qA;const sv="transparent",QA={boolean(e,t,n){return n>.5?t:e},color(e,t,n){const r=q1(e||sv),i=r.valid&&q1(t||sv);return i&&i.valid?i.mix(r,n).hexString():t},number(e,t,n){return e+(t-e)*n}};class ZA{constructor(t,n,r,i){const o=n[r];i=ts([t.to,i,o,t.from]);const s=ts([t.from,o,i]);this._active=!0,this._fn=t.fn||QA[t.type||typeof s],this._easing=_s[t.easing]||_s.linear,this._start=Math.floor(Date.now()+(t.delay||0)),this._duration=this._total=Math.floor(t.duration),this._loop=!!t.loop,this._target=n,this._prop=r,this._from=s,this._to=i,this._promises=void 0}active(){return this._active}update(t,n,r){if(this._active){this._notify(!1);const i=this._target[this._prop],o=r-this._start,s=this._duration-o;this._start=r,this._duration=Math.floor(Math.max(s,t.duration)),this._total+=o,this._loop=!!t.loop,this._to=ts([t.to,n,i,t.from]),this._from=ts([t.from,i,n])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(t){const n=t-this._start,r=this._duration,i=this._prop,o=this._from,s=this._loop,a=this._to;let l;if(this._active=o!==a&&(s||n<r),!this._active){this._target[i]=a,this._notify(!0);return}if(n<0){this._target[i]=o;return}l=n/r%2,l=s&&l>1?2-l:l,l=this._easing(Math.min(1,Math.max(0,l))),this._target[i]=this._fn(o,a,l)}wait(){const t=this._promises||(this._promises=[]);return new Promise((n,r)=>{t.push({res:n,rej:r})})}_notify(t){const n=t?"res":"rej",r=this._promises||[];for(let i=0;i<r.length;i++)r[i][n]()}}class Uw{constructor(t,n){this._chart=t,this._properties=new Map,this.configure(n)}configure(t){if(!J(t))return;const n=Object.keys(Le.animation),r=this._properties;Object.getOwnPropertyNames(t).forEach(i=>{const o=t[i];if(!J(o))return;const s={};for(const a of n)s[a]=o[a];(we(o.properties)&&o.properties||[i]).forEach(a=>{(a===i||!r.has(a))&&r.set(a,s)})})}_animateOptions(t,n){const r=n.options,i=e8(t,r);if(!i)return[];const o=this._createAnimations(i,r);return r.$shared&&JA(t.options.$animations,r).then(()=>{t.options=r},()=>{}),o}_createAnimations(t,n){const r=this._properties,i=[],o=t.$animations||(t.$animations={}),s=Object.keys(n),a=Date.now();let l;for(l=s.length-1;l>=0;--l){const c=s[l];if(c.charAt(0)==="$")continue;if(c==="options"){i.push(...this._animateOptions(t,n));continue}const u=n[c];let d=o[c];const f=r.get(c);if(d)if(f&&d.active()){d.update(f,u,a);continue}else d.cancel();if(!f||!f.duration){t[c]=u;continue}o[c]=d=new ZA(f,t,c,u),i.push(d)}return i}update(t,n){if(this._properties.size===0){Object.assign(t,n);return}const r=this._createAnimations(t,n);if(r.length)return Nn.add(this._chart,r),!0}}function JA(e,t){const n=[],r=Object.keys(t);for(let i=0;i<r.length;i++){const o=e[r[i]];o&&o.active()&&n.push(o.wait())}return Promise.all(n)}function e8(e,t){if(!t)return;let n=e.options;if(!n){e.options=t;return}return n.$shared&&(e.options=n=Object.assign({},n,{$shared:!1,$animations:{}})),n}function av(e,t){const n=e&&e.options||{},r=n.reverse,i=n.min===void 0?t:0,o=n.max===void 0?t:0;return{start:r?o:i,end:r?i:o}}function t8(e,t,n){if(n===!1)return!1;const r=av(e,n),i=av(t,n);return{top:i.end,right:r.end,bottom:i.start,left:r.start}}function n8(e){let t,n,r,i;return J(e)?(t=e.top,n=e.right,r=e.bottom,i=e.left):t=n=r=i=e,{top:t,right:n,bottom:r,left:i,disabled:e===!1}}function Yw(e,t){const n=[],r=e._getSortedDatasetMetas(t);let i,o;for(i=0,o=r.length;i<o;++i)n.push(r[i].index);return n}function lv(e,t,n,r={}){const i=e.keys,o=r.mode==="single";let s,a,l,c;if(t!==null){for(s=0,a=i.length;s<a;++s){if(l=+i[s],l===n){if(r.all)continue;break}c=e.values[l],Re(c)&&(o||t===0||kn(t)===kn(c))&&(t+=c)}return t}}function r8(e,t){const{iScale:n,vScale:r}=t,i=n.axis==="x"?"x":"y",o=r.axis==="x"?"x":"y",s=Object.keys(e),a=new Array(s.length);let l,c,u;for(l=0,c=s.length;l<c;++l)u=s[l],a[l]={[i]:u,[o]:e[u]};return a}function cv(e,t){const n=e&&e.options.stacked;return n||n===void 0&&t.stack!==void 0}function i8(e,t,n){return`${e.id}.${t.id}.${n.stack||n.type}`}function o8(e){const{min:t,max:n,minDefined:r,maxDefined:i}=e.getUserBounds();return{min:r?t:Number.NEGATIVE_INFINITY,max:i?n:Number.POSITIVE_INFINITY}}function s8(e,t,n){const r=e[t]||(e[t]={});return r[n]||(r[n]={})}function uv(e,t,n,r){for(const i of t.getMatchingVisibleMetas(r).reverse()){const o=e[i.index];if(n&&o>0||!n&&o<0)return i.index}return null}function dv(e,t){const{chart:n,_cachedMeta:r}=e,i=n._stacks||(n._stacks={}),{iScale:o,vScale:s,index:a}=r,l=o.axis,c=s.axis,u=i8(o,s,r),d=t.length;let f;for(let g=0;g<d;++g){const v=t[g],{[l]:y,[c]:p}=v,m=v._stacks||(v._stacks={});f=m[c]=s8(i,u,y),f[a]=p,f._top=uv(f,s,!0,r.type),f._bottom=uv(f,s,!1,r.type);const x=f._visualValues||(f._visualValues={});x[a]=p}}function Wd(e,t){const n=e.scales;return Object.keys(n).filter(r=>n[r].axis===t).shift()}function a8(e,t){return Ir(e,{active:!1,dataset:void 0,datasetIndex:t,index:t,mode:"default",type:"dataset"})}function l8(e,t,n){return Ir(e,{active:!1,dataIndex:t,parsed:void 0,raw:void 0,element:n,index:t,mode:"default",type:"data"})}function Vo(e,t){const n=e.controller.index,r=e.vScale&&e.vScale.axis;if(!!r){t=t||e._parsed;for(const i of t){const o=i._stacks;if(!o||o[r]===void 0||o[r][n]===void 0)return;delete o[r][n],o[r]._visualValues!==void 0&&o[r]._visualValues[n]!==void 0&&delete o[r]._visualValues[n]}}}const Vd=e=>e==="reset"||e==="none",fv=(e,t)=>t?e:Object.assign({},e),c8=(e,t,n)=>e&&!t.hidden&&t._stacked&&{keys:Yw(n,!0),values:null};class on{constructor(t,n){this.chart=t,this._ctx=t.ctx,this.index=n,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){const t=this._cachedMeta;this.configure(),this.linkScales(),t._stacked=cv(t.vScale,t),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled("filler")&&console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")}updateIndex(t){this.index!==t&&Vo(this._cachedMeta),this.index=t}linkScales(){const t=this.chart,n=this._cachedMeta,r=this.getDataset(),i=(d,f,g,v)=>d==="x"?f:d==="r"?v:g,o=n.xAxisID=X(r.xAxisID,Wd(t,"x")),s=n.yAxisID=X(r.yAxisID,Wd(t,"y")),a=n.rAxisID=X(r.rAxisID,Wd(t,"r")),l=n.indexAxis,c=n.iAxisID=i(l,o,s,a),u=n.vAxisID=i(l,s,o,a);n.xScale=this.getScaleForId(o),n.yScale=this.getScaleForId(s),n.rScale=this.getScaleForId(a),n.iScale=this.getScaleForId(c),n.vScale=this.getScaleForId(u)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(t){return this.chart.scales[t]}_getOtherScale(t){const n=this._cachedMeta;return t===n.iScale?n.vScale:n.iScale}reset(){this._update("reset")}_destroy(){const t=this._cachedMeta;this._data&&X1(this._data,this),t._stacked&&Vo(t)}_dataCheck(){const t=this.getDataset(),n=t.data||(t.data=[]),r=this._data;if(J(n)){const i=this._cachedMeta;this._data=r8(n,i)}else if(r!==n){if(r){X1(r,this);const i=this._cachedMeta;Vo(i),i._parsed=[]}n&&Object.isExtensible(n)&&KT(n,this),this._syncList=[],this._data=n}}addElements(){const t=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(t.dataset=new this.datasetElementType)}buildOrUpdateElements(t){const n=this._cachedMeta,r=this.getDataset();let i=!1;this._dataCheck();const o=n._stacked;n._stacked=cv(n.vScale,n),n.stack!==r.stack&&(i=!0,Vo(n),n.stack=r.stack),this._resyncElements(t),(i||o!==n._stacked)&&dv(this,n._parsed)}configure(){const t=this.chart.config,n=t.datasetScopeKeys(this._type),r=t.getOptionScopes(this.getDataset(),n,!0);this.options=t.createResolver(r,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(t,n){const{_cachedMeta:r,_data:i}=this,{iScale:o,_stacked:s}=r,a=o.axis;let l=t===0&&n===i.length?!0:r._sorted,c=t>0&&r._parsed[t-1],u,d,f;if(this._parsing===!1)r._parsed=i,r._sorted=!0,f=i;else{we(i[t])?f=this.parseArrayData(r,i,t,n):J(i[t])?f=this.parseObjectData(r,i,t,n):f=this.parsePrimitiveData(r,i,t,n);const g=()=>d[a]===null||c&&d[a]<c[a];for(u=0;u<n;++u)r._parsed[u+t]=d=f[u],l&&(g()&&(l=!1),c=d);r._sorted=l}s&&dv(this,f)}parsePrimitiveData(t,n,r,i){const{iScale:o,vScale:s}=t,a=o.axis,l=s.axis,c=o.getLabels(),u=o===s,d=new Array(i);let f,g,v;for(f=0,g=i;f<g;++f)v=f+r,d[f]={[a]:u||o.parse(c[v],v),[l]:s.parse(n[v],v)};return d}parseArrayData(t,n,r,i){const{xScale:o,yScale:s}=t,a=new Array(i);let l,c,u,d;for(l=0,c=i;l<c;++l)u=l+r,d=n[u],a[l]={x:o.parse(d[0],u),y:s.parse(d[1],u)};return a}parseObjectData(t,n,r,i){const{xScale:o,yScale:s}=t,{xAxisKey:a="x",yAxisKey:l="y"}=this._parsing,c=new Array(i);let u,d,f,g;for(u=0,d=i;u<d;++u)f=u+r,g=n[f],c[u]={x:o.parse(Tr(g,a),f),y:s.parse(Tr(g,l),f)};return c}getParsed(t){return this._cachedMeta._parsed[t]}getDataElement(t){return this._cachedMeta.data[t]}applyStack(t,n,r){const i=this.chart,o=this._cachedMeta,s=n[t.axis],a={keys:Yw(i,!0),values:n._stacks[t.axis]._visualValues};return lv(a,s,o.index,{mode:r})}updateRangeFromParsed(t,n,r,i){const o=r[n.axis];let s=o===null?NaN:o;const a=i&&r._stacks[n.axis];i&&a&&(i.values=a,s=lv(i,o,this._cachedMeta.index)),t.min=Math.min(t.min,s),t.max=Math.max(t.max,s)}getMinMax(t,n){const r=this._cachedMeta,i=r._parsed,o=r._sorted&&t===r.iScale,s=i.length,a=this._getOtherScale(t),l=c8(n,r,this.chart),c={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:u,max:d}=o8(a);let f,g;function v(){g=i[f];const y=g[a.axis];return!Re(g[t.axis])||u>y||d<y}for(f=0;f<s&&!(!v()&&(this.updateRangeFromParsed(c,t,g,l),o));++f);if(o){for(f=s-1;f>=0;--f)if(!v()){this.updateRangeFromParsed(c,t,g,l);break}}return c}getAllParsedValues(t){const n=this._cachedMeta._parsed,r=[];let i,o,s;for(i=0,o=n.length;i<o;++i)s=n[i][t.axis],Re(s)&&r.push(s);return r}getMaxOverflow(){return!1}getLabelAndValue(t){const n=this._cachedMeta,r=n.iScale,i=n.vScale,o=this.getParsed(t);return{label:r?""+r.getLabelForValue(o[r.axis]):"",value:i?""+i.getLabelForValue(o[i.axis]):""}}_update(t){const n=this._cachedMeta;this.update(t||"default"),n._clip=n8(X(this.options.clip,t8(n.xScale,n.yScale,this.getMaxOverflow())))}update(t){}draw(){const t=this._ctx,n=this.chart,r=this._cachedMeta,i=r.data||[],o=n.chartArea,s=[],a=this._drawStart||0,l=this._drawCount||i.length-a,c=this.options.drawActiveElementsOnTop;let u;for(r.dataset&&r.dataset.draw(t,o,a,l),u=a;u<a+l;++u){const d=i[u];d.hidden||(d.active&&c?s.push(d):d.draw(t,o))}for(u=0;u<s.length;++u)s[u].draw(t,o)}getStyle(t,n){const r=n?"active":"default";return t===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(r):this.resolveDataElementOptions(t||0,r)}getContext(t,n,r){const i=this.getDataset();let o;if(t>=0&&t<this._cachedMeta.data.length){const s=this._cachedMeta.data[t];o=s.$context||(s.$context=l8(this.getContext(),t,s)),o.parsed=this.getParsed(t),o.raw=i.data[t],o.index=o.dataIndex=t}else o=this.$context||(this.$context=a8(this.chart.getContext(),this.index)),o.dataset=i,o.index=o.datasetIndex=this.index;return o.active=!!n,o.mode=r,o}resolveDatasetElementOptions(t){return this._resolveElementOptions(this.datasetElementType.id,t)}resolveDataElementOptions(t,n){return this._resolveElementOptions(this.dataElementType.id,n,t)}_resolveElementOptions(t,n="default",r){const i=n==="active",o=this._cachedDataOpts,s=t+"-"+n,a=o[s],l=this.enableOptionSharing&&Js(r);if(a)return fv(a,l);const c=this.chart.config,u=c.datasetElementScopeKeys(this._type,t),d=i?[`${t}Hover`,"hover",t,""]:[t,""],f=c.getOptionScopes(this.getDataset(),u),g=Object.keys(Le.elements[t]),v=()=>this.getContext(r,i,n),y=c.resolveNamedOptions(f,g,v,d);return y.$shared&&(y.$shared=l,o[s]=Object.freeze(fv(y,l))),y}_resolveAnimations(t,n,r){const i=this.chart,o=this._cachedDataOpts,s=`animation-${n}`,a=o[s];if(a)return a;let l;if(i.options.animation!==!1){const u=this.chart.config,d=u.datasetAnimationScopeKeys(this._type,n),f=u.getOptionScopes(this.getDataset(),d);l=u.createResolver(f,this.getContext(t,r,n))}const c=new Uw(i,l&&l.animations);return l&&l._cacheable&&(o[s]=Object.freeze(c)),c}getSharedOptions(t){if(!!t.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},t))}includeOptions(t,n){return!n||Vd(t)||this.chart._animationsDisabled}_getSharedOptions(t,n){const r=this.resolveDataElementOptions(t,n),i=this._sharedOptions,o=this.getSharedOptions(r),s=this.includeOptions(n,o)||o!==i;return this.updateSharedOptions(o,n,r),{sharedOptions:o,includeOptions:s}}updateElement(t,n,r,i){Vd(i)?Object.assign(t,r):this._resolveAnimations(n,i).update(t,r)}updateSharedOptions(t,n,r){t&&!Vd(n)&&this._resolveAnimations(void 0,n).update(t,r)}_setStyle(t,n,r,i){t.active=i;const o=this.getStyle(n,i);this._resolveAnimations(n,r,i).update(t,{options:!i&&this.getSharedOptions(o)||o})}removeHoverStyle(t,n,r){this._setStyle(t,r,"active",!1)}setHoverStyle(t,n,r){this._setStyle(t,r,"active",!0)}_removeDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!1)}_setDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!0)}_resyncElements(t){const n=this._data,r=this._cachedMeta.data;for(const[a,l,c]of this._syncList)this[a](l,c);this._syncList=[];const i=r.length,o=n.length,s=Math.min(o,i);s&&this.parse(0,s),o>i?this._insertElements(i,o-i,t):o<i&&this._removeElements(o,i-o)}_insertElements(t,n,r=!0){const i=this._cachedMeta,o=i.data,s=t+n;let a;const l=c=>{for(c.length+=n,a=c.length-1;a>=s;a--)c[a]=c[a-n]};for(l(o),a=t;a<s;++a)o[a]=new this.dataElementType;this._parsing&&l(i._parsed),this.parse(t,n),r&&this.updateElements(o,t,n,"reset")}updateElements(t,n,r,i){}_removeElements(t,n){const r=this._cachedMeta;if(this._parsing){const i=r._parsed.splice(t,n);r._stacked&&Vo(r,i)}r.data.splice(t,n)}_sync(t){if(this._parsing)this._syncList.push(t);else{const[n,r,i]=t;this[n](r,i)}this.chart._dataChanges.push([this.index,...t])}_onDataPush(){const t=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-t,t])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(t,n){n&&this._sync(["_removeElements",t,n]);const r=arguments.length-2;r&&this._sync(["_insertElements",t,r])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}z(on,"defaults",{}),z(on,"datasetElementType",null),z(on,"dataElementType",null);function u8(e,t){if(!e._cache.$bar){const n=e.getMatchingVisibleMetas(t);let r=[];for(let i=0,o=n.length;i<o;i++)r=r.concat(n[i].controller.getAllParsedValues(e));e._cache.$bar=Pw(r.sort((i,o)=>i-o))}return e._cache.$bar}function d8(e){const t=e.iScale,n=u8(t,e.type);let r=t._length,i,o,s,a;const l=()=>{s===32767||s===-32768||(Js(a)&&(r=Math.min(r,Math.abs(s-a)||r)),a=s)};for(i=0,o=n.length;i<o;++i)s=t.getPixelForValue(n[i]),l();for(a=void 0,i=0,o=t.ticks.length;i<o;++i)s=t.getPixelForTick(i),l();return r}function f8(e,t,n,r){const i=n.barThickness;let o,s;return te(i)?(o=t.min*n.categoryPercentage,s=n.barPercentage):(o=i*r,s=1),{chunk:o/r,ratio:s,start:t.pixels[e]-o/2}}function h8(e,t,n,r){const i=t.pixels,o=i[e];let s=e>0?i[e-1]:null,a=e<i.length-1?i[e+1]:null;const l=n.categoryPercentage;s===null&&(s=o-(a===null?t.end-t.start:a-o)),a===null&&(a=o+o-s);const c=o-(o-Math.min(s,a))/2*l;return{chunk:Math.abs(a-s)/2*l/r,ratio:n.barPercentage,start:c}}function p8(e,t,n,r){const i=n.parse(e[0],r),o=n.parse(e[1],r),s=Math.min(i,o),a=Math.max(i,o);let l=s,c=a;Math.abs(s)>Math.abs(a)&&(l=a,c=s),t[n.axis]=c,t._custom={barStart:l,barEnd:c,start:i,end:o,min:s,max:a}}function Xw(e,t,n,r){return we(e)?p8(e,t,n,r):t[n.axis]=n.parse(e,r),t}function hv(e,t,n,r){const i=e.iScale,o=e.vScale,s=i.getLabels(),a=i===o,l=[];let c,u,d,f;for(c=n,u=n+r;c<u;++c)f=t[c],d={},d[i.axis]=a||i.parse(s[c],c),l.push(Xw(f,d,o,c));return l}function Hd(e){return e&&e.barStart!==void 0&&e.barEnd!==void 0}function g8(e,t,n){return e!==0?kn(e):(t.isHorizontal()?1:-1)*(t.min>=n?1:-1)}function m8(e){let t,n,r,i,o;return e.horizontal?(t=e.base>e.x,n="left",r="right"):(t=e.base<e.y,n="bottom",r="top"),t?(i="end",o="start"):(i="start",o="end"),{start:n,end:r,reverse:t,top:i,bottom:o}}function v8(e,t,n,r){let i=t.borderSkipped;const o={};if(!i){e.borderSkipped=o;return}if(i===!0){e.borderSkipped={top:!0,right:!0,bottom:!0,left:!0};return}const{start:s,end:a,reverse:l,top:c,bottom:u}=m8(e);i==="middle"&&n&&(e.enableBorderRadius=!0,(n._top||0)===r?i=c:(n._bottom||0)===r?i=u:(o[pv(u,s,a,l)]=!0,i=c)),o[pv(i,s,a,l)]=!0,e.borderSkipped=o}function pv(e,t,n,r){return r?(e=y8(e,t,n),e=gv(e,n,t)):e=gv(e,t,n),e}function y8(e,t,n){return e===t?n:e===n?t:e}function gv(e,t,n){return e==="start"?t:e==="end"?n:e}function x8(e,{inflateAmount:t},n){e.inflateAmount=t==="auto"?n===1?.33:0:t}class Rl extends on{parsePrimitiveData(t,n,r,i){return hv(t,n,r,i)}parseArrayData(t,n,r,i){return hv(t,n,r,i)}parseObjectData(t,n,r,i){const{iScale:o,vScale:s}=t,{xAxisKey:a="x",yAxisKey:l="y"}=this._parsing,c=o.axis==="x"?a:l,u=s.axis==="x"?a:l,d=[];let f,g,v,y;for(f=r,g=r+i;f<g;++f)y=n[f],v={},v[o.axis]=o.parse(Tr(y,c),f),d.push(Xw(Tr(y,u),v,s,f));return d}updateRangeFromParsed(t,n,r,i){super.updateRangeFromParsed(t,n,r,i);const o=r._custom;o&&n===this._cachedMeta.vScale&&(t.min=Math.min(t.min,o.min),t.max=Math.max(t.max,o.max))}getMaxOverflow(){return 0}getLabelAndValue(t){const n=this._cachedMeta,{iScale:r,vScale:i}=n,o=this.getParsed(t),s=o._custom,a=Hd(s)?"["+s.start+", "+s.end+"]":""+i.getLabelForValue(o[i.axis]);return{label:""+r.getLabelForValue(o[r.axis]),value:a}}initialize(){this.enableOptionSharing=!0,super.initialize();const t=this._cachedMeta;t.stack=this.getDataset().stack}update(t){const n=this._cachedMeta;this.updateElements(n.data,0,n.data.length,t)}updateElements(t,n,r,i){const o=i==="reset",{index:s,_cachedMeta:{vScale:a}}=this,l=a.getBasePixel(),c=a.isHorizontal(),u=this._getRuler(),{sharedOptions:d,includeOptions:f}=this._getSharedOptions(n,i);for(let g=n;g<n+r;g++){const v=this.getParsed(g),y=o||te(v[a.axis])?{base:l,head:l}:this._calculateBarValuePixels(g),p=this._calculateBarIndexPixels(g,u),m=(v._stacks||{})[a.axis],x={horizontal:c,base:y.base,enableBorderRadius:!m||Hd(v._custom)||s===m._top||s===m._bottom,x:c?y.head:p.center,y:c?p.center:y.head,height:c?p.size:Math.abs(y.size),width:c?Math.abs(y.size):p.size};f&&(x.options=d||this.resolveDataElementOptions(g,t[g].active?"active":i));const b=x.options||t[g].options;v8(x,b,m,s),x8(x,b,u.ratio),this.updateElement(t[g],g,x,i)}}_getStacks(t,n){const{iScale:r}=this._cachedMeta,i=r.getMatchingVisibleMetas(this._type).filter(l=>l.controller.options.grouped),o=r.options.stacked,s=[],a=l=>{const c=l.controller.getParsed(n),u=c&&c[l.vScale.axis];if(te(u)||isNaN(u))return!0};for(const l of i)if(!(n!==void 0&&a(l))&&((o===!1||s.indexOf(l.stack)===-1||o===void 0&&l.stack===void 0)&&s.push(l.stack),l.index===t))break;return s.length||s.push(void 0),s}_getStackCount(t){return this._getStacks(void 0,t).length}_getStackIndex(t,n,r){const i=this._getStacks(t,r),o=n!==void 0?i.indexOf(n):-1;return o===-1?i.length-1:o}_getRuler(){const t=this.options,n=this._cachedMeta,r=n.iScale,i=[];let o,s;for(o=0,s=n.data.length;o<s;++o)i.push(r.getPixelForValue(this.getParsed(o)[r.axis],o));const a=t.barThickness;return{min:a||d8(n),pixels:i,start:r._startPixel,end:r._endPixel,stackCount:this._getStackCount(),scale:r,grouped:t.grouped,ratio:a?1:t.categoryPercentage*t.barPercentage}}_calculateBarValuePixels(t){const{_cachedMeta:{vScale:n,_stacked:r,index:i},options:{base:o,minBarLength:s}}=this,a=o||0,l=this.getParsed(t),c=l._custom,u=Hd(c);let d=l[n.axis],f=0,g=r?this.applyStack(n,l,r):d,v,y;g!==d&&(f=g-d,g=d),u&&(d=c.barStart,g=c.barEnd-c.barStart,d!==0&&kn(d)!==kn(c.barEnd)&&(f=0),f+=d);const p=!te(o)&&!u?o:f;let m=n.getPixelForValue(p);if(this.chart.getDataVisibility(t)?v=n.getPixelForValue(f+g):v=m,y=v-m,Math.abs(y)<s){y=g8(y,n,a)*s,d===a&&(m-=y/2);const x=n.getPixelForDecimal(0),b=n.getPixelForDecimal(1),w=Math.min(x,b),_=Math.max(x,b);m=Math.max(Math.min(m,_),w),v=m+y,r&&!u&&(l._stacks[n.axis]._visualValues[i]=n.getValueForPixel(v)-n.getValueForPixel(m))}if(m===n.getPixelForValue(a)){const x=kn(y)*n.getLineWidthForValue(a)/2;m+=x,y-=x}return{size:y,base:m,head:v,center:v+y/2}}_calculateBarIndexPixels(t,n){const r=n.scale,i=this.options,o=i.skipNull,s=X(i.maxBarThickness,1/0);let a,l;if(n.grouped){const c=o?this._getStackCount(t):n.stackCount,u=i.barThickness==="flex"?h8(t,n,i,c):f8(t,n,i,c),d=this._getStackIndex(this.index,this._cachedMeta.stack,o?t:void 0);a=u.start+u.chunk*d+u.chunk/2,l=Math.min(s,u.chunk*u.ratio)}else a=r.getPixelForValue(this.getParsed(t)[r.axis],t),l=Math.min(s,n.min*n.ratio);return{base:a-l/2,head:a+l/2,center:a,size:l}}draw(){const t=this._cachedMeta,n=t.vScale,r=t.data,i=r.length;let o=0;for(;o<i;++o)this.getParsed(o)[n.axis]!==null&&!r[o].hidden&&r[o].draw(this._ctx)}}z(Rl,"id","bar"),z(Rl,"defaults",{datasetElementType:!1,dataElementType:"bar",categoryPercentage:.8,barPercentage:.9,grouped:!0,animations:{numbers:{type:"number",properties:["x","y","base","width","height"]}}}),z(Rl,"overrides",{scales:{_index_:{type:"category",offset:!0,grid:{offset:!0}},_value_:{type:"linear",beginAtZero:!0}}});class Ll extends on{initialize(){this.enableOptionSharing=!0,super.initialize()}parsePrimitiveData(t,n,r,i){const o=super.parsePrimitiveData(t,n,r,i);for(let s=0;s<o.length;s++)o[s]._custom=this.resolveDataElementOptions(s+r).radius;return o}parseArrayData(t,n,r,i){const o=super.parseArrayData(t,n,r,i);for(let s=0;s<o.length;s++){const a=n[r+s];o[s]._custom=X(a[2],this.resolveDataElementOptions(s+r).radius)}return o}parseObjectData(t,n,r,i){const o=super.parseObjectData(t,n,r,i);for(let s=0;s<o.length;s++){const a=n[r+s];o[s]._custom=X(a&&a.r&&+a.r,this.resolveDataElementOptions(s+r).radius)}return o}getMaxOverflow(){const t=this._cachedMeta.data;let n=0;for(let r=t.length-1;r>=0;--r)n=Math.max(n,t[r].size(this.resolveDataElementOptions(r))/2);return n>0&&n}getLabelAndValue(t){const n=this._cachedMeta,r=this.chart.data.labels||[],{xScale:i,yScale:o}=n,s=this.getParsed(t),a=i.getLabelForValue(s.x),l=o.getLabelForValue(s.y),c=s._custom;return{label:r[t]||"",value:"("+a+", "+l+(c?", "+c:"")+")"}}update(t){const n=this._cachedMeta.data;this.updateElements(n,0,n.length,t)}updateElements(t,n,r,i){const o=i==="reset",{iScale:s,vScale:a}=this._cachedMeta,{sharedOptions:l,includeOptions:c}=this._getSharedOptions(n,i),u=s.axis,d=a.axis;for(let f=n;f<n+r;f++){const g=t[f],v=!o&&this.getParsed(f),y={},p=y[u]=o?s.getPixelForDecimal(.5):s.getPixelForValue(v[u]),m=y[d]=o?a.getBasePixel():a.getPixelForValue(v[d]);y.skip=isNaN(p)||isNaN(m),c&&(y.options=l||this.resolveDataElementOptions(f,g.active?"active":i),o&&(y.options.radius=0)),this.updateElement(g,f,y,i)}}resolveDataElementOptions(t,n){const r=this.getParsed(t);let i=super.resolveDataElementOptions(t,n);i.$shared&&(i=Object.assign({},i,{$shared:!1}));const o=i.radius;return n!=="active"&&(i.radius=0),i.radius+=X(r&&r._custom,o),i}}z(Ll,"id","bubble"),z(Ll,"defaults",{datasetElementType:!1,dataElementType:"point",animations:{numbers:{type:"number",properties:["x","y","borderWidth","radius"]}}}),z(Ll,"overrides",{scales:{x:{type:"linear"},y:{type:"linear"}}});function b8(e,t,n){let r=1,i=1,o=0,s=0;if(t<Se){const a=e,l=a+t,c=Math.cos(a),u=Math.sin(a),d=Math.cos(l),f=Math.sin(l),g=(b,w,_)=>ea(b,a,l,!0)?1:Math.max(w,w*n,_,_*n),v=(b,w,_)=>ea(b,a,l,!0)?-1:Math.min(w,w*n,_,_*n),y=g(0,c,d),p=g(ze,u,f),m=v(ke,c,d),x=v(ke+ze,u,f);r=(y-m)/2,i=(p-x)/2,o=-(y+m)/2,s=-(p+x)/2}return{ratioX:r,ratioY:i,offsetX:o,offsetY:s}}class Jr extends on{constructor(t,n){super(t,n),this.enableOptionSharing=!0,this.innerRadius=void 0,this.outerRadius=void 0,this.offsetX=void 0,this.offsetY=void 0}linkScales(){}parse(t,n){const r=this.getDataset().data,i=this._cachedMeta;if(this._parsing===!1)i._parsed=r;else{let o=l=>+r[l];if(J(r[t])){const{key:l="value"}=this._parsing;o=c=>+Tr(r[c],l)}let s,a;for(s=t,a=t+n;s<a;++s)i._parsed[s]=o(s)}}_getRotation(){return nn(this.options.rotation-90)}_getCircumference(){return nn(this.options.circumference)}_getRotationExtents(){let t=Se,n=-Se;for(let r=0;r<this.chart.data.datasets.length;++r)if(this.chart.isDatasetVisible(r)&&this.chart.getDatasetMeta(r).type===this._type){const i=this.chart.getDatasetMeta(r).controller,o=i._getRotation(),s=i._getCircumference();t=Math.min(t,o),n=Math.max(n,o+s)}return{rotation:t,circumference:n-t}}update(t){const n=this.chart,{chartArea:r}=n,i=this._cachedMeta,o=i.data,s=this.getMaxBorderWidth()+this.getMaxOffset(o)+this.options.spacing,a=Math.max((Math.min(r.width,r.height)-s)/2,0),l=Math.min(RT(this.options.cutout,a),1),c=this._getRingWeight(this.index),{circumference:u,rotation:d}=this._getRotationExtents(),{ratioX:f,ratioY:g,offsetX:v,offsetY:y}=b8(d,u,l),p=(r.width-s)/f,m=(r.height-s)/g,x=Math.max(Math.min(p,m)/2,0),b=ww(this.options.radius,x),w=Math.max(b*l,0),_=(b-w)/this._getVisibleDatasetWeightTotal();this.offsetX=v*b,this.offsetY=y*b,i.total=this.calculateTotal(),this.outerRadius=b-_*this._getRingWeightOffset(this.index),this.innerRadius=Math.max(this.outerRadius-_*c,0),this.updateElements(o,0,o.length,t)}_circumference(t,n){const r=this.options,i=this._cachedMeta,o=this._getCircumference();return n&&r.animation.animateRotate||!this.chart.getDataVisibility(t)||i._parsed[t]===null||i.data[t].hidden?0:this.calculateCircumference(i._parsed[t]*o/Se)}updateElements(t,n,r,i){const o=i==="reset",s=this.chart,a=s.chartArea,c=s.options.animation,u=(a.left+a.right)/2,d=(a.top+a.bottom)/2,f=o&&c.animateScale,g=f?0:this.innerRadius,v=f?0:this.outerRadius,{sharedOptions:y,includeOptions:p}=this._getSharedOptions(n,i);let m=this._getRotation(),x;for(x=0;x<n;++x)m+=this._circumference(x,o);for(x=n;x<n+r;++x){const b=this._circumference(x,o),w=t[x],_={x:u+this.offsetX,y:d+this.offsetY,startAngle:m,endAngle:m+b,circumference:b,outerRadius:v,innerRadius:g};p&&(_.options=y||this.resolveDataElementOptions(x,w.active?"active":i)),m+=b,this.updateElement(w,x,_,i)}}calculateTotal(){const t=this._cachedMeta,n=t.data;let r=0,i;for(i=0;i<n.length;i++){const o=t._parsed[i];o!==null&&!isNaN(o)&&this.chart.getDataVisibility(i)&&!n[i].hidden&&(r+=Math.abs(o))}return r}calculateCircumference(t){const n=this._cachedMeta.total;return n>0&&!isNaN(t)?Se*(Math.abs(t)/n):0}getLabelAndValue(t){const n=this._cachedMeta,r=this.chart,i=r.data.labels||[],o=Ta(n._parsed[t],r.options.locale);return{label:i[t]||"",value:o}}getMaxBorderWidth(t){let n=0;const r=this.chart;let i,o,s,a,l;if(!t){for(i=0,o=r.data.datasets.length;i<o;++i)if(r.isDatasetVisible(i)){s=r.getDatasetMeta(i),t=s.data,a=s.controller;break}}if(!t)return 0;for(i=0,o=t.length;i<o;++i)l=a.resolveDataElementOptions(i),l.borderAlign!=="inner"&&(n=Math.max(n,l.borderWidth||0,l.hoverBorderWidth||0));return n}getMaxOffset(t){let n=0;for(let r=0,i=t.length;r<i;++r){const o=this.resolveDataElementOptions(r);n=Math.max(n,o.offset||0,o.hoverOffset||0)}return n}_getRingWeightOffset(t){let n=0;for(let r=0;r<t;++r)this.chart.isDatasetVisible(r)&&(n+=this._getRingWeight(r));return n}_getRingWeight(t){return Math.max(X(this.chart.data.datasets[t].weight,1),0)}_getVisibleDatasetWeightTotal(){return this._getRingWeightOffset(this.chart.data.datasets.length)||1}}z(Jr,"id","doughnut"),z(Jr,"defaults",{datasetElementType:!1,dataElementType:"arc",animation:{animateRotate:!0,animateScale:!1},animations:{numbers:{type:"number",properties:["circumference","endAngle","innerRadius","outerRadius","startAngle","x","y","offset","borderWidth","spacing"]}},cutout:"50%",rotation:0,circumference:360,radius:"100%",spacing:0,indexAxis:"r"}),z(Jr,"descriptors",{_scriptable:t=>t!=="spacing",_indexable:t=>t!=="spacing"&&!t.startsWith("borderDash")&&!t.startsWith("hoverBorderDash")}),z(Jr,"overrides",{aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const n=t.data;if(n.labels.length&&n.datasets.length){const{labels:{pointStyle:r,color:i}}=t.legend.options;return n.labels.map((o,s)=>{const l=t.getDatasetMeta(0).controller.getStyle(s);return{text:o,fillStyle:l.backgroundColor,strokeStyle:l.borderColor,fontColor:i,lineWidth:l.borderWidth,pointStyle:r,hidden:!t.getDataVisibility(s),index:s}})}return[]}},onClick(t,n,r){r.chart.toggleDataVisibility(n.index),r.chart.update()}}}});class ks extends on{initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(t){const n=this._cachedMeta,{dataset:r,data:i=[],_dataset:o}=n,s=this.chart._animationsDisabled;let{start:a,count:l}=Ew(n,i,s);this._drawStart=a,this._drawCount=l,Nw(n)&&(a=0,l=i.length),r._chart=this.chart,r._datasetIndex=this.index,r._decimated=!!o._decimated,r.points=i;const c=this.resolveDatasetElementOptions(t);this.options.showLine||(c.borderWidth=0),c.segment=this.options.segment,this.updateElement(r,void 0,{animated:!s,options:c},t),this.updateElements(i,a,l,t)}updateElements(t,n,r,i){const o=i==="reset",{iScale:s,vScale:a,_stacked:l,_dataset:c}=this._cachedMeta,{sharedOptions:u,includeOptions:d}=this._getSharedOptions(n,i),f=s.axis,g=a.axis,{spanGaps:v,segment:y}=this.options,p=co(v)?v:Number.POSITIVE_INFINITY,m=this.chart._animationsDisabled||o||i==="none",x=n+r,b=t.length;let w=n>0&&this.getParsed(n-1);for(let _=0;_<b;++_){const k=t[_],P=m?k:{};if(_<n||_>=x){P.skip=!0;continue}const M=this.getParsed(_),E=te(M[g]),A=P[f]=s.getPixelForValue(M[f],_),j=P[g]=o||E?a.getBasePixel():a.getPixelForValue(l?this.applyStack(a,M,l):M[g],_);P.skip=isNaN(A)||isNaN(j)||E,P.stop=_>0&&Math.abs(M[f]-w[f])>p,y&&(P.parsed=M,P.raw=c.data[_]),d&&(P.options=u||this.resolveDataElementOptions(_,k.active?"active":i)),m||this.updateElement(k,_,P,i),w=M}}getMaxOverflow(){const t=this._cachedMeta,n=t.dataset,r=n.options&&n.options.borderWidth||0,i=t.data||[];if(!i.length)return r;const o=i[0].size(this.resolveDataElementOptions(0)),s=i[i.length-1].size(this.resolveDataElementOptions(i.length-1));return Math.max(r,o,s)/2}draw(){const t=this._cachedMeta;t.dataset.updateControlPoints(this.chart.chartArea,t.iScale.axis),super.draw()}}z(ks,"id","line"),z(ks,"defaults",{datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1}),z(ks,"overrides",{scales:{_index_:{type:"category"},_value_:{type:"linear"}}});class Cs extends on{constructor(t,n){super(t,n),this.innerRadius=void 0,this.outerRadius=void 0}getLabelAndValue(t){const n=this._cachedMeta,r=this.chart,i=r.data.labels||[],o=Ta(n._parsed[t].r,r.options.locale);return{label:i[t]||"",value:o}}parseObjectData(t,n,r,i){return Iw.bind(this)(t,n,r,i)}update(t){const n=this._cachedMeta.data;this._updateRadius(),this.updateElements(n,0,n.length,t)}getMinMax(){const t=this._cachedMeta,n={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY};return t.data.forEach((r,i)=>{const o=this.getParsed(i).r;!isNaN(o)&&this.chart.getDataVisibility(i)&&(o<n.min&&(n.min=o),o>n.max&&(n.max=o))}),n}_updateRadius(){const t=this.chart,n=t.chartArea,r=t.options,i=Math.min(n.right-n.left,n.bottom-n.top),o=Math.max(i/2,0),s=Math.max(r.cutoutPercentage?o/100*r.cutoutPercentage:1,0),a=(o-s)/t.getVisibleDatasetCount();this.outerRadius=o-a*this.index,this.innerRadius=this.outerRadius-a}updateElements(t,n,r,i){const o=i==="reset",s=this.chart,l=s.options.animation,c=this._cachedMeta.rScale,u=c.xCenter,d=c.yCenter,f=c.getIndexAngle(0)-.5*ke;let g=f,v;const y=360/this.countVisibleElements();for(v=0;v<n;++v)g+=this._computeAngle(v,i,y);for(v=n;v<n+r;v++){const p=t[v];let m=g,x=g+this._computeAngle(v,i,y),b=s.getDataVisibility(v)?c.getDistanceFromCenterForValue(this.getParsed(v).r):0;g=x,o&&(l.animateScale&&(b=0),l.animateRotate&&(m=x=f));const w={x:u,y:d,innerRadius:0,outerRadius:b,startAngle:m,endAngle:x,options:this.resolveDataElementOptions(v,p.active?"active":i)};this.updateElement(p,v,w,i)}}countVisibleElements(){const t=this._cachedMeta;let n=0;return t.data.forEach((r,i)=>{!isNaN(this.getParsed(i).r)&&this.chart.getDataVisibility(i)&&n++}),n}_computeAngle(t,n,r){return this.chart.getDataVisibility(t)?nn(this.resolveDataElementOptions(t,n).angle||r):0}}z(Cs,"id","polarArea"),z(Cs,"defaults",{dataElementType:"arc",animation:{animateRotate:!0,animateScale:!0},animations:{numbers:{type:"number",properties:["x","y","startAngle","endAngle","innerRadius","outerRadius"]}},indexAxis:"r",startAngle:0}),z(Cs,"overrides",{aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const n=t.data;if(n.labels.length&&n.datasets.length){const{labels:{pointStyle:r,color:i}}=t.legend.options;return n.labels.map((o,s)=>{const l=t.getDatasetMeta(0).controller.getStyle(s);return{text:o,fillStyle:l.backgroundColor,strokeStyle:l.borderColor,fontColor:i,lineWidth:l.borderWidth,pointStyle:r,hidden:!t.getDataVisibility(s),index:s}})}return[]}},onClick(t,n,r){r.chart.toggleDataVisibility(n.index),r.chart.update()}}},scales:{r:{type:"radialLinear",angleLines:{display:!1},beginAtZero:!0,grid:{circular:!0},pointLabels:{display:!1},startAngle:0}}});class _h extends Jr{}z(_h,"id","pie"),z(_h,"defaults",{cutout:0,rotation:0,circumference:360,radius:"100%"});class Dl extends on{getLabelAndValue(t){const n=this._cachedMeta.vScale,r=this.getParsed(t);return{label:n.getLabels()[t],value:""+n.getLabelForValue(r[n.axis])}}parseObjectData(t,n,r,i){return Iw.bind(this)(t,n,r,i)}update(t){const n=this._cachedMeta,r=n.dataset,i=n.data||[],o=n.iScale.getLabels();if(r.points=i,t!=="resize"){const s=this.resolveDatasetElementOptions(t);this.options.showLine||(s.borderWidth=0);const a={_loop:!0,_fullLoop:o.length===i.length,options:s};this.updateElement(r,void 0,a,t)}this.updateElements(i,0,i.length,t)}updateElements(t,n,r,i){const o=this._cachedMeta.rScale,s=i==="reset";for(let a=n;a<n+r;a++){const l=t[a],c=this.resolveDataElementOptions(a,l.active?"active":i),u=o.getPointPositionForValue(a,this.getParsed(a).r),d=s?o.xCenter:u.x,f=s?o.yCenter:u.y,g={x:d,y:f,angle:u.angle,skip:isNaN(d)||isNaN(f),options:c};this.updateElement(l,a,g,i)}}}z(Dl,"id","radar"),z(Dl,"defaults",{datasetElementType:"line",dataElementType:"point",indexAxis:"r",showLine:!0,elements:{line:{fill:"start"}}}),z(Dl,"overrides",{aspectRatio:1,scales:{r:{type:"radialLinear"}}});class zl extends on{getLabelAndValue(t){const n=this._cachedMeta,r=this.chart.data.labels||[],{xScale:i,yScale:o}=n,s=this.getParsed(t),a=i.getLabelForValue(s.x),l=o.getLabelForValue(s.y);return{label:r[t]||"",value:"("+a+", "+l+")"}}update(t){const n=this._cachedMeta,{data:r=[]}=n,i=this.chart._animationsDisabled;let{start:o,count:s}=Ew(n,r,i);if(this._drawStart=o,this._drawCount=s,Nw(n)&&(o=0,s=r.length),this.options.showLine){this.datasetElementType||this.addElements();const{dataset:a,_dataset:l}=n;a._chart=this.chart,a._datasetIndex=this.index,a._decimated=!!l._decimated,a.points=r;const c=this.resolveDatasetElementOptions(t);c.segment=this.options.segment,this.updateElement(a,void 0,{animated:!i,options:c},t)}else this.datasetElementType&&(delete n.dataset,this.datasetElementType=!1);this.updateElements(r,o,s,t)}addElements(){const{showLine:t}=this.options;!this.datasetElementType&&t&&(this.datasetElementType=this.chart.registry.getElement("line")),super.addElements()}updateElements(t,n,r,i){const o=i==="reset",{iScale:s,vScale:a,_stacked:l,_dataset:c}=this._cachedMeta,u=this.resolveDataElementOptions(n,i),d=this.getSharedOptions(u),f=this.includeOptions(i,d),g=s.axis,v=a.axis,{spanGaps:y,segment:p}=this.options,m=co(y)?y:Number.POSITIVE_INFINITY,x=this.chart._animationsDisabled||o||i==="none";let b=n>0&&this.getParsed(n-1);for(let w=n;w<n+r;++w){const _=t[w],k=this.getParsed(w),P=x?_:{},M=te(k[v]),E=P[g]=s.getPixelForValue(k[g],w),A=P[v]=o||M?a.getBasePixel():a.getPixelForValue(l?this.applyStack(a,k,l):k[v],w);P.skip=isNaN(E)||isNaN(A)||M,P.stop=w>0&&Math.abs(k[g]-b[g])>m,p&&(P.parsed=k,P.raw=c.data[w]),f&&(P.options=d||this.resolveDataElementOptions(w,_.active?"active":i)),x||this.updateElement(_,w,P,i),b=k}this.updateSharedOptions(d,i,u)}getMaxOverflow(){const t=this._cachedMeta,n=t.data||[];if(!this.options.showLine){let a=0;for(let l=n.length-1;l>=0;--l)a=Math.max(a,n[l].size(this.resolveDataElementOptions(l))/2);return a>0&&a}const r=t.dataset,i=r.options&&r.options.borderWidth||0;if(!n.length)return i;const o=n[0].size(this.resolveDataElementOptions(0)),s=n[n.length-1].size(this.resolveDataElementOptions(n.length-1));return Math.max(i,o,s)/2}}z(zl,"id","scatter"),z(zl,"defaults",{datasetElementType:!1,dataElementType:"point",showLine:!1,fill:!1}),z(zl,"overrides",{interaction:{mode:"point"},scales:{x:{type:"linear"},y:{type:"linear"}}});var w8=Object.freeze({__proto__:null,BarController:Rl,BubbleController:Ll,DoughnutController:Jr,LineController:ks,PieController:_h,PolarAreaController:Cs,RadarController:Dl,ScatterController:zl});function Br(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}class Gg{constructor(t){z(this,"options");this.options=t||{}}static override(t){Object.assign(Gg.prototype,t)}init(){}formats(){return Br()}parse(){return Br()}format(){return Br()}add(){return Br()}diff(){return Br()}startOf(){return Br()}endOf(){return Br()}}var _8={_date:Gg};function S8(e,t,n,r){const{controller:i,data:o,_sorted:s}=e,a=i._cachedMeta.iScale;if(a&&t===a.axis&&t!=="r"&&s&&o.length){const l=a._reversePixels?YT:In;if(r){if(i._sharedOptions){const c=o[0],u=typeof c.getRange=="function"&&c.getRange(t);if(u){const d=l(o,t,n-u),f=l(o,t,n+u);return{lo:d.lo,hi:f.hi}}}}else return l(o,t,n)}return{lo:0,hi:o.length-1}}function Aa(e,t,n,r,i){const o=e.getSortedVisibleDatasetMetas(),s=n[t];for(let a=0,l=o.length;a<l;++a){const{index:c,data:u}=o[a],{lo:d,hi:f}=S8(o[a],t,s,i);for(let g=d;g<=f;++g){const v=u[g];v.skip||r(v,c,g)}}}function k8(e){const t=e.indexOf("x")!==-1,n=e.indexOf("y")!==-1;return function(r,i){const o=t?Math.abs(r.x-i.x):0,s=n?Math.abs(r.y-i.y):0;return Math.sqrt(Math.pow(o,2)+Math.pow(s,2))}}function Ud(e,t,n,r,i){const o=[];return!i&&!e.isPointInArea(t)||Aa(e,n,t,function(a,l,c){!i&&!jn(a,e.chartArea,0)||a.inRange(t.x,t.y,r)&&o.push({element:a,datasetIndex:l,index:c})},!0),o}function C8(e,t,n,r){let i=[];function o(s,a,l){const{startAngle:c,endAngle:u}=s.getProps(["startAngle","endAngle"],r),{angle:d}=kw(s,{x:t.x,y:t.y});ea(d,c,u)&&i.push({element:s,datasetIndex:a,index:l})}return Aa(e,n,t,o),i}function P8(e,t,n,r,i,o){let s=[];const a=k8(n);let l=Number.POSITIVE_INFINITY;function c(u,d,f){const g=u.inRange(t.x,t.y,i);if(r&&!g)return;const v=u.getCenterPoint(i);if(!(!!o||e.isPointInArea(v))&&!g)return;const p=a(t,v);p<l?(s=[{element:u,datasetIndex:d,index:f}],l=p):p===l&&s.push({element:u,datasetIndex:d,index:f})}return Aa(e,n,t,c),s}function Yd(e,t,n,r,i,o){return!o&&!e.isPointInArea(t)?[]:n==="r"&&!r?C8(e,t,n,i):P8(e,t,n,r,i,o)}function mv(e,t,n,r,i){const o=[],s=n==="x"?"inXRange":"inYRange";let a=!1;return Aa(e,n,t,(l,c,u)=>{l[s](t[n],i)&&(o.push({element:l,datasetIndex:c,index:u}),a=a||l.inRange(t.x,t.y,i))}),r&&!a?[]:o}var O8={evaluateInteractionItems:Aa,modes:{index(e,t,n,r){const i=Yr(t,e),o=n.axis||"x",s=n.includeInvisible||!1,a=n.intersect?Ud(e,i,o,r,s):Yd(e,i,o,!1,r,s),l=[];return a.length?(e.getSortedVisibleDatasetMetas().forEach(c=>{const u=a[0].index,d=c.data[u];d&&!d.skip&&l.push({element:d,datasetIndex:c.index,index:u})}),l):[]},dataset(e,t,n,r){const i=Yr(t,e),o=n.axis||"xy",s=n.includeInvisible||!1;let a=n.intersect?Ud(e,i,o,r,s):Yd(e,i,o,!1,r,s);if(a.length>0){const l=a[0].datasetIndex,c=e.getDatasetMeta(l).data;a=[];for(let u=0;u<c.length;++u)a.push({element:c[u],datasetIndex:l,index:u})}return a},point(e,t,n,r){const i=Yr(t,e),o=n.axis||"xy",s=n.includeInvisible||!1;return Ud(e,i,o,r,s)},nearest(e,t,n,r){const i=Yr(t,e),o=n.axis||"xy",s=n.includeInvisible||!1;return Yd(e,i,o,n.intersect,r,s)},x(e,t,n,r){const i=Yr(t,e);return mv(e,i,"x",n.intersect,r)},y(e,t,n,r){const i=Yr(t,e);return mv(e,i,"y",n.intersect,r)}}};const Kw=["left","top","right","bottom"];function Ho(e,t){return e.filter(n=>n.pos===t)}function vv(e,t){return e.filter(n=>Kw.indexOf(n.pos)===-1&&n.box.axis===t)}function Uo(e,t){return e.sort((n,r)=>{const i=t?r:n,o=t?n:r;return i.weight===o.weight?i.index-o.index:i.weight-o.weight})}function M8(e){const t=[];let n,r,i,o,s,a;for(n=0,r=(e||[]).length;n<r;++n)i=e[n],{position:o,options:{stack:s,stackWeight:a=1}}=i,t.push({index:n,box:i,pos:o,horizontal:i.isHorizontal(),weight:i.weight,stack:s&&o+s,stackWeight:a});return t}function E8(e){const t={};for(const n of e){const{stack:r,pos:i,stackWeight:o}=n;if(!r||!Kw.includes(i))continue;const s=t[r]||(t[r]={count:0,placed:0,weight:0,size:0});s.count++,s.weight+=o}return t}function N8(e,t){const n=E8(e),{vBoxMaxWidth:r,hBoxMaxHeight:i}=t;let o,s,a;for(o=0,s=e.length;o<s;++o){a=e[o];const{fullSize:l}=a.box,c=n[a.stack],u=c&&a.stackWeight/c.weight;a.horizontal?(a.width=u?u*r:l&&t.availableWidth,a.height=i):(a.width=r,a.height=u?u*i:l&&t.availableHeight)}return n}function T8(e){const t=M8(e),n=Uo(t.filter(c=>c.box.fullSize),!0),r=Uo(Ho(t,"left"),!0),i=Uo(Ho(t,"right")),o=Uo(Ho(t,"top"),!0),s=Uo(Ho(t,"bottom")),a=vv(t,"x"),l=vv(t,"y");return{fullSize:n,leftAndTop:r.concat(o),rightAndBottom:i.concat(l).concat(s).concat(a),chartArea:Ho(t,"chartArea"),vertical:r.concat(i).concat(l),horizontal:o.concat(s).concat(a)}}function yv(e,t,n,r){return Math.max(e[n],t[n])+Math.max(e[r],t[r])}function Gw(e,t){e.top=Math.max(e.top,t.top),e.left=Math.max(e.left,t.left),e.bottom=Math.max(e.bottom,t.bottom),e.right=Math.max(e.right,t.right)}function A8(e,t,n,r){const{pos:i,box:o}=n,s=e.maxPadding;if(!J(i)){n.size&&(e[i]-=n.size);const d=r[n.stack]||{size:0,count:1};d.size=Math.max(d.size,n.horizontal?o.height:o.width),n.size=d.size/d.count,e[i]+=n.size}o.getPadding&&Gw(s,o.getPadding());const a=Math.max(0,t.outerWidth-yv(s,e,"left","right")),l=Math.max(0,t.outerHeight-yv(s,e,"top","bottom")),c=a!==e.w,u=l!==e.h;return e.w=a,e.h=l,n.horizontal?{same:c,other:u}:{same:u,other:c}}function $8(e){const t=e.maxPadding;function n(r){const i=Math.max(t[r]-e[r],0);return e[r]+=i,i}e.y+=n("top"),e.x+=n("left"),n("right"),n("bottom")}function R8(e,t){const n=t.maxPadding;function r(i){const o={left:0,top:0,right:0,bottom:0};return i.forEach(s=>{o[s]=Math.max(t[s],n[s])}),o}return r(e?["left","right"]:["top","bottom"])}function ns(e,t,n,r){const i=[];let o,s,a,l,c,u;for(o=0,s=e.length,c=0;o<s;++o){a=e[o],l=a.box,l.update(a.width||t.w,a.height||t.h,R8(a.horizontal,t));const{same:d,other:f}=A8(t,n,a,r);c|=d&&i.length,u=u||f,l.fullSize||i.push(a)}return c&&ns(i,t,n,r)||u}function al(e,t,n,r,i){e.top=n,e.left=t,e.right=t+r,e.bottom=n+i,e.width=r,e.height=i}function xv(e,t,n,r){const i=n.padding;let{x:o,y:s}=t;for(const a of e){const l=a.box,c=r[a.stack]||{count:1,placed:0,weight:1},u=a.stackWeight/c.weight||1;if(a.horizontal){const d=t.w*u,f=c.size||l.height;Js(c.start)&&(s=c.start),l.fullSize?al(l,i.left,s,n.outerWidth-i.right-i.left,f):al(l,t.left+c.placed,s,d,f),c.start=s,c.placed+=d,s=l.bottom}else{const d=t.h*u,f=c.size||l.width;Js(c.start)&&(o=c.start),l.fullSize?al(l,o,i.top,f,n.outerHeight-i.bottom-i.top):al(l,o,t.top+c.placed,f,d),c.start=o,c.placed+=d,o=l.right}}t.x=o,t.y=s}var dt={addBox(e,t){e.boxes||(e.boxes=[]),t.fullSize=t.fullSize||!1,t.position=t.position||"top",t.weight=t.weight||0,t._layers=t._layers||function(){return[{z:0,draw(n){t.draw(n)}}]},e.boxes.push(t)},removeBox(e,t){const n=e.boxes?e.boxes.indexOf(t):-1;n!==-1&&e.boxes.splice(n,1)},configure(e,t,n){t.fullSize=n.fullSize,t.position=n.position,t.weight=n.weight},update(e,t,n,r){if(!e)return;const i=gt(e.options.layout.padding),o=Math.max(t-i.width,0),s=Math.max(n-i.height,0),a=T8(e.boxes),l=a.vertical,c=a.horizontal;he(e.boxes,y=>{typeof y.beforeLayout=="function"&&y.beforeLayout()});const u=l.reduce((y,p)=>p.box.options&&p.box.options.display===!1?y:y+1,0)||1,d=Object.freeze({outerWidth:t,outerHeight:n,padding:i,availableWidth:o,availableHeight:s,vBoxMaxWidth:o/2/u,hBoxMaxHeight:s/2}),f=Object.assign({},i);Gw(f,gt(r));const g=Object.assign({maxPadding:f,w:o,h:s,x:i.left,y:i.top},i),v=N8(l.concat(c),d);ns(a.fullSize,g,d,v),ns(l,g,d,v),ns(c,g,d,v)&&ns(l,g,d,v),$8(g),xv(a.leftAndTop,g,d,v),g.x+=g.w,g.y+=g.h,xv(a.rightAndBottom,g,d,v),e.chartArea={left:g.left,top:g.top,right:g.left+g.w,bottom:g.top+g.h,height:g.h,width:g.w},he(a.chartArea,y=>{const p=y.box;Object.assign(p,e.chartArea),p.update(g.w,g.h,{left:0,top:0,right:0,bottom:0})})}};class qw{acquireContext(t,n){}releaseContext(t){return!1}addEventListener(t,n,r){}removeEventListener(t,n,r){}getDevicePixelRatio(){return 1}getMaximumSize(t,n,r,i){return n=Math.max(0,n||t.width),r=r||t.height,{width:n,height:Math.max(0,i?Math.floor(n/i):r)}}isAttached(t){return!0}updateConfig(t){}}class L8 extends qw{acquireContext(t){return t&&t.getContext&&t.getContext("2d")||null}updateConfig(t){t.options.animation=!1}}const Il="$chartjs",D8={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},bv=e=>e===null||e==="";function z8(e,t){const n=e.style,r=e.getAttribute("height"),i=e.getAttribute("width");if(e[Il]={initial:{height:r,width:i,style:{display:n.display,height:n.height,width:n.width}}},n.display=n.display||"block",n.boxSizing=n.boxSizing||"border-box",bv(i)){const o=nv(e,"width");o!==void 0&&(e.width=o)}if(bv(r))if(e.style.height==="")e.height=e.width/(t||2);else{const o=nv(e,"height");o!==void 0&&(e.height=o)}return e}const Qw=jA?{passive:!0}:!1;function I8(e,t,n){e&&e.addEventListener(t,n,Qw)}function j8(e,t,n){e&&e.canvas&&e.canvas.removeEventListener(t,n,Qw)}function F8(e,t){const n=D8[e.type]||e.type,{x:r,y:i}=Yr(e,t);return{type:n,chart:t,native:e,x:r!==void 0?r:null,y:i!==void 0?i:null}}function $c(e,t){for(const n of e)if(n===t||n.contains(t))return!0}function B8(e,t,n){const r=e.canvas,i=new MutationObserver(o=>{let s=!1;for(const a of o)s=s||$c(a.addedNodes,r),s=s&&!$c(a.removedNodes,r);s&&n()});return i.observe(document,{childList:!0,subtree:!0}),i}function W8(e,t,n){const r=e.canvas,i=new MutationObserver(o=>{let s=!1;for(const a of o)s=s||$c(a.removedNodes,r),s=s&&!$c(a.addedNodes,r);s&&n()});return i.observe(document,{childList:!0,subtree:!0}),i}const na=new Map;let wv=0;function Zw(){const e=window.devicePixelRatio;e!==wv&&(wv=e,na.forEach((t,n)=>{n.currentDevicePixelRatio!==e&&t()}))}function V8(e,t){na.size||window.addEventListener("resize",Zw),na.set(e,t)}function H8(e){na.delete(e),na.size||window.removeEventListener("resize",Zw)}function U8(e,t,n){const r=e.canvas,i=r&&Kg(r);if(!i)return;const o=Mw((a,l)=>{const c=i.clientWidth;n(a,l),c<i.clientWidth&&n()},window),s=new ResizeObserver(a=>{const l=a[0],c=l.contentRect.width,u=l.contentRect.height;c===0&&u===0||o(c,u)});return s.observe(i),V8(e,o),s}function Xd(e,t,n){n&&n.disconnect(),t==="resize"&&H8(e)}function Y8(e,t,n){const r=e.canvas,i=Mw(o=>{e.ctx!==null&&n(F8(o,e))},e);return I8(r,t,i),i}class X8 extends qw{acquireContext(t,n){const r=t&&t.getContext&&t.getContext("2d");return r&&r.canvas===t?(z8(t,n),r):null}releaseContext(t){const n=t.canvas;if(!n[Il])return!1;const r=n[Il].initial;["height","width"].forEach(o=>{const s=r[o];te(s)?n.removeAttribute(o):n.setAttribute(o,s)});const i=r.style||{};return Object.keys(i).forEach(o=>{n.style[o]=i[o]}),n.width=n.width,delete n[Il],!0}addEventListener(t,n,r){this.removeEventListener(t,n);const i=t.$proxies||(t.$proxies={}),s={attach:B8,detach:W8,resize:U8}[n]||Y8;i[n]=s(t,n,r)}removeEventListener(t,n){const r=t.$proxies||(t.$proxies={}),i=r[n];if(!i)return;({attach:Xd,detach:Xd,resize:Xd}[n]||j8)(t,n,i),r[n]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(t,n,r,i){return IA(t,n,r,i)}isAttached(t){const n=t&&Kg(t);return!!(n&&n.isConnected)}}function K8(e){return!Xg()||typeof OffscreenCanvas!="undefined"&&e instanceof OffscreenCanvas?L8:X8}class sn{constructor(){z(this,"x");z(this,"y");z(this,"active",!1);z(this,"options");z(this,"$animations")}tooltipPosition(t){const{x:n,y:r}=this.getProps(["x","y"],t);return{x:n,y:r}}hasValue(){return co(this.x)&&co(this.y)}getProps(t,n){const r=this.$animations;if(!n||!r)return this;const i={};return t.forEach(o=>{i[o]=r[o]&&r[o].active()?r[o]._to:this[o]}),i}}z(sn,"defaults",{}),z(sn,"defaultRoutes");function G8(e,t){const n=e.options.ticks,r=q8(e),i=Math.min(n.maxTicksLimit||r,r),o=n.major.enabled?Z8(t):[],s=o.length,a=o[0],l=o[s-1],c=[];if(s>i)return J8(t,c,o,s/i),c;const u=Q8(o,t,i);if(s>0){let d,f;const g=s>1?Math.round((l-a)/(s-1)):null;for(ll(t,c,u,te(g)?0:a-g,a),d=0,f=s-1;d<f;d++)ll(t,c,u,o[d],o[d+1]);return ll(t,c,u,l,te(g)?t.length:l+g),c}return ll(t,c,u),c}function q8(e){const t=e.options.offset,n=e._tickSize(),r=e._length/n+(t?0:1),i=e._maxLength/n;return Math.floor(Math.min(r,i))}function Q8(e,t,n){const r=e$(e),i=t.length/n;if(!r)return Math.max(i,1);const o=WT(r);for(let s=0,a=o.length-1;s<a;s++){const l=o[s];if(l>i)return l}return Math.max(i,1)}function Z8(e){const t=[];let n,r;for(n=0,r=e.length;n<r;n++)e[n].major&&t.push(n);return t}function J8(e,t,n,r){let i=0,o=n[0],s;for(r=Math.ceil(r),s=0;s<e.length;s++)s===o&&(t.push(e[s]),i++,o=n[i*r])}function ll(e,t,n,r,i){const o=X(r,0),s=Math.min(X(i,e.length),e.length);let a=0,l,c,u;for(n=Math.ceil(n),i&&(l=i-r,n=l/Math.floor(l/n)),u=o;u<0;)a++,u=Math.round(o+a*n);for(c=Math.max(o,0);c<s;c++)c===u&&(t.push(e[c]),a++,u=Math.round(o+a*n))}function e$(e){const t=e.length;let n,r;if(t<2)return!1;for(r=e[0],n=1;n<t;++n)if(e[n]-e[n-1]!==r)return!1;return r}const t$=e=>e==="left"?"right":e==="right"?"left":e,_v=(e,t,n)=>t==="top"||t==="left"?e[t]+n:e[t]-n,Sv=(e,t)=>Math.min(t||e,e);function kv(e,t){const n=[],r=e.length/t,i=e.length;let o=0;for(;o<i;o+=r)n.push(e[Math.floor(o)]);return n}function n$(e,t,n){const r=e.ticks.length,i=Math.min(t,r-1),o=e._startPixel,s=e._endPixel,a=1e-6;let l=e.getPixelForTick(i),c;if(!(n&&(r===1?c=Math.max(l-o,s-l):t===0?c=(e.getPixelForTick(1)-l)/2:c=(l-e.getPixelForTick(i-1))/2,l+=i<t?c:-c,l<o-a||l>s+a)))return l}function r$(e,t){he(e,n=>{const r=n.gc,i=r.length/2;let o;if(i>t){for(o=0;o<i;++o)delete n.data[r[o]];r.splice(0,i)}})}function Yo(e){return e.drawTicks?e.tickLength:0}function Cv(e,t){if(!e.display)return 0;const n=Ue(e.font,t),r=gt(e.padding);return(we(e.text)?e.text.length:1)*n.lineHeight+r.height}function i$(e,t){return Ir(e,{scale:t,type:"scale"})}function o$(e,t,n){return Ir(e,{tick:n,index:t,type:"tick"})}function s$(e,t,n){let r=Bg(e);return(n&&t!=="right"||!n&&t==="right")&&(r=t$(r)),r}function a$(e,t,n,r){const{top:i,left:o,bottom:s,right:a,chart:l}=e,{chartArea:c,scales:u}=l;let d=0,f,g,v;const y=s-i,p=a-o;if(e.isHorizontal()){if(g=at(r,o,a),J(n)){const m=Object.keys(n)[0],x=n[m];v=u[m].getPixelForValue(x)+y-t}else n==="center"?v=(c.bottom+c.top)/2+y-t:v=_v(e,n,t);f=a-o}else{if(J(n)){const m=Object.keys(n)[0],x=n[m];g=u[m].getPixelForValue(x)-p+t}else n==="center"?g=(c.left+c.right)/2-p+t:g=_v(e,n,t);v=at(r,s,i),d=n==="left"?-ze:ze}return{titleX:g,titleY:v,maxWidth:f,rotation:d}}class yi extends sn{constructor(t){super(),this.id=t.id,this.type=t.type,this.options=void 0,this.ctx=t.ctx,this.chart=t.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(t){this.options=t.setContext(this.getContext()),this.axis=t.axis,this._userMin=this.parse(t.min),this._userMax=this.parse(t.max),this._suggestedMin=this.parse(t.suggestedMin),this._suggestedMax=this.parse(t.suggestedMax)}parse(t,n){return t}getUserBounds(){let{_userMin:t,_userMax:n,_suggestedMin:r,_suggestedMax:i}=this;return t=Et(t,Number.POSITIVE_INFINITY),n=Et(n,Number.NEGATIVE_INFINITY),r=Et(r,Number.POSITIVE_INFINITY),i=Et(i,Number.NEGATIVE_INFINITY),{min:Et(t,r),max:Et(n,i),minDefined:Re(t),maxDefined:Re(n)}}getMinMax(t){let{min:n,max:r,minDefined:i,maxDefined:o}=this.getUserBounds(),s;if(i&&o)return{min:n,max:r};const a=this.getMatchingVisibleMetas();for(let l=0,c=a.length;l<c;++l)s=a[l].controller.getMinMax(this,t),i||(n=Math.min(n,s.min)),o||(r=Math.max(r,s.max));return n=o&&n>r?r:n,r=i&&n>r?n:r,{min:Et(n,Et(r,n)),max:Et(r,Et(n,r))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){const t=this.chart.data;return this.options.labels||(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels||[]}getLabelItems(t=this.chart.chartArea){return this._labelItems||(this._labelItems=this._computeLabelItems(t))}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){xe(this.options.beforeUpdate,[this])}update(t,n,r){const{beginAtZero:i,grace:o,ticks:s}=this.options,a=s.sampleSize;this.beforeUpdate(),this.maxWidth=t,this.maxHeight=n,this._margins=r=Object.assign({left:0,right:0,top:0,bottom:0},r),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+r.left+r.right:this.height+r.top+r.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=mA(this,o,i),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();const l=a<this.ticks.length;this._convertTicksToLabels(l?kv(this.ticks,a):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),s.display&&(s.autoSkip||s.source==="auto")&&(this.ticks=G8(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),l&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let t=this.options.reverse,n,r;this.isHorizontal()?(n=this.left,r=this.right):(n=this.top,r=this.bottom,t=!t),this._startPixel=n,this._endPixel=r,this._reversePixels=t,this._length=r-n,this._alignToPixels=this.options.alignToPixels}afterUpdate(){xe(this.options.afterUpdate,[this])}beforeSetDimensions(){xe(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){xe(this.options.afterSetDimensions,[this])}_callHooks(t){this.chart.notifyPlugins(t,this.getContext()),xe(this.options[t],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){xe(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(t){const n=this.options.ticks;let r,i,o;for(r=0,i=t.length;r<i;r++)o=t[r],o.label=xe(n.callback,[o.value,r,t],this)}afterTickToLabelConversion(){xe(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){xe(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){const t=this.options,n=t.ticks,r=Sv(this.ticks.length,t.ticks.maxTicksLimit),i=n.minRotation||0,o=n.maxRotation;let s=i,a,l,c;if(!this._isVisible()||!n.display||i>=o||r<=1||!this.isHorizontal()){this.labelRotation=i;return}const u=this._getLabelSizes(),d=u.widest.width,f=u.highest.height,g=Xe(this.chart.width-d,0,this.maxWidth);a=t.offset?this.maxWidth/r:g/(r-1),d+6>a&&(a=g/(r-(t.offset?.5:1)),l=this.maxHeight-Yo(t.grid)-n.padding-Cv(t.title,this.chart.options.font),c=Math.sqrt(d*d+f*f),s=jg(Math.min(Math.asin(Xe((u.highest.height+6)/a,-1,1)),Math.asin(Xe(l/c,-1,1))-Math.asin(Xe(f/c,-1,1)))),s=Math.max(i,Math.min(o,s))),this.labelRotation=s}afterCalculateLabelRotation(){xe(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){xe(this.options.beforeFit,[this])}fit(){const t={width:0,height:0},{chart:n,options:{ticks:r,title:i,grid:o}}=this,s=this._isVisible(),a=this.isHorizontal();if(s){const l=Cv(i,n.options.font);if(a?(t.width=this.maxWidth,t.height=Yo(o)+l):(t.height=this.maxHeight,t.width=Yo(o)+l),r.display&&this.ticks.length){const{first:c,last:u,widest:d,highest:f}=this._getLabelSizes(),g=r.padding*2,v=nn(this.labelRotation),y=Math.cos(v),p=Math.sin(v);if(a){const m=r.mirror?0:p*d.width+y*f.height;t.height=Math.min(this.maxHeight,t.height+m+g)}else{const m=r.mirror?0:y*d.width+p*f.height;t.width=Math.min(this.maxWidth,t.width+m+g)}this._calculatePadding(c,u,p,y)}}this._handleMargins(),a?(this.width=this._length=n.width-this._margins.left-this._margins.right,this.height=t.height):(this.width=t.width,this.height=this._length=n.height-this._margins.top-this._margins.bottom)}_calculatePadding(t,n,r,i){const{ticks:{align:o,padding:s},position:a}=this.options,l=this.labelRotation!==0,c=a!=="top"&&this.axis==="x";if(this.isHorizontal()){const u=this.getPixelForTick(0)-this.left,d=this.right-this.getPixelForTick(this.ticks.length-1);let f=0,g=0;l?c?(f=i*t.width,g=r*n.height):(f=r*t.height,g=i*n.width):o==="start"?g=n.width:o==="end"?f=t.width:o!=="inner"&&(f=t.width/2,g=n.width/2),this.paddingLeft=Math.max((f-u+s)*this.width/(this.width-u),0),this.paddingRight=Math.max((g-d+s)*this.width/(this.width-d),0)}else{let u=n.height/2,d=t.height/2;o==="start"?(u=0,d=t.height):o==="end"&&(u=n.height,d=0),this.paddingTop=u+s,this.paddingBottom=d+s}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){xe(this.options.afterFit,[this])}isHorizontal(){const{axis:t,position:n}=this.options;return n==="top"||n==="bottom"||t==="x"}isFullSize(){return this.options.fullSize}_convertTicksToLabels(t){this.beforeTickToLabelConversion(),this.generateTickLabels(t);let n,r;for(n=0,r=t.length;n<r;n++)te(t[n].label)&&(t.splice(n,1),r--,n--);this.afterTickToLabelConversion()}_getLabelSizes(){let t=this._labelSizes;if(!t){const n=this.options.ticks.sampleSize;let r=this.ticks;n<r.length&&(r=kv(r,n)),this._labelSizes=t=this._computeLabelSizes(r,r.length,this.options.ticks.maxTicksLimit)}return t}_computeLabelSizes(t,n,r){const{ctx:i,_longestTextCache:o}=this,s=[],a=[],l=Math.floor(n/Sv(n,r));let c=0,u=0,d,f,g,v,y,p,m,x,b,w,_;for(d=0;d<n;d+=l){if(v=t[d].label,y=this._resolveTickFontOptions(d),i.font=p=y.string,m=o[p]=o[p]||{data:{},gc:[]},x=y.lineHeight,b=w=0,!te(v)&&!we(v))b=Tc(i,m.data,m.gc,b,v),w=x;else if(we(v))for(f=0,g=v.length;f<g;++f)_=v[f],!te(_)&&!we(_)&&(b=Tc(i,m.data,m.gc,b,_),w+=x);s.push(b),a.push(w),c=Math.max(b,c),u=Math.max(w,u)}r$(o,n);const k=s.indexOf(c),P=a.indexOf(u),M=E=>({width:s[E]||0,height:a[E]||0});return{first:M(0),last:M(n-1),widest:M(k),highest:M(P),widths:s,heights:a}}getLabelForValue(t){return t}getPixelForValue(t,n){return NaN}getValueForPixel(t){}getPixelForTick(t){const n=this.ticks;return t<0||t>n.length-1?null:this.getPixelForValue(n[t].value)}getPixelForDecimal(t){this._reversePixels&&(t=1-t);const n=this._startPixel+t*this._length;return UT(this._alignToPixels?Fr(this.chart,n,0):n)}getDecimalForPixel(t){const n=(t-this._startPixel)/this._length;return this._reversePixels?1-n:n}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){const{min:t,max:n}=this;return t<0&&n<0?n:t>0&&n>0?t:0}getContext(t){const n=this.ticks||[];if(t>=0&&t<n.length){const r=n[t];return r.$context||(r.$context=o$(this.getContext(),t,r))}return this.$context||(this.$context=i$(this.chart.getContext(),this))}_tickSize(){const t=this.options.ticks,n=nn(this.labelRotation),r=Math.abs(Math.cos(n)),i=Math.abs(Math.sin(n)),o=this._getLabelSizes(),s=t.autoSkipPadding||0,a=o?o.widest.width+s:0,l=o?o.highest.height+s:0;return this.isHorizontal()?l*r>a*i?a/r:l/i:l*i<a*r?l/r:a/i}_isVisible(){const t=this.options.display;return t!=="auto"?!!t:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(t){const n=this.axis,r=this.chart,i=this.options,{grid:o,position:s,border:a}=i,l=o.offset,c=this.isHorizontal(),d=this.ticks.length+(l?1:0),f=Yo(o),g=[],v=a.setContext(this.getContext()),y=v.display?v.width:0,p=y/2,m=function(K){return Fr(r,K,y)};let x,b,w,_,k,P,M,E,A,j,I,W;if(s==="top")x=m(this.bottom),P=this.bottom-f,E=x-p,j=m(t.top)+p,W=t.bottom;else if(s==="bottom")x=m(this.top),j=t.top,W=m(t.bottom)-p,P=x+p,E=this.top+f;else if(s==="left")x=m(this.right),k=this.right-f,M=x-p,A=m(t.left)+p,I=t.right;else if(s==="right")x=m(this.left),A=t.left,I=m(t.right)-p,k=x+p,M=this.left+f;else if(n==="x"){if(s==="center")x=m((t.top+t.bottom)/2+.5);else if(J(s)){const K=Object.keys(s)[0],q=s[K];x=m(this.chart.scales[K].getPixelForValue(q))}j=t.top,W=t.bottom,P=x+p,E=P+f}else if(n==="y"){if(s==="center")x=m((t.left+t.right)/2);else if(J(s)){const K=Object.keys(s)[0],q=s[K];x=m(this.chart.scales[K].getPixelForValue(q))}k=x-p,M=k-f,A=t.left,I=t.right}const Z=X(i.ticks.maxTicksLimit,d),V=Math.max(1,Math.ceil(d/Z));for(b=0;b<d;b+=V){const K=this.getContext(b),q=o.setContext(K),ie=a.setContext(K),ve=q.lineWidth,vt=q.color,L=ie.dash||[],N=ie.dashOffset,T=q.tickWidth,$=q.tickColor,F=q.tickBorderDash||[],O=q.tickBorderDashOffset;w=n$(this,b,l),w!==void 0&&(_=Fr(r,w,ve),c?k=M=A=I=_:P=E=j=W=_,g.push({tx1:k,ty1:P,tx2:M,ty2:E,x1:A,y1:j,x2:I,y2:W,width:ve,color:vt,borderDash:L,borderDashOffset:N,tickWidth:T,tickColor:$,tickBorderDash:F,tickBorderDashOffset:O}))}return this._ticksLength=d,this._borderValue=x,g}_computeLabelItems(t){const n=this.axis,r=this.options,{position:i,ticks:o}=r,s=this.isHorizontal(),a=this.ticks,{align:l,crossAlign:c,padding:u,mirror:d}=o,f=Yo(r.grid),g=f+u,v=d?-u:g,y=-nn(this.labelRotation),p=[];let m,x,b,w,_,k,P,M,E,A,j,I,W="middle";if(i==="top")k=this.bottom-v,P=this._getXAxisLabelAlignment();else if(i==="bottom")k=this.top+v,P=this._getXAxisLabelAlignment();else if(i==="left"){const V=this._getYAxisLabelAlignment(f);P=V.textAlign,_=V.x}else if(i==="right"){const V=this._getYAxisLabelAlignment(f);P=V.textAlign,_=V.x}else if(n==="x"){if(i==="center")k=(t.top+t.bottom)/2+g;else if(J(i)){const V=Object.keys(i)[0],K=i[V];k=this.chart.scales[V].getPixelForValue(K)+g}P=this._getXAxisLabelAlignment()}else if(n==="y"){if(i==="center")_=(t.left+t.right)/2-g;else if(J(i)){const V=Object.keys(i)[0],K=i[V];_=this.chart.scales[V].getPixelForValue(K)}P=this._getYAxisLabelAlignment(f).textAlign}n==="y"&&(l==="start"?W="top":l==="end"&&(W="bottom"));const Z=this._getLabelSizes();for(m=0,x=a.length;m<x;++m){b=a[m],w=b.label;const V=o.setContext(this.getContext(m));M=this.getPixelForTick(m)+o.labelOffset,E=this._resolveTickFontOptions(m),A=E.lineHeight,j=we(w)?w.length:1;const K=j/2,q=V.color,ie=V.textStrokeColor,ve=V.textStrokeWidth;let vt=P;s?(_=M,P==="inner"&&(m===x-1?vt=this.options.reverse?"left":"right":m===0?vt=this.options.reverse?"right":"left":vt="center"),i==="top"?c==="near"||y!==0?I=-j*A+A/2:c==="center"?I=-Z.highest.height/2-K*A+A:I=-Z.highest.height+A/2:c==="near"||y!==0?I=A/2:c==="center"?I=Z.highest.height/2-K*A:I=Z.highest.height-j*A,d&&(I*=-1),y!==0&&!V.showLabelBackdrop&&(_+=A/2*Math.sin(y))):(k=M,I=(1-j)*A/2);let L;if(V.showLabelBackdrop){const N=gt(V.backdropPadding),T=Z.heights[m],$=Z.widths[m];let F=I-N.top,O=0-N.left;switch(W){case"middle":F-=T/2;break;case"bottom":F-=T;break}switch(P){case"center":O-=$/2;break;case"right":O-=$;break;case"inner":m===x-1?O-=$:m>0&&(O-=$/2);break}L={left:O,top:F,width:$+N.width,height:T+N.height,color:V.backdropColor}}p.push({label:w,font:E,textOffset:I,options:{rotation:y,color:q,strokeColor:ie,strokeWidth:ve,textAlign:vt,textBaseline:W,translation:[_,k],backdrop:L}})}return p}_getXAxisLabelAlignment(){const{position:t,ticks:n}=this.options;if(-nn(this.labelRotation))return t==="top"?"left":"right";let i="center";return n.align==="start"?i="left":n.align==="end"?i="right":n.align==="inner"&&(i="inner"),i}_getYAxisLabelAlignment(t){const{position:n,ticks:{crossAlign:r,mirror:i,padding:o}}=this.options,s=this._getLabelSizes(),a=t+o,l=s.widest.width;let c,u;return n==="left"?i?(u=this.right+o,r==="near"?c="left":r==="center"?(c="center",u+=l/2):(c="right",u+=l)):(u=this.right-a,r==="near"?c="right":r==="center"?(c="center",u-=l/2):(c="left",u=this.left)):n==="right"?i?(u=this.left+o,r==="near"?c="right":r==="center"?(c="center",u-=l/2):(c="left",u-=l)):(u=this.left+a,r==="near"?c="left":r==="center"?(c="center",u+=l/2):(c="right",u=this.right)):c="right",{textAlign:c,x:u}}_computeLabelArea(){if(this.options.ticks.mirror)return;const t=this.chart,n=this.options.position;if(n==="left"||n==="right")return{top:0,left:this.left,bottom:t.height,right:this.right};if(n==="top"||n==="bottom")return{top:this.top,left:0,bottom:this.bottom,right:t.width}}drawBackground(){const{ctx:t,options:{backgroundColor:n},left:r,top:i,width:o,height:s}=this;n&&(t.save(),t.fillStyle=n,t.fillRect(r,i,o,s),t.restore())}getLineWidthForValue(t){const n=this.options.grid;if(!this._isVisible()||!n.display)return 0;const i=this.ticks.findIndex(o=>o.value===t);return i>=0?n.setContext(this.getContext(i)).lineWidth:0}drawGrid(t){const n=this.options.grid,r=this.ctx,i=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(t));let o,s;const a=(l,c,u)=>{!u.width||!u.color||(r.save(),r.lineWidth=u.width,r.strokeStyle=u.color,r.setLineDash(u.borderDash||[]),r.lineDashOffset=u.borderDashOffset,r.beginPath(),r.moveTo(l.x,l.y),r.lineTo(c.x,c.y),r.stroke(),r.restore())};if(n.display)for(o=0,s=i.length;o<s;++o){const l=i[o];n.drawOnChartArea&&a({x:l.x1,y:l.y1},{x:l.x2,y:l.y2},l),n.drawTicks&&a({x:l.tx1,y:l.ty1},{x:l.tx2,y:l.ty2},{color:l.tickColor,width:l.tickWidth,borderDash:l.tickBorderDash,borderDashOffset:l.tickBorderDashOffset})}}drawBorder(){const{chart:t,ctx:n,options:{border:r,grid:i}}=this,o=r.setContext(this.getContext()),s=r.display?o.width:0;if(!s)return;const a=i.setContext(this.getContext(0)).lineWidth,l=this._borderValue;let c,u,d,f;this.isHorizontal()?(c=Fr(t,this.left,s)-s/2,u=Fr(t,this.right,a)+a/2,d=f=l):(d=Fr(t,this.top,s)-s/2,f=Fr(t,this.bottom,a)+a/2,c=u=l),n.save(),n.lineWidth=o.width,n.strokeStyle=o.color,n.beginPath(),n.moveTo(c,d),n.lineTo(u,f),n.stroke(),n.restore()}drawLabels(t){if(!this.options.ticks.display)return;const r=this.ctx,i=this._computeLabelArea();i&&Vu(r,i);const o=this.getLabelItems(t);for(const s of o){const a=s.options,l=s.font,c=s.label,u=s.textOffset;di(r,c,0,u,l,a)}i&&Hu(r)}drawTitle(){const{ctx:t,options:{position:n,title:r,reverse:i}}=this;if(!r.display)return;const o=Ue(r.font),s=gt(r.padding),a=r.align;let l=o.lineHeight/2;n==="bottom"||n==="center"||J(n)?(l+=s.bottom,we(r.text)&&(l+=o.lineHeight*(r.text.length-1))):l+=s.top;const{titleX:c,titleY:u,maxWidth:d,rotation:f}=a$(this,l,n,a);di(t,r.text,0,0,o,{color:r.color,maxWidth:d,rotation:f,textAlign:s$(a,n,i),textBaseline:"middle",translation:[c,u]})}draw(t){!this._isVisible()||(this.drawBackground(),this.drawGrid(t),this.drawBorder(),this.drawTitle(),this.drawLabels(t))}_layers(){const t=this.options,n=t.ticks&&t.ticks.z||0,r=X(t.grid&&t.grid.z,-1),i=X(t.border&&t.border.z,0);return!this._isVisible()||this.draw!==yi.prototype.draw?[{z:n,draw:o=>{this.draw(o)}}]:[{z:r,draw:o=>{this.drawBackground(),this.drawGrid(o),this.drawTitle()}},{z:i,draw:()=>{this.drawBorder()}},{z:n,draw:o=>{this.drawLabels(o)}}]}getMatchingVisibleMetas(t){const n=this.chart.getSortedVisibleDatasetMetas(),r=this.axis+"AxisID",i=[];let o,s;for(o=0,s=n.length;o<s;++o){const a=n[o];a[r]===this.id&&(!t||a.type===t)&&i.push(a)}return i}_resolveTickFontOptions(t){const n=this.options.ticks.setContext(this.getContext(t));return Ue(n.font)}_maxDigits(){const t=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/t}}class cl{constructor(t,n,r){this.type=t,this.scope=n,this.override=r,this.items=Object.create(null)}isForType(t){return Object.prototype.isPrototypeOf.call(this.type.prototype,t.prototype)}register(t){const n=Object.getPrototypeOf(t);let r;u$(n)&&(r=this.register(n));const i=this.items,o=t.id,s=this.scope+"."+o;if(!o)throw new Error("class does not have id: "+t);return o in i||(i[o]=t,l$(t,s,r),this.override&&Le.override(t.id,t.overrides)),s}get(t){return this.items[t]}unregister(t){const n=this.items,r=t.id,i=this.scope;r in n&&delete n[r],i&&r in Le[i]&&(delete Le[i][r],this.override&&delete ui[r])}}function l$(e,t,n){const r=Zs(Object.create(null),[n?Le.get(n):{},Le.get(t),e.defaults]);Le.set(t,r),e.defaultRoutes&&c$(t,e.defaultRoutes),e.descriptors&&Le.describe(t,e.descriptors)}function c$(e,t){Object.keys(t).forEach(n=>{const r=n.split("."),i=r.pop(),o=[e].concat(r).join("."),s=t[n].split("."),a=s.pop(),l=s.join(".");Le.route(o,i,l,a)})}function u$(e){return"id"in e&&"defaults"in e}class d${constructor(){this.controllers=new cl(on,"datasets",!0),this.elements=new cl(sn,"elements"),this.plugins=new cl(Object,"plugins"),this.scales=new cl(yi,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...t){this._each("register",t)}remove(...t){this._each("unregister",t)}addControllers(...t){this._each("register",t,this.controllers)}addElements(...t){this._each("register",t,this.elements)}addPlugins(...t){this._each("register",t,this.plugins)}addScales(...t){this._each("register",t,this.scales)}getController(t){return this._get(t,this.controllers,"controller")}getElement(t){return this._get(t,this.elements,"element")}getPlugin(t){return this._get(t,this.plugins,"plugin")}getScale(t){return this._get(t,this.scales,"scale")}removeControllers(...t){this._each("unregister",t,this.controllers)}removeElements(...t){this._each("unregister",t,this.elements)}removePlugins(...t){this._each("unregister",t,this.plugins)}removeScales(...t){this._each("unregister",t,this.scales)}_each(t,n,r){[...n].forEach(i=>{const o=r||this._getRegistryForType(i);r||o.isForType(i)||o===this.plugins&&i.id?this._exec(t,o,i):he(i,s=>{const a=r||this._getRegistryForType(s);this._exec(t,a,s)})})}_exec(t,n,r){const i=Ig(t);xe(r["before"+i],[],r),n[t](r),xe(r["after"+i],[],r)}_getRegistryForType(t){for(let n=0;n<this._typedRegistries.length;n++){const r=this._typedRegistries[n];if(r.isForType(t))return r}return this.plugins}_get(t,n,r){const i=n.get(t);if(i===void 0)throw new Error('"'+t+'" is not a registered '+r+".");return i}}var dn=new d$;class f${constructor(){this._init=[]}notify(t,n,r,i){n==="beforeInit"&&(this._init=this._createDescriptors(t,!0),this._notify(this._init,t,"install"));const o=i?this._descriptors(t).filter(i):this._descriptors(t),s=this._notify(o,t,n,r);return n==="afterDestroy"&&(this._notify(o,t,"stop"),this._notify(this._init,t,"uninstall")),s}_notify(t,n,r,i){i=i||{};for(const o of t){const s=o.plugin,a=s[r],l=[n,i,o.options];if(xe(a,l,s)===!1&&i.cancelable)return!1}return!0}invalidate(){te(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(t){if(this._cache)return this._cache;const n=this._cache=this._createDescriptors(t);return this._notifyStateChanges(t),n}_createDescriptors(t,n){const r=t&&t.config,i=X(r.options&&r.options.plugins,{}),o=h$(r);return i===!1&&!n?[]:g$(t,o,i,n)}_notifyStateChanges(t){const n=this._oldCache||[],r=this._cache,i=(o,s)=>o.filter(a=>!s.some(l=>a.plugin.id===l.plugin.id));this._notify(i(n,r),t,"stop"),this._notify(i(r,n),t,"start")}}function h$(e){const t={},n=[],r=Object.keys(dn.plugins.items);for(let o=0;o<r.length;o++)n.push(dn.getPlugin(r[o]));const i=e.plugins||[];for(let o=0;o<i.length;o++){const s=i[o];n.indexOf(s)===-1&&(n.push(s),t[s.id]=!0)}return{plugins:n,localIds:t}}function p$(e,t){return!t&&e===!1?null:e===!0?{}:e}function g$(e,{plugins:t,localIds:n},r,i){const o=[],s=e.getContext();for(const a of t){const l=a.id,c=p$(r[l],i);c!==null&&o.push({plugin:a,options:m$(e.config,{plugin:a,local:n[l]},c,s)})}return o}function m$(e,{plugin:t,local:n},r,i){const o=e.pluginScopeKeys(t),s=e.getOptionScopes(r,o);return n&&t.defaults&&s.push(t.defaults),e.createResolver(s,i,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function Sh(e,t){const n=Le.datasets[e]||{};return((t.datasets||{})[e]||{}).indexAxis||t.indexAxis||n.indexAxis||"x"}function v$(e,t){let n=e;return e==="_index_"?n=t:e==="_value_"&&(n=t==="x"?"y":"x"),n}function y$(e,t){return e===t?"_index_":"_value_"}function Pv(e){if(e==="x"||e==="y"||e==="r")return e}function x$(e){if(e==="top"||e==="bottom")return"x";if(e==="left"||e==="right")return"y"}function kh(e,...t){if(Pv(e))return e;for(const n of t){const r=n.axis||x$(n.position)||e.length>1&&Pv(e[0].toLowerCase());if(r)return r}throw new Error(`Cannot determine type of '${e}' axis. Please provide 'axis' or 'position' option.`)}function Ov(e,t,n){if(n[t+"AxisID"]===e)return{axis:t}}function b$(e,t){if(t.data&&t.data.datasets){const n=t.data.datasets.filter(r=>r.xAxisID===e||r.yAxisID===e);if(n.length)return Ov(e,"x",n[0])||Ov(e,"y",n[0])}return{}}function w$(e,t){const n=ui[e.type]||{scales:{}},r=t.scales||{},i=Sh(e.type,t),o=Object.create(null);return Object.keys(r).forEach(s=>{const a=r[s];if(!J(a))return console.error(`Invalid scale configuration for scale: ${s}`);if(a._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${s}`);const l=kh(s,a,b$(s,e),Le.scales[a.type]),c=y$(l,i),u=n.scales||{};o[s]=bs(Object.create(null),[{axis:l},a,u[l],u[c]])}),e.data.datasets.forEach(s=>{const a=s.type||e.type,l=s.indexAxis||Sh(a,t),u=(ui[a]||{}).scales||{};Object.keys(u).forEach(d=>{const f=v$(d,l),g=s[f+"AxisID"]||f;o[g]=o[g]||Object.create(null),bs(o[g],[{axis:f},r[g],u[d]])})}),Object.keys(o).forEach(s=>{const a=o[s];bs(a,[Le.scales[a.type],Le.scale])}),o}function Jw(e){const t=e.options||(e.options={});t.plugins=X(t.plugins,{}),t.scales=w$(e,t)}function e_(e){return e=e||{},e.datasets=e.datasets||[],e.labels=e.labels||[],e}function _$(e){return e=e||{},e.data=e_(e.data),Jw(e),e}const Mv=new Map,t_=new Set;function ul(e,t){let n=Mv.get(e);return n||(n=t(),Mv.set(e,n),t_.add(n)),n}const Xo=(e,t,n)=>{const r=Tr(t,n);r!==void 0&&e.add(r)};class S${constructor(t){this._config=_$(t),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(t){this._config.type=t}get data(){return this._config.data}set data(t){this._config.data=e_(t)}get options(){return this._config.options}set options(t){this._config.options=t}get plugins(){return this._config.plugins}update(){const t=this._config;this.clearCache(),Jw(t)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(t){return ul(t,()=>[[`datasets.${t}`,""]])}datasetAnimationScopeKeys(t,n){return ul(`${t}.transition.${n}`,()=>[[`datasets.${t}.transitions.${n}`,`transitions.${n}`],[`datasets.${t}`,""]])}datasetElementScopeKeys(t,n){return ul(`${t}-${n}`,()=>[[`datasets.${t}.elements.${n}`,`datasets.${t}`,`elements.${n}`,""]])}pluginScopeKeys(t){const n=t.id,r=this.type;return ul(`${r}-plugin-${n}`,()=>[[`plugins.${n}`,...t.additionalOptionScopes||[]]])}_cachedScopes(t,n){const r=this._scopeCache;let i=r.get(t);return(!i||n)&&(i=new Map,r.set(t,i)),i}getOptionScopes(t,n,r){const{options:i,type:o}=this,s=this._cachedScopes(t,r),a=s.get(n);if(a)return a;const l=new Set;n.forEach(u=>{t&&(l.add(t),u.forEach(d=>Xo(l,t,d))),u.forEach(d=>Xo(l,i,d)),u.forEach(d=>Xo(l,ui[o]||{},d)),u.forEach(d=>Xo(l,Le,d)),u.forEach(d=>Xo(l,bh,d))});const c=Array.from(l);return c.length===0&&c.push(Object.create(null)),t_.has(n)&&s.set(n,c),c}chartOptionScopes(){const{options:t,type:n}=this;return[t,ui[n]||{},Le.datasets[n]||{},{type:n},Le,bh]}resolveNamedOptions(t,n,r,i=[""]){const o={$shared:!0},{resolver:s,subPrefixes:a}=Ev(this._resolverCache,t,i);let l=s;if(C$(s,n)){o.$shared=!1,r=Ar(r)?r():r;const c=this.createResolver(t,r,a);l=uo(s,r,c)}for(const c of n)o[c]=l[c];return o}createResolver(t,n,r=[""],i){const{resolver:o}=Ev(this._resolverCache,t,r);return J(n)?uo(o,n,void 0,i):o}}function Ev(e,t,n){let r=e.get(t);r||(r=new Map,e.set(t,r));const i=n.join();let o=r.get(i);return o||(o={resolver:Hg(t,n),subPrefixes:n.filter(a=>!a.toLowerCase().includes("hover"))},r.set(i,o)),o}const k$=e=>J(e)&&Object.getOwnPropertyNames(e).some(t=>Ar(e[t]));function C$(e,t){const{isScriptable:n,isIndexable:r}=Rw(e);for(const i of t){const o=n(i),s=r(i),a=(s||o)&&e[i];if(o&&(Ar(a)||k$(a))||s&&we(a))return!0}return!1}var P$="4.4.3";const O$=["top","bottom","left","right","chartArea"];function Nv(e,t){return e==="top"||e==="bottom"||O$.indexOf(e)===-1&&t==="x"}function Tv(e,t){return function(n,r){return n[e]===r[e]?n[t]-r[t]:n[e]-r[e]}}function Av(e){const t=e.chart,n=t.options.animation;t.notifyPlugins("afterRender"),xe(n&&n.onComplete,[e],t)}function M$(e){const t=e.chart,n=t.options.animation;xe(n&&n.onProgress,[e],t)}function n_(e){return Xg()&&typeof e=="string"?e=document.getElementById(e):e&&e.length&&(e=e[0]),e&&e.canvas&&(e=e.canvas),e}const jl={},$v=e=>{const t=n_(e);return Object.values(jl).filter(n=>n.canvas===t).pop()};function E$(e,t,n){const r=Object.keys(e);for(const i of r){const o=+i;if(o>=t){const s=e[i];delete e[i],(n>0||o>t)&&(e[o+n]=s)}}}function N$(e,t,n,r){return!n||e.type==="mouseout"?null:r?t:e}function dl(e,t,n){return e.options.clip?e[n]:t[n]}function T$(e,t){const{xScale:n,yScale:r}=e;return n&&r?{left:dl(n,t,"left"),right:dl(n,t,"right"),top:dl(r,t,"top"),bottom:dl(r,t,"bottom")}:t}class gn{static register(...t){dn.add(...t),Rv()}static unregister(...t){dn.remove(...t),Rv()}constructor(t,n){const r=this.config=new S$(n),i=n_(t),o=$v(i);if(o)throw new Error("Canvas is already in use. Chart with ID '"+o.id+"' must be destroyed before the canvas with ID '"+o.canvas.id+"' can be reused.");const s=r.createResolver(r.chartOptionScopes(),this.getContext());this.platform=new(r.platform||K8(i)),this.platform.updateConfig(r);const a=this.platform.acquireContext(i,s.aspectRatio),l=a&&a.canvas,c=l&&l.height,u=l&&l.width;if(this.id=$T(),this.ctx=a,this.canvas=l,this.width=u,this.height=c,this._options=s,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new f$,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=GT(d=>this.update(d),s.resizeDelay||0),this._dataChanges=[],jl[this.id]=this,!a||!l){console.error("Failed to create chart: can't acquire context from the given item");return}Nn.listen(this,"complete",Av),Nn.listen(this,"progress",M$),this._initialize(),this.attached&&this.update()}get aspectRatio(){const{options:{aspectRatio:t,maintainAspectRatio:n},width:r,height:i,_aspectRatio:o}=this;return te(t)?n&&o?o:i?r/i:null:t}get data(){return this.config.data}set data(t){this.config.data=t}get options(){return this._options}set options(t){this.config.options=t}get registry(){return dn}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():tv(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return Z1(this.canvas,this.ctx),this}stop(){return Nn.stop(this),this}resize(t,n){Nn.running(this)?this._resizeBeforeDraw={width:t,height:n}:this._resize(t,n)}_resize(t,n){const r=this.options,i=this.canvas,o=r.maintainAspectRatio&&this.aspectRatio,s=this.platform.getMaximumSize(i,t,n,o),a=r.devicePixelRatio||this.platform.getDevicePixelRatio(),l=this.width?"resize":"attach";this.width=s.width,this.height=s.height,this._aspectRatio=this.aspectRatio,tv(this,a,!0)&&(this.notifyPlugins("resize",{size:s}),xe(r.onResize,[this,s],this),this.attached&&this._doResize(l)&&this.render())}ensureScalesHaveIDs(){const n=this.options.scales||{};he(n,(r,i)=>{r.id=i})}buildOrUpdateScales(){const t=this.options,n=t.scales,r=this.scales,i=Object.keys(r).reduce((s,a)=>(s[a]=!1,s),{});let o=[];n&&(o=o.concat(Object.keys(n).map(s=>{const a=n[s],l=kh(s,a),c=l==="r",u=l==="x";return{options:a,dposition:c?"chartArea":u?"bottom":"left",dtype:c?"radialLinear":u?"category":"linear"}}))),he(o,s=>{const a=s.options,l=a.id,c=kh(l,a),u=X(a.type,s.dtype);(a.position===void 0||Nv(a.position,c)!==Nv(s.dposition))&&(a.position=s.dposition),i[l]=!0;let d=null;if(l in r&&r[l].type===u)d=r[l];else{const f=dn.getScale(u);d=new f({id:l,type:u,ctx:this.ctx,chart:this}),r[d.id]=d}d.init(a,t)}),he(i,(s,a)=>{s||delete r[a]}),he(r,s=>{dt.configure(this,s,s.options),dt.addBox(this,s)})}_updateMetasets(){const t=this._metasets,n=this.data.datasets.length,r=t.length;if(t.sort((i,o)=>i.index-o.index),r>n){for(let i=n;i<r;++i)this._destroyDatasetMeta(i);t.splice(n,r-n)}this._sortedMetasets=t.slice(0).sort(Tv("order","index"))}_removeUnreferencedMetasets(){const{_metasets:t,data:{datasets:n}}=this;t.length>n.length&&delete this._stacks,t.forEach((r,i)=>{n.filter(o=>o===r._dataset).length===0&&this._destroyDatasetMeta(i)})}buildOrUpdateControllers(){const t=[],n=this.data.datasets;let r,i;for(this._removeUnreferencedMetasets(),r=0,i=n.length;r<i;r++){const o=n[r];let s=this.getDatasetMeta(r);const a=o.type||this.config.type;if(s.type&&s.type!==a&&(this._destroyDatasetMeta(r),s=this.getDatasetMeta(r)),s.type=a,s.indexAxis=o.indexAxis||Sh(a,this.options),s.order=o.order||0,s.index=r,s.label=""+o.label,s.visible=this.isDatasetVisible(r),s.controller)s.controller.updateIndex(r),s.controller.linkScales();else{const l=dn.getController(a),{datasetElementType:c,dataElementType:u}=Le.datasets[a];Object.assign(l,{dataElementType:dn.getElement(u),datasetElementType:c&&dn.getElement(c)}),s.controller=new l(this,r),t.push(s.controller)}}return this._updateMetasets(),t}_resetElements(){he(this.data.datasets,(t,n)=>{this.getDatasetMeta(n).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(t){const n=this.config;n.update();const r=this._options=n.createResolver(n.chartOptionScopes(),this.getContext()),i=this._animationsDisabled=!r.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),this.notifyPlugins("beforeUpdate",{mode:t,cancelable:!0})===!1)return;const o=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let s=0;for(let c=0,u=this.data.datasets.length;c<u;c++){const{controller:d}=this.getDatasetMeta(c),f=!i&&o.indexOf(d)===-1;d.buildOrUpdateElements(f),s=Math.max(+d.getMaxOverflow(),s)}s=this._minPadding=r.layout.autoPadding?s:0,this._updateLayout(s),i||he(o,c=>{c.reset()}),this._updateDatasets(t),this.notifyPlugins("afterUpdate",{mode:t}),this._layers.sort(Tv("z","_idx"));const{_active:a,_lastEvent:l}=this;l?this._eventHandler(l,!0):a.length&&this._updateHoverStyles(a,a,!0),this.render()}_updateScales(){he(this.scales,t=>{dt.removeBox(this,t)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){const t=this.options,n=new Set(Object.keys(this._listeners)),r=new Set(t.events);(!V1(n,r)||!!this._responsiveListeners!==t.responsive)&&(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){const{_hiddenIndices:t}=this,n=this._getUniformDataChanges()||[];for(const{method:r,start:i,count:o}of n){const s=r==="_removeElements"?-o:o;E$(t,i,s)}}_getUniformDataChanges(){const t=this._dataChanges;if(!t||!t.length)return;this._dataChanges=[];const n=this.data.datasets.length,r=o=>new Set(t.filter(s=>s[0]===o).map((s,a)=>a+","+s.splice(1).join(","))),i=r(0);for(let o=1;o<n;o++)if(!V1(i,r(o)))return;return Array.from(i).map(o=>o.split(",")).map(o=>({method:o[1],start:+o[2],count:+o[3]}))}_updateLayout(t){if(this.notifyPlugins("beforeLayout",{cancelable:!0})===!1)return;dt.update(this,this.width,this.height,t);const n=this.chartArea,r=n.width<=0||n.height<=0;this._layers=[],he(this.boxes,i=>{r&&i.position==="chartArea"||(i.configure&&i.configure(),this._layers.push(...i._layers()))},this),this._layers.forEach((i,o)=>{i._idx=o}),this.notifyPlugins("afterLayout")}_updateDatasets(t){if(this.notifyPlugins("beforeDatasetsUpdate",{mode:t,cancelable:!0})!==!1){for(let n=0,r=this.data.datasets.length;n<r;++n)this.getDatasetMeta(n).controller.configure();for(let n=0,r=this.data.datasets.length;n<r;++n)this._updateDataset(n,Ar(t)?t({datasetIndex:n}):t);this.notifyPlugins("afterDatasetsUpdate",{mode:t})}}_updateDataset(t,n){const r=this.getDatasetMeta(t),i={meta:r,index:t,mode:n,cancelable:!0};this.notifyPlugins("beforeDatasetUpdate",i)!==!1&&(r.controller._update(n),i.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",i))}render(){this.notifyPlugins("beforeRender",{cancelable:!0})!==!1&&(Nn.has(this)?this.attached&&!Nn.running(this)&&Nn.start(this):(this.draw(),Av({chart:this})))}draw(){let t;if(this._resizeBeforeDraw){const{width:r,height:i}=this._resizeBeforeDraw;this._resize(r,i),this._resizeBeforeDraw=null}if(this.clear(),this.width<=0||this.height<=0||this.notifyPlugins("beforeDraw",{cancelable:!0})===!1)return;const n=this._layers;for(t=0;t<n.length&&n[t].z<=0;++t)n[t].draw(this.chartArea);for(this._drawDatasets();t<n.length;++t)n[t].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(t){const n=this._sortedMetasets,r=[];let i,o;for(i=0,o=n.length;i<o;++i){const s=n[i];(!t||s.visible)&&r.push(s)}return r}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0})===!1)return;const t=this.getSortedVisibleDatasetMetas();for(let n=t.length-1;n>=0;--n)this._drawDataset(t[n]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(t){const n=this.ctx,r=t._clip,i=!r.disabled,o=T$(t,this.chartArea),s={meta:t,index:t.index,cancelable:!0};this.notifyPlugins("beforeDatasetDraw",s)!==!1&&(i&&Vu(n,{left:r.left===!1?0:o.left-r.left,right:r.right===!1?this.width:o.right+r.right,top:r.top===!1?0:o.top-r.top,bottom:r.bottom===!1?this.height:o.bottom+r.bottom}),t.controller.draw(),i&&Hu(n),s.cancelable=!1,this.notifyPlugins("afterDatasetDraw",s))}isPointInArea(t){return jn(t,this.chartArea,this._minPadding)}getElementsAtEventForMode(t,n,r,i){const o=O8.modes[n];return typeof o=="function"?o(this,t,r,i):[]}getDatasetMeta(t){const n=this.data.datasets[t],r=this._metasets;let i=r.filter(o=>o&&o._dataset===n).pop();return i||(i={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:n&&n.order||0,index:t,_dataset:n,_parsed:[],_sorted:!1},r.push(i)),i}getContext(){return this.$context||(this.$context=Ir(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(t){const n=this.data.datasets[t];if(!n)return!1;const r=this.getDatasetMeta(t);return typeof r.hidden=="boolean"?!r.hidden:!n.hidden}setDatasetVisibility(t,n){const r=this.getDatasetMeta(t);r.hidden=!n}toggleDataVisibility(t){this._hiddenIndices[t]=!this._hiddenIndices[t]}getDataVisibility(t){return!this._hiddenIndices[t]}_updateVisibility(t,n,r){const i=r?"show":"hide",o=this.getDatasetMeta(t),s=o.controller._resolveAnimations(void 0,i);Js(n)?(o.data[n].hidden=!r,this.update()):(this.setDatasetVisibility(t,r),s.update(o,{visible:r}),this.update(a=>a.datasetIndex===t?i:void 0))}hide(t,n){this._updateVisibility(t,n,!1)}show(t,n){this._updateVisibility(t,n,!0)}_destroyDatasetMeta(t){const n=this._metasets[t];n&&n.controller&&n.controller._destroy(),delete this._metasets[t]}_stop(){let t,n;for(this.stop(),Nn.remove(this),t=0,n=this.data.datasets.length;t<n;++t)this._destroyDatasetMeta(t)}destroy(){this.notifyPlugins("beforeDestroy");const{canvas:t,ctx:n}=this;this._stop(),this.config.clearCache(),t&&(this.unbindEvents(),Z1(t,n),this.platform.releaseContext(n),this.canvas=null,this.ctx=null),delete jl[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...t){return this.canvas.toDataURL(...t)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){const t=this._listeners,n=this.platform,r=(o,s)=>{n.addEventListener(this,o,s),t[o]=s},i=(o,s,a)=>{o.offsetX=s,o.offsetY=a,this._eventHandler(o)};he(this.options.events,o=>r(o,i))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});const t=this._responsiveListeners,n=this.platform,r=(l,c)=>{n.addEventListener(this,l,c),t[l]=c},i=(l,c)=>{t[l]&&(n.removeEventListener(this,l,c),delete t[l])},o=(l,c)=>{this.canvas&&this.resize(l,c)};let s;const a=()=>{i("attach",a),this.attached=!0,this.resize(),r("resize",o),r("detach",s)};s=()=>{this.attached=!1,i("resize",o),this._stop(),this._resize(0,0),r("attach",a)},n.isAttached(this.canvas)?a():s()}unbindEvents(){he(this._listeners,(t,n)=>{this.platform.removeEventListener(this,n,t)}),this._listeners={},he(this._responsiveListeners,(t,n)=>{this.platform.removeEventListener(this,n,t)}),this._responsiveListeners=void 0}updateHoverStyle(t,n,r){const i=r?"set":"remove";let o,s,a,l;for(n==="dataset"&&(o=this.getDatasetMeta(t[0].datasetIndex),o.controller["_"+i+"DatasetHoverStyle"]()),a=0,l=t.length;a<l;++a){s=t[a];const c=s&&this.getDatasetMeta(s.datasetIndex).controller;c&&c[i+"HoverStyle"](s.element,s.datasetIndex,s.index)}}getActiveElements(){return this._active||[]}setActiveElements(t){const n=this._active||[],r=t.map(({datasetIndex:o,index:s})=>{const a=this.getDatasetMeta(o);if(!a)throw new Error("No dataset found at index "+o);return{datasetIndex:o,element:a.data[s],index:s}});!Mc(r,n)&&(this._active=r,this._lastEvent=null,this._updateHoverStyles(r,n))}notifyPlugins(t,n,r){return this._plugins.notify(this,t,n,r)}isPluginEnabled(t){return this._plugins._cache.filter(n=>n.plugin.id===t).length===1}_updateHoverStyles(t,n,r){const i=this.options.hover,o=(l,c)=>l.filter(u=>!c.some(d=>u.datasetIndex===d.datasetIndex&&u.index===d.index)),s=o(n,t),a=r?t:o(t,n);s.length&&this.updateHoverStyle(s,i.mode,!1),a.length&&i.mode&&this.updateHoverStyle(a,i.mode,!0)}_eventHandler(t,n){const r={event:t,replay:n,cancelable:!0,inChartArea:this.isPointInArea(t)},i=s=>(s.options.events||this.options.events).includes(t.native.type);if(this.notifyPlugins("beforeEvent",r,i)===!1)return;const o=this._handleEvent(t,n,r.inChartArea);return r.cancelable=!1,this.notifyPlugins("afterEvent",r,i),(o||r.changed)&&this.render(),this}_handleEvent(t,n,r){const{_active:i=[],options:o}=this,s=n,a=this._getActiveElements(t,i,r,s),l=jT(t),c=N$(t,this._lastEvent,r,l);r&&(this._lastEvent=null,xe(o.onHover,[t,a,this],this),l&&xe(o.onClick,[t,a,this],this));const u=!Mc(a,i);return(u||n)&&(this._active=a,this._updateHoverStyles(a,i,n)),this._lastEvent=c,u}_getActiveElements(t,n,r,i){if(t.type==="mouseout")return[];if(!r)return n;const o=this.options.hover;return this.getElementsAtEventForMode(t,o.mode,o,i)}}z(gn,"defaults",Le),z(gn,"instances",jl),z(gn,"overrides",ui),z(gn,"registry",dn),z(gn,"version",P$),z(gn,"getChart",$v);function Rv(){return he(gn.instances,e=>e._plugins.invalidate())}function A$(e,t,n){const{startAngle:r,pixelMargin:i,x:o,y:s,outerRadius:a,innerRadius:l}=t;let c=i/a;e.beginPath(),e.arc(o,s,a,r-c,n+c),l>i?(c=i/l,e.arc(o,s,l,n+c,r-c,!0)):e.arc(o,s,i,n+ze,r-ze),e.closePath(),e.clip()}function $$(e){return Vg(e,["outerStart","outerEnd","innerStart","innerEnd"])}function R$(e,t,n,r){const i=$$(e.options.borderRadius),o=(n-t)/2,s=Math.min(o,r*t/2),a=l=>{const c=(n-Math.min(o,l))*r/2;return Xe(l,0,Math.min(o,c))};return{outerStart:a(i.outerStart),outerEnd:a(i.outerEnd),innerStart:Xe(i.innerStart,0,s),innerEnd:Xe(i.innerEnd,0,s)}}function Oi(e,t,n,r){return{x:n+e*Math.cos(t),y:r+e*Math.sin(t)}}function Rc(e,t,n,r,i,o){const{x:s,y:a,startAngle:l,pixelMargin:c,innerRadius:u}=t,d=Math.max(t.outerRadius+r+n-c,0),f=u>0?u+r+n+c:0;let g=0;const v=i-l;if(r){const V=u>0?u-r:0,K=d>0?d-r:0,q=(V+K)/2,ie=q!==0?v*q/(q+r):v;g=(v-ie)/2}const y=Math.max(.001,v*d-n/ke)/d,p=(v-y)/2,m=l+p+g,x=i-p-g,{outerStart:b,outerEnd:w,innerStart:_,innerEnd:k}=R$(t,f,d,x-m),P=d-b,M=d-w,E=m+b/P,A=x-w/M,j=f+_,I=f+k,W=m+_/j,Z=x-k/I;if(e.beginPath(),o){const V=(E+A)/2;if(e.arc(s,a,d,E,V),e.arc(s,a,d,V,A),w>0){const ve=Oi(M,A,s,a);e.arc(ve.x,ve.y,w,A,x+ze)}const K=Oi(I,x,s,a);if(e.lineTo(K.x,K.y),k>0){const ve=Oi(I,Z,s,a);e.arc(ve.x,ve.y,k,x+ze,Z+Math.PI)}const q=(x-k/f+(m+_/f))/2;if(e.arc(s,a,f,x-k/f,q,!0),e.arc(s,a,f,q,m+_/f,!0),_>0){const ve=Oi(j,W,s,a);e.arc(ve.x,ve.y,_,W+Math.PI,m-ze)}const ie=Oi(P,m,s,a);if(e.lineTo(ie.x,ie.y),b>0){const ve=Oi(P,E,s,a);e.arc(ve.x,ve.y,b,m-ze,E)}}else{e.moveTo(s,a);const V=Math.cos(E)*d+s,K=Math.sin(E)*d+a;e.lineTo(V,K);const q=Math.cos(A)*d+s,ie=Math.sin(A)*d+a;e.lineTo(q,ie)}e.closePath()}function L$(e,t,n,r,i){const{fullCircles:o,startAngle:s,circumference:a}=t;let l=t.endAngle;if(o){Rc(e,t,n,r,l,i);for(let c=0;c<o;++c)e.fill();isNaN(a)||(l=s+(a%Se||Se))}return Rc(e,t,n,r,l,i),e.fill(),l}function D$(e,t,n,r,i){const{fullCircles:o,startAngle:s,circumference:a,options:l}=t,{borderWidth:c,borderJoinStyle:u,borderDash:d,borderDashOffset:f}=l,g=l.borderAlign==="inner";if(!c)return;e.setLineDash(d||[]),e.lineDashOffset=f,g?(e.lineWidth=c*2,e.lineJoin=u||"round"):(e.lineWidth=c,e.lineJoin=u||"bevel");let v=t.endAngle;if(o){Rc(e,t,n,r,v,i);for(let y=0;y<o;++y)e.stroke();isNaN(a)||(v=s+(a%Se||Se))}g&&A$(e,t,v),o||(Rc(e,t,n,r,v,i),e.stroke())}class rs extends sn{constructor(n){super();z(this,"circumference");z(this,"endAngle");z(this,"fullCircles");z(this,"innerRadius");z(this,"outerRadius");z(this,"pixelMargin");z(this,"startAngle");this.options=void 0,this.circumference=void 0,this.startAngle=void 0,this.endAngle=void 0,this.innerRadius=void 0,this.outerRadius=void 0,this.pixelMargin=0,this.fullCircles=0,n&&Object.assign(this,n)}inRange(n,r,i){const o=this.getProps(["x","y"],i),{angle:s,distance:a}=kw(o,{x:n,y:r}),{startAngle:l,endAngle:c,innerRadius:u,outerRadius:d,circumference:f}=this.getProps(["startAngle","endAngle","innerRadius","outerRadius","circumference"],i),g=(this.options.spacing+this.options.borderWidth)/2,y=X(f,c-l)>=Se||ea(s,l,c),p=zn(a,u+g,d+g);return y&&p}getCenterPoint(n){const{x:r,y:i,startAngle:o,endAngle:s,innerRadius:a,outerRadius:l}=this.getProps(["x","y","startAngle","endAngle","innerRadius","outerRadius"],n),{offset:c,spacing:u}=this.options,d=(o+s)/2,f=(a+l+u+c)/2;return{x:r+Math.cos(d)*f,y:i+Math.sin(d)*f}}tooltipPosition(n){return this.getCenterPoint(n)}draw(n){const{options:r,circumference:i}=this,o=(r.offset||0)/4,s=(r.spacing||0)/2,a=r.circular;if(this.pixelMargin=r.borderAlign==="inner"?.33:0,this.fullCircles=i>Se?Math.floor(i/Se):0,i===0||this.innerRadius<0||this.outerRadius<0)return;n.save();const l=(this.startAngle+this.endAngle)/2;n.translate(Math.cos(l)*o,Math.sin(l)*o);const c=1-Math.sin(Math.min(ke,i||0)),u=o*c;n.fillStyle=r.backgroundColor,n.strokeStyle=r.borderColor,L$(n,this,u,s,a),D$(n,this,u,s,a),n.restore()}}z(rs,"id","arc"),z(rs,"defaults",{borderAlign:"center",borderColor:"#fff",borderDash:[],borderDashOffset:0,borderJoinStyle:void 0,borderRadius:0,borderWidth:2,offset:0,spacing:0,angle:void 0,circular:!0}),z(rs,"defaultRoutes",{backgroundColor:"backgroundColor"}),z(rs,"descriptors",{_scriptable:!0,_indexable:n=>n!=="borderDash"});function r_(e,t,n=t){e.lineCap=X(n.borderCapStyle,t.borderCapStyle),e.setLineDash(X(n.borderDash,t.borderDash)),e.lineDashOffset=X(n.borderDashOffset,t.borderDashOffset),e.lineJoin=X(n.borderJoinStyle,t.borderJoinStyle),e.lineWidth=X(n.borderWidth,t.borderWidth),e.strokeStyle=X(n.borderColor,t.borderColor)}function z$(e,t,n){e.lineTo(n.x,n.y)}function I$(e){return e.stepped?aA:e.tension||e.cubicInterpolationMode==="monotone"?lA:z$}function i_(e,t,n={}){const r=e.length,{start:i=0,end:o=r-1}=n,{start:s,end:a}=t,l=Math.max(i,s),c=Math.min(o,a),u=i<s&&o<s||i>a&&o>a;return{count:r,start:l,loop:t.loop,ilen:c<l&&!u?r+c-l:c-l}}function j$(e,t,n,r){const{points:i,options:o}=t,{count:s,start:a,loop:l,ilen:c}=i_(i,n,r),u=I$(o);let{move:d=!0,reverse:f}=r||{},g,v,y;for(g=0;g<=c;++g)v=i[(a+(f?c-g:g))%s],!v.skip&&(d?(e.moveTo(v.x,v.y),d=!1):u(e,y,v,f,o.stepped),y=v);return l&&(v=i[(a+(f?c:0))%s],u(e,y,v,f,o.stepped)),!!l}function F$(e,t,n,r){const i=t.points,{count:o,start:s,ilen:a}=i_(i,n,r),{move:l=!0,reverse:c}=r||{};let u=0,d=0,f,g,v,y,p,m;const x=w=>(s+(c?a-w:w))%o,b=()=>{y!==p&&(e.lineTo(u,p),e.lineTo(u,y),e.lineTo(u,m))};for(l&&(g=i[x(0)],e.moveTo(g.x,g.y)),f=0;f<=a;++f){if(g=i[x(f)],g.skip)continue;const w=g.x,_=g.y,k=w|0;k===v?(_<y?y=_:_>p&&(p=_),u=(d*u+w)/++d):(b(),e.lineTo(w,_),v=k,d=0,y=p=_),m=_}b()}function Ch(e){const t=e.options,n=t.borderDash&&t.borderDash.length;return!e._decimated&&!e._loop&&!t.tension&&t.cubicInterpolationMode!=="monotone"&&!t.stepped&&!n?F$:j$}function B$(e){return e.stepped?FA:e.tension||e.cubicInterpolationMode==="monotone"?BA:Xr}function W$(e,t,n,r){let i=t._path;i||(i=t._path=new Path2D,t.path(i,n,r)&&i.closePath()),r_(e,t.options),e.stroke(i)}function V$(e,t,n,r){const{segments:i,options:o}=t,s=Ch(t);for(const a of i)r_(e,o,a.style),e.beginPath(),s(e,t,a,{start:n,end:n+r-1})&&e.closePath(),e.stroke()}const H$=typeof Path2D=="function";function U$(e,t,n,r){H$&&!t.options.segment?W$(e,t,n,r):V$(e,t,n,r)}class ar extends sn{constructor(t){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,t&&Object.assign(this,t)}updateControlPoints(t,n){const r=this.options;if((r.tension||r.cubicInterpolationMode==="monotone")&&!r.stepped&&!this._pointsUpdated){const i=r.spanGaps?this._loop:this._fullLoop;AA(this._points,r,t,i,n),this._pointsUpdated=!0}}set points(t){this._points=t,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=XA(this,this.options.segment))}first(){const t=this.segments,n=this.points;return t.length&&n[t[0].start]}last(){const t=this.segments,n=this.points,r=t.length;return r&&n[t[r-1].end]}interpolate(t,n){const r=this.options,i=t[n],o=this.points,s=Hw(this,{property:n,start:i,end:i});if(!s.length)return;const a=[],l=B$(r);let c,u;for(c=0,u=s.length;c<u;++c){const{start:d,end:f}=s[c],g=o[d],v=o[f];if(g===v){a.push(g);continue}const y=Math.abs((i-g[n])/(v[n]-g[n])),p=l(g,v,y,r.stepped);p[n]=t[n],a.push(p)}return a.length===1?a[0]:a}pathSegment(t,n,r){return Ch(this)(t,this,n,r)}path(t,n,r){const i=this.segments,o=Ch(this);let s=this._loop;n=n||0,r=r||this.points.length-n;for(const a of i)s&=o(t,this,a,{start:n,end:n+r-1});return!!s}draw(t,n,r,i){const o=this.options||{};(this.points||[]).length&&o.borderWidth&&(t.save(),U$(t,this,r,i),t.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}}z(ar,"id","line"),z(ar,"defaults",{borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0}),z(ar,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"}),z(ar,"descriptors",{_scriptable:!0,_indexable:t=>t!=="borderDash"&&t!=="fill"});function Lv(e,t,n,r){const i=e.options,{[n]:o}=e.getProps([n],r);return Math.abs(t-o)<i.radius+i.hitRadius}class Fl extends sn{constructor(n){super();z(this,"parsed");z(this,"skip");z(this,"stop");this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,n&&Object.assign(this,n)}inRange(n,r,i){const o=this.options,{x:s,y:a}=this.getProps(["x","y"],i);return Math.pow(n-s,2)+Math.pow(r-a,2)<Math.pow(o.hitRadius+o.radius,2)}inXRange(n,r){return Lv(this,n,"x",r)}inYRange(n,r){return Lv(this,n,"y",r)}getCenterPoint(n){const{x:r,y:i}=this.getProps(["x","y"],n);return{x:r,y:i}}size(n){n=n||this.options||{};let r=n.radius||0;r=Math.max(r,r&&n.hoverRadius||0);const i=r&&n.borderWidth||0;return(r+i)*2}draw(n,r){const i=this.options;this.skip||i.radius<.1||!jn(this,r,this.size(i)/2)||(n.strokeStyle=i.borderColor,n.lineWidth=i.borderWidth,n.fillStyle=i.backgroundColor,wh(n,i,this.x,this.y))}getRange(){const n=this.options||{};return n.radius+n.hitRadius}}z(Fl,"id","point"),z(Fl,"defaults",{borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0}),z(Fl,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});function o_(e,t){const{x:n,y:r,base:i,width:o,height:s}=e.getProps(["x","y","base","width","height"],t);let a,l,c,u,d;return e.horizontal?(d=s/2,a=Math.min(n,i),l=Math.max(n,i),c=r-d,u=r+d):(d=o/2,a=n-d,l=n+d,c=Math.min(r,i),u=Math.max(r,i)),{left:a,top:c,right:l,bottom:u}}function lr(e,t,n,r){return e?0:Xe(t,n,r)}function Y$(e,t,n){const r=e.options.borderWidth,i=e.borderSkipped,o=$w(r);return{t:lr(i.top,o.top,0,n),r:lr(i.right,o.right,0,t),b:lr(i.bottom,o.bottom,0,n),l:lr(i.left,o.left,0,t)}}function X$(e,t,n){const{enableBorderRadius:r}=e.getProps(["enableBorderRadius"]),i=e.options.borderRadius,o=ti(i),s=Math.min(t,n),a=e.borderSkipped,l=r||J(i);return{topLeft:lr(!l||a.top||a.left,o.topLeft,0,s),topRight:lr(!l||a.top||a.right,o.topRight,0,s),bottomLeft:lr(!l||a.bottom||a.left,o.bottomLeft,0,s),bottomRight:lr(!l||a.bottom||a.right,o.bottomRight,0,s)}}function K$(e){const t=o_(e),n=t.right-t.left,r=t.bottom-t.top,i=Y$(e,n/2,r/2),o=X$(e,n/2,r/2);return{outer:{x:t.left,y:t.top,w:n,h:r,radius:o},inner:{x:t.left+i.l,y:t.top+i.t,w:n-i.l-i.r,h:r-i.t-i.b,radius:{topLeft:Math.max(0,o.topLeft-Math.max(i.t,i.l)),topRight:Math.max(0,o.topRight-Math.max(i.t,i.r)),bottomLeft:Math.max(0,o.bottomLeft-Math.max(i.b,i.l)),bottomRight:Math.max(0,o.bottomRight-Math.max(i.b,i.r))}}}}function Kd(e,t,n,r){const i=t===null,o=n===null,a=e&&!(i&&o)&&o_(e,r);return a&&(i||zn(t,a.left,a.right))&&(o||zn(n,a.top,a.bottom))}function G$(e){return e.topLeft||e.topRight||e.bottomLeft||e.bottomRight}function q$(e,t){e.rect(t.x,t.y,t.w,t.h)}function Gd(e,t,n={}){const r=e.x!==n.x?-t:0,i=e.y!==n.y?-t:0,o=(e.x+e.w!==n.x+n.w?t:0)-r,s=(e.y+e.h!==n.y+n.h?t:0)-i;return{x:e.x+r,y:e.y+i,w:e.w+o,h:e.h+s,radius:e.radius}}class Bl extends sn{constructor(t){super(),this.options=void 0,this.horizontal=void 0,this.base=void 0,this.width=void 0,this.height=void 0,this.inflateAmount=void 0,t&&Object.assign(this,t)}draw(t){const{inflateAmount:n,options:{borderColor:r,backgroundColor:i}}=this,{inner:o,outer:s}=K$(this),a=G$(s.radius)?ta:q$;t.save(),(s.w!==o.w||s.h!==o.h)&&(t.beginPath(),a(t,Gd(s,n,o)),t.clip(),a(t,Gd(o,-n,s)),t.fillStyle=r,t.fill("evenodd")),t.beginPath(),a(t,Gd(o,n)),t.fillStyle=i,t.fill(),t.restore()}inRange(t,n,r){return Kd(this,t,n,r)}inXRange(t,n){return Kd(this,t,null,n)}inYRange(t,n){return Kd(this,null,t,n)}getCenterPoint(t){const{x:n,y:r,base:i,horizontal:o}=this.getProps(["x","y","base","horizontal"],t);return{x:o?(n+i)/2:n,y:o?r:(r+i)/2}}getRange(t){return t==="x"?this.width/2:this.height/2}}z(Bl,"id","bar"),z(Bl,"defaults",{borderSkipped:"start",borderWidth:0,borderRadius:0,inflateAmount:"auto",pointStyle:void 0}),z(Bl,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});var Q$=Object.freeze({__proto__:null,ArcElement:rs,BarElement:Bl,LineElement:ar,PointElement:Fl});const Ph=["rgb(54, 162, 235)","rgb(255, 99, 132)","rgb(255, 159, 64)","rgb(255, 205, 86)","rgb(75, 192, 192)","rgb(153, 102, 255)","rgb(201, 203, 207)"],Dv=Ph.map(e=>e.replace("rgb(","rgba(").replace(")",", 0.5)"));function s_(e){return Ph[e%Ph.length]}function a_(e){return Dv[e%Dv.length]}function Z$(e,t){return e.borderColor=s_(t),e.backgroundColor=a_(t),++t}function J$(e,t){return e.backgroundColor=e.data.map(()=>s_(t++)),t}function eR(e,t){return e.backgroundColor=e.data.map(()=>a_(t++)),t}function tR(e){let t=0;return(n,r)=>{const i=e.getDatasetMeta(r).controller;i instanceof Jr?t=J$(n,t):i instanceof Cs?t=eR(n,t):i&&(t=Z$(n,t))}}function zv(e){let t;for(t in e)if(e[t].borderColor||e[t].backgroundColor)return!0;return!1}function nR(e){return e&&(e.borderColor||e.backgroundColor)}var rR={id:"colors",defaults:{enabled:!0,forceOverride:!1},beforeLayout(e,t,n){if(!n.enabled)return;const{data:{datasets:r},options:i}=e.config,{elements:o}=i;if(!n.forceOverride&&(zv(r)||nR(i)||o&&zv(o)))return;const s=tR(e);r.forEach(s)}};function iR(e,t,n,r,i){const o=i.samples||r;if(o>=n)return e.slice(t,t+n);const s=[],a=(n-2)/(o-2);let l=0;const c=t+n-1;let u=t,d,f,g,v,y;for(s[l++]=e[u],d=0;d<o-2;d++){let p=0,m=0,x;const b=Math.floor((d+1)*a)+1+t,w=Math.min(Math.floor((d+2)*a)+1,n)+t,_=w-b;for(x=b;x<w;x++)p+=e[x].x,m+=e[x].y;p/=_,m/=_;const k=Math.floor(d*a)+1+t,P=Math.min(Math.floor((d+1)*a)+1,n)+t,{x:M,y:E}=e[u];for(g=v=-1,x=k;x<P;x++)v=.5*Math.abs((M-p)*(e[x].y-E)-(M-e[x].x)*(m-E)),v>g&&(g=v,f=e[x],y=x);s[l++]=f,u=y}return s[l++]=e[c],s}function oR(e,t,n,r){let i=0,o=0,s,a,l,c,u,d,f,g,v,y;const p=[],m=t+n-1,x=e[t].x,w=e[m].x-x;for(s=t;s<t+n;++s){a=e[s],l=(a.x-x)/w*r,c=a.y;const _=l|0;if(_===u)c<v?(v=c,d=s):c>y&&(y=c,f=s),i=(o*i+a.x)/++o;else{const k=s-1;if(!te(d)&&!te(f)){const P=Math.min(d,f),M=Math.max(d,f);P!==g&&P!==k&&p.push({...e[P],x:i}),M!==g&&M!==k&&p.push({...e[M],x:i})}s>0&&k!==g&&p.push(e[k]),p.push(a),u=_,o=0,v=y=c,d=f=g=s}}return p}function l_(e){if(e._decimated){const t=e._data;delete e._decimated,delete e._data,Object.defineProperty(e,"data",{configurable:!0,enumerable:!0,writable:!0,value:t})}}function Iv(e){e.data.datasets.forEach(t=>{l_(t)})}function sR(e,t){const n=t.length;let r=0,i;const{iScale:o}=e,{min:s,max:a,minDefined:l,maxDefined:c}=o.getUserBounds();return l&&(r=Xe(In(t,o.axis,s).lo,0,n-1)),c?i=Xe(In(t,o.axis,a).hi+1,r,n)-r:i=n-r,{start:r,count:i}}var aR={id:"decimation",defaults:{algorithm:"min-max",enabled:!1},beforeElementsUpdate:(e,t,n)=>{if(!n.enabled){Iv(e);return}const r=e.width;e.data.datasets.forEach((i,o)=>{const{_data:s,indexAxis:a}=i,l=e.getDatasetMeta(o),c=s||i.data;if(ts([a,e.options.indexAxis])==="y"||!l.controller.supportsDecimation)return;const u=e.scales[l.xAxisID];if(u.type!=="linear"&&u.type!=="time"||e.options.parsing)return;let{start:d,count:f}=sR(l,c);const g=n.threshold||4*r;if(f<=g){l_(i);return}te(s)&&(i._data=c,delete i.data,Object.defineProperty(i,"data",{configurable:!0,enumerable:!0,get:function(){return this._decimated},set:function(y){this._data=y}}));let v;switch(n.algorithm){case"lttb":v=iR(c,d,f,r,n);break;case"min-max":v=oR(c,d,f,r);break;default:throw new Error(`Unsupported decimation algorithm '${n.algorithm}'`)}i._decimated=v})},destroy(e){Iv(e)}};function lR(e,t,n){const r=e.segments,i=e.points,o=t.points,s=[];for(const a of r){let{start:l,end:c}=a;c=qg(l,c,i);const u=Oh(n,i[l],i[c],a.loop);if(!t.segments){s.push({source:a,target:u,start:i[l],end:i[c]});continue}const d=Hw(t,u);for(const f of d){const g=Oh(n,o[f.start],o[f.end],f.loop),v=Vw(a,i,g);for(const y of v)s.push({source:y,target:f,start:{[n]:jv(u,g,"start",Math.max)},end:{[n]:jv(u,g,"end",Math.min)}})}}return s}function Oh(e,t,n,r){if(r)return;let i=t[e],o=n[e];return e==="angle"&&(i=Nt(i),o=Nt(o)),{property:e,start:i,end:o}}function cR(e,t){const{x:n=null,y:r=null}=e||{},i=t.points,o=[];return t.segments.forEach(({start:s,end:a})=>{a=qg(s,a,i);const l=i[s],c=i[a];r!==null?(o.push({x:l.x,y:r}),o.push({x:c.x,y:r})):n!==null&&(o.push({x:n,y:l.y}),o.push({x:n,y:c.y}))}),o}function qg(e,t,n){for(;t>e;t--){const r=n[t];if(!isNaN(r.x)&&!isNaN(r.y))break}return t}function jv(e,t,n,r){return e&&t?r(e[n],t[n]):e?e[n]:t?t[n]:0}function c_(e,t){let n=[],r=!1;return we(e)?(r=!0,n=e):n=cR(e,t),n.length?new ar({points:n,options:{tension:0},_loop:r,_fullLoop:r}):null}function Fv(e){return e&&e.fill!==!1}function uR(e,t,n){let i=e[t].fill;const o=[t];let s;if(!n)return i;for(;i!==!1&&o.indexOf(i)===-1;){if(!Re(i))return i;if(s=e[i],!s)return!1;if(s.visible)return i;o.push(i),i=s.fill}return!1}function dR(e,t,n){const r=gR(e);if(J(r))return isNaN(r.value)?!1:r;let i=parseFloat(r);return Re(i)&&Math.floor(i)===i?fR(r[0],t,i,n):["origin","start","end","stack","shape"].indexOf(r)>=0&&r}function fR(e,t,n,r){return(e==="-"||e==="+")&&(n=t+n),n===t||n<0||n>=r?!1:n}function hR(e,t){let n=null;return e==="start"?n=t.bottom:e==="end"?n=t.top:J(e)?n=t.getPixelForValue(e.value):t.getBasePixel&&(n=t.getBasePixel()),n}function pR(e,t,n){let r;return e==="start"?r=n:e==="end"?r=t.options.reverse?t.min:t.max:J(e)?r=e.value:r=t.getBaseValue(),r}function gR(e){const t=e.options,n=t.fill;let r=X(n&&n.target,n);return r===void 0&&(r=!!t.backgroundColor),r===!1||r===null?!1:r===!0?"origin":r}function mR(e){const{scale:t,index:n,line:r}=e,i=[],o=r.segments,s=r.points,a=vR(t,n);a.push(c_({x:null,y:t.bottom},r));for(let l=0;l<o.length;l++){const c=o[l];for(let u=c.start;u<=c.end;u++)yR(i,s[u],a)}return new ar({points:i,options:{}})}function vR(e,t){const n=[],r=e.getMatchingVisibleMetas("line");for(let i=0;i<r.length;i++){const o=r[i];if(o.index===t)break;o.hidden||n.unshift(o.dataset)}return n}function yR(e,t,n){const r=[];for(let i=0;i<n.length;i++){const o=n[i],{first:s,last:a,point:l}=xR(o,t,"x");if(!(!l||s&&a)){if(s)r.unshift(l);else if(e.push(l),!a)break}}e.push(...r)}function xR(e,t,n){const r=e.interpolate(t,n);if(!r)return{};const i=r[n],o=e.segments,s=e.points;let a=!1,l=!1;for(let c=0;c<o.length;c++){const u=o[c],d=s[u.start][n],f=s[u.end][n];if(zn(i,d,f)){a=i===d,l=i===f;break}}return{first:a,last:l,point:r}}class u_{constructor(t){this.x=t.x,this.y=t.y,this.radius=t.radius}pathSegment(t,n,r){const{x:i,y:o,radius:s}=this;return n=n||{start:0,end:Se},t.arc(i,o,s,n.end,n.start,!0),!r.bounds}interpolate(t){const{x:n,y:r,radius:i}=this,o=t.angle;return{x:n+Math.cos(o)*i,y:r+Math.sin(o)*i,angle:o}}}function bR(e){const{chart:t,fill:n,line:r}=e;if(Re(n))return wR(t,n);if(n==="stack")return mR(e);if(n==="shape")return!0;const i=_R(e);return i instanceof u_?i:c_(i,r)}function wR(e,t){const n=e.getDatasetMeta(t);return n&&e.isDatasetVisible(t)?n.dataset:null}function _R(e){return(e.scale||{}).getPointPositionForValue?kR(e):SR(e)}function SR(e){const{scale:t={},fill:n}=e,r=hR(n,t);if(Re(r)){const i=t.isHorizontal();return{x:i?r:null,y:i?null:r}}return null}function kR(e){const{scale:t,fill:n}=e,r=t.options,i=t.getLabels().length,o=r.reverse?t.max:t.min,s=pR(n,t,o),a=[];if(r.grid.circular){const l=t.getPointPositionForValue(0,o);return new u_({x:l.x,y:l.y,radius:t.getDistanceFromCenterForValue(s)})}for(let l=0;l<i;++l)a.push(t.getPointPositionForValue(l,s));return a}function qd(e,t,n){const r=bR(t),{line:i,scale:o,axis:s}=t,a=i.options,l=a.fill,c=a.backgroundColor,{above:u=c,below:d=c}=l||{};r&&i.points.length&&(Vu(e,n),CR(e,{line:i,target:r,above:u,below:d,area:n,scale:o,axis:s}),Hu(e))}function CR(e,t){const{line:n,target:r,above:i,below:o,area:s,scale:a}=t,l=n._loop?"angle":t.axis;e.save(),l==="x"&&o!==i&&(Bv(e,r,s.top),Wv(e,{line:n,target:r,color:i,scale:a,property:l}),e.restore(),e.save(),Bv(e,r,s.bottom)),Wv(e,{line:n,target:r,color:o,scale:a,property:l}),e.restore()}function Bv(e,t,n){const{segments:r,points:i}=t;let o=!0,s=!1;e.beginPath();for(const a of r){const{start:l,end:c}=a,u=i[l],d=i[qg(l,c,i)];o?(e.moveTo(u.x,u.y),o=!1):(e.lineTo(u.x,n),e.lineTo(u.x,u.y)),s=!!t.pathSegment(e,a,{move:s}),s?e.closePath():e.lineTo(d.x,n)}e.lineTo(t.first().x,n),e.closePath(),e.clip()}function Wv(e,t){const{line:n,target:r,property:i,color:o,scale:s}=t,a=lR(n,r,i);for(const{source:l,target:c,start:u,end:d}of a){const{style:{backgroundColor:f=o}={}}=l,g=r!==!0;e.save(),e.fillStyle=f,PR(e,s,g&&Oh(i,u,d)),e.beginPath();const v=!!n.pathSegment(e,l);let y;if(g){v?e.closePath():Vv(e,r,d,i);const p=!!r.pathSegment(e,c,{move:v,reverse:!0});y=v&&p,y||Vv(e,r,u,i)}e.closePath(),e.fill(y?"evenodd":"nonzero"),e.restore()}}function PR(e,t,n){const{top:r,bottom:i}=t.chart.chartArea,{property:o,start:s,end:a}=n||{};o==="x"&&(e.beginPath(),e.rect(s,r,a-s,i-r),e.clip())}function Vv(e,t,n,r){const i=t.interpolate(n,r);i&&e.lineTo(i.x,i.y)}var OR={id:"filler",afterDatasetsUpdate(e,t,n){const r=(e.data.datasets||[]).length,i=[];let o,s,a,l;for(s=0;s<r;++s)o=e.getDatasetMeta(s),a=o.dataset,l=null,a&&a.options&&a instanceof ar&&(l={visible:e.isDatasetVisible(s),index:s,fill:dR(a,s,r),chart:e,axis:o.controller.options.indexAxis,scale:o.vScale,line:a}),o.$filler=l,i.push(l);for(s=0;s<r;++s)l=i[s],!(!l||l.fill===!1)&&(l.fill=uR(i,s,n.propagate))},beforeDraw(e,t,n){const r=n.drawTime==="beforeDraw",i=e.getSortedVisibleDatasetMetas(),o=e.chartArea;for(let s=i.length-1;s>=0;--s){const a=i[s].$filler;!a||(a.line.updateControlPoints(o,a.axis),r&&a.fill&&qd(e.ctx,a,o))}},beforeDatasetsDraw(e,t,n){if(n.drawTime!=="beforeDatasetsDraw")return;const r=e.getSortedVisibleDatasetMetas();for(let i=r.length-1;i>=0;--i){const o=r[i].$filler;Fv(o)&&qd(e.ctx,o,e.chartArea)}},beforeDatasetDraw(e,t,n){const r=t.meta.$filler;!Fv(r)||n.drawTime!=="beforeDatasetDraw"||qd(e.ctx,r,e.chartArea)},defaults:{propagate:!0,drawTime:"beforeDatasetDraw"}};const Hv=(e,t)=>{let{boxHeight:n=t,boxWidth:r=t}=e;return e.usePointStyle&&(n=Math.min(n,t),r=e.pointStyleWidth||Math.min(r,t)),{boxWidth:r,boxHeight:n,itemHeight:Math.max(t,n)}},MR=(e,t)=>e!==null&&t!==null&&e.datasetIndex===t.datasetIndex&&e.index===t.index;class Uv extends sn{constructor(t){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,n,r){this.maxWidth=t,this.maxHeight=n,this._margins=r,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){const t=this.options.labels||{};let n=xe(t.generateLabels,[this.chart],this)||[];t.filter&&(n=n.filter(r=>t.filter(r,this.chart.data))),t.sort&&(n=n.sort((r,i)=>t.sort(r,i,this.chart.data))),this.options.reverse&&n.reverse(),this.legendItems=n}fit(){const{options:t,ctx:n}=this;if(!t.display){this.width=this.height=0;return}const r=t.labels,i=Ue(r.font),o=i.size,s=this._computeTitleHeight(),{boxWidth:a,itemHeight:l}=Hv(r,o);let c,u;n.font=i.string,this.isHorizontal()?(c=this.maxWidth,u=this._fitRows(s,o,a,l)+10):(u=this.maxHeight,c=this._fitCols(s,i,a,l)+10),this.width=Math.min(c,t.maxWidth||this.maxWidth),this.height=Math.min(u,t.maxHeight||this.maxHeight)}_fitRows(t,n,r,i){const{ctx:o,maxWidth:s,options:{labels:{padding:a}}}=this,l=this.legendHitBoxes=[],c=this.lineWidths=[0],u=i+a;let d=t;o.textAlign="left",o.textBaseline="middle";let f=-1,g=-u;return this.legendItems.forEach((v,y)=>{const p=r+n/2+o.measureText(v.text).width;(y===0||c[c.length-1]+p+2*a>s)&&(d+=u,c[c.length-(y>0?0:1)]=0,g+=u,f++),l[y]={left:0,top:g,row:f,width:p,height:i},c[c.length-1]+=p+a}),d}_fitCols(t,n,r,i){const{ctx:o,maxHeight:s,options:{labels:{padding:a}}}=this,l=this.legendHitBoxes=[],c=this.columnSizes=[],u=s-t;let d=a,f=0,g=0,v=0,y=0;return this.legendItems.forEach((p,m)=>{const{itemWidth:x,itemHeight:b}=ER(r,n,o,p,i);m>0&&g+b+2*a>u&&(d+=f+a,c.push({width:f,height:g}),v+=f+a,y++,f=g=0),l[m]={left:v,top:g,col:y,width:x,height:b},f=Math.max(f,x),g+=b+a}),d+=f,c.push({width:f,height:g}),d}adjustHitBoxes(){if(!this.options.display)return;const t=this._computeTitleHeight(),{legendHitBoxes:n,options:{align:r,labels:{padding:i},rtl:o}}=this,s=eo(o,this.left,this.width);if(this.isHorizontal()){let a=0,l=at(r,this.left+i,this.right-this.lineWidths[a]);for(const c of n)a!==c.row&&(a=c.row,l=at(r,this.left+i,this.right-this.lineWidths[a])),c.top+=this.top+t+i,c.left=s.leftForLtr(s.x(l),c.width),l+=c.width+i}else{let a=0,l=at(r,this.top+t+i,this.bottom-this.columnSizes[a].height);for(const c of n)c.col!==a&&(a=c.col,l=at(r,this.top+t+i,this.bottom-this.columnSizes[a].height)),c.top=l,c.left+=this.left+i,c.left=s.leftForLtr(s.x(c.left),c.width),l+=c.height+i}}isHorizontal(){return this.options.position==="top"||this.options.position==="bottom"}draw(){if(this.options.display){const t=this.ctx;Vu(t,this),this._draw(),Hu(t)}}_draw(){const{options:t,columnSizes:n,lineWidths:r,ctx:i}=this,{align:o,labels:s}=t,a=Le.color,l=eo(t.rtl,this.left,this.width),c=Ue(s.font),{padding:u}=s,d=c.size,f=d/2;let g;this.drawTitle(),i.textAlign=l.textAlign("left"),i.textBaseline="middle",i.lineWidth=.5,i.font=c.string;const{boxWidth:v,boxHeight:y,itemHeight:p}=Hv(s,d),m=function(k,P,M){if(isNaN(v)||v<=0||isNaN(y)||y<0)return;i.save();const E=X(M.lineWidth,1);if(i.fillStyle=X(M.fillStyle,a),i.lineCap=X(M.lineCap,"butt"),i.lineDashOffset=X(M.lineDashOffset,0),i.lineJoin=X(M.lineJoin,"miter"),i.lineWidth=E,i.strokeStyle=X(M.strokeStyle,a),i.setLineDash(X(M.lineDash,[])),s.usePointStyle){const A={radius:y*Math.SQRT2/2,pointStyle:M.pointStyle,rotation:M.rotation,borderWidth:E},j=l.xPlus(k,v/2),I=P+f;Aw(i,A,j,I,s.pointStyleWidth&&v)}else{const A=P+Math.max((d-y)/2,0),j=l.leftForLtr(k,v),I=ti(M.borderRadius);i.beginPath(),Object.values(I).some(W=>W!==0)?ta(i,{x:j,y:A,w:v,h:y,radius:I}):i.rect(j,A,v,y),i.fill(),E!==0&&i.stroke()}i.restore()},x=function(k,P,M){di(i,M.text,k,P+p/2,c,{strikethrough:M.hidden,textAlign:l.textAlign(M.textAlign)})},b=this.isHorizontal(),w=this._computeTitleHeight();b?g={x:at(o,this.left+u,this.right-r[0]),y:this.top+u+w,line:0}:g={x:this.left+u,y:at(o,this.top+w+u,this.bottom-n[0].height),line:0},Fw(this.ctx,t.textDirection);const _=p+u;this.legendItems.forEach((k,P)=>{i.strokeStyle=k.fontColor,i.fillStyle=k.fontColor;const M=i.measureText(k.text).width,E=l.textAlign(k.textAlign||(k.textAlign=s.textAlign)),A=v+f+M;let j=g.x,I=g.y;l.setWidth(this.width),b?P>0&&j+A+u>this.right&&(I=g.y+=_,g.line++,j=g.x=at(o,this.left+u,this.right-r[g.line])):P>0&&I+_>this.bottom&&(j=g.x=j+n[g.line].width+u,g.line++,I=g.y=at(o,this.top+w+u,this.bottom-n[g.line].height));const W=l.x(j);if(m(W,I,k),j=qT(E,j+v+f,b?j+A:this.right,t.rtl),x(l.x(j),I,k),b)g.x+=A+u;else if(typeof k.text!="string"){const Z=c.lineHeight;g.y+=d_(k,Z)+u}else g.y+=_}),Bw(this.ctx,t.textDirection)}drawTitle(){const t=this.options,n=t.title,r=Ue(n.font),i=gt(n.padding);if(!n.display)return;const o=eo(t.rtl,this.left,this.width),s=this.ctx,a=n.position,l=r.size/2,c=i.top+l;let u,d=this.left,f=this.width;if(this.isHorizontal())f=Math.max(...this.lineWidths),u=this.top+c,d=at(t.align,d,this.right-f);else{const v=this.columnSizes.reduce((y,p)=>Math.max(y,p.height),0);u=c+at(t.align,this.top,this.bottom-v-t.labels.padding-this._computeTitleHeight())}const g=at(a,d,d+f);s.textAlign=o.textAlign(Bg(a)),s.textBaseline="middle",s.strokeStyle=n.color,s.fillStyle=n.color,s.font=r.string,di(s,n.text,g,u,r)}_computeTitleHeight(){const t=this.options.title,n=Ue(t.font),r=gt(t.padding);return t.display?n.lineHeight+r.height:0}_getLegendItemAt(t,n){let r,i,o;if(zn(t,this.left,this.right)&&zn(n,this.top,this.bottom)){for(o=this.legendHitBoxes,r=0;r<o.length;++r)if(i=o[r],zn(t,i.left,i.left+i.width)&&zn(n,i.top,i.top+i.height))return this.legendItems[r]}return null}handleEvent(t){const n=this.options;if(!AR(t.type,n))return;const r=this._getLegendItemAt(t.x,t.y);if(t.type==="mousemove"||t.type==="mouseout"){const i=this._hoveredItem,o=MR(i,r);i&&!o&&xe(n.onLeave,[t,i,this],this),this._hoveredItem=r,r&&!o&&xe(n.onHover,[t,r,this],this)}else r&&xe(n.onClick,[t,r,this],this)}}function ER(e,t,n,r,i){const o=NR(r,e,t,n),s=TR(i,r,t.lineHeight);return{itemWidth:o,itemHeight:s}}function NR(e,t,n,r){let i=e.text;return i&&typeof i!="string"&&(i=i.reduce((o,s)=>o.length>s.length?o:s)),t+n.size/2+r.measureText(i).width}function TR(e,t,n){let r=e;return typeof t.text!="string"&&(r=d_(t,n)),r}function d_(e,t){const n=e.text?e.text.length:0;return t*n}function AR(e,t){return!!((e==="mousemove"||e==="mouseout")&&(t.onHover||t.onLeave)||t.onClick&&(e==="click"||e==="mouseup"))}var $R={id:"legend",_element:Uv,start(e,t,n){const r=e.legend=new Uv({ctx:e.ctx,options:n,chart:e});dt.configure(e,r,n),dt.addBox(e,r)},stop(e){dt.removeBox(e,e.legend),delete e.legend},beforeUpdate(e,t,n){const r=e.legend;dt.configure(e,r,n),r.options=n},afterUpdate(e){const t=e.legend;t.buildLabels(),t.adjustHitBoxes()},afterEvent(e,t){t.replay||e.legend.handleEvent(t.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(e,t,n){const r=t.datasetIndex,i=n.chart;i.isDatasetVisible(r)?(i.hide(r),t.hidden=!0):(i.show(r),t.hidden=!1)},onHover:null,onLeave:null,labels:{color:e=>e.chart.options.color,boxWidth:40,padding:10,generateLabels(e){const t=e.data.datasets,{labels:{usePointStyle:n,pointStyle:r,textAlign:i,color:o,useBorderRadius:s,borderRadius:a}}=e.legend.options;return e._getSortedDatasetMetas().map(l=>{const c=l.controller.getStyle(n?0:void 0),u=gt(c.borderWidth);return{text:t[l.index].label,fillStyle:c.backgroundColor,fontColor:o,hidden:!l.visible,lineCap:c.borderCapStyle,lineDash:c.borderDash,lineDashOffset:c.borderDashOffset,lineJoin:c.borderJoinStyle,lineWidth:(u.width+u.height)/4,strokeStyle:c.borderColor,pointStyle:r||c.pointStyle,rotation:c.rotation,textAlign:i||c.textAlign,borderRadius:s&&(a||c.borderRadius),datasetIndex:l.index}},this)}},title:{color:e=>e.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:e=>!e.startsWith("on"),labels:{_scriptable:e=>!["generateLabels","filter","sort"].includes(e)}}};class Qg extends sn{constructor(t){super(),this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this._padding=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,n){const r=this.options;if(this.left=0,this.top=0,!r.display){this.width=this.height=this.right=this.bottom=0;return}this.width=this.right=t,this.height=this.bottom=n;const i=we(r.text)?r.text.length:1;this._padding=gt(r.padding);const o=i*Ue(r.font).lineHeight+this._padding.height;this.isHorizontal()?this.height=o:this.width=o}isHorizontal(){const t=this.options.position;return t==="top"||t==="bottom"}_drawArgs(t){const{top:n,left:r,bottom:i,right:o,options:s}=this,a=s.align;let l=0,c,u,d;return this.isHorizontal()?(u=at(a,r,o),d=n+t,c=o-r):(s.position==="left"?(u=r+t,d=at(a,i,n),l=ke*-.5):(u=o-t,d=at(a,n,i),l=ke*.5),c=i-n),{titleX:u,titleY:d,maxWidth:c,rotation:l}}draw(){const t=this.ctx,n=this.options;if(!n.display)return;const r=Ue(n.font),o=r.lineHeight/2+this._padding.top,{titleX:s,titleY:a,maxWidth:l,rotation:c}=this._drawArgs(o);di(t,n.text,0,0,r,{color:n.color,maxWidth:l,rotation:c,textAlign:Bg(n.align),textBaseline:"middle",translation:[s,a]})}}function RR(e,t){const n=new Qg({ctx:e.ctx,options:t,chart:e});dt.configure(e,n,t),dt.addBox(e,n),e.titleBlock=n}var LR={id:"title",_element:Qg,start(e,t,n){RR(e,n)},stop(e){const t=e.titleBlock;dt.removeBox(e,t),delete e.titleBlock},beforeUpdate(e,t,n){const r=e.titleBlock;dt.configure(e,r,n),r.options=n},defaults:{align:"center",display:!1,font:{weight:"bold"},fullSize:!0,padding:10,position:"top",text:"",weight:2e3},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const fl=new WeakMap;var DR={id:"subtitle",start(e,t,n){const r=new Qg({ctx:e.ctx,options:n,chart:e});dt.configure(e,r,n),dt.addBox(e,r),fl.set(e,r)},stop(e){dt.removeBox(e,fl.get(e)),fl.delete(e)},beforeUpdate(e,t,n){const r=fl.get(e);dt.configure(e,r,n),r.options=n},defaults:{align:"center",display:!1,font:{weight:"normal"},fullSize:!0,padding:0,position:"top",text:"",weight:1500},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const is={average(e){if(!e.length)return!1;let t,n,r=new Set,i=0,o=0;for(t=0,n=e.length;t<n;++t){const a=e[t].element;if(a&&a.hasValue()){const l=a.tooltipPosition();r.add(l.x),i+=l.y,++o}}return{x:[...r].reduce((a,l)=>a+l)/r.size,y:i/o}},nearest(e,t){if(!e.length)return!1;let n=t.x,r=t.y,i=Number.POSITIVE_INFINITY,o,s,a;for(o=0,s=e.length;o<s;++o){const l=e[o].element;if(l&&l.hasValue()){const c=l.getCenterPoint(),u=xh(t,c);u<i&&(i=u,a=l)}}if(a){const l=a.tooltipPosition();n=l.x,r=l.y}return{x:n,y:r}}};function un(e,t){return t&&(we(t)?Array.prototype.push.apply(e,t):e.push(t)),e}function Tn(e){return(typeof e=="string"||e instanceof String)&&e.indexOf(`
`)>-1?e.split(`
`):e}function zR(e,t){const{element:n,datasetIndex:r,index:i}=t,o=e.getDatasetMeta(r).controller,{label:s,value:a}=o.getLabelAndValue(i);return{chart:e,label:s,parsed:o.getParsed(i),raw:e.data.datasets[r].data[i],formattedValue:a,dataset:o.getDataset(),dataIndex:i,datasetIndex:r,element:n}}function Yv(e,t){const n=e.chart.ctx,{body:r,footer:i,title:o}=e,{boxWidth:s,boxHeight:a}=t,l=Ue(t.bodyFont),c=Ue(t.titleFont),u=Ue(t.footerFont),d=o.length,f=i.length,g=r.length,v=gt(t.padding);let y=v.height,p=0,m=r.reduce((w,_)=>w+_.before.length+_.lines.length+_.after.length,0);if(m+=e.beforeBody.length+e.afterBody.length,d&&(y+=d*c.lineHeight+(d-1)*t.titleSpacing+t.titleMarginBottom),m){const w=t.displayColors?Math.max(a,l.lineHeight):l.lineHeight;y+=g*w+(m-g)*l.lineHeight+(m-1)*t.bodySpacing}f&&(y+=t.footerMarginTop+f*u.lineHeight+(f-1)*t.footerSpacing);let x=0;const b=function(w){p=Math.max(p,n.measureText(w).width+x)};return n.save(),n.font=c.string,he(e.title,b),n.font=l.string,he(e.beforeBody.concat(e.afterBody),b),x=t.displayColors?s+2+t.boxPadding:0,he(r,w=>{he(w.before,b),he(w.lines,b),he(w.after,b)}),x=0,n.font=u.string,he(e.footer,b),n.restore(),p+=v.width,{width:p,height:y}}function IR(e,t){const{y:n,height:r}=t;return n<r/2?"top":n>e.height-r/2?"bottom":"center"}function jR(e,t,n,r){const{x:i,width:o}=r,s=n.caretSize+n.caretPadding;if(e==="left"&&i+o+s>t.width||e==="right"&&i-o-s<0)return!0}function FR(e,t,n,r){const{x:i,width:o}=n,{width:s,chartArea:{left:a,right:l}}=e;let c="center";return r==="center"?c=i<=(a+l)/2?"left":"right":i<=o/2?c="left":i>=s-o/2&&(c="right"),jR(c,e,t,n)&&(c="center"),c}function Xv(e,t,n){const r=n.yAlign||t.yAlign||IR(e,n);return{xAlign:n.xAlign||t.xAlign||FR(e,t,n,r),yAlign:r}}function BR(e,t){let{x:n,width:r}=e;return t==="right"?n-=r:t==="center"&&(n-=r/2),n}function WR(e,t,n){let{y:r,height:i}=e;return t==="top"?r+=n:t==="bottom"?r-=i+n:r-=i/2,r}function Kv(e,t,n,r){const{caretSize:i,caretPadding:o,cornerRadius:s}=e,{xAlign:a,yAlign:l}=n,c=i+o,{topLeft:u,topRight:d,bottomLeft:f,bottomRight:g}=ti(s);let v=BR(t,a);const y=WR(t,l,c);return l==="center"?a==="left"?v+=c:a==="right"&&(v-=c):a==="left"?v-=Math.max(u,f)+i:a==="right"&&(v+=Math.max(d,g)+i),{x:Xe(v,0,r.width-t.width),y:Xe(y,0,r.height-t.height)}}function hl(e,t,n){const r=gt(n.padding);return t==="center"?e.x+e.width/2:t==="right"?e.x+e.width-r.right:e.x+r.left}function Gv(e){return un([],Tn(e))}function VR(e,t,n){return Ir(e,{tooltip:t,tooltipItems:n,type:"tooltip"})}function qv(e,t){const n=t&&t.dataset&&t.dataset.tooltip&&t.dataset.tooltip.callbacks;return n?e.override(n):e}const f_={beforeTitle:Mn,title(e){if(e.length>0){const t=e[0],n=t.chart.data.labels,r=n?n.length:0;if(this&&this.options&&this.options.mode==="dataset")return t.dataset.label||"";if(t.label)return t.label;if(r>0&&t.dataIndex<r)return n[t.dataIndex]}return""},afterTitle:Mn,beforeBody:Mn,beforeLabel:Mn,label(e){if(this&&this.options&&this.options.mode==="dataset")return e.label+": "+e.formattedValue||e.formattedValue;let t=e.dataset.label||"";t&&(t+=": ");const n=e.formattedValue;return te(n)||(t+=n),t},labelColor(e){const n=e.chart.getDatasetMeta(e.datasetIndex).controller.getStyle(e.dataIndex);return{borderColor:n.borderColor,backgroundColor:n.backgroundColor,borderWidth:n.borderWidth,borderDash:n.borderDash,borderDashOffset:n.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(e){const n=e.chart.getDatasetMeta(e.datasetIndex).controller.getStyle(e.dataIndex);return{pointStyle:n.pointStyle,rotation:n.rotation}},afterLabel:Mn,afterBody:Mn,beforeFooter:Mn,footer:Mn,afterFooter:Mn};function St(e,t,n,r){const i=e[t].call(n,r);return typeof i=="undefined"?f_[t].call(n,r):i}class Mh extends sn{constructor(t){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=t.chart,this.options=t.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(t){this.options=t,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){const t=this._cachedAnimations;if(t)return t;const n=this.chart,r=this.options.setContext(this.getContext()),i=r.enabled&&n.options.animation&&r.animations,o=new Uw(this.chart,i);return i._cacheable&&(this._cachedAnimations=Object.freeze(o)),o}getContext(){return this.$context||(this.$context=VR(this.chart.getContext(),this,this._tooltipItems))}getTitle(t,n){const{callbacks:r}=n,i=St(r,"beforeTitle",this,t),o=St(r,"title",this,t),s=St(r,"afterTitle",this,t);let a=[];return a=un(a,Tn(i)),a=un(a,Tn(o)),a=un(a,Tn(s)),a}getBeforeBody(t,n){return Gv(St(n.callbacks,"beforeBody",this,t))}getBody(t,n){const{callbacks:r}=n,i=[];return he(t,o=>{const s={before:[],lines:[],after:[]},a=qv(r,o);un(s.before,Tn(St(a,"beforeLabel",this,o))),un(s.lines,St(a,"label",this,o)),un(s.after,Tn(St(a,"afterLabel",this,o))),i.push(s)}),i}getAfterBody(t,n){return Gv(St(n.callbacks,"afterBody",this,t))}getFooter(t,n){const{callbacks:r}=n,i=St(r,"beforeFooter",this,t),o=St(r,"footer",this,t),s=St(r,"afterFooter",this,t);let a=[];return a=un(a,Tn(i)),a=un(a,Tn(o)),a=un(a,Tn(s)),a}_createItems(t){const n=this._active,r=this.chart.data,i=[],o=[],s=[];let a=[],l,c;for(l=0,c=n.length;l<c;++l)a.push(zR(this.chart,n[l]));return t.filter&&(a=a.filter((u,d,f)=>t.filter(u,d,f,r))),t.itemSort&&(a=a.sort((u,d)=>t.itemSort(u,d,r))),he(a,u=>{const d=qv(t.callbacks,u);i.push(St(d,"labelColor",this,u)),o.push(St(d,"labelPointStyle",this,u)),s.push(St(d,"labelTextColor",this,u))}),this.labelColors=i,this.labelPointStyles=o,this.labelTextColors=s,this.dataPoints=a,a}update(t,n){const r=this.options.setContext(this.getContext()),i=this._active;let o,s=[];if(!i.length)this.opacity!==0&&(o={opacity:0});else{const a=is[r.position].call(this,i,this._eventPosition);s=this._createItems(r),this.title=this.getTitle(s,r),this.beforeBody=this.getBeforeBody(s,r),this.body=this.getBody(s,r),this.afterBody=this.getAfterBody(s,r),this.footer=this.getFooter(s,r);const l=this._size=Yv(this,r),c=Object.assign({},a,l),u=Xv(this.chart,r,c),d=Kv(r,c,u,this.chart);this.xAlign=u.xAlign,this.yAlign=u.yAlign,o={opacity:1,x:d.x,y:d.y,width:l.width,height:l.height,caretX:a.x,caretY:a.y}}this._tooltipItems=s,this.$context=void 0,o&&this._resolveAnimations().update(this,o),t&&r.external&&r.external.call(this,{chart:this.chart,tooltip:this,replay:n})}drawCaret(t,n,r,i){const o=this.getCaretPosition(t,r,i);n.lineTo(o.x1,o.y1),n.lineTo(o.x2,o.y2),n.lineTo(o.x3,o.y3)}getCaretPosition(t,n,r){const{xAlign:i,yAlign:o}=this,{caretSize:s,cornerRadius:a}=r,{topLeft:l,topRight:c,bottomLeft:u,bottomRight:d}=ti(a),{x:f,y:g}=t,{width:v,height:y}=n;let p,m,x,b,w,_;return o==="center"?(w=g+y/2,i==="left"?(p=f,m=p-s,b=w+s,_=w-s):(p=f+v,m=p+s,b=w-s,_=w+s),x=p):(i==="left"?m=f+Math.max(l,u)+s:i==="right"?m=f+v-Math.max(c,d)-s:m=this.caretX,o==="top"?(b=g,w=b-s,p=m-s,x=m+s):(b=g+y,w=b+s,p=m+s,x=m-s),_=b),{x1:p,x2:m,x3:x,y1:b,y2:w,y3:_}}drawTitle(t,n,r){const i=this.title,o=i.length;let s,a,l;if(o){const c=eo(r.rtl,this.x,this.width);for(t.x=hl(this,r.titleAlign,r),n.textAlign=c.textAlign(r.titleAlign),n.textBaseline="middle",s=Ue(r.titleFont),a=r.titleSpacing,n.fillStyle=r.titleColor,n.font=s.string,l=0;l<o;++l)n.fillText(i[l],c.x(t.x),t.y+s.lineHeight/2),t.y+=s.lineHeight+a,l+1===o&&(t.y+=r.titleMarginBottom-a)}}_drawColorBox(t,n,r,i,o){const s=this.labelColors[r],a=this.labelPointStyles[r],{boxHeight:l,boxWidth:c}=o,u=Ue(o.bodyFont),d=hl(this,"left",o),f=i.x(d),g=l<u.lineHeight?(u.lineHeight-l)/2:0,v=n.y+g;if(o.usePointStyle){const y={radius:Math.min(c,l)/2,pointStyle:a.pointStyle,rotation:a.rotation,borderWidth:1},p=i.leftForLtr(f,c)+c/2,m=v+l/2;t.strokeStyle=o.multiKeyBackground,t.fillStyle=o.multiKeyBackground,wh(t,y,p,m),t.strokeStyle=s.borderColor,t.fillStyle=s.backgroundColor,wh(t,y,p,m)}else{t.lineWidth=J(s.borderWidth)?Math.max(...Object.values(s.borderWidth)):s.borderWidth||1,t.strokeStyle=s.borderColor,t.setLineDash(s.borderDash||[]),t.lineDashOffset=s.borderDashOffset||0;const y=i.leftForLtr(f,c),p=i.leftForLtr(i.xPlus(f,1),c-2),m=ti(s.borderRadius);Object.values(m).some(x=>x!==0)?(t.beginPath(),t.fillStyle=o.multiKeyBackground,ta(t,{x:y,y:v,w:c,h:l,radius:m}),t.fill(),t.stroke(),t.fillStyle=s.backgroundColor,t.beginPath(),ta(t,{x:p,y:v+1,w:c-2,h:l-2,radius:m}),t.fill()):(t.fillStyle=o.multiKeyBackground,t.fillRect(y,v,c,l),t.strokeRect(y,v,c,l),t.fillStyle=s.backgroundColor,t.fillRect(p,v+1,c-2,l-2))}t.fillStyle=this.labelTextColors[r]}drawBody(t,n,r){const{body:i}=this,{bodySpacing:o,bodyAlign:s,displayColors:a,boxHeight:l,boxWidth:c,boxPadding:u}=r,d=Ue(r.bodyFont);let f=d.lineHeight,g=0;const v=eo(r.rtl,this.x,this.width),y=function(M){n.fillText(M,v.x(t.x+g),t.y+f/2),t.y+=f+o},p=v.textAlign(s);let m,x,b,w,_,k,P;for(n.textAlign=s,n.textBaseline="middle",n.font=d.string,t.x=hl(this,p,r),n.fillStyle=r.bodyColor,he(this.beforeBody,y),g=a&&p!=="right"?s==="center"?c/2+u:c+2+u:0,w=0,k=i.length;w<k;++w){for(m=i[w],x=this.labelTextColors[w],n.fillStyle=x,he(m.before,y),b=m.lines,a&&b.length&&(this._drawColorBox(n,t,w,v,r),f=Math.max(d.lineHeight,l)),_=0,P=b.length;_<P;++_)y(b[_]),f=d.lineHeight;he(m.after,y)}g=0,f=d.lineHeight,he(this.afterBody,y),t.y-=o}drawFooter(t,n,r){const i=this.footer,o=i.length;let s,a;if(o){const l=eo(r.rtl,this.x,this.width);for(t.x=hl(this,r.footerAlign,r),t.y+=r.footerMarginTop,n.textAlign=l.textAlign(r.footerAlign),n.textBaseline="middle",s=Ue(r.footerFont),n.fillStyle=r.footerColor,n.font=s.string,a=0;a<o;++a)n.fillText(i[a],l.x(t.x),t.y+s.lineHeight/2),t.y+=s.lineHeight+r.footerSpacing}}drawBackground(t,n,r,i){const{xAlign:o,yAlign:s}=this,{x:a,y:l}=t,{width:c,height:u}=r,{topLeft:d,topRight:f,bottomLeft:g,bottomRight:v}=ti(i.cornerRadius);n.fillStyle=i.backgroundColor,n.strokeStyle=i.borderColor,n.lineWidth=i.borderWidth,n.beginPath(),n.moveTo(a+d,l),s==="top"&&this.drawCaret(t,n,r,i),n.lineTo(a+c-f,l),n.quadraticCurveTo(a+c,l,a+c,l+f),s==="center"&&o==="right"&&this.drawCaret(t,n,r,i),n.lineTo(a+c,l+u-v),n.quadraticCurveTo(a+c,l+u,a+c-v,l+u),s==="bottom"&&this.drawCaret(t,n,r,i),n.lineTo(a+g,l+u),n.quadraticCurveTo(a,l+u,a,l+u-g),s==="center"&&o==="left"&&this.drawCaret(t,n,r,i),n.lineTo(a,l+d),n.quadraticCurveTo(a,l,a+d,l),n.closePath(),n.fill(),i.borderWidth>0&&n.stroke()}_updateAnimationTarget(t){const n=this.chart,r=this.$animations,i=r&&r.x,o=r&&r.y;if(i||o){const s=is[t.position].call(this,this._active,this._eventPosition);if(!s)return;const a=this._size=Yv(this,t),l=Object.assign({},s,this._size),c=Xv(n,t,l),u=Kv(t,l,c,n);(i._to!==u.x||o._to!==u.y)&&(this.xAlign=c.xAlign,this.yAlign=c.yAlign,this.width=a.width,this.height=a.height,this.caretX=s.x,this.caretY=s.y,this._resolveAnimations().update(this,u))}}_willRender(){return!!this.opacity}draw(t){const n=this.options.setContext(this.getContext());let r=this.opacity;if(!r)return;this._updateAnimationTarget(n);const i={width:this.width,height:this.height},o={x:this.x,y:this.y};r=Math.abs(r)<.001?0:r;const s=gt(n.padding),a=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;n.enabled&&a&&(t.save(),t.globalAlpha=r,this.drawBackground(o,t,i,n),Fw(t,n.textDirection),o.y+=s.top,this.drawTitle(o,t,n),this.drawBody(o,t,n),this.drawFooter(o,t,n),Bw(t,n.textDirection),t.restore())}getActiveElements(){return this._active||[]}setActiveElements(t,n){const r=this._active,i=t.map(({datasetIndex:a,index:l})=>{const c=this.chart.getDatasetMeta(a);if(!c)throw new Error("Cannot find a dataset at index "+a);return{datasetIndex:a,element:c.data[l],index:l}}),o=!Mc(r,i),s=this._positionChanged(i,n);(o||s)&&(this._active=i,this._eventPosition=n,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(t,n,r=!0){if(n&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;const i=this.options,o=this._active||[],s=this._getActiveElements(t,o,n,r),a=this._positionChanged(s,t),l=n||!Mc(s,o)||a;return l&&(this._active=s,(i.enabled||i.external)&&(this._eventPosition={x:t.x,y:t.y},this.update(!0,n))),l}_getActiveElements(t,n,r,i){const o=this.options;if(t.type==="mouseout")return[];if(!i)return n.filter(a=>this.chart.data.datasets[a.datasetIndex]&&this.chart.getDatasetMeta(a.datasetIndex).controller.getParsed(a.index)!==void 0);const s=this.chart.getElementsAtEventForMode(t,o.mode,o,r);return o.reverse&&s.reverse(),s}_positionChanged(t,n){const{caretX:r,caretY:i,options:o}=this,s=is[o.position].call(this,t,n);return s!==!1&&(r!==s.x||i!==s.y)}}z(Mh,"positioners",is);var HR={id:"tooltip",_element:Mh,positioners:is,afterInit(e,t,n){n&&(e.tooltip=new Mh({chart:e,options:n}))},beforeUpdate(e,t,n){e.tooltip&&e.tooltip.initialize(n)},reset(e,t,n){e.tooltip&&e.tooltip.initialize(n)},afterDraw(e){const t=e.tooltip;if(t&&t._willRender()){const n={tooltip:t};if(e.notifyPlugins("beforeTooltipDraw",{...n,cancelable:!0})===!1)return;t.draw(e.ctx),e.notifyPlugins("afterTooltipDraw",n)}},afterEvent(e,t){if(e.tooltip){const n=t.replay;e.tooltip.handleEvent(t.event,n,t.inChartArea)&&(t.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(e,t)=>t.bodyFont.size,boxWidth:(e,t)=>t.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:f_},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:e=>e!=="filter"&&e!=="itemSort"&&e!=="external",_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]},UR=Object.freeze({__proto__:null,Colors:rR,Decimation:aR,Filler:OR,Legend:$R,SubTitle:DR,Title:LR,Tooltip:HR});const YR=(e,t,n,r)=>(typeof t=="string"?(n=e.push(t)-1,r.unshift({index:n,label:t})):isNaN(t)&&(n=null),n);function XR(e,t,n,r){const i=e.indexOf(t);if(i===-1)return YR(e,t,n,r);const o=e.lastIndexOf(t);return i!==o?n:i}const KR=(e,t)=>e===null?null:Xe(Math.round(e),0,t);function Qv(e){const t=this.getLabels();return e>=0&&e<t.length?t[e]:e}class Eh extends yi{constructor(t){super(t),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(t){const n=this._addedLabels;if(n.length){const r=this.getLabels();for(const{index:i,label:o}of n)r[i]===o&&r.splice(i,1);this._addedLabels=[]}super.init(t)}parse(t,n){if(te(t))return null;const r=this.getLabels();return n=isFinite(n)&&r[n]===t?n:XR(r,t,X(n,t),this._addedLabels),KR(n,r.length-1)}determineDataLimits(){const{minDefined:t,maxDefined:n}=this.getUserBounds();let{min:r,max:i}=this.getMinMax(!0);this.options.bounds==="ticks"&&(t||(r=0),n||(i=this.getLabels().length-1)),this.min=r,this.max=i}buildTicks(){const t=this.min,n=this.max,r=this.options.offset,i=[];let o=this.getLabels();o=t===0&&n===o.length-1?o:o.slice(t,n+1),this._valueRange=Math.max(o.length-(r?0:1),1),this._startValue=this.min-(r?.5:0);for(let s=t;s<=n;s++)i.push({value:s});return i}getLabelForValue(t){return Qv.call(this,t)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(t){return typeof t!="number"&&(t=this.parse(t)),t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getPixelForTick(t){const n=this.ticks;return t<0||t>n.length-1?null:this.getPixelForValue(n[t].value)}getValueForPixel(t){return Math.round(this._startValue+this.getDecimalForPixel(t)*this._valueRange)}getBasePixel(){return this.bottom}}z(Eh,"id","category"),z(Eh,"defaults",{ticks:{callback:Qv}});function GR(e,t){const n=[],{bounds:i,step:o,min:s,max:a,precision:l,count:c,maxTicks:u,maxDigits:d,includeBounds:f}=e,g=o||1,v=u-1,{min:y,max:p}=t,m=!te(s),x=!te(a),b=!te(c),w=(p-y)/(d+1);let _=U1((p-y)/v/g)*g,k,P,M,E;if(_<1e-14&&!m&&!x)return[{value:y},{value:p}];E=Math.ceil(p/_)-Math.floor(y/_),E>v&&(_=U1(E*_/v/g)*g),te(l)||(k=Math.pow(10,l),_=Math.ceil(_*k)/k),i==="ticks"?(P=Math.floor(y/_)*_,M=Math.ceil(p/_)*_):(P=y,M=p),m&&x&&o&&VT((a-s)/o,_/1e3)?(E=Math.round(Math.min((a-s)/_,u)),_=(a-s)/E,P=s,M=a):b?(P=m?s:P,M=x?a:M,E=c-1,_=(M-P)/E):(E=(M-P)/_,ws(E,Math.round(E),_/1e3)?E=Math.round(E):E=Math.ceil(E));const A=Math.max(Y1(_),Y1(P));k=Math.pow(10,te(l)?A:l),P=Math.round(P*k)/k,M=Math.round(M*k)/k;let j=0;for(m&&(f&&P!==s?(n.push({value:s}),P<s&&j++,ws(Math.round((P+j*_)*k)/k,s,Zv(s,w,e))&&j++):P<s&&j++);j<E;++j){const I=Math.round((P+j*_)*k)/k;if(x&&I>a)break;n.push({value:I})}return x&&f&&M!==a?n.length&&ws(n[n.length-1].value,a,Zv(a,w,e))?n[n.length-1].value=a:n.push({value:a}):(!x||M===a)&&n.push({value:M}),n}function Zv(e,t,{horizontal:n,minRotation:r}){const i=nn(r),o=(n?Math.sin(i):Math.cos(i))||.001,s=.75*t*(""+e).length;return Math.min(t/o,s)}class Lc extends yi{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(t,n){return te(t)||(typeof t=="number"||t instanceof Number)&&!isFinite(+t)?null:+t}handleTickRangeOptions(){const{beginAtZero:t}=this.options,{minDefined:n,maxDefined:r}=this.getUserBounds();let{min:i,max:o}=this;const s=l=>i=n?i:l,a=l=>o=r?o:l;if(t){const l=kn(i),c=kn(o);l<0&&c<0?a(0):l>0&&c>0&&s(0)}if(i===o){let l=o===0?1:Math.abs(o*.05);a(o+l),t||s(i-l)}this.min=i,this.max=o}getTickLimit(){const t=this.options.ticks;let{maxTicksLimit:n,stepSize:r}=t,i;return r?(i=Math.ceil(this.max/r)-Math.floor(this.min/r)+1,i>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${r} would result generating up to ${i} ticks. Limiting to 1000.`),i=1e3)):(i=this.computeTickLimit(),n=n||11),n&&(i=Math.min(n,i)),i}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){const t=this.options,n=t.ticks;let r=this.getTickLimit();r=Math.max(2,r);const i={maxTicks:r,bounds:t.bounds,min:t.min,max:t.max,precision:n.precision,step:n.stepSize,count:n.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:n.minRotation||0,includeBounds:n.includeBounds!==!1},o=this._range||this,s=GR(i,o);return t.bounds==="ticks"&&Sw(s,this,"value"),t.reverse?(s.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),s}configure(){const t=this.ticks;let n=this.min,r=this.max;if(super.configure(),this.options.offset&&t.length){const i=(r-n)/Math.max(t.length-1,1)/2;n-=i,r+=i}this._startValue=n,this._endValue=r,this._valueRange=r-n}getLabelForValue(t){return Ta(t,this.chart.options.locale,this.options.ticks.format)}}class Nh extends Lc{determineDataLimits(){const{min:t,max:n}=this.getMinMax(!0);this.min=Re(t)?t:0,this.max=Re(n)?n:1,this.handleTickRangeOptions()}computeTickLimit(){const t=this.isHorizontal(),n=t?this.width:this.height,r=nn(this.options.ticks.minRotation),i=(t?Math.sin(r):Math.cos(r))||.001,o=this._resolveTickFontOptions(0);return Math.ceil(n/Math.min(40,o.lineHeight/i))}getPixelForValue(t){return t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getValueForPixel(t){return this._startValue+this.getDecimalForPixel(t)*this._valueRange}}z(Nh,"id","linear"),z(Nh,"defaults",{ticks:{callback:Wu.formatters.numeric}});const ra=e=>Math.floor(sr(e)),Wr=(e,t)=>Math.pow(10,ra(e)+t);function Jv(e){return e/Math.pow(10,ra(e))===1}function ey(e,t,n){const r=Math.pow(10,n),i=Math.floor(e/r);return Math.ceil(t/r)-i}function qR(e,t){const n=t-e;let r=ra(n);for(;ey(e,t,r)>10;)r++;for(;ey(e,t,r)<10;)r--;return Math.min(r,ra(e))}function QR(e,{min:t,max:n}){t=Et(e.min,t);const r=[],i=ra(t);let o=qR(t,n),s=o<0?Math.pow(10,Math.abs(o)):1;const a=Math.pow(10,o),l=i>o?Math.pow(10,i):0,c=Math.round((t-l)*s)/s,u=Math.floor((t-l)/a/10)*a*10;let d=Math.floor((c-u)/Math.pow(10,o)),f=Et(e.min,Math.round((l+u+d*Math.pow(10,o))*s)/s);for(;f<n;)r.push({value:f,major:Jv(f),significand:d}),d>=10?d=d<15?15:20:d++,d>=20&&(o++,d=2,s=o>=0?1:s),f=Math.round((l+u+d*Math.pow(10,o))*s)/s;const g=Et(e.max,f);return r.push({value:g,major:Jv(g),significand:d}),r}class Th extends yi{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._valueRange=0}parse(t,n){const r=Lc.prototype.parse.apply(this,[t,n]);if(r===0){this._zero=!0;return}return Re(r)&&r>0?r:null}determineDataLimits(){const{min:t,max:n}=this.getMinMax(!0);this.min=Re(t)?Math.max(0,t):null,this.max=Re(n)?Math.max(0,n):null,this.options.beginAtZero&&(this._zero=!0),this._zero&&this.min!==this._suggestedMin&&!Re(this._userMin)&&(this.min=t===Wr(this.min,0)?Wr(this.min,-1):Wr(this.min,0)),this.handleTickRangeOptions()}handleTickRangeOptions(){const{minDefined:t,maxDefined:n}=this.getUserBounds();let r=this.min,i=this.max;const o=a=>r=t?r:a,s=a=>i=n?i:a;r===i&&(r<=0?(o(1),s(10)):(o(Wr(r,-1)),s(Wr(i,1)))),r<=0&&o(Wr(i,-1)),i<=0&&s(Wr(r,1)),this.min=r,this.max=i}buildTicks(){const t=this.options,n={min:this._userMin,max:this._userMax},r=QR(n,this);return t.bounds==="ticks"&&Sw(r,this,"value"),t.reverse?(r.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),r}getLabelForValue(t){return t===void 0?"0":Ta(t,this.chart.options.locale,this.options.ticks.format)}configure(){const t=this.min;super.configure(),this._startValue=sr(t),this._valueRange=sr(this.max)-sr(t)}getPixelForValue(t){return(t===void 0||t===0)&&(t=this.min),t===null||isNaN(t)?NaN:this.getPixelForDecimal(t===this.min?0:(sr(t)-this._startValue)/this._valueRange)}getValueForPixel(t){const n=this.getDecimalForPixel(t);return Math.pow(10,this._startValue+n*this._valueRange)}}z(Th,"id","logarithmic"),z(Th,"defaults",{ticks:{callback:Wu.formatters.logarithmic,major:{enabled:!0}}});function Ah(e){const t=e.ticks;if(t.display&&e.display){const n=gt(t.backdropPadding);return X(t.font&&t.font.size,Le.font.size)+n.height}return 0}function ZR(e,t,n){return n=we(n)?n:[n],{w:sA(e,t.string,n),h:n.length*t.lineHeight}}function ty(e,t,n,r,i){return e===r||e===i?{start:t-n/2,end:t+n/2}:e<r||e>i?{start:t-n,end:t}:{start:t,end:t+n}}function JR(e){const t={l:e.left+e._padding.left,r:e.right-e._padding.right,t:e.top+e._padding.top,b:e.bottom-e._padding.bottom},n=Object.assign({},t),r=[],i=[],o=e._pointLabels.length,s=e.options.pointLabels,a=s.centerPointLabels?ke/o:0;for(let l=0;l<o;l++){const c=s.setContext(e.getPointLabelContext(l));i[l]=c.padding;const u=e.getPointPosition(l,e.drawingArea+i[l],a),d=Ue(c.font),f=ZR(e.ctx,d,e._pointLabels[l]);r[l]=f;const g=Nt(e.getIndexAngle(l)+a),v=Math.round(jg(g)),y=ty(v,u.x,f.w,0,180),p=ty(v,u.y,f.h,90,270);eL(n,t,g,y,p)}e.setCenterPoint(t.l-n.l,n.r-t.r,t.t-n.t,n.b-t.b),e._pointLabelItems=rL(e,r,i)}function eL(e,t,n,r,i){const o=Math.abs(Math.sin(n)),s=Math.abs(Math.cos(n));let a=0,l=0;r.start<t.l?(a=(t.l-r.start)/o,e.l=Math.min(e.l,t.l-a)):r.end>t.r&&(a=(r.end-t.r)/o,e.r=Math.max(e.r,t.r+a)),i.start<t.t?(l=(t.t-i.start)/s,e.t=Math.min(e.t,t.t-l)):i.end>t.b&&(l=(i.end-t.b)/s,e.b=Math.max(e.b,t.b+l))}function tL(e,t,n){const r=e.drawingArea,{extra:i,additionalAngle:o,padding:s,size:a}=n,l=e.getPointPosition(t,r+i+s,o),c=Math.round(jg(Nt(l.angle+ze))),u=sL(l.y,a.h,c),d=iL(c),f=oL(l.x,a.w,d);return{visible:!0,x:l.x,y:u,textAlign:d,left:f,top:u,right:f+a.w,bottom:u+a.h}}function nL(e,t){if(!t)return!0;const{left:n,top:r,right:i,bottom:o}=e;return!(jn({x:n,y:r},t)||jn({x:n,y:o},t)||jn({x:i,y:r},t)||jn({x:i,y:o},t))}function rL(e,t,n){const r=[],i=e._pointLabels.length,o=e.options,{centerPointLabels:s,display:a}=o.pointLabels,l={extra:Ah(o)/2,additionalAngle:s?ke/i:0};let c;for(let u=0;u<i;u++){l.padding=n[u],l.size=t[u];const d=tL(e,u,l);r.push(d),a==="auto"&&(d.visible=nL(d,c),d.visible&&(c=d))}return r}function iL(e){return e===0||e===180?"center":e<180?"left":"right"}function oL(e,t,n){return n==="right"?e-=t:n==="center"&&(e-=t/2),e}function sL(e,t,n){return n===90||n===270?e-=t/2:(n>270||n<90)&&(e-=t),e}function aL(e,t,n){const{left:r,top:i,right:o,bottom:s}=n,{backdropColor:a}=t;if(!te(a)){const l=ti(t.borderRadius),c=gt(t.backdropPadding);e.fillStyle=a;const u=r-c.left,d=i-c.top,f=o-r+c.width,g=s-i+c.height;Object.values(l).some(v=>v!==0)?(e.beginPath(),ta(e,{x:u,y:d,w:f,h:g,radius:l}),e.fill()):e.fillRect(u,d,f,g)}}function lL(e,t){const{ctx:n,options:{pointLabels:r}}=e;for(let i=t-1;i>=0;i--){const o=e._pointLabelItems[i];if(!o.visible)continue;const s=r.setContext(e.getPointLabelContext(i));aL(n,s,o);const a=Ue(s.font),{x:l,y:c,textAlign:u}=o;di(n,e._pointLabels[i],l,c+a.lineHeight/2,a,{color:s.color,textAlign:u,textBaseline:"middle"})}}function h_(e,t,n,r){const{ctx:i}=e;if(n)i.arc(e.xCenter,e.yCenter,t,0,Se);else{let o=e.getPointPosition(0,t);i.moveTo(o.x,o.y);for(let s=1;s<r;s++)o=e.getPointPosition(s,t),i.lineTo(o.x,o.y)}}function cL(e,t,n,r,i){const o=e.ctx,s=t.circular,{color:a,lineWidth:l}=t;!s&&!r||!a||!l||n<0||(o.save(),o.strokeStyle=a,o.lineWidth=l,o.setLineDash(i.dash),o.lineDashOffset=i.dashOffset,o.beginPath(),h_(e,n,s,r),o.closePath(),o.stroke(),o.restore())}function uL(e,t,n){return Ir(e,{label:n,index:t,type:"pointLabel"})}class os extends Lc{constructor(t){super(t),this.xCenter=void 0,this.yCenter=void 0,this.drawingArea=void 0,this._pointLabels=[],this._pointLabelItems=[]}setDimensions(){const t=this._padding=gt(Ah(this.options)/2),n=this.width=this.maxWidth-t.width,r=this.height=this.maxHeight-t.height;this.xCenter=Math.floor(this.left+n/2+t.left),this.yCenter=Math.floor(this.top+r/2+t.top),this.drawingArea=Math.floor(Math.min(n,r)/2)}determineDataLimits(){const{min:t,max:n}=this.getMinMax(!1);this.min=Re(t)&&!isNaN(t)?t:0,this.max=Re(n)&&!isNaN(n)?n:0,this.handleTickRangeOptions()}computeTickLimit(){return Math.ceil(this.drawingArea/Ah(this.options))}generateTickLabels(t){Lc.prototype.generateTickLabels.call(this,t),this._pointLabels=this.getLabels().map((n,r)=>{const i=xe(this.options.pointLabels.callback,[n,r],this);return i||i===0?i:""}).filter((n,r)=>this.chart.getDataVisibility(r))}fit(){const t=this.options;t.display&&t.pointLabels.display?JR(this):this.setCenterPoint(0,0,0,0)}setCenterPoint(t,n,r,i){this.xCenter+=Math.floor((t-n)/2),this.yCenter+=Math.floor((r-i)/2),this.drawingArea-=Math.min(this.drawingArea/2,Math.max(t,n,r,i))}getIndexAngle(t){const n=Se/(this._pointLabels.length||1),r=this.options.startAngle||0;return Nt(t*n+nn(r))}getDistanceFromCenterForValue(t){if(te(t))return NaN;const n=this.drawingArea/(this.max-this.min);return this.options.reverse?(this.max-t)*n:(t-this.min)*n}getValueForDistanceFromCenter(t){if(te(t))return NaN;const n=t/(this.drawingArea/(this.max-this.min));return this.options.reverse?this.max-n:this.min+n}getPointLabelContext(t){const n=this._pointLabels||[];if(t>=0&&t<n.length){const r=n[t];return uL(this.getContext(),t,r)}}getPointPosition(t,n,r=0){const i=this.getIndexAngle(t)-ze+r;return{x:Math.cos(i)*n+this.xCenter,y:Math.sin(i)*n+this.yCenter,angle:i}}getPointPositionForValue(t,n){return this.getPointPosition(t,this.getDistanceFromCenterForValue(n))}getBasePosition(t){return this.getPointPositionForValue(t||0,this.getBaseValue())}getPointLabelPosition(t){const{left:n,top:r,right:i,bottom:o}=this._pointLabelItems[t];return{left:n,top:r,right:i,bottom:o}}drawBackground(){const{backgroundColor:t,grid:{circular:n}}=this.options;if(t){const r=this.ctx;r.save(),r.beginPath(),h_(this,this.getDistanceFromCenterForValue(this._endValue),n,this._pointLabels.length),r.closePath(),r.fillStyle=t,r.fill(),r.restore()}}drawGrid(){const t=this.ctx,n=this.options,{angleLines:r,grid:i,border:o}=n,s=this._pointLabels.length;let a,l,c;if(n.pointLabels.display&&lL(this,s),i.display&&this.ticks.forEach((u,d)=>{if(d!==0||d===0&&this.min<0){l=this.getDistanceFromCenterForValue(u.value);const f=this.getContext(d),g=i.setContext(f),v=o.setContext(f);cL(this,g,l,s,v)}}),r.display){for(t.save(),a=s-1;a>=0;a--){const u=r.setContext(this.getPointLabelContext(a)),{color:d,lineWidth:f}=u;!f||!d||(t.lineWidth=f,t.strokeStyle=d,t.setLineDash(u.borderDash),t.lineDashOffset=u.borderDashOffset,l=this.getDistanceFromCenterForValue(n.ticks.reverse?this.min:this.max),c=this.getPointPosition(a,l),t.beginPath(),t.moveTo(this.xCenter,this.yCenter),t.lineTo(c.x,c.y),t.stroke())}t.restore()}}drawBorder(){}drawLabels(){const t=this.ctx,n=this.options,r=n.ticks;if(!r.display)return;const i=this.getIndexAngle(0);let o,s;t.save(),t.translate(this.xCenter,this.yCenter),t.rotate(i),t.textAlign="center",t.textBaseline="middle",this.ticks.forEach((a,l)=>{if(l===0&&this.min>=0&&!n.reverse)return;const c=r.setContext(this.getContext(l)),u=Ue(c.font);if(o=this.getDistanceFromCenterForValue(this.ticks[l].value),c.showLabelBackdrop){t.font=u.string,s=t.measureText(a.label).width,t.fillStyle=c.backdropColor;const d=gt(c.backdropPadding);t.fillRect(-s/2-d.left,-o-u.size/2-d.top,s+d.width,u.size+d.height)}di(t,a.label,0,-o,u,{color:c.color,strokeColor:c.textStrokeColor,strokeWidth:c.textStrokeWidth})}),t.restore()}drawTitle(){}}z(os,"id","radialLinear"),z(os,"defaults",{display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,lineWidth:1,borderDash:[],borderDashOffset:0},grid:{circular:!1},startAngle:0,ticks:{showLabelBackdrop:!0,callback:Wu.formatters.numeric},pointLabels:{backdropColor:void 0,backdropPadding:2,display:!0,font:{size:10},callback(t){return t},padding:5,centerPointLabels:!1}}),z(os,"defaultRoutes",{"angleLines.color":"borderColor","pointLabels.color":"color","ticks.color":"color"}),z(os,"descriptors",{angleLines:{_fallback:"grid"}});const Yu={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},Ct=Object.keys(Yu);function ny(e,t){return e-t}function ry(e,t){if(te(t))return null;const n=e._adapter,{parser:r,round:i,isoWeekday:o}=e._parseOpts;let s=t;return typeof r=="function"&&(s=r(s)),Re(s)||(s=typeof r=="string"?n.parse(s,r):n.parse(s)),s===null?null:(i&&(s=i==="week"&&(co(o)||o===!0)?n.startOf(s,"isoWeek",o):n.startOf(s,i)),+s)}function iy(e,t,n,r){const i=Ct.length;for(let o=Ct.indexOf(e);o<i-1;++o){const s=Yu[Ct[o]],a=s.steps?s.steps:Number.MAX_SAFE_INTEGER;if(s.common&&Math.ceil((n-t)/(a*s.size))<=r)return Ct[o]}return Ct[i-1]}function dL(e,t,n,r,i){for(let o=Ct.length-1;o>=Ct.indexOf(n);o--){const s=Ct[o];if(Yu[s].common&&e._adapter.diff(i,r,s)>=t-1)return s}return Ct[n?Ct.indexOf(n):0]}function fL(e){for(let t=Ct.indexOf(e)+1,n=Ct.length;t<n;++t)if(Yu[Ct[t]].common)return Ct[t]}function oy(e,t,n){if(!n)e[t]=!0;else if(n.length){const{lo:r,hi:i}=Fg(n,t),o=n[r]>=t?n[r]:n[i];e[o]=!0}}function hL(e,t,n,r){const i=e._adapter,o=+i.startOf(t[0].value,r),s=t[t.length-1].value;let a,l;for(a=o;a<=s;a=+i.add(a,1,r))l=n[a],l>=0&&(t[l].major=!0);return t}function sy(e,t,n){const r=[],i={},o=t.length;let s,a;for(s=0;s<o;++s)a=t[s],i[a]=s,r.push({value:a,major:!1});return o===0||!n?r:hL(e,r,i,n)}class ia extends yi{constructor(t){super(t),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(t,n={}){const r=t.time||(t.time={}),i=this._adapter=new _8._date(t.adapters.date);i.init(n),bs(r.displayFormats,i.formats()),this._parseOpts={parser:r.parser,round:r.round,isoWeekday:r.isoWeekday},super.init(t),this._normalized=n.normalized}parse(t,n){return t===void 0?null:ry(this,t)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){const t=this.options,n=this._adapter,r=t.time.unit||"day";let{min:i,max:o,minDefined:s,maxDefined:a}=this.getUserBounds();function l(c){!s&&!isNaN(c.min)&&(i=Math.min(i,c.min)),!a&&!isNaN(c.max)&&(o=Math.max(o,c.max))}(!s||!a)&&(l(this._getLabelBounds()),(t.bounds!=="ticks"||t.ticks.source!=="labels")&&l(this.getMinMax(!1))),i=Re(i)&&!isNaN(i)?i:+n.startOf(Date.now(),r),o=Re(o)&&!isNaN(o)?o:+n.endOf(Date.now(),r)+1,this.min=Math.min(i,o-1),this.max=Math.max(i+1,o)}_getLabelBounds(){const t=this.getLabelTimestamps();let n=Number.POSITIVE_INFINITY,r=Number.NEGATIVE_INFINITY;return t.length&&(n=t[0],r=t[t.length-1]),{min:n,max:r}}buildTicks(){const t=this.options,n=t.time,r=t.ticks,i=r.source==="labels"?this.getLabelTimestamps():this._generate();t.bounds==="ticks"&&i.length&&(this.min=this._userMin||i[0],this.max=this._userMax||i[i.length-1]);const o=this.min,s=this.max,a=XT(i,o,s);return this._unit=n.unit||(r.autoSkip?iy(n.minUnit,this.min,this.max,this._getLabelCapacity(o)):dL(this,a.length,n.minUnit,this.min,this.max)),this._majorUnit=!r.major.enabled||this._unit==="year"?void 0:fL(this._unit),this.initOffsets(i),t.reverse&&a.reverse(),sy(this,a,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(t=>+t.value))}initOffsets(t=[]){let n=0,r=0,i,o;this.options.offset&&t.length&&(i=this.getDecimalForValue(t[0]),t.length===1?n=1-i:n=(this.getDecimalForValue(t[1])-i)/2,o=this.getDecimalForValue(t[t.length-1]),t.length===1?r=o:r=(o-this.getDecimalForValue(t[t.length-2]))/2);const s=t.length<3?.5:.25;n=Xe(n,0,s),r=Xe(r,0,s),this._offsets={start:n,end:r,factor:1/(n+1+r)}}_generate(){const t=this._adapter,n=this.min,r=this.max,i=this.options,o=i.time,s=o.unit||iy(o.minUnit,n,r,this._getLabelCapacity(n)),a=X(i.ticks.stepSize,1),l=s==="week"?o.isoWeekday:!1,c=co(l)||l===!0,u={};let d=n,f,g;if(c&&(d=+t.startOf(d,"isoWeek",l)),d=+t.startOf(d,c?"day":s),t.diff(r,n,s)>1e5*a)throw new Error(n+" and "+r+" are too far apart with stepSize of "+a+" "+s);const v=i.ticks.source==="data"&&this.getDataTimestamps();for(f=d,g=0;f<r;f=+t.add(f,a,s),g++)oy(u,f,v);return(f===r||i.bounds==="ticks"||g===1)&&oy(u,f,v),Object.keys(u).sort(ny).map(y=>+y)}getLabelForValue(t){const n=this._adapter,r=this.options.time;return r.tooltipFormat?n.format(t,r.tooltipFormat):n.format(t,r.displayFormats.datetime)}format(t,n){const i=this.options.time.displayFormats,o=this._unit,s=n||i[o];return this._adapter.format(t,s)}_tickFormatFunction(t,n,r,i){const o=this.options,s=o.ticks.callback;if(s)return xe(s,[t,n,r],this);const a=o.time.displayFormats,l=this._unit,c=this._majorUnit,u=l&&a[l],d=c&&a[c],f=r[n],g=c&&d&&f&&f.major;return this._adapter.format(t,i||(g?d:u))}generateTickLabels(t){let n,r,i;for(n=0,r=t.length;n<r;++n)i=t[n],i.label=this._tickFormatFunction(i.value,n,t)}getDecimalForValue(t){return t===null?NaN:(t-this.min)/(this.max-this.min)}getPixelForValue(t){const n=this._offsets,r=this.getDecimalForValue(t);return this.getPixelForDecimal((n.start+r)*n.factor)}getValueForPixel(t){const n=this._offsets,r=this.getDecimalForPixel(t)/n.factor-n.end;return this.min+r*(this.max-this.min)}_getLabelSize(t){const n=this.options.ticks,r=this.ctx.measureText(t).width,i=nn(this.isHorizontal()?n.maxRotation:n.minRotation),o=Math.cos(i),s=Math.sin(i),a=this._resolveTickFontOptions(0).size;return{w:r*o+a*s,h:r*s+a*o}}_getLabelCapacity(t){const n=this.options.time,r=n.displayFormats,i=r[n.unit]||r.millisecond,o=this._tickFormatFunction(t,0,sy(this,[t],this._majorUnit),i),s=this._getLabelSize(o),a=Math.floor(this.isHorizontal()?this.width/s.w:this.height/s.h)-1;return a>0?a:1}getDataTimestamps(){let t=this._cache.data||[],n,r;if(t.length)return t;const i=this.getMatchingVisibleMetas();if(this._normalized&&i.length)return this._cache.data=i[0].controller.getAllParsedValues(this);for(n=0,r=i.length;n<r;++n)t=t.concat(i[n].controller.getAllParsedValues(this));return this._cache.data=this.normalize(t)}getLabelTimestamps(){const t=this._cache.labels||[];let n,r;if(t.length)return t;const i=this.getLabels();for(n=0,r=i.length;n<r;++n)t.push(ry(this,i[n]));return this._cache.labels=this._normalized?t:this.normalize(t)}normalize(t){return Pw(t.sort(ny))}}z(ia,"id","time"),z(ia,"defaults",{bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",callback:!1,major:{enabled:!1}}});function pl(e,t,n){let r=0,i=e.length-1,o,s,a,l;n?(t>=e[r].pos&&t<=e[i].pos&&({lo:r,hi:i}=In(e,"pos",t)),{pos:o,time:a}=e[r],{pos:s,time:l}=e[i]):(t>=e[r].time&&t<=e[i].time&&({lo:r,hi:i}=In(e,"time",t)),{time:o,pos:a}=e[r],{time:s,pos:l}=e[i]);const c=s-o;return c?a+(l-a)*(t-o)/c:a}class $h extends ia{constructor(t){super(t),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){const t=this._getTimestampsForTable(),n=this._table=this.buildLookupTable(t);this._minPos=pl(n,this.min),this._tableRange=pl(n,this.max)-this._minPos,super.initOffsets(t)}buildLookupTable(t){const{min:n,max:r}=this,i=[],o=[];let s,a,l,c,u;for(s=0,a=t.length;s<a;++s)c=t[s],c>=n&&c<=r&&i.push(c);if(i.length<2)return[{time:n,pos:0},{time:r,pos:1}];for(s=0,a=i.length;s<a;++s)u=i[s+1],l=i[s-1],c=i[s],Math.round((u+l)/2)!==c&&o.push({time:c,pos:s/(a-1)});return o}_generate(){const t=this.min,n=this.max;let r=super.getDataTimestamps();return(!r.includes(t)||!r.length)&&r.splice(0,0,t),(!r.includes(n)||r.length===1)&&r.push(n),r.sort((i,o)=>i-o)}_getTimestampsForTable(){let t=this._cache.all||[];if(t.length)return t;const n=this.getDataTimestamps(),r=this.getLabelTimestamps();return n.length&&r.length?t=this.normalize(n.concat(r)):t=n.length?n:r,t=this._cache.all=t,t}getDecimalForValue(t){return(pl(this._table,t)-this._minPos)/this._tableRange}getValueForPixel(t){const n=this._offsets,r=this.getDecimalForPixel(t)/n.factor-n.end;return pl(this._table,r*this._tableRange+this._minPos,!0)}}z($h,"id","timeseries"),z($h,"defaults",ia.defaults);var pL=Object.freeze({__proto__:null,CategoryScale:Eh,LinearScale:Nh,LogarithmicScale:Th,RadialLinearScale:os,TimeScale:ia,TimeSeriesScale:$h});const gL=[w8,Q$,UR,pL],p_="label";function ay(e,t){typeof e=="function"?e(t):e&&(e.current=t)}function mL(e,t){const n=e.options;n&&t&&Object.assign(n,t)}function g_(e,t){e.labels=t}function m_(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:p_;const r=[];e.datasets=t.map(i=>{const o=e.datasets.find(s=>s[n]===i[n]);return!o||!i.data||r.includes(o)?{...i}:(r.push(o),Object.assign(o,i),o)})}function vL(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:p_;const n={labels:[],datasets:[]};return g_(n,e.labels),m_(n,e.datasets,t),n}function yL(e,t){const{height:n=150,width:r=300,redraw:i=!1,datasetIdKey:o,type:s,data:a,options:l,plugins:c=[],fallbackContent:u,updateMode:d,...f}=e,g=C.exports.useRef(null),v=C.exports.useRef(),y=()=>{!g.current||(v.current=new gn(g.current,{type:s,data:vL(a,o),options:l&&{...l},plugins:c}),ay(t,v.current))},p=()=>{ay(t,null),v.current&&(v.current.destroy(),v.current=null)};return C.exports.useEffect(()=>{!i&&v.current&&l&&mL(v.current,l)},[i,l]),C.exports.useEffect(()=>{!i&&v.current&&g_(v.current.config.data,a.labels)},[i,a.labels]),C.exports.useEffect(()=>{!i&&v.current&&a.datasets&&m_(v.current.config.data,a.datasets,o)},[i,a.datasets]),C.exports.useEffect(()=>{!v.current||(i?(p(),setTimeout(y)):v.current.update(d))},[i,l,a.labels,a.datasets,d]),C.exports.useEffect(()=>{!v.current||(p(),setTimeout(y))},[s]),C.exports.useEffect(()=>(y(),()=>p()),[]),h("canvas",{...Object.assign({ref:g,role:"img",height:n,width:r},f),children:u})}const xL=C.exports.forwardRef(yL);function bL(e,t){return gn.register(t),C.exports.forwardRef((n,r)=>h(xL,{...Object.assign({},n,{ref:r,type:e})}))}const wL=bL("line",ks);gn.register(...gL);const _L=H.div`
  .graph-chart {
    // height: 30rem;
    margin-bottom: 2rem;
  }
  .return-duration {
    display: flex;
    justify-content: center;
    gap: 1rem;

    .card.active {
      color: ${e=>e.theme.color};
      background: ${e=>e.theme.color}10;
    }
    .card {
      color: ${e=>e.theme.textColor};
      background: ${e=>e.theme.body};
      border-radius: 0.5rem;
      font-size: 1.4rem;
      border: 1px solid ${e=>e.theme.border};
      padding: 0.5rem 1rem;
    }
  }
`,SL=({scheme:e})=>{const t=["1M","6M","1Y","3Y","ALL"],[n,r]=C.exports.useState("6M"),[i,o]=C.exports.useState("10"),s=d=>{r(d),o("13")},c={labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],datasets:[{label:"Performance",data:{"1M":[10,15,12,18,20,22,17,25,23,19,30,28],"6M":[30,28,35,40,38,45,50,48,55,53,60,62],"1Y":[20,25,22,30,28,32,29,36,34,31,40,42],"3Y":[40,38,45,50,55,52,60,65,62,58,70,68],ALL:[10,20,15,25,30,35,33,40,45,50,48,55]}[n],borderColor:"rgba(75, 192, 192, 1)",backgroundColor:"rgba(75, 192, 192, 0.2)",fill:!1}]};return S(_L,{children:[S("div",{className:"graph-chart",children:[S("div",{className:"return-section",children:[S("div",{className:"return",children:[S("span",{children:[i," %"]})," 1M return"]}),S("div",{className:"nav",children:[h("span",{children:"-0.30%"})," 1D"]})]}),h(wL,{data:c,options:{responsive:!0,plugins:{legend:{display:!1}},scales:{x:{display:!1},y:{display:!1}}}})]}),h("div",{className:"return-duration",children:t.map((d,f)=>h("div",{className:`card ${n===d?"active":""}`,onClick:()=>s(d),children:d},f))})]})},kL=H.div`
  border-bottom: 1px solid #ebe7e7;
  padding: 0rem 1rem 0;
  margin-bottom: 10rem;

  .container {
    padding: 6rem 0.5rem 0;
  }
  .top-section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
    margin-top: 2rem;

    .image {
      img {
        width: 5rem;
      }
    }

    .icon {
      padding: 1rem;
      border-radius: 0.5rem;
      background: #e2e2e2;
      fill: #525252;

      svg {
        width: 2rem;
        height: 2rem;
      }
    }
  }
  .detail {
    .name {
      font-size: 1.8rem;
      font-weight: 600;
      color: ${e=>e.theme.textColor};
    }
    .info {
      font-weight: 600;
      color: ${e=>e.theme.lightText};
      padding-top: 1rem;
      font-size: 1.4rem;
    }
  }

  .return-section {
    padding: 2rem 0;

    .return {
      span {
        font-size: 2.3rem;
      }
    }
    .nav {
      span {
        font-size: 1.4rem;
      }
    }
    div {
      span {
        color: ${e=>e.theme.loss};
      }
    }
  }
  .graph {
    .graph-chart {
      height: 30rem;
    }
    .return-duration {
      display: flex;
      justify-content: center;
      gap: 1rem;

      .card.active {
        color: ${e=>e.theme.color};
        background: ${e=>e.theme.color}10;
      }
      .card {
        color: ${e=>e.theme.textColor};
        background: ${e=>e.theme.body};
        border-radius: 0.5rem;
        font-size: 1.4rem;
        border: 1px solid ${e=>e.theme.border};
        padding: 0.5rem 1rem;
      }
    }
  }
  .investment {
    margin: 2rem 0;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    border: 1px solid ${e=>e.theme.border};
    border-radius: 1.2rem;

    .text {
      font-weight: 600;
      color: ${e=>e.theme.lightText};
      font-size: 1.4rem;
    }
    .return {
      display: flex;
      align-items: center;
      gap: 10px;

      svg {
        width: 1.5rem;
        height: 1.5rem;
      }
    }
    .amt {
      color: ${e=>e.theme.textColor};
      text-align: right;
      font-size: 2rem;
    }
  }
  .scheme-detail {
    padding: 2rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;

    .card {
      border-radius: 4px;

      .heading {
        color: ${e=>e.theme.lightText};
        font-size: 1.2rem;
        font-weight: 600;
        margin-bottom: 0.8rem;
      }
      .text {
        color: ${e=>e.theme.textColor};
        font-weight: 600;
        font-size: 1.6rem;
      }
    }
  }

  .similar-funds { margin-top: 3rem; }
  .purchase-action {
      position: fixed;
      bottom: 0px;
      z-index: 10;
      background: white;
      // height: 7rem;
      width: 100%;
      color: white;
      display: flex;
      -webkit-box-pack: justify;
      justify-content: space-evenly;
      gap: 1rem;
      padding: 2rem;
      left: 0;

      button {
        padding: 1.5rem;
        border-radius: 10px;
        font-size: 1.6rem;
        width: 100%;
        display: inline-block;
        border: 1px solid rgb(145, 71, 255);
        &.active {
          background: rgb(145, 71, 255);
          color: white;
        }
      }
    }
`,CL=H.div`
  .header {
    width: 100%;
    height: 75px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    background-color: rgb(255, 255, 255);
    color: rgb(14, 14, 16);
    padding: 10px;
    position: fixed;
    top: 0px;
    z-index: 4;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
  }

  button {
    padding: 2rem 1rem 2rem 0px;
    background: initial;
    cursor: pointer;
    font-size: 2rem;
    line-height: 1.5rem;
  }
`;function PL(){const e=Dr();return h(CL,{children:h("div",{className:"header",children:h("button",{onClick:()=>e(-1),children:h(Kf,{})})})})}const OL=()=>{const{schemeCode:e}=t5(),[t,n]=C.exports.useState(null),[r,i]=C.exports.useState(!0),[o,s]=C.exports.useState(null),a=async()=>{try{const p=await T3(e);n(p)}catch(p){s(p)}finally{i(!1)}},[l,c]=C.exports.useState([]),[u,d]=C.exports.useState(void 0),[f,g]=C.exports.useState(!0),v=async()=>{try{const p=await du("schemes");c(p.slice(0,5))}catch(p){d(p)}finally{g(!1)}};C.exports.useEffect(()=>{a(),v()},[]);const y=[{title:"Return calculator",content:"This is the overview content."},{title:"Holdings (155)",content:"This is the overview content."},{title:"Returns & Rakings",content:"This is the overview content."}];return S(kL,{children:[h(PL,{}),S("div",{className:"container",children:[r?h6():S(Ve,{children:[S("div",{className:"top-section",children:[h("div",{className:"image",children:h("img",{src:`./images/amc-logo/${t.amc_logo}`,alt:""})}),h("div",{className:"icon",children:h(_4,{})})]}),S("div",{className:"detail",children:[h("div",{className:"name",children:t.Scheme_Name}),S("div",{className:"info",children:[t.Scheme_Type," / ",t.Scheme_Plan]})]}),h("div",{className:"chart-section",children:h(SL,{})}),S("div",{className:"scheme-detail",children:[S("div",{className:"card",children:[S("div",{className:"heading",children:["NAV: ",t.Nav_Date]}),h("div",{className:"text",children:t.Last_Nav})]}),S("div",{className:"card",children:[h("div",{className:"heading",children:"Rating"}),h("div",{className:"text",children:"4 *"})]}),S("div",{className:"card",children:[h("div",{className:"heading",children:"Min. SIP amount"}),h("div",{className:"text",children:t.Minimum_Purchase_Amount})]}),S("div",{className:"card",children:[h("div",{className:"heading",children:"Fund Size"}),h("div",{className:"text",children:"522 Cr"})]})]}),h("div",{className:"basic-details",children:h(uT,{items:y})}),h("div",{className:"similar-funds",children:h(Iu,{schemes:l,loading:f,customHeader:"Similar funds"})})]}),S("div",{className:"purchase-action",children:[h("button",{className:"sp-button primary",onClick:()=>{},children:"One-time"}),h("button",{className:"sp-button primary active",onClick:()=>{},children:"Start SIP"})]})]})]})},ML=H.div`
  padding: 7.5rem 0.5rem;
  .all-mf-section {
  }
  .header {
    display: block;
    width: 100%;
    font-size: 2rem;
    position: absolute;
    top: 10px;
    z-index: 1;
    padding: 20px 30px;
  }
`,EL=()=>{const[e,t]=C.exports.useState(!0),[n,r]=C.exports.useState([]);return C.exports.useEffect(()=>{(async()=>{try{const o=await du("schemes");r(o)}catch(o){setError(o)}finally{t(!1)}})()},[]),h(ML,{children:h("div",{className:"container division",children:h(Iu,{schemes:n,loading:e})})})},NL=H.div`
  padding: 7.5rem 0.5rem;
  .all-mf-section {
  }
  .header {
    display: block;
    width: 100%;
    font-size: 2rem;
    position: absolute;
    top: 10px;
    z-index: 1;
    padding: 20px 30px;
  }

  .template-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    // padding: 0 1rem;
    margin-bottom: 2rem;

    h2 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }
    p {
      font-size: 1.4rem;
      width: 80%;
    }
    img {
      height: 6rem;
      width: auto;
    }
  }
`,Mi=({type:e=""})=>{var c;const[t,n]=C.exports.useState(!0),[r,i]=C.exports.useState([]),a=(c=Xt().pathname.split("/").filter(u=>u)[1])!=null?c:"schemes";C.exports.useEffect(()=>{(async()=>{try{const d=await du(a);i(d)}catch(d){setError(d)}finally{n(!1)}})()},[]);const l=()=>{switch(e){case"high-return":return{title:"High Return",desc:"Funds with good return in recent time",img:"high-returns.svg"};case"sip-with-100":return{title:"SIP with 100",desc:"Funds with minimum investment of just 100 every month",img:"sip-with-100.svg"};case"tax-saving":return{title:"Tax Saving",desc:"Funds that help you save on taxes",img:"tax-saving.svg"};case"large-cap":return{title:"Large Cap",desc:"Funds investing in large-cap companies",img:"large-cap.svg"};case"mid-cap":return{title:"Mid Cap",desc:"Funds investing in mid-cap companies",img:"mid-cap.svg"};case"small-cap":return{title:"Small Cap",desc:"Funds investing in small-cap companies",img:"small-cap.svg"};default:return{title:"Unknown",desc:"No description available",img:"default.svg"}}};return h(NL,{children:S("div",{className:"container division",children:[S("div",{className:"template-header",children:[S("div",{children:[h("h2",{children:l().title}),h("p",{children:l().desc})]}),h("img",{src:`./public/images/collection/${l().img}`,alt:""})]}),h(Iu,{schemes:r,loading:t})]})})},TL=()=>{const{darkStatus:e,sideBarStatus:t}=bt(d=>d.site),[n,r]=C.exports.useState(window.innerWidth),[i,o]=C.exports.useState(!0),s=Dr(),a=Xt(),l=document.cookie.split(";").filter(d=>d.indexOf("isLoggedIn=true")>=0);console.log(l.length);let c=h(N6,{});l.length===0&&(c=h(z1,{})),C.exports.useEffect(()=>{l.length===0&&s("/login");const d=()=>r(window.innerWidth);return window.addEventListener("resize",d),()=>window.removeEventListener("resize",d)},[n]);const u=()=>a.pathname==="/login"||l.length===0||a.pathname.startsWith("/mutual-fund/")?(o(!1),null):h(W3,{mySize:n});return C.exports.useEffect(()=>{const d=()=>{a.pathname==="/"&&window.confirm("Do you want to close the app?")&&window.close()};return window.addEventListener("popstate",d),()=>{window.removeEventListener("popstate",d)}},[a.pathname]),S($C,{theme:e?IC:zC,children:[h(DC,{}),S("div",{className:"app",children:[h(u,{}),h("div",{className:`${i?"main":""} ${t&&n>1199?"sidebar-open":""}`,children:S(y5,{children:[h(ue,{path:"*",element:h(m5,{to:"/",replace:!0})}),h(ue,{path:"/all-mutual-funds",element:h(EL,{})}),h(ue,{path:"/",element:c}),h(ue,{path:"/login",element:h(z1,{})}),h(ue,{path:"/mutual-fund/:schemeCode",element:h(OL,{loading:!0})}),S(ue,{path:"/schemes/",children:[h(ue,{path:"high-return",element:h(Mi,{type:"high-return"})}),h(ue,{path:"sip-with-100",element:h(Mi,{type:"sip-with-100"})}),h(ue,{path:"tax-saving",element:h(Mi,{type:"tax-saving"})}),h(ue,{path:"large-cap",element:h(Mi,{type:"large-cap"})}),h(ue,{path:"mid-cap",element:h(Mi,{type:"mid-cap"})}),h(ue,{path:"small-cap",element:h(Mi,{type:"small-cap"})}),h(ue,{path:"dashboard",element:h($d,{})}),h(ue,{path:"SIP",element:h($d,{})}),h(ue,{path:"Watchlist",element:h($d,{})})]}),S(ue,{path:"/following/",element:h(HP,{}),children:[h(ue,{index:!0,element:h(ZP,{})}),h(ue,{path:"live",element:h(JP,{})}),h(ue,{path:"videos",element:h(eO,{})}),h(ue,{path:"categories",element:h(tO,{})})]}),S(ue,{path:"/ipo/",element:h(bi,{}),children:[h(ue,{index:!0,path:"all",element:h(bi,{})}),h(ue,{path:"mainline",element:h(bi,{})}),h(ue,{path:"sme",element:h(bi,{})}),h(ue,{path:"listed",element:h(bi,{})}),h(ue,{path:"closed",element:h(bi,{})})]}),S(ue,{path:"/offers/",element:h(iO,{}),children:[h(ue,{index:!0,path:"brokers",element:h(s1,{type:"stock"})}),h(ue,{path:"advisors",element:h(s1,{type:"advisor"})})]})]})})]})]})},AL=()=>{const{pathname:e}=Xt();return C.exports.useEffect(()=>{window.scrollTo(0,0)},[e]),null},$L=vi({name:"user",initialState:{users:[{username:"CosmoKramer",title:"Rapid Chess Championship!",game:"Chess",tag:"Chatting",pp:"https://i.pravatar.cc/",liveScreen:"./images/games/game-chees.jpg",viewers:"17.1K"},{username:"Soprano",title:"Im back",game:"Dota 2",tag:"Turkish",pp:"https://i.pravatar.cc/",liveScreen:"./images/games/game-dota.jpg",viewers:"395"},{username:"Seinfeld",title:"Reduce Ping & Avoid Lags",game:"PUBG",tag:"English",pp:"https://i.pravatar.cc/",liveScreen:"./images/games/game-pubg.jpg",viewers:"5.4K"},{username:"Darlene",title:"FPS soon? OMEGALUL",game:"Counter Strike",tag:"English",pp:"https://i.pravatar.cc/",liveScreen:"./images/games/game-cs.jpg",viewers:"117"},{username:"Cersei",title:"Live Bitcoin Trading Infos 24/7",game:"Crypto",tag:"Chatting",pp:"https://i.pravatar.cc/",liveScreen:"./images/games/game-crypto.jpg",viewers:"88"},{username:"Jacob",title:"LVL 70 - Tracksuit Grind",game:"Escape From Tarkov",tag:"Turkish",pp:"https://i.pravatar.cc/",liveScreen:"./images/games/game-eft.jpg",viewers:"733"},{username:"Skyler",title:"Tourney Run Kollo",game:"Mortal Kombat",tag:"English",pp:"https://i.pravatar.cc/",liveScreen:"./images/games/game-mortal.jpg",viewers:"231"},{username:"Schillinger",title:"Day 12 of the Game of Year ?",game:"Elder Ring",tag:"English",pp:"https://i.pravatar.cc/",liveScreen:"./images/games/game-elder.jpg",viewers:"3.7K"}]}});var RL=$L.reducer;const LL=vi({name:"category",initialState:{games:[{name:"Dota 2",image:"./images/categories/game1.jpg",viewer:"63.3k"},{name:"Chess",image:"./images/categories/game2.jpg",viewer:"23.7k"},{name:"PUBG: BATTLEGROUNDS",image:"./images/categories/game3.jpg",viewer:"34.3k"},{name:"Just Chatting",image:"./images/categories/game4.jpg",viewer:"580k"},{name:"Grand Theft Auto V",image:"./images/categories/game5.jpg",viewer:"144k"},{name:"Elder Ring",image:"./images/categories/game6.jpg",viewer:"88k"},{name:"Apex Legends",image:"./images/categories/game7.jpg",viewer:"112.6k"},{name:"Call of Duty: Wardzone",image:"./images/categories/game8.jpg",viewer:"39k"},{name:"Escape from Tarkov",image:"./images/categories/game9.jpg",viewer:"20k"},{name:"FIFA 22",image:"./images/categories/game10.jpg",viewer:"42.2k"},{name:"Fortnite",image:"./images/categories/game11.jpg",viewer:"102k"},{name:"Age of Empires",image:"./images/categories/game12.jpg",viewer:"5.4k"}]}});var DL=LL.reducer;let Rh;Rh===void 0&&(Rh=[{Scheme_Name:"Aditya Birla Sun Life PSU Equity Fund",amc_logo:"absl.png",Scheme_Type:"Equity",Scheme_Type:"Big",Scheme_Code:"",risk:"High",rating:5,return:[47.01,88,23]},{Scheme_Name:"Motilal Oswal Midcap Fund",amc_logo:"motilal-oswal.png",Scheme_Type:"Equity",Scheme_Type:"Flexi Cap",Scheme_Code:"",risk:"Very High",rating:4,return:[47.01,88]},{Scheme_Name:"Nippon India Small Cap Fund",amc_logo:"nippon.png",Scheme_Type:"Equity",Scheme_Type:"Small",Scheme_Code:"",risk:"Low",rating:5,return:[47.01,88,23]},{Scheme_Name:"Motilal Oswal Midcap Fund",amc_logo:"motilal-oswal.png",Scheme_Type:"Equity",Scheme_Type:"Flexi Cap",Scheme_Code:"",risk:"Very High",rating:4,return:[47.01,88]},{Scheme_Name:"Nippon India Small Cap Fund",amc_logo:"nippon.png",Scheme_Type:"Equity",Scheme_Type:"Small",Scheme_Code:"",risk:"Low",rating:5,return:[47.01,88,23]},{Scheme_Name:"Motilal Oswal Midcap Fund",amc_logo:"motilal-oswal.png",Scheme_Type:"Equity",Scheme_Type:"Flexi Cap",Scheme_Code:"",risk:"Very High",rating:4,return:[47.01,88]},{Scheme_Name:"Nippon India Small Cap Fund",amc_logo:"nippon.png",Scheme_Type:"Equity",Scheme_Type:"Small",Scheme_Code:"",risk:"Low",rating:5,return:[47.01,88,23]}]);const zL=vi({name:"schemes",initialState:{schemes:Rh}});var IL=zL.reducer;const jL=vi({name:"offers",initialState:{offers:[{id:1,name:"Angel Broking",image:"./images/offers/angel-one.png",category:"broker",type:"advisor",href:"/angel-broking"},{id:2,name:"Zerodha",image:"./images/offers/zerodha.png",category:"broker",type:"stock",href:"#"},{id:3,name:"Upstox",image:"./images/offers/upstox.png",category:"broker",type:"advisor",href:"#"},{id:5,name:"Dhan",image:"./images/offers/dhan.png",category:"broker",type:"advisor",href:"#"},{id:6,name:"5 Paisa",image:"./images/offers/5-paisa.png",category:"broker",type:"stock",href:"#"},{id:7,name:"ICICI direct",image:"./images/offers/icici-direct.png",category:"broker",type:"advisor",href:"#"},{id:8,name:"Kotak Securities",image:"./images/offers/kotak-security.png",category:"broker",type:"stock",href:"#"},{id:1,name:"Angel Broking",image:"./images/offers/angel-one.png",category:"broker",type:"advisor",href:"/angel-broking"},{id:2,name:"Zerodha",image:"./images/offers/zerodha.png",category:"broker",type:"stock",href:"#"},{id:3,name:"Upstox",image:"./images/offers/upstox.png",category:"broker",type:"advisor",href:"#"},{id:5,name:"Dhan",image:"./images/offers/dhan.png",category:"broker",type:"advisor",href:"#"},{id:6,name:"5 Paisa",image:"./images/offers/5-paisa.png",category:"broker",type:"stock",href:"#"},{id:7,name:"ICICI direct",image:"./images/offers/icici-direct.png",category:"broker",type:"advisor",href:"#"},{id:8,name:"Kotak Securities",image:"./images/offers/kotak-security.png",category:"broker",type:"stock",href:"#"}]}});var FL=jL.reducer;const BL=vi({name:"ipos",initialState:{ipos:[{name:"RNFI Services Limited",image:"./images/ipo/RNFI_Services_logo.jpg",exchange:"NSE",type:"sme",href:"/angel-broking",date:{start:"Jul 22, 2024",end:"Jul 22, 2024",list:"Jul 22, 2024"},price:{offer:"98-105",expectedPremium:"84-90 (80%)"},lotSize:"1200",subscriptions:"221.56"},{name:"SAR Televenture Limited FPO",image:"./images/ipo/SAR_Televentures_logo.png",exchange:"NSE",type:"mainline",href:"/angel-broking",date:{start:"Jul 22, 2024",end:"Jul 22, 2024",list:"Jul 22, 2024"},price:{offer:"200-210",expectedPremium:"7-8 (3.33%)"},lotSize:"500",subscriptions:"7.49"},{name:"V.L.Infraprojects Limited",image:"./images/ipo/Vraj_Iron_And_Steel_logo.png",exchange:"NSE",type:"sme",href:"/angel-broking",date:{start:"Jul 23, 2024",end:"Jul 25, 2024",list:"Jul 22, 2024"},price:{offer:"39-42",expectedPremium:"60-62 (142.86%)"},lotSize:"3000",subscriptions:"633.71"},{name:"VVIP Infratech Limited",image:"./images/ipo/uttsav_cz_gold_logo.jpeg",exchange:"NSE",type:"mainline",href:"/angel-broking",date:{start:"Jul 23, 2024",end:"Jul 25, 2024",list:"Jul 27, 2024"},price:{offer:"91-93",expectedPremium:"115-122 (123.66%)"},lotSize:"1200",subscriptions:"236.92"},{name:"Chetana Education Limited",image:"./images/ipo/Cheviot-company-logo.jpg",exchange:"NSE",type:"mainline",href:"/angel-broking",date:{start:"Jul 23, 2024",end:"Jul 25, 2024",list:"Jul 27, 2024"},price:{offer:"80-85",expectedPremium:"40-43 (47.06%)"},lotSize:"1600",subscriptions:"196.57"},{name:"Manglam Infra and Engineering Limited",image:"./images/ipo/Manglam_Infra_Logo.png",exchange:"NSE",type:"sme",href:"/angel-broking",date:{start:"Jul 23, 2024",end:"Jul 25, 2024",list:"Jul 27, 2024"},price:{offer:"53-56",expectedPremium:"47-50 (83.93%)"},lotSize:"2000",subscriptions:"394.59"},{name:"Aprameya Engineering Limited",image:"./images/ipo/Aprameya_Engineering_logo.jpg",exchange:"NSE",type:"mainline",href:"/angel-broking",date:{start:"Jul 25, 2024",end:"Jul 29, 2024",list:"Jul 27, 2024"},price:{offer:"56-58",expectedPremium:"25-30 (43.1%)"},lotSize:"2000",subscriptions:"5.92"},{name:"Trom Industries Limited",image:"./images/ipo/Trom-Industries-logo.jpg",exchange:"NSE",type:"sme",href:"/angel-broking",date:{start:"Jul 25, 2024",end:"Jul 29, 2024",list:"Jul 27, 2024"},price:{offer:"110-115",expectedPremium:"135-145 (117.39%)"},lotSize:"1200",subscriptions:"34.84"},{name:"Clinitech Laboratory Limited",image:"./images/ipo/Clinitech_lab_logo.jpg",exchange:"BSE",type:"sme",href:"/angel-broking",date:{start:"Jul 25, 2024",end:"Jul 29, 2024",list:"Jul 27, 2024"},price:{offer:"96",expectedPremium:"135-145 (117.39%)"},lotSize:"1200",subscriptions:"6.09 times"}]}});var WL=BL.reducer;const VL=vi({name:"collections",initialState:{collections:[{name:"High Return",url:"high-return",image:"high-returns.svg"},{name:"SIP with 100",url:"sip-with-100",image:"sip-with-100.svg"},{name:"Tax Saving",url:"tax-saving",image:"tax-saving.svg"},{name:"Large Cap",url:"large-cap",image:"large-cap.svg"},{name:"Mid Cap",url:"mid-cap",image:"mid-cap.svg"},{name:"Small Cap",url:"small-cap",image:"small-cap.svg"}]}});var HL=VL.reducer,UL=a3({reducer:{site:y3,user:RL,category:DL,schemes:IL,offers:FL,ipos:WL,amcCollection:HL}});Jx.render(h(ft.StrictMode,{children:h(QC,{store:UL,children:S(O5,{children:[h(AL,{}),h(TL,{})]})})}),document.getElementById("root"));
