import{u as y}from"./C_lxtvgH.js";import{b as E}from"./B_zEvHSd.js";import{d as v,r as c,l as k,n as A,av as h,j as T,o as w,c as C,t as B,a as i,X as o,e as p,aG as I}from"./BoeihBA2.js";const j=v({__name:"ScriptStripePricingTable",props:{trigger:{type:[String,Array,Boolean],default:"visible"},publishableKey:{},pricingTableId:{},clientReferenceId:{},customerEmail:{},customerSessionClientSecret:{}},emits:["ready","error"],setup(d,{emit:g}){const t=d,l=g,n=c(),f=c(),a=y({trigger:t.trigger,el:n}),u=E("https://js.stripe.com/v3/pricing-table.js",{trigger:a}),{onLoaded:b,status:s}=u,m=c();k(()=>{b(()=>{const e=window.customElements.get("stripe-pricing-table"),r=new e;r.setAttribute("publishable-key",t.publishableKey),r.setAttribute("pricing-table-id",t.pricingTableId),t.clientReferenceId&&r.setAttribute("client-reference-id",t.clientReferenceId),t.customerEmail&&r.setAttribute("customer-email",t.customerEmail),t.customerSessionClientSecret&&r.setAttribute("customer-session-client-secret",t.customerSessionClientSecret),m.value=r,n.value.appendChild(r),l("ready",u)}),A(s,e=>{e==="error"&&l("error")})}),h(()=>{var e;(e=m.value)==null||e.remove()});const S=T(()=>({...a instanceof Promise?a.ssrAttrs||{}:{}}));return(e,r)=>(w(),C("div",I({ref_key:"rootEl",ref:n},i(S)),[B("div",{ref_key:"containerEl",ref:f},null,512),i(s)==="loading"?o(e.$slots,"loading",{key:0}):p("",!0),i(s)==="awaitingLoad"?o(e.$slots,"awaitingLoad",{key:1}):i(s)==="error"?o(e.$slots,"error",{key:2}):p("",!0),o(e.$slots,"default")],16))}});export{j as default};