import{_ as b}from"./BZtgcgn3.js";import P from"./BDUZ6fws.js";import{d as B,f as G,a,r as s,l as Y,H as w,o as r,c as u,N as D,t as n,y as c,q as F,F as I,v as V,O as q,x as g,e as h,B as A,T as H,I as O}from"./BM5rOBTw.js";import{u as R}from"./DNcabSiR.js";import{a as $}from"./C30yfqHZ.js";import"./xMN5YwZn.js";const E={class:"YouMeKa"},L={class:"music-station"},U=["onClick"],W={key:1,class:"display-playing peach-sundress"},Z={class:"jelly-sugar animated-title"},j=B({__name:"girlfriend",setup(z){G(t=>({"62b39da1":a(_)}));const m=s(""),l=s(!0),p=R(".YouMeKa__music-station__music-dock"),e=[{title:"Girlfriend",playing:s(!1),src:"/music/Girlfriend.mp3"},{title:"Girlfriend v2",playing:s(!1),src:"/music/GIRLFRIEND-v2.mp3"},{title:"Shine On Baby",playing:s(!1),src:"/music/YouMeKa/Shine-On-Baby.mp3",author:"Sam Milby"},{display:"Wish 1075",title:"キタ キタ",playing:s(!1),src:"/music/YouMeKa/Wish-1075.mp3",author:"KZ Tandingan"},{title:"There She Goes",playing:s(!1),src:"/music/YouMeKa/6-There-She-Goes.mp3",author:"Sixpense NTR"}],i=s({title:"",display:"",author:""}),d=s(""),v=()=>{for(let t=0;t<e.length;t++)e[t].playing.value=!1},k=t=>{v(),e[t].playing.value=!0,m.value=e[t].src,i.value.title=e[t].title,e[t].title.length>0&&(i.value.title=e[t].title.toUpperCase()),i.value.author="author"in e[t]?e[t].author:"KMKZ",i.value.display="display"in e[t]&&e[t].display?e[t].display:e[t].title},y=s(!1),S=()=>{l.value=!l.value,a(l)||setTimeout(()=>{a(y)||$(i.value.title,y,document.querySelector(".animated-title"),d)},700)},_=s("0px");return Y(()=>{_.value=document.querySelector(".playlist-view").offsetHeight.toString()+"px",setTimeout(()=>{p.reDock()},700)}),w(()=>{p.unDock()}),(t,o)=>{const T=b,M=P;return r(),u("div",E,[D(t.$slots,"default",{},void 0,!0),n("div",L,[c(T,{class:"playlist-icon",onClick:S}),c(H,{name:"collapse"},{default:F(()=>[(r(),u("div",{class:"playlist-view",key:+a(l)},[a(l)?(r(),u(I,{key:0},V(e,({title:C,playing:K,display:N},f)=>n("span",{class:q([{playing:K.value},"song"]),key:f,onClick:x=>k(f)},g(N??C),11,U)),64)):h("",!0),a(l)?h("",!0):(r(),u("span",W,[o[0]||(o[0]=A("Now Playing:")),o[1]||(o[1]=n("br",null,null,-1)),n("b",Z,g(a(d)),1)]))]))]),_:1}),o[2]||(o[2]=n("div",{class:"YouMeKa__music-station__music-dock"},null,-1))]),c(M,{musicFile:a(m),musicAuthor:a(i).author,musicTitle:a(i).title},null,8,["musicFile","musicAuthor","musicTitle"])])}}}),at=O(j,[["__scopeId","data-v-0b301532"]]);export{at as default};