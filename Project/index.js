window.addEventListener('scroll', ()=> {
        const topNavigation = document.querySelector('.top-navigation');
        const buttonToChange = document.querySelector('.top-navigation .free-version');

        if (window.scrollY > 0) {
        topNavigation.classList.add('top-navigation--scrolled');
        buttonToChange.classList.remove('btn--secondary');
        buttonToChange.classList.add('btn--third');
        } 
        else {
            topNavigation.classList.remove('top-navigation--scrolled');
            buttonToChange.classList.remove('btn--third');
            buttonToChange.classList.add('btn--secondary');
        }
});