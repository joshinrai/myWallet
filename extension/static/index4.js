import{f as o,r,G as a,j as e}from"./index.js";import{D as c}from"./Dialog.js";import{a as p}from"./List.js";import{L as m}from"./ListItem.js";import"./ButtonBase.js";import"./Modal.js";import"./useSlotProps.js";const x=o.section`

`,h=o.div`
  width: 24px;
  height: 24px;
  border-radius: 10px;
  text-align: center;
  line-height: 24px;
  writing-mode: vertical-lr;
  cursor: pointer;
`,d=o.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  & > img.more_icon {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
`,g=[{icon:"/wireless.svg",title:"已连接的网站",key:"link"},{icon:"/lock.svg",title:"锁定MetaMask",key:"lock"}],u={showDialog:!1},f=(s,i)=>({...s,...i}),j=()=>{const[s,i]=r.useReducer(f,u),{showDialog:n}=s,l=a();return e.jsxs(x,{children:[e.jsx(h,{onClick:()=>{i({showDialog:!0})},children:"..."}),e.jsx(c,{onClose:()=>{i({showDialog:!1})},open:n,sx:{minWidth:{xs:300,md:300}},children:e.jsx(p,{sx:{pt:0},children:g.map(t=>e.jsx(m,{button:!0,onClick:()=>{i({showDialog:!1}),console.log("%c 777777 action is:","#0f0;",t),l("/login")},children:e.jsxs(d,{children:[e.jsx("img",{src:t.icon,alt:t.title,className:"more_icon"}),e.jsx("span",{children:t.title})]})},t.key))})})]})},C=r.memo(j);export{C as default};
