import{d as q,_ as g,r as c,j as M,$ as ve,g as ue,a as fe,s as J,u as pe,e as X,f as me}from"./index.js";import{r as ye,m as Pe,f as K,n as Re,c as j,u as oe,s as re,o as Q,b as se,i as Te,j as ie,a as ke,T as Se,q as Ce,g as ae}from"./List.js";function Ne(e){const t=e.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}const we=["elementType","externalSlotProps","ownerState","skipResolvingSlotProps"];function le(e){var t;const{elementType:o,externalSlotProps:n,ownerState:i,skipResolvingSlotProps:r=!1}=e,s=q(e,we),a=r?{}:ye(n,i),{props:d,internalRef:m}=Pe(g({},s,{externalSlotProps:a})),h=K(m,a==null?void 0:a.ref,(t=e.additionalProps)==null?void 0:t.ref);return Re(o,g({},d,{ref:h}),i)}const Ie=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'].join(",");function Me(e){const t=parseInt(e.getAttribute("tabindex")||"",10);return Number.isNaN(t)?e.contentEditable==="true"||(e.nodeName==="AUDIO"||e.nodeName==="VIDEO"||e.nodeName==="DETAILS")&&e.getAttribute("tabindex")===null?0:e.tabIndex:t}function Fe(e){if(e.tagName!=="INPUT"||e.type!=="radio"||!e.name)return!1;const t=n=>e.ownerDocument.querySelector(`input[type="radio"]${n}`);let o=t(`[name="${e.name}"]:checked`);return o||(o=t(`[name="${e.name}"]`)),o!==e}function Ae(e){return!(e.disabled||e.tagName==="INPUT"&&e.type==="hidden"||Fe(e))}function Be(e){const t=[],o=[];return Array.from(e.querySelectorAll(Ie)).forEach((n,i)=>{const r=Me(n);r===-1||!Ae(n)||(r===0?t.push(n):o.push({documentOrder:i,tabIndex:r,node:n}))}),o.sort((n,i)=>n.tabIndex===i.tabIndex?n.documentOrder-i.documentOrder:n.tabIndex-i.tabIndex).map(n=>n.node).concat(t)}function Oe(){return!0}function Le(e){const{children:t,disableAutoFocus:o=!1,disableEnforceFocus:n=!1,disableRestoreFocus:i=!1,getTabbable:r=Be,isEnabled:s=Oe,open:a}=e,d=c.useRef(!1),m=c.useRef(null),h=c.useRef(null),E=c.useRef(null),R=c.useRef(null),y=c.useRef(!1),u=c.useRef(null),F=K(t.ref,u),k=c.useRef(null);c.useEffect(()=>{!a||!u.current||(y.current=!o)},[o,a]),c.useEffect(()=>{if(!a||!u.current)return;const l=j(u.current);return u.current.contains(l.activeElement)||(u.current.hasAttribute("tabIndex")||u.current.setAttribute("tabIndex","-1"),y.current&&u.current.focus()),()=>{i||(E.current&&E.current.focus&&(d.current=!0,E.current.focus()),E.current=null)}},[a]),c.useEffect(()=>{if(!a||!u.current)return;const l=j(u.current),x=P=>{k.current=P,!(n||!s()||P.key!=="Tab")&&l.activeElement===u.current&&P.shiftKey&&(d.current=!0,h.current&&h.current.focus())},v=()=>{const P=u.current;if(P===null)return;if(!l.hasFocus()||!s()||d.current){d.current=!1;return}if(P.contains(l.activeElement)||n&&l.activeElement!==m.current&&l.activeElement!==h.current)return;if(l.activeElement!==R.current)R.current=null;else if(R.current!==null)return;if(!y.current)return;let N=[];if((l.activeElement===m.current||l.activeElement===h.current)&&(N=r(u.current)),N.length>0){var O,w;const D=!!((O=k.current)!=null&&O.shiftKey&&((w=k.current)==null?void 0:w.key)==="Tab"),L=N[0],A=N[N.length-1];typeof L!="string"&&typeof A!="string"&&(D?A.focus():L.focus())}else P.focus()};l.addEventListener("focusin",v),l.addEventListener("keydown",x,!0);const T=setInterval(()=>{l.activeElement&&l.activeElement.tagName==="BODY"&&v()},50);return()=>{clearInterval(T),l.removeEventListener("focusin",v),l.removeEventListener("keydown",x,!0)}},[o,n,i,s,a,r]);const S=l=>{E.current===null&&(E.current=l.relatedTarget),y.current=!0,R.current=l.target;const x=t.props.onFocus;x&&x(l)},C=l=>{E.current===null&&(E.current=l.relatedTarget),y.current=!0};return M.jsxs(c.Fragment,{children:[M.jsx("div",{tabIndex:a?0:-1,onFocus:C,ref:m,"data-testid":"sentinelStart"}),c.cloneElement(t,{ref:F,onFocus:S}),M.jsx("div",{tabIndex:a?0:-1,onFocus:C,ref:h,"data-testid":"sentinelEnd"})]})}function De(e){return typeof e=="function"?e():e}const je=c.forwardRef(function(t,o){const{children:n,container:i,disablePortal:r=!1}=t,[s,a]=c.useState(null),d=K(c.isValidElement(n)?n.ref:null,o);if(oe(()=>{r||a(De(i)||document.body)},[i,r]),oe(()=>{if(s&&!r)return re(o,s),()=>{re(o,null)}},[o,s,r]),r){if(c.isValidElement(n)){const m={ref:d};return c.cloneElement(n,m)}return M.jsx(c.Fragment,{children:n})}return M.jsx(c.Fragment,{children:s&&ve.createPortal(n,s)})});function $e(e){const t=j(e);return t.body===e?Q(e).innerWidth>t.documentElement.clientWidth:e.scrollHeight>e.clientHeight}function U(e,t){t?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function ce(e){return parseInt(Q(e).getComputedStyle(e).paddingRight,10)||0}function _e(e){const o=["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].indexOf(e.tagName)!==-1,n=e.tagName==="INPUT"&&e.getAttribute("type")==="hidden";return o||n}function de(e,t,o,n,i){const r=[t,o,...n];[].forEach.call(e.children,s=>{const a=r.indexOf(s)===-1,d=!_e(s);a&&d&&U(s,i)})}function G(e,t){let o=-1;return e.some((n,i)=>t(n)?(o=i,!0):!1),o}function He(e,t){const o=[],n=e.container;if(!t.disableScrollLock){if($e(n)){const s=Ne(j(n));o.push({value:n.style.paddingRight,property:"padding-right",el:n}),n.style.paddingRight=`${ce(n)+s}px`;const a=j(n).querySelectorAll(".mui-fixed");[].forEach.call(a,d=>{o.push({value:d.style.paddingRight,property:"padding-right",el:d}),d.style.paddingRight=`${ce(d)+s}px`})}let r;if(n.parentNode instanceof DocumentFragment)r=j(n).body;else{const s=n.parentElement,a=Q(n);r=(s==null?void 0:s.nodeName)==="HTML"&&a.getComputedStyle(s).overflowY==="scroll"?s:n}o.push({value:r.style.overflow,property:"overflow",el:r},{value:r.style.overflowX,property:"overflow-x",el:r},{value:r.style.overflowY,property:"overflow-y",el:r}),r.style.overflow="hidden"}return()=>{o.forEach(({value:r,el:s,property:a})=>{r?s.style.setProperty(a,r):s.style.removeProperty(a)})}}function Ue(e){const t=[];return[].forEach.call(e.children,o=>{o.getAttribute("aria-hidden")==="true"&&t.push(o)}),t}class Ke{constructor(){this.containers=void 0,this.modals=void 0,this.modals=[],this.containers=[]}add(t,o){let n=this.modals.indexOf(t);if(n!==-1)return n;n=this.modals.length,this.modals.push(t),t.modalRef&&U(t.modalRef,!1);const i=Ue(o);de(o,t.mount,t.modalRef,i,!0);const r=G(this.containers,s=>s.container===o);return r!==-1?(this.containers[r].modals.push(t),n):(this.containers.push({modals:[t],container:o,restore:null,hiddenSiblings:i}),n)}mount(t,o){const n=G(this.containers,r=>r.modals.indexOf(t)!==-1),i=this.containers[n];i.restore||(i.restore=He(i,o))}remove(t,o=!0){const n=this.modals.indexOf(t);if(n===-1)return n;const i=G(this.containers,s=>s.modals.indexOf(t)!==-1),r=this.containers[i];if(r.modals.splice(r.modals.indexOf(t),1),this.modals.splice(n,1),r.modals.length===0)r.restore&&r.restore(),t.modalRef&&U(t.modalRef,o),de(r.container,t.mount,t.modalRef,r.hiddenSiblings,!1),this.containers.splice(i,1);else{const s=r.modals[r.modals.length-1];s.modalRef&&U(s.modalRef,!1)}return n}isTopModal(t){return this.modals.length>0&&this.modals[this.modals.length-1]===t}}function We(e){return typeof e=="function"?e():e}function ze(e){return e?e.props.hasOwnProperty("in"):!1}const qe=new Ke;function Ye(e){const{container:t,disableEscapeKeyDown:o=!1,disableScrollLock:n=!1,manager:i=qe,closeAfterTransition:r=!1,onTransitionEnter:s,onTransitionExited:a,children:d,onClose:m,open:h,rootRef:E}=e,R=c.useRef({}),y=c.useRef(null),u=c.useRef(null),F=K(u,E),[k,S]=c.useState(!h),C=ze(d);let l=!0;(e["aria-hidden"]==="false"||e["aria-hidden"]===!1)&&(l=!1);const x=()=>j(y.current),v=()=>(R.current.modalRef=u.current,R.current.mount=y.current,R.current),T=()=>{i.mount(v(),{disableScrollLock:n}),u.current&&(u.current.scrollTop=0)},P=se(()=>{const f=We(t)||x().body;i.add(v(),f),u.current&&T()}),N=c.useCallback(()=>i.isTopModal(v()),[i]),O=se(f=>{y.current=f,f&&(h&&N()?T():u.current&&U(u.current,l))}),w=c.useCallback(()=>{i.remove(v(),l)},[l,i]);c.useEffect(()=>()=>{w()},[w]),c.useEffect(()=>{h?P():(!C||!r)&&w()},[h,w,C,r,P]);const D=f=>b=>{var B;(B=f.onKeyDown)==null||B.call(f,b),!(b.key!=="Escape"||b.which===229||!N())&&(o||(b.stopPropagation(),m&&m(b,"escapeKeyDown")))},L=f=>b=>{var B;(B=f.onClick)==null||B.call(f,b),b.target===b.currentTarget&&m&&m(b,"backdropClick")};return{getRootProps:(f={})=>{const b=Te(e);delete b.onTransitionEnter,delete b.onTransitionExited;const B=g({},b,f);return g({role:"presentation"},B,{onKeyDown:D(B),ref:F})},getBackdropProps:(f={})=>{const b=f;return g({"aria-hidden":!0},b,{onClick:L(b),open:h})},getTransitionProps:()=>{const f=()=>{S(!1),s&&s()},b=()=>{S(!0),a&&a(),r&&w()};return{onEnter:ie(f,d==null?void 0:d.props.onEnter),onExited:ie(b,d==null?void 0:d.props.onExited)}},rootRef:F,portalRef:O,isTopModal:N,exited:k,hasTransition:C}}const Ve=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],Ge={entering:{opacity:1},entered:{opacity:1}},Xe=c.forwardRef(function(t,o){const n=ke(),i={enter:n.transitions.duration.enteringScreen,exit:n.transitions.duration.leavingScreen},{addEndListener:r,appear:s=!0,children:a,easing:d,in:m,onEnter:h,onEntered:E,onEntering:R,onExit:y,onExited:u,onExiting:F,style:k,timeout:S=i,TransitionComponent:C=Se}=t,l=q(t,Ve),x=c.useRef(null),v=K(x,a.ref,o),T=p=>I=>{if(p){const f=x.current;I===void 0?p(f):p(f,I)}},P=T(R),N=T((p,I)=>{Ce(p);const f=ae({style:k,timeout:S,easing:d},{mode:"enter"});p.style.webkitTransition=n.transitions.create("opacity",f),p.style.transition=n.transitions.create("opacity",f),h&&h(p,I)}),O=T(E),w=T(F),D=T(p=>{const I=ae({style:k,timeout:S,easing:d},{mode:"exit"});p.style.webkitTransition=n.transitions.create("opacity",I),p.style.transition=n.transitions.create("opacity",I),y&&y(p)}),L=T(u),A=p=>{r&&r(x.current,p)};return M.jsx(C,g({appear:s,in:m,nodeRef:x,onEnter:N,onEntered:O,onEntering:P,onExit:D,onExited:L,onExiting:w,addEndListener:A,timeout:S},l,{children:(p,I)=>c.cloneElement(a,g({style:g({opacity:0,visibility:p==="exited"&&!m?"hidden":void 0},Ge[p],k,a.props.style),ref:v},I))}))});function Je(e){return ue("MuiBackdrop",e)}fe("MuiBackdrop",["root","invisible"]);const Qe=["children","className","component","components","componentsProps","invisible","open","slotProps","slots","TransitionComponent","transitionDuration"],Ze=e=>{const{classes:t,invisible:o}=e;return me({root:["root",o&&"invisible"]},Je,t)},et=J("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.invisible&&t.invisible]}})(({ownerState:e})=>g({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},e.invisible&&{backgroundColor:"transparent"})),tt=c.forwardRef(function(t,o){var n,i,r;const s=pe({props:t,name:"MuiBackdrop"}),{children:a,className:d,component:m="div",components:h={},componentsProps:E={},invisible:R=!1,open:y,slotProps:u={},slots:F={},TransitionComponent:k=Xe,transitionDuration:S}=s,C=q(s,Qe),l=g({},s,{component:m,invisible:R}),x=Ze(l),v=(n=u.root)!=null?n:E.root;return M.jsx(k,g({in:y,timeout:S},C,{children:M.jsx(et,g({"aria-hidden":!0},v,{as:(i=(r=F.root)!=null?r:h.Root)!=null?i:m,className:X(x.root,d,v==null?void 0:v.className),ownerState:g({},l,v==null?void 0:v.ownerState),classes:x,ref:o,children:a}))}))});function nt(e){return ue("MuiModal",e)}fe("MuiModal",["root","hidden","backdrop"]);const ot=["BackdropComponent","BackdropProps","classes","className","closeAfterTransition","children","container","component","components","componentsProps","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","onBackdropClick","onClose","onTransitionEnter","onTransitionExited","open","slotProps","slots","theme"],rt=e=>{const{open:t,exited:o,classes:n}=e;return me({root:["root",!t&&o&&"hidden"],backdrop:["backdrop"]},nt,n)},st=J("div",{name:"MuiModal",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,!o.open&&o.exited&&t.hidden]}})(({theme:e,ownerState:t})=>g({position:"fixed",zIndex:(e.vars||e).zIndex.modal,right:0,bottom:0,top:0,left:0},!t.open&&t.exited&&{visibility:"hidden"})),it=J(tt,{name:"MuiModal",slot:"Backdrop",overridesResolver:(e,t)=>t.backdrop})({zIndex:-1}),ct=c.forwardRef(function(t,o){var n,i,r,s,a,d;const m=pe({name:"MuiModal",props:t}),{BackdropComponent:h=it,BackdropProps:E,className:R,closeAfterTransition:y=!1,children:u,container:F,component:k,components:S={},componentsProps:C={},disableAutoFocus:l=!1,disableEnforceFocus:x=!1,disableEscapeKeyDown:v=!1,disablePortal:T=!1,disableRestoreFocus:P=!1,disableScrollLock:N=!1,hideBackdrop:O=!1,keepMounted:w=!1,onBackdropClick:D,open:L,slotProps:A,slots:p}=m,I=q(m,ot),f=g({},m,{closeAfterTransition:y,disableAutoFocus:l,disableEnforceFocus:x,disableEscapeKeyDown:v,disablePortal:T,disableRestoreFocus:P,disableScrollLock:N,hideBackdrop:O,keepMounted:w}),{getRootProps:b,getBackdropProps:B,getTransitionProps:he,portalRef:be,isTopModal:ge,exited:Z,hasTransition:ee}=Ye(g({},f,{rootRef:o})),H=g({},f,{exited:Z}),$=rt(H),W={};if(u.props.tabIndex===void 0&&(W.tabIndex="-1"),ee){const{onEnter:_,onExited:z}=he();W.onEnter=_,W.onExited=z}const te=(n=(i=p==null?void 0:p.root)!=null?i:S.Root)!=null?n:st,ne=(r=(s=p==null?void 0:p.backdrop)!=null?s:S.Backdrop)!=null?r:h,Y=(a=A==null?void 0:A.root)!=null?a:C.root,V=(d=A==null?void 0:A.backdrop)!=null?d:C.backdrop,Ee=le({elementType:te,externalSlotProps:Y,externalForwardedProps:I,getSlotProps:b,additionalProps:{ref:o,as:k},ownerState:H,className:X(R,Y==null?void 0:Y.className,$==null?void 0:$.root,!H.open&&H.exited&&($==null?void 0:$.hidden))}),xe=le({elementType:ne,externalSlotProps:V,additionalProps:E,getSlotProps:_=>B(g({},_,{onClick:z=>{D&&D(z),_!=null&&_.onClick&&_.onClick(z)}})),className:X(V==null?void 0:V.className,E==null?void 0:E.className,$==null?void 0:$.backdrop),ownerState:H});return!w&&!L&&(!ee||Z)?null:M.jsx(je,{ref:be,container:F,disablePortal:T,children:M.jsxs(te,g({},Ee,{children:[!O&&h?M.jsx(ne,g({},xe)):null,M.jsx(Le,{disableEnforceFocus:x,disableAutoFocus:l,disableRestoreFocus:P,isEnabled:ge,open:L,children:c.cloneElement(u,W)})]}))})});export{tt as B,Xe as F,ct as M,Ne as g,le as u};
