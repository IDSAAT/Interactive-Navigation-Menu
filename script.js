// ========== SCROLL EFFECT ==========
// Select the navbar element
const navbar = document.getElementById('navbar');

// Listen for scroll events
window.addEventListener('scroll', function() {
    // If scrolled more than 50px, add 'scrolled' class
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});