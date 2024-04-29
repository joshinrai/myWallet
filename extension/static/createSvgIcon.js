import{r as d,a as z,g as C,s as I,c as f,u as b,b as R,_ as g,j as S,d as w,e as T}from"./index.js";function U(o,e=166){let t;function l(...n){const i=()=>{o.apply(this,n)};clearTimeout(t),t=setTimeout(i,e)}return l.clear=()=>{clearTimeout(t)},l}function V({controlled:o,default:e,name:t,state:l="value"}){const{current:n}=d.useRef(o!==void 0),[i,p]=d.useState(e),r=n?o:i,m=d.useCallback(a=>{n||p(a)},[]);return[r,m]}function j(o){return z("MuiSvgIcon",o)}C("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const N=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],A=o=>{const{color:e,fontSize:t,classes:l}=o,n={root:["root",e!=="inherit"&&`color${f(e)}`,`fontSize${f(t)}`]};return T(n,j,l)},B=I("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[e.root,t.color!=="inherit"&&e[`color${f(t.color)}`],e[`fontSize${f(t.fontSize)}`]]}})(({theme:o,ownerState:e})=>{var t,l,n,i,p,r,m,a,h,c,u,v,s;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:e.hasSvgAsChild?void 0:"currentColor",flexShrink:0,transition:(t=o.transitions)==null||(l=t.create)==null?void 0:l.call(t,"fill",{duration:(n=o.transitions)==null||(n=n.duration)==null?void 0:n.shorter}),fontSize:{inherit:"inherit",small:((i=o.typography)==null||(p=i.pxToRem)==null?void 0:p.call(i,20))||"1.25rem",medium:((r=o.typography)==null||(m=r.pxToRem)==null?void 0:m.call(r,24))||"1.5rem",large:((a=o.typography)==null||(h=a.pxToRem)==null?void 0:h.call(a,35))||"2.1875rem"}[e.fontSize],color:(c=(u=(o.vars||o).palette)==null||(u=u[e.color])==null?void 0:u.main)!=null?c:{action:(v=(o.vars||o).palette)==null||(v=v.action)==null?void 0:v.active,disabled:(s=(o.vars||o).palette)==null||(s=s.action)==null?void 0:s.disabled,inherit:void 0}[e.color]}}),y=d.forwardRef(function(e,t){const l=b({props:e,name:"MuiSvgIcon"}),{children:n,className:i,color:p="inherit",component:r="svg",fontSize:m="medium",htmlColor:a,inheritViewBox:h=!1,titleAccess:c,viewBox:u="0 0 24 24"}=l,v=R(l,N),s=d.isValidElement(n)&&n.type==="svg",x=g({},l,{color:p,component:r,fontSize:m,instanceFontSize:e.fontSize,inheritViewBox:h,viewBox:u,hasSvgAsChild:s}),$={};h||($.viewBox=u);const _=A(x);return S.jsxs(B,g({as:r,className:w(_.root,i),focusable:"false",color:a,"aria-hidden":c?void 0:!0,role:c?"img":void 0,ref:t},$,v,s&&n.props,{ownerState:x,children:[s?n.props.children:n,c?S.jsx("title",{children:c}):null]}))});y.muiName="SvgIcon";function E(o,e){function t(l,n){return S.jsx(y,g({"data-testid":`${e}Icon`,ref:n},l,{children:o}))}return t.muiName=y.muiName,d.memo(d.forwardRef(t))}export{E as c,U as d,V as u};
