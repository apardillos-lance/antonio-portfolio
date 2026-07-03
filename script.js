// JavaScript para el comportamiento interactivo del Portafolio

document.addEventListener('DOMContentLoaded', () => {
    
    const scrollBtn = document.getElementById('scrollBtn');
    const targetSection = document.getElementById('portfolio-content');

    // Desplazamiento suave al hacer clic en el botón de la sección de bienvenida
    if (scrollBtn && targetSection) {
        scrollBtn.addEventListener('click', () => {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Efecto de aparición gradual (Fade-in effect) para los elementos al hacer scroll
    const sections = document.querySelectorAll('section');
    
    const observerOptions = {
        root: null,
        threshold: 0.1, // Se activa cuando el 10% del elemento es visible
        rootMargin: "0px 0px -50px 0px"
    };

    const appearanceObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target); // Deja de observar una vez que ya apareció
            }
        });
    }, observerOptions);

    // Configuración inicial para la animación de las secciones
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        appearanceObserver.observe(section);
    });
});
