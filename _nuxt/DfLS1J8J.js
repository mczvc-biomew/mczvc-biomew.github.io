import{_ as V}from"./C44WZhY3.js";import{d as H,f as P,a as s,r,m as v,U as b,l as q,n as L,H as j,o as B,c as T,A as x,e as G,q as U,B as $,C as W,t as J,T as K,E as d,p as u,N as O,aA as z,I as Q}from"./B120KnZb.js";import{u as R}from"./DaloOLHW.js";const X=["src","data-author","data-title","type"],Y=H({__name:"Music",props:{musicFile:String,musicAuthor:String,musicTitle:String,musicType:{default:"audio/mp3",type:String},fgColor:{default:"#0eaedf9e",type:String},shadowColor:{default:"#06272f",type:String},stopIcon:{default:"",type:String},rewindIcon:{default:"",type:String},font:{default:"Gotham Condensed Black",type:String},fontSize:{default:48,type:Number}},setup(M){P(e=>({"6e017c96":s(A),"5b268a0f":s(D),"0e15c041":s(f)})),R({script:[{src:"/vendor/js/visualizer.js"}]});const n=M,t=r(),l=r(),c=v("musicSingleton",()=>!1),p=r(),A=r(n.stopIcon.length>0?n.stopIcon:`url("${b("/assets/img/icons/stop.svg")}")`),D=r(n.rewindIcon.length>0?n.rewindIcon:'url("'+b("/assets/img/icons/rock.svg")+'")'),o=r("not-started"),F=e=>{e.preventDefault(),s(o)==="playing"?(d("#canvas","bounce"),u("#canvas","active")):s(o)==="paused"&&(setTimeout(()=>{u("#canvas","bounce")},500),d("#canvas","active"),o.value="not-started",O(()=>o.value="paused")),u("#canvas","always-show")},m=(e=!0)=>{d(".pause-icon",["paused","closed"]),d("#canvas","paused");try{s(t).loaded||t.value.loadSound(),e&&s(c)&&t.value.playSound(),o.value="playing"}catch(a){console.error(a),console.warn("Error playing sound"),o.value="disposed"}},N=e=>{e.preventDefault();const a=document.getElementById("hero");if(!s(t)){c.value=!1,g()&&(t.value.loadSound(),d(".pause-icon",["closed","paused"]));return}if(s(o)==="playing"){if(!t.value.loaded||!t.value.isPlaying)return;if(t.value.pauseSound(),o.value="paused",a){const i=["hover","foreground"];(!z(a,"foreground")||!z(a,"hover"))&&u(a,i)}u(".pause-icon","paused"),u("#canvas","paused")}else s(o)==="paused"?(t.value.dispose(),o.value="disposed",u(".pause-icon","closed"),t.value=null,p.value=null):s(o)},S=e=>{if(o.value=e==="running"?"playing":e==="suspended"?"paused":e==="closed"?"disposed":"not-started",s(o)!=="playing")if(s(o)==="paused"){const a=document.getElementById("hero");a&&d(a,["foreground"]),m()}else s(o)==="not-started"&&(t.value.loadSound(),m())},f=r("49");v("music-top",()=>f.value);const _=()=>{setTimeout(()=>{f.value=v("music-top").value+"px"},300)},g=()=>"__lazyMusicLoader"in window&&n.musicFile.length>0&&!s(c)?(window.__lazyMusicLoader.then(e=>{if(p.value=e(),s(p)){const a={autoplay:!0,loop:!0,audio:"audio",canvas:"canvas",style:"lounge",barWidth:2,barHeight:2,barSpacing:7,barColor:n.fgColor,shadowBlur:5,shadowColor:n.shadowColor,font:["32px",n.font,""],fontSize:n.fontSize,clickHandler:S};if(t.value=p.value(S,a),!s(t))return!1;m(!1)}else return!1}),c.value=!0,!!s(t)):(c.value=!1,!1),C=e=>{_(),s(c)||g(),u(s(l),"activated")},E=e=>{if(e.target===l.value){e.stopPropagation();const a=document.getElementById("hero");a&&u(a,["hover"])}},w=e=>{if(e.target===l.value){e.stopPropagation();const a=document.getElementById("hero");a&&d(a,["hover"])}},h=()=>{_()};return q(()=>{var e,a,i;L(()=>n.musicFile,y=>{var k,I;(k=t.value)==null||k.pauseSound(),(I=t.value)==null||I.dispose(),c.value=!1,g(),o.value="playing"}),(e=document.querySelector(".app"))==null||e.addEventListener("onDockingStationAvailable",h),L(v("music-top"),()=>{h()},{immediate:!0}),document.documentElement.addEventListener("click",C),(a=l.value)==null||a.addEventListener("mouseenter",E),(i=l.value)==null||i.addEventListener("mouseleave",w)}),j(()=>{var e,a,i,y;(e=document.querySelector(".app"))==null||e.removeEventListener("onDockingStationAvailable",h),(a=t.value)==null||a.dispose(),c.value=!1,document.documentElement.removeEventListener("click",C),(i=l.value)==null||i.removeEventListener("mouseenter",E),(y=l.value)==null||y.removeEventListener("mouseleave",w)}),(e,a)=>{const i=V;return B(),T("div",{class:"music",onClick:F},[x(i,{icon:"pause-icon",onClick:N}),n.musicFile.length>0?(B(),T("audio",{key:0,id:"audio",src:n.musicFile,"data-author":n.musicAuthor,"data-title":n.musicTitle,type:n.musicType},null,8,X)):G("",!0),x(K,{name:"bounce"},{default:U(()=>[$(J("canvas",{id:"canvas",width:"340",height:"400",ref_key:"canvas",ref:l},null,512),[[W,s(o)==="playing"||s(o)==="paused"]])]),_:1})])}}}),se=Q(Y,[["__scopeId","data-v-4f2a02ce"]]);export{se as default};