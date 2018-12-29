// JS Goes here - ES6 supported
const hamburgerBox = document.querySelector('.hamburger-box');
const menu = document.querySelector('.g-header__nav');

hamburgerBox.addEventListener('click', function() {
  menu.classList.toggle('active');
}, false);
