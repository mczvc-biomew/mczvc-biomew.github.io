import R from"./D99KcNco.js";import{n as P,d as D,r as b,j as n,l as j,as as z,o as _,c as T,B as F,C as x,t as q,N as c,aw as w,a as d,e as g,aA as $,aD as H,A as I}from"./C3UP8dfo.js";import{u as W}from"./BOZhOvJa.js";import{u as M,a as U}from"./CTUWNNKv.js";import{u as G}from"./npFcVcik.js";function J(m){const l=M("vimeoPlayer",()=>({scriptInput:{src:"https://player.vimeo.com/api/player.js"},scriptOptions:{use(){return{Vimeo:window.Vimeo}}}}),m);{const p=P(l.status,o=>{o==="loading"&&(U({link:[{rel:"preconnect",href:"https://i.vimeocdn.com"},{rel:"preconnect",href:"https://f.vimeocdn.com"},{rel:"preconnect",href:"https://fresnel.vimeocdn.com"}]}),p())})}return l}const ee=D({__name:"ScriptVimeoPlayer",props:{trigger:{type:[String,Array,Boolean],default:"mousedown"},placeholderAttrs:{},rootAttrs:{},aboveTheFold:{type:Boolean},vimeoOptions:{},id:{},url:{}},emits:["play","playing","pause","ended","timeupdate","progress","seeking","seeked","texttrackchange","chapterchange","cuechange","cuepoint","volumechange","playbackratechange","bufferstart","bufferend","error","loaded","durationchange","fullscreenchange","qualitychange","camerachange","resize","enterpictureinpicture","leavepictureinpicture"],setup(m,{expose:l,emit:p}){const o=m,V=p,C=["play","playing","pause","ended","timeupdate","progress","seeking","seeked","texttrackchange","chapterchange","cuechange","cuepoint","volumechange","playbackratechange","bufferstart","bufferend","error","loaded","durationchange","fullscreenchange","qualitychange","camerachange","resize","enterpictureinpicture","leavepictureinpicture"],u=b(),y=b(),s=W({trigger:o.trigger,el:y});let h=!1;o.trigger==="mousedown"&&s instanceof Promise&&s.then(t=>{t&&(h=!0)});const f=b(!1),{onLoaded:O,status:i}=J({scriptOptions:{trigger:s}}),v=n(()=>{var t;return((t=o.vimeoOptions)==null?void 0:t.id)||o.id}),{data:A}=G(`vimeo-embed:${v.value}`,()=>$fetch(`https://vimeo.com/api/v2/video/${v.value}.json`).then(t=>t[0]),{watch:[v]}),k=n(()=>{var t;return(t=A.value)==null?void 0:t.thumbnail_large});let e;l({play:()=>e==null?void 0:e.play(),pause:()=>e==null?void 0:e.pause(),getDuration:()=>e==null?void 0:e.getDuration(),getCurrentTime:()=>e==null?void 0:e.getCurrentTime(),setCurrentTime:t=>e==null?void 0:e.setCurrentTime(t),getVolume:()=>e==null?void 0:e.getVolume(),setVolume:t=>e==null?void 0:e.setVolume(t),getPaused:()=>e==null?void 0:e.getPaused(),getEnded:()=>e==null?void 0:e.getEnded(),getLoop:()=>e==null?void 0:e.getLoop(),setLoop:t=>e==null?void 0:e.setLoop(t),getPlaybackRate:()=>e==null?void 0:e.getPlaybackRate(),setPlaybackRate:t=>e==null?void 0:e.setPlaybackRate(t)});const L=n(()=>{var t,a,r;return((t=o.vimeoOptions)==null?void 0:t.width)||((r=(a=u.value)==null?void 0:a.parentNode)==null?void 0:r.offsetWidth)||640}),S=n(()=>{var t,a,r;return((t=o.vimeoOptions)==null?void 0:t.height)||((r=(a=u.value)==null?void 0:a.parentNode)==null?void 0:r.offsetHeight)||480});j(()=>{O(async({Vimeo:t})=>{const a=o.vimeoOptions||{};!a.id&&o.id&&(a.id=o.id),!a.url&&o.url&&(a.url=o.url),a.width=L.value,a.height=S.value,e=new t.Player(u.value,a),h&&(e.play(),h=!1);for(const r of C)e.on(r,E=>{V(r,E,e),r==="loaded"&&(f.value=!0)})})}),P(()=>o.id,t=>{t&&(e==null||e.loadVideo(Number(t)))}),P(i,t=>{t==="error"&&V("error")});const B=n(()=>$(o.rootAttrs,{"aria-busy":i.value==="loading","aria-label":i.value==="awaitingLoad"?"Vimeo Player - Placeholder":i.value==="loading"?"Vimeo Player - Loading":"Vimeo Player - Loaded","aria-live":"polite",role:"application",style:{maxWidth:"100%",width:`${L.value}px`,height:"auto",aspectRatio:"16/9",position:"relative",backgroundColor:"black"},...s instanceof Promise?s.ssrAttrs||{}:{}})),N=n(()=>$(o.placeholderAttrs,{src:k.value,alt:"",loading:o.aboveTheFold?"eager":"lazy",fetchpriority:o.aboveTheFold?"high":void 0,style:{cursor:"pointer",width:"100%",objectFit:"contain",height:"100%"}}));return z(()=>e==null?void 0:e.unload()),(t,a)=>{const r=R;return _(),T("div",w({ref_key:"rootEl",ref:y},B.value),[F(q("div",{ref_key:"elVimeo",ref:u,class:"vimeo-player"},null,512),[[x,f.value]]),f.value?g("",!0):c(t.$slots,"placeholder",w({key:0},d(A),{placeholder:k.value}),()=>[k.value?(_(),T("img",H(w({key:0},N.value)),null,16)):g("",!0)]),d(i)==="loading"?c(t.$slots,"loading",{key:1},()=>[I(r,{color:"white"})]):g("",!0),d(i)==="awaitingLoad"?c(t.$slots,"awaitingLoad",{key:2}):d(i)==="error"?c(t.$slots,"error",{key:3}):g("",!0),c(t.$slots,"default")],16)}}});export{ee as default};