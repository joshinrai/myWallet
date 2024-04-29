import{r as l,j as w,U as ve,a as v,_ as X,b as ue,g as fe,s as J,u as pe,c as G,d as me}from"./index.js";import{e as z,c as j,u as oe,s as re,o as Q,b as se,f as ye,a as Re}from"./ButtonBase.js";import{c as ie,T as Te,r as Pe,g as ae}from"./List.js";import{u as le}from"./useSlotProps.js";function ke(e){const t=e.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}const Ce=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'].join(",");function Se(e){const t=parseInt(e.getAttribute("tabindex")||"",10);return Number.isNaN(t)?e.contentEditable==="true"||(e.nodeName==="AUDIO"||e.nodeName==="VIDEO"||e.nodeName==="DETAILS")&&e.getAttribute("tabindex")===null?0:e.tabIndex:t}function Ne(e){if(e.tagName!=="INPUT"||e.type!=="radio"||!e.name)return!1;const t=n=>e.ownerDocument.querySelector(`input[type="radio"]${n}`);let o=t(`[name="${e.name}"]:checked`);return o||(o=t(`[name="${e.name}"]`)),o!==e}function Ie(e){return!(e.disabled||e.tagName==="INPUT"&&e.type==="hidden"||Ne(e))}function Me(e){const t=[],o=[];return Array.from(e.querySelectorAll(Ce)).forEach((n,i)=>{const r=Se(n);r===-1||!Ie(n)||(r===0?t.push(n):o.push({documentOrder:i,tabIndex:r,node:n}))}),o.sort((n,i)=>n.tabIndex===i.tabIndex?n.documentOrder-i.documentOrder:n.tabIndex-i.tabIndex).map(n=>n.node).concat(t)}function we(){return!0}function Fe(e){const{children:t,disableAutoFocus:o=!1,disableEnforceFocus:n=!1,disableRestoreFocus:i=!1,getTabbable:r=Me,isEnabled:s=we,open:c}=e,u=l.useRef(!1),h=l.useRef(null),b=l.useRef(null),g=l.useRef(null),T=l.useRef(null),y=l.useRef(!1),d=l.useRef(null),F=z(t.ref,d),k=l.useRef(null);l.useEffect(()=>{!c||!d.current||(y.current=!o)},[o,c]),l.useEffect(()=>{if(!c||!d.current)return;const a=j(d.current);return d.current.contains(a.activeElement)||(d.current.hasAttribute("tabIndex")||d.current.setAttribute("tabIndex","-1"),y.current&&d.current.focus()),()=>{i||(g.current&&g.current.focus&&(u.current=!0,g.current.focus()),g.current=null)}},[c]),l.useEffect(()=>{if(!c||!d.current)return;const a=j(d.current),E=R=>{k.current=R,!(n||!s()||R.key!=="Tab")&&a.activeElement===d.current&&R.shiftKey&&(u.current=!0,b.current&&b.current.focus())},x=()=>{const R=d.current;if(R===null)return;if(!a.hasFocus()||!s()||u.current){u.current=!1;return}if(R.contains(a.activeElement)||n&&a.activeElement!==h.current&&a.activeElement!==b.current)return;if(a.activeElement!==T.current)T.current=null;else if(T.current!==null)return;if(!y.current)return;let N=[];if((a.activeElement===h.current||a.activeElement===b.current)&&(N=r(d.current)),N.length>0){var O,I;const D=!!((O=k.current)!=null&&O.shiftKey&&((I=k.current)==null?void 0:I.key)==="Tab"),L=N[0],A=N[N.length-1];typeof L!="string"&&typeof A!="string"&&(D?A.focus():L.focus())}else R.focus()};a.addEventListener("focusin",x),a.addEventListener("keydown",E,!0);const P=setInterval(()=>{a.activeElement&&a.activeElement.tagName==="BODY"&&x()},50);return()=>{clearInterval(P),a.removeEventListener("focusin",x),a.removeEventListener("keydown",E,!0)}},[o,n,i,s,c,r]);const C=a=>{g.current===null&&(g.current=a.relatedTarget),y.current=!0,T.current=a.target;const E=t.props.onFocus;E&&E(a)},S=a=>{g.current===null&&(g.current=a.relatedTarget),y.current=!0};return w.jsxs(l.Fragment,{children:[w.jsx("div",{tabIndex:c?0:-1,onFocus:S,ref:h,"data-testid":"sentinelStart"}),l.cloneElement(t,{ref:F,onFocus:C}),w.jsx("div",{tabIndex:c?0:-1,onFocus:S,ref:b,"data-testid":"sentinelEnd"})]})}function Ae(e){return typeof e=="function"?e():e}const Be=l.forwardRef(function(t,o){const{children:n,container:i,disablePortal:r=!1}=t,[s,c]=l.useState(null),u=z(l.isValidElement(n)?n.ref:null,o);if(oe(()=>{r||c(Ae(i)||document.body)},[i,r]),oe(()=>{if(s&&!r)return re(o,s),()=>{re(o,null)}},[o,s,r]),r){if(l.isValidElement(n)){const h={ref:u};return l.cloneElement(n,h)}return w.jsx(l.Fragment,{children:n})}return w.jsx(l.Fragment,{children:s&&ve.createPortal(n,s)})});function Oe(e){const t=j(e);return t.body===e?Q(e).innerWidth>t.documentElement.clientWidth:e.scrollHeight>e.clientHeight}function U(e,t){t?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function ce(e){return parseInt(Q(e).getComputedStyle(e).paddingRight,10)||0}function Le(e){const o=["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].indexOf(e.tagName)!==-1,n=e.tagName==="INPUT"&&e.getAttribute("type")==="hidden";return o||n}function de(e,t,o,n,i){const r=[t,o,...n];[].forEach.call(e.children,s=>{const c=r.indexOf(s)===-1,u=!Le(s);c&&u&&U(s,i)})}function V(e,t){let o=-1;return e.some((n,i)=>t(n)?(o=i,!0):!1),o}function De(e,t){const o=[],n=e.container;if(!t.disableScrollLock){if(Oe(n)){const s=ke(j(n));o.push({value:n.style.paddingRight,property:"padding-right",el:n}),n.style.paddingRight=`${ce(n)+s}px`;const c=j(n).querySelectorAll(".mui-fixed");[].forEach.call(c,u=>{o.push({value:u.style.paddingRight,property:"padding-right",el:u}),u.style.paddingRight=`${ce(u)+s}px`})}let r;if(n.parentNode instanceof DocumentFragment)r=j(n).body;else{const s=n.parentElement,c=Q(n);r=(s==null?void 0:s.nodeName)==="HTML"&&c.getComputedStyle(s).overflowY==="scroll"?s:n}o.push({value:r.style.overflow,property:"overflow",el:r},{value:r.style.overflowX,property:"overflow-x",el:r},{value:r.style.overflowY,property:"overflow-y",el:r}),r.style.overflow="hidden"}return()=>{o.forEach(({value:r,el:s,property:c})=>{r?s.style.setProperty(c,r):s.style.removeProperty(c)})}}function je(e){const t=[];return[].forEach.call(e.children,o=>{o.getAttribute("aria-hidden")==="true"&&t.push(o)}),t}class He{constructor(){this.containers=void 0,this.modals=void 0,this.modals=[],this.containers=[]}add(t,o){let n=this.modals.indexOf(t);if(n!==-1)return n;n=this.modals.length,this.modals.push(t),t.modalRef&&U(t.modalRef,!1);const i=je(o);de(o,t.mount,t.modalRef,i,!0);const r=V(this.containers,s=>s.container===o);return r!==-1?(this.containers[r].modals.push(t),n):(this.containers.push({modals:[t],container:o,restore:null,hiddenSiblings:i}),n)}mount(t,o){const n=V(this.containers,r=>r.modals.indexOf(t)!==-1),i=this.containers[n];i.restore||(i.restore=De(i,o))}remove(t,o=!0){const n=this.modals.indexOf(t);if(n===-1)return n;const i=V(this.containers,s=>s.modals.indexOf(t)!==-1),r=this.containers[i];if(r.modals.splice(r.modals.indexOf(t),1),this.modals.splice(n,1),r.modals.length===0)r.restore&&r.restore(),t.modalRef&&U(t.modalRef,o),de(r.container,t.mount,t.modalRef,r.hiddenSiblings,!1),this.containers.splice(i,1);else{const s=r.modals[r.modals.length-1];s.modalRef&&U(s.modalRef,!1)}return n}isTopModal(t){return this.modals.length>0&&this.modals[this.modals.length-1]===t}}function _e(e){return typeof e=="function"?e():e}function $e(e){return e?e.props.hasOwnProperty("in"):!1}const Ue=new He;function Ke(e){const{container:t,disableEscapeKeyDown:o=!1,disableScrollLock:n=!1,manager:i=Ue,closeAfterTransition:r=!1,onTransitionEnter:s,onTransitionExited:c,children:u,onClose:h,open:b,rootRef:g}=e,T=l.useRef({}),y=l.useRef(null),d=l.useRef(null),F=z(d,g),[k,C]=l.useState(!b),S=$e(u);let a=!0;(e["aria-hidden"]==="false"||e["aria-hidden"]===!1)&&(a=!1);const E=()=>j(y.current),x=()=>(T.current.modalRef=d.current,T.current.mount=y.current,T.current),P=()=>{i.mount(x(),{disableScrollLock:n}),d.current&&(d.current.scrollTop=0)},R=se(()=>{const f=_e(t)||E().body;i.add(x(),f),d.current&&P()}),N=l.useCallback(()=>i.isTopModal(x()),[i]),O=se(f=>{y.current=f,f&&(b&&N()?P():d.current&&U(d.current,a))}),I=l.useCallback(()=>{i.remove(x(),a)},[a,i]);l.useEffect(()=>()=>{I()},[I]),l.useEffect(()=>{b?R():(!S||!r)&&I()},[b,I,S,r,R]);const D=f=>m=>{var B;(B=f.onKeyDown)==null||B.call(f,m),!(m.key!=="Escape"||m.which===229||!N())&&(o||(m.stopPropagation(),h&&h(m,"escapeKeyDown")))},L=f=>m=>{var B;(B=f.onClick)==null||B.call(f,m),m.target===m.currentTarget&&h&&h(m,"backdropClick")};return{getRootProps:(f={})=>{const m=ye(e);delete m.onTransitionEnter,delete m.onTransitionExited;const B=v({},m,f);return v({role:"presentation"},B,{onKeyDown:D(B),ref:F})},getBackdropProps:(f={})=>{const m=f;return v({"aria-hidden":!0},m,{onClick:L(m),open:b})},getTransitionProps:()=>{const f=()=>{C(!1),s&&s()},m=()=>{C(!0),c&&c(),r&&I()};return{onEnter:ie(f,u==null?void 0:u.props.onEnter),onExited:ie(m,u==null?void 0:u.props.onExited)}},rootRef:F,portalRef:O,isTopModal:N,exited:k,hasTransition:S}}const We=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],ze={entering:{opacity:1},entered:{opacity:1}},Ye=l.forwardRef(function(t,o){const n=Re(),i={enter:n.transitions.duration.enteringScreen,exit:n.transitions.duration.leavingScreen},{addEndListener:r,appear:s=!0,children:c,easing:u,in:h,onEnter:b,onEntered:g,onEntering:T,onExit:y,onExited:d,onExiting:F,style:k,timeout:C=i,TransitionComponent:S=Te}=t,a=X(t,We),E=l.useRef(null),x=z(E,c.ref,o),P=p=>M=>{if(p){const f=E.current;M===void 0?p(f):p(f,M)}},R=P(T),N=P((p,M)=>{Pe(p);const f=ae({style:k,timeout:C,easing:u},{mode:"enter"});p.style.webkitTransition=n.transitions.create("opacity",f),p.style.transition=n.transitions.create("opacity",f),b&&b(p,M)}),O=P(g),I=P(F),D=P(p=>{const M=ae({style:k,timeout:C,easing:u},{mode:"exit"});p.style.webkitTransition=n.transitions.create("opacity",M),p.style.transition=n.transitions.create("opacity",M),y&&y(p)}),L=P(d),A=p=>{r&&r(E.current,p)};return w.jsx(S,v({appear:s,in:h,nodeRef:E,onEnter:N,onEntered:O,onEntering:R,onExit:D,onExited:L,onExiting:I,addEndListener:A,timeout:C},a,{children:(p,M)=>l.cloneElement(c,v({style:v({opacity:0,visibility:p==="exited"&&!h?"hidden":void 0},ze[p],k,c.props.style),ref:x},M))}))});function qe(e){return ue("MuiBackdrop",e)}fe("MuiBackdrop",["root","invisible"]);const Ve=["children","className","component","components","componentsProps","invisible","open","slotProps","slots","TransitionComponent","transitionDuration"],Ge=e=>{const{classes:t,invisible:o}=e;return me({root:["root",o&&"invisible"]},qe,t)},Xe=J("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.invisible&&t.invisible]}})(({ownerState:e})=>v({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},e.invisible&&{backgroundColor:"transparent"})),Je=l.forwardRef(function(t,o){var n,i,r;const s=pe({props:t,name:"MuiBackdrop"}),{children:c,className:u,component:h="div",components:b={},componentsProps:g={},invisible:T=!1,open:y,slotProps:d={},slots:F={},TransitionComponent:k=Ye,transitionDuration:C}=s,S=X(s,Ve),a=v({},s,{component:h,invisible:T}),E=Ge(a),x=(n=d.root)!=null?n:g.root;return w.jsx(k,v({in:y,timeout:C},S,{children:w.jsx(Xe,v({"aria-hidden":!0},x,{as:(i=(r=F.root)!=null?r:b.Root)!=null?i:h,className:G(E.root,u,x==null?void 0:x.className),ownerState:v({},a,x==null?void 0:x.ownerState),classes:E,ref:o,children:c}))}))});function Qe(e){return ue("MuiModal",e)}fe("MuiModal",["root","hidden","backdrop"]);const Ze=["BackdropComponent","BackdropProps","classes","className","closeAfterTransition","children","container","component","components","componentsProps","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","onBackdropClick","onClose","onTransitionEnter","onTransitionExited","open","slotProps","slots","theme"],et=e=>{const{open:t,exited:o,classes:n}=e;return me({root:["root",!t&&o&&"hidden"],backdrop:["backdrop"]},Qe,n)},tt=J("div",{name:"MuiModal",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,!o.open&&o.exited&&t.hidden]}})(({theme:e,ownerState:t})=>v({position:"fixed",zIndex:(e.vars||e).zIndex.modal,right:0,bottom:0,top:0,left:0},!t.open&&t.exited&&{visibility:"hidden"})),nt=J(Je,{name:"MuiModal",slot:"Backdrop",overridesResolver:(e,t)=>t.backdrop})({zIndex:-1}),at=l.forwardRef(function(t,o){var n,i,r,s,c,u;const h=pe({name:"MuiModal",props:t}),{BackdropComponent:b=nt,BackdropProps:g,className:T,closeAfterTransition:y=!1,children:d,container:F,component:k,components:C={},componentsProps:S={},disableAutoFocus:a=!1,disableEnforceFocus:E=!1,disableEscapeKeyDown:x=!1,disablePortal:P=!1,disableRestoreFocus:R=!1,disableScrollLock:N=!1,hideBackdrop:O=!1,keepMounted:I=!1,onBackdropClick:D,open:L,slotProps:A,slots:p}=h,M=X(h,Ze),f=v({},h,{closeAfterTransition:y,disableAutoFocus:a,disableEnforceFocus:E,disableEscapeKeyDown:x,disablePortal:P,disableRestoreFocus:R,disableScrollLock:N,hideBackdrop:O,keepMounted:I}),{getRootProps:m,getBackdropProps:B,getTransitionProps:he,portalRef:be,isTopModal:ge,exited:Z,hasTransition:ee}=Ke(v({},f,{rootRef:o})),$=v({},f,{exited:Z}),H=et($),K={};if(d.props.tabIndex===void 0&&(K.tabIndex="-1"),ee){const{onEnter:_,onExited:W}=he();K.onEnter=_,K.onExited=W}const te=(n=(i=p==null?void 0:p.root)!=null?i:C.Root)!=null?n:tt,ne=(r=(s=p==null?void 0:p.backdrop)!=null?s:C.Backdrop)!=null?r:b,Y=(c=A==null?void 0:A.root)!=null?c:S.root,q=(u=A==null?void 0:A.backdrop)!=null?u:S.backdrop,Ee=le({elementType:te,externalSlotProps:Y,externalForwardedProps:M,getSlotProps:m,additionalProps:{ref:o,as:k},ownerState:$,className:G(T,Y==null?void 0:Y.className,H==null?void 0:H.root,!$.open&&$.exited&&(H==null?void 0:H.hidden))}),xe=le({elementType:ne,externalSlotProps:q,additionalProps:g,getSlotProps:_=>B(v({},_,{onClick:W=>{D&&D(W),_!=null&&_.onClick&&_.onClick(W)}})),className:G(q==null?void 0:q.className,g==null?void 0:g.className,H==null?void 0:H.backdrop),ownerState:$});return!I&&!L&&(!ee||Z)?null:w.jsx(Be,{ref:be,container:F,disablePortal:P,children:w.jsxs(te,v({},Ee,{children:[!O&&b?w.jsx(ne,v({},xe)):null,w.jsx(Fe,{disableEnforceFocus:E,disableAutoFocus:a,disableRestoreFocus:R,isEnabled:ge,open:L,children:l.cloneElement(d,K)})]}))})});export{Je as B,Ye as F,at as M,ke as g};
