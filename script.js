/* ═══════════════════════════════
   PRINCE LP — script.js
   ═══════════════════════════════ */

/* ── Navbar scroll tint ── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

/* ── Hamburger / mobile menu ── */
const hamburger  = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  const open = mobileMenu.style.display === 'flex';
  mobileMenu.style.display = open ? 'none' : 'flex';
  hamburger.classList.toggle('open', !open);
});

function closeMenu() {
  mobileMenu.style.display = 'none';
  hamburger.classList.remove('open');
}

/* Close menu on outside click */
document.addEventListener('click', (e) => {
  if (!navbar.contains(e.target)) closeMenu();
});

/* ── Course tab switcher ── */
function switchTab(tab, btn) {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('ug-panel').style.display = tab === 'ug' ? 'grid' : 'none';
  document.getElementById('pg-panel').style.display = tab === 'pg' ? 'grid' : 'none';
}

/* ── Scroll reveal (IntersectionObserver) ── */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.reveal, .reveal-left, .reveal-right')
  .forEach(el => revealObserver.observe(el));