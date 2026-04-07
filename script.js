const links = document.querySelectorAll('.nav-link');
const sections = [...document.querySelectorAll('.doc-section, .hero')];
const navGroups = [...document.querySelectorAll('.nav-group')];
const enableNavGroupCollapse = false;

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

const initializeNavGroupCollapse = () => {
  if (!enableNavGroupCollapse) {
    return;
  }

  navGroups.forEach((group) => {
    const label = group.querySelector('.nav-group-label');
    if (!label) {
      return;
    }

    label.setAttribute('role', 'button');
    label.setAttribute('tabindex', '0');
    label.setAttribute('aria-expanded', 'true');

    const toggleGroup = () => {
      const isCollapsed = group.classList.toggle('is-collapsed');
      label.setAttribute('aria-expanded', String(!isCollapsed));
    };

    label.addEventListener('click', toggleGroup);
    label.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        toggleGroup();
      }
    });
  });
};

initializeNavGroupCollapse();
