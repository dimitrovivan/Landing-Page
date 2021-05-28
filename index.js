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

window.onload=function(){
const menuBtn = document.querySelector('.top-navigation__burger-icon-container');
const burgerIcon = document.querySelector('.top-navigation__burger-icon');
const dropDownList = document.querySelector('.top-navigation__list');

   let isShown = false;
   menuBtn.addEventListener('click', () => {
       if (!isShown) {
    burgerIcon.classList.add('open');
    dropDownList.classList.add('open');
    isShown = true;
} else {
    burgerIcon.classList.remove('open');
    dropDownList.classList.remove('open');

    isShown = false;
}
});
}
