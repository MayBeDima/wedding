const confirmBtn = document.querySelector('.confirm__btn');
const confirmPage = document.querySelector('.confirm');
const sitePage = document.querySelector('.site');

/*
Аналогично аутентификации.
В локальное хранилище записываем переменную после подтверждения.
Таким образом, на аунтифицированном устройстве повторно подвтверждать не нужно.
*/

const confirm = localStorage.getItem('confirm') || false;

if (!confirm) {
  confirmPage.classList.remove('none');
} else {
  sitePage.classList.remove('none');
}

confirmBtn.addEventListener('click', () => {
  confirmPage.classList.add('none');
  sitePage.classList.remove('none');

  localStorage.setItem('confirm', true);
})

// localStorage.clear();
