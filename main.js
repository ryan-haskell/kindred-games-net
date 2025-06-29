let mobileMenuToggle = document.querySelector('.navbar-mobile-menu__button');
let mobileMenu = document.querySelector('.navbar-mobile-menu__dropdown');

mobileMenuToggle.addEventListener('click', function() {
    if (mobileMenu.style.visibility === 'hidden') {
        mobileMenu.style.opacity = '1';
        mobileMenu.style.visibility = 'visible';
    } else {
        mobileMenu.style.opacity = '0';
        mobileMenu.style.visibility = 'hidden';
    }
});
