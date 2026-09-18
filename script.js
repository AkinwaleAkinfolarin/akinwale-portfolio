// Small enhancement: reveal sections as they enter the viewport.
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('show');
  });
}, {threshold: 0.08});
document.querySelectorAll('.project,.about,.skills,.contact,.design-note').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(18px)';
  el.style.transition = 'opacity .65s ease, transform .65s ease';
  observer.observe(el);
});
document.addEventListener('scroll', () => {
  document.querySelectorAll('.show').forEach(el => {
    el.style.opacity = '1';
    el.style.transform = 'translateY(0)';
  });
});
