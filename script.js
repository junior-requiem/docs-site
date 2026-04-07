const modules = window.learningModules;
const storageKey = 'fusionPayrollCompletedModules';
const completedModules = new Set(JSON.parse(localStorage.getItem(storageKey) || '[]'));

const tocNav = document.querySelector('#tocNav');
const modulesContainer = document.querySelector('#modulesContainer');
const docSearch = document.querySelector('#docSearch');
const noResults = document.querySelector('#noResults');
const completedCount = document.querySelector('#completedCount');
const totalCount = document.querySelector('#totalCount');
const progressFill = document.querySelector('#progressFill');
const progressBar = document.querySelector('#progressBar');

const saveProgress = () => {
  localStorage.setItem(storageKey, JSON.stringify([...completedModules]));
};

const updateProgressUI = () => {
  const done = completedModules.size;
  const total = modules.length;
  const percent = Math.round((done / total) * 100);

  completedCount.textContent = String(done);
  totalCount.textContent = String(total);
  progressFill.style.width = `${percent}%`;
  progressBar.setAttribute('aria-valuenow', String(percent));
};

const createNav = () => {
  tocNav.innerHTML = modules
    .map(
      (module) => `
      <li>
        <a href="module.html?id=${module.id}" class="nav-link" data-module-id="${module.id}">
          ${module.title}
        </a>
      </li>
    `,
    )
    .join('');
};

const createModules = () => {
  modulesContainer.innerHTML = modules
    .map(
      (module) => `
      <section class="module-card" id="${module.id}" data-search="${[
        module.title,
        module.summary,
        ...module.topics,
        ...module.objectives,
      ]
        .join(' ')
        .toLowerCase()}">
        <div class="module-header home-module-header">
          <span class="module-chip">Section ${module.sections}</span>
          <span>
            <h2 class="module-title">${module.title}</h2>
            <p class="module-summary">${module.summary}</p>
          </span>
          <a href="module.html?id=${module.id}" class="module-btn nav-btn">Open section →</a>
        </div>

        <div class="module-content">
          <h3>Topics</h3>
          <ul class="module-list">
            ${module.topics.map((topic) => `<li>${topic}</li>`).join('')}
          </ul>
          <div class="module-actions">
            <button class="module-btn ${completedModules.has(module.id) ? 'is-complete' : ''}" data-complete-module="${module.id}">
              ${completedModules.has(module.id) ? 'Completed ✓' : 'Mark as completed'}
            </button>
          </div>
        </div>
      </section>
    `,
    )
    .join('');
};

const handleCompletion = () => {
  modulesContainer.addEventListener('click', (event) => {
    const button = event.target.closest('[data-complete-module]');
    if (!button) return;

    const moduleId = button.dataset.completeModule;
    if (completedModules.has(moduleId)) {
      completedModules.delete(moduleId);
      button.textContent = 'Mark as completed';
      button.classList.remove('is-complete');
    } else {
      completedModules.add(moduleId);
      button.textContent = 'Completed ✓';
      button.classList.add('is-complete');
    }

    saveProgress();
    updateProgressUI();
  });
};

const applySearch = () => {
  const query = docSearch.value.trim().toLowerCase();
  let visibleCount = 0;

  document.querySelectorAll('.module-card').forEach((card) => {
    const isVisible = !query || card.dataset.search.includes(query);
    card.hidden = !isVisible;

    const navLink = document.querySelector(`.nav-link[data-module-id="${card.id}"]`);
    if (navLink?.parentElement) {
      navLink.parentElement.hidden = !isVisible;
    }

    if (isVisible) visibleCount += 1;
  });

  noResults.hidden = visibleCount > 0;
};

createNav();
createModules();
updateProgressUI();
handleCompletion();
applySearch();

if (docSearch) {
  docSearch.addEventListener('input', applySearch);
  docSearch.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      docSearch.value = '';
      applySearch();
      docSearch.blur();
    }
  });
}
