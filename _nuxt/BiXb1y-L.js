import{d as w,f as y,a as t,r as a,k as z,g as I,A as B,o as c,c as u,p as s,G as v,F as L,q as E,I as M,L as V,B as F}from"./BGk1UhN1.js";const S={class:"bub-menu"},T=["checked"],$=["onClick"],q=w({__name:"BubbleMenu",props:{items:{},show:{type:Boolean}},emits:["itemClick"],setup(f,{emit:g}){y(e=>({63480358:t(r),"2f1e4057":t(i)}));const r=a(0),b=g,m=f,l=a(),i=a("0px"),p=a(),o=a(m.show),h=e=>{p.value.click(),b("itemClick",e)},d=()=>{var e;return((((e=l.value)==null?void 0:e.offsetTop)||0)-30).toString()+"px"},_=()=>{i.value=d()};return z(()=>{var n;r.value=(n=m.items)==null?void 0:n.length,i.value=d(),window.addEventListener("resize",_);const{locale:e}=I();e.value==="en"&&l.value.classList.add("en")}),B(()=>{window.removeEventListener("resize",_)}),(e,n)=>(c(),u("div",{id:"bub-menu-container",ref_key:"menuContainer",ref:l,class:"bub-menu-container"},[s("div",S,[s("label",{class:v(["toggle-group group",{active:t(o)}]),onClick:n[0]||(n[0]=k=>o.value=!t(o))},[s("input",{ref_key:"checkInput",ref:p,class:"menu-toggler [z-index:3] group-hover:translate-x-[-25px]",type:"checkbox",checked:t(o)},null,8,T),n[1]||(n[1]=s("button",{class:"toggle-button w-[40px] h-[40px] rounded-full group-hover:bg-[rgba(215,175,18,0.84)] btn [transition:all_ease-in-out_120ms]"},"=",-1))],2),s("ul",null,[(c(!0),u(L,null,E(e.items,({title:k,display:x},C)=>(c(),u("li",{key:C,class:v(["menu-item [z-index:2]",{"send-to-back":!t(o)}])},[s("a",{onClick:M(A=>h(k),["prevent"]),class:"menu-item__content-link",style:V({"--content-display":'"'+x+'"'})},null,12,$)],2))),128))])])],512))}}),N=F(q,[["__scopeId","data-v-865a6983"]]);export{N as default};