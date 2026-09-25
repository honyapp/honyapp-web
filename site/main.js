(function () {
  'use strict';

  // Encabezado translúcido al hacer scroll.
  var header = document.querySelector('.header');
  function onScroll() {
    header.classList.toggle('is-scrolled', window.scrollY > 12);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Fotos: se muestran cuando el archivo existe; si no, queda el marcador.
  document.querySelectorAll('.photo img').forEach(function (img) {
    var photo = img.closest('.photo');
    function loaded() { photo.classList.add('has-image'); }
    function failed() { img.remove(); }
    if (img.complete) {
      img.naturalWidth ? loaded() : failed();
    } else {
      img.addEventListener('load', loaded);
      img.addEventListener('error', failed);
    }
  });

  // Aparición suave: solo para lo que aún no está en pantalla.
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced || !('IntersectionObserver' in window)) return;

  document.documentElement.classList.add('js-reveal');
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.remove('is-hidden');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  var pending = [];
  document.querySelectorAll('[data-reveal]').forEach(function (el) {
    if (el.getBoundingClientRect().top < window.innerHeight) return;
    el.classList.add('is-hidden');
    io.observe(el);
    pending.push(el);
  });

  // Respaldo: nada queda oculto si ya se pasó de largo (p. ej. saltos de ancla).
  window.addEventListener('scroll', function () {
    pending = pending.filter(function (el) {
      if (el.getBoundingClientRect().top < window.innerHeight * 0.95) {
        el.classList.remove('is-hidden');
        io.unobserve(el);
        return false;
      }
      return true;
    });
  }, { passive: true });
})();
