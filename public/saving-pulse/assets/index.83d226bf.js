var rk=Object.defineProperty;var ik=(e,t,n)=>t in e?rk(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var W=(e,t,n)=>(ik(e,typeof t!="symbol"?t+"":t,n),n);function Lx(e,t){return t.forEach(function(n){n&&typeof n!="string"&&!Array.isArray(n)&&Object.keys(n).forEach(function(r){if(r!=="default"&&!(r in e)){var i=Object.getOwnPropertyDescriptor(n,r);Object.defineProperty(e,r,i.get?i:{enumerable:!0,get:function(){return n[r]}})}})}),Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}const ok=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}};ok();function sk(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function pr(e){if(e.__esModule)return e;var t=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(e).forEach(function(n){var r=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:function(){return e[n]}})}),t}var _={exports:{}},ve={};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var c0=Object.getOwnPropertySymbols,ak=Object.prototype.hasOwnProperty,lk=Object.prototype.propertyIsEnumerable;function ck(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function uk(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de",Object.getOwnPropertyNames(e)[0]==="5")return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map(function(o){return t[o]});if(r.join("")!=="0123456789")return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(o){i[o]=o}),Object.keys(Object.assign({},i)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var Ax=uk()?Object.assign:function(e,t){for(var n,r=ck(e),i,o=1;o<arguments.length;o++){n=Object(arguments[o]);for(var s in n)ak.call(n,s)&&(r[s]=n[s]);if(c0){i=c0(n);for(var a=0;a<i.length;a++)lk.call(n,i[a])&&(r[i[a]]=n[i[a]])}}return r};/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wp=Ax,Vo=60103,zx=60106;ve.Fragment=60107;ve.StrictMode=60108;ve.Profiler=60114;var Ix=60109,Dx=60110,Fx=60112;ve.Suspense=60113;var jx=60115,Bx=60116;if(typeof Symbol=="function"&&Symbol.for){var xn=Symbol.for;Vo=xn("react.element"),zx=xn("react.portal"),ve.Fragment=xn("react.fragment"),ve.StrictMode=xn("react.strict_mode"),ve.Profiler=xn("react.profiler"),Ix=xn("react.provider"),Dx=xn("react.context"),Fx=xn("react.forward_ref"),ve.Suspense=xn("react.suspense"),jx=xn("react.memo"),Bx=xn("react.lazy")}var u0=typeof Symbol=="function"&&Symbol.iterator;function dk(e){return e===null||typeof e!="object"?null:(e=u0&&e[u0]||e["@@iterator"],typeof e=="function"?e:null)}function za(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Vx={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Wx={};function Wo(e,t,n){this.props=e,this.context=t,this.refs=Wx,this.updater=n||Vx}Wo.prototype.isReactComponent={};Wo.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error(za(85));this.updater.enqueueSetState(this,e,t,"setState")};Wo.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Hx(){}Hx.prototype=Wo.prototype;function Hp(e,t,n){this.props=e,this.context=t,this.refs=Wx,this.updater=n||Vx}var Up=Hp.prototype=new Hx;Up.constructor=Hp;Wp(Up,Wo.prototype);Up.isPureReactComponent=!0;var Yp={current:null},Ux=Object.prototype.hasOwnProperty,Yx={key:!0,ref:!0,__self:!0,__source:!0};function Xx(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)Ux.call(t,r)&&!Yx.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Vo,type:e,key:o,ref:s,props:i,_owner:Yp.current}}function fk(e,t){return{$$typeof:Vo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Xp(e){return typeof e=="object"&&e!==null&&e.$$typeof===Vo}function hk(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var d0=/\/+/g;function Zd(e,t){return typeof e=="object"&&e!==null&&e.key!=null?hk(""+e.key):t.toString(36)}function ec(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Vo:case zx:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+Zd(s,0):r,Array.isArray(i)?(n="",e!=null&&(n=e.replace(d0,"$&/")+"/"),ec(i,t,n,"",function(c){return c})):i!=null&&(Xp(i)&&(i=fk(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(d0,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",Array.isArray(e))for(var a=0;a<e.length;a++){o=e[a];var l=r+Zd(o,a);s+=ec(o,t,n,l,i)}else if(l=dk(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=r+Zd(o,a++),s+=ec(o,t,n,l,i);else if(o==="object")throw t=""+e,Error(za(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t));return s}function pl(e,t,n){if(e==null)return e;var r=[],i=0;return ec(e,r,"","",function(o){return t.call(n,o,i++)}),r}function pk(e){if(e._status===-1){var t=e._result;t=t(),e._status=0,e._result=t,t.then(function(n){e._status===0&&(n=n.default,e._status=1,e._result=n)},function(n){e._status===0&&(e._status=2,e._result=n)})}if(e._status===1)return e._result;throw e._result}var Kx={current:null};function mr(){var e=Kx.current;if(e===null)throw Error(za(321));return e}var mk={ReactCurrentDispatcher:Kx,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:Yp,IsSomeRendererActing:{current:!1},assign:Wp};ve.Children={map:pl,forEach:function(e,t,n){pl(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return pl(e,function(){t++}),t},toArray:function(e){return pl(e,function(t){return t})||[]},only:function(e){if(!Xp(e))throw Error(za(143));return e}};ve.Component=Wo;ve.PureComponent=Hp;ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mk;ve.cloneElement=function(e,t,n){if(e==null)throw Error(za(267,e));var r=Wp({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=Yp.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)Ux.call(t,l)&&!Yx.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Vo,type:e.type,key:i,ref:o,props:r,_owner:s}};ve.createContext=function(e,t){return t===void 0&&(t=null),e={$$typeof:Dx,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider={$$typeof:Ix,_context:e},e.Consumer=e};ve.createElement=Xx;ve.createFactory=function(e){var t=Xx.bind(null,e);return t.type=e,t};ve.createRef=function(){return{current:null}};ve.forwardRef=function(e){return{$$typeof:Fx,render:e}};ve.isValidElement=Xp;ve.lazy=function(e){return{$$typeof:Bx,_payload:{_status:-1,_result:e},_init:pk}};ve.memo=function(e,t){return{$$typeof:jx,type:e,compare:t===void 0?null:t}};ve.useCallback=function(e,t){return mr().useCallback(e,t)};ve.useContext=function(e,t){return mr().useContext(e,t)};ve.useDebugValue=function(){};ve.useEffect=function(e,t){return mr().useEffect(e,t)};ve.useImperativeHandle=function(e,t,n){return mr().useImperativeHandle(e,t,n)};ve.useLayoutEffect=function(e,t){return mr().useLayoutEffect(e,t)};ve.useMemo=function(e,t){return mr().useMemo(e,t)};ve.useReducer=function(e,t,n){return mr().useReducer(e,t,n)};ve.useRef=function(e){return mr().useRef(e)};ve.useState=function(e){return mr().useState(e)};ve.version="17.0.2";_.exports=ve;var Qe=_.exports,na=Lx({__proto__:null,default:Qe},[_.exports]),Pu={exports:{}},hn={},Gx={exports:{}},qx={};/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){var t,n,r,i;if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}if(typeof window=="undefined"||typeof MessageChannel!="function"){var l=null,c=null,u=function(){if(l!==null)try{var F=e.unstable_now();l(!0,F),l=null}catch(R){throw setTimeout(u,0),R}};t=function(F){l!==null?setTimeout(t,0,F):(l=F,setTimeout(u,0))},n=function(F,R){c=setTimeout(F,R)},r=function(){clearTimeout(c)},e.unstable_shouldYield=function(){return!1},i=e.unstable_forceFrameRate=function(){}}else{var d=window.setTimeout,h=window.clearTimeout;if(typeof console!="undefined"){var m=window.cancelAnimationFrame;typeof window.requestAnimationFrame!="function"&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"),typeof m!="function"&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")}var y=!1,v=null,p=-1,g=5,x=0;e.unstable_shouldYield=function(){return e.unstable_now()>=x},i=function(){},e.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):g=0<F?Math.floor(1e3/F):5};var b=new MessageChannel,w=b.port2;b.port1.onmessage=function(){if(v!==null){var F=e.unstable_now();x=F+g;try{v(!0,F)?w.postMessage(null):(y=!1,v=null)}catch(R){throw w.postMessage(null),R}}else y=!1},t=function(F){v=F,y||(y=!0,w.postMessage(null))},n=function(F,R){p=d(function(){F(e.unstable_now())},R)},r=function(){h(p),p=-1}}function S(F,R){var T=F.length;F.push(R);e:for(;;){var $=T-1>>>1,U=F[$];if(U!==void 0&&0<M(U,R))F[$]=R,F[T]=U,T=$;else break e}}function C(F){return F=F[0],F===void 0?null:F}function P(F){var R=F[0];if(R!==void 0){var T=F.pop();if(T!==R){F[0]=T;e:for(var $=0,U=F.length;$<U;){var E=2*($+1)-1,ne=F[E],I=E+1,ie=F[I];if(ne!==void 0&&0>M(ne,T))ie!==void 0&&0>M(ie,ne)?(F[$]=ie,F[I]=T,$=I):(F[$]=ne,F[E]=T,$=E);else if(ie!==void 0&&0>M(ie,T))F[$]=ie,F[I]=T,$=I;else break e}}return R}return null}function M(F,R){var T=F.sortIndex-R.sortIndex;return T!==0?T:F.id-R.id}var O=[],N=[],A=1,z=null,H=3,Q=!1,V=!1,K=!1;function Y(F){for(var R=C(N);R!==null;){if(R.callback===null)P(N);else if(R.startTime<=F)P(N),R.sortIndex=R.expirationTime,S(O,R);else break;R=C(N)}}function Z(F){if(K=!1,Y(F),!V)if(C(O)!==null)V=!0,t(ye);else{var R=C(N);R!==null&&n(Z,R.startTime-F)}}function ye(F,R){V=!1,K&&(K=!1,r()),Q=!0;var T=H;try{for(Y(R),z=C(O);z!==null&&(!(z.expirationTime>R)||F&&!e.unstable_shouldYield());){var $=z.callback;if(typeof $=="function"){z.callback=null,H=z.priorityLevel;var U=$(z.expirationTime<=R);R=e.unstable_now(),typeof U=="function"?z.callback=U:z===C(O)&&P(O),Y(R)}else P(O);z=C(O)}if(z!==null)var E=!0;else{var ne=C(N);ne!==null&&n(Z,ne.startTime-R),E=!1}return E}finally{z=null,H=T,Q=!1}}var Ve=i;e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(F){F.callback=null},e.unstable_continueExecution=function(){V||Q||(V=!0,t(ye))},e.unstable_getCurrentPriorityLevel=function(){return H},e.unstable_getFirstCallbackNode=function(){return C(O)},e.unstable_next=function(F){switch(H){case 1:case 2:case 3:var R=3;break;default:R=H}var T=H;H=R;try{return F()}finally{H=T}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=Ve,e.unstable_runWithPriority=function(F,R){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var T=H;H=F;try{return R()}finally{H=T}},e.unstable_scheduleCallback=function(F,R,T){var $=e.unstable_now();switch(typeof T=="object"&&T!==null?(T=T.delay,T=typeof T=="number"&&0<T?$+T:$):T=$,F){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=T+U,F={id:A++,callback:R,priorityLevel:F,startTime:T,expirationTime:U,sortIndex:-1},T>$?(F.sortIndex=T,S(N,F),C(O)===null&&F===C(N)&&(K?r():K=!0,n(Z,T-$))):(F.sortIndex=U,S(O,F),V||Q||(V=!0,t(ye))),F},e.unstable_wrapCallback=function(F){var R=H;return function(){var T=H;H=R;try{return F.apply(this,arguments)}finally{H=T}}}})(qx);Gx.exports=qx;/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mu=_.exports,Be=Ax,dt=Gx.exports;function B(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!Mu)throw Error(B(227));var Qx=new Set,ra={};function Di(e,t){To(e,t),To(e+"Capture",t)}function To(e,t){for(ra[e]=t,e=0;e<t.length;e++)Qx.add(t[e])}var dr=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),gk=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,f0=Object.prototype.hasOwnProperty,h0={},p0={};function vk(e){return f0.call(p0,e)?!0:f0.call(h0,e)?!1:gk.test(e)?p0[e]=!0:(h0[e]=!0,!1)}function yk(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function xk(e,t,n,r){if(t===null||typeof t=="undefined"||yk(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function $t(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var xt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){xt[e]=new $t(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];xt[t]=new $t(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){xt[e]=new $t(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){xt[e]=new $t(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){xt[e]=new $t(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){xt[e]=new $t(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){xt[e]=new $t(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){xt[e]=new $t(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){xt[e]=new $t(e,5,!1,e.toLowerCase(),null,!1,!1)});var Kp=/[\-:]([a-z])/g;function Gp(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Kp,Gp);xt[t]=new $t(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Kp,Gp);xt[t]=new $t(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Kp,Gp);xt[t]=new $t(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){xt[e]=new $t(e,1,!1,e.toLowerCase(),null,!1,!1)});xt.xlinkHref=new $t("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){xt[e]=new $t(e,1,!1,e.toLowerCase(),null,!0,!0)});function qp(e,t,n,r){var i=xt.hasOwnProperty(t)?xt[t]:null,o=i!==null?i.type===0:r?!1:!(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N");o||(xk(t,n,i,r)&&(n=null),r||i===null?vk(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Fi=Mu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ss=60103,xi=60106,br=60107,Qp=60108,As=60114,Zp=60109,Jp=60110,Eu=60112,zs=60113,Oc=60120,Ou=60115,em=60116,tm=60121,nm=60128,Zx=60129,rm=60130,rh=60131;if(typeof Symbol=="function"&&Symbol.for){var ct=Symbol.for;Ss=ct("react.element"),xi=ct("react.portal"),br=ct("react.fragment"),Qp=ct("react.strict_mode"),As=ct("react.profiler"),Zp=ct("react.provider"),Jp=ct("react.context"),Eu=ct("react.forward_ref"),zs=ct("react.suspense"),Oc=ct("react.suspense_list"),Ou=ct("react.memo"),em=ct("react.lazy"),tm=ct("react.block"),ct("react.scope"),nm=ct("react.opaque.id"),Zx=ct("react.debug_trace_mode"),rm=ct("react.offscreen"),rh=ct("react.legacy_hidden")}var m0=typeof Symbol=="function"&&Symbol.iterator;function rs(e){return e===null||typeof e!="object"?null:(e=m0&&e[m0]||e["@@iterator"],typeof e=="function"?e:null)}var Jd;function ks(e){if(Jd===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Jd=t&&t[1]||""}return`
`+Jd+e}var ef=!1;function ml(e,t){if(!e||ef)return"";ef=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(l){var r=l}Reflect.construct(e,[],t)}else{try{t.call()}catch(l){r=l}e.call(t.prototype)}else{try{throw Error()}catch(l){r=l}e()}}catch(l){if(l&&r&&typeof l.stack=="string"){for(var i=l.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a])return`
`+i[s].replace(" at new "," at ");while(1<=s&&0<=a);break}}}finally{ef=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ks(e):""}function bk(e){switch(e.tag){case 5:return ks(e.type);case 16:return ks("Lazy");case 13:return ks("Suspense");case 19:return ks("SuspenseList");case 0:case 2:case 15:return e=ml(e.type,!1),e;case 11:return e=ml(e.type.render,!1),e;case 22:return e=ml(e.type._render,!1),e;case 1:return e=ml(e.type,!0),e;default:return""}}function po(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case br:return"Fragment";case xi:return"Portal";case As:return"Profiler";case Qp:return"StrictMode";case zs:return"Suspense";case Oc:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Jp:return(e.displayName||"Context")+".Consumer";case Zp:return(e._context.displayName||"Context")+".Provider";case Eu:var t=e.render;return t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case Ou:return po(e.type);case tm:return po(e._render);case em:t=e._payload,e=e._init;try{return po(e(t))}catch{}}return null}function Xr(e){switch(typeof e){case"boolean":case"number":case"object":case"string":case"undefined":return e;default:return""}}function Jx(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function wk(e){var t=Jx(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n!="undefined"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function gl(e){e._valueTracker||(e._valueTracker=wk(e))}function eb(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Jx(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Nc(e){if(e=e||(typeof document!="undefined"?document:void 0),typeof e=="undefined")return null;try{return e.activeElement||e.body}catch{return e.body}}function ih(e,t){var n=t.checked;return Be({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}function g0(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Xr(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function tb(e,t){t=t.checked,t!=null&&qp(e,"checked",t,!1)}function oh(e,t){tb(e,t);var n=Xr(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?sh(e,t.type,n):t.hasOwnProperty("defaultValue")&&sh(e,t.type,Xr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function v0(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function sh(e,t,n){(t!=="number"||Nc(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}function _k(e){var t="";return Mu.Children.forEach(e,function(n){n!=null&&(t+=n)}),t}function ah(e,t){return e=Be({children:void 0},t),(t=_k(t.children))&&(e.children=t),e}function mo(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Xr(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function lh(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(B(91));return Be({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function y0(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(B(92));if(Array.isArray(n)){if(!(1>=n.length))throw Error(B(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Xr(n)}}function nb(e,t){var n=Xr(t.value),r=Xr(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function x0(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}var ch={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};function rb(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function uh(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?rb(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var vl,ib=function(e){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!==ch.svg||"innerHTML"in e)e.innerHTML=t;else{for(vl=vl||document.createElement("div"),vl.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=vl.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ia(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Is={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Sk=["Webkit","ms","Moz","O"];Object.keys(Is).forEach(function(e){Sk.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Is[t]=Is[e]})});function ob(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Is.hasOwnProperty(e)&&Is[e]?(""+t).trim():t+"px"}function sb(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=ob(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var kk=Be({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function dh(e,t){if(t){if(kk[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(B(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(B(60));if(!(typeof t.dangerouslySetInnerHTML=="object"&&"__html"in t.dangerouslySetInnerHTML))throw Error(B(61))}if(t.style!=null&&typeof t.style!="object")throw Error(B(62))}}function fh(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}function im(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var hh=null,go=null,vo=null;function b0(e){if(e=Da(e)){if(typeof hh!="function")throw Error(B(280));var t=e.stateNode;t&&(t=Au(t),hh(e.stateNode,e.type,t))}}function ab(e){go?vo?vo.push(e):vo=[e]:go=e}function lb(){if(go){var e=go,t=vo;if(vo=go=null,b0(e),t)for(e=0;e<t.length;e++)b0(t[e])}}function om(e,t){return e(t)}function cb(e,t,n,r,i){return e(t,n,r,i)}function sm(){}var ub=om,bi=!1,tf=!1;function am(){(go!==null||vo!==null)&&(sm(),lb())}function Ck(e,t,n){if(tf)return e(t,n);tf=!0;try{return ub(e,t,n)}finally{tf=!1,am()}}function oa(e,t){var n=e.stateNode;if(n===null)return null;var r=Au(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(B(231,t,typeof n));return n}var ph=!1;if(dr)try{var is={};Object.defineProperty(is,"passive",{get:function(){ph=!0}}),window.addEventListener("test",is,is),window.removeEventListener("test",is,is)}catch{ph=!1}function Pk(e,t,n,r,i,o,s,a,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(u){this.onError(u)}}var Ds=!1,Tc=null,Rc=!1,mh=null,Mk={onError:function(e){Ds=!0,Tc=e}};function Ek(e,t,n,r,i,o,s,a,l){Ds=!1,Tc=null,Pk.apply(Mk,arguments)}function Ok(e,t,n,r,i,o,s,a,l){if(Ek.apply(this,arguments),Ds){if(Ds){var c=Tc;Ds=!1,Tc=null}else throw Error(B(198));Rc||(Rc=!0,mh=c)}}function ji(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&1026)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function db(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function w0(e){if(ji(e)!==e)throw Error(B(188))}function Nk(e){var t=e.alternate;if(!t){if(t=ji(e),t===null)throw Error(B(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return w0(i),e;if(o===r)return w0(i),t;o=o.sibling}throw Error(B(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(B(189))}}if(n.alternate!==r)throw Error(B(190))}if(n.tag!==3)throw Error(B(188));return n.stateNode.current===n?e:t}function fb(e){if(e=Nk(e),!e)return null;for(var t=e;;){if(t.tag===5||t.tag===6)return t;if(t.child)t.child.return=t,t=t.child;else{if(t===e)break;for(;!t.sibling;){if(!t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}}return null}function _0(e,t){for(var n=e.alternate;t!==null;){if(t===e||t===n)return!0;t=t.return}return!1}var hb,lm,pb,mb,gh=!1,Dn=[],$r=null,Lr=null,Ar=null,sa=new Map,aa=new Map,os=[],S0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function vh(e,t,n,r,i){return{blockedOn:e,domEventName:t,eventSystemFlags:n|16,nativeEvent:i,targetContainers:[r]}}function k0(e,t){switch(e){case"focusin":case"focusout":$r=null;break;case"dragenter":case"dragleave":Lr=null;break;case"mouseover":case"mouseout":Ar=null;break;case"pointerover":case"pointerout":sa.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":aa.delete(t.pointerId)}}function ss(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e=vh(t,n,r,i,o),t!==null&&(t=Da(t),t!==null&&lm(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tk(e,t,n,r,i){switch(t){case"focusin":return $r=ss($r,e,t,n,r,i),!0;case"dragenter":return Lr=ss(Lr,e,t,n,r,i),!0;case"mouseover":return Ar=ss(Ar,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return sa.set(o,ss(sa.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,aa.set(o,ss(aa.get(o)||null,e,t,n,r,i)),!0}return!1}function Rk(e){var t=wi(e.target);if(t!==null){var n=ji(t);if(n!==null){if(t=n.tag,t===13){if(t=db(n),t!==null){e.blockedOn=t,mb(e.lanePriority,function(){dt.unstable_runWithPriority(e.priority,function(){pb(n)})});return}}else if(t===3&&n.stateNode.hydrate){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function tc(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=fm(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n!==null)return t=Da(n),t!==null&&lm(t),e.blockedOn=n,!1;t.shift()}return!0}function C0(e,t,n){tc(e)&&n.delete(t)}function $k(){for(gh=!1;0<Dn.length;){var e=Dn[0];if(e.blockedOn!==null){e=Da(e.blockedOn),e!==null&&hb(e);break}for(var t=e.targetContainers;0<t.length;){var n=fm(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n!==null){e.blockedOn=n;break}t.shift()}e.blockedOn===null&&Dn.shift()}$r!==null&&tc($r)&&($r=null),Lr!==null&&tc(Lr)&&(Lr=null),Ar!==null&&tc(Ar)&&(Ar=null),sa.forEach(C0),aa.forEach(C0)}function as(e,t){e.blockedOn===t&&(e.blockedOn=null,gh||(gh=!0,dt.unstable_scheduleCallback(dt.unstable_NormalPriority,$k)))}function gb(e){function t(i){return as(i,e)}if(0<Dn.length){as(Dn[0],e);for(var n=1;n<Dn.length;n++){var r=Dn[n];r.blockedOn===e&&(r.blockedOn=null)}}for($r!==null&&as($r,e),Lr!==null&&as(Lr,e),Ar!==null&&as(Ar,e),sa.forEach(t),aa.forEach(t),n=0;n<os.length;n++)r=os[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<os.length&&(n=os[0],n.blockedOn===null);)Rk(n),n.blockedOn===null&&os.shift()}function yl(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var io={animationend:yl("Animation","AnimationEnd"),animationiteration:yl("Animation","AnimationIteration"),animationstart:yl("Animation","AnimationStart"),transitionend:yl("Transition","TransitionEnd")},nf={},vb={};dr&&(vb=document.createElement("div").style,"AnimationEvent"in window||(delete io.animationend.animation,delete io.animationiteration.animation,delete io.animationstart.animation),"TransitionEvent"in window||delete io.transitionend.transition);function Nu(e){if(nf[e])return nf[e];if(!io[e])return e;var t=io[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in vb)return nf[e]=t[n];return e}var yb=Nu("animationend"),xb=Nu("animationiteration"),bb=Nu("animationstart"),wb=Nu("transitionend"),_b=new Map,cm=new Map,Lk=["abort","abort",yb,"animationEnd",xb,"animationIteration",bb,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart","lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",wb,"transitionEnd","waiting","waiting"];function um(e,t){for(var n=0;n<e.length;n+=2){var r=e[n],i=e[n+1];i="on"+(i[0].toUpperCase()+i.slice(1)),cm.set(r,t),_b.set(r,i),Di(i,[r])}}var Ak=dt.unstable_now;Ak();var Te=8;function no(e){if((1&e)!==0)return Te=15,1;if((2&e)!==0)return Te=14,2;if((4&e)!==0)return Te=13,4;var t=24&e;return t!==0?(Te=12,t):(e&32)!==0?(Te=11,32):(t=192&e,t!==0?(Te=10,t):(e&256)!==0?(Te=9,256):(t=3584&e,t!==0?(Te=8,t):(e&4096)!==0?(Te=7,4096):(t=4186112&e,t!==0?(Te=6,t):(t=62914560&e,t!==0?(Te=5,t):e&67108864?(Te=4,67108864):(e&134217728)!==0?(Te=3,134217728):(t=805306368&e,t!==0?(Te=2,t):(1073741824&e)!==0?(Te=1,1073741824):(Te=8,e))))))}function zk(e){switch(e){case 99:return 15;case 98:return 10;case 97:case 96:return 8;case 95:return 2;default:return 0}}function Ik(e){switch(e){case 15:case 14:return 99;case 13:case 12:case 11:case 10:return 98;case 9:case 8:case 7:case 6:case 4:case 5:return 97;case 3:case 2:case 1:return 95;case 0:return 90;default:throw Error(B(358,e))}}function la(e,t){var n=e.pendingLanes;if(n===0)return Te=0;var r=0,i=0,o=e.expiredLanes,s=e.suspendedLanes,a=e.pingedLanes;if(o!==0)r=o,i=Te=15;else if(o=n&134217727,o!==0){var l=o&~s;l!==0?(r=no(l),i=Te):(a&=o,a!==0&&(r=no(a),i=Te))}else o=n&~s,o!==0?(r=no(o),i=Te):a!==0&&(r=no(a),i=Te);if(r===0)return 0;if(r=31-Kr(r),r=n&((0>r?0:1<<r)<<1)-1,t!==0&&t!==r&&(t&s)===0){if(no(t),i<=Te)return t;Te=i}if(t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Kr(t),i=1<<n,r|=e[n],t&=~i;return r}function Sb(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function $c(e,t){switch(e){case 15:return 1;case 14:return 2;case 12:return e=ro(24&~t),e===0?$c(10,t):e;case 10:return e=ro(192&~t),e===0?$c(8,t):e;case 8:return e=ro(3584&~t),e===0&&(e=ro(4186112&~t),e===0&&(e=512)),e;case 2:return t=ro(805306368&~t),t===0&&(t=268435456),t}throw Error(B(358,e))}function ro(e){return e&-e}function rf(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Tu(e,t,n){e.pendingLanes|=t;var r=t-1;e.suspendedLanes&=r,e.pingedLanes&=r,e=e.eventTimes,t=31-Kr(t),e[t]=n}var Kr=Math.clz32?Math.clz32:jk,Dk=Math.log,Fk=Math.LN2;function jk(e){return e===0?32:31-(Dk(e)/Fk|0)|0}var Bk=dt.unstable_UserBlockingPriority,Vk=dt.unstable_runWithPriority,nc=!0;function Wk(e,t,n,r){bi||sm();var i=dm,o=bi;bi=!0;try{cb(i,e,t,n,r)}finally{(bi=o)||am()}}function Hk(e,t,n,r){Vk(Bk,dm.bind(null,e,t,n,r))}function dm(e,t,n,r){if(nc){var i;if((i=(t&4)===0)&&0<Dn.length&&-1<S0.indexOf(e))e=vh(null,e,t,n,r),Dn.push(e);else{var o=fm(e,t,n,r);if(o===null)i&&k0(e,r);else{if(i){if(-1<S0.indexOf(e)){e=vh(o,e,t,n,r),Dn.push(e);return}if(Tk(o,e,t,n,r))return;k0(e,r)}zb(e,t,r,null,n)}}}}function fm(e,t,n,r){var i=im(r);if(i=wi(i),i!==null){var o=ji(i);if(o===null)i=null;else{var s=o.tag;if(s===13){if(i=db(o),i!==null)return i;i=null}else if(s===3){if(o.stateNode.hydrate)return o.tag===3?o.stateNode.containerInfo:null;i=null}else o!==i&&(i=null)}}return zb(e,t,r,i,n),null}var Sr=null,hm=null,rc=null;function kb(){if(rc)return rc;var e,t=hm,n=t.length,r,i="value"in Sr?Sr.value:Sr.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return rc=i.slice(e,1<r?1-r:void 0)}function ic(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function xl(){return!0}function P0(){return!1}function qt(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?xl:P0,this.isPropagationStopped=P0,this}return Be(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=xl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=xl)},persist:function(){},isPersistent:xl}),t}var Ho={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pm=qt(Ho),Ia=Be({},Ho,{view:0,detail:0}),Uk=qt(Ia),of,sf,ls,Ru=Be({},Ia,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mm,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ls&&(ls&&e.type==="mousemove"?(of=e.screenX-ls.screenX,sf=e.screenY-ls.screenY):sf=of=0,ls=e),of)},movementY:function(e){return"movementY"in e?e.movementY:sf}}),M0=qt(Ru),Yk=Be({},Ru,{dataTransfer:0}),Xk=qt(Yk),Kk=Be({},Ia,{relatedTarget:0}),af=qt(Kk),Gk=Be({},Ho,{animationName:0,elapsedTime:0,pseudoElement:0}),qk=qt(Gk),Qk=Be({},Ho,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Zk=qt(Qk),Jk=Be({},Ho,{data:0}),E0=qt(Jk),eC={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},tC={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},nC={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function rC(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=nC[e])?!!t[e]:!1}function mm(){return rC}var iC=Be({},Ia,{key:function(e){if(e.key){var t=eC[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ic(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?tC[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mm,charCode:function(e){return e.type==="keypress"?ic(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ic(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),oC=qt(iC),sC=Be({},Ru,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),O0=qt(sC),aC=Be({},Ia,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mm}),lC=qt(aC),cC=Be({},Ho,{propertyName:0,elapsedTime:0,pseudoElement:0}),uC=qt(cC),dC=Be({},Ru,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),fC=qt(dC),hC=[9,13,27,32],gm=dr&&"CompositionEvent"in window,Fs=null;dr&&"documentMode"in document&&(Fs=document.documentMode);var pC=dr&&"TextEvent"in window&&!Fs,Cb=dr&&(!gm||Fs&&8<Fs&&11>=Fs),N0=String.fromCharCode(32),T0=!1;function Pb(e,t){switch(e){case"keyup":return hC.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Mb(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var oo=!1;function mC(e,t){switch(e){case"compositionend":return Mb(t);case"keypress":return t.which!==32?null:(T0=!0,N0);case"textInput":return e=t.data,e===N0&&T0?null:e;default:return null}}function gC(e,t){if(oo)return e==="compositionend"||!gm&&Pb(e,t)?(e=kb(),rc=hm=Sr=null,oo=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Cb&&t.locale!=="ko"?null:t.data;default:return null}}var vC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function R0(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!vC[e.type]:t==="textarea"}function Eb(e,t,n,r){ab(r),t=Lc(t,"onChange"),0<t.length&&(n=new pm("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var js=null,ca=null;function yC(e){$b(e,0)}function $u(e){var t=ao(e);if(eb(t))return e}function xC(e,t){if(e==="change")return t}var Ob=!1;if(dr){var lf;if(dr){var cf="oninput"in document;if(!cf){var $0=document.createElement("div");$0.setAttribute("oninput","return;"),cf=typeof $0.oninput=="function"}lf=cf}else lf=!1;Ob=lf&&(!document.documentMode||9<document.documentMode)}function L0(){js&&(js.detachEvent("onpropertychange",Nb),ca=js=null)}function Nb(e){if(e.propertyName==="value"&&$u(ca)){var t=[];if(Eb(t,ca,e,im(e)),e=yC,bi)e(t);else{bi=!0;try{om(e,t)}finally{bi=!1,am()}}}}function bC(e,t,n){e==="focusin"?(L0(),js=t,ca=n,js.attachEvent("onpropertychange",Nb)):e==="focusout"&&L0()}function wC(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return $u(ca)}function _C(e,t){if(e==="click")return $u(t)}function SC(e,t){if(e==="input"||e==="change")return $u(t)}function kC(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var sn=typeof Object.is=="function"?Object.is:kC,CC=Object.prototype.hasOwnProperty;function ua(e,t){if(sn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++)if(!CC.call(t,n[r])||!sn(e[n[r]],t[n[r]]))return!1;return!0}function A0(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function z0(e,t){var n=A0(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=A0(n)}}function Tb(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Tb(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function I0(){for(var e=window,t=Nc();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Nc(e.document)}return t}function yh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var PC=dr&&"documentMode"in document&&11>=document.documentMode,so=null,xh=null,Bs=null,bh=!1;function D0(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;bh||so==null||so!==Nc(r)||(r=so,"selectionStart"in r&&yh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Bs&&ua(Bs,r)||(Bs=r,r=Lc(xh,"onSelect"),0<r.length&&(t=new pm("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=so)))}um("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),0);um("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1);um(Lk,2);for(var F0="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),uf=0;uf<F0.length;uf++)cm.set(F0[uf],0);To("onMouseEnter",["mouseout","mouseover"]);To("onMouseLeave",["mouseout","mouseover"]);To("onPointerEnter",["pointerout","pointerover"]);To("onPointerLeave",["pointerout","pointerover"]);Di("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Di("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Di("onBeforeInput",["compositionend","keypress","textInput","paste"]);Di("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Di("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Di("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Cs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Rb=new Set("cancel close invalid load scroll toggle".split(" ").concat(Cs));function j0(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Ok(r,t,void 0,e),e.currentTarget=null}function $b(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;j0(i,a,c),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,c=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;j0(i,a,c),o=l}}}if(Rc)throw e=mh,Rc=!1,mh=null,e}function $e(e,t){var n=Db(t),r=e+"__bubble";n.has(r)||(Ab(t,e,2,!1),n.add(r))}var B0="_reactListening"+Math.random().toString(36).slice(2);function Lb(e){e[B0]||(e[B0]=!0,Qx.forEach(function(t){Rb.has(t)||V0(t,!1,e,null),V0(t,!0,e,null)}))}function V0(e,t,n,r){var i=4<arguments.length&&arguments[4]!==void 0?arguments[4]:0,o=n;if(e==="selectionchange"&&n.nodeType!==9&&(o=n.ownerDocument),r!==null&&!t&&Rb.has(e)){if(e!=="scroll")return;i|=2,o=r}var s=Db(o),a=e+"__"+(t?"capture":"bubble");s.has(a)||(t&&(i|=4),Ab(o,e,i,t),s.add(a))}function Ab(e,t,n,r){var i=cm.get(t);switch(i===void 0?2:i){case 0:i=Wk;break;case 1:i=Hk;break;default:i=dm}n=i.bind(null,t,n,e),i=void 0,!ph||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function zb(e,t,n,r,i){var o=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=wi(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}Ck(function(){var c=o,u=im(n),d=[];e:{var h=_b.get(e);if(h!==void 0){var m=pm,y=e;switch(e){case"keypress":if(ic(n)===0)break e;case"keydown":case"keyup":m=oC;break;case"focusin":y="focus",m=af;break;case"focusout":y="blur",m=af;break;case"beforeblur":case"afterblur":m=af;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=M0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=Xk;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=lC;break;case yb:case xb:case bb:m=qk;break;case wb:m=uC;break;case"scroll":m=Uk;break;case"wheel":m=fC;break;case"copy":case"cut":case"paste":m=Zk;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=O0}var v=(t&4)!==0,p=!v&&e==="scroll",g=v?h!==null?h+"Capture":null:h;v=[];for(var x=c,b;x!==null;){b=x;var w=b.stateNode;if(b.tag===5&&w!==null&&(b=w,g!==null&&(w=oa(x,g),w!=null&&v.push(da(x,w,b)))),p)break;x=x.return}0<v.length&&(h=new m(h,y,null,n,u),d.push({event:h,listeners:v}))}}if((t&7)===0){e:{if(h=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout",h&&(t&16)===0&&(y=n.relatedTarget||n.fromElement)&&(wi(y)||y[Uo]))break e;if((m||h)&&(h=u.window===u?u:(h=u.ownerDocument)?h.defaultView||h.parentWindow:window,m?(y=n.relatedTarget||n.toElement,m=c,y=y?wi(y):null,y!==null&&(p=ji(y),y!==p||y.tag!==5&&y.tag!==6)&&(y=null)):(m=null,y=c),m!==y)){if(v=M0,w="onMouseLeave",g="onMouseEnter",x="mouse",(e==="pointerout"||e==="pointerover")&&(v=O0,w="onPointerLeave",g="onPointerEnter",x="pointer"),p=m==null?h:ao(m),b=y==null?h:ao(y),h=new v(w,x+"leave",m,n,u),h.target=p,h.relatedTarget=b,w=null,wi(u)===c&&(v=new v(g,x+"enter",y,n,u),v.target=b,v.relatedTarget=p,w=v),p=w,m&&y)t:{for(v=m,g=y,x=0,b=v;b;b=Yi(b))x++;for(b=0,w=g;w;w=Yi(w))b++;for(;0<x-b;)v=Yi(v),x--;for(;0<b-x;)g=Yi(g),b--;for(;x--;){if(v===g||g!==null&&v===g.alternate)break t;v=Yi(v),g=Yi(g)}v=null}else v=null;m!==null&&W0(d,h,m,v,!1),y!==null&&p!==null&&W0(d,p,y,v,!0)}}e:{if(h=c?ao(c):window,m=h.nodeName&&h.nodeName.toLowerCase(),m==="select"||m==="input"&&h.type==="file")var S=xC;else if(R0(h))if(Ob)S=SC;else{S=wC;var C=bC}else(m=h.nodeName)&&m.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(S=_C);if(S&&(S=S(e,c))){Eb(d,S,n,u);break e}C&&C(e,h,c),e==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&sh(h,"number",h.value)}switch(C=c?ao(c):window,e){case"focusin":(R0(C)||C.contentEditable==="true")&&(so=C,xh=c,Bs=null);break;case"focusout":Bs=xh=so=null;break;case"mousedown":bh=!0;break;case"contextmenu":case"mouseup":case"dragend":bh=!1,D0(d,n,u);break;case"selectionchange":if(PC)break;case"keydown":case"keyup":D0(d,n,u)}var P;if(gm)e:{switch(e){case"compositionstart":var M="onCompositionStart";break e;case"compositionend":M="onCompositionEnd";break e;case"compositionupdate":M="onCompositionUpdate";break e}M=void 0}else oo?Pb(e,n)&&(M="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(M="onCompositionStart");M&&(Cb&&n.locale!=="ko"&&(oo||M!=="onCompositionStart"?M==="onCompositionEnd"&&oo&&(P=kb()):(Sr=u,hm="value"in Sr?Sr.value:Sr.textContent,oo=!0)),C=Lc(c,M),0<C.length&&(M=new E0(M,e,null,n,u),d.push({event:M,listeners:C}),P?M.data=P:(P=Mb(n),P!==null&&(M.data=P)))),(P=pC?mC(e,n):gC(e,n))&&(c=Lc(c,"onBeforeInput"),0<c.length&&(u=new E0("onBeforeInput","beforeinput",null,n,u),d.push({event:u,listeners:c}),u.data=P))}$b(d,t)})}function da(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Lc(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=oa(e,n),o!=null&&r.unshift(da(e,o,i)),o=oa(e,t),o!=null&&r.push(da(e,o,i))),e=e.return}return r}function Yi(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function W0(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=oa(n,o),l!=null&&s.unshift(da(n,l,a))):i||(l=oa(n,o),l!=null&&s.push(da(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}function Ac(){}var df=null,ff=null;function Ib(e,t){switch(e){case"button":case"input":case"select":case"textarea":return!!t.autoFocus}return!1}function wh(e,t){return e==="textarea"||e==="option"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var H0=typeof setTimeout=="function"?setTimeout:void 0,MC=typeof clearTimeout=="function"?clearTimeout:void 0;function vm(e){e.nodeType===1?e.textContent="":e.nodeType===9&&(e=e.body,e!=null&&(e.textContent=""))}function yo(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break}return e}function U0(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var hf=0;function EC(e){return{$$typeof:nm,toString:e,valueOf:e}}var Lu=Math.random().toString(36).slice(2),kr="__reactFiber$"+Lu,zc="__reactProps$"+Lu,Uo="__reactContainer$"+Lu,Y0="__reactEvents$"+Lu;function wi(e){var t=e[kr];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Uo]||n[kr]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=U0(e);e!==null;){if(n=e[kr])return n;e=U0(e)}return t}e=n,n=e.parentNode}return null}function Da(e){return e=e[kr]||e[Uo],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ao(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(B(33))}function Au(e){return e[zc]||null}function Db(e){var t=e[Y0];return t===void 0&&(t=e[Y0]=new Set),t}var _h=[],lo=-1;function ri(e){return{current:e}}function Ae(e){0>lo||(e.current=_h[lo],_h[lo]=null,lo--)}function Ke(e,t){lo++,_h[lo]=e.current,e.current=t}var Gr={},Et=ri(Gr),Bt=ri(!1),Oi=Gr;function Ro(e,t){var n=e.type.contextTypes;if(!n)return Gr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Vt(e){return e=e.childContextTypes,e!=null}function Ic(){Ae(Bt),Ae(Et)}function X0(e,t,n){if(Et.current!==Gr)throw Error(B(168));Ke(Et,t),Ke(Bt,n)}function Fb(e,t,n){var r=e.stateNode;if(e=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(B(108,po(t)||"Unknown",i));return Be({},n,r)}function oc(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Gr,Oi=Et.current,Ke(Et,e),Ke(Bt,Bt.current),!0}function K0(e,t,n){var r=e.stateNode;if(!r)throw Error(B(169));n?(e=Fb(e,t,Oi),r.__reactInternalMemoizedMergedChildContext=e,Ae(Bt),Ae(Et),Ke(Et,e)):Ae(Bt),Ke(Bt,n)}var ym=null,Pi=null,OC=dt.unstable_runWithPriority,xm=dt.unstable_scheduleCallback,Sh=dt.unstable_cancelCallback,NC=dt.unstable_shouldYield,G0=dt.unstable_requestPaint,kh=dt.unstable_now,TC=dt.unstable_getCurrentPriorityLevel,zu=dt.unstable_ImmediatePriority,jb=dt.unstable_UserBlockingPriority,Bb=dt.unstable_NormalPriority,Vb=dt.unstable_LowPriority,Wb=dt.unstable_IdlePriority,pf={},RC=G0!==void 0?G0:function(){},nr=null,sc=null,mf=!1,q0=kh(),Ct=1e4>q0?kh:function(){return kh()-q0};function $o(){switch(TC()){case zu:return 99;case jb:return 98;case Bb:return 97;case Vb:return 96;case Wb:return 95;default:throw Error(B(332))}}function Hb(e){switch(e){case 99:return zu;case 98:return jb;case 97:return Bb;case 96:return Vb;case 95:return Wb;default:throw Error(B(332))}}function Ni(e,t){return e=Hb(e),OC(e,t)}function fa(e,t,n){return e=Hb(e),xm(e,t,n)}function Xn(){if(sc!==null){var e=sc;sc=null,Sh(e)}Ub()}function Ub(){if(!mf&&nr!==null){mf=!0;var e=0;try{var t=nr;Ni(99,function(){for(;e<t.length;e++){var n=t[e];do n=n(!0);while(n!==null)}}),nr=null}catch(n){throw nr!==null&&(nr=nr.slice(e+1)),xm(zu,Xn),n}finally{mf=!1}}}var $C=Fi.ReactCurrentBatchConfig;function bn(e,t){if(e&&e.defaultProps){t=Be({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Dc=ri(null),Fc=null,co=null,jc=null;function bm(){jc=co=Fc=null}function wm(e){var t=Dc.current;Ae(Dc),e.type._context._currentValue=t}function Yb(e,t){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)===t){if(n===null||(n.childLanes&t)===t)break;n.childLanes|=t}else e.childLanes|=t,n!==null&&(n.childLanes|=t);e=e.return}}function xo(e,t){Fc=e,jc=co=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(_n=!0),e.firstContext=null)}function un(e,t){if(jc!==e&&t!==!1&&t!==0)if((typeof t!="number"||t===1073741823)&&(jc=e,t=1073741823),t={context:e,observedBits:t,next:null},co===null){if(Fc===null)throw Error(B(308));co=t,Fc.dependencies={lanes:0,firstContext:t,responders:null}}else co=co.next=t;return e._currentValue}var xr=!1;function _m(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null},effects:null}}function Xb(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function zr(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ir(e,t){if(e=e.updateQueue,e!==null){e=e.shared;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}}function Q0(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ha(e,t,n,r){var i=e.updateQueue;xr=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,s===null?o=c:s.next=c,s=l;var u=e.alternate;if(u!==null){u=u.updateQueue;var d=u.lastBaseUpdate;d!==s&&(d===null?u.firstBaseUpdate=c:d.next=c,u.lastBaseUpdate=l)}}if(o!==null){d=i.baseState,s=0,u=c=l=null;do{a=o.lane;var h=o.eventTime;if((r&a)===a){u!==null&&(u=u.next={eventTime:h,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var m=e,y=o;switch(a=t,h=n,y.tag){case 1:if(m=y.payload,typeof m=="function"){d=m.call(h,d,a);break e}d=m;break e;case 3:m.flags=m.flags&-4097|64;case 0:if(m=y.payload,a=typeof m=="function"?m.call(h,d,a):m,a==null)break e;d=Be({},d,a);break e;case 2:xr=!0}}o.callback!==null&&(e.flags|=32,a=i.effects,a===null?i.effects=[o]:a.push(o))}else h={eventTime:h,lane:a,tag:o.tag,payload:o.payload,callback:o.callback,next:null},u===null?(c=u=h,l=d):u=u.next=h,s|=a;if(o=o.next,o===null){if(a=i.shared.pending,a===null)break;o=a.next,a.next=null,i.lastBaseUpdate=a,i.shared.pending=null}}while(1);u===null&&(l=d),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=u,ja|=s,e.lanes=s,e.memoizedState=d}}function Z0(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(B(191,i));i.call(r)}}}var Kb=new Mu.Component().refs;function Bc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Be({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Iu={isMounted:function(e){return(e=e._reactInternals)?ji(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Xt(),i=Dr(e),o=zr(r,i);o.payload=t,n!=null&&(o.callback=n),Ir(e,o),Fr(e,i,r)},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Xt(),i=Dr(e),o=zr(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),Ir(e,o),Fr(e,i,r)},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Xt(),r=Dr(e),i=zr(n,r);i.tag=2,t!=null&&(i.callback=t),Ir(e,i),Fr(e,r,n)}};function J0(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!ua(n,r)||!ua(i,o):!0}function Gb(e,t,n){var r=!1,i=Gr,o=t.contextType;return typeof o=="object"&&o!==null?o=un(o):(i=Vt(t)?Oi:Et.current,r=t.contextTypes,o=(r=r!=null)?Ro(e,i):Gr),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Iu,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function ev(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Iu.enqueueReplaceState(t,t.state,null)}function Ch(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Kb,_m(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=un(o):(o=Vt(t)?Oi:Et.current,i.context=Ro(e,o)),ha(e,n,i,r),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Bc(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Iu.enqueueReplaceState(i,i.state,null),ha(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4)}var bl=Array.isArray;function cs(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(B(309));var r=n.stateNode}if(!r)throw Error(B(147,e));var i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var s=r.refs;s===Kb&&(s=r.refs={}),o===null?delete s[i]:s[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(B(284));if(!n._owner)throw Error(B(290,e))}return e}function wl(e,t){if(e.type!=="textarea")throw Error(B(31,Object.prototype.toString.call(t)==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":t))}function qb(e){function t(p,g){if(e){var x=p.lastEffect;x!==null?(x.nextEffect=g,p.lastEffect=g):p.firstEffect=p.lastEffect=g,g.nextEffect=null,g.flags=8}}function n(p,g){if(!e)return null;for(;g!==null;)t(p,g),g=g.sibling;return null}function r(p,g){for(p=new Map;g!==null;)g.key!==null?p.set(g.key,g):p.set(g.index,g),g=g.sibling;return p}function i(p,g){return p=Qr(p,g),p.index=0,p.sibling=null,p}function o(p,g,x){return p.index=x,e?(x=p.alternate,x!==null?(x=x.index,x<g?(p.flags=2,g):x):(p.flags=2,g)):g}function s(p){return e&&p.alternate===null&&(p.flags=2),p}function a(p,g,x,b){return g===null||g.tag!==6?(g=bf(x,p.mode,b),g.return=p,g):(g=i(g,x),g.return=p,g)}function l(p,g,x,b){return g!==null&&g.elementType===x.type?(b=i(g,x.props),b.ref=cs(p,g,x),b.return=p,b):(b=uc(x.type,x.key,x.props,null,p.mode,b),b.ref=cs(p,g,x),b.return=p,b)}function c(p,g,x,b){return g===null||g.tag!==4||g.stateNode.containerInfo!==x.containerInfo||g.stateNode.implementation!==x.implementation?(g=wf(x,p.mode,b),g.return=p,g):(g=i(g,x.children||[]),g.return=p,g)}function u(p,g,x,b,w){return g===null||g.tag!==7?(g=So(x,p.mode,b,w),g.return=p,g):(g=i(g,x),g.return=p,g)}function d(p,g,x){if(typeof g=="string"||typeof g=="number")return g=bf(""+g,p.mode,x),g.return=p,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ss:return x=uc(g.type,g.key,g.props,null,p.mode,x),x.ref=cs(p,null,g),x.return=p,x;case xi:return g=wf(g,p.mode,x),g.return=p,g}if(bl(g)||rs(g))return g=So(g,p.mode,x,null),g.return=p,g;wl(p,g)}return null}function h(p,g,x,b){var w=g!==null?g.key:null;if(typeof x=="string"||typeof x=="number")return w!==null?null:a(p,g,""+x,b);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Ss:return x.key===w?x.type===br?u(p,g,x.props.children,b,w):l(p,g,x,b):null;case xi:return x.key===w?c(p,g,x,b):null}if(bl(x)||rs(x))return w!==null?null:u(p,g,x,b,null);wl(p,x)}return null}function m(p,g,x,b,w){if(typeof b=="string"||typeof b=="number")return p=p.get(x)||null,a(g,p,""+b,w);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Ss:return p=p.get(b.key===null?x:b.key)||null,b.type===br?u(g,p,b.props.children,w,b.key):l(g,p,b,w);case xi:return p=p.get(b.key===null?x:b.key)||null,c(g,p,b,w)}if(bl(b)||rs(b))return p=p.get(x)||null,u(g,p,b,w,null);wl(g,b)}return null}function y(p,g,x,b){for(var w=null,S=null,C=g,P=g=0,M=null;C!==null&&P<x.length;P++){C.index>P?(M=C,C=null):M=C.sibling;var O=h(p,C,x[P],b);if(O===null){C===null&&(C=M);break}e&&C&&O.alternate===null&&t(p,C),g=o(O,g,P),S===null?w=O:S.sibling=O,S=O,C=M}if(P===x.length)return n(p,C),w;if(C===null){for(;P<x.length;P++)C=d(p,x[P],b),C!==null&&(g=o(C,g,P),S===null?w=C:S.sibling=C,S=C);return w}for(C=r(p,C);P<x.length;P++)M=m(C,p,P,x[P],b),M!==null&&(e&&M.alternate!==null&&C.delete(M.key===null?P:M.key),g=o(M,g,P),S===null?w=M:S.sibling=M,S=M);return e&&C.forEach(function(N){return t(p,N)}),w}function v(p,g,x,b){var w=rs(x);if(typeof w!="function")throw Error(B(150));if(x=w.call(x),x==null)throw Error(B(151));for(var S=w=null,C=g,P=g=0,M=null,O=x.next();C!==null&&!O.done;P++,O=x.next()){C.index>P?(M=C,C=null):M=C.sibling;var N=h(p,C,O.value,b);if(N===null){C===null&&(C=M);break}e&&C&&N.alternate===null&&t(p,C),g=o(N,g,P),S===null?w=N:S.sibling=N,S=N,C=M}if(O.done)return n(p,C),w;if(C===null){for(;!O.done;P++,O=x.next())O=d(p,O.value,b),O!==null&&(g=o(O,g,P),S===null?w=O:S.sibling=O,S=O);return w}for(C=r(p,C);!O.done;P++,O=x.next())O=m(C,p,P,O.value,b),O!==null&&(e&&O.alternate!==null&&C.delete(O.key===null?P:O.key),g=o(O,g,P),S===null?w=O:S.sibling=O,S=O);return e&&C.forEach(function(A){return t(p,A)}),w}return function(p,g,x,b){var w=typeof x=="object"&&x!==null&&x.type===br&&x.key===null;w&&(x=x.props.children);var S=typeof x=="object"&&x!==null;if(S)switch(x.$$typeof){case Ss:e:{for(S=x.key,w=g;w!==null;){if(w.key===S){switch(w.tag){case 7:if(x.type===br){n(p,w.sibling),g=i(w,x.props.children),g.return=p,p=g;break e}break;default:if(w.elementType===x.type){n(p,w.sibling),g=i(w,x.props),g.ref=cs(p,w,x),g.return=p,p=g;break e}}n(p,w);break}else t(p,w);w=w.sibling}x.type===br?(g=So(x.props.children,p.mode,b,x.key),g.return=p,p=g):(b=uc(x.type,x.key,x.props,null,p.mode,b),b.ref=cs(p,g,x),b.return=p,p=b)}return s(p);case xi:e:{for(w=x.key;g!==null;){if(g.key===w)if(g.tag===4&&g.stateNode.containerInfo===x.containerInfo&&g.stateNode.implementation===x.implementation){n(p,g.sibling),g=i(g,x.children||[]),g.return=p,p=g;break e}else{n(p,g);break}else t(p,g);g=g.sibling}g=wf(x,p.mode,b),g.return=p,p=g}return s(p)}if(typeof x=="string"||typeof x=="number")return x=""+x,g!==null&&g.tag===6?(n(p,g.sibling),g=i(g,x),g.return=p,p=g):(n(p,g),g=bf(x,p.mode,b),g.return=p,p=g),s(p);if(bl(x))return y(p,g,x,b);if(rs(x))return v(p,g,x,b);if(S&&wl(p,x),typeof x=="undefined"&&!w)switch(p.tag){case 1:case 22:case 0:case 11:case 15:throw Error(B(152,po(p.type)||"Component"))}return n(p,g)}}var Vc=qb(!0),Qb=qb(!1),Fa={},Bn=ri(Fa),pa=ri(Fa),ma=ri(Fa);function _i(e){if(e===Fa)throw Error(B(174));return e}function Ph(e,t){switch(Ke(ma,t),Ke(pa,e),Ke(Bn,Fa),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:uh(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=uh(t,e)}Ae(Bn),Ke(Bn,t)}function Lo(){Ae(Bn),Ae(pa),Ae(ma)}function tv(e){_i(ma.current);var t=_i(Bn.current),n=uh(t,e.type);t!==n&&(Ke(pa,e),Ke(Bn,n))}function Sm(e){pa.current===e&&(Ae(Bn),Ae(pa))}var Ye=ri(0);function Wc(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&64)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var or=null,Cr=null,Vn=!1;function Zb(e,t){var n=an(5,null,null,0);n.elementType="DELETED",n.type="DELETED",n.stateNode=t,n.return=e,n.flags=8,e.lastEffect!==null?(e.lastEffect.nextEffect=n,e.lastEffect=n):e.firstEffect=e.lastEffect=n}function nv(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,!0):!1;case 13:return!1;default:return!1}}function Mh(e){if(Vn){var t=Cr;if(t){var n=t;if(!nv(e,t)){if(t=yo(n.nextSibling),!t||!nv(e,t)){e.flags=e.flags&-1025|2,Vn=!1,or=e;return}Zb(or,n)}or=e,Cr=yo(t.firstChild)}else e.flags=e.flags&-1025|2,Vn=!1,or=e}}function rv(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;or=e}function _l(e){if(e!==or)return!1;if(!Vn)return rv(e),Vn=!0,!1;var t=e.type;if(e.tag!==5||t!=="head"&&t!=="body"&&!wh(t,e.memoizedProps))for(t=Cr;t;)Zb(e,t),t=yo(t.nextSibling);if(rv(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(B(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Cr=yo(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Cr=null}}else Cr=or?yo(e.stateNode.nextSibling):null;return!0}function gf(){Cr=or=null,Vn=!1}var bo=[];function km(){for(var e=0;e<bo.length;e++)bo[e]._workInProgressVersionPrimary=null;bo.length=0}var Vs=Fi.ReactCurrentDispatcher,cn=Fi.ReactCurrentBatchConfig,ga=0,Je=null,St=null,gt=null,Hc=!1,Ws=!1;function It(){throw Error(B(321))}function Cm(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!sn(e[n],t[n]))return!1;return!0}function Pm(e,t,n,r,i,o){if(ga=o,Je=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Vs.current=e===null||e.memoizedState===null?AC:zC,e=n(r,i),Ws){o=0;do{if(Ws=!1,!(25>o))throw Error(B(301));o+=1,gt=St=null,t.updateQueue=null,Vs.current=IC,e=n(r,i)}while(Ws)}if(Vs.current=Kc,t=St!==null&&St.next!==null,ga=0,gt=St=Je=null,Hc=!1,t)throw Error(B(300));return e}function Si(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return gt===null?Je.memoizedState=gt=e:gt=gt.next=e,gt}function Bi(){if(St===null){var e=Je.alternate;e=e!==null?e.memoizedState:null}else e=St.next;var t=gt===null?Je.memoizedState:gt.next;if(t!==null)gt=t,St=e;else{if(e===null)throw Error(B(310));St=e,e={memoizedState:St.memoizedState,baseState:St.baseState,baseQueue:St.baseQueue,queue:St.queue,next:null},gt===null?Je.memoizedState=gt=e:gt=gt.next=e}return gt}function Fn(e,t){return typeof t=="function"?t(e):t}function us(e){var t=Bi(),n=t.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=e;var r=St,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){i=i.next,r=r.baseState;var a=s=o=null,l=i;do{var c=l.lane;if((ga&c)===c)a!==null&&(a=a.next={lane:0,action:l.action,eagerReducer:l.eagerReducer,eagerState:l.eagerState,next:null}),r=l.eagerReducer===e?l.eagerState:e(r,l.action);else{var u={lane:c,action:l.action,eagerReducer:l.eagerReducer,eagerState:l.eagerState,next:null};a===null?(s=a=u,o=r):a=a.next=u,Je.lanes|=c,ja|=c}l=l.next}while(l!==null&&l!==i);a===null?o=r:a.next=s,sn(r,t.memoizedState)||(_n=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=a,n.lastRenderedState=r}return[t.memoizedState,n.dispatch]}function ds(e){var t=Bi(),n=t.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);sn(o,t.memoizedState)||(_n=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function iv(e,t,n){var r=t._getVersion;r=r(t._source);var i=t._workInProgressVersionPrimary;if(i!==null?e=i===r:(e=e.mutableReadLanes,(e=(ga&e)===e)&&(t._workInProgressVersionPrimary=r,bo.push(t))),e)return n(t._source);throw bo.push(t),Error(B(350))}function Jb(e,t,n,r){var i=Rt;if(i===null)throw Error(B(349));var o=t._getVersion,s=o(t._source),a=Vs.current,l=a.useState(function(){return iv(i,t,n)}),c=l[1],u=l[0];l=gt;var d=e.memoizedState,h=d.refs,m=h.getSnapshot,y=d.source;d=d.subscribe;var v=Je;return e.memoizedState={refs:h,source:t,subscribe:r},a.useEffect(function(){h.getSnapshot=n,h.setSnapshot=c;var p=o(t._source);if(!sn(s,p)){p=n(t._source),sn(u,p)||(c(p),p=Dr(v),i.mutableReadLanes|=p&i.pendingLanes),p=i.mutableReadLanes,i.entangledLanes|=p;for(var g=i.entanglements,x=p;0<x;){var b=31-Kr(x),w=1<<b;g[b]|=p,x&=~w}}},[n,t,r]),a.useEffect(function(){return r(t._source,function(){var p=h.getSnapshot,g=h.setSnapshot;try{g(p(t._source));var x=Dr(v);i.mutableReadLanes|=x&i.pendingLanes}catch(b){g(function(){throw b})}})},[t,r]),sn(m,n)&&sn(y,t)&&sn(d,r)||(e={pending:null,dispatch:null,lastRenderedReducer:Fn,lastRenderedState:u},e.dispatch=c=Om.bind(null,Je,e),l.queue=e,l.baseQueue=null,u=iv(i,t,n),l.memoizedState=l.baseState=u),u}function e2(e,t,n){var r=Bi();return Jb(r,e,t,n)}function fs(e){var t=Si();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e=t.queue={pending:null,dispatch:null,lastRenderedReducer:Fn,lastRenderedState:e},e=e.dispatch=Om.bind(null,Je,e),[t.memoizedState,e]}function Uc(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Je.updateQueue,t===null?(t={lastEffect:null},Je.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function ov(e){var t=Si();return e={current:e},t.memoizedState=e}function Yc(){return Bi().memoizedState}function Eh(e,t,n,r){var i=Si();Je.flags|=e,i.memoizedState=Uc(1|t,n,void 0,r===void 0?null:r)}function Mm(e,t,n,r){var i=Bi();r=r===void 0?null:r;var o=void 0;if(St!==null){var s=St.memoizedState;if(o=s.destroy,r!==null&&Cm(r,s.deps)){Uc(t,n,o,r);return}}Je.flags|=e,i.memoizedState=Uc(1|t,n,o,r)}function sv(e,t){return Eh(516,4,e,t)}function Xc(e,t){return Mm(516,4,e,t)}function t2(e,t){return Mm(4,2,e,t)}function n2(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function r2(e,t,n){return n=n!=null?n.concat([e]):null,Mm(4,2,n2.bind(null,t,e),n)}function Em(){}function i2(e,t){var n=Bi();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Cm(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function o2(e,t){var n=Bi();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Cm(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function LC(e,t){var n=$o();Ni(98>n?98:n,function(){e(!0)}),Ni(97<n?97:n,function(){var r=cn.transition;cn.transition=1;try{e(!1),t()}finally{cn.transition=r}})}function Om(e,t,n){var r=Xt(),i=Dr(e),o={lane:i,action:n,eagerReducer:null,eagerState:null,next:null},s=t.pending;if(s===null?o.next=o:(o.next=s.next,s.next=o),t.pending=o,s=e.alternate,e===Je||s!==null&&s===Je)Ws=Hc=!0;else{if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var a=t.lastRenderedState,l=s(a,n);if(o.eagerReducer=s,o.eagerState=l,sn(l,a))return}catch{}finally{}Fr(e,i,r)}}var Kc={readContext:un,useCallback:It,useContext:It,useEffect:It,useImperativeHandle:It,useLayoutEffect:It,useMemo:It,useReducer:It,useRef:It,useState:It,useDebugValue:It,useDeferredValue:It,useTransition:It,useMutableSource:It,useOpaqueIdentifier:It,unstable_isNewReconciler:!1},AC={readContext:un,useCallback:function(e,t){return Si().memoizedState=[e,t===void 0?null:t],e},useContext:un,useEffect:sv,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Eh(4,2,n2.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Eh(4,2,e,t)},useMemo:function(e,t){var n=Si();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Si();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e=r.queue={pending:null,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},e=e.dispatch=Om.bind(null,Je,e),[r.memoizedState,e]},useRef:ov,useState:fs,useDebugValue:Em,useDeferredValue:function(e){var t=fs(e),n=t[0],r=t[1];return sv(function(){var i=cn.transition;cn.transition=1;try{r(e)}finally{cn.transition=i}},[e]),n},useTransition:function(){var e=fs(!1),t=e[0];return e=LC.bind(null,e[1]),ov(e),[e,t]},useMutableSource:function(e,t,n){var r=Si();return r.memoizedState={refs:{getSnapshot:t,setSnapshot:null},source:e,subscribe:n},Jb(r,e,t,n)},useOpaqueIdentifier:function(){if(Vn){var e=!1,t=EC(function(){throw e||(e=!0,n("r:"+(hf++).toString(36))),Error(B(355))}),n=fs(t)[1];return(Je.mode&2)===0&&(Je.flags|=516,Uc(5,function(){n("r:"+(hf++).toString(36))},void 0,null)),t}return t="r:"+(hf++).toString(36),fs(t),t},unstable_isNewReconciler:!1},zC={readContext:un,useCallback:i2,useContext:un,useEffect:Xc,useImperativeHandle:r2,useLayoutEffect:t2,useMemo:o2,useReducer:us,useRef:Yc,useState:function(){return us(Fn)},useDebugValue:Em,useDeferredValue:function(e){var t=us(Fn),n=t[0],r=t[1];return Xc(function(){var i=cn.transition;cn.transition=1;try{r(e)}finally{cn.transition=i}},[e]),n},useTransition:function(){var e=us(Fn)[0];return[Yc().current,e]},useMutableSource:e2,useOpaqueIdentifier:function(){return us(Fn)[0]},unstable_isNewReconciler:!1},IC={readContext:un,useCallback:i2,useContext:un,useEffect:Xc,useImperativeHandle:r2,useLayoutEffect:t2,useMemo:o2,useReducer:ds,useRef:Yc,useState:function(){return ds(Fn)},useDebugValue:Em,useDeferredValue:function(e){var t=ds(Fn),n=t[0],r=t[1];return Xc(function(){var i=cn.transition;cn.transition=1;try{r(e)}finally{cn.transition=i}},[e]),n},useTransition:function(){var e=ds(Fn)[0];return[Yc().current,e]},useMutableSource:e2,useOpaqueIdentifier:function(){return ds(Fn)[0]},unstable_isNewReconciler:!1},DC=Fi.ReactCurrentOwner,_n=!1;function Ft(e,t,n,r){t.child=e===null?Qb(t,null,n,r):Vc(t,e.child,n,r)}function av(e,t,n,r,i){n=n.render;var o=t.ref;return xo(t,i),r=Pm(e,t,n,r,o,i),e!==null&&!_n?(t.updateQueue=e.updateQueue,t.flags&=-517,e.lanes&=~i,sr(e,t,i)):(t.flags|=1,Ft(e,t,r,i),t.child)}function lv(e,t,n,r,i,o){if(e===null){var s=n.type;return typeof s=="function"&&!Am(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,s2(e,t,s,r,i,o)):(e=uc(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}return s=e.child,(i&o)===0&&(i=s.memoizedProps,n=n.compare,n=n!==null?n:ua,n(i,r)&&e.ref===t.ref)?sr(e,t,o):(t.flags|=1,e=Qr(s,r),e.ref=t.ref,e.return=t,t.child=e)}function s2(e,t,n,r,i,o){if(e!==null&&ua(e.memoizedProps,r)&&e.ref===t.ref)if(_n=!1,(o&i)!==0)(e.flags&16384)!==0&&(_n=!0);else return t.lanes=e.lanes,sr(e,t,o);return Oh(e,t,n,r,o)}function vf(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden"||r.mode==="unstable-defer-without-hiding")if((t.mode&4)===0)t.memoizedState={baseLanes:0},kl(t,n);else if((n&1073741824)!==0)t.memoizedState={baseLanes:0},kl(t,o!==null?o.baseLanes:n);else return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e},kl(t,e),null;else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,kl(t,r);return Ft(e,t,i,n),t.child}function a2(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=128)}function Oh(e,t,n,r,i){var o=Vt(n)?Oi:Et.current;return o=Ro(t,o),xo(t,i),n=Pm(e,t,n,r,o,i),e!==null&&!_n?(t.updateQueue=e.updateQueue,t.flags&=-517,e.lanes&=~i,sr(e,t,i)):(t.flags|=1,Ft(e,t,n,i),t.child)}function cv(e,t,n,r,i){if(Vt(n)){var o=!0;oc(t)}else o=!1;if(xo(t,i),t.stateNode===null)e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2),Gb(t,n,r),Ch(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=un(c):(c=Vt(n)?Oi:Et.current,c=Ro(t,c));var u=n.getDerivedStateFromProps,d=typeof u=="function"||typeof s.getSnapshotBeforeUpdate=="function";d||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==c)&&ev(t,s,r,c),xr=!1;var h=t.memoizedState;s.state=h,ha(t,r,s,i),l=t.memoizedState,a!==r||h!==l||Bt.current||xr?(typeof u=="function"&&(Bc(t,n,u,r),l=t.memoizedState),(a=xr||J0(t,n,a,r,h,l,c))?(d||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4)):(typeof s.componentDidMount=="function"&&(t.flags|=4),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=c,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4),r=!1)}else{s=t.stateNode,Xb(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:bn(t.type,a),s.props=c,d=t.pendingProps,h=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=un(l):(l=Vt(n)?Oi:Et.current,l=Ro(t,l));var m=n.getDerivedStateFromProps;(u=typeof m=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==d||h!==l)&&ev(t,s,r,l),xr=!1,h=t.memoizedState,s.state=h,ha(t,r,s,i);var y=t.memoizedState;a!==d||h!==y||Bt.current||xr?(typeof m=="function"&&(Bc(t,n,m,r),y=t.memoizedState),(c=xr||J0(t,n,c,r,h,y,l))?(u||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,y,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,y,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=256)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=256),t.memoizedProps=r,t.memoizedState=y),s.props=r,s.state=y,s.context=l,r=c):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=256),r=!1)}return Nh(e,t,n,r,o,i)}function Nh(e,t,n,r,i,o){a2(e,t);var s=(t.flags&64)!==0;if(!r&&!s)return i&&K0(t,n,!1),sr(e,t,o);r=t.stateNode,DC.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Vc(t,e.child,null,o),t.child=Vc(t,null,a,o)):Ft(e,t,a,o),t.memoizedState=r.state,i&&K0(t,n,!0),t.child}function uv(e){var t=e.stateNode;t.pendingContext?X0(e,t.pendingContext,t.pendingContext!==t.context):t.context&&X0(e,t.context,!1),Ph(e,t.containerInfo)}var Sl={dehydrated:null,retryLane:0};function dv(e,t,n){var r=t.pendingProps,i=Ye.current,o=!1,s;return(s=(t.flags&64)!==0)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,t.flags&=-65):e!==null&&e.memoizedState===null||r.fallback===void 0||r.unstable_avoidThisFallback===!0||(i|=1),Ke(Ye,i&1),e===null?(r.fallback!==void 0&&Mh(t),e=r.children,i=r.fallback,o?(e=fv(t,e,i,n),t.child.memoizedState={baseLanes:n},t.memoizedState=Sl,e):typeof r.unstable_expectedLoadTime=="number"?(e=fv(t,e,i,n),t.child.memoizedState={baseLanes:n},t.memoizedState=Sl,t.lanes=33554432,e):(n=zm({mode:"visible",children:e},t.mode,n,null),n.return=t,t.child=n)):e.memoizedState!==null?o?(r=pv(e,t,r.children,r.fallback,n),o=t.child,i=e.child.memoizedState,o.memoizedState=i===null?{baseLanes:n}:{baseLanes:i.baseLanes|n},o.childLanes=e.childLanes&~n,t.memoizedState=Sl,r):(n=hv(e,t,r.children,n),t.memoizedState=null,n):o?(r=pv(e,t,r.children,r.fallback,n),o=t.child,i=e.child.memoizedState,o.memoizedState=i===null?{baseLanes:n}:{baseLanes:i.baseLanes|n},o.childLanes=e.childLanes&~n,t.memoizedState=Sl,r):(n=hv(e,t,r.children,n),t.memoizedState=null,n)}function fv(e,t,n,r){var i=e.mode,o=e.child;return t={mode:"hidden",children:t},(i&2)===0&&o!==null?(o.childLanes=0,o.pendingProps=t):o=zm(t,i,0,null),n=So(n,i,r,null),o.return=e,n.return=e,o.sibling=n,e.child=o,n}function hv(e,t,n,r){var i=e.child;return e=i.sibling,n=Qr(i,{mode:"visible",children:n}),(t.mode&2)===0&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(e.nextEffect=null,e.flags=8,t.firstEffect=t.lastEffect=e),t.child=n}function pv(e,t,n,r,i){var o=t.mode,s=e.child;e=s.sibling;var a={mode:"hidden",children:n};return(o&2)===0&&t.child!==s?(n=t.child,n.childLanes=0,n.pendingProps=a,s=n.lastEffect,s!==null?(t.firstEffect=n.firstEffect,t.lastEffect=s,s.nextEffect=null):t.firstEffect=t.lastEffect=null):n=Qr(s,a),e!==null?r=Qr(e,r):(r=So(r,o,i,null),r.flags|=2),r.return=t,n.return=t,n.sibling=r,t.child=n,r}function mv(e,t){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),Yb(e.return,t)}function yf(e,t,n,r,i,o){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,lastEffect:o}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i,s.lastEffect=o)}function gv(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Ft(e,t,r.children,n),r=Ye.current,(r&2)!==0)r=r&1|2,t.flags|=64;else{if(e!==null&&(e.flags&64)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&mv(e,n);else if(e.tag===19)mv(e,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ke(Ye,r),(t.mode&2)===0)t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Wc(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),yf(t,!1,i,n,o,t.lastEffect);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Wc(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}yf(t,!0,n,null,o,t.lastEffect);break;case"together":yf(t,!1,null,null,void 0,t.lastEffect);break;default:t.memoizedState=null}return t.child}function sr(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ja|=t.lanes,(n&t.childLanes)!==0){if(e!==null&&t.child!==e.child)throw Error(B(153));if(t.child!==null){for(e=t.child,n=Qr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Qr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}return null}var l2,Th,c2,u2;l2=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Th=function(){};c2=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,_i(Bn.current);var o=null;switch(n){case"input":i=ih(e,i),r=ih(e,r),o=[];break;case"option":i=ah(e,i),r=ah(e,r),o=[];break;case"select":i=Be({},i,{value:void 0}),r=Be({},r,{value:void 0}),o=[];break;case"textarea":i=lh(e,i),r=lh(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ac)}dh(n,r);var s;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ra.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ra.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&$e("scroll",e),o||a===l||(o=[])):typeof l=="object"&&l!==null&&l.$$typeof===nm?l.toString():(o=o||[]).push(c,l))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};u2=function(e,t,n,r){n!==r&&(t.flags|=4)};function hs(e,t){if(!Vn)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function FC(e,t,n){var r=t.pendingProps;switch(t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return Vt(t.type)&&Ic(),null;case 3:return Lo(),Ae(Bt),Ae(Et),km(),r=t.stateNode,r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(_l(t)?t.flags|=4:r.hydrate||(t.flags|=256)),Th(t),null;case 5:Sm(t);var i=_i(ma.current);if(n=t.type,e!==null&&t.stateNode!=null)c2(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=128);else{if(!r){if(t.stateNode===null)throw Error(B(166));return null}if(e=_i(Bn.current),_l(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[kr]=t,r[zc]=o,n){case"dialog":$e("cancel",r),$e("close",r);break;case"iframe":case"object":case"embed":$e("load",r);break;case"video":case"audio":for(e=0;e<Cs.length;e++)$e(Cs[e],r);break;case"source":$e("error",r);break;case"img":case"image":case"link":$e("error",r),$e("load",r);break;case"details":$e("toggle",r);break;case"input":g0(r,o),$e("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},$e("invalid",r);break;case"textarea":y0(r,o),$e("invalid",r)}dh(n,o),e=null;for(var s in o)o.hasOwnProperty(s)&&(i=o[s],s==="children"?typeof i=="string"?r.textContent!==i&&(e=["children",i]):typeof i=="number"&&r.textContent!==""+i&&(e=["children",""+i]):ra.hasOwnProperty(s)&&i!=null&&s==="onScroll"&&$e("scroll",r));switch(n){case"input":gl(r),v0(r,o,!0);break;case"textarea":gl(r),x0(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Ac)}r=e,t.updateQueue=r,r!==null&&(t.flags|=4)}else{switch(s=i.nodeType===9?i:i.ownerDocument,e===ch.html&&(e=rb(n)),e===ch.html?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[kr]=t,e[zc]=r,l2(e,t,!1,!1),t.stateNode=e,s=fh(n,r),n){case"dialog":$e("cancel",e),$e("close",e),i=r;break;case"iframe":case"object":case"embed":$e("load",e),i=r;break;case"video":case"audio":for(i=0;i<Cs.length;i++)$e(Cs[i],e);i=r;break;case"source":$e("error",e),i=r;break;case"img":case"image":case"link":$e("error",e),$e("load",e),i=r;break;case"details":$e("toggle",e),i=r;break;case"input":g0(e,r),i=ih(e,r),$e("invalid",e);break;case"option":i=ah(e,r);break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Be({},r,{value:void 0}),$e("invalid",e);break;case"textarea":y0(e,r),i=lh(e,r),$e("invalid",e);break;default:i=r}dh(n,i);var a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?sb(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&ib(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ia(e,l):typeof l=="number"&&ia(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(ra.hasOwnProperty(o)?l!=null&&o==="onScroll"&&$e("scroll",e):l!=null&&qp(e,o,l,s))}switch(n){case"input":gl(e),v0(e,r,!1);break;case"textarea":gl(e),x0(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Xr(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?mo(e,!!r.multiple,o,!1):r.defaultValue!=null&&mo(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ac)}Ib(n,r)&&(t.flags|=4)}t.ref!==null&&(t.flags|=128)}return null;case 6:if(e&&t.stateNode!=null)u2(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(B(166));n=_i(ma.current),_i(Bn.current),_l(t)?(r=t.stateNode,n=t.memoizedProps,r[kr]=t,r.nodeValue!==n&&(t.flags|=4)):(r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[kr]=t,t.stateNode=r)}return null;case 13:return Ae(Ye),r=t.memoizedState,(t.flags&64)!==0?(t.lanes=n,t):(r=r!==null,n=!1,e===null?t.memoizedProps.fallback!==void 0&&_l(t):n=e.memoizedState!==null,r&&!n&&(t.mode&2)!==0&&(e===null&&t.memoizedProps.unstable_avoidThisFallback!==!0||(Ye.current&1)!==0?yt===0&&(yt=3):((yt===0||yt===3)&&(yt=4),Rt===null||(ja&134217727)===0&&(Xo&134217727)===0||wo(Rt,Mt))),(r||n)&&(t.flags|=4),null);case 4:return Lo(),Th(t),e===null&&Lb(t.stateNode.containerInfo),null;case 10:return wm(t),null;case 17:return Vt(t.type)&&Ic(),null;case 19:if(Ae(Ye),r=t.memoizedState,r===null)return null;if(o=(t.flags&64)!==0,s=r.rendering,s===null)if(o)hs(r,!1);else{if(yt!==0||e!==null&&(e.flags&64)!==0)for(e=t.child;e!==null;){if(s=Wc(e),s!==null){for(t.flags|=64,hs(r,!1),o=s.updateQueue,o!==null&&(t.updateQueue=o,t.flags|=4),r.lastEffect===null&&(t.firstEffect=null),t.lastEffect=r.lastEffect,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=2,o.nextEffect=null,o.firstEffect=null,o.lastEffect=null,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ke(Ye,Ye.current&1|2),t.child}e=e.sibling}r.tail!==null&&Ct()>Ih&&(t.flags|=64,o=!0,hs(r,!1),t.lanes=33554432)}else{if(!o)if(e=Wc(s),e!==null){if(t.flags|=64,o=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),hs(r,!0),r.tail===null&&r.tailMode==="hidden"&&!s.alternate&&!Vn)return t=t.lastEffect=r.lastEffect,t!==null&&(t.nextEffect=null),null}else 2*Ct()-r.renderingStartTime>Ih&&n!==1073741824&&(t.flags|=64,o=!0,hs(r,!1),t.lanes=33554432);r.isBackwards?(s.sibling=t.child,t.child=s):(n=r.last,n!==null?n.sibling=s:t.child=s,r.last=s)}return r.tail!==null?(n=r.tail,r.rendering=n,r.tail=n.sibling,r.lastEffect=t.lastEffect,r.renderingStartTime=Ct(),n.sibling=null,t=Ye.current,Ke(Ye,o?t&1|2:t&1),n):null;case 23:case 24:return Lm(),e!==null&&e.memoizedState!==null!=(t.memoizedState!==null)&&r.mode!=="unstable-defer-without-hiding"&&(t.flags|=4),null}throw Error(B(156,t.tag))}function jC(e){switch(e.tag){case 1:Vt(e.type)&&Ic();var t=e.flags;return t&4096?(e.flags=t&-4097|64,e):null;case 3:if(Lo(),Ae(Bt),Ae(Et),km(),t=e.flags,(t&64)!==0)throw Error(B(285));return e.flags=t&-4097|64,e;case 5:return Sm(e),null;case 13:return Ae(Ye),t=e.flags,t&4096?(e.flags=t&-4097|64,e):null;case 19:return Ae(Ye),null;case 4:return Lo(),null;case 10:return wm(e),null;case 23:case 24:return Lm(),null;default:return null}}function Nm(e,t){try{var n="",r=t;do n+=bk(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i}}function Rh(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var BC=typeof WeakMap=="function"?WeakMap:Map;function d2(e,t,n){n=zr(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){qc||(qc=!0,Dh=r),Rh(e,t)},n}function f2(e,t,n){n=zr(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return Rh(e,t),r(i)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){typeof r!="function"&&(jn===null?jn=new Set([this]):jn.add(this),Rh(e,t));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}var VC=typeof WeakSet=="function"?WeakSet:Set;function vv(e){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(n){jr(e,n)}else t.current=null}function WC(e,t){switch(t.tag){case 0:case 11:case 15:case 22:return;case 1:if(t.flags&256&&e!==null){var n=e.memoizedProps,r=e.memoizedState;e=t.stateNode,t=e.getSnapshotBeforeUpdate(t.elementType===t.type?n:bn(t.type,n),r),e.__reactInternalSnapshotBeforeUpdate=t}return;case 3:t.flags&256&&vm(t.stateNode.containerInfo);return;case 5:case 6:case 4:case 17:return}throw Error(B(163))}function HC(e,t,n){switch(n.tag){case 0:case 11:case 15:case 22:if(t=n.updateQueue,t=t!==null?t.lastEffect:null,t!==null){e=t=t.next;do{if((e.tag&3)===3){var r=e.create;e.destroy=r()}e=e.next}while(e!==t)}if(t=n.updateQueue,t=t!==null?t.lastEffect:null,t!==null){e=t=t.next;do{var i=e;r=i.next,i=i.tag,(i&4)!==0&&(i&1)!==0&&(w2(n,e),ZC(n,e)),e=r}while(e!==t)}return;case 1:e=n.stateNode,n.flags&4&&(t===null?e.componentDidMount():(r=n.elementType===n.type?t.memoizedProps:bn(n.type,t.memoizedProps),e.componentDidUpdate(r,t.memoizedState,e.__reactInternalSnapshotBeforeUpdate))),t=n.updateQueue,t!==null&&Z0(n,t,e);return;case 3:if(t=n.updateQueue,t!==null){if(e=null,n.child!==null)switch(n.child.tag){case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}Z0(n,t,e)}return;case 5:e=n.stateNode,t===null&&n.flags&4&&Ib(n.type,n.memoizedProps)&&e.focus();return;case 6:return;case 4:return;case 12:return;case 13:n.memoizedState===null&&(n=n.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&gb(n))));return;case 19:case 17:case 20:case 21:case 23:case 24:return}throw Error(B(163))}function yv(e,t){for(var n=e;;){if(n.tag===5){var r=n.stateNode;if(t)r=r.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{r=n.stateNode;var i=n.memoizedProps.style;i=i!=null&&i.hasOwnProperty("display")?i.display:null,r.style.display=ob("display",i)}}else if(n.tag===6)n.stateNode.nodeValue=t?"":n.memoizedProps;else if((n.tag!==23&&n.tag!==24||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}}function xv(e,t){if(Pi&&typeof Pi.onCommitFiberUnmount=="function")try{Pi.onCommitFiberUnmount(ym,t)}catch{}switch(t.tag){case 0:case 11:case 14:case 15:case 22:if(e=t.updateQueue,e!==null&&(e=e.lastEffect,e!==null)){var n=e=e.next;do{var r=n,i=r.destroy;if(r=r.tag,i!==void 0)if((r&4)!==0)w2(t,n);else{r=t;try{i()}catch(o){jr(r,o)}}n=n.next}while(n!==e)}break;case 1:if(vv(t),e=t.stateNode,typeof e.componentWillUnmount=="function")try{e.props=t.memoizedProps,e.state=t.memoizedState,e.componentWillUnmount()}catch(o){jr(t,o)}break;case 5:vv(t);break;case 4:h2(e,t)}}function bv(e){e.alternate=null,e.child=null,e.dependencies=null,e.firstEffect=null,e.lastEffect=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.return=null,e.updateQueue=null}function wv(e){return e.tag===5||e.tag===3||e.tag===4}function _v(e){e:{for(var t=e.return;t!==null;){if(wv(t))break e;t=t.return}throw Error(B(160))}var n=t;switch(t=n.stateNode,n.tag){case 5:var r=!1;break;case 3:t=t.containerInfo,r=!0;break;case 4:t=t.containerInfo,r=!0;break;default:throw Error(B(161))}n.flags&16&&(ia(t,""),n.flags&=-17);e:t:for(n=e;;){for(;n.sibling===null;){if(n.return===null||wv(n.return)){n=null;break e}n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue t;n.child.return=n,n=n.child}if(!(n.flags&2)){n=n.stateNode;break e}}r?$h(e,n,t):Lh(e,n,t)}function $h(e,t,n){var r=e.tag,i=r===5||r===6;if(i)e=i?e.stateNode:e.stateNode.instance,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ac));else if(r!==4&&(e=e.child,e!==null))for($h(e,t,n),e=e.sibling;e!==null;)$h(e,t,n),e=e.sibling}function Lh(e,t,n){var r=e.tag,i=r===5||r===6;if(i)e=i?e.stateNode:e.stateNode.instance,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Lh(e,t,n),e=e.sibling;e!==null;)Lh(e,t,n),e=e.sibling}function h2(e,t){for(var n=t,r=!1,i,o;;){if(!r){r=n.return;e:for(;;){if(r===null)throw Error(B(160));switch(i=r.stateNode,r.tag){case 5:o=!1;break e;case 3:i=i.containerInfo,o=!0;break e;case 4:i=i.containerInfo,o=!0;break e}r=r.return}r=!0}if(n.tag===5||n.tag===6){e:for(var s=e,a=n,l=a;;)if(xv(s,l),l.child!==null&&l.tag!==4)l.child.return=l,l=l.child;else{if(l===a)break e;for(;l.sibling===null;){if(l.return===null||l.return===a)break e;l=l.return}l.sibling.return=l.return,l=l.sibling}o?(s=i,a=n.stateNode,s.nodeType===8?s.parentNode.removeChild(a):s.removeChild(a)):i.removeChild(n.stateNode)}else if(n.tag===4){if(n.child!==null){i=n.stateNode.containerInfo,o=!0,n.child.return=n,n=n.child;continue}}else if(xv(e,n),n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return,n.tag===4&&(r=!1)}n.sibling.return=n.return,n=n.sibling}}function xf(e,t){switch(t.tag){case 0:case 11:case 14:case 15:case 22:var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var r=n=n.next;do(r.tag&3)===3&&(e=r.destroy,r.destroy=void 0,e!==void 0&&e()),r=r.next;while(r!==n)}return;case 1:return;case 5:if(n=t.stateNode,n!=null){r=t.memoizedProps;var i=e!==null?e.memoizedProps:r;e=t.type;var o=t.updateQueue;if(t.updateQueue=null,o!==null){for(n[zc]=r,e==="input"&&r.type==="radio"&&r.name!=null&&tb(n,r),fh(e,i),t=fh(e,r),i=0;i<o.length;i+=2){var s=o[i],a=o[i+1];s==="style"?sb(n,a):s==="dangerouslySetInnerHTML"?ib(n,a):s==="children"?ia(n,a):qp(n,s,a,t)}switch(e){case"input":oh(n,r);break;case"textarea":nb(n,r);break;case"select":e=n._wrapperState.wasMultiple,n._wrapperState.wasMultiple=!!r.multiple,o=r.value,o!=null?mo(n,!!r.multiple,o,!1):e!==!!r.multiple&&(r.defaultValue!=null?mo(n,!!r.multiple,r.defaultValue,!0):mo(n,!!r.multiple,r.multiple?[]:"",!1))}}}return;case 6:if(t.stateNode===null)throw Error(B(162));t.stateNode.nodeValue=t.memoizedProps;return;case 3:n=t.stateNode,n.hydrate&&(n.hydrate=!1,gb(n.containerInfo));return;case 12:return;case 13:t.memoizedState!==null&&($m=Ct(),yv(t.child,!0)),Sv(t);return;case 19:Sv(t);return;case 17:return;case 23:case 24:yv(t,t.memoizedState!==null);return}throw Error(B(163))}function Sv(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new VC),t.forEach(function(r){var i=t5.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function UC(e,t){return e!==null&&(e=e.memoizedState,e===null||e.dehydrated!==null)?(t=t.memoizedState,t!==null&&t.dehydrated===null):!1}var YC=Math.ceil,Gc=Fi.ReactCurrentDispatcher,Tm=Fi.ReactCurrentOwner,re=0,Rt=null,at=null,Mt=0,Ti=0,Ah=ri(0),yt=0,Du=null,Yo=0,ja=0,Xo=0,Rm=0,zh=null,$m=0,Ih=1/0;function Ko(){Ih=Ct()+500}var X=null,qc=!1,Dh=null,jn=null,qr=!1,Hs=null,Ps=90,Fh=[],jh=[],ur=null,Us=0,Bh=null,ac=-1,ir=0,lc=0,Ys=null,cc=!1;function Xt(){return(re&48)!==0?Ct():ac!==-1?ac:ac=Ct()}function Dr(e){if(e=e.mode,(e&2)===0)return 1;if((e&4)===0)return $o()===99?1:2;if(ir===0&&(ir=Yo),$C.transition!==0){lc!==0&&(lc=zh!==null?zh.pendingLanes:0),e=ir;var t=4186112&~lc;return t&=-t,t===0&&(e=4186112&~e,t=e&-e,t===0&&(t=8192)),t}return e=$o(),(re&4)!==0&&e===98?e=$c(12,ir):(e=zk(e),e=$c(e,ir)),e}function Fr(e,t,n){if(50<Us)throw Us=0,Bh=null,Error(B(185));if(e=Fu(e,t),e===null)return null;Tu(e,t,n),e===Rt&&(Xo|=t,yt===4&&wo(e,Mt));var r=$o();t===1?(re&8)!==0&&(re&48)===0?Vh(e):(dn(e,n),re===0&&(Ko(),Xn())):((re&4)===0||r!==98&&r!==99||(ur===null?ur=new Set([e]):ur.add(e)),dn(e,n)),zh=e}function Fu(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}function dn(e,t){for(var n=e.callbackNode,r=e.suspendedLanes,i=e.pingedLanes,o=e.expirationTimes,s=e.pendingLanes;0<s;){var a=31-Kr(s),l=1<<a,c=o[a];if(c===-1){if((l&r)===0||(l&i)!==0){c=t,no(l);var u=Te;o[a]=10<=u?c+250:6<=u?c+5e3:-1}}else c<=t&&(e.expiredLanes|=l);s&=~l}if(r=la(e,e===Rt?Mt:0),t=Te,r===0)n!==null&&(n!==pf&&Sh(n),e.callbackNode=null,e.callbackPriority=0);else{if(n!==null){if(e.callbackPriority===t)return;n!==pf&&Sh(n)}t===15?(n=Vh.bind(null,e),nr===null?(nr=[n],sc=xm(zu,Ub)):nr.push(n),n=pf):t===14?n=fa(99,Vh.bind(null,e)):(n=Ik(t),n=fa(n,p2.bind(null,e))),e.callbackPriority=t,e.callbackNode=n}}function p2(e){if(ac=-1,lc=ir=0,(re&48)!==0)throw Error(B(327));var t=e.callbackNode;if(ii()&&e.callbackNode!==t)return null;var n=la(e,e===Rt?Mt:0);if(n===0)return null;var r=n,i=re;re|=16;var o=y2();(Rt!==e||Mt!==r)&&(Ko(),_o(e,r));do try{GC();break}catch(a){v2(e,a)}while(1);if(bm(),Gc.current=o,re=i,at!==null?r=0:(Rt=null,Mt=0,r=yt),(Yo&Xo)!==0)_o(e,0);else if(r!==0){if(r===2&&(re|=64,e.hydrate&&(e.hydrate=!1,vm(e.containerInfo)),n=Sb(e),n!==0&&(r=Ms(e,n))),r===1)throw t=Du,_o(e,0),wo(e,n),dn(e,Ct()),t;switch(e.finishedWork=e.current.alternate,e.finishedLanes=n,r){case 0:case 1:throw Error(B(345));case 2:hi(e);break;case 3:if(wo(e,n),(n&62914560)===n&&(r=$m+500-Ct(),10<r)){if(la(e,0)!==0)break;if(i=e.suspendedLanes,(i&n)!==n){Xt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=H0(hi.bind(null,e),r);break}hi(e);break;case 4:if(wo(e,n),(n&4186112)===n)break;for(r=e.eventTimes,i=-1;0<n;){var s=31-Kr(n);o=1<<s,s=r[s],s>i&&(i=s),n&=~o}if(n=i,n=Ct()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*YC(n/1960))-n,10<n){e.timeoutHandle=H0(hi.bind(null,e),n);break}hi(e);break;case 5:hi(e);break;default:throw Error(B(329))}}return dn(e,Ct()),e.callbackNode===t?p2.bind(null,e):null}function wo(e,t){for(t&=~Rm,t&=~Xo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Kr(t),r=1<<n;e[n]=-1,t&=~r}}function Vh(e){if((re&48)!==0)throw Error(B(327));if(ii(),e===Rt&&(e.expiredLanes&Mt)!==0){var t=Mt,n=Ms(e,t);(Yo&Xo)!==0&&(t=la(e,t),n=Ms(e,t))}else t=la(e,0),n=Ms(e,t);if(e.tag!==0&&n===2&&(re|=64,e.hydrate&&(e.hydrate=!1,vm(e.containerInfo)),t=Sb(e),t!==0&&(n=Ms(e,t))),n===1)throw n=Du,_o(e,0),wo(e,t),dn(e,Ct()),n;return e.finishedWork=e.current.alternate,e.finishedLanes=t,hi(e),dn(e,Ct()),null}function XC(){if(ur!==null){var e=ur;ur=null,e.forEach(function(t){t.expiredLanes|=24&t.pendingLanes,dn(t,Ct())})}Xn()}function m2(e,t){var n=re;re|=1;try{return e(t)}finally{re=n,re===0&&(Ko(),Xn())}}function g2(e,t){var n=re;re&=-2,re|=8;try{return e(t)}finally{re=n,re===0&&(Ko(),Xn())}}function kl(e,t){Ke(Ah,Ti),Ti|=t,Yo|=t}function Lm(){Ti=Ah.current,Ae(Ah)}function _o(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,MC(n)),at!==null)for(n=at.return;n!==null;){var r=n;switch(r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ic();break;case 3:Lo(),Ae(Bt),Ae(Et),km();break;case 5:Sm(r);break;case 4:Lo();break;case 13:Ae(Ye);break;case 19:Ae(Ye);break;case 10:wm(r);break;case 23:case 24:Lm()}n=n.return}Rt=e,at=Qr(e.current,null),Mt=Ti=Yo=t,yt=0,Du=null,Rm=Xo=ja=0}function v2(e,t){do{var n=at;try{if(bm(),Vs.current=Kc,Hc){for(var r=Je.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Hc=!1}if(ga=0,gt=St=Je=null,Ws=!1,Tm.current=null,n===null||n.return===null){yt=1,Du=t,at=null;break}e:{var o=e,s=n.return,a=n,l=t;if(t=Mt,a.flags|=2048,a.firstEffect=a.lastEffect=null,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l;if((a.mode&2)===0){var u=a.alternate;u?(a.updateQueue=u.updateQueue,a.memoizedState=u.memoizedState,a.lanes=u.lanes):(a.updateQueue=null,a.memoizedState=null)}var d=(Ye.current&1)!==0,h=s;do{var m;if(m=h.tag===13){var y=h.memoizedState;if(y!==null)m=y.dehydrated!==null;else{var v=h.memoizedProps;m=v.fallback===void 0?!1:v.unstable_avoidThisFallback!==!0?!0:!d}}if(m){var p=h.updateQueue;if(p===null){var g=new Set;g.add(c),h.updateQueue=g}else p.add(c);if((h.mode&2)===0){if(h.flags|=64,a.flags|=16384,a.flags&=-2981,a.tag===1)if(a.alternate===null)a.tag=17;else{var x=zr(-1,1);x.tag=2,Ir(a,x)}a.lanes|=1;break e}l=void 0,a=t;var b=o.pingCache;if(b===null?(b=o.pingCache=new BC,l=new Set,b.set(c,l)):(l=b.get(c),l===void 0&&(l=new Set,b.set(c,l))),!l.has(a)){l.add(a);var w=e5.bind(null,o,c,a);c.then(w,w)}h.flags|=4096,h.lanes=t;break e}h=h.return}while(h!==null);l=Error((po(a.type)||"A React component")+` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`)}yt!==5&&(yt=2),l=Nm(l,a),h=s;do{switch(h.tag){case 3:o=l,h.flags|=4096,t&=-t,h.lanes|=t;var S=d2(h,o,t);Q0(h,S);break e;case 1:o=l;var C=h.type,P=h.stateNode;if((h.flags&64)===0&&(typeof C.getDerivedStateFromError=="function"||P!==null&&typeof P.componentDidCatch=="function"&&(jn===null||!jn.has(P)))){h.flags|=4096,t&=-t,h.lanes|=t;var M=f2(h,o,t);Q0(h,M);break e}}h=h.return}while(h!==null)}b2(n)}catch(O){t=O,at===n&&n!==null&&(at=n=n.return);continue}break}while(1)}function y2(){var e=Gc.current;return Gc.current=Kc,e===null?Kc:e}function Ms(e,t){var n=re;re|=16;var r=y2();Rt===e&&Mt===t||_o(e,t);do try{KC();break}catch(i){v2(e,i)}while(1);if(bm(),re=n,Gc.current=r,at!==null)throw Error(B(261));return Rt=null,Mt=0,yt}function KC(){for(;at!==null;)x2(at)}function GC(){for(;at!==null&&!NC();)x2(at)}function x2(e){var t=_2(e.alternate,e,Ti);e.memoizedProps=e.pendingProps,t===null?b2(e):at=t,Tm.current=null}function b2(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&2048)===0){if(n=FC(n,t,Ti),n!==null){at=n;return}if(n=t,n.tag!==24&&n.tag!==23||n.memoizedState===null||(Ti&1073741824)!==0||(n.mode&4)===0){for(var r=0,i=n.child;i!==null;)r|=i.lanes|i.childLanes,i=i.sibling;n.childLanes=r}e!==null&&(e.flags&2048)===0&&(e.firstEffect===null&&(e.firstEffect=t.firstEffect),t.lastEffect!==null&&(e.lastEffect!==null&&(e.lastEffect.nextEffect=t.firstEffect),e.lastEffect=t.lastEffect),1<t.flags&&(e.lastEffect!==null?e.lastEffect.nextEffect=t:e.firstEffect=t,e.lastEffect=t))}else{if(n=jC(t),n!==null){n.flags&=2047,at=n;return}e!==null&&(e.firstEffect=e.lastEffect=null,e.flags|=2048)}if(t=t.sibling,t!==null){at=t;return}at=t=e}while(t!==null);yt===0&&(yt=5)}function hi(e){var t=$o();return Ni(99,qC.bind(null,e,t)),null}function qC(e,t){do ii();while(Hs!==null);if((re&48)!==0)throw Error(B(327));var n=e.finishedWork;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(B(177));e.callbackNode=null;var r=n.lanes|n.childLanes,i=r,o=e.pendingLanes&~i;e.pendingLanes=i,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=i,e.mutableReadLanes&=i,e.entangledLanes&=i,i=e.entanglements;for(var s=e.eventTimes,a=e.expirationTimes;0<o;){var l=31-Kr(o),c=1<<l;i[l]=0,s[l]=-1,a[l]=-1,o&=~c}if(ur!==null&&(r&24)===0&&ur.has(e)&&ur.delete(e),e===Rt&&(at=Rt=null,Mt=0),1<n.flags?n.lastEffect!==null?(n.lastEffect.nextEffect=n,r=n.firstEffect):r=n:r=n.firstEffect,r!==null){if(i=re,re|=32,Tm.current=null,df=nc,s=I0(),yh(s)){if("selectionStart"in s)a={start:s.selectionStart,end:s.selectionEnd};else e:if(a=(a=s.ownerDocument)&&a.defaultView||window,(c=a.getSelection&&a.getSelection())&&c.rangeCount!==0){a=c.anchorNode,o=c.anchorOffset,l=c.focusNode,c=c.focusOffset;try{a.nodeType,l.nodeType}catch{a=null;break e}var u=0,d=-1,h=-1,m=0,y=0,v=s,p=null;t:for(;;){for(var g;v!==a||o!==0&&v.nodeType!==3||(d=u+o),v!==l||c!==0&&v.nodeType!==3||(h=u+c),v.nodeType===3&&(u+=v.nodeValue.length),(g=v.firstChild)!==null;)p=v,v=g;for(;;){if(v===s)break t;if(p===a&&++m===o&&(d=u),p===l&&++y===c&&(h=u),(g=v.nextSibling)!==null)break;v=p,p=v.parentNode}v=g}a=d===-1||h===-1?null:{start:d,end:h}}else a=null;a=a||{start:0,end:0}}else a=null;ff={focusedElem:s,selectionRange:a},nc=!1,Ys=null,cc=!1,X=r;do try{QC()}catch(O){if(X===null)throw Error(B(330));jr(X,O),X=X.nextEffect}while(X!==null);Ys=null,X=r;do try{for(s=e;X!==null;){var x=X.flags;if(x&16&&ia(X.stateNode,""),x&128){var b=X.alternate;if(b!==null){var w=b.ref;w!==null&&(typeof w=="function"?w(null):w.current=null)}}switch(x&1038){case 2:_v(X),X.flags&=-3;break;case 6:_v(X),X.flags&=-3,xf(X.alternate,X);break;case 1024:X.flags&=-1025;break;case 1028:X.flags&=-1025,xf(X.alternate,X);break;case 4:xf(X.alternate,X);break;case 8:a=X,h2(s,a);var S=a.alternate;bv(a),S!==null&&bv(S)}X=X.nextEffect}}catch(O){if(X===null)throw Error(B(330));jr(X,O),X=X.nextEffect}while(X!==null);if(w=ff,b=I0(),x=w.focusedElem,s=w.selectionRange,b!==x&&x&&x.ownerDocument&&Tb(x.ownerDocument.documentElement,x)){for(s!==null&&yh(x)&&(b=s.start,w=s.end,w===void 0&&(w=b),"selectionStart"in x?(x.selectionStart=b,x.selectionEnd=Math.min(w,x.value.length)):(w=(b=x.ownerDocument||document)&&b.defaultView||window,w.getSelection&&(w=w.getSelection(),a=x.textContent.length,S=Math.min(s.start,a),s=s.end===void 0?S:Math.min(s.end,a),!w.extend&&S>s&&(a=s,s=S,S=a),a=z0(x,S),o=z0(x,s),a&&o&&(w.rangeCount!==1||w.anchorNode!==a.node||w.anchorOffset!==a.offset||w.focusNode!==o.node||w.focusOffset!==o.offset)&&(b=b.createRange(),b.setStart(a.node,a.offset),w.removeAllRanges(),S>s?(w.addRange(b),w.extend(o.node,o.offset)):(b.setEnd(o.node,o.offset),w.addRange(b)))))),b=[],w=x;w=w.parentNode;)w.nodeType===1&&b.push({element:w,left:w.scrollLeft,top:w.scrollTop});for(typeof x.focus=="function"&&x.focus(),x=0;x<b.length;x++)w=b[x],w.element.scrollLeft=w.left,w.element.scrollTop=w.top}nc=!!df,ff=df=null,e.current=n,X=r;do try{for(x=e;X!==null;){var C=X.flags;if(C&36&&HC(x,X.alternate,X),C&128){b=void 0;var P=X.ref;if(P!==null){var M=X.stateNode;switch(X.tag){case 5:b=M;break;default:b=M}typeof P=="function"?P(b):P.current=b}}X=X.nextEffect}}catch(O){if(X===null)throw Error(B(330));jr(X,O),X=X.nextEffect}while(X!==null);X=null,RC(),re=i}else e.current=n;if(qr)qr=!1,Hs=e,Ps=t;else for(X=r;X!==null;)t=X.nextEffect,X.nextEffect=null,X.flags&8&&(C=X,C.sibling=null,C.stateNode=null),X=t;if(r=e.pendingLanes,r===0&&(jn=null),r===1?e===Bh?Us++:(Us=0,Bh=e):Us=0,n=n.stateNode,Pi&&typeof Pi.onCommitFiberRoot=="function")try{Pi.onCommitFiberRoot(ym,n,void 0,(n.current.flags&64)===64)}catch{}if(dn(e,Ct()),qc)throw qc=!1,e=Dh,Dh=null,e;return(re&8)!==0||Xn(),null}function QC(){for(;X!==null;){var e=X.alternate;cc||Ys===null||((X.flags&8)!==0?_0(X,Ys)&&(cc=!0):X.tag===13&&UC(e,X)&&_0(X,Ys)&&(cc=!0));var t=X.flags;(t&256)!==0&&WC(e,X),(t&512)===0||qr||(qr=!0,fa(97,function(){return ii(),null})),X=X.nextEffect}}function ii(){if(Ps!==90){var e=97<Ps?97:Ps;return Ps=90,Ni(e,JC)}return!1}function ZC(e,t){Fh.push(t,e),qr||(qr=!0,fa(97,function(){return ii(),null}))}function w2(e,t){jh.push(t,e),qr||(qr=!0,fa(97,function(){return ii(),null}))}function JC(){if(Hs===null)return!1;var e=Hs;if(Hs=null,(re&48)!==0)throw Error(B(331));var t=re;re|=32;var n=jh;jh=[];for(var r=0;r<n.length;r+=2){var i=n[r],o=n[r+1],s=i.destroy;if(i.destroy=void 0,typeof s=="function")try{s()}catch(l){if(o===null)throw Error(B(330));jr(o,l)}}for(n=Fh,Fh=[],r=0;r<n.length;r+=2){i=n[r],o=n[r+1];try{var a=i.create;i.destroy=a()}catch(l){if(o===null)throw Error(B(330));jr(o,l)}}for(a=e.current.firstEffect;a!==null;)e=a.nextEffect,a.nextEffect=null,a.flags&8&&(a.sibling=null,a.stateNode=null),a=e;return re=t,Xn(),!0}function kv(e,t,n){t=Nm(n,t),t=d2(e,t,1),Ir(e,t),t=Xt(),e=Fu(e,1),e!==null&&(Tu(e,1,t),dn(e,t))}function jr(e,t){if(e.tag===3)kv(e,e,t);else for(var n=e.return;n!==null;){if(n.tag===3){kv(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(jn===null||!jn.has(r))){e=Nm(t,e);var i=f2(n,e,1);if(Ir(n,i),i=Xt(),n=Fu(n,1),n!==null)Tu(n,1,i),dn(n,i);else if(typeof r.componentDidCatch=="function"&&(jn===null||!jn.has(r)))try{r.componentDidCatch(t,e)}catch{}break}}n=n.return}}function e5(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Xt(),e.pingedLanes|=e.suspendedLanes&n,Rt===e&&(Mt&n)===n&&(yt===4||yt===3&&(Mt&62914560)===Mt&&500>Ct()-$m?_o(e,0):Rm|=n),dn(e,t)}function t5(e,t){var n=e.stateNode;n!==null&&n.delete(t),t=0,t===0&&(t=e.mode,(t&2)===0?t=1:(t&4)===0?t=$o()===99?1:2:(ir===0&&(ir=Yo),t=ro(62914560&~ir),t===0&&(t=4194304))),n=Xt(),e=Fu(e,t),e!==null&&(Tu(e,t,n),dn(e,n))}var _2;_2=function(e,t,n){var r=t.lanes;if(e!==null)if(e.memoizedProps!==t.pendingProps||Bt.current)_n=!0;else if((n&r)!==0)_n=(e.flags&16384)!==0;else{switch(_n=!1,t.tag){case 3:uv(t),gf();break;case 5:tv(t);break;case 1:Vt(t.type)&&oc(t);break;case 4:Ph(t,t.stateNode.containerInfo);break;case 10:r=t.memoizedProps.value;var i=t.type._context;Ke(Dc,i._currentValue),i._currentValue=r;break;case 13:if(t.memoizedState!==null)return(n&t.child.childLanes)!==0?dv(e,t,n):(Ke(Ye,Ye.current&1),t=sr(e,t,n),t!==null?t.sibling:null);Ke(Ye,Ye.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&64)!==0){if(r)return gv(e,t,n);t.flags|=64}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ke(Ye,Ye.current),r)break;return null;case 23:case 24:return t.lanes=0,vf(e,t,n)}return sr(e,t,n)}else _n=!1;switch(t.lanes=0,t.tag){case 2:if(r=t.type,e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2),e=t.pendingProps,i=Ro(t,Et.current),xo(t,n),i=Pm(null,t,r,e,i,n),t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0){if(t.tag=1,t.memoizedState=null,t.updateQueue=null,Vt(r)){var o=!0;oc(t)}else o=!1;t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,_m(t);var s=r.getDerivedStateFromProps;typeof s=="function"&&Bc(t,r,s,e),i.updater=Iu,t.stateNode=i,i._reactInternals=t,Ch(t,r,e,n),t=Nh(null,t,r,!0,o,n)}else t.tag=0,Ft(null,t,i,n),t=t.child;return t;case 16:i=t.elementType;e:{switch(e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2),e=t.pendingProps,o=i._init,i=o(i._payload),t.type=i,o=t.tag=r5(i),e=bn(i,e),o){case 0:t=Oh(null,t,i,e,n);break e;case 1:t=cv(null,t,i,e,n);break e;case 11:t=av(null,t,i,e,n);break e;case 14:t=lv(null,t,i,bn(i.type,e),r,n);break e}throw Error(B(306,i,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:bn(r,i),Oh(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:bn(r,i),cv(e,t,r,i,n);case 3:if(uv(t),r=t.updateQueue,e===null||r===null)throw Error(B(282));if(r=t.pendingProps,i=t.memoizedState,i=i!==null?i.element:null,Xb(e,t),ha(t,r,null,n),r=t.memoizedState.element,r===i)gf(),t=sr(e,t,n);else{if(i=t.stateNode,(o=i.hydrate)&&(Cr=yo(t.stateNode.containerInfo.firstChild),or=t,o=Vn=!0),o){if(e=i.mutableSourceEagerHydrationData,e!=null)for(i=0;i<e.length;i+=2)o=e[i],o._workInProgressVersionPrimary=e[i+1],bo.push(o);for(n=Qb(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|1024,n=n.sibling}else Ft(e,t,r,n),gf();t=t.child}return t;case 5:return tv(t),e===null&&Mh(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,wh(r,i)?s=null:o!==null&&wh(r,o)&&(t.flags|=16),a2(e,t),Ft(e,t,s,n),t.child;case 6:return e===null&&Mh(t),null;case 13:return dv(e,t,n);case 4:return Ph(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Vc(t,null,r,n):Ft(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:bn(r,i),av(e,t,r,i,n);case 7:return Ft(e,t,t.pendingProps,n),t.child;case 8:return Ft(e,t,t.pendingProps.children,n),t.child;case 12:return Ft(e,t,t.pendingProps.children,n),t.child;case 10:e:{r=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value;var a=t.type._context;if(Ke(Dc,a._currentValue),a._currentValue=o,s!==null)if(a=s.value,o=sn(a,o)?0:(typeof r._calculateChangedBits=="function"?r._calculateChangedBits(a,o):1073741823)|0,o===0){if(s.children===i.children&&!Bt.current){t=sr(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var l=a.dependencies;if(l!==null){s=a.child;for(var c=l.firstContext;c!==null;){if(c.context===r&&(c.observedBits&o)!==0){a.tag===1&&(c=zr(-1,n&-n),c.tag=2,Ir(a,c)),a.lanes|=n,c=a.alternate,c!==null&&(c.lanes|=n),Yb(a.return,n),l.lanes|=n;break}c=c.next}}else s=a.tag===10&&a.type===t.type?null:a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===t){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}Ft(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,o=t.pendingProps,r=o.children,xo(t,n),i=un(i,o.unstable_observedBits),r=r(i),t.flags|=1,Ft(e,t,r,n),t.child;case 14:return i=t.type,o=bn(i,t.pendingProps),o=bn(i.type,o),lv(e,t,i,o,r,n);case 15:return s2(e,t,t.type,t.pendingProps,r,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:bn(r,i),e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2),t.tag=1,Vt(r)?(e=!0,oc(t)):e=!1,xo(t,n),Gb(t,r,i),Ch(t,r,i,n),Nh(null,t,r,!0,e,n);case 19:return gv(e,t,n);case 23:return vf(e,t,n);case 24:return vf(e,t,n)}throw Error(B(156,t.tag))};function n5(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.flags=0,this.lastEffect=this.firstEffect=this.nextEffect=null,this.childLanes=this.lanes=0,this.alternate=null}function an(e,t,n,r){return new n5(e,t,n,r)}function Am(e){return e=e.prototype,!(!e||!e.isReactComponent)}function r5(e){if(typeof e=="function")return Am(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Eu)return 11;if(e===Ou)return 14}return 2}function Qr(e,t){var n=e.alternate;return n===null?(n=an(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.nextEffect=null,n.firstEffect=null,n.lastEffect=null),n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function uc(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")Am(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case br:return So(n.children,i,o,t);case Zx:s=8,i|=16;break;case Qp:s=8,i|=1;break;case As:return e=an(12,n,t,i|8),e.elementType=As,e.type=As,e.lanes=o,e;case zs:return e=an(13,n,t,i),e.type=zs,e.elementType=zs,e.lanes=o,e;case Oc:return e=an(19,n,t,i),e.elementType=Oc,e.lanes=o,e;case rm:return zm(n,i,o,t);case rh:return e=an(24,n,t,i),e.elementType=rh,e.lanes=o,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Zp:s=10;break e;case Jp:s=9;break e;case Eu:s=11;break e;case Ou:s=14;break e;case em:s=16,r=null;break e;case tm:s=22;break e}throw Error(B(130,e==null?e:typeof e,""))}return t=an(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function So(e,t,n,r){return e=an(7,e,r,t),e.lanes=n,e}function zm(e,t,n,r){return e=an(23,e,r,t),e.elementType=rm,e.lanes=n,e}function bf(e,t,n){return e=an(6,e,null,t),e.lanes=n,e}function wf(e,t,n){return t=an(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function i5(e,t,n){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.pendingContext=this.context=null,this.hydrate=n,this.callbackNode=null,this.callbackPriority=0,this.eventTimes=rf(0),this.expirationTimes=rf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=rf(0),this.mutableSourceEagerHydrationData=null}function o5(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:xi,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Qc(e,t,n,r){var i=t.current,o=Xt(),s=Dr(i);e:if(n){n=n._reactInternals;t:{if(ji(n)!==n||n.tag!==1)throw Error(B(170));var a=n;do{switch(a.tag){case 3:a=a.stateNode.context;break t;case 1:if(Vt(a.type)){a=a.stateNode.__reactInternalMemoizedMergedChildContext;break t}}a=a.return}while(a!==null);throw Error(B(171))}if(n.tag===1){var l=n.type;if(Vt(l)){n=Fb(n,l,a);break e}}n=a}else n=Gr;return t.context===null?t.context=n:t.pendingContext=n,t=zr(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),Ir(i,t),Fr(i,s,o),s}function _f(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Cv(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Im(e,t){Cv(e,t),(e=e.alternate)&&Cv(e,t)}function s5(){return null}function Dm(e,t,n){var r=n!=null&&n.hydrationOptions!=null&&n.hydrationOptions.mutableSources||null;if(n=new i5(e,t,n!=null&&n.hydrate===!0),t=an(3,null,null,t===2?7:t===1?3:0),n.current=t,t.stateNode=n,_m(t),e[Uo]=n.current,Lb(e.nodeType===8?e.parentNode:e),r)for(e=0;e<r.length;e++){t=r[e];var i=t._getVersion;i=i(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i)}this._internalRoot=n}Dm.prototype.render=function(e){Qc(e,this._internalRoot,null,null)};Dm.prototype.unmount=function(){var e=this._internalRoot,t=e.containerInfo;Qc(null,e,null,function(){t[Uo]=null})};function Ba(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function a5(e,t){if(t||(t=e?e.nodeType===9?e.documentElement:e.firstChild:null,t=!(!t||t.nodeType!==1||!t.hasAttribute("data-reactroot"))),!t)for(var n;n=e.lastChild;)e.removeChild(n);return new Dm(e,0,t?{hydrate:!0}:void 0)}function ju(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o._internalRoot;if(typeof i=="function"){var a=i;i=function(){var c=_f(s);a.call(c)}}Qc(t,s,e,i)}else{if(o=n._reactRootContainer=a5(n,r),s=o._internalRoot,typeof i=="function"){var l=i;i=function(){var c=_f(s);l.call(c)}}g2(function(){Qc(t,s,e,i)})}return _f(s)}hb=function(e){if(e.tag===13){var t=Xt();Fr(e,4,t),Im(e,4)}};lm=function(e){if(e.tag===13){var t=Xt();Fr(e,67108864,t),Im(e,67108864)}};pb=function(e){if(e.tag===13){var t=Xt(),n=Dr(e);Fr(e,n,t),Im(e,n)}};mb=function(e,t){return t()};hh=function(e,t,n){switch(t){case"input":if(oh(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Au(r);if(!i)throw Error(B(90));eb(r),oh(r,i)}}}break;case"textarea":nb(e,n);break;case"select":t=n.value,t!=null&&mo(e,!!n.multiple,t,!1)}};om=m2;cb=function(e,t,n,r,i){var o=re;re|=4;try{return Ni(98,e.bind(null,t,n,r,i))}finally{re=o,re===0&&(Ko(),Xn())}};sm=function(){(re&49)===0&&(XC(),ii())};ub=function(e,t){var n=re;re|=2;try{return e(t)}finally{re=n,re===0&&(Ko(),Xn())}};function S2(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ba(t))throw Error(B(200));return o5(e,t,null,n)}var l5={Events:[Da,ao,Au,ab,lb,ii,{current:!1}]},ps={findFiberByHostInstance:wi,bundleType:0,version:"17.0.2",rendererPackageName:"react-dom"},c5={bundleType:ps.bundleType,version:ps.version,rendererPackageName:ps.rendererPackageName,rendererConfig:ps.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Fi.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=fb(e),e===null?null:e.stateNode},findFiberByHostInstance:ps.findFiberByHostInstance||s5,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var Cl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Cl.isDisabled&&Cl.supportsFiber)try{ym=Cl.inject(c5),Pi=Cl}catch{}}hn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=l5;hn.createPortal=S2;hn.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(B(188)):Error(B(268,Object.keys(e)));return e=fb(t),e=e===null?null:e.stateNode,e};hn.flushSync=function(e,t){var n=re;if((n&48)!==0)return e(t);re|=1;try{if(e)return Ni(99,e.bind(null,t))}finally{re=n,Xn()}};hn.hydrate=function(e,t,n){if(!Ba(t))throw Error(B(200));return ju(null,e,t,!0,n)};hn.render=function(e,t,n){if(!Ba(t))throw Error(B(200));return ju(null,e,t,!1,n)};hn.unmountComponentAtNode=function(e){if(!Ba(e))throw Error(B(40));return e._reactRootContainer?(g2(function(){ju(null,null,e,!1,function(){e._reactRootContainer=null,e[Uo]=null})}),!0):!1};hn.unstable_batchedUpdates=m2;hn.unstable_createPortal=function(e,t){return S2(e,t,2<arguments.length&&arguments[2]!==void 0?arguments[2]:null)};hn.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ba(n))throw Error(B(200));if(e==null||e._reactInternals===void 0)throw Error(B(38));return ju(e,t,n,!1,r)};hn.version="17.0.2";function k2(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(k2)}catch(e){console.error(e)}}k2(),Pu.exports=hn;var C2=Pu.exports,u5=Lx({__proto__:null,default:C2},[Pu.exports]);/**
 * @remix-run/router v1.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function va(){return va=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},va.apply(this,arguments)}var Pr;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Pr||(Pr={}));const Pv="popstate";function d5(e){e===void 0&&(e={});function t(i,o){let{pathname:s="/",search:a="",hash:l=""}=Vi(i.location.hash.substr(1));return!s.startsWith("/")&&!s.startsWith(".")&&(s="/"+s),Wh("",{pathname:s,search:a,hash:l},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(i,o){let s=i.document.querySelector("base"),a="";if(s&&s.getAttribute("href")){let l=i.location.href,c=l.indexOf("#");a=c===-1?l:l.slice(0,c)}return a+"#"+(typeof o=="string"?o:Zc(o))}function r(i,o){Fm(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(o)+")")}return h5(t,n,r,e)}function et(e,t){if(e===!1||e===null||typeof e=="undefined")throw new Error(t)}function Fm(e,t){if(!e){typeof console!="undefined"&&console.warn(t);try{throw new Error(t)}catch{}}}function f5(){return Math.random().toString(36).substr(2,8)}function Mv(e,t){return{usr:e.state,key:e.key,idx:t}}function Wh(e,t,n,r){return n===void 0&&(n=null),va({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Vi(t):t,{state:n,key:t&&t.key||r||f5()})}function Zc(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Vi(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function h5(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=Pr.Pop,l=null,c=u();c==null&&(c=0,s.replaceState(va({},s.state,{idx:c}),""));function u(){return(s.state||{idx:null}).idx}function d(){a=Pr.Pop;let p=u(),g=p==null?null:p-c;c=p,l&&l({action:a,location:v.location,delta:g})}function h(p,g){a=Pr.Push;let x=Wh(v.location,p,g);n&&n(x,p),c=u()+1;let b=Mv(x,c),w=v.createHref(x);try{s.pushState(b,"",w)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;i.location.assign(w)}o&&l&&l({action:a,location:v.location,delta:1})}function m(p,g){a=Pr.Replace;let x=Wh(v.location,p,g);n&&n(x,p),c=u();let b=Mv(x,c),w=v.createHref(x);s.replaceState(b,"",w),o&&l&&l({action:a,location:v.location,delta:0})}function y(p){let g=i.location.origin!=="null"?i.location.origin:i.location.href,x=typeof p=="string"?p:Zc(p);return x=x.replace(/ $/,"%20"),et(g,"No window.location.(origin|href) available to create URL for href: "+x),new URL(x,g)}let v={get action(){return a},get location(){return e(i,s)},listen(p){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Pv,d),l=p,()=>{i.removeEventListener(Pv,d),l=null}},createHref(p){return t(i,p)},createURL:y,encodeLocation(p){let g=y(p);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:h,replace:m,go(p){return s.go(p)}};return v}var Ev;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Ev||(Ev={}));function p5(e,t,n){return n===void 0&&(n="/"),m5(e,t,n,!1)}function m5(e,t,n,r){let i=typeof t=="string"?Vi(t):t,o=jm(i.pathname||"/",n);if(o==null)return null;let s=P2(e);g5(s);let a=null;for(let l=0;a==null&&l<s.length;++l){let c=M5(o);a=C5(s[l],c,r)}return a}function P2(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,a)=>{let l={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};l.relativePath.startsWith("/")&&(et(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let c=Br([r,l.relativePath]),u=n.concat(l);o.children&&o.children.length>0&&(et(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),P2(o.children,t,u,c)),!(o.path==null&&!o.index)&&t.push({path:c,score:S5(c,o.index),routesMeta:u})};return e.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,s);else for(let l of M2(o.path))i(o,s,l)}),t}function M2(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=M2(r.join("/")),a=[];return a.push(...s.map(l=>l===""?o:[o,l].join("/"))),i&&a.push(...s),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function g5(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:k5(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const v5=/^:[\w-]+$/,y5=3,x5=2,b5=1,w5=10,_5=-2,Ov=e=>e==="*";function S5(e,t){let n=e.split("/"),r=n.length;return n.some(Ov)&&(r+=_5),t&&(r+=x5),n.filter(i=>!Ov(i)).reduce((i,o)=>i+(v5.test(o)?y5:o===""?b5:w5),r)}function k5(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function C5(e,t,n){n===void 0&&(n=!1);let{routesMeta:r}=e,i={},o="/",s=[];for(let a=0;a<r.length;++a){let l=r[a],c=a===r.length-1,u=o==="/"?t:t.slice(o.length)||"/",d=Nv({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},u),h=l.route;if(!d&&c&&n&&!r[r.length-1].route.index&&(d=Nv({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},u)),!d)return null;Object.assign(i,d.params),s.push({params:i,pathname:Br([o,d.pathname]),pathnameBase:T5(Br([o,d.pathnameBase])),route:h}),d.pathnameBase!=="/"&&(o=Br([o,d.pathnameBase]))}return s}function Nv(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=P5(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,u,d)=>{let{paramName:h,isOptional:m}=u;if(h==="*"){let v=a[d]||"";s=o.slice(0,o.length-v.length).replace(/(.)\/+$/,"$1")}const y=a[d];return m&&!y?c[h]=void 0:c[h]=(y||"").replace(/%2F/g,"/"),c},{}),pathname:o,pathnameBase:s,pattern:e}}function P5(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Fm(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function M5(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Fm(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function jm(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function E5(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Vi(e):e;return{pathname:n?n.startsWith("/")?n:O5(n,t):t,search:R5(r),hash:$5(i)}}function O5(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Sf(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function N5(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Bm(e,t){let n=N5(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Vm(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Vi(e):(i=va({},e),et(!i.pathname||!i.pathname.includes("?"),Sf("?","pathname","search",i)),et(!i.pathname||!i.pathname.includes("#"),Sf("#","pathname","hash",i)),et(!i.search||!i.search.includes("#"),Sf("#","search","hash",i)));let o=e===""||i.pathname==="",s=o?"/":i.pathname,a;if(s==null)a=n;else{let d=t.length-1;if(!r&&s.startsWith("..")){let h=s.split("/");for(;h[0]==="..";)h.shift(),d-=1;i.pathname=h.join("/")}a=d>=0?t[d]:"/"}let l=E5(i,a),c=s&&s!=="/"&&s.endsWith("/"),u=(o||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||u)&&(l.pathname+="/"),l}const Br=e=>e.join("/").replace(/\/\/+/g,"/"),T5=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),R5=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,$5=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function L5(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const A5=["post","put","patch","delete"];[...A5];/**
 * React Router v6.25.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ya(){return ya=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ya.apply(this,arguments)}const Wm=_.exports.createContext(null),z5=_.exports.createContext(null),oi=_.exports.createContext(null),Bu=_.exports.createContext(null),Kn=_.exports.createContext({outlet:null,matches:[],isDataRoute:!1}),E2=_.exports.createContext(null);function I5(e,t){let{relative:n}=t===void 0?{}:t;Go()||et(!1);let{basename:r,navigator:i}=_.exports.useContext(oi),{hash:o,pathname:s,search:a}=N2(e,{relative:n}),l=s;return r!=="/"&&(l=s==="/"?r:Br([r,s])),i.createHref({pathname:l,search:a,hash:o})}function Go(){return _.exports.useContext(Bu)!=null}function Qt(){return Go()||et(!1),_.exports.useContext(Bu).location}function O2(e){_.exports.useContext(oi).static||_.exports.useLayoutEffect(e)}function si(){let{isDataRoute:e}=_.exports.useContext(Kn);return e?J5():D5()}function D5(){Go()||et(!1);let e=_.exports.useContext(Wm),{basename:t,future:n,navigator:r}=_.exports.useContext(oi),{matches:i}=_.exports.useContext(Kn),{pathname:o}=Qt(),s=JSON.stringify(Bm(i,n.v7_relativeSplatPath)),a=_.exports.useRef(!1);return O2(()=>{a.current=!0}),_.exports.useCallback(function(c,u){if(u===void 0&&(u={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let d=Vm(c,JSON.parse(s),o,u.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:Br([t,d.pathname])),(u.replace?r.replace:r.push)(d,u.state,u)},[t,r,s,o,e])}const F5=_.exports.createContext(null);function j5(e){let t=_.exports.useContext(Kn).outlet;return t&&_.exports.createElement(F5.Provider,{value:e},t)}function B5(){let{matches:e}=_.exports.useContext(Kn),t=e[e.length-1];return t?t.params:{}}function N2(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=_.exports.useContext(oi),{matches:i}=_.exports.useContext(Kn),{pathname:o}=Qt(),s=JSON.stringify(Bm(i,r.v7_relativeSplatPath));return _.exports.useMemo(()=>Vm(e,JSON.parse(s),o,n==="path"),[e,s,o,n])}function V5(e,t){return W5(e,t)}function W5(e,t,n,r){Go()||et(!1);let{navigator:i}=_.exports.useContext(oi),{matches:o}=_.exports.useContext(Kn),s=o[o.length-1],a=s?s.params:{};s&&s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let c=Qt(),u;if(t){var d;let p=typeof t=="string"?Vi(t):t;l==="/"||((d=p.pathname)==null?void 0:d.startsWith(l))||et(!1),u=p}else u=c;let h=u.pathname||"/",m=h;if(l!=="/"){let p=l.replace(/^\//,"").split("/"),g=h.replace(/^\//,"").split("/");m="/"+g.slice(p.length).join("/")}let y=p5(e,{pathname:m}),v=K5(y&&y.map(p=>Object.assign({},p,{params:Object.assign({},a,p.params),pathname:Br([l,i.encodeLocation?i.encodeLocation(p.pathname).pathname:p.pathname]),pathnameBase:p.pathnameBase==="/"?l:Br([l,i.encodeLocation?i.encodeLocation(p.pathnameBase).pathname:p.pathnameBase])})),o,n,r);return t&&v?_.exports.createElement(Bu.Provider,{value:{location:ya({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Pr.Pop}},v):v}function H5(){let e=Z5(),t=L5(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return _.exports.createElement(_.exports.Fragment,null,_.exports.createElement("h2",null,"Unexpected Application Error!"),_.exports.createElement("h3",{style:{fontStyle:"italic"}},t),n?_.exports.createElement("pre",{style:i},n):null,o)}const U5=_.exports.createElement(H5,null);class Y5 extends _.exports.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?_.exports.createElement(Kn.Provider,{value:this.props.routeContext},_.exports.createElement(E2.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function X5(e){let{routeContext:t,match:n,children:r}=e,i=_.exports.useContext(Wm);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),_.exports.createElement(Kn.Provider,{value:t},r)}function K5(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if((o=n)!=null&&o.errors)e=n.matches;else return null}let s=e,a=(i=n)==null?void 0:i.errors;if(a!=null){let u=s.findIndex(d=>d.route.id&&(a==null?void 0:a[d.route.id])!==void 0);u>=0||et(!1),s=s.slice(0,Math.min(s.length,u+1))}let l=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let u=0;u<s.length;u++){let d=s[u];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(c=u),d.route.id){let{loaderData:h,errors:m}=n,y=d.route.loader&&h[d.route.id]===void 0&&(!m||m[d.route.id]===void 0);if(d.route.lazy||y){l=!0,c>=0?s=s.slice(0,c+1):s=[s[0]];break}}}return s.reduceRight((u,d,h)=>{let m,y=!1,v=null,p=null;n&&(m=a&&d.route.id?a[d.route.id]:void 0,v=d.route.errorElement||U5,l&&(c<0&&h===0?(e4("route-fallback",!1),y=!0,p=null):c===h&&(y=!0,p=d.route.hydrateFallbackElement||null)));let g=t.concat(s.slice(0,h+1)),x=()=>{let b;return m?b=v:y?b=p:d.route.Component?b=_.exports.createElement(d.route.Component,null):d.route.element?b=d.route.element:b=u,_.exports.createElement(X5,{match:d,routeContext:{outlet:u,matches:g,isDataRoute:n!=null},children:b})};return n&&(d.route.ErrorBoundary||d.route.errorElement||h===0)?_.exports.createElement(Y5,{location:n.location,revalidation:n.revalidation,component:v,error:m,children:x(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):x()},null)}var T2=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(T2||{}),Jc=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Jc||{});function G5(e){let t=_.exports.useContext(Wm);return t||et(!1),t}function q5(e){let t=_.exports.useContext(z5);return t||et(!1),t}function Q5(e){let t=_.exports.useContext(Kn);return t||et(!1),t}function R2(e){let t=Q5(),n=t.matches[t.matches.length-1];return n.route.id||et(!1),n.route.id}function Z5(){var e;let t=_.exports.useContext(E2),n=q5(Jc.UseRouteError),r=R2(Jc.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function J5(){let{router:e}=G5(T2.UseNavigateStable),t=R2(Jc.UseNavigateStable),n=_.exports.useRef(!1);return O2(()=>{n.current=!0}),_.exports.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,ya({fromRouteId:t},o)))},[e,t])}const Tv={};function e4(e,t,n){!t&&!Tv[e]&&(Tv[e]=!0)}const t4="startTransition";na[t4];function n4(e){let{to:t,replace:n,state:r,relative:i}=e;Go()||et(!1);let{future:o,static:s}=_.exports.useContext(oi),{matches:a}=_.exports.useContext(Kn),{pathname:l}=Qt(),c=si(),u=Vm(t,Bm(a,o.v7_relativeSplatPath),l,i==="path"),d=JSON.stringify(u);return _.exports.useEffect(()=>c(JSON.parse(d),{replace:n,state:r,relative:i}),[c,d,i,n,r]),null}function Hm(e){return j5(e.context)}function be(e){et(!1)}function r4(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Pr.Pop,navigator:o,static:s=!1,future:a}=e;Go()&&et(!1);let l=t.replace(/^\/*/,"/"),c=_.exports.useMemo(()=>({basename:l,navigator:o,static:s,future:ya({v7_relativeSplatPath:!1},a)}),[l,a,o,s]);typeof r=="string"&&(r=Vi(r));let{pathname:u="/",search:d="",hash:h="",state:m=null,key:y="default"}=r,v=_.exports.useMemo(()=>{let p=jm(u,l);return p==null?null:{location:{pathname:p,search:d,hash:h,state:m,key:y},navigationType:i}},[l,u,d,h,m,y,i]);return v==null?null:_.exports.createElement(oi.Provider,{value:c},_.exports.createElement(Bu.Provider,{children:n,value:v}))}function i4(e){let{children:t,location:n}=e;return V5(Hh(t),n)}new Promise(()=>{});function Hh(e,t){t===void 0&&(t=[]);let n=[];return _.exports.Children.forEach(e,(r,i)=>{if(!_.exports.isValidElement(r))return;let o=[...t,i];if(r.type===_.exports.Fragment){n.push.apply(n,Hh(r.props.children,o));return}r.type!==be&&et(!1),!r.props.index||!r.props.children||et(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=Hh(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.25.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Uh(){return Uh=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Uh.apply(this,arguments)}function o4(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function s4(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function a4(e,t){return e.button===0&&(!t||t==="_self")&&!s4(e)}const l4=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],c4="6";try{window.__reactRouterVersion=c4}catch{}const u4="startTransition",Rv=na[u4],d4="flushSync";u5[d4];const f4="useId";na[f4];function h4(e){let{basename:t,children:n,future:r,window:i}=e,o=_.exports.useRef();o.current==null&&(o.current=d5({window:i,v5Compat:!0}));let s=o.current,[a,l]=_.exports.useState({action:s.action,location:s.location}),{v7_startTransition:c}=r||{},u=_.exports.useCallback(d=>{c&&Rv?Rv(()=>l(d)):l(d)},[l,c]);return _.exports.useLayoutEffect(()=>s.listen(u),[s,u]),_.exports.createElement(r4,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:s,future:r})}const p4=typeof window!="undefined"&&typeof window.document!="undefined"&&typeof window.document.createElement!="undefined",m4=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,je=_.exports.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:s,state:a,target:l,to:c,preventScrollReset:u,unstable_viewTransition:d}=t,h=o4(t,l4),{basename:m}=_.exports.useContext(oi),y,v=!1;if(typeof c=="string"&&m4.test(c)&&(y=c,p4))try{let b=new URL(window.location.href),w=c.startsWith("//")?new URL(b.protocol+c):new URL(c),S=jm(w.pathname,m);w.origin===b.origin&&S!=null?c=S+w.search+w.hash:v=!0}catch{}let p=I5(c,{relative:i}),g=g4(c,{replace:s,state:a,target:l,preventScrollReset:u,relative:i,unstable_viewTransition:d});function x(b){r&&r(b),b.defaultPrevented||g(b)}return _.exports.createElement("a",Uh({},h,{href:y||p,onClick:v||o?r:x,ref:n,target:l}))});var $v;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})($v||($v={}));var Lv;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Lv||(Lv={}));function g4(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:s,unstable_viewTransition:a}=t===void 0?{}:t,l=si(),c=Qt(),u=N2(e,{relative:s});return _.exports.useCallback(d=>{if(a4(d,n)){d.preventDefault();let h=r!==void 0?r:Zc(c)===Zc(u);l(e,{replace:h,state:i,preventScrollReset:o,relative:s,unstable_viewTransition:a})}},[c,l,u,r,i,n,e,o,s,a])}var Um={exports:{}},Ne={};/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vu=60103,Wu=60106,Va=60107,Wa=60108,Ha=60114,Ua=60109,Ya=60110,Xa=60112,Ka=60113,Ym=60120,Ga=60115,qa=60116,$2=60121,L2=60122,A2=60117,z2=60129,I2=60131;if(typeof Symbol=="function"&&Symbol.for){var mt=Symbol.for;Vu=mt("react.element"),Wu=mt("react.portal"),Va=mt("react.fragment"),Wa=mt("react.strict_mode"),Ha=mt("react.profiler"),Ua=mt("react.provider"),Ya=mt("react.context"),Xa=mt("react.forward_ref"),Ka=mt("react.suspense"),Ym=mt("react.suspense_list"),Ga=mt("react.memo"),qa=mt("react.lazy"),$2=mt("react.block"),L2=mt("react.server.block"),A2=mt("react.fundamental"),z2=mt("react.debug_trace_mode"),I2=mt("react.legacy_hidden")}function En(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Vu:switch(e=e.type,e){case Va:case Ha:case Wa:case Ka:case Ym:return e;default:switch(e=e&&e.$$typeof,e){case Ya:case Xa:case qa:case Ga:case Ua:return e;default:return t}}case Wu:return t}}}var v4=Ua,y4=Vu,x4=Xa,b4=Va,w4=qa,_4=Ga,S4=Wu,k4=Ha,C4=Wa,P4=Ka;Ne.ContextConsumer=Ya;Ne.ContextProvider=v4;Ne.Element=y4;Ne.ForwardRef=x4;Ne.Fragment=b4;Ne.Lazy=w4;Ne.Memo=_4;Ne.Portal=S4;Ne.Profiler=k4;Ne.StrictMode=C4;Ne.Suspense=P4;Ne.isAsyncMode=function(){return!1};Ne.isConcurrentMode=function(){return!1};Ne.isContextConsumer=function(e){return En(e)===Ya};Ne.isContextProvider=function(e){return En(e)===Ua};Ne.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Vu};Ne.isForwardRef=function(e){return En(e)===Xa};Ne.isFragment=function(e){return En(e)===Va};Ne.isLazy=function(e){return En(e)===qa};Ne.isMemo=function(e){return En(e)===Ga};Ne.isPortal=function(e){return En(e)===Wu};Ne.isProfiler=function(e){return En(e)===Ha};Ne.isStrictMode=function(e){return En(e)===Wa};Ne.isSuspense=function(e){return En(e)===Ka};Ne.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Va||e===Ha||e===z2||e===Wa||e===Ka||e===Ym||e===I2||typeof e=="object"&&e!==null&&(e.$$typeof===qa||e.$$typeof===Ga||e.$$typeof===Ua||e.$$typeof===Ya||e.$$typeof===Xa||e.$$typeof===A2||e.$$typeof===$2||e[0]===L2)};Ne.typeOf=En;Um.exports=Ne;function M4(e){function t(R,T,$,U,E){for(var ne=0,I=0,ie=0,ce=0,fe,te,Ce=0,ae=0,G,Se=G=fe=0,se=0,xe=0,gn=0,le=0,Tt=$.length,vn=Tt-1,ht,J="",ke="",qn="",Jt="",D;se<Tt;){if(te=$.charCodeAt(se),se===vn&&I+ce+ie+ne!==0&&(I!==0&&(te=I===47?10:47),ce=ie=ne=0,Tt++,vn++),I+ce+ie+ne===0){if(se===vn&&(0<xe&&(J=J.replace(h,"")),0<J.trim().length)){switch(te){case 32:case 9:case 59:case 13:case 10:break;default:J+=$.charAt(se)}te=59}switch(te){case 123:for(J=J.trim(),fe=J.charCodeAt(0),G=1,le=++se;se<Tt;){switch(te=$.charCodeAt(se)){case 123:G++;break;case 125:G--;break;case 47:switch(te=$.charCodeAt(se+1)){case 42:case 47:e:{for(Se=se+1;Se<vn;++Se)switch($.charCodeAt(Se)){case 47:if(te===42&&$.charCodeAt(Se-1)===42&&se+2!==Se){se=Se+1;break e}break;case 10:if(te===47){se=Se+1;break e}}se=Se}}break;case 91:te++;case 40:te++;case 34:case 39:for(;se++<vn&&$.charCodeAt(se)!==te;);}if(G===0)break;se++}switch(G=$.substring(le,se),fe===0&&(fe=(J=J.replace(d,"").trim()).charCodeAt(0)),fe){case 64:switch(0<xe&&(J=J.replace(h,"")),te=J.charCodeAt(1),te){case 100:case 109:case 115:case 45:xe=T;break;default:xe=K}if(G=t(T,xe,G,te,E+1),le=G.length,0<Z&&(xe=n(K,J,gn),D=a(3,G,xe,T,H,z,le,te,E,U),J=xe.join(""),D!==void 0&&(le=(G=D.trim()).length)===0&&(te=0,G="")),0<le)switch(te){case 115:J=J.replace(C,s);case 100:case 109:case 45:G=J+"{"+G+"}";break;case 107:J=J.replace(x,"$1 $2"),G=J+"{"+G+"}",G=V===1||V===2&&o("@"+G,3)?"@-webkit-"+G+"@"+G:"@"+G;break;default:G=J+G,U===112&&(G=(ke+=G,""))}else G="";break;default:G=t(T,n(T,J,gn),G,U,E+1)}qn+=G,G=gn=xe=Se=fe=0,J="",te=$.charCodeAt(++se);break;case 125:case 59:if(J=(0<xe?J.replace(h,""):J).trim(),1<(le=J.length))switch(Se===0&&(fe=J.charCodeAt(0),fe===45||96<fe&&123>fe)&&(le=(J=J.replace(" ",":")).length),0<Z&&(D=a(1,J,T,R,H,z,ke.length,U,E,U))!==void 0&&(le=(J=D.trim()).length)===0&&(J="\0\0"),fe=J.charCodeAt(0),te=J.charCodeAt(1),fe){case 0:break;case 64:if(te===105||te===99){Jt+=J+$.charAt(se);break}default:J.charCodeAt(le-1)!==58&&(ke+=i(J,fe,te,J.charCodeAt(2)))}gn=xe=Se=fe=0,J="",te=$.charCodeAt(++se)}}switch(te){case 13:case 10:I===47?I=0:1+fe===0&&U!==107&&0<J.length&&(xe=1,J+="\0"),0<Z*Ve&&a(0,J,T,R,H,z,ke.length,U,E,U),z=1,H++;break;case 59:case 125:if(I+ce+ie+ne===0){z++;break}default:switch(z++,ht=$.charAt(se),te){case 9:case 32:if(ce+ne+I===0)switch(Ce){case 44:case 58:case 9:case 32:ht="";break;default:te!==32&&(ht=" ")}break;case 0:ht="\\0";break;case 12:ht="\\f";break;case 11:ht="\\v";break;case 38:ce+I+ne===0&&(xe=gn=1,ht="\f"+ht);break;case 108:if(ce+I+ne+Q===0&&0<Se)switch(se-Se){case 2:Ce===112&&$.charCodeAt(se-3)===58&&(Q=Ce);case 8:ae===111&&(Q=ae)}break;case 58:ce+I+ne===0&&(Se=se);break;case 44:I+ie+ce+ne===0&&(xe=1,ht+="\r");break;case 34:case 39:I===0&&(ce=ce===te?0:ce===0?te:ce);break;case 91:ce+I+ie===0&&ne++;break;case 93:ce+I+ie===0&&ne--;break;case 41:ce+I+ne===0&&ie--;break;case 40:if(ce+I+ne===0){if(fe===0)switch(2*Ce+3*ae){case 533:break;default:fe=1}ie++}break;case 64:I+ie+ce+ne+Se+G===0&&(G=1);break;case 42:case 47:if(!(0<ce+ne+ie))switch(I){case 0:switch(2*te+3*$.charCodeAt(se+1)){case 235:I=47;break;case 220:le=se,I=42}break;case 42:te===47&&Ce===42&&le+2!==se&&($.charCodeAt(le+2)===33&&(ke+=$.substring(le,se+1)),ht="",I=0)}}I===0&&(J+=ht)}ae=Ce,Ce=te,se++}if(le=ke.length,0<le){if(xe=T,0<Z&&(D=a(2,ke,xe,R,H,z,le,U,E,U),D!==void 0&&(ke=D).length===0))return Jt+ke+qn;if(ke=xe.join(",")+"{"+ke+"}",V*Q!==0){switch(V!==2||o(ke,2)||(Q=0),Q){case 111:ke=ke.replace(w,":-moz-$1")+ke;break;case 112:ke=ke.replace(b,"::-webkit-input-$1")+ke.replace(b,"::-moz-$1")+ke.replace(b,":-ms-input-$1")+ke}Q=0}}return Jt+ke+qn}function n(R,T,$){var U=T.trim().split(p);T=U;var E=U.length,ne=R.length;switch(ne){case 0:case 1:var I=0;for(R=ne===0?"":R[0]+" ";I<E;++I)T[I]=r(R,T[I],$).trim();break;default:var ie=I=0;for(T=[];I<E;++I)for(var ce=0;ce<ne;++ce)T[ie++]=r(R[ce]+" ",U[I],$).trim()}return T}function r(R,T,$){var U=T.charCodeAt(0);switch(33>U&&(U=(T=T.trim()).charCodeAt(0)),U){case 38:return T.replace(g,"$1"+R.trim());case 58:return R.trim()+T.replace(g,"$1"+R.trim());default:if(0<1*$&&0<T.indexOf("\f"))return T.replace(g,(R.charCodeAt(0)===58?"":"$1")+R.trim())}return R+T}function i(R,T,$,U){var E=R+";",ne=2*T+3*$+4*U;if(ne===944){R=E.indexOf(":",9)+1;var I=E.substring(R,E.length-1).trim();return I=E.substring(0,R).trim()+I+";",V===1||V===2&&o(I,1)?"-webkit-"+I+I:I}if(V===0||V===2&&!o(E,1))return E;switch(ne){case 1015:return E.charCodeAt(10)===97?"-webkit-"+E+E:E;case 951:return E.charCodeAt(3)===116?"-webkit-"+E+E:E;case 963:return E.charCodeAt(5)===110?"-webkit-"+E+E:E;case 1009:if(E.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+E+E;case 978:return"-webkit-"+E+"-moz-"+E+E;case 1019:case 983:return"-webkit-"+E+"-moz-"+E+"-ms-"+E+E;case 883:if(E.charCodeAt(8)===45)return"-webkit-"+E+E;if(0<E.indexOf("image-set(",11))return E.replace(A,"$1-webkit-$2")+E;break;case 932:if(E.charCodeAt(4)===45)switch(E.charCodeAt(5)){case 103:return"-webkit-box-"+E.replace("-grow","")+"-webkit-"+E+"-ms-"+E.replace("grow","positive")+E;case 115:return"-webkit-"+E+"-ms-"+E.replace("shrink","negative")+E;case 98:return"-webkit-"+E+"-ms-"+E.replace("basis","preferred-size")+E}return"-webkit-"+E+"-ms-"+E+E;case 964:return"-webkit-"+E+"-ms-flex-"+E+E;case 1023:if(E.charCodeAt(8)!==99)break;return I=E.substring(E.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+I+"-webkit-"+E+"-ms-flex-pack"+I+E;case 1005:return y.test(E)?E.replace(m,":-webkit-")+E.replace(m,":-moz-")+E:E;case 1e3:switch(I=E.substring(13).trim(),T=I.indexOf("-")+1,I.charCodeAt(0)+I.charCodeAt(T)){case 226:I=E.replace(S,"tb");break;case 232:I=E.replace(S,"tb-rl");break;case 220:I=E.replace(S,"lr");break;default:return E}return"-webkit-"+E+"-ms-"+I+E;case 1017:if(E.indexOf("sticky",9)===-1)break;case 975:switch(T=(E=R).length-10,I=(E.charCodeAt(T)===33?E.substring(0,T):E).substring(R.indexOf(":",7)+1).trim(),ne=I.charCodeAt(0)+(I.charCodeAt(7)|0)){case 203:if(111>I.charCodeAt(8))break;case 115:E=E.replace(I,"-webkit-"+I)+";"+E;break;case 207:case 102:E=E.replace(I,"-webkit-"+(102<ne?"inline-":"")+"box")+";"+E.replace(I,"-webkit-"+I)+";"+E.replace(I,"-ms-"+I+"box")+";"+E}return E+";";case 938:if(E.charCodeAt(5)===45)switch(E.charCodeAt(6)){case 105:return I=E.replace("-items",""),"-webkit-"+E+"-webkit-box-"+I+"-ms-flex-"+I+E;case 115:return"-webkit-"+E+"-ms-flex-item-"+E.replace(M,"")+E;default:return"-webkit-"+E+"-ms-flex-line-pack"+E.replace("align-content","").replace(M,"")+E}break;case 973:case 989:if(E.charCodeAt(3)!==45||E.charCodeAt(4)===122)break;case 931:case 953:if(N.test(R)===!0)return(I=R.substring(R.indexOf(":")+1)).charCodeAt(0)===115?i(R.replace("stretch","fill-available"),T,$,U).replace(":fill-available",":stretch"):E.replace(I,"-webkit-"+I)+E.replace(I,"-moz-"+I.replace("fill-",""))+E;break;case 962:if(E="-webkit-"+E+(E.charCodeAt(5)===102?"-ms-"+E:"")+E,$+U===211&&E.charCodeAt(13)===105&&0<E.indexOf("transform",10))return E.substring(0,E.indexOf(";",27)+1).replace(v,"$1-webkit-$2")+E}return E}function o(R,T){var $=R.indexOf(T===1?":":"{"),U=R.substring(0,T!==3?$:10);return $=R.substring($+1,R.length-1),ye(T!==2?U:U.replace(O,"$1"),$,T)}function s(R,T){var $=i(T,T.charCodeAt(0),T.charCodeAt(1),T.charCodeAt(2));return $!==T+";"?$.replace(P," or ($1)").substring(4):"("+T+")"}function a(R,T,$,U,E,ne,I,ie,ce,fe){for(var te=0,Ce=T,ae;te<Z;++te)switch(ae=Y[te].call(u,R,Ce,$,U,E,ne,I,ie,ce,fe)){case void 0:case!1:case!0:case null:break;default:Ce=ae}if(Ce!==T)return Ce}function l(R){switch(R){case void 0:case null:Z=Y.length=0;break;default:if(typeof R=="function")Y[Z++]=R;else if(typeof R=="object")for(var T=0,$=R.length;T<$;++T)l(R[T]);else Ve=!!R|0}return l}function c(R){return R=R.prefix,R!==void 0&&(ye=null,R?typeof R!="function"?V=1:(V=2,ye=R):V=0),c}function u(R,T){var $=R;if(33>$.charCodeAt(0)&&($=$.trim()),F=$,$=[F],0<Z){var U=a(-1,T,$,$,H,z,0,0,0,0);U!==void 0&&typeof U=="string"&&(T=U)}var E=t(K,$,T,0,0);return 0<Z&&(U=a(-2,E,$,$,H,z,E.length,0,0,0),U!==void 0&&(E=U)),F="",Q=0,z=H=1,E}var d=/^\0+/g,h=/[\0\r\f]/g,m=/: */g,y=/zoo|gra/,v=/([,: ])(transform)/g,p=/,\r+?/g,g=/([\t\r\n ])*\f?&/g,x=/@(k\w+)\s*(\S*)\s*/,b=/::(place)/g,w=/:(read-only)/g,S=/[svh]\w+-[tblr]{2}/,C=/\(\s*(.*)\s*\)/g,P=/([\s\S]*?);/g,M=/-self|flex-/g,O=/[^]*?(:[rp][el]a[\w-]+)[^]*/,N=/stretch|:\s*\w+\-(?:conte|avail)/,A=/([^-])(image-set\()/,z=1,H=1,Q=0,V=1,K=[],Y=[],Z=0,ye=null,Ve=0,F="";return u.use=l,u.set=c,e!==void 0&&c(e),u}var E4={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function D2(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var O4=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Yh=D2(function(e){return O4.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),F2={exports:{}},Ee={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ft=typeof Symbol=="function"&&Symbol.for,Xm=ft?Symbol.for("react.element"):60103,Km=ft?Symbol.for("react.portal"):60106,Hu=ft?Symbol.for("react.fragment"):60107,Uu=ft?Symbol.for("react.strict_mode"):60108,Yu=ft?Symbol.for("react.profiler"):60114,Xu=ft?Symbol.for("react.provider"):60109,Ku=ft?Symbol.for("react.context"):60110,Gm=ft?Symbol.for("react.async_mode"):60111,Gu=ft?Symbol.for("react.concurrent_mode"):60111,qu=ft?Symbol.for("react.forward_ref"):60112,Qu=ft?Symbol.for("react.suspense"):60113,N4=ft?Symbol.for("react.suspense_list"):60120,Zu=ft?Symbol.for("react.memo"):60115,Ju=ft?Symbol.for("react.lazy"):60116,T4=ft?Symbol.for("react.block"):60121,R4=ft?Symbol.for("react.fundamental"):60117,$4=ft?Symbol.for("react.responder"):60118,L4=ft?Symbol.for("react.scope"):60119;function Zt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Xm:switch(e=e.type,e){case Gm:case Gu:case Hu:case Yu:case Uu:case Qu:return e;default:switch(e=e&&e.$$typeof,e){case Ku:case qu:case Ju:case Zu:case Xu:return e;default:return t}}case Km:return t}}}function j2(e){return Zt(e)===Gu}Ee.AsyncMode=Gm;Ee.ConcurrentMode=Gu;Ee.ContextConsumer=Ku;Ee.ContextProvider=Xu;Ee.Element=Xm;Ee.ForwardRef=qu;Ee.Fragment=Hu;Ee.Lazy=Ju;Ee.Memo=Zu;Ee.Portal=Km;Ee.Profiler=Yu;Ee.StrictMode=Uu;Ee.Suspense=Qu;Ee.isAsyncMode=function(e){return j2(e)||Zt(e)===Gm};Ee.isConcurrentMode=j2;Ee.isContextConsumer=function(e){return Zt(e)===Ku};Ee.isContextProvider=function(e){return Zt(e)===Xu};Ee.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Xm};Ee.isForwardRef=function(e){return Zt(e)===qu};Ee.isFragment=function(e){return Zt(e)===Hu};Ee.isLazy=function(e){return Zt(e)===Ju};Ee.isMemo=function(e){return Zt(e)===Zu};Ee.isPortal=function(e){return Zt(e)===Km};Ee.isProfiler=function(e){return Zt(e)===Yu};Ee.isStrictMode=function(e){return Zt(e)===Uu};Ee.isSuspense=function(e){return Zt(e)===Qu};Ee.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Hu||e===Gu||e===Yu||e===Uu||e===Qu||e===N4||typeof e=="object"&&e!==null&&(e.$$typeof===Ju||e.$$typeof===Zu||e.$$typeof===Xu||e.$$typeof===Ku||e.$$typeof===qu||e.$$typeof===R4||e.$$typeof===$4||e.$$typeof===L4||e.$$typeof===T4)};Ee.typeOf=Zt;F2.exports=Ee;var qm=F2.exports,A4={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},z4={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},I4={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},B2={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Qm={};Qm[qm.ForwardRef]=I4;Qm[qm.Memo]=B2;function Av(e){return qm.isMemo(e)?B2:Qm[e.$$typeof]||A4}var D4=Object.defineProperty,F4=Object.getOwnPropertyNames,zv=Object.getOwnPropertySymbols,j4=Object.getOwnPropertyDescriptor,B4=Object.getPrototypeOf,Iv=Object.prototype;function V2(e,t,n){if(typeof t!="string"){if(Iv){var r=B4(t);r&&r!==Iv&&V2(e,r,n)}var i=F4(t);zv&&(i=i.concat(zv(t)));for(var o=Av(e),s=Av(t),a=0;a<i.length;++a){var l=i[a];if(!z4[l]&&!(n&&n[l])&&!(s&&s[l])&&!(o&&o[l])){var c=j4(t,l);try{D4(e,l,c)}catch{}}}}return e}var V4=V2;function Sn(){return(Sn=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var Dv=function(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n},Xh=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!Um.exports.typeOf(e)},eu=Object.freeze([]),Vr=Object.freeze({});function Ao(e){return typeof e=="function"}function Fv(e){return e.displayName||e.name||"Component"}function Zm(e){return e&&typeof e.styledComponentId=="string"}var zo=typeof process!="undefined"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Jm=typeof window!="undefined"&&"HTMLElement"in window,W4=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process!="undefined"&&process.env!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""?{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY:!1)),H4={};function Ri(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var U4=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,o=i.length,s=o;n>=s;)(s<<=1)<0&&Ri(16,""+n);this.groupSizes=new Uint32Array(s),this.groupSizes.set(i),this.length=s;for(var a=o;a<s;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(n+1),c=0,u=r.length;c<u;c++)this.tag.insertRule(l,r[c])&&(this.groupSizes[n]++,l++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),o=i+r;this.groupSizes[n]=0;for(var s=i;s<o;s++)this.tag.deleteRule(i)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],o=this.indexOfGroup(n),s=o+i,a=o;a<s;a++)r+=this.tag.getRule(a)+`/*!sc*/
`;return r},e}(),dc=new Map,tu=new Map,Xs=1,Pl=function(e){if(dc.has(e))return dc.get(e);for(;tu.has(Xs);)Xs++;var t=Xs++;return dc.set(e,t),tu.set(t,e),t},Y4=function(e){return tu.get(e)},X4=function(e,t){t>=Xs&&(Xs=t+1),dc.set(e,t),tu.set(t,e)},K4="style["+zo+'][data-styled-version="5.3.11"]',G4=new RegExp("^"+zo+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),q4=function(e,t,n){for(var r,i=n.split(","),o=0,s=i.length;o<s;o++)(r=i[o])&&e.registerName(t,r)},Q4=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],i=0,o=n.length;i<o;i++){var s=n[i].trim();if(s){var a=s.match(G4);if(a){var l=0|parseInt(a[1],10),c=a[2];l!==0&&(X4(c,l),q4(e,c,a[3]),e.getTag().insertRules(l,r)),r.length=0}else r.push(s)}}},Z4=function(){return typeof __webpack_nonce__!="undefined"?__webpack_nonce__:null},W2=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){for(var l=a.childNodes,c=l.length;c>=0;c--){var u=l[c];if(u&&u.nodeType===1&&u.hasAttribute(zo))return u}}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(zo,"active"),r.setAttribute("data-styled-version","5.3.11");var s=Z4();return s&&r.setAttribute("nonce",s),n.insertBefore(r,o),r},J4=function(){function e(n){var r=this.element=W2(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var o=document.styleSheets,s=0,a=o.length;s<a;s++){var l=o[s];if(l.ownerNode===i)return l}Ri(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),e3=function(){function e(n){var r=this.element=W2(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),o=this.nodes[n];return this.element.insertBefore(i,o||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),t3=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),jv=Jm,n3={isServer:!Jm,useCSSOMInjection:!W4},nu=function(){function e(n,r,i){n===void 0&&(n=Vr),r===void 0&&(r={}),this.options=Sn({},n3,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&Jm&&jv&&(jv=!1,function(o){for(var s=document.querySelectorAll(K4),a=0,l=s.length;a<l;a++){var c=s[a];c&&c.getAttribute(zo)!=="active"&&(Q4(o,c),c.parentNode&&c.parentNode.removeChild(c))}}(this))}e.registerId=function(n){return Pl(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(Sn({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,o=r.useCSSOMInjection,s=r.target,n=i?new t3(s):o?new J4(s):new e3(s),new U4(n)));var n,r,i,o,s},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(Pl(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},t.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(Pl(n),i)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(Pl(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,o="",s=0;s<i;s++){var a=Y4(s);if(a!==void 0){var l=n.names.get(a),c=r.getGroup(s);if(l&&c&&l.size){var u=zo+".g"+s+'[id="'+a+'"]',d="";l!==void 0&&l.forEach(function(h){h.length>0&&(d+=h+",")}),o+=""+c+u+'{content:"'+d+`"}/*!sc*/
`}}}return o}(this)},e}(),r3=/(a)(d)/gi,Bv=function(e){return String.fromCharCode(e+(e>25?39:97))};function Kh(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Bv(t%52)+n;return(Bv(t%52)+n).replace(r3,"$1-$2")}var uo=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},H2=function(e){return uo(5381,e)};function U2(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Ao(n)&&!Zm(n))return!1}return!0}var i3=H2("5.3.11"),o3=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&U2(t),this.componentId=n,this.baseHash=uo(i3,n),this.baseStyle=r,nu.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))o.push(this.staticRulesId);else{var s=$i(this.rules,t,n,r).join(""),a=Kh(uo(this.baseHash,s)>>>0);if(!n.hasNameForId(i,a)){var l=r(s,"."+a,void 0,i);n.insertRules(i,a,l)}o.push(a),this.staticRulesId=a}else{for(var c=this.rules.length,u=uo(this.baseHash,r.hash),d="",h=0;h<c;h++){var m=this.rules[h];if(typeof m=="string")d+=m;else if(m){var y=$i(m,t,n,r),v=Array.isArray(y)?y.join(""):y;u=uo(u,v+h),d+=v}}if(d){var p=Kh(u>>>0);if(!n.hasNameForId(i,p)){var g=r(d,"."+p,void 0,i);n.insertRules(i,p,g)}o.push(p)}}return o.join(" ")},e}(),s3=/^\s*\/\/.*$/gm,a3=[":","[",".","#"];function l3(e){var t,n,r,i,o=e===void 0?Vr:e,s=o.options,a=s===void 0?Vr:s,l=o.plugins,c=l===void 0?eu:l,u=new M4(a),d=[],h=function(v){function p(g){if(g)try{v(g+"}")}catch{}}return function(g,x,b,w,S,C,P,M,O,N){switch(g){case 1:if(O===0&&x.charCodeAt(0)===64)return v(x+";"),"";break;case 2:if(M===0)return x+"/*|*/";break;case 3:switch(M){case 102:case 112:return v(b[0]+x),"";default:return x+(N===0?"/*|*/":"")}case-2:x.split("/*|*/}").forEach(p)}}}(function(v){d.push(v)}),m=function(v,p,g){return p===0&&a3.indexOf(g[n.length])!==-1||g.match(i)?v:"."+t};function y(v,p,g,x){x===void 0&&(x="&");var b=v.replace(s3,""),w=p&&g?g+" "+p+" { "+b+" }":b;return t=x,n=p,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),u(g||!p?"":p,w)}return u.use([].concat(c,[function(v,p,g){v===2&&g.length&&g[0].lastIndexOf(n)>0&&(g[0]=g[0].replace(r,m))},h,function(v){if(v===-2){var p=d;return d=[],p}}])),y.hash=c.length?c.reduce(function(v,p){return p.name||Ri(15),uo(v,p.name)},5381).toString():"",y}var Y2=Qe.createContext();Y2.Consumer;var X2=Qe.createContext(),c3=(X2.Consumer,new nu),Gh=l3();function K2(){return _.exports.useContext(Y2)||c3}function G2(){return _.exports.useContext(X2)||Gh}var u3=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=Gh);var s=r.name+o.hash;i.hasNameForId(r.id,s)||i.insertRules(r.id,s,o(r.rules,s,"@keyframes"))},this.toString=function(){return Ri(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=Gh),this.name+t.hash},e}(),d3=/([A-Z])/,f3=/([A-Z])/g,h3=/^ms-/,p3=function(e){return"-"+e.toLowerCase()};function Vv(e){return d3.test(e)?e.replace(f3,p3).replace(h3,"-ms-"):e}var Wv=function(e){return e==null||e===!1||e===""};function $i(e,t,n,r){if(Array.isArray(e)){for(var i,o=[],s=0,a=e.length;s<a;s+=1)(i=$i(e[s],t,n,r))!==""&&(Array.isArray(i)?o.push.apply(o,i):o.push(i));return o}if(Wv(e))return"";if(Zm(e))return"."+e.styledComponentId;if(Ao(e)){if(typeof(c=e)!="function"||c.prototype&&c.prototype.isReactComponent||!t)return e;var l=e(t);return $i(l,t,n,r)}var c;return e instanceof u3?n?(e.inject(n,r),e.getName(r)):e:Xh(e)?function u(d,h){var m,y,v=[];for(var p in d)d.hasOwnProperty(p)&&!Wv(d[p])&&(Array.isArray(d[p])&&d[p].isCss||Ao(d[p])?v.push(Vv(p)+":",d[p],";"):Xh(d[p])?v.push.apply(v,u(d[p],p)):v.push(Vv(p)+": "+(m=p,(y=d[p])==null||typeof y=="boolean"||y===""?"":typeof y!="number"||y===0||m in E4||m.startsWith("--")?String(y).trim():y+"px")+";"));return h?[h+" {"].concat(v,["}"]):v}(e):e.toString()}var Hv=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function Nt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return Ao(e)||Xh(e)?Hv($i(Dv(eu,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:Hv($i(Dv(e,n)))}var q2=function(e,t,n){return n===void 0&&(n=Vr),e.theme!==n.theme&&e.theme||t||n.theme},m3=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,g3=/(^-|-$)/g;function kf(e){return e.replace(m3,"-").replace(g3,"")}var Q2=function(e){return Kh(H2(e)>>>0)};function Ml(e){return typeof e=="string"&&!0}var qh=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},v3=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function y3(e,t,n){var r=e[n];qh(t)&&qh(r)?Z2(r,t):e[n]=t}function Z2(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var i=0,o=n;i<o.length;i++){var s=o[i];if(qh(s))for(var a in s)v3(a)&&y3(e,s[a],a)}return e}var xa=Qe.createContext();xa.Consumer;function x3(e){var t=_.exports.useContext(xa),n=_.exports.useMemo(function(){return function(r,i){if(!r)return Ri(14);if(Ao(r)){var o=r(i);return o}return Array.isArray(r)||typeof r!="object"?Ri(8):i?Sn({},i,{},r):r}(e.theme,t)},[e.theme,t]);return e.children?Qe.createElement(xa.Provider,{value:n},e.children):null}var Cf={};function J2(e,t,n){var r=Zm(e),i=!Ml(e),o=t.attrs,s=o===void 0?eu:o,a=t.componentId,l=a===void 0?function(x,b){var w=typeof x!="string"?"sc":kf(x);Cf[w]=(Cf[w]||0)+1;var S=w+"-"+Q2("5.3.11"+w+Cf[w]);return b?b+"-"+S:S}(t.displayName,t.parentComponentId):a,c=t.displayName,u=c===void 0?function(x){return Ml(x)?"styled."+x:"Styled("+Fv(x)+")"}(e):c,d=t.displayName&&t.componentId?kf(t.displayName)+"-"+t.componentId:t.componentId||l,h=r&&e.attrs?Array.prototype.concat(e.attrs,s).filter(Boolean):s,m=t.shouldForwardProp;r&&e.shouldForwardProp&&(m=t.shouldForwardProp?function(x,b,w){return e.shouldForwardProp(x,b,w)&&t.shouldForwardProp(x,b,w)}:e.shouldForwardProp);var y,v=new o3(n,d,r?e.componentStyle:void 0),p=v.isStatic&&s.length===0,g=function(x,b){return function(w,S,C,P){var M=w.attrs,O=w.componentStyle,N=w.defaultProps,A=w.foldedComponentIds,z=w.shouldForwardProp,H=w.styledComponentId,Q=w.target,V=function(U,E,ne){U===void 0&&(U=Vr);var I=Sn({},E,{theme:U}),ie={};return ne.forEach(function(ce){var fe,te,Ce,ae=ce;for(fe in Ao(ae)&&(ae=ae(I)),ae)I[fe]=ie[fe]=fe==="className"?(te=ie[fe],Ce=ae[fe],te&&Ce?te+" "+Ce:te||Ce):ae[fe]}),[I,ie]}(q2(S,_.exports.useContext(xa),N)||Vr,S,M),K=V[0],Y=V[1],Z=function(U,E,ne,I){var ie=K2(),ce=G2(),fe=E?U.generateAndInjectStyles(Vr,ie,ce):U.generateAndInjectStyles(ne,ie,ce);return fe}(O,P,K),ye=C,Ve=Y.$as||S.$as||Y.as||S.as||Q,F=Ml(Ve),R=Y!==S?Sn({},S,{},Y):S,T={};for(var $ in R)$[0]!=="$"&&$!=="as"&&($==="forwardedAs"?T.as=R[$]:(z?z($,Yh,Ve):!F||Yh($))&&(T[$]=R[$]));return S.style&&Y.style!==S.style&&(T.style=Sn({},S.style,{},Y.style)),T.className=Array.prototype.concat(A,H,Z!==H?Z:null,S.className,Y.className).filter(Boolean).join(" "),T.ref=ye,_.exports.createElement(Ve,T)}(y,x,b,p)};return g.displayName=u,(y=Qe.forwardRef(g)).attrs=h,y.componentStyle=v,y.displayName=u,y.shouldForwardProp=m,y.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):eu,y.styledComponentId=d,y.target=r?e.target:e,y.withComponent=function(x){var b=t.componentId,w=function(C,P){if(C==null)return{};var M,O,N={},A=Object.keys(C);for(O=0;O<A.length;O++)M=A[O],P.indexOf(M)>=0||(N[M]=C[M]);return N}(t,["componentId"]),S=b&&b+"-"+(Ml(x)?x:kf(Fv(x)));return J2(x,Sn({},w,{attrs:h,componentId:S}),n)},Object.defineProperty(y,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(x){this._foldedDefaultProps=r?Z2({},e.defaultProps,x):x}}),Object.defineProperty(y,"toString",{value:function(){return"."+y.styledComponentId}}),i&&V4(y,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),y}var Qh=function(e){return function t(n,r,i){if(i===void 0&&(i=Vr),!Um.exports.isValidElementType(r))return Ri(1,String(r));var o=function(){return n(r,i,Nt.apply(void 0,arguments))};return o.withConfig=function(s){return t(n,r,Sn({},i,{},s))},o.attrs=function(s){return t(n,r,Sn({},i,{attrs:Array.prototype.concat(i.attrs,s).filter(Boolean)}))},o}(J2,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){Qh[e]=Qh(e)});var b3=function(){function e(n,r){this.rules=n,this.componentId=r,this.isStatic=U2(n),nu.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(n,r,i,o){var s=o($i(this.rules,r,i,o).join(""),""),a=this.componentId+n;i.insertRules(a,a,s)},t.removeStyles=function(n,r){r.clearRules(this.componentId+n)},t.renderStyles=function(n,r,i,o){n>2&&nu.registerId(this.componentId+n),this.removeStyles(n,i),this.createStyles(n,r,i,o)},e}();function w3(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=Nt.apply(void 0,[e].concat(n)),o="sc-global-"+Q2(JSON.stringify(i)),s=new b3(i,o);function a(c){var u=K2(),d=G2(),h=_.exports.useContext(xa),m=_.exports.useRef(u.allocateGSInstance(o)).current;return u.server&&l(m,c,u,h,d),_.exports.useLayoutEffect(function(){if(!u.server)return l(m,c,u,h,d),function(){return s.removeStyles(m,u)}},[m,c,u,h,d]),null}function l(c,u,d,h,m){if(s.isStatic)s.renderStyles(c,H4,d,m);else{var y=Sn({},u,{theme:q2(u,h,a.defaultProps)});s.renderStyles(c,y,d,m)}}return Qe.memo(a)}var ee=Qh;const _3=w3`

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
`,S3={header:"#ffffff",headerDesktop:"#ffffff",body:"#ffffff",bodyDesktop:"#F7F7F8",sideBar:"#efeff1",color:"#9147ff",textColor:"#000",hover:"#0000001a",soft:"#777777",bits:"#e9e9e9",softDesktop:"#555555",border:"#efeff1",darkModeBg:"#dedede",iconColor:"#0e0e10",profit:"#0f0",loss:"#f00",lightText:"#b7b7b7"},k3={header:"#0e0e10",headerDesktop:"#18181B",body:"#000000",bodyDesktop:"#0e0e10",sideBar:"#1f1f23",color:"#9147ff",textColor:"#fcfaff",hover:"#ffffff1a",soft:"#adadb8",bits:"#333333",softDesktop:"#cdcdb8",border:"#ffffff1a",darkModeBg:"#9147ff",iconColor:"#adadb8",profit:"#0f0",loss:"#f00",lightText:"#b7b7b7"};var qo={exports:{}},C3="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",P3=C3,M3=P3;function ew(){}function tw(){}tw.resetWarningCache=ew;var E3=function(){function e(r,i,o,s,a,l){if(l!==M3){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:tw,resetWarningCache:ew};return n.PropTypes=n,n};qo.exports=E3();var Zr=Qe.createContext(null);function O3(e){e()}var nw=O3,N3=function(t){return nw=t},T3=function(){return nw};function R3(){var e=T3(),t=null,n=null;return{clear:function(){t=null,n=null},notify:function(){e(function(){for(var i=t;i;)i.callback(),i=i.next})},get:function(){for(var i=[],o=t;o;)i.push(o),o=o.next;return i},subscribe:function(i){var o=!0,s=n={callback:i,next:null,prev:n};return s.prev?s.prev.next=s:t=s,function(){!o||t===null||(o=!1,s.next?s.next.prev=s.prev:n=s.prev,s.prev?s.prev.next=s.next:t=s.next)}}}}var Uv={notify:function(){},get:function(){return[]}};function rw(e,t){var n,r=Uv;function i(d){return l(),r.subscribe(d)}function o(){r.notify()}function s(){u.onStateChange&&u.onStateChange()}function a(){return Boolean(n)}function l(){n||(n=t?t.addNestedSub(s):e.subscribe(s),r=R3())}function c(){n&&(n(),n=void 0,r.clear(),r=Uv)}var u={addNestedSub:i,notifyNestedSubs:o,handleChangeWrapper:s,isSubscribed:a,trySubscribe:l,tryUnsubscribe:c,getListeners:function(){return r}};return u}var Zh=typeof window!="undefined"&&typeof window.document!="undefined"&&typeof window.document.createElement!="undefined"?_.exports.useLayoutEffect:_.exports.useEffect,ed={exports:{}},Qa={};/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $3=_.exports,iw=60103;Qa.Fragment=60107;if(typeof Symbol=="function"&&Symbol.for){var Yv=Symbol.for;iw=Yv("react.element"),Qa.Fragment=Yv("react.fragment")}var L3=$3.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,A3=Object.prototype.hasOwnProperty,z3={key:!0,ref:!0,__self:!0,__source:!0};function ow(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)A3.call(t,r)&&!z3.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:iw,type:e,key:o,ref:s,props:i,_owner:L3.current}}Qa.jsx=ow;Qa.jsxs=ow;ed.exports=Qa;const f=ed.exports.jsx,k=ed.exports.jsxs,ot=ed.exports.Fragment;function I3(e){var t=e.store,n=e.context,r=e.children,i=_.exports.useMemo(function(){var a=rw(t);return{store:t,subscription:a}},[t]),o=_.exports.useMemo(function(){return t.getState()},[t]);Zh(function(){var a=i.subscription;return a.onStateChange=a.notifyNestedSubs,a.trySubscribe(),o!==t.getState()&&a.notifyNestedSubs(),function(){a.tryUnsubscribe(),a.onStateChange=null}},[i,o]);var s=n||Zr;return f(s.Provider,{value:i,children:r})}function j(){return j=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},j.apply(null,arguments)}function Lt(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.includes(r))continue;n[r]=e[r]}return n}function sw(){var e=_.exports.useContext(Zr);return e}function aw(e){e===void 0&&(e=Zr);var t=e===Zr?sw:function(){return _.exports.useContext(e)};return function(){var r=t(),i=r.store;return i}}var D3=aw();function F3(e){e===void 0&&(e=Zr);var t=e===Zr?D3:aw(e);return function(){var r=t();return r.dispatch}}var eg=F3(),j3=function(t,n){return t===n};function B3(e,t,n,r){var i=_.exports.useReducer(function(y){return y+1},0),o=i[1],s=_.exports.useMemo(function(){return rw(n,r)},[n,r]),a=_.exports.useRef(),l=_.exports.useRef(),c=_.exports.useRef(),u=_.exports.useRef(),d=n.getState(),h;try{if(e!==l.current||d!==c.current||a.current){var m=e(d);u.current===void 0||!t(m,u.current)?h=m:h=u.current}else h=u.current}catch(y){throw a.current&&(y.message+=`
The error may be correlated with this previous error:
`+a.current.stack+`

`),y}return Zh(function(){l.current=e,c.current=d,u.current=h,a.current=void 0}),Zh(function(){function y(){try{var v=n.getState();if(v===c.current)return;var p=l.current(v);if(t(p,u.current))return;u.current=p,c.current=v}catch(g){a.current=g}o()}return s.onStateChange=y,s.trySubscribe(),y(),function(){return s.tryUnsubscribe()}},[n,s]),h}function V3(e){e===void 0&&(e=Zr);var t=e===Zr?sw:function(){return _.exports.useContext(e)};return function(r,i){i===void 0&&(i=j3);var o=t(),s=o.store,a=o.subscription,l=B3(r,i,s,a);return _.exports.useDebugValue(l),l}}var At=V3();N3(Pu.exports.unstable_batchedUpdates);const W3=ee.header`
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
                  width: 4.5rem;
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
`;var lw={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Xv=Qe.createContext&&Qe.createContext(lw),Wr=globalThis&&globalThis.__assign||function(){return Wr=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Wr.apply(this,arguments)},H3=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function cw(e){return e&&e.map(function(t,n){return Qe.createElement(t.tag,Wr({key:n},t.attr),cw(t.child))})}function de(e){return function(t){return Qe.createElement(U3,Wr({attr:Wr({},e.attr)},t),cw(e.child))}}function U3(e){var t=function(n){var r=e.attr,i=e.size,o=e.title,s=H3(e,["attr","size","title"]),a=i||n.size||"1em",l;return n.className&&(l=n.className),e.className&&(l=(l?l+" ":"")+e.className),Qe.createElement("svg",Wr({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,s,{className:l,style:Wr(Wr({color:e.color||n.color},n.style),e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),o&&Qe.createElement("title",null,o),e.children)};return Xv!==void 0?Qe.createElement(Xv.Consumer,null,function(n){return t(n)}):t(lw)}function Y3(e){return de({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M4.5 12a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-1zm3 0a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1zm3 0a.5.5 0 0 1-.5-.5v-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5h-1z"}},{tag:"path",attr:{d:"M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"}}]})(e)}function tg(e){return de({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"}}]})(e)}function ng(e){return de({tag:"svg",attr:{viewBox:"0 0 192 512"},child:[{tag:"path",attr:{d:"M96 184c39.8 0 72 32.2 72 72s-32.2 72-72 72-72-32.2-72-72 32.2-72 72-72zM24 80c0 39.8 32.2 72 72 72s72-32.2 72-72S135.8 8 96 8 24 40.2 24 80zm0 352c0 39.8 32.2 72 72 72s72-32.2 72-72-32.2-72-72-72-72 32.2-72 72z"}}]})(e)}function X3(e){return de({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M4 6h2v12H4zm4 7h8.586l-4.293 4.293 1.414 1.414L20.414 12l-6.707-6.707-1.414 1.414L16.586 11H8z"}}]})(e)}function uw(e){return de({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"}}]})(e)}function K3(e){return de({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412l7.332 7.332c.17.299.498.492.875.492a.99.99 0 0 0 .792-.409l7.415-7.415c2.354-2.354 2.354-6.049-.002-8.416a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595zm6.791 1.61c1.563 1.571 1.564 4.025.002 5.588L12 18.586l-6.793-6.793c-1.562-1.563-1.561-4.017-.002-5.584.76-.756 1.754-1.172 2.799-1.172s2.035.416 2.789 1.17l.5.5a.999.999 0 0 0 1.414 0l.5-.5c1.512-1.509 4.074-1.505 5.584-.002z"}}]})(e)}function dw(e){return de({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M11.999 1.993C6.486 1.994 2 6.48 1.999 11.994c0 5.514 4.486 10 10.001 10 5.514-.001 10-4.487 10-10 0-5.514-4.486-10-10.001-10.001zM12 19.994c-4.412 0-8.001-3.589-8.001-8 .001-4.411 3.59-8 8-8.001C16.411 3.994 20 7.583 20 11.994c0 4.41-3.589 7.999-8 8z"}},{tag:"path",attr:{d:"m12.012 7.989-4.005 4.005 4.005 4.004v-3.004h3.994v-2h-3.994z"}}]})(e)}function Kv(e){return de({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M18.464 2.114a.998.998 0 0 0-1.033.063l-13 9a1.003 1.003 0 0 0 0 1.645l13 9A1 1 0 0 0 19 21V3a1 1 0 0 0-.536-.886zM17 19.091 6.757 12 17 4.909v14.182z"}}]})(e)}function G3(e){return de({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M19 2H5c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h3.586L12 21.414 15.414 18H19c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 14h-4.414L12 18.586 9.414 16H5V4h14v12z"}}]})(e)}function rg(e){return de({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"}}]})(e)}function ru(e){return de({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"}}]})(e)}const q3=ee.div`
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
`;function Q3(e){return de({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"}}]})(e)}function Z3(e){return de({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 2H3v16h5v4l4-4h5l4-4V2zM11 11V7M16 11V7"}}]})(e)}function J3(e){return de({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}},{tag:"circle",attr:{cx:"8.5",cy:"7",r:"4"}},{tag:"line",attr:{x1:"23",y1:"11",x2:"17",y2:"11"}}]})(e)}function eP(e){return de({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}},{tag:"circle",attr:{cx:"9",cy:"7",r:"4"}},{tag:"path",attr:{d:"M23 21v-2a4 4 0 0 0-3-3.87"}},{tag:"path",attr:{d:"M16 3.13a4 4 0 0 1 0 7.75"}}]})(e)}function Pf(e){return de({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z"}}]})(e)}function tP(e){return de({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z"}}]})(e)}function nP(e){return de({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95a15.65 15.65 0 00-1.38-3.56A8.03 8.03 0 0118.92 8zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56A7.987 7.987 0 015.08 16zm2.95-8H5.08a7.987 7.987 0 014.33-3.56A15.65 15.65 0 008.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 01-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"}}]})(e)}function fw(e){return de({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"}}]})(e)}function rP(e){return de({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z"}}]})(e)}function iP(e){return de({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M17 8l-1.41 1.41L17.17 11H9v2h8.17l-1.58 1.58L17 16l4-4-4-4zM5 5h7V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h7v-2H5V5z"}}]})(e)}function oP(e){return de({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M15 8v8H5V8h10m1-2H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4V7c0-.55-.45-1-1-1z"}}]})(e)}function hw(e){return de({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M9.37 5.51A7.35 7.35 0 009.1 7.5c0 4.08 3.32 7.4 7.4 7.4.68 0 1.35-.09 1.99-.27A7.014 7.014 0 0112 19c-3.86 0-7-3.14-7-7 0-2.93 1.81-5.45 4.37-6.49zM12 3a9 9 0 109 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 01-4.4 2.26 5.403 5.403 0 01-3.14-9.8c-.44-.06-.9-.1-1.36-.1z"}}]})(e)}function sP(e){return de({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M13.1714 12.0007L8.22168 7.05093L9.63589 5.63672L15.9999 12.0007L9.63589 18.3646L8.22168 16.9504L13.1714 12.0007Z"}}]})(e)}function aP(e){return de({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M21 19.9997C21 20.552 20.5523 20.9997 20 20.9997H4C3.44772 20.9997 3 20.552 3 19.9997V9.48882C3 9.18023 3.14247 8.88893 3.38606 8.69947L11.3861 2.47725C11.7472 2.19639 12.2528 2.19639 12.6139 2.47725L20.6139 8.69947C20.8575 8.88893 21 9.18023 21 9.48882V19.9997ZM19 18.9997V9.97791L12 4.53346L5 9.97791V18.9997H19ZM7 14.9997H17V16.9997H7V14.9997Z"}}]})(e)}function lP(e){return de({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M5 2H19C19.5523 2 20 2.44772 20 3V22.1433C20 22.4194 19.7761 22.6434 19.5 22.6434C19.4061 22.6434 19.314 22.6168 19.2344 22.5669L12 18.0313L4.76559 22.5669C4.53163 22.7136 4.22306 22.6429 4.07637 22.4089C4.02647 22.3293 4 22.2373 4 22.1433V3C4 2.44772 4.44772 2 5 2ZM18 4H6V19.4324L12 15.6707L18 19.4324V4Z"}}]})(e)}function cP(e){return de({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"}}]})(e)}function uP(e){return de({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M4.41085 14.5259L7.81249 11.1243L10.6409 13.9527L13.7978 10.7958L12.0049 9.00293H17.0049V14.0029L15.212 12.21L10.6409 16.7811L7.81249 13.9527L5.33834 16.4268C6.77158 18.5823 9.22233 20.0029 12.0049 20.0029C16.4232 20.0029 20.0049 16.4212 20.0049 12.0029C20.0049 7.58465 16.4232 4.00293 12.0049 4.00293C7.5866 4.00293 4.00488 7.58465 4.00488 12.0029C4.00488 12.8845 4.14747 13.7327 4.41085 14.5259ZM2.87288 16.0841L2.86275 16.074L2.86662 16.0701C2.31276 14.8276 2.00488 13.4512 2.00488 12.0029C2.00488 6.48008 6.48204 2.00293 12.0049 2.00293C17.5277 2.00293 22.0049 6.48008 22.0049 12.0029C22.0049 17.5258 17.5277 22.0029 12.0049 22.0029C7.93574 22.0029 4.43426 19.5725 2.87288 16.0841Z"}}]})(e)}function dP(e){return de({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853Z"}}]})(e)}function Gv(e){return de({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z"}}]})(e)}function fP(e){return de({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M4 18H6V20H18V4H6V6H4V3C4 2.44772 4.44772 2 5 2H19C19.5523 2 20 2.44772 20 3V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V18ZM6 11H13V13H6V16L1 12L6 8V11Z"}}]})(e)}function Jh(e){return de({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M8.68735 4.00008L11.294 1.39348C11.6845 1.00295 12.3176 1.00295 12.7082 1.39348L15.3148 4.00008H19.0011C19.5533 4.00008 20.0011 4.4478 20.0011 5.00008V8.68637L22.6077 11.293C22.9982 11.6835 22.9982 12.3167 22.6077 12.7072L20.0011 15.3138V19.0001C20.0011 19.5524 19.5533 20.0001 19.0011 20.0001H15.3148L12.7082 22.6067C12.3176 22.9972 11.6845 22.9972 11.294 22.6067L8.68735 20.0001H5.00106C4.44877 20.0001 4.00106 19.5524 4.00106 19.0001V15.3138L1.39446 12.7072C1.00393 12.3167 1.00393 11.6835 1.39446 11.293L4.00106 8.68637V5.00008C4.00106 4.4478 4.44877 4.00008 5.00106 4.00008H8.68735ZM6.00106 6.00008V9.5148L3.51578 12.0001L6.00106 14.4854V18.0001H9.51578L12.0011 20.4854L14.4863 18.0001H18.0011V14.4854L20.4863 12.0001L18.0011 9.5148V6.00008H14.4863L12.0011 3.5148L9.51578 6.00008H6.00106ZM12.0011 16.0001C9.79192 16.0001 8.00106 14.2092 8.00106 12.0001C8.00106 9.79094 9.79192 8.00008 12.0011 8.00008C14.2102 8.00008 16.0011 9.79094 16.0011 12.0001C16.0011 14.2092 14.2102 16.0001 12.0011 16.0001ZM12.0011 14.0001C13.1056 14.0001 14.0011 13.1047 14.0011 12.0001C14.0011 10.8955 13.1056 10.0001 12.0011 10.0001C10.8965 10.0001 10.0011 10.8955 10.0011 12.0001C10.0011 13.1047 10.8965 14.0001 12.0011 14.0001Z"}}]})(e)}function hP(e){return de({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M3.5 2h-1v5h1V2zm6.1 5H6.4L6 6.45v-1L6.4 5h3.2l.4.5v1l-.4.5zm-5 3H1.4L1 9.5v-1l.4-.5h3.2l.4.5v1l-.4.5zm3.9-8h-1v2h1V2zm-1 6h1v6h-1V8zm-4 3h-1v3h1v-3zm7.9 0h3.19l.4-.5v-.95l-.4-.5H11.4l-.4.5v.95l.4.5zm2.1-9h-1v6h1V2zm-1 10h1v2h-1v-2z"}}]})(e)}const pP=ee.div`
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
`;function wn(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+e+(n.length?" "+n.map(function(i){return"'"+i+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function Jr(e){return!!e&&!!e[Fe]}function fr(e){var t;return!!e&&(function(n){if(!n||typeof n!="object")return!1;var r=Object.getPrototypeOf(n);if(r===null)return!0;var i=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return i===Object||typeof i=="function"&&Function.toString.call(i)===SP}(e)||Array.isArray(e)||!!e[n1]||!!(!((t=e.constructor)===null||t===void 0)&&t[n1])||ig(e)||og(e))}function Li(e,t,n){n===void 0&&(n=!1),Qo(e)===0?(n?Object.keys:Co)(e).forEach(function(r){n&&typeof r=="symbol"||t(r,e[r],e)}):e.forEach(function(r,i){return t(i,r,e)})}function Qo(e){var t=e[Fe];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:ig(e)?2:og(e)?3:0}function ko(e,t){return Qo(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function mP(e,t){return Qo(e)===2?e.get(t):e[t]}function pw(e,t,n){var r=Qo(e);r===2?e.set(t,n):r===3?e.add(n):e[t]=n}function mw(e,t){return e===t?e!==0||1/e==1/t:e!=e&&t!=t}function ig(e){return wP&&e instanceof Map}function og(e){return _P&&e instanceof Set}function pi(e){return e.o||e.t}function sg(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=vw(e);delete t[Fe];for(var n=Co(t),r=0;r<n.length;r++){var i=n[r],o=t[i];o.writable===!1&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(t[i]={configurable:!0,writable:!0,enumerable:o.enumerable,value:e[i]})}return Object.create(Object.getPrototypeOf(e),t)}function ag(e,t){return t===void 0&&(t=!1),lg(e)||Jr(e)||!fr(e)||(Qo(e)>1&&(e.set=e.add=e.clear=e.delete=gP),Object.freeze(e),t&&Li(e,function(n,r){return ag(r,!0)},!0)),e}function gP(){wn(2)}function lg(e){return e==null||typeof e!="object"||Object.isFrozen(e)}function Wn(e){var t=rp[e];return t||wn(18,e),t}function vP(e,t){rp[e]||(rp[e]=t)}function ep(){return ba}function Mf(e,t){t&&(Wn("Patches"),e.u=[],e.s=[],e.v=t)}function iu(e){tp(e),e.p.forEach(yP),e.p=null}function tp(e){e===ba&&(ba=e.l)}function qv(e){return ba={p:[],l:ba,h:e,m:!0,_:0}}function yP(e){var t=e[Fe];t.i===0||t.i===1?t.j():t.g=!0}function Ef(e,t){t._=t.p.length;var n=t.p[0],r=e!==void 0&&e!==n;return t.h.O||Wn("ES5").S(t,e,r),r?(n[Fe].P&&(iu(t),wn(4)),fr(e)&&(e=ou(t,e),t.l||su(t,e)),t.u&&Wn("Patches").M(n[Fe].t,e,t.u,t.s)):e=ou(t,n,[]),iu(t),t.u&&t.v(t.u,t.s),e!==gw?e:void 0}function ou(e,t,n){if(lg(t))return t;var r=t[Fe];if(!r)return Li(t,function(a,l){return Qv(e,r,t,a,l,n)},!0),t;if(r.A!==e)return t;if(!r.P)return su(e,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var i=r.i===4||r.i===5?r.o=sg(r.k):r.o,o=i,s=!1;r.i===3&&(o=new Set(i),i.clear(),s=!0),Li(o,function(a,l){return Qv(e,r,i,a,l,n,s)}),su(e,i,!1),n&&e.u&&Wn("Patches").N(r,n,e.u,e.s)}return r.o}function Qv(e,t,n,r,i,o,s){if(Jr(i)){var a=ou(e,i,o&&t&&t.i!==3&&!ko(t.R,r)?o.concat(r):void 0);if(pw(n,r,a),!Jr(a))return;e.m=!1}else s&&n.add(i);if(fr(i)&&!lg(i)){if(!e.h.D&&e._<1)return;ou(e,i),t&&t.A.l||su(e,i)}}function su(e,t,n){n===void 0&&(n=!1),!e.l&&e.h.D&&e.m&&ag(t,n)}function Of(e,t){var n=e[Fe];return(n?pi(n):e)[t]}function Zv(e,t){if(t in e)for(var n=Object.getPrototypeOf(e);n;){var r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=Object.getPrototypeOf(n)}}function wr(e){e.P||(e.P=!0,e.l&&wr(e.l))}function Nf(e){e.o||(e.o=sg(e.t))}function np(e,t,n){var r=ig(t)?Wn("MapSet").F(t,n):og(t)?Wn("MapSet").T(t,n):e.O?function(i,o){var s=Array.isArray(i),a={i:s?1:0,A:o?o.A:ep(),P:!1,I:!1,R:{},l:o,t:i,k:null,o:null,j:null,C:!1},l=a,c=wa;s&&(l=[a],c=Es);var u=Proxy.revocable(l,c),d=u.revoke,h=u.proxy;return a.k=h,a.j=d,h}(t,n):Wn("ES5").J(t,n);return(n?n.A:ep()).p.push(r),r}function xP(e){return Jr(e)||wn(22,e),function t(n){if(!fr(n))return n;var r,i=n[Fe],o=Qo(n);if(i){if(!i.P&&(i.i<4||!Wn("ES5").K(i)))return i.t;i.I=!0,r=Jv(n,o),i.I=!1}else r=Jv(n,o);return Li(r,function(s,a){i&&mP(i.t,s)===a||pw(r,s,t(a))}),o===3?new Set(r):r}(e)}function Jv(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return sg(e)}function bP(){function e(o,s){var a=i[o];return a?a.enumerable=s:i[o]=a={configurable:!0,enumerable:s,get:function(){var l=this[Fe];return wa.get(l,o)},set:function(l){var c=this[Fe];wa.set(c,o,l)}},a}function t(o){for(var s=o.length-1;s>=0;s--){var a=o[s][Fe];if(!a.P)switch(a.i){case 5:r(a)&&wr(a);break;case 4:n(a)&&wr(a)}}}function n(o){for(var s=o.t,a=o.k,l=Co(a),c=l.length-1;c>=0;c--){var u=l[c];if(u!==Fe){var d=s[u];if(d===void 0&&!ko(s,u))return!0;var h=a[u],m=h&&h[Fe];if(m?m.t!==d:!mw(h,d))return!0}}var y=!!s[Fe];return l.length!==Co(s).length+(y?0:1)}function r(o){var s=o.k;if(s.length!==o.t.length)return!0;var a=Object.getOwnPropertyDescriptor(s,s.length-1);if(a&&!a.get)return!0;for(var l=0;l<s.length;l++)if(!s.hasOwnProperty(l))return!0;return!1}var i={};vP("ES5",{J:function(o,s){var a=Array.isArray(o),l=function(u,d){if(u){for(var h=Array(d.length),m=0;m<d.length;m++)Object.defineProperty(h,""+m,e(m,!0));return h}var y=vw(d);delete y[Fe];for(var v=Co(y),p=0;p<v.length;p++){var g=v[p];y[g]=e(g,u||!!y[g].enumerable)}return Object.create(Object.getPrototypeOf(d),y)}(a,o),c={i:a?5:4,A:s?s.A:ep(),P:!1,I:!1,R:{},l:s,t:o,k:l,o:null,g:!1,C:!1};return Object.defineProperty(l,Fe,{value:c,writable:!0}),l},S:function(o,s,a){a?Jr(s)&&s[Fe].A===o&&t(o.p):(o.u&&function l(c){if(c&&typeof c=="object"){var u=c[Fe];if(u){var d=u.t,h=u.k,m=u.R,y=u.i;if(y===4)Li(h,function(b){b!==Fe&&(d[b]!==void 0||ko(d,b)?m[b]||l(h[b]):(m[b]=!0,wr(u)))}),Li(d,function(b){h[b]!==void 0||ko(h,b)||(m[b]=!1,wr(u))});else if(y===5){if(r(u)&&(wr(u),m.length=!0),h.length<d.length)for(var v=h.length;v<d.length;v++)m[v]=!1;else for(var p=d.length;p<h.length;p++)m[p]=!0;for(var g=Math.min(h.length,d.length),x=0;x<g;x++)h.hasOwnProperty(x)||(m[x]=!0),m[x]===void 0&&l(h[x])}}}}(o.p[0]),t(o.p))},K:function(o){return o.i===4?n(o):r(o)}})}var e1,ba,cg=typeof Symbol!="undefined"&&typeof Symbol("x")=="symbol",wP=typeof Map!="undefined",_P=typeof Set!="undefined",t1=typeof Proxy!="undefined"&&Proxy.revocable!==void 0&&typeof Reflect!="undefined",gw=cg?Symbol.for("immer-nothing"):((e1={})["immer-nothing"]=!0,e1),n1=cg?Symbol.for("immer-draftable"):"__$immer_draftable",Fe=cg?Symbol.for("immer-state"):"__$immer_state",SP=""+Object.prototype.constructor,Co=typeof Reflect!="undefined"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,vw=Object.getOwnPropertyDescriptors||function(e){var t={};return Co(e).forEach(function(n){t[n]=Object.getOwnPropertyDescriptor(e,n)}),t},rp={},wa={get:function(e,t){if(t===Fe)return e;var n=pi(e);if(!ko(n,t))return function(i,o,s){var a,l=Zv(o,s);return l?"value"in l?l.value:(a=l.get)===null||a===void 0?void 0:a.call(i.k):void 0}(e,n,t);var r=n[t];return e.I||!fr(r)?r:r===Of(e.t,t)?(Nf(e),e.o[t]=np(e.A.h,r,e)):r},has:function(e,t){return t in pi(e)},ownKeys:function(e){return Reflect.ownKeys(pi(e))},set:function(e,t,n){var r=Zv(pi(e),t);if(r!=null&&r.set)return r.set.call(e.k,n),!0;if(!e.P){var i=Of(pi(e),t),o=i==null?void 0:i[Fe];if(o&&o.t===n)return e.o[t]=n,e.R[t]=!1,!0;if(mw(n,i)&&(n!==void 0||ko(e.t,t)))return!0;Nf(e),wr(e)}return e.o[t]===n&&(n!==void 0||t in e.o)||Number.isNaN(n)&&Number.isNaN(e.o[t])||(e.o[t]=n,e.R[t]=!0),!0},deleteProperty:function(e,t){return Of(e.t,t)!==void 0||t in e.t?(e.R[t]=!1,Nf(e),wr(e)):delete e.R[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var n=pi(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{writable:!0,configurable:e.i!==1||t!=="length",enumerable:r.enumerable,value:n[t]}},defineProperty:function(){wn(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){wn(12)}},Es={};Li(wa,function(e,t){Es[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}}),Es.deleteProperty=function(e,t){return Es.set.call(this,e,t,void 0)},Es.set=function(e,t,n){return wa.set.call(this,e[0],t,n,e[0])};var kP=function(){function e(n){var r=this;this.O=t1,this.D=!0,this.produce=function(i,o,s){if(typeof i=="function"&&typeof o!="function"){var a=o;o=i;var l=r;return function(v){var p=this;v===void 0&&(v=a);for(var g=arguments.length,x=Array(g>1?g-1:0),b=1;b<g;b++)x[b-1]=arguments[b];return l.produce(v,function(w){var S;return(S=o).call.apply(S,[p,w].concat(x))})}}var c;if(typeof o!="function"&&wn(6),s!==void 0&&typeof s!="function"&&wn(7),fr(i)){var u=qv(r),d=np(r,i,void 0),h=!0;try{c=o(d),h=!1}finally{h?iu(u):tp(u)}return typeof Promise!="undefined"&&c instanceof Promise?c.then(function(v){return Mf(u,s),Ef(v,u)},function(v){throw iu(u),v}):(Mf(u,s),Ef(c,u))}if(!i||typeof i!="object"){if((c=o(i))===void 0&&(c=i),c===gw&&(c=void 0),r.D&&ag(c,!0),s){var m=[],y=[];Wn("Patches").M(i,c,m,y),s(m,y)}return c}wn(21,i)},this.produceWithPatches=function(i,o){if(typeof i=="function")return function(c){for(var u=arguments.length,d=Array(u>1?u-1:0),h=1;h<u;h++)d[h-1]=arguments[h];return r.produceWithPatches(c,function(m){return i.apply(void 0,[m].concat(d))})};var s,a,l=r.produce(i,o,function(c,u){s=c,a=u});return typeof Promise!="undefined"&&l instanceof Promise?l.then(function(c){return[c,s,a]}):[l,s,a]},typeof(n==null?void 0:n.useProxies)=="boolean"&&this.setUseProxies(n.useProxies),typeof(n==null?void 0:n.autoFreeze)=="boolean"&&this.setAutoFreeze(n.autoFreeze)}var t=e.prototype;return t.createDraft=function(n){fr(n)||wn(8),Jr(n)&&(n=xP(n));var r=qv(this),i=np(this,n,void 0);return i[Fe].C=!0,tp(r),i},t.finishDraft=function(n,r){var i=n&&n[Fe],o=i.A;return Mf(o,r),Ef(void 0,o)},t.setAutoFreeze=function(n){this.D=n},t.setUseProxies=function(n){n&&!t1&&wn(20),this.O=n},t.applyPatches=function(n,r){var i;for(i=r.length-1;i>=0;i--){var o=r[i];if(o.path.length===0&&o.op==="replace"){n=o.value;break}}i>-1&&(r=r.slice(i+1));var s=Wn("Patches").$;return Jr(n)?s(n,r):this.produce(n,function(a){return s(a,r)})},e}(),Gt=new kP,yw=Gt.produce;Gt.produceWithPatches.bind(Gt);Gt.setAutoFreeze.bind(Gt);Gt.setUseProxies.bind(Gt);Gt.applyPatches.bind(Gt);Gt.createDraft.bind(Gt);Gt.finishDraft.bind(Gt);function _a(e){return _a=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_a(e)}function CP(e,t){if(_a(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(_a(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function PP(e){var t=CP(e,"string");return _a(t)=="symbol"?t:t+""}function MP(e,t,n){return(t=PP(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r1(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function i1(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?r1(Object(n),!0).forEach(function(r){MP(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r1(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function wt(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var o1=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),Tf=function(){return Math.random().toString(36).substring(7).split("").join(".")},au={INIT:"@@redux/INIT"+Tf(),REPLACE:"@@redux/REPLACE"+Tf(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+Tf()}};function EP(e){if(typeof e!="object"||e===null)return!1;for(var t=e;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function xw(e,t,n){var r;if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(wt(0));if(typeof t=="function"&&typeof n=="undefined"&&(n=t,t=void 0),typeof n!="undefined"){if(typeof n!="function")throw new Error(wt(1));return n(xw)(e,t)}if(typeof e!="function")throw new Error(wt(2));var i=e,o=t,s=[],a=s,l=!1;function c(){a===s&&(a=s.slice())}function u(){if(l)throw new Error(wt(3));return o}function d(v){if(typeof v!="function")throw new Error(wt(4));if(l)throw new Error(wt(5));var p=!0;return c(),a.push(v),function(){if(!!p){if(l)throw new Error(wt(6));p=!1,c();var x=a.indexOf(v);a.splice(x,1),s=null}}}function h(v){if(!EP(v))throw new Error(wt(7));if(typeof v.type=="undefined")throw new Error(wt(8));if(l)throw new Error(wt(9));try{l=!0,o=i(o,v)}finally{l=!1}for(var p=s=a,g=0;g<p.length;g++){var x=p[g];x()}return v}function m(v){if(typeof v!="function")throw new Error(wt(10));i=v,h({type:au.REPLACE})}function y(){var v,p=d;return v={subscribe:function(x){if(typeof x!="object"||x===null)throw new Error(wt(11));function b(){x.next&&x.next(u())}b();var w=p(b);return{unsubscribe:w}}},v[o1]=function(){return this},v}return h({type:au.INIT}),r={dispatch:h,subscribe:d,getState:u,replaceReducer:m},r[o1]=y,r}function OP(e){Object.keys(e).forEach(function(t){var n=e[t],r=n(void 0,{type:au.INIT});if(typeof r=="undefined")throw new Error(wt(12));if(typeof n(void 0,{type:au.PROBE_UNKNOWN_ACTION()})=="undefined")throw new Error(wt(13))})}function NP(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var i=t[r];typeof e[i]=="function"&&(n[i]=e[i])}var o=Object.keys(n),s;try{OP(n)}catch(a){s=a}return function(l,c){if(l===void 0&&(l={}),s)throw s;for(var u=!1,d={},h=0;h<o.length;h++){var m=o[h],y=n[m],v=l[m],p=y(v,c);if(typeof p=="undefined")throw c&&c.type,new Error(wt(14));d[m]=p,u=u||p!==v}return u=u||o.length!==Object.keys(l).length,u?d:l}}function lu(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.length===0?function(r){return r}:t.length===1?t[0]:t.reduce(function(r,i){return function(){return r(i.apply(void 0,arguments))}})}function TP(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return function(){var i=r.apply(void 0,arguments),o=function(){throw new Error(wt(15))},s={getState:i.getState,dispatch:function(){return o.apply(void 0,arguments)}},a=t.map(function(l){return l(s)});return o=lu.apply(void 0,a)(i.dispatch),i1(i1({},i),{},{dispatch:o})}}}function bw(e){var t=function(r){var i=r.dispatch,o=r.getState;return function(s){return function(a){return typeof a=="function"?a(i,o,e):s(a)}}};return t}var ww=bw();ww.withExtraArgument=bw;var s1=ww,_w=globalThis&&globalThis.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])},e(t,n)};return function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),RP=globalThis&&globalThis.__generator||function(e,t){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,s;return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(c){return function(u){return l([c,u])}}function l(c){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(o=c[0]&2?i.return:c[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,c[1])).done)return o;switch(i=0,o&&(c=[c[0]&2,o.value]),c[0]){case 0:case 1:o=c;break;case 4:return n.label++,{value:c[1],done:!1};case 5:n.label++,i=c[1],c=[0];continue;case 7:c=n.ops.pop(),n.trys.pop();continue;default:if(o=n.trys,!(o=o.length>0&&o[o.length-1])&&(c[0]===6||c[0]===2)){n=0;continue}if(c[0]===3&&(!o||c[1]>o[0]&&c[1]<o[3])){n.label=c[1];break}if(c[0]===6&&n.label<o[1]){n.label=o[1],o=c;break}if(o&&n.label<o[2]){n.label=o[2],n.ops.push(c);break}o[2]&&n.ops.pop(),n.trys.pop();continue}c=t.call(e,n)}catch(u){c=[6,u],i=0}finally{r=o=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}},Io=globalThis&&globalThis.__spreadArray||function(e,t){for(var n=0,r=t.length,i=e.length;n<r;n++,i++)e[i]=t[n];return e},$P=Object.defineProperty,LP=Object.defineProperties,AP=Object.getOwnPropertyDescriptors,a1=Object.getOwnPropertySymbols,zP=Object.prototype.hasOwnProperty,IP=Object.prototype.propertyIsEnumerable,l1=function(e,t,n){return t in e?$P(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},Hr=function(e,t){for(var n in t||(t={}))zP.call(t,n)&&l1(e,n,t[n]);if(a1)for(var r=0,i=a1(t);r<i.length;r++){var n=i[r];IP.call(t,n)&&l1(e,n,t[n])}return e},Rf=function(e,t){return LP(e,AP(t))},DP=function(e,t,n){return new Promise(function(r,i){var o=function(l){try{a(n.next(l))}catch(c){i(c)}},s=function(l){try{a(n.throw(l))}catch(c){i(c)}},a=function(l){return l.done?r(l.value):Promise.resolve(l.value).then(o,s)};a((n=n.apply(e,t)).next())})},FP=typeof window!="undefined"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?lu:lu.apply(null,arguments)};function jP(e){if(typeof e!="object"||e===null)return!1;var t=Object.getPrototypeOf(e);if(t===null)return!0;for(var n=t;Object.getPrototypeOf(n)!==null;)n=Object.getPrototypeOf(n);return t===n}function Ur(e,t){function n(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];if(t){var o=t.apply(void 0,r);if(!o)throw new Error("prepareAction did not return an object");return Hr(Hr({type:e,payload:o.payload},"meta"in o&&{meta:o.meta}),"error"in o&&{error:o.error})}return{type:e,payload:r[0]}}return n.toString=function(){return""+e},n.type=e,n.match=function(r){return r.type===e},n}var BP=function(e){_w(t,e);function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=e.apply(this,n)||this;return Object.setPrototypeOf(i,t.prototype),i}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(t.bind.apply(t,Io([void 0],n[0].concat(this)))):new(t.bind.apply(t,Io([void 0],n.concat(this))))},t}(Array),VP=function(e){_w(t,e);function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=e.apply(this,n)||this;return Object.setPrototypeOf(i,t.prototype),i}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(t.bind.apply(t,Io([void 0],n[0].concat(this)))):new(t.bind.apply(t,Io([void 0],n.concat(this))))},t}(Array);function ip(e){return fr(e)?yw(e,function(){}):e}function WP(e){return typeof e=="boolean"}function HP(){return function(t){return UP(t)}}function UP(e){e===void 0&&(e={});var t=e.thunk,n=t===void 0?!0:t;e.immutableCheck,e.serializableCheck,e.actionCreatorCheck;var r=new BP;return n&&(WP(n)?r.push(s1):r.push(s1.withExtraArgument(n.extraArgument))),r}var YP=!0;function XP(e){var t=HP(),n=e||{},r=n.reducer,i=r===void 0?void 0:r,o=n.middleware,s=o===void 0?t():o,a=n.devTools,l=a===void 0?!0:a,c=n.preloadedState,u=c===void 0?void 0:c,d=n.enhancers,h=d===void 0?void 0:d,m;if(typeof i=="function")m=i;else if(jP(i))m=NP(i);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var y=s;typeof y=="function"&&(y=y(t));var v=TP.apply(void 0,y),p=lu;l&&(p=FP(Hr({trace:!YP},typeof l=="object"&&l)));var g=new VP(v),x=g;Array.isArray(h)?x=Io([v],h):typeof h=="function"&&(x=h(g));var b=p.apply(void 0,x);return xw(m,u,b)}function Sw(e){var t={},n=[],r,i={addCase:function(o,s){var a=typeof o=="string"?o:o.type;if(!a)throw new Error("`builder.addCase` cannot be called with an empty action type");if(a in t)throw new Error("`builder.addCase` cannot be called with two reducers for the same action type");return t[a]=s,i},addMatcher:function(o,s){return n.push({matcher:o,reducer:s}),i},addDefaultCase:function(o){return r=o,i}};return e(i),[t,n,r]}function KP(e){return typeof e=="function"}function GP(e,t,n,r){n===void 0&&(n=[]);var i=typeof t=="function"?Sw(t):[t,n,r],o=i[0],s=i[1],a=i[2],l;if(KP(e))l=function(){return ip(e())};else{var c=ip(e);l=function(){return c}}function u(d,h){d===void 0&&(d=l());var m=Io([o[h.type]],s.filter(function(y){var v=y.matcher;return v(h)}).map(function(y){var v=y.reducer;return v}));return m.filter(function(y){return!!y}).length===0&&(m=[a]),m.reduce(function(y,v){if(v)if(Jr(y)){var p=y,g=v(p,h);return g===void 0?y:g}else{if(fr(y))return yw(y,function(x){return v(x,h)});var g=v(y,h);if(g===void 0){if(y===null)return y;throw Error("A case reducer on a non-draftable value must not return undefined")}return g}return y},d)}return u.getInitialState=l,u}function qP(e,t){return e+"/"+t}function Wi(e){var t=e.name;if(!t)throw new Error("`name` is a required option for createSlice");var n=typeof e.initialState=="function"?e.initialState:ip(e.initialState),r=e.reducers||{},i=Object.keys(r),o={},s={},a={};i.forEach(function(u){var d=r[u],h=qP(t,u),m,y;"reducer"in d?(m=d.reducer,y=d.prepare):m=d,o[u]=m,s[h]=m,a[u]=y?Ur(h,y):Ur(h)});function l(){var u=typeof e.extraReducers=="function"?Sw(e.extraReducers):[e.extraReducers],d=u[0],h=d===void 0?{}:d,m=u[1],y=m===void 0?[]:m,v=u[2],p=v===void 0?void 0:v,g=Hr(Hr({},h),s);return GP(n,function(x){for(var b in g)x.addCase(b,g[b]);for(var w=0,S=y;w<S.length;w++){var C=S[w];x.addMatcher(C.matcher,C.reducer)}p&&x.addDefaultCase(p)})}var c;return{name:t,reducer:function(u,d){return c||(c=l()),c(u,d)},actions:a,caseReducers:o,getInitialState:function(){return c||(c=l()),c.getInitialState()}}}var QP="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",ZP=function(e){e===void 0&&(e=21);for(var t="",n=e;n--;)t+=QP[Math.random()*64|0];return t},JP=["name","message","stack","code"],$f=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),c1=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),eM=function(e){if(typeof e=="object"&&e!==null){for(var t={},n=0,r=JP;n<r.length;n++){var i=r[n];typeof e[i]=="string"&&(t[i]=e[i])}return t}return{message:String(e)}};(function(){function e(t,n,r){var i=Ur(t+"/fulfilled",function(c,u,d,h){return{payload:c,meta:Rf(Hr({},h||{}),{arg:d,requestId:u,requestStatus:"fulfilled"})}}),o=Ur(t+"/pending",function(c,u,d){return{payload:void 0,meta:Rf(Hr({},d||{}),{arg:u,requestId:c,requestStatus:"pending"})}}),s=Ur(t+"/rejected",function(c,u,d,h,m){return{payload:h,error:(r&&r.serializeError||eM)(c||"Rejected"),meta:Rf(Hr({},m||{}),{arg:d,requestId:u,rejectedWithValue:!!h,requestStatus:"rejected",aborted:(c==null?void 0:c.name)==="AbortError",condition:(c==null?void 0:c.name)==="ConditionError"})}}),a=typeof AbortController!="undefined"?AbortController:function(){function c(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return c.prototype.abort=function(){},c}();function l(c){return function(u,d,h){var m=r!=null&&r.idGenerator?r.idGenerator(c):ZP(),y=new a,v;function p(x){v=x,y.abort()}var g=function(){return DP(this,null,function(){var x,b,w,S,C,P,M;return RP(this,function(O){switch(O.label){case 0:return O.trys.push([0,4,,5]),S=(x=r==null?void 0:r.condition)==null?void 0:x.call(r,c,{getState:d,extra:h}),nM(S)?[4,S]:[3,2];case 1:S=O.sent(),O.label=2;case 2:if(S===!1||y.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return C=new Promise(function(N,A){return y.signal.addEventListener("abort",function(){return A({name:"AbortError",message:v||"Aborted"})})}),u(o(m,c,(b=r==null?void 0:r.getPendingMeta)==null?void 0:b.call(r,{requestId:m,arg:c},{getState:d,extra:h}))),[4,Promise.race([C,Promise.resolve(n(c,{dispatch:u,getState:d,extra:h,requestId:m,signal:y.signal,abort:p,rejectWithValue:function(N,A){return new $f(N,A)},fulfillWithValue:function(N,A){return new c1(N,A)}})).then(function(N){if(N instanceof $f)throw N;return N instanceof c1?i(N.payload,m,c,N.meta):i(N,m,c)})])];case 3:return w=O.sent(),[3,5];case 4:return P=O.sent(),w=P instanceof $f?s(null,m,c,P.payload,P.meta):s(P,m,c),[3,5];case 5:return M=r&&!r.dispatchConditionRejection&&s.match(w)&&w.meta.condition,M||u(w),[2,w]}})})}();return Object.assign(g,{abort:p,requestId:m,arg:c,unwrap:function(){return g.then(tM)}})}}return Object.assign(l,{pending:o,rejected:s,fulfilled:i,typePrefix:t})}return e.withTypes=function(){return e},e})();function tM(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function nM(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var ug="listenerMiddleware";Ur(ug+"/add");Ur(ug+"/removeAll");Ur(ug+"/remove");var u1;typeof queueMicrotask=="function"&&queueMicrotask.bind(typeof window!="undefined"?window:typeof global!="undefined"?global:globalThis);bP();const kw=Wi({name:"site",initialState:{darkStatus:!1,sideBarStatus:!0},reducers:{setDarkMode:e=>{e.darkStatus=!e.darkStatus},setSideBarStatus:e=>{e.sideBarStatus=!e.sideBarStatus}}}),{setDarkMode:Cw,setSideBarStatus:rM}=kw.actions;var iM=kw.reducer;const d1=({whichStatus:e,changeStatus:t})=>{const[n,r]=_.exports.useState(!1),i=eg();return f(pP,{children:f("div",{className:`button-box ${n?"button-true":""}`,onClick:()=>{!e||(r(!n),e==="online"?t():i(Cw()))},children:f("div",{className:"ball"})})})},oM=()=>{let e=si();const[t,n]=_.exports.useState(!1),[r,i]=_.exports.useState(!1);return f(q3,{children:k("div",{className:"profile-box",children:[f("div",{className:"profile",onClick:()=>n(!t),children:f(ru,{})}),f("div",{className:`profile-menu ${t?"show-profile-menu":""}`,children:k("div",{className:"menu-box",children:[k("div",{className:"profile-info",children:[f("div",{className:"pp",children:f(ru,{})}),k("div",{className:"info",children:[f("div",{className:"username",children:"khaleesi"}),k("div",{className:"status",children:[f("div",{className:`status-icon ${r?"online":""}`,children:f(tg,{})}),f("span",{children:r?"Online":"Offline"})]})]})]}),k("div",{className:"status-button",children:[f("span",{children:"Online"}),f(d1,{whichStatus:"online",changeStatus:()=>i(!r)})]}),f("div",{className:"menu-list",children:k("ul",{children:[f("li",{children:k("div",{className:"item",children:[f(J3,{})," ",f("span",{children:"Channel"})]})}),f("li",{children:k("div",{className:"item",children:[f(hP,{})," ",f("span",{children:"Video Producer"})]})}),f("li",{children:k("div",{className:"item",children:[f(Y3,{})," ",f("span",{children:"Creator Dashboard"})]})}),f("li",{children:k("div",{className:"item",children:[f(Q3,{})," ",f("span",{children:"Safety"})]})}),f("hr",{}),f("li",{children:k("div",{className:"item",children:[f(Jh,{})," ",f("span",{children:"Settings"})]})}),f("li",{children:k("div",{className:"item",children:[f(Z3,{style:{transform:"rotate(180deg)"}})," ",f("span",{children:"BetterTTV Settings"})]})}),k("li",{children:[k("div",{className:"item",children:[f(nP,{})," ",f("span",{children:"Language"})]}),f(sP,{})]}),k("li",{children:[k("div",{className:"item",children:[f(hw,{})," ",f("span",{children:"Dark Theme"})]}),f(d1,{whichStatus:"darkmode"})]}),f("hr",{}),f("li",{children:k("div",{className:"item",onClick:()=>{document.cookie="isLoggedIn="+!1,e("/login")},children:[f(iP,{style:{transform:"rotate(180deg)"}})," ",f("span",{children:"Log Out"})]})})]})})]})})]})})},sM=ee.div`
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
`,aM=ee.div`
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
`,lM=ee.div`
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
`,cM=({user:e,imageId:t})=>f(aM,{children:f("li",{children:k("div",{className:"item",children:[f("div",{className:"pp",children:f("img",{src:`https://i.pravatar.cc/5${t}`})}),k("div",{className:"hover-section",children:[k("div",{className:"info",children:[f("div",{className:"username",children:e.username}),f("div",{className:"title",children:e.game})]}),k("div",{className:"live",children:[f("div",{className:"live-icon",children:f(tg,{})}),f("span",{children:"333"})]})]})]})})}),f1=()=>{const{users:e}=At(t=>t.user);return f(lM,{children:k("div",{className:"list",children:[f("ul",{children:e.map((t,n)=>{if(!(n>4))return f(cM,{user:t,imageId:n},n)})}),f("div",{className:"show-more",children:f("span",{children:"Show More"})})]})})},uM=ee.div`
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
`,Pw=({placeholder:e})=>{const[t,n]=_.exports.useState(!1);return f(uM,{children:k("div",{className:`searchbar-box ${t?"focus":""}`,children:[f("div",{className:"search-icon",children:f(rg,{})}),f("input",{type:"text",placeholder:e,className:"input",onFocus:()=>n(!0),onBlur:()=>n(!1)})]})})},dM=({mySize:e})=>{const{sideBarStatus:t}=At(r=>r.site),n=eg();return f(sM,{children:k("div",{className:"sidebar-box",children:[k("div",{className:"list-title",children:[f("h1",{children:"Followed Channels"}),f("div",{className:"title-icon",onClick:()=>n(rM(!t)),children:f(X3,{})}),f("div",{className:"followed",children:f(K3,{})})]}),f(f1,{}),k("div",{className:"list-title",children:[f("h1",{children:"Recommended Channels"}),f("div",{className:"camera",children:f(oP,{})})]}),f(f1,{}),f("div",{className:"side-search",children:f(Pw,{placeholder:"Search to Add Friends"})})]})})},fM=({mySize:e})=>{const{pathname:t}=Qt();return f(W3,{children:k(ot,{children:[f("div",{className:"header-box",children:k("header",{children:[f("div",{className:"left",children:k("ul",{children:[f("li",{children:f("div",{className:"item",children:f(je,{to:"/",children:f("div",{className:"logo",children:f("img",{src:"./public/images/logo/filtered/savingpulse-mb-transparent.png"})})})})}),f("li",{className:t==="/mutual-funds"?"active":"",children:f(je,{to:"/mutual-funds",className:"link",children:f("div",{className:"item",children:"Mutual funds"})})}),f("li",{className:t==="/following"?"active":"",children:f(je,{to:"/following",className:"link",children:f("div",{className:"item",children:"Following"})})}),f("li",{className:t==="/"?"active":"",children:f(je,{to:"/",className:"link",children:f("div",{className:"item",children:"Home"})})}),f("li",{className:t==="/ipo"?"active":"",children:f(je,{to:"/ipo",className:"link",children:f("div",{className:"item",children:"IPO's"})})}),f("li",{className:t==="/offers"?"active":"",children:f(je,{to:"/offers",className:"link",children:f("div",{className:"item",children:"Offers"})})}),f("li",{children:f("div",{className:"item",children:f(ng,{className:"item-icon"})})})]})}),f("div",{className:"bottom"}),k("div",{className:"right",children:[k("div",{className:"search-bar",children:[f("input",{type:"text",placeholder:"Search"}),f("div",{className:"search-icon",children:f(rg,{})})]}),f("div",{className:"right-icons",children:f("ul",{children:f("li",{children:f(G3,{})})})}),f("div",{className:"profile-desktop",children:f(oM,{})})]})]})}),f("div",{className:"left-bar",children:f(dM,{mySize:e})})]})})},hM=ee.header`
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
`,pM=ee.div`
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
`;function mM(e){return de({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M456.69 421.39L362.6 327.3a173.81 173.81 0 0034.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 00327.3 362.6l94.09 94.09a25 25 0 0035.3-35.3zM97.92 222.72a124.8 124.8 0 11124.8 124.8 124.95 124.95 0 01-124.8-124.8z"}}]})(e)}const gM=async(e,t={})=>{const{method:n="GET",headers:r={},body:i}=t;try{const o=await fetch(e,{method:n,headers:{"Content-Type":"application/json",...r},body:n==="GET"?void 0:JSON.stringify(i)});if(!o.ok){const s=await o.json();throw new Error(s.message||"Something went wrong")}return await o.json()}catch(o){throw console.error("API Request Error:",o.message),new Error(o.message||"Something went wrong")}},td=()=>"http://savingpulse.com",nd=async e=>await gM(e),Za=(e="")=>{const t=bM(e);return nd(t)},vM=e=>{const t=`${td()}/mutual-funds/${e}?ajax=true`;return nd(t)},yM=e=>{const t=`${td()}/mutual-funds-chart/${e}?ajax=true`;return nd(t)},xM=e=>{const t=`${td()}/search-for-schemes/${encodeURIComponent(e)}?ajax=true`;return nd(t)},bM=e=>{const n={schemes:"/schemes","sip-with-100":"/schemes/sip-with-100","high-return":"/schemes/high-return","tax-saving":"/schemes/tax-saving","large-cap":"/schemes/large-cap","mid-cap":"/schemes/mid-cap","small-cap":"/schemes/small-cap"}[e]||"";return`${td()}${n}?ajax=true`};function wM(e){return de({tag:"svg",attr:{version:"1.1",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 4.736c-0.515 0-0.933-0.418-0.933-0.933v-2.798c0-0.515 0.418-0.933 0.933-0.933s0.933 0.418 0.933 0.933v2.798c0 0.515-0.418 0.933-0.933 0.933z"}},{tag:"path",attr:{d:"M8 15.577c-0.322 0-0.583-0.261-0.583-0.583v-2.798c0-0.322 0.261-0.583 0.583-0.583s0.583 0.261 0.583 0.583v2.798c0 0.322-0.261 0.583-0.583 0.583z"}},{tag:"path",attr:{d:"M5.902 5.24c-0.302 0-0.596-0.157-0.758-0.437l-1.399-2.423c-0.241-0.418-0.098-0.953 0.32-1.194s0.953-0.098 1.194 0.32l1.399 2.423c0.241 0.418 0.098 0.953-0.32 1.194-0.138 0.079-0.288 0.117-0.436 0.117z"}},{tag:"path",attr:{d:"M11.498 14.582c-0.181 0-0.358-0.094-0.455-0.262l-1.399-2.423c-0.145-0.251-0.059-0.572 0.192-0.717s0.572-0.059 0.717 0.192l1.399 2.423c0.145 0.251 0.059 0.572-0.192 0.717-0.083 0.048-0.173 0.070-0.262 0.070z"}},{tag:"path",attr:{d:"M4.365 6.718c-0.138 0-0.279-0.035-0.407-0.109l-2.423-1.399c-0.39-0.225-0.524-0.724-0.299-1.115s0.724-0.524 1.115-0.299l2.423 1.399c0.39 0.225 0.524 0.724 0.299 1.115-0.151 0.262-0.425 0.408-0.707 0.408z"}},{tag:"path",attr:{d:"M14.057 11.964c-0.079 0-0.159-0.020-0.233-0.063l-2.423-1.399c-0.223-0.129-0.299-0.414-0.171-0.637s0.414-0.299 0.637-0.171l2.423 1.399c0.223 0.129 0.299 0.414 0.171 0.637-0.086 0.15-0.243 0.233-0.404 0.233z"}},{tag:"path",attr:{d:"M3.803 8.758h-2.798c-0.418 0-0.758-0.339-0.758-0.758s0.339-0.758 0.758-0.758h2.798c0.419 0 0.758 0.339 0.758 0.758s-0.339 0.758-0.758 0.758z"}},{tag:"path",attr:{d:"M14.995 8.466c-0 0 0 0 0 0h-2.798c-0.258-0-0.466-0.209-0.466-0.466s0.209-0.466 0.466-0.466c0 0 0 0 0 0h2.798c0.258 0 0.466 0.209 0.466 0.466s-0.209 0.466-0.466 0.466z"}},{tag:"path",attr:{d:"M1.943 12.197c-0.242 0-0.477-0.125-0.606-0.35-0.193-0.335-0.079-0.762 0.256-0.955l2.423-1.399c0.335-0.193 0.762-0.079 0.955 0.256s0.079 0.762-0.256 0.955l-2.423 1.399c-0.11 0.064-0.23 0.094-0.349 0.094z"}},{tag:"path",attr:{d:"M11.635 6.368c-0.161 0-0.318-0.084-0.404-0.233-0.129-0.223-0.052-0.508 0.171-0.637l2.423-1.399c0.223-0.129 0.508-0.052 0.637 0.171s0.052 0.508-0.171 0.637l-2.423 1.399c-0.073 0.042-0.154 0.063-0.233 0.063z"}},{tag:"path",attr:{d:"M4.502 14.699c-0.109 0-0.219-0.028-0.32-0.086-0.307-0.177-0.412-0.569-0.235-0.876l1.399-2.423c0.177-0.307 0.569-0.412 0.876-0.235s0.412 0.569 0.235 0.876l-1.399 2.423c-0.119 0.206-0.334 0.321-0.556 0.321z"}},{tag:"path",attr:{d:"M10.098 4.832c-0.079 0-0.159-0.020-0.233-0.063-0.223-0.129-0.299-0.414-0.171-0.637l1.399-2.423c0.129-0.223 0.414-0.299 0.637-0.171s0.299 0.414 0.171 0.637l-1.399 2.423c-0.086 0.15-0.243 0.233-0.404 0.233z"}}]})(e)}function _M(e){return de({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M384 336H192c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16l140.1 0L400 115.9V320c0 8.8-7.2 16-16 16zM192 384H384c35.3 0 64-28.7 64-64V115.9c0-12.7-5.1-24.9-14.1-33.9L366.1 14.1c-9-9-21.2-14.1-33.9-14.1H192c-35.3 0-64 28.7-64 64V320c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H256c35.3 0 64-28.7 64-64V416H272v32c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192c0-8.8 7.2-16 16-16H96V128H64z"}}]})(e)}const SM=({searchStatus:e,setSearchStatus:t})=>{const[n,r]=_.exports.useState(""),[i,o]=_.exports.useState(!1),[s,a]=_.exports.useState([]),l=h=>{h.target.value.length<3};_.exports.useEffect(()=>{if(n.length<3)return;o(!0),(async()=>{try{const m=encodeURIComponent(n),y=await xM(m);a(y)}catch(m){console.log(m)}finally{o(!1)}})()},[n]);const c=h=>{r(h.target.value)},u=_.exports.useRef(null);_.exports.useState("Copy this text to clipboard!");const d=()=>{const h=u.current.innerText;navigator.clipboard.writeText(h).then(()=>{console.log("Text copied to clipboard!")}).catch(m=>{console.error("Failed to copy text: ",m)})};return f(pM,{className:e?"search-visible":"",children:k("div",{className:"search-box",children:[k("div",{className:"search-bar",children:[f(fw,{className:"search-close",onClick:()=>t(!e)}),f("input",{type:"text",value:n,onChange:c,onKeyDown:l,placeholder:"Search mutual fund scheme..."})]}),f("div",{className:"search-result",children:i?f("div",{className:"spinner",children:f(wM,{})}):s.map((h,m)=>k("p",{children:[k(je,{to:`/mutual-fund/${h.Scheme_Code}`,children:[f(mM,{})," ",f("span",{ref:u,children:h.Scheme_Name})]},m),f("span",{onClick:d,className:"click-to-copy",children:f(_M,{})})]},m))})]})})},kM=ee.div`
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
`,CM=ee.div`
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
`,PM=()=>{const{darkStatus:e}=At(r=>r.site),t=eg();return f(CM,{children:f("div",{className:"darkMode-container",onClick:r=>(r.preventDefault(),t(Cw())),children:f("div",{className:`ball ${e?"dark":""}`})})})},MM=({handleCloseProfileMenu:e})=>{let t=si();return f(kM,{children:k("div",{className:"profile-menu-container",children:[k("div",{className:"title",children:[f(fw,{onClick:e}),f("h1",{children:"Account"}),f(Jh,{})]}),k("div",{className:"user",children:[f("div",{className:"user__top",children:f("div",{className:"user-box",children:f(ru,{})})}),f("div",{className:"user__bottom",children:f("div",{className:"username",children:"Arun Suthar"})}),f("span",{className:"user-since",children:"Member since 2020"})]}),f("div",{className:"settings",children:k("ul",{children:[f("li",{children:k("div",{className:"settings__title",children:[k("div",{className:"title-left",children:[f(tP,{className:"title-icon"}),"Subscriptions"]}),f(Pf,{})]})}),f("li",{children:k("div",{className:"settings__title",children:[k("div",{className:"title-left",children:[f(eP,{className:"title-icon"}),"Friends"]}),f(Pf,{})]})}),f("li",{children:f(je,{to:"/settings",children:k("div",{className:"settings__title",children:[k("div",{className:"title-left",children:[f(Jh,{className:"title-icon"}),"Settings"]}),f(Pf,{})]})})}),f("li",{children:k("div",{className:"settings__title",children:[k("div",{className:"title-left",children:[f(hw,{className:"title-icon"}),"Dark Mode"]}),f(PM,{})]})}),f("li",{children:f("div",{className:"settings__title",onClick:()=>{document.cookie="isLoggedIn="+!1,t("/login")},children:k("div",{className:"title-left",children:[f(fP,{className:"title-icon"}),"Logout"]})})})]})})]})})},EM=()=>{const{pathname:e}=Qt(),[t,n]=_.exports.useState(!1),[r,i]=_.exports.useState(!1),o=()=>i(!r);let s="Home";switch(e){case"/mutual-funds":s="Mutual Funds";break;case"/following":s="Mutual Funds";break;case"/":s="Home";break;case"/ipo":s="Intial Public Offers";break;case"/offers":s="Offers";break;case"/all-mutual-funds":s="All Mutual Funds";break}return k(hM,{children:[k("header",{children:[f(je,{to:"/",children:f("div",{className:"logo",children:f("img",{src:"./images/logo/filtered/savingpulse-mb-transparent.png"})})}),f("h1",{className:"page-name",children:s}),f(SM,{searchStatus:t,setSearchStatus:n}),k("div",{className:"right-buttons",children:[f(rg,{onClick:()=>n(!t)}),"\xA0 \xA0",f("div",{className:`profile-menu-box ${r?"visible":""}`,children:f(MM,{handleCloseProfileMenu:o})}),f("div",{className:"profile-box",children:f(ru,{onClick:()=>i(!r)})})]})]}),k("nav",{children:[f(je,{to:"/mutual-funds",onClick:()=>i(!1),children:k("div",{className:`item ${e==="/mutual-funds"?"active":""}`,children:[f(uP,{}),f("span",{children:"Funds"})]})}),f(je,{to:"/following",onClick:()=>i(!1),children:k("div",{className:`item ${e==="/following"?"active":""}`,children:[f(dP,{}),f("span",{children:"Following"})]})}),f(je,{to:"/",onClick:()=>i(!1),children:k("div",{className:`item ${e==="/"?"active":""}`,children:[f(aP,{}),f("span",{children:"Home"})]})}),f(je,{to:"/ipo",onClick:()=>i(!1),children:k("div",{className:`item ${e==="/ipo"?"active":""}`,children:[f(cP,{className:"item__browse"}),f("span",{children:"IPO"})]})}),f(je,{to:"/offers",onClick:()=>i(!1),children:k("div",{className:`item ${e==="/offers"?"active":""}`,children:[f(rP,{className:"item__profile"}),f("span",{children:"Offers"})]})})]})]})},OM=({mySize:e})=>k("div",{className:"header",children:[f(EM,{}),f(fM,{mySize:e})]}),NM=ee.div`
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
`,TM=ee.div`
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
`,Lf=({ipo:e})=>{var t,n,r;return f(TM,{children:k("div",{className:"ipo-box",children:[k("div",{className:"header",children:[f("div",{className:"picture",children:f("img",{src:e.image,alt:""})}),k("div",{children:[f("h2",{className:"name",children:e.name}),k("p",{className:"offer",children:["Offer date: ",(t=e==null?void 0:e.date)==null?void 0:t.start," - ",(n=e==null?void 0:e.date)==null?void 0:n.end]})]})]}),k("div",{className:"actions",children:[k("div",{className:"tags",children:[f("div",{className:"tag",children:e.exchange}),f("div",{className:"tag",children:"Live"})]}),k("div",{className:"action-link",children:[f(je,{className:"link",to:"",title:"Apply",children:"Apply"}),k(je,{className:"link",to:"",title:"Check Allotment",children:[f("span",{className:"hide-mb1",children:"Check "}),"Allotment"]})]})]}),k("div",{className:"more-details",children:[k("div",{children:[f("span",{children:"Offer Price"}),f("span",{children:(r=e==null?void 0:e.price)==null?void 0:r.offer})]}),f("div",{className:"divider"}),k("div",{children:[f("span",{children:"Lot Size"}),f("span",{children:e.lotSize})]}),f("div",{className:"divider"}),k("div",{children:[f("span",{children:"Subscription"}),k("span",{children:[e.subscriptions," times"]})]})]})]})})},RM=ee.div`
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
`,$M=()=>f(RM,{children:f("div",{className:"tags-box",children:k("ul",{children:[f("li",{children:k("div",{className:"item",children:[f("span",{children:"Games"}),f("div",{className:"icon",children:f("img",{src:"https://static.twitchcdn.net/assets/gaming-e9019587744b56b11b43.svg",alt:""})})]})}),f("li",{children:k("div",{className:"item",children:[f("span",{children:"IRL"}),f("div",{className:"icon",children:f("img",{src:"https://static.twitchcdn.net/assets/irl-baa32e8e64a6974282c0.svg",alt:""})})]})}),f("li",{children:k("div",{className:"item",children:[f("span",{children:"Music"}),f("div",{className:"icon",children:f("img",{src:"https://static.twitchcdn.net/assets/music-5fb4595a30d04d991e24.svg",alt:""})})]})}),f("li",{children:k("div",{className:"item",children:[f("span",{children:"Esports"}),f("div",{className:"icon",children:f("img",{src:"https://static.twitchcdn.net/assets/esports-7a078acca57531d11e29.svg",alt:""})})]})}),f("li",{children:k("div",{className:"item",children:[f("span",{children:"Creative"}),f("div",{className:"icon",children:f("img",{src:"https://static.twitchcdn.net/assets/creative-6423fb5fbcf31fadee38.svg",alt:""})})]})})]})})}),LM=ee.div`
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
`,Mr=({title:e,to:t})=>{const{pathname:n}=Qt();return f(LM,{children:f("div",{className:`link-box ${n==t?"active":""}`,children:f(je,{to:t||"/",className:"link",children:e||"default"})})})};var Mw={};function AM(e){if(e&&e.__esModule)return e;var t={};if(e!=null){for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}}return t.default=e,t}var Ew=AM,ei={};function zM(e){return e&&e.__esModule?e:{default:e}}var IM=zM;function op(){return Ow=op=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},op.apply(this,arguments)}var Ow=op;function DM(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}var FM=DM,jM=FM;function BM(e,t){if(e==null)return{};var n=jM(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(n[r]=e[r]))}return n}var VM=BM;function WM(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var HM=WM;function h1(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function UM(e,t,n){return t&&h1(e.prototype,t),n&&h1(e,n),e}var YM=UM;function Po(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Po=function(n){return typeof n}:Po=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Po(e)}function fc(e){return typeof Symbol=="function"&&Po(Symbol.iterator)==="symbol"?sp=fc=function(n){return Po(n)}:sp=fc=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":Po(n)},fc(e)}var sp=fc;function XM(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var KM=XM,GM=sp,qM=KM;function QM(e,t){return t&&(GM(t)==="object"||typeof t=="function")?t:qM(e)}var ZM=QM;function ap(e){return Nw=ap=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},ap(e)}var Nw=ap;function lp(e,t){return Tw=lp=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},lp(e,t)}var Tw=lp,JM=Tw;function eE(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&JM(e,t)}var tE=eE,nE=function(){},dg=nE,Ja={};function rE(e){return e&&e.__esModule?e:{default:e}}var rd=rE,id={},Rw=rd;Object.defineProperty(id,"__esModule",{value:!0});id.default=void 0;var iE=Rw(_.exports);Rw(dg);var oE=function(t){t.index;var n=t.children;iE.default.Children.count(n)},sE=oE;id.default=sE;var fg={},el={};Object.defineProperty(el,"__esModule",{value:!0});el.default=void 0;var aE={RESISTANCE_COEF:.6,UNCERTAINTY_THRESHOLD:3};el.default=aE;var $w=rd;Object.defineProperty(fg,"__esModule",{value:!0});fg.default=cE;var lE=$w(_.exports),p1=$w(el);function cE(e){var t=e.children,n=e.startIndex,r=e.startX,i=e.pageX,o=e.viewLength,s=e.resistance,a=lE.default.Children.count(t)-1,l=n+(r-i)/o,c;return s?l<0?l=Math.exp(l*p1.default.RESISTANCE_COEF)-1:l>a&&(l=a+1-Math.exp((a-l)*p1.default.RESISTANCE_COEF)):l<0?(l=0,c=(l-n)*o+i):l>a&&(l=a,c=(l-n)*o+i),{index:l,startX:c}}var od={},uE=rd;Object.defineProperty(od,"__esModule",{value:!0});od.default=void 0;var m1=uE(_.exports),dE=function(t,n){var r=!1,i=function(u){return u?u.key:"empty"};if(t.children.length&&n.children.length){var o=m1.default.Children.map(t.children,i),s=o[t.index];if(s!=null){var a=m1.default.Children.map(n.children,i),l=a[n.index];s===l&&(r=!0)}}return r},fE=dE;od.default=fE;var sd={};Object.defineProperty(sd,"__esModule",{value:!0});sd.default=void 0;function hE(e,t){var n=e%t;return n<0?n+t:n}var pE=hE;sd.default=pE;(function(e){var t=rd;Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"checkIndexBounds",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(e,"computeIndex",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(e,"constant",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(e,"getDisplaySameSlide",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(e,"mod",{enumerable:!0,get:function(){return s.default}});var n=t(id),r=t(fg),i=t(el),o=t(od),s=t(sd)})(Ja);var mE=Ew,gr=IM;Object.defineProperty(ei,"__esModule",{value:!0});ei.getDomTreeShapes=Lw;ei.findNativeHandler=Aw;ei.default=ei.SwipeableViewsContext=void 0;var El=gr(Ow),gE=gr(VM),vE=gr(HM),yE=gr(YM),xE=gr(ZM),bE=gr(Nw),wE=gr(tE),Jn=mE(_.exports);gr(qo.exports);gr(dg);var Ol=Ja;function g1(e,t,n,r){return e.addEventListener(t,n,r),{remove:function(){e.removeEventListener(t,n,r)}}}var v1={container:{direction:"ltr",display:"flex",willChange:"transform"},slide:{width:"100%",WebkitFlexShrink:0,flexShrink:0,overflow:"auto"}},Ln={root:{x:{overflowX:"hidden"},"x-reverse":{overflowX:"hidden"},y:{overflowY:"hidden"},"y-reverse":{overflowY:"hidden"}},flexDirection:{x:"row","x-reverse":"row-reverse",y:"column","y-reverse":"column-reverse"},transform:{x:function(t){return"translate(".concat(-t,"%, 0)")},"x-reverse":function(t){return"translate(".concat(t,"%, 0)")},y:function(t){return"translate(0, ".concat(-t,"%)")},"y-reverse":function(t){return"translate(0, ".concat(t,"%)")}},length:{x:"width","x-reverse":"width",y:"height","y-reverse":"height"},rotationMatrix:{x:{x:[1,0],y:[0,1]},"x-reverse":{x:[-1,0],y:[0,1]},y:{x:[0,1],y:[1,0]},"y-reverse":{x:[0,-1],y:[1,0]}},scrollPosition:{x:"scrollLeft","x-reverse":"scrollLeft",y:"scrollTop","y-reverse":"scrollTop"},scrollLength:{x:"scrollWidth","x-reverse":"scrollWidth",y:"scrollHeight","y-reverse":"scrollHeight"},clientLength:{x:"clientWidth","x-reverse":"clientWidth",y:"clientHeight","y-reverse":"clientHeight"}};function Af(e,t){var n=t.duration,r=t.easeFunction,i=t.delay;return"".concat(e," ").concat(n," ").concat(r," ").concat(i)}function zf(e,t){var n=Ln.rotationMatrix[t];return{pageX:n.x[0]*e.pageX+n.x[1]*e.pageY,pageY:n.y[0]*e.pageX+n.y[1]*e.pageY}}function Nl(e){return e.touches=[{pageX:e.pageX,pageY:e.pageY}],e}function Lw(e,t){for(var n=[];e&&e!==t&&e!==document.body&&!e.hasAttribute("data-swipeable");){var r=window.getComputedStyle(e);r.getPropertyValue("position")==="absolute"||r.getPropertyValue("overflow-x")==="hidden"?n=[]:(e.clientWidth>0&&e.scrollWidth>e.clientWidth||e.clientHeight>0&&e.scrollHeight>e.clientHeight)&&n.push({element:e,scrollWidth:e.scrollWidth,scrollHeight:e.scrollHeight,clientWidth:e.clientWidth,clientHeight:e.clientHeight,scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}),e=e.parentNode}return n}var mi=null;function Aw(e){var t=e.domTreeShapes,n=e.pageX,r=e.startX,i=e.axis;return t.some(function(o){var s=n>=r;(i==="x"||i==="y")&&(s=!s);var a=Math.round(o[Ln.scrollPosition[i]]),l=a>0,c=a+o[Ln.clientLength[i]]<o[Ln.scrollLength[i]];return s&&c||!s&&l?(mi=o.element,!0):!1})}var zw=Jn.createContext();ei.SwipeableViewsContext=zw;var ad=function(e){(0,wE.default)(t,e);function t(n){var r;return(0,vE.default)(this,t),r=(0,xE.default)(this,(0,bE.default)(t).call(this,n)),r.rootNode=null,r.containerNode=null,r.ignoreNextScrollEvents=!1,r.viewLength=0,r.startX=0,r.lastX=0,r.vx=0,r.startY=0,r.isSwiping=void 0,r.started=!1,r.startIndex=0,r.transitionListener=null,r.touchMoveListener=null,r.activeSlide=null,r.indexCurrent=null,r.firstRenderTimeout=null,r.setRootNode=function(i){r.rootNode=i},r.setContainerNode=function(i){r.containerNode=i},r.setActiveSlide=function(i){r.activeSlide=i,r.updateHeight()},r.handleSwipeStart=function(i){var o=r.props.axis,s=zf(i.touches[0],o);r.viewLength=r.rootNode.getBoundingClientRect()[Ln.length[o]],r.startX=s.pageX,r.lastX=s.pageX,r.vx=0,r.startY=s.pageY,r.isSwiping=void 0,r.started=!0;var a=window.getComputedStyle(r.containerNode),l=a.getPropertyValue("-webkit-transform")||a.getPropertyValue("transform");if(l&&l!=="none"){var c=l.split("(")[1].split(")")[0].split(","),u=window.getComputedStyle(r.rootNode),d=zf({pageX:parseInt(c[4],10),pageY:parseInt(c[5],10)},o);r.startIndex=-d.pageX/(r.viewLength-parseInt(u.paddingLeft,10)-parseInt(u.paddingRight,10))||0}},r.handleSwipeMove=function(i){if(!r.started){r.handleTouchStart(i);return}if(!(mi!==null&&mi!==r.rootNode)){var o=r.props,s=o.axis,a=o.children,l=o.ignoreNativeScroll,c=o.onSwitching,u=o.resistance,d=zf(i.touches[0],s);if(r.isSwiping===void 0){var h=Math.abs(d.pageX-r.startX),m=Math.abs(d.pageY-r.startY),y=h>m&&h>Ol.constant.UNCERTAINTY_THRESHOLD;if(!u&&(s==="y"||s==="y-reverse")&&(r.indexCurrent===0&&r.startX<d.pageX||r.indexCurrent===Jn.Children.count(r.props.children)-1&&r.startX>d.pageX)){r.isSwiping=!1;return}if(h>m&&i.preventDefault(),y===!0||m>Ol.constant.UNCERTAINTY_THRESHOLD){r.isSwiping=y,r.startX=d.pageX;return}}if(r.isSwiping===!0){i.preventDefault(),r.vx=r.vx*.5+(d.pageX-r.lastX)*.5,r.lastX=d.pageX;var v=(0,Ol.computeIndex)({children:a,resistance:u,pageX:d.pageX,startIndex:r.startIndex,startX:r.startX,viewLength:r.viewLength}),p=v.index,g=v.startX;if(mi===null&&!l){var x=Lw(i.target,r.rootNode),b=Aw({domTreeShapes:x,startX:r.startX,pageX:d.pageX,axis:s});if(b)return}g?r.startX=g:mi===null&&(mi=r.rootNode),r.setIndexCurrent(p);var w=function(){c&&c(p,"move")};(r.state.displaySameSlide||!r.state.isDragging)&&r.setState({displaySameSlide:!1,isDragging:!0},w),w()}}},r.handleSwipeEnd=function(){if(mi=null,!!r.started&&(r.started=!1,r.isSwiping===!0)){var i=r.state.indexLatest,o=r.indexCurrent,s=i-o,a;Math.abs(r.vx)>r.props.threshold?r.vx>0?a=Math.floor(o):a=Math.ceil(o):Math.abs(s)>r.props.hysteresis?a=s>0?Math.floor(o):Math.ceil(o):a=i;var l=Jn.Children.count(r.props.children)-1;a<0?a=0:a>l&&(a=l),r.setIndexCurrent(a),r.setState({indexLatest:a,isDragging:!1},function(){r.props.onSwitching&&r.props.onSwitching(a,"end"),r.props.onChangeIndex&&a!==i&&r.props.onChangeIndex(a,i,{reason:"swipe"}),o===i&&r.handleTransitionEnd()})}},r.handleTouchStart=function(i){r.props.onTouchStart&&r.props.onTouchStart(i),r.handleSwipeStart(i)},r.handleTouchEnd=function(i){r.props.onTouchEnd&&r.props.onTouchEnd(i),r.handleSwipeEnd(i)},r.handleMouseDown=function(i){r.props.onMouseDown&&r.props.onMouseDown(i),i.persist(),r.handleSwipeStart(Nl(i))},r.handleMouseUp=function(i){r.props.onMouseUp&&r.props.onMouseUp(i),r.handleSwipeEnd(Nl(i))},r.handleMouseLeave=function(i){r.props.onMouseLeave&&r.props.onMouseLeave(i),r.started&&r.handleSwipeEnd(Nl(i))},r.handleMouseMove=function(i){r.props.onMouseMove&&r.props.onMouseMove(i),r.started&&r.handleSwipeMove(Nl(i))},r.handleScroll=function(i){if(r.props.onScroll&&r.props.onScroll(i),i.target===r.rootNode){if(r.ignoreNextScrollEvents){r.ignoreNextScrollEvents=!1;return}var o=r.state.indexLatest,s=Math.ceil(i.target.scrollLeft/i.target.clientWidth)+o;r.ignoreNextScrollEvents=!0,i.target.scrollLeft=0,r.props.onChangeIndex&&s!==o&&r.props.onChangeIndex(s,o,{reason:"focus"})}},r.updateHeight=function(){if(r.activeSlide!==null){var i=r.activeSlide.children[0];i!==void 0&&i.offsetHeight!==void 0&&r.state.heightLatest!==i.offsetHeight&&r.setState({heightLatest:i.offsetHeight})}},r.state={indexLatest:n.index,isDragging:!1,renderOnlyActive:!n.disableLazyLoading,heightLatest:0,displaySameSlide:!0},r.setIndexCurrent(n.index),r}return(0,yE.default)(t,[{key:"componentDidMount",value:function(){var r=this;this.transitionListener=g1(this.containerNode,"transitionend",function(i){i.target===r.containerNode&&r.handleTransitionEnd()}),this.touchMoveListener=g1(this.rootNode,"touchmove",function(i){r.props.disabled||r.handleSwipeMove(i)},{passive:!1}),this.props.disableLazyLoading||(this.firstRenderTimeout=setTimeout(function(){r.setState({renderOnlyActive:!1})},0)),this.props.action&&this.props.action({updateHeight:this.updateHeight})}},{key:"UNSAFE_componentWillReceiveProps",value:function(r){var i=r.index;typeof i=="number"&&i!==this.props.index&&(this.setIndexCurrent(i),this.setState({displaySameSlide:(0,Ol.getDisplaySameSlide)(this.props,r),indexLatest:i}))}},{key:"componentWillUnmount",value:function(){this.transitionListener.remove(),this.touchMoveListener.remove(),clearTimeout(this.firstRenderTimeout)}},{key:"getSwipeableViewsContext",value:function(){var r=this;return{slideUpdateHeight:function(){r.updateHeight()}}}},{key:"setIndexCurrent",value:function(r){if(!this.props.animateTransitions&&this.indexCurrent!==r&&this.handleTransitionEnd(),this.indexCurrent=r,this.containerNode){var i=this.props.axis,o=Ln.transform[i](r*100);this.containerNode.style.WebkitTransform=o,this.containerNode.style.transform=o}}},{key:"handleTransitionEnd",value:function(){!this.props.onTransitionEnd||this.state.displaySameSlide||this.state.isDragging||this.props.onTransitionEnd()}},{key:"render",value:function(){var r=this,i=this.props;i.action;var o=i.animateHeight,s=i.animateTransitions,a=i.axis,l=i.children,c=i.containerStyle,u=i.disabled;i.disableLazyLoading;var d=i.enableMouseEvents;i.hysteresis,i.ignoreNativeScroll,i.index,i.onChangeIndex,i.onSwitching,i.onTransitionEnd,i.resistance;var h=i.slideStyle,m=i.slideClassName,y=i.springConfig,v=i.style;i.threshold;var p=(0,gE.default)(i,["action","animateHeight","animateTransitions","axis","children","containerStyle","disabled","disableLazyLoading","enableMouseEvents","hysteresis","ignoreNativeScroll","index","onChangeIndex","onSwitching","onTransitionEnd","resistance","slideStyle","slideClassName","springConfig","style","threshold"]),g=this.state,x=g.displaySameSlide,b=g.heightLatest,w=g.indexLatest,S=g.isDragging,C=g.renderOnlyActive,P=u?{}:{onTouchStart:this.handleTouchStart,onTouchEnd:this.handleTouchEnd},M=!u&&d?{onMouseDown:this.handleMouseDown,onMouseUp:this.handleMouseUp,onMouseLeave:this.handleMouseLeave,onMouseMove:this.handleMouseMove}:{},O=(0,El.default)({},v1.slide,h),N,A;if(S||!s||x)N="all 0s ease 0s",A="all 0s ease 0s";else if(N=Af("transform",y),A=Af("-webkit-transform",y),b!==0){var z=", ".concat(Af("height",y));N+=z,A+=z}var H={height:null,WebkitFlexDirection:Ln.flexDirection[a],flexDirection:Ln.flexDirection[a],WebkitTransition:A,transition:N};if(!C){var Q=Ln.transform[a](this.indexCurrent*100);H.WebkitTransform=Q,H.transform=Q}return o&&(H.height=b),Jn.createElement(zw.Provider,{value:this.getSwipeableViewsContext()},Jn.createElement("div",(0,El.default)({ref:this.setRootNode,style:(0,El.default)({},Ln.root[a],v)},p,P,M,{onScroll:this.handleScroll}),Jn.createElement("div",{ref:this.setContainerNode,style:(0,El.default)({},H,v1.container,c),className:"react-swipeable-view-container"},Jn.Children.map(l,function(V,K){if(C&&K!==w)return null;var Y,Z=!0;return K===w&&(Z=!1,o&&(Y=r.setActiveSlide,O.overflowY="hidden")),Jn.createElement("div",{ref:Y,style:O,className:m,"aria-hidden":Z,"data-swipeable":"true"},V)}))))}}]),t}(Jn.Component);ad.displayName="ReactSwipableView";ad.propTypes={};ad.defaultProps={animateHeight:!1,animateTransitions:!0,axis:"x",disabled:!1,disableLazyLoading:!1,enableMouseEvents:!1,hysteresis:.6,ignoreNativeScroll:!1,index:0,threshold:5,springConfig:{duration:"0.35s",easeFunction:"cubic-bezier(0.15, 0.3, 0.25, 1)",delay:"0s"},resistance:!1};var _E=ad;ei.default=_E;(function(e){var t=Ew;Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(e,"SwipeableViewsContext",{enumerable:!0,get:function(){return n.SwipeableViewsContext}});var n=t(ei)})(Mw);var Iw=sk(Mw);const SE=ee.div`
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
`,hg=({tabs:e=[]})=>{const[t,n]=_.exports.useState(0);return k(SE,{children:[f("div",{className:"tab-manager",children:f("div",{className:"navigation",children:e.map((r,i)=>f("div",{className:t===i?"nav-active":"",onClick:()=>n(i),children:r.title},i))})}),f(Iw,{index:t,onChangeIndex:n,children:e.map((r,i)=>f("div",{children:r.component},i))})]})},Xi=()=>{_.exports.useState(!0);const{ipos:e}=At(t=>t.ipos);return f(ot,{children:k(NM,{children:[f("div",{className:"ipos-mobile1",children:f(hg,{tabs:[{name:"all",title:"All",component:f("div",{className:"container",children:e.map((t,n)=>f(Lf,{ipo:t,imageId:n},n))})},{name:"mainline",title:"Mainline",component:f("div",{className:"container",children:e.map((t,n)=>t.type!=="mainline"?null:f(Lf,{ipo:t,imageId:n},n))})},{name:"sme",title:"SME",component:f("div",{className:"container",children:e.map((t,n)=>t.type!=="sme"?null:f(Lf,{ipo:t,imageId:n},n))})}]})}),f("div",{className:"browse-desktop",children:k("div",{className:"ipo-box",children:[f("h1",{className:"page-title",children:"Browse"}),f($M,{}),f("div",{className:"nav",children:k("ul",{children:[f("li",{children:f(Mr,{to:"/browse",title:"Categories"})}),f("li",{children:f(Mr,{to:"/browse/all",title:"Live Channels"})})]})}),k("div",{className:"search-filter",children:[k("div",{className:"search-box",children:[f("span",{children:"Filter by"}),f(Pw,{placeholder:"Search Tags"})]}),k("div",{className:"filter",children:[f("span",{children:"Sort by"}),k("div",{className:"sort",children:["Recommended For You",f("div",{className:"sort-icon",children:f(uw,{})})]})]})]}),f(Hm,{})]})})]})})},kE=ee.div`
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
`,CE=ee.div`
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
`,PE=({user:e,imageId:t})=>f(CE,{children:k("div",{className:"channel-box",children:[k("div",{className:"live-screen",children:[f("img",{src:e.liveScreen,alt:""}),k("span",{children:[f(tg,{className:"live-icon"})," ",e.viewers]})]}),k("div",{className:"live-info",children:[k("div",{className:"user",children:[f("div",{className:"user-pp",children:f("img",{src:`https://i.pravatar.cc/5${t}`,alt:""})}),f("div",{className:"user-name",children:e.username})]}),f("div",{className:"title",children:e.title}),f("div",{className:"game",children:e.game}),f("div",{className:"tags",children:f("div",{className:"tag",children:e.tag})})]})]})}),ME=()=>{const{users:e}=At(t=>t.user);return f(ot,{children:e.map((t,n)=>f(PE,{user:t,imageId:n},n))})},EE=ee.div`
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
`,OE=({user:e,imageId:t})=>f(EE,{children:k("div",{className:"offline-box",children:[f("div",{className:"left",children:f("div",{className:"pp",children:f("img",{src:`https://i.pravatar.cc/5${t}`,alt:""})})}),k("div",{className:"right",children:[f("div",{className:"username",children:e.username}),f("div",{className:"videos",children:"7 new videos"})]})]})}),NE=()=>{const{users:e}=At(t=>t.user);return f(ot,{children:e.map((t,n)=>{if(n<3)return f(OE,{user:t,imageId:n},n)})})},TE=()=>(Qt(),f(ot,{children:k(kE,{children:[f("div",{className:"follow-mobile",children:k("div",{className:"follow-box",children:[f("h1",{children:"Following"}),f("h3",{children:"Your Live Channels"}),f(ME,{}),f("h3",{children:"Your Offline Channels"}),f(NE,{})]})}),f("div",{className:"follow-desktop",children:k("div",{className:"follow-box",children:[f("div",{className:"nav",children:k("ul",{children:[f("li",{children:f(Mr,{to:"/following",title:"Overview"})}),f("li",{children:f(Mr,{to:"/following/live",title:"Live"})}),f("li",{children:f(Mr,{to:"/following/videos",title:"Videos"})}),f("li",{children:f(Mr,{to:"/following/categories",title:"Categories"})})]})}),f("div",{className:"page",children:f(Hm,{})})]})})]})})),RE=ee.div`
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
`,$E=ee.div`
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
`,LE=({user:e,imageId:t,video:n})=>f(RE,{children:k("div",{className:"channel-box",children:[k("div",{className:"live-screen",children:[f("img",{src:e.liveScreen,alt:""}),f("div",{className:`live ${n?"invisible":""}`,children:"live"}),f("div",{className:`viewers ${n?"invisible":""}`,children:"333 viewers"}),k("div",{className:`video ${n?"video-visible":""}`,children:[f("div",{className:"video-tag top",children:"11:44"}),f("div",{className:"video-tag bottom-right",children:"4 hours ago"}),f("div",{className:"video-tag bottom",children:"188 views"})]})]}),k("div",{className:"channel-info",children:[k("div",{className:"left",children:[f("div",{className:"pp",children:f("img",{src:`https://i.pravatar.cc/5${t}`,alt:""})}),k("div",{className:"profile-info",children:[f("div",{className:"title",children:e.title}),f("div",{className:"username",children:e.username}),f("div",{className:"game",children:e.game}),k("div",{className:"tags",children:[f("div",{className:"tag",children:"English"}),f("div",{className:"tag",children:"Esports"})]})]})]}),f("div",{className:"right",children:f(ng,{})})]})]})}),kt=({channelTitle:e,video:t})=>{const{users:n}=At(r=>r.user);return f($E,{children:k("div",{className:"channels-box",children:[e&&f("h1",{children:e}),f("div",{className:"list",children:n.map((r,i)=>{if(i<6)return f(LE,{user:r,imageId:i,video:t},i)})})]})})},If=()=>k(ot,{children:[f(kt,{}),f(kt,{}),f(kt,{}),f(kt,{}),f(kt,{}),f(kt,{}),f(kt,{}),f(kt,{})]}),AE=ee.div`
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
`,zE=ee.div`
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
`,IE=({game:e})=>f(AE,{children:k("div",{className:"game-box",children:[f("div",{className:"game-picture",children:f("img",{src:e.image,alt:""})}),k("div",{className:"game-name",children:[f("div",{className:"name",children:e.name}),f("div",{className:"other-icon",children:f(ng,{})})]}),k("div",{className:"game-viewers",children:[e.viewer," viewers"]}),f("div",{className:"tags",children:f("div",{className:"tag",children:"English"})})]})}),Dw=({title:e,boldTitle:t})=>{const{games:n}=At(r=>r.category);return f(zE,{children:k("div",{className:"categories-box",children:[k("h1",{children:[f("span",{children:t})," ",e]}),f("div",{className:"list",children:n.map((r,i)=>f(IE,{game:r},i))})]})})},DE=ee.div`
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
`,Tl=({title:e})=>f(DE,{children:f("div",{className:"show-more",children:e&&k("span",{children:[e,f(uw,{className:"down-icon"})]})})}),FE=()=>k("div",{className:"overview-box",children:[f(kt,{channelTitle:"Live channels"}),f(Tl,{title:"Show more"}),f(kt,{channelTitle:"Recommended channels"}),f(Tl,{title:"Show more"}),f(kt,{channelTitle:"Latest videos",video:!0}),f(Tl,{title:"Show more"}),f(Dw,{title:"Live categories"}),f(Tl,{})]}),jE=()=>f(ot,{children:f(kt,{channelTitle:"Live channels"})}),BE=()=>f(ot,{children:k("div",{className:"overview-page",children:[f(kt,{channelTitle:"Latest videos",video:!0}),f(kt,{video:!0}),f(kt,{video:!0}),f(kt,{video:!0})]})}),VE=()=>f(ot,{children:f(Dw,{title:"Live categories"})}),WE=ee.div`
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
`,HE=ee.div`
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
`,y1=({offer:e})=>f(HE,{children:k("div",{className:"offer-box",children:[f("h2",{className:"offer-name",children:e.name}),f(je,{to:"/{offer.href}",children:f("div",{className:"offer-picture",children:f("img",{src:e.image,alt:""})})}),f("div",{className:"know-more",children:f("button",{children:"Know More..."})})]})}),UE=()=>{const{offers:e}=At(t=>t.offers);return f(ot,{children:f("div",{className:"offers-mobile",children:k(WE,{children:[f(hg,{tabs:[{name:"brokers",title:"Brokers",component:f("div",{className:"container",children:e.map((t,n)=>{if(t.type!=="advisor")return f(y1,{offer:t,imageId:n},n)})})},{name:"advisors",title:"Advisors",component:f("div",{className:"container",children:e.map((t,n)=>{if(t.type!=="advisor")return f(y1,{offer:t,imageId:n},n)})})}]}),f("div",{className:"offers-desktop",children:k("div",{className:"offers-box",children:[f("h1",{className:"page-title",children:"Offers"}),f("div",{className:"nav",children:k("ul",{children:[f("li",{children:f(Mr,{to:"/offers/brokers",title:"Brokers"})}),f("li",{children:f(Mr,{to:"/offers/advisors",title:"Advisors"})})]})}),f("div",{className:"page",children:f(Hm,{})})]})})]})})})},YE=ee.div`
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
`,x1=({type:e=""})=>{const{offers:t}=At(n=>n.offers);return f(YE,{children:t.map((n,r)=>{if(n.type===e)return k("div",{className:`offer-box offer-${n.id}`,children:[k("div",{className:"left-side",children:[f("div",{className:"picture",children:f("img",{src:n.image,alt:""})}),f("h2",{className:"name",children:n.name})]}),k("div",{className:"right-side",children:[k("div",{children:[k("ul",{className:"available-options",children:[f("li",{children:"Equity"}),f("li",{children:"Future"}),f("li",{children:"Option"}),f("li",{children:"Commodity"})]}),k("ul",{className:"new-info",children:[f("li",{children:"Account Opening"}),f("li",{children:"Account Maintenance"}),f("li",{children:"Account Maintenance"}),f("li",{children:"Account Maintenance"})]})]}),k("ul",{className:"action-buttons",children:[f("li",{children:"View Details"}),f("li",{children:"Open Account"})]})]})]},n.id)})})},cp=e=>e?e.toLowerCase().replace(/\b\w/g,t=>t.toUpperCase()):"",XE=ee.div`
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
`,Fw=({scheme:e,activeFilter:t})=>{var n;return f(XE,{children:f(je,{className:"link",to:`/mutual-fund/${e.Scheme_Code}`,title:e.name,children:k("div",{className:"scheme-container",children:[f("div",{className:"image",children:f("img",{src:`./images/amc-logo/${(n=e.amc_logo)!=null?n:"404-tp.png"}`,alt:""})}),k("div",{className:"info",children:[f("div",{className:"name",children:cp(e.Scheme_Name)}),k("div",{className:"description",children:[f("strong",{children:"Type: "})," ",cp(e.Scheme_Type)]})]}),f("div",{className:"return",children:k("div",{className:"1",children:[f("span",{className:"normal",children:"10%"}),k("span",{className:"popular",children:["3Y ",f("br",{})," 15%"]})]})})]})})})},KE={black:"#000",white:"#fff"};var Sa=KE;const GE={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"};var Ki=GE;const qE={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff"};var Gi=qE;const QE={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"};var qi=QE;const ZE={50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea"};var Qi=ZE;const JE={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"};var Zi=JE;const eO={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00"};var ms=eO;const tO={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"};var nO=tO;function Ai(e){let t="https://mui.com/production-error/?code="+e;for(let n=1;n<arguments.length;n+=1)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified MUI error #"+e+"; visit "+t+" for the full message."}var rO=Object.freeze(Object.defineProperty({__proto__:null,default:Ai},Symbol.toStringTag,{value:"Module"})),jw="$$material",iO=!1;function oO(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function sO(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var aO=function(){function e(n){var r=this;this._insertTag=function(i){var o;r.tags.length===0?r.insertionPoint?o=r.insertionPoint.nextSibling:r.prepend?o=r.container.firstChild:o=r.before:o=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,o),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!iO:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(sO(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var o=oO(i);try{o.insertRule(r,o.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){var i;return(i=r.parentNode)==null?void 0:i.removeChild(r)}),this.tags=[],this.ctr=0},e}(),bt="-ms-",cu="-moz-",we="-webkit-",Bw="comm",pg="rule",mg="decl",lO="@import",Vw="@keyframes",cO="@layer",uO=Math.abs,ld=String.fromCharCode,dO=Object.assign;function fO(e,t){return vt(e,0)^45?(((t<<2^vt(e,0))<<2^vt(e,1))<<2^vt(e,2))<<2^vt(e,3):0}function Ww(e){return e.trim()}function hO(e,t){return(e=t.exec(e))?e[0]:e}function _e(e,t,n){return e.replace(t,n)}function up(e,t){return e.indexOf(t)}function vt(e,t){return e.charCodeAt(t)|0}function ka(e,t,n){return e.slice(t,n)}function An(e){return e.length}function gg(e){return e.length}function Rl(e,t){return t.push(e),e}function pO(e,t){return e.map(t).join("")}var cd=1,Do=1,Hw=0,Wt=0,it=0,Zo="";function ud(e,t,n,r,i,o,s){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:cd,column:Do,length:s,return:""}}function gs(e,t){return dO(ud("",null,null,"",null,null,0),e,{length:-e.length},t)}function mO(){return it}function gO(){return it=Wt>0?vt(Zo,--Wt):0,Do--,it===10&&(Do=1,cd--),it}function Kt(){return it=Wt<Hw?vt(Zo,Wt++):0,Do++,it===10&&(Do=1,cd++),it}function Hn(){return vt(Zo,Wt)}function hc(){return Wt}function tl(e,t){return ka(Zo,e,t)}function Ca(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Uw(e){return cd=Do=1,Hw=An(Zo=e),Wt=0,[]}function Yw(e){return Zo="",e}function pc(e){return Ww(tl(Wt-1,dp(e===91?e+2:e===40?e+1:e)))}function vO(e){for(;(it=Hn())&&it<33;)Kt();return Ca(e)>2||Ca(it)>3?"":" "}function yO(e,t){for(;--t&&Kt()&&!(it<48||it>102||it>57&&it<65||it>70&&it<97););return tl(e,hc()+(t<6&&Hn()==32&&Kt()==32))}function dp(e){for(;Kt();)switch(it){case e:return Wt;case 34:case 39:e!==34&&e!==39&&dp(it);break;case 40:e===41&&dp(e);break;case 92:Kt();break}return Wt}function xO(e,t){for(;Kt()&&e+it!==47+10;)if(e+it===42+42&&Hn()===47)break;return"/*"+tl(t,Wt-1)+"*"+ld(e===47?e:Kt())}function bO(e){for(;!Ca(Hn());)Kt();return tl(e,Wt)}function wO(e){return Yw(mc("",null,null,null,[""],e=Uw(e),0,[0],e))}function mc(e,t,n,r,i,o,s,a,l){for(var c=0,u=0,d=s,h=0,m=0,y=0,v=1,p=1,g=1,x=0,b="",w=i,S=o,C=r,P=b;p;)switch(y=x,x=Kt()){case 40:if(y!=108&&vt(P,d-1)==58){up(P+=_e(pc(x),"&","&\f"),"&\f")!=-1&&(g=-1);break}case 34:case 39:case 91:P+=pc(x);break;case 9:case 10:case 13:case 32:P+=vO(y);break;case 92:P+=yO(hc()-1,7);continue;case 47:switch(Hn()){case 42:case 47:Rl(_O(xO(Kt(),hc()),t,n),l);break;default:P+="/"}break;case 123*v:a[c++]=An(P)*g;case 125*v:case 59:case 0:switch(x){case 0:case 125:p=0;case 59+u:g==-1&&(P=_e(P,/\f/g,"")),m>0&&An(P)-d&&Rl(m>32?w1(P+";",r,n,d-1):w1(_e(P," ","")+";",r,n,d-2),l);break;case 59:P+=";";default:if(Rl(C=b1(P,t,n,c,u,i,a,b,w=[],S=[],d),o),x===123)if(u===0)mc(P,t,C,C,w,o,d,a,S);else switch(h===99&&vt(P,3)===110?100:h){case 100:case 108:case 109:case 115:mc(e,C,C,r&&Rl(b1(e,C,C,0,0,i,a,b,i,w=[],d),S),i,S,d,a,r?w:S);break;default:mc(P,C,C,C,[""],S,0,a,S)}}c=u=m=0,v=g=1,b=P="",d=s;break;case 58:d=1+An(P),m=y;default:if(v<1){if(x==123)--v;else if(x==125&&v++==0&&gO()==125)continue}switch(P+=ld(x),x*v){case 38:g=u>0?1:(P+="\f",-1);break;case 44:a[c++]=(An(P)-1)*g,g=1;break;case 64:Hn()===45&&(P+=pc(Kt())),h=Hn(),u=d=An(b=P+=bO(hc())),x++;break;case 45:y===45&&An(P)==2&&(v=0)}}return o}function b1(e,t,n,r,i,o,s,a,l,c,u){for(var d=i-1,h=i===0?o:[""],m=gg(h),y=0,v=0,p=0;y<r;++y)for(var g=0,x=ka(e,d+1,d=uO(v=s[y])),b=e;g<m;++g)(b=Ww(v>0?h[g]+" "+x:_e(x,/&\f/g,h[g])))&&(l[p++]=b);return ud(e,t,n,i===0?pg:a,l,c,u)}function _O(e,t,n){return ud(e,t,n,Bw,ld(mO()),ka(e,2,-2),0)}function w1(e,t,n,r){return ud(e,t,n,mg,ka(e,0,r),ka(e,r+1,-1),r)}function Mo(e,t){for(var n="",r=gg(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function SO(e,t,n,r){switch(e.type){case cO:if(e.children.length)break;case lO:case mg:return e.return=e.return||e.value;case Bw:return"";case Vw:return e.return=e.value+"{"+Mo(e.children,r)+"}";case pg:e.value=e.props.join(",")}return An(n=Mo(e.children,r))?e.return=e.value+"{"+n+"}":""}function kO(e){var t=gg(e);return function(n,r,i,o){for(var s="",a=0;a<t;a++)s+=e[a](n,r,i,o)||"";return s}}function CO(e){return function(t){t.root||(t=t.return)&&e(t)}}var PO=function(t,n,r){for(var i=0,o=0;i=o,o=Hn(),i===38&&o===12&&(n[r]=1),!Ca(o);)Kt();return tl(t,Wt)},MO=function(t,n){var r=-1,i=44;do switch(Ca(i)){case 0:i===38&&Hn()===12&&(n[r]=1),t[r]+=PO(Wt-1,n,r);break;case 2:t[r]+=pc(i);break;case 4:if(i===44){t[++r]=Hn()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=ld(i)}while(i=Kt());return t},EO=function(t,n){return Yw(MO(Uw(t),n))},_1=new WeakMap,OO=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,i=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!_1.get(r))&&!i){_1.set(t,!0);for(var o=[],s=EO(n,o),a=r.props,l=0,c=0;l<s.length;l++)for(var u=0;u<a.length;u++,c++)t.props[c]=o[l]?s[l].replace(/&\f/g,a[u]):a[u]+" "+s[l]}}},NO=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function Xw(e,t){switch(fO(e,t)){case 5103:return we+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return we+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return we+e+cu+e+bt+e+e;case 6828:case 4268:return we+e+bt+e+e;case 6165:return we+e+bt+"flex-"+e+e;case 5187:return we+e+_e(e,/(\w+).+(:[^]+)/,we+"box-$1$2"+bt+"flex-$1$2")+e;case 5443:return we+e+bt+"flex-item-"+_e(e,/flex-|-self/,"")+e;case 4675:return we+e+bt+"flex-line-pack"+_e(e,/align-content|flex-|-self/,"")+e;case 5548:return we+e+bt+_e(e,"shrink","negative")+e;case 5292:return we+e+bt+_e(e,"basis","preferred-size")+e;case 6060:return we+"box-"+_e(e,"-grow","")+we+e+bt+_e(e,"grow","positive")+e;case 4554:return we+_e(e,/([^-])(transform)/g,"$1"+we+"$2")+e;case 6187:return _e(_e(_e(e,/(zoom-|grab)/,we+"$1"),/(image-set)/,we+"$1"),e,"")+e;case 5495:case 3959:return _e(e,/(image-set\([^]*)/,we+"$1$`$1");case 4968:return _e(_e(e,/(.+:)(flex-)?(.*)/,we+"box-pack:$3"+bt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+we+e+e;case 4095:case 3583:case 4068:case 2532:return _e(e,/(.+)-inline(.+)/,we+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(An(e)-1-t>6)switch(vt(e,t+1)){case 109:if(vt(e,t+4)!==45)break;case 102:return _e(e,/(.+:)(.+)-([^]+)/,"$1"+we+"$2-$3$1"+cu+(vt(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~up(e,"stretch")?Xw(_e(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(vt(e,t+1)!==115)break;case 6444:switch(vt(e,An(e)-3-(~up(e,"!important")&&10))){case 107:return _e(e,":",":"+we)+e;case 101:return _e(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+we+(vt(e,14)===45?"inline-":"")+"box$3$1"+we+"$2$3$1"+bt+"$2box$3")+e}break;case 5936:switch(vt(e,t+11)){case 114:return we+e+bt+_e(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return we+e+bt+_e(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return we+e+bt+_e(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return we+e+bt+e+e}return e}var TO=function(t,n,r,i){if(t.length>-1&&!t.return)switch(t.type){case mg:t.return=Xw(t.value,t.length);break;case Vw:return Mo([gs(t,{value:_e(t.value,"@","@"+we)})],i);case pg:if(t.length)return pO(t.props,function(o){switch(hO(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Mo([gs(t,{props:[_e(o,/:(read-\w+)/,":"+cu+"$1")]})],i);case"::placeholder":return Mo([gs(t,{props:[_e(o,/:(plac\w+)/,":"+we+"input-$1")]}),gs(t,{props:[_e(o,/:(plac\w+)/,":"+cu+"$1")]}),gs(t,{props:[_e(o,/:(plac\w+)/,bt+"input-$1")]})],i)}return""})}},RO=[TO],Kw=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(v){var p=v.getAttribute("data-emotion");p.indexOf(" ")!==-1&&(document.head.appendChild(v),v.setAttribute("data-s",""))})}var i=t.stylisPlugins||RO,o={},s,a=[];s=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(v){for(var p=v.getAttribute("data-emotion").split(" "),g=1;g<p.length;g++)o[p[g]]=!0;a.push(v)});var l,c=[OO,NO];{var u,d=[SO,CO(function(v){u.insert(v)})],h=kO(c.concat(i,d)),m=function(p){return Mo(wO(p),h)};l=function(p,g,x,b){u=x,m(p?p+"{"+g.styles+"}":g.styles),b&&(y.inserted[g.name]=!0)}}var y={key:n,sheet:new aO({key:n,container:s,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:o,registered:{},insert:l};return y.sheet.hydrate(a),y},$O=!0;function LO(e,t,n){var r="";return n.split(" ").forEach(function(i){e[i]!==void 0?t.push(e[i]+";"):r+=i+" "}),r}var Gw=function(t,n,r){var i=t.key+"-"+n.name;(r===!1||$O===!1)&&t.registered[i]===void 0&&(t.registered[i]=n.styles)},qw=function(t,n,r){Gw(t,n,r);var i=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var o=n;do t.insert(n===o?"."+i:"",o,t.sheet,!0),o=o.next;while(o!==void 0)}};function AO(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var zO={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},IO=!1,DO=/[A-Z]|^ms/g,FO=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Qw=function(t){return t.charCodeAt(1)===45},S1=function(t){return t!=null&&typeof t!="boolean"},Df=D2(function(e){return Qw(e)?e:e.replace(DO,"-$&").toLowerCase()}),k1=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(FO,function(r,i,o){return zn={name:i,styles:o,next:zn},i})}return zO[t]!==1&&!Qw(t)&&typeof n=="number"&&n!==0?n+"px":n},jO="Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";function Pa(e,t,n){if(n==null)return"";var r=n;if(r.__emotion_styles!==void 0)return r;switch(typeof n){case"boolean":return"";case"object":{var i=n;if(i.anim===1)return zn={name:i.name,styles:i.styles,next:zn},i.name;var o=n;if(o.styles!==void 0){var s=o.next;if(s!==void 0)for(;s!==void 0;)zn={name:s.name,styles:s.styles,next:zn},s=s.next;var a=o.styles+";";return a}return BO(e,t,n)}case"function":{if(e!==void 0){var l=zn,c=n(e);return zn=l,Pa(e,t,c)}break}}var u=n;if(t==null)return u;var d=t[u];return d!==void 0?d:u}function BO(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=Pa(e,t,n[i])+";";else for(var o in n){var s=n[o];if(typeof s!="object"){var a=s;t!=null&&t[a]!==void 0?r+=o+"{"+t[a]+"}":S1(a)&&(r+=Df(o)+":"+k1(o,a)+";")}else{if(o==="NO_COMPONENT_SELECTOR"&&IO)throw new Error(jO);if(Array.isArray(s)&&typeof s[0]=="string"&&(t==null||t[s[0]]===void 0))for(var l=0;l<s.length;l++)S1(s[l])&&(r+=Df(o)+":"+k1(o,s[l])+";");else{var c=Pa(e,t,s);switch(o){case"animation":case"animationName":{r+=Df(o)+":"+c+";";break}default:r+=o+"{"+c+"}"}}}}return r}var C1=/label:\s*([^\s;\n{]+)\s*(;|$)/g,zn;function vg(e,t,n){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var r=!0,i="";zn=void 0;var o=e[0];if(o==null||o.raw===void 0)r=!1,i+=Pa(n,t,o);else{var s=o;i+=s[0]}for(var a=1;a<e.length;a++)if(i+=Pa(n,t,e[a]),r){var l=o;i+=l[a]}C1.lastIndex=0;for(var c="",u;(u=C1.exec(i))!==null;)c+="-"+u[1];var d=AO(i)+c;return{name:d,styles:i,next:zn}}var VO=function(t){return t()},Zw=na["useInsertionEffect"]?na["useInsertionEffect"]:!1,WO=Zw||VO,P1=Zw||_.exports.useLayoutEffect,Jw=_.exports.createContext(typeof HTMLElement!="undefined"?Kw({key:"css"}):null),HO=Jw.Provider,e_=function(t){return _.exports.forwardRef(function(n,r){var i=_.exports.useContext(Jw);return t(n,i,r)})},dd=_.exports.createContext({}),yg={exports:{}};(function(e){function t(){return e.exports=t=Object.assign?Object.assign.bind():function(n){for(var r=1;r<arguments.length;r++){var i=arguments[r];for(var o in i)({}).hasOwnProperty.call(i,o)&&(n[o]=i[o])}return n},e.exports.__esModule=!0,e.exports.default=e.exports,t.apply(null,arguments)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports})(yg);var UO=e_(function(e,t){var n=e.styles,r=vg([n],void 0,_.exports.useContext(dd)),i=_.exports.useRef();return P1(function(){var o=t.key+"-global",s=new t.sheet.constructor({key:o,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),a=!1,l=document.querySelector('style[data-emotion="'+o+" "+r.name+'"]');return t.sheet.tags.length&&(s.before=t.sheet.tags[0]),l!==null&&(a=!0,l.setAttribute("data-emotion",o),s.hydrate([l])),i.current=[s,a],function(){s.flush()}},[t]),P1(function(){var o=i.current,s=o[0],a=o[1];if(a){o[1]=!1;return}if(r.next!==void 0&&qw(t,r.next,!0),s.tags.length){var l=s.tags[s.tags.length-1].nextElementSibling;s.before=l,s.flush()}t.insert("",r,s,!1)},[t,r.name]),null});function uu(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return vg(t)}var Jo=function(){var t=uu.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},YO=Yh,XO=function(t){return t!=="theme"},M1=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?YO:XO},E1=function(t,n,r){var i;if(n){var o=n.shouldForwardProp;i=t.__emotion_forwardProp&&o?function(s){return t.__emotion_forwardProp(s)&&o(s)}:o}return typeof i!="function"&&r&&(i=t.__emotion_forwardProp),i},KO=!1,GO=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return Gw(n,r,i),WO(function(){return qw(n,r,i)}),null},qO=function e(t,n){var r=t.__emotion_real===t,i=r&&t.__emotion_base||t,o,s;n!==void 0&&(o=n.label,s=n.target);var a=E1(t,n,r),l=a||M1(i),c=!l("as");return function(){var u=arguments,d=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(o!==void 0&&d.push("label:"+o+";"),u[0]==null||u[0].raw===void 0)d.push.apply(d,u);else{d.push(u[0][0]);for(var h=u.length,m=1;m<h;m++)d.push(u[m],u[0][m])}var y=e_(function(v,p,g){var x=c&&v.as||i,b="",w=[],S=v;if(v.theme==null){S={};for(var C in v)S[C]=v[C];S.theme=_.exports.useContext(dd)}typeof v.className=="string"?b=LO(p.registered,w,v.className):v.className!=null&&(b=v.className+" ");var P=vg(d.concat(w),p.registered,S);b+=p.key+"-"+P.name,s!==void 0&&(b+=" "+s);var M=c&&a===void 0?M1(x):l,O={};for(var N in v)c&&N==="as"||M(N)&&(O[N]=v[N]);return O.className=b,g&&(O.ref=g),_.exports.createElement(_.exports.Fragment,null,_.exports.createElement(GO,{cache:p,serialized:P,isStringTag:typeof x=="string"}),_.exports.createElement(x,O))});return y.displayName=o!==void 0?o:"Styled("+(typeof i=="string"?i:i.displayName||i.name||"Component")+")",y.defaultProps=t.defaultProps,y.__emotion_real=y,y.__emotion_base=i,y.__emotion_styles=d,y.__emotion_forwardProp=a,Object.defineProperty(y,"toString",{value:function(){return s===void 0&&KO?"NO_COMPONENT_SELECTOR":"."+s}}),y.withComponent=function(v,p){return e(v,j({},n,p,{shouldForwardProp:E1(y,p,!0)})).apply(void 0,d)},y}},QO=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],fp=qO.bind();QO.forEach(function(e){fp[e]=fp(e)});let hp;typeof document=="object"&&(hp=Kw({key:"css",prepend:!0}));function ZO(e){const{injectFirst:t,children:n}=e;return t&&hp?f(HO,{value:hp,children:n}):n}function JO(e){return e==null||Object.keys(e).length===0}function e9(e){const{styles:t,defaultTheme:n={}}=e;return f(UO,{styles:typeof t=="function"?i=>t(JO(i)?n:i):t})}/**
 * @mui/styled-engine v5.16.6
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function t_(e,t){return fp(e,t)}const t9=(e,t)=>{Array.isArray(e.__emotion_styles)&&(e.__emotion_styles=t(e.__emotion_styles))};var n9=Object.freeze(Object.defineProperty({__proto__:null,default:t_,internal_processStyles:t9,ThemeContext:dd,keyframes:Jo,css:uu,StyledEngineProvider:ZO,GlobalStyles:e9},Symbol.toStringTag,{value:"Module"}));function _r(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function n_(e){if(!_r(e))return e;const t={};return Object.keys(e).forEach(n=>{t[n]=n_(e[n])}),t}function Un(e,t,n={clone:!0}){const r=n.clone?j({},e):e;return _r(e)&&_r(t)&&Object.keys(t).forEach(i=>{_r(t[i])&&Object.prototype.hasOwnProperty.call(e,i)&&_r(e[i])?r[i]=Un(e[i],t[i],n):n.clone?r[i]=_r(t[i])?n_(t[i]):t[i]:r[i]=t[i]}),r}var r9=Object.freeze(Object.defineProperty({__proto__:null,default:Un,isPlainObject:_r},Symbol.toStringTag,{value:"Module"}));const i9=["values","unit","step"],o9=e=>{const t=Object.keys(e).map(n=>({key:n,val:e[n]}))||[];return t.sort((n,r)=>n.val-r.val),t.reduce((n,r)=>j({},n,{[r.key]:r.val}),{})};function r_(e){const{values:t={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:n="px",step:r=5}=e,i=Lt(e,i9),o=o9(t),s=Object.keys(o);function a(h){return`@media (min-width:${typeof t[h]=="number"?t[h]:h}${n})`}function l(h){return`@media (max-width:${(typeof t[h]=="number"?t[h]:h)-r/100}${n})`}function c(h,m){const y=s.indexOf(m);return`@media (min-width:${typeof t[h]=="number"?t[h]:h}${n}) and (max-width:${(y!==-1&&typeof t[s[y]]=="number"?t[s[y]]:m)-r/100}${n})`}function u(h){return s.indexOf(h)+1<s.length?c(h,s[s.indexOf(h)+1]):a(h)}function d(h){const m=s.indexOf(h);return m===0?a(s[1]):m===s.length-1?l(s[m]):c(h,s[s.indexOf(h)+1]).replace("@media","@media not all and")}return j({keys:s,values:o,up:a,down:l,between:c,only:u,not:d,unit:n},i)}const s9={borderRadius:4};var a9=s9;function Ks(e,t){return t?Un(e,t,{clone:!1}):e}const xg={xs:0,sm:600,md:900,lg:1200,xl:1536},O1={keys:["xs","sm","md","lg","xl"],up:e=>`@media (min-width:${xg[e]}px)`};function hr(e,t,n){const r=e.theme||{};if(Array.isArray(t)){const o=r.breakpoints||O1;return t.reduce((s,a,l)=>(s[o.up(o.keys[l])]=n(t[l]),s),{})}if(typeof t=="object"){const o=r.breakpoints||O1;return Object.keys(t).reduce((s,a)=>{if(Object.keys(o.values||xg).indexOf(a)!==-1){const l=o.up(a);s[l]=n(t[a],a)}else{const l=a;s[l]=t[l]}return s},{})}return n(t)}function l9(e={}){var t;return((t=e.keys)==null?void 0:t.reduce((r,i)=>{const o=e.up(i);return r[o]={},r},{}))||{}}function c9(e,t){return e.reduce((n,r)=>{const i=n[r];return(!i||Object.keys(i).length===0)&&delete n[r],n},t)}function Xe(e){if(typeof e!="string")throw new Error(Ai(7));return e.charAt(0).toUpperCase()+e.slice(1)}var u9=Object.freeze(Object.defineProperty({__proto__:null,default:Xe},Symbol.toStringTag,{value:"Module"}));function fd(e,t,n=!0){if(!t||typeof t!="string")return null;if(e&&e.vars&&n){const r=`vars.${t}`.split(".").reduce((i,o)=>i&&i[o]?i[o]:null,e);if(r!=null)return r}return t.split(".").reduce((r,i)=>r&&r[i]!=null?r[i]:null,e)}function du(e,t,n,r=n){let i;return typeof e=="function"?i=e(n):Array.isArray(e)?i=e[n]||r:i=fd(e,n)||r,t&&(i=t(i,r,e)),i}function tt(e){const{prop:t,cssProperty:n=e.prop,themeKey:r,transform:i}=e,o=s=>{if(s[t]==null)return null;const a=s[t],l=s.theme,c=fd(l,r)||{};return hr(s,a,d=>{let h=du(c,i,d);return d===h&&typeof d=="string"&&(h=du(c,i,`${t}${d==="default"?"":Xe(d)}`,d)),n===!1?h:{[n]:h}})};return o.propTypes={},o.filterProps=[t],o}function d9(e){const t={};return n=>(t[n]===void 0&&(t[n]=e(n)),t[n])}const f9={m:"margin",p:"padding"},h9={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},N1={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},p9=d9(e=>{if(e.length>2)if(N1[e])e=N1[e];else return[e];const[t,n]=e.split(""),r=f9[t],i=h9[n]||"";return Array.isArray(i)?i.map(o=>r+o):[r+i]}),bg=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],wg=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"];[...bg,...wg];function nl(e,t,n,r){var i;const o=(i=fd(e,t,!1))!=null?i:n;return typeof o=="number"?s=>typeof s=="string"?s:o*s:Array.isArray(o)?s=>typeof s=="string"?s:o[s]:typeof o=="function"?o:()=>{}}function i_(e){return nl(e,"spacing",8)}function rl(e,t){if(typeof t=="string"||t==null)return t;const n=Math.abs(t),r=e(n);return t>=0?r:typeof r=="number"?-r:`-${r}`}function m9(e,t){return n=>e.reduce((r,i)=>(r[i]=rl(t,n),r),{})}function g9(e,t,n,r){if(t.indexOf(n)===-1)return null;const i=p9(n),o=m9(i,r),s=e[n];return hr(e,s,o)}function o_(e,t){const n=i_(e.theme);return Object.keys(e).map(r=>g9(e,t,r,n)).reduce(Ks,{})}function We(e){return o_(e,bg)}We.propTypes={};We.filterProps=bg;function He(e){return o_(e,wg)}He.propTypes={};He.filterProps=wg;function v9(e=8){if(e.mui)return e;const t=i_({spacing:e}),n=(...r)=>(r.length===0?[1]:r).map(o=>{const s=t(o);return typeof s=="number"?`${s}px`:s}).join(" ");return n.mui=!0,n}function hd(...e){const t=e.reduce((r,i)=>(i.filterProps.forEach(o=>{r[o]=i}),r),{}),n=r=>Object.keys(r).reduce((i,o)=>t[o]?Ks(i,t[o](r)):i,{});return n.propTypes={},n.filterProps=e.reduce((r,i)=>r.concat(i.filterProps),[]),n}function on(e){return typeof e!="number"?e:`${e}px solid`}function pn(e,t){return tt({prop:e,themeKey:"borders",transform:t})}const y9=pn("border",on),x9=pn("borderTop",on),b9=pn("borderRight",on),w9=pn("borderBottom",on),_9=pn("borderLeft",on),S9=pn("borderColor"),k9=pn("borderTopColor"),C9=pn("borderRightColor"),P9=pn("borderBottomColor"),M9=pn("borderLeftColor"),E9=pn("outline",on),O9=pn("outlineColor"),pd=e=>{if(e.borderRadius!==void 0&&e.borderRadius!==null){const t=nl(e.theme,"shape.borderRadius",4),n=r=>({borderRadius:rl(t,r)});return hr(e,e.borderRadius,n)}return null};pd.propTypes={};pd.filterProps=["borderRadius"];hd(y9,x9,b9,w9,_9,S9,k9,C9,P9,M9,pd,E9,O9);const md=e=>{if(e.gap!==void 0&&e.gap!==null){const t=nl(e.theme,"spacing",8),n=r=>({gap:rl(t,r)});return hr(e,e.gap,n)}return null};md.propTypes={};md.filterProps=["gap"];const gd=e=>{if(e.columnGap!==void 0&&e.columnGap!==null){const t=nl(e.theme,"spacing",8),n=r=>({columnGap:rl(t,r)});return hr(e,e.columnGap,n)}return null};gd.propTypes={};gd.filterProps=["columnGap"];const vd=e=>{if(e.rowGap!==void 0&&e.rowGap!==null){const t=nl(e.theme,"spacing",8),n=r=>({rowGap:rl(t,r)});return hr(e,e.rowGap,n)}return null};vd.propTypes={};vd.filterProps=["rowGap"];const N9=tt({prop:"gridColumn"}),T9=tt({prop:"gridRow"}),R9=tt({prop:"gridAutoFlow"}),$9=tt({prop:"gridAutoColumns"}),L9=tt({prop:"gridAutoRows"}),A9=tt({prop:"gridTemplateColumns"}),z9=tt({prop:"gridTemplateRows"}),I9=tt({prop:"gridTemplateAreas"}),D9=tt({prop:"gridArea"});hd(md,gd,vd,N9,T9,R9,$9,L9,A9,z9,I9,D9);function Eo(e,t){return t==="grey"?t:e}const F9=tt({prop:"color",themeKey:"palette",transform:Eo}),j9=tt({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette",transform:Eo}),B9=tt({prop:"backgroundColor",themeKey:"palette",transform:Eo});hd(F9,j9,B9);function Yt(e){return e<=1&&e!==0?`${e*100}%`:e}const V9=tt({prop:"width",transform:Yt}),_g=e=>{if(e.maxWidth!==void 0&&e.maxWidth!==null){const t=n=>{var r,i;const o=((r=e.theme)==null||(r=r.breakpoints)==null||(r=r.values)==null?void 0:r[n])||xg[n];return o?((i=e.theme)==null||(i=i.breakpoints)==null?void 0:i.unit)!=="px"?{maxWidth:`${o}${e.theme.breakpoints.unit}`}:{maxWidth:o}:{maxWidth:Yt(n)}};return hr(e,e.maxWidth,t)}return null};_g.filterProps=["maxWidth"];const W9=tt({prop:"minWidth",transform:Yt}),H9=tt({prop:"height",transform:Yt}),U9=tt({prop:"maxHeight",transform:Yt}),Y9=tt({prop:"minHeight",transform:Yt});tt({prop:"size",cssProperty:"width",transform:Yt});tt({prop:"size",cssProperty:"height",transform:Yt});const X9=tt({prop:"boxSizing"});hd(V9,_g,W9,H9,U9,Y9,X9);const K9={border:{themeKey:"borders",transform:on},borderTop:{themeKey:"borders",transform:on},borderRight:{themeKey:"borders",transform:on},borderBottom:{themeKey:"borders",transform:on},borderLeft:{themeKey:"borders",transform:on},borderColor:{themeKey:"palette"},borderTopColor:{themeKey:"palette"},borderRightColor:{themeKey:"palette"},borderBottomColor:{themeKey:"palette"},borderLeftColor:{themeKey:"palette"},outline:{themeKey:"borders",transform:on},outlineColor:{themeKey:"palette"},borderRadius:{themeKey:"shape.borderRadius",style:pd},color:{themeKey:"palette",transform:Eo},bgcolor:{themeKey:"palette",cssProperty:"backgroundColor",transform:Eo},backgroundColor:{themeKey:"palette",transform:Eo},p:{style:He},pt:{style:He},pr:{style:He},pb:{style:He},pl:{style:He},px:{style:He},py:{style:He},padding:{style:He},paddingTop:{style:He},paddingRight:{style:He},paddingBottom:{style:He},paddingLeft:{style:He},paddingX:{style:He},paddingY:{style:He},paddingInline:{style:He},paddingInlineStart:{style:He},paddingInlineEnd:{style:He},paddingBlock:{style:He},paddingBlockStart:{style:He},paddingBlockEnd:{style:He},m:{style:We},mt:{style:We},mr:{style:We},mb:{style:We},ml:{style:We},mx:{style:We},my:{style:We},margin:{style:We},marginTop:{style:We},marginRight:{style:We},marginBottom:{style:We},marginLeft:{style:We},marginX:{style:We},marginY:{style:We},marginInline:{style:We},marginInlineStart:{style:We},marginInlineEnd:{style:We},marginBlock:{style:We},marginBlockStart:{style:We},marginBlockEnd:{style:We},displayPrint:{cssProperty:!1,transform:e=>({"@media print":{display:e}})},display:{},overflow:{},textOverflow:{},visibility:{},whiteSpace:{},flexBasis:{},flexDirection:{},flexWrap:{},justifyContent:{},alignItems:{},alignContent:{},order:{},flex:{},flexGrow:{},flexShrink:{},alignSelf:{},justifyItems:{},justifySelf:{},gap:{style:md},rowGap:{style:vd},columnGap:{style:gd},gridColumn:{},gridRow:{},gridAutoFlow:{},gridAutoColumns:{},gridAutoRows:{},gridTemplateColumns:{},gridTemplateRows:{},gridTemplateAreas:{},gridArea:{},position:{},zIndex:{themeKey:"zIndex"},top:{},right:{},bottom:{},left:{},boxShadow:{themeKey:"shadows"},width:{transform:Yt},maxWidth:{style:_g},minWidth:{transform:Yt},height:{transform:Yt},maxHeight:{transform:Yt},minHeight:{transform:Yt},boxSizing:{},fontFamily:{themeKey:"typography"},fontSize:{themeKey:"typography"},fontStyle:{themeKey:"typography"},fontWeight:{themeKey:"typography"},letterSpacing:{},textTransform:{},lineHeight:{},textAlign:{},typography:{cssProperty:!1,themeKey:"typography"}};var il=K9;function G9(...e){const t=e.reduce((r,i)=>r.concat(Object.keys(i)),[]),n=new Set(t);return e.every(r=>n.size===Object.keys(r).length)}function q9(e,t){return typeof e=="function"?e(t):e}function s_(){function e(n,r,i,o){const s={[n]:r,theme:i},a=o[n];if(!a)return{[n]:r};const{cssProperty:l=n,themeKey:c,transform:u,style:d}=a;if(r==null)return null;if(c==="typography"&&r==="inherit")return{[n]:r};const h=fd(i,c)||{};return d?d(s):hr(s,r,y=>{let v=du(h,u,y);return y===v&&typeof y=="string"&&(v=du(h,u,`${n}${y==="default"?"":Xe(y)}`,y)),l===!1?v:{[l]:v}})}function t(n){var r;const{sx:i,theme:o={}}=n||{};if(!i)return null;const s=(r=o.unstable_sxConfig)!=null?r:il;function a(l){let c=l;if(typeof l=="function")c=l(o);else if(typeof l!="object")return l;if(!c)return null;const u=l9(o.breakpoints),d=Object.keys(u);let h=u;return Object.keys(c).forEach(m=>{const y=q9(c[m],o);if(y!=null)if(typeof y=="object")if(s[m])h=Ks(h,e(m,y,o,s));else{const v=hr({theme:o},y,p=>({[m]:p}));G9(v,y)?h[m]=t({sx:y,theme:o}):h=Ks(h,v)}else h=Ks(h,e(m,y,o,s))}),c9(d,h)}return Array.isArray(i)?i.map(a):a(i)}return t}const a_=s_();a_.filterProps=["sx"];var yd=a_;function l_(e,t){const n=this;return n.vars&&typeof n.getColorSchemeSelector=="function"?{[n.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/,"*:where($1)")]:t}:n.palette.mode===e?t:{}}const Q9=["breakpoints","palette","spacing","shape"];function Sg(e={},...t){const{breakpoints:n={},palette:r={},spacing:i,shape:o={}}=e,s=Lt(e,Q9),a=r_(n),l=v9(i);let c=Un({breakpoints:a,direction:"ltr",components:{},palette:j({mode:"light"},r),spacing:l,shape:j({},a9,o)},s);return c.applyStyles=l_,c=t.reduce((u,d)=>Un(u,d),c),c.unstable_sxConfig=j({},il,s==null?void 0:s.unstable_sxConfig),c.unstable_sx=function(d){return yd({sx:d,theme:this})},c}var Z9=Object.freeze(Object.defineProperty({__proto__:null,default:Sg,private_createBreakpoints:r_,unstable_applyStyles:l_},Symbol.toStringTag,{value:"Module"}));function J9(e){return Object.keys(e).length===0}function eN(e=null){const t=_.exports.useContext(dd);return!t||J9(t)?e:t}const tN=Sg();function nN(e=tN){return eN(e)}const rN=["sx"],iN=e=>{var t,n;const r={systemProps:{},otherProps:{}},i=(t=e==null||(n=e.theme)==null?void 0:n.unstable_sxConfig)!=null?t:il;return Object.keys(e).forEach(o=>{i[o]?r.systemProps[o]=e[o]:r.otherProps[o]=e[o]}),r};function c_(e){const{sx:t}=e,n=Lt(e,rN),{systemProps:r,otherProps:i}=iN(n);let o;return Array.isArray(t)?o=[r,...t]:typeof t=="function"?o=(...s)=>{const a=t(...s);return _r(a)?j({},r,a):r}:o=j({},r,t),j({},i,{sx:o})}var oN=Object.freeze(Object.defineProperty({__proto__:null,default:yd,unstable_createStyleFunctionSx:s_,extendSxProp:c_,unstable_defaultSxConfig:il},Symbol.toStringTag,{value:"Module"}));const T1=e=>e,sN=()=>{let e=T1;return{configure(t){e=t},generate(t){return e(t)},reset(){e=T1}}},aN=sN();var u_=aN;function d_(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=d_(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function lN(){for(var e,t,n=0,r="",i=arguments.length;n<i;n++)(e=arguments[n])&&(t=d_(e))&&(r&&(r+=" "),r+=t);return r}const cN=["className","component"];function uN(e={}){const{themeId:t,defaultTheme:n,defaultClassName:r="MuiBox-root",generateClassName:i}=e,o=t_("div",{shouldForwardProp:a=>a!=="theme"&&a!=="sx"&&a!=="as"})(yd);return _.exports.forwardRef(function(l,c){const u=nN(n),d=c_(l),{className:h,component:m="div"}=d,y=Lt(d,cN);return f(o,j({as:m,ref:c,className:lN(h,i?i(r):r),theme:t&&u[t]||u},y))})}const dN={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",open:"open",readOnly:"readOnly",required:"required",selected:"selected"};function ol(e,t,n="Mui"){const r=dN[t];return r?`${n}-${r}`:`${u_.generate(e)}-${t}`}function es(e,t,n="Mui"){const r={};return t.forEach(i=>{r[i]=ol(e,i,n)}),r}var pp={exports:{}},Oe={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kg=Symbol.for("react.element"),Cg=Symbol.for("react.portal"),xd=Symbol.for("react.fragment"),bd=Symbol.for("react.strict_mode"),wd=Symbol.for("react.profiler"),_d=Symbol.for("react.provider"),Sd=Symbol.for("react.context"),fN=Symbol.for("react.server_context"),kd=Symbol.for("react.forward_ref"),Cd=Symbol.for("react.suspense"),Pd=Symbol.for("react.suspense_list"),Md=Symbol.for("react.memo"),Ed=Symbol.for("react.lazy"),hN=Symbol.for("react.offscreen"),f_;f_=Symbol.for("react.module.reference");function mn(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case kg:switch(e=e.type,e){case xd:case wd:case bd:case Cd:case Pd:return e;default:switch(e=e&&e.$$typeof,e){case fN:case Sd:case kd:case Ed:case Md:case _d:return e;default:return t}}case Cg:return t}}}Oe.ContextConsumer=Sd;Oe.ContextProvider=_d;Oe.Element=kg;Oe.ForwardRef=kd;Oe.Fragment=xd;Oe.Lazy=Ed;Oe.Memo=Md;Oe.Portal=Cg;Oe.Profiler=wd;Oe.StrictMode=bd;Oe.Suspense=Cd;Oe.SuspenseList=Pd;Oe.isAsyncMode=function(){return!1};Oe.isConcurrentMode=function(){return!1};Oe.isContextConsumer=function(e){return mn(e)===Sd};Oe.isContextProvider=function(e){return mn(e)===_d};Oe.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===kg};Oe.isForwardRef=function(e){return mn(e)===kd};Oe.isFragment=function(e){return mn(e)===xd};Oe.isLazy=function(e){return mn(e)===Ed};Oe.isMemo=function(e){return mn(e)===Md};Oe.isPortal=function(e){return mn(e)===Cg};Oe.isProfiler=function(e){return mn(e)===wd};Oe.isStrictMode=function(e){return mn(e)===bd};Oe.isSuspense=function(e){return mn(e)===Cd};Oe.isSuspenseList=function(e){return mn(e)===Pd};Oe.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===xd||e===wd||e===bd||e===Cd||e===Pd||e===hN||typeof e=="object"&&e!==null&&(e.$$typeof===Ed||e.$$typeof===Md||e.$$typeof===_d||e.$$typeof===Sd||e.$$typeof===kd||e.$$typeof===f_||e.getModuleId!==void 0)};Oe.typeOf=mn;pp.exports=Oe;const pN=/^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;function h_(e){const t=`${e}`.match(pN);return t&&t[1]||""}function p_(e,t=""){return e.displayName||e.name||h_(e)||t}function R1(e,t,n){const r=p_(t);return e.displayName||(r!==""?`${n}(${r})`:n)}function mN(e){if(e!=null){if(typeof e=="string")return e;if(typeof e=="function")return p_(e,"Component");if(typeof e=="object")switch(e.$$typeof){case pp.exports.ForwardRef:return R1(e,e.render,"ForwardRef");case pp.exports.Memo:return R1(e,e.type,"memo");default:return}}}var gN=Object.freeze(Object.defineProperty({__proto__:null,default:mN,getFunctionName:h_},Symbol.toStringTag,{value:"Module"}));function fu(e,t){const n=j({},t);return Object.keys(e).forEach(r=>{if(r.toString().match(/^(components|slots)$/))n[r]=j({},e[r],n[r]);else if(r.toString().match(/^(componentsProps|slotProps)$/)){const i=e[r]||{},o=t[r];n[r]={},!o||!Object.keys(o)?n[r]=i:!i||!Object.keys(i)?n[r]=o:(n[r]=j({},o),Object.keys(i).forEach(s=>{n[r][s]=fu(i[s],o[s])}))}else n[r]===void 0&&(n[r]=e[r])}),n}const vN=typeof window!="undefined"?_.exports.useLayoutEffect:_.exports.useEffect;var m_=vN;function yi(e,t=Number.MIN_SAFE_INTEGER,n=Number.MAX_SAFE_INTEGER){return Math.max(t,Math.min(e,n))}var yN=Object.freeze(Object.defineProperty({__proto__:null,default:yi},Symbol.toStringTag,{value:"Module"}));function xN(e,t=0,n=1){return yi(e,t,n)}function bN(e){e=e.slice(1);const t=new RegExp(`.{1,${e.length>=6?2:1}}`,"g");let n=e.match(t);return n&&n[0].length===1&&(n=n.map(r=>r+r)),n?`rgb${n.length===4?"a":""}(${n.map((r,i)=>i<3?parseInt(r,16):Math.round(parseInt(r,16)/255*1e3)/1e3).join(", ")})`:""}function g_(e){if(e.type)return e;if(e.charAt(0)==="#")return g_(bN(e));const t=e.indexOf("("),n=e.substring(0,t);if(["rgb","rgba","hsl","hsla","color"].indexOf(n)===-1)throw new Error(Ai(9,e));let r=e.substring(t+1,e.length-1),i;if(n==="color"){if(r=r.split(" "),i=r.shift(),r.length===4&&r[3].charAt(0)==="/"&&(r[3]=r[3].slice(1)),["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(i)===-1)throw new Error(Ai(10,i))}else r=r.split(",");return r=r.map(o=>parseFloat(o)),{type:n,values:r,colorSpace:i}}function wN(e){const{type:t,colorSpace:n}=e;let{values:r}=e;return t.indexOf("rgb")!==-1?r=r.map((i,o)=>o<3?parseInt(i,10):i):t.indexOf("hsl")!==-1&&(r[1]=`${r[1]}%`,r[2]=`${r[2]}%`),t.indexOf("color")!==-1?r=`${n} ${r.join(" ")}`:r=`${r.join(", ")}`,`${t}(${r})`}function _N(e,t){return e=g_(e),t=xN(t),(e.type==="rgb"||e.type==="hsl")&&(e.type+="a"),e.type==="color"?e.values[3]=`/${t}`:e.values[3]=t,wN(e)}function gc(e){return e&&e.ownerDocument||document}function SN(e,t){typeof e=="function"?e(t):e&&(e.current=t)}function kN({controlled:e,default:t,name:n,state:r="value"}){const{current:i}=_.exports.useRef(e!==void 0),[o,s]=_.exports.useState(t),a=i?e:o,l=_.exports.useCallback(c=>{i||s(c)},[]);return[a,l]}function ki(e){const t=_.exports.useRef(e);return m_(()=>{t.current=e}),_.exports.useRef((...n)=>(0,t.current)(...n)).current}function Ma(...e){return _.exports.useMemo(()=>e.every(t=>t==null)?null:t=>{e.forEach(n=>{SN(n,t)})},e)}const $1={};function CN(e,t){const n=_.exports.useRef($1);return n.current===$1&&(n.current=e(t)),n}const PN=[];function MN(e){_.exports.useEffect(e,PN)}class Od{constructor(){this.currentId=null,this.clear=()=>{this.currentId!==null&&(clearTimeout(this.currentId),this.currentId=null)},this.disposeEffect=()=>this.clear}static create(){return new Od}start(t,n){this.clear(),this.currentId=setTimeout(()=>{this.currentId=null,n()},t)}}function EN(){const e=CN(Od.create).current;return MN(e.disposeEffect),e}let Nd=!0,mp=!1;const ON=new Od,NN={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function TN(e){const{type:t,tagName:n}=e;return!!(n==="INPUT"&&NN[t]&&!e.readOnly||n==="TEXTAREA"&&!e.readOnly||e.isContentEditable)}function RN(e){e.metaKey||e.altKey||e.ctrlKey||(Nd=!0)}function Ff(){Nd=!1}function $N(){this.visibilityState==="hidden"&&mp&&(Nd=!0)}function LN(e){e.addEventListener("keydown",RN,!0),e.addEventListener("mousedown",Ff,!0),e.addEventListener("pointerdown",Ff,!0),e.addEventListener("touchstart",Ff,!0),e.addEventListener("visibilitychange",$N,!0)}function AN(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch{}return Nd||TN(t)}function v_(){const e=_.exports.useCallback(i=>{i!=null&&LN(i.ownerDocument)},[]),t=_.exports.useRef(!1);function n(){return t.current?(mp=!0,ON.start(100,()=>{mp=!1}),t.current=!1,!0):!1}function r(i){return AN(i)?(t.current=!0,!0):!1}return{isFocusVisibleRef:t,onFocus:r,onBlur:n,ref:e}}const zN={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",whiteSpace:"nowrap",width:"1px"};var IN=zN;function Td(e,t,n=void 0){const r={};return Object.keys(e).forEach(i=>{r[i]=e[i].reduce((o,s)=>{if(s){const a=t(s);a!==""&&o.push(a),n&&n[s]&&o.push(n[s])}return o},[]).join(" ")}),r}function Gs(e){return typeof e=="string"}function DN(e,t,n){return e===void 0||Gs(e)?t:j({},t,{ownerState:j({},t.ownerState,n)})}function y_(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=y_(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function L1(){for(var e,t,n=0,r="",i=arguments.length;n<i;n++)(e=arguments[n])&&(t=y_(e))&&(r&&(r+=" "),r+=t);return r}function vc(e,t=[]){if(e===void 0)return{};const n={};return Object.keys(e).filter(r=>r.match(/^on[A-Z]/)&&typeof e[r]=="function"&&!t.includes(r)).forEach(r=>{n[r]=e[r]}),n}function A1(e){if(e===void 0)return{};const t={};return Object.keys(e).filter(n=>!(n.match(/^on[A-Z]/)&&typeof e[n]=="function")).forEach(n=>{t[n]=e[n]}),t}function FN(e){const{getSlotProps:t,additionalProps:n,externalSlotProps:r,externalForwardedProps:i,className:o}=e;if(!t){const m=L1(n==null?void 0:n.className,o,i==null?void 0:i.className,r==null?void 0:r.className),y=j({},n==null?void 0:n.style,i==null?void 0:i.style,r==null?void 0:r.style),v=j({},n,i,r);return m.length>0&&(v.className=m),Object.keys(y).length>0&&(v.style=y),{props:v,internalRef:void 0}}const s=vc(j({},i,r)),a=A1(r),l=A1(i),c=t(s),u=L1(c==null?void 0:c.className,n==null?void 0:n.className,o,i==null?void 0:i.className,r==null?void 0:r.className),d=j({},c==null?void 0:c.style,n==null?void 0:n.style,i==null?void 0:i.style,r==null?void 0:r.style),h=j({},c,n,l,a);return u.length>0&&(h.className=u),Object.keys(d).length>0&&(h.style=d),{props:h,internalRef:c.ref}}function jN(e,t,n){return typeof e=="function"?e(t,n):e}const BN=["elementType","externalSlotProps","ownerState","skipResolvingSlotProps"];function vr(e){var t;const{elementType:n,externalSlotProps:r,ownerState:i,skipResolvingSlotProps:o=!1}=e,s=Lt(e,BN),a=o?{}:jN(r,i),{props:l,internalRef:c}=FN(j({},s,{externalSlotProps:a})),u=Ma(c,a==null?void 0:a.ref,(t=e.additionalProps)==null?void 0:t.ref);return DN(n,j({},l,{ref:u}),i)}const VN=_.exports.createContext(),WN=()=>{const e=_.exports.useContext(VN);return e!=null?e:!1},HN=_.exports.createContext(void 0);function UN(e){const{theme:t,name:n,props:r}=e;if(!t||!t.components||!t.components[n])return r;const i=t.components[n];return i.defaultProps?fu(i.defaultProps,r):!i.styleOverrides&&!i.variants?fu(i,r):r}function YN({props:e,name:t}){const n=_.exports.useContext(HN);return UN({props:e,name:t,theme:{components:n}})}function XN(e,t){return j({toolbar:{minHeight:56,[e.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[e.up("sm")]:{minHeight:64}}},t)}var nt={},Pg={exports:{}};(function(e){function t(n){return n&&n.__esModule?n:{default:n}}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports})(Pg);var KN=pr(rO),GN=pr(yN),x_=Pg.exports;Object.defineProperty(nt,"__esModule",{value:!0});var fo=nt.alpha=S_;nt.blend=s6;nt.colorChannel=void 0;var gp=nt.darken=Eg;nt.decomposeColor=fn;nt.emphasize=k_;var qN=nt.getContrastRatio=t6;nt.getLuminance=hu;nt.hexToRgb=b_;nt.hslToRgb=__;var vp=nt.lighten=Og;nt.private_safeAlpha=n6;nt.private_safeColorChannel=void 0;nt.private_safeDarken=r6;nt.private_safeEmphasize=o6;nt.private_safeLighten=i6;nt.recomposeColor=ts;nt.rgbToHex=e6;var z1=x_(KN),QN=x_(GN);function Mg(e,t=0,n=1){return(0,QN.default)(e,t,n)}function b_(e){e=e.slice(1);const t=new RegExp(`.{1,${e.length>=6?2:1}}`,"g");let n=e.match(t);return n&&n[0].length===1&&(n=n.map(r=>r+r)),n?`rgb${n.length===4?"a":""}(${n.map((r,i)=>i<3?parseInt(r,16):Math.round(parseInt(r,16)/255*1e3)/1e3).join(", ")})`:""}function ZN(e){const t=e.toString(16);return t.length===1?`0${t}`:t}function fn(e){if(e.type)return e;if(e.charAt(0)==="#")return fn(b_(e));const t=e.indexOf("("),n=e.substring(0,t);if(["rgb","rgba","hsl","hsla","color"].indexOf(n)===-1)throw new Error((0,z1.default)(9,e));let r=e.substring(t+1,e.length-1),i;if(n==="color"){if(r=r.split(" "),i=r.shift(),r.length===4&&r[3].charAt(0)==="/"&&(r[3]=r[3].slice(1)),["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(i)===-1)throw new Error((0,z1.default)(10,i))}else r=r.split(",");return r=r.map(o=>parseFloat(o)),{type:n,values:r,colorSpace:i}}const w_=e=>{const t=fn(e);return t.values.slice(0,3).map((n,r)=>t.type.indexOf("hsl")!==-1&&r!==0?`${n}%`:n).join(" ")};nt.colorChannel=w_;const JN=(e,t)=>{try{return w_(e)}catch{return e}};nt.private_safeColorChannel=JN;function ts(e){const{type:t,colorSpace:n}=e;let{values:r}=e;return t.indexOf("rgb")!==-1?r=r.map((i,o)=>o<3?parseInt(i,10):i):t.indexOf("hsl")!==-1&&(r[1]=`${r[1]}%`,r[2]=`${r[2]}%`),t.indexOf("color")!==-1?r=`${n} ${r.join(" ")}`:r=`${r.join(", ")}`,`${t}(${r})`}function e6(e){if(e.indexOf("#")===0)return e;const{values:t}=fn(e);return`#${t.map((n,r)=>ZN(r===3?Math.round(255*n):n)).join("")}`}function __(e){e=fn(e);const{values:t}=e,n=t[0],r=t[1]/100,i=t[2]/100,o=r*Math.min(i,1-i),s=(c,u=(c+n/30)%12)=>i-o*Math.max(Math.min(u-3,9-u,1),-1);let a="rgb";const l=[Math.round(s(0)*255),Math.round(s(8)*255),Math.round(s(4)*255)];return e.type==="hsla"&&(a+="a",l.push(t[3])),ts({type:a,values:l})}function hu(e){e=fn(e);let t=e.type==="hsl"||e.type==="hsla"?fn(__(e)).values:e.values;return t=t.map(n=>(e.type!=="color"&&(n/=255),n<=.03928?n/12.92:((n+.055)/1.055)**2.4)),Number((.2126*t[0]+.7152*t[1]+.0722*t[2]).toFixed(3))}function t6(e,t){const n=hu(e),r=hu(t);return(Math.max(n,r)+.05)/(Math.min(n,r)+.05)}function S_(e,t){return e=fn(e),t=Mg(t),(e.type==="rgb"||e.type==="hsl")&&(e.type+="a"),e.type==="color"?e.values[3]=`/${t}`:e.values[3]=t,ts(e)}function n6(e,t,n){try{return S_(e,t)}catch{return e}}function Eg(e,t){if(e=fn(e),t=Mg(t),e.type.indexOf("hsl")!==-1)e.values[2]*=1-t;else if(e.type.indexOf("rgb")!==-1||e.type.indexOf("color")!==-1)for(let n=0;n<3;n+=1)e.values[n]*=1-t;return ts(e)}function r6(e,t,n){try{return Eg(e,t)}catch{return e}}function Og(e,t){if(e=fn(e),t=Mg(t),e.type.indexOf("hsl")!==-1)e.values[2]+=(100-e.values[2])*t;else if(e.type.indexOf("rgb")!==-1)for(let n=0;n<3;n+=1)e.values[n]+=(255-e.values[n])*t;else if(e.type.indexOf("color")!==-1)for(let n=0;n<3;n+=1)e.values[n]+=(1-e.values[n])*t;return ts(e)}function i6(e,t,n){try{return Og(e,t)}catch{return e}}function k_(e,t=.15){return hu(e)>.5?Eg(e,t):Og(e,t)}function o6(e,t,n){try{return k_(e,t)}catch{return e}}function s6(e,t,n,r=1){const i=(l,c)=>Math.round((l**(1/r)*(1-n)+c**(1/r)*n)**r),o=fn(e),s=fn(t),a=[i(o.values[0],s.values[0]),i(o.values[1],s.values[1]),i(o.values[2],s.values[2])];return ts({type:"rgb",values:a})}const a6=["mode","contrastThreshold","tonalOffset"],I1={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:Sa.white,default:Sa.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}},jf={text:{primary:Sa.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:Sa.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}};function D1(e,t,n,r){const i=r.light||r,o=r.dark||r*1.5;e[t]||(e.hasOwnProperty(n)?e[t]=e[n]:t==="light"?e.light=vp(e.main,i):t==="dark"&&(e.dark=gp(e.main,o)))}function l6(e="light"){return e==="dark"?{main:qi[200],light:qi[50],dark:qi[400]}:{main:qi[700],light:qi[400],dark:qi[800]}}function c6(e="light"){return e==="dark"?{main:Gi[200],light:Gi[50],dark:Gi[400]}:{main:Gi[500],light:Gi[300],dark:Gi[700]}}function u6(e="light"){return e==="dark"?{main:Ki[500],light:Ki[300],dark:Ki[700]}:{main:Ki[700],light:Ki[400],dark:Ki[800]}}function d6(e="light"){return e==="dark"?{main:Qi[400],light:Qi[300],dark:Qi[700]}:{main:Qi[700],light:Qi[500],dark:Qi[900]}}function f6(e="light"){return e==="dark"?{main:Zi[400],light:Zi[300],dark:Zi[700]}:{main:Zi[800],light:Zi[500],dark:Zi[900]}}function h6(e="light"){return e==="dark"?{main:ms[400],light:ms[300],dark:ms[700]}:{main:"#ed6c02",light:ms[500],dark:ms[900]}}function p6(e){const{mode:t="light",contrastThreshold:n=3,tonalOffset:r=.2}=e,i=Lt(e,a6),o=e.primary||l6(t),s=e.secondary||c6(t),a=e.error||u6(t),l=e.info||d6(t),c=e.success||f6(t),u=e.warning||h6(t);function d(v){return qN(v,jf.text.primary)>=n?jf.text.primary:I1.text.primary}const h=({color:v,name:p,mainShade:g=500,lightShade:x=300,darkShade:b=700})=>{if(v=j({},v),!v.main&&v[g]&&(v.main=v[g]),!v.hasOwnProperty("main"))throw new Error(Ai(11,p?` (${p})`:"",g));if(typeof v.main!="string")throw new Error(Ai(12,p?` (${p})`:"",JSON.stringify(v.main)));return D1(v,"light",x,r),D1(v,"dark",b,r),v.contrastText||(v.contrastText=d(v.main)),v},m={dark:jf,light:I1};return Un(j({common:j({},Sa),mode:t,primary:h({color:o,name:"primary"}),secondary:h({color:s,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:h({color:a,name:"error"}),warning:h({color:u,name:"warning"}),info:h({color:l,name:"info"}),success:h({color:c,name:"success"}),grey:nO,contrastThreshold:n,getContrastText:d,augmentColor:h,tonalOffset:r},m[t]),i)}const m6=["fontFamily","fontSize","fontWeightLight","fontWeightRegular","fontWeightMedium","fontWeightBold","htmlFontSize","allVariants","pxToRem"];function g6(e){return Math.round(e*1e5)/1e5}const F1={textTransform:"uppercase"},j1='"Roboto", "Helvetica", "Arial", sans-serif';function v6(e,t){const n=typeof t=="function"?t(e):t,{fontFamily:r=j1,fontSize:i=14,fontWeightLight:o=300,fontWeightRegular:s=400,fontWeightMedium:a=500,fontWeightBold:l=700,htmlFontSize:c=16,allVariants:u,pxToRem:d}=n,h=Lt(n,m6),m=i/14,y=d||(g=>`${g/c*m}rem`),v=(g,x,b,w,S)=>j({fontFamily:r,fontWeight:g,fontSize:y(x),lineHeight:b},r===j1?{letterSpacing:`${g6(w/x)}em`}:{},S,u),p={h1:v(o,96,1.167,-1.5),h2:v(o,60,1.2,-.5),h3:v(s,48,1.167,0),h4:v(s,34,1.235,.25),h5:v(s,24,1.334,0),h6:v(a,20,1.6,.15),subtitle1:v(s,16,1.75,.15),subtitle2:v(a,14,1.57,.1),body1:v(s,16,1.5,.15),body2:v(s,14,1.43,.15),button:v(a,14,1.75,.4,F1),caption:v(s,12,1.66,.4),overline:v(s,12,2.66,1,F1),inherit:{fontFamily:"inherit",fontWeight:"inherit",fontSize:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}};return Un(j({htmlFontSize:c,pxToRem:y,fontFamily:r,fontSize:i,fontWeightLight:o,fontWeightRegular:s,fontWeightMedium:a,fontWeightBold:l},p),h,{clone:!1})}const y6=.2,x6=.14,b6=.12;function De(...e){return[`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${y6})`,`${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${x6})`,`${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${b6})`].join(",")}const w6=["none",De(0,2,1,-1,0,1,1,0,0,1,3,0),De(0,3,1,-2,0,2,2,0,0,1,5,0),De(0,3,3,-2,0,3,4,0,0,1,8,0),De(0,2,4,-1,0,4,5,0,0,1,10,0),De(0,3,5,-1,0,5,8,0,0,1,14,0),De(0,3,5,-1,0,6,10,0,0,1,18,0),De(0,4,5,-2,0,7,10,1,0,2,16,1),De(0,5,5,-3,0,8,10,1,0,3,14,2),De(0,5,6,-3,0,9,12,1,0,3,16,2),De(0,6,6,-3,0,10,14,1,0,4,18,3),De(0,6,7,-4,0,11,15,1,0,4,20,3),De(0,7,8,-4,0,12,17,2,0,5,22,4),De(0,7,8,-4,0,13,19,2,0,5,24,4),De(0,7,9,-4,0,14,21,2,0,5,26,4),De(0,8,9,-5,0,15,22,2,0,6,28,5),De(0,8,10,-5,0,16,24,2,0,6,30,5),De(0,8,11,-5,0,17,26,2,0,6,32,5),De(0,9,11,-5,0,18,28,2,0,7,34,6),De(0,9,12,-6,0,19,29,2,0,7,36,6),De(0,10,13,-6,0,20,31,3,0,8,38,7),De(0,10,13,-6,0,21,33,3,0,8,40,7),De(0,10,14,-6,0,22,35,3,0,8,42,7),De(0,11,14,-7,0,23,36,3,0,9,44,8),De(0,11,15,-7,0,24,38,3,0,9,46,8)];var _6=w6;const S6=["duration","easing","delay"],k6={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},C6={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function B1(e){return`${Math.round(e)}ms`}function P6(e){if(!e)return 0;const t=e/36;return Math.round((4+15*t**.25+t/5)*10)}function M6(e){const t=j({},k6,e.easing),n=j({},C6,e.duration);return j({getAutoHeightDuration:P6,create:(i=["all"],o={})=>{const{duration:s=n.standard,easing:a=t.easeInOut,delay:l=0}=o;return Lt(o,S6),(Array.isArray(i)?i:[i]).map(c=>`${c} ${typeof s=="string"?s:B1(s)} ${a} ${typeof l=="string"?l:B1(l)}`).join(",")}},e,{easing:t,duration:n})}const E6={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500};var O6=E6;const N6=["breakpoints","mixins","spacing","palette","transitions","typography","shape"];function C_(e={},...t){const{mixins:n={},palette:r={},transitions:i={},typography:o={}}=e,s=Lt(e,N6);if(e.vars)throw new Error(Ai(18));const a=p6(r),l=Sg(e);let c=Un(l,{mixins:XN(l.breakpoints,n),palette:a,shadows:_6.slice(),typography:v6(a,o),transitions:M6(i),zIndex:j({},O6)});return c=Un(c,s),c=t.reduce((u,d)=>Un(u,d),c),c.unstable_sxConfig=j({},il,s==null?void 0:s.unstable_sxConfig),c.unstable_sx=function(d){return yd({sx:d,theme:this})},c}function T6(e){return String(e).match(/[\d.\-+]*\s*(.*)/)[1]||""}function R6(e){return parseFloat(e)}const $6=C_();var L6=$6,sl={},Ng={exports:{}};(function(e){function t(n,r){if(n==null)return{};var i={};for(var o in n)if({}.hasOwnProperty.call(n,o)){if(r.includes(o))continue;i[o]=n[o]}return i}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports})(Ng);var A6=pr(n9),z6=pr(r9),I6=pr(u9),D6=pr(gN),F6=pr(Z9),j6=pr(oN),ns=Pg.exports;Object.defineProperty(sl,"__esModule",{value:!0});var B6=sl.default=eT;sl.shouldForwardProp=yc;sl.systemDefaultTheme=void 0;var nn=ns(yg.exports),yp=ns(Ng.exports),V1=K6(A6),V6=z6;ns(I6);ns(D6);var W6=ns(F6),H6=ns(j6);const U6=["ownerState"],Y6=["variants"],X6=["name","slot","skipVariantsResolver","skipSx","overridesResolver"];function P_(e){if(typeof WeakMap!="function")return null;var t=new WeakMap,n=new WeakMap;return(P_=function(r){return r?n:t})(e)}function K6(e,t){if(!t&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var n=P_(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(o!=="default"&&Object.prototype.hasOwnProperty.call(e,o)){var s=i?Object.getOwnPropertyDescriptor(e,o):null;s&&(s.get||s.set)?Object.defineProperty(r,o,s):r[o]=e[o]}return r.default=e,n&&n.set(e,r),r}function G6(e){return Object.keys(e).length===0}function q6(e){return typeof e=="string"&&e.charCodeAt(0)>96}function yc(e){return e!=="ownerState"&&e!=="theme"&&e!=="sx"&&e!=="as"}const Q6=sl.systemDefaultTheme=(0,W6.default)(),Z6=e=>e&&e.charAt(0).toLowerCase()+e.slice(1);function $l({defaultTheme:e,theme:t,themeId:n}){return G6(t)?e:t[n]||t}function J6(e){return e?(t,n)=>n[e]:null}function xc(e,t){let{ownerState:n}=t,r=(0,yp.default)(t,U6);const i=typeof e=="function"?e((0,nn.default)({ownerState:n},r)):e;if(Array.isArray(i))return i.flatMap(o=>xc(o,(0,nn.default)({ownerState:n},r)));if(!!i&&typeof i=="object"&&Array.isArray(i.variants)){const{variants:o=[]}=i;let a=(0,yp.default)(i,Y6);return o.forEach(l=>{let c=!0;typeof l.props=="function"?c=l.props((0,nn.default)({ownerState:n},r,n)):Object.keys(l.props).forEach(u=>{(n==null?void 0:n[u])!==l.props[u]&&r[u]!==l.props[u]&&(c=!1)}),c&&(Array.isArray(a)||(a=[a]),a.push(typeof l.style=="function"?l.style((0,nn.default)({ownerState:n},r,n)):l.style))}),a}return i}function eT(e={}){const{themeId:t,defaultTheme:n=Q6,rootShouldForwardProp:r=yc,slotShouldForwardProp:i=yc}=e,o=s=>(0,H6.default)((0,nn.default)({},s,{theme:$l((0,nn.default)({},s,{defaultTheme:n,themeId:t}))}));return o.__mui_systemSx=!0,(s,a={})=>{(0,V1.internal_processStyles)(s,S=>S.filter(C=>!(C!=null&&C.__mui_systemSx)));const{name:l,slot:c,skipVariantsResolver:u,skipSx:d,overridesResolver:h=J6(Z6(c))}=a,m=(0,yp.default)(a,X6),y=u!==void 0?u:c&&c!=="Root"&&c!=="root"||!1,v=d||!1;let p,g=yc;c==="Root"||c==="root"?g=r:c?g=i:q6(s)&&(g=void 0);const x=(0,V1.default)(s,(0,nn.default)({shouldForwardProp:g,label:p},m)),b=S=>typeof S=="function"&&S.__emotion_real!==S||(0,V6.isPlainObject)(S)?C=>xc(S,(0,nn.default)({},C,{theme:$l({theme:C.theme,defaultTheme:n,themeId:t})})):S,w=(S,...C)=>{let P=b(S);const M=C?C.map(b):[];l&&h&&M.push(A=>{const z=$l((0,nn.default)({},A,{defaultTheme:n,themeId:t}));if(!z.components||!z.components[l]||!z.components[l].styleOverrides)return null;const H=z.components[l].styleOverrides,Q={};return Object.entries(H).forEach(([V,K])=>{Q[V]=xc(K,(0,nn.default)({},A,{theme:z}))}),h(A,Q)}),l&&!y&&M.push(A=>{var z;const H=$l((0,nn.default)({},A,{defaultTheme:n,themeId:t})),Q=H==null||(z=H.components)==null||(z=z[l])==null?void 0:z.variants;return xc({variants:Q},(0,nn.default)({},A,{theme:H}))}),v||M.push(o);const O=M.length-C.length;if(Array.isArray(S)&&O>0){const A=new Array(O).fill("");P=[...S,...A],P.raw=[...S.raw,...A]}const N=x(P,...M);return s.muiName&&(N.muiName=s.muiName),N};return x.withConfig&&(w.withConfig=x.withConfig),w}}function Tg(e){return e!=="ownerState"&&e!=="theme"&&e!=="sx"&&e!=="as"}const tT=e=>Tg(e)&&e!=="classes";var M_=tT;const nT=B6({themeId:jw,defaultTheme:L6,rootShouldForwardProp:M_});var zt=nT;function E_(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=E_(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function st(){for(var e,t,n=0,r="",i=arguments.length;n<i;n++)(e=arguments[n])&&(t=E_(e))&&(r&&(r+=" "),r+=t);return r}function al(e){return YN(e)}function xp(e,t){return xp=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,r){return n.__proto__=r,n},xp(e,t)}function rT(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,xp(e,t)}var W1=Qe.createContext(null);function iT(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Rg(e,t){var n=function(o){return t&&_.exports.isValidElement(o)?t(o):o},r=Object.create(null);return e&&_.exports.Children.map(e,function(i){return i}).forEach(function(i){r[i.key]=n(i)}),r}function oT(e,t){e=e||{},t=t||{};function n(u){return u in t?t[u]:e[u]}var r=Object.create(null),i=[];for(var o in e)o in t?i.length&&(r[o]=i,i=[]):i.push(o);var s,a={};for(var l in t){if(r[l])for(s=0;s<r[l].length;s++){var c=r[l][s];a[r[l][s]]=n(c)}a[l]=n(l)}for(s=0;s<i.length;s++)a[i[s]]=n(i[s]);return a}function Ci(e,t,n){return n[t]!=null?n[t]:e.props[t]}function sT(e,t){return Rg(e.children,function(n){return _.exports.cloneElement(n,{onExited:t.bind(null,n),in:!0,appear:Ci(n,"appear",e),enter:Ci(n,"enter",e),exit:Ci(n,"exit",e)})})}function aT(e,t,n){var r=Rg(e.children),i=oT(t,r);return Object.keys(i).forEach(function(o){var s=i[o];if(!!_.exports.isValidElement(s)){var a=o in t,l=o in r,c=t[o],u=_.exports.isValidElement(c)&&!c.props.in;l&&(!a||u)?i[o]=_.exports.cloneElement(s,{onExited:n.bind(null,s),in:!0,exit:Ci(s,"exit",e),enter:Ci(s,"enter",e)}):!l&&a&&!u?i[o]=_.exports.cloneElement(s,{in:!1}):l&&a&&_.exports.isValidElement(c)&&(i[o]=_.exports.cloneElement(s,{onExited:n.bind(null,s),in:c.props.in,exit:Ci(s,"exit",e),enter:Ci(s,"enter",e)}))}}),i}var lT=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},cT={component:"div",childFactory:function(t){return t}},$g=function(e){rT(t,e);function t(r,i){var o;o=e.call(this,r,i)||this;var s=o.handleExited.bind(iT(o));return o.state={contextValue:{isMounting:!0},handleExited:s,firstRender:!0},o}var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(i,o){var s=o.children,a=o.handleExited,l=o.firstRender;return{children:l?sT(i,a):aT(i,s,a),firstRender:!1}},n.handleExited=function(i,o){var s=Rg(this.props.children);i.key in s||(i.props.onExited&&i.props.onExited(o),this.mounted&&this.setState(function(a){var l=j({},a.children);return delete l[i.key],{children:l}}))},n.render=function(){var i=this.props,o=i.component,s=i.childFactory,a=Lt(i,["component","childFactory"]),l=this.state.contextValue,c=lT(this.state.children).map(s);return delete a.appear,delete a.enter,delete a.exit,o===null?Qe.createElement(W1.Provider,{value:l},c):Qe.createElement(W1.Provider,{value:l},Qe.createElement(o,a,c))},t}(Qe.Component);$g.propTypes={};$g.defaultProps=cT;var uT=$g;function dT(e){const{className:t,classes:n,pulsate:r=!1,rippleX:i,rippleY:o,rippleSize:s,in:a,onExited:l,timeout:c}=e,[u,d]=_.exports.useState(!1),h=st(t,n.ripple,n.rippleVisible,r&&n.ripplePulsate),m={width:s,height:s,top:-(s/2)+o,left:-(s/2)+i},y=st(n.child,u&&n.childLeaving,r&&n.childPulsate);return!a&&!u&&d(!0),_.exports.useEffect(()=>{if(!a&&l!=null){const v=setTimeout(l,c);return()=>{clearTimeout(v)}}},[l,a,c]),f("span",{className:h,style:m,children:f("span",{className:y})})}const fT=es("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]);var rn=fT;const hT=["center","classes","className"];let Rd=e=>e,H1,U1,Y1,X1;const bp=550,pT=80,mT=Jo(H1||(H1=Rd`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),gT=Jo(U1||(U1=Rd`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),vT=Jo(Y1||(Y1=Rd`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),yT=zt("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),xT=zt(dT,{name:"MuiTouchRipple",slot:"Ripple"})(X1||(X1=Rd`
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
`),rn.rippleVisible,mT,bp,({theme:e})=>e.transitions.easing.easeInOut,rn.ripplePulsate,({theme:e})=>e.transitions.duration.shorter,rn.child,rn.childLeaving,gT,bp,({theme:e})=>e.transitions.easing.easeInOut,rn.childPulsate,vT,({theme:e})=>e.transitions.easing.easeInOut),bT=_.exports.forwardRef(function(t,n){const r=al({props:t,name:"MuiTouchRipple"}),{center:i=!1,classes:o={},className:s}=r,a=Lt(r,hT),[l,c]=_.exports.useState([]),u=_.exports.useRef(0),d=_.exports.useRef(null);_.exports.useEffect(()=>{d.current&&(d.current(),d.current=null)},[l]);const h=_.exports.useRef(!1),m=EN(),y=_.exports.useRef(null),v=_.exports.useRef(null),p=_.exports.useCallback(w=>{const{pulsate:S,rippleX:C,rippleY:P,rippleSize:M,cb:O}=w;c(N=>[...N,f(xT,{classes:{ripple:st(o.ripple,rn.ripple),rippleVisible:st(o.rippleVisible,rn.rippleVisible),ripplePulsate:st(o.ripplePulsate,rn.ripplePulsate),child:st(o.child,rn.child),childLeaving:st(o.childLeaving,rn.childLeaving),childPulsate:st(o.childPulsate,rn.childPulsate)},timeout:bp,pulsate:S,rippleX:C,rippleY:P,rippleSize:M},u.current)]),u.current+=1,d.current=O},[o]),g=_.exports.useCallback((w={},S={},C=()=>{})=>{const{pulsate:P=!1,center:M=i||S.pulsate,fakeElement:O=!1}=S;if((w==null?void 0:w.type)==="mousedown"&&h.current){h.current=!1;return}(w==null?void 0:w.type)==="touchstart"&&(h.current=!0);const N=O?null:v.current,A=N?N.getBoundingClientRect():{width:0,height:0,left:0,top:0};let z,H,Q;if(M||w===void 0||w.clientX===0&&w.clientY===0||!w.clientX&&!w.touches)z=Math.round(A.width/2),H=Math.round(A.height/2);else{const{clientX:V,clientY:K}=w.touches&&w.touches.length>0?w.touches[0]:w;z=Math.round(V-A.left),H=Math.round(K-A.top)}if(M)Q=Math.sqrt((2*A.width**2+A.height**2)/3),Q%2===0&&(Q+=1);else{const V=Math.max(Math.abs((N?N.clientWidth:0)-z),z)*2+2,K=Math.max(Math.abs((N?N.clientHeight:0)-H),H)*2+2;Q=Math.sqrt(V**2+K**2)}w!=null&&w.touches?y.current===null&&(y.current=()=>{p({pulsate:P,rippleX:z,rippleY:H,rippleSize:Q,cb:C})},m.start(pT,()=>{y.current&&(y.current(),y.current=null)})):p({pulsate:P,rippleX:z,rippleY:H,rippleSize:Q,cb:C})},[i,p,m]),x=_.exports.useCallback(()=>{g({},{pulsate:!0})},[g]),b=_.exports.useCallback((w,S)=>{if(m.clear(),(w==null?void 0:w.type)==="touchend"&&y.current){y.current(),y.current=null,m.start(0,()=>{b(w,S)});return}y.current=null,c(C=>C.length>0?C.slice(1):C),d.current=S},[m]);return _.exports.useImperativeHandle(n,()=>({pulsate:x,start:g,stop:b}),[x,g,b]),f(yT,j({className:st(rn.root,o.root,s),ref:v},a,{children:f(uT,{component:null,exit:!0,children:l})}))});var wT=bT;function _T(e){return ol("MuiButtonBase",e)}const ST=es("MuiButtonBase",["root","disabled","focusVisible"]);var kT=ST;const CT=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],PT=e=>{const{disabled:t,focusVisible:n,focusVisibleClassName:r,classes:i}=e,s=Td({root:["root",t&&"disabled",n&&"focusVisible"]},_T,i);return n&&r&&(s.root+=` ${r}`),s},MT=zt("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${kT.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),ET=_.exports.forwardRef(function(t,n){const r=al({props:t,name:"MuiButtonBase"}),{action:i,centerRipple:o=!1,children:s,className:a,component:l="button",disabled:c=!1,disableRipple:u=!1,disableTouchRipple:d=!1,focusRipple:h=!1,LinkComponent:m="a",onBlur:y,onClick:v,onContextMenu:p,onDragLeave:g,onFocus:x,onFocusVisible:b,onKeyDown:w,onKeyUp:S,onMouseDown:C,onMouseLeave:P,onMouseUp:M,onTouchEnd:O,onTouchMove:N,onTouchStart:A,tabIndex:z=0,TouchRippleProps:H,touchRippleRef:Q,type:V}=r,K=Lt(r,CT),Y=_.exports.useRef(null),Z=_.exports.useRef(null),ye=Ma(Z,Q),{isFocusVisibleRef:Ve,onFocus:F,onBlur:R,ref:T}=v_(),[$,U]=_.exports.useState(!1);c&&$&&U(!1),_.exports.useImperativeHandle(i,()=>({focusVisible:()=>{U(!0),Y.current.focus()}}),[]);const[E,ne]=_.exports.useState(!1);_.exports.useEffect(()=>{ne(!0)},[]);const I=E&&!u&&!c;_.exports.useEffect(()=>{$&&h&&!u&&E&&Z.current.pulsate()},[u,h,$,E]);function ie(L,q,pe=d){return ki(me=>(q&&q(me),!pe&&Z.current&&Z.current[L](me),!0))}const ce=ie("start",C),fe=ie("stop",p),te=ie("stop",g),Ce=ie("stop",M),ae=ie("stop",L=>{$&&L.preventDefault(),P&&P(L)}),G=ie("start",A),Se=ie("stop",O),se=ie("stop",N),xe=ie("stop",L=>{R(L),Ve.current===!1&&U(!1),y&&y(L)},!1),gn=ki(L=>{Y.current||(Y.current=L.currentTarget),F(L),Ve.current===!0&&(U(!0),b&&b(L)),x&&x(L)}),le=()=>{const L=Y.current;return l&&l!=="button"&&!(L.tagName==="A"&&L.href)},Tt=_.exports.useRef(!1),vn=ki(L=>{h&&!Tt.current&&$&&Z.current&&L.key===" "&&(Tt.current=!0,Z.current.stop(L,()=>{Z.current.start(L)})),L.target===L.currentTarget&&le()&&L.key===" "&&L.preventDefault(),w&&w(L),L.target===L.currentTarget&&le()&&L.key==="Enter"&&!c&&(L.preventDefault(),v&&v(L))}),ht=ki(L=>{h&&L.key===" "&&Z.current&&$&&!L.defaultPrevented&&(Tt.current=!1,Z.current.stop(L,()=>{Z.current.pulsate(L)})),S&&S(L),v&&L.target===L.currentTarget&&le()&&L.key===" "&&!L.defaultPrevented&&v(L)});let J=l;J==="button"&&(K.href||K.to)&&(J=m);const ke={};J==="button"?(ke.type=V===void 0?"button":V,ke.disabled=c):(!K.href&&!K.to&&(ke.role="button"),c&&(ke["aria-disabled"]=c));const qn=Ma(n,T,Y),Jt=j({},r,{centerRipple:o,component:l,disabled:c,disableRipple:u,disableTouchRipple:d,focusRipple:h,tabIndex:z,focusVisible:$}),D=PT(Jt);return k(MT,j({as:J,className:st(D.root,a),ownerState:Jt,onBlur:xe,onClick:v,onContextMenu:fe,onFocus:gn,onKeyDown:vn,onKeyUp:ht,onMouseDown:ce,onMouseLeave:ae,onMouseUp:Ce,onDragLeave:te,onTouchEnd:Se,onTouchMove:se,onTouchStart:G,ref:qn,tabIndex:c?-1:z,type:V},ke,K,{children:[s,I?f(wT,j({ref:ye,center:o},H)):null]}))});var OT=ET;const NT=es("MuiBox",["root"]);var TT=NT;const RT=C_(),$T=uN({themeId:jw,defaultTheme:RT,defaultClassName:TT.root,generateClassName:u_.generate});var Cn=$T;function LT(e){return ol("MuiButton",e)}const AT=es("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","colorPrimary","colorSecondary","colorSuccess","colorError","colorInfo","colorWarning","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","icon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]);var Ll=AT;const zT=_.exports.createContext({});var IT=zT;const DT=_.exports.createContext(void 0);var FT=DT;const jT=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],BT=e=>{const{color:t,disableElevation:n,fullWidth:r,size:i,variant:o,classes:s}=e,a={root:["root",o,`${o}${Xe(t)}`,`size${Xe(i)}`,`${o}Size${Xe(i)}`,`color${Xe(t)}`,n&&"disableElevation",r&&"fullWidth"],label:["label"],startIcon:["icon","startIcon",`iconSize${Xe(i)}`],endIcon:["icon","endIcon",`iconSize${Xe(i)}`]},l=Td(a,LT,s);return j({},s,l)},O_=e=>j({},e.size==="small"&&{"& > *:nth-of-type(1)":{fontSize:18}},e.size==="medium"&&{"& > *:nth-of-type(1)":{fontSize:20}},e.size==="large"&&{"& > *:nth-of-type(1)":{fontSize:22}}),VT=zt(OT,{shouldForwardProp:e=>M_(e)||e==="classes",name:"MuiButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],t[`${n.variant}${Xe(n.color)}`],t[`size${Xe(n.size)}`],t[`${n.variant}Size${Xe(n.size)}`],n.color==="inherit"&&t.colorInherit,n.disableElevation&&t.disableElevation,n.fullWidth&&t.fullWidth]}})(({theme:e,ownerState:t})=>{var n,r;const i=e.palette.mode==="light"?e.palette.grey[300]:e.palette.grey[800],o=e.palette.mode==="light"?e.palette.grey.A100:e.palette.grey[700];return j({},e.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(e.vars||e).shape.borderRadius,transition:e.transitions.create(["background-color","box-shadow","border-color","color"],{duration:e.transitions.duration.short}),"&:hover":j({textDecoration:"none",backgroundColor:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`:fo(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},t.variant==="text"&&t.color!=="inherit"&&{backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:fo(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},t.variant==="outlined"&&t.color!=="inherit"&&{border:`1px solid ${(e.vars||e).palette[t.color].main}`,backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:fo(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},t.variant==="contained"&&{backgroundColor:e.vars?e.vars.palette.Button.inheritContainedHoverBg:o,boxShadow:(e.vars||e).shadows[4],"@media (hover: none)":{boxShadow:(e.vars||e).shadows[2],backgroundColor:(e.vars||e).palette.grey[300]}},t.variant==="contained"&&t.color!=="inherit"&&{backgroundColor:(e.vars||e).palette[t.color].dark,"@media (hover: none)":{backgroundColor:(e.vars||e).palette[t.color].main}}),"&:active":j({},t.variant==="contained"&&{boxShadow:(e.vars||e).shadows[8]}),[`&.${Ll.focusVisible}`]:j({},t.variant==="contained"&&{boxShadow:(e.vars||e).shadows[6]}),[`&.${Ll.disabled}`]:j({color:(e.vars||e).palette.action.disabled},t.variant==="outlined"&&{border:`1px solid ${(e.vars||e).palette.action.disabledBackground}`},t.variant==="contained"&&{color:(e.vars||e).palette.action.disabled,boxShadow:(e.vars||e).shadows[0],backgroundColor:(e.vars||e).palette.action.disabledBackground})},t.variant==="text"&&{padding:"6px 8px"},t.variant==="text"&&t.color!=="inherit"&&{color:(e.vars||e).palette[t.color].main},t.variant==="outlined"&&{padding:"5px 15px",border:"1px solid currentColor"},t.variant==="outlined"&&t.color!=="inherit"&&{color:(e.vars||e).palette[t.color].main,border:e.vars?`1px solid rgba(${e.vars.palette[t.color].mainChannel} / 0.5)`:`1px solid ${fo(e.palette[t.color].main,.5)}`},t.variant==="contained"&&{color:e.vars?e.vars.palette.text.primary:(n=(r=e.palette).getContrastText)==null?void 0:n.call(r,e.palette.grey[300]),backgroundColor:e.vars?e.vars.palette.Button.inheritContainedBg:i,boxShadow:(e.vars||e).shadows[2]},t.variant==="contained"&&t.color!=="inherit"&&{color:(e.vars||e).palette[t.color].contrastText,backgroundColor:(e.vars||e).palette[t.color].main},t.color==="inherit"&&{color:"inherit",borderColor:"currentColor"},t.size==="small"&&t.variant==="text"&&{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},t.size==="large"&&t.variant==="text"&&{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},t.size==="small"&&t.variant==="outlined"&&{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},t.size==="large"&&t.variant==="outlined"&&{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},t.size==="small"&&t.variant==="contained"&&{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},t.size==="large"&&t.variant==="contained"&&{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},t.fullWidth&&{width:"100%"})},({ownerState:e})=>e.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${Ll.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${Ll.disabled}`]:{boxShadow:"none"}}),WT=zt("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.startIcon,t[`iconSize${Xe(n.size)}`]]}})(({ownerState:e})=>j({display:"inherit",marginRight:8,marginLeft:-4},e.size==="small"&&{marginLeft:-2},O_(e))),HT=zt("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.endIcon,t[`iconSize${Xe(n.size)}`]]}})(({ownerState:e})=>j({display:"inherit",marginRight:-4,marginLeft:8},e.size==="small"&&{marginRight:-2},O_(e))),UT=_.exports.forwardRef(function(t,n){const r=_.exports.useContext(IT),i=_.exports.useContext(FT),o=fu(r,t),s=al({props:o,name:"MuiButton"}),{children:a,color:l="primary",component:c="button",className:u,disabled:d=!1,disableElevation:h=!1,disableFocusRipple:m=!1,endIcon:y,focusVisibleClassName:v,fullWidth:p=!1,size:g="medium",startIcon:x,type:b,variant:w="text"}=s,S=Lt(s,jT),C=j({},s,{color:l,component:c,disabled:d,disableElevation:h,disableFocusRipple:m,fullWidth:p,size:g,type:b,variant:w}),P=BT(C),M=x&&f(WT,{className:P.startIcon,ownerState:C,children:x}),O=y&&f(HT,{className:P.endIcon,ownerState:C,children:y}),N=i||"";return k(VT,j({ownerState:C,className:st(r.className,P.root,u,N),component:c,disabled:d,focusRipple:!m,focusVisibleClassName:st(P.focusVisible,v),ref:n,type:b},S,{classes:P,children:[M,a,O]}))});var YT=UT;function XT(e){return ol("MuiSkeleton",e)}es("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const KT=["animation","className","component","height","style","variant","width"];let pu=e=>e,K1,G1,q1,Q1;const GT=e=>{const{classes:t,variant:n,animation:r,hasChildren:i,width:o,height:s}=e;return Td({root:["root",n,r,i&&"withChildren",i&&!o&&"fitContent",i&&!s&&"heightAuto"]},XT,t)},qT=Jo(K1||(K1=pu`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),QT=Jo(G1||(G1=pu`
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
`)),ZT=zt("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],n.animation!==!1&&t[n.animation],n.hasChildren&&t.withChildren,n.hasChildren&&!n.width&&t.fitContent,n.hasChildren&&!n.height&&t.heightAuto]}})(({theme:e,ownerState:t})=>{const n=T6(e.shape.borderRadius)||"px",r=R6(e.shape.borderRadius);return j({display:"block",backgroundColor:e.vars?e.vars.palette.Skeleton.bg:_N(e.palette.text.primary,e.palette.mode==="light"?.11:.13),height:"1.2em"},t.variant==="text"&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${r}${n}/${Math.round(r/.6*10)/10}${n}`,"&:empty:before":{content:'"\\00a0"'}},t.variant==="circular"&&{borderRadius:"50%"},t.variant==="rounded"&&{borderRadius:(e.vars||e).shape.borderRadius},t.hasChildren&&{"& > *":{visibility:"hidden"}},t.hasChildren&&!t.width&&{maxWidth:"fit-content"},t.hasChildren&&!t.height&&{height:"auto"})},({ownerState:e})=>e.animation==="pulse"&&uu(q1||(q1=pu`
      animation: ${0} 2s ease-in-out 0.5s infinite;
    `),qT),({ownerState:e,theme:t})=>e.animation==="wave"&&uu(Q1||(Q1=pu`
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
    `),QT,(t.vars||t).palette.action.hover)),JT=_.exports.forwardRef(function(t,n){const r=al({props:t,name:"MuiSkeleton"}),{animation:i="pulse",className:o,component:s="span",height:a,style:l,variant:c="text",width:u}=r,d=Lt(r,KT),h=j({},r,{animation:i,component:s,variant:c,hasChildren:Boolean(d.children)}),m=GT(h);return f(ZT,j({as:s,ref:n,className:st(m.root,o),ownerState:h},d,{style:j({width:u,height:a},l)}))});var Ue=JT;function eR(e,t,n=(r,i)=>r===i){return e.length===t.length&&e.every((r,i)=>n(r,t[i]))}const tR=2;function N_(e,t){return e-t}function Z1(e,t){var n;const{index:r}=(n=e.reduce((i,o,s)=>{const a=Math.abs(t-o);return i===null||a<i.distance||a===i.distance?{distance:a,index:s}:i},null))!=null?n:{};return r}function Al(e,t){if(t.current!==void 0&&e.changedTouches){const n=e;for(let r=0;r<n.changedTouches.length;r+=1){const i=n.changedTouches[r];if(i.identifier===t.current)return{x:i.clientX,y:i.clientY}}return!1}return{x:e.clientX,y:e.clientY}}function mu(e,t,n){return(e-t)*100/(n-t)}function nR(e,t,n){return(n-t)*e+t}function rR(e){if(Math.abs(e)<1){const n=e.toExponential().split("e-"),r=n[0].split(".")[1];return(r?r.length:0)+parseInt(n[1],10)}const t=e.toString().split(".")[1];return t?t.length:0}function iR(e,t,n){const r=Math.round((e-n)/t)*t+n;return Number(r.toFixed(rR(t)))}function J1({values:e,newValue:t,index:n}){const r=e.slice();return r[n]=t,r.sort(N_)}function zl({sliderRef:e,activeIndex:t,setActive:n}){var r,i;const o=gc(e.current);if(!((r=e.current)!=null&&r.contains(o.activeElement))||Number(o==null||(i=o.activeElement)==null?void 0:i.getAttribute("data-index"))!==t){var s;(s=e.current)==null||s.querySelector(`[type="range"][data-index="${t}"]`).focus()}n&&n(t)}function Il(e,t){return typeof e=="number"&&typeof t=="number"?e===t:typeof e=="object"&&typeof t=="object"?eR(e,t):!1}const oR={horizontal:{offset:e=>({left:`${e}%`}),leap:e=>({width:`${e}%`})},"horizontal-reverse":{offset:e=>({right:`${e}%`}),leap:e=>({width:`${e}%`})},vertical:{offset:e=>({bottom:`${e}%`}),leap:e=>({height:`${e}%`})}},sR=e=>e;let Dl;function ey(){return Dl===void 0&&(typeof CSS!="undefined"&&typeof CSS.supports=="function"?Dl=CSS.supports("touch-action","none"):Dl=!0),Dl}function aR(e){const{"aria-labelledby":t,defaultValue:n,disabled:r=!1,disableSwap:i=!1,isRtl:o=!1,marks:s=!1,max:a=100,min:l=0,name:c,onChange:u,onChangeCommitted:d,orientation:h="horizontal",rootRef:m,scale:y=sR,step:v=1,shiftStep:p=10,tabIndex:g,value:x}=e,b=_.exports.useRef(),[w,S]=_.exports.useState(-1),[C,P]=_.exports.useState(-1),[M,O]=_.exports.useState(!1),N=_.exports.useRef(0),[A,z]=kN({controlled:x,default:n!=null?n:l,name:"Slider"}),H=u&&((D,L,q)=>{const pe=D.nativeEvent||D,me=new pe.constructor(pe.type,pe);Object.defineProperty(me,"target",{writable:!0,value:{value:L,name:c}}),u(me,L,q)}),Q=Array.isArray(A);let V=Q?A.slice().sort(N_):[A];V=V.map(D=>D==null?l:yi(D,l,a));const K=s===!0&&v!==null?[...Array(Math.floor((a-l)/v)+1)].map((D,L)=>({value:l+v*L})):s||[],Y=K.map(D=>D.value),{isFocusVisibleRef:Z,onBlur:ye,onFocus:Ve,ref:F}=v_(),[R,T]=_.exports.useState(-1),$=_.exports.useRef(),U=Ma(F,$),E=Ma(m,U),ne=D=>L=>{var q;const pe=Number(L.currentTarget.getAttribute("data-index"));Ve(L),Z.current===!0&&T(pe),P(pe),D==null||(q=D.onFocus)==null||q.call(D,L)},I=D=>L=>{var q;ye(L),Z.current===!1&&T(-1),P(-1),D==null||(q=D.onBlur)==null||q.call(D,L)},ie=(D,L)=>{const q=Number(D.currentTarget.getAttribute("data-index")),pe=V[q],me=Y.indexOf(pe);let he=L;if(K&&v==null){const yn=Y[Y.length-1];he>yn?he=yn:he<Y[0]?he=Y[0]:he=he<pe?Y[me-1]:Y[me+1]}if(he=yi(he,l,a),Q){i&&(he=yi(he,V[q-1]||-1/0,V[q+1]||1/0));const yn=he;he=J1({values:V,newValue:he,index:q});let Tn=q;i||(Tn=he.indexOf(yn)),zl({sliderRef:$,activeIndex:Tn})}z(he),T(q),H&&!Il(he,A)&&H(D,he,q),d&&d(D,he)},ce=D=>L=>{var q;if(v!==null){const pe=Number(L.currentTarget.getAttribute("data-index")),me=V[pe];let he=null;(L.key==="ArrowLeft"||L.key==="ArrowDown")&&L.shiftKey||L.key==="PageDown"?he=Math.max(me-p,l):((L.key==="ArrowRight"||L.key==="ArrowUp")&&L.shiftKey||L.key==="PageUp")&&(he=Math.min(me+p,a)),he!==null&&(ie(L,he),L.preventDefault())}D==null||(q=D.onKeyDown)==null||q.call(D,L)};m_(()=>{if(r&&$.current.contains(document.activeElement)){var D;(D=document.activeElement)==null||D.blur()}},[r]),r&&w!==-1&&S(-1),r&&R!==-1&&T(-1);const fe=D=>L=>{var q;(q=D.onChange)==null||q.call(D,L),ie(L,L.target.valueAsNumber)},te=_.exports.useRef();let Ce=h;o&&h==="horizontal"&&(Ce+="-reverse");const ae=({finger:D,move:L=!1})=>{const{current:q}=$,{width:pe,height:me,bottom:he,left:yn}=q.getBoundingClientRect();let Tn;Ce.indexOf("vertical")===0?Tn=(he-D.y)/me:Tn=(D.x-yn)/pe,Ce.indexOf("-reverse")!==-1&&(Tn=1-Tn);let Pe;if(Pe=nR(Tn,l,a),v)Pe=iR(Pe,v,l);else{const Ui=Z1(Y,Pe);Pe=Y[Ui]}Pe=yi(Pe,l,a);let en=0;if(Q){L?en=te.current:en=Z1(V,Pe),i&&(Pe=yi(Pe,V[en-1]||-1/0,V[en+1]||1/0));const Ui=Pe;Pe=J1({values:V,newValue:Pe,index:en}),i&&L||(en=Pe.indexOf(Ui),te.current=en)}return{newValue:Pe,activeIndex:en}},G=ki(D=>{const L=Al(D,b);if(!L)return;if(N.current+=1,D.type==="mousemove"&&D.buttons===0){Se(D);return}const{newValue:q,activeIndex:pe}=ae({finger:L,move:!0});zl({sliderRef:$,activeIndex:pe,setActive:S}),z(q),!M&&N.current>tR&&O(!0),H&&!Il(q,A)&&H(D,q,pe)}),Se=ki(D=>{const L=Al(D,b);if(O(!1),!L)return;const{newValue:q}=ae({finger:L,move:!0});S(-1),D.type==="touchend"&&P(-1),d&&d(D,q),b.current=void 0,xe()}),se=ki(D=>{if(r)return;ey()||D.preventDefault();const L=D.changedTouches[0];L!=null&&(b.current=L.identifier);const q=Al(D,b);if(q!==!1){const{newValue:me,activeIndex:he}=ae({finger:q});zl({sliderRef:$,activeIndex:he,setActive:S}),z(me),H&&!Il(me,A)&&H(D,me,he)}N.current=0;const pe=gc($.current);pe.addEventListener("touchmove",G,{passive:!0}),pe.addEventListener("touchend",Se,{passive:!0})}),xe=_.exports.useCallback(()=>{const D=gc($.current);D.removeEventListener("mousemove",G),D.removeEventListener("mouseup",Se),D.removeEventListener("touchmove",G),D.removeEventListener("touchend",Se)},[Se,G]);_.exports.useEffect(()=>{const{current:D}=$;return D.addEventListener("touchstart",se,{passive:ey()}),()=>{D.removeEventListener("touchstart",se),xe()}},[xe,se]),_.exports.useEffect(()=>{r&&xe()},[r,xe]);const gn=D=>L=>{var q;if((q=D.onMouseDown)==null||q.call(D,L),r||L.defaultPrevented||L.button!==0)return;L.preventDefault();const pe=Al(L,b);if(pe!==!1){const{newValue:he,activeIndex:yn}=ae({finger:pe});zl({sliderRef:$,activeIndex:yn,setActive:S}),z(he),H&&!Il(he,A)&&H(L,he,yn)}N.current=0;const me=gc($.current);me.addEventListener("mousemove",G,{passive:!0}),me.addEventListener("mouseup",Se)},le=mu(Q?V[0]:l,l,a),Tt=mu(V[V.length-1],l,a)-le,vn=(D={})=>{const L=vc(D),q={onMouseDown:gn(L||{})},pe=j({},L,q);return j({},D,{ref:E},pe)},ht=D=>L=>{var q;(q=D.onMouseOver)==null||q.call(D,L);const pe=Number(L.currentTarget.getAttribute("data-index"));P(pe)},J=D=>L=>{var q;(q=D.onMouseLeave)==null||q.call(D,L),P(-1)};return{active:w,axis:Ce,axisProps:oR,dragging:M,focusedThumbIndex:R,getHiddenInputProps:(D={})=>{var L;const q=vc(D),pe={onChange:fe(q||{}),onFocus:ne(q||{}),onBlur:I(q||{}),onKeyDown:ce(q||{})},me=j({},q,pe);return j({tabIndex:g,"aria-labelledby":t,"aria-orientation":h,"aria-valuemax":y(a),"aria-valuemin":y(l),name:c,type:"range",min:e.min,max:e.max,step:e.step===null&&e.marks?"any":(L=e.step)!=null?L:void 0,disabled:r},D,me,{style:j({},IN,{direction:o?"rtl":"ltr",width:"100%",height:"100%"})})},getRootProps:vn,getThumbProps:(D={})=>{const L=vc(D),q={onMouseOver:ht(L||{}),onMouseLeave:J(L||{})};return j({},D,L,q)},marks:K,open:C,range:Q,rootRef:E,trackLeap:Tt,trackOffset:le,values:V,getThumbStyle:D=>({pointerEvents:w!==-1&&w!==D?"none":void 0})}}const lR=e=>!e||!Gs(e);var cR=lR;function uR(e){return ol("MuiSlider",e)}const dR=es("MuiSlider",["root","active","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","disabled","dragging","focusVisible","mark","markActive","marked","markLabel","markLabelActive","rail","sizeSmall","thumb","thumbColorPrimary","thumbColorSecondary","thumbColorError","thumbColorSuccess","thumbColorInfo","thumbColorWarning","track","trackInverted","trackFalse","thumbSizeSmall","valueLabel","valueLabelOpen","valueLabelCircle","valueLabelLabel","vertical"]);var ln=dR;const fR=e=>{const{open:t}=e;return{offset:st(t&&ln.valueLabelOpen),circle:ln.valueLabelCircle,label:ln.valueLabelLabel}};function hR(e){const{children:t,className:n,value:r}=e,i=fR(e);return t?_.exports.cloneElement(t,{className:st(t.props.className)},k(_.exports.Fragment,{children:[t.props.children,f("span",{className:st(i.offset,n),"aria-hidden":!0,children:f("span",{className:i.circle,children:f("span",{className:i.label,children:r})})})]})):null}const pR=["aria-label","aria-valuetext","aria-labelledby","component","components","componentsProps","color","classes","className","disableSwap","disabled","getAriaLabel","getAriaValueText","marks","max","min","name","onChange","onChangeCommitted","orientation","shiftStep","size","step","scale","slotProps","slots","tabIndex","track","value","valueLabelDisplay","valueLabelFormat"];function ty(e){return e}const mR=zt("span",{name:"MuiSlider",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[`color${Xe(n.color)}`],n.size!=="medium"&&t[`size${Xe(n.size)}`],n.marked&&t.marked,n.orientation==="vertical"&&t.vertical,n.track==="inverted"&&t.trackInverted,n.track===!1&&t.trackFalse]}})(({theme:e})=>{var t;return{borderRadius:12,boxSizing:"content-box",display:"inline-block",position:"relative",cursor:"pointer",touchAction:"none",WebkitTapHighlightColor:"transparent","@media print":{colorAdjust:"exact"},[`&.${ln.disabled}`]:{pointerEvents:"none",cursor:"default",color:(e.vars||e).palette.grey[400]},[`&.${ln.dragging}`]:{[`& .${ln.thumb}, & .${ln.track}`]:{transition:"none"}},variants:[...Object.keys(((t=e.vars)!=null?t:e).palette).filter(n=>{var r;return((r=e.vars)!=null?r:e).palette[n].main}).map(n=>({props:{color:n},style:{color:(e.vars||e).palette[n].main}})),{props:{orientation:"horizontal"},style:{height:4,width:"100%",padding:"13px 0","@media (pointer: coarse)":{padding:"20px 0"}}},{props:{orientation:"horizontal",size:"small"},style:{height:2}},{props:{orientation:"horizontal",marked:!0},style:{marginBottom:20}},{props:{orientation:"vertical"},style:{height:"100%",width:4,padding:"0 13px","@media (pointer: coarse)":{padding:"0 20px"}}},{props:{orientation:"vertical",size:"small"},style:{width:2}},{props:{orientation:"vertical",marked:!0},style:{marginRight:44}}]}}),gR=zt("span",{name:"MuiSlider",slot:"Rail",overridesResolver:(e,t)=>t.rail})({display:"block",position:"absolute",borderRadius:"inherit",backgroundColor:"currentColor",opacity:.38,variants:[{props:{orientation:"horizontal"},style:{width:"100%",height:"inherit",top:"50%",transform:"translateY(-50%)"}},{props:{orientation:"vertical"},style:{height:"100%",width:"inherit",left:"50%",transform:"translateX(-50%)"}},{props:{track:"inverted"},style:{opacity:1}}]}),vR=zt("span",{name:"MuiSlider",slot:"Track",overridesResolver:(e,t)=>t.track})(({theme:e})=>{var t;return{display:"block",position:"absolute",borderRadius:"inherit",border:"1px solid currentColor",backgroundColor:"currentColor",transition:e.transitions.create(["left","width","bottom","height"],{duration:e.transitions.duration.shortest}),variants:[{props:{size:"small"},style:{border:"none"}},{props:{orientation:"horizontal"},style:{height:"inherit",top:"50%",transform:"translateY(-50%)"}},{props:{orientation:"vertical"},style:{width:"inherit",left:"50%",transform:"translateX(-50%)"}},{props:{track:!1},style:{display:"none"}},...Object.keys(((t=e.vars)!=null?t:e).palette).filter(n=>{var r;return((r=e.vars)!=null?r:e).palette[n].main}).map(n=>({props:{color:n,track:"inverted"},style:j({},e.vars?{backgroundColor:e.vars.palette.Slider[`${n}Track`],borderColor:e.vars.palette.Slider[`${n}Track`]}:j({backgroundColor:vp(e.palette[n].main,.62),borderColor:vp(e.palette[n].main,.62)},e.applyStyles("dark",{backgroundColor:gp(e.palette[n].main,.5)}),e.applyStyles("dark",{borderColor:gp(e.palette[n].main,.5)})))}))]}}),yR=zt("span",{name:"MuiSlider",slot:"Thumb",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.thumb,t[`thumbColor${Xe(n.color)}`],n.size!=="medium"&&t[`thumbSize${Xe(n.size)}`]]}})(({theme:e})=>{var t;return{position:"absolute",width:20,height:20,boxSizing:"border-box",borderRadius:"50%",outline:0,backgroundColor:"currentColor",display:"flex",alignItems:"center",justifyContent:"center",transition:e.transitions.create(["box-shadow","left","bottom"],{duration:e.transitions.duration.shortest}),"&::before":{position:"absolute",content:'""',borderRadius:"inherit",width:"100%",height:"100%",boxShadow:(e.vars||e).shadows[2]},"&::after":{position:"absolute",content:'""',borderRadius:"50%",width:42,height:42,top:"50%",left:"50%",transform:"translate(-50%, -50%)"},[`&.${ln.disabled}`]:{"&:hover":{boxShadow:"none"}},variants:[{props:{size:"small"},style:{width:12,height:12,"&::before":{boxShadow:"none"}}},{props:{orientation:"horizontal"},style:{top:"50%",transform:"translate(-50%, -50%)"}},{props:{orientation:"vertical"},style:{left:"50%",transform:"translate(-50%, 50%)"}},...Object.keys(((t=e.vars)!=null?t:e).palette).filter(n=>{var r;return((r=e.vars)!=null?r:e).palette[n].main}).map(n=>({props:{color:n},style:{[`&:hover, &.${ln.focusVisible}`]:j({},e.vars?{boxShadow:`0px 0px 0px 8px rgba(${e.vars.palette[n].mainChannel} / 0.16)`}:{boxShadow:`0px 0px 0px 8px ${fo(e.palette[n].main,.16)}`},{"@media (hover: none)":{boxShadow:"none"}}),[`&.${ln.active}`]:j({},e.vars?{boxShadow:`0px 0px 0px 14px rgba(${e.vars.palette[n].mainChannel} / 0.16)`}:{boxShadow:`0px 0px 0px 14px ${fo(e.palette[n].main,.16)}`})}}))]}}),xR=zt(hR,{name:"MuiSlider",slot:"ValueLabel",overridesResolver:(e,t)=>t.valueLabel})(({theme:e})=>j({zIndex:1,whiteSpace:"nowrap"},e.typography.body2,{fontWeight:500,transition:e.transitions.create(["transform"],{duration:e.transitions.duration.shortest}),position:"absolute",backgroundColor:(e.vars||e).palette.grey[600],borderRadius:2,color:(e.vars||e).palette.common.white,display:"flex",alignItems:"center",justifyContent:"center",padding:"0.25rem 0.75rem",variants:[{props:{orientation:"horizontal"},style:{transform:"translateY(-100%) scale(0)",top:"-10px",transformOrigin:"bottom center","&::before":{position:"absolute",content:'""',width:8,height:8,transform:"translate(-50%, 50%) rotate(45deg)",backgroundColor:"inherit",bottom:0,left:"50%"},[`&.${ln.valueLabelOpen}`]:{transform:"translateY(-100%) scale(1)"}}},{props:{orientation:"vertical"},style:{transform:"translateY(-50%) scale(0)",right:"30px",top:"50%",transformOrigin:"right center","&::before":{position:"absolute",content:'""',width:8,height:8,transform:"translate(-50%, -50%) rotate(45deg)",backgroundColor:"inherit",right:-8,top:"50%"},[`&.${ln.valueLabelOpen}`]:{transform:"translateY(-50%) scale(1)"}}},{props:{size:"small"},style:{fontSize:e.typography.pxToRem(12),padding:"0.25rem 0.5rem"}},{props:{orientation:"vertical",size:"small"},style:{right:"20px"}}]})),bR=zt("span",{name:"MuiSlider",slot:"Mark",shouldForwardProp:e=>Tg(e)&&e!=="markActive",overridesResolver:(e,t)=>{const{markActive:n}=e;return[t.mark,n&&t.markActive]}})(({theme:e})=>({position:"absolute",width:2,height:2,borderRadius:1,backgroundColor:"currentColor",variants:[{props:{orientation:"horizontal"},style:{top:"50%",transform:"translate(-1px, -50%)"}},{props:{orientation:"vertical"},style:{left:"50%",transform:"translate(-50%, 1px)"}},{props:{markActive:!0},style:{backgroundColor:(e.vars||e).palette.background.paper,opacity:.8}}]})),wR=zt("span",{name:"MuiSlider",slot:"MarkLabel",shouldForwardProp:e=>Tg(e)&&e!=="markLabelActive",overridesResolver:(e,t)=>t.markLabel})(({theme:e})=>j({},e.typography.body2,{color:(e.vars||e).palette.text.secondary,position:"absolute",whiteSpace:"nowrap",variants:[{props:{orientation:"horizontal"},style:{top:30,transform:"translateX(-50%)","@media (pointer: coarse)":{top:40}}},{props:{orientation:"vertical"},style:{left:36,transform:"translateY(50%)","@media (pointer: coarse)":{left:44}}},{props:{markLabelActive:!0},style:{color:(e.vars||e).palette.text.primary}}]})),_R=e=>{const{disabled:t,dragging:n,marked:r,orientation:i,track:o,classes:s,color:a,size:l}=e,c={root:["root",t&&"disabled",n&&"dragging",r&&"marked",i==="vertical"&&"vertical",o==="inverted"&&"trackInverted",o===!1&&"trackFalse",a&&`color${Xe(a)}`,l&&`size${Xe(l)}`],rail:["rail"],track:["track"],mark:["mark"],markActive:["markActive"],markLabel:["markLabel"],markLabelActive:["markLabelActive"],valueLabel:["valueLabel"],thumb:["thumb",t&&"disabled",l&&`thumbSize${Xe(l)}`,a&&`thumbColor${Xe(a)}`],active:["active"],disabled:["disabled"],focusVisible:["focusVisible"]};return Td(c,uR,s)},SR=({children:e})=>e,kR=_.exports.forwardRef(function(t,n){var r,i,o,s,a,l,c,u,d,h,m,y,v,p,g,x,b,w,S,C,P,M,O,N;const A=al({props:t,name:"MuiSlider"}),z=WN(),{"aria-label":H,"aria-valuetext":Q,"aria-labelledby":V,component:K="span",components:Y={},componentsProps:Z={},color:ye="primary",classes:Ve,className:F,disableSwap:R=!1,disabled:T=!1,getAriaLabel:$,getAriaValueText:U,marks:E=!1,max:ne=100,min:I=0,orientation:ie="horizontal",shiftStep:ce=10,size:fe="medium",step:te=1,scale:Ce=ty,slotProps:ae,slots:G,track:Se="normal",valueLabelDisplay:se="off",valueLabelFormat:xe=ty}=A,gn=Lt(A,pR),le=j({},A,{isRtl:z,max:ne,min:I,classes:Ve,disabled:T,disableSwap:R,orientation:ie,marks:E,color:ye,size:fe,step:te,shiftStep:ce,scale:Ce,track:Se,valueLabelDisplay:se,valueLabelFormat:xe}),{axisProps:Tt,getRootProps:vn,getHiddenInputProps:ht,getThumbProps:J,open:ke,active:qn,axis:Jt,focusedThumbIndex:D,range:L,dragging:q,marks:pe,values:me,trackOffset:he,trackLeap:yn,getThumbStyle:Tn}=aR(j({},le,{rootRef:n}));le.marked=pe.length>0&&pe.some(rt=>rt.label),le.dragging=q,le.focusedThumbIndex=D;const Pe=_R(le),en=(r=(i=G==null?void 0:G.root)!=null?i:Y.Root)!=null?r:mR,Ui=(o=(s=G==null?void 0:G.rail)!=null?s:Y.Rail)!=null?o:gR,o0=(a=(l=G==null?void 0:G.track)!=null?l:Y.Track)!=null?a:vR,s0=(c=(u=G==null?void 0:G.thumb)!=null?u:Y.Thumb)!=null?c:yR,a0=(d=(h=G==null?void 0:G.valueLabel)!=null?h:Y.ValueLabel)!=null?d:xR,Vd=(m=(y=G==null?void 0:G.mark)!=null?y:Y.Mark)!=null?m:bR,Wd=(v=(p=G==null?void 0:G.markLabel)!=null?p:Y.MarkLabel)!=null?v:wR,l0=(g=(x=G==null?void 0:G.input)!=null?x:Y.Input)!=null?g:"input",Hd=(b=ae==null?void 0:ae.root)!=null?b:Z.root,KS=(w=ae==null?void 0:ae.rail)!=null?w:Z.rail,Ud=(S=ae==null?void 0:ae.track)!=null?S:Z.track,Yd=(C=ae==null?void 0:ae.thumb)!=null?C:Z.thumb,Xd=(P=ae==null?void 0:ae.valueLabel)!=null?P:Z.valueLabel,GS=(M=ae==null?void 0:ae.mark)!=null?M:Z.mark,qS=(O=ae==null?void 0:ae.markLabel)!=null?O:Z.markLabel,QS=(N=ae==null?void 0:ae.input)!=null?N:Z.input,ZS=vr({elementType:en,getSlotProps:vn,externalSlotProps:Hd,externalForwardedProps:gn,additionalProps:j({},cR(en)&&{as:K}),ownerState:j({},le,Hd==null?void 0:Hd.ownerState),className:[Pe.root,F]}),JS=vr({elementType:Ui,externalSlotProps:KS,ownerState:le,className:Pe.rail}),ek=vr({elementType:o0,externalSlotProps:Ud,additionalProps:{style:j({},Tt[Jt].offset(he),Tt[Jt].leap(yn))},ownerState:j({},le,Ud==null?void 0:Ud.ownerState),className:Pe.track}),Kd=vr({elementType:s0,getSlotProps:J,externalSlotProps:Yd,ownerState:j({},le,Yd==null?void 0:Yd.ownerState),className:Pe.thumb}),tk=vr({elementType:a0,externalSlotProps:Xd,ownerState:j({},le,Xd==null?void 0:Xd.ownerState),className:Pe.valueLabel}),Gd=vr({elementType:Vd,externalSlotProps:GS,ownerState:le,className:Pe.mark}),qd=vr({elementType:Wd,externalSlotProps:qS,ownerState:le,className:Pe.markLabel}),nk=vr({elementType:l0,getSlotProps:ht,externalSlotProps:QS,ownerState:le});return k(en,j({},ZS,{children:[f(Ui,j({},JS)),f(o0,j({},ek)),pe.filter(rt=>rt.value>=I&&rt.value<=ne).map((rt,pt)=>{const Qd=mu(rt.value,I,ne),hl=Tt[Jt].offset(Qd);let Qn;return Se===!1?Qn=me.indexOf(rt.value)!==-1:Qn=Se==="normal"&&(L?rt.value>=me[0]&&rt.value<=me[me.length-1]:rt.value<=me[0])||Se==="inverted"&&(L?rt.value<=me[0]||rt.value>=me[me.length-1]:rt.value>=me[0]),k(_.exports.Fragment,{children:[f(Vd,j({"data-index":pt},Gd,!Gs(Vd)&&{markActive:Qn},{style:j({},hl,Gd.style),className:st(Gd.className,Qn&&Pe.markActive)})),rt.label!=null?f(Wd,j({"aria-hidden":!0,"data-index":pt},qd,!Gs(Wd)&&{markLabelActive:Qn},{style:j({},hl,qd.style),className:st(Pe.markLabel,qd.className,Qn&&Pe.markLabelActive),children:rt.label})):null]},pt)}),me.map((rt,pt)=>{const Qd=mu(rt,I,ne),hl=Tt[Jt].offset(Qd),Qn=se==="off"?SR:a0;return f(Qn,j({},!Gs(Qn)&&{valueLabelFormat:xe,valueLabelDisplay:se,value:typeof xe=="function"?xe(Ce(rt),pt):xe,index:pt,open:ke===pt||qn===pt||se==="on",disabled:T},tk,{children:f(s0,j({"data-index":pt},Kd,{className:st(Pe.thumb,Kd.className,qn===pt&&Pe.active,D===pt&&Pe.focusVisible),style:j({},hl,Tn(pt),Kd.style),children:f(l0,j({"data-index":pt,"aria-label":$?$(pt):H,"aria-valuenow":Ce(rt),"aria-labelledby":V,"aria-valuetext":U?U(Ce(rt),pt):Q,value:me[pt]},nk))}))}),pt)})]}))});var Bf=kR;const CR=()=>f(ot,{children:k(Cn,{sx:{display:"flex",flexDirection:"column",gap:2,width:"100%",justifyContent:"center"},children:[f(Ue,{variant:"text",sx:{fontSize:"1rem"}}),f(Ue,{variant:"circular",width:60,height:60}),f(Ue,{variant:"h1",sx:{fontSize:"1rem"}}),f(Ue,{variant:"h1",sx:{fontSize:"1rem"}}),f(Ue,{variant:"rectangular",width:"100%",height:300}),f(Ue,{variant:"h1",sx:{fontSize:"1rem",width:"300px"}}),k(Cn,{sx:{display:"flex",flexDirection:"row",gap:3,width:"100%",justifyContent:"center",marginTop:4},children:[f(Ue,{variant:"rounded",width:210,height:60}),f(Ue,{variant:"rounded",width:210,height:60})]}),f(Ue,{variant:"h1",sx:{fontSize:"3rem"}}),f(Ue,{variant:"h1",sx:{fontSize:"3rem"}})]})}),PR=()=>f(ot,{children:[0,1,2,3,4,5].map(e=>k(Cn,{sx:{display:"flex",flexDirection:"column",gap:1,width:"100%"},children:[f(Ue,{variant:"rounded",width:230,height:85}),k(Cn,{sx:{pt:.5},children:[f(Ue,{}),f(Ue,{width:"60%"})]})]},e))}),MR=()=>f(ot,{children:[0,1,2,3,4,5].map(e=>k(Cn,{sx:{my:2},children:[f(Ue,{variant:"rounded",width:50,height:50}),k(Cn,{sx:{pt:.5},children:[f(Ue,{}),f(Ue,{width:"60%"})]})]},e))}),ER=()=>f(ot,{children:[0,1,2,3,4,5].map(e=>k(Cn,{sx:{display:"flex",alignItems:"justify-center",marginBottom:"30px"},children:[f(Cn,{sx:{width:60,height:60,marginRight:2},children:f(Ue,{variant:"rounded",width:60,height:60})}),k(Cn,{sx:{pt:.5},width:"100%",children:[f(Ue,{}),f(Ue,{width:"60%"})]})]},e))}),OR=()=>f(ot,{children:[0,1,2,3,4,5].map(e=>k(Cn,{sx:{display:"flex",flexDirection:"column",gap:1,width:"100%"},children:[f(Ue,{variant:"rounded",width:230,height:60}),k(Cn,{sx:{pt:.5},children:[f(Ue,{}),f(Ue,{width:"60%"})]})]},e))});ee.div`
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
`;const NR=({schemes:e,loading:t})=>f(ot,{children:t?PR():e.map((n,r)=>f(Fw,{scheme:n},r))}),TR=ee.div`
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
`,RR=({loading:e})=>f(TR,{children:f("div",{className:"quick-access-container",children:e?OR():[{name:"SIP Calculator",url:"return-calculator",logo:"sip-calc.webp",desc:"Easily calculate SIP returns and plan your investments."},{name:"Loan Calculator",url:"loan",logo:"sip-calc.webp",desc:"Estimate loan payments and interest rates accurately."},{name:"Loan Calculator",url:"loan",logo:"sip-calc.webp",desc:"Estimate loan payments and interest rates accurately."},{name:"Loan Calculator",url:"loan",logo:"sip-calc.webp",desc:"Estimate loan payments and interest rates accurately."}].map((n,r)=>f("div",{className:"item",children:k(je,{className:"link",to:n.url,children:[k("div",{className:"name",children:[f("img",{src:`./images/${n.logo}`,alt:""}),f("p",{children:n.name})]}),f("div",{className:"description",children:cp(n.desc)})]})},r))})}),$R=({collections:e,loading:t})=>f(ot,{children:t?MR():e.map((n,r)=>k(je,{to:`/schemes/${n.url}`,children:[f("div",{className:"",children:f("img",{src:`./public/images/collection/${n.image}`,alt:""})}),f("div",{className:"name",children:n.name})]},r))}),LR=ee.div`
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
`,AR=({activeFilter:e,onFilterChange:t})=>{const[n,r]=_.exports.useState(1),i=o=>{t(o),r(o==3?1:o+1)};return f(LR,{children:k("div",{className:"year-filters",children:[n===1&&f("button",{className:"filter-button",onClick:()=>i(1),children:"< > 1Y Returns"}),n===2&&f("button",{className:"filter-button",onClick:()=>i(2),children:"< > 3Y Returns"}),n===3&&f("button",{className:"filter-button",onClick:()=>i(0),children:"< > 5Y Returns"})]})})},zR=ee.div`
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
`,$d=({schemes:e,loading:t,customHeader:n})=>{const[r,i]=_.exports.useState(0),[o,s]=_.exports.useState(!1);return t===!1&&e.length===0&&s(!0),k(zR,{children:[f("div",{className:"schemes-header",children:n?f("h2",{children:n}):k(ot,{children:[f("h2",{children:"Mutual Funds"}),f(AR,{activeFilter:r,onFilterChange:i})]})}),t?ER():e.map((a,l)=>f(Fw,{scheme:a},l))]})},IR=ee.div`
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
`,DR=()=>{const{collections:e}=At(c=>c.amcCollection),[t,n]=_.exports.useState(!1),[r,i]=_.exports.useState([]),[o,s]=_.exports.useState(void 0),[a,l]=_.exports.useState(!0);return _.exports.useEffect(()=>{(async()=>{try{const u=await Za("schemes");i(u)}catch(u){s(u)}finally{l(!1)}})()},[]),f(IR,{children:k("div",{className:"container",children:[k("div",{className:"popular-fund-section division",children:[k("div",{className:"popular-funds",children:[f("h2",{children:"Popular Funds"}),f(je,{className:"link",to:"/all-mutual-funds",title:"All Mutual Funds",children:"All Mutual Funds"})]}),f("div",{className:"popular-items",children:f(NR,{schemes:r,loading:a})})]}),k("div",{className:"collection-section division",children:[f("h2",{children:"Collections"}),f("div",{className:"collection-items",children:f($R,{collections:e,loading:t})})]}),k("div",{className:"quick-access-section division",children:[f("h2",{children:"Quick Access"}),f(RR,{schemes:r,loading:a})]}),f("div",{className:"all-mf-section division",children:f($d,{schemes:r,loading:a})})]})})},yr=(e,t)=>{var i;let n=Math.abs(e);n=(i=n==null?void 0:n.toFixed(0))==null?void 0:i.replace(/\B(?=(\d{3})+(?!\d))/g,",");let r=n.split(",");if(r.length>1){let o=r[r.length-1];n=r.slice(0,r.length-1).join("").replace(/\B(?=(\d{2})+(?!\d))/g,",")+","+o}return t==="simple"?{paisa:`\u20B9${n}`}:{paisa:e>0?`+ \u20B9${n}`:`- \u20B9${n}`,color:e>0?"#0add8c":"#f00"}},FR=ee.div`
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
`,jR=()=>{At(n=>n.schemes);const e=6e3,t=-5e3;return f(FR,{children:k("div",{className:"container",children:[f("div",{className:"division section-heading",children:f("h2",{children:"Investments"})}),k("div",{className:"investment-container",children:[k("div",{className:"total-amt",children:[k("div",{className:"amt-section current",children:[k("div",{className:"amt-box",children:[f("div",{className:"title",children:"Current"}),k("div",{className:"amt",style:{color:yr(e,"simple").color},children:[yr(e,"simple").paisa," "]})]}),k("div",{className:"return",children:[f("div",{className:"title",children:"Total Returns"}),k("div",{className:"amt",style:{color:yr(e).color},children:[yr(e).paisa," "]})]})]}),k("div",{className:"amt-section invested",children:[k("div",{className:"amt-box",children:[f("div",{className:"title",children:"Invested"}),k("div",{className:"amt",style:{color:yr(t,"simple").color},children:[yr(t,"simple").paisa," "]})]}),k("div",{className:"return",children:[f("div",{className:"title",children:"1D Returns"}),k("div",{className:"amt",style:{color:yr(t).color},children:[yr(t).paisa," "]})]})]})]}),k("div",{className:"xirr-return",children:[k("div",{className:"",children:[f("span",{children:"XIRR"}),"17.23%"]}),f(je,{to:"",title:"aa",children:"Portfolio analysis"})]})]})]})})},BR=ee.div`
`,VR=()=>f(BR,{children:f(hg,{tabs:[{name:"explore",title:"Explore",component:f(DR,{})},{name:"dashboard",title:"Dashboard",component:f(jR,{})}]})}),WR=ee.div`
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
`;var T_={};function HR(e){return e&&e.__esModule?e:{default:e}}var Ld=HR,Lg={};function wp(){return Ad=wp=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},wp.apply(this,arguments)}var Ad=wp;function UR(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}var YR=UR,XR=YR;function KR(e,t){if(e==null)return{};var n=XR(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(n[r]=e[r]))}return n}var Ag=KR;function GR(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var zg=GR;function ny(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function qR(e,t,n){return t&&ny(e.prototype,t),n&&ny(e,n),e}var Ig=qR;function Oo(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Oo=function(n){return typeof n}:Oo=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Oo(e)}function bc(e){return typeof Symbol=="function"&&Oo(Symbol.iterator)==="symbol"?_p=bc=function(n){return Oo(n)}:_p=bc=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":Oo(n)},bc(e)}var _p=bc;function QR(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var ZR=QR,JR=_p,e$=ZR;function t$(e,t){return t&&(JR(t)==="object"||typeof t=="function")?t:e$(e)}var Dg=t$;function Sp(e){return zd=Sp=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},Sp(e)}var zd=Sp;function kp(e,t){return R_=kp=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},kp(e,t)}var R_=kp,n$=R_;function r$(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n$(e,t)}var Fg=r$;function i$(e,t){if(e===t)return!0;if(!e||!t)return!1;var n=Object.keys(e),r=Object.keys(t),i=n.length;if(r.length!==i)return!1;for(var o=0;o<i;o++){var s=n[o];if(e[s]!==t[s]||!Object.prototype.hasOwnProperty.call(t,s))return!1}return!0}function o$(e,t){if(e===t)return!0;if(!e||!t)return!1;var n=e.length;if(t.length!==n)return!1;for(var r=0;r<n;r++)if(e[r]!==t[r])return!1;return!0}var s$=Object.freeze(Object.defineProperty({__proto__:null,shallowEqualArrays:o$,shallowEqualObjects:i$},Symbol.toStringTag,{value:"Module"})),a$=pr(s$),ll={},$_={exports:{}};(function(e){function t(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports})($_);var L_={exports:{}},A_={exports:{}},cl={exports:{}};(function(e){function t(n){return e.exports=t=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},e.exports.__esModule=!0,e.exports.default=e.exports,t(n)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports})(cl);var z_={exports:{}};(function(e){var t=cl.exports.default;function n(r,i){if(t(r)!="object"||!r)return r;var o=r[Symbol.toPrimitive];if(o!==void 0){var s=o.call(r,i||"default");if(t(s)!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(i==="string"?String:Number)(r)}e.exports=n,e.exports.__esModule=!0,e.exports.default=e.exports})(z_);(function(e){var t=cl.exports.default,n=z_.exports;function r(i){var o=n(i,"string");return t(o)=="symbol"?o:o+""}e.exports=r,e.exports.__esModule=!0,e.exports.default=e.exports})(A_);(function(e){var t=A_.exports;function n(i,o){for(var s=0;s<o.length;s++){var a=o[s];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(i,t(a.key),a)}}function r(i,o,s){return o&&n(i.prototype,o),s&&n(i,s),Object.defineProperty(i,"prototype",{writable:!1}),i}e.exports=r,e.exports.__esModule=!0,e.exports.default=e.exports})(L_);var I_={exports:{}},D_={exports:{}};(function(e){function t(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports})(D_);(function(e){var t=cl.exports.default,n=D_.exports;function r(i,o){if(o&&(t(o)=="object"||typeof o=="function"))return o;if(o!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return n(i)}e.exports=r,e.exports.__esModule=!0,e.exports.default=e.exports})(I_);var F_={exports:{}};(function(e){function t(n){return e.exports=t=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},e.exports.__esModule=!0,e.exports.default=e.exports,t(n)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports})(F_);var j_={exports:{}},B_={exports:{}};(function(e){function t(n,r){return e.exports=t=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,o){return i.__proto__=o,i},e.exports.__esModule=!0,e.exports.default=e.exports,t(n,r)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports})(B_);(function(e){var t=B_.exports;function n(r,i){if(typeof i!="function"&&i!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(i&&i.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),Object.defineProperty(r,"prototype",{writable:!1}),i&&t(r,i)}e.exports=n,e.exports.__esModule=!0,e.exports.default=e.exports})(j_);var V_={exports:{}};(function(e){var t=Ng.exports;function n(r,i){if(r==null)return{};var o,s,a=t(r,i);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(r);for(s=0;s<l.length;s++)o=l[s],i.includes(o)||{}.propertyIsEnumerable.call(r,o)&&(a[o]=r[o])}return a}e.exports=n,e.exports.__esModule=!0,e.exports.default=e.exports})(V_);Object.defineProperty(ll,"__esModule",{value:!0});function On(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var l$=On($_.exports),c$=On(L_.exports),u$=On(I_.exports),d$=On(F_.exports),f$=On(j_.exports),h$=On(cl.exports),p$=On(V_.exports),m$=On(yg.exports),g$=On(_.exports);On(qo.exports);On(dg);function v$(e,t,n){return Object.defineProperty(e,t,n)}var y$=function(){var e=null;return function(){if(e!==null)return e;var t=!1;try{window.addEventListener("test",null,v$({},"passive",{get:function(){t=!0}}))}catch{}return e=t,t}()}(),x$={capture:!1,passive:!1};function W_(e){return m$({},x$,e)}function H_(e,t,n){var r=[e,t];return r.push(y$?n:n.capture),r}function ry(e,t,n,r){e.addEventListener.apply(e,H_(t,n,r))}function iy(e,t,n,r){e.removeEventListener.apply(e,H_(t,n,r))}function b$(e,t){e.children,e.target;var n=p$(e,["children","target"]);Object.keys(n).forEach(function(r){if(r.substring(0,2)==="on"){var i=n[r],o=h$(i),s=o==="object",a=o==="function";if(!(!s&&!a)){var l=r.substr(-7).toLowerCase()==="capture",c=r.substring(2).toLowerCase();c=l?c.substring(0,c.length-7):c,s?t(c,i.handler,i.options):t(c,i,W_({capture:l}))}}})}function w$(e,t){return{handler:e,options:W_(t)}}var U_=function(e){f$(t,e);function t(){return l$(this,t),u$(this,d$(t).apply(this,arguments))}return c$(t,[{key:"componentDidMount",value:function(){this.applyListeners(ry)}},{key:"componentDidUpdate",value:function(r){this.applyListeners(iy,r),this.applyListeners(ry)}},{key:"componentWillUnmount",value:function(){this.applyListeners(iy)}},{key:"applyListeners",value:function(r){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.props,o=i.target;if(o){var s=o;typeof o=="string"&&(s=window[o]),b$(i,r.bind(null,s))}}},{key:"render",value:function(){return this.props.children||null}}]),t}(g$.PureComponent);U_.propTypes={};ll.withOptions=w$;ll.default=U_;var Gn=Ld;Object.defineProperty(Lg,"__esModule",{value:!0});Lg.default=T$;var oy=Gn(Ad),_$=Gn(Ag),S$=Gn(zg),k$=Gn(Ig),C$=Gn(Dg),P$=Gn(zd),M$=Gn(Fg),vs=Gn(_.exports);Gn(qo.exports);var E$=a$,O$=Gn(ll),N$=Ja;function T$(e){var t=function(n){(0,M$.default)(r,n);function r(i){var o;return(0,S$.default)(this,r),o=(0,C$.default)(this,(0,P$.default)(r).call(this,i)),o.timer=null,o.state={},o.handleInterval=function(){var s=o.props,a=s.children,l=s.direction,c=s.onChangeIndex,u=s.slideCount,d=o.state.index,h=d;l==="incremental"?h+=1:h-=1,(u||a)&&(h=(0,N$.mod)(h,u||vs.default.Children.count(a))),o.props.index===void 0&&o.setState({index:h}),c&&c(h,d)},o.handleChangeIndex=function(s,a,l){o.props.index===void 0&&o.setState({index:s}),o.props.onChangeIndex&&o.props.onChangeIndex(s,a,l)},o.handleSwitching=function(s,a){o.timer?(clearInterval(o.timer),o.timer=null):a==="end"&&o.startInterval(),o.props.onSwitching&&o.props.onSwitching(s,a)},o.handleVisibilityChange=function(s){s.target.hidden?clearInterval(o.timer):o.startInterval()},o.state.index=i.index||0,o}return(0,k$.default)(r,[{key:"componentDidMount",value:function(){this.startInterval()}},{key:"UNSAFE_componentWillReceiveProps",value:function(o){var s=o.index;typeof s=="number"&&s!==this.props.index&&this.setState({index:s})}},{key:"componentDidUpdate",value:function(o){var s=!(0,E$.shallowEqualObjects)({index:o.index,interval:o.interval,autoplay:o.autoplay},{index:this.props.index,interval:this.props.interval,autoplay:this.props.autoplay});s&&this.startInterval()}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}},{key:"startInterval",value:function(){var o=this.props,s=o.autoplay,a=o.interval;clearInterval(this.timer),s&&(this.timer=setInterval(this.handleInterval,a))}},{key:"render",value:function(){var o=this.props,s=o.autoplay;o.direction,o.index,o.interval;var a=o.onChangeIndex,l=(0,_$.default)(o,["autoplay","direction","index","interval","onChangeIndex"]),c=this.state.index;return s?vs.default.createElement(O$.default,{target:"document",onVisibilityChange:this.handleVisibilityChange},vs.default.createElement(e,(0,oy.default)({index:c,onChangeIndex:this.handleChangeIndex,onSwitching:this.handleSwitching},l))):vs.default.createElement(e,(0,oy.default)({index:c,onChangeIndex:a},l))}}]),r}(vs.default.Component);return t.propTypes={},t.defaultProps={autoplay:!0,direction:"incremental",interval:3e3},t}var jg={},Cp={exports:{}};(function(e,t){function n(l){if(l&&typeof l=="object"){var c=l.which||l.keyCode||l.charCode;c&&(l=c)}if(typeof l=="number")return s[l];var u=String(l),d=r[u.toLowerCase()];if(d)return d;var d=i[u.toLowerCase()];if(d)return d;if(u.length===1)return u.charCodeAt(0)}n.isEventKey=function(c,u){if(c&&typeof c=="object"){var d=c.which||c.keyCode||c.charCode;if(d==null)return!1;if(typeof u=="string"){var h=r[u.toLowerCase()];if(h)return h===d;var h=i[u.toLowerCase()];if(h)return h===d}else if(typeof u=="number")return u===d;return!1}},t=e.exports=n;var r=t.code=t.codes={backspace:8,tab:9,enter:13,shift:16,ctrl:17,alt:18,"pause/break":19,"caps lock":20,esc:27,space:32,"page up":33,"page down":34,end:35,home:36,left:37,up:38,right:39,down:40,insert:45,delete:46,command:91,"left command":91,"right command":93,"numpad *":106,"numpad +":107,"numpad -":109,"numpad .":110,"numpad /":111,"num lock":144,"scroll lock":145,"my computer":182,"my calculator":183,";":186,"=":187,",":188,"-":189,".":190,"/":191,"`":192,"[":219,"\\":220,"]":221,"'":222},i=t.aliases={windows:91,"\u21E7":16,"\u2325":18,"\u2303":17,"\u2318":91,ctl:17,control:17,option:18,pause:19,break:19,caps:20,return:13,escape:27,spc:32,spacebar:32,pgup:33,pgdn:34,ins:45,del:46,cmd:91};/*!
 * Programatically add the following
 */for(o=97;o<123;o++)r[String.fromCharCode(o)]=o-32;for(var o=48;o<58;o++)r[o-48]=o;for(o=1;o<13;o++)r["f"+o]=o+111;for(o=0;o<10;o++)r["numpad "+o]=o+96;var s=t.names=t.title={};for(o in r)s[r[o]]=o;for(var a in i)r[a]=i[a]})(Cp,Cp.exports);var Nn=Ld;Object.defineProperty(jg,"__esModule",{value:!0});jg.default=V$;var R$=Nn(Ad),$$=Nn(Ag),L$=Nn(zg),A$=Nn(Ig),z$=Nn(Dg),I$=Nn(zd),D$=Nn(Fg),Fl=Nn(_.exports);Nn(qo.exports);var F$=Nn(Cp.exports),j$=Nn(ll),B$=Ja;function V$(e){var t=function(n){(0,D$.default)(r,n);function r(){var i,o;(0,L$.default)(this,r);for(var s=arguments.length,a=new Array(s),l=0;l<s;l++)a[l]=arguments[l];return o=(0,z$.default)(this,(i=(0,I$.default)(r)).call.apply(i,[this].concat(a))),o.state={},o.handleKeyDown=function(c){var u,d=o.props,h=d.axis,m=h===void 0?"x":h,y=d.children,v=d.onChangeIndex,p=d.slideCount;switch((0,F$.default)(c)){case"page down":case"down":m==="y"?u="decrease":m==="y-reverse"&&(u="increase");break;case"left":m==="x"?u="decrease":m==="x-reverse"&&(u="increase");break;case"page up":case"up":m==="y"?u="increase":m==="y-reverse"&&(u="decrease");break;case"right":m==="x"?u="increase":m==="x-reverse"&&(u="decrease");break}if(u){var g=o.state.index,x=g;u==="increase"?x+=1:x-=1,(p||y)&&(x=(0,B$.mod)(x,p||Fl.default.Children.count(y))),o.props.index===void 0&&o.setState({index:x}),v&&v(x,g)}},o.handleChangeIndex=function(c,u,d){o.props.index===void 0&&o.setState({index:c}),o.props.onChangeIndex&&o.props.onChangeIndex(c,u,d)},o}return(0,A$.default)(r,[{key:"UNSAFE_componentWillMount",value:function(){this.setState({index:this.props.index||0})}},{key:"UNSAFE_componentWillReceiveProps",value:function(o){var s=o.index;typeof s=="number"&&s!==this.props.index&&this.setState({index:s})}},{key:"render",value:function(){var o=this.props;o.index,o.onChangeIndex;var s=(0,$$.default)(o,["index","onChangeIndex"]),a=this.state.index;return Fl.default.createElement(j$.default,{target:"window",onKeyDown:this.handleKeyDown},Fl.default.createElement(e,(0,R$.default)({index:a,onChangeIndex:this.handleChangeIndex},s)))}}]),r}(Fl.default.Component);return t.propTypes={},t}var Bg={};function W$(e){if(e&&e.__esModule)return e;var t={};if(e!=null){for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}}return t.default=e,t}var H$=W$,U$=H$,ai=Ld;Object.defineProperty(Bg,"__esModule",{value:!0});Bg.default=eL;var Y$=ai(Ad),X$=ai(Ag),K$=ai(zg),G$=ai(Ig),q$=ai(Dg),Q$=ai(zd),Z$=ai(Fg),sy=U$(_.exports);ai(qo.exports);var J$=Ja;function eL(e){var t=function(n){(0,Z$.default)(r,n);function r(i){var o;return(0,K$.default)(this,r),o=(0,q$.default)(this,(0,Q$.default)(r).call(this,i)),o.timer=null,o.state={},o.handleChangeIndex=function(s,a,l){var c=o.props,u=c.slideCount,d=c.onChangeIndex,h=s-a,m=o.state.index+h;u&&(m=(0,J$.mod)(m,u)),o.props.index===void 0&&o.setIndex(m,s,h),d&&d(m,o.state.index,l)},o.handleTransitionEnd=function(){o.timer=setTimeout(function(){o.setWindow()},0),o.props.onTransitionEnd&&o.props.onTransitionEnd()},o.state.index=i.index||0,o}return(0,G$.default)(r,[{key:"UNSAFE_componentWillMount",value:function(){this.setWindow(this.state.index)}},{key:"UNSAFE_componentWillReceiveProps",value:function(o){var s=o.index;if(typeof s=="number"&&s!==this.props.index){var a=s-this.props.index;this.setIndex(s,this.state.indexContainer+a,a)}}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}},{key:"setIndex",value:function(o,s,a){var l={index:o,indexContainer:s,indexStart:this.state.indexStart,indexStop:this.state.indexStop};a>0&&(!this.props.slideCount||l.indexStop<this.props.slideCount-1)&&(l.indexStop+=1),o>l.indexStop&&(l.indexStop=o);var c=l.indexStart-o;c>0&&(l.indexContainer+=c,l.indexStart-=c),this.setState(l)}},{key:"setWindow",value:function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.state.index,s=this.props.slideCount,a=this.props.overscanSlideBefore,l=this.props.overscanSlideAfter;s&&(a>o&&(a=o),l+o>s-1&&(l=s-o-1)),this.setState({indexContainer:a,indexStart:o-a,indexStop:o+l})}},{key:"render",value:function(){var o=this.props;o.children,o.index,o.onChangeIndex,o.onTransitionEnd,o.overscanSlideAfter,o.overscanSlideBefore,o.slideCount;for(var s=o.slideRenderer,a=(0,X$.default)(o,["children","index","onChangeIndex","onTransitionEnd","overscanSlideAfter","overscanSlideBefore","slideCount","slideRenderer"]),l=this.state,c=l.indexContainer,u=l.indexStart,d=l.indexStop,h=[],m=u;m<=d;m+=1)h.push(s({index:m,key:m}));return sy.default.createElement(e,(0,Y$.default)({index:c,onChangeIndex:this.handleChangeIndex,onTransitionEnd:this.handleTransitionEnd},a),h)}}]),r}(sy.PureComponent);return t.propTypes={},t.defaultProps={overscanSlideAfter:2,overscanSlideBefore:3},t}(function(e){var t=Ld;Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"autoPlay",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(e,"bindKeyboard",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(e,"virtualize",{enumerable:!0,get:function(){return i.default}});var n=t(Lg),r=t(jg),i=t(Bg)})(T_);const tL=ee.div`
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
`,nL=({count:e,index:t})=>f(tL,{children:Array.from({length:e}).map((n,r)=>f("div",{className:`dot ${t===r?"active-dot":""}`},r))}),rL=T_.autoPlay(Iw),iL=ee.div`
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
`,oL=()=>{const[e,t]=_.exports.useState(0),n=r=>{t(r)};return _.exports.useEffect(()=>{const r=setInterval(()=>{t(i=>(i+1)%3)},9e3);return()=>clearInterval(r)},[]),k(iL,{children:[k(rL,{index:e,onChangeIndex:n,children:[k("div",{className:"slide",children:[f("img",{src:"./images/logo/savingpulse-logos_transparent.png",alt:""}),f("h2",{children:"Simple & free investing"}),f("p",{children:"Make investment easy in mutual funds"})]}),k("div",{className:"slide",children:[f("img",{src:"./images/logo/savingpulse-logos_transparent.png",alt:""}),f("h2",{children:"Direct mutual funds"}),f("p",{children:"Earn up to 2% extra!"})]}),k("div",{className:"slide",children:[f("img",{src:"./images/logo/savingpulse-logos_transparent.png",alt:""}),f("h2",{children:"Start in 2 minutes"}),f("p",{children:"100% peperless investing - SIP & One-time"})]})]}),f(nL,{count:3,index:e})]})},Y_=ee.div`
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
`,ay=Nt`var(--white, #fff)`,sL=Nt`var(--primaryDisableCTAFill, #767676)`,aL=Nt`var(--secondaryCTABorder, #999)`,lL=Nt`var(--primaryCTAFill, #9147ff)`,Vf=Nt`var(--primaryCTAFillRGB, 145, 71 ,255)`,cL=Nt`var(--primaryCTABorder, #c5d1df)`,uL=Nt`var(--primaryErrorCTAFill, #d9534f)`,Wf=Nt`var(--primaryErrorCTAFillRGB, 229, 28, 38)`,dL=Nt`var(--primaryErrorCTABorder, #d43f3a)`,fL=Nt`var(--secondaryCTAFill, #333)`,Hf=Nt`var(--secondaryCTAFillRGB, 51, 51, 51)`,hL=Nt`var(--primaryCTABorder, #979797)`,pL=Nt`#ee8950`,mL=Nt`#ec7939`,gu=ee.div`
  .sp-button {
    min-height: 3.5rem;
    cursor: pointer;
    color: ${ay};
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
    outline-color: ${ay};
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
    background-color: ${sL};
    border: 1px solid ${aL};
  }
  .sp-button.transparent {
    background-color: transparent;
  }
  .sp-button.warning {
    background-color: ${pL}
    border-color: ${mL};
  }

  .sp-button.primary {
    background-color: ${lL};
    border-color: ${cL};
  }
  .sp-button.primary:hover {
    background-color: rgba(${Vf}, 0.9);
  }
  .sp-button.primary:focus-visible {
    background-color: rgba(${Vf}, 0.8);
  }
  .sp-button.primary:active {
    background-color: rgba(${Vf}, 0.7);
  }

  .sp-button.danger {
    background-color: ${uL};
    border-color: ${dL};
  }
  .sp-button.danger:hover {
    background-color: rgba(${Wf}, 0.9);
  }
  .sp-button.danger:focus-visible {
    background-color: rgba(${Wf}, 0.8);
  }
  .sp-button.danger:active {
    background-color: rgba(${Wf}, 0.7);
  }

  .sp-button.dark {
    background-color: ${fL};
    border-color: ${hL};
  }
  .sp-button.dark:hover {
    background-color: rgba(${Hf}, 0.9);
  }
  .sp-button.dark:focus-visible {
    background-color: rgba(${Hf}, 0.8);
  }
  .sp-button.dark:active {
    background-color: rgba(${Hf}, 0.7);
  }
`,gL=({type:e=""})=>{At(i=>i.offers);const[t,n]=_.exports.useState(!1);let r=si();return f(Y_,{children:k("div",{className:`login-with ${t?"hide":""}`,children:[k("div",{className:"content",children:[f("h2",{children:"Enter 6 digit OTP we sent"}),f("p",{children:"We will send you a confirmation code."}),f("label",{children:f("input",{type:"number",pattern:"[0-9]",placeholder:"######"})})]}),k("div",{className:"controls",children:[f("div",{className:"next",children:f(gu,{children:f("button",{className:"sp-button primary",onClick:()=>{document.cookie="isLoggedIn="+!0,r("/mutual-funds")},children:"Submit"})})}),f("div",{className:"numbers",children:k("ul",{children:[f("li",{children:"1"}),f("li",{children:"2"}),f("li",{children:"3"}),f("li",{children:"4"}),f("li",{children:"5"}),f("li",{children:"6"}),f("li",{children:"7"}),f("li",{children:"8"}),f("li",{children:"9"}),f("li",{children:"0"}),f("li",{children:f(dw,{})})]})})]})]})})},vL=()=>{const[e,t]=_.exports.useState(!1),[n,r]=_.exports.useState(!1);return k(Y_,{children:[k("div",{className:`login-with ${e?"hide":""}`,children:[k("div",{className:"content",children:[f("h2",{children:"Enter your mobile number"}),f("p",{children:"We will send you a confirmation code."}),k("label",{children:[f("span",{children:"+91"})," ",f("input",{type:"number",pattern:"[0-9]",maxLength:"10",placeholder:"8947973174"})]})]}),k("div",{className:"controls",children:[f("div",{className:"next",children:f(gu,{children:f("button",{className:"sp-button primary",onClick:()=>r(!0),children:"Next"})})}),f("div",{className:"numbers",children:k("ul",{children:[f("li",{children:"1"}),f("li",{children:"2"}),f("li",{children:"3"}),f("li",{children:"4"}),f("li",{children:"5"}),f("li",{children:"6"}),f("li",{children:"7"}),f("li",{children:"8"}),f("li",{children:"9"}),f("li",{children:"0"}),f("li",{children:f(dw,{})})]})})]})]}),n?f(gL,{}):null]})},yL=ee.div`
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
`,xL=({type:e=""})=>{const{offers:t}=At(n=>n.offers);return f(yL,{children:t.map((n,r)=>{if(n.type===e)return k("div",{className:`offer-box offer-${n.id}`,children:[k("div",{className:"left-side",children:[f("div",{className:"picture",children:f("img",{src:n.image,alt:""})}),f("h2",{className:"name",children:n.name})]}),f("div",{className:"right-side",children:k("ul",{className:"action-buttons",children:[f("li",{children:"View Details"}),f("li",{children:"Open Account"})]})})]},n.id)})})},ly=()=>{const[e,t]=_.exports.useState(!1),[n,r]=_.exports.useState(!1),i=()=>{t(!1),r(!1)};let o=si();return document.cookie.split(";").filter(a=>a.indexOf("isLoggedIn=true")>=0).length!==0&&o("/mutual-funds"),f(ot,{children:k(WR,{children:[k("div",{className:`login-mobile ${e?"hide1":""}`,children:[f("div",{className:"slider",children:f(oL,{})}),k("div",{className:"login-container",children:[f(gu,{children:f("div",{className:"login-otp sp-button primary",onClick:()=>t(!0),children:"Sign in with OTP"})}),f(gu,{children:f("div",{className:"login-google sp-button primary",onClick:()=>r(!0),children:"Sign in with google"})}),k("div",{className:"no-account",children:["Don't have an account? ",f(je,{to:"/signup",children:"Signup"})]})]})]}),e&&k("div",{children:[f("div",{className:"header",onClick:i,children:f(Kv,{})}),f(vL,{})]}),n&&k("div",{children:[f("div",{className:"header",onClick:i,children:f(Kv,{})}),f(xL,{})]})]})})},bL=ee.div`
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
`,wL=({title:e,content:t})=>{const[n,r]=_.exports.useState(!1);return k("div",{className:"accordion-item",children:[k("div",{className:"accordion-title",onClick:()=>{r(!n)},children:[f("h2",{children:e}),f("span",{children:n?f("svg",{style:{transform:"rotate(180deg)"},focusable:"false",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:f("path",{fill:"%23747878",d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"})}):f("svg",{focusable:"false",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:f("path",{fill:"%23747878",d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"})})})]}),n&&f("div",{className:"accordion-content",children:t})]})},_L=({items:e})=>f(bL,{children:f("div",{className:"accordion",children:e.map((t,n)=>f(wL,{title:t.title,content:t.content},n))})});/*!
 * @kurkle/color v0.3.2
 * https://github.com/kurkle/color#readme
 * (c) 2023 Jukka Kurkela
 * Released under the MIT License
 */function ul(e){return e+.5|0}const Er=(e,t,n)=>Math.max(Math.min(e,n),t);function Os(e){return Er(ul(e*2.55),0,255)}function Yr(e){return Er(ul(e*255),0,255)}function rr(e){return Er(ul(e/2.55)/100,0,1)}function cy(e){return Er(ul(e*100),0,100)}const tn={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},Pp=[..."0123456789ABCDEF"],SL=e=>Pp[e&15],kL=e=>Pp[(e&240)>>4]+Pp[e&15],jl=e=>(e&240)>>4===(e&15),CL=e=>jl(e.r)&&jl(e.g)&&jl(e.b)&&jl(e.a);function PL(e){var t=e.length,n;return e[0]==="#"&&(t===4||t===5?n={r:255&tn[e[1]]*17,g:255&tn[e[2]]*17,b:255&tn[e[3]]*17,a:t===5?tn[e[4]]*17:255}:(t===7||t===9)&&(n={r:tn[e[1]]<<4|tn[e[2]],g:tn[e[3]]<<4|tn[e[4]],b:tn[e[5]]<<4|tn[e[6]],a:t===9?tn[e[7]]<<4|tn[e[8]]:255})),n}const ML=(e,t)=>e<255?t(e):"";function EL(e){var t=CL(e)?SL:kL;return e?"#"+t(e.r)+t(e.g)+t(e.b)+ML(e.a,t):void 0}const OL=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function X_(e,t,n){const r=t*Math.min(n,1-n),i=(o,s=(o+e/30)%12)=>n-r*Math.max(Math.min(s-3,9-s,1),-1);return[i(0),i(8),i(4)]}function NL(e,t,n){const r=(i,o=(i+e/60)%6)=>n-n*t*Math.max(Math.min(o,4-o,1),0);return[r(5),r(3),r(1)]}function TL(e,t,n){const r=X_(e,1,.5);let i;for(t+n>1&&(i=1/(t+n),t*=i,n*=i),i=0;i<3;i++)r[i]*=1-t-n,r[i]+=t;return r}function RL(e,t,n,r,i){return e===i?(t-n)/r+(t<n?6:0):t===i?(n-e)/r+2:(e-t)/r+4}function Vg(e){const n=e.r/255,r=e.g/255,i=e.b/255,o=Math.max(n,r,i),s=Math.min(n,r,i),a=(o+s)/2;let l,c,u;return o!==s&&(u=o-s,c=a>.5?u/(2-o-s):u/(o+s),l=RL(n,r,i,u,o),l=l*60+.5),[l|0,c||0,a]}function Wg(e,t,n,r){return(Array.isArray(t)?e(t[0],t[1],t[2]):e(t,n,r)).map(Yr)}function Hg(e,t,n){return Wg(X_,e,t,n)}function $L(e,t,n){return Wg(TL,e,t,n)}function LL(e,t,n){return Wg(NL,e,t,n)}function K_(e){return(e%360+360)%360}function AL(e){const t=OL.exec(e);let n=255,r;if(!t)return;t[5]!==r&&(n=t[6]?Os(+t[5]):Yr(+t[5]));const i=K_(+t[2]),o=+t[3]/100,s=+t[4]/100;return t[1]==="hwb"?r=$L(i,o,s):t[1]==="hsv"?r=LL(i,o,s):r=Hg(i,o,s),{r:r[0],g:r[1],b:r[2],a:n}}function zL(e,t){var n=Vg(e);n[0]=K_(n[0]+t),n=Hg(n),e.r=n[0],e.g=n[1],e.b=n[2]}function IL(e){if(!e)return;const t=Vg(e),n=t[0],r=cy(t[1]),i=cy(t[2]);return e.a<255?`hsla(${n}, ${r}%, ${i}%, ${rr(e.a)})`:`hsl(${n}, ${r}%, ${i}%)`}const uy={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},dy={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function DL(){const e={},t=Object.keys(dy),n=Object.keys(uy);let r,i,o,s,a;for(r=0;r<t.length;r++){for(s=a=t[r],i=0;i<n.length;i++)o=n[i],a=a.replace(o,uy[o]);o=parseInt(dy[s],16),e[a]=[o>>16&255,o>>8&255,o&255]}return e}let Bl;function FL(e){Bl||(Bl=DL(),Bl.transparent=[0,0,0,0]);const t=Bl[e.toLowerCase()];return t&&{r:t[0],g:t[1],b:t[2],a:t.length===4?t[3]:255}}const jL=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function BL(e){const t=jL.exec(e);let n=255,r,i,o;if(!!t){if(t[7]!==r){const s=+t[7];n=t[8]?Os(s):Er(s*255,0,255)}return r=+t[1],i=+t[3],o=+t[5],r=255&(t[2]?Os(r):Er(r,0,255)),i=255&(t[4]?Os(i):Er(i,0,255)),o=255&(t[6]?Os(o):Er(o,0,255)),{r,g:i,b:o,a:n}}}function VL(e){return e&&(e.a<255?`rgba(${e.r}, ${e.g}, ${e.b}, ${rr(e.a)})`:`rgb(${e.r}, ${e.g}, ${e.b})`)}const Uf=e=>e<=.0031308?e*12.92:Math.pow(e,1/2.4)*1.055-.055,Ji=e=>e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4);function WL(e,t,n){const r=Ji(rr(e.r)),i=Ji(rr(e.g)),o=Ji(rr(e.b));return{r:Yr(Uf(r+n*(Ji(rr(t.r))-r))),g:Yr(Uf(i+n*(Ji(rr(t.g))-i))),b:Yr(Uf(o+n*(Ji(rr(t.b))-o))),a:e.a+n*(t.a-e.a)}}function Vl(e,t,n){if(e){let r=Vg(e);r[t]=Math.max(0,Math.min(r[t]+r[t]*n,t===0?360:1)),r=Hg(r),e.r=r[0],e.g=r[1],e.b=r[2]}}function G_(e,t){return e&&Object.assign(t||{},e)}function fy(e){var t={r:0,g:0,b:0,a:255};return Array.isArray(e)?e.length>=3&&(t={r:e[0],g:e[1],b:e[2],a:255},e.length>3&&(t.a=Yr(e[3]))):(t=G_(e,{r:0,g:0,b:0,a:1}),t.a=Yr(t.a)),t}function HL(e){return e.charAt(0)==="r"?BL(e):AL(e)}class Ea{constructor(t){if(t instanceof Ea)return t;const n=typeof t;let r;n==="object"?r=fy(t):n==="string"&&(r=PL(t)||FL(t)||HL(t)),this._rgb=r,this._valid=!!r}get valid(){return this._valid}get rgb(){var t=G_(this._rgb);return t&&(t.a=rr(t.a)),t}set rgb(t){this._rgb=fy(t)}rgbString(){return this._valid?VL(this._rgb):void 0}hexString(){return this._valid?EL(this._rgb):void 0}hslString(){return this._valid?IL(this._rgb):void 0}mix(t,n){if(t){const r=this.rgb,i=t.rgb;let o;const s=n===o?.5:n,a=2*s-1,l=r.a-i.a,c=((a*l===-1?a:(a+l)/(1+a*l))+1)/2;o=1-c,r.r=255&c*r.r+o*i.r+.5,r.g=255&c*r.g+o*i.g+.5,r.b=255&c*r.b+o*i.b+.5,r.a=s*r.a+(1-s)*i.a,this.rgb=r}return this}interpolate(t,n){return t&&(this._rgb=WL(this._rgb,t._rgb,n)),this}clone(){return new Ea(this.rgb)}alpha(t){return this._rgb.a=Yr(t),this}clearer(t){const n=this._rgb;return n.a*=1-t,this}greyscale(){const t=this._rgb,n=ul(t.r*.3+t.g*.59+t.b*.11);return t.r=t.g=t.b=n,this}opaquer(t){const n=this._rgb;return n.a*=1+t,this}negate(){const t=this._rgb;return t.r=255-t.r,t.g=255-t.g,t.b=255-t.b,this}lighten(t){return Vl(this._rgb,2,t),this}darken(t){return Vl(this._rgb,2,-t),this}saturate(t){return Vl(this._rgb,1,t),this}desaturate(t){return Vl(this._rgb,1,-t),this}rotate(t){return zL(this._rgb,t),this}}/*!
 * Chart.js v4.4.3
 * https://www.chartjs.org
 * (c) 2024 Chart.js Contributors
 * Released under the MIT License
 */function Zn(){}const UL=(()=>{let e=0;return()=>e++})();function ge(e){return e===null||typeof e=="undefined"}function Le(e){if(Array.isArray&&Array.isArray(e))return!0;const t=Object.prototype.toString.call(e);return t.slice(0,7)==="[object"&&t.slice(-6)==="Array]"}function ue(e){return e!==null&&Object.prototype.toString.call(e)==="[object Object]"}function Ge(e){return(typeof e=="number"||e instanceof Number)&&isFinite(+e)}function Ht(e,t){return Ge(e)?e:t}function oe(e,t){return typeof e=="undefined"?t:e}const YL=(e,t)=>typeof e=="string"&&e.endsWith("%")?parseFloat(e)/100:+e/t,q_=(e,t)=>typeof e=="string"&&e.endsWith("%")?parseFloat(e)/100*t:+e;function Re(e,t,n){if(e&&typeof e.call=="function")return e.apply(n,t)}function Me(e,t,n,r){let i,o,s;if(Le(e))if(o=e.length,r)for(i=o-1;i>=0;i--)t.call(n,e[i],i);else for(i=0;i<o;i++)t.call(n,e[i],i);else if(ue(e))for(s=Object.keys(e),o=s.length,i=0;i<o;i++)t.call(n,e[s[i]],s[i])}function vu(e,t){let n,r,i,o;if(!e||!t||e.length!==t.length)return!1;for(n=0,r=e.length;n<r;++n)if(i=e[n],o=t[n],i.datasetIndex!==o.datasetIndex||i.index!==o.index)return!1;return!0}function yu(e){if(Le(e))return e.map(yu);if(ue(e)){const t=Object.create(null),n=Object.keys(e),r=n.length;let i=0;for(;i<r;++i)t[n[i]]=yu(e[n[i]]);return t}return e}function Q_(e){return["__proto__","prototype","constructor"].indexOf(e)===-1}function XL(e,t,n,r){if(!Q_(e))return;const i=t[e],o=n[e];ue(i)&&ue(o)?Oa(i,o,r):t[e]=yu(o)}function Oa(e,t,n){const r=Le(t)?t:[t],i=r.length;if(!ue(e))return e;n=n||{};const o=n.merger||XL;let s;for(let a=0;a<i;++a){if(s=r[a],!ue(s))continue;const l=Object.keys(s);for(let c=0,u=l.length;c<u;++c)o(l[c],e,s,n)}return e}function qs(e,t){return Oa(e,t,{merger:KL})}function KL(e,t,n){if(!Q_(e))return;const r=t[e],i=n[e];ue(r)&&ue(i)?qs(r,i):Object.prototype.hasOwnProperty.call(t,e)||(t[e]=yu(i))}const hy={"":e=>e,x:e=>e.x,y:e=>e.y};function GL(e){const t=e.split("."),n=[];let r="";for(const i of t)r+=i,r.endsWith("\\")?r=r.slice(0,-1)+".":(n.push(r),r="");return n}function qL(e){const t=GL(e);return n=>{for(const r of t){if(r==="")break;n=n&&n[r]}return n}}function ti(e,t){return(hy[t]||(hy[t]=qL(t)))(e)}function Ug(e){return e.charAt(0).toUpperCase()+e.slice(1)}const Na=e=>typeof e!="undefined",ni=e=>typeof e=="function",py=(e,t)=>{if(e.size!==t.size)return!1;for(const n of e)if(!t.has(n))return!1;return!0};function QL(e){return e.type==="mouseup"||e.type==="click"||e.type==="contextmenu"}const Ie=Math.PI,ze=2*Ie,ZL=ze+Ie,xu=Number.POSITIVE_INFINITY,JL=Ie/180,Ze=Ie/2,ci=Ie/4,my=Ie*2/3,Or=Math.log10,Yn=Math.sign;function Qs(e,t,n){return Math.abs(e-t)<n}function gy(e){const t=Math.round(e);e=Qs(e,t,e/1e3)?t:e;const n=Math.pow(10,Math.floor(Or(e))),r=e/n;return(r<=1?1:r<=2?2:r<=5?5:10)*n}function eA(e){const t=[],n=Math.sqrt(e);let r;for(r=1;r<n;r++)e%r===0&&(t.push(r),t.push(e/r));return n===(n|0)&&t.push(n),t.sort((i,o)=>i-o).pop(),t}function Fo(e){return!isNaN(parseFloat(e))&&isFinite(e)}function tA(e,t){const n=Math.round(e);return n-t<=e&&n+t>=e}function Z_(e,t,n){let r,i,o;for(r=0,i=e.length;r<i;r++)o=e[r][n],isNaN(o)||(t.min=Math.min(t.min,o),t.max=Math.max(t.max,o))}function kn(e){return e*(Ie/180)}function Yg(e){return e*(180/Ie)}function vy(e){if(!Ge(e))return;let t=1,n=0;for(;Math.round(e*t)/t!==e;)t*=10,n++;return n}function J_(e,t){const n=t.x-e.x,r=t.y-e.y,i=Math.sqrt(n*n+r*r);let o=Math.atan2(r,n);return o<-.5*Ie&&(o+=ze),{angle:o,distance:i}}function Mp(e,t){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}function nA(e,t){return(e-t+ZL)%ze-Ie}function Ut(e){return(e%ze+ze)%ze}function Ta(e,t,n,r){const i=Ut(e),o=Ut(t),s=Ut(n),a=Ut(o-i),l=Ut(s-i),c=Ut(i-o),u=Ut(i-s);return i===o||i===s||r&&o===s||a>l&&c<u}function ut(e,t,n){return Math.max(t,Math.min(n,e))}function rA(e){return ut(e,-32768,32767)}function ar(e,t,n,r=1e-6){return e>=Math.min(t,n)-r&&e<=Math.max(t,n)+r}function Xg(e,t,n){n=n||(s=>e[s]<t);let r=e.length-1,i=0,o;for(;r-i>1;)o=i+r>>1,n(o)?i=o:r=o;return{lo:i,hi:r}}const lr=(e,t,n,r)=>Xg(e,n,r?i=>{const o=e[i][t];return o<n||o===n&&e[i+1][t]===n}:i=>e[i][t]<n),iA=(e,t,n)=>Xg(e,n,r=>e[r][t]>=n);function oA(e,t,n){let r=0,i=e.length;for(;r<i&&e[r]<t;)r++;for(;i>r&&e[i-1]>n;)i--;return r>0||i<e.length?e.slice(r,i):e}const eS=["push","pop","shift","splice","unshift"];function sA(e,t){if(e._chartjs){e._chartjs.listeners.push(t);return}Object.defineProperty(e,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[t]}}),eS.forEach(n=>{const r="_onData"+Ug(n),i=e[n];Object.defineProperty(e,n,{configurable:!0,enumerable:!1,value(...o){const s=i.apply(this,o);return e._chartjs.listeners.forEach(a=>{typeof a[r]=="function"&&a[r](...o)}),s}})})}function yy(e,t){const n=e._chartjs;if(!n)return;const r=n.listeners,i=r.indexOf(t);i!==-1&&r.splice(i,1),!(r.length>0)&&(eS.forEach(o=>{delete e[o]}),delete e._chartjs)}function tS(e){const t=new Set(e);return t.size===e.length?e:Array.from(t)}const nS=function(){return typeof window=="undefined"?function(e){return e()}:window.requestAnimationFrame}();function rS(e,t){let n=[],r=!1;return function(...i){n=i,r||(r=!0,nS.call(window,()=>{r=!1,e.apply(t,n)}))}}function aA(e,t){let n;return function(...r){return t?(clearTimeout(n),n=setTimeout(e,t,r)):e.apply(this,r),t}}const Kg=e=>e==="start"?"left":e==="end"?"right":"center",_t=(e,t,n)=>e==="start"?t:e==="end"?n:(t+n)/2,lA=(e,t,n,r)=>e===(r?"left":"right")?n:e==="center"?(t+n)/2:t;function iS(e,t,n){const r=t.length;let i=0,o=r;if(e._sorted){const{iScale:s,_parsed:a}=e,l=s.axis,{min:c,max:u,minDefined:d,maxDefined:h}=s.getUserBounds();d&&(i=ut(Math.min(lr(a,l,c).lo,n?r:lr(t,l,s.getPixelForValue(c)).lo),0,r-1)),h?o=ut(Math.max(lr(a,s.axis,u,!0).hi+1,n?0:lr(t,l,s.getPixelForValue(u),!0).hi+1),i,r)-i:o=r-i}return{start:i,count:o}}function oS(e){const{xScale:t,yScale:n,_scaleRanges:r}=e,i={xmin:t.min,xmax:t.max,ymin:n.min,ymax:n.max};if(!r)return e._scaleRanges=i,!0;const o=r.xmin!==t.min||r.xmax!==t.max||r.ymin!==n.min||r.ymax!==n.max;return Object.assign(r,i),o}const Wl=e=>e===0||e===1,xy=(e,t,n)=>-(Math.pow(2,10*(e-=1))*Math.sin((e-t)*ze/n)),by=(e,t,n)=>Math.pow(2,-10*e)*Math.sin((e-t)*ze/n)+1,Zs={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>-e*(e-2),easeInOutQuad:e=>(e/=.5)<1?.5*e*e:-.5*(--e*(e-2)-1),easeInCubic:e=>e*e*e,easeOutCubic:e=>(e-=1)*e*e+1,easeInOutCubic:e=>(e/=.5)<1?.5*e*e*e:.5*((e-=2)*e*e+2),easeInQuart:e=>e*e*e*e,easeOutQuart:e=>-((e-=1)*e*e*e-1),easeInOutQuart:e=>(e/=.5)<1?.5*e*e*e*e:-.5*((e-=2)*e*e*e-2),easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>(e-=1)*e*e*e*e+1,easeInOutQuint:e=>(e/=.5)<1?.5*e*e*e*e*e:.5*((e-=2)*e*e*e*e+2),easeInSine:e=>-Math.cos(e*Ze)+1,easeOutSine:e=>Math.sin(e*Ze),easeInOutSine:e=>-.5*(Math.cos(Ie*e)-1),easeInExpo:e=>e===0?0:Math.pow(2,10*(e-1)),easeOutExpo:e=>e===1?1:-Math.pow(2,-10*e)+1,easeInOutExpo:e=>Wl(e)?e:e<.5?.5*Math.pow(2,10*(e*2-1)):.5*(-Math.pow(2,-10*(e*2-1))+2),easeInCirc:e=>e>=1?e:-(Math.sqrt(1-e*e)-1),easeOutCirc:e=>Math.sqrt(1-(e-=1)*e),easeInOutCirc:e=>(e/=.5)<1?-.5*(Math.sqrt(1-e*e)-1):.5*(Math.sqrt(1-(e-=2)*e)+1),easeInElastic:e=>Wl(e)?e:xy(e,.075,.3),easeOutElastic:e=>Wl(e)?e:by(e,.075,.3),easeInOutElastic(e){return Wl(e)?e:e<.5?.5*xy(e*2,.1125,.45):.5+.5*by(e*2-1,.1125,.45)},easeInBack(e){return e*e*((1.70158+1)*e-1.70158)},easeOutBack(e){return(e-=1)*e*((1.70158+1)*e+1.70158)+1},easeInOutBack(e){let t=1.70158;return(e/=.5)<1?.5*(e*e*(((t*=1.525)+1)*e-t)):.5*((e-=2)*e*(((t*=1.525)+1)*e+t)+2)},easeInBounce:e=>1-Zs.easeOutBounce(1-e),easeOutBounce(e){return e<1/2.75?7.5625*e*e:e<2/2.75?7.5625*(e-=1.5/2.75)*e+.75:e<2.5/2.75?7.5625*(e-=2.25/2.75)*e+.9375:7.5625*(e-=2.625/2.75)*e+.984375},easeInOutBounce:e=>e<.5?Zs.easeInBounce(e*2)*.5:Zs.easeOutBounce(e*2-1)*.5+.5};function Gg(e){if(e&&typeof e=="object"){const t=e.toString();return t==="[object CanvasPattern]"||t==="[object CanvasGradient]"}return!1}function wy(e){return Gg(e)?e:new Ea(e)}function Yf(e){return Gg(e)?e:new Ea(e).saturate(.5).darken(.1).hexString()}const cA=["x","y","borderWidth","radius","tension"],uA=["color","borderColor","backgroundColor"];function dA(e){e.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),e.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:t=>t!=="onProgress"&&t!=="onComplete"&&t!=="fn"}),e.set("animations",{colors:{type:"color",properties:uA},numbers:{type:"number",properties:cA}}),e.describe("animations",{_fallback:"animation"}),e.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:t=>t|0}}}})}function fA(e){e.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})}const _y=new Map;function hA(e,t){t=t||{};const n=e+JSON.stringify(t);let r=_y.get(n);return r||(r=new Intl.NumberFormat(e,t),_y.set(n,r)),r}function dl(e,t,n){return hA(t,n).format(e)}const sS={values(e){return Le(e)?e:""+e},numeric(e,t,n){if(e===0)return"0";const r=this.chart.options.locale;let i,o=e;if(n.length>1){const c=Math.max(Math.abs(n[0].value),Math.abs(n[n.length-1].value));(c<1e-4||c>1e15)&&(i="scientific"),o=pA(e,n)}const s=Or(Math.abs(o)),a=isNaN(s)?1:Math.max(Math.min(-1*Math.floor(s),20),0),l={notation:i,minimumFractionDigits:a,maximumFractionDigits:a};return Object.assign(l,this.options.ticks.format),dl(e,r,l)},logarithmic(e,t,n){if(e===0)return"0";const r=n[t].significand||e/Math.pow(10,Math.floor(Or(e)));return[1,2,3,5,10,15].includes(r)||t>.8*n.length?sS.numeric.call(this,e,t,n):""}};function pA(e,t){let n=t.length>3?t[2].value-t[1].value:t[1].value-t[0].value;return Math.abs(n)>=1&&e!==Math.floor(e)&&(n=e-Math.floor(e)),n}var Id={formatters:sS};function mA(e){e.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",clip:!0,grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(t,n)=>n.lineWidth,tickColor:(t,n)=>n.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:Id.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),e.route("scale.ticks","color","","color"),e.route("scale.grid","color","","borderColor"),e.route("scale.border","color","","borderColor"),e.route("scale.title","color","","color"),e.describe("scale",{_fallback:!1,_scriptable:t=>!t.startsWith("before")&&!t.startsWith("after")&&t!=="callback"&&t!=="parser",_indexable:t=>t!=="borderDash"&&t!=="tickBorderDash"&&t!=="dash"}),e.describe("scales",{_fallback:"scale"}),e.describe("scale.ticks",{_scriptable:t=>t!=="backdropPadding"&&t!=="callback",_indexable:t=>t!=="backdropPadding"})}const zi=Object.create(null),Ep=Object.create(null);function Js(e,t){if(!t)return e;const n=t.split(".");for(let r=0,i=n.length;r<i;++r){const o=n[r];e=e[o]||(e[o]=Object.create(null))}return e}function Xf(e,t,n){return typeof t=="string"?Oa(Js(e,t),n):Oa(Js(e,""),t)}class gA{constructor(t,n){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=r=>r.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(r,i)=>Yf(i.backgroundColor),this.hoverBorderColor=(r,i)=>Yf(i.borderColor),this.hoverColor=(r,i)=>Yf(i.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(t),this.apply(n)}set(t,n){return Xf(this,t,n)}get(t){return Js(this,t)}describe(t,n){return Xf(Ep,t,n)}override(t,n){return Xf(zi,t,n)}route(t,n,r,i){const o=Js(this,t),s=Js(this,r),a="_"+n;Object.defineProperties(o,{[a]:{value:o[n],writable:!0},[n]:{enumerable:!0,get(){const l=this[a],c=s[i];return ue(l)?Object.assign({},c,l):oe(l,c)},set(l){this[a]=l}}})}apply(t){t.forEach(n=>n(this))}}var qe=new gA({_scriptable:e=>!e.startsWith("on"),_indexable:e=>e!=="events",hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}},[dA,fA,mA]);function vA(e){return!e||ge(e.size)||ge(e.family)?null:(e.style?e.style+" ":"")+(e.weight?e.weight+" ":"")+e.size+"px "+e.family}function bu(e,t,n,r,i){let o=t[i];return o||(o=t[i]=e.measureText(i).width,n.push(i)),o>r&&(r=o),r}function yA(e,t,n,r){r=r||{};let i=r.data=r.data||{},o=r.garbageCollect=r.garbageCollect||[];r.font!==t&&(i=r.data={},o=r.garbageCollect=[],r.font=t),e.save(),e.font=t;let s=0;const a=n.length;let l,c,u,d,h;for(l=0;l<a;l++)if(d=n[l],d!=null&&!Le(d))s=bu(e,i,o,s,d);else if(Le(d))for(c=0,u=d.length;c<u;c++)h=d[c],h!=null&&!Le(h)&&(s=bu(e,i,o,s,h));e.restore();const m=o.length/2;if(m>n.length){for(l=0;l<m;l++)delete i[o[l]];o.splice(0,m)}return s}function ui(e,t,n){const r=e.currentDevicePixelRatio,i=n!==0?Math.max(n/2,.5):0;return Math.round((t-i)*r)/r+i}function Sy(e,t){!t&&!e||(t=t||e.getContext("2d"),t.save(),t.resetTransform(),t.clearRect(0,0,e.width,e.height),t.restore())}function Op(e,t,n,r){aS(e,t,n,r,null)}function aS(e,t,n,r,i){let o,s,a,l,c,u,d,h;const m=t.pointStyle,y=t.rotation,v=t.radius;let p=(y||0)*JL;if(m&&typeof m=="object"&&(o=m.toString(),o==="[object HTMLImageElement]"||o==="[object HTMLCanvasElement]")){e.save(),e.translate(n,r),e.rotate(p),e.drawImage(m,-m.width/2,-m.height/2,m.width,m.height),e.restore();return}if(!(isNaN(v)||v<=0)){switch(e.beginPath(),m){default:i?e.ellipse(n,r,i/2,v,0,0,ze):e.arc(n,r,v,0,ze),e.closePath();break;case"triangle":u=i?i/2:v,e.moveTo(n+Math.sin(p)*u,r-Math.cos(p)*v),p+=my,e.lineTo(n+Math.sin(p)*u,r-Math.cos(p)*v),p+=my,e.lineTo(n+Math.sin(p)*u,r-Math.cos(p)*v),e.closePath();break;case"rectRounded":c=v*.516,l=v-c,s=Math.cos(p+ci)*l,d=Math.cos(p+ci)*(i?i/2-c:l),a=Math.sin(p+ci)*l,h=Math.sin(p+ci)*(i?i/2-c:l),e.arc(n-d,r-a,c,p-Ie,p-Ze),e.arc(n+h,r-s,c,p-Ze,p),e.arc(n+d,r+a,c,p,p+Ze),e.arc(n-h,r+s,c,p+Ze,p+Ie),e.closePath();break;case"rect":if(!y){l=Math.SQRT1_2*v,u=i?i/2:l,e.rect(n-u,r-l,2*u,2*l);break}p+=ci;case"rectRot":d=Math.cos(p)*(i?i/2:v),s=Math.cos(p)*v,a=Math.sin(p)*v,h=Math.sin(p)*(i?i/2:v),e.moveTo(n-d,r-a),e.lineTo(n+h,r-s),e.lineTo(n+d,r+a),e.lineTo(n-h,r+s),e.closePath();break;case"crossRot":p+=ci;case"cross":d=Math.cos(p)*(i?i/2:v),s=Math.cos(p)*v,a=Math.sin(p)*v,h=Math.sin(p)*(i?i/2:v),e.moveTo(n-d,r-a),e.lineTo(n+d,r+a),e.moveTo(n+h,r-s),e.lineTo(n-h,r+s);break;case"star":d=Math.cos(p)*(i?i/2:v),s=Math.cos(p)*v,a=Math.sin(p)*v,h=Math.sin(p)*(i?i/2:v),e.moveTo(n-d,r-a),e.lineTo(n+d,r+a),e.moveTo(n+h,r-s),e.lineTo(n-h,r+s),p+=ci,d=Math.cos(p)*(i?i/2:v),s=Math.cos(p)*v,a=Math.sin(p)*v,h=Math.sin(p)*(i?i/2:v),e.moveTo(n-d,r-a),e.lineTo(n+d,r+a),e.moveTo(n+h,r-s),e.lineTo(n-h,r+s);break;case"line":s=i?i/2:Math.cos(p)*v,a=Math.sin(p)*v,e.moveTo(n-s,r-a),e.lineTo(n+s,r+a);break;case"dash":e.moveTo(n,r),e.lineTo(n+Math.cos(p)*(i?i/2:v),r+Math.sin(p)*v);break;case!1:e.closePath();break}e.fill(),t.borderWidth>0&&e.stroke()}}function cr(e,t,n){return n=n||.5,!t||e&&e.x>t.left-n&&e.x<t.right+n&&e.y>t.top-n&&e.y<t.bottom+n}function Dd(e,t){e.save(),e.beginPath(),e.rect(t.left,t.top,t.right-t.left,t.bottom-t.top),e.clip()}function Fd(e){e.restore()}function xA(e,t,n,r,i){if(!t)return e.lineTo(n.x,n.y);if(i==="middle"){const o=(t.x+n.x)/2;e.lineTo(o,t.y),e.lineTo(o,n.y)}else i==="after"!=!!r?e.lineTo(t.x,n.y):e.lineTo(n.x,t.y);e.lineTo(n.x,n.y)}function bA(e,t,n,r){if(!t)return e.lineTo(n.x,n.y);e.bezierCurveTo(r?t.cp1x:t.cp2x,r?t.cp1y:t.cp2y,r?n.cp2x:n.cp1x,r?n.cp2y:n.cp1y,n.x,n.y)}function wA(e,t){t.translation&&e.translate(t.translation[0],t.translation[1]),ge(t.rotation)||e.rotate(t.rotation),t.color&&(e.fillStyle=t.color),t.textAlign&&(e.textAlign=t.textAlign),t.textBaseline&&(e.textBaseline=t.textBaseline)}function _A(e,t,n,r,i){if(i.strikethrough||i.underline){const o=e.measureText(r),s=t-o.actualBoundingBoxLeft,a=t+o.actualBoundingBoxRight,l=n-o.actualBoundingBoxAscent,c=n+o.actualBoundingBoxDescent,u=i.strikethrough?(l+c)/2:c;e.strokeStyle=e.fillStyle,e.beginPath(),e.lineWidth=i.decorationWidth||2,e.moveTo(s,u),e.lineTo(a,u),e.stroke()}}function SA(e,t){const n=e.fillStyle;e.fillStyle=t.color,e.fillRect(t.left,t.top,t.width,t.height),e.fillStyle=n}function Ii(e,t,n,r,i,o={}){const s=Le(t)?t:[t],a=o.strokeWidth>0&&o.strokeColor!=="";let l,c;for(e.save(),e.font=i.string,wA(e,o),l=0;l<s.length;++l)c=s[l],o.backdrop&&SA(e,o.backdrop),a&&(o.strokeColor&&(e.strokeStyle=o.strokeColor),ge(o.strokeWidth)||(e.lineWidth=o.strokeWidth),e.strokeText(c,n,r,o.maxWidth)),e.fillText(c,n,r,o.maxWidth),_A(e,n,r,c,o),r+=Number(i.lineHeight);e.restore()}function Ra(e,t){const{x:n,y:r,w:i,h:o,radius:s}=t;e.arc(n+s.topLeft,r+s.topLeft,s.topLeft,1.5*Ie,Ie,!0),e.lineTo(n,r+o-s.bottomLeft),e.arc(n+s.bottomLeft,r+o-s.bottomLeft,s.bottomLeft,Ie,Ze,!0),e.lineTo(n+i-s.bottomRight,r+o),e.arc(n+i-s.bottomRight,r+o-s.bottomRight,s.bottomRight,Ze,0,!0),e.lineTo(n+i,r+s.topRight),e.arc(n+i-s.topRight,r+s.topRight,s.topRight,0,-Ze,!0),e.lineTo(n+s.topLeft,r)}const kA=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,CA=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function PA(e,t){const n=(""+e).match(kA);if(!n||n[1]==="normal")return t*1.2;switch(e=+n[2],n[3]){case"px":return e;case"%":e/=100;break}return t*e}const MA=e=>+e||0;function qg(e,t){const n={},r=ue(t),i=r?Object.keys(t):t,o=ue(e)?r?s=>oe(e[s],e[t[s]]):s=>e[s]:()=>e;for(const s of i)n[s]=MA(o(s));return n}function lS(e){return qg(e,{top:"y",right:"x",bottom:"y",left:"x"})}function Mi(e){return qg(e,["topLeft","topRight","bottomLeft","bottomRight"])}function Ot(e){const t=lS(e);return t.width=t.left+t.right,t.height=t.top+t.bottom,t}function lt(e,t){e=e||{},t=t||qe.font;let n=oe(e.size,t.size);typeof n=="string"&&(n=parseInt(n,10));let r=oe(e.style,t.style);r&&!(""+r).match(CA)&&(console.warn('Invalid font style specified: "'+r+'"'),r=void 0);const i={family:oe(e.family,t.family),lineHeight:PA(oe(e.lineHeight,t.lineHeight),n),size:n,style:r,weight:oe(e.weight,t.weight),string:""};return i.string=vA(i),i}function Ns(e,t,n,r){let i=!0,o,s,a;for(o=0,s=e.length;o<s;++o)if(a=e[o],a!==void 0&&(t!==void 0&&typeof a=="function"&&(a=a(t),i=!1),n!==void 0&&Le(a)&&(a=a[n%a.length],i=!1),a!==void 0))return r&&!i&&(r.cacheable=!1),a}function EA(e,t,n){const{min:r,max:i}=e,o=q_(t,(i-r)/2),s=(a,l)=>n&&a===0?0:a+l;return{min:s(r,-Math.abs(o)),max:s(i,o)}}function li(e,t){return Object.assign(Object.create(e),t)}function Qg(e,t=[""],n,r,i=()=>e[0]){const o=n||e;typeof r=="undefined"&&(r=fS("_fallback",e));const s={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:e,_rootScopes:o,_fallback:r,_getTarget:i,override:a=>Qg([a,...e],t,o,r)};return new Proxy(s,{deleteProperty(a,l){return delete a[l],delete a._keys,delete e[0][l],!0},get(a,l){return uS(a,l,()=>zA(l,t,e,a))},getOwnPropertyDescriptor(a,l){return Reflect.getOwnPropertyDescriptor(a._scopes[0],l)},getPrototypeOf(){return Reflect.getPrototypeOf(e[0])},has(a,l){return Cy(a).includes(l)},ownKeys(a){return Cy(a)},set(a,l,c){const u=a._storage||(a._storage=i());return a[l]=u[l]=c,delete a._keys,!0}})}function jo(e,t,n,r){const i={_cacheable:!1,_proxy:e,_context:t,_subProxy:n,_stack:new Set,_descriptors:cS(e,r),setContext:o=>jo(e,o,n,r),override:o=>jo(e.override(o),t,n,r)};return new Proxy(i,{deleteProperty(o,s){return delete o[s],delete e[s],!0},get(o,s,a){return uS(o,s,()=>NA(o,s,a))},getOwnPropertyDescriptor(o,s){return o._descriptors.allKeys?Reflect.has(e,s)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(e,s)},getPrototypeOf(){return Reflect.getPrototypeOf(e)},has(o,s){return Reflect.has(e,s)},ownKeys(){return Reflect.ownKeys(e)},set(o,s,a){return e[s]=a,delete o[s],!0}})}function cS(e,t={scriptable:!0,indexable:!0}){const{_scriptable:n=t.scriptable,_indexable:r=t.indexable,_allKeys:i=t.allKeys}=e;return{allKeys:i,scriptable:n,indexable:r,isScriptable:ni(n)?n:()=>n,isIndexable:ni(r)?r:()=>r}}const OA=(e,t)=>e?e+Ug(t):t,Zg=(e,t)=>ue(t)&&e!=="adapters"&&(Object.getPrototypeOf(t)===null||t.constructor===Object);function uS(e,t,n){if(Object.prototype.hasOwnProperty.call(e,t)||t==="constructor")return e[t];const r=n();return e[t]=r,r}function NA(e,t,n){const{_proxy:r,_context:i,_subProxy:o,_descriptors:s}=e;let a=r[t];return ni(a)&&s.isScriptable(t)&&(a=TA(t,a,e,n)),Le(a)&&a.length&&(a=RA(t,a,e,s.isIndexable)),Zg(t,a)&&(a=jo(a,i,o&&o[t],s)),a}function TA(e,t,n,r){const{_proxy:i,_context:o,_subProxy:s,_stack:a}=n;if(a.has(e))throw new Error("Recursion detected: "+Array.from(a).join("->")+"->"+e);a.add(e);let l=t(o,s||r);return a.delete(e),Zg(e,l)&&(l=Jg(i._scopes,i,e,l)),l}function RA(e,t,n,r){const{_proxy:i,_context:o,_subProxy:s,_descriptors:a}=n;if(typeof o.index!="undefined"&&r(e))return t[o.index%t.length];if(ue(t[0])){const l=t,c=i._scopes.filter(u=>u!==l);t=[];for(const u of l){const d=Jg(c,i,e,u);t.push(jo(d,o,s&&s[e],a))}}return t}function dS(e,t,n){return ni(e)?e(t,n):e}const $A=(e,t)=>e===!0?t:typeof e=="string"?ti(t,e):void 0;function LA(e,t,n,r,i){for(const o of t){const s=$A(n,o);if(s){e.add(s);const a=dS(s._fallback,n,i);if(typeof a!="undefined"&&a!==n&&a!==r)return a}else if(s===!1&&typeof r!="undefined"&&n!==r)return null}return!1}function Jg(e,t,n,r){const i=t._rootScopes,o=dS(t._fallback,n,r),s=[...e,...i],a=new Set;a.add(r);let l=ky(a,s,n,o||n,r);return l===null||typeof o!="undefined"&&o!==n&&(l=ky(a,s,o,l,r),l===null)?!1:Qg(Array.from(a),[""],i,o,()=>AA(t,n,r))}function ky(e,t,n,r,i){for(;n;)n=LA(e,t,n,r,i);return n}function AA(e,t,n){const r=e._getTarget();t in r||(r[t]={});const i=r[t];return Le(i)&&ue(n)?n:i||{}}function zA(e,t,n,r){let i;for(const o of t)if(i=fS(OA(o,e),n),typeof i!="undefined")return Zg(e,i)?Jg(n,r,e,i):i}function fS(e,t){for(const n of t){if(!n)continue;const r=n[e];if(typeof r!="undefined")return r}}function Cy(e){let t=e._keys;return t||(t=e._keys=IA(e._scopes)),t}function IA(e){const t=new Set;for(const n of e)for(const r of Object.keys(n).filter(i=>!i.startsWith("_")))t.add(r);return Array.from(t)}function hS(e,t,n,r){const{iScale:i}=e,{key:o="r"}=this._parsing,s=new Array(r);let a,l,c,u;for(a=0,l=r;a<l;++a)c=a+n,u=t[c],s[a]={r:i.parse(ti(u,o),c)};return s}const DA=Number.EPSILON||1e-14,Bo=(e,t)=>t<e.length&&!e[t].skip&&e[t],pS=e=>e==="x"?"y":"x";function FA(e,t,n,r){const i=e.skip?t:e,o=t,s=n.skip?t:n,a=Mp(o,i),l=Mp(s,o);let c=a/(a+l),u=l/(a+l);c=isNaN(c)?0:c,u=isNaN(u)?0:u;const d=r*c,h=r*u;return{previous:{x:o.x-d*(s.x-i.x),y:o.y-d*(s.y-i.y)},next:{x:o.x+h*(s.x-i.x),y:o.y+h*(s.y-i.y)}}}function jA(e,t,n){const r=e.length;let i,o,s,a,l,c=Bo(e,0);for(let u=0;u<r-1;++u)if(l=c,c=Bo(e,u+1),!(!l||!c)){if(Qs(t[u],0,DA)){n[u]=n[u+1]=0;continue}i=n[u]/t[u],o=n[u+1]/t[u],a=Math.pow(i,2)+Math.pow(o,2),!(a<=9)&&(s=3/Math.sqrt(a),n[u]=i*s*t[u],n[u+1]=o*s*t[u])}}function BA(e,t,n="x"){const r=pS(n),i=e.length;let o,s,a,l=Bo(e,0);for(let c=0;c<i;++c){if(s=a,a=l,l=Bo(e,c+1),!a)continue;const u=a[n],d=a[r];s&&(o=(u-s[n])/3,a[`cp1${n}`]=u-o,a[`cp1${r}`]=d-o*t[c]),l&&(o=(l[n]-u)/3,a[`cp2${n}`]=u+o,a[`cp2${r}`]=d+o*t[c])}}function VA(e,t="x"){const n=pS(t),r=e.length,i=Array(r).fill(0),o=Array(r);let s,a,l,c=Bo(e,0);for(s=0;s<r;++s)if(a=l,l=c,c=Bo(e,s+1),!!l){if(c){const u=c[t]-l[t];i[s]=u!==0?(c[n]-l[n])/u:0}o[s]=a?c?Yn(i[s-1])!==Yn(i[s])?0:(i[s-1]+i[s])/2:i[s-1]:i[s]}jA(e,i,o),BA(e,o,t)}function Hl(e,t,n){return Math.max(Math.min(e,n),t)}function WA(e,t){let n,r,i,o,s,a=cr(e[0],t);for(n=0,r=e.length;n<r;++n)s=o,o=a,a=n<r-1&&cr(e[n+1],t),o&&(i=e[n],s&&(i.cp1x=Hl(i.cp1x,t.left,t.right),i.cp1y=Hl(i.cp1y,t.top,t.bottom)),a&&(i.cp2x=Hl(i.cp2x,t.left,t.right),i.cp2y=Hl(i.cp2y,t.top,t.bottom)))}function HA(e,t,n,r,i){let o,s,a,l;if(t.spanGaps&&(e=e.filter(c=>!c.skip)),t.cubicInterpolationMode==="monotone")VA(e,i);else{let c=r?e[e.length-1]:e[0];for(o=0,s=e.length;o<s;++o)a=e[o],l=FA(c,a,e[Math.min(o+1,s-(r?0:1))%s],t.tension),a.cp1x=l.previous.x,a.cp1y=l.previous.y,a.cp2x=l.next.x,a.cp2y=l.next.y,c=a}t.capBezierPoints&&WA(e,n)}function e0(){return typeof window!="undefined"&&typeof document!="undefined"}function t0(e){let t=e.parentNode;return t&&t.toString()==="[object ShadowRoot]"&&(t=t.host),t}function wu(e,t,n){let r;return typeof e=="string"?(r=parseInt(e,10),e.indexOf("%")!==-1&&(r=r/100*t.parentNode[n])):r=e,r}const jd=e=>e.ownerDocument.defaultView.getComputedStyle(e,null);function UA(e,t){return jd(e).getPropertyValue(t)}const YA=["top","right","bottom","left"];function Ei(e,t,n){const r={};n=n?"-"+n:"";for(let i=0;i<4;i++){const o=YA[i];r[o]=parseFloat(e[t+"-"+o+n])||0}return r.width=r.left+r.right,r.height=r.top+r.bottom,r}const XA=(e,t,n)=>(e>0||t>0)&&(!n||!n.shadowRoot);function KA(e,t){const n=e.touches,r=n&&n.length?n[0]:e,{offsetX:i,offsetY:o}=r;let s=!1,a,l;if(XA(i,o,e.target))a=i,l=o;else{const c=t.getBoundingClientRect();a=r.clientX-c.left,l=r.clientY-c.top,s=!0}return{x:a,y:l,box:s}}function gi(e,t){if("native"in e)return e;const{canvas:n,currentDevicePixelRatio:r}=t,i=jd(n),o=i.boxSizing==="border-box",s=Ei(i,"padding"),a=Ei(i,"border","width"),{x:l,y:c,box:u}=KA(e,n),d=s.left+(u&&a.left),h=s.top+(u&&a.top);let{width:m,height:y}=t;return o&&(m-=s.width+a.width,y-=s.height+a.height),{x:Math.round((l-d)/m*n.width/r),y:Math.round((c-h)/y*n.height/r)}}function GA(e,t,n){let r,i;if(t===void 0||n===void 0){const o=e&&t0(e);if(!o)t=e.clientWidth,n=e.clientHeight;else{const s=o.getBoundingClientRect(),a=jd(o),l=Ei(a,"border","width"),c=Ei(a,"padding");t=s.width-c.width-l.width,n=s.height-c.height-l.height,r=wu(a.maxWidth,o,"clientWidth"),i=wu(a.maxHeight,o,"clientHeight")}}return{width:t,height:n,maxWidth:r||xu,maxHeight:i||xu}}const Ul=e=>Math.round(e*10)/10;function qA(e,t,n,r){const i=jd(e),o=Ei(i,"margin"),s=wu(i.maxWidth,e,"clientWidth")||xu,a=wu(i.maxHeight,e,"clientHeight")||xu,l=GA(e,t,n);let{width:c,height:u}=l;if(i.boxSizing==="content-box"){const h=Ei(i,"border","width"),m=Ei(i,"padding");c-=m.width+h.width,u-=m.height+h.height}return c=Math.max(0,c-o.width),u=Math.max(0,r?c/r:u-o.height),c=Ul(Math.min(c,s,l.maxWidth)),u=Ul(Math.min(u,a,l.maxHeight)),c&&!u&&(u=Ul(c/2)),(t!==void 0||n!==void 0)&&r&&l.height&&u>l.height&&(u=l.height,c=Ul(Math.floor(u*r))),{width:c,height:u}}function Py(e,t,n){const r=t||1,i=Math.floor(e.height*r),o=Math.floor(e.width*r);e.height=Math.floor(e.height),e.width=Math.floor(e.width);const s=e.canvas;return s.style&&(n||!s.style.height&&!s.style.width)&&(s.style.height=`${e.height}px`,s.style.width=`${e.width}px`),e.currentDevicePixelRatio!==r||s.height!==i||s.width!==o?(e.currentDevicePixelRatio=r,s.height=i,s.width=o,e.ctx.setTransform(r,0,0,r,0,0),!0):!1}const QA=function(){let e=!1;try{const t={get passive(){return e=!0,!1}};e0()&&(window.addEventListener("test",null,t),window.removeEventListener("test",null,t))}catch{}return e}();function My(e,t){const n=UA(e,t),r=n&&n.match(/^(\d+)(\.\d+)?px$/);return r?+r[1]:void 0}function vi(e,t,n,r){return{x:e.x+n*(t.x-e.x),y:e.y+n*(t.y-e.y)}}function ZA(e,t,n,r){return{x:e.x+n*(t.x-e.x),y:r==="middle"?n<.5?e.y:t.y:r==="after"?n<1?e.y:t.y:n>0?t.y:e.y}}function JA(e,t,n,r){const i={x:e.cp2x,y:e.cp2y},o={x:t.cp1x,y:t.cp1y},s=vi(e,i,n),a=vi(i,o,n),l=vi(o,t,n),c=vi(s,a,n),u=vi(a,l,n);return vi(c,u,n)}const e8=function(e,t){return{x(n){return e+e+t-n},setWidth(n){t=n},textAlign(n){return n==="center"?n:n==="right"?"left":"right"},xPlus(n,r){return n-r},leftForLtr(n,r){return n-r}}},t8=function(){return{x(e){return e},setWidth(e){},textAlign(e){return e},xPlus(e,t){return e+t},leftForLtr(e,t){return e}}};function No(e,t,n){return e?e8(t,n):t8()}function mS(e,t){let n,r;(t==="ltr"||t==="rtl")&&(n=e.canvas.style,r=[n.getPropertyValue("direction"),n.getPropertyPriority("direction")],n.setProperty("direction",t,"important"),e.prevTextDirection=r)}function gS(e,t){t!==void 0&&(delete e.prevTextDirection,e.canvas.style.setProperty("direction",t[0],t[1]))}function vS(e){return e==="angle"?{between:Ta,compare:nA,normalize:Ut}:{between:ar,compare:(t,n)=>t-n,normalize:t=>t}}function Ey({start:e,end:t,count:n,loop:r,style:i}){return{start:e%n,end:t%n,loop:r&&(t-e+1)%n===0,style:i}}function n8(e,t,n){const{property:r,start:i,end:o}=n,{between:s,normalize:a}=vS(r),l=t.length;let{start:c,end:u,loop:d}=e,h,m;if(d){for(c+=l,u+=l,h=0,m=l;h<m&&s(a(t[c%l][r]),i,o);++h)c--,u--;c%=l,u%=l}return u<c&&(u+=l),{start:c,end:u,loop:d,style:e.style}}function yS(e,t,n){if(!n)return[e];const{property:r,start:i,end:o}=n,s=t.length,{compare:a,between:l,normalize:c}=vS(r),{start:u,end:d,loop:h,style:m}=n8(e,t,n),y=[];let v=!1,p=null,g,x,b;const w=()=>l(i,b,g)&&a(i,b)!==0,S=()=>a(o,g)===0||l(o,b,g),C=()=>v||w(),P=()=>!v||S();for(let M=u,O=u;M<=d;++M)x=t[M%s],!x.skip&&(g=c(x[r]),g!==b&&(v=l(g,i,o),p===null&&C()&&(p=a(g,i)===0?M:O),p!==null&&P()&&(y.push(Ey({start:p,end:M,loop:h,count:s,style:m})),p=null),O=M,b=g));return p!==null&&y.push(Ey({start:p,end:d,loop:h,count:s,style:m})),y}function xS(e,t){const n=[],r=e.segments;for(let i=0;i<r.length;i++){const o=yS(r[i],e.points,t);o.length&&n.push(...o)}return n}function r8(e,t,n,r){let i=0,o=t-1;if(n&&!r)for(;i<t&&!e[i].skip;)i++;for(;i<t&&e[i].skip;)i++;for(i%=t,n&&(o+=i);o>i&&e[o%t].skip;)o--;return o%=t,{start:i,end:o}}function i8(e,t,n,r){const i=e.length,o=[];let s=t,a=e[t],l;for(l=t+1;l<=n;++l){const c=e[l%i];c.skip||c.stop?a.skip||(r=!1,o.push({start:t%i,end:(l-1)%i,loop:r}),t=s=c.stop?l:null):(s=l,a.skip&&(t=l)),a=c}return s!==null&&o.push({start:t%i,end:s%i,loop:r}),o}function o8(e,t){const n=e.points,r=e.options.spanGaps,i=n.length;if(!i)return[];const o=!!e._loop,{start:s,end:a}=r8(n,i,o,r);if(r===!0)return Oy(e,[{start:s,end:a,loop:o}],n,t);const l=a<s?a+i:a,c=!!e._fullLoop&&s===0&&a===i-1;return Oy(e,i8(n,s,l,c),n,t)}function Oy(e,t,n,r){return!r||!r.setContext||!n?t:s8(e,t,n,r)}function s8(e,t,n,r){const i=e._chart.getContext(),o=Ny(e.options),{_datasetIndex:s,options:{spanGaps:a}}=e,l=n.length,c=[];let u=o,d=t[0].start,h=d;function m(y,v,p,g){const x=a?-1:1;if(y!==v){for(y+=l;n[y%l].skip;)y-=x;for(;n[v%l].skip;)v+=x;y%l!==v%l&&(c.push({start:y%l,end:v%l,loop:p,style:g}),u=g,d=v%l)}}for(const y of t){d=a?d:y.start;let v=n[d%l],p;for(h=d+1;h<=y.end;h++){const g=n[h%l];p=Ny(r.setContext(li(i,{type:"segment",p0:v,p1:g,p0DataIndex:(h-1)%l,p1DataIndex:h%l,datasetIndex:s}))),a8(p,u)&&m(d,h-1,y.loop,u),v=g,u=p}d<h-1&&m(d,h-1,y.loop,u)}return c}function Ny(e){return{backgroundColor:e.backgroundColor,borderCapStyle:e.borderCapStyle,borderDash:e.borderDash,borderDashOffset:e.borderDashOffset,borderJoinStyle:e.borderJoinStyle,borderWidth:e.borderWidth,borderColor:e.borderColor}}function a8(e,t){if(!t)return!1;const n=[],r=function(i,o){return Gg(o)?(n.includes(o)||n.push(o),n.indexOf(o)):o};return JSON.stringify(e,r)!==JSON.stringify(t,r)}/*!
 * Chart.js v4.4.3
 * https://www.chartjs.org
 * (c) 2024 Chart.js Contributors
 * Released under the MIT License
 */class l8{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(t,n,r,i){const o=n.listeners[i],s=n.duration;o.forEach(a=>a({chart:t,initial:n.initial,numSteps:s,currentStep:Math.min(r-n.start,s)}))}_refresh(){this._request||(this._running=!0,this._request=nS.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(t=Date.now()){let n=0;this._charts.forEach((r,i)=>{if(!r.running||!r.items.length)return;const o=r.items;let s=o.length-1,a=!1,l;for(;s>=0;--s)l=o[s],l._active?(l._total>r.duration&&(r.duration=l._total),l.tick(t),a=!0):(o[s]=o[o.length-1],o.pop());a&&(i.draw(),this._notify(i,r,t,"progress")),o.length||(r.running=!1,this._notify(i,r,t,"complete"),r.initial=!1),n+=o.length}),this._lastDate=t,n===0&&(this._running=!1)}_getAnims(t){const n=this._charts;let r=n.get(t);return r||(r={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},n.set(t,r)),r}listen(t,n,r){this._getAnims(t).listeners[n].push(r)}add(t,n){!n||!n.length||this._getAnims(t).items.push(...n)}has(t){return this._getAnims(t).items.length>0}start(t){const n=this._charts.get(t);!n||(n.running=!0,n.start=Date.now(),n.duration=n.items.reduce((r,i)=>Math.max(r,i._duration),0),this._refresh())}running(t){if(!this._running)return!1;const n=this._charts.get(t);return!(!n||!n.running||!n.items.length)}stop(t){const n=this._charts.get(t);if(!n||!n.items.length)return;const r=n.items;let i=r.length-1;for(;i>=0;--i)r[i].cancel();n.items=[],this._notify(t,n,Date.now(),"complete")}remove(t){return this._charts.delete(t)}}var er=new l8;const Ty="transparent",c8={boolean(e,t,n){return n>.5?t:e},color(e,t,n){const r=wy(e||Ty),i=r.valid&&wy(t||Ty);return i&&i.valid?i.mix(r,n).hexString():t},number(e,t,n){return e+(t-e)*n}};class u8{constructor(t,n,r,i){const o=n[r];i=Ns([t.to,i,o,t.from]);const s=Ns([t.from,o,i]);this._active=!0,this._fn=t.fn||c8[t.type||typeof s],this._easing=Zs[t.easing]||Zs.linear,this._start=Math.floor(Date.now()+(t.delay||0)),this._duration=this._total=Math.floor(t.duration),this._loop=!!t.loop,this._target=n,this._prop=r,this._from=s,this._to=i,this._promises=void 0}active(){return this._active}update(t,n,r){if(this._active){this._notify(!1);const i=this._target[this._prop],o=r-this._start,s=this._duration-o;this._start=r,this._duration=Math.floor(Math.max(s,t.duration)),this._total+=o,this._loop=!!t.loop,this._to=Ns([t.to,n,i,t.from]),this._from=Ns([t.from,i,n])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(t){const n=t-this._start,r=this._duration,i=this._prop,o=this._from,s=this._loop,a=this._to;let l;if(this._active=o!==a&&(s||n<r),!this._active){this._target[i]=a,this._notify(!0);return}if(n<0){this._target[i]=o;return}l=n/r%2,l=s&&l>1?2-l:l,l=this._easing(Math.min(1,Math.max(0,l))),this._target[i]=this._fn(o,a,l)}wait(){const t=this._promises||(this._promises=[]);return new Promise((n,r)=>{t.push({res:n,rej:r})})}_notify(t){const n=t?"res":"rej",r=this._promises||[];for(let i=0;i<r.length;i++)r[i][n]()}}class bS{constructor(t,n){this._chart=t,this._properties=new Map,this.configure(n)}configure(t){if(!ue(t))return;const n=Object.keys(qe.animation),r=this._properties;Object.getOwnPropertyNames(t).forEach(i=>{const o=t[i];if(!ue(o))return;const s={};for(const a of n)s[a]=o[a];(Le(o.properties)&&o.properties||[i]).forEach(a=>{(a===i||!r.has(a))&&r.set(a,s)})})}_animateOptions(t,n){const r=n.options,i=f8(t,r);if(!i)return[];const o=this._createAnimations(i,r);return r.$shared&&d8(t.options.$animations,r).then(()=>{t.options=r},()=>{}),o}_createAnimations(t,n){const r=this._properties,i=[],o=t.$animations||(t.$animations={}),s=Object.keys(n),a=Date.now();let l;for(l=s.length-1;l>=0;--l){const c=s[l];if(c.charAt(0)==="$")continue;if(c==="options"){i.push(...this._animateOptions(t,n));continue}const u=n[c];let d=o[c];const h=r.get(c);if(d)if(h&&d.active()){d.update(h,u,a);continue}else d.cancel();if(!h||!h.duration){t[c]=u;continue}o[c]=d=new u8(h,t,c,u),i.push(d)}return i}update(t,n){if(this._properties.size===0){Object.assign(t,n);return}const r=this._createAnimations(t,n);if(r.length)return er.add(this._chart,r),!0}}function d8(e,t){const n=[],r=Object.keys(t);for(let i=0;i<r.length;i++){const o=e[r[i]];o&&o.active()&&n.push(o.wait())}return Promise.all(n)}function f8(e,t){if(!t)return;let n=e.options;if(!n){e.options=t;return}return n.$shared&&(e.options=n=Object.assign({},n,{$shared:!1,$animations:{}})),n}function Ry(e,t){const n=e&&e.options||{},r=n.reverse,i=n.min===void 0?t:0,o=n.max===void 0?t:0;return{start:r?o:i,end:r?i:o}}function h8(e,t,n){if(n===!1)return!1;const r=Ry(e,n),i=Ry(t,n);return{top:i.end,right:r.end,bottom:i.start,left:r.start}}function p8(e){let t,n,r,i;return ue(e)?(t=e.top,n=e.right,r=e.bottom,i=e.left):t=n=r=i=e,{top:t,right:n,bottom:r,left:i,disabled:e===!1}}function wS(e,t){const n=[],r=e._getSortedDatasetMetas(t);let i,o;for(i=0,o=r.length;i<o;++i)n.push(r[i].index);return n}function $y(e,t,n,r={}){const i=e.keys,o=r.mode==="single";let s,a,l,c;if(t!==null){for(s=0,a=i.length;s<a;++s){if(l=+i[s],l===n){if(r.all)continue;break}c=e.values[l],Ge(c)&&(o||t===0||Yn(t)===Yn(c))&&(t+=c)}return t}}function m8(e,t){const{iScale:n,vScale:r}=t,i=n.axis==="x"?"x":"y",o=r.axis==="x"?"x":"y",s=Object.keys(e),a=new Array(s.length);let l,c,u;for(l=0,c=s.length;l<c;++l)u=s[l],a[l]={[i]:u,[o]:e[u]};return a}function Ly(e,t){const n=e&&e.options.stacked;return n||n===void 0&&t.stack!==void 0}function g8(e,t,n){return`${e.id}.${t.id}.${n.stack||n.type}`}function v8(e){const{min:t,max:n,minDefined:r,maxDefined:i}=e.getUserBounds();return{min:r?t:Number.NEGATIVE_INFINITY,max:i?n:Number.POSITIVE_INFINITY}}function y8(e,t,n){const r=e[t]||(e[t]={});return r[n]||(r[n]={})}function Ay(e,t,n,r){for(const i of t.getMatchingVisibleMetas(r).reverse()){const o=e[i.index];if(n&&o>0||!n&&o<0)return i.index}return null}function zy(e,t){const{chart:n,_cachedMeta:r}=e,i=n._stacks||(n._stacks={}),{iScale:o,vScale:s,index:a}=r,l=o.axis,c=s.axis,u=g8(o,s,r),d=t.length;let h;for(let m=0;m<d;++m){const y=t[m],{[l]:v,[c]:p}=y,g=y._stacks||(y._stacks={});h=g[c]=y8(i,u,v),h[a]=p,h._top=Ay(h,s,!0,r.type),h._bottom=Ay(h,s,!1,r.type);const x=h._visualValues||(h._visualValues={});x[a]=p}}function Kf(e,t){const n=e.scales;return Object.keys(n).filter(r=>n[r].axis===t).shift()}function x8(e,t){return li(e,{active:!1,dataset:void 0,datasetIndex:t,index:t,mode:"default",type:"dataset"})}function b8(e,t,n){return li(e,{active:!1,dataIndex:t,parsed:void 0,raw:void 0,element:n,index:t,mode:"default",type:"data"})}function ys(e,t){const n=e.controller.index,r=e.vScale&&e.vScale.axis;if(!!r){t=t||e._parsed;for(const i of t){const o=i._stacks;if(!o||o[r]===void 0||o[r][n]===void 0)return;delete o[r][n],o[r]._visualValues!==void 0&&o[r]._visualValues[n]!==void 0&&delete o[r]._visualValues[n]}}}const Gf=e=>e==="reset"||e==="none",Iy=(e,t)=>t?e:Object.assign({},e),w8=(e,t,n)=>e&&!t.hidden&&t._stacked&&{keys:wS(n,!0),values:null};class Pn{constructor(t,n){this.chart=t,this._ctx=t.ctx,this.index=n,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){const t=this._cachedMeta;this.configure(),this.linkScales(),t._stacked=Ly(t.vScale,t),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled("filler")&&console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")}updateIndex(t){this.index!==t&&ys(this._cachedMeta),this.index=t}linkScales(){const t=this.chart,n=this._cachedMeta,r=this.getDataset(),i=(d,h,m,y)=>d==="x"?h:d==="r"?y:m,o=n.xAxisID=oe(r.xAxisID,Kf(t,"x")),s=n.yAxisID=oe(r.yAxisID,Kf(t,"y")),a=n.rAxisID=oe(r.rAxisID,Kf(t,"r")),l=n.indexAxis,c=n.iAxisID=i(l,o,s,a),u=n.vAxisID=i(l,s,o,a);n.xScale=this.getScaleForId(o),n.yScale=this.getScaleForId(s),n.rScale=this.getScaleForId(a),n.iScale=this.getScaleForId(c),n.vScale=this.getScaleForId(u)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(t){return this.chart.scales[t]}_getOtherScale(t){const n=this._cachedMeta;return t===n.iScale?n.vScale:n.iScale}reset(){this._update("reset")}_destroy(){const t=this._cachedMeta;this._data&&yy(this._data,this),t._stacked&&ys(t)}_dataCheck(){const t=this.getDataset(),n=t.data||(t.data=[]),r=this._data;if(ue(n)){const i=this._cachedMeta;this._data=m8(n,i)}else if(r!==n){if(r){yy(r,this);const i=this._cachedMeta;ys(i),i._parsed=[]}n&&Object.isExtensible(n)&&sA(n,this),this._syncList=[],this._data=n}}addElements(){const t=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(t.dataset=new this.datasetElementType)}buildOrUpdateElements(t){const n=this._cachedMeta,r=this.getDataset();let i=!1;this._dataCheck();const o=n._stacked;n._stacked=Ly(n.vScale,n),n.stack!==r.stack&&(i=!0,ys(n),n.stack=r.stack),this._resyncElements(t),(i||o!==n._stacked)&&zy(this,n._parsed)}configure(){const t=this.chart.config,n=t.datasetScopeKeys(this._type),r=t.getOptionScopes(this.getDataset(),n,!0);this.options=t.createResolver(r,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(t,n){const{_cachedMeta:r,_data:i}=this,{iScale:o,_stacked:s}=r,a=o.axis;let l=t===0&&n===i.length?!0:r._sorted,c=t>0&&r._parsed[t-1],u,d,h;if(this._parsing===!1)r._parsed=i,r._sorted=!0,h=i;else{Le(i[t])?h=this.parseArrayData(r,i,t,n):ue(i[t])?h=this.parseObjectData(r,i,t,n):h=this.parsePrimitiveData(r,i,t,n);const m=()=>d[a]===null||c&&d[a]<c[a];for(u=0;u<n;++u)r._parsed[u+t]=d=h[u],l&&(m()&&(l=!1),c=d);r._sorted=l}s&&zy(this,h)}parsePrimitiveData(t,n,r,i){const{iScale:o,vScale:s}=t,a=o.axis,l=s.axis,c=o.getLabels(),u=o===s,d=new Array(i);let h,m,y;for(h=0,m=i;h<m;++h)y=h+r,d[h]={[a]:u||o.parse(c[y],y),[l]:s.parse(n[y],y)};return d}parseArrayData(t,n,r,i){const{xScale:o,yScale:s}=t,a=new Array(i);let l,c,u,d;for(l=0,c=i;l<c;++l)u=l+r,d=n[u],a[l]={x:o.parse(d[0],u),y:s.parse(d[1],u)};return a}parseObjectData(t,n,r,i){const{xScale:o,yScale:s}=t,{xAxisKey:a="x",yAxisKey:l="y"}=this._parsing,c=new Array(i);let u,d,h,m;for(u=0,d=i;u<d;++u)h=u+r,m=n[h],c[u]={x:o.parse(ti(m,a),h),y:s.parse(ti(m,l),h)};return c}getParsed(t){return this._cachedMeta._parsed[t]}getDataElement(t){return this._cachedMeta.data[t]}applyStack(t,n,r){const i=this.chart,o=this._cachedMeta,s=n[t.axis],a={keys:wS(i,!0),values:n._stacks[t.axis]._visualValues};return $y(a,s,o.index,{mode:r})}updateRangeFromParsed(t,n,r,i){const o=r[n.axis];let s=o===null?NaN:o;const a=i&&r._stacks[n.axis];i&&a&&(i.values=a,s=$y(i,o,this._cachedMeta.index)),t.min=Math.min(t.min,s),t.max=Math.max(t.max,s)}getMinMax(t,n){const r=this._cachedMeta,i=r._parsed,o=r._sorted&&t===r.iScale,s=i.length,a=this._getOtherScale(t),l=w8(n,r,this.chart),c={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:u,max:d}=v8(a);let h,m;function y(){m=i[h];const v=m[a.axis];return!Ge(m[t.axis])||u>v||d<v}for(h=0;h<s&&!(!y()&&(this.updateRangeFromParsed(c,t,m,l),o));++h);if(o){for(h=s-1;h>=0;--h)if(!y()){this.updateRangeFromParsed(c,t,m,l);break}}return c}getAllParsedValues(t){const n=this._cachedMeta._parsed,r=[];let i,o,s;for(i=0,o=n.length;i<o;++i)s=n[i][t.axis],Ge(s)&&r.push(s);return r}getMaxOverflow(){return!1}getLabelAndValue(t){const n=this._cachedMeta,r=n.iScale,i=n.vScale,o=this.getParsed(t);return{label:r?""+r.getLabelForValue(o[r.axis]):"",value:i?""+i.getLabelForValue(o[i.axis]):""}}_update(t){const n=this._cachedMeta;this.update(t||"default"),n._clip=p8(oe(this.options.clip,h8(n.xScale,n.yScale,this.getMaxOverflow())))}update(t){}draw(){const t=this._ctx,n=this.chart,r=this._cachedMeta,i=r.data||[],o=n.chartArea,s=[],a=this._drawStart||0,l=this._drawCount||i.length-a,c=this.options.drawActiveElementsOnTop;let u;for(r.dataset&&r.dataset.draw(t,o,a,l),u=a;u<a+l;++u){const d=i[u];d.hidden||(d.active&&c?s.push(d):d.draw(t,o))}for(u=0;u<s.length;++u)s[u].draw(t,o)}getStyle(t,n){const r=n?"active":"default";return t===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(r):this.resolveDataElementOptions(t||0,r)}getContext(t,n,r){const i=this.getDataset();let o;if(t>=0&&t<this._cachedMeta.data.length){const s=this._cachedMeta.data[t];o=s.$context||(s.$context=b8(this.getContext(),t,s)),o.parsed=this.getParsed(t),o.raw=i.data[t],o.index=o.dataIndex=t}else o=this.$context||(this.$context=x8(this.chart.getContext(),this.index)),o.dataset=i,o.index=o.datasetIndex=this.index;return o.active=!!n,o.mode=r,o}resolveDatasetElementOptions(t){return this._resolveElementOptions(this.datasetElementType.id,t)}resolveDataElementOptions(t,n){return this._resolveElementOptions(this.dataElementType.id,n,t)}_resolveElementOptions(t,n="default",r){const i=n==="active",o=this._cachedDataOpts,s=t+"-"+n,a=o[s],l=this.enableOptionSharing&&Na(r);if(a)return Iy(a,l);const c=this.chart.config,u=c.datasetElementScopeKeys(this._type,t),d=i?[`${t}Hover`,"hover",t,""]:[t,""],h=c.getOptionScopes(this.getDataset(),u),m=Object.keys(qe.elements[t]),y=()=>this.getContext(r,i,n),v=c.resolveNamedOptions(h,m,y,d);return v.$shared&&(v.$shared=l,o[s]=Object.freeze(Iy(v,l))),v}_resolveAnimations(t,n,r){const i=this.chart,o=this._cachedDataOpts,s=`animation-${n}`,a=o[s];if(a)return a;let l;if(i.options.animation!==!1){const u=this.chart.config,d=u.datasetAnimationScopeKeys(this._type,n),h=u.getOptionScopes(this.getDataset(),d);l=u.createResolver(h,this.getContext(t,r,n))}const c=new bS(i,l&&l.animations);return l&&l._cacheable&&(o[s]=Object.freeze(c)),c}getSharedOptions(t){if(!!t.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},t))}includeOptions(t,n){return!n||Gf(t)||this.chart._animationsDisabled}_getSharedOptions(t,n){const r=this.resolveDataElementOptions(t,n),i=this._sharedOptions,o=this.getSharedOptions(r),s=this.includeOptions(n,o)||o!==i;return this.updateSharedOptions(o,n,r),{sharedOptions:o,includeOptions:s}}updateElement(t,n,r,i){Gf(i)?Object.assign(t,r):this._resolveAnimations(n,i).update(t,r)}updateSharedOptions(t,n,r){t&&!Gf(n)&&this._resolveAnimations(void 0,n).update(t,r)}_setStyle(t,n,r,i){t.active=i;const o=this.getStyle(n,i);this._resolveAnimations(n,r,i).update(t,{options:!i&&this.getSharedOptions(o)||o})}removeHoverStyle(t,n,r){this._setStyle(t,r,"active",!1)}setHoverStyle(t,n,r){this._setStyle(t,r,"active",!0)}_removeDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!1)}_setDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!0)}_resyncElements(t){const n=this._data,r=this._cachedMeta.data;for(const[a,l,c]of this._syncList)this[a](l,c);this._syncList=[];const i=r.length,o=n.length,s=Math.min(o,i);s&&this.parse(0,s),o>i?this._insertElements(i,o-i,t):o<i&&this._removeElements(o,i-o)}_insertElements(t,n,r=!0){const i=this._cachedMeta,o=i.data,s=t+n;let a;const l=c=>{for(c.length+=n,a=c.length-1;a>=s;a--)c[a]=c[a-n]};for(l(o),a=t;a<s;++a)o[a]=new this.dataElementType;this._parsing&&l(i._parsed),this.parse(t,n),r&&this.updateElements(o,t,n,"reset")}updateElements(t,n,r,i){}_removeElements(t,n){const r=this._cachedMeta;if(this._parsing){const i=r._parsed.splice(t,n);r._stacked&&ys(r,i)}r.data.splice(t,n)}_sync(t){if(this._parsing)this._syncList.push(t);else{const[n,r,i]=t;this[n](r,i)}this.chart._dataChanges.push([this.index,...t])}_onDataPush(){const t=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-t,t])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(t,n){n&&this._sync(["_removeElements",t,n]);const r=arguments.length-2;r&&this._sync(["_insertElements",t,r])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}W(Pn,"defaults",{}),W(Pn,"datasetElementType",null),W(Pn,"dataElementType",null);function _8(e,t){if(!e._cache.$bar){const n=e.getMatchingVisibleMetas(t);let r=[];for(let i=0,o=n.length;i<o;i++)r=r.concat(n[i].controller.getAllParsedValues(e));e._cache.$bar=tS(r.sort((i,o)=>i-o))}return e._cache.$bar}function S8(e){const t=e.iScale,n=_8(t,e.type);let r=t._length,i,o,s,a;const l=()=>{s===32767||s===-32768||(Na(a)&&(r=Math.min(r,Math.abs(s-a)||r)),a=s)};for(i=0,o=n.length;i<o;++i)s=t.getPixelForValue(n[i]),l();for(a=void 0,i=0,o=t.ticks.length;i<o;++i)s=t.getPixelForTick(i),l();return r}function k8(e,t,n,r){const i=n.barThickness;let o,s;return ge(i)?(o=t.min*n.categoryPercentage,s=n.barPercentage):(o=i*r,s=1),{chunk:o/r,ratio:s,start:t.pixels[e]-o/2}}function C8(e,t,n,r){const i=t.pixels,o=i[e];let s=e>0?i[e-1]:null,a=e<i.length-1?i[e+1]:null;const l=n.categoryPercentage;s===null&&(s=o-(a===null?t.end-t.start:a-o)),a===null&&(a=o+o-s);const c=o-(o-Math.min(s,a))/2*l;return{chunk:Math.abs(a-s)/2*l/r,ratio:n.barPercentage,start:c}}function P8(e,t,n,r){const i=n.parse(e[0],r),o=n.parse(e[1],r),s=Math.min(i,o),a=Math.max(i,o);let l=s,c=a;Math.abs(s)>Math.abs(a)&&(l=a,c=s),t[n.axis]=c,t._custom={barStart:l,barEnd:c,start:i,end:o,min:s,max:a}}function _S(e,t,n,r){return Le(e)?P8(e,t,n,r):t[n.axis]=n.parse(e,r),t}function Dy(e,t,n,r){const i=e.iScale,o=e.vScale,s=i.getLabels(),a=i===o,l=[];let c,u,d,h;for(c=n,u=n+r;c<u;++c)h=t[c],d={},d[i.axis]=a||i.parse(s[c],c),l.push(_S(h,d,o,c));return l}function qf(e){return e&&e.barStart!==void 0&&e.barEnd!==void 0}function M8(e,t,n){return e!==0?Yn(e):(t.isHorizontal()?1:-1)*(t.min>=n?1:-1)}function E8(e){let t,n,r,i,o;return e.horizontal?(t=e.base>e.x,n="left",r="right"):(t=e.base<e.y,n="bottom",r="top"),t?(i="end",o="start"):(i="start",o="end"),{start:n,end:r,reverse:t,top:i,bottom:o}}function O8(e,t,n,r){let i=t.borderSkipped;const o={};if(!i){e.borderSkipped=o;return}if(i===!0){e.borderSkipped={top:!0,right:!0,bottom:!0,left:!0};return}const{start:s,end:a,reverse:l,top:c,bottom:u}=E8(e);i==="middle"&&n&&(e.enableBorderRadius=!0,(n._top||0)===r?i=c:(n._bottom||0)===r?i=u:(o[Fy(u,s,a,l)]=!0,i=c)),o[Fy(i,s,a,l)]=!0,e.borderSkipped=o}function Fy(e,t,n,r){return r?(e=N8(e,t,n),e=jy(e,n,t)):e=jy(e,t,n),e}function N8(e,t,n){return e===t?n:e===n?t:e}function jy(e,t,n){return e==="start"?t:e==="end"?n:e}function T8(e,{inflateAmount:t},n){e.inflateAmount=t==="auto"?n===1?.33:0:t}class wc extends Pn{parsePrimitiveData(t,n,r,i){return Dy(t,n,r,i)}parseArrayData(t,n,r,i){return Dy(t,n,r,i)}parseObjectData(t,n,r,i){const{iScale:o,vScale:s}=t,{xAxisKey:a="x",yAxisKey:l="y"}=this._parsing,c=o.axis==="x"?a:l,u=s.axis==="x"?a:l,d=[];let h,m,y,v;for(h=r,m=r+i;h<m;++h)v=n[h],y={},y[o.axis]=o.parse(ti(v,c),h),d.push(_S(ti(v,u),y,s,h));return d}updateRangeFromParsed(t,n,r,i){super.updateRangeFromParsed(t,n,r,i);const o=r._custom;o&&n===this._cachedMeta.vScale&&(t.min=Math.min(t.min,o.min),t.max=Math.max(t.max,o.max))}getMaxOverflow(){return 0}getLabelAndValue(t){const n=this._cachedMeta,{iScale:r,vScale:i}=n,o=this.getParsed(t),s=o._custom,a=qf(s)?"["+s.start+", "+s.end+"]":""+i.getLabelForValue(o[i.axis]);return{label:""+r.getLabelForValue(o[r.axis]),value:a}}initialize(){this.enableOptionSharing=!0,super.initialize();const t=this._cachedMeta;t.stack=this.getDataset().stack}update(t){const n=this._cachedMeta;this.updateElements(n.data,0,n.data.length,t)}updateElements(t,n,r,i){const o=i==="reset",{index:s,_cachedMeta:{vScale:a}}=this,l=a.getBasePixel(),c=a.isHorizontal(),u=this._getRuler(),{sharedOptions:d,includeOptions:h}=this._getSharedOptions(n,i);for(let m=n;m<n+r;m++){const y=this.getParsed(m),v=o||ge(y[a.axis])?{base:l,head:l}:this._calculateBarValuePixels(m),p=this._calculateBarIndexPixels(m,u),g=(y._stacks||{})[a.axis],x={horizontal:c,base:v.base,enableBorderRadius:!g||qf(y._custom)||s===g._top||s===g._bottom,x:c?v.head:p.center,y:c?p.center:v.head,height:c?p.size:Math.abs(v.size),width:c?Math.abs(v.size):p.size};h&&(x.options=d||this.resolveDataElementOptions(m,t[m].active?"active":i));const b=x.options||t[m].options;O8(x,b,g,s),T8(x,b,u.ratio),this.updateElement(t[m],m,x,i)}}_getStacks(t,n){const{iScale:r}=this._cachedMeta,i=r.getMatchingVisibleMetas(this._type).filter(l=>l.controller.options.grouped),o=r.options.stacked,s=[],a=l=>{const c=l.controller.getParsed(n),u=c&&c[l.vScale.axis];if(ge(u)||isNaN(u))return!0};for(const l of i)if(!(n!==void 0&&a(l))&&((o===!1||s.indexOf(l.stack)===-1||o===void 0&&l.stack===void 0)&&s.push(l.stack),l.index===t))break;return s.length||s.push(void 0),s}_getStackCount(t){return this._getStacks(void 0,t).length}_getStackIndex(t,n,r){const i=this._getStacks(t,r),o=n!==void 0?i.indexOf(n):-1;return o===-1?i.length-1:o}_getRuler(){const t=this.options,n=this._cachedMeta,r=n.iScale,i=[];let o,s;for(o=0,s=n.data.length;o<s;++o)i.push(r.getPixelForValue(this.getParsed(o)[r.axis],o));const a=t.barThickness;return{min:a||S8(n),pixels:i,start:r._startPixel,end:r._endPixel,stackCount:this._getStackCount(),scale:r,grouped:t.grouped,ratio:a?1:t.categoryPercentage*t.barPercentage}}_calculateBarValuePixels(t){const{_cachedMeta:{vScale:n,_stacked:r,index:i},options:{base:o,minBarLength:s}}=this,a=o||0,l=this.getParsed(t),c=l._custom,u=qf(c);let d=l[n.axis],h=0,m=r?this.applyStack(n,l,r):d,y,v;m!==d&&(h=m-d,m=d),u&&(d=c.barStart,m=c.barEnd-c.barStart,d!==0&&Yn(d)!==Yn(c.barEnd)&&(h=0),h+=d);const p=!ge(o)&&!u?o:h;let g=n.getPixelForValue(p);if(this.chart.getDataVisibility(t)?y=n.getPixelForValue(h+m):y=g,v=y-g,Math.abs(v)<s){v=M8(v,n,a)*s,d===a&&(g-=v/2);const x=n.getPixelForDecimal(0),b=n.getPixelForDecimal(1),w=Math.min(x,b),S=Math.max(x,b);g=Math.max(Math.min(g,S),w),y=g+v,r&&!u&&(l._stacks[n.axis]._visualValues[i]=n.getValueForPixel(y)-n.getValueForPixel(g))}if(g===n.getPixelForValue(a)){const x=Yn(v)*n.getLineWidthForValue(a)/2;g+=x,v-=x}return{size:v,base:g,head:y,center:y+v/2}}_calculateBarIndexPixels(t,n){const r=n.scale,i=this.options,o=i.skipNull,s=oe(i.maxBarThickness,1/0);let a,l;if(n.grouped){const c=o?this._getStackCount(t):n.stackCount,u=i.barThickness==="flex"?C8(t,n,i,c):k8(t,n,i,c),d=this._getStackIndex(this.index,this._cachedMeta.stack,o?t:void 0);a=u.start+u.chunk*d+u.chunk/2,l=Math.min(s,u.chunk*u.ratio)}else a=r.getPixelForValue(this.getParsed(t)[r.axis],t),l=Math.min(s,n.min*n.ratio);return{base:a-l/2,head:a+l/2,center:a,size:l}}draw(){const t=this._cachedMeta,n=t.vScale,r=t.data,i=r.length;let o=0;for(;o<i;++o)this.getParsed(o)[n.axis]!==null&&!r[o].hidden&&r[o].draw(this._ctx)}}W(wc,"id","bar"),W(wc,"defaults",{datasetElementType:!1,dataElementType:"bar",categoryPercentage:.8,barPercentage:.9,grouped:!0,animations:{numbers:{type:"number",properties:["x","y","base","width","height"]}}}),W(wc,"overrides",{scales:{_index_:{type:"category",offset:!0,grid:{offset:!0}},_value_:{type:"linear",beginAtZero:!0}}});class _c extends Pn{initialize(){this.enableOptionSharing=!0,super.initialize()}parsePrimitiveData(t,n,r,i){const o=super.parsePrimitiveData(t,n,r,i);for(let s=0;s<o.length;s++)o[s]._custom=this.resolveDataElementOptions(s+r).radius;return o}parseArrayData(t,n,r,i){const o=super.parseArrayData(t,n,r,i);for(let s=0;s<o.length;s++){const a=n[r+s];o[s]._custom=oe(a[2],this.resolveDataElementOptions(s+r).radius)}return o}parseObjectData(t,n,r,i){const o=super.parseObjectData(t,n,r,i);for(let s=0;s<o.length;s++){const a=n[r+s];o[s]._custom=oe(a&&a.r&&+a.r,this.resolveDataElementOptions(s+r).radius)}return o}getMaxOverflow(){const t=this._cachedMeta.data;let n=0;for(let r=t.length-1;r>=0;--r)n=Math.max(n,t[r].size(this.resolveDataElementOptions(r))/2);return n>0&&n}getLabelAndValue(t){const n=this._cachedMeta,r=this.chart.data.labels||[],{xScale:i,yScale:o}=n,s=this.getParsed(t),a=i.getLabelForValue(s.x),l=o.getLabelForValue(s.y),c=s._custom;return{label:r[t]||"",value:"("+a+", "+l+(c?", "+c:"")+")"}}update(t){const n=this._cachedMeta.data;this.updateElements(n,0,n.length,t)}updateElements(t,n,r,i){const o=i==="reset",{iScale:s,vScale:a}=this._cachedMeta,{sharedOptions:l,includeOptions:c}=this._getSharedOptions(n,i),u=s.axis,d=a.axis;for(let h=n;h<n+r;h++){const m=t[h],y=!o&&this.getParsed(h),v={},p=v[u]=o?s.getPixelForDecimal(.5):s.getPixelForValue(y[u]),g=v[d]=o?a.getBasePixel():a.getPixelForValue(y[d]);v.skip=isNaN(p)||isNaN(g),c&&(v.options=l||this.resolveDataElementOptions(h,m.active?"active":i),o&&(v.options.radius=0)),this.updateElement(m,h,v,i)}}resolveDataElementOptions(t,n){const r=this.getParsed(t);let i=super.resolveDataElementOptions(t,n);i.$shared&&(i=Object.assign({},i,{$shared:!1}));const o=i.radius;return n!=="active"&&(i.radius=0),i.radius+=oe(r&&r._custom,o),i}}W(_c,"id","bubble"),W(_c,"defaults",{datasetElementType:!1,dataElementType:"point",animations:{numbers:{type:"number",properties:["x","y","borderWidth","radius"]}}}),W(_c,"overrides",{scales:{x:{type:"linear"},y:{type:"linear"}}});function R8(e,t,n){let r=1,i=1,o=0,s=0;if(t<ze){const a=e,l=a+t,c=Math.cos(a),u=Math.sin(a),d=Math.cos(l),h=Math.sin(l),m=(b,w,S)=>Ta(b,a,l,!0)?1:Math.max(w,w*n,S,S*n),y=(b,w,S)=>Ta(b,a,l,!0)?-1:Math.min(w,w*n,S,S*n),v=m(0,c,d),p=m(Ze,u,h),g=y(Ie,c,d),x=y(Ie+Ze,u,h);r=(v-g)/2,i=(p-x)/2,o=-(v+g)/2,s=-(p+x)/2}return{ratioX:r,ratioY:i,offsetX:o,offsetY:s}}class Nr extends Pn{constructor(t,n){super(t,n),this.enableOptionSharing=!0,this.innerRadius=void 0,this.outerRadius=void 0,this.offsetX=void 0,this.offsetY=void 0}linkScales(){}parse(t,n){const r=this.getDataset().data,i=this._cachedMeta;if(this._parsing===!1)i._parsed=r;else{let o=l=>+r[l];if(ue(r[t])){const{key:l="value"}=this._parsing;o=c=>+ti(r[c],l)}let s,a;for(s=t,a=t+n;s<a;++s)i._parsed[s]=o(s)}}_getRotation(){return kn(this.options.rotation-90)}_getCircumference(){return kn(this.options.circumference)}_getRotationExtents(){let t=ze,n=-ze;for(let r=0;r<this.chart.data.datasets.length;++r)if(this.chart.isDatasetVisible(r)&&this.chart.getDatasetMeta(r).type===this._type){const i=this.chart.getDatasetMeta(r).controller,o=i._getRotation(),s=i._getCircumference();t=Math.min(t,o),n=Math.max(n,o+s)}return{rotation:t,circumference:n-t}}update(t){const n=this.chart,{chartArea:r}=n,i=this._cachedMeta,o=i.data,s=this.getMaxBorderWidth()+this.getMaxOffset(o)+this.options.spacing,a=Math.max((Math.min(r.width,r.height)-s)/2,0),l=Math.min(YL(this.options.cutout,a),1),c=this._getRingWeight(this.index),{circumference:u,rotation:d}=this._getRotationExtents(),{ratioX:h,ratioY:m,offsetX:y,offsetY:v}=R8(d,u,l),p=(r.width-s)/h,g=(r.height-s)/m,x=Math.max(Math.min(p,g)/2,0),b=q_(this.options.radius,x),w=Math.max(b*l,0),S=(b-w)/this._getVisibleDatasetWeightTotal();this.offsetX=y*b,this.offsetY=v*b,i.total=this.calculateTotal(),this.outerRadius=b-S*this._getRingWeightOffset(this.index),this.innerRadius=Math.max(this.outerRadius-S*c,0),this.updateElements(o,0,o.length,t)}_circumference(t,n){const r=this.options,i=this._cachedMeta,o=this._getCircumference();return n&&r.animation.animateRotate||!this.chart.getDataVisibility(t)||i._parsed[t]===null||i.data[t].hidden?0:this.calculateCircumference(i._parsed[t]*o/ze)}updateElements(t,n,r,i){const o=i==="reset",s=this.chart,a=s.chartArea,c=s.options.animation,u=(a.left+a.right)/2,d=(a.top+a.bottom)/2,h=o&&c.animateScale,m=h?0:this.innerRadius,y=h?0:this.outerRadius,{sharedOptions:v,includeOptions:p}=this._getSharedOptions(n,i);let g=this._getRotation(),x;for(x=0;x<n;++x)g+=this._circumference(x,o);for(x=n;x<n+r;++x){const b=this._circumference(x,o),w=t[x],S={x:u+this.offsetX,y:d+this.offsetY,startAngle:g,endAngle:g+b,circumference:b,outerRadius:y,innerRadius:m};p&&(S.options=v||this.resolveDataElementOptions(x,w.active?"active":i)),g+=b,this.updateElement(w,x,S,i)}}calculateTotal(){const t=this._cachedMeta,n=t.data;let r=0,i;for(i=0;i<n.length;i++){const o=t._parsed[i];o!==null&&!isNaN(o)&&this.chart.getDataVisibility(i)&&!n[i].hidden&&(r+=Math.abs(o))}return r}calculateCircumference(t){const n=this._cachedMeta.total;return n>0&&!isNaN(t)?ze*(Math.abs(t)/n):0}getLabelAndValue(t){const n=this._cachedMeta,r=this.chart,i=r.data.labels||[],o=dl(n._parsed[t],r.options.locale);return{label:i[t]||"",value:o}}getMaxBorderWidth(t){let n=0;const r=this.chart;let i,o,s,a,l;if(!t){for(i=0,o=r.data.datasets.length;i<o;++i)if(r.isDatasetVisible(i)){s=r.getDatasetMeta(i),t=s.data,a=s.controller;break}}if(!t)return 0;for(i=0,o=t.length;i<o;++i)l=a.resolveDataElementOptions(i),l.borderAlign!=="inner"&&(n=Math.max(n,l.borderWidth||0,l.hoverBorderWidth||0));return n}getMaxOffset(t){let n=0;for(let r=0,i=t.length;r<i;++r){const o=this.resolveDataElementOptions(r);n=Math.max(n,o.offset||0,o.hoverOffset||0)}return n}_getRingWeightOffset(t){let n=0;for(let r=0;r<t;++r)this.chart.isDatasetVisible(r)&&(n+=this._getRingWeight(r));return n}_getRingWeight(t){return Math.max(oe(this.chart.data.datasets[t].weight,1),0)}_getVisibleDatasetWeightTotal(){return this._getRingWeightOffset(this.chart.data.datasets.length)||1}}W(Nr,"id","doughnut"),W(Nr,"defaults",{datasetElementType:!1,dataElementType:"arc",animation:{animateRotate:!0,animateScale:!1},animations:{numbers:{type:"number",properties:["circumference","endAngle","innerRadius","outerRadius","startAngle","x","y","offset","borderWidth","spacing"]}},cutout:"50%",rotation:0,circumference:360,radius:"100%",spacing:0,indexAxis:"r"}),W(Nr,"descriptors",{_scriptable:t=>t!=="spacing",_indexable:t=>t!=="spacing"&&!t.startsWith("borderDash")&&!t.startsWith("hoverBorderDash")}),W(Nr,"overrides",{aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const n=t.data;if(n.labels.length&&n.datasets.length){const{labels:{pointStyle:r,color:i}}=t.legend.options;return n.labels.map((o,s)=>{const l=t.getDatasetMeta(0).controller.getStyle(s);return{text:o,fillStyle:l.backgroundColor,strokeStyle:l.borderColor,fontColor:i,lineWidth:l.borderWidth,pointStyle:r,hidden:!t.getDataVisibility(s),index:s}})}return[]}},onClick(t,n,r){r.chart.toggleDataVisibility(n.index),r.chart.update()}}}});class ea extends Pn{initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(t){const n=this._cachedMeta,{dataset:r,data:i=[],_dataset:o}=n,s=this.chart._animationsDisabled;let{start:a,count:l}=iS(n,i,s);this._drawStart=a,this._drawCount=l,oS(n)&&(a=0,l=i.length),r._chart=this.chart,r._datasetIndex=this.index,r._decimated=!!o._decimated,r.points=i;const c=this.resolveDatasetElementOptions(t);this.options.showLine||(c.borderWidth=0),c.segment=this.options.segment,this.updateElement(r,void 0,{animated:!s,options:c},t),this.updateElements(i,a,l,t)}updateElements(t,n,r,i){const o=i==="reset",{iScale:s,vScale:a,_stacked:l,_dataset:c}=this._cachedMeta,{sharedOptions:u,includeOptions:d}=this._getSharedOptions(n,i),h=s.axis,m=a.axis,{spanGaps:y,segment:v}=this.options,p=Fo(y)?y:Number.POSITIVE_INFINITY,g=this.chart._animationsDisabled||o||i==="none",x=n+r,b=t.length;let w=n>0&&this.getParsed(n-1);for(let S=0;S<b;++S){const C=t[S],P=g?C:{};if(S<n||S>=x){P.skip=!0;continue}const M=this.getParsed(S),O=ge(M[m]),N=P[h]=s.getPixelForValue(M[h],S),A=P[m]=o||O?a.getBasePixel():a.getPixelForValue(l?this.applyStack(a,M,l):M[m],S);P.skip=isNaN(N)||isNaN(A)||O,P.stop=S>0&&Math.abs(M[h]-w[h])>p,v&&(P.parsed=M,P.raw=c.data[S]),d&&(P.options=u||this.resolveDataElementOptions(S,C.active?"active":i)),g||this.updateElement(C,S,P,i),w=M}}getMaxOverflow(){const t=this._cachedMeta,n=t.dataset,r=n.options&&n.options.borderWidth||0,i=t.data||[];if(!i.length)return r;const o=i[0].size(this.resolveDataElementOptions(0)),s=i[i.length-1].size(this.resolveDataElementOptions(i.length-1));return Math.max(r,o,s)/2}draw(){const t=this._cachedMeta;t.dataset.updateControlPoints(this.chart.chartArea,t.iScale.axis),super.draw()}}W(ea,"id","line"),W(ea,"defaults",{datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1}),W(ea,"overrides",{scales:{_index_:{type:"category"},_value_:{type:"linear"}}});class ta extends Pn{constructor(t,n){super(t,n),this.innerRadius=void 0,this.outerRadius=void 0}getLabelAndValue(t){const n=this._cachedMeta,r=this.chart,i=r.data.labels||[],o=dl(n._parsed[t].r,r.options.locale);return{label:i[t]||"",value:o}}parseObjectData(t,n,r,i){return hS.bind(this)(t,n,r,i)}update(t){const n=this._cachedMeta.data;this._updateRadius(),this.updateElements(n,0,n.length,t)}getMinMax(){const t=this._cachedMeta,n={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY};return t.data.forEach((r,i)=>{const o=this.getParsed(i).r;!isNaN(o)&&this.chart.getDataVisibility(i)&&(o<n.min&&(n.min=o),o>n.max&&(n.max=o))}),n}_updateRadius(){const t=this.chart,n=t.chartArea,r=t.options,i=Math.min(n.right-n.left,n.bottom-n.top),o=Math.max(i/2,0),s=Math.max(r.cutoutPercentage?o/100*r.cutoutPercentage:1,0),a=(o-s)/t.getVisibleDatasetCount();this.outerRadius=o-a*this.index,this.innerRadius=this.outerRadius-a}updateElements(t,n,r,i){const o=i==="reset",s=this.chart,l=s.options.animation,c=this._cachedMeta.rScale,u=c.xCenter,d=c.yCenter,h=c.getIndexAngle(0)-.5*Ie;let m=h,y;const v=360/this.countVisibleElements();for(y=0;y<n;++y)m+=this._computeAngle(y,i,v);for(y=n;y<n+r;y++){const p=t[y];let g=m,x=m+this._computeAngle(y,i,v),b=s.getDataVisibility(y)?c.getDistanceFromCenterForValue(this.getParsed(y).r):0;m=x,o&&(l.animateScale&&(b=0),l.animateRotate&&(g=x=h));const w={x:u,y:d,innerRadius:0,outerRadius:b,startAngle:g,endAngle:x,options:this.resolveDataElementOptions(y,p.active?"active":i)};this.updateElement(p,y,w,i)}}countVisibleElements(){const t=this._cachedMeta;let n=0;return t.data.forEach((r,i)=>{!isNaN(this.getParsed(i).r)&&this.chart.getDataVisibility(i)&&n++}),n}_computeAngle(t,n,r){return this.chart.getDataVisibility(t)?kn(this.resolveDataElementOptions(t,n).angle||r):0}}W(ta,"id","polarArea"),W(ta,"defaults",{dataElementType:"arc",animation:{animateRotate:!0,animateScale:!0},animations:{numbers:{type:"number",properties:["x","y","startAngle","endAngle","innerRadius","outerRadius"]}},indexAxis:"r",startAngle:0}),W(ta,"overrides",{aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const n=t.data;if(n.labels.length&&n.datasets.length){const{labels:{pointStyle:r,color:i}}=t.legend.options;return n.labels.map((o,s)=>{const l=t.getDatasetMeta(0).controller.getStyle(s);return{text:o,fillStyle:l.backgroundColor,strokeStyle:l.borderColor,fontColor:i,lineWidth:l.borderWidth,pointStyle:r,hidden:!t.getDataVisibility(s),index:s}})}return[]}},onClick(t,n,r){r.chart.toggleDataVisibility(n.index),r.chart.update()}}},scales:{r:{type:"radialLinear",angleLines:{display:!1},beginAtZero:!0,grid:{circular:!0},pointLabels:{display:!1},startAngle:0}}});class Np extends Nr{}W(Np,"id","pie"),W(Np,"defaults",{cutout:0,rotation:0,circumference:360,radius:"100%"});class Sc extends Pn{getLabelAndValue(t){const n=this._cachedMeta.vScale,r=this.getParsed(t);return{label:n.getLabels()[t],value:""+n.getLabelForValue(r[n.axis])}}parseObjectData(t,n,r,i){return hS.bind(this)(t,n,r,i)}update(t){const n=this._cachedMeta,r=n.dataset,i=n.data||[],o=n.iScale.getLabels();if(r.points=i,t!=="resize"){const s=this.resolveDatasetElementOptions(t);this.options.showLine||(s.borderWidth=0);const a={_loop:!0,_fullLoop:o.length===i.length,options:s};this.updateElement(r,void 0,a,t)}this.updateElements(i,0,i.length,t)}updateElements(t,n,r,i){const o=this._cachedMeta.rScale,s=i==="reset";for(let a=n;a<n+r;a++){const l=t[a],c=this.resolveDataElementOptions(a,l.active?"active":i),u=o.getPointPositionForValue(a,this.getParsed(a).r),d=s?o.xCenter:u.x,h=s?o.yCenter:u.y,m={x:d,y:h,angle:u.angle,skip:isNaN(d)||isNaN(h),options:c};this.updateElement(l,a,m,i)}}}W(Sc,"id","radar"),W(Sc,"defaults",{datasetElementType:"line",dataElementType:"point",indexAxis:"r",showLine:!0,elements:{line:{fill:"start"}}}),W(Sc,"overrides",{aspectRatio:1,scales:{r:{type:"radialLinear"}}});class kc extends Pn{getLabelAndValue(t){const n=this._cachedMeta,r=this.chart.data.labels||[],{xScale:i,yScale:o}=n,s=this.getParsed(t),a=i.getLabelForValue(s.x),l=o.getLabelForValue(s.y);return{label:r[t]||"",value:"("+a+", "+l+")"}}update(t){const n=this._cachedMeta,{data:r=[]}=n,i=this.chart._animationsDisabled;let{start:o,count:s}=iS(n,r,i);if(this._drawStart=o,this._drawCount=s,oS(n)&&(o=0,s=r.length),this.options.showLine){this.datasetElementType||this.addElements();const{dataset:a,_dataset:l}=n;a._chart=this.chart,a._datasetIndex=this.index,a._decimated=!!l._decimated,a.points=r;const c=this.resolveDatasetElementOptions(t);c.segment=this.options.segment,this.updateElement(a,void 0,{animated:!i,options:c},t)}else this.datasetElementType&&(delete n.dataset,this.datasetElementType=!1);this.updateElements(r,o,s,t)}addElements(){const{showLine:t}=this.options;!this.datasetElementType&&t&&(this.datasetElementType=this.chart.registry.getElement("line")),super.addElements()}updateElements(t,n,r,i){const o=i==="reset",{iScale:s,vScale:a,_stacked:l,_dataset:c}=this._cachedMeta,u=this.resolveDataElementOptions(n,i),d=this.getSharedOptions(u),h=this.includeOptions(i,d),m=s.axis,y=a.axis,{spanGaps:v,segment:p}=this.options,g=Fo(v)?v:Number.POSITIVE_INFINITY,x=this.chart._animationsDisabled||o||i==="none";let b=n>0&&this.getParsed(n-1);for(let w=n;w<n+r;++w){const S=t[w],C=this.getParsed(w),P=x?S:{},M=ge(C[y]),O=P[m]=s.getPixelForValue(C[m],w),N=P[y]=o||M?a.getBasePixel():a.getPixelForValue(l?this.applyStack(a,C,l):C[y],w);P.skip=isNaN(O)||isNaN(N)||M,P.stop=w>0&&Math.abs(C[m]-b[m])>g,p&&(P.parsed=C,P.raw=c.data[w]),h&&(P.options=d||this.resolveDataElementOptions(w,S.active?"active":i)),x||this.updateElement(S,w,P,i),b=C}this.updateSharedOptions(d,i,u)}getMaxOverflow(){const t=this._cachedMeta,n=t.data||[];if(!this.options.showLine){let a=0;for(let l=n.length-1;l>=0;--l)a=Math.max(a,n[l].size(this.resolveDataElementOptions(l))/2);return a>0&&a}const r=t.dataset,i=r.options&&r.options.borderWidth||0;if(!n.length)return i;const o=n[0].size(this.resolveDataElementOptions(0)),s=n[n.length-1].size(this.resolveDataElementOptions(n.length-1));return Math.max(i,o,s)/2}}W(kc,"id","scatter"),W(kc,"defaults",{datasetElementType:!1,dataElementType:"point",showLine:!1,fill:!1}),W(kc,"overrides",{interaction:{mode:"point"},scales:{x:{type:"linear"},y:{type:"linear"}}});var $8=Object.freeze({__proto__:null,BarController:wc,BubbleController:_c,DoughnutController:Nr,LineController:ea,PieController:Np,PolarAreaController:ta,RadarController:Sc,ScatterController:kc});function di(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}class n0{constructor(t){W(this,"options");this.options=t||{}}static override(t){Object.assign(n0.prototype,t)}init(){}formats(){return di()}parse(){return di()}format(){return di()}add(){return di()}diff(){return di()}startOf(){return di()}endOf(){return di()}}var L8={_date:n0};function A8(e,t,n,r){const{controller:i,data:o,_sorted:s}=e,a=i._cachedMeta.iScale;if(a&&t===a.axis&&t!=="r"&&s&&o.length){const l=a._reversePixels?iA:lr;if(r){if(i._sharedOptions){const c=o[0],u=typeof c.getRange=="function"&&c.getRange(t);if(u){const d=l(o,t,n-u),h=l(o,t,n+u);return{lo:d.lo,hi:h.hi}}}}else return l(o,t,n)}return{lo:0,hi:o.length-1}}function fl(e,t,n,r,i){const o=e.getSortedVisibleDatasetMetas(),s=n[t];for(let a=0,l=o.length;a<l;++a){const{index:c,data:u}=o[a],{lo:d,hi:h}=A8(o[a],t,s,i);for(let m=d;m<=h;++m){const y=u[m];y.skip||r(y,c,m)}}}function z8(e){const t=e.indexOf("x")!==-1,n=e.indexOf("y")!==-1;return function(r,i){const o=t?Math.abs(r.x-i.x):0,s=n?Math.abs(r.y-i.y):0;return Math.sqrt(Math.pow(o,2)+Math.pow(s,2))}}function Qf(e,t,n,r,i){const o=[];return!i&&!e.isPointInArea(t)||fl(e,n,t,function(a,l,c){!i&&!cr(a,e.chartArea,0)||a.inRange(t.x,t.y,r)&&o.push({element:a,datasetIndex:l,index:c})},!0),o}function I8(e,t,n,r){let i=[];function o(s,a,l){const{startAngle:c,endAngle:u}=s.getProps(["startAngle","endAngle"],r),{angle:d}=J_(s,{x:t.x,y:t.y});Ta(d,c,u)&&i.push({element:s,datasetIndex:a,index:l})}return fl(e,n,t,o),i}function D8(e,t,n,r,i,o){let s=[];const a=z8(n);let l=Number.POSITIVE_INFINITY;function c(u,d,h){const m=u.inRange(t.x,t.y,i);if(r&&!m)return;const y=u.getCenterPoint(i);if(!(!!o||e.isPointInArea(y))&&!m)return;const p=a(t,y);p<l?(s=[{element:u,datasetIndex:d,index:h}],l=p):p===l&&s.push({element:u,datasetIndex:d,index:h})}return fl(e,n,t,c),s}function Zf(e,t,n,r,i,o){return!o&&!e.isPointInArea(t)?[]:n==="r"&&!r?I8(e,t,n,i):D8(e,t,n,r,i,o)}function By(e,t,n,r,i){const o=[],s=n==="x"?"inXRange":"inYRange";let a=!1;return fl(e,n,t,(l,c,u)=>{l[s](t[n],i)&&(o.push({element:l,datasetIndex:c,index:u}),a=a||l.inRange(t.x,t.y,i))}),r&&!a?[]:o}var F8={evaluateInteractionItems:fl,modes:{index(e,t,n,r){const i=gi(t,e),o=n.axis||"x",s=n.includeInvisible||!1,a=n.intersect?Qf(e,i,o,r,s):Zf(e,i,o,!1,r,s),l=[];return a.length?(e.getSortedVisibleDatasetMetas().forEach(c=>{const u=a[0].index,d=c.data[u];d&&!d.skip&&l.push({element:d,datasetIndex:c.index,index:u})}),l):[]},dataset(e,t,n,r){const i=gi(t,e),o=n.axis||"xy",s=n.includeInvisible||!1;let a=n.intersect?Qf(e,i,o,r,s):Zf(e,i,o,!1,r,s);if(a.length>0){const l=a[0].datasetIndex,c=e.getDatasetMeta(l).data;a=[];for(let u=0;u<c.length;++u)a.push({element:c[u],datasetIndex:l,index:u})}return a},point(e,t,n,r){const i=gi(t,e),o=n.axis||"xy",s=n.includeInvisible||!1;return Qf(e,i,o,r,s)},nearest(e,t,n,r){const i=gi(t,e),o=n.axis||"xy",s=n.includeInvisible||!1;return Zf(e,i,o,n.intersect,r,s)},x(e,t,n,r){const i=gi(t,e);return By(e,i,"x",n.intersect,r)},y(e,t,n,r){const i=gi(t,e);return By(e,i,"y",n.intersect,r)}}};const SS=["left","top","right","bottom"];function xs(e,t){return e.filter(n=>n.pos===t)}function Vy(e,t){return e.filter(n=>SS.indexOf(n.pos)===-1&&n.box.axis===t)}function bs(e,t){return e.sort((n,r)=>{const i=t?r:n,o=t?n:r;return i.weight===o.weight?i.index-o.index:i.weight-o.weight})}function j8(e){const t=[];let n,r,i,o,s,a;for(n=0,r=(e||[]).length;n<r;++n)i=e[n],{position:o,options:{stack:s,stackWeight:a=1}}=i,t.push({index:n,box:i,pos:o,horizontal:i.isHorizontal(),weight:i.weight,stack:s&&o+s,stackWeight:a});return t}function B8(e){const t={};for(const n of e){const{stack:r,pos:i,stackWeight:o}=n;if(!r||!SS.includes(i))continue;const s=t[r]||(t[r]={count:0,placed:0,weight:0,size:0});s.count++,s.weight+=o}return t}function V8(e,t){const n=B8(e),{vBoxMaxWidth:r,hBoxMaxHeight:i}=t;let o,s,a;for(o=0,s=e.length;o<s;++o){a=e[o];const{fullSize:l}=a.box,c=n[a.stack],u=c&&a.stackWeight/c.weight;a.horizontal?(a.width=u?u*r:l&&t.availableWidth,a.height=i):(a.width=r,a.height=u?u*i:l&&t.availableHeight)}return n}function W8(e){const t=j8(e),n=bs(t.filter(c=>c.box.fullSize),!0),r=bs(xs(t,"left"),!0),i=bs(xs(t,"right")),o=bs(xs(t,"top"),!0),s=bs(xs(t,"bottom")),a=Vy(t,"x"),l=Vy(t,"y");return{fullSize:n,leftAndTop:r.concat(o),rightAndBottom:i.concat(l).concat(s).concat(a),chartArea:xs(t,"chartArea"),vertical:r.concat(i).concat(l),horizontal:o.concat(s).concat(a)}}function Wy(e,t,n,r){return Math.max(e[n],t[n])+Math.max(e[r],t[r])}function kS(e,t){e.top=Math.max(e.top,t.top),e.left=Math.max(e.left,t.left),e.bottom=Math.max(e.bottom,t.bottom),e.right=Math.max(e.right,t.right)}function H8(e,t,n,r){const{pos:i,box:o}=n,s=e.maxPadding;if(!ue(i)){n.size&&(e[i]-=n.size);const d=r[n.stack]||{size:0,count:1};d.size=Math.max(d.size,n.horizontal?o.height:o.width),n.size=d.size/d.count,e[i]+=n.size}o.getPadding&&kS(s,o.getPadding());const a=Math.max(0,t.outerWidth-Wy(s,e,"left","right")),l=Math.max(0,t.outerHeight-Wy(s,e,"top","bottom")),c=a!==e.w,u=l!==e.h;return e.w=a,e.h=l,n.horizontal?{same:c,other:u}:{same:u,other:c}}function U8(e){const t=e.maxPadding;function n(r){const i=Math.max(t[r]-e[r],0);return e[r]+=i,i}e.y+=n("top"),e.x+=n("left"),n("right"),n("bottom")}function Y8(e,t){const n=t.maxPadding;function r(i){const o={left:0,top:0,right:0,bottom:0};return i.forEach(s=>{o[s]=Math.max(t[s],n[s])}),o}return r(e?["left","right"]:["top","bottom"])}function Ts(e,t,n,r){const i=[];let o,s,a,l,c,u;for(o=0,s=e.length,c=0;o<s;++o){a=e[o],l=a.box,l.update(a.width||t.w,a.height||t.h,Y8(a.horizontal,t));const{same:d,other:h}=H8(t,n,a,r);c|=d&&i.length,u=u||h,l.fullSize||i.push(a)}return c&&Ts(i,t,n,r)||u}function Yl(e,t,n,r,i){e.top=n,e.left=t,e.right=t+r,e.bottom=n+i,e.width=r,e.height=i}function Hy(e,t,n,r){const i=n.padding;let{x:o,y:s}=t;for(const a of e){const l=a.box,c=r[a.stack]||{count:1,placed:0,weight:1},u=a.stackWeight/c.weight||1;if(a.horizontal){const d=t.w*u,h=c.size||l.height;Na(c.start)&&(s=c.start),l.fullSize?Yl(l,i.left,s,n.outerWidth-i.right-i.left,h):Yl(l,t.left+c.placed,s,d,h),c.start=s,c.placed+=d,s=l.bottom}else{const d=t.h*u,h=c.size||l.width;Na(c.start)&&(o=c.start),l.fullSize?Yl(l,o,i.top,h,n.outerHeight-i.bottom-i.top):Yl(l,o,t.top+c.placed,h,d),c.start=o,c.placed+=d,o=l.right}}t.x=o,t.y=s}var Pt={addBox(e,t){e.boxes||(e.boxes=[]),t.fullSize=t.fullSize||!1,t.position=t.position||"top",t.weight=t.weight||0,t._layers=t._layers||function(){return[{z:0,draw(n){t.draw(n)}}]},e.boxes.push(t)},removeBox(e,t){const n=e.boxes?e.boxes.indexOf(t):-1;n!==-1&&e.boxes.splice(n,1)},configure(e,t,n){t.fullSize=n.fullSize,t.position=n.position,t.weight=n.weight},update(e,t,n,r){if(!e)return;const i=Ot(e.options.layout.padding),o=Math.max(t-i.width,0),s=Math.max(n-i.height,0),a=W8(e.boxes),l=a.vertical,c=a.horizontal;Me(e.boxes,v=>{typeof v.beforeLayout=="function"&&v.beforeLayout()});const u=l.reduce((v,p)=>p.box.options&&p.box.options.display===!1?v:v+1,0)||1,d=Object.freeze({outerWidth:t,outerHeight:n,padding:i,availableWidth:o,availableHeight:s,vBoxMaxWidth:o/2/u,hBoxMaxHeight:s/2}),h=Object.assign({},i);kS(h,Ot(r));const m=Object.assign({maxPadding:h,w:o,h:s,x:i.left,y:i.top},i),y=V8(l.concat(c),d);Ts(a.fullSize,m,d,y),Ts(l,m,d,y),Ts(c,m,d,y)&&Ts(l,m,d,y),U8(m),Hy(a.leftAndTop,m,d,y),m.x+=m.w,m.y+=m.h,Hy(a.rightAndBottom,m,d,y),e.chartArea={left:m.left,top:m.top,right:m.left+m.w,bottom:m.top+m.h,height:m.h,width:m.w},Me(a.chartArea,v=>{const p=v.box;Object.assign(p,e.chartArea),p.update(m.w,m.h,{left:0,top:0,right:0,bottom:0})})}};class CS{acquireContext(t,n){}releaseContext(t){return!1}addEventListener(t,n,r){}removeEventListener(t,n,r){}getDevicePixelRatio(){return 1}getMaximumSize(t,n,r,i){return n=Math.max(0,n||t.width),r=r||t.height,{width:n,height:Math.max(0,i?Math.floor(n/i):r)}}isAttached(t){return!0}updateConfig(t){}}class X8 extends CS{acquireContext(t){return t&&t.getContext&&t.getContext("2d")||null}updateConfig(t){t.options.animation=!1}}const Cc="$chartjs",K8={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},Uy=e=>e===null||e==="";function G8(e,t){const n=e.style,r=e.getAttribute("height"),i=e.getAttribute("width");if(e[Cc]={initial:{height:r,width:i,style:{display:n.display,height:n.height,width:n.width}}},n.display=n.display||"block",n.boxSizing=n.boxSizing||"border-box",Uy(i)){const o=My(e,"width");o!==void 0&&(e.width=o)}if(Uy(r))if(e.style.height==="")e.height=e.width/(t||2);else{const o=My(e,"height");o!==void 0&&(e.height=o)}return e}const PS=QA?{passive:!0}:!1;function q8(e,t,n){e&&e.addEventListener(t,n,PS)}function Q8(e,t,n){e&&e.canvas&&e.canvas.removeEventListener(t,n,PS)}function Z8(e,t){const n=K8[e.type]||e.type,{x:r,y:i}=gi(e,t);return{type:n,chart:t,native:e,x:r!==void 0?r:null,y:i!==void 0?i:null}}function _u(e,t){for(const n of e)if(n===t||n.contains(t))return!0}function J8(e,t,n){const r=e.canvas,i=new MutationObserver(o=>{let s=!1;for(const a of o)s=s||_u(a.addedNodes,r),s=s&&!_u(a.removedNodes,r);s&&n()});return i.observe(document,{childList:!0,subtree:!0}),i}function e7(e,t,n){const r=e.canvas,i=new MutationObserver(o=>{let s=!1;for(const a of o)s=s||_u(a.removedNodes,r),s=s&&!_u(a.addedNodes,r);s&&n()});return i.observe(document,{childList:!0,subtree:!0}),i}const $a=new Map;let Yy=0;function MS(){const e=window.devicePixelRatio;e!==Yy&&(Yy=e,$a.forEach((t,n)=>{n.currentDevicePixelRatio!==e&&t()}))}function t7(e,t){$a.size||window.addEventListener("resize",MS),$a.set(e,t)}function n7(e){$a.delete(e),$a.size||window.removeEventListener("resize",MS)}function r7(e,t,n){const r=e.canvas,i=r&&t0(r);if(!i)return;const o=rS((a,l)=>{const c=i.clientWidth;n(a,l),c<i.clientWidth&&n()},window),s=new ResizeObserver(a=>{const l=a[0],c=l.contentRect.width,u=l.contentRect.height;c===0&&u===0||o(c,u)});return s.observe(i),t7(e,o),s}function Jf(e,t,n){n&&n.disconnect(),t==="resize"&&n7(e)}function i7(e,t,n){const r=e.canvas,i=rS(o=>{e.ctx!==null&&n(Z8(o,e))},e);return q8(r,t,i),i}class o7 extends CS{acquireContext(t,n){const r=t&&t.getContext&&t.getContext("2d");return r&&r.canvas===t?(G8(t,n),r):null}releaseContext(t){const n=t.canvas;if(!n[Cc])return!1;const r=n[Cc].initial;["height","width"].forEach(o=>{const s=r[o];ge(s)?n.removeAttribute(o):n.setAttribute(o,s)});const i=r.style||{};return Object.keys(i).forEach(o=>{n.style[o]=i[o]}),n.width=n.width,delete n[Cc],!0}addEventListener(t,n,r){this.removeEventListener(t,n);const i=t.$proxies||(t.$proxies={}),s={attach:J8,detach:e7,resize:r7}[n]||i7;i[n]=s(t,n,r)}removeEventListener(t,n){const r=t.$proxies||(t.$proxies={}),i=r[n];if(!i)return;({attach:Jf,detach:Jf,resize:Jf}[n]||Q8)(t,n,i),r[n]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(t,n,r,i){return qA(t,n,r,i)}isAttached(t){const n=t&&t0(t);return!!(n&&n.isConnected)}}function s7(e){return!e0()||typeof OffscreenCanvas!="undefined"&&e instanceof OffscreenCanvas?X8:o7}class Mn{constructor(){W(this,"x");W(this,"y");W(this,"active",!1);W(this,"options");W(this,"$animations")}tooltipPosition(t){const{x:n,y:r}=this.getProps(["x","y"],t);return{x:n,y:r}}hasValue(){return Fo(this.x)&&Fo(this.y)}getProps(t,n){const r=this.$animations;if(!n||!r)return this;const i={};return t.forEach(o=>{i[o]=r[o]&&r[o].active()?r[o]._to:this[o]}),i}}W(Mn,"defaults",{}),W(Mn,"defaultRoutes");function a7(e,t){const n=e.options.ticks,r=l7(e),i=Math.min(n.maxTicksLimit||r,r),o=n.major.enabled?u7(t):[],s=o.length,a=o[0],l=o[s-1],c=[];if(s>i)return d7(t,c,o,s/i),c;const u=c7(o,t,i);if(s>0){let d,h;const m=s>1?Math.round((l-a)/(s-1)):null;for(Xl(t,c,u,ge(m)?0:a-m,a),d=0,h=s-1;d<h;d++)Xl(t,c,u,o[d],o[d+1]);return Xl(t,c,u,l,ge(m)?t.length:l+m),c}return Xl(t,c,u),c}function l7(e){const t=e.options.offset,n=e._tickSize(),r=e._length/n+(t?0:1),i=e._maxLength/n;return Math.floor(Math.min(r,i))}function c7(e,t,n){const r=f7(e),i=t.length/n;if(!r)return Math.max(i,1);const o=eA(r);for(let s=0,a=o.length-1;s<a;s++){const l=o[s];if(l>i)return l}return Math.max(i,1)}function u7(e){const t=[];let n,r;for(n=0,r=e.length;n<r;n++)e[n].major&&t.push(n);return t}function d7(e,t,n,r){let i=0,o=n[0],s;for(r=Math.ceil(r),s=0;s<e.length;s++)s===o&&(t.push(e[s]),i++,o=n[i*r])}function Xl(e,t,n,r,i){const o=oe(r,0),s=Math.min(oe(i,e.length),e.length);let a=0,l,c,u;for(n=Math.ceil(n),i&&(l=i-r,n=l/Math.floor(l/n)),u=o;u<0;)a++,u=Math.round(o+a*n);for(c=Math.max(o,0);c<s;c++)c===u&&(t.push(e[c]),a++,u=Math.round(o+a*n))}function f7(e){const t=e.length;let n,r;if(t<2)return!1;for(r=e[0],n=1;n<t;++n)if(e[n]-e[n-1]!==r)return!1;return r}const h7=e=>e==="left"?"right":e==="right"?"left":e,Xy=(e,t,n)=>t==="top"||t==="left"?e[t]+n:e[t]-n,Ky=(e,t)=>Math.min(t||e,e);function Gy(e,t){const n=[],r=e.length/t,i=e.length;let o=0;for(;o<i;o+=r)n.push(e[Math.floor(o)]);return n}function p7(e,t,n){const r=e.ticks.length,i=Math.min(t,r-1),o=e._startPixel,s=e._endPixel,a=1e-6;let l=e.getPixelForTick(i),c;if(!(n&&(r===1?c=Math.max(l-o,s-l):t===0?c=(e.getPixelForTick(1)-l)/2:c=(l-e.getPixelForTick(i-1))/2,l+=i<t?c:-c,l<o-a||l>s+a)))return l}function m7(e,t){Me(e,n=>{const r=n.gc,i=r.length/2;let o;if(i>t){for(o=0;o<i;++o)delete n.data[r[o]];r.splice(0,i)}})}function ws(e){return e.drawTicks?e.tickLength:0}function qy(e,t){if(!e.display)return 0;const n=lt(e.font,t),r=Ot(e.padding);return(Le(e.text)?e.text.length:1)*n.lineHeight+r.height}function g7(e,t){return li(e,{scale:t,type:"scale"})}function v7(e,t,n){return li(e,{tick:n,index:t,type:"tick"})}function y7(e,t,n){let r=Kg(e);return(n&&t!=="right"||!n&&t==="right")&&(r=h7(r)),r}function x7(e,t,n,r){const{top:i,left:o,bottom:s,right:a,chart:l}=e,{chartArea:c,scales:u}=l;let d=0,h,m,y;const v=s-i,p=a-o;if(e.isHorizontal()){if(m=_t(r,o,a),ue(n)){const g=Object.keys(n)[0],x=n[g];y=u[g].getPixelForValue(x)+v-t}else n==="center"?y=(c.bottom+c.top)/2+v-t:y=Xy(e,n,t);h=a-o}else{if(ue(n)){const g=Object.keys(n)[0],x=n[g];m=u[g].getPixelForValue(x)-p+t}else n==="center"?m=(c.left+c.right)/2-p+t:m=Xy(e,n,t);y=_t(r,s,i),d=n==="left"?-Ze:Ze}return{titleX:m,titleY:y,maxWidth:h,rotation:d}}class Hi extends Mn{constructor(t){super(),this.id=t.id,this.type=t.type,this.options=void 0,this.ctx=t.ctx,this.chart=t.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(t){this.options=t.setContext(this.getContext()),this.axis=t.axis,this._userMin=this.parse(t.min),this._userMax=this.parse(t.max),this._suggestedMin=this.parse(t.suggestedMin),this._suggestedMax=this.parse(t.suggestedMax)}parse(t,n){return t}getUserBounds(){let{_userMin:t,_userMax:n,_suggestedMin:r,_suggestedMax:i}=this;return t=Ht(t,Number.POSITIVE_INFINITY),n=Ht(n,Number.NEGATIVE_INFINITY),r=Ht(r,Number.POSITIVE_INFINITY),i=Ht(i,Number.NEGATIVE_INFINITY),{min:Ht(t,r),max:Ht(n,i),minDefined:Ge(t),maxDefined:Ge(n)}}getMinMax(t){let{min:n,max:r,minDefined:i,maxDefined:o}=this.getUserBounds(),s;if(i&&o)return{min:n,max:r};const a=this.getMatchingVisibleMetas();for(let l=0,c=a.length;l<c;++l)s=a[l].controller.getMinMax(this,t),i||(n=Math.min(n,s.min)),o||(r=Math.max(r,s.max));return n=o&&n>r?r:n,r=i&&n>r?n:r,{min:Ht(n,Ht(r,n)),max:Ht(r,Ht(n,r))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){const t=this.chart.data;return this.options.labels||(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels||[]}getLabelItems(t=this.chart.chartArea){return this._labelItems||(this._labelItems=this._computeLabelItems(t))}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){Re(this.options.beforeUpdate,[this])}update(t,n,r){const{beginAtZero:i,grace:o,ticks:s}=this.options,a=s.sampleSize;this.beforeUpdate(),this.maxWidth=t,this.maxHeight=n,this._margins=r=Object.assign({left:0,right:0,top:0,bottom:0},r),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+r.left+r.right:this.height+r.top+r.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=EA(this,o,i),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();const l=a<this.ticks.length;this._convertTicksToLabels(l?Gy(this.ticks,a):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),s.display&&(s.autoSkip||s.source==="auto")&&(this.ticks=a7(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),l&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let t=this.options.reverse,n,r;this.isHorizontal()?(n=this.left,r=this.right):(n=this.top,r=this.bottom,t=!t),this._startPixel=n,this._endPixel=r,this._reversePixels=t,this._length=r-n,this._alignToPixels=this.options.alignToPixels}afterUpdate(){Re(this.options.afterUpdate,[this])}beforeSetDimensions(){Re(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){Re(this.options.afterSetDimensions,[this])}_callHooks(t){this.chart.notifyPlugins(t,this.getContext()),Re(this.options[t],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){Re(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(t){const n=this.options.ticks;let r,i,o;for(r=0,i=t.length;r<i;r++)o=t[r],o.label=Re(n.callback,[o.value,r,t],this)}afterTickToLabelConversion(){Re(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){Re(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){const t=this.options,n=t.ticks,r=Ky(this.ticks.length,t.ticks.maxTicksLimit),i=n.minRotation||0,o=n.maxRotation;let s=i,a,l,c;if(!this._isVisible()||!n.display||i>=o||r<=1||!this.isHorizontal()){this.labelRotation=i;return}const u=this._getLabelSizes(),d=u.widest.width,h=u.highest.height,m=ut(this.chart.width-d,0,this.maxWidth);a=t.offset?this.maxWidth/r:m/(r-1),d+6>a&&(a=m/(r-(t.offset?.5:1)),l=this.maxHeight-ws(t.grid)-n.padding-qy(t.title,this.chart.options.font),c=Math.sqrt(d*d+h*h),s=Yg(Math.min(Math.asin(ut((u.highest.height+6)/a,-1,1)),Math.asin(ut(l/c,-1,1))-Math.asin(ut(h/c,-1,1)))),s=Math.max(i,Math.min(o,s))),this.labelRotation=s}afterCalculateLabelRotation(){Re(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){Re(this.options.beforeFit,[this])}fit(){const t={width:0,height:0},{chart:n,options:{ticks:r,title:i,grid:o}}=this,s=this._isVisible(),a=this.isHorizontal();if(s){const l=qy(i,n.options.font);if(a?(t.width=this.maxWidth,t.height=ws(o)+l):(t.height=this.maxHeight,t.width=ws(o)+l),r.display&&this.ticks.length){const{first:c,last:u,widest:d,highest:h}=this._getLabelSizes(),m=r.padding*2,y=kn(this.labelRotation),v=Math.cos(y),p=Math.sin(y);if(a){const g=r.mirror?0:p*d.width+v*h.height;t.height=Math.min(this.maxHeight,t.height+g+m)}else{const g=r.mirror?0:v*d.width+p*h.height;t.width=Math.min(this.maxWidth,t.width+g+m)}this._calculatePadding(c,u,p,v)}}this._handleMargins(),a?(this.width=this._length=n.width-this._margins.left-this._margins.right,this.height=t.height):(this.width=t.width,this.height=this._length=n.height-this._margins.top-this._margins.bottom)}_calculatePadding(t,n,r,i){const{ticks:{align:o,padding:s},position:a}=this.options,l=this.labelRotation!==0,c=a!=="top"&&this.axis==="x";if(this.isHorizontal()){const u=this.getPixelForTick(0)-this.left,d=this.right-this.getPixelForTick(this.ticks.length-1);let h=0,m=0;l?c?(h=i*t.width,m=r*n.height):(h=r*t.height,m=i*n.width):o==="start"?m=n.width:o==="end"?h=t.width:o!=="inner"&&(h=t.width/2,m=n.width/2),this.paddingLeft=Math.max((h-u+s)*this.width/(this.width-u),0),this.paddingRight=Math.max((m-d+s)*this.width/(this.width-d),0)}else{let u=n.height/2,d=t.height/2;o==="start"?(u=0,d=t.height):o==="end"&&(u=n.height,d=0),this.paddingTop=u+s,this.paddingBottom=d+s}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){Re(this.options.afterFit,[this])}isHorizontal(){const{axis:t,position:n}=this.options;return n==="top"||n==="bottom"||t==="x"}isFullSize(){return this.options.fullSize}_convertTicksToLabels(t){this.beforeTickToLabelConversion(),this.generateTickLabels(t);let n,r;for(n=0,r=t.length;n<r;n++)ge(t[n].label)&&(t.splice(n,1),r--,n--);this.afterTickToLabelConversion()}_getLabelSizes(){let t=this._labelSizes;if(!t){const n=this.options.ticks.sampleSize;let r=this.ticks;n<r.length&&(r=Gy(r,n)),this._labelSizes=t=this._computeLabelSizes(r,r.length,this.options.ticks.maxTicksLimit)}return t}_computeLabelSizes(t,n,r){const{ctx:i,_longestTextCache:o}=this,s=[],a=[],l=Math.floor(n/Ky(n,r));let c=0,u=0,d,h,m,y,v,p,g,x,b,w,S;for(d=0;d<n;d+=l){if(y=t[d].label,v=this._resolveTickFontOptions(d),i.font=p=v.string,g=o[p]=o[p]||{data:{},gc:[]},x=v.lineHeight,b=w=0,!ge(y)&&!Le(y))b=bu(i,g.data,g.gc,b,y),w=x;else if(Le(y))for(h=0,m=y.length;h<m;++h)S=y[h],!ge(S)&&!Le(S)&&(b=bu(i,g.data,g.gc,b,S),w+=x);s.push(b),a.push(w),c=Math.max(b,c),u=Math.max(w,u)}m7(o,n);const C=s.indexOf(c),P=a.indexOf(u),M=O=>({width:s[O]||0,height:a[O]||0});return{first:M(0),last:M(n-1),widest:M(C),highest:M(P),widths:s,heights:a}}getLabelForValue(t){return t}getPixelForValue(t,n){return NaN}getValueForPixel(t){}getPixelForTick(t){const n=this.ticks;return t<0||t>n.length-1?null:this.getPixelForValue(n[t].value)}getPixelForDecimal(t){this._reversePixels&&(t=1-t);const n=this._startPixel+t*this._length;return rA(this._alignToPixels?ui(this.chart,n,0):n)}getDecimalForPixel(t){const n=(t-this._startPixel)/this._length;return this._reversePixels?1-n:n}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){const{min:t,max:n}=this;return t<0&&n<0?n:t>0&&n>0?t:0}getContext(t){const n=this.ticks||[];if(t>=0&&t<n.length){const r=n[t];return r.$context||(r.$context=v7(this.getContext(),t,r))}return this.$context||(this.$context=g7(this.chart.getContext(),this))}_tickSize(){const t=this.options.ticks,n=kn(this.labelRotation),r=Math.abs(Math.cos(n)),i=Math.abs(Math.sin(n)),o=this._getLabelSizes(),s=t.autoSkipPadding||0,a=o?o.widest.width+s:0,l=o?o.highest.height+s:0;return this.isHorizontal()?l*r>a*i?a/r:l/i:l*i<a*r?l/r:a/i}_isVisible(){const t=this.options.display;return t!=="auto"?!!t:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(t){const n=this.axis,r=this.chart,i=this.options,{grid:o,position:s,border:a}=i,l=o.offset,c=this.isHorizontal(),d=this.ticks.length+(l?1:0),h=ws(o),m=[],y=a.setContext(this.getContext()),v=y.display?y.width:0,p=v/2,g=function(K){return ui(r,K,v)};let x,b,w,S,C,P,M,O,N,A,z,H;if(s==="top")x=g(this.bottom),P=this.bottom-h,O=x-p,A=g(t.top)+p,H=t.bottom;else if(s==="bottom")x=g(this.top),A=t.top,H=g(t.bottom)-p,P=x+p,O=this.top+h;else if(s==="left")x=g(this.right),C=this.right-h,M=x-p,N=g(t.left)+p,z=t.right;else if(s==="right")x=g(this.left),N=t.left,z=g(t.right)-p,C=x+p,M=this.left+h;else if(n==="x"){if(s==="center")x=g((t.top+t.bottom)/2+.5);else if(ue(s)){const K=Object.keys(s)[0],Y=s[K];x=g(this.chart.scales[K].getPixelForValue(Y))}A=t.top,H=t.bottom,P=x+p,O=P+h}else if(n==="y"){if(s==="center")x=g((t.left+t.right)/2);else if(ue(s)){const K=Object.keys(s)[0],Y=s[K];x=g(this.chart.scales[K].getPixelForValue(Y))}C=x-p,M=C-h,N=t.left,z=t.right}const Q=oe(i.ticks.maxTicksLimit,d),V=Math.max(1,Math.ceil(d/Q));for(b=0;b<d;b+=V){const K=this.getContext(b),Y=o.setContext(K),Z=a.setContext(K),ye=Y.lineWidth,Ve=Y.color,F=Z.dash||[],R=Z.dashOffset,T=Y.tickWidth,$=Y.tickColor,U=Y.tickBorderDash||[],E=Y.tickBorderDashOffset;w=p7(this,b,l),w!==void 0&&(S=ui(r,w,ye),c?C=M=N=z=S:P=O=A=H=S,m.push({tx1:C,ty1:P,tx2:M,ty2:O,x1:N,y1:A,x2:z,y2:H,width:ye,color:Ve,borderDash:F,borderDashOffset:R,tickWidth:T,tickColor:$,tickBorderDash:U,tickBorderDashOffset:E}))}return this._ticksLength=d,this._borderValue=x,m}_computeLabelItems(t){const n=this.axis,r=this.options,{position:i,ticks:o}=r,s=this.isHorizontal(),a=this.ticks,{align:l,crossAlign:c,padding:u,mirror:d}=o,h=ws(r.grid),m=h+u,y=d?-u:m,v=-kn(this.labelRotation),p=[];let g,x,b,w,S,C,P,M,O,N,A,z,H="middle";if(i==="top")C=this.bottom-y,P=this._getXAxisLabelAlignment();else if(i==="bottom")C=this.top+y,P=this._getXAxisLabelAlignment();else if(i==="left"){const V=this._getYAxisLabelAlignment(h);P=V.textAlign,S=V.x}else if(i==="right"){const V=this._getYAxisLabelAlignment(h);P=V.textAlign,S=V.x}else if(n==="x"){if(i==="center")C=(t.top+t.bottom)/2+m;else if(ue(i)){const V=Object.keys(i)[0],K=i[V];C=this.chart.scales[V].getPixelForValue(K)+m}P=this._getXAxisLabelAlignment()}else if(n==="y"){if(i==="center")S=(t.left+t.right)/2-m;else if(ue(i)){const V=Object.keys(i)[0],K=i[V];S=this.chart.scales[V].getPixelForValue(K)}P=this._getYAxisLabelAlignment(h).textAlign}n==="y"&&(l==="start"?H="top":l==="end"&&(H="bottom"));const Q=this._getLabelSizes();for(g=0,x=a.length;g<x;++g){b=a[g],w=b.label;const V=o.setContext(this.getContext(g));M=this.getPixelForTick(g)+o.labelOffset,O=this._resolveTickFontOptions(g),N=O.lineHeight,A=Le(w)?w.length:1;const K=A/2,Y=V.color,Z=V.textStrokeColor,ye=V.textStrokeWidth;let Ve=P;s?(S=M,P==="inner"&&(g===x-1?Ve=this.options.reverse?"left":"right":g===0?Ve=this.options.reverse?"right":"left":Ve="center"),i==="top"?c==="near"||v!==0?z=-A*N+N/2:c==="center"?z=-Q.highest.height/2-K*N+N:z=-Q.highest.height+N/2:c==="near"||v!==0?z=N/2:c==="center"?z=Q.highest.height/2-K*N:z=Q.highest.height-A*N,d&&(z*=-1),v!==0&&!V.showLabelBackdrop&&(S+=N/2*Math.sin(v))):(C=M,z=(1-A)*N/2);let F;if(V.showLabelBackdrop){const R=Ot(V.backdropPadding),T=Q.heights[g],$=Q.widths[g];let U=z-R.top,E=0-R.left;switch(H){case"middle":U-=T/2;break;case"bottom":U-=T;break}switch(P){case"center":E-=$/2;break;case"right":E-=$;break;case"inner":g===x-1?E-=$:g>0&&(E-=$/2);break}F={left:E,top:U,width:$+R.width,height:T+R.height,color:V.backdropColor}}p.push({label:w,font:O,textOffset:z,options:{rotation:v,color:Y,strokeColor:Z,strokeWidth:ye,textAlign:Ve,textBaseline:H,translation:[S,C],backdrop:F}})}return p}_getXAxisLabelAlignment(){const{position:t,ticks:n}=this.options;if(-kn(this.labelRotation))return t==="top"?"left":"right";let i="center";return n.align==="start"?i="left":n.align==="end"?i="right":n.align==="inner"&&(i="inner"),i}_getYAxisLabelAlignment(t){const{position:n,ticks:{crossAlign:r,mirror:i,padding:o}}=this.options,s=this._getLabelSizes(),a=t+o,l=s.widest.width;let c,u;return n==="left"?i?(u=this.right+o,r==="near"?c="left":r==="center"?(c="center",u+=l/2):(c="right",u+=l)):(u=this.right-a,r==="near"?c="right":r==="center"?(c="center",u-=l/2):(c="left",u=this.left)):n==="right"?i?(u=this.left+o,r==="near"?c="right":r==="center"?(c="center",u-=l/2):(c="left",u-=l)):(u=this.left+a,r==="near"?c="left":r==="center"?(c="center",u+=l/2):(c="right",u=this.right)):c="right",{textAlign:c,x:u}}_computeLabelArea(){if(this.options.ticks.mirror)return;const t=this.chart,n=this.options.position;if(n==="left"||n==="right")return{top:0,left:this.left,bottom:t.height,right:this.right};if(n==="top"||n==="bottom")return{top:this.top,left:0,bottom:this.bottom,right:t.width}}drawBackground(){const{ctx:t,options:{backgroundColor:n},left:r,top:i,width:o,height:s}=this;n&&(t.save(),t.fillStyle=n,t.fillRect(r,i,o,s),t.restore())}getLineWidthForValue(t){const n=this.options.grid;if(!this._isVisible()||!n.display)return 0;const i=this.ticks.findIndex(o=>o.value===t);return i>=0?n.setContext(this.getContext(i)).lineWidth:0}drawGrid(t){const n=this.options.grid,r=this.ctx,i=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(t));let o,s;const a=(l,c,u)=>{!u.width||!u.color||(r.save(),r.lineWidth=u.width,r.strokeStyle=u.color,r.setLineDash(u.borderDash||[]),r.lineDashOffset=u.borderDashOffset,r.beginPath(),r.moveTo(l.x,l.y),r.lineTo(c.x,c.y),r.stroke(),r.restore())};if(n.display)for(o=0,s=i.length;o<s;++o){const l=i[o];n.drawOnChartArea&&a({x:l.x1,y:l.y1},{x:l.x2,y:l.y2},l),n.drawTicks&&a({x:l.tx1,y:l.ty1},{x:l.tx2,y:l.ty2},{color:l.tickColor,width:l.tickWidth,borderDash:l.tickBorderDash,borderDashOffset:l.tickBorderDashOffset})}}drawBorder(){const{chart:t,ctx:n,options:{border:r,grid:i}}=this,o=r.setContext(this.getContext()),s=r.display?o.width:0;if(!s)return;const a=i.setContext(this.getContext(0)).lineWidth,l=this._borderValue;let c,u,d,h;this.isHorizontal()?(c=ui(t,this.left,s)-s/2,u=ui(t,this.right,a)+a/2,d=h=l):(d=ui(t,this.top,s)-s/2,h=ui(t,this.bottom,a)+a/2,c=u=l),n.save(),n.lineWidth=o.width,n.strokeStyle=o.color,n.beginPath(),n.moveTo(c,d),n.lineTo(u,h),n.stroke(),n.restore()}drawLabels(t){if(!this.options.ticks.display)return;const r=this.ctx,i=this._computeLabelArea();i&&Dd(r,i);const o=this.getLabelItems(t);for(const s of o){const a=s.options,l=s.font,c=s.label,u=s.textOffset;Ii(r,c,0,u,l,a)}i&&Fd(r)}drawTitle(){const{ctx:t,options:{position:n,title:r,reverse:i}}=this;if(!r.display)return;const o=lt(r.font),s=Ot(r.padding),a=r.align;let l=o.lineHeight/2;n==="bottom"||n==="center"||ue(n)?(l+=s.bottom,Le(r.text)&&(l+=o.lineHeight*(r.text.length-1))):l+=s.top;const{titleX:c,titleY:u,maxWidth:d,rotation:h}=x7(this,l,n,a);Ii(t,r.text,0,0,o,{color:r.color,maxWidth:d,rotation:h,textAlign:y7(a,n,i),textBaseline:"middle",translation:[c,u]})}draw(t){!this._isVisible()||(this.drawBackground(),this.drawGrid(t),this.drawBorder(),this.drawTitle(),this.drawLabels(t))}_layers(){const t=this.options,n=t.ticks&&t.ticks.z||0,r=oe(t.grid&&t.grid.z,-1),i=oe(t.border&&t.border.z,0);return!this._isVisible()||this.draw!==Hi.prototype.draw?[{z:n,draw:o=>{this.draw(o)}}]:[{z:r,draw:o=>{this.drawBackground(),this.drawGrid(o),this.drawTitle()}},{z:i,draw:()=>{this.drawBorder()}},{z:n,draw:o=>{this.drawLabels(o)}}]}getMatchingVisibleMetas(t){const n=this.chart.getSortedVisibleDatasetMetas(),r=this.axis+"AxisID",i=[];let o,s;for(o=0,s=n.length;o<s;++o){const a=n[o];a[r]===this.id&&(!t||a.type===t)&&i.push(a)}return i}_resolveTickFontOptions(t){const n=this.options.ticks.setContext(this.getContext(t));return lt(n.font)}_maxDigits(){const t=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/t}}class Kl{constructor(t,n,r){this.type=t,this.scope=n,this.override=r,this.items=Object.create(null)}isForType(t){return Object.prototype.isPrototypeOf.call(this.type.prototype,t.prototype)}register(t){const n=Object.getPrototypeOf(t);let r;_7(n)&&(r=this.register(n));const i=this.items,o=t.id,s=this.scope+"."+o;if(!o)throw new Error("class does not have id: "+t);return o in i||(i[o]=t,b7(t,s,r),this.override&&qe.override(t.id,t.overrides)),s}get(t){return this.items[t]}unregister(t){const n=this.items,r=t.id,i=this.scope;r in n&&delete n[r],i&&r in qe[i]&&(delete qe[i][r],this.override&&delete zi[r])}}function b7(e,t,n){const r=Oa(Object.create(null),[n?qe.get(n):{},qe.get(t),e.defaults]);qe.set(t,r),e.defaultRoutes&&w7(t,e.defaultRoutes),e.descriptors&&qe.describe(t,e.descriptors)}function w7(e,t){Object.keys(t).forEach(n=>{const r=n.split("."),i=r.pop(),o=[e].concat(r).join("."),s=t[n].split("."),a=s.pop(),l=s.join(".");qe.route(o,i,l,a)})}function _7(e){return"id"in e&&"defaults"in e}class S7{constructor(){this.controllers=new Kl(Pn,"datasets",!0),this.elements=new Kl(Mn,"elements"),this.plugins=new Kl(Object,"plugins"),this.scales=new Kl(Hi,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...t){this._each("register",t)}remove(...t){this._each("unregister",t)}addControllers(...t){this._each("register",t,this.controllers)}addElements(...t){this._each("register",t,this.elements)}addPlugins(...t){this._each("register",t,this.plugins)}addScales(...t){this._each("register",t,this.scales)}getController(t){return this._get(t,this.controllers,"controller")}getElement(t){return this._get(t,this.elements,"element")}getPlugin(t){return this._get(t,this.plugins,"plugin")}getScale(t){return this._get(t,this.scales,"scale")}removeControllers(...t){this._each("unregister",t,this.controllers)}removeElements(...t){this._each("unregister",t,this.elements)}removePlugins(...t){this._each("unregister",t,this.plugins)}removeScales(...t){this._each("unregister",t,this.scales)}_each(t,n,r){[...n].forEach(i=>{const o=r||this._getRegistryForType(i);r||o.isForType(i)||o===this.plugins&&i.id?this._exec(t,o,i):Me(i,s=>{const a=r||this._getRegistryForType(s);this._exec(t,a,s)})})}_exec(t,n,r){const i=Ug(t);Re(r["before"+i],[],r),n[t](r),Re(r["after"+i],[],r)}_getRegistryForType(t){for(let n=0;n<this._typedRegistries.length;n++){const r=this._typedRegistries[n];if(r.isForType(t))return r}return this.plugins}_get(t,n,r){const i=n.get(t);if(i===void 0)throw new Error('"'+t+'" is not a registered '+r+".");return i}}var $n=new S7;class k7{constructor(){this._init=[]}notify(t,n,r,i){n==="beforeInit"&&(this._init=this._createDescriptors(t,!0),this._notify(this._init,t,"install"));const o=i?this._descriptors(t).filter(i):this._descriptors(t),s=this._notify(o,t,n,r);return n==="afterDestroy"&&(this._notify(o,t,"stop"),this._notify(this._init,t,"uninstall")),s}_notify(t,n,r,i){i=i||{};for(const o of t){const s=o.plugin,a=s[r],l=[n,i,o.options];if(Re(a,l,s)===!1&&i.cancelable)return!1}return!0}invalidate(){ge(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(t){if(this._cache)return this._cache;const n=this._cache=this._createDescriptors(t);return this._notifyStateChanges(t),n}_createDescriptors(t,n){const r=t&&t.config,i=oe(r.options&&r.options.plugins,{}),o=C7(r);return i===!1&&!n?[]:M7(t,o,i,n)}_notifyStateChanges(t){const n=this._oldCache||[],r=this._cache,i=(o,s)=>o.filter(a=>!s.some(l=>a.plugin.id===l.plugin.id));this._notify(i(n,r),t,"stop"),this._notify(i(r,n),t,"start")}}function C7(e){const t={},n=[],r=Object.keys($n.plugins.items);for(let o=0;o<r.length;o++)n.push($n.getPlugin(r[o]));const i=e.plugins||[];for(let o=0;o<i.length;o++){const s=i[o];n.indexOf(s)===-1&&(n.push(s),t[s.id]=!0)}return{plugins:n,localIds:t}}function P7(e,t){return!t&&e===!1?null:e===!0?{}:e}function M7(e,{plugins:t,localIds:n},r,i){const o=[],s=e.getContext();for(const a of t){const l=a.id,c=P7(r[l],i);c!==null&&o.push({plugin:a,options:E7(e.config,{plugin:a,local:n[l]},c,s)})}return o}function E7(e,{plugin:t,local:n},r,i){const o=e.pluginScopeKeys(t),s=e.getOptionScopes(r,o);return n&&t.defaults&&s.push(t.defaults),e.createResolver(s,i,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function Tp(e,t){const n=qe.datasets[e]||{};return((t.datasets||{})[e]||{}).indexAxis||t.indexAxis||n.indexAxis||"x"}function O7(e,t){let n=e;return e==="_index_"?n=t:e==="_value_"&&(n=t==="x"?"y":"x"),n}function N7(e,t){return e===t?"_index_":"_value_"}function Qy(e){if(e==="x"||e==="y"||e==="r")return e}function T7(e){if(e==="top"||e==="bottom")return"x";if(e==="left"||e==="right")return"y"}function Rp(e,...t){if(Qy(e))return e;for(const n of t){const r=n.axis||T7(n.position)||e.length>1&&Qy(e[0].toLowerCase());if(r)return r}throw new Error(`Cannot determine type of '${e}' axis. Please provide 'axis' or 'position' option.`)}function Zy(e,t,n){if(n[t+"AxisID"]===e)return{axis:t}}function R7(e,t){if(t.data&&t.data.datasets){const n=t.data.datasets.filter(r=>r.xAxisID===e||r.yAxisID===e);if(n.length)return Zy(e,"x",n[0])||Zy(e,"y",n[0])}return{}}function $7(e,t){const n=zi[e.type]||{scales:{}},r=t.scales||{},i=Tp(e.type,t),o=Object.create(null);return Object.keys(r).forEach(s=>{const a=r[s];if(!ue(a))return console.error(`Invalid scale configuration for scale: ${s}`);if(a._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${s}`);const l=Rp(s,a,R7(s,e),qe.scales[a.type]),c=N7(l,i),u=n.scales||{};o[s]=qs(Object.create(null),[{axis:l},a,u[l],u[c]])}),e.data.datasets.forEach(s=>{const a=s.type||e.type,l=s.indexAxis||Tp(a,t),u=(zi[a]||{}).scales||{};Object.keys(u).forEach(d=>{const h=O7(d,l),m=s[h+"AxisID"]||h;o[m]=o[m]||Object.create(null),qs(o[m],[{axis:h},r[m],u[d]])})}),Object.keys(o).forEach(s=>{const a=o[s];qs(a,[qe.scales[a.type],qe.scale])}),o}function ES(e){const t=e.options||(e.options={});t.plugins=oe(t.plugins,{}),t.scales=$7(e,t)}function OS(e){return e=e||{},e.datasets=e.datasets||[],e.labels=e.labels||[],e}function L7(e){return e=e||{},e.data=OS(e.data),ES(e),e}const Jy=new Map,NS=new Set;function Gl(e,t){let n=Jy.get(e);return n||(n=t(),Jy.set(e,n),NS.add(n)),n}const _s=(e,t,n)=>{const r=ti(t,n);r!==void 0&&e.add(r)};class A7{constructor(t){this._config=L7(t),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(t){this._config.type=t}get data(){return this._config.data}set data(t){this._config.data=OS(t)}get options(){return this._config.options}set options(t){this._config.options=t}get plugins(){return this._config.plugins}update(){const t=this._config;this.clearCache(),ES(t)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(t){return Gl(t,()=>[[`datasets.${t}`,""]])}datasetAnimationScopeKeys(t,n){return Gl(`${t}.transition.${n}`,()=>[[`datasets.${t}.transitions.${n}`,`transitions.${n}`],[`datasets.${t}`,""]])}datasetElementScopeKeys(t,n){return Gl(`${t}-${n}`,()=>[[`datasets.${t}.elements.${n}`,`datasets.${t}`,`elements.${n}`,""]])}pluginScopeKeys(t){const n=t.id,r=this.type;return Gl(`${r}-plugin-${n}`,()=>[[`plugins.${n}`,...t.additionalOptionScopes||[]]])}_cachedScopes(t,n){const r=this._scopeCache;let i=r.get(t);return(!i||n)&&(i=new Map,r.set(t,i)),i}getOptionScopes(t,n,r){const{options:i,type:o}=this,s=this._cachedScopes(t,r),a=s.get(n);if(a)return a;const l=new Set;n.forEach(u=>{t&&(l.add(t),u.forEach(d=>_s(l,t,d))),u.forEach(d=>_s(l,i,d)),u.forEach(d=>_s(l,zi[o]||{},d)),u.forEach(d=>_s(l,qe,d)),u.forEach(d=>_s(l,Ep,d))});const c=Array.from(l);return c.length===0&&c.push(Object.create(null)),NS.has(n)&&s.set(n,c),c}chartOptionScopes(){const{options:t,type:n}=this;return[t,zi[n]||{},qe.datasets[n]||{},{type:n},qe,Ep]}resolveNamedOptions(t,n,r,i=[""]){const o={$shared:!0},{resolver:s,subPrefixes:a}=ex(this._resolverCache,t,i);let l=s;if(I7(s,n)){o.$shared=!1,r=ni(r)?r():r;const c=this.createResolver(t,r,a);l=jo(s,r,c)}for(const c of n)o[c]=l[c];return o}createResolver(t,n,r=[""],i){const{resolver:o}=ex(this._resolverCache,t,r);return ue(n)?jo(o,n,void 0,i):o}}function ex(e,t,n){let r=e.get(t);r||(r=new Map,e.set(t,r));const i=n.join();let o=r.get(i);return o||(o={resolver:Qg(t,n),subPrefixes:n.filter(a=>!a.toLowerCase().includes("hover"))},r.set(i,o)),o}const z7=e=>ue(e)&&Object.getOwnPropertyNames(e).some(t=>ni(e[t]));function I7(e,t){const{isScriptable:n,isIndexable:r}=cS(e);for(const i of t){const o=n(i),s=r(i),a=(s||o)&&e[i];if(o&&(ni(a)||z7(a))||s&&Le(a))return!0}return!1}var D7="4.4.3";const F7=["top","bottom","left","right","chartArea"];function tx(e,t){return e==="top"||e==="bottom"||F7.indexOf(e)===-1&&t==="x"}function nx(e,t){return function(n,r){return n[e]===r[e]?n[t]-r[t]:n[e]-r[e]}}function rx(e){const t=e.chart,n=t.options.animation;t.notifyPlugins("afterRender"),Re(n&&n.onComplete,[e],t)}function j7(e){const t=e.chart,n=t.options.animation;Re(n&&n.onProgress,[e],t)}function TS(e){return e0()&&typeof e=="string"?e=document.getElementById(e):e&&e.length&&(e=e[0]),e&&e.canvas&&(e=e.canvas),e}const Pc={},ix=e=>{const t=TS(e);return Object.values(Pc).filter(n=>n.canvas===t).pop()};function B7(e,t,n){const r=Object.keys(e);for(const i of r){const o=+i;if(o>=t){const s=e[i];delete e[i],(n>0||o>t)&&(e[o+n]=s)}}}function V7(e,t,n,r){return!n||e.type==="mouseout"?null:r?t:e}function ql(e,t,n){return e.options.clip?e[n]:t[n]}function W7(e,t){const{xScale:n,yScale:r}=e;return n&&r?{left:ql(n,t,"left"),right:ql(n,t,"right"),top:ql(r,t,"top"),bottom:ql(r,t,"bottom")}:t}class In{static register(...t){$n.add(...t),ox()}static unregister(...t){$n.remove(...t),ox()}constructor(t,n){const r=this.config=new A7(n),i=TS(t),o=ix(i);if(o)throw new Error("Canvas is already in use. Chart with ID '"+o.id+"' must be destroyed before the canvas with ID '"+o.canvas.id+"' can be reused.");const s=r.createResolver(r.chartOptionScopes(),this.getContext());this.platform=new(r.platform||s7(i)),this.platform.updateConfig(r);const a=this.platform.acquireContext(i,s.aspectRatio),l=a&&a.canvas,c=l&&l.height,u=l&&l.width;if(this.id=UL(),this.ctx=a,this.canvas=l,this.width=u,this.height=c,this._options=s,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new k7,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=aA(d=>this.update(d),s.resizeDelay||0),this._dataChanges=[],Pc[this.id]=this,!a||!l){console.error("Failed to create chart: can't acquire context from the given item");return}er.listen(this,"complete",rx),er.listen(this,"progress",j7),this._initialize(),this.attached&&this.update()}get aspectRatio(){const{options:{aspectRatio:t,maintainAspectRatio:n},width:r,height:i,_aspectRatio:o}=this;return ge(t)?n&&o?o:i?r/i:null:t}get data(){return this.config.data}set data(t){this.config.data=t}get options(){return this._options}set options(t){this.config.options=t}get registry(){return $n}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():Py(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return Sy(this.canvas,this.ctx),this}stop(){return er.stop(this),this}resize(t,n){er.running(this)?this._resizeBeforeDraw={width:t,height:n}:this._resize(t,n)}_resize(t,n){const r=this.options,i=this.canvas,o=r.maintainAspectRatio&&this.aspectRatio,s=this.platform.getMaximumSize(i,t,n,o),a=r.devicePixelRatio||this.platform.getDevicePixelRatio(),l=this.width?"resize":"attach";this.width=s.width,this.height=s.height,this._aspectRatio=this.aspectRatio,Py(this,a,!0)&&(this.notifyPlugins("resize",{size:s}),Re(r.onResize,[this,s],this),this.attached&&this._doResize(l)&&this.render())}ensureScalesHaveIDs(){const n=this.options.scales||{};Me(n,(r,i)=>{r.id=i})}buildOrUpdateScales(){const t=this.options,n=t.scales,r=this.scales,i=Object.keys(r).reduce((s,a)=>(s[a]=!1,s),{});let o=[];n&&(o=o.concat(Object.keys(n).map(s=>{const a=n[s],l=Rp(s,a),c=l==="r",u=l==="x";return{options:a,dposition:c?"chartArea":u?"bottom":"left",dtype:c?"radialLinear":u?"category":"linear"}}))),Me(o,s=>{const a=s.options,l=a.id,c=Rp(l,a),u=oe(a.type,s.dtype);(a.position===void 0||tx(a.position,c)!==tx(s.dposition))&&(a.position=s.dposition),i[l]=!0;let d=null;if(l in r&&r[l].type===u)d=r[l];else{const h=$n.getScale(u);d=new h({id:l,type:u,ctx:this.ctx,chart:this}),r[d.id]=d}d.init(a,t)}),Me(i,(s,a)=>{s||delete r[a]}),Me(r,s=>{Pt.configure(this,s,s.options),Pt.addBox(this,s)})}_updateMetasets(){const t=this._metasets,n=this.data.datasets.length,r=t.length;if(t.sort((i,o)=>i.index-o.index),r>n){for(let i=n;i<r;++i)this._destroyDatasetMeta(i);t.splice(n,r-n)}this._sortedMetasets=t.slice(0).sort(nx("order","index"))}_removeUnreferencedMetasets(){const{_metasets:t,data:{datasets:n}}=this;t.length>n.length&&delete this._stacks,t.forEach((r,i)=>{n.filter(o=>o===r._dataset).length===0&&this._destroyDatasetMeta(i)})}buildOrUpdateControllers(){const t=[],n=this.data.datasets;let r,i;for(this._removeUnreferencedMetasets(),r=0,i=n.length;r<i;r++){const o=n[r];let s=this.getDatasetMeta(r);const a=o.type||this.config.type;if(s.type&&s.type!==a&&(this._destroyDatasetMeta(r),s=this.getDatasetMeta(r)),s.type=a,s.indexAxis=o.indexAxis||Tp(a,this.options),s.order=o.order||0,s.index=r,s.label=""+o.label,s.visible=this.isDatasetVisible(r),s.controller)s.controller.updateIndex(r),s.controller.linkScales();else{const l=$n.getController(a),{datasetElementType:c,dataElementType:u}=qe.datasets[a];Object.assign(l,{dataElementType:$n.getElement(u),datasetElementType:c&&$n.getElement(c)}),s.controller=new l(this,r),t.push(s.controller)}}return this._updateMetasets(),t}_resetElements(){Me(this.data.datasets,(t,n)=>{this.getDatasetMeta(n).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(t){const n=this.config;n.update();const r=this._options=n.createResolver(n.chartOptionScopes(),this.getContext()),i=this._animationsDisabled=!r.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),this.notifyPlugins("beforeUpdate",{mode:t,cancelable:!0})===!1)return;const o=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let s=0;for(let c=0,u=this.data.datasets.length;c<u;c++){const{controller:d}=this.getDatasetMeta(c),h=!i&&o.indexOf(d)===-1;d.buildOrUpdateElements(h),s=Math.max(+d.getMaxOverflow(),s)}s=this._minPadding=r.layout.autoPadding?s:0,this._updateLayout(s),i||Me(o,c=>{c.reset()}),this._updateDatasets(t),this.notifyPlugins("afterUpdate",{mode:t}),this._layers.sort(nx("z","_idx"));const{_active:a,_lastEvent:l}=this;l?this._eventHandler(l,!0):a.length&&this._updateHoverStyles(a,a,!0),this.render()}_updateScales(){Me(this.scales,t=>{Pt.removeBox(this,t)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){const t=this.options,n=new Set(Object.keys(this._listeners)),r=new Set(t.events);(!py(n,r)||!!this._responsiveListeners!==t.responsive)&&(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){const{_hiddenIndices:t}=this,n=this._getUniformDataChanges()||[];for(const{method:r,start:i,count:o}of n){const s=r==="_removeElements"?-o:o;B7(t,i,s)}}_getUniformDataChanges(){const t=this._dataChanges;if(!t||!t.length)return;this._dataChanges=[];const n=this.data.datasets.length,r=o=>new Set(t.filter(s=>s[0]===o).map((s,a)=>a+","+s.splice(1).join(","))),i=r(0);for(let o=1;o<n;o++)if(!py(i,r(o)))return;return Array.from(i).map(o=>o.split(",")).map(o=>({method:o[1],start:+o[2],count:+o[3]}))}_updateLayout(t){if(this.notifyPlugins("beforeLayout",{cancelable:!0})===!1)return;Pt.update(this,this.width,this.height,t);const n=this.chartArea,r=n.width<=0||n.height<=0;this._layers=[],Me(this.boxes,i=>{r&&i.position==="chartArea"||(i.configure&&i.configure(),this._layers.push(...i._layers()))},this),this._layers.forEach((i,o)=>{i._idx=o}),this.notifyPlugins("afterLayout")}_updateDatasets(t){if(this.notifyPlugins("beforeDatasetsUpdate",{mode:t,cancelable:!0})!==!1){for(let n=0,r=this.data.datasets.length;n<r;++n)this.getDatasetMeta(n).controller.configure();for(let n=0,r=this.data.datasets.length;n<r;++n)this._updateDataset(n,ni(t)?t({datasetIndex:n}):t);this.notifyPlugins("afterDatasetsUpdate",{mode:t})}}_updateDataset(t,n){const r=this.getDatasetMeta(t),i={meta:r,index:t,mode:n,cancelable:!0};this.notifyPlugins("beforeDatasetUpdate",i)!==!1&&(r.controller._update(n),i.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",i))}render(){this.notifyPlugins("beforeRender",{cancelable:!0})!==!1&&(er.has(this)?this.attached&&!er.running(this)&&er.start(this):(this.draw(),rx({chart:this})))}draw(){let t;if(this._resizeBeforeDraw){const{width:r,height:i}=this._resizeBeforeDraw;this._resize(r,i),this._resizeBeforeDraw=null}if(this.clear(),this.width<=0||this.height<=0||this.notifyPlugins("beforeDraw",{cancelable:!0})===!1)return;const n=this._layers;for(t=0;t<n.length&&n[t].z<=0;++t)n[t].draw(this.chartArea);for(this._drawDatasets();t<n.length;++t)n[t].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(t){const n=this._sortedMetasets,r=[];let i,o;for(i=0,o=n.length;i<o;++i){const s=n[i];(!t||s.visible)&&r.push(s)}return r}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0})===!1)return;const t=this.getSortedVisibleDatasetMetas();for(let n=t.length-1;n>=0;--n)this._drawDataset(t[n]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(t){const n=this.ctx,r=t._clip,i=!r.disabled,o=W7(t,this.chartArea),s={meta:t,index:t.index,cancelable:!0};this.notifyPlugins("beforeDatasetDraw",s)!==!1&&(i&&Dd(n,{left:r.left===!1?0:o.left-r.left,right:r.right===!1?this.width:o.right+r.right,top:r.top===!1?0:o.top-r.top,bottom:r.bottom===!1?this.height:o.bottom+r.bottom}),t.controller.draw(),i&&Fd(n),s.cancelable=!1,this.notifyPlugins("afterDatasetDraw",s))}isPointInArea(t){return cr(t,this.chartArea,this._minPadding)}getElementsAtEventForMode(t,n,r,i){const o=F8.modes[n];return typeof o=="function"?o(this,t,r,i):[]}getDatasetMeta(t){const n=this.data.datasets[t],r=this._metasets;let i=r.filter(o=>o&&o._dataset===n).pop();return i||(i={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:n&&n.order||0,index:t,_dataset:n,_parsed:[],_sorted:!1},r.push(i)),i}getContext(){return this.$context||(this.$context=li(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(t){const n=this.data.datasets[t];if(!n)return!1;const r=this.getDatasetMeta(t);return typeof r.hidden=="boolean"?!r.hidden:!n.hidden}setDatasetVisibility(t,n){const r=this.getDatasetMeta(t);r.hidden=!n}toggleDataVisibility(t){this._hiddenIndices[t]=!this._hiddenIndices[t]}getDataVisibility(t){return!this._hiddenIndices[t]}_updateVisibility(t,n,r){const i=r?"show":"hide",o=this.getDatasetMeta(t),s=o.controller._resolveAnimations(void 0,i);Na(n)?(o.data[n].hidden=!r,this.update()):(this.setDatasetVisibility(t,r),s.update(o,{visible:r}),this.update(a=>a.datasetIndex===t?i:void 0))}hide(t,n){this._updateVisibility(t,n,!1)}show(t,n){this._updateVisibility(t,n,!0)}_destroyDatasetMeta(t){const n=this._metasets[t];n&&n.controller&&n.controller._destroy(),delete this._metasets[t]}_stop(){let t,n;for(this.stop(),er.remove(this),t=0,n=this.data.datasets.length;t<n;++t)this._destroyDatasetMeta(t)}destroy(){this.notifyPlugins("beforeDestroy");const{canvas:t,ctx:n}=this;this._stop(),this.config.clearCache(),t&&(this.unbindEvents(),Sy(t,n),this.platform.releaseContext(n),this.canvas=null,this.ctx=null),delete Pc[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...t){return this.canvas.toDataURL(...t)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){const t=this._listeners,n=this.platform,r=(o,s)=>{n.addEventListener(this,o,s),t[o]=s},i=(o,s,a)=>{o.offsetX=s,o.offsetY=a,this._eventHandler(o)};Me(this.options.events,o=>r(o,i))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});const t=this._responsiveListeners,n=this.platform,r=(l,c)=>{n.addEventListener(this,l,c),t[l]=c},i=(l,c)=>{t[l]&&(n.removeEventListener(this,l,c),delete t[l])},o=(l,c)=>{this.canvas&&this.resize(l,c)};let s;const a=()=>{i("attach",a),this.attached=!0,this.resize(),r("resize",o),r("detach",s)};s=()=>{this.attached=!1,i("resize",o),this._stop(),this._resize(0,0),r("attach",a)},n.isAttached(this.canvas)?a():s()}unbindEvents(){Me(this._listeners,(t,n)=>{this.platform.removeEventListener(this,n,t)}),this._listeners={},Me(this._responsiveListeners,(t,n)=>{this.platform.removeEventListener(this,n,t)}),this._responsiveListeners=void 0}updateHoverStyle(t,n,r){const i=r?"set":"remove";let o,s,a,l;for(n==="dataset"&&(o=this.getDatasetMeta(t[0].datasetIndex),o.controller["_"+i+"DatasetHoverStyle"]()),a=0,l=t.length;a<l;++a){s=t[a];const c=s&&this.getDatasetMeta(s.datasetIndex).controller;c&&c[i+"HoverStyle"](s.element,s.datasetIndex,s.index)}}getActiveElements(){return this._active||[]}setActiveElements(t){const n=this._active||[],r=t.map(({datasetIndex:o,index:s})=>{const a=this.getDatasetMeta(o);if(!a)throw new Error("No dataset found at index "+o);return{datasetIndex:o,element:a.data[s],index:s}});!vu(r,n)&&(this._active=r,this._lastEvent=null,this._updateHoverStyles(r,n))}notifyPlugins(t,n,r){return this._plugins.notify(this,t,n,r)}isPluginEnabled(t){return this._plugins._cache.filter(n=>n.plugin.id===t).length===1}_updateHoverStyles(t,n,r){const i=this.options.hover,o=(l,c)=>l.filter(u=>!c.some(d=>u.datasetIndex===d.datasetIndex&&u.index===d.index)),s=o(n,t),a=r?t:o(t,n);s.length&&this.updateHoverStyle(s,i.mode,!1),a.length&&i.mode&&this.updateHoverStyle(a,i.mode,!0)}_eventHandler(t,n){const r={event:t,replay:n,cancelable:!0,inChartArea:this.isPointInArea(t)},i=s=>(s.options.events||this.options.events).includes(t.native.type);if(this.notifyPlugins("beforeEvent",r,i)===!1)return;const o=this._handleEvent(t,n,r.inChartArea);return r.cancelable=!1,this.notifyPlugins("afterEvent",r,i),(o||r.changed)&&this.render(),this}_handleEvent(t,n,r){const{_active:i=[],options:o}=this,s=n,a=this._getActiveElements(t,i,r,s),l=QL(t),c=V7(t,this._lastEvent,r,l);r&&(this._lastEvent=null,Re(o.onHover,[t,a,this],this),l&&Re(o.onClick,[t,a,this],this));const u=!vu(a,i);return(u||n)&&(this._active=a,this._updateHoverStyles(a,i,n)),this._lastEvent=c,u}_getActiveElements(t,n,r,i){if(t.type==="mouseout")return[];if(!r)return n;const o=this.options.hover;return this.getElementsAtEventForMode(t,o.mode,o,i)}}W(In,"defaults",qe),W(In,"instances",Pc),W(In,"overrides",zi),W(In,"registry",$n),W(In,"version",D7),W(In,"getChart",ix);function ox(){return Me(In.instances,e=>e._plugins.invalidate())}function H7(e,t,n){const{startAngle:r,pixelMargin:i,x:o,y:s,outerRadius:a,innerRadius:l}=t;let c=i/a;e.beginPath(),e.arc(o,s,a,r-c,n+c),l>i?(c=i/l,e.arc(o,s,l,n+c,r-c,!0)):e.arc(o,s,i,n+Ze,r-Ze),e.closePath(),e.clip()}function U7(e){return qg(e,["outerStart","outerEnd","innerStart","innerEnd"])}function Y7(e,t,n,r){const i=U7(e.options.borderRadius),o=(n-t)/2,s=Math.min(o,r*t/2),a=l=>{const c=(n-Math.min(o,l))*r/2;return ut(l,0,Math.min(o,c))};return{outerStart:a(i.outerStart),outerEnd:a(i.outerEnd),innerStart:ut(i.innerStart,0,s),innerEnd:ut(i.innerEnd,0,s)}}function eo(e,t,n,r){return{x:n+e*Math.cos(t),y:r+e*Math.sin(t)}}function Su(e,t,n,r,i,o){const{x:s,y:a,startAngle:l,pixelMargin:c,innerRadius:u}=t,d=Math.max(t.outerRadius+r+n-c,0),h=u>0?u+r+n+c:0;let m=0;const y=i-l;if(r){const V=u>0?u-r:0,K=d>0?d-r:0,Y=(V+K)/2,Z=Y!==0?y*Y/(Y+r):y;m=(y-Z)/2}const v=Math.max(.001,y*d-n/Ie)/d,p=(y-v)/2,g=l+p+m,x=i-p-m,{outerStart:b,outerEnd:w,innerStart:S,innerEnd:C}=Y7(t,h,d,x-g),P=d-b,M=d-w,O=g+b/P,N=x-w/M,A=h+S,z=h+C,H=g+S/A,Q=x-C/z;if(e.beginPath(),o){const V=(O+N)/2;if(e.arc(s,a,d,O,V),e.arc(s,a,d,V,N),w>0){const ye=eo(M,N,s,a);e.arc(ye.x,ye.y,w,N,x+Ze)}const K=eo(z,x,s,a);if(e.lineTo(K.x,K.y),C>0){const ye=eo(z,Q,s,a);e.arc(ye.x,ye.y,C,x+Ze,Q+Math.PI)}const Y=(x-C/h+(g+S/h))/2;if(e.arc(s,a,h,x-C/h,Y,!0),e.arc(s,a,h,Y,g+S/h,!0),S>0){const ye=eo(A,H,s,a);e.arc(ye.x,ye.y,S,H+Math.PI,g-Ze)}const Z=eo(P,g,s,a);if(e.lineTo(Z.x,Z.y),b>0){const ye=eo(P,O,s,a);e.arc(ye.x,ye.y,b,g-Ze,O)}}else{e.moveTo(s,a);const V=Math.cos(O)*d+s,K=Math.sin(O)*d+a;e.lineTo(V,K);const Y=Math.cos(N)*d+s,Z=Math.sin(N)*d+a;e.lineTo(Y,Z)}e.closePath()}function X7(e,t,n,r,i){const{fullCircles:o,startAngle:s,circumference:a}=t;let l=t.endAngle;if(o){Su(e,t,n,r,l,i);for(let c=0;c<o;++c)e.fill();isNaN(a)||(l=s+(a%ze||ze))}return Su(e,t,n,r,l,i),e.fill(),l}function K7(e,t,n,r,i){const{fullCircles:o,startAngle:s,circumference:a,options:l}=t,{borderWidth:c,borderJoinStyle:u,borderDash:d,borderDashOffset:h}=l,m=l.borderAlign==="inner";if(!c)return;e.setLineDash(d||[]),e.lineDashOffset=h,m?(e.lineWidth=c*2,e.lineJoin=u||"round"):(e.lineWidth=c,e.lineJoin=u||"bevel");let y=t.endAngle;if(o){Su(e,t,n,r,y,i);for(let v=0;v<o;++v)e.stroke();isNaN(a)||(y=s+(a%ze||ze))}m&&H7(e,t,y),o||(Su(e,t,n,r,y,i),e.stroke())}class Rs extends Mn{constructor(n){super();W(this,"circumference");W(this,"endAngle");W(this,"fullCircles");W(this,"innerRadius");W(this,"outerRadius");W(this,"pixelMargin");W(this,"startAngle");this.options=void 0,this.circumference=void 0,this.startAngle=void 0,this.endAngle=void 0,this.innerRadius=void 0,this.outerRadius=void 0,this.pixelMargin=0,this.fullCircles=0,n&&Object.assign(this,n)}inRange(n,r,i){const o=this.getProps(["x","y"],i),{angle:s,distance:a}=J_(o,{x:n,y:r}),{startAngle:l,endAngle:c,innerRadius:u,outerRadius:d,circumference:h}=this.getProps(["startAngle","endAngle","innerRadius","outerRadius","circumference"],i),m=(this.options.spacing+this.options.borderWidth)/2,v=oe(h,c-l)>=ze||Ta(s,l,c),p=ar(a,u+m,d+m);return v&&p}getCenterPoint(n){const{x:r,y:i,startAngle:o,endAngle:s,innerRadius:a,outerRadius:l}=this.getProps(["x","y","startAngle","endAngle","innerRadius","outerRadius"],n),{offset:c,spacing:u}=this.options,d=(o+s)/2,h=(a+l+u+c)/2;return{x:r+Math.cos(d)*h,y:i+Math.sin(d)*h}}tooltipPosition(n){return this.getCenterPoint(n)}draw(n){const{options:r,circumference:i}=this,o=(r.offset||0)/4,s=(r.spacing||0)/2,a=r.circular;if(this.pixelMargin=r.borderAlign==="inner"?.33:0,this.fullCircles=i>ze?Math.floor(i/ze):0,i===0||this.innerRadius<0||this.outerRadius<0)return;n.save();const l=(this.startAngle+this.endAngle)/2;n.translate(Math.cos(l)*o,Math.sin(l)*o);const c=1-Math.sin(Math.min(Ie,i||0)),u=o*c;n.fillStyle=r.backgroundColor,n.strokeStyle=r.borderColor,X7(n,this,u,s,a),K7(n,this,u,s,a),n.restore()}}W(Rs,"id","arc"),W(Rs,"defaults",{borderAlign:"center",borderColor:"#fff",borderDash:[],borderDashOffset:0,borderJoinStyle:void 0,borderRadius:0,borderWidth:2,offset:0,spacing:0,angle:void 0,circular:!0}),W(Rs,"defaultRoutes",{backgroundColor:"backgroundColor"}),W(Rs,"descriptors",{_scriptable:!0,_indexable:n=>n!=="borderDash"});function RS(e,t,n=t){e.lineCap=oe(n.borderCapStyle,t.borderCapStyle),e.setLineDash(oe(n.borderDash,t.borderDash)),e.lineDashOffset=oe(n.borderDashOffset,t.borderDashOffset),e.lineJoin=oe(n.borderJoinStyle,t.borderJoinStyle),e.lineWidth=oe(n.borderWidth,t.borderWidth),e.strokeStyle=oe(n.borderColor,t.borderColor)}function G7(e,t,n){e.lineTo(n.x,n.y)}function q7(e){return e.stepped?xA:e.tension||e.cubicInterpolationMode==="monotone"?bA:G7}function $S(e,t,n={}){const r=e.length,{start:i=0,end:o=r-1}=n,{start:s,end:a}=t,l=Math.max(i,s),c=Math.min(o,a),u=i<s&&o<s||i>a&&o>a;return{count:r,start:l,loop:t.loop,ilen:c<l&&!u?r+c-l:c-l}}function Q7(e,t,n,r){const{points:i,options:o}=t,{count:s,start:a,loop:l,ilen:c}=$S(i,n,r),u=q7(o);let{move:d=!0,reverse:h}=r||{},m,y,v;for(m=0;m<=c;++m)y=i[(a+(h?c-m:m))%s],!y.skip&&(d?(e.moveTo(y.x,y.y),d=!1):u(e,v,y,h,o.stepped),v=y);return l&&(y=i[(a+(h?c:0))%s],u(e,v,y,h,o.stepped)),!!l}function Z7(e,t,n,r){const i=t.points,{count:o,start:s,ilen:a}=$S(i,n,r),{move:l=!0,reverse:c}=r||{};let u=0,d=0,h,m,y,v,p,g;const x=w=>(s+(c?a-w:w))%o,b=()=>{v!==p&&(e.lineTo(u,p),e.lineTo(u,v),e.lineTo(u,g))};for(l&&(m=i[x(0)],e.moveTo(m.x,m.y)),h=0;h<=a;++h){if(m=i[x(h)],m.skip)continue;const w=m.x,S=m.y,C=w|0;C===y?(S<v?v=S:S>p&&(p=S),u=(d*u+w)/++d):(b(),e.lineTo(w,S),y=C,d=0,v=p=S),g=S}b()}function $p(e){const t=e.options,n=t.borderDash&&t.borderDash.length;return!e._decimated&&!e._loop&&!t.tension&&t.cubicInterpolationMode!=="monotone"&&!t.stepped&&!n?Z7:Q7}function J7(e){return e.stepped?ZA:e.tension||e.cubicInterpolationMode==="monotone"?JA:vi}function ez(e,t,n,r){let i=t._path;i||(i=t._path=new Path2D,t.path(i,n,r)&&i.closePath()),RS(e,t.options),e.stroke(i)}function tz(e,t,n,r){const{segments:i,options:o}=t,s=$p(t);for(const a of i)RS(e,o,a.style),e.beginPath(),s(e,t,a,{start:n,end:n+r-1})&&e.closePath(),e.stroke()}const nz=typeof Path2D=="function";function rz(e,t,n,r){nz&&!t.options.segment?ez(e,t,n,r):tz(e,t,n,r)}class Tr extends Mn{constructor(t){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,t&&Object.assign(this,t)}updateControlPoints(t,n){const r=this.options;if((r.tension||r.cubicInterpolationMode==="monotone")&&!r.stepped&&!this._pointsUpdated){const i=r.spanGaps?this._loop:this._fullLoop;HA(this._points,r,t,i,n),this._pointsUpdated=!0}}set points(t){this._points=t,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=o8(this,this.options.segment))}first(){const t=this.segments,n=this.points;return t.length&&n[t[0].start]}last(){const t=this.segments,n=this.points,r=t.length;return r&&n[t[r-1].end]}interpolate(t,n){const r=this.options,i=t[n],o=this.points,s=xS(this,{property:n,start:i,end:i});if(!s.length)return;const a=[],l=J7(r);let c,u;for(c=0,u=s.length;c<u;++c){const{start:d,end:h}=s[c],m=o[d],y=o[h];if(m===y){a.push(m);continue}const v=Math.abs((i-m[n])/(y[n]-m[n])),p=l(m,y,v,r.stepped);p[n]=t[n],a.push(p)}return a.length===1?a[0]:a}pathSegment(t,n,r){return $p(this)(t,this,n,r)}path(t,n,r){const i=this.segments,o=$p(this);let s=this._loop;n=n||0,r=r||this.points.length-n;for(const a of i)s&=o(t,this,a,{start:n,end:n+r-1});return!!s}draw(t,n,r,i){const o=this.options||{};(this.points||[]).length&&o.borderWidth&&(t.save(),rz(t,this,r,i),t.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}}W(Tr,"id","line"),W(Tr,"defaults",{borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0}),W(Tr,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"}),W(Tr,"descriptors",{_scriptable:!0,_indexable:t=>t!=="borderDash"&&t!=="fill"});function sx(e,t,n,r){const i=e.options,{[n]:o}=e.getProps([n],r);return Math.abs(t-o)<i.radius+i.hitRadius}class Mc extends Mn{constructor(n){super();W(this,"parsed");W(this,"skip");W(this,"stop");this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,n&&Object.assign(this,n)}inRange(n,r,i){const o=this.options,{x:s,y:a}=this.getProps(["x","y"],i);return Math.pow(n-s,2)+Math.pow(r-a,2)<Math.pow(o.hitRadius+o.radius,2)}inXRange(n,r){return sx(this,n,"x",r)}inYRange(n,r){return sx(this,n,"y",r)}getCenterPoint(n){const{x:r,y:i}=this.getProps(["x","y"],n);return{x:r,y:i}}size(n){n=n||this.options||{};let r=n.radius||0;r=Math.max(r,r&&n.hoverRadius||0);const i=r&&n.borderWidth||0;return(r+i)*2}draw(n,r){const i=this.options;this.skip||i.radius<.1||!cr(this,r,this.size(i)/2)||(n.strokeStyle=i.borderColor,n.lineWidth=i.borderWidth,n.fillStyle=i.backgroundColor,Op(n,i,this.x,this.y))}getRange(){const n=this.options||{};return n.radius+n.hitRadius}}W(Mc,"id","point"),W(Mc,"defaults",{borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0}),W(Mc,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});function LS(e,t){const{x:n,y:r,base:i,width:o,height:s}=e.getProps(["x","y","base","width","height"],t);let a,l,c,u,d;return e.horizontal?(d=s/2,a=Math.min(n,i),l=Math.max(n,i),c=r-d,u=r+d):(d=o/2,a=n-d,l=n+d,c=Math.min(r,i),u=Math.max(r,i)),{left:a,top:c,right:l,bottom:u}}function Rr(e,t,n,r){return e?0:ut(t,n,r)}function iz(e,t,n){const r=e.options.borderWidth,i=e.borderSkipped,o=lS(r);return{t:Rr(i.top,o.top,0,n),r:Rr(i.right,o.right,0,t),b:Rr(i.bottom,o.bottom,0,n),l:Rr(i.left,o.left,0,t)}}function oz(e,t,n){const{enableBorderRadius:r}=e.getProps(["enableBorderRadius"]),i=e.options.borderRadius,o=Mi(i),s=Math.min(t,n),a=e.borderSkipped,l=r||ue(i);return{topLeft:Rr(!l||a.top||a.left,o.topLeft,0,s),topRight:Rr(!l||a.top||a.right,o.topRight,0,s),bottomLeft:Rr(!l||a.bottom||a.left,o.bottomLeft,0,s),bottomRight:Rr(!l||a.bottom||a.right,o.bottomRight,0,s)}}function sz(e){const t=LS(e),n=t.right-t.left,r=t.bottom-t.top,i=iz(e,n/2,r/2),o=oz(e,n/2,r/2);return{outer:{x:t.left,y:t.top,w:n,h:r,radius:o},inner:{x:t.left+i.l,y:t.top+i.t,w:n-i.l-i.r,h:r-i.t-i.b,radius:{topLeft:Math.max(0,o.topLeft-Math.max(i.t,i.l)),topRight:Math.max(0,o.topRight-Math.max(i.t,i.r)),bottomLeft:Math.max(0,o.bottomLeft-Math.max(i.b,i.l)),bottomRight:Math.max(0,o.bottomRight-Math.max(i.b,i.r))}}}}function eh(e,t,n,r){const i=t===null,o=n===null,a=e&&!(i&&o)&&LS(e,r);return a&&(i||ar(t,a.left,a.right))&&(o||ar(n,a.top,a.bottom))}function az(e){return e.topLeft||e.topRight||e.bottomLeft||e.bottomRight}function lz(e,t){e.rect(t.x,t.y,t.w,t.h)}function th(e,t,n={}){const r=e.x!==n.x?-t:0,i=e.y!==n.y?-t:0,o=(e.x+e.w!==n.x+n.w?t:0)-r,s=(e.y+e.h!==n.y+n.h?t:0)-i;return{x:e.x+r,y:e.y+i,w:e.w+o,h:e.h+s,radius:e.radius}}class Ec extends Mn{constructor(t){super(),this.options=void 0,this.horizontal=void 0,this.base=void 0,this.width=void 0,this.height=void 0,this.inflateAmount=void 0,t&&Object.assign(this,t)}draw(t){const{inflateAmount:n,options:{borderColor:r,backgroundColor:i}}=this,{inner:o,outer:s}=sz(this),a=az(s.radius)?Ra:lz;t.save(),(s.w!==o.w||s.h!==o.h)&&(t.beginPath(),a(t,th(s,n,o)),t.clip(),a(t,th(o,-n,s)),t.fillStyle=r,t.fill("evenodd")),t.beginPath(),a(t,th(o,n)),t.fillStyle=i,t.fill(),t.restore()}inRange(t,n,r){return eh(this,t,n,r)}inXRange(t,n){return eh(this,t,null,n)}inYRange(t,n){return eh(this,null,t,n)}getCenterPoint(t){const{x:n,y:r,base:i,horizontal:o}=this.getProps(["x","y","base","horizontal"],t);return{x:o?(n+i)/2:n,y:o?r:(r+i)/2}}getRange(t){return t==="x"?this.width/2:this.height/2}}W(Ec,"id","bar"),W(Ec,"defaults",{borderSkipped:"start",borderWidth:0,borderRadius:0,inflateAmount:"auto",pointStyle:void 0}),W(Ec,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});var cz=Object.freeze({__proto__:null,ArcElement:Rs,BarElement:Ec,LineElement:Tr,PointElement:Mc});const Lp=["rgb(54, 162, 235)","rgb(255, 99, 132)","rgb(255, 159, 64)","rgb(255, 205, 86)","rgb(75, 192, 192)","rgb(153, 102, 255)","rgb(201, 203, 207)"],ax=Lp.map(e=>e.replace("rgb(","rgba(").replace(")",", 0.5)"));function AS(e){return Lp[e%Lp.length]}function zS(e){return ax[e%ax.length]}function uz(e,t){return e.borderColor=AS(t),e.backgroundColor=zS(t),++t}function dz(e,t){return e.backgroundColor=e.data.map(()=>AS(t++)),t}function fz(e,t){return e.backgroundColor=e.data.map(()=>zS(t++)),t}function hz(e){let t=0;return(n,r)=>{const i=e.getDatasetMeta(r).controller;i instanceof Nr?t=dz(n,t):i instanceof ta?t=fz(n,t):i&&(t=uz(n,t))}}function lx(e){let t;for(t in e)if(e[t].borderColor||e[t].backgroundColor)return!0;return!1}function pz(e){return e&&(e.borderColor||e.backgroundColor)}var mz={id:"colors",defaults:{enabled:!0,forceOverride:!1},beforeLayout(e,t,n){if(!n.enabled)return;const{data:{datasets:r},options:i}=e.config,{elements:o}=i;if(!n.forceOverride&&(lx(r)||pz(i)||o&&lx(o)))return;const s=hz(e);r.forEach(s)}};function gz(e,t,n,r,i){const o=i.samples||r;if(o>=n)return e.slice(t,t+n);const s=[],a=(n-2)/(o-2);let l=0;const c=t+n-1;let u=t,d,h,m,y,v;for(s[l++]=e[u],d=0;d<o-2;d++){let p=0,g=0,x;const b=Math.floor((d+1)*a)+1+t,w=Math.min(Math.floor((d+2)*a)+1,n)+t,S=w-b;for(x=b;x<w;x++)p+=e[x].x,g+=e[x].y;p/=S,g/=S;const C=Math.floor(d*a)+1+t,P=Math.min(Math.floor((d+1)*a)+1,n)+t,{x:M,y:O}=e[u];for(m=y=-1,x=C;x<P;x++)y=.5*Math.abs((M-p)*(e[x].y-O)-(M-e[x].x)*(g-O)),y>m&&(m=y,h=e[x],v=x);s[l++]=h,u=v}return s[l++]=e[c],s}function vz(e,t,n,r){let i=0,o=0,s,a,l,c,u,d,h,m,y,v;const p=[],g=t+n-1,x=e[t].x,w=e[g].x-x;for(s=t;s<t+n;++s){a=e[s],l=(a.x-x)/w*r,c=a.y;const S=l|0;if(S===u)c<y?(y=c,d=s):c>v&&(v=c,h=s),i=(o*i+a.x)/++o;else{const C=s-1;if(!ge(d)&&!ge(h)){const P=Math.min(d,h),M=Math.max(d,h);P!==m&&P!==C&&p.push({...e[P],x:i}),M!==m&&M!==C&&p.push({...e[M],x:i})}s>0&&C!==m&&p.push(e[C]),p.push(a),u=S,o=0,y=v=c,d=h=m=s}}return p}function IS(e){if(e._decimated){const t=e._data;delete e._decimated,delete e._data,Object.defineProperty(e,"data",{configurable:!0,enumerable:!0,writable:!0,value:t})}}function cx(e){e.data.datasets.forEach(t=>{IS(t)})}function yz(e,t){const n=t.length;let r=0,i;const{iScale:o}=e,{min:s,max:a,minDefined:l,maxDefined:c}=o.getUserBounds();return l&&(r=ut(lr(t,o.axis,s).lo,0,n-1)),c?i=ut(lr(t,o.axis,a).hi+1,r,n)-r:i=n-r,{start:r,count:i}}var xz={id:"decimation",defaults:{algorithm:"min-max",enabled:!1},beforeElementsUpdate:(e,t,n)=>{if(!n.enabled){cx(e);return}const r=e.width;e.data.datasets.forEach((i,o)=>{const{_data:s,indexAxis:a}=i,l=e.getDatasetMeta(o),c=s||i.data;if(Ns([a,e.options.indexAxis])==="y"||!l.controller.supportsDecimation)return;const u=e.scales[l.xAxisID];if(u.type!=="linear"&&u.type!=="time"||e.options.parsing)return;let{start:d,count:h}=yz(l,c);const m=n.threshold||4*r;if(h<=m){IS(i);return}ge(s)&&(i._data=c,delete i.data,Object.defineProperty(i,"data",{configurable:!0,enumerable:!0,get:function(){return this._decimated},set:function(v){this._data=v}}));let y;switch(n.algorithm){case"lttb":y=gz(c,d,h,r,n);break;case"min-max":y=vz(c,d,h,r);break;default:throw new Error(`Unsupported decimation algorithm '${n.algorithm}'`)}i._decimated=y})},destroy(e){cx(e)}};function bz(e,t,n){const r=e.segments,i=e.points,o=t.points,s=[];for(const a of r){let{start:l,end:c}=a;c=r0(l,c,i);const u=Ap(n,i[l],i[c],a.loop);if(!t.segments){s.push({source:a,target:u,start:i[l],end:i[c]});continue}const d=xS(t,u);for(const h of d){const m=Ap(n,o[h.start],o[h.end],h.loop),y=yS(a,i,m);for(const v of y)s.push({source:v,target:h,start:{[n]:ux(u,m,"start",Math.max)},end:{[n]:ux(u,m,"end",Math.min)}})}}return s}function Ap(e,t,n,r){if(r)return;let i=t[e],o=n[e];return e==="angle"&&(i=Ut(i),o=Ut(o)),{property:e,start:i,end:o}}function wz(e,t){const{x:n=null,y:r=null}=e||{},i=t.points,o=[];return t.segments.forEach(({start:s,end:a})=>{a=r0(s,a,i);const l=i[s],c=i[a];r!==null?(o.push({x:l.x,y:r}),o.push({x:c.x,y:r})):n!==null&&(o.push({x:n,y:l.y}),o.push({x:n,y:c.y}))}),o}function r0(e,t,n){for(;t>e;t--){const r=n[t];if(!isNaN(r.x)&&!isNaN(r.y))break}return t}function ux(e,t,n,r){return e&&t?r(e[n],t[n]):e?e[n]:t?t[n]:0}function DS(e,t){let n=[],r=!1;return Le(e)?(r=!0,n=e):n=wz(e,t),n.length?new Tr({points:n,options:{tension:0},_loop:r,_fullLoop:r}):null}function dx(e){return e&&e.fill!==!1}function _z(e,t,n){let i=e[t].fill;const o=[t];let s;if(!n)return i;for(;i!==!1&&o.indexOf(i)===-1;){if(!Ge(i))return i;if(s=e[i],!s)return!1;if(s.visible)return i;o.push(i),i=s.fill}return!1}function Sz(e,t,n){const r=Mz(e);if(ue(r))return isNaN(r.value)?!1:r;let i=parseFloat(r);return Ge(i)&&Math.floor(i)===i?kz(r[0],t,i,n):["origin","start","end","stack","shape"].indexOf(r)>=0&&r}function kz(e,t,n,r){return(e==="-"||e==="+")&&(n=t+n),n===t||n<0||n>=r?!1:n}function Cz(e,t){let n=null;return e==="start"?n=t.bottom:e==="end"?n=t.top:ue(e)?n=t.getPixelForValue(e.value):t.getBasePixel&&(n=t.getBasePixel()),n}function Pz(e,t,n){let r;return e==="start"?r=n:e==="end"?r=t.options.reverse?t.min:t.max:ue(e)?r=e.value:r=t.getBaseValue(),r}function Mz(e){const t=e.options,n=t.fill;let r=oe(n&&n.target,n);return r===void 0&&(r=!!t.backgroundColor),r===!1||r===null?!1:r===!0?"origin":r}function Ez(e){const{scale:t,index:n,line:r}=e,i=[],o=r.segments,s=r.points,a=Oz(t,n);a.push(DS({x:null,y:t.bottom},r));for(let l=0;l<o.length;l++){const c=o[l];for(let u=c.start;u<=c.end;u++)Nz(i,s[u],a)}return new Tr({points:i,options:{}})}function Oz(e,t){const n=[],r=e.getMatchingVisibleMetas("line");for(let i=0;i<r.length;i++){const o=r[i];if(o.index===t)break;o.hidden||n.unshift(o.dataset)}return n}function Nz(e,t,n){const r=[];for(let i=0;i<n.length;i++){const o=n[i],{first:s,last:a,point:l}=Tz(o,t,"x");if(!(!l||s&&a)){if(s)r.unshift(l);else if(e.push(l),!a)break}}e.push(...r)}function Tz(e,t,n){const r=e.interpolate(t,n);if(!r)return{};const i=r[n],o=e.segments,s=e.points;let a=!1,l=!1;for(let c=0;c<o.length;c++){const u=o[c],d=s[u.start][n],h=s[u.end][n];if(ar(i,d,h)){a=i===d,l=i===h;break}}return{first:a,last:l,point:r}}class FS{constructor(t){this.x=t.x,this.y=t.y,this.radius=t.radius}pathSegment(t,n,r){const{x:i,y:o,radius:s}=this;return n=n||{start:0,end:ze},t.arc(i,o,s,n.end,n.start,!0),!r.bounds}interpolate(t){const{x:n,y:r,radius:i}=this,o=t.angle;return{x:n+Math.cos(o)*i,y:r+Math.sin(o)*i,angle:o}}}function Rz(e){const{chart:t,fill:n,line:r}=e;if(Ge(n))return $z(t,n);if(n==="stack")return Ez(e);if(n==="shape")return!0;const i=Lz(e);return i instanceof FS?i:DS(i,r)}function $z(e,t){const n=e.getDatasetMeta(t);return n&&e.isDatasetVisible(t)?n.dataset:null}function Lz(e){return(e.scale||{}).getPointPositionForValue?zz(e):Az(e)}function Az(e){const{scale:t={},fill:n}=e,r=Cz(n,t);if(Ge(r)){const i=t.isHorizontal();return{x:i?r:null,y:i?null:r}}return null}function zz(e){const{scale:t,fill:n}=e,r=t.options,i=t.getLabels().length,o=r.reverse?t.max:t.min,s=Pz(n,t,o),a=[];if(r.grid.circular){const l=t.getPointPositionForValue(0,o);return new FS({x:l.x,y:l.y,radius:t.getDistanceFromCenterForValue(s)})}for(let l=0;l<i;++l)a.push(t.getPointPositionForValue(l,s));return a}function nh(e,t,n){const r=Rz(t),{line:i,scale:o,axis:s}=t,a=i.options,l=a.fill,c=a.backgroundColor,{above:u=c,below:d=c}=l||{};r&&i.points.length&&(Dd(e,n),Iz(e,{line:i,target:r,above:u,below:d,area:n,scale:o,axis:s}),Fd(e))}function Iz(e,t){const{line:n,target:r,above:i,below:o,area:s,scale:a}=t,l=n._loop?"angle":t.axis;e.save(),l==="x"&&o!==i&&(fx(e,r,s.top),hx(e,{line:n,target:r,color:i,scale:a,property:l}),e.restore(),e.save(),fx(e,r,s.bottom)),hx(e,{line:n,target:r,color:o,scale:a,property:l}),e.restore()}function fx(e,t,n){const{segments:r,points:i}=t;let o=!0,s=!1;e.beginPath();for(const a of r){const{start:l,end:c}=a,u=i[l],d=i[r0(l,c,i)];o?(e.moveTo(u.x,u.y),o=!1):(e.lineTo(u.x,n),e.lineTo(u.x,u.y)),s=!!t.pathSegment(e,a,{move:s}),s?e.closePath():e.lineTo(d.x,n)}e.lineTo(t.first().x,n),e.closePath(),e.clip()}function hx(e,t){const{line:n,target:r,property:i,color:o,scale:s}=t,a=bz(n,r,i);for(const{source:l,target:c,start:u,end:d}of a){const{style:{backgroundColor:h=o}={}}=l,m=r!==!0;e.save(),e.fillStyle=h,Dz(e,s,m&&Ap(i,u,d)),e.beginPath();const y=!!n.pathSegment(e,l);let v;if(m){y?e.closePath():px(e,r,d,i);const p=!!r.pathSegment(e,c,{move:y,reverse:!0});v=y&&p,v||px(e,r,u,i)}e.closePath(),e.fill(v?"evenodd":"nonzero"),e.restore()}}function Dz(e,t,n){const{top:r,bottom:i}=t.chart.chartArea,{property:o,start:s,end:a}=n||{};o==="x"&&(e.beginPath(),e.rect(s,r,a-s,i-r),e.clip())}function px(e,t,n,r){const i=t.interpolate(n,r);i&&e.lineTo(i.x,i.y)}var Fz={id:"filler",afterDatasetsUpdate(e,t,n){const r=(e.data.datasets||[]).length,i=[];let o,s,a,l;for(s=0;s<r;++s)o=e.getDatasetMeta(s),a=o.dataset,l=null,a&&a.options&&a instanceof Tr&&(l={visible:e.isDatasetVisible(s),index:s,fill:Sz(a,s,r),chart:e,axis:o.controller.options.indexAxis,scale:o.vScale,line:a}),o.$filler=l,i.push(l);for(s=0;s<r;++s)l=i[s],!(!l||l.fill===!1)&&(l.fill=_z(i,s,n.propagate))},beforeDraw(e,t,n){const r=n.drawTime==="beforeDraw",i=e.getSortedVisibleDatasetMetas(),o=e.chartArea;for(let s=i.length-1;s>=0;--s){const a=i[s].$filler;!a||(a.line.updateControlPoints(o,a.axis),r&&a.fill&&nh(e.ctx,a,o))}},beforeDatasetsDraw(e,t,n){if(n.drawTime!=="beforeDatasetsDraw")return;const r=e.getSortedVisibleDatasetMetas();for(let i=r.length-1;i>=0;--i){const o=r[i].$filler;dx(o)&&nh(e.ctx,o,e.chartArea)}},beforeDatasetDraw(e,t,n){const r=t.meta.$filler;!dx(r)||n.drawTime!=="beforeDatasetDraw"||nh(e.ctx,r,e.chartArea)},defaults:{propagate:!0,drawTime:"beforeDatasetDraw"}};const mx=(e,t)=>{let{boxHeight:n=t,boxWidth:r=t}=e;return e.usePointStyle&&(n=Math.min(n,t),r=e.pointStyleWidth||Math.min(r,t)),{boxWidth:r,boxHeight:n,itemHeight:Math.max(t,n)}},jz=(e,t)=>e!==null&&t!==null&&e.datasetIndex===t.datasetIndex&&e.index===t.index;class gx extends Mn{constructor(t){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,n,r){this.maxWidth=t,this.maxHeight=n,this._margins=r,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){const t=this.options.labels||{};let n=Re(t.generateLabels,[this.chart],this)||[];t.filter&&(n=n.filter(r=>t.filter(r,this.chart.data))),t.sort&&(n=n.sort((r,i)=>t.sort(r,i,this.chart.data))),this.options.reverse&&n.reverse(),this.legendItems=n}fit(){const{options:t,ctx:n}=this;if(!t.display){this.width=this.height=0;return}const r=t.labels,i=lt(r.font),o=i.size,s=this._computeTitleHeight(),{boxWidth:a,itemHeight:l}=mx(r,o);let c,u;n.font=i.string,this.isHorizontal()?(c=this.maxWidth,u=this._fitRows(s,o,a,l)+10):(u=this.maxHeight,c=this._fitCols(s,i,a,l)+10),this.width=Math.min(c,t.maxWidth||this.maxWidth),this.height=Math.min(u,t.maxHeight||this.maxHeight)}_fitRows(t,n,r,i){const{ctx:o,maxWidth:s,options:{labels:{padding:a}}}=this,l=this.legendHitBoxes=[],c=this.lineWidths=[0],u=i+a;let d=t;o.textAlign="left",o.textBaseline="middle";let h=-1,m=-u;return this.legendItems.forEach((y,v)=>{const p=r+n/2+o.measureText(y.text).width;(v===0||c[c.length-1]+p+2*a>s)&&(d+=u,c[c.length-(v>0?0:1)]=0,m+=u,h++),l[v]={left:0,top:m,row:h,width:p,height:i},c[c.length-1]+=p+a}),d}_fitCols(t,n,r,i){const{ctx:o,maxHeight:s,options:{labels:{padding:a}}}=this,l=this.legendHitBoxes=[],c=this.columnSizes=[],u=s-t;let d=a,h=0,m=0,y=0,v=0;return this.legendItems.forEach((p,g)=>{const{itemWidth:x,itemHeight:b}=Bz(r,n,o,p,i);g>0&&m+b+2*a>u&&(d+=h+a,c.push({width:h,height:m}),y+=h+a,v++,h=m=0),l[g]={left:y,top:m,col:v,width:x,height:b},h=Math.max(h,x),m+=b+a}),d+=h,c.push({width:h,height:m}),d}adjustHitBoxes(){if(!this.options.display)return;const t=this._computeTitleHeight(),{legendHitBoxes:n,options:{align:r,labels:{padding:i},rtl:o}}=this,s=No(o,this.left,this.width);if(this.isHorizontal()){let a=0,l=_t(r,this.left+i,this.right-this.lineWidths[a]);for(const c of n)a!==c.row&&(a=c.row,l=_t(r,this.left+i,this.right-this.lineWidths[a])),c.top+=this.top+t+i,c.left=s.leftForLtr(s.x(l),c.width),l+=c.width+i}else{let a=0,l=_t(r,this.top+t+i,this.bottom-this.columnSizes[a].height);for(const c of n)c.col!==a&&(a=c.col,l=_t(r,this.top+t+i,this.bottom-this.columnSizes[a].height)),c.top=l,c.left+=this.left+i,c.left=s.leftForLtr(s.x(c.left),c.width),l+=c.height+i}}isHorizontal(){return this.options.position==="top"||this.options.position==="bottom"}draw(){if(this.options.display){const t=this.ctx;Dd(t,this),this._draw(),Fd(t)}}_draw(){const{options:t,columnSizes:n,lineWidths:r,ctx:i}=this,{align:o,labels:s}=t,a=qe.color,l=No(t.rtl,this.left,this.width),c=lt(s.font),{padding:u}=s,d=c.size,h=d/2;let m;this.drawTitle(),i.textAlign=l.textAlign("left"),i.textBaseline="middle",i.lineWidth=.5,i.font=c.string;const{boxWidth:y,boxHeight:v,itemHeight:p}=mx(s,d),g=function(C,P,M){if(isNaN(y)||y<=0||isNaN(v)||v<0)return;i.save();const O=oe(M.lineWidth,1);if(i.fillStyle=oe(M.fillStyle,a),i.lineCap=oe(M.lineCap,"butt"),i.lineDashOffset=oe(M.lineDashOffset,0),i.lineJoin=oe(M.lineJoin,"miter"),i.lineWidth=O,i.strokeStyle=oe(M.strokeStyle,a),i.setLineDash(oe(M.lineDash,[])),s.usePointStyle){const N={radius:v*Math.SQRT2/2,pointStyle:M.pointStyle,rotation:M.rotation,borderWidth:O},A=l.xPlus(C,y/2),z=P+h;aS(i,N,A,z,s.pointStyleWidth&&y)}else{const N=P+Math.max((d-v)/2,0),A=l.leftForLtr(C,y),z=Mi(M.borderRadius);i.beginPath(),Object.values(z).some(H=>H!==0)?Ra(i,{x:A,y:N,w:y,h:v,radius:z}):i.rect(A,N,y,v),i.fill(),O!==0&&i.stroke()}i.restore()},x=function(C,P,M){Ii(i,M.text,C,P+p/2,c,{strikethrough:M.hidden,textAlign:l.textAlign(M.textAlign)})},b=this.isHorizontal(),w=this._computeTitleHeight();b?m={x:_t(o,this.left+u,this.right-r[0]),y:this.top+u+w,line:0}:m={x:this.left+u,y:_t(o,this.top+w+u,this.bottom-n[0].height),line:0},mS(this.ctx,t.textDirection);const S=p+u;this.legendItems.forEach((C,P)=>{i.strokeStyle=C.fontColor,i.fillStyle=C.fontColor;const M=i.measureText(C.text).width,O=l.textAlign(C.textAlign||(C.textAlign=s.textAlign)),N=y+h+M;let A=m.x,z=m.y;l.setWidth(this.width),b?P>0&&A+N+u>this.right&&(z=m.y+=S,m.line++,A=m.x=_t(o,this.left+u,this.right-r[m.line])):P>0&&z+S>this.bottom&&(A=m.x=A+n[m.line].width+u,m.line++,z=m.y=_t(o,this.top+w+u,this.bottom-n[m.line].height));const H=l.x(A);if(g(H,z,C),A=lA(O,A+y+h,b?A+N:this.right,t.rtl),x(l.x(A),z,C),b)m.x+=N+u;else if(typeof C.text!="string"){const Q=c.lineHeight;m.y+=jS(C,Q)+u}else m.y+=S}),gS(this.ctx,t.textDirection)}drawTitle(){const t=this.options,n=t.title,r=lt(n.font),i=Ot(n.padding);if(!n.display)return;const o=No(t.rtl,this.left,this.width),s=this.ctx,a=n.position,l=r.size/2,c=i.top+l;let u,d=this.left,h=this.width;if(this.isHorizontal())h=Math.max(...this.lineWidths),u=this.top+c,d=_t(t.align,d,this.right-h);else{const y=this.columnSizes.reduce((v,p)=>Math.max(v,p.height),0);u=c+_t(t.align,this.top,this.bottom-y-t.labels.padding-this._computeTitleHeight())}const m=_t(a,d,d+h);s.textAlign=o.textAlign(Kg(a)),s.textBaseline="middle",s.strokeStyle=n.color,s.fillStyle=n.color,s.font=r.string,Ii(s,n.text,m,u,r)}_computeTitleHeight(){const t=this.options.title,n=lt(t.font),r=Ot(t.padding);return t.display?n.lineHeight+r.height:0}_getLegendItemAt(t,n){let r,i,o;if(ar(t,this.left,this.right)&&ar(n,this.top,this.bottom)){for(o=this.legendHitBoxes,r=0;r<o.length;++r)if(i=o[r],ar(t,i.left,i.left+i.width)&&ar(n,i.top,i.top+i.height))return this.legendItems[r]}return null}handleEvent(t){const n=this.options;if(!Hz(t.type,n))return;const r=this._getLegendItemAt(t.x,t.y);if(t.type==="mousemove"||t.type==="mouseout"){const i=this._hoveredItem,o=jz(i,r);i&&!o&&Re(n.onLeave,[t,i,this],this),this._hoveredItem=r,r&&!o&&Re(n.onHover,[t,r,this],this)}else r&&Re(n.onClick,[t,r,this],this)}}function Bz(e,t,n,r,i){const o=Vz(r,e,t,n),s=Wz(i,r,t.lineHeight);return{itemWidth:o,itemHeight:s}}function Vz(e,t,n,r){let i=e.text;return i&&typeof i!="string"&&(i=i.reduce((o,s)=>o.length>s.length?o:s)),t+n.size/2+r.measureText(i).width}function Wz(e,t,n){let r=e;return typeof t.text!="string"&&(r=jS(t,n)),r}function jS(e,t){const n=e.text?e.text.length:0;return t*n}function Hz(e,t){return!!((e==="mousemove"||e==="mouseout")&&(t.onHover||t.onLeave)||t.onClick&&(e==="click"||e==="mouseup"))}var Uz={id:"legend",_element:gx,start(e,t,n){const r=e.legend=new gx({ctx:e.ctx,options:n,chart:e});Pt.configure(e,r,n),Pt.addBox(e,r)},stop(e){Pt.removeBox(e,e.legend),delete e.legend},beforeUpdate(e,t,n){const r=e.legend;Pt.configure(e,r,n),r.options=n},afterUpdate(e){const t=e.legend;t.buildLabels(),t.adjustHitBoxes()},afterEvent(e,t){t.replay||e.legend.handleEvent(t.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(e,t,n){const r=t.datasetIndex,i=n.chart;i.isDatasetVisible(r)?(i.hide(r),t.hidden=!0):(i.show(r),t.hidden=!1)},onHover:null,onLeave:null,labels:{color:e=>e.chart.options.color,boxWidth:40,padding:10,generateLabels(e){const t=e.data.datasets,{labels:{usePointStyle:n,pointStyle:r,textAlign:i,color:o,useBorderRadius:s,borderRadius:a}}=e.legend.options;return e._getSortedDatasetMetas().map(l=>{const c=l.controller.getStyle(n?0:void 0),u=Ot(c.borderWidth);return{text:t[l.index].label,fillStyle:c.backgroundColor,fontColor:o,hidden:!l.visible,lineCap:c.borderCapStyle,lineDash:c.borderDash,lineDashOffset:c.borderDashOffset,lineJoin:c.borderJoinStyle,lineWidth:(u.width+u.height)/4,strokeStyle:c.borderColor,pointStyle:r||c.pointStyle,rotation:c.rotation,textAlign:i||c.textAlign,borderRadius:s&&(a||c.borderRadius),datasetIndex:l.index}},this)}},title:{color:e=>e.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:e=>!e.startsWith("on"),labels:{_scriptable:e=>!["generateLabels","filter","sort"].includes(e)}}};class i0 extends Mn{constructor(t){super(),this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this._padding=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,n){const r=this.options;if(this.left=0,this.top=0,!r.display){this.width=this.height=this.right=this.bottom=0;return}this.width=this.right=t,this.height=this.bottom=n;const i=Le(r.text)?r.text.length:1;this._padding=Ot(r.padding);const o=i*lt(r.font).lineHeight+this._padding.height;this.isHorizontal()?this.height=o:this.width=o}isHorizontal(){const t=this.options.position;return t==="top"||t==="bottom"}_drawArgs(t){const{top:n,left:r,bottom:i,right:o,options:s}=this,a=s.align;let l=0,c,u,d;return this.isHorizontal()?(u=_t(a,r,o),d=n+t,c=o-r):(s.position==="left"?(u=r+t,d=_t(a,i,n),l=Ie*-.5):(u=o-t,d=_t(a,n,i),l=Ie*.5),c=i-n),{titleX:u,titleY:d,maxWidth:c,rotation:l}}draw(){const t=this.ctx,n=this.options;if(!n.display)return;const r=lt(n.font),o=r.lineHeight/2+this._padding.top,{titleX:s,titleY:a,maxWidth:l,rotation:c}=this._drawArgs(o);Ii(t,n.text,0,0,r,{color:n.color,maxWidth:l,rotation:c,textAlign:Kg(n.align),textBaseline:"middle",translation:[s,a]})}}function Yz(e,t){const n=new i0({ctx:e.ctx,options:t,chart:e});Pt.configure(e,n,t),Pt.addBox(e,n),e.titleBlock=n}var Xz={id:"title",_element:i0,start(e,t,n){Yz(e,n)},stop(e){const t=e.titleBlock;Pt.removeBox(e,t),delete e.titleBlock},beforeUpdate(e,t,n){const r=e.titleBlock;Pt.configure(e,r,n),r.options=n},defaults:{align:"center",display:!1,font:{weight:"bold"},fullSize:!0,padding:10,position:"top",text:"",weight:2e3},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const Ql=new WeakMap;var Kz={id:"subtitle",start(e,t,n){const r=new i0({ctx:e.ctx,options:n,chart:e});Pt.configure(e,r,n),Pt.addBox(e,r),Ql.set(e,r)},stop(e){Pt.removeBox(e,Ql.get(e)),Ql.delete(e)},beforeUpdate(e,t,n){const r=Ql.get(e);Pt.configure(e,r,n),r.options=n},defaults:{align:"center",display:!1,font:{weight:"normal"},fullSize:!0,padding:0,position:"top",text:"",weight:1500},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const $s={average(e){if(!e.length)return!1;let t,n,r=new Set,i=0,o=0;for(t=0,n=e.length;t<n;++t){const a=e[t].element;if(a&&a.hasValue()){const l=a.tooltipPosition();r.add(l.x),i+=l.y,++o}}return{x:[...r].reduce((a,l)=>a+l)/r.size,y:i/o}},nearest(e,t){if(!e.length)return!1;let n=t.x,r=t.y,i=Number.POSITIVE_INFINITY,o,s,a;for(o=0,s=e.length;o<s;++o){const l=e[o].element;if(l&&l.hasValue()){const c=l.getCenterPoint(),u=Mp(t,c);u<i&&(i=u,a=l)}}if(a){const l=a.tooltipPosition();n=l.x,r=l.y}return{x:n,y:r}}};function Rn(e,t){return t&&(Le(t)?Array.prototype.push.apply(e,t):e.push(t)),e}function tr(e){return(typeof e=="string"||e instanceof String)&&e.indexOf(`
`)>-1?e.split(`
`):e}function Gz(e,t){const{element:n,datasetIndex:r,index:i}=t,o=e.getDatasetMeta(r).controller,{label:s,value:a}=o.getLabelAndValue(i);return{chart:e,label:s,parsed:o.getParsed(i),raw:e.data.datasets[r].data[i],formattedValue:a,dataset:o.getDataset(),dataIndex:i,datasetIndex:r,element:n}}function vx(e,t){const n=e.chart.ctx,{body:r,footer:i,title:o}=e,{boxWidth:s,boxHeight:a}=t,l=lt(t.bodyFont),c=lt(t.titleFont),u=lt(t.footerFont),d=o.length,h=i.length,m=r.length,y=Ot(t.padding);let v=y.height,p=0,g=r.reduce((w,S)=>w+S.before.length+S.lines.length+S.after.length,0);if(g+=e.beforeBody.length+e.afterBody.length,d&&(v+=d*c.lineHeight+(d-1)*t.titleSpacing+t.titleMarginBottom),g){const w=t.displayColors?Math.max(a,l.lineHeight):l.lineHeight;v+=m*w+(g-m)*l.lineHeight+(g-1)*t.bodySpacing}h&&(v+=t.footerMarginTop+h*u.lineHeight+(h-1)*t.footerSpacing);let x=0;const b=function(w){p=Math.max(p,n.measureText(w).width+x)};return n.save(),n.font=c.string,Me(e.title,b),n.font=l.string,Me(e.beforeBody.concat(e.afterBody),b),x=t.displayColors?s+2+t.boxPadding:0,Me(r,w=>{Me(w.before,b),Me(w.lines,b),Me(w.after,b)}),x=0,n.font=u.string,Me(e.footer,b),n.restore(),p+=y.width,{width:p,height:v}}function qz(e,t){const{y:n,height:r}=t;return n<r/2?"top":n>e.height-r/2?"bottom":"center"}function Qz(e,t,n,r){const{x:i,width:o}=r,s=n.caretSize+n.caretPadding;if(e==="left"&&i+o+s>t.width||e==="right"&&i-o-s<0)return!0}function Zz(e,t,n,r){const{x:i,width:o}=n,{width:s,chartArea:{left:a,right:l}}=e;let c="center";return r==="center"?c=i<=(a+l)/2?"left":"right":i<=o/2?c="left":i>=s-o/2&&(c="right"),Qz(c,e,t,n)&&(c="center"),c}function yx(e,t,n){const r=n.yAlign||t.yAlign||qz(e,n);return{xAlign:n.xAlign||t.xAlign||Zz(e,t,n,r),yAlign:r}}function Jz(e,t){let{x:n,width:r}=e;return t==="right"?n-=r:t==="center"&&(n-=r/2),n}function eI(e,t,n){let{y:r,height:i}=e;return t==="top"?r+=n:t==="bottom"?r-=i+n:r-=i/2,r}function xx(e,t,n,r){const{caretSize:i,caretPadding:o,cornerRadius:s}=e,{xAlign:a,yAlign:l}=n,c=i+o,{topLeft:u,topRight:d,bottomLeft:h,bottomRight:m}=Mi(s);let y=Jz(t,a);const v=eI(t,l,c);return l==="center"?a==="left"?y+=c:a==="right"&&(y-=c):a==="left"?y-=Math.max(u,h)+i:a==="right"&&(y+=Math.max(d,m)+i),{x:ut(y,0,r.width-t.width),y:ut(v,0,r.height-t.height)}}function Zl(e,t,n){const r=Ot(n.padding);return t==="center"?e.x+e.width/2:t==="right"?e.x+e.width-r.right:e.x+r.left}function bx(e){return Rn([],tr(e))}function tI(e,t,n){return li(e,{tooltip:t,tooltipItems:n,type:"tooltip"})}function wx(e,t){const n=t&&t.dataset&&t.dataset.tooltip&&t.dataset.tooltip.callbacks;return n?e.override(n):e}const BS={beforeTitle:Zn,title(e){if(e.length>0){const t=e[0],n=t.chart.data.labels,r=n?n.length:0;if(this&&this.options&&this.options.mode==="dataset")return t.dataset.label||"";if(t.label)return t.label;if(r>0&&t.dataIndex<r)return n[t.dataIndex]}return""},afterTitle:Zn,beforeBody:Zn,beforeLabel:Zn,label(e){if(this&&this.options&&this.options.mode==="dataset")return e.label+": "+e.formattedValue||e.formattedValue;let t=e.dataset.label||"";t&&(t+=": ");const n=e.formattedValue;return ge(n)||(t+=n),t},labelColor(e){const n=e.chart.getDatasetMeta(e.datasetIndex).controller.getStyle(e.dataIndex);return{borderColor:n.borderColor,backgroundColor:n.backgroundColor,borderWidth:n.borderWidth,borderDash:n.borderDash,borderDashOffset:n.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(e){const n=e.chart.getDatasetMeta(e.datasetIndex).controller.getStyle(e.dataIndex);return{pointStyle:n.pointStyle,rotation:n.rotation}},afterLabel:Zn,afterBody:Zn,beforeFooter:Zn,footer:Zn,afterFooter:Zn};function Dt(e,t,n,r){const i=e[t].call(n,r);return typeof i=="undefined"?BS[t].call(n,r):i}class zp extends Mn{constructor(t){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=t.chart,this.options=t.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(t){this.options=t,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){const t=this._cachedAnimations;if(t)return t;const n=this.chart,r=this.options.setContext(this.getContext()),i=r.enabled&&n.options.animation&&r.animations,o=new bS(this.chart,i);return i._cacheable&&(this._cachedAnimations=Object.freeze(o)),o}getContext(){return this.$context||(this.$context=tI(this.chart.getContext(),this,this._tooltipItems))}getTitle(t,n){const{callbacks:r}=n,i=Dt(r,"beforeTitle",this,t),o=Dt(r,"title",this,t),s=Dt(r,"afterTitle",this,t);let a=[];return a=Rn(a,tr(i)),a=Rn(a,tr(o)),a=Rn(a,tr(s)),a}getBeforeBody(t,n){return bx(Dt(n.callbacks,"beforeBody",this,t))}getBody(t,n){const{callbacks:r}=n,i=[];return Me(t,o=>{const s={before:[],lines:[],after:[]},a=wx(r,o);Rn(s.before,tr(Dt(a,"beforeLabel",this,o))),Rn(s.lines,Dt(a,"label",this,o)),Rn(s.after,tr(Dt(a,"afterLabel",this,o))),i.push(s)}),i}getAfterBody(t,n){return bx(Dt(n.callbacks,"afterBody",this,t))}getFooter(t,n){const{callbacks:r}=n,i=Dt(r,"beforeFooter",this,t),o=Dt(r,"footer",this,t),s=Dt(r,"afterFooter",this,t);let a=[];return a=Rn(a,tr(i)),a=Rn(a,tr(o)),a=Rn(a,tr(s)),a}_createItems(t){const n=this._active,r=this.chart.data,i=[],o=[],s=[];let a=[],l,c;for(l=0,c=n.length;l<c;++l)a.push(Gz(this.chart,n[l]));return t.filter&&(a=a.filter((u,d,h)=>t.filter(u,d,h,r))),t.itemSort&&(a=a.sort((u,d)=>t.itemSort(u,d,r))),Me(a,u=>{const d=wx(t.callbacks,u);i.push(Dt(d,"labelColor",this,u)),o.push(Dt(d,"labelPointStyle",this,u)),s.push(Dt(d,"labelTextColor",this,u))}),this.labelColors=i,this.labelPointStyles=o,this.labelTextColors=s,this.dataPoints=a,a}update(t,n){const r=this.options.setContext(this.getContext()),i=this._active;let o,s=[];if(!i.length)this.opacity!==0&&(o={opacity:0});else{const a=$s[r.position].call(this,i,this._eventPosition);s=this._createItems(r),this.title=this.getTitle(s,r),this.beforeBody=this.getBeforeBody(s,r),this.body=this.getBody(s,r),this.afterBody=this.getAfterBody(s,r),this.footer=this.getFooter(s,r);const l=this._size=vx(this,r),c=Object.assign({},a,l),u=yx(this.chart,r,c),d=xx(r,c,u,this.chart);this.xAlign=u.xAlign,this.yAlign=u.yAlign,o={opacity:1,x:d.x,y:d.y,width:l.width,height:l.height,caretX:a.x,caretY:a.y}}this._tooltipItems=s,this.$context=void 0,o&&this._resolveAnimations().update(this,o),t&&r.external&&r.external.call(this,{chart:this.chart,tooltip:this,replay:n})}drawCaret(t,n,r,i){const o=this.getCaretPosition(t,r,i);n.lineTo(o.x1,o.y1),n.lineTo(o.x2,o.y2),n.lineTo(o.x3,o.y3)}getCaretPosition(t,n,r){const{xAlign:i,yAlign:o}=this,{caretSize:s,cornerRadius:a}=r,{topLeft:l,topRight:c,bottomLeft:u,bottomRight:d}=Mi(a),{x:h,y:m}=t,{width:y,height:v}=n;let p,g,x,b,w,S;return o==="center"?(w=m+v/2,i==="left"?(p=h,g=p-s,b=w+s,S=w-s):(p=h+y,g=p+s,b=w-s,S=w+s),x=p):(i==="left"?g=h+Math.max(l,u)+s:i==="right"?g=h+y-Math.max(c,d)-s:g=this.caretX,o==="top"?(b=m,w=b-s,p=g-s,x=g+s):(b=m+v,w=b+s,p=g+s,x=g-s),S=b),{x1:p,x2:g,x3:x,y1:b,y2:w,y3:S}}drawTitle(t,n,r){const i=this.title,o=i.length;let s,a,l;if(o){const c=No(r.rtl,this.x,this.width);for(t.x=Zl(this,r.titleAlign,r),n.textAlign=c.textAlign(r.titleAlign),n.textBaseline="middle",s=lt(r.titleFont),a=r.titleSpacing,n.fillStyle=r.titleColor,n.font=s.string,l=0;l<o;++l)n.fillText(i[l],c.x(t.x),t.y+s.lineHeight/2),t.y+=s.lineHeight+a,l+1===o&&(t.y+=r.titleMarginBottom-a)}}_drawColorBox(t,n,r,i,o){const s=this.labelColors[r],a=this.labelPointStyles[r],{boxHeight:l,boxWidth:c}=o,u=lt(o.bodyFont),d=Zl(this,"left",o),h=i.x(d),m=l<u.lineHeight?(u.lineHeight-l)/2:0,y=n.y+m;if(o.usePointStyle){const v={radius:Math.min(c,l)/2,pointStyle:a.pointStyle,rotation:a.rotation,borderWidth:1},p=i.leftForLtr(h,c)+c/2,g=y+l/2;t.strokeStyle=o.multiKeyBackground,t.fillStyle=o.multiKeyBackground,Op(t,v,p,g),t.strokeStyle=s.borderColor,t.fillStyle=s.backgroundColor,Op(t,v,p,g)}else{t.lineWidth=ue(s.borderWidth)?Math.max(...Object.values(s.borderWidth)):s.borderWidth||1,t.strokeStyle=s.borderColor,t.setLineDash(s.borderDash||[]),t.lineDashOffset=s.borderDashOffset||0;const v=i.leftForLtr(h,c),p=i.leftForLtr(i.xPlus(h,1),c-2),g=Mi(s.borderRadius);Object.values(g).some(x=>x!==0)?(t.beginPath(),t.fillStyle=o.multiKeyBackground,Ra(t,{x:v,y,w:c,h:l,radius:g}),t.fill(),t.stroke(),t.fillStyle=s.backgroundColor,t.beginPath(),Ra(t,{x:p,y:y+1,w:c-2,h:l-2,radius:g}),t.fill()):(t.fillStyle=o.multiKeyBackground,t.fillRect(v,y,c,l),t.strokeRect(v,y,c,l),t.fillStyle=s.backgroundColor,t.fillRect(p,y+1,c-2,l-2))}t.fillStyle=this.labelTextColors[r]}drawBody(t,n,r){const{body:i}=this,{bodySpacing:o,bodyAlign:s,displayColors:a,boxHeight:l,boxWidth:c,boxPadding:u}=r,d=lt(r.bodyFont);let h=d.lineHeight,m=0;const y=No(r.rtl,this.x,this.width),v=function(M){n.fillText(M,y.x(t.x+m),t.y+h/2),t.y+=h+o},p=y.textAlign(s);let g,x,b,w,S,C,P;for(n.textAlign=s,n.textBaseline="middle",n.font=d.string,t.x=Zl(this,p,r),n.fillStyle=r.bodyColor,Me(this.beforeBody,v),m=a&&p!=="right"?s==="center"?c/2+u:c+2+u:0,w=0,C=i.length;w<C;++w){for(g=i[w],x=this.labelTextColors[w],n.fillStyle=x,Me(g.before,v),b=g.lines,a&&b.length&&(this._drawColorBox(n,t,w,y,r),h=Math.max(d.lineHeight,l)),S=0,P=b.length;S<P;++S)v(b[S]),h=d.lineHeight;Me(g.after,v)}m=0,h=d.lineHeight,Me(this.afterBody,v),t.y-=o}drawFooter(t,n,r){const i=this.footer,o=i.length;let s,a;if(o){const l=No(r.rtl,this.x,this.width);for(t.x=Zl(this,r.footerAlign,r),t.y+=r.footerMarginTop,n.textAlign=l.textAlign(r.footerAlign),n.textBaseline="middle",s=lt(r.footerFont),n.fillStyle=r.footerColor,n.font=s.string,a=0;a<o;++a)n.fillText(i[a],l.x(t.x),t.y+s.lineHeight/2),t.y+=s.lineHeight+r.footerSpacing}}drawBackground(t,n,r,i){const{xAlign:o,yAlign:s}=this,{x:a,y:l}=t,{width:c,height:u}=r,{topLeft:d,topRight:h,bottomLeft:m,bottomRight:y}=Mi(i.cornerRadius);n.fillStyle=i.backgroundColor,n.strokeStyle=i.borderColor,n.lineWidth=i.borderWidth,n.beginPath(),n.moveTo(a+d,l),s==="top"&&this.drawCaret(t,n,r,i),n.lineTo(a+c-h,l),n.quadraticCurveTo(a+c,l,a+c,l+h),s==="center"&&o==="right"&&this.drawCaret(t,n,r,i),n.lineTo(a+c,l+u-y),n.quadraticCurveTo(a+c,l+u,a+c-y,l+u),s==="bottom"&&this.drawCaret(t,n,r,i),n.lineTo(a+m,l+u),n.quadraticCurveTo(a,l+u,a,l+u-m),s==="center"&&o==="left"&&this.drawCaret(t,n,r,i),n.lineTo(a,l+d),n.quadraticCurveTo(a,l,a+d,l),n.closePath(),n.fill(),i.borderWidth>0&&n.stroke()}_updateAnimationTarget(t){const n=this.chart,r=this.$animations,i=r&&r.x,o=r&&r.y;if(i||o){const s=$s[t.position].call(this,this._active,this._eventPosition);if(!s)return;const a=this._size=vx(this,t),l=Object.assign({},s,this._size),c=yx(n,t,l),u=xx(t,l,c,n);(i._to!==u.x||o._to!==u.y)&&(this.xAlign=c.xAlign,this.yAlign=c.yAlign,this.width=a.width,this.height=a.height,this.caretX=s.x,this.caretY=s.y,this._resolveAnimations().update(this,u))}}_willRender(){return!!this.opacity}draw(t){const n=this.options.setContext(this.getContext());let r=this.opacity;if(!r)return;this._updateAnimationTarget(n);const i={width:this.width,height:this.height},o={x:this.x,y:this.y};r=Math.abs(r)<.001?0:r;const s=Ot(n.padding),a=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;n.enabled&&a&&(t.save(),t.globalAlpha=r,this.drawBackground(o,t,i,n),mS(t,n.textDirection),o.y+=s.top,this.drawTitle(o,t,n),this.drawBody(o,t,n),this.drawFooter(o,t,n),gS(t,n.textDirection),t.restore())}getActiveElements(){return this._active||[]}setActiveElements(t,n){const r=this._active,i=t.map(({datasetIndex:a,index:l})=>{const c=this.chart.getDatasetMeta(a);if(!c)throw new Error("Cannot find a dataset at index "+a);return{datasetIndex:a,element:c.data[l],index:l}}),o=!vu(r,i),s=this._positionChanged(i,n);(o||s)&&(this._active=i,this._eventPosition=n,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(t,n,r=!0){if(n&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;const i=this.options,o=this._active||[],s=this._getActiveElements(t,o,n,r),a=this._positionChanged(s,t),l=n||!vu(s,o)||a;return l&&(this._active=s,(i.enabled||i.external)&&(this._eventPosition={x:t.x,y:t.y},this.update(!0,n))),l}_getActiveElements(t,n,r,i){const o=this.options;if(t.type==="mouseout")return[];if(!i)return n.filter(a=>this.chart.data.datasets[a.datasetIndex]&&this.chart.getDatasetMeta(a.datasetIndex).controller.getParsed(a.index)!==void 0);const s=this.chart.getElementsAtEventForMode(t,o.mode,o,r);return o.reverse&&s.reverse(),s}_positionChanged(t,n){const{caretX:r,caretY:i,options:o}=this,s=$s[o.position].call(this,t,n);return s!==!1&&(r!==s.x||i!==s.y)}}W(zp,"positioners",$s);var nI={id:"tooltip",_element:zp,positioners:$s,afterInit(e,t,n){n&&(e.tooltip=new zp({chart:e,options:n}))},beforeUpdate(e,t,n){e.tooltip&&e.tooltip.initialize(n)},reset(e,t,n){e.tooltip&&e.tooltip.initialize(n)},afterDraw(e){const t=e.tooltip;if(t&&t._willRender()){const n={tooltip:t};if(e.notifyPlugins("beforeTooltipDraw",{...n,cancelable:!0})===!1)return;t.draw(e.ctx),e.notifyPlugins("afterTooltipDraw",n)}},afterEvent(e,t){if(e.tooltip){const n=t.replay;e.tooltip.handleEvent(t.event,n,t.inChartArea)&&(t.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(e,t)=>t.bodyFont.size,boxWidth:(e,t)=>t.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:BS},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:e=>e!=="filter"&&e!=="itemSort"&&e!=="external",_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]},rI=Object.freeze({__proto__:null,Colors:mz,Decimation:xz,Filler:Fz,Legend:Uz,SubTitle:Kz,Title:Xz,Tooltip:nI});const iI=(e,t,n,r)=>(typeof t=="string"?(n=e.push(t)-1,r.unshift({index:n,label:t})):isNaN(t)&&(n=null),n);function oI(e,t,n,r){const i=e.indexOf(t);if(i===-1)return iI(e,t,n,r);const o=e.lastIndexOf(t);return i!==o?n:i}const sI=(e,t)=>e===null?null:ut(Math.round(e),0,t);function _x(e){const t=this.getLabels();return e>=0&&e<t.length?t[e]:e}class Ip extends Hi{constructor(t){super(t),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(t){const n=this._addedLabels;if(n.length){const r=this.getLabels();for(const{index:i,label:o}of n)r[i]===o&&r.splice(i,1);this._addedLabels=[]}super.init(t)}parse(t,n){if(ge(t))return null;const r=this.getLabels();return n=isFinite(n)&&r[n]===t?n:oI(r,t,oe(n,t),this._addedLabels),sI(n,r.length-1)}determineDataLimits(){const{minDefined:t,maxDefined:n}=this.getUserBounds();let{min:r,max:i}=this.getMinMax(!0);this.options.bounds==="ticks"&&(t||(r=0),n||(i=this.getLabels().length-1)),this.min=r,this.max=i}buildTicks(){const t=this.min,n=this.max,r=this.options.offset,i=[];let o=this.getLabels();o=t===0&&n===o.length-1?o:o.slice(t,n+1),this._valueRange=Math.max(o.length-(r?0:1),1),this._startValue=this.min-(r?.5:0);for(let s=t;s<=n;s++)i.push({value:s});return i}getLabelForValue(t){return _x.call(this,t)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(t){return typeof t!="number"&&(t=this.parse(t)),t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getPixelForTick(t){const n=this.ticks;return t<0||t>n.length-1?null:this.getPixelForValue(n[t].value)}getValueForPixel(t){return Math.round(this._startValue+this.getDecimalForPixel(t)*this._valueRange)}getBasePixel(){return this.bottom}}W(Ip,"id","category"),W(Ip,"defaults",{ticks:{callback:_x}});function aI(e,t){const n=[],{bounds:i,step:o,min:s,max:a,precision:l,count:c,maxTicks:u,maxDigits:d,includeBounds:h}=e,m=o||1,y=u-1,{min:v,max:p}=t,g=!ge(s),x=!ge(a),b=!ge(c),w=(p-v)/(d+1);let S=gy((p-v)/y/m)*m,C,P,M,O;if(S<1e-14&&!g&&!x)return[{value:v},{value:p}];O=Math.ceil(p/S)-Math.floor(v/S),O>y&&(S=gy(O*S/y/m)*m),ge(l)||(C=Math.pow(10,l),S=Math.ceil(S*C)/C),i==="ticks"?(P=Math.floor(v/S)*S,M=Math.ceil(p/S)*S):(P=v,M=p),g&&x&&o&&tA((a-s)/o,S/1e3)?(O=Math.round(Math.min((a-s)/S,u)),S=(a-s)/O,P=s,M=a):b?(P=g?s:P,M=x?a:M,O=c-1,S=(M-P)/O):(O=(M-P)/S,Qs(O,Math.round(O),S/1e3)?O=Math.round(O):O=Math.ceil(O));const N=Math.max(vy(S),vy(P));C=Math.pow(10,ge(l)?N:l),P=Math.round(P*C)/C,M=Math.round(M*C)/C;let A=0;for(g&&(h&&P!==s?(n.push({value:s}),P<s&&A++,Qs(Math.round((P+A*S)*C)/C,s,Sx(s,w,e))&&A++):P<s&&A++);A<O;++A){const z=Math.round((P+A*S)*C)/C;if(x&&z>a)break;n.push({value:z})}return x&&h&&M!==a?n.length&&Qs(n[n.length-1].value,a,Sx(a,w,e))?n[n.length-1].value=a:n.push({value:a}):(!x||M===a)&&n.push({value:M}),n}function Sx(e,t,{horizontal:n,minRotation:r}){const i=kn(r),o=(n?Math.sin(i):Math.cos(i))||.001,s=.75*t*(""+e).length;return Math.min(t/o,s)}class ku extends Hi{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(t,n){return ge(t)||(typeof t=="number"||t instanceof Number)&&!isFinite(+t)?null:+t}handleTickRangeOptions(){const{beginAtZero:t}=this.options,{minDefined:n,maxDefined:r}=this.getUserBounds();let{min:i,max:o}=this;const s=l=>i=n?i:l,a=l=>o=r?o:l;if(t){const l=Yn(i),c=Yn(o);l<0&&c<0?a(0):l>0&&c>0&&s(0)}if(i===o){let l=o===0?1:Math.abs(o*.05);a(o+l),t||s(i-l)}this.min=i,this.max=o}getTickLimit(){const t=this.options.ticks;let{maxTicksLimit:n,stepSize:r}=t,i;return r?(i=Math.ceil(this.max/r)-Math.floor(this.min/r)+1,i>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${r} would result generating up to ${i} ticks. Limiting to 1000.`),i=1e3)):(i=this.computeTickLimit(),n=n||11),n&&(i=Math.min(n,i)),i}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){const t=this.options,n=t.ticks;let r=this.getTickLimit();r=Math.max(2,r);const i={maxTicks:r,bounds:t.bounds,min:t.min,max:t.max,precision:n.precision,step:n.stepSize,count:n.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:n.minRotation||0,includeBounds:n.includeBounds!==!1},o=this._range||this,s=aI(i,o);return t.bounds==="ticks"&&Z_(s,this,"value"),t.reverse?(s.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),s}configure(){const t=this.ticks;let n=this.min,r=this.max;if(super.configure(),this.options.offset&&t.length){const i=(r-n)/Math.max(t.length-1,1)/2;n-=i,r+=i}this._startValue=n,this._endValue=r,this._valueRange=r-n}getLabelForValue(t){return dl(t,this.chart.options.locale,this.options.ticks.format)}}class Dp extends ku{determineDataLimits(){const{min:t,max:n}=this.getMinMax(!0);this.min=Ge(t)?t:0,this.max=Ge(n)?n:1,this.handleTickRangeOptions()}computeTickLimit(){const t=this.isHorizontal(),n=t?this.width:this.height,r=kn(this.options.ticks.minRotation),i=(t?Math.sin(r):Math.cos(r))||.001,o=this._resolveTickFontOptions(0);return Math.ceil(n/Math.min(40,o.lineHeight/i))}getPixelForValue(t){return t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getValueForPixel(t){return this._startValue+this.getDecimalForPixel(t)*this._valueRange}}W(Dp,"id","linear"),W(Dp,"defaults",{ticks:{callback:Id.formatters.numeric}});const La=e=>Math.floor(Or(e)),fi=(e,t)=>Math.pow(10,La(e)+t);function kx(e){return e/Math.pow(10,La(e))===1}function Cx(e,t,n){const r=Math.pow(10,n),i=Math.floor(e/r);return Math.ceil(t/r)-i}function lI(e,t){const n=t-e;let r=La(n);for(;Cx(e,t,r)>10;)r++;for(;Cx(e,t,r)<10;)r--;return Math.min(r,La(e))}function cI(e,{min:t,max:n}){t=Ht(e.min,t);const r=[],i=La(t);let o=lI(t,n),s=o<0?Math.pow(10,Math.abs(o)):1;const a=Math.pow(10,o),l=i>o?Math.pow(10,i):0,c=Math.round((t-l)*s)/s,u=Math.floor((t-l)/a/10)*a*10;let d=Math.floor((c-u)/Math.pow(10,o)),h=Ht(e.min,Math.round((l+u+d*Math.pow(10,o))*s)/s);for(;h<n;)r.push({value:h,major:kx(h),significand:d}),d>=10?d=d<15?15:20:d++,d>=20&&(o++,d=2,s=o>=0?1:s),h=Math.round((l+u+d*Math.pow(10,o))*s)/s;const m=Ht(e.max,h);return r.push({value:m,major:kx(m),significand:d}),r}class Fp extends Hi{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._valueRange=0}parse(t,n){const r=ku.prototype.parse.apply(this,[t,n]);if(r===0){this._zero=!0;return}return Ge(r)&&r>0?r:null}determineDataLimits(){const{min:t,max:n}=this.getMinMax(!0);this.min=Ge(t)?Math.max(0,t):null,this.max=Ge(n)?Math.max(0,n):null,this.options.beginAtZero&&(this._zero=!0),this._zero&&this.min!==this._suggestedMin&&!Ge(this._userMin)&&(this.min=t===fi(this.min,0)?fi(this.min,-1):fi(this.min,0)),this.handleTickRangeOptions()}handleTickRangeOptions(){const{minDefined:t,maxDefined:n}=this.getUserBounds();let r=this.min,i=this.max;const o=a=>r=t?r:a,s=a=>i=n?i:a;r===i&&(r<=0?(o(1),s(10)):(o(fi(r,-1)),s(fi(i,1)))),r<=0&&o(fi(i,-1)),i<=0&&s(fi(r,1)),this.min=r,this.max=i}buildTicks(){const t=this.options,n={min:this._userMin,max:this._userMax},r=cI(n,this);return t.bounds==="ticks"&&Z_(r,this,"value"),t.reverse?(r.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),r}getLabelForValue(t){return t===void 0?"0":dl(t,this.chart.options.locale,this.options.ticks.format)}configure(){const t=this.min;super.configure(),this._startValue=Or(t),this._valueRange=Or(this.max)-Or(t)}getPixelForValue(t){return(t===void 0||t===0)&&(t=this.min),t===null||isNaN(t)?NaN:this.getPixelForDecimal(t===this.min?0:(Or(t)-this._startValue)/this._valueRange)}getValueForPixel(t){const n=this.getDecimalForPixel(t);return Math.pow(10,this._startValue+n*this._valueRange)}}W(Fp,"id","logarithmic"),W(Fp,"defaults",{ticks:{callback:Id.formatters.logarithmic,major:{enabled:!0}}});function jp(e){const t=e.ticks;if(t.display&&e.display){const n=Ot(t.backdropPadding);return oe(t.font&&t.font.size,qe.font.size)+n.height}return 0}function uI(e,t,n){return n=Le(n)?n:[n],{w:yA(e,t.string,n),h:n.length*t.lineHeight}}function Px(e,t,n,r,i){return e===r||e===i?{start:t-n/2,end:t+n/2}:e<r||e>i?{start:t-n,end:t}:{start:t,end:t+n}}function dI(e){const t={l:e.left+e._padding.left,r:e.right-e._padding.right,t:e.top+e._padding.top,b:e.bottom-e._padding.bottom},n=Object.assign({},t),r=[],i=[],o=e._pointLabels.length,s=e.options.pointLabels,a=s.centerPointLabels?Ie/o:0;for(let l=0;l<o;l++){const c=s.setContext(e.getPointLabelContext(l));i[l]=c.padding;const u=e.getPointPosition(l,e.drawingArea+i[l],a),d=lt(c.font),h=uI(e.ctx,d,e._pointLabels[l]);r[l]=h;const m=Ut(e.getIndexAngle(l)+a),y=Math.round(Yg(m)),v=Px(y,u.x,h.w,0,180),p=Px(y,u.y,h.h,90,270);fI(n,t,m,v,p)}e.setCenterPoint(t.l-n.l,n.r-t.r,t.t-n.t,n.b-t.b),e._pointLabelItems=mI(e,r,i)}function fI(e,t,n,r,i){const o=Math.abs(Math.sin(n)),s=Math.abs(Math.cos(n));let a=0,l=0;r.start<t.l?(a=(t.l-r.start)/o,e.l=Math.min(e.l,t.l-a)):r.end>t.r&&(a=(r.end-t.r)/o,e.r=Math.max(e.r,t.r+a)),i.start<t.t?(l=(t.t-i.start)/s,e.t=Math.min(e.t,t.t-l)):i.end>t.b&&(l=(i.end-t.b)/s,e.b=Math.max(e.b,t.b+l))}function hI(e,t,n){const r=e.drawingArea,{extra:i,additionalAngle:o,padding:s,size:a}=n,l=e.getPointPosition(t,r+i+s,o),c=Math.round(Yg(Ut(l.angle+Ze))),u=yI(l.y,a.h,c),d=gI(c),h=vI(l.x,a.w,d);return{visible:!0,x:l.x,y:u,textAlign:d,left:h,top:u,right:h+a.w,bottom:u+a.h}}function pI(e,t){if(!t)return!0;const{left:n,top:r,right:i,bottom:o}=e;return!(cr({x:n,y:r},t)||cr({x:n,y:o},t)||cr({x:i,y:r},t)||cr({x:i,y:o},t))}function mI(e,t,n){const r=[],i=e._pointLabels.length,o=e.options,{centerPointLabels:s,display:a}=o.pointLabels,l={extra:jp(o)/2,additionalAngle:s?Ie/i:0};let c;for(let u=0;u<i;u++){l.padding=n[u],l.size=t[u];const d=hI(e,u,l);r.push(d),a==="auto"&&(d.visible=pI(d,c),d.visible&&(c=d))}return r}function gI(e){return e===0||e===180?"center":e<180?"left":"right"}function vI(e,t,n){return n==="right"?e-=t:n==="center"&&(e-=t/2),e}function yI(e,t,n){return n===90||n===270?e-=t/2:(n>270||n<90)&&(e-=t),e}function xI(e,t,n){const{left:r,top:i,right:o,bottom:s}=n,{backdropColor:a}=t;if(!ge(a)){const l=Mi(t.borderRadius),c=Ot(t.backdropPadding);e.fillStyle=a;const u=r-c.left,d=i-c.top,h=o-r+c.width,m=s-i+c.height;Object.values(l).some(y=>y!==0)?(e.beginPath(),Ra(e,{x:u,y:d,w:h,h:m,radius:l}),e.fill()):e.fillRect(u,d,h,m)}}function bI(e,t){const{ctx:n,options:{pointLabels:r}}=e;for(let i=t-1;i>=0;i--){const o=e._pointLabelItems[i];if(!o.visible)continue;const s=r.setContext(e.getPointLabelContext(i));xI(n,s,o);const a=lt(s.font),{x:l,y:c,textAlign:u}=o;Ii(n,e._pointLabels[i],l,c+a.lineHeight/2,a,{color:s.color,textAlign:u,textBaseline:"middle"})}}function VS(e,t,n,r){const{ctx:i}=e;if(n)i.arc(e.xCenter,e.yCenter,t,0,ze);else{let o=e.getPointPosition(0,t);i.moveTo(o.x,o.y);for(let s=1;s<r;s++)o=e.getPointPosition(s,t),i.lineTo(o.x,o.y)}}function wI(e,t,n,r,i){const o=e.ctx,s=t.circular,{color:a,lineWidth:l}=t;!s&&!r||!a||!l||n<0||(o.save(),o.strokeStyle=a,o.lineWidth=l,o.setLineDash(i.dash),o.lineDashOffset=i.dashOffset,o.beginPath(),VS(e,n,s,r),o.closePath(),o.stroke(),o.restore())}function _I(e,t,n){return li(e,{label:n,index:t,type:"pointLabel"})}class Ls extends ku{constructor(t){super(t),this.xCenter=void 0,this.yCenter=void 0,this.drawingArea=void 0,this._pointLabels=[],this._pointLabelItems=[]}setDimensions(){const t=this._padding=Ot(jp(this.options)/2),n=this.width=this.maxWidth-t.width,r=this.height=this.maxHeight-t.height;this.xCenter=Math.floor(this.left+n/2+t.left),this.yCenter=Math.floor(this.top+r/2+t.top),this.drawingArea=Math.floor(Math.min(n,r)/2)}determineDataLimits(){const{min:t,max:n}=this.getMinMax(!1);this.min=Ge(t)&&!isNaN(t)?t:0,this.max=Ge(n)&&!isNaN(n)?n:0,this.handleTickRangeOptions()}computeTickLimit(){return Math.ceil(this.drawingArea/jp(this.options))}generateTickLabels(t){ku.prototype.generateTickLabels.call(this,t),this._pointLabels=this.getLabels().map((n,r)=>{const i=Re(this.options.pointLabels.callback,[n,r],this);return i||i===0?i:""}).filter((n,r)=>this.chart.getDataVisibility(r))}fit(){const t=this.options;t.display&&t.pointLabels.display?dI(this):this.setCenterPoint(0,0,0,0)}setCenterPoint(t,n,r,i){this.xCenter+=Math.floor((t-n)/2),this.yCenter+=Math.floor((r-i)/2),this.drawingArea-=Math.min(this.drawingArea/2,Math.max(t,n,r,i))}getIndexAngle(t){const n=ze/(this._pointLabels.length||1),r=this.options.startAngle||0;return Ut(t*n+kn(r))}getDistanceFromCenterForValue(t){if(ge(t))return NaN;const n=this.drawingArea/(this.max-this.min);return this.options.reverse?(this.max-t)*n:(t-this.min)*n}getValueForDistanceFromCenter(t){if(ge(t))return NaN;const n=t/(this.drawingArea/(this.max-this.min));return this.options.reverse?this.max-n:this.min+n}getPointLabelContext(t){const n=this._pointLabels||[];if(t>=0&&t<n.length){const r=n[t];return _I(this.getContext(),t,r)}}getPointPosition(t,n,r=0){const i=this.getIndexAngle(t)-Ze+r;return{x:Math.cos(i)*n+this.xCenter,y:Math.sin(i)*n+this.yCenter,angle:i}}getPointPositionForValue(t,n){return this.getPointPosition(t,this.getDistanceFromCenterForValue(n))}getBasePosition(t){return this.getPointPositionForValue(t||0,this.getBaseValue())}getPointLabelPosition(t){const{left:n,top:r,right:i,bottom:o}=this._pointLabelItems[t];return{left:n,top:r,right:i,bottom:o}}drawBackground(){const{backgroundColor:t,grid:{circular:n}}=this.options;if(t){const r=this.ctx;r.save(),r.beginPath(),VS(this,this.getDistanceFromCenterForValue(this._endValue),n,this._pointLabels.length),r.closePath(),r.fillStyle=t,r.fill(),r.restore()}}drawGrid(){const t=this.ctx,n=this.options,{angleLines:r,grid:i,border:o}=n,s=this._pointLabels.length;let a,l,c;if(n.pointLabels.display&&bI(this,s),i.display&&this.ticks.forEach((u,d)=>{if(d!==0||d===0&&this.min<0){l=this.getDistanceFromCenterForValue(u.value);const h=this.getContext(d),m=i.setContext(h),y=o.setContext(h);wI(this,m,l,s,y)}}),r.display){for(t.save(),a=s-1;a>=0;a--){const u=r.setContext(this.getPointLabelContext(a)),{color:d,lineWidth:h}=u;!h||!d||(t.lineWidth=h,t.strokeStyle=d,t.setLineDash(u.borderDash),t.lineDashOffset=u.borderDashOffset,l=this.getDistanceFromCenterForValue(n.ticks.reverse?this.min:this.max),c=this.getPointPosition(a,l),t.beginPath(),t.moveTo(this.xCenter,this.yCenter),t.lineTo(c.x,c.y),t.stroke())}t.restore()}}drawBorder(){}drawLabels(){const t=this.ctx,n=this.options,r=n.ticks;if(!r.display)return;const i=this.getIndexAngle(0);let o,s;t.save(),t.translate(this.xCenter,this.yCenter),t.rotate(i),t.textAlign="center",t.textBaseline="middle",this.ticks.forEach((a,l)=>{if(l===0&&this.min>=0&&!n.reverse)return;const c=r.setContext(this.getContext(l)),u=lt(c.font);if(o=this.getDistanceFromCenterForValue(this.ticks[l].value),c.showLabelBackdrop){t.font=u.string,s=t.measureText(a.label).width,t.fillStyle=c.backdropColor;const d=Ot(c.backdropPadding);t.fillRect(-s/2-d.left,-o-u.size/2-d.top,s+d.width,u.size+d.height)}Ii(t,a.label,0,-o,u,{color:c.color,strokeColor:c.textStrokeColor,strokeWidth:c.textStrokeWidth})}),t.restore()}drawTitle(){}}W(Ls,"id","radialLinear"),W(Ls,"defaults",{display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,lineWidth:1,borderDash:[],borderDashOffset:0},grid:{circular:!1},startAngle:0,ticks:{showLabelBackdrop:!0,callback:Id.formatters.numeric},pointLabels:{backdropColor:void 0,backdropPadding:2,display:!0,font:{size:10},callback(t){return t},padding:5,centerPointLabels:!1}}),W(Ls,"defaultRoutes",{"angleLines.color":"borderColor","pointLabels.color":"color","ticks.color":"color"}),W(Ls,"descriptors",{angleLines:{_fallback:"grid"}});const Bd={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},jt=Object.keys(Bd);function Mx(e,t){return e-t}function Ex(e,t){if(ge(t))return null;const n=e._adapter,{parser:r,round:i,isoWeekday:o}=e._parseOpts;let s=t;return typeof r=="function"&&(s=r(s)),Ge(s)||(s=typeof r=="string"?n.parse(s,r):n.parse(s)),s===null?null:(i&&(s=i==="week"&&(Fo(o)||o===!0)?n.startOf(s,"isoWeek",o):n.startOf(s,i)),+s)}function Ox(e,t,n,r){const i=jt.length;for(let o=jt.indexOf(e);o<i-1;++o){const s=Bd[jt[o]],a=s.steps?s.steps:Number.MAX_SAFE_INTEGER;if(s.common&&Math.ceil((n-t)/(a*s.size))<=r)return jt[o]}return jt[i-1]}function SI(e,t,n,r,i){for(let o=jt.length-1;o>=jt.indexOf(n);o--){const s=jt[o];if(Bd[s].common&&e._adapter.diff(i,r,s)>=t-1)return s}return jt[n?jt.indexOf(n):0]}function kI(e){for(let t=jt.indexOf(e)+1,n=jt.length;t<n;++t)if(Bd[jt[t]].common)return jt[t]}function Nx(e,t,n){if(!n)e[t]=!0;else if(n.length){const{lo:r,hi:i}=Xg(n,t),o=n[r]>=t?n[r]:n[i];e[o]=!0}}function CI(e,t,n,r){const i=e._adapter,o=+i.startOf(t[0].value,r),s=t[t.length-1].value;let a,l;for(a=o;a<=s;a=+i.add(a,1,r))l=n[a],l>=0&&(t[l].major=!0);return t}function Tx(e,t,n){const r=[],i={},o=t.length;let s,a;for(s=0;s<o;++s)a=t[s],i[a]=s,r.push({value:a,major:!1});return o===0||!n?r:CI(e,r,i,n)}class Aa extends Hi{constructor(t){super(t),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(t,n={}){const r=t.time||(t.time={}),i=this._adapter=new L8._date(t.adapters.date);i.init(n),qs(r.displayFormats,i.formats()),this._parseOpts={parser:r.parser,round:r.round,isoWeekday:r.isoWeekday},super.init(t),this._normalized=n.normalized}parse(t,n){return t===void 0?null:Ex(this,t)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){const t=this.options,n=this._adapter,r=t.time.unit||"day";let{min:i,max:o,minDefined:s,maxDefined:a}=this.getUserBounds();function l(c){!s&&!isNaN(c.min)&&(i=Math.min(i,c.min)),!a&&!isNaN(c.max)&&(o=Math.max(o,c.max))}(!s||!a)&&(l(this._getLabelBounds()),(t.bounds!=="ticks"||t.ticks.source!=="labels")&&l(this.getMinMax(!1))),i=Ge(i)&&!isNaN(i)?i:+n.startOf(Date.now(),r),o=Ge(o)&&!isNaN(o)?o:+n.endOf(Date.now(),r)+1,this.min=Math.min(i,o-1),this.max=Math.max(i+1,o)}_getLabelBounds(){const t=this.getLabelTimestamps();let n=Number.POSITIVE_INFINITY,r=Number.NEGATIVE_INFINITY;return t.length&&(n=t[0],r=t[t.length-1]),{min:n,max:r}}buildTicks(){const t=this.options,n=t.time,r=t.ticks,i=r.source==="labels"?this.getLabelTimestamps():this._generate();t.bounds==="ticks"&&i.length&&(this.min=this._userMin||i[0],this.max=this._userMax||i[i.length-1]);const o=this.min,s=this.max,a=oA(i,o,s);return this._unit=n.unit||(r.autoSkip?Ox(n.minUnit,this.min,this.max,this._getLabelCapacity(o)):SI(this,a.length,n.minUnit,this.min,this.max)),this._majorUnit=!r.major.enabled||this._unit==="year"?void 0:kI(this._unit),this.initOffsets(i),t.reverse&&a.reverse(),Tx(this,a,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(t=>+t.value))}initOffsets(t=[]){let n=0,r=0,i,o;this.options.offset&&t.length&&(i=this.getDecimalForValue(t[0]),t.length===1?n=1-i:n=(this.getDecimalForValue(t[1])-i)/2,o=this.getDecimalForValue(t[t.length-1]),t.length===1?r=o:r=(o-this.getDecimalForValue(t[t.length-2]))/2);const s=t.length<3?.5:.25;n=ut(n,0,s),r=ut(r,0,s),this._offsets={start:n,end:r,factor:1/(n+1+r)}}_generate(){const t=this._adapter,n=this.min,r=this.max,i=this.options,o=i.time,s=o.unit||Ox(o.minUnit,n,r,this._getLabelCapacity(n)),a=oe(i.ticks.stepSize,1),l=s==="week"?o.isoWeekday:!1,c=Fo(l)||l===!0,u={};let d=n,h,m;if(c&&(d=+t.startOf(d,"isoWeek",l)),d=+t.startOf(d,c?"day":s),t.diff(r,n,s)>1e5*a)throw new Error(n+" and "+r+" are too far apart with stepSize of "+a+" "+s);const y=i.ticks.source==="data"&&this.getDataTimestamps();for(h=d,m=0;h<r;h=+t.add(h,a,s),m++)Nx(u,h,y);return(h===r||i.bounds==="ticks"||m===1)&&Nx(u,h,y),Object.keys(u).sort(Mx).map(v=>+v)}getLabelForValue(t){const n=this._adapter,r=this.options.time;return r.tooltipFormat?n.format(t,r.tooltipFormat):n.format(t,r.displayFormats.datetime)}format(t,n){const i=this.options.time.displayFormats,o=this._unit,s=n||i[o];return this._adapter.format(t,s)}_tickFormatFunction(t,n,r,i){const o=this.options,s=o.ticks.callback;if(s)return Re(s,[t,n,r],this);const a=o.time.displayFormats,l=this._unit,c=this._majorUnit,u=l&&a[l],d=c&&a[c],h=r[n],m=c&&d&&h&&h.major;return this._adapter.format(t,i||(m?d:u))}generateTickLabels(t){let n,r,i;for(n=0,r=t.length;n<r;++n)i=t[n],i.label=this._tickFormatFunction(i.value,n,t)}getDecimalForValue(t){return t===null?NaN:(t-this.min)/(this.max-this.min)}getPixelForValue(t){const n=this._offsets,r=this.getDecimalForValue(t);return this.getPixelForDecimal((n.start+r)*n.factor)}getValueForPixel(t){const n=this._offsets,r=this.getDecimalForPixel(t)/n.factor-n.end;return this.min+r*(this.max-this.min)}_getLabelSize(t){const n=this.options.ticks,r=this.ctx.measureText(t).width,i=kn(this.isHorizontal()?n.maxRotation:n.minRotation),o=Math.cos(i),s=Math.sin(i),a=this._resolveTickFontOptions(0).size;return{w:r*o+a*s,h:r*s+a*o}}_getLabelCapacity(t){const n=this.options.time,r=n.displayFormats,i=r[n.unit]||r.millisecond,o=this._tickFormatFunction(t,0,Tx(this,[t],this._majorUnit),i),s=this._getLabelSize(o),a=Math.floor(this.isHorizontal()?this.width/s.w:this.height/s.h)-1;return a>0?a:1}getDataTimestamps(){let t=this._cache.data||[],n,r;if(t.length)return t;const i=this.getMatchingVisibleMetas();if(this._normalized&&i.length)return this._cache.data=i[0].controller.getAllParsedValues(this);for(n=0,r=i.length;n<r;++n)t=t.concat(i[n].controller.getAllParsedValues(this));return this._cache.data=this.normalize(t)}getLabelTimestamps(){const t=this._cache.labels||[];let n,r;if(t.length)return t;const i=this.getLabels();for(n=0,r=i.length;n<r;++n)t.push(Ex(this,i[n]));return this._cache.labels=this._normalized?t:this.normalize(t)}normalize(t){return tS(t.sort(Mx))}}W(Aa,"id","time"),W(Aa,"defaults",{bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",callback:!1,major:{enabled:!1}}});function Jl(e,t,n){let r=0,i=e.length-1,o,s,a,l;n?(t>=e[r].pos&&t<=e[i].pos&&({lo:r,hi:i}=lr(e,"pos",t)),{pos:o,time:a}=e[r],{pos:s,time:l}=e[i]):(t>=e[r].time&&t<=e[i].time&&({lo:r,hi:i}=lr(e,"time",t)),{time:o,pos:a}=e[r],{time:s,pos:l}=e[i]);const c=s-o;return c?a+(l-a)*(t-o)/c:a}class Bp extends Aa{constructor(t){super(t),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){const t=this._getTimestampsForTable(),n=this._table=this.buildLookupTable(t);this._minPos=Jl(n,this.min),this._tableRange=Jl(n,this.max)-this._minPos,super.initOffsets(t)}buildLookupTable(t){const{min:n,max:r}=this,i=[],o=[];let s,a,l,c,u;for(s=0,a=t.length;s<a;++s)c=t[s],c>=n&&c<=r&&i.push(c);if(i.length<2)return[{time:n,pos:0},{time:r,pos:1}];for(s=0,a=i.length;s<a;++s)u=i[s+1],l=i[s-1],c=i[s],Math.round((u+l)/2)!==c&&o.push({time:c,pos:s/(a-1)});return o}_generate(){const t=this.min,n=this.max;let r=super.getDataTimestamps();return(!r.includes(t)||!r.length)&&r.splice(0,0,t),(!r.includes(n)||r.length===1)&&r.push(n),r.sort((i,o)=>i-o)}_getTimestampsForTable(){let t=this._cache.all||[];if(t.length)return t;const n=this.getDataTimestamps(),r=this.getLabelTimestamps();return n.length&&r.length?t=this.normalize(n.concat(r)):t=n.length?n:r,t=this._cache.all=t,t}getDecimalForValue(t){return(Jl(this._table,t)-this._minPos)/this._tableRange}getValueForPixel(t){const n=this._offsets,r=this.getDecimalForPixel(t)/n.factor-n.end;return Jl(this._table,r*this._tableRange+this._minPos,!0)}}W(Bp,"id","timeseries"),W(Bp,"defaults",Aa.defaults);var PI=Object.freeze({__proto__:null,CategoryScale:Ip,LinearScale:Dp,LogarithmicScale:Fp,RadialLinearScale:Ls,TimeScale:Aa,TimeSeriesScale:Bp});const MI=[$8,cz,rI,PI],WS="label";function Rx(e,t){typeof e=="function"?e(t):e&&(e.current=t)}function EI(e,t){const n=e.options;n&&t&&Object.assign(n,t)}function HS(e,t){e.labels=t}function US(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:WS;const r=[];e.datasets=t.map(i=>{const o=e.datasets.find(s=>s[n]===i[n]);return!o||!i.data||r.includes(o)?{...i}:(r.push(o),Object.assign(o,i),o)})}function OI(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:WS;const n={labels:[],datasets:[]};return HS(n,e.labels),US(n,e.datasets,t),n}function NI(e,t){const{height:n=150,width:r=300,redraw:i=!1,datasetIdKey:o,type:s,data:a,options:l,plugins:c=[],fallbackContent:u,updateMode:d,...h}=e,m=_.exports.useRef(null),y=_.exports.useRef(),v=()=>{!m.current||(y.current=new In(m.current,{type:s,data:OI(a,o),options:l&&{...l},plugins:c}),Rx(t,y.current))},p=()=>{Rx(t,null),y.current&&(y.current.destroy(),y.current=null)};return _.exports.useEffect(()=>{!i&&y.current&&l&&EI(y.current,l)},[i,l]),_.exports.useEffect(()=>{!i&&y.current&&HS(y.current.config.data,a.labels)},[i,a.labels]),_.exports.useEffect(()=>{!i&&y.current&&a.datasets&&US(y.current.config.data,a.datasets,o)},[i,a.datasets]),_.exports.useEffect(()=>{!y.current||(i?(p(),setTimeout(v)):y.current.update(d))},[i,l,a.labels,a.datasets,d]),_.exports.useEffect(()=>{!y.current||(p(),setTimeout(v))},[s]),_.exports.useEffect(()=>(v(),()=>p()),[]),f("canvas",{...Object.assign({ref:m,role:"img",height:n,width:r},h),children:u})}const TI=_.exports.forwardRef(NI);function YS(e,t){return In.register(t),_.exports.forwardRef((n,r)=>f(TI,{...Object.assign({},n,{ref:r,type:e})}))}const RI=YS("line",ea),$I=YS("doughnut",Nr),LI=ee.div`
  .graph-chart {
    min-height: 20rem;
    margin-bottom: 2rem;
  }

  .return-section {
    padding: 2rem 0;

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
    }
  }
`;In.register(...MI);const AI=(e,t,n)=>{if(e<=0||t<=0||n<=0)throw new Error("All values must be positive numbers greater than zero.");switch(n){case"1M":n=1;break;case"3M":n=3;break;case"6M":n=6;break;case"1Y":n=12;break;case"3Y":n=36;break;case"5Y":n=60;break;default:n=1;break}console.log(e,t,n);let r;return n<=12?(console.log("ifff"),r=(t-e)/e*100):(console.log("elseee"),r=(Math.pow(1+(t-e)/e,12/n)-1)*100),r.toFixed(2)},zI=({lastNav:e,loadingChart:t,schemeChart:n})=>{if(t)return f("div",{className:"loading not-found",children:"Loading..."});if(n===null||n.length<1)return f("div",{className:"not-found",children:"not data found..."});const r=["1M","3M","6M","1Y","3Y","5Y"],[i,o]=_.exports.useState("6M"),[s,a]=_.exports.useState(),l=p=>{switch(p){case"1M":return 21;case"3M":return 63;case"6M":return 132;case"1Y":return 246;case"3Y":return 738;case"5Y":return 1208}},c={},u=p=>{o(p);const g=AI(c[p][0].Last_Nav,parseFloat(e),p);a(g)};r.forEach(p=>{const g=l(p);n.length>=g?c[p]=n.slice(0,g).reverse():p==="All"&&(c[p]=n.reverse())}),s||u("6M");const d=c[i].map(p=>p.Nav_Date),h=c[i].map(p=>p.Last_Nav),m={labels:d,datasets:[{data:h,borderColor:"rgba(145, 71, 255, 1)",backgroundColor:"rgba(145, 71, 255, 0.1)",borderWidth:2,pointRadius:0,pointHoverRadius:0,fill:!0,tension:.1}]},y={responsive:!0,plugins:{legend:{display:!1},tooltip:{enabled:!0,mode:"nearest",intersect:!1,backgroundColor:"rgba(0, 0, 0, 0.5)",titleColor:"#fff",bodyColor:"#fff",borderColor:"rgba(75, 192, 192, 1)",borderWidth:1,padding:10,callbacks:{label:p=>`Nav: ${p.formattedValue}`}}},onClick:(p,g)=>{if(g.length>0){const x=g[0]._chart,b=x.getElementAtEvent(p);x.tooltip.setActiveElements(b),x.tooltip.update()}},onHover:(p,g)=>{var b;const x=(b=g[0])==null?void 0:b.element;x&&(x.options.plugins.tooltip.enabled=!0,x.update())},scales:{x:{display:!1},y:{display:!1}}},v=r.filter(p=>c[p]);return k(LI,{children:[k("div",{className:"graph-chart",children:[k("div",{className:"return-section",children:[k("div",{children:[k("span",{className:`return ${s>0?"positive":"negative"}`,children:[s," %"]})," ",k("span",{className:"frequency",children:[i," return"]})]}),k("div",{className:"nav",children:[f("span",{children:"-0.30%"})," 1D"]})]}),f(RI,{data:m,options:y})]}),f("div",{className:"return-duration",children:v.map((p,g)=>f("div",{className:`card ${i===p?"active":""}`,onClick:()=>u(p),children:p},g))})]})},II=ee.div`
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
    inset: 40% 0px 0px;
    z-index: 90;
    background: white;
    width: auto;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    flex-direction: column;
    border: 2px solid rgb(145, 71, 255);
    padding: 1rem;
    left: 1rem;
    right: 1rem;

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
`,DI=ee.div`
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
`;function FI(){const e=si();return f(DI,{children:f("div",{className:"header",children:f("button",{onClick:()=>e(-1),children:k("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 24 24",height:"3rem",width:"3rem",xmlns:"http://www.w3.org/2000/svg",children:[f("path",{fill:"none",d:"M0 0h24v24H0V0z"}),f("path",{d:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"})]})})})})}const jI=ee.div`
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
`,ho=e=>new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR",minimumFractionDigits:0,maximumFractionDigits:0}).format(e),XS=({type:e,loading:t})=>{const[n,r]=_.exports.useState("sip"),[i,o]=_.exports.useState(1e3),[s,a]=_.exports.useState(10),[l,c]=_.exports.useState(5),u=(v,p,g)=>{const x=g*12,b=p/100/12;return(v*((Math.pow(1+b,x)-1)/b)*(1+b)).toFixed(2)},d=(v,p,g)=>{const x=p/100;return(v*Math.pow(1+x,g)).toFixed(2)},h=u(i,s,l),m=d(i,s,l),y={labels:["Invested Amount","Estimated Return"],datasets:[{data:[i*l*12,h-i*l*12],backgroundColor:["#9147ff","#FF6384"],width:200}]};return k(jI,{children:[k("div",{className:"calculator",children:[k("div",{className:"navigation",children:[f("div",{onClick:()=>r("sip"),className:n==="sip"?"nav-active":"",children:"SIP"}),f("div",{onClick:()=>r("lumpsum"),className:n==="lumpsum"?"nav-active":"",children:"Lumpsum"})]}),k("label",{children:[f("span",{children:"Monthly Investment"})," ",f("p",{children:ho(i)})]}),f("div",{className:"param",children:f(Bf,{value:i,onChange:(v,p)=>o(p),"aria-labelledby":"investment-slider",valueLabelDisplay:"auto",step:1e3,min:1e3,max:1e5,sx:{height:8,color:"#9147ff","& .MuiSlider-thumb":{width:24,height:24,backgroundColor:"#9147ff"},"& .MuiSlider-track":{height:8},"& .MuiSlider-rail":{height:8}}})}),k("label",{children:[f("span",{children:"Return Rate (%)"})," ",k("p",{children:[s," %"]})]}),f("div",{className:"param",children:f(Bf,{value:s,onChange:(v,p)=>a(p),"aria-labelledby":"return-rate-slider",valueLabelDisplay:"auto",step:1,min:1,max:20,sx:{height:8,color:"#9147ff","& .MuiSlider-thumb":{width:24,height:24,backgroundColor:"#9147ff"},"& .MuiSlider-track":{height:8},"& .MuiSlider-rail":{height:8}}})}),k("label",{children:[f("span",{children:"Time Period (Years)"})," ",k("p",{children:[l,"Y"]})]}),f("div",{className:"param",children:f(Bf,{value:l,onChange:(v,p)=>c(p),"aria-labelledby":"time-period-slider",valueLabelDisplay:"auto",step:1,min:1,max:30,sx:{height:8,color:"#9147ff","& .MuiSlider-thumb":{width:24,height:24,backgroundColor:"#9147ff"},"& .MuiSlider-track":{height:8},"& .MuiSlider-rail":{height:8}}})}),f("br",{}),k("div",{className:"return-output",children:[f("h3",{children:"Output"}),k("label",{children:[f("span",{children:"Investment Amount:"})," ",f("span",{children:ho(n==="sip"?i*l*12:i)})]}),k("label",{children:[f("span",{children:"Est. Return:"})," ",k("span",{children:[" ",ho(n==="sip"?h-i*l*12:m-i)]})]}),k("label",{children:[f("span",{children:"Total Value: "})," ",k("span",{children:[" ",ho(n==="sip"?h:m)]})]})]})]}),f($I,{data:y,sx:{width:8,height:8}})]})},BI=ee.div`
  .hide {
    display: none;
  }

  h2 {
    font-size: 3rem;
    text-transform: capitalize;
    margin-bottom: 2rem;
    text-align: center;
  }

  .amount-suggestion {
    display: flex;
    gap: 2rem;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
    margin: 2rem;
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
    position: fixed;
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

    button {
      padding: 1.5rem;
      border-radius: 10px;
      font-size: 1.6rem;
      line-height: 1.5rem;
      width: 50%;
      display: inline-block;
    }
  }
`,Cu=zt(YT)({boxShadow:"none",textTransform:"none",fontSize:16,padding:"6px 12px",border:"1px solid",backgroundColor:"#9147ff",borderColor:"#9147ff",width:"100%",color:"white",fontFamily:["-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(","),"&:hover":{backgroundColor:"rgba(145, 71, 255, 0.9)",borderColor:"#9147ff",boxShadow:"none"},"&:active":{boxShadow:"none",backgroundColor:"rgba(145, 71, 255, 0.9)",borderColor:"#9147ff"},"&:focus":{boxShadow:"0 0 0 0.2rem rgba(145,71,255,.6)"}}),$x=({type:e,loading:t})=>{_.exports.useState(!0);const[n,r]=_.exports.useState(500),[i,o]=_.exports.useState(""),s=[500,1e3,2e3,5e3],a=d=>{const h=["th","st","nd","rd"],m=d%100;return d+(h[(m-20)%10]||h[m]||h[0])},l=()=>Array.from({length:25},(d,h)=>a(h+1));_.exports.useState("");const c=l(),u=(d="")=>{o(`Success: ${d}`)};return k(BI,{children:[f("h2",{children:e}),f("input",{type:"text",placeholder:"Enter amount",value:ho(n),onChange:d=>console.log(d)}),f("div",{className:"amount-suggestion",children:s.map(d=>f("div",{className:"suggestion",onClick:()=>r(d),children:ho(d)},d))}),f("div",{className:`frequency ${e!=="sip"?"hide":""}`,children:k("select",{onChange:d=>console.log(d.target.value.slice(0,-2)),children:[f("option",{value:"",children:"Select Date Of SIP"}),c.map(d=>k("option",{value:d,children:[d," of every month"]},d))]})}),f("div",{className:"order-status",children:i}),k("div",{className:"actions",children:[f(Cu,{onClick:()=>u("Added to cart"),children:"Add To Cart"}),f(Cu,{onClick:()=>u("SIP started"),children:e==="sip"?"Start SIP":"Invest Now"})]})]})},VI=()=>{const{schemeCode:e}=B5(),[t,n]=_.exports.useState(null),[r,i]=_.exports.useState(!0),[o,s]=_.exports.useState(null),a=async()=>{try{const N=await vM(e);n(N)}catch(N){s(N)}finally{i(!1)}},[l,c]=_.exports.useState(null),[u,d]=_.exports.useState(!0),h=async()=>{try{const N=await yM(e);c(N)}catch(N){s(N)}finally{d(!1)}},[m,y]=_.exports.useState([]),[v,p]=_.exports.useState(void 0),[g,x]=_.exports.useState(!0),b=async()=>{try{const N=await Za("schemes");y(N.slice(0,5))}catch(N){p(N)}finally{x(!1)}};_.exports.useEffect(()=>{a(),h(),b()},[]);const w=[{title:"Return calculator",content:f(XS,{config:{returnRate:12}})},{title:"Holdings (155)",content:"This is the overview content."},{title:"Returns & Rakings",content:"This is the overview content."}],[S,C]=_.exports.useState(""),P=()=>{C("one-time")},M=()=>{C("sip")},O=()=>{C("")};return k(II,{children:[f(FI,{}),k("div",{className:"container",children:[r?CR():k(ot,{children:[k("div",{className:"top-section",children:[f("div",{className:"image",children:f("img",{src:`./images/amc-logo/${t.amc_logo}`,alt:""})}),f("div",{className:"icon",children:f(lP,{})})]}),k("div",{className:"detail",children:[f("div",{className:"name",children:t.Scheme_Name}),k("div",{className:"info",children:[t.Scheme_Type," / ",t.Scheme_Plan]})]}),f("div",{className:"chart-section",children:f(zI,{lastNav:t.Last_Nav,loadingChart:u,schemeChart:l})}),k("div",{className:"scheme-detail",children:[k("div",{className:"card",children:[k("div",{className:"heading",children:["NAV: ",t.Nav_Date]}),f("div",{className:"text",children:t.Last_Nav})]}),k("div",{className:"card",children:[f("div",{className:"heading",children:"Rating"}),f("div",{className:"text",children:"4 *"})]}),k("div",{className:"card",children:[f("div",{className:"heading",children:"Min. SIP amount"}),f("div",{className:"text",children:t.Minimum_Purchase_Amount})]}),k("div",{className:"card",children:[f("div",{className:"heading",children:"Fund Size"}),f("div",{className:"text",children:"522 Cr"})]})]}),f("div",{className:"basic-details",children:f(_L,{items:w})}),f("div",{className:"similar-funds",children:f($d,{schemes:m,loading:g,customHeader:"Similar funds"})})]}),k("div",{className:"purchase-action",children:[f(Cu,{className:"sp-button primary",onClick:P,children:"One-time"}),f(Cu,{className:"sp-button primary active",onClick:M,children:"Start SIP"})]}),S==="one-time"&&k("div",{className:"invest-now",children:[f("button",{className:"close-button",onClick:O,children:f(Gv,{})}),f($x,{type:"one-time"})]}),S==="sip"&&k("div",{className:"invest-now",children:[f("button",{className:"close-button",onClick:O,children:f(Gv,{})}),f($x,{type:"sip"})]})]})]})},WI=ee.div`
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
`,HI=()=>{const[e,t]=_.exports.useState(!0),[n,r]=_.exports.useState([]);return _.exports.useEffect(()=>{(async()=>{try{const o=await Za("schemes");r(o)}catch(o){setError(o)}finally{t(!1)}})()},[]),f(WI,{children:f("div",{className:"container division",children:f($d,{schemes:n,loading:e})})})},UI=ee.div`
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
`,to=({type:e=""})=>{var c;const[t,n]=_.exports.useState(!0),[r,i]=_.exports.useState([]),a=(c=Qt().pathname.split("/").filter(u=>u)[1])!=null?c:"schemes";_.exports.useEffect(()=>{(async()=>{try{const d=await Za(a);i(d)}catch(d){setError(d)}finally{n(!1)}})()},[]);const l=()=>{switch(e){case"high-return":return{title:"High Return",desc:"Funds with good return in recent time",img:"high-returns.svg"};case"sip-with-100":return{title:"SIP with 100",desc:"Funds with minimum investment of just 100 every month",img:"sip-with-100.svg"};case"tax-saving":return{title:"Tax Saving",desc:"Funds that help you save on taxes",img:"tax-saving.svg"};case"large-cap":return{title:"Large Cap",desc:"Funds investing in large-cap companies",img:"large-cap.svg"};case"mid-cap":return{title:"Mid Cap",desc:"Funds investing in mid-cap companies",img:"mid-cap.svg"};case"small-cap":return{title:"Small Cap",desc:"Funds investing in small-cap companies",img:"small-cap.svg"};default:return{title:"Unknown",desc:"No description available",img:"default.svg"}}};return f(UI,{children:k("div",{className:"container division",children:[k("div",{className:"template-header",children:[k("div",{children:[f("h2",{children:l().title}),f("p",{children:l().desc})]}),f("img",{src:`./public/images/collection/${l().img}`,alt:""})]}),f($d,{schemes:r,loading:t})]})})},YI=ee.div`
  padding: 7.5rem 0.5rem;
  .all-mf-section {
  }

  .calculalator {
    h2 {
      font-size: 1.8rem;
    }
  }
`,XI=({type:e})=>{var l;const[t,n]=_.exports.useState(!0),[r,i]=_.exports.useState([]),a=(l=Qt().pathname.split("/").filter(c=>c)[1])!=null?l:"schemes";return _.exports.useEffect(()=>{(async()=>{try{const u=await Za(a);i(u)}catch(u){setError(u)}finally{n(!1)}})()},[]),f(YI,{children:f("div",{className:"container",children:k("div",{className:"calculalator division",children:[f("h2",{children:"Return Calculator"}),f("div",{className:"container division",children:f(XS,{type:e,loading:!0})})]})})})},KI=()=>{const{darkStatus:e,sideBarStatus:t}=At(d=>d.site),[n,r]=_.exports.useState(window.innerWidth),[i,o]=_.exports.useState(!0),s=si(),a=Qt(),l=document.cookie.split(";").filter(d=>d.indexOf("isLoggedIn=true")>=0);console.log(l.length);let c=f(VR,{});l.length===0&&(c=f(ly,{})),_.exports.useEffect(()=>{l.length===0&&s("/login");const d=()=>r(window.innerWidth);return window.addEventListener("resize",d),()=>window.removeEventListener("resize",d)},[n]);const u=()=>a.pathname==="/login"||l.length===0||a.pathname.startsWith("/mutual-fund/")?(o(!1),null):f(OM,{mySize:n});return _.exports.useEffect(()=>{const d=()=>{a.pathname};return window.addEventListener("popstate",d),()=>{window.removeEventListener("popstate",d)}},[a.pathname]),k(x3,{theme:e?k3:S3,children:[f(_3,{}),k("div",{className:"app",children:[f(u,{}),f("div",{className:`${i?"main":""} ${t&&n>1199?"sidebar-open":""}`,children:k(i4,{children:[f(be,{path:"*",element:f(n4,{to:"/",replace:!0})}),f(be,{path:"/all-mutual-funds",element:f(HI,{})}),f(be,{path:"/",element:c}),f(be,{path:"/login",element:f(ly,{})}),f(be,{path:"/return-calculator",element:f(XI,{type:"sip",loading:!0})}),f(be,{path:"/mutual-fund/:schemeCode",element:f(VI,{loading:!0})}),k(be,{path:"/schemes/",children:[f(be,{path:"high-return",element:f(to,{type:"high-return"})}),f(be,{path:"sip-with-100",element:f(to,{type:"sip-with-100"})}),f(be,{path:"tax-saving",element:f(to,{type:"tax-saving"})}),f(be,{path:"large-cap",element:f(to,{type:"large-cap"})}),f(be,{path:"mid-cap",element:f(to,{type:"mid-cap"})}),f(be,{path:"small-cap",element:f(to,{type:"small-cap"})}),f(be,{path:"dashboard",element:f(If,{})}),f(be,{path:"SIP",element:f(If,{})}),f(be,{path:"Watchlist",element:f(If,{})})]}),k(be,{path:"/following/",element:f(TE,{}),children:[f(be,{index:!0,element:f(FE,{})}),f(be,{path:"live",element:f(jE,{})}),f(be,{path:"videos",element:f(BE,{})}),f(be,{path:"categories",element:f(VE,{})})]}),k(be,{path:"/ipo/",element:f(Xi,{}),children:[f(be,{index:!0,path:"all",element:f(Xi,{})}),f(be,{path:"mainline",element:f(Xi,{})}),f(be,{path:"sme",element:f(Xi,{})}),f(be,{path:"listed",element:f(Xi,{})}),f(be,{path:"closed",element:f(Xi,{})})]}),k(be,{path:"/offers/",element:f(UE,{}),children:[f(be,{index:!0,path:"brokers",element:f(x1,{type:"stock"})}),f(be,{path:"advisors",element:f(x1,{type:"advisor"})})]})]})})]})]})},GI=()=>{const{pathname:e}=Qt();return _.exports.useEffect(()=>{window.scrollTo(0,0)},[e]),null},qI=Wi({name:"user",initialState:{users:[{username:"CosmoKramer",title:"Rapid Chess Championship!",game:"Chess",tag:"Chatting",pp:"https://i.pravatar.cc/",liveScreen:"./images/games/game-chees.jpg",viewers:"17.1K"},{username:"Soprano",title:"Im back",game:"Dota 2",tag:"Turkish",pp:"https://i.pravatar.cc/",liveScreen:"./images/games/game-dota.jpg",viewers:"395"},{username:"Seinfeld",title:"Reduce Ping & Avoid Lags",game:"PUBG",tag:"English",pp:"https://i.pravatar.cc/",liveScreen:"./images/games/game-pubg.jpg",viewers:"5.4K"},{username:"Darlene",title:"FPS soon? OMEGALUL",game:"Counter Strike",tag:"English",pp:"https://i.pravatar.cc/",liveScreen:"./images/games/game-cs.jpg",viewers:"117"},{username:"Cersei",title:"Live Bitcoin Trading Infos 24/7",game:"Crypto",tag:"Chatting",pp:"https://i.pravatar.cc/",liveScreen:"./images/games/game-crypto.jpg",viewers:"88"},{username:"Jacob",title:"LVL 70 - Tracksuit Grind",game:"Escape From Tarkov",tag:"Turkish",pp:"https://i.pravatar.cc/",liveScreen:"./images/games/game-eft.jpg",viewers:"733"},{username:"Skyler",title:"Tourney Run Kollo",game:"Mortal Kombat",tag:"English",pp:"https://i.pravatar.cc/",liveScreen:"./images/games/game-mortal.jpg",viewers:"231"},{username:"Schillinger",title:"Day 12 of the Game of Year ?",game:"Elder Ring",tag:"English",pp:"https://i.pravatar.cc/",liveScreen:"./images/games/game-elder.jpg",viewers:"3.7K"}]}});var QI=qI.reducer;const ZI=Wi({name:"category",initialState:{games:[{name:"Dota 2",image:"./images/categories/game1.jpg",viewer:"63.3k"},{name:"Chess",image:"./images/categories/game2.jpg",viewer:"23.7k"},{name:"PUBG: BATTLEGROUNDS",image:"./images/categories/game3.jpg",viewer:"34.3k"},{name:"Just Chatting",image:"./images/categories/game4.jpg",viewer:"580k"},{name:"Grand Theft Auto V",image:"./images/categories/game5.jpg",viewer:"144k"},{name:"Elder Ring",image:"./images/categories/game6.jpg",viewer:"88k"},{name:"Apex Legends",image:"./images/categories/game7.jpg",viewer:"112.6k"},{name:"Call of Duty: Wardzone",image:"./images/categories/game8.jpg",viewer:"39k"},{name:"Escape from Tarkov",image:"./images/categories/game9.jpg",viewer:"20k"},{name:"FIFA 22",image:"./images/categories/game10.jpg",viewer:"42.2k"},{name:"Fortnite",image:"./images/categories/game11.jpg",viewer:"102k"},{name:"Age of Empires",image:"./images/categories/game12.jpg",viewer:"5.4k"}]}});var JI=ZI.reducer;let Vp;Vp===void 0&&(Vp=[{Scheme_Name:"Aditya Birla Sun Life PSU Equity Fund",amc_logo:"absl.png",Scheme_Type:"Equity",Scheme_Type:"Big",Scheme_Code:"",risk:"High",rating:5,return:[47.01,88,23]},{Scheme_Name:"Motilal Oswal Midcap Fund",amc_logo:"motilal-oswal.png",Scheme_Type:"Equity",Scheme_Type:"Flexi Cap",Scheme_Code:"",risk:"Very High",rating:4,return:[47.01,88]},{Scheme_Name:"Nippon India Small Cap Fund",amc_logo:"nippon.png",Scheme_Type:"Equity",Scheme_Type:"Small",Scheme_Code:"",risk:"Low",rating:5,return:[47.01,88,23]},{Scheme_Name:"Motilal Oswal Midcap Fund",amc_logo:"motilal-oswal.png",Scheme_Type:"Equity",Scheme_Type:"Flexi Cap",Scheme_Code:"",risk:"Very High",rating:4,return:[47.01,88]},{Scheme_Name:"Nippon India Small Cap Fund",amc_logo:"nippon.png",Scheme_Type:"Equity",Scheme_Type:"Small",Scheme_Code:"",risk:"Low",rating:5,return:[47.01,88,23]},{Scheme_Name:"Motilal Oswal Midcap Fund",amc_logo:"motilal-oswal.png",Scheme_Type:"Equity",Scheme_Type:"Flexi Cap",Scheme_Code:"",risk:"Very High",rating:4,return:[47.01,88]},{Scheme_Name:"Nippon India Small Cap Fund",amc_logo:"nippon.png",Scheme_Type:"Equity",Scheme_Type:"Small",Scheme_Code:"",risk:"Low",rating:5,return:[47.01,88,23]}]);const eD=Wi({name:"schemes",initialState:{schemes:Vp}});var tD=eD.reducer;const nD=Wi({name:"offers",initialState:{offers:[{id:1,name:"Angel Broking",image:"./images/offers/angel-one.png",category:"broker",type:"advisor",href:"/angel-broking"},{id:2,name:"Zerodha",image:"./images/offers/zerodha.png",category:"broker",type:"stock",href:"#"},{id:3,name:"Upstox",image:"./images/offers/upstox.png",category:"broker",type:"advisor",href:"#"},{id:5,name:"Dhan",image:"./images/offers/dhan.png",category:"broker",type:"advisor",href:"#"},{id:6,name:"5 Paisa",image:"./images/offers/5-paisa.png",category:"broker",type:"stock",href:"#"},{id:7,name:"ICICI direct",image:"./images/offers/icici-direct.png",category:"broker",type:"advisor",href:"#"},{id:8,name:"Kotak Securities",image:"./images/offers/kotak-security.png",category:"broker",type:"stock",href:"#"},{id:1,name:"Angel Broking",image:"./images/offers/angel-one.png",category:"broker",type:"advisor",href:"/angel-broking"},{id:2,name:"Zerodha",image:"./images/offers/zerodha.png",category:"broker",type:"stock",href:"#"},{id:3,name:"Upstox",image:"./images/offers/upstox.png",category:"broker",type:"advisor",href:"#"},{id:5,name:"Dhan",image:"./images/offers/dhan.png",category:"broker",type:"advisor",href:"#"},{id:6,name:"5 Paisa",image:"./images/offers/5-paisa.png",category:"broker",type:"stock",href:"#"},{id:7,name:"ICICI direct",image:"./images/offers/icici-direct.png",category:"broker",type:"advisor",href:"#"},{id:8,name:"Kotak Securities",image:"./images/offers/kotak-security.png",category:"broker",type:"stock",href:"#"}]}});var rD=nD.reducer;const iD=Wi({name:"ipos",initialState:{ipos:[{name:"RNFI Services Limited",image:"./images/ipo/RNFI_Services_logo.jpg",exchange:"NSE",type:"sme",href:"/angel-broking",date:{start:"Jul 22, 2024",end:"Jul 22, 2024",list:"Jul 22, 2024"},price:{offer:"98-105",expectedPremium:"84-90 (80%)"},lotSize:"1200",subscriptions:"221.56"},{name:"SAR Televenture Limited FPO",image:"./images/ipo/SAR_Televentures_logo.png",exchange:"NSE",type:"mainline",href:"/angel-broking",date:{start:"Jul 22, 2024",end:"Jul 22, 2024",list:"Jul 22, 2024"},price:{offer:"200-210",expectedPremium:"7-8 (3.33%)"},lotSize:"500",subscriptions:"7.49"},{name:"V.L.Infraprojects Limited",image:"./images/ipo/Vraj_Iron_And_Steel_logo.png",exchange:"NSE",type:"sme",href:"/angel-broking",date:{start:"Jul 23, 2024",end:"Jul 25, 2024",list:"Jul 22, 2024"},price:{offer:"39-42",expectedPremium:"60-62 (142.86%)"},lotSize:"3000",subscriptions:"633.71"},{name:"VVIP Infratech Limited",image:"./images/ipo/uttsav_cz_gold_logo.jpeg",exchange:"NSE",type:"mainline",href:"/angel-broking",date:{start:"Jul 23, 2024",end:"Jul 25, 2024",list:"Jul 27, 2024"},price:{offer:"91-93",expectedPremium:"115-122 (123.66%)"},lotSize:"1200",subscriptions:"236.92"},{name:"Chetana Education Limited",image:"./images/ipo/Cheviot-company-logo.jpg",exchange:"NSE",type:"mainline",href:"/angel-broking",date:{start:"Jul 23, 2024",end:"Jul 25, 2024",list:"Jul 27, 2024"},price:{offer:"80-85",expectedPremium:"40-43 (47.06%)"},lotSize:"1600",subscriptions:"196.57"},{name:"Manglam Infra and Engineering Limited",image:"./images/ipo/Manglam_Infra_Logo.png",exchange:"NSE",type:"sme",href:"/angel-broking",date:{start:"Jul 23, 2024",end:"Jul 25, 2024",list:"Jul 27, 2024"},price:{offer:"53-56",expectedPremium:"47-50 (83.93%)"},lotSize:"2000",subscriptions:"394.59"},{name:"Aprameya Engineering Limited",image:"./images/ipo/Aprameya_Engineering_logo.jpg",exchange:"NSE",type:"mainline",href:"/angel-broking",date:{start:"Jul 25, 2024",end:"Jul 29, 2024",list:"Jul 27, 2024"},price:{offer:"56-58",expectedPremium:"25-30 (43.1%)"},lotSize:"2000",subscriptions:"5.92"},{name:"Trom Industries Limited",image:"./images/ipo/Trom-Industries-logo.jpg",exchange:"NSE",type:"sme",href:"/angel-broking",date:{start:"Jul 25, 2024",end:"Jul 29, 2024",list:"Jul 27, 2024"},price:{offer:"110-115",expectedPremium:"135-145 (117.39%)"},lotSize:"1200",subscriptions:"34.84"},{name:"Clinitech Laboratory Limited",image:"./images/ipo/Clinitech_lab_logo.jpg",exchange:"BSE",type:"sme",href:"/angel-broking",date:{start:"Jul 25, 2024",end:"Jul 29, 2024",list:"Jul 27, 2024"},price:{offer:"96",expectedPremium:"135-145 (117.39%)"},lotSize:"1200",subscriptions:"6.09 times"}]}});var oD=iD.reducer;const sD=Wi({name:"collections",initialState:{collections:[{name:"High Return",url:"high-return",image:"high-returns.svg"},{name:"SIP with 100",url:"sip-with-100",image:"sip-with-100.svg"},{name:"Tax Saving",url:"tax-saving",image:"tax-saving.svg"},{name:"Large Cap",url:"large-cap",image:"large-cap.svg"},{name:"Mid Cap",url:"mid-cap",image:"mid-cap.svg"},{name:"Small Cap",url:"small-cap",image:"small-cap.svg"}]}});var aD=sD.reducer,lD=XP({reducer:{site:iM,user:QI,category:JI,schemes:tD,offers:rD,ipos:oD,amcCollection:aD}});C2.render(f(Qe.StrictMode,{children:f(I3,{store:lD,children:k(h4,{children:[f(GI,{}),f(KI,{})]})})}),document.getElementById("root"));
