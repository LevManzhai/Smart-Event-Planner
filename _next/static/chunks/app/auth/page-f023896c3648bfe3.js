(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[235],{8203:function(e,t,a){"use strict";a.d(t,{Z:function(){return s}});var r=a(2898);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let s=(0,r.Z)("Calendar",[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",ry:"2",key:"eu3xkr"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6",key:"m3sa8f"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6",key:"18kwsl"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10",key:"xt86sb"}]])},1295:function(e,t,a){"use strict";a.d(t,{Z:function(){return s}});var r=a(2898);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let s=(0,r.Z)("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]])},1494:function(e,t,a){Promise.resolve().then(a.bind(a,1489))},1489:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return y}});var r=a(7437),s=a(2265),i=a(4033),o=a(1396),n=a.n(o),l=a(5093),c=a(8203),u=a(1295),d=a(2898);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let m=(0,d.Z)("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]),p=(0,d.Z)("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]),f=(0,d.Z)("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);var h=a(5925);function y(){let[e,t]=(0,s.useState)(!0),[a,o]=(0,s.useState)(""),[d,y]=(0,s.useState)(""),[g,x]=(0,s.useState)(!1),[b,v]=(0,s.useState)(!1),w=(0,i.useRouter)(),{signIn:N,signUp:k}=(0,l.useAuth)(),j=async t=>{t.preventDefault(),v(!0);try{e?(await N(a,d),h.default.success("Welcome!"),w.push("/")):(await k(a,d),h.default.success("Please check your email to confirm registration"))}catch(e){h.default.error(e.message)}finally{v(!1)}};return(0,r.jsx)("div",{className:"min-h-screen bg-gradient-to-br from-primary-50 to-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8",children:(0,r.jsxs)("div",{className:"max-w-md w-full space-y-8",children:[(0,r.jsxs)("div",{className:"text-center",children:[(0,r.jsxs)(n(),{href:"/",className:"flex items-center justify-center space-x-2 mb-6",children:[(0,r.jsx)(c.Z,{className:"h-8 w-8 text-primary-600"}),(0,r.jsx)("span",{className:"text-2xl font-bold text-gray-900",children:"Smart Event Planner"})]}),(0,r.jsx)("h2",{className:"text-3xl font-bold text-gray-900",children:e?"Welcome!":"Create Account"}),(0,r.jsx)("p",{className:"mt-2 text-gray-600",children:e?"Sign in to your account":"Register to get started"})]}),(0,r.jsxs)("div",{className:"card",children:[(0,r.jsxs)("form",{className:"space-y-6",onSubmit:j,children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700 mb-2",children:"Email Address"}),(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsx)(u.Z,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"}),(0,r.jsx)("input",{id:"email",name:"email",type:"email",required:!0,className:"input-field pl-10",placeholder:"your@email.com",value:a,onChange:e=>o(e.target.value)})]})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"password",className:"block text-sm font-medium text-gray-700 mb-2",children:"Password"}),(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsx)(m,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"}),(0,r.jsx)("input",{id:"password",name:"password",type:g?"text":"password",required:!0,className:"input-field pl-10 pr-10",placeholder:"••••••••",value:d,onChange:e=>y(e.target.value)}),(0,r.jsx)("button",{type:"button",className:"absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600",onClick:()=>x(!g),children:g?(0,r.jsx)(p,{className:"h-5 w-5"}):(0,r.jsx)(f,{className:"h-5 w-5"})})]})]}),(0,r.jsx)("button",{type:"submit",disabled:b,className:"w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed",children:b?"Loading...":e?"Sign In":"Sign Up"})]}),(0,r.jsx)("div",{className:"mt-6 text-center",children:(0,r.jsx)("button",{onClick:()=>t(!e),className:"text-primary-600 hover:text-primary-500 font-medium",children:e?"No account? Sign Up":"Already have an account? Sign In"})})]}),(0,r.jsx)("div",{className:"text-center",children:(0,r.jsx)(n(),{href:"/",className:"text-gray-600 hover:text-primary-600",children:"← Back to Homepage"})})]})})}},5093:function(e,t,a){"use strict";a.r(t),a.d(t,{AuthProvider:function(){return n},useAuth:function(){return l}});var r=a(7437),s=a(2265),i=a(2899);let o=(0,s.createContext)(void 0);function n(e){let{children:t}=e,[a,n]=(0,s.useState)(null),[l,c]=(0,s.useState)(!0);(0,s.useEffect)(()=>{let e=async()=>{try{let e=localStorage.getItem("supabase_user");if(e)try{let t=JSON.parse(e);n(t),console.log("User loaded from localStorage:",t.email)}catch(e){console.error("Error parsing saved user:",e),localStorage.removeItem("supabase_user")}let{data:{session:t}}=await i.O.auth.getSession();console.log("Supabase session:",t),(null==t?void 0:t.user)?(n(t.user),localStorage.setItem("supabase_user",JSON.stringify(t.user)),console.log("User set from session:",t.user.email)):e||(n(null),localStorage.removeItem("supabase_user"))}catch(e){console.error("Error initializing auth:",e),n(null),localStorage.removeItem("supabase_user")}finally{c(!1)}};e();let{data:{subscription:t}}=i.O.auth.onAuthStateChange((e,t)=>{var a;console.log("Auth state change:",e,null==t?void 0:null===(a=t.user)||void 0===a?void 0:a.email),"SIGNED_IN"===e&&(null==t?void 0:t.user)?(n(t.user),localStorage.setItem("supabase_user",JSON.stringify(t.user)),console.log("User signed in:",t.user.email)):"SIGNED_OUT"===e?(n(null),localStorage.removeItem("supabase_user"),console.log("User signed out")):"TOKEN_REFRESHED"===e&&(null==t?void 0:t.user)&&(n(t.user),localStorage.setItem("supabase_user",JSON.stringify(t.user)),console.log("Token refreshed for:",t.user.email))});return()=>t.unsubscribe()},[]);let u=async(e,t)=>{let{error:a}=await i.O.auth.signInWithPassword({email:e,password:t});if(a)throw a},d=async(e,t)=>{let{error:a}=await i.O.auth.signUp({email:e,password:t});if(a)throw a},m=async()=>{await i.O.auth.signOut(),n(null),localStorage.removeItem("supabase_user")};return(0,r.jsx)(o.Provider,{value:{user:a,loading:l,signIn:u,signUp:d,signOut:m},children:t})}function l(){let e=(0,s.useContext)(o);if(void 0===e)throw Error("useAuth must be used within an AuthProvider");return e}},2899:function(e,t,a){"use strict";a.d(t,{O:function(){return s}});var r=a(359);let s=(0,r.eI)("https://kyiaeylescnvlhvgwfwb.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt5aWFleWxlc2Nudmxodmd3ZndiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE2MTAxNDgsImV4cCI6MjA3NzE4NjE0OH0.iZDfEzCnqNyFh94KAeBIel2Pvd_FPELNLsduivJyL-g")},4033:function(e,t,a){e.exports=a(94)},5925:function(e,t,a){"use strict";let r,s;a.r(t),a.d(t,{CheckmarkIcon:function(){return Y},ErrorIcon:function(){return B},LoaderIcon:function(){return V},ToastBar:function(){return el},ToastIcon:function(){return ea},Toaster:function(){return em},default:function(){return ep},resolveValue:function(){return j},toast:function(){return F},useToaster:function(){return U},useToasterStore:function(){return M}});var i,o=a(2265);let n={data:""},l=e=>{if("object"==typeof window){let t=(e?e.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return t.nonce=window.__nonce__,t.parentNode||(e||document.head).appendChild(t),t.firstChild}return e||n},c=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,u=/\/\*[^]*?\*\/|  +/g,d=/\n+/g,m=(e,t)=>{let a="",r="",s="";for(let i in e){let o=e[i];"@"==i[0]?"i"==i[1]?a=i+" "+o+";":r+="f"==i[1]?m(o,i):i+"{"+m(o,"k"==i[1]?"":t)+"}":"object"==typeof o?r+=m(o,t?t.replace(/([^,])+/g,e=>i.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):i):null!=o&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),s+=m.p?m.p(i,o):i+":"+o+";")}return a+(t&&s?t+"{"+s+"}":s)+r},p={},f=e=>{if("object"==typeof e){let t="";for(let a in e)t+=a+f(e[a]);return t}return e},h=(e,t,a,r,s)=>{var i;let o=f(e),n=p[o]||(p[o]=(e=>{let t=0,a=11;for(;t<e.length;)a=101*a+e.charCodeAt(t++)>>>0;return"go"+a})(o));if(!p[n]){let t=o!==e?e:(e=>{let t,a,r=[{}];for(;t=c.exec(e.replace(u,""));)t[4]?r.shift():t[3]?(a=t[3].replace(d," ").trim(),r.unshift(r[0][a]=r[0][a]||{})):r[0][t[1]]=t[2].replace(d," ").trim();return r[0]})(e);p[n]=m(s?{["@keyframes "+n]:t}:t,a?"":"."+n)}let l=a&&p.g?p.g:null;return a&&(p.g=p[n]),i=p[n],l?t.data=t.data.replace(l,i):-1===t.data.indexOf(i)&&(t.data=r?i+t.data:t.data+i),n},y=(e,t,a)=>e.reduce((e,r,s)=>{let i=t[s];if(i&&i.call){let e=i(a),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;i=t?"."+t:e&&"object"==typeof e?e.props?"":m(e,""):!1===e?"":e}return e+r+(null==i?"":i)},"");function g(e){let t=this||{},a=e.call?e(t.p):e;return h(a.unshift?a.raw?y(a,[].slice.call(arguments,1),t.p):a.reduce((e,a)=>Object.assign(e,a&&a.call?a(t.p):a),{}):a,l(t.target),t.g,t.o,t.k)}g.bind({g:1});let x,b,v,w=g.bind({k:1});function N(e,t){let a=this||{};return function(){let r=arguments;function s(i,o){let n=Object.assign({},i),l=n.className||s.className;a.p=Object.assign({theme:b&&b()},n),a.o=/ *go\d+/.test(l),n.className=g.apply(a,r)+(l?" "+l:""),t&&(n.ref=o);let c=e;return e[0]&&(c=n.as||e,delete n.as),v&&c[0]&&v(n),x(c,n)}return t?t(s):s}}var k=e=>"function"==typeof e,j=(e,t)=>k(e)?e(t):e,E=(r=0,()=>(++r).toString()),I=()=>{if(void 0===s&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");s=!e||e.matches}return s},S="default",O=(e,t)=>{let{toastLimit:a}=e.settings;switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,a)};case 1:return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:r}=t;return O(e,{type:e.toasts.find(e=>e.id===r.id)?1:0,toast:r});case 3:let{toastId:s}=t;return{...e,toasts:e.toasts.map(e=>e.id===s||void 0===s?{...e,dismissed:!0,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let i=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+i}))}}},C=[],A={toasts:[],pausedAt:void 0,settings:{toastLimit:20}},_={},D=(e,t=S)=>{_[t]=O(_[t]||A,e),C.forEach(([e,a])=>{e===t&&a(_[t])})},z=e=>Object.keys(_).forEach(t=>D(e,t)),$=e=>Object.keys(_).find(t=>_[t].toasts.some(t=>t.id===e)),P=(e=S)=>t=>{D(t,e)},Z={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},M=(e={},t=S)=>{let[a,r]=(0,o.useState)(_[t]||A),s=(0,o.useRef)(_[t]);(0,o.useEffect)(()=>(s.current!==_[t]&&r(_[t]),C.push([t,r]),()=>{let e=C.findIndex(([e])=>e===t);e>-1&&C.splice(e,1)}),[t]);let i=a.toasts.map(t=>{var a,r,s;return{...e,...e[t.type],...t,removeDelay:t.removeDelay||(null==(a=e[t.type])?void 0:a.removeDelay)||(null==e?void 0:e.removeDelay),duration:t.duration||(null==(r=e[t.type])?void 0:r.duration)||(null==e?void 0:e.duration)||Z[t.type],style:{...e.style,...null==(s=e[t.type])?void 0:s.style,...t.style}}});return{...a,toasts:i}},T=(e,t="blank",a)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...a,id:(null==a?void 0:a.id)||E()}),L=e=>(t,a)=>{let r=T(t,e,a);return P(r.toasterId||$(r.id))({type:2,toast:r}),r.id},F=(e,t)=>L("blank")(e,t);F.error=L("error"),F.success=L("success"),F.loading=L("loading"),F.custom=L("custom"),F.dismiss=(e,t)=>{let a={type:3,toastId:e};t?P(t)(a):z(a)},F.dismissAll=e=>F.dismiss(void 0,e),F.remove=(e,t)=>{let a={type:4,toastId:e};t?P(t)(a):z(a)},F.removeAll=e=>F.remove(void 0,e),F.promise=(e,t,a)=>{let r=F.loading(t.loading,{...a,...null==a?void 0:a.loading});return"function"==typeof e&&(e=e()),e.then(e=>{let s=t.success?j(t.success,e):void 0;return s?F.success(s,{id:r,...a,...null==a?void 0:a.success}):F.dismiss(r),e}).catch(e=>{let s=t.error?j(t.error,e):void 0;s?F.error(s,{id:r,...a,...null==a?void 0:a.error}):F.dismiss(r)}),e};var J=1e3,U=(e,t="default")=>{let{toasts:a,pausedAt:r}=M(e,t),s=(0,o.useRef)(new Map).current,i=(0,o.useCallback)((e,t=J)=>{if(s.has(e))return;let a=setTimeout(()=>{s.delete(e),n({type:4,toastId:e})},t);s.set(e,a)},[]);(0,o.useEffect)(()=>{if(r)return;let e=Date.now(),s=a.map(a=>{if(a.duration===1/0)return;let r=(a.duration||0)+a.pauseDuration-(e-a.createdAt);if(r<0){a.visible&&F.dismiss(a.id);return}return setTimeout(()=>F.dismiss(a.id,t),r)});return()=>{s.forEach(e=>e&&clearTimeout(e))}},[a,r,t]);let n=(0,o.useCallback)(P(t),[t]),l=(0,o.useCallback)(()=>{n({type:5,time:Date.now()})},[n]),c=(0,o.useCallback)((e,t)=>{n({type:1,toast:{id:e,height:t}})},[n]),u=(0,o.useCallback)(()=>{r&&n({type:6,time:Date.now()})},[r,n]),d=(0,o.useCallback)((e,t)=>{let{reverseOrder:r=!1,gutter:s=8,defaultPosition:i}=t||{},o=a.filter(t=>(t.position||i)===(e.position||i)&&t.height),n=o.findIndex(t=>t.id===e.id),l=o.filter((e,t)=>t<n&&e.visible).length;return o.filter(e=>e.visible).slice(...r?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+s,0)},[a]);return(0,o.useEffect)(()=>{a.forEach(e=>{if(e.dismissed)i(e.id,e.removeDelay);else{let t=s.get(e.id);t&&(clearTimeout(t),s.delete(e.id))}})},[a,i]),{toasts:a,handlers:{updateHeight:c,startPause:l,endPause:u,calculateOffset:d}}},H=w`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,R=w`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,q=w`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,B=N("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${H} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${R} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${q} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,W=w`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,V=N("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${W} 1s linear infinite;
`,G=w`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,X=w`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,Y=N("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${G} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${X} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,K=N("div")`
  position: absolute;
`,Q=N("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,ee=w`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,et=N("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${ee} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,ea=({toast:e})=>{let{icon:t,type:a,iconTheme:r}=e;return void 0!==t?"string"==typeof t?o.createElement(et,null,t):t:"blank"===a?null:o.createElement(Q,null,o.createElement(V,{...r}),"loading"!==a&&o.createElement(K,null,"error"===a?o.createElement(B,{...r}):o.createElement(Y,{...r})))},er=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,es=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,ei=N("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,eo=N("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,en=(e,t)=>{let a=e.includes("top")?1:-1,[r,s]=I()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[er(a),es(a)];return{animation:t?`${w(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${w(s)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},el=o.memo(({toast:e,position:t,style:a,children:r})=>{let s=e.height?en(e.position||t||"top-center",e.visible):{opacity:0},i=o.createElement(ea,{toast:e}),n=o.createElement(eo,{...e.ariaProps},j(e.message,e));return o.createElement(ei,{className:e.className,style:{...s,...a,...e.style}},"function"==typeof r?r({icon:i,message:n}):o.createElement(o.Fragment,null,i,n))});i=o.createElement,m.p=void 0,x=i,b=void 0,v=void 0;var ec=({id:e,className:t,style:a,onHeightUpdate:r,children:s})=>{let i=o.useCallback(t=>{if(t){let a=()=>{r(e,t.getBoundingClientRect().height)};a(),new MutationObserver(a).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,r]);return o.createElement("div",{ref:i,className:t,style:a},s)},eu=(e,t)=>{let a=e.includes("top"),r=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:I()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(a?1:-1)}px)`,...a?{top:0}:{bottom:0},...r}},ed=g`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,em=({reverseOrder:e,position:t="top-center",toastOptions:a,gutter:r,children:s,toasterId:i,containerStyle:n,containerClassName:l})=>{let{toasts:c,handlers:u}=U(a,i);return o.createElement("div",{"data-rht-toaster":i||"",style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...n},className:l,onMouseEnter:u.startPause,onMouseLeave:u.endPause},c.map(a=>{let i=a.position||t,n=eu(i,u.calculateOffset(a,{reverseOrder:e,gutter:r,defaultPosition:t}));return o.createElement(ec,{id:a.id,key:a.id,onHeightUpdate:u.updateHeight,className:a.visible?ed:"",style:n},"custom"===a.type?j(a.message,a):s?s(a):o.createElement(el,{toast:a,position:i}))}))},ep=F}},function(e){e.O(0,[673,17,971,472,744],function(){return e(e.s=1494)}),_N_E=e.O()}]);