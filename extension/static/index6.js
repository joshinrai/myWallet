import{f as h,r as n,W as c,s as m,z as i,G as v,j as r}from"./index.js";import{B as j,T as b,t as w}from"./throttle.js";import"./ButtonBase.js";import"./List.js";import"./react-is.production.min.js";import"./index7.js";import"./Modal.js";import"./useSlotProps.js";import"./createSvgIcon.js";import"./useControlled.js";const y=h.section`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #242424;
  display: flex;
  justify-content: center;
  align-items: center;
  & > div.login_content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;let u;var d,p;try{const e="https://sepolia.infura.io/v3/a3453ce2d0e040cc81ccac2a44ece1a1",t=new c(new c.providers.HttpProvider(`${e}`));console.log("%c 111111111 web3Instance.modules is:","color: #0f0;",t.modules,t),u=(p=(d=t==null?void 0:t.eth)==null?void 0:d.accounts)==null?void 0:p.wallet}catch(e){console.log("err 1 is:","color: #f00;",e,"请安装钱包")}const T=m(j)(({theme:e})=>({width:"300px",height:"50px",marginTop:"10px",borderRadius:"25px",color:e.palette.getContrastText(i[500]),backgroundColor:i[500],"&:hover":{backgroundColor:i[700]}})),C={fieldError:!1,helperText:""},E=(e,t)=>({...e,...t}),k=()=>{const e=n.useRef(null),[t,a]=n.useReducer(E,C),{fieldError:x,helperText:f}=t,g=v();return r.jsx(y,{children:r.jsxs("div",{className:"login_content",children:[r.jsx("img",{src:"/wallet.svg",alt:"我的钱包"}),r.jsx("h2",{children:"欢迎回来！"}),r.jsx("h4",{children:"即将进入去中心化钱包！"}),r.jsx(b,{inputRef:e,id:"login_field",label:"密码",variant:"filled",type:"password",error:x,helperText:f,onChange:w(l=>{var s;const o=(s=l==null?void 0:l.target)==null?void 0:s.value;a({fieldError:!o,helperText:o?"":"请输入密码！"})},200),sx:{width:"300px",background:"#f0f0f0",borderRadius:"5px"}}),r.jsx(T,{variant:"contained",onClick:async()=>{var l;try{const o=(l=e==null?void 0:e.current)==null?void 0:l.value,s=await u.load(o);console.log("%c 8888888 登录 成功 ...","color: #0f0;",o,s),g("/")}catch(o){console.log("error is:","color: #f00;",o),a({fieldError:!0,helperText:"密码不正确！"})}},children:"登录"})]})})},I=n.memo(k);export{I as default};
