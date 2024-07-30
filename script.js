document.addEventListener('DOMContentLoaded', function() {
    const words = ['Software', 'PHP', 'Laravel', 'Angular', 'Javascript'];
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
        { name: 'Squad Scope', description: 'Squad Scope is a PUBG squad statistics and analytics application. It helps you dive deep into match analysis, assess individual and team stats, and utilize tactical tools to craft winning strategies. Improve your chances of victory and become PUBG champions with our app!', link: 'https://github.com/AntonioMaggi/squadscope' },
        { name: 'ParGent', description: 'Welcome to ParGent, an innovative solution designed to make parking in Ghent easier. This project is the first step towards our vision for CyberGent 2077, an integrated digital service platform for the residents and visitors of Ghent.', link: 'https://github.com/AntonioMaggi/parkingent' },
        { name: 'Dynamic Menu', description: 'Dynamic Menu is a Laravel-based project that facilitates the creation and management of dynamic menus in web applications. This tool allows users to easily configure menus that can adapt to various requirements and contexts within an application.', link: 'https://github.com/AntonioMaggi/dynamicMenu' }
    ];

    const projectList = document.getElementById('project-list');
    projects.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('project-card');
        projectDiv.innerHTML = `
            <h3>${project.name}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank">View Project</a>
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
}); 
