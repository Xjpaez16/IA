document.addEventListener('DOMContentLoaded', () => {
    const articles = document.querySelectorAll('article');

    // Agregar efectos de aparición
    articles.forEach((article, index) => {
        article.style.transitionDelay = `${index * 0.2}s`;
        article.classList.add('animate');
    });

    // Animación de fondo al hacer scroll
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        articles.forEach((article) => {
            const offset = article.getBoundingClientRect().top;
            if (offset < window.innerHeight) {
                article.style.transform = `translateY(${scrollY * 0.1}px)`;
            }
        });
    });

    // Efecto de clic en artículos
    articles.forEach((article) => {
        article.addEventListener('click', () => {
            alert('¡Gracias por interesarte en la historia de la IA!');
        });
    });
});

