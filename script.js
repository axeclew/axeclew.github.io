  title: 'Research Study',
    tech: 'Python / Research',
    quote: 'Start with a question. Leave with evidence.',
    description: 'Describe your research topic, experiments, and most important findings here.',
    notes: 'Write a longer explanation of your project and research process here.',
    link: 'https://github.com/'
  },
  {
    title: 'Software Tool',
    tech: 'JavaScript / HTML / CSS',
    quote: 'Make the complicated feel simple.',
    description: 'Explain the problem your software solves and what you personally built.',
    notes: 'Describe your app architecture, users, tools, and lessons learned.',
    link: 'https://github.com/'
  },
  {
    title: 'Data Visualization',
    tech: 'Python / Statistics',
    quote: 'Good pictures can make complicated data clearer.',
    description: 'Introduce your dataset, visualizations, and what they revealed.',
    notes: 'Explain your data pipeline, analysis methods, and conclusions.',
    link: 'https://github.com/'
  },
  {
    title: 'Personal Website',
    tech: 'HTML / CSS / JavaScript',
    quote: 'A quiet home for ideas and projects.',
    description: 'Tell the story of building your own portfolio and how you designed it.',
    notes: 'Explain the design choices you made and future improvements.',
    link: 'https://github.com/'
  }
];

const byId = id => document.getElementById(id);
let selectedProject = 0;

function selectProject(index) {
  selectedProject = index;
  const project = projects[index];
  document.querySelectorAll('[data-project]').forEach(button => {
    const selected = Number(button.dataset.project) === index;
    button.classList.toggle('active', selected);
    button.setAttribute('aria-selected', String(selected));
  });
  byId('project-title').textContent = project.title;
  byId('tech').textContent = project.tech;
  byId('project-description').textContent = project.description;
  byId('project-quote').textContent = project.quote;
  byId('project-link').href = project.link;
  byId('project-visual').dataset.theme = String(index);
  byId('project-visual').querySelector('.visual-tag').textContent = `PROJECT / 0${index + 1}`;
}

document.querySelectorAll('[data-project]').forEach(button => {
  button.addEventListener('click', () => selectProject(Number(button.dataset.project)));
});

document.querySelectorAll('[data-tab]').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-tab]').forEach(tab => {
      const active = tab === button;
      tab.classList.toggle('active', active);
      tab.setAttribute('aria-selected', String(active));
      byId(tab.dataset.tab).hidden = !active;
    });
  });
});

document.querySelectorAll('[data-jump]').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-jump]').forEach(item => item.classList.toggle('selected', item === button));
    byId(button.dataset.jump)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

const modal = byId('modal');
byId('notes').addEventListener('click', () => {
  const project = projects[selectedProject];
  byId('modal-title').textContent = project.title;
  byId('modal-text').textContent = project.notes;
  modal.showModal();
});
byId('close').addEventListener('click', () => modal.close());
modal.addEventListener('click', event => {
  if (event.target === modal) modal.close();
});

const menuButton = document.querySelector('.menu-button');
const navLinks = document.querySelector('.nav-links');
menuButton.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  });
});
