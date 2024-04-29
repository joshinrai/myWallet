import{r,j as o,y as a,f as i}from"./index.js";import{L as c,A as l,d as p,S as x,a as m,I as h,D as u,f as g}from"./styles.js";import{a as f}from"./List.js";import{L as d}from"./ListItem.js";import{L as j}from"./ListItemText.js";import{D as b}from"./Dialog.js";import"./ButtonBase.js";import"./createSvgIcon.js";import"./Typography.js";import"./useControlled.js";import"./Modal.js";import"./useSlotProps.js";const w=t=>{const{netWorkList:e,outerDispatch:s}=t;return o.jsxs(f,{sx:{pt:0},children:[e.map(n=>o.jsxs(d,{button:!0,onClick:()=>{console.log("点击item...")},children:[o.jsx(c,{children:o.jsx(l,{sx:{bgcolor:a[100],color:a[600]},children:o.jsx(p,{})})}),o.jsx(x,{children:o.jsx("div",{className:"account",children:o.jsx("span",{children:n.name})})})]},n.key)),o.jsxs(d,{autoFocus:!0,button:!0,onClick:()=>{console.log("%c 2222222 add account ...","color: #ff0;"),s({showAccountList:!1})},children:[o.jsx(c,{children:o.jsx(l,{children:o.jsx(m,{})})}),o.jsx(j,{primary:"添加网络"})]})]})},k=r.memo(w),L=i.div`
  & > button {
    margin-left: 0!important;
    padding: 0!important;
    width: 60px;
    height: 30px;
    border-radius: 15px;
  }
`,D=i.section`
  position: relative;
  width: 60px;
  height: 30px;
  border-radius: 15px;
  background-color: #000;
  display: flex;
  align-items: center;
  cursor: pointer;
  div.net_icon {
    margin-left: 10px;
    background-image: url('/ethereum.svg');
    width: 20px;
    height: 20px;
    border-radius: 10px;
  }
  div.drop_down {
    width: 8px;
    height: 8px;
    border: 1px solid #fff;
    border-top: none;
    border-left: none;
    transform: rotate(45deg);
    margin-left: 10px;
    margin-top: -4px;
  }
`,v=i.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > svg {
    cursor: pointer;
  }
`,y=[{icon:"",name:"Sepolia",key:"1"},{icon:"",name:"Linea Sepolia",key:"10086"}],W={showDialog:!1},C=(t,e)=>({...t,...e}),N=()=>{const[t,e]=r.useReducer(C,W),{showDialog:s}=t;return o.jsxs(L,{children:[o.jsx(h,{edge:"start",color:"inherit","aria-label":"menu",onClick:()=>{e({showDialog:!0}),console.log("%c 999999 添加网络...","color: #0f0;")},children:o.jsxs(D,{children:[o.jsx("div",{className:"net_icon"}),o.jsx("div",{className:"drop_down"})]})}),o.jsxs(b,{onClose:()=>{e({showDialog:!1})},open:s,sx:{minWidth:{xs:300,md:300}},children:[o.jsx(u,{children:o.jsxs(v,{children:["选择网络",o.jsx(g,{onClick:()=>{e({showDialog:!1})}})]})}),o.jsx(k,{netWorkList:y,outerDispatch:e})]})]})},G=r.memo(N);export{G as default};
