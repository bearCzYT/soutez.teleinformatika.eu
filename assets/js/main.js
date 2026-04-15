// Soutěž tvůrčích nástrojů — sdílené JS
(function() {
  const navLinks = document.querySelectorAll('.nav-links a');
  const path = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();
  navLinks.forEach(a => {
    const href = a.getAttribute('href')?.toLowerCase() || '';
    if ((path === '' || path === 'index.html') && href.endsWith('index.html')) a.classList.add('active');
    else if (href && path.endsWith(href)) a.classList.add('active');
  });

  // Volitelné: plynulé skrolování na kotvy na stejné stránce
  document.addEventListener('click', (e) => {
    const t = e.target;
    if (t instanceof HTMLElement) {
      const a = t.closest('a[href^="#"]');
      if (a) {
        const id = a.getAttribute('href');
        if (id && id.length > 1) {
          const el = document.querySelector(id);
          if (el) {
            e.preventDefault();
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      }
    }
  });
})();
