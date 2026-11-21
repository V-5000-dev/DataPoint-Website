const base = new URL('..', document.currentScript.src).href;

fetch(base + 'header.html')
  .then(res => res.text())
  .then(html => {
    document.getElementById('header').innerHTML = html;
  });

const footer = document.createElement('footer');
footer.className = 'site-footer';
footer.innerHTML = 'Developed by <a href="https://github.com/V-5000-dev" target="_blank" rel="noopener">V-5000-Dev / Uncoded</a>';
document.body.appendChild(footer);

document.addEventListener('click', e => {
  const dropdown = document.getElementById('projects-dropdown');
  if (!dropdown) return;

  const trigger = e.target.closest('.dropdown-trigger');
  if (trigger) {
    const open = dropdown.classList.toggle('open');
    trigger.setAttribute('aria-expanded', open);
  } else if (!dropdown.contains(e.target)) {
    dropdown.classList.remove('open');
  }
});