import B from"./2vBPoNIU.js";import{n as f,d as R,r as u,l as V,j as g,o as F,c as N,t as Y,W as s,e as y,a as h,ax as j,aB as A,aE as O,aF as x,A as z}from"./BBmDtt1I.js";import{u as W}from"./DMT1lvTu.js";import{u as q,a as H}from"./Cn1YHSdh.js";function M(d){let i=Promise.resolve();const n=q("youtubePlayer",()=>({scriptInput:{src:"https://www.youtube.com/iframe_api",crossorigin:!1},scriptOptions:{use(){return{YT:window.YT||i.then(()=>window.YT)}}},clientInit:()=>{i=new Promise(e=>{window.onYouTubeIframeAPIReady=e})}}),d);{const e=f(n.status,l=>{l==="loading"&&(H({link:[{rel:"preconnect",href:"https://www.youtube-nocookie.com"},{rel:"preconnect",href:"https://www.google.com"},{rel:"preconnect",href:"https://googleads.g.doubleclick.net"},{rel:"preconnect",href:"https://static.doubleclick.net"}]}),e())})}return n}const J=R({__name:"ScriptYouTubePlayer",props:{placeholderAttrs:{},rootAttrs:{},aboveTheFold:{type:Boolean},trigger:{type:[String,Array,Boolean],default:"mousedown"},videoId:{},playerVars:{default:{autoplay:0,playsinline:1}},width:{default:640},height:{default:480}},emits:["ready","state-change","playback-quality-change","playback-rate-change","error"],setup(d,{expose:i,emit:n}){const e=d,l=n,_=["onReady","onStateChange","onPlaybackQualityChange","onPlaybackRateChange","onError","onApiChange"],m=u(),w=u(),b=u(!1),r=W({trigger:e.trigger,el:m}),E=M({scriptOptions:{trigger:r}}),{onLoaded:I,status:a}=E,c=u();let p=!1;e.trigger==="mousedown"&&r instanceof Promise&&r.then(t=>{t&&(p=!0)}),V(()=>{I(async t=>{const P=t.YT instanceof Promise?await t.YT:t.YT;await new Promise(o=>{typeof YT.Player>"u"?P.ready(o):o()}),c.value=new YT.Player(w.value,{...e,events:Object.fromEntries(_.map(o=>[o,L=>{var k;const S=o.replace(/([A-Z])/g,"-$1").replace("on-","").toLowerCase();l(S,L),o==="onReady"&&(b.value=!0,p&&((k=c.value)==null||k.playVideo(),p=!1),f(()=>e.videoId,()=>{var T;(T=c.value)==null||T.loadVideoById(e.videoId)}))}]))})}),f(a,t=>{t==="error"&&l("error")})}),i({player:c});const $=g(()=>A(e.rootAttrs,{"aria-busy":a.value==="loading","aria-label":a.value==="awaitingLoad"?"YouTube Player - Placeholder":a.value==="loading"?"YouTube Player - Loading":"YouTube Player - Loaded","aria-live":"polite",role:"application",style:{cursor:"pointer",position:"relative",backgroundColor:"black",maxWidth:"100%",width:`${e.width}px`,height:"auto",aspectRatio:`${e.width}/${e.height}`},...r instanceof Promise?r.ssrAttrs||{}:{}})),v=g(()=>`https://i.ytimg.com/vi_webp/${e.videoId}/sddefault.webp`),C=g(()=>A(e.placeholderAttrs,{src:v.value,alt:"",loading:e.aboveTheFold?"eager":"lazy",style:{width:"100%",objectFit:"contain",height:"100%"}}));return(t,P)=>{const o=B;return F(),N("div",j({ref_key:"rootEl",ref:m},$.value),[Y("div",{ref_key:"youtubeEl",ref:w,style:{width:"100%",height:"100%",position:"absolute",top:"0",left:"0"}},null,512),b.value?y("",!0):s(t.$slots,"placeholder",{key:0,placeholder:v.value},()=>[Y("img",O(x(C.value)),null,16)]),h(a)==="loading"?s(t.$slots,"loading",{key:1},()=>[z(o)]):y("",!0),h(a)==="awaitingLoad"?s(t.$slots,"awaitingLoad",{key:2}):h(a)==="error"?s(t.$slots,"error",{key:3}):y("",!0),s(t.$slots,"default")],16)}}});export{J as default};