(function () {
    'use strict';

    let isMenuDisplay = false;

    // handle sticky navbar
    window.onscroll = function () { 
        let navbar = document.getElementById("mobile__navbar");
        const sticky = navbar.offsetTop;
        if (window.pageYOffset > sticky) {
            navbar.classList.add("home__lead__header--sticky")
        } else {
            navbar.classList.remove("home__lead__header--sticky");
        }
    };
    
    document.querySelector('.home__fab__header__close').addEventListener('click', () => {
        document.querySelector('.home__fab').classList.remove('home__fab--open');        
    }, false);
    document.querySelector('.home__fab').addEventListener('click', () => {
        document.querySelector('.home__fab').classList.add('home__fab--open');
    }, false);

    const toggleMenuSm = document.querySelector('#toggle-menu-sm');
    const toggleMenuMd = document.querySelector('#toggle-menu-md');
    const closeModal = document.querySelector('#close-modal');

    const handleToggleMenu = () => {    
        if (!isMenuDisplay) {
            document.querySelector('#home__lead__mobile__menu').classList.add('home__lead__mobile__menu--open');
            isMenuDisplay = true;
            return;
        }
        document.querySelector('#home__lead__mobile__menu').classList.remove('home__lead__mobile__menu--open');
        isMenuDisplay = false;
        return;
    }
    toggleMenuSm.addEventListener('click', handleToggleMenu, false);
    toggleMenuMd.addEventListener('click', handleToggleMenu, false);
    closeModal.addEventListener('click', handleToggleMenu, false);
})();