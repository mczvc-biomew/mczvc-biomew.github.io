import{d as u,o as t,c as n,l as a,F as f,m as k,B as h,D as v,t as C,x}from"./DppOP_AO.js";const B={class:"simple-menu"},y={class:"linear-menu"},g=["onClick"],w=u({__name:"Menu",props:{items:{},show:{type:Boolean}},emits:["itemClick"],setup(l,{emit:c}){const r=c,m=l,_=(e,o)=>{m.items.forEach(({selected:s})=>s.value=!1),r("itemClick",{title:e,selected:o})};return(e,o)=>(t(),n("div",B,[a("div",y,[a("ul",null,[(t(!0),n(f,null,k(e.items,({title:s,display:p,selected:i},d)=>(t(),n("li",{key:d,class:"[z-index:2]"},[a("a",{class:h({selected:i.value}),onClick:v(z=>_(s,i),["prevent"])},C(p),11,g)]))),128))])])]))}}),E=x(w,[["__scopeId","data-v-15b56a6c"]]);export{E as default};