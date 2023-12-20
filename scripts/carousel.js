const heCarousel = document.querySelector('.he-dress-carousel');
const sheCarousel = document.querySelector('.she-dress-carousel');

const positionHe = {
  pos: 0,
};
const positionShe = {
  pos: 0,
};

function carousel(carousel, pos) {

  const items = carousel.querySelectorAll('.item-dress');
  const wrapper = carousel.querySelector('.item-dress-wrapper');
  const btnNext = carousel.querySelector('.next');
  const btnPrev = carousel.querySelector('.prev');

  const handleNext = (items, wrapper) => {
    pos.pos -= 100;
    pos.pos = Math.max(pos.pos, -100 * (items.length) + 100);
    wrapper.style.transform = `translateX(${pos.pos}%)`;
  }

  const handlePrev = (wrapper) => {
    pos.pos += 100;
    pos.pos = Math.min(pos.pos, 0);
    wrapper.style.transform = `translateX(${pos.pos}%)`;
  }

  btnNext.addEventListener('click', () => handleNext(items, wrapper));
  btnPrev.addEventListener('click', () => handlePrev(wrapper));
}

carousel(heCarousel, positionHe);
carousel(sheCarousel, positionShe);

// SWIPE
let touchstartX = 0
let touchendX = 0

function checkDirection(carousel, pos) {

  const items = carousel.querySelectorAll('.item-dress');
  const wrapper = carousel.querySelector('.item-dress-wrapper');

  const handleNext = (items, wrapper) => {
    pos.pos -= 100;
    pos.pos = Math.max(pos.pos, -100 * (items.length) + 100);
    wrapper.style.transform = `translateX(${pos.pos}%)`;
  }

  const handlePrev = (wrapper) => {
    pos.pos += 100;
    pos.pos = Math.min(pos.pos, 0);
    wrapper.style.transform = `translateX(${pos.pos}%)`;
  }

  if (touchendX < touchstartX) handleNext(items, wrapper);
  if (touchendX > touchstartX) handlePrev(wrapper);
}

function swipeCarousel(element, position) {
  element.addEventListener('touchstart', e => {
    touchstartX = e.changedTouches[0].screenX
  })

  element.addEventListener('touchend', e => {
    touchendX = e.changedTouches[0].screenX
    checkDirection(element, position)
  })
}

swipeCarousel(heCarousel, positionHe);
swipeCarousel(sheCarousel, positionShe);

// Нажатие на кнопку с парами

const btnColors = document.querySelectorAll('.color-item');

const handleChooseColor = (carousel, pos, num) => {
  const wrapper = carousel.querySelector('.item-dress-wrapper');
  pos.pos = -100 * num;
  wrapper.style.transform = `translateX(${pos.pos}%)`;
}

for (let i = 0; i < btnColors.length; i++) {
  btnColors[i].addEventListener('click', () => {
    handleChooseColor(heCarousel, positionHe, i);
    handleChooseColor(sheCarousel, positionShe, i);
  })
}
