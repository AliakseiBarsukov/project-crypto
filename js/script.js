import './module/modal.js'
import './module/tabs.js'
import './module/exchenge-rates.js'
import './module/faq.js'
import './module/remark.js'

const menuIconWrapper = document.querySelector('.menu-icon-wrapper');
const menuIcon = document.querySelector('.menu-icon');
const headerNavigation = document.querySelector('.header__navigation');
const navigationList = document.querySelector('.navigation__list');


menuIconWrapper.addEventListener('click', () => {
    menuIcon.classList.toggle('menu-icon-active');
    headerNavigation.classList.toggle('header__navigation-open');
    navigationList.classList.add('list-active')
});

headerNavigation.addEventListener('click', ({target}) => {
    if (target.classList.contains('navigation__link')) {
        menuIcon.classList.remove('menu-icon-active');
        headerNavigation.classList.remove('header__navigation-open');
        navigationList.classList.remove('list-active')
    }
})


