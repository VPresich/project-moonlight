var Q=Object.defineProperty;var J=(e,t,s)=>t in e?Q(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var d=(e,t,s)=>(J(e,typeof t!="symbol"?t+"":t,s),s),k=(e,t,s)=>{if(!t.has(e))throw TypeError("Cannot "+s)};var r=(e,t,s)=>(k(e,t,"read from private field"),s?s.call(e):t.get(e)),l=(e,t,s)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,s)},L=(e,t,s,i)=>(k(e,t,"write to private field"),i?i.call(e,s):t.set(e,s),s);var S=(e,t,s)=>(k(e,t,"access private method"),s);import{D as I,B as T,e as $,c as g,b as F,v as V,m as U,a as X,d as z,s as K,i as Z}from"./assets/handle-menu-buttons-53ecb86a.js";import"./assets/vendor-32231325.js";const tt="Muscles",N="filters",A="exercises",et=e=>{let t=8;const s=window.innerWidth;if(s>=1440)t=12;else if(s>=768)switch(e){case N:t=12;break;case A:t=6;break;default:t=8;break}return t},O=(e,t={},s=1,i="")=>{let n={};return t&&(n={...t}),e===A&&i&&(n={...n,keyword:i}),n={...n,page:s,limit:et(N)},`${e}?${new URLSearchParams(n).toString()}`};async function st(e,t){const s=new I(T),i=O("filters",e,t);try{return await s.objectGetRequest(i)}catch{}}function it(e=[]){return e.reduce((t,{imgUrl:s,name:i,filter:n})=>t+`
      <li class="filter-card" data-filter">
          <img src="${s}" alt="Image of: ${n}"/>
          <div class="filter-label">
          <p class="filter-name">${i}</p>
          <p class="filter-type">${n}</p>            
          </div>
      </li>
      `,"")}function w(e,t){return`<div class="rating-container">
                <p class="ex-card-rating">${e}</p>
                <svg
                  class="rating-star-icon"
                  width="18"
                  height="18"
                  aria-label="star icon"
                  fill = "#EEA10C";
                >
                  <use href="${t}#icon-star"></use>
                </svg>
              </div>`}const E=(e,t,s)=>{t.textContent="",t.classList.add("visually-hidden");let i="";e.length,i=s(e,w),i=s(e,w),t.innerHTML="",t.insertAdjacentHTML("beforeend",i),t.classList.remove("visually-hidden")},nt=(e,t)=>E(t,e,it);async function B(e={},t=1,s=""){const i=new I(T),n=O(A,e,t,s);try{return await i.objectGetRequest(n)}catch{}}const rt=(e,t)=>E(t,e,$);var o,p,h,u,b,G,v,q;class ot{constructor({galleryHandle:t,filter:s,dotsSelector:i,dotDefaultClass:n,dotActiveClass:c}){l(this,b);l(this,v);d(this,"currentPage",1);d(this,"totalPages",0);l(this,o,void 0);l(this,p,10);l(this,h,"pagination-dot");l(this,u,"active-paggination-dot");d(this,"galleryHandle");d(this,"filter",{filter:""});d(this,"keyWord","");this.galleryHandle=t,this.filter=s,L(this,u,c),L(this,h,n),L(this,o,document.querySelector(i)),r(this,o).addEventListener("click",this.onDotsClick.bind(this))}init(t,s,i=0){this.galleryHandle=t,this.totalPages=i>r(this,p)?r(this,p):i,this.filter=s,S(this,b,G).call(this)}reset(t,s,i=1,n="",c=0){this.galleryHandle=t,this.totalPages=c,this.currentPage=i,this.filter=s,this.keyWord=n,S(this,v,q).call(this)}destroy(){r(this,o).removeEventListener("click",this.onDotsClick.bind(this)),S(this,v,q).call(this)}async updateGallery(){try{await this.galleryHandle(this.filter,this.currentPage,this.keyWord,this.totalPages)}catch(t){console.log(t.message)}}onDotsClick(t){const s=t.target;if(!s.classList.contains(r(this,h)))return;const i=parseInt(s.dataset.ind,10);this.currentPage=i,this.updateDisplayDots(),this.updateGallery()}updateDisplayDots(){const t=r(this,o).querySelectorAll("li");t.forEach(s=>{s.classList.remove(r(this,u))}),t[this.currentPage-1].classList.add(r(this,u))}}o=new WeakMap,p=new WeakMap,h=new WeakMap,u=new WeakMap,b=new WeakSet,G=function(){r(this,o).innerHTML="";let t="";for(let s=0;s<this.totalPages;s+=1)t+=`
       <li class="${r(this,h)}" data-ind="${s+1}">${s+1}</li>
      `;r(this,o).innerHTML=t,r(this,o).children[this.currentPage-1].classList.add(r(this,u))},v=new WeakSet,q=function(){r(this,o).innerHTML=""};const _=e=>{e.innerHTML="",e.classList.add("visually-hidden")};function at(){return`<p class="ex-no-elements">
              Unfortunately,  <span class="grey-text"> no results</span> were
              found. You may want to consider other search options to find the
              exercise you are looking for. Our range is wide and you have the
              opportunity to find more options that suit your needs.
          </p>`}const D="filter-button-active";let f={};const C=document.querySelector(".exercise-filter-title"),W=document.querySelector(".filters-buttons"),M=document.querySelector(".exercise-filters-list"),P=document.querySelector(".exercises-gallery"),H=document.querySelector(".form-for-searching-input"),ct=document.querySelector(".searching-input");W.addEventListener("click",lt);M.addEventListener("click",ut);H.addEventListener("submit",yt);const a=new ot({galleryHandle:y,dotsSelector:".pagination-dots",dotDefaultClass:"pagination-dot",dotActiveClass:"active-pagination-dot"});function lt(e){if(e.target.tagName!=="BUTTON")return;e.preventDefault();const t=e.target.dataset.filter;H.classList.add("visually-hidden"),a.reset(y,t,1,0),pt(),y({filter:t}),ft(e.target)}function y(e={filter:tt}){st(e,a.currentPage).then(t=>{const s=t.results;_(P),nt(M,s);const i=t.totalPages?t.totalPages:0;a.init(y,e,i)}).catch(t=>{console.log(t.message)})}function ut(e){e.preventDefault(),e.target;const t=e.target.closest("li");if(!t)return;const s={},i=t.querySelector(".filter-name"),n=t.querySelector(".filter-type");if(H.classList.remove("visually-hidden"),n&&n){const c=i.textContent.toLowerCase(),R=n.textContent.toLowerCase();if(R==="")return;s[R]=c}vt(i.textContent),a.reset(m,s,1,0),m(s)}function m(e){B(e,a.currentPage).then(t=>{_(M),rt(P,t.results);const s=t.totalPages?t.totalPages:0;a.init(m,e,s)}).catch(t=>{console.log(t.message),g(`Error fetching images: ${t.message}`)})}function dt(){f=W.querySelector("BUTTON"),f&&f.classList.add(D)}function ft(e){f&&f.classList.remove(D),e&&e.classList.add(D),f=e}function ht(){const e=document.querySelector(".filter-button-active"),t=document.querySelector(".chapter-text"),s={};return s[e.dataset.filter.toLowerCase()]=t.textContent.toLowerCase(),s}function gt(){return ct.value.trim().toLowerCase()}function yt(e){e.preventDefault();const t=gt();if(t===""){F("Please fill in the search field");return}const s=ht();a.reset(m,s,1,t,0),mt(s,t)}function mt(e,t){B(e,a.currentPage,t).then(s=>{s.results.length===0?E([],P,at):E(s.results,P,$);const i=s.totalPages?s.totalPages:0;a.init(m,e,i)}).catch(s=>{console.log(s.message)})}function pt(){C.textContent.indexOf("/")!==-1&&(C.textContent=C.textContent.split("/")[0])}function vt(e){const t=` / 
  <span class="chapter-text">${e}</span>`;C.insertAdjacentHTML("beforeend",t)}dt();y();const Lt="We're excited to have you on board! 🎉 Thank you for subscribing to new exercises on Energy Flow. You've just taken a significant step towards improving your fitness and well-being.",St="Subscription already exists",Ct="Please, enter a valid email address",Et="Sorry! Something is wrong",x=document.querySelector(".footer-subscription"),Pt=x.querySelector(".input-footer");x.addEventListener("submit",xt);function xt(e){e.preventDefault();const t=Pt.value.trim();if(!t){g(NO_EMAIL);return}if(!V(t)){g(Ct),x.reset();return}const s={method:"POST",body:JSON.stringify({email:t}),headers:{"Content-Type":"application/json"}};fetch(`${T}subscription`,s).then(i=>{i.status>=200&&i.status<300&&F(Lt),i.status===409&&g(St)}).catch(i=>{console.log(i),g(Et)}).finally(()=>{x.reset()})}const j=document.querySelectorAll(".button-home"),Y=document.querySelectorAll(".button-favorites");U(j,Y);Y.forEach(e=>{e.addEventListener("click",t=>{U([e],j)})});X();const bt={iconURL:Z,iconContainerClass:"social-item-footer",iconLinkClass:"social-link-footer",iconClass:"social-icon"},kt=document.querySelector(".social-list");z(kt,bt,K);
//# sourceMappingURL=commonHelpers2.js.map
