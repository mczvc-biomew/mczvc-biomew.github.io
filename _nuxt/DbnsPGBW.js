import{d as R,f as V,a as t,r,g as j,h as D,i as $,j as I,k as A,l as G,m as J,n as K,p as g,o as y,c as E,t as n,F as O,v as Q,b as U,q as b,x as c,y as L,B as W,C as i,_ as X}from"./LBw5qZOz.js";import Y from"./Bgl3YEuf.js";const Z={class:"intro"},ee={class:"language-selector px-3 py-2.5"},te={class:"given-name line-height-none mt-4 relative z-2"},ne={class:"given-name name-shadow-blur line-height-none"},ae={class:"last-name entrance"},se={class:"resume-link__wrapper entrance"},re=R({__name:"MC",props:{afterEnter:Function},emits:["update:afterEnter"],setup(oe,{emit:M}){V(a=>({"2677f5d9":t(S),"671b911e":t(f),b89f9f5c:t(_)}));const d=r();r();const{locale:p,locales:z,t:l}=j(),q=D(),B=$();r(!0);let x=!1;const N=I(()=>z.value.filter(a=>a.code!==p.value)),f=r("1px"),_=r("unset"),S=r("#bd9a30"),u=A(),w=M;let k=!1,v=!1,C=!1;w("update:afterEnter",function(){k=!0});function h(a){x=!0}async function P(a){return new Promise(e=>setTimeout(e,a))}async function T(){var e,s,m;(s=(e=u==null?void 0:u.prevRoute)==null?void 0:e.name)!=null&&s.toString().includes("mczvc");async function a(o){await P(o)}a(1e3),setTimeout(()=>{const o=document.querySelector(".first-name");i(o,"entrance");const F=document.querySelector(".last-name");i(F,"entrance");const H=document.querySelector(".resume-link__wrapper");i(H,"entrance"),i(document.querySelector(".light-mode-icon"),"entrance"),i(document.querySelector(".language-selector__wrapper"),"entrance")},300),k||!((m=u.prevRoute)!=null&&m.path.includes("/mczvc"))?v&&h():w("update:afterEnter",function(){v&&h()}),C=!0}return G(async()=>{console.log("MC"),await T();const a=J("music-top");a.value=d.value.offsetTop-46,K(p,e=>{i(document.documentElement,z.value.flatMap(s=>`lang-${s.code}`)),g(document.documentElement,`lang-${e}`)},{immediate:!0}),g(d.value,"foreground"),C&&!x&&(g(document.querySelector("#layout"),"entrance"),h()),v=!0}),(a,e)=>{const s=X,m=Y;return y(),E("main",null,[n("div",Z,[(y(!0),E(O,null,Q(t(N),o=>(y(),U(s,{class:"language-selector__wrapper entrance",to:t(q)(o.code),key:o.code},{default:b(()=>[n("div",ee,c(o.name),1)]),_:2},1032,["to"]))),128)),L(m,{class:"entrance"}),n("div",{class:"bayanihan hero mb-4",id:"hero",ref_key:"BayanihanHero",ref:d},null,512),e[2]||(e[2]=n("div",{class:"horizontal-line"},null,-1)),n("div",{class:"first-name entrance",onMouseenter:e[0]||(e[0]=()=>{f.value=t(p)==="jp"?"6rem":"7rem",_.value="1rem",S.value="#aaa338"}),onMouseleave:e[1]||(e[1]=()=>{f.value="1px",_.value="unset"})},[n("div",te,[n("p",null,c(t(l)("mczvc.m")),1),n("p",null,c(t(l)("mczvc.cz")),1)]),n("div",ne,[n("p",null,c(t(l)("mczvc.m")),1),n("p",null,c(t(l)("mczvc.cz")),1)])],32),n("p",ae,c(t(l)("mczvc.c")),1),n("div",se,[L(s,{class:"resume-link font-bold text-xl",to:t(B)("/mczvc")},{default:b(()=>[W(c(t(l)("resume")),1)]),_:1},8,["to"])])])])}}});export{re as default};