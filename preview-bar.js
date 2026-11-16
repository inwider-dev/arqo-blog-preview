/* Local DEMO: navigation only, no forms, quiz, telemetry or network. */
(() => {
  const bar = document.getElementById('preview-mbar');
  const target = document.getElementById('zayavka');
  if (!bar || !target) return;
  const mobile = window.matchMedia('(max-width: 760px)');
  function update() {
    const range = document.documentElement.scrollHeight - window.innerHeight;
    const rect = target.getBoundingClientRect();
    const visible = rect.top < window.innerHeight && rect.bottom > 0;
    bar.hidden = !mobile.matches || range <= 0 || window.scrollY / range < 0.30 || visible;
  }
  window.addEventListener('scroll', update, {passive: true});
  window.addEventListener('resize', update);
  window.addEventListener('load', update);
  new IntersectionObserver(update).observe(target);
  update();
})();
