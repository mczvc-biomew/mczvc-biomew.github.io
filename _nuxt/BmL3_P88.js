import j from"./C6k6kdpz.js";import{d as q,f as z,a as e,r as a,j as E,l as O,H as $,o as r,c as l,Z as P,b as H,e as W,t as o,A as c,q as p,Y as F,z as i,T as y,N as Q,p as R,I as U}from"./K84kZ51p.js";import Z from"./Q7RmhESu.js";import{s as J}from"./C8Ww9PX_.js";import{a as K}from"./ck0EKSxZ.js";import"./DIBWy3RM.js";const X={class:"countdown-component"},ee={key:2},se={class:"countdown__wrapper pl-6"},te={class:"countdown__hours"},ne={class:"countdown__minutes"},ae={class:"countdown__seconds"},oe={class:"countdown__next-year bg-yellow-600 text-white px-2 py-1"},re={key:3,class:"greetings__wrapper"},le=["innerHTML"],ie=q({__name:"Countdown",setup(ue){z(t=>({"7073ccac":e(D)}));const g=a(!1),A=E(()=>s.value.days===3?"text-yellow-300":s.value.days===2?"text-yellow-400":s.value.days===1?"text-yellow-500":s.value.days===0?"text-yellow-600":"text-yellow-200"),B=E(()=>s.value.days===0?"text-[#ce0060]":"text-[#ec3e8f]"),D=a("0px"),_=a(),Y=a(),T=a(!1),h=a(!1),v=new Date(Date.now()),M=new Date(v.getFullYear()+1,0,1,0,0,0,0),G=a(M.getTime()),u=a(),f=a(v.getFullYear()),s=a({seconds:0,minutes:0,hours:0,days:0}),w=t=>t<0||t>9?t.toString():"0"+t.toString(),N=a(!1);let S;const b=[`<b>Happy New Year</b> <i>Minna~san</i>! It's already <b class="text-sky-5">2025</b>! Isn't it?`,'We wish You all a <u>Happy</u>, <span class="P">Prosperous</span>, and <span class="E"">Exciting</span>~ <b>New Year</b>~ ahead ~ ;)',`It's been a <b>Great Way</b> to sp[end] this Year with .. :: Food, Drinks, Prayers, and Music :: With your <span class="E">Love-ones</span> 😉`," PS,",`We'll Carry-on ✊, just keep Going...👣 and, <br> Trust in the <b>Lord</b> ~ this Year ~ things ~ would be different 😑🐇;  🏇 Owwwhh~~: Yeah! [Yes, indeed] 💖 It's been quite a lot of Good Things [that] happened 🐋. <br>Quite. A. Ride. Mate! He--Yeah! BTW, Try to SING 😍 [your hearts, out] 💗<br> ~wouldn't you? (...) *<b>i'm happy</b>* [very-well] We're just getting started! And; <br>We're are all in this <b>Together</b>! <br>All along this time?<br><b>Always.</b><br> Heyyy, don't forget to: <b class="P">Smile</b>~~! 😄😊<br>💌 👦👧 🐉<br><b>Happy New Year</b> Everyone! <br>: <i>from</i> <b class="E">Yumika</b> & <i class="P">Mel</i>. 🤗👋`],d=()=>{const t=new Date(Date.now());return t.getDate()===1&&t.getMonth()===0},L=()=>{let t=0;setTimeout(()=>{f.value=M.getFullYear()},2e3),S=J(()=>{const n=document.querySelector(".hello-kitty-hero"),k=new Date().getTime();u.value=G.value-k;const m=e(u);(e(u)<0||d())&&(T.value=!0,n&&(n.style.setProperty("--o","0"),n.style.transition="opacity 60s ease",Q(()=>{n.style.setProperty("--o","0.95")}))),(e(u)<0||d())&&!e(N)&&t<b.length&&d()&&(K(b[t],N,Y.value,_,b[t].length),t+=1),s.value={seconds:Math.floor(m%(1e3*60)/1e3),minutes:Math.floor(m%(1e3*60*60)/(1e3*60)),hours:Math.floor(m%(1e3*60*60*24)/(1e3*60*60)),days:Math.floor(m/(1e3*60*60*24))};const I=s.value.days+1+(s.value.hours/24+s.value.minutes/60+s.value.seconds/60);if(D.value=u.value>-1?`${Math.floor(60/(1-I===1?.99:I))}px`:"60px",(s.value.days<0||d())&&!g.value&&(h.value=!0,g.value=!0,console.info("Finale Mode!"),R(document.documentElement,"happy-new-year")),s.value.days===0&&(s.value.hours<1&&(h.value=!0),s.value.hours===0)){const V=1-s.value.hours/24-.3+(.1-Math.min(s.value.minutes/60+s.value.seconds/3600,.249));n&&n.style.setProperty("--o",V.toString())}},1e3)},C=()=>v.getMonth()===11,x=a(!1);return O(()=>{(C()||d())&&(L(),x.value=!0)}),$(()=>{e(x)&&(clearInterval(S),x.value=!1)}),(t,n)=>{const k=j;return r(),l("div",X,[e(T)&&!("isDebug"in t?t.isDebug:e(P))()?(r(),H(k,{key:0})):W("",!0),e(h)&&!("isDebug"in t?t.isDebug:e(P))()?(r(),H(Z,{key:1,finale:e(g),year:e(f)},null,8,["finale","year"])):W("",!0),!("unref"in t?t.unref:e(e))(e(_))&&C()?(r(),l("div",ee,[o("div",se,[c(y,{name:"countdown"},{default:p(()=>[(r(),l("div",{class:"time-units flex-grow-0 w-0",key:e(s).days},[o("span",{class:F(["countdown__days",e(A)])},i(e(s).days===0?"D'":w(e(s).days)),3)]))]),_:1}),o("span",{class:F(["pl-6 pr-2",e(B)])},"Day"+i(e(s).days<2?"":"s"),3),c(y,{name:"countdown"},{default:p(()=>[(r(),l("div",{class:"time-units flex-grow-0 w-0",key:e(s).hours},[o("span",te,i(w(e(s).hours)),1)]))]),_:1}),n[1]||(n[1]=o("span",{class:"pl-6 pr-2"},":",-1)),c(y,{name:"countdown"},{default:p(()=>[(r(),l("div",{class:"time-units flex-grow-0 w-0",key:e(s).minutes},[o("span",ne,i(w(e(s).minutes)),1)]))]),_:1}),n[2]||(n[2]=o("span",{class:"pl-6 pr-2"},":",-1)),c(y,{name:"countdown"},{default:p(()=>[(r(),l("div",{class:"flex-grow-0 w-0",key:e(s).seconds},[o("span",ae,i(w(e(s).seconds)),1)]))]),_:1}),n[3]||(n[3]=o("span",{class:"pl-8 pr-1"}," before ",-1)),c(y,{name:"countdown"},{default:p(()=>[(r(),l("div",{class:"flex-grow-0 w-0",key:e(f)},[o("span",oe,i(e(f)),1),n[0]||(n[0]=o("span",{class:"percent-until position-relative h-1 bg-red-600"},null,-1))]))]),_:1})])])):(r(),l("div",re,[o("span",{class:"greetings-anime tick px-2 py-1 z-50 relative",ref_key:"greetingsEl",ref:Y,innerHTML:e(_)},null,8,le)]))])}}}),me=U(ie,[["__scopeId","data-v-acb05f2d"]]);export{me as default};