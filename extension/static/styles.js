import{j as c,g as _,a as S,s as f,_ as s,r as p,d as j,e as R,f as M,u as U,t as P,J as q,K as W,m as h}from"./index.js";import{u as E,c as O,r as k}from"./createSvgIcon2.js";import{c as H}from"./createSvgIcon.js";import{L as B}from"./List.js";const G=H(c.jsx("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");function J(t){return _("MuiAvatar",t)}S("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);const K=["alt","children","className","component","slots","slotProps","imgProps","sizes","src","srcSet","variant"],V=O(),X=t=>{const{classes:e,variant:o,colorDefault:a}=t;return M({root:["root",o,a&&"colorDefault"],img:["img"],fallback:["fallback"]},J,e)},Q=f("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:o}=t;return[e.root,e[o.variant],o.colorDefault&&e.colorDefault]}})(({theme:t})=>({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:t.typography.fontFamily,fontSize:t.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none",variants:[{props:{variant:"rounded"},style:{borderRadius:(t.vars||t).shape.borderRadius}},{props:{variant:"square"},style:{borderRadius:0}},{props:{colorDefault:!0},style:s({color:(t.vars||t).palette.background.default},t.vars?{backgroundColor:t.vars.palette.Avatar.defaultBg}:s({backgroundColor:t.palette.grey[400]},t.applyStyles("dark",{backgroundColor:t.palette.grey[600]})))}]})),Y=f("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(t,e)=>e.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),Z=f(G,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(t,e)=>e.fallback})({width:"75%",height:"75%"});function tt({crossOrigin:t,referrerPolicy:e,src:o,srcSet:a}){const[n,i]=p.useState(!1);return p.useEffect(()=>{if(!o&&!a)return;i(!1);let l=!0;const r=new Image;return r.onload=()=>{l&&i("loaded")},r.onerror=()=>{l&&i("error")},r.crossOrigin=t,r.referrerPolicy=e,r.src=o,a&&(r.srcset=a),()=>{l=!1}},[t,e,o,a]),n}const xt=p.forwardRef(function(e,o){const a=V({props:e,name:"MuiAvatar"}),{alt:n,children:i,className:l,component:r="div",slots:v={},slotProps:D={},imgProps:w,sizes:L,src:m,srcSet:g,variant:F="circular"}=a,$=j(a,K);let d=null;const N=tt(s({},w,{src:m,srcSet:g})),A=m||g,I=A&&N!=="error",u=s({},a,{colorDefault:!I,component:r,variant:F}),x=X(u),[T,z]=E("img",{className:x.img,elementType:Y,externalForwardedProps:{slots:v,slotProps:{img:s({},w,D.img)}},additionalProps:{alt:n,src:m,srcSet:g,sizes:L},ownerState:u});return I?d=c.jsx(T,s({},z)):i||i===0?d=i:A&&n?d=n[0]:d=c.jsx(Z,{ownerState:u,className:x.fallback}),c.jsx(Q,s({as:r,ownerState:u,className:R(x.root,l),ref:o},$,{children:d}))});function et(t){return _("MuiListItemAvatar",t)}S("MuiListItemAvatar",["root","alignItemsFlexStart"]);const ot=["className"],at=t=>{const{alignItems:e,classes:o}=t;return M({root:["root",e==="flex-start"&&"alignItemsFlexStart"]},et,o)},rt=f("div",{name:"MuiListItemAvatar",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:o}=t;return[e.root,o.alignItems==="flex-start"&&e.alignItemsFlexStart]}})(({ownerState:t})=>s({minWidth:56,flexShrink:0},t.alignItems==="flex-start"&&{marginTop:8})),ht=p.forwardRef(function(e,o){const a=U({props:e,name:"MuiListItemAvatar"}),{className:n}=a,i=j(a,ot),l=p.useContext(B),r=s({},a,{alignItems:l.alignItems}),v=at(r);return c.jsx(rt,s({className:R(v.root,n),ownerState:r,ref:o},i))});var y={},st=P;Object.defineProperty(y,"__esModule",{value:!0});var it=y.default=void 0,nt=st(k()),lt=c;it=y.default=(0,nt.default)((0,lt.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4"}),"Person");var b={},ct=P;Object.defineProperty(b,"__esModule",{value:!0});var dt=b.default=void 0,pt=ct(k()),ut=c;dt=b.default=(0,pt.default)((0,ut.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"}),"Add");const yt=q`
  fieldset.MuiOutlinedInput-notchedOutline {
    border: none;
  }
  div.MuiDialog-container > div.MuiPaper-root > h2.css-bdhsul-MuiTypography-root-MuiDialogTitle-root {
    position: sticky;
    top: 0;
    background-color: #fff;
    z-index: 1;
  }
`,C=W`
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
`,bt=h.section`
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
      ${C};
    }
  }
`,wt=h.div`
  width: 100%;
  div {
    display: flex;
    justify-content: space-between;
    &.account {

    }
    &.address {
      ${C};
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
`,At=h.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > svg {
    cursor: pointer;
  }
`;export{xt as A,At as D,ht as L,wt as S,dt as a,yt as b,bt as c,it as d};
