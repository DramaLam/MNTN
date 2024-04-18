const navBtn = document.querySelector('.nav-button');
const mobileNav = document.querySelector('.nav-mobile');
const body = document.body;


// Клик по кнопке навигации
navBtn.addEventListener('click', function (event) {
  event.stopPropagation();
  toggleMobileNav();
})

// Клик по окну за пределами навигации
window.addEventListener('click', function() {
  if (body.classList.contains('no-scroll')) {
    toggleMobileNav();
  }
})

// Останавливаем клик внутри открытой мобильной навигации
mobileNav.addEventListener('click', function (event) {
  event.stopPropagation();
})

function toggleMobileNav() {
  mobileNav.classList.toggle('nav-mobile-active');
  navBtn.classList.toggle('nav-button-close');
  body.classList.toggle('no-scroll');
}