// Theme Toggle
const themeToggle = document.querySelector('.theme-toggle');
themeToggle.addEventListener('click', () => {
    document.documentElement.dataset.theme = 
        document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    themeToggle.textContent = document.documentElement.dataset.theme === 'dark' ? '☀️' : '🌙';
});

// Scroll to Top Button
const scrollToTopBtn = document.querySelector('.scroll-to-top');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});