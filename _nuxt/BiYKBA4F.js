import{J as o,p as u,K as f,s as d,L as v,M as l,N as i,O as h,P as p}from"./B8ieHz6H.js";function U(t,a={}){const e=a.head||o();if(e)return e.ssr?e.push(t,a):m(e,t,a)}function m(t,a,e={}){const s=u(!1),n=u({});f(()=>{n.value=s.value?{}:h(a)});const r=t.push(n.value,e);return d(n,c=>{r.patch(c)}),p()&&(v(()=>{r.dispose()}),l(()=>{s.value=!0}),i(()=>{s.value=!1})),r}export{U as u};