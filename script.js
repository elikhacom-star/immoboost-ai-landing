// ImmoBoost AI — Landing interactions
function openDemoModal() {
  const modal = document.getElementById('demoModal');
  if (modal) { modal.setAttribute('aria-hidden', 'false'); document.body.style.overflow = 'hidden'; }
}
function closeDemoModal() {
  const modal = document.getElementById('demoModal');
  if (modal) { modal.setAttribute('aria-hidden', 'true'); document.body.style.overflow = ''; }
}
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeDemoModal(); });

const header = document.getElementById('siteHeader');
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) header.style.boxShadow = '0 4px 20px rgba(0, 61, 122, 0.10)';
  else header.style.boxShadow = 'none';
});

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.pain-card, .feature, .case-card, .price-card').forEach(el => {
    el.style.opacity = '0'; el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity .6s ease, transform .6s ease';
    observer.observe(el);
  });
}
