(function(){
'use strict';
const obs=new IntersectionObserver(e=>{e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('v');obs.unobserve(x.target)}})},{rootMargin:'0px 0px -50px',threshold:0.1});
document.addEventListener('DOMContentLoaded',()=>{document.querySelectorAll('.anim,.anim-l,.anim-r,.stg').forEach(el=>obs.observe(el))});
const hdr=document.getElementById('hdr');
window.addEventListener('scroll',()=>{hdr&&(scrollY>40?hdr.classList.add('scrolled'):hdr.classList.remove('scrolled'));const b=document.getElementById('btt');b&&(scrollY>400?b.classList.add('visible'):b.classList.remove('visible'))},{passive:true});
const mt=document.getElementById('mobToggle'),mn=document.getElementById('mobNav'),mo=document.getElementById('mobOverlay'),mc=document.getElementById('mobClose');
function openM(){mn.classList.add('open');mo.classList.add('open');document.body.style.overflow='hidden'}
function closeM(){mn.classList.remove('open');mo.classList.remove('open');document.body.style.overflow=''}
mt&&mt.addEventListener('click',openM);mc&&mc.addEventListener('click',closeM);mo&&mo.addEventListener('click',closeM);
document.getElementById('btt')?.addEventListener('click',()=>scrollTo({top:0,behavior:'smooth'}));
let cc=0;
document.addEventListener('click',function(e){const b=e.target.closest('.btn-cart');if(!b)return;e.preventDefault();const o=b.innerHTML;b.innerHTML='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg> Adding...';b.disabled=true;
const rect=b.getBoundingClientRect();
for(let i=0;i<3;i++){const p=document.createElement('div');p.style.cssText=`position:fixed;z-index:10000;pointer-events:none;left:${rect.left+rect.width/2+(Math.random()-0.5)*50}px;top:${rect.top}px;animation:pawBurst 0.8s ease-out forwards;animation-delay:${i*0.12}s`;p.innerHTML='<svg width="18" height="18" viewBox="0 0 24 24" fill="'+getComputedStyle(document.documentElement).getPropertyValue('--gold')+'"><circle cx="12" cy="6" r="3"/><circle cx="6" cy="14" r="2.5"/><circle cx="18" cy="14" r="2.5"/><ellipse cx="12" cy="19" rx="5" ry="4"/></svg>';document.body.appendChild(p);setTimeout(()=>p.remove(),900)}
setTimeout(()=>{cc++;b.innerHTML='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> Added!';b.style.background='var(--green)';toast('Added to cart!');document.querySelectorAll('.badge-count').forEach(x=>x.textContent=cc);setTimeout(()=>{b.innerHTML=o;b.style.background='';b.disabled=false},1800)},700)});
function toast(m){const c=document.getElementById('toastBox');if(!c)return;const t=document.createElement('div');t.className='toast';t.innerHTML=`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--green)" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="9 12 12 15 16 10"/></svg><span class="toast-msg">${m}</span>`;c.appendChild(t);requestAnimationFrame(()=>t.classList.add('show'));setTimeout(()=>{t.classList.remove('show');setTimeout(()=>t.remove(),400)},3000)}
window.toast=toast;
// Add pawBurst keyframe dynamically
const s=document.createElement('style');s.textContent='@keyframes pawBurst{0%{opacity:1;transform:scale(0)}50%{opacity:1;transform:scale(1.4) translateY(-20px)}100%{opacity:0;transform:scale(2) translateY(-50px) rotate(30deg)}}';document.head.appendChild(s);
})();
