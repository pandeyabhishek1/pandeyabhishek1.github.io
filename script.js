document.getElementById('year').textContent = new Date().getFullYear();
const links = [...document.querySelectorAll('nav a')];
const sections = links.map(link => document.querySelector(link.getAttribute('href')));
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    const entry = entries.find(item => item.isIntersecting);
    if (!entry) return;
    links.forEach(link => {
      if (link.hash === `#${entry.target.id}`) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }, { rootMargin: '-5% 0px -65% 0px', threshold: 0 });
  sections.forEach(section => observer.observe(section));
}
