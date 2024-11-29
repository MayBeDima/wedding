const dateOfWedding = new Date(Date.UTC(2026, 6, 5, 8, 30));
let timerId = null;

const days = document.querySelector('.timer__day');
const hours = document.querySelector('.timer__hours');
const minutes = document.querySelector('.timer__minutes');
const seconds = document.querySelector('.timer__seconds');

const daysDescr = document.querySelector('.day__descr');
const hoursDescr = document.querySelector('.hours__descr');
const minutesDescr = document.querySelector('.minutes__descr');
const secondsDescr = document.querySelector('.seconds__descr');

function declensionNum(num, words) {
  return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
}

function countdownTimer() {
  const diff = dateOfWedding - new Date();

  if (diff <= 0) {
    clearInterval(timerId);
  }

  const daysRes = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
  const hoursRes = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
  const minutesRes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
  const secondsRes = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;

  days.textContent = daysRes < 10 ? '0' + daysRes : daysRes;
  hours.textContent = hoursRes < 10 ? '0' + hoursRes : hoursRes;
  minutes.textContent = minutesRes < 10 ? '0' + minutesRes : minutesRes;
  seconds.textContent = secondsRes < 10 ? '0' + secondsRes : secondsRes;

  daysDescr.textContent = declensionNum(daysRes, ['день', 'дня', 'дней']);
  hoursDescr.textContent = declensionNum(hoursRes, ['час', 'часа', 'часов']);
  minutesDescr.textContent = declensionNum(minutesRes, ['минута', 'минуты', 'минут']);
  secondsDescr.textContent = declensionNum(secondsRes, ['секунда', 'секунды', 'секунд']);

  daysDescr.textContent = declensionNum(daysRes, ['день', 'дня', 'дней']);
  hoursDescr.textContent = declensionNum(hoursRes, ['час', 'часа', 'часов']);
  minutesDescr.textContent = declensionNum(minutesRes, ['минута', 'минуты', 'минут']);
  secondsDescr.textContent = declensionNum(secondsRes, ['секунда', 'секунды', 'секунд']);
}

countdownTimer();

timerId = setInterval(countdownTimer, 1000);
