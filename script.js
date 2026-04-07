const modules = [
  {
    id: 'foundation-setup',
    sections: '1, 24',
    title: 'Foundation & Setup',
    summary: 'Establish enterprise structures, payroll definitions, and baseline controls.',
    topics: ['Enterprise and legal employer setup', 'Payroll definitions and calendar design', 'Initial implementation checklist'],
    objectives: ['Map organization model to payroll model', 'Prepare prerequisite configuration artifacts'],
  },
  {
    id: 'payroll-elements',
    sections: '2',
    title: 'Payroll Elements',
    summary: 'Configure earnings, deductions, and eligibility behavior through reusable elements.',
    topics: ['Element design principles', 'Input values and processing rules', 'Element entries lifecycle'],
    objectives: ['Differentiate recurring vs nonrecurring entries', 'Build a clean element catalog'],
  },
  {
    id: 'payroll-processing',
    sections: '3',
    title: 'Payroll Processing',
    summary: 'Run and monitor payroll cycles from pre-calc to post-processing validation.',
    topics: ['Payroll flow sequencing', 'QuickPay and retry patterns', 'Run diagnostics and checkpoints'],
    objectives: ['Execute cycle with fewer re-runs', 'Use flow status for issue triage'],
  },
  {
    id: 'payments-banking',
    sections: '4',
    title: 'Payments & Banking',
    summary: 'Control payment methods, payment process profiles, and disbursement outputs.',
    topics: ['Personal payment methods', 'Third-party and direct deposit handling', 'Payment file generation'],
    objectives: ['Validate banking configuration quickly', 'Prepare payment outputs for treasury'],
  },
  {
    id: 'costing-accounting',
    sections: '5',
    title: 'Costing & Accounting',
    summary: 'Translate payroll results into finance-ready costing and journal integrations.',
    topics: ['Cost allocation hierarchy', 'Subledger transfer strategy', 'Reconciliation with GL'],
    objectives: ['Reduce costing exceptions', 'Design auditable accounting flow'],
  },
  {
    id: 'balances',
    sections: '6',
    title: 'Balances',
    summary: 'Use balances for statutory reporting, retro logic, and audit verification.',
    topics: ['Dimensions and contexts', 'Balance feeds', 'Balance initialization and tuning'],
    objectives: ['Pick the right balance dimension', 'Prevent duplicate/incorrect feeds'],
  },
  {
    id: 'deductions',
    sections: '7',
    title: 'Deductions',
    summary: 'Implement pre-tax, after-tax, voluntary, and involuntary deduction models.',
    topics: ['Priority and arrears processing', 'Court orders and garnishments', 'Benefit-linked deductions'],
    objectives: ['Model deduction recovery rules', 'Validate deduction sequencing outcomes'],
  },
  {
    id: 'tax-compliance',
    sections: '8',
    title: 'Tax Compliance',
    summary: 'Maintain payroll tax configuration aligned with jurisdiction and legal structure.',
    topics: ['Tax card administration', 'SIT/FIT/FICA scenarios', 'Audit and exception handling'],
    objectives: ['Minimize tax withholding defects', 'Prepare compliance support evidence'],
  },
  {
    id: 'year-end-processing',
    sections: '9',
    title: 'Year-End Processing',
    summary: 'Coordinate year-end cutover tasks, filings, and controlled close procedures.',
    topics: ['Year-end calendar planning', 'Final run sequencing', 'Statement and archive readiness'],
    objectives: ['Plan risk-controlled year-end activities', 'Define ownership matrix for close'],
  },
  {
    id: 'reporting',
    sections: '10',
    title: 'Reporting',
    summary: 'Build payroll intelligence through OTBI, BI Publisher, and operational analytics.',
    topics: ['Delivered payroll reports', 'Custom report strategy', 'Data access and scheduling'],
    objectives: ['Choose right reporting tool per use case', 'Deliver role-based insights'],
  },
  {
    id: 'time-labor-integration',
    sections: '11',
    title: 'Time & Labor Integration',
    summary: 'Integrate approved time data into payroll with compliant transformation logic.',
    topics: ['Time card to payroll mapping', 'Absence impacts', 'Retro and recalculation behavior'],
    objectives: ['Reduce imported time exceptions', 'Create reliable handoff between teams'],
  },
  {
    id: 'security-data-access',
    sections: '12',
    title: 'Security & Data Access',
    summary: 'Apply robust security profiles, privileges, and segregation of duties.',
    topics: ['Role design for payroll teams', 'Data security by LDG/BU', 'Audit strategy and controls'],
    objectives: ['Prevent over-provisioned access', 'Align security with compliance requirements'],
  },
  {
    id: 'redwood-payroll-activity-center',
    sections: '13',
    title: 'Redwood Payroll Activity Center',
    summary: 'Adopt Redwood UX work areas to improve payroll specialist productivity.',
    topics: ['Activity Center navigation', 'Work queue actions', 'Redwood rollout considerations'],
    objectives: ['Map legacy tasks into Redwood flows', 'Identify adoption and training needs'],
  },
  {
    id: 'retiree-payroll',
    sections: '14',
    title: 'Retiree Payroll',
    summary: 'Design payroll treatment for retiree populations and special earning streams.',
    topics: ['Retiree-specific relationships', 'Benefit continuation impacts', 'Statement/report requirements'],
    objectives: ['Separate retiree logic from active worker rules', 'Protect ongoing payment accuracy'],
  },
  {
    id: 'formulas-calculations',
    sections: '15',
    title: 'Formulas & Calculations',
    summary: 'Author Fast Formula logic for complex calculations and policy enforcement.',
    topics: ['Formula types and contexts', 'Debug and trace methods', 'Reusable formula patterns'],
    objectives: ['Build maintainable formulas', 'Shorten troubleshooting cycle'],
  },
  {
    id: 'payroll-groups-filters',
    sections: '16',
    title: 'Payroll Groups & Filters',
    summary: 'Control execution scope with payroll relationship groups and run filters.',
    topics: ['Grouping strategies', 'Flow parameterization', 'Exception-driven subsets'],
    objectives: ['Target reruns precisely', 'Improve operational run efficiency'],
  },
  {
    id: 'rollback-corrections',
    sections: '17',
    title: 'Rollback & Corrections',
    summary: 'Apply rollback, reversals, and corrections without creating audit gaps.',
    topics: ['Rollback hierarchy and impacts', 'Reverse vs recalculate patterns', 'Correction governance'],
    objectives: ['Pick safest correction method', 'Reduce post-pay remediation risk'],
  },
  {
    id: 'interfaces-extracts',
    sections: '18',
    title: 'Interfaces & Extracts',
    summary: 'Build outbound and inbound integrations for payroll-adjacent ecosystems.',
    topics: ['HCM Extract strategy', 'File-based data exchange', 'Integration monitoring'],
    objectives: ['Standardize interface templates', 'Enable dependable operational handoffs'],
  },
  {
    id: 'benefits-integration',
    sections: '19',
    title: 'Benefits Integration',
    summary: 'Coordinate benefits enrollment and payroll deduction synchronization.',
    topics: ['Rate to deduction mapping', 'Open enrollment impacts', 'Carrier and payroll alignment'],
    objectives: ['Avoid deduction mismatches', 'Support timely enrollment changes'],
  },
  {
    id: 'legislative-updates-compliance',
    sections: '20',
    title: 'Legislative Updates & Compliance',
    summary: 'Operationalize quarterly and annual legislative changes safely.',
    topics: ['Patch cadence planning', 'Regression validation after updates', 'Compliance communication model'],
    objectives: ['Run proactive compliance maintenance', 'Decrease update-related defects'],
  },
  {
    id: 'cross-module-integrations',
    sections: '21',
    title: 'Cross-Module Integrations',
    summary: 'Understand data dependencies across Core HR, Time, Benefits, and Finance.',
    topics: ['Dependency mapping', 'End-to-end process ownership', 'Failure impact analysis'],
    objectives: ['Create integration responsibility matrix', 'Strengthen change-impact analysis'],
  },
  {
    id: 'testing-validation',
    sections: '22',
    title: 'Testing & Validation',
    summary: 'Create repeatable test cycles to validate payroll outcomes across scenarios.',
    topics: ['SIT/UAT payroll test packs', 'Expected result documentation', 'Defect triage workflow'],
    objectives: ['Increase first-pass run quality', 'Track testing completeness with evidence'],
  },
  {
    id: 'go-live-preparation',
    sections: '23',
    title: 'Go-Live Preparation',
    summary: 'Finalize cutover, controls, and support models for production readiness.',
    topics: ['Cutover runbook', 'Hypercare command center', 'Escalation and stabilization model'],
    objectives: ['Ensure go-live decision confidence', 'Prepare support teams for week-1 issues'],
  },
  {
    id: 'key-decision-points',
    sections: '25',
    title: 'Key Decision Points',
    summary: 'Capture and govern strategic payroll design decisions.',
    topics: ['Decision logs and rationale', 'Risk and dependency tags', 'Approval governance'],
    objectives: ['Align stakeholders on major choices', 'Preserve implementation traceability'],
  },
  {
    id: 'discovery-questions',
    sections: '26',
    title: 'Discovery Questions',
    summary: 'Use structured discovery to gather requirements before configuration.',
    topics: ['Process discovery interviews', 'Data and policy intake templates', 'Requirements risk profiling'],
    objectives: ['Speed up blueprinting', 'Reveal hidden assumptions early'],
  },
];

const storageKey = 'fusionPayrollCompletedModules';
const completedModules = new Set(JSON.parse(localStorage.getItem(storageKey) || '[]'));

const tocNav = document.querySelector('#tocNav');
const modulesContainer = document.querySelector('#modulesContainer');
const docSearch = document.querySelector('#docSearch');
const noResults = document.querySelector('#noResults');
const breadcrumb = document.querySelector('#breadcrumb');
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
        <a href="#${module.id}" class="nav-link" data-module-title="${module.title}">
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
      (module, index) => `
      <section class="module-card" id="${module.id}" data-search="${[
        module.title,
        module.summary,
        ...module.topics,
        ...module.objectives,
      ]
        .join(' ')
        .toLowerCase()}">
        <button class="module-header" aria-expanded="${index === 0}" aria-controls="content-${module.id}">
          <span class="module-chip">Section ${module.sections}</span>
          <span>
            <h2 class="module-title">${module.title}</h2>
            <p class="module-summary">${module.summary}</p>
          </span>
          <span class="module-caret">${index === 0 ? '−' : '+'}</span>
        </button>

        <div class="module-content" id="content-${module.id}" ${index === 0 ? '' : 'hidden'}>
          <h3>Topics</h3>
          <ul class="module-list">
            ${module.topics.map((topic) => `<li>${topic}</li>`).join('')}
          </ul>
          <h3>Learning objectives</h3>
          <ul class="module-objectives">
            ${module.objectives.map((objective) => `<li>${objective}</li>`).join('')}
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

const activateVisibleNavLink = () => {
  const sections = [...document.querySelectorAll('.module-card')];
  const links = [...document.querySelectorAll('.nav-link')];
  const offset = window.scrollY + 140;

  let activeId = sections[0]?.id;
  for (const section of sections) {
    if (section.hidden) {
      continue;
    }
    if (offset >= section.offsetTop) {
      activeId = section.id;
    }
  }

  links.forEach((link) => {
    const isActive = link.getAttribute('href') === `#${activeId}`;
    link.classList.toggle('active', isActive);
    if (isActive) {
      breadcrumb.textContent = `Documentation > ${link.dataset.moduleTitle}`;
    }
  });
};

const handleExpansion = () => {
  modulesContainer.addEventListener('click', (event) => {
    const header = event.target.closest('.module-header');
    if (!header) {
      return;
    }

    const contentId = header.getAttribute('aria-controls');
    const content = document.getElementById(contentId);
    const expanded = header.getAttribute('aria-expanded') === 'true';

    header.setAttribute('aria-expanded', String(!expanded));
    content.hidden = expanded;
    header.querySelector('.module-caret').textContent = expanded ? '+' : '−';
  });
};

const handleCompletion = () => {
  modulesContainer.addEventListener('click', (event) => {
    const button = event.target.closest('[data-complete-module]');
    if (!button) {
      return;
    }

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

    const navLink = document.querySelector(`.nav-link[href="#${card.id}"]`);
    if (navLink?.parentElement) {
      navLink.parentElement.hidden = !isVisible;
    }

    if (isVisible) {
      visibleCount += 1;
    }
  });

  noResults.hidden = visibleCount > 0;
  activateVisibleNavLink();
};

createNav();
createModules();
updateProgressUI();
handleExpansion();
handleCompletion();
applySearch();

window.addEventListener('scroll', activateVisibleNavLink);
document.querySelectorAll('.nav-link').forEach((link) => {
  link.addEventListener('click', () => {
    breadcrumb.textContent = `Documentation > ${link.dataset.moduleTitle}`;
  });
});

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
