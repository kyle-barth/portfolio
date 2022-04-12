import{S as Z,i as J,s as K,e as d,k as C,t as I,c as m,a as p,d as u,m as V,h as A,b as n,U as se,Z as oe,g as M,H as i,Q as ne,E as G,_ as ie,w as N,x as W,y as X,q as Y,o as ee,B as te}from"../chunks/index-e3e25309.js";import{C as ce}from"../chunks/Container-ee799066.js";import"../chunks/index-10c503ec.js";function R(a,t,r){const e=a.slice();return e[3]=t[r],e[5]=r,e}function U(a){let t,r,e,l,c,s,y,_,v,f,w,E=a[3].name+"",g,$,o,h,H,D,b,S=a[3].desc+"",q,z,le,F,B;function re(){return a[1](a[3])}function ae(){return a[2](a[5])}return{c(){t=d("div"),r=d("a"),e=d("img"),_=C(),v=d("div"),f=d("div"),w=d("h1"),g=I(E),$=C(),o=d("a"),h=I("link \u2192"),D=C(),b=d("p"),q=I(S),z=C(),this.h()},l(x){t=m(x,"DIV",{class:!0});var k=p(t);r=m(k,"A",{class:!0,href:!0,target:!0});var T=p(r);e=m(T,"IMG",{id:!0,width:!0,height:!0,decoding:!0,class:!0,src:!0,alt:!0}),T.forEach(u),_=V(k),v=m(k,"DIV",{class:!0});var P=p(v);f=m(P,"DIV",{class:!0});var j=p(f);w=m(j,"H1",{});var L=p(w);g=A(L,E),L.forEach(u),$=V(j),o=m(j,"A",{class:!0,href:!0,target:!0});var O=p(o);h=A(O,"link \u2192"),O.forEach(u),j.forEach(u),D=V(P),b=m(P,"P",{});var Q=p(b);q=A(Q,S),Q.forEach(u),P.forEach(u),z=V(k),k.forEach(u),this.h()},h(){n(e,"id",l="img"+a[5]),n(e,"width","724px"),n(e,"height","452.5px"),n(e,"decoding","async"),n(e,"class","-z-50 opacity-0 transition-all sm:hover:scale-105"),se(e.src,c=re())||n(e,"src",c),n(e,"alt",s=a[3].img.alt),n(r,"class","z-10"),n(r,"href",y=a[3].url),n(r,"target","_blank"),n(o,"class","button glassmorphic text-lg svelte-789dby"),n(o,"href",H=a[3].url),n(o,"target","_blank"),n(f,"class","flex flex-row items-center justify-between pb-5 text-3xl"),n(v,"class","z-30 bg-gray-800 p-5"),n(t,"class",le=oe(a[5]===a[0].length-1?"card":"card mb-10")+" svelte-789dby")},m(x,k){M(x,t,k),i(t,r),i(r,e),i(t,_),i(t,v),i(v,f),i(f,w),i(w,g),i(f,$),i(f,o),i(o,h),i(v,D),i(v,b),i(b,q),i(t,z),F||(B=ne(e,"load",ae),F=!0)},p(x,k){a=x},d(x){x&&u(t),F=!1,B()}}}function ue(a){let t,r=a[0],e=[];for(let l=0;l<r.length;l+=1)e[l]=U(R(a,r,l));return{c(){t=d("div");for(let l=0;l<e.length;l+=1)e[l].c();this.h()},l(l){t=m(l,"DIV",{class:!0});var c=p(t);for(let s=0;s<e.length;s+=1)e[s].l(c);c.forEach(u),this.h()},h(){n(t,"class","flex flex-wrap pt-10")},m(l,c){M(l,t,c);for(let s=0;s<e.length;s+=1)e[s].m(t,null)},p(l,[c]){if(c&1){r=l[0];let s;for(s=0;s<r.length;s+=1){const y=R(l,r,s);e[s]?e[s].p(y,c):(e[s]=U(y),e[s].c(),e[s].m(t,null))}for(;s<e.length;s+=1)e[s].d(1);e.length=r.length}},i:G,o:G,d(l){l&&u(t),ie(e,l)}}}function fe(a){document.getElementById(a).classList.remove("opacity-0")}function he(a){return[[{name:"MRVF",url:"https://www.mrvf.io",desc:"A static website utilising FFmpeg.wasm to perform basic video formatting all client side in the browser.",img:{url:"/mrvf-preview.png",alt:"preview image of www.mrvf.io"}},{name:"Mandelbrot",url:"https://mandelbrot-bice.vercel.app",desc:"Experiment in utilising web workers to prevent jank from blocking the main thread.",img:{url:"/mandle-preview.png",alt:"preview image of https://mandelbrot-bice.vercel.app"}},{name:"Otter",url:"https://otter-phi.vercel.app/",desc:"A simple local storage MarkDown note app written with Svelte, TypeScript, TailwindCSS, bundled with Vite and deployed via Vercel.",img:{url:"/otter-preview.png",alt:"preview image of https://otter-phi.vercel.app/"}}],l=>l.img.url,l=>fe("img"+l)]}class de extends Z{constructor(t){super(),J(this,t,he,ue,K,{})}}function me(a){let t,r,e,l,c,s,y,_,v,f,w,E,g,$;return g=new de({}),{c(){t=d("div"),r=d("a"),e=I("\u2190 back"),l=C(),c=d("h1"),s=I("Portfolio."),y=C(),_=d("p"),v=I(`Check out some of my favourite projects I've worked on listed below, otherwise there is much
			much more on my \xA0 `),f=d("a"),w=I("GitHub \u2192"),E=C(),N(g.$$.fragment),this.h()},l(o){t=m(o,"DIV",{class:!0});var h=p(t);r=m(h,"A",{href:!0,class:!0});var H=p(r);e=A(H,"\u2190 back"),H.forEach(u),l=V(h),c=m(h,"H1",{class:!0});var D=p(c);s=A(D,"Portfolio."),D.forEach(u),y=V(h),_=m(h,"P",{class:!0});var b=p(_);v=A(b,`Check out some of my favourite projects I've worked on listed below, otherwise there is much
			much more on my \xA0 `),f=m(b,"A",{class:!0,href:!0});var S=p(f);w=A(S,"GitHub \u2192"),S.forEach(u),b.forEach(u),h.forEach(u),E=V(o),W(g.$$.fragment,o),this.h()},h(){n(r,"href","/"),n(r,"class","svelte-v134ly"),n(c,"class","text-5xl svelte-v134ly"),n(f,"class","text-blue-600 hover:underline svelte-v134ly"),n(f,"href","https://github.com/kyle-barth/"),n(_,"class","svelte-v134ly"),n(t,"class","spacing flex flex-col svelte-v134ly")},m(o,h){M(o,t,h),i(t,r),i(r,e),i(t,l),i(t,c),i(c,s),i(t,y),i(t,_),i(_,v),i(_,f),i(f,w),M(o,E,h),X(g,o,h),$=!0},p:G,i(o){$||(Y(g.$$.fragment,o),$=!0)},o(o){ee(g.$$.fragment,o),$=!1},d(o){o&&u(t),o&&u(E),te(g,o)}}}function pe(a){let t,r;return t=new ce({props:{fade:!0,$$slots:{default:[me]},$$scope:{ctx:a}}}),{c(){N(t.$$.fragment)},l(e){W(t.$$.fragment,e)},m(e,l){X(t,e,l),r=!0},p(e,[l]){const c={};l&1&&(c.$$scope={dirty:l,ctx:e}),t.$set(c)},i(e){r||(Y(t.$$.fragment,e),r=!0)},o(e){ee(t.$$.fragment,e),r=!1},d(e){te(t,e)}}}class we extends Z{constructor(t){super(),J(this,t,null,pe,K,{})}}export{we as default};
