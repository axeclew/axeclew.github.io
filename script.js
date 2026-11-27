
 // Edit these entries to customize the interactive projects.

const projects = [
    [
        'Research project',
        'Python / Research',
        'Describe your research question, methodology, and findings.'
    ],
    [
        'Software application',
        'JavaScript / HTML / CSS',
        'Explain the problem your application solves.'
    ],
    [
        'Data analysis',
        'Python / Statistics',
        'Describe your dataset and conclusions.'
    ],
    [
        'Personal website',
        'HTML / CSS',
        'Introduce your portfolio and design process.'
    ]
];

let selected = 0;

const $ = id => document.getElementById(id);

document.querySelectorAll('[data-project]').forEach(b => {
    b.addEventListener('click', () => {
        selected = Number(b.dataset.project);

        document.querySelectorAll('[data-project]').forEach(x => {
            x.classList.toggle('active', x === b);
        });

        $('project-title').textContent = projects[selected][0];
        $('tech').textContent = projects[selected][1];
        $('project-description').textContent = projects[selected][2];
    });
});

document.querySelectorAll('[data-tab]').forEach(b => {
    b.addEventListener('click', () => {
        document.querySelectorAll('[data-tab]').forEach(x => {
            x.classList.toggle('active', x === b);
            $(x.dataset.tab).hidden = x !== b;
        });
    });
});

$('notes').onclick = () => {
    $('modal-title').textContent = projects[selected][0];
    $('modal-text').textContent = projects[selected][2];
    $('modal').showModal();
};

$('close').onclick = () => {
    $('modal').close();
};
