document.addEventListener('DOMContentLoaded', () => {
    const projects = [
        { name: 'Project One', description: 'Description for project one', link: '#' },
        { name: 'Project Two', description: 'Description for project two', link: '#' },
        { name: 'Project Three', description: 'Description for project three', link: '#' }
    ];

    const projectList = document.getElementById('project-list');
    projects.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.innerHTML = `
            <h3>${project.name}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank">View Project</a>
        `;
        projectList.appendChild(projectDiv);
    });
});
