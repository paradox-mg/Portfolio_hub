// script.js
// Project Data
const projects = [
    {
        title: "E-Commerce Platform",
        description: "Full-stack e-commerce solution with payment integration",
        tech: ["React", "Node.js", "MongoDB"],
        image: "https://via.placeholder.com/300x200"
    },
    {
        title: "Weather App",
        description: "Real-time weather application with API integration",
        tech: ["JavaScript", "CSS", "API"],
        image: "https://via.placeholder.com/300x200"
    },
    {
        title: "Task Manager",
        description: "Productivity app with drag-and-drop functionality",
        tech: ["Vue.js", "Firebase", "Tailwind"],
        image: "https://via.placeholder.com/300x200"
    }
];

// Skills Data
const skills = [
    { name: "HTML/CSS", icon: "fab fa-html5", level: 90 },
    { name: "JavaScript", icon: "fab fa-js", level: 85 },
    { name: "React", icon: "fab fa-react", level: 80 },
    { name: "Node.js", icon: "fab fa-node", level: 75 }
];

// Render Projects
function renderProjects() {
    const projectGrid = document.getElementById('projectGrid');
    projectGrid.innerHTML = projects.map(project => `
        <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
            <img src="${project.image}" alt="${project.title}" class="w-full h-48 object-cover">
            <div class="p-6">
                <h4 class="text-xl font-bold mb-2">${project.title}</h4>
                <p class="text-gray-600 mb-4">${project.description}</p>
                <div class="flex flex-wrap gap-2">
                    ${project.tech.map(tech => `<span class="bg-gray-200 px-3 py-1 rounded-full text-sm">${tech}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

// Render Skills
function renderSkills() {
    const skillsGrid = document.getElementById('skillsGrid');
    skillsGrid.innerHTML = skills.map(skill => `
        <div class="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition">
            <i class="${skill.icon} text-4xl text-blue-600 mb-4"></i>
            <h4 class="text-lg font-bold">${skill.name}</h4>
            <div class="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div class="bg-blue-600 rounded-full h-2" style="width: ${skill.level}%"></div>
            </div>
        </div>
    `).join('');
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Contact Form
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    this.reset();
});

// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.md\\:hidden');
const navLinks = document.querySelector('.hidden.md\\:flex');

mobileMenuBtn?.addEventListener('click', () => {
    navLinks.classList.toggle('hidden');
    navLinks.classList.toggle('flex');
    navLinks.classList.toggle('flex-col');
    navLinks.classList.toggle('absolute');
    navLinks.classList.toggle('top-16');
    navLinks.classList.toggle('left-0');
    navLinks.classList.toggle('w-full');
    navLinks.classList.toggle('bg-white');
    navLinks.classList.toggle('p-4');
    navLinks.classList.toggle('shadow-lg');
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    renderSkills();
});
