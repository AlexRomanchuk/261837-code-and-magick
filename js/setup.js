'use strict';

// Коды клавиш и значения свойств html
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;
var MIN_LENGTH = 2;
var TABINDEX = 0;

// Контстанты: массивы данных о волшебниках
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_FAMILIAS = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];
var EYE_COLORS = ['black', 'blue', 'yellow', 'green', 'red'];
var FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var coatColor = setup.querySelector('.setup-wizard .wizard-coat');
var eyesColor = setup.querySelector('.setup-wizard .wizard-eyes');
var fireballColor = setup.querySelector('.setup-fireball-wrap .setup-fireball');
setupOpen.querySelector('.setup-open-icon').tabIndex = TABINDEX;
setupClose.tabIndex = TABINDEX;

var openPopup = function() {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function() {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

setupOpen.addEventListener('click', function() {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function() {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

// Генерация случайного целого числа
function getRandomNumber(num1, num2) {
  return (Math.floor(Math.random() * (num2 - num1 + 1)) + num1);
}

// Функции настройки цветов элементов игры
function setColor(elementName, arrayName) {
  var setElementColor = function (arrayName) {
    elementName.style.fill = arrayName;
  }

  elementName.addEventListener('click', function() {
    setElementColor(arrayName[getRandomNumber(0, arrayName.length - 1)]);
  });
}

setColor(coatColor, COAT_COLORS);
setColor(eyesColor, EYE_COLORS);

function setFireballColor(elementName, arrayName) {
  var setElementColor = function (arrayName) {
    elementName.style.backgroundColor = arrayName;
  }

  elementName.addEventListener('click', function() {
    setElementColor(arrayName[getRandomNumber(0, arrayName.length - 1)]);
  });
}

setFireballColor(fireballColor, FIREBALL_COLOR);

var setupWindow = document.querySelector('.setup');

// Функция показа элементов
function showBlock(nameSelector) {
  setupWindow = document.querySelector(nameSelector);
  setupWindow.classList.remove('hidden');
}

// Валидация поля для имени
var userNameInput = setup.querySelector('.setup-user-name');
userNameInput.minLength = MIN_LENGTH;

userNameInput.addEventListener('invalid', function (evt) {
 if (userNameInput.validity.tooShort) {
    userNameInput.setCustomValidity('Имя должно содержать минимум 2 символа!');
  } else if (userNameInput.validity.tooLong) {
      userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов!');
  } else if (userNameInput.validity.valueMissing) {
      userNameInput.setCustomValidity('Обязательно заполните! Без имени не принимаем.');
  } else {
      userNameInput.setCustomValidity('');
  }
});

userNameInput.addEventListener('input', function (evt) {
  var target = evt.target;
  (target.value.length < 2) ? target.setCustomValidity('Имя должно содержать минимум 2 символа!') : target.setCustomValidity('');
});

var similarListElement = setupWindow.querySelector('.setup-similar-list');

// Шаблон
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

// Функция выбора случайного элемента массива
function getRandData(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

var wizards = function (n) {
  var arr = [];
  for (var i = 0; i < n; i++) {
    arr.push(
        {
          name: getRandData(WIZARD_NAMES) + ' ' + getRandData(WIZARD_FAMILIAS),
          coatColor: getRandData(COAT_COLORS),
          eyesColor: getRandData(EYE_COLORS)
        });
  }
  return arr;
};

// Функция создания элемента для вывода на страницу
function createWizardElement(arrayName) {
  var newElement = similarWizardTemplate.cloneNode(true);
  newElement.querySelector('.setup-similar-label').textContent = arrayName.name;
  newElement.querySelector('.wizard-coat').style.fill = arrayName.coatColor;
  newElement.querySelector('.wizard-eyes').style.fill = arrayName.eyesColor;
  return newElement;
}

// Функция отрисовки элемента
function renderWizardsElements(arrayName, functionName) {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < arrayName.length; i++) {
    fragment.appendChild(functionName(arrayName[i]));
  }
  similarListElement.appendChild(fragment);
}

renderWizardsElements(wizards(4), createWizardElement);

showBlock('.setup-similar');
