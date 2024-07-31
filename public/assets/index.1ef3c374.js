function of(e,t){return t.forEach(function(n){n&&typeof n!="string"&&!Array.isArray(n)&&Object.keys(n).forEach(function(r){if(r!=="default"&&!(r in e)){var i=Object.getOwnPropertyDescriptor(n,r);Object.defineProperty(e,r,i.get?i:{enumerable:!0,get:function(){return n[r]}})}})}),Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}const wm=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}};wm();function Sm(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var C={exports:{}},X={};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var Yu=Object.getOwnPropertySymbols,bm=Object.prototype.hasOwnProperty,km=Object.prototype.propertyIsEnumerable;function Cm(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function Nm(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de",Object.getOwnPropertyNames(e)[0]==="5")return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map(function(o){return t[o]});if(r.join("")!=="0123456789")return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(o){i[o]=o}),Object.keys(Object.assign({},i)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var lf=Nm()?Object.assign:function(e,t){for(var n,r=Cm(e),i,o=1;o<arguments.length;o++){n=Object(arguments[o]);for(var l in n)bm.call(n,l)&&(r[l]=n[l]);if(Yu){i=Yu(n);for(var a=0;a<i.length;a++)km.call(n,i[a])&&(r[i[a]]=n[i[a]])}}return r};/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ks=lf,dr=60103,af=60106;X.Fragment=60107;X.StrictMode=60108;X.Profiler=60114;var sf=60109,uf=60110,cf=60112;X.Suspense=60113;var df=60115,ff=60116;if(typeof Symbol=="function"&&Symbol.for){var it=Symbol.for;dr=it("react.element"),af=it("react.portal"),X.Fragment=it("react.fragment"),X.StrictMode=it("react.strict_mode"),X.Profiler=it("react.profiler"),sf=it("react.provider"),uf=it("react.context"),cf=it("react.forward_ref"),X.Suspense=it("react.suspense"),df=it("react.memo"),ff=it("react.lazy")}var Gu=typeof Symbol=="function"&&Symbol.iterator;function Em(e){return e===null||typeof e!="object"?null:(e=Gu&&e[Gu]||e["@@iterator"],typeof e=="function"?e:null)}function xi(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var pf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},hf={};function fr(e,t,n){this.props=e,this.context=t,this.refs=hf,this.updater=n||pf}fr.prototype.isReactComponent={};fr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error(xi(85));this.updater.enqueueSetState(this,e,t,"setState")};fr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function mf(){}mf.prototype=fr.prototype;function Cs(e,t,n){this.props=e,this.context=t,this.refs=hf,this.updater=n||pf}var Ns=Cs.prototype=new mf;Ns.constructor=Cs;ks(Ns,fr.prototype);Ns.isPureReactComponent=!0;var Es={current:null},gf=Object.prototype.hasOwnProperty,vf={key:!0,ref:!0,__self:!0,__source:!0};function yf(e,t,n){var r,i={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)gf.call(t,r)&&!vf.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];i.children=u}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:dr,type:e,key:o,ref:l,props:i,_owner:Es.current}}function _m(e,t){return{$$typeof:dr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function _s(e){return typeof e=="object"&&e!==null&&e.$$typeof===dr}function Pm(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ku=/\/+/g;function Rl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Pm(""+e.key):t.toString(36)}function ro(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case dr:case af:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+Rl(l,0):r,Array.isArray(i)?(n="",e!=null&&(n=e.replace(Ku,"$&/")+"/"),ro(i,t,n,"",function(c){return c})):i!=null&&(_s(i)&&(i=_m(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(Ku,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",Array.isArray(e))for(var a=0;a<e.length;a++){o=e[a];var u=r+Rl(o,a);l+=ro(o,t,n,u,i)}else if(u=Em(e),typeof u=="function")for(e=u.call(e),a=0;!(o=e.next()).done;)o=o.value,u=r+Rl(o,a++),l+=ro(o,t,n,u,i);else if(o==="object")throw t=""+e,Error(xi(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t));return l}function Ii(e,t,n){if(e==null)return e;var r=[],i=0;return ro(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Om(e){if(e._status===-1){var t=e._result;t=t(),e._status=0,e._result=t,t.then(function(n){e._status===0&&(n=n.default,e._status=1,e._result=n)},function(n){e._status===0&&(e._status=2,e._result=n)})}if(e._status===1)return e._result;throw e._result}var xf={current:null};function Pt(){var e=xf.current;if(e===null)throw Error(xi(321));return e}var $m={ReactCurrentDispatcher:xf,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:Es,IsSomeRendererActing:{current:!1},assign:ks};X.Children={map:Ii,forEach:function(e,t,n){Ii(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ii(e,function(){t++}),t},toArray:function(e){return Ii(e,function(t){return t})||[]},only:function(e){if(!_s(e))throw Error(xi(143));return e}};X.Component=fr;X.PureComponent=Cs;X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$m;X.cloneElement=function(e,t,n){if(e==null)throw Error(xi(267,e));var r=ks({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=Es.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in t)gf.call(t,u)&&!vf.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&a!==void 0?a[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:dr,type:e.type,key:i,ref:o,props:r,_owner:l}};X.createContext=function(e,t){return t===void 0&&(t=null),e={$$typeof:uf,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider={$$typeof:sf,_context:e},e.Consumer=e};X.createElement=yf;X.createFactory=function(e){var t=yf.bind(null,e);return t.type=e,t};X.createRef=function(){return{current:null}};X.forwardRef=function(e){return{$$typeof:cf,render:e}};X.isValidElement=_s;X.lazy=function(e){return{$$typeof:ff,_payload:{_status:-1,_result:e},_init:Om}};X.memo=function(e,t){return{$$typeof:df,type:e,compare:t===void 0?null:t}};X.useCallback=function(e,t){return Pt().useCallback(e,t)};X.useContext=function(e,t){return Pt().useContext(e,t)};X.useDebugValue=function(){};X.useEffect=function(e,t){return Pt().useEffect(e,t)};X.useImperativeHandle=function(e,t,n){return Pt().useImperativeHandle(e,t,n)};X.useLayoutEffect=function(e,t){return Pt().useLayoutEffect(e,t)};X.useMemo=function(e,t){return Pt().useMemo(e,t)};X.useReducer=function(e,t,n){return Pt().useReducer(e,t,n)};X.useRef=function(e){return Pt().useRef(e)};X.useState=function(e){return Pt().useState(e)};X.version="17.0.2";C.exports=X;var Te=C.exports,Ps=of({__proto__:null,default:Te},[C.exports]),Jo={exports:{}},tt={},wf={exports:{}},Sf={};/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){var t,n,r,i;if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}if(typeof window=="undefined"||typeof MessageChannel!="function"){var u=null,c=null,h=function(){if(u!==null)try{var L=e.unstable_now();u(!0,L),u=null}catch(N){throw setTimeout(h,0),N}};t=function(L){u!==null?setTimeout(t,0,L):(u=L,setTimeout(h,0))},n=function(L,N){c=setTimeout(L,N)},r=function(){clearTimeout(c)},e.unstable_shouldYield=function(){return!1},i=e.unstable_forceFrameRate=function(){}}else{var g=window.setTimeout,m=window.clearTimeout;if(typeof console!="undefined"){var S=window.cancelAnimationFrame;typeof window.requestAnimationFrame!="function"&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"),typeof S!="function"&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")}var x=!1,w=null,d=-1,f=5,p=0;e.unstable_shouldYield=function(){return e.unstable_now()>=p},i=function(){},e.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):f=0<L?Math.floor(1e3/L):5};var v=new MessageChannel,b=v.port2;v.port1.onmessage=function(){if(w!==null){var L=e.unstable_now();p=L+f;try{w(!0,L)?b.postMessage(null):(x=!1,w=null)}catch(N){throw b.postMessage(null),N}}else x=!1},t=function(L){w=L,x||(x=!0,b.postMessage(null))},n=function(L,N){d=g(function(){L(e.unstable_now())},N)},r=function(){m(d),d=-1}}function P(L,N){var E=L.length;L.push(N);e:for(;;){var z=E-1>>>1,A=L[z];if(A!==void 0&&0<j(A,N))L[z]=N,L[E]=A,E=z;else break e}}function _(L){return L=L[0],L===void 0?null:L}function T(L){var N=L[0];if(N!==void 0){var E=L.pop();if(E!==N){L[0]=E;e:for(var z=0,A=L.length;z<A;){var k=2*(z+1)-1,U=L[k],$=k+1,J=L[$];if(U!==void 0&&0>j(U,E))J!==void 0&&0>j(J,U)?(L[z]=J,L[$]=E,z=$):(L[z]=U,L[k]=E,z=k);else if(J!==void 0&&0>j(J,E))L[z]=J,L[$]=E,z=$;else break e}}return N}return null}function j(L,N){var E=L.sortIndex-N.sortIndex;return E!==0?E:L.id-N.id}var M=[],B=[],ce=1,Q=null,W=3,ye=!1,ie=!1,Fe=!1;function xe(L){for(var N=_(B);N!==null;){if(N.callback===null)T(B);else if(N.startTime<=L)T(B),N.sortIndex=N.expirationTime,P(M,N);else break;N=_(B)}}function ge(L){if(Fe=!1,xe(L),!ie)if(_(M)!==null)ie=!0,t(xt);else{var N=_(B);N!==null&&n(ge,N.startTime-L)}}function xt(L,N){ie=!1,Fe&&(Fe=!1,r()),ye=!0;var E=W;try{for(xe(N),Q=_(M);Q!==null&&(!(Q.expirationTime>N)||L&&!e.unstable_shouldYield());){var z=Q.callback;if(typeof z=="function"){Q.callback=null,W=Q.priorityLevel;var A=z(Q.expirationTime<=N);N=e.unstable_now(),typeof A=="function"?Q.callback=A:Q===_(M)&&T(M),xe(N)}else T(M);Q=_(M)}if(Q!==null)var k=!0;else{var U=_(B);U!==null&&n(ge,U.startTime-N),k=!1}return k}finally{Q=null,W=E,ye=!1}}var zt=i;e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(L){L.callback=null},e.unstable_continueExecution=function(){ie||ye||(ie=!0,t(xt))},e.unstable_getCurrentPriorityLevel=function(){return W},e.unstable_getFirstCallbackNode=function(){return _(M)},e.unstable_next=function(L){switch(W){case 1:case 2:case 3:var N=3;break;default:N=W}var E=W;W=N;try{return L()}finally{W=E}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=zt,e.unstable_runWithPriority=function(L,N){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var E=W;W=L;try{return N()}finally{W=E}},e.unstable_scheduleCallback=function(L,N,E){var z=e.unstable_now();switch(typeof E=="object"&&E!==null?(E=E.delay,E=typeof E=="number"&&0<E?z+E:z):E=z,L){case 1:var A=-1;break;case 2:A=250;break;case 5:A=1073741823;break;case 4:A=1e4;break;default:A=5e3}return A=E+A,L={id:ce++,callback:N,priorityLevel:L,startTime:E,expirationTime:A,sortIndex:-1},E>z?(L.sortIndex=E,P(B,L),_(M)===null&&L===_(B)&&(Fe?r():Fe=!0,n(ge,E-z))):(L.sortIndex=A,P(M,L),ie||ye||(ie=!0,t(xt))),L},e.unstable_wrapCallback=function(L){var N=W;return function(){var E=W;W=N;try{return L.apply(this,arguments)}finally{W=E}}}})(Sf);wf.exports=Sf;/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zo=C.exports,le=lf,Se=wf.exports;function O(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!Zo)throw Error(O(227));var bf=new Set,qr={};function Pn(e,t){ir(e,t),ir(e+"Capture",t)}function ir(e,t){for(qr[e]=t,e=0;e<t.length;e++)bf.add(t[e])}var Et=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),zm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Qu=Object.prototype.hasOwnProperty,Ju={},Zu={};function Lm(e){return Qu.call(Zu,e)?!0:Qu.call(Ju,e)?!1:zm.test(e)?Zu[e]=!0:(Ju[e]=!0,!1)}function Mm(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Rm(e,t,n,r){if(t===null||typeof t=="undefined"||Mm(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function De(e,t,n,r,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var Oe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Oe[e]=new De(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Oe[t]=new De(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Oe[e]=new De(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Oe[e]=new De(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Oe[e]=new De(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Oe[e]=new De(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Oe[e]=new De(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Oe[e]=new De(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Oe[e]=new De(e,5,!1,e.toLowerCase(),null,!1,!1)});var Os=/[\-:]([a-z])/g;function $s(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Os,$s);Oe[t]=new De(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Os,$s);Oe[t]=new De(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Os,$s);Oe[t]=new De(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Oe[e]=new De(e,1,!1,e.toLowerCase(),null,!1,!1)});Oe.xlinkHref=new De("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Oe[e]=new De(e,1,!1,e.toLowerCase(),null,!0,!0)});function zs(e,t,n,r){var i=Oe.hasOwnProperty(t)?Oe[t]:null,o=i!==null?i.type===0:r?!1:!(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N");o||(Rm(t,n,i,r)&&(n=null),r||i===null?Lm(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var On=Zo.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Rr=60103,gn=60106,Tt=60107,Ls=60108,Fr=60114,Ms=60109,Rs=60110,qo=60112,Br=60113,vo=60120,el=60115,Ts=60116,js=60121,As=60128,kf=60129,Is=60130,ya=60131;if(typeof Symbol=="function"&&Symbol.for){var we=Symbol.for;Rr=we("react.element"),gn=we("react.portal"),Tt=we("react.fragment"),Ls=we("react.strict_mode"),Fr=we("react.profiler"),Ms=we("react.provider"),Rs=we("react.context"),qo=we("react.forward_ref"),Br=we("react.suspense"),vo=we("react.suspense_list"),el=we("react.memo"),Ts=we("react.lazy"),js=we("react.block"),we("react.scope"),As=we("react.opaque.id"),kf=we("react.debug_trace_mode"),Is=we("react.offscreen"),ya=we("react.legacy_hidden")}var qu=typeof Symbol=="function"&&Symbol.iterator;function br(e){return e===null||typeof e!="object"?null:(e=qu&&e[qu]||e["@@iterator"],typeof e=="function"?e:null)}var Tl;function Tr(e){if(Tl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Tl=t&&t[1]||""}return`
`+Tl+e}var jl=!1;function Di(e,t){if(!e||jl)return"";jl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,a=o.length-1;1<=l&&0<=a&&i[l]!==o[a];)a--;for(;1<=l&&0<=a;l--,a--)if(i[l]!==o[a]){if(l!==1||a!==1)do if(l--,a--,0>a||i[l]!==o[a])return`
`+i[l].replace(" at new "," at ");while(1<=l&&0<=a);break}}}finally{jl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Tr(e):""}function Tm(e){switch(e.tag){case 5:return Tr(e.type);case 16:return Tr("Lazy");case 13:return Tr("Suspense");case 19:return Tr("SuspenseList");case 0:case 2:case 15:return e=Di(e.type,!1),e;case 11:return e=Di(e.type.render,!1),e;case 22:return e=Di(e.type._render,!1),e;case 1:return e=Di(e.type,!0),e;default:return""}}function Wn(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Tt:return"Fragment";case gn:return"Portal";case Fr:return"Profiler";case Ls:return"StrictMode";case Br:return"Suspense";case vo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Rs:return(e.displayName||"Context")+".Consumer";case Ms:return(e._context.displayName||"Context")+".Provider";case qo:var t=e.render;return t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case el:return Wn(e.type);case js:return Wn(e._render);case Ts:t=e._payload,e=e._init;try{return Wn(e(t))}catch{}}return null}function tn(e){switch(typeof e){case"boolean":case"number":case"object":case"string":case"undefined":return e;default:return""}}function Cf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function jm(e){var t=Cf(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n!="undefined"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Fi(e){e._valueTracker||(e._valueTracker=jm(e))}function Nf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Cf(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function yo(e){if(e=e||(typeof document!="undefined"?document:void 0),typeof e=="undefined")return null;try{return e.activeElement||e.body}catch{return e.body}}function xa(e,t){var n=t.checked;return le({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}function ec(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=tn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ef(e,t){t=t.checked,t!=null&&zs(e,"checked",t,!1)}function wa(e,t){Ef(e,t);var n=tn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Sa(e,t.type,n):t.hasOwnProperty("defaultValue")&&Sa(e,t.type,tn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function tc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Sa(e,t,n){(t!=="number"||yo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}function Am(e){var t="";return Zo.Children.forEach(e,function(n){n!=null&&(t+=n)}),t}function ba(e,t){return e=le({children:void 0},t),(t=Am(t.children))&&(e.children=t),e}function Xn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+tn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function ka(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(O(91));return le({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function nc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(O(92));if(Array.isArray(n)){if(!(1>=n.length))throw Error(O(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:tn(n)}}function _f(e,t){var n=tn(t.value),r=tn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function rc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}var Ca={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};function Pf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Na(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Pf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Bi,Of=function(e){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!==Ca.svg||"innerHTML"in e)e.innerHTML=t;else{for(Bi=Bi||document.createElement("div"),Bi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Bi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ei(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Hr={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Im=["Webkit","ms","Moz","O"];Object.keys(Hr).forEach(function(e){Im.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Hr[t]=Hr[e]})});function $f(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Hr.hasOwnProperty(e)&&Hr[e]?(""+t).trim():t+"px"}function zf(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=$f(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Dm=le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ea(e,t){if(t){if(Dm[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(O(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(O(60));if(!(typeof t.dangerouslySetInnerHTML=="object"&&"__html"in t.dangerouslySetInnerHTML))throw Error(O(61))}if(t.style!=null&&typeof t.style!="object")throw Error(O(62))}}function _a(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}function Ds(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Pa=null,Yn=null,Gn=null;function ic(e){if(e=Si(e)){if(typeof Pa!="function")throw Error(O(280));var t=e.stateNode;t&&(t=ll(t),Pa(e.stateNode,e.type,t))}}function Lf(e){Yn?Gn?Gn.push(e):Gn=[e]:Yn=e}function Mf(){if(Yn){var e=Yn,t=Gn;if(Gn=Yn=null,ic(e),t)for(e=0;e<t.length;e++)ic(t[e])}}function Fs(e,t){return e(t)}function Rf(e,t,n,r,i){return e(t,n,r,i)}function Bs(){}var Tf=Fs,vn=!1,Al=!1;function Hs(){(Yn!==null||Gn!==null)&&(Bs(),Mf())}function Fm(e,t,n){if(Al)return e(t,n);Al=!0;try{return Tf(e,t,n)}finally{Al=!1,Hs()}}function ti(e,t){var n=e.stateNode;if(n===null)return null;var r=ll(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(O(231,t,typeof n));return n}var Oa=!1;if(Et)try{var kr={};Object.defineProperty(kr,"passive",{get:function(){Oa=!0}}),window.addEventListener("test",kr,kr),window.removeEventListener("test",kr,kr)}catch{Oa=!1}function Bm(e,t,n,r,i,o,l,a,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(h){this.onError(h)}}var Ur=!1,xo=null,wo=!1,$a=null,Hm={onError:function(e){Ur=!0,xo=e}};function Um(e,t,n,r,i,o,l,a,u){Ur=!1,xo=null,Bm.apply(Hm,arguments)}function Vm(e,t,n,r,i,o,l,a,u){if(Um.apply(this,arguments),Ur){if(Ur){var c=xo;Ur=!1,xo=null}else throw Error(O(198));wo||(wo=!0,$a=c)}}function $n(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&1026)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function jf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function oc(e){if($n(e)!==e)throw Error(O(188))}function Wm(e){var t=e.alternate;if(!t){if(t=$n(e),t===null)throw Error(O(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return oc(i),e;if(o===r)return oc(i),t;o=o.sibling}throw Error(O(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l){for(a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l)throw Error(O(189))}}if(n.alternate!==r)throw Error(O(190))}if(n.tag!==3)throw Error(O(188));return n.stateNode.current===n?e:t}function Af(e){if(e=Wm(e),!e)return null;for(var t=e;;){if(t.tag===5||t.tag===6)return t;if(t.child)t.child.return=t,t=t.child;else{if(t===e)break;for(;!t.sibling;){if(!t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}}return null}function lc(e,t){for(var n=e.alternate;t!==null;){if(t===e||t===n)return!0;t=t.return}return!1}var If,Us,Df,Ff,za=!1,dt=[],Ht=null,Ut=null,Vt=null,ni=new Map,ri=new Map,Cr=[],ac="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function La(e,t,n,r,i){return{blockedOn:e,domEventName:t,eventSystemFlags:n|16,nativeEvent:i,targetContainers:[r]}}function sc(e,t){switch(e){case"focusin":case"focusout":Ht=null;break;case"dragenter":case"dragleave":Ut=null;break;case"mouseover":case"mouseout":Vt=null;break;case"pointerover":case"pointerout":ni.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ri.delete(t.pointerId)}}function Nr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e=La(t,n,r,i,o),t!==null&&(t=Si(t),t!==null&&Us(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Xm(e,t,n,r,i){switch(t){case"focusin":return Ht=Nr(Ht,e,t,n,r,i),!0;case"dragenter":return Ut=Nr(Ut,e,t,n,r,i),!0;case"mouseover":return Vt=Nr(Vt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return ni.set(o,Nr(ni.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,ri.set(o,Nr(ri.get(o)||null,e,t,n,r,i)),!0}return!1}function Ym(e){var t=yn(e.target);if(t!==null){var n=$n(t);if(n!==null){if(t=n.tag,t===13){if(t=jf(n),t!==null){e.blockedOn=t,Ff(e.lanePriority,function(){Se.unstable_runWithPriority(e.priority,function(){Df(n)})});return}}else if(t===3&&n.stateNode.hydrate){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function io(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ys(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n!==null)return t=Si(n),t!==null&&Us(t),e.blockedOn=n,!1;t.shift()}return!0}function uc(e,t,n){io(e)&&n.delete(t)}function Gm(){for(za=!1;0<dt.length;){var e=dt[0];if(e.blockedOn!==null){e=Si(e.blockedOn),e!==null&&If(e);break}for(var t=e.targetContainers;0<t.length;){var n=Ys(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n!==null){e.blockedOn=n;break}t.shift()}e.blockedOn===null&&dt.shift()}Ht!==null&&io(Ht)&&(Ht=null),Ut!==null&&io(Ut)&&(Ut=null),Vt!==null&&io(Vt)&&(Vt=null),ni.forEach(uc),ri.forEach(uc)}function Er(e,t){e.blockedOn===t&&(e.blockedOn=null,za||(za=!0,Se.unstable_scheduleCallback(Se.unstable_NormalPriority,Gm)))}function Bf(e){function t(i){return Er(i,e)}if(0<dt.length){Er(dt[0],e);for(var n=1;n<dt.length;n++){var r=dt[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Ht!==null&&Er(Ht,e),Ut!==null&&Er(Ut,e),Vt!==null&&Er(Vt,e),ni.forEach(t),ri.forEach(t),n=0;n<Cr.length;n++)r=Cr[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Cr.length&&(n=Cr[0],n.blockedOn===null);)Ym(n),n.blockedOn===null&&Cr.shift()}function Hi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var In={animationend:Hi("Animation","AnimationEnd"),animationiteration:Hi("Animation","AnimationIteration"),animationstart:Hi("Animation","AnimationStart"),transitionend:Hi("Transition","TransitionEnd")},Il={},Hf={};Et&&(Hf=document.createElement("div").style,"AnimationEvent"in window||(delete In.animationend.animation,delete In.animationiteration.animation,delete In.animationstart.animation),"TransitionEvent"in window||delete In.transitionend.transition);function tl(e){if(Il[e])return Il[e];if(!In[e])return e;var t=In[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Hf)return Il[e]=t[n];return e}var Uf=tl("animationend"),Vf=tl("animationiteration"),Wf=tl("animationstart"),Xf=tl("transitionend"),Yf=new Map,Vs=new Map,Km=["abort","abort",Uf,"animationEnd",Vf,"animationIteration",Wf,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart","lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",Xf,"transitionEnd","waiting","waiting"];function Ws(e,t){for(var n=0;n<e.length;n+=2){var r=e[n],i=e[n+1];i="on"+(i[0].toUpperCase()+i.slice(1)),Vs.set(r,t),Yf.set(r,i),Pn(i,[r])}}var Qm=Se.unstable_now;Qm();var ee=8;function jn(e){if((1&e)!==0)return ee=15,1;if((2&e)!==0)return ee=14,2;if((4&e)!==0)return ee=13,4;var t=24&e;return t!==0?(ee=12,t):(e&32)!==0?(ee=11,32):(t=192&e,t!==0?(ee=10,t):(e&256)!==0?(ee=9,256):(t=3584&e,t!==0?(ee=8,t):(e&4096)!==0?(ee=7,4096):(t=4186112&e,t!==0?(ee=6,t):(t=62914560&e,t!==0?(ee=5,t):e&67108864?(ee=4,67108864):(e&134217728)!==0?(ee=3,134217728):(t=805306368&e,t!==0?(ee=2,t):(1073741824&e)!==0?(ee=1,1073741824):(ee=8,e))))))}function Jm(e){switch(e){case 99:return 15;case 98:return 10;case 97:case 96:return 8;case 95:return 2;default:return 0}}function Zm(e){switch(e){case 15:case 14:return 99;case 13:case 12:case 11:case 10:return 98;case 9:case 8:case 7:case 6:case 4:case 5:return 97;case 3:case 2:case 1:return 95;case 0:return 90;default:throw Error(O(358,e))}}function ii(e,t){var n=e.pendingLanes;if(n===0)return ee=0;var r=0,i=0,o=e.expiredLanes,l=e.suspendedLanes,a=e.pingedLanes;if(o!==0)r=o,i=ee=15;else if(o=n&134217727,o!==0){var u=o&~l;u!==0?(r=jn(u),i=ee):(a&=o,a!==0&&(r=jn(a),i=ee))}else o=n&~l,o!==0?(r=jn(o),i=ee):a!==0&&(r=jn(a),i=ee);if(r===0)return 0;if(r=31-nn(r),r=n&((0>r?0:1<<r)<<1)-1,t!==0&&t!==r&&(t&l)===0){if(jn(t),i<=ee)return t;ee=i}if(t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-nn(t),i=1<<n,r|=e[n],t&=~i;return r}function Gf(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function So(e,t){switch(e){case 15:return 1;case 14:return 2;case 12:return e=An(24&~t),e===0?So(10,t):e;case 10:return e=An(192&~t),e===0?So(8,t):e;case 8:return e=An(3584&~t),e===0&&(e=An(4186112&~t),e===0&&(e=512)),e;case 2:return t=An(805306368&~t),t===0&&(t=268435456),t}throw Error(O(358,e))}function An(e){return e&-e}function Dl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function nl(e,t,n){e.pendingLanes|=t;var r=t-1;e.suspendedLanes&=r,e.pingedLanes&=r,e=e.eventTimes,t=31-nn(t),e[t]=n}var nn=Math.clz32?Math.clz32:t0,qm=Math.log,e0=Math.LN2;function t0(e){return e===0?32:31-(qm(e)/e0|0)|0}var n0=Se.unstable_UserBlockingPriority,r0=Se.unstable_runWithPriority,oo=!0;function i0(e,t,n,r){vn||Bs();var i=Xs,o=vn;vn=!0;try{Rf(i,e,t,n,r)}finally{(vn=o)||Hs()}}function o0(e,t,n,r){r0(n0,Xs.bind(null,e,t,n,r))}function Xs(e,t,n,r){if(oo){var i;if((i=(t&4)===0)&&0<dt.length&&-1<ac.indexOf(e))e=La(null,e,t,n,r),dt.push(e);else{var o=Ys(e,t,n,r);if(o===null)i&&sc(e,r);else{if(i){if(-1<ac.indexOf(e)){e=La(o,e,t,n,r),dt.push(e);return}if(Xm(o,e,t,n,r))return;sc(e,r)}ap(e,t,r,null,n)}}}}function Ys(e,t,n,r){var i=Ds(r);if(i=yn(i),i!==null){var o=$n(i);if(o===null)i=null;else{var l=o.tag;if(l===13){if(i=jf(o),i!==null)return i;i=null}else if(l===3){if(o.stateNode.hydrate)return o.tag===3?o.stateNode.containerInfo:null;i=null}else o!==i&&(i=null)}}return ap(e,t,r,i,n),null}var At=null,Gs=null,lo=null;function Kf(){if(lo)return lo;var e,t=Gs,n=t.length,r,i="value"in At?At.value:At.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[o-r];r++);return lo=i.slice(e,1<r?1-r:void 0)}function ao(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ui(){return!0}function cc(){return!1}function Ge(e){function t(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Ui:cc,this.isPropagationStopped=cc,this}return le(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ui)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ui)},persist:function(){},isPersistent:Ui}),t}var pr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ks=Ge(pr),wi=le({},pr,{view:0,detail:0}),l0=Ge(wi),Fl,Bl,_r,rl=le({},wi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Qs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==_r&&(_r&&e.type==="mousemove"?(Fl=e.screenX-_r.screenX,Bl=e.screenY-_r.screenY):Bl=Fl=0,_r=e),Fl)},movementY:function(e){return"movementY"in e?e.movementY:Bl}}),dc=Ge(rl),a0=le({},rl,{dataTransfer:0}),s0=Ge(a0),u0=le({},wi,{relatedTarget:0}),Hl=Ge(u0),c0=le({},pr,{animationName:0,elapsedTime:0,pseudoElement:0}),d0=Ge(c0),f0=le({},pr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),p0=Ge(f0),h0=le({},pr,{data:0}),fc=Ge(h0),m0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},g0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},v0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function y0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=v0[e])?!!t[e]:!1}function Qs(){return y0}var x0=le({},wi,{key:function(e){if(e.key){var t=m0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ao(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?g0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Qs,charCode:function(e){return e.type==="keypress"?ao(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ao(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),w0=Ge(x0),S0=le({},rl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),pc=Ge(S0),b0=le({},wi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Qs}),k0=Ge(b0),C0=le({},pr,{propertyName:0,elapsedTime:0,pseudoElement:0}),N0=Ge(C0),E0=le({},rl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),_0=Ge(E0),P0=[9,13,27,32],Js=Et&&"CompositionEvent"in window,Vr=null;Et&&"documentMode"in document&&(Vr=document.documentMode);var O0=Et&&"TextEvent"in window&&!Vr,Qf=Et&&(!Js||Vr&&8<Vr&&11>=Vr),hc=String.fromCharCode(32),mc=!1;function Jf(e,t){switch(e){case"keyup":return P0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Dn=!1;function $0(e,t){switch(e){case"compositionend":return Zf(t);case"keypress":return t.which!==32?null:(mc=!0,hc);case"textInput":return e=t.data,e===hc&&mc?null:e;default:return null}}function z0(e,t){if(Dn)return e==="compositionend"||!Js&&Jf(e,t)?(e=Kf(),lo=Gs=At=null,Dn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Qf&&t.locale!=="ko"?null:t.data;default:return null}}var L0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!L0[e.type]:t==="textarea"}function qf(e,t,n,r){Lf(r),t=bo(t,"onChange"),0<t.length&&(n=new Ks("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Wr=null,oi=null;function M0(e){ip(e,0)}function il(e){var t=Bn(e);if(Nf(t))return e}function R0(e,t){if(e==="change")return t}var ep=!1;if(Et){var Ul;if(Et){var Vl="oninput"in document;if(!Vl){var vc=document.createElement("div");vc.setAttribute("oninput","return;"),Vl=typeof vc.oninput=="function"}Ul=Vl}else Ul=!1;ep=Ul&&(!document.documentMode||9<document.documentMode)}function yc(){Wr&&(Wr.detachEvent("onpropertychange",tp),oi=Wr=null)}function tp(e){if(e.propertyName==="value"&&il(oi)){var t=[];if(qf(t,oi,e,Ds(e)),e=M0,vn)e(t);else{vn=!0;try{Fs(e,t)}finally{vn=!1,Hs()}}}}function T0(e,t,n){e==="focusin"?(yc(),Wr=t,oi=n,Wr.attachEvent("onpropertychange",tp)):e==="focusout"&&yc()}function j0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return il(oi)}function A0(e,t){if(e==="click")return il(t)}function I0(e,t){if(e==="input"||e==="change")return il(t)}function D0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Qe=typeof Object.is=="function"?Object.is:D0,F0=Object.prototype.hasOwnProperty;function li(e,t){if(Qe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++)if(!F0.call(t,n[r])||!Qe(e[n[r]],t[n[r]]))return!1;return!0}function xc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function wc(e,t){var n=xc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=xc(n)}}function np(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?np(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Sc(){for(var e=window,t=yo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=yo(e.document)}return t}function Ma(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var B0=Et&&"documentMode"in document&&11>=document.documentMode,Fn=null,Ra=null,Xr=null,Ta=!1;function bc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ta||Fn==null||Fn!==yo(r)||(r=Fn,"selectionStart"in r&&Ma(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Xr&&li(Xr,r)||(Xr=r,r=bo(Ra,"onSelect"),0<r.length&&(t=new Ks("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Fn)))}Ws("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),0);Ws("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1);Ws(Km,2);for(var kc="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),Wl=0;Wl<kc.length;Wl++)Vs.set(kc[Wl],0);ir("onMouseEnter",["mouseout","mouseover"]);ir("onMouseLeave",["mouseout","mouseover"]);ir("onPointerEnter",["pointerout","pointerover"]);ir("onPointerLeave",["pointerout","pointerover"]);Pn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Pn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Pn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Pn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Pn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Pn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var jr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),rp=new Set("cancel close invalid load scroll toggle".split(" ").concat(jr));function Cc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Vm(r,t,void 0,e),e.currentTarget=null}function ip(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==o&&i.isPropagationStopped())break e;Cc(i,a,c),o=u}else for(l=0;l<r.length;l++){if(a=r[l],u=a.instance,c=a.currentTarget,a=a.listener,u!==o&&i.isPropagationStopped())break e;Cc(i,a,c),o=u}}}if(wo)throw e=$a,wo=!1,$a=null,e}function ne(e,t){var n=up(t),r=e+"__bubble";n.has(r)||(lp(t,e,2,!1),n.add(r))}var Nc="_reactListening"+Math.random().toString(36).slice(2);function op(e){e[Nc]||(e[Nc]=!0,bf.forEach(function(t){rp.has(t)||Ec(t,!1,e,null),Ec(t,!0,e,null)}))}function Ec(e,t,n,r){var i=4<arguments.length&&arguments[4]!==void 0?arguments[4]:0,o=n;if(e==="selectionchange"&&n.nodeType!==9&&(o=n.ownerDocument),r!==null&&!t&&rp.has(e)){if(e!=="scroll")return;i|=2,o=r}var l=up(o),a=e+"__"+(t?"capture":"bubble");l.has(a)||(t&&(i|=4),lp(o,e,i,t),l.add(a))}function lp(e,t,n,r){var i=Vs.get(t);switch(i===void 0?2:i){case 0:i=i0;break;case 1:i=o0;break;default:i=Xs}n=i.bind(null,t,n,e),i=void 0,!Oa||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ap(e,t,n,r,i){var o=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var u=l.tag;if((u===3||u===4)&&(u=l.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;l=l.return}for(;a!==null;){if(l=yn(a),l===null)return;if(u=l.tag,u===5||u===6){r=o=l;continue e}a=a.parentNode}}r=r.return}Fm(function(){var c=o,h=Ds(n),g=[];e:{var m=Yf.get(e);if(m!==void 0){var S=Ks,x=e;switch(e){case"keypress":if(ao(n)===0)break e;case"keydown":case"keyup":S=w0;break;case"focusin":x="focus",S=Hl;break;case"focusout":x="blur",S=Hl;break;case"beforeblur":case"afterblur":S=Hl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=dc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=s0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=k0;break;case Uf:case Vf:case Wf:S=d0;break;case Xf:S=N0;break;case"scroll":S=l0;break;case"wheel":S=_0;break;case"copy":case"cut":case"paste":S=p0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=pc}var w=(t&4)!==0,d=!w&&e==="scroll",f=w?m!==null?m+"Capture":null:m;w=[];for(var p=c,v;p!==null;){v=p;var b=v.stateNode;if(v.tag===5&&b!==null&&(v=b,f!==null&&(b=ti(p,f),b!=null&&w.push(ai(p,b,v)))),d)break;p=p.return}0<w.length&&(m=new S(m,x,null,n,h),g.push({event:m,listeners:w}))}}if((t&7)===0){e:{if(m=e==="mouseover"||e==="pointerover",S=e==="mouseout"||e==="pointerout",m&&(t&16)===0&&(x=n.relatedTarget||n.fromElement)&&(yn(x)||x[hr]))break e;if((S||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,S?(x=n.relatedTarget||n.toElement,S=c,x=x?yn(x):null,x!==null&&(d=$n(x),x!==d||x.tag!==5&&x.tag!==6)&&(x=null)):(S=null,x=c),S!==x)){if(w=dc,b="onMouseLeave",f="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(w=pc,b="onPointerLeave",f="onPointerEnter",p="pointer"),d=S==null?m:Bn(S),v=x==null?m:Bn(x),m=new w(b,p+"leave",S,n,h),m.target=d,m.relatedTarget=v,b=null,yn(h)===c&&(w=new w(f,p+"enter",x,n,h),w.target=v,w.relatedTarget=d,b=w),d=b,S&&x)t:{for(w=S,f=x,p=0,v=w;v;v=Rn(v))p++;for(v=0,b=f;b;b=Rn(b))v++;for(;0<p-v;)w=Rn(w),p--;for(;0<v-p;)f=Rn(f),v--;for(;p--;){if(w===f||f!==null&&w===f.alternate)break t;w=Rn(w),f=Rn(f)}w=null}else w=null;S!==null&&_c(g,m,S,w,!1),x!==null&&d!==null&&_c(g,d,x,w,!0)}}e:{if(m=c?Bn(c):window,S=m.nodeName&&m.nodeName.toLowerCase(),S==="select"||S==="input"&&m.type==="file")var P=R0;else if(gc(m))if(ep)P=I0;else{P=j0;var _=T0}else(S=m.nodeName)&&S.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(P=A0);if(P&&(P=P(e,c))){qf(g,P,n,h);break e}_&&_(e,m,c),e==="focusout"&&(_=m._wrapperState)&&_.controlled&&m.type==="number"&&Sa(m,"number",m.value)}switch(_=c?Bn(c):window,e){case"focusin":(gc(_)||_.contentEditable==="true")&&(Fn=_,Ra=c,Xr=null);break;case"focusout":Xr=Ra=Fn=null;break;case"mousedown":Ta=!0;break;case"contextmenu":case"mouseup":case"dragend":Ta=!1,bc(g,n,h);break;case"selectionchange":if(B0)break;case"keydown":case"keyup":bc(g,n,h)}var T;if(Js)e:{switch(e){case"compositionstart":var j="onCompositionStart";break e;case"compositionend":j="onCompositionEnd";break e;case"compositionupdate":j="onCompositionUpdate";break e}j=void 0}else Dn?Jf(e,n)&&(j="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(j="onCompositionStart");j&&(Qf&&n.locale!=="ko"&&(Dn||j!=="onCompositionStart"?j==="onCompositionEnd"&&Dn&&(T=Kf()):(At=h,Gs="value"in At?At.value:At.textContent,Dn=!0)),_=bo(c,j),0<_.length&&(j=new fc(j,e,null,n,h),g.push({event:j,listeners:_}),T?j.data=T:(T=Zf(n),T!==null&&(j.data=T)))),(T=O0?$0(e,n):z0(e,n))&&(c=bo(c,"onBeforeInput"),0<c.length&&(h=new fc("onBeforeInput","beforeinput",null,n,h),g.push({event:h,listeners:c}),h.data=T))}ip(g,t)})}function ai(e,t,n){return{instance:e,listener:t,currentTarget:n}}function bo(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=ti(e,n),o!=null&&r.unshift(ai(e,o,i)),o=ti(e,t),o!=null&&r.push(ai(e,o,i))),e=e.return}return r}function Rn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function _c(e,t,n,r,i){for(var o=t._reactName,l=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,i?(u=ti(n,o),u!=null&&l.unshift(ai(n,u,a))):i||(u=ti(n,o),u!=null&&l.push(ai(n,u,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}function ko(){}var Xl=null,Yl=null;function sp(e,t){switch(e){case"button":case"input":case"select":case"textarea":return!!t.autoFocus}return!1}function ja(e,t){return e==="textarea"||e==="option"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Pc=typeof setTimeout=="function"?setTimeout:void 0,H0=typeof clearTimeout=="function"?clearTimeout:void 0;function Zs(e){e.nodeType===1?e.textContent="":e.nodeType===9&&(e=e.body,e!=null&&(e.textContent=""))}function Kn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break}return e}function Oc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Gl=0;function U0(e){return{$$typeof:As,toString:e,valueOf:e}}var ol=Math.random().toString(36).slice(2),It="__reactFiber$"+ol,Co="__reactProps$"+ol,hr="__reactContainer$"+ol,$c="__reactEvents$"+ol;function yn(e){var t=e[It];if(t)return t;for(var n=e.parentNode;n;){if(t=n[hr]||n[It]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Oc(e);e!==null;){if(n=e[It])return n;e=Oc(e)}return t}e=n,n=e.parentNode}return null}function Si(e){return e=e[It]||e[hr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Bn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(O(33))}function ll(e){return e[Co]||null}function up(e){var t=e[$c];return t===void 0&&(t=e[$c]=new Set),t}var Aa=[],Hn=-1;function cn(e){return{current:e}}function re(e){0>Hn||(e.current=Aa[Hn],Aa[Hn]=null,Hn--)}function ue(e,t){Hn++,Aa[Hn]=e.current,e.current=t}var rn={},Ae=cn(rn),Ve=cn(!1),bn=rn;function or(e,t){var n=e.type.contextTypes;if(!n)return rn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function We(e){return e=e.childContextTypes,e!=null}function No(){re(Ve),re(Ae)}function zc(e,t,n){if(Ae.current!==rn)throw Error(O(168));ue(Ae,t),ue(Ve,n)}function cp(e,t,n){var r=e.stateNode;if(e=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(O(108,Wn(t)||"Unknown",i));return le({},n,r)}function so(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||rn,bn=Ae.current,ue(Ae,e),ue(Ve,Ve.current),!0}function Lc(e,t,n){var r=e.stateNode;if(!r)throw Error(O(169));n?(e=cp(e,t,bn),r.__reactInternalMemoizedMergedChildContext=e,re(Ve),re(Ae),ue(Ae,e)):re(Ve),ue(Ve,n)}var qs=null,Sn=null,V0=Se.unstable_runWithPriority,eu=Se.unstable_scheduleCallback,Ia=Se.unstable_cancelCallback,W0=Se.unstable_shouldYield,Mc=Se.unstable_requestPaint,Da=Se.unstable_now,X0=Se.unstable_getCurrentPriorityLevel,al=Se.unstable_ImmediatePriority,dp=Se.unstable_UserBlockingPriority,fp=Se.unstable_NormalPriority,pp=Se.unstable_LowPriority,hp=Se.unstable_IdlePriority,Kl={},Y0=Mc!==void 0?Mc:function(){},St=null,uo=null,Ql=!1,Rc=Da(),Re=1e4>Rc?Da:function(){return Da()-Rc};function lr(){switch(X0()){case al:return 99;case dp:return 98;case fp:return 97;case pp:return 96;case hp:return 95;default:throw Error(O(332))}}function mp(e){switch(e){case 99:return al;case 98:return dp;case 97:return fp;case 96:return pp;case 95:return hp;default:throw Error(O(332))}}function kn(e,t){return e=mp(e),V0(e,t)}function si(e,t,n){return e=mp(e),eu(e,t,n)}function vt(){if(uo!==null){var e=uo;uo=null,Ia(e)}gp()}function gp(){if(!Ql&&St!==null){Ql=!0;var e=0;try{var t=St;kn(99,function(){for(;e<t.length;e++){var n=t[e];do n=n(!0);while(n!==null)}}),St=null}catch(n){throw St!==null&&(St=St.slice(e+1)),eu(al,vt),n}finally{Ql=!1}}}var G0=On.ReactCurrentBatchConfig;function ot(e,t){if(e&&e.defaultProps){t=le({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Eo=cn(null),_o=null,Un=null,Po=null;function tu(){Po=Un=_o=null}function nu(e){var t=Eo.current;re(Eo),e.type._context._currentValue=t}function vp(e,t){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)===t){if(n===null||(n.childLanes&t)===t)break;n.childLanes|=t}else e.childLanes|=t,n!==null&&(n.childLanes|=t);e=e.return}}function Qn(e,t){_o=e,Po=Un=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(at=!0),e.firstContext=null)}function qe(e,t){if(Po!==e&&t!==!1&&t!==0)if((typeof t!="number"||t===1073741823)&&(Po=e,t=1073741823),t={context:e,observedBits:t,next:null},Un===null){if(_o===null)throw Error(O(308));Un=t,_o.dependencies={lanes:0,firstContext:t,responders:null}}else Un=Un.next=t;return e._currentValue}var Rt=!1;function ru(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null},effects:null}}function yp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Wt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Xt(e,t){if(e=e.updateQueue,e!==null){e=e.shared;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}}function Tc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ui(e,t,n,r){var i=e.updateQueue;Rt=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,c=u.next;u.next=null,l===null?o=c:l.next=c,l=u;var h=e.alternate;if(h!==null){h=h.updateQueue;var g=h.lastBaseUpdate;g!==l&&(g===null?h.firstBaseUpdate=c:g.next=c,h.lastBaseUpdate=u)}}if(o!==null){g=i.baseState,l=0,h=c=u=null;do{a=o.lane;var m=o.eventTime;if((r&a)===a){h!==null&&(h=h.next={eventTime:m,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var S=e,x=o;switch(a=t,m=n,x.tag){case 1:if(S=x.payload,typeof S=="function"){g=S.call(m,g,a);break e}g=S;break e;case 3:S.flags=S.flags&-4097|64;case 0:if(S=x.payload,a=typeof S=="function"?S.call(m,g,a):S,a==null)break e;g=le({},g,a);break e;case 2:Rt=!0}}o.callback!==null&&(e.flags|=32,a=i.effects,a===null?i.effects=[o]:a.push(o))}else m={eventTime:m,lane:a,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(c=h=m,u=g):h=h.next=m,l|=a;if(o=o.next,o===null){if(a=i.shared.pending,a===null)break;o=a.next,a.next=null,i.lastBaseUpdate=a,i.shared.pending=null}}while(1);h===null&&(u=g),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=h,ki|=l,e.lanes=l,e.memoizedState=g}}function jc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(O(191,i));i.call(r)}}}var xp=new Zo.Component().refs;function Oo(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:le({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var sl={isMounted:function(e){return(e=e._reactInternals)?$n(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Xe(),i=Yt(e),o=Wt(r,i);o.payload=t,n!=null&&(o.callback=n),Xt(e,o),Gt(e,i,r)},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Xe(),i=Yt(e),o=Wt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),Xt(e,o),Gt(e,i,r)},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Xe(),r=Yt(e),i=Wt(n,r);i.tag=2,t!=null&&(i.callback=t),Xt(e,i),Gt(e,r,n)}};function Ac(e,t,n,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!li(n,r)||!li(i,o):!0}function wp(e,t,n){var r=!1,i=rn,o=t.contextType;return typeof o=="object"&&o!==null?o=qe(o):(i=We(t)?bn:Ae.current,r=t.contextTypes,o=(r=r!=null)?or(e,i):rn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=sl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Ic(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&sl.enqueueReplaceState(t,t.state,null)}function Fa(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=xp,ru(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=qe(o):(o=We(t)?bn:Ae.current,i.context=or(e,o)),ui(e,n,i,r),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Oo(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&sl.enqueueReplaceState(i,i.state,null),ui(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4)}var Vi=Array.isArray;function Pr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(O(309));var r=n.stateNode}if(!r)throw Error(O(147,e));var i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var l=r.refs;l===xp&&(l=r.refs={}),o===null?delete l[i]:l[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(O(284));if(!n._owner)throw Error(O(290,e))}return e}function Wi(e,t){if(e.type!=="textarea")throw Error(O(31,Object.prototype.toString.call(t)==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":t))}function Sp(e){function t(d,f){if(e){var p=d.lastEffect;p!==null?(p.nextEffect=f,d.lastEffect=f):d.firstEffect=d.lastEffect=f,f.nextEffect=null,f.flags=8}}function n(d,f){if(!e)return null;for(;f!==null;)t(d,f),f=f.sibling;return null}function r(d,f){for(d=new Map;f!==null;)f.key!==null?d.set(f.key,f):d.set(f.index,f),f=f.sibling;return d}function i(d,f){return d=ln(d,f),d.index=0,d.sibling=null,d}function o(d,f,p){return d.index=p,e?(p=d.alternate,p!==null?(p=p.index,p<f?(d.flags=2,f):p):(d.flags=2,f)):f}function l(d){return e&&d.alternate===null&&(d.flags=2),d}function a(d,f,p,v){return f===null||f.tag!==6?(f=ta(p,d.mode,v),f.return=d,f):(f=i(f,p),f.return=d,f)}function u(d,f,p,v){return f!==null&&f.elementType===p.type?(v=i(f,p.props),v.ref=Pr(d,f,p),v.return=d,v):(v=ho(p.type,p.key,p.props,null,d.mode,v),v.ref=Pr(d,f,p),v.return=d,v)}function c(d,f,p,v){return f===null||f.tag!==4||f.stateNode.containerInfo!==p.containerInfo||f.stateNode.implementation!==p.implementation?(f=na(p,d.mode,v),f.return=d,f):(f=i(f,p.children||[]),f.return=d,f)}function h(d,f,p,v,b){return f===null||f.tag!==7?(f=er(p,d.mode,v,b),f.return=d,f):(f=i(f,p),f.return=d,f)}function g(d,f,p){if(typeof f=="string"||typeof f=="number")return f=ta(""+f,d.mode,p),f.return=d,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Rr:return p=ho(f.type,f.key,f.props,null,d.mode,p),p.ref=Pr(d,null,f),p.return=d,p;case gn:return f=na(f,d.mode,p),f.return=d,f}if(Vi(f)||br(f))return f=er(f,d.mode,p,null),f.return=d,f;Wi(d,f)}return null}function m(d,f,p,v){var b=f!==null?f.key:null;if(typeof p=="string"||typeof p=="number")return b!==null?null:a(d,f,""+p,v);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Rr:return p.key===b?p.type===Tt?h(d,f,p.props.children,v,b):u(d,f,p,v):null;case gn:return p.key===b?c(d,f,p,v):null}if(Vi(p)||br(p))return b!==null?null:h(d,f,p,v,null);Wi(d,p)}return null}function S(d,f,p,v,b){if(typeof v=="string"||typeof v=="number")return d=d.get(p)||null,a(f,d,""+v,b);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Rr:return d=d.get(v.key===null?p:v.key)||null,v.type===Tt?h(f,d,v.props.children,b,v.key):u(f,d,v,b);case gn:return d=d.get(v.key===null?p:v.key)||null,c(f,d,v,b)}if(Vi(v)||br(v))return d=d.get(p)||null,h(f,d,v,b,null);Wi(f,v)}return null}function x(d,f,p,v){for(var b=null,P=null,_=f,T=f=0,j=null;_!==null&&T<p.length;T++){_.index>T?(j=_,_=null):j=_.sibling;var M=m(d,_,p[T],v);if(M===null){_===null&&(_=j);break}e&&_&&M.alternate===null&&t(d,_),f=o(M,f,T),P===null?b=M:P.sibling=M,P=M,_=j}if(T===p.length)return n(d,_),b;if(_===null){for(;T<p.length;T++)_=g(d,p[T],v),_!==null&&(f=o(_,f,T),P===null?b=_:P.sibling=_,P=_);return b}for(_=r(d,_);T<p.length;T++)j=S(_,d,T,p[T],v),j!==null&&(e&&j.alternate!==null&&_.delete(j.key===null?T:j.key),f=o(j,f,T),P===null?b=j:P.sibling=j,P=j);return e&&_.forEach(function(B){return t(d,B)}),b}function w(d,f,p,v){var b=br(p);if(typeof b!="function")throw Error(O(150));if(p=b.call(p),p==null)throw Error(O(151));for(var P=b=null,_=f,T=f=0,j=null,M=p.next();_!==null&&!M.done;T++,M=p.next()){_.index>T?(j=_,_=null):j=_.sibling;var B=m(d,_,M.value,v);if(B===null){_===null&&(_=j);break}e&&_&&B.alternate===null&&t(d,_),f=o(B,f,T),P===null?b=B:P.sibling=B,P=B,_=j}if(M.done)return n(d,_),b;if(_===null){for(;!M.done;T++,M=p.next())M=g(d,M.value,v),M!==null&&(f=o(M,f,T),P===null?b=M:P.sibling=M,P=M);return b}for(_=r(d,_);!M.done;T++,M=p.next())M=S(_,d,T,M.value,v),M!==null&&(e&&M.alternate!==null&&_.delete(M.key===null?T:M.key),f=o(M,f,T),P===null?b=M:P.sibling=M,P=M);return e&&_.forEach(function(ce){return t(d,ce)}),b}return function(d,f,p,v){var b=typeof p=="object"&&p!==null&&p.type===Tt&&p.key===null;b&&(p=p.props.children);var P=typeof p=="object"&&p!==null;if(P)switch(p.$$typeof){case Rr:e:{for(P=p.key,b=f;b!==null;){if(b.key===P){switch(b.tag){case 7:if(p.type===Tt){n(d,b.sibling),f=i(b,p.props.children),f.return=d,d=f;break e}break;default:if(b.elementType===p.type){n(d,b.sibling),f=i(b,p.props),f.ref=Pr(d,b,p),f.return=d,d=f;break e}}n(d,b);break}else t(d,b);b=b.sibling}p.type===Tt?(f=er(p.props.children,d.mode,v,p.key),f.return=d,d=f):(v=ho(p.type,p.key,p.props,null,d.mode,v),v.ref=Pr(d,f,p),v.return=d,d=v)}return l(d);case gn:e:{for(b=p.key;f!==null;){if(f.key===b)if(f.tag===4&&f.stateNode.containerInfo===p.containerInfo&&f.stateNode.implementation===p.implementation){n(d,f.sibling),f=i(f,p.children||[]),f.return=d,d=f;break e}else{n(d,f);break}else t(d,f);f=f.sibling}f=na(p,d.mode,v),f.return=d,d=f}return l(d)}if(typeof p=="string"||typeof p=="number")return p=""+p,f!==null&&f.tag===6?(n(d,f.sibling),f=i(f,p),f.return=d,d=f):(n(d,f),f=ta(p,d.mode,v),f.return=d,d=f),l(d);if(Vi(p))return x(d,f,p,v);if(br(p))return w(d,f,p,v);if(P&&Wi(d,p),typeof p=="undefined"&&!b)switch(d.tag){case 1:case 22:case 0:case 11:case 15:throw Error(O(152,Wn(d.type)||"Component"))}return n(d,f)}}var $o=Sp(!0),bp=Sp(!1),bi={},ht=cn(bi),ci=cn(bi),di=cn(bi);function xn(e){if(e===bi)throw Error(O(174));return e}function Ba(e,t){switch(ue(di,t),ue(ci,e),ue(ht,bi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Na(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Na(t,e)}re(ht),ue(ht,t)}function ar(){re(ht),re(ci),re(di)}function Dc(e){xn(di.current);var t=xn(ht.current),n=Na(t,e.type);t!==n&&(ue(ci,e),ue(ht,n))}function iu(e){ci.current===e&&(re(ht),re(ci))}var se=cn(0);function zo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&64)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var kt=null,Dt=null,mt=!1;function kp(e,t){var n=Je(5,null,null,0);n.elementType="DELETED",n.type="DELETED",n.stateNode=t,n.return=e,n.flags=8,e.lastEffect!==null?(e.lastEffect.nextEffect=n,e.lastEffect=n):e.firstEffect=e.lastEffect=n}function Fc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,!0):!1;case 13:return!1;default:return!1}}function Ha(e){if(mt){var t=Dt;if(t){var n=t;if(!Fc(e,t)){if(t=Kn(n.nextSibling),!t||!Fc(e,t)){e.flags=e.flags&-1025|2,mt=!1,kt=e;return}kp(kt,n)}kt=e,Dt=Kn(t.firstChild)}else e.flags=e.flags&-1025|2,mt=!1,kt=e}}function Bc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;kt=e}function Xi(e){if(e!==kt)return!1;if(!mt)return Bc(e),mt=!0,!1;var t=e.type;if(e.tag!==5||t!=="head"&&t!=="body"&&!ja(t,e.memoizedProps))for(t=Dt;t;)kp(e,t),t=Kn(t.nextSibling);if(Bc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(O(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Dt=Kn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Dt=null}}else Dt=kt?Kn(e.stateNode.nextSibling):null;return!0}function Jl(){Dt=kt=null,mt=!1}var Jn=[];function ou(){for(var e=0;e<Jn.length;e++)Jn[e]._workInProgressVersionPrimary=null;Jn.length=0}var Yr=On.ReactCurrentDispatcher,Ze=On.ReactCurrentBatchConfig,fi=0,pe=null,Le=null,_e=null,Lo=!1,Gr=!1;function He(){throw Error(O(321))}function lu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Qe(e[n],t[n]))return!1;return!0}function au(e,t,n,r,i,o){if(fi=o,pe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Yr.current=e===null||e.memoizedState===null?Q0:J0,e=n(r,i),Gr){o=0;do{if(Gr=!1,!(25>o))throw Error(O(301));o+=1,_e=Le=null,t.updateQueue=null,Yr.current=Z0,e=n(r,i)}while(Gr)}if(Yr.current=jo,t=Le!==null&&Le.next!==null,fi=0,_e=Le=pe=null,Lo=!1,t)throw Error(O(300));return e}function wn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _e===null?pe.memoizedState=_e=e:_e=_e.next=e,_e}function zn(){if(Le===null){var e=pe.alternate;e=e!==null?e.memoizedState:null}else e=Le.next;var t=_e===null?pe.memoizedState:_e.next;if(t!==null)_e=t,Le=e;else{if(e===null)throw Error(O(310));Le=e,e={memoizedState:Le.memoizedState,baseState:Le.baseState,baseQueue:Le.baseQueue,queue:Le.queue,next:null},_e===null?pe.memoizedState=_e=e:_e=_e.next=e}return _e}function ft(e,t){return typeof t=="function"?t(e):t}function Or(e){var t=zn(),n=t.queue;if(n===null)throw Error(O(311));n.lastRenderedReducer=e;var r=Le,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){i=i.next,r=r.baseState;var a=l=o=null,u=i;do{var c=u.lane;if((fi&c)===c)a!==null&&(a=a.next={lane:0,action:u.action,eagerReducer:u.eagerReducer,eagerState:u.eagerState,next:null}),r=u.eagerReducer===e?u.eagerState:e(r,u.action);else{var h={lane:c,action:u.action,eagerReducer:u.eagerReducer,eagerState:u.eagerState,next:null};a===null?(l=a=h,o=r):a=a.next=h,pe.lanes|=c,ki|=c}u=u.next}while(u!==null&&u!==i);a===null?o=r:a.next=l,Qe(r,t.memoizedState)||(at=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=a,n.lastRenderedState=r}return[t.memoizedState,n.dispatch]}function $r(e){var t=zn(),n=t.queue;if(n===null)throw Error(O(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);Qe(o,t.memoizedState)||(at=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Hc(e,t,n){var r=t._getVersion;r=r(t._source);var i=t._workInProgressVersionPrimary;if(i!==null?e=i===r:(e=e.mutableReadLanes,(e=(fi&e)===e)&&(t._workInProgressVersionPrimary=r,Jn.push(t))),e)return n(t._source);throw Jn.push(t),Error(O(350))}function Cp(e,t,n,r){var i=Ie;if(i===null)throw Error(O(349));var o=t._getVersion,l=o(t._source),a=Yr.current,u=a.useState(function(){return Hc(i,t,n)}),c=u[1],h=u[0];u=_e;var g=e.memoizedState,m=g.refs,S=m.getSnapshot,x=g.source;g=g.subscribe;var w=pe;return e.memoizedState={refs:m,source:t,subscribe:r},a.useEffect(function(){m.getSnapshot=n,m.setSnapshot=c;var d=o(t._source);if(!Qe(l,d)){d=n(t._source),Qe(h,d)||(c(d),d=Yt(w),i.mutableReadLanes|=d&i.pendingLanes),d=i.mutableReadLanes,i.entangledLanes|=d;for(var f=i.entanglements,p=d;0<p;){var v=31-nn(p),b=1<<v;f[v]|=d,p&=~b}}},[n,t,r]),a.useEffect(function(){return r(t._source,function(){var d=m.getSnapshot,f=m.setSnapshot;try{f(d(t._source));var p=Yt(w);i.mutableReadLanes|=p&i.pendingLanes}catch(v){f(function(){throw v})}})},[t,r]),Qe(S,n)&&Qe(x,t)&&Qe(g,r)||(e={pending:null,dispatch:null,lastRenderedReducer:ft,lastRenderedState:h},e.dispatch=c=cu.bind(null,pe,e),u.queue=e,u.baseQueue=null,h=Hc(i,t,n),u.memoizedState=u.baseState=h),h}function Np(e,t,n){var r=zn();return Cp(r,e,t,n)}function zr(e){var t=wn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e=t.queue={pending:null,dispatch:null,lastRenderedReducer:ft,lastRenderedState:e},e=e.dispatch=cu.bind(null,pe,e),[t.memoizedState,e]}function Mo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=pe.updateQueue,t===null?(t={lastEffect:null},pe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Uc(e){var t=wn();return e={current:e},t.memoizedState=e}function Ro(){return zn().memoizedState}function Ua(e,t,n,r){var i=wn();pe.flags|=e,i.memoizedState=Mo(1|t,n,void 0,r===void 0?null:r)}function su(e,t,n,r){var i=zn();r=r===void 0?null:r;var o=void 0;if(Le!==null){var l=Le.memoizedState;if(o=l.destroy,r!==null&&lu(r,l.deps)){Mo(t,n,o,r);return}}pe.flags|=e,i.memoizedState=Mo(1|t,n,o,r)}function Vc(e,t){return Ua(516,4,e,t)}function To(e,t){return su(516,4,e,t)}function Ep(e,t){return su(4,2,e,t)}function _p(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Pp(e,t,n){return n=n!=null?n.concat([e]):null,su(4,2,_p.bind(null,t,e),n)}function uu(){}function Op(e,t){var n=zn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&lu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function $p(e,t){var n=zn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&lu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function K0(e,t){var n=lr();kn(98>n?98:n,function(){e(!0)}),kn(97<n?97:n,function(){var r=Ze.transition;Ze.transition=1;try{e(!1),t()}finally{Ze.transition=r}})}function cu(e,t,n){var r=Xe(),i=Yt(e),o={lane:i,action:n,eagerReducer:null,eagerState:null,next:null},l=t.pending;if(l===null?o.next=o:(o.next=l.next,l.next=o),t.pending=o,l=e.alternate,e===pe||l!==null&&l===pe)Gr=Lo=!0;else{if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var a=t.lastRenderedState,u=l(a,n);if(o.eagerReducer=l,o.eagerState=u,Qe(u,a))return}catch{}finally{}Gt(e,i,r)}}var jo={readContext:qe,useCallback:He,useContext:He,useEffect:He,useImperativeHandle:He,useLayoutEffect:He,useMemo:He,useReducer:He,useRef:He,useState:He,useDebugValue:He,useDeferredValue:He,useTransition:He,useMutableSource:He,useOpaqueIdentifier:He,unstable_isNewReconciler:!1},Q0={readContext:qe,useCallback:function(e,t){return wn().memoizedState=[e,t===void 0?null:t],e},useContext:qe,useEffect:Vc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ua(4,2,_p.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ua(4,2,e,t)},useMemo:function(e,t){var n=wn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=wn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e=r.queue={pending:null,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},e=e.dispatch=cu.bind(null,pe,e),[r.memoizedState,e]},useRef:Uc,useState:zr,useDebugValue:uu,useDeferredValue:function(e){var t=zr(e),n=t[0],r=t[1];return Vc(function(){var i=Ze.transition;Ze.transition=1;try{r(e)}finally{Ze.transition=i}},[e]),n},useTransition:function(){var e=zr(!1),t=e[0];return e=K0.bind(null,e[1]),Uc(e),[e,t]},useMutableSource:function(e,t,n){var r=wn();return r.memoizedState={refs:{getSnapshot:t,setSnapshot:null},source:e,subscribe:n},Cp(r,e,t,n)},useOpaqueIdentifier:function(){if(mt){var e=!1,t=U0(function(){throw e||(e=!0,n("r:"+(Gl++).toString(36))),Error(O(355))}),n=zr(t)[1];return(pe.mode&2)===0&&(pe.flags|=516,Mo(5,function(){n("r:"+(Gl++).toString(36))},void 0,null)),t}return t="r:"+(Gl++).toString(36),zr(t),t},unstable_isNewReconciler:!1},J0={readContext:qe,useCallback:Op,useContext:qe,useEffect:To,useImperativeHandle:Pp,useLayoutEffect:Ep,useMemo:$p,useReducer:Or,useRef:Ro,useState:function(){return Or(ft)},useDebugValue:uu,useDeferredValue:function(e){var t=Or(ft),n=t[0],r=t[1];return To(function(){var i=Ze.transition;Ze.transition=1;try{r(e)}finally{Ze.transition=i}},[e]),n},useTransition:function(){var e=Or(ft)[0];return[Ro().current,e]},useMutableSource:Np,useOpaqueIdentifier:function(){return Or(ft)[0]},unstable_isNewReconciler:!1},Z0={readContext:qe,useCallback:Op,useContext:qe,useEffect:To,useImperativeHandle:Pp,useLayoutEffect:Ep,useMemo:$p,useReducer:$r,useRef:Ro,useState:function(){return $r(ft)},useDebugValue:uu,useDeferredValue:function(e){var t=$r(ft),n=t[0],r=t[1];return To(function(){var i=Ze.transition;Ze.transition=1;try{r(e)}finally{Ze.transition=i}},[e]),n},useTransition:function(){var e=$r(ft)[0];return[Ro().current,e]},useMutableSource:Np,useOpaqueIdentifier:function(){return $r(ft)[0]},unstable_isNewReconciler:!1},q0=On.ReactCurrentOwner,at=!1;function Ue(e,t,n,r){t.child=e===null?bp(t,null,n,r):$o(t,e.child,n,r)}function Wc(e,t,n,r,i){n=n.render;var o=t.ref;return Qn(t,i),r=au(e,t,n,r,o,i),e!==null&&!at?(t.updateQueue=e.updateQueue,t.flags&=-517,e.lanes&=~i,Ct(e,t,i)):(t.flags|=1,Ue(e,t,r,i),t.child)}function Xc(e,t,n,r,i,o){if(e===null){var l=n.type;return typeof l=="function"&&!gu(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,zp(e,t,l,r,i,o)):(e=ho(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}return l=e.child,(i&o)===0&&(i=l.memoizedProps,n=n.compare,n=n!==null?n:li,n(i,r)&&e.ref===t.ref)?Ct(e,t,o):(t.flags|=1,e=ln(l,r),e.ref=t.ref,e.return=t,t.child=e)}function zp(e,t,n,r,i,o){if(e!==null&&li(e.memoizedProps,r)&&e.ref===t.ref)if(at=!1,(o&i)!==0)(e.flags&16384)!==0&&(at=!0);else return t.lanes=e.lanes,Ct(e,t,o);return Va(e,t,n,r,o)}function Zl(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden"||r.mode==="unstable-defer-without-hiding")if((t.mode&4)===0)t.memoizedState={baseLanes:0},Gi(t,n);else if((n&1073741824)!==0)t.memoizedState={baseLanes:0},Gi(t,o!==null?o.baseLanes:n);else return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e},Gi(t,e),null;else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,Gi(t,r);return Ue(e,t,i,n),t.child}function Lp(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=128)}function Va(e,t,n,r,i){var o=We(n)?bn:Ae.current;return o=or(t,o),Qn(t,i),n=au(e,t,n,r,o,i),e!==null&&!at?(t.updateQueue=e.updateQueue,t.flags&=-517,e.lanes&=~i,Ct(e,t,i)):(t.flags|=1,Ue(e,t,n,i),t.child)}function Yc(e,t,n,r,i){if(We(n)){var o=!0;so(t)}else o=!1;if(Qn(t,i),t.stateNode===null)e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2),wp(t,n,r),Fa(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var u=l.context,c=n.contextType;typeof c=="object"&&c!==null?c=qe(c):(c=We(n)?bn:Ae.current,c=or(t,c));var h=n.getDerivedStateFromProps,g=typeof h=="function"||typeof l.getSnapshotBeforeUpdate=="function";g||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||u!==c)&&Ic(t,l,r,c),Rt=!1;var m=t.memoizedState;l.state=m,ui(t,r,l,i),u=t.memoizedState,a!==r||m!==u||Ve.current||Rt?(typeof h=="function"&&(Oo(t,n,h,r),u=t.memoizedState),(a=Rt||Ac(t,n,a,r,m,u,c))?(g||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4)):(typeof l.componentDidMount=="function"&&(t.flags|=4),t.memoizedProps=r,t.memoizedState=u),l.props=r,l.state=u,l.context=c,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4),r=!1)}else{l=t.stateNode,yp(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:ot(t.type,a),l.props=c,g=t.pendingProps,m=l.context,u=n.contextType,typeof u=="object"&&u!==null?u=qe(u):(u=We(n)?bn:Ae.current,u=or(t,u));var S=n.getDerivedStateFromProps;(h=typeof S=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==g||m!==u)&&Ic(t,l,r,u),Rt=!1,m=t.memoizedState,l.state=m,ui(t,r,l,i);var x=t.memoizedState;a!==g||m!==x||Ve.current||Rt?(typeof S=="function"&&(Oo(t,n,S,r),x=t.memoizedState),(c=Rt||Ac(t,n,c,r,m,x,u))?(h||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,x,u),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,x,u)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=256)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=256),t.memoizedProps=r,t.memoizedState=x),l.props=r,l.state=x,l.context=u,r=c):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=256),r=!1)}return Wa(e,t,n,r,o,i)}function Wa(e,t,n,r,i,o){Lp(e,t);var l=(t.flags&64)!==0;if(!r&&!l)return i&&Lc(t,n,!1),Ct(e,t,o);r=t.stateNode,q0.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=$o(t,e.child,null,o),t.child=$o(t,null,a,o)):Ue(e,t,a,o),t.memoizedState=r.state,i&&Lc(t,n,!0),t.child}function Gc(e){var t=e.stateNode;t.pendingContext?zc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&zc(e,t.context,!1),Ba(e,t.containerInfo)}var Yi={dehydrated:null,retryLane:0};function Kc(e,t,n){var r=t.pendingProps,i=se.current,o=!1,l;return(l=(t.flags&64)!==0)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-65):e!==null&&e.memoizedState===null||r.fallback===void 0||r.unstable_avoidThisFallback===!0||(i|=1),ue(se,i&1),e===null?(r.fallback!==void 0&&Ha(t),e=r.children,i=r.fallback,o?(e=Qc(t,e,i,n),t.child.memoizedState={baseLanes:n},t.memoizedState=Yi,e):typeof r.unstable_expectedLoadTime=="number"?(e=Qc(t,e,i,n),t.child.memoizedState={baseLanes:n},t.memoizedState=Yi,t.lanes=33554432,e):(n=vu({mode:"visible",children:e},t.mode,n,null),n.return=t,t.child=n)):e.memoizedState!==null?o?(r=Zc(e,t,r.children,r.fallback,n),o=t.child,i=e.child.memoizedState,o.memoizedState=i===null?{baseLanes:n}:{baseLanes:i.baseLanes|n},o.childLanes=e.childLanes&~n,t.memoizedState=Yi,r):(n=Jc(e,t,r.children,n),t.memoizedState=null,n):o?(r=Zc(e,t,r.children,r.fallback,n),o=t.child,i=e.child.memoizedState,o.memoizedState=i===null?{baseLanes:n}:{baseLanes:i.baseLanes|n},o.childLanes=e.childLanes&~n,t.memoizedState=Yi,r):(n=Jc(e,t,r.children,n),t.memoizedState=null,n)}function Qc(e,t,n,r){var i=e.mode,o=e.child;return t={mode:"hidden",children:t},(i&2)===0&&o!==null?(o.childLanes=0,o.pendingProps=t):o=vu(t,i,0,null),n=er(n,i,r,null),o.return=e,n.return=e,o.sibling=n,e.child=o,n}function Jc(e,t,n,r){var i=e.child;return e=i.sibling,n=ln(i,{mode:"visible",children:n}),(t.mode&2)===0&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(e.nextEffect=null,e.flags=8,t.firstEffect=t.lastEffect=e),t.child=n}function Zc(e,t,n,r,i){var o=t.mode,l=e.child;e=l.sibling;var a={mode:"hidden",children:n};return(o&2)===0&&t.child!==l?(n=t.child,n.childLanes=0,n.pendingProps=a,l=n.lastEffect,l!==null?(t.firstEffect=n.firstEffect,t.lastEffect=l,l.nextEffect=null):t.firstEffect=t.lastEffect=null):n=ln(l,a),e!==null?r=ln(e,r):(r=er(r,o,i,null),r.flags|=2),r.return=t,n.return=t,n.sibling=r,t.child=n,r}function qc(e,t){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),vp(e.return,t)}function ql(e,t,n,r,i,o){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,lastEffect:o}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=i,l.lastEffect=o)}function ed(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Ue(e,t,r.children,n),r=se.current,(r&2)!==0)r=r&1|2,t.flags|=64;else{if(e!==null&&(e.flags&64)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&qc(e,n);else if(e.tag===19)qc(e,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ue(se,r),(t.mode&2)===0)t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&zo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ql(t,!1,i,n,o,t.lastEffect);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&zo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ql(t,!0,n,null,o,t.lastEffect);break;case"together":ql(t,!1,null,null,void 0,t.lastEffect);break;default:t.memoizedState=null}return t.child}function Ct(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ki|=t.lanes,(n&t.childLanes)!==0){if(e!==null&&t.child!==e.child)throw Error(O(153));if(t.child!==null){for(e=t.child,n=ln(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ln(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}return null}var Mp,Xa,Rp,Tp;Mp=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Xa=function(){};Rp=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,xn(ht.current);var o=null;switch(n){case"input":i=xa(e,i),r=xa(e,r),o=[];break;case"option":i=ba(e,i),r=ba(e,r),o=[];break;case"select":i=le({},i,{value:void 0}),r=le({},r,{value:void 0}),o=[];break;case"textarea":i=ka(e,i),r=ka(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ko)}Ea(n,r);var l;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(qr.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var u=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(l in a)!a.hasOwnProperty(l)||u&&u.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in u)u.hasOwnProperty(l)&&a[l]!==u[l]&&(n||(n={}),n[l]=u[l])}else n||(o||(o=[]),o.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(o=o||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(qr.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&ne("scroll",e),o||a===u||(o=[])):typeof u=="object"&&u!==null&&u.$$typeof===As?u.toString():(o=o||[]).push(c,u))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};Tp=function(e,t,n,r){n!==r&&(t.flags|=4)};function Lr(e,t){if(!mt)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function eg(e,t,n){var r=t.pendingProps;switch(t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return We(t.type)&&No(),null;case 3:return ar(),re(Ve),re(Ae),ou(),r=t.stateNode,r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Xi(t)?t.flags|=4:r.hydrate||(t.flags|=256)),Xa(t),null;case 5:iu(t);var i=xn(di.current);if(n=t.type,e!==null&&t.stateNode!=null)Rp(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=128);else{if(!r){if(t.stateNode===null)throw Error(O(166));return null}if(e=xn(ht.current),Xi(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[It]=t,r[Co]=o,n){case"dialog":ne("cancel",r),ne("close",r);break;case"iframe":case"object":case"embed":ne("load",r);break;case"video":case"audio":for(e=0;e<jr.length;e++)ne(jr[e],r);break;case"source":ne("error",r);break;case"img":case"image":case"link":ne("error",r),ne("load",r);break;case"details":ne("toggle",r);break;case"input":ec(r,o),ne("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ne("invalid",r);break;case"textarea":nc(r,o),ne("invalid",r)}Ea(n,o),e=null;for(var l in o)o.hasOwnProperty(l)&&(i=o[l],l==="children"?typeof i=="string"?r.textContent!==i&&(e=["children",i]):typeof i=="number"&&r.textContent!==""+i&&(e=["children",""+i]):qr.hasOwnProperty(l)&&i!=null&&l==="onScroll"&&ne("scroll",r));switch(n){case"input":Fi(r),tc(r,o,!0);break;case"textarea":Fi(r),rc(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=ko)}r=e,t.updateQueue=r,r!==null&&(t.flags|=4)}else{switch(l=i.nodeType===9?i:i.ownerDocument,e===Ca.html&&(e=Pf(n)),e===Ca.html?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[It]=t,e[Co]=r,Mp(e,t,!1,!1),t.stateNode=e,l=_a(n,r),n){case"dialog":ne("cancel",e),ne("close",e),i=r;break;case"iframe":case"object":case"embed":ne("load",e),i=r;break;case"video":case"audio":for(i=0;i<jr.length;i++)ne(jr[i],e);i=r;break;case"source":ne("error",e),i=r;break;case"img":case"image":case"link":ne("error",e),ne("load",e),i=r;break;case"details":ne("toggle",e),i=r;break;case"input":ec(e,r),i=xa(e,r),ne("invalid",e);break;case"option":i=ba(e,r);break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=le({},r,{value:void 0}),ne("invalid",e);break;case"textarea":nc(e,r),i=ka(e,r),ne("invalid",e);break;default:i=r}Ea(n,i);var a=i;for(o in a)if(a.hasOwnProperty(o)){var u=a[o];o==="style"?zf(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Of(e,u)):o==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&ei(e,u):typeof u=="number"&&ei(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(qr.hasOwnProperty(o)?u!=null&&o==="onScroll"&&ne("scroll",e):u!=null&&zs(e,o,u,l))}switch(n){case"input":Fi(e),tc(e,r,!1);break;case"textarea":Fi(e),rc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+tn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Xn(e,!!r.multiple,o,!1):r.defaultValue!=null&&Xn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ko)}sp(n,r)&&(t.flags|=4)}t.ref!==null&&(t.flags|=128)}return null;case 6:if(e&&t.stateNode!=null)Tp(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(O(166));n=xn(di.current),xn(ht.current),Xi(t)?(r=t.stateNode,n=t.memoizedProps,r[It]=t,r.nodeValue!==n&&(t.flags|=4)):(r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[It]=t,t.stateNode=r)}return null;case 13:return re(se),r=t.memoizedState,(t.flags&64)!==0?(t.lanes=n,t):(r=r!==null,n=!1,e===null?t.memoizedProps.fallback!==void 0&&Xi(t):n=e.memoizedState!==null,r&&!n&&(t.mode&2)!==0&&(e===null&&t.memoizedProps.unstable_avoidThisFallback!==!0||(se.current&1)!==0?Pe===0&&(Pe=3):((Pe===0||Pe===3)&&(Pe=4),Ie===null||(ki&134217727)===0&&(gr&134217727)===0||Zn(Ie,je))),(r||n)&&(t.flags|=4),null);case 4:return ar(),Xa(t),e===null&&op(t.stateNode.containerInfo),null;case 10:return nu(t),null;case 17:return We(t.type)&&No(),null;case 19:if(re(se),r=t.memoizedState,r===null)return null;if(o=(t.flags&64)!==0,l=r.rendering,l===null)if(o)Lr(r,!1);else{if(Pe!==0||e!==null&&(e.flags&64)!==0)for(e=t.child;e!==null;){if(l=zo(e),l!==null){for(t.flags|=64,Lr(r,!1),o=l.updateQueue,o!==null&&(t.updateQueue=o,t.flags|=4),r.lastEffect===null&&(t.firstEffect=null),t.lastEffect=r.lastEffect,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=2,o.nextEffect=null,o.firstEffect=null,o.lastEffect=null,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ue(se,se.current&1|2),t.child}e=e.sibling}r.tail!==null&&Re()>Za&&(t.flags|=64,o=!0,Lr(r,!1),t.lanes=33554432)}else{if(!o)if(e=zo(l),e!==null){if(t.flags|=64,o=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Lr(r,!0),r.tail===null&&r.tailMode==="hidden"&&!l.alternate&&!mt)return t=t.lastEffect=r.lastEffect,t!==null&&(t.nextEffect=null),null}else 2*Re()-r.renderingStartTime>Za&&n!==1073741824&&(t.flags|=64,o=!0,Lr(r,!1),t.lanes=33554432);r.isBackwards?(l.sibling=t.child,t.child=l):(n=r.last,n!==null?n.sibling=l:t.child=l,r.last=l)}return r.tail!==null?(n=r.tail,r.rendering=n,r.tail=n.sibling,r.lastEffect=t.lastEffect,r.renderingStartTime=Re(),n.sibling=null,t=se.current,ue(se,o?t&1|2:t&1),n):null;case 23:case 24:return mu(),e!==null&&e.memoizedState!==null!=(t.memoizedState!==null)&&r.mode!=="unstable-defer-without-hiding"&&(t.flags|=4),null}throw Error(O(156,t.tag))}function tg(e){switch(e.tag){case 1:We(e.type)&&No();var t=e.flags;return t&4096?(e.flags=t&-4097|64,e):null;case 3:if(ar(),re(Ve),re(Ae),ou(),t=e.flags,(t&64)!==0)throw Error(O(285));return e.flags=t&-4097|64,e;case 5:return iu(e),null;case 13:return re(se),t=e.flags,t&4096?(e.flags=t&-4097|64,e):null;case 19:return re(se),null;case 4:return ar(),null;case 10:return nu(e),null;case 23:case 24:return mu(),null;default:return null}}function du(e,t){try{var n="",r=t;do n+=Tm(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i}}function Ya(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var ng=typeof WeakMap=="function"?WeakMap:Map;function jp(e,t,n){n=Wt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Io||(Io=!0,qa=r),Ya(e,t)},n}function Ap(e,t,n){n=Wt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return Ya(e,t),r(i)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){typeof r!="function"&&(pt===null?pt=new Set([this]):pt.add(this),Ya(e,t));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}var rg=typeof WeakSet=="function"?WeakSet:Set;function td(e){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(n){Kt(e,n)}else t.current=null}function ig(e,t){switch(t.tag){case 0:case 11:case 15:case 22:return;case 1:if(t.flags&256&&e!==null){var n=e.memoizedProps,r=e.memoizedState;e=t.stateNode,t=e.getSnapshotBeforeUpdate(t.elementType===t.type?n:ot(t.type,n),r),e.__reactInternalSnapshotBeforeUpdate=t}return;case 3:t.flags&256&&Zs(t.stateNode.containerInfo);return;case 5:case 6:case 4:case 17:return}throw Error(O(163))}function og(e,t,n){switch(n.tag){case 0:case 11:case 15:case 22:if(t=n.updateQueue,t=t!==null?t.lastEffect:null,t!==null){e=t=t.next;do{if((e.tag&3)===3){var r=e.create;e.destroy=r()}e=e.next}while(e!==t)}if(t=n.updateQueue,t=t!==null?t.lastEffect:null,t!==null){e=t=t.next;do{var i=e;r=i.next,i=i.tag,(i&4)!==0&&(i&1)!==0&&(Xp(n,e),pg(n,e)),e=r}while(e!==t)}return;case 1:e=n.stateNode,n.flags&4&&(t===null?e.componentDidMount():(r=n.elementType===n.type?t.memoizedProps:ot(n.type,t.memoizedProps),e.componentDidUpdate(r,t.memoizedState,e.__reactInternalSnapshotBeforeUpdate))),t=n.updateQueue,t!==null&&jc(n,t,e);return;case 3:if(t=n.updateQueue,t!==null){if(e=null,n.child!==null)switch(n.child.tag){case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}jc(n,t,e)}return;case 5:e=n.stateNode,t===null&&n.flags&4&&sp(n.type,n.memoizedProps)&&e.focus();return;case 6:return;case 4:return;case 12:return;case 13:n.memoizedState===null&&(n=n.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&Bf(n))));return;case 19:case 17:case 20:case 21:case 23:case 24:return}throw Error(O(163))}function nd(e,t){for(var n=e;;){if(n.tag===5){var r=n.stateNode;if(t)r=r.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{r=n.stateNode;var i=n.memoizedProps.style;i=i!=null&&i.hasOwnProperty("display")?i.display:null,r.style.display=$f("display",i)}}else if(n.tag===6)n.stateNode.nodeValue=t?"":n.memoizedProps;else if((n.tag!==23&&n.tag!==24||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}}function rd(e,t){if(Sn&&typeof Sn.onCommitFiberUnmount=="function")try{Sn.onCommitFiberUnmount(qs,t)}catch{}switch(t.tag){case 0:case 11:case 14:case 15:case 22:if(e=t.updateQueue,e!==null&&(e=e.lastEffect,e!==null)){var n=e=e.next;do{var r=n,i=r.destroy;if(r=r.tag,i!==void 0)if((r&4)!==0)Xp(t,n);else{r=t;try{i()}catch(o){Kt(r,o)}}n=n.next}while(n!==e)}break;case 1:if(td(t),e=t.stateNode,typeof e.componentWillUnmount=="function")try{e.props=t.memoizedProps,e.state=t.memoizedState,e.componentWillUnmount()}catch(o){Kt(t,o)}break;case 5:td(t);break;case 4:Ip(e,t)}}function id(e){e.alternate=null,e.child=null,e.dependencies=null,e.firstEffect=null,e.lastEffect=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.return=null,e.updateQueue=null}function od(e){return e.tag===5||e.tag===3||e.tag===4}function ld(e){e:{for(var t=e.return;t!==null;){if(od(t))break e;t=t.return}throw Error(O(160))}var n=t;switch(t=n.stateNode,n.tag){case 5:var r=!1;break;case 3:t=t.containerInfo,r=!0;break;case 4:t=t.containerInfo,r=!0;break;default:throw Error(O(161))}n.flags&16&&(ei(t,""),n.flags&=-17);e:t:for(n=e;;){for(;n.sibling===null;){if(n.return===null||od(n.return)){n=null;break e}n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue t;n.child.return=n,n=n.child}if(!(n.flags&2)){n=n.stateNode;break e}}r?Ga(e,n,t):Ka(e,n,t)}function Ga(e,t,n){var r=e.tag,i=r===5||r===6;if(i)e=i?e.stateNode:e.stateNode.instance,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ko));else if(r!==4&&(e=e.child,e!==null))for(Ga(e,t,n),e=e.sibling;e!==null;)Ga(e,t,n),e=e.sibling}function Ka(e,t,n){var r=e.tag,i=r===5||r===6;if(i)e=i?e.stateNode:e.stateNode.instance,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ka(e,t,n),e=e.sibling;e!==null;)Ka(e,t,n),e=e.sibling}function Ip(e,t){for(var n=t,r=!1,i,o;;){if(!r){r=n.return;e:for(;;){if(r===null)throw Error(O(160));switch(i=r.stateNode,r.tag){case 5:o=!1;break e;case 3:i=i.containerInfo,o=!0;break e;case 4:i=i.containerInfo,o=!0;break e}r=r.return}r=!0}if(n.tag===5||n.tag===6){e:for(var l=e,a=n,u=a;;)if(rd(l,u),u.child!==null&&u.tag!==4)u.child.return=u,u=u.child;else{if(u===a)break e;for(;u.sibling===null;){if(u.return===null||u.return===a)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}o?(l=i,a=n.stateNode,l.nodeType===8?l.parentNode.removeChild(a):l.removeChild(a)):i.removeChild(n.stateNode)}else if(n.tag===4){if(n.child!==null){i=n.stateNode.containerInfo,o=!0,n.child.return=n,n=n.child;continue}}else if(rd(e,n),n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return,n.tag===4&&(r=!1)}n.sibling.return=n.return,n=n.sibling}}function ea(e,t){switch(t.tag){case 0:case 11:case 14:case 15:case 22:var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var r=n=n.next;do(r.tag&3)===3&&(e=r.destroy,r.destroy=void 0,e!==void 0&&e()),r=r.next;while(r!==n)}return;case 1:return;case 5:if(n=t.stateNode,n!=null){r=t.memoizedProps;var i=e!==null?e.memoizedProps:r;e=t.type;var o=t.updateQueue;if(t.updateQueue=null,o!==null){for(n[Co]=r,e==="input"&&r.type==="radio"&&r.name!=null&&Ef(n,r),_a(e,i),t=_a(e,r),i=0;i<o.length;i+=2){var l=o[i],a=o[i+1];l==="style"?zf(n,a):l==="dangerouslySetInnerHTML"?Of(n,a):l==="children"?ei(n,a):zs(n,l,a,t)}switch(e){case"input":wa(n,r);break;case"textarea":_f(n,r);break;case"select":e=n._wrapperState.wasMultiple,n._wrapperState.wasMultiple=!!r.multiple,o=r.value,o!=null?Xn(n,!!r.multiple,o,!1):e!==!!r.multiple&&(r.defaultValue!=null?Xn(n,!!r.multiple,r.defaultValue,!0):Xn(n,!!r.multiple,r.multiple?[]:"",!1))}}}return;case 6:if(t.stateNode===null)throw Error(O(162));t.stateNode.nodeValue=t.memoizedProps;return;case 3:n=t.stateNode,n.hydrate&&(n.hydrate=!1,Bf(n.containerInfo));return;case 12:return;case 13:t.memoizedState!==null&&(hu=Re(),nd(t.child,!0)),ad(t);return;case 19:ad(t);return;case 17:return;case 23:case 24:nd(t,t.memoizedState!==null);return}throw Error(O(163))}function ad(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new rg),t.forEach(function(r){var i=gg.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function lg(e,t){return e!==null&&(e=e.memoizedState,e===null||e.dehydrated!==null)?(t=t.memoizedState,t!==null&&t.dehydrated===null):!1}var ag=Math.ceil,Ao=On.ReactCurrentDispatcher,fu=On.ReactCurrentOwner,I=0,Ie=null,ve=null,je=0,Cn=0,Qa=cn(0),Pe=0,ul=null,mr=0,ki=0,gr=0,pu=0,Ja=null,hu=0,Za=1/0;function vr(){Za=Re()+500}var R=null,Io=!1,qa=null,pt=null,on=!1,Kr=null,Ar=90,es=[],ts=[],Nt=null,Qr=0,ns=null,co=-1,bt=0,fo=0,Jr=null,po=!1;function Xe(){return(I&48)!==0?Re():co!==-1?co:co=Re()}function Yt(e){if(e=e.mode,(e&2)===0)return 1;if((e&4)===0)return lr()===99?1:2;if(bt===0&&(bt=mr),G0.transition!==0){fo!==0&&(fo=Ja!==null?Ja.pendingLanes:0),e=bt;var t=4186112&~fo;return t&=-t,t===0&&(e=4186112&~e,t=e&-e,t===0&&(t=8192)),t}return e=lr(),(I&4)!==0&&e===98?e=So(12,bt):(e=Jm(e),e=So(e,bt)),e}function Gt(e,t,n){if(50<Qr)throw Qr=0,ns=null,Error(O(185));if(e=cl(e,t),e===null)return null;nl(e,t,n),e===Ie&&(gr|=t,Pe===4&&Zn(e,je));var r=lr();t===1?(I&8)!==0&&(I&48)===0?rs(e):(et(e,n),I===0&&(vr(),vt())):((I&4)===0||r!==98&&r!==99||(Nt===null?Nt=new Set([e]):Nt.add(e)),et(e,n)),Ja=e}function cl(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}function et(e,t){for(var n=e.callbackNode,r=e.suspendedLanes,i=e.pingedLanes,o=e.expirationTimes,l=e.pendingLanes;0<l;){var a=31-nn(l),u=1<<a,c=o[a];if(c===-1){if((u&r)===0||(u&i)!==0){c=t,jn(u);var h=ee;o[a]=10<=h?c+250:6<=h?c+5e3:-1}}else c<=t&&(e.expiredLanes|=u);l&=~u}if(r=ii(e,e===Ie?je:0),t=ee,r===0)n!==null&&(n!==Kl&&Ia(n),e.callbackNode=null,e.callbackPriority=0);else{if(n!==null){if(e.callbackPriority===t)return;n!==Kl&&Ia(n)}t===15?(n=rs.bind(null,e),St===null?(St=[n],uo=eu(al,gp)):St.push(n),n=Kl):t===14?n=si(99,rs.bind(null,e)):(n=Zm(t),n=si(n,Dp.bind(null,e))),e.callbackPriority=t,e.callbackNode=n}}function Dp(e){if(co=-1,fo=bt=0,(I&48)!==0)throw Error(O(327));var t=e.callbackNode;if(dn()&&e.callbackNode!==t)return null;var n=ii(e,e===Ie?je:0);if(n===0)return null;var r=n,i=I;I|=16;var o=Up();(Ie!==e||je!==r)&&(vr(),qn(e,r));do try{cg();break}catch(a){Hp(e,a)}while(1);if(tu(),Ao.current=o,I=i,ve!==null?r=0:(Ie=null,je=0,r=Pe),(mr&gr)!==0)qn(e,0);else if(r!==0){if(r===2&&(I|=64,e.hydrate&&(e.hydrate=!1,Zs(e.containerInfo)),n=Gf(e),n!==0&&(r=Ir(e,n))),r===1)throw t=ul,qn(e,0),Zn(e,n),et(e,Re()),t;switch(e.finishedWork=e.current.alternate,e.finishedLanes=n,r){case 0:case 1:throw Error(O(345));case 2:pn(e);break;case 3:if(Zn(e,n),(n&62914560)===n&&(r=hu+500-Re(),10<r)){if(ii(e,0)!==0)break;if(i=e.suspendedLanes,(i&n)!==n){Xe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Pc(pn.bind(null,e),r);break}pn(e);break;case 4:if(Zn(e,n),(n&4186112)===n)break;for(r=e.eventTimes,i=-1;0<n;){var l=31-nn(n);o=1<<l,l=r[l],l>i&&(i=l),n&=~o}if(n=i,n=Re()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*ag(n/1960))-n,10<n){e.timeoutHandle=Pc(pn.bind(null,e),n);break}pn(e);break;case 5:pn(e);break;default:throw Error(O(329))}}return et(e,Re()),e.callbackNode===t?Dp.bind(null,e):null}function Zn(e,t){for(t&=~pu,t&=~gr,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-nn(t),r=1<<n;e[n]=-1,t&=~r}}function rs(e){if((I&48)!==0)throw Error(O(327));if(dn(),e===Ie&&(e.expiredLanes&je)!==0){var t=je,n=Ir(e,t);(mr&gr)!==0&&(t=ii(e,t),n=Ir(e,t))}else t=ii(e,0),n=Ir(e,t);if(e.tag!==0&&n===2&&(I|=64,e.hydrate&&(e.hydrate=!1,Zs(e.containerInfo)),t=Gf(e),t!==0&&(n=Ir(e,t))),n===1)throw n=ul,qn(e,0),Zn(e,t),et(e,Re()),n;return e.finishedWork=e.current.alternate,e.finishedLanes=t,pn(e),et(e,Re()),null}function sg(){if(Nt!==null){var e=Nt;Nt=null,e.forEach(function(t){t.expiredLanes|=24&t.pendingLanes,et(t,Re())})}vt()}function Fp(e,t){var n=I;I|=1;try{return e(t)}finally{I=n,I===0&&(vr(),vt())}}function Bp(e,t){var n=I;I&=-2,I|=8;try{return e(t)}finally{I=n,I===0&&(vr(),vt())}}function Gi(e,t){ue(Qa,Cn),Cn|=t,mr|=t}function mu(){Cn=Qa.current,re(Qa)}function qn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,H0(n)),ve!==null)for(n=ve.return;n!==null;){var r=n;switch(r.tag){case 1:r=r.type.childContextTypes,r!=null&&No();break;case 3:ar(),re(Ve),re(Ae),ou();break;case 5:iu(r);break;case 4:ar();break;case 13:re(se);break;case 19:re(se);break;case 10:nu(r);break;case 23:case 24:mu()}n=n.return}Ie=e,ve=ln(e.current,null),je=Cn=mr=t,Pe=0,ul=null,pu=gr=ki=0}function Hp(e,t){do{var n=ve;try{if(tu(),Yr.current=jo,Lo){for(var r=pe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Lo=!1}if(fi=0,_e=Le=pe=null,Gr=!1,fu.current=null,n===null||n.return===null){Pe=1,ul=t,ve=null;break}e:{var o=e,l=n.return,a=n,u=t;if(t=je,a.flags|=2048,a.firstEffect=a.lastEffect=null,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u;if((a.mode&2)===0){var h=a.alternate;h?(a.updateQueue=h.updateQueue,a.memoizedState=h.memoizedState,a.lanes=h.lanes):(a.updateQueue=null,a.memoizedState=null)}var g=(se.current&1)!==0,m=l;do{var S;if(S=m.tag===13){var x=m.memoizedState;if(x!==null)S=x.dehydrated!==null;else{var w=m.memoizedProps;S=w.fallback===void 0?!1:w.unstable_avoidThisFallback!==!0?!0:!g}}if(S){var d=m.updateQueue;if(d===null){var f=new Set;f.add(c),m.updateQueue=f}else d.add(c);if((m.mode&2)===0){if(m.flags|=64,a.flags|=16384,a.flags&=-2981,a.tag===1)if(a.alternate===null)a.tag=17;else{var p=Wt(-1,1);p.tag=2,Xt(a,p)}a.lanes|=1;break e}u=void 0,a=t;var v=o.pingCache;if(v===null?(v=o.pingCache=new ng,u=new Set,v.set(c,u)):(u=v.get(c),u===void 0&&(u=new Set,v.set(c,u))),!u.has(a)){u.add(a);var b=mg.bind(null,o,c,a);c.then(b,b)}m.flags|=4096,m.lanes=t;break e}m=m.return}while(m!==null);u=Error((Wn(a.type)||"A React component")+` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`)}Pe!==5&&(Pe=2),u=du(u,a),m=l;do{switch(m.tag){case 3:o=u,m.flags|=4096,t&=-t,m.lanes|=t;var P=jp(m,o,t);Tc(m,P);break e;case 1:o=u;var _=m.type,T=m.stateNode;if((m.flags&64)===0&&(typeof _.getDerivedStateFromError=="function"||T!==null&&typeof T.componentDidCatch=="function"&&(pt===null||!pt.has(T)))){m.flags|=4096,t&=-t,m.lanes|=t;var j=Ap(m,o,t);Tc(m,j);break e}}m=m.return}while(m!==null)}Wp(n)}catch(M){t=M,ve===n&&n!==null&&(ve=n=n.return);continue}break}while(1)}function Up(){var e=Ao.current;return Ao.current=jo,e===null?jo:e}function Ir(e,t){var n=I;I|=16;var r=Up();Ie===e&&je===t||qn(e,t);do try{ug();break}catch(i){Hp(e,i)}while(1);if(tu(),I=n,Ao.current=r,ve!==null)throw Error(O(261));return Ie=null,je=0,Pe}function ug(){for(;ve!==null;)Vp(ve)}function cg(){for(;ve!==null&&!W0();)Vp(ve)}function Vp(e){var t=Yp(e.alternate,e,Cn);e.memoizedProps=e.pendingProps,t===null?Wp(e):ve=t,fu.current=null}function Wp(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&2048)===0){if(n=eg(n,t,Cn),n!==null){ve=n;return}if(n=t,n.tag!==24&&n.tag!==23||n.memoizedState===null||(Cn&1073741824)!==0||(n.mode&4)===0){for(var r=0,i=n.child;i!==null;)r|=i.lanes|i.childLanes,i=i.sibling;n.childLanes=r}e!==null&&(e.flags&2048)===0&&(e.firstEffect===null&&(e.firstEffect=t.firstEffect),t.lastEffect!==null&&(e.lastEffect!==null&&(e.lastEffect.nextEffect=t.firstEffect),e.lastEffect=t.lastEffect),1<t.flags&&(e.lastEffect!==null?e.lastEffect.nextEffect=t:e.firstEffect=t,e.lastEffect=t))}else{if(n=tg(t),n!==null){n.flags&=2047,ve=n;return}e!==null&&(e.firstEffect=e.lastEffect=null,e.flags|=2048)}if(t=t.sibling,t!==null){ve=t;return}ve=t=e}while(t!==null);Pe===0&&(Pe=5)}function pn(e){var t=lr();return kn(99,dg.bind(null,e,t)),null}function dg(e,t){do dn();while(Kr!==null);if((I&48)!==0)throw Error(O(327));var n=e.finishedWork;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(O(177));e.callbackNode=null;var r=n.lanes|n.childLanes,i=r,o=e.pendingLanes&~i;e.pendingLanes=i,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=i,e.mutableReadLanes&=i,e.entangledLanes&=i,i=e.entanglements;for(var l=e.eventTimes,a=e.expirationTimes;0<o;){var u=31-nn(o),c=1<<u;i[u]=0,l[u]=-1,a[u]=-1,o&=~c}if(Nt!==null&&(r&24)===0&&Nt.has(e)&&Nt.delete(e),e===Ie&&(ve=Ie=null,je=0),1<n.flags?n.lastEffect!==null?(n.lastEffect.nextEffect=n,r=n.firstEffect):r=n:r=n.firstEffect,r!==null){if(i=I,I|=32,fu.current=null,Xl=oo,l=Sc(),Ma(l)){if("selectionStart"in l)a={start:l.selectionStart,end:l.selectionEnd};else e:if(a=(a=l.ownerDocument)&&a.defaultView||window,(c=a.getSelection&&a.getSelection())&&c.rangeCount!==0){a=c.anchorNode,o=c.anchorOffset,u=c.focusNode,c=c.focusOffset;try{a.nodeType,u.nodeType}catch{a=null;break e}var h=0,g=-1,m=-1,S=0,x=0,w=l,d=null;t:for(;;){for(var f;w!==a||o!==0&&w.nodeType!==3||(g=h+o),w!==u||c!==0&&w.nodeType!==3||(m=h+c),w.nodeType===3&&(h+=w.nodeValue.length),(f=w.firstChild)!==null;)d=w,w=f;for(;;){if(w===l)break t;if(d===a&&++S===o&&(g=h),d===u&&++x===c&&(m=h),(f=w.nextSibling)!==null)break;w=d,d=w.parentNode}w=f}a=g===-1||m===-1?null:{start:g,end:m}}else a=null;a=a||{start:0,end:0}}else a=null;Yl={focusedElem:l,selectionRange:a},oo=!1,Jr=null,po=!1,R=r;do try{fg()}catch(M){if(R===null)throw Error(O(330));Kt(R,M),R=R.nextEffect}while(R!==null);Jr=null,R=r;do try{for(l=e;R!==null;){var p=R.flags;if(p&16&&ei(R.stateNode,""),p&128){var v=R.alternate;if(v!==null){var b=v.ref;b!==null&&(typeof b=="function"?b(null):b.current=null)}}switch(p&1038){case 2:ld(R),R.flags&=-3;break;case 6:ld(R),R.flags&=-3,ea(R.alternate,R);break;case 1024:R.flags&=-1025;break;case 1028:R.flags&=-1025,ea(R.alternate,R);break;case 4:ea(R.alternate,R);break;case 8:a=R,Ip(l,a);var P=a.alternate;id(a),P!==null&&id(P)}R=R.nextEffect}}catch(M){if(R===null)throw Error(O(330));Kt(R,M),R=R.nextEffect}while(R!==null);if(b=Yl,v=Sc(),p=b.focusedElem,l=b.selectionRange,v!==p&&p&&p.ownerDocument&&np(p.ownerDocument.documentElement,p)){for(l!==null&&Ma(p)&&(v=l.start,b=l.end,b===void 0&&(b=v),"selectionStart"in p?(p.selectionStart=v,p.selectionEnd=Math.min(b,p.value.length)):(b=(v=p.ownerDocument||document)&&v.defaultView||window,b.getSelection&&(b=b.getSelection(),a=p.textContent.length,P=Math.min(l.start,a),l=l.end===void 0?P:Math.min(l.end,a),!b.extend&&P>l&&(a=l,l=P,P=a),a=wc(p,P),o=wc(p,l),a&&o&&(b.rangeCount!==1||b.anchorNode!==a.node||b.anchorOffset!==a.offset||b.focusNode!==o.node||b.focusOffset!==o.offset)&&(v=v.createRange(),v.setStart(a.node,a.offset),b.removeAllRanges(),P>l?(b.addRange(v),b.extend(o.node,o.offset)):(v.setEnd(o.node,o.offset),b.addRange(v)))))),v=[],b=p;b=b.parentNode;)b.nodeType===1&&v.push({element:b,left:b.scrollLeft,top:b.scrollTop});for(typeof p.focus=="function"&&p.focus(),p=0;p<v.length;p++)b=v[p],b.element.scrollLeft=b.left,b.element.scrollTop=b.top}oo=!!Xl,Yl=Xl=null,e.current=n,R=r;do try{for(p=e;R!==null;){var _=R.flags;if(_&36&&og(p,R.alternate,R),_&128){v=void 0;var T=R.ref;if(T!==null){var j=R.stateNode;switch(R.tag){case 5:v=j;break;default:v=j}typeof T=="function"?T(v):T.current=v}}R=R.nextEffect}}catch(M){if(R===null)throw Error(O(330));Kt(R,M),R=R.nextEffect}while(R!==null);R=null,Y0(),I=i}else e.current=n;if(on)on=!1,Kr=e,Ar=t;else for(R=r;R!==null;)t=R.nextEffect,R.nextEffect=null,R.flags&8&&(_=R,_.sibling=null,_.stateNode=null),R=t;if(r=e.pendingLanes,r===0&&(pt=null),r===1?e===ns?Qr++:(Qr=0,ns=e):Qr=0,n=n.stateNode,Sn&&typeof Sn.onCommitFiberRoot=="function")try{Sn.onCommitFiberRoot(qs,n,void 0,(n.current.flags&64)===64)}catch{}if(et(e,Re()),Io)throw Io=!1,e=qa,qa=null,e;return(I&8)!==0||vt(),null}function fg(){for(;R!==null;){var e=R.alternate;po||Jr===null||((R.flags&8)!==0?lc(R,Jr)&&(po=!0):R.tag===13&&lg(e,R)&&lc(R,Jr)&&(po=!0));var t=R.flags;(t&256)!==0&&ig(e,R),(t&512)===0||on||(on=!0,si(97,function(){return dn(),null})),R=R.nextEffect}}function dn(){if(Ar!==90){var e=97<Ar?97:Ar;return Ar=90,kn(e,hg)}return!1}function pg(e,t){es.push(t,e),on||(on=!0,si(97,function(){return dn(),null}))}function Xp(e,t){ts.push(t,e),on||(on=!0,si(97,function(){return dn(),null}))}function hg(){if(Kr===null)return!1;var e=Kr;if(Kr=null,(I&48)!==0)throw Error(O(331));var t=I;I|=32;var n=ts;ts=[];for(var r=0;r<n.length;r+=2){var i=n[r],o=n[r+1],l=i.destroy;if(i.destroy=void 0,typeof l=="function")try{l()}catch(u){if(o===null)throw Error(O(330));Kt(o,u)}}for(n=es,es=[],r=0;r<n.length;r+=2){i=n[r],o=n[r+1];try{var a=i.create;i.destroy=a()}catch(u){if(o===null)throw Error(O(330));Kt(o,u)}}for(a=e.current.firstEffect;a!==null;)e=a.nextEffect,a.nextEffect=null,a.flags&8&&(a.sibling=null,a.stateNode=null),a=e;return I=t,vt(),!0}function sd(e,t,n){t=du(n,t),t=jp(e,t,1),Xt(e,t),t=Xe(),e=cl(e,1),e!==null&&(nl(e,1,t),et(e,t))}function Kt(e,t){if(e.tag===3)sd(e,e,t);else for(var n=e.return;n!==null;){if(n.tag===3){sd(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(pt===null||!pt.has(r))){e=du(t,e);var i=Ap(n,e,1);if(Xt(n,i),i=Xe(),n=cl(n,1),n!==null)nl(n,1,i),et(n,i);else if(typeof r.componentDidCatch=="function"&&(pt===null||!pt.has(r)))try{r.componentDidCatch(t,e)}catch{}break}}n=n.return}}function mg(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Xe(),e.pingedLanes|=e.suspendedLanes&n,Ie===e&&(je&n)===n&&(Pe===4||Pe===3&&(je&62914560)===je&&500>Re()-hu?qn(e,0):pu|=n),et(e,t)}function gg(e,t){var n=e.stateNode;n!==null&&n.delete(t),t=0,t===0&&(t=e.mode,(t&2)===0?t=1:(t&4)===0?t=lr()===99?1:2:(bt===0&&(bt=mr),t=An(62914560&~bt),t===0&&(t=4194304))),n=Xe(),e=cl(e,t),e!==null&&(nl(e,t,n),et(e,n))}var Yp;Yp=function(e,t,n){var r=t.lanes;if(e!==null)if(e.memoizedProps!==t.pendingProps||Ve.current)at=!0;else if((n&r)!==0)at=(e.flags&16384)!==0;else{switch(at=!1,t.tag){case 3:Gc(t),Jl();break;case 5:Dc(t);break;case 1:We(t.type)&&so(t);break;case 4:Ba(t,t.stateNode.containerInfo);break;case 10:r=t.memoizedProps.value;var i=t.type._context;ue(Eo,i._currentValue),i._currentValue=r;break;case 13:if(t.memoizedState!==null)return(n&t.child.childLanes)!==0?Kc(e,t,n):(ue(se,se.current&1),t=Ct(e,t,n),t!==null?t.sibling:null);ue(se,se.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&64)!==0){if(r)return ed(e,t,n);t.flags|=64}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ue(se,se.current),r)break;return null;case 23:case 24:return t.lanes=0,Zl(e,t,n)}return Ct(e,t,n)}else at=!1;switch(t.lanes=0,t.tag){case 2:if(r=t.type,e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2),e=t.pendingProps,i=or(t,Ae.current),Qn(t,n),i=au(null,t,r,e,i,n),t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0){if(t.tag=1,t.memoizedState=null,t.updateQueue=null,We(r)){var o=!0;so(t)}else o=!1;t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ru(t);var l=r.getDerivedStateFromProps;typeof l=="function"&&Oo(t,r,l,e),i.updater=sl,t.stateNode=i,i._reactInternals=t,Fa(t,r,e,n),t=Wa(null,t,r,!0,o,n)}else t.tag=0,Ue(null,t,i,n),t=t.child;return t;case 16:i=t.elementType;e:{switch(e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2),e=t.pendingProps,o=i._init,i=o(i._payload),t.type=i,o=t.tag=yg(i),e=ot(i,e),o){case 0:t=Va(null,t,i,e,n);break e;case 1:t=Yc(null,t,i,e,n);break e;case 11:t=Wc(null,t,i,e,n);break e;case 14:t=Xc(null,t,i,ot(i.type,e),r,n);break e}throw Error(O(306,i,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ot(r,i),Va(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ot(r,i),Yc(e,t,r,i,n);case 3:if(Gc(t),r=t.updateQueue,e===null||r===null)throw Error(O(282));if(r=t.pendingProps,i=t.memoizedState,i=i!==null?i.element:null,yp(e,t),ui(t,r,null,n),r=t.memoizedState.element,r===i)Jl(),t=Ct(e,t,n);else{if(i=t.stateNode,(o=i.hydrate)&&(Dt=Kn(t.stateNode.containerInfo.firstChild),kt=t,o=mt=!0),o){if(e=i.mutableSourceEagerHydrationData,e!=null)for(i=0;i<e.length;i+=2)o=e[i],o._workInProgressVersionPrimary=e[i+1],Jn.push(o);for(n=bp(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|1024,n=n.sibling}else Ue(e,t,r,n),Jl();t=t.child}return t;case 5:return Dc(t),e===null&&Ha(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,ja(r,i)?l=null:o!==null&&ja(r,o)&&(t.flags|=16),Lp(e,t),Ue(e,t,l,n),t.child;case 6:return e===null&&Ha(t),null;case 13:return Kc(e,t,n);case 4:return Ba(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=$o(t,null,r,n):Ue(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ot(r,i),Wc(e,t,r,i,n);case 7:return Ue(e,t,t.pendingProps,n),t.child;case 8:return Ue(e,t,t.pendingProps.children,n),t.child;case 12:return Ue(e,t,t.pendingProps.children,n),t.child;case 10:e:{r=t.type._context,i=t.pendingProps,l=t.memoizedProps,o=i.value;var a=t.type._context;if(ue(Eo,a._currentValue),a._currentValue=o,l!==null)if(a=l.value,o=Qe(a,o)?0:(typeof r._calculateChangedBits=="function"?r._calculateChangedBits(a,o):1073741823)|0,o===0){if(l.children===i.children&&!Ve.current){t=Ct(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var u=a.dependencies;if(u!==null){l=a.child;for(var c=u.firstContext;c!==null;){if(c.context===r&&(c.observedBits&o)!==0){a.tag===1&&(c=Wt(-1,n&-n),c.tag=2,Xt(a,c)),a.lanes|=n,c=a.alternate,c!==null&&(c.lanes|=n),vp(a.return,n),u.lanes|=n;break}c=c.next}}else l=a.tag===10&&a.type===t.type?null:a.child;if(l!==null)l.return=a;else for(l=a;l!==null;){if(l===t){l=null;break}if(a=l.sibling,a!==null){a.return=l.return,l=a;break}l=l.return}a=l}Ue(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,o=t.pendingProps,r=o.children,Qn(t,n),i=qe(i,o.unstable_observedBits),r=r(i),t.flags|=1,Ue(e,t,r,n),t.child;case 14:return i=t.type,o=ot(i,t.pendingProps),o=ot(i.type,o),Xc(e,t,i,o,r,n);case 15:return zp(e,t,t.type,t.pendingProps,r,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ot(r,i),e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2),t.tag=1,We(r)?(e=!0,so(t)):e=!1,Qn(t,n),wp(t,r,i),Fa(t,r,i,n),Wa(null,t,r,!0,e,n);case 19:return ed(e,t,n);case 23:return Zl(e,t,n);case 24:return Zl(e,t,n)}throw Error(O(156,t.tag))};function vg(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.flags=0,this.lastEffect=this.firstEffect=this.nextEffect=null,this.childLanes=this.lanes=0,this.alternate=null}function Je(e,t,n,r){return new vg(e,t,n,r)}function gu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function yg(e){if(typeof e=="function")return gu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===qo)return 11;if(e===el)return 14}return 2}function ln(e,t){var n=e.alternate;return n===null?(n=Je(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.nextEffect=null,n.firstEffect=null,n.lastEffect=null),n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ho(e,t,n,r,i,o){var l=2;if(r=e,typeof e=="function")gu(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Tt:return er(n.children,i,o,t);case kf:l=8,i|=16;break;case Ls:l=8,i|=1;break;case Fr:return e=Je(12,n,t,i|8),e.elementType=Fr,e.type=Fr,e.lanes=o,e;case Br:return e=Je(13,n,t,i),e.type=Br,e.elementType=Br,e.lanes=o,e;case vo:return e=Je(19,n,t,i),e.elementType=vo,e.lanes=o,e;case Is:return vu(n,i,o,t);case ya:return e=Je(24,n,t,i),e.elementType=ya,e.lanes=o,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ms:l=10;break e;case Rs:l=9;break e;case qo:l=11;break e;case el:l=14;break e;case Ts:l=16,r=null;break e;case js:l=22;break e}throw Error(O(130,e==null?e:typeof e,""))}return t=Je(l,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function er(e,t,n,r){return e=Je(7,e,r,t),e.lanes=n,e}function vu(e,t,n,r){return e=Je(23,e,r,t),e.elementType=Is,e.lanes=n,e}function ta(e,t,n){return e=Je(6,e,null,t),e.lanes=n,e}function na(e,t,n){return t=Je(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function xg(e,t,n){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.pendingContext=this.context=null,this.hydrate=n,this.callbackNode=null,this.callbackPriority=0,this.eventTimes=Dl(0),this.expirationTimes=Dl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Dl(0),this.mutableSourceEagerHydrationData=null}function wg(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:gn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Do(e,t,n,r){var i=t.current,o=Xe(),l=Yt(i);e:if(n){n=n._reactInternals;t:{if($n(n)!==n||n.tag!==1)throw Error(O(170));var a=n;do{switch(a.tag){case 3:a=a.stateNode.context;break t;case 1:if(We(a.type)){a=a.stateNode.__reactInternalMemoizedMergedChildContext;break t}}a=a.return}while(a!==null);throw Error(O(171))}if(n.tag===1){var u=n.type;if(We(u)){n=cp(n,u,a);break e}}n=a}else n=rn;return t.context===null?t.context=n:t.pendingContext=n,t=Wt(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),Xt(i,t),Gt(i,l,o),l}function ra(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ud(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function yu(e,t){ud(e,t),(e=e.alternate)&&ud(e,t)}function Sg(){return null}function xu(e,t,n){var r=n!=null&&n.hydrationOptions!=null&&n.hydrationOptions.mutableSources||null;if(n=new xg(e,t,n!=null&&n.hydrate===!0),t=Je(3,null,null,t===2?7:t===1?3:0),n.current=t,t.stateNode=n,ru(t),e[hr]=n.current,op(e.nodeType===8?e.parentNode:e),r)for(e=0;e<r.length;e++){t=r[e];var i=t._getVersion;i=i(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i)}this._internalRoot=n}xu.prototype.render=function(e){Do(e,this._internalRoot,null,null)};xu.prototype.unmount=function(){var e=this._internalRoot,t=e.containerInfo;Do(null,e,null,function(){t[hr]=null})};function Ci(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function bg(e,t){if(t||(t=e?e.nodeType===9?e.documentElement:e.firstChild:null,t=!(!t||t.nodeType!==1||!t.hasAttribute("data-reactroot"))),!t)for(var n;n=e.lastChild;)e.removeChild(n);return new xu(e,0,t?{hydrate:!0}:void 0)}function dl(e,t,n,r,i){var o=n._reactRootContainer;if(o){var l=o._internalRoot;if(typeof i=="function"){var a=i;i=function(){var c=ra(l);a.call(c)}}Do(t,l,e,i)}else{if(o=n._reactRootContainer=bg(n,r),l=o._internalRoot,typeof i=="function"){var u=i;i=function(){var c=ra(l);u.call(c)}}Bp(function(){Do(t,l,e,i)})}return ra(l)}If=function(e){if(e.tag===13){var t=Xe();Gt(e,4,t),yu(e,4)}};Us=function(e){if(e.tag===13){var t=Xe();Gt(e,67108864,t),yu(e,67108864)}};Df=function(e){if(e.tag===13){var t=Xe(),n=Yt(e);Gt(e,n,t),yu(e,n)}};Ff=function(e,t){return t()};Pa=function(e,t,n){switch(t){case"input":if(wa(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=ll(r);if(!i)throw Error(O(90));Nf(r),wa(r,i)}}}break;case"textarea":_f(e,n);break;case"select":t=n.value,t!=null&&Xn(e,!!n.multiple,t,!1)}};Fs=Fp;Rf=function(e,t,n,r,i){var o=I;I|=4;try{return kn(98,e.bind(null,t,n,r,i))}finally{I=o,I===0&&(vr(),vt())}};Bs=function(){(I&49)===0&&(sg(),dn())};Tf=function(e,t){var n=I;I|=2;try{return e(t)}finally{I=n,I===0&&(vr(),vt())}};function Gp(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ci(t))throw Error(O(200));return wg(e,t,null,n)}var kg={Events:[Si,Bn,ll,Lf,Mf,dn,{current:!1}]},Mr={findFiberByHostInstance:yn,bundleType:0,version:"17.0.2",rendererPackageName:"react-dom"},Cg={bundleType:Mr.bundleType,version:Mr.version,rendererPackageName:Mr.rendererPackageName,rendererConfig:Mr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:On.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Af(e),e===null?null:e.stateNode},findFiberByHostInstance:Mr.findFiberByHostInstance||Sg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var Ki=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ki.isDisabled&&Ki.supportsFiber)try{qs=Ki.inject(Cg),Sn=Ki}catch{}}tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=kg;tt.createPortal=Gp;tt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(O(188)):Error(O(268,Object.keys(e)));return e=Af(t),e=e===null?null:e.stateNode,e};tt.flushSync=function(e,t){var n=I;if((n&48)!==0)return e(t);I|=1;try{if(e)return kn(99,e.bind(null,t))}finally{I=n,vt()}};tt.hydrate=function(e,t,n){if(!Ci(t))throw Error(O(200));return dl(null,e,t,!0,n)};tt.render=function(e,t,n){if(!Ci(t))throw Error(O(200));return dl(null,e,t,!1,n)};tt.unmountComponentAtNode=function(e){if(!Ci(e))throw Error(O(40));return e._reactRootContainer?(Bp(function(){dl(null,null,e,!1,function(){e._reactRootContainer=null,e[hr]=null})}),!0):!1};tt.unstable_batchedUpdates=Fp;tt.unstable_createPortal=function(e,t){return Gp(e,t,2<arguments.length&&arguments[2]!==void 0?arguments[2]:null)};tt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ci(n))throw Error(O(200));if(e==null||e._reactInternals===void 0)throw Error(O(38));return dl(e,t,n,!1,r)};tt.version="17.0.2";function Kp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Kp)}catch(e){console.error(e)}}Kp(),Jo.exports=tt;var Qp=Jo.exports,Ng=of({__proto__:null,default:Qp},[Jo.exports]);/**
 * @remix-run/router v1.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function pi(){return pi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},pi.apply(this,arguments)}var Ft;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Ft||(Ft={}));const cd="popstate";function Eg(e){e===void 0&&(e={});function t(i,o){let{pathname:l="/",search:a="",hash:u=""}=Ln(i.location.hash.substr(1));return!l.startsWith("/")&&!l.startsWith(".")&&(l="/"+l),is("",{pathname:l,search:a,hash:u},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(i,o){let l=i.document.querySelector("base"),a="";if(l&&l.getAttribute("href")){let u=i.location.href,c=u.indexOf("#");a=c===-1?u:u.slice(0,c)}return a+"#"+(typeof o=="string"?o:Fo(o))}function r(i,o){wu(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(o)+")")}return Pg(t,n,r,e)}function he(e,t){if(e===!1||e===null||typeof e=="undefined")throw new Error(t)}function wu(e,t){if(!e){typeof console!="undefined"&&console.warn(t);try{throw new Error(t)}catch{}}}function _g(){return Math.random().toString(36).substr(2,8)}function dd(e,t){return{usr:e.state,key:e.key,idx:t}}function is(e,t,n,r){return n===void 0&&(n=null),pi({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Ln(t):t,{state:n,key:t&&t.key||r||_g()})}function Fo(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Ln(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Pg(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,l=i.history,a=Ft.Pop,u=null,c=h();c==null&&(c=0,l.replaceState(pi({},l.state,{idx:c}),""));function h(){return(l.state||{idx:null}).idx}function g(){a=Ft.Pop;let d=h(),f=d==null?null:d-c;c=d,u&&u({action:a,location:w.location,delta:f})}function m(d,f){a=Ft.Push;let p=is(w.location,d,f);n&&n(p,d),c=h()+1;let v=dd(p,c),b=w.createHref(p);try{l.pushState(v,"",b)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;i.location.assign(b)}o&&u&&u({action:a,location:w.location,delta:1})}function S(d,f){a=Ft.Replace;let p=is(w.location,d,f);n&&n(p,d),c=h();let v=dd(p,c),b=w.createHref(p);l.replaceState(v,"",b),o&&u&&u({action:a,location:w.location,delta:0})}function x(d){let f=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof d=="string"?d:Fo(d);return p=p.replace(/ $/,"%20"),he(f,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,f)}let w={get action(){return a},get location(){return e(i,l)},listen(d){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(cd,g),u=d,()=>{i.removeEventListener(cd,g),u=null}},createHref(d){return t(i,d)},createURL:x,encodeLocation(d){let f=x(d);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:m,replace:S,go(d){return l.go(d)}};return w}var fd;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(fd||(fd={}));function Og(e,t,n){return n===void 0&&(n="/"),$g(e,t,n,!1)}function $g(e,t,n,r){let i=typeof t=="string"?Ln(t):t,o=Su(i.pathname||"/",n);if(o==null)return null;let l=Jp(e);zg(l);let a=null;for(let u=0;a==null&&u<l.length;++u){let c=Hg(o);a=Fg(l[u],c,r)}return a}function Jp(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,l,a)=>{let u={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:l,route:o};u.relativePath.startsWith("/")&&(he(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=Qt([r,u.relativePath]),h=n.concat(u);o.children&&o.children.length>0&&(he(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Jp(o.children,t,h,c)),!(o.path==null&&!o.index)&&t.push({path:c,score:Ig(c,o.index),routesMeta:h})};return e.forEach((o,l)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,l);else for(let u of Zp(o.path))i(o,l,u)}),t}function Zp(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let l=Zp(r.join("/")),a=[];return a.push(...l.map(u=>u===""?o:[o,u].join("/"))),i&&a.push(...l),a.map(u=>e.startsWith("/")&&u===""?"/":u)}function zg(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Dg(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Lg=/^:[\w-]+$/,Mg=3,Rg=2,Tg=1,jg=10,Ag=-2,pd=e=>e==="*";function Ig(e,t){let n=e.split("/"),r=n.length;return n.some(pd)&&(r+=Ag),t&&(r+=Rg),n.filter(i=>!pd(i)).reduce((i,o)=>i+(Lg.test(o)?Mg:o===""?Tg:jg),r)}function Dg(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Fg(e,t,n){n===void 0&&(n=!1);let{routesMeta:r}=e,i={},o="/",l=[];for(let a=0;a<r.length;++a){let u=r[a],c=a===r.length-1,h=o==="/"?t:t.slice(o.length)||"/",g=hd({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},h),m=u.route;if(!g&&c&&n&&!r[r.length-1].route.index&&(g=hd({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},h)),!g)return null;Object.assign(i,g.params),l.push({params:i,pathname:Qt([o,g.pathname]),pathnameBase:Xg(Qt([o,g.pathnameBase])),route:m}),g.pathnameBase!=="/"&&(o=Qt([o,g.pathnameBase]))}return l}function hd(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Bg(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],l=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,h,g)=>{let{paramName:m,isOptional:S}=h;if(m==="*"){let w=a[g]||"";l=o.slice(0,o.length-w.length).replace(/(.)\/+$/,"$1")}const x=a[g];return S&&!x?c[m]=void 0:c[m]=(x||"").replace(/%2F/g,"/"),c},{}),pathname:o,pathnameBase:l,pattern:e}}function Bg(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),wu(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,a,u)=>(r.push({paramName:a,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function Hg(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return wu(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Su(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Ug(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Ln(e):e;return{pathname:n?n.startsWith("/")?n:Vg(n,t):t,search:Yg(r),hash:Gg(i)}}function Vg(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function ia(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Wg(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function bu(e,t){let n=Wg(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function ku(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Ln(e):(i=pi({},e),he(!i.pathname||!i.pathname.includes("?"),ia("?","pathname","search",i)),he(!i.pathname||!i.pathname.includes("#"),ia("#","pathname","hash",i)),he(!i.search||!i.search.includes("#"),ia("#","search","hash",i)));let o=e===""||i.pathname==="",l=o?"/":i.pathname,a;if(l==null)a=n;else{let g=t.length-1;if(!r&&l.startsWith("..")){let m=l.split("/");for(;m[0]==="..";)m.shift(),g-=1;i.pathname=m.join("/")}a=g>=0?t[g]:"/"}let u=Ug(i,a),c=l&&l!=="/"&&l.endsWith("/"),h=(o||l===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||h)&&(u.pathname+="/"),u}const Qt=e=>e.join("/").replace(/\/\/+/g,"/"),Xg=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Yg=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Gg=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Kg(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Qg=["post","put","patch","delete"];[...Qg];/**
 * React Router v6.25.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function hi(){return hi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},hi.apply(this,arguments)}const Cu=C.exports.createContext(null),Jg=C.exports.createContext(null),fn=C.exports.createContext(null),fl=C.exports.createContext(null),Ot=C.exports.createContext({outlet:null,matches:[],isDataRoute:!1}),qp=C.exports.createContext(null);function Zg(e,t){let{relative:n}=t===void 0?{}:t;yr()||he(!1);let{basename:r,navigator:i}=C.exports.useContext(fn),{hash:o,pathname:l,search:a}=th(e,{relative:n}),u=l;return r!=="/"&&(u=l==="/"?r:Qt([r,l])),i.createHref({pathname:u,search:a,hash:o})}function yr(){return C.exports.useContext(fl)!=null}function yt(){return yr()||he(!1),C.exports.useContext(fl).location}function eh(e){C.exports.useContext(fn).static||C.exports.useLayoutEffect(e)}function Ni(){let{isDataRoute:e}=C.exports.useContext(Ot);return e?p1():qg()}function qg(){yr()||he(!1);let e=C.exports.useContext(Cu),{basename:t,future:n,navigator:r}=C.exports.useContext(fn),{matches:i}=C.exports.useContext(Ot),{pathname:o}=yt(),l=JSON.stringify(bu(i,n.v7_relativeSplatPath)),a=C.exports.useRef(!1);return eh(()=>{a.current=!0}),C.exports.useCallback(function(c,h){if(h===void 0&&(h={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let g=ku(c,JSON.parse(l),o,h.relative==="path");e==null&&t!=="/"&&(g.pathname=g.pathname==="/"?t:Qt([t,g.pathname])),(h.replace?r.replace:r.push)(g,h.state,h)},[t,r,l,o,e])}const e1=C.exports.createContext(null);function t1(e){let t=C.exports.useContext(Ot).outlet;return t&&C.exports.createElement(e1.Provider,{value:e},t)}function th(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=C.exports.useContext(fn),{matches:i}=C.exports.useContext(Ot),{pathname:o}=yt(),l=JSON.stringify(bu(i,r.v7_relativeSplatPath));return C.exports.useMemo(()=>ku(e,JSON.parse(l),o,n==="path"),[e,l,o,n])}function n1(e,t){return r1(e,t)}function r1(e,t,n,r){yr()||he(!1);let{navigator:i}=C.exports.useContext(fn),{matches:o}=C.exports.useContext(Ot),l=o[o.length-1],a=l?l.params:{};l&&l.pathname;let u=l?l.pathnameBase:"/";l&&l.route;let c=yt(),h;if(t){var g;let d=typeof t=="string"?Ln(t):t;u==="/"||((g=d.pathname)==null?void 0:g.startsWith(u))||he(!1),h=d}else h=c;let m=h.pathname||"/",S=m;if(u!=="/"){let d=u.replace(/^\//,"").split("/"),f=m.replace(/^\//,"").split("/");S="/"+f.slice(d.length).join("/")}let x=Og(e,{pathname:S}),w=s1(x&&x.map(d=>Object.assign({},d,{params:Object.assign({},a,d.params),pathname:Qt([u,i.encodeLocation?i.encodeLocation(d.pathname).pathname:d.pathname]),pathnameBase:d.pathnameBase==="/"?u:Qt([u,i.encodeLocation?i.encodeLocation(d.pathnameBase).pathname:d.pathnameBase])})),o,n,r);return t&&w?C.exports.createElement(fl.Provider,{value:{location:hi({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:Ft.Pop}},w):w}function i1(){let e=f1(),t=Kg(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return C.exports.createElement(C.exports.Fragment,null,C.exports.createElement("h2",null,"Unexpected Application Error!"),C.exports.createElement("h3",{style:{fontStyle:"italic"}},t),n?C.exports.createElement("pre",{style:i},n):null,o)}const o1=C.exports.createElement(i1,null);class l1 extends C.exports.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?C.exports.createElement(Ot.Provider,{value:this.props.routeContext},C.exports.createElement(qp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function a1(e){let{routeContext:t,match:n,children:r}=e,i=C.exports.useContext(Cu);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),C.exports.createElement(Ot.Provider,{value:t},r)}function s1(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if((o=n)!=null&&o.errors)e=n.matches;else return null}let l=e,a=(i=n)==null?void 0:i.errors;if(a!=null){let h=l.findIndex(g=>g.route.id&&(a==null?void 0:a[g.route.id])!==void 0);h>=0||he(!1),l=l.slice(0,Math.min(l.length,h+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<l.length;h++){let g=l[h];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(c=h),g.route.id){let{loaderData:m,errors:S}=n,x=g.route.loader&&m[g.route.id]===void 0&&(!S||S[g.route.id]===void 0);if(g.route.lazy||x){u=!0,c>=0?l=l.slice(0,c+1):l=[l[0]];break}}}return l.reduceRight((h,g,m)=>{let S,x=!1,w=null,d=null;n&&(S=a&&g.route.id?a[g.route.id]:void 0,w=g.route.errorElement||o1,u&&(c<0&&m===0?(h1("route-fallback",!1),x=!0,d=null):c===m&&(x=!0,d=g.route.hydrateFallbackElement||null)));let f=t.concat(l.slice(0,m+1)),p=()=>{let v;return S?v=w:x?v=d:g.route.Component?v=C.exports.createElement(g.route.Component,null):g.route.element?v=g.route.element:v=h,C.exports.createElement(a1,{match:g,routeContext:{outlet:h,matches:f,isDataRoute:n!=null},children:v})};return n&&(g.route.ErrorBoundary||g.route.errorElement||m===0)?C.exports.createElement(l1,{location:n.location,revalidation:n.revalidation,component:w,error:S,children:p(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):p()},null)}var nh=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(nh||{}),Bo=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Bo||{});function u1(e){let t=C.exports.useContext(Cu);return t||he(!1),t}function c1(e){let t=C.exports.useContext(Jg);return t||he(!1),t}function d1(e){let t=C.exports.useContext(Ot);return t||he(!1),t}function rh(e){let t=d1(),n=t.matches[t.matches.length-1];return n.route.id||he(!1),n.route.id}function f1(){var e;let t=C.exports.useContext(qp),n=c1(Bo.UseRouteError),r=rh(Bo.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function p1(){let{router:e}=u1(nh.UseNavigateStable),t=rh(Bo.UseNavigateStable),n=C.exports.useRef(!1);return eh(()=>{n.current=!0}),C.exports.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,hi({fromRouteId:t},o)))},[e,t])}const md={};function h1(e,t,n){!t&&!md[e]&&(md[e]=!0)}const m1="startTransition";Ps[m1];function g1(e){let{to:t,replace:n,state:r,relative:i}=e;yr()||he(!1);let{future:o,static:l}=C.exports.useContext(fn),{matches:a}=C.exports.useContext(Ot),{pathname:u}=yt(),c=Ni(),h=ku(t,bu(a,o.v7_relativeSplatPath),u,i==="path"),g=JSON.stringify(h);return C.exports.useEffect(()=>c(JSON.parse(g),{replace:n,state:r,relative:i}),[c,g,i,n,r]),null}function Nu(e){return t1(e.context)}function ae(e){he(!1)}function v1(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Ft.Pop,navigator:o,static:l=!1,future:a}=e;yr()&&he(!1);let u=t.replace(/^\/*/,"/"),c=C.exports.useMemo(()=>({basename:u,navigator:o,static:l,future:hi({v7_relativeSplatPath:!1},a)}),[u,a,o,l]);typeof r=="string"&&(r=Ln(r));let{pathname:h="/",search:g="",hash:m="",state:S=null,key:x="default"}=r,w=C.exports.useMemo(()=>{let d=Su(h,u);return d==null?null:{location:{pathname:d,search:g,hash:m,state:S,key:x},navigationType:i}},[u,h,g,m,S,x,i]);return w==null?null:C.exports.createElement(fn.Provider,{value:c},C.exports.createElement(fl.Provider,{children:n,value:w}))}function y1(e){let{children:t,location:n}=e;return n1(os(t),n)}new Promise(()=>{});function os(e,t){t===void 0&&(t=[]);let n=[];return C.exports.Children.forEach(e,(r,i)=>{if(!C.exports.isValidElement(r))return;let o=[...t,i];if(r.type===C.exports.Fragment){n.push.apply(n,os(r.props.children,o));return}r.type!==ae&&he(!1),!r.props.index||!r.props.children||he(!1);let l={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=os(r.props.children,o)),n.push(l)}),n}/**
 * React Router DOM v6.25.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ls(){return ls=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ls.apply(this,arguments)}function x1(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function w1(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function S1(e,t){return e.button===0&&(!t||t==="_self")&&!w1(e)}const b1=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],k1="6";try{window.__reactRouterVersion=k1}catch{}const C1="startTransition",gd=Ps[C1],N1="flushSync";Ng[N1];const E1="useId";Ps[E1];function _1(e){let{basename:t,children:n,future:r,window:i}=e,o=C.exports.useRef();o.current==null&&(o.current=Eg({window:i,v5Compat:!0}));let l=o.current,[a,u]=C.exports.useState({action:l.action,location:l.location}),{v7_startTransition:c}=r||{},h=C.exports.useCallback(g=>{c&&gd?gd(()=>u(g)):u(g)},[u,c]);return C.exports.useLayoutEffect(()=>l.listen(h),[l,h]),C.exports.createElement(v1,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:l,future:r})}const P1=typeof window!="undefined"&&typeof window.document!="undefined"&&typeof window.document.createElement!="undefined",O1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,fe=C.exports.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:l,state:a,target:u,to:c,preventScrollReset:h,unstable_viewTransition:g}=t,m=x1(t,b1),{basename:S}=C.exports.useContext(fn),x,w=!1;if(typeof c=="string"&&O1.test(c)&&(x=c,P1))try{let v=new URL(window.location.href),b=c.startsWith("//")?new URL(v.protocol+c):new URL(c),P=Su(b.pathname,S);b.origin===v.origin&&P!=null?c=P+b.search+b.hash:w=!0}catch{}let d=Zg(c,{relative:i}),f=$1(c,{replace:l,state:a,target:u,preventScrollReset:h,relative:i,unstable_viewTransition:g});function p(v){r&&r(v),v.defaultPrevented||f(v)}return C.exports.createElement("a",ls({},m,{href:x||d,onClick:w||o?r:p,ref:n,target:u}))});var vd;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(vd||(vd={}));var yd;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(yd||(yd={}));function $1(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:l,unstable_viewTransition:a}=t===void 0?{}:t,u=Ni(),c=yt(),h=th(e,{relative:l});return C.exports.useCallback(g=>{if(S1(g,n)){g.preventDefault();let m=r!==void 0?r:Fo(c)===Fo(h);u(e,{replace:m,state:i,preventScrollReset:o,relative:l,unstable_viewTransition:a})}},[c,u,h,r,i,n,e,o,l,a])}var pl={exports:{}},q={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var be=typeof Symbol=="function"&&Symbol.for,Eu=be?Symbol.for("react.element"):60103,_u=be?Symbol.for("react.portal"):60106,hl=be?Symbol.for("react.fragment"):60107,ml=be?Symbol.for("react.strict_mode"):60108,gl=be?Symbol.for("react.profiler"):60114,vl=be?Symbol.for("react.provider"):60109,yl=be?Symbol.for("react.context"):60110,Pu=be?Symbol.for("react.async_mode"):60111,xl=be?Symbol.for("react.concurrent_mode"):60111,wl=be?Symbol.for("react.forward_ref"):60112,Sl=be?Symbol.for("react.suspense"):60113,z1=be?Symbol.for("react.suspense_list"):60120,bl=be?Symbol.for("react.memo"):60115,kl=be?Symbol.for("react.lazy"):60116,L1=be?Symbol.for("react.block"):60121,M1=be?Symbol.for("react.fundamental"):60117,R1=be?Symbol.for("react.responder"):60118,T1=be?Symbol.for("react.scope"):60119;function Ke(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Eu:switch(e=e.type,e){case Pu:case xl:case hl:case gl:case ml:case Sl:return e;default:switch(e=e&&e.$$typeof,e){case yl:case wl:case kl:case bl:case vl:return e;default:return t}}case _u:return t}}}function ih(e){return Ke(e)===xl}q.AsyncMode=Pu;q.ConcurrentMode=xl;q.ContextConsumer=yl;q.ContextProvider=vl;q.Element=Eu;q.ForwardRef=wl;q.Fragment=hl;q.Lazy=kl;q.Memo=bl;q.Portal=_u;q.Profiler=gl;q.StrictMode=ml;q.Suspense=Sl;q.isAsyncMode=function(e){return ih(e)||Ke(e)===Pu};q.isConcurrentMode=ih;q.isContextConsumer=function(e){return Ke(e)===yl};q.isContextProvider=function(e){return Ke(e)===vl};q.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Eu};q.isForwardRef=function(e){return Ke(e)===wl};q.isFragment=function(e){return Ke(e)===hl};q.isLazy=function(e){return Ke(e)===kl};q.isMemo=function(e){return Ke(e)===bl};q.isPortal=function(e){return Ke(e)===_u};q.isProfiler=function(e){return Ke(e)===gl};q.isStrictMode=function(e){return Ke(e)===ml};q.isSuspense=function(e){return Ke(e)===Sl};q.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===hl||e===xl||e===gl||e===ml||e===Sl||e===z1||typeof e=="object"&&e!==null&&(e.$$typeof===kl||e.$$typeof===bl||e.$$typeof===vl||e.$$typeof===yl||e.$$typeof===wl||e.$$typeof===M1||e.$$typeof===R1||e.$$typeof===T1||e.$$typeof===L1)};q.typeOf=Ke;pl.exports=q;function j1(e){function t(N,E,z,A,k){for(var U=0,$=0,J=0,G=0,Z,H,ke=0,Be=0,Y,$e=Y=Z=0,K=0,Ce=0,wr=0,Ne=0,Ai=z.length,Sr=Ai-1,rt,F="",de="",Ll="",Ml="",Lt;K<Ai;){if(H=z.charCodeAt(K),K===Sr&&$+G+J+U!==0&&($!==0&&(H=$===47?10:47),G=J=U=0,Ai++,Sr++),$+G+J+U===0){if(K===Sr&&(0<Ce&&(F=F.replace(m,"")),0<F.trim().length)){switch(H){case 32:case 9:case 59:case 13:case 10:break;default:F+=z.charAt(K)}H=59}switch(H){case 123:for(F=F.trim(),Z=F.charCodeAt(0),Y=1,Ne=++K;K<Ai;){switch(H=z.charCodeAt(K)){case 123:Y++;break;case 125:Y--;break;case 47:switch(H=z.charCodeAt(K+1)){case 42:case 47:e:{for($e=K+1;$e<Sr;++$e)switch(z.charCodeAt($e)){case 47:if(H===42&&z.charCodeAt($e-1)===42&&K+2!==$e){K=$e+1;break e}break;case 10:if(H===47){K=$e+1;break e}}K=$e}}break;case 91:H++;case 40:H++;case 34:case 39:for(;K++<Sr&&z.charCodeAt(K)!==H;);}if(Y===0)break;K++}switch(Y=z.substring(Ne,K),Z===0&&(Z=(F=F.replace(g,"").trim()).charCodeAt(0)),Z){case 64:switch(0<Ce&&(F=F.replace(m,"")),H=F.charCodeAt(1),H){case 100:case 109:case 115:case 45:Ce=E;break;default:Ce=Fe}if(Y=t(E,Ce,Y,H,k+1),Ne=Y.length,0<ge&&(Ce=n(Fe,F,wr),Lt=a(3,Y,Ce,E,W,Q,Ne,H,k,A),F=Ce.join(""),Lt!==void 0&&(Ne=(Y=Lt.trim()).length)===0&&(H=0,Y="")),0<Ne)switch(H){case 115:F=F.replace(_,l);case 100:case 109:case 45:Y=F+"{"+Y+"}";break;case 107:F=F.replace(p,"$1 $2"),Y=F+"{"+Y+"}",Y=ie===1||ie===2&&o("@"+Y,3)?"@-webkit-"+Y+"@"+Y:"@"+Y;break;default:Y=F+Y,A===112&&(Y=(de+=Y,""))}else Y="";break;default:Y=t(E,n(E,F,wr),Y,A,k+1)}Ll+=Y,Y=wr=Ce=$e=Z=0,F="",H=z.charCodeAt(++K);break;case 125:case 59:if(F=(0<Ce?F.replace(m,""):F).trim(),1<(Ne=F.length))switch($e===0&&(Z=F.charCodeAt(0),Z===45||96<Z&&123>Z)&&(Ne=(F=F.replace(" ",":")).length),0<ge&&(Lt=a(1,F,E,N,W,Q,de.length,A,k,A))!==void 0&&(Ne=(F=Lt.trim()).length)===0&&(F="\0\0"),Z=F.charCodeAt(0),H=F.charCodeAt(1),Z){case 0:break;case 64:if(H===105||H===99){Ml+=F+z.charAt(K);break}default:F.charCodeAt(Ne-1)!==58&&(de+=i(F,Z,H,F.charCodeAt(2)))}wr=Ce=$e=Z=0,F="",H=z.charCodeAt(++K)}}switch(H){case 13:case 10:$===47?$=0:1+Z===0&&A!==107&&0<F.length&&(Ce=1,F+="\0"),0<ge*zt&&a(0,F,E,N,W,Q,de.length,A,k,A),Q=1,W++;break;case 59:case 125:if($+G+J+U===0){Q++;break}default:switch(Q++,rt=z.charAt(K),H){case 9:case 32:if(G+U+$===0)switch(ke){case 44:case 58:case 9:case 32:rt="";break;default:H!==32&&(rt=" ")}break;case 0:rt="\\0";break;case 12:rt="\\f";break;case 11:rt="\\v";break;case 38:G+$+U===0&&(Ce=wr=1,rt="\f"+rt);break;case 108:if(G+$+U+ye===0&&0<$e)switch(K-$e){case 2:ke===112&&z.charCodeAt(K-3)===58&&(ye=ke);case 8:Be===111&&(ye=Be)}break;case 58:G+$+U===0&&($e=K);break;case 44:$+J+G+U===0&&(Ce=1,rt+="\r");break;case 34:case 39:$===0&&(G=G===H?0:G===0?H:G);break;case 91:G+$+J===0&&U++;break;case 93:G+$+J===0&&U--;break;case 41:G+$+U===0&&J--;break;case 40:if(G+$+U===0){if(Z===0)switch(2*ke+3*Be){case 533:break;default:Z=1}J++}break;case 64:$+J+G+U+$e+Y===0&&(Y=1);break;case 42:case 47:if(!(0<G+U+J))switch($){case 0:switch(2*H+3*z.charCodeAt(K+1)){case 235:$=47;break;case 220:Ne=K,$=42}break;case 42:H===47&&ke===42&&Ne+2!==K&&(z.charCodeAt(Ne+2)===33&&(de+=z.substring(Ne,K+1)),rt="",$=0)}}$===0&&(F+=rt)}Be=ke,ke=H,K++}if(Ne=de.length,0<Ne){if(Ce=E,0<ge&&(Lt=a(2,de,Ce,N,W,Q,Ne,A,k,A),Lt!==void 0&&(de=Lt).length===0))return Ml+de+Ll;if(de=Ce.join(",")+"{"+de+"}",ie*ye!==0){switch(ie!==2||o(de,2)||(ye=0),ye){case 111:de=de.replace(b,":-moz-$1")+de;break;case 112:de=de.replace(v,"::-webkit-input-$1")+de.replace(v,"::-moz-$1")+de.replace(v,":-ms-input-$1")+de}ye=0}}return Ml+de+Ll}function n(N,E,z){var A=E.trim().split(d);E=A;var k=A.length,U=N.length;switch(U){case 0:case 1:var $=0;for(N=U===0?"":N[0]+" ";$<k;++$)E[$]=r(N,E[$],z).trim();break;default:var J=$=0;for(E=[];$<k;++$)for(var G=0;G<U;++G)E[J++]=r(N[G]+" ",A[$],z).trim()}return E}function r(N,E,z){var A=E.charCodeAt(0);switch(33>A&&(A=(E=E.trim()).charCodeAt(0)),A){case 38:return E.replace(f,"$1"+N.trim());case 58:return N.trim()+E.replace(f,"$1"+N.trim());default:if(0<1*z&&0<E.indexOf("\f"))return E.replace(f,(N.charCodeAt(0)===58?"":"$1")+N.trim())}return N+E}function i(N,E,z,A){var k=N+";",U=2*E+3*z+4*A;if(U===944){N=k.indexOf(":",9)+1;var $=k.substring(N,k.length-1).trim();return $=k.substring(0,N).trim()+$+";",ie===1||ie===2&&o($,1)?"-webkit-"+$+$:$}if(ie===0||ie===2&&!o(k,1))return k;switch(U){case 1015:return k.charCodeAt(10)===97?"-webkit-"+k+k:k;case 951:return k.charCodeAt(3)===116?"-webkit-"+k+k:k;case 963:return k.charCodeAt(5)===110?"-webkit-"+k+k:k;case 1009:if(k.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+k+k;case 978:return"-webkit-"+k+"-moz-"+k+k;case 1019:case 983:return"-webkit-"+k+"-moz-"+k+"-ms-"+k+k;case 883:if(k.charCodeAt(8)===45)return"-webkit-"+k+k;if(0<k.indexOf("image-set(",11))return k.replace(ce,"$1-webkit-$2")+k;break;case 932:if(k.charCodeAt(4)===45)switch(k.charCodeAt(5)){case 103:return"-webkit-box-"+k.replace("-grow","")+"-webkit-"+k+"-ms-"+k.replace("grow","positive")+k;case 115:return"-webkit-"+k+"-ms-"+k.replace("shrink","negative")+k;case 98:return"-webkit-"+k+"-ms-"+k.replace("basis","preferred-size")+k}return"-webkit-"+k+"-ms-"+k+k;case 964:return"-webkit-"+k+"-ms-flex-"+k+k;case 1023:if(k.charCodeAt(8)!==99)break;return $=k.substring(k.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+$+"-webkit-"+k+"-ms-flex-pack"+$+k;case 1005:return x.test(k)?k.replace(S,":-webkit-")+k.replace(S,":-moz-")+k:k;case 1e3:switch($=k.substring(13).trim(),E=$.indexOf("-")+1,$.charCodeAt(0)+$.charCodeAt(E)){case 226:$=k.replace(P,"tb");break;case 232:$=k.replace(P,"tb-rl");break;case 220:$=k.replace(P,"lr");break;default:return k}return"-webkit-"+k+"-ms-"+$+k;case 1017:if(k.indexOf("sticky",9)===-1)break;case 975:switch(E=(k=N).length-10,$=(k.charCodeAt(E)===33?k.substring(0,E):k).substring(N.indexOf(":",7)+1).trim(),U=$.charCodeAt(0)+($.charCodeAt(7)|0)){case 203:if(111>$.charCodeAt(8))break;case 115:k=k.replace($,"-webkit-"+$)+";"+k;break;case 207:case 102:k=k.replace($,"-webkit-"+(102<U?"inline-":"")+"box")+";"+k.replace($,"-webkit-"+$)+";"+k.replace($,"-ms-"+$+"box")+";"+k}return k+";";case 938:if(k.charCodeAt(5)===45)switch(k.charCodeAt(6)){case 105:return $=k.replace("-items",""),"-webkit-"+k+"-webkit-box-"+$+"-ms-flex-"+$+k;case 115:return"-webkit-"+k+"-ms-flex-item-"+k.replace(j,"")+k;default:return"-webkit-"+k+"-ms-flex-line-pack"+k.replace("align-content","").replace(j,"")+k}break;case 973:case 989:if(k.charCodeAt(3)!==45||k.charCodeAt(4)===122)break;case 931:case 953:if(B.test(N)===!0)return($=N.substring(N.indexOf(":")+1)).charCodeAt(0)===115?i(N.replace("stretch","fill-available"),E,z,A).replace(":fill-available",":stretch"):k.replace($,"-webkit-"+$)+k.replace($,"-moz-"+$.replace("fill-",""))+k;break;case 962:if(k="-webkit-"+k+(k.charCodeAt(5)===102?"-ms-"+k:"")+k,z+A===211&&k.charCodeAt(13)===105&&0<k.indexOf("transform",10))return k.substring(0,k.indexOf(";",27)+1).replace(w,"$1-webkit-$2")+k}return k}function o(N,E){var z=N.indexOf(E===1?":":"{"),A=N.substring(0,E!==3?z:10);return z=N.substring(z+1,N.length-1),xt(E!==2?A:A.replace(M,"$1"),z,E)}function l(N,E){var z=i(E,E.charCodeAt(0),E.charCodeAt(1),E.charCodeAt(2));return z!==E+";"?z.replace(T," or ($1)").substring(4):"("+E+")"}function a(N,E,z,A,k,U,$,J,G,Z){for(var H=0,ke=E,Be;H<ge;++H)switch(Be=xe[H].call(h,N,ke,z,A,k,U,$,J,G,Z)){case void 0:case!1:case!0:case null:break;default:ke=Be}if(ke!==E)return ke}function u(N){switch(N){case void 0:case null:ge=xe.length=0;break;default:if(typeof N=="function")xe[ge++]=N;else if(typeof N=="object")for(var E=0,z=N.length;E<z;++E)u(N[E]);else zt=!!N|0}return u}function c(N){return N=N.prefix,N!==void 0&&(xt=null,N?typeof N!="function"?ie=1:(ie=2,xt=N):ie=0),c}function h(N,E){var z=N;if(33>z.charCodeAt(0)&&(z=z.trim()),L=z,z=[L],0<ge){var A=a(-1,E,z,z,W,Q,0,0,0,0);A!==void 0&&typeof A=="string"&&(E=A)}var k=t(Fe,z,E,0,0);return 0<ge&&(A=a(-2,k,z,z,W,Q,k.length,0,0,0),A!==void 0&&(k=A)),L="",ye=0,Q=W=1,k}var g=/^\0+/g,m=/[\0\r\f]/g,S=/: */g,x=/zoo|gra/,w=/([,: ])(transform)/g,d=/,\r+?/g,f=/([\t\r\n ])*\f?&/g,p=/@(k\w+)\s*(\S*)\s*/,v=/::(place)/g,b=/:(read-only)/g,P=/[svh]\w+-[tblr]{2}/,_=/\(\s*(.*)\s*\)/g,T=/([\s\S]*?);/g,j=/-self|flex-/g,M=/[^]*?(:[rp][el]a[\w-]+)[^]*/,B=/stretch|:\s*\w+\-(?:conte|avail)/,ce=/([^-])(image-set\()/,Q=1,W=1,ye=0,ie=1,Fe=[],xe=[],ge=0,xt=null,zt=0,L="";return h.use=u,h.set=c,e!==void 0&&c(e),h}var A1={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function I1(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var D1=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,xd=I1(function(e){return D1.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),Ou=pl.exports,F1={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},B1={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},H1={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},oh={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},$u={};$u[Ou.ForwardRef]=H1;$u[Ou.Memo]=oh;function wd(e){return Ou.isMemo(e)?oh:$u[e.$$typeof]||F1}var U1=Object.defineProperty,V1=Object.getOwnPropertyNames,Sd=Object.getOwnPropertySymbols,W1=Object.getOwnPropertyDescriptor,X1=Object.getPrototypeOf,bd=Object.prototype;function lh(e,t,n){if(typeof t!="string"){if(bd){var r=X1(t);r&&r!==bd&&lh(e,r,n)}var i=V1(t);Sd&&(i=i.concat(Sd(t)));for(var o=wd(e),l=wd(t),a=0;a<i.length;++a){var u=i[a];if(!B1[u]&&!(n&&n[u])&&!(l&&l[u])&&!(o&&o[u])){var c=W1(t,u);try{U1(e,u,c)}catch{}}}}return e}var Y1=lh;function st(){return(st=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var kd=function(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n},as=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!pl.exports.typeOf(e)},Ho=Object.freeze([]),Jt=Object.freeze({});function sr(e){return typeof e=="function"}function Cd(e){return e.displayName||e.name||"Component"}function zu(e){return e&&typeof e.styledComponentId=="string"}var ur=typeof process!="undefined"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Lu=typeof window!="undefined"&&"HTMLElement"in window,G1=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process!="undefined"&&process.env!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""?{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY:!1)),K1={};function Nn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var Q1=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,o=i.length,l=o;n>=l;)(l<<=1)<0&&Nn(16,""+n);this.groupSizes=new Uint32Array(l),this.groupSizes.set(i),this.length=l;for(var a=o;a<l;a++)this.groupSizes[a]=0}for(var u=this.indexOfGroup(n+1),c=0,h=r.length;c<h;c++)this.tag.insertRule(u,r[c])&&(this.groupSizes[n]++,u++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),o=i+r;this.groupSizes[n]=0;for(var l=i;l<o;l++)this.tag.deleteRule(i)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],o=this.indexOfGroup(n),l=o+i,a=o;a<l;a++)r+=this.tag.getRule(a)+`/*!sc*/
`;return r},e}(),mo=new Map,Uo=new Map,Zr=1,Qi=function(e){if(mo.has(e))return mo.get(e);for(;Uo.has(Zr);)Zr++;var t=Zr++;return mo.set(e,t),Uo.set(t,e),t},J1=function(e){return Uo.get(e)},Z1=function(e,t){t>=Zr&&(Zr=t+1),mo.set(e,t),Uo.set(t,e)},q1="style["+ur+'][data-styled-version="5.3.11"]',ev=new RegExp("^"+ur+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),tv=function(e,t,n){for(var r,i=n.split(","),o=0,l=i.length;o<l;o++)(r=i[o])&&e.registerName(t,r)},nv=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],i=0,o=n.length;i<o;i++){var l=n[i].trim();if(l){var a=l.match(ev);if(a){var u=0|parseInt(a[1],10),c=a[2];u!==0&&(Z1(c,u),tv(e,c,a[3]),e.getTag().insertRules(u,r)),r.length=0}else r.push(l)}}},rv=function(){return typeof __webpack_nonce__!="undefined"?__webpack_nonce__:null},ah=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){for(var u=a.childNodes,c=u.length;c>=0;c--){var h=u[c];if(h&&h.nodeType===1&&h.hasAttribute(ur))return h}}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(ur,"active"),r.setAttribute("data-styled-version","5.3.11");var l=rv();return l&&r.setAttribute("nonce",l),n.insertBefore(r,o),r},iv=function(){function e(n){var r=this.element=ah(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var o=document.styleSheets,l=0,a=o.length;l<a;l++){var u=o[l];if(u.ownerNode===i)return u}Nn(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),ov=function(){function e(n){var r=this.element=ah(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),o=this.nodes[n];return this.element.insertBefore(i,o||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),lv=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),Nd=Lu,av={isServer:!Lu,useCSSOMInjection:!G1},Vo=function(){function e(n,r,i){n===void 0&&(n=Jt),r===void 0&&(r={}),this.options=st({},av,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&Lu&&Nd&&(Nd=!1,function(o){for(var l=document.querySelectorAll(q1),a=0,u=l.length;a<u;a++){var c=l[a];c&&c.getAttribute(ur)!=="active"&&(nv(o,c),c.parentNode&&c.parentNode.removeChild(c))}}(this))}e.registerId=function(n){return Qi(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(st({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,o=r.useCSSOMInjection,l=r.target,n=i?new lv(l):o?new iv(l):new ov(l),new Q1(n)));var n,r,i,o,l},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(Qi(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},t.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(Qi(n),i)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(Qi(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,o="",l=0;l<i;l++){var a=J1(l);if(a!==void 0){var u=n.names.get(a),c=r.getGroup(l);if(u&&c&&u.size){var h=ur+".g"+l+'[id="'+a+'"]',g="";u!==void 0&&u.forEach(function(m){m.length>0&&(g+=m+",")}),o+=""+c+h+'{content:"'+g+`"}/*!sc*/
`}}}return o}(this)},e}(),sv=/(a)(d)/gi,Ed=function(e){return String.fromCharCode(e+(e>25?39:97))};function ss(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Ed(t%52)+n;return(Ed(t%52)+n).replace(sv,"$1-$2")}var Vn=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},sh=function(e){return Vn(5381,e)};function uh(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(sr(n)&&!zu(n))return!1}return!0}var uv=sh("5.3.11"),cv=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&uh(t),this.componentId=n,this.baseHash=Vn(uv,n),this.baseStyle=r,Vo.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))o.push(this.staticRulesId);else{var l=En(this.rules,t,n,r).join(""),a=ss(Vn(this.baseHash,l)>>>0);if(!n.hasNameForId(i,a)){var u=r(l,"."+a,void 0,i);n.insertRules(i,a,u)}o.push(a),this.staticRulesId=a}else{for(var c=this.rules.length,h=Vn(this.baseHash,r.hash),g="",m=0;m<c;m++){var S=this.rules[m];if(typeof S=="string")g+=S;else if(S){var x=En(S,t,n,r),w=Array.isArray(x)?x.join(""):x;h=Vn(h,w+m),g+=w}}if(g){var d=ss(h>>>0);if(!n.hasNameForId(i,d)){var f=r(g,"."+d,void 0,i);n.insertRules(i,d,f)}o.push(d)}}return o.join(" ")},e}(),dv=/^\s*\/\/.*$/gm,fv=[":","[",".","#"];function pv(e){var t,n,r,i,o=e===void 0?Jt:e,l=o.options,a=l===void 0?Jt:l,u=o.plugins,c=u===void 0?Ho:u,h=new j1(a),g=[],m=function(w){function d(f){if(f)try{w(f+"}")}catch{}}return function(f,p,v,b,P,_,T,j,M,B){switch(f){case 1:if(M===0&&p.charCodeAt(0)===64)return w(p+";"),"";break;case 2:if(j===0)return p+"/*|*/";break;case 3:switch(j){case 102:case 112:return w(v[0]+p),"";default:return p+(B===0?"/*|*/":"")}case-2:p.split("/*|*/}").forEach(d)}}}(function(w){g.push(w)}),S=function(w,d,f){return d===0&&fv.indexOf(f[n.length])!==-1||f.match(i)?w:"."+t};function x(w,d,f,p){p===void 0&&(p="&");var v=w.replace(dv,""),b=d&&f?f+" "+d+" { "+v+" }":v;return t=p,n=d,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),h(f||!d?"":d,b)}return h.use([].concat(c,[function(w,d,f){w===2&&f.length&&f[0].lastIndexOf(n)>0&&(f[0]=f[0].replace(r,S))},m,function(w){if(w===-2){var d=g;return g=[],d}}])),x.hash=c.length?c.reduce(function(w,d){return d.name||Nn(15),Vn(w,d.name)},5381).toString():"",x}var ch=Te.createContext();ch.Consumer;var dh=Te.createContext(),hv=(dh.Consumer,new Vo),us=pv();function fh(){return C.exports.useContext(ch)||hv}function ph(){return C.exports.useContext(dh)||us}var mv=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=us);var l=r.name+o.hash;i.hasNameForId(r.id,l)||i.insertRules(r.id,l,o(r.rules,l,"@keyframes"))},this.toString=function(){return Nn(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=us),this.name+t.hash},e}(),gv=/([A-Z])/,vv=/([A-Z])/g,yv=/^ms-/,xv=function(e){return"-"+e.toLowerCase()};function _d(e){return gv.test(e)?e.replace(vv,xv).replace(yv,"-ms-"):e}var Pd=function(e){return e==null||e===!1||e===""};function En(e,t,n,r){if(Array.isArray(e)){for(var i,o=[],l=0,a=e.length;l<a;l+=1)(i=En(e[l],t,n,r))!==""&&(Array.isArray(i)?o.push.apply(o,i):o.push(i));return o}if(Pd(e))return"";if(zu(e))return"."+e.styledComponentId;if(sr(e)){if(typeof(c=e)!="function"||c.prototype&&c.prototype.isReactComponent||!t)return e;var u=e(t);return En(u,t,n,r)}var c;return e instanceof mv?n?(e.inject(n,r),e.getName(r)):e:as(e)?function h(g,m){var S,x,w=[];for(var d in g)g.hasOwnProperty(d)&&!Pd(g[d])&&(Array.isArray(g[d])&&g[d].isCss||sr(g[d])?w.push(_d(d)+":",g[d],";"):as(g[d])?w.push.apply(w,h(g[d],d)):w.push(_d(d)+": "+(S=d,(x=g[d])==null||typeof x=="boolean"||x===""?"":typeof x!="number"||x===0||S in A1||S.startsWith("--")?String(x).trim():x+"px")+";"));return m?[m+" {"].concat(w,["}"]):w}(e):e.toString()}var Od=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function hh(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return sr(e)||as(e)?Od(En(kd(Ho,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:Od(En(kd(e,n)))}var mh=function(e,t,n){return n===void 0&&(n=Jt),e.theme!==n.theme&&e.theme||t||n.theme},wv=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Sv=/(^-|-$)/g;function oa(e){return e.replace(wv,"-").replace(Sv,"")}var gh=function(e){return ss(sh(e)>>>0)};function Ji(e){return typeof e=="string"&&!0}var cs=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},bv=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function kv(e,t,n){var r=e[n];cs(t)&&cs(r)?vh(r,t):e[n]=t}function vh(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var i=0,o=n;i<o.length;i++){var l=o[i];if(cs(l))for(var a in l)bv(a)&&kv(e,l[a],a)}return e}var mi=Te.createContext();mi.Consumer;function Cv(e){var t=C.exports.useContext(mi),n=C.exports.useMemo(function(){return function(r,i){if(!r)return Nn(14);if(sr(r)){var o=r(i);return o}return Array.isArray(r)||typeof r!="object"?Nn(8):i?st({},i,{},r):r}(e.theme,t)},[e.theme,t]);return e.children?Te.createElement(mi.Provider,{value:n},e.children):null}var la={};function yh(e,t,n){var r=zu(e),i=!Ji(e),o=t.attrs,l=o===void 0?Ho:o,a=t.componentId,u=a===void 0?function(p,v){var b=typeof p!="string"?"sc":oa(p);la[b]=(la[b]||0)+1;var P=b+"-"+gh("5.3.11"+b+la[b]);return v?v+"-"+P:P}(t.displayName,t.parentComponentId):a,c=t.displayName,h=c===void 0?function(p){return Ji(p)?"styled."+p:"Styled("+Cd(p)+")"}(e):c,g=t.displayName&&t.componentId?oa(t.displayName)+"-"+t.componentId:t.componentId||u,m=r&&e.attrs?Array.prototype.concat(e.attrs,l).filter(Boolean):l,S=t.shouldForwardProp;r&&e.shouldForwardProp&&(S=t.shouldForwardProp?function(p,v,b){return e.shouldForwardProp(p,v,b)&&t.shouldForwardProp(p,v,b)}:e.shouldForwardProp);var x,w=new cv(n,g,r?e.componentStyle:void 0),d=w.isStatic&&l.length===0,f=function(p,v){return function(b,P,_,T){var j=b.attrs,M=b.componentStyle,B=b.defaultProps,ce=b.foldedComponentIds,Q=b.shouldForwardProp,W=b.styledComponentId,ye=b.target,ie=function(A,k,U){A===void 0&&(A=Jt);var $=st({},k,{theme:A}),J={};return U.forEach(function(G){var Z,H,ke,Be=G;for(Z in sr(Be)&&(Be=Be($)),Be)$[Z]=J[Z]=Z==="className"?(H=J[Z],ke=Be[Z],H&&ke?H+" "+ke:H||ke):Be[Z]}),[$,J]}(mh(P,C.exports.useContext(mi),B)||Jt,P,j),Fe=ie[0],xe=ie[1],ge=function(A,k,U,$){var J=fh(),G=ph(),Z=k?A.generateAndInjectStyles(Jt,J,G):A.generateAndInjectStyles(U,J,G);return Z}(M,T,Fe),xt=_,zt=xe.$as||P.$as||xe.as||P.as||ye,L=Ji(zt),N=xe!==P?st({},P,{},xe):P,E={};for(var z in N)z[0]!=="$"&&z!=="as"&&(z==="forwardedAs"?E.as=N[z]:(Q?Q(z,xd,zt):!L||xd(z))&&(E[z]=N[z]));return P.style&&xe.style!==P.style&&(E.style=st({},P.style,{},xe.style)),E.className=Array.prototype.concat(ce,W,ge!==W?ge:null,P.className,xe.className).filter(Boolean).join(" "),E.ref=xt,C.exports.createElement(zt,E)}(x,p,v,d)};return f.displayName=h,(x=Te.forwardRef(f)).attrs=m,x.componentStyle=w,x.displayName=h,x.shouldForwardProp=S,x.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):Ho,x.styledComponentId=g,x.target=r?e.target:e,x.withComponent=function(p){var v=t.componentId,b=function(_,T){if(_==null)return{};var j,M,B={},ce=Object.keys(_);for(M=0;M<ce.length;M++)j=ce[M],T.indexOf(j)>=0||(B[j]=_[j]);return B}(t,["componentId"]),P=v&&v+"-"+(Ji(p)?p:oa(Cd(p)));return yh(p,st({},b,{attrs:m,componentId:P}),n)},Object.defineProperty(x,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(p){this._foldedDefaultProps=r?vh({},e.defaultProps,p):p}}),Object.defineProperty(x,"toString",{value:function(){return"."+x.styledComponentId}}),i&&Y1(x,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),x}var ds=function(e){return function t(n,r,i){if(i===void 0&&(i=Jt),!pl.exports.isValidElementType(r))return Nn(1,String(r));var o=function(){return n(r,i,hh.apply(void 0,arguments))};return o.withConfig=function(l){return t(n,r,st({},i,{},l))},o.attrs=function(l){return t(n,r,st({},i,{attrs:Array.prototype.concat(i.attrs,l).filter(Boolean)}))},o}(yh,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){ds[e]=ds(e)});var Nv=function(){function e(n,r){this.rules=n,this.componentId=r,this.isStatic=uh(n),Vo.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(n,r,i,o){var l=o(En(this.rules,r,i,o).join(""),""),a=this.componentId+n;i.insertRules(a,a,l)},t.removeStyles=function(n,r){r.clearRules(this.componentId+n)},t.renderStyles=function(n,r,i,o){n>2&&Vo.registerId(this.componentId+n),this.removeStyles(n,i),this.createStyles(n,r,i,o)},e}();function Ev(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=hh.apply(void 0,[e].concat(n)),o="sc-global-"+gh(JSON.stringify(i)),l=new Nv(i,o);function a(c){var h=fh(),g=ph(),m=C.exports.useContext(mi),S=C.exports.useRef(h.allocateGSInstance(o)).current;return h.server&&u(S,c,h,m,g),C.exports.useLayoutEffect(function(){if(!h.server)return u(S,c,h,m,g),function(){return l.removeStyles(S,h)}},[S,c,h,m,g]),null}function u(c,h,g,m,S){if(l.isStatic)l.renderStyles(c,K1,g,S);else{var x=st({},h,{theme:mh(h,m,a.defaultProps)});l.renderStyles(c,x,g,S)}}return Te.memo(a)}var D=ds;const _v=Ev`

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

a {
  color: ${e=>e.theme.text};
}

.app {
  display: block;
}

.hide {
  display: none !important;
}
@media (min-width: 768px) {
  .app {
    .main {
      padding: 55px 15px 55px 75px;

      &.sidebar-open {
        padding-left: 265px;
      }

    }
  }
}

@media (max-width: 767px) {
  .app {
    .main {
      h1 {
        display: none;
      }

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
`,Pv={header:"#ffffff",headerDesktop:"#ffffff",body:"#F7F7F8",bodyDesktop:"#F7F7F8",sideBar:"#efeff1",color:"#9147ff",textColor:"#0e0e10",hover:"#0000001a",soft:"#777777",bits:"#e9e9e9",softDesktop:"#555555",border:"#efeff1",darkModeBg:"#dedede",iconColor:"#0e0e10",profit:"#0f0",loss:"$f00"},Ov={header:"#0e0e10",headerDesktop:"#18181B",body:"#18181B",bodyDesktop:"#0e0e10",sideBar:"#1f1f23",color:"#9147ff",textColor:"#fcfaff",hover:"#ffffff1a",soft:"#adadb8",bits:"#333333",softDesktop:"#cdcdb8",border:"#ffffff1a",darkModeBg:"#9147ff",iconColor:"#adadb8",profit:"#0f0",loss:"$f00"};var xh={exports:{}},$v="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",zv=$v,Lv=zv;function wh(){}function Sh(){}Sh.resetWarningCache=wh;var Mv=function(){function e(r,i,o,l,a,u){if(u!==Lv){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Sh,resetWarningCache:wh};return n.PropTypes=n,n};xh.exports=Mv();var an=Te.createContext(null);function Rv(e){e()}var bh=Rv,Tv=function(t){return bh=t},jv=function(){return bh};function Av(){var e=jv(),t=null,n=null;return{clear:function(){t=null,n=null},notify:function(){e(function(){for(var i=t;i;)i.callback(),i=i.next})},get:function(){for(var i=[],o=t;o;)i.push(o),o=o.next;return i},subscribe:function(i){var o=!0,l=n={callback:i,next:null,prev:n};return l.prev?l.prev.next=l:t=l,function(){!o||t===null||(o=!1,l.next?l.next.prev=l.prev:n=l.prev,l.prev?l.prev.next=l.next:t=l.next)}}}}var $d={notify:function(){},get:function(){return[]}};function kh(e,t){var n,r=$d;function i(g){return u(),r.subscribe(g)}function o(){r.notify()}function l(){h.onStateChange&&h.onStateChange()}function a(){return Boolean(n)}function u(){n||(n=t?t.addNestedSub(l):e.subscribe(l),r=Av())}function c(){n&&(n(),n=void 0,r.clear(),r=$d)}var h={addNestedSub:i,notifyNestedSubs:o,handleChangeWrapper:l,isSubscribed:a,trySubscribe:u,tryUnsubscribe:c,getListeners:function(){return r}};return h}var fs=typeof window!="undefined"&&typeof window.document!="undefined"&&typeof window.document.createElement!="undefined"?C.exports.useLayoutEffect:C.exports.useEffect,Cl={exports:{}},Ei={};/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Iv=C.exports,Ch=60103;Ei.Fragment=60107;if(typeof Symbol=="function"&&Symbol.for){var zd=Symbol.for;Ch=zd("react.element"),Ei.Fragment=zd("react.fragment")}var Dv=Iv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Fv=Object.prototype.hasOwnProperty,Bv={key:!0,ref:!0,__self:!0,__source:!0};function Nh(e,t,n){var r,i={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)Fv.call(t,r)&&!Bv.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Ch,type:e,key:o,ref:l,props:i,_owner:Dv.current}}Ei.jsx=Nh;Ei.jsxs=Nh;Cl.exports=Ei;const s=Cl.exports.jsx,y=Cl.exports.jsxs,nt=Cl.exports.Fragment;function Hv(e){var t=e.store,n=e.context,r=e.children,i=C.exports.useMemo(function(){var a=kh(t);return{store:t,subscription:a}},[t]),o=C.exports.useMemo(function(){return t.getState()},[t]);fs(function(){var a=i.subscription;return a.onStateChange=a.notifyNestedSubs,a.trySubscribe(),o!==t.getState()&&a.notifyNestedSubs(),function(){a.tryUnsubscribe(),a.onStateChange=null}},[i,o]);var l=n||an;return s(l.Provider,{value:i,children:r})}var te={};/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nl=60103,El=60106,_i=60107,Pi=60108,Oi=60114,$i=60109,zi=60110,Li=60112,Mi=60113,Mu=60120,Ri=60115,Ti=60116,Eh=60121,_h=60122,Ph=60117,Oh=60129,$h=60131;if(typeof Symbol=="function"&&Symbol.for){var Ee=Symbol.for;Nl=Ee("react.element"),El=Ee("react.portal"),_i=Ee("react.fragment"),Pi=Ee("react.strict_mode"),Oi=Ee("react.profiler"),$i=Ee("react.provider"),zi=Ee("react.context"),Li=Ee("react.forward_ref"),Mi=Ee("react.suspense"),Mu=Ee("react.suspense_list"),Ri=Ee("react.memo"),Ti=Ee("react.lazy"),Eh=Ee("react.block"),_h=Ee("react.server.block"),Ph=Ee("react.fundamental"),Oh=Ee("react.debug_trace_mode"),$h=Ee("react.legacy_hidden")}function ut(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Nl:switch(e=e.type,e){case _i:case Oi:case Pi:case Mi:case Mu:return e;default:switch(e=e&&e.$$typeof,e){case zi:case Li:case Ti:case Ri:case $i:return e;default:return t}}case El:return t}}}var Uv=$i,Vv=Nl,Wv=Li,Xv=_i,Yv=Ti,Gv=Ri,Kv=El,Qv=Oi,Jv=Pi,Zv=Mi;te.ContextConsumer=zi;te.ContextProvider=Uv;te.Element=Vv;te.ForwardRef=Wv;te.Fragment=Xv;te.Lazy=Yv;te.Memo=Gv;te.Portal=Kv;te.Profiler=Qv;te.StrictMode=Jv;te.Suspense=Zv;te.isAsyncMode=function(){return!1};te.isConcurrentMode=function(){return!1};te.isContextConsumer=function(e){return ut(e)===zi};te.isContextProvider=function(e){return ut(e)===$i};te.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Nl};te.isForwardRef=function(e){return ut(e)===Li};te.isFragment=function(e){return ut(e)===_i};te.isLazy=function(e){return ut(e)===Ti};te.isMemo=function(e){return ut(e)===Ri};te.isPortal=function(e){return ut(e)===El};te.isProfiler=function(e){return ut(e)===Oi};te.isStrictMode=function(e){return ut(e)===Pi};te.isSuspense=function(e){return ut(e)===Mi};te.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===_i||e===Oi||e===Oh||e===Pi||e===Mi||e===Mu||e===$h||typeof e=="object"&&e!==null&&(e.$$typeof===Ti||e.$$typeof===Ri||e.$$typeof===$i||e.$$typeof===zi||e.$$typeof===Li||e.$$typeof===Ph||e.$$typeof===Eh||e[0]===_h)};te.typeOf=ut;function zh(){var e=C.exports.useContext(an);return e}function Lh(e){e===void 0&&(e=an);var t=e===an?zh:function(){return C.exports.useContext(e)};return function(){var r=t(),i=r.store;return i}}var qv=Lh();function ey(e){e===void 0&&(e=an);var t=e===an?qv:Lh(e);return function(){var r=t();return r.dispatch}}var Ru=ey(),ty=function(t,n){return t===n};function ny(e,t,n,r){var i=C.exports.useReducer(function(x){return x+1},0),o=i[1],l=C.exports.useMemo(function(){return kh(n,r)},[n,r]),a=C.exports.useRef(),u=C.exports.useRef(),c=C.exports.useRef(),h=C.exports.useRef(),g=n.getState(),m;try{if(e!==u.current||g!==c.current||a.current){var S=e(g);h.current===void 0||!t(S,h.current)?m=S:m=h.current}else m=h.current}catch(x){throw a.current&&(x.message+=`
The error may be correlated with this previous error:
`+a.current.stack+`

`),x}return fs(function(){u.current=e,c.current=g,h.current=m,a.current=void 0}),fs(function(){function x(){try{var w=n.getState();if(w===c.current)return;var d=u.current(w);if(t(d,h.current))return;h.current=d,c.current=w}catch(f){a.current=f}o()}return l.onStateChange=x,l.trySubscribe(),x(),function(){return l.tryUnsubscribe()}},[n,l]),m}function ry(e){e===void 0&&(e=an);var t=e===an?zh:function(){return C.exports.useContext(e)};return function(r,i){i===void 0&&(i=ty);var o=t(),l=o.store,a=o.subscription,u=ny(r,i,l,a);return C.exports.useDebugValue(u),u}}var me=ry();Tv(Jo.exports.unstable_batchedUpdates);const iy=D.header`
  display: none;
  position: fixed;
  top: 0px;
  z-index: 20;
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
      width: 100vw;
      display: flex;
      align-items: center;
      height: 100%;

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
        flex: 1;

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
      }

      .right {
        display: flex;
        align-items: center;

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
      }

      .profile-desktop {
        margin: 0 20px 0 10px;
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
`;var Mh={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Ld=Te.createContext&&Te.createContext(Mh),Zt=globalThis&&globalThis.__assign||function(){return Zt=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Zt.apply(this,arguments)},oy=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function Rh(e){return e&&e.map(function(t,n){return Te.createElement(t.tag,Zt({key:n},t.attr),Rh(t.child))})}function V(e){return function(t){return Te.createElement(ly,Zt({attr:Zt({},e.attr)},t),Rh(e.child))}}function ly(e){var t=function(n){var r=e.attr,i=e.size,o=e.title,l=oy(e,["attr","size","title"]),a=i||n.size||"1em",u;return n.className&&(u=n.className),e.className&&(u=(u?u+" ":"")+e.className),Te.createElement("svg",Zt({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,l,{className:u,style:Zt(Zt({color:e.color||n.color},n.style),e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),o&&Te.createElement("title",null,o),e.children)};return Ld!==void 0?Te.createElement(Ld.Consumer,null,function(n){return t(n)}):t(Mh)}function ay(e){return V({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M4.5 12a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-1zm3 0a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1zm3 0a.5.5 0 0 1-.5-.5v-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5h-1z"}},{tag:"path",attr:{d:"M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"}}]})(e)}function sy(e){return V({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M4.98 4a.5.5 0 0 0-.39.188L1.54 8H6a.5.5 0 0 1 .5.5 1.5 1.5 0 1 0 3 0A.5.5 0 0 1 10 8h4.46l-3.05-3.812A.5.5 0 0 0 11.02 4H4.98zm9.954 5H10.45a2.5 2.5 0 0 1-4.9 0H1.066l.32 2.562a.5.5 0 0 0 .497.438h12.234a.5.5 0 0 0 .496-.438L14.933 9zM3.809 3.563A1.5 1.5 0 0 1 4.981 3h6.038a1.5 1.5 0 0 1 1.172.563l3.7 4.625a.5.5 0 0 1 .105.374l-.39 3.124A1.5 1.5 0 0 1 14.117 13H1.883a1.5 1.5 0 0 1-1.489-1.314l-.39-3.124a.5.5 0 0 1 .106-.374l3.7-4.625z"}}]})(e)}function uy(e){return V({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M3.857 0 1 2.857v10.286h3.429V16l2.857-2.857H9.57L14.714 8V0H3.857zm9.714 7.429-2.285 2.285H9l-2 2v-2H4.429V1.143h9.142v6.286z"}},{tag:"path",attr:{d:"M11.857 3.143h-1.143V6.57h1.143V3.143zm-3.143 0H7.571V6.57h1.143V3.143z"}}]})(e)}function Tu(e){return V({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"}}]})(e)}function ju(e){return V({tag:"svg",attr:{viewBox:"0 0 192 512"},child:[{tag:"path",attr:{d:"M96 184c39.8 0 72 32.2 72 72s-32.2 72-72 72-72-32.2-72-72 32.2-72 72-72zM24 80c0 39.8 32.2 72 72 72s72-32.2 72-72S135.8 8 96 8 24 40.2 24 80zm0 352c0 39.8 32.2 72 72 72s72-32.2 72-72-32.2-72-72-72-72 32.2-72 72z"}}]})(e)}function cy(e){return V({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M4 6h2v12H4zm4 7h8.586l-4.293 4.293 1.414 1.414L20.414 12l-6.707-6.707-1.414 1.414L16.586 11H8z"}}]})(e)}function Th(e){return V({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"}}]})(e)}function dy(e){return V({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412l7.332 7.332c.17.299.498.492.875.492a.99.99 0 0 0 .792-.409l7.415-7.415c2.354-2.354 2.354-6.049-.002-8.416a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595zm6.791 1.61c1.563 1.571 1.564 4.025.002 5.588L12 18.586l-6.793-6.793c-1.562-1.563-1.561-4.017-.002-5.584.76-.756 1.754-1.172 2.799-1.172s2.035.416 2.789 1.17l.5.5a.999.999 0 0 0 1.414 0l.5-.5c1.512-1.509 4.074-1.505 5.584-.002z"}}]})(e)}function jh(e){return V({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M11.999 1.993C6.486 1.994 2 6.48 1.999 11.994c0 5.514 4.486 10 10.001 10 5.514-.001 10-4.487 10-10 0-5.514-4.486-10-10.001-10.001zM12 19.994c-4.412 0-8.001-3.589-8.001-8 .001-4.411 3.59-8 8-8.001C16.411 3.994 20 7.583 20 11.994c0 4.41-3.589 7.999-8 8z"}},{tag:"path",attr:{d:"m12.012 7.989-4.005 4.005 4.005 4.004v-3.004h3.994v-2h-3.994z"}}]})(e)}function Ah(e){return V({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M18.464 2.114a.998.998 0 0 0-1.033.063l-13 9a1.003 1.003 0 0 0 0 1.645l13 9A1 1 0 0 0 19 21V3a1 1 0 0 0-.536-.886zM17 19.091 6.757 12 17 4.909v14.182z"}}]})(e)}function fy(e){return V({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M19 2H5c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h3.586L12 21.414 15.414 18H19c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 14h-4.414L12 18.586 9.414 16H5V4h14v12z"}}]})(e)}function Au(e){return V({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"}}]})(e)}function Wo(e){return V({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"}}]})(e)}function py(e){return V({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M16 12h2v4h-2z"}},{tag:"path",attr:{d:"M20 7V5c0-1.103-.897-2-2-2H5C3.346 3 2 4.346 2 6v12c0 2.201 1.794 3 3 3h15c1.103 0 2-.897 2-2V9c0-1.103-.897-2-2-2zM5 5h13v2H5a1.001 1.001 0 0 1 0-2zm15 14H5.012C4.55 18.988 4 18.805 4 18V8.815c.314.113.647.185 1 .185h15v10z"}}]})(e)}const hy=D.div`
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
`;function my(e){return V({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"}}]})(e)}function gy(e){return V({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 2H3v16h5v4l4-4h5l4-4V2zM11 11V7M16 11V7"}}]})(e)}function vy(e){return V({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}},{tag:"circle",attr:{cx:"8.5",cy:"7",r:"4"}},{tag:"line",attr:{x1:"23",y1:"11",x2:"17",y2:"11"}}]})(e)}function Ih(e){return V({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}},{tag:"circle",attr:{cx:"9",cy:"7",r:"4"}},{tag:"path",attr:{d:"M23 21v-2a4 4 0 0 0-3-3.87"}},{tag:"path",attr:{d:"M16 3.13a4 4 0 0 1 0 7.75"}}]})(e)}function aa(e){return V({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z"}}]})(e)}function Dh(e){return V({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z"}}]})(e)}function yy(e){return V({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95a15.65 15.65 0 00-1.38-3.56A8.03 8.03 0 0118.92 8zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56A7.987 7.987 0 015.08 16zm2.95-8H5.08a7.987 7.987 0 014.33-3.56A15.65 15.65 0 008.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 01-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"}}]})(e)}function Fh(e){return V({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"}}]})(e)}function xy(e){return V({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z"}}]})(e)}function wy(e){return V({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M17 8l-1.41 1.41L17.17 11H9v2h8.17l-1.58 1.58L17 16l4-4-4-4zM5 5h7V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h7v-2H5V5z"}}]})(e)}function Sy(e){return V({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M15 8v8H5V8h10m1-2H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4V7c0-.55-.45-1-1-1z"}}]})(e)}function Bh(e){return V({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M9.37 5.51A7.35 7.35 0 009.1 7.5c0 4.08 3.32 7.4 7.4 7.4.68 0 1.35-.09 1.99-.27A7.014 7.014 0 0112 19c-3.86 0-7-3.14-7-7 0-2.93 1.81-5.45 4.37-6.49zM12 3a9 9 0 109 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 01-4.4 2.26 5.403 5.403 0 01-3.14-9.8c-.44-.06-.9-.1-1.36-.1z"}}]})(e)}function by(e){return V({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M13.1714 12.0007L8.22168 7.05093L9.63589 5.63672L15.9999 12.0007L9.63589 18.3646L8.22168 16.9504L13.1714 12.0007Z"}}]})(e)}function ky(e){return V({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M21 19.9997C21 20.552 20.5523 20.9997 20 20.9997H4C3.44772 20.9997 3 20.552 3 19.9997V9.48882C3 9.18023 3.14247 8.88893 3.38606 8.69947L11.3861 2.47725C11.7472 2.19639 12.2528 2.19639 12.6139 2.47725L20.6139 8.69947C20.8575 8.88893 21 9.18023 21 9.48882V19.9997ZM19 18.9997V9.97791L12 4.53346L5 9.97791V18.9997H19ZM7 14.9997H17V16.9997H7V14.9997Z"}}]})(e)}function Cy(e){return V({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"}}]})(e)}function Ny(e){return V({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M4.41085 14.5259L7.81249 11.1243L10.6409 13.9527L13.7978 10.7958L12.0049 9.00293H17.0049V14.0029L15.212 12.21L10.6409 16.7811L7.81249 13.9527L5.33834 16.4268C6.77158 18.5823 9.22233 20.0029 12.0049 20.0029C16.4232 20.0029 20.0049 16.4212 20.0049 12.0029C20.0049 7.58465 16.4232 4.00293 12.0049 4.00293C7.5866 4.00293 4.00488 7.58465 4.00488 12.0029C4.00488 12.8845 4.14747 13.7327 4.41085 14.5259ZM2.87288 16.0841L2.86275 16.074L2.86662 16.0701C2.31276 14.8276 2.00488 13.4512 2.00488 12.0029C2.00488 6.48008 6.48204 2.00293 12.0049 2.00293C17.5277 2.00293 22.0049 6.48008 22.0049 12.0029C22.0049 17.5258 17.5277 22.0029 12.0049 22.0029C7.93574 22.0029 4.43426 19.5725 2.87288 16.0841Z"}}]})(e)}function Ey(e){return V({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853Z"}}]})(e)}function _y(e){return V({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M4 18H6V20H18V4H6V6H4V3C4 2.44772 4.44772 2 5 2H19C19.5523 2 20 2.44772 20 3V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V18ZM6 11H13V13H6V16L1 12L6 8V11Z"}}]})(e)}function ps(e){return V({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M8.68735 4.00008L11.294 1.39348C11.6845 1.00295 12.3176 1.00295 12.7082 1.39348L15.3148 4.00008H19.0011C19.5533 4.00008 20.0011 4.4478 20.0011 5.00008V8.68637L22.6077 11.293C22.9982 11.6835 22.9982 12.3167 22.6077 12.7072L20.0011 15.3138V19.0001C20.0011 19.5524 19.5533 20.0001 19.0011 20.0001H15.3148L12.7082 22.6067C12.3176 22.9972 11.6845 22.9972 11.294 22.6067L8.68735 20.0001H5.00106C4.44877 20.0001 4.00106 19.5524 4.00106 19.0001V15.3138L1.39446 12.7072C1.00393 12.3167 1.00393 11.6835 1.39446 11.293L4.00106 8.68637V5.00008C4.00106 4.4478 4.44877 4.00008 5.00106 4.00008H8.68735ZM6.00106 6.00008V9.5148L3.51578 12.0001L6.00106 14.4854V18.0001H9.51578L12.0011 20.4854L14.4863 18.0001H18.0011V14.4854L20.4863 12.0001L18.0011 9.5148V6.00008H14.4863L12.0011 3.5148L9.51578 6.00008H6.00106ZM12.0011 16.0001C9.79192 16.0001 8.00106 14.2092 8.00106 12.0001C8.00106 9.79094 9.79192 8.00008 12.0011 8.00008C14.2102 8.00008 16.0011 9.79094 16.0011 12.0001C16.0011 14.2092 14.2102 16.0001 12.0011 16.0001ZM12.0011 14.0001C13.1056 14.0001 14.0011 13.1047 14.0011 12.0001C14.0011 10.8955 13.1056 10.0001 12.0011 10.0001C10.8965 10.0001 10.0011 10.8955 10.0011 12.0001C10.0011 13.1047 10.8965 14.0001 12.0011 14.0001Z"}}]})(e)}function Py(e){return V({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"}}]})(e)}function Oy(e){return V({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M3.5 2h-1v5h1V2zm6.1 5H6.4L6 6.45v-1L6.4 5h3.2l.4.5v1l-.4.5zm-5 3H1.4L1 9.5v-1l.4-.5h3.2l.4.5v1l-.4.5zm3.9-8h-1v2h1V2zm-1 6h1v6h-1V8zm-4 3h-1v3h1v-3zm7.9 0h3.19l.4-.5v-.95l-.4-.5H11.4l-.4.5v.95l.4.5zm2.1-9h-1v6h1V2zm-1 10h1v2h-1v-2z"}}]})(e)}const $y=D.div`
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
`;function lt(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+e+(n.length?" "+n.map(function(i){return"'"+i+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function sn(e){return!!e&&!!e[oe]}function _t(e){var t;return!!e&&(function(n){if(!n||typeof n!="object")return!1;var r=Object.getPrototypeOf(n);if(r===null)return!0;var i=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return i===Object||typeof i=="function"&&Function.toString.call(i)===Dy}(e)||Array.isArray(e)||!!e[Dd]||!!(!((t=e.constructor)===null||t===void 0)&&t[Dd])||Iu(e)||Du(e))}function _n(e,t,n){n===void 0&&(n=!1),xr(e)===0?(n?Object.keys:nr)(e).forEach(function(r){n&&typeof r=="symbol"||t(r,e[r],e)}):e.forEach(function(r,i){return t(i,r,e)})}function xr(e){var t=e[oe];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:Iu(e)?2:Du(e)?3:0}function tr(e,t){return xr(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function zy(e,t){return xr(e)===2?e.get(t):e[t]}function Hh(e,t,n){var r=xr(e);r===2?e.set(t,n):r===3?e.add(n):e[t]=n}function Uh(e,t){return e===t?e!==0||1/e==1/t:e!=e&&t!=t}function Iu(e){return Ay&&e instanceof Map}function Du(e){return Iy&&e instanceof Set}function hn(e){return e.o||e.t}function Fu(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=Wh(e);delete t[oe];for(var n=nr(t),r=0;r<n.length;r++){var i=n[r],o=t[i];o.writable===!1&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(t[i]={configurable:!0,writable:!0,enumerable:o.enumerable,value:e[i]})}return Object.create(Object.getPrototypeOf(e),t)}function Bu(e,t){return t===void 0&&(t=!1),Hu(e)||sn(e)||!_t(e)||(xr(e)>1&&(e.set=e.add=e.clear=e.delete=Ly),Object.freeze(e),t&&_n(e,function(n,r){return Bu(r,!0)},!0)),e}function Ly(){lt(2)}function Hu(e){return e==null||typeof e!="object"||Object.isFrozen(e)}function gt(e){var t=vs[e];return t||lt(18,e),t}function My(e,t){vs[e]||(vs[e]=t)}function hs(){return gi}function sa(e,t){t&&(gt("Patches"),e.u=[],e.s=[],e.v=t)}function Xo(e){ms(e),e.p.forEach(Ry),e.p=null}function ms(e){e===gi&&(gi=e.l)}function Md(e){return gi={p:[],l:gi,h:e,m:!0,_:0}}function Ry(e){var t=e[oe];t.i===0||t.i===1?t.j():t.g=!0}function ua(e,t){t._=t.p.length;var n=t.p[0],r=e!==void 0&&e!==n;return t.h.O||gt("ES5").S(t,e,r),r?(n[oe].P&&(Xo(t),lt(4)),_t(e)&&(e=Yo(t,e),t.l||Go(t,e)),t.u&&gt("Patches").M(n[oe].t,e,t.u,t.s)):e=Yo(t,n,[]),Xo(t),t.u&&t.v(t.u,t.s),e!==Vh?e:void 0}function Yo(e,t,n){if(Hu(t))return t;var r=t[oe];if(!r)return _n(t,function(a,u){return Rd(e,r,t,a,u,n)},!0),t;if(r.A!==e)return t;if(!r.P)return Go(e,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var i=r.i===4||r.i===5?r.o=Fu(r.k):r.o,o=i,l=!1;r.i===3&&(o=new Set(i),i.clear(),l=!0),_n(o,function(a,u){return Rd(e,r,i,a,u,n,l)}),Go(e,i,!1),n&&e.u&&gt("Patches").N(r,n,e.u,e.s)}return r.o}function Rd(e,t,n,r,i,o,l){if(sn(i)){var a=Yo(e,i,o&&t&&t.i!==3&&!tr(t.R,r)?o.concat(r):void 0);if(Hh(n,r,a),!sn(a))return;e.m=!1}else l&&n.add(i);if(_t(i)&&!Hu(i)){if(!e.h.D&&e._<1)return;Yo(e,i),t&&t.A.l||Go(e,i)}}function Go(e,t,n){n===void 0&&(n=!1),!e.l&&e.h.D&&e.m&&Bu(t,n)}function ca(e,t){var n=e[oe];return(n?hn(n):e)[t]}function Td(e,t){if(t in e)for(var n=Object.getPrototypeOf(e);n;){var r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=Object.getPrototypeOf(n)}}function jt(e){e.P||(e.P=!0,e.l&&jt(e.l))}function da(e){e.o||(e.o=Fu(e.t))}function gs(e,t,n){var r=Iu(t)?gt("MapSet").F(t,n):Du(t)?gt("MapSet").T(t,n):e.O?function(i,o){var l=Array.isArray(i),a={i:l?1:0,A:o?o.A:hs(),P:!1,I:!1,R:{},l:o,t:i,k:null,o:null,j:null,C:!1},u=a,c=vi;l&&(u=[a],c=Dr);var h=Proxy.revocable(u,c),g=h.revoke,m=h.proxy;return a.k=m,a.j=g,m}(t,n):gt("ES5").J(t,n);return(n?n.A:hs()).p.push(r),r}function Ty(e){return sn(e)||lt(22,e),function t(n){if(!_t(n))return n;var r,i=n[oe],o=xr(n);if(i){if(!i.P&&(i.i<4||!gt("ES5").K(i)))return i.t;i.I=!0,r=jd(n,o),i.I=!1}else r=jd(n,o);return _n(r,function(l,a){i&&zy(i.t,l)===a||Hh(r,l,t(a))}),o===3?new Set(r):r}(e)}function jd(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return Fu(e)}function jy(){function e(o,l){var a=i[o];return a?a.enumerable=l:i[o]=a={configurable:!0,enumerable:l,get:function(){var u=this[oe];return vi.get(u,o)},set:function(u){var c=this[oe];vi.set(c,o,u)}},a}function t(o){for(var l=o.length-1;l>=0;l--){var a=o[l][oe];if(!a.P)switch(a.i){case 5:r(a)&&jt(a);break;case 4:n(a)&&jt(a)}}}function n(o){for(var l=o.t,a=o.k,u=nr(a),c=u.length-1;c>=0;c--){var h=u[c];if(h!==oe){var g=l[h];if(g===void 0&&!tr(l,h))return!0;var m=a[h],S=m&&m[oe];if(S?S.t!==g:!Uh(m,g))return!0}}var x=!!l[oe];return u.length!==nr(l).length+(x?0:1)}function r(o){var l=o.k;if(l.length!==o.t.length)return!0;var a=Object.getOwnPropertyDescriptor(l,l.length-1);if(a&&!a.get)return!0;for(var u=0;u<l.length;u++)if(!l.hasOwnProperty(u))return!0;return!1}var i={};My("ES5",{J:function(o,l){var a=Array.isArray(o),u=function(h,g){if(h){for(var m=Array(g.length),S=0;S<g.length;S++)Object.defineProperty(m,""+S,e(S,!0));return m}var x=Wh(g);delete x[oe];for(var w=nr(x),d=0;d<w.length;d++){var f=w[d];x[f]=e(f,h||!!x[f].enumerable)}return Object.create(Object.getPrototypeOf(g),x)}(a,o),c={i:a?5:4,A:l?l.A:hs(),P:!1,I:!1,R:{},l,t:o,k:u,o:null,g:!1,C:!1};return Object.defineProperty(u,oe,{value:c,writable:!0}),u},S:function(o,l,a){a?sn(l)&&l[oe].A===o&&t(o.p):(o.u&&function u(c){if(c&&typeof c=="object"){var h=c[oe];if(h){var g=h.t,m=h.k,S=h.R,x=h.i;if(x===4)_n(m,function(v){v!==oe&&(g[v]!==void 0||tr(g,v)?S[v]||u(m[v]):(S[v]=!0,jt(h)))}),_n(g,function(v){m[v]!==void 0||tr(m,v)||(S[v]=!1,jt(h))});else if(x===5){if(r(h)&&(jt(h),S.length=!0),m.length<g.length)for(var w=m.length;w<g.length;w++)S[w]=!1;else for(var d=g.length;d<m.length;d++)S[d]=!0;for(var f=Math.min(m.length,g.length),p=0;p<f;p++)m.hasOwnProperty(p)||(S[p]=!0),S[p]===void 0&&u(m[p])}}}}(o.p[0]),t(o.p))},K:function(o){return o.i===4?n(o):r(o)}})}var Ad,gi,Uu=typeof Symbol!="undefined"&&typeof Symbol("x")=="symbol",Ay=typeof Map!="undefined",Iy=typeof Set!="undefined",Id=typeof Proxy!="undefined"&&Proxy.revocable!==void 0&&typeof Reflect!="undefined",Vh=Uu?Symbol.for("immer-nothing"):((Ad={})["immer-nothing"]=!0,Ad),Dd=Uu?Symbol.for("immer-draftable"):"__$immer_draftable",oe=Uu?Symbol.for("immer-state"):"__$immer_state",Dy=""+Object.prototype.constructor,nr=typeof Reflect!="undefined"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,Wh=Object.getOwnPropertyDescriptors||function(e){var t={};return nr(e).forEach(function(n){t[n]=Object.getOwnPropertyDescriptor(e,n)}),t},vs={},vi={get:function(e,t){if(t===oe)return e;var n=hn(e);if(!tr(n,t))return function(i,o,l){var a,u=Td(o,l);return u?"value"in u?u.value:(a=u.get)===null||a===void 0?void 0:a.call(i.k):void 0}(e,n,t);var r=n[t];return e.I||!_t(r)?r:r===ca(e.t,t)?(da(e),e.o[t]=gs(e.A.h,r,e)):r},has:function(e,t){return t in hn(e)},ownKeys:function(e){return Reflect.ownKeys(hn(e))},set:function(e,t,n){var r=Td(hn(e),t);if(r!=null&&r.set)return r.set.call(e.k,n),!0;if(!e.P){var i=ca(hn(e),t),o=i==null?void 0:i[oe];if(o&&o.t===n)return e.o[t]=n,e.R[t]=!1,!0;if(Uh(n,i)&&(n!==void 0||tr(e.t,t)))return!0;da(e),jt(e)}return e.o[t]===n&&(n!==void 0||t in e.o)||Number.isNaN(n)&&Number.isNaN(e.o[t])||(e.o[t]=n,e.R[t]=!0),!0},deleteProperty:function(e,t){return ca(e.t,t)!==void 0||t in e.t?(e.R[t]=!1,da(e),jt(e)):delete e.R[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var n=hn(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{writable:!0,configurable:e.i!==1||t!=="length",enumerable:r.enumerable,value:n[t]}},defineProperty:function(){lt(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){lt(12)}},Dr={};_n(vi,function(e,t){Dr[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}}),Dr.deleteProperty=function(e,t){return Dr.set.call(this,e,t,void 0)},Dr.set=function(e,t,n){return vi.set.call(this,e[0],t,n,e[0])};var Fy=function(){function e(n){var r=this;this.O=Id,this.D=!0,this.produce=function(i,o,l){if(typeof i=="function"&&typeof o!="function"){var a=o;o=i;var u=r;return function(w){var d=this;w===void 0&&(w=a);for(var f=arguments.length,p=Array(f>1?f-1:0),v=1;v<f;v++)p[v-1]=arguments[v];return u.produce(w,function(b){var P;return(P=o).call.apply(P,[d,b].concat(p))})}}var c;if(typeof o!="function"&&lt(6),l!==void 0&&typeof l!="function"&&lt(7),_t(i)){var h=Md(r),g=gs(r,i,void 0),m=!0;try{c=o(g),m=!1}finally{m?Xo(h):ms(h)}return typeof Promise!="undefined"&&c instanceof Promise?c.then(function(w){return sa(h,l),ua(w,h)},function(w){throw Xo(h),w}):(sa(h,l),ua(c,h))}if(!i||typeof i!="object"){if((c=o(i))===void 0&&(c=i),c===Vh&&(c=void 0),r.D&&Bu(c,!0),l){var S=[],x=[];gt("Patches").M(i,c,S,x),l(S,x)}return c}lt(21,i)},this.produceWithPatches=function(i,o){if(typeof i=="function")return function(c){for(var h=arguments.length,g=Array(h>1?h-1:0),m=1;m<h;m++)g[m-1]=arguments[m];return r.produceWithPatches(c,function(S){return i.apply(void 0,[S].concat(g))})};var l,a,u=r.produce(i,o,function(c,h){l=c,a=h});return typeof Promise!="undefined"&&u instanceof Promise?u.then(function(c){return[c,l,a]}):[u,l,a]},typeof(n==null?void 0:n.useProxies)=="boolean"&&this.setUseProxies(n.useProxies),typeof(n==null?void 0:n.autoFreeze)=="boolean"&&this.setAutoFreeze(n.autoFreeze)}var t=e.prototype;return t.createDraft=function(n){_t(n)||lt(8),sn(n)&&(n=Ty(n));var r=Md(this),i=gs(this,n,void 0);return i[oe].C=!0,ms(r),i},t.finishDraft=function(n,r){var i=n&&n[oe],o=i.A;return sa(o,r),ua(void 0,o)},t.setAutoFreeze=function(n){this.D=n},t.setUseProxies=function(n){n&&!Id&&lt(20),this.O=n},t.applyPatches=function(n,r){var i;for(i=r.length-1;i>=0;i--){var o=r[i];if(o.path.length===0&&o.op==="replace"){n=o.value;break}}i>-1&&(r=r.slice(i+1));var l=gt("Patches").$;return sn(n)?l(n,r):this.produce(n,function(a){return l(a,r)})},e}(),Ye=new Fy,Xh=Ye.produce;Ye.produceWithPatches.bind(Ye);Ye.setAutoFreeze.bind(Ye);Ye.setUseProxies.bind(Ye);Ye.applyPatches.bind(Ye);Ye.createDraft.bind(Ye);Ye.finishDraft.bind(Ye);function yi(e){return yi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},yi(e)}function By(e,t){if(yi(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(yi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Hy(e){var t=By(e,"string");return yi(t)=="symbol"?t:t+""}function Uy(e,t,n){return(t=Hy(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Fd(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Bd(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Fd(Object(n),!0).forEach(function(r){Uy(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Fd(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ze(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var Hd=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),fa=function(){return Math.random().toString(36).substring(7).split("").join(".")},Ko={INIT:"@@redux/INIT"+fa(),REPLACE:"@@redux/REPLACE"+fa(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+fa()}};function Vy(e){if(typeof e!="object"||e===null)return!1;for(var t=e;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function Yh(e,t,n){var r;if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(ze(0));if(typeof t=="function"&&typeof n=="undefined"&&(n=t,t=void 0),typeof n!="undefined"){if(typeof n!="function")throw new Error(ze(1));return n(Yh)(e,t)}if(typeof e!="function")throw new Error(ze(2));var i=e,o=t,l=[],a=l,u=!1;function c(){a===l&&(a=l.slice())}function h(){if(u)throw new Error(ze(3));return o}function g(w){if(typeof w!="function")throw new Error(ze(4));if(u)throw new Error(ze(5));var d=!0;return c(),a.push(w),function(){if(!!d){if(u)throw new Error(ze(6));d=!1,c();var p=a.indexOf(w);a.splice(p,1),l=null}}}function m(w){if(!Vy(w))throw new Error(ze(7));if(typeof w.type=="undefined")throw new Error(ze(8));if(u)throw new Error(ze(9));try{u=!0,o=i(o,w)}finally{u=!1}for(var d=l=a,f=0;f<d.length;f++){var p=d[f];p()}return w}function S(w){if(typeof w!="function")throw new Error(ze(10));i=w,m({type:Ko.REPLACE})}function x(){var w,d=g;return w={subscribe:function(p){if(typeof p!="object"||p===null)throw new Error(ze(11));function v(){p.next&&p.next(h())}v();var b=d(v);return{unsubscribe:b}}},w[Hd]=function(){return this},w}return m({type:Ko.INIT}),r={dispatch:m,subscribe:g,getState:h,replaceReducer:S},r[Hd]=x,r}function Wy(e){Object.keys(e).forEach(function(t){var n=e[t],r=n(void 0,{type:Ko.INIT});if(typeof r=="undefined")throw new Error(ze(12));if(typeof n(void 0,{type:Ko.PROBE_UNKNOWN_ACTION()})=="undefined")throw new Error(ze(13))})}function Xy(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var i=t[r];typeof e[i]=="function"&&(n[i]=e[i])}var o=Object.keys(n),l;try{Wy(n)}catch(a){l=a}return function(u,c){if(u===void 0&&(u={}),l)throw l;for(var h=!1,g={},m=0;m<o.length;m++){var S=o[m],x=n[S],w=u[S],d=x(w,c);if(typeof d=="undefined")throw c&&c.type,new Error(ze(14));g[S]=d,h=h||d!==w}return h=h||o.length!==Object.keys(u).length,h?g:u}}function Qo(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.length===0?function(r){return r}:t.length===1?t[0]:t.reduce(function(r,i){return function(){return r(i.apply(void 0,arguments))}})}function Yy(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return function(){var i=r.apply(void 0,arguments),o=function(){throw new Error(ze(15))},l={getState:i.getState,dispatch:function(){return o.apply(void 0,arguments)}},a=t.map(function(u){return u(l)});return o=Qo.apply(void 0,a)(i.dispatch),Bd(Bd({},i),{},{dispatch:o})}}}function Gh(e){var t=function(r){var i=r.dispatch,o=r.getState;return function(l){return function(a){return typeof a=="function"?a(i,o,e):l(a)}}};return t}var Kh=Gh();Kh.withExtraArgument=Gh;var Ud=Kh,Qh=globalThis&&globalThis.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])},e(t,n)};return function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),Gy=globalThis&&globalThis.__generator||function(e,t){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,l;return l={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(l[Symbol.iterator]=function(){return this}),l;function a(c){return function(h){return u([c,h])}}function u(c){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(o=c[0]&2?i.return:c[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,c[1])).done)return o;switch(i=0,o&&(c=[c[0]&2,o.value]),c[0]){case 0:case 1:o=c;break;case 4:return n.label++,{value:c[1],done:!1};case 5:n.label++,i=c[1],c=[0];continue;case 7:c=n.ops.pop(),n.trys.pop();continue;default:if(o=n.trys,!(o=o.length>0&&o[o.length-1])&&(c[0]===6||c[0]===2)){n=0;continue}if(c[0]===3&&(!o||c[1]>o[0]&&c[1]<o[3])){n.label=c[1];break}if(c[0]===6&&n.label<o[1]){n.label=o[1],o=c;break}if(o&&n.label<o[2]){n.label=o[2],n.ops.push(c);break}o[2]&&n.ops.pop(),n.trys.pop();continue}c=t.call(e,n)}catch(h){c=[6,h],i=0}finally{r=o=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}},cr=globalThis&&globalThis.__spreadArray||function(e,t){for(var n=0,r=t.length,i=e.length;n<r;n++,i++)e[i]=t[n];return e},Ky=Object.defineProperty,Qy=Object.defineProperties,Jy=Object.getOwnPropertyDescriptors,Vd=Object.getOwnPropertySymbols,Zy=Object.prototype.hasOwnProperty,qy=Object.prototype.propertyIsEnumerable,Wd=function(e,t,n){return t in e?Ky(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},qt=function(e,t){for(var n in t||(t={}))Zy.call(t,n)&&Wd(e,n,t[n]);if(Vd)for(var r=0,i=Vd(t);r<i.length;r++){var n=i[r];qy.call(t,n)&&Wd(e,n,t[n])}return e},pa=function(e,t){return Qy(e,Jy(t))},ex=function(e,t,n){return new Promise(function(r,i){var o=function(u){try{a(n.next(u))}catch(c){i(c)}},l=function(u){try{a(n.throw(u))}catch(c){i(c)}},a=function(u){return u.done?r(u.value):Promise.resolve(u.value).then(o,l)};a((n=n.apply(e,t)).next())})},tx=typeof window!="undefined"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Qo:Qo.apply(null,arguments)};function nx(e){if(typeof e!="object"||e===null)return!1;var t=Object.getPrototypeOf(e);if(t===null)return!0;for(var n=t;Object.getPrototypeOf(n)!==null;)n=Object.getPrototypeOf(n);return t===n}function en(e,t){function n(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];if(t){var o=t.apply(void 0,r);if(!o)throw new Error("prepareAction did not return an object");return qt(qt({type:e,payload:o.payload},"meta"in o&&{meta:o.meta}),"error"in o&&{error:o.error})}return{type:e,payload:r[0]}}return n.toString=function(){return""+e},n.type=e,n.match=function(r){return r.type===e},n}var rx=function(e){Qh(t,e);function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=e.apply(this,n)||this;return Object.setPrototypeOf(i,t.prototype),i}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(t.bind.apply(t,cr([void 0],n[0].concat(this)))):new(t.bind.apply(t,cr([void 0],n.concat(this))))},t}(Array),ix=function(e){Qh(t,e);function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=e.apply(this,n)||this;return Object.setPrototypeOf(i,t.prototype),i}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(t.bind.apply(t,cr([void 0],n[0].concat(this)))):new(t.bind.apply(t,cr([void 0],n.concat(this))))},t}(Array);function ys(e){return _t(e)?Xh(e,function(){}):e}function ox(e){return typeof e=="boolean"}function lx(){return function(t){return ax(t)}}function ax(e){e===void 0&&(e={});var t=e.thunk,n=t===void 0?!0:t;e.immutableCheck,e.serializableCheck,e.actionCreatorCheck;var r=new rx;return n&&(ox(n)?r.push(Ud):r.push(Ud.withExtraArgument(n.extraArgument))),r}var sx=!0;function ux(e){var t=lx(),n=e||{},r=n.reducer,i=r===void 0?void 0:r,o=n.middleware,l=o===void 0?t():o,a=n.devTools,u=a===void 0?!0:a,c=n.preloadedState,h=c===void 0?void 0:c,g=n.enhancers,m=g===void 0?void 0:g,S;if(typeof i=="function")S=i;else if(nx(i))S=Xy(i);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var x=l;typeof x=="function"&&(x=x(t));var w=Yy.apply(void 0,x),d=Qo;u&&(d=tx(qt({trace:!sx},typeof u=="object"&&u)));var f=new ix(w),p=f;Array.isArray(m)?p=cr([w],m):typeof m=="function"&&(p=m(f));var v=d.apply(void 0,p);return Yh(S,h,v)}function Jh(e){var t={},n=[],r,i={addCase:function(o,l){var a=typeof o=="string"?o:o.type;if(!a)throw new Error("`builder.addCase` cannot be called with an empty action type");if(a in t)throw new Error("`builder.addCase` cannot be called with two reducers for the same action type");return t[a]=l,i},addMatcher:function(o,l){return n.push({matcher:o,reducer:l}),i},addDefaultCase:function(o){return r=o,i}};return e(i),[t,n,r]}function cx(e){return typeof e=="function"}function dx(e,t,n,r){n===void 0&&(n=[]);var i=typeof t=="function"?Jh(t):[t,n,r],o=i[0],l=i[1],a=i[2],u;if(cx(e))u=function(){return ys(e())};else{var c=ys(e);u=function(){return c}}function h(g,m){g===void 0&&(g=u());var S=cr([o[m.type]],l.filter(function(x){var w=x.matcher;return w(m)}).map(function(x){var w=x.reducer;return w}));return S.filter(function(x){return!!x}).length===0&&(S=[a]),S.reduce(function(x,w){if(w)if(sn(x)){var d=x,f=w(d,m);return f===void 0?x:f}else{if(_t(x))return Xh(x,function(p){return w(p,m)});var f=w(x,m);if(f===void 0){if(x===null)return x;throw Error("A case reducer on a non-draftable value must not return undefined")}return f}return x},g)}return h.getInitialState=u,h}function fx(e,t){return e+"/"+t}function Mn(e){var t=e.name;if(!t)throw new Error("`name` is a required option for createSlice");var n=typeof e.initialState=="function"?e.initialState:ys(e.initialState),r=e.reducers||{},i=Object.keys(r),o={},l={},a={};i.forEach(function(h){var g=r[h],m=fx(t,h),S,x;"reducer"in g?(S=g.reducer,x=g.prepare):S=g,o[h]=S,l[m]=S,a[h]=x?en(m,x):en(m)});function u(){var h=typeof e.extraReducers=="function"?Jh(e.extraReducers):[e.extraReducers],g=h[0],m=g===void 0?{}:g,S=h[1],x=S===void 0?[]:S,w=h[2],d=w===void 0?void 0:w,f=qt(qt({},m),l);return dx(n,function(p){for(var v in f)p.addCase(v,f[v]);for(var b=0,P=x;b<P.length;b++){var _=P[b];p.addMatcher(_.matcher,_.reducer)}d&&p.addDefaultCase(d)})}var c;return{name:t,reducer:function(h,g){return c||(c=u()),c(h,g)},actions:a,caseReducers:o,getInitialState:function(){return c||(c=u()),c.getInitialState()}}}var px="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",hx=function(e){e===void 0&&(e=21);for(var t="",n=e;n--;)t+=px[Math.random()*64|0];return t},mx=["name","message","stack","code"],ha=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),Xd=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),gx=function(e){if(typeof e=="object"&&e!==null){for(var t={},n=0,r=mx;n<r.length;n++){var i=r[n];typeof e[i]=="string"&&(t[i]=e[i])}return t}return{message:String(e)}};(function(){function e(t,n,r){var i=en(t+"/fulfilled",function(c,h,g,m){return{payload:c,meta:pa(qt({},m||{}),{arg:g,requestId:h,requestStatus:"fulfilled"})}}),o=en(t+"/pending",function(c,h,g){return{payload:void 0,meta:pa(qt({},g||{}),{arg:h,requestId:c,requestStatus:"pending"})}}),l=en(t+"/rejected",function(c,h,g,m,S){return{payload:m,error:(r&&r.serializeError||gx)(c||"Rejected"),meta:pa(qt({},S||{}),{arg:g,requestId:h,rejectedWithValue:!!m,requestStatus:"rejected",aborted:(c==null?void 0:c.name)==="AbortError",condition:(c==null?void 0:c.name)==="ConditionError"})}}),a=typeof AbortController!="undefined"?AbortController:function(){function c(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return c.prototype.abort=function(){},c}();function u(c){return function(h,g,m){var S=r!=null&&r.idGenerator?r.idGenerator(c):hx(),x=new a,w;function d(p){w=p,x.abort()}var f=function(){return ex(this,null,function(){var p,v,b,P,_,T,j;return Gy(this,function(M){switch(M.label){case 0:return M.trys.push([0,4,,5]),P=(p=r==null?void 0:r.condition)==null?void 0:p.call(r,c,{getState:g,extra:m}),yx(P)?[4,P]:[3,2];case 1:P=M.sent(),M.label=2;case 2:if(P===!1||x.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return _=new Promise(function(B,ce){return x.signal.addEventListener("abort",function(){return ce({name:"AbortError",message:w||"Aborted"})})}),h(o(S,c,(v=r==null?void 0:r.getPendingMeta)==null?void 0:v.call(r,{requestId:S,arg:c},{getState:g,extra:m}))),[4,Promise.race([_,Promise.resolve(n(c,{dispatch:h,getState:g,extra:m,requestId:S,signal:x.signal,abort:d,rejectWithValue:function(B,ce){return new ha(B,ce)},fulfillWithValue:function(B,ce){return new Xd(B,ce)}})).then(function(B){if(B instanceof ha)throw B;return B instanceof Xd?i(B.payload,S,c,B.meta):i(B,S,c)})])];case 3:return b=M.sent(),[3,5];case 4:return T=M.sent(),b=T instanceof ha?l(null,S,c,T.payload,T.meta):l(T,S,c),[3,5];case 5:return j=r&&!r.dispatchConditionRejection&&l.match(b)&&b.meta.condition,j||h(b),[2,b]}})})}();return Object.assign(f,{abort:d,requestId:S,arg:c,unwrap:function(){return f.then(vx)}})}}return Object.assign(u,{pending:o,rejected:l,fulfilled:i,typePrefix:t})}return e.withTypes=function(){return e},e})();function vx(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function yx(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var Vu="listenerMiddleware";en(Vu+"/add");en(Vu+"/removeAll");en(Vu+"/remove");var Yd;typeof queueMicrotask=="function"&&queueMicrotask.bind(typeof window!="undefined"?window:typeof global!="undefined"?global:globalThis);jy();const Zh=Mn({name:"site",initialState:{darkStatus:!1,sideBarStatus:!0},reducers:{setDarkMode:e=>{e.darkStatus=!e.darkStatus},setSideBarStatus:e=>{e.sideBarStatus=!e.sideBarStatus}}}),{setDarkMode:qh,setSideBarStatus:xx}=Zh.actions;var wx=Zh.reducer;const Gd=({whichStatus:e,changeStatus:t})=>{const[n,r]=C.exports.useState(!1),i=Ru();return s($y,{children:s("div",{className:`button-box ${n?"button-true":""}`,onClick:()=>{!e||(r(!n),e==="online"?t():i(qh()))},children:s("div",{className:"ball"})})})},Sx=()=>{const[e,t]=C.exports.useState(!1),[n,r]=C.exports.useState(!1);return s(hy,{children:y("div",{className:"profile-box",children:[s("div",{className:"profile",onClick:()=>t(!e),children:s(Wo,{})}),s("div",{className:`profile-menu ${e?"show-profile-menu":""}`,children:y("div",{className:"menu-box",children:[y("div",{className:"profile-info",children:[s("div",{className:"pp",children:s(Wo,{})}),y("div",{className:"info",children:[s("div",{className:"username",children:"khaleesi"}),y("div",{className:"status",children:[s("div",{className:`status-icon ${n?"online":""}`,children:s(Tu,{})}),s("span",{children:n?"Online":"Offline"})]})]})]}),y("div",{className:"status-button",children:[s("span",{children:"Online"}),s(Gd,{whichStatus:"online",changeStatus:()=>r(!n)})]}),s("hr",{}),s("div",{className:"menu-list",children:y("ul",{children:[s("li",{children:y("div",{className:"item",children:[s(vy,{})," ",s("span",{children:"Channel"})]})}),s("li",{children:y("div",{className:"item",children:[s(Oy,{})," ",s("span",{children:"Video Producer"})]})}),s("li",{children:y("div",{className:"item",children:[s(ay,{})," ",s("span",{children:"Creator Dashboard"})]})}),s("li",{children:y("div",{className:"item",children:[s(my,{})," ",s("span",{children:"Safety"})]})}),s("hr",{}),s("li",{children:y("div",{className:"item",children:[s(Ih,{})," ",s("span",{children:"Friends"})]})}),s("li",{children:y("div",{className:"item",children:[s(Dh,{})," ",s("span",{children:"Subscriptions"})]})}),s("li",{children:y("div",{className:"item",children:[s(sy,{})," ",s("span",{children:"Drops"})]})}),s("li",{children:y("div",{className:"item",children:[s(py,{})," ",s("span",{children:"Wallet"})]})}),s("hr",{}),s("li",{children:y("div",{className:"item",children:[s(ps,{})," ",s("span",{children:"Settings"})]})}),s("li",{children:y("div",{className:"item",children:[s(gy,{style:{transform:"rotate(180deg)"}})," ",s("span",{children:"BetterTTV Settings"})]})}),y("li",{children:[y("div",{className:"item",children:[s(yy,{})," ",s("span",{children:"Language"})]}),s(by,{})]}),y("li",{children:[y("div",{className:"item",children:[s(Bh,{})," ",s("span",{children:"Dark Theme"})]}),s(Gd,{whichStatus:"darkmode"})]}),s("hr",{}),s("li",{children:y("div",{className:"item",children:[s(wy,{style:{transform:"rotate(180deg)"}})," ",s("span",{children:"Log Out"})]})})]})})]})})]})})},bx=D.div`
  .sidebar-box {
    position: fixed;
    left: 0;
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
    width: 250px;

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
`,kx=D.div`
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
`,Cx=D.div`
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
`,Nx=({user:e,imageId:t})=>s(kx,{children:s("li",{children:y("div",{className:"item",children:[s("div",{className:"pp",children:s("img",{src:`https://i.pravatar.cc/5${t}`})}),y("div",{className:"hover-section",children:[y("div",{className:"info",children:[s("div",{className:"username",children:e.username}),s("div",{className:"title",children:e.game})]}),y("div",{className:"live",children:[s("div",{className:"live-icon",children:s(Tu,{})}),s("span",{children:"333"})]})]})]})})}),Kd=()=>{const{users:e}=me(t=>t.user);return s(Cx,{children:y("div",{className:"list",children:[s("ul",{children:e.map((t,n)=>{if(!(n>4))return s(Nx,{user:t,imageId:n},n)})}),s("div",{className:"show-more",children:s("span",{children:"Show More"})})]})})},Ex=D.div`
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
`,em=({placeholder:e})=>{const[t,n]=C.exports.useState(!1);return s(Ex,{children:y("div",{className:`searchbar-box ${t?"focus":""}`,children:[s("div",{className:"search-icon",children:s(Au,{})}),s("input",{type:"text",placeholder:e,className:"input",onFocus:()=>n(!0),onBlur:()=>n(!1)})]})})},_x=({mySize:e})=>{const{sideBarStatus:t}=me(r=>r.site),n=Ru();return s(bx,{children:y("div",{className:`sidebar-box ${t&&e>1199?"side-open":""}`,children:[y("div",{className:"list-title",children:[s("h1",{children:"Followed Channels"}),s("div",{className:"title-icon",onClick:()=>n(xx(!t)),children:s(cy,{})}),s("div",{className:"followed",children:s(dy,{})})]}),s(Kd,{}),y("div",{className:"list-title",children:[s("h1",{children:"Recommended Channels"}),s("div",{className:"camera",children:s(Sy,{})})]}),s(Kd,{}),s("div",{className:"side-search",children:s(em,{placeholder:"Search to Add Friends"})})]})})},Px=({mySize:e})=>{const{pathname:t}=yt();return s(iy,{children:y(nt,{children:[s("div",{className:"header-box",children:y("header",{children:[s("div",{className:"left",children:y("ul",{children:[s("li",{children:s("div",{className:"item",children:s(fe,{to:"/",children:y("div",{className:"logo",children:[s("div",{className:"logo-bg"}),s(uy,{})]})})})}),s("li",{className:t==="/mutual-funds"?"active":"",children:s(fe,{to:"/mutual-funds",className:"link",children:s("div",{className:"item",children:"Mutual funds"})})}),s("li",{className:t==="/following"?"active":"",children:s(fe,{to:"/following",className:"link",children:s("div",{className:"item",children:"Following"})})}),s("li",{className:t==="/"?"active":"",children:s(fe,{to:"/",className:"link",children:s("div",{className:"item",children:"Home"})})}),s("li",{className:t==="/browse"?"active":"",children:s(fe,{to:"/browse",className:"link",children:s("div",{className:"item",children:"Browse"})})}),s("li",{className:t==="/offers"?"active":"",children:s(fe,{to:"/offers",className:"link",children:s("div",{className:"item",children:"Offers"})})}),s("li",{children:s("div",{className:"item",children:s(ju,{className:"item-icon"})})})]})}),s("div",{className:"bottom",children:y("div",{className:"search-bar",children:[s("input",{type:"text",placeholder:"Search"}),s("div",{className:"search-icon",children:s(Au,{})})]})}),s("div",{className:"right",children:s("div",{className:"right-icons",children:s("ul",{children:s("li",{children:s(fy,{})})})})}),s("div",{className:"profile-desktop",children:s(Sx,{})})]})}),s("div",{className:"left-bar",children:s(_x,{mySize:e})})]})})},Ox=D.header`
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
    }

    .logo img {
      height: 45px;
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
    height: 60px;
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
`,$x=D.div`
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
`,zx=({searchStatus:e,setSearchStatus:t})=>s($x,{className:e?"search-visible":"",children:s("div",{className:"search-box",children:y("div",{className:"search-bar",children:[s(Fh,{className:"search-close",onClick:()=>t(!e)}),s("input",{type:"text",placeholder:"Search..."})]})})}),Lx=D.div`
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
`,Mx=D.div`
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
`,Rx=()=>{const{darkStatus:e}=me(r=>r.site),t=Ru();return s(Mx,{children:s("div",{className:"darkMode-container",onClick:r=>(r.preventDefault(),t(qh())),children:s("div",{className:`ball ${e?"dark":""}`})})})},Tx=({handleCloseProfileMenu:e})=>{let t=Ni();return s(Lx,{children:y("div",{className:"profile-menu-container",children:[y("div",{className:"title",children:[s(Fh,{onClick:e}),s("h1",{children:"Account"}),s(ps,{})]}),y("div",{className:"user",children:[s("div",{className:"user__top",children:s("div",{className:"user-box",children:s(Wo,{})})}),s("div",{className:"user__bottom",children:s("div",{className:"username",children:"Arun Suthar"})}),s("span",{className:"user-since",children:"Member since 2020"})]}),s("div",{className:"settings",children:y("ul",{children:[s("li",{children:y("div",{className:"settings__title",children:[y("div",{className:"title-left",children:[s(Dh,{className:"title-icon"}),"Subscriptions"]}),s(aa,{})]})}),s("li",{children:y("div",{className:"settings__title",children:[y("div",{className:"title-left",children:[s(Ih,{className:"title-icon"}),"Friends"]}),s(aa,{})]})}),s("li",{children:s(fe,{to:"/settings",children:y("div",{className:"settings__title",children:[y("div",{className:"title-left",children:[s(ps,{className:"title-icon"}),"Settings"]}),s(aa,{})]})})}),s("li",{children:y("div",{className:"settings__title",children:[y("div",{className:"title-left",children:[s(Bh,{className:"title-icon"}),"Dark Mode"]}),s(Rx,{})]})}),s("li",{children:s("div",{className:"settings__title",onClick:()=>{document.cookie="isLoggedIn="+!1,t("/home")},children:y("div",{className:"title-left",children:[s(_y,{className:"title-icon"}),"Logout"]})})})]})})]})})},jx=()=>{const{pathname:e}=yt(),[t,n]=C.exports.useState(!1),[r,i]=C.exports.useState(!1),o=()=>i(!r);let l="Home";switch(e){case"/mutual-funds":l="Mutual Funds";break;case"/following":l="Mutual Funds";break;case"/":l="Home";break;case"/ipo":l="Intial Public Offers";break;case"/offers":l="Offers";break}return y(Ox,{children:[y("header",{children:[s(fe,{to:"/",children:s("div",{className:"logo",children:s("img",{src:"./images/logo/filtered/savingpulse-mb-transparent.png"})})}),s("h1",{className:"page-name",children:l}),s(zx,{searchStatus:t,setSearchStatus:n}),y("div",{className:"right-buttons",children:[s(Au,{onClick:()=>n(!t)}),"\xA0 \xA0",s("div",{className:`profile-menu-box ${r?"visible":""}`,children:s(Tx,{handleCloseProfileMenu:o})}),s("div",{className:"profile-box",children:s(Wo,{onClick:()=>i(!r)})})]})]}),y("nav",{children:[s(fe,{to:"/mutual-funds",onClick:()=>i(!1),children:y("div",{className:`item ${e==="/mutual-funds"?"active":""}`,children:[s(Ny,{}),s("span",{children:"Funds"})]})}),s(fe,{to:"/following",onClick:()=>i(!1),children:y("div",{className:`item ${e==="/following"?"active":""}`,children:[s(Ey,{}),s("span",{children:"Following"})]})}),s(fe,{to:"/",onClick:()=>i(!1),children:y("div",{className:`item ${e==="/"?"active":""}`,children:[s(ky,{}),s("span",{children:"Home"})]})}),s(fe,{to:"/ipo",onClick:()=>i(!1),children:y("div",{className:`item ${e==="/ipo"?"active":""}`,children:[s(Cy,{className:"item__browse"}),s("span",{children:"IPO"})]})}),s(fe,{to:"/offers",onClick:()=>i(!1),children:y("div",{className:`item ${e==="/offers"?"active":""}`,children:[s(xy,{className:"item__profile"}),s("span",{children:"Offers"})]})})]})]})},Ax=({mySize:e})=>y("div",{className:"header",children:[s(jx,{}),s(Px,{mySize:e})]}),Ix=D.div`
  // Mobile
  .home-mobile {
    background-color: white;
    height: 100vh;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;

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

      .no-account {
        font-size: 1.4rem;
        padding: 2rem;

        a {
          color: #9147ff;
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
`,tm=D.div`
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
        margin: 5rem 1rem;
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
        font-size: 3rem;
        margin-top: 6rem;

        input[type=text] {
          padding: 0 10px;
          border: 2px solid red;
          margin: 0 auto;
          width: 25rem;
          height: 6rem;
          display: -webkit-box;
          display: -webkit-flex;
          display: -ms-flexbox;
          display: -webkit-box;
          display: -webkit-flex;
          display: -ms-flexbox;
          display: flex;
          font-size: 3rem;
          text-align: center;
          letter-spacing: 5px;
        }
      }
    }
    .controls .next {
      margin: 6px;
    }
    .controls button {
      display: flex;
      justify-content: center;
      text-align: center;
      /* margin: 6px auto; */
      font-size: 2rem;
      padding: 2rem;
      background: green;
      width: 100%;
      text-align: center;
      color: white;
      border-radius: 10px;
    }
    .numbers ul {
      display: grid;
      grid-template-columns: 3fr 3fr 3fr;
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
`,Dx=({type:e=""})=>{me(i=>i.offers);const[t,n]=C.exports.useState(!1);let r=Ni();return s(tm,{children:y("div",{className:`login-with ${t?"hide":""}`,children:[s("div",{className:"header",onClick:()=>{n(!0),console.log("Hello")},children:s(Ah,{})}),y("div",{className:"content",children:[s("h2",{children:"Enter 6 digit OTP"}),s("p",{children:"We will send you a confirmation code."}),s("label",{children:s("input",{type:"text",placeholder:"###-###"})})]}),y("div",{className:"controls",children:[s("div",{className:"next",children:s("button",{onClick:()=>{document.cookie="isLoggedIn="+!0,r("/mutual-funds")},children:"Submit"})}),s("div",{className:"numbers",children:y("ul",{children:[s("li",{children:"1"}),s("li",{children:"2"}),s("li",{children:"3"}),s("li",{children:"4"}),s("li",{children:"5"}),s("li",{children:"6"}),s("li",{children:"7"}),s("li",{children:"8"}),s("li",{children:"9"}),s("li",{children:"0"}),s("li",{children:s(jh,{})})]})})]})]})})},Fx=()=>{const[e,t]=C.exports.useState(!1),[n,r]=C.exports.useState(!1);return y(tm,{children:[y("div",{className:`login-with ${e?"hide":""}`,children:[s("div",{className:"header",onClick:()=>t(!0),children:s(Ah,{})}),y("div",{className:"content",children:[s("h2",{children:"Enter your mobile number"}),s("p",{children:"We will send you a confirmation code."}),y("label",{children:[s("span",{children:"+91"})," ",s("input",{type:"text",placeholder:"8947973174"})]})]}),y("div",{className:"controls",children:[s("div",{className:"next",children:s("button",{onClick:()=>r(!0),children:"Next"})}),s("div",{className:"numbers",children:y("ul",{children:[s("li",{children:"1"}),s("li",{children:"2"}),s("li",{children:"3"}),s("li",{children:"4"}),s("li",{children:"5"}),s("li",{children:"6"}),s("li",{children:"7"}),s("li",{children:"8"}),s("li",{children:"9"}),s("li",{children:"0"}),s("li",{children:s(jh,{})})]})})]})]}),n?s(Dx,{}):null]})},Bx=D.div`
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
`,Hx=({type:e=""})=>{const{offers:t}=me(n=>n.offers);return s(Bx,{children:t.map((n,r)=>{if(n.type===e)return y("div",{className:`offer-box offer-${n.id}`,children:[y("div",{className:"left-side",children:[s("div",{className:"picture",children:s("img",{src:n.image,alt:""})}),s("h2",{className:"name",children:n.name})]}),s("div",{className:"right-side",children:y("ul",{className:"action-buttons",children:[s("li",{children:"View Details"}),s("li",{children:"Open Account"})]})})]},n.id)})})},Ux=()=>{const[e,t]=C.exports.useState(!1),[n,r]=C.exports.useState(!1);return s(nt,{children:y(Ix,{children:[y("div",{className:`home-mobile ${e?"hide1":""}`,children:[s("img",{src:"./images/logo/savingpulse-logos_transparent.png",alt:""}),y("div",{className:"login-container",children:[s("div",{className:"login-otp",onClick:()=>t(!0),children:"Sign in with OTP"}),s("div",{className:"login-google",onClick:()=>r(!0),children:"Sign in with google"}),y("div",{className:"no-account",children:["Don't have an account? ",s(fe,{to:"/signup",children:"Signup"})]})]})]}),e?s(Fx,{}):s(Hx,{})]})})},Vx=D.div`
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
`,Wx=D.div`
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
      .divider{
        height: 5.5rem;
        width: 1px;
        padding: 1px 0px;
        background-color: ${e=>e.theme.border};
      }
    }
  }
`,Zi=({ipo:e})=>{var t,n,r;return s(Wx,{children:y("div",{className:"ipo-box",children:[y("div",{className:"header",children:[s("div",{className:"picture",children:s("img",{src:e.image,alt:""})}),y("div",{children:[s("h2",{className:"name",children:e.name}),y("p",{className:"offer",children:["Offer date: ",(t=e==null?void 0:e.date)==null?void 0:t.start," - ",(n=e==null?void 0:e.date)==null?void 0:n.end]})]})]}),y("div",{className:"actions",children:[y("div",{className:"tags",children:[s("div",{className:"tag",children:e.exchange}),s("div",{className:"tag",children:"Live"})]}),y("div",{className:"action-link",children:[s(fe,{className:"link",to:"",title:"Apply",children:"Apply"}),y(fe,{className:"link",to:"",title:"Check Allotment",children:[s("span",{className:"hide-mb1",children:"Check "}),"Allotment"]})]})]}),y("div",{className:"more-details",children:[y("div",{children:[s("span",{children:"Offer Price"}),s("span",{children:(r=e==null?void 0:e.price)==null?void 0:r.offer})]}),s("div",{className:"divider"}),y("div",{children:[s("span",{children:"Lot Size"}),s("span",{children:e.lotSize})]}),s("div",{className:"divider"}),y("div",{children:[s("span",{children:"Subscription"}),y("span",{children:[e.subscriptions," times"]})]})]})]})})},Xx=D.div`
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
`,Yx=()=>s(Xx,{children:s("div",{className:"tags-box",children:y("ul",{children:[s("li",{children:y("div",{className:"item",children:[s("span",{children:"Games"}),s("div",{className:"icon",children:s("img",{src:"https://static.twitchcdn.net/assets/gaming-e9019587744b56b11b43.svg",alt:""})})]})}),s("li",{children:y("div",{className:"item",children:[s("span",{children:"IRL"}),s("div",{className:"icon",children:s("img",{src:"https://static.twitchcdn.net/assets/irl-baa32e8e64a6974282c0.svg",alt:""})})]})}),s("li",{children:y("div",{className:"item",children:[s("span",{children:"Music"}),s("div",{className:"icon",children:s("img",{src:"https://static.twitchcdn.net/assets/music-5fb4595a30d04d991e24.svg",alt:""})})]})}),s("li",{children:y("div",{className:"item",children:[s("span",{children:"Esports"}),s("div",{className:"icon",children:s("img",{src:"https://static.twitchcdn.net/assets/esports-7a078acca57531d11e29.svg",alt:""})})]})}),s("li",{children:y("div",{className:"item",children:[s("span",{children:"Creative"}),s("div",{className:"icon",children:s("img",{src:"https://static.twitchcdn.net/assets/creative-6423fb5fbcf31fadee38.svg",alt:""})})]})})]})})}),Gx=D.div`
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
`,Bt=({title:e,to:t})=>{const{pathname:n}=yt();return s(Gx,{children:s("div",{className:`link-box ${n==t?"active":""}`,children:s(fe,{to:t||"/",className:"link",children:e||"default"})})})},Tn=()=>{const[e,t]=C.exports.useState(!0),{ipos:n}=me(i=>i.ipos),r=i=>{switch(i){case"all":return s("div",{className:"all-ipo",children:n.map((a,u)=>s(Zi,{ipo:a,imageId:u},u))});case"mainline":const o=n.filter(a=>a.type==="mainline");return s("div",{className:"mainline-ipo",children:o.map((a,u)=>s(Zi,{ipo:a,imageId:u},u))});case"sme":const l=n.filter(a=>a.type==="sme");return s("div",{className:"sme-ipo",children:l.map((a,u)=>s(Zi,{ipo:a,imageId:u},u))});default:return s("div",{className:"all-ipo",children:n.map((a,u)=>s(Zi,{ipo:a,imageId:u},u))})}};return s(nt,{children:y(Vx,{children:[s("div",{className:"ipos-mobile",children:y("div",{className:"ipos-box",children:[s("h1",{children:"Browse"}),y("div",{className:"navigation",children:[s("div",{onClick:()=>t("all"),className:`nav-ipo-all ${e=="all"||e===!0?"nav-active":""}`,children:"All"}),s("div",{onClick:()=>t("mainline"),className:`nav-ipo-mainline ${e=="mainline"?"nav-active":""}`,children:"Mainline"}),s("div",{onClick:()=>t("sme"),className:`nav-ipo-sme ${e=="sme"?"nav-active":""}`,children:"SME"})]}),r(e)]})}),s("div",{className:"browse-desktop",children:y("div",{className:"ipo-box",children:[s("h1",{className:"page-title",children:"Browse"}),s(Yx,{}),s("div",{className:"nav",children:y("ul",{children:[s("li",{children:s(Bt,{to:"/browse",title:"Categories"})}),s("li",{children:s(Bt,{to:"/browse/all",title:"Live Channels"})})]})}),y("div",{className:"search-filter",children:[y("div",{className:"search-box",children:[s("span",{children:"Filter by"}),s(em,{placeholder:"Search Tags"})]}),y("div",{className:"filter",children:[s("span",{children:"Sort by"}),y("div",{className:"sort",children:["Recommended For You",s("div",{className:"sort-icon",children:s(Th,{})})]})]})]}),s(Nu,{})]})})]})})};D.div`
  .profile-menu-container {
    // position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 97%;
    overflow-y: scroll;
    background-color: ${e=>e.theme.header};
    padding: 0;
    box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.2);
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    z-index: 10;

    .title {
      position: sticky;
      top: 0;
      left: 0;
      background-color: ${e=>e.theme.header};
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 500;
      padding: 20px 0;
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
`;const Kx=D.div`
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
`,Qx=D.div`
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
`,Jx=({user:e,imageId:t})=>s(Qx,{children:y("div",{className:"channel-box",children:[y("div",{className:"live-screen",children:[s("img",{src:e.liveScreen,alt:""}),y("span",{children:[s(Tu,{className:"live-icon"})," ",e.viewers]})]}),y("div",{className:"live-info",children:[y("div",{className:"user",children:[s("div",{className:"user-pp",children:s("img",{src:`https://i.pravatar.cc/5${t}`,alt:""})}),s("div",{className:"user-name",children:e.username})]}),s("div",{className:"title",children:e.title}),s("div",{className:"game",children:e.game}),s("div",{className:"tags",children:s("div",{className:"tag",children:e.tag})})]})]})}),Zx=()=>{const{users:e}=me(t=>t.user);return s(nt,{children:e.map((t,n)=>s(Jx,{user:t,imageId:n},n))})},qx=D.div`
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
`,e2=({user:e,imageId:t})=>s(qx,{children:y("div",{className:"offline-box",children:[s("div",{className:"left",children:s("div",{className:"pp",children:s("img",{src:`https://i.pravatar.cc/5${t}`,alt:""})})}),y("div",{className:"right",children:[s("div",{className:"username",children:e.username}),s("div",{className:"videos",children:"7 new videos"})]})]})}),t2=()=>{const{users:e}=me(t=>t.user);return s(nt,{children:e.map((t,n)=>{if(n<3)return s(e2,{user:t,imageId:n},n)})})},n2=()=>(yt(),s(nt,{children:y(Kx,{children:[s("div",{className:"follow-mobile",children:y("div",{className:"follow-box",children:[s("h1",{children:"Following"}),s("h3",{children:"Your Live Channels"}),s(Zx,{}),s("h3",{children:"Your Offline Channels"}),s(t2,{})]})}),s("div",{className:"follow-desktop",children:y("div",{className:"follow-box",children:[s("h1",{className:"page-title",children:"Following"}),s("div",{className:"nav",children:y("ul",{children:[s("li",{children:s(Bt,{to:"/following",title:"Overview"})}),s("li",{children:s(Bt,{to:"/following/live",title:"Live"})}),s("li",{children:s(Bt,{to:"/following/videos",title:"Videos"})}),s("li",{children:s(Bt,{to:"/following/categories",title:"Categories"})})]})}),s("div",{className:"page",children:s(Nu,{})})]})})]})})),r2=D.div`
  .amc-mobile {
    display: none;

    .amc-box {
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
`,i2=D.div`
  .amc-container {
    display: flex;
    align-items: center;
    padding: 10px;
    box-sizing: border-box;
    border-bottom: 1px solid #e0e0e0;
    border-radius: 8px;
    color: ${e=>e.theme.textColor};
    background-color: ${e=>e.theme.header};
  }

  .amc-image img {
    width: 60px;
    height: 60px;
    border-radius: 20%;
    object-fit: cover;
  }

  .amc-info {
    flex-grow: 1;
    margin-left: 15px;
  }

  .amc-info .name {
    font-size: 14px;
    font-weight: 600;
    color: ${e=>e.theme.textColor};

  }

  .amc-info .description {
    font-size: 12px;
    color: #757575;
    margin-top: 4px;
  }
  .amc-return div {
    font-size: 12px;
    font-weight: 700;
    color: #757575;
  }
`,nm=({amc:e,activeFilter:t})=>{const n=()=>e.return[t]?e.return[t]+"%":"NA";return s(i2,{children:y("div",{className:"amc-container",children:[s("div",{className:"amc-image",children:s("img",{src:e.image,alt:""})}),y("div",{className:"amc-info",children:[s("div",{className:"name",children:e.name}),y("div",{className:"description",children:[e.category," - ",e.categoryType," - ",e.risk]})]}),s("div",{className:"amc-return",children:s("div",{className:"1",children:n()})})]})})},o2=D.div`

  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  margin-top: 10px;

  .filter-button {
    padding: 5px 10px;
    cursor: pointer;
    transition: background-color 0.3s;
    border-radius: 5px;
    font-size: 13px;
    color: ${e=>e.theme.textColor};
    background-color: ${e=>e.theme.header};
    cursor: pointer;

  }
`,rm=({activeFilter:e,onFilterChange:t})=>{const[n,r]=C.exports.useState(1),i=o=>{t(o),r(o==3?1:o+1)};return y(o2,{children:[s("div",{className:"filter-modal",children:s("button",{className:"filter-button",onClick:()=>i(1),children:"Filter / Sort"})}),y("div",{className:"year-filters",children:[n===1&&s("button",{className:"filter-button",onClick:()=>i(1),children:"< > 1Y Returns"}),n===2&&s("button",{className:"filter-button",onClick:()=>i(2),children:"< > 3Y Returns"}),n===3&&s("button",{className:"filter-button",onClick:()=>i(0),children:"< > 5Y Returns"})]})]})},im=()=>{const{amcs:e}=me(i=>i.amcs),t=[...e,...e,...e],[n,r]=C.exports.useState(0);return s(nt,{children:s(r2,{children:s("div",{className:"amc-mobile",children:y("div",{className:"amc-box",children:[s("h2",{children:"All Mutual Funds"}),s(rm,{activeFilter:n,onFilterChange:r}),t.map((i,o)=>s(nm,{amc:i,activeFilter:n},o))]})})})})},l2=D.div`
  .amc-container {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 15px 15px 25px 15px;
    min-width: 300px;
    box-sizing: border-box;
    border: 1px solid ${e=>e.theme.border} ;
    border-radius: 8px;
    color: ${e=>e.theme.textColor};
    background-color: ${e=>e.theme.header};
  }

  .amc-image {
    margin-right: auto;
    
    img {
      width: 40px;
      height: 40px;
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
      font-weight: 600;
      
      .name {
        font-size: 12px;
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
    font-weight: 600;
    color: #757575;
    
    .total-return{
      font-weight: 700;
      font-size: 12px;
    }
  }

`,a2=({amc:e})=>s(l2,{children:y("div",{className:"amc-container",children:[s("div",{className:"amc-image",children:s("img",{src:e.image,alt:""})}),y("div",{className:"amc-details",children:[y("div",{className:"amc-content",children:[s("div",{className:"name",children:e.name}),y("div",{className:"description",children:[e.category,"  ",e.categoryType," Cap  - ",s(Py,{})," ",e.rating]})]}),y("div",{className:"return",children:[y("div",{className:"total-return",children:[e.return[0],"%"]}),s("div",{children:"3Y"})]})]})]},e.name)}),s2=D.div`
  border-bottom: 1px solid #ebe7e7;
  padding-bottom: 10px;
  overflow-y: hidden;

  .explore-box {
    padding: 2rem 1rem 0;
    background: white;
  }

  h2 {
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

  .popular-content {
    display: flex;
    overflow: auto;
    gap: 20px;
    margin-top: 10px;
  }

  .popular-content::-webkit-scrollbar {
    display: none;
  }

  .collection-container{
    display : flex; 
    margin-top: 15px;
    flex-wrap: wrap;

    .collection-content{
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 10px;
      margin-bottom: 10px;
      align-items: center;
      width: 33.33%; 
      height: 33.33%;
      box-sizing: border-box;
      .name{
        font-size: 10px;
      }
    }
  }
`,om=()=>{const{amcs:e}=me(o=>o.amcs),t=[...e,...e,...e,...e],[n,r]=C.exports.useState(0),{collections:i}=me(o=>o.amcCollection);return s(s2,{children:y("div",{className:"explore-box",children:[y("div",{className:"popular division",children:[y("div",{className:"popular-funds",children:[s("h2",{children:"Popular Funds"}),s(fe,{className:"link",to:"/all-mutual-funds",title:"All Mutual Funds",children:"All Mutual Funds"})]}),s("div",{className:"popular-content",children:e.map((o,l)=>s(fe,{className:"link",to:"",title:o.name,children:s(a2,{amc:o},l)}))})]}),y("div",{className:"collection division",children:[s("div",{className:"popular-funds",children:s("h2",{children:"Collections"})}),s("div",{className:"collection-container",children:i.map((o,l)=>y("div",{className:"collection-content",children:[s("div",{className:"",children:s("img",{src:"https://storage.googleapis.com/groww-assets/mf-assets/web/collection/light/high_returns.svg",alt:""})}),s("div",{className:"name",children:s("div",{children:o.name})})]},l))})]}),y("div",{className:"all-mf division",children:[s("div",{className:"popular-funds",children:s("h2",{children:"All Mutual Funds"})}),s(rm,{activeFilter:n,onFilterChange:r}),t.map((o,l)=>s(nm,{amc:o,activeFilter:n},l))]})]})})},Mt=(e,t)=>{var i;let n=Math.abs(e);n=(i=n==null?void 0:n.toFixed(0))==null?void 0:i.replace(/\B(?=(\d{3})+(?!\d))/g,",");let r=n.split(",");if(r.length>1){let o=r[r.length-1];n=r.slice(0,r.length-1).join("").replace(/\B(?=(\d{2})+(?!\d))/g,",")+","+o}return t==="simple"?{paisa:`\u20B9${n}`}:{paisa:e>0?`+ \u20B9${n}`:`- \u20B9${n}`,color:e>0?"#0add8c":"#f00"}},u2=D.div`
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
      padding: 20px;
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
          font-weight: 600;
          font-size: 16px;
        }
        .title {
          color: #757575;
          font-weight: 600;
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
    font-weight: 600;
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
`,lm=()=>{const{amcs:e}=me(l=>l.amcs),t=[...e,...e,...e,...e],[n,r]=C.exports.useState(0),i=6e3,o=-5e3;return s(u2,{children:y("div",{className:"dashaboard-container",children:[s("div",{className:"division section-heading",children:s("h2",{children:"Investments"})}),y("div",{className:"investment-container",children:[y("div",{className:"total-amt",children:[y("div",{className:"amt-section current",children:[y("div",{className:"amt-box",children:[s("div",{className:"title",children:"Current"}),y("div",{className:"amt",style:{color:Mt(i,"simple").color},children:[Mt(i,"simple").paisa," "]})]}),y("div",{className:"return",children:[s("div",{className:"title",children:"Total Returns"}),y("div",{className:"amt",style:{color:Mt(i).color},children:[Mt(i).paisa," "]})]})]}),y("div",{className:"amt-section invested",children:[y("div",{className:"amt-box",children:[s("div",{className:"title",children:"Invested"}),y("div",{className:"amt",style:{color:Mt(o,"simple").color},children:[Mt(o,"simple").paisa," "]})]}),y("div",{className:"return",children:[s("div",{className:"title",children:"1D Returns"}),y("div",{className:"amt",style:{color:Mt(o).color},children:[Mt(o).paisa," "]})]})]})]}),y("div",{className:"xirr-return",children:[y("div",{className:"",children:[s("span",{children:"XIRR"}),"17.23%"]}),s(fe,{to:"",title:"aa",children:"Portfolio analysis"})]})]}),t.map((l,a)=>s(im,{amc:l,activeFilter:n},a))]})})};var am={};function c2(e){if(e&&e.__esModule)return e;var t={};if(e!=null){for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}}return t.default=e,t}var sm=c2,un={};function d2(e){return e&&e.__esModule?e:{default:e}}var f2=d2;function xs(){return um=xs=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},xs.apply(this,arguments)}var um=xs;function p2(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}var h2=p2,m2=h2;function g2(e,t){if(e==null)return{};var n=m2(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(n[r]=e[r]))}return n}var v2=g2;function y2(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var x2=y2;function Qd(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function w2(e,t,n){return t&&Qd(e.prototype,t),n&&Qd(e,n),e}var S2=w2;function rr(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?rr=function(n){return typeof n}:rr=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},rr(e)}function go(e){return typeof Symbol=="function"&&rr(Symbol.iterator)==="symbol"?ws=go=function(n){return rr(n)}:ws=go=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":rr(n)},go(e)}var ws=go;function b2(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var k2=b2,C2=ws,N2=k2;function E2(e,t){return t&&(C2(t)==="object"||typeof t=="function")?t:N2(e)}var _2=E2;function Ss(e){return cm=Ss=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},Ss(e)}var cm=Ss;function bs(e,t){return dm=bs=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},bs(e,t)}var dm=bs,P2=dm;function O2(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&P2(e,t)}var $2=O2,z2=function(){},fm=z2,pm={};function L2(e){return e&&e.__esModule?e:{default:e}}var _l=L2,Pl={},hm=_l;Object.defineProperty(Pl,"__esModule",{value:!0});Pl.default=void 0;var M2=hm(C.exports);hm(fm);var R2=function(t){t.index;var n=t.children;M2.default.Children.count(n)},T2=R2;Pl.default=T2;var Wu={},ji={};Object.defineProperty(ji,"__esModule",{value:!0});ji.default=void 0;var j2={RESISTANCE_COEF:.6,UNCERTAINTY_THRESHOLD:3};ji.default=j2;var mm=_l;Object.defineProperty(Wu,"__esModule",{value:!0});Wu.default=I2;var A2=mm(C.exports),Jd=mm(ji);function I2(e){var t=e.children,n=e.startIndex,r=e.startX,i=e.pageX,o=e.viewLength,l=e.resistance,a=A2.default.Children.count(t)-1,u=n+(r-i)/o,c;return l?u<0?u=Math.exp(u*Jd.default.RESISTANCE_COEF)-1:u>a&&(u=a+1-Math.exp((a-u)*Jd.default.RESISTANCE_COEF)):u<0?(u=0,c=(u-n)*o+i):u>a&&(u=a,c=(u-n)*o+i),{index:u,startX:c}}var Ol={},D2=_l;Object.defineProperty(Ol,"__esModule",{value:!0});Ol.default=void 0;var Zd=D2(C.exports),F2=function(t,n){var r=!1,i=function(h){return h?h.key:"empty"};if(t.children.length&&n.children.length){var o=Zd.default.Children.map(t.children,i),l=o[t.index];if(l!=null){var a=Zd.default.Children.map(n.children,i),u=a[n.index];l===u&&(r=!0)}}return r},B2=F2;Ol.default=B2;var $l={};Object.defineProperty($l,"__esModule",{value:!0});$l.default=void 0;function H2(e,t){var n=e%t;return n<0?n+t:n}var U2=H2;$l.default=U2;(function(e){var t=_l;Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"checkIndexBounds",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(e,"computeIndex",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(e,"constant",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(e,"getDisplaySameSlide",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(e,"mod",{enumerable:!0,get:function(){return l.default}});var n=t(Pl),r=t(Wu),i=t(ji),o=t(Ol),l=t($l)})(pm);var V2=sm,$t=f2;Object.defineProperty(un,"__esModule",{value:!0});un.getDomTreeShapes=gm;un.findNativeHandler=vm;un.default=un.SwipeableViewsContext=void 0;var qi=$t(um),W2=$t(v2),X2=$t(x2),Y2=$t(S2),G2=$t(_2),K2=$t(cm),Q2=$t($2),wt=V2(C.exports);$t(xh.exports);$t(fm);var eo=pm;function qd(e,t,n,r){return e.addEventListener(t,n,r),{remove:function(){e.removeEventListener(t,n,r)}}}var ef={container:{direction:"ltr",display:"flex",willChange:"transform"},slide:{width:"100%",WebkitFlexShrink:0,flexShrink:0,overflow:"auto"}},ct={root:{x:{overflowX:"hidden"},"x-reverse":{overflowX:"hidden"},y:{overflowY:"hidden"},"y-reverse":{overflowY:"hidden"}},flexDirection:{x:"row","x-reverse":"row-reverse",y:"column","y-reverse":"column-reverse"},transform:{x:function(t){return"translate(".concat(-t,"%, 0)")},"x-reverse":function(t){return"translate(".concat(t,"%, 0)")},y:function(t){return"translate(0, ".concat(-t,"%)")},"y-reverse":function(t){return"translate(0, ".concat(t,"%)")}},length:{x:"width","x-reverse":"width",y:"height","y-reverse":"height"},rotationMatrix:{x:{x:[1,0],y:[0,1]},"x-reverse":{x:[-1,0],y:[0,1]},y:{x:[0,1],y:[1,0]},"y-reverse":{x:[0,-1],y:[1,0]}},scrollPosition:{x:"scrollLeft","x-reverse":"scrollLeft",y:"scrollTop","y-reverse":"scrollTop"},scrollLength:{x:"scrollWidth","x-reverse":"scrollWidth",y:"scrollHeight","y-reverse":"scrollHeight"},clientLength:{x:"clientWidth","x-reverse":"clientWidth",y:"clientHeight","y-reverse":"clientHeight"}};function ma(e,t){var n=t.duration,r=t.easeFunction,i=t.delay;return"".concat(e," ").concat(n," ").concat(r," ").concat(i)}function ga(e,t){var n=ct.rotationMatrix[t];return{pageX:n.x[0]*e.pageX+n.x[1]*e.pageY,pageY:n.y[0]*e.pageX+n.y[1]*e.pageY}}function to(e){return e.touches=[{pageX:e.pageX,pageY:e.pageY}],e}function gm(e,t){for(var n=[];e&&e!==t&&e!==document.body&&!e.hasAttribute("data-swipeable");){var r=window.getComputedStyle(e);r.getPropertyValue("position")==="absolute"||r.getPropertyValue("overflow-x")==="hidden"?n=[]:(e.clientWidth>0&&e.scrollWidth>e.clientWidth||e.clientHeight>0&&e.scrollHeight>e.clientHeight)&&n.push({element:e,scrollWidth:e.scrollWidth,scrollHeight:e.scrollHeight,clientWidth:e.clientWidth,clientHeight:e.clientHeight,scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}),e=e.parentNode}return n}var mn=null;function vm(e){var t=e.domTreeShapes,n=e.pageX,r=e.startX,i=e.axis;return t.some(function(o){var l=n>=r;(i==="x"||i==="y")&&(l=!l);var a=Math.round(o[ct.scrollPosition[i]]),u=a>0,c=a+o[ct.clientLength[i]]<o[ct.scrollLength[i]];return l&&c||!l&&u?(mn=o.element,!0):!1})}var ym=wt.createContext();un.SwipeableViewsContext=ym;var zl=function(e){(0,Q2.default)(t,e);function t(n){var r;return(0,X2.default)(this,t),r=(0,G2.default)(this,(0,K2.default)(t).call(this,n)),r.rootNode=null,r.containerNode=null,r.ignoreNextScrollEvents=!1,r.viewLength=0,r.startX=0,r.lastX=0,r.vx=0,r.startY=0,r.isSwiping=void 0,r.started=!1,r.startIndex=0,r.transitionListener=null,r.touchMoveListener=null,r.activeSlide=null,r.indexCurrent=null,r.firstRenderTimeout=null,r.setRootNode=function(i){r.rootNode=i},r.setContainerNode=function(i){r.containerNode=i},r.setActiveSlide=function(i){r.activeSlide=i,r.updateHeight()},r.handleSwipeStart=function(i){var o=r.props.axis,l=ga(i.touches[0],o);r.viewLength=r.rootNode.getBoundingClientRect()[ct.length[o]],r.startX=l.pageX,r.lastX=l.pageX,r.vx=0,r.startY=l.pageY,r.isSwiping=void 0,r.started=!0;var a=window.getComputedStyle(r.containerNode),u=a.getPropertyValue("-webkit-transform")||a.getPropertyValue("transform");if(u&&u!=="none"){var c=u.split("(")[1].split(")")[0].split(","),h=window.getComputedStyle(r.rootNode),g=ga({pageX:parseInt(c[4],10),pageY:parseInt(c[5],10)},o);r.startIndex=-g.pageX/(r.viewLength-parseInt(h.paddingLeft,10)-parseInt(h.paddingRight,10))||0}},r.handleSwipeMove=function(i){if(!r.started){r.handleTouchStart(i);return}if(!(mn!==null&&mn!==r.rootNode)){var o=r.props,l=o.axis,a=o.children,u=o.ignoreNativeScroll,c=o.onSwitching,h=o.resistance,g=ga(i.touches[0],l);if(r.isSwiping===void 0){var m=Math.abs(g.pageX-r.startX),S=Math.abs(g.pageY-r.startY),x=m>S&&m>eo.constant.UNCERTAINTY_THRESHOLD;if(!h&&(l==="y"||l==="y-reverse")&&(r.indexCurrent===0&&r.startX<g.pageX||r.indexCurrent===wt.Children.count(r.props.children)-1&&r.startX>g.pageX)){r.isSwiping=!1;return}if(m>S&&i.preventDefault(),x===!0||S>eo.constant.UNCERTAINTY_THRESHOLD){r.isSwiping=x,r.startX=g.pageX;return}}if(r.isSwiping===!0){i.preventDefault(),r.vx=r.vx*.5+(g.pageX-r.lastX)*.5,r.lastX=g.pageX;var w=(0,eo.computeIndex)({children:a,resistance:h,pageX:g.pageX,startIndex:r.startIndex,startX:r.startX,viewLength:r.viewLength}),d=w.index,f=w.startX;if(mn===null&&!u){var p=gm(i.target,r.rootNode),v=vm({domTreeShapes:p,startX:r.startX,pageX:g.pageX,axis:l});if(v)return}f?r.startX=f:mn===null&&(mn=r.rootNode),r.setIndexCurrent(d);var b=function(){c&&c(d,"move")};(r.state.displaySameSlide||!r.state.isDragging)&&r.setState({displaySameSlide:!1,isDragging:!0},b),b()}}},r.handleSwipeEnd=function(){if(mn=null,!!r.started&&(r.started=!1,r.isSwiping===!0)){var i=r.state.indexLatest,o=r.indexCurrent,l=i-o,a;Math.abs(r.vx)>r.props.threshold?r.vx>0?a=Math.floor(o):a=Math.ceil(o):Math.abs(l)>r.props.hysteresis?a=l>0?Math.floor(o):Math.ceil(o):a=i;var u=wt.Children.count(r.props.children)-1;a<0?a=0:a>u&&(a=u),r.setIndexCurrent(a),r.setState({indexLatest:a,isDragging:!1},function(){r.props.onSwitching&&r.props.onSwitching(a,"end"),r.props.onChangeIndex&&a!==i&&r.props.onChangeIndex(a,i,{reason:"swipe"}),o===i&&r.handleTransitionEnd()})}},r.handleTouchStart=function(i){r.props.onTouchStart&&r.props.onTouchStart(i),r.handleSwipeStart(i)},r.handleTouchEnd=function(i){r.props.onTouchEnd&&r.props.onTouchEnd(i),r.handleSwipeEnd(i)},r.handleMouseDown=function(i){r.props.onMouseDown&&r.props.onMouseDown(i),i.persist(),r.handleSwipeStart(to(i))},r.handleMouseUp=function(i){r.props.onMouseUp&&r.props.onMouseUp(i),r.handleSwipeEnd(to(i))},r.handleMouseLeave=function(i){r.props.onMouseLeave&&r.props.onMouseLeave(i),r.started&&r.handleSwipeEnd(to(i))},r.handleMouseMove=function(i){r.props.onMouseMove&&r.props.onMouseMove(i),r.started&&r.handleSwipeMove(to(i))},r.handleScroll=function(i){if(r.props.onScroll&&r.props.onScroll(i),i.target===r.rootNode){if(r.ignoreNextScrollEvents){r.ignoreNextScrollEvents=!1;return}var o=r.state.indexLatest,l=Math.ceil(i.target.scrollLeft/i.target.clientWidth)+o;r.ignoreNextScrollEvents=!0,i.target.scrollLeft=0,r.props.onChangeIndex&&l!==o&&r.props.onChangeIndex(l,o,{reason:"focus"})}},r.updateHeight=function(){if(r.activeSlide!==null){var i=r.activeSlide.children[0];i!==void 0&&i.offsetHeight!==void 0&&r.state.heightLatest!==i.offsetHeight&&r.setState({heightLatest:i.offsetHeight})}},r.state={indexLatest:n.index,isDragging:!1,renderOnlyActive:!n.disableLazyLoading,heightLatest:0,displaySameSlide:!0},r.setIndexCurrent(n.index),r}return(0,Y2.default)(t,[{key:"componentDidMount",value:function(){var r=this;this.transitionListener=qd(this.containerNode,"transitionend",function(i){i.target===r.containerNode&&r.handleTransitionEnd()}),this.touchMoveListener=qd(this.rootNode,"touchmove",function(i){r.props.disabled||r.handleSwipeMove(i)},{passive:!1}),this.props.disableLazyLoading||(this.firstRenderTimeout=setTimeout(function(){r.setState({renderOnlyActive:!1})},0)),this.props.action&&this.props.action({updateHeight:this.updateHeight})}},{key:"UNSAFE_componentWillReceiveProps",value:function(r){var i=r.index;typeof i=="number"&&i!==this.props.index&&(this.setIndexCurrent(i),this.setState({displaySameSlide:(0,eo.getDisplaySameSlide)(this.props,r),indexLatest:i}))}},{key:"componentWillUnmount",value:function(){this.transitionListener.remove(),this.touchMoveListener.remove(),clearTimeout(this.firstRenderTimeout)}},{key:"getSwipeableViewsContext",value:function(){var r=this;return{slideUpdateHeight:function(){r.updateHeight()}}}},{key:"setIndexCurrent",value:function(r){if(!this.props.animateTransitions&&this.indexCurrent!==r&&this.handleTransitionEnd(),this.indexCurrent=r,this.containerNode){var i=this.props.axis,o=ct.transform[i](r*100);this.containerNode.style.WebkitTransform=o,this.containerNode.style.transform=o}}},{key:"handleTransitionEnd",value:function(){!this.props.onTransitionEnd||this.state.displaySameSlide||this.state.isDragging||this.props.onTransitionEnd()}},{key:"render",value:function(){var r=this,i=this.props;i.action;var o=i.animateHeight,l=i.animateTransitions,a=i.axis,u=i.children,c=i.containerStyle,h=i.disabled;i.disableLazyLoading;var g=i.enableMouseEvents;i.hysteresis,i.ignoreNativeScroll,i.index,i.onChangeIndex,i.onSwitching,i.onTransitionEnd,i.resistance;var m=i.slideStyle,S=i.slideClassName,x=i.springConfig,w=i.style;i.threshold;var d=(0,W2.default)(i,["action","animateHeight","animateTransitions","axis","children","containerStyle","disabled","disableLazyLoading","enableMouseEvents","hysteresis","ignoreNativeScroll","index","onChangeIndex","onSwitching","onTransitionEnd","resistance","slideStyle","slideClassName","springConfig","style","threshold"]),f=this.state,p=f.displaySameSlide,v=f.heightLatest,b=f.indexLatest,P=f.isDragging,_=f.renderOnlyActive,T=h?{}:{onTouchStart:this.handleTouchStart,onTouchEnd:this.handleTouchEnd},j=!h&&g?{onMouseDown:this.handleMouseDown,onMouseUp:this.handleMouseUp,onMouseLeave:this.handleMouseLeave,onMouseMove:this.handleMouseMove}:{},M=(0,qi.default)({},ef.slide,m),B,ce;if(P||!l||p)B="all 0s ease 0s",ce="all 0s ease 0s";else if(B=ma("transform",x),ce=ma("-webkit-transform",x),v!==0){var Q=", ".concat(ma("height",x));B+=Q,ce+=Q}var W={height:null,WebkitFlexDirection:ct.flexDirection[a],flexDirection:ct.flexDirection[a],WebkitTransition:ce,transition:B};if(!_){var ye=ct.transform[a](this.indexCurrent*100);W.WebkitTransform=ye,W.transform=ye}return o&&(W.height=v),wt.createElement(ym.Provider,{value:this.getSwipeableViewsContext()},wt.createElement("div",(0,qi.default)({ref:this.setRootNode,style:(0,qi.default)({},ct.root[a],w)},d,T,j,{onScroll:this.handleScroll}),wt.createElement("div",{ref:this.setContainerNode,style:(0,qi.default)({},W,ef.container,c),className:"react-swipeable-view-container"},wt.Children.map(u,function(ie,Fe){if(_&&Fe!==b)return null;var xe,ge=!0;return Fe===b&&(ge=!1,o&&(xe=r.setActiveSlide,M.overflowY="hidden")),wt.createElement("div",{ref:xe,style:M,className:S,"aria-hidden":ge,"data-swipeable":"true"},ie)}))))}}]),t}(wt.Component);zl.displayName="ReactSwipableView";zl.propTypes={};zl.defaultProps={animateHeight:!1,animateTransitions:!0,axis:"x",disabled:!1,disableLazyLoading:!1,enableMouseEvents:!1,hysteresis:.6,ignoreNativeScroll:!1,index:0,threshold:5,springConfig:{duration:"0.35s",easeFunction:"cubic-bezier(0.15, 0.3, 0.25, 1)",delay:"0s"},resistance:!1};var J2=zl;un.default=J2;(function(e){var t=sm;Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(e,"SwipeableViewsContext",{enumerable:!0,get:function(){return n.SwipeableViewsContext}});var n=t(un)})(am);var Z2=Sm(am);const q2=D.div`
  padding: 75px 10px;

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
`,Xu=({tabs:e=[]})=>{const[t,n]=C.exports.useState(0);return y(q2,{children:[s("div",{className:"tab-manager",children:s("div",{className:"navigation",children:e.map((r,i)=>s("div",{className:t===i?"nav-active":"",onClick:()=>n(i),children:r.title},i))})}),s(Z2,{index:t,onChangeIndex:n,children:e.map((r,i)=>s("div",{children:r.component},i))})]})},ew=D.div`
`,tf=()=>{const{amcs:e}=me(t=>t.amcs);return[...e,...e,...e,...e],C.exports.useState(0),me(t=>t.amcCollection),s(ew,{children:s(Xu,{tabs:[{name:"explore",title:"Explore",component:s(om,{})},{name:"dashboard",title:"Dashboard",component:s(lm,{})}]})})},tw=D.div`
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
`,nw=D.div`
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
`,rw=({game:e})=>s(tw,{children:y("div",{className:"game-box",children:[s("div",{className:"game-picture",children:s("img",{src:e.image,alt:""})}),y("div",{className:"game-name",children:[s("div",{className:"name",children:e.name}),s("div",{className:"other-icon",children:s(ju,{})})]}),y("div",{className:"game-viewers",children:[e.viewer," viewers"]}),s("div",{className:"tags",children:s("div",{className:"tag",children:"English"})})]})}),xm=({title:e,boldTitle:t})=>{const{games:n}=me(r=>r.category);return s(nw,{children:y("div",{className:"categories-box",children:[y("h1",{children:[s("span",{children:t})," ",e]}),s("div",{className:"list",children:n.map((r,i)=>s(rw,{game:r},i))})]})})},iw=D.div`
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
`,ow=D.div`
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
`,lw=({user:e,imageId:t,video:n})=>s(iw,{children:y("div",{className:"channel-box",children:[y("div",{className:"live-screen",children:[s("img",{src:e.liveScreen,alt:""}),s("div",{className:`live ${n?"invisible":""}`,children:"live"}),s("div",{className:`viewers ${n?"invisible":""}`,children:"333 viewers"}),y("div",{className:`video ${n?"video-visible":""}`,children:[s("div",{className:"video-tag top",children:"11:44"}),s("div",{className:"video-tag bottom-right",children:"4 hours ago"}),s("div",{className:"video-tag bottom",children:"188 views"})]})]}),y("div",{className:"channel-info",children:[y("div",{className:"left",children:[s("div",{className:"pp",children:s("img",{src:`https://i.pravatar.cc/5${t}`,alt:""})}),y("div",{className:"profile-info",children:[s("div",{className:"title",children:e.title}),s("div",{className:"username",children:e.username}),s("div",{className:"game",children:e.game}),y("div",{className:"tags",children:[s("div",{className:"tag",children:"English"}),s("div",{className:"tag",children:"Esports"})]})]})]}),s("div",{className:"right",children:s(ju,{})})]})]})}),Me=({channelTitle:e,video:t})=>{const{users:n}=me(r=>r.user);return s(ow,{children:y("div",{className:"channels-box",children:[e&&s("h1",{children:e}),s("div",{className:"list",children:n.map((r,i)=>{if(i<6)return s(lw,{user:r,imageId:i,video:t},i)})})]})})},va=()=>y(nt,{children:[s(Me,{}),s(Me,{}),s(Me,{}),s(Me,{}),s(Me,{}),s(Me,{}),s(Me,{}),s(Me,{})]}),aw=D.div`
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
`,no=({title:e})=>s(aw,{children:s("div",{className:"show-more",children:e&&y("span",{children:[e,s(Th,{className:"down-icon"})]})})}),sw=()=>y("div",{className:"overview-box",children:[s(Me,{channelTitle:"Live channels"}),s(no,{title:"Show more"}),s(Me,{channelTitle:"Recommended channels"}),s(no,{title:"Show more"}),s(Me,{channelTitle:"Latest videos",video:!0}),s(no,{title:"Show more"}),s(xm,{title:"Live categories"}),s(no,{})]}),uw=()=>s(nt,{children:s(Me,{channelTitle:"Live channels"})}),cw=()=>s(nt,{children:y("div",{className:"overview-page",children:[s(Me,{channelTitle:"Latest videos",video:!0}),s(Me,{video:!0}),s(Me,{video:!0}),s(Me,{video:!0})]})}),dw=()=>s(nt,{children:s(xm,{title:"Live categories"})}),fw=D.div`
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
`,pw=D.div`
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
`,nf=({offer:e})=>s(pw,{children:y("div",{className:"offer-box",children:[s("h2",{className:"offer-name",children:e.name}),s(fe,{to:"/{offer.href}",children:s("div",{className:"offer-picture",children:s("img",{src:e.image,alt:""})})}),s("div",{className:"know-more",children:s("button",{children:"Know More..."})})]})}),hw=()=>{C.exports.useState(!0);const{offers:e}=me(t=>t.offers);return s(nt,{children:s("div",{className:"offers-mobile",children:y(fw,{children:[s(Xu,{tabs:[{name:"broker",title:"Brokers",component:s("div",{className:"offers",children:e.map((t,n)=>{if(t.type!=="advisor")return s(nf,{offer:t,imageId:n},n)})})},{name:"advisor",title:"Advisors",component:s("div",{className:"offers",children:e.map((t,n)=>{if(t.type!=="advisor")return s(nf,{offer:t,imageId:n},n)})})}]}),s("div",{className:"offers-desktop",children:y("div",{className:"offers-box",children:[s("h1",{className:"page-title",children:"Offers"}),s("div",{className:"nav",children:y("ul",{children:[s("li",{children:s(Bt,{to:"/offers/brokers",title:"Brokers"})}),s("li",{children:s(Bt,{to:"/offers/advisors",title:"Advisors"})})]})}),s("div",{className:"page",children:s(Nu,{})})]})})]})})})};D.div`
  /* Home Mobile */
  .home-mobile {
    display: none;

    .home-box {
      padding: 75px 10px;
      background-color: ${e=>e.theme.header};
      color: ${e=>e.theme.textColor};
      position: relative;
      z-index: 3;
      animation: pageAnim 0.3s ease-in-out;

      .categories {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 15px;
        margin: 30px 0;

        .category-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 15px;
          background-color: ${e=>e.theme.color};
          color: #fff;
          border-radius: 5px;
          font-weight: 600;
          cursor: pointer;
          font-size: 1.8rem;

          .category-icon {
            font-size: 24px;
          }
        }
      }
      .home-title {
        font-size: 18px;
        width: 100%;
        padding: 8px 0;
        background-color: ${e=>e.theme.header};
        position: sticky;
        top: 50px;

        span {
          color: ${e=>e.theme.color};
          cursor: pointer;
        }
      }
    }

    @media (max-width: 767px) {
      display: block;
    }
  }

  /* Home Desktop */
  .home-desktop {
    display: none;

    .home-box {
      display: block;
    }

    @media (min-width: 768px) {
      display: block;
    }
  }
`;D.div`
  .channel-box {
    padding: 5px 0;
    user-select: none;
    animation: pageAnim 0.3s ease-in-out;

    .live-screen {
      max-width: 300px;
      width: 100%;
      position: relative;
      z-index: -1;

      span {
        position: absolute;
        left: 10px;
        color: #fff;
        border-radius: 5px;
        font-size: 14px;
        background-color: rgba(0, 0, 0, 0.5);

        &.viewers {
          bottom: 10px;
          padding: 5px;
        }

        &.live {
          top: 10px;
          background-color: red;
          padding: 2px 5px;
          text-transform: uppercase;
        }
      }
    }

    @media (max-width: 767px) {
      .for-browse {
        max-width: 100%;
      }
    }

    .live-info {
      display: flex;
      gap: 10px;
      padding: 5px;

      .pp {
        width: 38px;
        height: 38px;
        border-radius: 999px;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
      }

      .titles {
        color: ${e=>e.theme.textColor};
        font-size: 14px;
        flex: 1;

        .username-box {
          font-size: 15px;
          padding-bottom: 3px;
          display: flex;
          align-items: center;
          justify-content: space-between;

          .username {
            font-weight: 600;
            cursor: pointer;
          }

          .others {
            font-size: 12px;
            cursor: pointer;
            color: ${e=>e.theme.soft};
          }
        }
        .title {
          padding: 3px 0;
        }

        .tag {
          padding: 3px 5px;
          border-radius: 10px;
          margin-top: 5px;
          background-color: ${e=>e.theme.border};
          display: inline-block;
          font-size: 13px;
          cursor: pointer;
        }
      }
    }
  }
`;D.div`
  .channels-box {
    width: 100%;
    margin-bottom: 15px;
    .channels {
      display: grid;
      gap: 10px;
      grid-template-columns: repeat(6, 1fr);
    }
  }

  @media (max-width: 767px) {
    .channels-box {
      overflow-x: scroll;
      -ms-overflow-style: none;
      scrollbar-width: none;

      .channels {
        width: max-content;
      }

      &::-webkit-scrollbar {
        display: none;
      }
    }
  }
`;D.div`
  .game-box {
    padding: 5px 0;
    color: ${e=>e.theme.textColor};
    user-select: none;

    .game-img {
      max-width: 120px;
      width: 100%;
      z-index: -1;

      img {
        z-index: -1;
        user-select: none;
        user-drag: none;
        -webkit-user-drag: none;
        user-select: none;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
      }
    }

    .game-name {
      font-size: 15px;
      font-weight: 600;
      padding: 3px 0;
    }

    .game-viewer {
      display: flex;
      align-items: center;
      gap: 5px;
      font-size: 15px;

      .viewer-icon {
        color: red;
        font-size: 10px;
      }
    }
  }
`;D.div`
  .small-categories-box {
    width: 100%;
    margin-bottom: 15px;
    .small-categories {
      display: grid;
      gap: 10px;
      grid-template-columns: repeat(12, 1fr);
    }
  }

  @media (max-width: 767px) {
    .small-categories-box {
      overflow-x: scroll;
      -ms-overflow-style: none;
      scrollbar-width: none;

      .small-categories {
        width: max-content;
      }

      &::-webkit-scrollbar {
        display: none;
      }
    }
  }
`;D.div`
  display: block;

  .slide {
    display: block;
    padding: 50px 0;
    position: relative;

    .three {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 50px;
      z-index: 3;

      img {
        width: 380px;
        height: 240px;
        cursor: pointer;
        transition: 0.3s;
        filter: blur(1px) brightness(0.7);
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);

        &:hover {
          transform: scale(1.03);
          filter: blur(1px) brightness(1);
        }
      }

      .two {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 100px;
        z-index: 5;

        img {
          width: 450px;
          height: 270px;
        }

        .one {
          position: absolute;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 7;
          box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);

          .img {
            position: relative;
            height: 300px;

            img {
              width: 500px;
              height: 300px;
              transition: 0.3s;
              box-shadow: none;
              filter: none;

              &:hover {
                transform: none;
              }
            }

            .screen-icons {
              position: absolute;
              bottom: 5px;
              width: 100%;
              padding: 0 10px;
              color: #fff;
              font-size: 20px;
              display: flex;
              align-items: center;
              justify-content: space-between;

              .icon-screen {
                margin: 0 5px;
                cursor: pointer;
              }
            }

            .screen-live {
              position: absolute;
              top: 10px;
              left: 10px;

              span {
                background-color: red;
                color: #fff;
                padding: 3px 5px;
                text-transform: uppercase;
                border-radius: 5px;
                font-size: 14px;
              }
            }
          }

          .info {
            width: 200px;
            height: 300px;
            background-color: ${e=>e.theme.headerDesktop};

            .info-top {
              width: 100%;
              padding: 10px;

              .profile {
                display: flex;

                .pp {
                  img {
                    width: 40px;
                    height: 40px;
                    border-radius: 999px;
                    cursor: pointer;
                    filter: none;
                    box-shadow: none;
                  }
                }

                .profile-info {
                  display: block;
                  padding: 0 10px;
                  font-size: 14px;
                  color: ${e=>e.theme.color};

                  .username {
                    font-weight: 600;
                    cursor: pointer;
                  }
                  .game {
                    cursor: pointer;
                    padding: 3px 0;
                  }
                  .viewers {
                    font-size: 13px;
                    color: ${e=>e.theme.textColor};
                  }
                }
              }

              .tags {
                margin-top: 10px;
                display: flex;
                font-size: 13px;
                gap: 5px;

                .tag {
                  padding: 4px 8px;
                  background-color: ${e=>e.theme.hover};
                  border-radius: 10px;
                  font-weight: 500;
                  color: ${e=>e.theme.softDesktop};
                  cursor: pointer;
                }
              }
            }

            .info-bottom {
              padding: 10px;
              font-size: 13px;
              line-height: 1.7;
              color: ${e=>e.theme.textColor};
            }
          }
        }
      }
    }

    /* Slide Arrows */
    .arrow {
      position: absolute;
      top: 150px;
      font-size: 22px;
      cursor: pointer;
      padding: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: 0.3s;
      border-radius: 5px;
      color: ${e=>e.theme.textColor};
      z-index: 6;

      &:hover {
        background-color: ${e=>e.theme.hover};
      }
    }

    .arrow-left {
      left: 20px;
    }

    .arrow-right {
      right: 20px;
    }
    /* Slide Arrows */
  }

  @media (max-width: 1679px) {
    .slide .three {
      img {
        width: 300px;
      }

      .two {
        img {
          width: 400px;
        }
      }
    }
  }
  @media (max-width: 1439px) {
    .slide .three {
      img {
        width: 250px;
      }

      .two {
        img {
          width: 340px;
        }
      }
    }
  }
  @media (max-width: 1279px) {
    .slide .three {
      img {
        width: 0;
      }
    }
  }
  @media (max-width: 1023px) {
    .slide {
      .three {
        .two {
          img {
            width: 0;
          }

          .one {
            .img img {
              width: 460px;
            }

            .info {
              width: 180px;
            }
          }
        }
      }

      .arrow-left {
        left: 5px;
      }

      .arrow-right {
        right: 5px;
      }
    }
  }

  @media (max-width: 833px) {
    .slide {
      .three {
        .two {
          .one {
            .img img {
              width: 420px;
            }
            .info {
              width: 160px;
            }
          }
        }
      }

      .arrow-left {
        left: 0;
      }

      .arrow-right {
        right: 0;
      }
    }
  }
`;const mw=D.div`
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
`,rf=({type:e=""})=>{const{offers:t}=me(n=>n.offers);return s(mw,{children:t.map((n,r)=>{if(n.type===e)return y("div",{className:`offer-box offer-${n.id}`,children:[y("div",{className:"left-side",children:[s("div",{className:"picture",children:s("img",{src:n.image,alt:""})}),s("h2",{className:"name",children:n.name})]}),y("div",{className:"right-side",children:[y("div",{children:[y("ul",{className:"available-options",children:[s("li",{children:"Equity"}),s("li",{children:"Future"}),s("li",{children:"Option"}),s("li",{children:"Commodity"})]}),y("ul",{className:"new-info",children:[s("li",{children:"Account Opening"}),s("li",{children:"Account Maintenance"}),s("li",{children:"Account Maintenance"}),s("li",{children:"Account Maintenance"})]})]}),y("ul",{className:"action-buttons",children:[s("li",{children:"View Details"}),s("li",{children:"Open Account"})]})]})]},n.id)})})},gw=D.div`
`,vw=()=>{const{amcs:e}=me(t=>t.amcs);return[...e,...e,...e,...e],C.exports.useState(0),me(t=>t.amcCollection),s(gw,{children:s(Xu,{tabs:[{name:"explore",title:"Explore",component:s(om,{})},{name:"dashboard",title:"Dashboard",component:s(lm,{})}]})})},yw=()=>{const{darkStatus:e,sideBarStatus:t}=me(a=>a.site),[n,r]=C.exports.useState(window.innerWidth);let i=Ni();const o=document.cookie.split(";").filter(a=>a.indexOf("isLoggedIn=true")>=0);console.log(o.length);let l=s(vw,{});return o.length===0&&(l=s(Ux,{})),C.exports.useEffect(()=>{o.length===0&&(console.log("consider logged out!"),i("/"));const a=()=>r(window.innerWidth);return window.addEventListener("resize",a),()=>window.removeEventListener("resize",a)},[n]),y(Cv,{theme:e?Ov:Pv,children:[s(_v,{}),y("div",{className:"app",children:[o.length!==0?s(Ax,{mySize:n}):"",s("div",{className:`main ${t&&n>1199?"sidebar-open":""}`,children:y(y1,{children:[s(ae,{path:"*",element:s(g1,{to:"/",replace:!0})}),s(ae,{path:"/all-mutual-funds",element:s(im,{})}),s(ae,{path:"/",element:l}),y(ae,{path:"/mutual-funds/",element:s(tf,{}),children:[s(ae,{index:!0,element:s(tf,{})}),s(ae,{path:"dashboard",element:s(va,{})}),s(ae,{path:"SIP",element:s(va,{})}),s(ae,{path:"Watchlist",element:s(va,{})})]}),y(ae,{path:"/following/",element:s(n2,{}),children:[s(ae,{index:!0,element:s(sw,{})}),s(ae,{path:"live",element:s(uw,{})}),s(ae,{path:"videos",element:s(cw,{})}),s(ae,{path:"categories",element:s(dw,{})})]}),y(ae,{path:"/ipo/",element:s(Tn,{}),children:[s(ae,{index:!0,path:"all",element:s(Tn,{})}),s(ae,{path:"mainline",element:s(Tn,{})}),s(ae,{path:"sme",element:s(Tn,{})}),s(ae,{path:"listed",element:s(Tn,{})}),s(ae,{path:"closed",element:s(Tn,{})})]}),y(ae,{path:"/offers/",element:s(hw,{}),children:[s(ae,{index:!0,path:"brokers",element:s(rf,{type:"stock"})}),s(ae,{path:"advisors",element:s(rf,{type:"advisor"})})]})]})})]})]})},xw=()=>{const{pathname:e}=yt();return C.exports.useEffect(()=>{window.scrollTo(0,0)},[e]),null},ww=Mn({name:"user",initialState:{users:[{username:"CosmoKramer",title:"Rapid Chess Championship!",game:"Chess",tag:"Chatting",pp:"https://i.pravatar.cc/",liveScreen:"./images/games/game-chees.jpg",viewers:"17.1K"},{username:"Soprano",title:"Im back",game:"Dota 2",tag:"Turkish",pp:"https://i.pravatar.cc/",liveScreen:"./images/games/game-dota.jpg",viewers:"395"},{username:"Seinfeld",title:"Reduce Ping & Avoid Lags",game:"PUBG",tag:"English",pp:"https://i.pravatar.cc/",liveScreen:"./images/games/game-pubg.jpg",viewers:"5.4K"},{username:"Darlene",title:"FPS soon? OMEGALUL",game:"Counter Strike",tag:"English",pp:"https://i.pravatar.cc/",liveScreen:"./images/games/game-cs.jpg",viewers:"117"},{username:"Cersei",title:"Live Bitcoin Trading Infos 24/7",game:"Crypto",tag:"Chatting",pp:"https://i.pravatar.cc/",liveScreen:"./images/games/game-crypto.jpg",viewers:"88"},{username:"Jacob",title:"LVL 70 - Tracksuit Grind",game:"Escape From Tarkov",tag:"Turkish",pp:"https://i.pravatar.cc/",liveScreen:"./images/games/game-eft.jpg",viewers:"733"},{username:"Skyler",title:"Tourney Run Kollo",game:"Mortal Kombat",tag:"English",pp:"https://i.pravatar.cc/",liveScreen:"./images/games/game-mortal.jpg",viewers:"231"},{username:"Schillinger",title:"Day 12 of the Game of Year ?",game:"Elder Ring",tag:"English",pp:"https://i.pravatar.cc/",liveScreen:"./images/games/game-elder.jpg",viewers:"3.7K"}]}});var Sw=ww.reducer;const bw=Mn({name:"category",initialState:{games:[{name:"Dota 2",image:"./images/categories/game1.jpg",viewer:"63.3k"},{name:"Chess",image:"./images/categories/game2.jpg",viewer:"23.7k"},{name:"PUBG: BATTLEGROUNDS",image:"./images/categories/game3.jpg",viewer:"34.3k"},{name:"Just Chatting",image:"./images/categories/game4.jpg",viewer:"580k"},{name:"Grand Theft Auto V",image:"./images/categories/game5.jpg",viewer:"144k"},{name:"Elder Ring",image:"./images/categories/game6.jpg",viewer:"88k"},{name:"Apex Legends",image:"./images/categories/game7.jpg",viewer:"112.6k"},{name:"Call of Duty: Wardzone",image:"./images/categories/game8.jpg",viewer:"39k"},{name:"Escape from Tarkov",image:"./images/categories/game9.jpg",viewer:"20k"},{name:"FIFA 22",image:"./images/categories/game10.jpg",viewer:"42.2k"},{name:"Fortnite",image:"./images/categories/game11.jpg",viewer:"102k"},{name:"Age of Empires",image:"./images/categories/game12.jpg",viewer:"5.4k"}]}});var kw=bw.reducer;const Cw=Mn({name:"amc",initialState:{amcs:[{name:"Aditya Birla Sun Life PSU Equity Fund",image:"./images/categories/game1.jpg",category:"Equity",categoryType:"Big",risk:"High",rating:5,return:[47.01,88,23]},{name:"Motilal Oswal Midcap Fund",image:"./images/categories/game3.jpg",category:"Equity",categoryType:"Flexi Cap",risk:"Very High",rating:4,return:[47.01,88]},{name:"Nippon India Small Cap Fund",image:"./images/categories/game2.jpg",category:"Equity",categoryType:"Small",risk:"Low",rating:5,return:[47.01,88,23]}]}});var Nw=Cw.reducer;const Ew=Mn({name:"offers",initialState:{offers:[{id:1,name:"Angel Broking",image:"./images/offers/angel-one.png",category:"broker",type:"advisor",href:"/angel-broking"},{id:2,name:"Zerodha",image:"./images/offers/zerodha.png",category:"broker",type:"stock",href:"#"},{id:3,name:"Upstox",image:"./images/offers/upstox.png",category:"broker",type:"advisor",href:"#"},{id:5,name:"Dhan",image:"./images/offers/dhan.png",category:"broker",type:"advisor",href:"#"},{id:6,name:"5 Paisa",image:"./images/offers/5-paisa.png",category:"broker",type:"stock",href:"#"},{id:7,name:"ICICI direct",image:"./images/offers/icici-direct.png",category:"broker",type:"advisor",href:"#"},{id:8,name:"Kotak Securities",image:"./images/offers/kotak-security.png",category:"broker",type:"stock",href:"#"}]}});var _w=Ew.reducer;const Pw=Mn({name:"ipos",initialState:{ipos:[{name:"RNFI Services Limited",image:"./images/ipo/RNFI_Services_logo.jpg",exchange:"NSE",type:"sme",href:"/angel-broking",date:{start:"Jul 22, 2024",end:"Jul 22, 2024",list:"Jul 22, 2024"},price:{offer:"98-105",expectedPremium:"84-90 (80%)"},lotSize:"1200",subscriptions:"221.56"},{name:"SAR Televenture Limited FPO",image:"./images/ipo/SAR_Televentures_logo.png",exchange:"NSE",type:"mainline",href:"/angel-broking",date:{start:"Jul 22, 2024",end:"Jul 22, 2024",list:"Jul 22, 2024"},price:{offer:"200-210",expectedPremium:"7-8 (3.33%)"},lotSize:"500",subscriptions:"7.49"},{name:"V.L.Infraprojects Limited",image:"./images/ipo/Vraj_Iron_And_Steel_logo.png",exchange:"NSE",type:"sme",href:"/angel-broking",date:{start:"Jul 23, 2024",end:"Jul 25, 2024",list:"Jul 22, 2024"},price:{offer:"39-42",expectedPremium:"60-62 (142.86%)"},lotSize:"3000",subscriptions:"633.71"},{name:"VVIP Infratech Limited",image:"./images/ipo/uttsav_cz_gold_logo.jpeg",exchange:"NSE",type:"mainline",href:"/angel-broking",date:{start:"Jul 23, 2024",end:"Jul 25, 2024",list:"Jul 27, 2024"},price:{offer:"91-93",expectedPremium:"115-122 (123.66%)"},lotSize:"1200",subscriptions:"236.92"},{name:"Chetana Education Limited",image:"./images/ipo/Cheviot-company-logo.jpg",exchange:"NSE",type:"mainline",href:"/angel-broking",date:{start:"Jul 23, 2024",end:"Jul 25, 2024",list:"Jul 27, 2024"},price:{offer:"80-85",expectedPremium:"40-43 (47.06%)"},lotSize:"1600",subscriptions:"196.57"},{name:"Manglam Infra and Engineering Limited",image:"./images/ipo/Manglam_Infra_Logo.png",exchange:"NSE",type:"sme",href:"/angel-broking",date:{start:"Jul 23, 2024",end:"Jul 25, 2024",list:"Jul 27, 2024"},price:{offer:"53-56",expectedPremium:"47-50 (83.93%)"},lotSize:"2000",subscriptions:"394.59"},{name:"Aprameya Engineering Limited",image:"./images/ipo/Aprameya_Engineering_logo.jpg",exchange:"NSE",type:"mainline",href:"/angel-broking",date:{start:"Jul 25, 2024",end:"Jul 29, 2024",list:"Jul 27, 2024"},price:{offer:"56-58",expectedPremium:"25-30 (43.1%)"},lotSize:"2000",subscriptions:"5.92"},{name:"Trom Industries Limited",image:"./images/ipo/Trom-Industries-logo.jpg",exchange:"NSE",type:"sme",href:"/angel-broking",date:{start:"Jul 25, 2024",end:"Jul 29, 2024",list:"Jul 27, 2024"},price:{offer:"110-115",expectedPremium:"135-145 (117.39%)"},lotSize:"1200",subscriptions:"34.84"},{name:"Clinitech Laboratory Limited",image:"./images/ipo/Clinitech_lab_logo.jpg",exchange:"BSE",type:"sme",href:"/angel-broking",date:{start:"Jul 25, 2024",end:"Jul 29, 2024",list:"Jul 27, 2024"},price:{offer:"96",expectedPremium:"135-145 (117.39%)"},lotSize:"1200",subscriptions:"6.09 times"}]}});var Ow=Pw.reducer;const $w=Mn({name:"collections",initialState:{collections:[{name:"High Return"},{name:"SIP with 100"},{name:"Tax Saving"},{name:"Large Cap"},{name:"Mid Cap"},{name:"Small Cap"}]}});var zw=$w.reducer,Lw=ux({reducer:{site:wx,user:Sw,category:kw,amcs:Nw,offers:_w,ipos:Ow,amcCollection:zw}});Qp.render(s(Te.StrictMode,{children:s(Hv,{store:Lw,children:y(_1,{children:[s(xw,{}),s(yw,{})]})})}),document.getElementById("root"));
