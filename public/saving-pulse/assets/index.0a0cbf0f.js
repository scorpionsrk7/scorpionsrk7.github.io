function Cm(e,t){return t.forEach(function(r){r&&typeof r!="string"&&!Array.isArray(r)&&Object.keys(r).forEach(function(n){if(n!=="default"&&!(n in e)){var i=Object.getOwnPropertyDescriptor(r,n);Object.defineProperty(e,n,i.get?i:{enumerable:!0,get:function(){return r[n]}})}})}),Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}const Av=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=r(i);fetch(i.href,o)}};Av();function Iv(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function ir(e){if(e.__esModule)return e;var t=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(e).forEach(function(r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})}),t}var k={exports:{}},K={};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var Af=Object.getOwnPropertySymbols,Dv=Object.prototype.hasOwnProperty,Fv=Object.prototype.propertyIsEnumerable;function Bv(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function Wv(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de",Object.getOwnPropertyNames(e)[0]==="5")return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;var n=Object.getOwnPropertyNames(t).map(function(o){return t[o]});if(n.join("")!=="0123456789")return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(o){i[o]=o}),Object.keys(Object.assign({},i)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var _m=Wv()?Object.assign:function(e,t){for(var r,n=Bv(e),i,o=1;o<arguments.length;o++){r=Object(arguments[o]);for(var a in r)Dv.call(r,a)&&(n[a]=r[a]);if(Af){i=Af(r);for(var l=0;l<i.length;l++)Fv.call(r,i[l])&&(n[i[l]]=r[i[l]])}}return n};/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ic=_m,ni=60103,Em=60106;K.Fragment=60107;K.StrictMode=60108;K.Profiler=60114;var $m=60109,Pm=60110,Om=60112;K.Suspense=60113;var Nm=60115,Tm=60116;if(typeof Symbol=="function"&&Symbol.for){var _t=Symbol.for;ni=_t("react.element"),Em=_t("react.portal"),K.Fragment=_t("react.fragment"),K.StrictMode=_t("react.strict_mode"),K.Profiler=_t("react.profiler"),$m=_t("react.provider"),Pm=_t("react.context"),Om=_t("react.forward_ref"),K.Suspense=_t("react.suspense"),Nm=_t("react.memo"),Tm=_t("react.lazy")}var If=typeof Symbol=="function"&&Symbol.iterator;function Uv(e){return e===null||typeof e!="object"?null:(e=If&&e[If]||e["@@iterator"],typeof e=="function"?e:null)}function _o(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Rm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Mm={};function ii(e,t,r){this.props=e,this.context=t,this.refs=Mm,this.updater=r||Rm}ii.prototype.isReactComponent={};ii.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error(_o(85));this.updater.enqueueSetState(this,e,t,"setState")};ii.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Lm(){}Lm.prototype=ii.prototype;function Dc(e,t,r){this.props=e,this.context=t,this.refs=Mm,this.updater=r||Rm}var Fc=Dc.prototype=new Lm;Fc.constructor=Dc;Ic(Fc,ii.prototype);Fc.isPureReactComponent=!0;var Bc={current:null},jm=Object.prototype.hasOwnProperty,zm={key:!0,ref:!0,__self:!0,__source:!0};function Am(e,t,r){var n,i={},o=null,a=null;if(t!=null)for(n in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)jm.call(t,n)&&!zm.hasOwnProperty(n)&&(i[n]=t[n]);var l=arguments.length-2;if(l===1)i.children=r;else if(1<l){for(var s=Array(l),c=0;c<l;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(n in l=e.defaultProps,l)i[n]===void 0&&(i[n]=l[n]);return{$$typeof:ni,type:e,key:o,ref:a,props:i,_owner:Bc.current}}function Hv(e,t){return{$$typeof:ni,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Wc(e){return typeof e=="object"&&e!==null&&e.$$typeof===ni}function Vv(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var Df=/\/+/g;function Os(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Vv(""+e.key):t.toString(36)}function ya(e,t,r,n,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case ni:case Em:a=!0}}if(a)return a=e,i=i(a),e=n===""?"."+Os(a,0):n,Array.isArray(i)?(r="",e!=null&&(r=e.replace(Df,"$&/")+"/"),ya(i,t,r,"",function(c){return c})):i!=null&&(Wc(i)&&(i=Hv(i,r+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(Df,"$&/")+"/")+e)),t.push(i)),1;if(a=0,n=n===""?".":n+":",Array.isArray(e))for(var l=0;l<e.length;l++){o=e[l];var s=n+Os(o,l);a+=ya(o,t,r,s,i)}else if(s=Uv(e),typeof s=="function")for(e=s.call(e),l=0;!(o=e.next()).done;)o=o.value,s=n+Os(o,l++),a+=ya(o,t,r,s,i);else if(o==="object")throw t=""+e,Error(_o(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t));return a}function Qo(e,t,r){if(e==null)return e;var n=[],i=0;return ya(e,n,"","",function(o){return t.call(r,o,i++)}),n}function Kv(e){if(e._status===-1){var t=e._result;t=t(),e._status=0,e._result=t,t.then(function(r){e._status===0&&(r=r.default,e._status=1,e._result=r)},function(r){e._status===0&&(e._status=2,e._result=r)})}if(e._status===1)return e._result;throw e._result}var Im={current:null};function or(){var e=Im.current;if(e===null)throw Error(_o(321));return e}var Xv={ReactCurrentDispatcher:Im,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:Bc,IsSomeRendererActing:{current:!1},assign:Ic};K.Children={map:Qo,forEach:function(e,t,r){Qo(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return Qo(e,function(){t++}),t},toArray:function(e){return Qo(e,function(t){return t})||[]},only:function(e){if(!Wc(e))throw Error(_o(143));return e}};K.Component=ii;K.PureComponent=Dc;K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Xv;K.cloneElement=function(e,t,r){if(e==null)throw Error(_o(267,e));var n=Ic({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=Bc.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)jm.call(t,s)&&!zm.hasOwnProperty(s)&&(n[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)n.children=r;else if(1<s){l=Array(s);for(var c=0;c<s;c++)l[c]=arguments[c+2];n.children=l}return{$$typeof:ni,type:e.type,key:i,ref:o,props:n,_owner:a}};K.createContext=function(e,t){return t===void 0&&(t=null),e={$$typeof:Pm,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider={$$typeof:$m,_context:e},e.Consumer=e};K.createElement=Am;K.createFactory=function(e){var t=Am.bind(null,e);return t.type=e,t};K.createRef=function(){return{current:null}};K.forwardRef=function(e){return{$$typeof:Om,render:e}};K.isValidElement=Wc;K.lazy=function(e){return{$$typeof:Tm,_payload:{_status:-1,_result:e},_init:Kv}};K.memo=function(e,t){return{$$typeof:Nm,type:e,compare:t===void 0?null:t}};K.useCallback=function(e,t){return or().useCallback(e,t)};K.useContext=function(e,t){return or().useContext(e,t)};K.useDebugValue=function(){};K.useEffect=function(e,t){return or().useEffect(e,t)};K.useImperativeHandle=function(e,t,r){return or().useImperativeHandle(e,t,r)};K.useLayoutEffect=function(e,t){return or().useLayoutEffect(e,t)};K.useMemo=function(e,t){return or().useMemo(e,t)};K.useReducer=function(e,t,r){return or().useReducer(e,t,r)};K.useRef=function(e){return or().useRef(e)};K.useState=function(e){return or().useState(e)};K.version="17.0.2";k.exports=K;var Ge=k.exports,Zi=Cm({__proto__:null,default:Ge},[k.exports]),kl={exports:{}},bt={},Dm={exports:{}},Fm={};/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){var t,r,n,i;if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}if(typeof window=="undefined"||typeof MessageChannel!="function"){var s=null,c=null,d=function(){if(s!==null)try{var L=e.unstable_now();s(!0,L),s=null}catch($){throw setTimeout(d,0),$}};t=function(L){s!==null?setTimeout(t,0,L):(s=L,setTimeout(d,0))},r=function(L,$){c=setTimeout(L,$)},n=function(){clearTimeout(c)},e.unstable_shouldYield=function(){return!1},i=e.unstable_forceFrameRate=function(){}}else{var p=window.setTimeout,m=window.clearTimeout;if(typeof console!="undefined"){var y=window.cancelAnimationFrame;typeof window.requestAnimationFrame!="function"&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"),typeof y!="function"&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")}var x=!1,v=null,f=-1,h=5,g=0;e.unstable_shouldYield=function(){return e.unstable_now()>=g},i=function(){},e.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):h=0<L?Math.floor(1e3/L):5};var w=new MessageChannel,S=w.port2;w.port1.onmessage=function(){if(v!==null){var L=e.unstable_now();g=L+h;try{v(!0,L)?S.postMessage(null):(x=!1,v=null)}catch($){throw S.postMessage(null),$}}else x=!1},t=function(L){v=L,x||(x=!0,S.postMessage(null))},r=function(L,$){f=p(function(){L(e.unstable_now())},$)},n=function(){m(f),f=-1}}function _(L,$){var P=L.length;L.push($);e:for(;;){var M=P-1>>>1,A=L[M];if(A!==void 0&&0<j(A,$))L[M]=$,L[P]=A,P=M;else break e}}function E(L){return L=L[0],L===void 0?null:L}function O(L){var $=L[0];if($!==void 0){var P=L.pop();if(P!==$){L[0]=P;e:for(var M=0,A=L.length;M<A;){var C=2*(M+1)-1,V=L[C],R=C+1,te=L[R];if(V!==void 0&&0>j(V,P))te!==void 0&&0>j(te,V)?(L[M]=te,L[R]=P,M=R):(L[M]=V,L[C]=P,M=C);else if(te!==void 0&&0>j(te,P))L[M]=te,L[R]=P,M=R;else break e}}return $}return null}function j(L,$){var P=L.sortIndex-$.sortIndex;return P!==0?P:L.id-$.id}var T=[],I=[],G=1,U=null,H=3,pe=!1,ae=!1,Be=!1;function Pe(L){for(var $=E(I);$!==null;){if($.callback===null)O(I);else if($.startTime<=L)O(I),$.sortIndex=$.expirationTime,_(T,$);else break;$=E(I)}}function Ee(L){if(Be=!1,Pe(L),!ae)if(E(T)!==null)ae=!0,t(Xt);else{var $=E(I);$!==null&&r(Ee,$.startTime-L)}}function Xt(L,$){ae=!1,Be&&(Be=!1,n()),pe=!0;var P=H;try{for(Pe($),U=E(T);U!==null&&(!(U.expirationTime>$)||L&&!e.unstable_shouldYield());){var M=U.callback;if(typeof M=="function"){U.callback=null,H=U.priorityLevel;var A=M(U.expirationTime<=$);$=e.unstable_now(),typeof A=="function"?U.callback=A:U===E(T)&&O(T),Pe($)}else O(T);U=E(T)}if(U!==null)var C=!0;else{var V=E(I);V!==null&&r(Ee,V.startTime-$),C=!1}return C}finally{U=null,H=P,pe=!1}}var ur=i;e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(L){L.callback=null},e.unstable_continueExecution=function(){ae||pe||(ae=!0,t(Xt))},e.unstable_getCurrentPriorityLevel=function(){return H},e.unstable_getFirstCallbackNode=function(){return E(T)},e.unstable_next=function(L){switch(H){case 1:case 2:case 3:var $=3;break;default:$=H}var P=H;H=$;try{return L()}finally{H=P}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=ur,e.unstable_runWithPriority=function(L,$){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var P=H;H=L;try{return $()}finally{H=P}},e.unstable_scheduleCallback=function(L,$,P){var M=e.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?M+P:M):P=M,L){case 1:var A=-1;break;case 2:A=250;break;case 5:A=1073741823;break;case 4:A=1e4;break;default:A=5e3}return A=P+A,L={id:G++,callback:$,priorityLevel:L,startTime:P,expirationTime:A,sortIndex:-1},P>M?(L.sortIndex=P,_(I,L),E(T)===null&&L===E(I)&&(Be?n():Be=!0,r(Ee,P-M))):(L.sortIndex=A,_(T,L),ae||pe||(ae=!0,t(Xt))),L},e.unstable_wrapCallback=function(L){var $=H;return function(){var P=H;H=$;try{return L.apply(this,arguments)}finally{H=P}}}})(Fm);Dm.exports=Fm;/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cl=k.exports,fe=_m,Ne=Dm.exports;function N(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!Cl)throw Error(N(227));var Bm=new Set,eo={};function cn(e,t){Yn(e,t),Yn(e+"Capture",t)}function Yn(e,t){for(eo[e]=t,e=0;e<t.length;e++)Bm.add(t[e])}var tr=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),Gv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ff=Object.prototype.hasOwnProperty,Bf={},Wf={};function Yv(e){return Ff.call(Wf,e)?!0:Ff.call(Bf,e)?!1:Gv.test(e)?Wf[e]=!0:(Bf[e]=!0,!1)}function qv(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Qv(e,t,r,n){if(t===null||typeof t=="undefined"||qv(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ze(e,t,r,n,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var De={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){De[e]=new Ze(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];De[t]=new Ze(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){De[e]=new Ze(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){De[e]=new Ze(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){De[e]=new Ze(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){De[e]=new Ze(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){De[e]=new Ze(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){De[e]=new Ze(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){De[e]=new Ze(e,5,!1,e.toLowerCase(),null,!1,!1)});var Uc=/[\-:]([a-z])/g;function Hc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Uc,Hc);De[t]=new Ze(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Uc,Hc);De[t]=new Ze(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Uc,Hc);De[t]=new Ze(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){De[e]=new Ze(e,1,!1,e.toLowerCase(),null,!1,!1)});De.xlinkHref=new Ze("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){De[e]=new Ze(e,1,!1,e.toLowerCase(),null,!0,!0)});function Vc(e,t,r,n){var i=De.hasOwnProperty(t)?De[t]:null,o=i!==null?i.type===0:n?!1:!(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N");o||(Qv(t,r,i,n)&&(r=null),n||i===null?Yv(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):i.mustUseProperty?e[i.propertyName]=r===null?i.type===3?!1:"":r:(t=i.attributeName,n=i.attributeNamespace,r===null?e.removeAttribute(t):(i=i.type,r=i===3||i===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var dn=Cl.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Mi=60103,Yr=60106,pr=60107,Kc=60108,Di=60114,Xc=60109,Gc=60110,_l=60112,Fi=60113,Aa=60120,El=60115,Yc=60116,qc=60121,Qc=60128,Wm=60129,Jc=60130,xu=60131;if(typeof Symbol=="function"&&Symbol.for){var Oe=Symbol.for;Mi=Oe("react.element"),Yr=Oe("react.portal"),pr=Oe("react.fragment"),Kc=Oe("react.strict_mode"),Di=Oe("react.profiler"),Xc=Oe("react.provider"),Gc=Oe("react.context"),_l=Oe("react.forward_ref"),Fi=Oe("react.suspense"),Aa=Oe("react.suspense_list"),El=Oe("react.memo"),Yc=Oe("react.lazy"),qc=Oe("react.block"),Oe("react.scope"),Qc=Oe("react.opaque.id"),Wm=Oe("react.debug_trace_mode"),Jc=Oe("react.offscreen"),xu=Oe("react.legacy_hidden")}var Uf=typeof Symbol=="function"&&Symbol.iterator;function yi(e){return e===null||typeof e!="object"?null:(e=Uf&&e[Uf]||e["@@iterator"],typeof e=="function"?e:null)}var Ns;function Li(e){if(Ns===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);Ns=t&&t[1]||""}return`
`+Ns+e}var Ts=!1;function Jo(e,t){if(!e||Ts)return"";Ts=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(s){var n=s}Reflect.construct(e,[],t)}else{try{t.call()}catch(s){n=s}e.call(t.prototype)}else{try{throw Error()}catch(s){n=s}e()}}catch(s){if(s&&n&&typeof s.stack=="string"){for(var i=s.stack.split(`
`),o=n.stack.split(`
`),a=i.length-1,l=o.length-1;1<=a&&0<=l&&i[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==o[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==o[l])return`
`+i[a].replace(" at new "," at ");while(1<=a&&0<=l);break}}}finally{Ts=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?Li(e):""}function Jv(e){switch(e.tag){case 5:return Li(e.type);case 16:return Li("Lazy");case 13:return Li("Suspense");case 19:return Li("SuspenseList");case 0:case 2:case 15:return e=Jo(e.type,!1),e;case 11:return e=Jo(e.type.render,!1),e;case 22:return e=Jo(e.type._render,!1),e;case 1:return e=Jo(e.type,!0),e;default:return""}}function Mn(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case pr:return"Fragment";case Yr:return"Portal";case Di:return"Profiler";case Kc:return"StrictMode";case Fi:return"Suspense";case Aa:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Gc:return(e.displayName||"Context")+".Consumer";case Xc:return(e._context.displayName||"Context")+".Provider";case _l:var t=e.render;return t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case El:return Mn(e.type);case qc:return Mn(e._render);case Yc:t=e._payload,e=e._init;try{return Mn(e(t))}catch{}}return null}function Lr(e){switch(typeof e){case"boolean":case"number":case"object":case"string":case"undefined":return e;default:return""}}function Um(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Zv(e){var t=Um(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r!="undefined"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,o=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){n=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(a){n=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Zo(e){e._valueTracker||(e._valueTracker=Zv(e))}function Hm(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=Um(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function Ia(e){if(e=e||(typeof document!="undefined"?document:void 0),typeof e=="undefined")return null;try{return e.activeElement||e.body}catch{return e.body}}function wu(e,t){var r=t.checked;return fe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r!=null?r:e._wrapperState.initialChecked})}function Hf(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=Lr(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Vm(e,t){t=t.checked,t!=null&&Vc(e,"checked",t,!1)}function bu(e,t){Vm(e,t);var r=Lr(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Su(e,t.type,r):t.hasOwnProperty("defaultValue")&&Su(e,t.type,Lr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Vf(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Su(e,t,r){(t!=="number"||Ia(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}function ey(e){var t="";return Cl.Children.forEach(e,function(r){r!=null&&(t+=r)}),t}function ku(e,t){return e=fe({children:void 0},t),(t=ey(t.children))&&(e.children=t),e}function Ln(e,t,r,n){if(e=e.options,t){t={};for(var i=0;i<r.length;i++)t["$"+r[i]]=!0;for(r=0;r<e.length;r++)i=t.hasOwnProperty("$"+e[r].value),e[r].selected!==i&&(e[r].selected=i),i&&n&&(e[r].defaultSelected=!0)}else{for(r=""+Lr(r),t=null,i=0;i<e.length;i++){if(e[i].value===r){e[i].selected=!0,n&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Cu(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(N(91));return fe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Kf(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(N(92));if(Array.isArray(r)){if(!(1>=r.length))throw Error(N(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:Lr(r)}}function Km(e,t){var r=Lr(t.value),n=Lr(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function Xf(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}var _u={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};function Xm(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Eu(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Xm(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ea,Gm=function(e){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(t,r,n,i){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,i)})}:e}(function(e,t){if(e.namespaceURI!==_u.svg||"innerHTML"in e)e.innerHTML=t;else{for(ea=ea||document.createElement("div"),ea.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ea.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function to(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var Bi={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ty=["Webkit","ms","Moz","O"];Object.keys(Bi).forEach(function(e){ty.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Bi[t]=Bi[e]})});function Ym(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||Bi.hasOwnProperty(e)&&Bi[e]?(""+t).trim():t+"px"}function qm(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,i=Ym(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,i):e[r]=i}}var ry=fe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function $u(e,t){if(t){if(ry[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(N(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(N(60));if(!(typeof t.dangerouslySetInnerHTML=="object"&&"__html"in t.dangerouslySetInnerHTML))throw Error(N(61))}if(t.style!=null&&typeof t.style!="object")throw Error(N(62))}}function Pu(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}function Zc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ou=null,jn=null,zn=null;function Gf(e){if(e=$o(e)){if(typeof Ou!="function")throw Error(N(280));var t=e.stateNode;t&&(t=Rl(t),Ou(e.stateNode,e.type,t))}}function Qm(e){jn?zn?zn.push(e):zn=[e]:jn=e}function Jm(){if(jn){var e=jn,t=zn;if(zn=jn=null,Gf(e),t)for(e=0;e<t.length;e++)Gf(t[e])}}function ed(e,t){return e(t)}function Zm(e,t,r,n,i){return e(t,r,n,i)}function td(){}var e0=ed,qr=!1,Rs=!1;function rd(){(jn!==null||zn!==null)&&(td(),Jm())}function ny(e,t,r){if(Rs)return e(t,r);Rs=!0;try{return e0(e,t,r)}finally{Rs=!1,rd()}}function ro(e,t){var r=e.stateNode;if(r===null)return null;var n=Rl(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(N(231,t,typeof r));return r}var Nu=!1;if(tr)try{var xi={};Object.defineProperty(xi,"passive",{get:function(){Nu=!0}}),window.addEventListener("test",xi,xi),window.removeEventListener("test",xi,xi)}catch{Nu=!1}function iy(e,t,r,n,i,o,a,l,s){var c=Array.prototype.slice.call(arguments,3);try{t.apply(r,c)}catch(d){this.onError(d)}}var Wi=!1,Da=null,Fa=!1,Tu=null,oy={onError:function(e){Wi=!0,Da=e}};function ay(e,t,r,n,i,o,a,l,s){Wi=!1,Da=null,iy.apply(oy,arguments)}function ly(e,t,r,n,i,o,a,l,s){if(ay.apply(this,arguments),Wi){if(Wi){var c=Da;Wi=!1,Da=null}else throw Error(N(198));Fa||(Fa=!0,Tu=c)}}function fn(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&1026)!==0&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function t0(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Yf(e){if(fn(e)!==e)throw Error(N(188))}function sy(e){var t=e.alternate;if(!t){if(t=fn(e),t===null)throw Error(N(188));return t!==e?null:e}for(var r=e,n=t;;){var i=r.return;if(i===null)break;var o=i.alternate;if(o===null){if(n=i.return,n!==null){r=n;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===r)return Yf(i),e;if(o===n)return Yf(i),t;o=o.sibling}throw Error(N(188))}if(r.return!==n.return)r=i,n=o;else{for(var a=!1,l=i.child;l;){if(l===r){a=!0,r=i,n=o;break}if(l===n){a=!0,n=i,r=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===r){a=!0,r=o,n=i;break}if(l===n){a=!0,n=o,r=i;break}l=l.sibling}if(!a)throw Error(N(189))}}if(r.alternate!==n)throw Error(N(190))}if(r.tag!==3)throw Error(N(188));return r.stateNode.current===r?e:t}function r0(e){if(e=sy(e),!e)return null;for(var t=e;;){if(t.tag===5||t.tag===6)return t;if(t.child)t.child.return=t,t=t.child;else{if(t===e)break;for(;!t.sibling;){if(!t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}}return null}function qf(e,t){for(var r=e.alternate;t!==null;){if(t===e||t===r)return!0;t=t.return}return!1}var n0,nd,i0,o0,Ru=!1,At=[],br=null,Sr=null,kr=null,no=new Map,io=new Map,wi=[],Qf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Mu(e,t,r,n,i){return{blockedOn:e,domEventName:t,eventSystemFlags:r|16,nativeEvent:i,targetContainers:[n]}}function Jf(e,t){switch(e){case"focusin":case"focusout":br=null;break;case"dragenter":case"dragleave":Sr=null;break;case"mouseover":case"mouseout":kr=null;break;case"pointerover":case"pointerout":no.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":io.delete(t.pointerId)}}function bi(e,t,r,n,i,o){return e===null||e.nativeEvent!==o?(e=Mu(t,r,n,i,o),t!==null&&(t=$o(t),t!==null&&nd(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function uy(e,t,r,n,i){switch(t){case"focusin":return br=bi(br,e,t,r,n,i),!0;case"dragenter":return Sr=bi(Sr,e,t,r,n,i),!0;case"mouseover":return kr=bi(kr,e,t,r,n,i),!0;case"pointerover":var o=i.pointerId;return no.set(o,bi(no.get(o)||null,e,t,r,n,i)),!0;case"gotpointercapture":return o=i.pointerId,io.set(o,bi(io.get(o)||null,e,t,r,n,i)),!0}return!1}function cy(e){var t=Qr(e.target);if(t!==null){var r=fn(t);if(r!==null){if(t=r.tag,t===13){if(t=t0(r),t!==null){e.blockedOn=t,o0(e.lanePriority,function(){Ne.unstable_runWithPriority(e.priority,function(){i0(r)})});return}}else if(t===3&&r.stateNode.hydrate){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function xa(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=ld(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r!==null)return t=$o(r),t!==null&&nd(t),e.blockedOn=r,!1;t.shift()}return!0}function Zf(e,t,r){xa(e)&&r.delete(t)}function dy(){for(Ru=!1;0<At.length;){var e=At[0];if(e.blockedOn!==null){e=$o(e.blockedOn),e!==null&&n0(e);break}for(var t=e.targetContainers;0<t.length;){var r=ld(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r!==null){e.blockedOn=r;break}t.shift()}e.blockedOn===null&&At.shift()}br!==null&&xa(br)&&(br=null),Sr!==null&&xa(Sr)&&(Sr=null),kr!==null&&xa(kr)&&(kr=null),no.forEach(Zf),io.forEach(Zf)}function Si(e,t){e.blockedOn===t&&(e.blockedOn=null,Ru||(Ru=!0,Ne.unstable_scheduleCallback(Ne.unstable_NormalPriority,dy)))}function a0(e){function t(i){return Si(i,e)}if(0<At.length){Si(At[0],e);for(var r=1;r<At.length;r++){var n=At[r];n.blockedOn===e&&(n.blockedOn=null)}}for(br!==null&&Si(br,e),Sr!==null&&Si(Sr,e),kr!==null&&Si(kr,e),no.forEach(t),io.forEach(t),r=0;r<wi.length;r++)n=wi[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<wi.length&&(r=wi[0],r.blockedOn===null);)cy(r),r.blockedOn===null&&wi.shift()}function ta(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var En={animationend:ta("Animation","AnimationEnd"),animationiteration:ta("Animation","AnimationIteration"),animationstart:ta("Animation","AnimationStart"),transitionend:ta("Transition","TransitionEnd")},Ms={},l0={};tr&&(l0=document.createElement("div").style,"AnimationEvent"in window||(delete En.animationend.animation,delete En.animationiteration.animation,delete En.animationstart.animation),"TransitionEvent"in window||delete En.transitionend.transition);function $l(e){if(Ms[e])return Ms[e];if(!En[e])return e;var t=En[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in l0)return Ms[e]=t[r];return e}var s0=$l("animationend"),u0=$l("animationiteration"),c0=$l("animationstart"),d0=$l("transitionend"),f0=new Map,id=new Map,fy=["abort","abort",s0,"animationEnd",u0,"animationIteration",c0,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart","lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",d0,"transitionEnd","waiting","waiting"];function od(e,t){for(var r=0;r<e.length;r+=2){var n=e[r],i=e[r+1];i="on"+(i[0].toUpperCase()+i.slice(1)),id.set(n,t),f0.set(n,i),cn(i,[n])}}var py=Ne.unstable_now;py();var le=8;function Cn(e){if((1&e)!==0)return le=15,1;if((2&e)!==0)return le=14,2;if((4&e)!==0)return le=13,4;var t=24&e;return t!==0?(le=12,t):(e&32)!==0?(le=11,32):(t=192&e,t!==0?(le=10,t):(e&256)!==0?(le=9,256):(t=3584&e,t!==0?(le=8,t):(e&4096)!==0?(le=7,4096):(t=4186112&e,t!==0?(le=6,t):(t=62914560&e,t!==0?(le=5,t):e&67108864?(le=4,67108864):(e&134217728)!==0?(le=3,134217728):(t=805306368&e,t!==0?(le=2,t):(1073741824&e)!==0?(le=1,1073741824):(le=8,e))))))}function hy(e){switch(e){case 99:return 15;case 98:return 10;case 97:case 96:return 8;case 95:return 2;default:return 0}}function my(e){switch(e){case 15:case 14:return 99;case 13:case 12:case 11:case 10:return 98;case 9:case 8:case 7:case 6:case 4:case 5:return 97;case 3:case 2:case 1:return 95;case 0:return 90;default:throw Error(N(358,e))}}function oo(e,t){var r=e.pendingLanes;if(r===0)return le=0;var n=0,i=0,o=e.expiredLanes,a=e.suspendedLanes,l=e.pingedLanes;if(o!==0)n=o,i=le=15;else if(o=r&134217727,o!==0){var s=o&~a;s!==0?(n=Cn(s),i=le):(l&=o,l!==0&&(n=Cn(l),i=le))}else o=r&~a,o!==0?(n=Cn(o),i=le):l!==0&&(n=Cn(l),i=le);if(n===0)return 0;if(n=31-jr(n),n=r&((0>n?0:1<<n)<<1)-1,t!==0&&t!==n&&(t&a)===0){if(Cn(t),i<=le)return t;le=i}if(t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-jr(t),i=1<<r,n|=e[r],t&=~i;return n}function p0(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ba(e,t){switch(e){case 15:return 1;case 14:return 2;case 12:return e=_n(24&~t),e===0?Ba(10,t):e;case 10:return e=_n(192&~t),e===0?Ba(8,t):e;case 8:return e=_n(3584&~t),e===0&&(e=_n(4186112&~t),e===0&&(e=512)),e;case 2:return t=_n(805306368&~t),t===0&&(t=268435456),t}throw Error(N(358,e))}function _n(e){return e&-e}function Ls(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Pl(e,t,r){e.pendingLanes|=t;var n=t-1;e.suspendedLanes&=n,e.pingedLanes&=n,e=e.eventTimes,t=31-jr(t),e[t]=r}var jr=Math.clz32?Math.clz32:yy,gy=Math.log,vy=Math.LN2;function yy(e){return e===0?32:31-(gy(e)/vy|0)|0}var xy=Ne.unstable_UserBlockingPriority,wy=Ne.unstable_runWithPriority,wa=!0;function by(e,t,r,n){qr||td();var i=ad,o=qr;qr=!0;try{Zm(i,e,t,r,n)}finally{(qr=o)||rd()}}function Sy(e,t,r,n){wy(xy,ad.bind(null,e,t,r,n))}function ad(e,t,r,n){if(wa){var i;if((i=(t&4)===0)&&0<At.length&&-1<Qf.indexOf(e))e=Mu(null,e,t,r,n),At.push(e);else{var o=ld(e,t,r,n);if(o===null)i&&Jf(e,n);else{if(i){if(-1<Qf.indexOf(e)){e=Mu(o,e,t,r,n),At.push(e);return}if(uy(o,e,t,r,n))return;Jf(e,n)}E0(e,t,n,null,r)}}}}function ld(e,t,r,n){var i=Zc(n);if(i=Qr(i),i!==null){var o=fn(i);if(o===null)i=null;else{var a=o.tag;if(a===13){if(i=t0(o),i!==null)return i;i=null}else if(a===3){if(o.stateNode.hydrate)return o.tag===3?o.stateNode.containerInfo:null;i=null}else o!==i&&(i=null)}}return E0(e,t,n,i,r),null}var gr=null,sd=null,ba=null;function h0(){if(ba)return ba;var e,t=sd,r=t.length,n,i="value"in gr?gr.value:gr.textContent,o=i.length;for(e=0;e<r&&t[e]===i[e];e++);var a=r-e;for(n=1;n<=a&&t[r-n]===i[o-n];n++);return ba=i.slice(e,1<n?1-n:void 0)}function Sa(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ra(){return!0}function ep(){return!1}function dt(e){function t(r,n,i,o,a){this._reactName=r,this._targetInst=i,this.type=n,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(r=e[l],this[l]=r?r(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ra:ep,this.isPropagationStopped=ep,this}return fe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=ra)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=ra)},persist:function(){},isPersistent:ra}),t}var oi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ud=dt(oi),Eo=fe({},oi,{view:0,detail:0}),ky=dt(Eo),js,zs,ki,Ol=fe({},Eo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:cd,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ki&&(ki&&e.type==="mousemove"?(js=e.screenX-ki.screenX,zs=e.screenY-ki.screenY):zs=js=0,ki=e),js)},movementY:function(e){return"movementY"in e?e.movementY:zs}}),tp=dt(Ol),Cy=fe({},Ol,{dataTransfer:0}),_y=dt(Cy),Ey=fe({},Eo,{relatedTarget:0}),As=dt(Ey),$y=fe({},oi,{animationName:0,elapsedTime:0,pseudoElement:0}),Py=dt($y),Oy=fe({},oi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ny=dt(Oy),Ty=fe({},oi,{data:0}),rp=dt(Ty),Ry={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},My={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ly={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jy(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ly[e])?!!t[e]:!1}function cd(){return jy}var zy=fe({},Eo,{key:function(e){if(e.key){var t=Ry[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Sa(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?My[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:cd,charCode:function(e){return e.type==="keypress"?Sa(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Sa(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ay=dt(zy),Iy=fe({},Ol,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),np=dt(Iy),Dy=fe({},Eo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:cd}),Fy=dt(Dy),By=fe({},oi,{propertyName:0,elapsedTime:0,pseudoElement:0}),Wy=dt(By),Uy=fe({},Ol,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Hy=dt(Uy),Vy=[9,13,27,32],dd=tr&&"CompositionEvent"in window,Ui=null;tr&&"documentMode"in document&&(Ui=document.documentMode);var Ky=tr&&"TextEvent"in window&&!Ui,m0=tr&&(!dd||Ui&&8<Ui&&11>=Ui),ip=String.fromCharCode(32),op=!1;function g0(e,t){switch(e){case"keyup":return Vy.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function v0(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var $n=!1;function Xy(e,t){switch(e){case"compositionend":return v0(t);case"keypress":return t.which!==32?null:(op=!0,ip);case"textInput":return e=t.data,e===ip&&op?null:e;default:return null}}function Gy(e,t){if($n)return e==="compositionend"||!dd&&g0(e,t)?(e=h0(),ba=sd=gr=null,$n=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return m0&&t.locale!=="ko"?null:t.data;default:return null}}var Yy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ap(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Yy[e.type]:t==="textarea"}function y0(e,t,r,n){Qm(n),t=Wa(t,"onChange"),0<t.length&&(r=new ud("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var Hi=null,ao=null;function qy(e){k0(e,0)}function Nl(e){var t=On(e);if(Hm(t))return e}function Qy(e,t){if(e==="change")return t}var x0=!1;if(tr){var Is;if(tr){var Ds="oninput"in document;if(!Ds){var lp=document.createElement("div");lp.setAttribute("oninput","return;"),Ds=typeof lp.oninput=="function"}Is=Ds}else Is=!1;x0=Is&&(!document.documentMode||9<document.documentMode)}function sp(){Hi&&(Hi.detachEvent("onpropertychange",w0),ao=Hi=null)}function w0(e){if(e.propertyName==="value"&&Nl(ao)){var t=[];if(y0(t,ao,e,Zc(e)),e=qy,qr)e(t);else{qr=!0;try{ed(e,t)}finally{qr=!1,rd()}}}}function Jy(e,t,r){e==="focusin"?(sp(),Hi=t,ao=r,Hi.attachEvent("onpropertychange",w0)):e==="focusout"&&sp()}function Zy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Nl(ao)}function ex(e,t){if(e==="click")return Nl(t)}function tx(e,t){if(e==="input"||e==="change")return Nl(t)}function rx(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var mt=typeof Object.is=="function"?Object.is:rx,nx=Object.prototype.hasOwnProperty;function lo(e,t){if(mt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++)if(!nx.call(t,r[n])||!mt(e[r[n]],t[r[n]]))return!1;return!0}function up(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function cp(e,t){var r=up(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=up(r)}}function b0(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?b0(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function dp(){for(var e=window,t=Ia();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Ia(e.document)}return t}function Lu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var ix=tr&&"documentMode"in document&&11>=document.documentMode,Pn=null,ju=null,Vi=null,zu=!1;function fp(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;zu||Pn==null||Pn!==Ia(n)||(n=Pn,"selectionStart"in n&&Lu(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Vi&&lo(Vi,n)||(Vi=n,n=Wa(ju,"onSelect"),0<n.length&&(t=new ud("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=Pn)))}od("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),0);od("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1);od(fy,2);for(var pp="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),Fs=0;Fs<pp.length;Fs++)id.set(pp[Fs],0);Yn("onMouseEnter",["mouseout","mouseover"]);Yn("onMouseLeave",["mouseout","mouseover"]);Yn("onPointerEnter",["pointerout","pointerover"]);Yn("onPointerLeave",["pointerout","pointerover"]);cn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));cn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));cn("onBeforeInput",["compositionend","keypress","textInput","paste"]);cn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));cn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));cn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ji="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),S0=new Set("cancel close invalid load scroll toggle".split(" ").concat(ji));function hp(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,ly(n,t,void 0,e),e.currentTarget=null}function k0(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],i=n.event;n=n.listeners;e:{var o=void 0;if(t)for(var a=n.length-1;0<=a;a--){var l=n[a],s=l.instance,c=l.currentTarget;if(l=l.listener,s!==o&&i.isPropagationStopped())break e;hp(i,l,c),o=s}else for(a=0;a<n.length;a++){if(l=n[a],s=l.instance,c=l.currentTarget,l=l.listener,s!==o&&i.isPropagationStopped())break e;hp(i,l,c),o=s}}}if(Fa)throw e=Tu,Fa=!1,Tu=null,e}function se(e,t){var r=P0(t),n=e+"__bubble";r.has(n)||(_0(t,e,2,!1),r.add(n))}var mp="_reactListening"+Math.random().toString(36).slice(2);function C0(e){e[mp]||(e[mp]=!0,Bm.forEach(function(t){S0.has(t)||gp(t,!1,e,null),gp(t,!0,e,null)}))}function gp(e,t,r,n){var i=4<arguments.length&&arguments[4]!==void 0?arguments[4]:0,o=r;if(e==="selectionchange"&&r.nodeType!==9&&(o=r.ownerDocument),n!==null&&!t&&S0.has(e)){if(e!=="scroll")return;i|=2,o=n}var a=P0(o),l=e+"__"+(t?"capture":"bubble");a.has(l)||(t&&(i|=4),_0(o,e,i,t),a.add(l))}function _0(e,t,r,n){var i=id.get(t);switch(i===void 0?2:i){case 0:i=by;break;case 1:i=Sy;break;default:i=ad}r=i.bind(null,t,r,e),i=void 0,!Nu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),n?i!==void 0?e.addEventListener(t,r,{capture:!0,passive:i}):e.addEventListener(t,r,!0):i!==void 0?e.addEventListener(t,r,{passive:i}):e.addEventListener(t,r,!1)}function E0(e,t,r,n,i){var o=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var a=n.tag;if(a===3||a===4){var l=n.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=n.return;a!==null;){var s=a.tag;if((s===3||s===4)&&(s=a.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;a=a.return}for(;l!==null;){if(a=Qr(l),a===null)return;if(s=a.tag,s===5||s===6){n=o=a;continue e}l=l.parentNode}}n=n.return}ny(function(){var c=o,d=Zc(r),p=[];e:{var m=f0.get(e);if(m!==void 0){var y=ud,x=e;switch(e){case"keypress":if(Sa(r)===0)break e;case"keydown":case"keyup":y=Ay;break;case"focusin":x="focus",y=As;break;case"focusout":x="blur",y=As;break;case"beforeblur":case"afterblur":y=As;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=tp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=_y;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Fy;break;case s0:case u0:case c0:y=Py;break;case d0:y=Wy;break;case"scroll":y=ky;break;case"wheel":y=Hy;break;case"copy":case"cut":case"paste":y=Ny;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=np}var v=(t&4)!==0,f=!v&&e==="scroll",h=v?m!==null?m+"Capture":null:m;v=[];for(var g=c,w;g!==null;){w=g;var S=w.stateNode;if(w.tag===5&&S!==null&&(w=S,h!==null&&(S=ro(g,h),S!=null&&v.push(so(g,S,w)))),f)break;g=g.return}0<v.length&&(m=new y(m,x,null,r,d),p.push({event:m,listeners:v}))}}if((t&7)===0){e:{if(m=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",m&&(t&16)===0&&(x=r.relatedTarget||r.fromElement)&&(Qr(x)||x[ai]))break e;if((y||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,y?(x=r.relatedTarget||r.toElement,y=c,x=x?Qr(x):null,x!==null&&(f=fn(x),x!==f||x.tag!==5&&x.tag!==6)&&(x=null)):(y=null,x=c),y!==x)){if(v=tp,S="onMouseLeave",h="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(v=np,S="onPointerLeave",h="onPointerEnter",g="pointer"),f=y==null?m:On(y),w=x==null?m:On(x),m=new v(S,g+"leave",y,r,d),m.target=f,m.relatedTarget=w,S=null,Qr(d)===c&&(v=new v(h,g+"enter",x,r,d),v.target=w,v.relatedTarget=f,S=v),f=S,y&&x)t:{for(v=y,h=x,g=0,w=v;w;w=vn(w))g++;for(w=0,S=h;S;S=vn(S))w++;for(;0<g-w;)v=vn(v),g--;for(;0<w-g;)h=vn(h),w--;for(;g--;){if(v===h||h!==null&&v===h.alternate)break t;v=vn(v),h=vn(h)}v=null}else v=null;y!==null&&vp(p,m,y,v,!1),x!==null&&f!==null&&vp(p,f,x,v,!0)}}e:{if(m=c?On(c):window,y=m.nodeName&&m.nodeName.toLowerCase(),y==="select"||y==="input"&&m.type==="file")var _=Qy;else if(ap(m))if(x0)_=tx;else{_=Zy;var E=Jy}else(y=m.nodeName)&&y.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(_=ex);if(_&&(_=_(e,c))){y0(p,_,r,d);break e}E&&E(e,m,c),e==="focusout"&&(E=m._wrapperState)&&E.controlled&&m.type==="number"&&Su(m,"number",m.value)}switch(E=c?On(c):window,e){case"focusin":(ap(E)||E.contentEditable==="true")&&(Pn=E,ju=c,Vi=null);break;case"focusout":Vi=ju=Pn=null;break;case"mousedown":zu=!0;break;case"contextmenu":case"mouseup":case"dragend":zu=!1,fp(p,r,d);break;case"selectionchange":if(ix)break;case"keydown":case"keyup":fp(p,r,d)}var O;if(dd)e:{switch(e){case"compositionstart":var j="onCompositionStart";break e;case"compositionend":j="onCompositionEnd";break e;case"compositionupdate":j="onCompositionUpdate";break e}j=void 0}else $n?g0(e,r)&&(j="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(j="onCompositionStart");j&&(m0&&r.locale!=="ko"&&($n||j!=="onCompositionStart"?j==="onCompositionEnd"&&$n&&(O=h0()):(gr=d,sd="value"in gr?gr.value:gr.textContent,$n=!0)),E=Wa(c,j),0<E.length&&(j=new rp(j,e,null,r,d),p.push({event:j,listeners:E}),O?j.data=O:(O=v0(r),O!==null&&(j.data=O)))),(O=Ky?Xy(e,r):Gy(e,r))&&(c=Wa(c,"onBeforeInput"),0<c.length&&(d=new rp("onBeforeInput","beforeinput",null,r,d),p.push({event:d,listeners:c}),d.data=O))}k0(p,t)})}function so(e,t,r){return{instance:e,listener:t,currentTarget:r}}function Wa(e,t){for(var r=t+"Capture",n=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=ro(e,r),o!=null&&n.unshift(so(e,o,i)),o=ro(e,t),o!=null&&n.push(so(e,o,i))),e=e.return}return n}function vn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function vp(e,t,r,n,i){for(var o=t._reactName,a=[];r!==null&&r!==n;){var l=r,s=l.alternate,c=l.stateNode;if(s!==null&&s===n)break;l.tag===5&&c!==null&&(l=c,i?(s=ro(r,o),s!=null&&a.unshift(so(r,s,l))):i||(s=ro(r,o),s!=null&&a.push(so(r,s,l)))),r=r.return}a.length!==0&&e.push({event:t,listeners:a})}function Ua(){}var Bs=null,Ws=null;function $0(e,t){switch(e){case"button":case"input":case"select":case"textarea":return!!t.autoFocus}return!1}function Au(e,t){return e==="textarea"||e==="option"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var yp=typeof setTimeout=="function"?setTimeout:void 0,ox=typeof clearTimeout=="function"?clearTimeout:void 0;function fd(e){e.nodeType===1?e.textContent="":e.nodeType===9&&(e=e.body,e!=null&&(e.textContent=""))}function An(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break}return e}function xp(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var Us=0;function ax(e){return{$$typeof:Qc,toString:e,valueOf:e}}var Tl=Math.random().toString(36).slice(2),vr="__reactFiber$"+Tl,Ha="__reactProps$"+Tl,ai="__reactContainer$"+Tl,wp="__reactEvents$"+Tl;function Qr(e){var t=e[vr];if(t)return t;for(var r=e.parentNode;r;){if(t=r[ai]||r[vr]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=xp(e);e!==null;){if(r=e[vr])return r;e=xp(e)}return t}e=r,r=e.parentNode}return null}function $o(e){return e=e[vr]||e[ai],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function On(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(N(33))}function Rl(e){return e[Ha]||null}function P0(e){var t=e[wp];return t===void 0&&(t=e[wp]=new Set),t}var Iu=[],Nn=-1;function Wr(e){return{current:e}}function ue(e){0>Nn||(e.current=Iu[Nn],Iu[Nn]=null,Nn--)}function xe(e,t){Nn++,Iu[Nn]=e.current,e.current=t}var zr={},qe=Wr(zr),it=Wr(!1),rn=zr;function qn(e,t){var r=e.type.contextTypes;if(!r)return zr;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in r)i[o]=t[o];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ot(e){return e=e.childContextTypes,e!=null}function Va(){ue(it),ue(qe)}function bp(e,t,r){if(qe.current!==zr)throw Error(N(168));xe(qe,t),xe(it,r)}function O0(e,t,r){var n=e.stateNode;if(e=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var i in n)if(!(i in e))throw Error(N(108,Mn(t)||"Unknown",i));return fe({},r,n)}function ka(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||zr,rn=qe.current,xe(qe,e),xe(it,it.current),!0}function Sp(e,t,r){var n=e.stateNode;if(!n)throw Error(N(169));r?(e=O0(e,t,rn),n.__reactInternalMemoizedMergedChildContext=e,ue(it),ue(qe),xe(qe,e)):ue(it),xe(it,r)}var pd=null,en=null,lx=Ne.unstable_runWithPriority,hd=Ne.unstable_scheduleCallback,Du=Ne.unstable_cancelCallback,sx=Ne.unstable_shouldYield,kp=Ne.unstable_requestPaint,Fu=Ne.unstable_now,ux=Ne.unstable_getCurrentPriorityLevel,Ml=Ne.unstable_ImmediatePriority,N0=Ne.unstable_UserBlockingPriority,T0=Ne.unstable_NormalPriority,R0=Ne.unstable_LowPriority,M0=Ne.unstable_IdlePriority,Hs={},cx=kp!==void 0?kp:function(){},Yt=null,Ca=null,Vs=!1,Cp=Fu(),Xe=1e4>Cp?Fu:function(){return Fu()-Cp};function Qn(){switch(ux()){case Ml:return 99;case N0:return 98;case T0:return 97;case R0:return 96;case M0:return 95;default:throw Error(N(332))}}function L0(e){switch(e){case 99:return Ml;case 98:return N0;case 97:return T0;case 96:return R0;case 95:return M0;default:throw Error(N(332))}}function nn(e,t){return e=L0(e),lx(e,t)}function uo(e,t,r){return e=L0(e),hd(e,t,r)}function Vt(){if(Ca!==null){var e=Ca;Ca=null,Du(e)}j0()}function j0(){if(!Vs&&Yt!==null){Vs=!0;var e=0;try{var t=Yt;nn(99,function(){for(;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}}),Yt=null}catch(r){throw Yt!==null&&(Yt=Yt.slice(e+1)),hd(Ml,Vt),r}finally{Vs=!1}}}var dx=dn.ReactCurrentBatchConfig;function Et(e,t){if(e&&e.defaultProps){t=fe({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}var Ka=Wr(null),Xa=null,Tn=null,Ga=null;function md(){Ga=Tn=Xa=null}function gd(e){var t=Ka.current;ue(Ka),e.type._context._currentValue=t}function z0(e,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t){if(r===null||(r.childLanes&t)===t)break;r.childLanes|=t}else e.childLanes|=t,r!==null&&(r.childLanes|=t);e=e.return}}function In(e,t){Xa=e,Ga=Tn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Pt=!0),e.firstContext=null)}function yt(e,t){if(Ga!==e&&t!==!1&&t!==0)if((typeof t!="number"||t===1073741823)&&(Ga=e,t=1073741823),t={context:e,observedBits:t,next:null},Tn===null){if(Xa===null)throw Error(N(308));Tn=t,Xa.dependencies={lanes:0,firstContext:t,responders:null}}else Tn=Tn.next=t;return e._currentValue}var fr=!1;function vd(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null},effects:null}}function A0(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Cr(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function _r(e,t){if(e=e.updateQueue,e!==null){e=e.shared;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}}function _p(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var i=null,o=null;if(r=r.firstBaseUpdate,r!==null){do{var a={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};o===null?i=o=a:o=o.next=a,r=r.next}while(r!==null);o===null?i=o=t:o=o.next=t}else i=o=t;r={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function co(e,t,r,n){var i=e.updateQueue;fr=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var s=l,c=s.next;s.next=null,a===null?o=c:a.next=c,a=s;var d=e.alternate;if(d!==null){d=d.updateQueue;var p=d.lastBaseUpdate;p!==a&&(p===null?d.firstBaseUpdate=c:p.next=c,d.lastBaseUpdate=s)}}if(o!==null){p=i.baseState,a=0,d=c=s=null;do{l=o.lane;var m=o.eventTime;if((n&l)===l){d!==null&&(d=d.next={eventTime:m,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var y=e,x=o;switch(l=t,m=r,x.tag){case 1:if(y=x.payload,typeof y=="function"){p=y.call(m,p,l);break e}p=y;break e;case 3:y.flags=y.flags&-4097|64;case 0:if(y=x.payload,l=typeof y=="function"?y.call(m,p,l):y,l==null)break e;p=fe({},p,l);break e;case 2:fr=!0}}o.callback!==null&&(e.flags|=32,l=i.effects,l===null?i.effects=[o]:l.push(o))}else m={eventTime:m,lane:l,tag:o.tag,payload:o.payload,callback:o.callback,next:null},d===null?(c=d=m,s=p):d=d.next=m,a|=l;if(o=o.next,o===null){if(l=i.shared.pending,l===null)break;o=l.next,l.next=null,i.lastBaseUpdate=l,i.shared.pending=null}}while(1);d===null&&(s=p),i.baseState=s,i.firstBaseUpdate=c,i.lastBaseUpdate=d,Oo|=a,e.lanes=a,e.memoizedState=p}}function Ep(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],i=n.callback;if(i!==null){if(n.callback=null,n=r,typeof i!="function")throw Error(N(191,i));i.call(n)}}}var I0=new Cl.Component().refs;function Ya(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:fe({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Ll={isMounted:function(e){return(e=e._reactInternals)?fn(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=st(),i=Er(e),o=Cr(n,i);o.payload=t,r!=null&&(o.callback=r),_r(e,o),$r(e,i,n)},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=st(),i=Er(e),o=Cr(n,i);o.tag=1,o.payload=t,r!=null&&(o.callback=r),_r(e,o),$r(e,i,n)},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=st(),n=Er(e),i=Cr(r,n);i.tag=2,t!=null&&(i.callback=t),_r(e,i),$r(e,n,r)}};function $p(e,t,r,n,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,o,a):t.prototype&&t.prototype.isPureReactComponent?!lo(r,n)||!lo(i,o):!0}function D0(e,t,r){var n=!1,i=zr,o=t.contextType;return typeof o=="object"&&o!==null?o=yt(o):(i=ot(t)?rn:qe.current,n=t.contextTypes,o=(n=n!=null)?qn(e,i):zr),t=new t(r,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ll,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Pp(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&Ll.enqueueReplaceState(t,t.state,null)}function Bu(e,t,r,n){var i=e.stateNode;i.props=r,i.state=e.memoizedState,i.refs=I0,vd(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=yt(o):(o=ot(t)?rn:qe.current,i.context=qn(e,o)),co(e,r,i,n),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Ya(e,t,o,r),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Ll.enqueueReplaceState(i,i.state,null),co(e,r,i,n),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4)}var na=Array.isArray;function Ci(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(N(309));var n=r.stateNode}if(!n)throw Error(N(147,e));var i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var a=n.refs;a===I0&&(a=n.refs={}),o===null?delete a[i]:a[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(N(284));if(!r._owner)throw Error(N(290,e))}return e}function ia(e,t){if(e.type!=="textarea")throw Error(N(31,Object.prototype.toString.call(t)==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":t))}function F0(e){function t(f,h){if(e){var g=f.lastEffect;g!==null?(g.nextEffect=h,f.lastEffect=h):f.firstEffect=f.lastEffect=h,h.nextEffect=null,h.flags=8}}function r(f,h){if(!e)return null;for(;h!==null;)t(f,h),h=h.sibling;return null}function n(f,h){for(f=new Map;h!==null;)h.key!==null?f.set(h.key,h):f.set(h.index,h),h=h.sibling;return f}function i(f,h){return f=Ir(f,h),f.index=0,f.sibling=null,f}function o(f,h,g){return f.index=g,e?(g=f.alternate,g!==null?(g=g.index,g<h?(f.flags=2,h):g):(f.flags=2,h)):h}function a(f){return e&&f.alternate===null&&(f.flags=2),f}function l(f,h,g,w){return h===null||h.tag!==6?(h=qs(g,f.mode,w),h.return=f,h):(h=i(h,g),h.return=f,h)}function s(f,h,g,w){return h!==null&&h.elementType===g.type?(w=i(h,g.props),w.ref=Ci(f,h,g),w.return=f,w):(w=Pa(g.type,g.key,g.props,null,f.mode,w),w.ref=Ci(f,h,g),w.return=f,w)}function c(f,h,g,w){return h===null||h.tag!==4||h.stateNode.containerInfo!==g.containerInfo||h.stateNode.implementation!==g.implementation?(h=Qs(g,f.mode,w),h.return=f,h):(h=i(h,g.children||[]),h.return=f,h)}function d(f,h,g,w,S){return h===null||h.tag!==7?(h=Wn(g,f.mode,w,S),h.return=f,h):(h=i(h,g),h.return=f,h)}function p(f,h,g){if(typeof h=="string"||typeof h=="number")return h=qs(""+h,f.mode,g),h.return=f,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Mi:return g=Pa(h.type,h.key,h.props,null,f.mode,g),g.ref=Ci(f,null,h),g.return=f,g;case Yr:return h=Qs(h,f.mode,g),h.return=f,h}if(na(h)||yi(h))return h=Wn(h,f.mode,g,null),h.return=f,h;ia(f,h)}return null}function m(f,h,g,w){var S=h!==null?h.key:null;if(typeof g=="string"||typeof g=="number")return S!==null?null:l(f,h,""+g,w);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Mi:return g.key===S?g.type===pr?d(f,h,g.props.children,w,S):s(f,h,g,w):null;case Yr:return g.key===S?c(f,h,g,w):null}if(na(g)||yi(g))return S!==null?null:d(f,h,g,w,null);ia(f,g)}return null}function y(f,h,g,w,S){if(typeof w=="string"||typeof w=="number")return f=f.get(g)||null,l(h,f,""+w,S);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Mi:return f=f.get(w.key===null?g:w.key)||null,w.type===pr?d(h,f,w.props.children,S,w.key):s(h,f,w,S);case Yr:return f=f.get(w.key===null?g:w.key)||null,c(h,f,w,S)}if(na(w)||yi(w))return f=f.get(g)||null,d(h,f,w,S,null);ia(h,w)}return null}function x(f,h,g,w){for(var S=null,_=null,E=h,O=h=0,j=null;E!==null&&O<g.length;O++){E.index>O?(j=E,E=null):j=E.sibling;var T=m(f,E,g[O],w);if(T===null){E===null&&(E=j);break}e&&E&&T.alternate===null&&t(f,E),h=o(T,h,O),_===null?S=T:_.sibling=T,_=T,E=j}if(O===g.length)return r(f,E),S;if(E===null){for(;O<g.length;O++)E=p(f,g[O],w),E!==null&&(h=o(E,h,O),_===null?S=E:_.sibling=E,_=E);return S}for(E=n(f,E);O<g.length;O++)j=y(E,f,O,g[O],w),j!==null&&(e&&j.alternate!==null&&E.delete(j.key===null?O:j.key),h=o(j,h,O),_===null?S=j:_.sibling=j,_=j);return e&&E.forEach(function(I){return t(f,I)}),S}function v(f,h,g,w){var S=yi(g);if(typeof S!="function")throw Error(N(150));if(g=S.call(g),g==null)throw Error(N(151));for(var _=S=null,E=h,O=h=0,j=null,T=g.next();E!==null&&!T.done;O++,T=g.next()){E.index>O?(j=E,E=null):j=E.sibling;var I=m(f,E,T.value,w);if(I===null){E===null&&(E=j);break}e&&E&&I.alternate===null&&t(f,E),h=o(I,h,O),_===null?S=I:_.sibling=I,_=I,E=j}if(T.done)return r(f,E),S;if(E===null){for(;!T.done;O++,T=g.next())T=p(f,T.value,w),T!==null&&(h=o(T,h,O),_===null?S=T:_.sibling=T,_=T);return S}for(E=n(f,E);!T.done;O++,T=g.next())T=y(E,f,O,T.value,w),T!==null&&(e&&T.alternate!==null&&E.delete(T.key===null?O:T.key),h=o(T,h,O),_===null?S=T:_.sibling=T,_=T);return e&&E.forEach(function(G){return t(f,G)}),S}return function(f,h,g,w){var S=typeof g=="object"&&g!==null&&g.type===pr&&g.key===null;S&&(g=g.props.children);var _=typeof g=="object"&&g!==null;if(_)switch(g.$$typeof){case Mi:e:{for(_=g.key,S=h;S!==null;){if(S.key===_){switch(S.tag){case 7:if(g.type===pr){r(f,S.sibling),h=i(S,g.props.children),h.return=f,f=h;break e}break;default:if(S.elementType===g.type){r(f,S.sibling),h=i(S,g.props),h.ref=Ci(f,S,g),h.return=f,f=h;break e}}r(f,S);break}else t(f,S);S=S.sibling}g.type===pr?(h=Wn(g.props.children,f.mode,w,g.key),h.return=f,f=h):(w=Pa(g.type,g.key,g.props,null,f.mode,w),w.ref=Ci(f,h,g),w.return=f,f=w)}return a(f);case Yr:e:{for(S=g.key;h!==null;){if(h.key===S)if(h.tag===4&&h.stateNode.containerInfo===g.containerInfo&&h.stateNode.implementation===g.implementation){r(f,h.sibling),h=i(h,g.children||[]),h.return=f,f=h;break e}else{r(f,h);break}else t(f,h);h=h.sibling}h=Qs(g,f.mode,w),h.return=f,f=h}return a(f)}if(typeof g=="string"||typeof g=="number")return g=""+g,h!==null&&h.tag===6?(r(f,h.sibling),h=i(h,g),h.return=f,f=h):(r(f,h),h=qs(g,f.mode,w),h.return=f,f=h),a(f);if(na(g))return x(f,h,g,w);if(yi(g))return v(f,h,g,w);if(_&&ia(f,g),typeof g=="undefined"&&!S)switch(f.tag){case 1:case 22:case 0:case 11:case 15:throw Error(N(152,Mn(f.type)||"Component"))}return r(f,h)}}var qa=F0(!0),B0=F0(!1),Po={},Ft=Wr(Po),fo=Wr(Po),po=Wr(Po);function Jr(e){if(e===Po)throw Error(N(174));return e}function Wu(e,t){switch(xe(po,t),xe(fo,e),xe(Ft,Po),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Eu(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Eu(t,e)}ue(Ft),xe(Ft,t)}function Jn(){ue(Ft),ue(fo),ue(po)}function Op(e){Jr(po.current);var t=Jr(Ft.current),r=Eu(t,e.type);t!==r&&(xe(fo,e),xe(Ft,r))}function yd(e){fo.current===e&&(ue(Ft),ue(fo))}var ye=Wr(0);function Qa(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&64)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Qt=null,yr=null,Bt=!1;function W0(e,t){var r=gt(5,null,null,0);r.elementType="DELETED",r.type="DELETED",r.stateNode=t,r.return=e,r.flags=8,e.lastEffect!==null?(e.lastEffect.nextEffect=r,e.lastEffect=r):e.firstEffect=e.lastEffect=r}function Np(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,!0):!1;case 13:return!1;default:return!1}}function Uu(e){if(Bt){var t=yr;if(t){var r=t;if(!Np(e,t)){if(t=An(r.nextSibling),!t||!Np(e,t)){e.flags=e.flags&-1025|2,Bt=!1,Qt=e;return}W0(Qt,r)}Qt=e,yr=An(t.firstChild)}else e.flags=e.flags&-1025|2,Bt=!1,Qt=e}}function Tp(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Qt=e}function oa(e){if(e!==Qt)return!1;if(!Bt)return Tp(e),Bt=!0,!1;var t=e.type;if(e.tag!==5||t!=="head"&&t!=="body"&&!Au(t,e.memoizedProps))for(t=yr;t;)W0(e,t),t=An(t.nextSibling);if(Tp(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(N(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){yr=An(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}yr=null}}else yr=Qt?An(e.stateNode.nextSibling):null;return!0}function Ks(){yr=Qt=null,Bt=!1}var Dn=[];function xd(){for(var e=0;e<Dn.length;e++)Dn[e]._workInProgressVersionPrimary=null;Dn.length=0}var Ki=dn.ReactCurrentDispatcher,vt=dn.ReactCurrentBatchConfig,ho=0,be=null,Ve=null,ze=null,Ja=!1,Xi=!1;function rt(){throw Error(N(321))}function wd(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!mt(e[r],t[r]))return!1;return!0}function bd(e,t,r,n,i,o){if(ho=o,be=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ki.current=e===null||e.memoizedState===null?px:hx,e=r(n,i),Xi){o=0;do{if(Xi=!1,!(25>o))throw Error(N(301));o+=1,ze=Ve=null,t.updateQueue=null,Ki.current=mx,e=r(n,i)}while(Xi)}if(Ki.current=rl,t=Ve!==null&&Ve.next!==null,ho=0,ze=Ve=be=null,Ja=!1,t)throw Error(N(300));return e}function Zr(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ze===null?be.memoizedState=ze=e:ze=ze.next=e,ze}function pn(){if(Ve===null){var e=be.alternate;e=e!==null?e.memoizedState:null}else e=Ve.next;var t=ze===null?be.memoizedState:ze.next;if(t!==null)ze=t,Ve=e;else{if(e===null)throw Error(N(310));Ve=e,e={memoizedState:Ve.memoizedState,baseState:Ve.baseState,baseQueue:Ve.baseQueue,queue:Ve.queue,next:null},ze===null?be.memoizedState=ze=e:ze=ze.next=e}return ze}function It(e,t){return typeof t=="function"?t(e):t}function _i(e){var t=pn(),r=t.queue;if(r===null)throw Error(N(311));r.lastRenderedReducer=e;var n=Ve,i=n.baseQueue,o=r.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}n.baseQueue=i=o,r.pending=null}if(i!==null){i=i.next,n=n.baseState;var l=a=o=null,s=i;do{var c=s.lane;if((ho&c)===c)l!==null&&(l=l.next={lane:0,action:s.action,eagerReducer:s.eagerReducer,eagerState:s.eagerState,next:null}),n=s.eagerReducer===e?s.eagerState:e(n,s.action);else{var d={lane:c,action:s.action,eagerReducer:s.eagerReducer,eagerState:s.eagerState,next:null};l===null?(a=l=d,o=n):l=l.next=d,be.lanes|=c,Oo|=c}s=s.next}while(s!==null&&s!==i);l===null?o=n:l.next=a,mt(n,t.memoizedState)||(Pt=!0),t.memoizedState=n,t.baseState=o,t.baseQueue=l,r.lastRenderedState=n}return[t.memoizedState,r.dispatch]}function Ei(e){var t=pn(),r=t.queue;if(r===null)throw Error(N(311));r.lastRenderedReducer=e;var n=r.dispatch,i=r.pending,o=t.memoizedState;if(i!==null){r.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);mt(o,t.memoizedState)||(Pt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),r.lastRenderedState=o}return[o,n]}function Rp(e,t,r){var n=t._getVersion;n=n(t._source);var i=t._workInProgressVersionPrimary;if(i!==null?e=i===n:(e=e.mutableReadLanes,(e=(ho&e)===e)&&(t._workInProgressVersionPrimary=n,Dn.push(t))),e)return r(t._source);throw Dn.push(t),Error(N(350))}function U0(e,t,r,n){var i=Je;if(i===null)throw Error(N(349));var o=t._getVersion,a=o(t._source),l=Ki.current,s=l.useState(function(){return Rp(i,t,r)}),c=s[1],d=s[0];s=ze;var p=e.memoizedState,m=p.refs,y=m.getSnapshot,x=p.source;p=p.subscribe;var v=be;return e.memoizedState={refs:m,source:t,subscribe:n},l.useEffect(function(){m.getSnapshot=r,m.setSnapshot=c;var f=o(t._source);if(!mt(a,f)){f=r(t._source),mt(d,f)||(c(f),f=Er(v),i.mutableReadLanes|=f&i.pendingLanes),f=i.mutableReadLanes,i.entangledLanes|=f;for(var h=i.entanglements,g=f;0<g;){var w=31-jr(g),S=1<<w;h[w]|=f,g&=~S}}},[r,t,n]),l.useEffect(function(){return n(t._source,function(){var f=m.getSnapshot,h=m.setSnapshot;try{h(f(t._source));var g=Er(v);i.mutableReadLanes|=g&i.pendingLanes}catch(w){h(function(){throw w})}})},[t,n]),mt(y,r)&&mt(x,t)&&mt(p,n)||(e={pending:null,dispatch:null,lastRenderedReducer:It,lastRenderedState:d},e.dispatch=c=Cd.bind(null,be,e),s.queue=e,s.baseQueue=null,d=Rp(i,t,r),s.memoizedState=s.baseState=d),d}function H0(e,t,r){var n=pn();return U0(n,e,t,r)}function $i(e){var t=Zr();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e=t.queue={pending:null,dispatch:null,lastRenderedReducer:It,lastRenderedState:e},e=e.dispatch=Cd.bind(null,be,e),[t.memoizedState,e]}function Za(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=be.updateQueue,t===null?(t={lastEffect:null},be.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function Mp(e){var t=Zr();return e={current:e},t.memoizedState=e}function el(){return pn().memoizedState}function Hu(e,t,r,n){var i=Zr();be.flags|=e,i.memoizedState=Za(1|t,r,void 0,n===void 0?null:n)}function Sd(e,t,r,n){var i=pn();n=n===void 0?null:n;var o=void 0;if(Ve!==null){var a=Ve.memoizedState;if(o=a.destroy,n!==null&&wd(n,a.deps)){Za(t,r,o,n);return}}be.flags|=e,i.memoizedState=Za(1|t,r,o,n)}function Lp(e,t){return Hu(516,4,e,t)}function tl(e,t){return Sd(516,4,e,t)}function V0(e,t){return Sd(4,2,e,t)}function K0(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function X0(e,t,r){return r=r!=null?r.concat([e]):null,Sd(4,2,K0.bind(null,t,e),r)}function kd(){}function G0(e,t){var r=pn();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&wd(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function Y0(e,t){var r=pn();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&wd(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function fx(e,t){var r=Qn();nn(98>r?98:r,function(){e(!0)}),nn(97<r?97:r,function(){var n=vt.transition;vt.transition=1;try{e(!1),t()}finally{vt.transition=n}})}function Cd(e,t,r){var n=st(),i=Er(e),o={lane:i,action:r,eagerReducer:null,eagerState:null,next:null},a=t.pending;if(a===null?o.next=o:(o.next=a.next,a.next=o),t.pending=o,a=e.alternate,e===be||a!==null&&a===be)Xi=Ja=!0;else{if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var l=t.lastRenderedState,s=a(l,r);if(o.eagerReducer=a,o.eagerState=s,mt(s,l))return}catch{}finally{}$r(e,i,n)}}var rl={readContext:yt,useCallback:rt,useContext:rt,useEffect:rt,useImperativeHandle:rt,useLayoutEffect:rt,useMemo:rt,useReducer:rt,useRef:rt,useState:rt,useDebugValue:rt,useDeferredValue:rt,useTransition:rt,useMutableSource:rt,useOpaqueIdentifier:rt,unstable_isNewReconciler:!1},px={readContext:yt,useCallback:function(e,t){return Zr().memoizedState=[e,t===void 0?null:t],e},useContext:yt,useEffect:Lp,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,Hu(4,2,K0.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Hu(4,2,e,t)},useMemo:function(e,t){var r=Zr();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=Zr();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e=n.queue={pending:null,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},e=e.dispatch=Cd.bind(null,be,e),[n.memoizedState,e]},useRef:Mp,useState:$i,useDebugValue:kd,useDeferredValue:function(e){var t=$i(e),r=t[0],n=t[1];return Lp(function(){var i=vt.transition;vt.transition=1;try{n(e)}finally{vt.transition=i}},[e]),r},useTransition:function(){var e=$i(!1),t=e[0];return e=fx.bind(null,e[1]),Mp(e),[e,t]},useMutableSource:function(e,t,r){var n=Zr();return n.memoizedState={refs:{getSnapshot:t,setSnapshot:null},source:e,subscribe:r},U0(n,e,t,r)},useOpaqueIdentifier:function(){if(Bt){var e=!1,t=ax(function(){throw e||(e=!0,r("r:"+(Us++).toString(36))),Error(N(355))}),r=$i(t)[1];return(be.mode&2)===0&&(be.flags|=516,Za(5,function(){r("r:"+(Us++).toString(36))},void 0,null)),t}return t="r:"+(Us++).toString(36),$i(t),t},unstable_isNewReconciler:!1},hx={readContext:yt,useCallback:G0,useContext:yt,useEffect:tl,useImperativeHandle:X0,useLayoutEffect:V0,useMemo:Y0,useReducer:_i,useRef:el,useState:function(){return _i(It)},useDebugValue:kd,useDeferredValue:function(e){var t=_i(It),r=t[0],n=t[1];return tl(function(){var i=vt.transition;vt.transition=1;try{n(e)}finally{vt.transition=i}},[e]),r},useTransition:function(){var e=_i(It)[0];return[el().current,e]},useMutableSource:H0,useOpaqueIdentifier:function(){return _i(It)[0]},unstable_isNewReconciler:!1},mx={readContext:yt,useCallback:G0,useContext:yt,useEffect:tl,useImperativeHandle:X0,useLayoutEffect:V0,useMemo:Y0,useReducer:Ei,useRef:el,useState:function(){return Ei(It)},useDebugValue:kd,useDeferredValue:function(e){var t=Ei(It),r=t[0],n=t[1];return tl(function(){var i=vt.transition;vt.transition=1;try{n(e)}finally{vt.transition=i}},[e]),r},useTransition:function(){var e=Ei(It)[0];return[el().current,e]},useMutableSource:H0,useOpaqueIdentifier:function(){return Ei(It)[0]},unstable_isNewReconciler:!1},gx=dn.ReactCurrentOwner,Pt=!1;function nt(e,t,r,n){t.child=e===null?B0(t,null,r,n):qa(t,e.child,r,n)}function jp(e,t,r,n,i){r=r.render;var o=t.ref;return In(t,i),n=bd(e,t,r,n,o,i),e!==null&&!Pt?(t.updateQueue=e.updateQueue,t.flags&=-517,e.lanes&=~i,Jt(e,t,i)):(t.flags|=1,nt(e,t,n,i),t.child)}function zp(e,t,r,n,i,o){if(e===null){var a=r.type;return typeof a=="function"&&!Nd(a)&&a.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=a,q0(e,t,a,n,i,o)):(e=Pa(r.type,null,n,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}return a=e.child,(i&o)===0&&(i=a.memoizedProps,r=r.compare,r=r!==null?r:lo,r(i,n)&&e.ref===t.ref)?Jt(e,t,o):(t.flags|=1,e=Ir(a,n),e.ref=t.ref,e.return=t,t.child=e)}function q0(e,t,r,n,i,o){if(e!==null&&lo(e.memoizedProps,n)&&e.ref===t.ref)if(Pt=!1,(o&i)!==0)(e.flags&16384)!==0&&(Pt=!0);else return t.lanes=e.lanes,Jt(e,t,o);return Vu(e,t,r,n,o)}function Xs(e,t,r){var n=t.pendingProps,i=n.children,o=e!==null?e.memoizedState:null;if(n.mode==="hidden"||n.mode==="unstable-defer-without-hiding")if((t.mode&4)===0)t.memoizedState={baseLanes:0},la(t,r);else if((r&1073741824)!==0)t.memoizedState={baseLanes:0},la(t,o!==null?o.baseLanes:r);else return e=o!==null?o.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e},la(t,e),null;else o!==null?(n=o.baseLanes|r,t.memoizedState=null):n=r,la(t,n);return nt(e,t,i,r),t.child}function Q0(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=128)}function Vu(e,t,r,n,i){var o=ot(r)?rn:qe.current;return o=qn(t,o),In(t,i),r=bd(e,t,r,n,o,i),e!==null&&!Pt?(t.updateQueue=e.updateQueue,t.flags&=-517,e.lanes&=~i,Jt(e,t,i)):(t.flags|=1,nt(e,t,r,i),t.child)}function Ap(e,t,r,n,i){if(ot(r)){var o=!0;ka(t)}else o=!1;if(In(t,i),t.stateNode===null)e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2),D0(t,r,n),Bu(t,r,n,i),n=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var s=a.context,c=r.contextType;typeof c=="object"&&c!==null?c=yt(c):(c=ot(r)?rn:qe.current,c=qn(t,c));var d=r.getDerivedStateFromProps,p=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";p||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==n||s!==c)&&Pp(t,a,n,c),fr=!1;var m=t.memoizedState;a.state=m,co(t,n,a,i),s=t.memoizedState,l!==n||m!==s||it.current||fr?(typeof d=="function"&&(Ya(t,r,d,n),s=t.memoizedState),(l=fr||$p(t,r,l,n,m,s,c))?(p||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4)):(typeof a.componentDidMount=="function"&&(t.flags|=4),t.memoizedProps=n,t.memoizedState=s),a.props=n,a.state=s,a.context=c,n=l):(typeof a.componentDidMount=="function"&&(t.flags|=4),n=!1)}else{a=t.stateNode,A0(e,t),l=t.memoizedProps,c=t.type===t.elementType?l:Et(t.type,l),a.props=c,p=t.pendingProps,m=a.context,s=r.contextType,typeof s=="object"&&s!==null?s=yt(s):(s=ot(r)?rn:qe.current,s=qn(t,s));var y=r.getDerivedStateFromProps;(d=typeof y=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==p||m!==s)&&Pp(t,a,n,s),fr=!1,m=t.memoizedState,a.state=m,co(t,n,a,i);var x=t.memoizedState;l!==p||m!==x||it.current||fr?(typeof y=="function"&&(Ya(t,r,y,n),x=t.memoizedState),(c=fr||$p(t,r,c,n,m,x,s))?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(n,x,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(n,x,s)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=256)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=256),t.memoizedProps=n,t.memoizedState=x),a.props=n,a.state=x,a.context=s,n=c):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=256),n=!1)}return Ku(e,t,r,n,o,i)}function Ku(e,t,r,n,i,o){Q0(e,t);var a=(t.flags&64)!==0;if(!n&&!a)return i&&Sp(t,r,!1),Jt(e,t,o);n=t.stateNode,gx.current=t;var l=a&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&a?(t.child=qa(t,e.child,null,o),t.child=qa(t,null,l,o)):nt(e,t,l,o),t.memoizedState=n.state,i&&Sp(t,r,!0),t.child}function Ip(e){var t=e.stateNode;t.pendingContext?bp(e,t.pendingContext,t.pendingContext!==t.context):t.context&&bp(e,t.context,!1),Wu(e,t.containerInfo)}var aa={dehydrated:null,retryLane:0};function Dp(e,t,r){var n=t.pendingProps,i=ye.current,o=!1,a;return(a=(t.flags&64)!==0)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-65):e!==null&&e.memoizedState===null||n.fallback===void 0||n.unstable_avoidThisFallback===!0||(i|=1),xe(ye,i&1),e===null?(n.fallback!==void 0&&Uu(t),e=n.children,i=n.fallback,o?(e=Fp(t,e,i,r),t.child.memoizedState={baseLanes:r},t.memoizedState=aa,e):typeof n.unstable_expectedLoadTime=="number"?(e=Fp(t,e,i,r),t.child.memoizedState={baseLanes:r},t.memoizedState=aa,t.lanes=33554432,e):(r=Td({mode:"visible",children:e},t.mode,r,null),r.return=t,t.child=r)):e.memoizedState!==null?o?(n=Wp(e,t,n.children,n.fallback,r),o=t.child,i=e.child.memoizedState,o.memoizedState=i===null?{baseLanes:r}:{baseLanes:i.baseLanes|r},o.childLanes=e.childLanes&~r,t.memoizedState=aa,n):(r=Bp(e,t,n.children,r),t.memoizedState=null,r):o?(n=Wp(e,t,n.children,n.fallback,r),o=t.child,i=e.child.memoizedState,o.memoizedState=i===null?{baseLanes:r}:{baseLanes:i.baseLanes|r},o.childLanes=e.childLanes&~r,t.memoizedState=aa,n):(r=Bp(e,t,n.children,r),t.memoizedState=null,r)}function Fp(e,t,r,n){var i=e.mode,o=e.child;return t={mode:"hidden",children:t},(i&2)===0&&o!==null?(o.childLanes=0,o.pendingProps=t):o=Td(t,i,0,null),r=Wn(r,i,n,null),o.return=e,r.return=e,o.sibling=r,e.child=o,r}function Bp(e,t,r,n){var i=e.child;return e=i.sibling,r=Ir(i,{mode:"visible",children:r}),(t.mode&2)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(e.nextEffect=null,e.flags=8,t.firstEffect=t.lastEffect=e),t.child=r}function Wp(e,t,r,n,i){var o=t.mode,a=e.child;e=a.sibling;var l={mode:"hidden",children:r};return(o&2)===0&&t.child!==a?(r=t.child,r.childLanes=0,r.pendingProps=l,a=r.lastEffect,a!==null?(t.firstEffect=r.firstEffect,t.lastEffect=a,a.nextEffect=null):t.firstEffect=t.lastEffect=null):r=Ir(a,l),e!==null?n=Ir(e,n):(n=Wn(n,o,i,null),n.flags|=2),n.return=t,r.return=t,r.sibling=n,t.child=r,n}function Up(e,t){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),z0(e.return,t)}function Gs(e,t,r,n,i,o){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:i,lastEffect:o}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=n,a.tail=r,a.tailMode=i,a.lastEffect=o)}function Hp(e,t,r){var n=t.pendingProps,i=n.revealOrder,o=n.tail;if(nt(e,t,n.children,r),n=ye.current,(n&2)!==0)n=n&1|2,t.flags|=64;else{if(e!==null&&(e.flags&64)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Up(e,r);else if(e.tag===19)Up(e,r);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(xe(ye,n),(t.mode&2)===0)t.memoizedState=null;else switch(i){case"forwards":for(r=t.child,i=null;r!==null;)e=r.alternate,e!==null&&Qa(e)===null&&(i=r),r=r.sibling;r=i,r===null?(i=t.child,t.child=null):(i=r.sibling,r.sibling=null),Gs(t,!1,i,r,o,t.lastEffect);break;case"backwards":for(r=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Qa(e)===null){t.child=i;break}e=i.sibling,i.sibling=r,r=i,i=e}Gs(t,!0,r,null,o,t.lastEffect);break;case"together":Gs(t,!1,null,null,void 0,t.lastEffect);break;default:t.memoizedState=null}return t.child}function Jt(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),Oo|=t.lanes,(r&t.childLanes)!==0){if(e!==null&&t.child!==e.child)throw Error(N(153));if(t.child!==null){for(e=t.child,r=Ir(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=Ir(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}return null}var J0,Xu,Z0,eg;J0=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};Xu=function(){};Z0=function(e,t,r,n){var i=e.memoizedProps;if(i!==n){e=t.stateNode,Jr(Ft.current);var o=null;switch(r){case"input":i=wu(e,i),n=wu(e,n),o=[];break;case"option":i=ku(e,i),n=ku(e,n),o=[];break;case"select":i=fe({},i,{value:void 0}),n=fe({},n,{value:void 0}),o=[];break;case"textarea":i=Cu(e,i),n=Cu(e,n),o=[];break;default:typeof i.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=Ua)}$u(r,n);var a;r=null;for(c in i)if(!n.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(a in l)l.hasOwnProperty(a)&&(r||(r={}),r[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(eo.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in n){var s=n[c];if(l=i!=null?i[c]:void 0,n.hasOwnProperty(c)&&s!==l&&(s!=null||l!=null))if(c==="style")if(l){for(a in l)!l.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(r||(r={}),r[a]="");for(a in s)s.hasOwnProperty(a)&&l[a]!==s[a]&&(r||(r={}),r[a]=s[a])}else r||(o||(o=[]),o.push(c,r)),r=s;else c==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(o=o||[]).push(c,s)):c==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(eo.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&se("scroll",e),o||l===s||(o=[])):typeof s=="object"&&s!==null&&s.$$typeof===Qc?s.toString():(o=o||[]).push(c,s))}r&&(o=o||[]).push("style",r);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};eg=function(e,t,r,n){r!==n&&(t.flags|=4)};function Pi(e,t){if(!Bt)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function vx(e,t,r){var n=t.pendingProps;switch(t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return ot(t.type)&&Va(),null;case 3:return Jn(),ue(it),ue(qe),xd(),n=t.stateNode,n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(oa(t)?t.flags|=4:n.hydrate||(t.flags|=256)),Xu(t),null;case 5:yd(t);var i=Jr(po.current);if(r=t.type,e!==null&&t.stateNode!=null)Z0(e,t,r,n,i),e.ref!==t.ref&&(t.flags|=128);else{if(!n){if(t.stateNode===null)throw Error(N(166));return null}if(e=Jr(Ft.current),oa(t)){n=t.stateNode,r=t.type;var o=t.memoizedProps;switch(n[vr]=t,n[Ha]=o,r){case"dialog":se("cancel",n),se("close",n);break;case"iframe":case"object":case"embed":se("load",n);break;case"video":case"audio":for(e=0;e<ji.length;e++)se(ji[e],n);break;case"source":se("error",n);break;case"img":case"image":case"link":se("error",n),se("load",n);break;case"details":se("toggle",n);break;case"input":Hf(n,o),se("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!o.multiple},se("invalid",n);break;case"textarea":Kf(n,o),se("invalid",n)}$u(r,o),e=null;for(var a in o)o.hasOwnProperty(a)&&(i=o[a],a==="children"?typeof i=="string"?n.textContent!==i&&(e=["children",i]):typeof i=="number"&&n.textContent!==""+i&&(e=["children",""+i]):eo.hasOwnProperty(a)&&i!=null&&a==="onScroll"&&se("scroll",n));switch(r){case"input":Zo(n),Vf(n,o,!0);break;case"textarea":Zo(n),Xf(n);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(n.onclick=Ua)}n=e,t.updateQueue=n,n!==null&&(t.flags|=4)}else{switch(a=i.nodeType===9?i:i.ownerDocument,e===_u.html&&(e=Xm(r)),e===_u.html?r==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=a.createElement(r,{is:n.is}):(e=a.createElement(r),r==="select"&&(a=e,n.multiple?a.multiple=!0:n.size&&(a.size=n.size))):e=a.createElementNS(e,r),e[vr]=t,e[Ha]=n,J0(e,t,!1,!1),t.stateNode=e,a=Pu(r,n),r){case"dialog":se("cancel",e),se("close",e),i=n;break;case"iframe":case"object":case"embed":se("load",e),i=n;break;case"video":case"audio":for(i=0;i<ji.length;i++)se(ji[i],e);i=n;break;case"source":se("error",e),i=n;break;case"img":case"image":case"link":se("error",e),se("load",e),i=n;break;case"details":se("toggle",e),i=n;break;case"input":Hf(e,n),i=wu(e,n),se("invalid",e);break;case"option":i=ku(e,n);break;case"select":e._wrapperState={wasMultiple:!!n.multiple},i=fe({},n,{value:void 0}),se("invalid",e);break;case"textarea":Kf(e,n),i=Cu(e,n),se("invalid",e);break;default:i=n}$u(r,i);var l=i;for(o in l)if(l.hasOwnProperty(o)){var s=l[o];o==="style"?qm(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Gm(e,s)):o==="children"?typeof s=="string"?(r!=="textarea"||s!=="")&&to(e,s):typeof s=="number"&&to(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(eo.hasOwnProperty(o)?s!=null&&o==="onScroll"&&se("scroll",e):s!=null&&Vc(e,o,s,a))}switch(r){case"input":Zo(e),Vf(e,n,!1);break;case"textarea":Zo(e),Xf(e);break;case"option":n.value!=null&&e.setAttribute("value",""+Lr(n.value));break;case"select":e.multiple=!!n.multiple,o=n.value,o!=null?Ln(e,!!n.multiple,o,!1):n.defaultValue!=null&&Ln(e,!!n.multiple,n.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ua)}$0(r,n)&&(t.flags|=4)}t.ref!==null&&(t.flags|=128)}return null;case 6:if(e&&t.stateNode!=null)eg(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(N(166));r=Jr(po.current),Jr(Ft.current),oa(t)?(n=t.stateNode,r=t.memoizedProps,n[vr]=t,n.nodeValue!==r&&(t.flags|=4)):(n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[vr]=t,t.stateNode=n)}return null;case 13:return ue(ye),n=t.memoizedState,(t.flags&64)!==0?(t.lanes=r,t):(n=n!==null,r=!1,e===null?t.memoizedProps.fallback!==void 0&&oa(t):r=e.memoizedState!==null,n&&!r&&(t.mode&2)!==0&&(e===null&&t.memoizedProps.unstable_avoidThisFallback!==!0||(ye.current&1)!==0?Ie===0&&(Ie=3):((Ie===0||Ie===3)&&(Ie=4),Je===null||(Oo&134217727)===0&&(si&134217727)===0||Fn(Je,Ye))),(n||r)&&(t.flags|=4),null);case 4:return Jn(),Xu(t),e===null&&C0(t.stateNode.containerInfo),null;case 10:return gd(t),null;case 17:return ot(t.type)&&Va(),null;case 19:if(ue(ye),n=t.memoizedState,n===null)return null;if(o=(t.flags&64)!==0,a=n.rendering,a===null)if(o)Pi(n,!1);else{if(Ie!==0||e!==null&&(e.flags&64)!==0)for(e=t.child;e!==null;){if(a=Qa(e),a!==null){for(t.flags|=64,Pi(n,!1),o=a.updateQueue,o!==null&&(t.updateQueue=o,t.flags|=4),n.lastEffect===null&&(t.firstEffect=null),t.lastEffect=n.lastEffect,n=r,r=t.child;r!==null;)o=r,e=n,o.flags&=2,o.nextEffect=null,o.firstEffect=null,o.lastEffect=null,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return xe(ye,ye.current&1|2),t.child}e=e.sibling}n.tail!==null&&Xe()>Zu&&(t.flags|=64,o=!0,Pi(n,!1),t.lanes=33554432)}else{if(!o)if(e=Qa(a),e!==null){if(t.flags|=64,o=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),Pi(n,!0),n.tail===null&&n.tailMode==="hidden"&&!a.alternate&&!Bt)return t=t.lastEffect=n.lastEffect,t!==null&&(t.nextEffect=null),null}else 2*Xe()-n.renderingStartTime>Zu&&r!==1073741824&&(t.flags|=64,o=!0,Pi(n,!1),t.lanes=33554432);n.isBackwards?(a.sibling=t.child,t.child=a):(r=n.last,r!==null?r.sibling=a:t.child=a,n.last=a)}return n.tail!==null?(r=n.tail,n.rendering=r,n.tail=r.sibling,n.lastEffect=t.lastEffect,n.renderingStartTime=Xe(),r.sibling=null,t=ye.current,xe(ye,o?t&1|2:t&1),r):null;case 23:case 24:return Od(),e!==null&&e.memoizedState!==null!=(t.memoizedState!==null)&&n.mode!=="unstable-defer-without-hiding"&&(t.flags|=4),null}throw Error(N(156,t.tag))}function yx(e){switch(e.tag){case 1:ot(e.type)&&Va();var t=e.flags;return t&4096?(e.flags=t&-4097|64,e):null;case 3:if(Jn(),ue(it),ue(qe),xd(),t=e.flags,(t&64)!==0)throw Error(N(285));return e.flags=t&-4097|64,e;case 5:return yd(e),null;case 13:return ue(ye),t=e.flags,t&4096?(e.flags=t&-4097|64,e):null;case 19:return ue(ye),null;case 4:return Jn(),null;case 10:return gd(e),null;case 23:case 24:return Od(),null;default:return null}}function _d(e,t){try{var r="",n=t;do r+=Jv(n),n=n.return;while(n);var i=r}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i}}function Gu(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var xx=typeof WeakMap=="function"?WeakMap:Map;function tg(e,t,r){r=Cr(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){il||(il=!0,ec=n),Gu(e,t)},r}function rg(e,t,r){r=Cr(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var i=t.value;r.payload=function(){return Gu(e,t),n(i)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(r.callback=function(){typeof n!="function"&&(Dt===null?Dt=new Set([this]):Dt.add(this),Gu(e,t));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),r}var wx=typeof WeakSet=="function"?WeakSet:Set;function Vp(e){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){Pr(e,r)}else t.current=null}function bx(e,t){switch(t.tag){case 0:case 11:case 15:case 22:return;case 1:if(t.flags&256&&e!==null){var r=e.memoizedProps,n=e.memoizedState;e=t.stateNode,t=e.getSnapshotBeforeUpdate(t.elementType===t.type?r:Et(t.type,r),n),e.__reactInternalSnapshotBeforeUpdate=t}return;case 3:t.flags&256&&fd(t.stateNode.containerInfo);return;case 5:case 6:case 4:case 17:return}throw Error(N(163))}function Sx(e,t,r){switch(r.tag){case 0:case 11:case 15:case 22:if(t=r.updateQueue,t=t!==null?t.lastEffect:null,t!==null){e=t=t.next;do{if((e.tag&3)===3){var n=e.create;e.destroy=n()}e=e.next}while(e!==t)}if(t=r.updateQueue,t=t!==null?t.lastEffect:null,t!==null){e=t=t.next;do{var i=e;n=i.next,i=i.tag,(i&4)!==0&&(i&1)!==0&&(dg(r,e),Nx(r,e)),e=n}while(e!==t)}return;case 1:e=r.stateNode,r.flags&4&&(t===null?e.componentDidMount():(n=r.elementType===r.type?t.memoizedProps:Et(r.type,t.memoizedProps),e.componentDidUpdate(n,t.memoizedState,e.__reactInternalSnapshotBeforeUpdate))),t=r.updateQueue,t!==null&&Ep(r,t,e);return;case 3:if(t=r.updateQueue,t!==null){if(e=null,r.child!==null)switch(r.child.tag){case 5:e=r.child.stateNode;break;case 1:e=r.child.stateNode}Ep(r,t,e)}return;case 5:e=r.stateNode,t===null&&r.flags&4&&$0(r.type,r.memoizedProps)&&e.focus();return;case 6:return;case 4:return;case 12:return;case 13:r.memoizedState===null&&(r=r.alternate,r!==null&&(r=r.memoizedState,r!==null&&(r=r.dehydrated,r!==null&&a0(r))));return;case 19:case 17:case 20:case 21:case 23:case 24:return}throw Error(N(163))}function Kp(e,t){for(var r=e;;){if(r.tag===5){var n=r.stateNode;if(t)n=n.style,typeof n.setProperty=="function"?n.setProperty("display","none","important"):n.display="none";else{n=r.stateNode;var i=r.memoizedProps.style;i=i!=null&&i.hasOwnProperty("display")?i.display:null,n.style.display=Ym("display",i)}}else if(r.tag===6)r.stateNode.nodeValue=t?"":r.memoizedProps;else if((r.tag!==23&&r.tag!==24||r.memoizedState===null||r===e)&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return;r=r.return}r.sibling.return=r.return,r=r.sibling}}function Xp(e,t){if(en&&typeof en.onCommitFiberUnmount=="function")try{en.onCommitFiberUnmount(pd,t)}catch{}switch(t.tag){case 0:case 11:case 14:case 15:case 22:if(e=t.updateQueue,e!==null&&(e=e.lastEffect,e!==null)){var r=e=e.next;do{var n=r,i=n.destroy;if(n=n.tag,i!==void 0)if((n&4)!==0)dg(t,r);else{n=t;try{i()}catch(o){Pr(n,o)}}r=r.next}while(r!==e)}break;case 1:if(Vp(t),e=t.stateNode,typeof e.componentWillUnmount=="function")try{e.props=t.memoizedProps,e.state=t.memoizedState,e.componentWillUnmount()}catch(o){Pr(t,o)}break;case 5:Vp(t);break;case 4:ng(e,t)}}function Gp(e){e.alternate=null,e.child=null,e.dependencies=null,e.firstEffect=null,e.lastEffect=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.return=null,e.updateQueue=null}function Yp(e){return e.tag===5||e.tag===3||e.tag===4}function qp(e){e:{for(var t=e.return;t!==null;){if(Yp(t))break e;t=t.return}throw Error(N(160))}var r=t;switch(t=r.stateNode,r.tag){case 5:var n=!1;break;case 3:t=t.containerInfo,n=!0;break;case 4:t=t.containerInfo,n=!0;break;default:throw Error(N(161))}r.flags&16&&(to(t,""),r.flags&=-17);e:t:for(r=e;;){for(;r.sibling===null;){if(r.return===null||Yp(r.return)){r=null;break e}r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue t;r.child.return=r,r=r.child}if(!(r.flags&2)){r=r.stateNode;break e}}n?Yu(e,r,t):qu(e,r,t)}function Yu(e,t,r){var n=e.tag,i=n===5||n===6;if(i)e=i?e.stateNode:e.stateNode.instance,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=Ua));else if(n!==4&&(e=e.child,e!==null))for(Yu(e,t,r),e=e.sibling;e!==null;)Yu(e,t,r),e=e.sibling}function qu(e,t,r){var n=e.tag,i=n===5||n===6;if(i)e=i?e.stateNode:e.stateNode.instance,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(qu(e,t,r),e=e.sibling;e!==null;)qu(e,t,r),e=e.sibling}function ng(e,t){for(var r=t,n=!1,i,o;;){if(!n){n=r.return;e:for(;;){if(n===null)throw Error(N(160));switch(i=n.stateNode,n.tag){case 5:o=!1;break e;case 3:i=i.containerInfo,o=!0;break e;case 4:i=i.containerInfo,o=!0;break e}n=n.return}n=!0}if(r.tag===5||r.tag===6){e:for(var a=e,l=r,s=l;;)if(Xp(a,s),s.child!==null&&s.tag!==4)s.child.return=s,s=s.child;else{if(s===l)break e;for(;s.sibling===null;){if(s.return===null||s.return===l)break e;s=s.return}s.sibling.return=s.return,s=s.sibling}o?(a=i,l=r.stateNode,a.nodeType===8?a.parentNode.removeChild(l):a.removeChild(l)):i.removeChild(r.stateNode)}else if(r.tag===4){if(r.child!==null){i=r.stateNode.containerInfo,o=!0,r.child.return=r,r=r.child;continue}}else if(Xp(e,r),r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return,r.tag===4&&(n=!1)}r.sibling.return=r.return,r=r.sibling}}function Ys(e,t){switch(t.tag){case 0:case 11:case 14:case 15:case 22:var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var n=r=r.next;do(n.tag&3)===3&&(e=n.destroy,n.destroy=void 0,e!==void 0&&e()),n=n.next;while(n!==r)}return;case 1:return;case 5:if(r=t.stateNode,r!=null){n=t.memoizedProps;var i=e!==null?e.memoizedProps:n;e=t.type;var o=t.updateQueue;if(t.updateQueue=null,o!==null){for(r[Ha]=n,e==="input"&&n.type==="radio"&&n.name!=null&&Vm(r,n),Pu(e,i),t=Pu(e,n),i=0;i<o.length;i+=2){var a=o[i],l=o[i+1];a==="style"?qm(r,l):a==="dangerouslySetInnerHTML"?Gm(r,l):a==="children"?to(r,l):Vc(r,a,l,t)}switch(e){case"input":bu(r,n);break;case"textarea":Km(r,n);break;case"select":e=r._wrapperState.wasMultiple,r._wrapperState.wasMultiple=!!n.multiple,o=n.value,o!=null?Ln(r,!!n.multiple,o,!1):e!==!!n.multiple&&(n.defaultValue!=null?Ln(r,!!n.multiple,n.defaultValue,!0):Ln(r,!!n.multiple,n.multiple?[]:"",!1))}}}return;case 6:if(t.stateNode===null)throw Error(N(162));t.stateNode.nodeValue=t.memoizedProps;return;case 3:r=t.stateNode,r.hydrate&&(r.hydrate=!1,a0(r.containerInfo));return;case 12:return;case 13:t.memoizedState!==null&&(Pd=Xe(),Kp(t.child,!0)),Qp(t);return;case 19:Qp(t);return;case 17:return;case 23:case 24:Kp(t,t.memoizedState!==null);return}throw Error(N(163))}function Qp(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new wx),t.forEach(function(n){var i=Mx.bind(null,e,n);r.has(n)||(r.add(n),n.then(i,i))})}}function kx(e,t){return e!==null&&(e=e.memoizedState,e===null||e.dehydrated!==null)?(t=t.memoizedState,t!==null&&t.dehydrated===null):!1}var Cx=Math.ceil,nl=dn.ReactCurrentDispatcher,Ed=dn.ReactCurrentOwner,F=0,Je=null,$e=null,Ye=0,on=0,Qu=Wr(0),Ie=0,jl=null,li=0,Oo=0,si=0,$d=0,Ju=null,Pd=0,Zu=1/0;function ui(){Zu=Xe()+500}var z=null,il=!1,ec=null,Dt=null,Ar=!1,Gi=null,zi=90,tc=[],rc=[],Zt=null,Yi=0,nc=null,_a=-1,qt=0,Ea=0,qi=null,$a=!1;function st(){return(F&48)!==0?Xe():_a!==-1?_a:_a=Xe()}function Er(e){if(e=e.mode,(e&2)===0)return 1;if((e&4)===0)return Qn()===99?1:2;if(qt===0&&(qt=li),dx.transition!==0){Ea!==0&&(Ea=Ju!==null?Ju.pendingLanes:0),e=qt;var t=4186112&~Ea;return t&=-t,t===0&&(e=4186112&~e,t=e&-e,t===0&&(t=8192)),t}return e=Qn(),(F&4)!==0&&e===98?e=Ba(12,qt):(e=hy(e),e=Ba(e,qt)),e}function $r(e,t,r){if(50<Yi)throw Yi=0,nc=null,Error(N(185));if(e=zl(e,t),e===null)return null;Pl(e,t,r),e===Je&&(si|=t,Ie===4&&Fn(e,Ye));var n=Qn();t===1?(F&8)!==0&&(F&48)===0?ic(e):(xt(e,r),F===0&&(ui(),Vt())):((F&4)===0||n!==98&&n!==99||(Zt===null?Zt=new Set([e]):Zt.add(e)),xt(e,r)),Ju=e}function zl(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}function xt(e,t){for(var r=e.callbackNode,n=e.suspendedLanes,i=e.pingedLanes,o=e.expirationTimes,a=e.pendingLanes;0<a;){var l=31-jr(a),s=1<<l,c=o[l];if(c===-1){if((s&n)===0||(s&i)!==0){c=t,Cn(s);var d=le;o[l]=10<=d?c+250:6<=d?c+5e3:-1}}else c<=t&&(e.expiredLanes|=s);a&=~s}if(n=oo(e,e===Je?Ye:0),t=le,n===0)r!==null&&(r!==Hs&&Du(r),e.callbackNode=null,e.callbackPriority=0);else{if(r!==null){if(e.callbackPriority===t)return;r!==Hs&&Du(r)}t===15?(r=ic.bind(null,e),Yt===null?(Yt=[r],Ca=hd(Ml,j0)):Yt.push(r),r=Hs):t===14?r=uo(99,ic.bind(null,e)):(r=my(t),r=uo(r,ig.bind(null,e))),e.callbackPriority=t,e.callbackNode=r}}function ig(e){if(_a=-1,Ea=qt=0,(F&48)!==0)throw Error(N(327));var t=e.callbackNode;if(Ur()&&e.callbackNode!==t)return null;var r=oo(e,e===Je?Ye:0);if(r===0)return null;var n=r,i=F;F|=16;var o=sg();(Je!==e||Ye!==n)&&(ui(),Bn(e,n));do try{$x();break}catch(l){lg(e,l)}while(1);if(md(),nl.current=o,F=i,$e!==null?n=0:(Je=null,Ye=0,n=Ie),(li&si)!==0)Bn(e,0);else if(n!==0){if(n===2&&(F|=64,e.hydrate&&(e.hydrate=!1,fd(e.containerInfo)),r=p0(e),r!==0&&(n=Ai(e,r))),n===1)throw t=jl,Bn(e,0),Fn(e,r),xt(e,Xe()),t;switch(e.finishedWork=e.current.alternate,e.finishedLanes=r,n){case 0:case 1:throw Error(N(345));case 2:Kr(e);break;case 3:if(Fn(e,r),(r&62914560)===r&&(n=Pd+500-Xe(),10<n)){if(oo(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){st(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=yp(Kr.bind(null,e),n);break}Kr(e);break;case 4:if(Fn(e,r),(r&4186112)===r)break;for(n=e.eventTimes,i=-1;0<r;){var a=31-jr(r);o=1<<a,a=n[a],a>i&&(i=a),r&=~o}if(r=i,r=Xe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Cx(r/1960))-r,10<r){e.timeoutHandle=yp(Kr.bind(null,e),r);break}Kr(e);break;case 5:Kr(e);break;default:throw Error(N(329))}}return xt(e,Xe()),e.callbackNode===t?ig.bind(null,e):null}function Fn(e,t){for(t&=~$d,t&=~si,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-jr(t),n=1<<r;e[r]=-1,t&=~n}}function ic(e){if((F&48)!==0)throw Error(N(327));if(Ur(),e===Je&&(e.expiredLanes&Ye)!==0){var t=Ye,r=Ai(e,t);(li&si)!==0&&(t=oo(e,t),r=Ai(e,t))}else t=oo(e,0),r=Ai(e,t);if(e.tag!==0&&r===2&&(F|=64,e.hydrate&&(e.hydrate=!1,fd(e.containerInfo)),t=p0(e),t!==0&&(r=Ai(e,t))),r===1)throw r=jl,Bn(e,0),Fn(e,t),xt(e,Xe()),r;return e.finishedWork=e.current.alternate,e.finishedLanes=t,Kr(e),xt(e,Xe()),null}function _x(){if(Zt!==null){var e=Zt;Zt=null,e.forEach(function(t){t.expiredLanes|=24&t.pendingLanes,xt(t,Xe())})}Vt()}function og(e,t){var r=F;F|=1;try{return e(t)}finally{F=r,F===0&&(ui(),Vt())}}function ag(e,t){var r=F;F&=-2,F|=8;try{return e(t)}finally{F=r,F===0&&(ui(),Vt())}}function la(e,t){xe(Qu,on),on|=t,li|=t}function Od(){on=Qu.current,ue(Qu)}function Bn(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,ox(r)),$e!==null)for(r=$e.return;r!==null;){var n=r;switch(n.tag){case 1:n=n.type.childContextTypes,n!=null&&Va();break;case 3:Jn(),ue(it),ue(qe),xd();break;case 5:yd(n);break;case 4:Jn();break;case 13:ue(ye);break;case 19:ue(ye);break;case 10:gd(n);break;case 23:case 24:Od()}r=r.return}Je=e,$e=Ir(e.current,null),Ye=on=li=t,Ie=0,jl=null,$d=si=Oo=0}function lg(e,t){do{var r=$e;try{if(md(),Ki.current=rl,Ja){for(var n=be.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}Ja=!1}if(ho=0,ze=Ve=be=null,Xi=!1,Ed.current=null,r===null||r.return===null){Ie=1,jl=t,$e=null;break}e:{var o=e,a=r.return,l=r,s=t;if(t=Ye,l.flags|=2048,l.firstEffect=l.lastEffect=null,s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=s;if((l.mode&2)===0){var d=l.alternate;d?(l.updateQueue=d.updateQueue,l.memoizedState=d.memoizedState,l.lanes=d.lanes):(l.updateQueue=null,l.memoizedState=null)}var p=(ye.current&1)!==0,m=a;do{var y;if(y=m.tag===13){var x=m.memoizedState;if(x!==null)y=x.dehydrated!==null;else{var v=m.memoizedProps;y=v.fallback===void 0?!1:v.unstable_avoidThisFallback!==!0?!0:!p}}if(y){var f=m.updateQueue;if(f===null){var h=new Set;h.add(c),m.updateQueue=h}else f.add(c);if((m.mode&2)===0){if(m.flags|=64,l.flags|=16384,l.flags&=-2981,l.tag===1)if(l.alternate===null)l.tag=17;else{var g=Cr(-1,1);g.tag=2,_r(l,g)}l.lanes|=1;break e}s=void 0,l=t;var w=o.pingCache;if(w===null?(w=o.pingCache=new xx,s=new Set,w.set(c,s)):(s=w.get(c),s===void 0&&(s=new Set,w.set(c,s))),!s.has(l)){s.add(l);var S=Rx.bind(null,o,c,l);c.then(S,S)}m.flags|=4096,m.lanes=t;break e}m=m.return}while(m!==null);s=Error((Mn(l.type)||"A React component")+` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`)}Ie!==5&&(Ie=2),s=_d(s,l),m=a;do{switch(m.tag){case 3:o=s,m.flags|=4096,t&=-t,m.lanes|=t;var _=tg(m,o,t);_p(m,_);break e;case 1:o=s;var E=m.type,O=m.stateNode;if((m.flags&64)===0&&(typeof E.getDerivedStateFromError=="function"||O!==null&&typeof O.componentDidCatch=="function"&&(Dt===null||!Dt.has(O)))){m.flags|=4096,t&=-t,m.lanes|=t;var j=rg(m,o,t);_p(m,j);break e}}m=m.return}while(m!==null)}cg(r)}catch(T){t=T,$e===r&&r!==null&&($e=r=r.return);continue}break}while(1)}function sg(){var e=nl.current;return nl.current=rl,e===null?rl:e}function Ai(e,t){var r=F;F|=16;var n=sg();Je===e&&Ye===t||Bn(e,t);do try{Ex();break}catch(i){lg(e,i)}while(1);if(md(),F=r,nl.current=n,$e!==null)throw Error(N(261));return Je=null,Ye=0,Ie}function Ex(){for(;$e!==null;)ug($e)}function $x(){for(;$e!==null&&!sx();)ug($e)}function ug(e){var t=fg(e.alternate,e,on);e.memoizedProps=e.pendingProps,t===null?cg(e):$e=t,Ed.current=null}function cg(e){var t=e;do{var r=t.alternate;if(e=t.return,(t.flags&2048)===0){if(r=vx(r,t,on),r!==null){$e=r;return}if(r=t,r.tag!==24&&r.tag!==23||r.memoizedState===null||(on&1073741824)!==0||(r.mode&4)===0){for(var n=0,i=r.child;i!==null;)n|=i.lanes|i.childLanes,i=i.sibling;r.childLanes=n}e!==null&&(e.flags&2048)===0&&(e.firstEffect===null&&(e.firstEffect=t.firstEffect),t.lastEffect!==null&&(e.lastEffect!==null&&(e.lastEffect.nextEffect=t.firstEffect),e.lastEffect=t.lastEffect),1<t.flags&&(e.lastEffect!==null?e.lastEffect.nextEffect=t:e.firstEffect=t,e.lastEffect=t))}else{if(r=yx(t),r!==null){r.flags&=2047,$e=r;return}e!==null&&(e.firstEffect=e.lastEffect=null,e.flags|=2048)}if(t=t.sibling,t!==null){$e=t;return}$e=t=e}while(t!==null);Ie===0&&(Ie=5)}function Kr(e){var t=Qn();return nn(99,Px.bind(null,e,t)),null}function Px(e,t){do Ur();while(Gi!==null);if((F&48)!==0)throw Error(N(327));var r=e.finishedWork;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(N(177));e.callbackNode=null;var n=r.lanes|r.childLanes,i=n,o=e.pendingLanes&~i;e.pendingLanes=i,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=i,e.mutableReadLanes&=i,e.entangledLanes&=i,i=e.entanglements;for(var a=e.eventTimes,l=e.expirationTimes;0<o;){var s=31-jr(o),c=1<<s;i[s]=0,a[s]=-1,l[s]=-1,o&=~c}if(Zt!==null&&(n&24)===0&&Zt.has(e)&&Zt.delete(e),e===Je&&($e=Je=null,Ye=0),1<r.flags?r.lastEffect!==null?(r.lastEffect.nextEffect=r,n=r.firstEffect):n=r:n=r.firstEffect,n!==null){if(i=F,F|=32,Ed.current=null,Bs=wa,a=dp(),Lu(a)){if("selectionStart"in a)l={start:a.selectionStart,end:a.selectionEnd};else e:if(l=(l=a.ownerDocument)&&l.defaultView||window,(c=l.getSelection&&l.getSelection())&&c.rangeCount!==0){l=c.anchorNode,o=c.anchorOffset,s=c.focusNode,c=c.focusOffset;try{l.nodeType,s.nodeType}catch{l=null;break e}var d=0,p=-1,m=-1,y=0,x=0,v=a,f=null;t:for(;;){for(var h;v!==l||o!==0&&v.nodeType!==3||(p=d+o),v!==s||c!==0&&v.nodeType!==3||(m=d+c),v.nodeType===3&&(d+=v.nodeValue.length),(h=v.firstChild)!==null;)f=v,v=h;for(;;){if(v===a)break t;if(f===l&&++y===o&&(p=d),f===s&&++x===c&&(m=d),(h=v.nextSibling)!==null)break;v=f,f=v.parentNode}v=h}l=p===-1||m===-1?null:{start:p,end:m}}else l=null;l=l||{start:0,end:0}}else l=null;Ws={focusedElem:a,selectionRange:l},wa=!1,qi=null,$a=!1,z=n;do try{Ox()}catch(T){if(z===null)throw Error(N(330));Pr(z,T),z=z.nextEffect}while(z!==null);qi=null,z=n;do try{for(a=e;z!==null;){var g=z.flags;if(g&16&&to(z.stateNode,""),g&128){var w=z.alternate;if(w!==null){var S=w.ref;S!==null&&(typeof S=="function"?S(null):S.current=null)}}switch(g&1038){case 2:qp(z),z.flags&=-3;break;case 6:qp(z),z.flags&=-3,Ys(z.alternate,z);break;case 1024:z.flags&=-1025;break;case 1028:z.flags&=-1025,Ys(z.alternate,z);break;case 4:Ys(z.alternate,z);break;case 8:l=z,ng(a,l);var _=l.alternate;Gp(l),_!==null&&Gp(_)}z=z.nextEffect}}catch(T){if(z===null)throw Error(N(330));Pr(z,T),z=z.nextEffect}while(z!==null);if(S=Ws,w=dp(),g=S.focusedElem,a=S.selectionRange,w!==g&&g&&g.ownerDocument&&b0(g.ownerDocument.documentElement,g)){for(a!==null&&Lu(g)&&(w=a.start,S=a.end,S===void 0&&(S=w),"selectionStart"in g?(g.selectionStart=w,g.selectionEnd=Math.min(S,g.value.length)):(S=(w=g.ownerDocument||document)&&w.defaultView||window,S.getSelection&&(S=S.getSelection(),l=g.textContent.length,_=Math.min(a.start,l),a=a.end===void 0?_:Math.min(a.end,l),!S.extend&&_>a&&(l=a,a=_,_=l),l=cp(g,_),o=cp(g,a),l&&o&&(S.rangeCount!==1||S.anchorNode!==l.node||S.anchorOffset!==l.offset||S.focusNode!==o.node||S.focusOffset!==o.offset)&&(w=w.createRange(),w.setStart(l.node,l.offset),S.removeAllRanges(),_>a?(S.addRange(w),S.extend(o.node,o.offset)):(w.setEnd(o.node,o.offset),S.addRange(w)))))),w=[],S=g;S=S.parentNode;)S.nodeType===1&&w.push({element:S,left:S.scrollLeft,top:S.scrollTop});for(typeof g.focus=="function"&&g.focus(),g=0;g<w.length;g++)S=w[g],S.element.scrollLeft=S.left,S.element.scrollTop=S.top}wa=!!Bs,Ws=Bs=null,e.current=r,z=n;do try{for(g=e;z!==null;){var E=z.flags;if(E&36&&Sx(g,z.alternate,z),E&128){w=void 0;var O=z.ref;if(O!==null){var j=z.stateNode;switch(z.tag){case 5:w=j;break;default:w=j}typeof O=="function"?O(w):O.current=w}}z=z.nextEffect}}catch(T){if(z===null)throw Error(N(330));Pr(z,T),z=z.nextEffect}while(z!==null);z=null,cx(),F=i}else e.current=r;if(Ar)Ar=!1,Gi=e,zi=t;else for(z=n;z!==null;)t=z.nextEffect,z.nextEffect=null,z.flags&8&&(E=z,E.sibling=null,E.stateNode=null),z=t;if(n=e.pendingLanes,n===0&&(Dt=null),n===1?e===nc?Yi++:(Yi=0,nc=e):Yi=0,r=r.stateNode,en&&typeof en.onCommitFiberRoot=="function")try{en.onCommitFiberRoot(pd,r,void 0,(r.current.flags&64)===64)}catch{}if(xt(e,Xe()),il)throw il=!1,e=ec,ec=null,e;return(F&8)!==0||Vt(),null}function Ox(){for(;z!==null;){var e=z.alternate;$a||qi===null||((z.flags&8)!==0?qf(z,qi)&&($a=!0):z.tag===13&&kx(e,z)&&qf(z,qi)&&($a=!0));var t=z.flags;(t&256)!==0&&bx(e,z),(t&512)===0||Ar||(Ar=!0,uo(97,function(){return Ur(),null})),z=z.nextEffect}}function Ur(){if(zi!==90){var e=97<zi?97:zi;return zi=90,nn(e,Tx)}return!1}function Nx(e,t){tc.push(t,e),Ar||(Ar=!0,uo(97,function(){return Ur(),null}))}function dg(e,t){rc.push(t,e),Ar||(Ar=!0,uo(97,function(){return Ur(),null}))}function Tx(){if(Gi===null)return!1;var e=Gi;if(Gi=null,(F&48)!==0)throw Error(N(331));var t=F;F|=32;var r=rc;rc=[];for(var n=0;n<r.length;n+=2){var i=r[n],o=r[n+1],a=i.destroy;if(i.destroy=void 0,typeof a=="function")try{a()}catch(s){if(o===null)throw Error(N(330));Pr(o,s)}}for(r=tc,tc=[],n=0;n<r.length;n+=2){i=r[n],o=r[n+1];try{var l=i.create;i.destroy=l()}catch(s){if(o===null)throw Error(N(330));Pr(o,s)}}for(l=e.current.firstEffect;l!==null;)e=l.nextEffect,l.nextEffect=null,l.flags&8&&(l.sibling=null,l.stateNode=null),l=e;return F=t,Vt(),!0}function Jp(e,t,r){t=_d(r,t),t=tg(e,t,1),_r(e,t),t=st(),e=zl(e,1),e!==null&&(Pl(e,1,t),xt(e,t))}function Pr(e,t){if(e.tag===3)Jp(e,e,t);else for(var r=e.return;r!==null;){if(r.tag===3){Jp(r,e,t);break}else if(r.tag===1){var n=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Dt===null||!Dt.has(n))){e=_d(t,e);var i=rg(r,e,1);if(_r(r,i),i=st(),r=zl(r,1),r!==null)Pl(r,1,i),xt(r,i);else if(typeof n.componentDidCatch=="function"&&(Dt===null||!Dt.has(n)))try{n.componentDidCatch(t,e)}catch{}break}}r=r.return}}function Rx(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=st(),e.pingedLanes|=e.suspendedLanes&r,Je===e&&(Ye&r)===r&&(Ie===4||Ie===3&&(Ye&62914560)===Ye&&500>Xe()-Pd?Bn(e,0):$d|=r),xt(e,t)}function Mx(e,t){var r=e.stateNode;r!==null&&r.delete(t),t=0,t===0&&(t=e.mode,(t&2)===0?t=1:(t&4)===0?t=Qn()===99?1:2:(qt===0&&(qt=li),t=_n(62914560&~qt),t===0&&(t=4194304))),r=st(),e=zl(e,t),e!==null&&(Pl(e,t,r),xt(e,r))}var fg;fg=function(e,t,r){var n=t.lanes;if(e!==null)if(e.memoizedProps!==t.pendingProps||it.current)Pt=!0;else if((r&n)!==0)Pt=(e.flags&16384)!==0;else{switch(Pt=!1,t.tag){case 3:Ip(t),Ks();break;case 5:Op(t);break;case 1:ot(t.type)&&ka(t);break;case 4:Wu(t,t.stateNode.containerInfo);break;case 10:n=t.memoizedProps.value;var i=t.type._context;xe(Ka,i._currentValue),i._currentValue=n;break;case 13:if(t.memoizedState!==null)return(r&t.child.childLanes)!==0?Dp(e,t,r):(xe(ye,ye.current&1),t=Jt(e,t,r),t!==null?t.sibling:null);xe(ye,ye.current&1);break;case 19:if(n=(r&t.childLanes)!==0,(e.flags&64)!==0){if(n)return Hp(e,t,r);t.flags|=64}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),xe(ye,ye.current),n)break;return null;case 23:case 24:return t.lanes=0,Xs(e,t,r)}return Jt(e,t,r)}else Pt=!1;switch(t.lanes=0,t.tag){case 2:if(n=t.type,e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2),e=t.pendingProps,i=qn(t,qe.current),In(t,r),i=bd(null,t,n,e,i,r),t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0){if(t.tag=1,t.memoizedState=null,t.updateQueue=null,ot(n)){var o=!0;ka(t)}else o=!1;t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,vd(t);var a=n.getDerivedStateFromProps;typeof a=="function"&&Ya(t,n,a,e),i.updater=Ll,t.stateNode=i,i._reactInternals=t,Bu(t,n,e,r),t=Ku(null,t,n,!0,o,r)}else t.tag=0,nt(null,t,i,r),t=t.child;return t;case 16:i=t.elementType;e:{switch(e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2),e=t.pendingProps,o=i._init,i=o(i._payload),t.type=i,o=t.tag=jx(i),e=Et(i,e),o){case 0:t=Vu(null,t,i,e,r);break e;case 1:t=Ap(null,t,i,e,r);break e;case 11:t=jp(null,t,i,e,r);break e;case 14:t=zp(null,t,i,Et(i.type,e),n,r);break e}throw Error(N(306,i,""))}return t;case 0:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Et(n,i),Vu(e,t,n,i,r);case 1:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Et(n,i),Ap(e,t,n,i,r);case 3:if(Ip(t),n=t.updateQueue,e===null||n===null)throw Error(N(282));if(n=t.pendingProps,i=t.memoizedState,i=i!==null?i.element:null,A0(e,t),co(t,n,null,r),n=t.memoizedState.element,n===i)Ks(),t=Jt(e,t,r);else{if(i=t.stateNode,(o=i.hydrate)&&(yr=An(t.stateNode.containerInfo.firstChild),Qt=t,o=Bt=!0),o){if(e=i.mutableSourceEagerHydrationData,e!=null)for(i=0;i<e.length;i+=2)o=e[i],o._workInProgressVersionPrimary=e[i+1],Dn.push(o);for(r=B0(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|1024,r=r.sibling}else nt(e,t,n,r),Ks();t=t.child}return t;case 5:return Op(t),e===null&&Uu(t),n=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,Au(n,i)?a=null:o!==null&&Au(n,o)&&(t.flags|=16),Q0(e,t),nt(e,t,a,r),t.child;case 6:return e===null&&Uu(t),null;case 13:return Dp(e,t,r);case 4:return Wu(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=qa(t,null,n,r):nt(e,t,n,r),t.child;case 11:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Et(n,i),jp(e,t,n,i,r);case 7:return nt(e,t,t.pendingProps,r),t.child;case 8:return nt(e,t,t.pendingProps.children,r),t.child;case 12:return nt(e,t,t.pendingProps.children,r),t.child;case 10:e:{n=t.type._context,i=t.pendingProps,a=t.memoizedProps,o=i.value;var l=t.type._context;if(xe(Ka,l._currentValue),l._currentValue=o,a!==null)if(l=a.value,o=mt(l,o)?0:(typeof n._calculateChangedBits=="function"?n._calculateChangedBits(l,o):1073741823)|0,o===0){if(a.children===i.children&&!it.current){t=Jt(e,t,r);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var s=l.dependencies;if(s!==null){a=l.child;for(var c=s.firstContext;c!==null;){if(c.context===n&&(c.observedBits&o)!==0){l.tag===1&&(c=Cr(-1,r&-r),c.tag=2,_r(l,c)),l.lanes|=r,c=l.alternate,c!==null&&(c.lanes|=r),z0(l.return,r),s.lanes|=r;break}c=c.next}}else a=l.tag===10&&l.type===t.type?null:l.child;if(a!==null)a.return=l;else for(a=l;a!==null;){if(a===t){a=null;break}if(l=a.sibling,l!==null){l.return=a.return,a=l;break}a=a.return}l=a}nt(e,t,i.children,r),t=t.child}return t;case 9:return i=t.type,o=t.pendingProps,n=o.children,In(t,r),i=yt(i,o.unstable_observedBits),n=n(i),t.flags|=1,nt(e,t,n,r),t.child;case 14:return i=t.type,o=Et(i,t.pendingProps),o=Et(i.type,o),zp(e,t,i,o,n,r);case 15:return q0(e,t,t.type,t.pendingProps,n,r);case 17:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Et(n,i),e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2),t.tag=1,ot(n)?(e=!0,ka(t)):e=!1,In(t,r),D0(t,n,i),Bu(t,n,i,r),Ku(null,t,n,!0,e,r);case 19:return Hp(e,t,r);case 23:return Xs(e,t,r);case 24:return Xs(e,t,r)}throw Error(N(156,t.tag))};function Lx(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.flags=0,this.lastEffect=this.firstEffect=this.nextEffect=null,this.childLanes=this.lanes=0,this.alternate=null}function gt(e,t,r,n){return new Lx(e,t,r,n)}function Nd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function jx(e){if(typeof e=="function")return Nd(e)?1:0;if(e!=null){if(e=e.$$typeof,e===_l)return 11;if(e===El)return 14}return 2}function Ir(e,t){var r=e.alternate;return r===null?(r=gt(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.nextEffect=null,r.firstEffect=null,r.lastEffect=null),r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Pa(e,t,r,n,i,o){var a=2;if(n=e,typeof e=="function")Nd(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case pr:return Wn(r.children,i,o,t);case Wm:a=8,i|=16;break;case Kc:a=8,i|=1;break;case Di:return e=gt(12,r,t,i|8),e.elementType=Di,e.type=Di,e.lanes=o,e;case Fi:return e=gt(13,r,t,i),e.type=Fi,e.elementType=Fi,e.lanes=o,e;case Aa:return e=gt(19,r,t,i),e.elementType=Aa,e.lanes=o,e;case Jc:return Td(r,i,o,t);case xu:return e=gt(24,r,t,i),e.elementType=xu,e.lanes=o,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Xc:a=10;break e;case Gc:a=9;break e;case _l:a=11;break e;case El:a=14;break e;case Yc:a=16,n=null;break e;case qc:a=22;break e}throw Error(N(130,e==null?e:typeof e,""))}return t=gt(a,r,t,i),t.elementType=e,t.type=n,t.lanes=o,t}function Wn(e,t,r,n){return e=gt(7,e,n,t),e.lanes=r,e}function Td(e,t,r,n){return e=gt(23,e,n,t),e.elementType=Jc,e.lanes=r,e}function qs(e,t,r){return e=gt(6,e,null,t),e.lanes=r,e}function Qs(e,t,r){return t=gt(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function zx(e,t,r){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.pendingContext=this.context=null,this.hydrate=r,this.callbackNode=null,this.callbackPriority=0,this.eventTimes=Ls(0),this.expirationTimes=Ls(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ls(0),this.mutableSourceEagerHydrationData=null}function Ax(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Yr,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function ol(e,t,r,n){var i=t.current,o=st(),a=Er(i);e:if(r){r=r._reactInternals;t:{if(fn(r)!==r||r.tag!==1)throw Error(N(170));var l=r;do{switch(l.tag){case 3:l=l.stateNode.context;break t;case 1:if(ot(l.type)){l=l.stateNode.__reactInternalMemoizedMergedChildContext;break t}}l=l.return}while(l!==null);throw Error(N(171))}if(r.tag===1){var s=r.type;if(ot(s)){r=O0(r,s,l);break e}}r=l}else r=zr;return t.context===null?t.context=r:t.pendingContext=r,t=Cr(o,a),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),_r(i,t),$r(i,a,o),a}function Js(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Zp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function Rd(e,t){Zp(e,t),(e=e.alternate)&&Zp(e,t)}function Ix(){return null}function Md(e,t,r){var n=r!=null&&r.hydrationOptions!=null&&r.hydrationOptions.mutableSources||null;if(r=new zx(e,t,r!=null&&r.hydrate===!0),t=gt(3,null,null,t===2?7:t===1?3:0),r.current=t,t.stateNode=r,vd(t),e[ai]=r.current,C0(e.nodeType===8?e.parentNode:e),n)for(e=0;e<n.length;e++){t=n[e];var i=t._getVersion;i=i(t._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[t,i]:r.mutableSourceEagerHydrationData.push(t,i)}this._internalRoot=r}Md.prototype.render=function(e){ol(e,this._internalRoot,null,null)};Md.prototype.unmount=function(){var e=this._internalRoot,t=e.containerInfo;ol(null,e,null,function(){t[ai]=null})};function No(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Dx(e,t){if(t||(t=e?e.nodeType===9?e.documentElement:e.firstChild:null,t=!(!t||t.nodeType!==1||!t.hasAttribute("data-reactroot"))),!t)for(var r;r=e.lastChild;)e.removeChild(r);return new Md(e,0,t?{hydrate:!0}:void 0)}function Al(e,t,r,n,i){var o=r._reactRootContainer;if(o){var a=o._internalRoot;if(typeof i=="function"){var l=i;i=function(){var c=Js(a);l.call(c)}}ol(t,a,e,i)}else{if(o=r._reactRootContainer=Dx(r,n),a=o._internalRoot,typeof i=="function"){var s=i;i=function(){var c=Js(a);s.call(c)}}ag(function(){ol(t,a,e,i)})}return Js(a)}n0=function(e){if(e.tag===13){var t=st();$r(e,4,t),Rd(e,4)}};nd=function(e){if(e.tag===13){var t=st();$r(e,67108864,t),Rd(e,67108864)}};i0=function(e){if(e.tag===13){var t=st(),r=Er(e);$r(e,r,t),Rd(e,r)}};o0=function(e,t){return t()};Ou=function(e,t,r){switch(t){case"input":if(bu(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var i=Rl(n);if(!i)throw Error(N(90));Hm(n),bu(n,i)}}}break;case"textarea":Km(e,r);break;case"select":t=r.value,t!=null&&Ln(e,!!r.multiple,t,!1)}};ed=og;Zm=function(e,t,r,n,i){var o=F;F|=4;try{return nn(98,e.bind(null,t,r,n,i))}finally{F=o,F===0&&(ui(),Vt())}};td=function(){(F&49)===0&&(_x(),Ur())};e0=function(e,t){var r=F;F|=2;try{return e(t)}finally{F=r,F===0&&(ui(),Vt())}};function pg(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!No(t))throw Error(N(200));return Ax(e,t,null,r)}var Fx={Events:[$o,On,Rl,Qm,Jm,Ur,{current:!1}]},Oi={findFiberByHostInstance:Qr,bundleType:0,version:"17.0.2",rendererPackageName:"react-dom"},Bx={bundleType:Oi.bundleType,version:Oi.version,rendererPackageName:Oi.rendererPackageName,rendererConfig:Oi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:dn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=r0(e),e===null?null:e.stateNode},findFiberByHostInstance:Oi.findFiberByHostInstance||Ix,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var sa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!sa.isDisabled&&sa.supportsFiber)try{pd=sa.inject(Bx),en=sa}catch{}}bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Fx;bt.createPortal=pg;bt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(N(188)):Error(N(268,Object.keys(e)));return e=r0(t),e=e===null?null:e.stateNode,e};bt.flushSync=function(e,t){var r=F;if((r&48)!==0)return e(t);F|=1;try{if(e)return nn(99,e.bind(null,t))}finally{F=r,Vt()}};bt.hydrate=function(e,t,r){if(!No(t))throw Error(N(200));return Al(null,e,t,!0,r)};bt.render=function(e,t,r){if(!No(t))throw Error(N(200));return Al(null,e,t,!1,r)};bt.unmountComponentAtNode=function(e){if(!No(e))throw Error(N(40));return e._reactRootContainer?(ag(function(){Al(null,null,e,!1,function(){e._reactRootContainer=null,e[ai]=null})}),!0):!1};bt.unstable_batchedUpdates=og;bt.unstable_createPortal=function(e,t){return pg(e,t,2<arguments.length&&arguments[2]!==void 0?arguments[2]:null)};bt.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!No(r))throw Error(N(200));if(e==null||e._reactInternals===void 0)throw Error(N(38));return Al(e,t,r,!1,n)};bt.version="17.0.2";function hg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(hg)}catch(e){console.error(e)}}hg(),kl.exports=bt;var mg=kl.exports,Wx=Cm({__proto__:null,default:mg},[kl.exports]);/**
 * @remix-run/router v1.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function mo(){return mo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},mo.apply(this,arguments)}var xr;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(xr||(xr={}));const eh="popstate";function Ux(e){e===void 0&&(e={});function t(i,o){let{pathname:a="/",search:l="",hash:s=""}=hn(i.location.hash.substr(1));return!a.startsWith("/")&&!a.startsWith(".")&&(a="/"+a),oc("",{pathname:a,search:l,hash:s},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function r(i,o){let a=i.document.querySelector("base"),l="";if(a&&a.getAttribute("href")){let s=i.location.href,c=s.indexOf("#");l=c===-1?s:s.slice(0,c)}return l+"#"+(typeof o=="string"?o:al(o))}function n(i,o){Ld(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(o)+")")}return Vx(t,r,n,e)}function Se(e,t){if(e===!1||e===null||typeof e=="undefined")throw new Error(t)}function Ld(e,t){if(!e){typeof console!="undefined"&&console.warn(t);try{throw new Error(t)}catch{}}}function Hx(){return Math.random().toString(36).substr(2,8)}function th(e,t){return{usr:e.state,key:e.key,idx:t}}function oc(e,t,r,n){return r===void 0&&(r=null),mo({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?hn(t):t,{state:r,key:t&&t.key||n||Hx()})}function al(e){let{pathname:t="/",search:r="",hash:n=""}=e;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function hn(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}function Vx(e,t,r,n){n===void 0&&(n={});let{window:i=document.defaultView,v5Compat:o=!1}=n,a=i.history,l=xr.Pop,s=null,c=d();c==null&&(c=0,a.replaceState(mo({},a.state,{idx:c}),""));function d(){return(a.state||{idx:null}).idx}function p(){l=xr.Pop;let f=d(),h=f==null?null:f-c;c=f,s&&s({action:l,location:v.location,delta:h})}function m(f,h){l=xr.Push;let g=oc(v.location,f,h);r&&r(g,f),c=d()+1;let w=th(g,c),S=v.createHref(g);try{a.pushState(w,"",S)}catch(_){if(_ instanceof DOMException&&_.name==="DataCloneError")throw _;i.location.assign(S)}o&&s&&s({action:l,location:v.location,delta:1})}function y(f,h){l=xr.Replace;let g=oc(v.location,f,h);r&&r(g,f),c=d();let w=th(g,c),S=v.createHref(g);a.replaceState(w,"",S),o&&s&&s({action:l,location:v.location,delta:0})}function x(f){let h=i.location.origin!=="null"?i.location.origin:i.location.href,g=typeof f=="string"?f:al(f);return g=g.replace(/ $/,"%20"),Se(h,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,h)}let v={get action(){return l},get location(){return e(i,a)},listen(f){if(s)throw new Error("A history only accepts one active listener");return i.addEventListener(eh,p),s=f,()=>{i.removeEventListener(eh,p),s=null}},createHref(f){return t(i,f)},createURL:x,encodeLocation(f){let h=x(f);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:m,replace:y,go(f){return a.go(f)}};return v}var rh;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(rh||(rh={}));function Kx(e,t,r){return r===void 0&&(r="/"),Xx(e,t,r,!1)}function Xx(e,t,r,n){let i=typeof t=="string"?hn(t):t,o=jd(i.pathname||"/",r);if(o==null)return null;let a=gg(e);Gx(a);let l=null;for(let s=0;l==null&&s<a.length;++s){let c=o2(o);l=n2(a[s],c,n)}return l}function gg(e,t,r,n){t===void 0&&(t=[]),r===void 0&&(r=[]),n===void 0&&(n="");let i=(o,a,l)=>{let s={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};s.relativePath.startsWith("/")&&(Se(s.relativePath.startsWith(n),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+n+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(n.length));let c=Or([n,s.relativePath]),d=r.concat(s);o.children&&o.children.length>0&&(Se(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),gg(o.children,t,d,c)),!(o.path==null&&!o.index)&&t.push({path:c,score:t2(c,o.index),routesMeta:d})};return e.forEach((o,a)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))i(o,a);else for(let s of vg(o.path))i(o,a,s)}),t}function vg(e){let t=e.split("/");if(t.length===0)return[];let[r,...n]=t,i=r.endsWith("?"),o=r.replace(/\?$/,"");if(n.length===0)return i?[o,""]:[o];let a=vg(n.join("/")),l=[];return l.push(...a.map(s=>s===""?o:[o,s].join("/"))),i&&l.push(...a),l.map(s=>e.startsWith("/")&&s===""?"/":s)}function Gx(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:r2(t.routesMeta.map(n=>n.childrenIndex),r.routesMeta.map(n=>n.childrenIndex)))}const Yx=/^:[\w-]+$/,qx=3,Qx=2,Jx=1,Zx=10,e2=-2,nh=e=>e==="*";function t2(e,t){let r=e.split("/"),n=r.length;return r.some(nh)&&(n+=e2),t&&(n+=Qx),r.filter(i=>!nh(i)).reduce((i,o)=>i+(Yx.test(o)?qx:o===""?Jx:Zx),n)}function r2(e,t){return e.length===t.length&&e.slice(0,-1).every((n,i)=>n===t[i])?e[e.length-1]-t[t.length-1]:0}function n2(e,t,r){r===void 0&&(r=!1);let{routesMeta:n}=e,i={},o="/",a=[];for(let l=0;l<n.length;++l){let s=n[l],c=l===n.length-1,d=o==="/"?t:t.slice(o.length)||"/",p=ih({path:s.relativePath,caseSensitive:s.caseSensitive,end:c},d),m=s.route;if(!p&&c&&r&&!n[n.length-1].route.index&&(p=ih({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},d)),!p)return null;Object.assign(i,p.params),a.push({params:i,pathname:Or([o,p.pathname]),pathnameBase:u2(Or([o,p.pathnameBase])),route:m}),p.pathnameBase!=="/"&&(o=Or([o,p.pathnameBase]))}return a}function ih(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=i2(e.path,e.caseSensitive,e.end),i=t.match(r);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:n.reduce((c,d,p)=>{let{paramName:m,isOptional:y}=d;if(m==="*"){let v=l[p]||"";a=o.slice(0,o.length-v.length).replace(/(.)\/+$/,"$1")}const x=l[p];return y&&!x?c[m]=void 0:c[m]=(x||"").replace(/%2F/g,"/"),c},{}),pathname:o,pathnameBase:a,pattern:e}}function i2(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!0),Ld(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let n=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,l,s)=>(n.push({paramName:l,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(n.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),n]}function o2(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Ld(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function jd(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&n!=="/"?null:e.slice(r)||"/"}function a2(e,t){t===void 0&&(t="/");let{pathname:r,search:n="",hash:i=""}=typeof e=="string"?hn(e):e;return{pathname:r?r.startsWith("/")?r:l2(r,t):t,search:c2(n),hash:d2(i)}}function l2(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?r.length>1&&r.pop():i!=="."&&r.push(i)}),r.length>1?r.join("/"):"/"}function Zs(e,t,r,n){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function s2(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function zd(e,t){let r=s2(e);return t?r.map((n,i)=>i===r.length-1?n.pathname:n.pathnameBase):r.map(n=>n.pathnameBase)}function Ad(e,t,r,n){n===void 0&&(n=!1);let i;typeof e=="string"?i=hn(e):(i=mo({},e),Se(!i.pathname||!i.pathname.includes("?"),Zs("?","pathname","search",i)),Se(!i.pathname||!i.pathname.includes("#"),Zs("#","pathname","hash",i)),Se(!i.search||!i.search.includes("#"),Zs("#","search","hash",i)));let o=e===""||i.pathname==="",a=o?"/":i.pathname,l;if(a==null)l=r;else{let p=t.length-1;if(!n&&a.startsWith("..")){let m=a.split("/");for(;m[0]==="..";)m.shift(),p-=1;i.pathname=m.join("/")}l=p>=0?t[p]:"/"}let s=a2(i,l),c=a&&a!=="/"&&a.endsWith("/"),d=(o||a===".")&&r.endsWith("/");return!s.pathname.endsWith("/")&&(c||d)&&(s.pathname+="/"),s}const Or=e=>e.join("/").replace(/\/\/+/g,"/"),u2=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),c2=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,d2=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function f2(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const p2=["post","put","patch","delete"];[...p2];/**
 * React Router v6.25.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function go(){return go=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},go.apply(this,arguments)}const Id=k.exports.createContext(null),h2=k.exports.createContext(null),Hr=k.exports.createContext(null),Il=k.exports.createContext(null),ar=k.exports.createContext({outlet:null,matches:[],isDataRoute:!1}),yg=k.exports.createContext(null);function m2(e,t){let{relative:r}=t===void 0?{}:t;ci()||Se(!1);let{basename:n,navigator:i}=k.exports.useContext(Hr),{hash:o,pathname:a,search:l}=wg(e,{relative:r}),s=a;return n!=="/"&&(s=a==="/"?n:Or([n,a])),i.createHref({pathname:s,search:l,hash:o})}function ci(){return k.exports.useContext(Il)!=null}function Nt(){return ci()||Se(!1),k.exports.useContext(Il).location}function xg(e){k.exports.useContext(Hr).static||k.exports.useLayoutEffect(e)}function mn(){let{isDataRoute:e}=k.exports.useContext(ar);return e?N2():g2()}function g2(){ci()||Se(!1);let e=k.exports.useContext(Id),{basename:t,future:r,navigator:n}=k.exports.useContext(Hr),{matches:i}=k.exports.useContext(ar),{pathname:o}=Nt(),a=JSON.stringify(zd(i,r.v7_relativeSplatPath)),l=k.exports.useRef(!1);return xg(()=>{l.current=!0}),k.exports.useCallback(function(c,d){if(d===void 0&&(d={}),!l.current)return;if(typeof c=="number"){n.go(c);return}let p=Ad(c,JSON.parse(a),o,d.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:Or([t,p.pathname])),(d.replace?n.replace:n.push)(p,d.state,d)},[t,n,a,o,e])}const v2=k.exports.createContext(null);function y2(e){let t=k.exports.useContext(ar).outlet;return t&&k.exports.createElement(v2.Provider,{value:e},t)}function wg(e,t){let{relative:r}=t===void 0?{}:t,{future:n}=k.exports.useContext(Hr),{matches:i}=k.exports.useContext(ar),{pathname:o}=Nt(),a=JSON.stringify(zd(i,n.v7_relativeSplatPath));return k.exports.useMemo(()=>Ad(e,JSON.parse(a),o,r==="path"),[e,a,o,r])}function x2(e,t){return w2(e,t)}function w2(e,t,r,n){ci()||Se(!1);let{navigator:i}=k.exports.useContext(Hr),{matches:o}=k.exports.useContext(ar),a=o[o.length-1],l=a?a.params:{};a&&a.pathname;let s=a?a.pathnameBase:"/";a&&a.route;let c=Nt(),d;if(t){var p;let f=typeof t=="string"?hn(t):t;s==="/"||((p=f.pathname)==null?void 0:p.startsWith(s))||Se(!1),d=f}else d=c;let m=d.pathname||"/",y=m;if(s!=="/"){let f=s.replace(/^\//,"").split("/"),h=m.replace(/^\//,"").split("/");y="/"+h.slice(f.length).join("/")}let x=Kx(e,{pathname:y}),v=_2(x&&x.map(f=>Object.assign({},f,{params:Object.assign({},l,f.params),pathname:Or([s,i.encodeLocation?i.encodeLocation(f.pathname).pathname:f.pathname]),pathnameBase:f.pathnameBase==="/"?s:Or([s,i.encodeLocation?i.encodeLocation(f.pathnameBase).pathname:f.pathnameBase])})),o,r,n);return t&&v?k.exports.createElement(Il.Provider,{value:{location:go({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:xr.Pop}},v):v}function b2(){let e=O2(),t=f2(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return k.exports.createElement(k.exports.Fragment,null,k.exports.createElement("h2",null,"Unexpected Application Error!"),k.exports.createElement("h3",{style:{fontStyle:"italic"}},t),r?k.exports.createElement("pre",{style:i},r):null,o)}const S2=k.exports.createElement(b2,null);class k2 extends k.exports.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error!==void 0?k.exports.createElement(ar.Provider,{value:this.props.routeContext},k.exports.createElement(yg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function C2(e){let{routeContext:t,match:r,children:n}=e,i=k.exports.useContext(Id);return i&&i.static&&i.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=r.route.id),k.exports.createElement(ar.Provider,{value:t},n)}function _2(e,t,r,n){var i;if(t===void 0&&(t=[]),r===void 0&&(r=null),n===void 0&&(n=null),e==null){var o;if((o=r)!=null&&o.errors)e=r.matches;else return null}let a=e,l=(i=r)==null?void 0:i.errors;if(l!=null){let d=a.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);d>=0||Se(!1),a=a.slice(0,Math.min(a.length,d+1))}let s=!1,c=-1;if(r&&n&&n.v7_partialHydration)for(let d=0;d<a.length;d++){let p=a[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(c=d),p.route.id){let{loaderData:m,errors:y}=r,x=p.route.loader&&m[p.route.id]===void 0&&(!y||y[p.route.id]===void 0);if(p.route.lazy||x){s=!0,c>=0?a=a.slice(0,c+1):a=[a[0]];break}}}return a.reduceRight((d,p,m)=>{let y,x=!1,v=null,f=null;r&&(y=l&&p.route.id?l[p.route.id]:void 0,v=p.route.errorElement||S2,s&&(c<0&&m===0?(T2("route-fallback",!1),x=!0,f=null):c===m&&(x=!0,f=p.route.hydrateFallbackElement||null)));let h=t.concat(a.slice(0,m+1)),g=()=>{let w;return y?w=v:x?w=f:p.route.Component?w=k.exports.createElement(p.route.Component,null):p.route.element?w=p.route.element:w=d,k.exports.createElement(C2,{match:p,routeContext:{outlet:d,matches:h,isDataRoute:r!=null},children:w})};return r&&(p.route.ErrorBoundary||p.route.errorElement||m===0)?k.exports.createElement(k2,{location:r.location,revalidation:r.revalidation,component:v,error:y,children:g(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):g()},null)}var bg=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(bg||{}),ll=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(ll||{});function E2(e){let t=k.exports.useContext(Id);return t||Se(!1),t}function $2(e){let t=k.exports.useContext(h2);return t||Se(!1),t}function P2(e){let t=k.exports.useContext(ar);return t||Se(!1),t}function Sg(e){let t=P2(),r=t.matches[t.matches.length-1];return r.route.id||Se(!1),r.route.id}function O2(){var e;let t=k.exports.useContext(yg),r=$2(ll.UseRouteError),n=Sg(ll.UseRouteError);return t!==void 0?t:(e=r.errors)==null?void 0:e[n]}function N2(){let{router:e}=E2(bg.UseNavigateStable),t=Sg(ll.UseNavigateStable),r=k.exports.useRef(!1);return xg(()=>{r.current=!0}),k.exports.useCallback(function(i,o){o===void 0&&(o={}),r.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,go({fromRouteId:t},o)))},[e,t])}const oh={};function T2(e,t,r){!t&&!oh[e]&&(oh[e]=!0)}const R2="startTransition";Zi[R2];function M2(e){let{to:t,replace:r,state:n,relative:i}=e;ci()||Se(!1);let{future:o,static:a}=k.exports.useContext(Hr),{matches:l}=k.exports.useContext(ar),{pathname:s}=Nt(),c=mn(),d=Ad(t,zd(l,o.v7_relativeSplatPath),s,i==="path"),p=JSON.stringify(d);return k.exports.useEffect(()=>c(JSON.parse(p),{replace:r,state:n,relative:i}),[c,p,i,r,n]),null}function Dd(e){return y2(e.context)}function he(e){Se(!1)}function L2(e){let{basename:t="/",children:r=null,location:n,navigationType:i=xr.Pop,navigator:o,static:a=!1,future:l}=e;ci()&&Se(!1);let s=t.replace(/^\/*/,"/"),c=k.exports.useMemo(()=>({basename:s,navigator:o,static:a,future:go({v7_relativeSplatPath:!1},l)}),[s,l,o,a]);typeof n=="string"&&(n=hn(n));let{pathname:d="/",search:p="",hash:m="",state:y=null,key:x="default"}=n,v=k.exports.useMemo(()=>{let f=jd(d,s);return f==null?null:{location:{pathname:f,search:p,hash:m,state:y,key:x},navigationType:i}},[s,d,p,m,y,x,i]);return v==null?null:k.exports.createElement(Hr.Provider,{value:c},k.exports.createElement(Il.Provider,{children:r,value:v}))}function j2(e){let{children:t,location:r}=e;return x2(ac(t),r)}new Promise(()=>{});function ac(e,t){t===void 0&&(t=[]);let r=[];return k.exports.Children.forEach(e,(n,i)=>{if(!k.exports.isValidElement(n))return;let o=[...t,i];if(n.type===k.exports.Fragment){r.push.apply(r,ac(n.props.children,o));return}n.type!==he&&Se(!1),!n.props.index||!n.props.children||Se(!1);let a={id:n.props.id||o.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(a.children=ac(n.props.children,o)),r.push(a)}),r}/**
 * React Router DOM v6.25.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function lc(){return lc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},lc.apply(this,arguments)}function z2(e,t){if(e==null)return{};var r={},n=Object.keys(e),i,o;for(o=0;o<n.length;o++)i=n[o],!(t.indexOf(i)>=0)&&(r[i]=e[i]);return r}function A2(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function I2(e,t){return e.button===0&&(!t||t==="_self")&&!A2(e)}const D2=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],F2="6";try{window.__reactRouterVersion=F2}catch{}const B2="startTransition",ah=Zi[B2],W2="flushSync";Wx[W2];const U2="useId";Zi[U2];function H2(e){let{basename:t,children:r,future:n,window:i}=e,o=k.exports.useRef();o.current==null&&(o.current=Ux({window:i,v5Compat:!0}));let a=o.current,[l,s]=k.exports.useState({action:a.action,location:a.location}),{v7_startTransition:c}=n||{},d=k.exports.useCallback(p=>{c&&ah?ah(()=>s(p)):s(p)},[s,c]);return k.exports.useLayoutEffect(()=>a.listen(d),[a,d]),k.exports.createElement(L2,{basename:t,children:r,location:l.location,navigationType:l.action,navigator:a,future:n})}const V2=typeof window!="undefined"&&typeof window.document!="undefined"&&typeof window.document.createElement!="undefined",K2=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,me=k.exports.forwardRef(function(t,r){let{onClick:n,relative:i,reloadDocument:o,replace:a,state:l,target:s,to:c,preventScrollReset:d,unstable_viewTransition:p}=t,m=z2(t,D2),{basename:y}=k.exports.useContext(Hr),x,v=!1;if(typeof c=="string"&&K2.test(c)&&(x=c,V2))try{let w=new URL(window.location.href),S=c.startsWith("//")?new URL(w.protocol+c):new URL(c),_=jd(S.pathname,y);S.origin===w.origin&&_!=null?c=_+S.search+S.hash:v=!0}catch{}let f=m2(c,{relative:i}),h=X2(c,{replace:a,state:l,target:s,preventScrollReset:d,relative:i,unstable_viewTransition:p});function g(w){n&&n(w),w.defaultPrevented||h(w)}return k.exports.createElement("a",lc({},m,{href:x||f,onClick:v||o?n:g,ref:r,target:s}))});var lh;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(lh||(lh={}));var sh;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(sh||(sh={}));function X2(e,t){let{target:r,replace:n,state:i,preventScrollReset:o,relative:a,unstable_viewTransition:l}=t===void 0?{}:t,s=mn(),c=Nt(),d=wg(e,{relative:a});return k.exports.useCallback(p=>{if(I2(p,r)){p.preventDefault();let m=n!==void 0?n:al(c)===al(d);s(e,{replace:m,state:i,preventScrollReset:o,relative:a,unstable_viewTransition:l})}},[c,s,d,n,i,r,e,o,a,l])}var Fd={exports:{}},oe={};/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dl=60103,Fl=60106,To=60107,Ro=60108,Mo=60114,Lo=60109,jo=60110,zo=60112,Ao=60113,Bd=60120,Io=60115,Do=60116,kg=60121,Cg=60122,_g=60117,Eg=60129,$g=60131;if(typeof Symbol=="function"&&Symbol.for){var je=Symbol.for;Dl=je("react.element"),Fl=je("react.portal"),To=je("react.fragment"),Ro=je("react.strict_mode"),Mo=je("react.profiler"),Lo=je("react.provider"),jo=je("react.context"),zo=je("react.forward_ref"),Ao=je("react.suspense"),Bd=je("react.suspense_list"),Io=je("react.memo"),Do=je("react.lazy"),kg=je("react.block"),Cg=je("react.server.block"),_g=je("react.fundamental"),Eg=je("react.debug_trace_mode"),$g=je("react.legacy_hidden")}function Tt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Dl:switch(e=e.type,e){case To:case Mo:case Ro:case Ao:case Bd:return e;default:switch(e=e&&e.$$typeof,e){case jo:case zo:case Do:case Io:case Lo:return e;default:return t}}case Fl:return t}}}var G2=Lo,Y2=Dl,q2=zo,Q2=To,J2=Do,Z2=Io,ew=Fl,tw=Mo,rw=Ro,nw=Ao;oe.ContextConsumer=jo;oe.ContextProvider=G2;oe.Element=Y2;oe.ForwardRef=q2;oe.Fragment=Q2;oe.Lazy=J2;oe.Memo=Z2;oe.Portal=ew;oe.Profiler=tw;oe.StrictMode=rw;oe.Suspense=nw;oe.isAsyncMode=function(){return!1};oe.isConcurrentMode=function(){return!1};oe.isContextConsumer=function(e){return Tt(e)===jo};oe.isContextProvider=function(e){return Tt(e)===Lo};oe.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Dl};oe.isForwardRef=function(e){return Tt(e)===zo};oe.isFragment=function(e){return Tt(e)===To};oe.isLazy=function(e){return Tt(e)===Do};oe.isMemo=function(e){return Tt(e)===Io};oe.isPortal=function(e){return Tt(e)===Fl};oe.isProfiler=function(e){return Tt(e)===Mo};oe.isStrictMode=function(e){return Tt(e)===Ro};oe.isSuspense=function(e){return Tt(e)===Ao};oe.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===To||e===Mo||e===Eg||e===Ro||e===Ao||e===Bd||e===$g||typeof e=="object"&&e!==null&&(e.$$typeof===Do||e.$$typeof===Io||e.$$typeof===Lo||e.$$typeof===jo||e.$$typeof===zo||e.$$typeof===_g||e.$$typeof===kg||e[0]===Cg)};oe.typeOf=Tt;Fd.exports=oe;function iw(e){function t($,P,M,A,C){for(var V=0,R=0,te=0,Z=0,re,W,Re=0,tt=0,X,We=X=re=0,ee=0,Me=0,gi=0,Le=0,qo=M.length,vi=qo-1,Ct,B="",we="",$s="",Ps="",cr;ee<qo;){if(W=M.charCodeAt(ee),ee===vi&&R+Z+te+V!==0&&(R!==0&&(W=R===47?10:47),Z=te=V=0,qo++,vi++),R+Z+te+V===0){if(ee===vi&&(0<Me&&(B=B.replace(m,"")),0<B.trim().length)){switch(W){case 32:case 9:case 59:case 13:case 10:break;default:B+=M.charAt(ee)}W=59}switch(W){case 123:for(B=B.trim(),re=B.charCodeAt(0),X=1,Le=++ee;ee<qo;){switch(W=M.charCodeAt(ee)){case 123:X++;break;case 125:X--;break;case 47:switch(W=M.charCodeAt(ee+1)){case 42:case 47:e:{for(We=ee+1;We<vi;++We)switch(M.charCodeAt(We)){case 47:if(W===42&&M.charCodeAt(We-1)===42&&ee+2!==We){ee=We+1;break e}break;case 10:if(W===47){ee=We+1;break e}}ee=We}}break;case 91:W++;case 40:W++;case 34:case 39:for(;ee++<vi&&M.charCodeAt(ee)!==W;);}if(X===0)break;ee++}switch(X=M.substring(Le,ee),re===0&&(re=(B=B.replace(p,"").trim()).charCodeAt(0)),re){case 64:switch(0<Me&&(B=B.replace(m,"")),W=B.charCodeAt(1),W){case 100:case 109:case 115:case 45:Me=P;break;default:Me=Be}if(X=t(P,Me,X,W,C+1),Le=X.length,0<Ee&&(Me=r(Be,B,gi),cr=l(3,X,Me,P,H,U,Le,W,C,A),B=Me.join(""),cr!==void 0&&(Le=(X=cr.trim()).length)===0&&(W=0,X="")),0<Le)switch(W){case 115:B=B.replace(E,a);case 100:case 109:case 45:X=B+"{"+X+"}";break;case 107:B=B.replace(g,"$1 $2"),X=B+"{"+X+"}",X=ae===1||ae===2&&o("@"+X,3)?"@-webkit-"+X+"@"+X:"@"+X;break;default:X=B+X,A===112&&(X=(we+=X,""))}else X="";break;default:X=t(P,r(P,B,gi),X,A,C+1)}$s+=X,X=gi=Me=We=re=0,B="",W=M.charCodeAt(++ee);break;case 125:case 59:if(B=(0<Me?B.replace(m,""):B).trim(),1<(Le=B.length))switch(We===0&&(re=B.charCodeAt(0),re===45||96<re&&123>re)&&(Le=(B=B.replace(" ",":")).length),0<Ee&&(cr=l(1,B,P,$,H,U,we.length,A,C,A))!==void 0&&(Le=(B=cr.trim()).length)===0&&(B="\0\0"),re=B.charCodeAt(0),W=B.charCodeAt(1),re){case 0:break;case 64:if(W===105||W===99){Ps+=B+M.charAt(ee);break}default:B.charCodeAt(Le-1)!==58&&(we+=i(B,re,W,B.charCodeAt(2)))}gi=Me=We=re=0,B="",W=M.charCodeAt(++ee)}}switch(W){case 13:case 10:R===47?R=0:1+re===0&&A!==107&&0<B.length&&(Me=1,B+="\0"),0<Ee*ur&&l(0,B,P,$,H,U,we.length,A,C,A),U=1,H++;break;case 59:case 125:if(R+Z+te+V===0){U++;break}default:switch(U++,Ct=M.charAt(ee),W){case 9:case 32:if(Z+V+R===0)switch(Re){case 44:case 58:case 9:case 32:Ct="";break;default:W!==32&&(Ct=" ")}break;case 0:Ct="\\0";break;case 12:Ct="\\f";break;case 11:Ct="\\v";break;case 38:Z+R+V===0&&(Me=gi=1,Ct="\f"+Ct);break;case 108:if(Z+R+V+pe===0&&0<We)switch(ee-We){case 2:Re===112&&M.charCodeAt(ee-3)===58&&(pe=Re);case 8:tt===111&&(pe=tt)}break;case 58:Z+R+V===0&&(We=ee);break;case 44:R+te+Z+V===0&&(Me=1,Ct+="\r");break;case 34:case 39:R===0&&(Z=Z===W?0:Z===0?W:Z);break;case 91:Z+R+te===0&&V++;break;case 93:Z+R+te===0&&V--;break;case 41:Z+R+V===0&&te--;break;case 40:if(Z+R+V===0){if(re===0)switch(2*Re+3*tt){case 533:break;default:re=1}te++}break;case 64:R+te+Z+V+We+X===0&&(X=1);break;case 42:case 47:if(!(0<Z+V+te))switch(R){case 0:switch(2*W+3*M.charCodeAt(ee+1)){case 235:R=47;break;case 220:Le=ee,R=42}break;case 42:W===47&&Re===42&&Le+2!==ee&&(M.charCodeAt(Le+2)===33&&(we+=M.substring(Le,ee+1)),Ct="",R=0)}}R===0&&(B+=Ct)}tt=Re,Re=W,ee++}if(Le=we.length,0<Le){if(Me=P,0<Ee&&(cr=l(2,we,Me,$,H,U,Le,A,C,A),cr!==void 0&&(we=cr).length===0))return Ps+we+$s;if(we=Me.join(",")+"{"+we+"}",ae*pe!==0){switch(ae!==2||o(we,2)||(pe=0),pe){case 111:we=we.replace(S,":-moz-$1")+we;break;case 112:we=we.replace(w,"::-webkit-input-$1")+we.replace(w,"::-moz-$1")+we.replace(w,":-ms-input-$1")+we}pe=0}}return Ps+we+$s}function r($,P,M){var A=P.trim().split(f);P=A;var C=A.length,V=$.length;switch(V){case 0:case 1:var R=0;for($=V===0?"":$[0]+" ";R<C;++R)P[R]=n($,P[R],M).trim();break;default:var te=R=0;for(P=[];R<C;++R)for(var Z=0;Z<V;++Z)P[te++]=n($[Z]+" ",A[R],M).trim()}return P}function n($,P,M){var A=P.charCodeAt(0);switch(33>A&&(A=(P=P.trim()).charCodeAt(0)),A){case 38:return P.replace(h,"$1"+$.trim());case 58:return $.trim()+P.replace(h,"$1"+$.trim());default:if(0<1*M&&0<P.indexOf("\f"))return P.replace(h,($.charCodeAt(0)===58?"":"$1")+$.trim())}return $+P}function i($,P,M,A){var C=$+";",V=2*P+3*M+4*A;if(V===944){$=C.indexOf(":",9)+1;var R=C.substring($,C.length-1).trim();return R=C.substring(0,$).trim()+R+";",ae===1||ae===2&&o(R,1)?"-webkit-"+R+R:R}if(ae===0||ae===2&&!o(C,1))return C;switch(V){case 1015:return C.charCodeAt(10)===97?"-webkit-"+C+C:C;case 951:return C.charCodeAt(3)===116?"-webkit-"+C+C:C;case 963:return C.charCodeAt(5)===110?"-webkit-"+C+C:C;case 1009:if(C.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+C+C;case 978:return"-webkit-"+C+"-moz-"+C+C;case 1019:case 983:return"-webkit-"+C+"-moz-"+C+"-ms-"+C+C;case 883:if(C.charCodeAt(8)===45)return"-webkit-"+C+C;if(0<C.indexOf("image-set(",11))return C.replace(G,"$1-webkit-$2")+C;break;case 932:if(C.charCodeAt(4)===45)switch(C.charCodeAt(5)){case 103:return"-webkit-box-"+C.replace("-grow","")+"-webkit-"+C+"-ms-"+C.replace("grow","positive")+C;case 115:return"-webkit-"+C+"-ms-"+C.replace("shrink","negative")+C;case 98:return"-webkit-"+C+"-ms-"+C.replace("basis","preferred-size")+C}return"-webkit-"+C+"-ms-"+C+C;case 964:return"-webkit-"+C+"-ms-flex-"+C+C;case 1023:if(C.charCodeAt(8)!==99)break;return R=C.substring(C.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+R+"-webkit-"+C+"-ms-flex-pack"+R+C;case 1005:return x.test(C)?C.replace(y,":-webkit-")+C.replace(y,":-moz-")+C:C;case 1e3:switch(R=C.substring(13).trim(),P=R.indexOf("-")+1,R.charCodeAt(0)+R.charCodeAt(P)){case 226:R=C.replace(_,"tb");break;case 232:R=C.replace(_,"tb-rl");break;case 220:R=C.replace(_,"lr");break;default:return C}return"-webkit-"+C+"-ms-"+R+C;case 1017:if(C.indexOf("sticky",9)===-1)break;case 975:switch(P=(C=$).length-10,R=(C.charCodeAt(P)===33?C.substring(0,P):C).substring($.indexOf(":",7)+1).trim(),V=R.charCodeAt(0)+(R.charCodeAt(7)|0)){case 203:if(111>R.charCodeAt(8))break;case 115:C=C.replace(R,"-webkit-"+R)+";"+C;break;case 207:case 102:C=C.replace(R,"-webkit-"+(102<V?"inline-":"")+"box")+";"+C.replace(R,"-webkit-"+R)+";"+C.replace(R,"-ms-"+R+"box")+";"+C}return C+";";case 938:if(C.charCodeAt(5)===45)switch(C.charCodeAt(6)){case 105:return R=C.replace("-items",""),"-webkit-"+C+"-webkit-box-"+R+"-ms-flex-"+R+C;case 115:return"-webkit-"+C+"-ms-flex-item-"+C.replace(j,"")+C;default:return"-webkit-"+C+"-ms-flex-line-pack"+C.replace("align-content","").replace(j,"")+C}break;case 973:case 989:if(C.charCodeAt(3)!==45||C.charCodeAt(4)===122)break;case 931:case 953:if(I.test($)===!0)return(R=$.substring($.indexOf(":")+1)).charCodeAt(0)===115?i($.replace("stretch","fill-available"),P,M,A).replace(":fill-available",":stretch"):C.replace(R,"-webkit-"+R)+C.replace(R,"-moz-"+R.replace("fill-",""))+C;break;case 962:if(C="-webkit-"+C+(C.charCodeAt(5)===102?"-ms-"+C:"")+C,M+A===211&&C.charCodeAt(13)===105&&0<C.indexOf("transform",10))return C.substring(0,C.indexOf(";",27)+1).replace(v,"$1-webkit-$2")+C}return C}function o($,P){var M=$.indexOf(P===1?":":"{"),A=$.substring(0,P!==3?M:10);return M=$.substring(M+1,$.length-1),Xt(P!==2?A:A.replace(T,"$1"),M,P)}function a($,P){var M=i(P,P.charCodeAt(0),P.charCodeAt(1),P.charCodeAt(2));return M!==P+";"?M.replace(O," or ($1)").substring(4):"("+P+")"}function l($,P,M,A,C,V,R,te,Z,re){for(var W=0,Re=P,tt;W<Ee;++W)switch(tt=Pe[W].call(d,$,Re,M,A,C,V,R,te,Z,re)){case void 0:case!1:case!0:case null:break;default:Re=tt}if(Re!==P)return Re}function s($){switch($){case void 0:case null:Ee=Pe.length=0;break;default:if(typeof $=="function")Pe[Ee++]=$;else if(typeof $=="object")for(var P=0,M=$.length;P<M;++P)s($[P]);else ur=!!$|0}return s}function c($){return $=$.prefix,$!==void 0&&(Xt=null,$?typeof $!="function"?ae=1:(ae=2,Xt=$):ae=0),c}function d($,P){var M=$;if(33>M.charCodeAt(0)&&(M=M.trim()),L=M,M=[L],0<Ee){var A=l(-1,P,M,M,H,U,0,0,0,0);A!==void 0&&typeof A=="string"&&(P=A)}var C=t(Be,M,P,0,0);return 0<Ee&&(A=l(-2,C,M,M,H,U,C.length,0,0,0),A!==void 0&&(C=A)),L="",pe=0,U=H=1,C}var p=/^\0+/g,m=/[\0\r\f]/g,y=/: */g,x=/zoo|gra/,v=/([,: ])(transform)/g,f=/,\r+?/g,h=/([\t\r\n ])*\f?&/g,g=/@(k\w+)\s*(\S*)\s*/,w=/::(place)/g,S=/:(read-only)/g,_=/[svh]\w+-[tblr]{2}/,E=/\(\s*(.*)\s*\)/g,O=/([\s\S]*?);/g,j=/-self|flex-/g,T=/[^]*?(:[rp][el]a[\w-]+)[^]*/,I=/stretch|:\s*\w+\-(?:conte|avail)/,G=/([^-])(image-set\()/,U=1,H=1,pe=0,ae=1,Be=[],Pe=[],Ee=0,Xt=null,ur=0,L="";return d.use=s,d.set=c,e!==void 0&&c(e),d}var ow={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Pg(e){var t=Object.create(null);return function(r){return t[r]===void 0&&(t[r]=e(r)),t[r]}}var aw=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,sc=Pg(function(e){return aw.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),Og={exports:{}},ne={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Te=typeof Symbol=="function"&&Symbol.for,Wd=Te?Symbol.for("react.element"):60103,Ud=Te?Symbol.for("react.portal"):60106,Bl=Te?Symbol.for("react.fragment"):60107,Wl=Te?Symbol.for("react.strict_mode"):60108,Ul=Te?Symbol.for("react.profiler"):60114,Hl=Te?Symbol.for("react.provider"):60109,Vl=Te?Symbol.for("react.context"):60110,Hd=Te?Symbol.for("react.async_mode"):60111,Kl=Te?Symbol.for("react.concurrent_mode"):60111,Xl=Te?Symbol.for("react.forward_ref"):60112,Gl=Te?Symbol.for("react.suspense"):60113,lw=Te?Symbol.for("react.suspense_list"):60120,Yl=Te?Symbol.for("react.memo"):60115,ql=Te?Symbol.for("react.lazy"):60116,sw=Te?Symbol.for("react.block"):60121,uw=Te?Symbol.for("react.fundamental"):60117,cw=Te?Symbol.for("react.responder"):60118,dw=Te?Symbol.for("react.scope"):60119;function ft(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Wd:switch(e=e.type,e){case Hd:case Kl:case Bl:case Ul:case Wl:case Gl:return e;default:switch(e=e&&e.$$typeof,e){case Vl:case Xl:case ql:case Yl:case Hl:return e;default:return t}}case Ud:return t}}}function Ng(e){return ft(e)===Kl}ne.AsyncMode=Hd;ne.ConcurrentMode=Kl;ne.ContextConsumer=Vl;ne.ContextProvider=Hl;ne.Element=Wd;ne.ForwardRef=Xl;ne.Fragment=Bl;ne.Lazy=ql;ne.Memo=Yl;ne.Portal=Ud;ne.Profiler=Ul;ne.StrictMode=Wl;ne.Suspense=Gl;ne.isAsyncMode=function(e){return Ng(e)||ft(e)===Hd};ne.isConcurrentMode=Ng;ne.isContextConsumer=function(e){return ft(e)===Vl};ne.isContextProvider=function(e){return ft(e)===Hl};ne.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Wd};ne.isForwardRef=function(e){return ft(e)===Xl};ne.isFragment=function(e){return ft(e)===Bl};ne.isLazy=function(e){return ft(e)===ql};ne.isMemo=function(e){return ft(e)===Yl};ne.isPortal=function(e){return ft(e)===Ud};ne.isProfiler=function(e){return ft(e)===Ul};ne.isStrictMode=function(e){return ft(e)===Wl};ne.isSuspense=function(e){return ft(e)===Gl};ne.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Bl||e===Kl||e===Ul||e===Wl||e===Gl||e===lw||typeof e=="object"&&e!==null&&(e.$$typeof===ql||e.$$typeof===Yl||e.$$typeof===Hl||e.$$typeof===Vl||e.$$typeof===Xl||e.$$typeof===uw||e.$$typeof===cw||e.$$typeof===dw||e.$$typeof===sw)};ne.typeOf=ft;Og.exports=ne;var Vd=Og.exports,fw={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},pw={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},hw={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Tg={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Kd={};Kd[Vd.ForwardRef]=hw;Kd[Vd.Memo]=Tg;function uh(e){return Vd.isMemo(e)?Tg:Kd[e.$$typeof]||fw}var mw=Object.defineProperty,gw=Object.getOwnPropertyNames,ch=Object.getOwnPropertySymbols,vw=Object.getOwnPropertyDescriptor,yw=Object.getPrototypeOf,dh=Object.prototype;function Rg(e,t,r){if(typeof t!="string"){if(dh){var n=yw(t);n&&n!==dh&&Rg(e,n,r)}var i=gw(t);ch&&(i=i.concat(ch(t)));for(var o=uh(e),a=uh(t),l=0;l<i.length;++l){var s=i[l];if(!pw[s]&&!(r&&r[s])&&!(a&&a[s])&&!(o&&o[s])){var c=vw(t,s);try{mw(e,s,c)}catch{}}}}return e}var xw=Rg;function Ot(){return(Ot=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var fh=function(e,t){for(var r=[e[0]],n=0,i=t.length;n<i;n+=1)r.push(t[n],e[n+1]);return r},uc=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!Fd.exports.typeOf(e)},sl=Object.freeze([]),Nr=Object.freeze({});function Zn(e){return typeof e=="function"}function ph(e){return e.displayName||e.name||"Component"}function Xd(e){return e&&typeof e.styledComponentId=="string"}var ei=typeof process!="undefined"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Gd=typeof window!="undefined"&&"HTMLElement"in window,ww=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process!="undefined"&&process.env!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""?{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY:!1)),bw={};function an(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(r.length>0?" Args: "+r.join(", "):""))}var Sw=function(){function e(r){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=r}var t=e.prototype;return t.indexOfGroup=function(r){for(var n=0,i=0;i<r;i++)n+=this.groupSizes[i];return n},t.insertRules=function(r,n){if(r>=this.groupSizes.length){for(var i=this.groupSizes,o=i.length,a=o;r>=a;)(a<<=1)<0&&an(16,""+r);this.groupSizes=new Uint32Array(a),this.groupSizes.set(i),this.length=a;for(var l=o;l<a;l++)this.groupSizes[l]=0}for(var s=this.indexOfGroup(r+1),c=0,d=n.length;c<d;c++)this.tag.insertRule(s,n[c])&&(this.groupSizes[r]++,s++)},t.clearGroup=function(r){if(r<this.length){var n=this.groupSizes[r],i=this.indexOfGroup(r),o=i+n;this.groupSizes[r]=0;for(var a=i;a<o;a++)this.tag.deleteRule(i)}},t.getGroup=function(r){var n="";if(r>=this.length||this.groupSizes[r]===0)return n;for(var i=this.groupSizes[r],o=this.indexOfGroup(r),a=o+i,l=o;l<a;l++)n+=this.tag.getRule(l)+`/*!sc*/
`;return n},e}(),Oa=new Map,ul=new Map,Qi=1,ua=function(e){if(Oa.has(e))return Oa.get(e);for(;ul.has(Qi);)Qi++;var t=Qi++;return Oa.set(e,t),ul.set(t,e),t},kw=function(e){return ul.get(e)},Cw=function(e,t){t>=Qi&&(Qi=t+1),Oa.set(e,t),ul.set(t,e)},_w="style["+ei+'][data-styled-version="5.3.11"]',Ew=new RegExp("^"+ei+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),$w=function(e,t,r){for(var n,i=r.split(","),o=0,a=i.length;o<a;o++)(n=i[o])&&e.registerName(t,n)},Pw=function(e,t){for(var r=(t.textContent||"").split(`/*!sc*/
`),n=[],i=0,o=r.length;i<o;i++){var a=r[i].trim();if(a){var l=a.match(Ew);if(l){var s=0|parseInt(l[1],10),c=l[2];s!==0&&(Cw(c,s),$w(e,c,l[3]),e.getTag().insertRules(s,n)),n.length=0}else n.push(a)}}},Ow=function(){return typeof __webpack_nonce__!="undefined"?__webpack_nonce__:null},Mg=function(e){var t=document.head,r=e||t,n=document.createElement("style"),i=function(l){for(var s=l.childNodes,c=s.length;c>=0;c--){var d=s[c];if(d&&d.nodeType===1&&d.hasAttribute(ei))return d}}(r),o=i!==void 0?i.nextSibling:null;n.setAttribute(ei,"active"),n.setAttribute("data-styled-version","5.3.11");var a=Ow();return a&&n.setAttribute("nonce",a),r.insertBefore(n,o),n},Nw=function(){function e(r){var n=this.element=Mg(r);n.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var o=document.styleSheets,a=0,l=o.length;a<l;a++){var s=o[a];if(s.ownerNode===i)return s}an(17)}(n),this.length=0}var t=e.prototype;return t.insertRule=function(r,n){try{return this.sheet.insertRule(n,r),this.length++,!0}catch{return!1}},t.deleteRule=function(r){this.sheet.deleteRule(r),this.length--},t.getRule=function(r){var n=this.sheet.cssRules[r];return n!==void 0&&typeof n.cssText=="string"?n.cssText:""},e}(),Tw=function(){function e(r){var n=this.element=Mg(r);this.nodes=n.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(r,n){if(r<=this.length&&r>=0){var i=document.createTextNode(n),o=this.nodes[r];return this.element.insertBefore(i,o||null),this.length++,!0}return!1},t.deleteRule=function(r){this.element.removeChild(this.nodes[r]),this.length--},t.getRule=function(r){return r<this.length?this.nodes[r].textContent:""},e}(),Rw=function(){function e(r){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(r,n){return r<=this.length&&(this.rules.splice(r,0,n),this.length++,!0)},t.deleteRule=function(r){this.rules.splice(r,1),this.length--},t.getRule=function(r){return r<this.length?this.rules[r]:""},e}(),hh=Gd,Mw={isServer:!Gd,useCSSOMInjection:!ww},cl=function(){function e(r,n,i){r===void 0&&(r=Nr),n===void 0&&(n={}),this.options=Ot({},Mw,{},r),this.gs=n,this.names=new Map(i),this.server=!!r.isServer,!this.server&&Gd&&hh&&(hh=!1,function(o){for(var a=document.querySelectorAll(_w),l=0,s=a.length;l<s;l++){var c=a[l];c&&c.getAttribute(ei)!=="active"&&(Pw(o,c),c.parentNode&&c.parentNode.removeChild(c))}}(this))}e.registerId=function(r){return ua(r)};var t=e.prototype;return t.reconstructWithOptions=function(r,n){return n===void 0&&(n=!0),new e(Ot({},this.options,{},r),this.gs,n&&this.names||void 0)},t.allocateGSInstance=function(r){return this.gs[r]=(this.gs[r]||0)+1},t.getTag=function(){return this.tag||(this.tag=(i=(n=this.options).isServer,o=n.useCSSOMInjection,a=n.target,r=i?new Rw(a):o?new Nw(a):new Tw(a),new Sw(r)));var r,n,i,o,a},t.hasNameForId=function(r,n){return this.names.has(r)&&this.names.get(r).has(n)},t.registerName=function(r,n){if(ua(r),this.names.has(r))this.names.get(r).add(n);else{var i=new Set;i.add(n),this.names.set(r,i)}},t.insertRules=function(r,n,i){this.registerName(r,n),this.getTag().insertRules(ua(r),i)},t.clearNames=function(r){this.names.has(r)&&this.names.get(r).clear()},t.clearRules=function(r){this.getTag().clearGroup(ua(r)),this.clearNames(r)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(r){for(var n=r.getTag(),i=n.length,o="",a=0;a<i;a++){var l=kw(a);if(l!==void 0){var s=r.names.get(l),c=n.getGroup(a);if(s&&c&&s.size){var d=ei+".g"+a+'[id="'+l+'"]',p="";s!==void 0&&s.forEach(function(m){m.length>0&&(p+=m+",")}),o+=""+c+d+'{content:"'+p+`"}/*!sc*/
`}}}return o}(this)},e}(),Lw=/(a)(d)/gi,mh=function(e){return String.fromCharCode(e+(e>25?39:97))};function cc(e){var t,r="";for(t=Math.abs(e);t>52;t=t/52|0)r=mh(t%52)+r;return(mh(t%52)+r).replace(Lw,"$1-$2")}var Rn=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},Lg=function(e){return Rn(5381,e)};function jg(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(Zn(r)&&!Xd(r))return!1}return!0}var jw=Lg("5.3.11"),zw=function(){function e(t,r,n){this.rules=t,this.staticRulesId="",this.isStatic=(n===void 0||n.isStatic)&&jg(t),this.componentId=r,this.baseHash=Rn(jw,r),this.baseStyle=n,cl.registerId(r)}return e.prototype.generateAndInjectStyles=function(t,r,n){var i=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(t,r,n)),this.isStatic&&!n.hash)if(this.staticRulesId&&r.hasNameForId(i,this.staticRulesId))o.push(this.staticRulesId);else{var a=ln(this.rules,t,r,n).join(""),l=cc(Rn(this.baseHash,a)>>>0);if(!r.hasNameForId(i,l)){var s=n(a,"."+l,void 0,i);r.insertRules(i,l,s)}o.push(l),this.staticRulesId=l}else{for(var c=this.rules.length,d=Rn(this.baseHash,n.hash),p="",m=0;m<c;m++){var y=this.rules[m];if(typeof y=="string")p+=y;else if(y){var x=ln(y,t,r,n),v=Array.isArray(x)?x.join(""):x;d=Rn(d,v+m),p+=v}}if(p){var f=cc(d>>>0);if(!r.hasNameForId(i,f)){var h=n(p,"."+f,void 0,i);r.insertRules(i,f,h)}o.push(f)}}return o.join(" ")},e}(),Aw=/^\s*\/\/.*$/gm,Iw=[":","[",".","#"];function Dw(e){var t,r,n,i,o=e===void 0?Nr:e,a=o.options,l=a===void 0?Nr:a,s=o.plugins,c=s===void 0?sl:s,d=new iw(l),p=[],m=function(v){function f(h){if(h)try{v(h+"}")}catch{}}return function(h,g,w,S,_,E,O,j,T,I){switch(h){case 1:if(T===0&&g.charCodeAt(0)===64)return v(g+";"),"";break;case 2:if(j===0)return g+"/*|*/";break;case 3:switch(j){case 102:case 112:return v(w[0]+g),"";default:return g+(I===0?"/*|*/":"")}case-2:g.split("/*|*/}").forEach(f)}}}(function(v){p.push(v)}),y=function(v,f,h){return f===0&&Iw.indexOf(h[r.length])!==-1||h.match(i)?v:"."+t};function x(v,f,h,g){g===void 0&&(g="&");var w=v.replace(Aw,""),S=f&&h?h+" "+f+" { "+w+" }":w;return t=g,r=f,n=new RegExp("\\"+r+"\\b","g"),i=new RegExp("(\\"+r+"\\b){2,}"),d(h||!f?"":f,S)}return d.use([].concat(c,[function(v,f,h){v===2&&h.length&&h[0].lastIndexOf(r)>0&&(h[0]=h[0].replace(n,y))},m,function(v){if(v===-2){var f=p;return p=[],f}}])),x.hash=c.length?c.reduce(function(v,f){return f.name||an(15),Rn(v,f.name)},5381).toString():"",x}var zg=Ge.createContext();zg.Consumer;var Ag=Ge.createContext(),Fw=(Ag.Consumer,new cl),dc=Dw();function Ig(){return k.exports.useContext(zg)||Fw}function Dg(){return k.exports.useContext(Ag)||dc}var Bw=function(){function e(t,r){var n=this;this.inject=function(i,o){o===void 0&&(o=dc);var a=n.name+o.hash;i.hasNameForId(n.id,a)||i.insertRules(n.id,a,o(n.rules,a,"@keyframes"))},this.toString=function(){return an(12,String(n.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=r}return e.prototype.getName=function(t){return t===void 0&&(t=dc),this.name+t.hash},e}(),Ww=/([A-Z])/,Uw=/([A-Z])/g,Hw=/^ms-/,Vw=function(e){return"-"+e.toLowerCase()};function gh(e){return Ww.test(e)?e.replace(Uw,Vw).replace(Hw,"-ms-"):e}var vh=function(e){return e==null||e===!1||e===""};function ln(e,t,r,n){if(Array.isArray(e)){for(var i,o=[],a=0,l=e.length;a<l;a+=1)(i=ln(e[a],t,r,n))!==""&&(Array.isArray(i)?o.push.apply(o,i):o.push(i));return o}if(vh(e))return"";if(Xd(e))return"."+e.styledComponentId;if(Zn(e)){if(typeof(c=e)!="function"||c.prototype&&c.prototype.isReactComponent||!t)return e;var s=e(t);return ln(s,t,r,n)}var c;return e instanceof Bw?r?(e.inject(r,n),e.getName(n)):e:uc(e)?function d(p,m){var y,x,v=[];for(var f in p)p.hasOwnProperty(f)&&!vh(p[f])&&(Array.isArray(p[f])&&p[f].isCss||Zn(p[f])?v.push(gh(f)+":",p[f],";"):uc(p[f])?v.push.apply(v,d(p[f],f)):v.push(gh(f)+": "+(y=f,(x=p[f])==null||typeof x=="boolean"||x===""?"":typeof x!="number"||x===0||y in ow||y.startsWith("--")?String(x).trim():x+"px")+";"));return m?[m+" {"].concat(v,["}"]):v}(e):e.toString()}var yh=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function Qe(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return Zn(e)||uc(e)?yh(ln(fh(sl,[e].concat(r)))):r.length===0&&e.length===1&&typeof e[0]=="string"?e:yh(ln(fh(e,r)))}var Fg=function(e,t,r){return r===void 0&&(r=Nr),e.theme!==r.theme&&e.theme||t||r.theme},Kw=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Xw=/(^-|-$)/g;function eu(e){return e.replace(Kw,"-").replace(Xw,"")}var Bg=function(e){return cc(Lg(e)>>>0)};function ca(e){return typeof e=="string"&&!0}var fc=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},Gw=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function Yw(e,t,r){var n=e[r];fc(t)&&fc(n)?Wg(n,t):e[r]=t}function Wg(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];for(var i=0,o=r;i<o.length;i++){var a=o[i];if(fc(a))for(var l in a)Gw(l)&&Yw(e,a[l],l)}return e}var vo=Ge.createContext();vo.Consumer;function qw(e){var t=k.exports.useContext(vo),r=k.exports.useMemo(function(){return function(n,i){if(!n)return an(14);if(Zn(n)){var o=n(i);return o}return Array.isArray(n)||typeof n!="object"?an(8):i?Ot({},i,{},n):n}(e.theme,t)},[e.theme,t]);return e.children?Ge.createElement(vo.Provider,{value:r},e.children):null}var tu={};function Ug(e,t,r){var n=Xd(e),i=!ca(e),o=t.attrs,a=o===void 0?sl:o,l=t.componentId,s=l===void 0?function(g,w){var S=typeof g!="string"?"sc":eu(g);tu[S]=(tu[S]||0)+1;var _=S+"-"+Bg("5.3.11"+S+tu[S]);return w?w+"-"+_:_}(t.displayName,t.parentComponentId):l,c=t.displayName,d=c===void 0?function(g){return ca(g)?"styled."+g:"Styled("+ph(g)+")"}(e):c,p=t.displayName&&t.componentId?eu(t.displayName)+"-"+t.componentId:t.componentId||s,m=n&&e.attrs?Array.prototype.concat(e.attrs,a).filter(Boolean):a,y=t.shouldForwardProp;n&&e.shouldForwardProp&&(y=t.shouldForwardProp?function(g,w,S){return e.shouldForwardProp(g,w,S)&&t.shouldForwardProp(g,w,S)}:e.shouldForwardProp);var x,v=new zw(r,p,n?e.componentStyle:void 0),f=v.isStatic&&a.length===0,h=function(g,w){return function(S,_,E,O){var j=S.attrs,T=S.componentStyle,I=S.defaultProps,G=S.foldedComponentIds,U=S.shouldForwardProp,H=S.styledComponentId,pe=S.target,ae=function(A,C,V){A===void 0&&(A=Nr);var R=Ot({},C,{theme:A}),te={};return V.forEach(function(Z){var re,W,Re,tt=Z;for(re in Zn(tt)&&(tt=tt(R)),tt)R[re]=te[re]=re==="className"?(W=te[re],Re=tt[re],W&&Re?W+" "+Re:W||Re):tt[re]}),[R,te]}(Fg(_,k.exports.useContext(vo),I)||Nr,_,j),Be=ae[0],Pe=ae[1],Ee=function(A,C,V,R){var te=Ig(),Z=Dg(),re=C?A.generateAndInjectStyles(Nr,te,Z):A.generateAndInjectStyles(V,te,Z);return re}(T,O,Be),Xt=E,ur=Pe.$as||_.$as||Pe.as||_.as||pe,L=ca(ur),$=Pe!==_?Ot({},_,{},Pe):_,P={};for(var M in $)M[0]!=="$"&&M!=="as"&&(M==="forwardedAs"?P.as=$[M]:(U?U(M,sc,ur):!L||sc(M))&&(P[M]=$[M]));return _.style&&Pe.style!==_.style&&(P.style=Ot({},_.style,{},Pe.style)),P.className=Array.prototype.concat(G,H,Ee!==H?Ee:null,_.className,Pe.className).filter(Boolean).join(" "),P.ref=Xt,k.exports.createElement(ur,P)}(x,g,w,f)};return h.displayName=d,(x=Ge.forwardRef(h)).attrs=m,x.componentStyle=v,x.displayName=d,x.shouldForwardProp=y,x.foldedComponentIds=n?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):sl,x.styledComponentId=p,x.target=n?e.target:e,x.withComponent=function(g){var w=t.componentId,S=function(E,O){if(E==null)return{};var j,T,I={},G=Object.keys(E);for(T=0;T<G.length;T++)j=G[T],O.indexOf(j)>=0||(I[j]=E[j]);return I}(t,["componentId"]),_=w&&w+"-"+(ca(g)?g:eu(ph(g)));return Ug(g,Ot({},S,{attrs:m,componentId:_}),r)},Object.defineProperty(x,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(g){this._foldedDefaultProps=n?Wg({},e.defaultProps,g):g}}),Object.defineProperty(x,"toString",{value:function(){return"."+x.styledComponentId}}),i&&xw(x,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),x}var pc=function(e){return function t(r,n,i){if(i===void 0&&(i=Nr),!Fd.exports.isValidElementType(n))return an(1,String(n));var o=function(){return r(n,i,Qe.apply(void 0,arguments))};return o.withConfig=function(a){return t(r,n,Ot({},i,{},a))},o.attrs=function(a){return t(r,n,Ot({},i,{attrs:Array.prototype.concat(i.attrs,a).filter(Boolean)}))},o}(Ug,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){pc[e]=pc(e)});var Qw=function(){function e(r,n){this.rules=r,this.componentId=n,this.isStatic=jg(r),cl.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(r,n,i,o){var a=o(ln(this.rules,n,i,o).join(""),""),l=this.componentId+r;i.insertRules(l,l,a)},t.removeStyles=function(r,n){n.clearRules(this.componentId+r)},t.renderStyles=function(r,n,i,o){r>2&&cl.registerId(this.componentId+r),this.removeStyles(r,i),this.createStyles(r,n,i,o)},e}();function Jw(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];var i=Qe.apply(void 0,[e].concat(r)),o="sc-global-"+Bg(JSON.stringify(i)),a=new Qw(i,o);function l(c){var d=Ig(),p=Dg(),m=k.exports.useContext(vo),y=k.exports.useRef(d.allocateGSInstance(o)).current;return d.server&&s(y,c,d,m,p),k.exports.useLayoutEffect(function(){if(!d.server)return s(y,c,d,m,p),function(){return a.removeStyles(y,d)}},[y,c,d,m,p]),null}function s(c,d,p,m,y){if(a.isStatic)a.renderStyles(c,bw,p,y);else{var x=Ot({},d,{theme:Fg(d,m,l.defaultProps)});a.renderStyles(c,x,p,y)}}return Ge.memo(l)}var D=pc;const Zw=Jw`

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
`,eb={header:"#ffffff",headerDesktop:"#ffffff",body:"#ffffff",bodyDesktop:"#F7F7F8",sideBar:"#efeff1",color:"#9147ff",textColor:"#000",hover:"#0000001a",soft:"#777777",bits:"#e9e9e9",softDesktop:"#555555",border:"#efeff1",darkModeBg:"#dedede",iconColor:"#0e0e10",profit:"#0f0",loss:"$f00"},tb={header:"#0e0e10",headerDesktop:"#18181B",body:"#18181B",bodyDesktop:"#0e0e10",sideBar:"#1f1f23",color:"#9147ff",textColor:"#fcfaff",hover:"#ffffff1a",soft:"#adadb8",bits:"#333333",softDesktop:"#cdcdb8",border:"#ffffff1a",darkModeBg:"#9147ff",iconColor:"#adadb8",profit:"#0f0",loss:"$f00"};var di={exports:{}},rb="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",nb=rb,ib=nb;function Hg(){}function Vg(){}Vg.resetWarningCache=Hg;var ob=function(){function e(n,i,o,a,l,s){if(s!==ib){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}e.isRequired=e;function t(){return e}var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Vg,resetWarningCache:Hg};return r.PropTypes=r,r};di.exports=ob();var Dr=Ge.createContext(null);function ab(e){e()}var Kg=ab,lb=function(t){return Kg=t},sb=function(){return Kg};function ub(){var e=sb(),t=null,r=null;return{clear:function(){t=null,r=null},notify:function(){e(function(){for(var i=t;i;)i.callback(),i=i.next})},get:function(){for(var i=[],o=t;o;)i.push(o),o=o.next;return i},subscribe:function(i){var o=!0,a=r={callback:i,next:null,prev:r};return a.prev?a.prev.next=a:t=a,function(){!o||t===null||(o=!1,a.next?a.next.prev=a.prev:r=a.prev,a.prev?a.prev.next=a.next:t=a.next)}}}}var xh={notify:function(){},get:function(){return[]}};function Xg(e,t){var r,n=xh;function i(p){return s(),n.subscribe(p)}function o(){n.notify()}function a(){d.onStateChange&&d.onStateChange()}function l(){return Boolean(r)}function s(){r||(r=t?t.addNestedSub(a):e.subscribe(a),n=ub())}function c(){r&&(r(),r=void 0,n.clear(),n=xh)}var d={addNestedSub:i,notifyNestedSubs:o,handleChangeWrapper:a,isSubscribed:l,trySubscribe:s,tryUnsubscribe:c,getListeners:function(){return n}};return d}var hc=typeof window!="undefined"&&typeof window.document!="undefined"&&typeof window.document.createElement!="undefined"?k.exports.useLayoutEffect:k.exports.useEffect,Ql={exports:{}},Fo={};/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cb=k.exports,Gg=60103;Fo.Fragment=60107;if(typeof Symbol=="function"&&Symbol.for){var wh=Symbol.for;Gg=wh("react.element"),Fo.Fragment=wh("react.fragment")}var db=cb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,fb=Object.prototype.hasOwnProperty,pb={key:!0,ref:!0,__self:!0,__source:!0};function Yg(e,t,r){var n,i={},o=null,a=null;r!==void 0&&(o=""+r),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(n in t)fb.call(t,n)&&!pb.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)i[n]===void 0&&(i[n]=t[n]);return{$$typeof:Gg,type:e,key:o,ref:a,props:i,_owner:db.current}}Fo.jsx=Yg;Fo.jsxs=Yg;Ql.exports=Fo;const u=Ql.exports.jsx,b=Ql.exports.jsxs,Fe=Ql.exports.Fragment;function hb(e){var t=e.store,r=e.context,n=e.children,i=k.exports.useMemo(function(){var l=Xg(t);return{store:t,subscription:l}},[t]),o=k.exports.useMemo(function(){return t.getState()},[t]);hc(function(){var l=i.subscription;return l.onStateChange=l.notifyNestedSubs,l.trySubscribe(),o!==t.getState()&&l.notifyNestedSubs(),function(){l.tryUnsubscribe(),l.onStateChange=null}},[i,o]);var a=r||Dr;return u(a.Provider,{value:i,children:n})}function Q(){return Q=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Q.apply(null,arguments)}function lr(e,t){if(e==null)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.includes(n))continue;r[n]=e[n]}return r}function qg(){var e=k.exports.useContext(Dr);return e}function Qg(e){e===void 0&&(e=Dr);var t=e===Dr?qg:function(){return k.exports.useContext(e)};return function(){var n=t(),i=n.store;return i}}var mb=Qg();function gb(e){e===void 0&&(e=Dr);var t=e===Dr?mb:Qg(e);return function(){var n=t();return n.dispatch}}var Yd=gb(),vb=function(t,r){return t===r};function yb(e,t,r,n){var i=k.exports.useReducer(function(x){return x+1},0),o=i[1],a=k.exports.useMemo(function(){return Xg(r,n)},[r,n]),l=k.exports.useRef(),s=k.exports.useRef(),c=k.exports.useRef(),d=k.exports.useRef(),p=r.getState(),m;try{if(e!==s.current||p!==c.current||l.current){var y=e(p);d.current===void 0||!t(y,d.current)?m=y:m=d.current}else m=d.current}catch(x){throw l.current&&(x.message+=`
The error may be correlated with this previous error:
`+l.current.stack+`

`),x}return hc(function(){s.current=e,c.current=p,d.current=m,l.current=void 0}),hc(function(){function x(){try{var v=r.getState();if(v===c.current)return;var f=s.current(v);if(t(f,d.current))return;d.current=f,c.current=v}catch(h){l.current=h}o()}return a.onStateChange=x,a.trySubscribe(),x(),function(){return a.tryUnsubscribe()}},[r,a]),m}function xb(e){e===void 0&&(e=Dr);var t=e===Dr?qg:function(){return k.exports.useContext(e)};return function(n,i){i===void 0&&(i=vb);var o=t(),a=o.store,l=o.subscription,s=yb(n,i,a,l);return k.exports.useDebugValue(s),s}}var et=xb();lb(kl.exports.unstable_batchedUpdates);const wb=D.header`
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
`;var Jg={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},bh=Ge.createContext&&Ge.createContext(Jg),Tr=globalThis&&globalThis.__assign||function(){return Tr=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Tr.apply(this,arguments)},bb=globalThis&&globalThis.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r};function Zg(e){return e&&e.map(function(t,r){return Ge.createElement(t.tag,Tr({key:r},t.attr),Zg(t.child))})}function J(e){return function(t){return Ge.createElement(Sb,Tr({attr:Tr({},e.attr)},t),Zg(e.child))}}function Sb(e){var t=function(r){var n=e.attr,i=e.size,o=e.title,a=bb(e,["attr","size","title"]),l=i||r.size||"1em",s;return r.className&&(s=r.className),e.className&&(s=(s?s+" ":"")+e.className),Ge.createElement("svg",Tr({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,n,a,{className:s,style:Tr(Tr({color:e.color||r.color},r.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),o&&Ge.createElement("title",null,o),e.children)};return bh!==void 0?Ge.createElement(bh.Consumer,null,function(r){return t(r)}):t(Jg)}function kb(e){return J({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M4.5 12a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-1zm3 0a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1zm3 0a.5.5 0 0 1-.5-.5v-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5h-1z"}},{tag:"path",attr:{d:"M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"}}]})(e)}function qd(e){return J({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"}}]})(e)}function Qd(e){return J({tag:"svg",attr:{viewBox:"0 0 192 512"},child:[{tag:"path",attr:{d:"M96 184c39.8 0 72 32.2 72 72s-32.2 72-72 72-72-32.2-72-72 32.2-72 72-72zM24 80c0 39.8 32.2 72 72 72s72-32.2 72-72S135.8 8 96 8 24 40.2 24 80zm0 352c0 39.8 32.2 72 72 72s72-32.2 72-72-32.2-72-72-72-72 32.2-72 72z"}}]})(e)}function Cb(e){return J({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M4 6h2v12H4zm4 7h8.586l-4.293 4.293 1.414 1.414L20.414 12l-6.707-6.707-1.414 1.414L16.586 11H8z"}}]})(e)}function e1(e){return J({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"}}]})(e)}function _b(e){return J({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412l7.332 7.332c.17.299.498.492.875.492a.99.99 0 0 0 .792-.409l7.415-7.415c2.354-2.354 2.354-6.049-.002-8.416a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595zm6.791 1.61c1.563 1.571 1.564 4.025.002 5.588L12 18.586l-6.793-6.793c-1.562-1.563-1.561-4.017-.002-5.584.76-.756 1.754-1.172 2.799-1.172s2.035.416 2.789 1.17l.5.5a.999.999 0 0 0 1.414 0l.5-.5c1.512-1.509 4.074-1.505 5.584-.002z"}}]})(e)}function t1(e){return J({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M11.999 1.993C6.486 1.994 2 6.48 1.999 11.994c0 5.514 4.486 10 10.001 10 5.514-.001 10-4.487 10-10 0-5.514-4.486-10-10.001-10.001zM12 19.994c-4.412 0-8.001-3.589-8.001-8 .001-4.411 3.59-8 8-8.001C16.411 3.994 20 7.583 20 11.994c0 4.41-3.589 7.999-8 8z"}},{tag:"path",attr:{d:"m12.012 7.989-4.005 4.005 4.005 4.004v-3.004h3.994v-2h-3.994z"}}]})(e)}function Sh(e){return J({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M18.464 2.114a.998.998 0 0 0-1.033.063l-13 9a1.003 1.003 0 0 0 0 1.645l13 9A1 1 0 0 0 19 21V3a1 1 0 0 0-.536-.886zM17 19.091 6.757 12 17 4.909v14.182z"}}]})(e)}function Eb(e){return J({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M19 2H5c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h3.586L12 21.414 15.414 18H19c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 14h-4.414L12 18.586 9.414 16H5V4h14v12z"}}]})(e)}function Jd(e){return J({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"}}]})(e)}function dl(e){return J({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"}}]})(e)}const $b=D.div`
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
`;function Pb(e){return J({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"}}]})(e)}function Ob(e){return J({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 2H3v16h5v4l4-4h5l4-4V2zM11 11V7M16 11V7"}}]})(e)}function Nb(e){return J({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}},{tag:"circle",attr:{cx:"8.5",cy:"7",r:"4"}},{tag:"line",attr:{x1:"23",y1:"11",x2:"17",y2:"11"}}]})(e)}function Tb(e){return J({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}},{tag:"circle",attr:{cx:"9",cy:"7",r:"4"}},{tag:"path",attr:{d:"M23 21v-2a4 4 0 0 0-3-3.87"}},{tag:"path",attr:{d:"M16 3.13a4 4 0 0 1 0 7.75"}}]})(e)}function ru(e){return J({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z"}}]})(e)}function Rb(e){return J({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z"}}]})(e)}function Mb(e){return J({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95a15.65 15.65 0 00-1.38-3.56A8.03 8.03 0 0118.92 8zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56A7.987 7.987 0 015.08 16zm2.95-8H5.08a7.987 7.987 0 014.33-3.56A15.65 15.65 0 008.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 01-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"}}]})(e)}function r1(e){return J({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"}}]})(e)}function Lb(e){return J({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z"}}]})(e)}function jb(e){return J({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M17 8l-1.41 1.41L17.17 11H9v2h8.17l-1.58 1.58L17 16l4-4-4-4zM5 5h7V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h7v-2H5V5z"}}]})(e)}function zb(e){return J({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M15 8v8H5V8h10m1-2H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4V7c0-.55-.45-1-1-1z"}}]})(e)}function n1(e){return J({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M9.37 5.51A7.35 7.35 0 009.1 7.5c0 4.08 3.32 7.4 7.4 7.4.68 0 1.35-.09 1.99-.27A7.014 7.014 0 0112 19c-3.86 0-7-3.14-7-7 0-2.93 1.81-5.45 4.37-6.49zM12 3a9 9 0 109 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 01-4.4 2.26 5.403 5.403 0 01-3.14-9.8c-.44-.06-.9-.1-1.36-.1z"}}]})(e)}function Ab(e){return J({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M13.1714 12.0007L8.22168 7.05093L9.63589 5.63672L15.9999 12.0007L9.63589 18.3646L8.22168 16.9504L13.1714 12.0007Z"}}]})(e)}function Ib(e){return J({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M21 19.9997C21 20.552 20.5523 20.9997 20 20.9997H4C3.44772 20.9997 3 20.552 3 19.9997V9.48882C3 9.18023 3.14247 8.88893 3.38606 8.69947L11.3861 2.47725C11.7472 2.19639 12.2528 2.19639 12.6139 2.47725L20.6139 8.69947C20.8575 8.88893 21 9.18023 21 9.48882V19.9997ZM19 18.9997V9.97791L12 4.53346L5 9.97791V18.9997H19ZM7 14.9997H17V16.9997H7V14.9997Z"}}]})(e)}function Db(e){return J({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"}}]})(e)}function Fb(e){return J({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M4.41085 14.5259L7.81249 11.1243L10.6409 13.9527L13.7978 10.7958L12.0049 9.00293H17.0049V14.0029L15.212 12.21L10.6409 16.7811L7.81249 13.9527L5.33834 16.4268C6.77158 18.5823 9.22233 20.0029 12.0049 20.0029C16.4232 20.0029 20.0049 16.4212 20.0049 12.0029C20.0049 7.58465 16.4232 4.00293 12.0049 4.00293C7.5866 4.00293 4.00488 7.58465 4.00488 12.0029C4.00488 12.8845 4.14747 13.7327 4.41085 14.5259ZM2.87288 16.0841L2.86275 16.074L2.86662 16.0701C2.31276 14.8276 2.00488 13.4512 2.00488 12.0029C2.00488 6.48008 6.48204 2.00293 12.0049 2.00293C17.5277 2.00293 22.0049 6.48008 22.0049 12.0029C22.0049 17.5258 17.5277 22.0029 12.0049 22.0029C7.93574 22.0029 4.43426 19.5725 2.87288 16.0841Z"}}]})(e)}function Bb(e){return J({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853Z"}}]})(e)}function Wb(e){return J({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M4 18H6V20H18V4H6V6H4V3C4 2.44772 4.44772 2 5 2H19C19.5523 2 20 2.44772 20 3V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V18ZM6 11H13V13H6V16L1 12L6 8V11Z"}}]})(e)}function mc(e){return J({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M8.68735 4.00008L11.294 1.39348C11.6845 1.00295 12.3176 1.00295 12.7082 1.39348L15.3148 4.00008H19.0011C19.5533 4.00008 20.0011 4.4478 20.0011 5.00008V8.68637L22.6077 11.293C22.9982 11.6835 22.9982 12.3167 22.6077 12.7072L20.0011 15.3138V19.0001C20.0011 19.5524 19.5533 20.0001 19.0011 20.0001H15.3148L12.7082 22.6067C12.3176 22.9972 11.6845 22.9972 11.294 22.6067L8.68735 20.0001H5.00106C4.44877 20.0001 4.00106 19.5524 4.00106 19.0001V15.3138L1.39446 12.7072C1.00393 12.3167 1.00393 11.6835 1.39446 11.293L4.00106 8.68637V5.00008C4.00106 4.4478 4.44877 4.00008 5.00106 4.00008H8.68735ZM6.00106 6.00008V9.5148L3.51578 12.0001L6.00106 14.4854V18.0001H9.51578L12.0011 20.4854L14.4863 18.0001H18.0011V14.4854L20.4863 12.0001L18.0011 9.5148V6.00008H14.4863L12.0011 3.5148L9.51578 6.00008H6.00106ZM12.0011 16.0001C9.79192 16.0001 8.00106 14.2092 8.00106 12.0001C8.00106 9.79094 9.79192 8.00008 12.0011 8.00008C14.2102 8.00008 16.0011 9.79094 16.0011 12.0001C16.0011 14.2092 14.2102 16.0001 12.0011 16.0001ZM12.0011 14.0001C13.1056 14.0001 14.0011 13.1047 14.0011 12.0001C14.0011 10.8955 13.1056 10.0001 12.0011 10.0001C10.8965 10.0001 10.0011 10.8955 10.0011 12.0001C10.0011 13.1047 10.8965 14.0001 12.0011 14.0001Z"}}]})(e)}function Ub(e){return J({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M3.5 2h-1v5h1V2zm6.1 5H6.4L6 6.45v-1L6.4 5h3.2l.4.5v1l-.4.5zm-5 3H1.4L1 9.5v-1l.4-.5h3.2l.4.5v1l-.4.5zm3.9-8h-1v2h1V2zm-1 6h1v6h-1V8zm-4 3h-1v3h1v-3zm7.9 0h3.19l.4-.5v-.95l-.4-.5H11.4l-.4.5v.95l.4.5zm2.1-9h-1v6h1V2zm-1 10h1v2h-1v-2z"}}]})(e)}const Hb=D.div`
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
`;function $t(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];throw Error("[Immer] minified error nr: "+e+(r.length?" "+r.map(function(i){return"'"+i+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function Fr(e){return!!e&&!!e[de]}function rr(e){var t;return!!e&&(function(r){if(!r||typeof r!="object")return!1;var n=Object.getPrototypeOf(r);if(n===null)return!0;var i=Object.hasOwnProperty.call(n,"constructor")&&n.constructor;return i===Object||typeof i=="function"&&Function.toString.call(i)===Zb}(e)||Array.isArray(e)||!!e[Oh]||!!(!((t=e.constructor)===null||t===void 0)&&t[Oh])||Zd(e)||ef(e))}function sn(e,t,r){r===void 0&&(r=!1),fi(e)===0?(r?Object.keys:Hn)(e).forEach(function(n){r&&typeof n=="symbol"||t(n,e[n],e)}):e.forEach(function(n,i){return t(i,n,e)})}function fi(e){var t=e[de];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:Zd(e)?2:ef(e)?3:0}function Un(e,t){return fi(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function Vb(e,t){return fi(e)===2?e.get(t):e[t]}function i1(e,t,r){var n=fi(e);n===2?e.set(t,r):n===3?e.add(r):e[t]=r}function o1(e,t){return e===t?e!==0||1/e==1/t:e!=e&&t!=t}function Zd(e){return Qb&&e instanceof Map}function ef(e){return Jb&&e instanceof Set}function Xr(e){return e.o||e.t}function tf(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=l1(e);delete t[de];for(var r=Hn(t),n=0;n<r.length;n++){var i=r[n],o=t[i];o.writable===!1&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(t[i]={configurable:!0,writable:!0,enumerable:o.enumerable,value:e[i]})}return Object.create(Object.getPrototypeOf(e),t)}function rf(e,t){return t===void 0&&(t=!1),nf(e)||Fr(e)||!rr(e)||(fi(e)>1&&(e.set=e.add=e.clear=e.delete=Kb),Object.freeze(e),t&&sn(e,function(r,n){return rf(n,!0)},!0)),e}function Kb(){$t(2)}function nf(e){return e==null||typeof e!="object"||Object.isFrozen(e)}function Wt(e){var t=xc[e];return t||$t(18,e),t}function Xb(e,t){xc[e]||(xc[e]=t)}function gc(){return yo}function nu(e,t){t&&(Wt("Patches"),e.u=[],e.s=[],e.v=t)}function fl(e){vc(e),e.p.forEach(Gb),e.p=null}function vc(e){e===yo&&(yo=e.l)}function kh(e){return yo={p:[],l:yo,h:e,m:!0,_:0}}function Gb(e){var t=e[de];t.i===0||t.i===1?t.j():t.g=!0}function iu(e,t){t._=t.p.length;var r=t.p[0],n=e!==void 0&&e!==r;return t.h.O||Wt("ES5").S(t,e,n),n?(r[de].P&&(fl(t),$t(4)),rr(e)&&(e=pl(t,e),t.l||hl(t,e)),t.u&&Wt("Patches").M(r[de].t,e,t.u,t.s)):e=pl(t,r,[]),fl(t),t.u&&t.v(t.u,t.s),e!==a1?e:void 0}function pl(e,t,r){if(nf(t))return t;var n=t[de];if(!n)return sn(t,function(l,s){return Ch(e,n,t,l,s,r)},!0),t;if(n.A!==e)return t;if(!n.P)return hl(e,n.t,!0),n.t;if(!n.I){n.I=!0,n.A._--;var i=n.i===4||n.i===5?n.o=tf(n.k):n.o,o=i,a=!1;n.i===3&&(o=new Set(i),i.clear(),a=!0),sn(o,function(l,s){return Ch(e,n,i,l,s,r,a)}),hl(e,i,!1),r&&e.u&&Wt("Patches").N(n,r,e.u,e.s)}return n.o}function Ch(e,t,r,n,i,o,a){if(Fr(i)){var l=pl(e,i,o&&t&&t.i!==3&&!Un(t.R,n)?o.concat(n):void 0);if(i1(r,n,l),!Fr(l))return;e.m=!1}else a&&r.add(i);if(rr(i)&&!nf(i)){if(!e.h.D&&e._<1)return;pl(e,i),t&&t.A.l||hl(e,i)}}function hl(e,t,r){r===void 0&&(r=!1),!e.l&&e.h.D&&e.m&&rf(t,r)}function ou(e,t){var r=e[de];return(r?Xr(r):e)[t]}function _h(e,t){if(t in e)for(var r=Object.getPrototypeOf(e);r;){var n=Object.getOwnPropertyDescriptor(r,t);if(n)return n;r=Object.getPrototypeOf(r)}}function hr(e){e.P||(e.P=!0,e.l&&hr(e.l))}function au(e){e.o||(e.o=tf(e.t))}function yc(e,t,r){var n=Zd(t)?Wt("MapSet").F(t,r):ef(t)?Wt("MapSet").T(t,r):e.O?function(i,o){var a=Array.isArray(i),l={i:a?1:0,A:o?o.A:gc(),P:!1,I:!1,R:{},l:o,t:i,k:null,o:null,j:null,C:!1},s=l,c=xo;a&&(s=[l],c=Ii);var d=Proxy.revocable(s,c),p=d.revoke,m=d.proxy;return l.k=m,l.j=p,m}(t,r):Wt("ES5").J(t,r);return(r?r.A:gc()).p.push(n),n}function Yb(e){return Fr(e)||$t(22,e),function t(r){if(!rr(r))return r;var n,i=r[de],o=fi(r);if(i){if(!i.P&&(i.i<4||!Wt("ES5").K(i)))return i.t;i.I=!0,n=Eh(r,o),i.I=!1}else n=Eh(r,o);return sn(n,function(a,l){i&&Vb(i.t,a)===l||i1(n,a,t(l))}),o===3?new Set(n):n}(e)}function Eh(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return tf(e)}function qb(){function e(o,a){var l=i[o];return l?l.enumerable=a:i[o]=l={configurable:!0,enumerable:a,get:function(){var s=this[de];return xo.get(s,o)},set:function(s){var c=this[de];xo.set(c,o,s)}},l}function t(o){for(var a=o.length-1;a>=0;a--){var l=o[a][de];if(!l.P)switch(l.i){case 5:n(l)&&hr(l);break;case 4:r(l)&&hr(l)}}}function r(o){for(var a=o.t,l=o.k,s=Hn(l),c=s.length-1;c>=0;c--){var d=s[c];if(d!==de){var p=a[d];if(p===void 0&&!Un(a,d))return!0;var m=l[d],y=m&&m[de];if(y?y.t!==p:!o1(m,p))return!0}}var x=!!a[de];return s.length!==Hn(a).length+(x?0:1)}function n(o){var a=o.k;if(a.length!==o.t.length)return!0;var l=Object.getOwnPropertyDescriptor(a,a.length-1);if(l&&!l.get)return!0;for(var s=0;s<a.length;s++)if(!a.hasOwnProperty(s))return!0;return!1}var i={};Xb("ES5",{J:function(o,a){var l=Array.isArray(o),s=function(d,p){if(d){for(var m=Array(p.length),y=0;y<p.length;y++)Object.defineProperty(m,""+y,e(y,!0));return m}var x=l1(p);delete x[de];for(var v=Hn(x),f=0;f<v.length;f++){var h=v[f];x[h]=e(h,d||!!x[h].enumerable)}return Object.create(Object.getPrototypeOf(p),x)}(l,o),c={i:l?5:4,A:a?a.A:gc(),P:!1,I:!1,R:{},l:a,t:o,k:s,o:null,g:!1,C:!1};return Object.defineProperty(s,de,{value:c,writable:!0}),s},S:function(o,a,l){l?Fr(a)&&a[de].A===o&&t(o.p):(o.u&&function s(c){if(c&&typeof c=="object"){var d=c[de];if(d){var p=d.t,m=d.k,y=d.R,x=d.i;if(x===4)sn(m,function(w){w!==de&&(p[w]!==void 0||Un(p,w)?y[w]||s(m[w]):(y[w]=!0,hr(d)))}),sn(p,function(w){m[w]!==void 0||Un(m,w)||(y[w]=!1,hr(d))});else if(x===5){if(n(d)&&(hr(d),y.length=!0),m.length<p.length)for(var v=m.length;v<p.length;v++)y[v]=!1;else for(var f=p.length;f<m.length;f++)y[f]=!0;for(var h=Math.min(m.length,p.length),g=0;g<h;g++)m.hasOwnProperty(g)||(y[g]=!0),y[g]===void 0&&s(m[g])}}}}(o.p[0]),t(o.p))},K:function(o){return o.i===4?r(o):n(o)}})}var $h,yo,of=typeof Symbol!="undefined"&&typeof Symbol("x")=="symbol",Qb=typeof Map!="undefined",Jb=typeof Set!="undefined",Ph=typeof Proxy!="undefined"&&Proxy.revocable!==void 0&&typeof Reflect!="undefined",a1=of?Symbol.for("immer-nothing"):(($h={})["immer-nothing"]=!0,$h),Oh=of?Symbol.for("immer-draftable"):"__$immer_draftable",de=of?Symbol.for("immer-state"):"__$immer_state",Zb=""+Object.prototype.constructor,Hn=typeof Reflect!="undefined"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,l1=Object.getOwnPropertyDescriptors||function(e){var t={};return Hn(e).forEach(function(r){t[r]=Object.getOwnPropertyDescriptor(e,r)}),t},xc={},xo={get:function(e,t){if(t===de)return e;var r=Xr(e);if(!Un(r,t))return function(i,o,a){var l,s=_h(o,a);return s?"value"in s?s.value:(l=s.get)===null||l===void 0?void 0:l.call(i.k):void 0}(e,r,t);var n=r[t];return e.I||!rr(n)?n:n===ou(e.t,t)?(au(e),e.o[t]=yc(e.A.h,n,e)):n},has:function(e,t){return t in Xr(e)},ownKeys:function(e){return Reflect.ownKeys(Xr(e))},set:function(e,t,r){var n=_h(Xr(e),t);if(n!=null&&n.set)return n.set.call(e.k,r),!0;if(!e.P){var i=ou(Xr(e),t),o=i==null?void 0:i[de];if(o&&o.t===r)return e.o[t]=r,e.R[t]=!1,!0;if(o1(r,i)&&(r!==void 0||Un(e.t,t)))return!0;au(e),hr(e)}return e.o[t]===r&&(r!==void 0||t in e.o)||Number.isNaN(r)&&Number.isNaN(e.o[t])||(e.o[t]=r,e.R[t]=!0),!0},deleteProperty:function(e,t){return ou(e.t,t)!==void 0||t in e.t?(e.R[t]=!1,au(e),hr(e)):delete e.R[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var r=Xr(e),n=Reflect.getOwnPropertyDescriptor(r,t);return n&&{writable:!0,configurable:e.i!==1||t!=="length",enumerable:n.enumerable,value:r[t]}},defineProperty:function(){$t(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){$t(12)}},Ii={};sn(xo,function(e,t){Ii[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}}),Ii.deleteProperty=function(e,t){return Ii.set.call(this,e,t,void 0)},Ii.set=function(e,t,r){return xo.set.call(this,e[0],t,r,e[0])};var eS=function(){function e(r){var n=this;this.O=Ph,this.D=!0,this.produce=function(i,o,a){if(typeof i=="function"&&typeof o!="function"){var l=o;o=i;var s=n;return function(v){var f=this;v===void 0&&(v=l);for(var h=arguments.length,g=Array(h>1?h-1:0),w=1;w<h;w++)g[w-1]=arguments[w];return s.produce(v,function(S){var _;return(_=o).call.apply(_,[f,S].concat(g))})}}var c;if(typeof o!="function"&&$t(6),a!==void 0&&typeof a!="function"&&$t(7),rr(i)){var d=kh(n),p=yc(n,i,void 0),m=!0;try{c=o(p),m=!1}finally{m?fl(d):vc(d)}return typeof Promise!="undefined"&&c instanceof Promise?c.then(function(v){return nu(d,a),iu(v,d)},function(v){throw fl(d),v}):(nu(d,a),iu(c,d))}if(!i||typeof i!="object"){if((c=o(i))===void 0&&(c=i),c===a1&&(c=void 0),n.D&&rf(c,!0),a){var y=[],x=[];Wt("Patches").M(i,c,y,x),a(y,x)}return c}$t(21,i)},this.produceWithPatches=function(i,o){if(typeof i=="function")return function(c){for(var d=arguments.length,p=Array(d>1?d-1:0),m=1;m<d;m++)p[m-1]=arguments[m];return n.produceWithPatches(c,function(y){return i.apply(void 0,[y].concat(p))})};var a,l,s=n.produce(i,o,function(c,d){a=c,l=d});return typeof Promise!="undefined"&&s instanceof Promise?s.then(function(c){return[c,a,l]}):[s,a,l]},typeof(r==null?void 0:r.useProxies)=="boolean"&&this.setUseProxies(r.useProxies),typeof(r==null?void 0:r.autoFreeze)=="boolean"&&this.setAutoFreeze(r.autoFreeze)}var t=e.prototype;return t.createDraft=function(r){rr(r)||$t(8),Fr(r)&&(r=Yb(r));var n=kh(this),i=yc(this,r,void 0);return i[de].C=!0,vc(n),i},t.finishDraft=function(r,n){var i=r&&r[de],o=i.A;return nu(o,n),iu(void 0,o)},t.setAutoFreeze=function(r){this.D=r},t.setUseProxies=function(r){r&&!Ph&&$t(20),this.O=r},t.applyPatches=function(r,n){var i;for(i=n.length-1;i>=0;i--){var o=n[i];if(o.path.length===0&&o.op==="replace"){r=o.value;break}}i>-1&&(n=n.slice(i+1));var a=Wt("Patches").$;return Fr(r)?a(r,n):this.produce(r,function(l){return a(l,n)})},e}(),ct=new eS,s1=ct.produce;ct.produceWithPatches.bind(ct);ct.setAutoFreeze.bind(ct);ct.setUseProxies.bind(ct);ct.applyPatches.bind(ct);ct.createDraft.bind(ct);ct.finishDraft.bind(ct);function wo(e){return wo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},wo(e)}function tS(e,t){if(wo(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(wo(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function rS(e){var t=tS(e,"string");return wo(t)=="symbol"?t:t+""}function nS(e,t,r){return(t=rS(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Nh(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function Th(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Nh(Object(r),!0).forEach(function(n){nS(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Nh(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function He(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var Rh=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),lu=function(){return Math.random().toString(36).substring(7).split("").join(".")},ml={INIT:"@@redux/INIT"+lu(),REPLACE:"@@redux/REPLACE"+lu(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+lu()}};function iS(e){if(typeof e!="object"||e===null)return!1;for(var t=e;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function u1(e,t,r){var n;if(typeof t=="function"&&typeof r=="function"||typeof r=="function"&&typeof arguments[3]=="function")throw new Error(He(0));if(typeof t=="function"&&typeof r=="undefined"&&(r=t,t=void 0),typeof r!="undefined"){if(typeof r!="function")throw new Error(He(1));return r(u1)(e,t)}if(typeof e!="function")throw new Error(He(2));var i=e,o=t,a=[],l=a,s=!1;function c(){l===a&&(l=a.slice())}function d(){if(s)throw new Error(He(3));return o}function p(v){if(typeof v!="function")throw new Error(He(4));if(s)throw new Error(He(5));var f=!0;return c(),l.push(v),function(){if(!!f){if(s)throw new Error(He(6));f=!1,c();var g=l.indexOf(v);l.splice(g,1),a=null}}}function m(v){if(!iS(v))throw new Error(He(7));if(typeof v.type=="undefined")throw new Error(He(8));if(s)throw new Error(He(9));try{s=!0,o=i(o,v)}finally{s=!1}for(var f=a=l,h=0;h<f.length;h++){var g=f[h];g()}return v}function y(v){if(typeof v!="function")throw new Error(He(10));i=v,m({type:ml.REPLACE})}function x(){var v,f=p;return v={subscribe:function(g){if(typeof g!="object"||g===null)throw new Error(He(11));function w(){g.next&&g.next(d())}w();var S=f(w);return{unsubscribe:S}}},v[Rh]=function(){return this},v}return m({type:ml.INIT}),n={dispatch:m,subscribe:p,getState:d,replaceReducer:y},n[Rh]=x,n}function oS(e){Object.keys(e).forEach(function(t){var r=e[t],n=r(void 0,{type:ml.INIT});if(typeof n=="undefined")throw new Error(He(12));if(typeof r(void 0,{type:ml.PROBE_UNKNOWN_ACTION()})=="undefined")throw new Error(He(13))})}function aS(e){for(var t=Object.keys(e),r={},n=0;n<t.length;n++){var i=t[n];typeof e[i]=="function"&&(r[i]=e[i])}var o=Object.keys(r),a;try{oS(r)}catch(l){a=l}return function(s,c){if(s===void 0&&(s={}),a)throw a;for(var d=!1,p={},m=0;m<o.length;m++){var y=o[m],x=r[y],v=s[y],f=x(v,c);if(typeof f=="undefined")throw c&&c.type,new Error(He(14));p[y]=f,d=d||f!==v}return d=d||o.length!==Object.keys(s).length,d?p:s}}function gl(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.length===0?function(n){return n}:t.length===1?t[0]:t.reduce(function(n,i){return function(){return n(i.apply(void 0,arguments))}})}function lS(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(n){return function(){var i=n.apply(void 0,arguments),o=function(){throw new Error(He(15))},a={getState:i.getState,dispatch:function(){return o.apply(void 0,arguments)}},l=t.map(function(s){return s(a)});return o=gl.apply(void 0,l)(i.dispatch),Th(Th({},i),{},{dispatch:o})}}}function c1(e){var t=function(n){var i=n.dispatch,o=n.getState;return function(a){return function(l){return typeof l=="function"?l(i,o,e):a(l)}}};return t}var d1=c1();d1.withExtraArgument=c1;var Mh=d1,f1=globalThis&&globalThis.__extends||function(){var e=function(t,r){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,i){n.__proto__=i}||function(n,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(n[o]=i[o])},e(t,r)};return function(t,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");e(t,r);function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}(),sS=globalThis&&globalThis.__generator||function(e,t){var r={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},n,i,o,a;return a={next:l(0),throw:l(1),return:l(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function l(c){return function(d){return s([c,d])}}function s(c){if(n)throw new TypeError("Generator is already executing.");for(;r;)try{if(n=1,i&&(o=c[0]&2?i.return:c[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,c[1])).done)return o;switch(i=0,o&&(c=[c[0]&2,o.value]),c[0]){case 0:case 1:o=c;break;case 4:return r.label++,{value:c[1],done:!1};case 5:r.label++,i=c[1],c=[0];continue;case 7:c=r.ops.pop(),r.trys.pop();continue;default:if(o=r.trys,!(o=o.length>0&&o[o.length-1])&&(c[0]===6||c[0]===2)){r=0;continue}if(c[0]===3&&(!o||c[1]>o[0]&&c[1]<o[3])){r.label=c[1];break}if(c[0]===6&&r.label<o[1]){r.label=o[1],o=c;break}if(o&&r.label<o[2]){r.label=o[2],r.ops.push(c);break}o[2]&&r.ops.pop(),r.trys.pop();continue}c=t.call(e,r)}catch(d){c=[6,d],i=0}finally{n=o=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}},ti=globalThis&&globalThis.__spreadArray||function(e,t){for(var r=0,n=t.length,i=e.length;r<n;r++,i++)e[i]=t[r];return e},uS=Object.defineProperty,cS=Object.defineProperties,dS=Object.getOwnPropertyDescriptors,Lh=Object.getOwnPropertySymbols,fS=Object.prototype.hasOwnProperty,pS=Object.prototype.propertyIsEnumerable,jh=function(e,t,r){return t in e?uS(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r},Rr=function(e,t){for(var r in t||(t={}))fS.call(t,r)&&jh(e,r,t[r]);if(Lh)for(var n=0,i=Lh(t);n<i.length;n++){var r=i[n];pS.call(t,r)&&jh(e,r,t[r])}return e},su=function(e,t){return cS(e,dS(t))},hS=function(e,t,r){return new Promise(function(n,i){var o=function(s){try{l(r.next(s))}catch(c){i(c)}},a=function(s){try{l(r.throw(s))}catch(c){i(c)}},l=function(s){return s.done?n(s.value):Promise.resolve(s.value).then(o,a)};l((r=r.apply(e,t)).next())})},mS=typeof window!="undefined"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?gl:gl.apply(null,arguments)};function gS(e){if(typeof e!="object"||e===null)return!1;var t=Object.getPrototypeOf(e);if(t===null)return!0;for(var r=t;Object.getPrototypeOf(r)!==null;)r=Object.getPrototypeOf(r);return t===r}function Mr(e,t){function r(){for(var n=[],i=0;i<arguments.length;i++)n[i]=arguments[i];if(t){var o=t.apply(void 0,n);if(!o)throw new Error("prepareAction did not return an object");return Rr(Rr({type:e,payload:o.payload},"meta"in o&&{meta:o.meta}),"error"in o&&{error:o.error})}return{type:e,payload:n[0]}}return r.toString=function(){return""+e},r.type=e,r.match=function(n){return n.type===e},r}var vS=function(e){f1(t,e);function t(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];var i=e.apply(this,r)||this;return Object.setPrototypeOf(i,t.prototype),i}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return e.prototype.concat.apply(this,r)},t.prototype.prepend=function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return r.length===1&&Array.isArray(r[0])?new(t.bind.apply(t,ti([void 0],r[0].concat(this)))):new(t.bind.apply(t,ti([void 0],r.concat(this))))},t}(Array),yS=function(e){f1(t,e);function t(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];var i=e.apply(this,r)||this;return Object.setPrototypeOf(i,t.prototype),i}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return e.prototype.concat.apply(this,r)},t.prototype.prepend=function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return r.length===1&&Array.isArray(r[0])?new(t.bind.apply(t,ti([void 0],r[0].concat(this)))):new(t.bind.apply(t,ti([void 0],r.concat(this))))},t}(Array);function wc(e){return rr(e)?s1(e,function(){}):e}function xS(e){return typeof e=="boolean"}function wS(){return function(t){return bS(t)}}function bS(e){e===void 0&&(e={});var t=e.thunk,r=t===void 0?!0:t;e.immutableCheck,e.serializableCheck,e.actionCreatorCheck;var n=new vS;return r&&(xS(r)?n.push(Mh):n.push(Mh.withExtraArgument(r.extraArgument))),n}var SS=!0;function kS(e){var t=wS(),r=e||{},n=r.reducer,i=n===void 0?void 0:n,o=r.middleware,a=o===void 0?t():o,l=r.devTools,s=l===void 0?!0:l,c=r.preloadedState,d=c===void 0?void 0:c,p=r.enhancers,m=p===void 0?void 0:p,y;if(typeof i=="function")y=i;else if(gS(i))y=aS(i);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var x=a;typeof x=="function"&&(x=x(t));var v=lS.apply(void 0,x),f=gl;s&&(f=mS(Rr({trace:!SS},typeof s=="object"&&s)));var h=new yS(v),g=h;Array.isArray(m)?g=ti([v],m):typeof m=="function"&&(g=m(h));var w=f.apply(void 0,g);return u1(y,d,w)}function p1(e){var t={},r=[],n,i={addCase:function(o,a){var l=typeof o=="string"?o:o.type;if(!l)throw new Error("`builder.addCase` cannot be called with an empty action type");if(l in t)throw new Error("`builder.addCase` cannot be called with two reducers for the same action type");return t[l]=a,i},addMatcher:function(o,a){return r.push({matcher:o,reducer:a}),i},addDefaultCase:function(o){return n=o,i}};return e(i),[t,r,n]}function CS(e){return typeof e=="function"}function _S(e,t,r,n){r===void 0&&(r=[]);var i=typeof t=="function"?p1(t):[t,r,n],o=i[0],a=i[1],l=i[2],s;if(CS(e))s=function(){return wc(e())};else{var c=wc(e);s=function(){return c}}function d(p,m){p===void 0&&(p=s());var y=ti([o[m.type]],a.filter(function(x){var v=x.matcher;return v(m)}).map(function(x){var v=x.reducer;return v}));return y.filter(function(x){return!!x}).length===0&&(y=[l]),y.reduce(function(x,v){if(v)if(Fr(x)){var f=x,h=v(f,m);return h===void 0?x:h}else{if(rr(x))return s1(x,function(g){return v(g,m)});var h=v(x,m);if(h===void 0){if(x===null)return x;throw Error("A case reducer on a non-draftable value must not return undefined")}return h}return x},p)}return d.getInitialState=s,d}function ES(e,t){return e+"/"+t}function gn(e){var t=e.name;if(!t)throw new Error("`name` is a required option for createSlice");var r=typeof e.initialState=="function"?e.initialState:wc(e.initialState),n=e.reducers||{},i=Object.keys(n),o={},a={},l={};i.forEach(function(d){var p=n[d],m=ES(t,d),y,x;"reducer"in p?(y=p.reducer,x=p.prepare):y=p,o[d]=y,a[m]=y,l[d]=x?Mr(m,x):Mr(m)});function s(){var d=typeof e.extraReducers=="function"?p1(e.extraReducers):[e.extraReducers],p=d[0],m=p===void 0?{}:p,y=d[1],x=y===void 0?[]:y,v=d[2],f=v===void 0?void 0:v,h=Rr(Rr({},m),a);return _S(r,function(g){for(var w in h)g.addCase(w,h[w]);for(var S=0,_=x;S<_.length;S++){var E=_[S];g.addMatcher(E.matcher,E.reducer)}f&&g.addDefaultCase(f)})}var c;return{name:t,reducer:function(d,p){return c||(c=s()),c(d,p)},actions:l,caseReducers:o,getInitialState:function(){return c||(c=s()),c.getInitialState()}}}var $S="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",PS=function(e){e===void 0&&(e=21);for(var t="",r=e;r--;)t+=$S[Math.random()*64|0];return t},OS=["name","message","stack","code"],uu=function(){function e(t,r){this.payload=t,this.meta=r}return e}(),zh=function(){function e(t,r){this.payload=t,this.meta=r}return e}(),NS=function(e){if(typeof e=="object"&&e!==null){for(var t={},r=0,n=OS;r<n.length;r++){var i=n[r];typeof e[i]=="string"&&(t[i]=e[i])}return t}return{message:String(e)}};(function(){function e(t,r,n){var i=Mr(t+"/fulfilled",function(c,d,p,m){return{payload:c,meta:su(Rr({},m||{}),{arg:p,requestId:d,requestStatus:"fulfilled"})}}),o=Mr(t+"/pending",function(c,d,p){return{payload:void 0,meta:su(Rr({},p||{}),{arg:d,requestId:c,requestStatus:"pending"})}}),a=Mr(t+"/rejected",function(c,d,p,m,y){return{payload:m,error:(n&&n.serializeError||NS)(c||"Rejected"),meta:su(Rr({},y||{}),{arg:p,requestId:d,rejectedWithValue:!!m,requestStatus:"rejected",aborted:(c==null?void 0:c.name)==="AbortError",condition:(c==null?void 0:c.name)==="ConditionError"})}}),l=typeof AbortController!="undefined"?AbortController:function(){function c(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return c.prototype.abort=function(){},c}();function s(c){return function(d,p,m){var y=n!=null&&n.idGenerator?n.idGenerator(c):PS(),x=new l,v;function f(g){v=g,x.abort()}var h=function(){return hS(this,null,function(){var g,w,S,_,E,O,j;return sS(this,function(T){switch(T.label){case 0:return T.trys.push([0,4,,5]),_=(g=n==null?void 0:n.condition)==null?void 0:g.call(n,c,{getState:p,extra:m}),RS(_)?[4,_]:[3,2];case 1:_=T.sent(),T.label=2;case 2:if(_===!1||x.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return E=new Promise(function(I,G){return x.signal.addEventListener("abort",function(){return G({name:"AbortError",message:v||"Aborted"})})}),d(o(y,c,(w=n==null?void 0:n.getPendingMeta)==null?void 0:w.call(n,{requestId:y,arg:c},{getState:p,extra:m}))),[4,Promise.race([E,Promise.resolve(r(c,{dispatch:d,getState:p,extra:m,requestId:y,signal:x.signal,abort:f,rejectWithValue:function(I,G){return new uu(I,G)},fulfillWithValue:function(I,G){return new zh(I,G)}})).then(function(I){if(I instanceof uu)throw I;return I instanceof zh?i(I.payload,y,c,I.meta):i(I,y,c)})])];case 3:return S=T.sent(),[3,5];case 4:return O=T.sent(),S=O instanceof uu?a(null,y,c,O.payload,O.meta):a(O,y,c),[3,5];case 5:return j=n&&!n.dispatchConditionRejection&&a.match(S)&&S.meta.condition,j||d(S),[2,S]}})})}();return Object.assign(h,{abort:f,requestId:y,arg:c,unwrap:function(){return h.then(TS)}})}}return Object.assign(s,{pending:o,rejected:a,fulfilled:i,typePrefix:t})}return e.withTypes=function(){return e},e})();function TS(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function RS(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var af="listenerMiddleware";Mr(af+"/add");Mr(af+"/removeAll");Mr(af+"/remove");var Ah;typeof queueMicrotask=="function"&&queueMicrotask.bind(typeof window!="undefined"?window:typeof global!="undefined"?global:globalThis);qb();const h1=gn({name:"site",initialState:{darkStatus:!1,sideBarStatus:!0},reducers:{setDarkMode:e=>{e.darkStatus=!e.darkStatus},setSideBarStatus:e=>{e.sideBarStatus=!e.sideBarStatus}}}),{setDarkMode:m1,setSideBarStatus:MS}=h1.actions;var LS=h1.reducer;const Ih=({whichStatus:e,changeStatus:t})=>{const[r,n]=k.exports.useState(!1),i=Yd();return u(Hb,{children:u("div",{className:`button-box ${r?"button-true":""}`,onClick:()=>{!e||(n(!r),e==="online"?t():i(m1()))},children:u("div",{className:"ball"})})})},jS=()=>{let e=mn();const[t,r]=k.exports.useState(!1),[n,i]=k.exports.useState(!1);return u($b,{children:b("div",{className:"profile-box",children:[u("div",{className:"profile",onClick:()=>r(!t),children:u(dl,{})}),u("div",{className:`profile-menu ${t?"show-profile-menu":""}`,children:b("div",{className:"menu-box",children:[b("div",{className:"profile-info",children:[u("div",{className:"pp",children:u(dl,{})}),b("div",{className:"info",children:[u("div",{className:"username",children:"khaleesi"}),b("div",{className:"status",children:[u("div",{className:`status-icon ${n?"online":""}`,children:u(qd,{})}),u("span",{children:n?"Online":"Offline"})]})]})]}),b("div",{className:"status-button",children:[u("span",{children:"Online"}),u(Ih,{whichStatus:"online",changeStatus:()=>i(!n)})]}),u("div",{className:"menu-list",children:b("ul",{children:[u("li",{children:b("div",{className:"item",children:[u(Nb,{})," ",u("span",{children:"Channel"})]})}),u("li",{children:b("div",{className:"item",children:[u(Ub,{})," ",u("span",{children:"Video Producer"})]})}),u("li",{children:b("div",{className:"item",children:[u(kb,{})," ",u("span",{children:"Creator Dashboard"})]})}),u("li",{children:b("div",{className:"item",children:[u(Pb,{})," ",u("span",{children:"Safety"})]})}),u("hr",{}),u("li",{children:b("div",{className:"item",children:[u(mc,{})," ",u("span",{children:"Settings"})]})}),u("li",{children:b("div",{className:"item",children:[u(Ob,{style:{transform:"rotate(180deg)"}})," ",u("span",{children:"BetterTTV Settings"})]})}),b("li",{children:[b("div",{className:"item",children:[u(Mb,{})," ",u("span",{children:"Language"})]}),u(Ab,{})]}),b("li",{children:[b("div",{className:"item",children:[u(n1,{})," ",u("span",{children:"Dark Theme"})]}),u(Ih,{whichStatus:"darkmode"})]}),u("hr",{}),u("li",{children:b("div",{className:"item",onClick:()=>{document.cookie="isLoggedIn="+!1,e("/login")},children:[u(jb,{style:{transform:"rotate(180deg)"}})," ",u("span",{children:"Log Out"})]})})]})})]})})]})})},zS=D.div`
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
`,AS=D.div`
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
`,IS=D.div`
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
`,DS=({user:e,imageId:t})=>u(AS,{children:u("li",{children:b("div",{className:"item",children:[u("div",{className:"pp",children:u("img",{src:`https://i.pravatar.cc/5${t}`})}),b("div",{className:"hover-section",children:[b("div",{className:"info",children:[u("div",{className:"username",children:e.username}),u("div",{className:"title",children:e.game})]}),b("div",{className:"live",children:[u("div",{className:"live-icon",children:u(qd,{})}),u("span",{children:"333"})]})]})]})})}),Dh=()=>{const{users:e}=et(t=>t.user);return u(IS,{children:b("div",{className:"list",children:[u("ul",{children:e.map((t,r)=>{if(!(r>4))return u(DS,{user:t,imageId:r},r)})}),u("div",{className:"show-more",children:u("span",{children:"Show More"})})]})})},FS=D.div`
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
`,g1=({placeholder:e})=>{const[t,r]=k.exports.useState(!1);return u(FS,{children:b("div",{className:`searchbar-box ${t?"focus":""}`,children:[u("div",{className:"search-icon",children:u(Jd,{})}),u("input",{type:"text",placeholder:e,className:"input",onFocus:()=>r(!0),onBlur:()=>r(!1)})]})})},BS=({mySize:e})=>{const{sideBarStatus:t}=et(n=>n.site),r=Yd();return u(zS,{children:b("div",{className:"sidebar-box",children:[b("div",{className:"list-title",children:[u("h1",{children:"Followed Channels"}),u("div",{className:"title-icon",onClick:()=>r(MS(!t)),children:u(Cb,{})}),u("div",{className:"followed",children:u(_b,{})})]}),u(Dh,{}),b("div",{className:"list-title",children:[u("h1",{children:"Recommended Channels"}),u("div",{className:"camera",children:u(zb,{})})]}),u(Dh,{}),u("div",{className:"side-search",children:u(g1,{placeholder:"Search to Add Friends"})})]})})},WS=({mySize:e})=>{const{pathname:t}=Nt();return u(wb,{children:b(Fe,{children:[u("div",{className:"header-box",children:b("header",{children:[u("div",{className:"left",children:b("ul",{children:[u("li",{children:u("div",{className:"item",children:u(me,{to:"/",children:u("div",{className:"logo",children:u("img",{src:"./public/images/logo/filtered/savingpulse-mb-transparent.png"})})})})}),u("li",{className:t==="/mutual-funds"?"active":"",children:u(me,{to:"/mutual-funds",className:"link",children:u("div",{className:"item",children:"Mutual funds"})})}),u("li",{className:t==="/following"?"active":"",children:u(me,{to:"/following",className:"link",children:u("div",{className:"item",children:"Following"})})}),u("li",{className:t==="/"?"active":"",children:u(me,{to:"/",className:"link",children:u("div",{className:"item",children:"Home"})})}),u("li",{className:t==="/ipo"?"active":"",children:u(me,{to:"/ipo",className:"link",children:u("div",{className:"item",children:"IPO's"})})}),u("li",{className:t==="/offers"?"active":"",children:u(me,{to:"/offers",className:"link",children:u("div",{className:"item",children:"Offers"})})}),u("li",{children:u("div",{className:"item",children:u(Qd,{className:"item-icon"})})})]})}),u("div",{className:"bottom"}),b("div",{className:"right",children:[b("div",{className:"search-bar",children:[u("input",{type:"text",placeholder:"Search"}),u("div",{className:"search-icon",children:u(Jd,{})})]}),u("div",{className:"right-icons",children:u("ul",{children:u("li",{children:u(Eb,{})})})}),u("div",{className:"profile-desktop",children:u(jS,{})})]})]})}),u("div",{className:"left-bar",children:u(BS,{mySize:e})})]})})},US=D.header`
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
`,HS=D.div`
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
`,VS=({searchStatus:e,setSearchStatus:t})=>u(HS,{className:e?"search-visible":"",children:u("div",{className:"search-box",children:b("div",{className:"search-bar",children:[u(r1,{className:"search-close",onClick:()=>t(!e)}),u("input",{type:"text",placeholder:"Search..."})]})})}),KS=D.div`
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
`,XS=D.div`
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
`,GS=()=>{const{darkStatus:e}=et(n=>n.site),t=Yd();return u(XS,{children:u("div",{className:"darkMode-container",onClick:n=>(n.preventDefault(),t(m1())),children:u("div",{className:`ball ${e?"dark":""}`})})})},YS=({handleCloseProfileMenu:e})=>{let t=mn();return u(KS,{children:b("div",{className:"profile-menu-container",children:[b("div",{className:"title",children:[u(r1,{onClick:e}),u("h1",{children:"Account"}),u(mc,{})]}),b("div",{className:"user",children:[u("div",{className:"user__top",children:u("div",{className:"user-box",children:u(dl,{})})}),u("div",{className:"user__bottom",children:u("div",{className:"username",children:"Arun Suthar"})}),u("span",{className:"user-since",children:"Member since 2020"})]}),u("div",{className:"settings",children:b("ul",{children:[u("li",{children:b("div",{className:"settings__title",children:[b("div",{className:"title-left",children:[u(Rb,{className:"title-icon"}),"Subscriptions"]}),u(ru,{})]})}),u("li",{children:b("div",{className:"settings__title",children:[b("div",{className:"title-left",children:[u(Tb,{className:"title-icon"}),"Friends"]}),u(ru,{})]})}),u("li",{children:u(me,{to:"/settings",children:b("div",{className:"settings__title",children:[b("div",{className:"title-left",children:[u(mc,{className:"title-icon"}),"Settings"]}),u(ru,{})]})})}),u("li",{children:b("div",{className:"settings__title",children:[b("div",{className:"title-left",children:[u(n1,{className:"title-icon"}),"Dark Mode"]}),u(GS,{})]})}),u("li",{children:u("div",{className:"settings__title",onClick:()=>{document.cookie="isLoggedIn="+!1,t("/login")},children:b("div",{className:"title-left",children:[u(Wb,{className:"title-icon"}),"Logout"]})})})]})})]})})},qS=()=>{const{pathname:e}=Nt(),[t,r]=k.exports.useState(!1),[n,i]=k.exports.useState(!1),o=()=>i(!n);let a="Home";switch(e){case"/mutual-funds":a="Mutual Funds";break;case"/following":a="Mutual Funds";break;case"/":a="Home";break;case"/ipo":a="Intial Public Offers";break;case"/offers":a="Offers";break;case"/all-mutual-funds":a="All Mutual Funds";break}return b(US,{children:[b("header",{children:[u(me,{to:"/",children:u("div",{className:"logo",children:u("img",{src:"./images/logo/filtered/savingpulse-mb-transparent.png"})})}),u("h1",{className:"page-name",children:a}),u(VS,{searchStatus:t,setSearchStatus:r}),b("div",{className:"right-buttons",children:[u(Jd,{onClick:()=>r(!t)}),"\xA0 \xA0",u("div",{className:`profile-menu-box ${n?"visible":""}`,children:u(YS,{handleCloseProfileMenu:o})}),u("div",{className:"profile-box",children:u(dl,{onClick:()=>i(!n)})})]})]}),b("nav",{children:[u(me,{to:"/mutual-funds",onClick:()=>i(!1),children:b("div",{className:`item ${e==="/mutual-funds"?"active":""}`,children:[u(Fb,{}),u("span",{children:"Funds"})]})}),u(me,{to:"/following",onClick:()=>i(!1),children:b("div",{className:`item ${e==="/following"?"active":""}`,children:[u(Bb,{}),u("span",{children:"Following"})]})}),u(me,{to:"/",onClick:()=>i(!1),children:b("div",{className:`item ${e==="/"?"active":""}`,children:[u(Ib,{}),u("span",{children:"Home"})]})}),u(me,{to:"/ipo",onClick:()=>i(!1),children:b("div",{className:`item ${e==="/ipo"?"active":""}`,children:[u(Db,{className:"item__browse"}),u("span",{children:"IPO"})]})}),u(me,{to:"/offers",onClick:()=>i(!1),children:b("div",{className:`item ${e==="/offers"?"active":""}`,children:[u(Lb,{className:"item__profile"}),u("span",{children:"Offers"})]})})]})]})},QS=({mySize:e})=>b("div",{className:"header",children:[u(qS,{}),u(WS,{mySize:e})]}),JS=D.div`
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
`,ZS=D.div`
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
      .divider{
        height: 5.5rem;
        width: 1px;
        padding: 1px 0px;
        background-color: ${e=>e.theme.border};
      }
    }
  }
`,cu=({ipo:e})=>{var t,r,n;return u(ZS,{children:b("div",{className:"ipo-box",children:[b("div",{className:"header",children:[u("div",{className:"picture",children:u("img",{src:e.image,alt:""})}),b("div",{children:[u("h2",{className:"name",children:e.name}),b("p",{className:"offer",children:["Offer date: ",(t=e==null?void 0:e.date)==null?void 0:t.start," - ",(r=e==null?void 0:e.date)==null?void 0:r.end]})]})]}),b("div",{className:"actions",children:[b("div",{className:"tags",children:[u("div",{className:"tag",children:e.exchange}),u("div",{className:"tag",children:"Live"})]}),b("div",{className:"action-link",children:[u(me,{className:"link",to:"",title:"Apply",children:"Apply"}),b(me,{className:"link",to:"",title:"Check Allotment",children:[u("span",{className:"hide-mb1",children:"Check "}),"Allotment"]})]})]}),b("div",{className:"more-details",children:[b("div",{children:[u("span",{children:"Offer Price"}),u("span",{children:(n=e==null?void 0:e.price)==null?void 0:n.offer})]}),u("div",{className:"divider"}),b("div",{children:[u("span",{children:"Lot Size"}),u("span",{children:e.lotSize})]}),u("div",{className:"divider"}),b("div",{children:[u("span",{children:"Subscription"}),b("span",{children:[e.subscriptions," times"]})]})]})]})})},e5=D.div`
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
`,t5=()=>u(e5,{children:u("div",{className:"tags-box",children:b("ul",{children:[u("li",{children:b("div",{className:"item",children:[u("span",{children:"Games"}),u("div",{className:"icon",children:u("img",{src:"https://static.twitchcdn.net/assets/gaming-e9019587744b56b11b43.svg",alt:""})})]})}),u("li",{children:b("div",{className:"item",children:[u("span",{children:"IRL"}),u("div",{className:"icon",children:u("img",{src:"https://static.twitchcdn.net/assets/irl-baa32e8e64a6974282c0.svg",alt:""})})]})}),u("li",{children:b("div",{className:"item",children:[u("span",{children:"Music"}),u("div",{className:"icon",children:u("img",{src:"https://static.twitchcdn.net/assets/music-5fb4595a30d04d991e24.svg",alt:""})})]})}),u("li",{children:b("div",{className:"item",children:[u("span",{children:"Esports"}),u("div",{className:"icon",children:u("img",{src:"https://static.twitchcdn.net/assets/esports-7a078acca57531d11e29.svg",alt:""})})]})}),u("li",{children:b("div",{className:"item",children:[u("span",{children:"Creative"}),u("div",{className:"icon",children:u("img",{src:"https://static.twitchcdn.net/assets/creative-6423fb5fbcf31fadee38.svg",alt:""})})]})})]})})}),r5=D.div`
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
`,wr=({title:e,to:t})=>{const{pathname:r}=Nt();return u(r5,{children:u("div",{className:`link-box ${r==t?"active":""}`,children:u(me,{to:t||"/",className:"link",children:e||"default"})})})};var v1={};function n5(e){if(e&&e.__esModule)return e;var t={};if(e!=null){for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}}return t.default=e,t}var y1=n5,Br={};function i5(e){return e&&e.__esModule?e:{default:e}}var o5=i5;function bc(){return x1=bc=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},bc.apply(this,arguments)}var x1=bc;function a5(e,t){if(e==null)return{};var r={},n=Object.keys(e),i,o;for(o=0;o<n.length;o++)i=n[o],!(t.indexOf(i)>=0)&&(r[i]=e[i]);return r}var l5=a5,s5=l5;function u5(e,t){if(e==null)return{};var r=s5(e,t),n,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],!(t.indexOf(n)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,n)||(r[n]=e[n]))}return r}var c5=u5;function d5(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var f5=d5;function Fh(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p5(e,t,r){return t&&Fh(e.prototype,t),r&&Fh(e,r),e}var h5=p5;function Vn(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Vn=function(r){return typeof r}:Vn=function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},Vn(e)}function Na(e){return typeof Symbol=="function"&&Vn(Symbol.iterator)==="symbol"?Sc=Na=function(r){return Vn(r)}:Sc=Na=function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":Vn(r)},Na(e)}var Sc=Na;function m5(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var g5=m5,v5=Sc,y5=g5;function x5(e,t){return t&&(v5(t)==="object"||typeof t=="function")?t:y5(e)}var w5=x5;function kc(e){return w1=kc=Object.setPrototypeOf?Object.getPrototypeOf:function(r){return r.__proto__||Object.getPrototypeOf(r)},kc(e)}var w1=kc;function Cc(e,t){return b1=Cc=Object.setPrototypeOf||function(n,i){return n.__proto__=i,n},Cc(e,t)}var b1=Cc,b5=b1;function S5(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b5(e,t)}var k5=S5,C5=function(){},lf=C5,Bo={};function _5(e){return e&&e.__esModule?e:{default:e}}var Jl=_5,Zl={},S1=Jl;Object.defineProperty(Zl,"__esModule",{value:!0});Zl.default=void 0;var E5=S1(k.exports);S1(lf);var $5=function(t){t.index;var r=t.children;E5.default.Children.count(r)},P5=$5;Zl.default=P5;var sf={},Wo={};Object.defineProperty(Wo,"__esModule",{value:!0});Wo.default=void 0;var O5={RESISTANCE_COEF:.6,UNCERTAINTY_THRESHOLD:3};Wo.default=O5;var k1=Jl;Object.defineProperty(sf,"__esModule",{value:!0});sf.default=T5;var N5=k1(k.exports),Bh=k1(Wo);function T5(e){var t=e.children,r=e.startIndex,n=e.startX,i=e.pageX,o=e.viewLength,a=e.resistance,l=N5.default.Children.count(t)-1,s=r+(n-i)/o,c;return a?s<0?s=Math.exp(s*Bh.default.RESISTANCE_COEF)-1:s>l&&(s=l+1-Math.exp((l-s)*Bh.default.RESISTANCE_COEF)):s<0?(s=0,c=(s-r)*o+i):s>l&&(s=l,c=(s-r)*o+i),{index:s,startX:c}}var es={},R5=Jl;Object.defineProperty(es,"__esModule",{value:!0});es.default=void 0;var Wh=R5(k.exports),M5=function(t,r){var n=!1,i=function(d){return d?d.key:"empty"};if(t.children.length&&r.children.length){var o=Wh.default.Children.map(t.children,i),a=o[t.index];if(a!=null){var l=Wh.default.Children.map(r.children,i),s=l[r.index];a===s&&(n=!0)}}return n},L5=M5;es.default=L5;var ts={};Object.defineProperty(ts,"__esModule",{value:!0});ts.default=void 0;function j5(e,t){var r=e%t;return r<0?r+t:r}var z5=j5;ts.default=z5;(function(e){var t=Jl;Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"checkIndexBounds",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(e,"computeIndex",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(e,"constant",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(e,"getDisplaySameSlide",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(e,"mod",{enumerable:!0,get:function(){return a.default}});var r=t(Zl),n=t(sf),i=t(Wo),o=t(es),a=t(ts)})(Bo);var A5=y1,sr=o5;Object.defineProperty(Br,"__esModule",{value:!0});Br.getDomTreeShapes=C1;Br.findNativeHandler=_1;Br.default=Br.SwipeableViewsContext=void 0;var da=sr(x1),I5=sr(c5),D5=sr(f5),F5=sr(h5),B5=sr(w5),W5=sr(w1),U5=sr(k5),Gt=A5(k.exports);sr(di.exports);sr(lf);var fa=Bo;function Uh(e,t,r,n){return e.addEventListener(t,r,n),{remove:function(){e.removeEventListener(t,r,n)}}}var Hh={container:{direction:"ltr",display:"flex",willChange:"transform"},slide:{width:"100%",WebkitFlexShrink:0,flexShrink:0,overflow:"auto"}},Lt={root:{x:{overflowX:"hidden"},"x-reverse":{overflowX:"hidden"},y:{overflowY:"hidden"},"y-reverse":{overflowY:"hidden"}},flexDirection:{x:"row","x-reverse":"row-reverse",y:"column","y-reverse":"column-reverse"},transform:{x:function(t){return"translate(".concat(-t,"%, 0)")},"x-reverse":function(t){return"translate(".concat(t,"%, 0)")},y:function(t){return"translate(0, ".concat(-t,"%)")},"y-reverse":function(t){return"translate(0, ".concat(t,"%)")}},length:{x:"width","x-reverse":"width",y:"height","y-reverse":"height"},rotationMatrix:{x:{x:[1,0],y:[0,1]},"x-reverse":{x:[-1,0],y:[0,1]},y:{x:[0,1],y:[1,0]},"y-reverse":{x:[0,-1],y:[1,0]}},scrollPosition:{x:"scrollLeft","x-reverse":"scrollLeft",y:"scrollTop","y-reverse":"scrollTop"},scrollLength:{x:"scrollWidth","x-reverse":"scrollWidth",y:"scrollHeight","y-reverse":"scrollHeight"},clientLength:{x:"clientWidth","x-reverse":"clientWidth",y:"clientHeight","y-reverse":"clientHeight"}};function du(e,t){var r=t.duration,n=t.easeFunction,i=t.delay;return"".concat(e," ").concat(r," ").concat(n," ").concat(i)}function fu(e,t){var r=Lt.rotationMatrix[t];return{pageX:r.x[0]*e.pageX+r.x[1]*e.pageY,pageY:r.y[0]*e.pageX+r.y[1]*e.pageY}}function pa(e){return e.touches=[{pageX:e.pageX,pageY:e.pageY}],e}function C1(e,t){for(var r=[];e&&e!==t&&e!==document.body&&!e.hasAttribute("data-swipeable");){var n=window.getComputedStyle(e);n.getPropertyValue("position")==="absolute"||n.getPropertyValue("overflow-x")==="hidden"?r=[]:(e.clientWidth>0&&e.scrollWidth>e.clientWidth||e.clientHeight>0&&e.scrollHeight>e.clientHeight)&&r.push({element:e,scrollWidth:e.scrollWidth,scrollHeight:e.scrollHeight,clientWidth:e.clientWidth,clientHeight:e.clientHeight,scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}),e=e.parentNode}return r}var Gr=null;function _1(e){var t=e.domTreeShapes,r=e.pageX,n=e.startX,i=e.axis;return t.some(function(o){var a=r>=n;(i==="x"||i==="y")&&(a=!a);var l=Math.round(o[Lt.scrollPosition[i]]),s=l>0,c=l+o[Lt.clientLength[i]]<o[Lt.scrollLength[i]];return a&&c||!a&&s?(Gr=o.element,!0):!1})}var E1=Gt.createContext();Br.SwipeableViewsContext=E1;var rs=function(e){(0,U5.default)(t,e);function t(r){var n;return(0,D5.default)(this,t),n=(0,B5.default)(this,(0,W5.default)(t).call(this,r)),n.rootNode=null,n.containerNode=null,n.ignoreNextScrollEvents=!1,n.viewLength=0,n.startX=0,n.lastX=0,n.vx=0,n.startY=0,n.isSwiping=void 0,n.started=!1,n.startIndex=0,n.transitionListener=null,n.touchMoveListener=null,n.activeSlide=null,n.indexCurrent=null,n.firstRenderTimeout=null,n.setRootNode=function(i){n.rootNode=i},n.setContainerNode=function(i){n.containerNode=i},n.setActiveSlide=function(i){n.activeSlide=i,n.updateHeight()},n.handleSwipeStart=function(i){var o=n.props.axis,a=fu(i.touches[0],o);n.viewLength=n.rootNode.getBoundingClientRect()[Lt.length[o]],n.startX=a.pageX,n.lastX=a.pageX,n.vx=0,n.startY=a.pageY,n.isSwiping=void 0,n.started=!0;var l=window.getComputedStyle(n.containerNode),s=l.getPropertyValue("-webkit-transform")||l.getPropertyValue("transform");if(s&&s!=="none"){var c=s.split("(")[1].split(")")[0].split(","),d=window.getComputedStyle(n.rootNode),p=fu({pageX:parseInt(c[4],10),pageY:parseInt(c[5],10)},o);n.startIndex=-p.pageX/(n.viewLength-parseInt(d.paddingLeft,10)-parseInt(d.paddingRight,10))||0}},n.handleSwipeMove=function(i){if(!n.started){n.handleTouchStart(i);return}if(!(Gr!==null&&Gr!==n.rootNode)){var o=n.props,a=o.axis,l=o.children,s=o.ignoreNativeScroll,c=o.onSwitching,d=o.resistance,p=fu(i.touches[0],a);if(n.isSwiping===void 0){var m=Math.abs(p.pageX-n.startX),y=Math.abs(p.pageY-n.startY),x=m>y&&m>fa.constant.UNCERTAINTY_THRESHOLD;if(!d&&(a==="y"||a==="y-reverse")&&(n.indexCurrent===0&&n.startX<p.pageX||n.indexCurrent===Gt.Children.count(n.props.children)-1&&n.startX>p.pageX)){n.isSwiping=!1;return}if(m>y&&i.preventDefault(),x===!0||y>fa.constant.UNCERTAINTY_THRESHOLD){n.isSwiping=x,n.startX=p.pageX;return}}if(n.isSwiping===!0){i.preventDefault(),n.vx=n.vx*.5+(p.pageX-n.lastX)*.5,n.lastX=p.pageX;var v=(0,fa.computeIndex)({children:l,resistance:d,pageX:p.pageX,startIndex:n.startIndex,startX:n.startX,viewLength:n.viewLength}),f=v.index,h=v.startX;if(Gr===null&&!s){var g=C1(i.target,n.rootNode),w=_1({domTreeShapes:g,startX:n.startX,pageX:p.pageX,axis:a});if(w)return}h?n.startX=h:Gr===null&&(Gr=n.rootNode),n.setIndexCurrent(f);var S=function(){c&&c(f,"move")};(n.state.displaySameSlide||!n.state.isDragging)&&n.setState({displaySameSlide:!1,isDragging:!0},S),S()}}},n.handleSwipeEnd=function(){if(Gr=null,!!n.started&&(n.started=!1,n.isSwiping===!0)){var i=n.state.indexLatest,o=n.indexCurrent,a=i-o,l;Math.abs(n.vx)>n.props.threshold?n.vx>0?l=Math.floor(o):l=Math.ceil(o):Math.abs(a)>n.props.hysteresis?l=a>0?Math.floor(o):Math.ceil(o):l=i;var s=Gt.Children.count(n.props.children)-1;l<0?l=0:l>s&&(l=s),n.setIndexCurrent(l),n.setState({indexLatest:l,isDragging:!1},function(){n.props.onSwitching&&n.props.onSwitching(l,"end"),n.props.onChangeIndex&&l!==i&&n.props.onChangeIndex(l,i,{reason:"swipe"}),o===i&&n.handleTransitionEnd()})}},n.handleTouchStart=function(i){n.props.onTouchStart&&n.props.onTouchStart(i),n.handleSwipeStart(i)},n.handleTouchEnd=function(i){n.props.onTouchEnd&&n.props.onTouchEnd(i),n.handleSwipeEnd(i)},n.handleMouseDown=function(i){n.props.onMouseDown&&n.props.onMouseDown(i),i.persist(),n.handleSwipeStart(pa(i))},n.handleMouseUp=function(i){n.props.onMouseUp&&n.props.onMouseUp(i),n.handleSwipeEnd(pa(i))},n.handleMouseLeave=function(i){n.props.onMouseLeave&&n.props.onMouseLeave(i),n.started&&n.handleSwipeEnd(pa(i))},n.handleMouseMove=function(i){n.props.onMouseMove&&n.props.onMouseMove(i),n.started&&n.handleSwipeMove(pa(i))},n.handleScroll=function(i){if(n.props.onScroll&&n.props.onScroll(i),i.target===n.rootNode){if(n.ignoreNextScrollEvents){n.ignoreNextScrollEvents=!1;return}var o=n.state.indexLatest,a=Math.ceil(i.target.scrollLeft/i.target.clientWidth)+o;n.ignoreNextScrollEvents=!0,i.target.scrollLeft=0,n.props.onChangeIndex&&a!==o&&n.props.onChangeIndex(a,o,{reason:"focus"})}},n.updateHeight=function(){if(n.activeSlide!==null){var i=n.activeSlide.children[0];i!==void 0&&i.offsetHeight!==void 0&&n.state.heightLatest!==i.offsetHeight&&n.setState({heightLatest:i.offsetHeight})}},n.state={indexLatest:r.index,isDragging:!1,renderOnlyActive:!r.disableLazyLoading,heightLatest:0,displaySameSlide:!0},n.setIndexCurrent(r.index),n}return(0,F5.default)(t,[{key:"componentDidMount",value:function(){var n=this;this.transitionListener=Uh(this.containerNode,"transitionend",function(i){i.target===n.containerNode&&n.handleTransitionEnd()}),this.touchMoveListener=Uh(this.rootNode,"touchmove",function(i){n.props.disabled||n.handleSwipeMove(i)},{passive:!1}),this.props.disableLazyLoading||(this.firstRenderTimeout=setTimeout(function(){n.setState({renderOnlyActive:!1})},0)),this.props.action&&this.props.action({updateHeight:this.updateHeight})}},{key:"UNSAFE_componentWillReceiveProps",value:function(n){var i=n.index;typeof i=="number"&&i!==this.props.index&&(this.setIndexCurrent(i),this.setState({displaySameSlide:(0,fa.getDisplaySameSlide)(this.props,n),indexLatest:i}))}},{key:"componentWillUnmount",value:function(){this.transitionListener.remove(),this.touchMoveListener.remove(),clearTimeout(this.firstRenderTimeout)}},{key:"getSwipeableViewsContext",value:function(){var n=this;return{slideUpdateHeight:function(){n.updateHeight()}}}},{key:"setIndexCurrent",value:function(n){if(!this.props.animateTransitions&&this.indexCurrent!==n&&this.handleTransitionEnd(),this.indexCurrent=n,this.containerNode){var i=this.props.axis,o=Lt.transform[i](n*100);this.containerNode.style.WebkitTransform=o,this.containerNode.style.transform=o}}},{key:"handleTransitionEnd",value:function(){!this.props.onTransitionEnd||this.state.displaySameSlide||this.state.isDragging||this.props.onTransitionEnd()}},{key:"render",value:function(){var n=this,i=this.props;i.action;var o=i.animateHeight,a=i.animateTransitions,l=i.axis,s=i.children,c=i.containerStyle,d=i.disabled;i.disableLazyLoading;var p=i.enableMouseEvents;i.hysteresis,i.ignoreNativeScroll,i.index,i.onChangeIndex,i.onSwitching,i.onTransitionEnd,i.resistance;var m=i.slideStyle,y=i.slideClassName,x=i.springConfig,v=i.style;i.threshold;var f=(0,I5.default)(i,["action","animateHeight","animateTransitions","axis","children","containerStyle","disabled","disableLazyLoading","enableMouseEvents","hysteresis","ignoreNativeScroll","index","onChangeIndex","onSwitching","onTransitionEnd","resistance","slideStyle","slideClassName","springConfig","style","threshold"]),h=this.state,g=h.displaySameSlide,w=h.heightLatest,S=h.indexLatest,_=h.isDragging,E=h.renderOnlyActive,O=d?{}:{onTouchStart:this.handleTouchStart,onTouchEnd:this.handleTouchEnd},j=!d&&p?{onMouseDown:this.handleMouseDown,onMouseUp:this.handleMouseUp,onMouseLeave:this.handleMouseLeave,onMouseMove:this.handleMouseMove}:{},T=(0,da.default)({},Hh.slide,m),I,G;if(_||!a||g)I="all 0s ease 0s",G="all 0s ease 0s";else if(I=du("transform",x),G=du("-webkit-transform",x),w!==0){var U=", ".concat(du("height",x));I+=U,G+=U}var H={height:null,WebkitFlexDirection:Lt.flexDirection[l],flexDirection:Lt.flexDirection[l],WebkitTransition:G,transition:I};if(!E){var pe=Lt.transform[l](this.indexCurrent*100);H.WebkitTransform=pe,H.transform=pe}return o&&(H.height=w),Gt.createElement(E1.Provider,{value:this.getSwipeableViewsContext()},Gt.createElement("div",(0,da.default)({ref:this.setRootNode,style:(0,da.default)({},Lt.root[l],v)},f,O,j,{onScroll:this.handleScroll}),Gt.createElement("div",{ref:this.setContainerNode,style:(0,da.default)({},H,Hh.container,c),className:"react-swipeable-view-container"},Gt.Children.map(s,function(ae,Be){if(E&&Be!==S)return null;var Pe,Ee=!0;return Be===S&&(Ee=!1,o&&(Pe=n.setActiveSlide,T.overflowY="hidden")),Gt.createElement("div",{ref:Pe,style:T,className:y,"aria-hidden":Ee,"data-swipeable":"true"},ae)}))))}}]),t}(Gt.Component);rs.displayName="ReactSwipableView";rs.propTypes={};rs.defaultProps={animateHeight:!1,animateTransitions:!0,axis:"x",disabled:!1,disableLazyLoading:!1,enableMouseEvents:!1,hysteresis:.6,ignoreNativeScroll:!1,index:0,threshold:5,springConfig:{duration:"0.35s",easeFunction:"cubic-bezier(0.15, 0.3, 0.25, 1)",delay:"0s"},resistance:!1};var H5=rs;Br.default=H5;(function(e){var t=y1;Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(e,"SwipeableViewsContext",{enumerable:!0,get:function(){return r.SwipeableViewsContext}});var r=t(Br)})(v1);var $1=Iv(v1);const V5=D.div`
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
`,uf=({tabs:e=[]})=>{const[t,r]=k.exports.useState(0);return b(V5,{children:[u("div",{className:"tab-manager",children:u("div",{className:"navigation",children:e.map((n,i)=>u("div",{className:t===i?"nav-active":"",onClick:()=>r(i),children:n.title},i))})}),u($1,{index:t,onChangeIndex:r,children:e.map((n,i)=>u("div",{children:n.component},i))})]})},yn=()=>{k.exports.useState(!0);const{ipos:e}=et(t=>t.ipos);return u(Fe,{children:b(JS,{children:[u("div",{className:"ipos-mobile1",children:u(uf,{tabs:[{name:"all",title:"All",component:u("div",{className:"container",children:e.map((t,r)=>u(cu,{ipo:t,imageId:r},r))})},{name:"mainline",title:"Mainline",component:u("div",{className:"container",children:e.map((t,r)=>t.type!=="mainline"?null:u(cu,{ipo:t,imageId:r},r))})},{name:"sme",title:"SME",component:u("div",{className:"container",children:e.map((t,r)=>t.type!=="sme"?null:u(cu,{ipo:t,imageId:r},r))})}]})}),u("div",{className:"browse-desktop",children:b("div",{className:"ipo-box",children:[u("h1",{className:"page-title",children:"Browse"}),u(t5,{}),u("div",{className:"nav",children:b("ul",{children:[u("li",{children:u(wr,{to:"/browse",title:"Categories"})}),u("li",{children:u(wr,{to:"/browse/all",title:"Live Channels"})})]})}),b("div",{className:"search-filter",children:[b("div",{className:"search-box",children:[u("span",{children:"Filter by"}),u(g1,{placeholder:"Search Tags"})]}),b("div",{className:"filter",children:[u("span",{children:"Sort by"}),b("div",{className:"sort",children:["Recommended For You",u("div",{className:"sort-icon",children:u(e1,{})})]})]})]}),u(Dd,{})]})})]})})};D.div`
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
`;const K5=D.div`
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
`,X5=D.div`
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
`,G5=({user:e,imageId:t})=>u(X5,{children:b("div",{className:"channel-box",children:[b("div",{className:"live-screen",children:[u("img",{src:e.liveScreen,alt:""}),b("span",{children:[u(qd,{className:"live-icon"})," ",e.viewers]})]}),b("div",{className:"live-info",children:[b("div",{className:"user",children:[u("div",{className:"user-pp",children:u("img",{src:`https://i.pravatar.cc/5${t}`,alt:""})}),u("div",{className:"user-name",children:e.username})]}),u("div",{className:"title",children:e.title}),u("div",{className:"game",children:e.game}),u("div",{className:"tags",children:u("div",{className:"tag",children:e.tag})})]})]})}),Y5=()=>{const{users:e}=et(t=>t.user);return u(Fe,{children:e.map((t,r)=>u(G5,{user:t,imageId:r},r))})},q5=D.div`
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
`,Q5=({user:e,imageId:t})=>u(q5,{children:b("div",{className:"offline-box",children:[u("div",{className:"left",children:u("div",{className:"pp",children:u("img",{src:`https://i.pravatar.cc/5${t}`,alt:""})})}),b("div",{className:"right",children:[u("div",{className:"username",children:e.username}),u("div",{className:"videos",children:"7 new videos"})]})]})}),J5=()=>{const{users:e}=et(t=>t.user);return u(Fe,{children:e.map((t,r)=>{if(r<3)return u(Q5,{user:t,imageId:r},r)})})},Z5=()=>(Nt(),u(Fe,{children:b(K5,{children:[u("div",{className:"follow-mobile",children:b("div",{className:"follow-box",children:[u("h1",{children:"Following"}),u("h3",{children:"Your Live Channels"}),u(Y5,{}),u("h3",{children:"Your Offline Channels"}),u(J5,{})]})}),u("div",{className:"follow-desktop",children:b("div",{className:"follow-box",children:[u("div",{className:"nav",children:b("ul",{children:[u("li",{children:u(wr,{to:"/following",title:"Overview"})}),u("li",{children:u(wr,{to:"/following/live",title:"Live"})}),u("li",{children:u(wr,{to:"/following/videos",title:"Videos"})}),u("li",{children:u(wr,{to:"/following/categories",title:"Categories"})})]})}),u("div",{className:"page",children:u(Dd,{})})]})})]})}));D.div`
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
`;D.div`
  .amc-container {
    display: flex;
    align-items: center;
    padding: 1rem;
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
    border: 1px solid #ececec;
  }

  .amc-info {
    flex-grow: 1;
    margin-left: 0.5rem;
  }

  .amc-info .name {
    font-size: 1.2rem;
    // font-weight: 500;
    color: ${e=>e.theme.textColor};


    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;  
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .amc-info .description {
    font-size: 1.2rem;
    color: #757575;
    margin-top: 4px;
    text-transform: lowercase;
  }
  .amc-return div {
    font-size: 1.2rem;
    font-weight: 600;
    color: #757575;
  }
`;const e4=D.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;

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
`,P1=({activeFilter:e,onFilterChange:t})=>{const[r,n]=k.exports.useState(1),i=o=>{t(o),n(o==3?1:o+1)};return b(e4,{children:[u("div",{className:"filter-modal",children:u("button",{className:"filter-button",onClick:()=>i(1),children:"Filter / Sort"})}),b("div",{className:"year-filters",children:[r===1&&u("button",{className:"filter-button",onClick:()=>i(1),children:"< > 1Y Returns"}),r===2&&u("button",{className:"filter-button",onClick:()=>i(2),children:"< > 3Y Returns"}),r===3&&u("button",{className:"filter-button",onClick:()=>i(0),children:"< > 5Y Returns"})]})]})},t4=D.div`
  .scheme-container {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
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
    margin-left: 1rem;

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
      text-transform: lowercase;
    }
  }

  .return div {
    font-size: 1.2rem;
    font-weight: 600;
    color: #757575;
  }
`,O1=({scheme:e,activeFilter:t})=>u(t4,{children:b("div",{className:"scheme-container",children:[u("div",{className:"image",children:u("img",{src:`./images/amc-logo/${e.amc_logo}`,alt:""})}),b("div",{className:"info",children:[u("div",{className:"name",children:e.Scheme_Name}),b("div",{className:"description",children:[e.Scheme_Type," - ",e.Scheme_Type," - ",e.Face_Value]})]}),u("div",{className:"return",children:u("div",{className:"1"})})]})}),r4=D.div`
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
`,n4=D.div`
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
`,i4=({game:e})=>u(r4,{children:b("div",{className:"game-box",children:[u("div",{className:"game-picture",children:u("img",{src:e.image,alt:""})}),b("div",{className:"game-name",children:[u("div",{className:"name",children:e.name}),u("div",{className:"other-icon",children:u(Qd,{})})]}),b("div",{className:"game-viewers",children:[e.viewer," viewers"]}),u("div",{className:"tags",children:u("div",{className:"tag",children:"English"})})]})}),N1=({title:e,boldTitle:t})=>{const{games:r}=et(n=>n.category);return u(n4,{children:b("div",{className:"categories-box",children:[b("h1",{children:[u("span",{children:t})," ",e]}),u("div",{className:"list",children:r.map((n,i)=>u(i4,{game:n},i))})]})})},o4=D.div`
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
`,a4=D.div`
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
`,l4=({user:e,imageId:t,video:r})=>u(o4,{children:b("div",{className:"channel-box",children:[b("div",{className:"live-screen",children:[u("img",{src:e.liveScreen,alt:""}),u("div",{className:`live ${r?"invisible":""}`,children:"live"}),u("div",{className:`viewers ${r?"invisible":""}`,children:"333 viewers"}),b("div",{className:`video ${r?"video-visible":""}`,children:[u("div",{className:"video-tag top",children:"11:44"}),u("div",{className:"video-tag bottom-right",children:"4 hours ago"}),u("div",{className:"video-tag bottom",children:"188 views"})]})]}),b("div",{className:"channel-info",children:[b("div",{className:"left",children:[u("div",{className:"pp",children:u("img",{src:`https://i.pravatar.cc/5${t}`,alt:""})}),b("div",{className:"profile-info",children:[u("div",{className:"title",children:e.title}),u("div",{className:"username",children:e.username}),u("div",{className:"game",children:e.game}),b("div",{className:"tags",children:[u("div",{className:"tag",children:"English"}),u("div",{className:"tag",children:"Esports"})]})]})]}),u("div",{className:"right",children:u(Qd,{})})]})]})}),Ke=({channelTitle:e,video:t})=>{const{users:r}=et(n=>n.user);return u(a4,{children:b("div",{className:"channels-box",children:[e&&u("h1",{children:e}),u("div",{className:"list",children:r.map((n,i)=>{if(i<6)return u(l4,{user:n,imageId:i,video:t},i)})})]})})},pu=()=>b(Fe,{children:[u(Ke,{}),u(Ke,{}),u(Ke,{}),u(Ke,{}),u(Ke,{}),u(Ke,{}),u(Ke,{}),u(Ke,{})]}),s4=D.div`
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
`,ha=({title:e})=>u(s4,{children:u("div",{className:"show-more",children:e&&b("span",{children:[e,u(e1,{className:"down-icon"})]})})}),u4=()=>b("div",{className:"overview-box",children:[u(Ke,{channelTitle:"Live channels"}),u(ha,{title:"Show more"}),u(Ke,{channelTitle:"Recommended channels"}),u(ha,{title:"Show more"}),u(Ke,{channelTitle:"Latest videos",video:!0}),u(ha,{title:"Show more"}),u(N1,{title:"Live categories"}),u(ha,{})]}),c4=()=>u(Fe,{children:u(Ke,{channelTitle:"Live channels"})}),d4=()=>u(Fe,{children:b("div",{className:"overview-page",children:[u(Ke,{channelTitle:"Latest videos",video:!0}),u(Ke,{video:!0}),u(Ke,{video:!0}),u(Ke,{video:!0})]})}),f4=()=>u(Fe,{children:u(N1,{title:"Live categories"})}),p4=D.div`
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
`,h4=D.div`
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
`,Vh=({offer:e})=>u(h4,{children:b("div",{className:"offer-box",children:[u("h2",{className:"offer-name",children:e.name}),u(me,{to:"/{offer.href}",children:u("div",{className:"offer-picture",children:u("img",{src:e.image,alt:""})})}),u("div",{className:"know-more",children:u("button",{children:"Know More..."})})]})}),m4=()=>{k.exports.useState(!0);const{offers:e}=et(t=>t.offers);return u(Fe,{children:u("div",{className:"offers-mobile",children:b(p4,{children:[u(uf,{tabs:[{name:"brokers",title:"Brokers",component:u("div",{className:"container",children:e.map((t,r)=>{if(t.type!=="advisor")return u(Vh,{offer:t,imageId:r},r)})})},{name:"advisors",title:"Advisors",component:u("div",{className:"container",children:e.map((t,r)=>{if(t.type!=="advisor")return u(Vh,{offer:t,imageId:r},r)})})}]}),u("div",{className:"offers-desktop",children:b("div",{className:"offers-box",children:[u("h1",{className:"page-title",children:"Offers"}),u("div",{className:"nav",children:b("ul",{children:[u("li",{children:u(wr,{to:"/offers/brokers",title:"Brokers"})}),u("li",{children:u(wr,{to:"/offers/advisors",title:"Advisors"})})]})}),u("div",{className:"page",children:u(Dd,{})})]})})]})})})};D.div`
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
`;const g4=D.div`
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
`,Kh=({type:e=""})=>{const{offers:t}=et(r=>r.offers);return u(g4,{children:t.map((r,n)=>{if(r.type===e)return b("div",{className:`offer-box offer-${r.id}`,children:[b("div",{className:"left-side",children:[u("div",{className:"picture",children:u("img",{src:r.image,alt:""})}),u("h2",{className:"name",children:r.name})]}),b("div",{className:"right-side",children:[b("div",{children:[b("ul",{className:"available-options",children:[u("li",{children:"Equity"}),u("li",{children:"Future"}),u("li",{children:"Option"}),u("li",{children:"Commodity"})]}),b("ul",{className:"new-info",children:[u("li",{children:"Account Opening"}),u("li",{children:"Account Maintenance"}),u("li",{children:"Account Maintenance"}),u("li",{children:"Account Maintenance"})]})]}),b("ul",{className:"action-buttons",children:[u("li",{children:"View Details"}),u("li",{children:"Open Account"})]})]})]},r.id)})})},v4={black:"#000",white:"#fff"};var bo=v4;const y4={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"};var xn=y4;const x4={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff"};var wn=x4;const w4={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"};var bn=w4;const b4={50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea"};var Sn=b4;const S4={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"};var kn=S4;const k4={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00"};var Ni=k4;const C4={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"};var _4=C4;function un(e){let t="https://mui.com/production-error/?code="+e;for(let r=1;r<arguments.length;r+=1)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified MUI error #"+e+"; visit "+t+" for the full message."}var E4=Object.freeze(Object.defineProperty({__proto__:null,default:un},Symbol.toStringTag,{value:"Module"})),T1="$$material",$4=!1;function P4(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function O4(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var N4=function(){function e(r){var n=this;this._insertTag=function(i){var o;n.tags.length===0?n.insertionPoint?o=n.insertionPoint.nextSibling:n.prepend?o=n.container.firstChild:o=n.before:o=n.tags[n.tags.length-1].nextSibling,n.container.insertBefore(i,o),n.tags.push(i)},this.isSpeedy=r.speedy===void 0?!$4:r.speedy,this.tags=[],this.ctr=0,this.nonce=r.nonce,this.key=r.key,this.container=r.container,this.prepend=r.prepend,this.insertionPoint=r.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(n){n.forEach(this._insertTag)},t.insert=function(n){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(O4(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var o=P4(i);try{o.insertRule(n,o.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(n));this.ctr++},t.flush=function(){this.tags.forEach(function(n){var i;return(i=n.parentNode)==null?void 0:i.removeChild(n)}),this.tags=[],this.ctr=0},e}(),Ue="-ms-",vl="-moz-",Y="-webkit-",R1="comm",cf="rule",df="decl",T4="@import",M1="@keyframes",R4="@layer",M4=Math.abs,ns=String.fromCharCode,L4=Object.assign;function j4(e,t){return Ae(e,0)^45?(((t<<2^Ae(e,0))<<2^Ae(e,1))<<2^Ae(e,2))<<2^Ae(e,3):0}function L1(e){return e.trim()}function z4(e,t){return(e=t.exec(e))?e[0]:e}function q(e,t,r){return e.replace(t,r)}function _c(e,t){return e.indexOf(t)}function Ae(e,t){return e.charCodeAt(t)|0}function So(e,t,r){return e.slice(t,r)}function jt(e){return e.length}function ff(e){return e.length}function ma(e,t){return t.push(e),e}function A4(e,t){return e.map(t).join("")}var is=1,ri=1,j1=0,at=0,_e=0,pi="";function os(e,t,r,n,i,o,a){return{value:e,root:t,parent:r,type:n,props:i,children:o,line:is,column:ri,length:a,return:""}}function Ti(e,t){return L4(os("",null,null,"",null,null,0),e,{length:-e.length},t)}function I4(){return _e}function D4(){return _e=at>0?Ae(pi,--at):0,ri--,_e===10&&(ri=1,is--),_e}function ut(){return _e=at<j1?Ae(pi,at++):0,ri++,_e===10&&(ri=1,is++),_e}function Ut(){return Ae(pi,at)}function Ta(){return at}function Uo(e,t){return So(pi,e,t)}function ko(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function z1(e){return is=ri=1,j1=jt(pi=e),at=0,[]}function A1(e){return pi="",e}function Ra(e){return L1(Uo(at-1,Ec(e===91?e+2:e===40?e+1:e)))}function F4(e){for(;(_e=Ut())&&_e<33;)ut();return ko(e)>2||ko(_e)>3?"":" "}function B4(e,t){for(;--t&&ut()&&!(_e<48||_e>102||_e>57&&_e<65||_e>70&&_e<97););return Uo(e,Ta()+(t<6&&Ut()==32&&ut()==32))}function Ec(e){for(;ut();)switch(_e){case e:return at;case 34:case 39:e!==34&&e!==39&&Ec(_e);break;case 40:e===41&&Ec(e);break;case 92:ut();break}return at}function W4(e,t){for(;ut()&&e+_e!==47+10;)if(e+_e===42+42&&Ut()===47)break;return"/*"+Uo(t,at-1)+"*"+ns(e===47?e:ut())}function U4(e){for(;!ko(Ut());)ut();return Uo(e,at)}function H4(e){return A1(Ma("",null,null,null,[""],e=z1(e),0,[0],e))}function Ma(e,t,r,n,i,o,a,l,s){for(var c=0,d=0,p=a,m=0,y=0,x=0,v=1,f=1,h=1,g=0,w="",S=i,_=o,E=n,O=w;f;)switch(x=g,g=ut()){case 40:if(x!=108&&Ae(O,p-1)==58){_c(O+=q(Ra(g),"&","&\f"),"&\f")!=-1&&(h=-1);break}case 34:case 39:case 91:O+=Ra(g);break;case 9:case 10:case 13:case 32:O+=F4(x);break;case 92:O+=B4(Ta()-1,7);continue;case 47:switch(Ut()){case 42:case 47:ma(V4(W4(ut(),Ta()),t,r),s);break;default:O+="/"}break;case 123*v:l[c++]=jt(O)*h;case 125*v:case 59:case 0:switch(g){case 0:case 125:f=0;case 59+d:h==-1&&(O=q(O,/\f/g,"")),y>0&&jt(O)-p&&ma(y>32?Gh(O+";",n,r,p-1):Gh(q(O," ","")+";",n,r,p-2),s);break;case 59:O+=";";default:if(ma(E=Xh(O,t,r,c,d,i,l,w,S=[],_=[],p),o),g===123)if(d===0)Ma(O,t,E,E,S,o,p,l,_);else switch(m===99&&Ae(O,3)===110?100:m){case 100:case 108:case 109:case 115:Ma(e,E,E,n&&ma(Xh(e,E,E,0,0,i,l,w,i,S=[],p),_),i,_,p,l,n?S:_);break;default:Ma(O,E,E,E,[""],_,0,l,_)}}c=d=y=0,v=h=1,w=O="",p=a;break;case 58:p=1+jt(O),y=x;default:if(v<1){if(g==123)--v;else if(g==125&&v++==0&&D4()==125)continue}switch(O+=ns(g),g*v){case 38:h=d>0?1:(O+="\f",-1);break;case 44:l[c++]=(jt(O)-1)*h,h=1;break;case 64:Ut()===45&&(O+=Ra(ut())),m=Ut(),d=p=jt(w=O+=U4(Ta())),g++;break;case 45:x===45&&jt(O)==2&&(v=0)}}return o}function Xh(e,t,r,n,i,o,a,l,s,c,d){for(var p=i-1,m=i===0?o:[""],y=ff(m),x=0,v=0,f=0;x<n;++x)for(var h=0,g=So(e,p+1,p=M4(v=a[x])),w=e;h<y;++h)(w=L1(v>0?m[h]+" "+g:q(g,/&\f/g,m[h])))&&(s[f++]=w);return os(e,t,r,i===0?cf:l,s,c,d)}function V4(e,t,r){return os(e,t,r,R1,ns(I4()),So(e,2,-2),0)}function Gh(e,t,r,n){return os(e,t,r,df,So(e,0,n),So(e,n+1,-1),n)}function Kn(e,t){for(var r="",n=ff(e),i=0;i<n;i++)r+=t(e[i],i,e,t)||"";return r}function K4(e,t,r,n){switch(e.type){case R4:if(e.children.length)break;case T4:case df:return e.return=e.return||e.value;case R1:return"";case M1:return e.return=e.value+"{"+Kn(e.children,n)+"}";case cf:e.value=e.props.join(",")}return jt(r=Kn(e.children,n))?e.return=e.value+"{"+r+"}":""}function X4(e){var t=ff(e);return function(r,n,i,o){for(var a="",l=0;l<t;l++)a+=e[l](r,n,i,o)||"";return a}}function G4(e){return function(t){t.root||(t=t.return)&&e(t)}}var Y4=function(t,r,n){for(var i=0,o=0;i=o,o=Ut(),i===38&&o===12&&(r[n]=1),!ko(o);)ut();return Uo(t,at)},q4=function(t,r){var n=-1,i=44;do switch(ko(i)){case 0:i===38&&Ut()===12&&(r[n]=1),t[n]+=Y4(at-1,r,n);break;case 2:t[n]+=Ra(i);break;case 4:if(i===44){t[++n]=Ut()===58?"&\f":"",r[n]=t[n].length;break}default:t[n]+=ns(i)}while(i=ut());return t},Q4=function(t,r){return A1(q4(z1(t),r))},Yh=new WeakMap,J4=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var r=t.value,n=t.parent,i=t.column===n.column&&t.line===n.line;n.type!=="rule";)if(n=n.parent,!n)return;if(!(t.props.length===1&&r.charCodeAt(0)!==58&&!Yh.get(n))&&!i){Yh.set(t,!0);for(var o=[],a=Q4(r,o),l=n.props,s=0,c=0;s<a.length;s++)for(var d=0;d<l.length;d++,c++)t.props[c]=o[s]?a[s].replace(/&\f/g,l[d]):l[d]+" "+a[s]}}},Z4=function(t){if(t.type==="decl"){var r=t.value;r.charCodeAt(0)===108&&r.charCodeAt(2)===98&&(t.return="",t.value="")}};function I1(e,t){switch(j4(e,t)){case 5103:return Y+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Y+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Y+e+vl+e+Ue+e+e;case 6828:case 4268:return Y+e+Ue+e+e;case 6165:return Y+e+Ue+"flex-"+e+e;case 5187:return Y+e+q(e,/(\w+).+(:[^]+)/,Y+"box-$1$2"+Ue+"flex-$1$2")+e;case 5443:return Y+e+Ue+"flex-item-"+q(e,/flex-|-self/,"")+e;case 4675:return Y+e+Ue+"flex-line-pack"+q(e,/align-content|flex-|-self/,"")+e;case 5548:return Y+e+Ue+q(e,"shrink","negative")+e;case 5292:return Y+e+Ue+q(e,"basis","preferred-size")+e;case 6060:return Y+"box-"+q(e,"-grow","")+Y+e+Ue+q(e,"grow","positive")+e;case 4554:return Y+q(e,/([^-])(transform)/g,"$1"+Y+"$2")+e;case 6187:return q(q(q(e,/(zoom-|grab)/,Y+"$1"),/(image-set)/,Y+"$1"),e,"")+e;case 5495:case 3959:return q(e,/(image-set\([^]*)/,Y+"$1$`$1");case 4968:return q(q(e,/(.+:)(flex-)?(.*)/,Y+"box-pack:$3"+Ue+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Y+e+e;case 4095:case 3583:case 4068:case 2532:return q(e,/(.+)-inline(.+)/,Y+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(jt(e)-1-t>6)switch(Ae(e,t+1)){case 109:if(Ae(e,t+4)!==45)break;case 102:return q(e,/(.+:)(.+)-([^]+)/,"$1"+Y+"$2-$3$1"+vl+(Ae(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~_c(e,"stretch")?I1(q(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(Ae(e,t+1)!==115)break;case 6444:switch(Ae(e,jt(e)-3-(~_c(e,"!important")&&10))){case 107:return q(e,":",":"+Y)+e;case 101:return q(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+Y+(Ae(e,14)===45?"inline-":"")+"box$3$1"+Y+"$2$3$1"+Ue+"$2box$3")+e}break;case 5936:switch(Ae(e,t+11)){case 114:return Y+e+Ue+q(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Y+e+Ue+q(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Y+e+Ue+q(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return Y+e+Ue+e+e}return e}var ek=function(t,r,n,i){if(t.length>-1&&!t.return)switch(t.type){case df:t.return=I1(t.value,t.length);break;case M1:return Kn([Ti(t,{value:q(t.value,"@","@"+Y)})],i);case cf:if(t.length)return A4(t.props,function(o){switch(z4(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Kn([Ti(t,{props:[q(o,/:(read-\w+)/,":"+vl+"$1")]})],i);case"::placeholder":return Kn([Ti(t,{props:[q(o,/:(plac\w+)/,":"+Y+"input-$1")]}),Ti(t,{props:[q(o,/:(plac\w+)/,":"+vl+"$1")]}),Ti(t,{props:[q(o,/:(plac\w+)/,Ue+"input-$1")]})],i)}return""})}},tk=[ek],D1=function(t){var r=t.key;if(r==="css"){var n=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(n,function(v){var f=v.getAttribute("data-emotion");f.indexOf(" ")!==-1&&(document.head.appendChild(v),v.setAttribute("data-s",""))})}var i=t.stylisPlugins||tk,o={},a,l=[];a=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+r+' "]'),function(v){for(var f=v.getAttribute("data-emotion").split(" "),h=1;h<f.length;h++)o[f[h]]=!0;l.push(v)});var s,c=[J4,Z4];{var d,p=[K4,G4(function(v){d.insert(v)})],m=X4(c.concat(i,p)),y=function(f){return Kn(H4(f),m)};s=function(f,h,g,w){d=g,y(f?f+"{"+h.styles+"}":h.styles),w&&(x.inserted[h.name]=!0)}}var x={key:r,sheet:new N4({key:r,container:a,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:o,registered:{},insert:s};return x.sheet.hydrate(l),x},rk=!0;function nk(e,t,r){var n="";return r.split(" ").forEach(function(i){e[i]!==void 0?t.push(e[i]+";"):n+=i+" "}),n}var F1=function(t,r,n){var i=t.key+"-"+r.name;(n===!1||rk===!1)&&t.registered[i]===void 0&&(t.registered[i]=r.styles)},B1=function(t,r,n){F1(t,r,n);var i=t.key+"-"+r.name;if(t.inserted[r.name]===void 0){var o=r;do t.insert(r===o?"."+i:"",o,t.sheet,!0),o=o.next;while(o!==void 0)}};function ik(e){for(var t=0,r,n=0,i=e.length;i>=4;++n,i-=4)r=e.charCodeAt(n)&255|(e.charCodeAt(++n)&255)<<8|(e.charCodeAt(++n)&255)<<16|(e.charCodeAt(++n)&255)<<24,r=(r&65535)*1540483477+((r>>>16)*59797<<16),r^=r>>>24,t=(r&65535)*1540483477+((r>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(n+2)&255)<<16;case 2:t^=(e.charCodeAt(n+1)&255)<<8;case 1:t^=e.charCodeAt(n)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var ok={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ak=!1,lk=/[A-Z]|^ms/g,sk=/_EMO_([^_]+?)_([^]*?)_EMO_/g,W1=function(t){return t.charCodeAt(1)===45},qh=function(t){return t!=null&&typeof t!="boolean"},hu=Pg(function(e){return W1(e)?e:e.replace(lk,"-$&").toLowerCase()}),Qh=function(t,r){switch(t){case"animation":case"animationName":if(typeof r=="string")return r.replace(sk,function(n,i,o){return zt={name:i,styles:o,next:zt},i})}return ok[t]!==1&&!W1(t)&&typeof r=="number"&&r!==0?r+"px":r},uk="Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";function Co(e,t,r){if(r==null)return"";var n=r;if(n.__emotion_styles!==void 0)return n;switch(typeof r){case"boolean":return"";case"object":{var i=r;if(i.anim===1)return zt={name:i.name,styles:i.styles,next:zt},i.name;var o=r;if(o.styles!==void 0){var a=o.next;if(a!==void 0)for(;a!==void 0;)zt={name:a.name,styles:a.styles,next:zt},a=a.next;var l=o.styles+";";return l}return ck(e,t,r)}case"function":{if(e!==void 0){var s=zt,c=r(e);return zt=s,Co(e,t,c)}break}}var d=r;if(t==null)return d;var p=t[d];return p!==void 0?p:d}function ck(e,t,r){var n="";if(Array.isArray(r))for(var i=0;i<r.length;i++)n+=Co(e,t,r[i])+";";else for(var o in r){var a=r[o];if(typeof a!="object"){var l=a;t!=null&&t[l]!==void 0?n+=o+"{"+t[l]+"}":qh(l)&&(n+=hu(o)+":"+Qh(o,l)+";")}else{if(o==="NO_COMPONENT_SELECTOR"&&ak)throw new Error(uk);if(Array.isArray(a)&&typeof a[0]=="string"&&(t==null||t[a[0]]===void 0))for(var s=0;s<a.length;s++)qh(a[s])&&(n+=hu(o)+":"+Qh(o,a[s])+";");else{var c=Co(e,t,a);switch(o){case"animation":case"animationName":{n+=hu(o)+":"+c+";";break}default:n+=o+"{"+c+"}"}}}}return n}var Jh=/label:\s*([^\s;\n{]+)\s*(;|$)/g,zt;function pf(e,t,r){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var n=!0,i="";zt=void 0;var o=e[0];if(o==null||o.raw===void 0)n=!1,i+=Co(r,t,o);else{var a=o;i+=a[0]}for(var l=1;l<e.length;l++)if(i+=Co(r,t,e[l]),n){var s=o;i+=s[l]}Jh.lastIndex=0;for(var c="",d;(d=Jh.exec(i))!==null;)c+="-"+d[1];var p=ik(i)+c;return{name:p,styles:i,next:zt}}var dk=function(t){return t()},U1=Zi["useInsertionEffect"]?Zi["useInsertionEffect"]:!1,fk=U1||dk,Zh=U1||k.exports.useLayoutEffect,H1=k.exports.createContext(typeof HTMLElement!="undefined"?D1({key:"css"}):null),pk=H1.Provider,V1=function(t){return k.exports.forwardRef(function(r,n){var i=k.exports.useContext(H1);return t(r,i,n)})},as=k.exports.createContext({}),hf={exports:{}};(function(e){function t(){return e.exports=t=Object.assign?Object.assign.bind():function(r){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var o in i)({}).hasOwnProperty.call(i,o)&&(r[o]=i[o])}return r},e.exports.__esModule=!0,e.exports.default=e.exports,t.apply(null,arguments)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports})(hf);var hk=V1(function(e,t){var r=e.styles,n=pf([r],void 0,k.exports.useContext(as)),i=k.exports.useRef();return Zh(function(){var o=t.key+"-global",a=new t.sheet.constructor({key:o,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),l=!1,s=document.querySelector('style[data-emotion="'+o+" "+n.name+'"]');return t.sheet.tags.length&&(a.before=t.sheet.tags[0]),s!==null&&(l=!0,s.setAttribute("data-emotion",o),a.hydrate([s])),i.current=[a,l],function(){a.flush()}},[t]),Zh(function(){var o=i.current,a=o[0],l=o[1];if(l){o[1]=!1;return}if(n.next!==void 0&&B1(t,n.next,!0),a.tags.length){var s=a.tags[a.tags.length-1].nextElementSibling;a.before=s,a.flush()}t.insert("",n,a,!1)},[t,n.name]),null});function yl(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return pf(t)}var mf=function(){var t=yl.apply(void 0,arguments),r="animation-"+t.name;return{name:r,styles:"@keyframes "+r+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},mk=sc,gk=function(t){return t!=="theme"},em=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?mk:gk},tm=function(t,r,n){var i;if(r){var o=r.shouldForwardProp;i=t.__emotion_forwardProp&&o?function(a){return t.__emotion_forwardProp(a)&&o(a)}:o}return typeof i!="function"&&n&&(i=t.__emotion_forwardProp),i},vk=!1,yk=function(t){var r=t.cache,n=t.serialized,i=t.isStringTag;return F1(r,n,i),fk(function(){return B1(r,n,i)}),null},xk=function e(t,r){var n=t.__emotion_real===t,i=n&&t.__emotion_base||t,o,a;r!==void 0&&(o=r.label,a=r.target);var l=tm(t,r,n),s=l||em(i),c=!s("as");return function(){var d=arguments,p=n&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(o!==void 0&&p.push("label:"+o+";"),d[0]==null||d[0].raw===void 0)p.push.apply(p,d);else{p.push(d[0][0]);for(var m=d.length,y=1;y<m;y++)p.push(d[y],d[0][y])}var x=V1(function(v,f,h){var g=c&&v.as||i,w="",S=[],_=v;if(v.theme==null){_={};for(var E in v)_[E]=v[E];_.theme=k.exports.useContext(as)}typeof v.className=="string"?w=nk(f.registered,S,v.className):v.className!=null&&(w=v.className+" ");var O=pf(p.concat(S),f.registered,_);w+=f.key+"-"+O.name,a!==void 0&&(w+=" "+a);var j=c&&l===void 0?em(g):s,T={};for(var I in v)c&&I==="as"||j(I)&&(T[I]=v[I]);return T.className=w,h&&(T.ref=h),k.exports.createElement(k.exports.Fragment,null,k.exports.createElement(yk,{cache:f,serialized:O,isStringTag:typeof g=="string"}),k.exports.createElement(g,T))});return x.displayName=o!==void 0?o:"Styled("+(typeof i=="string"?i:i.displayName||i.name||"Component")+")",x.defaultProps=t.defaultProps,x.__emotion_real=x,x.__emotion_base=i,x.__emotion_styles=p,x.__emotion_forwardProp=l,Object.defineProperty(x,"toString",{value:function(){return a===void 0&&vk?"NO_COMPONENT_SELECTOR":"."+a}}),x.withComponent=function(v,f){return e(v,Q({},r,f,{shouldForwardProp:tm(x,f,!0)})).apply(void 0,p)},x}},wk=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],$c=xk.bind();wk.forEach(function(e){$c[e]=$c(e)});let Pc;typeof document=="object"&&(Pc=D1({key:"css",prepend:!0}));function bk(e){const{injectFirst:t,children:r}=e;return t&&Pc?u(pk,{value:Pc,children:r}):r}function Sk(e){return e==null||Object.keys(e).length===0}function kk(e){const{styles:t,defaultTheme:r={}}=e;return u(hk,{styles:typeof t=="function"?i=>t(Sk(i)?r:i):t})}/**
 * @mui/styled-engine v5.16.6
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function K1(e,t){return $c(e,t)}const Ck=(e,t)=>{Array.isArray(e.__emotion_styles)&&(e.__emotion_styles=t(e.__emotion_styles))};var _k=Object.freeze(Object.defineProperty({__proto__:null,default:K1,internal_processStyles:Ck,ThemeContext:as,keyframes:mf,css:yl,StyledEngineProvider:bk,GlobalStyles:kk},Symbol.toStringTag,{value:"Module"}));function mr(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function X1(e){if(!mr(e))return e;const t={};return Object.keys(e).forEach(r=>{t[r]=X1(e[r])}),t}function Ht(e,t,r={clone:!0}){const n=r.clone?Q({},e):e;return mr(e)&&mr(t)&&Object.keys(t).forEach(i=>{mr(t[i])&&Object.prototype.hasOwnProperty.call(e,i)&&mr(e[i])?n[i]=Ht(e[i],t[i],r):r.clone?n[i]=mr(t[i])?X1(t[i]):t[i]:n[i]=t[i]}),n}var Ek=Object.freeze(Object.defineProperty({__proto__:null,default:Ht,isPlainObject:mr},Symbol.toStringTag,{value:"Module"}));const $k=["values","unit","step"],Pk=e=>{const t=Object.keys(e).map(r=>({key:r,val:e[r]}))||[];return t.sort((r,n)=>r.val-n.val),t.reduce((r,n)=>Q({},r,{[n.key]:n.val}),{})};function G1(e){const{values:t={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:r="px",step:n=5}=e,i=lr(e,$k),o=Pk(t),a=Object.keys(o);function l(m){return`@media (min-width:${typeof t[m]=="number"?t[m]:m}${r})`}function s(m){return`@media (max-width:${(typeof t[m]=="number"?t[m]:m)-n/100}${r})`}function c(m,y){const x=a.indexOf(y);return`@media (min-width:${typeof t[m]=="number"?t[m]:m}${r}) and (max-width:${(x!==-1&&typeof t[a[x]]=="number"?t[a[x]]:y)-n/100}${r})`}function d(m){return a.indexOf(m)+1<a.length?c(m,a[a.indexOf(m)+1]):l(m)}function p(m){const y=a.indexOf(m);return y===0?l(a[1]):y===a.length-1?s(a[y]):c(m,a[a.indexOf(m)+1]).replace("@media","@media not all and")}return Q({keys:a,values:o,up:l,down:s,between:c,only:d,not:p,unit:r},i)}const Ok={borderRadius:4};var Nk=Ok;function Ji(e,t){return t?Ht(e,t,{clone:!1}):e}const gf={xs:0,sm:600,md:900,lg:1200,xl:1536},rm={keys:["xs","sm","md","lg","xl"],up:e=>`@media (min-width:${gf[e]}px)`};function nr(e,t,r){const n=e.theme||{};if(Array.isArray(t)){const o=n.breakpoints||rm;return t.reduce((a,l,s)=>(a[o.up(o.keys[s])]=r(t[s]),a),{})}if(typeof t=="object"){const o=n.breakpoints||rm;return Object.keys(t).reduce((a,l)=>{if(Object.keys(o.values||gf).indexOf(l)!==-1){const s=o.up(l);a[s]=r(t[l],l)}else{const s=l;a[s]=t[s]}return a},{})}return r(t)}function Tk(e={}){var t;return((t=e.keys)==null?void 0:t.reduce((n,i)=>{const o=e.up(i);return n[o]={},n},{}))||{}}function Rk(e,t){return e.reduce((r,n)=>{const i=r[n];return(!i||Object.keys(i).length===0)&&delete r[n],r},t)}function vf(e){if(typeof e!="string")throw new Error(un(7));return e.charAt(0).toUpperCase()+e.slice(1)}var Mk=Object.freeze(Object.defineProperty({__proto__:null,default:vf},Symbol.toStringTag,{value:"Module"}));function ls(e,t,r=!0){if(!t||typeof t!="string")return null;if(e&&e.vars&&r){const n=`vars.${t}`.split(".").reduce((i,o)=>i&&i[o]?i[o]:null,e);if(n!=null)return n}return t.split(".").reduce((n,i)=>n&&n[i]!=null?n[i]:null,e)}function xl(e,t,r,n=r){let i;return typeof e=="function"?i=e(r):Array.isArray(e)?i=e[r]||n:i=ls(e,r)||n,t&&(i=t(i,n,e)),i}function ke(e){const{prop:t,cssProperty:r=e.prop,themeKey:n,transform:i}=e,o=a=>{if(a[t]==null)return null;const l=a[t],s=a.theme,c=ls(s,n)||{};return nr(a,l,p=>{let m=xl(c,i,p);return p===m&&typeof p=="string"&&(m=xl(c,i,`${t}${p==="default"?"":vf(p)}`,p)),r===!1?m:{[r]:m}})};return o.propTypes={},o.filterProps=[t],o}function Lk(e){const t={};return r=>(t[r]===void 0&&(t[r]=e(r)),t[r])}const jk={m:"margin",p:"padding"},zk={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},nm={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},Ak=Lk(e=>{if(e.length>2)if(nm[e])e=nm[e];else return[e];const[t,r]=e.split(""),n=jk[t],i=zk[r]||"";return Array.isArray(i)?i.map(o=>n+o):[n+i]}),yf=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],xf=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"];[...yf,...xf];function Ho(e,t,r,n){var i;const o=(i=ls(e,t,!1))!=null?i:r;return typeof o=="number"?a=>typeof a=="string"?a:o*a:Array.isArray(o)?a=>typeof a=="string"?a:o[a]:typeof o=="function"?o:()=>{}}function Y1(e){return Ho(e,"spacing",8)}function Vo(e,t){if(typeof t=="string"||t==null)return t;const r=Math.abs(t),n=e(r);return t>=0?n:typeof n=="number"?-n:`-${n}`}function Ik(e,t){return r=>e.reduce((n,i)=>(n[i]=Vo(t,r),n),{})}function Dk(e,t,r,n){if(t.indexOf(r)===-1)return null;const i=Ak(r),o=Ik(i,n),a=e[r];return nr(e,a,o)}function q1(e,t){const r=Y1(e.theme);return Object.keys(e).map(n=>Dk(e,t,n,r)).reduce(Ji,{})}function ge(e){return q1(e,yf)}ge.propTypes={};ge.filterProps=yf;function ve(e){return q1(e,xf)}ve.propTypes={};ve.filterProps=xf;function Fk(e=8){if(e.mui)return e;const t=Y1({spacing:e}),r=(...n)=>(n.length===0?[1]:n).map(o=>{const a=t(o);return typeof a=="number"?`${a}px`:a}).join(" ");return r.mui=!0,r}function ss(...e){const t=e.reduce((n,i)=>(i.filterProps.forEach(o=>{n[o]=i}),n),{}),r=n=>Object.keys(n).reduce((i,o)=>t[o]?Ji(i,t[o](n)):i,{});return r.propTypes={},r.filterProps=e.reduce((n,i)=>n.concat(i.filterProps),[]),r}function ht(e){return typeof e!="number"?e:`${e}px solid`}function St(e,t){return ke({prop:e,themeKey:"borders",transform:t})}const Bk=St("border",ht),Wk=St("borderTop",ht),Uk=St("borderRight",ht),Hk=St("borderBottom",ht),Vk=St("borderLeft",ht),Kk=St("borderColor"),Xk=St("borderTopColor"),Gk=St("borderRightColor"),Yk=St("borderBottomColor"),qk=St("borderLeftColor"),Qk=St("outline",ht),Jk=St("outlineColor"),us=e=>{if(e.borderRadius!==void 0&&e.borderRadius!==null){const t=Ho(e.theme,"shape.borderRadius",4),r=n=>({borderRadius:Vo(t,n)});return nr(e,e.borderRadius,r)}return null};us.propTypes={};us.filterProps=["borderRadius"];ss(Bk,Wk,Uk,Hk,Vk,Kk,Xk,Gk,Yk,qk,us,Qk,Jk);const cs=e=>{if(e.gap!==void 0&&e.gap!==null){const t=Ho(e.theme,"spacing",8),r=n=>({gap:Vo(t,n)});return nr(e,e.gap,r)}return null};cs.propTypes={};cs.filterProps=["gap"];const ds=e=>{if(e.columnGap!==void 0&&e.columnGap!==null){const t=Ho(e.theme,"spacing",8),r=n=>({columnGap:Vo(t,n)});return nr(e,e.columnGap,r)}return null};ds.propTypes={};ds.filterProps=["columnGap"];const fs=e=>{if(e.rowGap!==void 0&&e.rowGap!==null){const t=Ho(e.theme,"spacing",8),r=n=>({rowGap:Vo(t,n)});return nr(e,e.rowGap,r)}return null};fs.propTypes={};fs.filterProps=["rowGap"];const Zk=ke({prop:"gridColumn"}),e3=ke({prop:"gridRow"}),t3=ke({prop:"gridAutoFlow"}),r3=ke({prop:"gridAutoColumns"}),n3=ke({prop:"gridAutoRows"}),i3=ke({prop:"gridTemplateColumns"}),o3=ke({prop:"gridTemplateRows"}),a3=ke({prop:"gridTemplateAreas"}),l3=ke({prop:"gridArea"});ss(cs,ds,fs,Zk,e3,t3,r3,n3,i3,o3,a3,l3);function Xn(e,t){return t==="grey"?t:e}const s3=ke({prop:"color",themeKey:"palette",transform:Xn}),u3=ke({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette",transform:Xn}),c3=ke({prop:"backgroundColor",themeKey:"palette",transform:Xn});ss(s3,u3,c3);function lt(e){return e<=1&&e!==0?`${e*100}%`:e}const d3=ke({prop:"width",transform:lt}),wf=e=>{if(e.maxWidth!==void 0&&e.maxWidth!==null){const t=r=>{var n,i;const o=((n=e.theme)==null||(n=n.breakpoints)==null||(n=n.values)==null?void 0:n[r])||gf[r];return o?((i=e.theme)==null||(i=i.breakpoints)==null?void 0:i.unit)!=="px"?{maxWidth:`${o}${e.theme.breakpoints.unit}`}:{maxWidth:o}:{maxWidth:lt(r)}};return nr(e,e.maxWidth,t)}return null};wf.filterProps=["maxWidth"];const f3=ke({prop:"minWidth",transform:lt}),p3=ke({prop:"height",transform:lt}),h3=ke({prop:"maxHeight",transform:lt}),m3=ke({prop:"minHeight",transform:lt});ke({prop:"size",cssProperty:"width",transform:lt});ke({prop:"size",cssProperty:"height",transform:lt});const g3=ke({prop:"boxSizing"});ss(d3,wf,f3,p3,h3,m3,g3);const v3={border:{themeKey:"borders",transform:ht},borderTop:{themeKey:"borders",transform:ht},borderRight:{themeKey:"borders",transform:ht},borderBottom:{themeKey:"borders",transform:ht},borderLeft:{themeKey:"borders",transform:ht},borderColor:{themeKey:"palette"},borderTopColor:{themeKey:"palette"},borderRightColor:{themeKey:"palette"},borderBottomColor:{themeKey:"palette"},borderLeftColor:{themeKey:"palette"},outline:{themeKey:"borders",transform:ht},outlineColor:{themeKey:"palette"},borderRadius:{themeKey:"shape.borderRadius",style:us},color:{themeKey:"palette",transform:Xn},bgcolor:{themeKey:"palette",cssProperty:"backgroundColor",transform:Xn},backgroundColor:{themeKey:"palette",transform:Xn},p:{style:ve},pt:{style:ve},pr:{style:ve},pb:{style:ve},pl:{style:ve},px:{style:ve},py:{style:ve},padding:{style:ve},paddingTop:{style:ve},paddingRight:{style:ve},paddingBottom:{style:ve},paddingLeft:{style:ve},paddingX:{style:ve},paddingY:{style:ve},paddingInline:{style:ve},paddingInlineStart:{style:ve},paddingInlineEnd:{style:ve},paddingBlock:{style:ve},paddingBlockStart:{style:ve},paddingBlockEnd:{style:ve},m:{style:ge},mt:{style:ge},mr:{style:ge},mb:{style:ge},ml:{style:ge},mx:{style:ge},my:{style:ge},margin:{style:ge},marginTop:{style:ge},marginRight:{style:ge},marginBottom:{style:ge},marginLeft:{style:ge},marginX:{style:ge},marginY:{style:ge},marginInline:{style:ge},marginInlineStart:{style:ge},marginInlineEnd:{style:ge},marginBlock:{style:ge},marginBlockStart:{style:ge},marginBlockEnd:{style:ge},displayPrint:{cssProperty:!1,transform:e=>({"@media print":{display:e}})},display:{},overflow:{},textOverflow:{},visibility:{},whiteSpace:{},flexBasis:{},flexDirection:{},flexWrap:{},justifyContent:{},alignItems:{},alignContent:{},order:{},flex:{},flexGrow:{},flexShrink:{},alignSelf:{},justifyItems:{},justifySelf:{},gap:{style:cs},rowGap:{style:fs},columnGap:{style:ds},gridColumn:{},gridRow:{},gridAutoFlow:{},gridAutoColumns:{},gridAutoRows:{},gridTemplateColumns:{},gridTemplateRows:{},gridTemplateAreas:{},gridArea:{},position:{},zIndex:{themeKey:"zIndex"},top:{},right:{},bottom:{},left:{},boxShadow:{themeKey:"shadows"},width:{transform:lt},maxWidth:{style:wf},minWidth:{transform:lt},height:{transform:lt},maxHeight:{transform:lt},minHeight:{transform:lt},boxSizing:{},fontFamily:{themeKey:"typography"},fontSize:{themeKey:"typography"},fontStyle:{themeKey:"typography"},fontWeight:{themeKey:"typography"},letterSpacing:{},textTransform:{},lineHeight:{},textAlign:{},typography:{cssProperty:!1,themeKey:"typography"}};var Ko=v3;function y3(...e){const t=e.reduce((n,i)=>n.concat(Object.keys(i)),[]),r=new Set(t);return e.every(n=>r.size===Object.keys(n).length)}function x3(e,t){return typeof e=="function"?e(t):e}function Q1(){function e(r,n,i,o){const a={[r]:n,theme:i},l=o[r];if(!l)return{[r]:n};const{cssProperty:s=r,themeKey:c,transform:d,style:p}=l;if(n==null)return null;if(c==="typography"&&n==="inherit")return{[r]:n};const m=ls(i,c)||{};return p?p(a):nr(a,n,x=>{let v=xl(m,d,x);return x===v&&typeof x=="string"&&(v=xl(m,d,`${r}${x==="default"?"":vf(x)}`,x)),s===!1?v:{[s]:v}})}function t(r){var n;const{sx:i,theme:o={}}=r||{};if(!i)return null;const a=(n=o.unstable_sxConfig)!=null?n:Ko;function l(s){let c=s;if(typeof s=="function")c=s(o);else if(typeof s!="object")return s;if(!c)return null;const d=Tk(o.breakpoints),p=Object.keys(d);let m=d;return Object.keys(c).forEach(y=>{const x=x3(c[y],o);if(x!=null)if(typeof x=="object")if(a[y])m=Ji(m,e(y,x,o,a));else{const v=nr({theme:o},x,f=>({[y]:f}));y3(v,x)?m[y]=t({sx:x,theme:o}):m=Ji(m,v)}else m=Ji(m,e(y,x,o,a))}),Rk(p,m)}return Array.isArray(i)?i.map(l):l(i)}return t}const J1=Q1();J1.filterProps=["sx"];var ps=J1;function Z1(e,t){const r=this;return r.vars&&typeof r.getColorSchemeSelector=="function"?{[r.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/,"*:where($1)")]:t}:r.palette.mode===e?t:{}}const w3=["breakpoints","palette","spacing","shape"];function bf(e={},...t){const{breakpoints:r={},palette:n={},spacing:i,shape:o={}}=e,a=lr(e,w3),l=G1(r),s=Fk(i);let c=Ht({breakpoints:l,direction:"ltr",components:{},palette:Q({mode:"light"},n),spacing:s,shape:Q({},Nk,o)},a);return c.applyStyles=Z1,c=t.reduce((d,p)=>Ht(d,p),c),c.unstable_sxConfig=Q({},Ko,a==null?void 0:a.unstable_sxConfig),c.unstable_sx=function(p){return ps({sx:p,theme:this})},c}var b3=Object.freeze(Object.defineProperty({__proto__:null,default:bf,private_createBreakpoints:G1,unstable_applyStyles:Z1},Symbol.toStringTag,{value:"Module"}));function S3(e){return Object.keys(e).length===0}function k3(e=null){const t=k.exports.useContext(as);return!t||S3(t)?e:t}const C3=bf();function _3(e=C3){return k3(e)}const E3=["sx"],$3=e=>{var t,r;const n={systemProps:{},otherProps:{}},i=(t=e==null||(r=e.theme)==null?void 0:r.unstable_sxConfig)!=null?t:Ko;return Object.keys(e).forEach(o=>{i[o]?n.systemProps[o]=e[o]:n.otherProps[o]=e[o]}),n};function ev(e){const{sx:t}=e,r=lr(e,E3),{systemProps:n,otherProps:i}=$3(r);let o;return Array.isArray(t)?o=[n,...t]:typeof t=="function"?o=(...a)=>{const l=t(...a);return mr(l)?Q({},n,l):n}:o=Q({},n,t),Q({},i,{sx:o})}var P3=Object.freeze(Object.defineProperty({__proto__:null,default:ps,unstable_createStyleFunctionSx:Q1,extendSxProp:ev,unstable_defaultSxConfig:Ko},Symbol.toStringTag,{value:"Module"}));const im=e=>e,O3=()=>{let e=im;return{configure(t){e=t},generate(t){return e(t)},reset(){e=im}}},N3=O3();var tv=N3;function rv(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(r=rv(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function T3(){for(var e,t,r=0,n="",i=arguments.length;r<i;r++)(e=arguments[r])&&(t=rv(e))&&(n&&(n+=" "),n+=t);return n}const R3=["className","component"];function M3(e={}){const{themeId:t,defaultTheme:r,defaultClassName:n="MuiBox-root",generateClassName:i}=e,o=K1("div",{shouldForwardProp:l=>l!=="theme"&&l!=="sx"&&l!=="as"})(ps);return k.exports.forwardRef(function(s,c){const d=_3(r),p=ev(s),{className:m,component:y="div"}=p,x=lr(p,R3);return u(o,Q({as:y,ref:c,className:T3(m,i?i(n):n),theme:t&&d[t]||d},x))})}const L3={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",open:"open",readOnly:"readOnly",required:"required",selected:"selected"};function nv(e,t,r="Mui"){const n=L3[t];return n?`${r}-${n}`:`${tv.generate(e)}-${t}`}function iv(e,t,r="Mui"){const n={};return t.forEach(i=>{n[i]=nv(e,i,r)}),n}var Oc={exports:{}},ie={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sf=Symbol.for("react.element"),kf=Symbol.for("react.portal"),hs=Symbol.for("react.fragment"),ms=Symbol.for("react.strict_mode"),gs=Symbol.for("react.profiler"),vs=Symbol.for("react.provider"),ys=Symbol.for("react.context"),j3=Symbol.for("react.server_context"),xs=Symbol.for("react.forward_ref"),ws=Symbol.for("react.suspense"),bs=Symbol.for("react.suspense_list"),Ss=Symbol.for("react.memo"),ks=Symbol.for("react.lazy"),z3=Symbol.for("react.offscreen"),ov;ov=Symbol.for("react.module.reference");function kt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Sf:switch(e=e.type,e){case hs:case gs:case ms:case ws:case bs:return e;default:switch(e=e&&e.$$typeof,e){case j3:case ys:case xs:case ks:case Ss:case vs:return e;default:return t}}case kf:return t}}}ie.ContextConsumer=ys;ie.ContextProvider=vs;ie.Element=Sf;ie.ForwardRef=xs;ie.Fragment=hs;ie.Lazy=ks;ie.Memo=Ss;ie.Portal=kf;ie.Profiler=gs;ie.StrictMode=ms;ie.Suspense=ws;ie.SuspenseList=bs;ie.isAsyncMode=function(){return!1};ie.isConcurrentMode=function(){return!1};ie.isContextConsumer=function(e){return kt(e)===ys};ie.isContextProvider=function(e){return kt(e)===vs};ie.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Sf};ie.isForwardRef=function(e){return kt(e)===xs};ie.isFragment=function(e){return kt(e)===hs};ie.isLazy=function(e){return kt(e)===ks};ie.isMemo=function(e){return kt(e)===Ss};ie.isPortal=function(e){return kt(e)===kf};ie.isProfiler=function(e){return kt(e)===gs};ie.isStrictMode=function(e){return kt(e)===ms};ie.isSuspense=function(e){return kt(e)===ws};ie.isSuspenseList=function(e){return kt(e)===bs};ie.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===hs||e===gs||e===ms||e===ws||e===bs||e===z3||typeof e=="object"&&e!==null&&(e.$$typeof===ks||e.$$typeof===Ss||e.$$typeof===vs||e.$$typeof===ys||e.$$typeof===xs||e.$$typeof===ov||e.getModuleId!==void 0)};ie.typeOf=kt;Oc.exports=ie;const A3=/^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;function av(e){const t=`${e}`.match(A3);return t&&t[1]||""}function lv(e,t=""){return e.displayName||e.name||av(e)||t}function om(e,t,r){const n=lv(t);return e.displayName||(n!==""?`${r}(${n})`:r)}function I3(e){if(e!=null){if(typeof e=="string")return e;if(typeof e=="function")return lv(e,"Component");if(typeof e=="object")switch(e.$$typeof){case Oc.exports.ForwardRef:return om(e,e.render,"ForwardRef");case Oc.exports.Memo:return om(e,e.type,"memo");default:return}}}var D3=Object.freeze(Object.defineProperty({__proto__:null,default:I3,getFunctionName:av},Symbol.toStringTag,{value:"Module"}));function Nc(e,t){const r=Q({},t);return Object.keys(e).forEach(n=>{if(n.toString().match(/^(components|slots)$/))r[n]=Q({},e[n],r[n]);else if(n.toString().match(/^(componentsProps|slotProps)$/)){const i=e[n]||{},o=t[n];r[n]={},!o||!Object.keys(o)?r[n]=i:!i||!Object.keys(i)?r[n]=o:(r[n]=Q({},o),Object.keys(i).forEach(a=>{r[n][a]=Nc(i[a],o[a])}))}else r[n]===void 0&&(r[n]=e[n])}),r}function sv(e,t=Number.MIN_SAFE_INTEGER,r=Number.MAX_SAFE_INTEGER){return Math.max(t,Math.min(e,r))}var F3=Object.freeze(Object.defineProperty({__proto__:null,default:sv},Symbol.toStringTag,{value:"Module"}));function B3(e,t=0,r=1){return sv(e,t,r)}function W3(e){e=e.slice(1);const t=new RegExp(`.{1,${e.length>=6?2:1}}`,"g");let r=e.match(t);return r&&r[0].length===1&&(r=r.map(n=>n+n)),r?`rgb${r.length===4?"a":""}(${r.map((n,i)=>i<3?parseInt(n,16):Math.round(parseInt(n,16)/255*1e3)/1e3).join(", ")})`:""}function uv(e){if(e.type)return e;if(e.charAt(0)==="#")return uv(W3(e));const t=e.indexOf("("),r=e.substring(0,t);if(["rgb","rgba","hsl","hsla","color"].indexOf(r)===-1)throw new Error(un(9,e));let n=e.substring(t+1,e.length-1),i;if(r==="color"){if(n=n.split(" "),i=n.shift(),n.length===4&&n[3].charAt(0)==="/"&&(n[3]=n[3].slice(1)),["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(i)===-1)throw new Error(un(10,i))}else n=n.split(",");return n=n.map(o=>parseFloat(o)),{type:r,values:n,colorSpace:i}}function U3(e){const{type:t,colorSpace:r}=e;let{values:n}=e;return t.indexOf("rgb")!==-1?n=n.map((i,o)=>o<3?parseInt(i,10):i):t.indexOf("hsl")!==-1&&(n[1]=`${n[1]}%`,n[2]=`${n[2]}%`),t.indexOf("color")!==-1?n=`${r} ${n.join(" ")}`:n=`${n.join(", ")}`,`${t}(${n})`}function H3(e,t){return e=uv(e),t=B3(t),(e.type==="rgb"||e.type==="hsl")&&(e.type+="a"),e.type==="color"?e.values[3]=`/${t}`:e.values[3]=t,U3(e)}function V3(e,t,r=void 0){const n={};return Object.keys(e).forEach(i=>{n[i]=e[i].reduce((o,a)=>{if(a){const l=t(a);l!==""&&o.push(l),r&&r[a]&&o.push(r[a])}return o},[]).join(" ")}),n}const K3=k.exports.createContext(void 0);function X3(e){const{theme:t,name:r,props:n}=e;if(!t||!t.components||!t.components[r])return n;const i=t.components[r];return i.defaultProps?Nc(i.defaultProps,n):!i.styleOverrides&&!i.variants?Nc(i,n):n}function G3({props:e,name:t}){const r=k.exports.useContext(K3);return X3({props:e,name:t,theme:{components:r}})}function Y3(e,t){return Q({toolbar:{minHeight:56,[e.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[e.up("sm")]:{minHeight:64}}},t)}var Ce={},Cf={exports:{}};(function(e){function t(r){return r&&r.__esModule?r:{default:r}}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports})(Cf);var q3=ir(E4),Q3=ir(F3),cv=Cf.exports;Object.defineProperty(Ce,"__esModule",{value:!0});Ce.alpha=hv;Ce.blend=cC;Ce.colorChannel=void 0;var J3=Ce.darken=Ef;Ce.decomposeColor=wt;Ce.emphasize=mv;var Z3=Ce.getContrastRatio=oC;Ce.getLuminance=wl;Ce.hexToRgb=dv;Ce.hslToRgb=pv;var eC=Ce.lighten=$f;Ce.private_safeAlpha=aC;Ce.private_safeColorChannel=void 0;Ce.private_safeDarken=lC;Ce.private_safeEmphasize=uC;Ce.private_safeLighten=sC;Ce.recomposeColor=hi;Ce.rgbToHex=iC;var am=cv(q3),tC=cv(Q3);function _f(e,t=0,r=1){return(0,tC.default)(e,t,r)}function dv(e){e=e.slice(1);const t=new RegExp(`.{1,${e.length>=6?2:1}}`,"g");let r=e.match(t);return r&&r[0].length===1&&(r=r.map(n=>n+n)),r?`rgb${r.length===4?"a":""}(${r.map((n,i)=>i<3?parseInt(n,16):Math.round(parseInt(n,16)/255*1e3)/1e3).join(", ")})`:""}function rC(e){const t=e.toString(16);return t.length===1?`0${t}`:t}function wt(e){if(e.type)return e;if(e.charAt(0)==="#")return wt(dv(e));const t=e.indexOf("("),r=e.substring(0,t);if(["rgb","rgba","hsl","hsla","color"].indexOf(r)===-1)throw new Error((0,am.default)(9,e));let n=e.substring(t+1,e.length-1),i;if(r==="color"){if(n=n.split(" "),i=n.shift(),n.length===4&&n[3].charAt(0)==="/"&&(n[3]=n[3].slice(1)),["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(i)===-1)throw new Error((0,am.default)(10,i))}else n=n.split(",");return n=n.map(o=>parseFloat(o)),{type:r,values:n,colorSpace:i}}const fv=e=>{const t=wt(e);return t.values.slice(0,3).map((r,n)=>t.type.indexOf("hsl")!==-1&&n!==0?`${r}%`:r).join(" ")};Ce.colorChannel=fv;const nC=(e,t)=>{try{return fv(e)}catch{return e}};Ce.private_safeColorChannel=nC;function hi(e){const{type:t,colorSpace:r}=e;let{values:n}=e;return t.indexOf("rgb")!==-1?n=n.map((i,o)=>o<3?parseInt(i,10):i):t.indexOf("hsl")!==-1&&(n[1]=`${n[1]}%`,n[2]=`${n[2]}%`),t.indexOf("color")!==-1?n=`${r} ${n.join(" ")}`:n=`${n.join(", ")}`,`${t}(${n})`}function iC(e){if(e.indexOf("#")===0)return e;const{values:t}=wt(e);return`#${t.map((r,n)=>rC(n===3?Math.round(255*r):r)).join("")}`}function pv(e){e=wt(e);const{values:t}=e,r=t[0],n=t[1]/100,i=t[2]/100,o=n*Math.min(i,1-i),a=(c,d=(c+r/30)%12)=>i-o*Math.max(Math.min(d-3,9-d,1),-1);let l="rgb";const s=[Math.round(a(0)*255),Math.round(a(8)*255),Math.round(a(4)*255)];return e.type==="hsla"&&(l+="a",s.push(t[3])),hi({type:l,values:s})}function wl(e){e=wt(e);let t=e.type==="hsl"||e.type==="hsla"?wt(pv(e)).values:e.values;return t=t.map(r=>(e.type!=="color"&&(r/=255),r<=.03928?r/12.92:((r+.055)/1.055)**2.4)),Number((.2126*t[0]+.7152*t[1]+.0722*t[2]).toFixed(3))}function oC(e,t){const r=wl(e),n=wl(t);return(Math.max(r,n)+.05)/(Math.min(r,n)+.05)}function hv(e,t){return e=wt(e),t=_f(t),(e.type==="rgb"||e.type==="hsl")&&(e.type+="a"),e.type==="color"?e.values[3]=`/${t}`:e.values[3]=t,hi(e)}function aC(e,t,r){try{return hv(e,t)}catch{return e}}function Ef(e,t){if(e=wt(e),t=_f(t),e.type.indexOf("hsl")!==-1)e.values[2]*=1-t;else if(e.type.indexOf("rgb")!==-1||e.type.indexOf("color")!==-1)for(let r=0;r<3;r+=1)e.values[r]*=1-t;return hi(e)}function lC(e,t,r){try{return Ef(e,t)}catch{return e}}function $f(e,t){if(e=wt(e),t=_f(t),e.type.indexOf("hsl")!==-1)e.values[2]+=(100-e.values[2])*t;else if(e.type.indexOf("rgb")!==-1)for(let r=0;r<3;r+=1)e.values[r]+=(255-e.values[r])*t;else if(e.type.indexOf("color")!==-1)for(let r=0;r<3;r+=1)e.values[r]+=(1-e.values[r])*t;return hi(e)}function sC(e,t,r){try{return $f(e,t)}catch{return e}}function mv(e,t=.15){return wl(e)>.5?Ef(e,t):$f(e,t)}function uC(e,t,r){try{return mv(e,t)}catch{return e}}function cC(e,t,r,n=1){const i=(s,c)=>Math.round((s**(1/n)*(1-r)+c**(1/n)*r)**n),o=wt(e),a=wt(t),l=[i(o.values[0],a.values[0]),i(o.values[1],a.values[1]),i(o.values[2],a.values[2])];return hi({type:"rgb",values:l})}const dC=["mode","contrastThreshold","tonalOffset"],lm={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:bo.white,default:bo.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}},mu={text:{primary:bo.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:bo.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}};function sm(e,t,r,n){const i=n.light||n,o=n.dark||n*1.5;e[t]||(e.hasOwnProperty(r)?e[t]=e[r]:t==="light"?e.light=eC(e.main,i):t==="dark"&&(e.dark=J3(e.main,o)))}function fC(e="light"){return e==="dark"?{main:bn[200],light:bn[50],dark:bn[400]}:{main:bn[700],light:bn[400],dark:bn[800]}}function pC(e="light"){return e==="dark"?{main:wn[200],light:wn[50],dark:wn[400]}:{main:wn[500],light:wn[300],dark:wn[700]}}function hC(e="light"){return e==="dark"?{main:xn[500],light:xn[300],dark:xn[700]}:{main:xn[700],light:xn[400],dark:xn[800]}}function mC(e="light"){return e==="dark"?{main:Sn[400],light:Sn[300],dark:Sn[700]}:{main:Sn[700],light:Sn[500],dark:Sn[900]}}function gC(e="light"){return e==="dark"?{main:kn[400],light:kn[300],dark:kn[700]}:{main:kn[800],light:kn[500],dark:kn[900]}}function vC(e="light"){return e==="dark"?{main:Ni[400],light:Ni[300],dark:Ni[700]}:{main:"#ed6c02",light:Ni[500],dark:Ni[900]}}function yC(e){const{mode:t="light",contrastThreshold:r=3,tonalOffset:n=.2}=e,i=lr(e,dC),o=e.primary||fC(t),a=e.secondary||pC(t),l=e.error||hC(t),s=e.info||mC(t),c=e.success||gC(t),d=e.warning||vC(t);function p(v){return Z3(v,mu.text.primary)>=r?mu.text.primary:lm.text.primary}const m=({color:v,name:f,mainShade:h=500,lightShade:g=300,darkShade:w=700})=>{if(v=Q({},v),!v.main&&v[h]&&(v.main=v[h]),!v.hasOwnProperty("main"))throw new Error(un(11,f?` (${f})`:"",h));if(typeof v.main!="string")throw new Error(un(12,f?` (${f})`:"",JSON.stringify(v.main)));return sm(v,"light",g,n),sm(v,"dark",w,n),v.contrastText||(v.contrastText=p(v.main)),v},y={dark:mu,light:lm};return Ht(Q({common:Q({},bo),mode:t,primary:m({color:o,name:"primary"}),secondary:m({color:a,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:m({color:l,name:"error"}),warning:m({color:d,name:"warning"}),info:m({color:s,name:"info"}),success:m({color:c,name:"success"}),grey:_4,contrastThreshold:r,getContrastText:p,augmentColor:m,tonalOffset:n},y[t]),i)}const xC=["fontFamily","fontSize","fontWeightLight","fontWeightRegular","fontWeightMedium","fontWeightBold","htmlFontSize","allVariants","pxToRem"];function wC(e){return Math.round(e*1e5)/1e5}const um={textTransform:"uppercase"},cm='"Roboto", "Helvetica", "Arial", sans-serif';function bC(e,t){const r=typeof t=="function"?t(e):t,{fontFamily:n=cm,fontSize:i=14,fontWeightLight:o=300,fontWeightRegular:a=400,fontWeightMedium:l=500,fontWeightBold:s=700,htmlFontSize:c=16,allVariants:d,pxToRem:p}=r,m=lr(r,xC),y=i/14,x=p||(h=>`${h/c*y}rem`),v=(h,g,w,S,_)=>Q({fontFamily:n,fontWeight:h,fontSize:x(g),lineHeight:w},n===cm?{letterSpacing:`${wC(S/g)}em`}:{},_,d),f={h1:v(o,96,1.167,-1.5),h2:v(o,60,1.2,-.5),h3:v(a,48,1.167,0),h4:v(a,34,1.235,.25),h5:v(a,24,1.334,0),h6:v(l,20,1.6,.15),subtitle1:v(a,16,1.75,.15),subtitle2:v(l,14,1.57,.1),body1:v(a,16,1.5,.15),body2:v(a,14,1.43,.15),button:v(l,14,1.75,.4,um),caption:v(a,12,1.66,.4),overline:v(a,12,2.66,1,um),inherit:{fontFamily:"inherit",fontWeight:"inherit",fontSize:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}};return Ht(Q({htmlFontSize:c,pxToRem:x,fontFamily:n,fontSize:i,fontWeightLight:o,fontWeightRegular:a,fontWeightMedium:l,fontWeightBold:s},f),m,{clone:!1})}const SC=.2,kC=.14,CC=.12;function ce(...e){return[`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${SC})`,`${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${kC})`,`${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${CC})`].join(",")}const _C=["none",ce(0,2,1,-1,0,1,1,0,0,1,3,0),ce(0,3,1,-2,0,2,2,0,0,1,5,0),ce(0,3,3,-2,0,3,4,0,0,1,8,0),ce(0,2,4,-1,0,4,5,0,0,1,10,0),ce(0,3,5,-1,0,5,8,0,0,1,14,0),ce(0,3,5,-1,0,6,10,0,0,1,18,0),ce(0,4,5,-2,0,7,10,1,0,2,16,1),ce(0,5,5,-3,0,8,10,1,0,3,14,2),ce(0,5,6,-3,0,9,12,1,0,3,16,2),ce(0,6,6,-3,0,10,14,1,0,4,18,3),ce(0,6,7,-4,0,11,15,1,0,4,20,3),ce(0,7,8,-4,0,12,17,2,0,5,22,4),ce(0,7,8,-4,0,13,19,2,0,5,24,4),ce(0,7,9,-4,0,14,21,2,0,5,26,4),ce(0,8,9,-5,0,15,22,2,0,6,28,5),ce(0,8,10,-5,0,16,24,2,0,6,30,5),ce(0,8,11,-5,0,17,26,2,0,6,32,5),ce(0,9,11,-5,0,18,28,2,0,7,34,6),ce(0,9,12,-6,0,19,29,2,0,7,36,6),ce(0,10,13,-6,0,20,31,3,0,8,38,7),ce(0,10,13,-6,0,21,33,3,0,8,40,7),ce(0,10,14,-6,0,22,35,3,0,8,42,7),ce(0,11,14,-7,0,23,36,3,0,9,44,8),ce(0,11,15,-7,0,24,38,3,0,9,46,8)];var EC=_C;const $C=["duration","easing","delay"],PC={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},OC={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function dm(e){return`${Math.round(e)}ms`}function NC(e){if(!e)return 0;const t=e/36;return Math.round((4+15*t**.25+t/5)*10)}function TC(e){const t=Q({},PC,e.easing),r=Q({},OC,e.duration);return Q({getAutoHeightDuration:NC,create:(i=["all"],o={})=>{const{duration:a=r.standard,easing:l=t.easeInOut,delay:s=0}=o;return lr(o,$C),(Array.isArray(i)?i:[i]).map(c=>`${c} ${typeof a=="string"?a:dm(a)} ${l} ${typeof s=="string"?s:dm(s)}`).join(",")}},e,{easing:t,duration:r})}const RC={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500};var MC=RC;const LC=["breakpoints","mixins","spacing","palette","transitions","typography","shape"];function gv(e={},...t){const{mixins:r={},palette:n={},transitions:i={},typography:o={}}=e,a=lr(e,LC);if(e.vars)throw new Error(un(18));const l=yC(n),s=bf(e);let c=Ht(s,{mixins:Y3(s.breakpoints,r),palette:l,shadows:EC.slice(),typography:bC(l,o),transitions:TC(i),zIndex:Q({},MC)});return c=Ht(c,a),c=t.reduce((d,p)=>Ht(d,p),c),c.unstable_sxConfig=Q({},Ko,a==null?void 0:a.unstable_sxConfig),c.unstable_sx=function(p){return ps({sx:p,theme:this})},c}function jC(e){return String(e).match(/[\d.\-+]*\s*(.*)/)[1]||""}function zC(e){return parseFloat(e)}const AC=gv();var IC=AC,Xo={},Pf={exports:{}};(function(e){function t(r,n){if(r==null)return{};var i={};for(var o in r)if({}.hasOwnProperty.call(r,o)){if(n.includes(o))continue;i[o]=r[o]}return i}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports})(Pf);var DC=ir(_k),FC=ir(Ek),BC=ir(Mk),WC=ir(D3),UC=ir(b3),HC=ir(P3),mi=Cf.exports;Object.defineProperty(Xo,"__esModule",{value:!0});var VC=Xo.default=i_;Xo.shouldForwardProp=La;Xo.systemDefaultTheme=void 0;var pt=mi(hf.exports),Tc=mi(Pf.exports),fm=JC(DC),KC=FC;mi(BC);mi(WC);var XC=mi(UC),GC=mi(HC);const YC=["ownerState"],qC=["variants"],QC=["name","slot","skipVariantsResolver","skipSx","overridesResolver"];function vv(e){if(typeof WeakMap!="function")return null;var t=new WeakMap,r=new WeakMap;return(vv=function(n){return n?r:t})(e)}function JC(e,t){if(!t&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var r=vv(t);if(r&&r.has(e))return r.get(e);var n={__proto__:null},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(o!=="default"&&Object.prototype.hasOwnProperty.call(e,o)){var a=i?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}return n.default=e,r&&r.set(e,n),n}function ZC(e){return Object.keys(e).length===0}function e_(e){return typeof e=="string"&&e.charCodeAt(0)>96}function La(e){return e!=="ownerState"&&e!=="theme"&&e!=="sx"&&e!=="as"}const t_=Xo.systemDefaultTheme=(0,XC.default)(),r_=e=>e&&e.charAt(0).toLowerCase()+e.slice(1);function ga({defaultTheme:e,theme:t,themeId:r}){return ZC(t)?e:t[r]||t}function n_(e){return e?(t,r)=>r[e]:null}function ja(e,t){let{ownerState:r}=t,n=(0,Tc.default)(t,YC);const i=typeof e=="function"?e((0,pt.default)({ownerState:r},n)):e;if(Array.isArray(i))return i.flatMap(o=>ja(o,(0,pt.default)({ownerState:r},n)));if(!!i&&typeof i=="object"&&Array.isArray(i.variants)){const{variants:o=[]}=i;let l=(0,Tc.default)(i,qC);return o.forEach(s=>{let c=!0;typeof s.props=="function"?c=s.props((0,pt.default)({ownerState:r},n,r)):Object.keys(s.props).forEach(d=>{(r==null?void 0:r[d])!==s.props[d]&&n[d]!==s.props[d]&&(c=!1)}),c&&(Array.isArray(l)||(l=[l]),l.push(typeof s.style=="function"?s.style((0,pt.default)({ownerState:r},n,r)):s.style))}),l}return i}function i_(e={}){const{themeId:t,defaultTheme:r=t_,rootShouldForwardProp:n=La,slotShouldForwardProp:i=La}=e,o=a=>(0,GC.default)((0,pt.default)({},a,{theme:ga((0,pt.default)({},a,{defaultTheme:r,themeId:t}))}));return o.__mui_systemSx=!0,(a,l={})=>{(0,fm.internal_processStyles)(a,_=>_.filter(E=>!(E!=null&&E.__mui_systemSx)));const{name:s,slot:c,skipVariantsResolver:d,skipSx:p,overridesResolver:m=n_(r_(c))}=l,y=(0,Tc.default)(l,QC),x=d!==void 0?d:c&&c!=="Root"&&c!=="root"||!1,v=p||!1;let f,h=La;c==="Root"||c==="root"?h=n:c?h=i:e_(a)&&(h=void 0);const g=(0,fm.default)(a,(0,pt.default)({shouldForwardProp:h,label:f},y)),w=_=>typeof _=="function"&&_.__emotion_real!==_||(0,KC.isPlainObject)(_)?E=>ja(_,(0,pt.default)({},E,{theme:ga({theme:E.theme,defaultTheme:r,themeId:t})})):_,S=(_,...E)=>{let O=w(_);const j=E?E.map(w):[];s&&m&&j.push(G=>{const U=ga((0,pt.default)({},G,{defaultTheme:r,themeId:t}));if(!U.components||!U.components[s]||!U.components[s].styleOverrides)return null;const H=U.components[s].styleOverrides,pe={};return Object.entries(H).forEach(([ae,Be])=>{pe[ae]=ja(Be,(0,pt.default)({},G,{theme:U}))}),m(G,pe)}),s&&!x&&j.push(G=>{var U;const H=ga((0,pt.default)({},G,{defaultTheme:r,themeId:t})),pe=H==null||(U=H.components)==null||(U=U[s])==null?void 0:U.variants;return ja({variants:pe},(0,pt.default)({},G,{theme:H}))}),v||j.push(o);const T=j.length-E.length;if(Array.isArray(_)&&T>0){const G=new Array(T).fill("");O=[..._,...G],O.raw=[..._.raw,...G]}const I=g(O,...j);return a.muiName&&(I.muiName=a.muiName),I};return g.withConfig&&(S.withConfig=g.withConfig),S}}function o_(e){return e!=="ownerState"&&e!=="theme"&&e!=="sx"&&e!=="as"}const a_=e=>o_(e)&&e!=="classes";var l_=a_;const s_=VC({themeId:T1,defaultTheme:IC,rootShouldForwardProp:l_});var u_=s_;function yv(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(r=yv(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function c_(){for(var e,t,r=0,n="",i=arguments.length;r<i;r++)(e=arguments[r])&&(t=yv(e))&&(n&&(n+=" "),n+=t);return n}function d_(e){return G3(e)}const f_=iv("MuiBox",["root"]);var p_=f_;const h_=gv(),m_=M3({themeId:T1,defaultTheme:h_,defaultClassName:p_.root,generateClassName:tv.generate});var tn=m_;function g_(e){return nv("MuiSkeleton",e)}iv("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const v_=["animation","className","component","height","style","variant","width"];let bl=e=>e,pm,hm,mm,gm;const y_=e=>{const{classes:t,variant:r,animation:n,hasChildren:i,width:o,height:a}=e;return V3({root:["root",r,n,i&&"withChildren",i&&!o&&"fitContent",i&&!a&&"heightAuto"]},g_,t)},x_=mf(pm||(pm=bl`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),w_=mf(hm||(hm=bl`
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
`)),b_=u_("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[r.variant],r.animation!==!1&&t[r.animation],r.hasChildren&&t.withChildren,r.hasChildren&&!r.width&&t.fitContent,r.hasChildren&&!r.height&&t.heightAuto]}})(({theme:e,ownerState:t})=>{const r=jC(e.shape.borderRadius)||"px",n=zC(e.shape.borderRadius);return Q({display:"block",backgroundColor:e.vars?e.vars.palette.Skeleton.bg:H3(e.palette.text.primary,e.palette.mode==="light"?.11:.13),height:"1.2em"},t.variant==="text"&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${n}${r}/${Math.round(n/.6*10)/10}${r}`,"&:empty:before":{content:'"\\00a0"'}},t.variant==="circular"&&{borderRadius:"50%"},t.variant==="rounded"&&{borderRadius:(e.vars||e).shape.borderRadius},t.hasChildren&&{"& > *":{visibility:"hidden"}},t.hasChildren&&!t.width&&{maxWidth:"fit-content"},t.hasChildren&&!t.height&&{height:"auto"})},({ownerState:e})=>e.animation==="pulse"&&yl(mm||(mm=bl`
      animation: ${0} 2s ease-in-out 0.5s infinite;
    `),x_),({ownerState:e,theme:t})=>e.animation==="wave"&&yl(gm||(gm=bl`
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
    `),w_,(t.vars||t).palette.action.hover)),S_=k.exports.forwardRef(function(t,r){const n=d_({props:t,name:"MuiSkeleton"}),{animation:i="pulse",className:o,component:a="span",height:l,style:s,variant:c="text",width:d}=n,p=lr(n,v_),m=Q({},n,{animation:i,component:a,variant:c,hasChildren:Boolean(p.children)}),y=y_(m);return u(b_,Q({as:a,ref:r,className:c_(y.root,o),ownerState:m},p,{style:Q({width:d,height:l},s)}))});var er=S_;D.div`
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
`;const k_=({schemes:e,loading:t})=>u(Fe,{children:t?(()=>u(Fe,{children:[0,1,2,3,4,5].map(n=>b(tn,{sx:{display:"flex",flexDirection:"column",gap:1,width:"100%"},children:[u(er,{variant:"rounded",width:230,height:60}),b(tn,{sx:{pt:.5},children:[u(er,{}),u(er,{width:"60%"})]})]},n))}))():e.map((n,i)=>u(me,{className:"link",to:"",title:n.name,children:u(O1,{scheme:n})},i))});D.div`
`;const C_=({collections:e,loading:t})=>u(Fe,{children:t?(()=>u(Fe,{children:[0,1,2,3,4,5].map(n=>b(tn,{sx:{my:2},children:[u(er,{variant:"rounded",width:50,height:50}),b(tn,{sx:{pt:.5},children:[u(er,{}),u(er,{width:"60%"})]})]},n))}))():e.map((n,i)=>b(me,{to:"#",children:[u("div",{className:"",children:u("img",{src:`./public/images/collection/${n.image}`,alt:""})}),u("div",{className:"name",children:n.name})]},i))});D.div`
`;const xv=({schemes:e,loading:t})=>u(Fe,{children:t?(()=>u(Fe,{children:[0,1,2,3,4,5].map(n=>b(tn,{sx:{display:"flex",alignItems:"justify-center",marginBottom:"30px"},children:[u(tn,{sx:{width:60,height:60,marginRight:2},children:u(er,{variant:"rounded",width:60,height:60})}),b(tn,{sx:{pt:.5},width:"100%",children:[u(er,{}),u(er,{width:"60%"})]})]},n))}))():e.map((n,i)=>u(me,{className:"link",to:"",title:n.name,children:u(O1,{scheme:n})},i))}),__=async e=>{try{return await(await fetch(e)).json()}catch(t){return console.log(t)}},wv=()=>__("http://savingpulse.com/mutual-funds-explore?ajax=true"),E_=D.div`
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

      .info {
        margin-left: 0;
        .name {
          -webkit-line-clamp: 1;
        }
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
`,$_=()=>{const{collections:e}=et(c=>c.amcCollection),[t,r]=k.exports.useState(0),[n,i]=k.exports.useState(!0),[o,a]=k.exports.useState(!1),[l,s]=k.exports.useState([]);return k.exports.useEffect(()=>{(async()=>{try{const d=await wv();s(d)}catch(d){setError(d)}finally{i(!1)}})()},[]),u(E_,{children:b("div",{className:"container",children:[b("div",{className:"popular-fund-section division",children:[b("div",{className:"popular-funds",children:[u("h2",{children:"Popular Funds"}),u(me,{className:"link",to:"/all-mutual-funds",title:"All Mutual Funds",children:"All Mutual Funds"})]}),u("div",{className:"popular-items",children:u(k_,{schemes:l,loading:n})})]}),b("div",{className:"collection-section division",children:[u("h2",{children:"Collections"}),u("div",{className:"collection-items",children:u(C_,{collections:e,loading:o})})]}),b("div",{className:"all-mf-section division",children:[u("div",{className:"popular-funds",children:u("h2",{children:"All Mutual Funds"})}),u(P1,{activeFilter:t,onFilterChange:r}),u(xv,{schemes:l,loading:n})]})]})})},dr=(e,t)=>{var i;let r=Math.abs(e);r=(i=r==null?void 0:r.toFixed(0))==null?void 0:i.replace(/\B(?=(\d{3})+(?!\d))/g,",");let n=r.split(",");if(n.length>1){let o=n[n.length-1];r=n.slice(0,n.length-1).join("").replace(/\B(?=(\d{2})+(?!\d))/g,",")+","+o}return t==="simple"?{paisa:`\u20B9${r}`}:{paisa:e>0?`+ \u20B9${r}`:`- \u20B9${r}`,color:e>0?"#0add8c":"#f00"}},P_=D.div`
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
`,O_=()=>{et(r=>r.schemes),k.exports.useState(0);const e=6e3,t=-5e3;return u(P_,{children:b("div",{className:"container",children:[u("div",{className:"division section-heading",children:u("h2",{children:"Investments"})}),b("div",{className:"investment-container",children:[b("div",{className:"total-amt",children:[b("div",{className:"amt-section current",children:[b("div",{className:"amt-box",children:[u("div",{className:"title",children:"Current"}),b("div",{className:"amt",style:{color:dr(e,"simple").color},children:[dr(e,"simple").paisa," "]})]}),b("div",{className:"return",children:[u("div",{className:"title",children:"Total Returns"}),b("div",{className:"amt",style:{color:dr(e).color},children:[dr(e).paisa," "]})]})]}),b("div",{className:"amt-section invested",children:[b("div",{className:"amt-box",children:[u("div",{className:"title",children:"Invested"}),b("div",{className:"amt",style:{color:dr(t,"simple").color},children:[dr(t,"simple").paisa," "]})]}),b("div",{className:"return",children:[u("div",{className:"title",children:"1D Returns"}),b("div",{className:"amt",style:{color:dr(t).color},children:[dr(t).paisa," "]})]})]})]}),b("div",{className:"xirr-return",children:[b("div",{className:"",children:[u("span",{children:"XIRR"}),"17.23%"]}),u(me,{to:"",title:"aa",children:"Portfolio analysis"})]})]})]})})},N_=D.div`
`,T_=()=>u(N_,{children:u(uf,{tabs:[{name:"explore",title:"Explore",component:u($_,{})},{name:"dashboard",title:"Dashboard",component:u(O_,{})}]})}),R_=D.div`
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
`;var bv={};function M_(e){return e&&e.__esModule?e:{default:e}}var Cs=M_,Of={};function Rc(){return _s=Rc=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Rc.apply(this,arguments)}var _s=Rc;function L_(e,t){if(e==null)return{};var r={},n=Object.keys(e),i,o;for(o=0;o<n.length;o++)i=n[o],!(t.indexOf(i)>=0)&&(r[i]=e[i]);return r}var j_=L_,z_=j_;function A_(e,t){if(e==null)return{};var r=z_(e,t),n,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],!(t.indexOf(n)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,n)||(r[n]=e[n]))}return r}var Nf=A_;function I_(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var Tf=I_;function vm(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function D_(e,t,r){return t&&vm(e.prototype,t),r&&vm(e,r),e}var Rf=D_;function Gn(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Gn=function(r){return typeof r}:Gn=function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},Gn(e)}function za(e){return typeof Symbol=="function"&&Gn(Symbol.iterator)==="symbol"?Mc=za=function(r){return Gn(r)}:Mc=za=function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":Gn(r)},za(e)}var Mc=za;function F_(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var B_=F_,W_=Mc,U_=B_;function H_(e,t){return t&&(W_(t)==="object"||typeof t=="function")?t:U_(e)}var Mf=H_;function Lc(e){return Es=Lc=Object.setPrototypeOf?Object.getPrototypeOf:function(r){return r.__proto__||Object.getPrototypeOf(r)},Lc(e)}var Es=Lc;function jc(e,t){return Sv=jc=Object.setPrototypeOf||function(n,i){return n.__proto__=i,n},jc(e,t)}var Sv=jc,V_=Sv;function K_(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&V_(e,t)}var Lf=K_;function X_(e,t){if(e===t)return!0;if(!e||!t)return!1;var r=Object.keys(e),n=Object.keys(t),i=r.length;if(n.length!==i)return!1;for(var o=0;o<i;o++){var a=r[o];if(e[a]!==t[a]||!Object.prototype.hasOwnProperty.call(t,a))return!1}return!0}function G_(e,t){if(e===t)return!0;if(!e||!t)return!1;var r=e.length;if(t.length!==r)return!1;for(var n=0;n<r;n++)if(e[n]!==t[n])return!1;return!0}var Y_=Object.freeze(Object.defineProperty({__proto__:null,shallowEqualArrays:G_,shallowEqualObjects:X_},Symbol.toStringTag,{value:"Module"})),q_=ir(Y_),Go={},kv={exports:{}};(function(e){function t(r,n){if(!(r instanceof n))throw new TypeError("Cannot call a class as a function")}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports})(kv);var Cv={exports:{}},_v={exports:{}},Yo={exports:{}};(function(e){function t(r){return e.exports=t=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},e.exports.__esModule=!0,e.exports.default=e.exports,t(r)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports})(Yo);var Ev={exports:{}};(function(e){var t=Yo.exports.default;function r(n,i){if(t(n)!="object"||!n)return n;var o=n[Symbol.toPrimitive];if(o!==void 0){var a=o.call(n,i||"default");if(t(a)!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(i==="string"?String:Number)(n)}e.exports=r,e.exports.__esModule=!0,e.exports.default=e.exports})(Ev);(function(e){var t=Yo.exports.default,r=Ev.exports;function n(i){var o=r(i,"string");return t(o)=="symbol"?o:o+""}e.exports=n,e.exports.__esModule=!0,e.exports.default=e.exports})(_v);(function(e){var t=_v.exports;function r(i,o){for(var a=0;a<o.length;a++){var l=o[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(i,t(l.key),l)}}function n(i,o,a){return o&&r(i.prototype,o),a&&r(i,a),Object.defineProperty(i,"prototype",{writable:!1}),i}e.exports=n,e.exports.__esModule=!0,e.exports.default=e.exports})(Cv);var $v={exports:{}},Pv={exports:{}};(function(e){function t(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports})(Pv);(function(e){var t=Yo.exports.default,r=Pv.exports;function n(i,o){if(o&&(t(o)=="object"||typeof o=="function"))return o;if(o!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return r(i)}e.exports=n,e.exports.__esModule=!0,e.exports.default=e.exports})($v);var Ov={exports:{}};(function(e){function t(r){return e.exports=t=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},e.exports.__esModule=!0,e.exports.default=e.exports,t(r)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports})(Ov);var Nv={exports:{}},Tv={exports:{}};(function(e){function t(r,n){return e.exports=t=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,o){return i.__proto__=o,i},e.exports.__esModule=!0,e.exports.default=e.exports,t(r,n)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports})(Tv);(function(e){var t=Tv.exports;function r(n,i){if(typeof i!="function"&&i!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(i&&i.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),i&&t(n,i)}e.exports=r,e.exports.__esModule=!0,e.exports.default=e.exports})(Nv);var Rv={exports:{}};(function(e){var t=Pf.exports;function r(n,i){if(n==null)return{};var o,a,l=t(n,i);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);for(a=0;a<s.length;a++)o=s[a],i.includes(o)||{}.propertyIsEnumerable.call(n,o)&&(l[o]=n[o])}return l}e.exports=r,e.exports.__esModule=!0,e.exports.default=e.exports})(Rv);Object.defineProperty(Go,"__esModule",{value:!0});function Rt(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var Q_=Rt(kv.exports),J_=Rt(Cv.exports),Z_=Rt($v.exports),e9=Rt(Ov.exports),t9=Rt(Nv.exports),r9=Rt(Yo.exports),n9=Rt(Rv.exports),i9=Rt(hf.exports),o9=Rt(k.exports);Rt(di.exports);Rt(lf);function a9(e,t,r){return Object.defineProperty(e,t,r)}var l9=function(){var e=null;return function(){if(e!==null)return e;var t=!1;try{window.addEventListener("test",null,a9({},"passive",{get:function(){t=!0}}))}catch{}return e=t,t}()}(),s9={capture:!1,passive:!1};function Mv(e){return i9({},s9,e)}function Lv(e,t,r){var n=[e,t];return n.push(l9?r:r.capture),n}function ym(e,t,r,n){e.addEventListener.apply(e,Lv(t,r,n))}function xm(e,t,r,n){e.removeEventListener.apply(e,Lv(t,r,n))}function u9(e,t){e.children,e.target;var r=n9(e,["children","target"]);Object.keys(r).forEach(function(n){if(n.substring(0,2)==="on"){var i=r[n],o=r9(i),a=o==="object",l=o==="function";if(!(!a&&!l)){var s=n.substr(-7).toLowerCase()==="capture",c=n.substring(2).toLowerCase();c=s?c.substring(0,c.length-7):c,a?t(c,i.handler,i.options):t(c,i,Mv({capture:s}))}}})}function c9(e,t){return{handler:e,options:Mv(t)}}var jv=function(e){t9(t,e);function t(){return Q_(this,t),Z_(this,e9(t).apply(this,arguments))}return J_(t,[{key:"componentDidMount",value:function(){this.applyListeners(ym)}},{key:"componentDidUpdate",value:function(n){this.applyListeners(xm,n),this.applyListeners(ym)}},{key:"componentWillUnmount",value:function(){this.applyListeners(xm)}},{key:"applyListeners",value:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.props,o=i.target;if(o){var a=o;typeof o=="string"&&(a=window[o]),u9(i,n.bind(null,a))}}},{key:"render",value:function(){return this.props.children||null}}]),t}(o9.PureComponent);jv.propTypes={};Go.withOptions=c9;Go.default=jv;var Kt=Cs;Object.defineProperty(Of,"__esModule",{value:!0});Of.default=w9;var wm=Kt(_s),d9=Kt(Nf),f9=Kt(Tf),p9=Kt(Rf),h9=Kt(Mf),m9=Kt(Es),g9=Kt(Lf),Ri=Kt(k.exports);Kt(di.exports);var v9=q_,y9=Kt(Go),x9=Bo;function w9(e){var t=function(r){(0,g9.default)(n,r);function n(i){var o;return(0,f9.default)(this,n),o=(0,h9.default)(this,(0,m9.default)(n).call(this,i)),o.timer=null,o.state={},o.handleInterval=function(){var a=o.props,l=a.children,s=a.direction,c=a.onChangeIndex,d=a.slideCount,p=o.state.index,m=p;s==="incremental"?m+=1:m-=1,(d||l)&&(m=(0,x9.mod)(m,d||Ri.default.Children.count(l))),o.props.index===void 0&&o.setState({index:m}),c&&c(m,p)},o.handleChangeIndex=function(a,l,s){o.props.index===void 0&&o.setState({index:a}),o.props.onChangeIndex&&o.props.onChangeIndex(a,l,s)},o.handleSwitching=function(a,l){o.timer?(clearInterval(o.timer),o.timer=null):l==="end"&&o.startInterval(),o.props.onSwitching&&o.props.onSwitching(a,l)},o.handleVisibilityChange=function(a){a.target.hidden?clearInterval(o.timer):o.startInterval()},o.state.index=i.index||0,o}return(0,p9.default)(n,[{key:"componentDidMount",value:function(){this.startInterval()}},{key:"UNSAFE_componentWillReceiveProps",value:function(o){var a=o.index;typeof a=="number"&&a!==this.props.index&&this.setState({index:a})}},{key:"componentDidUpdate",value:function(o){var a=!(0,v9.shallowEqualObjects)({index:o.index,interval:o.interval,autoplay:o.autoplay},{index:this.props.index,interval:this.props.interval,autoplay:this.props.autoplay});a&&this.startInterval()}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}},{key:"startInterval",value:function(){var o=this.props,a=o.autoplay,l=o.interval;clearInterval(this.timer),a&&(this.timer=setInterval(this.handleInterval,l))}},{key:"render",value:function(){var o=this.props,a=o.autoplay;o.direction,o.index,o.interval;var l=o.onChangeIndex,s=(0,d9.default)(o,["autoplay","direction","index","interval","onChangeIndex"]),c=this.state.index;return a?Ri.default.createElement(y9.default,{target:"document",onVisibilityChange:this.handleVisibilityChange},Ri.default.createElement(e,(0,wm.default)({index:c,onChangeIndex:this.handleChangeIndex,onSwitching:this.handleSwitching},s))):Ri.default.createElement(e,(0,wm.default)({index:c,onChangeIndex:l},s))}}]),n}(Ri.default.Component);return t.propTypes={},t.defaultProps={autoplay:!0,direction:"incremental",interval:3e3},t}var jf={},zc={exports:{}};(function(e,t){function r(s){if(s&&typeof s=="object"){var c=s.which||s.keyCode||s.charCode;c&&(s=c)}if(typeof s=="number")return a[s];var d=String(s),p=n[d.toLowerCase()];if(p)return p;var p=i[d.toLowerCase()];if(p)return p;if(d.length===1)return d.charCodeAt(0)}r.isEventKey=function(c,d){if(c&&typeof c=="object"){var p=c.which||c.keyCode||c.charCode;if(p==null)return!1;if(typeof d=="string"){var m=n[d.toLowerCase()];if(m)return m===p;var m=i[d.toLowerCase()];if(m)return m===p}else if(typeof d=="number")return d===p;return!1}},t=e.exports=r;var n=t.code=t.codes={backspace:8,tab:9,enter:13,shift:16,ctrl:17,alt:18,"pause/break":19,"caps lock":20,esc:27,space:32,"page up":33,"page down":34,end:35,home:36,left:37,up:38,right:39,down:40,insert:45,delete:46,command:91,"left command":91,"right command":93,"numpad *":106,"numpad +":107,"numpad -":109,"numpad .":110,"numpad /":111,"num lock":144,"scroll lock":145,"my computer":182,"my calculator":183,";":186,"=":187,",":188,"-":189,".":190,"/":191,"`":192,"[":219,"\\":220,"]":221,"'":222},i=t.aliases={windows:91,"\u21E7":16,"\u2325":18,"\u2303":17,"\u2318":91,ctl:17,control:17,option:18,pause:19,break:19,caps:20,return:13,escape:27,spc:32,spacebar:32,pgup:33,pgdn:34,ins:45,del:46,cmd:91};/*!
 * Programatically add the following
 */for(o=97;o<123;o++)n[String.fromCharCode(o)]=o-32;for(var o=48;o<58;o++)n[o-48]=o;for(o=1;o<13;o++)n["f"+o]=o+111;for(o=0;o<10;o++)n["numpad "+o]=o+96;var a=t.names=t.title={};for(o in n)a[n[o]]=o;for(var l in i)n[l]=i[l]})(zc,zc.exports);var Mt=Cs;Object.defineProperty(jf,"__esModule",{value:!0});jf.default=T9;var b9=Mt(_s),S9=Mt(Nf),k9=Mt(Tf),C9=Mt(Rf),_9=Mt(Mf),E9=Mt(Es),$9=Mt(Lf),va=Mt(k.exports);Mt(di.exports);var P9=Mt(zc.exports),O9=Mt(Go),N9=Bo;function T9(e){var t=function(r){(0,$9.default)(n,r);function n(){var i,o;(0,k9.default)(this,n);for(var a=arguments.length,l=new Array(a),s=0;s<a;s++)l[s]=arguments[s];return o=(0,_9.default)(this,(i=(0,E9.default)(n)).call.apply(i,[this].concat(l))),o.state={},o.handleKeyDown=function(c){var d,p=o.props,m=p.axis,y=m===void 0?"x":m,x=p.children,v=p.onChangeIndex,f=p.slideCount;switch((0,P9.default)(c)){case"page down":case"down":y==="y"?d="decrease":y==="y-reverse"&&(d="increase");break;case"left":y==="x"?d="decrease":y==="x-reverse"&&(d="increase");break;case"page up":case"up":y==="y"?d="increase":y==="y-reverse"&&(d="decrease");break;case"right":y==="x"?d="increase":y==="x-reverse"&&(d="decrease");break}if(d){var h=o.state.index,g=h;d==="increase"?g+=1:g-=1,(f||x)&&(g=(0,N9.mod)(g,f||va.default.Children.count(x))),o.props.index===void 0&&o.setState({index:g}),v&&v(g,h)}},o.handleChangeIndex=function(c,d,p){o.props.index===void 0&&o.setState({index:c}),o.props.onChangeIndex&&o.props.onChangeIndex(c,d,p)},o}return(0,C9.default)(n,[{key:"UNSAFE_componentWillMount",value:function(){this.setState({index:this.props.index||0})}},{key:"UNSAFE_componentWillReceiveProps",value:function(o){var a=o.index;typeof a=="number"&&a!==this.props.index&&this.setState({index:a})}},{key:"render",value:function(){var o=this.props;o.index,o.onChangeIndex;var a=(0,S9.default)(o,["index","onChangeIndex"]),l=this.state.index;return va.default.createElement(O9.default,{target:"window",onKeyDown:this.handleKeyDown},va.default.createElement(e,(0,b9.default)({index:l,onChangeIndex:this.handleChangeIndex},a)))}}]),n}(va.default.Component);return t.propTypes={},t}var zf={};function R9(e){if(e&&e.__esModule)return e;var t={};if(e!=null){for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}}return t.default=e,t}var M9=R9,L9=M9,Vr=Cs;Object.defineProperty(zf,"__esModule",{value:!0});zf.default=U9;var j9=Vr(_s),z9=Vr(Nf),A9=Vr(Tf),I9=Vr(Rf),D9=Vr(Mf),F9=Vr(Es),B9=Vr(Lf),bm=L9(k.exports);Vr(di.exports);var W9=Bo;function U9(e){var t=function(r){(0,B9.default)(n,r);function n(i){var o;return(0,A9.default)(this,n),o=(0,D9.default)(this,(0,F9.default)(n).call(this,i)),o.timer=null,o.state={},o.handleChangeIndex=function(a,l,s){var c=o.props,d=c.slideCount,p=c.onChangeIndex,m=a-l,y=o.state.index+m;d&&(y=(0,W9.mod)(y,d)),o.props.index===void 0&&o.setIndex(y,a,m),p&&p(y,o.state.index,s)},o.handleTransitionEnd=function(){o.timer=setTimeout(function(){o.setWindow()},0),o.props.onTransitionEnd&&o.props.onTransitionEnd()},o.state.index=i.index||0,o}return(0,I9.default)(n,[{key:"UNSAFE_componentWillMount",value:function(){this.setWindow(this.state.index)}},{key:"UNSAFE_componentWillReceiveProps",value:function(o){var a=o.index;if(typeof a=="number"&&a!==this.props.index){var l=a-this.props.index;this.setIndex(a,this.state.indexContainer+l,l)}}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}},{key:"setIndex",value:function(o,a,l){var s={index:o,indexContainer:a,indexStart:this.state.indexStart,indexStop:this.state.indexStop};l>0&&(!this.props.slideCount||s.indexStop<this.props.slideCount-1)&&(s.indexStop+=1),o>s.indexStop&&(s.indexStop=o);var c=s.indexStart-o;c>0&&(s.indexContainer+=c,s.indexStart-=c),this.setState(s)}},{key:"setWindow",value:function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.state.index,a=this.props.slideCount,l=this.props.overscanSlideBefore,s=this.props.overscanSlideAfter;a&&(l>o&&(l=o),s+o>a-1&&(s=a-o-1)),this.setState({indexContainer:l,indexStart:o-l,indexStop:o+s})}},{key:"render",value:function(){var o=this.props;o.children,o.index,o.onChangeIndex,o.onTransitionEnd,o.overscanSlideAfter,o.overscanSlideBefore,o.slideCount;for(var a=o.slideRenderer,l=(0,z9.default)(o,["children","index","onChangeIndex","onTransitionEnd","overscanSlideAfter","overscanSlideBefore","slideCount","slideRenderer"]),s=this.state,c=s.indexContainer,d=s.indexStart,p=s.indexStop,m=[],y=d;y<=p;y+=1)m.push(a({index:y,key:y}));return bm.default.createElement(e,(0,j9.default)({index:c,onChangeIndex:this.handleChangeIndex,onTransitionEnd:this.handleTransitionEnd},l),m)}}]),n}(bm.PureComponent);return t.propTypes={},t.defaultProps={overscanSlideAfter:2,overscanSlideBefore:3},t}(function(e){var t=Cs;Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"autoPlay",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(e,"bindKeyboard",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(e,"virtualize",{enumerable:!0,get:function(){return i.default}});var r=t(Of),n=t(jf),i=t(zf)})(bv);const H9=D.div`
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
`,V9=({count:e,index:t})=>u(H9,{children:Array.from({length:e}).map((r,n)=>u("div",{className:`dot ${t===n?"active-dot":""}`},n))}),K9=bv.autoPlay($1),X9=D.div`
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
`,G9=()=>{const[e,t]=k.exports.useState(0),r=n=>{t(n)};return k.exports.useEffect(()=>{const n=setInterval(()=>{t(i=>(i+1)%3)},9e3);return()=>clearInterval(n)},[]),b(X9,{children:[b(K9,{index:e,onChangeIndex:r,children:[b("div",{className:"slide",children:[u("img",{src:"./images/logo/savingpulse-logos_transparent.png",alt:""}),u("h2",{children:"Simple & free investing"}),u("p",{children:"Make investment easy in mutual funds"})]}),b("div",{className:"slide",children:[u("img",{src:"./images/logo/savingpulse-logos_transparent.png",alt:""}),u("h2",{children:"Direct mutual funds"}),u("p",{children:"Earn up to 2% extra!"})]}),b("div",{className:"slide",children:[u("img",{src:"./images/logo/savingpulse-logos_transparent.png",alt:""}),u("h2",{children:"Start in 2 minutes"}),u("p",{children:"100% peperless investing - SIP & One-time"})]})]}),u(V9,{count:3,index:e})]})},zv=D.div`
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
`,Sm=Qe`var(--white, #fff)`,Y9=Qe`var(--primaryDisableCTAFill, #767676)`,q9=Qe`var(--secondaryCTABorder, #999)`,Q9=Qe`var(--primaryCTAFill, #9147ff)`,gu=Qe`var(--primaryCTAFillRGB, 145, 71 ,255)`,J9=Qe`var(--primaryCTABorder, #c5d1df)`,Z9=Qe`var(--primaryErrorCTAFill, #d9534f)`,vu=Qe`var(--primaryErrorCTAFillRGB, 229, 28, 38)`,eE=Qe`var(--primaryErrorCTABorder, #d43f3a)`,tE=Qe`var(--secondaryCTAFill, #333)`,yu=Qe`var(--secondaryCTAFillRGB, 51, 51, 51)`,rE=Qe`var(--primaryCTABorder, #979797)`,nE=Qe`#ee8950`,iE=Qe`#ec7939`,Sl=D.div`
  .sp-button {
    min-height: 3.5rem;
    cursor: pointer;
    color: ${Sm};
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
    outline-color: ${Sm};
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
    background-color: ${Y9};
    border: 1px solid ${q9};
  }
  .sp-button.transparent {
    background-color: transparent;
  }
  .sp-button.warning {
    background-color: ${nE}
    border-color: ${iE};
  }

  .sp-button.primary {
    background-color: ${Q9};
    border-color: ${J9};
  }
  .sp-button.primary:hover {
    background-color: rgba(${gu}, 0.9);
  }
  .sp-button.primary:focus-visible {
    background-color: rgba(${gu}, 0.8);
  }
  .sp-button.primary:active {
    background-color: rgba(${gu}, 0.7);
  }

  .sp-button.danger {
    background-color: ${Z9};
    border-color: ${eE};
  }
  .sp-button.danger:hover {
    background-color: rgba(${vu}, 0.9);
  }
  .sp-button.danger:focus-visible {
    background-color: rgba(${vu}, 0.8);
  }
  .sp-button.danger:active {
    background-color: rgba(${vu}, 0.7);
  }

  .sp-button.dark {
    background-color: ${tE};
    border-color: ${rE};
  }
  .sp-button.dark:hover {
    background-color: rgba(${yu}, 0.9);
  }
  .sp-button.dark:focus-visible {
    background-color: rgba(${yu}, 0.8);
  }
  .sp-button.dark:active {
    background-color: rgba(${yu}, 0.7);
  }
`,oE=({type:e=""})=>{et(i=>i.offers);const[t,r]=k.exports.useState(!1);let n=mn();return u(zv,{children:b("div",{className:`login-with ${t?"hide":""}`,children:[b("div",{className:"content",children:[u("h2",{children:"Enter 6 digit OTP we sent"}),u("p",{children:"We will send you a confirmation code."}),u("label",{children:u("input",{type:"number",pattern:"[0-9]",placeholder:"######"})})]}),b("div",{className:"controls",children:[u("div",{className:"next",children:u(Sl,{children:u("button",{className:"sp-button primary",onClick:()=>{document.cookie="isLoggedIn="+!0,n("/mutual-funds")},children:"Submit"})})}),u("div",{className:"numbers",children:b("ul",{children:[u("li",{children:"1"}),u("li",{children:"2"}),u("li",{children:"3"}),u("li",{children:"4"}),u("li",{children:"5"}),u("li",{children:"6"}),u("li",{children:"7"}),u("li",{children:"8"}),u("li",{children:"9"}),u("li",{children:"0"}),u("li",{children:u(t1,{})})]})})]})]})})},aE=()=>{const[e,t]=k.exports.useState(!1),[r,n]=k.exports.useState(!1);return b(zv,{children:[b("div",{className:`login-with ${e?"hide":""}`,children:[b("div",{className:"content",children:[u("h2",{children:"Enter your mobile number"}),u("p",{children:"We will send you a confirmation code."}),b("label",{children:[u("span",{children:"+91"})," ",u("input",{type:"number",pattern:"[0-9]",maxLength:"10",placeholder:"8947973174"})]})]}),b("div",{className:"controls",children:[u("div",{className:"next",children:u(Sl,{children:u("button",{className:"sp-button primary",onClick:()=>n(!0),children:"Next"})})}),u("div",{className:"numbers",children:b("ul",{children:[u("li",{children:"1"}),u("li",{children:"2"}),u("li",{children:"3"}),u("li",{children:"4"}),u("li",{children:"5"}),u("li",{children:"6"}),u("li",{children:"7"}),u("li",{children:"8"}),u("li",{children:"9"}),u("li",{children:"0"}),u("li",{children:u(t1,{})})]})})]})]}),r?u(oE,{}):null]})},lE=D.div`
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
`,sE=({type:e=""})=>{const{offers:t}=et(r=>r.offers);return u(lE,{children:t.map((r,n)=>{if(r.type===e)return b("div",{className:`offer-box offer-${r.id}`,children:[b("div",{className:"left-side",children:[u("div",{className:"picture",children:u("img",{src:r.image,alt:""})}),u("h2",{className:"name",children:r.name})]}),u("div",{className:"right-side",children:b("ul",{className:"action-buttons",children:[u("li",{children:"View Details"}),u("li",{children:"Open Account"})]})})]},r.id)})})},km=()=>{const[e,t]=k.exports.useState(!1),[r,n]=k.exports.useState(!1),i=()=>{t(!1),n(!1)};let o=mn();return document.cookie.split(";").filter(l=>l.indexOf("isLoggedIn=true")>=0).length!==0&&o("/mutual-funds"),u(Fe,{children:b(R_,{children:[b("div",{className:`login-mobile ${e?"hide1":""}`,children:[u("div",{className:"slider",children:u(G9,{})}),b("div",{className:"login-container",children:[u(Sl,{children:u("div",{className:"login-otp sp-button primary",onClick:()=>t(!0),children:"Sign in with OTP"})}),u(Sl,{children:u("div",{className:"login-google sp-button primary",onClick:()=>n(!0),children:"Sign in with google"})}),b("div",{className:"no-account",children:["Don't have an account? ",u(me,{to:"/signup",children:"Signup"})]})]})]}),e&&b("div",{children:[u("div",{className:"header",onClick:i,children:u(Sh,{})}),u(aE,{})]}),r&&b("div",{children:[u("div",{className:"header",onClick:i,children:u(Sh,{})}),u(sE,{})]})]})})},uE=D.div`
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
`,cE=()=>{const[e,t]=k.exports.useState(0),[r,n]=k.exports.useState(!0),[i,o]=k.exports.useState([]);return k.exports.useEffect(()=>{(async()=>{try{const l=await wv();o(l)}catch(l){setError(l)}finally{n(!1)}})()},[]),u(uE,{children:b("div",{className:"container division",children:[u(P1,{activeFilter:e,onFilterChange:t}),u(xv,{schemes:i,loading:r})]})})},dE=()=>{const{darkStatus:e,sideBarStatus:t}=et(p=>p.site),[r,n]=k.exports.useState(window.innerWidth),[i,o]=k.exports.useState(!0),a=mn(),l=Nt(),s=document.cookie.split(";").filter(p=>p.indexOf("isLoggedIn=true")>=0);console.log(s.length);let c=u(T_,{});s.length===0&&(c=u(km,{})),k.exports.useEffect(()=>{s.length===0&&a("/login");const p=()=>n(window.innerWidth);return window.addEventListener("resize",p),()=>window.removeEventListener("resize",p)},[r]),k.exports.useEffect(()=>{const p=setTimeout(()=>{},3e3);return()=>clearTimeout(p)},[]);const d=()=>(console.log(l.pathname),l.pathname==="/login"||s.length===0?(o(!1),null):u(QS,{mySize:r}));return k.exports.useEffect(()=>{const p=()=>{l.pathname==="/"&&window.confirm("Do you want to close the app?")&&window.close()};return window.addEventListener("popstate",p),()=>{window.removeEventListener("popstate",p)}},[l.pathname]),b(qw,{theme:e?tb:eb,children:[u(Zw,{}),b("div",{className:"app",children:[u(d,{}),u("div",{className:`${i?"main":""} ${t&&r>1199?"sidebar-open":""}`,children:b(j2,{children:[u(he,{path:"*",element:u(M2,{to:"/",replace:!0})}),u(he,{path:"/all-mutual-funds",element:u(cE,{})}),u(he,{path:"/",element:c}),u(he,{path:"/login",element:u(km,{})}),b(he,{path:"/mutual-funds/",element:c,children:[u(he,{path:"dashboard",element:u(pu,{})}),u(he,{path:"SIP",element:u(pu,{})}),u(he,{path:"Watchlist",element:u(pu,{})})]}),b(he,{path:"/following/",element:u(Z5,{}),children:[u(he,{index:!0,element:u(u4,{})}),u(he,{path:"live",element:u(c4,{})}),u(he,{path:"videos",element:u(d4,{})}),u(he,{path:"categories",element:u(f4,{})})]}),b(he,{path:"/ipo/",element:u(yn,{}),children:[u(he,{index:!0,path:"all",element:u(yn,{})}),u(he,{path:"mainline",element:u(yn,{})}),u(he,{path:"sme",element:u(yn,{})}),u(he,{path:"listed",element:u(yn,{})}),u(he,{path:"closed",element:u(yn,{})})]}),b(he,{path:"/offers/",element:u(m4,{}),children:[u(he,{index:!0,path:"brokers",element:u(Kh,{type:"stock"})}),u(he,{path:"advisors",element:u(Kh,{type:"advisor"})})]})]})})]})]})},fE=()=>{const{pathname:e}=Nt();return k.exports.useEffect(()=>{window.scrollTo(0,0)},[e]),null},pE=gn({name:"user",initialState:{users:[{username:"CosmoKramer",title:"Rapid Chess Championship!",game:"Chess",tag:"Chatting",pp:"https://i.pravatar.cc/",liveScreen:"./images/games/game-chees.jpg",viewers:"17.1K"},{username:"Soprano",title:"Im back",game:"Dota 2",tag:"Turkish",pp:"https://i.pravatar.cc/",liveScreen:"./images/games/game-dota.jpg",viewers:"395"},{username:"Seinfeld",title:"Reduce Ping & Avoid Lags",game:"PUBG",tag:"English",pp:"https://i.pravatar.cc/",liveScreen:"./images/games/game-pubg.jpg",viewers:"5.4K"},{username:"Darlene",title:"FPS soon? OMEGALUL",game:"Counter Strike",tag:"English",pp:"https://i.pravatar.cc/",liveScreen:"./images/games/game-cs.jpg",viewers:"117"},{username:"Cersei",title:"Live Bitcoin Trading Infos 24/7",game:"Crypto",tag:"Chatting",pp:"https://i.pravatar.cc/",liveScreen:"./images/games/game-crypto.jpg",viewers:"88"},{username:"Jacob",title:"LVL 70 - Tracksuit Grind",game:"Escape From Tarkov",tag:"Turkish",pp:"https://i.pravatar.cc/",liveScreen:"./images/games/game-eft.jpg",viewers:"733"},{username:"Skyler",title:"Tourney Run Kollo",game:"Mortal Kombat",tag:"English",pp:"https://i.pravatar.cc/",liveScreen:"./images/games/game-mortal.jpg",viewers:"231"},{username:"Schillinger",title:"Day 12 of the Game of Year ?",game:"Elder Ring",tag:"English",pp:"https://i.pravatar.cc/",liveScreen:"./images/games/game-elder.jpg",viewers:"3.7K"}]}});var hE=pE.reducer;const mE=gn({name:"category",initialState:{games:[{name:"Dota 2",image:"./images/categories/game1.jpg",viewer:"63.3k"},{name:"Chess",image:"./images/categories/game2.jpg",viewer:"23.7k"},{name:"PUBG: BATTLEGROUNDS",image:"./images/categories/game3.jpg",viewer:"34.3k"},{name:"Just Chatting",image:"./images/categories/game4.jpg",viewer:"580k"},{name:"Grand Theft Auto V",image:"./images/categories/game5.jpg",viewer:"144k"},{name:"Elder Ring",image:"./images/categories/game6.jpg",viewer:"88k"},{name:"Apex Legends",image:"./images/categories/game7.jpg",viewer:"112.6k"},{name:"Call of Duty: Wardzone",image:"./images/categories/game8.jpg",viewer:"39k"},{name:"Escape from Tarkov",image:"./images/categories/game9.jpg",viewer:"20k"},{name:"FIFA 22",image:"./images/categories/game10.jpg",viewer:"42.2k"},{name:"Fortnite",image:"./images/categories/game11.jpg",viewer:"102k"},{name:"Age of Empires",image:"./images/categories/game12.jpg",viewer:"5.4k"}]}});var gE=mE.reducer;let Ac;Ac===void 0&&(Ac=[{Scheme_Name:"Aditya Birla Sun Life PSU Equity Fund",amc_logo:"absl.png",Scheme_Type:"Equity",Scheme_Type:"Big",Scheme_Code:"",risk:"High",rating:5,return:[47.01,88,23]},{Scheme_Name:"Motilal Oswal Midcap Fund",amc_logo:"motilal-oswal.png",Scheme_Type:"Equity",Scheme_Type:"Flexi Cap",Scheme_Code:"",risk:"Very High",rating:4,return:[47.01,88]},{Scheme_Name:"Nippon India Small Cap Fund",amc_logo:"nippon.png",Scheme_Type:"Equity",Scheme_Type:"Small",Scheme_Code:"",risk:"Low",rating:5,return:[47.01,88,23]},{Scheme_Name:"Motilal Oswal Midcap Fund",amc_logo:"motilal-oswal.png",Scheme_Type:"Equity",Scheme_Type:"Flexi Cap",Scheme_Code:"",risk:"Very High",rating:4,return:[47.01,88]},{Scheme_Name:"Nippon India Small Cap Fund",amc_logo:"nippon.png",Scheme_Type:"Equity",Scheme_Type:"Small",Scheme_Code:"",risk:"Low",rating:5,return:[47.01,88,23]},{Scheme_Name:"Motilal Oswal Midcap Fund",amc_logo:"motilal-oswal.png",Scheme_Type:"Equity",Scheme_Type:"Flexi Cap",Scheme_Code:"",risk:"Very High",rating:4,return:[47.01,88]},{Scheme_Name:"Nippon India Small Cap Fund",amc_logo:"nippon.png",Scheme_Type:"Equity",Scheme_Type:"Small",Scheme_Code:"",risk:"Low",rating:5,return:[47.01,88,23]}]);const vE=gn({name:"schemes",initialState:{schemes:Ac}});var yE=vE.reducer;const xE=gn({name:"offers",initialState:{offers:[{id:1,name:"Angel Broking",image:"./images/offers/angel-one.png",category:"broker",type:"advisor",href:"/angel-broking"},{id:2,name:"Zerodha",image:"./images/offers/zerodha.png",category:"broker",type:"stock",href:"#"},{id:3,name:"Upstox",image:"./images/offers/upstox.png",category:"broker",type:"advisor",href:"#"},{id:5,name:"Dhan",image:"./images/offers/dhan.png",category:"broker",type:"advisor",href:"#"},{id:6,name:"5 Paisa",image:"./images/offers/5-paisa.png",category:"broker",type:"stock",href:"#"},{id:7,name:"ICICI direct",image:"./images/offers/icici-direct.png",category:"broker",type:"advisor",href:"#"},{id:8,name:"Kotak Securities",image:"./images/offers/kotak-security.png",category:"broker",type:"stock",href:"#"},{id:1,name:"Angel Broking",image:"./images/offers/angel-one.png",category:"broker",type:"advisor",href:"/angel-broking"},{id:2,name:"Zerodha",image:"./images/offers/zerodha.png",category:"broker",type:"stock",href:"#"},{id:3,name:"Upstox",image:"./images/offers/upstox.png",category:"broker",type:"advisor",href:"#"},{id:5,name:"Dhan",image:"./images/offers/dhan.png",category:"broker",type:"advisor",href:"#"},{id:6,name:"5 Paisa",image:"./images/offers/5-paisa.png",category:"broker",type:"stock",href:"#"},{id:7,name:"ICICI direct",image:"./images/offers/icici-direct.png",category:"broker",type:"advisor",href:"#"},{id:8,name:"Kotak Securities",image:"./images/offers/kotak-security.png",category:"broker",type:"stock",href:"#"}]}});var wE=xE.reducer;const bE=gn({name:"ipos",initialState:{ipos:[{name:"RNFI Services Limited",image:"./images/ipo/RNFI_Services_logo.jpg",exchange:"NSE",type:"sme",href:"/angel-broking",date:{start:"Jul 22, 2024",end:"Jul 22, 2024",list:"Jul 22, 2024"},price:{offer:"98-105",expectedPremium:"84-90 (80%)"},lotSize:"1200",subscriptions:"221.56"},{name:"SAR Televenture Limited FPO",image:"./images/ipo/SAR_Televentures_logo.png",exchange:"NSE",type:"mainline",href:"/angel-broking",date:{start:"Jul 22, 2024",end:"Jul 22, 2024",list:"Jul 22, 2024"},price:{offer:"200-210",expectedPremium:"7-8 (3.33%)"},lotSize:"500",subscriptions:"7.49"},{name:"V.L.Infraprojects Limited",image:"./images/ipo/Vraj_Iron_And_Steel_logo.png",exchange:"NSE",type:"sme",href:"/angel-broking",date:{start:"Jul 23, 2024",end:"Jul 25, 2024",list:"Jul 22, 2024"},price:{offer:"39-42",expectedPremium:"60-62 (142.86%)"},lotSize:"3000",subscriptions:"633.71"},{name:"VVIP Infratech Limited",image:"./images/ipo/uttsav_cz_gold_logo.jpeg",exchange:"NSE",type:"mainline",href:"/angel-broking",date:{start:"Jul 23, 2024",end:"Jul 25, 2024",list:"Jul 27, 2024"},price:{offer:"91-93",expectedPremium:"115-122 (123.66%)"},lotSize:"1200",subscriptions:"236.92"},{name:"Chetana Education Limited",image:"./images/ipo/Cheviot-company-logo.jpg",exchange:"NSE",type:"mainline",href:"/angel-broking",date:{start:"Jul 23, 2024",end:"Jul 25, 2024",list:"Jul 27, 2024"},price:{offer:"80-85",expectedPremium:"40-43 (47.06%)"},lotSize:"1600",subscriptions:"196.57"},{name:"Manglam Infra and Engineering Limited",image:"./images/ipo/Manglam_Infra_Logo.png",exchange:"NSE",type:"sme",href:"/angel-broking",date:{start:"Jul 23, 2024",end:"Jul 25, 2024",list:"Jul 27, 2024"},price:{offer:"53-56",expectedPremium:"47-50 (83.93%)"},lotSize:"2000",subscriptions:"394.59"},{name:"Aprameya Engineering Limited",image:"./images/ipo/Aprameya_Engineering_logo.jpg",exchange:"NSE",type:"mainline",href:"/angel-broking",date:{start:"Jul 25, 2024",end:"Jul 29, 2024",list:"Jul 27, 2024"},price:{offer:"56-58",expectedPremium:"25-30 (43.1%)"},lotSize:"2000",subscriptions:"5.92"},{name:"Trom Industries Limited",image:"./images/ipo/Trom-Industries-logo.jpg",exchange:"NSE",type:"sme",href:"/angel-broking",date:{start:"Jul 25, 2024",end:"Jul 29, 2024",list:"Jul 27, 2024"},price:{offer:"110-115",expectedPremium:"135-145 (117.39%)"},lotSize:"1200",subscriptions:"34.84"},{name:"Clinitech Laboratory Limited",image:"./images/ipo/Clinitech_lab_logo.jpg",exchange:"BSE",type:"sme",href:"/angel-broking",date:{start:"Jul 25, 2024",end:"Jul 29, 2024",list:"Jul 27, 2024"},price:{offer:"96",expectedPremium:"135-145 (117.39%)"},lotSize:"1200",subscriptions:"6.09 times"}]}});var SE=bE.reducer;const kE=gn({name:"collections",initialState:{collections:[{name:"High Return",image:"high-returns.svg"},{name:"SIP with 100",image:"sip-with-100.svg"},{name:"Tax Saving",image:"tax-saving.svg"},{name:"Large Cap",image:"large-cap.svg"},{name:"Mid Cap",image:"mid-cap.svg"},{name:"Small Cap",image:"small-cap.svg"}]}});var CE=kE.reducer,_E=kS({reducer:{site:LS,user:hE,category:gE,schemes:yE,offers:wE,ipos:SE,amcCollection:CE}});mg.render(u(Ge.StrictMode,{children:u(hb,{store:_E,children:b(H2,{children:[u(fE,{}),u(dE,{})]})})}),document.getElementById("root"));
