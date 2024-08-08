function $m(e,t){return t.forEach(function(r){r&&typeof r!="string"&&!Array.isArray(r)&&Object.keys(r).forEach(function(n){if(n!=="default"&&!(n in e)){var i=Object.getOwnPropertyDescriptor(r,n);Object.defineProperty(e,n,i.get?i:{enumerable:!0,get:function(){return r[n]}})}})}),Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}const Av=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=r(i);fetch(i.href,o)}};Av();function Iv(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function ir(e){if(e.__esModule)return e;var t=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(e).forEach(function(r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})}),t}var k={exports:{}},K={};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var Ff=Object.getOwnPropertySymbols,Dv=Object.prototype.hasOwnProperty,Fv=Object.prototype.propertyIsEnumerable;function Bv(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function Uv(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de",Object.getOwnPropertyNames(e)[0]==="5")return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;var n=Object.getOwnPropertyNames(t).map(function(o){return t[o]});if(n.join("")!=="0123456789")return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(o){i[o]=o}),Object.keys(Object.assign({},i)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var Pm=Uv()?Object.assign:function(e,t){for(var r,n=Bv(e),i,o=1;o<arguments.length;o++){r=Object(arguments[o]);for(var a in r)Dv.call(r,a)&&(n[a]=r[a]);if(Ff){i=Ff(r);for(var l=0;l<i.length;l++)Fv.call(r,i[l])&&(n[i[l]]=r[i[l]])}}return n};/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dc=Pm,ii=60103,Om=60106;K.Fragment=60107;K.StrictMode=60108;K.Profiler=60114;var Nm=60109,Tm=60110,Rm=60112;K.Suspense=60113;var Mm=60115,jm=60116;if(typeof Symbol=="function"&&Symbol.for){var Et=Symbol.for;ii=Et("react.element"),Om=Et("react.portal"),K.Fragment=Et("react.fragment"),K.StrictMode=Et("react.strict_mode"),K.Profiler=Et("react.profiler"),Nm=Et("react.provider"),Tm=Et("react.context"),Rm=Et("react.forward_ref"),K.Suspense=Et("react.suspense"),Mm=Et("react.memo"),jm=Et("react.lazy")}var Bf=typeof Symbol=="function"&&Symbol.iterator;function Wv(e){return e===null||typeof e!="object"?null:(e=Bf&&e[Bf]||e["@@iterator"],typeof e=="function"?e:null)}function Eo(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var zm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Lm={};function oi(e,t,r){this.props=e,this.context=t,this.refs=Lm,this.updater=r||zm}oi.prototype.isReactComponent={};oi.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error(Eo(85));this.updater.enqueueSetState(this,e,t,"setState")};oi.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Am(){}Am.prototype=oi.prototype;function Fc(e,t,r){this.props=e,this.context=t,this.refs=Lm,this.updater=r||zm}var Bc=Fc.prototype=new Am;Bc.constructor=Fc;Dc(Bc,oi.prototype);Bc.isPureReactComponent=!0;var Uc={current:null},Im=Object.prototype.hasOwnProperty,Dm={key:!0,ref:!0,__self:!0,__source:!0};function Fm(e,t,r){var n,i={},o=null,a=null;if(t!=null)for(n in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)Im.call(t,n)&&!Dm.hasOwnProperty(n)&&(i[n]=t[n]);var l=arguments.length-2;if(l===1)i.children=r;else if(1<l){for(var s=Array(l),c=0;c<l;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(n in l=e.defaultProps,l)i[n]===void 0&&(i[n]=l[n]);return{$$typeof:ii,type:e,key:o,ref:a,props:i,_owner:Uc.current}}function Hv(e,t){return{$$typeof:ii,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Wc(e){return typeof e=="object"&&e!==null&&e.$$typeof===ii}function Vv(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var Uf=/\/+/g;function Ns(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Vv(""+e.key):t.toString(36)}function xa(e,t,r,n,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case ii:case Om:a=!0}}if(a)return a=e,i=i(a),e=n===""?"."+Ns(a,0):n,Array.isArray(i)?(r="",e!=null&&(r=e.replace(Uf,"$&/")+"/"),xa(i,t,r,"",function(c){return c})):i!=null&&(Wc(i)&&(i=Hv(i,r+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(Uf,"$&/")+"/")+e)),t.push(i)),1;if(a=0,n=n===""?".":n+":",Array.isArray(e))for(var l=0;l<e.length;l++){o=e[l];var s=n+Ns(o,l);a+=xa(o,t,r,s,i)}else if(s=Wv(e),typeof s=="function")for(e=s.call(e),l=0;!(o=e.next()).done;)o=o.value,s=n+Ns(o,l++),a+=xa(o,t,r,s,i);else if(o==="object")throw t=""+e,Error(Eo(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t));return a}function Jo(e,t,r){if(e==null)return e;var n=[],i=0;return xa(e,n,"","",function(o){return t.call(r,o,i++)}),n}function Kv(e){if(e._status===-1){var t=e._result;t=t(),e._status=0,e._result=t,t.then(function(r){e._status===0&&(r=r.default,e._status=1,e._result=r)},function(r){e._status===0&&(e._status=2,e._result=r)})}if(e._status===1)return e._result;throw e._result}var Bm={current:null};function or(){var e=Bm.current;if(e===null)throw Error(Eo(321));return e}var Xv={ReactCurrentDispatcher:Bm,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:Uc,IsSomeRendererActing:{current:!1},assign:Dc};K.Children={map:Jo,forEach:function(e,t,r){Jo(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return Jo(e,function(){t++}),t},toArray:function(e){return Jo(e,function(t){return t})||[]},only:function(e){if(!Wc(e))throw Error(Eo(143));return e}};K.Component=oi;K.PureComponent=Fc;K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Xv;K.cloneElement=function(e,t,r){if(e==null)throw Error(Eo(267,e));var n=Dc({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=Uc.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)Im.call(t,s)&&!Dm.hasOwnProperty(s)&&(n[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)n.children=r;else if(1<s){l=Array(s);for(var c=0;c<s;c++)l[c]=arguments[c+2];n.children=l}return{$$typeof:ii,type:e.type,key:i,ref:o,props:n,_owner:a}};K.createContext=function(e,t){return t===void 0&&(t=null),e={$$typeof:Tm,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider={$$typeof:Nm,_context:e},e.Consumer=e};K.createElement=Fm;K.createFactory=function(e){var t=Fm.bind(null,e);return t.type=e,t};K.createRef=function(){return{current:null}};K.forwardRef=function(e){return{$$typeof:Rm,render:e}};K.isValidElement=Wc;K.lazy=function(e){return{$$typeof:jm,_payload:{_status:-1,_result:e},_init:Kv}};K.memo=function(e,t){return{$$typeof:Mm,type:e,compare:t===void 0?null:t}};K.useCallback=function(e,t){return or().useCallback(e,t)};K.useContext=function(e,t){return or().useContext(e,t)};K.useDebugValue=function(){};K.useEffect=function(e,t){return or().useEffect(e,t)};K.useImperativeHandle=function(e,t,r){return or().useImperativeHandle(e,t,r)};K.useLayoutEffect=function(e,t){return or().useLayoutEffect(e,t)};K.useMemo=function(e,t){return or().useMemo(e,t)};K.useReducer=function(e,t,r){return or().useReducer(e,t,r)};K.useRef=function(e){return or().useRef(e)};K.useState=function(e){return or().useState(e)};K.version="17.0.2";k.exports=K;var Xe=k.exports,eo=$m({__proto__:null,default:Xe},[k.exports]),Cl={exports:{}},bt={},Um={exports:{}},Wm={};/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){var t,r,n,i;if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}if(typeof window=="undefined"||typeof MessageChannel!="function"){var s=null,c=null,d=function(){if(s!==null)try{var j=e.unstable_now();s(!0,j),s=null}catch($){throw setTimeout(d,0),$}};t=function(j){s!==null?setTimeout(t,0,j):(s=j,setTimeout(d,0))},r=function(j,$){c=setTimeout(j,$)},n=function(){clearTimeout(c)},e.unstable_shouldYield=function(){return!1},i=e.unstable_forceFrameRate=function(){}}else{var f=window.setTimeout,m=window.clearTimeout;if(typeof console!="undefined"){var y=window.cancelAnimationFrame;typeof window.requestAnimationFrame!="function"&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"),typeof y!="function"&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")}var x=!1,v=null,p=-1,h=5,g=0;e.unstable_shouldYield=function(){return e.unstable_now()>=g},i=function(){},e.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):h=0<j?Math.floor(1e3/j):5};var w=new MessageChannel,S=w.port2;w.port1.onmessage=function(){if(v!==null){var j=e.unstable_now();g=j+h;try{v(!0,j)?S.postMessage(null):(x=!1,v=null)}catch($){throw S.postMessage(null),$}}else x=!1},t=function(j){v=j,x||(x=!0,S.postMessage(null))},r=function(j,$){p=f(function(){j(e.unstable_now())},$)},n=function(){m(p),p=-1}}function _(j,$){var P=j.length;j.push($);e:for(;;){var M=P-1>>>1,A=j[M];if(A!==void 0&&0<z(A,$))j[M]=$,j[P]=A,P=M;else break e}}function E(j){return j=j[0],j===void 0?null:j}function O(j){var $=j[0];if($!==void 0){var P=j.pop();if(P!==$){j[0]=P;e:for(var M=0,A=j.length;M<A;){var C=2*(M+1)-1,V=j[C],R=C+1,te=j[R];if(V!==void 0&&0>z(V,P))te!==void 0&&0>z(te,V)?(j[M]=te,j[R]=P,M=R):(j[M]=V,j[C]=P,M=C);else if(te!==void 0&&0>z(te,P))j[M]=te,j[R]=P,M=R;else break e}}return $}return null}function z(j,$){var P=j.sortIndex-$.sortIndex;return P!==0?P:j.id-$.id}var T=[],D=[],G=1,W=null,H=3,he=!1,le=!1,Fe=!1;function Pe(j){for(var $=E(D);$!==null;){if($.callback===null)O(D);else if($.startTime<=j)O(D),$.sortIndex=$.expirationTime,_(T,$);else break;$=E(D)}}function Ee(j){if(Fe=!1,Pe(j),!le)if(E(T)!==null)le=!0,t(Xt);else{var $=E(D);$!==null&&r(Ee,$.startTime-j)}}function Xt(j,$){le=!1,Fe&&(Fe=!1,n()),he=!0;var P=H;try{for(Pe($),W=E(T);W!==null&&(!(W.expirationTime>$)||j&&!e.unstable_shouldYield());){var M=W.callback;if(typeof M=="function"){W.callback=null,H=W.priorityLevel;var A=M(W.expirationTime<=$);$=e.unstable_now(),typeof A=="function"?W.callback=A:W===E(T)&&O(T),Pe($)}else O(T);W=E(T)}if(W!==null)var C=!0;else{var V=E(D);V!==null&&r(Ee,V.startTime-$),C=!1}return C}finally{W=null,H=P,he=!1}}var ur=i;e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(j){j.callback=null},e.unstable_continueExecution=function(){le||he||(le=!0,t(Xt))},e.unstable_getCurrentPriorityLevel=function(){return H},e.unstable_getFirstCallbackNode=function(){return E(T)},e.unstable_next=function(j){switch(H){case 1:case 2:case 3:var $=3;break;default:$=H}var P=H;H=$;try{return j()}finally{H=P}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=ur,e.unstable_runWithPriority=function(j,$){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var P=H;H=j;try{return $()}finally{H=P}},e.unstable_scheduleCallback=function(j,$,P){var M=e.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?M+P:M):P=M,j){case 1:var A=-1;break;case 2:A=250;break;case 5:A=1073741823;break;case 4:A=1e4;break;default:A=5e3}return A=P+A,j={id:G++,callback:$,priorityLevel:j,startTime:P,expirationTime:A,sortIndex:-1},P>M?(j.sortIndex=P,_(D,j),E(T)===null&&j===E(D)&&(Fe?n():Fe=!0,r(Ee,P-M))):(j.sortIndex=A,_(T,j),le||he||(le=!0,t(Xt))),j},e.unstable_wrapCallback=function(j){var $=H;return function(){var P=H;H=$;try{return j.apply(this,arguments)}finally{H=P}}}})(Wm);Um.exports=Wm;/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _l=k.exports,pe=Pm,Ne=Um.exports;function N(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!_l)throw Error(N(227));var Hm=new Set,to={};function cn(e,t){qn(e,t),qn(e+"Capture",t)}function qn(e,t){for(to[e]=t,e=0;e<t.length;e++)Hm.add(t[e])}var tr=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),Gv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Wf=Object.prototype.hasOwnProperty,Hf={},Vf={};function Yv(e){return Wf.call(Vf,e)?!0:Wf.call(Hf,e)?!1:Gv.test(e)?Vf[e]=!0:(Hf[e]=!0,!1)}function qv(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Qv(e,t,r,n){if(t===null||typeof t=="undefined"||qv(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ze(e,t,r,n,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var De={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){De[e]=new Ze(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];De[t]=new Ze(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){De[e]=new Ze(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){De[e]=new Ze(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){De[e]=new Ze(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){De[e]=new Ze(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){De[e]=new Ze(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){De[e]=new Ze(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){De[e]=new Ze(e,5,!1,e.toLowerCase(),null,!1,!1)});var Hc=/[\-:]([a-z])/g;function Vc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Hc,Vc);De[t]=new Ze(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Hc,Vc);De[t]=new Ze(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Hc,Vc);De[t]=new Ze(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){De[e]=new Ze(e,1,!1,e.toLowerCase(),null,!1,!1)});De.xlinkHref=new Ze("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){De[e]=new Ze(e,1,!1,e.toLowerCase(),null,!0,!0)});function Kc(e,t,r,n){var i=De.hasOwnProperty(t)?De[t]:null,o=i!==null?i.type===0:n?!1:!(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N");o||(Qv(t,r,i,n)&&(r=null),n||i===null?Yv(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):i.mustUseProperty?e[i.propertyName]=r===null?i.type===3?!1:"":r:(t=i.attributeName,n=i.attributeNamespace,r===null?e.removeAttribute(t):(i=i.type,r=i===3||i===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var dn=_l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ji=60103,Yr=60106,pr=60107,Xc=60108,Fi=60114,Gc=60109,Yc=60110,El=60112,Bi=60113,Ia=60120,$l=60115,qc=60116,Qc=60121,Jc=60128,Vm=60129,Zc=60130,wu=60131;if(typeof Symbol=="function"&&Symbol.for){var Oe=Symbol.for;ji=Oe("react.element"),Yr=Oe("react.portal"),pr=Oe("react.fragment"),Xc=Oe("react.strict_mode"),Fi=Oe("react.profiler"),Gc=Oe("react.provider"),Yc=Oe("react.context"),El=Oe("react.forward_ref"),Bi=Oe("react.suspense"),Ia=Oe("react.suspense_list"),$l=Oe("react.memo"),qc=Oe("react.lazy"),Qc=Oe("react.block"),Oe("react.scope"),Jc=Oe("react.opaque.id"),Vm=Oe("react.debug_trace_mode"),Zc=Oe("react.offscreen"),wu=Oe("react.legacy_hidden")}var Kf=typeof Symbol=="function"&&Symbol.iterator;function xi(e){return e===null||typeof e!="object"?null:(e=Kf&&e[Kf]||e["@@iterator"],typeof e=="function"?e:null)}var Ts;function zi(e){if(Ts===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);Ts=t&&t[1]||""}return`
`+Ts+e}var Rs=!1;function Zo(e,t){if(!e||Rs)return"";Rs=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(s){var n=s}Reflect.construct(e,[],t)}else{try{t.call()}catch(s){n=s}e.call(t.prototype)}else{try{throw Error()}catch(s){n=s}e()}}catch(s){if(s&&n&&typeof s.stack=="string"){for(var i=s.stack.split(`
`),o=n.stack.split(`
`),a=i.length-1,l=o.length-1;1<=a&&0<=l&&i[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==o[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==o[l])return`
`+i[a].replace(" at new "," at ");while(1<=a&&0<=l);break}}}finally{Rs=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?zi(e):""}function Jv(e){switch(e.tag){case 5:return zi(e.type);case 16:return zi("Lazy");case 13:return zi("Suspense");case 19:return zi("SuspenseList");case 0:case 2:case 15:return e=Zo(e.type,!1),e;case 11:return e=Zo(e.type.render,!1),e;case 22:return e=Zo(e.type._render,!1),e;case 1:return e=Zo(e.type,!0),e;default:return""}}function jn(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case pr:return"Fragment";case Yr:return"Portal";case Fi:return"Profiler";case Xc:return"StrictMode";case Bi:return"Suspense";case Ia:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Yc:return(e.displayName||"Context")+".Consumer";case Gc:return(e._context.displayName||"Context")+".Provider";case El:var t=e.render;return t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case $l:return jn(e.type);case Qc:return jn(e._render);case qc:t=e._payload,e=e._init;try{return jn(e(t))}catch{}}return null}function jr(e){switch(typeof e){case"boolean":case"number":case"object":case"string":case"undefined":return e;default:return""}}function Km(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Zv(e){var t=Km(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r!="undefined"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,o=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){n=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(a){n=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ea(e){e._valueTracker||(e._valueTracker=Zv(e))}function Xm(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=Km(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function Da(e){if(e=e||(typeof document!="undefined"?document:void 0),typeof e=="undefined")return null;try{return e.activeElement||e.body}catch{return e.body}}function bu(e,t){var r=t.checked;return pe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r!=null?r:e._wrapperState.initialChecked})}function Xf(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=jr(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Gm(e,t){t=t.checked,t!=null&&Kc(e,"checked",t,!1)}function Su(e,t){Gm(e,t);var r=jr(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ku(e,t.type,r):t.hasOwnProperty("defaultValue")&&ku(e,t.type,jr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Gf(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function ku(e,t,r){(t!=="number"||Da(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}function ey(e){var t="";return _l.Children.forEach(e,function(r){r!=null&&(t+=r)}),t}function Cu(e,t){return e=pe({children:void 0},t),(t=ey(t.children))&&(e.children=t),e}function zn(e,t,r,n){if(e=e.options,t){t={};for(var i=0;i<r.length;i++)t["$"+r[i]]=!0;for(r=0;r<e.length;r++)i=t.hasOwnProperty("$"+e[r].value),e[r].selected!==i&&(e[r].selected=i),i&&n&&(e[r].defaultSelected=!0)}else{for(r=""+jr(r),t=null,i=0;i<e.length;i++){if(e[i].value===r){e[i].selected=!0,n&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function _u(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(N(91));return pe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Yf(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(N(92));if(Array.isArray(r)){if(!(1>=r.length))throw Error(N(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:jr(r)}}function Ym(e,t){var r=jr(t.value),n=jr(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function qf(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}var Eu={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};function qm(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function $u(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?qm(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ta,Qm=function(e){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(t,r,n,i){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,i)})}:e}(function(e,t){if(e.namespaceURI!==Eu.svg||"innerHTML"in e)e.innerHTML=t;else{for(ta=ta||document.createElement("div"),ta.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ta.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ro(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var Ui={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ty=["Webkit","ms","Moz","O"];Object.keys(Ui).forEach(function(e){ty.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ui[t]=Ui[e]})});function Jm(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||Ui.hasOwnProperty(e)&&Ui[e]?(""+t).trim():t+"px"}function Zm(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,i=Jm(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,i):e[r]=i}}var ry=pe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Pu(e,t){if(t){if(ry[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(N(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(N(60));if(!(typeof t.dangerouslySetInnerHTML=="object"&&"__html"in t.dangerouslySetInnerHTML))throw Error(N(61))}if(t.style!=null&&typeof t.style!="object")throw Error(N(62))}}function Ou(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}function ed(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Nu=null,Ln=null,An=null;function Qf(e){if(e=Po(e)){if(typeof Nu!="function")throw Error(N(280));var t=e.stateNode;t&&(t=Ml(t),Nu(e.stateNode,e.type,t))}}function e0(e){Ln?An?An.push(e):An=[e]:Ln=e}function t0(){if(Ln){var e=Ln,t=An;if(An=Ln=null,Qf(e),t)for(e=0;e<t.length;e++)Qf(t[e])}}function td(e,t){return e(t)}function r0(e,t,r,n,i){return e(t,r,n,i)}function rd(){}var n0=td,qr=!1,Ms=!1;function nd(){(Ln!==null||An!==null)&&(rd(),t0())}function ny(e,t,r){if(Ms)return e(t,r);Ms=!0;try{return n0(e,t,r)}finally{Ms=!1,nd()}}function no(e,t){var r=e.stateNode;if(r===null)return null;var n=Ml(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(N(231,t,typeof r));return r}var Tu=!1;if(tr)try{var wi={};Object.defineProperty(wi,"passive",{get:function(){Tu=!0}}),window.addEventListener("test",wi,wi),window.removeEventListener("test",wi,wi)}catch{Tu=!1}function iy(e,t,r,n,i,o,a,l,s){var c=Array.prototype.slice.call(arguments,3);try{t.apply(r,c)}catch(d){this.onError(d)}}var Wi=!1,Fa=null,Ba=!1,Ru=null,oy={onError:function(e){Wi=!0,Fa=e}};function ay(e,t,r,n,i,o,a,l,s){Wi=!1,Fa=null,iy.apply(oy,arguments)}function ly(e,t,r,n,i,o,a,l,s){if(ay.apply(this,arguments),Wi){if(Wi){var c=Fa;Wi=!1,Fa=null}else throw Error(N(198));Ba||(Ba=!0,Ru=c)}}function fn(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&1026)!==0&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function i0(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Jf(e){if(fn(e)!==e)throw Error(N(188))}function sy(e){var t=e.alternate;if(!t){if(t=fn(e),t===null)throw Error(N(188));return t!==e?null:e}for(var r=e,n=t;;){var i=r.return;if(i===null)break;var o=i.alternate;if(o===null){if(n=i.return,n!==null){r=n;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===r)return Jf(i),e;if(o===n)return Jf(i),t;o=o.sibling}throw Error(N(188))}if(r.return!==n.return)r=i,n=o;else{for(var a=!1,l=i.child;l;){if(l===r){a=!0,r=i,n=o;break}if(l===n){a=!0,n=i,r=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===r){a=!0,r=o,n=i;break}if(l===n){a=!0,n=o,r=i;break}l=l.sibling}if(!a)throw Error(N(189))}}if(r.alternate!==n)throw Error(N(190))}if(r.tag!==3)throw Error(N(188));return r.stateNode.current===r?e:t}function o0(e){if(e=sy(e),!e)return null;for(var t=e;;){if(t.tag===5||t.tag===6)return t;if(t.child)t.child.return=t,t=t.child;else{if(t===e)break;for(;!t.sibling;){if(!t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}}return null}function Zf(e,t){for(var r=e.alternate;t!==null;){if(t===e||t===r)return!0;t=t.return}return!1}var a0,id,l0,s0,Mu=!1,At=[],br=null,Sr=null,kr=null,io=new Map,oo=new Map,bi=[],ep="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ju(e,t,r,n,i){return{blockedOn:e,domEventName:t,eventSystemFlags:r|16,nativeEvent:i,targetContainers:[n]}}function tp(e,t){switch(e){case"focusin":case"focusout":br=null;break;case"dragenter":case"dragleave":Sr=null;break;case"mouseover":case"mouseout":kr=null;break;case"pointerover":case"pointerout":io.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":oo.delete(t.pointerId)}}function Si(e,t,r,n,i,o){return e===null||e.nativeEvent!==o?(e=ju(t,r,n,i,o),t!==null&&(t=Po(t),t!==null&&id(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function uy(e,t,r,n,i){switch(t){case"focusin":return br=Si(br,e,t,r,n,i),!0;case"dragenter":return Sr=Si(Sr,e,t,r,n,i),!0;case"mouseover":return kr=Si(kr,e,t,r,n,i),!0;case"pointerover":var o=i.pointerId;return io.set(o,Si(io.get(o)||null,e,t,r,n,i)),!0;case"gotpointercapture":return o=i.pointerId,oo.set(o,Si(oo.get(o)||null,e,t,r,n,i)),!0}return!1}function cy(e){var t=Qr(e.target);if(t!==null){var r=fn(t);if(r!==null){if(t=r.tag,t===13){if(t=i0(r),t!==null){e.blockedOn=t,s0(e.lanePriority,function(){Ne.unstable_runWithPriority(e.priority,function(){l0(r)})});return}}else if(t===3&&r.stateNode.hydrate){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function wa(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=sd(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r!==null)return t=Po(r),t!==null&&id(t),e.blockedOn=r,!1;t.shift()}return!0}function rp(e,t,r){wa(e)&&r.delete(t)}function dy(){for(Mu=!1;0<At.length;){var e=At[0];if(e.blockedOn!==null){e=Po(e.blockedOn),e!==null&&a0(e);break}for(var t=e.targetContainers;0<t.length;){var r=sd(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r!==null){e.blockedOn=r;break}t.shift()}e.blockedOn===null&&At.shift()}br!==null&&wa(br)&&(br=null),Sr!==null&&wa(Sr)&&(Sr=null),kr!==null&&wa(kr)&&(kr=null),io.forEach(rp),oo.forEach(rp)}function ki(e,t){e.blockedOn===t&&(e.blockedOn=null,Mu||(Mu=!0,Ne.unstable_scheduleCallback(Ne.unstable_NormalPriority,dy)))}function u0(e){function t(i){return ki(i,e)}if(0<At.length){ki(At[0],e);for(var r=1;r<At.length;r++){var n=At[r];n.blockedOn===e&&(n.blockedOn=null)}}for(br!==null&&ki(br,e),Sr!==null&&ki(Sr,e),kr!==null&&ki(kr,e),io.forEach(t),oo.forEach(t),r=0;r<bi.length;r++)n=bi[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<bi.length&&(r=bi[0],r.blockedOn===null);)cy(r),r.blockedOn===null&&bi.shift()}function ra(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var $n={animationend:ra("Animation","AnimationEnd"),animationiteration:ra("Animation","AnimationIteration"),animationstart:ra("Animation","AnimationStart"),transitionend:ra("Transition","TransitionEnd")},js={},c0={};tr&&(c0=document.createElement("div").style,"AnimationEvent"in window||(delete $n.animationend.animation,delete $n.animationiteration.animation,delete $n.animationstart.animation),"TransitionEvent"in window||delete $n.transitionend.transition);function Pl(e){if(js[e])return js[e];if(!$n[e])return e;var t=$n[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in c0)return js[e]=t[r];return e}var d0=Pl("animationend"),f0=Pl("animationiteration"),p0=Pl("animationstart"),h0=Pl("transitionend"),m0=new Map,od=new Map,fy=["abort","abort",d0,"animationEnd",f0,"animationIteration",p0,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart","lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",h0,"transitionEnd","waiting","waiting"];function ad(e,t){for(var r=0;r<e.length;r+=2){var n=e[r],i=e[r+1];i="on"+(i[0].toUpperCase()+i.slice(1)),od.set(n,t),m0.set(n,i),cn(i,[n])}}var py=Ne.unstable_now;py();var se=8;function _n(e){if((1&e)!==0)return se=15,1;if((2&e)!==0)return se=14,2;if((4&e)!==0)return se=13,4;var t=24&e;return t!==0?(se=12,t):(e&32)!==0?(se=11,32):(t=192&e,t!==0?(se=10,t):(e&256)!==0?(se=9,256):(t=3584&e,t!==0?(se=8,t):(e&4096)!==0?(se=7,4096):(t=4186112&e,t!==0?(se=6,t):(t=62914560&e,t!==0?(se=5,t):e&67108864?(se=4,67108864):(e&134217728)!==0?(se=3,134217728):(t=805306368&e,t!==0?(se=2,t):(1073741824&e)!==0?(se=1,1073741824):(se=8,e))))))}function hy(e){switch(e){case 99:return 15;case 98:return 10;case 97:case 96:return 8;case 95:return 2;default:return 0}}function my(e){switch(e){case 15:case 14:return 99;case 13:case 12:case 11:case 10:return 98;case 9:case 8:case 7:case 6:case 4:case 5:return 97;case 3:case 2:case 1:return 95;case 0:return 90;default:throw Error(N(358,e))}}function ao(e,t){var r=e.pendingLanes;if(r===0)return se=0;var n=0,i=0,o=e.expiredLanes,a=e.suspendedLanes,l=e.pingedLanes;if(o!==0)n=o,i=se=15;else if(o=r&134217727,o!==0){var s=o&~a;s!==0?(n=_n(s),i=se):(l&=o,l!==0&&(n=_n(l),i=se))}else o=r&~a,o!==0?(n=_n(o),i=se):l!==0&&(n=_n(l),i=se);if(n===0)return 0;if(n=31-zr(n),n=r&((0>n?0:1<<n)<<1)-1,t!==0&&t!==n&&(t&a)===0){if(_n(t),i<=se)return t;se=i}if(t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-zr(t),i=1<<r,n|=e[r],t&=~i;return n}function g0(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ua(e,t){switch(e){case 15:return 1;case 14:return 2;case 12:return e=En(24&~t),e===0?Ua(10,t):e;case 10:return e=En(192&~t),e===0?Ua(8,t):e;case 8:return e=En(3584&~t),e===0&&(e=En(4186112&~t),e===0&&(e=512)),e;case 2:return t=En(805306368&~t),t===0&&(t=268435456),t}throw Error(N(358,e))}function En(e){return e&-e}function zs(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Ol(e,t,r){e.pendingLanes|=t;var n=t-1;e.suspendedLanes&=n,e.pingedLanes&=n,e=e.eventTimes,t=31-zr(t),e[t]=r}var zr=Math.clz32?Math.clz32:yy,gy=Math.log,vy=Math.LN2;function yy(e){return e===0?32:31-(gy(e)/vy|0)|0}var xy=Ne.unstable_UserBlockingPriority,wy=Ne.unstable_runWithPriority,ba=!0;function by(e,t,r,n){qr||rd();var i=ld,o=qr;qr=!0;try{r0(i,e,t,r,n)}finally{(qr=o)||nd()}}function Sy(e,t,r,n){wy(xy,ld.bind(null,e,t,r,n))}function ld(e,t,r,n){if(ba){var i;if((i=(t&4)===0)&&0<At.length&&-1<ep.indexOf(e))e=ju(null,e,t,r,n),At.push(e);else{var o=sd(e,t,r,n);if(o===null)i&&tp(e,n);else{if(i){if(-1<ep.indexOf(e)){e=ju(o,e,t,r,n),At.push(e);return}if(uy(o,e,t,r,n))return;tp(e,n)}O0(e,t,n,null,r)}}}}function sd(e,t,r,n){var i=ed(n);if(i=Qr(i),i!==null){var o=fn(i);if(o===null)i=null;else{var a=o.tag;if(a===13){if(i=i0(o),i!==null)return i;i=null}else if(a===3){if(o.stateNode.hydrate)return o.tag===3?o.stateNode.containerInfo:null;i=null}else o!==i&&(i=null)}}return O0(e,t,n,i,r),null}var gr=null,ud=null,Sa=null;function v0(){if(Sa)return Sa;var e,t=ud,r=t.length,n,i="value"in gr?gr.value:gr.textContent,o=i.length;for(e=0;e<r&&t[e]===i[e];e++);var a=r-e;for(n=1;n<=a&&t[r-n]===i[o-n];n++);return Sa=i.slice(e,1<n?1-n:void 0)}function ka(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function na(){return!0}function np(){return!1}function dt(e){function t(r,n,i,o,a){this._reactName=r,this._targetInst=i,this.type=n,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(r=e[l],this[l]=r?r(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?na:np,this.isPropagationStopped=np,this}return pe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=na)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=na)},persist:function(){},isPersistent:na}),t}var ai={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cd=dt(ai),$o=pe({},ai,{view:0,detail:0}),ky=dt($o),Ls,As,Ci,Nl=pe({},$o,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:dd,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ci&&(Ci&&e.type==="mousemove"?(Ls=e.screenX-Ci.screenX,As=e.screenY-Ci.screenY):As=Ls=0,Ci=e),Ls)},movementY:function(e){return"movementY"in e?e.movementY:As}}),ip=dt(Nl),Cy=pe({},Nl,{dataTransfer:0}),_y=dt(Cy),Ey=pe({},$o,{relatedTarget:0}),Is=dt(Ey),$y=pe({},ai,{animationName:0,elapsedTime:0,pseudoElement:0}),Py=dt($y),Oy=pe({},ai,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ny=dt(Oy),Ty=pe({},ai,{data:0}),op=dt(Ty),Ry={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},My={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zy(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=jy[e])?!!t[e]:!1}function dd(){return zy}var Ly=pe({},$o,{key:function(e){if(e.key){var t=Ry[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ka(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?My[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:dd,charCode:function(e){return e.type==="keypress"?ka(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ka(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ay=dt(Ly),Iy=pe({},Nl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ap=dt(Iy),Dy=pe({},$o,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:dd}),Fy=dt(Dy),By=pe({},ai,{propertyName:0,elapsedTime:0,pseudoElement:0}),Uy=dt(By),Wy=pe({},Nl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Hy=dt(Wy),Vy=[9,13,27,32],fd=tr&&"CompositionEvent"in window,Hi=null;tr&&"documentMode"in document&&(Hi=document.documentMode);var Ky=tr&&"TextEvent"in window&&!Hi,y0=tr&&(!fd||Hi&&8<Hi&&11>=Hi),lp=String.fromCharCode(32),sp=!1;function x0(e,t){switch(e){case"keyup":return Vy.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function w0(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Pn=!1;function Xy(e,t){switch(e){case"compositionend":return w0(t);case"keypress":return t.which!==32?null:(sp=!0,lp);case"textInput":return e=t.data,e===lp&&sp?null:e;default:return null}}function Gy(e,t){if(Pn)return e==="compositionend"||!fd&&x0(e,t)?(e=v0(),Sa=ud=gr=null,Pn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return y0&&t.locale!=="ko"?null:t.data;default:return null}}var Yy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function up(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Yy[e.type]:t==="textarea"}function b0(e,t,r,n){e0(n),t=Wa(t,"onChange"),0<t.length&&(r=new cd("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var Vi=null,lo=null;function qy(e){E0(e,0)}function Tl(e){var t=Nn(e);if(Xm(t))return e}function Qy(e,t){if(e==="change")return t}var S0=!1;if(tr){var Ds;if(tr){var Fs="oninput"in document;if(!Fs){var cp=document.createElement("div");cp.setAttribute("oninput","return;"),Fs=typeof cp.oninput=="function"}Ds=Fs}else Ds=!1;S0=Ds&&(!document.documentMode||9<document.documentMode)}function dp(){Vi&&(Vi.detachEvent("onpropertychange",k0),lo=Vi=null)}function k0(e){if(e.propertyName==="value"&&Tl(lo)){var t=[];if(b0(t,lo,e,ed(e)),e=qy,qr)e(t);else{qr=!0;try{td(e,t)}finally{qr=!1,nd()}}}}function Jy(e,t,r){e==="focusin"?(dp(),Vi=t,lo=r,Vi.attachEvent("onpropertychange",k0)):e==="focusout"&&dp()}function Zy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Tl(lo)}function ex(e,t){if(e==="click")return Tl(t)}function tx(e,t){if(e==="input"||e==="change")return Tl(t)}function rx(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var mt=typeof Object.is=="function"?Object.is:rx,nx=Object.prototype.hasOwnProperty;function so(e,t){if(mt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++)if(!nx.call(t,r[n])||!mt(e[r[n]],t[r[n]]))return!1;return!0}function fp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function pp(e,t){var r=fp(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=fp(r)}}function C0(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?C0(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function hp(){for(var e=window,t=Da();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Da(e.document)}return t}function zu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var ix=tr&&"documentMode"in document&&11>=document.documentMode,On=null,Lu=null,Ki=null,Au=!1;function mp(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Au||On==null||On!==Da(n)||(n=On,"selectionStart"in n&&zu(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Ki&&so(Ki,n)||(Ki=n,n=Wa(Lu,"onSelect"),0<n.length&&(t=new cd("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=On)))}ad("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),0);ad("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1);ad(fy,2);for(var gp="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),Bs=0;Bs<gp.length;Bs++)od.set(gp[Bs],0);qn("onMouseEnter",["mouseout","mouseover"]);qn("onMouseLeave",["mouseout","mouseover"]);qn("onPointerEnter",["pointerout","pointerover"]);qn("onPointerLeave",["pointerout","pointerover"]);cn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));cn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));cn("onBeforeInput",["compositionend","keypress","textInput","paste"]);cn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));cn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));cn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Li="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Li));function vp(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,ly(n,t,void 0,e),e.currentTarget=null}function E0(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],i=n.event;n=n.listeners;e:{var o=void 0;if(t)for(var a=n.length-1;0<=a;a--){var l=n[a],s=l.instance,c=l.currentTarget;if(l=l.listener,s!==o&&i.isPropagationStopped())break e;vp(i,l,c),o=s}else for(a=0;a<n.length;a++){if(l=n[a],s=l.instance,c=l.currentTarget,l=l.listener,s!==o&&i.isPropagationStopped())break e;vp(i,l,c),o=s}}}if(Ba)throw e=Ru,Ba=!1,Ru=null,e}function ue(e,t){var r=T0(t),n=e+"__bubble";r.has(n)||(P0(t,e,2,!1),r.add(n))}var yp="_reactListening"+Math.random().toString(36).slice(2);function $0(e){e[yp]||(e[yp]=!0,Hm.forEach(function(t){_0.has(t)||xp(t,!1,e,null),xp(t,!0,e,null)}))}function xp(e,t,r,n){var i=4<arguments.length&&arguments[4]!==void 0?arguments[4]:0,o=r;if(e==="selectionchange"&&r.nodeType!==9&&(o=r.ownerDocument),n!==null&&!t&&_0.has(e)){if(e!=="scroll")return;i|=2,o=n}var a=T0(o),l=e+"__"+(t?"capture":"bubble");a.has(l)||(t&&(i|=4),P0(o,e,i,t),a.add(l))}function P0(e,t,r,n){var i=od.get(t);switch(i===void 0?2:i){case 0:i=by;break;case 1:i=Sy;break;default:i=ld}r=i.bind(null,t,r,e),i=void 0,!Tu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),n?i!==void 0?e.addEventListener(t,r,{capture:!0,passive:i}):e.addEventListener(t,r,!0):i!==void 0?e.addEventListener(t,r,{passive:i}):e.addEventListener(t,r,!1)}function O0(e,t,r,n,i){var o=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var a=n.tag;if(a===3||a===4){var l=n.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=n.return;a!==null;){var s=a.tag;if((s===3||s===4)&&(s=a.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;a=a.return}for(;l!==null;){if(a=Qr(l),a===null)return;if(s=a.tag,s===5||s===6){n=o=a;continue e}l=l.parentNode}}n=n.return}ny(function(){var c=o,d=ed(r),f=[];e:{var m=m0.get(e);if(m!==void 0){var y=cd,x=e;switch(e){case"keypress":if(ka(r)===0)break e;case"keydown":case"keyup":y=Ay;break;case"focusin":x="focus",y=Is;break;case"focusout":x="blur",y=Is;break;case"beforeblur":case"afterblur":y=Is;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=ip;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=_y;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Fy;break;case d0:case f0:case p0:y=Py;break;case h0:y=Uy;break;case"scroll":y=ky;break;case"wheel":y=Hy;break;case"copy":case"cut":case"paste":y=Ny;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=ap}var v=(t&4)!==0,p=!v&&e==="scroll",h=v?m!==null?m+"Capture":null:m;v=[];for(var g=c,w;g!==null;){w=g;var S=w.stateNode;if(w.tag===5&&S!==null&&(w=S,h!==null&&(S=no(g,h),S!=null&&v.push(uo(g,S,w)))),p)break;g=g.return}0<v.length&&(m=new y(m,x,null,r,d),f.push({event:m,listeners:v}))}}if((t&7)===0){e:{if(m=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",m&&(t&16)===0&&(x=r.relatedTarget||r.fromElement)&&(Qr(x)||x[li]))break e;if((y||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,y?(x=r.relatedTarget||r.toElement,y=c,x=x?Qr(x):null,x!==null&&(p=fn(x),x!==p||x.tag!==5&&x.tag!==6)&&(x=null)):(y=null,x=c),y!==x)){if(v=ip,S="onMouseLeave",h="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(v=ap,S="onPointerLeave",h="onPointerEnter",g="pointer"),p=y==null?m:Nn(y),w=x==null?m:Nn(x),m=new v(S,g+"leave",y,r,d),m.target=p,m.relatedTarget=w,S=null,Qr(d)===c&&(v=new v(h,g+"enter",x,r,d),v.target=w,v.relatedTarget=p,S=v),p=S,y&&x)t:{for(v=y,h=x,g=0,w=v;w;w=vn(w))g++;for(w=0,S=h;S;S=vn(S))w++;for(;0<g-w;)v=vn(v),g--;for(;0<w-g;)h=vn(h),w--;for(;g--;){if(v===h||h!==null&&v===h.alternate)break t;v=vn(v),h=vn(h)}v=null}else v=null;y!==null&&wp(f,m,y,v,!1),x!==null&&p!==null&&wp(f,p,x,v,!0)}}e:{if(m=c?Nn(c):window,y=m.nodeName&&m.nodeName.toLowerCase(),y==="select"||y==="input"&&m.type==="file")var _=Qy;else if(up(m))if(S0)_=tx;else{_=Zy;var E=Jy}else(y=m.nodeName)&&y.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(_=ex);if(_&&(_=_(e,c))){b0(f,_,r,d);break e}E&&E(e,m,c),e==="focusout"&&(E=m._wrapperState)&&E.controlled&&m.type==="number"&&ku(m,"number",m.value)}switch(E=c?Nn(c):window,e){case"focusin":(up(E)||E.contentEditable==="true")&&(On=E,Lu=c,Ki=null);break;case"focusout":Ki=Lu=On=null;break;case"mousedown":Au=!0;break;case"contextmenu":case"mouseup":case"dragend":Au=!1,mp(f,r,d);break;case"selectionchange":if(ix)break;case"keydown":case"keyup":mp(f,r,d)}var O;if(fd)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else Pn?x0(e,r)&&(z="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(z="onCompositionStart");z&&(y0&&r.locale!=="ko"&&(Pn||z!=="onCompositionStart"?z==="onCompositionEnd"&&Pn&&(O=v0()):(gr=d,ud="value"in gr?gr.value:gr.textContent,Pn=!0)),E=Wa(c,z),0<E.length&&(z=new op(z,e,null,r,d),f.push({event:z,listeners:E}),O?z.data=O:(O=w0(r),O!==null&&(z.data=O)))),(O=Ky?Xy(e,r):Gy(e,r))&&(c=Wa(c,"onBeforeInput"),0<c.length&&(d=new op("onBeforeInput","beforeinput",null,r,d),f.push({event:d,listeners:c}),d.data=O))}E0(f,t)})}function uo(e,t,r){return{instance:e,listener:t,currentTarget:r}}function Wa(e,t){for(var r=t+"Capture",n=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=no(e,r),o!=null&&n.unshift(uo(e,o,i)),o=no(e,t),o!=null&&n.push(uo(e,o,i))),e=e.return}return n}function vn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function wp(e,t,r,n,i){for(var o=t._reactName,a=[];r!==null&&r!==n;){var l=r,s=l.alternate,c=l.stateNode;if(s!==null&&s===n)break;l.tag===5&&c!==null&&(l=c,i?(s=no(r,o),s!=null&&a.unshift(uo(r,s,l))):i||(s=no(r,o),s!=null&&a.push(uo(r,s,l)))),r=r.return}a.length!==0&&e.push({event:t,listeners:a})}function Ha(){}var Us=null,Ws=null;function N0(e,t){switch(e){case"button":case"input":case"select":case"textarea":return!!t.autoFocus}return!1}function Iu(e,t){return e==="textarea"||e==="option"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var bp=typeof setTimeout=="function"?setTimeout:void 0,ox=typeof clearTimeout=="function"?clearTimeout:void 0;function pd(e){e.nodeType===1?e.textContent="":e.nodeType===9&&(e=e.body,e!=null&&(e.textContent=""))}function In(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break}return e}function Sp(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var Hs=0;function ax(e){return{$$typeof:Jc,toString:e,valueOf:e}}var Rl=Math.random().toString(36).slice(2),vr="__reactFiber$"+Rl,Va="__reactProps$"+Rl,li="__reactContainer$"+Rl,kp="__reactEvents$"+Rl;function Qr(e){var t=e[vr];if(t)return t;for(var r=e.parentNode;r;){if(t=r[li]||r[vr]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Sp(e);e!==null;){if(r=e[vr])return r;e=Sp(e)}return t}e=r,r=e.parentNode}return null}function Po(e){return e=e[vr]||e[li],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Nn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(N(33))}function Ml(e){return e[Va]||null}function T0(e){var t=e[kp];return t===void 0&&(t=e[kp]=new Set),t}var Du=[],Tn=-1;function Ur(e){return{current:e}}function ce(e){0>Tn||(e.current=Du[Tn],Du[Tn]=null,Tn--)}function xe(e,t){Tn++,Du[Tn]=e.current,e.current=t}var Lr={},Ye=Ur(Lr),it=Ur(!1),rn=Lr;function Qn(e,t){var r=e.type.contextTypes;if(!r)return Lr;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in r)i[o]=t[o];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ot(e){return e=e.childContextTypes,e!=null}function Ka(){ce(it),ce(Ye)}function Cp(e,t,r){if(Ye.current!==Lr)throw Error(N(168));xe(Ye,t),xe(it,r)}function R0(e,t,r){var n=e.stateNode;if(e=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var i in n)if(!(i in e))throw Error(N(108,jn(t)||"Unknown",i));return pe({},r,n)}function Ca(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Lr,rn=Ye.current,xe(Ye,e),xe(it,it.current),!0}function _p(e,t,r){var n=e.stateNode;if(!n)throw Error(N(169));r?(e=R0(e,t,rn),n.__reactInternalMemoizedMergedChildContext=e,ce(it),ce(Ye),xe(Ye,e)):ce(it),xe(it,r)}var hd=null,en=null,lx=Ne.unstable_runWithPriority,md=Ne.unstable_scheduleCallback,Fu=Ne.unstable_cancelCallback,sx=Ne.unstable_shouldYield,Ep=Ne.unstable_requestPaint,Bu=Ne.unstable_now,ux=Ne.unstable_getCurrentPriorityLevel,jl=Ne.unstable_ImmediatePriority,M0=Ne.unstable_UserBlockingPriority,j0=Ne.unstable_NormalPriority,z0=Ne.unstable_LowPriority,L0=Ne.unstable_IdlePriority,Vs={},cx=Ep!==void 0?Ep:function(){},Yt=null,_a=null,Ks=!1,$p=Bu(),Ke=1e4>$p?Bu:function(){return Bu()-$p};function Jn(){switch(ux()){case jl:return 99;case M0:return 98;case j0:return 97;case z0:return 96;case L0:return 95;default:throw Error(N(332))}}function A0(e){switch(e){case 99:return jl;case 98:return M0;case 97:return j0;case 96:return z0;case 95:return L0;default:throw Error(N(332))}}function nn(e,t){return e=A0(e),lx(e,t)}function co(e,t,r){return e=A0(e),md(e,t,r)}function Vt(){if(_a!==null){var e=_a;_a=null,Fu(e)}I0()}function I0(){if(!Ks&&Yt!==null){Ks=!0;var e=0;try{var t=Yt;nn(99,function(){for(;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}}),Yt=null}catch(r){throw Yt!==null&&(Yt=Yt.slice(e+1)),md(jl,Vt),r}finally{Ks=!1}}}var dx=dn.ReactCurrentBatchConfig;function $t(e,t){if(e&&e.defaultProps){t=pe({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}var Xa=Ur(null),Ga=null,Rn=null,Ya=null;function gd(){Ya=Rn=Ga=null}function vd(e){var t=Xa.current;ce(Xa),e.type._context._currentValue=t}function D0(e,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t){if(r===null||(r.childLanes&t)===t)break;r.childLanes|=t}else e.childLanes|=t,r!==null&&(r.childLanes|=t);e=e.return}}function Dn(e,t){Ga=e,Ya=Rn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Ot=!0),e.firstContext=null)}function yt(e,t){if(Ya!==e&&t!==!1&&t!==0)if((typeof t!="number"||t===1073741823)&&(Ya=e,t=1073741823),t={context:e,observedBits:t,next:null},Rn===null){if(Ga===null)throw Error(N(308));Rn=t,Ga.dependencies={lanes:0,firstContext:t,responders:null}}else Rn=Rn.next=t;return e._currentValue}var fr=!1;function yd(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null},effects:null}}function F0(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Cr(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function _r(e,t){if(e=e.updateQueue,e!==null){e=e.shared;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}}function Pp(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var i=null,o=null;if(r=r.firstBaseUpdate,r!==null){do{var a={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};o===null?i=o=a:o=o.next=a,r=r.next}while(r!==null);o===null?i=o=t:o=o.next=t}else i=o=t;r={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function fo(e,t,r,n){var i=e.updateQueue;fr=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var s=l,c=s.next;s.next=null,a===null?o=c:a.next=c,a=s;var d=e.alternate;if(d!==null){d=d.updateQueue;var f=d.lastBaseUpdate;f!==a&&(f===null?d.firstBaseUpdate=c:f.next=c,d.lastBaseUpdate=s)}}if(o!==null){f=i.baseState,a=0,d=c=s=null;do{l=o.lane;var m=o.eventTime;if((n&l)===l){d!==null&&(d=d.next={eventTime:m,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var y=e,x=o;switch(l=t,m=r,x.tag){case 1:if(y=x.payload,typeof y=="function"){f=y.call(m,f,l);break e}f=y;break e;case 3:y.flags=y.flags&-4097|64;case 0:if(y=x.payload,l=typeof y=="function"?y.call(m,f,l):y,l==null)break e;f=pe({},f,l);break e;case 2:fr=!0}}o.callback!==null&&(e.flags|=32,l=i.effects,l===null?i.effects=[o]:l.push(o))}else m={eventTime:m,lane:l,tag:o.tag,payload:o.payload,callback:o.callback,next:null},d===null?(c=d=m,s=f):d=d.next=m,a|=l;if(o=o.next,o===null){if(l=i.shared.pending,l===null)break;o=l.next,l.next=null,i.lastBaseUpdate=l,i.shared.pending=null}}while(1);d===null&&(s=f),i.baseState=s,i.firstBaseUpdate=c,i.lastBaseUpdate=d,No|=a,e.lanes=a,e.memoizedState=f}}function Op(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],i=n.callback;if(i!==null){if(n.callback=null,n=r,typeof i!="function")throw Error(N(191,i));i.call(n)}}}var B0=new _l.Component().refs;function qa(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:pe({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var zl={isMounted:function(e){return(e=e._reactInternals)?fn(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=st(),i=Er(e),o=Cr(n,i);o.payload=t,r!=null&&(o.callback=r),_r(e,o),$r(e,i,n)},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=st(),i=Er(e),o=Cr(n,i);o.tag=1,o.payload=t,r!=null&&(o.callback=r),_r(e,o),$r(e,i,n)},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=st(),n=Er(e),i=Cr(r,n);i.tag=2,t!=null&&(i.callback=t),_r(e,i),$r(e,n,r)}};function Np(e,t,r,n,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,o,a):t.prototype&&t.prototype.isPureReactComponent?!so(r,n)||!so(i,o):!0}function U0(e,t,r){var n=!1,i=Lr,o=t.contextType;return typeof o=="object"&&o!==null?o=yt(o):(i=ot(t)?rn:Ye.current,n=t.contextTypes,o=(n=n!=null)?Qn(e,i):Lr),t=new t(r,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=zl,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Tp(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&zl.enqueueReplaceState(t,t.state,null)}function Uu(e,t,r,n){var i=e.stateNode;i.props=r,i.state=e.memoizedState,i.refs=B0,yd(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=yt(o):(o=ot(t)?rn:Ye.current,i.context=Qn(e,o)),fo(e,r,i,n),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(qa(e,t,o,r),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&zl.enqueueReplaceState(i,i.state,null),fo(e,r,i,n),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4)}var ia=Array.isArray;function _i(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(N(309));var n=r.stateNode}if(!n)throw Error(N(147,e));var i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var a=n.refs;a===B0&&(a=n.refs={}),o===null?delete a[i]:a[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(N(284));if(!r._owner)throw Error(N(290,e))}return e}function oa(e,t){if(e.type!=="textarea")throw Error(N(31,Object.prototype.toString.call(t)==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":t))}function W0(e){function t(p,h){if(e){var g=p.lastEffect;g!==null?(g.nextEffect=h,p.lastEffect=h):p.firstEffect=p.lastEffect=h,h.nextEffect=null,h.flags=8}}function r(p,h){if(!e)return null;for(;h!==null;)t(p,h),h=h.sibling;return null}function n(p,h){for(p=new Map;h!==null;)h.key!==null?p.set(h.key,h):p.set(h.index,h),h=h.sibling;return p}function i(p,h){return p=Ir(p,h),p.index=0,p.sibling=null,p}function o(p,h,g){return p.index=g,e?(g=p.alternate,g!==null?(g=g.index,g<h?(p.flags=2,h):g):(p.flags=2,h)):h}function a(p){return e&&p.alternate===null&&(p.flags=2),p}function l(p,h,g,w){return h===null||h.tag!==6?(h=Qs(g,p.mode,w),h.return=p,h):(h=i(h,g),h.return=p,h)}function s(p,h,g,w){return h!==null&&h.elementType===g.type?(w=i(h,g.props),w.ref=_i(p,h,g),w.return=p,w):(w=Oa(g.type,g.key,g.props,null,p.mode,w),w.ref=_i(p,h,g),w.return=p,w)}function c(p,h,g,w){return h===null||h.tag!==4||h.stateNode.containerInfo!==g.containerInfo||h.stateNode.implementation!==g.implementation?(h=Js(g,p.mode,w),h.return=p,h):(h=i(h,g.children||[]),h.return=p,h)}function d(p,h,g,w,S){return h===null||h.tag!==7?(h=Wn(g,p.mode,w,S),h.return=p,h):(h=i(h,g),h.return=p,h)}function f(p,h,g){if(typeof h=="string"||typeof h=="number")return h=Qs(""+h,p.mode,g),h.return=p,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case ji:return g=Oa(h.type,h.key,h.props,null,p.mode,g),g.ref=_i(p,null,h),g.return=p,g;case Yr:return h=Js(h,p.mode,g),h.return=p,h}if(ia(h)||xi(h))return h=Wn(h,p.mode,g,null),h.return=p,h;oa(p,h)}return null}function m(p,h,g,w){var S=h!==null?h.key:null;if(typeof g=="string"||typeof g=="number")return S!==null?null:l(p,h,""+g,w);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ji:return g.key===S?g.type===pr?d(p,h,g.props.children,w,S):s(p,h,g,w):null;case Yr:return g.key===S?c(p,h,g,w):null}if(ia(g)||xi(g))return S!==null?null:d(p,h,g,w,null);oa(p,g)}return null}function y(p,h,g,w,S){if(typeof w=="string"||typeof w=="number")return p=p.get(g)||null,l(h,p,""+w,S);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case ji:return p=p.get(w.key===null?g:w.key)||null,w.type===pr?d(h,p,w.props.children,S,w.key):s(h,p,w,S);case Yr:return p=p.get(w.key===null?g:w.key)||null,c(h,p,w,S)}if(ia(w)||xi(w))return p=p.get(g)||null,d(h,p,w,S,null);oa(h,w)}return null}function x(p,h,g,w){for(var S=null,_=null,E=h,O=h=0,z=null;E!==null&&O<g.length;O++){E.index>O?(z=E,E=null):z=E.sibling;var T=m(p,E,g[O],w);if(T===null){E===null&&(E=z);break}e&&E&&T.alternate===null&&t(p,E),h=o(T,h,O),_===null?S=T:_.sibling=T,_=T,E=z}if(O===g.length)return r(p,E),S;if(E===null){for(;O<g.length;O++)E=f(p,g[O],w),E!==null&&(h=o(E,h,O),_===null?S=E:_.sibling=E,_=E);return S}for(E=n(p,E);O<g.length;O++)z=y(E,p,O,g[O],w),z!==null&&(e&&z.alternate!==null&&E.delete(z.key===null?O:z.key),h=o(z,h,O),_===null?S=z:_.sibling=z,_=z);return e&&E.forEach(function(D){return t(p,D)}),S}function v(p,h,g,w){var S=xi(g);if(typeof S!="function")throw Error(N(150));if(g=S.call(g),g==null)throw Error(N(151));for(var _=S=null,E=h,O=h=0,z=null,T=g.next();E!==null&&!T.done;O++,T=g.next()){E.index>O?(z=E,E=null):z=E.sibling;var D=m(p,E,T.value,w);if(D===null){E===null&&(E=z);break}e&&E&&D.alternate===null&&t(p,E),h=o(D,h,O),_===null?S=D:_.sibling=D,_=D,E=z}if(T.done)return r(p,E),S;if(E===null){for(;!T.done;O++,T=g.next())T=f(p,T.value,w),T!==null&&(h=o(T,h,O),_===null?S=T:_.sibling=T,_=T);return S}for(E=n(p,E);!T.done;O++,T=g.next())T=y(E,p,O,T.value,w),T!==null&&(e&&T.alternate!==null&&E.delete(T.key===null?O:T.key),h=o(T,h,O),_===null?S=T:_.sibling=T,_=T);return e&&E.forEach(function(G){return t(p,G)}),S}return function(p,h,g,w){var S=typeof g=="object"&&g!==null&&g.type===pr&&g.key===null;S&&(g=g.props.children);var _=typeof g=="object"&&g!==null;if(_)switch(g.$$typeof){case ji:e:{for(_=g.key,S=h;S!==null;){if(S.key===_){switch(S.tag){case 7:if(g.type===pr){r(p,S.sibling),h=i(S,g.props.children),h.return=p,p=h;break e}break;default:if(S.elementType===g.type){r(p,S.sibling),h=i(S,g.props),h.ref=_i(p,S,g),h.return=p,p=h;break e}}r(p,S);break}else t(p,S);S=S.sibling}g.type===pr?(h=Wn(g.props.children,p.mode,w,g.key),h.return=p,p=h):(w=Oa(g.type,g.key,g.props,null,p.mode,w),w.ref=_i(p,h,g),w.return=p,p=w)}return a(p);case Yr:e:{for(S=g.key;h!==null;){if(h.key===S)if(h.tag===4&&h.stateNode.containerInfo===g.containerInfo&&h.stateNode.implementation===g.implementation){r(p,h.sibling),h=i(h,g.children||[]),h.return=p,p=h;break e}else{r(p,h);break}else t(p,h);h=h.sibling}h=Js(g,p.mode,w),h.return=p,p=h}return a(p)}if(typeof g=="string"||typeof g=="number")return g=""+g,h!==null&&h.tag===6?(r(p,h.sibling),h=i(h,g),h.return=p,p=h):(r(p,h),h=Qs(g,p.mode,w),h.return=p,p=h),a(p);if(ia(g))return x(p,h,g,w);if(xi(g))return v(p,h,g,w);if(_&&oa(p,g),typeof g=="undefined"&&!S)switch(p.tag){case 1:case 22:case 0:case 11:case 15:throw Error(N(152,jn(p.type)||"Component"))}return r(p,h)}}var Qa=W0(!0),H0=W0(!1),Oo={},Ft=Ur(Oo),po=Ur(Oo),ho=Ur(Oo);function Jr(e){if(e===Oo)throw Error(N(174));return e}function Wu(e,t){switch(xe(ho,t),xe(po,e),xe(Ft,Oo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:$u(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=$u(t,e)}ce(Ft),xe(Ft,t)}function Zn(){ce(Ft),ce(po),ce(ho)}function Rp(e){Jr(ho.current);var t=Jr(Ft.current),r=$u(t,e.type);t!==r&&(xe(po,e),xe(Ft,r))}function xd(e){po.current===e&&(ce(Ft),ce(po))}var ye=Ur(0);function Ja(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&64)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Qt=null,yr=null,Bt=!1;function V0(e,t){var r=gt(5,null,null,0);r.elementType="DELETED",r.type="DELETED",r.stateNode=t,r.return=e,r.flags=8,e.lastEffect!==null?(e.lastEffect.nextEffect=r,e.lastEffect=r):e.firstEffect=e.lastEffect=r}function Mp(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,!0):!1;case 13:return!1;default:return!1}}function Hu(e){if(Bt){var t=yr;if(t){var r=t;if(!Mp(e,t)){if(t=In(r.nextSibling),!t||!Mp(e,t)){e.flags=e.flags&-1025|2,Bt=!1,Qt=e;return}V0(Qt,r)}Qt=e,yr=In(t.firstChild)}else e.flags=e.flags&-1025|2,Bt=!1,Qt=e}}function jp(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Qt=e}function aa(e){if(e!==Qt)return!1;if(!Bt)return jp(e),Bt=!0,!1;var t=e.type;if(e.tag!==5||t!=="head"&&t!=="body"&&!Iu(t,e.memoizedProps))for(t=yr;t;)V0(e,t),t=In(t.nextSibling);if(jp(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(N(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){yr=In(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}yr=null}}else yr=Qt?In(e.stateNode.nextSibling):null;return!0}function Xs(){yr=Qt=null,Bt=!1}var Fn=[];function wd(){for(var e=0;e<Fn.length;e++)Fn[e]._workInProgressVersionPrimary=null;Fn.length=0}var Xi=dn.ReactCurrentDispatcher,vt=dn.ReactCurrentBatchConfig,mo=0,be=null,He=null,Le=null,Za=!1,Gi=!1;function rt(){throw Error(N(321))}function bd(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!mt(e[r],t[r]))return!1;return!0}function Sd(e,t,r,n,i,o){if(mo=o,be=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Xi.current=e===null||e.memoizedState===null?px:hx,e=r(n,i),Gi){o=0;do{if(Gi=!1,!(25>o))throw Error(N(301));o+=1,Le=He=null,t.updateQueue=null,Xi.current=mx,e=r(n,i)}while(Gi)}if(Xi.current=nl,t=He!==null&&He.next!==null,mo=0,Le=He=be=null,Za=!1,t)throw Error(N(300));return e}function Zr(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Le===null?be.memoizedState=Le=e:Le=Le.next=e,Le}function pn(){if(He===null){var e=be.alternate;e=e!==null?e.memoizedState:null}else e=He.next;var t=Le===null?be.memoizedState:Le.next;if(t!==null)Le=t,He=e;else{if(e===null)throw Error(N(310));He=e,e={memoizedState:He.memoizedState,baseState:He.baseState,baseQueue:He.baseQueue,queue:He.queue,next:null},Le===null?be.memoizedState=Le=e:Le=Le.next=e}return Le}function It(e,t){return typeof t=="function"?t(e):t}function Ei(e){var t=pn(),r=t.queue;if(r===null)throw Error(N(311));r.lastRenderedReducer=e;var n=He,i=n.baseQueue,o=r.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}n.baseQueue=i=o,r.pending=null}if(i!==null){i=i.next,n=n.baseState;var l=a=o=null,s=i;do{var c=s.lane;if((mo&c)===c)l!==null&&(l=l.next={lane:0,action:s.action,eagerReducer:s.eagerReducer,eagerState:s.eagerState,next:null}),n=s.eagerReducer===e?s.eagerState:e(n,s.action);else{var d={lane:c,action:s.action,eagerReducer:s.eagerReducer,eagerState:s.eagerState,next:null};l===null?(a=l=d,o=n):l=l.next=d,be.lanes|=c,No|=c}s=s.next}while(s!==null&&s!==i);l===null?o=n:l.next=a,mt(n,t.memoizedState)||(Ot=!0),t.memoizedState=n,t.baseState=o,t.baseQueue=l,r.lastRenderedState=n}return[t.memoizedState,r.dispatch]}function $i(e){var t=pn(),r=t.queue;if(r===null)throw Error(N(311));r.lastRenderedReducer=e;var n=r.dispatch,i=r.pending,o=t.memoizedState;if(i!==null){r.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);mt(o,t.memoizedState)||(Ot=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),r.lastRenderedState=o}return[o,n]}function zp(e,t,r){var n=t._getVersion;n=n(t._source);var i=t._workInProgressVersionPrimary;if(i!==null?e=i===n:(e=e.mutableReadLanes,(e=(mo&e)===e)&&(t._workInProgressVersionPrimary=n,Fn.push(t))),e)return r(t._source);throw Fn.push(t),Error(N(350))}function K0(e,t,r,n){var i=Je;if(i===null)throw Error(N(349));var o=t._getVersion,a=o(t._source),l=Xi.current,s=l.useState(function(){return zp(i,t,r)}),c=s[1],d=s[0];s=Le;var f=e.memoizedState,m=f.refs,y=m.getSnapshot,x=f.source;f=f.subscribe;var v=be;return e.memoizedState={refs:m,source:t,subscribe:n},l.useEffect(function(){m.getSnapshot=r,m.setSnapshot=c;var p=o(t._source);if(!mt(a,p)){p=r(t._source),mt(d,p)||(c(p),p=Er(v),i.mutableReadLanes|=p&i.pendingLanes),p=i.mutableReadLanes,i.entangledLanes|=p;for(var h=i.entanglements,g=p;0<g;){var w=31-zr(g),S=1<<w;h[w]|=p,g&=~S}}},[r,t,n]),l.useEffect(function(){return n(t._source,function(){var p=m.getSnapshot,h=m.setSnapshot;try{h(p(t._source));var g=Er(v);i.mutableReadLanes|=g&i.pendingLanes}catch(w){h(function(){throw w})}})},[t,n]),mt(y,r)&&mt(x,t)&&mt(f,n)||(e={pending:null,dispatch:null,lastRenderedReducer:It,lastRenderedState:d},e.dispatch=c=_d.bind(null,be,e),s.queue=e,s.baseQueue=null,d=zp(i,t,r),s.memoizedState=s.baseState=d),d}function X0(e,t,r){var n=pn();return K0(n,e,t,r)}function Pi(e){var t=Zr();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e=t.queue={pending:null,dispatch:null,lastRenderedReducer:It,lastRenderedState:e},e=e.dispatch=_d.bind(null,be,e),[t.memoizedState,e]}function el(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=be.updateQueue,t===null?(t={lastEffect:null},be.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function Lp(e){var t=Zr();return e={current:e},t.memoizedState=e}function tl(){return pn().memoizedState}function Vu(e,t,r,n){var i=Zr();be.flags|=e,i.memoizedState=el(1|t,r,void 0,n===void 0?null:n)}function kd(e,t,r,n){var i=pn();n=n===void 0?null:n;var o=void 0;if(He!==null){var a=He.memoizedState;if(o=a.destroy,n!==null&&bd(n,a.deps)){el(t,r,o,n);return}}be.flags|=e,i.memoizedState=el(1|t,r,o,n)}function Ap(e,t){return Vu(516,4,e,t)}function rl(e,t){return kd(516,4,e,t)}function G0(e,t){return kd(4,2,e,t)}function Y0(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function q0(e,t,r){return r=r!=null?r.concat([e]):null,kd(4,2,Y0.bind(null,t,e),r)}function Cd(){}function Q0(e,t){var r=pn();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&bd(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function J0(e,t){var r=pn();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&bd(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function fx(e,t){var r=Jn();nn(98>r?98:r,function(){e(!0)}),nn(97<r?97:r,function(){var n=vt.transition;vt.transition=1;try{e(!1),t()}finally{vt.transition=n}})}function _d(e,t,r){var n=st(),i=Er(e),o={lane:i,action:r,eagerReducer:null,eagerState:null,next:null},a=t.pending;if(a===null?o.next=o:(o.next=a.next,a.next=o),t.pending=o,a=e.alternate,e===be||a!==null&&a===be)Gi=Za=!0;else{if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var l=t.lastRenderedState,s=a(l,r);if(o.eagerReducer=a,o.eagerState=s,mt(s,l))return}catch{}finally{}$r(e,i,n)}}var nl={readContext:yt,useCallback:rt,useContext:rt,useEffect:rt,useImperativeHandle:rt,useLayoutEffect:rt,useMemo:rt,useReducer:rt,useRef:rt,useState:rt,useDebugValue:rt,useDeferredValue:rt,useTransition:rt,useMutableSource:rt,useOpaqueIdentifier:rt,unstable_isNewReconciler:!1},px={readContext:yt,useCallback:function(e,t){return Zr().memoizedState=[e,t===void 0?null:t],e},useContext:yt,useEffect:Ap,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,Vu(4,2,Y0.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Vu(4,2,e,t)},useMemo:function(e,t){var r=Zr();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=Zr();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e=n.queue={pending:null,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},e=e.dispatch=_d.bind(null,be,e),[n.memoizedState,e]},useRef:Lp,useState:Pi,useDebugValue:Cd,useDeferredValue:function(e){var t=Pi(e),r=t[0],n=t[1];return Ap(function(){var i=vt.transition;vt.transition=1;try{n(e)}finally{vt.transition=i}},[e]),r},useTransition:function(){var e=Pi(!1),t=e[0];return e=fx.bind(null,e[1]),Lp(e),[e,t]},useMutableSource:function(e,t,r){var n=Zr();return n.memoizedState={refs:{getSnapshot:t,setSnapshot:null},source:e,subscribe:r},K0(n,e,t,r)},useOpaqueIdentifier:function(){if(Bt){var e=!1,t=ax(function(){throw e||(e=!0,r("r:"+(Hs++).toString(36))),Error(N(355))}),r=Pi(t)[1];return(be.mode&2)===0&&(be.flags|=516,el(5,function(){r("r:"+(Hs++).toString(36))},void 0,null)),t}return t="r:"+(Hs++).toString(36),Pi(t),t},unstable_isNewReconciler:!1},hx={readContext:yt,useCallback:Q0,useContext:yt,useEffect:rl,useImperativeHandle:q0,useLayoutEffect:G0,useMemo:J0,useReducer:Ei,useRef:tl,useState:function(){return Ei(It)},useDebugValue:Cd,useDeferredValue:function(e){var t=Ei(It),r=t[0],n=t[1];return rl(function(){var i=vt.transition;vt.transition=1;try{n(e)}finally{vt.transition=i}},[e]),r},useTransition:function(){var e=Ei(It)[0];return[tl().current,e]},useMutableSource:X0,useOpaqueIdentifier:function(){return Ei(It)[0]},unstable_isNewReconciler:!1},mx={readContext:yt,useCallback:Q0,useContext:yt,useEffect:rl,useImperativeHandle:q0,useLayoutEffect:G0,useMemo:J0,useReducer:$i,useRef:tl,useState:function(){return $i(It)},useDebugValue:Cd,useDeferredValue:function(e){var t=$i(It),r=t[0],n=t[1];return rl(function(){var i=vt.transition;vt.transition=1;try{n(e)}finally{vt.transition=i}},[e]),r},useTransition:function(){var e=$i(It)[0];return[tl().current,e]},useMutableSource:X0,useOpaqueIdentifier:function(){return $i(It)[0]},unstable_isNewReconciler:!1},gx=dn.ReactCurrentOwner,Ot=!1;function nt(e,t,r,n){t.child=e===null?H0(t,null,r,n):Qa(t,e.child,r,n)}function Ip(e,t,r,n,i){r=r.render;var o=t.ref;return Dn(t,i),n=Sd(e,t,r,n,o,i),e!==null&&!Ot?(t.updateQueue=e.updateQueue,t.flags&=-517,e.lanes&=~i,Jt(e,t,i)):(t.flags|=1,nt(e,t,n,i),t.child)}function Dp(e,t,r,n,i,o){if(e===null){var a=r.type;return typeof a=="function"&&!Td(a)&&a.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=a,Z0(e,t,a,n,i,o)):(e=Oa(r.type,null,n,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}return a=e.child,(i&o)===0&&(i=a.memoizedProps,r=r.compare,r=r!==null?r:so,r(i,n)&&e.ref===t.ref)?Jt(e,t,o):(t.flags|=1,e=Ir(a,n),e.ref=t.ref,e.return=t,t.child=e)}function Z0(e,t,r,n,i,o){if(e!==null&&so(e.memoizedProps,n)&&e.ref===t.ref)if(Ot=!1,(o&i)!==0)(e.flags&16384)!==0&&(Ot=!0);else return t.lanes=e.lanes,Jt(e,t,o);return Ku(e,t,r,n,o)}function Gs(e,t,r){var n=t.pendingProps,i=n.children,o=e!==null?e.memoizedState:null;if(n.mode==="hidden"||n.mode==="unstable-defer-without-hiding")if((t.mode&4)===0)t.memoizedState={baseLanes:0},sa(t,r);else if((r&1073741824)!==0)t.memoizedState={baseLanes:0},sa(t,o!==null?o.baseLanes:r);else return e=o!==null?o.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e},sa(t,e),null;else o!==null?(n=o.baseLanes|r,t.memoizedState=null):n=r,sa(t,n);return nt(e,t,i,r),t.child}function eg(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=128)}function Ku(e,t,r,n,i){var o=ot(r)?rn:Ye.current;return o=Qn(t,o),Dn(t,i),r=Sd(e,t,r,n,o,i),e!==null&&!Ot?(t.updateQueue=e.updateQueue,t.flags&=-517,e.lanes&=~i,Jt(e,t,i)):(t.flags|=1,nt(e,t,r,i),t.child)}function Fp(e,t,r,n,i){if(ot(r)){var o=!0;Ca(t)}else o=!1;if(Dn(t,i),t.stateNode===null)e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2),U0(t,r,n),Uu(t,r,n,i),n=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var s=a.context,c=r.contextType;typeof c=="object"&&c!==null?c=yt(c):(c=ot(r)?rn:Ye.current,c=Qn(t,c));var d=r.getDerivedStateFromProps,f=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==n||s!==c)&&Tp(t,a,n,c),fr=!1;var m=t.memoizedState;a.state=m,fo(t,n,a,i),s=t.memoizedState,l!==n||m!==s||it.current||fr?(typeof d=="function"&&(qa(t,r,d,n),s=t.memoizedState),(l=fr||Np(t,r,l,n,m,s,c))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4)):(typeof a.componentDidMount=="function"&&(t.flags|=4),t.memoizedProps=n,t.memoizedState=s),a.props=n,a.state=s,a.context=c,n=l):(typeof a.componentDidMount=="function"&&(t.flags|=4),n=!1)}else{a=t.stateNode,F0(e,t),l=t.memoizedProps,c=t.type===t.elementType?l:$t(t.type,l),a.props=c,f=t.pendingProps,m=a.context,s=r.contextType,typeof s=="object"&&s!==null?s=yt(s):(s=ot(r)?rn:Ye.current,s=Qn(t,s));var y=r.getDerivedStateFromProps;(d=typeof y=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==f||m!==s)&&Tp(t,a,n,s),fr=!1,m=t.memoizedState,a.state=m,fo(t,n,a,i);var x=t.memoizedState;l!==f||m!==x||it.current||fr?(typeof y=="function"&&(qa(t,r,y,n),x=t.memoizedState),(c=fr||Np(t,r,c,n,m,x,s))?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(n,x,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(n,x,s)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=256)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=256),t.memoizedProps=n,t.memoizedState=x),a.props=n,a.state=x,a.context=s,n=c):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=256),n=!1)}return Xu(e,t,r,n,o,i)}function Xu(e,t,r,n,i,o){eg(e,t);var a=(t.flags&64)!==0;if(!n&&!a)return i&&_p(t,r,!1),Jt(e,t,o);n=t.stateNode,gx.current=t;var l=a&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&a?(t.child=Qa(t,e.child,null,o),t.child=Qa(t,null,l,o)):nt(e,t,l,o),t.memoizedState=n.state,i&&_p(t,r,!0),t.child}function Bp(e){var t=e.stateNode;t.pendingContext?Cp(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Cp(e,t.context,!1),Wu(e,t.containerInfo)}var la={dehydrated:null,retryLane:0};function Up(e,t,r){var n=t.pendingProps,i=ye.current,o=!1,a;return(a=(t.flags&64)!==0)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-65):e!==null&&e.memoizedState===null||n.fallback===void 0||n.unstable_avoidThisFallback===!0||(i|=1),xe(ye,i&1),e===null?(n.fallback!==void 0&&Hu(t),e=n.children,i=n.fallback,o?(e=Wp(t,e,i,r),t.child.memoizedState={baseLanes:r},t.memoizedState=la,e):typeof n.unstable_expectedLoadTime=="number"?(e=Wp(t,e,i,r),t.child.memoizedState={baseLanes:r},t.memoizedState=la,t.lanes=33554432,e):(r=Rd({mode:"visible",children:e},t.mode,r,null),r.return=t,t.child=r)):e.memoizedState!==null?o?(n=Vp(e,t,n.children,n.fallback,r),o=t.child,i=e.child.memoizedState,o.memoizedState=i===null?{baseLanes:r}:{baseLanes:i.baseLanes|r},o.childLanes=e.childLanes&~r,t.memoizedState=la,n):(r=Hp(e,t,n.children,r),t.memoizedState=null,r):o?(n=Vp(e,t,n.children,n.fallback,r),o=t.child,i=e.child.memoizedState,o.memoizedState=i===null?{baseLanes:r}:{baseLanes:i.baseLanes|r},o.childLanes=e.childLanes&~r,t.memoizedState=la,n):(r=Hp(e,t,n.children,r),t.memoizedState=null,r)}function Wp(e,t,r,n){var i=e.mode,o=e.child;return t={mode:"hidden",children:t},(i&2)===0&&o!==null?(o.childLanes=0,o.pendingProps=t):o=Rd(t,i,0,null),r=Wn(r,i,n,null),o.return=e,r.return=e,o.sibling=r,e.child=o,r}function Hp(e,t,r,n){var i=e.child;return e=i.sibling,r=Ir(i,{mode:"visible",children:r}),(t.mode&2)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(e.nextEffect=null,e.flags=8,t.firstEffect=t.lastEffect=e),t.child=r}function Vp(e,t,r,n,i){var o=t.mode,a=e.child;e=a.sibling;var l={mode:"hidden",children:r};return(o&2)===0&&t.child!==a?(r=t.child,r.childLanes=0,r.pendingProps=l,a=r.lastEffect,a!==null?(t.firstEffect=r.firstEffect,t.lastEffect=a,a.nextEffect=null):t.firstEffect=t.lastEffect=null):r=Ir(a,l),e!==null?n=Ir(e,n):(n=Wn(n,o,i,null),n.flags|=2),n.return=t,r.return=t,r.sibling=n,t.child=r,n}function Kp(e,t){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),D0(e.return,t)}function Ys(e,t,r,n,i,o){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:i,lastEffect:o}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=n,a.tail=r,a.tailMode=i,a.lastEffect=o)}function Xp(e,t,r){var n=t.pendingProps,i=n.revealOrder,o=n.tail;if(nt(e,t,n.children,r),n=ye.current,(n&2)!==0)n=n&1|2,t.flags|=64;else{if(e!==null&&(e.flags&64)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Kp(e,r);else if(e.tag===19)Kp(e,r);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(xe(ye,n),(t.mode&2)===0)t.memoizedState=null;else switch(i){case"forwards":for(r=t.child,i=null;r!==null;)e=r.alternate,e!==null&&Ja(e)===null&&(i=r),r=r.sibling;r=i,r===null?(i=t.child,t.child=null):(i=r.sibling,r.sibling=null),Ys(t,!1,i,r,o,t.lastEffect);break;case"backwards":for(r=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Ja(e)===null){t.child=i;break}e=i.sibling,i.sibling=r,r=i,i=e}Ys(t,!0,r,null,o,t.lastEffect);break;case"together":Ys(t,!1,null,null,void 0,t.lastEffect);break;default:t.memoizedState=null}return t.child}function Jt(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),No|=t.lanes,(r&t.childLanes)!==0){if(e!==null&&t.child!==e.child)throw Error(N(153));if(t.child!==null){for(e=t.child,r=Ir(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=Ir(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}return null}var tg,Gu,rg,ng;tg=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};Gu=function(){};rg=function(e,t,r,n){var i=e.memoizedProps;if(i!==n){e=t.stateNode,Jr(Ft.current);var o=null;switch(r){case"input":i=bu(e,i),n=bu(e,n),o=[];break;case"option":i=Cu(e,i),n=Cu(e,n),o=[];break;case"select":i=pe({},i,{value:void 0}),n=pe({},n,{value:void 0}),o=[];break;case"textarea":i=_u(e,i),n=_u(e,n),o=[];break;default:typeof i.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=Ha)}Pu(r,n);var a;r=null;for(c in i)if(!n.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(a in l)l.hasOwnProperty(a)&&(r||(r={}),r[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(to.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in n){var s=n[c];if(l=i!=null?i[c]:void 0,n.hasOwnProperty(c)&&s!==l&&(s!=null||l!=null))if(c==="style")if(l){for(a in l)!l.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(r||(r={}),r[a]="");for(a in s)s.hasOwnProperty(a)&&l[a]!==s[a]&&(r||(r={}),r[a]=s[a])}else r||(o||(o=[]),o.push(c,r)),r=s;else c==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(o=o||[]).push(c,s)):c==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(to.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&ue("scroll",e),o||l===s||(o=[])):typeof s=="object"&&s!==null&&s.$$typeof===Jc?s.toString():(o=o||[]).push(c,s))}r&&(o=o||[]).push("style",r);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};ng=function(e,t,r,n){r!==n&&(t.flags|=4)};function Oi(e,t){if(!Bt)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function vx(e,t,r){var n=t.pendingProps;switch(t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return ot(t.type)&&Ka(),null;case 3:return Zn(),ce(it),ce(Ye),wd(),n=t.stateNode,n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(aa(t)?t.flags|=4:n.hydrate||(t.flags|=256)),Gu(t),null;case 5:xd(t);var i=Jr(ho.current);if(r=t.type,e!==null&&t.stateNode!=null)rg(e,t,r,n,i),e.ref!==t.ref&&(t.flags|=128);else{if(!n){if(t.stateNode===null)throw Error(N(166));return null}if(e=Jr(Ft.current),aa(t)){n=t.stateNode,r=t.type;var o=t.memoizedProps;switch(n[vr]=t,n[Va]=o,r){case"dialog":ue("cancel",n),ue("close",n);break;case"iframe":case"object":case"embed":ue("load",n);break;case"video":case"audio":for(e=0;e<Li.length;e++)ue(Li[e],n);break;case"source":ue("error",n);break;case"img":case"image":case"link":ue("error",n),ue("load",n);break;case"details":ue("toggle",n);break;case"input":Xf(n,o),ue("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!o.multiple},ue("invalid",n);break;case"textarea":Yf(n,o),ue("invalid",n)}Pu(r,o),e=null;for(var a in o)o.hasOwnProperty(a)&&(i=o[a],a==="children"?typeof i=="string"?n.textContent!==i&&(e=["children",i]):typeof i=="number"&&n.textContent!==""+i&&(e=["children",""+i]):to.hasOwnProperty(a)&&i!=null&&a==="onScroll"&&ue("scroll",n));switch(r){case"input":ea(n),Gf(n,o,!0);break;case"textarea":ea(n),qf(n);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(n.onclick=Ha)}n=e,t.updateQueue=n,n!==null&&(t.flags|=4)}else{switch(a=i.nodeType===9?i:i.ownerDocument,e===Eu.html&&(e=qm(r)),e===Eu.html?r==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=a.createElement(r,{is:n.is}):(e=a.createElement(r),r==="select"&&(a=e,n.multiple?a.multiple=!0:n.size&&(a.size=n.size))):e=a.createElementNS(e,r),e[vr]=t,e[Va]=n,tg(e,t,!1,!1),t.stateNode=e,a=Ou(r,n),r){case"dialog":ue("cancel",e),ue("close",e),i=n;break;case"iframe":case"object":case"embed":ue("load",e),i=n;break;case"video":case"audio":for(i=0;i<Li.length;i++)ue(Li[i],e);i=n;break;case"source":ue("error",e),i=n;break;case"img":case"image":case"link":ue("error",e),ue("load",e),i=n;break;case"details":ue("toggle",e),i=n;break;case"input":Xf(e,n),i=bu(e,n),ue("invalid",e);break;case"option":i=Cu(e,n);break;case"select":e._wrapperState={wasMultiple:!!n.multiple},i=pe({},n,{value:void 0}),ue("invalid",e);break;case"textarea":Yf(e,n),i=_u(e,n),ue("invalid",e);break;default:i=n}Pu(r,i);var l=i;for(o in l)if(l.hasOwnProperty(o)){var s=l[o];o==="style"?Zm(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Qm(e,s)):o==="children"?typeof s=="string"?(r!=="textarea"||s!=="")&&ro(e,s):typeof s=="number"&&ro(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(to.hasOwnProperty(o)?s!=null&&o==="onScroll"&&ue("scroll",e):s!=null&&Kc(e,o,s,a))}switch(r){case"input":ea(e),Gf(e,n,!1);break;case"textarea":ea(e),qf(e);break;case"option":n.value!=null&&e.setAttribute("value",""+jr(n.value));break;case"select":e.multiple=!!n.multiple,o=n.value,o!=null?zn(e,!!n.multiple,o,!1):n.defaultValue!=null&&zn(e,!!n.multiple,n.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ha)}N0(r,n)&&(t.flags|=4)}t.ref!==null&&(t.flags|=128)}return null;case 6:if(e&&t.stateNode!=null)ng(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(N(166));r=Jr(ho.current),Jr(Ft.current),aa(t)?(n=t.stateNode,r=t.memoizedProps,n[vr]=t,n.nodeValue!==r&&(t.flags|=4)):(n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[vr]=t,t.stateNode=n)}return null;case 13:return ce(ye),n=t.memoizedState,(t.flags&64)!==0?(t.lanes=r,t):(n=n!==null,r=!1,e===null?t.memoizedProps.fallback!==void 0&&aa(t):r=e.memoizedState!==null,n&&!r&&(t.mode&2)!==0&&(e===null&&t.memoizedProps.unstable_avoidThisFallback!==!0||(ye.current&1)!==0?Ie===0&&(Ie=3):((Ie===0||Ie===3)&&(Ie=4),Je===null||(No&134217727)===0&&(ui&134217727)===0||Bn(Je,Ge))),(n||r)&&(t.flags|=4),null);case 4:return Zn(),Gu(t),e===null&&$0(t.stateNode.containerInfo),null;case 10:return vd(t),null;case 17:return ot(t.type)&&Ka(),null;case 19:if(ce(ye),n=t.memoizedState,n===null)return null;if(o=(t.flags&64)!==0,a=n.rendering,a===null)if(o)Oi(n,!1);else{if(Ie!==0||e!==null&&(e.flags&64)!==0)for(e=t.child;e!==null;){if(a=Ja(e),a!==null){for(t.flags|=64,Oi(n,!1),o=a.updateQueue,o!==null&&(t.updateQueue=o,t.flags|=4),n.lastEffect===null&&(t.firstEffect=null),t.lastEffect=n.lastEffect,n=r,r=t.child;r!==null;)o=r,e=n,o.flags&=2,o.nextEffect=null,o.firstEffect=null,o.lastEffect=null,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return xe(ye,ye.current&1|2),t.child}e=e.sibling}n.tail!==null&&Ke()>ec&&(t.flags|=64,o=!0,Oi(n,!1),t.lanes=33554432)}else{if(!o)if(e=Ja(a),e!==null){if(t.flags|=64,o=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),Oi(n,!0),n.tail===null&&n.tailMode==="hidden"&&!a.alternate&&!Bt)return t=t.lastEffect=n.lastEffect,t!==null&&(t.nextEffect=null),null}else 2*Ke()-n.renderingStartTime>ec&&r!==1073741824&&(t.flags|=64,o=!0,Oi(n,!1),t.lanes=33554432);n.isBackwards?(a.sibling=t.child,t.child=a):(r=n.last,r!==null?r.sibling=a:t.child=a,n.last=a)}return n.tail!==null?(r=n.tail,n.rendering=r,n.tail=r.sibling,n.lastEffect=t.lastEffect,n.renderingStartTime=Ke(),r.sibling=null,t=ye.current,xe(ye,o?t&1|2:t&1),r):null;case 23:case 24:return Nd(),e!==null&&e.memoizedState!==null!=(t.memoizedState!==null)&&n.mode!=="unstable-defer-without-hiding"&&(t.flags|=4),null}throw Error(N(156,t.tag))}function yx(e){switch(e.tag){case 1:ot(e.type)&&Ka();var t=e.flags;return t&4096?(e.flags=t&-4097|64,e):null;case 3:if(Zn(),ce(it),ce(Ye),wd(),t=e.flags,(t&64)!==0)throw Error(N(285));return e.flags=t&-4097|64,e;case 5:return xd(e),null;case 13:return ce(ye),t=e.flags,t&4096?(e.flags=t&-4097|64,e):null;case 19:return ce(ye),null;case 4:return Zn(),null;case 10:return vd(e),null;case 23:case 24:return Nd(),null;default:return null}}function Ed(e,t){try{var r="",n=t;do r+=Jv(n),n=n.return;while(n);var i=r}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i}}function Yu(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var xx=typeof WeakMap=="function"?WeakMap:Map;function ig(e,t,r){r=Cr(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){ol||(ol=!0,tc=n),Yu(e,t)},r}function og(e,t,r){r=Cr(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var i=t.value;r.payload=function(){return Yu(e,t),n(i)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(r.callback=function(){typeof n!="function"&&(Dt===null?Dt=new Set([this]):Dt.add(this),Yu(e,t));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),r}var wx=typeof WeakSet=="function"?WeakSet:Set;function Gp(e){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){Pr(e,r)}else t.current=null}function bx(e,t){switch(t.tag){case 0:case 11:case 15:case 22:return;case 1:if(t.flags&256&&e!==null){var r=e.memoizedProps,n=e.memoizedState;e=t.stateNode,t=e.getSnapshotBeforeUpdate(t.elementType===t.type?r:$t(t.type,r),n),e.__reactInternalSnapshotBeforeUpdate=t}return;case 3:t.flags&256&&pd(t.stateNode.containerInfo);return;case 5:case 6:case 4:case 17:return}throw Error(N(163))}function Sx(e,t,r){switch(r.tag){case 0:case 11:case 15:case 22:if(t=r.updateQueue,t=t!==null?t.lastEffect:null,t!==null){e=t=t.next;do{if((e.tag&3)===3){var n=e.create;e.destroy=n()}e=e.next}while(e!==t)}if(t=r.updateQueue,t=t!==null?t.lastEffect:null,t!==null){e=t=t.next;do{var i=e;n=i.next,i=i.tag,(i&4)!==0&&(i&1)!==0&&(hg(r,e),Nx(r,e)),e=n}while(e!==t)}return;case 1:e=r.stateNode,r.flags&4&&(t===null?e.componentDidMount():(n=r.elementType===r.type?t.memoizedProps:$t(r.type,t.memoizedProps),e.componentDidUpdate(n,t.memoizedState,e.__reactInternalSnapshotBeforeUpdate))),t=r.updateQueue,t!==null&&Op(r,t,e);return;case 3:if(t=r.updateQueue,t!==null){if(e=null,r.child!==null)switch(r.child.tag){case 5:e=r.child.stateNode;break;case 1:e=r.child.stateNode}Op(r,t,e)}return;case 5:e=r.stateNode,t===null&&r.flags&4&&N0(r.type,r.memoizedProps)&&e.focus();return;case 6:return;case 4:return;case 12:return;case 13:r.memoizedState===null&&(r=r.alternate,r!==null&&(r=r.memoizedState,r!==null&&(r=r.dehydrated,r!==null&&u0(r))));return;case 19:case 17:case 20:case 21:case 23:case 24:return}throw Error(N(163))}function Yp(e,t){for(var r=e;;){if(r.tag===5){var n=r.stateNode;if(t)n=n.style,typeof n.setProperty=="function"?n.setProperty("display","none","important"):n.display="none";else{n=r.stateNode;var i=r.memoizedProps.style;i=i!=null&&i.hasOwnProperty("display")?i.display:null,n.style.display=Jm("display",i)}}else if(r.tag===6)r.stateNode.nodeValue=t?"":r.memoizedProps;else if((r.tag!==23&&r.tag!==24||r.memoizedState===null||r===e)&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return;r=r.return}r.sibling.return=r.return,r=r.sibling}}function qp(e,t){if(en&&typeof en.onCommitFiberUnmount=="function")try{en.onCommitFiberUnmount(hd,t)}catch{}switch(t.tag){case 0:case 11:case 14:case 15:case 22:if(e=t.updateQueue,e!==null&&(e=e.lastEffect,e!==null)){var r=e=e.next;do{var n=r,i=n.destroy;if(n=n.tag,i!==void 0)if((n&4)!==0)hg(t,r);else{n=t;try{i()}catch(o){Pr(n,o)}}r=r.next}while(r!==e)}break;case 1:if(Gp(t),e=t.stateNode,typeof e.componentWillUnmount=="function")try{e.props=t.memoizedProps,e.state=t.memoizedState,e.componentWillUnmount()}catch(o){Pr(t,o)}break;case 5:Gp(t);break;case 4:ag(e,t)}}function Qp(e){e.alternate=null,e.child=null,e.dependencies=null,e.firstEffect=null,e.lastEffect=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.return=null,e.updateQueue=null}function Jp(e){return e.tag===5||e.tag===3||e.tag===4}function Zp(e){e:{for(var t=e.return;t!==null;){if(Jp(t))break e;t=t.return}throw Error(N(160))}var r=t;switch(t=r.stateNode,r.tag){case 5:var n=!1;break;case 3:t=t.containerInfo,n=!0;break;case 4:t=t.containerInfo,n=!0;break;default:throw Error(N(161))}r.flags&16&&(ro(t,""),r.flags&=-17);e:t:for(r=e;;){for(;r.sibling===null;){if(r.return===null||Jp(r.return)){r=null;break e}r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue t;r.child.return=r,r=r.child}if(!(r.flags&2)){r=r.stateNode;break e}}n?qu(e,r,t):Qu(e,r,t)}function qu(e,t,r){var n=e.tag,i=n===5||n===6;if(i)e=i?e.stateNode:e.stateNode.instance,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=Ha));else if(n!==4&&(e=e.child,e!==null))for(qu(e,t,r),e=e.sibling;e!==null;)qu(e,t,r),e=e.sibling}function Qu(e,t,r){var n=e.tag,i=n===5||n===6;if(i)e=i?e.stateNode:e.stateNode.instance,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(Qu(e,t,r),e=e.sibling;e!==null;)Qu(e,t,r),e=e.sibling}function ag(e,t){for(var r=t,n=!1,i,o;;){if(!n){n=r.return;e:for(;;){if(n===null)throw Error(N(160));switch(i=n.stateNode,n.tag){case 5:o=!1;break e;case 3:i=i.containerInfo,o=!0;break e;case 4:i=i.containerInfo,o=!0;break e}n=n.return}n=!0}if(r.tag===5||r.tag===6){e:for(var a=e,l=r,s=l;;)if(qp(a,s),s.child!==null&&s.tag!==4)s.child.return=s,s=s.child;else{if(s===l)break e;for(;s.sibling===null;){if(s.return===null||s.return===l)break e;s=s.return}s.sibling.return=s.return,s=s.sibling}o?(a=i,l=r.stateNode,a.nodeType===8?a.parentNode.removeChild(l):a.removeChild(l)):i.removeChild(r.stateNode)}else if(r.tag===4){if(r.child!==null){i=r.stateNode.containerInfo,o=!0,r.child.return=r,r=r.child;continue}}else if(qp(e,r),r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return,r.tag===4&&(n=!1)}r.sibling.return=r.return,r=r.sibling}}function qs(e,t){switch(t.tag){case 0:case 11:case 14:case 15:case 22:var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var n=r=r.next;do(n.tag&3)===3&&(e=n.destroy,n.destroy=void 0,e!==void 0&&e()),n=n.next;while(n!==r)}return;case 1:return;case 5:if(r=t.stateNode,r!=null){n=t.memoizedProps;var i=e!==null?e.memoizedProps:n;e=t.type;var o=t.updateQueue;if(t.updateQueue=null,o!==null){for(r[Va]=n,e==="input"&&n.type==="radio"&&n.name!=null&&Gm(r,n),Ou(e,i),t=Ou(e,n),i=0;i<o.length;i+=2){var a=o[i],l=o[i+1];a==="style"?Zm(r,l):a==="dangerouslySetInnerHTML"?Qm(r,l):a==="children"?ro(r,l):Kc(r,a,l,t)}switch(e){case"input":Su(r,n);break;case"textarea":Ym(r,n);break;case"select":e=r._wrapperState.wasMultiple,r._wrapperState.wasMultiple=!!n.multiple,o=n.value,o!=null?zn(r,!!n.multiple,o,!1):e!==!!n.multiple&&(n.defaultValue!=null?zn(r,!!n.multiple,n.defaultValue,!0):zn(r,!!n.multiple,n.multiple?[]:"",!1))}}}return;case 6:if(t.stateNode===null)throw Error(N(162));t.stateNode.nodeValue=t.memoizedProps;return;case 3:r=t.stateNode,r.hydrate&&(r.hydrate=!1,u0(r.containerInfo));return;case 12:return;case 13:t.memoizedState!==null&&(Od=Ke(),Yp(t.child,!0)),eh(t);return;case 19:eh(t);return;case 17:return;case 23:case 24:Yp(t,t.memoizedState!==null);return}throw Error(N(163))}function eh(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new wx),t.forEach(function(n){var i=Mx.bind(null,e,n);r.has(n)||(r.add(n),n.then(i,i))})}}function kx(e,t){return e!==null&&(e=e.memoizedState,e===null||e.dehydrated!==null)?(t=t.memoizedState,t!==null&&t.dehydrated===null):!1}var Cx=Math.ceil,il=dn.ReactCurrentDispatcher,$d=dn.ReactCurrentOwner,F=0,Je=null,$e=null,Ge=0,on=0,Ju=Ur(0),Ie=0,Ll=null,si=0,No=0,ui=0,Pd=0,Zu=null,Od=0,ec=1/0;function ci(){ec=Ke()+500}var L=null,ol=!1,tc=null,Dt=null,Ar=!1,Yi=null,Ai=90,rc=[],nc=[],Zt=null,qi=0,ic=null,Ea=-1,qt=0,$a=0,Qi=null,Pa=!1;function st(){return(F&48)!==0?Ke():Ea!==-1?Ea:Ea=Ke()}function Er(e){if(e=e.mode,(e&2)===0)return 1;if((e&4)===0)return Jn()===99?1:2;if(qt===0&&(qt=si),dx.transition!==0){$a!==0&&($a=Zu!==null?Zu.pendingLanes:0),e=qt;var t=4186112&~$a;return t&=-t,t===0&&(e=4186112&~e,t=e&-e,t===0&&(t=8192)),t}return e=Jn(),(F&4)!==0&&e===98?e=Ua(12,qt):(e=hy(e),e=Ua(e,qt)),e}function $r(e,t,r){if(50<qi)throw qi=0,ic=null,Error(N(185));if(e=Al(e,t),e===null)return null;Ol(e,t,r),e===Je&&(ui|=t,Ie===4&&Bn(e,Ge));var n=Jn();t===1?(F&8)!==0&&(F&48)===0?oc(e):(xt(e,r),F===0&&(ci(),Vt())):((F&4)===0||n!==98&&n!==99||(Zt===null?Zt=new Set([e]):Zt.add(e)),xt(e,r)),Zu=e}function Al(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}function xt(e,t){for(var r=e.callbackNode,n=e.suspendedLanes,i=e.pingedLanes,o=e.expirationTimes,a=e.pendingLanes;0<a;){var l=31-zr(a),s=1<<l,c=o[l];if(c===-1){if((s&n)===0||(s&i)!==0){c=t,_n(s);var d=se;o[l]=10<=d?c+250:6<=d?c+5e3:-1}}else c<=t&&(e.expiredLanes|=s);a&=~s}if(n=ao(e,e===Je?Ge:0),t=se,n===0)r!==null&&(r!==Vs&&Fu(r),e.callbackNode=null,e.callbackPriority=0);else{if(r!==null){if(e.callbackPriority===t)return;r!==Vs&&Fu(r)}t===15?(r=oc.bind(null,e),Yt===null?(Yt=[r],_a=md(jl,I0)):Yt.push(r),r=Vs):t===14?r=co(99,oc.bind(null,e)):(r=my(t),r=co(r,lg.bind(null,e))),e.callbackPriority=t,e.callbackNode=r}}function lg(e){if(Ea=-1,$a=qt=0,(F&48)!==0)throw Error(N(327));var t=e.callbackNode;if(Wr()&&e.callbackNode!==t)return null;var r=ao(e,e===Je?Ge:0);if(r===0)return null;var n=r,i=F;F|=16;var o=dg();(Je!==e||Ge!==n)&&(ci(),Un(e,n));do try{$x();break}catch(l){cg(e,l)}while(1);if(gd(),il.current=o,F=i,$e!==null?n=0:(Je=null,Ge=0,n=Ie),(si&ui)!==0)Un(e,0);else if(n!==0){if(n===2&&(F|=64,e.hydrate&&(e.hydrate=!1,pd(e.containerInfo)),r=g0(e),r!==0&&(n=Ii(e,r))),n===1)throw t=Ll,Un(e,0),Bn(e,r),xt(e,Ke()),t;switch(e.finishedWork=e.current.alternate,e.finishedLanes=r,n){case 0:case 1:throw Error(N(345));case 2:Kr(e);break;case 3:if(Bn(e,r),(r&62914560)===r&&(n=Od+500-Ke(),10<n)){if(ao(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){st(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=bp(Kr.bind(null,e),n);break}Kr(e);break;case 4:if(Bn(e,r),(r&4186112)===r)break;for(n=e.eventTimes,i=-1;0<r;){var a=31-zr(r);o=1<<a,a=n[a],a>i&&(i=a),r&=~o}if(r=i,r=Ke()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Cx(r/1960))-r,10<r){e.timeoutHandle=bp(Kr.bind(null,e),r);break}Kr(e);break;case 5:Kr(e);break;default:throw Error(N(329))}}return xt(e,Ke()),e.callbackNode===t?lg.bind(null,e):null}function Bn(e,t){for(t&=~Pd,t&=~ui,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-zr(t),n=1<<r;e[r]=-1,t&=~n}}function oc(e){if((F&48)!==0)throw Error(N(327));if(Wr(),e===Je&&(e.expiredLanes&Ge)!==0){var t=Ge,r=Ii(e,t);(si&ui)!==0&&(t=ao(e,t),r=Ii(e,t))}else t=ao(e,0),r=Ii(e,t);if(e.tag!==0&&r===2&&(F|=64,e.hydrate&&(e.hydrate=!1,pd(e.containerInfo)),t=g0(e),t!==0&&(r=Ii(e,t))),r===1)throw r=Ll,Un(e,0),Bn(e,t),xt(e,Ke()),r;return e.finishedWork=e.current.alternate,e.finishedLanes=t,Kr(e),xt(e,Ke()),null}function _x(){if(Zt!==null){var e=Zt;Zt=null,e.forEach(function(t){t.expiredLanes|=24&t.pendingLanes,xt(t,Ke())})}Vt()}function sg(e,t){var r=F;F|=1;try{return e(t)}finally{F=r,F===0&&(ci(),Vt())}}function ug(e,t){var r=F;F&=-2,F|=8;try{return e(t)}finally{F=r,F===0&&(ci(),Vt())}}function sa(e,t){xe(Ju,on),on|=t,si|=t}function Nd(){on=Ju.current,ce(Ju)}function Un(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,ox(r)),$e!==null)for(r=$e.return;r!==null;){var n=r;switch(n.tag){case 1:n=n.type.childContextTypes,n!=null&&Ka();break;case 3:Zn(),ce(it),ce(Ye),wd();break;case 5:xd(n);break;case 4:Zn();break;case 13:ce(ye);break;case 19:ce(ye);break;case 10:vd(n);break;case 23:case 24:Nd()}r=r.return}Je=e,$e=Ir(e.current,null),Ge=on=si=t,Ie=0,Ll=null,Pd=ui=No=0}function cg(e,t){do{var r=$e;try{if(gd(),Xi.current=nl,Za){for(var n=be.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}Za=!1}if(mo=0,Le=He=be=null,Gi=!1,$d.current=null,r===null||r.return===null){Ie=1,Ll=t,$e=null;break}e:{var o=e,a=r.return,l=r,s=t;if(t=Ge,l.flags|=2048,l.firstEffect=l.lastEffect=null,s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=s;if((l.mode&2)===0){var d=l.alternate;d?(l.updateQueue=d.updateQueue,l.memoizedState=d.memoizedState,l.lanes=d.lanes):(l.updateQueue=null,l.memoizedState=null)}var f=(ye.current&1)!==0,m=a;do{var y;if(y=m.tag===13){var x=m.memoizedState;if(x!==null)y=x.dehydrated!==null;else{var v=m.memoizedProps;y=v.fallback===void 0?!1:v.unstable_avoidThisFallback!==!0?!0:!f}}if(y){var p=m.updateQueue;if(p===null){var h=new Set;h.add(c),m.updateQueue=h}else p.add(c);if((m.mode&2)===0){if(m.flags|=64,l.flags|=16384,l.flags&=-2981,l.tag===1)if(l.alternate===null)l.tag=17;else{var g=Cr(-1,1);g.tag=2,_r(l,g)}l.lanes|=1;break e}s=void 0,l=t;var w=o.pingCache;if(w===null?(w=o.pingCache=new xx,s=new Set,w.set(c,s)):(s=w.get(c),s===void 0&&(s=new Set,w.set(c,s))),!s.has(l)){s.add(l);var S=Rx.bind(null,o,c,l);c.then(S,S)}m.flags|=4096,m.lanes=t;break e}m=m.return}while(m!==null);s=Error((jn(l.type)||"A React component")+` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`)}Ie!==5&&(Ie=2),s=Ed(s,l),m=a;do{switch(m.tag){case 3:o=s,m.flags|=4096,t&=-t,m.lanes|=t;var _=ig(m,o,t);Pp(m,_);break e;case 1:o=s;var E=m.type,O=m.stateNode;if((m.flags&64)===0&&(typeof E.getDerivedStateFromError=="function"||O!==null&&typeof O.componentDidCatch=="function"&&(Dt===null||!Dt.has(O)))){m.flags|=4096,t&=-t,m.lanes|=t;var z=og(m,o,t);Pp(m,z);break e}}m=m.return}while(m!==null)}pg(r)}catch(T){t=T,$e===r&&r!==null&&($e=r=r.return);continue}break}while(1)}function dg(){var e=il.current;return il.current=nl,e===null?nl:e}function Ii(e,t){var r=F;F|=16;var n=dg();Je===e&&Ge===t||Un(e,t);do try{Ex();break}catch(i){cg(e,i)}while(1);if(gd(),F=r,il.current=n,$e!==null)throw Error(N(261));return Je=null,Ge=0,Ie}function Ex(){for(;$e!==null;)fg($e)}function $x(){for(;$e!==null&&!sx();)fg($e)}function fg(e){var t=mg(e.alternate,e,on);e.memoizedProps=e.pendingProps,t===null?pg(e):$e=t,$d.current=null}function pg(e){var t=e;do{var r=t.alternate;if(e=t.return,(t.flags&2048)===0){if(r=vx(r,t,on),r!==null){$e=r;return}if(r=t,r.tag!==24&&r.tag!==23||r.memoizedState===null||(on&1073741824)!==0||(r.mode&4)===0){for(var n=0,i=r.child;i!==null;)n|=i.lanes|i.childLanes,i=i.sibling;r.childLanes=n}e!==null&&(e.flags&2048)===0&&(e.firstEffect===null&&(e.firstEffect=t.firstEffect),t.lastEffect!==null&&(e.lastEffect!==null&&(e.lastEffect.nextEffect=t.firstEffect),e.lastEffect=t.lastEffect),1<t.flags&&(e.lastEffect!==null?e.lastEffect.nextEffect=t:e.firstEffect=t,e.lastEffect=t))}else{if(r=yx(t),r!==null){r.flags&=2047,$e=r;return}e!==null&&(e.firstEffect=e.lastEffect=null,e.flags|=2048)}if(t=t.sibling,t!==null){$e=t;return}$e=t=e}while(t!==null);Ie===0&&(Ie=5)}function Kr(e){var t=Jn();return nn(99,Px.bind(null,e,t)),null}function Px(e,t){do Wr();while(Yi!==null);if((F&48)!==0)throw Error(N(327));var r=e.finishedWork;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(N(177));e.callbackNode=null;var n=r.lanes|r.childLanes,i=n,o=e.pendingLanes&~i;e.pendingLanes=i,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=i,e.mutableReadLanes&=i,e.entangledLanes&=i,i=e.entanglements;for(var a=e.eventTimes,l=e.expirationTimes;0<o;){var s=31-zr(o),c=1<<s;i[s]=0,a[s]=-1,l[s]=-1,o&=~c}if(Zt!==null&&(n&24)===0&&Zt.has(e)&&Zt.delete(e),e===Je&&($e=Je=null,Ge=0),1<r.flags?r.lastEffect!==null?(r.lastEffect.nextEffect=r,n=r.firstEffect):n=r:n=r.firstEffect,n!==null){if(i=F,F|=32,$d.current=null,Us=ba,a=hp(),zu(a)){if("selectionStart"in a)l={start:a.selectionStart,end:a.selectionEnd};else e:if(l=(l=a.ownerDocument)&&l.defaultView||window,(c=l.getSelection&&l.getSelection())&&c.rangeCount!==0){l=c.anchorNode,o=c.anchorOffset,s=c.focusNode,c=c.focusOffset;try{l.nodeType,s.nodeType}catch{l=null;break e}var d=0,f=-1,m=-1,y=0,x=0,v=a,p=null;t:for(;;){for(var h;v!==l||o!==0&&v.nodeType!==3||(f=d+o),v!==s||c!==0&&v.nodeType!==3||(m=d+c),v.nodeType===3&&(d+=v.nodeValue.length),(h=v.firstChild)!==null;)p=v,v=h;for(;;){if(v===a)break t;if(p===l&&++y===o&&(f=d),p===s&&++x===c&&(m=d),(h=v.nextSibling)!==null)break;v=p,p=v.parentNode}v=h}l=f===-1||m===-1?null:{start:f,end:m}}else l=null;l=l||{start:0,end:0}}else l=null;Ws={focusedElem:a,selectionRange:l},ba=!1,Qi=null,Pa=!1,L=n;do try{Ox()}catch(T){if(L===null)throw Error(N(330));Pr(L,T),L=L.nextEffect}while(L!==null);Qi=null,L=n;do try{for(a=e;L!==null;){var g=L.flags;if(g&16&&ro(L.stateNode,""),g&128){var w=L.alternate;if(w!==null){var S=w.ref;S!==null&&(typeof S=="function"?S(null):S.current=null)}}switch(g&1038){case 2:Zp(L),L.flags&=-3;break;case 6:Zp(L),L.flags&=-3,qs(L.alternate,L);break;case 1024:L.flags&=-1025;break;case 1028:L.flags&=-1025,qs(L.alternate,L);break;case 4:qs(L.alternate,L);break;case 8:l=L,ag(a,l);var _=l.alternate;Qp(l),_!==null&&Qp(_)}L=L.nextEffect}}catch(T){if(L===null)throw Error(N(330));Pr(L,T),L=L.nextEffect}while(L!==null);if(S=Ws,w=hp(),g=S.focusedElem,a=S.selectionRange,w!==g&&g&&g.ownerDocument&&C0(g.ownerDocument.documentElement,g)){for(a!==null&&zu(g)&&(w=a.start,S=a.end,S===void 0&&(S=w),"selectionStart"in g?(g.selectionStart=w,g.selectionEnd=Math.min(S,g.value.length)):(S=(w=g.ownerDocument||document)&&w.defaultView||window,S.getSelection&&(S=S.getSelection(),l=g.textContent.length,_=Math.min(a.start,l),a=a.end===void 0?_:Math.min(a.end,l),!S.extend&&_>a&&(l=a,a=_,_=l),l=pp(g,_),o=pp(g,a),l&&o&&(S.rangeCount!==1||S.anchorNode!==l.node||S.anchorOffset!==l.offset||S.focusNode!==o.node||S.focusOffset!==o.offset)&&(w=w.createRange(),w.setStart(l.node,l.offset),S.removeAllRanges(),_>a?(S.addRange(w),S.extend(o.node,o.offset)):(w.setEnd(o.node,o.offset),S.addRange(w)))))),w=[],S=g;S=S.parentNode;)S.nodeType===1&&w.push({element:S,left:S.scrollLeft,top:S.scrollTop});for(typeof g.focus=="function"&&g.focus(),g=0;g<w.length;g++)S=w[g],S.element.scrollLeft=S.left,S.element.scrollTop=S.top}ba=!!Us,Ws=Us=null,e.current=r,L=n;do try{for(g=e;L!==null;){var E=L.flags;if(E&36&&Sx(g,L.alternate,L),E&128){w=void 0;var O=L.ref;if(O!==null){var z=L.stateNode;switch(L.tag){case 5:w=z;break;default:w=z}typeof O=="function"?O(w):O.current=w}}L=L.nextEffect}}catch(T){if(L===null)throw Error(N(330));Pr(L,T),L=L.nextEffect}while(L!==null);L=null,cx(),F=i}else e.current=r;if(Ar)Ar=!1,Yi=e,Ai=t;else for(L=n;L!==null;)t=L.nextEffect,L.nextEffect=null,L.flags&8&&(E=L,E.sibling=null,E.stateNode=null),L=t;if(n=e.pendingLanes,n===0&&(Dt=null),n===1?e===ic?qi++:(qi=0,ic=e):qi=0,r=r.stateNode,en&&typeof en.onCommitFiberRoot=="function")try{en.onCommitFiberRoot(hd,r,void 0,(r.current.flags&64)===64)}catch{}if(xt(e,Ke()),ol)throw ol=!1,e=tc,tc=null,e;return(F&8)!==0||Vt(),null}function Ox(){for(;L!==null;){var e=L.alternate;Pa||Qi===null||((L.flags&8)!==0?Zf(L,Qi)&&(Pa=!0):L.tag===13&&kx(e,L)&&Zf(L,Qi)&&(Pa=!0));var t=L.flags;(t&256)!==0&&bx(e,L),(t&512)===0||Ar||(Ar=!0,co(97,function(){return Wr(),null})),L=L.nextEffect}}function Wr(){if(Ai!==90){var e=97<Ai?97:Ai;return Ai=90,nn(e,Tx)}return!1}function Nx(e,t){rc.push(t,e),Ar||(Ar=!0,co(97,function(){return Wr(),null}))}function hg(e,t){nc.push(t,e),Ar||(Ar=!0,co(97,function(){return Wr(),null}))}function Tx(){if(Yi===null)return!1;var e=Yi;if(Yi=null,(F&48)!==0)throw Error(N(331));var t=F;F|=32;var r=nc;nc=[];for(var n=0;n<r.length;n+=2){var i=r[n],o=r[n+1],a=i.destroy;if(i.destroy=void 0,typeof a=="function")try{a()}catch(s){if(o===null)throw Error(N(330));Pr(o,s)}}for(r=rc,rc=[],n=0;n<r.length;n+=2){i=r[n],o=r[n+1];try{var l=i.create;i.destroy=l()}catch(s){if(o===null)throw Error(N(330));Pr(o,s)}}for(l=e.current.firstEffect;l!==null;)e=l.nextEffect,l.nextEffect=null,l.flags&8&&(l.sibling=null,l.stateNode=null),l=e;return F=t,Vt(),!0}function th(e,t,r){t=Ed(r,t),t=ig(e,t,1),_r(e,t),t=st(),e=Al(e,1),e!==null&&(Ol(e,1,t),xt(e,t))}function Pr(e,t){if(e.tag===3)th(e,e,t);else for(var r=e.return;r!==null;){if(r.tag===3){th(r,e,t);break}else if(r.tag===1){var n=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Dt===null||!Dt.has(n))){e=Ed(t,e);var i=og(r,e,1);if(_r(r,i),i=st(),r=Al(r,1),r!==null)Ol(r,1,i),xt(r,i);else if(typeof n.componentDidCatch=="function"&&(Dt===null||!Dt.has(n)))try{n.componentDidCatch(t,e)}catch{}break}}r=r.return}}function Rx(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=st(),e.pingedLanes|=e.suspendedLanes&r,Je===e&&(Ge&r)===r&&(Ie===4||Ie===3&&(Ge&62914560)===Ge&&500>Ke()-Od?Un(e,0):Pd|=r),xt(e,t)}function Mx(e,t){var r=e.stateNode;r!==null&&r.delete(t),t=0,t===0&&(t=e.mode,(t&2)===0?t=1:(t&4)===0?t=Jn()===99?1:2:(qt===0&&(qt=si),t=En(62914560&~qt),t===0&&(t=4194304))),r=st(),e=Al(e,t),e!==null&&(Ol(e,t,r),xt(e,r))}var mg;mg=function(e,t,r){var n=t.lanes;if(e!==null)if(e.memoizedProps!==t.pendingProps||it.current)Ot=!0;else if((r&n)!==0)Ot=(e.flags&16384)!==0;else{switch(Ot=!1,t.tag){case 3:Bp(t),Xs();break;case 5:Rp(t);break;case 1:ot(t.type)&&Ca(t);break;case 4:Wu(t,t.stateNode.containerInfo);break;case 10:n=t.memoizedProps.value;var i=t.type._context;xe(Xa,i._currentValue),i._currentValue=n;break;case 13:if(t.memoizedState!==null)return(r&t.child.childLanes)!==0?Up(e,t,r):(xe(ye,ye.current&1),t=Jt(e,t,r),t!==null?t.sibling:null);xe(ye,ye.current&1);break;case 19:if(n=(r&t.childLanes)!==0,(e.flags&64)!==0){if(n)return Xp(e,t,r);t.flags|=64}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),xe(ye,ye.current),n)break;return null;case 23:case 24:return t.lanes=0,Gs(e,t,r)}return Jt(e,t,r)}else Ot=!1;switch(t.lanes=0,t.tag){case 2:if(n=t.type,e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2),e=t.pendingProps,i=Qn(t,Ye.current),Dn(t,r),i=Sd(null,t,n,e,i,r),t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0){if(t.tag=1,t.memoizedState=null,t.updateQueue=null,ot(n)){var o=!0;Ca(t)}else o=!1;t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,yd(t);var a=n.getDerivedStateFromProps;typeof a=="function"&&qa(t,n,a,e),i.updater=zl,t.stateNode=i,i._reactInternals=t,Uu(t,n,e,r),t=Xu(null,t,n,!0,o,r)}else t.tag=0,nt(null,t,i,r),t=t.child;return t;case 16:i=t.elementType;e:{switch(e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2),e=t.pendingProps,o=i._init,i=o(i._payload),t.type=i,o=t.tag=zx(i),e=$t(i,e),o){case 0:t=Ku(null,t,i,e,r);break e;case 1:t=Fp(null,t,i,e,r);break e;case 11:t=Ip(null,t,i,e,r);break e;case 14:t=Dp(null,t,i,$t(i.type,e),n,r);break e}throw Error(N(306,i,""))}return t;case 0:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:$t(n,i),Ku(e,t,n,i,r);case 1:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:$t(n,i),Fp(e,t,n,i,r);case 3:if(Bp(t),n=t.updateQueue,e===null||n===null)throw Error(N(282));if(n=t.pendingProps,i=t.memoizedState,i=i!==null?i.element:null,F0(e,t),fo(t,n,null,r),n=t.memoizedState.element,n===i)Xs(),t=Jt(e,t,r);else{if(i=t.stateNode,(o=i.hydrate)&&(yr=In(t.stateNode.containerInfo.firstChild),Qt=t,o=Bt=!0),o){if(e=i.mutableSourceEagerHydrationData,e!=null)for(i=0;i<e.length;i+=2)o=e[i],o._workInProgressVersionPrimary=e[i+1],Fn.push(o);for(r=H0(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|1024,r=r.sibling}else nt(e,t,n,r),Xs();t=t.child}return t;case 5:return Rp(t),e===null&&Hu(t),n=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,Iu(n,i)?a=null:o!==null&&Iu(n,o)&&(t.flags|=16),eg(e,t),nt(e,t,a,r),t.child;case 6:return e===null&&Hu(t),null;case 13:return Up(e,t,r);case 4:return Wu(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=Qa(t,null,n,r):nt(e,t,n,r),t.child;case 11:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:$t(n,i),Ip(e,t,n,i,r);case 7:return nt(e,t,t.pendingProps,r),t.child;case 8:return nt(e,t,t.pendingProps.children,r),t.child;case 12:return nt(e,t,t.pendingProps.children,r),t.child;case 10:e:{n=t.type._context,i=t.pendingProps,a=t.memoizedProps,o=i.value;var l=t.type._context;if(xe(Xa,l._currentValue),l._currentValue=o,a!==null)if(l=a.value,o=mt(l,o)?0:(typeof n._calculateChangedBits=="function"?n._calculateChangedBits(l,o):1073741823)|0,o===0){if(a.children===i.children&&!it.current){t=Jt(e,t,r);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var s=l.dependencies;if(s!==null){a=l.child;for(var c=s.firstContext;c!==null;){if(c.context===n&&(c.observedBits&o)!==0){l.tag===1&&(c=Cr(-1,r&-r),c.tag=2,_r(l,c)),l.lanes|=r,c=l.alternate,c!==null&&(c.lanes|=r),D0(l.return,r),s.lanes|=r;break}c=c.next}}else a=l.tag===10&&l.type===t.type?null:l.child;if(a!==null)a.return=l;else for(a=l;a!==null;){if(a===t){a=null;break}if(l=a.sibling,l!==null){l.return=a.return,a=l;break}a=a.return}l=a}nt(e,t,i.children,r),t=t.child}return t;case 9:return i=t.type,o=t.pendingProps,n=o.children,Dn(t,r),i=yt(i,o.unstable_observedBits),n=n(i),t.flags|=1,nt(e,t,n,r),t.child;case 14:return i=t.type,o=$t(i,t.pendingProps),o=$t(i.type,o),Dp(e,t,i,o,n,r);case 15:return Z0(e,t,t.type,t.pendingProps,n,r);case 17:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:$t(n,i),e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2),t.tag=1,ot(n)?(e=!0,Ca(t)):e=!1,Dn(t,r),U0(t,n,i),Uu(t,n,i,r),Xu(null,t,n,!0,e,r);case 19:return Xp(e,t,r);case 23:return Gs(e,t,r);case 24:return Gs(e,t,r)}throw Error(N(156,t.tag))};function jx(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.flags=0,this.lastEffect=this.firstEffect=this.nextEffect=null,this.childLanes=this.lanes=0,this.alternate=null}function gt(e,t,r,n){return new jx(e,t,r,n)}function Td(e){return e=e.prototype,!(!e||!e.isReactComponent)}function zx(e){if(typeof e=="function")return Td(e)?1:0;if(e!=null){if(e=e.$$typeof,e===El)return 11;if(e===$l)return 14}return 2}function Ir(e,t){var r=e.alternate;return r===null?(r=gt(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.nextEffect=null,r.firstEffect=null,r.lastEffect=null),r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Oa(e,t,r,n,i,o){var a=2;if(n=e,typeof e=="function")Td(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case pr:return Wn(r.children,i,o,t);case Vm:a=8,i|=16;break;case Xc:a=8,i|=1;break;case Fi:return e=gt(12,r,t,i|8),e.elementType=Fi,e.type=Fi,e.lanes=o,e;case Bi:return e=gt(13,r,t,i),e.type=Bi,e.elementType=Bi,e.lanes=o,e;case Ia:return e=gt(19,r,t,i),e.elementType=Ia,e.lanes=o,e;case Zc:return Rd(r,i,o,t);case wu:return e=gt(24,r,t,i),e.elementType=wu,e.lanes=o,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Gc:a=10;break e;case Yc:a=9;break e;case El:a=11;break e;case $l:a=14;break e;case qc:a=16,n=null;break e;case Qc:a=22;break e}throw Error(N(130,e==null?e:typeof e,""))}return t=gt(a,r,t,i),t.elementType=e,t.type=n,t.lanes=o,t}function Wn(e,t,r,n){return e=gt(7,e,n,t),e.lanes=r,e}function Rd(e,t,r,n){return e=gt(23,e,n,t),e.elementType=Zc,e.lanes=r,e}function Qs(e,t,r){return e=gt(6,e,null,t),e.lanes=r,e}function Js(e,t,r){return t=gt(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Lx(e,t,r){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.pendingContext=this.context=null,this.hydrate=r,this.callbackNode=null,this.callbackPriority=0,this.eventTimes=zs(0),this.expirationTimes=zs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zs(0),this.mutableSourceEagerHydrationData=null}function Ax(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Yr,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function al(e,t,r,n){var i=t.current,o=st(),a=Er(i);e:if(r){r=r._reactInternals;t:{if(fn(r)!==r||r.tag!==1)throw Error(N(170));var l=r;do{switch(l.tag){case 3:l=l.stateNode.context;break t;case 1:if(ot(l.type)){l=l.stateNode.__reactInternalMemoizedMergedChildContext;break t}}l=l.return}while(l!==null);throw Error(N(171))}if(r.tag===1){var s=r.type;if(ot(s)){r=R0(r,s,l);break e}}r=l}else r=Lr;return t.context===null?t.context=r:t.pendingContext=r,t=Cr(o,a),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),_r(i,t),$r(i,a,o),a}function Zs(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function rh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function Md(e,t){rh(e,t),(e=e.alternate)&&rh(e,t)}function Ix(){return null}function jd(e,t,r){var n=r!=null&&r.hydrationOptions!=null&&r.hydrationOptions.mutableSources||null;if(r=new Lx(e,t,r!=null&&r.hydrate===!0),t=gt(3,null,null,t===2?7:t===1?3:0),r.current=t,t.stateNode=r,yd(t),e[li]=r.current,$0(e.nodeType===8?e.parentNode:e),n)for(e=0;e<n.length;e++){t=n[e];var i=t._getVersion;i=i(t._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[t,i]:r.mutableSourceEagerHydrationData.push(t,i)}this._internalRoot=r}jd.prototype.render=function(e){al(e,this._internalRoot,null,null)};jd.prototype.unmount=function(){var e=this._internalRoot,t=e.containerInfo;al(null,e,null,function(){t[li]=null})};function To(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Dx(e,t){if(t||(t=e?e.nodeType===9?e.documentElement:e.firstChild:null,t=!(!t||t.nodeType!==1||!t.hasAttribute("data-reactroot"))),!t)for(var r;r=e.lastChild;)e.removeChild(r);return new jd(e,0,t?{hydrate:!0}:void 0)}function Il(e,t,r,n,i){var o=r._reactRootContainer;if(o){var a=o._internalRoot;if(typeof i=="function"){var l=i;i=function(){var c=Zs(a);l.call(c)}}al(t,a,e,i)}else{if(o=r._reactRootContainer=Dx(r,n),a=o._internalRoot,typeof i=="function"){var s=i;i=function(){var c=Zs(a);s.call(c)}}ug(function(){al(t,a,e,i)})}return Zs(a)}a0=function(e){if(e.tag===13){var t=st();$r(e,4,t),Md(e,4)}};id=function(e){if(e.tag===13){var t=st();$r(e,67108864,t),Md(e,67108864)}};l0=function(e){if(e.tag===13){var t=st(),r=Er(e);$r(e,r,t),Md(e,r)}};s0=function(e,t){return t()};Nu=function(e,t,r){switch(t){case"input":if(Su(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var i=Ml(n);if(!i)throw Error(N(90));Xm(n),Su(n,i)}}}break;case"textarea":Ym(e,r);break;case"select":t=r.value,t!=null&&zn(e,!!r.multiple,t,!1)}};td=sg;r0=function(e,t,r,n,i){var o=F;F|=4;try{return nn(98,e.bind(null,t,r,n,i))}finally{F=o,F===0&&(ci(),Vt())}};rd=function(){(F&49)===0&&(_x(),Wr())};n0=function(e,t){var r=F;F|=2;try{return e(t)}finally{F=r,F===0&&(ci(),Vt())}};function gg(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!To(t))throw Error(N(200));return Ax(e,t,null,r)}var Fx={Events:[Po,Nn,Ml,e0,t0,Wr,{current:!1}]},Ni={findFiberByHostInstance:Qr,bundleType:0,version:"17.0.2",rendererPackageName:"react-dom"},Bx={bundleType:Ni.bundleType,version:Ni.version,rendererPackageName:Ni.rendererPackageName,rendererConfig:Ni.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:dn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=o0(e),e===null?null:e.stateNode},findFiberByHostInstance:Ni.findFiberByHostInstance||Ix,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var ua=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ua.isDisabled&&ua.supportsFiber)try{hd=ua.inject(Bx),en=ua}catch{}}bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Fx;bt.createPortal=gg;bt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(N(188)):Error(N(268,Object.keys(e)));return e=o0(t),e=e===null?null:e.stateNode,e};bt.flushSync=function(e,t){var r=F;if((r&48)!==0)return e(t);F|=1;try{if(e)return nn(99,e.bind(null,t))}finally{F=r,Vt()}};bt.hydrate=function(e,t,r){if(!To(t))throw Error(N(200));return Il(null,e,t,!0,r)};bt.render=function(e,t,r){if(!To(t))throw Error(N(200));return Il(null,e,t,!1,r)};bt.unmountComponentAtNode=function(e){if(!To(e))throw Error(N(40));return e._reactRootContainer?(ug(function(){Il(null,null,e,!1,function(){e._reactRootContainer=null,e[li]=null})}),!0):!1};bt.unstable_batchedUpdates=sg;bt.unstable_createPortal=function(e,t){return gg(e,t,2<arguments.length&&arguments[2]!==void 0?arguments[2]:null)};bt.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!To(r))throw Error(N(200));if(e==null||e._reactInternals===void 0)throw Error(N(38));return Il(e,t,r,!1,n)};bt.version="17.0.2";function vg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(vg)}catch(e){console.error(e)}}vg(),Cl.exports=bt;var yg=Cl.exports,Ux=$m({__proto__:null,default:yg},[Cl.exports]);/**
 * @remix-run/router v1.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function go(){return go=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},go.apply(this,arguments)}var xr;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(xr||(xr={}));const nh="popstate";function Wx(e){e===void 0&&(e={});function t(i,o){let{pathname:a="/",search:l="",hash:s=""}=hn(i.location.hash.substr(1));return!a.startsWith("/")&&!a.startsWith(".")&&(a="/"+a),ac("",{pathname:a,search:l,hash:s},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function r(i,o){let a=i.document.querySelector("base"),l="";if(a&&a.getAttribute("href")){let s=i.location.href,c=s.indexOf("#");l=c===-1?s:s.slice(0,c)}return l+"#"+(typeof o=="string"?o:ll(o))}function n(i,o){zd(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(o)+")")}return Vx(t,r,n,e)}function Se(e,t){if(e===!1||e===null||typeof e=="undefined")throw new Error(t)}function zd(e,t){if(!e){typeof console!="undefined"&&console.warn(t);try{throw new Error(t)}catch{}}}function Hx(){return Math.random().toString(36).substr(2,8)}function ih(e,t){return{usr:e.state,key:e.key,idx:t}}function ac(e,t,r,n){return r===void 0&&(r=null),go({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?hn(t):t,{state:r,key:t&&t.key||n||Hx()})}function ll(e){let{pathname:t="/",search:r="",hash:n=""}=e;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function hn(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}function Vx(e,t,r,n){n===void 0&&(n={});let{window:i=document.defaultView,v5Compat:o=!1}=n,a=i.history,l=xr.Pop,s=null,c=d();c==null&&(c=0,a.replaceState(go({},a.state,{idx:c}),""));function d(){return(a.state||{idx:null}).idx}function f(){l=xr.Pop;let p=d(),h=p==null?null:p-c;c=p,s&&s({action:l,location:v.location,delta:h})}function m(p,h){l=xr.Push;let g=ac(v.location,p,h);r&&r(g,p),c=d()+1;let w=ih(g,c),S=v.createHref(g);try{a.pushState(w,"",S)}catch(_){if(_ instanceof DOMException&&_.name==="DataCloneError")throw _;i.location.assign(S)}o&&s&&s({action:l,location:v.location,delta:1})}function y(p,h){l=xr.Replace;let g=ac(v.location,p,h);r&&r(g,p),c=d();let w=ih(g,c),S=v.createHref(g);a.replaceState(w,"",S),o&&s&&s({action:l,location:v.location,delta:0})}function x(p){let h=i.location.origin!=="null"?i.location.origin:i.location.href,g=typeof p=="string"?p:ll(p);return g=g.replace(/ $/,"%20"),Se(h,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,h)}let v={get action(){return l},get location(){return e(i,a)},listen(p){if(s)throw new Error("A history only accepts one active listener");return i.addEventListener(nh,f),s=p,()=>{i.removeEventListener(nh,f),s=null}},createHref(p){return t(i,p)},createURL:x,encodeLocation(p){let h=x(p);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:m,replace:y,go(p){return a.go(p)}};return v}var oh;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(oh||(oh={}));function Kx(e,t,r){return r===void 0&&(r="/"),Xx(e,t,r,!1)}function Xx(e,t,r,n){let i=typeof t=="string"?hn(t):t,o=Ld(i.pathname||"/",r);if(o==null)return null;let a=xg(e);Gx(a);let l=null;for(let s=0;l==null&&s<a.length;++s){let c=o2(o);l=n2(a[s],c,n)}return l}function xg(e,t,r,n){t===void 0&&(t=[]),r===void 0&&(r=[]),n===void 0&&(n="");let i=(o,a,l)=>{let s={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};s.relativePath.startsWith("/")&&(Se(s.relativePath.startsWith(n),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+n+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(n.length));let c=Or([n,s.relativePath]),d=r.concat(s);o.children&&o.children.length>0&&(Se(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),xg(o.children,t,d,c)),!(o.path==null&&!o.index)&&t.push({path:c,score:t2(c,o.index),routesMeta:d})};return e.forEach((o,a)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))i(o,a);else for(let s of wg(o.path))i(o,a,s)}),t}function wg(e){let t=e.split("/");if(t.length===0)return[];let[r,...n]=t,i=r.endsWith("?"),o=r.replace(/\?$/,"");if(n.length===0)return i?[o,""]:[o];let a=wg(n.join("/")),l=[];return l.push(...a.map(s=>s===""?o:[o,s].join("/"))),i&&l.push(...a),l.map(s=>e.startsWith("/")&&s===""?"/":s)}function Gx(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:r2(t.routesMeta.map(n=>n.childrenIndex),r.routesMeta.map(n=>n.childrenIndex)))}const Yx=/^:[\w-]+$/,qx=3,Qx=2,Jx=1,Zx=10,e2=-2,ah=e=>e==="*";function t2(e,t){let r=e.split("/"),n=r.length;return r.some(ah)&&(n+=e2),t&&(n+=Qx),r.filter(i=>!ah(i)).reduce((i,o)=>i+(Yx.test(o)?qx:o===""?Jx:Zx),n)}function r2(e,t){return e.length===t.length&&e.slice(0,-1).every((n,i)=>n===t[i])?e[e.length-1]-t[t.length-1]:0}function n2(e,t,r){r===void 0&&(r=!1);let{routesMeta:n}=e,i={},o="/",a=[];for(let l=0;l<n.length;++l){let s=n[l],c=l===n.length-1,d=o==="/"?t:t.slice(o.length)||"/",f=lh({path:s.relativePath,caseSensitive:s.caseSensitive,end:c},d),m=s.route;if(!f&&c&&r&&!n[n.length-1].route.index&&(f=lh({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},d)),!f)return null;Object.assign(i,f.params),a.push({params:i,pathname:Or([o,f.pathname]),pathnameBase:u2(Or([o,f.pathnameBase])),route:m}),f.pathnameBase!=="/"&&(o=Or([o,f.pathnameBase]))}return a}function lh(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=i2(e.path,e.caseSensitive,e.end),i=t.match(r);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:n.reduce((c,d,f)=>{let{paramName:m,isOptional:y}=d;if(m==="*"){let v=l[f]||"";a=o.slice(0,o.length-v.length).replace(/(.)\/+$/,"$1")}const x=l[f];return y&&!x?c[m]=void 0:c[m]=(x||"").replace(/%2F/g,"/"),c},{}),pathname:o,pathnameBase:a,pattern:e}}function i2(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!0),zd(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let n=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,l,s)=>(n.push({paramName:l,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(n.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),n]}function o2(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return zd(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Ld(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&n!=="/"?null:e.slice(r)||"/"}function a2(e,t){t===void 0&&(t="/");let{pathname:r,search:n="",hash:i=""}=typeof e=="string"?hn(e):e;return{pathname:r?r.startsWith("/")?r:l2(r,t):t,search:c2(n),hash:d2(i)}}function l2(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?r.length>1&&r.pop():i!=="."&&r.push(i)}),r.length>1?r.join("/"):"/"}function eu(e,t,r,n){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function s2(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function Ad(e,t){let r=s2(e);return t?r.map((n,i)=>i===r.length-1?n.pathname:n.pathnameBase):r.map(n=>n.pathnameBase)}function Id(e,t,r,n){n===void 0&&(n=!1);let i;typeof e=="string"?i=hn(e):(i=go({},e),Se(!i.pathname||!i.pathname.includes("?"),eu("?","pathname","search",i)),Se(!i.pathname||!i.pathname.includes("#"),eu("#","pathname","hash",i)),Se(!i.search||!i.search.includes("#"),eu("#","search","hash",i)));let o=e===""||i.pathname==="",a=o?"/":i.pathname,l;if(a==null)l=r;else{let f=t.length-1;if(!n&&a.startsWith("..")){let m=a.split("/");for(;m[0]==="..";)m.shift(),f-=1;i.pathname=m.join("/")}l=f>=0?t[f]:"/"}let s=a2(i,l),c=a&&a!=="/"&&a.endsWith("/"),d=(o||a===".")&&r.endsWith("/");return!s.pathname.endsWith("/")&&(c||d)&&(s.pathname+="/"),s}const Or=e=>e.join("/").replace(/\/\/+/g,"/"),u2=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),c2=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,d2=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function f2(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const p2=["post","put","patch","delete"];[...p2];/**
 * React Router v6.25.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function vo(){return vo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},vo.apply(this,arguments)}const Dd=k.exports.createContext(null),h2=k.exports.createContext(null),Hr=k.exports.createContext(null),Dl=k.exports.createContext(null),ar=k.exports.createContext({outlet:null,matches:[],isDataRoute:!1}),bg=k.exports.createContext(null);function m2(e,t){let{relative:r}=t===void 0?{}:t;di()||Se(!1);let{basename:n,navigator:i}=k.exports.useContext(Hr),{hash:o,pathname:a,search:l}=kg(e,{relative:r}),s=a;return n!=="/"&&(s=a==="/"?n:Or([n,a])),i.createHref({pathname:s,search:l,hash:o})}function di(){return k.exports.useContext(Dl)!=null}function St(){return di()||Se(!1),k.exports.useContext(Dl).location}function Sg(e){k.exports.useContext(Hr).static||k.exports.useLayoutEffect(e)}function mn(){let{isDataRoute:e}=k.exports.useContext(ar);return e?N2():g2()}function g2(){di()||Se(!1);let e=k.exports.useContext(Dd),{basename:t,future:r,navigator:n}=k.exports.useContext(Hr),{matches:i}=k.exports.useContext(ar),{pathname:o}=St(),a=JSON.stringify(Ad(i,r.v7_relativeSplatPath)),l=k.exports.useRef(!1);return Sg(()=>{l.current=!0}),k.exports.useCallback(function(c,d){if(d===void 0&&(d={}),!l.current)return;if(typeof c=="number"){n.go(c);return}let f=Id(c,JSON.parse(a),o,d.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:Or([t,f.pathname])),(d.replace?n.replace:n.push)(f,d.state,d)},[t,n,a,o,e])}const v2=k.exports.createContext(null);function y2(e){let t=k.exports.useContext(ar).outlet;return t&&k.exports.createElement(v2.Provider,{value:e},t)}function kg(e,t){let{relative:r}=t===void 0?{}:t,{future:n}=k.exports.useContext(Hr),{matches:i}=k.exports.useContext(ar),{pathname:o}=St(),a=JSON.stringify(Ad(i,n.v7_relativeSplatPath));return k.exports.useMemo(()=>Id(e,JSON.parse(a),o,r==="path"),[e,a,o,r])}function x2(e,t){return w2(e,t)}function w2(e,t,r,n){di()||Se(!1);let{navigator:i}=k.exports.useContext(Hr),{matches:o}=k.exports.useContext(ar),a=o[o.length-1],l=a?a.params:{};a&&a.pathname;let s=a?a.pathnameBase:"/";a&&a.route;let c=St(),d;if(t){var f;let p=typeof t=="string"?hn(t):t;s==="/"||((f=p.pathname)==null?void 0:f.startsWith(s))||Se(!1),d=p}else d=c;let m=d.pathname||"/",y=m;if(s!=="/"){let p=s.replace(/^\//,"").split("/"),h=m.replace(/^\//,"").split("/");y="/"+h.slice(p.length).join("/")}let x=Kx(e,{pathname:y}),v=_2(x&&x.map(p=>Object.assign({},p,{params:Object.assign({},l,p.params),pathname:Or([s,i.encodeLocation?i.encodeLocation(p.pathname).pathname:p.pathname]),pathnameBase:p.pathnameBase==="/"?s:Or([s,i.encodeLocation?i.encodeLocation(p.pathnameBase).pathname:p.pathnameBase])})),o,r,n);return t&&v?k.exports.createElement(Dl.Provider,{value:{location:vo({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:xr.Pop}},v):v}function b2(){let e=O2(),t=f2(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return k.exports.createElement(k.exports.Fragment,null,k.exports.createElement("h2",null,"Unexpected Application Error!"),k.exports.createElement("h3",{style:{fontStyle:"italic"}},t),r?k.exports.createElement("pre",{style:i},r):null,o)}const S2=k.exports.createElement(b2,null);class k2 extends k.exports.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error!==void 0?k.exports.createElement(ar.Provider,{value:this.props.routeContext},k.exports.createElement(bg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function C2(e){let{routeContext:t,match:r,children:n}=e,i=k.exports.useContext(Dd);return i&&i.static&&i.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=r.route.id),k.exports.createElement(ar.Provider,{value:t},n)}function _2(e,t,r,n){var i;if(t===void 0&&(t=[]),r===void 0&&(r=null),n===void 0&&(n=null),e==null){var o;if((o=r)!=null&&o.errors)e=r.matches;else return null}let a=e,l=(i=r)==null?void 0:i.errors;if(l!=null){let d=a.findIndex(f=>f.route.id&&(l==null?void 0:l[f.route.id])!==void 0);d>=0||Se(!1),a=a.slice(0,Math.min(a.length,d+1))}let s=!1,c=-1;if(r&&n&&n.v7_partialHydration)for(let d=0;d<a.length;d++){let f=a[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=d),f.route.id){let{loaderData:m,errors:y}=r,x=f.route.loader&&m[f.route.id]===void 0&&(!y||y[f.route.id]===void 0);if(f.route.lazy||x){s=!0,c>=0?a=a.slice(0,c+1):a=[a[0]];break}}}return a.reduceRight((d,f,m)=>{let y,x=!1,v=null,p=null;r&&(y=l&&f.route.id?l[f.route.id]:void 0,v=f.route.errorElement||S2,s&&(c<0&&m===0?(T2("route-fallback",!1),x=!0,p=null):c===m&&(x=!0,p=f.route.hydrateFallbackElement||null)));let h=t.concat(a.slice(0,m+1)),g=()=>{let w;return y?w=v:x?w=p:f.route.Component?w=k.exports.createElement(f.route.Component,null):f.route.element?w=f.route.element:w=d,k.exports.createElement(C2,{match:f,routeContext:{outlet:d,matches:h,isDataRoute:r!=null},children:w})};return r&&(f.route.ErrorBoundary||f.route.errorElement||m===0)?k.exports.createElement(k2,{location:r.location,revalidation:r.revalidation,component:v,error:y,children:g(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):g()},null)}var Cg=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Cg||{}),sl=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(sl||{});function E2(e){let t=k.exports.useContext(Dd);return t||Se(!1),t}function $2(e){let t=k.exports.useContext(h2);return t||Se(!1),t}function P2(e){let t=k.exports.useContext(ar);return t||Se(!1),t}function _g(e){let t=P2(),r=t.matches[t.matches.length-1];return r.route.id||Se(!1),r.route.id}function O2(){var e;let t=k.exports.useContext(bg),r=$2(sl.UseRouteError),n=_g(sl.UseRouteError);return t!==void 0?t:(e=r.errors)==null?void 0:e[n]}function N2(){let{router:e}=E2(Cg.UseNavigateStable),t=_g(sl.UseNavigateStable),r=k.exports.useRef(!1);return Sg(()=>{r.current=!0}),k.exports.useCallback(function(i,o){o===void 0&&(o={}),r.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,vo({fromRouteId:t},o)))},[e,t])}const sh={};function T2(e,t,r){!t&&!sh[e]&&(sh[e]=!0)}const R2="startTransition";eo[R2];function M2(e){let{to:t,replace:r,state:n,relative:i}=e;di()||Se(!1);let{future:o,static:a}=k.exports.useContext(Hr),{matches:l}=k.exports.useContext(ar),{pathname:s}=St(),c=mn(),d=Id(t,Ad(l,o.v7_relativeSplatPath),s,i==="path"),f=JSON.stringify(d);return k.exports.useEffect(()=>c(JSON.parse(f),{replace:r,state:n,relative:i}),[c,f,i,r,n]),null}function Fd(e){return y2(e.context)}function ne(e){Se(!1)}function j2(e){let{basename:t="/",children:r=null,location:n,navigationType:i=xr.Pop,navigator:o,static:a=!1,future:l}=e;di()&&Se(!1);let s=t.replace(/^\/*/,"/"),c=k.exports.useMemo(()=>({basename:s,navigator:o,static:a,future:vo({v7_relativeSplatPath:!1},l)}),[s,l,o,a]);typeof n=="string"&&(n=hn(n));let{pathname:d="/",search:f="",hash:m="",state:y=null,key:x="default"}=n,v=k.exports.useMemo(()=>{let p=Ld(d,s);return p==null?null:{location:{pathname:p,search:f,hash:m,state:y,key:x},navigationType:i}},[s,d,f,m,y,x,i]);return v==null?null:k.exports.createElement(Hr.Provider,{value:c},k.exports.createElement(Dl.Provider,{children:r,value:v}))}function z2(e){let{children:t,location:r}=e;return x2(lc(t),r)}new Promise(()=>{});function lc(e,t){t===void 0&&(t=[]);let r=[];return k.exports.Children.forEach(e,(n,i)=>{if(!k.exports.isValidElement(n))return;let o=[...t,i];if(n.type===k.exports.Fragment){r.push.apply(r,lc(n.props.children,o));return}n.type!==ne&&Se(!1),!n.props.index||!n.props.children||Se(!1);let a={id:n.props.id||o.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(a.children=lc(n.props.children,o)),r.push(a)}),r}/**
 * React Router DOM v6.25.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function sc(){return sc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},sc.apply(this,arguments)}function L2(e,t){if(e==null)return{};var r={},n=Object.keys(e),i,o;for(o=0;o<n.length;o++)i=n[o],!(t.indexOf(i)>=0)&&(r[i]=e[i]);return r}function A2(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function I2(e,t){return e.button===0&&(!t||t==="_self")&&!A2(e)}const D2=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],F2="6";try{window.__reactRouterVersion=F2}catch{}const B2="startTransition",uh=eo[B2],U2="flushSync";Ux[U2];const W2="useId";eo[W2];function H2(e){let{basename:t,children:r,future:n,window:i}=e,o=k.exports.useRef();o.current==null&&(o.current=Wx({window:i,v5Compat:!0}));let a=o.current,[l,s]=k.exports.useState({action:a.action,location:a.location}),{v7_startTransition:c}=n||{},d=k.exports.useCallback(f=>{c&&uh?uh(()=>s(f)):s(f)},[s,c]);return k.exports.useLayoutEffect(()=>a.listen(d),[a,d]),k.exports.createElement(j2,{basename:t,children:r,location:l.location,navigationType:l.action,navigator:a,future:n})}const V2=typeof window!="undefined"&&typeof window.document!="undefined"&&typeof window.document.createElement!="undefined",K2=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,me=k.exports.forwardRef(function(t,r){let{onClick:n,relative:i,reloadDocument:o,replace:a,state:l,target:s,to:c,preventScrollReset:d,unstable_viewTransition:f}=t,m=L2(t,D2),{basename:y}=k.exports.useContext(Hr),x,v=!1;if(typeof c=="string"&&K2.test(c)&&(x=c,V2))try{let w=new URL(window.location.href),S=c.startsWith("//")?new URL(w.protocol+c):new URL(c),_=Ld(S.pathname,y);S.origin===w.origin&&_!=null?c=_+S.search+S.hash:v=!0}catch{}let p=m2(c,{relative:i}),h=X2(c,{replace:a,state:l,target:s,preventScrollReset:d,relative:i,unstable_viewTransition:f});function g(w){n&&n(w),w.defaultPrevented||h(w)}return k.exports.createElement("a",sc({},m,{href:x||p,onClick:v||o?n:g,ref:r,target:s}))});var ch;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(ch||(ch={}));var dh;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(dh||(dh={}));function X2(e,t){let{target:r,replace:n,state:i,preventScrollReset:o,relative:a,unstable_viewTransition:l}=t===void 0?{}:t,s=mn(),c=St(),d=kg(e,{relative:a});return k.exports.useCallback(f=>{if(I2(f,r)){f.preventDefault();let m=n!==void 0?n:ll(c)===ll(d);s(e,{replace:m,state:i,preventScrollReset:o,relative:a,unstable_viewTransition:l})}},[c,s,d,n,i,r,e,o,a,l])}var Bd={exports:{}},ae={};/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fl=60103,Bl=60106,Ro=60107,Mo=60108,jo=60114,zo=60109,Lo=60110,Ao=60112,Io=60113,Ud=60120,Do=60115,Fo=60116,Eg=60121,$g=60122,Pg=60117,Og=60129,Ng=60131;if(typeof Symbol=="function"&&Symbol.for){var ze=Symbol.for;Fl=ze("react.element"),Bl=ze("react.portal"),Ro=ze("react.fragment"),Mo=ze("react.strict_mode"),jo=ze("react.profiler"),zo=ze("react.provider"),Lo=ze("react.context"),Ao=ze("react.forward_ref"),Io=ze("react.suspense"),Ud=ze("react.suspense_list"),Do=ze("react.memo"),Fo=ze("react.lazy"),Eg=ze("react.block"),$g=ze("react.server.block"),Pg=ze("react.fundamental"),Og=ze("react.debug_trace_mode"),Ng=ze("react.legacy_hidden")}function Tt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Fl:switch(e=e.type,e){case Ro:case jo:case Mo:case Io:case Ud:return e;default:switch(e=e&&e.$$typeof,e){case Lo:case Ao:case Fo:case Do:case zo:return e;default:return t}}case Bl:return t}}}var G2=zo,Y2=Fl,q2=Ao,Q2=Ro,J2=Fo,Z2=Do,ew=Bl,tw=jo,rw=Mo,nw=Io;ae.ContextConsumer=Lo;ae.ContextProvider=G2;ae.Element=Y2;ae.ForwardRef=q2;ae.Fragment=Q2;ae.Lazy=J2;ae.Memo=Z2;ae.Portal=ew;ae.Profiler=tw;ae.StrictMode=rw;ae.Suspense=nw;ae.isAsyncMode=function(){return!1};ae.isConcurrentMode=function(){return!1};ae.isContextConsumer=function(e){return Tt(e)===Lo};ae.isContextProvider=function(e){return Tt(e)===zo};ae.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Fl};ae.isForwardRef=function(e){return Tt(e)===Ao};ae.isFragment=function(e){return Tt(e)===Ro};ae.isLazy=function(e){return Tt(e)===Fo};ae.isMemo=function(e){return Tt(e)===Do};ae.isPortal=function(e){return Tt(e)===Bl};ae.isProfiler=function(e){return Tt(e)===jo};ae.isStrictMode=function(e){return Tt(e)===Mo};ae.isSuspense=function(e){return Tt(e)===Io};ae.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Ro||e===jo||e===Og||e===Mo||e===Io||e===Ud||e===Ng||typeof e=="object"&&e!==null&&(e.$$typeof===Fo||e.$$typeof===Do||e.$$typeof===zo||e.$$typeof===Lo||e.$$typeof===Ao||e.$$typeof===Pg||e.$$typeof===Eg||e[0]===$g)};ae.typeOf=Tt;Bd.exports=ae;function iw(e){function t($,P,M,A,C){for(var V=0,R=0,te=0,Z=0,re,U,Re=0,tt=0,X,Be=X=re=0,ee=0,Me=0,vi=0,je=0,Qo=M.length,yi=Qo-1,_t,B="",we="",Ps="",Os="",cr;ee<Qo;){if(U=M.charCodeAt(ee),ee===yi&&R+Z+te+V!==0&&(R!==0&&(U=R===47?10:47),Z=te=V=0,Qo++,yi++),R+Z+te+V===0){if(ee===yi&&(0<Me&&(B=B.replace(m,"")),0<B.trim().length)){switch(U){case 32:case 9:case 59:case 13:case 10:break;default:B+=M.charAt(ee)}U=59}switch(U){case 123:for(B=B.trim(),re=B.charCodeAt(0),X=1,je=++ee;ee<Qo;){switch(U=M.charCodeAt(ee)){case 123:X++;break;case 125:X--;break;case 47:switch(U=M.charCodeAt(ee+1)){case 42:case 47:e:{for(Be=ee+1;Be<yi;++Be)switch(M.charCodeAt(Be)){case 47:if(U===42&&M.charCodeAt(Be-1)===42&&ee+2!==Be){ee=Be+1;break e}break;case 10:if(U===47){ee=Be+1;break e}}ee=Be}}break;case 91:U++;case 40:U++;case 34:case 39:for(;ee++<yi&&M.charCodeAt(ee)!==U;);}if(X===0)break;ee++}switch(X=M.substring(je,ee),re===0&&(re=(B=B.replace(f,"").trim()).charCodeAt(0)),re){case 64:switch(0<Me&&(B=B.replace(m,"")),U=B.charCodeAt(1),U){case 100:case 109:case 115:case 45:Me=P;break;default:Me=Fe}if(X=t(P,Me,X,U,C+1),je=X.length,0<Ee&&(Me=r(Fe,B,vi),cr=l(3,X,Me,P,H,W,je,U,C,A),B=Me.join(""),cr!==void 0&&(je=(X=cr.trim()).length)===0&&(U=0,X="")),0<je)switch(U){case 115:B=B.replace(E,a);case 100:case 109:case 45:X=B+"{"+X+"}";break;case 107:B=B.replace(g,"$1 $2"),X=B+"{"+X+"}",X=le===1||le===2&&o("@"+X,3)?"@-webkit-"+X+"@"+X:"@"+X;break;default:X=B+X,A===112&&(X=(we+=X,""))}else X="";break;default:X=t(P,r(P,B,vi),X,A,C+1)}Ps+=X,X=vi=Me=Be=re=0,B="",U=M.charCodeAt(++ee);break;case 125:case 59:if(B=(0<Me?B.replace(m,""):B).trim(),1<(je=B.length))switch(Be===0&&(re=B.charCodeAt(0),re===45||96<re&&123>re)&&(je=(B=B.replace(" ",":")).length),0<Ee&&(cr=l(1,B,P,$,H,W,we.length,A,C,A))!==void 0&&(je=(B=cr.trim()).length)===0&&(B="\0\0"),re=B.charCodeAt(0),U=B.charCodeAt(1),re){case 0:break;case 64:if(U===105||U===99){Os+=B+M.charAt(ee);break}default:B.charCodeAt(je-1)!==58&&(we+=i(B,re,U,B.charCodeAt(2)))}vi=Me=Be=re=0,B="",U=M.charCodeAt(++ee)}}switch(U){case 13:case 10:R===47?R=0:1+re===0&&A!==107&&0<B.length&&(Me=1,B+="\0"),0<Ee*ur&&l(0,B,P,$,H,W,we.length,A,C,A),W=1,H++;break;case 59:case 125:if(R+Z+te+V===0){W++;break}default:switch(W++,_t=M.charAt(ee),U){case 9:case 32:if(Z+V+R===0)switch(Re){case 44:case 58:case 9:case 32:_t="";break;default:U!==32&&(_t=" ")}break;case 0:_t="\\0";break;case 12:_t="\\f";break;case 11:_t="\\v";break;case 38:Z+R+V===0&&(Me=vi=1,_t="\f"+_t);break;case 108:if(Z+R+V+he===0&&0<Be)switch(ee-Be){case 2:Re===112&&M.charCodeAt(ee-3)===58&&(he=Re);case 8:tt===111&&(he=tt)}break;case 58:Z+R+V===0&&(Be=ee);break;case 44:R+te+Z+V===0&&(Me=1,_t+="\r");break;case 34:case 39:R===0&&(Z=Z===U?0:Z===0?U:Z);break;case 91:Z+R+te===0&&V++;break;case 93:Z+R+te===0&&V--;break;case 41:Z+R+V===0&&te--;break;case 40:if(Z+R+V===0){if(re===0)switch(2*Re+3*tt){case 533:break;default:re=1}te++}break;case 64:R+te+Z+V+Be+X===0&&(X=1);break;case 42:case 47:if(!(0<Z+V+te))switch(R){case 0:switch(2*U+3*M.charCodeAt(ee+1)){case 235:R=47;break;case 220:je=ee,R=42}break;case 42:U===47&&Re===42&&je+2!==ee&&(M.charCodeAt(je+2)===33&&(we+=M.substring(je,ee+1)),_t="",R=0)}}R===0&&(B+=_t)}tt=Re,Re=U,ee++}if(je=we.length,0<je){if(Me=P,0<Ee&&(cr=l(2,we,Me,$,H,W,je,A,C,A),cr!==void 0&&(we=cr).length===0))return Os+we+Ps;if(we=Me.join(",")+"{"+we+"}",le*he!==0){switch(le!==2||o(we,2)||(he=0),he){case 111:we=we.replace(S,":-moz-$1")+we;break;case 112:we=we.replace(w,"::-webkit-input-$1")+we.replace(w,"::-moz-$1")+we.replace(w,":-ms-input-$1")+we}he=0}}return Os+we+Ps}function r($,P,M){var A=P.trim().split(p);P=A;var C=A.length,V=$.length;switch(V){case 0:case 1:var R=0;for($=V===0?"":$[0]+" ";R<C;++R)P[R]=n($,P[R],M).trim();break;default:var te=R=0;for(P=[];R<C;++R)for(var Z=0;Z<V;++Z)P[te++]=n($[Z]+" ",A[R],M).trim()}return P}function n($,P,M){var A=P.charCodeAt(0);switch(33>A&&(A=(P=P.trim()).charCodeAt(0)),A){case 38:return P.replace(h,"$1"+$.trim());case 58:return $.trim()+P.replace(h,"$1"+$.trim());default:if(0<1*M&&0<P.indexOf("\f"))return P.replace(h,($.charCodeAt(0)===58?"":"$1")+$.trim())}return $+P}function i($,P,M,A){var C=$+";",V=2*P+3*M+4*A;if(V===944){$=C.indexOf(":",9)+1;var R=C.substring($,C.length-1).trim();return R=C.substring(0,$).trim()+R+";",le===1||le===2&&o(R,1)?"-webkit-"+R+R:R}if(le===0||le===2&&!o(C,1))return C;switch(V){case 1015:return C.charCodeAt(10)===97?"-webkit-"+C+C:C;case 951:return C.charCodeAt(3)===116?"-webkit-"+C+C:C;case 963:return C.charCodeAt(5)===110?"-webkit-"+C+C:C;case 1009:if(C.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+C+C;case 978:return"-webkit-"+C+"-moz-"+C+C;case 1019:case 983:return"-webkit-"+C+"-moz-"+C+"-ms-"+C+C;case 883:if(C.charCodeAt(8)===45)return"-webkit-"+C+C;if(0<C.indexOf("image-set(",11))return C.replace(G,"$1-webkit-$2")+C;break;case 932:if(C.charCodeAt(4)===45)switch(C.charCodeAt(5)){case 103:return"-webkit-box-"+C.replace("-grow","")+"-webkit-"+C+"-ms-"+C.replace("grow","positive")+C;case 115:return"-webkit-"+C+"-ms-"+C.replace("shrink","negative")+C;case 98:return"-webkit-"+C+"-ms-"+C.replace("basis","preferred-size")+C}return"-webkit-"+C+"-ms-"+C+C;case 964:return"-webkit-"+C+"-ms-flex-"+C+C;case 1023:if(C.charCodeAt(8)!==99)break;return R=C.substring(C.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+R+"-webkit-"+C+"-ms-flex-pack"+R+C;case 1005:return x.test(C)?C.replace(y,":-webkit-")+C.replace(y,":-moz-")+C:C;case 1e3:switch(R=C.substring(13).trim(),P=R.indexOf("-")+1,R.charCodeAt(0)+R.charCodeAt(P)){case 226:R=C.replace(_,"tb");break;case 232:R=C.replace(_,"tb-rl");break;case 220:R=C.replace(_,"lr");break;default:return C}return"-webkit-"+C+"-ms-"+R+C;case 1017:if(C.indexOf("sticky",9)===-1)break;case 975:switch(P=(C=$).length-10,R=(C.charCodeAt(P)===33?C.substring(0,P):C).substring($.indexOf(":",7)+1).trim(),V=R.charCodeAt(0)+(R.charCodeAt(7)|0)){case 203:if(111>R.charCodeAt(8))break;case 115:C=C.replace(R,"-webkit-"+R)+";"+C;break;case 207:case 102:C=C.replace(R,"-webkit-"+(102<V?"inline-":"")+"box")+";"+C.replace(R,"-webkit-"+R)+";"+C.replace(R,"-ms-"+R+"box")+";"+C}return C+";";case 938:if(C.charCodeAt(5)===45)switch(C.charCodeAt(6)){case 105:return R=C.replace("-items",""),"-webkit-"+C+"-webkit-box-"+R+"-ms-flex-"+R+C;case 115:return"-webkit-"+C+"-ms-flex-item-"+C.replace(z,"")+C;default:return"-webkit-"+C+"-ms-flex-line-pack"+C.replace("align-content","").replace(z,"")+C}break;case 973:case 989:if(C.charCodeAt(3)!==45||C.charCodeAt(4)===122)break;case 931:case 953:if(D.test($)===!0)return(R=$.substring($.indexOf(":")+1)).charCodeAt(0)===115?i($.replace("stretch","fill-available"),P,M,A).replace(":fill-available",":stretch"):C.replace(R,"-webkit-"+R)+C.replace(R,"-moz-"+R.replace("fill-",""))+C;break;case 962:if(C="-webkit-"+C+(C.charCodeAt(5)===102?"-ms-"+C:"")+C,M+A===211&&C.charCodeAt(13)===105&&0<C.indexOf("transform",10))return C.substring(0,C.indexOf(";",27)+1).replace(v,"$1-webkit-$2")+C}return C}function o($,P){var M=$.indexOf(P===1?":":"{"),A=$.substring(0,P!==3?M:10);return M=$.substring(M+1,$.length-1),Xt(P!==2?A:A.replace(T,"$1"),M,P)}function a($,P){var M=i(P,P.charCodeAt(0),P.charCodeAt(1),P.charCodeAt(2));return M!==P+";"?M.replace(O," or ($1)").substring(4):"("+P+")"}function l($,P,M,A,C,V,R,te,Z,re){for(var U=0,Re=P,tt;U<Ee;++U)switch(tt=Pe[U].call(d,$,Re,M,A,C,V,R,te,Z,re)){case void 0:case!1:case!0:case null:break;default:Re=tt}if(Re!==P)return Re}function s($){switch($){case void 0:case null:Ee=Pe.length=0;break;default:if(typeof $=="function")Pe[Ee++]=$;else if(typeof $=="object")for(var P=0,M=$.length;P<M;++P)s($[P]);else ur=!!$|0}return s}function c($){return $=$.prefix,$!==void 0&&(Xt=null,$?typeof $!="function"?le=1:(le=2,Xt=$):le=0),c}function d($,P){var M=$;if(33>M.charCodeAt(0)&&(M=M.trim()),j=M,M=[j],0<Ee){var A=l(-1,P,M,M,H,W,0,0,0,0);A!==void 0&&typeof A=="string"&&(P=A)}var C=t(Fe,M,P,0,0);return 0<Ee&&(A=l(-2,C,M,M,H,W,C.length,0,0,0),A!==void 0&&(C=A)),j="",he=0,W=H=1,C}var f=/^\0+/g,m=/[\0\r\f]/g,y=/: */g,x=/zoo|gra/,v=/([,: ])(transform)/g,p=/,\r+?/g,h=/([\t\r\n ])*\f?&/g,g=/@(k\w+)\s*(\S*)\s*/,w=/::(place)/g,S=/:(read-only)/g,_=/[svh]\w+-[tblr]{2}/,E=/\(\s*(.*)\s*\)/g,O=/([\s\S]*?);/g,z=/-self|flex-/g,T=/[^]*?(:[rp][el]a[\w-]+)[^]*/,D=/stretch|:\s*\w+\-(?:conte|avail)/,G=/([^-])(image-set\()/,W=1,H=1,he=0,le=1,Fe=[],Pe=[],Ee=0,Xt=null,ur=0,j="";return d.use=s,d.set=c,e!==void 0&&c(e),d}var ow={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Tg(e){var t=Object.create(null);return function(r){return t[r]===void 0&&(t[r]=e(r)),t[r]}}var aw=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,uc=Tg(function(e){return aw.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),Rg={exports:{}},ie={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Te=typeof Symbol=="function"&&Symbol.for,Wd=Te?Symbol.for("react.element"):60103,Hd=Te?Symbol.for("react.portal"):60106,Ul=Te?Symbol.for("react.fragment"):60107,Wl=Te?Symbol.for("react.strict_mode"):60108,Hl=Te?Symbol.for("react.profiler"):60114,Vl=Te?Symbol.for("react.provider"):60109,Kl=Te?Symbol.for("react.context"):60110,Vd=Te?Symbol.for("react.async_mode"):60111,Xl=Te?Symbol.for("react.concurrent_mode"):60111,Gl=Te?Symbol.for("react.forward_ref"):60112,Yl=Te?Symbol.for("react.suspense"):60113,lw=Te?Symbol.for("react.suspense_list"):60120,ql=Te?Symbol.for("react.memo"):60115,Ql=Te?Symbol.for("react.lazy"):60116,sw=Te?Symbol.for("react.block"):60121,uw=Te?Symbol.for("react.fundamental"):60117,cw=Te?Symbol.for("react.responder"):60118,dw=Te?Symbol.for("react.scope"):60119;function ft(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Wd:switch(e=e.type,e){case Vd:case Xl:case Ul:case Hl:case Wl:case Yl:return e;default:switch(e=e&&e.$$typeof,e){case Kl:case Gl:case Ql:case ql:case Vl:return e;default:return t}}case Hd:return t}}}function Mg(e){return ft(e)===Xl}ie.AsyncMode=Vd;ie.ConcurrentMode=Xl;ie.ContextConsumer=Kl;ie.ContextProvider=Vl;ie.Element=Wd;ie.ForwardRef=Gl;ie.Fragment=Ul;ie.Lazy=Ql;ie.Memo=ql;ie.Portal=Hd;ie.Profiler=Hl;ie.StrictMode=Wl;ie.Suspense=Yl;ie.isAsyncMode=function(e){return Mg(e)||ft(e)===Vd};ie.isConcurrentMode=Mg;ie.isContextConsumer=function(e){return ft(e)===Kl};ie.isContextProvider=function(e){return ft(e)===Vl};ie.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Wd};ie.isForwardRef=function(e){return ft(e)===Gl};ie.isFragment=function(e){return ft(e)===Ul};ie.isLazy=function(e){return ft(e)===Ql};ie.isMemo=function(e){return ft(e)===ql};ie.isPortal=function(e){return ft(e)===Hd};ie.isProfiler=function(e){return ft(e)===Hl};ie.isStrictMode=function(e){return ft(e)===Wl};ie.isSuspense=function(e){return ft(e)===Yl};ie.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Ul||e===Xl||e===Hl||e===Wl||e===Yl||e===lw||typeof e=="object"&&e!==null&&(e.$$typeof===Ql||e.$$typeof===ql||e.$$typeof===Vl||e.$$typeof===Kl||e.$$typeof===Gl||e.$$typeof===uw||e.$$typeof===cw||e.$$typeof===dw||e.$$typeof===sw)};ie.typeOf=ft;Rg.exports=ie;var Kd=Rg.exports,fw={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},pw={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},hw={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},jg={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Xd={};Xd[Kd.ForwardRef]=hw;Xd[Kd.Memo]=jg;function fh(e){return Kd.isMemo(e)?jg:Xd[e.$$typeof]||fw}var mw=Object.defineProperty,gw=Object.getOwnPropertyNames,ph=Object.getOwnPropertySymbols,vw=Object.getOwnPropertyDescriptor,yw=Object.getPrototypeOf,hh=Object.prototype;function zg(e,t,r){if(typeof t!="string"){if(hh){var n=yw(t);n&&n!==hh&&zg(e,n,r)}var i=gw(t);ph&&(i=i.concat(ph(t)));for(var o=fh(e),a=fh(t),l=0;l<i.length;++l){var s=i[l];if(!pw[s]&&!(r&&r[s])&&!(a&&a[s])&&!(o&&o[s])){var c=vw(t,s);try{mw(e,s,c)}catch{}}}}return e}var xw=zg;function Nt(){return(Nt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var mh=function(e,t){for(var r=[e[0]],n=0,i=t.length;n<i;n+=1)r.push(t[n],e[n+1]);return r},cc=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!Bd.exports.typeOf(e)},ul=Object.freeze([]),Nr=Object.freeze({});function ei(e){return typeof e=="function"}function gh(e){return e.displayName||e.name||"Component"}function Gd(e){return e&&typeof e.styledComponentId=="string"}var ti=typeof process!="undefined"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Yd=typeof window!="undefined"&&"HTMLElement"in window,ww=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process!="undefined"&&process.env!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""?{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY:!1)),bw={};function an(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(r.length>0?" Args: "+r.join(", "):""))}var Sw=function(){function e(r){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=r}var t=e.prototype;return t.indexOfGroup=function(r){for(var n=0,i=0;i<r;i++)n+=this.groupSizes[i];return n},t.insertRules=function(r,n){if(r>=this.groupSizes.length){for(var i=this.groupSizes,o=i.length,a=o;r>=a;)(a<<=1)<0&&an(16,""+r);this.groupSizes=new Uint32Array(a),this.groupSizes.set(i),this.length=a;for(var l=o;l<a;l++)this.groupSizes[l]=0}for(var s=this.indexOfGroup(r+1),c=0,d=n.length;c<d;c++)this.tag.insertRule(s,n[c])&&(this.groupSizes[r]++,s++)},t.clearGroup=function(r){if(r<this.length){var n=this.groupSizes[r],i=this.indexOfGroup(r),o=i+n;this.groupSizes[r]=0;for(var a=i;a<o;a++)this.tag.deleteRule(i)}},t.getGroup=function(r){var n="";if(r>=this.length||this.groupSizes[r]===0)return n;for(var i=this.groupSizes[r],o=this.indexOfGroup(r),a=o+i,l=o;l<a;l++)n+=this.tag.getRule(l)+`/*!sc*/
`;return n},e}(),Na=new Map,cl=new Map,Ji=1,ca=function(e){if(Na.has(e))return Na.get(e);for(;cl.has(Ji);)Ji++;var t=Ji++;return Na.set(e,t),cl.set(t,e),t},kw=function(e){return cl.get(e)},Cw=function(e,t){t>=Ji&&(Ji=t+1),Na.set(e,t),cl.set(t,e)},_w="style["+ti+'][data-styled-version="5.3.11"]',Ew=new RegExp("^"+ti+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),$w=function(e,t,r){for(var n,i=r.split(","),o=0,a=i.length;o<a;o++)(n=i[o])&&e.registerName(t,n)},Pw=function(e,t){for(var r=(t.textContent||"").split(`/*!sc*/
`),n=[],i=0,o=r.length;i<o;i++){var a=r[i].trim();if(a){var l=a.match(Ew);if(l){var s=0|parseInt(l[1],10),c=l[2];s!==0&&(Cw(c,s),$w(e,c,l[3]),e.getTag().insertRules(s,n)),n.length=0}else n.push(a)}}},Ow=function(){return typeof __webpack_nonce__!="undefined"?__webpack_nonce__:null},Lg=function(e){var t=document.head,r=e||t,n=document.createElement("style"),i=function(l){for(var s=l.childNodes,c=s.length;c>=0;c--){var d=s[c];if(d&&d.nodeType===1&&d.hasAttribute(ti))return d}}(r),o=i!==void 0?i.nextSibling:null;n.setAttribute(ti,"active"),n.setAttribute("data-styled-version","5.3.11");var a=Ow();return a&&n.setAttribute("nonce",a),r.insertBefore(n,o),n},Nw=function(){function e(r){var n=this.element=Lg(r);n.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var o=document.styleSheets,a=0,l=o.length;a<l;a++){var s=o[a];if(s.ownerNode===i)return s}an(17)}(n),this.length=0}var t=e.prototype;return t.insertRule=function(r,n){try{return this.sheet.insertRule(n,r),this.length++,!0}catch{return!1}},t.deleteRule=function(r){this.sheet.deleteRule(r),this.length--},t.getRule=function(r){var n=this.sheet.cssRules[r];return n!==void 0&&typeof n.cssText=="string"?n.cssText:""},e}(),Tw=function(){function e(r){var n=this.element=Lg(r);this.nodes=n.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(r,n){if(r<=this.length&&r>=0){var i=document.createTextNode(n),o=this.nodes[r];return this.element.insertBefore(i,o||null),this.length++,!0}return!1},t.deleteRule=function(r){this.element.removeChild(this.nodes[r]),this.length--},t.getRule=function(r){return r<this.length?this.nodes[r].textContent:""},e}(),Rw=function(){function e(r){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(r,n){return r<=this.length&&(this.rules.splice(r,0,n),this.length++,!0)},t.deleteRule=function(r){this.rules.splice(r,1),this.length--},t.getRule=function(r){return r<this.length?this.rules[r]:""},e}(),vh=Yd,Mw={isServer:!Yd,useCSSOMInjection:!ww},dl=function(){function e(r,n,i){r===void 0&&(r=Nr),n===void 0&&(n={}),this.options=Nt({},Mw,{},r),this.gs=n,this.names=new Map(i),this.server=!!r.isServer,!this.server&&Yd&&vh&&(vh=!1,function(o){for(var a=document.querySelectorAll(_w),l=0,s=a.length;l<s;l++){var c=a[l];c&&c.getAttribute(ti)!=="active"&&(Pw(o,c),c.parentNode&&c.parentNode.removeChild(c))}}(this))}e.registerId=function(r){return ca(r)};var t=e.prototype;return t.reconstructWithOptions=function(r,n){return n===void 0&&(n=!0),new e(Nt({},this.options,{},r),this.gs,n&&this.names||void 0)},t.allocateGSInstance=function(r){return this.gs[r]=(this.gs[r]||0)+1},t.getTag=function(){return this.tag||(this.tag=(i=(n=this.options).isServer,o=n.useCSSOMInjection,a=n.target,r=i?new Rw(a):o?new Nw(a):new Tw(a),new Sw(r)));var r,n,i,o,a},t.hasNameForId=function(r,n){return this.names.has(r)&&this.names.get(r).has(n)},t.registerName=function(r,n){if(ca(r),this.names.has(r))this.names.get(r).add(n);else{var i=new Set;i.add(n),this.names.set(r,i)}},t.insertRules=function(r,n,i){this.registerName(r,n),this.getTag().insertRules(ca(r),i)},t.clearNames=function(r){this.names.has(r)&&this.names.get(r).clear()},t.clearRules=function(r){this.getTag().clearGroup(ca(r)),this.clearNames(r)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(r){for(var n=r.getTag(),i=n.length,o="",a=0;a<i;a++){var l=kw(a);if(l!==void 0){var s=r.names.get(l),c=n.getGroup(a);if(s&&c&&s.size){var d=ti+".g"+a+'[id="'+l+'"]',f="";s!==void 0&&s.forEach(function(m){m.length>0&&(f+=m+",")}),o+=""+c+d+'{content:"'+f+`"}/*!sc*/
`}}}return o}(this)},e}(),jw=/(a)(d)/gi,yh=function(e){return String.fromCharCode(e+(e>25?39:97))};function dc(e){var t,r="";for(t=Math.abs(e);t>52;t=t/52|0)r=yh(t%52)+r;return(yh(t%52)+r).replace(jw,"$1-$2")}var Mn=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},Ag=function(e){return Mn(5381,e)};function Ig(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(ei(r)&&!Gd(r))return!1}return!0}var zw=Ag("5.3.11"),Lw=function(){function e(t,r,n){this.rules=t,this.staticRulesId="",this.isStatic=(n===void 0||n.isStatic)&&Ig(t),this.componentId=r,this.baseHash=Mn(zw,r),this.baseStyle=n,dl.registerId(r)}return e.prototype.generateAndInjectStyles=function(t,r,n){var i=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(t,r,n)),this.isStatic&&!n.hash)if(this.staticRulesId&&r.hasNameForId(i,this.staticRulesId))o.push(this.staticRulesId);else{var a=ln(this.rules,t,r,n).join(""),l=dc(Mn(this.baseHash,a)>>>0);if(!r.hasNameForId(i,l)){var s=n(a,"."+l,void 0,i);r.insertRules(i,l,s)}o.push(l),this.staticRulesId=l}else{for(var c=this.rules.length,d=Mn(this.baseHash,n.hash),f="",m=0;m<c;m++){var y=this.rules[m];if(typeof y=="string")f+=y;else if(y){var x=ln(y,t,r,n),v=Array.isArray(x)?x.join(""):x;d=Mn(d,v+m),f+=v}}if(f){var p=dc(d>>>0);if(!r.hasNameForId(i,p)){var h=n(f,"."+p,void 0,i);r.insertRules(i,p,h)}o.push(p)}}return o.join(" ")},e}(),Aw=/^\s*\/\/.*$/gm,Iw=[":","[",".","#"];function Dw(e){var t,r,n,i,o=e===void 0?Nr:e,a=o.options,l=a===void 0?Nr:a,s=o.plugins,c=s===void 0?ul:s,d=new iw(l),f=[],m=function(v){function p(h){if(h)try{v(h+"}")}catch{}}return function(h,g,w,S,_,E,O,z,T,D){switch(h){case 1:if(T===0&&g.charCodeAt(0)===64)return v(g+";"),"";break;case 2:if(z===0)return g+"/*|*/";break;case 3:switch(z){case 102:case 112:return v(w[0]+g),"";default:return g+(D===0?"/*|*/":"")}case-2:g.split("/*|*/}").forEach(p)}}}(function(v){f.push(v)}),y=function(v,p,h){return p===0&&Iw.indexOf(h[r.length])!==-1||h.match(i)?v:"."+t};function x(v,p,h,g){g===void 0&&(g="&");var w=v.replace(Aw,""),S=p&&h?h+" "+p+" { "+w+" }":w;return t=g,r=p,n=new RegExp("\\"+r+"\\b","g"),i=new RegExp("(\\"+r+"\\b){2,}"),d(h||!p?"":p,S)}return d.use([].concat(c,[function(v,p,h){v===2&&h.length&&h[0].lastIndexOf(r)>0&&(h[0]=h[0].replace(n,y))},m,function(v){if(v===-2){var p=f;return f=[],p}}])),x.hash=c.length?c.reduce(function(v,p){return p.name||an(15),Mn(v,p.name)},5381).toString():"",x}var Dg=Xe.createContext();Dg.Consumer;var Fg=Xe.createContext(),Fw=(Fg.Consumer,new dl),fc=Dw();function Bg(){return k.exports.useContext(Dg)||Fw}function Ug(){return k.exports.useContext(Fg)||fc}var Bw=function(){function e(t,r){var n=this;this.inject=function(i,o){o===void 0&&(o=fc);var a=n.name+o.hash;i.hasNameForId(n.id,a)||i.insertRules(n.id,a,o(n.rules,a,"@keyframes"))},this.toString=function(){return an(12,String(n.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=r}return e.prototype.getName=function(t){return t===void 0&&(t=fc),this.name+t.hash},e}(),Uw=/([A-Z])/,Ww=/([A-Z])/g,Hw=/^ms-/,Vw=function(e){return"-"+e.toLowerCase()};function xh(e){return Uw.test(e)?e.replace(Ww,Vw).replace(Hw,"-ms-"):e}var wh=function(e){return e==null||e===!1||e===""};function ln(e,t,r,n){if(Array.isArray(e)){for(var i,o=[],a=0,l=e.length;a<l;a+=1)(i=ln(e[a],t,r,n))!==""&&(Array.isArray(i)?o.push.apply(o,i):o.push(i));return o}if(wh(e))return"";if(Gd(e))return"."+e.styledComponentId;if(ei(e)){if(typeof(c=e)!="function"||c.prototype&&c.prototype.isReactComponent||!t)return e;var s=e(t);return ln(s,t,r,n)}var c;return e instanceof Bw?r?(e.inject(r,n),e.getName(n)):e:cc(e)?function d(f,m){var y,x,v=[];for(var p in f)f.hasOwnProperty(p)&&!wh(f[p])&&(Array.isArray(f[p])&&f[p].isCss||ei(f[p])?v.push(xh(p)+":",f[p],";"):cc(f[p])?v.push.apply(v,d(f[p],p)):v.push(xh(p)+": "+(y=p,(x=f[p])==null||typeof x=="boolean"||x===""?"":typeof x!="number"||x===0||y in ow||y.startsWith("--")?String(x).trim():x+"px")+";"));return m?[m+" {"].concat(v,["}"]):v}(e):e.toString()}var bh=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function Qe(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return ei(e)||cc(e)?bh(ln(mh(ul,[e].concat(r)))):r.length===0&&e.length===1&&typeof e[0]=="string"?e:bh(ln(mh(e,r)))}var Wg=function(e,t,r){return r===void 0&&(r=Nr),e.theme!==r.theme&&e.theme||t||r.theme},Kw=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Xw=/(^-|-$)/g;function tu(e){return e.replace(Kw,"-").replace(Xw,"")}var Hg=function(e){return dc(Ag(e)>>>0)};function da(e){return typeof e=="string"&&!0}var pc=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},Gw=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function Yw(e,t,r){var n=e[r];pc(t)&&pc(n)?Vg(n,t):e[r]=t}function Vg(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];for(var i=0,o=r;i<o.length;i++){var a=o[i];if(pc(a))for(var l in a)Gw(l)&&Yw(e,a[l],l)}return e}var yo=Xe.createContext();yo.Consumer;function qw(e){var t=k.exports.useContext(yo),r=k.exports.useMemo(function(){return function(n,i){if(!n)return an(14);if(ei(n)){var o=n(i);return o}return Array.isArray(n)||typeof n!="object"?an(8):i?Nt({},i,{},n):n}(e.theme,t)},[e.theme,t]);return e.children?Xe.createElement(yo.Provider,{value:r},e.children):null}var ru={};function Kg(e,t,r){var n=Gd(e),i=!da(e),o=t.attrs,a=o===void 0?ul:o,l=t.componentId,s=l===void 0?function(g,w){var S=typeof g!="string"?"sc":tu(g);ru[S]=(ru[S]||0)+1;var _=S+"-"+Hg("5.3.11"+S+ru[S]);return w?w+"-"+_:_}(t.displayName,t.parentComponentId):l,c=t.displayName,d=c===void 0?function(g){return da(g)?"styled."+g:"Styled("+gh(g)+")"}(e):c,f=t.displayName&&t.componentId?tu(t.displayName)+"-"+t.componentId:t.componentId||s,m=n&&e.attrs?Array.prototype.concat(e.attrs,a).filter(Boolean):a,y=t.shouldForwardProp;n&&e.shouldForwardProp&&(y=t.shouldForwardProp?function(g,w,S){return e.shouldForwardProp(g,w,S)&&t.shouldForwardProp(g,w,S)}:e.shouldForwardProp);var x,v=new Lw(r,f,n?e.componentStyle:void 0),p=v.isStatic&&a.length===0,h=function(g,w){return function(S,_,E,O){var z=S.attrs,T=S.componentStyle,D=S.defaultProps,G=S.foldedComponentIds,W=S.shouldForwardProp,H=S.styledComponentId,he=S.target,le=function(A,C,V){A===void 0&&(A=Nr);var R=Nt({},C,{theme:A}),te={};return V.forEach(function(Z){var re,U,Re,tt=Z;for(re in ei(tt)&&(tt=tt(R)),tt)R[re]=te[re]=re==="className"?(U=te[re],Re=tt[re],U&&Re?U+" "+Re:U||Re):tt[re]}),[R,te]}(Wg(_,k.exports.useContext(yo),D)||Nr,_,z),Fe=le[0],Pe=le[1],Ee=function(A,C,V,R){var te=Bg(),Z=Ug(),re=C?A.generateAndInjectStyles(Nr,te,Z):A.generateAndInjectStyles(V,te,Z);return re}(T,O,Fe),Xt=E,ur=Pe.$as||_.$as||Pe.as||_.as||he,j=da(ur),$=Pe!==_?Nt({},_,{},Pe):_,P={};for(var M in $)M[0]!=="$"&&M!=="as"&&(M==="forwardedAs"?P.as=$[M]:(W?W(M,uc,ur):!j||uc(M))&&(P[M]=$[M]));return _.style&&Pe.style!==_.style&&(P.style=Nt({},_.style,{},Pe.style)),P.className=Array.prototype.concat(G,H,Ee!==H?Ee:null,_.className,Pe.className).filter(Boolean).join(" "),P.ref=Xt,k.exports.createElement(ur,P)}(x,g,w,p)};return h.displayName=d,(x=Xe.forwardRef(h)).attrs=m,x.componentStyle=v,x.displayName=d,x.shouldForwardProp=y,x.foldedComponentIds=n?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):ul,x.styledComponentId=f,x.target=n?e.target:e,x.withComponent=function(g){var w=t.componentId,S=function(E,O){if(E==null)return{};var z,T,D={},G=Object.keys(E);for(T=0;T<G.length;T++)z=G[T],O.indexOf(z)>=0||(D[z]=E[z]);return D}(t,["componentId"]),_=w&&w+"-"+(da(g)?g:tu(gh(g)));return Kg(g,Nt({},S,{attrs:m,componentId:_}),r)},Object.defineProperty(x,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(g){this._foldedDefaultProps=n?Vg({},e.defaultProps,g):g}}),Object.defineProperty(x,"toString",{value:function(){return"."+x.styledComponentId}}),i&&xw(x,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),x}var hc=function(e){return function t(r,n,i){if(i===void 0&&(i=Nr),!Bd.exports.isValidElementType(n))return an(1,String(n));var o=function(){return r(n,i,Qe.apply(void 0,arguments))};return o.withConfig=function(a){return t(r,n,Nt({},i,{},a))},o.attrs=function(a){return t(r,n,Nt({},i,{attrs:Array.prototype.concat(i.attrs,a).filter(Boolean)}))},o}(Kg,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){hc[e]=hc(e)});var Qw=function(){function e(r,n){this.rules=r,this.componentId=n,this.isStatic=Ig(r),dl.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(r,n,i,o){var a=o(ln(this.rules,n,i,o).join(""),""),l=this.componentId+r;i.insertRules(l,l,a)},t.removeStyles=function(r,n){n.clearRules(this.componentId+r)},t.renderStyles=function(r,n,i,o){r>2&&dl.registerId(this.componentId+r),this.removeStyles(r,i),this.createStyles(r,n,i,o)},e}();function Jw(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];var i=Qe.apply(void 0,[e].concat(r)),o="sc-global-"+Hg(JSON.stringify(i)),a=new Qw(i,o);function l(c){var d=Bg(),f=Ug(),m=k.exports.useContext(yo),y=k.exports.useRef(d.allocateGSInstance(o)).current;return d.server&&s(y,c,d,m,f),k.exports.useLayoutEffect(function(){if(!d.server)return s(y,c,d,m,f),function(){return a.removeStyles(y,d)}},[y,c,d,m,f]),null}function s(c,d,f,m,y){if(a.isStatic)a.renderStyles(c,bw,f,y);else{var x=Nt({},d,{theme:Wg(d,m,l.defaultProps)});a.renderStyles(c,x,f,y)}}return Xe.memo(l)}var I=hc;const Zw=Jw`

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
`,eb={header:"#ffffff",headerDesktop:"#ffffff",body:"#ffffff",bodyDesktop:"#F7F7F8",sideBar:"#efeff1",color:"#9147ff",textColor:"#000",hover:"#0000001a",soft:"#777777",bits:"#e9e9e9",softDesktop:"#555555",border:"#efeff1",darkModeBg:"#dedede",iconColor:"#0e0e10",profit:"#0f0",loss:"$f00"},tb={header:"#0e0e10",headerDesktop:"#18181B",body:"#18181B",bodyDesktop:"#0e0e10",sideBar:"#1f1f23",color:"#9147ff",textColor:"#fcfaff",hover:"#ffffff1a",soft:"#adadb8",bits:"#333333",softDesktop:"#cdcdb8",border:"#ffffff1a",darkModeBg:"#9147ff",iconColor:"#adadb8",profit:"#0f0",loss:"$f00"};var fi={exports:{}},rb="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",nb=rb,ib=nb;function Xg(){}function Gg(){}Gg.resetWarningCache=Xg;var ob=function(){function e(n,i,o,a,l,s){if(s!==ib){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}e.isRequired=e;function t(){return e}var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Gg,resetWarningCache:Xg};return r.PropTypes=r,r};fi.exports=ob();var Dr=Xe.createContext(null);function ab(e){e()}var Yg=ab,lb=function(t){return Yg=t},sb=function(){return Yg};function ub(){var e=sb(),t=null,r=null;return{clear:function(){t=null,r=null},notify:function(){e(function(){for(var i=t;i;)i.callback(),i=i.next})},get:function(){for(var i=[],o=t;o;)i.push(o),o=o.next;return i},subscribe:function(i){var o=!0,a=r={callback:i,next:null,prev:r};return a.prev?a.prev.next=a:t=a,function(){!o||t===null||(o=!1,a.next?a.next.prev=a.prev:r=a.prev,a.prev?a.prev.next=a.next:t=a.next)}}}}var Sh={notify:function(){},get:function(){return[]}};function qg(e,t){var r,n=Sh;function i(f){return s(),n.subscribe(f)}function o(){n.notify()}function a(){d.onStateChange&&d.onStateChange()}function l(){return Boolean(r)}function s(){r||(r=t?t.addNestedSub(a):e.subscribe(a),n=ub())}function c(){r&&(r(),r=void 0,n.clear(),n=Sh)}var d={addNestedSub:i,notifyNestedSubs:o,handleChangeWrapper:a,isSubscribed:l,trySubscribe:s,tryUnsubscribe:c,getListeners:function(){return n}};return d}var mc=typeof window!="undefined"&&typeof window.document!="undefined"&&typeof window.document.createElement!="undefined"?k.exports.useLayoutEffect:k.exports.useEffect,Jl={exports:{}},Bo={};/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cb=k.exports,Qg=60103;Bo.Fragment=60107;if(typeof Symbol=="function"&&Symbol.for){var kh=Symbol.for;Qg=kh("react.element"),Bo.Fragment=kh("react.fragment")}var db=cb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,fb=Object.prototype.hasOwnProperty,pb={key:!0,ref:!0,__self:!0,__source:!0};function Jg(e,t,r){var n,i={},o=null,a=null;r!==void 0&&(o=""+r),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(n in t)fb.call(t,n)&&!pb.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)i[n]===void 0&&(i[n]=t[n]);return{$$typeof:Qg,type:e,key:o,ref:a,props:i,_owner:db.current}}Bo.jsx=Jg;Bo.jsxs=Jg;Jl.exports=Bo;const u=Jl.exports.jsx,b=Jl.exports.jsxs,qe=Jl.exports.Fragment;function hb(e){var t=e.store,r=e.context,n=e.children,i=k.exports.useMemo(function(){var l=qg(t);return{store:t,subscription:l}},[t]),o=k.exports.useMemo(function(){return t.getState()},[t]);mc(function(){var l=i.subscription;return l.onStateChange=l.notifyNestedSubs,l.trySubscribe(),o!==t.getState()&&l.notifyNestedSubs(),function(){l.tryUnsubscribe(),l.onStateChange=null}},[i,o]);var a=r||Dr;return u(a.Provider,{value:i,children:n})}function Q(){return Q=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Q.apply(null,arguments)}function lr(e,t){if(e==null)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.includes(n))continue;r[n]=e[n]}return r}function Zg(){var e=k.exports.useContext(Dr);return e}function e1(e){e===void 0&&(e=Dr);var t=e===Dr?Zg:function(){return k.exports.useContext(e)};return function(){var n=t(),i=n.store;return i}}var mb=e1();function gb(e){e===void 0&&(e=Dr);var t=e===Dr?mb:e1(e);return function(){var n=t();return n.dispatch}}var qd=gb(),vb=function(t,r){return t===r};function yb(e,t,r,n){var i=k.exports.useReducer(function(x){return x+1},0),o=i[1],a=k.exports.useMemo(function(){return qg(r,n)},[r,n]),l=k.exports.useRef(),s=k.exports.useRef(),c=k.exports.useRef(),d=k.exports.useRef(),f=r.getState(),m;try{if(e!==s.current||f!==c.current||l.current){var y=e(f);d.current===void 0||!t(y,d.current)?m=y:m=d.current}else m=d.current}catch(x){throw l.current&&(x.message+=`
The error may be correlated with this previous error:
`+l.current.stack+`

`),x}return mc(function(){s.current=e,c.current=f,d.current=m,l.current=void 0}),mc(function(){function x(){try{var v=r.getState();if(v===c.current)return;var p=s.current(v);if(t(p,d.current))return;d.current=p,c.current=v}catch(h){l.current=h}o()}return a.onStateChange=x,a.trySubscribe(),x(),function(){return a.tryUnsubscribe()}},[r,a]),m}function xb(e){e===void 0&&(e=Dr);var t=e===Dr?Zg:function(){return k.exports.useContext(e)};return function(n,i){i===void 0&&(i=vb);var o=t(),a=o.store,l=o.subscription,s=yb(n,i,a,l);return k.exports.useDebugValue(s),s}}var et=xb();lb(Cl.exports.unstable_batchedUpdates);const wb=I.header`
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
`;var t1={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Ch=Xe.createContext&&Xe.createContext(t1),Tr=globalThis&&globalThis.__assign||function(){return Tr=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Tr.apply(this,arguments)},bb=globalThis&&globalThis.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r};function r1(e){return e&&e.map(function(t,r){return Xe.createElement(t.tag,Tr({key:r},t.attr),r1(t.child))})}function J(e){return function(t){return Xe.createElement(Sb,Tr({attr:Tr({},e.attr)},t),r1(e.child))}}function Sb(e){var t=function(r){var n=e.attr,i=e.size,o=e.title,a=bb(e,["attr","size","title"]),l=i||r.size||"1em",s;return r.className&&(s=r.className),e.className&&(s=(s?s+" ":"")+e.className),Xe.createElement("svg",Tr({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,n,a,{className:s,style:Tr(Tr({color:e.color||r.color},r.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),o&&Xe.createElement("title",null,o),e.children)};return Ch!==void 0?Xe.createElement(Ch.Consumer,null,function(r){return t(r)}):t(t1)}function kb(e){return J({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M4.5 12a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-1zm3 0a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1zm3 0a.5.5 0 0 1-.5-.5v-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5h-1z"}},{tag:"path",attr:{d:"M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"}}]})(e)}function Qd(e){return J({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"}}]})(e)}function Jd(e){return J({tag:"svg",attr:{viewBox:"0 0 192 512"},child:[{tag:"path",attr:{d:"M96 184c39.8 0 72 32.2 72 72s-32.2 72-72 72-72-32.2-72-72 32.2-72 72-72zM24 80c0 39.8 32.2 72 72 72s72-32.2 72-72S135.8 8 96 8 24 40.2 24 80zm0 352c0 39.8 32.2 72 72 72s72-32.2 72-72-32.2-72-72-72-72 32.2-72 72z"}}]})(e)}function Cb(e){return J({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M4 6h2v12H4zm4 7h8.586l-4.293 4.293 1.414 1.414L20.414 12l-6.707-6.707-1.414 1.414L16.586 11H8z"}}]})(e)}function n1(e){return J({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"}}]})(e)}function _b(e){return J({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412l7.332 7.332c.17.299.498.492.875.492a.99.99 0 0 0 .792-.409l7.415-7.415c2.354-2.354 2.354-6.049-.002-8.416a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595zm6.791 1.61c1.563 1.571 1.564 4.025.002 5.588L12 18.586l-6.793-6.793c-1.562-1.563-1.561-4.017-.002-5.584.76-.756 1.754-1.172 2.799-1.172s2.035.416 2.789 1.17l.5.5a.999.999 0 0 0 1.414 0l.5-.5c1.512-1.509 4.074-1.505 5.584-.002z"}}]})(e)}function i1(e){return J({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M11.999 1.993C6.486 1.994 2 6.48 1.999 11.994c0 5.514 4.486 10 10.001 10 5.514-.001 10-4.487 10-10 0-5.514-4.486-10-10.001-10.001zM12 19.994c-4.412 0-8.001-3.589-8.001-8 .001-4.411 3.59-8 8-8.001C16.411 3.994 20 7.583 20 11.994c0 4.41-3.589 7.999-8 8z"}},{tag:"path",attr:{d:"m12.012 7.989-4.005 4.005 4.005 4.004v-3.004h3.994v-2h-3.994z"}}]})(e)}function _h(e){return J({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M18.464 2.114a.998.998 0 0 0-1.033.063l-13 9a1.003 1.003 0 0 0 0 1.645l13 9A1 1 0 0 0 19 21V3a1 1 0 0 0-.536-.886zM17 19.091 6.757 12 17 4.909v14.182z"}}]})(e)}function Eb(e){return J({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M19 2H5c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h3.586L12 21.414 15.414 18H19c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 14h-4.414L12 18.586 9.414 16H5V4h14v12z"}}]})(e)}function Zd(e){return J({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"}}]})(e)}function fl(e){return J({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"}}]})(e)}const $b=I.div`
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
`;function Pb(e){return J({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"}}]})(e)}function Ob(e){return J({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 2H3v16h5v4l4-4h5l4-4V2zM11 11V7M16 11V7"}}]})(e)}function Nb(e){return J({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}},{tag:"circle",attr:{cx:"8.5",cy:"7",r:"4"}},{tag:"line",attr:{x1:"23",y1:"11",x2:"17",y2:"11"}}]})(e)}function Tb(e){return J({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}},{tag:"circle",attr:{cx:"9",cy:"7",r:"4"}},{tag:"path",attr:{d:"M23 21v-2a4 4 0 0 0-3-3.87"}},{tag:"path",attr:{d:"M16 3.13a4 4 0 0 1 0 7.75"}}]})(e)}function nu(e){return J({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z"}}]})(e)}function Rb(e){return J({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z"}}]})(e)}function Mb(e){return J({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95a15.65 15.65 0 00-1.38-3.56A8.03 8.03 0 0118.92 8zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56A7.987 7.987 0 015.08 16zm2.95-8H5.08a7.987 7.987 0 014.33-3.56A15.65 15.65 0 008.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 01-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"}}]})(e)}function o1(e){return J({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"}}]})(e)}function jb(e){return J({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z"}}]})(e)}function zb(e){return J({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M17 8l-1.41 1.41L17.17 11H9v2h8.17l-1.58 1.58L17 16l4-4-4-4zM5 5h7V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h7v-2H5V5z"}}]})(e)}function Lb(e){return J({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M15 8v8H5V8h10m1-2H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4V7c0-.55-.45-1-1-1z"}}]})(e)}function a1(e){return J({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M9.37 5.51A7.35 7.35 0 009.1 7.5c0 4.08 3.32 7.4 7.4 7.4.68 0 1.35-.09 1.99-.27A7.014 7.014 0 0112 19c-3.86 0-7-3.14-7-7 0-2.93 1.81-5.45 4.37-6.49zM12 3a9 9 0 109 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 01-4.4 2.26 5.403 5.403 0 01-3.14-9.8c-.44-.06-.9-.1-1.36-.1z"}}]})(e)}function Ab(e){return J({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M13.1714 12.0007L8.22168 7.05093L9.63589 5.63672L15.9999 12.0007L9.63589 18.3646L8.22168 16.9504L13.1714 12.0007Z"}}]})(e)}function Ib(e){return J({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M21 19.9997C21 20.552 20.5523 20.9997 20 20.9997H4C3.44772 20.9997 3 20.552 3 19.9997V9.48882C3 9.18023 3.14247 8.88893 3.38606 8.69947L11.3861 2.47725C11.7472 2.19639 12.2528 2.19639 12.6139 2.47725L20.6139 8.69947C20.8575 8.88893 21 9.18023 21 9.48882V19.9997ZM19 18.9997V9.97791L12 4.53346L5 9.97791V18.9997H19ZM7 14.9997H17V16.9997H7V14.9997Z"}}]})(e)}function Db(e){return J({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"}}]})(e)}function Fb(e){return J({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M4.41085 14.5259L7.81249 11.1243L10.6409 13.9527L13.7978 10.7958L12.0049 9.00293H17.0049V14.0029L15.212 12.21L10.6409 16.7811L7.81249 13.9527L5.33834 16.4268C6.77158 18.5823 9.22233 20.0029 12.0049 20.0029C16.4232 20.0029 20.0049 16.4212 20.0049 12.0029C20.0049 7.58465 16.4232 4.00293 12.0049 4.00293C7.5866 4.00293 4.00488 7.58465 4.00488 12.0029C4.00488 12.8845 4.14747 13.7327 4.41085 14.5259ZM2.87288 16.0841L2.86275 16.074L2.86662 16.0701C2.31276 14.8276 2.00488 13.4512 2.00488 12.0029C2.00488 6.48008 6.48204 2.00293 12.0049 2.00293C17.5277 2.00293 22.0049 6.48008 22.0049 12.0029C22.0049 17.5258 17.5277 22.0029 12.0049 22.0029C7.93574 22.0029 4.43426 19.5725 2.87288 16.0841Z"}}]})(e)}function Bb(e){return J({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853Z"}}]})(e)}function Ub(e){return J({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M4 18H6V20H18V4H6V6H4V3C4 2.44772 4.44772 2 5 2H19C19.5523 2 20 2.44772 20 3V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V18ZM6 11H13V13H6V16L1 12L6 8V11Z"}}]})(e)}function gc(e){return J({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M8.68735 4.00008L11.294 1.39348C11.6845 1.00295 12.3176 1.00295 12.7082 1.39348L15.3148 4.00008H19.0011C19.5533 4.00008 20.0011 4.4478 20.0011 5.00008V8.68637L22.6077 11.293C22.9982 11.6835 22.9982 12.3167 22.6077 12.7072L20.0011 15.3138V19.0001C20.0011 19.5524 19.5533 20.0001 19.0011 20.0001H15.3148L12.7082 22.6067C12.3176 22.9972 11.6845 22.9972 11.294 22.6067L8.68735 20.0001H5.00106C4.44877 20.0001 4.00106 19.5524 4.00106 19.0001V15.3138L1.39446 12.7072C1.00393 12.3167 1.00393 11.6835 1.39446 11.293L4.00106 8.68637V5.00008C4.00106 4.4478 4.44877 4.00008 5.00106 4.00008H8.68735ZM6.00106 6.00008V9.5148L3.51578 12.0001L6.00106 14.4854V18.0001H9.51578L12.0011 20.4854L14.4863 18.0001H18.0011V14.4854L20.4863 12.0001L18.0011 9.5148V6.00008H14.4863L12.0011 3.5148L9.51578 6.00008H6.00106ZM12.0011 16.0001C9.79192 16.0001 8.00106 14.2092 8.00106 12.0001C8.00106 9.79094 9.79192 8.00008 12.0011 8.00008C14.2102 8.00008 16.0011 9.79094 16.0011 12.0001C16.0011 14.2092 14.2102 16.0001 12.0011 16.0001ZM12.0011 14.0001C13.1056 14.0001 14.0011 13.1047 14.0011 12.0001C14.0011 10.8955 13.1056 10.0001 12.0011 10.0001C10.8965 10.0001 10.0011 10.8955 10.0011 12.0001C10.0011 13.1047 10.8965 14.0001 12.0011 14.0001Z"}}]})(e)}function Wb(e){return J({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M3.5 2h-1v5h1V2zm6.1 5H6.4L6 6.45v-1L6.4 5h3.2l.4.5v1l-.4.5zm-5 3H1.4L1 9.5v-1l.4-.5h3.2l.4.5v1l-.4.5zm3.9-8h-1v2h1V2zm-1 6h1v6h-1V8zm-4 3h-1v3h1v-3zm7.9 0h3.19l.4-.5v-.95l-.4-.5H11.4l-.4.5v.95l.4.5zm2.1-9h-1v6h1V2zm-1 10h1v2h-1v-2z"}}]})(e)}const Hb=I.div`
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
`;function Pt(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];throw Error("[Immer] minified error nr: "+e+(r.length?" "+r.map(function(i){return"'"+i+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function Fr(e){return!!e&&!!e[fe]}function rr(e){var t;return!!e&&(function(r){if(!r||typeof r!="object")return!1;var n=Object.getPrototypeOf(r);if(n===null)return!0;var i=Object.hasOwnProperty.call(n,"constructor")&&n.constructor;return i===Object||typeof i=="function"&&Function.toString.call(i)===Zb}(e)||Array.isArray(e)||!!e[Rh]||!!(!((t=e.constructor)===null||t===void 0)&&t[Rh])||ef(e)||tf(e))}function sn(e,t,r){r===void 0&&(r=!1),pi(e)===0?(r?Object.keys:Vn)(e).forEach(function(n){r&&typeof n=="symbol"||t(n,e[n],e)}):e.forEach(function(n,i){return t(i,n,e)})}function pi(e){var t=e[fe];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:ef(e)?2:tf(e)?3:0}function Hn(e,t){return pi(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function Vb(e,t){return pi(e)===2?e.get(t):e[t]}function l1(e,t,r){var n=pi(e);n===2?e.set(t,r):n===3?e.add(r):e[t]=r}function s1(e,t){return e===t?e!==0||1/e==1/t:e!=e&&t!=t}function ef(e){return Qb&&e instanceof Map}function tf(e){return Jb&&e instanceof Set}function Xr(e){return e.o||e.t}function rf(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=c1(e);delete t[fe];for(var r=Vn(t),n=0;n<r.length;n++){var i=r[n],o=t[i];o.writable===!1&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(t[i]={configurable:!0,writable:!0,enumerable:o.enumerable,value:e[i]})}return Object.create(Object.getPrototypeOf(e),t)}function nf(e,t){return t===void 0&&(t=!1),of(e)||Fr(e)||!rr(e)||(pi(e)>1&&(e.set=e.add=e.clear=e.delete=Kb),Object.freeze(e),t&&sn(e,function(r,n){return nf(n,!0)},!0)),e}function Kb(){Pt(2)}function of(e){return e==null||typeof e!="object"||Object.isFrozen(e)}function Ut(e){var t=wc[e];return t||Pt(18,e),t}function Xb(e,t){wc[e]||(wc[e]=t)}function vc(){return xo}function iu(e,t){t&&(Ut("Patches"),e.u=[],e.s=[],e.v=t)}function pl(e){yc(e),e.p.forEach(Gb),e.p=null}function yc(e){e===xo&&(xo=e.l)}function Eh(e){return xo={p:[],l:xo,h:e,m:!0,_:0}}function Gb(e){var t=e[fe];t.i===0||t.i===1?t.j():t.g=!0}function ou(e,t){t._=t.p.length;var r=t.p[0],n=e!==void 0&&e!==r;return t.h.O||Ut("ES5").S(t,e,n),n?(r[fe].P&&(pl(t),Pt(4)),rr(e)&&(e=hl(t,e),t.l||ml(t,e)),t.u&&Ut("Patches").M(r[fe].t,e,t.u,t.s)):e=hl(t,r,[]),pl(t),t.u&&t.v(t.u,t.s),e!==u1?e:void 0}function hl(e,t,r){if(of(t))return t;var n=t[fe];if(!n)return sn(t,function(l,s){return $h(e,n,t,l,s,r)},!0),t;if(n.A!==e)return t;if(!n.P)return ml(e,n.t,!0),n.t;if(!n.I){n.I=!0,n.A._--;var i=n.i===4||n.i===5?n.o=rf(n.k):n.o,o=i,a=!1;n.i===3&&(o=new Set(i),i.clear(),a=!0),sn(o,function(l,s){return $h(e,n,i,l,s,r,a)}),ml(e,i,!1),r&&e.u&&Ut("Patches").N(n,r,e.u,e.s)}return n.o}function $h(e,t,r,n,i,o,a){if(Fr(i)){var l=hl(e,i,o&&t&&t.i!==3&&!Hn(t.R,n)?o.concat(n):void 0);if(l1(r,n,l),!Fr(l))return;e.m=!1}else a&&r.add(i);if(rr(i)&&!of(i)){if(!e.h.D&&e._<1)return;hl(e,i),t&&t.A.l||ml(e,i)}}function ml(e,t,r){r===void 0&&(r=!1),!e.l&&e.h.D&&e.m&&nf(t,r)}function au(e,t){var r=e[fe];return(r?Xr(r):e)[t]}function Ph(e,t){if(t in e)for(var r=Object.getPrototypeOf(e);r;){var n=Object.getOwnPropertyDescriptor(r,t);if(n)return n;r=Object.getPrototypeOf(r)}}function hr(e){e.P||(e.P=!0,e.l&&hr(e.l))}function lu(e){e.o||(e.o=rf(e.t))}function xc(e,t,r){var n=ef(t)?Ut("MapSet").F(t,r):tf(t)?Ut("MapSet").T(t,r):e.O?function(i,o){var a=Array.isArray(i),l={i:a?1:0,A:o?o.A:vc(),P:!1,I:!1,R:{},l:o,t:i,k:null,o:null,j:null,C:!1},s=l,c=wo;a&&(s=[l],c=Di);var d=Proxy.revocable(s,c),f=d.revoke,m=d.proxy;return l.k=m,l.j=f,m}(t,r):Ut("ES5").J(t,r);return(r?r.A:vc()).p.push(n),n}function Yb(e){return Fr(e)||Pt(22,e),function t(r){if(!rr(r))return r;var n,i=r[fe],o=pi(r);if(i){if(!i.P&&(i.i<4||!Ut("ES5").K(i)))return i.t;i.I=!0,n=Oh(r,o),i.I=!1}else n=Oh(r,o);return sn(n,function(a,l){i&&Vb(i.t,a)===l||l1(n,a,t(l))}),o===3?new Set(n):n}(e)}function Oh(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return rf(e)}function qb(){function e(o,a){var l=i[o];return l?l.enumerable=a:i[o]=l={configurable:!0,enumerable:a,get:function(){var s=this[fe];return wo.get(s,o)},set:function(s){var c=this[fe];wo.set(c,o,s)}},l}function t(o){for(var a=o.length-1;a>=0;a--){var l=o[a][fe];if(!l.P)switch(l.i){case 5:n(l)&&hr(l);break;case 4:r(l)&&hr(l)}}}function r(o){for(var a=o.t,l=o.k,s=Vn(l),c=s.length-1;c>=0;c--){var d=s[c];if(d!==fe){var f=a[d];if(f===void 0&&!Hn(a,d))return!0;var m=l[d],y=m&&m[fe];if(y?y.t!==f:!s1(m,f))return!0}}var x=!!a[fe];return s.length!==Vn(a).length+(x?0:1)}function n(o){var a=o.k;if(a.length!==o.t.length)return!0;var l=Object.getOwnPropertyDescriptor(a,a.length-1);if(l&&!l.get)return!0;for(var s=0;s<a.length;s++)if(!a.hasOwnProperty(s))return!0;return!1}var i={};Xb("ES5",{J:function(o,a){var l=Array.isArray(o),s=function(d,f){if(d){for(var m=Array(f.length),y=0;y<f.length;y++)Object.defineProperty(m,""+y,e(y,!0));return m}var x=c1(f);delete x[fe];for(var v=Vn(x),p=0;p<v.length;p++){var h=v[p];x[h]=e(h,d||!!x[h].enumerable)}return Object.create(Object.getPrototypeOf(f),x)}(l,o),c={i:l?5:4,A:a?a.A:vc(),P:!1,I:!1,R:{},l:a,t:o,k:s,o:null,g:!1,C:!1};return Object.defineProperty(s,fe,{value:c,writable:!0}),s},S:function(o,a,l){l?Fr(a)&&a[fe].A===o&&t(o.p):(o.u&&function s(c){if(c&&typeof c=="object"){var d=c[fe];if(d){var f=d.t,m=d.k,y=d.R,x=d.i;if(x===4)sn(m,function(w){w!==fe&&(f[w]!==void 0||Hn(f,w)?y[w]||s(m[w]):(y[w]=!0,hr(d)))}),sn(f,function(w){m[w]!==void 0||Hn(m,w)||(y[w]=!1,hr(d))});else if(x===5){if(n(d)&&(hr(d),y.length=!0),m.length<f.length)for(var v=m.length;v<f.length;v++)y[v]=!1;else for(var p=f.length;p<m.length;p++)y[p]=!0;for(var h=Math.min(m.length,f.length),g=0;g<h;g++)m.hasOwnProperty(g)||(y[g]=!0),y[g]===void 0&&s(m[g])}}}}(o.p[0]),t(o.p))},K:function(o){return o.i===4?r(o):n(o)}})}var Nh,xo,af=typeof Symbol!="undefined"&&typeof Symbol("x")=="symbol",Qb=typeof Map!="undefined",Jb=typeof Set!="undefined",Th=typeof Proxy!="undefined"&&Proxy.revocable!==void 0&&typeof Reflect!="undefined",u1=af?Symbol.for("immer-nothing"):((Nh={})["immer-nothing"]=!0,Nh),Rh=af?Symbol.for("immer-draftable"):"__$immer_draftable",fe=af?Symbol.for("immer-state"):"__$immer_state",Zb=""+Object.prototype.constructor,Vn=typeof Reflect!="undefined"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,c1=Object.getOwnPropertyDescriptors||function(e){var t={};return Vn(e).forEach(function(r){t[r]=Object.getOwnPropertyDescriptor(e,r)}),t},wc={},wo={get:function(e,t){if(t===fe)return e;var r=Xr(e);if(!Hn(r,t))return function(i,o,a){var l,s=Ph(o,a);return s?"value"in s?s.value:(l=s.get)===null||l===void 0?void 0:l.call(i.k):void 0}(e,r,t);var n=r[t];return e.I||!rr(n)?n:n===au(e.t,t)?(lu(e),e.o[t]=xc(e.A.h,n,e)):n},has:function(e,t){return t in Xr(e)},ownKeys:function(e){return Reflect.ownKeys(Xr(e))},set:function(e,t,r){var n=Ph(Xr(e),t);if(n!=null&&n.set)return n.set.call(e.k,r),!0;if(!e.P){var i=au(Xr(e),t),o=i==null?void 0:i[fe];if(o&&o.t===r)return e.o[t]=r,e.R[t]=!1,!0;if(s1(r,i)&&(r!==void 0||Hn(e.t,t)))return!0;lu(e),hr(e)}return e.o[t]===r&&(r!==void 0||t in e.o)||Number.isNaN(r)&&Number.isNaN(e.o[t])||(e.o[t]=r,e.R[t]=!0),!0},deleteProperty:function(e,t){return au(e.t,t)!==void 0||t in e.t?(e.R[t]=!1,lu(e),hr(e)):delete e.R[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var r=Xr(e),n=Reflect.getOwnPropertyDescriptor(r,t);return n&&{writable:!0,configurable:e.i!==1||t!=="length",enumerable:n.enumerable,value:r[t]}},defineProperty:function(){Pt(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){Pt(12)}},Di={};sn(wo,function(e,t){Di[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}}),Di.deleteProperty=function(e,t){return Di.set.call(this,e,t,void 0)},Di.set=function(e,t,r){return wo.set.call(this,e[0],t,r,e[0])};var eS=function(){function e(r){var n=this;this.O=Th,this.D=!0,this.produce=function(i,o,a){if(typeof i=="function"&&typeof o!="function"){var l=o;o=i;var s=n;return function(v){var p=this;v===void 0&&(v=l);for(var h=arguments.length,g=Array(h>1?h-1:0),w=1;w<h;w++)g[w-1]=arguments[w];return s.produce(v,function(S){var _;return(_=o).call.apply(_,[p,S].concat(g))})}}var c;if(typeof o!="function"&&Pt(6),a!==void 0&&typeof a!="function"&&Pt(7),rr(i)){var d=Eh(n),f=xc(n,i,void 0),m=!0;try{c=o(f),m=!1}finally{m?pl(d):yc(d)}return typeof Promise!="undefined"&&c instanceof Promise?c.then(function(v){return iu(d,a),ou(v,d)},function(v){throw pl(d),v}):(iu(d,a),ou(c,d))}if(!i||typeof i!="object"){if((c=o(i))===void 0&&(c=i),c===u1&&(c=void 0),n.D&&nf(c,!0),a){var y=[],x=[];Ut("Patches").M(i,c,y,x),a(y,x)}return c}Pt(21,i)},this.produceWithPatches=function(i,o){if(typeof i=="function")return function(c){for(var d=arguments.length,f=Array(d>1?d-1:0),m=1;m<d;m++)f[m-1]=arguments[m];return n.produceWithPatches(c,function(y){return i.apply(void 0,[y].concat(f))})};var a,l,s=n.produce(i,o,function(c,d){a=c,l=d});return typeof Promise!="undefined"&&s instanceof Promise?s.then(function(c){return[c,a,l]}):[s,a,l]},typeof(r==null?void 0:r.useProxies)=="boolean"&&this.setUseProxies(r.useProxies),typeof(r==null?void 0:r.autoFreeze)=="boolean"&&this.setAutoFreeze(r.autoFreeze)}var t=e.prototype;return t.createDraft=function(r){rr(r)||Pt(8),Fr(r)&&(r=Yb(r));var n=Eh(this),i=xc(this,r,void 0);return i[fe].C=!0,yc(n),i},t.finishDraft=function(r,n){var i=r&&r[fe],o=i.A;return iu(o,n),ou(void 0,o)},t.setAutoFreeze=function(r){this.D=r},t.setUseProxies=function(r){r&&!Th&&Pt(20),this.O=r},t.applyPatches=function(r,n){var i;for(i=n.length-1;i>=0;i--){var o=n[i];if(o.path.length===0&&o.op==="replace"){r=o.value;break}}i>-1&&(n=n.slice(i+1));var a=Ut("Patches").$;return Fr(r)?a(r,n):this.produce(r,function(l){return a(l,n)})},e}(),ct=new eS,d1=ct.produce;ct.produceWithPatches.bind(ct);ct.setAutoFreeze.bind(ct);ct.setUseProxies.bind(ct);ct.applyPatches.bind(ct);ct.createDraft.bind(ct);ct.finishDraft.bind(ct);function bo(e){return bo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},bo(e)}function tS(e,t){if(bo(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(bo(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function rS(e){var t=tS(e,"string");return bo(t)=="symbol"?t:t+""}function nS(e,t,r){return(t=rS(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Mh(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function jh(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Mh(Object(r),!0).forEach(function(n){nS(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Mh(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function We(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var zh=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),su=function(){return Math.random().toString(36).substring(7).split("").join(".")},gl={INIT:"@@redux/INIT"+su(),REPLACE:"@@redux/REPLACE"+su(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+su()}};function iS(e){if(typeof e!="object"||e===null)return!1;for(var t=e;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function f1(e,t,r){var n;if(typeof t=="function"&&typeof r=="function"||typeof r=="function"&&typeof arguments[3]=="function")throw new Error(We(0));if(typeof t=="function"&&typeof r=="undefined"&&(r=t,t=void 0),typeof r!="undefined"){if(typeof r!="function")throw new Error(We(1));return r(f1)(e,t)}if(typeof e!="function")throw new Error(We(2));var i=e,o=t,a=[],l=a,s=!1;function c(){l===a&&(l=a.slice())}function d(){if(s)throw new Error(We(3));return o}function f(v){if(typeof v!="function")throw new Error(We(4));if(s)throw new Error(We(5));var p=!0;return c(),l.push(v),function(){if(!!p){if(s)throw new Error(We(6));p=!1,c();var g=l.indexOf(v);l.splice(g,1),a=null}}}function m(v){if(!iS(v))throw new Error(We(7));if(typeof v.type=="undefined")throw new Error(We(8));if(s)throw new Error(We(9));try{s=!0,o=i(o,v)}finally{s=!1}for(var p=a=l,h=0;h<p.length;h++){var g=p[h];g()}return v}function y(v){if(typeof v!="function")throw new Error(We(10));i=v,m({type:gl.REPLACE})}function x(){var v,p=f;return v={subscribe:function(g){if(typeof g!="object"||g===null)throw new Error(We(11));function w(){g.next&&g.next(d())}w();var S=p(w);return{unsubscribe:S}}},v[zh]=function(){return this},v}return m({type:gl.INIT}),n={dispatch:m,subscribe:f,getState:d,replaceReducer:y},n[zh]=x,n}function oS(e){Object.keys(e).forEach(function(t){var r=e[t],n=r(void 0,{type:gl.INIT});if(typeof n=="undefined")throw new Error(We(12));if(typeof r(void 0,{type:gl.PROBE_UNKNOWN_ACTION()})=="undefined")throw new Error(We(13))})}function aS(e){for(var t=Object.keys(e),r={},n=0;n<t.length;n++){var i=t[n];typeof e[i]=="function"&&(r[i]=e[i])}var o=Object.keys(r),a;try{oS(r)}catch(l){a=l}return function(s,c){if(s===void 0&&(s={}),a)throw a;for(var d=!1,f={},m=0;m<o.length;m++){var y=o[m],x=r[y],v=s[y],p=x(v,c);if(typeof p=="undefined")throw c&&c.type,new Error(We(14));f[y]=p,d=d||p!==v}return d=d||o.length!==Object.keys(s).length,d?f:s}}function vl(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.length===0?function(n){return n}:t.length===1?t[0]:t.reduce(function(n,i){return function(){return n(i.apply(void 0,arguments))}})}function lS(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(n){return function(){var i=n.apply(void 0,arguments),o=function(){throw new Error(We(15))},a={getState:i.getState,dispatch:function(){return o.apply(void 0,arguments)}},l=t.map(function(s){return s(a)});return o=vl.apply(void 0,l)(i.dispatch),jh(jh({},i),{},{dispatch:o})}}}function p1(e){var t=function(n){var i=n.dispatch,o=n.getState;return function(a){return function(l){return typeof l=="function"?l(i,o,e):a(l)}}};return t}var h1=p1();h1.withExtraArgument=p1;var Lh=h1,m1=globalThis&&globalThis.__extends||function(){var e=function(t,r){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,i){n.__proto__=i}||function(n,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(n[o]=i[o])},e(t,r)};return function(t,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");e(t,r);function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}(),sS=globalThis&&globalThis.__generator||function(e,t){var r={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},n,i,o,a;return a={next:l(0),throw:l(1),return:l(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function l(c){return function(d){return s([c,d])}}function s(c){if(n)throw new TypeError("Generator is already executing.");for(;r;)try{if(n=1,i&&(o=c[0]&2?i.return:c[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,c[1])).done)return o;switch(i=0,o&&(c=[c[0]&2,o.value]),c[0]){case 0:case 1:o=c;break;case 4:return r.label++,{value:c[1],done:!1};case 5:r.label++,i=c[1],c=[0];continue;case 7:c=r.ops.pop(),r.trys.pop();continue;default:if(o=r.trys,!(o=o.length>0&&o[o.length-1])&&(c[0]===6||c[0]===2)){r=0;continue}if(c[0]===3&&(!o||c[1]>o[0]&&c[1]<o[3])){r.label=c[1];break}if(c[0]===6&&r.label<o[1]){r.label=o[1],o=c;break}if(o&&r.label<o[2]){r.label=o[2],r.ops.push(c);break}o[2]&&r.ops.pop(),r.trys.pop();continue}c=t.call(e,r)}catch(d){c=[6,d],i=0}finally{n=o=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}},ri=globalThis&&globalThis.__spreadArray||function(e,t){for(var r=0,n=t.length,i=e.length;r<n;r++,i++)e[i]=t[r];return e},uS=Object.defineProperty,cS=Object.defineProperties,dS=Object.getOwnPropertyDescriptors,Ah=Object.getOwnPropertySymbols,fS=Object.prototype.hasOwnProperty,pS=Object.prototype.propertyIsEnumerable,Ih=function(e,t,r){return t in e?uS(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r},Rr=function(e,t){for(var r in t||(t={}))fS.call(t,r)&&Ih(e,r,t[r]);if(Ah)for(var n=0,i=Ah(t);n<i.length;n++){var r=i[n];pS.call(t,r)&&Ih(e,r,t[r])}return e},uu=function(e,t){return cS(e,dS(t))},hS=function(e,t,r){return new Promise(function(n,i){var o=function(s){try{l(r.next(s))}catch(c){i(c)}},a=function(s){try{l(r.throw(s))}catch(c){i(c)}},l=function(s){return s.done?n(s.value):Promise.resolve(s.value).then(o,a)};l((r=r.apply(e,t)).next())})},mS=typeof window!="undefined"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?vl:vl.apply(null,arguments)};function gS(e){if(typeof e!="object"||e===null)return!1;var t=Object.getPrototypeOf(e);if(t===null)return!0;for(var r=t;Object.getPrototypeOf(r)!==null;)r=Object.getPrototypeOf(r);return t===r}function Mr(e,t){function r(){for(var n=[],i=0;i<arguments.length;i++)n[i]=arguments[i];if(t){var o=t.apply(void 0,n);if(!o)throw new Error("prepareAction did not return an object");return Rr(Rr({type:e,payload:o.payload},"meta"in o&&{meta:o.meta}),"error"in o&&{error:o.error})}return{type:e,payload:n[0]}}return r.toString=function(){return""+e},r.type=e,r.match=function(n){return n.type===e},r}var vS=function(e){m1(t,e);function t(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];var i=e.apply(this,r)||this;return Object.setPrototypeOf(i,t.prototype),i}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return e.prototype.concat.apply(this,r)},t.prototype.prepend=function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return r.length===1&&Array.isArray(r[0])?new(t.bind.apply(t,ri([void 0],r[0].concat(this)))):new(t.bind.apply(t,ri([void 0],r.concat(this))))},t}(Array),yS=function(e){m1(t,e);function t(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];var i=e.apply(this,r)||this;return Object.setPrototypeOf(i,t.prototype),i}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return e.prototype.concat.apply(this,r)},t.prototype.prepend=function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return r.length===1&&Array.isArray(r[0])?new(t.bind.apply(t,ri([void 0],r[0].concat(this)))):new(t.bind.apply(t,ri([void 0],r.concat(this))))},t}(Array);function bc(e){return rr(e)?d1(e,function(){}):e}function xS(e){return typeof e=="boolean"}function wS(){return function(t){return bS(t)}}function bS(e){e===void 0&&(e={});var t=e.thunk,r=t===void 0?!0:t;e.immutableCheck,e.serializableCheck,e.actionCreatorCheck;var n=new vS;return r&&(xS(r)?n.push(Lh):n.push(Lh.withExtraArgument(r.extraArgument))),n}var SS=!0;function kS(e){var t=wS(),r=e||{},n=r.reducer,i=n===void 0?void 0:n,o=r.middleware,a=o===void 0?t():o,l=r.devTools,s=l===void 0?!0:l,c=r.preloadedState,d=c===void 0?void 0:c,f=r.enhancers,m=f===void 0?void 0:f,y;if(typeof i=="function")y=i;else if(gS(i))y=aS(i);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var x=a;typeof x=="function"&&(x=x(t));var v=lS.apply(void 0,x),p=vl;s&&(p=mS(Rr({trace:!SS},typeof s=="object"&&s)));var h=new yS(v),g=h;Array.isArray(m)?g=ri([v],m):typeof m=="function"&&(g=m(h));var w=p.apply(void 0,g);return f1(y,d,w)}function g1(e){var t={},r=[],n,i={addCase:function(o,a){var l=typeof o=="string"?o:o.type;if(!l)throw new Error("`builder.addCase` cannot be called with an empty action type");if(l in t)throw new Error("`builder.addCase` cannot be called with two reducers for the same action type");return t[l]=a,i},addMatcher:function(o,a){return r.push({matcher:o,reducer:a}),i},addDefaultCase:function(o){return n=o,i}};return e(i),[t,r,n]}function CS(e){return typeof e=="function"}function _S(e,t,r,n){r===void 0&&(r=[]);var i=typeof t=="function"?g1(t):[t,r,n],o=i[0],a=i[1],l=i[2],s;if(CS(e))s=function(){return bc(e())};else{var c=bc(e);s=function(){return c}}function d(f,m){f===void 0&&(f=s());var y=ri([o[m.type]],a.filter(function(x){var v=x.matcher;return v(m)}).map(function(x){var v=x.reducer;return v}));return y.filter(function(x){return!!x}).length===0&&(y=[l]),y.reduce(function(x,v){if(v)if(Fr(x)){var p=x,h=v(p,m);return h===void 0?x:h}else{if(rr(x))return d1(x,function(g){return v(g,m)});var h=v(x,m);if(h===void 0){if(x===null)return x;throw Error("A case reducer on a non-draftable value must not return undefined")}return h}return x},f)}return d.getInitialState=s,d}function ES(e,t){return e+"/"+t}function gn(e){var t=e.name;if(!t)throw new Error("`name` is a required option for createSlice");var r=typeof e.initialState=="function"?e.initialState:bc(e.initialState),n=e.reducers||{},i=Object.keys(n),o={},a={},l={};i.forEach(function(d){var f=n[d],m=ES(t,d),y,x;"reducer"in f?(y=f.reducer,x=f.prepare):y=f,o[d]=y,a[m]=y,l[d]=x?Mr(m,x):Mr(m)});function s(){var d=typeof e.extraReducers=="function"?g1(e.extraReducers):[e.extraReducers],f=d[0],m=f===void 0?{}:f,y=d[1],x=y===void 0?[]:y,v=d[2],p=v===void 0?void 0:v,h=Rr(Rr({},m),a);return _S(r,function(g){for(var w in h)g.addCase(w,h[w]);for(var S=0,_=x;S<_.length;S++){var E=_[S];g.addMatcher(E.matcher,E.reducer)}p&&g.addDefaultCase(p)})}var c;return{name:t,reducer:function(d,f){return c||(c=s()),c(d,f)},actions:l,caseReducers:o,getInitialState:function(){return c||(c=s()),c.getInitialState()}}}var $S="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",PS=function(e){e===void 0&&(e=21);for(var t="",r=e;r--;)t+=$S[Math.random()*64|0];return t},OS=["name","message","stack","code"],cu=function(){function e(t,r){this.payload=t,this.meta=r}return e}(),Dh=function(){function e(t,r){this.payload=t,this.meta=r}return e}(),NS=function(e){if(typeof e=="object"&&e!==null){for(var t={},r=0,n=OS;r<n.length;r++){var i=n[r];typeof e[i]=="string"&&(t[i]=e[i])}return t}return{message:String(e)}};(function(){function e(t,r,n){var i=Mr(t+"/fulfilled",function(c,d,f,m){return{payload:c,meta:uu(Rr({},m||{}),{arg:f,requestId:d,requestStatus:"fulfilled"})}}),o=Mr(t+"/pending",function(c,d,f){return{payload:void 0,meta:uu(Rr({},f||{}),{arg:d,requestId:c,requestStatus:"pending"})}}),a=Mr(t+"/rejected",function(c,d,f,m,y){return{payload:m,error:(n&&n.serializeError||NS)(c||"Rejected"),meta:uu(Rr({},y||{}),{arg:f,requestId:d,rejectedWithValue:!!m,requestStatus:"rejected",aborted:(c==null?void 0:c.name)==="AbortError",condition:(c==null?void 0:c.name)==="ConditionError"})}}),l=typeof AbortController!="undefined"?AbortController:function(){function c(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return c.prototype.abort=function(){},c}();function s(c){return function(d,f,m){var y=n!=null&&n.idGenerator?n.idGenerator(c):PS(),x=new l,v;function p(g){v=g,x.abort()}var h=function(){return hS(this,null,function(){var g,w,S,_,E,O,z;return sS(this,function(T){switch(T.label){case 0:return T.trys.push([0,4,,5]),_=(g=n==null?void 0:n.condition)==null?void 0:g.call(n,c,{getState:f,extra:m}),RS(_)?[4,_]:[3,2];case 1:_=T.sent(),T.label=2;case 2:if(_===!1||x.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return E=new Promise(function(D,G){return x.signal.addEventListener("abort",function(){return G({name:"AbortError",message:v||"Aborted"})})}),d(o(y,c,(w=n==null?void 0:n.getPendingMeta)==null?void 0:w.call(n,{requestId:y,arg:c},{getState:f,extra:m}))),[4,Promise.race([E,Promise.resolve(r(c,{dispatch:d,getState:f,extra:m,requestId:y,signal:x.signal,abort:p,rejectWithValue:function(D,G){return new cu(D,G)},fulfillWithValue:function(D,G){return new Dh(D,G)}})).then(function(D){if(D instanceof cu)throw D;return D instanceof Dh?i(D.payload,y,c,D.meta):i(D,y,c)})])];case 3:return S=T.sent(),[3,5];case 4:return O=T.sent(),S=O instanceof cu?a(null,y,c,O.payload,O.meta):a(O,y,c),[3,5];case 5:return z=n&&!n.dispatchConditionRejection&&a.match(S)&&S.meta.condition,z||d(S),[2,S]}})})}();return Object.assign(h,{abort:p,requestId:y,arg:c,unwrap:function(){return h.then(TS)}})}}return Object.assign(s,{pending:o,rejected:a,fulfilled:i,typePrefix:t})}return e.withTypes=function(){return e},e})();function TS(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function RS(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var lf="listenerMiddleware";Mr(lf+"/add");Mr(lf+"/removeAll");Mr(lf+"/remove");var Fh;typeof queueMicrotask=="function"&&queueMicrotask.bind(typeof window!="undefined"?window:typeof global!="undefined"?global:globalThis);qb();const v1=gn({name:"site",initialState:{darkStatus:!1,sideBarStatus:!0},reducers:{setDarkMode:e=>{e.darkStatus=!e.darkStatus},setSideBarStatus:e=>{e.sideBarStatus=!e.sideBarStatus}}}),{setDarkMode:y1,setSideBarStatus:MS}=v1.actions;var jS=v1.reducer;const Bh=({whichStatus:e,changeStatus:t})=>{const[r,n]=k.exports.useState(!1),i=qd();return u(Hb,{children:u("div",{className:`button-box ${r?"button-true":""}`,onClick:()=>{!e||(n(!r),e==="online"?t():i(y1()))},children:u("div",{className:"ball"})})})},zS=()=>{let e=mn();const[t,r]=k.exports.useState(!1),[n,i]=k.exports.useState(!1);return u($b,{children:b("div",{className:"profile-box",children:[u("div",{className:"profile",onClick:()=>r(!t),children:u(fl,{})}),u("div",{className:`profile-menu ${t?"show-profile-menu":""}`,children:b("div",{className:"menu-box",children:[b("div",{className:"profile-info",children:[u("div",{className:"pp",children:u(fl,{})}),b("div",{className:"info",children:[u("div",{className:"username",children:"khaleesi"}),b("div",{className:"status",children:[u("div",{className:`status-icon ${n?"online":""}`,children:u(Qd,{})}),u("span",{children:n?"Online":"Offline"})]})]})]}),b("div",{className:"status-button",children:[u("span",{children:"Online"}),u(Bh,{whichStatus:"online",changeStatus:()=>i(!n)})]}),u("div",{className:"menu-list",children:b("ul",{children:[u("li",{children:b("div",{className:"item",children:[u(Nb,{})," ",u("span",{children:"Channel"})]})}),u("li",{children:b("div",{className:"item",children:[u(Wb,{})," ",u("span",{children:"Video Producer"})]})}),u("li",{children:b("div",{className:"item",children:[u(kb,{})," ",u("span",{children:"Creator Dashboard"})]})}),u("li",{children:b("div",{className:"item",children:[u(Pb,{})," ",u("span",{children:"Safety"})]})}),u("hr",{}),u("li",{children:b("div",{className:"item",children:[u(gc,{})," ",u("span",{children:"Settings"})]})}),u("li",{children:b("div",{className:"item",children:[u(Ob,{style:{transform:"rotate(180deg)"}})," ",u("span",{children:"BetterTTV Settings"})]})}),b("li",{children:[b("div",{className:"item",children:[u(Mb,{})," ",u("span",{children:"Language"})]}),u(Ab,{})]}),b("li",{children:[b("div",{className:"item",children:[u(a1,{})," ",u("span",{children:"Dark Theme"})]}),u(Bh,{whichStatus:"darkmode"})]}),u("hr",{}),u("li",{children:b("div",{className:"item",onClick:()=>{document.cookie="isLoggedIn="+!1,e("/login")},children:[u(zb,{style:{transform:"rotate(180deg)"}})," ",u("span",{children:"Log Out"})]})})]})})]})})]})})},LS=I.div`
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
`,AS=I.div`
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
`,IS=I.div`
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
`,DS=({user:e,imageId:t})=>u(AS,{children:u("li",{children:b("div",{className:"item",children:[u("div",{className:"pp",children:u("img",{src:`https://i.pravatar.cc/5${t}`})}),b("div",{className:"hover-section",children:[b("div",{className:"info",children:[u("div",{className:"username",children:e.username}),u("div",{className:"title",children:e.game})]}),b("div",{className:"live",children:[u("div",{className:"live-icon",children:u(Qd,{})}),u("span",{children:"333"})]})]})]})})}),Uh=()=>{const{users:e}=et(t=>t.user);return u(IS,{children:b("div",{className:"list",children:[u("ul",{children:e.map((t,r)=>{if(!(r>4))return u(DS,{user:t,imageId:r},r)})}),u("div",{className:"show-more",children:u("span",{children:"Show More"})})]})})},FS=I.div`
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
`,x1=({placeholder:e})=>{const[t,r]=k.exports.useState(!1);return u(FS,{children:b("div",{className:`searchbar-box ${t?"focus":""}`,children:[u("div",{className:"search-icon",children:u(Zd,{})}),u("input",{type:"text",placeholder:e,className:"input",onFocus:()=>r(!0),onBlur:()=>r(!1)})]})})},BS=({mySize:e})=>{const{sideBarStatus:t}=et(n=>n.site),r=qd();return u(LS,{children:b("div",{className:"sidebar-box",children:[b("div",{className:"list-title",children:[u("h1",{children:"Followed Channels"}),u("div",{className:"title-icon",onClick:()=>r(MS(!t)),children:u(Cb,{})}),u("div",{className:"followed",children:u(_b,{})})]}),u(Uh,{}),b("div",{className:"list-title",children:[u("h1",{children:"Recommended Channels"}),u("div",{className:"camera",children:u(Lb,{})})]}),u(Uh,{}),u("div",{className:"side-search",children:u(x1,{placeholder:"Search to Add Friends"})})]})})},US=({mySize:e})=>{const{pathname:t}=St();return u(wb,{children:b(qe,{children:[u("div",{className:"header-box",children:b("header",{children:[u("div",{className:"left",children:b("ul",{children:[u("li",{children:u("div",{className:"item",children:u(me,{to:"/",children:u("div",{className:"logo",children:u("img",{src:"./public/images/logo/filtered/savingpulse-mb-transparent.png"})})})})}),u("li",{className:t==="/mutual-funds"?"active":"",children:u(me,{to:"/mutual-funds",className:"link",children:u("div",{className:"item",children:"Mutual funds"})})}),u("li",{className:t==="/following"?"active":"",children:u(me,{to:"/following",className:"link",children:u("div",{className:"item",children:"Following"})})}),u("li",{className:t==="/"?"active":"",children:u(me,{to:"/",className:"link",children:u("div",{className:"item",children:"Home"})})}),u("li",{className:t==="/ipo"?"active":"",children:u(me,{to:"/ipo",className:"link",children:u("div",{className:"item",children:"IPO's"})})}),u("li",{className:t==="/offers"?"active":"",children:u(me,{to:"/offers",className:"link",children:u("div",{className:"item",children:"Offers"})})}),u("li",{children:u("div",{className:"item",children:u(Jd,{className:"item-icon"})})})]})}),u("div",{className:"bottom"}),b("div",{className:"right",children:[b("div",{className:"search-bar",children:[u("input",{type:"text",placeholder:"Search"}),u("div",{className:"search-icon",children:u(Zd,{})})]}),u("div",{className:"right-icons",children:u("ul",{children:u("li",{children:u(Eb,{})})})}),u("div",{className:"profile-desktop",children:u(zS,{})})]})]})}),u("div",{className:"left-bar",children:u(BS,{mySize:e})})]})})},WS=I.header`
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
      min-width: 50px;
      min-height: 50px;

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
`,HS=I.div`
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
`,VS=({searchStatus:e,setSearchStatus:t})=>u(HS,{className:e?"search-visible":"",children:u("div",{className:"search-box",children:b("div",{className:"search-bar",children:[u(o1,{className:"search-close",onClick:()=>t(!e)}),u("input",{type:"text",placeholder:"Search..."})]})})}),KS=I.div`
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
`,XS=I.div`
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
`,GS=()=>{const{darkStatus:e}=et(n=>n.site),t=qd();return u(XS,{children:u("div",{className:"darkMode-container",onClick:n=>(n.preventDefault(),t(y1())),children:u("div",{className:`ball ${e?"dark":""}`})})})},YS=({handleCloseProfileMenu:e})=>{let t=mn();return u(KS,{children:b("div",{className:"profile-menu-container",children:[b("div",{className:"title",children:[u(o1,{onClick:e}),u("h1",{children:"Account"}),u(gc,{})]}),b("div",{className:"user",children:[u("div",{className:"user__top",children:u("div",{className:"user-box",children:u(fl,{})})}),u("div",{className:"user__bottom",children:u("div",{className:"username",children:"Arun Suthar"})}),u("span",{className:"user-since",children:"Member since 2020"})]}),u("div",{className:"settings",children:b("ul",{children:[u("li",{children:b("div",{className:"settings__title",children:[b("div",{className:"title-left",children:[u(Rb,{className:"title-icon"}),"Subscriptions"]}),u(nu,{})]})}),u("li",{children:b("div",{className:"settings__title",children:[b("div",{className:"title-left",children:[u(Tb,{className:"title-icon"}),"Friends"]}),u(nu,{})]})}),u("li",{children:u(me,{to:"/settings",children:b("div",{className:"settings__title",children:[b("div",{className:"title-left",children:[u(gc,{className:"title-icon"}),"Settings"]}),u(nu,{})]})})}),u("li",{children:b("div",{className:"settings__title",children:[b("div",{className:"title-left",children:[u(a1,{className:"title-icon"}),"Dark Mode"]}),u(GS,{})]})}),u("li",{children:u("div",{className:"settings__title",onClick:()=>{document.cookie="isLoggedIn="+!1,t("/login")},children:b("div",{className:"title-left",children:[u(Ub,{className:"title-icon"}),"Logout"]})})})]})})]})})},qS=()=>{const{pathname:e}=St(),[t,r]=k.exports.useState(!1),[n,i]=k.exports.useState(!1),o=()=>i(!n);let a="Home";switch(e){case"/mutual-funds":a="Mutual Funds";break;case"/following":a="Mutual Funds";break;case"/":a="Home";break;case"/ipo":a="Intial Public Offers";break;case"/offers":a="Offers";break;case"/all-mutual-funds":a="All Mutual Funds";break}return b(WS,{children:[b("header",{children:[u(me,{to:"/",children:u("div",{className:"logo",children:u("img",{src:"./images/logo/filtered/savingpulse-mb-transparent.png"})})}),u("h1",{className:"page-name",children:a}),u(VS,{searchStatus:t,setSearchStatus:r}),b("div",{className:"right-buttons",children:[u(Zd,{onClick:()=>r(!t)}),"\xA0 \xA0",u("div",{className:`profile-menu-box ${n?"visible":""}`,children:u(YS,{handleCloseProfileMenu:o})}),u("div",{className:"profile-box",children:u(fl,{onClick:()=>i(!n)})})]})]}),b("nav",{children:[u(me,{to:"/mutual-funds",onClick:()=>i(!1),children:b("div",{className:`item ${e==="/mutual-funds"?"active":""}`,children:[u(Fb,{}),u("span",{children:"Funds"})]})}),u(me,{to:"/following",onClick:()=>i(!1),children:b("div",{className:`item ${e==="/following"?"active":""}`,children:[u(Bb,{}),u("span",{children:"Following"})]})}),u(me,{to:"/",onClick:()=>i(!1),children:b("div",{className:`item ${e==="/"?"active":""}`,children:[u(Ib,{}),u("span",{children:"Home"})]})}),u(me,{to:"/ipo",onClick:()=>i(!1),children:b("div",{className:`item ${e==="/ipo"?"active":""}`,children:[u(Db,{className:"item__browse"}),u("span",{children:"IPO"})]})}),u(me,{to:"/offers",onClick:()=>i(!1),children:b("div",{className:`item ${e==="/offers"?"active":""}`,children:[u(jb,{className:"item__profile"}),u("span",{children:"Offers"})]})})]})]})},QS=({mySize:e})=>b("div",{className:"header",children:[u(qS,{}),u(US,{mySize:e})]}),JS=I.div`
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
`,ZS=I.div`
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
`,du=({ipo:e})=>{var t,r,n;return u(ZS,{children:b("div",{className:"ipo-box",children:[b("div",{className:"header",children:[u("div",{className:"picture",children:u("img",{src:e.image,alt:""})}),b("div",{children:[u("h2",{className:"name",children:e.name}),b("p",{className:"offer",children:["Offer date: ",(t=e==null?void 0:e.date)==null?void 0:t.start," - ",(r=e==null?void 0:e.date)==null?void 0:r.end]})]})]}),b("div",{className:"actions",children:[b("div",{className:"tags",children:[u("div",{className:"tag",children:e.exchange}),u("div",{className:"tag",children:"Live"})]}),b("div",{className:"action-link",children:[u(me,{className:"link",to:"",title:"Apply",children:"Apply"}),b(me,{className:"link",to:"",title:"Check Allotment",children:[u("span",{className:"hide-mb1",children:"Check "}),"Allotment"]})]})]}),b("div",{className:"more-details",children:[b("div",{children:[u("span",{children:"Offer Price"}),u("span",{children:(n=e==null?void 0:e.price)==null?void 0:n.offer})]}),u("div",{className:"divider"}),b("div",{children:[u("span",{children:"Lot Size"}),u("span",{children:e.lotSize})]}),u("div",{className:"divider"}),b("div",{children:[u("span",{children:"Subscription"}),b("span",{children:[e.subscriptions," times"]})]})]})]})})},e5=I.div`
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
`,t5=()=>u(e5,{children:u("div",{className:"tags-box",children:b("ul",{children:[u("li",{children:b("div",{className:"item",children:[u("span",{children:"Games"}),u("div",{className:"icon",children:u("img",{src:"https://static.twitchcdn.net/assets/gaming-e9019587744b56b11b43.svg",alt:""})})]})}),u("li",{children:b("div",{className:"item",children:[u("span",{children:"IRL"}),u("div",{className:"icon",children:u("img",{src:"https://static.twitchcdn.net/assets/irl-baa32e8e64a6974282c0.svg",alt:""})})]})}),u("li",{children:b("div",{className:"item",children:[u("span",{children:"Music"}),u("div",{className:"icon",children:u("img",{src:"https://static.twitchcdn.net/assets/music-5fb4595a30d04d991e24.svg",alt:""})})]})}),u("li",{children:b("div",{className:"item",children:[u("span",{children:"Esports"}),u("div",{className:"icon",children:u("img",{src:"https://static.twitchcdn.net/assets/esports-7a078acca57531d11e29.svg",alt:""})})]})}),u("li",{children:b("div",{className:"item",children:[u("span",{children:"Creative"}),u("div",{className:"icon",children:u("img",{src:"https://static.twitchcdn.net/assets/creative-6423fb5fbcf31fadee38.svg",alt:""})})]})})]})})}),r5=I.div`
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
`,wr=({title:e,to:t})=>{const{pathname:r}=St();return u(r5,{children:u("div",{className:`link-box ${r==t?"active":""}`,children:u(me,{to:t||"/",className:"link",children:e||"default"})})})};var w1={};function n5(e){if(e&&e.__esModule)return e;var t={};if(e!=null){for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}}return t.default=e,t}var b1=n5,Br={};function i5(e){return e&&e.__esModule?e:{default:e}}var o5=i5;function Sc(){return S1=Sc=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Sc.apply(this,arguments)}var S1=Sc;function a5(e,t){if(e==null)return{};var r={},n=Object.keys(e),i,o;for(o=0;o<n.length;o++)i=n[o],!(t.indexOf(i)>=0)&&(r[i]=e[i]);return r}var l5=a5,s5=l5;function u5(e,t){if(e==null)return{};var r=s5(e,t),n,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],!(t.indexOf(n)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,n)||(r[n]=e[n]))}return r}var c5=u5;function d5(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var f5=d5;function Wh(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p5(e,t,r){return t&&Wh(e.prototype,t),r&&Wh(e,r),e}var h5=p5;function Kn(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Kn=function(r){return typeof r}:Kn=function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},Kn(e)}function Ta(e){return typeof Symbol=="function"&&Kn(Symbol.iterator)==="symbol"?kc=Ta=function(r){return Kn(r)}:kc=Ta=function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":Kn(r)},Ta(e)}var kc=Ta;function m5(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var g5=m5,v5=kc,y5=g5;function x5(e,t){return t&&(v5(t)==="object"||typeof t=="function")?t:y5(e)}var w5=x5;function Cc(e){return k1=Cc=Object.setPrototypeOf?Object.getPrototypeOf:function(r){return r.__proto__||Object.getPrototypeOf(r)},Cc(e)}var k1=Cc;function _c(e,t){return C1=_c=Object.setPrototypeOf||function(n,i){return n.__proto__=i,n},_c(e,t)}var C1=_c,b5=C1;function S5(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b5(e,t)}var k5=S5,C5=function(){},sf=C5,Uo={};function _5(e){return e&&e.__esModule?e:{default:e}}var Zl=_5,es={},_1=Zl;Object.defineProperty(es,"__esModule",{value:!0});es.default=void 0;var E5=_1(k.exports);_1(sf);var $5=function(t){t.index;var r=t.children;E5.default.Children.count(r)},P5=$5;es.default=P5;var uf={},Wo={};Object.defineProperty(Wo,"__esModule",{value:!0});Wo.default=void 0;var O5={RESISTANCE_COEF:.6,UNCERTAINTY_THRESHOLD:3};Wo.default=O5;var E1=Zl;Object.defineProperty(uf,"__esModule",{value:!0});uf.default=T5;var N5=E1(k.exports),Hh=E1(Wo);function T5(e){var t=e.children,r=e.startIndex,n=e.startX,i=e.pageX,o=e.viewLength,a=e.resistance,l=N5.default.Children.count(t)-1,s=r+(n-i)/o,c;return a?s<0?s=Math.exp(s*Hh.default.RESISTANCE_COEF)-1:s>l&&(s=l+1-Math.exp((l-s)*Hh.default.RESISTANCE_COEF)):s<0?(s=0,c=(s-r)*o+i):s>l&&(s=l,c=(s-r)*o+i),{index:s,startX:c}}var ts={},R5=Zl;Object.defineProperty(ts,"__esModule",{value:!0});ts.default=void 0;var Vh=R5(k.exports),M5=function(t,r){var n=!1,i=function(d){return d?d.key:"empty"};if(t.children.length&&r.children.length){var o=Vh.default.Children.map(t.children,i),a=o[t.index];if(a!=null){var l=Vh.default.Children.map(r.children,i),s=l[r.index];a===s&&(n=!0)}}return n},j5=M5;ts.default=j5;var rs={};Object.defineProperty(rs,"__esModule",{value:!0});rs.default=void 0;function z5(e,t){var r=e%t;return r<0?r+t:r}var L5=z5;rs.default=L5;(function(e){var t=Zl;Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"checkIndexBounds",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(e,"computeIndex",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(e,"constant",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(e,"getDisplaySameSlide",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(e,"mod",{enumerable:!0,get:function(){return a.default}});var r=t(es),n=t(uf),i=t(Wo),o=t(ts),a=t(rs)})(Uo);var A5=b1,sr=o5;Object.defineProperty(Br,"__esModule",{value:!0});Br.getDomTreeShapes=$1;Br.findNativeHandler=P1;Br.default=Br.SwipeableViewsContext=void 0;var fa=sr(S1),I5=sr(c5),D5=sr(f5),F5=sr(h5),B5=sr(w5),U5=sr(k1),W5=sr(k5),Gt=A5(k.exports);sr(fi.exports);sr(sf);var pa=Uo;function Kh(e,t,r,n){return e.addEventListener(t,r,n),{remove:function(){e.removeEventListener(t,r,n)}}}var Xh={container:{direction:"ltr",display:"flex",willChange:"transform"},slide:{width:"100%",WebkitFlexShrink:0,flexShrink:0,overflow:"auto"}},jt={root:{x:{overflowX:"hidden"},"x-reverse":{overflowX:"hidden"},y:{overflowY:"hidden"},"y-reverse":{overflowY:"hidden"}},flexDirection:{x:"row","x-reverse":"row-reverse",y:"column","y-reverse":"column-reverse"},transform:{x:function(t){return"translate(".concat(-t,"%, 0)")},"x-reverse":function(t){return"translate(".concat(t,"%, 0)")},y:function(t){return"translate(0, ".concat(-t,"%)")},"y-reverse":function(t){return"translate(0, ".concat(t,"%)")}},length:{x:"width","x-reverse":"width",y:"height","y-reverse":"height"},rotationMatrix:{x:{x:[1,0],y:[0,1]},"x-reverse":{x:[-1,0],y:[0,1]},y:{x:[0,1],y:[1,0]},"y-reverse":{x:[0,-1],y:[1,0]}},scrollPosition:{x:"scrollLeft","x-reverse":"scrollLeft",y:"scrollTop","y-reverse":"scrollTop"},scrollLength:{x:"scrollWidth","x-reverse":"scrollWidth",y:"scrollHeight","y-reverse":"scrollHeight"},clientLength:{x:"clientWidth","x-reverse":"clientWidth",y:"clientHeight","y-reverse":"clientHeight"}};function fu(e,t){var r=t.duration,n=t.easeFunction,i=t.delay;return"".concat(e," ").concat(r," ").concat(n," ").concat(i)}function pu(e,t){var r=jt.rotationMatrix[t];return{pageX:r.x[0]*e.pageX+r.x[1]*e.pageY,pageY:r.y[0]*e.pageX+r.y[1]*e.pageY}}function ha(e){return e.touches=[{pageX:e.pageX,pageY:e.pageY}],e}function $1(e,t){for(var r=[];e&&e!==t&&e!==document.body&&!e.hasAttribute("data-swipeable");){var n=window.getComputedStyle(e);n.getPropertyValue("position")==="absolute"||n.getPropertyValue("overflow-x")==="hidden"?r=[]:(e.clientWidth>0&&e.scrollWidth>e.clientWidth||e.clientHeight>0&&e.scrollHeight>e.clientHeight)&&r.push({element:e,scrollWidth:e.scrollWidth,scrollHeight:e.scrollHeight,clientWidth:e.clientWidth,clientHeight:e.clientHeight,scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}),e=e.parentNode}return r}var Gr=null;function P1(e){var t=e.domTreeShapes,r=e.pageX,n=e.startX,i=e.axis;return t.some(function(o){var a=r>=n;(i==="x"||i==="y")&&(a=!a);var l=Math.round(o[jt.scrollPosition[i]]),s=l>0,c=l+o[jt.clientLength[i]]<o[jt.scrollLength[i]];return a&&c||!a&&s?(Gr=o.element,!0):!1})}var O1=Gt.createContext();Br.SwipeableViewsContext=O1;var ns=function(e){(0,W5.default)(t,e);function t(r){var n;return(0,D5.default)(this,t),n=(0,B5.default)(this,(0,U5.default)(t).call(this,r)),n.rootNode=null,n.containerNode=null,n.ignoreNextScrollEvents=!1,n.viewLength=0,n.startX=0,n.lastX=0,n.vx=0,n.startY=0,n.isSwiping=void 0,n.started=!1,n.startIndex=0,n.transitionListener=null,n.touchMoveListener=null,n.activeSlide=null,n.indexCurrent=null,n.firstRenderTimeout=null,n.setRootNode=function(i){n.rootNode=i},n.setContainerNode=function(i){n.containerNode=i},n.setActiveSlide=function(i){n.activeSlide=i,n.updateHeight()},n.handleSwipeStart=function(i){var o=n.props.axis,a=pu(i.touches[0],o);n.viewLength=n.rootNode.getBoundingClientRect()[jt.length[o]],n.startX=a.pageX,n.lastX=a.pageX,n.vx=0,n.startY=a.pageY,n.isSwiping=void 0,n.started=!0;var l=window.getComputedStyle(n.containerNode),s=l.getPropertyValue("-webkit-transform")||l.getPropertyValue("transform");if(s&&s!=="none"){var c=s.split("(")[1].split(")")[0].split(","),d=window.getComputedStyle(n.rootNode),f=pu({pageX:parseInt(c[4],10),pageY:parseInt(c[5],10)},o);n.startIndex=-f.pageX/(n.viewLength-parseInt(d.paddingLeft,10)-parseInt(d.paddingRight,10))||0}},n.handleSwipeMove=function(i){if(!n.started){n.handleTouchStart(i);return}if(!(Gr!==null&&Gr!==n.rootNode)){var o=n.props,a=o.axis,l=o.children,s=o.ignoreNativeScroll,c=o.onSwitching,d=o.resistance,f=pu(i.touches[0],a);if(n.isSwiping===void 0){var m=Math.abs(f.pageX-n.startX),y=Math.abs(f.pageY-n.startY),x=m>y&&m>pa.constant.UNCERTAINTY_THRESHOLD;if(!d&&(a==="y"||a==="y-reverse")&&(n.indexCurrent===0&&n.startX<f.pageX||n.indexCurrent===Gt.Children.count(n.props.children)-1&&n.startX>f.pageX)){n.isSwiping=!1;return}if(m>y&&i.preventDefault(),x===!0||y>pa.constant.UNCERTAINTY_THRESHOLD){n.isSwiping=x,n.startX=f.pageX;return}}if(n.isSwiping===!0){i.preventDefault(),n.vx=n.vx*.5+(f.pageX-n.lastX)*.5,n.lastX=f.pageX;var v=(0,pa.computeIndex)({children:l,resistance:d,pageX:f.pageX,startIndex:n.startIndex,startX:n.startX,viewLength:n.viewLength}),p=v.index,h=v.startX;if(Gr===null&&!s){var g=$1(i.target,n.rootNode),w=P1({domTreeShapes:g,startX:n.startX,pageX:f.pageX,axis:a});if(w)return}h?n.startX=h:Gr===null&&(Gr=n.rootNode),n.setIndexCurrent(p);var S=function(){c&&c(p,"move")};(n.state.displaySameSlide||!n.state.isDragging)&&n.setState({displaySameSlide:!1,isDragging:!0},S),S()}}},n.handleSwipeEnd=function(){if(Gr=null,!!n.started&&(n.started=!1,n.isSwiping===!0)){var i=n.state.indexLatest,o=n.indexCurrent,a=i-o,l;Math.abs(n.vx)>n.props.threshold?n.vx>0?l=Math.floor(o):l=Math.ceil(o):Math.abs(a)>n.props.hysteresis?l=a>0?Math.floor(o):Math.ceil(o):l=i;var s=Gt.Children.count(n.props.children)-1;l<0?l=0:l>s&&(l=s),n.setIndexCurrent(l),n.setState({indexLatest:l,isDragging:!1},function(){n.props.onSwitching&&n.props.onSwitching(l,"end"),n.props.onChangeIndex&&l!==i&&n.props.onChangeIndex(l,i,{reason:"swipe"}),o===i&&n.handleTransitionEnd()})}},n.handleTouchStart=function(i){n.props.onTouchStart&&n.props.onTouchStart(i),n.handleSwipeStart(i)},n.handleTouchEnd=function(i){n.props.onTouchEnd&&n.props.onTouchEnd(i),n.handleSwipeEnd(i)},n.handleMouseDown=function(i){n.props.onMouseDown&&n.props.onMouseDown(i),i.persist(),n.handleSwipeStart(ha(i))},n.handleMouseUp=function(i){n.props.onMouseUp&&n.props.onMouseUp(i),n.handleSwipeEnd(ha(i))},n.handleMouseLeave=function(i){n.props.onMouseLeave&&n.props.onMouseLeave(i),n.started&&n.handleSwipeEnd(ha(i))},n.handleMouseMove=function(i){n.props.onMouseMove&&n.props.onMouseMove(i),n.started&&n.handleSwipeMove(ha(i))},n.handleScroll=function(i){if(n.props.onScroll&&n.props.onScroll(i),i.target===n.rootNode){if(n.ignoreNextScrollEvents){n.ignoreNextScrollEvents=!1;return}var o=n.state.indexLatest,a=Math.ceil(i.target.scrollLeft/i.target.clientWidth)+o;n.ignoreNextScrollEvents=!0,i.target.scrollLeft=0,n.props.onChangeIndex&&a!==o&&n.props.onChangeIndex(a,o,{reason:"focus"})}},n.updateHeight=function(){if(n.activeSlide!==null){var i=n.activeSlide.children[0];i!==void 0&&i.offsetHeight!==void 0&&n.state.heightLatest!==i.offsetHeight&&n.setState({heightLatest:i.offsetHeight})}},n.state={indexLatest:r.index,isDragging:!1,renderOnlyActive:!r.disableLazyLoading,heightLatest:0,displaySameSlide:!0},n.setIndexCurrent(r.index),n}return(0,F5.default)(t,[{key:"componentDidMount",value:function(){var n=this;this.transitionListener=Kh(this.containerNode,"transitionend",function(i){i.target===n.containerNode&&n.handleTransitionEnd()}),this.touchMoveListener=Kh(this.rootNode,"touchmove",function(i){n.props.disabled||n.handleSwipeMove(i)},{passive:!1}),this.props.disableLazyLoading||(this.firstRenderTimeout=setTimeout(function(){n.setState({renderOnlyActive:!1})},0)),this.props.action&&this.props.action({updateHeight:this.updateHeight})}},{key:"UNSAFE_componentWillReceiveProps",value:function(n){var i=n.index;typeof i=="number"&&i!==this.props.index&&(this.setIndexCurrent(i),this.setState({displaySameSlide:(0,pa.getDisplaySameSlide)(this.props,n),indexLatest:i}))}},{key:"componentWillUnmount",value:function(){this.transitionListener.remove(),this.touchMoveListener.remove(),clearTimeout(this.firstRenderTimeout)}},{key:"getSwipeableViewsContext",value:function(){var n=this;return{slideUpdateHeight:function(){n.updateHeight()}}}},{key:"setIndexCurrent",value:function(n){if(!this.props.animateTransitions&&this.indexCurrent!==n&&this.handleTransitionEnd(),this.indexCurrent=n,this.containerNode){var i=this.props.axis,o=jt.transform[i](n*100);this.containerNode.style.WebkitTransform=o,this.containerNode.style.transform=o}}},{key:"handleTransitionEnd",value:function(){!this.props.onTransitionEnd||this.state.displaySameSlide||this.state.isDragging||this.props.onTransitionEnd()}},{key:"render",value:function(){var n=this,i=this.props;i.action;var o=i.animateHeight,a=i.animateTransitions,l=i.axis,s=i.children,c=i.containerStyle,d=i.disabled;i.disableLazyLoading;var f=i.enableMouseEvents;i.hysteresis,i.ignoreNativeScroll,i.index,i.onChangeIndex,i.onSwitching,i.onTransitionEnd,i.resistance;var m=i.slideStyle,y=i.slideClassName,x=i.springConfig,v=i.style;i.threshold;var p=(0,I5.default)(i,["action","animateHeight","animateTransitions","axis","children","containerStyle","disabled","disableLazyLoading","enableMouseEvents","hysteresis","ignoreNativeScroll","index","onChangeIndex","onSwitching","onTransitionEnd","resistance","slideStyle","slideClassName","springConfig","style","threshold"]),h=this.state,g=h.displaySameSlide,w=h.heightLatest,S=h.indexLatest,_=h.isDragging,E=h.renderOnlyActive,O=d?{}:{onTouchStart:this.handleTouchStart,onTouchEnd:this.handleTouchEnd},z=!d&&f?{onMouseDown:this.handleMouseDown,onMouseUp:this.handleMouseUp,onMouseLeave:this.handleMouseLeave,onMouseMove:this.handleMouseMove}:{},T=(0,fa.default)({},Xh.slide,m),D,G;if(_||!a||g)D="all 0s ease 0s",G="all 0s ease 0s";else if(D=fu("transform",x),G=fu("-webkit-transform",x),w!==0){var W=", ".concat(fu("height",x));D+=W,G+=W}var H={height:null,WebkitFlexDirection:jt.flexDirection[l],flexDirection:jt.flexDirection[l],WebkitTransition:G,transition:D};if(!E){var he=jt.transform[l](this.indexCurrent*100);H.WebkitTransform=he,H.transform=he}return o&&(H.height=w),Gt.createElement(O1.Provider,{value:this.getSwipeableViewsContext()},Gt.createElement("div",(0,fa.default)({ref:this.setRootNode,style:(0,fa.default)({},jt.root[l],v)},p,O,z,{onScroll:this.handleScroll}),Gt.createElement("div",{ref:this.setContainerNode,style:(0,fa.default)({},H,Xh.container,c),className:"react-swipeable-view-container"},Gt.Children.map(s,function(le,Fe){if(E&&Fe!==S)return null;var Pe,Ee=!0;return Fe===S&&(Ee=!1,o&&(Pe=n.setActiveSlide,T.overflowY="hidden")),Gt.createElement("div",{ref:Pe,style:T,className:y,"aria-hidden":Ee,"data-swipeable":"true"},le)}))))}}]),t}(Gt.Component);ns.displayName="ReactSwipableView";ns.propTypes={};ns.defaultProps={animateHeight:!1,animateTransitions:!0,axis:"x",disabled:!1,disableLazyLoading:!1,enableMouseEvents:!1,hysteresis:.6,ignoreNativeScroll:!1,index:0,threshold:5,springConfig:{duration:"0.35s",easeFunction:"cubic-bezier(0.15, 0.3, 0.25, 1)",delay:"0s"},resistance:!1};var H5=ns;Br.default=H5;(function(e){var t=b1;Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(e,"SwipeableViewsContext",{enumerable:!0,get:function(){return r.SwipeableViewsContext}});var r=t(Br)})(w1);var N1=Iv(w1);const V5=I.div`
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
`,cf=({tabs:e=[]})=>{const[t,r]=k.exports.useState(0);return b(V5,{children:[u("div",{className:"tab-manager",children:u("div",{className:"navigation",children:e.map((n,i)=>u("div",{className:t===i?"nav-active":"",onClick:()=>r(i),children:n.title},i))})}),u(N1,{index:t,onChangeIndex:r,children:e.map((n,i)=>u("div",{children:n.component},i))})]})},yn=()=>{k.exports.useState(!0);const{ipos:e}=et(t=>t.ipos);return u(qe,{children:b(JS,{children:[u("div",{className:"ipos-mobile1",children:u(cf,{tabs:[{name:"all",title:"All",component:u("div",{className:"container",children:e.map((t,r)=>u(du,{ipo:t,imageId:r},r))})},{name:"mainline",title:"Mainline",component:u("div",{className:"container",children:e.map((t,r)=>t.type!=="mainline"?null:u(du,{ipo:t,imageId:r},r))})},{name:"sme",title:"SME",component:u("div",{className:"container",children:e.map((t,r)=>t.type!=="sme"?null:u(du,{ipo:t,imageId:r},r))})}]})}),u("div",{className:"browse-desktop",children:b("div",{className:"ipo-box",children:[u("h1",{className:"page-title",children:"Browse"}),u(t5,{}),u("div",{className:"nav",children:b("ul",{children:[u("li",{children:u(wr,{to:"/browse",title:"Categories"})}),u("li",{children:u(wr,{to:"/browse/all",title:"Live Channels"})})]})}),b("div",{className:"search-filter",children:[b("div",{className:"search-box",children:[u("span",{children:"Filter by"}),u(x1,{placeholder:"Search Tags"})]}),b("div",{className:"filter",children:[u("span",{children:"Sort by"}),b("div",{className:"sort",children:["Recommended For You",u("div",{className:"sort-icon",children:u(n1,{})})]})]})]}),u(Fd,{})]})})]})})};I.div`
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
`;const K5=I.div`
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
`,X5=I.div`
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
`,G5=({user:e,imageId:t})=>u(X5,{children:b("div",{className:"channel-box",children:[b("div",{className:"live-screen",children:[u("img",{src:e.liveScreen,alt:""}),b("span",{children:[u(Qd,{className:"live-icon"})," ",e.viewers]})]}),b("div",{className:"live-info",children:[b("div",{className:"user",children:[u("div",{className:"user-pp",children:u("img",{src:`https://i.pravatar.cc/5${t}`,alt:""})}),u("div",{className:"user-name",children:e.username})]}),u("div",{className:"title",children:e.title}),u("div",{className:"game",children:e.game}),u("div",{className:"tags",children:u("div",{className:"tag",children:e.tag})})]})]})}),Y5=()=>{const{users:e}=et(t=>t.user);return u(qe,{children:e.map((t,r)=>u(G5,{user:t,imageId:r},r))})},q5=I.div`
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
`,Q5=({user:e,imageId:t})=>u(q5,{children:b("div",{className:"offline-box",children:[u("div",{className:"left",children:u("div",{className:"pp",children:u("img",{src:`https://i.pravatar.cc/5${t}`,alt:""})})}),b("div",{className:"right",children:[u("div",{className:"username",children:e.username}),u("div",{className:"videos",children:"7 new videos"})]})]})}),J5=()=>{const{users:e}=et(t=>t.user);return u(qe,{children:e.map((t,r)=>{if(r<3)return u(Q5,{user:t,imageId:r},r)})})},Z5=()=>(St(),u(qe,{children:b(K5,{children:[u("div",{className:"follow-mobile",children:b("div",{className:"follow-box",children:[u("h1",{children:"Following"}),u("h3",{children:"Your Live Channels"}),u(Y5,{}),u("h3",{children:"Your Offline Channels"}),u(J5,{})]})}),u("div",{className:"follow-desktop",children:b("div",{className:"follow-box",children:[u("div",{className:"nav",children:b("ul",{children:[u("li",{children:u(wr,{to:"/following",title:"Overview"})}),u("li",{children:u(wr,{to:"/following/live",title:"Live"})}),u("li",{children:u(wr,{to:"/following/videos",title:"Videos"})}),u("li",{children:u(wr,{to:"/following/categories",title:"Categories"})})]})}),u("div",{className:"page",children:u(Fd,{})})]})})]})}));I.div`
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
`;I.div`
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
`;const e4=I.div`
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
`,t4=({activeFilter:e,onFilterChange:t})=>{const[r,n]=k.exports.useState(1),i=o=>{t(o),n(o==3?1:o+1)};return u(e4,{children:b("div",{className:"year-filters",children:[r===1&&u("button",{className:"filter-button",onClick:()=>i(1),children:"< > 1Y Returns"}),r===2&&u("button",{className:"filter-button",onClick:()=>i(2),children:"< > 3Y Returns"}),r===3&&u("button",{className:"filter-button",onClick:()=>i(0),children:"< > 5Y Returns"})]})})},r4=I.div`
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
`,T1=({scheme:e,activeFilter:t})=>{const r=n=>n.toLowerCase().replace(/\b\w/g,i=>i.toUpperCase());return u(r4,{children:b("div",{className:"scheme-container",children:[u("div",{className:"image",children:u("img",{src:`./images/amc-logo/${e.amc_logo}`,alt:""})}),b("div",{className:"info",children:[u("div",{className:"name",children:r(e.Scheme_Name)}),b("div",{className:"description",children:[e.Scheme_Type," - ",e.Scheme_Type," - ",e.Face_Value]})]}),u("div",{className:"return",children:u("div",{className:"1"})})]})})},n4=I.div`
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
`,i4=I.div`
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
`,o4=({game:e})=>u(n4,{children:b("div",{className:"game-box",children:[u("div",{className:"game-picture",children:u("img",{src:e.image,alt:""})}),b("div",{className:"game-name",children:[u("div",{className:"name",children:e.name}),u("div",{className:"other-icon",children:u(Jd,{})})]}),b("div",{className:"game-viewers",children:[e.viewer," viewers"]}),u("div",{className:"tags",children:u("div",{className:"tag",children:"English"})})]})}),R1=({title:e,boldTitle:t})=>{const{games:r}=et(n=>n.category);return u(i4,{children:b("div",{className:"categories-box",children:[b("h1",{children:[u("span",{children:t})," ",e]}),u("div",{className:"list",children:r.map((n,i)=>u(o4,{game:n},i))})]})})},a4=I.div`
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
`,l4=I.div`
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
`,s4=({user:e,imageId:t,video:r})=>u(a4,{children:b("div",{className:"channel-box",children:[b("div",{className:"live-screen",children:[u("img",{src:e.liveScreen,alt:""}),u("div",{className:`live ${r?"invisible":""}`,children:"live"}),u("div",{className:`viewers ${r?"invisible":""}`,children:"333 viewers"}),b("div",{className:`video ${r?"video-visible":""}`,children:[u("div",{className:"video-tag top",children:"11:44"}),u("div",{className:"video-tag bottom-right",children:"4 hours ago"}),u("div",{className:"video-tag bottom",children:"188 views"})]})]}),b("div",{className:"channel-info",children:[b("div",{className:"left",children:[u("div",{className:"pp",children:u("img",{src:`https://i.pravatar.cc/5${t}`,alt:""})}),b("div",{className:"profile-info",children:[u("div",{className:"title",children:e.title}),u("div",{className:"username",children:e.username}),u("div",{className:"game",children:e.game}),b("div",{className:"tags",children:[u("div",{className:"tag",children:"English"}),u("div",{className:"tag",children:"Esports"})]})]})]}),u("div",{className:"right",children:u(Jd,{})})]})]})}),Ve=({channelTitle:e,video:t})=>{const{users:r}=et(n=>n.user);return u(l4,{children:b("div",{className:"channels-box",children:[e&&u("h1",{children:e}),u("div",{className:"list",children:r.map((n,i)=>{if(i<6)return u(s4,{user:n,imageId:i,video:t},i)})})]})})},hu=()=>b(qe,{children:[u(Ve,{}),u(Ve,{}),u(Ve,{}),u(Ve,{}),u(Ve,{}),u(Ve,{}),u(Ve,{}),u(Ve,{})]}),u4=I.div`
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
`,ma=({title:e})=>u(u4,{children:u("div",{className:"show-more",children:e&&b("span",{children:[e,u(n1,{className:"down-icon"})]})})}),c4=()=>b("div",{className:"overview-box",children:[u(Ve,{channelTitle:"Live channels"}),u(ma,{title:"Show more"}),u(Ve,{channelTitle:"Recommended channels"}),u(ma,{title:"Show more"}),u(Ve,{channelTitle:"Latest videos",video:!0}),u(ma,{title:"Show more"}),u(R1,{title:"Live categories"}),u(ma,{})]}),d4=()=>u(qe,{children:u(Ve,{channelTitle:"Live channels"})}),f4=()=>u(qe,{children:b("div",{className:"overview-page",children:[u(Ve,{channelTitle:"Latest videos",video:!0}),u(Ve,{video:!0}),u(Ve,{video:!0}),u(Ve,{video:!0})]})}),p4=()=>u(qe,{children:u(R1,{title:"Live categories"})}),h4=I.div`
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
`,m4=I.div`
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
`,Gh=({offer:e})=>u(m4,{children:b("div",{className:"offer-box",children:[u("h2",{className:"offer-name",children:e.name}),u(me,{to:"/{offer.href}",children:u("div",{className:"offer-picture",children:u("img",{src:e.image,alt:""})})}),u("div",{className:"know-more",children:u("button",{children:"Know More..."})})]})}),g4=()=>{k.exports.useState(!0);const{offers:e}=et(t=>t.offers);return u(qe,{children:u("div",{className:"offers-mobile",children:b(h4,{children:[u(cf,{tabs:[{name:"brokers",title:"Brokers",component:u("div",{className:"container",children:e.map((t,r)=>{if(t.type!=="advisor")return u(Gh,{offer:t,imageId:r},r)})})},{name:"advisors",title:"Advisors",component:u("div",{className:"container",children:e.map((t,r)=>{if(t.type!=="advisor")return u(Gh,{offer:t,imageId:r},r)})})}]}),u("div",{className:"offers-desktop",children:b("div",{className:"offers-box",children:[u("h1",{className:"page-title",children:"Offers"}),u("div",{className:"nav",children:b("ul",{children:[u("li",{children:u(wr,{to:"/offers/brokers",title:"Brokers"})}),u("li",{children:u(wr,{to:"/offers/advisors",title:"Advisors"})})]})}),u("div",{className:"page",children:u(Fd,{})})]})})]})})})};I.div`
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
`;I.div`
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
`;I.div`
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
`;I.div`
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
`;I.div`
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
`;I.div`
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
`;const v4=I.div`
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
`,Yh=({type:e=""})=>{const{offers:t}=et(r=>r.offers);return u(v4,{children:t.map((r,n)=>{if(r.type===e)return b("div",{className:`offer-box offer-${r.id}`,children:[b("div",{className:"left-side",children:[u("div",{className:"picture",children:u("img",{src:r.image,alt:""})}),u("h2",{className:"name",children:r.name})]}),b("div",{className:"right-side",children:[b("div",{children:[b("ul",{className:"available-options",children:[u("li",{children:"Equity"}),u("li",{children:"Future"}),u("li",{children:"Option"}),u("li",{children:"Commodity"})]}),b("ul",{className:"new-info",children:[u("li",{children:"Account Opening"}),u("li",{children:"Account Maintenance"}),u("li",{children:"Account Maintenance"}),u("li",{children:"Account Maintenance"})]})]}),b("ul",{className:"action-buttons",children:[u("li",{children:"View Details"}),u("li",{children:"Open Account"})]})]})]},r.id)})})},y4={black:"#000",white:"#fff"};var So=y4;const x4={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"};var xn=x4;const w4={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff"};var wn=w4;const b4={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"};var bn=b4;const S4={50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea"};var Sn=S4;const k4={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"};var kn=k4;const C4={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00"};var Ti=C4;const _4={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"};var E4=_4;function un(e){let t="https://mui.com/production-error/?code="+e;for(let r=1;r<arguments.length;r+=1)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified MUI error #"+e+"; visit "+t+" for the full message."}var $4=Object.freeze(Object.defineProperty({__proto__:null,default:un},Symbol.toStringTag,{value:"Module"})),M1="$$material",P4=!1;function O4(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function N4(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var T4=function(){function e(r){var n=this;this._insertTag=function(i){var o;n.tags.length===0?n.insertionPoint?o=n.insertionPoint.nextSibling:n.prepend?o=n.container.firstChild:o=n.before:o=n.tags[n.tags.length-1].nextSibling,n.container.insertBefore(i,o),n.tags.push(i)},this.isSpeedy=r.speedy===void 0?!P4:r.speedy,this.tags=[],this.ctr=0,this.nonce=r.nonce,this.key=r.key,this.container=r.container,this.prepend=r.prepend,this.insertionPoint=r.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(n){n.forEach(this._insertTag)},t.insert=function(n){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(N4(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var o=O4(i);try{o.insertRule(n,o.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(n));this.ctr++},t.flush=function(){this.tags.forEach(function(n){var i;return(i=n.parentNode)==null?void 0:i.removeChild(n)}),this.tags=[],this.ctr=0},e}(),Ue="-ms-",yl="-moz-",Y="-webkit-",j1="comm",df="rule",ff="decl",R4="@import",z1="@keyframes",M4="@layer",j4=Math.abs,is=String.fromCharCode,z4=Object.assign;function L4(e,t){return Ae(e,0)^45?(((t<<2^Ae(e,0))<<2^Ae(e,1))<<2^Ae(e,2))<<2^Ae(e,3):0}function L1(e){return e.trim()}function A4(e,t){return(e=t.exec(e))?e[0]:e}function q(e,t,r){return e.replace(t,r)}function Ec(e,t){return e.indexOf(t)}function Ae(e,t){return e.charCodeAt(t)|0}function ko(e,t,r){return e.slice(t,r)}function zt(e){return e.length}function pf(e){return e.length}function ga(e,t){return t.push(e),e}function I4(e,t){return e.map(t).join("")}var os=1,ni=1,A1=0,at=0,_e=0,hi="";function as(e,t,r,n,i,o,a){return{value:e,root:t,parent:r,type:n,props:i,children:o,line:os,column:ni,length:a,return:""}}function Ri(e,t){return z4(as("",null,null,"",null,null,0),e,{length:-e.length},t)}function D4(){return _e}function F4(){return _e=at>0?Ae(hi,--at):0,ni--,_e===10&&(ni=1,os--),_e}function ut(){return _e=at<A1?Ae(hi,at++):0,ni++,_e===10&&(ni=1,os++),_e}function Wt(){return Ae(hi,at)}function Ra(){return at}function Ho(e,t){return ko(hi,e,t)}function Co(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function I1(e){return os=ni=1,A1=zt(hi=e),at=0,[]}function D1(e){return hi="",e}function Ma(e){return L1(Ho(at-1,$c(e===91?e+2:e===40?e+1:e)))}function B4(e){for(;(_e=Wt())&&_e<33;)ut();return Co(e)>2||Co(_e)>3?"":" "}function U4(e,t){for(;--t&&ut()&&!(_e<48||_e>102||_e>57&&_e<65||_e>70&&_e<97););return Ho(e,Ra()+(t<6&&Wt()==32&&ut()==32))}function $c(e){for(;ut();)switch(_e){case e:return at;case 34:case 39:e!==34&&e!==39&&$c(_e);break;case 40:e===41&&$c(e);break;case 92:ut();break}return at}function W4(e,t){for(;ut()&&e+_e!==47+10;)if(e+_e===42+42&&Wt()===47)break;return"/*"+Ho(t,at-1)+"*"+is(e===47?e:ut())}function H4(e){for(;!Co(Wt());)ut();return Ho(e,at)}function V4(e){return D1(ja("",null,null,null,[""],e=I1(e),0,[0],e))}function ja(e,t,r,n,i,o,a,l,s){for(var c=0,d=0,f=a,m=0,y=0,x=0,v=1,p=1,h=1,g=0,w="",S=i,_=o,E=n,O=w;p;)switch(x=g,g=ut()){case 40:if(x!=108&&Ae(O,f-1)==58){Ec(O+=q(Ma(g),"&","&\f"),"&\f")!=-1&&(h=-1);break}case 34:case 39:case 91:O+=Ma(g);break;case 9:case 10:case 13:case 32:O+=B4(x);break;case 92:O+=U4(Ra()-1,7);continue;case 47:switch(Wt()){case 42:case 47:ga(K4(W4(ut(),Ra()),t,r),s);break;default:O+="/"}break;case 123*v:l[c++]=zt(O)*h;case 125*v:case 59:case 0:switch(g){case 0:case 125:p=0;case 59+d:h==-1&&(O=q(O,/\f/g,"")),y>0&&zt(O)-f&&ga(y>32?Qh(O+";",n,r,f-1):Qh(q(O," ","")+";",n,r,f-2),s);break;case 59:O+=";";default:if(ga(E=qh(O,t,r,c,d,i,l,w,S=[],_=[],f),o),g===123)if(d===0)ja(O,t,E,E,S,o,f,l,_);else switch(m===99&&Ae(O,3)===110?100:m){case 100:case 108:case 109:case 115:ja(e,E,E,n&&ga(qh(e,E,E,0,0,i,l,w,i,S=[],f),_),i,_,f,l,n?S:_);break;default:ja(O,E,E,E,[""],_,0,l,_)}}c=d=y=0,v=h=1,w=O="",f=a;break;case 58:f=1+zt(O),y=x;default:if(v<1){if(g==123)--v;else if(g==125&&v++==0&&F4()==125)continue}switch(O+=is(g),g*v){case 38:h=d>0?1:(O+="\f",-1);break;case 44:l[c++]=(zt(O)-1)*h,h=1;break;case 64:Wt()===45&&(O+=Ma(ut())),m=Wt(),d=f=zt(w=O+=H4(Ra())),g++;break;case 45:x===45&&zt(O)==2&&(v=0)}}return o}function qh(e,t,r,n,i,o,a,l,s,c,d){for(var f=i-1,m=i===0?o:[""],y=pf(m),x=0,v=0,p=0;x<n;++x)for(var h=0,g=ko(e,f+1,f=j4(v=a[x])),w=e;h<y;++h)(w=L1(v>0?m[h]+" "+g:q(g,/&\f/g,m[h])))&&(s[p++]=w);return as(e,t,r,i===0?df:l,s,c,d)}function K4(e,t,r){return as(e,t,r,j1,is(D4()),ko(e,2,-2),0)}function Qh(e,t,r,n){return as(e,t,r,ff,ko(e,0,n),ko(e,n+1,-1),n)}function Xn(e,t){for(var r="",n=pf(e),i=0;i<n;i++)r+=t(e[i],i,e,t)||"";return r}function X4(e,t,r,n){switch(e.type){case M4:if(e.children.length)break;case R4:case ff:return e.return=e.return||e.value;case j1:return"";case z1:return e.return=e.value+"{"+Xn(e.children,n)+"}";case df:e.value=e.props.join(",")}return zt(r=Xn(e.children,n))?e.return=e.value+"{"+r+"}":""}function G4(e){var t=pf(e);return function(r,n,i,o){for(var a="",l=0;l<t;l++)a+=e[l](r,n,i,o)||"";return a}}function Y4(e){return function(t){t.root||(t=t.return)&&e(t)}}var q4=function(t,r,n){for(var i=0,o=0;i=o,o=Wt(),i===38&&o===12&&(r[n]=1),!Co(o);)ut();return Ho(t,at)},Q4=function(t,r){var n=-1,i=44;do switch(Co(i)){case 0:i===38&&Wt()===12&&(r[n]=1),t[n]+=q4(at-1,r,n);break;case 2:t[n]+=Ma(i);break;case 4:if(i===44){t[++n]=Wt()===58?"&\f":"",r[n]=t[n].length;break}default:t[n]+=is(i)}while(i=ut());return t},J4=function(t,r){return D1(Q4(I1(t),r))},Jh=new WeakMap,Z4=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var r=t.value,n=t.parent,i=t.column===n.column&&t.line===n.line;n.type!=="rule";)if(n=n.parent,!n)return;if(!(t.props.length===1&&r.charCodeAt(0)!==58&&!Jh.get(n))&&!i){Jh.set(t,!0);for(var o=[],a=J4(r,o),l=n.props,s=0,c=0;s<a.length;s++)for(var d=0;d<l.length;d++,c++)t.props[c]=o[s]?a[s].replace(/&\f/g,l[d]):l[d]+" "+a[s]}}},ek=function(t){if(t.type==="decl"){var r=t.value;r.charCodeAt(0)===108&&r.charCodeAt(2)===98&&(t.return="",t.value="")}};function F1(e,t){switch(L4(e,t)){case 5103:return Y+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Y+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Y+e+yl+e+Ue+e+e;case 6828:case 4268:return Y+e+Ue+e+e;case 6165:return Y+e+Ue+"flex-"+e+e;case 5187:return Y+e+q(e,/(\w+).+(:[^]+)/,Y+"box-$1$2"+Ue+"flex-$1$2")+e;case 5443:return Y+e+Ue+"flex-item-"+q(e,/flex-|-self/,"")+e;case 4675:return Y+e+Ue+"flex-line-pack"+q(e,/align-content|flex-|-self/,"")+e;case 5548:return Y+e+Ue+q(e,"shrink","negative")+e;case 5292:return Y+e+Ue+q(e,"basis","preferred-size")+e;case 6060:return Y+"box-"+q(e,"-grow","")+Y+e+Ue+q(e,"grow","positive")+e;case 4554:return Y+q(e,/([^-])(transform)/g,"$1"+Y+"$2")+e;case 6187:return q(q(q(e,/(zoom-|grab)/,Y+"$1"),/(image-set)/,Y+"$1"),e,"")+e;case 5495:case 3959:return q(e,/(image-set\([^]*)/,Y+"$1$`$1");case 4968:return q(q(e,/(.+:)(flex-)?(.*)/,Y+"box-pack:$3"+Ue+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Y+e+e;case 4095:case 3583:case 4068:case 2532:return q(e,/(.+)-inline(.+)/,Y+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(zt(e)-1-t>6)switch(Ae(e,t+1)){case 109:if(Ae(e,t+4)!==45)break;case 102:return q(e,/(.+:)(.+)-([^]+)/,"$1"+Y+"$2-$3$1"+yl+(Ae(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Ec(e,"stretch")?F1(q(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(Ae(e,t+1)!==115)break;case 6444:switch(Ae(e,zt(e)-3-(~Ec(e,"!important")&&10))){case 107:return q(e,":",":"+Y)+e;case 101:return q(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+Y+(Ae(e,14)===45?"inline-":"")+"box$3$1"+Y+"$2$3$1"+Ue+"$2box$3")+e}break;case 5936:switch(Ae(e,t+11)){case 114:return Y+e+Ue+q(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Y+e+Ue+q(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Y+e+Ue+q(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return Y+e+Ue+e+e}return e}var tk=function(t,r,n,i){if(t.length>-1&&!t.return)switch(t.type){case ff:t.return=F1(t.value,t.length);break;case z1:return Xn([Ri(t,{value:q(t.value,"@","@"+Y)})],i);case df:if(t.length)return I4(t.props,function(o){switch(A4(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Xn([Ri(t,{props:[q(o,/:(read-\w+)/,":"+yl+"$1")]})],i);case"::placeholder":return Xn([Ri(t,{props:[q(o,/:(plac\w+)/,":"+Y+"input-$1")]}),Ri(t,{props:[q(o,/:(plac\w+)/,":"+yl+"$1")]}),Ri(t,{props:[q(o,/:(plac\w+)/,Ue+"input-$1")]})],i)}return""})}},rk=[tk],B1=function(t){var r=t.key;if(r==="css"){var n=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(n,function(v){var p=v.getAttribute("data-emotion");p.indexOf(" ")!==-1&&(document.head.appendChild(v),v.setAttribute("data-s",""))})}var i=t.stylisPlugins||rk,o={},a,l=[];a=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+r+' "]'),function(v){for(var p=v.getAttribute("data-emotion").split(" "),h=1;h<p.length;h++)o[p[h]]=!0;l.push(v)});var s,c=[Z4,ek];{var d,f=[X4,Y4(function(v){d.insert(v)})],m=G4(c.concat(i,f)),y=function(p){return Xn(V4(p),m)};s=function(p,h,g,w){d=g,y(p?p+"{"+h.styles+"}":h.styles),w&&(x.inserted[h.name]=!0)}}var x={key:r,sheet:new T4({key:r,container:a,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:o,registered:{},insert:s};return x.sheet.hydrate(l),x},nk=!0;function ik(e,t,r){var n="";return r.split(" ").forEach(function(i){e[i]!==void 0?t.push(e[i]+";"):n+=i+" "}),n}var U1=function(t,r,n){var i=t.key+"-"+r.name;(n===!1||nk===!1)&&t.registered[i]===void 0&&(t.registered[i]=r.styles)},W1=function(t,r,n){U1(t,r,n);var i=t.key+"-"+r.name;if(t.inserted[r.name]===void 0){var o=r;do t.insert(r===o?"."+i:"",o,t.sheet,!0),o=o.next;while(o!==void 0)}};function ok(e){for(var t=0,r,n=0,i=e.length;i>=4;++n,i-=4)r=e.charCodeAt(n)&255|(e.charCodeAt(++n)&255)<<8|(e.charCodeAt(++n)&255)<<16|(e.charCodeAt(++n)&255)<<24,r=(r&65535)*1540483477+((r>>>16)*59797<<16),r^=r>>>24,t=(r&65535)*1540483477+((r>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(n+2)&255)<<16;case 2:t^=(e.charCodeAt(n+1)&255)<<8;case 1:t^=e.charCodeAt(n)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var ak={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},lk=!1,sk=/[A-Z]|^ms/g,uk=/_EMO_([^_]+?)_([^]*?)_EMO_/g,H1=function(t){return t.charCodeAt(1)===45},Zh=function(t){return t!=null&&typeof t!="boolean"},mu=Tg(function(e){return H1(e)?e:e.replace(sk,"-$&").toLowerCase()}),em=function(t,r){switch(t){case"animation":case"animationName":if(typeof r=="string")return r.replace(uk,function(n,i,o){return Lt={name:i,styles:o,next:Lt},i})}return ak[t]!==1&&!H1(t)&&typeof r=="number"&&r!==0?r+"px":r},ck="Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";function _o(e,t,r){if(r==null)return"";var n=r;if(n.__emotion_styles!==void 0)return n;switch(typeof r){case"boolean":return"";case"object":{var i=r;if(i.anim===1)return Lt={name:i.name,styles:i.styles,next:Lt},i.name;var o=r;if(o.styles!==void 0){var a=o.next;if(a!==void 0)for(;a!==void 0;)Lt={name:a.name,styles:a.styles,next:Lt},a=a.next;var l=o.styles+";";return l}return dk(e,t,r)}case"function":{if(e!==void 0){var s=Lt,c=r(e);return Lt=s,_o(e,t,c)}break}}var d=r;if(t==null)return d;var f=t[d];return f!==void 0?f:d}function dk(e,t,r){var n="";if(Array.isArray(r))for(var i=0;i<r.length;i++)n+=_o(e,t,r[i])+";";else for(var o in r){var a=r[o];if(typeof a!="object"){var l=a;t!=null&&t[l]!==void 0?n+=o+"{"+t[l]+"}":Zh(l)&&(n+=mu(o)+":"+em(o,l)+";")}else{if(o==="NO_COMPONENT_SELECTOR"&&lk)throw new Error(ck);if(Array.isArray(a)&&typeof a[0]=="string"&&(t==null||t[a[0]]===void 0))for(var s=0;s<a.length;s++)Zh(a[s])&&(n+=mu(o)+":"+em(o,a[s])+";");else{var c=_o(e,t,a);switch(o){case"animation":case"animationName":{n+=mu(o)+":"+c+";";break}default:n+=o+"{"+c+"}"}}}}return n}var tm=/label:\s*([^\s;\n{]+)\s*(;|$)/g,Lt;function hf(e,t,r){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var n=!0,i="";Lt=void 0;var o=e[0];if(o==null||o.raw===void 0)n=!1,i+=_o(r,t,o);else{var a=o;i+=a[0]}for(var l=1;l<e.length;l++)if(i+=_o(r,t,e[l]),n){var s=o;i+=s[l]}tm.lastIndex=0;for(var c="",d;(d=tm.exec(i))!==null;)c+="-"+d[1];var f=ok(i)+c;return{name:f,styles:i,next:Lt}}var fk=function(t){return t()},V1=eo["useInsertionEffect"]?eo["useInsertionEffect"]:!1,pk=V1||fk,rm=V1||k.exports.useLayoutEffect,K1=k.exports.createContext(typeof HTMLElement!="undefined"?B1({key:"css"}):null),hk=K1.Provider,X1=function(t){return k.exports.forwardRef(function(r,n){var i=k.exports.useContext(K1);return t(r,i,n)})},ls=k.exports.createContext({}),mf={exports:{}};(function(e){function t(){return e.exports=t=Object.assign?Object.assign.bind():function(r){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var o in i)({}).hasOwnProperty.call(i,o)&&(r[o]=i[o])}return r},e.exports.__esModule=!0,e.exports.default=e.exports,t.apply(null,arguments)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports})(mf);var mk=X1(function(e,t){var r=e.styles,n=hf([r],void 0,k.exports.useContext(ls)),i=k.exports.useRef();return rm(function(){var o=t.key+"-global",a=new t.sheet.constructor({key:o,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),l=!1,s=document.querySelector('style[data-emotion="'+o+" "+n.name+'"]');return t.sheet.tags.length&&(a.before=t.sheet.tags[0]),s!==null&&(l=!0,s.setAttribute("data-emotion",o),a.hydrate([s])),i.current=[a,l],function(){a.flush()}},[t]),rm(function(){var o=i.current,a=o[0],l=o[1];if(l){o[1]=!1;return}if(n.next!==void 0&&W1(t,n.next,!0),a.tags.length){var s=a.tags[a.tags.length-1].nextElementSibling;a.before=s,a.flush()}t.insert("",n,a,!1)},[t,n.name]),null});function xl(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return hf(t)}var gf=function(){var t=xl.apply(void 0,arguments),r="animation-"+t.name;return{name:r,styles:"@keyframes "+r+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},gk=uc,vk=function(t){return t!=="theme"},nm=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?gk:vk},im=function(t,r,n){var i;if(r){var o=r.shouldForwardProp;i=t.__emotion_forwardProp&&o?function(a){return t.__emotion_forwardProp(a)&&o(a)}:o}return typeof i!="function"&&n&&(i=t.__emotion_forwardProp),i},yk=!1,xk=function(t){var r=t.cache,n=t.serialized,i=t.isStringTag;return U1(r,n,i),pk(function(){return W1(r,n,i)}),null},wk=function e(t,r){var n=t.__emotion_real===t,i=n&&t.__emotion_base||t,o,a;r!==void 0&&(o=r.label,a=r.target);var l=im(t,r,n),s=l||nm(i),c=!s("as");return function(){var d=arguments,f=n&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(o!==void 0&&f.push("label:"+o+";"),d[0]==null||d[0].raw===void 0)f.push.apply(f,d);else{f.push(d[0][0]);for(var m=d.length,y=1;y<m;y++)f.push(d[y],d[0][y])}var x=X1(function(v,p,h){var g=c&&v.as||i,w="",S=[],_=v;if(v.theme==null){_={};for(var E in v)_[E]=v[E];_.theme=k.exports.useContext(ls)}typeof v.className=="string"?w=ik(p.registered,S,v.className):v.className!=null&&(w=v.className+" ");var O=hf(f.concat(S),p.registered,_);w+=p.key+"-"+O.name,a!==void 0&&(w+=" "+a);var z=c&&l===void 0?nm(g):s,T={};for(var D in v)c&&D==="as"||z(D)&&(T[D]=v[D]);return T.className=w,h&&(T.ref=h),k.exports.createElement(k.exports.Fragment,null,k.exports.createElement(xk,{cache:p,serialized:O,isStringTag:typeof g=="string"}),k.exports.createElement(g,T))});return x.displayName=o!==void 0?o:"Styled("+(typeof i=="string"?i:i.displayName||i.name||"Component")+")",x.defaultProps=t.defaultProps,x.__emotion_real=x,x.__emotion_base=i,x.__emotion_styles=f,x.__emotion_forwardProp=l,Object.defineProperty(x,"toString",{value:function(){return a===void 0&&yk?"NO_COMPONENT_SELECTOR":"."+a}}),x.withComponent=function(v,p){return e(v,Q({},r,p,{shouldForwardProp:im(x,p,!0)})).apply(void 0,f)},x}},bk=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],Pc=wk.bind();bk.forEach(function(e){Pc[e]=Pc(e)});let Oc;typeof document=="object"&&(Oc=B1({key:"css",prepend:!0}));function Sk(e){const{injectFirst:t,children:r}=e;return t&&Oc?u(hk,{value:Oc,children:r}):r}function kk(e){return e==null||Object.keys(e).length===0}function Ck(e){const{styles:t,defaultTheme:r={}}=e;return u(mk,{styles:typeof t=="function"?i=>t(kk(i)?r:i):t})}/**
 * @mui/styled-engine v5.16.6
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function G1(e,t){return Pc(e,t)}const _k=(e,t)=>{Array.isArray(e.__emotion_styles)&&(e.__emotion_styles=t(e.__emotion_styles))};var Ek=Object.freeze(Object.defineProperty({__proto__:null,default:G1,internal_processStyles:_k,ThemeContext:ls,keyframes:gf,css:xl,StyledEngineProvider:Sk,GlobalStyles:Ck},Symbol.toStringTag,{value:"Module"}));function mr(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function Y1(e){if(!mr(e))return e;const t={};return Object.keys(e).forEach(r=>{t[r]=Y1(e[r])}),t}function Ht(e,t,r={clone:!0}){const n=r.clone?Q({},e):e;return mr(e)&&mr(t)&&Object.keys(t).forEach(i=>{mr(t[i])&&Object.prototype.hasOwnProperty.call(e,i)&&mr(e[i])?n[i]=Ht(e[i],t[i],r):r.clone?n[i]=mr(t[i])?Y1(t[i]):t[i]:n[i]=t[i]}),n}var $k=Object.freeze(Object.defineProperty({__proto__:null,default:Ht,isPlainObject:mr},Symbol.toStringTag,{value:"Module"}));const Pk=["values","unit","step"],Ok=e=>{const t=Object.keys(e).map(r=>({key:r,val:e[r]}))||[];return t.sort((r,n)=>r.val-n.val),t.reduce((r,n)=>Q({},r,{[n.key]:n.val}),{})};function q1(e){const{values:t={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:r="px",step:n=5}=e,i=lr(e,Pk),o=Ok(t),a=Object.keys(o);function l(m){return`@media (min-width:${typeof t[m]=="number"?t[m]:m}${r})`}function s(m){return`@media (max-width:${(typeof t[m]=="number"?t[m]:m)-n/100}${r})`}function c(m,y){const x=a.indexOf(y);return`@media (min-width:${typeof t[m]=="number"?t[m]:m}${r}) and (max-width:${(x!==-1&&typeof t[a[x]]=="number"?t[a[x]]:y)-n/100}${r})`}function d(m){return a.indexOf(m)+1<a.length?c(m,a[a.indexOf(m)+1]):l(m)}function f(m){const y=a.indexOf(m);return y===0?l(a[1]):y===a.length-1?s(a[y]):c(m,a[a.indexOf(m)+1]).replace("@media","@media not all and")}return Q({keys:a,values:o,up:l,down:s,between:c,only:d,not:f,unit:r},i)}const Nk={borderRadius:4};var Tk=Nk;function Zi(e,t){return t?Ht(e,t,{clone:!1}):e}const vf={xs:0,sm:600,md:900,lg:1200,xl:1536},om={keys:["xs","sm","md","lg","xl"],up:e=>`@media (min-width:${vf[e]}px)`};function nr(e,t,r){const n=e.theme||{};if(Array.isArray(t)){const o=n.breakpoints||om;return t.reduce((a,l,s)=>(a[o.up(o.keys[s])]=r(t[s]),a),{})}if(typeof t=="object"){const o=n.breakpoints||om;return Object.keys(t).reduce((a,l)=>{if(Object.keys(o.values||vf).indexOf(l)!==-1){const s=o.up(l);a[s]=r(t[l],l)}else{const s=l;a[s]=t[s]}return a},{})}return r(t)}function Rk(e={}){var t;return((t=e.keys)==null?void 0:t.reduce((n,i)=>{const o=e.up(i);return n[o]={},n},{}))||{}}function Mk(e,t){return e.reduce((r,n)=>{const i=r[n];return(!i||Object.keys(i).length===0)&&delete r[n],r},t)}function yf(e){if(typeof e!="string")throw new Error(un(7));return e.charAt(0).toUpperCase()+e.slice(1)}var jk=Object.freeze(Object.defineProperty({__proto__:null,default:yf},Symbol.toStringTag,{value:"Module"}));function ss(e,t,r=!0){if(!t||typeof t!="string")return null;if(e&&e.vars&&r){const n=`vars.${t}`.split(".").reduce((i,o)=>i&&i[o]?i[o]:null,e);if(n!=null)return n}return t.split(".").reduce((n,i)=>n&&n[i]!=null?n[i]:null,e)}function wl(e,t,r,n=r){let i;return typeof e=="function"?i=e(r):Array.isArray(e)?i=e[r]||n:i=ss(e,r)||n,t&&(i=t(i,n,e)),i}function ke(e){const{prop:t,cssProperty:r=e.prop,themeKey:n,transform:i}=e,o=a=>{if(a[t]==null)return null;const l=a[t],s=a.theme,c=ss(s,n)||{};return nr(a,l,f=>{let m=wl(c,i,f);return f===m&&typeof f=="string"&&(m=wl(c,i,`${t}${f==="default"?"":yf(f)}`,f)),r===!1?m:{[r]:m}})};return o.propTypes={},o.filterProps=[t],o}function zk(e){const t={};return r=>(t[r]===void 0&&(t[r]=e(r)),t[r])}const Lk={m:"margin",p:"padding"},Ak={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},am={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},Ik=zk(e=>{if(e.length>2)if(am[e])e=am[e];else return[e];const[t,r]=e.split(""),n=Lk[t],i=Ak[r]||"";return Array.isArray(i)?i.map(o=>n+o):[n+i]}),xf=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],wf=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"];[...xf,...wf];function Vo(e,t,r,n){var i;const o=(i=ss(e,t,!1))!=null?i:r;return typeof o=="number"?a=>typeof a=="string"?a:o*a:Array.isArray(o)?a=>typeof a=="string"?a:o[a]:typeof o=="function"?o:()=>{}}function Q1(e){return Vo(e,"spacing",8)}function Ko(e,t){if(typeof t=="string"||t==null)return t;const r=Math.abs(t),n=e(r);return t>=0?n:typeof n=="number"?-n:`-${n}`}function Dk(e,t){return r=>e.reduce((n,i)=>(n[i]=Ko(t,r),n),{})}function Fk(e,t,r,n){if(t.indexOf(r)===-1)return null;const i=Ik(r),o=Dk(i,n),a=e[r];return nr(e,a,o)}function J1(e,t){const r=Q1(e.theme);return Object.keys(e).map(n=>Fk(e,t,n,r)).reduce(Zi,{})}function ge(e){return J1(e,xf)}ge.propTypes={};ge.filterProps=xf;function ve(e){return J1(e,wf)}ve.propTypes={};ve.filterProps=wf;function Bk(e=8){if(e.mui)return e;const t=Q1({spacing:e}),r=(...n)=>(n.length===0?[1]:n).map(o=>{const a=t(o);return typeof a=="number"?`${a}px`:a}).join(" ");return r.mui=!0,r}function us(...e){const t=e.reduce((n,i)=>(i.filterProps.forEach(o=>{n[o]=i}),n),{}),r=n=>Object.keys(n).reduce((i,o)=>t[o]?Zi(i,t[o](n)):i,{});return r.propTypes={},r.filterProps=e.reduce((n,i)=>n.concat(i.filterProps),[]),r}function ht(e){return typeof e!="number"?e:`${e}px solid`}function kt(e,t){return ke({prop:e,themeKey:"borders",transform:t})}const Uk=kt("border",ht),Wk=kt("borderTop",ht),Hk=kt("borderRight",ht),Vk=kt("borderBottom",ht),Kk=kt("borderLeft",ht),Xk=kt("borderColor"),Gk=kt("borderTopColor"),Yk=kt("borderRightColor"),qk=kt("borderBottomColor"),Qk=kt("borderLeftColor"),Jk=kt("outline",ht),Zk=kt("outlineColor"),cs=e=>{if(e.borderRadius!==void 0&&e.borderRadius!==null){const t=Vo(e.theme,"shape.borderRadius",4),r=n=>({borderRadius:Ko(t,n)});return nr(e,e.borderRadius,r)}return null};cs.propTypes={};cs.filterProps=["borderRadius"];us(Uk,Wk,Hk,Vk,Kk,Xk,Gk,Yk,qk,Qk,cs,Jk,Zk);const ds=e=>{if(e.gap!==void 0&&e.gap!==null){const t=Vo(e.theme,"spacing",8),r=n=>({gap:Ko(t,n)});return nr(e,e.gap,r)}return null};ds.propTypes={};ds.filterProps=["gap"];const fs=e=>{if(e.columnGap!==void 0&&e.columnGap!==null){const t=Vo(e.theme,"spacing",8),r=n=>({columnGap:Ko(t,n)});return nr(e,e.columnGap,r)}return null};fs.propTypes={};fs.filterProps=["columnGap"];const ps=e=>{if(e.rowGap!==void 0&&e.rowGap!==null){const t=Vo(e.theme,"spacing",8),r=n=>({rowGap:Ko(t,n)});return nr(e,e.rowGap,r)}return null};ps.propTypes={};ps.filterProps=["rowGap"];const e3=ke({prop:"gridColumn"}),t3=ke({prop:"gridRow"}),r3=ke({prop:"gridAutoFlow"}),n3=ke({prop:"gridAutoColumns"}),i3=ke({prop:"gridAutoRows"}),o3=ke({prop:"gridTemplateColumns"}),a3=ke({prop:"gridTemplateRows"}),l3=ke({prop:"gridTemplateAreas"}),s3=ke({prop:"gridArea"});us(ds,fs,ps,e3,t3,r3,n3,i3,o3,a3,l3,s3);function Gn(e,t){return t==="grey"?t:e}const u3=ke({prop:"color",themeKey:"palette",transform:Gn}),c3=ke({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette",transform:Gn}),d3=ke({prop:"backgroundColor",themeKey:"palette",transform:Gn});us(u3,c3,d3);function lt(e){return e<=1&&e!==0?`${e*100}%`:e}const f3=ke({prop:"width",transform:lt}),bf=e=>{if(e.maxWidth!==void 0&&e.maxWidth!==null){const t=r=>{var n,i;const o=((n=e.theme)==null||(n=n.breakpoints)==null||(n=n.values)==null?void 0:n[r])||vf[r];return o?((i=e.theme)==null||(i=i.breakpoints)==null?void 0:i.unit)!=="px"?{maxWidth:`${o}${e.theme.breakpoints.unit}`}:{maxWidth:o}:{maxWidth:lt(r)}};return nr(e,e.maxWidth,t)}return null};bf.filterProps=["maxWidth"];const p3=ke({prop:"minWidth",transform:lt}),h3=ke({prop:"height",transform:lt}),m3=ke({prop:"maxHeight",transform:lt}),g3=ke({prop:"minHeight",transform:lt});ke({prop:"size",cssProperty:"width",transform:lt});ke({prop:"size",cssProperty:"height",transform:lt});const v3=ke({prop:"boxSizing"});us(f3,bf,p3,h3,m3,g3,v3);const y3={border:{themeKey:"borders",transform:ht},borderTop:{themeKey:"borders",transform:ht},borderRight:{themeKey:"borders",transform:ht},borderBottom:{themeKey:"borders",transform:ht},borderLeft:{themeKey:"borders",transform:ht},borderColor:{themeKey:"palette"},borderTopColor:{themeKey:"palette"},borderRightColor:{themeKey:"palette"},borderBottomColor:{themeKey:"palette"},borderLeftColor:{themeKey:"palette"},outline:{themeKey:"borders",transform:ht},outlineColor:{themeKey:"palette"},borderRadius:{themeKey:"shape.borderRadius",style:cs},color:{themeKey:"palette",transform:Gn},bgcolor:{themeKey:"palette",cssProperty:"backgroundColor",transform:Gn},backgroundColor:{themeKey:"palette",transform:Gn},p:{style:ve},pt:{style:ve},pr:{style:ve},pb:{style:ve},pl:{style:ve},px:{style:ve},py:{style:ve},padding:{style:ve},paddingTop:{style:ve},paddingRight:{style:ve},paddingBottom:{style:ve},paddingLeft:{style:ve},paddingX:{style:ve},paddingY:{style:ve},paddingInline:{style:ve},paddingInlineStart:{style:ve},paddingInlineEnd:{style:ve},paddingBlock:{style:ve},paddingBlockStart:{style:ve},paddingBlockEnd:{style:ve},m:{style:ge},mt:{style:ge},mr:{style:ge},mb:{style:ge},ml:{style:ge},mx:{style:ge},my:{style:ge},margin:{style:ge},marginTop:{style:ge},marginRight:{style:ge},marginBottom:{style:ge},marginLeft:{style:ge},marginX:{style:ge},marginY:{style:ge},marginInline:{style:ge},marginInlineStart:{style:ge},marginInlineEnd:{style:ge},marginBlock:{style:ge},marginBlockStart:{style:ge},marginBlockEnd:{style:ge},displayPrint:{cssProperty:!1,transform:e=>({"@media print":{display:e}})},display:{},overflow:{},textOverflow:{},visibility:{},whiteSpace:{},flexBasis:{},flexDirection:{},flexWrap:{},justifyContent:{},alignItems:{},alignContent:{},order:{},flex:{},flexGrow:{},flexShrink:{},alignSelf:{},justifyItems:{},justifySelf:{},gap:{style:ds},rowGap:{style:ps},columnGap:{style:fs},gridColumn:{},gridRow:{},gridAutoFlow:{},gridAutoColumns:{},gridAutoRows:{},gridTemplateColumns:{},gridTemplateRows:{},gridTemplateAreas:{},gridArea:{},position:{},zIndex:{themeKey:"zIndex"},top:{},right:{},bottom:{},left:{},boxShadow:{themeKey:"shadows"},width:{transform:lt},maxWidth:{style:bf},minWidth:{transform:lt},height:{transform:lt},maxHeight:{transform:lt},minHeight:{transform:lt},boxSizing:{},fontFamily:{themeKey:"typography"},fontSize:{themeKey:"typography"},fontStyle:{themeKey:"typography"},fontWeight:{themeKey:"typography"},letterSpacing:{},textTransform:{},lineHeight:{},textAlign:{},typography:{cssProperty:!1,themeKey:"typography"}};var Xo=y3;function x3(...e){const t=e.reduce((n,i)=>n.concat(Object.keys(i)),[]),r=new Set(t);return e.every(n=>r.size===Object.keys(n).length)}function w3(e,t){return typeof e=="function"?e(t):e}function Z1(){function e(r,n,i,o){const a={[r]:n,theme:i},l=o[r];if(!l)return{[r]:n};const{cssProperty:s=r,themeKey:c,transform:d,style:f}=l;if(n==null)return null;if(c==="typography"&&n==="inherit")return{[r]:n};const m=ss(i,c)||{};return f?f(a):nr(a,n,x=>{let v=wl(m,d,x);return x===v&&typeof x=="string"&&(v=wl(m,d,`${r}${x==="default"?"":yf(x)}`,x)),s===!1?v:{[s]:v}})}function t(r){var n;const{sx:i,theme:o={}}=r||{};if(!i)return null;const a=(n=o.unstable_sxConfig)!=null?n:Xo;function l(s){let c=s;if(typeof s=="function")c=s(o);else if(typeof s!="object")return s;if(!c)return null;const d=Rk(o.breakpoints),f=Object.keys(d);let m=d;return Object.keys(c).forEach(y=>{const x=w3(c[y],o);if(x!=null)if(typeof x=="object")if(a[y])m=Zi(m,e(y,x,o,a));else{const v=nr({theme:o},x,p=>({[y]:p}));x3(v,x)?m[y]=t({sx:x,theme:o}):m=Zi(m,v)}else m=Zi(m,e(y,x,o,a))}),Mk(f,m)}return Array.isArray(i)?i.map(l):l(i)}return t}const ev=Z1();ev.filterProps=["sx"];var hs=ev;function tv(e,t){const r=this;return r.vars&&typeof r.getColorSchemeSelector=="function"?{[r.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/,"*:where($1)")]:t}:r.palette.mode===e?t:{}}const b3=["breakpoints","palette","spacing","shape"];function Sf(e={},...t){const{breakpoints:r={},palette:n={},spacing:i,shape:o={}}=e,a=lr(e,b3),l=q1(r),s=Bk(i);let c=Ht({breakpoints:l,direction:"ltr",components:{},palette:Q({mode:"light"},n),spacing:s,shape:Q({},Tk,o)},a);return c.applyStyles=tv,c=t.reduce((d,f)=>Ht(d,f),c),c.unstable_sxConfig=Q({},Xo,a==null?void 0:a.unstable_sxConfig),c.unstable_sx=function(f){return hs({sx:f,theme:this})},c}var S3=Object.freeze(Object.defineProperty({__proto__:null,default:Sf,private_createBreakpoints:q1,unstable_applyStyles:tv},Symbol.toStringTag,{value:"Module"}));function k3(e){return Object.keys(e).length===0}function C3(e=null){const t=k.exports.useContext(ls);return!t||k3(t)?e:t}const _3=Sf();function E3(e=_3){return C3(e)}const $3=["sx"],P3=e=>{var t,r;const n={systemProps:{},otherProps:{}},i=(t=e==null||(r=e.theme)==null?void 0:r.unstable_sxConfig)!=null?t:Xo;return Object.keys(e).forEach(o=>{i[o]?n.systemProps[o]=e[o]:n.otherProps[o]=e[o]}),n};function rv(e){const{sx:t}=e,r=lr(e,$3),{systemProps:n,otherProps:i}=P3(r);let o;return Array.isArray(t)?o=[n,...t]:typeof t=="function"?o=(...a)=>{const l=t(...a);return mr(l)?Q({},n,l):n}:o=Q({},n,t),Q({},i,{sx:o})}var O3=Object.freeze(Object.defineProperty({__proto__:null,default:hs,unstable_createStyleFunctionSx:Z1,extendSxProp:rv,unstable_defaultSxConfig:Xo},Symbol.toStringTag,{value:"Module"}));const lm=e=>e,N3=()=>{let e=lm;return{configure(t){e=t},generate(t){return e(t)},reset(){e=lm}}},T3=N3();var nv=T3;function iv(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(r=iv(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function R3(){for(var e,t,r=0,n="",i=arguments.length;r<i;r++)(e=arguments[r])&&(t=iv(e))&&(n&&(n+=" "),n+=t);return n}const M3=["className","component"];function j3(e={}){const{themeId:t,defaultTheme:r,defaultClassName:n="MuiBox-root",generateClassName:i}=e,o=G1("div",{shouldForwardProp:l=>l!=="theme"&&l!=="sx"&&l!=="as"})(hs);return k.exports.forwardRef(function(s,c){const d=E3(r),f=rv(s),{className:m,component:y="div"}=f,x=lr(f,M3);return u(o,Q({as:y,ref:c,className:R3(m,i?i(n):n),theme:t&&d[t]||d},x))})}const z3={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",open:"open",readOnly:"readOnly",required:"required",selected:"selected"};function ov(e,t,r="Mui"){const n=z3[t];return n?`${r}-${n}`:`${nv.generate(e)}-${t}`}function av(e,t,r="Mui"){const n={};return t.forEach(i=>{n[i]=ov(e,i,r)}),n}var Nc={exports:{}},oe={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kf=Symbol.for("react.element"),Cf=Symbol.for("react.portal"),ms=Symbol.for("react.fragment"),gs=Symbol.for("react.strict_mode"),vs=Symbol.for("react.profiler"),ys=Symbol.for("react.provider"),xs=Symbol.for("react.context"),L3=Symbol.for("react.server_context"),ws=Symbol.for("react.forward_ref"),bs=Symbol.for("react.suspense"),Ss=Symbol.for("react.suspense_list"),ks=Symbol.for("react.memo"),Cs=Symbol.for("react.lazy"),A3=Symbol.for("react.offscreen"),lv;lv=Symbol.for("react.module.reference");function Ct(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case kf:switch(e=e.type,e){case ms:case vs:case gs:case bs:case Ss:return e;default:switch(e=e&&e.$$typeof,e){case L3:case xs:case ws:case Cs:case ks:case ys:return e;default:return t}}case Cf:return t}}}oe.ContextConsumer=xs;oe.ContextProvider=ys;oe.Element=kf;oe.ForwardRef=ws;oe.Fragment=ms;oe.Lazy=Cs;oe.Memo=ks;oe.Portal=Cf;oe.Profiler=vs;oe.StrictMode=gs;oe.Suspense=bs;oe.SuspenseList=Ss;oe.isAsyncMode=function(){return!1};oe.isConcurrentMode=function(){return!1};oe.isContextConsumer=function(e){return Ct(e)===xs};oe.isContextProvider=function(e){return Ct(e)===ys};oe.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===kf};oe.isForwardRef=function(e){return Ct(e)===ws};oe.isFragment=function(e){return Ct(e)===ms};oe.isLazy=function(e){return Ct(e)===Cs};oe.isMemo=function(e){return Ct(e)===ks};oe.isPortal=function(e){return Ct(e)===Cf};oe.isProfiler=function(e){return Ct(e)===vs};oe.isStrictMode=function(e){return Ct(e)===gs};oe.isSuspense=function(e){return Ct(e)===bs};oe.isSuspenseList=function(e){return Ct(e)===Ss};oe.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===ms||e===vs||e===gs||e===bs||e===Ss||e===A3||typeof e=="object"&&e!==null&&(e.$$typeof===Cs||e.$$typeof===ks||e.$$typeof===ys||e.$$typeof===xs||e.$$typeof===ws||e.$$typeof===lv||e.getModuleId!==void 0)};oe.typeOf=Ct;Nc.exports=oe;const I3=/^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;function sv(e){const t=`${e}`.match(I3);return t&&t[1]||""}function uv(e,t=""){return e.displayName||e.name||sv(e)||t}function sm(e,t,r){const n=uv(t);return e.displayName||(n!==""?`${r}(${n})`:r)}function D3(e){if(e!=null){if(typeof e=="string")return e;if(typeof e=="function")return uv(e,"Component");if(typeof e=="object")switch(e.$$typeof){case Nc.exports.ForwardRef:return sm(e,e.render,"ForwardRef");case Nc.exports.Memo:return sm(e,e.type,"memo");default:return}}}var F3=Object.freeze(Object.defineProperty({__proto__:null,default:D3,getFunctionName:sv},Symbol.toStringTag,{value:"Module"}));function Tc(e,t){const r=Q({},t);return Object.keys(e).forEach(n=>{if(n.toString().match(/^(components|slots)$/))r[n]=Q({},e[n],r[n]);else if(n.toString().match(/^(componentsProps|slotProps)$/)){const i=e[n]||{},o=t[n];r[n]={},!o||!Object.keys(o)?r[n]=i:!i||!Object.keys(i)?r[n]=o:(r[n]=Q({},o),Object.keys(i).forEach(a=>{r[n][a]=Tc(i[a],o[a])}))}else r[n]===void 0&&(r[n]=e[n])}),r}function cv(e,t=Number.MIN_SAFE_INTEGER,r=Number.MAX_SAFE_INTEGER){return Math.max(t,Math.min(e,r))}var B3=Object.freeze(Object.defineProperty({__proto__:null,default:cv},Symbol.toStringTag,{value:"Module"}));function U3(e,t=0,r=1){return cv(e,t,r)}function W3(e){e=e.slice(1);const t=new RegExp(`.{1,${e.length>=6?2:1}}`,"g");let r=e.match(t);return r&&r[0].length===1&&(r=r.map(n=>n+n)),r?`rgb${r.length===4?"a":""}(${r.map((n,i)=>i<3?parseInt(n,16):Math.round(parseInt(n,16)/255*1e3)/1e3).join(", ")})`:""}function dv(e){if(e.type)return e;if(e.charAt(0)==="#")return dv(W3(e));const t=e.indexOf("("),r=e.substring(0,t);if(["rgb","rgba","hsl","hsla","color"].indexOf(r)===-1)throw new Error(un(9,e));let n=e.substring(t+1,e.length-1),i;if(r==="color"){if(n=n.split(" "),i=n.shift(),n.length===4&&n[3].charAt(0)==="/"&&(n[3]=n[3].slice(1)),["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(i)===-1)throw new Error(un(10,i))}else n=n.split(",");return n=n.map(o=>parseFloat(o)),{type:r,values:n,colorSpace:i}}function H3(e){const{type:t,colorSpace:r}=e;let{values:n}=e;return t.indexOf("rgb")!==-1?n=n.map((i,o)=>o<3?parseInt(i,10):i):t.indexOf("hsl")!==-1&&(n[1]=`${n[1]}%`,n[2]=`${n[2]}%`),t.indexOf("color")!==-1?n=`${r} ${n.join(" ")}`:n=`${n.join(", ")}`,`${t}(${n})`}function V3(e,t){return e=dv(e),t=U3(t),(e.type==="rgb"||e.type==="hsl")&&(e.type+="a"),e.type==="color"?e.values[3]=`/${t}`:e.values[3]=t,H3(e)}function K3(e,t,r=void 0){const n={};return Object.keys(e).forEach(i=>{n[i]=e[i].reduce((o,a)=>{if(a){const l=t(a);l!==""&&o.push(l),r&&r[a]&&o.push(r[a])}return o},[]).join(" ")}),n}const X3=k.exports.createContext(void 0);function G3(e){const{theme:t,name:r,props:n}=e;if(!t||!t.components||!t.components[r])return n;const i=t.components[r];return i.defaultProps?Tc(i.defaultProps,n):!i.styleOverrides&&!i.variants?Tc(i,n):n}function Y3({props:e,name:t}){const r=k.exports.useContext(X3);return G3({props:e,name:t,theme:{components:r}})}function q3(e,t){return Q({toolbar:{minHeight:56,[e.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[e.up("sm")]:{minHeight:64}}},t)}var Ce={},_f={exports:{}};(function(e){function t(r){return r&&r.__esModule?r:{default:r}}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports})(_f);var Q3=ir($4),J3=ir(B3),fv=_f.exports;Object.defineProperty(Ce,"__esModule",{value:!0});Ce.alpha=gv;Ce.blend=dC;Ce.colorChannel=void 0;var Z3=Ce.darken=$f;Ce.decomposeColor=wt;Ce.emphasize=vv;var eC=Ce.getContrastRatio=aC;Ce.getLuminance=bl;Ce.hexToRgb=pv;Ce.hslToRgb=mv;var tC=Ce.lighten=Pf;Ce.private_safeAlpha=lC;Ce.private_safeColorChannel=void 0;Ce.private_safeDarken=sC;Ce.private_safeEmphasize=cC;Ce.private_safeLighten=uC;Ce.recomposeColor=mi;Ce.rgbToHex=oC;var um=fv(Q3),rC=fv(J3);function Ef(e,t=0,r=1){return(0,rC.default)(e,t,r)}function pv(e){e=e.slice(1);const t=new RegExp(`.{1,${e.length>=6?2:1}}`,"g");let r=e.match(t);return r&&r[0].length===1&&(r=r.map(n=>n+n)),r?`rgb${r.length===4?"a":""}(${r.map((n,i)=>i<3?parseInt(n,16):Math.round(parseInt(n,16)/255*1e3)/1e3).join(", ")})`:""}function nC(e){const t=e.toString(16);return t.length===1?`0${t}`:t}function wt(e){if(e.type)return e;if(e.charAt(0)==="#")return wt(pv(e));const t=e.indexOf("("),r=e.substring(0,t);if(["rgb","rgba","hsl","hsla","color"].indexOf(r)===-1)throw new Error((0,um.default)(9,e));let n=e.substring(t+1,e.length-1),i;if(r==="color"){if(n=n.split(" "),i=n.shift(),n.length===4&&n[3].charAt(0)==="/"&&(n[3]=n[3].slice(1)),["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(i)===-1)throw new Error((0,um.default)(10,i))}else n=n.split(",");return n=n.map(o=>parseFloat(o)),{type:r,values:n,colorSpace:i}}const hv=e=>{const t=wt(e);return t.values.slice(0,3).map((r,n)=>t.type.indexOf("hsl")!==-1&&n!==0?`${r}%`:r).join(" ")};Ce.colorChannel=hv;const iC=(e,t)=>{try{return hv(e)}catch{return e}};Ce.private_safeColorChannel=iC;function mi(e){const{type:t,colorSpace:r}=e;let{values:n}=e;return t.indexOf("rgb")!==-1?n=n.map((i,o)=>o<3?parseInt(i,10):i):t.indexOf("hsl")!==-1&&(n[1]=`${n[1]}%`,n[2]=`${n[2]}%`),t.indexOf("color")!==-1?n=`${r} ${n.join(" ")}`:n=`${n.join(", ")}`,`${t}(${n})`}function oC(e){if(e.indexOf("#")===0)return e;const{values:t}=wt(e);return`#${t.map((r,n)=>nC(n===3?Math.round(255*r):r)).join("")}`}function mv(e){e=wt(e);const{values:t}=e,r=t[0],n=t[1]/100,i=t[2]/100,o=n*Math.min(i,1-i),a=(c,d=(c+r/30)%12)=>i-o*Math.max(Math.min(d-3,9-d,1),-1);let l="rgb";const s=[Math.round(a(0)*255),Math.round(a(8)*255),Math.round(a(4)*255)];return e.type==="hsla"&&(l+="a",s.push(t[3])),mi({type:l,values:s})}function bl(e){e=wt(e);let t=e.type==="hsl"||e.type==="hsla"?wt(mv(e)).values:e.values;return t=t.map(r=>(e.type!=="color"&&(r/=255),r<=.03928?r/12.92:((r+.055)/1.055)**2.4)),Number((.2126*t[0]+.7152*t[1]+.0722*t[2]).toFixed(3))}function aC(e,t){const r=bl(e),n=bl(t);return(Math.max(r,n)+.05)/(Math.min(r,n)+.05)}function gv(e,t){return e=wt(e),t=Ef(t),(e.type==="rgb"||e.type==="hsl")&&(e.type+="a"),e.type==="color"?e.values[3]=`/${t}`:e.values[3]=t,mi(e)}function lC(e,t,r){try{return gv(e,t)}catch{return e}}function $f(e,t){if(e=wt(e),t=Ef(t),e.type.indexOf("hsl")!==-1)e.values[2]*=1-t;else if(e.type.indexOf("rgb")!==-1||e.type.indexOf("color")!==-1)for(let r=0;r<3;r+=1)e.values[r]*=1-t;return mi(e)}function sC(e,t,r){try{return $f(e,t)}catch{return e}}function Pf(e,t){if(e=wt(e),t=Ef(t),e.type.indexOf("hsl")!==-1)e.values[2]+=(100-e.values[2])*t;else if(e.type.indexOf("rgb")!==-1)for(let r=0;r<3;r+=1)e.values[r]+=(255-e.values[r])*t;else if(e.type.indexOf("color")!==-1)for(let r=0;r<3;r+=1)e.values[r]+=(1-e.values[r])*t;return mi(e)}function uC(e,t,r){try{return Pf(e,t)}catch{return e}}function vv(e,t=.15){return bl(e)>.5?$f(e,t):Pf(e,t)}function cC(e,t,r){try{return vv(e,t)}catch{return e}}function dC(e,t,r,n=1){const i=(s,c)=>Math.round((s**(1/n)*(1-r)+c**(1/n)*r)**n),o=wt(e),a=wt(t),l=[i(o.values[0],a.values[0]),i(o.values[1],a.values[1]),i(o.values[2],a.values[2])];return mi({type:"rgb",values:l})}const fC=["mode","contrastThreshold","tonalOffset"],cm={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:So.white,default:So.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}},gu={text:{primary:So.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:So.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}};function dm(e,t,r,n){const i=n.light||n,o=n.dark||n*1.5;e[t]||(e.hasOwnProperty(r)?e[t]=e[r]:t==="light"?e.light=tC(e.main,i):t==="dark"&&(e.dark=Z3(e.main,o)))}function pC(e="light"){return e==="dark"?{main:bn[200],light:bn[50],dark:bn[400]}:{main:bn[700],light:bn[400],dark:bn[800]}}function hC(e="light"){return e==="dark"?{main:wn[200],light:wn[50],dark:wn[400]}:{main:wn[500],light:wn[300],dark:wn[700]}}function mC(e="light"){return e==="dark"?{main:xn[500],light:xn[300],dark:xn[700]}:{main:xn[700],light:xn[400],dark:xn[800]}}function gC(e="light"){return e==="dark"?{main:Sn[400],light:Sn[300],dark:Sn[700]}:{main:Sn[700],light:Sn[500],dark:Sn[900]}}function vC(e="light"){return e==="dark"?{main:kn[400],light:kn[300],dark:kn[700]}:{main:kn[800],light:kn[500],dark:kn[900]}}function yC(e="light"){return e==="dark"?{main:Ti[400],light:Ti[300],dark:Ti[700]}:{main:"#ed6c02",light:Ti[500],dark:Ti[900]}}function xC(e){const{mode:t="light",contrastThreshold:r=3,tonalOffset:n=.2}=e,i=lr(e,fC),o=e.primary||pC(t),a=e.secondary||hC(t),l=e.error||mC(t),s=e.info||gC(t),c=e.success||vC(t),d=e.warning||yC(t);function f(v){return eC(v,gu.text.primary)>=r?gu.text.primary:cm.text.primary}const m=({color:v,name:p,mainShade:h=500,lightShade:g=300,darkShade:w=700})=>{if(v=Q({},v),!v.main&&v[h]&&(v.main=v[h]),!v.hasOwnProperty("main"))throw new Error(un(11,p?` (${p})`:"",h));if(typeof v.main!="string")throw new Error(un(12,p?` (${p})`:"",JSON.stringify(v.main)));return dm(v,"light",g,n),dm(v,"dark",w,n),v.contrastText||(v.contrastText=f(v.main)),v},y={dark:gu,light:cm};return Ht(Q({common:Q({},So),mode:t,primary:m({color:o,name:"primary"}),secondary:m({color:a,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:m({color:l,name:"error"}),warning:m({color:d,name:"warning"}),info:m({color:s,name:"info"}),success:m({color:c,name:"success"}),grey:E4,contrastThreshold:r,getContrastText:f,augmentColor:m,tonalOffset:n},y[t]),i)}const wC=["fontFamily","fontSize","fontWeightLight","fontWeightRegular","fontWeightMedium","fontWeightBold","htmlFontSize","allVariants","pxToRem"];function bC(e){return Math.round(e*1e5)/1e5}const fm={textTransform:"uppercase"},pm='"Roboto", "Helvetica", "Arial", sans-serif';function SC(e,t){const r=typeof t=="function"?t(e):t,{fontFamily:n=pm,fontSize:i=14,fontWeightLight:o=300,fontWeightRegular:a=400,fontWeightMedium:l=500,fontWeightBold:s=700,htmlFontSize:c=16,allVariants:d,pxToRem:f}=r,m=lr(r,wC),y=i/14,x=f||(h=>`${h/c*y}rem`),v=(h,g,w,S,_)=>Q({fontFamily:n,fontWeight:h,fontSize:x(g),lineHeight:w},n===pm?{letterSpacing:`${bC(S/g)}em`}:{},_,d),p={h1:v(o,96,1.167,-1.5),h2:v(o,60,1.2,-.5),h3:v(a,48,1.167,0),h4:v(a,34,1.235,.25),h5:v(a,24,1.334,0),h6:v(l,20,1.6,.15),subtitle1:v(a,16,1.75,.15),subtitle2:v(l,14,1.57,.1),body1:v(a,16,1.5,.15),body2:v(a,14,1.43,.15),button:v(l,14,1.75,.4,fm),caption:v(a,12,1.66,.4),overline:v(a,12,2.66,1,fm),inherit:{fontFamily:"inherit",fontWeight:"inherit",fontSize:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}};return Ht(Q({htmlFontSize:c,pxToRem:x,fontFamily:n,fontSize:i,fontWeightLight:o,fontWeightRegular:a,fontWeightMedium:l,fontWeightBold:s},p),m,{clone:!1})}const kC=.2,CC=.14,_C=.12;function de(...e){return[`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${kC})`,`${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${CC})`,`${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${_C})`].join(",")}const EC=["none",de(0,2,1,-1,0,1,1,0,0,1,3,0),de(0,3,1,-2,0,2,2,0,0,1,5,0),de(0,3,3,-2,0,3,4,0,0,1,8,0),de(0,2,4,-1,0,4,5,0,0,1,10,0),de(0,3,5,-1,0,5,8,0,0,1,14,0),de(0,3,5,-1,0,6,10,0,0,1,18,0),de(0,4,5,-2,0,7,10,1,0,2,16,1),de(0,5,5,-3,0,8,10,1,0,3,14,2),de(0,5,6,-3,0,9,12,1,0,3,16,2),de(0,6,6,-3,0,10,14,1,0,4,18,3),de(0,6,7,-4,0,11,15,1,0,4,20,3),de(0,7,8,-4,0,12,17,2,0,5,22,4),de(0,7,8,-4,0,13,19,2,0,5,24,4),de(0,7,9,-4,0,14,21,2,0,5,26,4),de(0,8,9,-5,0,15,22,2,0,6,28,5),de(0,8,10,-5,0,16,24,2,0,6,30,5),de(0,8,11,-5,0,17,26,2,0,6,32,5),de(0,9,11,-5,0,18,28,2,0,7,34,6),de(0,9,12,-6,0,19,29,2,0,7,36,6),de(0,10,13,-6,0,20,31,3,0,8,38,7),de(0,10,13,-6,0,21,33,3,0,8,40,7),de(0,10,14,-6,0,22,35,3,0,8,42,7),de(0,11,14,-7,0,23,36,3,0,9,44,8),de(0,11,15,-7,0,24,38,3,0,9,46,8)];var $C=EC;const PC=["duration","easing","delay"],OC={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},NC={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function hm(e){return`${Math.round(e)}ms`}function TC(e){if(!e)return 0;const t=e/36;return Math.round((4+15*t**.25+t/5)*10)}function RC(e){const t=Q({},OC,e.easing),r=Q({},NC,e.duration);return Q({getAutoHeightDuration:TC,create:(i=["all"],o={})=>{const{duration:a=r.standard,easing:l=t.easeInOut,delay:s=0}=o;return lr(o,PC),(Array.isArray(i)?i:[i]).map(c=>`${c} ${typeof a=="string"?a:hm(a)} ${l} ${typeof s=="string"?s:hm(s)}`).join(",")}},e,{easing:t,duration:r})}const MC={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500};var jC=MC;const zC=["breakpoints","mixins","spacing","palette","transitions","typography","shape"];function yv(e={},...t){const{mixins:r={},palette:n={},transitions:i={},typography:o={}}=e,a=lr(e,zC);if(e.vars)throw new Error(un(18));const l=xC(n),s=Sf(e);let c=Ht(s,{mixins:q3(s.breakpoints,r),palette:l,shadows:$C.slice(),typography:SC(l,o),transitions:RC(i),zIndex:Q({},jC)});return c=Ht(c,a),c=t.reduce((d,f)=>Ht(d,f),c),c.unstable_sxConfig=Q({},Xo,a==null?void 0:a.unstable_sxConfig),c.unstable_sx=function(f){return hs({sx:f,theme:this})},c}function LC(e){return String(e).match(/[\d.\-+]*\s*(.*)/)[1]||""}function AC(e){return parseFloat(e)}const IC=yv();var DC=IC,Go={},Of={exports:{}};(function(e){function t(r,n){if(r==null)return{};var i={};for(var o in r)if({}.hasOwnProperty.call(r,o)){if(n.includes(o))continue;i[o]=r[o]}return i}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports})(Of);var FC=ir(Ek),BC=ir($k),UC=ir(jk),WC=ir(F3),HC=ir(S3),VC=ir(O3),gi=_f.exports;Object.defineProperty(Go,"__esModule",{value:!0});var KC=Go.default=o_;Go.shouldForwardProp=za;Go.systemDefaultTheme=void 0;var pt=gi(mf.exports),Rc=gi(Of.exports),mm=ZC(FC),XC=BC;gi(UC);gi(WC);var GC=gi(HC),YC=gi(VC);const qC=["ownerState"],QC=["variants"],JC=["name","slot","skipVariantsResolver","skipSx","overridesResolver"];function xv(e){if(typeof WeakMap!="function")return null;var t=new WeakMap,r=new WeakMap;return(xv=function(n){return n?r:t})(e)}function ZC(e,t){if(!t&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var r=xv(t);if(r&&r.has(e))return r.get(e);var n={__proto__:null},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(o!=="default"&&Object.prototype.hasOwnProperty.call(e,o)){var a=i?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}return n.default=e,r&&r.set(e,n),n}function e_(e){return Object.keys(e).length===0}function t_(e){return typeof e=="string"&&e.charCodeAt(0)>96}function za(e){return e!=="ownerState"&&e!=="theme"&&e!=="sx"&&e!=="as"}const r_=Go.systemDefaultTheme=(0,GC.default)(),n_=e=>e&&e.charAt(0).toLowerCase()+e.slice(1);function va({defaultTheme:e,theme:t,themeId:r}){return e_(t)?e:t[r]||t}function i_(e){return e?(t,r)=>r[e]:null}function La(e,t){let{ownerState:r}=t,n=(0,Rc.default)(t,qC);const i=typeof e=="function"?e((0,pt.default)({ownerState:r},n)):e;if(Array.isArray(i))return i.flatMap(o=>La(o,(0,pt.default)({ownerState:r},n)));if(!!i&&typeof i=="object"&&Array.isArray(i.variants)){const{variants:o=[]}=i;let l=(0,Rc.default)(i,QC);return o.forEach(s=>{let c=!0;typeof s.props=="function"?c=s.props((0,pt.default)({ownerState:r},n,r)):Object.keys(s.props).forEach(d=>{(r==null?void 0:r[d])!==s.props[d]&&n[d]!==s.props[d]&&(c=!1)}),c&&(Array.isArray(l)||(l=[l]),l.push(typeof s.style=="function"?s.style((0,pt.default)({ownerState:r},n,r)):s.style))}),l}return i}function o_(e={}){const{themeId:t,defaultTheme:r=r_,rootShouldForwardProp:n=za,slotShouldForwardProp:i=za}=e,o=a=>(0,YC.default)((0,pt.default)({},a,{theme:va((0,pt.default)({},a,{defaultTheme:r,themeId:t}))}));return o.__mui_systemSx=!0,(a,l={})=>{(0,mm.internal_processStyles)(a,_=>_.filter(E=>!(E!=null&&E.__mui_systemSx)));const{name:s,slot:c,skipVariantsResolver:d,skipSx:f,overridesResolver:m=i_(n_(c))}=l,y=(0,Rc.default)(l,JC),x=d!==void 0?d:c&&c!=="Root"&&c!=="root"||!1,v=f||!1;let p,h=za;c==="Root"||c==="root"?h=n:c?h=i:t_(a)&&(h=void 0);const g=(0,mm.default)(a,(0,pt.default)({shouldForwardProp:h,label:p},y)),w=_=>typeof _=="function"&&_.__emotion_real!==_||(0,XC.isPlainObject)(_)?E=>La(_,(0,pt.default)({},E,{theme:va({theme:E.theme,defaultTheme:r,themeId:t})})):_,S=(_,...E)=>{let O=w(_);const z=E?E.map(w):[];s&&m&&z.push(G=>{const W=va((0,pt.default)({},G,{defaultTheme:r,themeId:t}));if(!W.components||!W.components[s]||!W.components[s].styleOverrides)return null;const H=W.components[s].styleOverrides,he={};return Object.entries(H).forEach(([le,Fe])=>{he[le]=La(Fe,(0,pt.default)({},G,{theme:W}))}),m(G,he)}),s&&!x&&z.push(G=>{var W;const H=va((0,pt.default)({},G,{defaultTheme:r,themeId:t})),he=H==null||(W=H.components)==null||(W=W[s])==null?void 0:W.variants;return La({variants:he},(0,pt.default)({},G,{theme:H}))}),v||z.push(o);const T=z.length-E.length;if(Array.isArray(_)&&T>0){const G=new Array(T).fill("");O=[..._,...G],O.raw=[..._.raw,...G]}const D=g(O,...z);return a.muiName&&(D.muiName=a.muiName),D};return g.withConfig&&(S.withConfig=g.withConfig),S}}function a_(e){return e!=="ownerState"&&e!=="theme"&&e!=="sx"&&e!=="as"}const l_=e=>a_(e)&&e!=="classes";var s_=l_;const u_=KC({themeId:M1,defaultTheme:DC,rootShouldForwardProp:s_});var c_=u_;function wv(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(r=wv(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function d_(){for(var e,t,r=0,n="",i=arguments.length;r<i;r++)(e=arguments[r])&&(t=wv(e))&&(n&&(n+=" "),n+=t);return n}function f_(e){return Y3(e)}const p_=av("MuiBox",["root"]);var h_=p_;const m_=yv(),g_=j3({themeId:M1,defaultTheme:m_,defaultClassName:h_.root,generateClassName:nv.generate});var tn=g_;function v_(e){return ov("MuiSkeleton",e)}av("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const y_=["animation","className","component","height","style","variant","width"];let Sl=e=>e,gm,vm,ym,xm;const x_=e=>{const{classes:t,variant:r,animation:n,hasChildren:i,width:o,height:a}=e;return K3({root:["root",r,n,i&&"withChildren",i&&!o&&"fitContent",i&&!a&&"heightAuto"]},v_,t)},w_=gf(gm||(gm=Sl`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),b_=gf(vm||(vm=Sl`
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
`)),S_=c_("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[r.variant],r.animation!==!1&&t[r.animation],r.hasChildren&&t.withChildren,r.hasChildren&&!r.width&&t.fitContent,r.hasChildren&&!r.height&&t.heightAuto]}})(({theme:e,ownerState:t})=>{const r=LC(e.shape.borderRadius)||"px",n=AC(e.shape.borderRadius);return Q({display:"block",backgroundColor:e.vars?e.vars.palette.Skeleton.bg:V3(e.palette.text.primary,e.palette.mode==="light"?.11:.13),height:"1.2em"},t.variant==="text"&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${n}${r}/${Math.round(n/.6*10)/10}${r}`,"&:empty:before":{content:'"\\00a0"'}},t.variant==="circular"&&{borderRadius:"50%"},t.variant==="rounded"&&{borderRadius:(e.vars||e).shape.borderRadius},t.hasChildren&&{"& > *":{visibility:"hidden"}},t.hasChildren&&!t.width&&{maxWidth:"fit-content"},t.hasChildren&&!t.height&&{height:"auto"})},({ownerState:e})=>e.animation==="pulse"&&xl(ym||(ym=Sl`
      animation: ${0} 2s ease-in-out 0.5s infinite;
    `),w_),({ownerState:e,theme:t})=>e.animation==="wave"&&xl(xm||(xm=Sl`
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
    `),b_,(t.vars||t).palette.action.hover)),k_=k.exports.forwardRef(function(t,r){const n=f_({props:t,name:"MuiSkeleton"}),{animation:i="pulse",className:o,component:a="span",height:l,style:s,variant:c="text",width:d}=n,f=lr(n,y_),m=Q({},n,{animation:i,component:a,variant:c,hasChildren:Boolean(f.children)}),y=x_(m);return u(S_,Q({as:a,ref:r,className:d_(y.root,o),ownerState:m},f,{style:Q({width:d,height:l},s)}))});var er=k_;I.div`
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
`;const C_=({schemes:e,loading:t})=>u(qe,{children:t?(()=>u(qe,{children:[0,1,2,3,4,5].map(n=>b(tn,{sx:{display:"flex",flexDirection:"column",gap:1,width:"100%"},children:[u(er,{variant:"rounded",width:230,height:60}),b(tn,{sx:{pt:.5},children:[u(er,{}),u(er,{width:"60%"})]})]},n))}))():e.map((n,i)=>u(me,{className:"link",to:"",title:n.name,children:u(T1,{scheme:n})},i))});I.div`
`;const __=({collections:e,loading:t})=>u(qe,{children:t?(()=>u(qe,{children:[0,1,2,3,4,5].map(n=>b(tn,{sx:{my:2},children:[u(er,{variant:"rounded",width:50,height:50}),b(tn,{sx:{pt:.5},children:[u(er,{}),u(er,{width:"60%"})]})]},n))}))():e.map((n,i)=>b(me,{to:`/schemes/${n.url}`,children:[u("div",{className:"",children:u("img",{src:`./public/images/collection/${n.image}`,alt:""})}),u("div",{className:"name",children:n.name})]},i))}),E_=I.div`
  .schemes-header {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    margin: 1rem 0px;
    align-items: center;

    h2 { font-size: 1.8rem; }
  }
`,Nf=({schemes:e,loading:t})=>{const[r,n]=k.exports.useState(0),[i,o]=k.exports.useState(!1);return t===!1&&e.length===0&&o(!0),b(E_,{children:[b("div",{className:"schemes-header",children:[u("h2",{children:"Mutual Funds"}),u(t4,{activeFilter:r,onFilterChange:n})]}),t?(()=>u(qe,{children:[0,1,2,3,4,5].map(l=>b(tn,{sx:{display:"flex",alignItems:"justify-center",marginBottom:"30px"},children:[u(tn,{sx:{width:60,height:60,marginRight:2},children:u(er,{variant:"rounded",width:60,height:60})}),b(tn,{sx:{pt:.5},width:"100%",children:[u(er,{}),u(er,{width:"60%"})]})]},l))}))():e.map((l,s)=>u(me,{className:"link",to:"",title:l.name,children:u(T1,{scheme:l})},s))]})},$_=async(e,t={})=>{const{method:r="GET",headers:n={},body:i}=t;try{const o=await fetch(O_(e),{method:r,headers:{"Content-Type":"application/json",...n},body:r==="GET"?void 0:JSON.stringify(i)});if(!o.ok){const a=await o.json();throw new Error(a.message||"Something went wrong")}return await o.json()}catch(o){throw console.error("API Request Error:",o.message),new Error(o.message||"Something went wrong")}},P_=()=>"http://savingpulse.com",O_=e=>{const r={schemes:"/schemes","sip-with-100":"/schemes/sip-with-100","high-return":"/schemes/high-return","tax-saving":"/schemes/tax-saving","large-cap":"/schemes/large-cap","mid-cap":"/schemes/mid-cap","small-cap":"/schemes/small-cap"}[e]||"";return`${P_()}${r}?ajax=true`},N_=async e=>await $_(e),Tf=(e="")=>N_(e),T_=I.div`
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
`,R_=()=>{const{collections:e}=et(c=>c.amcCollection);k.exports.useState(0);const[t,r]=k.exports.useState(!1),[n,i]=k.exports.useState([]),[o,a]=k.exports.useState(void 0),[l,s]=k.exports.useState(!0);return k.exports.useEffect(()=>{(async()=>{try{const d=await Tf("schemes");i(d)}catch(d){a(d)}finally{s(!1)}})()},[]),u(T_,{children:b("div",{className:"container",children:[b("div",{className:"popular-fund-section division",children:[b("div",{className:"popular-funds",children:[u("h2",{children:"Popular Funds"}),u(me,{className:"link",to:"/schemes",title:"All Mutual Funds",children:"All Mutual Funds"})]}),u("div",{className:"popular-items",children:u(C_,{schemes:n,loading:l})})]}),b("div",{className:"collection-section division",children:[u("h2",{children:"Collections"}),u("div",{className:"collection-items",children:u(__,{collections:e,loading:t})})]}),u("div",{className:"all-mf-section division",children:u(Nf,{schemes:n,loading:l})})]})})},dr=(e,t)=>{var i;let r=Math.abs(e);r=(i=r==null?void 0:r.toFixed(0))==null?void 0:i.replace(/\B(?=(\d{3})+(?!\d))/g,",");let n=r.split(",");if(n.length>1){let o=n[n.length-1];r=n.slice(0,n.length-1).join("").replace(/\B(?=(\d{2})+(?!\d))/g,",")+","+o}return t==="simple"?{paisa:`\u20B9${r}`}:{paisa:e>0?`+ \u20B9${r}`:`- \u20B9${r}`,color:e>0?"#0add8c":"#f00"}},M_=I.div`
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
`,j_=()=>{et(r=>r.schemes),k.exports.useState(0);const e=6e3,t=-5e3;return u(M_,{children:b("div",{className:"container",children:[u("div",{className:"division section-heading",children:u("h2",{children:"Investments"})}),b("div",{className:"investment-container",children:[b("div",{className:"total-amt",children:[b("div",{className:"amt-section current",children:[b("div",{className:"amt-box",children:[u("div",{className:"title",children:"Current"}),b("div",{className:"amt",style:{color:dr(e,"simple").color},children:[dr(e,"simple").paisa," "]})]}),b("div",{className:"return",children:[u("div",{className:"title",children:"Total Returns"}),b("div",{className:"amt",style:{color:dr(e).color},children:[dr(e).paisa," "]})]})]}),b("div",{className:"amt-section invested",children:[b("div",{className:"amt-box",children:[u("div",{className:"title",children:"Invested"}),b("div",{className:"amt",style:{color:dr(t,"simple").color},children:[dr(t,"simple").paisa," "]})]}),b("div",{className:"return",children:[u("div",{className:"title",children:"1D Returns"}),b("div",{className:"amt",style:{color:dr(t).color},children:[dr(t).paisa," "]})]})]})]}),b("div",{className:"xirr-return",children:[b("div",{className:"",children:[u("span",{children:"XIRR"}),"17.23%"]}),u(me,{to:"",title:"aa",children:"Portfolio analysis"})]})]})]})})},z_=I.div`
`,L_=()=>u(z_,{children:u(cf,{tabs:[{name:"explore",title:"Explore",component:u(R_,{})},{name:"dashboard",title:"Dashboard",component:u(j_,{})}]})}),A_=I.div`
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
`;var bv={};function I_(e){return e&&e.__esModule?e:{default:e}}var _s=I_,Rf={};function Mc(){return Es=Mc=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Mc.apply(this,arguments)}var Es=Mc;function D_(e,t){if(e==null)return{};var r={},n=Object.keys(e),i,o;for(o=0;o<n.length;o++)i=n[o],!(t.indexOf(i)>=0)&&(r[i]=e[i]);return r}var F_=D_,B_=F_;function U_(e,t){if(e==null)return{};var r=B_(e,t),n,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],!(t.indexOf(n)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,n)||(r[n]=e[n]))}return r}var Mf=U_;function W_(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var jf=W_;function wm(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function H_(e,t,r){return t&&wm(e.prototype,t),r&&wm(e,r),e}var zf=H_;function Yn(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Yn=function(r){return typeof r}:Yn=function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},Yn(e)}function Aa(e){return typeof Symbol=="function"&&Yn(Symbol.iterator)==="symbol"?jc=Aa=function(r){return Yn(r)}:jc=Aa=function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":Yn(r)},Aa(e)}var jc=Aa;function V_(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var K_=V_,X_=jc,G_=K_;function Y_(e,t){return t&&(X_(t)==="object"||typeof t=="function")?t:G_(e)}var Lf=Y_;function zc(e){return $s=zc=Object.setPrototypeOf?Object.getPrototypeOf:function(r){return r.__proto__||Object.getPrototypeOf(r)},zc(e)}var $s=zc;function Lc(e,t){return Sv=Lc=Object.setPrototypeOf||function(n,i){return n.__proto__=i,n},Lc(e,t)}var Sv=Lc,q_=Sv;function Q_(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&q_(e,t)}var Af=Q_;function J_(e,t){if(e===t)return!0;if(!e||!t)return!1;var r=Object.keys(e),n=Object.keys(t),i=r.length;if(n.length!==i)return!1;for(var o=0;o<i;o++){var a=r[o];if(e[a]!==t[a]||!Object.prototype.hasOwnProperty.call(t,a))return!1}return!0}function Z_(e,t){if(e===t)return!0;if(!e||!t)return!1;var r=e.length;if(t.length!==r)return!1;for(var n=0;n<r;n++)if(e[n]!==t[n])return!1;return!0}var e9=Object.freeze(Object.defineProperty({__proto__:null,shallowEqualArrays:Z_,shallowEqualObjects:J_},Symbol.toStringTag,{value:"Module"})),t9=ir(e9),Yo={},kv={exports:{}};(function(e){function t(r,n){if(!(r instanceof n))throw new TypeError("Cannot call a class as a function")}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports})(kv);var Cv={exports:{}},_v={exports:{}},qo={exports:{}};(function(e){function t(r){return e.exports=t=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},e.exports.__esModule=!0,e.exports.default=e.exports,t(r)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports})(qo);var Ev={exports:{}};(function(e){var t=qo.exports.default;function r(n,i){if(t(n)!="object"||!n)return n;var o=n[Symbol.toPrimitive];if(o!==void 0){var a=o.call(n,i||"default");if(t(a)!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(i==="string"?String:Number)(n)}e.exports=r,e.exports.__esModule=!0,e.exports.default=e.exports})(Ev);(function(e){var t=qo.exports.default,r=Ev.exports;function n(i){var o=r(i,"string");return t(o)=="symbol"?o:o+""}e.exports=n,e.exports.__esModule=!0,e.exports.default=e.exports})(_v);(function(e){var t=_v.exports;function r(i,o){for(var a=0;a<o.length;a++){var l=o[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(i,t(l.key),l)}}function n(i,o,a){return o&&r(i.prototype,o),a&&r(i,a),Object.defineProperty(i,"prototype",{writable:!1}),i}e.exports=n,e.exports.__esModule=!0,e.exports.default=e.exports})(Cv);var $v={exports:{}},Pv={exports:{}};(function(e){function t(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports})(Pv);(function(e){var t=qo.exports.default,r=Pv.exports;function n(i,o){if(o&&(t(o)=="object"||typeof o=="function"))return o;if(o!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return r(i)}e.exports=n,e.exports.__esModule=!0,e.exports.default=e.exports})($v);var Ov={exports:{}};(function(e){function t(r){return e.exports=t=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},e.exports.__esModule=!0,e.exports.default=e.exports,t(r)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports})(Ov);var Nv={exports:{}},Tv={exports:{}};(function(e){function t(r,n){return e.exports=t=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,o){return i.__proto__=o,i},e.exports.__esModule=!0,e.exports.default=e.exports,t(r,n)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports})(Tv);(function(e){var t=Tv.exports;function r(n,i){if(typeof i!="function"&&i!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(i&&i.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),i&&t(n,i)}e.exports=r,e.exports.__esModule=!0,e.exports.default=e.exports})(Nv);var Rv={exports:{}};(function(e){var t=Of.exports;function r(n,i){if(n==null)return{};var o,a,l=t(n,i);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);for(a=0;a<s.length;a++)o=s[a],i.includes(o)||{}.propertyIsEnumerable.call(n,o)&&(l[o]=n[o])}return l}e.exports=r,e.exports.__esModule=!0,e.exports.default=e.exports})(Rv);Object.defineProperty(Yo,"__esModule",{value:!0});function Rt(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var r9=Rt(kv.exports),n9=Rt(Cv.exports),i9=Rt($v.exports),o9=Rt(Ov.exports),a9=Rt(Nv.exports),l9=Rt(qo.exports),s9=Rt(Rv.exports),u9=Rt(mf.exports),c9=Rt(k.exports);Rt(fi.exports);Rt(sf);function d9(e,t,r){return Object.defineProperty(e,t,r)}var f9=function(){var e=null;return function(){if(e!==null)return e;var t=!1;try{window.addEventListener("test",null,d9({},"passive",{get:function(){t=!0}}))}catch{}return e=t,t}()}(),p9={capture:!1,passive:!1};function Mv(e){return u9({},p9,e)}function jv(e,t,r){var n=[e,t];return n.push(f9?r:r.capture),n}function bm(e,t,r,n){e.addEventListener.apply(e,jv(t,r,n))}function Sm(e,t,r,n){e.removeEventListener.apply(e,jv(t,r,n))}function h9(e,t){e.children,e.target;var r=s9(e,["children","target"]);Object.keys(r).forEach(function(n){if(n.substring(0,2)==="on"){var i=r[n],o=l9(i),a=o==="object",l=o==="function";if(!(!a&&!l)){var s=n.substr(-7).toLowerCase()==="capture",c=n.substring(2).toLowerCase();c=s?c.substring(0,c.length-7):c,a?t(c,i.handler,i.options):t(c,i,Mv({capture:s}))}}})}function m9(e,t){return{handler:e,options:Mv(t)}}var zv=function(e){a9(t,e);function t(){return r9(this,t),i9(this,o9(t).apply(this,arguments))}return n9(t,[{key:"componentDidMount",value:function(){this.applyListeners(bm)}},{key:"componentDidUpdate",value:function(n){this.applyListeners(Sm,n),this.applyListeners(bm)}},{key:"componentWillUnmount",value:function(){this.applyListeners(Sm)}},{key:"applyListeners",value:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.props,o=i.target;if(o){var a=o;typeof o=="string"&&(a=window[o]),h9(i,n.bind(null,a))}}},{key:"render",value:function(){return this.props.children||null}}]),t}(c9.PureComponent);zv.propTypes={};Yo.withOptions=m9;Yo.default=zv;var Kt=_s;Object.defineProperty(Rf,"__esModule",{value:!0});Rf.default=_9;var km=Kt(Es),g9=Kt(Mf),v9=Kt(jf),y9=Kt(zf),x9=Kt(Lf),w9=Kt($s),b9=Kt(Af),Mi=Kt(k.exports);Kt(fi.exports);var S9=t9,k9=Kt(Yo),C9=Uo;function _9(e){var t=function(r){(0,b9.default)(n,r);function n(i){var o;return(0,v9.default)(this,n),o=(0,x9.default)(this,(0,w9.default)(n).call(this,i)),o.timer=null,o.state={},o.handleInterval=function(){var a=o.props,l=a.children,s=a.direction,c=a.onChangeIndex,d=a.slideCount,f=o.state.index,m=f;s==="incremental"?m+=1:m-=1,(d||l)&&(m=(0,C9.mod)(m,d||Mi.default.Children.count(l))),o.props.index===void 0&&o.setState({index:m}),c&&c(m,f)},o.handleChangeIndex=function(a,l,s){o.props.index===void 0&&o.setState({index:a}),o.props.onChangeIndex&&o.props.onChangeIndex(a,l,s)},o.handleSwitching=function(a,l){o.timer?(clearInterval(o.timer),o.timer=null):l==="end"&&o.startInterval(),o.props.onSwitching&&o.props.onSwitching(a,l)},o.handleVisibilityChange=function(a){a.target.hidden?clearInterval(o.timer):o.startInterval()},o.state.index=i.index||0,o}return(0,y9.default)(n,[{key:"componentDidMount",value:function(){this.startInterval()}},{key:"UNSAFE_componentWillReceiveProps",value:function(o){var a=o.index;typeof a=="number"&&a!==this.props.index&&this.setState({index:a})}},{key:"componentDidUpdate",value:function(o){var a=!(0,S9.shallowEqualObjects)({index:o.index,interval:o.interval,autoplay:o.autoplay},{index:this.props.index,interval:this.props.interval,autoplay:this.props.autoplay});a&&this.startInterval()}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}},{key:"startInterval",value:function(){var o=this.props,a=o.autoplay,l=o.interval;clearInterval(this.timer),a&&(this.timer=setInterval(this.handleInterval,l))}},{key:"render",value:function(){var o=this.props,a=o.autoplay;o.direction,o.index,o.interval;var l=o.onChangeIndex,s=(0,g9.default)(o,["autoplay","direction","index","interval","onChangeIndex"]),c=this.state.index;return a?Mi.default.createElement(k9.default,{target:"document",onVisibilityChange:this.handleVisibilityChange},Mi.default.createElement(e,(0,km.default)({index:c,onChangeIndex:this.handleChangeIndex,onSwitching:this.handleSwitching},s))):Mi.default.createElement(e,(0,km.default)({index:c,onChangeIndex:l},s))}}]),n}(Mi.default.Component);return t.propTypes={},t.defaultProps={autoplay:!0,direction:"incremental",interval:3e3},t}var If={},Ac={exports:{}};(function(e,t){function r(s){if(s&&typeof s=="object"){var c=s.which||s.keyCode||s.charCode;c&&(s=c)}if(typeof s=="number")return a[s];var d=String(s),f=n[d.toLowerCase()];if(f)return f;var f=i[d.toLowerCase()];if(f)return f;if(d.length===1)return d.charCodeAt(0)}r.isEventKey=function(c,d){if(c&&typeof c=="object"){var f=c.which||c.keyCode||c.charCode;if(f==null)return!1;if(typeof d=="string"){var m=n[d.toLowerCase()];if(m)return m===f;var m=i[d.toLowerCase()];if(m)return m===f}else if(typeof d=="number")return d===f;return!1}},t=e.exports=r;var n=t.code=t.codes={backspace:8,tab:9,enter:13,shift:16,ctrl:17,alt:18,"pause/break":19,"caps lock":20,esc:27,space:32,"page up":33,"page down":34,end:35,home:36,left:37,up:38,right:39,down:40,insert:45,delete:46,command:91,"left command":91,"right command":93,"numpad *":106,"numpad +":107,"numpad -":109,"numpad .":110,"numpad /":111,"num lock":144,"scroll lock":145,"my computer":182,"my calculator":183,";":186,"=":187,",":188,"-":189,".":190,"/":191,"`":192,"[":219,"\\":220,"]":221,"'":222},i=t.aliases={windows:91,"\u21E7":16,"\u2325":18,"\u2303":17,"\u2318":91,ctl:17,control:17,option:18,pause:19,break:19,caps:20,return:13,escape:27,spc:32,spacebar:32,pgup:33,pgdn:34,ins:45,del:46,cmd:91};/*!
 * Programatically add the following
 */for(o=97;o<123;o++)n[String.fromCharCode(o)]=o-32;for(var o=48;o<58;o++)n[o-48]=o;for(o=1;o<13;o++)n["f"+o]=o+111;for(o=0;o<10;o++)n["numpad "+o]=o+96;var a=t.names=t.title={};for(o in n)a[n[o]]=o;for(var l in i)n[l]=i[l]})(Ac,Ac.exports);var Mt=_s;Object.defineProperty(If,"__esModule",{value:!0});If.default=L9;var E9=Mt(Es),$9=Mt(Mf),P9=Mt(jf),O9=Mt(zf),N9=Mt(Lf),T9=Mt($s),R9=Mt(Af),ya=Mt(k.exports);Mt(fi.exports);var M9=Mt(Ac.exports),j9=Mt(Yo),z9=Uo;function L9(e){var t=function(r){(0,R9.default)(n,r);function n(){var i,o;(0,P9.default)(this,n);for(var a=arguments.length,l=new Array(a),s=0;s<a;s++)l[s]=arguments[s];return o=(0,N9.default)(this,(i=(0,T9.default)(n)).call.apply(i,[this].concat(l))),o.state={},o.handleKeyDown=function(c){var d,f=o.props,m=f.axis,y=m===void 0?"x":m,x=f.children,v=f.onChangeIndex,p=f.slideCount;switch((0,M9.default)(c)){case"page down":case"down":y==="y"?d="decrease":y==="y-reverse"&&(d="increase");break;case"left":y==="x"?d="decrease":y==="x-reverse"&&(d="increase");break;case"page up":case"up":y==="y"?d="increase":y==="y-reverse"&&(d="decrease");break;case"right":y==="x"?d="increase":y==="x-reverse"&&(d="decrease");break}if(d){var h=o.state.index,g=h;d==="increase"?g+=1:g-=1,(p||x)&&(g=(0,z9.mod)(g,p||ya.default.Children.count(x))),o.props.index===void 0&&o.setState({index:g}),v&&v(g,h)}},o.handleChangeIndex=function(c,d,f){o.props.index===void 0&&o.setState({index:c}),o.props.onChangeIndex&&o.props.onChangeIndex(c,d,f)},o}return(0,O9.default)(n,[{key:"UNSAFE_componentWillMount",value:function(){this.setState({index:this.props.index||0})}},{key:"UNSAFE_componentWillReceiveProps",value:function(o){var a=o.index;typeof a=="number"&&a!==this.props.index&&this.setState({index:a})}},{key:"render",value:function(){var o=this.props;o.index,o.onChangeIndex;var a=(0,$9.default)(o,["index","onChangeIndex"]),l=this.state.index;return ya.default.createElement(j9.default,{target:"window",onKeyDown:this.handleKeyDown},ya.default.createElement(e,(0,E9.default)({index:l,onChangeIndex:this.handleChangeIndex},a)))}}]),n}(ya.default.Component);return t.propTypes={},t}var Df={};function A9(e){if(e&&e.__esModule)return e;var t={};if(e!=null){for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}}return t.default=e,t}var I9=A9,D9=I9,Vr=_s;Object.defineProperty(Df,"__esModule",{value:!0});Df.default=G9;var F9=Vr(Es),B9=Vr(Mf),U9=Vr(jf),W9=Vr(zf),H9=Vr(Lf),V9=Vr($s),K9=Vr(Af),Cm=D9(k.exports);Vr(fi.exports);var X9=Uo;function G9(e){var t=function(r){(0,K9.default)(n,r);function n(i){var o;return(0,U9.default)(this,n),o=(0,H9.default)(this,(0,V9.default)(n).call(this,i)),o.timer=null,o.state={},o.handleChangeIndex=function(a,l,s){var c=o.props,d=c.slideCount,f=c.onChangeIndex,m=a-l,y=o.state.index+m;d&&(y=(0,X9.mod)(y,d)),o.props.index===void 0&&o.setIndex(y,a,m),f&&f(y,o.state.index,s)},o.handleTransitionEnd=function(){o.timer=setTimeout(function(){o.setWindow()},0),o.props.onTransitionEnd&&o.props.onTransitionEnd()},o.state.index=i.index||0,o}return(0,W9.default)(n,[{key:"UNSAFE_componentWillMount",value:function(){this.setWindow(this.state.index)}},{key:"UNSAFE_componentWillReceiveProps",value:function(o){var a=o.index;if(typeof a=="number"&&a!==this.props.index){var l=a-this.props.index;this.setIndex(a,this.state.indexContainer+l,l)}}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}},{key:"setIndex",value:function(o,a,l){var s={index:o,indexContainer:a,indexStart:this.state.indexStart,indexStop:this.state.indexStop};l>0&&(!this.props.slideCount||s.indexStop<this.props.slideCount-1)&&(s.indexStop+=1),o>s.indexStop&&(s.indexStop=o);var c=s.indexStart-o;c>0&&(s.indexContainer+=c,s.indexStart-=c),this.setState(s)}},{key:"setWindow",value:function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.state.index,a=this.props.slideCount,l=this.props.overscanSlideBefore,s=this.props.overscanSlideAfter;a&&(l>o&&(l=o),s+o>a-1&&(s=a-o-1)),this.setState({indexContainer:l,indexStart:o-l,indexStop:o+s})}},{key:"render",value:function(){var o=this.props;o.children,o.index,o.onChangeIndex,o.onTransitionEnd,o.overscanSlideAfter,o.overscanSlideBefore,o.slideCount;for(var a=o.slideRenderer,l=(0,B9.default)(o,["children","index","onChangeIndex","onTransitionEnd","overscanSlideAfter","overscanSlideBefore","slideCount","slideRenderer"]),s=this.state,c=s.indexContainer,d=s.indexStart,f=s.indexStop,m=[],y=d;y<=f;y+=1)m.push(a({index:y,key:y}));return Cm.default.createElement(e,(0,F9.default)({index:c,onChangeIndex:this.handleChangeIndex,onTransitionEnd:this.handleTransitionEnd},l),m)}}]),n}(Cm.PureComponent);return t.propTypes={},t.defaultProps={overscanSlideAfter:2,overscanSlideBefore:3},t}(function(e){var t=_s;Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"autoPlay",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(e,"bindKeyboard",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(e,"virtualize",{enumerable:!0,get:function(){return i.default}});var r=t(Rf),n=t(If),i=t(Df)})(bv);const Y9=I.div`
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
`,q9=({count:e,index:t})=>u(Y9,{children:Array.from({length:e}).map((r,n)=>u("div",{className:`dot ${t===n?"active-dot":""}`},n))}),Q9=bv.autoPlay(N1),J9=I.div`
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
`,Z9=()=>{const[e,t]=k.exports.useState(0),r=n=>{t(n)};return k.exports.useEffect(()=>{const n=setInterval(()=>{t(i=>(i+1)%3)},9e3);return()=>clearInterval(n)},[]),b(J9,{children:[b(Q9,{index:e,onChangeIndex:r,children:[b("div",{className:"slide",children:[u("img",{src:"./images/logo/savingpulse-logos_transparent.png",alt:""}),u("h2",{children:"Simple & free investing"}),u("p",{children:"Make investment easy in mutual funds"})]}),b("div",{className:"slide",children:[u("img",{src:"./images/logo/savingpulse-logos_transparent.png",alt:""}),u("h2",{children:"Direct mutual funds"}),u("p",{children:"Earn up to 2% extra!"})]}),b("div",{className:"slide",children:[u("img",{src:"./images/logo/savingpulse-logos_transparent.png",alt:""}),u("h2",{children:"Start in 2 minutes"}),u("p",{children:"100% peperless investing - SIP & One-time"})]})]}),u(q9,{count:3,index:e})]})},Lv=I.div`
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
`,_m=Qe`var(--white, #fff)`,eE=Qe`var(--primaryDisableCTAFill, #767676)`,tE=Qe`var(--secondaryCTABorder, #999)`,rE=Qe`var(--primaryCTAFill, #9147ff)`,vu=Qe`var(--primaryCTAFillRGB, 145, 71 ,255)`,nE=Qe`var(--primaryCTABorder, #c5d1df)`,iE=Qe`var(--primaryErrorCTAFill, #d9534f)`,yu=Qe`var(--primaryErrorCTAFillRGB, 229, 28, 38)`,oE=Qe`var(--primaryErrorCTABorder, #d43f3a)`,aE=Qe`var(--secondaryCTAFill, #333)`,xu=Qe`var(--secondaryCTAFillRGB, 51, 51, 51)`,lE=Qe`var(--primaryCTABorder, #979797)`,sE=Qe`#ee8950`,uE=Qe`#ec7939`,kl=I.div`
  .sp-button {
    min-height: 3.5rem;
    cursor: pointer;
    color: ${_m};
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
    outline-color: ${_m};
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
    background-color: ${eE};
    border: 1px solid ${tE};
  }
  .sp-button.transparent {
    background-color: transparent;
  }
  .sp-button.warning {
    background-color: ${sE}
    border-color: ${uE};
  }

  .sp-button.primary {
    background-color: ${rE};
    border-color: ${nE};
  }
  .sp-button.primary:hover {
    background-color: rgba(${vu}, 0.9);
  }
  .sp-button.primary:focus-visible {
    background-color: rgba(${vu}, 0.8);
  }
  .sp-button.primary:active {
    background-color: rgba(${vu}, 0.7);
  }

  .sp-button.danger {
    background-color: ${iE};
    border-color: ${oE};
  }
  .sp-button.danger:hover {
    background-color: rgba(${yu}, 0.9);
  }
  .sp-button.danger:focus-visible {
    background-color: rgba(${yu}, 0.8);
  }
  .sp-button.danger:active {
    background-color: rgba(${yu}, 0.7);
  }

  .sp-button.dark {
    background-color: ${aE};
    border-color: ${lE};
  }
  .sp-button.dark:hover {
    background-color: rgba(${xu}, 0.9);
  }
  .sp-button.dark:focus-visible {
    background-color: rgba(${xu}, 0.8);
  }
  .sp-button.dark:active {
    background-color: rgba(${xu}, 0.7);
  }
`,cE=({type:e=""})=>{et(i=>i.offers);const[t,r]=k.exports.useState(!1);let n=mn();return u(Lv,{children:b("div",{className:`login-with ${t?"hide":""}`,children:[b("div",{className:"content",children:[u("h2",{children:"Enter 6 digit OTP we sent"}),u("p",{children:"We will send you a confirmation code."}),u("label",{children:u("input",{type:"number",pattern:"[0-9]",placeholder:"######"})})]}),b("div",{className:"controls",children:[u("div",{className:"next",children:u(kl,{children:u("button",{className:"sp-button primary",onClick:()=>{document.cookie="isLoggedIn="+!0,n("/mutual-funds")},children:"Submit"})})}),u("div",{className:"numbers",children:b("ul",{children:[u("li",{children:"1"}),u("li",{children:"2"}),u("li",{children:"3"}),u("li",{children:"4"}),u("li",{children:"5"}),u("li",{children:"6"}),u("li",{children:"7"}),u("li",{children:"8"}),u("li",{children:"9"}),u("li",{children:"0"}),u("li",{children:u(i1,{})})]})})]})]})})},dE=()=>{const[e,t]=k.exports.useState(!1),[r,n]=k.exports.useState(!1);return b(Lv,{children:[b("div",{className:`login-with ${e?"hide":""}`,children:[b("div",{className:"content",children:[u("h2",{children:"Enter your mobile number"}),u("p",{children:"We will send you a confirmation code."}),b("label",{children:[u("span",{children:"+91"})," ",u("input",{type:"number",pattern:"[0-9]",maxLength:"10",placeholder:"8947973174"})]})]}),b("div",{className:"controls",children:[u("div",{className:"next",children:u(kl,{children:u("button",{className:"sp-button primary",onClick:()=>n(!0),children:"Next"})})}),u("div",{className:"numbers",children:b("ul",{children:[u("li",{children:"1"}),u("li",{children:"2"}),u("li",{children:"3"}),u("li",{children:"4"}),u("li",{children:"5"}),u("li",{children:"6"}),u("li",{children:"7"}),u("li",{children:"8"}),u("li",{children:"9"}),u("li",{children:"0"}),u("li",{children:u(i1,{})})]})})]})]}),r?u(cE,{}):null]})},fE=I.div`
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
`,pE=({type:e=""})=>{const{offers:t}=et(r=>r.offers);return u(fE,{children:t.map((r,n)=>{if(r.type===e)return b("div",{className:`offer-box offer-${r.id}`,children:[b("div",{className:"left-side",children:[u("div",{className:"picture",children:u("img",{src:r.image,alt:""})}),u("h2",{className:"name",children:r.name})]}),u("div",{className:"right-side",children:b("ul",{className:"action-buttons",children:[u("li",{children:"View Details"}),u("li",{children:"Open Account"})]})})]},r.id)})})},Em=()=>{const[e,t]=k.exports.useState(!1),[r,n]=k.exports.useState(!1),i=()=>{t(!1),n(!1)};let o=mn();return document.cookie.split(";").filter(l=>l.indexOf("isLoggedIn=true")>=0).length!==0&&o("/mutual-funds"),u(qe,{children:b(A_,{children:[b("div",{className:`login-mobile ${e?"hide1":""}`,children:[u("div",{className:"slider",children:u(Z9,{})}),b("div",{className:"login-container",children:[u(kl,{children:u("div",{className:"login-otp sp-button primary",onClick:()=>t(!0),children:"Sign in with OTP"})}),u(kl,{children:u("div",{className:"login-google sp-button primary",onClick:()=>n(!0),children:"Sign in with google"})}),b("div",{className:"no-account",children:["Don't have an account? ",u(me,{to:"/signup",children:"Signup"})]})]})]}),e&&b("div",{children:[u("div",{className:"header",onClick:i,children:u(_h,{})}),u(dE,{})]}),r&&b("div",{children:[u("div",{className:"header",onClick:i,children:u(_h,{})}),u(pE,{})]})]})})},hE=I.div`
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
`,mE=()=>{k.exports.useState(0);const[e,t]=k.exports.useState(!0),[r,n]=k.exports.useState([]);return k.exports.useEffect(()=>{(async()=>{try{const o=await Tf();n(o)}catch(o){setError(o)}finally{t(!1)}})()},[]),u(hE,{children:u("div",{className:"container division",children:u(Nf,{schemes:r,loading:e})})})},gE=I.div`
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
`,Cn=({type:e=""})=>{var c;const[t,r]=k.exports.useState(!0),[n,i]=k.exports.useState([]),l=(c=St().pathname.split("/").filter(d=>d)[1])!=null?c:"schemes";k.exports.useEffect(()=>{(async()=>{try{const f=await Tf(l);i(f)}catch(f){setError(f)}finally{r(!1)}})()},[]);const s=()=>{switch(e){case"high-return":return{title:"High Return",desc:"Funds with good return in recent time",img:"high-returns.svg"};case"sip-with-100":return{title:"SIP with 100",desc:"Funds with minimum investment of just 100 every month",img:"sip-with-100.svg"};case"tax-saving":return{title:"Tax Saving",desc:"Funds that help you save on taxes",img:"tax-saving.svg"};case"large-cap":return{title:"Large Cap",desc:"Funds investing in large-cap companies",img:"large-cap.svg"};case"mid-cap":return{title:"Mid Cap",desc:"Funds investing in mid-cap companies",img:"mid-cap.svg"};case"small-cap":return{title:"Small Cap",desc:"Funds investing in small-cap companies",img:"small-cap.svg"};default:return{title:"Unknown",desc:"No description available",img:"default.svg"}}};return u(gE,{children:b("div",{className:"container division",children:[b("div",{className:"template-header",children:[b("div",{children:[u("h2",{children:s().title}),u("p",{children:s().desc})]}),u("img",{src:`./public/images/collection/${s().img}`,alt:""})]}),u(Nf,{schemes:n,loading:t})]})})},vE=()=>{const{darkStatus:e,sideBarStatus:t}=et(f=>f.site),[r,n]=k.exports.useState(window.innerWidth),[i,o]=k.exports.useState(!0),a=mn(),l=St(),s=document.cookie.split(";").filter(f=>f.indexOf("isLoggedIn=true")>=0);console.log(s.length);let c=u(L_,{});s.length===0&&(c=u(Em,{})),k.exports.useEffect(()=>{s.length===0&&a("/login");const f=()=>n(window.innerWidth);return window.addEventListener("resize",f),()=>window.removeEventListener("resize",f)},[r]),k.exports.useEffect(()=>{const f=setTimeout(()=>{},3e3);return()=>clearTimeout(f)},[]);const d=()=>l.pathname==="/login"||s.length===0?(o(!1),null):u(QS,{mySize:r});return k.exports.useEffect(()=>{const f=()=>{l.pathname==="/"&&window.confirm("Do you want to close the app?")&&window.close()};return window.addEventListener("popstate",f),()=>{window.removeEventListener("popstate",f)}},[l.pathname]),b(qw,{theme:e?tb:eb,children:[u(Zw,{}),b("div",{className:"app",children:[u(d,{}),u("div",{className:`${i?"main":""} ${t&&r>1199?"sidebar-open":""}`,children:b(z2,{children:[u(ne,{path:"*",element:u(M2,{to:"/",replace:!0})}),u(ne,{path:"/all-mutual-funds",element:u(mE,{})}),u(ne,{path:"/",element:c}),u(ne,{path:"/login",element:u(Em,{})}),b(ne,{path:"/schemes/",children:[u(ne,{path:"high-return",element:u(Cn,{type:"high-return"})}),u(ne,{path:"sip-with-100",element:u(Cn,{type:"sip-with-100"})}),u(ne,{path:"tax-saving",element:u(Cn,{type:"tax-saving"})}),u(ne,{path:"large-cap",element:u(Cn,{type:"large-cap"})}),u(ne,{path:"mid-cap",element:u(Cn,{type:"mid-cap"})}),u(ne,{path:"small-cap",element:u(Cn,{type:"small-cap"})}),u(ne,{path:"dashboard",element:u(hu,{})}),u(ne,{path:"SIP",element:u(hu,{})}),u(ne,{path:"Watchlist",element:u(hu,{})})]}),b(ne,{path:"/following/",element:u(Z5,{}),children:[u(ne,{index:!0,element:u(c4,{})}),u(ne,{path:"live",element:u(d4,{})}),u(ne,{path:"videos",element:u(f4,{})}),u(ne,{path:"categories",element:u(p4,{})})]}),b(ne,{path:"/ipo/",element:u(yn,{}),children:[u(ne,{index:!0,path:"all",element:u(yn,{})}),u(ne,{path:"mainline",element:u(yn,{})}),u(ne,{path:"sme",element:u(yn,{})}),u(ne,{path:"listed",element:u(yn,{})}),u(ne,{path:"closed",element:u(yn,{})})]}),b(ne,{path:"/offers/",element:u(g4,{}),children:[u(ne,{index:!0,path:"brokers",element:u(Yh,{type:"stock"})}),u(ne,{path:"advisors",element:u(Yh,{type:"advisor"})})]})]})})]})]})},yE=()=>{const{pathname:e}=St();return k.exports.useEffect(()=>{window.scrollTo(0,0)},[e]),null},xE=gn({name:"user",initialState:{users:[{username:"CosmoKramer",title:"Rapid Chess Championship!",game:"Chess",tag:"Chatting",pp:"https://i.pravatar.cc/",liveScreen:"./images/games/game-chees.jpg",viewers:"17.1K"},{username:"Soprano",title:"Im back",game:"Dota 2",tag:"Turkish",pp:"https://i.pravatar.cc/",liveScreen:"./images/games/game-dota.jpg",viewers:"395"},{username:"Seinfeld",title:"Reduce Ping & Avoid Lags",game:"PUBG",tag:"English",pp:"https://i.pravatar.cc/",liveScreen:"./images/games/game-pubg.jpg",viewers:"5.4K"},{username:"Darlene",title:"FPS soon? OMEGALUL",game:"Counter Strike",tag:"English",pp:"https://i.pravatar.cc/",liveScreen:"./images/games/game-cs.jpg",viewers:"117"},{username:"Cersei",title:"Live Bitcoin Trading Infos 24/7",game:"Crypto",tag:"Chatting",pp:"https://i.pravatar.cc/",liveScreen:"./images/games/game-crypto.jpg",viewers:"88"},{username:"Jacob",title:"LVL 70 - Tracksuit Grind",game:"Escape From Tarkov",tag:"Turkish",pp:"https://i.pravatar.cc/",liveScreen:"./images/games/game-eft.jpg",viewers:"733"},{username:"Skyler",title:"Tourney Run Kollo",game:"Mortal Kombat",tag:"English",pp:"https://i.pravatar.cc/",liveScreen:"./images/games/game-mortal.jpg",viewers:"231"},{username:"Schillinger",title:"Day 12 of the Game of Year ?",game:"Elder Ring",tag:"English",pp:"https://i.pravatar.cc/",liveScreen:"./images/games/game-elder.jpg",viewers:"3.7K"}]}});var wE=xE.reducer;const bE=gn({name:"category",initialState:{games:[{name:"Dota 2",image:"./images/categories/game1.jpg",viewer:"63.3k"},{name:"Chess",image:"./images/categories/game2.jpg",viewer:"23.7k"},{name:"PUBG: BATTLEGROUNDS",image:"./images/categories/game3.jpg",viewer:"34.3k"},{name:"Just Chatting",image:"./images/categories/game4.jpg",viewer:"580k"},{name:"Grand Theft Auto V",image:"./images/categories/game5.jpg",viewer:"144k"},{name:"Elder Ring",image:"./images/categories/game6.jpg",viewer:"88k"},{name:"Apex Legends",image:"./images/categories/game7.jpg",viewer:"112.6k"},{name:"Call of Duty: Wardzone",image:"./images/categories/game8.jpg",viewer:"39k"},{name:"Escape from Tarkov",image:"./images/categories/game9.jpg",viewer:"20k"},{name:"FIFA 22",image:"./images/categories/game10.jpg",viewer:"42.2k"},{name:"Fortnite",image:"./images/categories/game11.jpg",viewer:"102k"},{name:"Age of Empires",image:"./images/categories/game12.jpg",viewer:"5.4k"}]}});var SE=bE.reducer;let Ic;Ic===void 0&&(Ic=[{Scheme_Name:"Aditya Birla Sun Life PSU Equity Fund",amc_logo:"absl.png",Scheme_Type:"Equity",Scheme_Type:"Big",Scheme_Code:"",risk:"High",rating:5,return:[47.01,88,23]},{Scheme_Name:"Motilal Oswal Midcap Fund",amc_logo:"motilal-oswal.png",Scheme_Type:"Equity",Scheme_Type:"Flexi Cap",Scheme_Code:"",risk:"Very High",rating:4,return:[47.01,88]},{Scheme_Name:"Nippon India Small Cap Fund",amc_logo:"nippon.png",Scheme_Type:"Equity",Scheme_Type:"Small",Scheme_Code:"",risk:"Low",rating:5,return:[47.01,88,23]},{Scheme_Name:"Motilal Oswal Midcap Fund",amc_logo:"motilal-oswal.png",Scheme_Type:"Equity",Scheme_Type:"Flexi Cap",Scheme_Code:"",risk:"Very High",rating:4,return:[47.01,88]},{Scheme_Name:"Nippon India Small Cap Fund",amc_logo:"nippon.png",Scheme_Type:"Equity",Scheme_Type:"Small",Scheme_Code:"",risk:"Low",rating:5,return:[47.01,88,23]},{Scheme_Name:"Motilal Oswal Midcap Fund",amc_logo:"motilal-oswal.png",Scheme_Type:"Equity",Scheme_Type:"Flexi Cap",Scheme_Code:"",risk:"Very High",rating:4,return:[47.01,88]},{Scheme_Name:"Nippon India Small Cap Fund",amc_logo:"nippon.png",Scheme_Type:"Equity",Scheme_Type:"Small",Scheme_Code:"",risk:"Low",rating:5,return:[47.01,88,23]}]);const kE=gn({name:"schemes",initialState:{schemes:Ic}});var CE=kE.reducer;const _E=gn({name:"offers",initialState:{offers:[{id:1,name:"Angel Broking",image:"./images/offers/angel-one.png",category:"broker",type:"advisor",href:"/angel-broking"},{id:2,name:"Zerodha",image:"./images/offers/zerodha.png",category:"broker",type:"stock",href:"#"},{id:3,name:"Upstox",image:"./images/offers/upstox.png",category:"broker",type:"advisor",href:"#"},{id:5,name:"Dhan",image:"./images/offers/dhan.png",category:"broker",type:"advisor",href:"#"},{id:6,name:"5 Paisa",image:"./images/offers/5-paisa.png",category:"broker",type:"stock",href:"#"},{id:7,name:"ICICI direct",image:"./images/offers/icici-direct.png",category:"broker",type:"advisor",href:"#"},{id:8,name:"Kotak Securities",image:"./images/offers/kotak-security.png",category:"broker",type:"stock",href:"#"},{id:1,name:"Angel Broking",image:"./images/offers/angel-one.png",category:"broker",type:"advisor",href:"/angel-broking"},{id:2,name:"Zerodha",image:"./images/offers/zerodha.png",category:"broker",type:"stock",href:"#"},{id:3,name:"Upstox",image:"./images/offers/upstox.png",category:"broker",type:"advisor",href:"#"},{id:5,name:"Dhan",image:"./images/offers/dhan.png",category:"broker",type:"advisor",href:"#"},{id:6,name:"5 Paisa",image:"./images/offers/5-paisa.png",category:"broker",type:"stock",href:"#"},{id:7,name:"ICICI direct",image:"./images/offers/icici-direct.png",category:"broker",type:"advisor",href:"#"},{id:8,name:"Kotak Securities",image:"./images/offers/kotak-security.png",category:"broker",type:"stock",href:"#"}]}});var EE=_E.reducer;const $E=gn({name:"ipos",initialState:{ipos:[{name:"RNFI Services Limited",image:"./images/ipo/RNFI_Services_logo.jpg",exchange:"NSE",type:"sme",href:"/angel-broking",date:{start:"Jul 22, 2024",end:"Jul 22, 2024",list:"Jul 22, 2024"},price:{offer:"98-105",expectedPremium:"84-90 (80%)"},lotSize:"1200",subscriptions:"221.56"},{name:"SAR Televenture Limited FPO",image:"./images/ipo/SAR_Televentures_logo.png",exchange:"NSE",type:"mainline",href:"/angel-broking",date:{start:"Jul 22, 2024",end:"Jul 22, 2024",list:"Jul 22, 2024"},price:{offer:"200-210",expectedPremium:"7-8 (3.33%)"},lotSize:"500",subscriptions:"7.49"},{name:"V.L.Infraprojects Limited",image:"./images/ipo/Vraj_Iron_And_Steel_logo.png",exchange:"NSE",type:"sme",href:"/angel-broking",date:{start:"Jul 23, 2024",end:"Jul 25, 2024",list:"Jul 22, 2024"},price:{offer:"39-42",expectedPremium:"60-62 (142.86%)"},lotSize:"3000",subscriptions:"633.71"},{name:"VVIP Infratech Limited",image:"./images/ipo/uttsav_cz_gold_logo.jpeg",exchange:"NSE",type:"mainline",href:"/angel-broking",date:{start:"Jul 23, 2024",end:"Jul 25, 2024",list:"Jul 27, 2024"},price:{offer:"91-93",expectedPremium:"115-122 (123.66%)"},lotSize:"1200",subscriptions:"236.92"},{name:"Chetana Education Limited",image:"./images/ipo/Cheviot-company-logo.jpg",exchange:"NSE",type:"mainline",href:"/angel-broking",date:{start:"Jul 23, 2024",end:"Jul 25, 2024",list:"Jul 27, 2024"},price:{offer:"80-85",expectedPremium:"40-43 (47.06%)"},lotSize:"1600",subscriptions:"196.57"},{name:"Manglam Infra and Engineering Limited",image:"./images/ipo/Manglam_Infra_Logo.png",exchange:"NSE",type:"sme",href:"/angel-broking",date:{start:"Jul 23, 2024",end:"Jul 25, 2024",list:"Jul 27, 2024"},price:{offer:"53-56",expectedPremium:"47-50 (83.93%)"},lotSize:"2000",subscriptions:"394.59"},{name:"Aprameya Engineering Limited",image:"./images/ipo/Aprameya_Engineering_logo.jpg",exchange:"NSE",type:"mainline",href:"/angel-broking",date:{start:"Jul 25, 2024",end:"Jul 29, 2024",list:"Jul 27, 2024"},price:{offer:"56-58",expectedPremium:"25-30 (43.1%)"},lotSize:"2000",subscriptions:"5.92"},{name:"Trom Industries Limited",image:"./images/ipo/Trom-Industries-logo.jpg",exchange:"NSE",type:"sme",href:"/angel-broking",date:{start:"Jul 25, 2024",end:"Jul 29, 2024",list:"Jul 27, 2024"},price:{offer:"110-115",expectedPremium:"135-145 (117.39%)"},lotSize:"1200",subscriptions:"34.84"},{name:"Clinitech Laboratory Limited",image:"./images/ipo/Clinitech_lab_logo.jpg",exchange:"BSE",type:"sme",href:"/angel-broking",date:{start:"Jul 25, 2024",end:"Jul 29, 2024",list:"Jul 27, 2024"},price:{offer:"96",expectedPremium:"135-145 (117.39%)"},lotSize:"1200",subscriptions:"6.09 times"}]}});var PE=$E.reducer;const OE=gn({name:"collections",initialState:{collections:[{name:"High Return",url:"high-return",image:"high-returns.svg"},{name:"SIP with 100",url:"sip-with-100",image:"sip-with-100.svg"},{name:"Tax Saving",url:"tax-saving",image:"tax-saving.svg"},{name:"Large Cap",url:"large-cap",image:"large-cap.svg"},{name:"Mid Cap",url:"mid-cap",image:"mid-cap.svg"},{name:"Small Cap",url:"small-cap",image:"small-cap.svg"}]}});var NE=OE.reducer,TE=kS({reducer:{site:jS,user:wE,category:SE,schemes:CE,offers:EE,ipos:PE,amcCollection:NE}});yg.render(u(Xe.StrictMode,{children:u(hb,{store:TE,children:b(H2,{children:[u(yE,{}),u(vE,{})]})})}),document.getElementById("root"));
