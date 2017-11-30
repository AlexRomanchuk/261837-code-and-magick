'use strict';

// Коды клавиш и значения свойств html
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

// Контстанты: массивы данных о волшебниках
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];
var EYES_COLORS = ['black', 'blue', 'yellow', 'green', 'red'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var coat = setup.querySelector('.setup-wizard .wizard-coat');
var eyes = setup.querySelector('.setup-wizard .wizard-eyes');
var fireball = setup.querySelector('.setup-fireball-wrap');
var userNameInput = setup.querySelector('.setup-user-name');

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

var focused = false;

userNameInput.addEventListener('focus', function () {
  focused = true;
  return focused;
});

userNameInput.addEventListener('blur', function () {
  focused = false;
  return focused;
});

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE && !focused) {
    closePopup();
  } else {
    validityForm();
  }
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

// Функции настройки цветов элементов игры
var setCoatColor = function (coatColors) {
  coat.style.fill = coatColors;
};

coat.addEventListener('click', function () {
  setCoatColor(getRandData(COAT_COLORS));
});

var setEyesColor = function (eyesColors) {
  eyes.style.fill = eyesColors;
};

eyes.addEventListener('click', function () {
  setEyesColor(getRandData(EYES_COLORS));
});

var setFireballColor = function (fireBallColors) {
  fireball.style.backgroundColor = fireBallColors;
};

fireball.addEventListener('click', function () {
  setFireballColor(getRandData(FIREBALL_COLORS));
});


var setupWindow = document.querySelector('.setup');

// Функция показа элементов
function showBlock(nameSelector) {
  setupWindow = document.querySelector(nameSelector);
  setupWindow.classList.remove('hidden');
}

// Валидация поля для имени
function validityForm() {
  userNameInput.addEventListener('invalid', function () {
    if (userNameInput.validity.tooShort) {
      userNameInput.setCustomValidity('Имя должно содержать минимум 2 символа!');
    } else if (userNameInput.validity.tooLong) {
      userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов!');
    } else if (userNameInput.validity.valueMissing) {
      userNameInput.setCustomValidity('Без имени не принимаем!');
    } else {
      userNameInput.setCustomValidity('');
    }
  });

  userNameInput.addEventListener('input', function (evt) {
    var target = evt.target;
    var minSimbols = target.value.length;
    var errMessage = '';
    errMessage = minSimbols < 2 ? 'Имя должно содержать минимум 2 символа!' : '';
    target.setCustomValidity(errMessage);
  });
}

validityForm();

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
          name: getRandData(WIZARD_NAMES) + ' ' + getRandData(WIZARD_SURNAMES),
          coatColor: getRandData(COAT_COLORS),
          eyesColor: getRandData(EYES_COLORS)
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
