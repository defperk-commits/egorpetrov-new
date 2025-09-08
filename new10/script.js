// GSAP animations
gsap.registerPlugin(ScrollTrigger);

// Header animation
gsap.from("header h1", {
    opacity: 0,
    y: -50,
    duration: 1.5,
    ease: "power3.out"
});

gsap.from(".tagline", {
    opacity: 0,
    y: -30,
    duration: 1.5,
    delay: 0.3,
    ease: "power3.out"
});

gsap.from(".header-description", {
    opacity: 0,
    y: -20,
    duration: 1.5,
    delay: 0.6,
    ease: "power3.out"
});

gsap.from(".nav a", {
    opacity: 0,
    y: 20,
    duration: 1,
    delay: 0.9,
    stagger: 0.1,
    ease: "power3.out"
});

// Section animations
gsap.utils.toArray(".section").forEach((section, index) => {
    gsap.from(section, {
        opacity: 0,
        y: 100,
        duration: 1,
        delay: index * 0.2,
        ease: "power3.out",
        scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none reverse"
        }
    });
});

// Timeline animations
gsap.from(".timeline-item", {
    opacity: 0,
    x: -50,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
        trigger: "#experience",
        start: "top 80%",
        toggleActions: "play none none reverse"
    }
});

// Project link animation
gsap.from(".project-link", {
    opacity: 0,
    x: -20,
    duration: 1,
    scrollTrigger: {
        trigger: "#experience",
        start: "top 80%",
        toggleActions: "play none none reverse"
    }
});

// Achievements animation
gsap.from(".achievement-item", {
    opacity: 0,
    scale: 0.8,
    duration: 1,
    stagger: 0.1,
    scrollTrigger: {
        trigger: "#achievements",
        start: "top 80%",
        toggleActions: "play none none reverse"
    }
});

// Contact items animation
gsap.from(".contact-item", {
    opacity: 0,
    y: 30,
    duration: 1,
    stagger: 0.1,
    scrollTrigger: {
        trigger: "#contact",
        start: "top 80%",
        toggleActions: "play none none reverse"
    }
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        const target = document.querySelector(href);
        if (target) {
            const topOffset = target.getBoundingClientRect().top + window.scrollY - 80;
            window.scrollTo({
                top: topOffset,
                behavior: 'smooth'
            });
        }
    });
});

// Skills toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const skillsToggle = document.getElementById('skillsToggle');
    const skillsGrid = document.getElementById('skillsGrid');
    const chevron = skillsToggle.querySelector('i');

    skillsToggle.addEventListener('click', function() {
        skillsGrid.classList.toggle('show');
        
        if (skillsGrid.classList.contains('show')) {
            skillsToggle.querySelector('span').textContent = 'Скрыть компетенции';
            chevron.className = 'fas fa-chevron-up';
            gsap.from(".skill-category", {
                opacity: 0,
                y: 30,
                duration: 0.8,
                stagger: 0.2
            });
        } else {
            skillsToggle.querySelector('span').textContent = 'Показать компетенции';
            chevron.className = 'fas fa-chevron-down';
        }
    });

    // Experience details toggle functionality
    const expandButtons = document.querySelectorAll('.expand-btn');
    
    expandButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const detailsSection = document.getElementById(targetId);
            
            // Determine if opening or closing before toggle
            const isOpening = !this.classList.contains('active');
            
            // Toggle active class on button
            this.classList.toggle('active');
            
            // Animate with GSAP
            if (isOpening) {
                gsap.fromTo(detailsSection, {
                    height: 0,
                    opacity: 0
                }, {
                    height: "auto",
                    opacity: 1,
                    duration: 0.5,
                    ease: "power2.out"
                });
            } else {
                gsap.to(detailsSection, {
                    height: 0,
                    opacity: 0,
                    duration: 0.5,
                    ease: "power2.out"
                });
            }
        });
    });
});

// Particle effect simulation
function createParticles() {
    const particlesContainer = document.querySelector('.particles-background');
    const particleCount = 30;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 5 + 2}px;
            height: ${Math.random() * 5 + 2}px;
            background: rgba(255, 255, 255, ${Math.random() * 0.3});
            border-radius: 50%;
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
            animation: floatParticle ${Math.random() * 10 + 10}s infinite ease-in-out;
            animation-delay: -${Math.random() * 10}s;
        `;
        particlesContainer.appendChild(particle);
    }
}

// Add CSS for particle animation
const style = document.createElement('style');
style.textContent = `
    @keyframes floatParticle {
        0%, 100% {
            transform: translate(0, 0) rotate(0deg);
            opacity: 0;
        }
        25% {
            transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) rotate(${Math.random() * 360}deg);
            opacity: 0.5;
        }
        50% {
            transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) rotate(${Math.random() * 360}deg);
            opacity: 0.8;
        }
        75% {
            transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) rotate(${Math.random() * 360}deg);
            opacity: 0.5;
        }
    }
`;
document.head.appendChild(style);

// Initialize particles
createParticles();
