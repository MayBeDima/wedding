const startInput = document.querySelector('.start__input');

IMask(
  startInput,
  {
    mask: '000 000',
  }
)

/*
В локальное хранилище записываем переменную после ввода кода.
Таким образом, на аунтифицированном устройстве повторно вводить не придется.
*/

const auth = localStorage.getItem('auth') || false;

const redirect = 'http://127.0.0.1:5500/QCode/Wedding/index.html' // тут записывается полный адрес основной страницы

if (auth) window.location.href = redirect; // редирект если пользователь уже вводил пароль

startInput.addEventListener('input', () => {
  if (startInput.value.length === 7) {
    localStorage.setItem('auth', true); // запись переменной аутентификации
    window.location.href = redirect; // редирект после ввода пароля
  }
})

localStorage.clear();
