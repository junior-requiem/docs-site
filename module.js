const modules = window.learningModules;
const storageKey = 'fusionPayrollCompletedModules';
const completedModules = new Set(JSON.parse(localStorage.getItem(storageKey) || '[]'));

const sectionNav = document.querySelector('#sectionNav');
const breadcrumb = document.querySelector('#breadcrumb');
const sectionKicker = document.querySelector('#sectionKicker');
const sectionTitle = document.querySelector('#sectionTitle');
const sectionSummary = document.querySelector('#sectionSummary');
const sectionContent = document.querySelector('#sectionContent');
const sectionPager = document.querySelector('#sectionPager');
const transitionTarget = document.querySelector('.content');
const transitionDurationMs = 240;

const params = new URLSearchParams(window.location.search);
const selectedId = params.get('id') || modules[0].id;
let moduleIndex = modules.findIndex((module) => module.id === selectedId);
if (moduleIndex < 0) moduleIndex = 0;

const activeModule = modules[moduleIndex];

const saveProgress = () => {
  localStorage.setItem(storageKey, JSON.stringify([...completedModules]));
};

const renderNav = () => {
  sectionNav.innerHTML = modules
    .map(
      (module) => `
      <li>
        <a href="module.html?id=${module.id}" class="nav-link ${module.id === activeModule.id ? 'active' : ''}">
          ${module.title}
        </a>
      </li>
    `,
    )
    .join('');
};

const setupSectionTransitions = () => {
  if (!transitionTarget) return;

  requestAnimationFrame(() => {
    transitionTarget.classList.add('page-transition-enter-active');
    transitionTarget.classList.remove('page-transition-enter');
  });

  transitionTarget.addEventListener(
    'transitionend',
    () => {
      transitionTarget.classList.remove('page-transition-enter-active');
    },
    { once: true },
  );

  document.addEventListener('click', (event) => {
    const link = event.target.closest('a[href^="module.html?id="]');
    if (!link) return;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    if (event.button !== 0) return;
    if (link.target && link.target !== '_self') return;

    event.preventDefault();
    document.body.classList.add('is-transitioning');

    window.setTimeout(() => {
      window.location.href = link.href;
    }, transitionDurationMs);
  });
};

const renderSection = () => {
  const isComplete = completedModules.has(activeModule.id);
  breadcrumb.textContent = `Documentation > ${activeModule.title}`;
  sectionKicker.textContent = `Section ${activeModule.sections}`;
  sectionTitle.textContent = activeModule.title;
  sectionSummary.textContent = activeModule.summary;

  sectionContent.innerHTML = `
    <h3>What you'll learn</h3>
    <ul class="module-list">
      ${activeModule.topics.map((topic) => `<li>${topic}</li>`).join('')}
    </ul>

    <h3>Learning objectives checklist</h3>
    <ul class="module-objectives">
      ${activeModule.objectives
        .map(
          (objective) => `<li><label><input type="checkbox" class="objective-checkbox" /> ${objective}</label></li>`,
        )
        .join('')}
    </ul>

    <div class="module-actions">
      <button class="module-btn ${isComplete ? 'is-complete' : ''}" id="completeSectionBtn">
        ${isComplete ? 'Completed ✓' : 'Mark section completed'}
      </button>
    </div>
  `;

  const completeSectionBtn = document.querySelector('#completeSectionBtn');
  completeSectionBtn.addEventListener('click', () => {
    if (completedModules.has(activeModule.id)) {
      completedModules.delete(activeModule.id);
      completeSectionBtn.textContent = 'Mark section completed';
      completeSectionBtn.classList.remove('is-complete');
    } else {
      completedModules.add(activeModule.id);
      completeSectionBtn.textContent = 'Completed ✓';
      completeSectionBtn.classList.add('is-complete');
    }
    saveProgress();
  });
};

const renderPager = () => {
  const prev = modules[moduleIndex - 1];
  const next = modules[moduleIndex + 1];

  sectionPager.innerHTML = `
    ${prev ? `<a class="module-btn nav-btn" href="module.html?id=${prev.id}">← ${prev.title}</a>` : '<span></span>'}
    ${next ? `<a class="module-btn nav-btn" href="module.html?id=${next.id}">${next.title} →</a>` : ''}
  `;
};

renderNav();
renderSection();
renderPager();
setupSectionTransitions();
