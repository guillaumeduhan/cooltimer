(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{743:(e,t,r)=>{Promise.resolve().then(r.bind(r,3126)),Promise.resolve().then(r.bind(r,814)),Promise.resolve().then(r.bind(r,3418)),Promise.resolve().then(r.t.bind(r,2032,23)),Promise.resolve().then(r.bind(r,6783)),Promise.resolve().then(r.bind(r,8223))},3418:(e,t,r)=>{"use strict";r.d(t,{A:()=>m,AppWrapper:()=>c,U:()=>u});var a=r(5155),o=r(1712),n=r(6046),s=r(2115),l=r(814),i=r(3697);let d=(0,s.createContext)(void 0);function c(e){let{children:t}=e,[r,c]=(0,s.useState)(void 0),[u,m]=(0,s.useState)(!0),p=(0,n.useRouter)(),f=async()=>{try{m(!0);let{error:e}=await o.A.auth.signOut();if(e)throw e;return p.push("/"),!0}catch(e){return console.error("Logout error:",e),!1}finally{m(!1)}},h=async e=>{let{user_metadata:t}=e;try{m(!0),c(e=>({...e,user_metadata:t}))}catch(e){throw l.o.error("Sorry, something wrong happened. Please try again."),e}finally{m(!1)}},g=()=>{let e=localStorage.getItem("user");if(e)return c(JSON.parse(e));let t=(0,i.A)(),r={id:t,app_metadata:{},user_metadata:{display_name:function(){let e=["quick","lazy","sleepy","noisy","hungry","brave","shy","clever","silly","graceful","curious","gentle","happy","sad","angry","proud","bright","dark","silent","fancy","cool","calm","bold","friendly","loyal","eager","zany","witty","sharp","quiet","tough","kind","nervous","funny","crazy","jolly","grumpy","sneaky","bouncy","chilly","fierce","soft","wild","tiny","giant","nimble","swift","clumsy","dizzy","mighty"],t=e=>e[Math.floor(Math.random()*e.length)];return"".concat(t(e),"-").concat(t(e),"-").concat(t(["tiger","lion","bear","fox","eagle","shark","dragon","panther","wolf","leopard","owl","koala","zebra","moose","falcon","whale","octopus","penguin","crab","phoenix","rabbit","giraffe","monkey","donkey","swan","buffalo","beetle","rhino","lobster","antelope","camel","duck","lizard","panda","squid","bat","yak","boar","sloth","iguana","seahorse","crow","goat","chimp","cobra","flamingo","porcupine","puma","toad","hyena"]))}()},aud:t,created_at:new Date().toISOString()};localStorage.setItem("user",JSON.stringify(r)),c(r)};return((0,s.useEffect)(()=>{(async()=>{m(!0);try{let{data:e}=await o.A.auth.getSession();if(!(null==e?void 0:e.session)){g(),m(!1);return}let{data:t,error:r}=await o.A.auth.getUser();if(r)throw r;(null==t?void 0:t.user)&&c(t.user)}catch(e){console.error("Error fetching user:",e)}finally{m(!1)}})()},[]),u)?(0,a.jsx)(a.Fragment,{children:"Loading..."}):(0,a.jsx)(d.Provider,{value:{user:r,loading:u,setUser:c,setLoading:m,saveUser:h,logout:f},children:t})}function u(){let e=(0,s.useContext)(d);if(void 0===e)throw Error("useAppContext must be used within an AppWrapper");return e}let m=u},8196:(e,t,r)=>{"use strict";r.d(t,{A:()=>s});var a=r(5155),o=r(2783),n=r(3312);let s=e=>{let{loading:t=!1,disabled:r=!1,onClick:s,label:l="Save",children:i,className:d,variant:c}=e;return(0,a.jsxs)(n.$,{variant:c,className:"font-[600] bg-gradient-to-br from-woodsmoke-700 to-woodsmoke-900 hover:scale-[102%] transition cursor-pointer ".concat(d," dark:text-white"),disabled:t||r,onClick:s,style:{cursor:"pointer"},children:[!t&&(0,a.jsxs)(a.Fragment,{children:[i,l]}),t&&(0,a.jsx)(o.A,{className:"animate-spin"})]})}},6783:(e,t,r)=>{"use strict";r.d(t,{default:()=>ed});var a=r(5155),o=r(3418),n=r(3126),s=r(4057);let l=(0,s.A)("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]),i=(0,s.A)("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);var d=r(2115),c=function(){},u="undefined"!=typeof window;let m=function(e,t,r){if(!u)return[t,c,c];if(!e)throw Error("useLocalStorage key may not be falsy");var a=r?r.raw?function(e){return e}:r.deserializer:JSON.parse,o=(0,d.useRef)(function(e){try{var o=r?r.raw?String:r.serializer:JSON.stringify,n=localStorage.getItem(e);if(null!==n)return a(n);return t&&localStorage.setItem(e,o(t)),t}catch(e){return t}}),n=(0,d.useState)(function(){return o.current(e)}),s=n[0],l=n[1];(0,d.useLayoutEffect)(function(){return l(o.current(e))},[e]);var i=(0,d.useCallback)(function(t){try{var o="function"==typeof t?t(s):t;if(void 0===o)return;var n=void 0;n=r?r.raw?"string"==typeof o?o:JSON.stringify(o):r.serializer?r.serializer(o):JSON.stringify(o):JSON.stringify(o),localStorage.setItem(e,n),l(a(n))}catch(e){}},[e,l]);return[s,i,(0,d.useCallback)(function(){try{localStorage.removeItem(e),l(void 0)}catch(e){}},[e,l])]},p=()=>{let[e,t]=(0,d.useState)(!1),[r,o]=m("dark-mode",!1);return(0,d.useEffect)(()=>{r&&t(r)},[r]),(0,d.useEffect)(()=>{{let t=window.document.documentElement;e?t.classList.add("dark"):t.classList.remove("dark")}o(e)},[e]),(0,a.jsx)("div",{className:"cursor-pointer",onClick:()=>t(!e),children:e?(0,a.jsx)(l,{className:"w-6 h-6"}):(0,a.jsx)(i,{className:"w-6 h-6"})})};var f=r(8196),h=r(1344),g=r(3900),x=Object.defineProperty,v=Object.defineProperties,w=Object.getOwnPropertyDescriptors,k=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,j=(e,t,r)=>t in e?x(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,N=(e,t)=>{for(var r in t||(t={}))b.call(t,r)&&j(e,r,t[r]);if(k)for(var r of k(t))y.call(t,r)&&j(e,r,t[r]);return e},S=(e,t)=>v(e,w(t)),C=(e,t)=>{var r={};for(var a in e)b.call(e,a)&&0>t.indexOf(a)&&(r[a]=e[a]);if(null!=e&&k)for(var a of k(e))0>t.indexOf(a)&&y.call(e,a)&&(r[a]=e[a]);return r},E=d.createContext({}),M=d.forwardRef((e,t)=>{var r,a,o,n,s,{value:l,onChange:i,maxLength:c,textAlign:u="left",pattern:m,placeholder:p,inputMode:f="numeric",onComplete:h,pushPasswordManagerStrategy:g="increase-width",pasteTransformer:x,containerClassName:v,noScriptCSSFallback:w=I,render:k,children:b}=e,y=C(e,["value","onChange","maxLength","textAlign","pattern","placeholder","inputMode","onComplete","pushPasswordManagerStrategy","pasteTransformer","containerClassName","noScriptCSSFallback","render","children"]);let[j,M]=d.useState("string"==typeof y.defaultValue?y.defaultValue:""),A=null!=l?l:j,O=function(e){let t=d.useRef();return d.useEffect(()=>{t.current=e}),t.current}(A),R=d.useCallback(e=>{null==i||i(e),M(e)},[i]),z=d.useMemo(()=>m?"string"==typeof m?new RegExp(m):m:null,[m]),D=d.useRef(null),_=d.useRef(null),T=d.useRef({value:A,onChange:R,isIOS:"undefined"!=typeof window&&(null==(a=null==(r=null==window?void 0:window.CSS)?void 0:r.supports)?void 0:a.call(r,"-webkit-touch-callout","none"))}),L=d.useRef({prev:[null==(o=D.current)?void 0:o.selectionStart,null==(n=D.current)?void 0:n.selectionEnd,null==(s=D.current)?void 0:s.selectionDirection]});d.useImperativeHandle(t,()=>D.current,[]),d.useEffect(()=>{let e=D.current,t=_.current;if(!e||!t)return;function r(){if(document.activeElement!==e){G(null),H(null);return}let t=e.selectionStart,r=e.selectionEnd,a=e.selectionDirection,o=e.maxLength,n=e.value,s=L.current.prev,l=-1,i=-1,d;if(0!==n.length&&null!==t&&null!==r){let e=t===r,a=t===n.length&&n.length<o;if(e&&!a){if(0===t)l=0,i=1,d="forward";else if(t===o)l=t-1,i=t,d="backward";else if(o>1&&n.length>1){let e=0;if(null!==s[0]&&null!==s[1]){d=t<s[1]?"backward":"forward";let r=s[0]===s[1]&&s[0]<o;"backward"!==d||r||(e=-1)}l=e+t,i=e+t+1}}-1!==l&&-1!==i&&l!==i&&D.current.setSelectionRange(l,i,d)}let c=-1!==l?l:t,u=-1!==i?i:r,m=null!=d?d:a;G(c),H(u),L.current.prev=[c,u,m]}if(T.current.value!==e.value&&T.current.onChange(e.value),L.current.prev=[e.selectionStart,e.selectionEnd,e.selectionDirection],document.addEventListener("selectionchange",r,{capture:!0}),r(),document.activeElement===e&&J(!0),!document.getElementById("input-otp-style")){let e=document.createElement("style");if(e.id="input-otp-style",document.head.appendChild(e),e.sheet){let t="background: transparent !important; color: transparent !important; border-color: transparent !important; opacity: 0 !important; box-shadow: none !important; -webkit-box-shadow: none !important; -webkit-text-fill-color: transparent !important;";P(e.sheet,"[data-input-otp]::selection { background: transparent !important; color: transparent !important; }"),P(e.sheet,`[data-input-otp]:autofill { ${t} }`),P(e.sheet,`[data-input-otp]:-webkit-autofill { ${t} }`),P(e.sheet,"@supports (-webkit-touch-callout: none) { [data-input-otp] { letter-spacing: -.6em !important; font-weight: 100 !important; font-stretch: ultra-condensed; font-optical-sizing: none !important; left: -1px !important; right: 1px !important; } }"),P(e.sheet,"[data-input-otp] + * { pointer-events: all !important; }")}}let a=()=>{t&&t.style.setProperty("--root-height",`${e.clientHeight}px`)};a();let o=new ResizeObserver(a);return o.observe(e),()=>{document.removeEventListener("selectionchange",r,{capture:!0}),o.disconnect()}},[]);let[W,F]=d.useState(!1),[B,J]=d.useState(!1),[Z,G]=d.useState(null),[$,H]=d.useState(null);d.useEffect(()=>{(function(e){setTimeout(e,0),setTimeout(e,10),setTimeout(e,50)})(()=>{var e,t,r,a;null==(e=D.current)||e.dispatchEvent(new Event("input"));let o=null==(t=D.current)?void 0:t.selectionStart,n=null==(r=D.current)?void 0:r.selectionEnd,s=null==(a=D.current)?void 0:a.selectionDirection;null!==o&&null!==n&&(G(o),H(n),L.current.prev=[o,n,s])})},[A,B]),d.useEffect(()=>{void 0!==O&&A!==O&&O.length<c&&A.length===c&&(null==h||h(A))},[c,h,O,A]);let V=function({containerRef:e,inputRef:t,pushPasswordManagerStrategy:r,isFocused:a}){let[o,n]=d.useState(!1),[s,l]=d.useState(!1),[i,c]=d.useState(!1),u=d.useMemo(()=>"none"!==r&&("increase-width"===r||"experimental-no-flickering"===r)&&o&&s,[o,s,r]),m=d.useCallback(()=>{let a=e.current,o=t.current;if(!a||!o||i||"none"===r)return;let s=a.getBoundingClientRect().left+a.offsetWidth,l=a.getBoundingClientRect().top+a.offsetHeight/2;0===document.querySelectorAll('[data-lastpass-icon-root],com-1password-button,[data-dashlanecreated],[style$="2147483647 !important;"]').length&&document.elementFromPoint(s-18,l)===a||(n(!0),c(!0))},[e,t,i,r]);return d.useEffect(()=>{let t=e.current;if(!t||"none"===r)return;function a(){l(window.innerWidth-t.getBoundingClientRect().right>=40)}a();let o=setInterval(a,1e3);return()=>{clearInterval(o)}},[e,r]),d.useEffect(()=>{let e=a||document.activeElement===t.current;if("none"===r||!e)return;let o=setTimeout(m,0),n=setTimeout(m,2e3),s=setTimeout(m,5e3),l=setTimeout(()=>{c(!0)},6e3);return()=>{clearTimeout(o),clearTimeout(n),clearTimeout(s),clearTimeout(l)}},[t,a,r,m]),{hasPWMBadge:o,willPushPWMBadge:u,PWM_BADGE_SPACE_WIDTH:"40px"}}({containerRef:_,inputRef:D,pushPasswordManagerStrategy:g,isFocused:B}),U=d.useCallback(e=>{let t=e.currentTarget.value.slice(0,c);if(t.length>0&&z&&!z.test(t)){e.preventDefault();return}"string"==typeof O&&t.length<O.length&&document.dispatchEvent(new Event("selectionchange")),R(t)},[c,R,O,z]),q=d.useCallback(()=>{var e;if(D.current){let t=Math.min(D.current.value.length,c-1),r=D.current.value.length;null==(e=D.current)||e.setSelectionRange(t,r),G(t),H(r)}J(!0)},[c]),Y=d.useCallback(e=>{var t,r;let a=D.current;if(!x&&(!T.current.isIOS||!e.clipboardData||!a))return;let o=e.clipboardData.getData("text/plain"),n=x?x(o):o;e.preventDefault();let s=null==(t=D.current)?void 0:t.selectionStart,l=null==(r=D.current)?void 0:r.selectionEnd,i=(s!==l?A.slice(0,s)+n+A.slice(l):A.slice(0,s)+n+A.slice(s)).slice(0,c);if(i.length>0&&z&&!z.test(i))return;a.value=i,R(i);let d=Math.min(i.length,c-1),u=i.length;a.setSelectionRange(d,u),G(d),H(u)},[c,R,z,A]),X=d.useMemo(()=>({position:"relative",cursor:y.disabled?"default":"text",userSelect:"none",WebkitUserSelect:"none",pointerEvents:"none"}),[y.disabled]),Q=d.useMemo(()=>({position:"absolute",inset:0,width:V.willPushPWMBadge?`calc(100% + ${V.PWM_BADGE_SPACE_WIDTH})`:"100%",clipPath:V.willPushPWMBadge?`inset(0 ${V.PWM_BADGE_SPACE_WIDTH} 0 0)`:void 0,height:"100%",display:"flex",textAlign:u,opacity:"1",color:"transparent",pointerEvents:"all",background:"transparent",caretColor:"transparent",border:"0 solid transparent",outline:"0 solid transparent",boxShadow:"none",lineHeight:"1",letterSpacing:"-.5em",fontSize:"var(--root-height)",fontFamily:"monospace",fontVariantNumeric:"tabular-nums"}),[V.PWM_BADGE_SPACE_WIDTH,V.willPushPWMBadge,u]),K=d.useMemo(()=>d.createElement("input",S(N({autoComplete:y.autoComplete||"one-time-code"},y),{"data-input-otp":!0,"data-input-otp-placeholder-shown":0===A.length||void 0,"data-input-otp-mss":Z,"data-input-otp-mse":$,inputMode:f,pattern:null==z?void 0:z.source,"aria-placeholder":p,style:Q,maxLength:c,value:A,ref:D,onPaste:e=>{var t;Y(e),null==(t=y.onPaste)||t.call(y,e)},onChange:U,onMouseOver:e=>{var t;F(!0),null==(t=y.onMouseOver)||t.call(y,e)},onMouseLeave:e=>{var t;F(!1),null==(t=y.onMouseLeave)||t.call(y,e)},onFocus:e=>{var t;q(),null==(t=y.onFocus)||t.call(y,e)},onBlur:e=>{var t;J(!1),null==(t=y.onBlur)||t.call(y,e)}})),[U,q,Y,f,Q,c,$,Z,y,null==z?void 0:z.source,A]),ee=d.useMemo(()=>({slots:Array.from({length:c}).map((e,t)=>{var r;let a=B&&null!==Z&&null!==$&&(Z===$&&t===Z||t>=Z&&t<$),o=void 0!==A[t]?A[t]:null;return{char:o,placeholderChar:void 0!==A[0]?null:null!=(r=null==p?void 0:p[t])?r:null,isActive:a,hasFakeCaret:a&&null===o}}),isFocused:B,isHovering:!y.disabled&&W}),[B,W,c,$,Z,y.disabled,A]),et=d.useMemo(()=>k?k(ee):d.createElement(E.Provider,{value:ee},b),[b,ee,k]);return d.createElement(d.Fragment,null,null!==w&&d.createElement("noscript",null,d.createElement("style",null,w)),d.createElement("div",{ref:_,"data-input-otp-container":!0,style:X,className:v},et,d.createElement("div",{style:{position:"absolute",inset:0,pointerEvents:"none"}},K)))});function P(e,t){try{e.insertRule(t)}catch(e){console.error("input-otp could not insert CSS rule:",t)}}M.displayName="Input";var I=`
[data-input-otp] {
  --nojs-bg: white !important;
  --nojs-fg: black !important;

  background-color: var(--nojs-bg) !important;
  color: var(--nojs-fg) !important;
  caret-color: var(--nojs-fg) !important;
  letter-spacing: .25em !important;
  text-align: center !important;
  border: 1px solid var(--nojs-fg) !important;
  border-radius: 4px !important;
  width: 100% !important;
}
@media (prefers-color-scheme: dark) {
  [data-input-otp] {
    --nojs-bg: black !important;
    --nojs-fg: white !important;
  }
}`;let A=(0,s.A)("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);var O=r(1567);let R=d.forwardRef((e,t)=>{let{className:r,containerClassName:o,...n}=e;return(0,a.jsx)(M,{ref:t,containerClassName:(0,O.cn)("flex items-center gap-2 has-[:disabled]:opacity-50",o),className:(0,O.cn)("disabled:cursor-not-allowed",r),...n})});R.displayName="InputOTP";let z=d.forwardRef((e,t)=>{let{className:r,...o}=e;return(0,a.jsx)("div",{ref:t,className:(0,O.cn)("flex items-center",r),...o})});z.displayName="InputOTPGroup";let D=d.forwardRef((e,t)=>{let{index:r,className:o,...n}=e,{char:s,hasFakeCaret:l,isActive:i}=d.useContext(E).slots[r];return(0,a.jsxs)("div",{ref:t,className:(0,O.cn)("relative flex h-9 w-9 items-center justify-center border-y border-r border-woodsmoke-200 text-sm shadow-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md dark:border-woodsmoke-800",i&&"z-10 ring-1 ring-woodsmoke-950 dark:ring-woodsmoke-300",o),...n,children:[s,l&&(0,a.jsx)("div",{className:"pointer-events-none absolute inset-0 flex items-center justify-center",children:(0,a.jsx)("div",{className:"h-4 w-px animate-caret-blink bg-woodsmoke-950 duration-1000 dark:bg-woodsmoke-50"})})]})});D.displayName="InputOTPSlot";let _=d.forwardRef((e,t)=>{let{...r}=e;return(0,a.jsx)("div",{ref:t,role:"separator",...r,children:(0,a.jsx)(A,{})})});_.displayName="InputOTPSeparator";var T=r(4043),L=r(1712),W=r(6046),F=r(3312);let B=e=>{let{email:t,resendCode:r,setOpen:n}=e,[s,l,i]=m("token"),[c,u]=(0,d.useState)(""),{loading:p,setLoading:h,error:g,setError:x}=(0,T.Z)();(0,W.useRouter)();let{user:v,setUser:w}=(0,o.U)(),k=async()=>{try{h(!0);let{data:e,error:r}=await L.A.auth.verifyOtp({email:t,token:c,type:"email"});if(r){x("Sorry an error occurred. Please try again later.");return}e.session&&e.user&&(l(e.session.access_token),w(e.user),n(!1))}catch(e){x("An unexpected error occurred. Please try again."),console.error("Verification error:",e)}finally{h(!1)}};return(0,d.useEffect)(()=>{h(!1)},[h]),(0,a.jsxs)("div",{className:"grid gap-4",children:[(0,a.jsxs)("header",{className:"text-center",children:[(0,a.jsx)("div",{className:"flex items-center justify-center",children:(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 24 24",children:[(0,a.jsx)("mask",{id:"lineMdEmailCheckTwotone0",children:(0,a.jsxs)("g",{fill:"none",stroke:"#fff",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",children:[(0,a.jsx)("path",{strokeDasharray:"64",strokeDashoffset:"64",d:"M4 5h16c0.55 0 1 0.45 1 1v12c0 0.55 -0.45 1 -1 1h-16c-0.55 0 -1 -0.45 -1 -1v-12c0 -0.55 0.45 -1 1 -1Z",children:(0,a.jsx)("animate",{fill:"freeze",attributeName:"stroke-dashoffset",dur:"0.6s",values:"64;0"})}),(0,a.jsx)("path",{strokeDasharray:"24",strokeDashoffset:"24",d:"M3 6.5l9 5.5l9 -5.5",children:(0,a.jsx)("animate",{fill:"freeze",attributeName:"stroke-dashoffset",begin:"0.6s",dur:"0.2s",values:"24;0"})}),(0,a.jsx)("path",{fill:"#fff",fillOpacity:"0",stroke:"none",d:"M12 11l-8 -5h16l-8 5Z",children:(0,a.jsx)("animate",{fill:"freeze",attributeName:"fill-opacity",begin:"1s",dur:"0.15s",values:"0;0.3"})}),(0,a.jsx)("path",{fill:"#000",fillOpacity:"0",stroke:"none",d:"M19 13c3.31 0 6 2.69 6 6c0 3.31 -2.69 6 -6 6c-3.31 0 -6 -2.69 -6 -6c0 -3.31 2.69 -6 6 -6Z",children:(0,a.jsx)("set",{fill:"freeze",attributeName:"fill-opacity",begin:"0.8s",to:"1"})}),(0,a.jsx)("path",{strokeDasharray:"10",strokeDashoffset:"10",d:"M16 19l1.75 1.75l3.75 -3.75",children:(0,a.jsx)("animate",{fill:"freeze",attributeName:"stroke-dashoffset",begin:"0.8s",dur:"0.2s",values:"10;0"})})]})}),(0,a.jsx)("rect",{width:"24",height:"24",fill:"currentColor",mask:"url(#lineMdEmailCheckTwotone0)"})]})}),(0,a.jsxs)("p",{className:"text-woodsmoke-500",children:["We have sent a one-time use code to your email ",t,"."]})]}),(0,a.jsx)("div",{className:"mx-auto",children:(0,a.jsxs)(R,{maxLength:6,onChange:e=>u(e),children:[(0,a.jsxs)(z,{children:[(0,a.jsx)(D,{index:0}),(0,a.jsx)(D,{index:1}),(0,a.jsx)(D,{index:2})]}),(0,a.jsx)(_,{}),(0,a.jsxs)(z,{children:[(0,a.jsx)(D,{index:3}),(0,a.jsx)(D,{index:4}),(0,a.jsx)(D,{index:5})]})]})}),g&&(0,a.jsx)("div",{className:"bg-red-500/10 text-center text-sm text-red-500",children:g}),(0,a.jsxs)("footer",{className:"grid items-center gap-2",children:[(0,a.jsx)(f.A,{onClick:k,loading:p,disabled:c.length<6,className:"gradient--allo--bg",label:"Verify"}),(0,a.jsx)(f.A,{label:"Resend code",loading:p,onClick:r})]})]})},J=e=>{let{setOpen:t}=e,{loading:r,setLoading:o,error:n,setError:s}=(0,T.Z)(),[l,i]=(0,d.useState)(!1),[c,u]=(0,d.useState)({email:""}),m=async()=>{try{let{email:e}=c;if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(e).toLowerCase())){s("Please enter a valid email.");return}o(!0);let{error:t}=await L.A.auth.signInWithOtp({email:e});t?s(t.message):i(!0)}catch(e){console.error("Sign in error:",e),s("An unexpected error occurred")}finally{o(!1)}};return(0,a.jsx)("div",{className:"grid gap-8 dark:border-woodsmoke-600 rounded-xl mx-auto max-w-[400px] w-full px-2",children:(0,a.jsx)("div",{className:"rounded-xl py-6 shadow-lg",children:l?(0,a.jsx)(B,{email:c.email,resendCode:m,setOpen:t}):(0,a.jsxs)("div",{className:"grid gap-2",children:[(0,a.jsx)("div",{children:(0,a.jsx)("p",{className:"text-base text-woodsmoke-400 text-center",children:"If you are not yet registered, an account will be created for you."})}),(0,a.jsxs)("div",{className:"grid gap-6",children:[(0,a.jsx)("div",{className:"grid w-full gap-4",children:(0,a.jsx)("div",{className:"grid gap-1",children:(0,a.jsx)(g.p,{type:"text",className:"text-center",id:"email",value:c.email,onChange:e=>u({...c,email:e.target.value}),placeholder:"Enter email"})})}),n&&(0,a.jsx)("div",{className:"bg-red-500/10 px-2 py-1 rounded text-center text-sm text-red-500",children:n}),(0,a.jsx)(f.A,{label:"Login",loading:r,onClick:m})]})]})})})},Z=()=>{let[e,t]=(0,d.useState)(!1);return(0,a.jsxs)("div",{children:[(0,a.jsx)(F.$,{variant:"outline",onClick:()=>t(!e),children:"Login or Signup"}),(0,a.jsx)(h.lG,{open:e,onOpenChange:t,children:(0,a.jsxs)(h.Cf,{className:"sm:max-w-[400px]",children:[(0,a.jsx)(h.c7,{children:(0,a.jsx)(h.L3,{className:"text-center",children:"Welcome"})}),(0,a.jsx)(J,{setOpen:t})]})})]})},G=e=>{let{width:t=36,height:r=36,alt:o="Logo"}=e;return(0,a.jsx)("div",{className:"rounded overflow-hidden",style:{width:"".concat(t,"px"),height:"".concat(r,"px"),backgroundImage:'url("/icons/512.png")',backgroundSize:"cover",backgroundPosition:"center",overflow:"hidden"},"aria-label":o})};var $=r(8166),H=r(1524),V=r(6611),U=r(3360),q="Avatar",[Y,X]=(0,$.A)(q),[Q,K]=Y(q),ee=d.forwardRef((e,t)=>{let{__scopeAvatar:r,...o}=e,[n,s]=d.useState("idle");return(0,a.jsx)(Q,{scope:r,imageLoadingStatus:n,onImageLoadingStatusChange:s,children:(0,a.jsx)(U.sG.span,{...o,ref:t})})});ee.displayName=q;var et="AvatarImage",er=d.forwardRef((e,t)=>{let{__scopeAvatar:r,src:o,onLoadingStatusChange:n=()=>{},...s}=e,l=K(et,r),i=function(e,t){let[r,a]=d.useState("idle");return(0,V.N)(()=>{if(!e){a("error");return}let r=!0,o=new window.Image,n=e=>()=>{r&&a(e)};return a("loading"),o.onload=n("loaded"),o.onerror=n("error"),o.src=e,t&&(o.referrerPolicy=t),()=>{r=!1}},[e,t]),r}(o,s.referrerPolicy),c=(0,H.c)(e=>{n(e),l.onImageLoadingStatusChange(e)});return(0,V.N)(()=>{"idle"!==i&&c(i)},[i,c]),"loaded"===i?(0,a.jsx)(U.sG.img,{...s,ref:t,src:o}):null});er.displayName=et;var ea="AvatarFallback",eo=d.forwardRef((e,t)=>{let{__scopeAvatar:r,delayMs:o,...n}=e,s=K(ea,r),[l,i]=d.useState(void 0===o);return d.useEffect(()=>{if(void 0!==o){let e=window.setTimeout(()=>i(!0),o);return()=>window.clearTimeout(e)}},[o]),l&&"loaded"!==s.imageLoadingStatus?(0,a.jsx)(U.sG.span,{...n,ref:t}):null});eo.displayName=ea;let en=d.forwardRef((e,t)=>{let{className:r,...o}=e;return(0,a.jsx)(ee,{ref:t,className:(0,O.cn)("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",r),...o})});en.displayName=ee.displayName,d.forwardRef((e,t)=>{let{className:r,...o}=e;return(0,a.jsx)(er,{ref:t,className:(0,O.cn)("aspect-square h-full w-full",r),...o})}).displayName=er.displayName;let es=d.forwardRef((e,t)=>{let{className:r,...o}=e;return(0,a.jsx)(eo,{ref:t,className:(0,O.cn)("flex h-full w-full items-center justify-center rounded-full bg-woodsmoke-100 dark:bg-woodsmoke-800",r),...o})});es.displayName=eo.displayName;var el=r(8223);let ei=()=>{var e,t;let{user:r}=(0,o.A)(),{isRunning:s}=(0,el.L)(),{trimString:l}=(0,T.Z)();return r?(0,a.jsx)("div",{children:(0,a.jsx)("div",{className:"group font-[400] hover:bg-wooksmoke-200 flex items-center gap-2",children:(0,a.jsxs)(n.N,{href:"/profile",children:[(0,a.jsxs)("div",{className:"relative",children:[s&&(0,a.jsx)("div",{className:"size-3 bg-red-500 rounded-full absolute bottom-0 right-0 z-50"}),(0,a.jsx)(en,{className:"border-2 ".concat(s?"border-red-500":"border-woodsmoke-100 dark:border-woodsmoke-800"," size-10 opacity-80 group-hover:opacity-100"),children:(0,a.jsx)(es,{className:"capitalize cursor-pointer bg-woodsmoke-100 dark:bg-woodsmoke-800 dark:text-white text-black text-sm",children:(0,a.jsx)("div",{children:l(r.user_metadata.display_name?null===(e=r.user_metadata)||void 0===e?void 0:e.display_name[0]:r.email?r.email[0]:"A")})})})]}),(0,a.jsxs)("div",{className:"grid text-black dark:text-woodsmoke-300 dark:group-hover:text-white",children:[(0,a.jsx)("p",{className:"text-[14px] font-[500]",children:r.user_metadata.display_name?null===(t=r.user_metadata)||void 0===t?void 0:t.display_name:r.email}),r.user_metadata.position&&(0,a.jsx)("p",{className:"text-xs text-woodsmoke-500",children:l(r.user_metadata.position)})]})]})})}):(0,a.jsx)("div",{children:"No user found."})},ed=()=>{let{user:e}=(0,o.A)();return(0,a.jsxs)("header",{className:"flex items-center gap-8 justify-between p-4 z-100 min-h-16 max-h-16",children:[(0,a.jsxs)("div",{className:"flex items-center gap-4",children:[(0,a.jsxs)(n.N,{href:"/",children:[(0,a.jsx)(G,{}),!e&&(0,a.jsx)("span",{className:"font-[500] text-black dark:text-white",children:"cooltimer"})]}),(0,a.jsx)("span",{className:"text-[24px] text-neutral-700 font-[100]",children:"/"}),(0,a.jsx)(ei,{})]}),(0,a.jsxs)("div",{className:"flex items-center justify-between gap-4",children:[!e&&(0,a.jsx)("div",{className:"flex items-center justify-between gap-4",children:(0,a.jsx)(Z,{})}),(0,a.jsx)(p,{})]})]})}},8223:(e,t,r)=>{"use strict";r.d(t,{TimerProvider:()=>i,L:()=>l});var a=r(5155);let o="cooltimer-records";var n=r(2115);let s=(0,n.createContext)(void 0),l=()=>{let e=(0,n.useContext)(s);if(!e)throw Error("useTimer must be used within TimerProvider");return e},i=e=>{let{children:t}=e,[r,l]=(0,n.useState)(!1),[i,d]=(0,n.useState)(""),[c,u]=(0,n.useState)(0),m=(0,n.useRef)(0),p=(0,n.useRef)(null),f=(0,n.useRef)(null),h=(0,n.useCallback)(()=>{r||(l(!0),document.title="Recording...",f.current=Date.now()-m.current,p.current=window.setInterval(()=>{u((Date.now()-(f.current||Date.now()))/1e3)},10))},[r]),g=(0,n.useCallback)(()=>{r&&null!==p.current&&(document.title="Stopped ✋",clearInterval(p.current),p.current=null,l(!1),m.current=Date.now()-(f.current||Date.now()))},[r]),x=(0,n.useCallback)(()=>{g(),u(0),document.title="Cooltimer.app | Smart Time Tracking",m.current=0},[g]),v=(0,n.useCallback)(()=>{null!==p.current&&(clearInterval(p.current),p.current=null),l(!1);let e={id:Date.now().toString(),time:c,timestamp:new Date},t=JSON.parse(localStorage.getItem(o)||"[]");t.push(e),localStorage.setItem(o,JSON.stringify(t)),u(0),m.current=0},[c,i]),w=(0,n.useCallback)((e,t)=>{let r=Math.floor(e/3600),a=Math.floor(e%3600/60).toString().padStart(r>0?2:1,"0");return k({h:r,m:a,s:Math.floor(e%60).toString().padStart(2,"0"),ms:Math.floor(100*e%100).toString().padStart(2,"0"),grow:t})},[]),k=e=>{let{h:t,m:r,s:o,ms:n,grow:s}=e;return(0,a.jsxs)("div",{className:"relative flex items-end ".concat(s?"min-h-[24px] text-[80px]":"text-[32px]"),children:[(0,a.jsxs)("div",{className:"flex items-center",children:[t>0&&(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)("div",{children:t}),(0,a.jsx)("div",{children:":"})]}),(0,a.jsx)("div",{children:r}),(0,a.jsx)("div",{children:":"}),(0,a.jsx)("div",{children:o}),(0,a.jsx)("div",{children:","})]}),(0,a.jsx)("div",{className:"".concat(s?"text-[32px] bottom-6":""," min-w-[42px] text-left text-woodsmoke-500 relative"),children:(0,a.jsx)("span",{children:n})})]})};return(0,a.jsx)(s.Provider,{value:{time:c,isRunning:r,start:h,reset:x,save:v,pause:g,formatTime:w,getTimeFormat:k},children:t})}},3312:(e,t,r)=>{"use strict";r.d(t,{$:()=>d});var a=r(5155),o=r(2317),n=r(1027),s=r(2115),l=r(1567);let i=(0,n.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-woodsmoke-950 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:focus-visible:ring-woodsmoke-300",{variants:{variant:{default:"bg-woodsmoke-900 text-woodsmoke-50 shadow hover:bg-woodsmoke-900/90 dark:bg-woodsmoke-50 dark:text-woodsmoke-900 dark:hover:bg-woodsmoke-50/90",destructive:"bg-red-500 text-woodsmoke-50 shadow-sm hover:bg-red-500/90 dark:bg-red-900 dark:text-woodsmoke-50 dark:hover:bg-red-900/90",outline:"border border-woodsmoke-200 bg-white shadow-sm hover:bg-woodsmoke-100 hover:text-woodsmoke-900 dark:border-woodsmoke-800 dark:bg-woodsmoke-950 dark:hover:bg-woodsmoke-800 dark:hover:text-woodsmoke-50",secondary:"bg-woodsmoke-100 text-woodsmoke-900 shadow-sm hover:bg-woodsmoke-100/80 dark:bg-woodsmoke-800 dark:text-woodsmoke-50 dark:hover:bg-woodsmoke-800/80",ghost:"hover:bg-woodsmoke-100 hover:text-woodsmoke-900 dark:hover:bg-woodsmoke-800 dark:hover:text-woodsmoke-50",link:"text-woodsmoke-900 underline-offset-4 hover:underline dark:text-woodsmoke-50"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),d=s.forwardRef((e,t)=>{let{className:r,variant:n,size:s,asChild:d=!1,...c}=e,u=d?o.DX:"button";return(0,a.jsx)(u,{className:(0,l.cn)(i({variant:n,size:s,className:r})),ref:t,...c})});d.displayName="Button"},1344:(e,t,r)=>{"use strict";r.d(t,{Cf:()=>m,Es:()=>f,L3:()=>h,c7:()=>p,lG:()=>i,rr:()=>g,zM:()=>d});var a=r(5155),o=r(8333),n=r(689),s=r(2115),l=r(1567);let i=o.bL,d=o.l9,c=o.ZL;o.bm;let u=s.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)(o.hJ,{ref:t,className:(0,l.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",r),...n})});u.displayName=o.hJ.displayName;let m=s.forwardRef((e,t)=>{let{className:r,children:s,...i}=e;return(0,a.jsxs)(c,{children:[(0,a.jsx)(u,{}),(0,a.jsxs)(o.UC,{ref:t,className:(0,l.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-woodsmoke-200 bg-white p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg dark:border-woodsmoke-800 dark:bg-woodsmoke-950",r),...i,children:[s,(0,a.jsxs)(o.bm,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-woodsmoke-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-woodsmoke-100 data-[state=open]:text-woodsmoke-500 dark:ring-offset-woodsmoke-950 dark:focus:ring-woodsmoke-300 dark:data-[state=open]:bg-woodsmoke-800 dark:data-[state=open]:text-woodsmoke-400",children:[(0,a.jsx)(n.A,{className:"h-4 w-4"}),(0,a.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})});m.displayName=o.UC.displayName;let p=e=>{let{className:t,...r}=e;return(0,a.jsx)("div",{className:(0,l.cn)("flex flex-col space-y-1.5 text-center sm:text-left",t),...r})};p.displayName="DialogHeader";let f=e=>{let{className:t,...r}=e;return(0,a.jsx)("div",{className:(0,l.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",t),...r})};f.displayName="DialogFooter";let h=s.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)(o.hE,{ref:t,className:(0,l.cn)("text-lg font-semibold leading-none tracking-tight",r),...n})});h.displayName=o.hE.displayName;let g=s.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)(o.VY,{ref:t,className:(0,l.cn)("text-sm text-woodsmoke-500 dark:text-woodsmoke-400",r),...n})});g.displayName=o.VY.displayName},3900:(e,t,r)=>{"use strict";r.d(t,{p:()=>s});var a=r(5155),o=r(2115),n=r(1567);let s=o.forwardRef((e,t)=>{let{className:r,type:o,...s}=e;return(0,a.jsx)("input",{type:o,className:(0,n.cn)("flex h-9 w-full rounded-md border border-woodsmoke-200 bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-woodsmoke-950 placeholder:text-woodsmoke-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-woodsmoke-950 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:border-woodsmoke-800 dark:file:text-woodsmoke-50 dark:placeholder:text-woodsmoke-400 dark:focus-visible:ring-woodsmoke-300",r),ref:t,...s})});s.displayName="Input"},4043:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var a=r(1455),o=r.n(a),n=r(7801),s=r.n(n),l=r(2115);let i=()=>{let[e,t]=(0,l.useState)(!1),[r,a]=(0,l.useState)(void 0),[n,i]=(0,l.useState)(void 0),[d,c]=(0,l.useState)(!1),[u,m]=(0,l.useState)(!1),[p,f]=(0,l.useState)(!1),[h,g]=(0,l.useState)(void 0);return{data:r,loading:e,open:d,disabled:u,selected:n,show:p,error:h,setData:a,setLoading:t,setOpen:c,setDisabled:m,setSelected:i,setShow:f,trimString:function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:23;if(e)return e.length<=t?e:"".concat(e.slice(0,t),"...")},getDollars:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return e%1!=0?s()(e).format("$0,0.00"):s()(e).format("$0,0")},openUrl:e=>{e&&window.open(e,"_blank")},toDate:e=>o()(e.toString()).format("D MMMM YYYY"),setError:g}}},1712:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});let a=(0,r(5974).UU)("https://qijhglvyquvxciafqpns.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFpamhnbHZ5cXV2eGNpYWZxcG5zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA1NzQyMDgsImV4cCI6MjA1NjE1MDIwOH0.7OP-83Kwrm02SOvzy-rAsbk7w4uadFyy6MZ7cC2Tojk")},1567:(e,t,r)=>{"use strict";r.d(t,{cn:()=>n});var a=r(3463),o=r(9795);function n(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,o.QP)((0,a.$)(t))}},2032:()=>{}},e=>{var t=t=>e(e.s=t);e.O(0,[392,181,914,126,271,333,441,517,358],()=>t(743)),_N_E=e.O()}]);