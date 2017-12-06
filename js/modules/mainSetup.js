'use strict';

window.mainSetup = (function () {
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;
  var SETUP = document.querySelector('.setup');
  var USER_NAME_INPUT = SETUP.querySelector('.setup-user-name');
  var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var EYES_COLORS = ['black', 'blue', 'yellow', 'green', 'red'];
  var COAT_COLORS = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ];
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  return {
    coatColors: COAT_COLORS,
    eyesColors: EYES_COLORS,
    fireballColors: FIREBALL_COLORS,
    userNameInput: USER_NAME_INPUT,
    setup: SETUP,
    wizardNames: WIZARD_NAMES,
    wizardSurnames: WIZARD_SURNAMES,
    enterKeycode: ENTER_KEYCODE,
    escKeycode: ESC_KEYCODE,
    template: similarWizardTemplate,
    coat: SETUP.querySelector('.setup-wizard .wizard-coat'),
    eyes: SETUP.querySelector('.setup-wizard .wizard-eyes'),
    fireball: SETUP.querySelector('.setup-fireball-wrap')
  };
})();
