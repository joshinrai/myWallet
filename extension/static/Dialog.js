import{g as X,b as Y,r as c,s as d,e as i,a as r,P,u as z,_ as H,j as s,c as f,d as K}from"./index.js";import{a as V}from"./ButtonBase.js";import{B as q,M as G,F as J}from"./Modal.js";import{u as O}from"./List.js";function Q(e){return Y("MuiDialog",e)}const W=X("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]),Z=c.createContext({}),aa=["aria-describedby","aria-labelledby","BackdropComponent","BackdropProps","children","className","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClose","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps"],ea=d(q,{name:"MuiDialog",slot:"Backdrop",overrides:(e,a)=>a.backdrop})({zIndex:-1}),oa=e=>{const{classes:a,scroll:o,maxWidth:l,fullWidth:n,fullScreen:u}=e,m={root:["root"],container:["container",`scroll${i(o)}`],paper:["paper",`paperScroll${i(o)}`,`paperWidth${i(String(l))}`,n&&"paperFullWidth",u&&"paperFullScreen"]};return K(m,Q,a)},ra=d(G,{name:"MuiDialog",slot:"Root",overridesResolver:(e,a)=>a.root})({"@media print":{position:"absolute !important"}}),ia=d("div",{name:"MuiDialog",slot:"Container",overridesResolver:(e,a)=>{const{ownerState:o}=e;return[a.container,a[`scroll${i(o.scroll)}`]]}})(({ownerState:e})=>r({height:"100%","@media print":{height:"auto"},outline:0},e.scroll==="paper"&&{display:"flex",justifyContent:"center",alignItems:"center"},e.scroll==="body"&&{overflowY:"auto",overflowX:"hidden",textAlign:"center","&::after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}})),la=d(P,{name:"MuiDialog",slot:"Paper",overridesResolver:(e,a)=>{const{ownerState:o}=e;return[a.paper,a[`scrollPaper${i(o.scroll)}`],a[`paperWidth${i(String(o.maxWidth))}`],o.fullWidth&&a.paperFullWidth,o.fullScreen&&a.paperFullScreen]}})(({theme:e,ownerState:a})=>r({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},a.scroll==="paper"&&{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},a.scroll==="body"&&{display:"inline-block",verticalAlign:"middle",textAlign:"left"},!a.maxWidth&&{maxWidth:"calc(100% - 64px)"},a.maxWidth==="xs"&&{maxWidth:e.breakpoints.unit==="px"?Math.max(e.breakpoints.values.xs,444):`max(${e.breakpoints.values.xs}${e.breakpoints.unit}, 444px)`,[`&.${W.paperScrollBody}`]:{[e.breakpoints.down(Math.max(e.breakpoints.values.xs,444)+32*2)]:{maxWidth:"calc(100% - 64px)"}}},a.maxWidth&&a.maxWidth!=="xs"&&{maxWidth:`${e.breakpoints.values[a.maxWidth]}${e.breakpoints.unit}`,[`&.${W.paperScrollBody}`]:{[e.breakpoints.down(e.breakpoints.values[a.maxWidth]+32*2)]:{maxWidth:"calc(100% - 64px)"}}},a.fullWidth&&{width:"calc(100% - 64px)"},a.fullScreen&&{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,[`&.${W.paperScrollBody}`]:{margin:0,maxWidth:"100%"}})),ca=c.forwardRef(function(a,o){const l=z({props:a,name:"MuiDialog"}),n=V(),u={enter:n.transitions.duration.enteringScreen,exit:n.transitions.duration.leavingScreen},{"aria-describedby":m,"aria-labelledby":B,BackdropComponent:M,BackdropProps:S,children:$,className:j,disableEscapeKeyDown:k=!1,fullScreen:F=!1,fullWidth:R=!1,maxWidth:T="sm",onBackdropClick:C,onClose:x,open:D,PaperComponent:w=P,PaperProps:v={},scroll:N="paper",TransitionComponent:A=J,transitionDuration:y=u,TransitionProps:E}=l,I=H(l,aa),p=r({},l,{disableEscapeKeyDown:k,fullScreen:F,fullWidth:R,maxWidth:T,scroll:N}),h=oa(p),b=c.useRef(),L=t=>{b.current=t.target===t.currentTarget},U=t=>{b.current&&(b.current=null,C&&C(t),x&&x(t,"backdropClick"))},g=O(B),_=c.useMemo(()=>({titleId:g}),[g]);return s.jsx(ra,r({className:f(h.root,j),closeAfterTransition:!0,components:{Backdrop:ea},componentsProps:{backdrop:r({transitionDuration:y,as:M},S)},disableEscapeKeyDown:k,onClose:x,open:D,ref:o,onClick:U,ownerState:p},I,{children:s.jsx(A,r({appear:!0,in:D,timeout:y,role:"presentation"},E,{children:s.jsx(ia,{className:f(h.container),onMouseDown:L,ownerState:p,children:s.jsx(la,r({as:w,elevation:24,role:"dialog","aria-describedby":m,"aria-labelledby":g},v,{className:f(h.paper,v.className),ownerState:p,children:s.jsx(Z.Provider,{value:_,children:$})}))})}))}))});export{ca as D,Z as a};
