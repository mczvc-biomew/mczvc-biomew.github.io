import{r as k,p,E as v}from"./K84kZ51p.js";const i={};function m(c,n,t,u,T){let r=0,a=T??3,l="",o;const e=c;for(u?o=u:o=k(""),n.value=!0,(e in i)||(i[e]=k([]));i[e].value.length>0;)clearTimeout(i[e].value.pop());if(t){const s=()=>{i[e].value.push(setTimeout(()=>{t.classList.contains("tick")?v(t,"tick"):p(t,"tick"),a--,(a>0||a<=0&&t.classList.contains("tick"))&&s()},700))};s()}const f={".":1e3,")":750,",":750,";":500,"~":320,"!":1200};return[...c].forEach(s=>{i[e].value.push(setTimeout(()=>{l=l+s,o.value=l,t&&p(t,"tick")},r)),r+=s in f?f[s]:120}),setTimeout(()=>{n.value=!1},r+2e3),o}export{m as a};