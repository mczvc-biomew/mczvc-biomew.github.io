import{u as E}from"./CquMeeNL.js";import{u as C}from"./DQA-0dpm.js";import{o as k,s as p,a,n as _}from"./D_P_Mt2j.js";import{d as h,r as I,l as R,n as S,am as P,j as O,o as D,c as $,I as u,a as t,e as b,aq as x}from"./LBw5qZOz.js";k({id:p(),runtimeConfig:a(k({locale:a(p())})),tokenId:a(p()),cookieDomain:a(p()),cookieExpiry:a(_())});function A(f){let d=Promise.resolve();return C("crisp",o=>({scriptInput:{src:"https://client.crisp.chat/l.js"},schema:void 0,scriptOptions:{use(){const e=i=>{var s;return((s=window.$crisp)==null?void 0:s[i])||((...c)=>{d.then(()=>window.$crisp[i](...c))})};return{push:window.$crisp.push,do:e("do"),set:e("set"),get:e("get"),on:e("on"),off:e("off"),config:e("config"),help:e("help")}}},clientInit:()=>{var e;window.$crisp=[],window.CRISP_WEBSITE_ID=o.id,(e=o.runtimeConfig)!=null&&e.locale&&(window.CRISP_RUNTIME_CONFIG={locale:o.runtimeConfig.locale}),o.cookieDomain&&(window.CRISP_COOKIE_DOMAIN=o.cookieDomain),o.cookieExpiry&&(window.CRISP_COOKIE_EXPIRATION=o.cookieExpiry),o.tokenId&&(window.CRISP_TOKEN_ID=o.tokenId),d=new Promise(i=>{window.CRISP_READY_TRIGGER=i})}}),f)}const M=h({__name:"ScriptCrisp",props:{trigger:{type:[String,Array,Boolean],default:"click"},id:{},runtimeConfig:{},tokenId:{},cookieDomain:{},cookieExpiry:{}},emits:["ready","error"],setup(f,{expose:d,emit:o}){const e=f,i=o,s=I(null),c=E({trigger:e.trigger,el:s}),l=I(!1),g=A({id:e.id,runtimeConfig:e.runtimeConfig,tokenId:e.tokenId,cookieDomain:e.cookieDomain,cookieExpiry:e.cookieExpiry,scriptOptions:{trigger:c}}),{onLoaded:w,status:m}=g;e.trigger==="click"&&w(r=>{r.do("chat:open")}),d({crisp:g});let n;R(()=>{S(m,r=>{r==="loaded"?(n=new MutationObserver(()=>{document.getElementById("crisp-chatbox")&&(l.value=!0,i("ready",g),n.disconnect())}),n.observe(document.body,{childList:!0,subtree:!0})):r==="error"&&i("error")})}),P(()=>{n==null||n.disconnect()});const y=O(()=>({...c instanceof Promise?c.ssrAttrs||{}:{}}));return(r,B)=>(D(),$("div",x({ref_key:"rootEl",ref:s,style:{display:t(l)?"none":"block"}},t(y)),[u(r.$slots,"default",{ready:t(l)}),t(m)==="awaitingLoad"?u(r.$slots,"awaitingLoad",{key:0}):t(m)==="loading"||!t(l)?u(r.$slots,"loading",{key:1}):t(m)==="error"?u(r.$slots,"error",{key:2}):b("",!0)],16))}});export{M as default};