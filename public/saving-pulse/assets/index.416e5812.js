var PL=Object.defineProperty;var EL=(e,t,n)=>t in e?PL(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var le=(e,t,n)=>(EL(e,typeof t!="symbol"?t+"":t,n),n);function KC(e,t){return t.forEach(function(n){n&&typeof n!="string"&&!Array.isArray(n)&&Object.keys(n).forEach(function(r){if(r!=="default"&&!(r in e)){var i=Object.getOwnPropertyDescriptor(n,r);Object.defineProperty(e,r,i.get?i:{enumerable:!0,get:function(){return n[r]}})}})}),Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}const ML=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}};ML();var Kl=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function OL(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function Gi(e){if(e.__esModule)return e;var t=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(e).forEach(function(n){var r=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:function(){return e[n]}})}),t}var R={exports:{}},Qe={};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var bw=Object.getOwnPropertySymbols,RL=Object.prototype.hasOwnProperty,TL=Object.prototype.propertyIsEnumerable;function AL(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function NL(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de",Object.getOwnPropertyNames(e)[0]==="5")return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map(function(o){return t[o]});if(r.join("")!=="0123456789")return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(o){i[o]=o}),Object.keys(Object.assign({},i)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var XC=NL()?Object.assign:function(e,t){for(var n,r=AL(e),i,o=1;o<arguments.length;o++){n=Object(arguments[o]);for(var s in n)RL.call(n,s)&&(r[s]=n[s]);if(bw){i=bw(n);for(var l=0;l<i.length;l++)TL.call(n,i[l])&&(r[i[l]]=n[i[l]])}}return r};/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N1=XC,il=60103,GC=60106;Qe.Fragment=60107;Qe.StrictMode=60108;Qe.Profiler=60114;var qC=60109,ZC=60110,QC=60112;Qe.Suspense=60113;var JC=60115,e5=60116;if(typeof Symbol=="function"&&Symbol.for){var Ur=Symbol.for;il=Ur("react.element"),GC=Ur("react.portal"),Qe.Fragment=Ur("react.fragment"),Qe.StrictMode=Ur("react.strict_mode"),Qe.Profiler=Ur("react.profiler"),qC=Ur("react.provider"),ZC=Ur("react.context"),QC=Ur("react.forward_ref"),Qe.Suspense=Ur("react.suspense"),JC=Ur("react.memo"),e5=Ur("react.lazy")}var ww=typeof Symbol=="function"&&Symbol.iterator;function LL(e){return e===null||typeof e!="object"?null:(e=ww&&e[ww]||e["@@iterator"],typeof e=="function"?e:null)}function Ru(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var t5={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},n5={};function ol(e,t,n){this.props=e,this.context=t,this.refs=n5,this.updater=n||t5}ol.prototype.isReactComponent={};ol.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error(Ru(85));this.updater.enqueueSetState(this,e,t,"setState")};ol.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function r5(){}r5.prototype=ol.prototype;function L1(e,t,n){this.props=e,this.context=t,this.refs=n5,this.updater=n||t5}var $1=L1.prototype=new r5;$1.constructor=L1;N1($1,ol.prototype);$1.isPureReactComponent=!0;var I1={current:null},i5=Object.prototype.hasOwnProperty,o5={key:!0,ref:!0,__self:!0,__source:!0};function s5(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)i5.call(t,r)&&!o5.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var c=Array(l),d=0;d<l;d++)c[d]=arguments[d+2];i.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:il,type:e,key:o,ref:s,props:i,_owner:I1.current}}function $L(e,t){return{$$typeof:il,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function D1(e){return typeof e=="object"&&e!==null&&e.$$typeof===il}function IL(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var _w=/\/+/g;function Hm(e,t){return typeof e=="object"&&e!==null&&e.key!=null?IL(""+e.key):t.toString(36)}function Ff(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case il:case GC:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+Hm(s,0):r,Array.isArray(i)?(n="",e!=null&&(n=e.replace(_w,"$&/")+"/"),Ff(i,t,n,"",function(d){return d})):i!=null&&(D1(i)&&(i=$L(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(_w,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",Array.isArray(e))for(var l=0;l<e.length;l++){o=e[l];var c=r+Hm(o,l);s+=Ff(o,t,n,c,i)}else if(c=LL(e),typeof c=="function")for(e=c.call(e),l=0;!(o=e.next()).done;)o=o.value,c=r+Hm(o,l++),s+=Ff(o,t,n,c,i);else if(o==="object")throw t=""+e,Error(Ru(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t));return s}function Qd(e,t,n){if(e==null)return e;var r=[],i=0;return Ff(e,r,"","",function(o){return t.call(n,o,i++)}),r}function DL(e){if(e._status===-1){var t=e._result;t=t(),e._status=0,e._result=t,t.then(function(n){e._status===0&&(n=n.default,e._status=1,e._result=n)},function(n){e._status===0&&(e._status=2,e._result=n)})}if(e._status===1)return e._result;throw e._result}var a5={current:null};function qi(){var e=a5.current;if(e===null)throw Error(Ru(321));return e}var zL={ReactCurrentDispatcher:a5,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:I1,IsSomeRendererActing:{current:!1},assign:N1};Qe.Children={map:Qd,forEach:function(e,t,n){Qd(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Qd(e,function(){t++}),t},toArray:function(e){return Qd(e,function(t){return t})||[]},only:function(e){if(!D1(e))throw Error(Ru(143));return e}};Qe.Component=ol;Qe.PureComponent=L1;Qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zL;Qe.cloneElement=function(e,t,n){if(e==null)throw Error(Ru(267,e));var r=N1({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=I1.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)i5.call(t,c)&&!o5.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var d=0;d<c;d++)l[d]=arguments[d+2];r.children=l}return{$$typeof:il,type:e.type,key:i,ref:o,props:r,_owner:s}};Qe.createContext=function(e,t){return t===void 0&&(t=null),e={$$typeof:ZC,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider={$$typeof:qC,_context:e},e.Consumer=e};Qe.createElement=s5;Qe.createFactory=function(e){var t=s5.bind(null,e);return t.type=e,t};Qe.createRef=function(){return{current:null}};Qe.forwardRef=function(e){return{$$typeof:QC,render:e}};Qe.isValidElement=D1;Qe.lazy=function(e){return{$$typeof:e5,_payload:{_status:-1,_result:e},_init:DL}};Qe.memo=function(e,t){return{$$typeof:JC,type:e,compare:t===void 0?null:t}};Qe.useCallback=function(e,t){return qi().useCallback(e,t)};Qe.useContext=function(e,t){return qi().useContext(e,t)};Qe.useDebugValue=function(){};Qe.useEffect=function(e,t){return qi().useEffect(e,t)};Qe.useImperativeHandle=function(e,t,n){return qi().useImperativeHandle(e,t,n)};Qe.useLayoutEffect=function(e,t){return qi().useLayoutEffect(e,t)};Qe.useMemo=function(e,t){return qi().useMemo(e,t)};Qe.useReducer=function(e,t,n){return qi().useReducer(e,t,n)};Qe.useRef=function(e){return qi().useRef(e)};Qe.useState=function(e){return qi().useState(e)};Qe.version="17.0.2";R.exports=Qe;var jt=R.exports,Gc=KC({__proto__:null,default:jt},[R.exports]),up={exports:{}},Ir={},l5={exports:{}},c5={};/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){var t,n,r,i;if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,l=s.now();e.unstable_now=function(){return s.now()-l}}if(typeof window=="undefined"||typeof MessageChannel!="function"){var c=null,d=null,f=function(){if(c!==null)try{var Z=e.unstable_now();c(!0,Z),c=null}catch(U){throw setTimeout(f,0),U}};t=function(Z){c!==null?setTimeout(t,0,Z):(c=Z,setTimeout(f,0))},n=function(Z,U){d=setTimeout(Z,U)},r=function(){clearTimeout(d)},e.unstable_shouldYield=function(){return!1},i=e.unstable_forceFrameRate=function(){}}else{var g=window.setTimeout,m=window.clearTimeout;if(typeof console!="undefined"){var x=window.cancelAnimationFrame;typeof window.requestAnimationFrame!="function"&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"),typeof x!="function"&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")}var w=!1,_=null,v=-1,b=5,S=0;e.unstable_shouldYield=function(){return e.unstable_now()>=S},i=function(){},e.unstable_forceFrameRate=function(Z){0>Z||125<Z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<Z?Math.floor(1e3/Z):5};var C=new MessageChannel,E=C.port2;C.port1.onmessage=function(){if(_!==null){var Z=e.unstable_now();S=Z+b;try{_(!0,Z)?E.postMessage(null):(w=!1,_=null)}catch(U){throw E.postMessage(null),U}}else w=!1},t=function(Z){_=Z,w||(w=!0,E.postMessage(null))},n=function(Z,U){v=g(function(){Z(e.unstable_now())},U)},r=function(){m(v),v=-1}}function T(Z,U){var V=Z.length;Z.push(U);e:for(;;){var X=V-1>>>1,se=Z[X];if(se!==void 0&&0<z(se,U))Z[X]=U,Z[V]=se,V=X;else break e}}function N(Z){return Z=Z[0],Z===void 0?null:Z}function L(Z){var U=Z[0];if(U!==void 0){var V=Z.pop();if(V!==U){Z[0]=V;e:for(var X=0,se=Z.length;X<se;){var F=2*(X+1)-1,Ee=Z[F],J=F+1,Se=Z[J];if(Ee!==void 0&&0>z(Ee,V))Se!==void 0&&0>z(Se,Ee)?(Z[X]=Se,Z[J]=V,X=J):(Z[X]=Ee,Z[F]=V,X=F);else if(Se!==void 0&&0>z(Se,V))Z[X]=Se,Z[J]=V,X=J;else break e}}return U}return null}function z(Z,U){var V=Z.sortIndex-U.sortIndex;return V!==0?V:Z.id-U.id}var B=[],H=[],Q=1,te=null,ae=3,ye=!1,oe=!1,ge=!1;function re(Z){for(var U=N(H);U!==null;){if(U.callback===null)L(H);else if(U.startTime<=Z)L(H),U.sortIndex=U.expirationTime,T(B,U);else break;U=N(H)}}function de(Z){if(ge=!1,re(Z),!oe)if(N(B)!==null)oe=!0,t(Ue);else{var U=N(H);U!==null&&n(de,U.startTime-Z)}}function Ue(Z,U){oe=!1,ge&&(ge=!1,r()),ye=!0;var V=ae;try{for(re(U),te=N(B);te!==null&&(!(te.expirationTime>U)||Z&&!e.unstable_shouldYield());){var X=te.callback;if(typeof X=="function"){te.callback=null,ae=te.priorityLevel;var se=X(te.expirationTime<=U);U=e.unstable_now(),typeof se=="function"?te.callback=se:te===N(B)&&L(B),re(U)}else L(B);te=N(B)}if(te!==null)var F=!0;else{var Ee=N(H);Ee!==null&&n(de,Ee.startTime-U),F=!1}return F}finally{te=null,ae=V,ye=!1}}var ct=i;e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(Z){Z.callback=null},e.unstable_continueExecution=function(){oe||ye||(oe=!0,t(Ue))},e.unstable_getCurrentPriorityLevel=function(){return ae},e.unstable_getFirstCallbackNode=function(){return N(B)},e.unstable_next=function(Z){switch(ae){case 1:case 2:case 3:var U=3;break;default:U=ae}var V=ae;ae=U;try{return Z()}finally{ae=V}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=ct,e.unstable_runWithPriority=function(Z,U){switch(Z){case 1:case 2:case 3:case 4:case 5:break;default:Z=3}var V=ae;ae=Z;try{return U()}finally{ae=V}},e.unstable_scheduleCallback=function(Z,U,V){var X=e.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?X+V:X):V=X,Z){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=V+se,Z={id:Q++,callback:U,priorityLevel:Z,startTime:V,expirationTime:se,sortIndex:-1},V>X?(Z.sortIndex=V,T(H,Z),N(B)===null&&Z===N(H)&&(ge?r():ge=!0,n(de,V-X))):(Z.sortIndex=se,T(B,Z),oe||ye||(oe=!0,t(Ue))),Z},e.unstable_wrapCallback=function(Z){var U=ae;return function(){var V=ae;ae=U;try{return Z.apply(this,arguments)}finally{ae=V}}}})(c5);l5.exports=c5;/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dp=R.exports,Pt=XC,sn=l5.exports;function ie(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!dp)throw Error(ie(227));var u5=new Set,qc={};function Ds(e,t){Ka(e,t),Ka(e+"Capture",t)}function Ka(e,t){for(qc[e]=t,e=0;e<t.length;e++)u5.add(t[e])}var Ki=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),FL=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Sw=Object.prototype.hasOwnProperty,kw={},Cw={};function BL(e){return Sw.call(Cw,e)?!0:Sw.call(kw,e)?!1:FL.test(e)?Cw[e]=!0:(kw[e]=!0,!1)}function jL(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function WL(e,t,n,r){if(t===null||typeof t=="undefined"||jL(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Fn(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var gn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){gn[e]=new Fn(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];gn[t]=new Fn(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){gn[e]=new Fn(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){gn[e]=new Fn(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){gn[e]=new Fn(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){gn[e]=new Fn(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){gn[e]=new Fn(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){gn[e]=new Fn(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){gn[e]=new Fn(e,5,!1,e.toLowerCase(),null,!1,!1)});var z1=/[\-:]([a-z])/g;function F1(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(z1,F1);gn[t]=new Fn(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(z1,F1);gn[t]=new Fn(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(z1,F1);gn[t]=new Fn(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){gn[e]=new Fn(e,1,!1,e.toLowerCase(),null,!1,!1)});gn.xlinkHref=new Fn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){gn[e]=new Fn(e,1,!1,e.toLowerCase(),null,!0,!0)});function B1(e,t,n,r){var i=gn.hasOwnProperty(t)?gn[t]:null,o=i!==null?i.type===0:r?!1:!(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N");o||(WL(t,n,i,r)&&(n=null),r||i===null?BL(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var zs=dp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,gc=60103,ys=60106,uo=60107,j1=60108,Mc=60114,W1=60109,H1=60110,fp=60112,Oc=60113,ph=60120,hp=60115,V1=60116,U1=60121,Y1=60128,d5=60129,K1=60130,Y0=60131;if(typeof Symbol=="function"&&Symbol.for){var rn=Symbol.for;gc=rn("react.element"),ys=rn("react.portal"),uo=rn("react.fragment"),j1=rn("react.strict_mode"),Mc=rn("react.profiler"),W1=rn("react.provider"),H1=rn("react.context"),fp=rn("react.forward_ref"),Oc=rn("react.suspense"),ph=rn("react.suspense_list"),hp=rn("react.memo"),V1=rn("react.lazy"),U1=rn("react.block"),rn("react.scope"),Y1=rn("react.opaque.id"),d5=rn("react.debug_trace_mode"),K1=rn("react.offscreen"),Y0=rn("react.legacy_hidden")}var Pw=typeof Symbol=="function"&&Symbol.iterator;function Xl(e){return e===null||typeof e!="object"?null:(e=Pw&&e[Pw]||e["@@iterator"],typeof e=="function"?e:null)}var Vm;function mc(e){if(Vm===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Vm=t&&t[1]||""}return`
`+Vm+e}var Um=!1;function Jd(e,t){if(!e||Um)return"";Um=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,l=o.length-1;1<=s&&0<=l&&i[s]!==o[l];)l--;for(;1<=s&&0<=l;s--,l--)if(i[s]!==o[l]){if(s!==1||l!==1)do if(s--,l--,0>l||i[s]!==o[l])return`
`+i[s].replace(" at new "," at ");while(1<=s&&0<=l);break}}}finally{Um=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?mc(e):""}function HL(e){switch(e.tag){case 5:return mc(e.type);case 16:return mc("Lazy");case 13:return mc("Suspense");case 19:return mc("SuspenseList");case 0:case 2:case 15:return e=Jd(e.type,!1),e;case 11:return e=Jd(e.type.render,!1),e;case 22:return e=Jd(e.type._render,!1),e;case 1:return e=Jd(e.type,!0),e;default:return""}}function Oa(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case uo:return"Fragment";case ys:return"Portal";case Mc:return"Profiler";case j1:return"StrictMode";case Oc:return"Suspense";case ph:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case H1:return(e.displayName||"Context")+".Consumer";case W1:return(e._context.displayName||"Context")+".Provider";case fp:var t=e.render;return t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case hp:return Oa(e.type);case U1:return Oa(e._render);case V1:t=e._payload,e=e._init;try{return Oa(e(t))}catch{}}return null}function Do(e){switch(typeof e){case"boolean":case"number":case"object":case"string":case"undefined":return e;default:return""}}function f5(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function VL(e){var t=f5(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n!="undefined"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ef(e){e._valueTracker||(e._valueTracker=VL(e))}function h5(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=f5(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function gh(e){if(e=e||(typeof document!="undefined"?document:void 0),typeof e=="undefined")return null;try{return e.activeElement||e.body}catch{return e.body}}function K0(e,t){var n=t.checked;return Pt({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}function Ew(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Do(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function p5(e,t){t=t.checked,t!=null&&B1(e,"checked",t,!1)}function X0(e,t){p5(e,t);var n=Do(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?G0(e,t.type,n):t.hasOwnProperty("defaultValue")&&G0(e,t.type,Do(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Mw(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function G0(e,t,n){(t!=="number"||gh(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}function UL(e){var t="";return dp.Children.forEach(e,function(n){n!=null&&(t+=n)}),t}function q0(e,t){return e=Pt({children:void 0},t),(t=UL(t.children))&&(e.children=t),e}function Ra(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Do(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Z0(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(ie(91));return Pt({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ow(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(ie(92));if(Array.isArray(n)){if(!(1>=n.length))throw Error(ie(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Do(n)}}function g5(e,t){var n=Do(t.value),r=Do(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Rw(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}var Q0={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};function m5(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function J0(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?m5(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var tf,v5=function(e){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!==Q0.svg||"innerHTML"in e)e.innerHTML=t;else{for(tf=tf||document.createElement("div"),tf.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=tf.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Zc(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Rc={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},YL=["Webkit","ms","Moz","O"];Object.keys(Rc).forEach(function(e){YL.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Rc[t]=Rc[e]})});function y5(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Rc.hasOwnProperty(e)&&Rc[e]?(""+t).trim():t+"px"}function x5(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=y5(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var KL=Pt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ev(e,t){if(t){if(KL[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(ie(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(ie(60));if(!(typeof t.dangerouslySetInnerHTML=="object"&&"__html"in t.dangerouslySetInnerHTML))throw Error(ie(61))}if(t.style!=null&&typeof t.style!="object")throw Error(ie(62))}}function tv(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}function X1(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var nv=null,Ta=null,Aa=null;function Tw(e){if(e=Au(e)){if(typeof nv!="function")throw Error(ie(280));var t=e.stateNode;t&&(t=xp(t),nv(e.stateNode,e.type,t))}}function b5(e){Ta?Aa?Aa.push(e):Aa=[e]:Ta=e}function w5(){if(Ta){var e=Ta,t=Aa;if(Aa=Ta=null,Tw(e),t)for(e=0;e<t.length;e++)Tw(t[e])}}function G1(e,t){return e(t)}function _5(e,t,n,r,i){return e(t,n,r,i)}function q1(){}var S5=G1,xs=!1,Ym=!1;function Z1(){(Ta!==null||Aa!==null)&&(q1(),w5())}function XL(e,t,n){if(Ym)return e(t,n);Ym=!0;try{return S5(e,t,n)}finally{Ym=!1,Z1()}}function Qc(e,t){var n=e.stateNode;if(n===null)return null;var r=xp(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(ie(231,t,typeof n));return n}var rv=!1;if(Ki)try{var Gl={};Object.defineProperty(Gl,"passive",{get:function(){rv=!0}}),window.addEventListener("test",Gl,Gl),window.removeEventListener("test",Gl,Gl)}catch{rv=!1}function GL(e,t,n,r,i,o,s,l,c){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(f){this.onError(f)}}var Tc=!1,mh=null,vh=!1,iv=null,qL={onError:function(e){Tc=!0,mh=e}};function ZL(e,t,n,r,i,o,s,l,c){Tc=!1,mh=null,GL.apply(qL,arguments)}function QL(e,t,n,r,i,o,s,l,c){if(ZL.apply(this,arguments),Tc){if(Tc){var d=mh;Tc=!1,mh=null}else throw Error(ie(198));vh||(vh=!0,iv=d)}}function Fs(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&1026)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function k5(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Aw(e){if(Fs(e)!==e)throw Error(ie(188))}function JL(e){var t=e.alternate;if(!t){if(t=Fs(e),t===null)throw Error(ie(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Aw(i),e;if(o===r)return Aw(i),t;o=o.sibling}throw Error(ie(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,l=i.child;l;){if(l===n){s=!0,n=i,r=o;break}if(l===r){s=!0,r=i,n=o;break}l=l.sibling}if(!s){for(l=o.child;l;){if(l===n){s=!0,n=o,r=i;break}if(l===r){s=!0,r=o,n=i;break}l=l.sibling}if(!s)throw Error(ie(189))}}if(n.alternate!==r)throw Error(ie(190))}if(n.tag!==3)throw Error(ie(188));return n.stateNode.current===n?e:t}function C5(e){if(e=JL(e),!e)return null;for(var t=e;;){if(t.tag===5||t.tag===6)return t;if(t.child)t.child.return=t,t=t.child;else{if(t===e)break;for(;!t.sibling;){if(!t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}}return null}function Nw(e,t){for(var n=e.alternate;t!==null;){if(t===e||t===n)return!0;t=t.return}return!1}var P5,Q1,E5,M5,ov=!1,hi=[],So=null,ko=null,Co=null,Jc=new Map,eu=new Map,ql=[],Lw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function sv(e,t,n,r,i){return{blockedOn:e,domEventName:t,eventSystemFlags:n|16,nativeEvent:i,targetContainers:[r]}}function $w(e,t){switch(e){case"focusin":case"focusout":So=null;break;case"dragenter":case"dragleave":ko=null;break;case"mouseover":case"mouseout":Co=null;break;case"pointerover":case"pointerout":Jc.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":eu.delete(t.pointerId)}}function Zl(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e=sv(t,n,r,i,o),t!==null&&(t=Au(t),t!==null&&Q1(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function e$(e,t,n,r,i){switch(t){case"focusin":return So=Zl(So,e,t,n,r,i),!0;case"dragenter":return ko=Zl(ko,e,t,n,r,i),!0;case"mouseover":return Co=Zl(Co,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Jc.set(o,Zl(Jc.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,eu.set(o,Zl(eu.get(o)||null,e,t,n,r,i)),!0}return!1}function t$(e){var t=bs(e.target);if(t!==null){var n=Fs(t);if(n!==null){if(t=n.tag,t===13){if(t=k5(n),t!==null){e.blockedOn=t,M5(e.lanePriority,function(){sn.unstable_runWithPriority(e.priority,function(){E5(n)})});return}}else if(t===3&&n.stateNode.hydrate){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Bf(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ny(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n!==null)return t=Au(n),t!==null&&Q1(t),e.blockedOn=n,!1;t.shift()}return!0}function Iw(e,t,n){Bf(e)&&n.delete(t)}function n$(){for(ov=!1;0<hi.length;){var e=hi[0];if(e.blockedOn!==null){e=Au(e.blockedOn),e!==null&&P5(e);break}for(var t=e.targetContainers;0<t.length;){var n=ny(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n!==null){e.blockedOn=n;break}t.shift()}e.blockedOn===null&&hi.shift()}So!==null&&Bf(So)&&(So=null),ko!==null&&Bf(ko)&&(ko=null),Co!==null&&Bf(Co)&&(Co=null),Jc.forEach(Iw),eu.forEach(Iw)}function Ql(e,t){e.blockedOn===t&&(e.blockedOn=null,ov||(ov=!0,sn.unstable_scheduleCallback(sn.unstable_NormalPriority,n$)))}function O5(e){function t(i){return Ql(i,e)}if(0<hi.length){Ql(hi[0],e);for(var n=1;n<hi.length;n++){var r=hi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(So!==null&&Ql(So,e),ko!==null&&Ql(ko,e),Co!==null&&Ql(Co,e),Jc.forEach(t),eu.forEach(t),n=0;n<ql.length;n++)r=ql[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<ql.length&&(n=ql[0],n.blockedOn===null);)t$(n),n.blockedOn===null&&ql.shift()}function nf(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ba={animationend:nf("Animation","AnimationEnd"),animationiteration:nf("Animation","AnimationIteration"),animationstart:nf("Animation","AnimationStart"),transitionend:nf("Transition","TransitionEnd")},Km={},R5={};Ki&&(R5=document.createElement("div").style,"AnimationEvent"in window||(delete ba.animationend.animation,delete ba.animationiteration.animation,delete ba.animationstart.animation),"TransitionEvent"in window||delete ba.transitionend.transition);function pp(e){if(Km[e])return Km[e];if(!ba[e])return e;var t=ba[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in R5)return Km[e]=t[n];return e}var T5=pp("animationend"),A5=pp("animationiteration"),N5=pp("animationstart"),L5=pp("transitionend"),$5=new Map,J1=new Map,r$=["abort","abort",T5,"animationEnd",A5,"animationIteration",N5,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart","lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",L5,"transitionEnd","waiting","waiting"];function ey(e,t){for(var n=0;n<e.length;n+=2){var r=e[n],i=e[n+1];i="on"+(i[0].toUpperCase()+i.slice(1)),J1.set(r,t),$5.set(r,i),Ds(i,[r])}}var i$=sn.unstable_now;i$();var gt=8;function ya(e){if((1&e)!==0)return gt=15,1;if((2&e)!==0)return gt=14,2;if((4&e)!==0)return gt=13,4;var t=24&e;return t!==0?(gt=12,t):(e&32)!==0?(gt=11,32):(t=192&e,t!==0?(gt=10,t):(e&256)!==0?(gt=9,256):(t=3584&e,t!==0?(gt=8,t):(e&4096)!==0?(gt=7,4096):(t=4186112&e,t!==0?(gt=6,t):(t=62914560&e,t!==0?(gt=5,t):e&67108864?(gt=4,67108864):(e&134217728)!==0?(gt=3,134217728):(t=805306368&e,t!==0?(gt=2,t):(1073741824&e)!==0?(gt=1,1073741824):(gt=8,e))))))}function o$(e){switch(e){case 99:return 15;case 98:return 10;case 97:case 96:return 8;case 95:return 2;default:return 0}}function s$(e){switch(e){case 15:case 14:return 99;case 13:case 12:case 11:case 10:return 98;case 9:case 8:case 7:case 6:case 4:case 5:return 97;case 3:case 2:case 1:return 95;case 0:return 90;default:throw Error(ie(358,e))}}function tu(e,t){var n=e.pendingLanes;if(n===0)return gt=0;var r=0,i=0,o=e.expiredLanes,s=e.suspendedLanes,l=e.pingedLanes;if(o!==0)r=o,i=gt=15;else if(o=n&134217727,o!==0){var c=o&~s;c!==0?(r=ya(c),i=gt):(l&=o,l!==0&&(r=ya(l),i=gt))}else o=n&~s,o!==0?(r=ya(o),i=gt):l!==0&&(r=ya(l),i=gt);if(r===0)return 0;if(r=31-zo(r),r=n&((0>r?0:1<<r)<<1)-1,t!==0&&t!==r&&(t&s)===0){if(ya(t),i<=gt)return t;gt=i}if(t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-zo(t),i=1<<n,r|=e[n],t&=~i;return r}function I5(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function yh(e,t){switch(e){case 15:return 1;case 14:return 2;case 12:return e=xa(24&~t),e===0?yh(10,t):e;case 10:return e=xa(192&~t),e===0?yh(8,t):e;case 8:return e=xa(3584&~t),e===0&&(e=xa(4186112&~t),e===0&&(e=512)),e;case 2:return t=xa(805306368&~t),t===0&&(t=268435456),t}throw Error(ie(358,e))}function xa(e){return e&-e}function Xm(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function gp(e,t,n){e.pendingLanes|=t;var r=t-1;e.suspendedLanes&=r,e.pingedLanes&=r,e=e.eventTimes,t=31-zo(t),e[t]=n}var zo=Math.clz32?Math.clz32:c$,a$=Math.log,l$=Math.LN2;function c$(e){return e===0?32:31-(a$(e)/l$|0)|0}var u$=sn.unstable_UserBlockingPriority,d$=sn.unstable_runWithPriority,jf=!0;function f$(e,t,n,r){xs||q1();var i=ty,o=xs;xs=!0;try{_5(i,e,t,n,r)}finally{(xs=o)||Z1()}}function h$(e,t,n,r){d$(u$,ty.bind(null,e,t,n,r))}function ty(e,t,n,r){if(jf){var i;if((i=(t&4)===0)&&0<hi.length&&-1<Lw.indexOf(e))e=sv(null,e,t,n,r),hi.push(e);else{var o=ny(e,t,n,r);if(o===null)i&&$w(e,r);else{if(i){if(-1<Lw.indexOf(e)){e=sv(o,e,t,n,r),hi.push(e);return}if(e$(o,e,t,n,r))return;$w(e,r)}G5(e,t,r,null,n)}}}}function ny(e,t,n,r){var i=X1(r);if(i=bs(i),i!==null){var o=Fs(i);if(o===null)i=null;else{var s=o.tag;if(s===13){if(i=k5(o),i!==null)return i;i=null}else if(s===3){if(o.stateNode.hydrate)return o.tag===3?o.stateNode.containerInfo:null;i=null}else o!==i&&(i=null)}}return G5(e,t,r,i,n),null}var po=null,ry=null,Wf=null;function D5(){if(Wf)return Wf;var e,t=ry,n=t.length,r,i="value"in po?po.value:po.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return Wf=i.slice(e,1<r?1-r:void 0)}function Hf(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function rf(){return!0}function Dw(){return!1}function hr(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?rf:Dw,this.isPropagationStopped=Dw,this}return Pt(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=rf)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=rf)},persist:function(){},isPersistent:rf}),t}var sl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},iy=hr(sl),Tu=Pt({},sl,{view:0,detail:0}),p$=hr(Tu),Gm,qm,Jl,mp=Pt({},Tu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:oy,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Jl&&(Jl&&e.type==="mousemove"?(Gm=e.screenX-Jl.screenX,qm=e.screenY-Jl.screenY):qm=Gm=0,Jl=e),Gm)},movementY:function(e){return"movementY"in e?e.movementY:qm}}),zw=hr(mp),g$=Pt({},mp,{dataTransfer:0}),m$=hr(g$),v$=Pt({},Tu,{relatedTarget:0}),Zm=hr(v$),y$=Pt({},sl,{animationName:0,elapsedTime:0,pseudoElement:0}),x$=hr(y$),b$=Pt({},sl,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),w$=hr(b$),_$=Pt({},sl,{data:0}),Fw=hr(_$),S$={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},k$={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},C$={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function P$(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=C$[e])?!!t[e]:!1}function oy(){return P$}var E$=Pt({},Tu,{key:function(e){if(e.key){var t=S$[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Hf(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?k$[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:oy,charCode:function(e){return e.type==="keypress"?Hf(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Hf(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),M$=hr(E$),O$=Pt({},mp,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Bw=hr(O$),R$=Pt({},Tu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:oy}),T$=hr(R$),A$=Pt({},sl,{propertyName:0,elapsedTime:0,pseudoElement:0}),N$=hr(A$),L$=Pt({},mp,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),$$=hr(L$),I$=[9,13,27,32],sy=Ki&&"CompositionEvent"in window,Ac=null;Ki&&"documentMode"in document&&(Ac=document.documentMode);var D$=Ki&&"TextEvent"in window&&!Ac,z5=Ki&&(!sy||Ac&&8<Ac&&11>=Ac),jw=String.fromCharCode(32),Ww=!1;function F5(e,t){switch(e){case"keyup":return I$.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function B5(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var wa=!1;function z$(e,t){switch(e){case"compositionend":return B5(t);case"keypress":return t.which!==32?null:(Ww=!0,jw);case"textInput":return e=t.data,e===jw&&Ww?null:e;default:return null}}function F$(e,t){if(wa)return e==="compositionend"||!sy&&F5(e,t)?(e=D5(),Wf=ry=po=null,wa=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return z5&&t.locale!=="ko"?null:t.data;default:return null}}var B$={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hw(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!B$[e.type]:t==="textarea"}function j5(e,t,n,r){b5(r),t=xh(t,"onChange"),0<t.length&&(n=new iy("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Nc=null,nu=null;function j$(e){Y5(e,0)}function vp(e){var t=Sa(e);if(h5(t))return e}function W$(e,t){if(e==="change")return t}var W5=!1;if(Ki){var Qm;if(Ki){var Jm="oninput"in document;if(!Jm){var Vw=document.createElement("div");Vw.setAttribute("oninput","return;"),Jm=typeof Vw.oninput=="function"}Qm=Jm}else Qm=!1;W5=Qm&&(!document.documentMode||9<document.documentMode)}function Uw(){Nc&&(Nc.detachEvent("onpropertychange",H5),nu=Nc=null)}function H5(e){if(e.propertyName==="value"&&vp(nu)){var t=[];if(j5(t,nu,e,X1(e)),e=j$,xs)e(t);else{xs=!0;try{G1(e,t)}finally{xs=!1,Z1()}}}}function H$(e,t,n){e==="focusin"?(Uw(),Nc=t,nu=n,Nc.attachEvent("onpropertychange",H5)):e==="focusout"&&Uw()}function V$(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return vp(nu)}function U$(e,t){if(e==="click")return vp(t)}function Y$(e,t){if(e==="input"||e==="change")return vp(t)}function K$(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Mr=typeof Object.is=="function"?Object.is:K$,X$=Object.prototype.hasOwnProperty;function ru(e,t){if(Mr(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++)if(!X$.call(t,n[r])||!Mr(e[n[r]],t[n[r]]))return!1;return!0}function Yw(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Kw(e,t){var n=Yw(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Yw(n)}}function V5(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?V5(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Xw(){for(var e=window,t=gh();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=gh(e.document)}return t}function av(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var G$=Ki&&"documentMode"in document&&11>=document.documentMode,_a=null,lv=null,Lc=null,cv=!1;function Gw(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;cv||_a==null||_a!==gh(r)||(r=_a,"selectionStart"in r&&av(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Lc&&ru(Lc,r)||(Lc=r,r=xh(lv,"onSelect"),0<r.length&&(t=new iy("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=_a)))}ey("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),0);ey("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1);ey(r$,2);for(var qw="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),e0=0;e0<qw.length;e0++)J1.set(qw[e0],0);Ka("onMouseEnter",["mouseout","mouseover"]);Ka("onMouseLeave",["mouseout","mouseover"]);Ka("onPointerEnter",["pointerout","pointerover"]);Ka("onPointerLeave",["pointerout","pointerover"]);Ds("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ds("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ds("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ds("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ds("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ds("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vc="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),U5=new Set("cancel close invalid load scroll toggle".split(" ").concat(vc));function Zw(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,QL(r,t,void 0,e),e.currentTarget=null}function Y5(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var l=r[s],c=l.instance,d=l.currentTarget;if(l=l.listener,c!==o&&i.isPropagationStopped())break e;Zw(i,l,d),o=c}else for(s=0;s<r.length;s++){if(l=r[s],c=l.instance,d=l.currentTarget,l=l.listener,c!==o&&i.isPropagationStopped())break e;Zw(i,l,d),o=c}}}if(vh)throw e=iv,vh=!1,iv=null,e}function yt(e,t){var n=Z5(t),r=e+"__bubble";n.has(r)||(X5(t,e,2,!1),n.add(r))}var Qw="_reactListening"+Math.random().toString(36).slice(2);function K5(e){e[Qw]||(e[Qw]=!0,u5.forEach(function(t){U5.has(t)||Jw(t,!1,e,null),Jw(t,!0,e,null)}))}function Jw(e,t,n,r){var i=4<arguments.length&&arguments[4]!==void 0?arguments[4]:0,o=n;if(e==="selectionchange"&&n.nodeType!==9&&(o=n.ownerDocument),r!==null&&!t&&U5.has(e)){if(e!=="scroll")return;i|=2,o=r}var s=Z5(o),l=e+"__"+(t?"capture":"bubble");s.has(l)||(t&&(i|=4),X5(o,e,i,t),s.add(l))}function X5(e,t,n,r){var i=J1.get(t);switch(i===void 0?2:i){case 0:i=f$;break;case 1:i=h$;break;default:i=ty}n=i.bind(null,t,n,e),i=void 0,!rv||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function G5(e,t,n,r,i){var o=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var c=s.tag;if((c===3||c===4)&&(c=s.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;s=s.return}for(;l!==null;){if(s=bs(l),s===null)return;if(c=s.tag,c===5||c===6){r=o=s;continue e}l=l.parentNode}}r=r.return}XL(function(){var d=o,f=X1(n),g=[];e:{var m=$5.get(e);if(m!==void 0){var x=iy,w=e;switch(e){case"keypress":if(Hf(n)===0)break e;case"keydown":case"keyup":x=M$;break;case"focusin":w="focus",x=Zm;break;case"focusout":w="blur",x=Zm;break;case"beforeblur":case"afterblur":x=Zm;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=zw;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=m$;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=T$;break;case T5:case A5:case N5:x=x$;break;case L5:x=N$;break;case"scroll":x=p$;break;case"wheel":x=$$;break;case"copy":case"cut":case"paste":x=w$;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=Bw}var _=(t&4)!==0,v=!_&&e==="scroll",b=_?m!==null?m+"Capture":null:m;_=[];for(var S=d,C;S!==null;){C=S;var E=C.stateNode;if(C.tag===5&&E!==null&&(C=E,b!==null&&(E=Qc(S,b),E!=null&&_.push(iu(S,E,C)))),v)break;S=S.return}0<_.length&&(m=new x(m,w,null,n,f),g.push({event:m,listeners:_}))}}if((t&7)===0){e:{if(m=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",m&&(t&16)===0&&(w=n.relatedTarget||n.fromElement)&&(bs(w)||w[al]))break e;if((x||m)&&(m=f.window===f?f:(m=f.ownerDocument)?m.defaultView||m.parentWindow:window,x?(w=n.relatedTarget||n.toElement,x=d,w=w?bs(w):null,w!==null&&(v=Fs(w),w!==v||w.tag!==5&&w.tag!==6)&&(w=null)):(x=null,w=d),x!==w)){if(_=zw,E="onMouseLeave",b="onMouseEnter",S="mouse",(e==="pointerout"||e==="pointerover")&&(_=Bw,E="onPointerLeave",b="onPointerEnter",S="pointer"),v=x==null?m:Sa(x),C=w==null?m:Sa(w),m=new _(E,S+"leave",x,n,f),m.target=v,m.relatedTarget=C,E=null,bs(f)===d&&(_=new _(b,S+"enter",w,n,f),_.target=C,_.relatedTarget=v,E=_),v=E,x&&w)t:{for(_=x,b=w,S=0,C=_;C;C=la(C))S++;for(C=0,E=b;E;E=la(E))C++;for(;0<S-C;)_=la(_),S--;for(;0<C-S;)b=la(b),C--;for(;S--;){if(_===b||b!==null&&_===b.alternate)break t;_=la(_),b=la(b)}_=null}else _=null;x!==null&&e_(g,m,x,_,!1),w!==null&&v!==null&&e_(g,v,w,_,!0)}}e:{if(m=d?Sa(d):window,x=m.nodeName&&m.nodeName.toLowerCase(),x==="select"||x==="input"&&m.type==="file")var T=W$;else if(Hw(m))if(W5)T=Y$;else{T=V$;var N=H$}else(x=m.nodeName)&&x.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(T=U$);if(T&&(T=T(e,d))){j5(g,T,n,f);break e}N&&N(e,m,d),e==="focusout"&&(N=m._wrapperState)&&N.controlled&&m.type==="number"&&G0(m,"number",m.value)}switch(N=d?Sa(d):window,e){case"focusin":(Hw(N)||N.contentEditable==="true")&&(_a=N,lv=d,Lc=null);break;case"focusout":Lc=lv=_a=null;break;case"mousedown":cv=!0;break;case"contextmenu":case"mouseup":case"dragend":cv=!1,Gw(g,n,f);break;case"selectionchange":if(G$)break;case"keydown":case"keyup":Gw(g,n,f)}var L;if(sy)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else wa?F5(e,n)&&(z="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(z="onCompositionStart");z&&(z5&&n.locale!=="ko"&&(wa||z!=="onCompositionStart"?z==="onCompositionEnd"&&wa&&(L=D5()):(po=f,ry="value"in po?po.value:po.textContent,wa=!0)),N=xh(d,z),0<N.length&&(z=new Fw(z,e,null,n,f),g.push({event:z,listeners:N}),L?z.data=L:(L=B5(n),L!==null&&(z.data=L)))),(L=D$?z$(e,n):F$(e,n))&&(d=xh(d,"onBeforeInput"),0<d.length&&(f=new Fw("onBeforeInput","beforeinput",null,n,f),g.push({event:f,listeners:d}),f.data=L))}Y5(g,t)})}function iu(e,t,n){return{instance:e,listener:t,currentTarget:n}}function xh(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Qc(e,n),o!=null&&r.unshift(iu(e,o,i)),o=Qc(e,t),o!=null&&r.push(iu(e,o,i))),e=e.return}return r}function la(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function e_(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var l=n,c=l.alternate,d=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&d!==null&&(l=d,i?(c=Qc(n,o),c!=null&&s.unshift(iu(n,c,l))):i||(c=Qc(n,o),c!=null&&s.push(iu(n,c,l)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}function bh(){}var t0=null,n0=null;function q5(e,t){switch(e){case"button":case"input":case"select":case"textarea":return!!t.autoFocus}return!1}function uv(e,t){return e==="textarea"||e==="option"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var t_=typeof setTimeout=="function"?setTimeout:void 0,q$=typeof clearTimeout=="function"?clearTimeout:void 0;function ay(e){e.nodeType===1?e.textContent="":e.nodeType===9&&(e=e.body,e!=null&&(e.textContent=""))}function Na(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break}return e}function n_(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var r0=0;function Z$(e){return{$$typeof:Y1,toString:e,valueOf:e}}var yp=Math.random().toString(36).slice(2),go="__reactFiber$"+yp,wh="__reactProps$"+yp,al="__reactContainer$"+yp,r_="__reactEvents$"+yp;function bs(e){var t=e[go];if(t)return t;for(var n=e.parentNode;n;){if(t=n[al]||n[go]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=n_(e);e!==null;){if(n=e[go])return n;e=n_(e)}return t}e=n,n=e.parentNode}return null}function Au(e){return e=e[go]||e[al],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Sa(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(ie(33))}function xp(e){return e[wh]||null}function Z5(e){var t=e[r_];return t===void 0&&(t=e[r_]=new Set),t}var dv=[],ka=-1;function Ko(e){return{current:e}}function bt(e){0>ka||(e.current=dv[ka],dv[ka]=null,ka--)}function It(e,t){ka++,dv[ka]=e.current,e.current=t}var Fo={},On=Ko(Fo),qn=Ko(!1),Ms=Fo;function Xa(e,t){var n=e.type.contextTypes;if(!n)return Fo;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Zn(e){return e=e.childContextTypes,e!=null}function _h(){bt(qn),bt(On)}function i_(e,t,n){if(On.current!==Fo)throw Error(ie(168));It(On,t),It(qn,n)}function Q5(e,t,n){var r=e.stateNode;if(e=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(ie(108,Oa(t)||"Unknown",i));return Pt({},n,r)}function Vf(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Fo,Ms=On.current,It(On,e),It(qn,qn.current),!0}function o_(e,t,n){var r=e.stateNode;if(!r)throw Error(ie(169));n?(e=Q5(e,t,Ms),r.__reactInternalMemoizedMergedChildContext=e,bt(qn),bt(On),It(On,e)):bt(qn),It(qn,n)}var ly=null,Cs=null,Q$=sn.unstable_runWithPriority,cy=sn.unstable_scheduleCallback,fv=sn.unstable_cancelCallback,J$=sn.unstable_shouldYield,s_=sn.unstable_requestPaint,hv=sn.unstable_now,e6=sn.unstable_getCurrentPriorityLevel,bp=sn.unstable_ImmediatePriority,J5=sn.unstable_UserBlockingPriority,e4=sn.unstable_NormalPriority,t4=sn.unstable_LowPriority,n4=sn.unstable_IdlePriority,i0={},t6=s_!==void 0?s_:function(){},zi=null,Uf=null,o0=!1,a_=hv(),Pn=1e4>a_?hv:function(){return hv()-a_};function Ga(){switch(e6()){case bp:return 99;case J5:return 98;case e4:return 97;case t4:return 96;case n4:return 95;default:throw Error(ie(332))}}function r4(e){switch(e){case 99:return bp;case 98:return J5;case 97:return e4;case 96:return t4;case 95:return n4;default:throw Error(ie(332))}}function Os(e,t){return e=r4(e),Q$(e,t)}function ou(e,t,n){return e=r4(e),cy(e,t,n)}function _i(){if(Uf!==null){var e=Uf;Uf=null,fv(e)}i4()}function i4(){if(!o0&&zi!==null){o0=!0;var e=0;try{var t=zi;Os(99,function(){for(;e<t.length;e++){var n=t[e];do n=n(!0);while(n!==null)}}),zi=null}catch(n){throw zi!==null&&(zi=zi.slice(e+1)),cy(bp,_i),n}finally{o0=!1}}}var n6=zs.ReactCurrentBatchConfig;function Yr(e,t){if(e&&e.defaultProps){t=Pt({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Sh=Ko(null),kh=null,Ca=null,Ch=null;function uy(){Ch=Ca=kh=null}function dy(e){var t=Sh.current;bt(Sh),e.type._context._currentValue=t}function o4(e,t){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)===t){if(n===null||(n.childLanes&t)===t)break;n.childLanes|=t}else e.childLanes|=t,n!==null&&(n.childLanes|=t);e=e.return}}function La(e,t){kh=e,Ch=Ca=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Gr=!0),e.firstContext=null)}function Ar(e,t){if(Ch!==e&&t!==!1&&t!==0)if((typeof t!="number"||t===1073741823)&&(Ch=e,t=1073741823),t={context:e,observedBits:t,next:null},Ca===null){if(kh===null)throw Error(ie(308));Ca=t,kh.dependencies={lanes:0,firstContext:t,responders:null}}else Ca=Ca.next=t;return e._currentValue}var co=!1;function fy(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null},effects:null}}function s4(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Po(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Eo(e,t){if(e=e.updateQueue,e!==null){e=e.shared;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}}function l_(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function su(e,t,n,r){var i=e.updateQueue;co=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var c=l,d=c.next;c.next=null,s===null?o=d:s.next=d,s=c;var f=e.alternate;if(f!==null){f=f.updateQueue;var g=f.lastBaseUpdate;g!==s&&(g===null?f.firstBaseUpdate=d:g.next=d,f.lastBaseUpdate=c)}}if(o!==null){g=i.baseState,s=0,f=d=c=null;do{l=o.lane;var m=o.eventTime;if((r&l)===l){f!==null&&(f=f.next={eventTime:m,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var x=e,w=o;switch(l=t,m=n,w.tag){case 1:if(x=w.payload,typeof x=="function"){g=x.call(m,g,l);break e}g=x;break e;case 3:x.flags=x.flags&-4097|64;case 0:if(x=w.payload,l=typeof x=="function"?x.call(m,g,l):x,l==null)break e;g=Pt({},g,l);break e;case 2:co=!0}}o.callback!==null&&(e.flags|=32,l=i.effects,l===null?i.effects=[o]:l.push(o))}else m={eventTime:m,lane:l,tag:o.tag,payload:o.payload,callback:o.callback,next:null},f===null?(d=f=m,c=g):f=f.next=m,s|=l;if(o=o.next,o===null){if(l=i.shared.pending,l===null)break;o=l.next,l.next=null,i.lastBaseUpdate=l,i.shared.pending=null}}while(1);f===null&&(c=g),i.baseState=c,i.firstBaseUpdate=d,i.lastBaseUpdate=f,Lu|=s,e.lanes=s,e.memoizedState=g}}function c_(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(ie(191,i));i.call(r)}}}var a4=new dp.Component().refs;function Ph(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Pt({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var wp={isMounted:function(e){return(e=e._reactInternals)?Fs(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ur(),i=Mo(e),o=Po(r,i);o.payload=t,n!=null&&(o.callback=n),Eo(e,o),Oo(e,i,r)},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ur(),i=Mo(e),o=Po(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),Eo(e,o),Oo(e,i,r)},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ur(),r=Mo(e),i=Po(n,r);i.tag=2,t!=null&&(i.callback=t),Eo(e,i),Oo(e,r,n)}};function u_(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!ru(n,r)||!ru(i,o):!0}function l4(e,t,n){var r=!1,i=Fo,o=t.contextType;return typeof o=="object"&&o!==null?o=Ar(o):(i=Zn(t)?Ms:On.current,r=t.contextTypes,o=(r=r!=null)?Xa(e,i):Fo),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=wp,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function d_(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&wp.enqueueReplaceState(t,t.state,null)}function pv(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=a4,fy(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Ar(o):(o=Zn(t)?Ms:On.current,i.context=Xa(e,o)),su(e,n,i,r),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Ph(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&wp.enqueueReplaceState(i,i.state,null),su(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4)}var of=Array.isArray;function ec(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ie(309));var r=n.stateNode}if(!r)throw Error(ie(147,e));var i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var s=r.refs;s===a4&&(s=r.refs={}),o===null?delete s[i]:s[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(ie(284));if(!n._owner)throw Error(ie(290,e))}return e}function sf(e,t){if(e.type!=="textarea")throw Error(ie(31,Object.prototype.toString.call(t)==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":t))}function c4(e){function t(v,b){if(e){var S=v.lastEffect;S!==null?(S.nextEffect=b,v.lastEffect=b):v.firstEffect=v.lastEffect=b,b.nextEffect=null,b.flags=8}}function n(v,b){if(!e)return null;for(;b!==null;)t(v,b),b=b.sibling;return null}function r(v,b){for(v=new Map;b!==null;)b.key!==null?v.set(b.key,b):v.set(b.index,b),b=b.sibling;return v}function i(v,b){return v=jo(v,b),v.index=0,v.sibling=null,v}function o(v,b,S){return v.index=S,e?(S=v.alternate,S!==null?(S=S.index,S<b?(v.flags=2,b):S):(v.flags=2,b)):b}function s(v){return e&&v.alternate===null&&(v.flags=2),v}function l(v,b,S,C){return b===null||b.tag!==6?(b=u0(S,v.mode,C),b.return=v,b):(b=i(b,S),b.return=v,b)}function c(v,b,S,C){return b!==null&&b.elementType===S.type?(C=i(b,S.props),C.ref=ec(v,b,S),C.return=v,C):(C=Gf(S.type,S.key,S.props,null,v.mode,C),C.ref=ec(v,b,S),C.return=v,C)}function d(v,b,S,C){return b===null||b.tag!==4||b.stateNode.containerInfo!==S.containerInfo||b.stateNode.implementation!==S.implementation?(b=d0(S,v.mode,C),b.return=v,b):(b=i(b,S.children||[]),b.return=v,b)}function f(v,b,S,C,E){return b===null||b.tag!==7?(b=za(S,v.mode,C,E),b.return=v,b):(b=i(b,S),b.return=v,b)}function g(v,b,S){if(typeof b=="string"||typeof b=="number")return b=u0(""+b,v.mode,S),b.return=v,b;if(typeof b=="object"&&b!==null){switch(b.$$typeof){case gc:return S=Gf(b.type,b.key,b.props,null,v.mode,S),S.ref=ec(v,null,b),S.return=v,S;case ys:return b=d0(b,v.mode,S),b.return=v,b}if(of(b)||Xl(b))return b=za(b,v.mode,S,null),b.return=v,b;sf(v,b)}return null}function m(v,b,S,C){var E=b!==null?b.key:null;if(typeof S=="string"||typeof S=="number")return E!==null?null:l(v,b,""+S,C);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case gc:return S.key===E?S.type===uo?f(v,b,S.props.children,C,E):c(v,b,S,C):null;case ys:return S.key===E?d(v,b,S,C):null}if(of(S)||Xl(S))return E!==null?null:f(v,b,S,C,null);sf(v,S)}return null}function x(v,b,S,C,E){if(typeof C=="string"||typeof C=="number")return v=v.get(S)||null,l(b,v,""+C,E);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case gc:return v=v.get(C.key===null?S:C.key)||null,C.type===uo?f(b,v,C.props.children,E,C.key):c(b,v,C,E);case ys:return v=v.get(C.key===null?S:C.key)||null,d(b,v,C,E)}if(of(C)||Xl(C))return v=v.get(S)||null,f(b,v,C,E,null);sf(b,C)}return null}function w(v,b,S,C){for(var E=null,T=null,N=b,L=b=0,z=null;N!==null&&L<S.length;L++){N.index>L?(z=N,N=null):z=N.sibling;var B=m(v,N,S[L],C);if(B===null){N===null&&(N=z);break}e&&N&&B.alternate===null&&t(v,N),b=o(B,b,L),T===null?E=B:T.sibling=B,T=B,N=z}if(L===S.length)return n(v,N),E;if(N===null){for(;L<S.length;L++)N=g(v,S[L],C),N!==null&&(b=o(N,b,L),T===null?E=N:T.sibling=N,T=N);return E}for(N=r(v,N);L<S.length;L++)z=x(N,v,L,S[L],C),z!==null&&(e&&z.alternate!==null&&N.delete(z.key===null?L:z.key),b=o(z,b,L),T===null?E=z:T.sibling=z,T=z);return e&&N.forEach(function(H){return t(v,H)}),E}function _(v,b,S,C){var E=Xl(S);if(typeof E!="function")throw Error(ie(150));if(S=E.call(S),S==null)throw Error(ie(151));for(var T=E=null,N=b,L=b=0,z=null,B=S.next();N!==null&&!B.done;L++,B=S.next()){N.index>L?(z=N,N=null):z=N.sibling;var H=m(v,N,B.value,C);if(H===null){N===null&&(N=z);break}e&&N&&H.alternate===null&&t(v,N),b=o(H,b,L),T===null?E=H:T.sibling=H,T=H,N=z}if(B.done)return n(v,N),E;if(N===null){for(;!B.done;L++,B=S.next())B=g(v,B.value,C),B!==null&&(b=o(B,b,L),T===null?E=B:T.sibling=B,T=B);return E}for(N=r(v,N);!B.done;L++,B=S.next())B=x(N,v,L,B.value,C),B!==null&&(e&&B.alternate!==null&&N.delete(B.key===null?L:B.key),b=o(B,b,L),T===null?E=B:T.sibling=B,T=B);return e&&N.forEach(function(Q){return t(v,Q)}),E}return function(v,b,S,C){var E=typeof S=="object"&&S!==null&&S.type===uo&&S.key===null;E&&(S=S.props.children);var T=typeof S=="object"&&S!==null;if(T)switch(S.$$typeof){case gc:e:{for(T=S.key,E=b;E!==null;){if(E.key===T){switch(E.tag){case 7:if(S.type===uo){n(v,E.sibling),b=i(E,S.props.children),b.return=v,v=b;break e}break;default:if(E.elementType===S.type){n(v,E.sibling),b=i(E,S.props),b.ref=ec(v,E,S),b.return=v,v=b;break e}}n(v,E);break}else t(v,E);E=E.sibling}S.type===uo?(b=za(S.props.children,v.mode,C,S.key),b.return=v,v=b):(C=Gf(S.type,S.key,S.props,null,v.mode,C),C.ref=ec(v,b,S),C.return=v,v=C)}return s(v);case ys:e:{for(E=S.key;b!==null;){if(b.key===E)if(b.tag===4&&b.stateNode.containerInfo===S.containerInfo&&b.stateNode.implementation===S.implementation){n(v,b.sibling),b=i(b,S.children||[]),b.return=v,v=b;break e}else{n(v,b);break}else t(v,b);b=b.sibling}b=d0(S,v.mode,C),b.return=v,v=b}return s(v)}if(typeof S=="string"||typeof S=="number")return S=""+S,b!==null&&b.tag===6?(n(v,b.sibling),b=i(b,S),b.return=v,v=b):(n(v,b),b=u0(S,v.mode,C),b.return=v,v=b),s(v);if(of(S))return w(v,b,S,C);if(Xl(S))return _(v,b,S,C);if(T&&sf(v,S),typeof S=="undefined"&&!E)switch(v.tag){case 1:case 22:case 0:case 11:case 15:throw Error(ie(152,Oa(v.type)||"Component"))}return n(v,b)}}var Eh=c4(!0),u4=c4(!1),Nu={},mi=Ko(Nu),au=Ko(Nu),lu=Ko(Nu);function ws(e){if(e===Nu)throw Error(ie(174));return e}function gv(e,t){switch(It(lu,t),It(au,e),It(mi,Nu),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:J0(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=J0(t,e)}bt(mi),It(mi,t)}function qa(){bt(mi),bt(au),bt(lu)}function f_(e){ws(lu.current);var t=ws(mi.current),n=J0(t,e.type);t!==n&&(It(au,e),It(mi,n))}function hy(e){au.current===e&&(bt(mi),bt(au))}var Lt=Ko(0);function Mh(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&64)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ji=null,mo=null,vi=!1;function d4(e,t){var n=Or(5,null,null,0);n.elementType="DELETED",n.type="DELETED",n.stateNode=t,n.return=e,n.flags=8,e.lastEffect!==null?(e.lastEffect.nextEffect=n,e.lastEffect=n):e.firstEffect=e.lastEffect=n}function h_(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,!0):!1;case 13:return!1;default:return!1}}function mv(e){if(vi){var t=mo;if(t){var n=t;if(!h_(e,t)){if(t=Na(n.nextSibling),!t||!h_(e,t)){e.flags=e.flags&-1025|2,vi=!1,ji=e;return}d4(ji,n)}ji=e,mo=Na(t.firstChild)}else e.flags=e.flags&-1025|2,vi=!1,ji=e}}function p_(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ji=e}function af(e){if(e!==ji)return!1;if(!vi)return p_(e),vi=!0,!1;var t=e.type;if(e.tag!==5||t!=="head"&&t!=="body"&&!uv(t,e.memoizedProps))for(t=mo;t;)d4(e,t),t=Na(t.nextSibling);if(p_(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(ie(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){mo=Na(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}mo=null}}else mo=ji?Na(e.stateNode.nextSibling):null;return!0}function s0(){mo=ji=null,vi=!1}var $a=[];function py(){for(var e=0;e<$a.length;e++)$a[e]._workInProgressVersionPrimary=null;$a.length=0}var $c=zs.ReactCurrentDispatcher,Tr=zs.ReactCurrentBatchConfig,cu=0,Ht=null,Sn=null,fn=null,Oh=!1,Ic=!1;function Un(){throw Error(ie(321))}function gy(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Mr(e[n],t[n]))return!1;return!0}function my(e,t,n,r,i,o){if(cu=o,Ht=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,$c.current=e===null||e.memoizedState===null?i6:o6,e=n(r,i),Ic){o=0;do{if(Ic=!1,!(25>o))throw Error(ie(301));o+=1,fn=Sn=null,t.updateQueue=null,$c.current=s6,e=n(r,i)}while(Ic)}if($c.current=Nh,t=Sn!==null&&Sn.next!==null,cu=0,fn=Sn=Ht=null,Oh=!1,t)throw Error(ie(300));return e}function _s(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fn===null?Ht.memoizedState=fn=e:fn=fn.next=e,fn}function Bs(){if(Sn===null){var e=Ht.alternate;e=e!==null?e.memoizedState:null}else e=Sn.next;var t=fn===null?Ht.memoizedState:fn.next;if(t!==null)fn=t,Sn=e;else{if(e===null)throw Error(ie(310));Sn=e,e={memoizedState:Sn.memoizedState,baseState:Sn.baseState,baseQueue:Sn.baseQueue,queue:Sn.queue,next:null},fn===null?Ht.memoizedState=fn=e:fn=fn.next=e}return fn}function pi(e,t){return typeof t=="function"?t(e):t}function tc(e){var t=Bs(),n=t.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=e;var r=Sn,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){i=i.next,r=r.baseState;var l=s=o=null,c=i;do{var d=c.lane;if((cu&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,eagerReducer:c.eagerReducer,eagerState:c.eagerState,next:null}),r=c.eagerReducer===e?c.eagerState:e(r,c.action);else{var f={lane:d,action:c.action,eagerReducer:c.eagerReducer,eagerState:c.eagerState,next:null};l===null?(s=l=f,o=r):l=l.next=f,Ht.lanes|=d,Lu|=d}c=c.next}while(c!==null&&c!==i);l===null?o=r:l.next=s,Mr(r,t.memoizedState)||(Gr=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=l,n.lastRenderedState=r}return[t.memoizedState,n.dispatch]}function nc(e){var t=Bs(),n=t.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);Mr(o,t.memoizedState)||(Gr=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function g_(e,t,n){var r=t._getVersion;r=r(t._source);var i=t._workInProgressVersionPrimary;if(i!==null?e=i===r:(e=e.mutableReadLanes,(e=(cu&e)===e)&&(t._workInProgressVersionPrimary=r,$a.push(t))),e)return n(t._source);throw $a.push(t),Error(ie(350))}function f4(e,t,n,r){var i=zn;if(i===null)throw Error(ie(349));var o=t._getVersion,s=o(t._source),l=$c.current,c=l.useState(function(){return g_(i,t,n)}),d=c[1],f=c[0];c=fn;var g=e.memoizedState,m=g.refs,x=m.getSnapshot,w=g.source;g=g.subscribe;var _=Ht;return e.memoizedState={refs:m,source:t,subscribe:r},l.useEffect(function(){m.getSnapshot=n,m.setSnapshot=d;var v=o(t._source);if(!Mr(s,v)){v=n(t._source),Mr(f,v)||(d(v),v=Mo(_),i.mutableReadLanes|=v&i.pendingLanes),v=i.mutableReadLanes,i.entangledLanes|=v;for(var b=i.entanglements,S=v;0<S;){var C=31-zo(S),E=1<<C;b[C]|=v,S&=~E}}},[n,t,r]),l.useEffect(function(){return r(t._source,function(){var v=m.getSnapshot,b=m.setSnapshot;try{b(v(t._source));var S=Mo(_);i.mutableReadLanes|=S&i.pendingLanes}catch(C){b(function(){throw C})}})},[t,r]),Mr(x,n)&&Mr(w,t)&&Mr(g,r)||(e={pending:null,dispatch:null,lastRenderedReducer:pi,lastRenderedState:f},e.dispatch=d=xy.bind(null,Ht,e),c.queue=e,c.baseQueue=null,f=g_(i,t,n),c.memoizedState=c.baseState=f),f}function h4(e,t,n){var r=Bs();return f4(r,e,t,n)}function rc(e){var t=_s();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e=t.queue={pending:null,dispatch:null,lastRenderedReducer:pi,lastRenderedState:e},e=e.dispatch=xy.bind(null,Ht,e),[t.memoizedState,e]}function Rh(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ht.updateQueue,t===null?(t={lastEffect:null},Ht.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function m_(e){var t=_s();return e={current:e},t.memoizedState=e}function Th(){return Bs().memoizedState}function vv(e,t,n,r){var i=_s();Ht.flags|=e,i.memoizedState=Rh(1|t,n,void 0,r===void 0?null:r)}function vy(e,t,n,r){var i=Bs();r=r===void 0?null:r;var o=void 0;if(Sn!==null){var s=Sn.memoizedState;if(o=s.destroy,r!==null&&gy(r,s.deps)){Rh(t,n,o,r);return}}Ht.flags|=e,i.memoizedState=Rh(1|t,n,o,r)}function v_(e,t){return vv(516,4,e,t)}function Ah(e,t){return vy(516,4,e,t)}function p4(e,t){return vy(4,2,e,t)}function g4(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function m4(e,t,n){return n=n!=null?n.concat([e]):null,vy(4,2,g4.bind(null,t,e),n)}function yy(){}function v4(e,t){var n=Bs();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&gy(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function y4(e,t){var n=Bs();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&gy(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function r6(e,t){var n=Ga();Os(98>n?98:n,function(){e(!0)}),Os(97<n?97:n,function(){var r=Tr.transition;Tr.transition=1;try{e(!1),t()}finally{Tr.transition=r}})}function xy(e,t,n){var r=ur(),i=Mo(e),o={lane:i,action:n,eagerReducer:null,eagerState:null,next:null},s=t.pending;if(s===null?o.next=o:(o.next=s.next,s.next=o),t.pending=o,s=e.alternate,e===Ht||s!==null&&s===Ht)Ic=Oh=!0;else{if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var l=t.lastRenderedState,c=s(l,n);if(o.eagerReducer=s,o.eagerState=c,Mr(c,l))return}catch{}finally{}Oo(e,i,r)}}var Nh={readContext:Ar,useCallback:Un,useContext:Un,useEffect:Un,useImperativeHandle:Un,useLayoutEffect:Un,useMemo:Un,useReducer:Un,useRef:Un,useState:Un,useDebugValue:Un,useDeferredValue:Un,useTransition:Un,useMutableSource:Un,useOpaqueIdentifier:Un,unstable_isNewReconciler:!1},i6={readContext:Ar,useCallback:function(e,t){return _s().memoizedState=[e,t===void 0?null:t],e},useContext:Ar,useEffect:v_,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,vv(4,2,g4.bind(null,t,e),n)},useLayoutEffect:function(e,t){return vv(4,2,e,t)},useMemo:function(e,t){var n=_s();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=_s();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e=r.queue={pending:null,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},e=e.dispatch=xy.bind(null,Ht,e),[r.memoizedState,e]},useRef:m_,useState:rc,useDebugValue:yy,useDeferredValue:function(e){var t=rc(e),n=t[0],r=t[1];return v_(function(){var i=Tr.transition;Tr.transition=1;try{r(e)}finally{Tr.transition=i}},[e]),n},useTransition:function(){var e=rc(!1),t=e[0];return e=r6.bind(null,e[1]),m_(e),[e,t]},useMutableSource:function(e,t,n){var r=_s();return r.memoizedState={refs:{getSnapshot:t,setSnapshot:null},source:e,subscribe:n},f4(r,e,t,n)},useOpaqueIdentifier:function(){if(vi){var e=!1,t=Z$(function(){throw e||(e=!0,n("r:"+(r0++).toString(36))),Error(ie(355))}),n=rc(t)[1];return(Ht.mode&2)===0&&(Ht.flags|=516,Rh(5,function(){n("r:"+(r0++).toString(36))},void 0,null)),t}return t="r:"+(r0++).toString(36),rc(t),t},unstable_isNewReconciler:!1},o6={readContext:Ar,useCallback:v4,useContext:Ar,useEffect:Ah,useImperativeHandle:m4,useLayoutEffect:p4,useMemo:y4,useReducer:tc,useRef:Th,useState:function(){return tc(pi)},useDebugValue:yy,useDeferredValue:function(e){var t=tc(pi),n=t[0],r=t[1];return Ah(function(){var i=Tr.transition;Tr.transition=1;try{r(e)}finally{Tr.transition=i}},[e]),n},useTransition:function(){var e=tc(pi)[0];return[Th().current,e]},useMutableSource:h4,useOpaqueIdentifier:function(){return tc(pi)[0]},unstable_isNewReconciler:!1},s6={readContext:Ar,useCallback:v4,useContext:Ar,useEffect:Ah,useImperativeHandle:m4,useLayoutEffect:p4,useMemo:y4,useReducer:nc,useRef:Th,useState:function(){return nc(pi)},useDebugValue:yy,useDeferredValue:function(e){var t=nc(pi),n=t[0],r=t[1];return Ah(function(){var i=Tr.transition;Tr.transition=1;try{r(e)}finally{Tr.transition=i}},[e]),n},useTransition:function(){var e=nc(pi)[0];return[Th().current,e]},useMutableSource:h4,useOpaqueIdentifier:function(){return nc(pi)[0]},unstable_isNewReconciler:!1},a6=zs.ReactCurrentOwner,Gr=!1;function Kn(e,t,n,r){t.child=e===null?u4(t,null,n,r):Eh(t,e.child,n,r)}function y_(e,t,n,r,i){n=n.render;var o=t.ref;return La(t,i),r=my(e,t,n,r,o,i),e!==null&&!Gr?(t.updateQueue=e.updateQueue,t.flags&=-517,e.lanes&=~i,Wi(e,t,i)):(t.flags|=1,Kn(e,t,r,i),t.child)}function x_(e,t,n,r,i,o){if(e===null){var s=n.type;return typeof s=="function"&&!Cy(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,x4(e,t,s,r,i,o)):(e=Gf(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}return s=e.child,(i&o)===0&&(i=s.memoizedProps,n=n.compare,n=n!==null?n:ru,n(i,r)&&e.ref===t.ref)?Wi(e,t,o):(t.flags|=1,e=jo(s,r),e.ref=t.ref,e.return=t,t.child=e)}function x4(e,t,n,r,i,o){if(e!==null&&ru(e.memoizedProps,r)&&e.ref===t.ref)if(Gr=!1,(o&i)!==0)(e.flags&16384)!==0&&(Gr=!0);else return t.lanes=e.lanes,Wi(e,t,o);return yv(e,t,n,r,o)}function a0(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden"||r.mode==="unstable-defer-without-hiding")if((t.mode&4)===0)t.memoizedState={baseLanes:0},cf(t,n);else if((n&1073741824)!==0)t.memoizedState={baseLanes:0},cf(t,o!==null?o.baseLanes:n);else return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e},cf(t,e),null;else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,cf(t,r);return Kn(e,t,i,n),t.child}function b4(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=128)}function yv(e,t,n,r,i){var o=Zn(n)?Ms:On.current;return o=Xa(t,o),La(t,i),n=my(e,t,n,r,o,i),e!==null&&!Gr?(t.updateQueue=e.updateQueue,t.flags&=-517,e.lanes&=~i,Wi(e,t,i)):(t.flags|=1,Kn(e,t,n,i),t.child)}function b_(e,t,n,r,i){if(Zn(n)){var o=!0;Vf(t)}else o=!1;if(La(t,i),t.stateNode===null)e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2),l4(t,n,r),pv(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,l=t.memoizedProps;s.props=l;var c=s.context,d=n.contextType;typeof d=="object"&&d!==null?d=Ar(d):(d=Zn(n)?Ms:On.current,d=Xa(t,d));var f=n.getDerivedStateFromProps,g=typeof f=="function"||typeof s.getSnapshotBeforeUpdate=="function";g||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==r||c!==d)&&d_(t,s,r,d),co=!1;var m=t.memoizedState;s.state=m,su(t,r,s,i),c=t.memoizedState,l!==r||m!==c||qn.current||co?(typeof f=="function"&&(Ph(t,n,f,r),c=t.memoizedState),(l=co||u_(t,n,l,r,m,c,d))?(g||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4)):(typeof s.componentDidMount=="function"&&(t.flags|=4),t.memoizedProps=r,t.memoizedState=c),s.props=r,s.state=c,s.context=d,r=l):(typeof s.componentDidMount=="function"&&(t.flags|=4),r=!1)}else{s=t.stateNode,s4(e,t),l=t.memoizedProps,d=t.type===t.elementType?l:Yr(t.type,l),s.props=d,g=t.pendingProps,m=s.context,c=n.contextType,typeof c=="object"&&c!==null?c=Ar(c):(c=Zn(n)?Ms:On.current,c=Xa(t,c));var x=n.getDerivedStateFromProps;(f=typeof x=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==g||m!==c)&&d_(t,s,r,c),co=!1,m=t.memoizedState,s.state=m,su(t,r,s,i);var w=t.memoizedState;l!==g||m!==w||qn.current||co?(typeof x=="function"&&(Ph(t,n,x,r),w=t.memoizedState),(d=co||u_(t,n,d,r,m,w,c))?(f||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,w,c),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,w,c)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=256)):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=256),t.memoizedProps=r,t.memoizedState=w),s.props=r,s.state=w,s.context=c,r=d):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=256),r=!1)}return xv(e,t,n,r,o,i)}function xv(e,t,n,r,i,o){b4(e,t);var s=(t.flags&64)!==0;if(!r&&!s)return i&&o_(t,n,!1),Wi(e,t,o);r=t.stateNode,a6.current=t;var l=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Eh(t,e.child,null,o),t.child=Eh(t,null,l,o)):Kn(e,t,l,o),t.memoizedState=r.state,i&&o_(t,n,!0),t.child}function w_(e){var t=e.stateNode;t.pendingContext?i_(e,t.pendingContext,t.pendingContext!==t.context):t.context&&i_(e,t.context,!1),gv(e,t.containerInfo)}var lf={dehydrated:null,retryLane:0};function __(e,t,n){var r=t.pendingProps,i=Lt.current,o=!1,s;return(s=(t.flags&64)!==0)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,t.flags&=-65):e!==null&&e.memoizedState===null||r.fallback===void 0||r.unstable_avoidThisFallback===!0||(i|=1),It(Lt,i&1),e===null?(r.fallback!==void 0&&mv(t),e=r.children,i=r.fallback,o?(e=S_(t,e,i,n),t.child.memoizedState={baseLanes:n},t.memoizedState=lf,e):typeof r.unstable_expectedLoadTime=="number"?(e=S_(t,e,i,n),t.child.memoizedState={baseLanes:n},t.memoizedState=lf,t.lanes=33554432,e):(n=Py({mode:"visible",children:e},t.mode,n,null),n.return=t,t.child=n)):e.memoizedState!==null?o?(r=C_(e,t,r.children,r.fallback,n),o=t.child,i=e.child.memoizedState,o.memoizedState=i===null?{baseLanes:n}:{baseLanes:i.baseLanes|n},o.childLanes=e.childLanes&~n,t.memoizedState=lf,r):(n=k_(e,t,r.children,n),t.memoizedState=null,n):o?(r=C_(e,t,r.children,r.fallback,n),o=t.child,i=e.child.memoizedState,o.memoizedState=i===null?{baseLanes:n}:{baseLanes:i.baseLanes|n},o.childLanes=e.childLanes&~n,t.memoizedState=lf,r):(n=k_(e,t,r.children,n),t.memoizedState=null,n)}function S_(e,t,n,r){var i=e.mode,o=e.child;return t={mode:"hidden",children:t},(i&2)===0&&o!==null?(o.childLanes=0,o.pendingProps=t):o=Py(t,i,0,null),n=za(n,i,r,null),o.return=e,n.return=e,o.sibling=n,e.child=o,n}function k_(e,t,n,r){var i=e.child;return e=i.sibling,n=jo(i,{mode:"visible",children:n}),(t.mode&2)===0&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(e.nextEffect=null,e.flags=8,t.firstEffect=t.lastEffect=e),t.child=n}function C_(e,t,n,r,i){var o=t.mode,s=e.child;e=s.sibling;var l={mode:"hidden",children:n};return(o&2)===0&&t.child!==s?(n=t.child,n.childLanes=0,n.pendingProps=l,s=n.lastEffect,s!==null?(t.firstEffect=n.firstEffect,t.lastEffect=s,s.nextEffect=null):t.firstEffect=t.lastEffect=null):n=jo(s,l),e!==null?r=jo(e,r):(r=za(r,o,i,null),r.flags|=2),r.return=t,n.return=t,n.sibling=r,t.child=n,r}function P_(e,t){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),o4(e.return,t)}function l0(e,t,n,r,i,o){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,lastEffect:o}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i,s.lastEffect=o)}function E_(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Kn(e,t,r.children,n),r=Lt.current,(r&2)!==0)r=r&1|2,t.flags|=64;else{if(e!==null&&(e.flags&64)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&P_(e,n);else if(e.tag===19)P_(e,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(It(Lt,r),(t.mode&2)===0)t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Mh(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),l0(t,!1,i,n,o,t.lastEffect);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Mh(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}l0(t,!0,n,null,o,t.lastEffect);break;case"together":l0(t,!1,null,null,void 0,t.lastEffect);break;default:t.memoizedState=null}return t.child}function Wi(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Lu|=t.lanes,(n&t.childLanes)!==0){if(e!==null&&t.child!==e.child)throw Error(ie(153));if(t.child!==null){for(e=t.child,n=jo(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=jo(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}return null}var w4,bv,_4,S4;w4=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};bv=function(){};_4=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,ws(mi.current);var o=null;switch(n){case"input":i=K0(e,i),r=K0(e,r),o=[];break;case"option":i=q0(e,i),r=q0(e,r),o=[];break;case"select":i=Pt({},i,{value:void 0}),r=Pt({},r,{value:void 0}),o=[];break;case"textarea":i=Z0(e,i),r=Z0(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=bh)}ev(n,r);var s;n=null;for(d in i)if(!r.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var l=i[d];for(s in l)l.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(qc.hasOwnProperty(d)?o||(o=[]):(o=o||[]).push(d,null));for(d in r){var c=r[d];if(l=i!=null?i[d]:void 0,r.hasOwnProperty(d)&&c!==l&&(c!=null||l!=null))if(d==="style")if(l){for(s in l)!l.hasOwnProperty(s)||c&&c.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in c)c.hasOwnProperty(s)&&l[s]!==c[s]&&(n||(n={}),n[s]=c[s])}else n||(o||(o=[]),o.push(d,n)),n=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(o=o||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(qc.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&yt("scroll",e),o||l===c||(o=[])):typeof c=="object"&&c!==null&&c.$$typeof===Y1?c.toString():(o=o||[]).push(d,c))}n&&(o=o||[]).push("style",n);var d=o;(t.updateQueue=d)&&(t.flags|=4)}};S4=function(e,t,n,r){n!==r&&(t.flags|=4)};function ic(e,t){if(!vi)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function l6(e,t,n){var r=t.pendingProps;switch(t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return Zn(t.type)&&_h(),null;case 3:return qa(),bt(qn),bt(On),py(),r=t.stateNode,r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(af(t)?t.flags|=4:r.hydrate||(t.flags|=256)),bv(t),null;case 5:hy(t);var i=ws(lu.current);if(n=t.type,e!==null&&t.stateNode!=null)_4(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=128);else{if(!r){if(t.stateNode===null)throw Error(ie(166));return null}if(e=ws(mi.current),af(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[go]=t,r[wh]=o,n){case"dialog":yt("cancel",r),yt("close",r);break;case"iframe":case"object":case"embed":yt("load",r);break;case"video":case"audio":for(e=0;e<vc.length;e++)yt(vc[e],r);break;case"source":yt("error",r);break;case"img":case"image":case"link":yt("error",r),yt("load",r);break;case"details":yt("toggle",r);break;case"input":Ew(r,o),yt("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},yt("invalid",r);break;case"textarea":Ow(r,o),yt("invalid",r)}ev(n,o),e=null;for(var s in o)o.hasOwnProperty(s)&&(i=o[s],s==="children"?typeof i=="string"?r.textContent!==i&&(e=["children",i]):typeof i=="number"&&r.textContent!==""+i&&(e=["children",""+i]):qc.hasOwnProperty(s)&&i!=null&&s==="onScroll"&&yt("scroll",r));switch(n){case"input":ef(r),Mw(r,o,!0);break;case"textarea":ef(r),Rw(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=bh)}r=e,t.updateQueue=r,r!==null&&(t.flags|=4)}else{switch(s=i.nodeType===9?i:i.ownerDocument,e===Q0.html&&(e=m5(n)),e===Q0.html?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[go]=t,e[wh]=r,w4(e,t,!1,!1),t.stateNode=e,s=tv(n,r),n){case"dialog":yt("cancel",e),yt("close",e),i=r;break;case"iframe":case"object":case"embed":yt("load",e),i=r;break;case"video":case"audio":for(i=0;i<vc.length;i++)yt(vc[i],e);i=r;break;case"source":yt("error",e),i=r;break;case"img":case"image":case"link":yt("error",e),yt("load",e),i=r;break;case"details":yt("toggle",e),i=r;break;case"input":Ew(e,r),i=K0(e,r),yt("invalid",e);break;case"option":i=q0(e,r);break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Pt({},r,{value:void 0}),yt("invalid",e);break;case"textarea":Ow(e,r),i=Z0(e,r),yt("invalid",e);break;default:i=r}ev(n,i);var l=i;for(o in l)if(l.hasOwnProperty(o)){var c=l[o];o==="style"?x5(e,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&v5(e,c)):o==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Zc(e,c):typeof c=="number"&&Zc(e,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(qc.hasOwnProperty(o)?c!=null&&o==="onScroll"&&yt("scroll",e):c!=null&&B1(e,o,c,s))}switch(n){case"input":ef(e),Mw(e,r,!1);break;case"textarea":ef(e),Rw(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Do(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Ra(e,!!r.multiple,o,!1):r.defaultValue!=null&&Ra(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=bh)}q5(n,r)&&(t.flags|=4)}t.ref!==null&&(t.flags|=128)}return null;case 6:if(e&&t.stateNode!=null)S4(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(ie(166));n=ws(lu.current),ws(mi.current),af(t)?(r=t.stateNode,n=t.memoizedProps,r[go]=t,r.nodeValue!==n&&(t.flags|=4)):(r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[go]=t,t.stateNode=r)}return null;case 13:return bt(Lt),r=t.memoizedState,(t.flags&64)!==0?(t.lanes=n,t):(r=r!==null,n=!1,e===null?t.memoizedProps.fallback!==void 0&&af(t):n=e.memoizedState!==null,r&&!n&&(t.mode&2)!==0&&(e===null&&t.memoizedProps.unstable_avoidThisFallback!==!0||(Lt.current&1)!==0?pn===0&&(pn=3):((pn===0||pn===3)&&(pn=4),zn===null||(Lu&134217727)===0&&(cl&134217727)===0||Ia(zn,Mn))),(r||n)&&(t.flags|=4),null);case 4:return qa(),bv(t),e===null&&K5(t.stateNode.containerInfo),null;case 10:return dy(t),null;case 17:return Zn(t.type)&&_h(),null;case 19:if(bt(Lt),r=t.memoizedState,r===null)return null;if(o=(t.flags&64)!==0,s=r.rendering,s===null)if(o)ic(r,!1);else{if(pn!==0||e!==null&&(e.flags&64)!==0)for(e=t.child;e!==null;){if(s=Mh(e),s!==null){for(t.flags|=64,ic(r,!1),o=s.updateQueue,o!==null&&(t.updateQueue=o,t.flags|=4),r.lastEffect===null&&(t.firstEffect=null),t.lastEffect=r.lastEffect,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=2,o.nextEffect=null,o.firstEffect=null,o.lastEffect=null,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return It(Lt,Lt.current&1|2),t.child}e=e.sibling}r.tail!==null&&Pn()>Pv&&(t.flags|=64,o=!0,ic(r,!1),t.lanes=33554432)}else{if(!o)if(e=Mh(s),e!==null){if(t.flags|=64,o=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ic(r,!0),r.tail===null&&r.tailMode==="hidden"&&!s.alternate&&!vi)return t=t.lastEffect=r.lastEffect,t!==null&&(t.nextEffect=null),null}else 2*Pn()-r.renderingStartTime>Pv&&n!==1073741824&&(t.flags|=64,o=!0,ic(r,!1),t.lanes=33554432);r.isBackwards?(s.sibling=t.child,t.child=s):(n=r.last,n!==null?n.sibling=s:t.child=s,r.last=s)}return r.tail!==null?(n=r.tail,r.rendering=n,r.tail=n.sibling,r.lastEffect=t.lastEffect,r.renderingStartTime=Pn(),n.sibling=null,t=Lt.current,It(Lt,o?t&1|2:t&1),n):null;case 23:case 24:return ky(),e!==null&&e.memoizedState!==null!=(t.memoizedState!==null)&&r.mode!=="unstable-defer-without-hiding"&&(t.flags|=4),null}throw Error(ie(156,t.tag))}function c6(e){switch(e.tag){case 1:Zn(e.type)&&_h();var t=e.flags;return t&4096?(e.flags=t&-4097|64,e):null;case 3:if(qa(),bt(qn),bt(On),py(),t=e.flags,(t&64)!==0)throw Error(ie(285));return e.flags=t&-4097|64,e;case 5:return hy(e),null;case 13:return bt(Lt),t=e.flags,t&4096?(e.flags=t&-4097|64,e):null;case 19:return bt(Lt),null;case 4:return qa(),null;case 10:return dy(e),null;case 23:case 24:return ky(),null;default:return null}}function by(e,t){try{var n="",r=t;do n+=HL(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i}}function wv(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var u6=typeof WeakMap=="function"?WeakMap:Map;function k4(e,t,n){n=Po(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){$h||($h=!0,Ev=r),wv(e,t)},n}function C4(e,t,n){n=Po(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return wv(e,t),r(i)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){typeof r!="function"&&(gi===null?gi=new Set([this]):gi.add(this),wv(e,t));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}var d6=typeof WeakSet=="function"?WeakSet:Set;function M_(e){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(n){Ro(e,n)}else t.current=null}function f6(e,t){switch(t.tag){case 0:case 11:case 15:case 22:return;case 1:if(t.flags&256&&e!==null){var n=e.memoizedProps,r=e.memoizedState;e=t.stateNode,t=e.getSnapshotBeforeUpdate(t.elementType===t.type?n:Yr(t.type,n),r),e.__reactInternalSnapshotBeforeUpdate=t}return;case 3:t.flags&256&&ay(t.stateNode.containerInfo);return;case 5:case 6:case 4:case 17:return}throw Error(ie(163))}function h6(e,t,n){switch(n.tag){case 0:case 11:case 15:case 22:if(t=n.updateQueue,t=t!==null?t.lastEffect:null,t!==null){e=t=t.next;do{if((e.tag&3)===3){var r=e.create;e.destroy=r()}e=e.next}while(e!==t)}if(t=n.updateQueue,t=t!==null?t.lastEffect:null,t!==null){e=t=t.next;do{var i=e;r=i.next,i=i.tag,(i&4)!==0&&(i&1)!==0&&(L4(n,e),w6(n,e)),e=r}while(e!==t)}return;case 1:e=n.stateNode,n.flags&4&&(t===null?e.componentDidMount():(r=n.elementType===n.type?t.memoizedProps:Yr(n.type,t.memoizedProps),e.componentDidUpdate(r,t.memoizedState,e.__reactInternalSnapshotBeforeUpdate))),t=n.updateQueue,t!==null&&c_(n,t,e);return;case 3:if(t=n.updateQueue,t!==null){if(e=null,n.child!==null)switch(n.child.tag){case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}c_(n,t,e)}return;case 5:e=n.stateNode,t===null&&n.flags&4&&q5(n.type,n.memoizedProps)&&e.focus();return;case 6:return;case 4:return;case 12:return;case 13:n.memoizedState===null&&(n=n.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&O5(n))));return;case 19:case 17:case 20:case 21:case 23:case 24:return}throw Error(ie(163))}function O_(e,t){for(var n=e;;){if(n.tag===5){var r=n.stateNode;if(t)r=r.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{r=n.stateNode;var i=n.memoizedProps.style;i=i!=null&&i.hasOwnProperty("display")?i.display:null,r.style.display=y5("display",i)}}else if(n.tag===6)n.stateNode.nodeValue=t?"":n.memoizedProps;else if((n.tag!==23&&n.tag!==24||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}}function R_(e,t){if(Cs&&typeof Cs.onCommitFiberUnmount=="function")try{Cs.onCommitFiberUnmount(ly,t)}catch{}switch(t.tag){case 0:case 11:case 14:case 15:case 22:if(e=t.updateQueue,e!==null&&(e=e.lastEffect,e!==null)){var n=e=e.next;do{var r=n,i=r.destroy;if(r=r.tag,i!==void 0)if((r&4)!==0)L4(t,n);else{r=t;try{i()}catch(o){Ro(r,o)}}n=n.next}while(n!==e)}break;case 1:if(M_(t),e=t.stateNode,typeof e.componentWillUnmount=="function")try{e.props=t.memoizedProps,e.state=t.memoizedState,e.componentWillUnmount()}catch(o){Ro(t,o)}break;case 5:M_(t);break;case 4:P4(e,t)}}function T_(e){e.alternate=null,e.child=null,e.dependencies=null,e.firstEffect=null,e.lastEffect=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.return=null,e.updateQueue=null}function A_(e){return e.tag===5||e.tag===3||e.tag===4}function N_(e){e:{for(var t=e.return;t!==null;){if(A_(t))break e;t=t.return}throw Error(ie(160))}var n=t;switch(t=n.stateNode,n.tag){case 5:var r=!1;break;case 3:t=t.containerInfo,r=!0;break;case 4:t=t.containerInfo,r=!0;break;default:throw Error(ie(161))}n.flags&16&&(Zc(t,""),n.flags&=-17);e:t:for(n=e;;){for(;n.sibling===null;){if(n.return===null||A_(n.return)){n=null;break e}n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue t;n.child.return=n,n=n.child}if(!(n.flags&2)){n=n.stateNode;break e}}r?_v(e,n,t):Sv(e,n,t)}function _v(e,t,n){var r=e.tag,i=r===5||r===6;if(i)e=i?e.stateNode:e.stateNode.instance,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=bh));else if(r!==4&&(e=e.child,e!==null))for(_v(e,t,n),e=e.sibling;e!==null;)_v(e,t,n),e=e.sibling}function Sv(e,t,n){var r=e.tag,i=r===5||r===6;if(i)e=i?e.stateNode:e.stateNode.instance,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Sv(e,t,n),e=e.sibling;e!==null;)Sv(e,t,n),e=e.sibling}function P4(e,t){for(var n=t,r=!1,i,o;;){if(!r){r=n.return;e:for(;;){if(r===null)throw Error(ie(160));switch(i=r.stateNode,r.tag){case 5:o=!1;break e;case 3:i=i.containerInfo,o=!0;break e;case 4:i=i.containerInfo,o=!0;break e}r=r.return}r=!0}if(n.tag===5||n.tag===6){e:for(var s=e,l=n,c=l;;)if(R_(s,c),c.child!==null&&c.tag!==4)c.child.return=c,c=c.child;else{if(c===l)break e;for(;c.sibling===null;){if(c.return===null||c.return===l)break e;c=c.return}c.sibling.return=c.return,c=c.sibling}o?(s=i,l=n.stateNode,s.nodeType===8?s.parentNode.removeChild(l):s.removeChild(l)):i.removeChild(n.stateNode)}else if(n.tag===4){if(n.child!==null){i=n.stateNode.containerInfo,o=!0,n.child.return=n,n=n.child;continue}}else if(R_(e,n),n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return,n.tag===4&&(r=!1)}n.sibling.return=n.return,n=n.sibling}}function c0(e,t){switch(t.tag){case 0:case 11:case 14:case 15:case 22:var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var r=n=n.next;do(r.tag&3)===3&&(e=r.destroy,r.destroy=void 0,e!==void 0&&e()),r=r.next;while(r!==n)}return;case 1:return;case 5:if(n=t.stateNode,n!=null){r=t.memoizedProps;var i=e!==null?e.memoizedProps:r;e=t.type;var o=t.updateQueue;if(t.updateQueue=null,o!==null){for(n[wh]=r,e==="input"&&r.type==="radio"&&r.name!=null&&p5(n,r),tv(e,i),t=tv(e,r),i=0;i<o.length;i+=2){var s=o[i],l=o[i+1];s==="style"?x5(n,l):s==="dangerouslySetInnerHTML"?v5(n,l):s==="children"?Zc(n,l):B1(n,s,l,t)}switch(e){case"input":X0(n,r);break;case"textarea":g5(n,r);break;case"select":e=n._wrapperState.wasMultiple,n._wrapperState.wasMultiple=!!r.multiple,o=r.value,o!=null?Ra(n,!!r.multiple,o,!1):e!==!!r.multiple&&(r.defaultValue!=null?Ra(n,!!r.multiple,r.defaultValue,!0):Ra(n,!!r.multiple,r.multiple?[]:"",!1))}}}return;case 6:if(t.stateNode===null)throw Error(ie(162));t.stateNode.nodeValue=t.memoizedProps;return;case 3:n=t.stateNode,n.hydrate&&(n.hydrate=!1,O5(n.containerInfo));return;case 12:return;case 13:t.memoizedState!==null&&(Sy=Pn(),O_(t.child,!0)),L_(t);return;case 19:L_(t);return;case 17:return;case 23:case 24:O_(t,t.memoizedState!==null);return}throw Error(ie(163))}function L_(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new d6),t.forEach(function(r){var i=k6.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function p6(e,t){return e!==null&&(e=e.memoizedState,e===null||e.dehydrated!==null)?(t=t.memoizedState,t!==null&&t.dehydrated===null):!1}var g6=Math.ceil,Lh=zs.ReactCurrentDispatcher,wy=zs.ReactCurrentOwner,Me=0,zn=null,Jt=null,Mn=0,Rs=0,kv=Ko(0),pn=0,_p=null,ll=0,Lu=0,cl=0,_y=0,Cv=null,Sy=0,Pv=1/0;function ul(){Pv=Pn()+500}var fe=null,$h=!1,Ev=null,gi=null,Bo=!1,Dc=null,yc=90,Mv=[],Ov=[],Yi=null,zc=0,Rv=null,Yf=-1,Bi=0,Kf=0,Fc=null,Xf=!1;function ur(){return(Me&48)!==0?Pn():Yf!==-1?Yf:Yf=Pn()}function Mo(e){if(e=e.mode,(e&2)===0)return 1;if((e&4)===0)return Ga()===99?1:2;if(Bi===0&&(Bi=ll),n6.transition!==0){Kf!==0&&(Kf=Cv!==null?Cv.pendingLanes:0),e=Bi;var t=4186112&~Kf;return t&=-t,t===0&&(e=4186112&~e,t=e&-e,t===0&&(t=8192)),t}return e=Ga(),(Me&4)!==0&&e===98?e=yh(12,Bi):(e=o$(e),e=yh(e,Bi)),e}function Oo(e,t,n){if(50<zc)throw zc=0,Rv=null,Error(ie(185));if(e=Sp(e,t),e===null)return null;gp(e,t,n),e===zn&&(cl|=t,pn===4&&Ia(e,Mn));var r=Ga();t===1?(Me&8)!==0&&(Me&48)===0?Tv(e):(Nr(e,n),Me===0&&(ul(),_i())):((Me&4)===0||r!==98&&r!==99||(Yi===null?Yi=new Set([e]):Yi.add(e)),Nr(e,n)),Cv=e}function Sp(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}function Nr(e,t){for(var n=e.callbackNode,r=e.suspendedLanes,i=e.pingedLanes,o=e.expirationTimes,s=e.pendingLanes;0<s;){var l=31-zo(s),c=1<<l,d=o[l];if(d===-1){if((c&r)===0||(c&i)!==0){d=t,ya(c);var f=gt;o[l]=10<=f?d+250:6<=f?d+5e3:-1}}else d<=t&&(e.expiredLanes|=c);s&=~c}if(r=tu(e,e===zn?Mn:0),t=gt,r===0)n!==null&&(n!==i0&&fv(n),e.callbackNode=null,e.callbackPriority=0);else{if(n!==null){if(e.callbackPriority===t)return;n!==i0&&fv(n)}t===15?(n=Tv.bind(null,e),zi===null?(zi=[n],Uf=cy(bp,i4)):zi.push(n),n=i0):t===14?n=ou(99,Tv.bind(null,e)):(n=s$(t),n=ou(n,E4.bind(null,e))),e.callbackPriority=t,e.callbackNode=n}}function E4(e){if(Yf=-1,Kf=Bi=0,(Me&48)!==0)throw Error(ie(327));var t=e.callbackNode;if(Xo()&&e.callbackNode!==t)return null;var n=tu(e,e===zn?Mn:0);if(n===0)return null;var r=n,i=Me;Me|=16;var o=T4();(zn!==e||Mn!==r)&&(ul(),Da(e,r));do try{y6();break}catch(l){R4(e,l)}while(1);if(uy(),Lh.current=o,Me=i,Jt!==null?r=0:(zn=null,Mn=0,r=pn),(ll&cl)!==0)Da(e,0);else if(r!==0){if(r===2&&(Me|=64,e.hydrate&&(e.hydrate=!1,ay(e.containerInfo)),n=I5(e),n!==0&&(r=xc(e,n))),r===1)throw t=_p,Da(e,0),Ia(e,n),Nr(e,Pn()),t;switch(e.finishedWork=e.current.alternate,e.finishedLanes=n,r){case 0:case 1:throw Error(ie(345));case 2:fs(e);break;case 3:if(Ia(e,n),(n&62914560)===n&&(r=Sy+500-Pn(),10<r)){if(tu(e,0)!==0)break;if(i=e.suspendedLanes,(i&n)!==n){ur(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=t_(fs.bind(null,e),r);break}fs(e);break;case 4:if(Ia(e,n),(n&4186112)===n)break;for(r=e.eventTimes,i=-1;0<n;){var s=31-zo(n);o=1<<s,s=r[s],s>i&&(i=s),n&=~o}if(n=i,n=Pn()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*g6(n/1960))-n,10<n){e.timeoutHandle=t_(fs.bind(null,e),n);break}fs(e);break;case 5:fs(e);break;default:throw Error(ie(329))}}return Nr(e,Pn()),e.callbackNode===t?E4.bind(null,e):null}function Ia(e,t){for(t&=~_y,t&=~cl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-zo(t),r=1<<n;e[n]=-1,t&=~r}}function Tv(e){if((Me&48)!==0)throw Error(ie(327));if(Xo(),e===zn&&(e.expiredLanes&Mn)!==0){var t=Mn,n=xc(e,t);(ll&cl)!==0&&(t=tu(e,t),n=xc(e,t))}else t=tu(e,0),n=xc(e,t);if(e.tag!==0&&n===2&&(Me|=64,e.hydrate&&(e.hydrate=!1,ay(e.containerInfo)),t=I5(e),t!==0&&(n=xc(e,t))),n===1)throw n=_p,Da(e,0),Ia(e,t),Nr(e,Pn()),n;return e.finishedWork=e.current.alternate,e.finishedLanes=t,fs(e),Nr(e,Pn()),null}function m6(){if(Yi!==null){var e=Yi;Yi=null,e.forEach(function(t){t.expiredLanes|=24&t.pendingLanes,Nr(t,Pn())})}_i()}function M4(e,t){var n=Me;Me|=1;try{return e(t)}finally{Me=n,Me===0&&(ul(),_i())}}function O4(e,t){var n=Me;Me&=-2,Me|=8;try{return e(t)}finally{Me=n,Me===0&&(ul(),_i())}}function cf(e,t){It(kv,Rs),Rs|=t,ll|=t}function ky(){Rs=kv.current,bt(kv)}function Da(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,q$(n)),Jt!==null)for(n=Jt.return;n!==null;){var r=n;switch(r.tag){case 1:r=r.type.childContextTypes,r!=null&&_h();break;case 3:qa(),bt(qn),bt(On),py();break;case 5:hy(r);break;case 4:qa();break;case 13:bt(Lt);break;case 19:bt(Lt);break;case 10:dy(r);break;case 23:case 24:ky()}n=n.return}zn=e,Jt=jo(e.current,null),Mn=Rs=ll=t,pn=0,_p=null,_y=cl=Lu=0}function R4(e,t){do{var n=Jt;try{if(uy(),$c.current=Nh,Oh){for(var r=Ht.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Oh=!1}if(cu=0,fn=Sn=Ht=null,Ic=!1,wy.current=null,n===null||n.return===null){pn=1,_p=t,Jt=null;break}e:{var o=e,s=n.return,l=n,c=t;if(t=Mn,l.flags|=2048,l.firstEffect=l.lastEffect=null,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c;if((l.mode&2)===0){var f=l.alternate;f?(l.updateQueue=f.updateQueue,l.memoizedState=f.memoizedState,l.lanes=f.lanes):(l.updateQueue=null,l.memoizedState=null)}var g=(Lt.current&1)!==0,m=s;do{var x;if(x=m.tag===13){var w=m.memoizedState;if(w!==null)x=w.dehydrated!==null;else{var _=m.memoizedProps;x=_.fallback===void 0?!1:_.unstable_avoidThisFallback!==!0?!0:!g}}if(x){var v=m.updateQueue;if(v===null){var b=new Set;b.add(d),m.updateQueue=b}else v.add(d);if((m.mode&2)===0){if(m.flags|=64,l.flags|=16384,l.flags&=-2981,l.tag===1)if(l.alternate===null)l.tag=17;else{var S=Po(-1,1);S.tag=2,Eo(l,S)}l.lanes|=1;break e}c=void 0,l=t;var C=o.pingCache;if(C===null?(C=o.pingCache=new u6,c=new Set,C.set(d,c)):(c=C.get(d),c===void 0&&(c=new Set,C.set(d,c))),!c.has(l)){c.add(l);var E=S6.bind(null,o,d,l);d.then(E,E)}m.flags|=4096,m.lanes=t;break e}m=m.return}while(m!==null);c=Error((Oa(l.type)||"A React component")+` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`)}pn!==5&&(pn=2),c=by(c,l),m=s;do{switch(m.tag){case 3:o=c,m.flags|=4096,t&=-t,m.lanes|=t;var T=k4(m,o,t);l_(m,T);break e;case 1:o=c;var N=m.type,L=m.stateNode;if((m.flags&64)===0&&(typeof N.getDerivedStateFromError=="function"||L!==null&&typeof L.componentDidCatch=="function"&&(gi===null||!gi.has(L)))){m.flags|=4096,t&=-t,m.lanes|=t;var z=C4(m,o,t);l_(m,z);break e}}m=m.return}while(m!==null)}N4(n)}catch(B){t=B,Jt===n&&n!==null&&(Jt=n=n.return);continue}break}while(1)}function T4(){var e=Lh.current;return Lh.current=Nh,e===null?Nh:e}function xc(e,t){var n=Me;Me|=16;var r=T4();zn===e&&Mn===t||Da(e,t);do try{v6();break}catch(i){R4(e,i)}while(1);if(uy(),Me=n,Lh.current=r,Jt!==null)throw Error(ie(261));return zn=null,Mn=0,pn}function v6(){for(;Jt!==null;)A4(Jt)}function y6(){for(;Jt!==null&&!J$();)A4(Jt)}function A4(e){var t=$4(e.alternate,e,Rs);e.memoizedProps=e.pendingProps,t===null?N4(e):Jt=t,wy.current=null}function N4(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&2048)===0){if(n=l6(n,t,Rs),n!==null){Jt=n;return}if(n=t,n.tag!==24&&n.tag!==23||n.memoizedState===null||(Rs&1073741824)!==0||(n.mode&4)===0){for(var r=0,i=n.child;i!==null;)r|=i.lanes|i.childLanes,i=i.sibling;n.childLanes=r}e!==null&&(e.flags&2048)===0&&(e.firstEffect===null&&(e.firstEffect=t.firstEffect),t.lastEffect!==null&&(e.lastEffect!==null&&(e.lastEffect.nextEffect=t.firstEffect),e.lastEffect=t.lastEffect),1<t.flags&&(e.lastEffect!==null?e.lastEffect.nextEffect=t:e.firstEffect=t,e.lastEffect=t))}else{if(n=c6(t),n!==null){n.flags&=2047,Jt=n;return}e!==null&&(e.firstEffect=e.lastEffect=null,e.flags|=2048)}if(t=t.sibling,t!==null){Jt=t;return}Jt=t=e}while(t!==null);pn===0&&(pn=5)}function fs(e){var t=Ga();return Os(99,x6.bind(null,e,t)),null}function x6(e,t){do Xo();while(Dc!==null);if((Me&48)!==0)throw Error(ie(327));var n=e.finishedWork;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(ie(177));e.callbackNode=null;var r=n.lanes|n.childLanes,i=r,o=e.pendingLanes&~i;e.pendingLanes=i,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=i,e.mutableReadLanes&=i,e.entangledLanes&=i,i=e.entanglements;for(var s=e.eventTimes,l=e.expirationTimes;0<o;){var c=31-zo(o),d=1<<c;i[c]=0,s[c]=-1,l[c]=-1,o&=~d}if(Yi!==null&&(r&24)===0&&Yi.has(e)&&Yi.delete(e),e===zn&&(Jt=zn=null,Mn=0),1<n.flags?n.lastEffect!==null?(n.lastEffect.nextEffect=n,r=n.firstEffect):r=n:r=n.firstEffect,r!==null){if(i=Me,Me|=32,wy.current=null,t0=jf,s=Xw(),av(s)){if("selectionStart"in s)l={start:s.selectionStart,end:s.selectionEnd};else e:if(l=(l=s.ownerDocument)&&l.defaultView||window,(d=l.getSelection&&l.getSelection())&&d.rangeCount!==0){l=d.anchorNode,o=d.anchorOffset,c=d.focusNode,d=d.focusOffset;try{l.nodeType,c.nodeType}catch{l=null;break e}var f=0,g=-1,m=-1,x=0,w=0,_=s,v=null;t:for(;;){for(var b;_!==l||o!==0&&_.nodeType!==3||(g=f+o),_!==c||d!==0&&_.nodeType!==3||(m=f+d),_.nodeType===3&&(f+=_.nodeValue.length),(b=_.firstChild)!==null;)v=_,_=b;for(;;){if(_===s)break t;if(v===l&&++x===o&&(g=f),v===c&&++w===d&&(m=f),(b=_.nextSibling)!==null)break;_=v,v=_.parentNode}_=b}l=g===-1||m===-1?null:{start:g,end:m}}else l=null;l=l||{start:0,end:0}}else l=null;n0={focusedElem:s,selectionRange:l},jf=!1,Fc=null,Xf=!1,fe=r;do try{b6()}catch(B){if(fe===null)throw Error(ie(330));Ro(fe,B),fe=fe.nextEffect}while(fe!==null);Fc=null,fe=r;do try{for(s=e;fe!==null;){var S=fe.flags;if(S&16&&Zc(fe.stateNode,""),S&128){var C=fe.alternate;if(C!==null){var E=C.ref;E!==null&&(typeof E=="function"?E(null):E.current=null)}}switch(S&1038){case 2:N_(fe),fe.flags&=-3;break;case 6:N_(fe),fe.flags&=-3,c0(fe.alternate,fe);break;case 1024:fe.flags&=-1025;break;case 1028:fe.flags&=-1025,c0(fe.alternate,fe);break;case 4:c0(fe.alternate,fe);break;case 8:l=fe,P4(s,l);var T=l.alternate;T_(l),T!==null&&T_(T)}fe=fe.nextEffect}}catch(B){if(fe===null)throw Error(ie(330));Ro(fe,B),fe=fe.nextEffect}while(fe!==null);if(E=n0,C=Xw(),S=E.focusedElem,s=E.selectionRange,C!==S&&S&&S.ownerDocument&&V5(S.ownerDocument.documentElement,S)){for(s!==null&&av(S)&&(C=s.start,E=s.end,E===void 0&&(E=C),"selectionStart"in S?(S.selectionStart=C,S.selectionEnd=Math.min(E,S.value.length)):(E=(C=S.ownerDocument||document)&&C.defaultView||window,E.getSelection&&(E=E.getSelection(),l=S.textContent.length,T=Math.min(s.start,l),s=s.end===void 0?T:Math.min(s.end,l),!E.extend&&T>s&&(l=s,s=T,T=l),l=Kw(S,T),o=Kw(S,s),l&&o&&(E.rangeCount!==1||E.anchorNode!==l.node||E.anchorOffset!==l.offset||E.focusNode!==o.node||E.focusOffset!==o.offset)&&(C=C.createRange(),C.setStart(l.node,l.offset),E.removeAllRanges(),T>s?(E.addRange(C),E.extend(o.node,o.offset)):(C.setEnd(o.node,o.offset),E.addRange(C)))))),C=[],E=S;E=E.parentNode;)E.nodeType===1&&C.push({element:E,left:E.scrollLeft,top:E.scrollTop});for(typeof S.focus=="function"&&S.focus(),S=0;S<C.length;S++)E=C[S],E.element.scrollLeft=E.left,E.element.scrollTop=E.top}jf=!!t0,n0=t0=null,e.current=n,fe=r;do try{for(S=e;fe!==null;){var N=fe.flags;if(N&36&&h6(S,fe.alternate,fe),N&128){C=void 0;var L=fe.ref;if(L!==null){var z=fe.stateNode;switch(fe.tag){case 5:C=z;break;default:C=z}typeof L=="function"?L(C):L.current=C}}fe=fe.nextEffect}}catch(B){if(fe===null)throw Error(ie(330));Ro(fe,B),fe=fe.nextEffect}while(fe!==null);fe=null,t6(),Me=i}else e.current=n;if(Bo)Bo=!1,Dc=e,yc=t;else for(fe=r;fe!==null;)t=fe.nextEffect,fe.nextEffect=null,fe.flags&8&&(N=fe,N.sibling=null,N.stateNode=null),fe=t;if(r=e.pendingLanes,r===0&&(gi=null),r===1?e===Rv?zc++:(zc=0,Rv=e):zc=0,n=n.stateNode,Cs&&typeof Cs.onCommitFiberRoot=="function")try{Cs.onCommitFiberRoot(ly,n,void 0,(n.current.flags&64)===64)}catch{}if(Nr(e,Pn()),$h)throw $h=!1,e=Ev,Ev=null,e;return(Me&8)!==0||_i(),null}function b6(){for(;fe!==null;){var e=fe.alternate;Xf||Fc===null||((fe.flags&8)!==0?Nw(fe,Fc)&&(Xf=!0):fe.tag===13&&p6(e,fe)&&Nw(fe,Fc)&&(Xf=!0));var t=fe.flags;(t&256)!==0&&f6(e,fe),(t&512)===0||Bo||(Bo=!0,ou(97,function(){return Xo(),null})),fe=fe.nextEffect}}function Xo(){if(yc!==90){var e=97<yc?97:yc;return yc=90,Os(e,_6)}return!1}function w6(e,t){Mv.push(t,e),Bo||(Bo=!0,ou(97,function(){return Xo(),null}))}function L4(e,t){Ov.push(t,e),Bo||(Bo=!0,ou(97,function(){return Xo(),null}))}function _6(){if(Dc===null)return!1;var e=Dc;if(Dc=null,(Me&48)!==0)throw Error(ie(331));var t=Me;Me|=32;var n=Ov;Ov=[];for(var r=0;r<n.length;r+=2){var i=n[r],o=n[r+1],s=i.destroy;if(i.destroy=void 0,typeof s=="function")try{s()}catch(c){if(o===null)throw Error(ie(330));Ro(o,c)}}for(n=Mv,Mv=[],r=0;r<n.length;r+=2){i=n[r],o=n[r+1];try{var l=i.create;i.destroy=l()}catch(c){if(o===null)throw Error(ie(330));Ro(o,c)}}for(l=e.current.firstEffect;l!==null;)e=l.nextEffect,l.nextEffect=null,l.flags&8&&(l.sibling=null,l.stateNode=null),l=e;return Me=t,_i(),!0}function $_(e,t,n){t=by(n,t),t=k4(e,t,1),Eo(e,t),t=ur(),e=Sp(e,1),e!==null&&(gp(e,1,t),Nr(e,t))}function Ro(e,t){if(e.tag===3)$_(e,e,t);else for(var n=e.return;n!==null;){if(n.tag===3){$_(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(gi===null||!gi.has(r))){e=by(t,e);var i=C4(n,e,1);if(Eo(n,i),i=ur(),n=Sp(n,1),n!==null)gp(n,1,i),Nr(n,i);else if(typeof r.componentDidCatch=="function"&&(gi===null||!gi.has(r)))try{r.componentDidCatch(t,e)}catch{}break}}n=n.return}}function S6(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ur(),e.pingedLanes|=e.suspendedLanes&n,zn===e&&(Mn&n)===n&&(pn===4||pn===3&&(Mn&62914560)===Mn&&500>Pn()-Sy?Da(e,0):_y|=n),Nr(e,t)}function k6(e,t){var n=e.stateNode;n!==null&&n.delete(t),t=0,t===0&&(t=e.mode,(t&2)===0?t=1:(t&4)===0?t=Ga()===99?1:2:(Bi===0&&(Bi=ll),t=xa(62914560&~Bi),t===0&&(t=4194304))),n=ur(),e=Sp(e,t),e!==null&&(gp(e,t,n),Nr(e,n))}var $4;$4=function(e,t,n){var r=t.lanes;if(e!==null)if(e.memoizedProps!==t.pendingProps||qn.current)Gr=!0;else if((n&r)!==0)Gr=(e.flags&16384)!==0;else{switch(Gr=!1,t.tag){case 3:w_(t),s0();break;case 5:f_(t);break;case 1:Zn(t.type)&&Vf(t);break;case 4:gv(t,t.stateNode.containerInfo);break;case 10:r=t.memoizedProps.value;var i=t.type._context;It(Sh,i._currentValue),i._currentValue=r;break;case 13:if(t.memoizedState!==null)return(n&t.child.childLanes)!==0?__(e,t,n):(It(Lt,Lt.current&1),t=Wi(e,t,n),t!==null?t.sibling:null);It(Lt,Lt.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&64)!==0){if(r)return E_(e,t,n);t.flags|=64}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),It(Lt,Lt.current),r)break;return null;case 23:case 24:return t.lanes=0,a0(e,t,n)}return Wi(e,t,n)}else Gr=!1;switch(t.lanes=0,t.tag){case 2:if(r=t.type,e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2),e=t.pendingProps,i=Xa(t,On.current),La(t,n),i=my(null,t,r,e,i,n),t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0){if(t.tag=1,t.memoizedState=null,t.updateQueue=null,Zn(r)){var o=!0;Vf(t)}else o=!1;t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,fy(t);var s=r.getDerivedStateFromProps;typeof s=="function"&&Ph(t,r,s,e),i.updater=wp,t.stateNode=i,i._reactInternals=t,pv(t,r,e,n),t=xv(null,t,r,!0,o,n)}else t.tag=0,Kn(null,t,i,n),t=t.child;return t;case 16:i=t.elementType;e:{switch(e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2),e=t.pendingProps,o=i._init,i=o(i._payload),t.type=i,o=t.tag=P6(i),e=Yr(i,e),o){case 0:t=yv(null,t,i,e,n);break e;case 1:t=b_(null,t,i,e,n);break e;case 11:t=y_(null,t,i,e,n);break e;case 14:t=x_(null,t,i,Yr(i.type,e),r,n);break e}throw Error(ie(306,i,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Yr(r,i),yv(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Yr(r,i),b_(e,t,r,i,n);case 3:if(w_(t),r=t.updateQueue,e===null||r===null)throw Error(ie(282));if(r=t.pendingProps,i=t.memoizedState,i=i!==null?i.element:null,s4(e,t),su(t,r,null,n),r=t.memoizedState.element,r===i)s0(),t=Wi(e,t,n);else{if(i=t.stateNode,(o=i.hydrate)&&(mo=Na(t.stateNode.containerInfo.firstChild),ji=t,o=vi=!0),o){if(e=i.mutableSourceEagerHydrationData,e!=null)for(i=0;i<e.length;i+=2)o=e[i],o._workInProgressVersionPrimary=e[i+1],$a.push(o);for(n=u4(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|1024,n=n.sibling}else Kn(e,t,r,n),s0();t=t.child}return t;case 5:return f_(t),e===null&&mv(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,uv(r,i)?s=null:o!==null&&uv(r,o)&&(t.flags|=16),b4(e,t),Kn(e,t,s,n),t.child;case 6:return e===null&&mv(t),null;case 13:return __(e,t,n);case 4:return gv(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Eh(t,null,r,n):Kn(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Yr(r,i),y_(e,t,r,i,n);case 7:return Kn(e,t,t.pendingProps,n),t.child;case 8:return Kn(e,t,t.pendingProps.children,n),t.child;case 12:return Kn(e,t,t.pendingProps.children,n),t.child;case 10:e:{r=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value;var l=t.type._context;if(It(Sh,l._currentValue),l._currentValue=o,s!==null)if(l=s.value,o=Mr(l,o)?0:(typeof r._calculateChangedBits=="function"?r._calculateChangedBits(l,o):1073741823)|0,o===0){if(s.children===i.children&&!qn.current){t=Wi(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var c=l.dependencies;if(c!==null){s=l.child;for(var d=c.firstContext;d!==null;){if(d.context===r&&(d.observedBits&o)!==0){l.tag===1&&(d=Po(-1,n&-n),d.tag=2,Eo(l,d)),l.lanes|=n,d=l.alternate,d!==null&&(d.lanes|=n),o4(l.return,n),c.lanes|=n;break}d=d.next}}else s=l.tag===10&&l.type===t.type?null:l.child;if(s!==null)s.return=l;else for(s=l;s!==null;){if(s===t){s=null;break}if(l=s.sibling,l!==null){l.return=s.return,s=l;break}s=s.return}l=s}Kn(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,o=t.pendingProps,r=o.children,La(t,n),i=Ar(i,o.unstable_observedBits),r=r(i),t.flags|=1,Kn(e,t,r,n),t.child;case 14:return i=t.type,o=Yr(i,t.pendingProps),o=Yr(i.type,o),x_(e,t,i,o,r,n);case 15:return x4(e,t,t.type,t.pendingProps,r,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Yr(r,i),e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2),t.tag=1,Zn(r)?(e=!0,Vf(t)):e=!1,La(t,n),l4(t,r,i),pv(t,r,i,n),xv(null,t,r,!0,e,n);case 19:return E_(e,t,n);case 23:return a0(e,t,n);case 24:return a0(e,t,n)}throw Error(ie(156,t.tag))};function C6(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.flags=0,this.lastEffect=this.firstEffect=this.nextEffect=null,this.childLanes=this.lanes=0,this.alternate=null}function Or(e,t,n,r){return new C6(e,t,n,r)}function Cy(e){return e=e.prototype,!(!e||!e.isReactComponent)}function P6(e){if(typeof e=="function")return Cy(e)?1:0;if(e!=null){if(e=e.$$typeof,e===fp)return 11;if(e===hp)return 14}return 2}function jo(e,t){var n=e.alternate;return n===null?(n=Or(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.nextEffect=null,n.firstEffect=null,n.lastEffect=null),n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Gf(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")Cy(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case uo:return za(n.children,i,o,t);case d5:s=8,i|=16;break;case j1:s=8,i|=1;break;case Mc:return e=Or(12,n,t,i|8),e.elementType=Mc,e.type=Mc,e.lanes=o,e;case Oc:return e=Or(13,n,t,i),e.type=Oc,e.elementType=Oc,e.lanes=o,e;case ph:return e=Or(19,n,t,i),e.elementType=ph,e.lanes=o,e;case K1:return Py(n,i,o,t);case Y0:return e=Or(24,n,t,i),e.elementType=Y0,e.lanes=o,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case W1:s=10;break e;case H1:s=9;break e;case fp:s=11;break e;case hp:s=14;break e;case V1:s=16,r=null;break e;case U1:s=22;break e}throw Error(ie(130,e==null?e:typeof e,""))}return t=Or(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function za(e,t,n,r){return e=Or(7,e,r,t),e.lanes=n,e}function Py(e,t,n,r){return e=Or(23,e,r,t),e.elementType=K1,e.lanes=n,e}function u0(e,t,n){return e=Or(6,e,null,t),e.lanes=n,e}function d0(e,t,n){return t=Or(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function E6(e,t,n){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.pendingContext=this.context=null,this.hydrate=n,this.callbackNode=null,this.callbackPriority=0,this.eventTimes=Xm(0),this.expirationTimes=Xm(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xm(0),this.mutableSourceEagerHydrationData=null}function M6(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ys,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Ih(e,t,n,r){var i=t.current,o=ur(),s=Mo(i);e:if(n){n=n._reactInternals;t:{if(Fs(n)!==n||n.tag!==1)throw Error(ie(170));var l=n;do{switch(l.tag){case 3:l=l.stateNode.context;break t;case 1:if(Zn(l.type)){l=l.stateNode.__reactInternalMemoizedMergedChildContext;break t}}l=l.return}while(l!==null);throw Error(ie(171))}if(n.tag===1){var c=n.type;if(Zn(c)){n=Q5(n,c,l);break e}}n=l}else n=Fo;return t.context===null?t.context=n:t.pendingContext=n,t=Po(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),Eo(i,t),Oo(i,s,o),s}function f0(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function I_(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ey(e,t){I_(e,t),(e=e.alternate)&&I_(e,t)}function O6(){return null}function My(e,t,n){var r=n!=null&&n.hydrationOptions!=null&&n.hydrationOptions.mutableSources||null;if(n=new E6(e,t,n!=null&&n.hydrate===!0),t=Or(3,null,null,t===2?7:t===1?3:0),n.current=t,t.stateNode=n,fy(t),e[al]=n.current,K5(e.nodeType===8?e.parentNode:e),r)for(e=0;e<r.length;e++){t=r[e];var i=t._getVersion;i=i(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i)}this._internalRoot=n}My.prototype.render=function(e){Ih(e,this._internalRoot,null,null)};My.prototype.unmount=function(){var e=this._internalRoot,t=e.containerInfo;Ih(null,e,null,function(){t[al]=null})};function $u(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function R6(e,t){if(t||(t=e?e.nodeType===9?e.documentElement:e.firstChild:null,t=!(!t||t.nodeType!==1||!t.hasAttribute("data-reactroot"))),!t)for(var n;n=e.lastChild;)e.removeChild(n);return new My(e,0,t?{hydrate:!0}:void 0)}function kp(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o._internalRoot;if(typeof i=="function"){var l=i;i=function(){var d=f0(s);l.call(d)}}Ih(t,s,e,i)}else{if(o=n._reactRootContainer=R6(n,r),s=o._internalRoot,typeof i=="function"){var c=i;i=function(){var d=f0(s);c.call(d)}}O4(function(){Ih(t,s,e,i)})}return f0(s)}P5=function(e){if(e.tag===13){var t=ur();Oo(e,4,t),Ey(e,4)}};Q1=function(e){if(e.tag===13){var t=ur();Oo(e,67108864,t),Ey(e,67108864)}};E5=function(e){if(e.tag===13){var t=ur(),n=Mo(e);Oo(e,n,t),Ey(e,n)}};M5=function(e,t){return t()};nv=function(e,t,n){switch(t){case"input":if(X0(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=xp(r);if(!i)throw Error(ie(90));h5(r),X0(r,i)}}}break;case"textarea":g5(e,n);break;case"select":t=n.value,t!=null&&Ra(e,!!n.multiple,t,!1)}};G1=M4;_5=function(e,t,n,r,i){var o=Me;Me|=4;try{return Os(98,e.bind(null,t,n,r,i))}finally{Me=o,Me===0&&(ul(),_i())}};q1=function(){(Me&49)===0&&(m6(),Xo())};S5=function(e,t){var n=Me;Me|=2;try{return e(t)}finally{Me=n,Me===0&&(ul(),_i())}};function I4(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!$u(t))throw Error(ie(200));return M6(e,t,null,n)}var T6={Events:[Au,Sa,xp,b5,w5,Xo,{current:!1}]},oc={findFiberByHostInstance:bs,bundleType:0,version:"17.0.2",rendererPackageName:"react-dom"},A6={bundleType:oc.bundleType,version:oc.version,rendererPackageName:oc.rendererPackageName,rendererConfig:oc.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:zs.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=C5(e),e===null?null:e.stateNode},findFiberByHostInstance:oc.findFiberByHostInstance||O6,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var uf=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!uf.isDisabled&&uf.supportsFiber)try{ly=uf.inject(A6),Cs=uf}catch{}}Ir.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T6;Ir.createPortal=I4;Ir.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(ie(188)):Error(ie(268,Object.keys(e)));return e=C5(t),e=e===null?null:e.stateNode,e};Ir.flushSync=function(e,t){var n=Me;if((n&48)!==0)return e(t);Me|=1;try{if(e)return Os(99,e.bind(null,t))}finally{Me=n,_i()}};Ir.hydrate=function(e,t,n){if(!$u(t))throw Error(ie(200));return kp(null,e,t,!0,n)};Ir.render=function(e,t,n){if(!$u(t))throw Error(ie(200));return kp(null,e,t,!1,n)};Ir.unmountComponentAtNode=function(e){if(!$u(e))throw Error(ie(40));return e._reactRootContainer?(O4(function(){kp(null,null,e,!1,function(){e._reactRootContainer=null,e[al]=null})}),!0):!1};Ir.unstable_batchedUpdates=M4;Ir.unstable_createPortal=function(e,t){return I4(e,t,2<arguments.length&&arguments[2]!==void 0?arguments[2]:null)};Ir.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!$u(n))throw Error(ie(200));if(e==null||e._reactInternals===void 0)throw Error(ie(38));return kp(e,t,n,!1,r)};Ir.version="17.0.2";function D4(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(D4)}catch(e){console.error(e)}}D4(),up.exports=Ir;var z4=up.exports,N6=KC({__proto__:null,default:z4},[up.exports]);/**
 * @remix-run/router v1.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function uu(){return uu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},uu.apply(this,arguments)}var vo;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(vo||(vo={}));const D_="popstate";function L6(e){e===void 0&&(e={});function t(i,o){let{pathname:s="/",search:l="",hash:c=""}=js(i.location.hash.substr(1));return!s.startsWith("/")&&!s.startsWith(".")&&(s="/"+s),Av("",{pathname:s,search:l,hash:c},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(i,o){let s=i.document.querySelector("base"),l="";if(s&&s.getAttribute("href")){let c=i.location.href,d=c.indexOf("#");l=d===-1?c:c.slice(0,d)}return l+"#"+(typeof o=="string"?o:Dh(o))}function r(i,o){Oy(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(o)+")")}return I6(t,n,r,e)}function Vt(e,t){if(e===!1||e===null||typeof e=="undefined")throw new Error(t)}function Oy(e,t){if(!e){typeof console!="undefined"&&console.warn(t);try{throw new Error(t)}catch{}}}function $6(){return Math.random().toString(36).substr(2,8)}function z_(e,t){return{usr:e.state,key:e.key,idx:t}}function Av(e,t,n,r){return n===void 0&&(n=null),uu({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?js(t):t,{state:n,key:t&&t.key||r||$6()})}function Dh(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function js(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function I6(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,l=vo.Pop,c=null,d=f();d==null&&(d=0,s.replaceState(uu({},s.state,{idx:d}),""));function f(){return(s.state||{idx:null}).idx}function g(){l=vo.Pop;let v=f(),b=v==null?null:v-d;d=v,c&&c({action:l,location:_.location,delta:b})}function m(v,b){l=vo.Push;let S=Av(_.location,v,b);n&&n(S,v),d=f()+1;let C=z_(S,d),E=_.createHref(S);try{s.pushState(C,"",E)}catch(T){if(T instanceof DOMException&&T.name==="DataCloneError")throw T;i.location.assign(E)}o&&c&&c({action:l,location:_.location,delta:1})}function x(v,b){l=vo.Replace;let S=Av(_.location,v,b);n&&n(S,v),d=f();let C=z_(S,d),E=_.createHref(S);s.replaceState(C,"",E),o&&c&&c({action:l,location:_.location,delta:0})}function w(v){let b=i.location.origin!=="null"?i.location.origin:i.location.href,S=typeof v=="string"?v:Dh(v);return S=S.replace(/ $/,"%20"),Vt(b,"No window.location.(origin|href) available to create URL for href: "+S),new URL(S,b)}let _={get action(){return l},get location(){return e(i,s)},listen(v){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(D_,g),c=v,()=>{i.removeEventListener(D_,g),c=null}},createHref(v){return t(i,v)},createURL:w,encodeLocation(v){let b=w(v);return{pathname:b.pathname,search:b.search,hash:b.hash}},push:m,replace:x,go(v){return s.go(v)}};return _}var F_;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(F_||(F_={}));function D6(e,t,n){return n===void 0&&(n="/"),z6(e,t,n,!1)}function z6(e,t,n,r){let i=typeof t=="string"?js(t):t,o=Ry(i.pathname||"/",n);if(o==null)return null;let s=F4(e);F6(s);let l=null;for(let c=0;l==null&&c<s.length;++c){let d=q6(o);l=X6(s[c],d,r)}return l}function F4(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,l)=>{let c={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};c.relativePath.startsWith("/")&&(Vt(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let d=To([r,c.relativePath]),f=n.concat(c);o.children&&o.children.length>0&&(Vt(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),F4(o.children,t,f,d)),!(o.path==null&&!o.index)&&t.push({path:d,score:Y6(d,o.index),routesMeta:f})};return e.forEach((o,s)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))i(o,s);else for(let c of B4(o.path))i(o,s,c)}),t}function B4(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=B4(r.join("/")),l=[];return l.push(...s.map(c=>c===""?o:[o,c].join("/"))),i&&l.push(...s),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function F6(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:K6(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const B6=/^:[\w-]+$/,j6=3,W6=2,H6=1,V6=10,U6=-2,B_=e=>e==="*";function Y6(e,t){let n=e.split("/"),r=n.length;return n.some(B_)&&(r+=U6),t&&(r+=W6),n.filter(i=>!B_(i)).reduce((i,o)=>i+(B6.test(o)?j6:o===""?H6:V6),r)}function K6(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function X6(e,t,n){n===void 0&&(n=!1);let{routesMeta:r}=e,i={},o="/",s=[];for(let l=0;l<r.length;++l){let c=r[l],d=l===r.length-1,f=o==="/"?t:t.slice(o.length)||"/",g=j_({path:c.relativePath,caseSensitive:c.caseSensitive,end:d},f),m=c.route;if(!g&&d&&n&&!r[r.length-1].route.index&&(g=j_({path:c.relativePath,caseSensitive:c.caseSensitive,end:!1},f)),!g)return null;Object.assign(i,g.params),s.push({params:i,pathname:To([o,g.pathname]),pathnameBase:e8(To([o,g.pathnameBase])),route:m}),g.pathnameBase!=="/"&&(o=To([o,g.pathnameBase]))}return s}function j_(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=G6(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((d,f,g)=>{let{paramName:m,isOptional:x}=f;if(m==="*"){let _=l[g]||"";s=o.slice(0,o.length-_.length).replace(/(.)\/+$/,"$1")}const w=l[g];return x&&!w?d[m]=void 0:d[m]=(w||"").replace(/%2F/g,"/"),d},{}),pathname:o,pathnameBase:s,pattern:e}}function G6(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Oy(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,l,c)=>(r.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function q6(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Oy(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Ry(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Z6(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?js(e):e;return{pathname:n?n.startsWith("/")?n:Q6(n,t):t,search:t8(r),hash:n8(i)}}function Q6(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function h0(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function J6(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Ty(e,t){let n=J6(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Ay(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=js(e):(i=uu({},e),Vt(!i.pathname||!i.pathname.includes("?"),h0("?","pathname","search",i)),Vt(!i.pathname||!i.pathname.includes("#"),h0("#","pathname","hash",i)),Vt(!i.search||!i.search.includes("#"),h0("#","search","hash",i)));let o=e===""||i.pathname==="",s=o?"/":i.pathname,l;if(s==null)l=n;else{let g=t.length-1;if(!r&&s.startsWith("..")){let m=s.split("/");for(;m[0]==="..";)m.shift(),g-=1;i.pathname=m.join("/")}l=g>=0?t[g]:"/"}let c=Z6(i,l),d=s&&s!=="/"&&s.endsWith("/"),f=(o||s===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(d||f)&&(c.pathname+="/"),c}const To=e=>e.join("/").replace(/\/\/+/g,"/"),e8=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),t8=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,n8=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function r8(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const i8=["post","put","patch","delete"];[...i8];/**
 * React Router v6.25.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function du(){return du=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},du.apply(this,arguments)}const Ny=R.exports.createContext(null),o8=R.exports.createContext(null),Go=R.exports.createContext(null),Cp=R.exports.createContext(null),Si=R.exports.createContext({outlet:null,matches:[],isDataRoute:!1}),j4=R.exports.createContext(null);function s8(e,t){let{relative:n}=t===void 0?{}:t;dl()||Vt(!1);let{basename:r,navigator:i}=R.exports.useContext(Go),{hash:o,pathname:s,search:l}=H4(e,{relative:n}),c=s;return r!=="/"&&(c=s==="/"?r:To([r,s])),i.createHref({pathname:c,search:l,hash:o})}function dl(){return R.exports.useContext(Cp)!=null}function pr(){return dl()||Vt(!1),R.exports.useContext(Cp).location}function W4(e){R.exports.useContext(Go).static||R.exports.useLayoutEffect(e)}function qo(){let{isDataRoute:e}=R.exports.useContext(Si);return e?_8():a8()}function a8(){dl()||Vt(!1);let e=R.exports.useContext(Ny),{basename:t,future:n,navigator:r}=R.exports.useContext(Go),{matches:i}=R.exports.useContext(Si),{pathname:o}=pr(),s=JSON.stringify(Ty(i,n.v7_relativeSplatPath)),l=R.exports.useRef(!1);return W4(()=>{l.current=!0}),R.exports.useCallback(function(d,f){if(f===void 0&&(f={}),!l.current)return;if(typeof d=="number"){r.go(d);return}let g=Ay(d,JSON.parse(s),o,f.relative==="path");e==null&&t!=="/"&&(g.pathname=g.pathname==="/"?t:To([t,g.pathname])),(f.replace?r.replace:r.push)(g,f.state,f)},[t,r,s,o,e])}const l8=R.exports.createContext(null);function c8(e){let t=R.exports.useContext(Si).outlet;return t&&R.exports.createElement(l8.Provider,{value:e},t)}function u8(){let{matches:e}=R.exports.useContext(Si),t=e[e.length-1];return t?t.params:{}}function H4(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=R.exports.useContext(Go),{matches:i}=R.exports.useContext(Si),{pathname:o}=pr(),s=JSON.stringify(Ty(i,r.v7_relativeSplatPath));return R.exports.useMemo(()=>Ay(e,JSON.parse(s),o,n==="path"),[e,s,o,n])}function d8(e,t){return f8(e,t)}function f8(e,t,n,r){dl()||Vt(!1);let{navigator:i}=R.exports.useContext(Go),{matches:o}=R.exports.useContext(Si),s=o[o.length-1],l=s?s.params:{};s&&s.pathname;let c=s?s.pathnameBase:"/";s&&s.route;let d=pr(),f;if(t){var g;let v=typeof t=="string"?js(t):t;c==="/"||((g=v.pathname)==null?void 0:g.startsWith(c))||Vt(!1),f=v}else f=d;let m=f.pathname||"/",x=m;if(c!=="/"){let v=c.replace(/^\//,"").split("/"),b=m.replace(/^\//,"").split("/");x="/"+b.slice(v.length).join("/")}let w=D6(e,{pathname:x}),_=v8(w&&w.map(v=>Object.assign({},v,{params:Object.assign({},l,v.params),pathname:To([c,i.encodeLocation?i.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?c:To([c,i.encodeLocation?i.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),o,n,r);return t&&_?R.exports.createElement(Cp.Provider,{value:{location:du({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:vo.Pop}},_):_}function h8(){let e=w8(),t=r8(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return R.exports.createElement(R.exports.Fragment,null,R.exports.createElement("h2",null,"Unexpected Application Error!"),R.exports.createElement("h3",{style:{fontStyle:"italic"}},t),n?R.exports.createElement("pre",{style:i},n):null,o)}const p8=R.exports.createElement(h8,null);class g8 extends R.exports.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?R.exports.createElement(Si.Provider,{value:this.props.routeContext},R.exports.createElement(j4.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function m8(e){let{routeContext:t,match:n,children:r}=e,i=R.exports.useContext(Ny);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),R.exports.createElement(Si.Provider,{value:t},r)}function v8(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if((o=n)!=null&&o.errors)e=n.matches;else return null}let s=e,l=(i=n)==null?void 0:i.errors;if(l!=null){let f=s.findIndex(g=>g.route.id&&(l==null?void 0:l[g.route.id])!==void 0);f>=0||Vt(!1),s=s.slice(0,Math.min(s.length,f+1))}let c=!1,d=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<s.length;f++){let g=s[f];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(d=f),g.route.id){let{loaderData:m,errors:x}=n,w=g.route.loader&&m[g.route.id]===void 0&&(!x||x[g.route.id]===void 0);if(g.route.lazy||w){c=!0,d>=0?s=s.slice(0,d+1):s=[s[0]];break}}}return s.reduceRight((f,g,m)=>{let x,w=!1,_=null,v=null;n&&(x=l&&g.route.id?l[g.route.id]:void 0,_=g.route.errorElement||p8,c&&(d<0&&m===0?(S8("route-fallback",!1),w=!0,v=null):d===m&&(w=!0,v=g.route.hydrateFallbackElement||null)));let b=t.concat(s.slice(0,m+1)),S=()=>{let C;return x?C=_:w?C=v:g.route.Component?C=R.exports.createElement(g.route.Component,null):g.route.element?C=g.route.element:C=f,R.exports.createElement(m8,{match:g,routeContext:{outlet:f,matches:b,isDataRoute:n!=null},children:C})};return n&&(g.route.ErrorBoundary||g.route.errorElement||m===0)?R.exports.createElement(g8,{location:n.location,revalidation:n.revalidation,component:_,error:x,children:S(),routeContext:{outlet:null,matches:b,isDataRoute:!0}}):S()},null)}var V4=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(V4||{}),zh=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(zh||{});function y8(e){let t=R.exports.useContext(Ny);return t||Vt(!1),t}function x8(e){let t=R.exports.useContext(o8);return t||Vt(!1),t}function b8(e){let t=R.exports.useContext(Si);return t||Vt(!1),t}function U4(e){let t=b8(),n=t.matches[t.matches.length-1];return n.route.id||Vt(!1),n.route.id}function w8(){var e;let t=R.exports.useContext(j4),n=x8(zh.UseRouteError),r=U4(zh.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function _8(){let{router:e}=y8(V4.UseNavigateStable),t=U4(zh.UseNavigateStable),n=R.exports.useRef(!1);return W4(()=>{n.current=!0}),R.exports.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,du({fromRouteId:t},o)))},[e,t])}const W_={};function S8(e,t,n){!t&&!W_[e]&&(W_[e]=!0)}const k8="startTransition";Gc[k8];function C8(e){let{to:t,replace:n,state:r,relative:i}=e;dl()||Vt(!1);let{future:o,static:s}=R.exports.useContext(Go),{matches:l}=R.exports.useContext(Si),{pathname:c}=pr(),d=qo(),f=Ay(t,Ty(l,o.v7_relativeSplatPath),c,i==="path"),g=JSON.stringify(f);return R.exports.useEffect(()=>d(JSON.parse(g),{replace:n,state:r,relative:i}),[d,g,i,n,r]),null}function Pp(e){return c8(e.context)}function qe(e){Vt(!1)}function P8(e){let{basename:t="/",children:n=null,location:r,navigationType:i=vo.Pop,navigator:o,static:s=!1,future:l}=e;dl()&&Vt(!1);let c=t.replace(/^\/*/,"/"),d=R.exports.useMemo(()=>({basename:c,navigator:o,static:s,future:du({v7_relativeSplatPath:!1},l)}),[c,l,o,s]);typeof r=="string"&&(r=js(r));let{pathname:f="/",search:g="",hash:m="",state:x=null,key:w="default"}=r,_=R.exports.useMemo(()=>{let v=Ry(f,c);return v==null?null:{location:{pathname:v,search:g,hash:m,state:x,key:w},navigationType:i}},[c,f,g,m,x,w,i]);return _==null?null:R.exports.createElement(Go.Provider,{value:d},R.exports.createElement(Cp.Provider,{children:n,value:_}))}function E8(e){let{children:t,location:n}=e;return d8(Nv(t),n)}new Promise(()=>{});function Nv(e,t){t===void 0&&(t=[]);let n=[];return R.exports.Children.forEach(e,(r,i)=>{if(!R.exports.isValidElement(r))return;let o=[...t,i];if(r.type===R.exports.Fragment){n.push.apply(n,Nv(r.props.children,o));return}r.type!==qe&&Vt(!1),!r.props.index||!r.props.children||Vt(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=Nv(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.25.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Lv(){return Lv=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Lv.apply(this,arguments)}function M8(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function O8(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function R8(e,t){return e.button===0&&(!t||t==="_self")&&!O8(e)}const T8=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],A8="6";try{window.__reactRouterVersion=A8}catch{}const N8="startTransition",H_=Gc[N8],L8="flushSync";N6[L8];const $8="useId";Gc[$8];function I8(e){let{basename:t,children:n,future:r,window:i}=e,o=R.exports.useRef();o.current==null&&(o.current=L6({window:i,v5Compat:!0}));let s=o.current,[l,c]=R.exports.useState({action:s.action,location:s.location}),{v7_startTransition:d}=r||{},f=R.exports.useCallback(g=>{d&&H_?H_(()=>c(g)):c(g)},[c,d]);return R.exports.useLayoutEffect(()=>s.listen(f),[s,f]),R.exports.createElement(P8,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:s,future:r})}const D8=typeof window!="undefined"&&typeof window.document!="undefined"&&typeof window.document.createElement!="undefined",z8=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ft=R.exports.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:s,state:l,target:c,to:d,preventScrollReset:f,unstable_viewTransition:g}=t,m=M8(t,T8),{basename:x}=R.exports.useContext(Go),w,_=!1;if(typeof d=="string"&&z8.test(d)&&(w=d,D8))try{let C=new URL(window.location.href),E=d.startsWith("//")?new URL(C.protocol+d):new URL(d),T=Ry(E.pathname,x);E.origin===C.origin&&T!=null?d=T+E.search+E.hash:_=!0}catch{}let v=s8(d,{relative:i}),b=F8(d,{replace:s,state:l,target:c,preventScrollReset:f,relative:i,unstable_viewTransition:g});function S(C){r&&r(C),C.defaultPrevented||b(C)}return R.exports.createElement("a",Lv({},m,{href:w||v,onClick:_||o?r:S,ref:n,target:c}))});var V_;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(V_||(V_={}));var U_;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(U_||(U_={}));function F8(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:s,unstable_viewTransition:l}=t===void 0?{}:t,c=qo(),d=pr(),f=H4(e,{relative:s});return R.exports.useCallback(g=>{if(R8(g,n)){g.preventDefault();let m=r!==void 0?r:Dh(d)===Dh(f);c(e,{replace:m,state:i,preventScrollReset:o,relative:s,unstable_viewTransition:l})}},[d,c,f,r,i,n,e,o,s,l])}var Ly={exports:{}},ht={};/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ep=60103,Mp=60106,Iu=60107,Du=60108,zu=60114,Fu=60109,Bu=60110,ju=60112,Wu=60113,$y=60120,Hu=60115,Vu=60116,Y4=60121,K4=60122,X4=60117,G4=60129,q4=60131;if(typeof Symbol=="function"&&Symbol.for){var dn=Symbol.for;Ep=dn("react.element"),Mp=dn("react.portal"),Iu=dn("react.fragment"),Du=dn("react.strict_mode"),zu=dn("react.profiler"),Fu=dn("react.provider"),Bu=dn("react.context"),ju=dn("react.forward_ref"),Wu=dn("react.suspense"),$y=dn("react.suspense_list"),Hu=dn("react.memo"),Vu=dn("react.lazy"),Y4=dn("react.block"),K4=dn("react.server.block"),X4=dn("react.fundamental"),G4=dn("react.debug_trace_mode"),q4=dn("react.legacy_hidden")}function ei(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Ep:switch(e=e.type,e){case Iu:case zu:case Du:case Wu:case $y:return e;default:switch(e=e&&e.$$typeof,e){case Bu:case ju:case Vu:case Hu:case Fu:return e;default:return t}}case Mp:return t}}}var B8=Fu,j8=Ep,W8=ju,H8=Iu,V8=Vu,U8=Hu,Y8=Mp,K8=zu,X8=Du,G8=Wu;ht.ContextConsumer=Bu;ht.ContextProvider=B8;ht.Element=j8;ht.ForwardRef=W8;ht.Fragment=H8;ht.Lazy=V8;ht.Memo=U8;ht.Portal=Y8;ht.Profiler=K8;ht.StrictMode=X8;ht.Suspense=G8;ht.isAsyncMode=function(){return!1};ht.isConcurrentMode=function(){return!1};ht.isContextConsumer=function(e){return ei(e)===Bu};ht.isContextProvider=function(e){return ei(e)===Fu};ht.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ep};ht.isForwardRef=function(e){return ei(e)===ju};ht.isFragment=function(e){return ei(e)===Iu};ht.isLazy=function(e){return ei(e)===Vu};ht.isMemo=function(e){return ei(e)===Hu};ht.isPortal=function(e){return ei(e)===Mp};ht.isProfiler=function(e){return ei(e)===zu};ht.isStrictMode=function(e){return ei(e)===Du};ht.isSuspense=function(e){return ei(e)===Wu};ht.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Iu||e===zu||e===G4||e===Du||e===Wu||e===$y||e===q4||typeof e=="object"&&e!==null&&(e.$$typeof===Vu||e.$$typeof===Hu||e.$$typeof===Fu||e.$$typeof===Bu||e.$$typeof===ju||e.$$typeof===X4||e.$$typeof===Y4||e[0]===K4)};ht.typeOf=ei;Ly.exports=ht;function q8(e){function t(U,V,X,se,F){for(var Ee=0,J=0,Se=0,ze=0,Le,be,Je=0,ke=0,pe,et=pe=Le=0,we=0,Xe=0,er=0,Oe=0,ut=X.length,ln=ut-1,Mt,xe="",We="",Fr="",tn="",ee;we<ut;){if(be=X.charCodeAt(we),we===ln&&J+ze+Se+Ee!==0&&(J!==0&&(be=J===47?10:47),ze=Se=Ee=0,ut++,ln++),J+ze+Se+Ee===0){if(we===ln&&(0<Xe&&(xe=xe.replace(m,"")),0<xe.trim().length)){switch(be){case 32:case 9:case 59:case 13:case 10:break;default:xe+=X.charAt(we)}be=59}switch(be){case 123:for(xe=xe.trim(),Le=xe.charCodeAt(0),pe=1,Oe=++we;we<ut;){switch(be=X.charCodeAt(we)){case 123:pe++;break;case 125:pe--;break;case 47:switch(be=X.charCodeAt(we+1)){case 42:case 47:e:{for(et=we+1;et<ln;++et)switch(X.charCodeAt(et)){case 47:if(be===42&&X.charCodeAt(et-1)===42&&we+2!==et){we=et+1;break e}break;case 10:if(be===47){we=et+1;break e}}we=et}}break;case 91:be++;case 40:be++;case 34:case 39:for(;we++<ln&&X.charCodeAt(we)!==be;);}if(pe===0)break;we++}switch(pe=X.substring(Oe,we),Le===0&&(Le=(xe=xe.replace(g,"").trim()).charCodeAt(0)),Le){case 64:switch(0<Xe&&(xe=xe.replace(m,"")),be=xe.charCodeAt(1),be){case 100:case 109:case 115:case 45:Xe=V;break;default:Xe=ge}if(pe=t(V,Xe,pe,be,F+1),Oe=pe.length,0<de&&(Xe=n(ge,xe,er),ee=l(3,pe,Xe,V,ae,te,Oe,be,F,se),xe=Xe.join(""),ee!==void 0&&(Oe=(pe=ee.trim()).length)===0&&(be=0,pe="")),0<Oe)switch(be){case 115:xe=xe.replace(N,s);case 100:case 109:case 45:pe=xe+"{"+pe+"}";break;case 107:xe=xe.replace(S,"$1 $2"),pe=xe+"{"+pe+"}",pe=oe===1||oe===2&&o("@"+pe,3)?"@-webkit-"+pe+"@"+pe:"@"+pe;break;default:pe=xe+pe,se===112&&(pe=(We+=pe,""))}else pe="";break;default:pe=t(V,n(V,xe,er),pe,se,F+1)}Fr+=pe,pe=er=Xe=et=Le=0,xe="",be=X.charCodeAt(++we);break;case 125:case 59:if(xe=(0<Xe?xe.replace(m,""):xe).trim(),1<(Oe=xe.length))switch(et===0&&(Le=xe.charCodeAt(0),Le===45||96<Le&&123>Le)&&(Oe=(xe=xe.replace(" ",":")).length),0<de&&(ee=l(1,xe,V,U,ae,te,We.length,se,F,se))!==void 0&&(Oe=(xe=ee.trim()).length)===0&&(xe="\0\0"),Le=xe.charCodeAt(0),be=xe.charCodeAt(1),Le){case 0:break;case 64:if(be===105||be===99){tn+=xe+X.charAt(we);break}default:xe.charCodeAt(Oe-1)!==58&&(We+=i(xe,Le,be,xe.charCodeAt(2)))}er=Xe=et=Le=0,xe="",be=X.charCodeAt(++we)}}switch(be){case 13:case 10:J===47?J=0:1+Le===0&&se!==107&&0<xe.length&&(Xe=1,xe+="\0"),0<de*ct&&l(0,xe,V,U,ae,te,We.length,se,F,se),te=1,ae++;break;case 59:case 125:if(J+ze+Se+Ee===0){te++;break}default:switch(te++,Mt=X.charAt(we),be){case 9:case 32:if(ze+Ee+J===0)switch(Je){case 44:case 58:case 9:case 32:Mt="";break;default:be!==32&&(Mt=" ")}break;case 0:Mt="\\0";break;case 12:Mt="\\f";break;case 11:Mt="\\v";break;case 38:ze+J+Ee===0&&(Xe=er=1,Mt="\f"+Mt);break;case 108:if(ze+J+Ee+ye===0&&0<et)switch(we-et){case 2:Je===112&&X.charCodeAt(we-3)===58&&(ye=Je);case 8:ke===111&&(ye=ke)}break;case 58:ze+J+Ee===0&&(et=we);break;case 44:J+Se+ze+Ee===0&&(Xe=1,Mt+="\r");break;case 34:case 39:J===0&&(ze=ze===be?0:ze===0?be:ze);break;case 91:ze+J+Se===0&&Ee++;break;case 93:ze+J+Se===0&&Ee--;break;case 41:ze+J+Ee===0&&Se--;break;case 40:if(ze+J+Ee===0){if(Le===0)switch(2*Je+3*ke){case 533:break;default:Le=1}Se++}break;case 64:J+Se+ze+Ee+et+pe===0&&(pe=1);break;case 42:case 47:if(!(0<ze+Ee+Se))switch(J){case 0:switch(2*be+3*X.charCodeAt(we+1)){case 235:J=47;break;case 220:Oe=we,J=42}break;case 42:be===47&&Je===42&&Oe+2!==we&&(X.charCodeAt(Oe+2)===33&&(We+=X.substring(Oe,we+1)),Mt="",J=0)}}J===0&&(xe+=Mt)}ke=Je,Je=be,we++}if(Oe=We.length,0<Oe){if(Xe=V,0<de&&(ee=l(2,We,Xe,U,ae,te,Oe,se,F,se),ee!==void 0&&(We=ee).length===0))return tn+We+Fr;if(We=Xe.join(",")+"{"+We+"}",oe*ye!==0){switch(oe!==2||o(We,2)||(ye=0),ye){case 111:We=We.replace(E,":-moz-$1")+We;break;case 112:We=We.replace(C,"::-webkit-input-$1")+We.replace(C,"::-moz-$1")+We.replace(C,":-ms-input-$1")+We}ye=0}}return tn+We+Fr}function n(U,V,X){var se=V.trim().split(v);V=se;var F=se.length,Ee=U.length;switch(Ee){case 0:case 1:var J=0;for(U=Ee===0?"":U[0]+" ";J<F;++J)V[J]=r(U,V[J],X).trim();break;default:var Se=J=0;for(V=[];J<F;++J)for(var ze=0;ze<Ee;++ze)V[Se++]=r(U[ze]+" ",se[J],X).trim()}return V}function r(U,V,X){var se=V.charCodeAt(0);switch(33>se&&(se=(V=V.trim()).charCodeAt(0)),se){case 38:return V.replace(b,"$1"+U.trim());case 58:return U.trim()+V.replace(b,"$1"+U.trim());default:if(0<1*X&&0<V.indexOf("\f"))return V.replace(b,(U.charCodeAt(0)===58?"":"$1")+U.trim())}return U+V}function i(U,V,X,se){var F=U+";",Ee=2*V+3*X+4*se;if(Ee===944){U=F.indexOf(":",9)+1;var J=F.substring(U,F.length-1).trim();return J=F.substring(0,U).trim()+J+";",oe===1||oe===2&&o(J,1)?"-webkit-"+J+J:J}if(oe===0||oe===2&&!o(F,1))return F;switch(Ee){case 1015:return F.charCodeAt(10)===97?"-webkit-"+F+F:F;case 951:return F.charCodeAt(3)===116?"-webkit-"+F+F:F;case 963:return F.charCodeAt(5)===110?"-webkit-"+F+F:F;case 1009:if(F.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+F+F;case 978:return"-webkit-"+F+"-moz-"+F+F;case 1019:case 983:return"-webkit-"+F+"-moz-"+F+"-ms-"+F+F;case 883:if(F.charCodeAt(8)===45)return"-webkit-"+F+F;if(0<F.indexOf("image-set(",11))return F.replace(Q,"$1-webkit-$2")+F;break;case 932:if(F.charCodeAt(4)===45)switch(F.charCodeAt(5)){case 103:return"-webkit-box-"+F.replace("-grow","")+"-webkit-"+F+"-ms-"+F.replace("grow","positive")+F;case 115:return"-webkit-"+F+"-ms-"+F.replace("shrink","negative")+F;case 98:return"-webkit-"+F+"-ms-"+F.replace("basis","preferred-size")+F}return"-webkit-"+F+"-ms-"+F+F;case 964:return"-webkit-"+F+"-ms-flex-"+F+F;case 1023:if(F.charCodeAt(8)!==99)break;return J=F.substring(F.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+J+"-webkit-"+F+"-ms-flex-pack"+J+F;case 1005:return w.test(F)?F.replace(x,":-webkit-")+F.replace(x,":-moz-")+F:F;case 1e3:switch(J=F.substring(13).trim(),V=J.indexOf("-")+1,J.charCodeAt(0)+J.charCodeAt(V)){case 226:J=F.replace(T,"tb");break;case 232:J=F.replace(T,"tb-rl");break;case 220:J=F.replace(T,"lr");break;default:return F}return"-webkit-"+F+"-ms-"+J+F;case 1017:if(F.indexOf("sticky",9)===-1)break;case 975:switch(V=(F=U).length-10,J=(F.charCodeAt(V)===33?F.substring(0,V):F).substring(U.indexOf(":",7)+1).trim(),Ee=J.charCodeAt(0)+(J.charCodeAt(7)|0)){case 203:if(111>J.charCodeAt(8))break;case 115:F=F.replace(J,"-webkit-"+J)+";"+F;break;case 207:case 102:F=F.replace(J,"-webkit-"+(102<Ee?"inline-":"")+"box")+";"+F.replace(J,"-webkit-"+J)+";"+F.replace(J,"-ms-"+J+"box")+";"+F}return F+";";case 938:if(F.charCodeAt(5)===45)switch(F.charCodeAt(6)){case 105:return J=F.replace("-items",""),"-webkit-"+F+"-webkit-box-"+J+"-ms-flex-"+J+F;case 115:return"-webkit-"+F+"-ms-flex-item-"+F.replace(z,"")+F;default:return"-webkit-"+F+"-ms-flex-line-pack"+F.replace("align-content","").replace(z,"")+F}break;case 973:case 989:if(F.charCodeAt(3)!==45||F.charCodeAt(4)===122)break;case 931:case 953:if(H.test(U)===!0)return(J=U.substring(U.indexOf(":")+1)).charCodeAt(0)===115?i(U.replace("stretch","fill-available"),V,X,se).replace(":fill-available",":stretch"):F.replace(J,"-webkit-"+J)+F.replace(J,"-moz-"+J.replace("fill-",""))+F;break;case 962:if(F="-webkit-"+F+(F.charCodeAt(5)===102?"-ms-"+F:"")+F,X+se===211&&F.charCodeAt(13)===105&&0<F.indexOf("transform",10))return F.substring(0,F.indexOf(";",27)+1).replace(_,"$1-webkit-$2")+F}return F}function o(U,V){var X=U.indexOf(V===1?":":"{"),se=U.substring(0,V!==3?X:10);return X=U.substring(X+1,U.length-1),Ue(V!==2?se:se.replace(B,"$1"),X,V)}function s(U,V){var X=i(V,V.charCodeAt(0),V.charCodeAt(1),V.charCodeAt(2));return X!==V+";"?X.replace(L," or ($1)").substring(4):"("+V+")"}function l(U,V,X,se,F,Ee,J,Se,ze,Le){for(var be=0,Je=V,ke;be<de;++be)switch(ke=re[be].call(f,U,Je,X,se,F,Ee,J,Se,ze,Le)){case void 0:case!1:case!0:case null:break;default:Je=ke}if(Je!==V)return Je}function c(U){switch(U){case void 0:case null:de=re.length=0;break;default:if(typeof U=="function")re[de++]=U;else if(typeof U=="object")for(var V=0,X=U.length;V<X;++V)c(U[V]);else ct=!!U|0}return c}function d(U){return U=U.prefix,U!==void 0&&(Ue=null,U?typeof U!="function"?oe=1:(oe=2,Ue=U):oe=0),d}function f(U,V){var X=U;if(33>X.charCodeAt(0)&&(X=X.trim()),Z=X,X=[Z],0<de){var se=l(-1,V,X,X,ae,te,0,0,0,0);se!==void 0&&typeof se=="string"&&(V=se)}var F=t(ge,X,V,0,0);return 0<de&&(se=l(-2,F,X,X,ae,te,F.length,0,0,0),se!==void 0&&(F=se)),Z="",ye=0,te=ae=1,F}var g=/^\0+/g,m=/[\0\r\f]/g,x=/: */g,w=/zoo|gra/,_=/([,: ])(transform)/g,v=/,\r+?/g,b=/([\t\r\n ])*\f?&/g,S=/@(k\w+)\s*(\S*)\s*/,C=/::(place)/g,E=/:(read-only)/g,T=/[svh]\w+-[tblr]{2}/,N=/\(\s*(.*)\s*\)/g,L=/([\s\S]*?);/g,z=/-self|flex-/g,B=/[^]*?(:[rp][el]a[\w-]+)[^]*/,H=/stretch|:\s*\w+\-(?:conte|avail)/,Q=/([^-])(image-set\()/,te=1,ae=1,ye=0,oe=1,ge=[],re=[],de=0,Ue=null,ct=0,Z="";return f.use=c,f.set=d,e!==void 0&&d(e),f}var Z8={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Z4(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var Q8=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,$v=Z4(function(e){return Q8.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),Q4={exports:{}},at={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var an=typeof Symbol=="function"&&Symbol.for,Iy=an?Symbol.for("react.element"):60103,Dy=an?Symbol.for("react.portal"):60106,Op=an?Symbol.for("react.fragment"):60107,Rp=an?Symbol.for("react.strict_mode"):60108,Tp=an?Symbol.for("react.profiler"):60114,Ap=an?Symbol.for("react.provider"):60109,Np=an?Symbol.for("react.context"):60110,zy=an?Symbol.for("react.async_mode"):60111,Lp=an?Symbol.for("react.concurrent_mode"):60111,$p=an?Symbol.for("react.forward_ref"):60112,Ip=an?Symbol.for("react.suspense"):60113,J8=an?Symbol.for("react.suspense_list"):60120,Dp=an?Symbol.for("react.memo"):60115,zp=an?Symbol.for("react.lazy"):60116,eI=an?Symbol.for("react.block"):60121,tI=an?Symbol.for("react.fundamental"):60117,nI=an?Symbol.for("react.responder"):60118,rI=an?Symbol.for("react.scope"):60119;function gr(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Iy:switch(e=e.type,e){case zy:case Lp:case Op:case Tp:case Rp:case Ip:return e;default:switch(e=e&&e.$$typeof,e){case Np:case $p:case zp:case Dp:case Ap:return e;default:return t}}case Dy:return t}}}function J4(e){return gr(e)===Lp}at.AsyncMode=zy;at.ConcurrentMode=Lp;at.ContextConsumer=Np;at.ContextProvider=Ap;at.Element=Iy;at.ForwardRef=$p;at.Fragment=Op;at.Lazy=zp;at.Memo=Dp;at.Portal=Dy;at.Profiler=Tp;at.StrictMode=Rp;at.Suspense=Ip;at.isAsyncMode=function(e){return J4(e)||gr(e)===zy};at.isConcurrentMode=J4;at.isContextConsumer=function(e){return gr(e)===Np};at.isContextProvider=function(e){return gr(e)===Ap};at.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Iy};at.isForwardRef=function(e){return gr(e)===$p};at.isFragment=function(e){return gr(e)===Op};at.isLazy=function(e){return gr(e)===zp};at.isMemo=function(e){return gr(e)===Dp};at.isPortal=function(e){return gr(e)===Dy};at.isProfiler=function(e){return gr(e)===Tp};at.isStrictMode=function(e){return gr(e)===Rp};at.isSuspense=function(e){return gr(e)===Ip};at.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Op||e===Lp||e===Tp||e===Rp||e===Ip||e===J8||typeof e=="object"&&e!==null&&(e.$$typeof===zp||e.$$typeof===Dp||e.$$typeof===Ap||e.$$typeof===Np||e.$$typeof===$p||e.$$typeof===tI||e.$$typeof===nI||e.$$typeof===rI||e.$$typeof===eI)};at.typeOf=gr;Q4.exports=at;var Fy=Q4.exports,iI={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},oI={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},sI={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},e3={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},By={};By[Fy.ForwardRef]=sI;By[Fy.Memo]=e3;function Y_(e){return Fy.isMemo(e)?e3:By[e.$$typeof]||iI}var aI=Object.defineProperty,lI=Object.getOwnPropertyNames,K_=Object.getOwnPropertySymbols,cI=Object.getOwnPropertyDescriptor,uI=Object.getPrototypeOf,X_=Object.prototype;function t3(e,t,n){if(typeof t!="string"){if(X_){var r=uI(t);r&&r!==X_&&t3(e,r,n)}var i=lI(t);K_&&(i=i.concat(K_(t)));for(var o=Y_(e),s=Y_(t),l=0;l<i.length;++l){var c=i[l];if(!oI[c]&&!(n&&n[c])&&!(s&&s[c])&&!(o&&o[c])){var d=cI(t,c);try{aI(e,c,d)}catch{}}}}return e}var dI=t3;function qr(){return(qr=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var G_=function(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n},Iv=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!Ly.exports.typeOf(e)},Fh=Object.freeze([]),Ao=Object.freeze({});function Za(e){return typeof e=="function"}function q_(e){return e.displayName||e.name||"Component"}function jy(e){return e&&typeof e.styledComponentId=="string"}var Qa=typeof process!="undefined"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Wy=typeof window!="undefined"&&"HTMLElement"in window,fI=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process!="undefined"&&process.env!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""?{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY:!1)),hI={};function Ts(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var pI=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,o=i.length,s=o;n>=s;)(s<<=1)<0&&Ts(16,""+n);this.groupSizes=new Uint32Array(s),this.groupSizes.set(i),this.length=s;for(var l=o;l<s;l++)this.groupSizes[l]=0}for(var c=this.indexOfGroup(n+1),d=0,f=r.length;d<f;d++)this.tag.insertRule(c,r[d])&&(this.groupSizes[n]++,c++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),o=i+r;this.groupSizes[n]=0;for(var s=i;s<o;s++)this.tag.deleteRule(i)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],o=this.indexOfGroup(n),s=o+i,l=o;l<s;l++)r+=this.tag.getRule(l)+`/*!sc*/
`;return r},e}(),qf=new Map,Bh=new Map,Bc=1,df=function(e){if(qf.has(e))return qf.get(e);for(;Bh.has(Bc);)Bc++;var t=Bc++;return qf.set(e,t),Bh.set(t,e),t},gI=function(e){return Bh.get(e)},mI=function(e,t){t>=Bc&&(Bc=t+1),qf.set(e,t),Bh.set(t,e)},vI="style["+Qa+'][data-styled-version="5.3.11"]',yI=new RegExp("^"+Qa+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),xI=function(e,t,n){for(var r,i=n.split(","),o=0,s=i.length;o<s;o++)(r=i[o])&&e.registerName(t,r)},bI=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],i=0,o=n.length;i<o;i++){var s=n[i].trim();if(s){var l=s.match(yI);if(l){var c=0|parseInt(l[1],10),d=l[2];c!==0&&(mI(d,c),xI(e,d,l[3]),e.getTag().insertRules(c,r)),r.length=0}else r.push(s)}}},wI=function(){return typeof __webpack_nonce__!="undefined"?__webpack_nonce__:null},n3=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(l){for(var c=l.childNodes,d=c.length;d>=0;d--){var f=c[d];if(f&&f.nodeType===1&&f.hasAttribute(Qa))return f}}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Qa,"active"),r.setAttribute("data-styled-version","5.3.11");var s=wI();return s&&r.setAttribute("nonce",s),n.insertBefore(r,o),r},_I=function(){function e(n){var r=this.element=n3(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var o=document.styleSheets,s=0,l=o.length;s<l;s++){var c=o[s];if(c.ownerNode===i)return c}Ts(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),SI=function(){function e(n){var r=this.element=n3(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),o=this.nodes[n];return this.element.insertBefore(i,o||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),kI=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),Z_=Wy,CI={isServer:!Wy,useCSSOMInjection:!fI},jh=function(){function e(n,r,i){n===void 0&&(n=Ao),r===void 0&&(r={}),this.options=qr({},CI,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&Wy&&Z_&&(Z_=!1,function(o){for(var s=document.querySelectorAll(vI),l=0,c=s.length;l<c;l++){var d=s[l];d&&d.getAttribute(Qa)!=="active"&&(bI(o,d),d.parentNode&&d.parentNode.removeChild(d))}}(this))}e.registerId=function(n){return df(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(qr({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,o=r.useCSSOMInjection,s=r.target,n=i?new kI(s):o?new _I(s):new SI(s),new pI(n)));var n,r,i,o,s},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(df(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},t.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(df(n),i)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(df(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,o="",s=0;s<i;s++){var l=gI(s);if(l!==void 0){var c=n.names.get(l),d=r.getGroup(s);if(c&&d&&c.size){var f=Qa+".g"+s+'[id="'+l+'"]',g="";c!==void 0&&c.forEach(function(m){m.length>0&&(g+=m+",")}),o+=""+d+f+'{content:"'+g+`"}/*!sc*/
`}}}return o}(this)},e}(),PI=/(a)(d)/gi,Q_=function(e){return String.fromCharCode(e+(e>25?39:97))};function Dv(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Q_(t%52)+n;return(Q_(t%52)+n).replace(PI,"$1-$2")}var Pa=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},r3=function(e){return Pa(5381,e)};function i3(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Za(n)&&!jy(n))return!1}return!0}var EI=r3("5.3.11"),MI=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&i3(t),this.componentId=n,this.baseHash=Pa(EI,n),this.baseStyle=r,jh.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))o.push(this.staticRulesId);else{var s=As(this.rules,t,n,r).join(""),l=Dv(Pa(this.baseHash,s)>>>0);if(!n.hasNameForId(i,l)){var c=r(s,"."+l,void 0,i);n.insertRules(i,l,c)}o.push(l),this.staticRulesId=l}else{for(var d=this.rules.length,f=Pa(this.baseHash,r.hash),g="",m=0;m<d;m++){var x=this.rules[m];if(typeof x=="string")g+=x;else if(x){var w=As(x,t,n,r),_=Array.isArray(w)?w.join(""):w;f=Pa(f,_+m),g+=_}}if(g){var v=Dv(f>>>0);if(!n.hasNameForId(i,v)){var b=r(g,"."+v,void 0,i);n.insertRules(i,v,b)}o.push(v)}}return o.join(" ")},e}(),OI=/^\s*\/\/.*$/gm,RI=[":","[",".","#"];function TI(e){var t,n,r,i,o=e===void 0?Ao:e,s=o.options,l=s===void 0?Ao:s,c=o.plugins,d=c===void 0?Fh:c,f=new q8(l),g=[],m=function(_){function v(b){if(b)try{_(b+"}")}catch{}}return function(b,S,C,E,T,N,L,z,B,H){switch(b){case 1:if(B===0&&S.charCodeAt(0)===64)return _(S+";"),"";break;case 2:if(z===0)return S+"/*|*/";break;case 3:switch(z){case 102:case 112:return _(C[0]+S),"";default:return S+(H===0?"/*|*/":"")}case-2:S.split("/*|*/}").forEach(v)}}}(function(_){g.push(_)}),x=function(_,v,b){return v===0&&RI.indexOf(b[n.length])!==-1||b.match(i)?_:"."+t};function w(_,v,b,S){S===void 0&&(S="&");var C=_.replace(OI,""),E=v&&b?b+" "+v+" { "+C+" }":C;return t=S,n=v,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),f(b||!v?"":v,E)}return f.use([].concat(d,[function(_,v,b){_===2&&b.length&&b[0].lastIndexOf(n)>0&&(b[0]=b[0].replace(r,x))},m,function(_){if(_===-2){var v=g;return g=[],v}}])),w.hash=d.length?d.reduce(function(_,v){return v.name||Ts(15),Pa(_,v.name)},5381).toString():"",w}var o3=jt.createContext();o3.Consumer;var s3=jt.createContext(),AI=(s3.Consumer,new jh),zv=TI();function a3(){return R.exports.useContext(o3)||AI}function l3(){return R.exports.useContext(s3)||zv}var NI=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=zv);var s=r.name+o.hash;i.hasNameForId(r.id,s)||i.insertRules(r.id,s,o(r.rules,s,"@keyframes"))},this.toString=function(){return Ts(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=zv),this.name+t.hash},e}(),LI=/([A-Z])/,$I=/([A-Z])/g,II=/^ms-/,DI=function(e){return"-"+e.toLowerCase()};function J_(e){return LI.test(e)?e.replace($I,DI).replace(II,"-ms-"):e}var eS=function(e){return e==null||e===!1||e===""};function As(e,t,n,r){if(Array.isArray(e)){for(var i,o=[],s=0,l=e.length;s<l;s+=1)(i=As(e[s],t,n,r))!==""&&(Array.isArray(i)?o.push.apply(o,i):o.push(i));return o}if(eS(e))return"";if(jy(e))return"."+e.styledComponentId;if(Za(e)){if(typeof(d=e)!="function"||d.prototype&&d.prototype.isReactComponent||!t)return e;var c=e(t);return As(c,t,n,r)}var d;return e instanceof NI?n?(e.inject(n,r),e.getName(r)):e:Iv(e)?function f(g,m){var x,w,_=[];for(var v in g)g.hasOwnProperty(v)&&!eS(g[v])&&(Array.isArray(g[v])&&g[v].isCss||Za(g[v])?_.push(J_(v)+":",g[v],";"):Iv(g[v])?_.push.apply(_,f(g[v],v)):_.push(J_(v)+": "+(x=v,(w=g[v])==null||typeof w=="boolean"||w===""?"":typeof w!="number"||w===0||x in Z8||x.startsWith("--")?String(w).trim():w+"px")+";"));return m?[m+" {"].concat(_,["}"]):_}(e):e.toString()}var tS=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function Tn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return Za(e)||Iv(e)?tS(As(G_(Fh,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:tS(As(G_(e,n)))}var c3=function(e,t,n){return n===void 0&&(n=Ao),e.theme!==n.theme&&e.theme||t||n.theme},zI=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,FI=/(^-|-$)/g;function p0(e){return e.replace(zI,"-").replace(FI,"")}var u3=function(e){return Dv(r3(e)>>>0)};function ff(e){return typeof e=="string"&&!0}var Fv=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},BI=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function jI(e,t,n){var r=e[n];Fv(t)&&Fv(r)?d3(r,t):e[n]=t}function d3(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var i=0,o=n;i<o.length;i++){var s=o[i];if(Fv(s))for(var l in s)BI(l)&&jI(e,s[l],l)}return e}var fu=jt.createContext();fu.Consumer;function WI(e){var t=R.exports.useContext(fu),n=R.exports.useMemo(function(){return function(r,i){if(!r)return Ts(14);if(Za(r)){var o=r(i);return o}return Array.isArray(r)||typeof r!="object"?Ts(8):i?qr({},i,{},r):r}(e.theme,t)},[e.theme,t]);return e.children?jt.createElement(fu.Provider,{value:n},e.children):null}var g0={};function f3(e,t,n){var r=jy(e),i=!ff(e),o=t.attrs,s=o===void 0?Fh:o,l=t.componentId,c=l===void 0?function(S,C){var E=typeof S!="string"?"sc":p0(S);g0[E]=(g0[E]||0)+1;var T=E+"-"+u3("5.3.11"+E+g0[E]);return C?C+"-"+T:T}(t.displayName,t.parentComponentId):l,d=t.displayName,f=d===void 0?function(S){return ff(S)?"styled."+S:"Styled("+q_(S)+")"}(e):d,g=t.displayName&&t.componentId?p0(t.displayName)+"-"+t.componentId:t.componentId||c,m=r&&e.attrs?Array.prototype.concat(e.attrs,s).filter(Boolean):s,x=t.shouldForwardProp;r&&e.shouldForwardProp&&(x=t.shouldForwardProp?function(S,C,E){return e.shouldForwardProp(S,C,E)&&t.shouldForwardProp(S,C,E)}:e.shouldForwardProp);var w,_=new MI(n,g,r?e.componentStyle:void 0),v=_.isStatic&&s.length===0,b=function(S,C){return function(E,T,N,L){var z=E.attrs,B=E.componentStyle,H=E.defaultProps,Q=E.foldedComponentIds,te=E.shouldForwardProp,ae=E.styledComponentId,ye=E.target,oe=function(se,F,Ee){se===void 0&&(se=Ao);var J=qr({},F,{theme:se}),Se={};return Ee.forEach(function(ze){var Le,be,Je,ke=ze;for(Le in Za(ke)&&(ke=ke(J)),ke)J[Le]=Se[Le]=Le==="className"?(be=Se[Le],Je=ke[Le],be&&Je?be+" "+Je:be||Je):ke[Le]}),[J,Se]}(c3(T,R.exports.useContext(fu),H)||Ao,T,z),ge=oe[0],re=oe[1],de=function(se,F,Ee,J){var Se=a3(),ze=l3(),Le=F?se.generateAndInjectStyles(Ao,Se,ze):se.generateAndInjectStyles(Ee,Se,ze);return Le}(B,L,ge),Ue=N,ct=re.$as||T.$as||re.as||T.as||ye,Z=ff(ct),U=re!==T?qr({},T,{},re):T,V={};for(var X in U)X[0]!=="$"&&X!=="as"&&(X==="forwardedAs"?V.as=U[X]:(te?te(X,$v,ct):!Z||$v(X))&&(V[X]=U[X]));return T.style&&re.style!==T.style&&(V.style=qr({},T.style,{},re.style)),V.className=Array.prototype.concat(Q,ae,de!==ae?de:null,T.className,re.className).filter(Boolean).join(" "),V.ref=Ue,R.exports.createElement(ct,V)}(w,S,C,v)};return b.displayName=f,(w=jt.forwardRef(b)).attrs=m,w.componentStyle=_,w.displayName=f,w.shouldForwardProp=x,w.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):Fh,w.styledComponentId=g,w.target=r?e.target:e,w.withComponent=function(S){var C=t.componentId,E=function(N,L){if(N==null)return{};var z,B,H={},Q=Object.keys(N);for(B=0;B<Q.length;B++)z=Q[B],L.indexOf(z)>=0||(H[z]=N[z]);return H}(t,["componentId"]),T=C&&C+"-"+(ff(S)?S:p0(q_(S)));return f3(S,qr({},E,{attrs:m,componentId:T}),n)},Object.defineProperty(w,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(S){this._foldedDefaultProps=r?d3({},e.defaultProps,S):S}}),Object.defineProperty(w,"toString",{value:function(){return"."+w.styledComponentId}}),i&&dI(w,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),w}var Bv=function(e){return function t(n,r,i){if(i===void 0&&(i=Ao),!Ly.exports.isValidElementType(r))return Ts(1,String(r));var o=function(){return n(r,i,Tn.apply(void 0,arguments))};return o.withConfig=function(s){return t(n,r,qr({},i,{},s))},o.attrs=function(s){return t(n,r,qr({},i,{attrs:Array.prototype.concat(i.attrs,s).filter(Boolean)}))},o}(f3,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){Bv[e]=Bv(e)});var HI=function(){function e(n,r){this.rules=n,this.componentId=r,this.isStatic=i3(n),jh.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(n,r,i,o){var s=o(As(this.rules,r,i,o).join(""),""),l=this.componentId+n;i.insertRules(l,l,s)},t.removeStyles=function(n,r){r.clearRules(this.componentId+n)},t.renderStyles=function(n,r,i,o){n>2&&jh.registerId(this.componentId+n),this.removeStyles(n,i),this.createStyles(n,r,i,o)},e}();function VI(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=Tn.apply(void 0,[e].concat(n)),o="sc-global-"+u3(JSON.stringify(i)),s=new HI(i,o);function l(d){var f=a3(),g=l3(),m=R.exports.useContext(fu),x=R.exports.useRef(f.allocateGSInstance(o)).current;return f.server&&c(x,d,f,m,g),R.exports.useLayoutEffect(function(){if(!f.server)return c(x,d,f,m,g),function(){return s.removeStyles(x,f)}},[x,d,f,m,g]),null}function c(d,f,g,m,x){if(s.isStatic)s.renderStyles(d,hI,g,x);else{var w=qr({},f,{theme:c3(f,m,l.defaultProps)});s.renderStyles(d,w,g,x)}}return jt.memo(l)}var he=Bv;const UI=VI`

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
  padding: 9rem 1rem;
  background: ${e=>e.theme.body};
  color: ${e=>e.theme.text};
  // .nav { margin-bottom: 2rem; }
}
.mobile-container {
  padding: 2rem 1rem;
  // .nav { margin-bottom: 2rem; }
}
a {
  color: ${e=>e.theme.text};
}

.app {
  display: block;
  max-width: 140rem;
  margin: 0 auto;
}

.hide {
  display: none !important;
}

.navigation {
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 1.8rem;
  font-weight: 500;
}

.division {
  margin-bottom: 3rem;
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
      // padding: 2rem;
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
    // background: ${e=>e.theme.bodyDesktop};
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
`,YI={header:"#ffffff",headerDesktop:"#ffffff",body:"#ffffff",bodyDesktop:"#F7F7F8",sideBar:"#efeff1",color:"#9147ff",textColor:"#000",hover:"#0000001a",soft:"#777777",bits:"#e9e9e9",softDesktop:"#555555",border:"#efeff1",darkModeBg:"#dedede",iconColor:"#0e0e10",profit:"#0f0",loss:"#f00",lightText:"#b7b7b7"},KI={header:"#0e0e10",headerDesktop:"#18181B",body:"#000000",bodyDesktop:"#0e0e10",sideBar:"#1f1f23",color:"#9147ff",textColor:"#fcfaff",hover:"#ffffff1a",soft:"#adadb8",bits:"#333333",softDesktop:"#cdcdb8",border:"#ffffff1a",darkModeBg:"#9147ff",iconColor:"#adadb8",profit:"#0f0",loss:"#f00",lightText:"#b7b7b7"};var fl={exports:{}},XI="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",GI=XI,qI=GI;function h3(){}function p3(){}p3.resetWarningCache=h3;var ZI=function(){function e(r,i,o,s,l,c){if(c!==qI){var d=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw d.name="Invariant Violation",d}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:p3,resetWarningCache:h3};return n.PropTypes=n,n};fl.exports=ZI();var Wo=jt.createContext(null);function QI(e){e()}var g3=QI,JI=function(t){return g3=t},e7=function(){return g3};function t7(){var e=e7(),t=null,n=null;return{clear:function(){t=null,n=null},notify:function(){e(function(){for(var i=t;i;)i.callback(),i=i.next})},get:function(){for(var i=[],o=t;o;)i.push(o),o=o.next;return i},subscribe:function(i){var o=!0,s=n={callback:i,next:null,prev:n};return s.prev?s.prev.next=s:t=s,function(){!o||t===null||(o=!1,s.next?s.next.prev=s.prev:n=s.prev,s.prev?s.prev.next=s.next:t=s.next)}}}}var nS={notify:function(){},get:function(){return[]}};function m3(e,t){var n,r=nS;function i(g){return c(),r.subscribe(g)}function o(){r.notify()}function s(){f.onStateChange&&f.onStateChange()}function l(){return Boolean(n)}function c(){n||(n=t?t.addNestedSub(s):e.subscribe(s),r=t7())}function d(){n&&(n(),n=void 0,r.clear(),r=nS)}var f={addNestedSub:i,notifyNestedSubs:o,handleChangeWrapper:s,isSubscribed:l,trySubscribe:c,tryUnsubscribe:d,getListeners:function(){return r}};return f}var jv=typeof window!="undefined"&&typeof window.document!="undefined"&&typeof window.document.createElement!="undefined"?R.exports.useLayoutEffect:R.exports.useEffect,Fp={exports:{}},Uu={};/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n7=R.exports,v3=60103;Uu.Fragment=60107;if(typeof Symbol=="function"&&Symbol.for){var rS=Symbol.for;v3=rS("react.element"),Uu.Fragment=rS("react.fragment")}var r7=n7.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i7=Object.prototype.hasOwnProperty,o7={key:!0,ref:!0,__self:!0,__source:!0};function y3(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)i7.call(t,r)&&!o7.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:v3,type:e,key:o,ref:s,props:i,_owner:r7.current}}Uu.jsx=y3;Uu.jsxs=y3;Fp.exports=Uu;const p=Fp.exports.jsx,O=Fp.exports.jsxs,qt=Fp.exports.Fragment;function s7(e){var t=e.store,n=e.context,r=e.children,i=R.exports.useMemo(function(){var l=m3(t);return{store:t,subscription:l}},[t]),o=R.exports.useMemo(function(){return t.getState()},[t]);jv(function(){var l=i.subscription;return l.onStateChange=l.notifyNestedSubs,l.trySubscribe(),o!==t.getState()&&l.notifyNestedSubs(),function(){l.tryUnsubscribe(),l.onStateChange=null}},[i,o]);var s=n||Wo;return p(s.Provider,{value:i,children:r})}function ne(){return ne=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ne.apply(null,arguments)}function An(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.includes(r))continue;n[r]=e[r]}return n}function x3(){var e=R.exports.useContext(Wo);return e}function b3(e){e===void 0&&(e=Wo);var t=e===Wo?x3:function(){return R.exports.useContext(e)};return function(){var r=t(),i=r.store;return i}}var a7=b3();function l7(e){e===void 0&&(e=Wo);var t=e===Wo?a7:b3(e);return function(){var r=t();return r.dispatch}}var Hy=l7(),c7=function(t,n){return t===n};function u7(e,t,n,r){var i=R.exports.useReducer(function(w){return w+1},0),o=i[1],s=R.exports.useMemo(function(){return m3(n,r)},[n,r]),l=R.exports.useRef(),c=R.exports.useRef(),d=R.exports.useRef(),f=R.exports.useRef(),g=n.getState(),m;try{if(e!==c.current||g!==d.current||l.current){var x=e(g);f.current===void 0||!t(x,f.current)?m=x:m=f.current}else m=f.current}catch(w){throw l.current&&(w.message+=`
The error may be correlated with this previous error:
`+l.current.stack+`

`),w}return jv(function(){c.current=e,d.current=g,f.current=m,l.current=void 0}),jv(function(){function w(){try{var _=n.getState();if(_===d.current)return;var v=c.current(_);if(t(v,f.current))return;f.current=v,d.current=_}catch(b){l.current=b}o()}return s.onStateChange=w,s.trySubscribe(),w(),function(){return s.tryUnsubscribe()}},[n,s]),m}function d7(e){e===void 0&&(e=Wo);var t=e===Wo?x3:function(){return R.exports.useContext(e)};return function(r,i){i===void 0&&(i=c7);var o=t(),s=o.store,l=o.subscription,c=u7(r,i,s,l);return R.exports.useDebugValue(c),c}}var mn=d7();JI(up.exports.unstable_batchedUpdates);const f7=he.header`
  display: none;
  position: fixed;
  top: 0px;
  z-index: 20;
  max-width: 140rem;
  width: 100%;

  .header-box {
    position: relative;
    width: 100%;
    display: block;
    height: 7rem;
    background-color: ${e=>e.theme.headerDesktop};
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
    z-index: 10;

    header {
      background-color: ${e=>e.theme.headerDesktop};
      color: ${e=>e.theme.textColor};
      max-width: 140rem;
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
                  width: 14.5rem;
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

      .search-result {
        position: absolute;
        right: 0px;
        top: 7rem;
        border: 1px solid rgb(238, 238, 238);
        padding: 1rem;
        width: 37rem;
        z-index: 9;
        background: white;
        overflow-y: scroll;

        &.hide {
          display: none;
        }
        p {
          padding: 1rem;
          font-size: 1.4rem;
          line-height: inherit;
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
`;var w3={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},iS=jt.createContext&&jt.createContext(w3),No=globalThis&&globalThis.__assign||function(){return No=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},No.apply(this,arguments)},h7=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function _3(e){return e&&e.map(function(t,n){return jt.createElement(t.tag,No({key:n},t.attr),_3(t.child))})}function Ke(e){return function(t){return jt.createElement(p7,No({attr:No({},e.attr)},t),_3(e.child))}}function p7(e){var t=function(n){var r=e.attr,i=e.size,o=e.title,s=h7(e,["attr","size","title"]),l=i||n.size||"1em",c;return n.className&&(c=n.className),e.className&&(c=(c?c+" ":"")+e.className),jt.createElement("svg",No({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,s,{className:c,style:No(No({color:e.color||n.color},n.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),o&&jt.createElement("title",null,o),e.children)};return iS!==void 0?jt.createElement(iS.Consumer,null,function(n){return t(n)}):t(w3)}function Vy(e){return Ke({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"}}]})(e)}function Uy(e){return Ke({tag:"svg",attr:{viewBox:"0 0 192 512"},child:[{tag:"path",attr:{d:"M96 184c39.8 0 72 32.2 72 72s-32.2 72-72 72-72-32.2-72-72 32.2-72 72-72zM24 80c0 39.8 32.2 72 72 72s72-32.2 72-72S135.8 8 96 8 24 40.2 24 80zm0 352c0 39.8 32.2 72 72 72s72-32.2 72-72-32.2-72-72-72-72 32.2-72 72z"}}]})(e)}function g7(e){return Ke({tag:"svg",attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z"}}]})(e)}function m7(e){return Ke({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"}}]})(e)}function v7(e){return Ke({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M4 6h2v12H4zm4 7h8.586l-4.293 4.293 1.414 1.414L20.414 12l-6.707-6.707-1.414 1.414L16.586 11H8z"}}]})(e)}function S3(e){return Ke({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"}}]})(e)}function y7(e){return Ke({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412l7.332 7.332c.17.299.498.492.875.492a.99.99 0 0 0 .792-.409l7.415-7.415c2.354-2.354 2.354-6.049-.002-8.416a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595zm6.791 1.61c1.563 1.571 1.564 4.025.002 5.588L12 18.586l-6.793-6.793c-1.562-1.563-1.561-4.017-.002-5.584.76-.756 1.754-1.172 2.799-1.172s2.035.416 2.789 1.17l.5.5a.999.999 0 0 0 1.414 0l.5-.5c1.512-1.509 4.074-1.505 5.584-.002z"}}]})(e)}function k3(e){return Ke({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M11.999 1.993C6.486 1.994 2 6.48 1.999 11.994c0 5.514 4.486 10 10.001 10 5.514-.001 10-4.487 10-10 0-5.514-4.486-10-10.001-10.001zM12 19.994c-4.412 0-8.001-3.589-8.001-8 .001-4.411 3.59-8 8-8.001C16.411 3.994 20 7.583 20 11.994c0 4.41-3.589 7.999-8 8z"}},{tag:"path",attr:{d:"m12.012 7.989-4.005 4.005 4.005 4.004v-3.004h3.994v-2h-3.994z"}}]})(e)}function oS(e){return Ke({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M18.464 2.114a.998.998 0 0 0-1.033.063l-13 9a1.003 1.003 0 0 0 0 1.645l13 9A1 1 0 0 0 19 21V3a1 1 0 0 0-.536-.886zM17 19.091 6.757 12 17 4.909v14.182z"}}]})(e)}function x7(e){return Ke({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"m13 16 5-4-5-4v3H4v2h9z"}},{tag:"path",attr:{d:"M20 3h-9c-1.103 0-2 .897-2 2v4h2V5h9v14h-9v-4H9v4c0 1.103.897 2 2 2h9c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2z"}}]})(e)}function b7(e){return Ke({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M19 2H5c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h3.586L12 21.414 15.414 18H19c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 14h-4.414L12 18.586 9.414 16H5V4h14v12z"}}]})(e)}function Yy(e){return Ke({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"}}]})(e)}function w7(e){return Ke({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M7 7v10l7-5zm9 10V7h-2v10z"}}]})(e)}function Wh(e){return Ke({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"}}]})(e)}const _7=he.div`
  .profile-box {
    cursor: pointer;
    position: relative;
    // padding: 1rem;

    .profile {
      // width: 30px;
      // height: 30px;
      border-radius: 999px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      background-color: #9147ff;
      font-size: 2.2rem;
      padding: 1rem;
    }

    .profile-menu {
      display: none;
      position: absolute;
      width: 200px;
      background-color: ${e=>e.theme.header};
      color: ${e=>e.theme.textColor};
      top: 6.2rem;
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
              transition: 0.3s;
              border-radius: 5px;
              display: flex;
              align-items: center;
              justify-content: space-between;

              .item {
                display: flex;
                align-items: center;
                font-size: 18px;
                padding: 8px 5px;

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
`;function S7(e){return Ke({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}},{tag:"circle",attr:{cx:"9",cy:"7",r:"4"}},{tag:"path",attr:{d:"M23 21v-2a4 4 0 0 0-3-3.87"}},{tag:"path",attr:{d:"M16 3.13a4 4 0 0 1 0 7.75"}}]})(e)}function m0(e){return Ke({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z"}}]})(e)}function k7(e){return Ke({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z"}}]})(e)}function C3(e){return Ke({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"}}]})(e)}function C7(e){return Ke({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z"}}]})(e)}function P7(e){return Ke({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A2.01 2.01 0 0018.06 7h-.12a2 2 0 00-1.9 1.37l-.86 2.58c1.08.6 1.82 1.73 1.82 3.05v8h3zm-7.5-10.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5S11 9.17 11 10s.67 1.5 1.5 1.5zM5.5 6c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2zm2 16v-7H9V9c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v6h1.5v7h4zm6.5 0v-4h1v-4c0-.82-.68-1.5-1.5-1.5h-2c-.82 0-1.5.68-1.5 1.5v4h1v4h3z"}}]})(e)}function E7(e){return Ke({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M17 8l-1.41 1.41L17.17 11H9v2h8.17l-1.58 1.58L17 16l4-4-4-4zM5 5h7V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h7v-2H5V5z"}}]})(e)}function M7(e){return Ke({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M15 8v8H5V8h10m1-2H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4V7c0-.55-.45-1-1-1z"}}]})(e)}function P3(e){return Ke({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M9.37 5.51A7.35 7.35 0 009.1 7.5c0 4.08 3.32 7.4 7.4 7.4.68 0 1.35-.09 1.99-.27A7.014 7.014 0 0112 19c-3.86 0-7-3.14-7-7 0-2.93 1.81-5.45 4.37-6.49zM12 3a9 9 0 109 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 01-4.4 2.26 5.403 5.403 0 01-3.14-9.8c-.44-.06-.9-.1-1.36-.1z"}}]})(e)}function O7(e){return Ke({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M21 19.9997C21 20.552 20.5523 20.9997 20 20.9997H4C3.44772 20.9997 3 20.552 3 19.9997V9.48882C3 9.18023 3.14247 8.88893 3.38606 8.69947L11.3861 2.47725C11.7472 2.19639 12.2528 2.19639 12.6139 2.47725L20.6139 8.69947C20.8575 8.88893 21 9.18023 21 9.48882V19.9997ZM19 18.9997V9.97791L12 4.53346L5 9.97791V18.9997H19ZM7 14.9997H17V16.9997H7V14.9997Z"}}]})(e)}function R7(e){return Ke({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M5 2H19C19.5523 2 20 2.44772 20 3V22.1433C20 22.4194 19.7761 22.6434 19.5 22.6434C19.4061 22.6434 19.314 22.6168 19.2344 22.5669L12 18.0313L4.76559 22.5669C4.53163 22.7136 4.22306 22.6429 4.07637 22.4089C4.02647 22.3293 4 22.2373 4 22.1433V3C4 2.44772 4.44772 2 5 2ZM18 4H6V19.4324L12 15.6707L18 19.4324V4Z"}}]})(e)}function T7(e){return Ke({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"}}]})(e)}function A7(e){return Ke({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M4.41085 14.5259L7.81249 11.1243L10.6409 13.9527L13.7978 10.7958L12.0049 9.00293H17.0049V14.0029L15.212 12.21L10.6409 16.7811L7.81249 13.9527L5.33834 16.4268C6.77158 18.5823 9.22233 20.0029 12.0049 20.0029C16.4232 20.0029 20.0049 16.4212 20.0049 12.0029C20.0049 7.58465 16.4232 4.00293 12.0049 4.00293C7.5866 4.00293 4.00488 7.58465 4.00488 12.0029C4.00488 12.8845 4.14747 13.7327 4.41085 14.5259ZM2.87288 16.0841L2.86275 16.074L2.86662 16.0701C2.31276 14.8276 2.00488 13.4512 2.00488 12.0029C2.00488 6.48008 6.48204 2.00293 12.0049 2.00293C17.5277 2.00293 22.0049 6.48008 22.0049 12.0029C22.0049 17.5258 17.5277 22.0029 12.0049 22.0029C7.93574 22.0029 4.43426 19.5725 2.87288 16.0841Z"}}]})(e)}function N7(e){return Ke({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853Z"}}]})(e)}function sS(e){return Ke({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z"}}]})(e)}function L7(e){return Ke({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M18 8H20C20.5523 8 21 8.44772 21 9V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V9C3 8.44772 3.44772 8 4 8H6V7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7V8ZM16 8V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V8H16ZM11 14V16H13V14H11ZM7 14V16H9V14H7ZM15 14V16H17V14H15Z"}}]})(e)}function $7(e){return Ke({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M4 18H6V20H18V4H6V6H4V3C4 2.44772 4.44772 2 5 2H19C19.5523 2 20 2.44772 20 3V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V18ZM6 11H13V13H6V16L1 12L6 8V11Z"}}]})(e)}function Wv(e){return Ke({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M8.68735 4.00008L11.294 1.39348C11.6845 1.00295 12.3176 1.00295 12.7082 1.39348L15.3148 4.00008H19.0011C19.5533 4.00008 20.0011 4.4478 20.0011 5.00008V8.68637L22.6077 11.293C22.9982 11.6835 22.9982 12.3167 22.6077 12.7072L20.0011 15.3138V19.0001C20.0011 19.5524 19.5533 20.0001 19.0011 20.0001H15.3148L12.7082 22.6067C12.3176 22.9972 11.6845 22.9972 11.294 22.6067L8.68735 20.0001H5.00106C4.44877 20.0001 4.00106 19.5524 4.00106 19.0001V15.3138L1.39446 12.7072C1.00393 12.3167 1.00393 11.6835 1.39446 11.293L4.00106 8.68637V5.00008C4.00106 4.4478 4.44877 4.00008 5.00106 4.00008H8.68735ZM6.00106 6.00008V9.5148L3.51578 12.0001L6.00106 14.4854V18.0001H9.51578L12.0011 20.4854L14.4863 18.0001H18.0011V14.4854L20.4863 12.0001L18.0011 9.5148V6.00008H14.4863L12.0011 3.5148L9.51578 6.00008H6.00106ZM12.0011 16.0001C9.79192 16.0001 8.00106 14.2092 8.00106 12.0001C8.00106 9.79094 9.79192 8.00008 12.0011 8.00008C14.2102 8.00008 16.0011 9.79094 16.0011 12.0001C16.0011 14.2092 14.2102 16.0001 12.0011 16.0001ZM12.0011 14.0001C13.1056 14.0001 14.0011 13.1047 14.0011 12.0001C14.0011 10.8955 13.1056 10.0001 12.0011 10.0001C10.8965 10.0001 10.0011 10.8955 10.0011 12.0001C10.0011 13.1047 10.8965 14.0001 12.0011 14.0001Z"}}]})(e)}const I7=he.div`
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
`;function Kr(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+e+(n.length?" "+n.map(function(i){return"'"+i+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function Ho(e){return!!e&&!!e[Ct]}function Xi(e){var t;return!!e&&(function(n){if(!n||typeof n!="object")return!1;var r=Object.getPrototypeOf(n);if(r===null)return!0;var i=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return i===Object||typeof i=="function"&&Function.toString.call(i)===U7}(e)||Array.isArray(e)||!!e[hS]||!!(!((t=e.constructor)===null||t===void 0)&&t[hS])||Ky(e)||Xy(e))}function Ns(e,t,n){n===void 0&&(n=!1),hl(e)===0?(n?Object.keys:Ba)(e).forEach(function(r){n&&typeof r=="symbol"||t(r,e[r],e)}):e.forEach(function(r,i){return t(i,r,e)})}function hl(e){var t=e[Ct];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:Ky(e)?2:Xy(e)?3:0}function Fa(e,t){return hl(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function D7(e,t){return hl(e)===2?e.get(t):e[t]}function E3(e,t,n){var r=hl(e);r===2?e.set(t,n):r===3?e.add(n):e[t]=n}function M3(e,t){return e===t?e!==0||1/e==1/t:e!=e&&t!=t}function Ky(e){return H7&&e instanceof Map}function Xy(e){return V7&&e instanceof Set}function hs(e){return e.o||e.t}function Gy(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=R3(e);delete t[Ct];for(var n=Ba(t),r=0;r<n.length;r++){var i=n[r],o=t[i];o.writable===!1&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(t[i]={configurable:!0,writable:!0,enumerable:o.enumerable,value:e[i]})}return Object.create(Object.getPrototypeOf(e),t)}function qy(e,t){return t===void 0&&(t=!1),Zy(e)||Ho(e)||!Xi(e)||(hl(e)>1&&(e.set=e.add=e.clear=e.delete=z7),Object.freeze(e),t&&Ns(e,function(n,r){return qy(r,!0)},!0)),e}function z7(){Kr(2)}function Zy(e){return e==null||typeof e!="object"||Object.isFrozen(e)}function yi(e){var t=Yv[e];return t||Kr(18,e),t}function F7(e,t){Yv[e]||(Yv[e]=t)}function Hv(){return hu}function v0(e,t){t&&(yi("Patches"),e.u=[],e.s=[],e.v=t)}function Hh(e){Vv(e),e.p.forEach(B7),e.p=null}function Vv(e){e===hu&&(hu=e.l)}function aS(e){return hu={p:[],l:hu,h:e,m:!0,_:0}}function B7(e){var t=e[Ct];t.i===0||t.i===1?t.j():t.g=!0}function y0(e,t){t._=t.p.length;var n=t.p[0],r=e!==void 0&&e!==n;return t.h.O||yi("ES5").S(t,e,r),r?(n[Ct].P&&(Hh(t),Kr(4)),Xi(e)&&(e=Vh(t,e),t.l||Uh(t,e)),t.u&&yi("Patches").M(n[Ct].t,e,t.u,t.s)):e=Vh(t,n,[]),Hh(t),t.u&&t.v(t.u,t.s),e!==O3?e:void 0}function Vh(e,t,n){if(Zy(t))return t;var r=t[Ct];if(!r)return Ns(t,function(l,c){return lS(e,r,t,l,c,n)},!0),t;if(r.A!==e)return t;if(!r.P)return Uh(e,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var i=r.i===4||r.i===5?r.o=Gy(r.k):r.o,o=i,s=!1;r.i===3&&(o=new Set(i),i.clear(),s=!0),Ns(o,function(l,c){return lS(e,r,i,l,c,n,s)}),Uh(e,i,!1),n&&e.u&&yi("Patches").N(r,n,e.u,e.s)}return r.o}function lS(e,t,n,r,i,o,s){if(Ho(i)){var l=Vh(e,i,o&&t&&t.i!==3&&!Fa(t.R,r)?o.concat(r):void 0);if(E3(n,r,l),!Ho(l))return;e.m=!1}else s&&n.add(i);if(Xi(i)&&!Zy(i)){if(!e.h.D&&e._<1)return;Vh(e,i),t&&t.A.l||Uh(e,i)}}function Uh(e,t,n){n===void 0&&(n=!1),!e.l&&e.h.D&&e.m&&qy(t,n)}function x0(e,t){var n=e[Ct];return(n?hs(n):e)[t]}function cS(e,t){if(t in e)for(var n=Object.getPrototypeOf(e);n;){var r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=Object.getPrototypeOf(n)}}function fo(e){e.P||(e.P=!0,e.l&&fo(e.l))}function b0(e){e.o||(e.o=Gy(e.t))}function Uv(e,t,n){var r=Ky(t)?yi("MapSet").F(t,n):Xy(t)?yi("MapSet").T(t,n):e.O?function(i,o){var s=Array.isArray(i),l={i:s?1:0,A:o?o.A:Hv(),P:!1,I:!1,R:{},l:o,t:i,k:null,o:null,j:null,C:!1},c=l,d=pu;s&&(c=[l],d=bc);var f=Proxy.revocable(c,d),g=f.revoke,m=f.proxy;return l.k=m,l.j=g,m}(t,n):yi("ES5").J(t,n);return(n?n.A:Hv()).p.push(r),r}function j7(e){return Ho(e)||Kr(22,e),function t(n){if(!Xi(n))return n;var r,i=n[Ct],o=hl(n);if(i){if(!i.P&&(i.i<4||!yi("ES5").K(i)))return i.t;i.I=!0,r=uS(n,o),i.I=!1}else r=uS(n,o);return Ns(r,function(s,l){i&&D7(i.t,s)===l||E3(r,s,t(l))}),o===3?new Set(r):r}(e)}function uS(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return Gy(e)}function W7(){function e(o,s){var l=i[o];return l?l.enumerable=s:i[o]=l={configurable:!0,enumerable:s,get:function(){var c=this[Ct];return pu.get(c,o)},set:function(c){var d=this[Ct];pu.set(d,o,c)}},l}function t(o){for(var s=o.length-1;s>=0;s--){var l=o[s][Ct];if(!l.P)switch(l.i){case 5:r(l)&&fo(l);break;case 4:n(l)&&fo(l)}}}function n(o){for(var s=o.t,l=o.k,c=Ba(l),d=c.length-1;d>=0;d--){var f=c[d];if(f!==Ct){var g=s[f];if(g===void 0&&!Fa(s,f))return!0;var m=l[f],x=m&&m[Ct];if(x?x.t!==g:!M3(m,g))return!0}}var w=!!s[Ct];return c.length!==Ba(s).length+(w?0:1)}function r(o){var s=o.k;if(s.length!==o.t.length)return!0;var l=Object.getOwnPropertyDescriptor(s,s.length-1);if(l&&!l.get)return!0;for(var c=0;c<s.length;c++)if(!s.hasOwnProperty(c))return!0;return!1}var i={};F7("ES5",{J:function(o,s){var l=Array.isArray(o),c=function(f,g){if(f){for(var m=Array(g.length),x=0;x<g.length;x++)Object.defineProperty(m,""+x,e(x,!0));return m}var w=R3(g);delete w[Ct];for(var _=Ba(w),v=0;v<_.length;v++){var b=_[v];w[b]=e(b,f||!!w[b].enumerable)}return Object.create(Object.getPrototypeOf(g),w)}(l,o),d={i:l?5:4,A:s?s.A:Hv(),P:!1,I:!1,R:{},l:s,t:o,k:c,o:null,g:!1,C:!1};return Object.defineProperty(c,Ct,{value:d,writable:!0}),c},S:function(o,s,l){l?Ho(s)&&s[Ct].A===o&&t(o.p):(o.u&&function c(d){if(d&&typeof d=="object"){var f=d[Ct];if(f){var g=f.t,m=f.k,x=f.R,w=f.i;if(w===4)Ns(m,function(C){C!==Ct&&(g[C]!==void 0||Fa(g,C)?x[C]||c(m[C]):(x[C]=!0,fo(f)))}),Ns(g,function(C){m[C]!==void 0||Fa(m,C)||(x[C]=!1,fo(f))});else if(w===5){if(r(f)&&(fo(f),x.length=!0),m.length<g.length)for(var _=m.length;_<g.length;_++)x[_]=!1;else for(var v=g.length;v<m.length;v++)x[v]=!0;for(var b=Math.min(m.length,g.length),S=0;S<b;S++)m.hasOwnProperty(S)||(x[S]=!0),x[S]===void 0&&c(m[S])}}}}(o.p[0]),t(o.p))},K:function(o){return o.i===4?n(o):r(o)}})}var dS,hu,Qy=typeof Symbol!="undefined"&&typeof Symbol("x")=="symbol",H7=typeof Map!="undefined",V7=typeof Set!="undefined",fS=typeof Proxy!="undefined"&&Proxy.revocable!==void 0&&typeof Reflect!="undefined",O3=Qy?Symbol.for("immer-nothing"):((dS={})["immer-nothing"]=!0,dS),hS=Qy?Symbol.for("immer-draftable"):"__$immer_draftable",Ct=Qy?Symbol.for("immer-state"):"__$immer_state",U7=""+Object.prototype.constructor,Ba=typeof Reflect!="undefined"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,R3=Object.getOwnPropertyDescriptors||function(e){var t={};return Ba(e).forEach(function(n){t[n]=Object.getOwnPropertyDescriptor(e,n)}),t},Yv={},pu={get:function(e,t){if(t===Ct)return e;var n=hs(e);if(!Fa(n,t))return function(i,o,s){var l,c=cS(o,s);return c?"value"in c?c.value:(l=c.get)===null||l===void 0?void 0:l.call(i.k):void 0}(e,n,t);var r=n[t];return e.I||!Xi(r)?r:r===x0(e.t,t)?(b0(e),e.o[t]=Uv(e.A.h,r,e)):r},has:function(e,t){return t in hs(e)},ownKeys:function(e){return Reflect.ownKeys(hs(e))},set:function(e,t,n){var r=cS(hs(e),t);if(r!=null&&r.set)return r.set.call(e.k,n),!0;if(!e.P){var i=x0(hs(e),t),o=i==null?void 0:i[Ct];if(o&&o.t===n)return e.o[t]=n,e.R[t]=!1,!0;if(M3(n,i)&&(n!==void 0||Fa(e.t,t)))return!0;b0(e),fo(e)}return e.o[t]===n&&(n!==void 0||t in e.o)||Number.isNaN(n)&&Number.isNaN(e.o[t])||(e.o[t]=n,e.R[t]=!0),!0},deleteProperty:function(e,t){return x0(e.t,t)!==void 0||t in e.t?(e.R[t]=!1,b0(e),fo(e)):delete e.R[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var n=hs(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{writable:!0,configurable:e.i!==1||t!=="length",enumerable:r.enumerable,value:n[t]}},defineProperty:function(){Kr(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){Kr(12)}},bc={};Ns(pu,function(e,t){bc[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}}),bc.deleteProperty=function(e,t){return bc.set.call(this,e,t,void 0)},bc.set=function(e,t,n){return pu.set.call(this,e[0],t,n,e[0])};var Y7=function(){function e(n){var r=this;this.O=fS,this.D=!0,this.produce=function(i,o,s){if(typeof i=="function"&&typeof o!="function"){var l=o;o=i;var c=r;return function(_){var v=this;_===void 0&&(_=l);for(var b=arguments.length,S=Array(b>1?b-1:0),C=1;C<b;C++)S[C-1]=arguments[C];return c.produce(_,function(E){var T;return(T=o).call.apply(T,[v,E].concat(S))})}}var d;if(typeof o!="function"&&Kr(6),s!==void 0&&typeof s!="function"&&Kr(7),Xi(i)){var f=aS(r),g=Uv(r,i,void 0),m=!0;try{d=o(g),m=!1}finally{m?Hh(f):Vv(f)}return typeof Promise!="undefined"&&d instanceof Promise?d.then(function(_){return v0(f,s),y0(_,f)},function(_){throw Hh(f),_}):(v0(f,s),y0(d,f))}if(!i||typeof i!="object"){if((d=o(i))===void 0&&(d=i),d===O3&&(d=void 0),r.D&&qy(d,!0),s){var x=[],w=[];yi("Patches").M(i,d,x,w),s(x,w)}return d}Kr(21,i)},this.produceWithPatches=function(i,o){if(typeof i=="function")return function(d){for(var f=arguments.length,g=Array(f>1?f-1:0),m=1;m<f;m++)g[m-1]=arguments[m];return r.produceWithPatches(d,function(x){return i.apply(void 0,[x].concat(g))})};var s,l,c=r.produce(i,o,function(d,f){s=d,l=f});return typeof Promise!="undefined"&&c instanceof Promise?c.then(function(d){return[d,s,l]}):[c,s,l]},typeof(n==null?void 0:n.useProxies)=="boolean"&&this.setUseProxies(n.useProxies),typeof(n==null?void 0:n.autoFreeze)=="boolean"&&this.setAutoFreeze(n.autoFreeze)}var t=e.prototype;return t.createDraft=function(n){Xi(n)||Kr(8),Ho(n)&&(n=j7(n));var r=aS(this),i=Uv(this,n,void 0);return i[Ct].C=!0,Vv(r),i},t.finishDraft=function(n,r){var i=n&&n[Ct],o=i.A;return v0(o,r),y0(void 0,o)},t.setAutoFreeze=function(n){this.D=n},t.setUseProxies=function(n){n&&!fS&&Kr(20),this.O=n},t.applyPatches=function(n,r){var i;for(i=r.length-1;i>=0;i--){var o=r[i];if(o.path.length===0&&o.op==="replace"){n=o.value;break}}i>-1&&(r=r.slice(i+1));var s=yi("Patches").$;return Ho(n)?s(n,r):this.produce(n,function(l){return s(l,r)})},e}(),fr=new Y7,T3=fr.produce;fr.produceWithPatches.bind(fr);fr.setAutoFreeze.bind(fr);fr.setUseProxies.bind(fr);fr.applyPatches.bind(fr);fr.createDraft.bind(fr);fr.finishDraft.bind(fr);function gu(e){return gu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},gu(e)}function K7(e,t){if(gu(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(gu(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function X7(e){var t=K7(e,"string");return gu(t)=="symbol"?t:t+""}function G7(e,t,n){return(t=X7(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function pS(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function gS(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?pS(Object(n),!0).forEach(function(r){G7(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):pS(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function wn(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var mS=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),w0=function(){return Math.random().toString(36).substring(7).split("").join(".")},Yh={INIT:"@@redux/INIT"+w0(),REPLACE:"@@redux/REPLACE"+w0(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+w0()}};function q7(e){if(typeof e!="object"||e===null)return!1;for(var t=e;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function A3(e,t,n){var r;if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(wn(0));if(typeof t=="function"&&typeof n=="undefined"&&(n=t,t=void 0),typeof n!="undefined"){if(typeof n!="function")throw new Error(wn(1));return n(A3)(e,t)}if(typeof e!="function")throw new Error(wn(2));var i=e,o=t,s=[],l=s,c=!1;function d(){l===s&&(l=s.slice())}function f(){if(c)throw new Error(wn(3));return o}function g(_){if(typeof _!="function")throw new Error(wn(4));if(c)throw new Error(wn(5));var v=!0;return d(),l.push(_),function(){if(!!v){if(c)throw new Error(wn(6));v=!1,d();var S=l.indexOf(_);l.splice(S,1),s=null}}}function m(_){if(!q7(_))throw new Error(wn(7));if(typeof _.type=="undefined")throw new Error(wn(8));if(c)throw new Error(wn(9));try{c=!0,o=i(o,_)}finally{c=!1}for(var v=s=l,b=0;b<v.length;b++){var S=v[b];S()}return _}function x(_){if(typeof _!="function")throw new Error(wn(10));i=_,m({type:Yh.REPLACE})}function w(){var _,v=g;return _={subscribe:function(S){if(typeof S!="object"||S===null)throw new Error(wn(11));function C(){S.next&&S.next(f())}C();var E=v(C);return{unsubscribe:E}}},_[mS]=function(){return this},_}return m({type:Yh.INIT}),r={dispatch:m,subscribe:g,getState:f,replaceReducer:x},r[mS]=w,r}function Z7(e){Object.keys(e).forEach(function(t){var n=e[t],r=n(void 0,{type:Yh.INIT});if(typeof r=="undefined")throw new Error(wn(12));if(typeof n(void 0,{type:Yh.PROBE_UNKNOWN_ACTION()})=="undefined")throw new Error(wn(13))})}function Q7(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var i=t[r];typeof e[i]=="function"&&(n[i]=e[i])}var o=Object.keys(n),s;try{Z7(n)}catch(l){s=l}return function(c,d){if(c===void 0&&(c={}),s)throw s;for(var f=!1,g={},m=0;m<o.length;m++){var x=o[m],w=n[x],_=c[x],v=w(_,d);if(typeof v=="undefined")throw d&&d.type,new Error(wn(14));g[x]=v,f=f||v!==_}return f=f||o.length!==Object.keys(c).length,f?g:c}}function Kh(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.length===0?function(r){return r}:t.length===1?t[0]:t.reduce(function(r,i){return function(){return r(i.apply(void 0,arguments))}})}function J7(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return function(){var i=r.apply(void 0,arguments),o=function(){throw new Error(wn(15))},s={getState:i.getState,dispatch:function(){return o.apply(void 0,arguments)}},l=t.map(function(c){return c(s)});return o=Kh.apply(void 0,l)(i.dispatch),gS(gS({},i),{},{dispatch:o})}}}function N3(e){var t=function(r){var i=r.dispatch,o=r.getState;return function(s){return function(l){return typeof l=="function"?l(i,o,e):s(l)}}};return t}var L3=N3();L3.withExtraArgument=N3;var vS=L3,$3=globalThis&&globalThis.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])},e(t,n)};return function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),eD=globalThis&&globalThis.__generator||function(e,t){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,s;return s={next:l(0),throw:l(1),return:l(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function l(d){return function(f){return c([d,f])}}function c(d){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(o=d[0]&2?i.return:d[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,d[1])).done)return o;switch(i=0,o&&(d=[d[0]&2,o.value]),d[0]){case 0:case 1:o=d;break;case 4:return n.label++,{value:d[1],done:!1};case 5:n.label++,i=d[1],d=[0];continue;case 7:d=n.ops.pop(),n.trys.pop();continue;default:if(o=n.trys,!(o=o.length>0&&o[o.length-1])&&(d[0]===6||d[0]===2)){n=0;continue}if(d[0]===3&&(!o||d[1]>o[0]&&d[1]<o[3])){n.label=d[1];break}if(d[0]===6&&n.label<o[1]){n.label=o[1],o=d;break}if(o&&n.label<o[2]){n.label=o[2],n.ops.push(d);break}o[2]&&n.ops.pop(),n.trys.pop();continue}d=t.call(e,n)}catch(f){d=[6,f],i=0}finally{r=o=0}if(d[0]&5)throw d[1];return{value:d[0]?d[1]:void 0,done:!0}}},Ja=globalThis&&globalThis.__spreadArray||function(e,t){for(var n=0,r=t.length,i=e.length;n<r;n++,i++)e[i]=t[n];return e},tD=Object.defineProperty,nD=Object.defineProperties,rD=Object.getOwnPropertyDescriptors,yS=Object.getOwnPropertySymbols,iD=Object.prototype.hasOwnProperty,oD=Object.prototype.propertyIsEnumerable,xS=function(e,t,n){return t in e?tD(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},Lo=function(e,t){for(var n in t||(t={}))iD.call(t,n)&&xS(e,n,t[n]);if(yS)for(var r=0,i=yS(t);r<i.length;r++){var n=i[r];oD.call(t,n)&&xS(e,n,t[n])}return e},_0=function(e,t){return nD(e,rD(t))},sD=function(e,t,n){return new Promise(function(r,i){var o=function(c){try{l(n.next(c))}catch(d){i(d)}},s=function(c){try{l(n.throw(c))}catch(d){i(d)}},l=function(c){return c.done?r(c.value):Promise.resolve(c.value).then(o,s)};l((n=n.apply(e,t)).next())})},aD=typeof window!="undefined"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Kh:Kh.apply(null,arguments)};function lD(e){if(typeof e!="object"||e===null)return!1;var t=Object.getPrototypeOf(e);if(t===null)return!0;for(var n=t;Object.getPrototypeOf(n)!==null;)n=Object.getPrototypeOf(n);return t===n}function $o(e,t){function n(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];if(t){var o=t.apply(void 0,r);if(!o)throw new Error("prepareAction did not return an object");return Lo(Lo({type:e,payload:o.payload},"meta"in o&&{meta:o.meta}),"error"in o&&{error:o.error})}return{type:e,payload:r[0]}}return n.toString=function(){return""+e},n.type=e,n.match=function(r){return r.type===e},n}var cD=function(e){$3(t,e);function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=e.apply(this,n)||this;return Object.setPrototypeOf(i,t.prototype),i}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(t.bind.apply(t,Ja([void 0],n[0].concat(this)))):new(t.bind.apply(t,Ja([void 0],n.concat(this))))},t}(Array),uD=function(e){$3(t,e);function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=e.apply(this,n)||this;return Object.setPrototypeOf(i,t.prototype),i}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(t.bind.apply(t,Ja([void 0],n[0].concat(this)))):new(t.bind.apply(t,Ja([void 0],n.concat(this))))},t}(Array);function Kv(e){return Xi(e)?T3(e,function(){}):e}function dD(e){return typeof e=="boolean"}function fD(){return function(t){return hD(t)}}function hD(e){e===void 0&&(e={});var t=e.thunk,n=t===void 0?!0:t;e.immutableCheck,e.serializableCheck,e.actionCreatorCheck;var r=new cD;return n&&(dD(n)?r.push(vS):r.push(vS.withExtraArgument(n.extraArgument))),r}var pD=!0;function gD(e){var t=fD(),n=e||{},r=n.reducer,i=r===void 0?void 0:r,o=n.middleware,s=o===void 0?t():o,l=n.devTools,c=l===void 0?!0:l,d=n.preloadedState,f=d===void 0?void 0:d,g=n.enhancers,m=g===void 0?void 0:g,x;if(typeof i=="function")x=i;else if(lD(i))x=Q7(i);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var w=s;typeof w=="function"&&(w=w(t));var _=J7.apply(void 0,w),v=Kh;c&&(v=aD(Lo({trace:!pD},typeof c=="object"&&c)));var b=new uD(_),S=b;Array.isArray(m)?S=Ja([_],m):typeof m=="function"&&(S=m(b));var C=v.apply(void 0,S);return A3(x,f,C)}function I3(e){var t={},n=[],r,i={addCase:function(o,s){var l=typeof o=="string"?o:o.type;if(!l)throw new Error("`builder.addCase` cannot be called with an empty action type");if(l in t)throw new Error("`builder.addCase` cannot be called with two reducers for the same action type");return t[l]=s,i},addMatcher:function(o,s){return n.push({matcher:o,reducer:s}),i},addDefaultCase:function(o){return r=o,i}};return e(i),[t,n,r]}function mD(e){return typeof e=="function"}function vD(e,t,n,r){n===void 0&&(n=[]);var i=typeof t=="function"?I3(t):[t,n,r],o=i[0],s=i[1],l=i[2],c;if(mD(e))c=function(){return Kv(e())};else{var d=Kv(e);c=function(){return d}}function f(g,m){g===void 0&&(g=c());var x=Ja([o[m.type]],s.filter(function(w){var _=w.matcher;return _(m)}).map(function(w){var _=w.reducer;return _}));return x.filter(function(w){return!!w}).length===0&&(x=[l]),x.reduce(function(w,_){if(_)if(Ho(w)){var v=w,b=_(v,m);return b===void 0?w:b}else{if(Xi(w))return T3(w,function(S){return _(S,m)});var b=_(w,m);if(b===void 0){if(w===null)return w;throw Error("A case reducer on a non-draftable value must not return undefined")}return b}return w},g)}return f.getInitialState=c,f}function yD(e,t){return e+"/"+t}function Ws(e){var t=e.name;if(!t)throw new Error("`name` is a required option for createSlice");var n=typeof e.initialState=="function"?e.initialState:Kv(e.initialState),r=e.reducers||{},i=Object.keys(r),o={},s={},l={};i.forEach(function(f){var g=r[f],m=yD(t,f),x,w;"reducer"in g?(x=g.reducer,w=g.prepare):x=g,o[f]=x,s[m]=x,l[f]=w?$o(m,w):$o(m)});function c(){var f=typeof e.extraReducers=="function"?I3(e.extraReducers):[e.extraReducers],g=f[0],m=g===void 0?{}:g,x=f[1],w=x===void 0?[]:x,_=f[2],v=_===void 0?void 0:_,b=Lo(Lo({},m),s);return vD(n,function(S){for(var C in b)S.addCase(C,b[C]);for(var E=0,T=w;E<T.length;E++){var N=T[E];S.addMatcher(N.matcher,N.reducer)}v&&S.addDefaultCase(v)})}var d;return{name:t,reducer:function(f,g){return d||(d=c()),d(f,g)},actions:l,caseReducers:o,getInitialState:function(){return d||(d=c()),d.getInitialState()}}}var xD="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",bD=function(e){e===void 0&&(e=21);for(var t="",n=e;n--;)t+=xD[Math.random()*64|0];return t},wD=["name","message","stack","code"],S0=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),bS=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),_D=function(e){if(typeof e=="object"&&e!==null){for(var t={},n=0,r=wD;n<r.length;n++){var i=r[n];typeof e[i]=="string"&&(t[i]=e[i])}return t}return{message:String(e)}};(function(){function e(t,n,r){var i=$o(t+"/fulfilled",function(d,f,g,m){return{payload:d,meta:_0(Lo({},m||{}),{arg:g,requestId:f,requestStatus:"fulfilled"})}}),o=$o(t+"/pending",function(d,f,g){return{payload:void 0,meta:_0(Lo({},g||{}),{arg:f,requestId:d,requestStatus:"pending"})}}),s=$o(t+"/rejected",function(d,f,g,m,x){return{payload:m,error:(r&&r.serializeError||_D)(d||"Rejected"),meta:_0(Lo({},x||{}),{arg:g,requestId:f,rejectedWithValue:!!m,requestStatus:"rejected",aborted:(d==null?void 0:d.name)==="AbortError",condition:(d==null?void 0:d.name)==="ConditionError"})}}),l=typeof AbortController!="undefined"?AbortController:function(){function d(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return d.prototype.abort=function(){},d}();function c(d){return function(f,g,m){var x=r!=null&&r.idGenerator?r.idGenerator(d):bD(),w=new l,_;function v(S){_=S,w.abort()}var b=function(){return sD(this,null,function(){var S,C,E,T,N,L,z;return eD(this,function(B){switch(B.label){case 0:return B.trys.push([0,4,,5]),T=(S=r==null?void 0:r.condition)==null?void 0:S.call(r,d,{getState:g,extra:m}),kD(T)?[4,T]:[3,2];case 1:T=B.sent(),B.label=2;case 2:if(T===!1||w.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return N=new Promise(function(H,Q){return w.signal.addEventListener("abort",function(){return Q({name:"AbortError",message:_||"Aborted"})})}),f(o(x,d,(C=r==null?void 0:r.getPendingMeta)==null?void 0:C.call(r,{requestId:x,arg:d},{getState:g,extra:m}))),[4,Promise.race([N,Promise.resolve(n(d,{dispatch:f,getState:g,extra:m,requestId:x,signal:w.signal,abort:v,rejectWithValue:function(H,Q){return new S0(H,Q)},fulfillWithValue:function(H,Q){return new bS(H,Q)}})).then(function(H){if(H instanceof S0)throw H;return H instanceof bS?i(H.payload,x,d,H.meta):i(H,x,d)})])];case 3:return E=B.sent(),[3,5];case 4:return L=B.sent(),E=L instanceof S0?s(null,x,d,L.payload,L.meta):s(L,x,d),[3,5];case 5:return z=r&&!r.dispatchConditionRejection&&s.match(E)&&E.meta.condition,z||f(E),[2,E]}})})}();return Object.assign(b,{abort:v,requestId:x,arg:d,unwrap:function(){return b.then(SD)}})}}return Object.assign(c,{pending:o,rejected:s,fulfilled:i,typePrefix:t})}return e.withTypes=function(){return e},e})();function SD(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function kD(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var Jy="listenerMiddleware";$o(Jy+"/add");$o(Jy+"/removeAll");$o(Jy+"/remove");var wS;typeof queueMicrotask=="function"&&queueMicrotask.bind(typeof window!="undefined"?window:typeof global!="undefined"?global:globalThis);W7();const D3=Ws({name:"site",initialState:{darkStatus:!1,sideBarStatus:!0},reducers:{setDarkMode:e=>{e.darkStatus=!e.darkStatus},setSideBarStatus:e=>{e.sideBarStatus=!e.sideBarStatus}}}),{setDarkMode:z3,setSideBarStatus:CD}=D3.actions;var PD=D3.reducer;const _S=({whichStatus:e,changeStatus:t})=>{const[n,r]=R.exports.useState(!1),i=Hy();return p(I7,{children:p("div",{className:`button-box ${n?"button-true":""}`,onClick:()=>{!e||(r(!n),e==="online"?t():i(z3()))},children:p("div",{className:"ball"})})})},ED=()=>{let e=qo();const[t,n]=R.exports.useState(!1),[r,i]=R.exports.useState(!1);return p(_7,{children:O("div",{className:"profile-box",children:[p("div",{className:"profile",onClick:()=>n(!t),children:p(Wh,{})}),p("div",{className:`profile-menu ${t?"show-profile-menu":""}`,children:O("div",{className:"menu-box",children:[O("div",{className:"profile-info",children:[p("div",{className:"pp",children:p(Wh,{})}),O("div",{className:"info",children:[p("div",{className:"username",children:"Sitaram"}),O("div",{className:"status",children:[p("div",{className:`status-icon ${r?"online":""}`,children:p(Vy,{})}),p("span",{children:r?"Online":"Offline"})]})]})]}),O("div",{className:"status-button",children:[p("span",{children:"Online"}),p(_S,{whichStatus:"online",changeStatus:()=>i(!r)})]}),p("div",{className:"menu-list",children:O("ul",{children:[p("li",{children:O("a",{href:"./#/user-profile",className:"item",children:[p(Wv,{}),p("span",{children:"Account Settings"})]})}),p("hr",{}),O("li",{children:[O("div",{className:"item",children:[p(P3,{})," ",p("span",{children:"Dark Theme"})]}),p(_S,{whichStatus:"darkmode"})]}),p("hr",{}),p("li",{children:O("div",{className:"item",onClick:()=>{document.cookie="isLoggedIn="+!1,e("/login")},children:[p(E7,{style:{transform:"rotate(180deg)"}})," ",p("span",{children:"Log Out"})]})})]})})]})})]})})},MD=he.div`
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
`,OD=he.div`
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
`,RD=he.div`
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
`,TD=({user:e,imageId:t})=>p(OD,{children:p("li",{children:O("div",{className:"item",children:[p("div",{className:"pp",children:p("img",{src:`https://i.pravatar.cc/5${t}`})}),O("div",{className:"hover-section",children:[O("div",{className:"info",children:[p("div",{className:"username",children:e.username}),p("div",{className:"title",children:e.game})]}),O("div",{className:"live",children:[p("div",{className:"live-icon",children:p(Vy,{})}),p("span",{children:"333"})]})]})]})})}),SS=()=>{const{users:e}=mn(t=>t.user);return p(RD,{children:O("div",{className:"list",children:[p("ul",{children:e.map((t,n)=>{if(!(n>4))return p(TD,{user:t,imageId:n},n)})}),p("div",{className:"show-more",children:p("span",{children:"Show More"})})]})})},AD=he.div`
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
`,F3=({placeholder:e})=>{const[t,n]=R.exports.useState(!1);return p(AD,{children:O("div",{className:`searchbar-box ${t?"focus":""}`,children:[p("div",{className:"search-icon",children:p(Yy,{})}),p("input",{type:"text",placeholder:e,className:"input",onFocus:()=>n(!0),onBlur:()=>n(!1)})]})})},ND=({mySize:e})=>{const{sideBarStatus:t}=mn(r=>r.site),n=Hy();return p(MD,{children:O("div",{className:"sidebar-box",children:[O("div",{className:"list-title",children:[p("h1",{children:"Followed Channels"}),p("div",{className:"title-icon",onClick:()=>n(CD(!t)),children:p(v7,{})}),p("div",{className:"followed",children:p(y7,{})})]}),p(SS,{}),O("div",{className:"list-title",children:[p("h1",{children:"Recommended Channels"}),p("div",{className:"camera",children:p(M7,{})})]}),p(SS,{}),p("div",{className:"side-search",children:p(F3,{placeholder:"Search to Add Friends"})})]})})},LD=async(e,t={})=>{const{method:n="GET",headers:r={},body:i}=t;try{const o=await fetch(e,{method:n,headers:{"Content-Type":"application/json",...r},body:n==="GET"?void 0:JSON.stringify(i)});if(!o.ok){const s=await o.json();throw new Error(s.message||"Something went wrong")}return await o.json()}catch(o){throw console.error("API Request Error:",o.message),new Error(o.message||"Something went wrong")}},Bp=()=>{const{protocol:e,hostname:t}=window.location;return t==="localhost"||t==="127.0.0.1"?`${e}//${t}/star-mf`:"http://savingpulse.com"},jp=async e=>await LD(e),pl=(e="")=>{const t=DD(e);return jp(t)},$D=e=>{const t=`${Bp()}/mutual-funds/${e}?ajax=true`;return jp(t)},ID=e=>{const t=`${Bp()}/mutual-funds-chart/${e}?ajax=true`;return jp(t)},B3=e=>{const t=`${Bp()}/search-for-schemes/${encodeURIComponent(e)}?ajax=true`;return jp(t)},DD=e=>{const n={schemes:"/schemes","sip-with-100":"/schemes/sip-with-100","high-return":"/schemes/high-return","tax-saving":"/schemes/tax-saving","large-cap":"/schemes/large-cap","mid-cap":"/schemes/mid-cap","small-cap":"/schemes/small-cap"}[e]||"";return`${Bp()}${n}?ajax=true`};function j3(e){return Ke({tag:"svg",attr:{version:"1.1",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 4.736c-0.515 0-0.933-0.418-0.933-0.933v-2.798c0-0.515 0.418-0.933 0.933-0.933s0.933 0.418 0.933 0.933v2.798c0 0.515-0.418 0.933-0.933 0.933z"}},{tag:"path",attr:{d:"M8 15.577c-0.322 0-0.583-0.261-0.583-0.583v-2.798c0-0.322 0.261-0.583 0.583-0.583s0.583 0.261 0.583 0.583v2.798c0 0.322-0.261 0.583-0.583 0.583z"}},{tag:"path",attr:{d:"M5.902 5.24c-0.302 0-0.596-0.157-0.758-0.437l-1.399-2.423c-0.241-0.418-0.098-0.953 0.32-1.194s0.953-0.098 1.194 0.32l1.399 2.423c0.241 0.418 0.098 0.953-0.32 1.194-0.138 0.079-0.288 0.117-0.436 0.117z"}},{tag:"path",attr:{d:"M11.498 14.582c-0.181 0-0.358-0.094-0.455-0.262l-1.399-2.423c-0.145-0.251-0.059-0.572 0.192-0.717s0.572-0.059 0.717 0.192l1.399 2.423c0.145 0.251 0.059 0.572-0.192 0.717-0.083 0.048-0.173 0.070-0.262 0.070z"}},{tag:"path",attr:{d:"M4.365 6.718c-0.138 0-0.279-0.035-0.407-0.109l-2.423-1.399c-0.39-0.225-0.524-0.724-0.299-1.115s0.724-0.524 1.115-0.299l2.423 1.399c0.39 0.225 0.524 0.724 0.299 1.115-0.151 0.262-0.425 0.408-0.707 0.408z"}},{tag:"path",attr:{d:"M14.057 11.964c-0.079 0-0.159-0.020-0.233-0.063l-2.423-1.399c-0.223-0.129-0.299-0.414-0.171-0.637s0.414-0.299 0.637-0.171l2.423 1.399c0.223 0.129 0.299 0.414 0.171 0.637-0.086 0.15-0.243 0.233-0.404 0.233z"}},{tag:"path",attr:{d:"M3.803 8.758h-2.798c-0.418 0-0.758-0.339-0.758-0.758s0.339-0.758 0.758-0.758h2.798c0.419 0 0.758 0.339 0.758 0.758s-0.339 0.758-0.758 0.758z"}},{tag:"path",attr:{d:"M14.995 8.466c-0 0 0 0 0 0h-2.798c-0.258-0-0.466-0.209-0.466-0.466s0.209-0.466 0.466-0.466c0 0 0 0 0 0h2.798c0.258 0 0.466 0.209 0.466 0.466s-0.209 0.466-0.466 0.466z"}},{tag:"path",attr:{d:"M1.943 12.197c-0.242 0-0.477-0.125-0.606-0.35-0.193-0.335-0.079-0.762 0.256-0.955l2.423-1.399c0.335-0.193 0.762-0.079 0.955 0.256s0.079 0.762-0.256 0.955l-2.423 1.399c-0.11 0.064-0.23 0.094-0.349 0.094z"}},{tag:"path",attr:{d:"M11.635 6.368c-0.161 0-0.318-0.084-0.404-0.233-0.129-0.223-0.052-0.508 0.171-0.637l2.423-1.399c0.223-0.129 0.508-0.052 0.637 0.171s0.052 0.508-0.171 0.637l-2.423 1.399c-0.073 0.042-0.154 0.063-0.233 0.063z"}},{tag:"path",attr:{d:"M4.502 14.699c-0.109 0-0.219-0.028-0.32-0.086-0.307-0.177-0.412-0.569-0.235-0.876l1.399-2.423c0.177-0.307 0.569-0.412 0.876-0.235s0.412 0.569 0.235 0.876l-1.399 2.423c-0.119 0.206-0.334 0.321-0.556 0.321z"}},{tag:"path",attr:{d:"M10.098 4.832c-0.079 0-0.159-0.020-0.233-0.063-0.223-0.129-0.299-0.414-0.171-0.637l1.399-2.423c0.129-0.223 0.414-0.299 0.637-0.171s0.299 0.414 0.171 0.637l-1.399 2.423c-0.086 0.15-0.243 0.233-0.404 0.233z"}}]})(e)}function W3(e){return Ke({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M456.69 421.39L362.6 327.3a173.81 173.81 0 0034.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 00327.3 362.6l94.09 94.09a25 25 0 0035.3-35.3zM97.92 222.72a124.8 124.8 0 11124.8 124.8 124.95 124.95 0 01-124.8-124.8z"}}]})(e)}const zD=({mySize:e})=>{const{pathname:t}=pr(),[n,r]=R.exports.useState(""),[i,o]=R.exports.useState(!1),[s,l]=R.exports.useState([]),c=f=>{f.target.value.length<3};return R.exports.useEffect(()=>{if(n.length<3)return;o(!0),(async()=>{try{const g=encodeURIComponent(n),m=await B3(g);l(m)}catch(g){console.log(g)}finally{o(!1)}})()},[n]),p(f7,{children:O(qt,{children:[p("div",{className:"header-box",children:O("header",{children:[p("div",{className:"left",children:O("ul",{children:[p("li",{children:p("div",{className:"item",children:p(ft,{to:"/explore",children:p("div",{className:"logo",children:p("img",{src:"./public/images/logo/filtered/savingpulse-black-transparent(1).png"})})})})}),p("li",{className:t==="/following"?"active":"",children:p(ft,{to:"/following",className:"link",children:p("div",{className:"item",children:"Following"})})}),p("li",{className:t==="/explore"?"active":"",children:p(ft,{to:"/explore",className:"link",children:p("div",{className:"item",children:"Home"})})}),p("li",{className:t==="/ipo"?"active":"",children:p(ft,{to:"/ipo",className:"link",children:p("div",{className:"item",children:"IPO's"})})}),p("li",{className:t==="/offers"?"active":"",children:p(ft,{to:"/offers",className:"link",children:p("div",{className:"item",children:"Offers"})})}),p("li",{children:p("div",{className:"item",children:p(Uy,{className:"item-icon"})})})]})}),p("div",{className:"bottom"}),O("div",{className:"right",children:[O("div",{className:"search-bar",children:[p("input",{type:"text",placeholder:"Search",value:n,onChange:f=>{r(f.target.value)},onKeyDown:c}),p("div",{className:"search-icon",children:p(Yy,{})})]}),p("div",{className:"right-icons",children:p("ul",{children:p("li",{children:p(b7,{})})})}),p("div",{className:"profile-desktop",children:p(ED,{})})]}),p("div",{className:`search-result ${s.length<1?"hide":""}`,children:i?p("div",{className:"spinner",children:p(j3,{})}):s.map((f,g)=>p("p",{children:O(ft,{to:`/mutual-fund/${f.Scheme_Code}`,children:[p(W3,{})," ",p("span",{children:f.Scheme_Name})]},g)},g))})]})}),p("div",{className:"left-bar",children:p(ND,{mySize:e})})]})})},FD=he.header`
  display: none;

  // Header Navbar
  header {
    width: 100%;
    // height: 75px;
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
`,BD=he.div`
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
          padding: 1rem;
          position: absolute;
          right: 1.7rem;
        }
      }

      .spinner { text-align: center; svg { height: 2rem; width: 2rem; }}
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
`;function jD(e){return Ke({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M384 336H192c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16l140.1 0L400 115.9V320c0 8.8-7.2 16-16 16zM192 384H384c35.3 0 64-28.7 64-64V115.9c0-12.7-5.1-24.9-14.1-33.9L366.1 14.1c-9-9-21.2-14.1-33.9-14.1H192c-35.3 0-64 28.7-64 64V320c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H256c35.3 0 64-28.7 64-64V416H272v32c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192c0-8.8 7.2-16 16-16H96V128H64z"}}]})(e)}const WD=({searchStatus:e,setSearchStatus:t})=>{const[n,r]=R.exports.useState(""),[i,o]=R.exports.useState(!1),[s,l]=R.exports.useState([]),c=m=>{m.target.value.length<3};R.exports.useEffect(()=>{if(n.length<3)return;o(!0),(async()=>{try{const x=encodeURIComponent(n),w=await B3(x);l(w)}catch(x){console.log(x)}finally{o(!1)}})()},[n]);const d=m=>{r(m.target.value)},f=R.exports.useRef(null);R.exports.useState("Copy this text to clipboard!");const g=()=>{const m=f.current.innerText;navigator.clipboard.writeText(m).then(()=>{console.log("Text copied to clipboard!")}).catch(x=>{console.error("Failed to copy text: ",x)})};return p(BD,{className:e?"search-visible":"",children:O("div",{className:"search-box",children:[O("div",{className:"search-bar",children:[p(C3,{className:"search-close",onClick:()=>t(!e)}),p("input",{type:"text",value:n,onChange:d,onKeyDown:c,placeholder:"Search mutual fund scheme..."})]}),p("div",{className:"search-result",children:i?p("div",{className:"spinner",children:p(j3,{})}):s.map((m,x)=>O("p",{children:[O(ft,{to:`/mutual-fund/${m.Scheme_Code}`,children:[p(W3,{})," ",p("span",{ref:f,children:m.Scheme_Name})]},x),p("span",{onClick:g,className:"click-to-copy",children:p(jD,{})})]},x))})]})})},HD=he.div`
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
`,VD=he.div`
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
`,UD=()=>{const{darkStatus:e}=mn(r=>r.site),t=Hy();return p(VD,{children:p("div",{className:"darkMode-container",onClick:r=>(r.preventDefault(),t(z3())),children:p("div",{className:`ball ${e?"dark":""}`})})})},YD=({handleCloseProfileMenu:e})=>{let t=qo();return p(HD,{children:O("div",{className:"profile-menu-container",children:[O("div",{className:"title",children:[p(C3,{onClick:e}),p("h1",{children:"Account"}),p(Wv,{onClick:()=>t("/user-profile")})]}),O("div",{className:"user",children:[p("div",{className:"user__top",children:p("div",{className:"user-box",children:p(Wh,{})})}),p("div",{className:"user__bottom",children:p("div",{className:"username",children:"Arun Suthar"})}),p("span",{className:"user-since",children:"Member since 2020"})]}),p("div",{className:"settings",children:O("ul",{children:[p("li",{children:O("div",{className:"settings__title",children:[O("div",{className:"title-left",children:[p(k7,{className:"title-icon"}),"Subscriptions"]}),p(m0,{})]})}),p("li",{children:O("div",{className:"settings__title",children:[O("div",{className:"title-left",children:[p(S7,{className:"title-icon"}),"Friends"]}),p(m0,{})]})}),p("li",{children:p(ft,{to:"/settings",children:O("div",{className:"settings__title",children:[O("div",{className:"title-left",children:[p(Wv,{className:"title-icon"}),"Settings"]}),p(m0,{})]})})}),p("li",{children:O("div",{className:"settings__title",children:[O("div",{className:"title-left",children:[p(P3,{className:"title-icon"}),"Dark Mode"]}),p(UD,{})]})}),p("li",{children:p("div",{className:"settings__title",onClick:()=>{document.cookie="isLoggedIn="+!1,t("/login")},children:O("div",{className:"title-left",children:[p($7,{className:"title-icon"}),"Logout"]})})})]})})]})})},KD=()=>{const{pathname:e}=pr(),[t,n]=R.exports.useState(!1),[r,i]=R.exports.useState(!1),o=()=>i(!r);let s="Home";switch(e){case"/mutual-funds":s="Mutual Funds";break;case"/following":s="Mutual Funds";break;case"/":s="Home";break;case"/ipo":s="Intial Public Offers";break;case"/offers":s="Offers";break;case"/all-mutual-funds":s="All Mutual Funds";break}return O(FD,{children:[O("header",{children:[p(ft,{to:"/",children:p("div",{className:"logo",children:p("img",{src:"./images/logo/filtered/savingpulse-mb-transparent.png"})})}),p("h1",{className:"page-name",children:s}),p(WD,{searchStatus:t,setSearchStatus:n}),O("div",{className:"right-buttons",children:[p(Yy,{onClick:()=>n(!t)}),"\xA0 \xA0",p("div",{className:`profile-menu-box ${r?"visible":""}`,children:p(YD,{handleCloseProfileMenu:o})}),p("div",{className:"profile-box",children:p(Wh,{onClick:()=>i(!r)})})]})]}),O("nav",{children:[p(ft,{to:"/mutual-funds",onClick:()=>i(!1),children:O("div",{className:`item ${e==="/mutual-funds"?"active":""}`,children:[p(A7,{}),p("span",{children:"Funds"})]})}),p(ft,{to:"/following",onClick:()=>i(!1),children:O("div",{className:`item ${e==="/following"?"active":""}`,children:[p(N7,{}),p("span",{children:"Following"})]})}),p(ft,{to:"/",onClick:()=>i(!1),children:O("div",{className:`item ${e==="/"?"active":""}`,children:[p(O7,{}),p("span",{children:"Home"})]})}),p(ft,{to:"/ipo",onClick:()=>i(!1),children:O("div",{className:`item ${e==="/ipo"?"active":""}`,children:[p(T7,{className:"item__browse"}),p("span",{children:"IPO"})]})}),p(ft,{to:"/offers",onClick:()=>i(!1),children:O("div",{className:`item ${e==="/offers"?"active":""}`,children:[p(C7,{className:"item__profile"}),p("span",{children:"Offers"})]})})]})]})},XD=({mySize:e})=>O("div",{className:"header",children:[p(KD,{}),p(zD,{mySize:e})]}),GD=he.div`
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
`,qD=he.div`
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
`,k0=({ipo:e})=>{var t,n,r;return p(qD,{children:O("div",{className:"ipo-box",children:[O("div",{className:"header",children:[p("div",{className:"picture",children:p("img",{src:e.image,alt:""})}),O("div",{children:[p("h2",{className:"name",children:e.name}),O("p",{className:"offer",children:["Offer date: ",(t=e==null?void 0:e.date)==null?void 0:t.start," - ",(n=e==null?void 0:e.date)==null?void 0:n.end]})]})]}),O("div",{className:"actions",children:[O("div",{className:"tags",children:[p("div",{className:"tag",children:e.exchange}),p("div",{className:"tag",children:"Live"})]}),O("div",{className:"action-link",children:[p(ft,{className:"link",to:"",title:"Apply",children:"Apply"}),O(ft,{className:"link",to:"",title:"Check Allotment",children:[p("span",{className:"hide-mb1",children:"Check "}),"Allotment"]})]})]}),O("div",{className:"more-details",children:[O("div",{children:[p("span",{children:"Offer Price"}),p("span",{children:(r=e==null?void 0:e.price)==null?void 0:r.offer})]}),p("div",{className:"divider"}),O("div",{children:[p("span",{children:"Lot Size"}),p("span",{children:e.lotSize})]}),p("div",{className:"divider"}),O("div",{children:[p("span",{children:"Subscription"}),O("span",{children:[e.subscriptions," times"]})]})]})]})})},ZD=he.div`
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
`,QD=()=>p(ZD,{children:p("div",{className:"tags-box",children:O("ul",{children:[p("li",{children:O("div",{className:"item",children:[p("span",{children:"Games"}),p("div",{className:"icon",children:p("img",{src:"https://static.twitchcdn.net/assets/gaming-e9019587744b56b11b43.svg",alt:""})})]})}),p("li",{children:O("div",{className:"item",children:[p("span",{children:"IRL"}),p("div",{className:"icon",children:p("img",{src:"https://static.twitchcdn.net/assets/irl-baa32e8e64a6974282c0.svg",alt:""})})]})}),p("li",{children:O("div",{className:"item",children:[p("span",{children:"Music"}),p("div",{className:"icon",children:p("img",{src:"https://static.twitchcdn.net/assets/music-5fb4595a30d04d991e24.svg",alt:""})})]})}),p("li",{children:O("div",{className:"item",children:[p("span",{children:"Esports"}),p("div",{className:"icon",children:p("img",{src:"https://static.twitchcdn.net/assets/esports-7a078acca57531d11e29.svg",alt:""})})]})}),p("li",{children:O("div",{className:"item",children:[p("span",{children:"Creative"}),p("div",{className:"icon",children:p("img",{src:"https://static.twitchcdn.net/assets/creative-6423fb5fbcf31fadee38.svg",alt:""})})]})})]})})}),JD=he.div`
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
      padding: 5px 10px;
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
`,Gn=({title:e,to:t})=>{const{pathname:n}=pr();return p(JD,{children:p("div",{className:`link-box ${n==t?"active":""}`,children:p(ft,{to:t||"/",className:"link",children:e||"default"})})})};var H3={};function ez(e){if(e&&e.__esModule)return e;var t={};if(e!=null){for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}}return t.default=e,t}var V3=ez,Vo={};function tz(e){return e&&e.__esModule?e:{default:e}}var nz=tz;function Xv(){return U3=Xv=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Xv.apply(this,arguments)}var U3=Xv;function rz(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}var iz=rz,oz=iz;function sz(e,t){if(e==null)return{};var n=oz(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(n[r]=e[r]))}return n}var az=sz;function lz(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var cz=lz;function kS(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function uz(e,t,n){return t&&kS(e.prototype,t),n&&kS(e,n),e}var dz=uz;function ja(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?ja=function(n){return typeof n}:ja=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},ja(e)}function Zf(e){return typeof Symbol=="function"&&ja(Symbol.iterator)==="symbol"?Gv=Zf=function(n){return ja(n)}:Gv=Zf=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":ja(n)},Zf(e)}var Gv=Zf;function fz(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var hz=fz,pz=Gv,gz=hz;function mz(e,t){return t&&(pz(t)==="object"||typeof t=="function")?t:gz(e)}var vz=mz;function qv(e){return Y3=qv=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},qv(e)}var Y3=qv;function Zv(e,t){return K3=Zv=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},Zv(e,t)}var K3=Zv,yz=K3;function xz(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&yz(e,t)}var bz=xz,wz=function(){},ex=wz,Yu={};function _z(e){return e&&e.__esModule?e:{default:e}}var Wp=_z,Hp={},X3=Wp;Object.defineProperty(Hp,"__esModule",{value:!0});Hp.default=void 0;var Sz=X3(R.exports);X3(ex);var kz=function(t){t.index;var n=t.children;Sz.default.Children.count(n)},Cz=kz;Hp.default=Cz;var tx={},Ku={};Object.defineProperty(Ku,"__esModule",{value:!0});Ku.default=void 0;var Pz={RESISTANCE_COEF:.6,UNCERTAINTY_THRESHOLD:3};Ku.default=Pz;var G3=Wp;Object.defineProperty(tx,"__esModule",{value:!0});tx.default=Mz;var Ez=G3(R.exports),CS=G3(Ku);function Mz(e){var t=e.children,n=e.startIndex,r=e.startX,i=e.pageX,o=e.viewLength,s=e.resistance,l=Ez.default.Children.count(t)-1,c=n+(r-i)/o,d;return s?c<0?c=Math.exp(c*CS.default.RESISTANCE_COEF)-1:c>l&&(c=l+1-Math.exp((l-c)*CS.default.RESISTANCE_COEF)):c<0?(c=0,d=(c-n)*o+i):c>l&&(c=l,d=(c-n)*o+i),{index:c,startX:d}}var Vp={},Oz=Wp;Object.defineProperty(Vp,"__esModule",{value:!0});Vp.default=void 0;var PS=Oz(R.exports),Rz=function(t,n){var r=!1,i=function(f){return f?f.key:"empty"};if(t.children.length&&n.children.length){var o=PS.default.Children.map(t.children,i),s=o[t.index];if(s!=null){var l=PS.default.Children.map(n.children,i),c=l[n.index];s===c&&(r=!0)}}return r},Tz=Rz;Vp.default=Tz;var Up={};Object.defineProperty(Up,"__esModule",{value:!0});Up.default=void 0;function Az(e,t){var n=e%t;return n<0?n+t:n}var Nz=Az;Up.default=Nz;(function(e){var t=Wp;Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"checkIndexBounds",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(e,"computeIndex",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(e,"constant",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(e,"getDisplaySameSlide",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(e,"mod",{enumerable:!0,get:function(){return s.default}});var n=t(Hp),r=t(tx),i=t(Ku),o=t(Vp),s=t(Up)})(Yu);var Lz=V3,Zi=nz;Object.defineProperty(Vo,"__esModule",{value:!0});Vo.getDomTreeShapes=q3;Vo.findNativeHandler=Z3;Vo.default=Vo.SwipeableViewsContext=void 0;var hf=Zi(U3),$z=Zi(az),Iz=Zi(cz),Dz=Zi(dz),zz=Zi(vz),Fz=Zi(Y3),Bz=Zi(bz),$i=Lz(R.exports);Zi(fl.exports);Zi(ex);var pf=Yu;function ES(e,t,n,r){return e.addEventListener(t,n,r),{remove:function(){e.removeEventListener(t,n,r)}}}var MS={container:{direction:"ltr",display:"flex",willChange:"transform"},slide:{width:"100%",WebkitFlexShrink:0,flexShrink:0,overflow:"auto"}},li={root:{x:{overflowX:"hidden"},"x-reverse":{overflowX:"hidden"},y:{overflowY:"hidden"},"y-reverse":{overflowY:"hidden"}},flexDirection:{x:"row","x-reverse":"row-reverse",y:"column","y-reverse":"column-reverse"},transform:{x:function(t){return"translate(".concat(-t,"%, 0)")},"x-reverse":function(t){return"translate(".concat(t,"%, 0)")},y:function(t){return"translate(0, ".concat(-t,"%)")},"y-reverse":function(t){return"translate(0, ".concat(t,"%)")}},length:{x:"width","x-reverse":"width",y:"height","y-reverse":"height"},rotationMatrix:{x:{x:[1,0],y:[0,1]},"x-reverse":{x:[-1,0],y:[0,1]},y:{x:[0,1],y:[1,0]},"y-reverse":{x:[0,-1],y:[1,0]}},scrollPosition:{x:"scrollLeft","x-reverse":"scrollLeft",y:"scrollTop","y-reverse":"scrollTop"},scrollLength:{x:"scrollWidth","x-reverse":"scrollWidth",y:"scrollHeight","y-reverse":"scrollHeight"},clientLength:{x:"clientWidth","x-reverse":"clientWidth",y:"clientHeight","y-reverse":"clientHeight"}};function C0(e,t){var n=t.duration,r=t.easeFunction,i=t.delay;return"".concat(e," ").concat(n," ").concat(r," ").concat(i)}function P0(e,t){var n=li.rotationMatrix[t];return{pageX:n.x[0]*e.pageX+n.x[1]*e.pageY,pageY:n.y[0]*e.pageX+n.y[1]*e.pageY}}function gf(e){return e.touches=[{pageX:e.pageX,pageY:e.pageY}],e}function q3(e,t){for(var n=[];e&&e!==t&&e!==document.body&&!e.hasAttribute("data-swipeable");){var r=window.getComputedStyle(e);r.getPropertyValue("position")==="absolute"||r.getPropertyValue("overflow-x")==="hidden"?n=[]:(e.clientWidth>0&&e.scrollWidth>e.clientWidth||e.clientHeight>0&&e.scrollHeight>e.clientHeight)&&n.push({element:e,scrollWidth:e.scrollWidth,scrollHeight:e.scrollHeight,clientWidth:e.clientWidth,clientHeight:e.clientHeight,scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}),e=e.parentNode}return n}var ps=null;function Z3(e){var t=e.domTreeShapes,n=e.pageX,r=e.startX,i=e.axis;return t.some(function(o){var s=n>=r;(i==="x"||i==="y")&&(s=!s);var l=Math.round(o[li.scrollPosition[i]]),c=l>0,d=l+o[li.clientLength[i]]<o[li.scrollLength[i]];return s&&d||!s&&c?(ps=o.element,!0):!1})}var Q3=$i.createContext();Vo.SwipeableViewsContext=Q3;var Yp=function(e){(0,Bz.default)(t,e);function t(n){var r;return(0,Iz.default)(this,t),r=(0,zz.default)(this,(0,Fz.default)(t).call(this,n)),r.rootNode=null,r.containerNode=null,r.ignoreNextScrollEvents=!1,r.viewLength=0,r.startX=0,r.lastX=0,r.vx=0,r.startY=0,r.isSwiping=void 0,r.started=!1,r.startIndex=0,r.transitionListener=null,r.touchMoveListener=null,r.activeSlide=null,r.indexCurrent=null,r.firstRenderTimeout=null,r.setRootNode=function(i){r.rootNode=i},r.setContainerNode=function(i){r.containerNode=i},r.setActiveSlide=function(i){r.activeSlide=i,r.updateHeight()},r.handleSwipeStart=function(i){var o=r.props.axis,s=P0(i.touches[0],o);r.viewLength=r.rootNode.getBoundingClientRect()[li.length[o]],r.startX=s.pageX,r.lastX=s.pageX,r.vx=0,r.startY=s.pageY,r.isSwiping=void 0,r.started=!0;var l=window.getComputedStyle(r.containerNode),c=l.getPropertyValue("-webkit-transform")||l.getPropertyValue("transform");if(c&&c!=="none"){var d=c.split("(")[1].split(")")[0].split(","),f=window.getComputedStyle(r.rootNode),g=P0({pageX:parseInt(d[4],10),pageY:parseInt(d[5],10)},o);r.startIndex=-g.pageX/(r.viewLength-parseInt(f.paddingLeft,10)-parseInt(f.paddingRight,10))||0}},r.handleSwipeMove=function(i){if(!r.started){r.handleTouchStart(i);return}if(!(ps!==null&&ps!==r.rootNode)){var o=r.props,s=o.axis,l=o.children,c=o.ignoreNativeScroll,d=o.onSwitching,f=o.resistance,g=P0(i.touches[0],s);if(r.isSwiping===void 0){var m=Math.abs(g.pageX-r.startX),x=Math.abs(g.pageY-r.startY),w=m>x&&m>pf.constant.UNCERTAINTY_THRESHOLD;if(!f&&(s==="y"||s==="y-reverse")&&(r.indexCurrent===0&&r.startX<g.pageX||r.indexCurrent===$i.Children.count(r.props.children)-1&&r.startX>g.pageX)){r.isSwiping=!1;return}if(m>x&&i.preventDefault(),w===!0||x>pf.constant.UNCERTAINTY_THRESHOLD){r.isSwiping=w,r.startX=g.pageX;return}}if(r.isSwiping===!0){i.preventDefault(),r.vx=r.vx*.5+(g.pageX-r.lastX)*.5,r.lastX=g.pageX;var _=(0,pf.computeIndex)({children:l,resistance:f,pageX:g.pageX,startIndex:r.startIndex,startX:r.startX,viewLength:r.viewLength}),v=_.index,b=_.startX;if(ps===null&&!c){var S=q3(i.target,r.rootNode),C=Z3({domTreeShapes:S,startX:r.startX,pageX:g.pageX,axis:s});if(C)return}b?r.startX=b:ps===null&&(ps=r.rootNode),r.setIndexCurrent(v);var E=function(){d&&d(v,"move")};(r.state.displaySameSlide||!r.state.isDragging)&&r.setState({displaySameSlide:!1,isDragging:!0},E),E()}}},r.handleSwipeEnd=function(){if(ps=null,!!r.started&&(r.started=!1,r.isSwiping===!0)){var i=r.state.indexLatest,o=r.indexCurrent,s=i-o,l;Math.abs(r.vx)>r.props.threshold?r.vx>0?l=Math.floor(o):l=Math.ceil(o):Math.abs(s)>r.props.hysteresis?l=s>0?Math.floor(o):Math.ceil(o):l=i;var c=$i.Children.count(r.props.children)-1;l<0?l=0:l>c&&(l=c),r.setIndexCurrent(l),r.setState({indexLatest:l,isDragging:!1},function(){r.props.onSwitching&&r.props.onSwitching(l,"end"),r.props.onChangeIndex&&l!==i&&r.props.onChangeIndex(l,i,{reason:"swipe"}),o===i&&r.handleTransitionEnd()})}},r.handleTouchStart=function(i){r.props.onTouchStart&&r.props.onTouchStart(i),r.handleSwipeStart(i)},r.handleTouchEnd=function(i){r.props.onTouchEnd&&r.props.onTouchEnd(i),r.handleSwipeEnd(i)},r.handleMouseDown=function(i){r.props.onMouseDown&&r.props.onMouseDown(i),i.persist(),r.handleSwipeStart(gf(i))},r.handleMouseUp=function(i){r.props.onMouseUp&&r.props.onMouseUp(i),r.handleSwipeEnd(gf(i))},r.handleMouseLeave=function(i){r.props.onMouseLeave&&r.props.onMouseLeave(i),r.started&&r.handleSwipeEnd(gf(i))},r.handleMouseMove=function(i){r.props.onMouseMove&&r.props.onMouseMove(i),r.started&&r.handleSwipeMove(gf(i))},r.handleScroll=function(i){if(r.props.onScroll&&r.props.onScroll(i),i.target===r.rootNode){if(r.ignoreNextScrollEvents){r.ignoreNextScrollEvents=!1;return}var o=r.state.indexLatest,s=Math.ceil(i.target.scrollLeft/i.target.clientWidth)+o;r.ignoreNextScrollEvents=!0,i.target.scrollLeft=0,r.props.onChangeIndex&&s!==o&&r.props.onChangeIndex(s,o,{reason:"focus"})}},r.updateHeight=function(){if(r.activeSlide!==null){var i=r.activeSlide.children[0];i!==void 0&&i.offsetHeight!==void 0&&r.state.heightLatest!==i.offsetHeight&&r.setState({heightLatest:i.offsetHeight})}},r.state={indexLatest:n.index,isDragging:!1,renderOnlyActive:!n.disableLazyLoading,heightLatest:0,displaySameSlide:!0},r.setIndexCurrent(n.index),r}return(0,Dz.default)(t,[{key:"componentDidMount",value:function(){var r=this;this.transitionListener=ES(this.containerNode,"transitionend",function(i){i.target===r.containerNode&&r.handleTransitionEnd()}),this.touchMoveListener=ES(this.rootNode,"touchmove",function(i){r.props.disabled||r.handleSwipeMove(i)},{passive:!1}),this.props.disableLazyLoading||(this.firstRenderTimeout=setTimeout(function(){r.setState({renderOnlyActive:!1})},0)),this.props.action&&this.props.action({updateHeight:this.updateHeight})}},{key:"UNSAFE_componentWillReceiveProps",value:function(r){var i=r.index;typeof i=="number"&&i!==this.props.index&&(this.setIndexCurrent(i),this.setState({displaySameSlide:(0,pf.getDisplaySameSlide)(this.props,r),indexLatest:i}))}},{key:"componentWillUnmount",value:function(){this.transitionListener.remove(),this.touchMoveListener.remove(),clearTimeout(this.firstRenderTimeout)}},{key:"getSwipeableViewsContext",value:function(){var r=this;return{slideUpdateHeight:function(){r.updateHeight()}}}},{key:"setIndexCurrent",value:function(r){if(!this.props.animateTransitions&&this.indexCurrent!==r&&this.handleTransitionEnd(),this.indexCurrent=r,this.containerNode){var i=this.props.axis,o=li.transform[i](r*100);this.containerNode.style.WebkitTransform=o,this.containerNode.style.transform=o}}},{key:"handleTransitionEnd",value:function(){!this.props.onTransitionEnd||this.state.displaySameSlide||this.state.isDragging||this.props.onTransitionEnd()}},{key:"render",value:function(){var r=this,i=this.props;i.action;var o=i.animateHeight,s=i.animateTransitions,l=i.axis,c=i.children,d=i.containerStyle,f=i.disabled;i.disableLazyLoading;var g=i.enableMouseEvents;i.hysteresis,i.ignoreNativeScroll,i.index,i.onChangeIndex,i.onSwitching,i.onTransitionEnd,i.resistance;var m=i.slideStyle,x=i.slideClassName,w=i.springConfig,_=i.style;i.threshold;var v=(0,$z.default)(i,["action","animateHeight","animateTransitions","axis","children","containerStyle","disabled","disableLazyLoading","enableMouseEvents","hysteresis","ignoreNativeScroll","index","onChangeIndex","onSwitching","onTransitionEnd","resistance","slideStyle","slideClassName","springConfig","style","threshold"]),b=this.state,S=b.displaySameSlide,C=b.heightLatest,E=b.indexLatest,T=b.isDragging,N=b.renderOnlyActive,L=f?{}:{onTouchStart:this.handleTouchStart,onTouchEnd:this.handleTouchEnd},z=!f&&g?{onMouseDown:this.handleMouseDown,onMouseUp:this.handleMouseUp,onMouseLeave:this.handleMouseLeave,onMouseMove:this.handleMouseMove}:{},B=(0,hf.default)({},MS.slide,m),H,Q;if(T||!s||S)H="all 0s ease 0s",Q="all 0s ease 0s";else if(H=C0("transform",w),Q=C0("-webkit-transform",w),C!==0){var te=", ".concat(C0("height",w));H+=te,Q+=te}var ae={height:null,WebkitFlexDirection:li.flexDirection[l],flexDirection:li.flexDirection[l],WebkitTransition:Q,transition:H};if(!N){var ye=li.transform[l](this.indexCurrent*100);ae.WebkitTransform=ye,ae.transform=ye}return o&&(ae.height=C),$i.createElement(Q3.Provider,{value:this.getSwipeableViewsContext()},$i.createElement("div",(0,hf.default)({ref:this.setRootNode,style:(0,hf.default)({},li.root[l],_)},v,L,z,{onScroll:this.handleScroll}),$i.createElement("div",{ref:this.setContainerNode,style:(0,hf.default)({},ae,MS.container,d),className:"react-swipeable-view-container"},$i.Children.map(c,function(oe,ge){if(N&&ge!==E)return null;var re,de=!0;return ge===E&&(de=!1,o&&(re=r.setActiveSlide,B.overflowY="hidden")),$i.createElement("div",{ref:re,style:B,className:x,"aria-hidden":de,"data-swipeable":"true"},oe)}))))}}]),t}($i.Component);Yp.displayName="ReactSwipableView";Yp.propTypes={};Yp.defaultProps={animateHeight:!1,animateTransitions:!0,axis:"x",disabled:!1,disableLazyLoading:!1,enableMouseEvents:!1,hysteresis:.6,ignoreNativeScroll:!1,index:0,threshold:5,springConfig:{duration:"0.35s",easeFunction:"cubic-bezier(0.15, 0.3, 0.25, 1)",delay:"0s"},resistance:!1};var jz=Yp;Vo.default=jz;(function(e){var t=V3;Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(e,"SwipeableViewsContext",{enumerable:!0,get:function(){return n.SwipeableViewsContext}});var n=t(Vo)})(H3);var J3=OL(H3);const Wz=he.div`
  .navigation {
    width: auto;
    display: flex;
    align-items: center;
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
`,Xu=({tabs:e=[]})=>{const[t,n]=R.exports.useState(0);return O(Wz,{children:[p("div",{className:"tab-manager",children:p("div",{className:"navigation",children:e.map((r,i)=>p("div",{className:t===i?"nav-active":"",onClick:()=>n(i),children:r.title},i))})}),p(J3,{index:t,onChangeIndex:n,children:e.map((r,i)=>p("div",{children:r.component},i))})]})},ca=()=>{R.exports.useState(!0);const{ipos:e}=mn(t=>t.ipos);return p(qt,{children:O(GD,{children:[p("div",{className:"container",children:p(Xu,{tabs:[{name:"all",title:"All",component:p("div",{className:"",children:e.map((t,n)=>p(k0,{ipo:t,imageId:n},n))})},{name:"mainline",title:"Mainline",component:p("div",{className:"",children:e.map((t,n)=>t.type!=="mainline"?null:p(k0,{ipo:t,imageId:n},n))})},{name:"sme",title:"SME",component:p("div",{className:"",children:e.map((t,n)=>t.type!=="sme"?null:p(k0,{ipo:t,imageId:n},n))})}]})}),p("div",{className:"browse-desktop",children:O("div",{className:"ipo-box",children:[p("h1",{className:"page-title",children:"Browse"}),p(QD,{}),p("div",{className:"nav",children:O("ul",{children:[p("li",{children:p(Gn,{to:"/browse",title:"Categories"})}),p("li",{children:p(Gn,{to:"/browse/all",title:"Live Channels"})})]})}),O("div",{className:"search-filter",children:[O("div",{className:"search-box",children:[p("span",{children:"Filter by"}),p(F3,{placeholder:"Search Tags"})]}),O("div",{className:"filter",children:[p("span",{children:"Sort by"}),O("div",{className:"sort",children:["Recommended For You",p("div",{className:"sort-icon",children:p(S3,{})})]})]})]}),p(Pp,{})]})})]})})},Hz=he.div`
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
`,Vz=he.div`
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
`,Uz=({user:e,imageId:t})=>p(Vz,{children:O("div",{className:"channel-box",children:[O("div",{className:"live-screen",children:[p("img",{src:e.liveScreen,alt:""}),O("span",{children:[p(Vy,{className:"live-icon"})," ",e.viewers]})]}),O("div",{className:"live-info",children:[O("div",{className:"user",children:[p("div",{className:"user-pp",children:p("img",{src:`https://i.pravatar.cc/5${t}`,alt:""})}),p("div",{className:"user-name",children:e.username})]}),p("div",{className:"title",children:e.title}),p("div",{className:"game",children:e.game}),p("div",{className:"tags",children:p("div",{className:"tag",children:e.tag})})]})]})}),Yz=()=>{const{users:e}=mn(t=>t.user);return p(qt,{children:e.map((t,n)=>p(Uz,{user:t,imageId:n},n))})},Kz=he.div`
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
`,Xz=({user:e,imageId:t})=>p(Kz,{children:O("div",{className:"offline-box",children:[p("div",{className:"left",children:p("div",{className:"pp",children:p("img",{src:`https://i.pravatar.cc/5${t}`,alt:""})})}),O("div",{className:"right",children:[p("div",{className:"username",children:e.username}),p("div",{className:"videos",children:"7 new videos"})]})]})}),Gz=()=>{const{users:e}=mn(t=>t.user);return p(qt,{children:e.map((t,n)=>{if(n<3)return p(Xz,{user:t,imageId:n},n)})})},qz=()=>(pr(),p(qt,{children:O(Hz,{children:[p("div",{className:"follow-mobile",children:O("div",{className:"follow-box",children:[p("h1",{children:"Following"}),p("h3",{children:"Your Live Channels"}),p(Yz,{}),p("h3",{children:"Your Offline Channels"}),p(Gz,{})]})}),p("div",{className:"follow-desktop",children:O("div",{className:"follow-box",children:[p("div",{className:"nav",children:O("ul",{children:[p("li",{children:p(Gn,{to:"/following",title:"Overview"})}),p("li",{children:p(Gn,{to:"/following/live",title:"Live"})}),p("li",{children:p(Gn,{to:"/following/videos",title:"Videos"})}),p("li",{children:p(Gn,{to:"/following/categories",title:"Categories"})})]})}),p("div",{className:"page",children:p(Pp,{})})]})})]})})),Zz=he.div`
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
`,Qz=he.div`
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
`,Jz=({user:e,imageId:t,video:n})=>p(Zz,{children:O("div",{className:"channel-box",children:[O("div",{className:"live-screen",children:[p("img",{src:e.liveScreen,alt:""}),p("div",{className:`live ${n?"invisible":""}`,children:"live"}),p("div",{className:`viewers ${n?"invisible":""}`,children:"333 viewers"}),O("div",{className:`video ${n?"video-visible":""}`,children:[p("div",{className:"video-tag top",children:"11:44"}),p("div",{className:"video-tag bottom-right",children:"4 hours ago"}),p("div",{className:"video-tag bottom",children:"188 views"})]})]}),O("div",{className:"channel-info",children:[O("div",{className:"left",children:[p("div",{className:"pp",children:p("img",{src:`https://i.pravatar.cc/5${t}`,alt:""})}),O("div",{className:"profile-info",children:[p("div",{className:"title",children:e.title}),p("div",{className:"username",children:e.username}),p("div",{className:"game",children:e.game}),O("div",{className:"tags",children:[p("div",{className:"tag",children:"English"}),p("div",{className:"tag",children:"Esports"})]})]})]}),p("div",{className:"right",children:p(Uy,{})})]})]})}),kn=({channelTitle:e,video:t})=>{const{users:n}=mn(r=>r.user);return p(Qz,{children:O("div",{className:"channels-box",children:[e&&p("h1",{children:e}),p("div",{className:"list",children:n.map((r,i)=>{if(i<6)return p(Jz,{user:r,imageId:i,video:t},i)})})]})})},OS=()=>O(qt,{children:[p(kn,{}),p(kn,{}),p(kn,{}),p(kn,{}),p(kn,{}),p(kn,{}),p(kn,{}),p(kn,{})]}),eF=he.div`
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
`,tF=he.div`
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
`,nF=({game:e})=>p(eF,{children:O("div",{className:"game-box",children:[p("div",{className:"game-picture",children:p("img",{src:e.image,alt:""})}),O("div",{className:"game-name",children:[p("div",{className:"name",children:e.name}),p("div",{className:"other-icon",children:p(Uy,{})})]}),O("div",{className:"game-viewers",children:[e.viewer," viewers"]}),p("div",{className:"tags",children:p("div",{className:"tag",children:"English"})})]})}),eP=({title:e,boldTitle:t})=>{const{games:n}=mn(r=>r.category);return p(tF,{children:O("div",{className:"categories-box",children:[O("h1",{children:[p("span",{children:t})," ",e]}),p("div",{className:"list",children:n.map((r,i)=>p(nF,{game:r},i))})]})})},rF=he.div`
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
`,mf=({title:e})=>p(rF,{children:p("div",{className:"show-more",children:e&&O("span",{children:[e,p(S3,{className:"down-icon"})]})})}),iF=()=>O("div",{className:"overview-box",children:[p(kn,{channelTitle:"Live channels"}),p(mf,{title:"Show more"}),p(kn,{channelTitle:"Recommended channels"}),p(mf,{title:"Show more"}),p(kn,{channelTitle:"Latest videos",video:!0}),p(mf,{title:"Show more"}),p(eP,{title:"Live categories"}),p(mf,{})]}),oF=()=>p(qt,{children:p(kn,{channelTitle:"Live channels"})}),sF=()=>p(qt,{children:O("div",{className:"overview-page",children:[p(kn,{channelTitle:"Latest videos",video:!0}),p(kn,{video:!0}),p(kn,{video:!0}),p(kn,{video:!0})]})}),aF=()=>p(qt,{children:p(eP,{title:"Live categories"})}),lF=he.div`
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
`,cF=he.div`
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
`,RS=({offer:e})=>p(cF,{children:O("div",{className:"offer-box",children:[p("h2",{className:"offer-name",children:e.name}),p(ft,{to:"/{offer.href}",children:p("div",{className:"offer-picture",children:p("img",{src:e.image,alt:""})})}),p("div",{className:"know-more",children:p("button",{children:"Know More..."})})]})}),uF=()=>{const{offers:e}=mn(t=>t.offers);return p(qt,{children:p("div",{className:"offers-mobile",children:O(lF,{children:[p(Xu,{tabs:[{name:"brokers",title:"Brokers",component:p("div",{className:"container",children:e.map((t,n)=>{if(t.type!=="advisor")return p(RS,{offer:t,imageId:n},n)})})},{name:"advisors",title:"Advisors",component:p("div",{className:"container",children:e.map((t,n)=>{if(t.type!=="advisor")return p(RS,{offer:t,imageId:n},n)})})}]}),p("div",{className:"offers-desktop",children:O("div",{className:"offers-box",children:[p("h1",{className:"page-title",children:"Offers"}),p("div",{className:"nav",children:O("ul",{children:[p("li",{children:p(Gn,{to:"/offers/brokers",title:"Brokers"})}),p("li",{children:p(Gn,{to:"/offers/advisors",title:"Advisors"})})]})}),p("div",{className:"page",children:p(Pp,{})})]})})]})})})},dF=he.div`
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
`,TS=({type:e=""})=>{const{offers:t}=mn(n=>n.offers);return p(dF,{children:t.map((n,r)=>{if(n.type===e)return O("div",{className:`offer-box offer-${n.id}`,children:[O("div",{className:"left-side",children:[p("div",{className:"picture",children:p("img",{src:n.image,alt:""})}),p("h2",{className:"name",children:n.name})]}),O("div",{className:"right-side",children:[O("div",{children:[O("ul",{className:"available-options",children:[p("li",{children:"Equity"}),p("li",{children:"Future"}),p("li",{children:"Option"}),p("li",{children:"Commodity"})]}),O("ul",{className:"new-info",children:[p("li",{children:"Account Opening"}),p("li",{children:"Account Maintenance"}),p("li",{children:"Account Maintenance"}),p("li",{children:"Account Maintenance"})]})]}),O("ul",{className:"action-buttons",children:[p("li",{children:"View Details"}),p("li",{children:"Open Account"})]})]})]},n.id)})})};var Qv={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */(function(e,t){(function(){var n,r="4.17.21",i=200,o="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",s="Expected a function",l="Invalid `variable` option passed into `_.template`",c="__lodash_hash_undefined__",d=500,f="__lodash_placeholder__",g=1,m=2,x=4,w=1,_=2,v=1,b=2,S=4,C=8,E=16,T=32,N=64,L=128,z=256,B=512,H=30,Q="...",te=800,ae=16,ye=1,oe=2,ge=3,re=1/0,de=9007199254740991,Ue=17976931348623157e292,ct=0/0,Z=4294967295,U=Z-1,V=Z>>>1,X=[["ary",L],["bind",v],["bindKey",b],["curry",C],["curryRight",E],["flip",B],["partial",T],["partialRight",N],["rearg",z]],se="[object Arguments]",F="[object Array]",Ee="[object AsyncFunction]",J="[object Boolean]",Se="[object Date]",ze="[object DOMException]",Le="[object Error]",be="[object Function]",Je="[object GeneratorFunction]",ke="[object Map]",pe="[object Number]",et="[object Null]",we="[object Object]",Xe="[object Promise]",er="[object Proxy]",Oe="[object RegExp]",ut="[object Set]",ln="[object String]",Mt="[object Symbol]",xe="[object Undefined]",We="[object WeakMap]",Fr="[object WeakSet]",tn="[object ArrayBuffer]",ee="[object DataView]",G="[object Float32Array]",me="[object Float64Array]",Fe="[object Int8Array]",Be="[object Int16Array]",Ie="[object Int32Array]",Ln="[object Uint8Array]",Bn="[object Uint8ClampedArray]",Ge="[object Uint16Array]",vn="[object Uint32Array]",Qi=/\b__p \+= '';/g,ad=/\b(__p \+=) '' \+/g,ld=/(__e\(.*?\)|\b__t\)) \+\n'';/g,wl=/&(?:amp|lt|gt|quot|#39);/g,Us=/[&<>"']/g,_l=RegExp(wl.source),cd=RegExp(Us.source),Sl=/<%-([\s\S]+?)%>/g,Pg=/<%([\s\S]+?)%>/g,Ys=/<%=([\s\S]+?)%>/g,kl=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Cl=/^\w*$/,Eg=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Pl=/[\\^$.*+?()[\]{}|]/g,Mg=RegExp(Pl.source),El=/^\s+/,Og=/\s/,Rg=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Ml=/\{\n\/\* \[wrapped with (.+)\] \*/,Tg=/,? & /,Ol=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Rl=/[()=,{}\[\]\/\s]/,Ag=/\\(\\)?/g,Ot=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Kt=/\w*$/,Tl=/^[-+]0x[0-9a-f]+$/i,Ks=/^0b[01]+$/i,Br=/^\[object .+?Constructor\]$/,gM=/^0o[0-7]+$/i,mM=/^(?:0|[1-9]\d*)$/,vM=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,ud=/($^)/,yM=/['\n\r\u2028\u2029\\]/g,dd="\\ud800-\\udfff",xM="\\u0300-\\u036f",bM="\\ufe20-\\ufe2f",wM="\\u20d0-\\u20ff",Gx=xM+bM+wM,qx="\\u2700-\\u27bf",Zx="a-z\\xdf-\\xf6\\xf8-\\xff",_M="\\xac\\xb1\\xd7\\xf7",SM="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",kM="\\u2000-\\u206f",CM=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Qx="A-Z\\xc0-\\xd6\\xd8-\\xde",Jx="\\ufe0e\\ufe0f",eb=_M+SM+kM+CM,Ng="['\u2019]",PM="["+dd+"]",tb="["+eb+"]",fd="["+Gx+"]",nb="\\d+",EM="["+qx+"]",rb="["+Zx+"]",ib="[^"+dd+eb+nb+qx+Zx+Qx+"]",Lg="\\ud83c[\\udffb-\\udfff]",MM="(?:"+fd+"|"+Lg+")",ob="[^"+dd+"]",$g="(?:\\ud83c[\\udde6-\\uddff]){2}",Ig="[\\ud800-\\udbff][\\udc00-\\udfff]",Xs="["+Qx+"]",sb="\\u200d",ab="(?:"+rb+"|"+ib+")",OM="(?:"+Xs+"|"+ib+")",lb="(?:"+Ng+"(?:d|ll|m|re|s|t|ve))?",cb="(?:"+Ng+"(?:D|LL|M|RE|S|T|VE))?",ub=MM+"?",db="["+Jx+"]?",RM="(?:"+sb+"(?:"+[ob,$g,Ig].join("|")+")"+db+ub+")*",TM="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",AM="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",fb=db+ub+RM,NM="(?:"+[EM,$g,Ig].join("|")+")"+fb,LM="(?:"+[ob+fd+"?",fd,$g,Ig,PM].join("|")+")",$M=RegExp(Ng,"g"),IM=RegExp(fd,"g"),Dg=RegExp(Lg+"(?="+Lg+")|"+LM+fb,"g"),DM=RegExp([Xs+"?"+rb+"+"+lb+"(?="+[tb,Xs,"$"].join("|")+")",OM+"+"+cb+"(?="+[tb,Xs+ab,"$"].join("|")+")",Xs+"?"+ab+"+"+lb,Xs+"+"+cb,AM,TM,nb,NM].join("|"),"g"),zM=RegExp("["+sb+dd+Gx+Jx+"]"),FM=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,BM=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],jM=-1,vt={};vt[G]=vt[me]=vt[Fe]=vt[Be]=vt[Ie]=vt[Ln]=vt[Bn]=vt[Ge]=vt[vn]=!0,vt[se]=vt[F]=vt[tn]=vt[J]=vt[ee]=vt[Se]=vt[Le]=vt[be]=vt[ke]=vt[pe]=vt[we]=vt[Oe]=vt[ut]=vt[ln]=vt[We]=!1;var pt={};pt[se]=pt[F]=pt[tn]=pt[ee]=pt[J]=pt[Se]=pt[G]=pt[me]=pt[Fe]=pt[Be]=pt[Ie]=pt[ke]=pt[pe]=pt[we]=pt[Oe]=pt[ut]=pt[ln]=pt[Mt]=pt[Ln]=pt[Bn]=pt[Ge]=pt[vn]=!0,pt[Le]=pt[be]=pt[We]=!1;var WM={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},HM={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},VM={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},UM={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},YM=parseFloat,KM=parseInt,hb=typeof Kl=="object"&&Kl&&Kl.Object===Object&&Kl,XM=typeof self=="object"&&self&&self.Object===Object&&self,cn=hb||XM||Function("return this")(),zg=t&&!t.nodeType&&t,Jo=zg&&!0&&e&&!e.nodeType&&e,pb=Jo&&Jo.exports===zg,Fg=pb&&hb.process,mr=function(){try{var I=Jo&&Jo.require&&Jo.require("util").types;return I||Fg&&Fg.binding&&Fg.binding("util")}catch{}}(),gb=mr&&mr.isArrayBuffer,mb=mr&&mr.isDate,vb=mr&&mr.isMap,yb=mr&&mr.isRegExp,xb=mr&&mr.isSet,bb=mr&&mr.isTypedArray;function tr(I,W,j){switch(j.length){case 0:return I.call(W);case 1:return I.call(W,j[0]);case 2:return I.call(W,j[0],j[1]);case 3:return I.call(W,j[0],j[1],j[2])}return I.apply(W,j)}function GM(I,W,j,ue){for(var Re=-1,tt=I==null?0:I.length;++Re<tt;){var Zt=I[Re];W(ue,Zt,j(Zt),I)}return ue}function vr(I,W){for(var j=-1,ue=I==null?0:I.length;++j<ue&&W(I[j],j,I)!==!1;);return I}function qM(I,W){for(var j=I==null?0:I.length;j--&&W(I[j],j,I)!==!1;);return I}function wb(I,W){for(var j=-1,ue=I==null?0:I.length;++j<ue;)if(!W(I[j],j,I))return!1;return!0}function Ji(I,W){for(var j=-1,ue=I==null?0:I.length,Re=0,tt=[];++j<ue;){var Zt=I[j];W(Zt,j,I)&&(tt[Re++]=Zt)}return tt}function hd(I,W){var j=I==null?0:I.length;return!!j&&Gs(I,W,0)>-1}function Bg(I,W,j){for(var ue=-1,Re=I==null?0:I.length;++ue<Re;)if(j(W,I[ue]))return!0;return!1}function St(I,W){for(var j=-1,ue=I==null?0:I.length,Re=Array(ue);++j<ue;)Re[j]=W(I[j],j,I);return Re}function eo(I,W){for(var j=-1,ue=W.length,Re=I.length;++j<ue;)I[Re+j]=W[j];return I}function jg(I,W,j,ue){var Re=-1,tt=I==null?0:I.length;for(ue&&tt&&(j=I[++Re]);++Re<tt;)j=W(j,I[Re],Re,I);return j}function ZM(I,W,j,ue){var Re=I==null?0:I.length;for(ue&&Re&&(j=I[--Re]);Re--;)j=W(j,I[Re],Re,I);return j}function Wg(I,W){for(var j=-1,ue=I==null?0:I.length;++j<ue;)if(W(I[j],j,I))return!0;return!1}var QM=Hg("length");function JM(I){return I.split("")}function eO(I){return I.match(Ol)||[]}function _b(I,W,j){var ue;return j(I,function(Re,tt,Zt){if(W(Re,tt,Zt))return ue=tt,!1}),ue}function pd(I,W,j,ue){for(var Re=I.length,tt=j+(ue?1:-1);ue?tt--:++tt<Re;)if(W(I[tt],tt,I))return tt;return-1}function Gs(I,W,j){return W===W?fO(I,W,j):pd(I,Sb,j)}function tO(I,W,j,ue){for(var Re=j-1,tt=I.length;++Re<tt;)if(ue(I[Re],W))return Re;return-1}function Sb(I){return I!==I}function kb(I,W){var j=I==null?0:I.length;return j?Ug(I,W)/j:ct}function Hg(I){return function(W){return W==null?n:W[I]}}function Vg(I){return function(W){return I==null?n:I[W]}}function Cb(I,W,j,ue,Re){return Re(I,function(tt,Zt,dt){j=ue?(ue=!1,tt):W(j,tt,Zt,dt)}),j}function nO(I,W){var j=I.length;for(I.sort(W);j--;)I[j]=I[j].value;return I}function Ug(I,W){for(var j,ue=-1,Re=I.length;++ue<Re;){var tt=W(I[ue]);tt!==n&&(j=j===n?tt:j+tt)}return j}function Yg(I,W){for(var j=-1,ue=Array(I);++j<I;)ue[j]=W(j);return ue}function rO(I,W){return St(W,function(j){return[j,I[j]]})}function Pb(I){return I&&I.slice(0,Rb(I)+1).replace(El,"")}function nr(I){return function(W){return I(W)}}function Kg(I,W){return St(W,function(j){return I[j]})}function Al(I,W){return I.has(W)}function Eb(I,W){for(var j=-1,ue=I.length;++j<ue&&Gs(W,I[j],0)>-1;);return j}function Mb(I,W){for(var j=I.length;j--&&Gs(W,I[j],0)>-1;);return j}function iO(I,W){for(var j=I.length,ue=0;j--;)I[j]===W&&++ue;return ue}var oO=Vg(WM),sO=Vg(HM);function aO(I){return"\\"+UM[I]}function lO(I,W){return I==null?n:I[W]}function qs(I){return zM.test(I)}function cO(I){return FM.test(I)}function uO(I){for(var W,j=[];!(W=I.next()).done;)j.push(W.value);return j}function Xg(I){var W=-1,j=Array(I.size);return I.forEach(function(ue,Re){j[++W]=[Re,ue]}),j}function Ob(I,W){return function(j){return I(W(j))}}function to(I,W){for(var j=-1,ue=I.length,Re=0,tt=[];++j<ue;){var Zt=I[j];(Zt===W||Zt===f)&&(I[j]=f,tt[Re++]=j)}return tt}function gd(I){var W=-1,j=Array(I.size);return I.forEach(function(ue){j[++W]=ue}),j}function dO(I){var W=-1,j=Array(I.size);return I.forEach(function(ue){j[++W]=[ue,ue]}),j}function fO(I,W,j){for(var ue=j-1,Re=I.length;++ue<Re;)if(I[ue]===W)return ue;return-1}function hO(I,W,j){for(var ue=j+1;ue--;)if(I[ue]===W)return ue;return ue}function Zs(I){return qs(I)?gO(I):QM(I)}function jr(I){return qs(I)?mO(I):JM(I)}function Rb(I){for(var W=I.length;W--&&Og.test(I.charAt(W)););return W}var pO=Vg(VM);function gO(I){for(var W=Dg.lastIndex=0;Dg.test(I);)++W;return W}function mO(I){return I.match(Dg)||[]}function vO(I){return I.match(DM)||[]}var yO=function I(W){W=W==null?cn:Qs.defaults(cn.Object(),W,Qs.pick(cn,BM));var j=W.Array,ue=W.Date,Re=W.Error,tt=W.Function,Zt=W.Math,dt=W.Object,Gg=W.RegExp,xO=W.String,yr=W.TypeError,md=j.prototype,bO=tt.prototype,Js=dt.prototype,vd=W["__core-js_shared__"],yd=bO.toString,ot=Js.hasOwnProperty,wO=0,Tb=function(){var a=/[^.]+$/.exec(vd&&vd.keys&&vd.keys.IE_PROTO||"");return a?"Symbol(src)_1."+a:""}(),xd=Js.toString,_O=yd.call(dt),SO=cn._,kO=Gg("^"+yd.call(ot).replace(Pl,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),bd=pb?W.Buffer:n,no=W.Symbol,wd=W.Uint8Array,Ab=bd?bd.allocUnsafe:n,_d=Ob(dt.getPrototypeOf,dt),Nb=dt.create,Lb=Js.propertyIsEnumerable,Sd=md.splice,$b=no?no.isConcatSpreadable:n,Nl=no?no.iterator:n,es=no?no.toStringTag:n,kd=function(){try{var a=os(dt,"defineProperty");return a({},"",{}),a}catch{}}(),CO=W.clearTimeout!==cn.clearTimeout&&W.clearTimeout,PO=ue&&ue.now!==cn.Date.now&&ue.now,EO=W.setTimeout!==cn.setTimeout&&W.setTimeout,Cd=Zt.ceil,Pd=Zt.floor,qg=dt.getOwnPropertySymbols,MO=bd?bd.isBuffer:n,Ib=W.isFinite,OO=md.join,RO=Ob(dt.keys,dt),Qt=Zt.max,yn=Zt.min,TO=ue.now,AO=W.parseInt,Db=Zt.random,NO=md.reverse,Zg=os(W,"DataView"),Ll=os(W,"Map"),Qg=os(W,"Promise"),ea=os(W,"Set"),$l=os(W,"WeakMap"),Il=os(dt,"create"),Ed=$l&&new $l,ta={},LO=ss(Zg),$O=ss(Ll),IO=ss(Qg),DO=ss(ea),zO=ss($l),Md=no?no.prototype:n,Dl=Md?Md.valueOf:n,zb=Md?Md.toString:n;function P(a){if(Rt(a)&&!Te(a)&&!(a instanceof He)){if(a instanceof xr)return a;if(ot.call(a,"__wrapped__"))return F2(a)}return new xr(a)}var na=function(){function a(){}return function(u){if(!Et(u))return{};if(Nb)return Nb(u);a.prototype=u;var h=new a;return a.prototype=n,h}}();function Od(){}function xr(a,u){this.__wrapped__=a,this.__actions__=[],this.__chain__=!!u,this.__index__=0,this.__values__=n}P.templateSettings={escape:Sl,evaluate:Pg,interpolate:Ys,variable:"",imports:{_:P}},P.prototype=Od.prototype,P.prototype.constructor=P,xr.prototype=na(Od.prototype),xr.prototype.constructor=xr;function He(a){this.__wrapped__=a,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=Z,this.__views__=[]}function FO(){var a=new He(this.__wrapped__);return a.__actions__=jn(this.__actions__),a.__dir__=this.__dir__,a.__filtered__=this.__filtered__,a.__iteratees__=jn(this.__iteratees__),a.__takeCount__=this.__takeCount__,a.__views__=jn(this.__views__),a}function BO(){if(this.__filtered__){var a=new He(this);a.__dir__=-1,a.__filtered__=!0}else a=this.clone(),a.__dir__*=-1;return a}function jO(){var a=this.__wrapped__.value(),u=this.__dir__,h=Te(a),y=u<0,k=h?a.length:0,M=JR(0,k,this.__views__),A=M.start,$=M.end,D=$-A,Y=y?$:A-1,K=this.__iteratees__,q=K.length,ce=0,ve=yn(D,this.__takeCount__);if(!h||!y&&k==D&&ve==D)return l2(a,this.__actions__);var Ce=[];e:for(;D--&&ce<ve;){Y+=u;for(var $e=-1,Pe=a[Y];++$e<q;){var je=K[$e],Ye=je.iteratee,or=je.type,Dn=Ye(Pe);if(or==oe)Pe=Dn;else if(!Dn){if(or==ye)continue e;break e}}Ce[ce++]=Pe}return Ce}He.prototype=na(Od.prototype),He.prototype.constructor=He;function ts(a){var u=-1,h=a==null?0:a.length;for(this.clear();++u<h;){var y=a[u];this.set(y[0],y[1])}}function WO(){this.__data__=Il?Il(null):{},this.size=0}function HO(a){var u=this.has(a)&&delete this.__data__[a];return this.size-=u?1:0,u}function VO(a){var u=this.__data__;if(Il){var h=u[a];return h===c?n:h}return ot.call(u,a)?u[a]:n}function UO(a){var u=this.__data__;return Il?u[a]!==n:ot.call(u,a)}function YO(a,u){var h=this.__data__;return this.size+=this.has(a)?0:1,h[a]=Il&&u===n?c:u,this}ts.prototype.clear=WO,ts.prototype.delete=HO,ts.prototype.get=VO,ts.prototype.has=UO,ts.prototype.set=YO;function Ci(a){var u=-1,h=a==null?0:a.length;for(this.clear();++u<h;){var y=a[u];this.set(y[0],y[1])}}function KO(){this.__data__=[],this.size=0}function XO(a){var u=this.__data__,h=Rd(u,a);if(h<0)return!1;var y=u.length-1;return h==y?u.pop():Sd.call(u,h,1),--this.size,!0}function GO(a){var u=this.__data__,h=Rd(u,a);return h<0?n:u[h][1]}function qO(a){return Rd(this.__data__,a)>-1}function ZO(a,u){var h=this.__data__,y=Rd(h,a);return y<0?(++this.size,h.push([a,u])):h[y][1]=u,this}Ci.prototype.clear=KO,Ci.prototype.delete=XO,Ci.prototype.get=GO,Ci.prototype.has=qO,Ci.prototype.set=ZO;function Pi(a){var u=-1,h=a==null?0:a.length;for(this.clear();++u<h;){var y=a[u];this.set(y[0],y[1])}}function QO(){this.size=0,this.__data__={hash:new ts,map:new(Ll||Ci),string:new ts}}function JO(a){var u=Wd(this,a).delete(a);return this.size-=u?1:0,u}function eR(a){return Wd(this,a).get(a)}function tR(a){return Wd(this,a).has(a)}function nR(a,u){var h=Wd(this,a),y=h.size;return h.set(a,u),this.size+=h.size==y?0:1,this}Pi.prototype.clear=QO,Pi.prototype.delete=JO,Pi.prototype.get=eR,Pi.prototype.has=tR,Pi.prototype.set=nR;function ns(a){var u=-1,h=a==null?0:a.length;for(this.__data__=new Pi;++u<h;)this.add(a[u])}function rR(a){return this.__data__.set(a,c),this}function iR(a){return this.__data__.has(a)}ns.prototype.add=ns.prototype.push=rR,ns.prototype.has=iR;function Wr(a){var u=this.__data__=new Ci(a);this.size=u.size}function oR(){this.__data__=new Ci,this.size=0}function sR(a){var u=this.__data__,h=u.delete(a);return this.size=u.size,h}function aR(a){return this.__data__.get(a)}function lR(a){return this.__data__.has(a)}function cR(a,u){var h=this.__data__;if(h instanceof Ci){var y=h.__data__;if(!Ll||y.length<i-1)return y.push([a,u]),this.size=++h.size,this;h=this.__data__=new Pi(y)}return h.set(a,u),this.size=h.size,this}Wr.prototype.clear=oR,Wr.prototype.delete=sR,Wr.prototype.get=aR,Wr.prototype.has=lR,Wr.prototype.set=cR;function Fb(a,u){var h=Te(a),y=!h&&as(a),k=!h&&!y&&ao(a),M=!h&&!y&&!k&&sa(a),A=h||y||k||M,$=A?Yg(a.length,xO):[],D=$.length;for(var Y in a)(u||ot.call(a,Y))&&!(A&&(Y=="length"||k&&(Y=="offset"||Y=="parent")||M&&(Y=="buffer"||Y=="byteLength"||Y=="byteOffset")||Ri(Y,D)))&&$.push(Y);return $}function Bb(a){var u=a.length;return u?a[cm(0,u-1)]:n}function uR(a,u){return Hd(jn(a),rs(u,0,a.length))}function dR(a){return Hd(jn(a))}function Jg(a,u,h){(h!==n&&!Hr(a[u],h)||h===n&&!(u in a))&&Ei(a,u,h)}function zl(a,u,h){var y=a[u];(!(ot.call(a,u)&&Hr(y,h))||h===n&&!(u in a))&&Ei(a,u,h)}function Rd(a,u){for(var h=a.length;h--;)if(Hr(a[h][0],u))return h;return-1}function fR(a,u,h,y){return ro(a,function(k,M,A){u(y,k,h(k),A)}),y}function jb(a,u){return a&&ii(u,nn(u),a)}function hR(a,u){return a&&ii(u,Hn(u),a)}function Ei(a,u,h){u=="__proto__"&&kd?kd(a,u,{configurable:!0,enumerable:!0,value:h,writable:!0}):a[u]=h}function em(a,u){for(var h=-1,y=u.length,k=j(y),M=a==null;++h<y;)k[h]=M?n:Lm(a,u[h]);return k}function rs(a,u,h){return a===a&&(h!==n&&(a=a<=h?a:h),u!==n&&(a=a>=u?a:u)),a}function br(a,u,h,y,k,M){var A,$=u&g,D=u&m,Y=u&x;if(h&&(A=k?h(a,y,k,M):h(a)),A!==n)return A;if(!Et(a))return a;var K=Te(a);if(K){if(A=tT(a),!$)return jn(a,A)}else{var q=xn(a),ce=q==be||q==Je;if(ao(a))return d2(a,$);if(q==we||q==se||ce&&!k){if(A=D||ce?{}:R2(a),!$)return D?VR(a,hR(A,a)):HR(a,jb(A,a))}else{if(!pt[q])return k?a:{};A=nT(a,q,$)}}M||(M=new Wr);var ve=M.get(a);if(ve)return ve;M.set(a,A),ow(a)?a.forEach(function(Pe){A.add(br(Pe,u,h,Pe,a,M))}):rw(a)&&a.forEach(function(Pe,je){A.set(je,br(Pe,u,h,je,a,M))});var Ce=Y?D?bm:xm:D?Hn:nn,$e=K?n:Ce(a);return vr($e||a,function(Pe,je){$e&&(je=Pe,Pe=a[je]),zl(A,je,br(Pe,u,h,je,a,M))}),A}function pR(a){var u=nn(a);return function(h){return Wb(h,a,u)}}function Wb(a,u,h){var y=h.length;if(a==null)return!y;for(a=dt(a);y--;){var k=h[y],M=u[k],A=a[k];if(A===n&&!(k in a)||!M(A))return!1}return!0}function Hb(a,u,h){if(typeof a!="function")throw new yr(s);return Ul(function(){a.apply(n,h)},u)}function Fl(a,u,h,y){var k=-1,M=hd,A=!0,$=a.length,D=[],Y=u.length;if(!$)return D;h&&(u=St(u,nr(h))),y?(M=Bg,A=!1):u.length>=i&&(M=Al,A=!1,u=new ns(u));e:for(;++k<$;){var K=a[k],q=h==null?K:h(K);if(K=y||K!==0?K:0,A&&q===q){for(var ce=Y;ce--;)if(u[ce]===q)continue e;D.push(K)}else M(u,q,y)||D.push(K)}return D}var ro=m2(ri),Vb=m2(nm,!0);function gR(a,u){var h=!0;return ro(a,function(y,k,M){return h=!!u(y,k,M),h}),h}function Td(a,u,h){for(var y=-1,k=a.length;++y<k;){var M=a[y],A=u(M);if(A!=null&&($===n?A===A&&!ir(A):h(A,$)))var $=A,D=M}return D}function mR(a,u,h,y){var k=a.length;for(h=Ne(h),h<0&&(h=-h>k?0:k+h),y=y===n||y>k?k:Ne(y),y<0&&(y+=k),y=h>y?0:aw(y);h<y;)a[h++]=u;return a}function Ub(a,u){var h=[];return ro(a,function(y,k,M){u(y,k,M)&&h.push(y)}),h}function un(a,u,h,y,k){var M=-1,A=a.length;for(h||(h=iT),k||(k=[]);++M<A;){var $=a[M];u>0&&h($)?u>1?un($,u-1,h,y,k):eo(k,$):y||(k[k.length]=$)}return k}var tm=v2(),Yb=v2(!0);function ri(a,u){return a&&tm(a,u,nn)}function nm(a,u){return a&&Yb(a,u,nn)}function Ad(a,u){return Ji(u,function(h){return Ti(a[h])})}function is(a,u){u=oo(u,a);for(var h=0,y=u.length;a!=null&&h<y;)a=a[oi(u[h++])];return h&&h==y?a:n}function Kb(a,u,h){var y=u(a);return Te(a)?y:eo(y,h(a))}function $n(a){return a==null?a===n?xe:et:es&&es in dt(a)?QR(a):dT(a)}function rm(a,u){return a>u}function vR(a,u){return a!=null&&ot.call(a,u)}function yR(a,u){return a!=null&&u in dt(a)}function xR(a,u,h){return a>=yn(u,h)&&a<Qt(u,h)}function im(a,u,h){for(var y=h?Bg:hd,k=a[0].length,M=a.length,A=M,$=j(M),D=1/0,Y=[];A--;){var K=a[A];A&&u&&(K=St(K,nr(u))),D=yn(K.length,D),$[A]=!h&&(u||k>=120&&K.length>=120)?new ns(A&&K):n}K=a[0];var q=-1,ce=$[0];e:for(;++q<k&&Y.length<D;){var ve=K[q],Ce=u?u(ve):ve;if(ve=h||ve!==0?ve:0,!(ce?Al(ce,Ce):y(Y,Ce,h))){for(A=M;--A;){var $e=$[A];if(!($e?Al($e,Ce):y(a[A],Ce,h)))continue e}ce&&ce.push(Ce),Y.push(ve)}}return Y}function bR(a,u,h,y){return ri(a,function(k,M,A){u(y,h(k),M,A)}),y}function Bl(a,u,h){u=oo(u,a),a=L2(a,u);var y=a==null?a:a[oi(_r(u))];return y==null?n:tr(y,a,h)}function Xb(a){return Rt(a)&&$n(a)==se}function wR(a){return Rt(a)&&$n(a)==tn}function _R(a){return Rt(a)&&$n(a)==Se}function jl(a,u,h,y,k){return a===u?!0:a==null||u==null||!Rt(a)&&!Rt(u)?a!==a&&u!==u:SR(a,u,h,y,jl,k)}function SR(a,u,h,y,k,M){var A=Te(a),$=Te(u),D=A?F:xn(a),Y=$?F:xn(u);D=D==se?we:D,Y=Y==se?we:Y;var K=D==we,q=Y==we,ce=D==Y;if(ce&&ao(a)){if(!ao(u))return!1;A=!0,K=!1}if(ce&&!K)return M||(M=new Wr),A||sa(a)?E2(a,u,h,y,k,M):qR(a,u,D,h,y,k,M);if(!(h&w)){var ve=K&&ot.call(a,"__wrapped__"),Ce=q&&ot.call(u,"__wrapped__");if(ve||Ce){var $e=ve?a.value():a,Pe=Ce?u.value():u;return M||(M=new Wr),k($e,Pe,h,y,M)}}return ce?(M||(M=new Wr),ZR(a,u,h,y,k,M)):!1}function kR(a){return Rt(a)&&xn(a)==ke}function om(a,u,h,y){var k=h.length,M=k,A=!y;if(a==null)return!M;for(a=dt(a);k--;){var $=h[k];if(A&&$[2]?$[1]!==a[$[0]]:!($[0]in a))return!1}for(;++k<M;){$=h[k];var D=$[0],Y=a[D],K=$[1];if(A&&$[2]){if(Y===n&&!(D in a))return!1}else{var q=new Wr;if(y)var ce=y(Y,K,D,a,u,q);if(!(ce===n?jl(K,Y,w|_,y,q):ce))return!1}}return!0}function Gb(a){if(!Et(a)||sT(a))return!1;var u=Ti(a)?kO:Br;return u.test(ss(a))}function CR(a){return Rt(a)&&$n(a)==Oe}function PR(a){return Rt(a)&&xn(a)==ut}function ER(a){return Rt(a)&&Gd(a.length)&&!!vt[$n(a)]}function qb(a){return typeof a=="function"?a:a==null?Vn:typeof a=="object"?Te(a)?Jb(a[0],a[1]):Qb(a):yw(a)}function sm(a){if(!Vl(a))return RO(a);var u=[];for(var h in dt(a))ot.call(a,h)&&h!="constructor"&&u.push(h);return u}function MR(a){if(!Et(a))return uT(a);var u=Vl(a),h=[];for(var y in a)y=="constructor"&&(u||!ot.call(a,y))||h.push(y);return h}function am(a,u){return a<u}function Zb(a,u){var h=-1,y=Wn(a)?j(a.length):[];return ro(a,function(k,M,A){y[++h]=u(k,M,A)}),y}function Qb(a){var u=_m(a);return u.length==1&&u[0][2]?A2(u[0][0],u[0][1]):function(h){return h===a||om(h,a,u)}}function Jb(a,u){return km(a)&&T2(u)?A2(oi(a),u):function(h){var y=Lm(h,a);return y===n&&y===u?$m(h,a):jl(u,y,w|_)}}function Nd(a,u,h,y,k){a!==u&&tm(u,function(M,A){if(k||(k=new Wr),Et(M))OR(a,u,A,h,Nd,y,k);else{var $=y?y(Pm(a,A),M,A+"",a,u,k):n;$===n&&($=M),Jg(a,A,$)}},Hn)}function OR(a,u,h,y,k,M,A){var $=Pm(a,h),D=Pm(u,h),Y=A.get(D);if(Y){Jg(a,h,Y);return}var K=M?M($,D,h+"",a,u,A):n,q=K===n;if(q){var ce=Te(D),ve=!ce&&ao(D),Ce=!ce&&!ve&&sa(D);K=D,ce||ve||Ce?Te($)?K=$:Ft($)?K=jn($):ve?(q=!1,K=d2(D,!0)):Ce?(q=!1,K=f2(D,!0)):K=[]:Yl(D)||as(D)?(K=$,as($)?K=lw($):(!Et($)||Ti($))&&(K=R2(D))):q=!1}q&&(A.set(D,K),k(K,D,y,M,A),A.delete(D)),Jg(a,h,K)}function e2(a,u){var h=a.length;if(!!h)return u+=u<0?h:0,Ri(u,h)?a[u]:n}function t2(a,u,h){u.length?u=St(u,function(M){return Te(M)?function(A){return is(A,M.length===1?M[0]:M)}:M}):u=[Vn];var y=-1;u=St(u,nr(_e()));var k=Zb(a,function(M,A,$){var D=St(u,function(Y){return Y(M)});return{criteria:D,index:++y,value:M}});return nO(k,function(M,A){return WR(M,A,h)})}function RR(a,u){return n2(a,u,function(h,y){return $m(a,y)})}function n2(a,u,h){for(var y=-1,k=u.length,M={};++y<k;){var A=u[y],$=is(a,A);h($,A)&&Wl(M,oo(A,a),$)}return M}function TR(a){return function(u){return is(u,a)}}function lm(a,u,h,y){var k=y?tO:Gs,M=-1,A=u.length,$=a;for(a===u&&(u=jn(u)),h&&($=St(a,nr(h)));++M<A;)for(var D=0,Y=u[M],K=h?h(Y):Y;(D=k($,K,D,y))>-1;)$!==a&&Sd.call($,D,1),Sd.call(a,D,1);return a}function r2(a,u){for(var h=a?u.length:0,y=h-1;h--;){var k=u[h];if(h==y||k!==M){var M=k;Ri(k)?Sd.call(a,k,1):fm(a,k)}}return a}function cm(a,u){return a+Pd(Db()*(u-a+1))}function AR(a,u,h,y){for(var k=-1,M=Qt(Cd((u-a)/(h||1)),0),A=j(M);M--;)A[y?M:++k]=a,a+=h;return A}function um(a,u){var h="";if(!a||u<1||u>de)return h;do u%2&&(h+=a),u=Pd(u/2),u&&(a+=a);while(u);return h}function De(a,u){return Em(N2(a,u,Vn),a+"")}function NR(a){return Bb(aa(a))}function LR(a,u){var h=aa(a);return Hd(h,rs(u,0,h.length))}function Wl(a,u,h,y){if(!Et(a))return a;u=oo(u,a);for(var k=-1,M=u.length,A=M-1,$=a;$!=null&&++k<M;){var D=oi(u[k]),Y=h;if(D==="__proto__"||D==="constructor"||D==="prototype")return a;if(k!=A){var K=$[D];Y=y?y(K,D,$):n,Y===n&&(Y=Et(K)?K:Ri(u[k+1])?[]:{})}zl($,D,Y),$=$[D]}return a}var i2=Ed?function(a,u){return Ed.set(a,u),a}:Vn,$R=kd?function(a,u){return kd(a,"toString",{configurable:!0,enumerable:!1,value:Dm(u),writable:!0})}:Vn;function IR(a){return Hd(aa(a))}function wr(a,u,h){var y=-1,k=a.length;u<0&&(u=-u>k?0:k+u),h=h>k?k:h,h<0&&(h+=k),k=u>h?0:h-u>>>0,u>>>=0;for(var M=j(k);++y<k;)M[y]=a[y+u];return M}function DR(a,u){var h;return ro(a,function(y,k,M){return h=u(y,k,M),!h}),!!h}function Ld(a,u,h){var y=0,k=a==null?y:a.length;if(typeof u=="number"&&u===u&&k<=V){for(;y<k;){var M=y+k>>>1,A=a[M];A!==null&&!ir(A)&&(h?A<=u:A<u)?y=M+1:k=M}return k}return dm(a,u,Vn,h)}function dm(a,u,h,y){var k=0,M=a==null?0:a.length;if(M===0)return 0;u=h(u);for(var A=u!==u,$=u===null,D=ir(u),Y=u===n;k<M;){var K=Pd((k+M)/2),q=h(a[K]),ce=q!==n,ve=q===null,Ce=q===q,$e=ir(q);if(A)var Pe=y||Ce;else Y?Pe=Ce&&(y||ce):$?Pe=Ce&&ce&&(y||!ve):D?Pe=Ce&&ce&&!ve&&(y||!$e):ve||$e?Pe=!1:Pe=y?q<=u:q<u;Pe?k=K+1:M=K}return yn(M,U)}function o2(a,u){for(var h=-1,y=a.length,k=0,M=[];++h<y;){var A=a[h],$=u?u(A):A;if(!h||!Hr($,D)){var D=$;M[k++]=A===0?0:A}}return M}function s2(a){return typeof a=="number"?a:ir(a)?ct:+a}function rr(a){if(typeof a=="string")return a;if(Te(a))return St(a,rr)+"";if(ir(a))return zb?zb.call(a):"";var u=a+"";return u=="0"&&1/a==-re?"-0":u}function io(a,u,h){var y=-1,k=hd,M=a.length,A=!0,$=[],D=$;if(h)A=!1,k=Bg;else if(M>=i){var Y=u?null:XR(a);if(Y)return gd(Y);A=!1,k=Al,D=new ns}else D=u?[]:$;e:for(;++y<M;){var K=a[y],q=u?u(K):K;if(K=h||K!==0?K:0,A&&q===q){for(var ce=D.length;ce--;)if(D[ce]===q)continue e;u&&D.push(q),$.push(K)}else k(D,q,h)||(D!==$&&D.push(q),$.push(K))}return $}function fm(a,u){return u=oo(u,a),a=L2(a,u),a==null||delete a[oi(_r(u))]}function a2(a,u,h,y){return Wl(a,u,h(is(a,u)),y)}function $d(a,u,h,y){for(var k=a.length,M=y?k:-1;(y?M--:++M<k)&&u(a[M],M,a););return h?wr(a,y?0:M,y?M+1:k):wr(a,y?M+1:0,y?k:M)}function l2(a,u){var h=a;return h instanceof He&&(h=h.value()),jg(u,function(y,k){return k.func.apply(k.thisArg,eo([y],k.args))},h)}function hm(a,u,h){var y=a.length;if(y<2)return y?io(a[0]):[];for(var k=-1,M=j(y);++k<y;)for(var A=a[k],$=-1;++$<y;)$!=k&&(M[k]=Fl(M[k]||A,a[$],u,h));return io(un(M,1),u,h)}function c2(a,u,h){for(var y=-1,k=a.length,M=u.length,A={};++y<k;){var $=y<M?u[y]:n;h(A,a[y],$)}return A}function pm(a){return Ft(a)?a:[]}function gm(a){return typeof a=="function"?a:Vn}function oo(a,u){return Te(a)?a:km(a,u)?[a]:z2(it(a))}var zR=De;function so(a,u,h){var y=a.length;return h=h===n?y:h,!u&&h>=y?a:wr(a,u,h)}var u2=CO||function(a){return cn.clearTimeout(a)};function d2(a,u){if(u)return a.slice();var h=a.length,y=Ab?Ab(h):new a.constructor(h);return a.copy(y),y}function mm(a){var u=new a.constructor(a.byteLength);return new wd(u).set(new wd(a)),u}function FR(a,u){var h=u?mm(a.buffer):a.buffer;return new a.constructor(h,a.byteOffset,a.byteLength)}function BR(a){var u=new a.constructor(a.source,Kt.exec(a));return u.lastIndex=a.lastIndex,u}function jR(a){return Dl?dt(Dl.call(a)):{}}function f2(a,u){var h=u?mm(a.buffer):a.buffer;return new a.constructor(h,a.byteOffset,a.length)}function h2(a,u){if(a!==u){var h=a!==n,y=a===null,k=a===a,M=ir(a),A=u!==n,$=u===null,D=u===u,Y=ir(u);if(!$&&!Y&&!M&&a>u||M&&A&&D&&!$&&!Y||y&&A&&D||!h&&D||!k)return 1;if(!y&&!M&&!Y&&a<u||Y&&h&&k&&!y&&!M||$&&h&&k||!A&&k||!D)return-1}return 0}function WR(a,u,h){for(var y=-1,k=a.criteria,M=u.criteria,A=k.length,$=h.length;++y<A;){var D=h2(k[y],M[y]);if(D){if(y>=$)return D;var Y=h[y];return D*(Y=="desc"?-1:1)}}return a.index-u.index}function p2(a,u,h,y){for(var k=-1,M=a.length,A=h.length,$=-1,D=u.length,Y=Qt(M-A,0),K=j(D+Y),q=!y;++$<D;)K[$]=u[$];for(;++k<A;)(q||k<M)&&(K[h[k]]=a[k]);for(;Y--;)K[$++]=a[k++];return K}function g2(a,u,h,y){for(var k=-1,M=a.length,A=-1,$=h.length,D=-1,Y=u.length,K=Qt(M-$,0),q=j(K+Y),ce=!y;++k<K;)q[k]=a[k];for(var ve=k;++D<Y;)q[ve+D]=u[D];for(;++A<$;)(ce||k<M)&&(q[ve+h[A]]=a[k++]);return q}function jn(a,u){var h=-1,y=a.length;for(u||(u=j(y));++h<y;)u[h]=a[h];return u}function ii(a,u,h,y){var k=!h;h||(h={});for(var M=-1,A=u.length;++M<A;){var $=u[M],D=y?y(h[$],a[$],$,h,a):n;D===n&&(D=a[$]),k?Ei(h,$,D):zl(h,$,D)}return h}function HR(a,u){return ii(a,Sm(a),u)}function VR(a,u){return ii(a,M2(a),u)}function Id(a,u){return function(h,y){var k=Te(h)?GM:fR,M=u?u():{};return k(h,a,_e(y,2),M)}}function ra(a){return De(function(u,h){var y=-1,k=h.length,M=k>1?h[k-1]:n,A=k>2?h[2]:n;for(M=a.length>3&&typeof M=="function"?(k--,M):n,A&&In(h[0],h[1],A)&&(M=k<3?n:M,k=1),u=dt(u);++y<k;){var $=h[y];$&&a(u,$,y,M)}return u})}function m2(a,u){return function(h,y){if(h==null)return h;if(!Wn(h))return a(h,y);for(var k=h.length,M=u?k:-1,A=dt(h);(u?M--:++M<k)&&y(A[M],M,A)!==!1;);return h}}function v2(a){return function(u,h,y){for(var k=-1,M=dt(u),A=y(u),$=A.length;$--;){var D=A[a?$:++k];if(h(M[D],D,M)===!1)break}return u}}function UR(a,u,h){var y=u&v,k=Hl(a);function M(){var A=this&&this!==cn&&this instanceof M?k:a;return A.apply(y?h:this,arguments)}return M}function y2(a){return function(u){u=it(u);var h=qs(u)?jr(u):n,y=h?h[0]:u.charAt(0),k=h?so(h,1).join(""):u.slice(1);return y[a]()+k}}function ia(a){return function(u){return jg(mw(gw(u).replace($M,"")),a,"")}}function Hl(a){return function(){var u=arguments;switch(u.length){case 0:return new a;case 1:return new a(u[0]);case 2:return new a(u[0],u[1]);case 3:return new a(u[0],u[1],u[2]);case 4:return new a(u[0],u[1],u[2],u[3]);case 5:return new a(u[0],u[1],u[2],u[3],u[4]);case 6:return new a(u[0],u[1],u[2],u[3],u[4],u[5]);case 7:return new a(u[0],u[1],u[2],u[3],u[4],u[5],u[6])}var h=na(a.prototype),y=a.apply(h,u);return Et(y)?y:h}}function YR(a,u,h){var y=Hl(a);function k(){for(var M=arguments.length,A=j(M),$=M,D=oa(k);$--;)A[$]=arguments[$];var Y=M<3&&A[0]!==D&&A[M-1]!==D?[]:to(A,D);if(M-=Y.length,M<h)return S2(a,u,Dd,k.placeholder,n,A,Y,n,n,h-M);var K=this&&this!==cn&&this instanceof k?y:a;return tr(K,this,A)}return k}function x2(a){return function(u,h,y){var k=dt(u);if(!Wn(u)){var M=_e(h,3);u=nn(u),h=function($){return M(k[$],$,k)}}var A=a(u,h,y);return A>-1?k[M?u[A]:A]:n}}function b2(a){return Oi(function(u){var h=u.length,y=h,k=xr.prototype.thru;for(a&&u.reverse();y--;){var M=u[y];if(typeof M!="function")throw new yr(s);if(k&&!A&&jd(M)=="wrapper")var A=new xr([],!0)}for(y=A?y:h;++y<h;){M=u[y];var $=jd(M),D=$=="wrapper"?wm(M):n;D&&Cm(D[0])&&D[1]==(L|C|T|z)&&!D[4].length&&D[9]==1?A=A[jd(D[0])].apply(A,D[3]):A=M.length==1&&Cm(M)?A[$]():A.thru(M)}return function(){var Y=arguments,K=Y[0];if(A&&Y.length==1&&Te(K))return A.plant(K).value();for(var q=0,ce=h?u[q].apply(this,Y):K;++q<h;)ce=u[q].call(this,ce);return ce}})}function Dd(a,u,h,y,k,M,A,$,D,Y){var K=u&L,q=u&v,ce=u&b,ve=u&(C|E),Ce=u&B,$e=ce?n:Hl(a);function Pe(){for(var je=arguments.length,Ye=j(je),or=je;or--;)Ye[or]=arguments[or];if(ve)var Dn=oa(Pe),sr=iO(Ye,Dn);if(y&&(Ye=p2(Ye,y,k,ve)),M&&(Ye=g2(Ye,M,A,ve)),je-=sr,ve&&je<Y){var Bt=to(Ye,Dn);return S2(a,u,Dd,Pe.placeholder,h,Ye,Bt,$,D,Y-je)}var Vr=q?h:this,Ni=ce?Vr[a]:a;return je=Ye.length,$?Ye=fT(Ye,$):Ce&&je>1&&Ye.reverse(),K&&D<je&&(Ye.length=D),this&&this!==cn&&this instanceof Pe&&(Ni=$e||Hl(Ni)),Ni.apply(Vr,Ye)}return Pe}function w2(a,u){return function(h,y){return bR(h,a,u(y),{})}}function zd(a,u){return function(h,y){var k;if(h===n&&y===n)return u;if(h!==n&&(k=h),y!==n){if(k===n)return y;typeof h=="string"||typeof y=="string"?(h=rr(h),y=rr(y)):(h=s2(h),y=s2(y)),k=a(h,y)}return k}}function vm(a){return Oi(function(u){return u=St(u,nr(_e())),De(function(h){var y=this;return a(u,function(k){return tr(k,y,h)})})})}function Fd(a,u){u=u===n?" ":rr(u);var h=u.length;if(h<2)return h?um(u,a):u;var y=um(u,Cd(a/Zs(u)));return qs(u)?so(jr(y),0,a).join(""):y.slice(0,a)}function KR(a,u,h,y){var k=u&v,M=Hl(a);function A(){for(var $=-1,D=arguments.length,Y=-1,K=y.length,q=j(K+D),ce=this&&this!==cn&&this instanceof A?M:a;++Y<K;)q[Y]=y[Y];for(;D--;)q[Y++]=arguments[++$];return tr(ce,k?h:this,q)}return A}function _2(a){return function(u,h,y){return y&&typeof y!="number"&&In(u,h,y)&&(h=y=n),u=Ai(u),h===n?(h=u,u=0):h=Ai(h),y=y===n?u<h?1:-1:Ai(y),AR(u,h,y,a)}}function Bd(a){return function(u,h){return typeof u=="string"&&typeof h=="string"||(u=Sr(u),h=Sr(h)),a(u,h)}}function S2(a,u,h,y,k,M,A,$,D,Y){var K=u&C,q=K?A:n,ce=K?n:A,ve=K?M:n,Ce=K?n:M;u|=K?T:N,u&=~(K?N:T),u&S||(u&=~(v|b));var $e=[a,u,k,ve,q,Ce,ce,$,D,Y],Pe=h.apply(n,$e);return Cm(a)&&$2(Pe,$e),Pe.placeholder=y,I2(Pe,a,u)}function ym(a){var u=Zt[a];return function(h,y){if(h=Sr(h),y=y==null?0:yn(Ne(y),292),y&&Ib(h)){var k=(it(h)+"e").split("e"),M=u(k[0]+"e"+(+k[1]+y));return k=(it(M)+"e").split("e"),+(k[0]+"e"+(+k[1]-y))}return u(h)}}var XR=ea&&1/gd(new ea([,-0]))[1]==re?function(a){return new ea(a)}:Bm;function k2(a){return function(u){var h=xn(u);return h==ke?Xg(u):h==ut?dO(u):rO(u,a(u))}}function Mi(a,u,h,y,k,M,A,$){var D=u&b;if(!D&&typeof a!="function")throw new yr(s);var Y=y?y.length:0;if(Y||(u&=~(T|N),y=k=n),A=A===n?A:Qt(Ne(A),0),$=$===n?$:Ne($),Y-=k?k.length:0,u&N){var K=y,q=k;y=k=n}var ce=D?n:wm(a),ve=[a,u,h,y,k,K,q,M,A,$];if(ce&&cT(ve,ce),a=ve[0],u=ve[1],h=ve[2],y=ve[3],k=ve[4],$=ve[9]=ve[9]===n?D?0:a.length:Qt(ve[9]-Y,0),!$&&u&(C|E)&&(u&=~(C|E)),!u||u==v)var Ce=UR(a,u,h);else u==C||u==E?Ce=YR(a,u,$):(u==T||u==(v|T))&&!k.length?Ce=KR(a,u,h,y):Ce=Dd.apply(n,ve);var $e=ce?i2:$2;return I2($e(Ce,ve),a,u)}function C2(a,u,h,y){return a===n||Hr(a,Js[h])&&!ot.call(y,h)?u:a}function P2(a,u,h,y,k,M){return Et(a)&&Et(u)&&(M.set(u,a),Nd(a,u,n,P2,M),M.delete(u)),a}function GR(a){return Yl(a)?n:a}function E2(a,u,h,y,k,M){var A=h&w,$=a.length,D=u.length;if($!=D&&!(A&&D>$))return!1;var Y=M.get(a),K=M.get(u);if(Y&&K)return Y==u&&K==a;var q=-1,ce=!0,ve=h&_?new ns:n;for(M.set(a,u),M.set(u,a);++q<$;){var Ce=a[q],$e=u[q];if(y)var Pe=A?y($e,Ce,q,u,a,M):y(Ce,$e,q,a,u,M);if(Pe!==n){if(Pe)continue;ce=!1;break}if(ve){if(!Wg(u,function(je,Ye){if(!Al(ve,Ye)&&(Ce===je||k(Ce,je,h,y,M)))return ve.push(Ye)})){ce=!1;break}}else if(!(Ce===$e||k(Ce,$e,h,y,M))){ce=!1;break}}return M.delete(a),M.delete(u),ce}function qR(a,u,h,y,k,M,A){switch(h){case ee:if(a.byteLength!=u.byteLength||a.byteOffset!=u.byteOffset)return!1;a=a.buffer,u=u.buffer;case tn:return!(a.byteLength!=u.byteLength||!M(new wd(a),new wd(u)));case J:case Se:case pe:return Hr(+a,+u);case Le:return a.name==u.name&&a.message==u.message;case Oe:case ln:return a==u+"";case ke:var $=Xg;case ut:var D=y&w;if($||($=gd),a.size!=u.size&&!D)return!1;var Y=A.get(a);if(Y)return Y==u;y|=_,A.set(a,u);var K=E2($(a),$(u),y,k,M,A);return A.delete(a),K;case Mt:if(Dl)return Dl.call(a)==Dl.call(u)}return!1}function ZR(a,u,h,y,k,M){var A=h&w,$=xm(a),D=$.length,Y=xm(u),K=Y.length;if(D!=K&&!A)return!1;for(var q=D;q--;){var ce=$[q];if(!(A?ce in u:ot.call(u,ce)))return!1}var ve=M.get(a),Ce=M.get(u);if(ve&&Ce)return ve==u&&Ce==a;var $e=!0;M.set(a,u),M.set(u,a);for(var Pe=A;++q<D;){ce=$[q];var je=a[ce],Ye=u[ce];if(y)var or=A?y(Ye,je,ce,u,a,M):y(je,Ye,ce,a,u,M);if(!(or===n?je===Ye||k(je,Ye,h,y,M):or)){$e=!1;break}Pe||(Pe=ce=="constructor")}if($e&&!Pe){var Dn=a.constructor,sr=u.constructor;Dn!=sr&&"constructor"in a&&"constructor"in u&&!(typeof Dn=="function"&&Dn instanceof Dn&&typeof sr=="function"&&sr instanceof sr)&&($e=!1)}return M.delete(a),M.delete(u),$e}function Oi(a){return Em(N2(a,n,W2),a+"")}function xm(a){return Kb(a,nn,Sm)}function bm(a){return Kb(a,Hn,M2)}var wm=Ed?function(a){return Ed.get(a)}:Bm;function jd(a){for(var u=a.name+"",h=ta[u],y=ot.call(ta,u)?h.length:0;y--;){var k=h[y],M=k.func;if(M==null||M==a)return k.name}return u}function oa(a){var u=ot.call(P,"placeholder")?P:a;return u.placeholder}function _e(){var a=P.iteratee||zm;return a=a===zm?qb:a,arguments.length?a(arguments[0],arguments[1]):a}function Wd(a,u){var h=a.__data__;return oT(u)?h[typeof u=="string"?"string":"hash"]:h.map}function _m(a){for(var u=nn(a),h=u.length;h--;){var y=u[h],k=a[y];u[h]=[y,k,T2(k)]}return u}function os(a,u){var h=lO(a,u);return Gb(h)?h:n}function QR(a){var u=ot.call(a,es),h=a[es];try{a[es]=n;var y=!0}catch{}var k=xd.call(a);return y&&(u?a[es]=h:delete a[es]),k}var Sm=qg?function(a){return a==null?[]:(a=dt(a),Ji(qg(a),function(u){return Lb.call(a,u)}))}:jm,M2=qg?function(a){for(var u=[];a;)eo(u,Sm(a)),a=_d(a);return u}:jm,xn=$n;(Zg&&xn(new Zg(new ArrayBuffer(1)))!=ee||Ll&&xn(new Ll)!=ke||Qg&&xn(Qg.resolve())!=Xe||ea&&xn(new ea)!=ut||$l&&xn(new $l)!=We)&&(xn=function(a){var u=$n(a),h=u==we?a.constructor:n,y=h?ss(h):"";if(y)switch(y){case LO:return ee;case $O:return ke;case IO:return Xe;case DO:return ut;case zO:return We}return u});function JR(a,u,h){for(var y=-1,k=h.length;++y<k;){var M=h[y],A=M.size;switch(M.type){case"drop":a+=A;break;case"dropRight":u-=A;break;case"take":u=yn(u,a+A);break;case"takeRight":a=Qt(a,u-A);break}}return{start:a,end:u}}function eT(a){var u=a.match(Ml);return u?u[1].split(Tg):[]}function O2(a,u,h){u=oo(u,a);for(var y=-1,k=u.length,M=!1;++y<k;){var A=oi(u[y]);if(!(M=a!=null&&h(a,A)))break;a=a[A]}return M||++y!=k?M:(k=a==null?0:a.length,!!k&&Gd(k)&&Ri(A,k)&&(Te(a)||as(a)))}function tT(a){var u=a.length,h=new a.constructor(u);return u&&typeof a[0]=="string"&&ot.call(a,"index")&&(h.index=a.index,h.input=a.input),h}function R2(a){return typeof a.constructor=="function"&&!Vl(a)?na(_d(a)):{}}function nT(a,u,h){var y=a.constructor;switch(u){case tn:return mm(a);case J:case Se:return new y(+a);case ee:return FR(a,h);case G:case me:case Fe:case Be:case Ie:case Ln:case Bn:case Ge:case vn:return f2(a,h);case ke:return new y;case pe:case ln:return new y(a);case Oe:return BR(a);case ut:return new y;case Mt:return jR(a)}}function rT(a,u){var h=u.length;if(!h)return a;var y=h-1;return u[y]=(h>1?"& ":"")+u[y],u=u.join(h>2?", ":" "),a.replace(Rg,`{
/* [wrapped with `+u+`] */
`)}function iT(a){return Te(a)||as(a)||!!($b&&a&&a[$b])}function Ri(a,u){var h=typeof a;return u=u==null?de:u,!!u&&(h=="number"||h!="symbol"&&mM.test(a))&&a>-1&&a%1==0&&a<u}function In(a,u,h){if(!Et(h))return!1;var y=typeof u;return(y=="number"?Wn(h)&&Ri(u,h.length):y=="string"&&u in h)?Hr(h[u],a):!1}function km(a,u){if(Te(a))return!1;var h=typeof a;return h=="number"||h=="symbol"||h=="boolean"||a==null||ir(a)?!0:Cl.test(a)||!kl.test(a)||u!=null&&a in dt(u)}function oT(a){var u=typeof a;return u=="string"||u=="number"||u=="symbol"||u=="boolean"?a!=="__proto__":a===null}function Cm(a){var u=jd(a),h=P[u];if(typeof h!="function"||!(u in He.prototype))return!1;if(a===h)return!0;var y=wm(h);return!!y&&a===y[0]}function sT(a){return!!Tb&&Tb in a}var aT=vd?Ti:Wm;function Vl(a){var u=a&&a.constructor,h=typeof u=="function"&&u.prototype||Js;return a===h}function T2(a){return a===a&&!Et(a)}function A2(a,u){return function(h){return h==null?!1:h[a]===u&&(u!==n||a in dt(h))}}function lT(a){var u=Kd(a,function(y){return h.size===d&&h.clear(),y}),h=u.cache;return u}function cT(a,u){var h=a[1],y=u[1],k=h|y,M=k<(v|b|L),A=y==L&&h==C||y==L&&h==z&&a[7].length<=u[8]||y==(L|z)&&u[7].length<=u[8]&&h==C;if(!(M||A))return a;y&v&&(a[2]=u[2],k|=h&v?0:S);var $=u[3];if($){var D=a[3];a[3]=D?p2(D,$,u[4]):$,a[4]=D?to(a[3],f):u[4]}return $=u[5],$&&(D=a[5],a[5]=D?g2(D,$,u[6]):$,a[6]=D?to(a[5],f):u[6]),$=u[7],$&&(a[7]=$),y&L&&(a[8]=a[8]==null?u[8]:yn(a[8],u[8])),a[9]==null&&(a[9]=u[9]),a[0]=u[0],a[1]=k,a}function uT(a){var u=[];if(a!=null)for(var h in dt(a))u.push(h);return u}function dT(a){return xd.call(a)}function N2(a,u,h){return u=Qt(u===n?a.length-1:u,0),function(){for(var y=arguments,k=-1,M=Qt(y.length-u,0),A=j(M);++k<M;)A[k]=y[u+k];k=-1;for(var $=j(u+1);++k<u;)$[k]=y[k];return $[u]=h(A),tr(a,this,$)}}function L2(a,u){return u.length<2?a:is(a,wr(u,0,-1))}function fT(a,u){for(var h=a.length,y=yn(u.length,h),k=jn(a);y--;){var M=u[y];a[y]=Ri(M,h)?k[M]:n}return a}function Pm(a,u){if(!(u==="constructor"&&typeof a[u]=="function")&&u!="__proto__")return a[u]}var $2=D2(i2),Ul=EO||function(a,u){return cn.setTimeout(a,u)},Em=D2($R);function I2(a,u,h){var y=u+"";return Em(a,rT(y,hT(eT(y),h)))}function D2(a){var u=0,h=0;return function(){var y=TO(),k=ae-(y-h);if(h=y,k>0){if(++u>=te)return arguments[0]}else u=0;return a.apply(n,arguments)}}function Hd(a,u){var h=-1,y=a.length,k=y-1;for(u=u===n?y:u;++h<u;){var M=cm(h,k),A=a[M];a[M]=a[h],a[h]=A}return a.length=u,a}var z2=lT(function(a){var u=[];return a.charCodeAt(0)===46&&u.push(""),a.replace(Eg,function(h,y,k,M){u.push(k?M.replace(Ag,"$1"):y||h)}),u});function oi(a){if(typeof a=="string"||ir(a))return a;var u=a+"";return u=="0"&&1/a==-re?"-0":u}function ss(a){if(a!=null){try{return yd.call(a)}catch{}try{return a+""}catch{}}return""}function hT(a,u){return vr(X,function(h){var y="_."+h[0];u&h[1]&&!hd(a,y)&&a.push(y)}),a.sort()}function F2(a){if(a instanceof He)return a.clone();var u=new xr(a.__wrapped__,a.__chain__);return u.__actions__=jn(a.__actions__),u.__index__=a.__index__,u.__values__=a.__values__,u}function pT(a,u,h){(h?In(a,u,h):u===n)?u=1:u=Qt(Ne(u),0);var y=a==null?0:a.length;if(!y||u<1)return[];for(var k=0,M=0,A=j(Cd(y/u));k<y;)A[M++]=wr(a,k,k+=u);return A}function gT(a){for(var u=-1,h=a==null?0:a.length,y=0,k=[];++u<h;){var M=a[u];M&&(k[y++]=M)}return k}function mT(){var a=arguments.length;if(!a)return[];for(var u=j(a-1),h=arguments[0],y=a;y--;)u[y-1]=arguments[y];return eo(Te(h)?jn(h):[h],un(u,1))}var vT=De(function(a,u){return Ft(a)?Fl(a,un(u,1,Ft,!0)):[]}),yT=De(function(a,u){var h=_r(u);return Ft(h)&&(h=n),Ft(a)?Fl(a,un(u,1,Ft,!0),_e(h,2)):[]}),xT=De(function(a,u){var h=_r(u);return Ft(h)&&(h=n),Ft(a)?Fl(a,un(u,1,Ft,!0),n,h):[]});function bT(a,u,h){var y=a==null?0:a.length;return y?(u=h||u===n?1:Ne(u),wr(a,u<0?0:u,y)):[]}function wT(a,u,h){var y=a==null?0:a.length;return y?(u=h||u===n?1:Ne(u),u=y-u,wr(a,0,u<0?0:u)):[]}function _T(a,u){return a&&a.length?$d(a,_e(u,3),!0,!0):[]}function ST(a,u){return a&&a.length?$d(a,_e(u,3),!0):[]}function kT(a,u,h,y){var k=a==null?0:a.length;return k?(h&&typeof h!="number"&&In(a,u,h)&&(h=0,y=k),mR(a,u,h,y)):[]}function B2(a,u,h){var y=a==null?0:a.length;if(!y)return-1;var k=h==null?0:Ne(h);return k<0&&(k=Qt(y+k,0)),pd(a,_e(u,3),k)}function j2(a,u,h){var y=a==null?0:a.length;if(!y)return-1;var k=y-1;return h!==n&&(k=Ne(h),k=h<0?Qt(y+k,0):yn(k,y-1)),pd(a,_e(u,3),k,!0)}function W2(a){var u=a==null?0:a.length;return u?un(a,1):[]}function CT(a){var u=a==null?0:a.length;return u?un(a,re):[]}function PT(a,u){var h=a==null?0:a.length;return h?(u=u===n?1:Ne(u),un(a,u)):[]}function ET(a){for(var u=-1,h=a==null?0:a.length,y={};++u<h;){var k=a[u];y[k[0]]=k[1]}return y}function H2(a){return a&&a.length?a[0]:n}function MT(a,u,h){var y=a==null?0:a.length;if(!y)return-1;var k=h==null?0:Ne(h);return k<0&&(k=Qt(y+k,0)),Gs(a,u,k)}function OT(a){var u=a==null?0:a.length;return u?wr(a,0,-1):[]}var RT=De(function(a){var u=St(a,pm);return u.length&&u[0]===a[0]?im(u):[]}),TT=De(function(a){var u=_r(a),h=St(a,pm);return u===_r(h)?u=n:h.pop(),h.length&&h[0]===a[0]?im(h,_e(u,2)):[]}),AT=De(function(a){var u=_r(a),h=St(a,pm);return u=typeof u=="function"?u:n,u&&h.pop(),h.length&&h[0]===a[0]?im(h,n,u):[]});function NT(a,u){return a==null?"":OO.call(a,u)}function _r(a){var u=a==null?0:a.length;return u?a[u-1]:n}function LT(a,u,h){var y=a==null?0:a.length;if(!y)return-1;var k=y;return h!==n&&(k=Ne(h),k=k<0?Qt(y+k,0):yn(k,y-1)),u===u?hO(a,u,k):pd(a,Sb,k,!0)}function $T(a,u){return a&&a.length?e2(a,Ne(u)):n}var IT=De(V2);function V2(a,u){return a&&a.length&&u&&u.length?lm(a,u):a}function DT(a,u,h){return a&&a.length&&u&&u.length?lm(a,u,_e(h,2)):a}function zT(a,u,h){return a&&a.length&&u&&u.length?lm(a,u,n,h):a}var FT=Oi(function(a,u){var h=a==null?0:a.length,y=em(a,u);return r2(a,St(u,function(k){return Ri(k,h)?+k:k}).sort(h2)),y});function BT(a,u){var h=[];if(!(a&&a.length))return h;var y=-1,k=[],M=a.length;for(u=_e(u,3);++y<M;){var A=a[y];u(A,y,a)&&(h.push(A),k.push(y))}return r2(a,k),h}function Mm(a){return a==null?a:NO.call(a)}function jT(a,u,h){var y=a==null?0:a.length;return y?(h&&typeof h!="number"&&In(a,u,h)?(u=0,h=y):(u=u==null?0:Ne(u),h=h===n?y:Ne(h)),wr(a,u,h)):[]}function WT(a,u){return Ld(a,u)}function HT(a,u,h){return dm(a,u,_e(h,2))}function VT(a,u){var h=a==null?0:a.length;if(h){var y=Ld(a,u);if(y<h&&Hr(a[y],u))return y}return-1}function UT(a,u){return Ld(a,u,!0)}function YT(a,u,h){return dm(a,u,_e(h,2),!0)}function KT(a,u){var h=a==null?0:a.length;if(h){var y=Ld(a,u,!0)-1;if(Hr(a[y],u))return y}return-1}function XT(a){return a&&a.length?o2(a):[]}function GT(a,u){return a&&a.length?o2(a,_e(u,2)):[]}function qT(a){var u=a==null?0:a.length;return u?wr(a,1,u):[]}function ZT(a,u,h){return a&&a.length?(u=h||u===n?1:Ne(u),wr(a,0,u<0?0:u)):[]}function QT(a,u,h){var y=a==null?0:a.length;return y?(u=h||u===n?1:Ne(u),u=y-u,wr(a,u<0?0:u,y)):[]}function JT(a,u){return a&&a.length?$d(a,_e(u,3),!1,!0):[]}function eA(a,u){return a&&a.length?$d(a,_e(u,3)):[]}var tA=De(function(a){return io(un(a,1,Ft,!0))}),nA=De(function(a){var u=_r(a);return Ft(u)&&(u=n),io(un(a,1,Ft,!0),_e(u,2))}),rA=De(function(a){var u=_r(a);return u=typeof u=="function"?u:n,io(un(a,1,Ft,!0),n,u)});function iA(a){return a&&a.length?io(a):[]}function oA(a,u){return a&&a.length?io(a,_e(u,2)):[]}function sA(a,u){return u=typeof u=="function"?u:n,a&&a.length?io(a,n,u):[]}function Om(a){if(!(a&&a.length))return[];var u=0;return a=Ji(a,function(h){if(Ft(h))return u=Qt(h.length,u),!0}),Yg(u,function(h){return St(a,Hg(h))})}function U2(a,u){if(!(a&&a.length))return[];var h=Om(a);return u==null?h:St(h,function(y){return tr(u,n,y)})}var aA=De(function(a,u){return Ft(a)?Fl(a,u):[]}),lA=De(function(a){return hm(Ji(a,Ft))}),cA=De(function(a){var u=_r(a);return Ft(u)&&(u=n),hm(Ji(a,Ft),_e(u,2))}),uA=De(function(a){var u=_r(a);return u=typeof u=="function"?u:n,hm(Ji(a,Ft),n,u)}),dA=De(Om);function fA(a,u){return c2(a||[],u||[],zl)}function hA(a,u){return c2(a||[],u||[],Wl)}var pA=De(function(a){var u=a.length,h=u>1?a[u-1]:n;return h=typeof h=="function"?(a.pop(),h):n,U2(a,h)});function Y2(a){var u=P(a);return u.__chain__=!0,u}function gA(a,u){return u(a),a}function Vd(a,u){return u(a)}var mA=Oi(function(a){var u=a.length,h=u?a[0]:0,y=this.__wrapped__,k=function(M){return em(M,a)};return u>1||this.__actions__.length||!(y instanceof He)||!Ri(h)?this.thru(k):(y=y.slice(h,+h+(u?1:0)),y.__actions__.push({func:Vd,args:[k],thisArg:n}),new xr(y,this.__chain__).thru(function(M){return u&&!M.length&&M.push(n),M}))});function vA(){return Y2(this)}function yA(){return new xr(this.value(),this.__chain__)}function xA(){this.__values__===n&&(this.__values__=sw(this.value()));var a=this.__index__>=this.__values__.length,u=a?n:this.__values__[this.__index__++];return{done:a,value:u}}function bA(){return this}function wA(a){for(var u,h=this;h instanceof Od;){var y=F2(h);y.__index__=0,y.__values__=n,u?k.__wrapped__=y:u=y;var k=y;h=h.__wrapped__}return k.__wrapped__=a,u}function _A(){var a=this.__wrapped__;if(a instanceof He){var u=a;return this.__actions__.length&&(u=new He(this)),u=u.reverse(),u.__actions__.push({func:Vd,args:[Mm],thisArg:n}),new xr(u,this.__chain__)}return this.thru(Mm)}function SA(){return l2(this.__wrapped__,this.__actions__)}var kA=Id(function(a,u,h){ot.call(a,h)?++a[h]:Ei(a,h,1)});function CA(a,u,h){var y=Te(a)?wb:gR;return h&&In(a,u,h)&&(u=n),y(a,_e(u,3))}function PA(a,u){var h=Te(a)?Ji:Ub;return h(a,_e(u,3))}var EA=x2(B2),MA=x2(j2);function OA(a,u){return un(Ud(a,u),1)}function RA(a,u){return un(Ud(a,u),re)}function TA(a,u,h){return h=h===n?1:Ne(h),un(Ud(a,u),h)}function K2(a,u){var h=Te(a)?vr:ro;return h(a,_e(u,3))}function X2(a,u){var h=Te(a)?qM:Vb;return h(a,_e(u,3))}var AA=Id(function(a,u,h){ot.call(a,h)?a[h].push(u):Ei(a,h,[u])});function NA(a,u,h,y){a=Wn(a)?a:aa(a),h=h&&!y?Ne(h):0;var k=a.length;return h<0&&(h=Qt(k+h,0)),qd(a)?h<=k&&a.indexOf(u,h)>-1:!!k&&Gs(a,u,h)>-1}var LA=De(function(a,u,h){var y=-1,k=typeof u=="function",M=Wn(a)?j(a.length):[];return ro(a,function(A){M[++y]=k?tr(u,A,h):Bl(A,u,h)}),M}),$A=Id(function(a,u,h){Ei(a,h,u)});function Ud(a,u){var h=Te(a)?St:Zb;return h(a,_e(u,3))}function IA(a,u,h,y){return a==null?[]:(Te(u)||(u=u==null?[]:[u]),h=y?n:h,Te(h)||(h=h==null?[]:[h]),t2(a,u,h))}var DA=Id(function(a,u,h){a[h?0:1].push(u)},function(){return[[],[]]});function zA(a,u,h){var y=Te(a)?jg:Cb,k=arguments.length<3;return y(a,_e(u,4),h,k,ro)}function FA(a,u,h){var y=Te(a)?ZM:Cb,k=arguments.length<3;return y(a,_e(u,4),h,k,Vb)}function BA(a,u){var h=Te(a)?Ji:Ub;return h(a,Xd(_e(u,3)))}function jA(a){var u=Te(a)?Bb:NR;return u(a)}function WA(a,u,h){(h?In(a,u,h):u===n)?u=1:u=Ne(u);var y=Te(a)?uR:LR;return y(a,u)}function HA(a){var u=Te(a)?dR:IR;return u(a)}function VA(a){if(a==null)return 0;if(Wn(a))return qd(a)?Zs(a):a.length;var u=xn(a);return u==ke||u==ut?a.size:sm(a).length}function UA(a,u,h){var y=Te(a)?Wg:DR;return h&&In(a,u,h)&&(u=n),y(a,_e(u,3))}var YA=De(function(a,u){if(a==null)return[];var h=u.length;return h>1&&In(a,u[0],u[1])?u=[]:h>2&&In(u[0],u[1],u[2])&&(u=[u[0]]),t2(a,un(u,1),[])}),Yd=PO||function(){return cn.Date.now()};function KA(a,u){if(typeof u!="function")throw new yr(s);return a=Ne(a),function(){if(--a<1)return u.apply(this,arguments)}}function G2(a,u,h){return u=h?n:u,u=a&&u==null?a.length:u,Mi(a,L,n,n,n,n,u)}function q2(a,u){var h;if(typeof u!="function")throw new yr(s);return a=Ne(a),function(){return--a>0&&(h=u.apply(this,arguments)),a<=1&&(u=n),h}}var Rm=De(function(a,u,h){var y=v;if(h.length){var k=to(h,oa(Rm));y|=T}return Mi(a,y,u,h,k)}),Z2=De(function(a,u,h){var y=v|b;if(h.length){var k=to(h,oa(Z2));y|=T}return Mi(u,y,a,h,k)});function Q2(a,u,h){u=h?n:u;var y=Mi(a,C,n,n,n,n,n,u);return y.placeholder=Q2.placeholder,y}function J2(a,u,h){u=h?n:u;var y=Mi(a,E,n,n,n,n,n,u);return y.placeholder=J2.placeholder,y}function ew(a,u,h){var y,k,M,A,$,D,Y=0,K=!1,q=!1,ce=!0;if(typeof a!="function")throw new yr(s);u=Sr(u)||0,Et(h)&&(K=!!h.leading,q="maxWait"in h,M=q?Qt(Sr(h.maxWait)||0,u):M,ce="trailing"in h?!!h.trailing:ce);function ve(Bt){var Vr=y,Ni=k;return y=k=n,Y=Bt,A=a.apply(Ni,Vr),A}function Ce(Bt){return Y=Bt,$=Ul(je,u),K?ve(Bt):A}function $e(Bt){var Vr=Bt-D,Ni=Bt-Y,xw=u-Vr;return q?yn(xw,M-Ni):xw}function Pe(Bt){var Vr=Bt-D,Ni=Bt-Y;return D===n||Vr>=u||Vr<0||q&&Ni>=M}function je(){var Bt=Yd();if(Pe(Bt))return Ye(Bt);$=Ul(je,$e(Bt))}function Ye(Bt){return $=n,ce&&y?ve(Bt):(y=k=n,A)}function or(){$!==n&&u2($),Y=0,y=D=k=$=n}function Dn(){return $===n?A:Ye(Yd())}function sr(){var Bt=Yd(),Vr=Pe(Bt);if(y=arguments,k=this,D=Bt,Vr){if($===n)return Ce(D);if(q)return u2($),$=Ul(je,u),ve(D)}return $===n&&($=Ul(je,u)),A}return sr.cancel=or,sr.flush=Dn,sr}var XA=De(function(a,u){return Hb(a,1,u)}),GA=De(function(a,u,h){return Hb(a,Sr(u)||0,h)});function qA(a){return Mi(a,B)}function Kd(a,u){if(typeof a!="function"||u!=null&&typeof u!="function")throw new yr(s);var h=function(){var y=arguments,k=u?u.apply(this,y):y[0],M=h.cache;if(M.has(k))return M.get(k);var A=a.apply(this,y);return h.cache=M.set(k,A)||M,A};return h.cache=new(Kd.Cache||Pi),h}Kd.Cache=Pi;function Xd(a){if(typeof a!="function")throw new yr(s);return function(){var u=arguments;switch(u.length){case 0:return!a.call(this);case 1:return!a.call(this,u[0]);case 2:return!a.call(this,u[0],u[1]);case 3:return!a.call(this,u[0],u[1],u[2])}return!a.apply(this,u)}}function ZA(a){return q2(2,a)}var QA=zR(function(a,u){u=u.length==1&&Te(u[0])?St(u[0],nr(_e())):St(un(u,1),nr(_e()));var h=u.length;return De(function(y){for(var k=-1,M=yn(y.length,h);++k<M;)y[k]=u[k].call(this,y[k]);return tr(a,this,y)})}),Tm=De(function(a,u){var h=to(u,oa(Tm));return Mi(a,T,n,u,h)}),tw=De(function(a,u){var h=to(u,oa(tw));return Mi(a,N,n,u,h)}),JA=Oi(function(a,u){return Mi(a,z,n,n,n,u)});function eN(a,u){if(typeof a!="function")throw new yr(s);return u=u===n?u:Ne(u),De(a,u)}function tN(a,u){if(typeof a!="function")throw new yr(s);return u=u==null?0:Qt(Ne(u),0),De(function(h){var y=h[u],k=so(h,0,u);return y&&eo(k,y),tr(a,this,k)})}function nN(a,u,h){var y=!0,k=!0;if(typeof a!="function")throw new yr(s);return Et(h)&&(y="leading"in h?!!h.leading:y,k="trailing"in h?!!h.trailing:k),ew(a,u,{leading:y,maxWait:u,trailing:k})}function rN(a){return G2(a,1)}function iN(a,u){return Tm(gm(u),a)}function oN(){if(!arguments.length)return[];var a=arguments[0];return Te(a)?a:[a]}function sN(a){return br(a,x)}function aN(a,u){return u=typeof u=="function"?u:n,br(a,x,u)}function lN(a){return br(a,g|x)}function cN(a,u){return u=typeof u=="function"?u:n,br(a,g|x,u)}function uN(a,u){return u==null||Wb(a,u,nn(u))}function Hr(a,u){return a===u||a!==a&&u!==u}var dN=Bd(rm),fN=Bd(function(a,u){return a>=u}),as=Xb(function(){return arguments}())?Xb:function(a){return Rt(a)&&ot.call(a,"callee")&&!Lb.call(a,"callee")},Te=j.isArray,hN=gb?nr(gb):wR;function Wn(a){return a!=null&&Gd(a.length)&&!Ti(a)}function Ft(a){return Rt(a)&&Wn(a)}function pN(a){return a===!0||a===!1||Rt(a)&&$n(a)==J}var ao=MO||Wm,gN=mb?nr(mb):_R;function mN(a){return Rt(a)&&a.nodeType===1&&!Yl(a)}function vN(a){if(a==null)return!0;if(Wn(a)&&(Te(a)||typeof a=="string"||typeof a.splice=="function"||ao(a)||sa(a)||as(a)))return!a.length;var u=xn(a);if(u==ke||u==ut)return!a.size;if(Vl(a))return!sm(a).length;for(var h in a)if(ot.call(a,h))return!1;return!0}function yN(a,u){return jl(a,u)}function xN(a,u,h){h=typeof h=="function"?h:n;var y=h?h(a,u):n;return y===n?jl(a,u,n,h):!!y}function Am(a){if(!Rt(a))return!1;var u=$n(a);return u==Le||u==ze||typeof a.message=="string"&&typeof a.name=="string"&&!Yl(a)}function bN(a){return typeof a=="number"&&Ib(a)}function Ti(a){if(!Et(a))return!1;var u=$n(a);return u==be||u==Je||u==Ee||u==er}function nw(a){return typeof a=="number"&&a==Ne(a)}function Gd(a){return typeof a=="number"&&a>-1&&a%1==0&&a<=de}function Et(a){var u=typeof a;return a!=null&&(u=="object"||u=="function")}function Rt(a){return a!=null&&typeof a=="object"}var rw=vb?nr(vb):kR;function wN(a,u){return a===u||om(a,u,_m(u))}function _N(a,u,h){return h=typeof h=="function"?h:n,om(a,u,_m(u),h)}function SN(a){return iw(a)&&a!=+a}function kN(a){if(aT(a))throw new Re(o);return Gb(a)}function CN(a){return a===null}function PN(a){return a==null}function iw(a){return typeof a=="number"||Rt(a)&&$n(a)==pe}function Yl(a){if(!Rt(a)||$n(a)!=we)return!1;var u=_d(a);if(u===null)return!0;var h=ot.call(u,"constructor")&&u.constructor;return typeof h=="function"&&h instanceof h&&yd.call(h)==_O}var Nm=yb?nr(yb):CR;function EN(a){return nw(a)&&a>=-de&&a<=de}var ow=xb?nr(xb):PR;function qd(a){return typeof a=="string"||!Te(a)&&Rt(a)&&$n(a)==ln}function ir(a){return typeof a=="symbol"||Rt(a)&&$n(a)==Mt}var sa=bb?nr(bb):ER;function MN(a){return a===n}function ON(a){return Rt(a)&&xn(a)==We}function RN(a){return Rt(a)&&$n(a)==Fr}var TN=Bd(am),AN=Bd(function(a,u){return a<=u});function sw(a){if(!a)return[];if(Wn(a))return qd(a)?jr(a):jn(a);if(Nl&&a[Nl])return uO(a[Nl]());var u=xn(a),h=u==ke?Xg:u==ut?gd:aa;return h(a)}function Ai(a){if(!a)return a===0?a:0;if(a=Sr(a),a===re||a===-re){var u=a<0?-1:1;return u*Ue}return a===a?a:0}function Ne(a){var u=Ai(a),h=u%1;return u===u?h?u-h:u:0}function aw(a){return a?rs(Ne(a),0,Z):0}function Sr(a){if(typeof a=="number")return a;if(ir(a))return ct;if(Et(a)){var u=typeof a.valueOf=="function"?a.valueOf():a;a=Et(u)?u+"":u}if(typeof a!="string")return a===0?a:+a;a=Pb(a);var h=Ks.test(a);return h||gM.test(a)?KM(a.slice(2),h?2:8):Tl.test(a)?ct:+a}function lw(a){return ii(a,Hn(a))}function NN(a){return a?rs(Ne(a),-de,de):a===0?a:0}function it(a){return a==null?"":rr(a)}var LN=ra(function(a,u){if(Vl(u)||Wn(u)){ii(u,nn(u),a);return}for(var h in u)ot.call(u,h)&&zl(a,h,u[h])}),cw=ra(function(a,u){ii(u,Hn(u),a)}),Zd=ra(function(a,u,h,y){ii(u,Hn(u),a,y)}),$N=ra(function(a,u,h,y){ii(u,nn(u),a,y)}),IN=Oi(em);function DN(a,u){var h=na(a);return u==null?h:jb(h,u)}var zN=De(function(a,u){a=dt(a);var h=-1,y=u.length,k=y>2?u[2]:n;for(k&&In(u[0],u[1],k)&&(y=1);++h<y;)for(var M=u[h],A=Hn(M),$=-1,D=A.length;++$<D;){var Y=A[$],K=a[Y];(K===n||Hr(K,Js[Y])&&!ot.call(a,Y))&&(a[Y]=M[Y])}return a}),FN=De(function(a){return a.push(n,P2),tr(uw,n,a)});function BN(a,u){return _b(a,_e(u,3),ri)}function jN(a,u){return _b(a,_e(u,3),nm)}function WN(a,u){return a==null?a:tm(a,_e(u,3),Hn)}function HN(a,u){return a==null?a:Yb(a,_e(u,3),Hn)}function VN(a,u){return a&&ri(a,_e(u,3))}function UN(a,u){return a&&nm(a,_e(u,3))}function YN(a){return a==null?[]:Ad(a,nn(a))}function KN(a){return a==null?[]:Ad(a,Hn(a))}function Lm(a,u,h){var y=a==null?n:is(a,u);return y===n?h:y}function XN(a,u){return a!=null&&O2(a,u,vR)}function $m(a,u){return a!=null&&O2(a,u,yR)}var GN=w2(function(a,u,h){u!=null&&typeof u.toString!="function"&&(u=xd.call(u)),a[u]=h},Dm(Vn)),qN=w2(function(a,u,h){u!=null&&typeof u.toString!="function"&&(u=xd.call(u)),ot.call(a,u)?a[u].push(h):a[u]=[h]},_e),ZN=De(Bl);function nn(a){return Wn(a)?Fb(a):sm(a)}function Hn(a){return Wn(a)?Fb(a,!0):MR(a)}function QN(a,u){var h={};return u=_e(u,3),ri(a,function(y,k,M){Ei(h,u(y,k,M),y)}),h}function JN(a,u){var h={};return u=_e(u,3),ri(a,function(y,k,M){Ei(h,k,u(y,k,M))}),h}var e9=ra(function(a,u,h){Nd(a,u,h)}),uw=ra(function(a,u,h,y){Nd(a,u,h,y)}),t9=Oi(function(a,u){var h={};if(a==null)return h;var y=!1;u=St(u,function(M){return M=oo(M,a),y||(y=M.length>1),M}),ii(a,bm(a),h),y&&(h=br(h,g|m|x,GR));for(var k=u.length;k--;)fm(h,u[k]);return h});function n9(a,u){return dw(a,Xd(_e(u)))}var r9=Oi(function(a,u){return a==null?{}:RR(a,u)});function dw(a,u){if(a==null)return{};var h=St(bm(a),function(y){return[y]});return u=_e(u),n2(a,h,function(y,k){return u(y,k[0])})}function i9(a,u,h){u=oo(u,a);var y=-1,k=u.length;for(k||(k=1,a=n);++y<k;){var M=a==null?n:a[oi(u[y])];M===n&&(y=k,M=h),a=Ti(M)?M.call(a):M}return a}function o9(a,u,h){return a==null?a:Wl(a,u,h)}function s9(a,u,h,y){return y=typeof y=="function"?y:n,a==null?a:Wl(a,u,h,y)}var fw=k2(nn),hw=k2(Hn);function a9(a,u,h){var y=Te(a),k=y||ao(a)||sa(a);if(u=_e(u,4),h==null){var M=a&&a.constructor;k?h=y?new M:[]:Et(a)?h=Ti(M)?na(_d(a)):{}:h={}}return(k?vr:ri)(a,function(A,$,D){return u(h,A,$,D)}),h}function l9(a,u){return a==null?!0:fm(a,u)}function c9(a,u,h){return a==null?a:a2(a,u,gm(h))}function u9(a,u,h,y){return y=typeof y=="function"?y:n,a==null?a:a2(a,u,gm(h),y)}function aa(a){return a==null?[]:Kg(a,nn(a))}function d9(a){return a==null?[]:Kg(a,Hn(a))}function f9(a,u,h){return h===n&&(h=u,u=n),h!==n&&(h=Sr(h),h=h===h?h:0),u!==n&&(u=Sr(u),u=u===u?u:0),rs(Sr(a),u,h)}function h9(a,u,h){return u=Ai(u),h===n?(h=u,u=0):h=Ai(h),a=Sr(a),xR(a,u,h)}function p9(a,u,h){if(h&&typeof h!="boolean"&&In(a,u,h)&&(u=h=n),h===n&&(typeof u=="boolean"?(h=u,u=n):typeof a=="boolean"&&(h=a,a=n)),a===n&&u===n?(a=0,u=1):(a=Ai(a),u===n?(u=a,a=0):u=Ai(u)),a>u){var y=a;a=u,u=y}if(h||a%1||u%1){var k=Db();return yn(a+k*(u-a+YM("1e-"+((k+"").length-1))),u)}return cm(a,u)}var g9=ia(function(a,u,h){return u=u.toLowerCase(),a+(h?pw(u):u)});function pw(a){return Im(it(a).toLowerCase())}function gw(a){return a=it(a),a&&a.replace(vM,oO).replace(IM,"")}function m9(a,u,h){a=it(a),u=rr(u);var y=a.length;h=h===n?y:rs(Ne(h),0,y);var k=h;return h-=u.length,h>=0&&a.slice(h,k)==u}function v9(a){return a=it(a),a&&cd.test(a)?a.replace(Us,sO):a}function y9(a){return a=it(a),a&&Mg.test(a)?a.replace(Pl,"\\$&"):a}var x9=ia(function(a,u,h){return a+(h?"-":"")+u.toLowerCase()}),b9=ia(function(a,u,h){return a+(h?" ":"")+u.toLowerCase()}),w9=y2("toLowerCase");function _9(a,u,h){a=it(a),u=Ne(u);var y=u?Zs(a):0;if(!u||y>=u)return a;var k=(u-y)/2;return Fd(Pd(k),h)+a+Fd(Cd(k),h)}function S9(a,u,h){a=it(a),u=Ne(u);var y=u?Zs(a):0;return u&&y<u?a+Fd(u-y,h):a}function k9(a,u,h){a=it(a),u=Ne(u);var y=u?Zs(a):0;return u&&y<u?Fd(u-y,h)+a:a}function C9(a,u,h){return h||u==null?u=0:u&&(u=+u),AO(it(a).replace(El,""),u||0)}function P9(a,u,h){return(h?In(a,u,h):u===n)?u=1:u=Ne(u),um(it(a),u)}function E9(){var a=arguments,u=it(a[0]);return a.length<3?u:u.replace(a[1],a[2])}var M9=ia(function(a,u,h){return a+(h?"_":"")+u.toLowerCase()});function O9(a,u,h){return h&&typeof h!="number"&&In(a,u,h)&&(u=h=n),h=h===n?Z:h>>>0,h?(a=it(a),a&&(typeof u=="string"||u!=null&&!Nm(u))&&(u=rr(u),!u&&qs(a))?so(jr(a),0,h):a.split(u,h)):[]}var R9=ia(function(a,u,h){return a+(h?" ":"")+Im(u)});function T9(a,u,h){return a=it(a),h=h==null?0:rs(Ne(h),0,a.length),u=rr(u),a.slice(h,h+u.length)==u}function A9(a,u,h){var y=P.templateSettings;h&&In(a,u,h)&&(u=n),a=it(a),u=Zd({},u,y,C2);var k=Zd({},u.imports,y.imports,C2),M=nn(k),A=Kg(k,M),$,D,Y=0,K=u.interpolate||ud,q="__p += '",ce=Gg((u.escape||ud).source+"|"+K.source+"|"+(K===Ys?Ot:ud).source+"|"+(u.evaluate||ud).source+"|$","g"),ve="//# sourceURL="+(ot.call(u,"sourceURL")?(u.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++jM+"]")+`
`;a.replace(ce,function(Pe,je,Ye,or,Dn,sr){return Ye||(Ye=or),q+=a.slice(Y,sr).replace(yM,aO),je&&($=!0,q+=`' +
__e(`+je+`) +
'`),Dn&&(D=!0,q+=`';
`+Dn+`;
__p += '`),Ye&&(q+=`' +
((__t = (`+Ye+`)) == null ? '' : __t) +
'`),Y=sr+Pe.length,Pe}),q+=`';
`;var Ce=ot.call(u,"variable")&&u.variable;if(!Ce)q=`with (obj) {
`+q+`
}
`;else if(Rl.test(Ce))throw new Re(l);q=(D?q.replace(Qi,""):q).replace(ad,"$1").replace(ld,"$1;"),q="function("+(Ce||"obj")+`) {
`+(Ce?"":`obj || (obj = {});
`)+"var __t, __p = ''"+($?", __e = _.escape":"")+(D?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+q+`return __p
}`;var $e=vw(function(){return tt(M,ve+"return "+q).apply(n,A)});if($e.source=q,Am($e))throw $e;return $e}function N9(a){return it(a).toLowerCase()}function L9(a){return it(a).toUpperCase()}function $9(a,u,h){if(a=it(a),a&&(h||u===n))return Pb(a);if(!a||!(u=rr(u)))return a;var y=jr(a),k=jr(u),M=Eb(y,k),A=Mb(y,k)+1;return so(y,M,A).join("")}function I9(a,u,h){if(a=it(a),a&&(h||u===n))return a.slice(0,Rb(a)+1);if(!a||!(u=rr(u)))return a;var y=jr(a),k=Mb(y,jr(u))+1;return so(y,0,k).join("")}function D9(a,u,h){if(a=it(a),a&&(h||u===n))return a.replace(El,"");if(!a||!(u=rr(u)))return a;var y=jr(a),k=Eb(y,jr(u));return so(y,k).join("")}function z9(a,u){var h=H,y=Q;if(Et(u)){var k="separator"in u?u.separator:k;h="length"in u?Ne(u.length):h,y="omission"in u?rr(u.omission):y}a=it(a);var M=a.length;if(qs(a)){var A=jr(a);M=A.length}if(h>=M)return a;var $=h-Zs(y);if($<1)return y;var D=A?so(A,0,$).join(""):a.slice(0,$);if(k===n)return D+y;if(A&&($+=D.length-$),Nm(k)){if(a.slice($).search(k)){var Y,K=D;for(k.global||(k=Gg(k.source,it(Kt.exec(k))+"g")),k.lastIndex=0;Y=k.exec(K);)var q=Y.index;D=D.slice(0,q===n?$:q)}}else if(a.indexOf(rr(k),$)!=$){var ce=D.lastIndexOf(k);ce>-1&&(D=D.slice(0,ce))}return D+y}function F9(a){return a=it(a),a&&_l.test(a)?a.replace(wl,pO):a}var B9=ia(function(a,u,h){return a+(h?" ":"")+u.toUpperCase()}),Im=y2("toUpperCase");function mw(a,u,h){return a=it(a),u=h?n:u,u===n?cO(a)?vO(a):eO(a):a.match(u)||[]}var vw=De(function(a,u){try{return tr(a,n,u)}catch(h){return Am(h)?h:new Re(h)}}),j9=Oi(function(a,u){return vr(u,function(h){h=oi(h),Ei(a,h,Rm(a[h],a))}),a});function W9(a){var u=a==null?0:a.length,h=_e();return a=u?St(a,function(y){if(typeof y[1]!="function")throw new yr(s);return[h(y[0]),y[1]]}):[],De(function(y){for(var k=-1;++k<u;){var M=a[k];if(tr(M[0],this,y))return tr(M[1],this,y)}})}function H9(a){return pR(br(a,g))}function Dm(a){return function(){return a}}function V9(a,u){return a==null||a!==a?u:a}var U9=b2(),Y9=b2(!0);function Vn(a){return a}function zm(a){return qb(typeof a=="function"?a:br(a,g))}function K9(a){return Qb(br(a,g))}function X9(a,u){return Jb(a,br(u,g))}var G9=De(function(a,u){return function(h){return Bl(h,a,u)}}),q9=De(function(a,u){return function(h){return Bl(a,h,u)}});function Fm(a,u,h){var y=nn(u),k=Ad(u,y);h==null&&!(Et(u)&&(k.length||!y.length))&&(h=u,u=a,a=this,k=Ad(u,nn(u)));var M=!(Et(h)&&"chain"in h)||!!h.chain,A=Ti(a);return vr(k,function($){var D=u[$];a[$]=D,A&&(a.prototype[$]=function(){var Y=this.__chain__;if(M||Y){var K=a(this.__wrapped__),q=K.__actions__=jn(this.__actions__);return q.push({func:D,args:arguments,thisArg:a}),K.__chain__=Y,K}return D.apply(a,eo([this.value()],arguments))})}),a}function Z9(){return cn._===this&&(cn._=SO),this}function Bm(){}function Q9(a){return a=Ne(a),De(function(u){return e2(u,a)})}var J9=vm(St),eL=vm(wb),tL=vm(Wg);function yw(a){return km(a)?Hg(oi(a)):TR(a)}function nL(a){return function(u){return a==null?n:is(a,u)}}var rL=_2(),iL=_2(!0);function jm(){return[]}function Wm(){return!1}function oL(){return{}}function sL(){return""}function aL(){return!0}function lL(a,u){if(a=Ne(a),a<1||a>de)return[];var h=Z,y=yn(a,Z);u=_e(u),a-=Z;for(var k=Yg(y,u);++h<a;)u(h);return k}function cL(a){return Te(a)?St(a,oi):ir(a)?[a]:jn(z2(it(a)))}function uL(a){var u=++wO;return it(a)+u}var dL=zd(function(a,u){return a+u},0),fL=ym("ceil"),hL=zd(function(a,u){return a/u},1),pL=ym("floor");function gL(a){return a&&a.length?Td(a,Vn,rm):n}function mL(a,u){return a&&a.length?Td(a,_e(u,2),rm):n}function vL(a){return kb(a,Vn)}function yL(a,u){return kb(a,_e(u,2))}function xL(a){return a&&a.length?Td(a,Vn,am):n}function bL(a,u){return a&&a.length?Td(a,_e(u,2),am):n}var wL=zd(function(a,u){return a*u},1),_L=ym("round"),SL=zd(function(a,u){return a-u},0);function kL(a){return a&&a.length?Ug(a,Vn):0}function CL(a,u){return a&&a.length?Ug(a,_e(u,2)):0}return P.after=KA,P.ary=G2,P.assign=LN,P.assignIn=cw,P.assignInWith=Zd,P.assignWith=$N,P.at=IN,P.before=q2,P.bind=Rm,P.bindAll=j9,P.bindKey=Z2,P.castArray=oN,P.chain=Y2,P.chunk=pT,P.compact=gT,P.concat=mT,P.cond=W9,P.conforms=H9,P.constant=Dm,P.countBy=kA,P.create=DN,P.curry=Q2,P.curryRight=J2,P.debounce=ew,P.defaults=zN,P.defaultsDeep=FN,P.defer=XA,P.delay=GA,P.difference=vT,P.differenceBy=yT,P.differenceWith=xT,P.drop=bT,P.dropRight=wT,P.dropRightWhile=_T,P.dropWhile=ST,P.fill=kT,P.filter=PA,P.flatMap=OA,P.flatMapDeep=RA,P.flatMapDepth=TA,P.flatten=W2,P.flattenDeep=CT,P.flattenDepth=PT,P.flip=qA,P.flow=U9,P.flowRight=Y9,P.fromPairs=ET,P.functions=YN,P.functionsIn=KN,P.groupBy=AA,P.initial=OT,P.intersection=RT,P.intersectionBy=TT,P.intersectionWith=AT,P.invert=GN,P.invertBy=qN,P.invokeMap=LA,P.iteratee=zm,P.keyBy=$A,P.keys=nn,P.keysIn=Hn,P.map=Ud,P.mapKeys=QN,P.mapValues=JN,P.matches=K9,P.matchesProperty=X9,P.memoize=Kd,P.merge=e9,P.mergeWith=uw,P.method=G9,P.methodOf=q9,P.mixin=Fm,P.negate=Xd,P.nthArg=Q9,P.omit=t9,P.omitBy=n9,P.once=ZA,P.orderBy=IA,P.over=J9,P.overArgs=QA,P.overEvery=eL,P.overSome=tL,P.partial=Tm,P.partialRight=tw,P.partition=DA,P.pick=r9,P.pickBy=dw,P.property=yw,P.propertyOf=nL,P.pull=IT,P.pullAll=V2,P.pullAllBy=DT,P.pullAllWith=zT,P.pullAt=FT,P.range=rL,P.rangeRight=iL,P.rearg=JA,P.reject=BA,P.remove=BT,P.rest=eN,P.reverse=Mm,P.sampleSize=WA,P.set=o9,P.setWith=s9,P.shuffle=HA,P.slice=jT,P.sortBy=YA,P.sortedUniq=XT,P.sortedUniqBy=GT,P.split=O9,P.spread=tN,P.tail=qT,P.take=ZT,P.takeRight=QT,P.takeRightWhile=JT,P.takeWhile=eA,P.tap=gA,P.throttle=nN,P.thru=Vd,P.toArray=sw,P.toPairs=fw,P.toPairsIn=hw,P.toPath=cL,P.toPlainObject=lw,P.transform=a9,P.unary=rN,P.union=tA,P.unionBy=nA,P.unionWith=rA,P.uniq=iA,P.uniqBy=oA,P.uniqWith=sA,P.unset=l9,P.unzip=Om,P.unzipWith=U2,P.update=c9,P.updateWith=u9,P.values=aa,P.valuesIn=d9,P.without=aA,P.words=mw,P.wrap=iN,P.xor=lA,P.xorBy=cA,P.xorWith=uA,P.zip=dA,P.zipObject=fA,P.zipObjectDeep=hA,P.zipWith=pA,P.entries=fw,P.entriesIn=hw,P.extend=cw,P.extendWith=Zd,Fm(P,P),P.add=dL,P.attempt=vw,P.camelCase=g9,P.capitalize=pw,P.ceil=fL,P.clamp=f9,P.clone=sN,P.cloneDeep=lN,P.cloneDeepWith=cN,P.cloneWith=aN,P.conformsTo=uN,P.deburr=gw,P.defaultTo=V9,P.divide=hL,P.endsWith=m9,P.eq=Hr,P.escape=v9,P.escapeRegExp=y9,P.every=CA,P.find=EA,P.findIndex=B2,P.findKey=BN,P.findLast=MA,P.findLastIndex=j2,P.findLastKey=jN,P.floor=pL,P.forEach=K2,P.forEachRight=X2,P.forIn=WN,P.forInRight=HN,P.forOwn=VN,P.forOwnRight=UN,P.get=Lm,P.gt=dN,P.gte=fN,P.has=XN,P.hasIn=$m,P.head=H2,P.identity=Vn,P.includes=NA,P.indexOf=MT,P.inRange=h9,P.invoke=ZN,P.isArguments=as,P.isArray=Te,P.isArrayBuffer=hN,P.isArrayLike=Wn,P.isArrayLikeObject=Ft,P.isBoolean=pN,P.isBuffer=ao,P.isDate=gN,P.isElement=mN,P.isEmpty=vN,P.isEqual=yN,P.isEqualWith=xN,P.isError=Am,P.isFinite=bN,P.isFunction=Ti,P.isInteger=nw,P.isLength=Gd,P.isMap=rw,P.isMatch=wN,P.isMatchWith=_N,P.isNaN=SN,P.isNative=kN,P.isNil=PN,P.isNull=CN,P.isNumber=iw,P.isObject=Et,P.isObjectLike=Rt,P.isPlainObject=Yl,P.isRegExp=Nm,P.isSafeInteger=EN,P.isSet=ow,P.isString=qd,P.isSymbol=ir,P.isTypedArray=sa,P.isUndefined=MN,P.isWeakMap=ON,P.isWeakSet=RN,P.join=NT,P.kebabCase=x9,P.last=_r,P.lastIndexOf=LT,P.lowerCase=b9,P.lowerFirst=w9,P.lt=TN,P.lte=AN,P.max=gL,P.maxBy=mL,P.mean=vL,P.meanBy=yL,P.min=xL,P.minBy=bL,P.stubArray=jm,P.stubFalse=Wm,P.stubObject=oL,P.stubString=sL,P.stubTrue=aL,P.multiply=wL,P.nth=$T,P.noConflict=Z9,P.noop=Bm,P.now=Yd,P.pad=_9,P.padEnd=S9,P.padStart=k9,P.parseInt=C9,P.random=p9,P.reduce=zA,P.reduceRight=FA,P.repeat=P9,P.replace=E9,P.result=i9,P.round=_L,P.runInContext=I,P.sample=jA,P.size=VA,P.snakeCase=M9,P.some=UA,P.sortedIndex=WT,P.sortedIndexBy=HT,P.sortedIndexOf=VT,P.sortedLastIndex=UT,P.sortedLastIndexBy=YT,P.sortedLastIndexOf=KT,P.startCase=R9,P.startsWith=T9,P.subtract=SL,P.sum=kL,P.sumBy=CL,P.template=A9,P.times=lL,P.toFinite=Ai,P.toInteger=Ne,P.toLength=aw,P.toLower=N9,P.toNumber=Sr,P.toSafeInteger=NN,P.toString=it,P.toUpper=L9,P.trim=$9,P.trimEnd=I9,P.trimStart=D9,P.truncate=z9,P.unescape=F9,P.uniqueId=uL,P.upperCase=B9,P.upperFirst=Im,P.each=K2,P.eachRight=X2,P.first=H2,Fm(P,function(){var a={};return ri(P,function(u,h){ot.call(P.prototype,h)||(a[h]=u)}),a}(),{chain:!1}),P.VERSION=r,vr(["bind","bindKey","curry","curryRight","partial","partialRight"],function(a){P[a].placeholder=P}),vr(["drop","take"],function(a,u){He.prototype[a]=function(h){h=h===n?1:Qt(Ne(h),0);var y=this.__filtered__&&!u?new He(this):this.clone();return y.__filtered__?y.__takeCount__=yn(h,y.__takeCount__):y.__views__.push({size:yn(h,Z),type:a+(y.__dir__<0?"Right":"")}),y},He.prototype[a+"Right"]=function(h){return this.reverse()[a](h).reverse()}}),vr(["filter","map","takeWhile"],function(a,u){var h=u+1,y=h==ye||h==ge;He.prototype[a]=function(k){var M=this.clone();return M.__iteratees__.push({iteratee:_e(k,3),type:h}),M.__filtered__=M.__filtered__||y,M}}),vr(["head","last"],function(a,u){var h="take"+(u?"Right":"");He.prototype[a]=function(){return this[h](1).value()[0]}}),vr(["initial","tail"],function(a,u){var h="drop"+(u?"":"Right");He.prototype[a]=function(){return this.__filtered__?new He(this):this[h](1)}}),He.prototype.compact=function(){return this.filter(Vn)},He.prototype.find=function(a){return this.filter(a).head()},He.prototype.findLast=function(a){return this.reverse().find(a)},He.prototype.invokeMap=De(function(a,u){return typeof a=="function"?new He(this):this.map(function(h){return Bl(h,a,u)})}),He.prototype.reject=function(a){return this.filter(Xd(_e(a)))},He.prototype.slice=function(a,u){a=Ne(a);var h=this;return h.__filtered__&&(a>0||u<0)?new He(h):(a<0?h=h.takeRight(-a):a&&(h=h.drop(a)),u!==n&&(u=Ne(u),h=u<0?h.dropRight(-u):h.take(u-a)),h)},He.prototype.takeRightWhile=function(a){return this.reverse().takeWhile(a).reverse()},He.prototype.toArray=function(){return this.take(Z)},ri(He.prototype,function(a,u){var h=/^(?:filter|find|map|reject)|While$/.test(u),y=/^(?:head|last)$/.test(u),k=P[y?"take"+(u=="last"?"Right":""):u],M=y||/^find/.test(u);!k||(P.prototype[u]=function(){var A=this.__wrapped__,$=y?[1]:arguments,D=A instanceof He,Y=$[0],K=D||Te(A),q=function(je){var Ye=k.apply(P,eo([je],$));return y&&ce?Ye[0]:Ye};K&&h&&typeof Y=="function"&&Y.length!=1&&(D=K=!1);var ce=this.__chain__,ve=!!this.__actions__.length,Ce=M&&!ce,$e=D&&!ve;if(!M&&K){A=$e?A:new He(this);var Pe=a.apply(A,$);return Pe.__actions__.push({func:Vd,args:[q],thisArg:n}),new xr(Pe,ce)}return Ce&&$e?a.apply(this,$):(Pe=this.thru(q),Ce?y?Pe.value()[0]:Pe.value():Pe)})}),vr(["pop","push","shift","sort","splice","unshift"],function(a){var u=md[a],h=/^(?:push|sort|unshift)$/.test(a)?"tap":"thru",y=/^(?:pop|shift)$/.test(a);P.prototype[a]=function(){var k=arguments;if(y&&!this.__chain__){var M=this.value();return u.apply(Te(M)?M:[],k)}return this[h](function(A){return u.apply(Te(A)?A:[],k)})}}),ri(He.prototype,function(a,u){var h=P[u];if(h){var y=h.name+"";ot.call(ta,y)||(ta[y]=[]),ta[y].push({name:u,func:h})}}),ta[Dd(n,b).name]=[{name:"wrapper",func:n}],He.prototype.clone=FO,He.prototype.reverse=BO,He.prototype.value=jO,P.prototype.at=mA,P.prototype.chain=vA,P.prototype.commit=yA,P.prototype.next=xA,P.prototype.plant=wA,P.prototype.reverse=_A,P.prototype.toJSON=P.prototype.valueOf=P.prototype.value=SA,P.prototype.first=P.prototype.head,Nl&&(P.prototype[Nl]=bA),P},Qs=yO();Jo?((Jo.exports=Qs)._=Qs,zg._=Qs):cn._=Qs}).call(Kl)})(Qv,Qv.exports);var tP=Qv.exports;const Jv=e=>e?e.toLowerCase().replace(/\b\w/g,t=>t.toUpperCase()):"",fF=he.div`
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
`,nP=({scheme:e,activeFilter:t})=>{var n;return p(fF,{children:p(ft,{className:"link",to:`/mutual-fund/${e.Scheme_Code}`,title:e.name,children:O("div",{className:"scheme-container",children:[p("div",{className:"image",children:p("img",{src:`./images/amc-logo/${(n=e.amc_logo)!=null?n:"404-tp.png"}`,alt:""})}),O("div",{className:"info",children:[p("div",{className:"name",children:Jv(e.Scheme_Name)}),O("div",{className:"description",children:[p("strong",{children:"Type: "})," ",Jv(e.Scheme_Type)]})]}),p("div",{className:"return",children:O("div",{className:"1",children:[p("span",{className:"normal",children:"10%"}),O("span",{className:"popular",children:["3Y ",p("br",{})," 15%"]})]})})]})})})},hF={black:"#000",white:"#fff"};var mu=hF;const pF={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"};var ua=pF;const gF={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff"};var da=gF;const mF={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"};var fa=mF;const vF={50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea"};var ha=vF;const yF={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"};var pa=yF;const xF={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00"};var sc=xF;const bF={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"};var wF=bF;function Ls(e){let t="https://mui.com/production-error/?code="+e;for(let n=1;n<arguments.length;n+=1)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified MUI error #"+e+"; visit "+t+" for the full message."}var _F=Object.freeze(Object.defineProperty({__proto__:null,default:Ls},Symbol.toStringTag,{value:"Module"})),nx="$$material",SF=!1;function kF(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function CF(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var PF=function(){function e(n){var r=this;this._insertTag=function(i){var o;r.tags.length===0?r.insertionPoint?o=r.insertionPoint.nextSibling:r.prepend?o=r.container.firstChild:o=r.before:o=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,o),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!SF:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(CF(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var o=kF(i);try{o.insertRule(r,o.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){var i;return(i=r.parentNode)==null?void 0:i.removeChild(r)}),this.tags=[],this.ctr=0},e}(),bn="-ms-",Xh="-moz-",nt="-webkit-",rP="comm",rx="rule",ix="decl",EF="@import",iP="@keyframes",MF="@layer",OF=Math.abs,Kp=String.fromCharCode,RF=Object.assign;function TF(e,t){return hn(e,0)^45?(((t<<2^hn(e,0))<<2^hn(e,1))<<2^hn(e,2))<<2^hn(e,3):0}function oP(e){return e.trim()}function AF(e,t){return(e=t.exec(e))?e[0]:e}function rt(e,t,n){return e.replace(t,n)}function e1(e,t){return e.indexOf(t)}function hn(e,t){return e.charCodeAt(t)|0}function vu(e,t,n){return e.slice(t,n)}function ci(e){return e.length}function ox(e){return e.length}function vf(e,t){return t.push(e),e}function NF(e,t){return e.map(t).join("")}var Xp=1,el=1,sP=0,Jn=0,Gt=0,gl="";function Gp(e,t,n,r,i,o,s){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Xp,column:el,length:s,return:""}}function ac(e,t){return RF(Gp("",null,null,"",null,null,0),e,{length:-e.length},t)}function LF(){return Gt}function $F(){return Gt=Jn>0?hn(gl,--Jn):0,el--,Gt===10&&(el=1,Xp--),Gt}function dr(){return Gt=Jn<sP?hn(gl,Jn++):0,el++,Gt===10&&(el=1,Xp++),Gt}function xi(){return hn(gl,Jn)}function Qf(){return Jn}function Gu(e,t){return vu(gl,e,t)}function yu(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function aP(e){return Xp=el=1,sP=ci(gl=e),Jn=0,[]}function lP(e){return gl="",e}function Jf(e){return oP(Gu(Jn-1,t1(e===91?e+2:e===40?e+1:e)))}function IF(e){for(;(Gt=xi())&&Gt<33;)dr();return yu(e)>2||yu(Gt)>3?"":" "}function DF(e,t){for(;--t&&dr()&&!(Gt<48||Gt>102||Gt>57&&Gt<65||Gt>70&&Gt<97););return Gu(e,Qf()+(t<6&&xi()==32&&dr()==32))}function t1(e){for(;dr();)switch(Gt){case e:return Jn;case 34:case 39:e!==34&&e!==39&&t1(Gt);break;case 40:e===41&&t1(e);break;case 92:dr();break}return Jn}function zF(e,t){for(;dr()&&e+Gt!==47+10;)if(e+Gt===42+42&&xi()===47)break;return"/*"+Gu(t,Jn-1)+"*"+Kp(e===47?e:dr())}function FF(e){for(;!yu(xi());)dr();return Gu(e,Jn)}function BF(e){return lP(eh("",null,null,null,[""],e=aP(e),0,[0],e))}function eh(e,t,n,r,i,o,s,l,c){for(var d=0,f=0,g=s,m=0,x=0,w=0,_=1,v=1,b=1,S=0,C="",E=i,T=o,N=r,L=C;v;)switch(w=S,S=dr()){case 40:if(w!=108&&hn(L,g-1)==58){e1(L+=rt(Jf(S),"&","&\f"),"&\f")!=-1&&(b=-1);break}case 34:case 39:case 91:L+=Jf(S);break;case 9:case 10:case 13:case 32:L+=IF(w);break;case 92:L+=DF(Qf()-1,7);continue;case 47:switch(xi()){case 42:case 47:vf(jF(zF(dr(),Qf()),t,n),c);break;default:L+="/"}break;case 123*_:l[d++]=ci(L)*b;case 125*_:case 59:case 0:switch(S){case 0:case 125:v=0;case 59+f:b==-1&&(L=rt(L,/\f/g,"")),x>0&&ci(L)-g&&vf(x>32?NS(L+";",r,n,g-1):NS(rt(L," ","")+";",r,n,g-2),c);break;case 59:L+=";";default:if(vf(N=AS(L,t,n,d,f,i,l,C,E=[],T=[],g),o),S===123)if(f===0)eh(L,t,N,N,E,o,g,l,T);else switch(m===99&&hn(L,3)===110?100:m){case 100:case 108:case 109:case 115:eh(e,N,N,r&&vf(AS(e,N,N,0,0,i,l,C,i,E=[],g),T),i,T,g,l,r?E:T);break;default:eh(L,N,N,N,[""],T,0,l,T)}}d=f=x=0,_=b=1,C=L="",g=s;break;case 58:g=1+ci(L),x=w;default:if(_<1){if(S==123)--_;else if(S==125&&_++==0&&$F()==125)continue}switch(L+=Kp(S),S*_){case 38:b=f>0?1:(L+="\f",-1);break;case 44:l[d++]=(ci(L)-1)*b,b=1;break;case 64:xi()===45&&(L+=Jf(dr())),m=xi(),f=g=ci(C=L+=FF(Qf())),S++;break;case 45:w===45&&ci(L)==2&&(_=0)}}return o}function AS(e,t,n,r,i,o,s,l,c,d,f){for(var g=i-1,m=i===0?o:[""],x=ox(m),w=0,_=0,v=0;w<r;++w)for(var b=0,S=vu(e,g+1,g=OF(_=s[w])),C=e;b<x;++b)(C=oP(_>0?m[b]+" "+S:rt(S,/&\f/g,m[b])))&&(c[v++]=C);return Gp(e,t,n,i===0?rx:l,c,d,f)}function jF(e,t,n){return Gp(e,t,n,rP,Kp(LF()),vu(e,2,-2),0)}function NS(e,t,n,r){return Gp(e,t,n,ix,vu(e,0,r),vu(e,r+1,-1),r)}function Wa(e,t){for(var n="",r=ox(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function WF(e,t,n,r){switch(e.type){case MF:if(e.children.length)break;case EF:case ix:return e.return=e.return||e.value;case rP:return"";case iP:return e.return=e.value+"{"+Wa(e.children,r)+"}";case rx:e.value=e.props.join(",")}return ci(n=Wa(e.children,r))?e.return=e.value+"{"+n+"}":""}function HF(e){var t=ox(e);return function(n,r,i,o){for(var s="",l=0;l<t;l++)s+=e[l](n,r,i,o)||"";return s}}function VF(e){return function(t){t.root||(t=t.return)&&e(t)}}var UF=function(t,n,r){for(var i=0,o=0;i=o,o=xi(),i===38&&o===12&&(n[r]=1),!yu(o);)dr();return Gu(t,Jn)},YF=function(t,n){var r=-1,i=44;do switch(yu(i)){case 0:i===38&&xi()===12&&(n[r]=1),t[r]+=UF(Jn-1,n,r);break;case 2:t[r]+=Jf(i);break;case 4:if(i===44){t[++r]=xi()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=Kp(i)}while(i=dr());return t},KF=function(t,n){return lP(YF(aP(t),n))},LS=new WeakMap,XF=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,i=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!LS.get(r))&&!i){LS.set(t,!0);for(var o=[],s=KF(n,o),l=r.props,c=0,d=0;c<s.length;c++)for(var f=0;f<l.length;f++,d++)t.props[d]=o[c]?s[c].replace(/&\f/g,l[f]):l[f]+" "+s[c]}}},GF=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function cP(e,t){switch(TF(e,t)){case 5103:return nt+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return nt+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return nt+e+Xh+e+bn+e+e;case 6828:case 4268:return nt+e+bn+e+e;case 6165:return nt+e+bn+"flex-"+e+e;case 5187:return nt+e+rt(e,/(\w+).+(:[^]+)/,nt+"box-$1$2"+bn+"flex-$1$2")+e;case 5443:return nt+e+bn+"flex-item-"+rt(e,/flex-|-self/,"")+e;case 4675:return nt+e+bn+"flex-line-pack"+rt(e,/align-content|flex-|-self/,"")+e;case 5548:return nt+e+bn+rt(e,"shrink","negative")+e;case 5292:return nt+e+bn+rt(e,"basis","preferred-size")+e;case 6060:return nt+"box-"+rt(e,"-grow","")+nt+e+bn+rt(e,"grow","positive")+e;case 4554:return nt+rt(e,/([^-])(transform)/g,"$1"+nt+"$2")+e;case 6187:return rt(rt(rt(e,/(zoom-|grab)/,nt+"$1"),/(image-set)/,nt+"$1"),e,"")+e;case 5495:case 3959:return rt(e,/(image-set\([^]*)/,nt+"$1$`$1");case 4968:return rt(rt(e,/(.+:)(flex-)?(.*)/,nt+"box-pack:$3"+bn+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+nt+e+e;case 4095:case 3583:case 4068:case 2532:return rt(e,/(.+)-inline(.+)/,nt+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(ci(e)-1-t>6)switch(hn(e,t+1)){case 109:if(hn(e,t+4)!==45)break;case 102:return rt(e,/(.+:)(.+)-([^]+)/,"$1"+nt+"$2-$3$1"+Xh+(hn(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~e1(e,"stretch")?cP(rt(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(hn(e,t+1)!==115)break;case 6444:switch(hn(e,ci(e)-3-(~e1(e,"!important")&&10))){case 107:return rt(e,":",":"+nt)+e;case 101:return rt(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+nt+(hn(e,14)===45?"inline-":"")+"box$3$1"+nt+"$2$3$1"+bn+"$2box$3")+e}break;case 5936:switch(hn(e,t+11)){case 114:return nt+e+bn+rt(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return nt+e+bn+rt(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return nt+e+bn+rt(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return nt+e+bn+e+e}return e}var qF=function(t,n,r,i){if(t.length>-1&&!t.return)switch(t.type){case ix:t.return=cP(t.value,t.length);break;case iP:return Wa([ac(t,{value:rt(t.value,"@","@"+nt)})],i);case rx:if(t.length)return NF(t.props,function(o){switch(AF(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Wa([ac(t,{props:[rt(o,/:(read-\w+)/,":"+Xh+"$1")]})],i);case"::placeholder":return Wa([ac(t,{props:[rt(o,/:(plac\w+)/,":"+nt+"input-$1")]}),ac(t,{props:[rt(o,/:(plac\w+)/,":"+Xh+"$1")]}),ac(t,{props:[rt(o,/:(plac\w+)/,bn+"input-$1")]})],i)}return""})}},ZF=[qF],uP=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(_){var v=_.getAttribute("data-emotion");v.indexOf(" ")!==-1&&(document.head.appendChild(_),_.setAttribute("data-s",""))})}var i=t.stylisPlugins||ZF,o={},s,l=[];s=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(_){for(var v=_.getAttribute("data-emotion").split(" "),b=1;b<v.length;b++)o[v[b]]=!0;l.push(_)});var c,d=[XF,GF];{var f,g=[WF,VF(function(_){f.insert(_)})],m=HF(d.concat(i,g)),x=function(v){return Wa(BF(v),m)};c=function(v,b,S,C){f=S,x(v?v+"{"+b.styles+"}":b.styles),C&&(w.inserted[b.name]=!0)}}var w={key:n,sheet:new PF({key:n,container:s,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:o,registered:{},insert:c};return w.sheet.hydrate(l),w},QF=!0;function JF(e,t,n){var r="";return n.split(" ").forEach(function(i){e[i]!==void 0?t.push(e[i]+";"):r+=i+" "}),r}var dP=function(t,n,r){var i=t.key+"-"+n.name;(r===!1||QF===!1)&&t.registered[i]===void 0&&(t.registered[i]=n.styles)},fP=function(t,n,r){dP(t,n,r);var i=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var o=n;do t.insert(n===o?"."+i:"",o,t.sheet,!0),o=o.next;while(o!==void 0)}};function eB(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var tB={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},nB=!1,rB=/[A-Z]|^ms/g,iB=/_EMO_([^_]+?)_([^]*?)_EMO_/g,hP=function(t){return t.charCodeAt(1)===45},$S=function(t){return t!=null&&typeof t!="boolean"},E0=Z4(function(e){return hP(e)?e:e.replace(rB,"-$&").toLowerCase()}),IS=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(iB,function(r,i,o){return ui={name:i,styles:o,next:ui},i})}return tB[t]!==1&&!hP(t)&&typeof n=="number"&&n!==0?n+"px":n},oB="Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";function xu(e,t,n){if(n==null)return"";var r=n;if(r.__emotion_styles!==void 0)return r;switch(typeof n){case"boolean":return"";case"object":{var i=n;if(i.anim===1)return ui={name:i.name,styles:i.styles,next:ui},i.name;var o=n;if(o.styles!==void 0){var s=o.next;if(s!==void 0)for(;s!==void 0;)ui={name:s.name,styles:s.styles,next:ui},s=s.next;var l=o.styles+";";return l}return sB(e,t,n)}case"function":{if(e!==void 0){var c=ui,d=n(e);return ui=c,xu(e,t,d)}break}}var f=n;if(t==null)return f;var g=t[f];return g!==void 0?g:f}function sB(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=xu(e,t,n[i])+";";else for(var o in n){var s=n[o];if(typeof s!="object"){var l=s;t!=null&&t[l]!==void 0?r+=o+"{"+t[l]+"}":$S(l)&&(r+=E0(o)+":"+IS(o,l)+";")}else{if(o==="NO_COMPONENT_SELECTOR"&&nB)throw new Error(oB);if(Array.isArray(s)&&typeof s[0]=="string"&&(t==null||t[s[0]]===void 0))for(var c=0;c<s.length;c++)$S(s[c])&&(r+=E0(o)+":"+IS(o,s[c])+";");else{var d=xu(e,t,s);switch(o){case"animation":case"animationName":{r+=E0(o)+":"+d+";";break}default:r+=o+"{"+d+"}"}}}}return r}var DS=/label:\s*([^\s;\n{]+)\s*(;|$)/g,ui;function sx(e,t,n){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var r=!0,i="";ui=void 0;var o=e[0];if(o==null||o.raw===void 0)r=!1,i+=xu(n,t,o);else{var s=o;i+=s[0]}for(var l=1;l<e.length;l++)if(i+=xu(n,t,e[l]),r){var c=o;i+=c[l]}DS.lastIndex=0;for(var d="",f;(f=DS.exec(i))!==null;)d+="-"+f[1];var g=eB(i)+d;return{name:g,styles:i,next:ui}}var aB=function(t){return t()},pP=Gc["useInsertionEffect"]?Gc["useInsertionEffect"]:!1,lB=pP||aB,zS=pP||R.exports.useLayoutEffect,gP=R.exports.createContext(typeof HTMLElement!="undefined"?uP({key:"css"}):null),cB=gP.Provider,mP=function(t){return R.exports.forwardRef(function(n,r){var i=R.exports.useContext(gP);return t(n,i,r)})},qp=R.exports.createContext({}),ax={exports:{}};(function(e){function t(){return e.exports=t=Object.assign?Object.assign.bind():function(n){for(var r=1;r<arguments.length;r++){var i=arguments[r];for(var o in i)({}).hasOwnProperty.call(i,o)&&(n[o]=i[o])}return n},e.exports.__esModule=!0,e.exports.default=e.exports,t.apply(null,arguments)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports})(ax);var uB=mP(function(e,t){var n=e.styles,r=sx([n],void 0,R.exports.useContext(qp)),i=R.exports.useRef();return zS(function(){var o=t.key+"-global",s=new t.sheet.constructor({key:o,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),l=!1,c=document.querySelector('style[data-emotion="'+o+" "+r.name+'"]');return t.sheet.tags.length&&(s.before=t.sheet.tags[0]),c!==null&&(l=!0,c.setAttribute("data-emotion",o),s.hydrate([c])),i.current=[s,l],function(){s.flush()}},[t]),zS(function(){var o=i.current,s=o[0],l=o[1];if(l){o[1]=!1;return}if(r.next!==void 0&&fP(t,r.next,!0),s.tags.length){var c=s.tags[s.tags.length-1].nextElementSibling;s.before=c,s.flush()}t.insert("",r,s,!1)},[t,r.name]),null});function Gh(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return sx(t)}var ml=function(){var t=Gh.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},dB=$v,fB=function(t){return t!=="theme"},FS=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?dB:fB},BS=function(t,n,r){var i;if(n){var o=n.shouldForwardProp;i=t.__emotion_forwardProp&&o?function(s){return t.__emotion_forwardProp(s)&&o(s)}:o}return typeof i!="function"&&r&&(i=t.__emotion_forwardProp),i},hB=!1,pB=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return dP(n,r,i),lB(function(){return fP(n,r,i)}),null},gB=function e(t,n){var r=t.__emotion_real===t,i=r&&t.__emotion_base||t,o,s;n!==void 0&&(o=n.label,s=n.target);var l=BS(t,n,r),c=l||FS(i),d=!c("as");return function(){var f=arguments,g=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(o!==void 0&&g.push("label:"+o+";"),f[0]==null||f[0].raw===void 0)g.push.apply(g,f);else{g.push(f[0][0]);for(var m=f.length,x=1;x<m;x++)g.push(f[x],f[0][x])}var w=mP(function(_,v,b){var S=d&&_.as||i,C="",E=[],T=_;if(_.theme==null){T={};for(var N in _)T[N]=_[N];T.theme=R.exports.useContext(qp)}typeof _.className=="string"?C=JF(v.registered,E,_.className):_.className!=null&&(C=_.className+" ");var L=sx(g.concat(E),v.registered,T);C+=v.key+"-"+L.name,s!==void 0&&(C+=" "+s);var z=d&&l===void 0?FS(S):c,B={};for(var H in _)d&&H==="as"||z(H)&&(B[H]=_[H]);return B.className=C,b&&(B.ref=b),R.exports.createElement(R.exports.Fragment,null,R.exports.createElement(pB,{cache:v,serialized:L,isStringTag:typeof S=="string"}),R.exports.createElement(S,B))});return w.displayName=o!==void 0?o:"Styled("+(typeof i=="string"?i:i.displayName||i.name||"Component")+")",w.defaultProps=t.defaultProps,w.__emotion_real=w,w.__emotion_base=i,w.__emotion_styles=g,w.__emotion_forwardProp=l,Object.defineProperty(w,"toString",{value:function(){return s===void 0&&hB?"NO_COMPONENT_SELECTOR":"."+s}}),w.withComponent=function(_,v){return e(_,ne({},n,v,{shouldForwardProp:BS(w,v,!0)})).apply(void 0,g)},w}},mB=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],n1=gB.bind();mB.forEach(function(e){n1[e]=n1(e)});let r1;typeof document=="object"&&(r1=uP({key:"css",prepend:!0}));function vB(e){const{injectFirst:t,children:n}=e;return t&&r1?p(cB,{value:r1,children:n}):n}function yB(e){return e==null||Object.keys(e).length===0}function xB(e){const{styles:t,defaultTheme:n={}}=e;return p(uB,{styles:typeof t=="function"?i=>t(yB(i)?n:i):t})}/**
 * @mui/styled-engine v5.16.6
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function vP(e,t){return n1(e,t)}const bB=(e,t)=>{Array.isArray(e.__emotion_styles)&&(e.__emotion_styles=t(e.__emotion_styles))};var wB=Object.freeze(Object.defineProperty({__proto__:null,default:vP,internal_processStyles:bB,ThemeContext:qp,keyframes:ml,css:Gh,StyledEngineProvider:vB,GlobalStyles:xB},Symbol.toStringTag,{value:"Module"}));function ho(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function yP(e){if(!ho(e))return e;const t={};return Object.keys(e).forEach(n=>{t[n]=yP(e[n])}),t}function bi(e,t,n={clone:!0}){const r=n.clone?ne({},e):e;return ho(e)&&ho(t)&&Object.keys(t).forEach(i=>{ho(t[i])&&Object.prototype.hasOwnProperty.call(e,i)&&ho(e[i])?r[i]=bi(e[i],t[i],n):n.clone?r[i]=ho(t[i])?yP(t[i]):t[i]:r[i]=t[i]}),r}var _B=Object.freeze(Object.defineProperty({__proto__:null,default:bi,isPlainObject:ho},Symbol.toStringTag,{value:"Module"}));const SB=["values","unit","step"],kB=e=>{const t=Object.keys(e).map(n=>({key:n,val:e[n]}))||[];return t.sort((n,r)=>n.val-r.val),t.reduce((n,r)=>ne({},n,{[r.key]:r.val}),{})};function xP(e){const{values:t={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:n="px",step:r=5}=e,i=An(e,SB),o=kB(t),s=Object.keys(o);function l(m){return`@media (min-width:${typeof t[m]=="number"?t[m]:m}${n})`}function c(m){return`@media (max-width:${(typeof t[m]=="number"?t[m]:m)-r/100}${n})`}function d(m,x){const w=s.indexOf(x);return`@media (min-width:${typeof t[m]=="number"?t[m]:m}${n}) and (max-width:${(w!==-1&&typeof t[s[w]]=="number"?t[s[w]]:x)-r/100}${n})`}function f(m){return s.indexOf(m)+1<s.length?d(m,s[s.indexOf(m)+1]):l(m)}function g(m){const x=s.indexOf(m);return x===0?l(s[1]):x===s.length-1?c(s[x]):d(m,s[s.indexOf(m)+1]).replace("@media","@media not all and")}return ne({keys:s,values:o,up:l,down:c,between:d,only:f,not:g,unit:n},i)}const CB={borderRadius:4};var PB=CB;function jc(e,t){return t?bi(e,t,{clone:!1}):e}const lx={xs:0,sm:600,md:900,lg:1200,xl:1536},jS={keys:["xs","sm","md","lg","xl"],up:e=>`@media (min-width:${lx[e]}px)`};function Lr(e,t,n){const r=e.theme||{};if(Array.isArray(t)){const o=r.breakpoints||jS;return t.reduce((s,l,c)=>(s[o.up(o.keys[c])]=n(t[c]),s),{})}if(typeof t=="object"){const o=r.breakpoints||jS;return Object.keys(t).reduce((s,l)=>{if(Object.keys(o.values||lx).indexOf(l)!==-1){const c=o.up(l);s[c]=n(t[l],l)}else{const c=l;s[c]=t[c]}return s},{})}return n(t)}function EB(e={}){var t;return((t=e.keys)==null?void 0:t.reduce((r,i)=>{const o=e.up(i);return r[o]={},r},{}))||{}}function MB(e,t){return e.reduce((n,r)=>{const i=n[r];return(!i||Object.keys(i).length===0)&&delete n[r],n},t)}function OB(e,t){if(typeof e!="object")return{};const n={},r=Object.keys(t);return Array.isArray(e)?r.forEach((i,o)=>{o<e.length&&(n[i]=!0)}):r.forEach(i=>{e[i]!=null&&(n[i]=!0)}),n}function Zp({values:e,breakpoints:t,base:n}){const r=n||OB(e,t),i=Object.keys(r);if(i.length===0)return e;let o;return i.reduce((s,l,c)=>(Array.isArray(e)?(s[l]=e[c]!=null?e[c]:e[o],o=c):typeof e=="object"?(s[l]=e[l]!=null?e[l]:e[o],o=l):s[l]=e,s),{})}function $t(e){if(typeof e!="string")throw new Error(Ls(7));return e.charAt(0).toUpperCase()+e.slice(1)}var RB=Object.freeze(Object.defineProperty({__proto__:null,default:$t},Symbol.toStringTag,{value:"Module"}));function Qp(e,t,n=!0){if(!t||typeof t!="string")return null;if(e&&e.vars&&n){const r=`vars.${t}`.split(".").reduce((i,o)=>i&&i[o]?i[o]:null,e);if(r!=null)return r}return t.split(".").reduce((r,i)=>r&&r[i]!=null?r[i]:null,e)}function qh(e,t,n,r=n){let i;return typeof e=="function"?i=e(n):Array.isArray(e)?i=e[n]||r:i=Qp(e,n)||r,t&&(i=t(i,r,e)),i}function Ut(e){const{prop:t,cssProperty:n=e.prop,themeKey:r,transform:i}=e,o=s=>{if(s[t]==null)return null;const l=s[t],c=s.theme,d=Qp(c,r)||{};return Lr(s,l,g=>{let m=qh(d,i,g);return g===m&&typeof g=="string"&&(m=qh(d,i,`${t}${g==="default"?"":$t(g)}`,g)),n===!1?m:{[n]:m}})};return o.propTypes={},o.filterProps=[t],o}function TB(e){const t={};return n=>(t[n]===void 0&&(t[n]=e(n)),t[n])}const AB={m:"margin",p:"padding"},NB={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},WS={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},LB=TB(e=>{if(e.length>2)if(WS[e])e=WS[e];else return[e];const[t,n]=e.split(""),r=AB[t],i=NB[n]||"";return Array.isArray(i)?i.map(o=>r+o):[r+i]}),cx=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],ux=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"];[...cx,...ux];function qu(e,t,n,r){var i;const o=(i=Qp(e,t,!1))!=null?i:n;return typeof o=="number"?s=>typeof s=="string"?s:o*s:Array.isArray(o)?s=>typeof s=="string"?s:o[s]:typeof o=="function"?o:()=>{}}function bP(e){return qu(e,"spacing",8)}function Zu(e,t){if(typeof t=="string"||t==null)return t;const n=Math.abs(t),r=e(n);return t>=0?r:typeof r=="number"?-r:`-${r}`}function $B(e,t){return n=>e.reduce((r,i)=>(r[i]=Zu(t,n),r),{})}function IB(e,t,n,r){if(t.indexOf(n)===-1)return null;const i=LB(n),o=$B(i,r),s=e[n];return Lr(e,s,o)}function wP(e,t){const n=bP(e.theme);return Object.keys(e).map(r=>IB(e,t,r,n)).reduce(jc,{})}function Tt(e){return wP(e,cx)}Tt.propTypes={};Tt.filterProps=cx;function At(e){return wP(e,ux)}At.propTypes={};At.filterProps=ux;function DB(e=8){if(e.mui)return e;const t=bP({spacing:e}),n=(...r)=>(r.length===0?[1]:r).map(o=>{const s=t(o);return typeof s=="number"?`${s}px`:s}).join(" ");return n.mui=!0,n}function Jp(...e){const t=e.reduce((r,i)=>(i.filterProps.forEach(o=>{r[o]=i}),r),{}),n=r=>Object.keys(r).reduce((i,o)=>t[o]?jc(i,t[o](r)):i,{});return n.propTypes={},n.filterProps=e.reduce((r,i)=>r.concat(i.filterProps),[]),n}function Er(e){return typeof e!="number"?e:`${e}px solid`}function Dr(e,t){return Ut({prop:e,themeKey:"borders",transform:t})}const zB=Dr("border",Er),FB=Dr("borderTop",Er),BB=Dr("borderRight",Er),jB=Dr("borderBottom",Er),WB=Dr("borderLeft",Er),HB=Dr("borderColor"),VB=Dr("borderTopColor"),UB=Dr("borderRightColor"),YB=Dr("borderBottomColor"),KB=Dr("borderLeftColor"),XB=Dr("outline",Er),GB=Dr("outlineColor"),eg=e=>{if(e.borderRadius!==void 0&&e.borderRadius!==null){const t=qu(e.theme,"shape.borderRadius",4),n=r=>({borderRadius:Zu(t,r)});return Lr(e,e.borderRadius,n)}return null};eg.propTypes={};eg.filterProps=["borderRadius"];Jp(zB,FB,BB,jB,WB,HB,VB,UB,YB,KB,eg,XB,GB);const tg=e=>{if(e.gap!==void 0&&e.gap!==null){const t=qu(e.theme,"spacing",8),n=r=>({gap:Zu(t,r)});return Lr(e,e.gap,n)}return null};tg.propTypes={};tg.filterProps=["gap"];const ng=e=>{if(e.columnGap!==void 0&&e.columnGap!==null){const t=qu(e.theme,"spacing",8),n=r=>({columnGap:Zu(t,r)});return Lr(e,e.columnGap,n)}return null};ng.propTypes={};ng.filterProps=["columnGap"];const rg=e=>{if(e.rowGap!==void 0&&e.rowGap!==null){const t=qu(e.theme,"spacing",8),n=r=>({rowGap:Zu(t,r)});return Lr(e,e.rowGap,n)}return null};rg.propTypes={};rg.filterProps=["rowGap"];const qB=Ut({prop:"gridColumn"}),ZB=Ut({prop:"gridRow"}),QB=Ut({prop:"gridAutoFlow"}),JB=Ut({prop:"gridAutoColumns"}),ej=Ut({prop:"gridAutoRows"}),tj=Ut({prop:"gridTemplateColumns"}),nj=Ut({prop:"gridTemplateRows"}),rj=Ut({prop:"gridTemplateAreas"}),ij=Ut({prop:"gridArea"});Jp(tg,ng,rg,qB,ZB,QB,JB,ej,tj,nj,rj,ij);function Ha(e,t){return t==="grey"?t:e}const oj=Ut({prop:"color",themeKey:"palette",transform:Ha}),sj=Ut({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette",transform:Ha}),aj=Ut({prop:"backgroundColor",themeKey:"palette",transform:Ha});Jp(oj,sj,aj);function cr(e){return e<=1&&e!==0?`${e*100}%`:e}const lj=Ut({prop:"width",transform:cr}),dx=e=>{if(e.maxWidth!==void 0&&e.maxWidth!==null){const t=n=>{var r,i;const o=((r=e.theme)==null||(r=r.breakpoints)==null||(r=r.values)==null?void 0:r[n])||lx[n];return o?((i=e.theme)==null||(i=i.breakpoints)==null?void 0:i.unit)!=="px"?{maxWidth:`${o}${e.theme.breakpoints.unit}`}:{maxWidth:o}:{maxWidth:cr(n)}};return Lr(e,e.maxWidth,t)}return null};dx.filterProps=["maxWidth"];const cj=Ut({prop:"minWidth",transform:cr}),uj=Ut({prop:"height",transform:cr}),dj=Ut({prop:"maxHeight",transform:cr}),fj=Ut({prop:"minHeight",transform:cr});Ut({prop:"size",cssProperty:"width",transform:cr});Ut({prop:"size",cssProperty:"height",transform:cr});const hj=Ut({prop:"boxSizing"});Jp(lj,dx,cj,uj,dj,fj,hj);const pj={border:{themeKey:"borders",transform:Er},borderTop:{themeKey:"borders",transform:Er},borderRight:{themeKey:"borders",transform:Er},borderBottom:{themeKey:"borders",transform:Er},borderLeft:{themeKey:"borders",transform:Er},borderColor:{themeKey:"palette"},borderTopColor:{themeKey:"palette"},borderRightColor:{themeKey:"palette"},borderBottomColor:{themeKey:"palette"},borderLeftColor:{themeKey:"palette"},outline:{themeKey:"borders",transform:Er},outlineColor:{themeKey:"palette"},borderRadius:{themeKey:"shape.borderRadius",style:eg},color:{themeKey:"palette",transform:Ha},bgcolor:{themeKey:"palette",cssProperty:"backgroundColor",transform:Ha},backgroundColor:{themeKey:"palette",transform:Ha},p:{style:At},pt:{style:At},pr:{style:At},pb:{style:At},pl:{style:At},px:{style:At},py:{style:At},padding:{style:At},paddingTop:{style:At},paddingRight:{style:At},paddingBottom:{style:At},paddingLeft:{style:At},paddingX:{style:At},paddingY:{style:At},paddingInline:{style:At},paddingInlineStart:{style:At},paddingInlineEnd:{style:At},paddingBlock:{style:At},paddingBlockStart:{style:At},paddingBlockEnd:{style:At},m:{style:Tt},mt:{style:Tt},mr:{style:Tt},mb:{style:Tt},ml:{style:Tt},mx:{style:Tt},my:{style:Tt},margin:{style:Tt},marginTop:{style:Tt},marginRight:{style:Tt},marginBottom:{style:Tt},marginLeft:{style:Tt},marginX:{style:Tt},marginY:{style:Tt},marginInline:{style:Tt},marginInlineStart:{style:Tt},marginInlineEnd:{style:Tt},marginBlock:{style:Tt},marginBlockStart:{style:Tt},marginBlockEnd:{style:Tt},displayPrint:{cssProperty:!1,transform:e=>({"@media print":{display:e}})},display:{},overflow:{},textOverflow:{},visibility:{},whiteSpace:{},flexBasis:{},flexDirection:{},flexWrap:{},justifyContent:{},alignItems:{},alignContent:{},order:{},flex:{},flexGrow:{},flexShrink:{},alignSelf:{},justifyItems:{},justifySelf:{},gap:{style:tg},rowGap:{style:rg},columnGap:{style:ng},gridColumn:{},gridRow:{},gridAutoFlow:{},gridAutoColumns:{},gridAutoRows:{},gridTemplateColumns:{},gridTemplateRows:{},gridTemplateAreas:{},gridArea:{},position:{},zIndex:{themeKey:"zIndex"},top:{},right:{},bottom:{},left:{},boxShadow:{themeKey:"shadows"},width:{transform:cr},maxWidth:{style:dx},minWidth:{transform:cr},height:{transform:cr},maxHeight:{transform:cr},minHeight:{transform:cr},boxSizing:{},fontFamily:{themeKey:"typography"},fontSize:{themeKey:"typography"},fontStyle:{themeKey:"typography"},fontWeight:{themeKey:"typography"},letterSpacing:{},textTransform:{},lineHeight:{},textAlign:{},typography:{cssProperty:!1,themeKey:"typography"}};var Qu=pj;function gj(...e){const t=e.reduce((r,i)=>r.concat(Object.keys(i)),[]),n=new Set(t);return e.every(r=>n.size===Object.keys(r).length)}function mj(e,t){return typeof e=="function"?e(t):e}function _P(){function e(n,r,i,o){const s={[n]:r,theme:i},l=o[n];if(!l)return{[n]:r};const{cssProperty:c=n,themeKey:d,transform:f,style:g}=l;if(r==null)return null;if(d==="typography"&&r==="inherit")return{[n]:r};const m=Qp(i,d)||{};return g?g(s):Lr(s,r,w=>{let _=qh(m,f,w);return w===_&&typeof w=="string"&&(_=qh(m,f,`${n}${w==="default"?"":$t(w)}`,w)),c===!1?_:{[c]:_}})}function t(n){var r;const{sx:i,theme:o={}}=n||{};if(!i)return null;const s=(r=o.unstable_sxConfig)!=null?r:Qu;function l(c){let d=c;if(typeof c=="function")d=c(o);else if(typeof c!="object")return c;if(!d)return null;const f=EB(o.breakpoints),g=Object.keys(f);let m=f;return Object.keys(d).forEach(x=>{const w=mj(d[x],o);if(w!=null)if(typeof w=="object")if(s[x])m=jc(m,e(x,w,o,s));else{const _=Lr({theme:o},w,v=>({[x]:v}));gj(_,w)?m[x]=t({sx:w,theme:o}):m=jc(m,_)}else m=jc(m,e(x,w,o,s))}),MB(g,m)}return Array.isArray(i)?i.map(l):l(i)}return t}const SP=_P();SP.filterProps=["sx"];var ig=SP;function kP(e,t){const n=this;return n.vars&&typeof n.getColorSchemeSelector=="function"?{[n.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/,"*:where($1)")]:t}:n.palette.mode===e?t:{}}const vj=["breakpoints","palette","spacing","shape"];function fx(e={},...t){const{breakpoints:n={},palette:r={},spacing:i,shape:o={}}=e,s=An(e,vj),l=xP(n),c=DB(i);let d=bi({breakpoints:l,direction:"ltr",components:{},palette:ne({mode:"light"},r),spacing:c,shape:ne({},PB,o)},s);return d.applyStyles=kP,d=t.reduce((f,g)=>bi(f,g),d),d.unstable_sxConfig=ne({},Qu,s==null?void 0:s.unstable_sxConfig),d.unstable_sx=function(g){return ig({sx:g,theme:this})},d}var yj=Object.freeze(Object.defineProperty({__proto__:null,default:fx,private_createBreakpoints:xP,unstable_applyStyles:kP},Symbol.toStringTag,{value:"Module"}));function xj(e){return Object.keys(e).length===0}function bj(e=null){const t=R.exports.useContext(qp);return!t||xj(t)?e:t}const wj=fx();function CP(e=wj){return bj(e)}const _j=["sx"],Sj=e=>{var t,n;const r={systemProps:{},otherProps:{}},i=(t=e==null||(n=e.theme)==null?void 0:n.unstable_sxConfig)!=null?t:Qu;return Object.keys(e).forEach(o=>{i[o]?r.systemProps[o]=e[o]:r.otherProps[o]=e[o]}),r};function hx(e){const{sx:t}=e,n=An(e,_j),{systemProps:r,otherProps:i}=Sj(n);let o;return Array.isArray(t)?o=[r,...t]:typeof t=="function"?o=(...s)=>{const l=t(...s);return ho(l)?ne({},r,l):r}:o=ne({},r,t),ne({},i,{sx:o})}var kj=Object.freeze(Object.defineProperty({__proto__:null,default:ig,unstable_createStyleFunctionSx:_P,extendSxProp:hx,unstable_defaultSxConfig:Qu},Symbol.toStringTag,{value:"Module"}));const HS=e=>e,Cj=()=>{let e=HS;return{configure(t){e=t},generate(t){return e(t)},reset(){e=HS}}},Pj=Cj();var PP=Pj;function EP(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=EP(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function Ej(){for(var e,t,n=0,r="",i=arguments.length;n<i;n++)(e=arguments[n])&&(t=EP(e))&&(r&&(r+=" "),r+=t);return r}const Mj=["className","component"];function Oj(e={}){const{themeId:t,defaultTheme:n,defaultClassName:r="MuiBox-root",generateClassName:i}=e,o=vP("div",{shouldForwardProp:l=>l!=="theme"&&l!=="sx"&&l!=="as"})(ig);return R.exports.forwardRef(function(c,d){const f=CP(n),g=hx(c),{className:m,component:x="div"}=g,w=An(g,Mj);return p(o,ne({as:x,ref:d,className:Ej(m,i?i(r):r),theme:t&&f[t]||f},w))})}const Rj={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",open:"open",readOnly:"readOnly",required:"required",selected:"selected"};function vl(e,t,n="Mui"){const r=Rj[t];return r?`${n}-${r}`:`${PP.generate(e)}-${t}`}function Hs(e,t,n="Mui"){const r={};return t.forEach(i=>{r[i]=vl(e,i,n)}),r}var i1={exports:{}},lt={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var px=Symbol.for("react.element"),gx=Symbol.for("react.portal"),og=Symbol.for("react.fragment"),sg=Symbol.for("react.strict_mode"),ag=Symbol.for("react.profiler"),lg=Symbol.for("react.provider"),cg=Symbol.for("react.context"),Tj=Symbol.for("react.server_context"),ug=Symbol.for("react.forward_ref"),dg=Symbol.for("react.suspense"),fg=Symbol.for("react.suspense_list"),hg=Symbol.for("react.memo"),pg=Symbol.for("react.lazy"),Aj=Symbol.for("react.offscreen"),MP;MP=Symbol.for("react.module.reference");function zr(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case px:switch(e=e.type,e){case og:case ag:case sg:case dg:case fg:return e;default:switch(e=e&&e.$$typeof,e){case Tj:case cg:case ug:case pg:case hg:case lg:return e;default:return t}}case gx:return t}}}lt.ContextConsumer=cg;lt.ContextProvider=lg;lt.Element=px;lt.ForwardRef=ug;lt.Fragment=og;lt.Lazy=pg;lt.Memo=hg;lt.Portal=gx;lt.Profiler=ag;lt.StrictMode=sg;lt.Suspense=dg;lt.SuspenseList=fg;lt.isAsyncMode=function(){return!1};lt.isConcurrentMode=function(){return!1};lt.isContextConsumer=function(e){return zr(e)===cg};lt.isContextProvider=function(e){return zr(e)===lg};lt.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===px};lt.isForwardRef=function(e){return zr(e)===ug};lt.isFragment=function(e){return zr(e)===og};lt.isLazy=function(e){return zr(e)===pg};lt.isMemo=function(e){return zr(e)===hg};lt.isPortal=function(e){return zr(e)===gx};lt.isProfiler=function(e){return zr(e)===ag};lt.isStrictMode=function(e){return zr(e)===sg};lt.isSuspense=function(e){return zr(e)===dg};lt.isSuspenseList=function(e){return zr(e)===fg};lt.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===og||e===ag||e===sg||e===dg||e===fg||e===Aj||typeof e=="object"&&e!==null&&(e.$$typeof===pg||e.$$typeof===hg||e.$$typeof===lg||e.$$typeof===cg||e.$$typeof===ug||e.$$typeof===MP||e.getModuleId!==void 0)};lt.typeOf=zr;i1.exports=lt;const Nj=/^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;function OP(e){const t=`${e}`.match(Nj);return t&&t[1]||""}function RP(e,t=""){return e.displayName||e.name||OP(e)||t}function VS(e,t,n){const r=RP(t);return e.displayName||(r!==""?`${n}(${r})`:n)}function Lj(e){if(e!=null){if(typeof e=="string")return e;if(typeof e=="function")return RP(e,"Component");if(typeof e=="object")switch(e.$$typeof){case i1.exports.ForwardRef:return VS(e,e.render,"ForwardRef");case i1.exports.Memo:return VS(e,e.type,"memo");default:return}}}var $j=Object.freeze(Object.defineProperty({__proto__:null,default:Lj,getFunctionName:OP},Symbol.toStringTag,{value:"Module"}));function Zh(e,t){const n=ne({},t);return Object.keys(e).forEach(r=>{if(r.toString().match(/^(components|slots)$/))n[r]=ne({},e[r],n[r]);else if(r.toString().match(/^(componentsProps|slotProps)$/)){const i=e[r]||{},o=t[r];n[r]={},!o||!Object.keys(o)?n[r]=i:!i||!Object.keys(i)?n[r]=o:(n[r]=ne({},o),Object.keys(i).forEach(s=>{n[r][s]=Zh(i[s],o[s])}))}else n[r]===void 0&&(n[r]=e[r])}),n}const Ij=typeof window!="undefined"?R.exports.useLayoutEffect:R.exports.useEffect;var TP=Ij;function vs(e,t=Number.MIN_SAFE_INTEGER,n=Number.MAX_SAFE_INTEGER){return Math.max(t,Math.min(e,n))}var Dj=Object.freeze(Object.defineProperty({__proto__:null,default:vs},Symbol.toStringTag,{value:"Module"}));function zj(e,t=0,n=1){return vs(e,t,n)}function Fj(e){e=e.slice(1);const t=new RegExp(`.{1,${e.length>=6?2:1}}`,"g");let n=e.match(t);return n&&n[0].length===1&&(n=n.map(r=>r+r)),n?`rgb${n.length===4?"a":""}(${n.map((r,i)=>i<3?parseInt(r,16):Math.round(parseInt(r,16)/255*1e3)/1e3).join(", ")})`:""}function AP(e){if(e.type)return e;if(e.charAt(0)==="#")return AP(Fj(e));const t=e.indexOf("("),n=e.substring(0,t);if(["rgb","rgba","hsl","hsla","color"].indexOf(n)===-1)throw new Error(Ls(9,e));let r=e.substring(t+1,e.length-1),i;if(n==="color"){if(r=r.split(" "),i=r.shift(),r.length===4&&r[3].charAt(0)==="/"&&(r[3]=r[3].slice(1)),["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(i)===-1)throw new Error(Ls(10,i))}else r=r.split(",");return r=r.map(o=>parseFloat(o)),{type:n,values:r,colorSpace:i}}function Bj(e){const{type:t,colorSpace:n}=e;let{values:r}=e;return t.indexOf("rgb")!==-1?r=r.map((i,o)=>o<3?parseInt(i,10):i):t.indexOf("hsl")!==-1&&(r[1]=`${r[1]}%`,r[2]=`${r[2]}%`),t.indexOf("color")!==-1?r=`${n} ${r.join(" ")}`:r=`${r.join(", ")}`,`${t}(${r})`}function jj(e,t){return e=AP(e),t=zj(t),(e.type==="rgb"||e.type==="hsl")&&(e.type+="a"),e.type==="color"?e.values[3]=`/${t}`:e.values[3]=t,Bj(e)}function th(e){return e&&e.ownerDocument||document}function Wj(e,t){typeof e=="function"?e(t):e&&(e.current=t)}function Hj({controlled:e,default:t,name:n,state:r="value"}){const{current:i}=R.exports.useRef(e!==void 0),[o,s]=R.exports.useState(t),l=i?e:o,c=R.exports.useCallback(d=>{i||s(d)},[]);return[l,c]}function Ss(e){const t=R.exports.useRef(e);return TP(()=>{t.current=e}),R.exports.useRef((...n)=>(0,t.current)(...n)).current}function bu(...e){return R.exports.useMemo(()=>e.every(t=>t==null)?null:t=>{e.forEach(n=>{Wj(n,t)})},e)}const US={};function Vj(e,t){const n=R.exports.useRef(US);return n.current===US&&(n.current=e(t)),n}const Uj=[];function Yj(e){R.exports.useEffect(e,Uj)}class gg{constructor(){this.currentId=null,this.clear=()=>{this.currentId!==null&&(clearTimeout(this.currentId),this.currentId=null)},this.disposeEffect=()=>this.clear}static create(){return new gg}start(t,n){this.clear(),this.currentId=setTimeout(()=>{this.currentId=null,n()},t)}}function Kj(){const e=Vj(gg.create).current;return Yj(e.disposeEffect),e}let mg=!0,o1=!1;const Xj=new gg,Gj={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function qj(e){const{type:t,tagName:n}=e;return!!(n==="INPUT"&&Gj[t]&&!e.readOnly||n==="TEXTAREA"&&!e.readOnly||e.isContentEditable)}function Zj(e){e.metaKey||e.altKey||e.ctrlKey||(mg=!0)}function M0(){mg=!1}function Qj(){this.visibilityState==="hidden"&&o1&&(mg=!0)}function Jj(e){e.addEventListener("keydown",Zj,!0),e.addEventListener("mousedown",M0,!0),e.addEventListener("pointerdown",M0,!0),e.addEventListener("touchstart",M0,!0),e.addEventListener("visibilitychange",Qj,!0)}function eW(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch{}return mg||qj(t)}function NP(){const e=R.exports.useCallback(i=>{i!=null&&Jj(i.ownerDocument)},[]),t=R.exports.useRef(!1);function n(){return t.current?(o1=!0,Xj.start(100,()=>{o1=!1}),t.current=!1,!0):!1}function r(i){return eW(i)?(t.current=!0,!0):!1}return{isFocusVisibleRef:t,onFocus:r,onBlur:n,ref:e}}const tW={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",whiteSpace:"nowrap",width:"1px"};var nW=tW;function Ju(e,t,n=void 0){const r={};return Object.keys(e).forEach(i=>{r[i]=e[i].reduce((o,s)=>{if(s){const l=t(s);l!==""&&o.push(l),n&&n[s]&&o.push(n[s])}return o},[]).join(" ")}),r}function Wc(e){return typeof e=="string"}function rW(e,t,n){return e===void 0||Wc(e)?t:ne({},t,{ownerState:ne({},t.ownerState,n)})}function LP(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=LP(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function YS(){for(var e,t,n=0,r="",i=arguments.length;n<i;n++)(e=arguments[n])&&(t=LP(e))&&(r&&(r+=" "),r+=t);return r}function nh(e,t=[]){if(e===void 0)return{};const n={};return Object.keys(e).filter(r=>r.match(/^on[A-Z]/)&&typeof e[r]=="function"&&!t.includes(r)).forEach(r=>{n[r]=e[r]}),n}function KS(e){if(e===void 0)return{};const t={};return Object.keys(e).filter(n=>!(n.match(/^on[A-Z]/)&&typeof e[n]=="function")).forEach(n=>{t[n]=e[n]}),t}function iW(e){const{getSlotProps:t,additionalProps:n,externalSlotProps:r,externalForwardedProps:i,className:o}=e;if(!t){const x=YS(n==null?void 0:n.className,o,i==null?void 0:i.className,r==null?void 0:r.className),w=ne({},n==null?void 0:n.style,i==null?void 0:i.style,r==null?void 0:r.style),_=ne({},n,i,r);return x.length>0&&(_.className=x),Object.keys(w).length>0&&(_.style=w),{props:_,internalRef:void 0}}const s=nh(ne({},i,r)),l=KS(r),c=KS(i),d=t(s),f=YS(d==null?void 0:d.className,n==null?void 0:n.className,o,i==null?void 0:i.className,r==null?void 0:r.className),g=ne({},d==null?void 0:d.style,n==null?void 0:n.style,i==null?void 0:i.style,r==null?void 0:r.style),m=ne({},d,n,c,l);return f.length>0&&(m.className=f),Object.keys(g).length>0&&(m.style=g),{props:m,internalRef:d.ref}}function oW(e,t,n){return typeof e=="function"?e(t,n):e}const sW=["elementType","externalSlotProps","ownerState","skipResolvingSlotProps"];function lo(e){var t;const{elementType:n,externalSlotProps:r,ownerState:i,skipResolvingSlotProps:o=!1}=e,s=An(e,sW),l=o?{}:oW(r,i),{props:c,internalRef:d}=iW(ne({},s,{externalSlotProps:l})),f=bu(d,l==null?void 0:l.ref,(t=e.additionalProps)==null?void 0:t.ref);return rW(n,ne({},c,{ref:f}),i)}const aW=R.exports.createContext(),lW=()=>{const e=R.exports.useContext(aW);return e!=null?e:!1},cW=R.exports.createContext(void 0);function uW(e){const{theme:t,name:n,props:r}=e;if(!t||!t.components||!t.components[n])return r;const i=t.components[n];return i.defaultProps?Zh(i.defaultProps,r):!i.styleOverrides&&!i.variants?Zh(i,r):r}function dW({props:e,name:t}){const n=R.exports.useContext(cW);return uW({props:e,name:t,theme:{components:n}})}function fW(e,t){return ne({toolbar:{minHeight:56,[e.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[e.up("sm")]:{minHeight:64}}},t)}var Yt={},mx={exports:{}};(function(e){function t(n){return n&&n.__esModule?n:{default:n}}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports})(mx);var hW=Gi(_F),pW=Gi(Dj),$P=mx.exports;Object.defineProperty(Yt,"__esModule",{value:!0});var Ea=Yt.alpha=FP;Yt.blend=CW;Yt.colorChannel=void 0;var s1=Yt.darken=yx;Yt.decomposeColor=$r;Yt.emphasize=BP;var gW=Yt.getContrastRatio=bW;Yt.getLuminance=Qh;Yt.hexToRgb=IP;Yt.hslToRgb=zP;var a1=Yt.lighten=xx;Yt.private_safeAlpha=wW;Yt.private_safeColorChannel=void 0;Yt.private_safeDarken=_W;Yt.private_safeEmphasize=kW;Yt.private_safeLighten=SW;Yt.recomposeColor=yl;Yt.rgbToHex=xW;var XS=$P(hW),mW=$P(pW);function vx(e,t=0,n=1){return(0,mW.default)(e,t,n)}function IP(e){e=e.slice(1);const t=new RegExp(`.{1,${e.length>=6?2:1}}`,"g");let n=e.match(t);return n&&n[0].length===1&&(n=n.map(r=>r+r)),n?`rgb${n.length===4?"a":""}(${n.map((r,i)=>i<3?parseInt(r,16):Math.round(parseInt(r,16)/255*1e3)/1e3).join(", ")})`:""}function vW(e){const t=e.toString(16);return t.length===1?`0${t}`:t}function $r(e){if(e.type)return e;if(e.charAt(0)==="#")return $r(IP(e));const t=e.indexOf("("),n=e.substring(0,t);if(["rgb","rgba","hsl","hsla","color"].indexOf(n)===-1)throw new Error((0,XS.default)(9,e));let r=e.substring(t+1,e.length-1),i;if(n==="color"){if(r=r.split(" "),i=r.shift(),r.length===4&&r[3].charAt(0)==="/"&&(r[3]=r[3].slice(1)),["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(i)===-1)throw new Error((0,XS.default)(10,i))}else r=r.split(",");return r=r.map(o=>parseFloat(o)),{type:n,values:r,colorSpace:i}}const DP=e=>{const t=$r(e);return t.values.slice(0,3).map((n,r)=>t.type.indexOf("hsl")!==-1&&r!==0?`${n}%`:n).join(" ")};Yt.colorChannel=DP;const yW=(e,t)=>{try{return DP(e)}catch{return e}};Yt.private_safeColorChannel=yW;function yl(e){const{type:t,colorSpace:n}=e;let{values:r}=e;return t.indexOf("rgb")!==-1?r=r.map((i,o)=>o<3?parseInt(i,10):i):t.indexOf("hsl")!==-1&&(r[1]=`${r[1]}%`,r[2]=`${r[2]}%`),t.indexOf("color")!==-1?r=`${n} ${r.join(" ")}`:r=`${r.join(", ")}`,`${t}(${r})`}function xW(e){if(e.indexOf("#")===0)return e;const{values:t}=$r(e);return`#${t.map((n,r)=>vW(r===3?Math.round(255*n):n)).join("")}`}function zP(e){e=$r(e);const{values:t}=e,n=t[0],r=t[1]/100,i=t[2]/100,o=r*Math.min(i,1-i),s=(d,f=(d+n/30)%12)=>i-o*Math.max(Math.min(f-3,9-f,1),-1);let l="rgb";const c=[Math.round(s(0)*255),Math.round(s(8)*255),Math.round(s(4)*255)];return e.type==="hsla"&&(l+="a",c.push(t[3])),yl({type:l,values:c})}function Qh(e){e=$r(e);let t=e.type==="hsl"||e.type==="hsla"?$r(zP(e)).values:e.values;return t=t.map(n=>(e.type!=="color"&&(n/=255),n<=.03928?n/12.92:((n+.055)/1.055)**2.4)),Number((.2126*t[0]+.7152*t[1]+.0722*t[2]).toFixed(3))}function bW(e,t){const n=Qh(e),r=Qh(t);return(Math.max(n,r)+.05)/(Math.min(n,r)+.05)}function FP(e,t){return e=$r(e),t=vx(t),(e.type==="rgb"||e.type==="hsl")&&(e.type+="a"),e.type==="color"?e.values[3]=`/${t}`:e.values[3]=t,yl(e)}function wW(e,t,n){try{return FP(e,t)}catch{return e}}function yx(e,t){if(e=$r(e),t=vx(t),e.type.indexOf("hsl")!==-1)e.values[2]*=1-t;else if(e.type.indexOf("rgb")!==-1||e.type.indexOf("color")!==-1)for(let n=0;n<3;n+=1)e.values[n]*=1-t;return yl(e)}function _W(e,t,n){try{return yx(e,t)}catch{return e}}function xx(e,t){if(e=$r(e),t=vx(t),e.type.indexOf("hsl")!==-1)e.values[2]+=(100-e.values[2])*t;else if(e.type.indexOf("rgb")!==-1)for(let n=0;n<3;n+=1)e.values[n]+=(255-e.values[n])*t;else if(e.type.indexOf("color")!==-1)for(let n=0;n<3;n+=1)e.values[n]+=(1-e.values[n])*t;return yl(e)}function SW(e,t,n){try{return xx(e,t)}catch{return e}}function BP(e,t=.15){return Qh(e)>.5?yx(e,t):xx(e,t)}function kW(e,t,n){try{return BP(e,t)}catch{return e}}function CW(e,t,n,r=1){const i=(c,d)=>Math.round((c**(1/r)*(1-n)+d**(1/r)*n)**r),o=$r(e),s=$r(t),l=[i(o.values[0],s.values[0]),i(o.values[1],s.values[1]),i(o.values[2],s.values[2])];return yl({type:"rgb",values:l})}const PW=["mode","contrastThreshold","tonalOffset"],GS={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:mu.white,default:mu.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}},O0={text:{primary:mu.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:mu.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}};function qS(e,t,n,r){const i=r.light||r,o=r.dark||r*1.5;e[t]||(e.hasOwnProperty(n)?e[t]=e[n]:t==="light"?e.light=a1(e.main,i):t==="dark"&&(e.dark=s1(e.main,o)))}function EW(e="light"){return e==="dark"?{main:fa[200],light:fa[50],dark:fa[400]}:{main:fa[700],light:fa[400],dark:fa[800]}}function MW(e="light"){return e==="dark"?{main:da[200],light:da[50],dark:da[400]}:{main:da[500],light:da[300],dark:da[700]}}function OW(e="light"){return e==="dark"?{main:ua[500],light:ua[300],dark:ua[700]}:{main:ua[700],light:ua[400],dark:ua[800]}}function RW(e="light"){return e==="dark"?{main:ha[400],light:ha[300],dark:ha[700]}:{main:ha[700],light:ha[500],dark:ha[900]}}function TW(e="light"){return e==="dark"?{main:pa[400],light:pa[300],dark:pa[700]}:{main:pa[800],light:pa[500],dark:pa[900]}}function AW(e="light"){return e==="dark"?{main:sc[400],light:sc[300],dark:sc[700]}:{main:"#ed6c02",light:sc[500],dark:sc[900]}}function NW(e){const{mode:t="light",contrastThreshold:n=3,tonalOffset:r=.2}=e,i=An(e,PW),o=e.primary||EW(t),s=e.secondary||MW(t),l=e.error||OW(t),c=e.info||RW(t),d=e.success||TW(t),f=e.warning||AW(t);function g(_){return gW(_,O0.text.primary)>=n?O0.text.primary:GS.text.primary}const m=({color:_,name:v,mainShade:b=500,lightShade:S=300,darkShade:C=700})=>{if(_=ne({},_),!_.main&&_[b]&&(_.main=_[b]),!_.hasOwnProperty("main"))throw new Error(Ls(11,v?` (${v})`:"",b));if(typeof _.main!="string")throw new Error(Ls(12,v?` (${v})`:"",JSON.stringify(_.main)));return qS(_,"light",S,r),qS(_,"dark",C,r),_.contrastText||(_.contrastText=g(_.main)),_},x={dark:O0,light:GS};return bi(ne({common:ne({},mu),mode:t,primary:m({color:o,name:"primary"}),secondary:m({color:s,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:m({color:l,name:"error"}),warning:m({color:f,name:"warning"}),info:m({color:c,name:"info"}),success:m({color:d,name:"success"}),grey:wF,contrastThreshold:n,getContrastText:g,augmentColor:m,tonalOffset:r},x[t]),i)}const LW=["fontFamily","fontSize","fontWeightLight","fontWeightRegular","fontWeightMedium","fontWeightBold","htmlFontSize","allVariants","pxToRem"];function $W(e){return Math.round(e*1e5)/1e5}const ZS={textTransform:"uppercase"},QS='"Roboto", "Helvetica", "Arial", sans-serif';function IW(e,t){const n=typeof t=="function"?t(e):t,{fontFamily:r=QS,fontSize:i=14,fontWeightLight:o=300,fontWeightRegular:s=400,fontWeightMedium:l=500,fontWeightBold:c=700,htmlFontSize:d=16,allVariants:f,pxToRem:g}=n,m=An(n,LW),x=i/14,w=g||(b=>`${b/d*x}rem`),_=(b,S,C,E,T)=>ne({fontFamily:r,fontWeight:b,fontSize:w(S),lineHeight:C},r===QS?{letterSpacing:`${$W(E/S)}em`}:{},T,f),v={h1:_(o,96,1.167,-1.5),h2:_(o,60,1.2,-.5),h3:_(s,48,1.167,0),h4:_(s,34,1.235,.25),h5:_(s,24,1.334,0),h6:_(l,20,1.6,.15),subtitle1:_(s,16,1.75,.15),subtitle2:_(l,14,1.57,.1),body1:_(s,16,1.5,.15),body2:_(s,14,1.43,.15),button:_(l,14,1.75,.4,ZS),caption:_(s,12,1.66,.4),overline:_(s,12,2.66,1,ZS),inherit:{fontFamily:"inherit",fontWeight:"inherit",fontSize:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}};return bi(ne({htmlFontSize:d,pxToRem:w,fontFamily:r,fontSize:i,fontWeightLight:o,fontWeightRegular:s,fontWeightMedium:l,fontWeightBold:c},v),m,{clone:!1})}const DW=.2,zW=.14,FW=.12;function kt(...e){return[`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${DW})`,`${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${zW})`,`${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${FW})`].join(",")}const BW=["none",kt(0,2,1,-1,0,1,1,0,0,1,3,0),kt(0,3,1,-2,0,2,2,0,0,1,5,0),kt(0,3,3,-2,0,3,4,0,0,1,8,0),kt(0,2,4,-1,0,4,5,0,0,1,10,0),kt(0,3,5,-1,0,5,8,0,0,1,14,0),kt(0,3,5,-1,0,6,10,0,0,1,18,0),kt(0,4,5,-2,0,7,10,1,0,2,16,1),kt(0,5,5,-3,0,8,10,1,0,3,14,2),kt(0,5,6,-3,0,9,12,1,0,3,16,2),kt(0,6,6,-3,0,10,14,1,0,4,18,3),kt(0,6,7,-4,0,11,15,1,0,4,20,3),kt(0,7,8,-4,0,12,17,2,0,5,22,4),kt(0,7,8,-4,0,13,19,2,0,5,24,4),kt(0,7,9,-4,0,14,21,2,0,5,26,4),kt(0,8,9,-5,0,15,22,2,0,6,28,5),kt(0,8,10,-5,0,16,24,2,0,6,30,5),kt(0,8,11,-5,0,17,26,2,0,6,32,5),kt(0,9,11,-5,0,18,28,2,0,7,34,6),kt(0,9,12,-6,0,19,29,2,0,7,36,6),kt(0,10,13,-6,0,20,31,3,0,8,38,7),kt(0,10,13,-6,0,21,33,3,0,8,40,7),kt(0,10,14,-6,0,22,35,3,0,8,42,7),kt(0,11,14,-7,0,23,36,3,0,9,44,8),kt(0,11,15,-7,0,24,38,3,0,9,46,8)];var jW=BW;const WW=["duration","easing","delay"],HW={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},VW={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function JS(e){return`${Math.round(e)}ms`}function UW(e){if(!e)return 0;const t=e/36;return Math.round((4+15*t**.25+t/5)*10)}function YW(e){const t=ne({},HW,e.easing),n=ne({},VW,e.duration);return ne({getAutoHeightDuration:UW,create:(i=["all"],o={})=>{const{duration:s=n.standard,easing:l=t.easeInOut,delay:c=0}=o;return An(o,WW),(Array.isArray(i)?i:[i]).map(d=>`${d} ${typeof s=="string"?s:JS(s)} ${l} ${typeof c=="string"?c:JS(c)}`).join(",")}},e,{easing:t,duration:n})}const KW={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500};var XW=KW;const GW=["breakpoints","mixins","spacing","palette","transitions","typography","shape"];function jP(e={},...t){const{mixins:n={},palette:r={},transitions:i={},typography:o={}}=e,s=An(e,GW);if(e.vars)throw new Error(Ls(18));const l=NW(r),c=fx(e);let d=bi(c,{mixins:fW(c.breakpoints,n),palette:l,shadows:jW.slice(),typography:IW(l,o),transitions:YW(i),zIndex:ne({},XW)});return d=bi(d,s),d=t.reduce((f,g)=>bi(f,g),d),d.unstable_sxConfig=ne({},Qu,s==null?void 0:s.unstable_sxConfig),d.unstable_sx=function(g){return ig({sx:g,theme:this})},d}function qW(e){return String(e).match(/[\d.\-+]*\s*(.*)/)[1]||""}function ZW(e){return parseFloat(e)}const QW=jP();var WP=QW;function JW(){const e=CP(WP);return e[nx]||e}var ed={},bx={exports:{}};(function(e){function t(n,r){if(n==null)return{};var i={};for(var o in n)if({}.hasOwnProperty.call(n,o)){if(r.includes(o))continue;i[o]=n[o]}return i}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports})(bx);var eH=Gi(wB),tH=Gi(_B),nH=Gi(RB),rH=Gi($j),iH=Gi(yj),oH=Gi(kj),xl=mx.exports;Object.defineProperty(ed,"__esModule",{value:!0});var sH=ed.default=xH;ed.shouldForwardProp=rh;ed.systemDefaultTheme=void 0;var Cr=xl(ax.exports),l1=xl(bx.exports),ek=hH(eH),aH=tH;xl(nH);xl(rH);var lH=xl(iH),cH=xl(oH);const uH=["ownerState"],dH=["variants"],fH=["name","slot","skipVariantsResolver","skipSx","overridesResolver"];function HP(e){if(typeof WeakMap!="function")return null;var t=new WeakMap,n=new WeakMap;return(HP=function(r){return r?n:t})(e)}function hH(e,t){if(!t&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var n=HP(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(o!=="default"&&Object.prototype.hasOwnProperty.call(e,o)){var s=i?Object.getOwnPropertyDescriptor(e,o):null;s&&(s.get||s.set)?Object.defineProperty(r,o,s):r[o]=e[o]}return r.default=e,n&&n.set(e,r),r}function pH(e){return Object.keys(e).length===0}function gH(e){return typeof e=="string"&&e.charCodeAt(0)>96}function rh(e){return e!=="ownerState"&&e!=="theme"&&e!=="sx"&&e!=="as"}const mH=ed.systemDefaultTheme=(0,lH.default)(),vH=e=>e&&e.charAt(0).toLowerCase()+e.slice(1);function yf({defaultTheme:e,theme:t,themeId:n}){return pH(t)?e:t[n]||t}function yH(e){return e?(t,n)=>n[e]:null}function ih(e,t){let{ownerState:n}=t,r=(0,l1.default)(t,uH);const i=typeof e=="function"?e((0,Cr.default)({ownerState:n},r)):e;if(Array.isArray(i))return i.flatMap(o=>ih(o,(0,Cr.default)({ownerState:n},r)));if(!!i&&typeof i=="object"&&Array.isArray(i.variants)){const{variants:o=[]}=i;let l=(0,l1.default)(i,dH);return o.forEach(c=>{let d=!0;typeof c.props=="function"?d=c.props((0,Cr.default)({ownerState:n},r,n)):Object.keys(c.props).forEach(f=>{(n==null?void 0:n[f])!==c.props[f]&&r[f]!==c.props[f]&&(d=!1)}),d&&(Array.isArray(l)||(l=[l]),l.push(typeof c.style=="function"?c.style((0,Cr.default)({ownerState:n},r,n)):c.style))}),l}return i}function xH(e={}){const{themeId:t,defaultTheme:n=mH,rootShouldForwardProp:r=rh,slotShouldForwardProp:i=rh}=e,o=s=>(0,cH.default)((0,Cr.default)({},s,{theme:yf((0,Cr.default)({},s,{defaultTheme:n,themeId:t}))}));return o.__mui_systemSx=!0,(s,l={})=>{(0,ek.internal_processStyles)(s,T=>T.filter(N=>!(N!=null&&N.__mui_systemSx)));const{name:c,slot:d,skipVariantsResolver:f,skipSx:g,overridesResolver:m=yH(vH(d))}=l,x=(0,l1.default)(l,fH),w=f!==void 0?f:d&&d!=="Root"&&d!=="root"||!1,_=g||!1;let v,b=rh;d==="Root"||d==="root"?b=r:d?b=i:gH(s)&&(b=void 0);const S=(0,ek.default)(s,(0,Cr.default)({shouldForwardProp:b,label:v},x)),C=T=>typeof T=="function"&&T.__emotion_real!==T||(0,aH.isPlainObject)(T)?N=>ih(T,(0,Cr.default)({},N,{theme:yf({theme:N.theme,defaultTheme:n,themeId:t})})):T,E=(T,...N)=>{let L=C(T);const z=N?N.map(C):[];c&&m&&z.push(Q=>{const te=yf((0,Cr.default)({},Q,{defaultTheme:n,themeId:t}));if(!te.components||!te.components[c]||!te.components[c].styleOverrides)return null;const ae=te.components[c].styleOverrides,ye={};return Object.entries(ae).forEach(([oe,ge])=>{ye[oe]=ih(ge,(0,Cr.default)({},Q,{theme:te}))}),m(Q,ye)}),c&&!w&&z.push(Q=>{var te;const ae=yf((0,Cr.default)({},Q,{defaultTheme:n,themeId:t})),ye=ae==null||(te=ae.components)==null||(te=te[c])==null?void 0:te.variants;return ih({variants:ye},(0,Cr.default)({},Q,{theme:ae}))}),_||z.push(o);const B=z.length-N.length;if(Array.isArray(T)&&B>0){const Q=new Array(B).fill("");L=[...T,...Q],L.raw=[...T.raw,...Q]}const H=S(L,...z);return s.muiName&&(H.muiName=s.muiName),H};return S.withConfig&&(E.withConfig=S.withConfig),E}}function wx(e){return e!=="ownerState"&&e!=="theme"&&e!=="sx"&&e!=="as"}const bH=e=>wx(e)&&e!=="classes";var VP=bH;const wH=sH({themeId:nx,defaultTheme:WP,rootShouldForwardProp:VP});var Nn=wH;function UP(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=UP(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function Xt(){for(var e,t,n=0,r="",i=arguments.length;n<i;n++)(e=arguments[n])&&(t=UP(e))&&(r&&(r+=" "),r+=t);return r}function bl(e){return dW(e)}function c1(e,t){return c1=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,r){return n.__proto__=r,n},c1(e,t)}function _H(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,c1(e,t)}var tk=jt.createContext(null);function SH(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _x(e,t){var n=function(o){return t&&R.exports.isValidElement(o)?t(o):o},r=Object.create(null);return e&&R.exports.Children.map(e,function(i){return i}).forEach(function(i){r[i.key]=n(i)}),r}function kH(e,t){e=e||{},t=t||{};function n(f){return f in t?t[f]:e[f]}var r=Object.create(null),i=[];for(var o in e)o in t?i.length&&(r[o]=i,i=[]):i.push(o);var s,l={};for(var c in t){if(r[c])for(s=0;s<r[c].length;s++){var d=r[c][s];l[r[c][s]]=n(d)}l[c]=n(c)}for(s=0;s<i.length;s++)l[i[s]]=n(i[s]);return l}function ks(e,t,n){return n[t]!=null?n[t]:e.props[t]}function CH(e,t){return _x(e.children,function(n){return R.exports.cloneElement(n,{onExited:t.bind(null,n),in:!0,appear:ks(n,"appear",e),enter:ks(n,"enter",e),exit:ks(n,"exit",e)})})}function PH(e,t,n){var r=_x(e.children),i=kH(t,r);return Object.keys(i).forEach(function(o){var s=i[o];if(!!R.exports.isValidElement(s)){var l=o in t,c=o in r,d=t[o],f=R.exports.isValidElement(d)&&!d.props.in;c&&(!l||f)?i[o]=R.exports.cloneElement(s,{onExited:n.bind(null,s),in:!0,exit:ks(s,"exit",e),enter:ks(s,"enter",e)}):!c&&l&&!f?i[o]=R.exports.cloneElement(s,{in:!1}):c&&l&&R.exports.isValidElement(d)&&(i[o]=R.exports.cloneElement(s,{onExited:n.bind(null,s),in:d.props.in,exit:ks(s,"exit",e),enter:ks(s,"enter",e)}))}}),i}var EH=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},MH={component:"div",childFactory:function(t){return t}},Sx=function(e){_H(t,e);function t(r,i){var o;o=e.call(this,r,i)||this;var s=o.handleExited.bind(SH(o));return o.state={contextValue:{isMounting:!0},handleExited:s,firstRender:!0},o}var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(i,o){var s=o.children,l=o.handleExited,c=o.firstRender;return{children:c?CH(i,l):PH(i,s,l),firstRender:!1}},n.handleExited=function(i,o){var s=_x(this.props.children);i.key in s||(i.props.onExited&&i.props.onExited(o),this.mounted&&this.setState(function(l){var c=ne({},l.children);return delete c[i.key],{children:c}}))},n.render=function(){var i=this.props,o=i.component,s=i.childFactory,l=An(i,["component","childFactory"]),c=this.state.contextValue,d=EH(this.state.children).map(s);return delete l.appear,delete l.enter,delete l.exit,o===null?jt.createElement(tk.Provider,{value:c},d):jt.createElement(tk.Provider,{value:c},jt.createElement(o,l,d))},t}(jt.Component);Sx.propTypes={};Sx.defaultProps=MH;var OH=Sx;function RH(e){const{className:t,classes:n,pulsate:r=!1,rippleX:i,rippleY:o,rippleSize:s,in:l,onExited:c,timeout:d}=e,[f,g]=R.exports.useState(!1),m=Xt(t,n.ripple,n.rippleVisible,r&&n.ripplePulsate),x={width:s,height:s,top:-(s/2)+o,left:-(s/2)+i},w=Xt(n.child,f&&n.childLeaving,r&&n.childPulsate);return!l&&!f&&g(!0),R.exports.useEffect(()=>{if(!l&&c!=null){const _=setTimeout(c,d);return()=>{clearTimeout(_)}}},[c,l,d]),p("span",{className:m,style:x,children:p("span",{className:w})})}const TH=Hs("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]);var Pr=TH;const AH=["center","classes","className"];let vg=e=>e,nk,rk,ik,ok;const u1=550,NH=80,LH=ml(nk||(nk=vg`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),$H=ml(rk||(rk=vg`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),IH=ml(ik||(ik=vg`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),DH=Nn("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),zH=Nn(RH,{name:"MuiTouchRipple",slot:"Ripple"})(ok||(ok=vg`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),Pr.rippleVisible,LH,u1,({theme:e})=>e.transitions.easing.easeInOut,Pr.ripplePulsate,({theme:e})=>e.transitions.duration.shorter,Pr.child,Pr.childLeaving,$H,u1,({theme:e})=>e.transitions.easing.easeInOut,Pr.childPulsate,IH,({theme:e})=>e.transitions.easing.easeInOut),FH=R.exports.forwardRef(function(t,n){const r=bl({props:t,name:"MuiTouchRipple"}),{center:i=!1,classes:o={},className:s}=r,l=An(r,AH),[c,d]=R.exports.useState([]),f=R.exports.useRef(0),g=R.exports.useRef(null);R.exports.useEffect(()=>{g.current&&(g.current(),g.current=null)},[c]);const m=R.exports.useRef(!1),x=Kj(),w=R.exports.useRef(null),_=R.exports.useRef(null),v=R.exports.useCallback(E=>{const{pulsate:T,rippleX:N,rippleY:L,rippleSize:z,cb:B}=E;d(H=>[...H,p(zH,{classes:{ripple:Xt(o.ripple,Pr.ripple),rippleVisible:Xt(o.rippleVisible,Pr.rippleVisible),ripplePulsate:Xt(o.ripplePulsate,Pr.ripplePulsate),child:Xt(o.child,Pr.child),childLeaving:Xt(o.childLeaving,Pr.childLeaving),childPulsate:Xt(o.childPulsate,Pr.childPulsate)},timeout:u1,pulsate:T,rippleX:N,rippleY:L,rippleSize:z},f.current)]),f.current+=1,g.current=B},[o]),b=R.exports.useCallback((E={},T={},N=()=>{})=>{const{pulsate:L=!1,center:z=i||T.pulsate,fakeElement:B=!1}=T;if((E==null?void 0:E.type)==="mousedown"&&m.current){m.current=!1;return}(E==null?void 0:E.type)==="touchstart"&&(m.current=!0);const H=B?null:_.current,Q=H?H.getBoundingClientRect():{width:0,height:0,left:0,top:0};let te,ae,ye;if(z||E===void 0||E.clientX===0&&E.clientY===0||!E.clientX&&!E.touches)te=Math.round(Q.width/2),ae=Math.round(Q.height/2);else{const{clientX:oe,clientY:ge}=E.touches&&E.touches.length>0?E.touches[0]:E;te=Math.round(oe-Q.left),ae=Math.round(ge-Q.top)}if(z)ye=Math.sqrt((2*Q.width**2+Q.height**2)/3),ye%2===0&&(ye+=1);else{const oe=Math.max(Math.abs((H?H.clientWidth:0)-te),te)*2+2,ge=Math.max(Math.abs((H?H.clientHeight:0)-ae),ae)*2+2;ye=Math.sqrt(oe**2+ge**2)}E!=null&&E.touches?w.current===null&&(w.current=()=>{v({pulsate:L,rippleX:te,rippleY:ae,rippleSize:ye,cb:N})},x.start(NH,()=>{w.current&&(w.current(),w.current=null)})):v({pulsate:L,rippleX:te,rippleY:ae,rippleSize:ye,cb:N})},[i,v,x]),S=R.exports.useCallback(()=>{b({},{pulsate:!0})},[b]),C=R.exports.useCallback((E,T)=>{if(x.clear(),(E==null?void 0:E.type)==="touchend"&&w.current){w.current(),w.current=null,x.start(0,()=>{C(E,T)});return}w.current=null,d(N=>N.length>0?N.slice(1):N),g.current=T},[x]);return R.exports.useImperativeHandle(n,()=>({pulsate:S,start:b,stop:C}),[S,b,C]),p(DH,ne({className:Xt(Pr.root,o.root,s),ref:_},l,{children:p(OH,{component:null,exit:!0,children:c})}))});var BH=FH;function jH(e){return vl("MuiButtonBase",e)}const WH=Hs("MuiButtonBase",["root","disabled","focusVisible"]);var HH=WH;const VH=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],UH=e=>{const{disabled:t,focusVisible:n,focusVisibleClassName:r,classes:i}=e,s=Ju({root:["root",t&&"disabled",n&&"focusVisible"]},jH,i);return n&&r&&(s.root+=` ${r}`),s},YH=Nn("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${HH.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),KH=R.exports.forwardRef(function(t,n){const r=bl({props:t,name:"MuiButtonBase"}),{action:i,centerRipple:o=!1,children:s,className:l,component:c="button",disabled:d=!1,disableRipple:f=!1,disableTouchRipple:g=!1,focusRipple:m=!1,LinkComponent:x="a",onBlur:w,onClick:_,onContextMenu:v,onDragLeave:b,onFocus:S,onFocusVisible:C,onKeyDown:E,onKeyUp:T,onMouseDown:N,onMouseLeave:L,onMouseUp:z,onTouchEnd:B,onTouchMove:H,onTouchStart:Q,tabIndex:te=0,TouchRippleProps:ae,touchRippleRef:ye,type:oe}=r,ge=An(r,VH),re=R.exports.useRef(null),de=R.exports.useRef(null),Ue=bu(de,ye),{isFocusVisibleRef:ct,onFocus:Z,onBlur:U,ref:V}=NP(),[X,se]=R.exports.useState(!1);d&&X&&se(!1),R.exports.useImperativeHandle(i,()=>({focusVisible:()=>{se(!0),re.current.focus()}}),[]);const[F,Ee]=R.exports.useState(!1);R.exports.useEffect(()=>{Ee(!0)},[]);const J=F&&!f&&!d;R.exports.useEffect(()=>{X&&m&&!f&&F&&de.current.pulsate()},[f,m,X,F]);function Se(G,me,Fe=g){return Ss(Be=>(me&&me(Be),!Fe&&de.current&&de.current[G](Be),!0))}const ze=Se("start",N),Le=Se("stop",v),be=Se("stop",b),Je=Se("stop",z),ke=Se("stop",G=>{X&&G.preventDefault(),L&&L(G)}),pe=Se("start",Q),et=Se("stop",B),we=Se("stop",H),Xe=Se("stop",G=>{U(G),ct.current===!1&&se(!1),w&&w(G)},!1),er=Ss(G=>{re.current||(re.current=G.currentTarget),Z(G),ct.current===!0&&(se(!0),C&&C(G)),S&&S(G)}),Oe=()=>{const G=re.current;return c&&c!=="button"&&!(G.tagName==="A"&&G.href)},ut=R.exports.useRef(!1),ln=Ss(G=>{m&&!ut.current&&X&&de.current&&G.key===" "&&(ut.current=!0,de.current.stop(G,()=>{de.current.start(G)})),G.target===G.currentTarget&&Oe()&&G.key===" "&&G.preventDefault(),E&&E(G),G.target===G.currentTarget&&Oe()&&G.key==="Enter"&&!d&&(G.preventDefault(),_&&_(G))}),Mt=Ss(G=>{m&&G.key===" "&&de.current&&X&&!G.defaultPrevented&&(ut.current=!1,de.current.stop(G,()=>{de.current.pulsate(G)})),T&&T(G),_&&G.target===G.currentTarget&&Oe()&&G.key===" "&&!G.defaultPrevented&&_(G)});let xe=c;xe==="button"&&(ge.href||ge.to)&&(xe=x);const We={};xe==="button"?(We.type=oe===void 0?"button":oe,We.disabled=d):(!ge.href&&!ge.to&&(We.role="button"),d&&(We["aria-disabled"]=d));const Fr=bu(n,V,re),tn=ne({},r,{centerRipple:o,component:c,disabled:d,disableRipple:f,disableTouchRipple:g,focusRipple:m,tabIndex:te,focusVisible:X}),ee=UH(tn);return O(YH,ne({as:xe,className:Xt(ee.root,l),ownerState:tn,onBlur:Xe,onClick:_,onContextMenu:Le,onFocus:er,onKeyDown:ln,onKeyUp:Mt,onMouseDown:ze,onMouseLeave:ke,onMouseUp:Je,onDragLeave:be,onTouchEnd:et,onTouchMove:we,onTouchStart:pe,ref:Fr,tabIndex:d?-1:te,type:oe},We,ge,{children:[s,J?p(BH,ne({ref:Ue,center:o},ae)):null]}))});var XH=KH;const GH=Hs("MuiBox",["root"]);var qH=GH;const ZH=jP(),QH=Oj({themeId:nx,defaultTheme:ZH,defaultClassName:qH.root,generateClassName:PP.generate});var Qn=QH;function JH(e){return vl("MuiButton",e)}const eV=Hs("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","colorPrimary","colorSecondary","colorSuccess","colorError","colorInfo","colorWarning","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","icon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]);var xf=eV;const tV=R.exports.createContext({});var nV=tV;const rV=R.exports.createContext(void 0);var iV=rV;const oV=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],sV=e=>{const{color:t,disableElevation:n,fullWidth:r,size:i,variant:o,classes:s}=e,l={root:["root",o,`${o}${$t(t)}`,`size${$t(i)}`,`${o}Size${$t(i)}`,`color${$t(t)}`,n&&"disableElevation",r&&"fullWidth"],label:["label"],startIcon:["icon","startIcon",`iconSize${$t(i)}`],endIcon:["icon","endIcon",`iconSize${$t(i)}`]},c=Ju(l,JH,s);return ne({},s,c)},YP=e=>ne({},e.size==="small"&&{"& > *:nth-of-type(1)":{fontSize:18}},e.size==="medium"&&{"& > *:nth-of-type(1)":{fontSize:20}},e.size==="large"&&{"& > *:nth-of-type(1)":{fontSize:22}}),aV=Nn(XH,{shouldForwardProp:e=>VP(e)||e==="classes",name:"MuiButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],t[`${n.variant}${$t(n.color)}`],t[`size${$t(n.size)}`],t[`${n.variant}Size${$t(n.size)}`],n.color==="inherit"&&t.colorInherit,n.disableElevation&&t.disableElevation,n.fullWidth&&t.fullWidth]}})(({theme:e,ownerState:t})=>{var n,r;const i=e.palette.mode==="light"?e.palette.grey[300]:e.palette.grey[800],o=e.palette.mode==="light"?e.palette.grey.A100:e.palette.grey[700];return ne({},e.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(e.vars||e).shape.borderRadius,transition:e.transitions.create(["background-color","box-shadow","border-color","color"],{duration:e.transitions.duration.short}),"&:hover":ne({textDecoration:"none",backgroundColor:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`:Ea(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},t.variant==="text"&&t.color!=="inherit"&&{backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:Ea(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},t.variant==="outlined"&&t.color!=="inherit"&&{border:`1px solid ${(e.vars||e).palette[t.color].main}`,backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:Ea(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},t.variant==="contained"&&{backgroundColor:e.vars?e.vars.palette.Button.inheritContainedHoverBg:o,boxShadow:(e.vars||e).shadows[4],"@media (hover: none)":{boxShadow:(e.vars||e).shadows[2],backgroundColor:(e.vars||e).palette.grey[300]}},t.variant==="contained"&&t.color!=="inherit"&&{backgroundColor:(e.vars||e).palette[t.color].dark,"@media (hover: none)":{backgroundColor:(e.vars||e).palette[t.color].main}}),"&:active":ne({},t.variant==="contained"&&{boxShadow:(e.vars||e).shadows[8]}),[`&.${xf.focusVisible}`]:ne({},t.variant==="contained"&&{boxShadow:(e.vars||e).shadows[6]}),[`&.${xf.disabled}`]:ne({color:(e.vars||e).palette.action.disabled},t.variant==="outlined"&&{border:`1px solid ${(e.vars||e).palette.action.disabledBackground}`},t.variant==="contained"&&{color:(e.vars||e).palette.action.disabled,boxShadow:(e.vars||e).shadows[0],backgroundColor:(e.vars||e).palette.action.disabledBackground})},t.variant==="text"&&{padding:"6px 8px"},t.variant==="text"&&t.color!=="inherit"&&{color:(e.vars||e).palette[t.color].main},t.variant==="outlined"&&{padding:"5px 15px",border:"1px solid currentColor"},t.variant==="outlined"&&t.color!=="inherit"&&{color:(e.vars||e).palette[t.color].main,border:e.vars?`1px solid rgba(${e.vars.palette[t.color].mainChannel} / 0.5)`:`1px solid ${Ea(e.palette[t.color].main,.5)}`},t.variant==="contained"&&{color:e.vars?e.vars.palette.text.primary:(n=(r=e.palette).getContrastText)==null?void 0:n.call(r,e.palette.grey[300]),backgroundColor:e.vars?e.vars.palette.Button.inheritContainedBg:i,boxShadow:(e.vars||e).shadows[2]},t.variant==="contained"&&t.color!=="inherit"&&{color:(e.vars||e).palette[t.color].contrastText,backgroundColor:(e.vars||e).palette[t.color].main},t.color==="inherit"&&{color:"inherit",borderColor:"currentColor"},t.size==="small"&&t.variant==="text"&&{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},t.size==="large"&&t.variant==="text"&&{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},t.size==="small"&&t.variant==="outlined"&&{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},t.size==="large"&&t.variant==="outlined"&&{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},t.size==="small"&&t.variant==="contained"&&{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},t.size==="large"&&t.variant==="contained"&&{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},t.fullWidth&&{width:"100%"})},({ownerState:e})=>e.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${xf.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${xf.disabled}`]:{boxShadow:"none"}}),lV=Nn("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.startIcon,t[`iconSize${$t(n.size)}`]]}})(({ownerState:e})=>ne({display:"inherit",marginRight:8,marginLeft:-4},e.size==="small"&&{marginLeft:-2},YP(e))),cV=Nn("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.endIcon,t[`iconSize${$t(n.size)}`]]}})(({ownerState:e})=>ne({display:"inherit",marginRight:-4,marginLeft:8},e.size==="small"&&{marginRight:-2},YP(e))),uV=R.exports.forwardRef(function(t,n){const r=R.exports.useContext(nV),i=R.exports.useContext(iV),o=Zh(r,t),s=bl({props:o,name:"MuiButton"}),{children:l,color:c="primary",component:d="button",className:f,disabled:g=!1,disableElevation:m=!1,disableFocusRipple:x=!1,endIcon:w,focusVisibleClassName:_,fullWidth:v=!1,size:b="medium",startIcon:S,type:C,variant:E="text"}=s,T=An(s,oV),N=ne({},s,{color:c,component:d,disabled:g,disableElevation:m,disableFocusRipple:x,fullWidth:v,size:b,type:C,variant:E}),L=sV(N),z=S&&p(lV,{className:L.startIcon,ownerState:N,children:S}),B=w&&p(cV,{className:L.endIcon,ownerState:N,children:w}),H=i||"";return O(aV,ne({ownerState:N,className:Xt(r.className,L.root,f,H),component:d,disabled:g,focusRipple:!x,focusVisibleClassName:Xt(L.focusVisible,_),ref:n,type:C},T,{classes:L,children:[z,l,B]}))});var dV=uV;const fV=R.exports.createContext();var sk=fV;function hV(e){return vl("MuiGrid",e)}const pV=[0,1,2,3,4,5,6,7,8,9,10],gV=["column-reverse","column","row-reverse","row"],mV=["nowrap","wrap-reverse","wrap"],lc=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],wu=Hs("MuiGrid",["root","container","item","zeroMinWidth",...pV.map(e=>`spacing-xs-${e}`),...gV.map(e=>`direction-xs-${e}`),...mV.map(e=>`wrap-xs-${e}`),...lc.map(e=>`grid-xs-${e}`),...lc.map(e=>`grid-sm-${e}`),...lc.map(e=>`grid-md-${e}`),...lc.map(e=>`grid-lg-${e}`),...lc.map(e=>`grid-xl-${e}`)]),vV=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function Va(e){const t=parseFloat(e);return`${t}${String(e).replace(String(t),"")||"px"}`}function yV({theme:e,ownerState:t}){let n;return e.breakpoints.keys.reduce((r,i)=>{let o={};if(t[i]&&(n=t[i]),!n)return r;if(n===!0)o={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if(n==="auto")o={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const s=Zp({values:t.columns,breakpoints:e.breakpoints.values}),l=typeof s=="object"?s[i]:s;if(l==null)return r;const c=`${Math.round(n/l*1e8)/1e6}%`;let d={};if(t.container&&t.item&&t.columnSpacing!==0){const f=e.spacing(t.columnSpacing);if(f!=="0px"){const g=`calc(${c} + ${Va(f)})`;d={flexBasis:g,maxWidth:g}}}o=ne({flexBasis:c,flexGrow:0,maxWidth:c},d)}return e.breakpoints.values[i]===0?Object.assign(r,o):r[e.breakpoints.up(i)]=o,r},{})}function xV({theme:e,ownerState:t}){const n=Zp({values:t.direction,breakpoints:e.breakpoints.values});return Lr({theme:e},n,r=>{const i={flexDirection:r};return r.indexOf("column")===0&&(i[`& > .${wu.item}`]={maxWidth:"none"}),i})}function KP({breakpoints:e,values:t}){let n="";Object.keys(t).forEach(i=>{n===""&&t[i]!==0&&(n=i)});const r=Object.keys(e).sort((i,o)=>e[i]-e[o]);return r.slice(0,r.indexOf(n))}function bV({theme:e,ownerState:t}){const{container:n,rowSpacing:r}=t;let i={};if(n&&r!==0){const o=Zp({values:r,breakpoints:e.breakpoints.values});let s;typeof o=="object"&&(s=KP({breakpoints:e.breakpoints.values,values:o})),i=Lr({theme:e},o,(l,c)=>{var d;const f=e.spacing(l);return f!=="0px"?{marginTop:`-${Va(f)}`,[`& > .${wu.item}`]:{paddingTop:Va(f)}}:(d=s)!=null&&d.includes(c)?{}:{marginTop:0,[`& > .${wu.item}`]:{paddingTop:0}}})}return i}function wV({theme:e,ownerState:t}){const{container:n,columnSpacing:r}=t;let i={};if(n&&r!==0){const o=Zp({values:r,breakpoints:e.breakpoints.values});let s;typeof o=="object"&&(s=KP({breakpoints:e.breakpoints.values,values:o})),i=Lr({theme:e},o,(l,c)=>{var d;const f=e.spacing(l);return f!=="0px"?{width:`calc(100% + ${Va(f)})`,marginLeft:`-${Va(f)}`,[`& > .${wu.item}`]:{paddingLeft:Va(f)}}:(d=s)!=null&&d.includes(c)?{}:{width:"100%",marginLeft:0,[`& > .${wu.item}`]:{paddingLeft:0}}})}return i}function _V(e,t,n={}){if(!e||e<=0)return[];if(typeof e=="string"&&!Number.isNaN(Number(e))||typeof e=="number")return[n[`spacing-xs-${String(e)}`]];const r=[];return t.forEach(i=>{const o=e[i];Number(o)>0&&r.push(n[`spacing-${i}-${String(o)}`])}),r}const SV=Nn("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e,{container:r,direction:i,item:o,spacing:s,wrap:l,zeroMinWidth:c,breakpoints:d}=n;let f=[];r&&(f=_V(s,d,t));const g=[];return d.forEach(m=>{const x=n[m];x&&g.push(t[`grid-${m}-${String(x)}`])}),[t.root,r&&t.container,o&&t.item,c&&t.zeroMinWidth,...f,i!=="row"&&t[`direction-xs-${String(i)}`],l!=="wrap"&&t[`wrap-xs-${String(l)}`],...g]}})(({ownerState:e})=>ne({boxSizing:"border-box"},e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},e.item&&{margin:0},e.zeroMinWidth&&{minWidth:0},e.wrap!=="wrap"&&{flexWrap:e.wrap}),xV,bV,wV,yV);function kV(e,t){if(!e||e<=0)return[];if(typeof e=="string"&&!Number.isNaN(Number(e))||typeof e=="number")return[`spacing-xs-${String(e)}`];const n=[];return t.forEach(r=>{const i=e[r];if(Number(i)>0){const o=`spacing-${r}-${String(i)}`;n.push(o)}}),n}const CV=e=>{const{classes:t,container:n,direction:r,item:i,spacing:o,wrap:s,zeroMinWidth:l,breakpoints:c}=e;let d=[];n&&(d=kV(o,c));const f=[];c.forEach(m=>{const x=e[m];x&&f.push(`grid-${m}-${String(x)}`)});const g={root:["root",n&&"container",i&&"item",l&&"zeroMinWidth",...d,r!=="row"&&`direction-xs-${String(r)}`,s!=="wrap"&&`wrap-xs-${String(s)}`,...f]};return Ju(g,hV,t)},PV=R.exports.forwardRef(function(t,n){const r=bl({props:t,name:"MuiGrid"}),{breakpoints:i}=JW(),o=hx(r),{className:s,columns:l,columnSpacing:c,component:d="div",container:f=!1,direction:g="row",item:m=!1,rowSpacing:x,spacing:w=0,wrap:_="wrap",zeroMinWidth:v=!1}=o,b=An(o,vV),S=x||w,C=c||w,E=R.exports.useContext(sk),T=f?l||12:E,N={},L=ne({},b);i.keys.forEach(H=>{b[H]!=null&&(N[H]=b[H],delete L[H])});const z=ne({},o,{columns:T,container:f,direction:g,item:m,rowSpacing:S,columnSpacing:C,wrap:_,zeroMinWidth:v,spacing:w},N,{breakpoints:i.keys}),B=CV(z);return p(sk.Provider,{value:T,children:p(SV,ne({ownerState:z,className:Xt(B.root,s),as:d,ref:n},L))})});var Xr=PV;function EV(e){return vl("MuiSkeleton",e)}Hs("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const MV=["animation","className","component","height","style","variant","width"];let Jh=e=>e,ak,lk,ck,uk;const OV=e=>{const{classes:t,variant:n,animation:r,hasChildren:i,width:o,height:s}=e;return Ju({root:["root",n,r,i&&"withChildren",i&&!o&&"fitContent",i&&!s&&"heightAuto"]},EV,t)},RV=ml(ak||(ak=Jh`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),TV=ml(lk||(lk=Jh`
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
`)),AV=Nn("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],n.animation!==!1&&t[n.animation],n.hasChildren&&t.withChildren,n.hasChildren&&!n.width&&t.fitContent,n.hasChildren&&!n.height&&t.heightAuto]}})(({theme:e,ownerState:t})=>{const n=qW(e.shape.borderRadius)||"px",r=ZW(e.shape.borderRadius);return ne({display:"block",backgroundColor:e.vars?e.vars.palette.Skeleton.bg:jj(e.palette.text.primary,e.palette.mode==="light"?.11:.13),height:"1.2em"},t.variant==="text"&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${r}${n}/${Math.round(r/.6*10)/10}${n}`,"&:empty:before":{content:'"\\00a0"'}},t.variant==="circular"&&{borderRadius:"50%"},t.variant==="rounded"&&{borderRadius:(e.vars||e).shape.borderRadius},t.hasChildren&&{"& > *":{visibility:"hidden"}},t.hasChildren&&!t.width&&{maxWidth:"fit-content"},t.hasChildren&&!t.height&&{height:"auto"})},({ownerState:e})=>e.animation==="pulse"&&Gh(ck||(ck=Jh`
      animation: ${0} 2s ease-in-out 0.5s infinite;
    `),RV),({ownerState:e,theme:t})=>e.animation==="wave"&&Gh(uk||(uk=Jh`
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
    `),TV,(t.vars||t).palette.action.hover)),NV=R.exports.forwardRef(function(t,n){const r=bl({props:t,name:"MuiSkeleton"}),{animation:i="pulse",className:o,component:s="span",height:l,style:c,variant:d="text",width:f}=r,g=An(r,MV),m=ne({},r,{animation:i,component:s,variant:d,hasChildren:Boolean(g.children)}),x=OV(m);return p(AV,ne({as:s,ref:n,className:Xt(x.root,o),ownerState:m},g,{style:ne({width:f,height:l},c)}))});var Nt=NV;function LV(e,t,n=(r,i)=>r===i){return e.length===t.length&&e.every((r,i)=>n(r,t[i]))}const $V=2;function XP(e,t){return e-t}function dk(e,t){var n;const{index:r}=(n=e.reduce((i,o,s)=>{const l=Math.abs(t-o);return i===null||l<i.distance||l===i.distance?{distance:l,index:s}:i},null))!=null?n:{};return r}function bf(e,t){if(t.current!==void 0&&e.changedTouches){const n=e;for(let r=0;r<n.changedTouches.length;r+=1){const i=n.changedTouches[r];if(i.identifier===t.current)return{x:i.clientX,y:i.clientY}}return!1}return{x:e.clientX,y:e.clientY}}function ep(e,t,n){return(e-t)*100/(n-t)}function IV(e,t,n){return(n-t)*e+t}function DV(e){if(Math.abs(e)<1){const n=e.toExponential().split("e-"),r=n[0].split(".")[1];return(r?r.length:0)+parseInt(n[1],10)}const t=e.toString().split(".")[1];return t?t.length:0}function zV(e,t,n){const r=Math.round((e-n)/t)*t+n;return Number(r.toFixed(DV(t)))}function fk({values:e,newValue:t,index:n}){const r=e.slice();return r[n]=t,r.sort(XP)}function wf({sliderRef:e,activeIndex:t,setActive:n}){var r,i;const o=th(e.current);if(!((r=e.current)!=null&&r.contains(o.activeElement))||Number(o==null||(i=o.activeElement)==null?void 0:i.getAttribute("data-index"))!==t){var s;(s=e.current)==null||s.querySelector(`[type="range"][data-index="${t}"]`).focus()}n&&n(t)}function _f(e,t){return typeof e=="number"&&typeof t=="number"?e===t:typeof e=="object"&&typeof t=="object"?LV(e,t):!1}const FV={horizontal:{offset:e=>({left:`${e}%`}),leap:e=>({width:`${e}%`})},"horizontal-reverse":{offset:e=>({right:`${e}%`}),leap:e=>({width:`${e}%`})},vertical:{offset:e=>({bottom:`${e}%`}),leap:e=>({height:`${e}%`})}},BV=e=>e;let Sf;function hk(){return Sf===void 0&&(typeof CSS!="undefined"&&typeof CSS.supports=="function"?Sf=CSS.supports("touch-action","none"):Sf=!0),Sf}function jV(e){const{"aria-labelledby":t,defaultValue:n,disabled:r=!1,disableSwap:i=!1,isRtl:o=!1,marks:s=!1,max:l=100,min:c=0,name:d,onChange:f,onChangeCommitted:g,orientation:m="horizontal",rootRef:x,scale:w=BV,step:_=1,shiftStep:v=10,tabIndex:b,value:S}=e,C=R.exports.useRef(),[E,T]=R.exports.useState(-1),[N,L]=R.exports.useState(-1),[z,B]=R.exports.useState(!1),H=R.exports.useRef(0),[Q,te]=Hj({controlled:S,default:n!=null?n:c,name:"Slider"}),ae=f&&((ee,G,me)=>{const Fe=ee.nativeEvent||ee,Be=new Fe.constructor(Fe.type,Fe);Object.defineProperty(Be,"target",{writable:!0,value:{value:G,name:d}}),f(Be,G,me)}),ye=Array.isArray(Q);let oe=ye?Q.slice().sort(XP):[Q];oe=oe.map(ee=>ee==null?c:vs(ee,c,l));const ge=s===!0&&_!==null?[...Array(Math.floor((l-c)/_)+1)].map((ee,G)=>({value:c+_*G})):s||[],re=ge.map(ee=>ee.value),{isFocusVisibleRef:de,onBlur:Ue,onFocus:ct,ref:Z}=NP(),[U,V]=R.exports.useState(-1),X=R.exports.useRef(),se=bu(Z,X),F=bu(x,se),Ee=ee=>G=>{var me;const Fe=Number(G.currentTarget.getAttribute("data-index"));ct(G),de.current===!0&&V(Fe),L(Fe),ee==null||(me=ee.onFocus)==null||me.call(ee,G)},J=ee=>G=>{var me;Ue(G),de.current===!1&&V(-1),L(-1),ee==null||(me=ee.onBlur)==null||me.call(ee,G)},Se=(ee,G)=>{const me=Number(ee.currentTarget.getAttribute("data-index")),Fe=oe[me],Be=re.indexOf(Fe);let Ie=G;if(ge&&_==null){const Ln=re[re.length-1];Ie>Ln?Ie=Ln:Ie<re[0]?Ie=re[0]:Ie=Ie<Fe?re[Be-1]:re[Be+1]}if(Ie=vs(Ie,c,l),ye){i&&(Ie=vs(Ie,oe[me-1]||-1/0,oe[me+1]||1/0));const Ln=Ie;Ie=fk({values:oe,newValue:Ie,index:me});let Bn=me;i||(Bn=Ie.indexOf(Ln)),wf({sliderRef:X,activeIndex:Bn})}te(Ie),V(me),ae&&!_f(Ie,Q)&&ae(ee,Ie,me),g&&g(ee,Ie)},ze=ee=>G=>{var me;if(_!==null){const Fe=Number(G.currentTarget.getAttribute("data-index")),Be=oe[Fe];let Ie=null;(G.key==="ArrowLeft"||G.key==="ArrowDown")&&G.shiftKey||G.key==="PageDown"?Ie=Math.max(Be-v,c):((G.key==="ArrowRight"||G.key==="ArrowUp")&&G.shiftKey||G.key==="PageUp")&&(Ie=Math.min(Be+v,l)),Ie!==null&&(Se(G,Ie),G.preventDefault())}ee==null||(me=ee.onKeyDown)==null||me.call(ee,G)};TP(()=>{if(r&&X.current.contains(document.activeElement)){var ee;(ee=document.activeElement)==null||ee.blur()}},[r]),r&&E!==-1&&T(-1),r&&U!==-1&&V(-1);const Le=ee=>G=>{var me;(me=ee.onChange)==null||me.call(ee,G),Se(G,G.target.valueAsNumber)},be=R.exports.useRef();let Je=m;o&&m==="horizontal"&&(Je+="-reverse");const ke=({finger:ee,move:G=!1})=>{const{current:me}=X,{width:Fe,height:Be,bottom:Ie,left:Ln}=me.getBoundingClientRect();let Bn;Je.indexOf("vertical")===0?Bn=(Ie-ee.y)/Be:Bn=(ee.x-Ln)/Fe,Je.indexOf("-reverse")!==-1&&(Bn=1-Bn);let Ge;if(Ge=IV(Bn,c,l),_)Ge=zV(Ge,_,c);else{const Qi=dk(re,Ge);Ge=re[Qi]}Ge=vs(Ge,c,l);let vn=0;if(ye){G?vn=be.current:vn=dk(oe,Ge),i&&(Ge=vs(Ge,oe[vn-1]||-1/0,oe[vn+1]||1/0));const Qi=Ge;Ge=fk({values:oe,newValue:Ge,index:vn}),i&&G||(vn=Ge.indexOf(Qi),be.current=vn)}return{newValue:Ge,activeIndex:vn}},pe=Ss(ee=>{const G=bf(ee,C);if(!G)return;if(H.current+=1,ee.type==="mousemove"&&ee.buttons===0){et(ee);return}const{newValue:me,activeIndex:Fe}=ke({finger:G,move:!0});wf({sliderRef:X,activeIndex:Fe,setActive:T}),te(me),!z&&H.current>$V&&B(!0),ae&&!_f(me,Q)&&ae(ee,me,Fe)}),et=Ss(ee=>{const G=bf(ee,C);if(B(!1),!G)return;const{newValue:me}=ke({finger:G,move:!0});T(-1),ee.type==="touchend"&&L(-1),g&&g(ee,me),C.current=void 0,Xe()}),we=Ss(ee=>{if(r)return;hk()||ee.preventDefault();const G=ee.changedTouches[0];G!=null&&(C.current=G.identifier);const me=bf(ee,C);if(me!==!1){const{newValue:Be,activeIndex:Ie}=ke({finger:me});wf({sliderRef:X,activeIndex:Ie,setActive:T}),te(Be),ae&&!_f(Be,Q)&&ae(ee,Be,Ie)}H.current=0;const Fe=th(X.current);Fe.addEventListener("touchmove",pe,{passive:!0}),Fe.addEventListener("touchend",et,{passive:!0})}),Xe=R.exports.useCallback(()=>{const ee=th(X.current);ee.removeEventListener("mousemove",pe),ee.removeEventListener("mouseup",et),ee.removeEventListener("touchmove",pe),ee.removeEventListener("touchend",et)},[et,pe]);R.exports.useEffect(()=>{const{current:ee}=X;return ee.addEventListener("touchstart",we,{passive:hk()}),()=>{ee.removeEventListener("touchstart",we),Xe()}},[Xe,we]),R.exports.useEffect(()=>{r&&Xe()},[r,Xe]);const er=ee=>G=>{var me;if((me=ee.onMouseDown)==null||me.call(ee,G),r||G.defaultPrevented||G.button!==0)return;G.preventDefault();const Fe=bf(G,C);if(Fe!==!1){const{newValue:Ie,activeIndex:Ln}=ke({finger:Fe});wf({sliderRef:X,activeIndex:Ln,setActive:T}),te(Ie),ae&&!_f(Ie,Q)&&ae(G,Ie,Ln)}H.current=0;const Be=th(X.current);Be.addEventListener("mousemove",pe,{passive:!0}),Be.addEventListener("mouseup",et)},Oe=ep(ye?oe[0]:c,c,l),ut=ep(oe[oe.length-1],c,l)-Oe,ln=(ee={})=>{const G=nh(ee),me={onMouseDown:er(G||{})},Fe=ne({},G,me);return ne({},ee,{ref:F},Fe)},Mt=ee=>G=>{var me;(me=ee.onMouseOver)==null||me.call(ee,G);const Fe=Number(G.currentTarget.getAttribute("data-index"));L(Fe)},xe=ee=>G=>{var me;(me=ee.onMouseLeave)==null||me.call(ee,G),L(-1)};return{active:E,axis:Je,axisProps:FV,dragging:z,focusedThumbIndex:U,getHiddenInputProps:(ee={})=>{var G;const me=nh(ee),Fe={onChange:Le(me||{}),onFocus:Ee(me||{}),onBlur:J(me||{}),onKeyDown:ze(me||{})},Be=ne({},me,Fe);return ne({tabIndex:b,"aria-labelledby":t,"aria-orientation":m,"aria-valuemax":w(l),"aria-valuemin":w(c),name:d,type:"range",min:e.min,max:e.max,step:e.step===null&&e.marks?"any":(G=e.step)!=null?G:void 0,disabled:r},ee,Be,{style:ne({},nW,{direction:o?"rtl":"ltr",width:"100%",height:"100%"})})},getRootProps:ln,getThumbProps:(ee={})=>{const G=nh(ee),me={onMouseOver:Mt(G||{}),onMouseLeave:xe(G||{})};return ne({},ee,G,me)},marks:ge,open:N,range:ye,rootRef:F,trackLeap:ut,trackOffset:Oe,values:oe,getThumbStyle:ee=>({pointerEvents:E!==-1&&E!==ee?"none":void 0})}}const WV=e=>!e||!Wc(e);var HV=WV;function VV(e){return vl("MuiSlider",e)}const UV=Hs("MuiSlider",["root","active","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","disabled","dragging","focusVisible","mark","markActive","marked","markLabel","markLabelActive","rail","sizeSmall","thumb","thumbColorPrimary","thumbColorSecondary","thumbColorError","thumbColorSuccess","thumbColorInfo","thumbColorWarning","track","trackInverted","trackFalse","thumbSizeSmall","valueLabel","valueLabelOpen","valueLabelCircle","valueLabelLabel","vertical"]);var Rr=UV;const YV=e=>{const{open:t}=e;return{offset:Xt(t&&Rr.valueLabelOpen),circle:Rr.valueLabelCircle,label:Rr.valueLabelLabel}};function KV(e){const{children:t,className:n,value:r}=e,i=YV(e);return t?R.exports.cloneElement(t,{className:Xt(t.props.className)},O(R.exports.Fragment,{children:[t.props.children,p("span",{className:Xt(i.offset,n),"aria-hidden":!0,children:p("span",{className:i.circle,children:p("span",{className:i.label,children:r})})})]})):null}const XV=["aria-label","aria-valuetext","aria-labelledby","component","components","componentsProps","color","classes","className","disableSwap","disabled","getAriaLabel","getAriaValueText","marks","max","min","name","onChange","onChangeCommitted","orientation","shiftStep","size","step","scale","slotProps","slots","tabIndex","track","value","valueLabelDisplay","valueLabelFormat"];function pk(e){return e}const GV=Nn("span",{name:"MuiSlider",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[`color${$t(n.color)}`],n.size!=="medium"&&t[`size${$t(n.size)}`],n.marked&&t.marked,n.orientation==="vertical"&&t.vertical,n.track==="inverted"&&t.trackInverted,n.track===!1&&t.trackFalse]}})(({theme:e})=>{var t;return{borderRadius:12,boxSizing:"content-box",display:"inline-block",position:"relative",cursor:"pointer",touchAction:"none",WebkitTapHighlightColor:"transparent","@media print":{colorAdjust:"exact"},[`&.${Rr.disabled}`]:{pointerEvents:"none",cursor:"default",color:(e.vars||e).palette.grey[400]},[`&.${Rr.dragging}`]:{[`& .${Rr.thumb}, & .${Rr.track}`]:{transition:"none"}},variants:[...Object.keys(((t=e.vars)!=null?t:e).palette).filter(n=>{var r;return((r=e.vars)!=null?r:e).palette[n].main}).map(n=>({props:{color:n},style:{color:(e.vars||e).palette[n].main}})),{props:{orientation:"horizontal"},style:{height:4,width:"100%",padding:"13px 0","@media (pointer: coarse)":{padding:"20px 0"}}},{props:{orientation:"horizontal",size:"small"},style:{height:2}},{props:{orientation:"horizontal",marked:!0},style:{marginBottom:20}},{props:{orientation:"vertical"},style:{height:"100%",width:4,padding:"0 13px","@media (pointer: coarse)":{padding:"0 20px"}}},{props:{orientation:"vertical",size:"small"},style:{width:2}},{props:{orientation:"vertical",marked:!0},style:{marginRight:44}}]}}),qV=Nn("span",{name:"MuiSlider",slot:"Rail",overridesResolver:(e,t)=>t.rail})({display:"block",position:"absolute",borderRadius:"inherit",backgroundColor:"currentColor",opacity:.38,variants:[{props:{orientation:"horizontal"},style:{width:"100%",height:"inherit",top:"50%",transform:"translateY(-50%)"}},{props:{orientation:"vertical"},style:{height:"100%",width:"inherit",left:"50%",transform:"translateX(-50%)"}},{props:{track:"inverted"},style:{opacity:1}}]}),ZV=Nn("span",{name:"MuiSlider",slot:"Track",overridesResolver:(e,t)=>t.track})(({theme:e})=>{var t;return{display:"block",position:"absolute",borderRadius:"inherit",border:"1px solid currentColor",backgroundColor:"currentColor",transition:e.transitions.create(["left","width","bottom","height"],{duration:e.transitions.duration.shortest}),variants:[{props:{size:"small"},style:{border:"none"}},{props:{orientation:"horizontal"},style:{height:"inherit",top:"50%",transform:"translateY(-50%)"}},{props:{orientation:"vertical"},style:{width:"inherit",left:"50%",transform:"translateX(-50%)"}},{props:{track:!1},style:{display:"none"}},...Object.keys(((t=e.vars)!=null?t:e).palette).filter(n=>{var r;return((r=e.vars)!=null?r:e).palette[n].main}).map(n=>({props:{color:n,track:"inverted"},style:ne({},e.vars?{backgroundColor:e.vars.palette.Slider[`${n}Track`],borderColor:e.vars.palette.Slider[`${n}Track`]}:ne({backgroundColor:a1(e.palette[n].main,.62),borderColor:a1(e.palette[n].main,.62)},e.applyStyles("dark",{backgroundColor:s1(e.palette[n].main,.5)}),e.applyStyles("dark",{borderColor:s1(e.palette[n].main,.5)})))}))]}}),QV=Nn("span",{name:"MuiSlider",slot:"Thumb",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.thumb,t[`thumbColor${$t(n.color)}`],n.size!=="medium"&&t[`thumbSize${$t(n.size)}`]]}})(({theme:e})=>{var t;return{position:"absolute",width:20,height:20,boxSizing:"border-box",borderRadius:"50%",outline:0,backgroundColor:"currentColor",display:"flex",alignItems:"center",justifyContent:"center",transition:e.transitions.create(["box-shadow","left","bottom"],{duration:e.transitions.duration.shortest}),"&::before":{position:"absolute",content:'""',borderRadius:"inherit",width:"100%",height:"100%",boxShadow:(e.vars||e).shadows[2]},"&::after":{position:"absolute",content:'""',borderRadius:"50%",width:42,height:42,top:"50%",left:"50%",transform:"translate(-50%, -50%)"},[`&.${Rr.disabled}`]:{"&:hover":{boxShadow:"none"}},variants:[{props:{size:"small"},style:{width:12,height:12,"&::before":{boxShadow:"none"}}},{props:{orientation:"horizontal"},style:{top:"50%",transform:"translate(-50%, -50%)"}},{props:{orientation:"vertical"},style:{left:"50%",transform:"translate(-50%, 50%)"}},...Object.keys(((t=e.vars)!=null?t:e).palette).filter(n=>{var r;return((r=e.vars)!=null?r:e).palette[n].main}).map(n=>({props:{color:n},style:{[`&:hover, &.${Rr.focusVisible}`]:ne({},e.vars?{boxShadow:`0px 0px 0px 8px rgba(${e.vars.palette[n].mainChannel} / 0.16)`}:{boxShadow:`0px 0px 0px 8px ${Ea(e.palette[n].main,.16)}`},{"@media (hover: none)":{boxShadow:"none"}}),[`&.${Rr.active}`]:ne({},e.vars?{boxShadow:`0px 0px 0px 14px rgba(${e.vars.palette[n].mainChannel} / 0.16)`}:{boxShadow:`0px 0px 0px 14px ${Ea(e.palette[n].main,.16)}`})}}))]}}),JV=Nn(KV,{name:"MuiSlider",slot:"ValueLabel",overridesResolver:(e,t)=>t.valueLabel})(({theme:e})=>ne({zIndex:1,whiteSpace:"nowrap"},e.typography.body2,{fontWeight:500,transition:e.transitions.create(["transform"],{duration:e.transitions.duration.shortest}),position:"absolute",backgroundColor:(e.vars||e).palette.grey[600],borderRadius:2,color:(e.vars||e).palette.common.white,display:"flex",alignItems:"center",justifyContent:"center",padding:"0.25rem 0.75rem",variants:[{props:{orientation:"horizontal"},style:{transform:"translateY(-100%) scale(0)",top:"-10px",transformOrigin:"bottom center","&::before":{position:"absolute",content:'""',width:8,height:8,transform:"translate(-50%, 50%) rotate(45deg)",backgroundColor:"inherit",bottom:0,left:"50%"},[`&.${Rr.valueLabelOpen}`]:{transform:"translateY(-100%) scale(1)"}}},{props:{orientation:"vertical"},style:{transform:"translateY(-50%) scale(0)",right:"30px",top:"50%",transformOrigin:"right center","&::before":{position:"absolute",content:'""',width:8,height:8,transform:"translate(-50%, -50%) rotate(45deg)",backgroundColor:"inherit",right:-8,top:"50%"},[`&.${Rr.valueLabelOpen}`]:{transform:"translateY(-50%) scale(1)"}}},{props:{size:"small"},style:{fontSize:e.typography.pxToRem(12),padding:"0.25rem 0.5rem"}},{props:{orientation:"vertical",size:"small"},style:{right:"20px"}}]})),eU=Nn("span",{name:"MuiSlider",slot:"Mark",shouldForwardProp:e=>wx(e)&&e!=="markActive",overridesResolver:(e,t)=>{const{markActive:n}=e;return[t.mark,n&&t.markActive]}})(({theme:e})=>({position:"absolute",width:2,height:2,borderRadius:1,backgroundColor:"currentColor",variants:[{props:{orientation:"horizontal"},style:{top:"50%",transform:"translate(-1px, -50%)"}},{props:{orientation:"vertical"},style:{left:"50%",transform:"translate(-50%, 1px)"}},{props:{markActive:!0},style:{backgroundColor:(e.vars||e).palette.background.paper,opacity:.8}}]})),tU=Nn("span",{name:"MuiSlider",slot:"MarkLabel",shouldForwardProp:e=>wx(e)&&e!=="markLabelActive",overridesResolver:(e,t)=>t.markLabel})(({theme:e})=>ne({},e.typography.body2,{color:(e.vars||e).palette.text.secondary,position:"absolute",whiteSpace:"nowrap",variants:[{props:{orientation:"horizontal"},style:{top:30,transform:"translateX(-50%)","@media (pointer: coarse)":{top:40}}},{props:{orientation:"vertical"},style:{left:36,transform:"translateY(50%)","@media (pointer: coarse)":{left:44}}},{props:{markLabelActive:!0},style:{color:(e.vars||e).palette.text.primary}}]})),nU=e=>{const{disabled:t,dragging:n,marked:r,orientation:i,track:o,classes:s,color:l,size:c}=e,d={root:["root",t&&"disabled",n&&"dragging",r&&"marked",i==="vertical"&&"vertical",o==="inverted"&&"trackInverted",o===!1&&"trackFalse",l&&`color${$t(l)}`,c&&`size${$t(c)}`],rail:["rail"],track:["track"],mark:["mark"],markActive:["markActive"],markLabel:["markLabel"],markLabelActive:["markLabelActive"],valueLabel:["valueLabel"],thumb:["thumb",t&&"disabled",c&&`thumbSize${$t(c)}`,l&&`thumbColor${$t(l)}`],active:["active"],disabled:["disabled"],focusVisible:["focusVisible"]};return Ju(d,VV,s)},rU=({children:e})=>e,iU=R.exports.forwardRef(function(t,n){var r,i,o,s,l,c,d,f,g,m,x,w,_,v,b,S,C,E,T,N,L,z,B,H;const Q=bl({props:t,name:"MuiSlider"}),te=lW(),{"aria-label":ae,"aria-valuetext":ye,"aria-labelledby":oe,component:ge="span",components:re={},componentsProps:de={},color:Ue="primary",classes:ct,className:Z,disableSwap:U=!1,disabled:V=!1,getAriaLabel:X,getAriaValueText:se,marks:F=!1,max:Ee=100,min:J=0,orientation:Se="horizontal",shiftStep:ze=10,size:Le="medium",step:be=1,scale:Je=pk,slotProps:ke,slots:pe,track:et="normal",valueLabelDisplay:we="off",valueLabelFormat:Xe=pk}=Q,er=An(Q,XV),Oe=ne({},Q,{isRtl:te,max:Ee,min:J,classes:ct,disabled:V,disableSwap:U,orientation:Se,marks:F,color:Ue,size:Le,step:be,shiftStep:ze,scale:Je,track:et,valueLabelDisplay:we,valueLabelFormat:Xe}),{axisProps:ut,getRootProps:ln,getHiddenInputProps:Mt,getThumbProps:xe,open:We,active:Fr,axis:tn,focusedThumbIndex:ee,range:G,dragging:me,marks:Fe,values:Be,trackOffset:Ie,trackLeap:Ln,getThumbStyle:Bn}=jV(ne({},Oe,{rootRef:n}));Oe.marked=Fe.length>0&&Fe.some(Ot=>Ot.label),Oe.dragging=me,Oe.focusedThumbIndex=ee;const Ge=nU(Oe),vn=(r=(i=pe==null?void 0:pe.root)!=null?i:re.Root)!=null?r:GV,Qi=(o=(s=pe==null?void 0:pe.rail)!=null?s:re.Rail)!=null?o:qV,ad=(l=(c=pe==null?void 0:pe.track)!=null?c:re.Track)!=null?l:ZV,ld=(d=(f=pe==null?void 0:pe.thumb)!=null?f:re.Thumb)!=null?d:QV,wl=(g=(m=pe==null?void 0:pe.valueLabel)!=null?m:re.ValueLabel)!=null?g:JV,Us=(x=(w=pe==null?void 0:pe.mark)!=null?w:re.Mark)!=null?x:eU,_l=(_=(v=pe==null?void 0:pe.markLabel)!=null?v:re.MarkLabel)!=null?_:tU,cd=(b=(S=pe==null?void 0:pe.input)!=null?S:re.Input)!=null?b:"input",Sl=(C=ke==null?void 0:ke.root)!=null?C:de.root,Pg=(E=ke==null?void 0:ke.rail)!=null?E:de.rail,Ys=(T=ke==null?void 0:ke.track)!=null?T:de.track,kl=(N=ke==null?void 0:ke.thumb)!=null?N:de.thumb,Cl=(L=ke==null?void 0:ke.valueLabel)!=null?L:de.valueLabel,Eg=(z=ke==null?void 0:ke.mark)!=null?z:de.mark,Pl=(B=ke==null?void 0:ke.markLabel)!=null?B:de.markLabel,Mg=(H=ke==null?void 0:ke.input)!=null?H:de.input,El=lo({elementType:vn,getSlotProps:ln,externalSlotProps:Sl,externalForwardedProps:er,additionalProps:ne({},HV(vn)&&{as:ge}),ownerState:ne({},Oe,Sl==null?void 0:Sl.ownerState),className:[Ge.root,Z]}),Og=lo({elementType:Qi,externalSlotProps:Pg,ownerState:Oe,className:Ge.rail}),Rg=lo({elementType:ad,externalSlotProps:Ys,additionalProps:{style:ne({},ut[tn].offset(Ie),ut[tn].leap(Ln))},ownerState:ne({},Oe,Ys==null?void 0:Ys.ownerState),className:Ge.track}),Ml=lo({elementType:ld,getSlotProps:xe,externalSlotProps:kl,ownerState:ne({},Oe,kl==null?void 0:kl.ownerState),className:Ge.thumb}),Tg=lo({elementType:wl,externalSlotProps:Cl,ownerState:ne({},Oe,Cl==null?void 0:Cl.ownerState),className:Ge.valueLabel}),Ol=lo({elementType:Us,externalSlotProps:Eg,ownerState:Oe,className:Ge.mark}),Rl=lo({elementType:_l,externalSlotProps:Pl,ownerState:Oe,className:Ge.markLabel}),Ag=lo({elementType:cd,getSlotProps:Mt,externalSlotProps:Mg,ownerState:Oe});return O(vn,ne({},El,{children:[p(Qi,ne({},Og)),p(ad,ne({},Rg)),Fe.filter(Ot=>Ot.value>=J&&Ot.value<=Ee).map((Ot,Kt)=>{const Tl=ep(Ot.value,J,Ee),Ks=ut[tn].offset(Tl);let Br;return et===!1?Br=Be.indexOf(Ot.value)!==-1:Br=et==="normal"&&(G?Ot.value>=Be[0]&&Ot.value<=Be[Be.length-1]:Ot.value<=Be[0])||et==="inverted"&&(G?Ot.value<=Be[0]||Ot.value>=Be[Be.length-1]:Ot.value>=Be[0]),O(R.exports.Fragment,{children:[p(Us,ne({"data-index":Kt},Ol,!Wc(Us)&&{markActive:Br},{style:ne({},Ks,Ol.style),className:Xt(Ol.className,Br&&Ge.markActive)})),Ot.label!=null?p(_l,ne({"aria-hidden":!0,"data-index":Kt},Rl,!Wc(_l)&&{markLabelActive:Br},{style:ne({},Ks,Rl.style),className:Xt(Ge.markLabel,Rl.className,Br&&Ge.markLabelActive),children:Ot.label})):null]},Kt)}),Be.map((Ot,Kt)=>{const Tl=ep(Ot,J,Ee),Ks=ut[tn].offset(Tl),Br=we==="off"?rU:wl;return p(Br,ne({},!Wc(Br)&&{valueLabelFormat:Xe,valueLabelDisplay:we,value:typeof Xe=="function"?Xe(Je(Ot),Kt):Xe,index:Kt,open:We===Kt||Fr===Kt||we==="on",disabled:V},Tg,{children:p(ld,ne({"data-index":Kt},Ml,{className:Xt(Ge.thumb,Ml.className,Fr===Kt&&Ge.active,ee===Kt&&Ge.focusVisible),style:ne({},Ks,Bn(Kt),Ml.style),children:p(cd,ne({"data-index":Kt,"aria-label":X?X(Kt):ae,"aria-valuenow":Je(Ot),"aria-labelledby":oe,"aria-valuetext":se?se(Je(Ot),Kt):ye,value:Be[Kt]},Ag))}))}),Kt)})]}))});var R0=iU;const oU=()=>p(qt,{children:O(Qn,{sx:{display:"flex",flexDirection:"column",gap:2,width:"100%",justifyContent:"center",marginTop:5},children:[p(Nt,{variant:"text",sx:{fontSize:"1rem"}}),p(Nt,{variant:"circular",width:60,height:60}),p(Nt,{variant:"h1",sx:{fontSize:"1rem"}}),p(Nt,{variant:"h1",sx:{fontSize:"1rem"}}),p(Nt,{variant:"rectangular",width:"100%",height:300}),p(Nt,{variant:"h1",sx:{fontSize:"1rem",width:"300px"}}),O(Qn,{sx:{display:"flex",flexDirection:"row",gap:3,width:"100%",justifyContent:"center",marginTop:4},children:[p(Nt,{variant:"rounded",width:210,height:60}),p(Nt,{variant:"rounded",width:210,height:60})]}),p(Nt,{variant:"h1",sx:{fontSize:"3rem"}}),p(Nt,{variant:"h1",sx:{fontSize:"3rem"}})]})}),sU=()=>p(qt,{children:[0,1,2,3,4,5].map(e=>O(Qn,{sx:{display:"flex",flexDirection:"column",gap:1,width:"100%"},children:[p(Nt,{variant:"rounded",width:230,height:85}),O(Qn,{sx:{pt:.5},children:[p(Nt,{}),p(Nt,{width:"60%"})]})]},e))}),aU=()=>p(qt,{children:[0,1,2,3,4,5].map(e=>O(Qn,{sx:{my:2},children:[p(Nt,{variant:"rounded",width:50,height:50}),O(Qn,{sx:{pt:.5},children:[p(Nt,{}),p(Nt,{width:"60%"})]})]},e))}),lU=()=>p(qt,{children:[0,1,2,3,4,5].map(e=>O(Qn,{sx:{display:"flex",alignItems:"justify-center",marginBottom:"30px"},children:[p(Qn,{sx:{width:60,height:60,marginRight:2},children:p(Nt,{variant:"rounded",width:60,height:60})}),O(Qn,{sx:{pt:.5},width:"100%",children:[p(Nt,{}),p(Nt,{width:"60%"})]})]},e))}),cU=()=>p(qt,{children:[0,1,2,3,4,5].map(e=>O(Qn,{sx:{display:"flex",flexDirection:"column",gap:1,width:"100%"},children:[p(Nt,{variant:"rounded",width:230,height:60}),O(Qn,{sx:{pt:.5},children:[p(Nt,{}),p(Nt,{width:"60%"})]})]},e))});he.div`
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
`;const GP=({schemes:e,loading:t})=>p(qt,{children:t?sU():e.map((n,r)=>p(nP,{scheme:n},r))}),uU=he.div`
  .quick-access-container {
    display: flex;
    overflow: auto;
    gap: 1.5rem;
    margin-top: 10px;

    .item {
      display: flex;
      min-width: 20rem;
      flex-direction: row;
      align-items: flex-start;
      gap: 1rem;
      border: 1px solid rgb(224, 224, 224);
      padding: 2rem;
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
`,qP=({loading:e})=>p(uU,{children:p("div",{className:"quick-access-container",children:e?cU():[{name:"SIP Calculator",url:"/return-calculator",logo:"sip-calc.webp",desc:"Easily calculate SIP returns and plan your investments."},{name:"Loan Calculator",url:"/loan",logo:"sip-calc.webp",desc:"Estimate loan payments and interest rates accurately."}].map((n,r)=>p("div",{className:"item",children:O(ft,{className:"link",to:n.url,children:[O("div",{className:"name",children:[p("img",{src:`./images/${n.logo}`,alt:""}),p("p",{children:n.name})]}),p("div",{className:"description",children:Jv(n.desc)})]})},r))})}),ZP=({collections:e,loading:t})=>p(qt,{children:t?aU():e.map((n,r)=>O(ft,{to:`/schemes/${n.url}`,children:[p("div",{className:"",children:p("img",{src:`./public/images/collection/${n.image}`,alt:""})}),p("div",{className:"name",children:n.name})]},r))}),dU=he.div`
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
`,fU=({activeFilter:e,onFilterChange:t})=>{const[n,r]=R.exports.useState(1),i=o=>{t(o),r(o==3?1:o+1)};return p(dU,{children:O("div",{className:"year-filters",children:[n===1&&p("button",{className:"filter-button",onClick:()=>i(1),children:"< > 1Y Returns"}),n===2&&p("button",{className:"filter-button",onClick:()=>i(2),children:"< > 3Y Returns"}),n===3&&p("button",{className:"filter-button",onClick:()=>i(0),children:"< > 5Y Returns"})]})})},hU=he.div`
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
`,td=({schemes:e,loading:t,customHeader:n})=>{const[r,i]=R.exports.useState(0),[o,s]=R.exports.useState(!1);return t===!1&&e.length===0&&s(!0),O(hU,{children:[p("div",{className:"schemes-header",children:n?p("h2",{children:n}):O(qt,{children:[p("h2",{children:"Mutual Funds"}),p(fU,{activeFilter:r,onFilterChange:i})]})}),t?lU():e.map((l,c)=>p(nP,{scheme:l},c))]})},pU=he.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .hide {
    display: none;
  }

  h2 {
    font-size: 3rem;
    text-transform: uppercase;
    margin: 2rem;
    text-align: center;
  }

  .amount-suggestion {
    display: flex;
    gap: 2rem;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
    margin: 2rem;
    .suggestion {
      cursor: pointer;
      &.active { 
        color: #9147ff;
      }
    }
  }

  .frequency {
    text-align: center;
    font-size: 1.4rem;
    margin-top: 4rem;

    select {
      padding: 1rem;
      font-size: 1.4rem;
    }
  }

  .order-status {
    text-align: center;
    margin-top: 4rem;
    font-size: 1.6rem;
    color: green;
  }

  input[type="text"],
  input[type="number"] {
    padding: 0px 10px;
    border: 0.2rem solid rgb(236, 236, 236);
    margin: 0.5rem;
    width: 25rem;
    height: 5rem;
    display: flex;
    font-size: 2.5rem;
    text-align: center;
    letter-spacing: 5px;
  }

  .actions {
    bottom: 0px;
    z-index: 10;
    width: 100%;
    color: white;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-evenly;
    gap: 1rem;
    padding: 2rem;
    left: 0;
    right: 0;
    max-width: 138rem;
    margin-left: auto;
    margin-right: auto;

    &.mobile {
      position: fixed;
    }

    button {
      padding: 1.5rem;
      border-radius: 10px;
      font-size: 1.6rem;
      line-height: 1.5rem;
      width: 50%;
      // display: inline-block;
    }
  }
`;/*!
 * @kurkle/color v0.3.2
 * https://github.com/kurkle/color#readme
 * (c) 2023 Jukka Kurkela
 * Released under the MIT License
 */function nd(e){return e+.5|0}const yo=(e,t,n)=>Math.max(Math.min(e,n),t);function wc(e){return yo(nd(e*2.55),0,255)}function Io(e){return yo(nd(e*255),0,255)}function Fi(e){return yo(nd(e/2.55)/100,0,1)}function gk(e){return yo(nd(e*100),0,100)}const kr={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},d1=[..."0123456789ABCDEF"],gU=e=>d1[e&15],mU=e=>d1[(e&240)>>4]+d1[e&15],kf=e=>(e&240)>>4===(e&15),vU=e=>kf(e.r)&&kf(e.g)&&kf(e.b)&&kf(e.a);function yU(e){var t=e.length,n;return e[0]==="#"&&(t===4||t===5?n={r:255&kr[e[1]]*17,g:255&kr[e[2]]*17,b:255&kr[e[3]]*17,a:t===5?kr[e[4]]*17:255}:(t===7||t===9)&&(n={r:kr[e[1]]<<4|kr[e[2]],g:kr[e[3]]<<4|kr[e[4]],b:kr[e[5]]<<4|kr[e[6]],a:t===9?kr[e[7]]<<4|kr[e[8]]:255})),n}const xU=(e,t)=>e<255?t(e):"";function bU(e){var t=vU(e)?gU:mU;return e?"#"+t(e.r)+t(e.g)+t(e.b)+xU(e.a,t):void 0}const wU=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function QP(e,t,n){const r=t*Math.min(n,1-n),i=(o,s=(o+e/30)%12)=>n-r*Math.max(Math.min(s-3,9-s,1),-1);return[i(0),i(8),i(4)]}function _U(e,t,n){const r=(i,o=(i+e/60)%6)=>n-n*t*Math.max(Math.min(o,4-o,1),0);return[r(5),r(3),r(1)]}function SU(e,t,n){const r=QP(e,1,.5);let i;for(t+n>1&&(i=1/(t+n),t*=i,n*=i),i=0;i<3;i++)r[i]*=1-t-n,r[i]+=t;return r}function kU(e,t,n,r,i){return e===i?(t-n)/r+(t<n?6:0):t===i?(n-e)/r+2:(e-t)/r+4}function kx(e){const n=e.r/255,r=e.g/255,i=e.b/255,o=Math.max(n,r,i),s=Math.min(n,r,i),l=(o+s)/2;let c,d,f;return o!==s&&(f=o-s,d=l>.5?f/(2-o-s):f/(o+s),c=kU(n,r,i,f,o),c=c*60+.5),[c|0,d||0,l]}function Cx(e,t,n,r){return(Array.isArray(t)?e(t[0],t[1],t[2]):e(t,n,r)).map(Io)}function Px(e,t,n){return Cx(QP,e,t,n)}function CU(e,t,n){return Cx(SU,e,t,n)}function PU(e,t,n){return Cx(_U,e,t,n)}function JP(e){return(e%360+360)%360}function EU(e){const t=wU.exec(e);let n=255,r;if(!t)return;t[5]!==r&&(n=t[6]?wc(+t[5]):Io(+t[5]));const i=JP(+t[2]),o=+t[3]/100,s=+t[4]/100;return t[1]==="hwb"?r=CU(i,o,s):t[1]==="hsv"?r=PU(i,o,s):r=Px(i,o,s),{r:r[0],g:r[1],b:r[2],a:n}}function MU(e,t){var n=kx(e);n[0]=JP(n[0]+t),n=Px(n),e.r=n[0],e.g=n[1],e.b=n[2]}function OU(e){if(!e)return;const t=kx(e),n=t[0],r=gk(t[1]),i=gk(t[2]);return e.a<255?`hsla(${n}, ${r}%, ${i}%, ${Fi(e.a)})`:`hsl(${n}, ${r}%, ${i}%)`}const mk={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},vk={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function RU(){const e={},t=Object.keys(vk),n=Object.keys(mk);let r,i,o,s,l;for(r=0;r<t.length;r++){for(s=l=t[r],i=0;i<n.length;i++)o=n[i],l=l.replace(o,mk[o]);o=parseInt(vk[s],16),e[l]=[o>>16&255,o>>8&255,o&255]}return e}let Cf;function TU(e){Cf||(Cf=RU(),Cf.transparent=[0,0,0,0]);const t=Cf[e.toLowerCase()];return t&&{r:t[0],g:t[1],b:t[2],a:t.length===4?t[3]:255}}const AU=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function NU(e){const t=AU.exec(e);let n=255,r,i,o;if(!!t){if(t[7]!==r){const s=+t[7];n=t[8]?wc(s):yo(s*255,0,255)}return r=+t[1],i=+t[3],o=+t[5],r=255&(t[2]?wc(r):yo(r,0,255)),i=255&(t[4]?wc(i):yo(i,0,255)),o=255&(t[6]?wc(o):yo(o,0,255)),{r,g:i,b:o,a:n}}}function LU(e){return e&&(e.a<255?`rgba(${e.r}, ${e.g}, ${e.b}, ${Fi(e.a)})`:`rgb(${e.r}, ${e.g}, ${e.b})`)}const T0=e=>e<=.0031308?e*12.92:Math.pow(e,1/2.4)*1.055-.055,ga=e=>e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4);function $U(e,t,n){const r=ga(Fi(e.r)),i=ga(Fi(e.g)),o=ga(Fi(e.b));return{r:Io(T0(r+n*(ga(Fi(t.r))-r))),g:Io(T0(i+n*(ga(Fi(t.g))-i))),b:Io(T0(o+n*(ga(Fi(t.b))-o))),a:e.a+n*(t.a-e.a)}}function Pf(e,t,n){if(e){let r=kx(e);r[t]=Math.max(0,Math.min(r[t]+r[t]*n,t===0?360:1)),r=Px(r),e.r=r[0],e.g=r[1],e.b=r[2]}}function eE(e,t){return e&&Object.assign(t||{},e)}function yk(e){var t={r:0,g:0,b:0,a:255};return Array.isArray(e)?e.length>=3&&(t={r:e[0],g:e[1],b:e[2],a:255},e.length>3&&(t.a=Io(e[3]))):(t=eE(e,{r:0,g:0,b:0,a:1}),t.a=Io(t.a)),t}function IU(e){return e.charAt(0)==="r"?NU(e):EU(e)}class _u{constructor(t){if(t instanceof _u)return t;const n=typeof t;let r;n==="object"?r=yk(t):n==="string"&&(r=yU(t)||TU(t)||IU(t)),this._rgb=r,this._valid=!!r}get valid(){return this._valid}get rgb(){var t=eE(this._rgb);return t&&(t.a=Fi(t.a)),t}set rgb(t){this._rgb=yk(t)}rgbString(){return this._valid?LU(this._rgb):void 0}hexString(){return this._valid?bU(this._rgb):void 0}hslString(){return this._valid?OU(this._rgb):void 0}mix(t,n){if(t){const r=this.rgb,i=t.rgb;let o;const s=n===o?.5:n,l=2*s-1,c=r.a-i.a,d=((l*c===-1?l:(l+c)/(1+l*c))+1)/2;o=1-d,r.r=255&d*r.r+o*i.r+.5,r.g=255&d*r.g+o*i.g+.5,r.b=255&d*r.b+o*i.b+.5,r.a=s*r.a+(1-s)*i.a,this.rgb=r}return this}interpolate(t,n){return t&&(this._rgb=$U(this._rgb,t._rgb,n)),this}clone(){return new _u(this.rgb)}alpha(t){return this._rgb.a=Io(t),this}clearer(t){const n=this._rgb;return n.a*=1-t,this}greyscale(){const t=this._rgb,n=nd(t.r*.3+t.g*.59+t.b*.11);return t.r=t.g=t.b=n,this}opaquer(t){const n=this._rgb;return n.a*=1+t,this}negate(){const t=this._rgb;return t.r=255-t.r,t.g=255-t.g,t.b=255-t.b,this}lighten(t){return Pf(this._rgb,2,t),this}darken(t){return Pf(this._rgb,2,-t),this}saturate(t){return Pf(this._rgb,1,t),this}desaturate(t){return Pf(this._rgb,1,-t),this}rotate(t){return MU(this._rgb,t),this}}/*!
 * Chart.js v4.4.3
 * https://www.chartjs.org
 * (c) 2024 Chart.js Contributors
 * Released under the MIT License
 */function Li(){}const DU=(()=>{let e=0;return()=>e++})();function Ze(e){return e===null||typeof e=="undefined"}function xt(e){if(Array.isArray&&Array.isArray(e))return!0;const t=Object.prototype.toString.call(e);return t.slice(0,7)==="[object"&&t.slice(-6)==="Array]"}function Ve(e){return e!==null&&Object.prototype.toString.call(e)==="[object Object]"}function Dt(e){return(typeof e=="number"||e instanceof Number)&&isFinite(+e)}function ar(e,t){return Dt(e)?e:t}function Ae(e,t){return typeof e=="undefined"?t:e}const zU=(e,t)=>typeof e=="string"&&e.endsWith("%")?parseFloat(e)/100:+e/t,tE=(e,t)=>typeof e=="string"&&e.endsWith("%")?parseFloat(e)/100*t:+e;function mt(e,t,n){if(e&&typeof e.call=="function")return e.apply(n,t)}function st(e,t,n,r){let i,o,s;if(xt(e))if(o=e.length,r)for(i=o-1;i>=0;i--)t.call(n,e[i],i);else for(i=0;i<o;i++)t.call(n,e[i],i);else if(Ve(e))for(s=Object.keys(e),o=s.length,i=0;i<o;i++)t.call(n,e[s[i]],s[i])}function tp(e,t){let n,r,i,o;if(!e||!t||e.length!==t.length)return!1;for(n=0,r=e.length;n<r;++n)if(i=e[n],o=t[n],i.datasetIndex!==o.datasetIndex||i.index!==o.index)return!1;return!0}function np(e){if(xt(e))return e.map(np);if(Ve(e)){const t=Object.create(null),n=Object.keys(e),r=n.length;let i=0;for(;i<r;++i)t[n[i]]=np(e[n[i]]);return t}return e}function nE(e){return["__proto__","prototype","constructor"].indexOf(e)===-1}function FU(e,t,n,r){if(!nE(e))return;const i=t[e],o=n[e];Ve(i)&&Ve(o)?Su(i,o,r):t[e]=np(o)}function Su(e,t,n){const r=xt(t)?t:[t],i=r.length;if(!Ve(e))return e;n=n||{};const o=n.merger||FU;let s;for(let l=0;l<i;++l){if(s=r[l],!Ve(s))continue;const c=Object.keys(s);for(let d=0,f=c.length;d<f;++d)o(c[d],e,s,n)}return e}function Hc(e,t){return Su(e,t,{merger:BU})}function BU(e,t,n){if(!nE(e))return;const r=t[e],i=n[e];Ve(r)&&Ve(i)?Hc(r,i):Object.prototype.hasOwnProperty.call(t,e)||(t[e]=np(i))}const xk={"":e=>e,x:e=>e.x,y:e=>e.y};function jU(e){const t=e.split("."),n=[];let r="";for(const i of t)r+=i,r.endsWith("\\")?r=r.slice(0,-1)+".":(n.push(r),r="");return n}function WU(e){const t=jU(e);return n=>{for(const r of t){if(r==="")break;n=n&&n[r]}return n}}function Uo(e,t){return(xk[t]||(xk[t]=WU(t)))(e)}function Ex(e){return e.charAt(0).toUpperCase()+e.slice(1)}const ku=e=>typeof e!="undefined",Yo=e=>typeof e=="function",bk=(e,t)=>{if(e.size!==t.size)return!1;for(const n of e)if(!t.has(n))return!1;return!0};function HU(e){return e.type==="mouseup"||e.type==="click"||e.type==="contextmenu"}const _t=Math.PI,wt=2*_t,VU=wt+_t,rp=Number.POSITIVE_INFINITY,UU=_t/180,Wt=_t/2,ls=_t/4,wk=_t*2/3,xo=Math.log10,wi=Math.sign;function Vc(e,t,n){return Math.abs(e-t)<n}function _k(e){const t=Math.round(e);e=Vc(e,t,e/1e3)?t:e;const n=Math.pow(10,Math.floor(xo(e))),r=e/n;return(r<=1?1:r<=2?2:r<=5?5:10)*n}function YU(e){const t=[],n=Math.sqrt(e);let r;for(r=1;r<n;r++)e%r===0&&(t.push(r),t.push(e/r));return n===(n|0)&&t.push(n),t.sort((i,o)=>i-o).pop(),t}function tl(e){return!isNaN(parseFloat(e))&&isFinite(e)}function KU(e,t){const n=Math.round(e);return n-t<=e&&n+t>=e}function rE(e,t,n){let r,i,o;for(r=0,i=e.length;r<i;r++)o=e[r][n],isNaN(o)||(t.min=Math.min(t.min,o),t.max=Math.max(t.max,o))}function Zr(e){return e*(_t/180)}function Mx(e){return e*(180/_t)}function Sk(e){if(!Dt(e))return;let t=1,n=0;for(;Math.round(e*t)/t!==e;)t*=10,n++;return n}function iE(e,t){const n=t.x-e.x,r=t.y-e.y,i=Math.sqrt(n*n+r*r);let o=Math.atan2(r,n);return o<-.5*_t&&(o+=wt),{angle:o,distance:i}}function f1(e,t){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}function XU(e,t){return(e-t+VU)%wt-_t}function lr(e){return(e%wt+wt)%wt}function Cu(e,t,n,r){const i=lr(e),o=lr(t),s=lr(n),l=lr(o-i),c=lr(s-i),d=lr(i-o),f=lr(i-s);return i===o||i===s||r&&o===s||l>c&&d<f}function on(e,t,n){return Math.max(t,Math.min(n,e))}function GU(e){return on(e,-32768,32767)}function Hi(e,t,n,r=1e-6){return e>=Math.min(t,n)-r&&e<=Math.max(t,n)+r}function Ox(e,t,n){n=n||(s=>e[s]<t);let r=e.length-1,i=0,o;for(;r-i>1;)o=i+r>>1,n(o)?i=o:r=o;return{lo:i,hi:r}}const Vi=(e,t,n,r)=>Ox(e,n,r?i=>{const o=e[i][t];return o<n||o===n&&e[i+1][t]===n}:i=>e[i][t]<n),qU=(e,t,n)=>Ox(e,n,r=>e[r][t]>=n);function ZU(e,t,n){let r=0,i=e.length;for(;r<i&&e[r]<t;)r++;for(;i>r&&e[i-1]>n;)i--;return r>0||i<e.length?e.slice(r,i):e}const oE=["push","pop","shift","splice","unshift"];function QU(e,t){if(e._chartjs){e._chartjs.listeners.push(t);return}Object.defineProperty(e,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[t]}}),oE.forEach(n=>{const r="_onData"+Ex(n),i=e[n];Object.defineProperty(e,n,{configurable:!0,enumerable:!1,value(...o){const s=i.apply(this,o);return e._chartjs.listeners.forEach(l=>{typeof l[r]=="function"&&l[r](...o)}),s}})})}function kk(e,t){const n=e._chartjs;if(!n)return;const r=n.listeners,i=r.indexOf(t);i!==-1&&r.splice(i,1),!(r.length>0)&&(oE.forEach(o=>{delete e[o]}),delete e._chartjs)}function sE(e){const t=new Set(e);return t.size===e.length?e:Array.from(t)}const aE=function(){return typeof window=="undefined"?function(e){return e()}:window.requestAnimationFrame}();function lE(e,t){let n=[],r=!1;return function(...i){n=i,r||(r=!0,aE.call(window,()=>{r=!1,e.apply(t,n)}))}}function JU(e,t){let n;return function(...r){return t?(clearTimeout(n),n=setTimeout(e,t,r)):e.apply(this,r),t}}const Rx=e=>e==="start"?"left":e==="end"?"right":"center",_n=(e,t,n)=>e==="start"?t:e==="end"?n:(t+n)/2,eY=(e,t,n,r)=>e===(r?"left":"right")?n:e==="center"?(t+n)/2:t;function cE(e,t,n){const r=t.length;let i=0,o=r;if(e._sorted){const{iScale:s,_parsed:l}=e,c=s.axis,{min:d,max:f,minDefined:g,maxDefined:m}=s.getUserBounds();g&&(i=on(Math.min(Vi(l,c,d).lo,n?r:Vi(t,c,s.getPixelForValue(d)).lo),0,r-1)),m?o=on(Math.max(Vi(l,s.axis,f,!0).hi+1,n?0:Vi(t,c,s.getPixelForValue(f),!0).hi+1),i,r)-i:o=r-i}return{start:i,count:o}}function uE(e){const{xScale:t,yScale:n,_scaleRanges:r}=e,i={xmin:t.min,xmax:t.max,ymin:n.min,ymax:n.max};if(!r)return e._scaleRanges=i,!0;const o=r.xmin!==t.min||r.xmax!==t.max||r.ymin!==n.min||r.ymax!==n.max;return Object.assign(r,i),o}const Ef=e=>e===0||e===1,Ck=(e,t,n)=>-(Math.pow(2,10*(e-=1))*Math.sin((e-t)*wt/n)),Pk=(e,t,n)=>Math.pow(2,-10*e)*Math.sin((e-t)*wt/n)+1,Uc={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>-e*(e-2),easeInOutQuad:e=>(e/=.5)<1?.5*e*e:-.5*(--e*(e-2)-1),easeInCubic:e=>e*e*e,easeOutCubic:e=>(e-=1)*e*e+1,easeInOutCubic:e=>(e/=.5)<1?.5*e*e*e:.5*((e-=2)*e*e+2),easeInQuart:e=>e*e*e*e,easeOutQuart:e=>-((e-=1)*e*e*e-1),easeInOutQuart:e=>(e/=.5)<1?.5*e*e*e*e:-.5*((e-=2)*e*e*e-2),easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>(e-=1)*e*e*e*e+1,easeInOutQuint:e=>(e/=.5)<1?.5*e*e*e*e*e:.5*((e-=2)*e*e*e*e+2),easeInSine:e=>-Math.cos(e*Wt)+1,easeOutSine:e=>Math.sin(e*Wt),easeInOutSine:e=>-.5*(Math.cos(_t*e)-1),easeInExpo:e=>e===0?0:Math.pow(2,10*(e-1)),easeOutExpo:e=>e===1?1:-Math.pow(2,-10*e)+1,easeInOutExpo:e=>Ef(e)?e:e<.5?.5*Math.pow(2,10*(e*2-1)):.5*(-Math.pow(2,-10*(e*2-1))+2),easeInCirc:e=>e>=1?e:-(Math.sqrt(1-e*e)-1),easeOutCirc:e=>Math.sqrt(1-(e-=1)*e),easeInOutCirc:e=>(e/=.5)<1?-.5*(Math.sqrt(1-e*e)-1):.5*(Math.sqrt(1-(e-=2)*e)+1),easeInElastic:e=>Ef(e)?e:Ck(e,.075,.3),easeOutElastic:e=>Ef(e)?e:Pk(e,.075,.3),easeInOutElastic(e){return Ef(e)?e:e<.5?.5*Ck(e*2,.1125,.45):.5+.5*Pk(e*2-1,.1125,.45)},easeInBack(e){return e*e*((1.70158+1)*e-1.70158)},easeOutBack(e){return(e-=1)*e*((1.70158+1)*e+1.70158)+1},easeInOutBack(e){let t=1.70158;return(e/=.5)<1?.5*(e*e*(((t*=1.525)+1)*e-t)):.5*((e-=2)*e*(((t*=1.525)+1)*e+t)+2)},easeInBounce:e=>1-Uc.easeOutBounce(1-e),easeOutBounce(e){return e<1/2.75?7.5625*e*e:e<2/2.75?7.5625*(e-=1.5/2.75)*e+.75:e<2.5/2.75?7.5625*(e-=2.25/2.75)*e+.9375:7.5625*(e-=2.625/2.75)*e+.984375},easeInOutBounce:e=>e<.5?Uc.easeInBounce(e*2)*.5:Uc.easeOutBounce(e*2-1)*.5+.5};function Tx(e){if(e&&typeof e=="object"){const t=e.toString();return t==="[object CanvasPattern]"||t==="[object CanvasGradient]"}return!1}function Ek(e){return Tx(e)?e:new _u(e)}function A0(e){return Tx(e)?e:new _u(e).saturate(.5).darken(.1).hexString()}const tY=["x","y","borderWidth","radius","tension"],nY=["color","borderColor","backgroundColor"];function rY(e){e.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),e.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:t=>t!=="onProgress"&&t!=="onComplete"&&t!=="fn"}),e.set("animations",{colors:{type:"color",properties:nY},numbers:{type:"number",properties:tY}}),e.describe("animations",{_fallback:"animation"}),e.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:t=>t|0}}}})}function iY(e){e.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})}const Mk=new Map;function oY(e,t){t=t||{};const n=e+JSON.stringify(t);let r=Mk.get(n);return r||(r=new Intl.NumberFormat(e,t),Mk.set(n,r)),r}function rd(e,t,n){return oY(t,n).format(e)}const dE={values(e){return xt(e)?e:""+e},numeric(e,t,n){if(e===0)return"0";const r=this.chart.options.locale;let i,o=e;if(n.length>1){const d=Math.max(Math.abs(n[0].value),Math.abs(n[n.length-1].value));(d<1e-4||d>1e15)&&(i="scientific"),o=sY(e,n)}const s=xo(Math.abs(o)),l=isNaN(s)?1:Math.max(Math.min(-1*Math.floor(s),20),0),c={notation:i,minimumFractionDigits:l,maximumFractionDigits:l};return Object.assign(c,this.options.ticks.format),rd(e,r,c)},logarithmic(e,t,n){if(e===0)return"0";const r=n[t].significand||e/Math.pow(10,Math.floor(xo(e)));return[1,2,3,5,10,15].includes(r)||t>.8*n.length?dE.numeric.call(this,e,t,n):""}};function sY(e,t){let n=t.length>3?t[2].value-t[1].value:t[1].value-t[0].value;return Math.abs(n)>=1&&e!==Math.floor(e)&&(n=e-Math.floor(e)),n}var yg={formatters:dE};function aY(e){e.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",clip:!0,grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(t,n)=>n.lineWidth,tickColor:(t,n)=>n.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:yg.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),e.route("scale.ticks","color","","color"),e.route("scale.grid","color","","borderColor"),e.route("scale.border","color","","borderColor"),e.route("scale.title","color","","color"),e.describe("scale",{_fallback:!1,_scriptable:t=>!t.startsWith("before")&&!t.startsWith("after")&&t!=="callback"&&t!=="parser",_indexable:t=>t!=="borderDash"&&t!=="tickBorderDash"&&t!=="dash"}),e.describe("scales",{_fallback:"scale"}),e.describe("scale.ticks",{_scriptable:t=>t!=="backdropPadding"&&t!=="callback",_indexable:t=>t!=="backdropPadding"})}const $s=Object.create(null),h1=Object.create(null);function Yc(e,t){if(!t)return e;const n=t.split(".");for(let r=0,i=n.length;r<i;++r){const o=n[r];e=e[o]||(e[o]=Object.create(null))}return e}function N0(e,t,n){return typeof t=="string"?Su(Yc(e,t),n):Su(Yc(e,""),t)}class lY{constructor(t,n){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=r=>r.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(r,i)=>A0(i.backgroundColor),this.hoverBorderColor=(r,i)=>A0(i.borderColor),this.hoverColor=(r,i)=>A0(i.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(t),this.apply(n)}set(t,n){return N0(this,t,n)}get(t){return Yc(this,t)}describe(t,n){return N0(h1,t,n)}override(t,n){return N0($s,t,n)}route(t,n,r,i){const o=Yc(this,t),s=Yc(this,r),l="_"+n;Object.defineProperties(o,{[l]:{value:o[n],writable:!0},[n]:{enumerable:!0,get(){const c=this[l],d=s[i];return Ve(c)?Object.assign({},d,c):Ae(c,d)},set(c){this[l]=c}}})}apply(t){t.forEach(n=>n(this))}}var zt=new lY({_scriptable:e=>!e.startsWith("on"),_indexable:e=>e!=="events",hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}},[rY,iY,aY]);function cY(e){return!e||Ze(e.size)||Ze(e.family)?null:(e.style?e.style+" ":"")+(e.weight?e.weight+" ":"")+e.size+"px "+e.family}function ip(e,t,n,r,i){let o=t[i];return o||(o=t[i]=e.measureText(i).width,n.push(i)),o>r&&(r=o),r}function uY(e,t,n,r){r=r||{};let i=r.data=r.data||{},o=r.garbageCollect=r.garbageCollect||[];r.font!==t&&(i=r.data={},o=r.garbageCollect=[],r.font=t),e.save(),e.font=t;let s=0;const l=n.length;let c,d,f,g,m;for(c=0;c<l;c++)if(g=n[c],g!=null&&!xt(g))s=ip(e,i,o,s,g);else if(xt(g))for(d=0,f=g.length;d<f;d++)m=g[d],m!=null&&!xt(m)&&(s=ip(e,i,o,s,m));e.restore();const x=o.length/2;if(x>n.length){for(c=0;c<x;c++)delete i[o[c]];o.splice(0,x)}return s}function cs(e,t,n){const r=e.currentDevicePixelRatio,i=n!==0?Math.max(n/2,.5):0;return Math.round((t-i)*r)/r+i}function Ok(e,t){!t&&!e||(t=t||e.getContext("2d"),t.save(),t.resetTransform(),t.clearRect(0,0,e.width,e.height),t.restore())}function p1(e,t,n,r){fE(e,t,n,r,null)}function fE(e,t,n,r,i){let o,s,l,c,d,f,g,m;const x=t.pointStyle,w=t.rotation,_=t.radius;let v=(w||0)*UU;if(x&&typeof x=="object"&&(o=x.toString(),o==="[object HTMLImageElement]"||o==="[object HTMLCanvasElement]")){e.save(),e.translate(n,r),e.rotate(v),e.drawImage(x,-x.width/2,-x.height/2,x.width,x.height),e.restore();return}if(!(isNaN(_)||_<=0)){switch(e.beginPath(),x){default:i?e.ellipse(n,r,i/2,_,0,0,wt):e.arc(n,r,_,0,wt),e.closePath();break;case"triangle":f=i?i/2:_,e.moveTo(n+Math.sin(v)*f,r-Math.cos(v)*_),v+=wk,e.lineTo(n+Math.sin(v)*f,r-Math.cos(v)*_),v+=wk,e.lineTo(n+Math.sin(v)*f,r-Math.cos(v)*_),e.closePath();break;case"rectRounded":d=_*.516,c=_-d,s=Math.cos(v+ls)*c,g=Math.cos(v+ls)*(i?i/2-d:c),l=Math.sin(v+ls)*c,m=Math.sin(v+ls)*(i?i/2-d:c),e.arc(n-g,r-l,d,v-_t,v-Wt),e.arc(n+m,r-s,d,v-Wt,v),e.arc(n+g,r+l,d,v,v+Wt),e.arc(n-m,r+s,d,v+Wt,v+_t),e.closePath();break;case"rect":if(!w){c=Math.SQRT1_2*_,f=i?i/2:c,e.rect(n-f,r-c,2*f,2*c);break}v+=ls;case"rectRot":g=Math.cos(v)*(i?i/2:_),s=Math.cos(v)*_,l=Math.sin(v)*_,m=Math.sin(v)*(i?i/2:_),e.moveTo(n-g,r-l),e.lineTo(n+m,r-s),e.lineTo(n+g,r+l),e.lineTo(n-m,r+s),e.closePath();break;case"crossRot":v+=ls;case"cross":g=Math.cos(v)*(i?i/2:_),s=Math.cos(v)*_,l=Math.sin(v)*_,m=Math.sin(v)*(i?i/2:_),e.moveTo(n-g,r-l),e.lineTo(n+g,r+l),e.moveTo(n+m,r-s),e.lineTo(n-m,r+s);break;case"star":g=Math.cos(v)*(i?i/2:_),s=Math.cos(v)*_,l=Math.sin(v)*_,m=Math.sin(v)*(i?i/2:_),e.moveTo(n-g,r-l),e.lineTo(n+g,r+l),e.moveTo(n+m,r-s),e.lineTo(n-m,r+s),v+=ls,g=Math.cos(v)*(i?i/2:_),s=Math.cos(v)*_,l=Math.sin(v)*_,m=Math.sin(v)*(i?i/2:_),e.moveTo(n-g,r-l),e.lineTo(n+g,r+l),e.moveTo(n+m,r-s),e.lineTo(n-m,r+s);break;case"line":s=i?i/2:Math.cos(v)*_,l=Math.sin(v)*_,e.moveTo(n-s,r-l),e.lineTo(n+s,r+l);break;case"dash":e.moveTo(n,r),e.lineTo(n+Math.cos(v)*(i?i/2:_),r+Math.sin(v)*_);break;case!1:e.closePath();break}e.fill(),t.borderWidth>0&&e.stroke()}}function Ui(e,t,n){return n=n||.5,!t||e&&e.x>t.left-n&&e.x<t.right+n&&e.y>t.top-n&&e.y<t.bottom+n}function xg(e,t){e.save(),e.beginPath(),e.rect(t.left,t.top,t.right-t.left,t.bottom-t.top),e.clip()}function bg(e){e.restore()}function dY(e,t,n,r,i){if(!t)return e.lineTo(n.x,n.y);if(i==="middle"){const o=(t.x+n.x)/2;e.lineTo(o,t.y),e.lineTo(o,n.y)}else i==="after"!=!!r?e.lineTo(t.x,n.y):e.lineTo(n.x,t.y);e.lineTo(n.x,n.y)}function fY(e,t,n,r){if(!t)return e.lineTo(n.x,n.y);e.bezierCurveTo(r?t.cp1x:t.cp2x,r?t.cp1y:t.cp2y,r?n.cp2x:n.cp1x,r?n.cp2y:n.cp1y,n.x,n.y)}function hY(e,t){t.translation&&e.translate(t.translation[0],t.translation[1]),Ze(t.rotation)||e.rotate(t.rotation),t.color&&(e.fillStyle=t.color),t.textAlign&&(e.textAlign=t.textAlign),t.textBaseline&&(e.textBaseline=t.textBaseline)}function pY(e,t,n,r,i){if(i.strikethrough||i.underline){const o=e.measureText(r),s=t-o.actualBoundingBoxLeft,l=t+o.actualBoundingBoxRight,c=n-o.actualBoundingBoxAscent,d=n+o.actualBoundingBoxDescent,f=i.strikethrough?(c+d)/2:d;e.strokeStyle=e.fillStyle,e.beginPath(),e.lineWidth=i.decorationWidth||2,e.moveTo(s,f),e.lineTo(l,f),e.stroke()}}function gY(e,t){const n=e.fillStyle;e.fillStyle=t.color,e.fillRect(t.left,t.top,t.width,t.height),e.fillStyle=n}function Is(e,t,n,r,i,o={}){const s=xt(t)?t:[t],l=o.strokeWidth>0&&o.strokeColor!=="";let c,d;for(e.save(),e.font=i.string,hY(e,o),c=0;c<s.length;++c)d=s[c],o.backdrop&&gY(e,o.backdrop),l&&(o.strokeColor&&(e.strokeStyle=o.strokeColor),Ze(o.strokeWidth)||(e.lineWidth=o.strokeWidth),e.strokeText(d,n,r,o.maxWidth)),e.fillText(d,n,r,o.maxWidth),pY(e,n,r,d,o),r+=Number(i.lineHeight);e.restore()}function Pu(e,t){const{x:n,y:r,w:i,h:o,radius:s}=t;e.arc(n+s.topLeft,r+s.topLeft,s.topLeft,1.5*_t,_t,!0),e.lineTo(n,r+o-s.bottomLeft),e.arc(n+s.bottomLeft,r+o-s.bottomLeft,s.bottomLeft,_t,Wt,!0),e.lineTo(n+i-s.bottomRight,r+o),e.arc(n+i-s.bottomRight,r+o-s.bottomRight,s.bottomRight,Wt,0,!0),e.lineTo(n+i,r+s.topRight),e.arc(n+i-s.topRight,r+s.topRight,s.topRight,0,-Wt,!0),e.lineTo(n+s.topLeft,r)}const mY=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,vY=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function yY(e,t){const n=(""+e).match(mY);if(!n||n[1]==="normal")return t*1.2;switch(e=+n[2],n[3]){case"px":return e;case"%":e/=100;break}return t*e}const xY=e=>+e||0;function Ax(e,t){const n={},r=Ve(t),i=r?Object.keys(t):t,o=Ve(e)?r?s=>Ae(e[s],e[t[s]]):s=>e[s]:()=>e;for(const s of i)n[s]=xY(o(s));return n}function hE(e){return Ax(e,{top:"y",right:"x",bottom:"y",left:"x"})}function Ps(e){return Ax(e,["topLeft","topRight","bottomLeft","bottomRight"])}function Rn(e){const t=hE(e);return t.width=t.left+t.right,t.height=t.top+t.bottom,t}function en(e,t){e=e||{},t=t||zt.font;let n=Ae(e.size,t.size);typeof n=="string"&&(n=parseInt(n,10));let r=Ae(e.style,t.style);r&&!(""+r).match(vY)&&(console.warn('Invalid font style specified: "'+r+'"'),r=void 0);const i={family:Ae(e.family,t.family),lineHeight:yY(Ae(e.lineHeight,t.lineHeight),n),size:n,style:r,weight:Ae(e.weight,t.weight),string:""};return i.string=cY(i),i}function _c(e,t,n,r){let i=!0,o,s,l;for(o=0,s=e.length;o<s;++o)if(l=e[o],l!==void 0&&(t!==void 0&&typeof l=="function"&&(l=l(t),i=!1),n!==void 0&&xt(l)&&(l=l[n%l.length],i=!1),l!==void 0))return r&&!i&&(r.cacheable=!1),l}function bY(e,t,n){const{min:r,max:i}=e,o=tE(t,(i-r)/2),s=(l,c)=>n&&l===0?0:l+c;return{min:s(r,-Math.abs(o)),max:s(i,o)}}function Zo(e,t){return Object.assign(Object.create(e),t)}function Nx(e,t=[""],n,r,i=()=>e[0]){const o=n||e;typeof r=="undefined"&&(r=vE("_fallback",e));const s={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:e,_rootScopes:o,_fallback:r,_getTarget:i,override:l=>Nx([l,...e],t,o,r)};return new Proxy(s,{deleteProperty(l,c){return delete l[c],delete l._keys,delete e[0][c],!0},get(l,c){return gE(l,c,()=>MY(c,t,e,l))},getOwnPropertyDescriptor(l,c){return Reflect.getOwnPropertyDescriptor(l._scopes[0],c)},getPrototypeOf(){return Reflect.getPrototypeOf(e[0])},has(l,c){return Tk(l).includes(c)},ownKeys(l){return Tk(l)},set(l,c,d){const f=l._storage||(l._storage=i());return l[c]=f[c]=d,delete l._keys,!0}})}function nl(e,t,n,r){const i={_cacheable:!1,_proxy:e,_context:t,_subProxy:n,_stack:new Set,_descriptors:pE(e,r),setContext:o=>nl(e,o,n,r),override:o=>nl(e.override(o),t,n,r)};return new Proxy(i,{deleteProperty(o,s){return delete o[s],delete e[s],!0},get(o,s,l){return gE(o,s,()=>_Y(o,s,l))},getOwnPropertyDescriptor(o,s){return o._descriptors.allKeys?Reflect.has(e,s)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(e,s)},getPrototypeOf(){return Reflect.getPrototypeOf(e)},has(o,s){return Reflect.has(e,s)},ownKeys(){return Reflect.ownKeys(e)},set(o,s,l){return e[s]=l,delete o[s],!0}})}function pE(e,t={scriptable:!0,indexable:!0}){const{_scriptable:n=t.scriptable,_indexable:r=t.indexable,_allKeys:i=t.allKeys}=e;return{allKeys:i,scriptable:n,indexable:r,isScriptable:Yo(n)?n:()=>n,isIndexable:Yo(r)?r:()=>r}}const wY=(e,t)=>e?e+Ex(t):t,Lx=(e,t)=>Ve(t)&&e!=="adapters"&&(Object.getPrototypeOf(t)===null||t.constructor===Object);function gE(e,t,n){if(Object.prototype.hasOwnProperty.call(e,t)||t==="constructor")return e[t];const r=n();return e[t]=r,r}function _Y(e,t,n){const{_proxy:r,_context:i,_subProxy:o,_descriptors:s}=e;let l=r[t];return Yo(l)&&s.isScriptable(t)&&(l=SY(t,l,e,n)),xt(l)&&l.length&&(l=kY(t,l,e,s.isIndexable)),Lx(t,l)&&(l=nl(l,i,o&&o[t],s)),l}function SY(e,t,n,r){const{_proxy:i,_context:o,_subProxy:s,_stack:l}=n;if(l.has(e))throw new Error("Recursion detected: "+Array.from(l).join("->")+"->"+e);l.add(e);let c=t(o,s||r);return l.delete(e),Lx(e,c)&&(c=$x(i._scopes,i,e,c)),c}function kY(e,t,n,r){const{_proxy:i,_context:o,_subProxy:s,_descriptors:l}=n;if(typeof o.index!="undefined"&&r(e))return t[o.index%t.length];if(Ve(t[0])){const c=t,d=i._scopes.filter(f=>f!==c);t=[];for(const f of c){const g=$x(d,i,e,f);t.push(nl(g,o,s&&s[e],l))}}return t}function mE(e,t,n){return Yo(e)?e(t,n):e}const CY=(e,t)=>e===!0?t:typeof e=="string"?Uo(t,e):void 0;function PY(e,t,n,r,i){for(const o of t){const s=CY(n,o);if(s){e.add(s);const l=mE(s._fallback,n,i);if(typeof l!="undefined"&&l!==n&&l!==r)return l}else if(s===!1&&typeof r!="undefined"&&n!==r)return null}return!1}function $x(e,t,n,r){const i=t._rootScopes,o=mE(t._fallback,n,r),s=[...e,...i],l=new Set;l.add(r);let c=Rk(l,s,n,o||n,r);return c===null||typeof o!="undefined"&&o!==n&&(c=Rk(l,s,o,c,r),c===null)?!1:Nx(Array.from(l),[""],i,o,()=>EY(t,n,r))}function Rk(e,t,n,r,i){for(;n;)n=PY(e,t,n,r,i);return n}function EY(e,t,n){const r=e._getTarget();t in r||(r[t]={});const i=r[t];return xt(i)&&Ve(n)?n:i||{}}function MY(e,t,n,r){let i;for(const o of t)if(i=vE(wY(o,e),n),typeof i!="undefined")return Lx(e,i)?$x(n,r,e,i):i}function vE(e,t){for(const n of t){if(!n)continue;const r=n[e];if(typeof r!="undefined")return r}}function Tk(e){let t=e._keys;return t||(t=e._keys=OY(e._scopes)),t}function OY(e){const t=new Set;for(const n of e)for(const r of Object.keys(n).filter(i=>!i.startsWith("_")))t.add(r);return Array.from(t)}function yE(e,t,n,r){const{iScale:i}=e,{key:o="r"}=this._parsing,s=new Array(r);let l,c,d,f;for(l=0,c=r;l<c;++l)d=l+n,f=t[d],s[l]={r:i.parse(Uo(f,o),d)};return s}const RY=Number.EPSILON||1e-14,rl=(e,t)=>t<e.length&&!e[t].skip&&e[t],xE=e=>e==="x"?"y":"x";function TY(e,t,n,r){const i=e.skip?t:e,o=t,s=n.skip?t:n,l=f1(o,i),c=f1(s,o);let d=l/(l+c),f=c/(l+c);d=isNaN(d)?0:d,f=isNaN(f)?0:f;const g=r*d,m=r*f;return{previous:{x:o.x-g*(s.x-i.x),y:o.y-g*(s.y-i.y)},next:{x:o.x+m*(s.x-i.x),y:o.y+m*(s.y-i.y)}}}function AY(e,t,n){const r=e.length;let i,o,s,l,c,d=rl(e,0);for(let f=0;f<r-1;++f)if(c=d,d=rl(e,f+1),!(!c||!d)){if(Vc(t[f],0,RY)){n[f]=n[f+1]=0;continue}i=n[f]/t[f],o=n[f+1]/t[f],l=Math.pow(i,2)+Math.pow(o,2),!(l<=9)&&(s=3/Math.sqrt(l),n[f]=i*s*t[f],n[f+1]=o*s*t[f])}}function NY(e,t,n="x"){const r=xE(n),i=e.length;let o,s,l,c=rl(e,0);for(let d=0;d<i;++d){if(s=l,l=c,c=rl(e,d+1),!l)continue;const f=l[n],g=l[r];s&&(o=(f-s[n])/3,l[`cp1${n}`]=f-o,l[`cp1${r}`]=g-o*t[d]),c&&(o=(c[n]-f)/3,l[`cp2${n}`]=f+o,l[`cp2${r}`]=g+o*t[d])}}function LY(e,t="x"){const n=xE(t),r=e.length,i=Array(r).fill(0),o=Array(r);let s,l,c,d=rl(e,0);for(s=0;s<r;++s)if(l=c,c=d,d=rl(e,s+1),!!c){if(d){const f=d[t]-c[t];i[s]=f!==0?(d[n]-c[n])/f:0}o[s]=l?d?wi(i[s-1])!==wi(i[s])?0:(i[s-1]+i[s])/2:i[s-1]:i[s]}AY(e,i,o),NY(e,o,t)}function Mf(e,t,n){return Math.max(Math.min(e,n),t)}function $Y(e,t){let n,r,i,o,s,l=Ui(e[0],t);for(n=0,r=e.length;n<r;++n)s=o,o=l,l=n<r-1&&Ui(e[n+1],t),o&&(i=e[n],s&&(i.cp1x=Mf(i.cp1x,t.left,t.right),i.cp1y=Mf(i.cp1y,t.top,t.bottom)),l&&(i.cp2x=Mf(i.cp2x,t.left,t.right),i.cp2y=Mf(i.cp2y,t.top,t.bottom)))}function IY(e,t,n,r,i){let o,s,l,c;if(t.spanGaps&&(e=e.filter(d=>!d.skip)),t.cubicInterpolationMode==="monotone")LY(e,i);else{let d=r?e[e.length-1]:e[0];for(o=0,s=e.length;o<s;++o)l=e[o],c=TY(d,l,e[Math.min(o+1,s-(r?0:1))%s],t.tension),l.cp1x=c.previous.x,l.cp1y=c.previous.y,l.cp2x=c.next.x,l.cp2y=c.next.y,d=l}t.capBezierPoints&&$Y(e,n)}function Ix(){return typeof window!="undefined"&&typeof document!="undefined"}function Dx(e){let t=e.parentNode;return t&&t.toString()==="[object ShadowRoot]"&&(t=t.host),t}function op(e,t,n){let r;return typeof e=="string"?(r=parseInt(e,10),e.indexOf("%")!==-1&&(r=r/100*t.parentNode[n])):r=e,r}const wg=e=>e.ownerDocument.defaultView.getComputedStyle(e,null);function DY(e,t){return wg(e).getPropertyValue(t)}const zY=["top","right","bottom","left"];function Es(e,t,n){const r={};n=n?"-"+n:"";for(let i=0;i<4;i++){const o=zY[i];r[o]=parseFloat(e[t+"-"+o+n])||0}return r.width=r.left+r.right,r.height=r.top+r.bottom,r}const FY=(e,t,n)=>(e>0||t>0)&&(!n||!n.shadowRoot);function BY(e,t){const n=e.touches,r=n&&n.length?n[0]:e,{offsetX:i,offsetY:o}=r;let s=!1,l,c;if(FY(i,o,e.target))l=i,c=o;else{const d=t.getBoundingClientRect();l=r.clientX-d.left,c=r.clientY-d.top,s=!0}return{x:l,y:c,box:s}}function gs(e,t){if("native"in e)return e;const{canvas:n,currentDevicePixelRatio:r}=t,i=wg(n),o=i.boxSizing==="border-box",s=Es(i,"padding"),l=Es(i,"border","width"),{x:c,y:d,box:f}=BY(e,n),g=s.left+(f&&l.left),m=s.top+(f&&l.top);let{width:x,height:w}=t;return o&&(x-=s.width+l.width,w-=s.height+l.height),{x:Math.round((c-g)/x*n.width/r),y:Math.round((d-m)/w*n.height/r)}}function jY(e,t,n){let r,i;if(t===void 0||n===void 0){const o=e&&Dx(e);if(!o)t=e.clientWidth,n=e.clientHeight;else{const s=o.getBoundingClientRect(),l=wg(o),c=Es(l,"border","width"),d=Es(l,"padding");t=s.width-d.width-c.width,n=s.height-d.height-c.height,r=op(l.maxWidth,o,"clientWidth"),i=op(l.maxHeight,o,"clientHeight")}}return{width:t,height:n,maxWidth:r||rp,maxHeight:i||rp}}const Of=e=>Math.round(e*10)/10;function WY(e,t,n,r){const i=wg(e),o=Es(i,"margin"),s=op(i.maxWidth,e,"clientWidth")||rp,l=op(i.maxHeight,e,"clientHeight")||rp,c=jY(e,t,n);let{width:d,height:f}=c;if(i.boxSizing==="content-box"){const m=Es(i,"border","width"),x=Es(i,"padding");d-=x.width+m.width,f-=x.height+m.height}return d=Math.max(0,d-o.width),f=Math.max(0,r?d/r:f-o.height),d=Of(Math.min(d,s,c.maxWidth)),f=Of(Math.min(f,l,c.maxHeight)),d&&!f&&(f=Of(d/2)),(t!==void 0||n!==void 0)&&r&&c.height&&f>c.height&&(f=c.height,d=Of(Math.floor(f*r))),{width:d,height:f}}function Ak(e,t,n){const r=t||1,i=Math.floor(e.height*r),o=Math.floor(e.width*r);e.height=Math.floor(e.height),e.width=Math.floor(e.width);const s=e.canvas;return s.style&&(n||!s.style.height&&!s.style.width)&&(s.style.height=`${e.height}px`,s.style.width=`${e.width}px`),e.currentDevicePixelRatio!==r||s.height!==i||s.width!==o?(e.currentDevicePixelRatio=r,s.height=i,s.width=o,e.ctx.setTransform(r,0,0,r,0,0),!0):!1}const HY=function(){let e=!1;try{const t={get passive(){return e=!0,!1}};Ix()&&(window.addEventListener("test",null,t),window.removeEventListener("test",null,t))}catch{}return e}();function Nk(e,t){const n=DY(e,t),r=n&&n.match(/^(\d+)(\.\d+)?px$/);return r?+r[1]:void 0}function ms(e,t,n,r){return{x:e.x+n*(t.x-e.x),y:e.y+n*(t.y-e.y)}}function VY(e,t,n,r){return{x:e.x+n*(t.x-e.x),y:r==="middle"?n<.5?e.y:t.y:r==="after"?n<1?e.y:t.y:n>0?t.y:e.y}}function UY(e,t,n,r){const i={x:e.cp2x,y:e.cp2y},o={x:t.cp1x,y:t.cp1y},s=ms(e,i,n),l=ms(i,o,n),c=ms(o,t,n),d=ms(s,l,n),f=ms(l,c,n);return ms(d,f,n)}const YY=function(e,t){return{x(n){return e+e+t-n},setWidth(n){t=n},textAlign(n){return n==="center"?n:n==="right"?"left":"right"},xPlus(n,r){return n-r},leftForLtr(n,r){return n-r}}},KY=function(){return{x(e){return e},setWidth(e){},textAlign(e){return e},xPlus(e,t){return e+t},leftForLtr(e,t){return e}}};function Ua(e,t,n){return e?YY(t,n):KY()}function bE(e,t){let n,r;(t==="ltr"||t==="rtl")&&(n=e.canvas.style,r=[n.getPropertyValue("direction"),n.getPropertyPriority("direction")],n.setProperty("direction",t,"important"),e.prevTextDirection=r)}function wE(e,t){t!==void 0&&(delete e.prevTextDirection,e.canvas.style.setProperty("direction",t[0],t[1]))}function _E(e){return e==="angle"?{between:Cu,compare:XU,normalize:lr}:{between:Hi,compare:(t,n)=>t-n,normalize:t=>t}}function Lk({start:e,end:t,count:n,loop:r,style:i}){return{start:e%n,end:t%n,loop:r&&(t-e+1)%n===0,style:i}}function XY(e,t,n){const{property:r,start:i,end:o}=n,{between:s,normalize:l}=_E(r),c=t.length;let{start:d,end:f,loop:g}=e,m,x;if(g){for(d+=c,f+=c,m=0,x=c;m<x&&s(l(t[d%c][r]),i,o);++m)d--,f--;d%=c,f%=c}return f<d&&(f+=c),{start:d,end:f,loop:g,style:e.style}}function SE(e,t,n){if(!n)return[e];const{property:r,start:i,end:o}=n,s=t.length,{compare:l,between:c,normalize:d}=_E(r),{start:f,end:g,loop:m,style:x}=XY(e,t,n),w=[];let _=!1,v=null,b,S,C;const E=()=>c(i,C,b)&&l(i,C)!==0,T=()=>l(o,b)===0||c(o,C,b),N=()=>_||E(),L=()=>!_||T();for(let z=f,B=f;z<=g;++z)S=t[z%s],!S.skip&&(b=d(S[r]),b!==C&&(_=c(b,i,o),v===null&&N()&&(v=l(b,i)===0?z:B),v!==null&&L()&&(w.push(Lk({start:v,end:z,loop:m,count:s,style:x})),v=null),B=z,C=b));return v!==null&&w.push(Lk({start:v,end:g,loop:m,count:s,style:x})),w}function kE(e,t){const n=[],r=e.segments;for(let i=0;i<r.length;i++){const o=SE(r[i],e.points,t);o.length&&n.push(...o)}return n}function GY(e,t,n,r){let i=0,o=t-1;if(n&&!r)for(;i<t&&!e[i].skip;)i++;for(;i<t&&e[i].skip;)i++;for(i%=t,n&&(o+=i);o>i&&e[o%t].skip;)o--;return o%=t,{start:i,end:o}}function qY(e,t,n,r){const i=e.length,o=[];let s=t,l=e[t],c;for(c=t+1;c<=n;++c){const d=e[c%i];d.skip||d.stop?l.skip||(r=!1,o.push({start:t%i,end:(c-1)%i,loop:r}),t=s=d.stop?c:null):(s=c,l.skip&&(t=c)),l=d}return s!==null&&o.push({start:t%i,end:s%i,loop:r}),o}function ZY(e,t){const n=e.points,r=e.options.spanGaps,i=n.length;if(!i)return[];const o=!!e._loop,{start:s,end:l}=GY(n,i,o,r);if(r===!0)return $k(e,[{start:s,end:l,loop:o}],n,t);const c=l<s?l+i:l,d=!!e._fullLoop&&s===0&&l===i-1;return $k(e,qY(n,s,c,d),n,t)}function $k(e,t,n,r){return!r||!r.setContext||!n?t:QY(e,t,n,r)}function QY(e,t,n,r){const i=e._chart.getContext(),o=Ik(e.options),{_datasetIndex:s,options:{spanGaps:l}}=e,c=n.length,d=[];let f=o,g=t[0].start,m=g;function x(w,_,v,b){const S=l?-1:1;if(w!==_){for(w+=c;n[w%c].skip;)w-=S;for(;n[_%c].skip;)_+=S;w%c!==_%c&&(d.push({start:w%c,end:_%c,loop:v,style:b}),f=b,g=_%c)}}for(const w of t){g=l?g:w.start;let _=n[g%c],v;for(m=g+1;m<=w.end;m++){const b=n[m%c];v=Ik(r.setContext(Zo(i,{type:"segment",p0:_,p1:b,p0DataIndex:(m-1)%c,p1DataIndex:m%c,datasetIndex:s}))),JY(v,f)&&x(g,m-1,w.loop,f),_=b,f=v}g<m-1&&x(g,m-1,w.loop,f)}return d}function Ik(e){return{backgroundColor:e.backgroundColor,borderCapStyle:e.borderCapStyle,borderDash:e.borderDash,borderDashOffset:e.borderDashOffset,borderJoinStyle:e.borderJoinStyle,borderWidth:e.borderWidth,borderColor:e.borderColor}}function JY(e,t){if(!t)return!1;const n=[],r=function(i,o){return Tx(o)?(n.includes(o)||n.push(o),n.indexOf(o)):o};return JSON.stringify(e,r)!==JSON.stringify(t,r)}/*!
 * Chart.js v4.4.3
 * https://www.chartjs.org
 * (c) 2024 Chart.js Contributors
 * Released under the MIT License
 */class eK{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(t,n,r,i){const o=n.listeners[i],s=n.duration;o.forEach(l=>l({chart:t,initial:n.initial,numSteps:s,currentStep:Math.min(r-n.start,s)}))}_refresh(){this._request||(this._running=!0,this._request=aE.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(t=Date.now()){let n=0;this._charts.forEach((r,i)=>{if(!r.running||!r.items.length)return;const o=r.items;let s=o.length-1,l=!1,c;for(;s>=0;--s)c=o[s],c._active?(c._total>r.duration&&(r.duration=c._total),c.tick(t),l=!0):(o[s]=o[o.length-1],o.pop());l&&(i.draw(),this._notify(i,r,t,"progress")),o.length||(r.running=!1,this._notify(i,r,t,"complete"),r.initial=!1),n+=o.length}),this._lastDate=t,n===0&&(this._running=!1)}_getAnims(t){const n=this._charts;let r=n.get(t);return r||(r={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},n.set(t,r)),r}listen(t,n,r){this._getAnims(t).listeners[n].push(r)}add(t,n){!n||!n.length||this._getAnims(t).items.push(...n)}has(t){return this._getAnims(t).items.length>0}start(t){const n=this._charts.get(t);!n||(n.running=!0,n.start=Date.now(),n.duration=n.items.reduce((r,i)=>Math.max(r,i._duration),0),this._refresh())}running(t){if(!this._running)return!1;const n=this._charts.get(t);return!(!n||!n.running||!n.items.length)}stop(t){const n=this._charts.get(t);if(!n||!n.items.length)return;const r=n.items;let i=r.length-1;for(;i>=0;--i)r[i].cancel();n.items=[],this._notify(t,n,Date.now(),"complete")}remove(t){return this._charts.delete(t)}}var Ii=new eK;const Dk="transparent",tK={boolean(e,t,n){return n>.5?t:e},color(e,t,n){const r=Ek(e||Dk),i=r.valid&&Ek(t||Dk);return i&&i.valid?i.mix(r,n).hexString():t},number(e,t,n){return e+(t-e)*n}};class nK{constructor(t,n,r,i){const o=n[r];i=_c([t.to,i,o,t.from]);const s=_c([t.from,o,i]);this._active=!0,this._fn=t.fn||tK[t.type||typeof s],this._easing=Uc[t.easing]||Uc.linear,this._start=Math.floor(Date.now()+(t.delay||0)),this._duration=this._total=Math.floor(t.duration),this._loop=!!t.loop,this._target=n,this._prop=r,this._from=s,this._to=i,this._promises=void 0}active(){return this._active}update(t,n,r){if(this._active){this._notify(!1);const i=this._target[this._prop],o=r-this._start,s=this._duration-o;this._start=r,this._duration=Math.floor(Math.max(s,t.duration)),this._total+=o,this._loop=!!t.loop,this._to=_c([t.to,n,i,t.from]),this._from=_c([t.from,i,n])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(t){const n=t-this._start,r=this._duration,i=this._prop,o=this._from,s=this._loop,l=this._to;let c;if(this._active=o!==l&&(s||n<r),!this._active){this._target[i]=l,this._notify(!0);return}if(n<0){this._target[i]=o;return}c=n/r%2,c=s&&c>1?2-c:c,c=this._easing(Math.min(1,Math.max(0,c))),this._target[i]=this._fn(o,l,c)}wait(){const t=this._promises||(this._promises=[]);return new Promise((n,r)=>{t.push({res:n,rej:r})})}_notify(t){const n=t?"res":"rej",r=this._promises||[];for(let i=0;i<r.length;i++)r[i][n]()}}class CE{constructor(t,n){this._chart=t,this._properties=new Map,this.configure(n)}configure(t){if(!Ve(t))return;const n=Object.keys(zt.animation),r=this._properties;Object.getOwnPropertyNames(t).forEach(i=>{const o=t[i];if(!Ve(o))return;const s={};for(const l of n)s[l]=o[l];(xt(o.properties)&&o.properties||[i]).forEach(l=>{(l===i||!r.has(l))&&r.set(l,s)})})}_animateOptions(t,n){const r=n.options,i=iK(t,r);if(!i)return[];const o=this._createAnimations(i,r);return r.$shared&&rK(t.options.$animations,r).then(()=>{t.options=r},()=>{}),o}_createAnimations(t,n){const r=this._properties,i=[],o=t.$animations||(t.$animations={}),s=Object.keys(n),l=Date.now();let c;for(c=s.length-1;c>=0;--c){const d=s[c];if(d.charAt(0)==="$")continue;if(d==="options"){i.push(...this._animateOptions(t,n));continue}const f=n[d];let g=o[d];const m=r.get(d);if(g)if(m&&g.active()){g.update(m,f,l);continue}else g.cancel();if(!m||!m.duration){t[d]=f;continue}o[d]=g=new nK(m,t,d,f),i.push(g)}return i}update(t,n){if(this._properties.size===0){Object.assign(t,n);return}const r=this._createAnimations(t,n);if(r.length)return Ii.add(this._chart,r),!0}}function rK(e,t){const n=[],r=Object.keys(t);for(let i=0;i<r.length;i++){const o=e[r[i]];o&&o.active()&&n.push(o.wait())}return Promise.all(n)}function iK(e,t){if(!t)return;let n=e.options;if(!n){e.options=t;return}return n.$shared&&(e.options=n=Object.assign({},n,{$shared:!1,$animations:{}})),n}function zk(e,t){const n=e&&e.options||{},r=n.reverse,i=n.min===void 0?t:0,o=n.max===void 0?t:0;return{start:r?o:i,end:r?i:o}}function oK(e,t,n){if(n===!1)return!1;const r=zk(e,n),i=zk(t,n);return{top:i.end,right:r.end,bottom:i.start,left:r.start}}function sK(e){let t,n,r,i;return Ve(e)?(t=e.top,n=e.right,r=e.bottom,i=e.left):t=n=r=i=e,{top:t,right:n,bottom:r,left:i,disabled:e===!1}}function PE(e,t){const n=[],r=e._getSortedDatasetMetas(t);let i,o;for(i=0,o=r.length;i<o;++i)n.push(r[i].index);return n}function Fk(e,t,n,r={}){const i=e.keys,o=r.mode==="single";let s,l,c,d;if(t!==null){for(s=0,l=i.length;s<l;++s){if(c=+i[s],c===n){if(r.all)continue;break}d=e.values[c],Dt(d)&&(o||t===0||wi(t)===wi(d))&&(t+=d)}return t}}function aK(e,t){const{iScale:n,vScale:r}=t,i=n.axis==="x"?"x":"y",o=r.axis==="x"?"x":"y",s=Object.keys(e),l=new Array(s.length);let c,d,f;for(c=0,d=s.length;c<d;++c)f=s[c],l[c]={[i]:f,[o]:e[f]};return l}function Bk(e,t){const n=e&&e.options.stacked;return n||n===void 0&&t.stack!==void 0}function lK(e,t,n){return`${e.id}.${t.id}.${n.stack||n.type}`}function cK(e){const{min:t,max:n,minDefined:r,maxDefined:i}=e.getUserBounds();return{min:r?t:Number.NEGATIVE_INFINITY,max:i?n:Number.POSITIVE_INFINITY}}function uK(e,t,n){const r=e[t]||(e[t]={});return r[n]||(r[n]={})}function jk(e,t,n,r){for(const i of t.getMatchingVisibleMetas(r).reverse()){const o=e[i.index];if(n&&o>0||!n&&o<0)return i.index}return null}function Wk(e,t){const{chart:n,_cachedMeta:r}=e,i=n._stacks||(n._stacks={}),{iScale:o,vScale:s,index:l}=r,c=o.axis,d=s.axis,f=lK(o,s,r),g=t.length;let m;for(let x=0;x<g;++x){const w=t[x],{[c]:_,[d]:v}=w,b=w._stacks||(w._stacks={});m=b[d]=uK(i,f,_),m[l]=v,m._top=jk(m,s,!0,r.type),m._bottom=jk(m,s,!1,r.type);const S=m._visualValues||(m._visualValues={});S[l]=v}}function L0(e,t){const n=e.scales;return Object.keys(n).filter(r=>n[r].axis===t).shift()}function dK(e,t){return Zo(e,{active:!1,dataset:void 0,datasetIndex:t,index:t,mode:"default",type:"dataset"})}function fK(e,t,n){return Zo(e,{active:!1,dataIndex:t,parsed:void 0,raw:void 0,element:n,index:t,mode:"default",type:"data"})}function cc(e,t){const n=e.controller.index,r=e.vScale&&e.vScale.axis;if(!!r){t=t||e._parsed;for(const i of t){const o=i._stacks;if(!o||o[r]===void 0||o[r][n]===void 0)return;delete o[r][n],o[r]._visualValues!==void 0&&o[r]._visualValues[n]!==void 0&&delete o[r]._visualValues[n]}}}const $0=e=>e==="reset"||e==="none",Hk=(e,t)=>t?e:Object.assign({},e),hK=(e,t,n)=>e&&!t.hidden&&t._stacked&&{keys:PE(n,!0),values:null};class Qr{constructor(t,n){this.chart=t,this._ctx=t.ctx,this.index=n,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){const t=this._cachedMeta;this.configure(),this.linkScales(),t._stacked=Bk(t.vScale,t),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled("filler")&&console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")}updateIndex(t){this.index!==t&&cc(this._cachedMeta),this.index=t}linkScales(){const t=this.chart,n=this._cachedMeta,r=this.getDataset(),i=(g,m,x,w)=>g==="x"?m:g==="r"?w:x,o=n.xAxisID=Ae(r.xAxisID,L0(t,"x")),s=n.yAxisID=Ae(r.yAxisID,L0(t,"y")),l=n.rAxisID=Ae(r.rAxisID,L0(t,"r")),c=n.indexAxis,d=n.iAxisID=i(c,o,s,l),f=n.vAxisID=i(c,s,o,l);n.xScale=this.getScaleForId(o),n.yScale=this.getScaleForId(s),n.rScale=this.getScaleForId(l),n.iScale=this.getScaleForId(d),n.vScale=this.getScaleForId(f)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(t){return this.chart.scales[t]}_getOtherScale(t){const n=this._cachedMeta;return t===n.iScale?n.vScale:n.iScale}reset(){this._update("reset")}_destroy(){const t=this._cachedMeta;this._data&&kk(this._data,this),t._stacked&&cc(t)}_dataCheck(){const t=this.getDataset(),n=t.data||(t.data=[]),r=this._data;if(Ve(n)){const i=this._cachedMeta;this._data=aK(n,i)}else if(r!==n){if(r){kk(r,this);const i=this._cachedMeta;cc(i),i._parsed=[]}n&&Object.isExtensible(n)&&QU(n,this),this._syncList=[],this._data=n}}addElements(){const t=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(t.dataset=new this.datasetElementType)}buildOrUpdateElements(t){const n=this._cachedMeta,r=this.getDataset();let i=!1;this._dataCheck();const o=n._stacked;n._stacked=Bk(n.vScale,n),n.stack!==r.stack&&(i=!0,cc(n),n.stack=r.stack),this._resyncElements(t),(i||o!==n._stacked)&&Wk(this,n._parsed)}configure(){const t=this.chart.config,n=t.datasetScopeKeys(this._type),r=t.getOptionScopes(this.getDataset(),n,!0);this.options=t.createResolver(r,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(t,n){const{_cachedMeta:r,_data:i}=this,{iScale:o,_stacked:s}=r,l=o.axis;let c=t===0&&n===i.length?!0:r._sorted,d=t>0&&r._parsed[t-1],f,g,m;if(this._parsing===!1)r._parsed=i,r._sorted=!0,m=i;else{xt(i[t])?m=this.parseArrayData(r,i,t,n):Ve(i[t])?m=this.parseObjectData(r,i,t,n):m=this.parsePrimitiveData(r,i,t,n);const x=()=>g[l]===null||d&&g[l]<d[l];for(f=0;f<n;++f)r._parsed[f+t]=g=m[f],c&&(x()&&(c=!1),d=g);r._sorted=c}s&&Wk(this,m)}parsePrimitiveData(t,n,r,i){const{iScale:o,vScale:s}=t,l=o.axis,c=s.axis,d=o.getLabels(),f=o===s,g=new Array(i);let m,x,w;for(m=0,x=i;m<x;++m)w=m+r,g[m]={[l]:f||o.parse(d[w],w),[c]:s.parse(n[w],w)};return g}parseArrayData(t,n,r,i){const{xScale:o,yScale:s}=t,l=new Array(i);let c,d,f,g;for(c=0,d=i;c<d;++c)f=c+r,g=n[f],l[c]={x:o.parse(g[0],f),y:s.parse(g[1],f)};return l}parseObjectData(t,n,r,i){const{xScale:o,yScale:s}=t,{xAxisKey:l="x",yAxisKey:c="y"}=this._parsing,d=new Array(i);let f,g,m,x;for(f=0,g=i;f<g;++f)m=f+r,x=n[m],d[f]={x:o.parse(Uo(x,l),m),y:s.parse(Uo(x,c),m)};return d}getParsed(t){return this._cachedMeta._parsed[t]}getDataElement(t){return this._cachedMeta.data[t]}applyStack(t,n,r){const i=this.chart,o=this._cachedMeta,s=n[t.axis],l={keys:PE(i,!0),values:n._stacks[t.axis]._visualValues};return Fk(l,s,o.index,{mode:r})}updateRangeFromParsed(t,n,r,i){const o=r[n.axis];let s=o===null?NaN:o;const l=i&&r._stacks[n.axis];i&&l&&(i.values=l,s=Fk(i,o,this._cachedMeta.index)),t.min=Math.min(t.min,s),t.max=Math.max(t.max,s)}getMinMax(t,n){const r=this._cachedMeta,i=r._parsed,o=r._sorted&&t===r.iScale,s=i.length,l=this._getOtherScale(t),c=hK(n,r,this.chart),d={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:f,max:g}=cK(l);let m,x;function w(){x=i[m];const _=x[l.axis];return!Dt(x[t.axis])||f>_||g<_}for(m=0;m<s&&!(!w()&&(this.updateRangeFromParsed(d,t,x,c),o));++m);if(o){for(m=s-1;m>=0;--m)if(!w()){this.updateRangeFromParsed(d,t,x,c);break}}return d}getAllParsedValues(t){const n=this._cachedMeta._parsed,r=[];let i,o,s;for(i=0,o=n.length;i<o;++i)s=n[i][t.axis],Dt(s)&&r.push(s);return r}getMaxOverflow(){return!1}getLabelAndValue(t){const n=this._cachedMeta,r=n.iScale,i=n.vScale,o=this.getParsed(t);return{label:r?""+r.getLabelForValue(o[r.axis]):"",value:i?""+i.getLabelForValue(o[i.axis]):""}}_update(t){const n=this._cachedMeta;this.update(t||"default"),n._clip=sK(Ae(this.options.clip,oK(n.xScale,n.yScale,this.getMaxOverflow())))}update(t){}draw(){const t=this._ctx,n=this.chart,r=this._cachedMeta,i=r.data||[],o=n.chartArea,s=[],l=this._drawStart||0,c=this._drawCount||i.length-l,d=this.options.drawActiveElementsOnTop;let f;for(r.dataset&&r.dataset.draw(t,o,l,c),f=l;f<l+c;++f){const g=i[f];g.hidden||(g.active&&d?s.push(g):g.draw(t,o))}for(f=0;f<s.length;++f)s[f].draw(t,o)}getStyle(t,n){const r=n?"active":"default";return t===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(r):this.resolveDataElementOptions(t||0,r)}getContext(t,n,r){const i=this.getDataset();let o;if(t>=0&&t<this._cachedMeta.data.length){const s=this._cachedMeta.data[t];o=s.$context||(s.$context=fK(this.getContext(),t,s)),o.parsed=this.getParsed(t),o.raw=i.data[t],o.index=o.dataIndex=t}else o=this.$context||(this.$context=dK(this.chart.getContext(),this.index)),o.dataset=i,o.index=o.datasetIndex=this.index;return o.active=!!n,o.mode=r,o}resolveDatasetElementOptions(t){return this._resolveElementOptions(this.datasetElementType.id,t)}resolveDataElementOptions(t,n){return this._resolveElementOptions(this.dataElementType.id,n,t)}_resolveElementOptions(t,n="default",r){const i=n==="active",o=this._cachedDataOpts,s=t+"-"+n,l=o[s],c=this.enableOptionSharing&&ku(r);if(l)return Hk(l,c);const d=this.chart.config,f=d.datasetElementScopeKeys(this._type,t),g=i?[`${t}Hover`,"hover",t,""]:[t,""],m=d.getOptionScopes(this.getDataset(),f),x=Object.keys(zt.elements[t]),w=()=>this.getContext(r,i,n),_=d.resolveNamedOptions(m,x,w,g);return _.$shared&&(_.$shared=c,o[s]=Object.freeze(Hk(_,c))),_}_resolveAnimations(t,n,r){const i=this.chart,o=this._cachedDataOpts,s=`animation-${n}`,l=o[s];if(l)return l;let c;if(i.options.animation!==!1){const f=this.chart.config,g=f.datasetAnimationScopeKeys(this._type,n),m=f.getOptionScopes(this.getDataset(),g);c=f.createResolver(m,this.getContext(t,r,n))}const d=new CE(i,c&&c.animations);return c&&c._cacheable&&(o[s]=Object.freeze(d)),d}getSharedOptions(t){if(!!t.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},t))}includeOptions(t,n){return!n||$0(t)||this.chart._animationsDisabled}_getSharedOptions(t,n){const r=this.resolveDataElementOptions(t,n),i=this._sharedOptions,o=this.getSharedOptions(r),s=this.includeOptions(n,o)||o!==i;return this.updateSharedOptions(o,n,r),{sharedOptions:o,includeOptions:s}}updateElement(t,n,r,i){$0(i)?Object.assign(t,r):this._resolveAnimations(n,i).update(t,r)}updateSharedOptions(t,n,r){t&&!$0(n)&&this._resolveAnimations(void 0,n).update(t,r)}_setStyle(t,n,r,i){t.active=i;const o=this.getStyle(n,i);this._resolveAnimations(n,r,i).update(t,{options:!i&&this.getSharedOptions(o)||o})}removeHoverStyle(t,n,r){this._setStyle(t,r,"active",!1)}setHoverStyle(t,n,r){this._setStyle(t,r,"active",!0)}_removeDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!1)}_setDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!0)}_resyncElements(t){const n=this._data,r=this._cachedMeta.data;for(const[l,c,d]of this._syncList)this[l](c,d);this._syncList=[];const i=r.length,o=n.length,s=Math.min(o,i);s&&this.parse(0,s),o>i?this._insertElements(i,o-i,t):o<i&&this._removeElements(o,i-o)}_insertElements(t,n,r=!0){const i=this._cachedMeta,o=i.data,s=t+n;let l;const c=d=>{for(d.length+=n,l=d.length-1;l>=s;l--)d[l]=d[l-n]};for(c(o),l=t;l<s;++l)o[l]=new this.dataElementType;this._parsing&&c(i._parsed),this.parse(t,n),r&&this.updateElements(o,t,n,"reset")}updateElements(t,n,r,i){}_removeElements(t,n){const r=this._cachedMeta;if(this._parsing){const i=r._parsed.splice(t,n);r._stacked&&cc(r,i)}r.data.splice(t,n)}_sync(t){if(this._parsing)this._syncList.push(t);else{const[n,r,i]=t;this[n](r,i)}this.chart._dataChanges.push([this.index,...t])}_onDataPush(){const t=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-t,t])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(t,n){n&&this._sync(["_removeElements",t,n]);const r=arguments.length-2;r&&this._sync(["_insertElements",t,r])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}le(Qr,"defaults",{}),le(Qr,"datasetElementType",null),le(Qr,"dataElementType",null);function pK(e,t){if(!e._cache.$bar){const n=e.getMatchingVisibleMetas(t);let r=[];for(let i=0,o=n.length;i<o;i++)r=r.concat(n[i].controller.getAllParsedValues(e));e._cache.$bar=sE(r.sort((i,o)=>i-o))}return e._cache.$bar}function gK(e){const t=e.iScale,n=pK(t,e.type);let r=t._length,i,o,s,l;const c=()=>{s===32767||s===-32768||(ku(l)&&(r=Math.min(r,Math.abs(s-l)||r)),l=s)};for(i=0,o=n.length;i<o;++i)s=t.getPixelForValue(n[i]),c();for(l=void 0,i=0,o=t.ticks.length;i<o;++i)s=t.getPixelForTick(i),c();return r}function mK(e,t,n,r){const i=n.barThickness;let o,s;return Ze(i)?(o=t.min*n.categoryPercentage,s=n.barPercentage):(o=i*r,s=1),{chunk:o/r,ratio:s,start:t.pixels[e]-o/2}}function vK(e,t,n,r){const i=t.pixels,o=i[e];let s=e>0?i[e-1]:null,l=e<i.length-1?i[e+1]:null;const c=n.categoryPercentage;s===null&&(s=o-(l===null?t.end-t.start:l-o)),l===null&&(l=o+o-s);const d=o-(o-Math.min(s,l))/2*c;return{chunk:Math.abs(l-s)/2*c/r,ratio:n.barPercentage,start:d}}function yK(e,t,n,r){const i=n.parse(e[0],r),o=n.parse(e[1],r),s=Math.min(i,o),l=Math.max(i,o);let c=s,d=l;Math.abs(s)>Math.abs(l)&&(c=l,d=s),t[n.axis]=d,t._custom={barStart:c,barEnd:d,start:i,end:o,min:s,max:l}}function EE(e,t,n,r){return xt(e)?yK(e,t,n,r):t[n.axis]=n.parse(e,r),t}function Vk(e,t,n,r){const i=e.iScale,o=e.vScale,s=i.getLabels(),l=i===o,c=[];let d,f,g,m;for(d=n,f=n+r;d<f;++d)m=t[d],g={},g[i.axis]=l||i.parse(s[d],d),c.push(EE(m,g,o,d));return c}function I0(e){return e&&e.barStart!==void 0&&e.barEnd!==void 0}function xK(e,t,n){return e!==0?wi(e):(t.isHorizontal()?1:-1)*(t.min>=n?1:-1)}function bK(e){let t,n,r,i,o;return e.horizontal?(t=e.base>e.x,n="left",r="right"):(t=e.base<e.y,n="bottom",r="top"),t?(i="end",o="start"):(i="start",o="end"),{start:n,end:r,reverse:t,top:i,bottom:o}}function wK(e,t,n,r){let i=t.borderSkipped;const o={};if(!i){e.borderSkipped=o;return}if(i===!0){e.borderSkipped={top:!0,right:!0,bottom:!0,left:!0};return}const{start:s,end:l,reverse:c,top:d,bottom:f}=bK(e);i==="middle"&&n&&(e.enableBorderRadius=!0,(n._top||0)===r?i=d:(n._bottom||0)===r?i=f:(o[Uk(f,s,l,c)]=!0,i=d)),o[Uk(i,s,l,c)]=!0,e.borderSkipped=o}function Uk(e,t,n,r){return r?(e=_K(e,t,n),e=Yk(e,n,t)):e=Yk(e,t,n),e}function _K(e,t,n){return e===t?n:e===n?t:e}function Yk(e,t,n){return e==="start"?t:e==="end"?n:e}function SK(e,{inflateAmount:t},n){e.inflateAmount=t==="auto"?n===1?.33:0:t}class oh extends Qr{parsePrimitiveData(t,n,r,i){return Vk(t,n,r,i)}parseArrayData(t,n,r,i){return Vk(t,n,r,i)}parseObjectData(t,n,r,i){const{iScale:o,vScale:s}=t,{xAxisKey:l="x",yAxisKey:c="y"}=this._parsing,d=o.axis==="x"?l:c,f=s.axis==="x"?l:c,g=[];let m,x,w,_;for(m=r,x=r+i;m<x;++m)_=n[m],w={},w[o.axis]=o.parse(Uo(_,d),m),g.push(EE(Uo(_,f),w,s,m));return g}updateRangeFromParsed(t,n,r,i){super.updateRangeFromParsed(t,n,r,i);const o=r._custom;o&&n===this._cachedMeta.vScale&&(t.min=Math.min(t.min,o.min),t.max=Math.max(t.max,o.max))}getMaxOverflow(){return 0}getLabelAndValue(t){const n=this._cachedMeta,{iScale:r,vScale:i}=n,o=this.getParsed(t),s=o._custom,l=I0(s)?"["+s.start+", "+s.end+"]":""+i.getLabelForValue(o[i.axis]);return{label:""+r.getLabelForValue(o[r.axis]),value:l}}initialize(){this.enableOptionSharing=!0,super.initialize();const t=this._cachedMeta;t.stack=this.getDataset().stack}update(t){const n=this._cachedMeta;this.updateElements(n.data,0,n.data.length,t)}updateElements(t,n,r,i){const o=i==="reset",{index:s,_cachedMeta:{vScale:l}}=this,c=l.getBasePixel(),d=l.isHorizontal(),f=this._getRuler(),{sharedOptions:g,includeOptions:m}=this._getSharedOptions(n,i);for(let x=n;x<n+r;x++){const w=this.getParsed(x),_=o||Ze(w[l.axis])?{base:c,head:c}:this._calculateBarValuePixels(x),v=this._calculateBarIndexPixels(x,f),b=(w._stacks||{})[l.axis],S={horizontal:d,base:_.base,enableBorderRadius:!b||I0(w._custom)||s===b._top||s===b._bottom,x:d?_.head:v.center,y:d?v.center:_.head,height:d?v.size:Math.abs(_.size),width:d?Math.abs(_.size):v.size};m&&(S.options=g||this.resolveDataElementOptions(x,t[x].active?"active":i));const C=S.options||t[x].options;wK(S,C,b,s),SK(S,C,f.ratio),this.updateElement(t[x],x,S,i)}}_getStacks(t,n){const{iScale:r}=this._cachedMeta,i=r.getMatchingVisibleMetas(this._type).filter(c=>c.controller.options.grouped),o=r.options.stacked,s=[],l=c=>{const d=c.controller.getParsed(n),f=d&&d[c.vScale.axis];if(Ze(f)||isNaN(f))return!0};for(const c of i)if(!(n!==void 0&&l(c))&&((o===!1||s.indexOf(c.stack)===-1||o===void 0&&c.stack===void 0)&&s.push(c.stack),c.index===t))break;return s.length||s.push(void 0),s}_getStackCount(t){return this._getStacks(void 0,t).length}_getStackIndex(t,n,r){const i=this._getStacks(t,r),o=n!==void 0?i.indexOf(n):-1;return o===-1?i.length-1:o}_getRuler(){const t=this.options,n=this._cachedMeta,r=n.iScale,i=[];let o,s;for(o=0,s=n.data.length;o<s;++o)i.push(r.getPixelForValue(this.getParsed(o)[r.axis],o));const l=t.barThickness;return{min:l||gK(n),pixels:i,start:r._startPixel,end:r._endPixel,stackCount:this._getStackCount(),scale:r,grouped:t.grouped,ratio:l?1:t.categoryPercentage*t.barPercentage}}_calculateBarValuePixels(t){const{_cachedMeta:{vScale:n,_stacked:r,index:i},options:{base:o,minBarLength:s}}=this,l=o||0,c=this.getParsed(t),d=c._custom,f=I0(d);let g=c[n.axis],m=0,x=r?this.applyStack(n,c,r):g,w,_;x!==g&&(m=x-g,x=g),f&&(g=d.barStart,x=d.barEnd-d.barStart,g!==0&&wi(g)!==wi(d.barEnd)&&(m=0),m+=g);const v=!Ze(o)&&!f?o:m;let b=n.getPixelForValue(v);if(this.chart.getDataVisibility(t)?w=n.getPixelForValue(m+x):w=b,_=w-b,Math.abs(_)<s){_=xK(_,n,l)*s,g===l&&(b-=_/2);const S=n.getPixelForDecimal(0),C=n.getPixelForDecimal(1),E=Math.min(S,C),T=Math.max(S,C);b=Math.max(Math.min(b,T),E),w=b+_,r&&!f&&(c._stacks[n.axis]._visualValues[i]=n.getValueForPixel(w)-n.getValueForPixel(b))}if(b===n.getPixelForValue(l)){const S=wi(_)*n.getLineWidthForValue(l)/2;b+=S,_-=S}return{size:_,base:b,head:w,center:w+_/2}}_calculateBarIndexPixels(t,n){const r=n.scale,i=this.options,o=i.skipNull,s=Ae(i.maxBarThickness,1/0);let l,c;if(n.grouped){const d=o?this._getStackCount(t):n.stackCount,f=i.barThickness==="flex"?vK(t,n,i,d):mK(t,n,i,d),g=this._getStackIndex(this.index,this._cachedMeta.stack,o?t:void 0);l=f.start+f.chunk*g+f.chunk/2,c=Math.min(s,f.chunk*f.ratio)}else l=r.getPixelForValue(this.getParsed(t)[r.axis],t),c=Math.min(s,n.min*n.ratio);return{base:l-c/2,head:l+c/2,center:l,size:c}}draw(){const t=this._cachedMeta,n=t.vScale,r=t.data,i=r.length;let o=0;for(;o<i;++o)this.getParsed(o)[n.axis]!==null&&!r[o].hidden&&r[o].draw(this._ctx)}}le(oh,"id","bar"),le(oh,"defaults",{datasetElementType:!1,dataElementType:"bar",categoryPercentage:.8,barPercentage:.9,grouped:!0,animations:{numbers:{type:"number",properties:["x","y","base","width","height"]}}}),le(oh,"overrides",{scales:{_index_:{type:"category",offset:!0,grid:{offset:!0}},_value_:{type:"linear",beginAtZero:!0}}});class sh extends Qr{initialize(){this.enableOptionSharing=!0,super.initialize()}parsePrimitiveData(t,n,r,i){const o=super.parsePrimitiveData(t,n,r,i);for(let s=0;s<o.length;s++)o[s]._custom=this.resolveDataElementOptions(s+r).radius;return o}parseArrayData(t,n,r,i){const o=super.parseArrayData(t,n,r,i);for(let s=0;s<o.length;s++){const l=n[r+s];o[s]._custom=Ae(l[2],this.resolveDataElementOptions(s+r).radius)}return o}parseObjectData(t,n,r,i){const o=super.parseObjectData(t,n,r,i);for(let s=0;s<o.length;s++){const l=n[r+s];o[s]._custom=Ae(l&&l.r&&+l.r,this.resolveDataElementOptions(s+r).radius)}return o}getMaxOverflow(){const t=this._cachedMeta.data;let n=0;for(let r=t.length-1;r>=0;--r)n=Math.max(n,t[r].size(this.resolveDataElementOptions(r))/2);return n>0&&n}getLabelAndValue(t){const n=this._cachedMeta,r=this.chart.data.labels||[],{xScale:i,yScale:o}=n,s=this.getParsed(t),l=i.getLabelForValue(s.x),c=o.getLabelForValue(s.y),d=s._custom;return{label:r[t]||"",value:"("+l+", "+c+(d?", "+d:"")+")"}}update(t){const n=this._cachedMeta.data;this.updateElements(n,0,n.length,t)}updateElements(t,n,r,i){const o=i==="reset",{iScale:s,vScale:l}=this._cachedMeta,{sharedOptions:c,includeOptions:d}=this._getSharedOptions(n,i),f=s.axis,g=l.axis;for(let m=n;m<n+r;m++){const x=t[m],w=!o&&this.getParsed(m),_={},v=_[f]=o?s.getPixelForDecimal(.5):s.getPixelForValue(w[f]),b=_[g]=o?l.getBasePixel():l.getPixelForValue(w[g]);_.skip=isNaN(v)||isNaN(b),d&&(_.options=c||this.resolveDataElementOptions(m,x.active?"active":i),o&&(_.options.radius=0)),this.updateElement(x,m,_,i)}}resolveDataElementOptions(t,n){const r=this.getParsed(t);let i=super.resolveDataElementOptions(t,n);i.$shared&&(i=Object.assign({},i,{$shared:!1}));const o=i.radius;return n!=="active"&&(i.radius=0),i.radius+=Ae(r&&r._custom,o),i}}le(sh,"id","bubble"),le(sh,"defaults",{datasetElementType:!1,dataElementType:"point",animations:{numbers:{type:"number",properties:["x","y","borderWidth","radius"]}}}),le(sh,"overrides",{scales:{x:{type:"linear"},y:{type:"linear"}}});function kK(e,t,n){let r=1,i=1,o=0,s=0;if(t<wt){const l=e,c=l+t,d=Math.cos(l),f=Math.sin(l),g=Math.cos(c),m=Math.sin(c),x=(C,E,T)=>Cu(C,l,c,!0)?1:Math.max(E,E*n,T,T*n),w=(C,E,T)=>Cu(C,l,c,!0)?-1:Math.min(E,E*n,T,T*n),_=x(0,d,g),v=x(Wt,f,m),b=w(_t,d,g),S=w(_t+Wt,f,m);r=(_-b)/2,i=(v-S)/2,o=-(_+b)/2,s=-(v+S)/2}return{ratioX:r,ratioY:i,offsetX:o,offsetY:s}}class bo extends Qr{constructor(t,n){super(t,n),this.enableOptionSharing=!0,this.innerRadius=void 0,this.outerRadius=void 0,this.offsetX=void 0,this.offsetY=void 0}linkScales(){}parse(t,n){const r=this.getDataset().data,i=this._cachedMeta;if(this._parsing===!1)i._parsed=r;else{let o=c=>+r[c];if(Ve(r[t])){const{key:c="value"}=this._parsing;o=d=>+Uo(r[d],c)}let s,l;for(s=t,l=t+n;s<l;++s)i._parsed[s]=o(s)}}_getRotation(){return Zr(this.options.rotation-90)}_getCircumference(){return Zr(this.options.circumference)}_getRotationExtents(){let t=wt,n=-wt;for(let r=0;r<this.chart.data.datasets.length;++r)if(this.chart.isDatasetVisible(r)&&this.chart.getDatasetMeta(r).type===this._type){const i=this.chart.getDatasetMeta(r).controller,o=i._getRotation(),s=i._getCircumference();t=Math.min(t,o),n=Math.max(n,o+s)}return{rotation:t,circumference:n-t}}update(t){const n=this.chart,{chartArea:r}=n,i=this._cachedMeta,o=i.data,s=this.getMaxBorderWidth()+this.getMaxOffset(o)+this.options.spacing,l=Math.max((Math.min(r.width,r.height)-s)/2,0),c=Math.min(zU(this.options.cutout,l),1),d=this._getRingWeight(this.index),{circumference:f,rotation:g}=this._getRotationExtents(),{ratioX:m,ratioY:x,offsetX:w,offsetY:_}=kK(g,f,c),v=(r.width-s)/m,b=(r.height-s)/x,S=Math.max(Math.min(v,b)/2,0),C=tE(this.options.radius,S),E=Math.max(C*c,0),T=(C-E)/this._getVisibleDatasetWeightTotal();this.offsetX=w*C,this.offsetY=_*C,i.total=this.calculateTotal(),this.outerRadius=C-T*this._getRingWeightOffset(this.index),this.innerRadius=Math.max(this.outerRadius-T*d,0),this.updateElements(o,0,o.length,t)}_circumference(t,n){const r=this.options,i=this._cachedMeta,o=this._getCircumference();return n&&r.animation.animateRotate||!this.chart.getDataVisibility(t)||i._parsed[t]===null||i.data[t].hidden?0:this.calculateCircumference(i._parsed[t]*o/wt)}updateElements(t,n,r,i){const o=i==="reset",s=this.chart,l=s.chartArea,d=s.options.animation,f=(l.left+l.right)/2,g=(l.top+l.bottom)/2,m=o&&d.animateScale,x=m?0:this.innerRadius,w=m?0:this.outerRadius,{sharedOptions:_,includeOptions:v}=this._getSharedOptions(n,i);let b=this._getRotation(),S;for(S=0;S<n;++S)b+=this._circumference(S,o);for(S=n;S<n+r;++S){const C=this._circumference(S,o),E=t[S],T={x:f+this.offsetX,y:g+this.offsetY,startAngle:b,endAngle:b+C,circumference:C,outerRadius:w,innerRadius:x};v&&(T.options=_||this.resolveDataElementOptions(S,E.active?"active":i)),b+=C,this.updateElement(E,S,T,i)}}calculateTotal(){const t=this._cachedMeta,n=t.data;let r=0,i;for(i=0;i<n.length;i++){const o=t._parsed[i];o!==null&&!isNaN(o)&&this.chart.getDataVisibility(i)&&!n[i].hidden&&(r+=Math.abs(o))}return r}calculateCircumference(t){const n=this._cachedMeta.total;return n>0&&!isNaN(t)?wt*(Math.abs(t)/n):0}getLabelAndValue(t){const n=this._cachedMeta,r=this.chart,i=r.data.labels||[],o=rd(n._parsed[t],r.options.locale);return{label:i[t]||"",value:o}}getMaxBorderWidth(t){let n=0;const r=this.chart;let i,o,s,l,c;if(!t){for(i=0,o=r.data.datasets.length;i<o;++i)if(r.isDatasetVisible(i)){s=r.getDatasetMeta(i),t=s.data,l=s.controller;break}}if(!t)return 0;for(i=0,o=t.length;i<o;++i)c=l.resolveDataElementOptions(i),c.borderAlign!=="inner"&&(n=Math.max(n,c.borderWidth||0,c.hoverBorderWidth||0));return n}getMaxOffset(t){let n=0;for(let r=0,i=t.length;r<i;++r){const o=this.resolveDataElementOptions(r);n=Math.max(n,o.offset||0,o.hoverOffset||0)}return n}_getRingWeightOffset(t){let n=0;for(let r=0;r<t;++r)this.chart.isDatasetVisible(r)&&(n+=this._getRingWeight(r));return n}_getRingWeight(t){return Math.max(Ae(this.chart.data.datasets[t].weight,1),0)}_getVisibleDatasetWeightTotal(){return this._getRingWeightOffset(this.chart.data.datasets.length)||1}}le(bo,"id","doughnut"),le(bo,"defaults",{datasetElementType:!1,dataElementType:"arc",animation:{animateRotate:!0,animateScale:!1},animations:{numbers:{type:"number",properties:["circumference","endAngle","innerRadius","outerRadius","startAngle","x","y","offset","borderWidth","spacing"]}},cutout:"50%",rotation:0,circumference:360,radius:"100%",spacing:0,indexAxis:"r"}),le(bo,"descriptors",{_scriptable:t=>t!=="spacing",_indexable:t=>t!=="spacing"&&!t.startsWith("borderDash")&&!t.startsWith("hoverBorderDash")}),le(bo,"overrides",{aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const n=t.data;if(n.labels.length&&n.datasets.length){const{labels:{pointStyle:r,color:i}}=t.legend.options;return n.labels.map((o,s)=>{const c=t.getDatasetMeta(0).controller.getStyle(s);return{text:o,fillStyle:c.backgroundColor,strokeStyle:c.borderColor,fontColor:i,lineWidth:c.borderWidth,pointStyle:r,hidden:!t.getDataVisibility(s),index:s}})}return[]}},onClick(t,n,r){r.chart.toggleDataVisibility(n.index),r.chart.update()}}}});class Kc extends Qr{initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(t){const n=this._cachedMeta,{dataset:r,data:i=[],_dataset:o}=n,s=this.chart._animationsDisabled;let{start:l,count:c}=cE(n,i,s);this._drawStart=l,this._drawCount=c,uE(n)&&(l=0,c=i.length),r._chart=this.chart,r._datasetIndex=this.index,r._decimated=!!o._decimated,r.points=i;const d=this.resolveDatasetElementOptions(t);this.options.showLine||(d.borderWidth=0),d.segment=this.options.segment,this.updateElement(r,void 0,{animated:!s,options:d},t),this.updateElements(i,l,c,t)}updateElements(t,n,r,i){const o=i==="reset",{iScale:s,vScale:l,_stacked:c,_dataset:d}=this._cachedMeta,{sharedOptions:f,includeOptions:g}=this._getSharedOptions(n,i),m=s.axis,x=l.axis,{spanGaps:w,segment:_}=this.options,v=tl(w)?w:Number.POSITIVE_INFINITY,b=this.chart._animationsDisabled||o||i==="none",S=n+r,C=t.length;let E=n>0&&this.getParsed(n-1);for(let T=0;T<C;++T){const N=t[T],L=b?N:{};if(T<n||T>=S){L.skip=!0;continue}const z=this.getParsed(T),B=Ze(z[x]),H=L[m]=s.getPixelForValue(z[m],T),Q=L[x]=o||B?l.getBasePixel():l.getPixelForValue(c?this.applyStack(l,z,c):z[x],T);L.skip=isNaN(H)||isNaN(Q)||B,L.stop=T>0&&Math.abs(z[m]-E[m])>v,_&&(L.parsed=z,L.raw=d.data[T]),g&&(L.options=f||this.resolveDataElementOptions(T,N.active?"active":i)),b||this.updateElement(N,T,L,i),E=z}}getMaxOverflow(){const t=this._cachedMeta,n=t.dataset,r=n.options&&n.options.borderWidth||0,i=t.data||[];if(!i.length)return r;const o=i[0].size(this.resolveDataElementOptions(0)),s=i[i.length-1].size(this.resolveDataElementOptions(i.length-1));return Math.max(r,o,s)/2}draw(){const t=this._cachedMeta;t.dataset.updateControlPoints(this.chart.chartArea,t.iScale.axis),super.draw()}}le(Kc,"id","line"),le(Kc,"defaults",{datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1}),le(Kc,"overrides",{scales:{_index_:{type:"category"},_value_:{type:"linear"}}});class Xc extends Qr{constructor(t,n){super(t,n),this.innerRadius=void 0,this.outerRadius=void 0}getLabelAndValue(t){const n=this._cachedMeta,r=this.chart,i=r.data.labels||[],o=rd(n._parsed[t].r,r.options.locale);return{label:i[t]||"",value:o}}parseObjectData(t,n,r,i){return yE.bind(this)(t,n,r,i)}update(t){const n=this._cachedMeta.data;this._updateRadius(),this.updateElements(n,0,n.length,t)}getMinMax(){const t=this._cachedMeta,n={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY};return t.data.forEach((r,i)=>{const o=this.getParsed(i).r;!isNaN(o)&&this.chart.getDataVisibility(i)&&(o<n.min&&(n.min=o),o>n.max&&(n.max=o))}),n}_updateRadius(){const t=this.chart,n=t.chartArea,r=t.options,i=Math.min(n.right-n.left,n.bottom-n.top),o=Math.max(i/2,0),s=Math.max(r.cutoutPercentage?o/100*r.cutoutPercentage:1,0),l=(o-s)/t.getVisibleDatasetCount();this.outerRadius=o-l*this.index,this.innerRadius=this.outerRadius-l}updateElements(t,n,r,i){const o=i==="reset",s=this.chart,c=s.options.animation,d=this._cachedMeta.rScale,f=d.xCenter,g=d.yCenter,m=d.getIndexAngle(0)-.5*_t;let x=m,w;const _=360/this.countVisibleElements();for(w=0;w<n;++w)x+=this._computeAngle(w,i,_);for(w=n;w<n+r;w++){const v=t[w];let b=x,S=x+this._computeAngle(w,i,_),C=s.getDataVisibility(w)?d.getDistanceFromCenterForValue(this.getParsed(w).r):0;x=S,o&&(c.animateScale&&(C=0),c.animateRotate&&(b=S=m));const E={x:f,y:g,innerRadius:0,outerRadius:C,startAngle:b,endAngle:S,options:this.resolveDataElementOptions(w,v.active?"active":i)};this.updateElement(v,w,E,i)}}countVisibleElements(){const t=this._cachedMeta;let n=0;return t.data.forEach((r,i)=>{!isNaN(this.getParsed(i).r)&&this.chart.getDataVisibility(i)&&n++}),n}_computeAngle(t,n,r){return this.chart.getDataVisibility(t)?Zr(this.resolveDataElementOptions(t,n).angle||r):0}}le(Xc,"id","polarArea"),le(Xc,"defaults",{dataElementType:"arc",animation:{animateRotate:!0,animateScale:!0},animations:{numbers:{type:"number",properties:["x","y","startAngle","endAngle","innerRadius","outerRadius"]}},indexAxis:"r",startAngle:0}),le(Xc,"overrides",{aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const n=t.data;if(n.labels.length&&n.datasets.length){const{labels:{pointStyle:r,color:i}}=t.legend.options;return n.labels.map((o,s)=>{const c=t.getDatasetMeta(0).controller.getStyle(s);return{text:o,fillStyle:c.backgroundColor,strokeStyle:c.borderColor,fontColor:i,lineWidth:c.borderWidth,pointStyle:r,hidden:!t.getDataVisibility(s),index:s}})}return[]}},onClick(t,n,r){r.chart.toggleDataVisibility(n.index),r.chart.update()}}},scales:{r:{type:"radialLinear",angleLines:{display:!1},beginAtZero:!0,grid:{circular:!0},pointLabels:{display:!1},startAngle:0}}});class g1 extends bo{}le(g1,"id","pie"),le(g1,"defaults",{cutout:0,rotation:0,circumference:360,radius:"100%"});class ah extends Qr{getLabelAndValue(t){const n=this._cachedMeta.vScale,r=this.getParsed(t);return{label:n.getLabels()[t],value:""+n.getLabelForValue(r[n.axis])}}parseObjectData(t,n,r,i){return yE.bind(this)(t,n,r,i)}update(t){const n=this._cachedMeta,r=n.dataset,i=n.data||[],o=n.iScale.getLabels();if(r.points=i,t!=="resize"){const s=this.resolveDatasetElementOptions(t);this.options.showLine||(s.borderWidth=0);const l={_loop:!0,_fullLoop:o.length===i.length,options:s};this.updateElement(r,void 0,l,t)}this.updateElements(i,0,i.length,t)}updateElements(t,n,r,i){const o=this._cachedMeta.rScale,s=i==="reset";for(let l=n;l<n+r;l++){const c=t[l],d=this.resolveDataElementOptions(l,c.active?"active":i),f=o.getPointPositionForValue(l,this.getParsed(l).r),g=s?o.xCenter:f.x,m=s?o.yCenter:f.y,x={x:g,y:m,angle:f.angle,skip:isNaN(g)||isNaN(m),options:d};this.updateElement(c,l,x,i)}}}le(ah,"id","radar"),le(ah,"defaults",{datasetElementType:"line",dataElementType:"point",indexAxis:"r",showLine:!0,elements:{line:{fill:"start"}}}),le(ah,"overrides",{aspectRatio:1,scales:{r:{type:"radialLinear"}}});class lh extends Qr{getLabelAndValue(t){const n=this._cachedMeta,r=this.chart.data.labels||[],{xScale:i,yScale:o}=n,s=this.getParsed(t),l=i.getLabelForValue(s.x),c=o.getLabelForValue(s.y);return{label:r[t]||"",value:"("+l+", "+c+")"}}update(t){const n=this._cachedMeta,{data:r=[]}=n,i=this.chart._animationsDisabled;let{start:o,count:s}=cE(n,r,i);if(this._drawStart=o,this._drawCount=s,uE(n)&&(o=0,s=r.length),this.options.showLine){this.datasetElementType||this.addElements();const{dataset:l,_dataset:c}=n;l._chart=this.chart,l._datasetIndex=this.index,l._decimated=!!c._decimated,l.points=r;const d=this.resolveDatasetElementOptions(t);d.segment=this.options.segment,this.updateElement(l,void 0,{animated:!i,options:d},t)}else this.datasetElementType&&(delete n.dataset,this.datasetElementType=!1);this.updateElements(r,o,s,t)}addElements(){const{showLine:t}=this.options;!this.datasetElementType&&t&&(this.datasetElementType=this.chart.registry.getElement("line")),super.addElements()}updateElements(t,n,r,i){const o=i==="reset",{iScale:s,vScale:l,_stacked:c,_dataset:d}=this._cachedMeta,f=this.resolveDataElementOptions(n,i),g=this.getSharedOptions(f),m=this.includeOptions(i,g),x=s.axis,w=l.axis,{spanGaps:_,segment:v}=this.options,b=tl(_)?_:Number.POSITIVE_INFINITY,S=this.chart._animationsDisabled||o||i==="none";let C=n>0&&this.getParsed(n-1);for(let E=n;E<n+r;++E){const T=t[E],N=this.getParsed(E),L=S?T:{},z=Ze(N[w]),B=L[x]=s.getPixelForValue(N[x],E),H=L[w]=o||z?l.getBasePixel():l.getPixelForValue(c?this.applyStack(l,N,c):N[w],E);L.skip=isNaN(B)||isNaN(H)||z,L.stop=E>0&&Math.abs(N[x]-C[x])>b,v&&(L.parsed=N,L.raw=d.data[E]),m&&(L.options=g||this.resolveDataElementOptions(E,T.active?"active":i)),S||this.updateElement(T,E,L,i),C=N}this.updateSharedOptions(g,i,f)}getMaxOverflow(){const t=this._cachedMeta,n=t.data||[];if(!this.options.showLine){let l=0;for(let c=n.length-1;c>=0;--c)l=Math.max(l,n[c].size(this.resolveDataElementOptions(c))/2);return l>0&&l}const r=t.dataset,i=r.options&&r.options.borderWidth||0;if(!n.length)return i;const o=n[0].size(this.resolveDataElementOptions(0)),s=n[n.length-1].size(this.resolveDataElementOptions(n.length-1));return Math.max(i,o,s)/2}}le(lh,"id","scatter"),le(lh,"defaults",{datasetElementType:!1,dataElementType:"point",showLine:!1,fill:!1}),le(lh,"overrides",{interaction:{mode:"point"},scales:{x:{type:"linear"},y:{type:"linear"}}});var CK=Object.freeze({__proto__:null,BarController:oh,BubbleController:sh,DoughnutController:bo,LineController:Kc,PieController:g1,PolarAreaController:Xc,RadarController:ah,ScatterController:lh});function us(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}class zx{constructor(t){le(this,"options");this.options=t||{}}static override(t){Object.assign(zx.prototype,t)}init(){}formats(){return us()}parse(){return us()}format(){return us()}add(){return us()}diff(){return us()}startOf(){return us()}endOf(){return us()}}var PK={_date:zx};function EK(e,t,n,r){const{controller:i,data:o,_sorted:s}=e,l=i._cachedMeta.iScale;if(l&&t===l.axis&&t!=="r"&&s&&o.length){const c=l._reversePixels?qU:Vi;if(r){if(i._sharedOptions){const d=o[0],f=typeof d.getRange=="function"&&d.getRange(t);if(f){const g=c(o,t,n-f),m=c(o,t,n+f);return{lo:g.lo,hi:m.hi}}}}else return c(o,t,n)}return{lo:0,hi:o.length-1}}function id(e,t,n,r,i){const o=e.getSortedVisibleDatasetMetas(),s=n[t];for(let l=0,c=o.length;l<c;++l){const{index:d,data:f}=o[l],{lo:g,hi:m}=EK(o[l],t,s,i);for(let x=g;x<=m;++x){const w=f[x];w.skip||r(w,d,x)}}}function MK(e){const t=e.indexOf("x")!==-1,n=e.indexOf("y")!==-1;return function(r,i){const o=t?Math.abs(r.x-i.x):0,s=n?Math.abs(r.y-i.y):0;return Math.sqrt(Math.pow(o,2)+Math.pow(s,2))}}function D0(e,t,n,r,i){const o=[];return!i&&!e.isPointInArea(t)||id(e,n,t,function(l,c,d){!i&&!Ui(l,e.chartArea,0)||l.inRange(t.x,t.y,r)&&o.push({element:l,datasetIndex:c,index:d})},!0),o}function OK(e,t,n,r){let i=[];function o(s,l,c){const{startAngle:d,endAngle:f}=s.getProps(["startAngle","endAngle"],r),{angle:g}=iE(s,{x:t.x,y:t.y});Cu(g,d,f)&&i.push({element:s,datasetIndex:l,index:c})}return id(e,n,t,o),i}function RK(e,t,n,r,i,o){let s=[];const l=MK(n);let c=Number.POSITIVE_INFINITY;function d(f,g,m){const x=f.inRange(t.x,t.y,i);if(r&&!x)return;const w=f.getCenterPoint(i);if(!(!!o||e.isPointInArea(w))&&!x)return;const v=l(t,w);v<c?(s=[{element:f,datasetIndex:g,index:m}],c=v):v===c&&s.push({element:f,datasetIndex:g,index:m})}return id(e,n,t,d),s}function z0(e,t,n,r,i,o){return!o&&!e.isPointInArea(t)?[]:n==="r"&&!r?OK(e,t,n,i):RK(e,t,n,r,i,o)}function Kk(e,t,n,r,i){const o=[],s=n==="x"?"inXRange":"inYRange";let l=!1;return id(e,n,t,(c,d,f)=>{c[s](t[n],i)&&(o.push({element:c,datasetIndex:d,index:f}),l=l||c.inRange(t.x,t.y,i))}),r&&!l?[]:o}var TK={evaluateInteractionItems:id,modes:{index(e,t,n,r){const i=gs(t,e),o=n.axis||"x",s=n.includeInvisible||!1,l=n.intersect?D0(e,i,o,r,s):z0(e,i,o,!1,r,s),c=[];return l.length?(e.getSortedVisibleDatasetMetas().forEach(d=>{const f=l[0].index,g=d.data[f];g&&!g.skip&&c.push({element:g,datasetIndex:d.index,index:f})}),c):[]},dataset(e,t,n,r){const i=gs(t,e),o=n.axis||"xy",s=n.includeInvisible||!1;let l=n.intersect?D0(e,i,o,r,s):z0(e,i,o,!1,r,s);if(l.length>0){const c=l[0].datasetIndex,d=e.getDatasetMeta(c).data;l=[];for(let f=0;f<d.length;++f)l.push({element:d[f],datasetIndex:c,index:f})}return l},point(e,t,n,r){const i=gs(t,e),o=n.axis||"xy",s=n.includeInvisible||!1;return D0(e,i,o,r,s)},nearest(e,t,n,r){const i=gs(t,e),o=n.axis||"xy",s=n.includeInvisible||!1;return z0(e,i,o,n.intersect,r,s)},x(e,t,n,r){const i=gs(t,e);return Kk(e,i,"x",n.intersect,r)},y(e,t,n,r){const i=gs(t,e);return Kk(e,i,"y",n.intersect,r)}}};const ME=["left","top","right","bottom"];function uc(e,t){return e.filter(n=>n.pos===t)}function Xk(e,t){return e.filter(n=>ME.indexOf(n.pos)===-1&&n.box.axis===t)}function dc(e,t){return e.sort((n,r)=>{const i=t?r:n,o=t?n:r;return i.weight===o.weight?i.index-o.index:i.weight-o.weight})}function AK(e){const t=[];let n,r,i,o,s,l;for(n=0,r=(e||[]).length;n<r;++n)i=e[n],{position:o,options:{stack:s,stackWeight:l=1}}=i,t.push({index:n,box:i,pos:o,horizontal:i.isHorizontal(),weight:i.weight,stack:s&&o+s,stackWeight:l});return t}function NK(e){const t={};for(const n of e){const{stack:r,pos:i,stackWeight:o}=n;if(!r||!ME.includes(i))continue;const s=t[r]||(t[r]={count:0,placed:0,weight:0,size:0});s.count++,s.weight+=o}return t}function LK(e,t){const n=NK(e),{vBoxMaxWidth:r,hBoxMaxHeight:i}=t;let o,s,l;for(o=0,s=e.length;o<s;++o){l=e[o];const{fullSize:c}=l.box,d=n[l.stack],f=d&&l.stackWeight/d.weight;l.horizontal?(l.width=f?f*r:c&&t.availableWidth,l.height=i):(l.width=r,l.height=f?f*i:c&&t.availableHeight)}return n}function $K(e){const t=AK(e),n=dc(t.filter(d=>d.box.fullSize),!0),r=dc(uc(t,"left"),!0),i=dc(uc(t,"right")),o=dc(uc(t,"top"),!0),s=dc(uc(t,"bottom")),l=Xk(t,"x"),c=Xk(t,"y");return{fullSize:n,leftAndTop:r.concat(o),rightAndBottom:i.concat(c).concat(s).concat(l),chartArea:uc(t,"chartArea"),vertical:r.concat(i).concat(c),horizontal:o.concat(s).concat(l)}}function Gk(e,t,n,r){return Math.max(e[n],t[n])+Math.max(e[r],t[r])}function OE(e,t){e.top=Math.max(e.top,t.top),e.left=Math.max(e.left,t.left),e.bottom=Math.max(e.bottom,t.bottom),e.right=Math.max(e.right,t.right)}function IK(e,t,n,r){const{pos:i,box:o}=n,s=e.maxPadding;if(!Ve(i)){n.size&&(e[i]-=n.size);const g=r[n.stack]||{size:0,count:1};g.size=Math.max(g.size,n.horizontal?o.height:o.width),n.size=g.size/g.count,e[i]+=n.size}o.getPadding&&OE(s,o.getPadding());const l=Math.max(0,t.outerWidth-Gk(s,e,"left","right")),c=Math.max(0,t.outerHeight-Gk(s,e,"top","bottom")),d=l!==e.w,f=c!==e.h;return e.w=l,e.h=c,n.horizontal?{same:d,other:f}:{same:f,other:d}}function DK(e){const t=e.maxPadding;function n(r){const i=Math.max(t[r]-e[r],0);return e[r]+=i,i}e.y+=n("top"),e.x+=n("left"),n("right"),n("bottom")}function zK(e,t){const n=t.maxPadding;function r(i){const o={left:0,top:0,right:0,bottom:0};return i.forEach(s=>{o[s]=Math.max(t[s],n[s])}),o}return r(e?["left","right"]:["top","bottom"])}function Sc(e,t,n,r){const i=[];let o,s,l,c,d,f;for(o=0,s=e.length,d=0;o<s;++o){l=e[o],c=l.box,c.update(l.width||t.w,l.height||t.h,zK(l.horizontal,t));const{same:g,other:m}=IK(t,n,l,r);d|=g&&i.length,f=f||m,c.fullSize||i.push(l)}return d&&Sc(i,t,n,r)||f}function Rf(e,t,n,r,i){e.top=n,e.left=t,e.right=t+r,e.bottom=n+i,e.width=r,e.height=i}function qk(e,t,n,r){const i=n.padding;let{x:o,y:s}=t;for(const l of e){const c=l.box,d=r[l.stack]||{count:1,placed:0,weight:1},f=l.stackWeight/d.weight||1;if(l.horizontal){const g=t.w*f,m=d.size||c.height;ku(d.start)&&(s=d.start),c.fullSize?Rf(c,i.left,s,n.outerWidth-i.right-i.left,m):Rf(c,t.left+d.placed,s,g,m),d.start=s,d.placed+=g,s=c.bottom}else{const g=t.h*f,m=d.size||c.width;ku(d.start)&&(o=d.start),c.fullSize?Rf(c,o,i.top,m,n.outerHeight-i.bottom-i.top):Rf(c,o,t.top+d.placed,m,g),d.start=o,d.placed+=g,o=c.right}}t.x=o,t.y=s}var En={addBox(e,t){e.boxes||(e.boxes=[]),t.fullSize=t.fullSize||!1,t.position=t.position||"top",t.weight=t.weight||0,t._layers=t._layers||function(){return[{z:0,draw(n){t.draw(n)}}]},e.boxes.push(t)},removeBox(e,t){const n=e.boxes?e.boxes.indexOf(t):-1;n!==-1&&e.boxes.splice(n,1)},configure(e,t,n){t.fullSize=n.fullSize,t.position=n.position,t.weight=n.weight},update(e,t,n,r){if(!e)return;const i=Rn(e.options.layout.padding),o=Math.max(t-i.width,0),s=Math.max(n-i.height,0),l=$K(e.boxes),c=l.vertical,d=l.horizontal;st(e.boxes,_=>{typeof _.beforeLayout=="function"&&_.beforeLayout()});const f=c.reduce((_,v)=>v.box.options&&v.box.options.display===!1?_:_+1,0)||1,g=Object.freeze({outerWidth:t,outerHeight:n,padding:i,availableWidth:o,availableHeight:s,vBoxMaxWidth:o/2/f,hBoxMaxHeight:s/2}),m=Object.assign({},i);OE(m,Rn(r));const x=Object.assign({maxPadding:m,w:o,h:s,x:i.left,y:i.top},i),w=LK(c.concat(d),g);Sc(l.fullSize,x,g,w),Sc(c,x,g,w),Sc(d,x,g,w)&&Sc(c,x,g,w),DK(x),qk(l.leftAndTop,x,g,w),x.x+=x.w,x.y+=x.h,qk(l.rightAndBottom,x,g,w),e.chartArea={left:x.left,top:x.top,right:x.left+x.w,bottom:x.top+x.h,height:x.h,width:x.w},st(l.chartArea,_=>{const v=_.box;Object.assign(v,e.chartArea),v.update(x.w,x.h,{left:0,top:0,right:0,bottom:0})})}};class RE{acquireContext(t,n){}releaseContext(t){return!1}addEventListener(t,n,r){}removeEventListener(t,n,r){}getDevicePixelRatio(){return 1}getMaximumSize(t,n,r,i){return n=Math.max(0,n||t.width),r=r||t.height,{width:n,height:Math.max(0,i?Math.floor(n/i):r)}}isAttached(t){return!0}updateConfig(t){}}class FK extends RE{acquireContext(t){return t&&t.getContext&&t.getContext("2d")||null}updateConfig(t){t.options.animation=!1}}const ch="$chartjs",BK={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},Zk=e=>e===null||e==="";function jK(e,t){const n=e.style,r=e.getAttribute("height"),i=e.getAttribute("width");if(e[ch]={initial:{height:r,width:i,style:{display:n.display,height:n.height,width:n.width}}},n.display=n.display||"block",n.boxSizing=n.boxSizing||"border-box",Zk(i)){const o=Nk(e,"width");o!==void 0&&(e.width=o)}if(Zk(r))if(e.style.height==="")e.height=e.width/(t||2);else{const o=Nk(e,"height");o!==void 0&&(e.height=o)}return e}const TE=HY?{passive:!0}:!1;function WK(e,t,n){e&&e.addEventListener(t,n,TE)}function HK(e,t,n){e&&e.canvas&&e.canvas.removeEventListener(t,n,TE)}function VK(e,t){const n=BK[e.type]||e.type,{x:r,y:i}=gs(e,t);return{type:n,chart:t,native:e,x:r!==void 0?r:null,y:i!==void 0?i:null}}function sp(e,t){for(const n of e)if(n===t||n.contains(t))return!0}function UK(e,t,n){const r=e.canvas,i=new MutationObserver(o=>{let s=!1;for(const l of o)s=s||sp(l.addedNodes,r),s=s&&!sp(l.removedNodes,r);s&&n()});return i.observe(document,{childList:!0,subtree:!0}),i}function YK(e,t,n){const r=e.canvas,i=new MutationObserver(o=>{let s=!1;for(const l of o)s=s||sp(l.removedNodes,r),s=s&&!sp(l.addedNodes,r);s&&n()});return i.observe(document,{childList:!0,subtree:!0}),i}const Eu=new Map;let Qk=0;function AE(){const e=window.devicePixelRatio;e!==Qk&&(Qk=e,Eu.forEach((t,n)=>{n.currentDevicePixelRatio!==e&&t()}))}function KK(e,t){Eu.size||window.addEventListener("resize",AE),Eu.set(e,t)}function XK(e){Eu.delete(e),Eu.size||window.removeEventListener("resize",AE)}function GK(e,t,n){const r=e.canvas,i=r&&Dx(r);if(!i)return;const o=lE((l,c)=>{const d=i.clientWidth;n(l,c),d<i.clientWidth&&n()},window),s=new ResizeObserver(l=>{const c=l[0],d=c.contentRect.width,f=c.contentRect.height;d===0&&f===0||o(d,f)});return s.observe(i),KK(e,o),s}function F0(e,t,n){n&&n.disconnect(),t==="resize"&&XK(e)}function qK(e,t,n){const r=e.canvas,i=lE(o=>{e.ctx!==null&&n(VK(o,e))},e);return WK(r,t,i),i}class ZK extends RE{acquireContext(t,n){const r=t&&t.getContext&&t.getContext("2d");return r&&r.canvas===t?(jK(t,n),r):null}releaseContext(t){const n=t.canvas;if(!n[ch])return!1;const r=n[ch].initial;["height","width"].forEach(o=>{const s=r[o];Ze(s)?n.removeAttribute(o):n.setAttribute(o,s)});const i=r.style||{};return Object.keys(i).forEach(o=>{n.style[o]=i[o]}),n.width=n.width,delete n[ch],!0}addEventListener(t,n,r){this.removeEventListener(t,n);const i=t.$proxies||(t.$proxies={}),s={attach:UK,detach:YK,resize:GK}[n]||qK;i[n]=s(t,n,r)}removeEventListener(t,n){const r=t.$proxies||(t.$proxies={}),i=r[n];if(!i)return;({attach:F0,detach:F0,resize:F0}[n]||HK)(t,n,i),r[n]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(t,n,r,i){return WY(t,n,r,i)}isAttached(t){const n=t&&Dx(t);return!!(n&&n.isConnected)}}function QK(e){return!Ix()||typeof OffscreenCanvas!="undefined"&&e instanceof OffscreenCanvas?FK:ZK}class Jr{constructor(){le(this,"x");le(this,"y");le(this,"active",!1);le(this,"options");le(this,"$animations")}tooltipPosition(t){const{x:n,y:r}=this.getProps(["x","y"],t);return{x:n,y:r}}hasValue(){return tl(this.x)&&tl(this.y)}getProps(t,n){const r=this.$animations;if(!n||!r)return this;const i={};return t.forEach(o=>{i[o]=r[o]&&r[o].active()?r[o]._to:this[o]}),i}}le(Jr,"defaults",{}),le(Jr,"defaultRoutes");function JK(e,t){const n=e.options.ticks,r=eX(e),i=Math.min(n.maxTicksLimit||r,r),o=n.major.enabled?nX(t):[],s=o.length,l=o[0],c=o[s-1],d=[];if(s>i)return rX(t,d,o,s/i),d;const f=tX(o,t,i);if(s>0){let g,m;const x=s>1?Math.round((c-l)/(s-1)):null;for(Tf(t,d,f,Ze(x)?0:l-x,l),g=0,m=s-1;g<m;g++)Tf(t,d,f,o[g],o[g+1]);return Tf(t,d,f,c,Ze(x)?t.length:c+x),d}return Tf(t,d,f),d}function eX(e){const t=e.options.offset,n=e._tickSize(),r=e._length/n+(t?0:1),i=e._maxLength/n;return Math.floor(Math.min(r,i))}function tX(e,t,n){const r=iX(e),i=t.length/n;if(!r)return Math.max(i,1);const o=YU(r);for(let s=0,l=o.length-1;s<l;s++){const c=o[s];if(c>i)return c}return Math.max(i,1)}function nX(e){const t=[];let n,r;for(n=0,r=e.length;n<r;n++)e[n].major&&t.push(n);return t}function rX(e,t,n,r){let i=0,o=n[0],s;for(r=Math.ceil(r),s=0;s<e.length;s++)s===o&&(t.push(e[s]),i++,o=n[i*r])}function Tf(e,t,n,r,i){const o=Ae(r,0),s=Math.min(Ae(i,e.length),e.length);let l=0,c,d,f;for(n=Math.ceil(n),i&&(c=i-r,n=c/Math.floor(c/n)),f=o;f<0;)l++,f=Math.round(o+l*n);for(d=Math.max(o,0);d<s;d++)d===f&&(t.push(e[d]),l++,f=Math.round(o+l*n))}function iX(e){const t=e.length;let n,r;if(t<2)return!1;for(r=e[0],n=1;n<t;++n)if(e[n]-e[n-1]!==r)return!1;return r}const oX=e=>e==="left"?"right":e==="right"?"left":e,Jk=(e,t,n)=>t==="top"||t==="left"?e[t]+n:e[t]-n,eC=(e,t)=>Math.min(t||e,e);function tC(e,t){const n=[],r=e.length/t,i=e.length;let o=0;for(;o<i;o+=r)n.push(e[Math.floor(o)]);return n}function sX(e,t,n){const r=e.ticks.length,i=Math.min(t,r-1),o=e._startPixel,s=e._endPixel,l=1e-6;let c=e.getPixelForTick(i),d;if(!(n&&(r===1?d=Math.max(c-o,s-c):t===0?d=(e.getPixelForTick(1)-c)/2:d=(c-e.getPixelForTick(i-1))/2,c+=i<t?d:-d,c<o-l||c>s+l)))return c}function aX(e,t){st(e,n=>{const r=n.gc,i=r.length/2;let o;if(i>t){for(o=0;o<i;++o)delete n.data[r[o]];r.splice(0,i)}})}function fc(e){return e.drawTicks?e.tickLength:0}function nC(e,t){if(!e.display)return 0;const n=en(e.font,t),r=Rn(e.padding);return(xt(e.text)?e.text.length:1)*n.lineHeight+r.height}function lX(e,t){return Zo(e,{scale:t,type:"scale"})}function cX(e,t,n){return Zo(e,{tick:n,index:t,type:"tick"})}function uX(e,t,n){let r=Rx(e);return(n&&t!=="right"||!n&&t==="right")&&(r=oX(r)),r}function dX(e,t,n,r){const{top:i,left:o,bottom:s,right:l,chart:c}=e,{chartArea:d,scales:f}=c;let g=0,m,x,w;const _=s-i,v=l-o;if(e.isHorizontal()){if(x=_n(r,o,l),Ve(n)){const b=Object.keys(n)[0],S=n[b];w=f[b].getPixelForValue(S)+_-t}else n==="center"?w=(d.bottom+d.top)/2+_-t:w=Jk(e,n,t);m=l-o}else{if(Ve(n)){const b=Object.keys(n)[0],S=n[b];x=f[b].getPixelForValue(S)-v+t}else n==="center"?x=(d.left+d.right)/2-v+t:x=Jk(e,n,t);w=_n(r,s,i),g=n==="left"?-Wt:Wt}return{titleX:x,titleY:w,maxWidth:m,rotation:g}}class Vs extends Jr{constructor(t){super(),this.id=t.id,this.type=t.type,this.options=void 0,this.ctx=t.ctx,this.chart=t.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(t){this.options=t.setContext(this.getContext()),this.axis=t.axis,this._userMin=this.parse(t.min),this._userMax=this.parse(t.max),this._suggestedMin=this.parse(t.suggestedMin),this._suggestedMax=this.parse(t.suggestedMax)}parse(t,n){return t}getUserBounds(){let{_userMin:t,_userMax:n,_suggestedMin:r,_suggestedMax:i}=this;return t=ar(t,Number.POSITIVE_INFINITY),n=ar(n,Number.NEGATIVE_INFINITY),r=ar(r,Number.POSITIVE_INFINITY),i=ar(i,Number.NEGATIVE_INFINITY),{min:ar(t,r),max:ar(n,i),minDefined:Dt(t),maxDefined:Dt(n)}}getMinMax(t){let{min:n,max:r,minDefined:i,maxDefined:o}=this.getUserBounds(),s;if(i&&o)return{min:n,max:r};const l=this.getMatchingVisibleMetas();for(let c=0,d=l.length;c<d;++c)s=l[c].controller.getMinMax(this,t),i||(n=Math.min(n,s.min)),o||(r=Math.max(r,s.max));return n=o&&n>r?r:n,r=i&&n>r?n:r,{min:ar(n,ar(r,n)),max:ar(r,ar(n,r))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){const t=this.chart.data;return this.options.labels||(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels||[]}getLabelItems(t=this.chart.chartArea){return this._labelItems||(this._labelItems=this._computeLabelItems(t))}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){mt(this.options.beforeUpdate,[this])}update(t,n,r){const{beginAtZero:i,grace:o,ticks:s}=this.options,l=s.sampleSize;this.beforeUpdate(),this.maxWidth=t,this.maxHeight=n,this._margins=r=Object.assign({left:0,right:0,top:0,bottom:0},r),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+r.left+r.right:this.height+r.top+r.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=bY(this,o,i),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();const c=l<this.ticks.length;this._convertTicksToLabels(c?tC(this.ticks,l):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),s.display&&(s.autoSkip||s.source==="auto")&&(this.ticks=JK(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),c&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let t=this.options.reverse,n,r;this.isHorizontal()?(n=this.left,r=this.right):(n=this.top,r=this.bottom,t=!t),this._startPixel=n,this._endPixel=r,this._reversePixels=t,this._length=r-n,this._alignToPixels=this.options.alignToPixels}afterUpdate(){mt(this.options.afterUpdate,[this])}beforeSetDimensions(){mt(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){mt(this.options.afterSetDimensions,[this])}_callHooks(t){this.chart.notifyPlugins(t,this.getContext()),mt(this.options[t],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){mt(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(t){const n=this.options.ticks;let r,i,o;for(r=0,i=t.length;r<i;r++)o=t[r],o.label=mt(n.callback,[o.value,r,t],this)}afterTickToLabelConversion(){mt(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){mt(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){const t=this.options,n=t.ticks,r=eC(this.ticks.length,t.ticks.maxTicksLimit),i=n.minRotation||0,o=n.maxRotation;let s=i,l,c,d;if(!this._isVisible()||!n.display||i>=o||r<=1||!this.isHorizontal()){this.labelRotation=i;return}const f=this._getLabelSizes(),g=f.widest.width,m=f.highest.height,x=on(this.chart.width-g,0,this.maxWidth);l=t.offset?this.maxWidth/r:x/(r-1),g+6>l&&(l=x/(r-(t.offset?.5:1)),c=this.maxHeight-fc(t.grid)-n.padding-nC(t.title,this.chart.options.font),d=Math.sqrt(g*g+m*m),s=Mx(Math.min(Math.asin(on((f.highest.height+6)/l,-1,1)),Math.asin(on(c/d,-1,1))-Math.asin(on(m/d,-1,1)))),s=Math.max(i,Math.min(o,s))),this.labelRotation=s}afterCalculateLabelRotation(){mt(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){mt(this.options.beforeFit,[this])}fit(){const t={width:0,height:0},{chart:n,options:{ticks:r,title:i,grid:o}}=this,s=this._isVisible(),l=this.isHorizontal();if(s){const c=nC(i,n.options.font);if(l?(t.width=this.maxWidth,t.height=fc(o)+c):(t.height=this.maxHeight,t.width=fc(o)+c),r.display&&this.ticks.length){const{first:d,last:f,widest:g,highest:m}=this._getLabelSizes(),x=r.padding*2,w=Zr(this.labelRotation),_=Math.cos(w),v=Math.sin(w);if(l){const b=r.mirror?0:v*g.width+_*m.height;t.height=Math.min(this.maxHeight,t.height+b+x)}else{const b=r.mirror?0:_*g.width+v*m.height;t.width=Math.min(this.maxWidth,t.width+b+x)}this._calculatePadding(d,f,v,_)}}this._handleMargins(),l?(this.width=this._length=n.width-this._margins.left-this._margins.right,this.height=t.height):(this.width=t.width,this.height=this._length=n.height-this._margins.top-this._margins.bottom)}_calculatePadding(t,n,r,i){const{ticks:{align:o,padding:s},position:l}=this.options,c=this.labelRotation!==0,d=l!=="top"&&this.axis==="x";if(this.isHorizontal()){const f=this.getPixelForTick(0)-this.left,g=this.right-this.getPixelForTick(this.ticks.length-1);let m=0,x=0;c?d?(m=i*t.width,x=r*n.height):(m=r*t.height,x=i*n.width):o==="start"?x=n.width:o==="end"?m=t.width:o!=="inner"&&(m=t.width/2,x=n.width/2),this.paddingLeft=Math.max((m-f+s)*this.width/(this.width-f),0),this.paddingRight=Math.max((x-g+s)*this.width/(this.width-g),0)}else{let f=n.height/2,g=t.height/2;o==="start"?(f=0,g=t.height):o==="end"&&(f=n.height,g=0),this.paddingTop=f+s,this.paddingBottom=g+s}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){mt(this.options.afterFit,[this])}isHorizontal(){const{axis:t,position:n}=this.options;return n==="top"||n==="bottom"||t==="x"}isFullSize(){return this.options.fullSize}_convertTicksToLabels(t){this.beforeTickToLabelConversion(),this.generateTickLabels(t);let n,r;for(n=0,r=t.length;n<r;n++)Ze(t[n].label)&&(t.splice(n,1),r--,n--);this.afterTickToLabelConversion()}_getLabelSizes(){let t=this._labelSizes;if(!t){const n=this.options.ticks.sampleSize;let r=this.ticks;n<r.length&&(r=tC(r,n)),this._labelSizes=t=this._computeLabelSizes(r,r.length,this.options.ticks.maxTicksLimit)}return t}_computeLabelSizes(t,n,r){const{ctx:i,_longestTextCache:o}=this,s=[],l=[],c=Math.floor(n/eC(n,r));let d=0,f=0,g,m,x,w,_,v,b,S,C,E,T;for(g=0;g<n;g+=c){if(w=t[g].label,_=this._resolveTickFontOptions(g),i.font=v=_.string,b=o[v]=o[v]||{data:{},gc:[]},S=_.lineHeight,C=E=0,!Ze(w)&&!xt(w))C=ip(i,b.data,b.gc,C,w),E=S;else if(xt(w))for(m=0,x=w.length;m<x;++m)T=w[m],!Ze(T)&&!xt(T)&&(C=ip(i,b.data,b.gc,C,T),E+=S);s.push(C),l.push(E),d=Math.max(C,d),f=Math.max(E,f)}aX(o,n);const N=s.indexOf(d),L=l.indexOf(f),z=B=>({width:s[B]||0,height:l[B]||0});return{first:z(0),last:z(n-1),widest:z(N),highest:z(L),widths:s,heights:l}}getLabelForValue(t){return t}getPixelForValue(t,n){return NaN}getValueForPixel(t){}getPixelForTick(t){const n=this.ticks;return t<0||t>n.length-1?null:this.getPixelForValue(n[t].value)}getPixelForDecimal(t){this._reversePixels&&(t=1-t);const n=this._startPixel+t*this._length;return GU(this._alignToPixels?cs(this.chart,n,0):n)}getDecimalForPixel(t){const n=(t-this._startPixel)/this._length;return this._reversePixels?1-n:n}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){const{min:t,max:n}=this;return t<0&&n<0?n:t>0&&n>0?t:0}getContext(t){const n=this.ticks||[];if(t>=0&&t<n.length){const r=n[t];return r.$context||(r.$context=cX(this.getContext(),t,r))}return this.$context||(this.$context=lX(this.chart.getContext(),this))}_tickSize(){const t=this.options.ticks,n=Zr(this.labelRotation),r=Math.abs(Math.cos(n)),i=Math.abs(Math.sin(n)),o=this._getLabelSizes(),s=t.autoSkipPadding||0,l=o?o.widest.width+s:0,c=o?o.highest.height+s:0;return this.isHorizontal()?c*r>l*i?l/r:c/i:c*i<l*r?c/r:l/i}_isVisible(){const t=this.options.display;return t!=="auto"?!!t:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(t){const n=this.axis,r=this.chart,i=this.options,{grid:o,position:s,border:l}=i,c=o.offset,d=this.isHorizontal(),g=this.ticks.length+(c?1:0),m=fc(o),x=[],w=l.setContext(this.getContext()),_=w.display?w.width:0,v=_/2,b=function(ge){return cs(r,ge,_)};let S,C,E,T,N,L,z,B,H,Q,te,ae;if(s==="top")S=b(this.bottom),L=this.bottom-m,B=S-v,Q=b(t.top)+v,ae=t.bottom;else if(s==="bottom")S=b(this.top),Q=t.top,ae=b(t.bottom)-v,L=S+v,B=this.top+m;else if(s==="left")S=b(this.right),N=this.right-m,z=S-v,H=b(t.left)+v,te=t.right;else if(s==="right")S=b(this.left),H=t.left,te=b(t.right)-v,N=S+v,z=this.left+m;else if(n==="x"){if(s==="center")S=b((t.top+t.bottom)/2+.5);else if(Ve(s)){const ge=Object.keys(s)[0],re=s[ge];S=b(this.chart.scales[ge].getPixelForValue(re))}Q=t.top,ae=t.bottom,L=S+v,B=L+m}else if(n==="y"){if(s==="center")S=b((t.left+t.right)/2);else if(Ve(s)){const ge=Object.keys(s)[0],re=s[ge];S=b(this.chart.scales[ge].getPixelForValue(re))}N=S-v,z=N-m,H=t.left,te=t.right}const ye=Ae(i.ticks.maxTicksLimit,g),oe=Math.max(1,Math.ceil(g/ye));for(C=0;C<g;C+=oe){const ge=this.getContext(C),re=o.setContext(ge),de=l.setContext(ge),Ue=re.lineWidth,ct=re.color,Z=de.dash||[],U=de.dashOffset,V=re.tickWidth,X=re.tickColor,se=re.tickBorderDash||[],F=re.tickBorderDashOffset;E=sX(this,C,c),E!==void 0&&(T=cs(r,E,Ue),d?N=z=H=te=T:L=B=Q=ae=T,x.push({tx1:N,ty1:L,tx2:z,ty2:B,x1:H,y1:Q,x2:te,y2:ae,width:Ue,color:ct,borderDash:Z,borderDashOffset:U,tickWidth:V,tickColor:X,tickBorderDash:se,tickBorderDashOffset:F}))}return this._ticksLength=g,this._borderValue=S,x}_computeLabelItems(t){const n=this.axis,r=this.options,{position:i,ticks:o}=r,s=this.isHorizontal(),l=this.ticks,{align:c,crossAlign:d,padding:f,mirror:g}=o,m=fc(r.grid),x=m+f,w=g?-f:x,_=-Zr(this.labelRotation),v=[];let b,S,C,E,T,N,L,z,B,H,Q,te,ae="middle";if(i==="top")N=this.bottom-w,L=this._getXAxisLabelAlignment();else if(i==="bottom")N=this.top+w,L=this._getXAxisLabelAlignment();else if(i==="left"){const oe=this._getYAxisLabelAlignment(m);L=oe.textAlign,T=oe.x}else if(i==="right"){const oe=this._getYAxisLabelAlignment(m);L=oe.textAlign,T=oe.x}else if(n==="x"){if(i==="center")N=(t.top+t.bottom)/2+x;else if(Ve(i)){const oe=Object.keys(i)[0],ge=i[oe];N=this.chart.scales[oe].getPixelForValue(ge)+x}L=this._getXAxisLabelAlignment()}else if(n==="y"){if(i==="center")T=(t.left+t.right)/2-x;else if(Ve(i)){const oe=Object.keys(i)[0],ge=i[oe];T=this.chart.scales[oe].getPixelForValue(ge)}L=this._getYAxisLabelAlignment(m).textAlign}n==="y"&&(c==="start"?ae="top":c==="end"&&(ae="bottom"));const ye=this._getLabelSizes();for(b=0,S=l.length;b<S;++b){C=l[b],E=C.label;const oe=o.setContext(this.getContext(b));z=this.getPixelForTick(b)+o.labelOffset,B=this._resolveTickFontOptions(b),H=B.lineHeight,Q=xt(E)?E.length:1;const ge=Q/2,re=oe.color,de=oe.textStrokeColor,Ue=oe.textStrokeWidth;let ct=L;s?(T=z,L==="inner"&&(b===S-1?ct=this.options.reverse?"left":"right":b===0?ct=this.options.reverse?"right":"left":ct="center"),i==="top"?d==="near"||_!==0?te=-Q*H+H/2:d==="center"?te=-ye.highest.height/2-ge*H+H:te=-ye.highest.height+H/2:d==="near"||_!==0?te=H/2:d==="center"?te=ye.highest.height/2-ge*H:te=ye.highest.height-Q*H,g&&(te*=-1),_!==0&&!oe.showLabelBackdrop&&(T+=H/2*Math.sin(_))):(N=z,te=(1-Q)*H/2);let Z;if(oe.showLabelBackdrop){const U=Rn(oe.backdropPadding),V=ye.heights[b],X=ye.widths[b];let se=te-U.top,F=0-U.left;switch(ae){case"middle":se-=V/2;break;case"bottom":se-=V;break}switch(L){case"center":F-=X/2;break;case"right":F-=X;break;case"inner":b===S-1?F-=X:b>0&&(F-=X/2);break}Z={left:F,top:se,width:X+U.width,height:V+U.height,color:oe.backdropColor}}v.push({label:E,font:B,textOffset:te,options:{rotation:_,color:re,strokeColor:de,strokeWidth:Ue,textAlign:ct,textBaseline:ae,translation:[T,N],backdrop:Z}})}return v}_getXAxisLabelAlignment(){const{position:t,ticks:n}=this.options;if(-Zr(this.labelRotation))return t==="top"?"left":"right";let i="center";return n.align==="start"?i="left":n.align==="end"?i="right":n.align==="inner"&&(i="inner"),i}_getYAxisLabelAlignment(t){const{position:n,ticks:{crossAlign:r,mirror:i,padding:o}}=this.options,s=this._getLabelSizes(),l=t+o,c=s.widest.width;let d,f;return n==="left"?i?(f=this.right+o,r==="near"?d="left":r==="center"?(d="center",f+=c/2):(d="right",f+=c)):(f=this.right-l,r==="near"?d="right":r==="center"?(d="center",f-=c/2):(d="left",f=this.left)):n==="right"?i?(f=this.left+o,r==="near"?d="right":r==="center"?(d="center",f-=c/2):(d="left",f-=c)):(f=this.left+l,r==="near"?d="left":r==="center"?(d="center",f+=c/2):(d="right",f=this.right)):d="right",{textAlign:d,x:f}}_computeLabelArea(){if(this.options.ticks.mirror)return;const t=this.chart,n=this.options.position;if(n==="left"||n==="right")return{top:0,left:this.left,bottom:t.height,right:this.right};if(n==="top"||n==="bottom")return{top:this.top,left:0,bottom:this.bottom,right:t.width}}drawBackground(){const{ctx:t,options:{backgroundColor:n},left:r,top:i,width:o,height:s}=this;n&&(t.save(),t.fillStyle=n,t.fillRect(r,i,o,s),t.restore())}getLineWidthForValue(t){const n=this.options.grid;if(!this._isVisible()||!n.display)return 0;const i=this.ticks.findIndex(o=>o.value===t);return i>=0?n.setContext(this.getContext(i)).lineWidth:0}drawGrid(t){const n=this.options.grid,r=this.ctx,i=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(t));let o,s;const l=(c,d,f)=>{!f.width||!f.color||(r.save(),r.lineWidth=f.width,r.strokeStyle=f.color,r.setLineDash(f.borderDash||[]),r.lineDashOffset=f.borderDashOffset,r.beginPath(),r.moveTo(c.x,c.y),r.lineTo(d.x,d.y),r.stroke(),r.restore())};if(n.display)for(o=0,s=i.length;o<s;++o){const c=i[o];n.drawOnChartArea&&l({x:c.x1,y:c.y1},{x:c.x2,y:c.y2},c),n.drawTicks&&l({x:c.tx1,y:c.ty1},{x:c.tx2,y:c.ty2},{color:c.tickColor,width:c.tickWidth,borderDash:c.tickBorderDash,borderDashOffset:c.tickBorderDashOffset})}}drawBorder(){const{chart:t,ctx:n,options:{border:r,grid:i}}=this,o=r.setContext(this.getContext()),s=r.display?o.width:0;if(!s)return;const l=i.setContext(this.getContext(0)).lineWidth,c=this._borderValue;let d,f,g,m;this.isHorizontal()?(d=cs(t,this.left,s)-s/2,f=cs(t,this.right,l)+l/2,g=m=c):(g=cs(t,this.top,s)-s/2,m=cs(t,this.bottom,l)+l/2,d=f=c),n.save(),n.lineWidth=o.width,n.strokeStyle=o.color,n.beginPath(),n.moveTo(d,g),n.lineTo(f,m),n.stroke(),n.restore()}drawLabels(t){if(!this.options.ticks.display)return;const r=this.ctx,i=this._computeLabelArea();i&&xg(r,i);const o=this.getLabelItems(t);for(const s of o){const l=s.options,c=s.font,d=s.label,f=s.textOffset;Is(r,d,0,f,c,l)}i&&bg(r)}drawTitle(){const{ctx:t,options:{position:n,title:r,reverse:i}}=this;if(!r.display)return;const o=en(r.font),s=Rn(r.padding),l=r.align;let c=o.lineHeight/2;n==="bottom"||n==="center"||Ve(n)?(c+=s.bottom,xt(r.text)&&(c+=o.lineHeight*(r.text.length-1))):c+=s.top;const{titleX:d,titleY:f,maxWidth:g,rotation:m}=dX(this,c,n,l);Is(t,r.text,0,0,o,{color:r.color,maxWidth:g,rotation:m,textAlign:uX(l,n,i),textBaseline:"middle",translation:[d,f]})}draw(t){!this._isVisible()||(this.drawBackground(),this.drawGrid(t),this.drawBorder(),this.drawTitle(),this.drawLabels(t))}_layers(){const t=this.options,n=t.ticks&&t.ticks.z||0,r=Ae(t.grid&&t.grid.z,-1),i=Ae(t.border&&t.border.z,0);return!this._isVisible()||this.draw!==Vs.prototype.draw?[{z:n,draw:o=>{this.draw(o)}}]:[{z:r,draw:o=>{this.drawBackground(),this.drawGrid(o),this.drawTitle()}},{z:i,draw:()=>{this.drawBorder()}},{z:n,draw:o=>{this.drawLabels(o)}}]}getMatchingVisibleMetas(t){const n=this.chart.getSortedVisibleDatasetMetas(),r=this.axis+"AxisID",i=[];let o,s;for(o=0,s=n.length;o<s;++o){const l=n[o];l[r]===this.id&&(!t||l.type===t)&&i.push(l)}return i}_resolveTickFontOptions(t){const n=this.options.ticks.setContext(this.getContext(t));return en(n.font)}_maxDigits(){const t=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/t}}class Af{constructor(t,n,r){this.type=t,this.scope=n,this.override=r,this.items=Object.create(null)}isForType(t){return Object.prototype.isPrototypeOf.call(this.type.prototype,t.prototype)}register(t){const n=Object.getPrototypeOf(t);let r;pX(n)&&(r=this.register(n));const i=this.items,o=t.id,s=this.scope+"."+o;if(!o)throw new Error("class does not have id: "+t);return o in i||(i[o]=t,fX(t,s,r),this.override&&zt.override(t.id,t.overrides)),s}get(t){return this.items[t]}unregister(t){const n=this.items,r=t.id,i=this.scope;r in n&&delete n[r],i&&r in zt[i]&&(delete zt[i][r],this.override&&delete $s[r])}}function fX(e,t,n){const r=Su(Object.create(null),[n?zt.get(n):{},zt.get(t),e.defaults]);zt.set(t,r),e.defaultRoutes&&hX(t,e.defaultRoutes),e.descriptors&&zt.describe(t,e.descriptors)}function hX(e,t){Object.keys(t).forEach(n=>{const r=n.split("."),i=r.pop(),o=[e].concat(r).join("."),s=t[n].split("."),l=s.pop(),c=s.join(".");zt.route(o,i,c,l)})}function pX(e){return"id"in e&&"defaults"in e}class gX{constructor(){this.controllers=new Af(Qr,"datasets",!0),this.elements=new Af(Jr,"elements"),this.plugins=new Af(Object,"plugins"),this.scales=new Af(Vs,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...t){this._each("register",t)}remove(...t){this._each("unregister",t)}addControllers(...t){this._each("register",t,this.controllers)}addElements(...t){this._each("register",t,this.elements)}addPlugins(...t){this._each("register",t,this.plugins)}addScales(...t){this._each("register",t,this.scales)}getController(t){return this._get(t,this.controllers,"controller")}getElement(t){return this._get(t,this.elements,"element")}getPlugin(t){return this._get(t,this.plugins,"plugin")}getScale(t){return this._get(t,this.scales,"scale")}removeControllers(...t){this._each("unregister",t,this.controllers)}removeElements(...t){this._each("unregister",t,this.elements)}removePlugins(...t){this._each("unregister",t,this.plugins)}removeScales(...t){this._each("unregister",t,this.scales)}_each(t,n,r){[...n].forEach(i=>{const o=r||this._getRegistryForType(i);r||o.isForType(i)||o===this.plugins&&i.id?this._exec(t,o,i):st(i,s=>{const l=r||this._getRegistryForType(s);this._exec(t,l,s)})})}_exec(t,n,r){const i=Ex(t);mt(r["before"+i],[],r),n[t](r),mt(r["after"+i],[],r)}_getRegistryForType(t){for(let n=0;n<this._typedRegistries.length;n++){const r=this._typedRegistries[n];if(r.isForType(t))return r}return this.plugins}_get(t,n,r){const i=n.get(t);if(i===void 0)throw new Error('"'+t+'" is not a registered '+r+".");return i}}var ai=new gX;class mX{constructor(){this._init=[]}notify(t,n,r,i){n==="beforeInit"&&(this._init=this._createDescriptors(t,!0),this._notify(this._init,t,"install"));const o=i?this._descriptors(t).filter(i):this._descriptors(t),s=this._notify(o,t,n,r);return n==="afterDestroy"&&(this._notify(o,t,"stop"),this._notify(this._init,t,"uninstall")),s}_notify(t,n,r,i){i=i||{};for(const o of t){const s=o.plugin,l=s[r],c=[n,i,o.options];if(mt(l,c,s)===!1&&i.cancelable)return!1}return!0}invalidate(){Ze(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(t){if(this._cache)return this._cache;const n=this._cache=this._createDescriptors(t);return this._notifyStateChanges(t),n}_createDescriptors(t,n){const r=t&&t.config,i=Ae(r.options&&r.options.plugins,{}),o=vX(r);return i===!1&&!n?[]:xX(t,o,i,n)}_notifyStateChanges(t){const n=this._oldCache||[],r=this._cache,i=(o,s)=>o.filter(l=>!s.some(c=>l.plugin.id===c.plugin.id));this._notify(i(n,r),t,"stop"),this._notify(i(r,n),t,"start")}}function vX(e){const t={},n=[],r=Object.keys(ai.plugins.items);for(let o=0;o<r.length;o++)n.push(ai.getPlugin(r[o]));const i=e.plugins||[];for(let o=0;o<i.length;o++){const s=i[o];n.indexOf(s)===-1&&(n.push(s),t[s.id]=!0)}return{plugins:n,localIds:t}}function yX(e,t){return!t&&e===!1?null:e===!0?{}:e}function xX(e,{plugins:t,localIds:n},r,i){const o=[],s=e.getContext();for(const l of t){const c=l.id,d=yX(r[c],i);d!==null&&o.push({plugin:l,options:bX(e.config,{plugin:l,local:n[c]},d,s)})}return o}function bX(e,{plugin:t,local:n},r,i){const o=e.pluginScopeKeys(t),s=e.getOptionScopes(r,o);return n&&t.defaults&&s.push(t.defaults),e.createResolver(s,i,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function m1(e,t){const n=zt.datasets[e]||{};return((t.datasets||{})[e]||{}).indexAxis||t.indexAxis||n.indexAxis||"x"}function wX(e,t){let n=e;return e==="_index_"?n=t:e==="_value_"&&(n=t==="x"?"y":"x"),n}function _X(e,t){return e===t?"_index_":"_value_"}function rC(e){if(e==="x"||e==="y"||e==="r")return e}function SX(e){if(e==="top"||e==="bottom")return"x";if(e==="left"||e==="right")return"y"}function v1(e,...t){if(rC(e))return e;for(const n of t){const r=n.axis||SX(n.position)||e.length>1&&rC(e[0].toLowerCase());if(r)return r}throw new Error(`Cannot determine type of '${e}' axis. Please provide 'axis' or 'position' option.`)}function iC(e,t,n){if(n[t+"AxisID"]===e)return{axis:t}}function kX(e,t){if(t.data&&t.data.datasets){const n=t.data.datasets.filter(r=>r.xAxisID===e||r.yAxisID===e);if(n.length)return iC(e,"x",n[0])||iC(e,"y",n[0])}return{}}function CX(e,t){const n=$s[e.type]||{scales:{}},r=t.scales||{},i=m1(e.type,t),o=Object.create(null);return Object.keys(r).forEach(s=>{const l=r[s];if(!Ve(l))return console.error(`Invalid scale configuration for scale: ${s}`);if(l._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${s}`);const c=v1(s,l,kX(s,e),zt.scales[l.type]),d=_X(c,i),f=n.scales||{};o[s]=Hc(Object.create(null),[{axis:c},l,f[c],f[d]])}),e.data.datasets.forEach(s=>{const l=s.type||e.type,c=s.indexAxis||m1(l,t),f=($s[l]||{}).scales||{};Object.keys(f).forEach(g=>{const m=wX(g,c),x=s[m+"AxisID"]||m;o[x]=o[x]||Object.create(null),Hc(o[x],[{axis:m},r[x],f[g]])})}),Object.keys(o).forEach(s=>{const l=o[s];Hc(l,[zt.scales[l.type],zt.scale])}),o}function NE(e){const t=e.options||(e.options={});t.plugins=Ae(t.plugins,{}),t.scales=CX(e,t)}function LE(e){return e=e||{},e.datasets=e.datasets||[],e.labels=e.labels||[],e}function PX(e){return e=e||{},e.data=LE(e.data),NE(e),e}const oC=new Map,$E=new Set;function Nf(e,t){let n=oC.get(e);return n||(n=t(),oC.set(e,n),$E.add(n)),n}const hc=(e,t,n)=>{const r=Uo(t,n);r!==void 0&&e.add(r)};class EX{constructor(t){this._config=PX(t),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(t){this._config.type=t}get data(){return this._config.data}set data(t){this._config.data=LE(t)}get options(){return this._config.options}set options(t){this._config.options=t}get plugins(){return this._config.plugins}update(){const t=this._config;this.clearCache(),NE(t)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(t){return Nf(t,()=>[[`datasets.${t}`,""]])}datasetAnimationScopeKeys(t,n){return Nf(`${t}.transition.${n}`,()=>[[`datasets.${t}.transitions.${n}`,`transitions.${n}`],[`datasets.${t}`,""]])}datasetElementScopeKeys(t,n){return Nf(`${t}-${n}`,()=>[[`datasets.${t}.elements.${n}`,`datasets.${t}`,`elements.${n}`,""]])}pluginScopeKeys(t){const n=t.id,r=this.type;return Nf(`${r}-plugin-${n}`,()=>[[`plugins.${n}`,...t.additionalOptionScopes||[]]])}_cachedScopes(t,n){const r=this._scopeCache;let i=r.get(t);return(!i||n)&&(i=new Map,r.set(t,i)),i}getOptionScopes(t,n,r){const{options:i,type:o}=this,s=this._cachedScopes(t,r),l=s.get(n);if(l)return l;const c=new Set;n.forEach(f=>{t&&(c.add(t),f.forEach(g=>hc(c,t,g))),f.forEach(g=>hc(c,i,g)),f.forEach(g=>hc(c,$s[o]||{},g)),f.forEach(g=>hc(c,zt,g)),f.forEach(g=>hc(c,h1,g))});const d=Array.from(c);return d.length===0&&d.push(Object.create(null)),$E.has(n)&&s.set(n,d),d}chartOptionScopes(){const{options:t,type:n}=this;return[t,$s[n]||{},zt.datasets[n]||{},{type:n},zt,h1]}resolveNamedOptions(t,n,r,i=[""]){const o={$shared:!0},{resolver:s,subPrefixes:l}=sC(this._resolverCache,t,i);let c=s;if(OX(s,n)){o.$shared=!1,r=Yo(r)?r():r;const d=this.createResolver(t,r,l);c=nl(s,r,d)}for(const d of n)o[d]=c[d];return o}createResolver(t,n,r=[""],i){const{resolver:o}=sC(this._resolverCache,t,r);return Ve(n)?nl(o,n,void 0,i):o}}function sC(e,t,n){let r=e.get(t);r||(r=new Map,e.set(t,r));const i=n.join();let o=r.get(i);return o||(o={resolver:Nx(t,n),subPrefixes:n.filter(l=>!l.toLowerCase().includes("hover"))},r.set(i,o)),o}const MX=e=>Ve(e)&&Object.getOwnPropertyNames(e).some(t=>Yo(e[t]));function OX(e,t){const{isScriptable:n,isIndexable:r}=pE(e);for(const i of t){const o=n(i),s=r(i),l=(s||o)&&e[i];if(o&&(Yo(l)||MX(l))||s&&xt(l))return!0}return!1}var RX="4.4.3";const TX=["top","bottom","left","right","chartArea"];function aC(e,t){return e==="top"||e==="bottom"||TX.indexOf(e)===-1&&t==="x"}function lC(e,t){return function(n,r){return n[e]===r[e]?n[t]-r[t]:n[e]-r[e]}}function cC(e){const t=e.chart,n=t.options.animation;t.notifyPlugins("afterRender"),mt(n&&n.onComplete,[e],t)}function AX(e){const t=e.chart,n=t.options.animation;mt(n&&n.onProgress,[e],t)}function IE(e){return Ix()&&typeof e=="string"?e=document.getElementById(e):e&&e.length&&(e=e[0]),e&&e.canvas&&(e=e.canvas),e}const uh={},uC=e=>{const t=IE(e);return Object.values(uh).filter(n=>n.canvas===t).pop()};function NX(e,t,n){const r=Object.keys(e);for(const i of r){const o=+i;if(o>=t){const s=e[i];delete e[i],(n>0||o>t)&&(e[o+n]=s)}}}function LX(e,t,n,r){return!n||e.type==="mouseout"?null:r?t:e}function Lf(e,t,n){return e.options.clip?e[n]:t[n]}function $X(e,t){const{xScale:n,yScale:r}=e;return n&&r?{left:Lf(n,t,"left"),right:Lf(n,t,"right"),top:Lf(r,t,"top"),bottom:Lf(r,t,"bottom")}:t}class di{static register(...t){ai.add(...t),dC()}static unregister(...t){ai.remove(...t),dC()}constructor(t,n){const r=this.config=new EX(n),i=IE(t),o=uC(i);if(o)throw new Error("Canvas is already in use. Chart with ID '"+o.id+"' must be destroyed before the canvas with ID '"+o.canvas.id+"' can be reused.");const s=r.createResolver(r.chartOptionScopes(),this.getContext());this.platform=new(r.platform||QK(i)),this.platform.updateConfig(r);const l=this.platform.acquireContext(i,s.aspectRatio),c=l&&l.canvas,d=c&&c.height,f=c&&c.width;if(this.id=DU(),this.ctx=l,this.canvas=c,this.width=f,this.height=d,this._options=s,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new mX,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=JU(g=>this.update(g),s.resizeDelay||0),this._dataChanges=[],uh[this.id]=this,!l||!c){console.error("Failed to create chart: can't acquire context from the given item");return}Ii.listen(this,"complete",cC),Ii.listen(this,"progress",AX),this._initialize(),this.attached&&this.update()}get aspectRatio(){const{options:{aspectRatio:t,maintainAspectRatio:n},width:r,height:i,_aspectRatio:o}=this;return Ze(t)?n&&o?o:i?r/i:null:t}get data(){return this.config.data}set data(t){this.config.data=t}get options(){return this._options}set options(t){this.config.options=t}get registry(){return ai}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():Ak(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return Ok(this.canvas,this.ctx),this}stop(){return Ii.stop(this),this}resize(t,n){Ii.running(this)?this._resizeBeforeDraw={width:t,height:n}:this._resize(t,n)}_resize(t,n){const r=this.options,i=this.canvas,o=r.maintainAspectRatio&&this.aspectRatio,s=this.platform.getMaximumSize(i,t,n,o),l=r.devicePixelRatio||this.platform.getDevicePixelRatio(),c=this.width?"resize":"attach";this.width=s.width,this.height=s.height,this._aspectRatio=this.aspectRatio,Ak(this,l,!0)&&(this.notifyPlugins("resize",{size:s}),mt(r.onResize,[this,s],this),this.attached&&this._doResize(c)&&this.render())}ensureScalesHaveIDs(){const n=this.options.scales||{};st(n,(r,i)=>{r.id=i})}buildOrUpdateScales(){const t=this.options,n=t.scales,r=this.scales,i=Object.keys(r).reduce((s,l)=>(s[l]=!1,s),{});let o=[];n&&(o=o.concat(Object.keys(n).map(s=>{const l=n[s],c=v1(s,l),d=c==="r",f=c==="x";return{options:l,dposition:d?"chartArea":f?"bottom":"left",dtype:d?"radialLinear":f?"category":"linear"}}))),st(o,s=>{const l=s.options,c=l.id,d=v1(c,l),f=Ae(l.type,s.dtype);(l.position===void 0||aC(l.position,d)!==aC(s.dposition))&&(l.position=s.dposition),i[c]=!0;let g=null;if(c in r&&r[c].type===f)g=r[c];else{const m=ai.getScale(f);g=new m({id:c,type:f,ctx:this.ctx,chart:this}),r[g.id]=g}g.init(l,t)}),st(i,(s,l)=>{s||delete r[l]}),st(r,s=>{En.configure(this,s,s.options),En.addBox(this,s)})}_updateMetasets(){const t=this._metasets,n=this.data.datasets.length,r=t.length;if(t.sort((i,o)=>i.index-o.index),r>n){for(let i=n;i<r;++i)this._destroyDatasetMeta(i);t.splice(n,r-n)}this._sortedMetasets=t.slice(0).sort(lC("order","index"))}_removeUnreferencedMetasets(){const{_metasets:t,data:{datasets:n}}=this;t.length>n.length&&delete this._stacks,t.forEach((r,i)=>{n.filter(o=>o===r._dataset).length===0&&this._destroyDatasetMeta(i)})}buildOrUpdateControllers(){const t=[],n=this.data.datasets;let r,i;for(this._removeUnreferencedMetasets(),r=0,i=n.length;r<i;r++){const o=n[r];let s=this.getDatasetMeta(r);const l=o.type||this.config.type;if(s.type&&s.type!==l&&(this._destroyDatasetMeta(r),s=this.getDatasetMeta(r)),s.type=l,s.indexAxis=o.indexAxis||m1(l,this.options),s.order=o.order||0,s.index=r,s.label=""+o.label,s.visible=this.isDatasetVisible(r),s.controller)s.controller.updateIndex(r),s.controller.linkScales();else{const c=ai.getController(l),{datasetElementType:d,dataElementType:f}=zt.datasets[l];Object.assign(c,{dataElementType:ai.getElement(f),datasetElementType:d&&ai.getElement(d)}),s.controller=new c(this,r),t.push(s.controller)}}return this._updateMetasets(),t}_resetElements(){st(this.data.datasets,(t,n)=>{this.getDatasetMeta(n).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(t){const n=this.config;n.update();const r=this._options=n.createResolver(n.chartOptionScopes(),this.getContext()),i=this._animationsDisabled=!r.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),this.notifyPlugins("beforeUpdate",{mode:t,cancelable:!0})===!1)return;const o=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let s=0;for(let d=0,f=this.data.datasets.length;d<f;d++){const{controller:g}=this.getDatasetMeta(d),m=!i&&o.indexOf(g)===-1;g.buildOrUpdateElements(m),s=Math.max(+g.getMaxOverflow(),s)}s=this._minPadding=r.layout.autoPadding?s:0,this._updateLayout(s),i||st(o,d=>{d.reset()}),this._updateDatasets(t),this.notifyPlugins("afterUpdate",{mode:t}),this._layers.sort(lC("z","_idx"));const{_active:l,_lastEvent:c}=this;c?this._eventHandler(c,!0):l.length&&this._updateHoverStyles(l,l,!0),this.render()}_updateScales(){st(this.scales,t=>{En.removeBox(this,t)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){const t=this.options,n=new Set(Object.keys(this._listeners)),r=new Set(t.events);(!bk(n,r)||!!this._responsiveListeners!==t.responsive)&&(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){const{_hiddenIndices:t}=this,n=this._getUniformDataChanges()||[];for(const{method:r,start:i,count:o}of n){const s=r==="_removeElements"?-o:o;NX(t,i,s)}}_getUniformDataChanges(){const t=this._dataChanges;if(!t||!t.length)return;this._dataChanges=[];const n=this.data.datasets.length,r=o=>new Set(t.filter(s=>s[0]===o).map((s,l)=>l+","+s.splice(1).join(","))),i=r(0);for(let o=1;o<n;o++)if(!bk(i,r(o)))return;return Array.from(i).map(o=>o.split(",")).map(o=>({method:o[1],start:+o[2],count:+o[3]}))}_updateLayout(t){if(this.notifyPlugins("beforeLayout",{cancelable:!0})===!1)return;En.update(this,this.width,this.height,t);const n=this.chartArea,r=n.width<=0||n.height<=0;this._layers=[],st(this.boxes,i=>{r&&i.position==="chartArea"||(i.configure&&i.configure(),this._layers.push(...i._layers()))},this),this._layers.forEach((i,o)=>{i._idx=o}),this.notifyPlugins("afterLayout")}_updateDatasets(t){if(this.notifyPlugins("beforeDatasetsUpdate",{mode:t,cancelable:!0})!==!1){for(let n=0,r=this.data.datasets.length;n<r;++n)this.getDatasetMeta(n).controller.configure();for(let n=0,r=this.data.datasets.length;n<r;++n)this._updateDataset(n,Yo(t)?t({datasetIndex:n}):t);this.notifyPlugins("afterDatasetsUpdate",{mode:t})}}_updateDataset(t,n){const r=this.getDatasetMeta(t),i={meta:r,index:t,mode:n,cancelable:!0};this.notifyPlugins("beforeDatasetUpdate",i)!==!1&&(r.controller._update(n),i.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",i))}render(){this.notifyPlugins("beforeRender",{cancelable:!0})!==!1&&(Ii.has(this)?this.attached&&!Ii.running(this)&&Ii.start(this):(this.draw(),cC({chart:this})))}draw(){let t;if(this._resizeBeforeDraw){const{width:r,height:i}=this._resizeBeforeDraw;this._resize(r,i),this._resizeBeforeDraw=null}if(this.clear(),this.width<=0||this.height<=0||this.notifyPlugins("beforeDraw",{cancelable:!0})===!1)return;const n=this._layers;for(t=0;t<n.length&&n[t].z<=0;++t)n[t].draw(this.chartArea);for(this._drawDatasets();t<n.length;++t)n[t].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(t){const n=this._sortedMetasets,r=[];let i,o;for(i=0,o=n.length;i<o;++i){const s=n[i];(!t||s.visible)&&r.push(s)}return r}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0})===!1)return;const t=this.getSortedVisibleDatasetMetas();for(let n=t.length-1;n>=0;--n)this._drawDataset(t[n]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(t){const n=this.ctx,r=t._clip,i=!r.disabled,o=$X(t,this.chartArea),s={meta:t,index:t.index,cancelable:!0};this.notifyPlugins("beforeDatasetDraw",s)!==!1&&(i&&xg(n,{left:r.left===!1?0:o.left-r.left,right:r.right===!1?this.width:o.right+r.right,top:r.top===!1?0:o.top-r.top,bottom:r.bottom===!1?this.height:o.bottom+r.bottom}),t.controller.draw(),i&&bg(n),s.cancelable=!1,this.notifyPlugins("afterDatasetDraw",s))}isPointInArea(t){return Ui(t,this.chartArea,this._minPadding)}getElementsAtEventForMode(t,n,r,i){const o=TK.modes[n];return typeof o=="function"?o(this,t,r,i):[]}getDatasetMeta(t){const n=this.data.datasets[t],r=this._metasets;let i=r.filter(o=>o&&o._dataset===n).pop();return i||(i={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:n&&n.order||0,index:t,_dataset:n,_parsed:[],_sorted:!1},r.push(i)),i}getContext(){return this.$context||(this.$context=Zo(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(t){const n=this.data.datasets[t];if(!n)return!1;const r=this.getDatasetMeta(t);return typeof r.hidden=="boolean"?!r.hidden:!n.hidden}setDatasetVisibility(t,n){const r=this.getDatasetMeta(t);r.hidden=!n}toggleDataVisibility(t){this._hiddenIndices[t]=!this._hiddenIndices[t]}getDataVisibility(t){return!this._hiddenIndices[t]}_updateVisibility(t,n,r){const i=r?"show":"hide",o=this.getDatasetMeta(t),s=o.controller._resolveAnimations(void 0,i);ku(n)?(o.data[n].hidden=!r,this.update()):(this.setDatasetVisibility(t,r),s.update(o,{visible:r}),this.update(l=>l.datasetIndex===t?i:void 0))}hide(t,n){this._updateVisibility(t,n,!1)}show(t,n){this._updateVisibility(t,n,!0)}_destroyDatasetMeta(t){const n=this._metasets[t];n&&n.controller&&n.controller._destroy(),delete this._metasets[t]}_stop(){let t,n;for(this.stop(),Ii.remove(this),t=0,n=this.data.datasets.length;t<n;++t)this._destroyDatasetMeta(t)}destroy(){this.notifyPlugins("beforeDestroy");const{canvas:t,ctx:n}=this;this._stop(),this.config.clearCache(),t&&(this.unbindEvents(),Ok(t,n),this.platform.releaseContext(n),this.canvas=null,this.ctx=null),delete uh[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...t){return this.canvas.toDataURL(...t)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){const t=this._listeners,n=this.platform,r=(o,s)=>{n.addEventListener(this,o,s),t[o]=s},i=(o,s,l)=>{o.offsetX=s,o.offsetY=l,this._eventHandler(o)};st(this.options.events,o=>r(o,i))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});const t=this._responsiveListeners,n=this.platform,r=(c,d)=>{n.addEventListener(this,c,d),t[c]=d},i=(c,d)=>{t[c]&&(n.removeEventListener(this,c,d),delete t[c])},o=(c,d)=>{this.canvas&&this.resize(c,d)};let s;const l=()=>{i("attach",l),this.attached=!0,this.resize(),r("resize",o),r("detach",s)};s=()=>{this.attached=!1,i("resize",o),this._stop(),this._resize(0,0),r("attach",l)},n.isAttached(this.canvas)?l():s()}unbindEvents(){st(this._listeners,(t,n)=>{this.platform.removeEventListener(this,n,t)}),this._listeners={},st(this._responsiveListeners,(t,n)=>{this.platform.removeEventListener(this,n,t)}),this._responsiveListeners=void 0}updateHoverStyle(t,n,r){const i=r?"set":"remove";let o,s,l,c;for(n==="dataset"&&(o=this.getDatasetMeta(t[0].datasetIndex),o.controller["_"+i+"DatasetHoverStyle"]()),l=0,c=t.length;l<c;++l){s=t[l];const d=s&&this.getDatasetMeta(s.datasetIndex).controller;d&&d[i+"HoverStyle"](s.element,s.datasetIndex,s.index)}}getActiveElements(){return this._active||[]}setActiveElements(t){const n=this._active||[],r=t.map(({datasetIndex:o,index:s})=>{const l=this.getDatasetMeta(o);if(!l)throw new Error("No dataset found at index "+o);return{datasetIndex:o,element:l.data[s],index:s}});!tp(r,n)&&(this._active=r,this._lastEvent=null,this._updateHoverStyles(r,n))}notifyPlugins(t,n,r){return this._plugins.notify(this,t,n,r)}isPluginEnabled(t){return this._plugins._cache.filter(n=>n.plugin.id===t).length===1}_updateHoverStyles(t,n,r){const i=this.options.hover,o=(c,d)=>c.filter(f=>!d.some(g=>f.datasetIndex===g.datasetIndex&&f.index===g.index)),s=o(n,t),l=r?t:o(t,n);s.length&&this.updateHoverStyle(s,i.mode,!1),l.length&&i.mode&&this.updateHoverStyle(l,i.mode,!0)}_eventHandler(t,n){const r={event:t,replay:n,cancelable:!0,inChartArea:this.isPointInArea(t)},i=s=>(s.options.events||this.options.events).includes(t.native.type);if(this.notifyPlugins("beforeEvent",r,i)===!1)return;const o=this._handleEvent(t,n,r.inChartArea);return r.cancelable=!1,this.notifyPlugins("afterEvent",r,i),(o||r.changed)&&this.render(),this}_handleEvent(t,n,r){const{_active:i=[],options:o}=this,s=n,l=this._getActiveElements(t,i,r,s),c=HU(t),d=LX(t,this._lastEvent,r,c);r&&(this._lastEvent=null,mt(o.onHover,[t,l,this],this),c&&mt(o.onClick,[t,l,this],this));const f=!tp(l,i);return(f||n)&&(this._active=l,this._updateHoverStyles(l,i,n)),this._lastEvent=d,f}_getActiveElements(t,n,r,i){if(t.type==="mouseout")return[];if(!r)return n;const o=this.options.hover;return this.getElementsAtEventForMode(t,o.mode,o,i)}}le(di,"defaults",zt),le(di,"instances",uh),le(di,"overrides",$s),le(di,"registry",ai),le(di,"version",RX),le(di,"getChart",uC);function dC(){return st(di.instances,e=>e._plugins.invalidate())}function IX(e,t,n){const{startAngle:r,pixelMargin:i,x:o,y:s,outerRadius:l,innerRadius:c}=t;let d=i/l;e.beginPath(),e.arc(o,s,l,r-d,n+d),c>i?(d=i/c,e.arc(o,s,c,n+d,r-d,!0)):e.arc(o,s,i,n+Wt,r-Wt),e.closePath(),e.clip()}function DX(e){return Ax(e,["outerStart","outerEnd","innerStart","innerEnd"])}function zX(e,t,n,r){const i=DX(e.options.borderRadius),o=(n-t)/2,s=Math.min(o,r*t/2),l=c=>{const d=(n-Math.min(o,c))*r/2;return on(c,0,Math.min(o,d))};return{outerStart:l(i.outerStart),outerEnd:l(i.outerEnd),innerStart:on(i.innerStart,0,s),innerEnd:on(i.innerEnd,0,s)}}function ma(e,t,n,r){return{x:n+e*Math.cos(t),y:r+e*Math.sin(t)}}function ap(e,t,n,r,i,o){const{x:s,y:l,startAngle:c,pixelMargin:d,innerRadius:f}=t,g=Math.max(t.outerRadius+r+n-d,0),m=f>0?f+r+n+d:0;let x=0;const w=i-c;if(r){const oe=f>0?f-r:0,ge=g>0?g-r:0,re=(oe+ge)/2,de=re!==0?w*re/(re+r):w;x=(w-de)/2}const _=Math.max(.001,w*g-n/_t)/g,v=(w-_)/2,b=c+v+x,S=i-v-x,{outerStart:C,outerEnd:E,innerStart:T,innerEnd:N}=zX(t,m,g,S-b),L=g-C,z=g-E,B=b+C/L,H=S-E/z,Q=m+T,te=m+N,ae=b+T/Q,ye=S-N/te;if(e.beginPath(),o){const oe=(B+H)/2;if(e.arc(s,l,g,B,oe),e.arc(s,l,g,oe,H),E>0){const Ue=ma(z,H,s,l);e.arc(Ue.x,Ue.y,E,H,S+Wt)}const ge=ma(te,S,s,l);if(e.lineTo(ge.x,ge.y),N>0){const Ue=ma(te,ye,s,l);e.arc(Ue.x,Ue.y,N,S+Wt,ye+Math.PI)}const re=(S-N/m+(b+T/m))/2;if(e.arc(s,l,m,S-N/m,re,!0),e.arc(s,l,m,re,b+T/m,!0),T>0){const Ue=ma(Q,ae,s,l);e.arc(Ue.x,Ue.y,T,ae+Math.PI,b-Wt)}const de=ma(L,b,s,l);if(e.lineTo(de.x,de.y),C>0){const Ue=ma(L,B,s,l);e.arc(Ue.x,Ue.y,C,b-Wt,B)}}else{e.moveTo(s,l);const oe=Math.cos(B)*g+s,ge=Math.sin(B)*g+l;e.lineTo(oe,ge);const re=Math.cos(H)*g+s,de=Math.sin(H)*g+l;e.lineTo(re,de)}e.closePath()}function FX(e,t,n,r,i){const{fullCircles:o,startAngle:s,circumference:l}=t;let c=t.endAngle;if(o){ap(e,t,n,r,c,i);for(let d=0;d<o;++d)e.fill();isNaN(l)||(c=s+(l%wt||wt))}return ap(e,t,n,r,c,i),e.fill(),c}function BX(e,t,n,r,i){const{fullCircles:o,startAngle:s,circumference:l,options:c}=t,{borderWidth:d,borderJoinStyle:f,borderDash:g,borderDashOffset:m}=c,x=c.borderAlign==="inner";if(!d)return;e.setLineDash(g||[]),e.lineDashOffset=m,x?(e.lineWidth=d*2,e.lineJoin=f||"round"):(e.lineWidth=d,e.lineJoin=f||"bevel");let w=t.endAngle;if(o){ap(e,t,n,r,w,i);for(let _=0;_<o;++_)e.stroke();isNaN(l)||(w=s+(l%wt||wt))}x&&IX(e,t,w),o||(ap(e,t,n,r,w,i),e.stroke())}class kc extends Jr{constructor(n){super();le(this,"circumference");le(this,"endAngle");le(this,"fullCircles");le(this,"innerRadius");le(this,"outerRadius");le(this,"pixelMargin");le(this,"startAngle");this.options=void 0,this.circumference=void 0,this.startAngle=void 0,this.endAngle=void 0,this.innerRadius=void 0,this.outerRadius=void 0,this.pixelMargin=0,this.fullCircles=0,n&&Object.assign(this,n)}inRange(n,r,i){const o=this.getProps(["x","y"],i),{angle:s,distance:l}=iE(o,{x:n,y:r}),{startAngle:c,endAngle:d,innerRadius:f,outerRadius:g,circumference:m}=this.getProps(["startAngle","endAngle","innerRadius","outerRadius","circumference"],i),x=(this.options.spacing+this.options.borderWidth)/2,_=Ae(m,d-c)>=wt||Cu(s,c,d),v=Hi(l,f+x,g+x);return _&&v}getCenterPoint(n){const{x:r,y:i,startAngle:o,endAngle:s,innerRadius:l,outerRadius:c}=this.getProps(["x","y","startAngle","endAngle","innerRadius","outerRadius"],n),{offset:d,spacing:f}=this.options,g=(o+s)/2,m=(l+c+f+d)/2;return{x:r+Math.cos(g)*m,y:i+Math.sin(g)*m}}tooltipPosition(n){return this.getCenterPoint(n)}draw(n){const{options:r,circumference:i}=this,o=(r.offset||0)/4,s=(r.spacing||0)/2,l=r.circular;if(this.pixelMargin=r.borderAlign==="inner"?.33:0,this.fullCircles=i>wt?Math.floor(i/wt):0,i===0||this.innerRadius<0||this.outerRadius<0)return;n.save();const c=(this.startAngle+this.endAngle)/2;n.translate(Math.cos(c)*o,Math.sin(c)*o);const d=1-Math.sin(Math.min(_t,i||0)),f=o*d;n.fillStyle=r.backgroundColor,n.strokeStyle=r.borderColor,FX(n,this,f,s,l),BX(n,this,f,s,l),n.restore()}}le(kc,"id","arc"),le(kc,"defaults",{borderAlign:"center",borderColor:"#fff",borderDash:[],borderDashOffset:0,borderJoinStyle:void 0,borderRadius:0,borderWidth:2,offset:0,spacing:0,angle:void 0,circular:!0}),le(kc,"defaultRoutes",{backgroundColor:"backgroundColor"}),le(kc,"descriptors",{_scriptable:!0,_indexable:n=>n!=="borderDash"});function DE(e,t,n=t){e.lineCap=Ae(n.borderCapStyle,t.borderCapStyle),e.setLineDash(Ae(n.borderDash,t.borderDash)),e.lineDashOffset=Ae(n.borderDashOffset,t.borderDashOffset),e.lineJoin=Ae(n.borderJoinStyle,t.borderJoinStyle),e.lineWidth=Ae(n.borderWidth,t.borderWidth),e.strokeStyle=Ae(n.borderColor,t.borderColor)}function jX(e,t,n){e.lineTo(n.x,n.y)}function WX(e){return e.stepped?dY:e.tension||e.cubicInterpolationMode==="monotone"?fY:jX}function zE(e,t,n={}){const r=e.length,{start:i=0,end:o=r-1}=n,{start:s,end:l}=t,c=Math.max(i,s),d=Math.min(o,l),f=i<s&&o<s||i>l&&o>l;return{count:r,start:c,loop:t.loop,ilen:d<c&&!f?r+d-c:d-c}}function HX(e,t,n,r){const{points:i,options:o}=t,{count:s,start:l,loop:c,ilen:d}=zE(i,n,r),f=WX(o);let{move:g=!0,reverse:m}=r||{},x,w,_;for(x=0;x<=d;++x)w=i[(l+(m?d-x:x))%s],!w.skip&&(g?(e.moveTo(w.x,w.y),g=!1):f(e,_,w,m,o.stepped),_=w);return c&&(w=i[(l+(m?d:0))%s],f(e,_,w,m,o.stepped)),!!c}function VX(e,t,n,r){const i=t.points,{count:o,start:s,ilen:l}=zE(i,n,r),{move:c=!0,reverse:d}=r||{};let f=0,g=0,m,x,w,_,v,b;const S=E=>(s+(d?l-E:E))%o,C=()=>{_!==v&&(e.lineTo(f,v),e.lineTo(f,_),e.lineTo(f,b))};for(c&&(x=i[S(0)],e.moveTo(x.x,x.y)),m=0;m<=l;++m){if(x=i[S(m)],x.skip)continue;const E=x.x,T=x.y,N=E|0;N===w?(T<_?_=T:T>v&&(v=T),f=(g*f+E)/++g):(C(),e.lineTo(E,T),w=N,g=0,_=v=T),b=T}C()}function y1(e){const t=e.options,n=t.borderDash&&t.borderDash.length;return!e._decimated&&!e._loop&&!t.tension&&t.cubicInterpolationMode!=="monotone"&&!t.stepped&&!n?VX:HX}function UX(e){return e.stepped?VY:e.tension||e.cubicInterpolationMode==="monotone"?UY:ms}function YX(e,t,n,r){let i=t._path;i||(i=t._path=new Path2D,t.path(i,n,r)&&i.closePath()),DE(e,t.options),e.stroke(i)}function KX(e,t,n,r){const{segments:i,options:o}=t,s=y1(t);for(const l of i)DE(e,o,l.style),e.beginPath(),s(e,t,l,{start:n,end:n+r-1})&&e.closePath(),e.stroke()}const XX=typeof Path2D=="function";function GX(e,t,n,r){XX&&!t.options.segment?YX(e,t,n,r):KX(e,t,n,r)}class wo extends Jr{constructor(t){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,t&&Object.assign(this,t)}updateControlPoints(t,n){const r=this.options;if((r.tension||r.cubicInterpolationMode==="monotone")&&!r.stepped&&!this._pointsUpdated){const i=r.spanGaps?this._loop:this._fullLoop;IY(this._points,r,t,i,n),this._pointsUpdated=!0}}set points(t){this._points=t,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=ZY(this,this.options.segment))}first(){const t=this.segments,n=this.points;return t.length&&n[t[0].start]}last(){const t=this.segments,n=this.points,r=t.length;return r&&n[t[r-1].end]}interpolate(t,n){const r=this.options,i=t[n],o=this.points,s=kE(this,{property:n,start:i,end:i});if(!s.length)return;const l=[],c=UX(r);let d,f;for(d=0,f=s.length;d<f;++d){const{start:g,end:m}=s[d],x=o[g],w=o[m];if(x===w){l.push(x);continue}const _=Math.abs((i-x[n])/(w[n]-x[n])),v=c(x,w,_,r.stepped);v[n]=t[n],l.push(v)}return l.length===1?l[0]:l}pathSegment(t,n,r){return y1(this)(t,this,n,r)}path(t,n,r){const i=this.segments,o=y1(this);let s=this._loop;n=n||0,r=r||this.points.length-n;for(const l of i)s&=o(t,this,l,{start:n,end:n+r-1});return!!s}draw(t,n,r,i){const o=this.options||{};(this.points||[]).length&&o.borderWidth&&(t.save(),GX(t,this,r,i),t.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}}le(wo,"id","line"),le(wo,"defaults",{borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0}),le(wo,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"}),le(wo,"descriptors",{_scriptable:!0,_indexable:t=>t!=="borderDash"&&t!=="fill"});function fC(e,t,n,r){const i=e.options,{[n]:o}=e.getProps([n],r);return Math.abs(t-o)<i.radius+i.hitRadius}class dh extends Jr{constructor(n){super();le(this,"parsed");le(this,"skip");le(this,"stop");this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,n&&Object.assign(this,n)}inRange(n,r,i){const o=this.options,{x:s,y:l}=this.getProps(["x","y"],i);return Math.pow(n-s,2)+Math.pow(r-l,2)<Math.pow(o.hitRadius+o.radius,2)}inXRange(n,r){return fC(this,n,"x",r)}inYRange(n,r){return fC(this,n,"y",r)}getCenterPoint(n){const{x:r,y:i}=this.getProps(["x","y"],n);return{x:r,y:i}}size(n){n=n||this.options||{};let r=n.radius||0;r=Math.max(r,r&&n.hoverRadius||0);const i=r&&n.borderWidth||0;return(r+i)*2}draw(n,r){const i=this.options;this.skip||i.radius<.1||!Ui(this,r,this.size(i)/2)||(n.strokeStyle=i.borderColor,n.lineWidth=i.borderWidth,n.fillStyle=i.backgroundColor,p1(n,i,this.x,this.y))}getRange(){const n=this.options||{};return n.radius+n.hitRadius}}le(dh,"id","point"),le(dh,"defaults",{borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0}),le(dh,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});function FE(e,t){const{x:n,y:r,base:i,width:o,height:s}=e.getProps(["x","y","base","width","height"],t);let l,c,d,f,g;return e.horizontal?(g=s/2,l=Math.min(n,i),c=Math.max(n,i),d=r-g,f=r+g):(g=o/2,l=n-g,c=n+g,d=Math.min(r,i),f=Math.max(r,i)),{left:l,top:d,right:c,bottom:f}}function _o(e,t,n,r){return e?0:on(t,n,r)}function qX(e,t,n){const r=e.options.borderWidth,i=e.borderSkipped,o=hE(r);return{t:_o(i.top,o.top,0,n),r:_o(i.right,o.right,0,t),b:_o(i.bottom,o.bottom,0,n),l:_o(i.left,o.left,0,t)}}function ZX(e,t,n){const{enableBorderRadius:r}=e.getProps(["enableBorderRadius"]),i=e.options.borderRadius,o=Ps(i),s=Math.min(t,n),l=e.borderSkipped,c=r||Ve(i);return{topLeft:_o(!c||l.top||l.left,o.topLeft,0,s),topRight:_o(!c||l.top||l.right,o.topRight,0,s),bottomLeft:_o(!c||l.bottom||l.left,o.bottomLeft,0,s),bottomRight:_o(!c||l.bottom||l.right,o.bottomRight,0,s)}}function QX(e){const t=FE(e),n=t.right-t.left,r=t.bottom-t.top,i=qX(e,n/2,r/2),o=ZX(e,n/2,r/2);return{outer:{x:t.left,y:t.top,w:n,h:r,radius:o},inner:{x:t.left+i.l,y:t.top+i.t,w:n-i.l-i.r,h:r-i.t-i.b,radius:{topLeft:Math.max(0,o.topLeft-Math.max(i.t,i.l)),topRight:Math.max(0,o.topRight-Math.max(i.t,i.r)),bottomLeft:Math.max(0,o.bottomLeft-Math.max(i.b,i.l)),bottomRight:Math.max(0,o.bottomRight-Math.max(i.b,i.r))}}}}function B0(e,t,n,r){const i=t===null,o=n===null,l=e&&!(i&&o)&&FE(e,r);return l&&(i||Hi(t,l.left,l.right))&&(o||Hi(n,l.top,l.bottom))}function JX(e){return e.topLeft||e.topRight||e.bottomLeft||e.bottomRight}function eG(e,t){e.rect(t.x,t.y,t.w,t.h)}function j0(e,t,n={}){const r=e.x!==n.x?-t:0,i=e.y!==n.y?-t:0,o=(e.x+e.w!==n.x+n.w?t:0)-r,s=(e.y+e.h!==n.y+n.h?t:0)-i;return{x:e.x+r,y:e.y+i,w:e.w+o,h:e.h+s,radius:e.radius}}class fh extends Jr{constructor(t){super(),this.options=void 0,this.horizontal=void 0,this.base=void 0,this.width=void 0,this.height=void 0,this.inflateAmount=void 0,t&&Object.assign(this,t)}draw(t){const{inflateAmount:n,options:{borderColor:r,backgroundColor:i}}=this,{inner:o,outer:s}=QX(this),l=JX(s.radius)?Pu:eG;t.save(),(s.w!==o.w||s.h!==o.h)&&(t.beginPath(),l(t,j0(s,n,o)),t.clip(),l(t,j0(o,-n,s)),t.fillStyle=r,t.fill("evenodd")),t.beginPath(),l(t,j0(o,n)),t.fillStyle=i,t.fill(),t.restore()}inRange(t,n,r){return B0(this,t,n,r)}inXRange(t,n){return B0(this,t,null,n)}inYRange(t,n){return B0(this,null,t,n)}getCenterPoint(t){const{x:n,y:r,base:i,horizontal:o}=this.getProps(["x","y","base","horizontal"],t);return{x:o?(n+i)/2:n,y:o?r:(r+i)/2}}getRange(t){return t==="x"?this.width/2:this.height/2}}le(fh,"id","bar"),le(fh,"defaults",{borderSkipped:"start",borderWidth:0,borderRadius:0,inflateAmount:"auto",pointStyle:void 0}),le(fh,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});var tG=Object.freeze({__proto__:null,ArcElement:kc,BarElement:fh,LineElement:wo,PointElement:dh});const x1=["rgb(54, 162, 235)","rgb(255, 99, 132)","rgb(255, 159, 64)","rgb(255, 205, 86)","rgb(75, 192, 192)","rgb(153, 102, 255)","rgb(201, 203, 207)"],hC=x1.map(e=>e.replace("rgb(","rgba(").replace(")",", 0.5)"));function BE(e){return x1[e%x1.length]}function jE(e){return hC[e%hC.length]}function nG(e,t){return e.borderColor=BE(t),e.backgroundColor=jE(t),++t}function rG(e,t){return e.backgroundColor=e.data.map(()=>BE(t++)),t}function iG(e,t){return e.backgroundColor=e.data.map(()=>jE(t++)),t}function oG(e){let t=0;return(n,r)=>{const i=e.getDatasetMeta(r).controller;i instanceof bo?t=rG(n,t):i instanceof Xc?t=iG(n,t):i&&(t=nG(n,t))}}function pC(e){let t;for(t in e)if(e[t].borderColor||e[t].backgroundColor)return!0;return!1}function sG(e){return e&&(e.borderColor||e.backgroundColor)}var aG={id:"colors",defaults:{enabled:!0,forceOverride:!1},beforeLayout(e,t,n){if(!n.enabled)return;const{data:{datasets:r},options:i}=e.config,{elements:o}=i;if(!n.forceOverride&&(pC(r)||sG(i)||o&&pC(o)))return;const s=oG(e);r.forEach(s)}};function lG(e,t,n,r,i){const o=i.samples||r;if(o>=n)return e.slice(t,t+n);const s=[],l=(n-2)/(o-2);let c=0;const d=t+n-1;let f=t,g,m,x,w,_;for(s[c++]=e[f],g=0;g<o-2;g++){let v=0,b=0,S;const C=Math.floor((g+1)*l)+1+t,E=Math.min(Math.floor((g+2)*l)+1,n)+t,T=E-C;for(S=C;S<E;S++)v+=e[S].x,b+=e[S].y;v/=T,b/=T;const N=Math.floor(g*l)+1+t,L=Math.min(Math.floor((g+1)*l)+1,n)+t,{x:z,y:B}=e[f];for(x=w=-1,S=N;S<L;S++)w=.5*Math.abs((z-v)*(e[S].y-B)-(z-e[S].x)*(b-B)),w>x&&(x=w,m=e[S],_=S);s[c++]=m,f=_}return s[c++]=e[d],s}function cG(e,t,n,r){let i=0,o=0,s,l,c,d,f,g,m,x,w,_;const v=[],b=t+n-1,S=e[t].x,E=e[b].x-S;for(s=t;s<t+n;++s){l=e[s],c=(l.x-S)/E*r,d=l.y;const T=c|0;if(T===f)d<w?(w=d,g=s):d>_&&(_=d,m=s),i=(o*i+l.x)/++o;else{const N=s-1;if(!Ze(g)&&!Ze(m)){const L=Math.min(g,m),z=Math.max(g,m);L!==x&&L!==N&&v.push({...e[L],x:i}),z!==x&&z!==N&&v.push({...e[z],x:i})}s>0&&N!==x&&v.push(e[N]),v.push(l),f=T,o=0,w=_=d,g=m=x=s}}return v}function WE(e){if(e._decimated){const t=e._data;delete e._decimated,delete e._data,Object.defineProperty(e,"data",{configurable:!0,enumerable:!0,writable:!0,value:t})}}function gC(e){e.data.datasets.forEach(t=>{WE(t)})}function uG(e,t){const n=t.length;let r=0,i;const{iScale:o}=e,{min:s,max:l,minDefined:c,maxDefined:d}=o.getUserBounds();return c&&(r=on(Vi(t,o.axis,s).lo,0,n-1)),d?i=on(Vi(t,o.axis,l).hi+1,r,n)-r:i=n-r,{start:r,count:i}}var dG={id:"decimation",defaults:{algorithm:"min-max",enabled:!1},beforeElementsUpdate:(e,t,n)=>{if(!n.enabled){gC(e);return}const r=e.width;e.data.datasets.forEach((i,o)=>{const{_data:s,indexAxis:l}=i,c=e.getDatasetMeta(o),d=s||i.data;if(_c([l,e.options.indexAxis])==="y"||!c.controller.supportsDecimation)return;const f=e.scales[c.xAxisID];if(f.type!=="linear"&&f.type!=="time"||e.options.parsing)return;let{start:g,count:m}=uG(c,d);const x=n.threshold||4*r;if(m<=x){WE(i);return}Ze(s)&&(i._data=d,delete i.data,Object.defineProperty(i,"data",{configurable:!0,enumerable:!0,get:function(){return this._decimated},set:function(_){this._data=_}}));let w;switch(n.algorithm){case"lttb":w=lG(d,g,m,r,n);break;case"min-max":w=cG(d,g,m,r);break;default:throw new Error(`Unsupported decimation algorithm '${n.algorithm}'`)}i._decimated=w})},destroy(e){gC(e)}};function fG(e,t,n){const r=e.segments,i=e.points,o=t.points,s=[];for(const l of r){let{start:c,end:d}=l;d=Fx(c,d,i);const f=b1(n,i[c],i[d],l.loop);if(!t.segments){s.push({source:l,target:f,start:i[c],end:i[d]});continue}const g=kE(t,f);for(const m of g){const x=b1(n,o[m.start],o[m.end],m.loop),w=SE(l,i,x);for(const _ of w)s.push({source:_,target:m,start:{[n]:mC(f,x,"start",Math.max)},end:{[n]:mC(f,x,"end",Math.min)}})}}return s}function b1(e,t,n,r){if(r)return;let i=t[e],o=n[e];return e==="angle"&&(i=lr(i),o=lr(o)),{property:e,start:i,end:o}}function hG(e,t){const{x:n=null,y:r=null}=e||{},i=t.points,o=[];return t.segments.forEach(({start:s,end:l})=>{l=Fx(s,l,i);const c=i[s],d=i[l];r!==null?(o.push({x:c.x,y:r}),o.push({x:d.x,y:r})):n!==null&&(o.push({x:n,y:c.y}),o.push({x:n,y:d.y}))}),o}function Fx(e,t,n){for(;t>e;t--){const r=n[t];if(!isNaN(r.x)&&!isNaN(r.y))break}return t}function mC(e,t,n,r){return e&&t?r(e[n],t[n]):e?e[n]:t?t[n]:0}function HE(e,t){let n=[],r=!1;return xt(e)?(r=!0,n=e):n=hG(e,t),n.length?new wo({points:n,options:{tension:0},_loop:r,_fullLoop:r}):null}function vC(e){return e&&e.fill!==!1}function pG(e,t,n){let i=e[t].fill;const o=[t];let s;if(!n)return i;for(;i!==!1&&o.indexOf(i)===-1;){if(!Dt(i))return i;if(s=e[i],!s)return!1;if(s.visible)return i;o.push(i),i=s.fill}return!1}function gG(e,t,n){const r=xG(e);if(Ve(r))return isNaN(r.value)?!1:r;let i=parseFloat(r);return Dt(i)&&Math.floor(i)===i?mG(r[0],t,i,n):["origin","start","end","stack","shape"].indexOf(r)>=0&&r}function mG(e,t,n,r){return(e==="-"||e==="+")&&(n=t+n),n===t||n<0||n>=r?!1:n}function vG(e,t){let n=null;return e==="start"?n=t.bottom:e==="end"?n=t.top:Ve(e)?n=t.getPixelForValue(e.value):t.getBasePixel&&(n=t.getBasePixel()),n}function yG(e,t,n){let r;return e==="start"?r=n:e==="end"?r=t.options.reverse?t.min:t.max:Ve(e)?r=e.value:r=t.getBaseValue(),r}function xG(e){const t=e.options,n=t.fill;let r=Ae(n&&n.target,n);return r===void 0&&(r=!!t.backgroundColor),r===!1||r===null?!1:r===!0?"origin":r}function bG(e){const{scale:t,index:n,line:r}=e,i=[],o=r.segments,s=r.points,l=wG(t,n);l.push(HE({x:null,y:t.bottom},r));for(let c=0;c<o.length;c++){const d=o[c];for(let f=d.start;f<=d.end;f++)_G(i,s[f],l)}return new wo({points:i,options:{}})}function wG(e,t){const n=[],r=e.getMatchingVisibleMetas("line");for(let i=0;i<r.length;i++){const o=r[i];if(o.index===t)break;o.hidden||n.unshift(o.dataset)}return n}function _G(e,t,n){const r=[];for(let i=0;i<n.length;i++){const o=n[i],{first:s,last:l,point:c}=SG(o,t,"x");if(!(!c||s&&l)){if(s)r.unshift(c);else if(e.push(c),!l)break}}e.push(...r)}function SG(e,t,n){const r=e.interpolate(t,n);if(!r)return{};const i=r[n],o=e.segments,s=e.points;let l=!1,c=!1;for(let d=0;d<o.length;d++){const f=o[d],g=s[f.start][n],m=s[f.end][n];if(Hi(i,g,m)){l=i===g,c=i===m;break}}return{first:l,last:c,point:r}}class VE{constructor(t){this.x=t.x,this.y=t.y,this.radius=t.radius}pathSegment(t,n,r){const{x:i,y:o,radius:s}=this;return n=n||{start:0,end:wt},t.arc(i,o,s,n.end,n.start,!0),!r.bounds}interpolate(t){const{x:n,y:r,radius:i}=this,o=t.angle;return{x:n+Math.cos(o)*i,y:r+Math.sin(o)*i,angle:o}}}function kG(e){const{chart:t,fill:n,line:r}=e;if(Dt(n))return CG(t,n);if(n==="stack")return bG(e);if(n==="shape")return!0;const i=PG(e);return i instanceof VE?i:HE(i,r)}function CG(e,t){const n=e.getDatasetMeta(t);return n&&e.isDatasetVisible(t)?n.dataset:null}function PG(e){return(e.scale||{}).getPointPositionForValue?MG(e):EG(e)}function EG(e){const{scale:t={},fill:n}=e,r=vG(n,t);if(Dt(r)){const i=t.isHorizontal();return{x:i?r:null,y:i?null:r}}return null}function MG(e){const{scale:t,fill:n}=e,r=t.options,i=t.getLabels().length,o=r.reverse?t.max:t.min,s=yG(n,t,o),l=[];if(r.grid.circular){const c=t.getPointPositionForValue(0,o);return new VE({x:c.x,y:c.y,radius:t.getDistanceFromCenterForValue(s)})}for(let c=0;c<i;++c)l.push(t.getPointPositionForValue(c,s));return l}function W0(e,t,n){const r=kG(t),{line:i,scale:o,axis:s}=t,l=i.options,c=l.fill,d=l.backgroundColor,{above:f=d,below:g=d}=c||{};r&&i.points.length&&(xg(e,n),OG(e,{line:i,target:r,above:f,below:g,area:n,scale:o,axis:s}),bg(e))}function OG(e,t){const{line:n,target:r,above:i,below:o,area:s,scale:l}=t,c=n._loop?"angle":t.axis;e.save(),c==="x"&&o!==i&&(yC(e,r,s.top),xC(e,{line:n,target:r,color:i,scale:l,property:c}),e.restore(),e.save(),yC(e,r,s.bottom)),xC(e,{line:n,target:r,color:o,scale:l,property:c}),e.restore()}function yC(e,t,n){const{segments:r,points:i}=t;let o=!0,s=!1;e.beginPath();for(const l of r){const{start:c,end:d}=l,f=i[c],g=i[Fx(c,d,i)];o?(e.moveTo(f.x,f.y),o=!1):(e.lineTo(f.x,n),e.lineTo(f.x,f.y)),s=!!t.pathSegment(e,l,{move:s}),s?e.closePath():e.lineTo(g.x,n)}e.lineTo(t.first().x,n),e.closePath(),e.clip()}function xC(e,t){const{line:n,target:r,property:i,color:o,scale:s}=t,l=fG(n,r,i);for(const{source:c,target:d,start:f,end:g}of l){const{style:{backgroundColor:m=o}={}}=c,x=r!==!0;e.save(),e.fillStyle=m,RG(e,s,x&&b1(i,f,g)),e.beginPath();const w=!!n.pathSegment(e,c);let _;if(x){w?e.closePath():bC(e,r,g,i);const v=!!r.pathSegment(e,d,{move:w,reverse:!0});_=w&&v,_||bC(e,r,f,i)}e.closePath(),e.fill(_?"evenodd":"nonzero"),e.restore()}}function RG(e,t,n){const{top:r,bottom:i}=t.chart.chartArea,{property:o,start:s,end:l}=n||{};o==="x"&&(e.beginPath(),e.rect(s,r,l-s,i-r),e.clip())}function bC(e,t,n,r){const i=t.interpolate(n,r);i&&e.lineTo(i.x,i.y)}var TG={id:"filler",afterDatasetsUpdate(e,t,n){const r=(e.data.datasets||[]).length,i=[];let o,s,l,c;for(s=0;s<r;++s)o=e.getDatasetMeta(s),l=o.dataset,c=null,l&&l.options&&l instanceof wo&&(c={visible:e.isDatasetVisible(s),index:s,fill:gG(l,s,r),chart:e,axis:o.controller.options.indexAxis,scale:o.vScale,line:l}),o.$filler=c,i.push(c);for(s=0;s<r;++s)c=i[s],!(!c||c.fill===!1)&&(c.fill=pG(i,s,n.propagate))},beforeDraw(e,t,n){const r=n.drawTime==="beforeDraw",i=e.getSortedVisibleDatasetMetas(),o=e.chartArea;for(let s=i.length-1;s>=0;--s){const l=i[s].$filler;!l||(l.line.updateControlPoints(o,l.axis),r&&l.fill&&W0(e.ctx,l,o))}},beforeDatasetsDraw(e,t,n){if(n.drawTime!=="beforeDatasetsDraw")return;const r=e.getSortedVisibleDatasetMetas();for(let i=r.length-1;i>=0;--i){const o=r[i].$filler;vC(o)&&W0(e.ctx,o,e.chartArea)}},beforeDatasetDraw(e,t,n){const r=t.meta.$filler;!vC(r)||n.drawTime!=="beforeDatasetDraw"||W0(e.ctx,r,e.chartArea)},defaults:{propagate:!0,drawTime:"beforeDatasetDraw"}};const wC=(e,t)=>{let{boxHeight:n=t,boxWidth:r=t}=e;return e.usePointStyle&&(n=Math.min(n,t),r=e.pointStyleWidth||Math.min(r,t)),{boxWidth:r,boxHeight:n,itemHeight:Math.max(t,n)}},AG=(e,t)=>e!==null&&t!==null&&e.datasetIndex===t.datasetIndex&&e.index===t.index;class _C extends Jr{constructor(t){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,n,r){this.maxWidth=t,this.maxHeight=n,this._margins=r,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){const t=this.options.labels||{};let n=mt(t.generateLabels,[this.chart],this)||[];t.filter&&(n=n.filter(r=>t.filter(r,this.chart.data))),t.sort&&(n=n.sort((r,i)=>t.sort(r,i,this.chart.data))),this.options.reverse&&n.reverse(),this.legendItems=n}fit(){const{options:t,ctx:n}=this;if(!t.display){this.width=this.height=0;return}const r=t.labels,i=en(r.font),o=i.size,s=this._computeTitleHeight(),{boxWidth:l,itemHeight:c}=wC(r,o);let d,f;n.font=i.string,this.isHorizontal()?(d=this.maxWidth,f=this._fitRows(s,o,l,c)+10):(f=this.maxHeight,d=this._fitCols(s,i,l,c)+10),this.width=Math.min(d,t.maxWidth||this.maxWidth),this.height=Math.min(f,t.maxHeight||this.maxHeight)}_fitRows(t,n,r,i){const{ctx:o,maxWidth:s,options:{labels:{padding:l}}}=this,c=this.legendHitBoxes=[],d=this.lineWidths=[0],f=i+l;let g=t;o.textAlign="left",o.textBaseline="middle";let m=-1,x=-f;return this.legendItems.forEach((w,_)=>{const v=r+n/2+o.measureText(w.text).width;(_===0||d[d.length-1]+v+2*l>s)&&(g+=f,d[d.length-(_>0?0:1)]=0,x+=f,m++),c[_]={left:0,top:x,row:m,width:v,height:i},d[d.length-1]+=v+l}),g}_fitCols(t,n,r,i){const{ctx:o,maxHeight:s,options:{labels:{padding:l}}}=this,c=this.legendHitBoxes=[],d=this.columnSizes=[],f=s-t;let g=l,m=0,x=0,w=0,_=0;return this.legendItems.forEach((v,b)=>{const{itemWidth:S,itemHeight:C}=NG(r,n,o,v,i);b>0&&x+C+2*l>f&&(g+=m+l,d.push({width:m,height:x}),w+=m+l,_++,m=x=0),c[b]={left:w,top:x,col:_,width:S,height:C},m=Math.max(m,S),x+=C+l}),g+=m,d.push({width:m,height:x}),g}adjustHitBoxes(){if(!this.options.display)return;const t=this._computeTitleHeight(),{legendHitBoxes:n,options:{align:r,labels:{padding:i},rtl:o}}=this,s=Ua(o,this.left,this.width);if(this.isHorizontal()){let l=0,c=_n(r,this.left+i,this.right-this.lineWidths[l]);for(const d of n)l!==d.row&&(l=d.row,c=_n(r,this.left+i,this.right-this.lineWidths[l])),d.top+=this.top+t+i,d.left=s.leftForLtr(s.x(c),d.width),c+=d.width+i}else{let l=0,c=_n(r,this.top+t+i,this.bottom-this.columnSizes[l].height);for(const d of n)d.col!==l&&(l=d.col,c=_n(r,this.top+t+i,this.bottom-this.columnSizes[l].height)),d.top=c,d.left+=this.left+i,d.left=s.leftForLtr(s.x(d.left),d.width),c+=d.height+i}}isHorizontal(){return this.options.position==="top"||this.options.position==="bottom"}draw(){if(this.options.display){const t=this.ctx;xg(t,this),this._draw(),bg(t)}}_draw(){const{options:t,columnSizes:n,lineWidths:r,ctx:i}=this,{align:o,labels:s}=t,l=zt.color,c=Ua(t.rtl,this.left,this.width),d=en(s.font),{padding:f}=s,g=d.size,m=g/2;let x;this.drawTitle(),i.textAlign=c.textAlign("left"),i.textBaseline="middle",i.lineWidth=.5,i.font=d.string;const{boxWidth:w,boxHeight:_,itemHeight:v}=wC(s,g),b=function(N,L,z){if(isNaN(w)||w<=0||isNaN(_)||_<0)return;i.save();const B=Ae(z.lineWidth,1);if(i.fillStyle=Ae(z.fillStyle,l),i.lineCap=Ae(z.lineCap,"butt"),i.lineDashOffset=Ae(z.lineDashOffset,0),i.lineJoin=Ae(z.lineJoin,"miter"),i.lineWidth=B,i.strokeStyle=Ae(z.strokeStyle,l),i.setLineDash(Ae(z.lineDash,[])),s.usePointStyle){const H={radius:_*Math.SQRT2/2,pointStyle:z.pointStyle,rotation:z.rotation,borderWidth:B},Q=c.xPlus(N,w/2),te=L+m;fE(i,H,Q,te,s.pointStyleWidth&&w)}else{const H=L+Math.max((g-_)/2,0),Q=c.leftForLtr(N,w),te=Ps(z.borderRadius);i.beginPath(),Object.values(te).some(ae=>ae!==0)?Pu(i,{x:Q,y:H,w,h:_,radius:te}):i.rect(Q,H,w,_),i.fill(),B!==0&&i.stroke()}i.restore()},S=function(N,L,z){Is(i,z.text,N,L+v/2,d,{strikethrough:z.hidden,textAlign:c.textAlign(z.textAlign)})},C=this.isHorizontal(),E=this._computeTitleHeight();C?x={x:_n(o,this.left+f,this.right-r[0]),y:this.top+f+E,line:0}:x={x:this.left+f,y:_n(o,this.top+E+f,this.bottom-n[0].height),line:0},bE(this.ctx,t.textDirection);const T=v+f;this.legendItems.forEach((N,L)=>{i.strokeStyle=N.fontColor,i.fillStyle=N.fontColor;const z=i.measureText(N.text).width,B=c.textAlign(N.textAlign||(N.textAlign=s.textAlign)),H=w+m+z;let Q=x.x,te=x.y;c.setWidth(this.width),C?L>0&&Q+H+f>this.right&&(te=x.y+=T,x.line++,Q=x.x=_n(o,this.left+f,this.right-r[x.line])):L>0&&te+T>this.bottom&&(Q=x.x=Q+n[x.line].width+f,x.line++,te=x.y=_n(o,this.top+E+f,this.bottom-n[x.line].height));const ae=c.x(Q);if(b(ae,te,N),Q=eY(B,Q+w+m,C?Q+H:this.right,t.rtl),S(c.x(Q),te,N),C)x.x+=H+f;else if(typeof N.text!="string"){const ye=d.lineHeight;x.y+=UE(N,ye)+f}else x.y+=T}),wE(this.ctx,t.textDirection)}drawTitle(){const t=this.options,n=t.title,r=en(n.font),i=Rn(n.padding);if(!n.display)return;const o=Ua(t.rtl,this.left,this.width),s=this.ctx,l=n.position,c=r.size/2,d=i.top+c;let f,g=this.left,m=this.width;if(this.isHorizontal())m=Math.max(...this.lineWidths),f=this.top+d,g=_n(t.align,g,this.right-m);else{const w=this.columnSizes.reduce((_,v)=>Math.max(_,v.height),0);f=d+_n(t.align,this.top,this.bottom-w-t.labels.padding-this._computeTitleHeight())}const x=_n(l,g,g+m);s.textAlign=o.textAlign(Rx(l)),s.textBaseline="middle",s.strokeStyle=n.color,s.fillStyle=n.color,s.font=r.string,Is(s,n.text,x,f,r)}_computeTitleHeight(){const t=this.options.title,n=en(t.font),r=Rn(t.padding);return t.display?n.lineHeight+r.height:0}_getLegendItemAt(t,n){let r,i,o;if(Hi(t,this.left,this.right)&&Hi(n,this.top,this.bottom)){for(o=this.legendHitBoxes,r=0;r<o.length;++r)if(i=o[r],Hi(t,i.left,i.left+i.width)&&Hi(n,i.top,i.top+i.height))return this.legendItems[r]}return null}handleEvent(t){const n=this.options;if(!IG(t.type,n))return;const r=this._getLegendItemAt(t.x,t.y);if(t.type==="mousemove"||t.type==="mouseout"){const i=this._hoveredItem,o=AG(i,r);i&&!o&&mt(n.onLeave,[t,i,this],this),this._hoveredItem=r,r&&!o&&mt(n.onHover,[t,r,this],this)}else r&&mt(n.onClick,[t,r,this],this)}}function NG(e,t,n,r,i){const o=LG(r,e,t,n),s=$G(i,r,t.lineHeight);return{itemWidth:o,itemHeight:s}}function LG(e,t,n,r){let i=e.text;return i&&typeof i!="string"&&(i=i.reduce((o,s)=>o.length>s.length?o:s)),t+n.size/2+r.measureText(i).width}function $G(e,t,n){let r=e;return typeof t.text!="string"&&(r=UE(t,n)),r}function UE(e,t){const n=e.text?e.text.length:0;return t*n}function IG(e,t){return!!((e==="mousemove"||e==="mouseout")&&(t.onHover||t.onLeave)||t.onClick&&(e==="click"||e==="mouseup"))}var DG={id:"legend",_element:_C,start(e,t,n){const r=e.legend=new _C({ctx:e.ctx,options:n,chart:e});En.configure(e,r,n),En.addBox(e,r)},stop(e){En.removeBox(e,e.legend),delete e.legend},beforeUpdate(e,t,n){const r=e.legend;En.configure(e,r,n),r.options=n},afterUpdate(e){const t=e.legend;t.buildLabels(),t.adjustHitBoxes()},afterEvent(e,t){t.replay||e.legend.handleEvent(t.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(e,t,n){const r=t.datasetIndex,i=n.chart;i.isDatasetVisible(r)?(i.hide(r),t.hidden=!0):(i.show(r),t.hidden=!1)},onHover:null,onLeave:null,labels:{color:e=>e.chart.options.color,boxWidth:40,padding:10,generateLabels(e){const t=e.data.datasets,{labels:{usePointStyle:n,pointStyle:r,textAlign:i,color:o,useBorderRadius:s,borderRadius:l}}=e.legend.options;return e._getSortedDatasetMetas().map(c=>{const d=c.controller.getStyle(n?0:void 0),f=Rn(d.borderWidth);return{text:t[c.index].label,fillStyle:d.backgroundColor,fontColor:o,hidden:!c.visible,lineCap:d.borderCapStyle,lineDash:d.borderDash,lineDashOffset:d.borderDashOffset,lineJoin:d.borderJoinStyle,lineWidth:(f.width+f.height)/4,strokeStyle:d.borderColor,pointStyle:r||d.pointStyle,rotation:d.rotation,textAlign:i||d.textAlign,borderRadius:s&&(l||d.borderRadius),datasetIndex:c.index}},this)}},title:{color:e=>e.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:e=>!e.startsWith("on"),labels:{_scriptable:e=>!["generateLabels","filter","sort"].includes(e)}}};class Bx extends Jr{constructor(t){super(),this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this._padding=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,n){const r=this.options;if(this.left=0,this.top=0,!r.display){this.width=this.height=this.right=this.bottom=0;return}this.width=this.right=t,this.height=this.bottom=n;const i=xt(r.text)?r.text.length:1;this._padding=Rn(r.padding);const o=i*en(r.font).lineHeight+this._padding.height;this.isHorizontal()?this.height=o:this.width=o}isHorizontal(){const t=this.options.position;return t==="top"||t==="bottom"}_drawArgs(t){const{top:n,left:r,bottom:i,right:o,options:s}=this,l=s.align;let c=0,d,f,g;return this.isHorizontal()?(f=_n(l,r,o),g=n+t,d=o-r):(s.position==="left"?(f=r+t,g=_n(l,i,n),c=_t*-.5):(f=o-t,g=_n(l,n,i),c=_t*.5),d=i-n),{titleX:f,titleY:g,maxWidth:d,rotation:c}}draw(){const t=this.ctx,n=this.options;if(!n.display)return;const r=en(n.font),o=r.lineHeight/2+this._padding.top,{titleX:s,titleY:l,maxWidth:c,rotation:d}=this._drawArgs(o);Is(t,n.text,0,0,r,{color:n.color,maxWidth:c,rotation:d,textAlign:Rx(n.align),textBaseline:"middle",translation:[s,l]})}}function zG(e,t){const n=new Bx({ctx:e.ctx,options:t,chart:e});En.configure(e,n,t),En.addBox(e,n),e.titleBlock=n}var FG={id:"title",_element:Bx,start(e,t,n){zG(e,n)},stop(e){const t=e.titleBlock;En.removeBox(e,t),delete e.titleBlock},beforeUpdate(e,t,n){const r=e.titleBlock;En.configure(e,r,n),r.options=n},defaults:{align:"center",display:!1,font:{weight:"bold"},fullSize:!0,padding:10,position:"top",text:"",weight:2e3},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const $f=new WeakMap;var BG={id:"subtitle",start(e,t,n){const r=new Bx({ctx:e.ctx,options:n,chart:e});En.configure(e,r,n),En.addBox(e,r),$f.set(e,r)},stop(e){En.removeBox(e,$f.get(e)),$f.delete(e)},beforeUpdate(e,t,n){const r=$f.get(e);En.configure(e,r,n),r.options=n},defaults:{align:"center",display:!1,font:{weight:"normal"},fullSize:!0,padding:0,position:"top",text:"",weight:1500},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const Cc={average(e){if(!e.length)return!1;let t,n,r=new Set,i=0,o=0;for(t=0,n=e.length;t<n;++t){const l=e[t].element;if(l&&l.hasValue()){const c=l.tooltipPosition();r.add(c.x),i+=c.y,++o}}return{x:[...r].reduce((l,c)=>l+c)/r.size,y:i/o}},nearest(e,t){if(!e.length)return!1;let n=t.x,r=t.y,i=Number.POSITIVE_INFINITY,o,s,l;for(o=0,s=e.length;o<s;++o){const c=e[o].element;if(c&&c.hasValue()){const d=c.getCenterPoint(),f=f1(t,d);f<i&&(i=f,l=c)}}if(l){const c=l.tooltipPosition();n=c.x,r=c.y}return{x:n,y:r}}};function si(e,t){return t&&(xt(t)?Array.prototype.push.apply(e,t):e.push(t)),e}function Di(e){return(typeof e=="string"||e instanceof String)&&e.indexOf(`
`)>-1?e.split(`
`):e}function jG(e,t){const{element:n,datasetIndex:r,index:i}=t,o=e.getDatasetMeta(r).controller,{label:s,value:l}=o.getLabelAndValue(i);return{chart:e,label:s,parsed:o.getParsed(i),raw:e.data.datasets[r].data[i],formattedValue:l,dataset:o.getDataset(),dataIndex:i,datasetIndex:r,element:n}}function SC(e,t){const n=e.chart.ctx,{body:r,footer:i,title:o}=e,{boxWidth:s,boxHeight:l}=t,c=en(t.bodyFont),d=en(t.titleFont),f=en(t.footerFont),g=o.length,m=i.length,x=r.length,w=Rn(t.padding);let _=w.height,v=0,b=r.reduce((E,T)=>E+T.before.length+T.lines.length+T.after.length,0);if(b+=e.beforeBody.length+e.afterBody.length,g&&(_+=g*d.lineHeight+(g-1)*t.titleSpacing+t.titleMarginBottom),b){const E=t.displayColors?Math.max(l,c.lineHeight):c.lineHeight;_+=x*E+(b-x)*c.lineHeight+(b-1)*t.bodySpacing}m&&(_+=t.footerMarginTop+m*f.lineHeight+(m-1)*t.footerSpacing);let S=0;const C=function(E){v=Math.max(v,n.measureText(E).width+S)};return n.save(),n.font=d.string,st(e.title,C),n.font=c.string,st(e.beforeBody.concat(e.afterBody),C),S=t.displayColors?s+2+t.boxPadding:0,st(r,E=>{st(E.before,C),st(E.lines,C),st(E.after,C)}),S=0,n.font=f.string,st(e.footer,C),n.restore(),v+=w.width,{width:v,height:_}}function WG(e,t){const{y:n,height:r}=t;return n<r/2?"top":n>e.height-r/2?"bottom":"center"}function HG(e,t,n,r){const{x:i,width:o}=r,s=n.caretSize+n.caretPadding;if(e==="left"&&i+o+s>t.width||e==="right"&&i-o-s<0)return!0}function VG(e,t,n,r){const{x:i,width:o}=n,{width:s,chartArea:{left:l,right:c}}=e;let d="center";return r==="center"?d=i<=(l+c)/2?"left":"right":i<=o/2?d="left":i>=s-o/2&&(d="right"),HG(d,e,t,n)&&(d="center"),d}function kC(e,t,n){const r=n.yAlign||t.yAlign||WG(e,n);return{xAlign:n.xAlign||t.xAlign||VG(e,t,n,r),yAlign:r}}function UG(e,t){let{x:n,width:r}=e;return t==="right"?n-=r:t==="center"&&(n-=r/2),n}function YG(e,t,n){let{y:r,height:i}=e;return t==="top"?r+=n:t==="bottom"?r-=i+n:r-=i/2,r}function CC(e,t,n,r){const{caretSize:i,caretPadding:o,cornerRadius:s}=e,{xAlign:l,yAlign:c}=n,d=i+o,{topLeft:f,topRight:g,bottomLeft:m,bottomRight:x}=Ps(s);let w=UG(t,l);const _=YG(t,c,d);return c==="center"?l==="left"?w+=d:l==="right"&&(w-=d):l==="left"?w-=Math.max(f,m)+i:l==="right"&&(w+=Math.max(g,x)+i),{x:on(w,0,r.width-t.width),y:on(_,0,r.height-t.height)}}function If(e,t,n){const r=Rn(n.padding);return t==="center"?e.x+e.width/2:t==="right"?e.x+e.width-r.right:e.x+r.left}function PC(e){return si([],Di(e))}function KG(e,t,n){return Zo(e,{tooltip:t,tooltipItems:n,type:"tooltip"})}function EC(e,t){const n=t&&t.dataset&&t.dataset.tooltip&&t.dataset.tooltip.callbacks;return n?e.override(n):e}const YE={beforeTitle:Li,title(e){if(e.length>0){const t=e[0],n=t.chart.data.labels,r=n?n.length:0;if(this&&this.options&&this.options.mode==="dataset")return t.dataset.label||"";if(t.label)return t.label;if(r>0&&t.dataIndex<r)return n[t.dataIndex]}return""},afterTitle:Li,beforeBody:Li,beforeLabel:Li,label(e){if(this&&this.options&&this.options.mode==="dataset")return e.label+": "+e.formattedValue||e.formattedValue;let t=e.dataset.label||"";t&&(t+=": ");const n=e.formattedValue;return Ze(n)||(t+=n),t},labelColor(e){const n=e.chart.getDatasetMeta(e.datasetIndex).controller.getStyle(e.dataIndex);return{borderColor:n.borderColor,backgroundColor:n.backgroundColor,borderWidth:n.borderWidth,borderDash:n.borderDash,borderDashOffset:n.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(e){const n=e.chart.getDatasetMeta(e.datasetIndex).controller.getStyle(e.dataIndex);return{pointStyle:n.pointStyle,rotation:n.rotation}},afterLabel:Li,afterBody:Li,beforeFooter:Li,footer:Li,afterFooter:Li};function Yn(e,t,n,r){const i=e[t].call(n,r);return typeof i=="undefined"?YE[t].call(n,r):i}class w1 extends Jr{constructor(t){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=t.chart,this.options=t.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(t){this.options=t,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){const t=this._cachedAnimations;if(t)return t;const n=this.chart,r=this.options.setContext(this.getContext()),i=r.enabled&&n.options.animation&&r.animations,o=new CE(this.chart,i);return i._cacheable&&(this._cachedAnimations=Object.freeze(o)),o}getContext(){return this.$context||(this.$context=KG(this.chart.getContext(),this,this._tooltipItems))}getTitle(t,n){const{callbacks:r}=n,i=Yn(r,"beforeTitle",this,t),o=Yn(r,"title",this,t),s=Yn(r,"afterTitle",this,t);let l=[];return l=si(l,Di(i)),l=si(l,Di(o)),l=si(l,Di(s)),l}getBeforeBody(t,n){return PC(Yn(n.callbacks,"beforeBody",this,t))}getBody(t,n){const{callbacks:r}=n,i=[];return st(t,o=>{const s={before:[],lines:[],after:[]},l=EC(r,o);si(s.before,Di(Yn(l,"beforeLabel",this,o))),si(s.lines,Yn(l,"label",this,o)),si(s.after,Di(Yn(l,"afterLabel",this,o))),i.push(s)}),i}getAfterBody(t,n){return PC(Yn(n.callbacks,"afterBody",this,t))}getFooter(t,n){const{callbacks:r}=n,i=Yn(r,"beforeFooter",this,t),o=Yn(r,"footer",this,t),s=Yn(r,"afterFooter",this,t);let l=[];return l=si(l,Di(i)),l=si(l,Di(o)),l=si(l,Di(s)),l}_createItems(t){const n=this._active,r=this.chart.data,i=[],o=[],s=[];let l=[],c,d;for(c=0,d=n.length;c<d;++c)l.push(jG(this.chart,n[c]));return t.filter&&(l=l.filter((f,g,m)=>t.filter(f,g,m,r))),t.itemSort&&(l=l.sort((f,g)=>t.itemSort(f,g,r))),st(l,f=>{const g=EC(t.callbacks,f);i.push(Yn(g,"labelColor",this,f)),o.push(Yn(g,"labelPointStyle",this,f)),s.push(Yn(g,"labelTextColor",this,f))}),this.labelColors=i,this.labelPointStyles=o,this.labelTextColors=s,this.dataPoints=l,l}update(t,n){const r=this.options.setContext(this.getContext()),i=this._active;let o,s=[];if(!i.length)this.opacity!==0&&(o={opacity:0});else{const l=Cc[r.position].call(this,i,this._eventPosition);s=this._createItems(r),this.title=this.getTitle(s,r),this.beforeBody=this.getBeforeBody(s,r),this.body=this.getBody(s,r),this.afterBody=this.getAfterBody(s,r),this.footer=this.getFooter(s,r);const c=this._size=SC(this,r),d=Object.assign({},l,c),f=kC(this.chart,r,d),g=CC(r,d,f,this.chart);this.xAlign=f.xAlign,this.yAlign=f.yAlign,o={opacity:1,x:g.x,y:g.y,width:c.width,height:c.height,caretX:l.x,caretY:l.y}}this._tooltipItems=s,this.$context=void 0,o&&this._resolveAnimations().update(this,o),t&&r.external&&r.external.call(this,{chart:this.chart,tooltip:this,replay:n})}drawCaret(t,n,r,i){const o=this.getCaretPosition(t,r,i);n.lineTo(o.x1,o.y1),n.lineTo(o.x2,o.y2),n.lineTo(o.x3,o.y3)}getCaretPosition(t,n,r){const{xAlign:i,yAlign:o}=this,{caretSize:s,cornerRadius:l}=r,{topLeft:c,topRight:d,bottomLeft:f,bottomRight:g}=Ps(l),{x:m,y:x}=t,{width:w,height:_}=n;let v,b,S,C,E,T;return o==="center"?(E=x+_/2,i==="left"?(v=m,b=v-s,C=E+s,T=E-s):(v=m+w,b=v+s,C=E-s,T=E+s),S=v):(i==="left"?b=m+Math.max(c,f)+s:i==="right"?b=m+w-Math.max(d,g)-s:b=this.caretX,o==="top"?(C=x,E=C-s,v=b-s,S=b+s):(C=x+_,E=C+s,v=b+s,S=b-s),T=C),{x1:v,x2:b,x3:S,y1:C,y2:E,y3:T}}drawTitle(t,n,r){const i=this.title,o=i.length;let s,l,c;if(o){const d=Ua(r.rtl,this.x,this.width);for(t.x=If(this,r.titleAlign,r),n.textAlign=d.textAlign(r.titleAlign),n.textBaseline="middle",s=en(r.titleFont),l=r.titleSpacing,n.fillStyle=r.titleColor,n.font=s.string,c=0;c<o;++c)n.fillText(i[c],d.x(t.x),t.y+s.lineHeight/2),t.y+=s.lineHeight+l,c+1===o&&(t.y+=r.titleMarginBottom-l)}}_drawColorBox(t,n,r,i,o){const s=this.labelColors[r],l=this.labelPointStyles[r],{boxHeight:c,boxWidth:d}=o,f=en(o.bodyFont),g=If(this,"left",o),m=i.x(g),x=c<f.lineHeight?(f.lineHeight-c)/2:0,w=n.y+x;if(o.usePointStyle){const _={radius:Math.min(d,c)/2,pointStyle:l.pointStyle,rotation:l.rotation,borderWidth:1},v=i.leftForLtr(m,d)+d/2,b=w+c/2;t.strokeStyle=o.multiKeyBackground,t.fillStyle=o.multiKeyBackground,p1(t,_,v,b),t.strokeStyle=s.borderColor,t.fillStyle=s.backgroundColor,p1(t,_,v,b)}else{t.lineWidth=Ve(s.borderWidth)?Math.max(...Object.values(s.borderWidth)):s.borderWidth||1,t.strokeStyle=s.borderColor,t.setLineDash(s.borderDash||[]),t.lineDashOffset=s.borderDashOffset||0;const _=i.leftForLtr(m,d),v=i.leftForLtr(i.xPlus(m,1),d-2),b=Ps(s.borderRadius);Object.values(b).some(S=>S!==0)?(t.beginPath(),t.fillStyle=o.multiKeyBackground,Pu(t,{x:_,y:w,w:d,h:c,radius:b}),t.fill(),t.stroke(),t.fillStyle=s.backgroundColor,t.beginPath(),Pu(t,{x:v,y:w+1,w:d-2,h:c-2,radius:b}),t.fill()):(t.fillStyle=o.multiKeyBackground,t.fillRect(_,w,d,c),t.strokeRect(_,w,d,c),t.fillStyle=s.backgroundColor,t.fillRect(v,w+1,d-2,c-2))}t.fillStyle=this.labelTextColors[r]}drawBody(t,n,r){const{body:i}=this,{bodySpacing:o,bodyAlign:s,displayColors:l,boxHeight:c,boxWidth:d,boxPadding:f}=r,g=en(r.bodyFont);let m=g.lineHeight,x=0;const w=Ua(r.rtl,this.x,this.width),_=function(z){n.fillText(z,w.x(t.x+x),t.y+m/2),t.y+=m+o},v=w.textAlign(s);let b,S,C,E,T,N,L;for(n.textAlign=s,n.textBaseline="middle",n.font=g.string,t.x=If(this,v,r),n.fillStyle=r.bodyColor,st(this.beforeBody,_),x=l&&v!=="right"?s==="center"?d/2+f:d+2+f:0,E=0,N=i.length;E<N;++E){for(b=i[E],S=this.labelTextColors[E],n.fillStyle=S,st(b.before,_),C=b.lines,l&&C.length&&(this._drawColorBox(n,t,E,w,r),m=Math.max(g.lineHeight,c)),T=0,L=C.length;T<L;++T)_(C[T]),m=g.lineHeight;st(b.after,_)}x=0,m=g.lineHeight,st(this.afterBody,_),t.y-=o}drawFooter(t,n,r){const i=this.footer,o=i.length;let s,l;if(o){const c=Ua(r.rtl,this.x,this.width);for(t.x=If(this,r.footerAlign,r),t.y+=r.footerMarginTop,n.textAlign=c.textAlign(r.footerAlign),n.textBaseline="middle",s=en(r.footerFont),n.fillStyle=r.footerColor,n.font=s.string,l=0;l<o;++l)n.fillText(i[l],c.x(t.x),t.y+s.lineHeight/2),t.y+=s.lineHeight+r.footerSpacing}}drawBackground(t,n,r,i){const{xAlign:o,yAlign:s}=this,{x:l,y:c}=t,{width:d,height:f}=r,{topLeft:g,topRight:m,bottomLeft:x,bottomRight:w}=Ps(i.cornerRadius);n.fillStyle=i.backgroundColor,n.strokeStyle=i.borderColor,n.lineWidth=i.borderWidth,n.beginPath(),n.moveTo(l+g,c),s==="top"&&this.drawCaret(t,n,r,i),n.lineTo(l+d-m,c),n.quadraticCurveTo(l+d,c,l+d,c+m),s==="center"&&o==="right"&&this.drawCaret(t,n,r,i),n.lineTo(l+d,c+f-w),n.quadraticCurveTo(l+d,c+f,l+d-w,c+f),s==="bottom"&&this.drawCaret(t,n,r,i),n.lineTo(l+x,c+f),n.quadraticCurveTo(l,c+f,l,c+f-x),s==="center"&&o==="left"&&this.drawCaret(t,n,r,i),n.lineTo(l,c+g),n.quadraticCurveTo(l,c,l+g,c),n.closePath(),n.fill(),i.borderWidth>0&&n.stroke()}_updateAnimationTarget(t){const n=this.chart,r=this.$animations,i=r&&r.x,o=r&&r.y;if(i||o){const s=Cc[t.position].call(this,this._active,this._eventPosition);if(!s)return;const l=this._size=SC(this,t),c=Object.assign({},s,this._size),d=kC(n,t,c),f=CC(t,c,d,n);(i._to!==f.x||o._to!==f.y)&&(this.xAlign=d.xAlign,this.yAlign=d.yAlign,this.width=l.width,this.height=l.height,this.caretX=s.x,this.caretY=s.y,this._resolveAnimations().update(this,f))}}_willRender(){return!!this.opacity}draw(t){const n=this.options.setContext(this.getContext());let r=this.opacity;if(!r)return;this._updateAnimationTarget(n);const i={width:this.width,height:this.height},o={x:this.x,y:this.y};r=Math.abs(r)<.001?0:r;const s=Rn(n.padding),l=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;n.enabled&&l&&(t.save(),t.globalAlpha=r,this.drawBackground(o,t,i,n),bE(t,n.textDirection),o.y+=s.top,this.drawTitle(o,t,n),this.drawBody(o,t,n),this.drawFooter(o,t,n),wE(t,n.textDirection),t.restore())}getActiveElements(){return this._active||[]}setActiveElements(t,n){const r=this._active,i=t.map(({datasetIndex:l,index:c})=>{const d=this.chart.getDatasetMeta(l);if(!d)throw new Error("Cannot find a dataset at index "+l);return{datasetIndex:l,element:d.data[c],index:c}}),o=!tp(r,i),s=this._positionChanged(i,n);(o||s)&&(this._active=i,this._eventPosition=n,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(t,n,r=!0){if(n&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;const i=this.options,o=this._active||[],s=this._getActiveElements(t,o,n,r),l=this._positionChanged(s,t),c=n||!tp(s,o)||l;return c&&(this._active=s,(i.enabled||i.external)&&(this._eventPosition={x:t.x,y:t.y},this.update(!0,n))),c}_getActiveElements(t,n,r,i){const o=this.options;if(t.type==="mouseout")return[];if(!i)return n.filter(l=>this.chart.data.datasets[l.datasetIndex]&&this.chart.getDatasetMeta(l.datasetIndex).controller.getParsed(l.index)!==void 0);const s=this.chart.getElementsAtEventForMode(t,o.mode,o,r);return o.reverse&&s.reverse(),s}_positionChanged(t,n){const{caretX:r,caretY:i,options:o}=this,s=Cc[o.position].call(this,t,n);return s!==!1&&(r!==s.x||i!==s.y)}}le(w1,"positioners",Cc);var XG={id:"tooltip",_element:w1,positioners:Cc,afterInit(e,t,n){n&&(e.tooltip=new w1({chart:e,options:n}))},beforeUpdate(e,t,n){e.tooltip&&e.tooltip.initialize(n)},reset(e,t,n){e.tooltip&&e.tooltip.initialize(n)},afterDraw(e){const t=e.tooltip;if(t&&t._willRender()){const n={tooltip:t};if(e.notifyPlugins("beforeTooltipDraw",{...n,cancelable:!0})===!1)return;t.draw(e.ctx),e.notifyPlugins("afterTooltipDraw",n)}},afterEvent(e,t){if(e.tooltip){const n=t.replay;e.tooltip.handleEvent(t.event,n,t.inChartArea)&&(t.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(e,t)=>t.bodyFont.size,boxWidth:(e,t)=>t.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:YE},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:e=>e!=="filter"&&e!=="itemSort"&&e!=="external",_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]},GG=Object.freeze({__proto__:null,Colors:aG,Decimation:dG,Filler:TG,Legend:DG,SubTitle:BG,Title:FG,Tooltip:XG});const qG=(e,t,n,r)=>(typeof t=="string"?(n=e.push(t)-1,r.unshift({index:n,label:t})):isNaN(t)&&(n=null),n);function ZG(e,t,n,r){const i=e.indexOf(t);if(i===-1)return qG(e,t,n,r);const o=e.lastIndexOf(t);return i!==o?n:i}const QG=(e,t)=>e===null?null:on(Math.round(e),0,t);function MC(e){const t=this.getLabels();return e>=0&&e<t.length?t[e]:e}class _1 extends Vs{constructor(t){super(t),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(t){const n=this._addedLabels;if(n.length){const r=this.getLabels();for(const{index:i,label:o}of n)r[i]===o&&r.splice(i,1);this._addedLabels=[]}super.init(t)}parse(t,n){if(Ze(t))return null;const r=this.getLabels();return n=isFinite(n)&&r[n]===t?n:ZG(r,t,Ae(n,t),this._addedLabels),QG(n,r.length-1)}determineDataLimits(){const{minDefined:t,maxDefined:n}=this.getUserBounds();let{min:r,max:i}=this.getMinMax(!0);this.options.bounds==="ticks"&&(t||(r=0),n||(i=this.getLabels().length-1)),this.min=r,this.max=i}buildTicks(){const t=this.min,n=this.max,r=this.options.offset,i=[];let o=this.getLabels();o=t===0&&n===o.length-1?o:o.slice(t,n+1),this._valueRange=Math.max(o.length-(r?0:1),1),this._startValue=this.min-(r?.5:0);for(let s=t;s<=n;s++)i.push({value:s});return i}getLabelForValue(t){return MC.call(this,t)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(t){return typeof t!="number"&&(t=this.parse(t)),t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getPixelForTick(t){const n=this.ticks;return t<0||t>n.length-1?null:this.getPixelForValue(n[t].value)}getValueForPixel(t){return Math.round(this._startValue+this.getDecimalForPixel(t)*this._valueRange)}getBasePixel(){return this.bottom}}le(_1,"id","category"),le(_1,"defaults",{ticks:{callback:MC}});function JG(e,t){const n=[],{bounds:i,step:o,min:s,max:l,precision:c,count:d,maxTicks:f,maxDigits:g,includeBounds:m}=e,x=o||1,w=f-1,{min:_,max:v}=t,b=!Ze(s),S=!Ze(l),C=!Ze(d),E=(v-_)/(g+1);let T=_k((v-_)/w/x)*x,N,L,z,B;if(T<1e-14&&!b&&!S)return[{value:_},{value:v}];B=Math.ceil(v/T)-Math.floor(_/T),B>w&&(T=_k(B*T/w/x)*x),Ze(c)||(N=Math.pow(10,c),T=Math.ceil(T*N)/N),i==="ticks"?(L=Math.floor(_/T)*T,z=Math.ceil(v/T)*T):(L=_,z=v),b&&S&&o&&KU((l-s)/o,T/1e3)?(B=Math.round(Math.min((l-s)/T,f)),T=(l-s)/B,L=s,z=l):C?(L=b?s:L,z=S?l:z,B=d-1,T=(z-L)/B):(B=(z-L)/T,Vc(B,Math.round(B),T/1e3)?B=Math.round(B):B=Math.ceil(B));const H=Math.max(Sk(T),Sk(L));N=Math.pow(10,Ze(c)?H:c),L=Math.round(L*N)/N,z=Math.round(z*N)/N;let Q=0;for(b&&(m&&L!==s?(n.push({value:s}),L<s&&Q++,Vc(Math.round((L+Q*T)*N)/N,s,OC(s,E,e))&&Q++):L<s&&Q++);Q<B;++Q){const te=Math.round((L+Q*T)*N)/N;if(S&&te>l)break;n.push({value:te})}return S&&m&&z!==l?n.length&&Vc(n[n.length-1].value,l,OC(l,E,e))?n[n.length-1].value=l:n.push({value:l}):(!S||z===l)&&n.push({value:z}),n}function OC(e,t,{horizontal:n,minRotation:r}){const i=Zr(r),o=(n?Math.sin(i):Math.cos(i))||.001,s=.75*t*(""+e).length;return Math.min(t/o,s)}class lp extends Vs{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(t,n){return Ze(t)||(typeof t=="number"||t instanceof Number)&&!isFinite(+t)?null:+t}handleTickRangeOptions(){const{beginAtZero:t}=this.options,{minDefined:n,maxDefined:r}=this.getUserBounds();let{min:i,max:o}=this;const s=c=>i=n?i:c,l=c=>o=r?o:c;if(t){const c=wi(i),d=wi(o);c<0&&d<0?l(0):c>0&&d>0&&s(0)}if(i===o){let c=o===0?1:Math.abs(o*.05);l(o+c),t||s(i-c)}this.min=i,this.max=o}getTickLimit(){const t=this.options.ticks;let{maxTicksLimit:n,stepSize:r}=t,i;return r?(i=Math.ceil(this.max/r)-Math.floor(this.min/r)+1,i>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${r} would result generating up to ${i} ticks. Limiting to 1000.`),i=1e3)):(i=this.computeTickLimit(),n=n||11),n&&(i=Math.min(n,i)),i}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){const t=this.options,n=t.ticks;let r=this.getTickLimit();r=Math.max(2,r);const i={maxTicks:r,bounds:t.bounds,min:t.min,max:t.max,precision:n.precision,step:n.stepSize,count:n.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:n.minRotation||0,includeBounds:n.includeBounds!==!1},o=this._range||this,s=JG(i,o);return t.bounds==="ticks"&&rE(s,this,"value"),t.reverse?(s.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),s}configure(){const t=this.ticks;let n=this.min,r=this.max;if(super.configure(),this.options.offset&&t.length){const i=(r-n)/Math.max(t.length-1,1)/2;n-=i,r+=i}this._startValue=n,this._endValue=r,this._valueRange=r-n}getLabelForValue(t){return rd(t,this.chart.options.locale,this.options.ticks.format)}}class S1 extends lp{determineDataLimits(){const{min:t,max:n}=this.getMinMax(!0);this.min=Dt(t)?t:0,this.max=Dt(n)?n:1,this.handleTickRangeOptions()}computeTickLimit(){const t=this.isHorizontal(),n=t?this.width:this.height,r=Zr(this.options.ticks.minRotation),i=(t?Math.sin(r):Math.cos(r))||.001,o=this._resolveTickFontOptions(0);return Math.ceil(n/Math.min(40,o.lineHeight/i))}getPixelForValue(t){return t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getValueForPixel(t){return this._startValue+this.getDecimalForPixel(t)*this._valueRange}}le(S1,"id","linear"),le(S1,"defaults",{ticks:{callback:yg.formatters.numeric}});const Mu=e=>Math.floor(xo(e)),ds=(e,t)=>Math.pow(10,Mu(e)+t);function RC(e){return e/Math.pow(10,Mu(e))===1}function TC(e,t,n){const r=Math.pow(10,n),i=Math.floor(e/r);return Math.ceil(t/r)-i}function eq(e,t){const n=t-e;let r=Mu(n);for(;TC(e,t,r)>10;)r++;for(;TC(e,t,r)<10;)r--;return Math.min(r,Mu(e))}function tq(e,{min:t,max:n}){t=ar(e.min,t);const r=[],i=Mu(t);let o=eq(t,n),s=o<0?Math.pow(10,Math.abs(o)):1;const l=Math.pow(10,o),c=i>o?Math.pow(10,i):0,d=Math.round((t-c)*s)/s,f=Math.floor((t-c)/l/10)*l*10;let g=Math.floor((d-f)/Math.pow(10,o)),m=ar(e.min,Math.round((c+f+g*Math.pow(10,o))*s)/s);for(;m<n;)r.push({value:m,major:RC(m),significand:g}),g>=10?g=g<15?15:20:g++,g>=20&&(o++,g=2,s=o>=0?1:s),m=Math.round((c+f+g*Math.pow(10,o))*s)/s;const x=ar(e.max,m);return r.push({value:x,major:RC(x),significand:g}),r}class k1 extends Vs{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._valueRange=0}parse(t,n){const r=lp.prototype.parse.apply(this,[t,n]);if(r===0){this._zero=!0;return}return Dt(r)&&r>0?r:null}determineDataLimits(){const{min:t,max:n}=this.getMinMax(!0);this.min=Dt(t)?Math.max(0,t):null,this.max=Dt(n)?Math.max(0,n):null,this.options.beginAtZero&&(this._zero=!0),this._zero&&this.min!==this._suggestedMin&&!Dt(this._userMin)&&(this.min=t===ds(this.min,0)?ds(this.min,-1):ds(this.min,0)),this.handleTickRangeOptions()}handleTickRangeOptions(){const{minDefined:t,maxDefined:n}=this.getUserBounds();let r=this.min,i=this.max;const o=l=>r=t?r:l,s=l=>i=n?i:l;r===i&&(r<=0?(o(1),s(10)):(o(ds(r,-1)),s(ds(i,1)))),r<=0&&o(ds(i,-1)),i<=0&&s(ds(r,1)),this.min=r,this.max=i}buildTicks(){const t=this.options,n={min:this._userMin,max:this._userMax},r=tq(n,this);return t.bounds==="ticks"&&rE(r,this,"value"),t.reverse?(r.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),r}getLabelForValue(t){return t===void 0?"0":rd(t,this.chart.options.locale,this.options.ticks.format)}configure(){const t=this.min;super.configure(),this._startValue=xo(t),this._valueRange=xo(this.max)-xo(t)}getPixelForValue(t){return(t===void 0||t===0)&&(t=this.min),t===null||isNaN(t)?NaN:this.getPixelForDecimal(t===this.min?0:(xo(t)-this._startValue)/this._valueRange)}getValueForPixel(t){const n=this.getDecimalForPixel(t);return Math.pow(10,this._startValue+n*this._valueRange)}}le(k1,"id","logarithmic"),le(k1,"defaults",{ticks:{callback:yg.formatters.logarithmic,major:{enabled:!0}}});function C1(e){const t=e.ticks;if(t.display&&e.display){const n=Rn(t.backdropPadding);return Ae(t.font&&t.font.size,zt.font.size)+n.height}return 0}function nq(e,t,n){return n=xt(n)?n:[n],{w:uY(e,t.string,n),h:n.length*t.lineHeight}}function AC(e,t,n,r,i){return e===r||e===i?{start:t-n/2,end:t+n/2}:e<r||e>i?{start:t-n,end:t}:{start:t,end:t+n}}function rq(e){const t={l:e.left+e._padding.left,r:e.right-e._padding.right,t:e.top+e._padding.top,b:e.bottom-e._padding.bottom},n=Object.assign({},t),r=[],i=[],o=e._pointLabels.length,s=e.options.pointLabels,l=s.centerPointLabels?_t/o:0;for(let c=0;c<o;c++){const d=s.setContext(e.getPointLabelContext(c));i[c]=d.padding;const f=e.getPointPosition(c,e.drawingArea+i[c],l),g=en(d.font),m=nq(e.ctx,g,e._pointLabels[c]);r[c]=m;const x=lr(e.getIndexAngle(c)+l),w=Math.round(Mx(x)),_=AC(w,f.x,m.w,0,180),v=AC(w,f.y,m.h,90,270);iq(n,t,x,_,v)}e.setCenterPoint(t.l-n.l,n.r-t.r,t.t-n.t,n.b-t.b),e._pointLabelItems=aq(e,r,i)}function iq(e,t,n,r,i){const o=Math.abs(Math.sin(n)),s=Math.abs(Math.cos(n));let l=0,c=0;r.start<t.l?(l=(t.l-r.start)/o,e.l=Math.min(e.l,t.l-l)):r.end>t.r&&(l=(r.end-t.r)/o,e.r=Math.max(e.r,t.r+l)),i.start<t.t?(c=(t.t-i.start)/s,e.t=Math.min(e.t,t.t-c)):i.end>t.b&&(c=(i.end-t.b)/s,e.b=Math.max(e.b,t.b+c))}function oq(e,t,n){const r=e.drawingArea,{extra:i,additionalAngle:o,padding:s,size:l}=n,c=e.getPointPosition(t,r+i+s,o),d=Math.round(Mx(lr(c.angle+Wt))),f=uq(c.y,l.h,d),g=lq(d),m=cq(c.x,l.w,g);return{visible:!0,x:c.x,y:f,textAlign:g,left:m,top:f,right:m+l.w,bottom:f+l.h}}function sq(e,t){if(!t)return!0;const{left:n,top:r,right:i,bottom:o}=e;return!(Ui({x:n,y:r},t)||Ui({x:n,y:o},t)||Ui({x:i,y:r},t)||Ui({x:i,y:o},t))}function aq(e,t,n){const r=[],i=e._pointLabels.length,o=e.options,{centerPointLabels:s,display:l}=o.pointLabels,c={extra:C1(o)/2,additionalAngle:s?_t/i:0};let d;for(let f=0;f<i;f++){c.padding=n[f],c.size=t[f];const g=oq(e,f,c);r.push(g),l==="auto"&&(g.visible=sq(g,d),g.visible&&(d=g))}return r}function lq(e){return e===0||e===180?"center":e<180?"left":"right"}function cq(e,t,n){return n==="right"?e-=t:n==="center"&&(e-=t/2),e}function uq(e,t,n){return n===90||n===270?e-=t/2:(n>270||n<90)&&(e-=t),e}function dq(e,t,n){const{left:r,top:i,right:o,bottom:s}=n,{backdropColor:l}=t;if(!Ze(l)){const c=Ps(t.borderRadius),d=Rn(t.backdropPadding);e.fillStyle=l;const f=r-d.left,g=i-d.top,m=o-r+d.width,x=s-i+d.height;Object.values(c).some(w=>w!==0)?(e.beginPath(),Pu(e,{x:f,y:g,w:m,h:x,radius:c}),e.fill()):e.fillRect(f,g,m,x)}}function fq(e,t){const{ctx:n,options:{pointLabels:r}}=e;for(let i=t-1;i>=0;i--){const o=e._pointLabelItems[i];if(!o.visible)continue;const s=r.setContext(e.getPointLabelContext(i));dq(n,s,o);const l=en(s.font),{x:c,y:d,textAlign:f}=o;Is(n,e._pointLabels[i],c,d+l.lineHeight/2,l,{color:s.color,textAlign:f,textBaseline:"middle"})}}function KE(e,t,n,r){const{ctx:i}=e;if(n)i.arc(e.xCenter,e.yCenter,t,0,wt);else{let o=e.getPointPosition(0,t);i.moveTo(o.x,o.y);for(let s=1;s<r;s++)o=e.getPointPosition(s,t),i.lineTo(o.x,o.y)}}function hq(e,t,n,r,i){const o=e.ctx,s=t.circular,{color:l,lineWidth:c}=t;!s&&!r||!l||!c||n<0||(o.save(),o.strokeStyle=l,o.lineWidth=c,o.setLineDash(i.dash),o.lineDashOffset=i.dashOffset,o.beginPath(),KE(e,n,s,r),o.closePath(),o.stroke(),o.restore())}function pq(e,t,n){return Zo(e,{label:n,index:t,type:"pointLabel"})}class Pc extends lp{constructor(t){super(t),this.xCenter=void 0,this.yCenter=void 0,this.drawingArea=void 0,this._pointLabels=[],this._pointLabelItems=[]}setDimensions(){const t=this._padding=Rn(C1(this.options)/2),n=this.width=this.maxWidth-t.width,r=this.height=this.maxHeight-t.height;this.xCenter=Math.floor(this.left+n/2+t.left),this.yCenter=Math.floor(this.top+r/2+t.top),this.drawingArea=Math.floor(Math.min(n,r)/2)}determineDataLimits(){const{min:t,max:n}=this.getMinMax(!1);this.min=Dt(t)&&!isNaN(t)?t:0,this.max=Dt(n)&&!isNaN(n)?n:0,this.handleTickRangeOptions()}computeTickLimit(){return Math.ceil(this.drawingArea/C1(this.options))}generateTickLabels(t){lp.prototype.generateTickLabels.call(this,t),this._pointLabels=this.getLabels().map((n,r)=>{const i=mt(this.options.pointLabels.callback,[n,r],this);return i||i===0?i:""}).filter((n,r)=>this.chart.getDataVisibility(r))}fit(){const t=this.options;t.display&&t.pointLabels.display?rq(this):this.setCenterPoint(0,0,0,0)}setCenterPoint(t,n,r,i){this.xCenter+=Math.floor((t-n)/2),this.yCenter+=Math.floor((r-i)/2),this.drawingArea-=Math.min(this.drawingArea/2,Math.max(t,n,r,i))}getIndexAngle(t){const n=wt/(this._pointLabels.length||1),r=this.options.startAngle||0;return lr(t*n+Zr(r))}getDistanceFromCenterForValue(t){if(Ze(t))return NaN;const n=this.drawingArea/(this.max-this.min);return this.options.reverse?(this.max-t)*n:(t-this.min)*n}getValueForDistanceFromCenter(t){if(Ze(t))return NaN;const n=t/(this.drawingArea/(this.max-this.min));return this.options.reverse?this.max-n:this.min+n}getPointLabelContext(t){const n=this._pointLabels||[];if(t>=0&&t<n.length){const r=n[t];return pq(this.getContext(),t,r)}}getPointPosition(t,n,r=0){const i=this.getIndexAngle(t)-Wt+r;return{x:Math.cos(i)*n+this.xCenter,y:Math.sin(i)*n+this.yCenter,angle:i}}getPointPositionForValue(t,n){return this.getPointPosition(t,this.getDistanceFromCenterForValue(n))}getBasePosition(t){return this.getPointPositionForValue(t||0,this.getBaseValue())}getPointLabelPosition(t){const{left:n,top:r,right:i,bottom:o}=this._pointLabelItems[t];return{left:n,top:r,right:i,bottom:o}}drawBackground(){const{backgroundColor:t,grid:{circular:n}}=this.options;if(t){const r=this.ctx;r.save(),r.beginPath(),KE(this,this.getDistanceFromCenterForValue(this._endValue),n,this._pointLabels.length),r.closePath(),r.fillStyle=t,r.fill(),r.restore()}}drawGrid(){const t=this.ctx,n=this.options,{angleLines:r,grid:i,border:o}=n,s=this._pointLabels.length;let l,c,d;if(n.pointLabels.display&&fq(this,s),i.display&&this.ticks.forEach((f,g)=>{if(g!==0||g===0&&this.min<0){c=this.getDistanceFromCenterForValue(f.value);const m=this.getContext(g),x=i.setContext(m),w=o.setContext(m);hq(this,x,c,s,w)}}),r.display){for(t.save(),l=s-1;l>=0;l--){const f=r.setContext(this.getPointLabelContext(l)),{color:g,lineWidth:m}=f;!m||!g||(t.lineWidth=m,t.strokeStyle=g,t.setLineDash(f.borderDash),t.lineDashOffset=f.borderDashOffset,c=this.getDistanceFromCenterForValue(n.ticks.reverse?this.min:this.max),d=this.getPointPosition(l,c),t.beginPath(),t.moveTo(this.xCenter,this.yCenter),t.lineTo(d.x,d.y),t.stroke())}t.restore()}}drawBorder(){}drawLabels(){const t=this.ctx,n=this.options,r=n.ticks;if(!r.display)return;const i=this.getIndexAngle(0);let o,s;t.save(),t.translate(this.xCenter,this.yCenter),t.rotate(i),t.textAlign="center",t.textBaseline="middle",this.ticks.forEach((l,c)=>{if(c===0&&this.min>=0&&!n.reverse)return;const d=r.setContext(this.getContext(c)),f=en(d.font);if(o=this.getDistanceFromCenterForValue(this.ticks[c].value),d.showLabelBackdrop){t.font=f.string,s=t.measureText(l.label).width,t.fillStyle=d.backdropColor;const g=Rn(d.backdropPadding);t.fillRect(-s/2-g.left,-o-f.size/2-g.top,s+g.width,f.size+g.height)}Is(t,l.label,0,-o,f,{color:d.color,strokeColor:d.textStrokeColor,strokeWidth:d.textStrokeWidth})}),t.restore()}drawTitle(){}}le(Pc,"id","radialLinear"),le(Pc,"defaults",{display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,lineWidth:1,borderDash:[],borderDashOffset:0},grid:{circular:!1},startAngle:0,ticks:{showLabelBackdrop:!0,callback:yg.formatters.numeric},pointLabels:{backdropColor:void 0,backdropPadding:2,display:!0,font:{size:10},callback(t){return t},padding:5,centerPointLabels:!1}}),le(Pc,"defaultRoutes",{"angleLines.color":"borderColor","pointLabels.color":"color","ticks.color":"color"}),le(Pc,"descriptors",{angleLines:{_fallback:"grid"}});const _g={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},Xn=Object.keys(_g);function NC(e,t){return e-t}function LC(e,t){if(Ze(t))return null;const n=e._adapter,{parser:r,round:i,isoWeekday:o}=e._parseOpts;let s=t;return typeof r=="function"&&(s=r(s)),Dt(s)||(s=typeof r=="string"?n.parse(s,r):n.parse(s)),s===null?null:(i&&(s=i==="week"&&(tl(o)||o===!0)?n.startOf(s,"isoWeek",o):n.startOf(s,i)),+s)}function $C(e,t,n,r){const i=Xn.length;for(let o=Xn.indexOf(e);o<i-1;++o){const s=_g[Xn[o]],l=s.steps?s.steps:Number.MAX_SAFE_INTEGER;if(s.common&&Math.ceil((n-t)/(l*s.size))<=r)return Xn[o]}return Xn[i-1]}function gq(e,t,n,r,i){for(let o=Xn.length-1;o>=Xn.indexOf(n);o--){const s=Xn[o];if(_g[s].common&&e._adapter.diff(i,r,s)>=t-1)return s}return Xn[n?Xn.indexOf(n):0]}function mq(e){for(let t=Xn.indexOf(e)+1,n=Xn.length;t<n;++t)if(_g[Xn[t]].common)return Xn[t]}function IC(e,t,n){if(!n)e[t]=!0;else if(n.length){const{lo:r,hi:i}=Ox(n,t),o=n[r]>=t?n[r]:n[i];e[o]=!0}}function vq(e,t,n,r){const i=e._adapter,o=+i.startOf(t[0].value,r),s=t[t.length-1].value;let l,c;for(l=o;l<=s;l=+i.add(l,1,r))c=n[l],c>=0&&(t[c].major=!0);return t}function DC(e,t,n){const r=[],i={},o=t.length;let s,l;for(s=0;s<o;++s)l=t[s],i[l]=s,r.push({value:l,major:!1});return o===0||!n?r:vq(e,r,i,n)}class Ou extends Vs{constructor(t){super(t),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(t,n={}){const r=t.time||(t.time={}),i=this._adapter=new PK._date(t.adapters.date);i.init(n),Hc(r.displayFormats,i.formats()),this._parseOpts={parser:r.parser,round:r.round,isoWeekday:r.isoWeekday},super.init(t),this._normalized=n.normalized}parse(t,n){return t===void 0?null:LC(this,t)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){const t=this.options,n=this._adapter,r=t.time.unit||"day";let{min:i,max:o,minDefined:s,maxDefined:l}=this.getUserBounds();function c(d){!s&&!isNaN(d.min)&&(i=Math.min(i,d.min)),!l&&!isNaN(d.max)&&(o=Math.max(o,d.max))}(!s||!l)&&(c(this._getLabelBounds()),(t.bounds!=="ticks"||t.ticks.source!=="labels")&&c(this.getMinMax(!1))),i=Dt(i)&&!isNaN(i)?i:+n.startOf(Date.now(),r),o=Dt(o)&&!isNaN(o)?o:+n.endOf(Date.now(),r)+1,this.min=Math.min(i,o-1),this.max=Math.max(i+1,o)}_getLabelBounds(){const t=this.getLabelTimestamps();let n=Number.POSITIVE_INFINITY,r=Number.NEGATIVE_INFINITY;return t.length&&(n=t[0],r=t[t.length-1]),{min:n,max:r}}buildTicks(){const t=this.options,n=t.time,r=t.ticks,i=r.source==="labels"?this.getLabelTimestamps():this._generate();t.bounds==="ticks"&&i.length&&(this.min=this._userMin||i[0],this.max=this._userMax||i[i.length-1]);const o=this.min,s=this.max,l=ZU(i,o,s);return this._unit=n.unit||(r.autoSkip?$C(n.minUnit,this.min,this.max,this._getLabelCapacity(o)):gq(this,l.length,n.minUnit,this.min,this.max)),this._majorUnit=!r.major.enabled||this._unit==="year"?void 0:mq(this._unit),this.initOffsets(i),t.reverse&&l.reverse(),DC(this,l,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(t=>+t.value))}initOffsets(t=[]){let n=0,r=0,i,o;this.options.offset&&t.length&&(i=this.getDecimalForValue(t[0]),t.length===1?n=1-i:n=(this.getDecimalForValue(t[1])-i)/2,o=this.getDecimalForValue(t[t.length-1]),t.length===1?r=o:r=(o-this.getDecimalForValue(t[t.length-2]))/2);const s=t.length<3?.5:.25;n=on(n,0,s),r=on(r,0,s),this._offsets={start:n,end:r,factor:1/(n+1+r)}}_generate(){const t=this._adapter,n=this.min,r=this.max,i=this.options,o=i.time,s=o.unit||$C(o.minUnit,n,r,this._getLabelCapacity(n)),l=Ae(i.ticks.stepSize,1),c=s==="week"?o.isoWeekday:!1,d=tl(c)||c===!0,f={};let g=n,m,x;if(d&&(g=+t.startOf(g,"isoWeek",c)),g=+t.startOf(g,d?"day":s),t.diff(r,n,s)>1e5*l)throw new Error(n+" and "+r+" are too far apart with stepSize of "+l+" "+s);const w=i.ticks.source==="data"&&this.getDataTimestamps();for(m=g,x=0;m<r;m=+t.add(m,l,s),x++)IC(f,m,w);return(m===r||i.bounds==="ticks"||x===1)&&IC(f,m,w),Object.keys(f).sort(NC).map(_=>+_)}getLabelForValue(t){const n=this._adapter,r=this.options.time;return r.tooltipFormat?n.format(t,r.tooltipFormat):n.format(t,r.displayFormats.datetime)}format(t,n){const i=this.options.time.displayFormats,o=this._unit,s=n||i[o];return this._adapter.format(t,s)}_tickFormatFunction(t,n,r,i){const o=this.options,s=o.ticks.callback;if(s)return mt(s,[t,n,r],this);const l=o.time.displayFormats,c=this._unit,d=this._majorUnit,f=c&&l[c],g=d&&l[d],m=r[n],x=d&&g&&m&&m.major;return this._adapter.format(t,i||(x?g:f))}generateTickLabels(t){let n,r,i;for(n=0,r=t.length;n<r;++n)i=t[n],i.label=this._tickFormatFunction(i.value,n,t)}getDecimalForValue(t){return t===null?NaN:(t-this.min)/(this.max-this.min)}getPixelForValue(t){const n=this._offsets,r=this.getDecimalForValue(t);return this.getPixelForDecimal((n.start+r)*n.factor)}getValueForPixel(t){const n=this._offsets,r=this.getDecimalForPixel(t)/n.factor-n.end;return this.min+r*(this.max-this.min)}_getLabelSize(t){const n=this.options.ticks,r=this.ctx.measureText(t).width,i=Zr(this.isHorizontal()?n.maxRotation:n.minRotation),o=Math.cos(i),s=Math.sin(i),l=this._resolveTickFontOptions(0).size;return{w:r*o+l*s,h:r*s+l*o}}_getLabelCapacity(t){const n=this.options.time,r=n.displayFormats,i=r[n.unit]||r.millisecond,o=this._tickFormatFunction(t,0,DC(this,[t],this._majorUnit),i),s=this._getLabelSize(o),l=Math.floor(this.isHorizontal()?this.width/s.w:this.height/s.h)-1;return l>0?l:1}getDataTimestamps(){let t=this._cache.data||[],n,r;if(t.length)return t;const i=this.getMatchingVisibleMetas();if(this._normalized&&i.length)return this._cache.data=i[0].controller.getAllParsedValues(this);for(n=0,r=i.length;n<r;++n)t=t.concat(i[n].controller.getAllParsedValues(this));return this._cache.data=this.normalize(t)}getLabelTimestamps(){const t=this._cache.labels||[];let n,r;if(t.length)return t;const i=this.getLabels();for(n=0,r=i.length;n<r;++n)t.push(LC(this,i[n]));return this._cache.labels=this._normalized?t:this.normalize(t)}normalize(t){return sE(t.sort(NC))}}le(Ou,"id","time"),le(Ou,"defaults",{bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",callback:!1,major:{enabled:!1}}});function Df(e,t,n){let r=0,i=e.length-1,o,s,l,c;n?(t>=e[r].pos&&t<=e[i].pos&&({lo:r,hi:i}=Vi(e,"pos",t)),{pos:o,time:l}=e[r],{pos:s,time:c}=e[i]):(t>=e[r].time&&t<=e[i].time&&({lo:r,hi:i}=Vi(e,"time",t)),{time:o,pos:l}=e[r],{time:s,pos:c}=e[i]);const d=s-o;return d?l+(c-l)*(t-o)/d:l}class P1 extends Ou{constructor(t){super(t),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){const t=this._getTimestampsForTable(),n=this._table=this.buildLookupTable(t);this._minPos=Df(n,this.min),this._tableRange=Df(n,this.max)-this._minPos,super.initOffsets(t)}buildLookupTable(t){const{min:n,max:r}=this,i=[],o=[];let s,l,c,d,f;for(s=0,l=t.length;s<l;++s)d=t[s],d>=n&&d<=r&&i.push(d);if(i.length<2)return[{time:n,pos:0},{time:r,pos:1}];for(s=0,l=i.length;s<l;++s)f=i[s+1],c=i[s-1],d=i[s],Math.round((f+c)/2)!==d&&o.push({time:d,pos:s/(l-1)});return o}_generate(){const t=this.min,n=this.max;let r=super.getDataTimestamps();return(!r.includes(t)||!r.length)&&r.splice(0,0,t),(!r.includes(n)||r.length===1)&&r.push(n),r.sort((i,o)=>i-o)}_getTimestampsForTable(){let t=this._cache.all||[];if(t.length)return t;const n=this.getDataTimestamps(),r=this.getLabelTimestamps();return n.length&&r.length?t=this.normalize(n.concat(r)):t=n.length?n:r,t=this._cache.all=t,t}getDecimalForValue(t){return(Df(this._table,t)-this._minPos)/this._tableRange}getValueForPixel(t){const n=this._offsets,r=this.getDecimalForPixel(t)/n.factor-n.end;return Df(this._table,r*this._tableRange+this._minPos,!0)}}le(P1,"id","timeseries"),le(P1,"defaults",Ou.defaults);var yq=Object.freeze({__proto__:null,CategoryScale:_1,LinearScale:S1,LogarithmicScale:k1,RadialLinearScale:Pc,TimeScale:Ou,TimeSeriesScale:P1});const xq=[CK,tG,GG,yq],XE="label";function zC(e,t){typeof e=="function"?e(t):e&&(e.current=t)}function bq(e,t){const n=e.options;n&&t&&Object.assign(n,t)}function GE(e,t){e.labels=t}function qE(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:XE;const r=[];e.datasets=t.map(i=>{const o=e.datasets.find(s=>s[n]===i[n]);return!o||!i.data||r.includes(o)?{...i}:(r.push(o),Object.assign(o,i),o)})}function wq(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:XE;const n={labels:[],datasets:[]};return GE(n,e.labels),qE(n,e.datasets,t),n}function _q(e,t){const{height:n=150,width:r=300,redraw:i=!1,datasetIdKey:o,type:s,data:l,options:c,plugins:d=[],fallbackContent:f,updateMode:g,...m}=e,x=R.exports.useRef(null),w=R.exports.useRef(),_=()=>{!x.current||(w.current=new di(x.current,{type:s,data:wq(l,o),options:c&&{...c},plugins:d}),zC(t,w.current))},v=()=>{zC(t,null),w.current&&(w.current.destroy(),w.current=null)};return R.exports.useEffect(()=>{!i&&w.current&&c&&bq(w.current,c)},[i,c]),R.exports.useEffect(()=>{!i&&w.current&&GE(w.current.config.data,l.labels)},[i,l.labels]),R.exports.useEffect(()=>{!i&&w.current&&l.datasets&&qE(w.current.config.data,l.datasets,o)},[i,l.datasets]),R.exports.useEffect(()=>{!w.current||(i?(v(),setTimeout(_)):w.current.update(g))},[i,c,l.labels,l.datasets,g]),R.exports.useEffect(()=>{!w.current||(v(),setTimeout(_))},[s]),R.exports.useEffect(()=>(_(),()=>v()),[]),p("canvas",{...Object.assign({ref:x,role:"img",height:n,width:r},m),children:f})}const Sq=R.exports.forwardRef(_q);function ZE(e,t){return di.register(t),R.exports.forwardRef((n,r)=>p(Sq,{...Object.assign({},n,{ref:r,type:e})}))}const kq=ZE("line",Kc),Cq=ZE("doughnut",bo),Ec=e=>new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR",minimumFractionDigits:0,maximumFractionDigits:0}).format(e),fi=Nn(dV)({boxShadow:"none",textTransform:"none",fontSize:"1.4rem",padding:"6px 12px",border:"1px solid",backgroundColor:"#9147ff",borderColor:"#9147ff",width:"fit-content",color:"#fff",fontFamily:["-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(","),"&:hover":{backgroundColor:"rgba(145, 71, 255, 0.9)",borderColor:"#9147ff",boxShadow:"none"},"&:active":{boxShadow:"none",backgroundColor:"rgba(145, 71, 255, 0.9)",borderColor:"#9147ff"},"&:focus":{boxShadow:"0 0 0 0.2rem rgba(145,71,255,.6)"}}),Ma=({type:e,mySize:t,loading:n})=>{R.exports.useState(!0);const[r,i]=R.exports.useState(500),[o,s]=R.exports.useState(""),l=[500,1e3,2e3,5e3],c=m=>{const x=["th","st","nd","rd"],w=m%100;return m+(x[(w-20)%10]||x[w]||x[0])},d=()=>Array.from({length:25},(m,x)=>c(x+1));R.exports.useState("");const f=d(),g=(m="")=>{s(`Success: ${m}`)};return O(pU,{children:[p("h2",{children:e}),p("input",{type:"number",placeholder:"Enter amount",value:r,onChange:m=>console.log(m)}),p("div",{className:"amount-suggestion",children:l.map(m=>p("div",{className:`suggestion ${r===m?"active":""}`,onClick:()=>i(m),children:Ec(m)},m))}),p("div",{className:`frequency ${e!=="sip"?"hide":""}`,children:O("select",{onChange:m=>console.log(m.target.value.slice(0,-2)),children:[p("option",{value:"",children:"Select Date Of SIP"}),f.map(m=>O("option",{value:m,children:[m," of every month"]},m))]})}),p("div",{className:"order-status",children:o}),O("div",{className:`actions ${t<768?"mobile":"desktop"}`,children:[p(fi,{onClick:()=>g("Added to cart"),children:"Add To Cart"}),p(fi,{onClick:()=>g("SIP started"),children:"Invest Now"})]})]})},Pq=he.div`
  border-bottom: 1px solid #ebe7e7;
  padding-bottom: 10px;
  overflow-y: hidden;

  .explore-box {
    padding: 2rem 1rem 0;
    background: white;
  }

  .navigation {
    margin-bottom: 3rem;
  }

  .division {
    margin-bottom: 6rem;
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
  h2 {
    color: ${e=>e.theme.textColor};
    font-size: 18px;
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
    position: relative;
    width: 100%;
    overflow: hidden;
    &:hover {
      .scroll-btn {
        display: block;
      }
    }
    .scroll-btn {
      display: none;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      z-index: 10;
      background-color: rgb(103 92 92 / 20%);
      color: white;
      border: none;
      cursor: pointer;
      padding: 1rem;
      height: 100%;
      color: #9147ff;
      font-size: 2rem;
    }
    .previous-btn {
      left: 0px;
    }
    .next-btn {
      right: 0px;
    }

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
        .normal {
          display: none;
        }
        .popular {
          display: initial;
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
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
      justify-items: center;
      align-items: center;
      row-gap: 2rem;
      --main-color: red;

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
`,FC=()=>{const{collections:e}=mn(v=>v.amcCollection),[t,n]=R.exports.useState(!1),[r,i]=R.exports.useState([]),[o,s]=R.exports.useState(void 0),[l,c]=R.exports.useState(!0);R.exports.useEffect(()=>{(async()=>{try{const b=await pl("schemes");i(b)}catch(b){s(b)}finally{c(!1)}})()},[]);const[d,f]=R.exports.useState(!1);R.exports.useEffect(()=>{const v=tP.throttle(()=>{console.log("ss");const b=window.scrollY;f(b>10)},200);return window.addEventListener("scroll",v),()=>{window.removeEventListener("scroll",v)}},[]);const g=R.exports.useRef(null),[m,x]=R.exports.useState(0),w=()=>{g.current&&(g.current.scrollBy({left:200,behavior:"smooth"}),x(g.current.scrollLeft))},_=()=>{g.current&&(g.current.scrollBy({left:-200,behavior:"smooth"}),x(g.current.scrollLeft))};return R.exports.useEffect(()=>{const v=()=>{g.current&&x(g.current.scrollLeft)},b=g.current;return b.addEventListener("scroll",v),()=>{b.removeEventListener("scroll",v)}},[]),p(Pq,{children:p("div",{className:"container",children:O(Xr,{container:!0,columnSpacing:4,columns:{xs:4,sm:8,md:12},children:[O(Xr,{item:!0,xs:12,sm:12,md:8,children:[O("div",{className:"navigation",children:[p("div",{className:"nav-active",children:p(Gn,{to:"/explore",title:"Explore"})}),p("div",{className:"",children:p(Gn,{to:"/dashboard",title:"Dashboard"})})]}),O("div",{className:"popular-fund-section division",children:[O("div",{className:"popular-funds",children:[p("h2",{children:"Popular Funds"}),p(ft,{className:"link",to:"/all-mutual-funds",title:"All Mutual Funds",children:"All Mutual Funds"})]}),O("div",{className:"popular-items",ref:g,children:[p("button",{onClick:_,className:"scroll-btn previous-btn",style:{left:m},children:"\u25C0"}),p(GP,{schemes:r,loading:l}),p("button",{onClick:w,className:"scroll-btn next-btn",style:{right:-m},children:"\u25B6"})]})]}),O("div",{className:"collection-section division",children:[p("h2",{children:"Collections"}),p("div",{className:"collection-items",children:p(ZP,{collections:e,loading:t})})]}),O("div",{className:"quick-access-section division",children:[p("h2",{children:"Quick Access"}),p(qP,{loading:l})]}),p("div",{className:"all-mf-section division",children:p(td,{schemes:r,loading:l})})]}),p(Xr,{item:!0,xs:12,md:4,sx:{display:{xs:"none",sm:"none",md:"block"}},children:p(Qn,{sx:{p:2,position:d?"fixed":"relative",top:d?80:"initial",width:d?"44rem":"auto",zIndex:10,border:"1px solid rgb(145 71 255 / 20%)",borderRadius:1},children:p(Xu,{tabs:[{name:"sip",title:"SIP",component:p(Ma,{type:"sip"})},{name:"one-time",title:"One-Time",component:p(Ma,{type:"one-time"})}]})})})]})})})},Cn=(e,t)=>{var i;let n=Math.abs(e);n=(i=n==null?void 0:n.toFixed(0))==null?void 0:i.replace(/\B(?=(\d{3})+(?!\d))/g,",");let r=n.split(",");if(r.length>1){let o=r[r.length-1];n=r.slice(0,r.length-1).join("").replace(/\B(?=(\d{2})+(?!\d))/g,",")+","+o}return t==="simple"?{paisa:`\u20B9${n}`}:{paisa:e>0?`+ \u20B9${n}`:`- \u20B9${n}`,color:e>0?"#0add8c":"#f00"}},Eq=he.div`
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
`,Mq=()=>{mn(n=>n.schemes);const e=6e3,t=-5e3;return p(Eq,{children:O("div",{className:"container",children:[O("div",{className:"navigation division",children:[p("div",{className:"",children:p(Gn,{to:"/explore",title:"Explore"})}),p("div",{className:"nav-active",children:p(Gn,{to:"/dashboard",title:"Dashboard"})})]}),p("div",{className:"division section-heading",children:p("h2",{children:"Investments"})}),O("div",{className:"investment-container",children:[O("div",{className:"total-amt",children:[O("div",{className:"amt-section current",children:[O("div",{className:"amt-box",children:[p("div",{className:"title",children:"Current"}),O("div",{className:"amt",style:{color:Cn(e,"simple").color},children:[Cn(e,"simple").paisa," "]})]}),O("div",{className:"return",children:[p("div",{className:"title",children:"Total Returns"}),O("div",{className:"amt",style:{color:Cn(e).color},children:[Cn(e).paisa," "]})]})]}),O("div",{className:"amt-section invested",children:[O("div",{className:"amt-box",children:[p("div",{className:"title",children:"Invested"}),O("div",{className:"amt",style:{color:Cn(t,"simple").color},children:[Cn(t,"simple").paisa," "]})]}),O("div",{className:"return",children:[p("div",{className:"title",children:"1D Returns"}),O("div",{className:"amt",style:{color:Cn(t).color},children:[Cn(t).paisa," "]})]})]})]}),O("div",{className:"xirr-return",children:[O("div",{className:"",children:[p("span",{children:"XIRR"}),"17.23%"]}),p(ft,{to:"",title:"aa",children:"Portfolio analysis"})]})]})]})})},Oq=he.div`
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
        .normal {
          display: none;
        }
        .popular {
          display: initial;
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
      --main-color: red;

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
`,Rq=()=>{const{collections:e}=mn(d=>d.amcCollection),[t,n]=R.exports.useState(!1),[r,i]=R.exports.useState([]),[o,s]=R.exports.useState(void 0),[l,c]=R.exports.useState(!0);return R.exports.useEffect(()=>{(async()=>{try{const f=await pl("schemes");i(f)}catch(f){s(f)}finally{c(!1)}})()},[]),p(Oq,{children:O("div",{className:"mobile-container",children:[O("div",{className:"popular-fund-section division",children:[O("div",{className:"popular-funds",children:[p("h2",{children:"Popular Funds"}),p(ft,{className:"link",to:"/all-mutual-funds",title:"All Mutual Funds",children:"All Mutual Funds"})]}),p("div",{className:"popular-items",children:p(GP,{schemes:r,loading:l})})]}),O("div",{className:"collection-section division",children:[p("h2",{children:"Collections"}),p("div",{className:"collection-items",children:p(ZP,{collections:e,loading:t})})]}),O("div",{className:"quick-access-section division",children:[p("h2",{children:"Quick Access"}),p(qP,{schemes:r,loading:l})]}),p("div",{className:"all-mf-section division",children:p(td,{schemes:r,loading:l})})]})})},Tq=he.div`
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
`,Aq=()=>{mn(n=>n.schemes);const e=6e3,t=-5e3;return p(Tq,{children:O("div",{className:"mobile-container",children:[p("div",{className:"division section-heading",children:p("h2",{children:"Investments"})}),O("div",{className:"investment-container",children:[O("div",{className:"total-amt",children:[O("div",{className:"amt-section current",children:[O("div",{className:"amt-box",children:[p("div",{className:"title",children:"Current"}),O("div",{className:"amt",style:{color:Cn(e,"simple").color},children:[Cn(e,"simple").paisa," "]})]}),O("div",{className:"return",children:[p("div",{className:"title",children:"Total Returns"}),O("div",{className:"amt",style:{color:Cn(e).color},children:[Cn(e).paisa," "]})]})]}),O("div",{className:"amt-section invested",children:[O("div",{className:"amt-box",children:[p("div",{className:"title",children:"Invested"}),O("div",{className:"amt",style:{color:Cn(t,"simple").color},children:[Cn(t,"simple").paisa," "]})]}),O("div",{className:"return",children:[p("div",{className:"title",children:"1D Returns"}),O("div",{className:"amt",style:{color:Cn(t).color},children:[Cn(t).paisa," "]})]})]})]}),O("div",{className:"xirr-return",children:[O("div",{className:"",children:[p("span",{children:"XIRR"}),"17.23%"]}),p(ft,{to:"",title:"aa",children:"Portfolio analysis"})]})]})]})})},Nq=he.div`
  //Following mobile
  .mf-mobile {
    display: none;

    .mf-box {
      // padding: 75px 10px;
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
  .mf-desktop {
    display: none;

    .mf-box {
      display: block;
      // padding: 8.5rem 1rem;

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
`,Lq=({mySize:e})=>O(Nq,{children:[p("div",{className:"mf-mobile container",children:p("div",{className:"mf-box",children:p(Xu,{tabs:[{name:"explore",title:"Explore",component:p(Rq,{})},{name:"dashboard",title:"Dashboard",component:p(Aq,{})}]})})}),p("div",{className:"mf-desktop container",children:O("div",{className:"mf-box",children:[p("div",{className:"nav",children:O("ul",{children:[p("li",{children:p(Gn,{to:"/explore",title:"Explore"})}),p("li",{children:p(Gn,{to:"/dashboard",title:"Dashboard"})})]})}),p("div",{className:"page",children:p(Pp,{})})]})})]}),$q=he.div`
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
`;var QE={};function Iq(e){return e&&e.__esModule?e:{default:e}}var Sg=Iq,jx={};function E1(){return kg=E1=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},E1.apply(this,arguments)}var kg=E1;function Dq(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}var zq=Dq,Fq=zq;function Bq(e,t){if(e==null)return{};var n=Fq(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(n[r]=e[r]))}return n}var Wx=Bq;function jq(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var Hx=jq;function BC(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Wq(e,t,n){return t&&BC(e.prototype,t),n&&BC(e,n),e}var Vx=Wq;function Ya(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Ya=function(n){return typeof n}:Ya=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Ya(e)}function hh(e){return typeof Symbol=="function"&&Ya(Symbol.iterator)==="symbol"?M1=hh=function(n){return Ya(n)}:M1=hh=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":Ya(n)},hh(e)}var M1=hh;function Hq(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var Vq=Hq,Uq=M1,Yq=Vq;function Kq(e,t){return t&&(Uq(t)==="object"||typeof t=="function")?t:Yq(e)}var Ux=Kq;function O1(e){return Cg=O1=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},O1(e)}var Cg=O1;function R1(e,t){return JE=R1=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},R1(e,t)}var JE=R1,Xq=JE;function Gq(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Xq(e,t)}var Yx=Gq;function qq(e,t){if(e===t)return!0;if(!e||!t)return!1;var n=Object.keys(e),r=Object.keys(t),i=n.length;if(r.length!==i)return!1;for(var o=0;o<i;o++){var s=n[o];if(e[s]!==t[s]||!Object.prototype.hasOwnProperty.call(t,s))return!1}return!0}function Zq(e,t){if(e===t)return!0;if(!e||!t)return!1;var n=e.length;if(t.length!==n)return!1;for(var r=0;r<n;r++)if(e[r]!==t[r])return!1;return!0}var Qq=Object.freeze(Object.defineProperty({__proto__:null,shallowEqualArrays:Zq,shallowEqualObjects:qq},Symbol.toStringTag,{value:"Module"})),Jq=Gi(Qq),od={},eM={exports:{}};(function(e){function t(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports})(eM);var tM={exports:{}},nM={exports:{}},sd={exports:{}};(function(e){function t(n){return e.exports=t=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},e.exports.__esModule=!0,e.exports.default=e.exports,t(n)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports})(sd);var rM={exports:{}};(function(e){var t=sd.exports.default;function n(r,i){if(t(r)!="object"||!r)return r;var o=r[Symbol.toPrimitive];if(o!==void 0){var s=o.call(r,i||"default");if(t(s)!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(i==="string"?String:Number)(r)}e.exports=n,e.exports.__esModule=!0,e.exports.default=e.exports})(rM);(function(e){var t=sd.exports.default,n=rM.exports;function r(i){var o=n(i,"string");return t(o)=="symbol"?o:o+""}e.exports=r,e.exports.__esModule=!0,e.exports.default=e.exports})(nM);(function(e){var t=nM.exports;function n(i,o){for(var s=0;s<o.length;s++){var l=o[s];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(i,t(l.key),l)}}function r(i,o,s){return o&&n(i.prototype,o),s&&n(i,s),Object.defineProperty(i,"prototype",{writable:!1}),i}e.exports=r,e.exports.__esModule=!0,e.exports.default=e.exports})(tM);var iM={exports:{}},oM={exports:{}};(function(e){function t(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports})(oM);(function(e){var t=sd.exports.default,n=oM.exports;function r(i,o){if(o&&(t(o)=="object"||typeof o=="function"))return o;if(o!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return n(i)}e.exports=r,e.exports.__esModule=!0,e.exports.default=e.exports})(iM);var sM={exports:{}};(function(e){function t(n){return e.exports=t=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},e.exports.__esModule=!0,e.exports.default=e.exports,t(n)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports})(sM);var aM={exports:{}},lM={exports:{}};(function(e){function t(n,r){return e.exports=t=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,o){return i.__proto__=o,i},e.exports.__esModule=!0,e.exports.default=e.exports,t(n,r)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports})(lM);(function(e){var t=lM.exports;function n(r,i){if(typeof i!="function"&&i!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(i&&i.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),Object.defineProperty(r,"prototype",{writable:!1}),i&&t(r,i)}e.exports=n,e.exports.__esModule=!0,e.exports.default=e.exports})(aM);var cM={exports:{}};(function(e){var t=bx.exports;function n(r,i){if(r==null)return{};var o,s,l=t(r,i);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(r);for(s=0;s<c.length;s++)o=c[s],i.includes(o)||{}.propertyIsEnumerable.call(r,o)&&(l[o]=r[o])}return l}e.exports=n,e.exports.__esModule=!0,e.exports.default=e.exports})(cM);Object.defineProperty(od,"__esModule",{value:!0});function ti(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var eZ=ti(eM.exports),tZ=ti(tM.exports),nZ=ti(iM.exports),rZ=ti(sM.exports),iZ=ti(aM.exports),oZ=ti(sd.exports),sZ=ti(cM.exports),aZ=ti(ax.exports),lZ=ti(R.exports);ti(fl.exports);ti(ex);function cZ(e,t,n){return Object.defineProperty(e,t,n)}var uZ=function(){var e=null;return function(){if(e!==null)return e;var t=!1;try{window.addEventListener("test",null,cZ({},"passive",{get:function(){t=!0}}))}catch{}return e=t,t}()}(),dZ={capture:!1,passive:!1};function uM(e){return aZ({},dZ,e)}function dM(e,t,n){var r=[e,t];return r.push(uZ?n:n.capture),r}function jC(e,t,n,r){e.addEventListener.apply(e,dM(t,n,r))}function WC(e,t,n,r){e.removeEventListener.apply(e,dM(t,n,r))}function fZ(e,t){e.children,e.target;var n=sZ(e,["children","target"]);Object.keys(n).forEach(function(r){if(r.substring(0,2)==="on"){var i=n[r],o=oZ(i),s=o==="object",l=o==="function";if(!(!s&&!l)){var c=r.substr(-7).toLowerCase()==="capture",d=r.substring(2).toLowerCase();d=c?d.substring(0,d.length-7):d,s?t(d,i.handler,i.options):t(d,i,uM({capture:c}))}}})}function hZ(e,t){return{handler:e,options:uM(t)}}var fM=function(e){iZ(t,e);function t(){return eZ(this,t),nZ(this,rZ(t).apply(this,arguments))}return tZ(t,[{key:"componentDidMount",value:function(){this.applyListeners(jC)}},{key:"componentDidUpdate",value:function(r){this.applyListeners(WC,r),this.applyListeners(jC)}},{key:"componentWillUnmount",value:function(){this.applyListeners(WC)}},{key:"applyListeners",value:function(r){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.props,o=i.target;if(o){var s=o;typeof o=="string"&&(s=window[o]),fZ(i,r.bind(null,s))}}},{key:"render",value:function(){return this.props.children||null}}]),t}(lZ.PureComponent);fM.propTypes={};od.withOptions=hZ;od.default=fM;var ki=Sg;Object.defineProperty(jx,"__esModule",{value:!0});jx.default=SZ;var HC=ki(kg),pZ=ki(Wx),gZ=ki(Hx),mZ=ki(Vx),vZ=ki(Ux),yZ=ki(Cg),xZ=ki(Yx),pc=ki(R.exports);ki(fl.exports);var bZ=Jq,wZ=ki(od),_Z=Yu;function SZ(e){var t=function(n){(0,xZ.default)(r,n);function r(i){var o;return(0,gZ.default)(this,r),o=(0,vZ.default)(this,(0,yZ.default)(r).call(this,i)),o.timer=null,o.state={},o.handleInterval=function(){var s=o.props,l=s.children,c=s.direction,d=s.onChangeIndex,f=s.slideCount,g=o.state.index,m=g;c==="incremental"?m+=1:m-=1,(f||l)&&(m=(0,_Z.mod)(m,f||pc.default.Children.count(l))),o.props.index===void 0&&o.setState({index:m}),d&&d(m,g)},o.handleChangeIndex=function(s,l,c){o.props.index===void 0&&o.setState({index:s}),o.props.onChangeIndex&&o.props.onChangeIndex(s,l,c)},o.handleSwitching=function(s,l){o.timer?(clearInterval(o.timer),o.timer=null):l==="end"&&o.startInterval(),o.props.onSwitching&&o.props.onSwitching(s,l)},o.handleVisibilityChange=function(s){s.target.hidden?clearInterval(o.timer):o.startInterval()},o.state.index=i.index||0,o}return(0,mZ.default)(r,[{key:"componentDidMount",value:function(){this.startInterval()}},{key:"UNSAFE_componentWillReceiveProps",value:function(o){var s=o.index;typeof s=="number"&&s!==this.props.index&&this.setState({index:s})}},{key:"componentDidUpdate",value:function(o){var s=!(0,bZ.shallowEqualObjects)({index:o.index,interval:o.interval,autoplay:o.autoplay},{index:this.props.index,interval:this.props.interval,autoplay:this.props.autoplay});s&&this.startInterval()}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}},{key:"startInterval",value:function(){var o=this.props,s=o.autoplay,l=o.interval;clearInterval(this.timer),s&&(this.timer=setInterval(this.handleInterval,l))}},{key:"render",value:function(){var o=this.props,s=o.autoplay;o.direction,o.index,o.interval;var l=o.onChangeIndex,c=(0,pZ.default)(o,["autoplay","direction","index","interval","onChangeIndex"]),d=this.state.index;return s?pc.default.createElement(wZ.default,{target:"document",onVisibilityChange:this.handleVisibilityChange},pc.default.createElement(e,(0,HC.default)({index:d,onChangeIndex:this.handleChangeIndex,onSwitching:this.handleSwitching},c))):pc.default.createElement(e,(0,HC.default)({index:d,onChangeIndex:l},c))}}]),r}(pc.default.Component);return t.propTypes={},t.defaultProps={autoplay:!0,direction:"incremental",interval:3e3},t}var Kx={},T1={exports:{}};(function(e,t){function n(c){if(c&&typeof c=="object"){var d=c.which||c.keyCode||c.charCode;d&&(c=d)}if(typeof c=="number")return s[c];var f=String(c),g=r[f.toLowerCase()];if(g)return g;var g=i[f.toLowerCase()];if(g)return g;if(f.length===1)return f.charCodeAt(0)}n.isEventKey=function(d,f){if(d&&typeof d=="object"){var g=d.which||d.keyCode||d.charCode;if(g==null)return!1;if(typeof f=="string"){var m=r[f.toLowerCase()];if(m)return m===g;var m=i[f.toLowerCase()];if(m)return m===g}else if(typeof f=="number")return f===g;return!1}},t=e.exports=n;var r=t.code=t.codes={backspace:8,tab:9,enter:13,shift:16,ctrl:17,alt:18,"pause/break":19,"caps lock":20,esc:27,space:32,"page up":33,"page down":34,end:35,home:36,left:37,up:38,right:39,down:40,insert:45,delete:46,command:91,"left command":91,"right command":93,"numpad *":106,"numpad +":107,"numpad -":109,"numpad .":110,"numpad /":111,"num lock":144,"scroll lock":145,"my computer":182,"my calculator":183,";":186,"=":187,",":188,"-":189,".":190,"/":191,"`":192,"[":219,"\\":220,"]":221,"'":222},i=t.aliases={windows:91,"\u21E7":16,"\u2325":18,"\u2303":17,"\u2318":91,ctl:17,control:17,option:18,pause:19,break:19,caps:20,return:13,escape:27,spc:32,spacebar:32,pgup:33,pgdn:34,ins:45,del:46,cmd:91};/*!
 * Programatically add the following
 */for(o=97;o<123;o++)r[String.fromCharCode(o)]=o-32;for(var o=48;o<58;o++)r[o-48]=o;for(o=1;o<13;o++)r["f"+o]=o+111;for(o=0;o<10;o++)r["numpad "+o]=o+96;var s=t.names=t.title={};for(o in r)s[r[o]]=o;for(var l in i)r[l]=i[l]})(T1,T1.exports);var ni=Sg;Object.defineProperty(Kx,"__esModule",{value:!0});Kx.default=LZ;var kZ=ni(kg),CZ=ni(Wx),PZ=ni(Hx),EZ=ni(Vx),MZ=ni(Ux),OZ=ni(Cg),RZ=ni(Yx),zf=ni(R.exports);ni(fl.exports);var TZ=ni(T1.exports),AZ=ni(od),NZ=Yu;function LZ(e){var t=function(n){(0,RZ.default)(r,n);function r(){var i,o;(0,PZ.default)(this,r);for(var s=arguments.length,l=new Array(s),c=0;c<s;c++)l[c]=arguments[c];return o=(0,MZ.default)(this,(i=(0,OZ.default)(r)).call.apply(i,[this].concat(l))),o.state={},o.handleKeyDown=function(d){var f,g=o.props,m=g.axis,x=m===void 0?"x":m,w=g.children,_=g.onChangeIndex,v=g.slideCount;switch((0,TZ.default)(d)){case"page down":case"down":x==="y"?f="decrease":x==="y-reverse"&&(f="increase");break;case"left":x==="x"?f="decrease":x==="x-reverse"&&(f="increase");break;case"page up":case"up":x==="y"?f="increase":x==="y-reverse"&&(f="decrease");break;case"right":x==="x"?f="increase":x==="x-reverse"&&(f="decrease");break}if(f){var b=o.state.index,S=b;f==="increase"?S+=1:S-=1,(v||w)&&(S=(0,NZ.mod)(S,v||zf.default.Children.count(w))),o.props.index===void 0&&o.setState({index:S}),_&&_(S,b)}},o.handleChangeIndex=function(d,f,g){o.props.index===void 0&&o.setState({index:d}),o.props.onChangeIndex&&o.props.onChangeIndex(d,f,g)},o}return(0,EZ.default)(r,[{key:"UNSAFE_componentWillMount",value:function(){this.setState({index:this.props.index||0})}},{key:"UNSAFE_componentWillReceiveProps",value:function(o){var s=o.index;typeof s=="number"&&s!==this.props.index&&this.setState({index:s})}},{key:"render",value:function(){var o=this.props;o.index,o.onChangeIndex;var s=(0,CZ.default)(o,["index","onChangeIndex"]),l=this.state.index;return zf.default.createElement(AZ.default,{target:"window",onKeyDown:this.handleKeyDown},zf.default.createElement(e,(0,kZ.default)({index:l,onChangeIndex:this.handleChangeIndex},s)))}}]),r}(zf.default.Component);return t.propTypes={},t}var Xx={};function $Z(e){if(e&&e.__esModule)return e;var t={};if(e!=null){for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}}return t.default=e,t}var IZ=$Z,DZ=IZ,Qo=Sg;Object.defineProperty(Xx,"__esModule",{value:!0});Xx.default=YZ;var zZ=Qo(kg),FZ=Qo(Wx),BZ=Qo(Hx),jZ=Qo(Vx),WZ=Qo(Ux),HZ=Qo(Cg),VZ=Qo(Yx),VC=DZ(R.exports);Qo(fl.exports);var UZ=Yu;function YZ(e){var t=function(n){(0,VZ.default)(r,n);function r(i){var o;return(0,BZ.default)(this,r),o=(0,WZ.default)(this,(0,HZ.default)(r).call(this,i)),o.timer=null,o.state={},o.handleChangeIndex=function(s,l,c){var d=o.props,f=d.slideCount,g=d.onChangeIndex,m=s-l,x=o.state.index+m;f&&(x=(0,UZ.mod)(x,f)),o.props.index===void 0&&o.setIndex(x,s,m),g&&g(x,o.state.index,c)},o.handleTransitionEnd=function(){o.timer=setTimeout(function(){o.setWindow()},0),o.props.onTransitionEnd&&o.props.onTransitionEnd()},o.state.index=i.index||0,o}return(0,jZ.default)(r,[{key:"UNSAFE_componentWillMount",value:function(){this.setWindow(this.state.index)}},{key:"UNSAFE_componentWillReceiveProps",value:function(o){var s=o.index;if(typeof s=="number"&&s!==this.props.index){var l=s-this.props.index;this.setIndex(s,this.state.indexContainer+l,l)}}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}},{key:"setIndex",value:function(o,s,l){var c={index:o,indexContainer:s,indexStart:this.state.indexStart,indexStop:this.state.indexStop};l>0&&(!this.props.slideCount||c.indexStop<this.props.slideCount-1)&&(c.indexStop+=1),o>c.indexStop&&(c.indexStop=o);var d=c.indexStart-o;d>0&&(c.indexContainer+=d,c.indexStart-=d),this.setState(c)}},{key:"setWindow",value:function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.state.index,s=this.props.slideCount,l=this.props.overscanSlideBefore,c=this.props.overscanSlideAfter;s&&(l>o&&(l=o),c+o>s-1&&(c=s-o-1)),this.setState({indexContainer:l,indexStart:o-l,indexStop:o+c})}},{key:"render",value:function(){var o=this.props;o.children,o.index,o.onChangeIndex,o.onTransitionEnd,o.overscanSlideAfter,o.overscanSlideBefore,o.slideCount;for(var s=o.slideRenderer,l=(0,FZ.default)(o,["children","index","onChangeIndex","onTransitionEnd","overscanSlideAfter","overscanSlideBefore","slideCount","slideRenderer"]),c=this.state,d=c.indexContainer,f=c.indexStart,g=c.indexStop,m=[],x=f;x<=g;x+=1)m.push(s({index:x,key:x}));return VC.default.createElement(e,(0,zZ.default)({index:d,onChangeIndex:this.handleChangeIndex,onTransitionEnd:this.handleTransitionEnd},l),m)}}]),r}(VC.PureComponent);return t.propTypes={},t.defaultProps={overscanSlideAfter:2,overscanSlideBefore:3},t}(function(e){var t=Sg;Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"autoPlay",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(e,"bindKeyboard",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(e,"virtualize",{enumerable:!0,get:function(){return i.default}});var n=t(jx),r=t(Kx),i=t(Xx)})(QE);const KZ=he.div`
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
`,XZ=({count:e,index:t})=>p(KZ,{children:Array.from({length:e}).map((n,r)=>p("div",{className:`dot ${t===r?"active-dot":""}`},r))}),GZ=QE.autoPlay(J3),qZ=he.div`
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
`,ZZ=()=>{const[e,t]=R.exports.useState(0),n=r=>{t(r)};return R.exports.useEffect(()=>{const r=setInterval(()=>{t(i=>(i+1)%3)},9e3);return()=>clearInterval(r)},[]),O(qZ,{children:[O(GZ,{index:e,onChangeIndex:n,children:[O("div",{className:"slide",children:[p("img",{src:"./images/logo/savingpulse-logos_transparent.png",alt:""}),p("h2",{children:"Simple & free investing"}),p("p",{children:"Make investment easy in mutual funds"})]}),O("div",{className:"slide",children:[p("img",{src:"./images/logo/savingpulse-logos_transparent.png",alt:""}),p("h2",{children:"Direct mutual funds"}),p("p",{children:"Earn up to 2% extra!"})]}),O("div",{className:"slide",children:[p("img",{src:"./images/logo/savingpulse-logos_transparent.png",alt:""}),p("h2",{children:"Start in 2 minutes"}),p("p",{children:"100% peperless investing - SIP & One-time"})]})]}),p(XZ,{count:3,index:e})]})},hM=he.div`
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
`,UC=Tn`var(--white, #fff)`,QZ=Tn`var(--primaryDisableCTAFill, #767676)`,JZ=Tn`var(--secondaryCTABorder, #999)`,eQ=Tn`var(--primaryCTAFill, #9147ff)`,H0=Tn`var(--primaryCTAFillRGB, 145, 71 ,255)`,tQ=Tn`var(--primaryCTABorder, #c5d1df)`,nQ=Tn`var(--primaryErrorCTAFill, #d9534f)`,V0=Tn`var(--primaryErrorCTAFillRGB, 229, 28, 38)`,rQ=Tn`var(--primaryErrorCTABorder, #d43f3a)`,iQ=Tn`var(--secondaryCTAFill, #333)`,U0=Tn`var(--secondaryCTAFillRGB, 51, 51, 51)`,oQ=Tn`var(--primaryCTABorder, #979797)`,sQ=Tn`#ee8950`,aQ=Tn`#ec7939`,cp=he.div`
  .sp-button {
    min-height: 3.5rem;
    cursor: pointer;
    color: ${UC};
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
    outline-color: ${UC};
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
    background-color: ${QZ};
    border: 1px solid ${JZ};
  }
  .sp-button.transparent {
    background-color: transparent;
  }
  .sp-button.warning {
    background-color: ${sQ}
    border-color: ${aQ};
  }

  .sp-button.primary {
    background-color: ${eQ};
    border-color: ${tQ};
  }
  .sp-button.primary:hover {
    background-color: rgba(${H0}, 0.9);
  }
  .sp-button.primary:focus-visible {
    background-color: rgba(${H0}, 0.8);
  }
  .sp-button.primary:active {
    background-color: rgba(${H0}, 0.7);
  }

  .sp-button.danger {
    background-color: ${nQ};
    border-color: ${rQ};
  }
  .sp-button.danger:hover {
    background-color: rgba(${V0}, 0.9);
  }
  .sp-button.danger:focus-visible {
    background-color: rgba(${V0}, 0.8);
  }
  .sp-button.danger:active {
    background-color: rgba(${V0}, 0.7);
  }

  .sp-button.dark {
    background-color: ${iQ};
    border-color: ${oQ};
  }
  .sp-button.dark:hover {
    background-color: rgba(${U0}, 0.9);
  }
  .sp-button.dark:focus-visible {
    background-color: rgba(${U0}, 0.8);
  }
  .sp-button.dark:active {
    background-color: rgba(${U0}, 0.7);
  }
`,lQ=({type:e=""})=>{mn(i=>i.offers);const[t,n]=R.exports.useState(!1);let r=qo();return p(hM,{children:O("div",{className:`login-with ${t?"hide":""}`,children:[O("div",{className:"content",children:[p("h2",{children:"Enter 6 digit OTP we sent"}),p("p",{children:"We will send you a confirmation code."}),p("label",{children:p("input",{type:"number",pattern:"[0-9]",placeholder:"######"})})]}),O("div",{className:"controls",children:[p("div",{className:"next",children:p(cp,{children:O("button",{className:"sp-button primary",onClick:()=>{document.cookie="isLoggedIn="+!0,r("/mutual-funds")},children:["Submit ",p(x7,{fontSize:30})]})})}),p("div",{className:"numbers",children:O("ul",{children:[p("li",{children:"1"}),p("li",{children:"2"}),p("li",{children:"3"}),p("li",{children:"4"}),p("li",{children:"5"}),p("li",{children:"6"}),p("li",{children:"7"}),p("li",{children:"8"}),p("li",{children:"9"}),p("li",{children:"0"}),p("li",{children:p(k3,{})})]})})]})]})})},cQ=()=>{const[e,t]=R.exports.useState(!1),[n,r]=R.exports.useState(!1);return O(hM,{children:[O("div",{className:`login-with ${e?"hide":""}`,children:[O("div",{className:"content",children:[p("h2",{children:"Enter your mobile number"}),p("p",{children:"We will send you a confirmation code."}),O("label",{children:[p("span",{children:"+91"})," ",p("input",{type:"number",pattern:"[0-9]",maxLength:"10",placeholder:"8947973174"})]})]}),O("div",{className:"controls",children:[p("div",{className:"next",children:p(cp,{children:O("button",{className:"sp-button primary",onClick:()=>r(!0),children:["Next ",p(w7,{fontSize:30})]})})}),p("div",{className:"numbers",children:O("ul",{children:[p("li",{children:"1"}),p("li",{children:"2"}),p("li",{children:"3"}),p("li",{children:"4"}),p("li",{children:"5"}),p("li",{children:"6"}),p("li",{children:"7"}),p("li",{children:"8"}),p("li",{children:"9"}),p("li",{children:"0"}),p("li",{children:p(k3,{})})]})})]})]}),n?p(lQ,{}):null]})},uQ=he.div`
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
`,dQ=({type:e=""})=>{const{offers:t}=mn(n=>n.offers);return p(uQ,{children:t.map((n,r)=>{if(n.type===e)return O("div",{className:`offer-box offer-${n.id}`,children:[O("div",{className:"left-side",children:[p("div",{className:"picture",children:p("img",{src:n.image,alt:""})}),p("h2",{className:"name",children:n.name})]}),p("div",{className:"right-side",children:O("ul",{className:"action-buttons",children:[p("li",{children:"View Details"}),p("li",{children:"Open Account"})]})})]},n.id)})})},YC=()=>{const[e,t]=R.exports.useState(!1),[n,r]=R.exports.useState(!1),i=()=>{t(!1),r(!1)};let o=qo();return document.cookie.split(";").filter(l=>l.indexOf("isLoggedIn=true")>=0).length!==0&&o("/mutual-funds"),p(qt,{children:O($q,{children:[O("div",{className:`login-mobile ${e?"hide1":""}`,children:[p("div",{className:"slider",children:p(ZZ,{})}),O("div",{className:"login-container",children:[p(cp,{children:p("div",{className:"login-otp sp-button primary",onClick:()=>t(!0),children:"Sign in with OTP"})}),p(cp,{children:p("div",{className:"login-google sp-button primary",onClick:()=>r(!0),children:"Sign in with google"})}),O("div",{className:"no-account",children:["Don't have an account? ",p(ft,{to:"/signup",children:"Signup"})]})]})]}),e&&O("div",{children:[p("div",{className:"header",onClick:i,children:p(oS,{})}),p(cQ,{})]}),n&&O("div",{children:[p("div",{className:"header",onClick:i,children:p(oS,{})}),p(dQ,{})]})]})})},fQ=he.div`
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
`,hQ=({title:e,content:t})=>{const[n,r]=R.exports.useState(!1);return O("div",{className:"accordion-item",children:[O("div",{className:"accordion-title",onClick:()=>{r(!n)},children:[p("h2",{children:e}),p("span",{children:n?p("svg",{style:{transform:"rotate(180deg)"},focusable:"false",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:p("path",{fill:"%23747878",d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"})}):p("svg",{focusable:"false",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:p("path",{fill:"%23747878",d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"})})})]}),n&&p("div",{className:"accordion-content",children:t})]})},pQ=({items:e})=>p(fQ,{children:p("div",{className:"accordion",children:e.map((t,n)=>p(hQ,{title:t.title,content:t.content},n))})}),gQ=he.div`
  .graph-chart {
    min-height: 20rem;
    margin-bottom: 2rem;
  }

  .return-section {
    padding: 1rem 0;

    .return {
      font-size: 2rem;
      font-weight: 600;
      margin-right: 0.5rem;
      &.positive {
        color: #22bb33;
      }
      &.negative {
        color: #bb2124;
      }
    }
    .frequency {
      font-size: 1.4rem;
    }
  }
  .return-duration {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-right: 0.5rem;

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
      cursor: pointer;
    }
  }
`;di.register(...xq);const mQ=(e,t,n)=>{if(e<=0||t<=0||n<=0)throw new Error("All values must be positive numbers greater than zero.");switch(n){case"1M":n=1;break;case"3M":n=3;break;case"6M":n=6;break;case"1Y":n=12;break;case"3Y":n=36;break;case"5Y":n=60;break;default:n=1;break}console.log(e,t,n);let r;return n<=12?(console.log("ifff"),r=(t-e)/e*100):(console.log("elseee"),r=(Math.pow(1+(t-e)/e,12/n)-1)*100),r.toFixed(2)},vQ=({lastNav:e,loadingChart:t,schemeChart:n})=>{if(t)return p("div",{className:"loading not-found",children:"Loading..."});if(n===null||n.length<1)return p("div",{className:"not-found",children:"not data found..."});const r=["1M","3M","6M","1Y","3Y","5Y"],[i,o]=R.exports.useState("6M"),[s,l]=R.exports.useState(),c=v=>{switch(v){case"1M":return 21;case"3M":return 63;case"6M":return 132;case"1Y":return 246;case"3Y":return 738;case"5Y":return 1208}},d={},f=v=>{o(v);const b=mQ(d[v][0].Last_Nav,parseFloat(e),v);l(b)};r.forEach(v=>{const b=c(v);n.length>=b?d[v]=n.slice(0,b).reverse():v==="All"&&(d[v]=n.reverse())}),s||f("6M");const g=d[i].map(v=>v.Nav_Date),m=d[i].map(v=>v.Last_Nav),x={labels:g,datasets:[{data:m,borderColor:"rgba(145, 71, 255, 1)",backgroundColor:"rgba(145, 71, 255, 0.1)",borderWidth:2,pointRadius:0,pointHoverRadius:0,fill:!0,tension:.1}]},w={responsive:!0,plugins:{legend:{display:!1},tooltip:{enabled:!0,mode:"nearest",intersect:!1,backgroundColor:"rgba(0, 0, 0, 0.5)",titleColor:"#fff",bodyColor:"#fff",borderColor:"rgba(75, 192, 192, 1)",borderWidth:1,padding:10,callbacks:{label:v=>`Nav: ${v.formattedValue}`}}},onClick:(v,b)=>{if(b.length>0){const S=b[0]._chart,C=S.getElementAtEvent(v);S.tooltip.setActiveElements(C),S.tooltip.update()}},onHover:(v,b)=>{var C;const S=(C=b[0])==null?void 0:C.element;S&&(S.options.plugins.tooltip.enabled=!0,S.update())},scales:{x:{display:!1},y:{display:!1}}},_=r.filter(v=>d[v]);return O(gQ,{children:[O("div",{className:"graph-chart",children:[O("div",{className:"return-section",children:[O("div",{children:[O("span",{className:`return ${s>0?"positive":"negative"}`,children:[s," %"]})," ",O("span",{className:"frequency",children:[i," return"]})]}),O("div",{className:"nav",children:[p("span",{children:"-0.30%"})," 1D"]})]}),p(kq,{data:x,options:w,height:120})]}),p("div",{className:"return-duration",children:_.map((v,b)=>p("div",{className:`card ${i===v?"active":""}`,onClick:()=>f(v),children:v},b))})]})},yQ=he.div`
  border-bottom: 1px solid #ebe7e7;
  // padding: 0rem 1rem 0;
  margin-bottom: 10rem;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 1rem 0;

    .image {
      img {
        width: 8rem;
      }
    }

    .icon {
      padding: 1rem;
      border-radius: 0.5rem;
      background: #e2e2e2;
      fill: #525252;
      cursor: pointer;

      svg {
        width: 2rem;
        height: 2rem;
      }
    }
  }
  .chart-section {
    margin-bottom: 2rem;
    .not-found,
    .loading {
      min-height: 20rem;
      font-size: 1.4rem;
      text-align: center;
      padding-top: 10rem;
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
    right: 0;
    max-width: 138rem;
    margin-left: auto;
    margin-right: auto;

    button {
      padding: 1.5rem;
      border-radius: 10px;
      font-size: 1.6rem;
      line-height: 1.5rem;
      width: 100%;
      display: inline-block;
      border: 1px solid rgb(145, 71, 255);
      &.active {
        background: rgb(145, 71, 255);
        color: white;
      }
    }
  }

  .invest-now {
    position: fixed;
    inset: 40% 1rem 0;
    z-index: 90;
    background: white;
    width: auto;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    flex-direction: column;
    border: 1px solid rgba(145, 71, 255, 0.5);
    padding: 1rem;
    box-shadow: rgba(145, 71, 255, 0.5) 0 0.2rem 10rem;

    .close-button {
      position: absolute;
      right: 2rem;
      background: white;
      font-size: 3rem;
    }
  }
  
  .hide {
    display: none;
  }

  // container css for mutual-fund page
  .mobile {
    .top-section {
      img {
        width: 5rem;
      }
    }
  }
`,xQ=he.div`
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
    position: absolute;
    left: 0;
  }
`;function bQ(){const e=qo();return p(xQ,{children:p("div",{className:"header",children:p("button",{onClick:()=>e(-1),children:O("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 24 24",height:"3rem",width:"3rem",xmlns:"http://www.w3.org/2000/svg",children:[p("path",{fill:"none",d:"M0 0h24v24H0V0z"}),p("path",{d:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"})]})})})})}const wQ=he.div`
  .navigation {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1.5rem 0;
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

  .calculator {
    label { font-size: 1.4rem; display: flex;
    justify-content: space-between; }

    .param {
      font-size: 1.4rem;
    }

    .return-output {
      border-top: 1px solid #ececec;
      padding-top: 2rem;

      h3 {
        text-align: center;
        font-size: 1.8rem;
      }

      label {
        padding: 1rem 0;
      }
    }
  }

  @media (min-width: 768px) {
    .name {
      font-size: 1.4rem;
    }
  }
`,pM=({type:e,loading:t})=>{const[n,r]=R.exports.useState("sip"),[i,o]=R.exports.useState(1e3),[s,l]=R.exports.useState(10),[c,d]=R.exports.useState(5),f=(_,v,b)=>{const S=b*12,C=v/100/12;return(_*((Math.pow(1+C,S)-1)/C)*(1+C)).toFixed(2)},g=(_,v,b)=>{const S=v/100;return(_*Math.pow(1+S,b)).toFixed(2)},m=f(i,s,c),x=g(i,s,c),w={labels:["Invested Amount","Estimated Return"],datasets:[{data:[i*c*12,m-i*c*12],backgroundColor:["#9147ff","#FF6384"],width:200}]};return O(wQ,{children:[O("div",{className:"calculator",children:[O("div",{className:"navigation",children:[p("div",{onClick:()=>r("sip"),className:n==="sip"?"nav-active":"",children:"SIP"}),p("div",{onClick:()=>r("lumpsum"),className:n==="lumpsum"?"nav-active":"",children:"Lumpsum"})]}),O("label",{children:[p("span",{children:"Monthly Investment"})," ",p("p",{children:Ec(i)})]}),p("div",{className:"param",children:p(R0,{value:i,onChange:(_,v)=>o(v),"aria-labelledby":"investment-slider",valueLabelDisplay:"auto",step:1e3,min:1e3,max:1e5,sx:{height:8,color:"#9147ff","& .MuiSlider-thumb":{width:24,height:24,backgroundColor:"#9147ff"},"& .MuiSlider-track":{height:8},"& .MuiSlider-rail":{height:8}}})}),O("label",{children:[p("span",{children:"Return Rate (%)"})," ",O("p",{children:[s," %"]})]}),p("div",{className:"param",children:p(R0,{value:s,onChange:(_,v)=>l(v),"aria-labelledby":"return-rate-slider",valueLabelDisplay:"auto",step:1,min:1,max:20,sx:{height:8,color:"#9147ff","& .MuiSlider-thumb":{width:24,height:24,backgroundColor:"#9147ff"},"& .MuiSlider-track":{height:8},"& .MuiSlider-rail":{height:8}}})}),O("label",{children:[p("span",{children:"Time Period (Years)"})," ",O("p",{children:[c,"Y"]})]}),p("div",{className:"param",children:p(R0,{value:c,onChange:(_,v)=>d(v),"aria-labelledby":"time-period-slider",valueLabelDisplay:"auto",step:1,min:1,max:30,sx:{height:8,color:"#9147ff","& .MuiSlider-thumb":{width:24,height:24,backgroundColor:"#9147ff"},"& .MuiSlider-track":{height:8},"& .MuiSlider-rail":{height:8}}})}),p("br",{}),O("div",{className:"return-output",children:[p("h3",{children:"Output"}),O("label",{children:[p("span",{children:"Investment Amount:"})," ",p("span",{children:Ec(n==="sip"?i*c*12:i)})]}),O("label",{children:[p("span",{children:"Est. Return:"})," ",O("span",{children:[" ",Ec(n==="sip"?m-i*c*12:x-i)]})]}),O("label",{children:[p("span",{children:"Total Value: "})," ",O("span",{children:[" ",Ec(n==="sip"?m:x)]})]})]})]}),p(Cq,{data:w,sx:{width:8,height:8}})]})},_Q=he.nav`
  ol {
    list-style: none;
    padding: 1rem;
    margin: 0;
    font-size: 1.4rem;
  }

  .breadcrumb-item {
    display: inline;
  }

  .breadcrumb-separator {
    margin: 0 1rem;
  }

  a {
    color: rgb(145, 71, 255);
  }
`,SQ=({items:e,separator:t=">",className:n=""})=>p(_Q,{children:p("nav",{"aria-label":"breadcrumb",className:`breadcrumb ${n}`,children:p("ol",{children:e.map((r,i)=>O("li",{className:"breadcrumb-item",children:[r.path?p(ft,{to:r.path,children:r.label}):p("span",{children:r.label}),i<e.length-1&&p("span",{className:"breadcrumb-separator",children:t})]},i))})})}),kQ=({mySize:e})=>{const{schemeCode:t}=u8(),[n,r]=R.exports.useState(null),[i,o]=R.exports.useState(!0),[s,l]=R.exports.useState(null),c=async()=>{try{const re=await $D(t);r(re)}catch(re){l(re)}finally{o(!1)}},[d,f]=R.exports.useState(null),[g,m]=R.exports.useState(!0),x=async()=>{try{const re=await ID(t);f(re)}catch(re){l(re)}finally{m(!1)}},[w,_]=R.exports.useState([]),[v,b]=R.exports.useState(void 0),[S,C]=R.exports.useState(!0),E=async()=>{try{const re=await pl("schemes");_(re.slice(0,5))}catch(re){b(re)}finally{C(!1)}};R.exports.useEffect(()=>{c(),x(),E()},[]);const T=[{title:"Return calculator",content:p(pM,{config:{returnRate:12}})},{title:"Holdings (155)",content:"This is the overview content."},{title:"Returns & Rakings",content:"This is the overview content."}],[N,L]=R.exports.useState(""),z=()=>{L("one-time")},B=()=>{L("sip")},H=()=>{L("")},[Q,te]=R.exports.useState(!1);R.exports.useEffect(()=>{const re=tP.throttle(()=>{console.log("ss");const de=window.scrollY;te(de>10)},200);return window.addEventListener("scroll",re),()=>{window.removeEventListener("scroll",re)}},[]);const ae=()=>{if(e<=767)return p(bQ,{})},ye=()=>O("div",{className:"purchase-action",children:[p(fi,{className:"sp-button primary",onClick:z,children:"One-time"}),p(fi,{className:"sp-button primary active",onClick:B,children:"Start SIP"})]}),oe=()=>{if(e>767)return p(SQ,{items:ge,separator:">"})},ge=[{label:"Home",path:"/"},{label:n==null?void 0:n.amc_name,path:n==null?void 0:n.AMC_Code},{label:n==null?void 0:n.Scheme_Name}];return O(yQ,{children:[ae(),O("div",{className:`${e>767?"container":"container mobile"}`,children:[oe(),i?oU():p(Xr,{container:!0,columnSpacing:4,whiteSpace:2,columns:{xs:4,sm:8,md:12},children:O(qt,{children:[O(Xr,{item:!0,xs:12,sm:12,md:8,children:[O("div",{className:"top-section",children:[p("div",{className:"image",children:p("img",{src:`./images/amc-logo/${n==null?void 0:n.amc_logo}`,alt:""})}),p("div",{className:"icon",children:p(R7,{})})]}),O("div",{className:"detail",children:[p("div",{className:"name",children:n==null?void 0:n.Scheme_Name}),O("div",{className:"info",children:[n==null?void 0:n.Scheme_Type," / ",n==null?void 0:n.Scheme_Plan]})]}),p("div",{className:"chart-section",children:p(vQ,{lastNav:n==null?void 0:n.Last_Nav,loadingChart:g,schemeChart:d})}),O("div",{className:"scheme-detail",children:[O("div",{className:"card",children:[O("div",{className:"heading",children:["NAV: ",n==null?void 0:n.Nav_Date]}),p("div",{className:"text",children:n==null?void 0:n.Last_Nav})]}),O("div",{className:"card",children:[p("div",{className:"heading",children:"Rating"}),p("div",{className:"text",children:"4 *"})]}),O("div",{className:"card",children:[p("div",{className:"heading",children:"Min. SIP amount"}),p("div",{className:"text",children:n==null?void 0:n.Minimum_Purchase_Amount})]}),O("div",{className:"card",children:[p("div",{className:"heading",children:"Fund Size"}),p("div",{className:"text",children:"522 Cr"})]})]}),p("div",{className:"basic-details",children:p(pQ,{items:T})}),p("div",{className:"similar-funds",children:p(td,{schemes:w,loading:S,customHeader:"Similar funds"})})]}),p(Xr,{item:!0,xs:12,md:4,sx:{display:{xs:"none",sm:"none",md:"block"}},children:p(Qn,{sx:{p:2,position:Q?"fixed":"relative",top:Q?100:"initial",width:Q?"44rem":"auto",zIndex:10,border:"1px solid rgb(145 71 255 / 20%)",borderRadius:1},children:p(Xu,{tabs:[{name:"sip",title:"SIP",component:p(Ma,{type:"sip"})},{name:"one-time",title:"One-Time",component:p(Ma,{type:"one-time"})}]})})})]})}),e<768?ye():"",N==="one-time"&&O("div",{className:"invest-now",children:[p("button",{className:"close-button",onClick:H,children:p(sS,{})}),p(Ma,{type:"one-time",mySize:e})]}),N==="sip"&&O("div",{className:"invest-now",children:[p("button",{className:"close-button",onClick:H,children:p(sS,{})}),p(Ma,{type:"sip",mySize:e})]})]})]})},CQ=he.div`
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
`,PQ=()=>{const[e,t]=R.exports.useState(!0),[n,r]=R.exports.useState([]);return R.exports.useEffect(()=>{(async()=>{try{const o=await pl("schemes");r(o)}catch(o){setError(o)}finally{t(!1)}})()},[]),p(CQ,{children:p("div",{className:"container division",children:p(td,{schemes:n,loading:e})})})},EQ=he.div`
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
`,va=({type:e=""})=>{var d;const[t,n]=R.exports.useState(!0),[r,i]=R.exports.useState([]),l=(d=pr().pathname.split("/").filter(f=>f)[1])!=null?d:"schemes";R.exports.useEffect(()=>{(async()=>{try{const g=await pl(l);i(g)}catch(g){setError(g)}finally{n(!1)}})()},[]);const c=()=>{switch(e){case"high-return":return{title:"High Return",desc:"Funds with good return in recent time",img:"high-returns.svg"};case"sip-with-100":return{title:"SIP with 100",desc:"Funds with minimum investment of just 100 every month",img:"sip-with-100.svg"};case"tax-saving":return{title:"Tax Saving",desc:"Funds that help you save on taxes",img:"tax-saving.svg"};case"large-cap":return{title:"Large Cap",desc:"Funds investing in large-cap companies",img:"large-cap.svg"};case"mid-cap":return{title:"Mid Cap",desc:"Funds investing in mid-cap companies",img:"mid-cap.svg"};case"small-cap":return{title:"Small Cap",desc:"Funds investing in small-cap companies",img:"small-cap.svg"};default:return{title:"Unknown",desc:"No description available",img:"default.svg"}}};return p(EQ,{children:O("div",{className:"container division",children:[O("div",{className:"template-header",children:[O("div",{children:[p("h2",{children:c().title}),p("p",{children:c().desc})]}),p("img",{src:`./public/images/collection/${c().img}`,alt:""})]}),p(td,{schemes:r,loading:t})]})})},MQ=he.div`
  .all-mf-section {
  }

  .calculator {
    h2 {
      font-size: 1.8rem;
    }
  }
`,OQ=({type:e})=>{var c;const[t,n]=R.exports.useState(!0),[r,i]=R.exports.useState([]),l=(c=pr().pathname.split("/").filter(d=>d)[1])!=null?c:"schemes";return R.exports.useEffect(()=>{(async()=>{try{const f=await pl(l);i(f)}catch(f){setError(f)}finally{n(!1)}})()},[]),p(MQ,{children:p("div",{className:"container",children:O("div",{className:"calculator division",children:[p("h2",{children:"Return Calculator"}),p("div",{className:"division",children:p(pM,{type:e,loading:!0})})]})})})};he.div`
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
`;const RQ=he.div`
  display: flex;
  flex-direction: row;
  background-color: #f7f7f7;
  // border: 1px solid #ddd;
  border-radius: 10px;
  font-size: 1.4rem;
  // box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  input[type="text"],
  input[type="email"],
  input[type="date"],
  input[type="number"],
  input[type="password"],
  select {
    padding: 0px 10px;
    border: 0.2rem solid rgb(236, 236, 236);
    margin-top: 0.5rem;
    height: 3.5rem;
    display: flex;
    font-size: 1.4rem;
    letter-spacing: 0.2rem;
    width: 100%;
  }
  input[type="date"] {
    font-size: 1.4rem;
  }

  @media (max-width: 767px) {
    .grid-item {
      grid-column: 1 / -1; /* Take up full width */
    }
  }
`,TQ=he.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  border-bottom: 1px solid #ddd;

  img {
    width: 150px;
    height: 150px;
    border-radius: 100%;
    background: rgb(145, 71, 255);
    filter: drop-shadow(rgba(145, 71, 255, 0.5) 0px 0px 3rem);
  }
`,AQ=he.span`
  font-size: 18px;
  font-weight: bold;
  margin-top: 1rem;
  padding: 1rem;
`;he.span`
  font-size: 16px;
  color: #666;
`;const NQ=he.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;

  .tab {
    width: 100%;
    justify-content: left;
    margin-top: 1rem;

    svg {
      margin-right: 1rem;
      height: 1.5rem;
      width: 1.5rem;
    }
    &.active {
      background-color: rgb(145, 71, 255);
      color: #fff;
    }
  }

  @media (max-width: 599px) {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    align-items: center;
    margin-bottom: 1rem;
    background: inherit;
    .tab {
      padding: 0.5rem;
      font-size: 1.2rem;
      width: fit-content;
      line-height: normal;
      svg {
        margin-right: 0.2rem;
      }
    }
  }
`;he.div`
  padding: 1rem;
  border-bottom: 1px solid #ddd;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  user-select: none;
`;const LQ=he.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 100%;

  @media (max-width: 767px) {
    padding: 0;
  }
`,$Q=he.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;

  label {
    grid-column: 1;
  }

  input,
  select {
    grid-column: 2;
  }
`,IQ=he.div`
  display: flex;
  flex-direction: column;
  // padding: 20px;
`,DQ=he.div`
  display: flex;
  flex-direction: column;
  // padding: 20px;
`,zQ=he.div`
  display: flex;
  flex-direction: column;
  // padding: 20px;
`,FQ=()=>{const[e,t]=R.exports.useState("basicDetails"),[n,r]=R.exports.useState("Sitaram Kumawat");R.exports.useState("John Doe");const i=o=>{t(o)};return p(RQ,{className:"container",children:O(Xr,{container:!0,columnSpacing:4,columns:{xs:12,sm:12,md:12},children:[O(Xr,{item:!0,className:"grid-item",xs:12,sm:4,md:4,children:[O(TQ,{children:[p("img",{src:"./public/images/profile.jpg"}),p(AQ,{children:n})]}),O(NQ,{children:[O(fi,{className:`tab ${e==="basicDetails"?"active":""}`,onClick:()=>i("basicDetails"),children:[p(m7,{}),"Basic Details"]}),O(fi,{className:`tab ${e==="changePassword"?"active":""}`,onClick:()=>i("changePassword"),children:[p(L7,{}),"Change Password"]}),O(fi,{className:`tab ${e==="changeMpin"?"active":""}`,onClick:()=>i("changeMpin"),children:[p(g7,{}),"Change MPIN"]}),O(fi,{className:`tab ${e==="nomineeDetails"?"active":""}`,onClick:()=>i("nomineeDetails"),children:[p(P7,{}),"Nominee Details"]})]})]}),p(Xr,{item:!0,xs:12,sm:8,md:8,children:p(Qn,{sx:{p:2,zIndex:10,border:"1px solid rgb(145 71 255 / 20%)",borderRadius:1},children:O(LQ,{children:[e==="basicDetails"&&O($Q,{children:[O(Xr,{item:!0,xs:12,sm:12,md:12,children:[p("label",{children:"Name:"}),p("input",{type:"text"}),p("br",{}),p("label",{children:"Email:"}),p("input",{type:"email"}),p("br",{}),p("label",{children:"Phone:"}),p("input",{type:"text"}),p("br",{})]}),O(Xr,{item:!0,xs:12,sm:12,md:12,children:[p("label",{children:"Date of Birth:"}),p("input",{type:"date"}),p("br",{}),p("label",{children:"Gender:"}),O("select",{children:[p("option",{value:"",children:"Select"}),p("option",{value:"male",children:"Male"}),p("option",{value:"female",children:"Female"})]}),p("br",{}),p("label",{children:"Occupation:"}),p("input",{type:"text"}),p("br",{}),p("label",{children:"Annual Income:"}),p("input",{type:"number"}),p("br",{}),p("label",{children:"Address 1:"}),p("input",{type:"text"}),p("br",{}),p("label",{children:"Address 2:"}),p("input",{type:"text"}),p("br",{}),p("label",{children:"Address 3:"}),p("input",{type:"text"})]})]}),e==="changePassword"&&O(IQ,{children:[p("label",{children:"Current Password:"}),p("input",{type:"password"}),p("br",{}),p("label",{children:"New Password:"}),p("input",{type:"password"}),p("br",{}),p("label",{children:"Confirm New Password:"}),p("input",{type:"password"}),p("br",{}),p(fi,{className:"change-password",onClick:()=>console.log("password has changed"),children:"Change Password"})]}),e==="changeMpin"&&O(DQ,{children:[p("label",{children:"Current MPIN:"}),p("input",{type:"text"}),p("br",{}),p("label",{children:"New MPIN:"}),p("input",{type:"text"}),p("br",{}),p("label",{children:"Confirm New MPIN:"}),p("input",{type:"text"}),p("br",{}),p(fi,{fullWidth:!1,className:"change-mpin",onClick:()=>console.log("mpin has changed"),children:"Change MPIN"})]}),e==="nomineeDetails"&&O(zQ,{children:[p("label",{children:"Nominee Name:"}),p("input",{type:"text"}),p("br",{}),p("label",{children:"Nominee Relationship:"}),p("input",{type:"text"}),p("br",{}),p("label",{children:"Nominee Contact:"}),p("input",{type:"text"})]})]})})})]})})},BQ=()=>{const{darkStatus:e,sideBarStatus:t}=mn(g=>g.site),[n,r]=R.exports.useState(window.innerWidth),[i,o]=R.exports.useState(!0),s=qo(),l=pr(),c=document.cookie.split(";").filter(g=>g.indexOf("isLoggedIn=true")>=0);let d=n<768?p(Lq,{}):p(FC,{});c.length===0&&(d=p(YC,{})),R.exports.useEffect(()=>{n<768&&l.pathname!=="/user-profile"&&s("/"),n>768&&l.pathname==="/"&&s("/explore"),c.length===0&&s("/login");const g=()=>r(window.innerWidth);return window.addEventListener("resize",g),()=>window.removeEventListener("resize",g)},[n]);const f=()=>l.pathname==="/login"||c.length===0?(o(!1),null):p(XD,{mySize:n});return R.exports.useEffect(()=>{const g=()=>{l.pathname};return window.addEventListener("popstate",g),()=>{window.removeEventListener("popstate",g)}},[l.pathname]),O(WI,{theme:e?KI:YI,children:[p(UI,{}),O("div",{className:"app",children:[p(f,{}),p("div",{className:`${i?"main":""} ${t&&n>1199?"sidebar-open":""}`,children:O(E8,{children:[p(qe,{path:"*",element:p(C8,{to:"/",replace:!0})}),p(qe,{path:"/all-mutual-funds",element:p(PQ,{})}),p(qe,{path:"/",element:d}),p(qe,{path:"/login",element:p(YC,{})}),p(qe,{path:"/return-calculator",element:p(OQ,{type:"sip",loading:!0})}),p(qe,{path:"/mutual-fund/:schemeCode",element:p(kQ,{loading:!0,mySize:n})}),O(qe,{path:"/schemes/",children:[p(qe,{path:"high-return",element:p(va,{type:"high-return"})}),p(qe,{path:"sip-with-100",element:p(va,{type:"sip-with-100"})}),p(qe,{path:"tax-saving",element:p(va,{type:"tax-saving"})}),p(qe,{path:"large-cap",element:p(va,{type:"large-cap"})}),p(qe,{path:"mid-cap",element:p(va,{type:"mid-cap"})}),p(qe,{path:"small-cap",element:p(va,{type:"small-cap"})}),p(qe,{path:"SIP",element:p(OS,{})}),p(qe,{path:"Watchlist",element:p(OS,{})})]}),p(qe,{path:"explore",element:p(FC,{})}),p(qe,{path:"dashboard",element:p(Mq,{})}),O(qe,{path:"/following/",element:p(qz,{}),children:[p(qe,{index:!0,element:p(iF,{})}),p(qe,{path:"live",element:p(oF,{})}),p(qe,{path:"videos",element:p(sF,{})}),p(qe,{path:"categories",element:p(aF,{})})]}),O(qe,{path:"/ipo/",element:p(ca,{}),children:[p(qe,{index:!0,path:"all",element:p(ca,{})}),p(qe,{path:"mainline",element:p(ca,{})}),p(qe,{path:"sme",element:p(ca,{})}),p(qe,{path:"listed",element:p(ca,{})}),p(qe,{path:"closed",element:p(ca,{})})]}),O(qe,{path:"/offers/",element:p(uF,{}),children:[p(qe,{index:!0,path:"brokers",element:p(TS,{type:"stock"})}),p(qe,{path:"advisors",element:p(TS,{type:"advisor"})})]}),p(qe,{path:"/user-profile",element:p(FQ,{})})]})})]})]})},jQ=()=>{const{pathname:e}=pr();return R.exports.useEffect(()=>{window.scrollTo(0,0)},[e]),null},WQ=Ws({name:"user",initialState:{users:[{username:"CosmoKramer",title:"Rapid Chess Championship!",game:"Chess",tag:"Chatting",pp:"https://i.pravatar.cc/",liveScreen:"./images/games/game-chees.jpg",viewers:"17.1K"},{username:"Soprano",title:"Im back",game:"Dota 2",tag:"Turkish",pp:"https://i.pravatar.cc/",liveScreen:"./images/games/game-dota.jpg",viewers:"395"},{username:"Seinfeld",title:"Reduce Ping & Avoid Lags",game:"PUBG",tag:"English",pp:"https://i.pravatar.cc/",liveScreen:"./images/games/game-pubg.jpg",viewers:"5.4K"},{username:"Darlene",title:"FPS soon? OMEGALUL",game:"Counter Strike",tag:"English",pp:"https://i.pravatar.cc/",liveScreen:"./images/games/game-cs.jpg",viewers:"117"},{username:"Cersei",title:"Live Bitcoin Trading Infos 24/7",game:"Crypto",tag:"Chatting",pp:"https://i.pravatar.cc/",liveScreen:"./images/games/game-crypto.jpg",viewers:"88"},{username:"Jacob",title:"LVL 70 - Tracksuit Grind",game:"Escape From Tarkov",tag:"Turkish",pp:"https://i.pravatar.cc/",liveScreen:"./images/games/game-eft.jpg",viewers:"733"},{username:"Skyler",title:"Tourney Run Kollo",game:"Mortal Kombat",tag:"English",pp:"https://i.pravatar.cc/",liveScreen:"./images/games/game-mortal.jpg",viewers:"231"},{username:"Schillinger",title:"Day 12 of the Game of Year ?",game:"Elder Ring",tag:"English",pp:"https://i.pravatar.cc/",liveScreen:"./images/games/game-elder.jpg",viewers:"3.7K"}]}});var HQ=WQ.reducer;const VQ=Ws({name:"category",initialState:{games:[{name:"Dota 2",image:"./images/categories/game1.jpg",viewer:"63.3k"},{name:"Chess",image:"./images/categories/game2.jpg",viewer:"23.7k"},{name:"PUBG: BATTLEGROUNDS",image:"./images/categories/game3.jpg",viewer:"34.3k"},{name:"Just Chatting",image:"./images/categories/game4.jpg",viewer:"580k"},{name:"Grand Theft Auto V",image:"./images/categories/game5.jpg",viewer:"144k"},{name:"Elder Ring",image:"./images/categories/game6.jpg",viewer:"88k"},{name:"Apex Legends",image:"./images/categories/game7.jpg",viewer:"112.6k"},{name:"Call of Duty: Wardzone",image:"./images/categories/game8.jpg",viewer:"39k"},{name:"Escape from Tarkov",image:"./images/categories/game9.jpg",viewer:"20k"},{name:"FIFA 22",image:"./images/categories/game10.jpg",viewer:"42.2k"},{name:"Fortnite",image:"./images/categories/game11.jpg",viewer:"102k"},{name:"Age of Empires",image:"./images/categories/game12.jpg",viewer:"5.4k"}]}});var UQ=VQ.reducer;let A1;A1===void 0&&(A1=[{Scheme_Name:"Aditya Birla Sun Life PSU Equity Fund",amc_logo:"absl.png",Scheme_Type:"Equity",Scheme_Type:"Big",Scheme_Code:"",risk:"High",rating:5,return:[47.01,88,23]},{Scheme_Name:"Motilal Oswal Midcap Fund",amc_logo:"motilal-oswal.png",Scheme_Type:"Equity",Scheme_Type:"Flexi Cap",Scheme_Code:"",risk:"Very High",rating:4,return:[47.01,88]},{Scheme_Name:"Nippon India Small Cap Fund",amc_logo:"nippon.png",Scheme_Type:"Equity",Scheme_Type:"Small",Scheme_Code:"",risk:"Low",rating:5,return:[47.01,88,23]},{Scheme_Name:"Motilal Oswal Midcap Fund",amc_logo:"motilal-oswal.png",Scheme_Type:"Equity",Scheme_Type:"Flexi Cap",Scheme_Code:"",risk:"Very High",rating:4,return:[47.01,88]},{Scheme_Name:"Nippon India Small Cap Fund",amc_logo:"nippon.png",Scheme_Type:"Equity",Scheme_Type:"Small",Scheme_Code:"",risk:"Low",rating:5,return:[47.01,88,23]},{Scheme_Name:"Motilal Oswal Midcap Fund",amc_logo:"motilal-oswal.png",Scheme_Type:"Equity",Scheme_Type:"Flexi Cap",Scheme_Code:"",risk:"Very High",rating:4,return:[47.01,88]},{Scheme_Name:"Nippon India Small Cap Fund",amc_logo:"nippon.png",Scheme_Type:"Equity",Scheme_Type:"Small",Scheme_Code:"",risk:"Low",rating:5,return:[47.01,88,23]}]);const YQ=Ws({name:"schemes",initialState:{schemes:A1}});var KQ=YQ.reducer;const XQ=Ws({name:"offers",initialState:{offers:[{id:1,name:"Angel Broking",image:"./images/offers/angel-one.png",category:"broker",type:"advisor",href:"/angel-broking"},{id:2,name:"Zerodha",image:"./images/offers/zerodha.png",category:"broker",type:"stock",href:"#"},{id:3,name:"Upstox",image:"./images/offers/upstox.png",category:"broker",type:"advisor",href:"#"},{id:5,name:"Dhan",image:"./images/offers/dhan.png",category:"broker",type:"advisor",href:"#"},{id:6,name:"5 Paisa",image:"./images/offers/5-paisa.png",category:"broker",type:"stock",href:"#"},{id:7,name:"ICICI direct",image:"./images/offers/icici-direct.png",category:"broker",type:"advisor",href:"#"},{id:8,name:"Kotak Securities",image:"./images/offers/kotak-security.png",category:"broker",type:"stock",href:"#"},{id:1,name:"Angel Broking",image:"./images/offers/angel-one.png",category:"broker",type:"advisor",href:"/angel-broking"},{id:2,name:"Zerodha",image:"./images/offers/zerodha.png",category:"broker",type:"stock",href:"#"},{id:3,name:"Upstox",image:"./images/offers/upstox.png",category:"broker",type:"advisor",href:"#"},{id:5,name:"Dhan",image:"./images/offers/dhan.png",category:"broker",type:"advisor",href:"#"},{id:6,name:"5 Paisa",image:"./images/offers/5-paisa.png",category:"broker",type:"stock",href:"#"},{id:7,name:"ICICI direct",image:"./images/offers/icici-direct.png",category:"broker",type:"advisor",href:"#"},{id:8,name:"Kotak Securities",image:"./images/offers/kotak-security.png",category:"broker",type:"stock",href:"#"}]}});var GQ=XQ.reducer;const qQ=Ws({name:"ipos",initialState:{ipos:[{name:"RNFI Services Limited",image:"./images/ipo/RNFI_Services_logo.jpg",exchange:"NSE",type:"sme",href:"/angel-broking",date:{start:"Jul 22, 2024",end:"Jul 22, 2024",list:"Jul 22, 2024"},price:{offer:"98-105",expectedPremium:"84-90 (80%)"},lotSize:"1200",subscriptions:"221.56"},{name:"SAR Televenture Limited FPO",image:"./images/ipo/SAR_Televentures_logo.png",exchange:"NSE",type:"mainline",href:"/angel-broking",date:{start:"Jul 22, 2024",end:"Jul 22, 2024",list:"Jul 22, 2024"},price:{offer:"200-210",expectedPremium:"7-8 (3.33%)"},lotSize:"500",subscriptions:"7.49"},{name:"V.L.Infraprojects Limited",image:"./images/ipo/Vraj_Iron_And_Steel_logo.png",exchange:"NSE",type:"sme",href:"/angel-broking",date:{start:"Jul 23, 2024",end:"Jul 25, 2024",list:"Jul 22, 2024"},price:{offer:"39-42",expectedPremium:"60-62 (142.86%)"},lotSize:"3000",subscriptions:"633.71"},{name:"VVIP Infratech Limited",image:"./images/ipo/uttsav_cz_gold_logo.jpeg",exchange:"NSE",type:"mainline",href:"/angel-broking",date:{start:"Jul 23, 2024",end:"Jul 25, 2024",list:"Jul 27, 2024"},price:{offer:"91-93",expectedPremium:"115-122 (123.66%)"},lotSize:"1200",subscriptions:"236.92"},{name:"Chetana Education Limited",image:"./images/ipo/Cheviot-company-logo.jpg",exchange:"NSE",type:"mainline",href:"/angel-broking",date:{start:"Jul 23, 2024",end:"Jul 25, 2024",list:"Jul 27, 2024"},price:{offer:"80-85",expectedPremium:"40-43 (47.06%)"},lotSize:"1600",subscriptions:"196.57"},{name:"Manglam Infra and Engineering Limited",image:"./images/ipo/Manglam_Infra_Logo.png",exchange:"NSE",type:"sme",href:"/angel-broking",date:{start:"Jul 23, 2024",end:"Jul 25, 2024",list:"Jul 27, 2024"},price:{offer:"53-56",expectedPremium:"47-50 (83.93%)"},lotSize:"2000",subscriptions:"394.59"},{name:"Aprameya Engineering Limited",image:"./images/ipo/Aprameya_Engineering_logo.jpg",exchange:"NSE",type:"mainline",href:"/angel-broking",date:{start:"Jul 25, 2024",end:"Jul 29, 2024",list:"Jul 27, 2024"},price:{offer:"56-58",expectedPremium:"25-30 (43.1%)"},lotSize:"2000",subscriptions:"5.92"},{name:"Trom Industries Limited",image:"./images/ipo/Trom-Industries-logo.jpg",exchange:"NSE",type:"sme",href:"/angel-broking",date:{start:"Jul 25, 2024",end:"Jul 29, 2024",list:"Jul 27, 2024"},price:{offer:"110-115",expectedPremium:"135-145 (117.39%)"},lotSize:"1200",subscriptions:"34.84"},{name:"Clinitech Laboratory Limited",image:"./images/ipo/Clinitech_lab_logo.jpg",exchange:"BSE",type:"sme",href:"/angel-broking",date:{start:"Jul 25, 2024",end:"Jul 29, 2024",list:"Jul 27, 2024"},price:{offer:"96",expectedPremium:"135-145 (117.39%)"},lotSize:"1200",subscriptions:"6.09 times"}]}});var ZQ=qQ.reducer;const QQ=Ws({name:"collections",initialState:{collections:[{name:"High Return",url:"high-return",image:"high-returns.svg"},{name:"SIP with 100",url:"sip-with-100",image:"sip-with-100.svg"},{name:"Tax Saving",url:"tax-saving",image:"tax-saving.svg"},{name:"Large Cap",url:"large-cap",image:"large-cap.svg"},{name:"Mid Cap",url:"mid-cap",image:"mid-cap.svg"},{name:"Small Cap",url:"small-cap",image:"small-cap.svg"}]}});var JQ=QQ.reducer,eJ=gD({reducer:{site:PD,user:HQ,category:UQ,schemes:KQ,offers:GQ,ipos:ZQ,amcCollection:JQ}});z4.render(p(jt.StrictMode,{children:p(s7,{store:eJ,children:O(I8,{children:[p(jQ,{}),p(BQ,{})]})})}),document.getElementById("root"));
