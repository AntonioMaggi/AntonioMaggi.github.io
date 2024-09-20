document.addEventListener('DOMContentLoaded', function() {
    const words = ['Full Stack', 'Laravel', 'Angular', 'Javascript'];
    let wordIndex = 0;
    const dynamicTextElement = document.getElementById('dynamic-text');

    function updateText() {
        dynamicTextElement.textContent = words[wordIndex];
        wordIndex = (wordIndex + 1) % words.length;
    }

    // Update text every 1.5 seconds
    setInterval(updateText, 1500);

    // Project List Generation
    const projects = [
        { name: 'Ecommerce', description: '*Currently working on a dynamic e-commerce template in Angular, Laravel, MariaDB*', link: 'https://github.com/AntonioMaggi/ecommerce' },
        { name: 'Squad Scope', description: 'Squad Scope, built with Laravel, consumes and interacts with the PUBG REST API. It is a PUBG squad statistics and analytics application. It helps you dive deep into match analysis, assess individual and team stats, and utilize tactical tools to craft winning strategies.', link: 'https://github.com/AntonioMaggi/squadscope' },
        { name: 'ParGent', description: 'Welcome to ParGent, created with Javascript and the Ghent parking API, an innovative solution designed to make parking in Ghent easier. This project is the first step towards an integrated digital service platform for the residents and visitors of Ghent.', link: 'https://github.com/AntonioMaggi/parkingent' },
        { name: 'Dynamic Menu', description: 'Dynamic Menu is a Laravel-based project that facilitates the creation and management of dynamic menus in web applications. This tool allows users to easily configure menus that can adapt to various requirements and contexts within an application.', link: 'https://github.com/AntonioMaggi/dynamicMenu' }
    ];

    const projectList = document.getElementById('project-list');
    projects.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('project-card');
        projectDiv.innerHTML = `
            <h3>${project.name}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank" rel="noopener noreferrer" class="btn project-btn">View Project</a>
        `;
        projectList.appendChild(projectDiv);
    });

    // EmailJS Form Submission
    const form = document.getElementById('contact-form');
    const status = document.getElementById('form-status');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        emailjs.sendForm('service_tb4ykrw', 'template_vohqm2b', form)
            .then(function(response) {
                status.textContent = 'Message sent successfully!';
                form.reset();
            }, function(error) {
                status.textContent = 'Error sending message. Please try again.';
            });
    });

    const cursor = document.createElement('div');
    cursor.id = 'custom-cursor';
    document.body.appendChild(cursor);

    // Move cursor with mouse
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.pageX + 'px';
        cursor.style.top = e.pageY + 'px';
    });

    // Change cursor color on hover
    const hoverElements = document.querySelectorAll('button, a');
    hoverElements.forEach(element => {
        element.addEventListener('mouseover', () => {
            cursor.style.backgroundColor = '#ec0b43'; // Change color on hover
        });
        element.addEventListener('mouseout', () => {
            cursor.style.backgroundColor = '#333'; // Reset to original color
        });
    });

}); 
