import{f as m,r as i,W as n,s as v,A as a,D as w,w as j,j as o,K as b}from"./index.js";import{B as y,T,t as C}from"./throttle.js";import"./List.js";import"./react-is.production.min.js";import"./Modal.js";import"./createSvgIcon.js";const E=m.section`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  min-width: 400px;
  min-height: 600px;
  background-color: #242424;
  display: flex;
  justify-content: center;
  align-items: center;
  & > div.login_content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;let u;var d,p;try{const e="https://sepolia.infura.io/v3/a3453ce2d0e040cc81ccac2a44ece1a1",t=new n(new n.providers.HttpProvider(`${e}`));console.log("%c 111111111 web3Instance.modules is:","color: #0f0;",t.modules,t),u=(p=(d=t==null?void 0:t.eth)==null?void 0:d.accounts)==null?void 0:p.wallet}catch(e){console.log("err 1 is:","color: #f00;",e,"请安装钱包")}const W=v(y)(({theme:e})=>({width:"300px",height:"50px",marginTop:"10px",borderRadius:"25px",color:e.palette.getContrastText(a[500]),backgroundColor:a[500],"&:hover":{backgroundColor:a[700]}})),k={fieldError:!1,helperText:""},R=(e,t)=>({...e,...t}),B=()=>{const e=i.useRef(null),[t,c]=i.useReducer(R,k),{fieldError:h,helperText:x}=t,g=w(),f=j();return o.jsx(E,{children:o.jsxs("div",{className:"login_content",children:[o.jsx("img",{src:"/wallet.svg",alt:"我的钱包"}),o.jsx("h2",{children:"欢迎回来！"}),o.jsx("h4",{children:"即将进入去中心化钱包！"}),o.jsx(T,{inputRef:e,id:"login_field",label:"密码",variant:"filled",type:"password",error:h,helperText:x,onChange:C(r=>{var l;const s=(l=r==null?void 0:r.target)==null?void 0:l.value;c({fieldError:!s,helperText:s?"":"请输入密码！"})},200),sx:{width:"300px",background:"#f0f0f0",borderRadius:"5px"}}),o.jsx(W,{variant:"contained",onClick:async()=>{var r;try{const s=(r=e==null?void 0:e.current)==null?void 0:r.value,l=n.utils.sha3Raw(s);(await u.load(l,"myWallet")).length&&(f(b(l)),g("/"))}catch(s){console.log("error is:","color: #f00;",s),c({fieldError:!0,helperText:"密码不正确！"})}},children:"登录"})]})})},F=i.memo(B);export{F as default};
