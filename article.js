// Local navigation only. No requests, storage, forms or analytics.
const burger=document.querySelector('.t-menu-burger');
const menu=document.getElementById('nav4809973601');
burger?.addEventListener('click',()=>{const open=burger.getAttribute('aria-expanded')!=='true';burger.setAttribute('aria-expanded',String(open));menu.classList.toggle('mobile-menu-open',open)});
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&burger){burger.setAttribute('aria-expanded','false');menu.classList.remove('mobile-menu-open')}});
const headings=[...document.querySelectorAll('.article-body h2[id]')];
const observer=new IntersectionObserver(entries=>{for(const entry of entries){if(entry.isIntersecting){document.querySelectorAll('.article-rail a[aria-current]').forEach(a=>a.removeAttribute('aria-current'));document.querySelector(`.article-rail a[href="#${entry.target.id}"]`)?.setAttribute('aria-current','location')}}},{rootMargin:'-15% 0px -65% 0px'});
headings.forEach(h=>observer.observe(h));
