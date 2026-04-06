const links = document.querySelectorAll('.nav-link');
const sections = [...document.querySelectorAll('.doc-section, .hero')];

const updateActiveLink = () => {
  const offset = window.scrollY + 120;

  let currentId = 'overview';
  for (const section of sections) {
    if (offset >= section.offsetTop) {
      currentId = section.id;
    }
  }

  links.forEach((link) => {
    link.classList.toggle('active', link.getAttribute('href') === `#${currentId}`);
  });
};

updateActiveLink();
window.addEventListener('scroll', updateActiveLink);
