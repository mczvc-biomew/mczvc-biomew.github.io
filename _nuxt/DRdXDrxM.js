import{d as i,r as c,l as u,o as d,c as h,t as f,I as g,J as p,a as m,L as k}from"./LBw5qZOz.js";const A=i({__name:"Highlighter",props:{highlightsClass:String},setup(v){const o=c(!1),a=e=>{n(e,"selected"),o.value=!0};function n(e,s){const t=document.querySelectorAll(".coursework .asterisked")||[];t.length&&t.forEach(l=>{l.classList.add(s)}),e.stopPropagation()}function r(e){if(o.value!==!0)if(Array.isArray(e))for(const s of e)r(s);else(document.querySelectorAll(".coursework .asterisked."+e)||[]).forEach(s=>{s.classList.remove(e)})}return u(()=>{document.documentElement.addEventListener("click",e=>{o.value=!1,r("selected"),e.stopPropagation()})}),(e,s)=>(d(),h("p",{class:"highlights",onMouseover:s[0]||(s[0]=t=>n(t,"highlight")),onMouseleave:s[1]||(s[1]=t=>r("highlight"))},[f("span",{id:"highlights-button",class:p({"highlight-on":m(o)}),onClick:k(a,["prevent"])},[g(e.$slots,"default")],2)],32))}});export{A as default};