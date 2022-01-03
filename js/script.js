document.addEventListener('DOMContentLoaded', function() {
    const HEADER_MENU = document.querySelector('.header__menu');
    const BUTTON_MENU = HEADER_MENU.querySelector('.button-menu');
    console.log(BUTTON_MENU);
    BUTTON_MENU.addEventListener('click', function() {
        HEADER_MENU.classList.toggle('header__menu--active')
    })
})