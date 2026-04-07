const links = document.querySelectorAll('.nav-link');
const sections = [...document.querySelectorAll('.doc-section, .hero')];
const breadcrumb = document.querySelector('.breadcrumb');

const getLinkLabel = (link) => link?.dataset.breadcrumbLabel || link?.textContent?.trim() || 'Overview';

const syncBreadcrumbWithActiveLink = () => {
  const activeLink = document.querySelector('.nav-link.active');
  if (!breadcrumb || !activeLink) {
    return;
  }

  breadcrumb.textContent = `Documentation > ${getLinkLabel(activeLink)}`;
};

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

  syncBreadcrumbWithActiveLink();
};

links.forEach((link) => {
  link.addEventListener('click', () => {
    links.forEach((navLink) => navLink.classList.remove('active'));
    link.classList.add('active');
    syncBreadcrumbWithActiveLink();
  });
});

updateActiveLink();
window.addEventListener('scroll', updateActiveLink);
