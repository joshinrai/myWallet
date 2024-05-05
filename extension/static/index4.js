import{m as o,r,E as l,x as p,j as e,O as x}from"./index.js";import{D as h}from"./Dialog.js";import{h as m}from"./List.js";import{L as d}from"./ListItem.js";import"./Modal.js";const g=o.section`

`,u=o.div`
  width: 24px;
  height: 24px;
  border-radius: 10px;
  text-align: center;
  line-height: 24px;
  writing-mode: vertical-lr;
  cursor: pointer;
`,D=o.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  & > img.more_icon {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
`,f=[{icon:"/lock.svg",title:"锁定MetaMask",key:"lock"}],j={showDialog:!1},k=(i,s)=>({...i,...s}),w=()=>{const[i,s]=r.useReducer(k,j),{showDialog:n}=i,a=l(),c=p();return e.jsxs(g,{children:[e.jsx(u,{onClick:()=>{s({showDialog:!0})},children:"..."}),e.jsx(h,{onClose:()=>{s({showDialog:!1})},open:n,sx:{minWidth:{xs:300,md:300}},children:e.jsx(m,{sx:{pt:0},children:f.map(t=>e.jsx(d,{button:!0,onClick:()=>{s({showDialog:!1}),t.key==="lock"&&(c(x("")),a("/login"))},children:e.jsxs(D,{children:[e.jsx("img",{src:t.icon,alt:t.title,className:"more_icon"}),e.jsx("span",{children:t.title})]})},t.key))})})]})},E=r.memo(w);export{E as default};
