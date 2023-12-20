// Чекбоксы для гостей + развертывание остальной части формы
const personCheckboxes = document.querySelectorAll('.person__checkbox');
const iCantCheckbox = document.querySelector('.icant__checkbox');
const invisibleForm = document.querySelector('.invisible');
const personItem = document.querySelector('.persons__item');
const opacityPhoto = document.querySelector('.form-bottom-photo');
const invisibleItems = invisibleForm.querySelectorAll('.form__item');

function getFormHeight(item) {
  const arr = []
  item.forEach((e) => arr.push(e.clientHeight));
  return arr.reduce((acc, number) => acc + number, 0);
}

function setFormHeight(show, group, item) {
  if (show) {
    group.style.maxHeight = getFormHeight(item) + 'px';
  }
  else {
    group.style.maxHeight = 0;
  }
}

iCantCheckbox.addEventListener('input', () => {
  if (iCantCheckbox.checked = true) {
    personCheckboxes.forEach((e) => {
      e.checked = false;
    })

    setFormHeight(false, invisibleForm, invisibleItems);
    personItem.style.paddingBottom = 0;
    opacityPhoto.style.opacity = 0;
    invisibleForm.querySelectorAll('input').forEach(e => {
      e.disabled = true;
    })
    invisibleForm.querySelectorAll('textarea').forEach(e => {
      e.disabled = true;
    })
  }
})

function personGroup() {
  const checked = Array.from(personCheckboxes).filter((e) => e.checked);
  if (checked.length) {
    iCantCheckbox.checked = false;
    setFormHeight(true, invisibleForm, invisibleItems);
    personItem.style.paddingBottom = window.innerWidth > 576 ? 70 + "px" : 45 + "px";
    opacityPhoto.style.opacity = 1;
    invisibleForm.querySelectorAll('input').forEach(e => {
      e.disabled = false;
    })
    invisibleForm.querySelectorAll('textarea').forEach(e => {
      e.disabled = false;
    })
    checkTransport();
  }
}

personCheckboxes.forEach((e) => {
  e.addEventListener('input', () => {
    personGroup()
  })
})

// Включение/Отключение текстовой области (транспорт)
const specialTransportRadio = document.querySelector('.special__transport_radio');
const transportField = document.querySelector('.transport-field');
const transportWrapper = document.querySelector('.transport-radio-wrapper');

function checkTransport() {
  if (specialTransportRadio.checked) {
    transportField.disabled = false;
    transportField.required = true;
  } else {
    transportField.disabled = true;
    transportField.required = false;
    transportField.value = "";
  }
}

transportWrapper.addEventListener('change', () => {
  checkTransport();
})

// Валидация
// Обязательная отметка хотя бы одного чекбокса "Гости"
const checkboxBlock = document.querySelector('.person-wrapper');

function validCheckboxGroop(validFields) {
  const checked = Array.from(validFields.querySelectorAll('input')).filter((e) => e.checked);
  if (!checked.length) {
    return false;
  } else {
    return true;
  }
}

// Сообщение об успешной отправке
const success = document.querySelector('.success');

// Инициализация + отправка формы
const form = document.getElementById('form');

function serializeForm(formNode) {
  return new FormData(formNode);
}

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = serializeForm(form);

  if (validCheckboxGroop(checkboxBlock)) {
    console.log(Array.from(data.entries()))
    success.classList.remove('none');

    const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}`;

    document.querySelectorAll('.section').forEach((e) => {
      e.classList.add('blur')
    })
  } else {
    return
  }
})

// Закрытие окна об отправке

const sectionForm = document.querySelector('.section__form');
const lineUnderForm = document.querySelector('.line-1');
const formNavLink = document.querySelectorAll('.form__link')

success.addEventListener('click', (e) => {
  const withinBoundaries = e.composedPath().includes(success.querySelector('.success__window'));

  if (!withinBoundaries) {
    success.classList.add('none');

    document.querySelectorAll('.section').forEach((e) => {
      e.classList.remove('blur')
    })

    const scrollY = document.body.style.top;
    document.body.style.position = '';
    document.body.style.top = '';
    window.scrollTo({ left: 0, top: parseInt(scrollY || '0') * -1, behavior: "instant" });

    sectionForm.classList.add('none');
    lineUnderForm.classList.add('none');
    formNavLink.forEach((e) => {
      e.classList.add('none')
    })
  }
})
window.addEventListener('scroll', () => {
  document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
});
