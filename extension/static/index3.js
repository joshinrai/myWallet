import{r,j as e,y as a,f as i}from"./index.js";import{D as p,d as x}from"./Close.js";import{L as c,A as l,d as m,S as h,a as u,I as g}from"./styles.js";import{f}from"./List.js";import{L as d}from"./ListItem.js";import{L as j}from"./ListItemText.js";import{D as b}from"./Dialog.js";import"./createSvgIcon2.js";import"./createSvgIcon.js";import"./Modal.js";const w=t=>{const{netWorkList:o,outerDispatch:s}=t;return e.jsxs(f,{sx:{pt:0},children:[o.map(n=>e.jsxs(d,{button:!0,onClick:()=>{console.log("点击item...")},children:[e.jsx(c,{children:e.jsx(l,{sx:{bgcolor:a[100],color:a[600]},children:e.jsx(m,{})})}),e.jsx(h,{children:e.jsx("div",{className:"account",children:e.jsx("span",{children:n.name})})})]},n.key)),e.jsxs(d,{autoFocus:!0,button:!0,onClick:()=>{console.log("%c 2222222 add account ...","color: #ff0;"),s({showAccountList:!1})},children:[e.jsx(c,{children:e.jsx(l,{children:e.jsx(u,{})})}),e.jsx(j,{primary:"添加网络"})]})]})},k=r.memo(w),L=i.div`
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
`,y=[{icon:"",name:"Sepolia",key:"1"},{icon:"",name:"Linea Sepolia",key:"10086"}],W={showDialog:!1},C=(t,o)=>({...t,...o}),N=()=>{const[t,o]=r.useReducer(C,W),{showDialog:s}=t;return e.jsxs(L,{children:[e.jsx(g,{edge:"start",color:"inherit","aria-label":"menu",onClick:()=>{o({showDialog:!0}),console.log("%c 999999 添加网络...","color: #0f0;")},children:e.jsxs(D,{children:[e.jsx("div",{className:"net_icon"}),e.jsx("div",{className:"drop_down"})]})}),e.jsxs(b,{onClose:()=>{o({showDialog:!1})},open:s,sx:{minWidth:{xs:300,md:300}},children:[e.jsx(p,{children:e.jsxs(v,{children:["选择网络",e.jsx(x,{onClick:()=>{o({showDialog:!1})}})]})}),e.jsx(k,{netWorkList:y,outerDispatch:o})]})]})},q=r.memo(N);export{q as default};
