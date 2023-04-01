import{_ as F}from"./TopNav.3a5f3ecf.js";import{t as C,r as T,o as n,h as l,q as e,v as i,u as t,H as v,s as g,x as k,k as b,w as p,A as S,l as N,y as z,F as x,z as f,N as I,O as L}from"./entry.80ba4285.js";import{_ as M}from"./nuxt-link.ca670e33.js";const V={class:"w-full flex items-center hover:bg-gray-100 p-2.5 rounded-md"},B={class:"flex items-center lg:mx-0 mx-auto"},E={__name:"MenuItem",props:["iconString","colorString","sizeString"],setup(c){const o=c,{iconString:s,colorString:d,sizeString:a}=C(o);let r=T("");return s.value==="For You"&&(r.value="mdi:home"),s.value==="Following"&&(r.value="ci:group"),s.value==="LIVE"&&(r.value="ri:live-line"),(m,w)=>{const u=k;return n(),l("div",V,[e("div",B,[i(u,{name:t(r),color:t(d),size:t(a)},null,8,["name","color","size"]),e("span",{class:v([`text-[${t(d)}]`,"lg:block hidden pl-[9px] mt-0.5 font-semibold text-[17px]"])},g(t(s)),3)])])}}},A={class:"flex items-center hover:bg-gray-100 rounded-md w-full py-1.5 px-2"},D=["src"],P={class:"lg:pl-2.5 lg:block hidden"},R={class:"flex items-center"},G={class:"font-bold text-[14px]"},H={class:"ml-1 rounded-full bg-[#58D5EC] h-[14px] relative"},O={class:"font-light text-[12px] text-gray-600"},Y={__name:"MenuItemFollow",props:["user"],setup(c){const{$generalStore:o}=b();return(s,d)=>{const a=k;return n(),l("div",A,[c.user.image?(n(),l("img",{key:0,class:"rounded-full lg:mx-0 mx-auto",width:"35",src:c.user.image},null,8,D)):p("",!0),e("div",P,[e("div",R,[e("div",G,g(t(o).allLowerCaseNoCaps(c.user.name)),1),e("div",H,[i(a,{class:"relative -top-[7px]",name:"teenyicons:tick-small-solid",color:"#FFFFFF",size:"15"})])]),e("div",O,g(c.user.name),1)])])}}},j={class:"lg:w-full w-[55px] mx-auto"},q=e("div",{class:"border-b lg:ml-2 mt-2"},null,-1),J=e("div",{class:"lg:block hidden text-xs text-gray-600 font-semibold pt-4 pb-2 px-2"}," Suggested accounts ",-1),K=e("div",{class:"lg:hidden block pt-3"},null,-1),Q=["onClick"],U=e("button",{class:"lg:block hidden text-[#F02C56] pt-1.5 pl-2 text-[13px]"}," See all ",-1),W={key:1},X=e("div",{class:"border-b lg:ml-2 mt-2"},null,-1),Z=e("div",{class:"lg:block hidden text-xs text-gray-600 font-semibold pt-4 pb-2 px-2"}," Following accounts ",-1),ee=e("div",{class:"lg:hidden block pt-3"},null,-1),te=["onClick"],oe=e("button",{class:"lg:block hidden text-[#F02C56] pt-1.5 pl-2 text-[13px]"},"See more",-1),se=I('<div class="lg:block hidden border-b lg:ml-2 mt-2"></div><div class="lg:block hidden text-[11px] text-gray-500"><div class="pt-4 px-2">About Newsroom TikTok Shop Contact Careers ByteDance</div><div class="pt-4 px-2">TikTok for Good Advertise Developers Transparency TikTok Rewards TikTok Browse TikTok Embeds</div><div class="pt-4 px-2">Help Safety Terms Privacy Creator Portal Community Guidelines</div><div class="pt-4 px-2">© 2023 TikTok</div></div><div class="pb-14"></div>',3),ne={__name:"SideNavMain",setup(c){const{$generalStore:o,$userStore:s}=b(),d=S(),a=N(),r=m=>{if(!s.id){o.isLoginOpen=!0;return}setTimeout(()=>a.push(`/profile/${m.id}`),200)};return(m,w)=>{const u=E,y=M,h=Y;return n(),l("div",{id:"SideNavMain",class:v([t(d).fullPath==="/"?"lg:w-[310px]":"lg:w-[220px]","fixed z-20 bg-white pt-[70px] h-full lg:border-r-0 border-r w-[75px] overflow-auto"])},[e("div",j,[i(y,{to:"/"},{default:z(()=>[i(u,{iconString:"For You",colorString:"#F02C56",sizeString:"30"})]),_:1}),i(u,{iconString:"Following",colorString:"#000000",sizeString:"27"}),i(u,{iconString:"LIVE",colorString:"#000000",sizeString:"27"}),q,J,K,t(o).suggested?(n(!0),l(x,{key:0},f(t(o).suggested,_=>(n(),l("div",null,[e("div",{onClick:$=>r(_),class:"cursor-pointer"},[i(h,{user:_},null,8,["user"])],8,Q)]))),256)):p("",!0),U,t(s).id?(n(),l("div",W,[X,Z,ee,t(o).following?(n(!0),l(x,{key:0},f(t(o).following,_=>(n(),l("div",null,[e("div",{onClick:$=>r(_),class:"cursor-pointer"},[i(h,{user:_},null,8,["user"])],8,te)]))),256)):p("",!0),oe])):p("",!0),se])],2)}}},ce={__name:"MainLayout",setup(c){const o=S();return(s,d)=>{const a=F,r=ne;return n(),l(x,null,[i(a),e("div",{class:v([t(o).fullPath==="/"?"max-w-[1140px]":"","flex justify-between mx-auto w-full lg:px-2.5 px-0"])},[e("div",null,[i(r)]),L(s.$slots,"default")],2)],64)}}};export{ce as default};