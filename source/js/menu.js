var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--toggled')) {
    navMain.classList.remove('main-nav--toggled');
  } else {
    navMain.classList.add('main-nav--toggled');
  }
});
