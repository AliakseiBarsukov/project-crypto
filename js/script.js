import './module/modal.js'
import './module/tabs.js'
import './module/exchenge-rates.js'
import './module/faq.js'
import './module/remark.js'

const menuIconWrapper = document.querySelector('.menu-icon-wrapper');
const menuIcon = document.querySelector('.menu-icon');
const headerNavigation = document.querySelector('.header__navigation');


menuIconWrapper.addEventListener('click', () => {
    menuIcon.classList.toggle('menu-icon-active');
    headerNavigation.classList.toggle('header__navigation-open');
});

headerNavigation.addEventListener('click', ({target}) => {
    if (target.classList.contains('navigation__link')) {
        menuIcon.classList.remove('menu-icon-active');
        headerNavigation.classList.remove('header__navigation-open');
    }
})


