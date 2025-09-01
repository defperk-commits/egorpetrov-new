// GSAP для анимаций
gsap.registerPlugin(ScrollTrigger);

// Анимация появления заголовка при скролле
gsap.from("header h1, .tagline", {
    opacity: 0,
    y: -50,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
        trigger: "header",
        start: "top 80%",
        toggleActions: "play none none reverse"
    }
});

// Анимация секций при скролле
gsap.utils.toArray(".section").forEach((section, index) => {
    gsap.from(section, {
        opacity: 0,
        y: 100,
        duration: 1,
        delay: index * 0.2,
        ease: "power2.out",
        scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none reverse"
        }
    });
});

// Анимация опыта с параллаксом
gsap.from(".experience-item", {
    opacity: 0,
    y: 50,
    stagger: 0.2,
    duration: 1,
    scrollTrigger: {
        trigger: "#experience",
        start: "top 80%",
        toggleActions: "play none none reverse"
    }
});

// Анимация навыков с эффектом раскрытия
gsap.from(".skill-item", {
    opacity: 0,
    scale: 0.5,
    stagger: 0.1,
    duration: 1,
    scrollTrigger: {
        trigger: "#skills",
        start: "top 80%",
        toggleActions: "play none none reverse"
    }
});

// Плавная прокрутка к якорям
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        const target = document.querySelector(href);
        if (target) {
            const topOffset = target.getBoundingClientRect().top + window.scrollY - 50;
            window.scrollTo({
                top: topOffset,
                behavior: 'smooth'
            });
        }
    });
});



// Оставил логику взаимодействия с блоком опыта как раньше
document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".experience-item");
    items.forEach(item => {
        item.addEventListener("click", () => {
            const expanded = item.getAttribute("data-expanded") === "true";
            item.setAttribute("data-expanded", !expanded);
            item.classList.toggle("expanded", !expanded);
        });
    });
});
