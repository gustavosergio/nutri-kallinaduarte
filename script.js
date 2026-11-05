const toggle = document.getElementById('menu-toggle');
const menu = document.getElementById('mobile-menu');
function closeMenu() { menu.hidden = true; toggle.setAttribute('aria-expanded', 'false'); toggle.setAttribute('aria-label', 'Abrir menu'); }
toggle.addEventListener('click', () => {
  const expanded = toggle.getAttribute('aria-expanded') === 'true';
  menu.hidden = expanded;
  toggle.setAttribute('aria-expanded', String(!expanded));
  toggle.setAttribute('aria-label', expanded ? 'Abrir menu' : 'Fechar menu');
});
menu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape' && !menu.hidden) { closeMenu(); toggle.focus(); } });
window.matchMedia('(min-width: 761px)').addEventListener('change', event => { if (event.matches) closeMenu(); });
document.getElementById('year').textContent = new Date().getFullYear();
