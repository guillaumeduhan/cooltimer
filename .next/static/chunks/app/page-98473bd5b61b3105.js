(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{148:(e,t,r)=>{Promise.resolve().then(r.bind(r,2320))},2320:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var o=r(5155),n=r(3312),l=r(8223);let s=()=>{let{time:e,isRunning:t,start:r,pause:s,save:i,reset:a,formatTime:d}=(0,l.L)();return(0,o.jsxs)("div",{className:"flex items-center justify-center gap-8 flex-col w-full",style:{minHeight:"calc(100vh - 80px)"},children:[(0,o.jsxs)("div",{className:"grid items-center gap-4 w-full text-center",children:[(0,o.jsx)("div",{className:"".concat(t?"bg-gradient-to-tr from-red-400 via-red-500 to-red-600 ":"bg-gradient-to-br from-woodsmoke-300 to-woodsmoke-600"," \n          flex items-center justify-center max-w-40 max-h-40 w-full h-full rounded-full cursor-pointer hover:scale-105 duration-300 transition mx-auto"),onClick:t?s:r,children:(0,o.jsxs)("div",{className:"min-w-40 min-h-40 relative flex items-center justify-center group",children:[t&&(0,o.jsx)("div",{className:"z-10 absolute rounded-full w-32 h-32 bg-red-500 ping"}),(0,o.jsx)("div",{className:"z-50",children:t?(0,o.jsx)("svg",{className:"group-hover:scale-85 transition duration-300 text-white",xmlns:"http://www.w3.org/2000/svg",width:"128",height:"128",viewBox:"0 0 24 24",children:(0,o.jsx)("path",{fill:"currentColor",d:"M6 19h4V5H6zm8-14v14h4V5z"})}):(0,o.jsx)("svg",{className:"group-hover:scale-110 transition duration-300 text-white",xmlns:"http://www.w3.org/2000/svg",width:"128",height:"128",viewBox:"0 0 24 24",children:(0,o.jsx)("path",{fill:"currentColor",d:"M8 17.175V6.825q0-.425.3-.713t.7-.287q.125 0 .263.037t.262.113l8.15 5.175q.225.15.338.375t.112.475t-.112.475t-.338.375l-8.15 5.175q-.125.075-.262.113T9 18.175q-.4 0-.7-.288t-.3-.712"})})})]})}),(0,o.jsx)("div",{className:"mx-auto",children:d(e,!0)}),(0,o.jsx)("div",{className:"relative w-full h-1 max-w-[500px] w-full bg-gradient-to-r mx-auto from-woodsmoke-200 to-woodsmoke-300 dark:from-woodsmoke-900 dark:to-woodsmoke-900/20 overflow-hidden",children:t?(0,o.jsx)("div",{className:"w-full bg-gradient-to-r from-transparent dark:via-red-800 dark:via-red-600 dark:to-red-200 h-1 via-red-100 via-red-300 to-red-500 slide-right"}):""})]}),(0,o.jsxs)("div",{className:"flex gap-2 items-center",children:[(0,o.jsx)(n.$,{variant:"outline",disabled:t,onClick:()=>i(),children:"Save"}),(0,o.jsx)(n.$,{variant:"outline",disabled:t,onClick:()=>a(),children:"Reset"})]})]})},i=()=>(0,o.jsx)(s,{});function a(){return(0,o.jsx)("div",{children:(0,o.jsx)(i,{})})}},8223:(e,t,r)=>{"use strict";r.d(t,{TimerProvider:()=>a,L:()=>i});var o=r(5155);let n="cooltimer-records";var l=r(2115);let s=(0,l.createContext)(void 0),i=()=>{let e=(0,l.useContext)(s);if(!e)throw Error("useTimer must be used within TimerProvider");return e},a=e=>{let{children:t}=e,[r,i]=(0,l.useState)(!1),[a,d]=(0,l.useState)(""),[c,u]=(0,l.useState)(0),m=(0,l.useRef)(0),v=(0,l.useRef)(null),h=(0,l.useRef)(null),f=(0,l.useCallback)(()=>{r||(i(!0),document.title="Recording...",h.current=Date.now()-m.current,v.current=window.setInterval(()=>{u((Date.now()-(h.current||Date.now()))/1e3)},10))},[r]),x=(0,l.useCallback)(()=>{r&&null!==v.current&&(document.title="Stopped ✋",clearInterval(v.current),v.current=null,i(!1),m.current=Date.now()-(h.current||Date.now()))},[r]),w=(0,l.useCallback)(()=>{x(),u(0),document.title="Cooltimer.app | Smart Time Tracking",m.current=0},[x]),g=(0,l.useCallback)(()=>{null!==v.current&&(clearInterval(v.current),v.current=null),i(!1);let e={id:Date.now().toString(),time:c,timestamp:new Date},t=JSON.parse(localStorage.getItem(n)||"[]");t.push(e),localStorage.setItem(n,JSON.stringify(t)),u(0),m.current=0},[c,a]),k=(0,l.useCallback)((e,t)=>{let r=Math.floor(e/3600),o=Math.floor(e%3600/60).toString().padStart(r>0?2:1,"0");return p({h:r,m:o,s:Math.floor(e%60).toString().padStart(2,"0"),ms:Math.floor(100*e%100).toString().padStart(2,"0"),grow:t})},[]),p=e=>{let{h:t,m:r,s:n,ms:l,grow:s}=e;return(0,o.jsxs)("div",{className:"relative flex items-end ".concat(s?"min-h-[24px] text-[80px]":"text-[32px]"),children:[(0,o.jsxs)("div",{className:"flex items-center",children:[t>0&&(0,o.jsxs)("div",{className:"flex items-center",children:[(0,o.jsx)("div",{children:t}),(0,o.jsx)("div",{children:":"})]}),(0,o.jsx)("div",{children:r}),(0,o.jsx)("div",{children:":"}),(0,o.jsx)("div",{children:n}),(0,o.jsx)("div",{children:","})]}),(0,o.jsx)("div",{className:"".concat(s?"text-[32px] bottom-6":""," min-w-[42px] text-left text-woodsmoke-500 relative"),children:(0,o.jsx)("span",{children:l})})]})};return(0,o.jsx)(s.Provider,{value:{time:c,isRunning:r,start:f,reset:w,save:g,pause:x,formatTime:k,getTimeFormat:p},children:t})}},3312:(e,t,r)=>{"use strict";r.d(t,{$:()=>d});var o=r(5155),n=r(2317),l=r(1027),s=r(2115),i=r(1567);let a=(0,l.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-woodsmoke-950 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:focus-visible:ring-woodsmoke-300",{variants:{variant:{default:"bg-woodsmoke-900 text-woodsmoke-50 shadow hover:bg-woodsmoke-900/90 dark:bg-woodsmoke-50 dark:text-woodsmoke-900 dark:hover:bg-woodsmoke-50/90",destructive:"bg-red-500 text-woodsmoke-50 shadow-sm hover:bg-red-500/90 dark:bg-red-900 dark:text-woodsmoke-50 dark:hover:bg-red-900/90",outline:"border border-woodsmoke-200 bg-white shadow-sm hover:bg-woodsmoke-100 hover:text-woodsmoke-900 dark:border-woodsmoke-800 dark:bg-woodsmoke-950 dark:hover:bg-woodsmoke-800 dark:hover:text-woodsmoke-50",secondary:"bg-woodsmoke-100 text-woodsmoke-900 shadow-sm hover:bg-woodsmoke-100/80 dark:bg-woodsmoke-800 dark:text-woodsmoke-50 dark:hover:bg-woodsmoke-800/80",ghost:"hover:bg-woodsmoke-100 hover:text-woodsmoke-900 dark:hover:bg-woodsmoke-800 dark:hover:text-woodsmoke-50",link:"text-woodsmoke-900 underline-offset-4 hover:underline dark:text-woodsmoke-50"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),d=s.forwardRef((e,t)=>{let{className:r,variant:l,size:s,asChild:d=!1,...c}=e,u=d?n.DX:"button";return(0,o.jsx)(u,{className:(0,i.cn)(a({variant:l,size:s,className:r})),ref:t,...c})});d.displayName="Button"},1567:(e,t,r)=>{"use strict";r.d(t,{cn:()=>l});var o=r(3463),n=r(9795);function l(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.QP)((0,o.$)(t))}},8068:(e,t,r)=>{"use strict";r.d(t,{s:()=>s,t:()=>l});var o=r(2115);function n(e,t){if("function"==typeof e)return e(t);null!=e&&(e.current=t)}function l(...e){return t=>{let r=!1,o=e.map(e=>{let o=n(e,t);return r||"function"!=typeof o||(r=!0),o});if(r)return()=>{for(let t=0;t<o.length;t++){let r=o[t];"function"==typeof r?r():n(e[t],null)}}}}function s(...e){return o.useCallback(l(...e),e)}},2317:(e,t,r)=>{"use strict";r.d(t,{DX:()=>s});var o=r(2115),n=r(8068),l=r(5155),s=o.forwardRef((e,t)=>{let{children:r,...n}=e,s=o.Children.toArray(r),a=s.find(d);if(a){let e=a.props.children,r=s.map(t=>t!==a?t:o.Children.count(e)>1?o.Children.only(null):o.isValidElement(e)?e.props.children:null);return(0,l.jsx)(i,{...n,ref:t,children:o.isValidElement(e)?o.cloneElement(e,void 0,r):null})}return(0,l.jsx)(i,{...n,ref:t,children:r})});s.displayName="Slot";var i=o.forwardRef((e,t)=>{let{children:r,...l}=e;if(o.isValidElement(r)){let e=function(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,r=t&&"isReactWarning"in t&&t.isReactWarning;return r?e.ref:(r=(t=Object.getOwnPropertyDescriptor(e,"ref")?.get)&&"isReactWarning"in t&&t.isReactWarning)?e.props.ref:e.props.ref||e.ref}(r),s=function(e,t){let r={...t};for(let o in t){let n=e[o],l=t[o];/^on[A-Z]/.test(o)?n&&l?r[o]=(...e)=>{l(...e),n(...e)}:n&&(r[o]=n):"style"===o?r[o]={...n,...l}:"className"===o&&(r[o]=[n,l].filter(Boolean).join(" "))}return{...e,...r}}(l,r.props);return r.type!==o.Fragment&&(s.ref=t?(0,n.t)(t,e):e),o.cloneElement(r,s)}return o.Children.count(r)>1?o.Children.only(null):null});i.displayName="SlotClone";var a=({children:e})=>(0,l.jsx)(l.Fragment,{children:e});function d(e){return o.isValidElement(e)&&e.type===a}},1027:(e,t,r)=>{"use strict";r.d(t,{F:()=>s});var o=r(3463);let n=e=>"boolean"==typeof e?`${e}`:0===e?"0":e,l=o.$,s=(e,t)=>r=>{var o;if((null==t?void 0:t.variants)==null)return l(e,null==r?void 0:r.class,null==r?void 0:r.className);let{variants:s,defaultVariants:i}=t,a=Object.keys(s).map(e=>{let t=null==r?void 0:r[e],o=null==i?void 0:i[e];if(null===t)return null;let l=n(t)||n(o);return s[e][l]}),d=r&&Object.entries(r).reduce((e,t)=>{let[r,o]=t;return void 0===o||(e[r]=o),e},{});return l(e,a,null==t?void 0:null===(o=t.compoundVariants)||void 0===o?void 0:o.reduce((e,t)=>{let{class:r,className:o,...n}=t;return Object.entries(n).every(e=>{let[t,r]=e;return Array.isArray(r)?r.includes({...i,...d}[t]):({...i,...d})[t]===r})?[...e,r,o]:e},[]),null==r?void 0:r.class,null==r?void 0:r.className)}}},e=>{var t=t=>e(e.s=t);e.O(0,[181,441,517,358],()=>t(148)),_N_E=e.O()}]);