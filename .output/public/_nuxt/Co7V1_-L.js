import R from"./DxQnMv2G.js";import{n as P,d as j,r as b,j as n,l as z,av as D,o as A,c as C,B as F,C as x,t as q,X as c,aG as w,a as d,e as g,aC as T,aL as H,A as I}from"./BoeihBA2.js";import{u as W}from"./C_lxtvgH.js";import{u as G,a as M}from"./B_zEvHSd.js";import{u as U}from"./BntsflGx.js";function X(m){const l=G("vimeoPlayer",()=>({scriptInput:{src:"https://player.vimeo.com/api/player.js"},scriptOptions:{use(){return{Vimeo:window.Vimeo}}}}),m);{const p=P(l.status,o=>{o==="loading"&&(M({link:[{rel:"preconnect",href:"https://i.vimeocdn.com"},{rel:"preconnect",href:"https://f.vimeocdn.com"},{rel:"preconnect",href:"https://fresnel.vimeocdn.com"}]}),p())})}return l}const ee=j({__name:"ScriptVimeoPlayer",props:{trigger:{type:[String,Array,Boolean],default:"mousedown"},placeholderAttrs:{},rootAttrs:{},aboveTheFold:{type:Boolean},vimeoOptions:{},id:{},url:{}},emits:["play","playing","pause","ended","timeupdate","progress","seeking","seeked","texttrackchange","chapterchange","cuechange","cuepoint","volumechange","playbackratechange","bufferstart","bufferend","error","loaded","durationchange","fullscreenchange","qualitychange","camerachange","resize","enterpictureinpicture","leavepictureinpicture"],setup(m,{expose:l,emit:p}){const o=m,V=p,$=["play","playing","pause","ended","timeupdate","progress","seeking","seeked","texttrackchange","chapterchange","cuechange","cuepoint","volumechange","playbackratechange","bufferstart","bufferend","error","loaded","durationchange","fullscreenchange","qualitychange","camerachange","resize","enterpictureinpicture","leavepictureinpicture"],u=b(),y=b(),s=W({trigger:o.trigger,el:y});let h=!1;o.trigger==="mousedown"&&s instanceof Promise&&s.then(t=>{t&&(h=!0)});const f=b(!1),{onLoaded:O,status:i}=X({scriptOptions:{trigger:s}}),v=n(()=>{var t;return((t=o.vimeoOptions)==null?void 0:t.id)||o.id}),{data:L}=U(`vimeo-embed:${v.value}`,()=>$fetch(`https://vimeo.com/api/v2/video/${v.value}.json`).then(t=>t[0]),{watch:[v]}),k=n(()=>{var t;return(t=L.value)==null?void 0:t.thumbnail_large});let e;l({play:()=>e==null?void 0:e.play(),pause:()=>e==null?void 0:e.pause(),getDuration:()=>e==null?void 0:e.getDuration(),getCurrentTime:()=>e==null?void 0:e.getCurrentTime(),setCurrentTime:t=>e==null?void 0:e.setCurrentTime(t),getVolume:()=>e==null?void 0:e.getVolume(),setVolume:t=>e==null?void 0:e.setVolume(t),getPaused:()=>e==null?void 0:e.getPaused(),getEnded:()=>e==null?void 0:e.getEnded(),getLoop:()=>e==null?void 0:e.getLoop(),setLoop:t=>e==null?void 0:e.setLoop(t),getPlaybackRate:()=>e==null?void 0:e.getPlaybackRate(),setPlaybackRate:t=>e==null?void 0:e.setPlaybackRate(t)});const _=n(()=>{var t,a,r;return((t=o.vimeoOptions)==null?void 0:t.width)||((r=(a=u.value)==null?void 0:a.parentNode)==null?void 0:r.offsetWidth)||640}),S=n(()=>{var t,a,r;return((t=o.vimeoOptions)==null?void 0:t.height)||((r=(a=u.value)==null?void 0:a.parentNode)==null?void 0:r.offsetHeight)||480});z(()=>{O(async({Vimeo:t})=>{const a=o.vimeoOptions||{};!a.id&&o.id&&(a.id=o.id),!a.url&&o.url&&(a.url=o.url),a.width=_.value,a.height=S.value,e=new t.Player(u.value,a),h&&(e.play(),h=!1);for(const r of $)e.on(r,N=>{V(r,N,e),r==="loaded"&&(f.value=!0)})})}),P(()=>o.id,t=>{t&&(e==null||e.loadVideo(Number(t)))}),P(i,t=>{t==="error"&&V("error")});const B=n(()=>T(o.rootAttrs,{"aria-busy":i.value==="loading","aria-label":i.value==="awaitingLoad"?"Vimeo Player - Placeholder":i.value==="loading"?"Vimeo Player - Loading":"Vimeo Player - Loaded","aria-live":"polite",role:"application",style:{maxWidth:"100%",width:`${_.value}px`,height:"auto",aspectRatio:"16/9",position:"relative",backgroundColor:"black"},...s instanceof Promise?s.ssrAttrs||{}:{}})),E=n(()=>T(o.placeholderAttrs,{src:k.value,alt:"",loading:o.aboveTheFold?"eager":"lazy",fetchpriority:o.aboveTheFold?"high":void 0,style:{cursor:"pointer",width:"100%",objectFit:"contain",height:"100%"}}));return D(()=>e==null?void 0:e.unload()),(t,a)=>{const r=R;return A(),C("div",w({ref_key:"rootEl",ref:y},B.value),[F(q("div",{ref_key:"elVimeo",ref:u,class:"vimeo-player"},null,512),[[x,f.value]]),f.value?g("",!0):c(t.$slots,"placeholder",w({key:0},d(L),{placeholder:k.value}),()=>[k.value?(A(),C("img",H(w({key:0},E.value)),null,16)):g("",!0)]),d(i)==="loading"?c(t.$slots,"loading",{key:1},()=>[I(r,{color:"white"})]):g("",!0),d(i)==="awaitingLoad"?c(t.$slots,"awaitingLoad",{key:2}):d(i)==="error"?c(t.$slots,"error",{key:3}):g("",!0),c(t.$slots,"default")],16)}}});export{ee as default};