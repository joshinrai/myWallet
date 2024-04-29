import{g as R,a as w,s as m,c as u,_ as r,l as P,r as f,u as S,b as A,j as c,d as _,e as C,m as L,F as q,G as E,f as k}from"./index.js";import{B as W,L as G}from"./List.js";import{u as H,c as V}from"./ListItemText.js";import{c as X}from"./createSvgIcon.js";import{r as D}from"./createSvgIcon2.js";function J(t){return w("MuiIconButton",t)}const K=R("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),Q=["edge","children","className","color","disabled","disableFocusRipple","size"],Y=t=>{const{classes:e,disabled:o,color:a,edge:i,size:n}=t,l={root:["root",o&&"disabled",a!=="default"&&`color${u(a)}`,i&&`edge${u(i)}`,`size${u(n)}`]};return C(l,J,e)},Z=m(W,{name:"MuiIconButton",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:o}=t;return[e.root,o.color!=="default"&&e[`color${u(o.color)}`],o.edge&&e[`edge${u(o.edge)}`],e[`size${u(o.size)}`]]}})(({theme:t,ownerState:e})=>r({textAlign:"center",flex:"0 0 auto",fontSize:t.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(t.vars||t).palette.action.active,transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest})},!e.disableRipple&&{"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette.action.activeChannel} / ${t.vars.palette.action.hoverOpacity})`:P(t.palette.action.active,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},e.edge==="start"&&{marginLeft:e.size==="small"?-3:-12},e.edge==="end"&&{marginRight:e.size==="small"?-3:-12}),({theme:t,ownerState:e})=>{var o;const a=(o=(t.vars||t).palette)==null?void 0:o[e.color];return r({},e.color==="inherit"&&{color:"inherit"},e.color!=="inherit"&&e.color!=="default"&&r({color:a==null?void 0:a.main},!e.disableRipple&&{"&:hover":r({},a&&{backgroundColor:t.vars?`rgba(${a.mainChannel} / ${t.vars.palette.action.hoverOpacity})`:P(a.main,t.palette.action.hoverOpacity)},{"@media (hover: none)":{backgroundColor:"transparent"}})}),e.size==="small"&&{padding:5,fontSize:t.typography.pxToRem(18)},e.size==="large"&&{padding:12,fontSize:t.typography.pxToRem(28)},{[`&.${K.disabled}`]:{backgroundColor:"transparent",color:(t.vars||t).palette.action.disabled}})}),Ct=f.forwardRef(function(e,o){const a=S({props:e,name:"MuiIconButton"}),{edge:i=!1,children:n,className:l,color:s="default",disabled:d=!1,disableFocusRipple:x=!1,size:h="medium"}=a,y=A(a,Q),p=r({},a,{edge:i,color:s,disabled:d,disableFocusRipple:x,size:h}),v=Y(p);return c.jsx(Z,r({className:_(v.root,l),centerRipple:!0,focusRipple:!x,disabled:d,ref:o},y,{ownerState:p,children:n}))}),tt=X(c.jsx("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");function et(t){return w("MuiAvatar",t)}R("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);const ot=["alt","children","className","component","slots","slotProps","imgProps","sizes","src","srcSet","variant"],at=V(),rt=t=>{const{classes:e,variant:o,colorDefault:a}=t;return C({root:["root",o,a&&"colorDefault"],img:["img"],fallback:["fallback"]},et,e)},st=m("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:o}=t;return[e.root,e[o.variant],o.colorDefault&&e.colorDefault]}})(({theme:t})=>({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:t.typography.fontFamily,fontSize:t.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none",variants:[{props:{variant:"rounded"},style:{borderRadius:(t.vars||t).shape.borderRadius}},{props:{variant:"square"},style:{borderRadius:0}},{props:{colorDefault:!0},style:r({color:(t.vars||t).palette.background.default},t.vars?{backgroundColor:t.vars.palette.Avatar.defaultBg}:r({backgroundColor:t.palette.grey[400]},t.applyStyles("dark",{backgroundColor:t.palette.grey[600]})))}]})),it=m("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(t,e)=>e.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),nt=m(tt,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(t,e)=>e.fallback})({width:"75%",height:"75%"});function lt({crossOrigin:t,referrerPolicy:e,src:o,srcSet:a}){const[i,n]=f.useState(!1);return f.useEffect(()=>{if(!o&&!a)return;n(!1);let l=!0;const s=new Image;return s.onload=()=>{l&&n("loaded")},s.onerror=()=>{l&&n("error")},s.crossOrigin=t,s.referrerPolicy=e,s.src=o,a&&(s.srcset=a),()=>{l=!1}},[t,e,o,a]),i}const kt=f.forwardRef(function(e,o){const a=at({props:e,name:"MuiAvatar"}),{alt:i,children:n,className:l,component:s="div",slots:d={},slotProps:x={},imgProps:h,sizes:y,src:p,srcSet:v,variant:F="circular"}=a,N=A(a,ot);let g=null;const T=lt(r({},h,{src:p,srcSet:v})),$=p||v,j=$&&T!=="error",b=r({},a,{colorDefault:!j,component:s,variant:F}),I=rt(b),[U,O]=H("img",{className:I.img,elementType:it,externalForwardedProps:{slots:d,slotProps:{img:r({},h,x.img)}},additionalProps:{alt:i,src:p,srcSet:v,sizes:y},ownerState:b});return j?g=c.jsx(U,r({},O)):n||n===0?g=n:$&&i?g=i[0]:g=c.jsx(nt,{ownerState:b,className:I.fallback}),c.jsx(st,r({as:s,ownerState:b,className:_(I.root,l),ref:o},N,{children:g}))});function ct(t){return w("MuiListItemAvatar",t)}R("MuiListItemAvatar",["root","alignItemsFlexStart"]);const dt=["className"],pt=t=>{const{alignItems:e,classes:o}=t;return C({root:["root",e==="flex-start"&&"alignItemsFlexStart"]},ct,o)},ut=m("div",{name:"MuiListItemAvatar",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:o}=t;return[e.root,o.alignItems==="flex-start"&&e.alignItemsFlexStart]}})(({ownerState:t})=>r({minWidth:56,flexShrink:0},t.alignItems==="flex-start"&&{marginTop:8})),Mt=f.forwardRef(function(e,o){const a=S({props:e,name:"MuiListItemAvatar"}),{className:i}=a,n=A(a,dt),l=f.useContext(G),s=r({},a,{alignItems:l.alignItems}),d=pt(s);return c.jsx(ut,r({className:_(d.root,i),ownerState:s,ref:o},n))});var M={},ft=L;Object.defineProperty(M,"__esModule",{value:!0});var vt=M.default=void 0,gt=ft(D()),mt=c;vt=M.default=(0,gt.default)((0,mt.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4"}),"Person");var z={},xt=L;Object.defineProperty(z,"__esModule",{value:!0});var ht=z.default=void 0,bt=xt(D()),yt=c;ht=z.default=(0,bt.default)((0,yt.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"}),"Add");const zt=q`
  fieldset.MuiOutlinedInput-notchedOutline {
    border: none;
  }
  div.MuiDialog-container > div.MuiPaper-root > h2.css-bdhsul-MuiTypography-root-MuiDialogTitle-root {
    position: sticky;
    top: 0;
    background-color: #fff;
    z-index: 1;
  }
`,B=E`
  & > section.text_wrapper {
    position: relative;
    // width: 200px;
    & > span.public_key {
      width: 50%;
      display: block;
      text-align: justify;
      overflow: hidden;
      white-space: normal;
      text-overflow: ellipsis;
      &::after {
        position: absolute;
        right: 0;
        top: 0;
        content: attr(title);
        width: 50%;
        float: right;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        direction: rtl;
        transform: translateX(-15px);
      }
    }
  }
`,$t=k.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div {
    cursor: pointer;
    &.top_wrapper {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      & > img.crypto_account {
        width: 20px;
        height: 20px;
        margin-right: 10px;
      }
      & > div.expand_more {
        width: 10px;
        height: 10px;
        border: 1px solid #fff;
        border-top: none;
        border-left: none;
        transform: rotate(45deg);
        margin-top: -5px;
        margin-left: 10px;
      }
    }
    &.bottom_wrapper {
      ${B};
    }
  }
`,jt=k.div`
  width: 100%;
  div {
    display: flex;
    justify-content: space-between;
    &.account {

    }
    &.address {
      ${B};
      & > section.account_balance {
        margin-left: 10px;
        display: flex;
        align-items: center;
        & > span.account_count {
          display: inline-block;
          max-width: 80px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          font-weight: 600;
        }
        & > span.balance_unit {
          margin-left: 5px;
        }
      }
    }
  }
`,Pt=k.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > svg {
    cursor: pointer;
  }
`;export{kt as A,Pt as D,Ct as I,Mt as L,jt as S,ht as a,zt as b,$t as c,vt as d};
