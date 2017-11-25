'use strict';

// Контстанты: массивы данных о волшебниках
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_FAMILIAS = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYE_COLORS = ['black', 'blue', 'yellow', 'green', 'red'];

var setupWindow = document.querySelector('.setup');

// Функция показа элементов
function showBlock(nameSelector) {
  setupWindow = document.querySelector(nameSelector);
  setupWindow.classList.remove('hidden');
}

showBlock('.setup');

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
