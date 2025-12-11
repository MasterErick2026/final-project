// script.js - Interações simples: toggle boas-vindas e smooth scroll

document.addEventListener('DOMContentLoaded', function () {
  const toggleBtn = document.getElementById('toggle-welcome');
  const welcomeBox = document.getElementById('welcome-box');

  if (toggleBtn && welcomeBox) {
    toggleBtn.addEventListener('click', () => {
      const isHidden = welcomeBox.style.display === 'none';
      welcomeBox.style.display = isHidden ? 'block' : 'none';
      toggleBtn.textContent = isHidden ? 'Ocultar boas-vindas' : 'Mostrar boas-vindas';
      toggleBtn.setAttribute('aria-expanded', String(isHidden));
    });
  }

  // Smooth scroll for quick-nav anchors
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href.length > 1) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) target.scrollIntoView({behavior: 'smooth', block: 'start'});
      }
    });
  });
});
