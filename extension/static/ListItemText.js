import{D as M,e as $,u as E,_ as x,a,E as k,g as U,b as q,s as W,r as w,j as b,c as z,d as B}from"./index.js";import{c as D,o as G,s as A,u as V,b as H,e as j,g as J,r as K,m as Q,h as X}from"./ButtonBase.js";import{c as Y,d as Z}from"./createSvgIcon.js";import{c as ee,i as oe,u as te,L as re}from"./List.js";import{u as se}from"./useControlled.js";import{T as P}from"./Typography.js";function ne(e,o){return()=>null}function ae(e,o){return()=>null}function ie(e,o,t,n,i){return null}const ce={configure:e=>{M.configure(e)}},le=Object.freeze(Object.defineProperty({__proto__:null,capitalize:$,createChainedFunction:ee,createSvgIcon:Y,debounce:Z,deprecatedPropType:ne,isMuiElement:oe,ownerDocument:D,ownerWindow:G,requirePropFactory:ae,setRef:A,unstable_ClassNameGenerator:ce,unstable_useEnhancedEffect:V,unstable_useId:te,unsupportedProp:ie,useControlled:se,useEventCallback:H,useForkRef:j,useIsFocusVisible:J},Symbol.toStringTag,{value:"Module"}));function Ce(e){return E}const pe=["className","elementType","ownerState","externalForwardedProps","getSlotOwnerState","internalForwardedProps"],de=["component","slots","slotProps"],ue=["component"];function Ie(e,o){const{className:t,elementType:n,ownerState:i,externalForwardedProps:l,getSlotOwnerState:c,internalForwardedProps:f}=o,g=x(o,pe),{component:p,slots:d={[e]:void 0},slotProps:T={[e]:void 0}}=l,h=x(l,de),u=d[e]||n,r=K(T[e],i),s=Q(a({className:t},g,{externalForwardedProps:e==="root"?h:void 0,externalSlotProps:r})),{props:{component:m},internalRef:y}=s,S=x(s.props,ue),F=j(y,r==null?void 0:r.ref,o.ref),C=c?c(S):{},O=a({},i,C),I=e==="root"?m||p:m,_=X(u,a({},e==="root"&&!p&&!d[e]&&f,e!=="root"&&!d[e]&&f,S,I&&{as:I},{ref:F}),O);return Object.keys(C).forEach(R=>{delete _[R]}),[u,_]}var v={};const me=k(le);var L;function _e(){return L||(L=1,function(e){"use client";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return o.createSvgIcon}});var o=me}(v)),v}function ye(e){return q("MuiListItemText",e)}const N=U("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]),fe=["children","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"],ge=e=>{const{classes:o,inset:t,primary:n,secondary:i,dense:l}=e;return B({root:["root",t&&"inset",l&&"dense",n&&i&&"multiline"],primary:["primary"],secondary:["secondary"]},ye,o)},Pe=W("div",{name:"MuiListItemText",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[{[`& .${N.primary}`]:o.primary},{[`& .${N.secondary}`]:o.secondary},o.root,t.inset&&o.inset,t.primary&&t.secondary&&o.multiline,t.dense&&o.dense]}})(({ownerState:e})=>a({flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},e.primary&&e.secondary&&{marginTop:6,marginBottom:6},e.inset&&{paddingLeft:56})),we=w.forwardRef(function(o,t){const n=E({props:o,name:"MuiListItemText"}),{children:i,className:l,disableTypography:c=!1,inset:f=!1,primary:g,primaryTypographyProps:p,secondary:d,secondaryTypographyProps:T}=n,h=x(n,fe),{dense:u}=w.useContext(re);let r=g??i,s=d;const m=a({},n,{disableTypography:c,inset:f,primary:!!r,secondary:!!s,dense:u}),y=ge(m);return r!=null&&r.type!==P&&!c&&(r=b.jsx(P,a({variant:u?"body2":"body1",className:y.primary,component:p!=null&&p.variant?void 0:"span",display:"block"},p,{children:r}))),s!=null&&s.type!==P&&!c&&(s=b.jsx(P,a({variant:"body2",className:y.secondary,color:"text.secondary",display:"block"},T,{children:s}))),b.jsxs(Pe,a({className:z(y.root,l),ownerState:m,ref:t},h,{children:[r,s]}))});export{we as L,Ce as c,_e as r,Ie as u};