import{u as p}from"./DuyZD7r5.js";import{u as d}from"./BAaMpqYt.js";import{d as f,r as y,j as S,i as g,o as q,c as z,I as v,af as E,a as L}from"./1iLlZKFG.js";function w(r){return d("lemonSqueezy",()=>({scriptInput:{src:"https://assets.lemonsqueezy.com/lemon.js",crossorigin:!1},scriptOptions:{use(){if(!(typeof window.createLemonSqueezy>"u"))return window.createLemonSqueezy(),window.LemonSqueezy}}}),r)}const k=f({__name:"ScriptLemonSqueezy",props:{trigger:{type:[String,Array,Boolean],default:"visible"}},emits:["ready","lemonSqueezyEvent"],setup(r,{emit:a}){const u=r,s=a,o=y(null),n=p({trigger:u.trigger,el:o}),i=w({scriptOptions:{trigger:n}});S(()=>{var e;(e=o.value)==null||e.querySelectorAll("a[href]").forEach(t=>{t.classList.add("lemonsqueezy-button")}),i.onLoaded(({Setup:t,Refresh:l})=>{t({eventHandler(m){s("lemonSqueezyEvent",m)}}),l(),s("ready",i)})});const c=g(()=>({...n instanceof Promise?n.ssrAttrs||{}:{}}));return(e,t)=>(q(),z("div",E({ref_key:"rootEl",ref:o},L(c)),[v(e.$slots,"default")],16))}});export{k as default};