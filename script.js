const links = document.querySelectorAll('.nav-link');
const sections = [...document.querySelectorAll('.doc-section, .hero')];
const docSearch = document.querySelector('#docSearch');
const docSections = [...document.querySelectorAll('.doc-section')];
const noResults = document.querySelector('#noResults');

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

const normalize = (value = '') => value.toLowerCase().trim();

const filterSections = () => {
  if (!docSearch || !noResults) {
    return;
  }

  const query = normalize(docSearch.value);
  let matches = 0;

  docSections.forEach((section) => {
    const headingText = normalize(section.querySelector('h2')?.textContent || '');
    const listText = normalize(
      [...section.querySelectorAll('li')]
        .map((item) => item.textContent || '')
        .join(' '),
    );
    const shouldShow = !query || headingText.includes(query) || listText.includes(query);

    section.hidden = !shouldShow;
    if (shouldShow) {
      matches += 1;
    }
  });

  noResults.hidden = matches > 0;
};

if (docSearch) {
  docSearch.addEventListener('input', filterSections);
  docSearch.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      docSearch.value = '';
      filterSections();
      docSearch.blur();
    }
  });
}
