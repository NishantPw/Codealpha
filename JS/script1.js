
window.addEventListener('scroll', () => {
    document.querySelectorAll('.section').forEach((sec) => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 400;
        const height = sec.offsetHeight;
        if (top > offset && top < offset + height) {
            sec.style.opacity = 1;
            sec.style.transform = 'translateY(0)';
        }
    });
});

// Basic animation init
document.querySelectorAll('.section').forEach((sec) => {
    sec.style.opacity = 0;
    sec.style.transform = 'translateY(40px)';
    sec.style.transition = 'all 0.6s ease-out';
});
