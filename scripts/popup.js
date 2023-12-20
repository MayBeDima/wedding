function openPopup(popup) {

  popup.classList.remove('hidden');
  const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
  document.body.style.position = 'fixed';
  document.body.style.top = `-${scrollY}`;

  popup.querySelector('.close__btn').addEventListener('click', () => {
    const scrollY = document.body.style.top;
    document.body.style.position = '';
    window.scrollTo({ left: 0, top: parseInt(scrollY || '0') * -1, behavior: "instant" });
    popup.classList.add('hidden');
  })
}

window.addEventListener('scroll', () => {
  document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
});

// DRESSCODE POPUP
const dressPopupOpen = document.querySelector('.dresscode__popup_open');
const dressPopup = document.querySelector('.dresscode__popup');

dressPopupOpen.addEventListener('click', () => {
  openPopup(dressPopup);
})


// SHEDULE POPUP
const shedulePopupOpen = document.querySelectorAll('.shedule__popup_open');
const shedulePopup = document.querySelector('.shedule__popup');

shedulePopupOpen.forEach((e) => {
  e.addEventListener('click', () => {
    openPopup(shedulePopup);
  })
})

// DRESSCODE SCROLLBARS
new SimpleBar(document.getElementById('heScrollbar'));
new SimpleBar(document.getElementById('sheScrollbar'));
