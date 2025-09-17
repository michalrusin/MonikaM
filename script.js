const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const overlay = document.querySelector('.menu-overlay');

function closeMenu() {
    hamburger.classList.remove('open');
    menu.classList.remove('open');
    overlay.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
}

hamburger.addEventListener('click', function(e) {
    e.stopPropagation();
    const isOpen = hamburger.classList.toggle('open');
    menu.classList.toggle('open');
    overlay.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
});

overlay.addEventListener('click', closeMenu);
document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', closeMenu);
});
window.addEventListener('resize', () => {
    if(window.innerWidth > 1000) closeMenu();
});
