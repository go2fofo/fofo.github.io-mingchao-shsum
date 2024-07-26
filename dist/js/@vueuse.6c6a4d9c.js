import"./vue.01c28186.js";import{s as e,w as t,r as n,u as o,g as i,b as r,d as a,e as u,f as l,h as s,n as c,i as d}from"./@vue.6ba8a5b1.js";var v,f=Object.defineProperty,p=Object.defineProperties,m=Object.getOwnPropertyDescriptors,y=Object.getOwnPropertySymbols,w=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,h=(e,t,n)=>t in e?f(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function O(o,i){var r;const a=e();var u,l;return t((()=>{a.value=o()}),(u=((e,t)=>{for(var n in t||(t={}))w.call(t,n)&&h(e,n,t[n]);if(y)for(var n of y(t))b.call(t,n)&&h(e,n,t[n]);return e})({},i),l={flush:null!=(r=null==i?void 0:i.flush)?r:"sync"},p(u,m(l)))),n(a)}const g="undefined"!=typeof window,P=e=>"boolean"==typeof e,I=e=>"number"==typeof e,E=e=>"string"==typeof e,j=()=>{},S=g&&(null==(v=null==window?void 0:window.navigator)?void 0:v.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function T(e){return"function"==typeof e?e():o(e)}function A(e,t){return function(...n){return new Promise(((o,i)=>{Promise.resolve(e((()=>t.apply(this,n)),{fn:t,thisArg:this,args:n})).then(o).catch(i)}))}}function x(e){return!!i()&&(r(e),!0)}function N(e,t=200,n={}){return A(function(e,t={}){let n,o,i=j;const r=e=>{clearTimeout(e),i(),i=j};return a=>{const u=T(e),l=T(t.maxWait);return n&&r(n),u<=0||void 0!==l&&l<=0?(o&&(r(o),o=null),Promise.resolve(a())):new Promise(((e,s)=>{i=t.rejectOnCancel?s:e,l&&!o&&(o=setTimeout((()=>{n&&r(n),o=null,e(a())}),l)),n=setTimeout((()=>{o&&r(o),o=null,e(a())}),u)}))}}(t,n),e)}function C(e,t=200,n={}){const o=a(e.value),i=N((()=>{o.value=e.value}),t,n);return u(e,(()=>i())),o}function Q(e,t=200,n=!1,o=!0,i=!1){return A(function(e,t=!0,n=!0,o=!1){let i,r,a=0,u=!0,l=j;const s=()=>{i&&(clearTimeout(i),i=void 0,l(),l=j)};return c=>{const d=T(e),v=Date.now()-a,f=()=>r=c();return s(),d<=0?(a=Date.now(),f()):(v>d&&(n||!u)?(a=Date.now(),f()):t&&(r=new Promise(((e,t)=>{l=o?t:e,i=setTimeout((()=>{a=Date.now(),u=!0,e(f()),s()}),Math.max(0,d-v))}))),n||i||(i=setTimeout((()=>u=!0),d)),u=!1,r)}}(t,n,o,i),e)}function D(e,t=!0){l()?s(e):t?e():c(e)}function R(e,t,o={}){const{immediate:i=!0}=o,r=a(!1);let u=null;function l(){u&&(clearTimeout(u),u=null)}function s(){r.value=!1,l()}function c(...n){l(),r.value=!0,u=setTimeout((()=>{r.value=!1,u=null,e(...n)}),T(t))}return i&&(r.value=!0,g&&c()),x(s),{isPending:n(r),start:c,stop:s}}function k(e){var t;const n=T(e);return null!=(t=null==n?void 0:n.$el)?t:n}const B=g?window:void 0,W=g?window.document:void 0;function _(...e){let t,n,o,i;if(E(e[0])||Array.isArray(e[0])?([n,o,i]=e,t=B):[t,n,o,i]=e,!t)return j;Array.isArray(n)||(n=[n]),Array.isArray(o)||(o=[o]);const r=[],a=()=>{r.forEach((e=>e())),r.length=0},l=u((()=>[k(t),T(i)]),(([e,t])=>{a(),e&&r.push(...n.flatMap((n=>o.map((o=>((e,t,n,o)=>(e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)))(e,n,o,t))))))}),{immediate:!0,flush:"post"}),s=()=>{l(),a()};return x(s),s}let z=!1;function H(e,t,n={}){const{window:o=B,ignore:i=[],capture:r=!0,detectIframe:a=!1}=n;if(!o)return;S&&!z&&(z=!0,Array.from(o.document.body.children).forEach((e=>e.addEventListener("click",j))));let u=!0;const l=e=>i.some((t=>{if("string"==typeof t)return Array.from(o.document.querySelectorAll(t)).some((t=>t===e.target||e.composedPath().includes(t)));{const n=k(t);return n&&(e.target===n||e.composedPath().includes(n))}})),s=[_(o,"click",(n=>{const o=k(e);o&&o!==n.target&&!n.composedPath().includes(o)&&(0===n.detail&&(u=!l(n)),u?t(n):u=!0)}),{passive:!0,capture:r}),_(o,"pointerdown",(t=>{const n=k(e);n&&(u=!t.composedPath().includes(n)&&!l(t))}),{passive:!0}),a&&_(o,"blur",(n=>{var i;const r=k(e);"IFRAME"!==(null==(i=o.document.activeElement)?void 0:i.tagName)||(null==r?void 0:r.contains(o.document.activeElement))||t(n)}))].filter(Boolean);return()=>s.forEach((e=>e()))}const L="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},F="__vueuse_ssr_handlers__";function V(e,t,{window:n=B,initialValue:o=""}={}){const i=a(o),r=d((()=>{var e;return k(t)||(null==(e=null==n?void 0:n.document)?void 0:e.documentElement)}));return u([r,()=>T(e)],(([e,t])=>{var r;if(e&&n){const a=null==(r=n.getComputedStyle(e).getPropertyValue(t))?void 0:r.trim();i.value=a||o}}),{immediate:!0}),u(i,(t=>{var n;(null==(n=r.value)?void 0:n.style)&&r.value.style.setProperty(T(e),t)})),i}function $({document:e=W}={}){if(!e)return a("visible");const t=a(e.visibilityState);return _(e,"visibilitychange",(()=>{t.value=e.visibilityState})),t}L[F]=L[F]||{},L[F];var M,G,J=Object.getOwnPropertySymbols,U=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable,K=(e,t)=>{var n={};for(var o in e)U.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&J)for(var o of J(e))t.indexOf(o)<0&&q.call(e,o)&&(n[o]=e[o]);return n};function X(e,t,n={}){const o=n,{window:i=B}=o,r=K(o,["window"]);let l;const s=function(e,t=!1){const n=a(),o=()=>n.value=Boolean(e());return o(),D(o,t),n}((()=>i&&"ResizeObserver"in i)),c=()=>{l&&(l.disconnect(),l=void 0)},d=u((()=>k(e)),(e=>{c(),s.value&&i&&e&&(l=new ResizeObserver(t),l.observe(e,r))}),{immediate:!0,flush:"post"}),v=()=>{c(),d()};return x(v),{isSupported:s,stop:v}}function Y(e,t={}){const{reset:n=!0,windowResize:o=!0,windowScroll:i=!0,immediate:r=!0}=t,l=a(0),s=a(0),c=a(0),d=a(0),v=a(0),f=a(0),p=a(0),m=a(0);function y(){const t=k(e);if(!t)return void(n&&(l.value=0,s.value=0,c.value=0,d.value=0,v.value=0,f.value=0,p.value=0,m.value=0));const o=t.getBoundingClientRect();l.value=o.height,s.value=o.bottom,c.value=o.left,d.value=o.right,v.value=o.top,f.value=o.width,p.value=o.x,m.value=o.y}return X(e,y),u((()=>k(e)),(e=>!e&&y())),i&&_("scroll",y,{capture:!0,passive:!0}),o&&_("resize",y,{passive:!0}),D((()=>{r&&y()})),{height:l,bottom:s,left:c,right:d,top:v,width:f,x:p,y:m,update:y}}(G=M||(M={})).UP="UP",G.RIGHT="RIGHT",G.DOWN="DOWN",G.LEFT="LEFT",G.NONE="NONE";var Z=Object.defineProperty,ee=Object.getOwnPropertySymbols,te=Object.prototype.hasOwnProperty,ne=Object.prototype.propertyIsEnumerable,oe=(e,t,n)=>t in e?Z(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function ie(e,t,n,o={}){var i,r,s;const{clone:c=!1,passive:v=!1,eventName:f,deep:p=!1,defaultValue:m}=o,y=l(),w=n||(null==y?void 0:y.emit)||(null==(i=null==y?void 0:y.$emit)?void 0:i.bind(y))||(null==(s=null==(r=null==y?void 0:y.proxy)?void 0:r.$emit)?void 0:s.bind(null==y?void 0:y.proxy));let b=f;t||(t="modelValue"),b=f||b||`update:${t.toString()}`;const h=e=>{return c?(e=>"function"==typeof e)(c)?c(e):(t=e,JSON.parse(JSON.stringify(t))):e;var t},O=()=>void 0!==e[t]?h(e[t]):m;if(v){const n=O(),o=a(n);return u((()=>e[t]),(e=>o.value=h(e))),u(o,(n=>{(n!==e[t]||p)&&w(b,n)}),{deep:p}),o}return d({get:()=>O(),set(e){w(b,e)}})}function re({window:e=B}={}){if(!e)return a(!1);const t=a(e.document.hasFocus());return _(e,"blur",(()=>{t.value=!1})),_(e,"focus",(()=>{t.value=!0})),t}function ae(e={}){const{window:t=B,initialWidth:n=1/0,initialHeight:o=1/0,listenOrientation:i=!0,includeScrollbar:r=!0}=e,u=a(n),l=a(o),s=()=>{t&&(r?(u.value=t.innerWidth,l.value=t.innerHeight):(u.value=t.document.documentElement.clientWidth,l.value=t.document.documentElement.clientHeight))};return s(),D(s),_("resize",s,{passive:!0}),i&&_("orientationchange",s,{passive:!0}),{width:u,height:l}}((e,t)=>{for(var n in t||(t={}))te.call(t,n)&&oe(e,n,t[n]);if(ee)for(var n of ee(t))ne.call(t,n)&&oe(e,n,t[n])})({linear:function(e){return e}},{easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]});export{I as a,P as b,ae as c,Y as d,_ as e,X as f,Q as g,V as h,g as i,R as j,S as k,$ as l,re as m,O as n,H as o,ie as p,C as r,x as t,k as u};