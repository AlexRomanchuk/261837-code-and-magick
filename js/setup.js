'use strict'

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYE_COLORS = ['black', 'blue', 'yellow', 'green', 'red'];

var setupWizards = document.querySelector('.setup');
setupWizards.classList.remove('hidden');

var similarListElement = setupWizards.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

function randData(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

var wizard = 0;

var wizardVariants = [
  wizard = {
    name: randData(WIZARD_NAMES) + ' ' + randData(WIZARD_SURNAMES),
    coatColor: randData(COAT_COLORS),
    eyeColor: randData(EYE_COLORS)
  },
  wizard = {
    name: randData(WIZARD_NAMES) + ' ' + randData(WIZARD_SURNAMES),
    coatColor: randData(COAT_COLORS),
    eyeColor: randData(EYE_COLORS)
  },
  wizard = {
    name: randData(WIZARD_NAMES) + ' ' + randData(WIZARD_SURNAMES),
    coatColor: randData(COAT_COLORS),
    eyeColor: randData(EYE_COLORS)
  },
  wizard = {
    name: randData(WIZARD_NAMES) + ' ' + randData(WIZARD_SURNAMES),
    coatColor: randData(COAT_COLORS),
    eyeColor: randData(EYE_COLORS)
  }
];
var getElement = function getElement(objectName, parameter1, parameter2, parameter3) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = parameter1;
    wizardElement.querySelector('.wizard-coat').style.fill = parameter2;
    wizardElement.querySelector('.wizard-eyes').style.fill = parameter3;
    return wizardElement;
}
for (var i = 0; i < wizardVariants.length; i++) {
  getElement(wizardVariants[i], wizard.name[i], wizard.coatColor[i], wizard.eyeColor[i]);
}

function getDomObject(arrayName, parameter1, parameter2, parameter3) {
  for (var i = 0; i < arrayName.length; i++) {
    var fragment = document.createDocumentFragment();
    fragment.appendChild(getElement(arrayName, parameter1, parameter2, parameter3));
    similarListElement.appendChild(fragment);
  }
}

getDomObject(wizardVariants, wizard.name, wizard.coatColor, wizard.eyeColor);
setupWizards.querySelector('.setup-similar').classList.remove('hidden');
