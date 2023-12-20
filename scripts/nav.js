const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');
const closeNav = document.querySelector('.close-nav');
const links = nav.querySelectorAll('.nav__link');

burger.addEventListener('click', () => {
  nav.classList.toggle('opened');
  if (nav.classList.contains('opened')) {
    document.body.style.position = 'fixed';
    document.body.style.top = 0;
  } else {
    document.body.style.position = '';
    document.body.style.top = '';
  }
})

closeNav.addEventListener('click', () => {
  nav.classList.remove('opened');
  document.body.style.position = '';
  document.body.style.top = '';
})

links.forEach((e) => {
  e.addEventListener('click', () => {
    nav.classList.remove('opened');
    document.body.style.position = '';
    document.body.style.top = '';
  })
})
