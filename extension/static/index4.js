import{f as o,r,D as l,w as p,j as s,K as x}from"./index.js";import{D as h}from"./Dialog.js";import{f as d}from"./List.js";import{L as m}from"./ListItem.js";import"./Modal.js";const g=o.section`

`,u=o.div`
  width: 24px;
  height: 24px;
  border-radius: 10px;
  text-align: center;
  line-height: 24px;
  writing-mode: vertical-lr;
  cursor: pointer;
`,f=o.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  & > img.more_icon {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
`,D=[{icon:"/lock.svg",title:"锁定MetaMask",key:"lock"}],j={showDialog:!1},w=(i,t)=>({...i,...t}),k=()=>{const[i,t]=r.useReducer(w,j),{showDialog:n}=i,a=l(),c=p();return s.jsxs(g,{children:[s.jsx(u,{onClick:()=>{t({showDialog:!0})},children:"..."}),s.jsx(h,{onClose:()=>{t({showDialog:!1})},open:n,sx:{minWidth:{xs:300,md:300}},children:s.jsx(d,{sx:{pt:0},children:D.map(e=>s.jsx(m,{button:!0,onClick:()=>{t({showDialog:!1}),console.log("%c 777777 action is:","#0f0;",e),e.key==="lock"&&(c(x("")),a("/login"))},children:s.jsxs(f,{children:[s.jsx("img",{src:e.icon,alt:e.title,className:"more_icon"}),s.jsx("span",{children:e.title})]})},e.key))})})]})},W=r.memo(k);export{W as default};
