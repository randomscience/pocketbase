import{S as Z,i as E,s as G,F as I,c as R,m as T,t as P,a as q,d as j,C as J,E as U,g as _,k as W,n as B,o as m,G as D,H as K,A as O,p as M,e as b,v as y,b as C,f as p,q as N,h as $,r as H,u as Q,x as F,w as V,y as z}from"./index-il0YAsBL.js";function X(i){let e,s,l,n,t,o,c,r,a,u,v,g,k,h,d=i[4]&&S(i);return o=new M({props:{class:"form-field required",name:"password",$$slots:{default:[x,({uniqueId:f})=>({10:f}),({uniqueId:f})=>f?1024:0]},$$scope:{ctx:i}}}),r=new M({props:{class:"form-field required",name:"passwordConfirm",$$slots:{default:[ee,({uniqueId:f})=>({10:f}),({uniqueId:f})=>f?1024:0]},$$scope:{ctx:i}}}),{c(){e=b("form"),s=b("div"),l=b("h5"),n=y(`Zmień hasło
                    `),d&&d.c(),t=C(),R(o.$$.fragment),c=C(),R(r.$$.fragment),a=C(),u=b("button"),v=b("span"),v.textContent="Ustaw nowe hasło",p(s,"class","content txt-center m-b-base"),p(v,"class","txt"),p(u,"type","submit"),p(u,"class","btn btn-lg btn-block"),u.disabled=i[2],N(u,"btn-loading",i[2])},m(f,w){_(f,e,w),$(e,s),$(s,l),$(l,n),d&&d.m(l,null),$(e,t),T(o,e,null),$(e,c),T(r,e,null),$(e,a),$(e,u),$(u,v),g=!0,k||(h=H(e,"submit",Q(i[5])),k=!0)},p(f,w){f[4]?d?d.p(f,w):(d=S(f),d.c(),d.m(l,null)):d&&(d.d(1),d=null);const A={};w&3073&&(A.$$scope={dirty:w,ctx:f}),o.$set(A);const L={};w&3074&&(L.$$scope={dirty:w,ctx:f}),r.$set(L),(!g||w&4)&&(u.disabled=f[2]),(!g||w&4)&&N(u,"btn-loading",f[2])},i(f){g||(P(o.$$.fragment,f),P(r.$$.fragment,f),g=!0)},o(f){q(o.$$.fragment,f),q(r.$$.fragment,f),g=!1},d(f){f&&m(e),d&&d.d(),j(o),j(r),k=!1,h()}}}function Y(i){let e,s,l,n,t;return{c(){e=b("div"),e.innerHTML='<div class="icon"><i class="ri-checkbox-circle-line"></i></div> <div class="content txt-bold"><p>Hasło zostało zmienione</p> <p>Możesz zalogować się używając nowego hasła</p></div>',s=C(),l=b("button"),l.textContent="Zamknij",p(e,"class","alert alert-success"),p(l,"type","button"),p(l,"class","btn btn-transparent btn-block")},m(o,c){_(o,e,c),_(o,s,c),_(o,l,c),n||(t=H(l,"click",i[7]),n=!0)},p:F,i:F,o:F,d(o){o&&(m(e),m(s),m(l)),n=!1,t()}}}function S(i){let e,s,l;return{c(){e=y("dla adresu "),s=b("strong"),l=y(i[4])},m(n,t){_(n,e,t),_(n,s,t),$(s,l)},p(n,t){t&16&&V(l,n[4])},d(n){n&&(m(e),m(s))}}}function x(i){let e,s,l,n,t,o,c,r;return{c(){e=b("label"),s=y("Nowe hasło"),n=C(),t=b("input"),p(e,"for",l=i[10]),p(t,"type","password"),p(t,"id",o=i[10]),t.required=!0,t.autofocus=!0},m(a,u){_(a,e,u),$(e,s),_(a,n,u),_(a,t,u),z(t,i[0]),t.focus(),c||(r=H(t,"input",i[8]),c=!0)},p(a,u){u&1024&&l!==(l=a[10])&&p(e,"for",l),u&1024&&o!==(o=a[10])&&p(t,"id",o),u&1&&t.value!==a[0]&&z(t,a[0])},d(a){a&&(m(e),m(n),m(t)),c=!1,r()}}}function ee(i){let e,s,l,n,t,o,c,r;return{c(){e=b("label"),s=y("Potwierdź nowe hasło"),n=C(),t=b("input"),p(e,"for",l=i[10]),p(t,"type","password"),p(t,"id",o=i[10]),t.required=!0},m(a,u){_(a,e,u),$(e,s),_(a,n,u),_(a,t,u),z(t,i[1]),c||(r=H(t,"input",i[9]),c=!0)},p(a,u){u&1024&&l!==(l=a[10])&&p(e,"for",l),u&1024&&o!==(o=a[10])&&p(t,"id",o),u&2&&t.value!==a[1]&&z(t,a[1])},d(a){a&&(m(e),m(n),m(t)),c=!1,r()}}}function te(i){let e,s,l,n;const t=[Y,X],o=[];function c(r,a){return r[3]?0:1}return e=c(i),s=o[e]=t[e](i),{c(){s.c(),l=U()},m(r,a){o[e].m(r,a),_(r,l,a),n=!0},p(r,a){let u=e;e=c(r),e===u?o[e].p(r,a):(W(),q(o[u],1,1,()=>{o[u]=null}),B(),s=o[e],s?s.p(r,a):(s=o[e]=t[e](r),s.c()),P(s,1),s.m(l.parentNode,l))},i(r){n||(P(s),n=!0)},o(r){q(s),n=!1},d(r){r&&m(l),o[e].d(r)}}}function le(i){let e,s;return e=new I({props:{nobranding:!0,$$slots:{default:[te]},$$scope:{ctx:i}}}),{c(){R(e.$$.fragment)},m(l,n){T(e,l,n),s=!0},p(l,[n]){const t={};n&2079&&(t.$$scope={dirty:n,ctx:l}),e.$set(t)},i(l){s||(P(e.$$.fragment,l),s=!0)},o(l){q(e.$$.fragment,l),s=!1},d(l){j(e,l)}}}function se(i,e,s){let l,{params:n}=e,t="",o="",c=!1,r=!1;async function a(){if(c)return;s(2,c=!0);const k=new D("../");try{const h=K(n==null?void 0:n.token);await k.collection(h.collectionId).confirmPasswordReset(n==null?void 0:n.token,t,o),s(3,r=!0)}catch(h){O.error(h)}s(2,c=!1)}const u=()=>window.close();function v(){t=this.value,s(0,t)}function g(){o=this.value,s(1,o)}return i.$$set=k=>{"params"in k&&s(6,n=k.params)},i.$$.update=()=>{i.$$.dirty&64&&s(4,l=J.getJWTPayload(n==null?void 0:n.token).email||"")},[t,o,c,r,l,a,n,u,v,g]}class oe extends Z{constructor(e){super(),E(this,e,se,le,G,{params:6})}}export{oe as default};
