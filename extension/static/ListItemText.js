import{a as C,g as P,s as v,_ as i,r as g,u as j,d as N,j as d,e as R,f as M}from"./index.js";import{L as U}from"./List.js";import{T as p}from"./createSvgIcon2.js";function _(s){return P("MuiListItemText",s)}const h=C("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]),k=["children","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"],B=s=>{const{classes:e,inset:r,primary:a,secondary:y,dense:c}=s;return M({root:["root",r&&"inset",c&&"dense",a&&y&&"multiline"],primary:["primary"],secondary:["secondary"]},_,e)},E=v("div",{name:"MuiListItemText",slot:"Root",overridesResolver:(s,e)=>{const{ownerState:r}=s;return[{[`& .${h.primary}`]:e.primary},{[`& .${h.secondary}`]:e.secondary},e.root,r.inset&&e.inset,r.primary&&r.secondary&&e.multiline,r.dense&&e.dense]}})(({ownerState:s})=>i({flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},s.primary&&s.secondary&&{marginTop:6,marginBottom:6},s.inset&&{paddingLeft:56})),q=g.forwardRef(function(e,r){const a=j({props:e,name:"MuiListItemText"}),{children:y,className:c,disableTypography:n=!1,inset:f=!1,primary:u,primaryTypographyProps:l,secondary:L,secondaryTypographyProps:I}=a,b=N(a,k),{dense:x}=g.useContext(U);let t=u??y,o=L;const T=i({},a,{disableTypography:n,inset:f,primary:!!t,secondary:!!o,dense:x}),m=B(T);return t!=null&&t.type!==p&&!n&&(t=d.jsx(p,i({variant:x?"body2":"body1",className:m.primary,component:l!=null&&l.variant?void 0:"span",display:"block"},l,{children:t}))),o!=null&&o.type!==p&&!n&&(o=d.jsx(p,i({variant:"body2",className:m.secondary,color:"text.secondary",display:"block"},I,{children:o}))),d.jsxs(E,i({className:R(m.root,c),ownerState:T,ref:r},b,{children:[t,o]}))});export{q as L,h as l};
