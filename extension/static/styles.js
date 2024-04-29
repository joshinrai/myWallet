import{g as y,b as I,s as g,e as v,a as i,m as L,r as u,u as M,_ as R,j as c,c as C,d as _,k as j,A as E,C as W,f as w}from"./index.js";import{B as H}from"./ButtonBase.js";import{u as G,c as V,r as z}from"./ListItemText.js";import{c as X}from"./createSvgIcon.js";import{a as J}from"./Dialog.js";import{T as K}from"./Typography.js";import{L as Q}from"./List.js";function Y(t){return I("MuiIconButton",t)}const Z=y("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),tt=["edge","children","className","color","disabled","disableFocusRipple","size"],et=t=>{const{classes:e,disabled:o,color:a,edge:n,size:r}=t,l={root:["root",o&&"disabled",a!=="default"&&`color${v(a)}`,n&&`edge${v(n)}`,`size${v(r)}`]};return _(l,Y,e)},ot=g(H,{name:"MuiIconButton",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:o}=t;return[e.root,o.color!=="default"&&e[`color${v(o.color)}`],o.edge&&e[`edge${v(o.edge)}`],e[`size${v(o.size)}`]]}})(({theme:t,ownerState:e})=>i({textAlign:"center",flex:"0 0 auto",fontSize:t.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(t.vars||t).palette.action.active,transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest})},!e.disableRipple&&{"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette.action.activeChannel} / ${t.vars.palette.action.hoverOpacity})`:L(t.palette.action.active,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},e.edge==="start"&&{marginLeft:e.size==="small"?-3:-12},e.edge==="end"&&{marginRight:e.size==="small"?-3:-12}),({theme:t,ownerState:e})=>{var o;const a=(o=(t.vars||t).palette)==null?void 0:o[e.color];return i({},e.color==="inherit"&&{color:"inherit"},e.color!=="inherit"&&e.color!=="default"&&i({color:a==null?void 0:a.main},!e.disableRipple&&{"&:hover":i({},a&&{backgroundColor:t.vars?`rgba(${a.mainChannel} / ${t.vars.palette.action.hoverOpacity})`:L(a.main,t.palette.action.hoverOpacity)},{"@media (hover: none)":{backgroundColor:"transparent"}})}),e.size==="small"&&{padding:5,fontSize:t.typography.pxToRem(18)},e.size==="large"&&{padding:12,fontSize:t.typography.pxToRem(28)},{[`&.${Z.disabled}`]:{backgroundColor:"transparent",color:(t.vars||t).palette.action.disabled}})}),Ft=u.forwardRef(function(e,o){const a=M({props:e,name:"MuiIconButton"}),{edge:n=!1,children:r,className:l,color:s="default",disabled:d=!1,disableFocusRipple:p=!1,size:h="medium"}=a,A=R(a,tt),f=i({},a,{edge:n,color:s,disabled:d,disableFocusRipple:p,size:h}),m=et(f);return c.jsx(ot,i({className:C(m.root,l),centerRipple:!0,focusRipple:!p,disabled:d,ref:o},A,{ownerState:f,children:r}))}),at=X(c.jsx("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");function rt(t){return I("MuiAvatar",t)}y("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);const st=["alt","children","className","component","slots","slotProps","imgProps","sizes","src","srcSet","variant"],it=V(),nt=t=>{const{classes:e,variant:o,colorDefault:a}=t;return _({root:["root",o,a&&"colorDefault"],img:["img"],fallback:["fallback"]},rt,e)},lt=g("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:o}=t;return[e.root,e[o.variant],o.colorDefault&&e.colorDefault]}})(({theme:t})=>({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:t.typography.fontFamily,fontSize:t.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none",variants:[{props:{variant:"rounded"},style:{borderRadius:(t.vars||t).shape.borderRadius}},{props:{variant:"square"},style:{borderRadius:0}},{props:{colorDefault:!0},style:i({color:(t.vars||t).palette.background.default},t.vars?{backgroundColor:t.vars.palette.Avatar.defaultBg}:i({backgroundColor:t.palette.grey[400]},t.applyStyles("dark",{backgroundColor:t.palette.grey[600]})))}]})),ct=g("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(t,e)=>e.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),dt=g(at,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(t,e)=>e.fallback})({width:"75%",height:"75%"});function ut({crossOrigin:t,referrerPolicy:e,src:o,srcSet:a}){const[n,r]=u.useState(!1);return u.useEffect(()=>{if(!o&&!a)return;r(!1);let l=!0;const s=new Image;return s.onload=()=>{l&&r("loaded")},s.onerror=()=>{l&&r("error")},s.crossOrigin=t,s.referrerPolicy=e,s.src=o,a&&(s.srcset=a),()=>{l=!1}},[t,e,o,a]),n}const Ut=u.forwardRef(function(e,o){const a=it({props:e,name:"MuiAvatar"}),{alt:n,children:r,className:l,component:s="div",slots:d={},slotProps:p={},imgProps:h,sizes:A,src:f,srcSet:m,variant:B="circular"}=a,F=R(a,st);let x=null;const U=ut(i({},h,{src:f,srcSet:m})),P=f||m,T=P&&U!=="error",b=i({},a,{colorDefault:!T,component:s,variant:B}),$=nt(b),[O,q]=G("img",{className:$.img,elementType:ct,externalForwardedProps:{slots:d,slotProps:{img:i({},h,p.img)}},additionalProps:{alt:n,src:f,srcSet:m,sizes:A},ownerState:b});return T?x=c.jsx(O,i({},q)):r||r===0?x=r:P&&n?x=n[0]:x=c.jsx(dt,{ownerState:b,className:$.fallback}),c.jsx(lt,i({as:s,ownerState:b,className:C($.root,l),ref:o},F,{children:x}))});function pt(t){return I("MuiDialogTitle",t)}y("MuiDialogTitle",["root"]);const ft=["className","id"],vt=t=>{const{classes:e}=t;return _({root:["root"]},pt,e)},gt=g(K,{name:"MuiDialogTitle",slot:"Root",overridesResolver:(t,e)=>e.root})({padding:"16px 24px",flex:"0 0 auto"}),Ot=u.forwardRef(function(e,o){const a=M({props:e,name:"MuiDialogTitle"}),{className:n,id:r}=a,l=R(a,ft),s=a,d=vt(s),{titleId:p=r}=u.useContext(J);return c.jsx(gt,i({component:"h2",className:C(d.root,n),ownerState:s,ref:o,variant:"h6",id:r??p},l))});function mt(t){return I("MuiListItemAvatar",t)}y("MuiListItemAvatar",["root","alignItemsFlexStart"]);const xt=["className"],ht=t=>{const{alignItems:e,classes:o}=t;return _({root:["root",e==="flex-start"&&"alignItemsFlexStart"]},mt,o)},bt=g("div",{name:"MuiListItemAvatar",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:o}=t;return[e.root,o.alignItems==="flex-start"&&e.alignItemsFlexStart]}})(({ownerState:t})=>i({minWidth:56,flexShrink:0},t.alignItems==="flex-start"&&{marginTop:8})),qt=u.forwardRef(function(e,o){const a=M({props:e,name:"MuiListItemAvatar"}),{className:n}=a,r=R(a,xt),l=u.useContext(Q),s=i({},a,{alignItems:l.alignItems}),d=ht(s);return c.jsx(bt,i({className:C(d.root,n),ownerState:s,ref:o},r))});var k={},yt=j;Object.defineProperty(k,"__esModule",{value:!0});var It=k.default=void 0,Rt=yt(z()),Ct=c;It=k.default=(0,Rt.default)((0,Ct.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");var S={},_t=j;Object.defineProperty(S,"__esModule",{value:!0});var At=S.default=void 0,$t=_t(z()),Mt=c;At=S.default=(0,$t.default)((0,Mt.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4"}),"Person");var D={},jt=j;Object.defineProperty(D,"__esModule",{value:!0});var wt=D.default=void 0,zt=jt(z()),kt=c;wt=D.default=(0,zt.default)((0,kt.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"}),"Add");const Et=E`
  fieldset.MuiOutlinedInput-notchedOutline {
    border: none;
  }
`,N=W`
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
`,Wt=w.section`
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
      ${N};
    }
  }
`,Ht=w.div`
  width: 100%;
  div {
    display: flex;
    justify-content: space-between;
    &.account {

    }
    &.address {
      ${N};
    }
  }
`,Gt=w.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > svg {
    cursor: pointer;
  }
`;export{Ut as A,Ot as D,Ft as I,qt as L,Ht as S,wt as a,Et as b,Wt as c,At as d,Gt as e,It as f};
