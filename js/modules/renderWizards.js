'use strict';

(function () {
  var similarListElement = window.mainSetup.setup.querySelector('.setup-similar-list');
  var header = document.querySelector('.header-clouds');

  window.messageError = function (message, alertStyle) {
    var errorAlert = document.createElement('div');
    errorAlert.style = alertStyle;
    errorAlert.textContent = message;
    header.appendChild(errorAlert);
  };

  window.backend.load(function (wizards) {
    var fragment = document.createDocumentFragment();
    var fourWizards = window.util.shuffleArray(wizards, 4);
    for (var i = 0; i < fourWizards.length; i++) {
      fragment.appendChild(createWizardElement(fourWizards[i]));
    }
    similarListElement.appendChild(fragment);
  }, window.messageError);

  function createWizardElement(arrayName) {
    var newElement = window.mainSetup.template.cloneNode(true);
    newElement.querySelector('.setup-similar-label').textContent = arrayName.name;
    newElement.querySelector('.wizard-coat').style.fill = arrayName.colorCoat;
    newElement.querySelector('.wizard-eyes').style.fill = arrayName.colorEyes;
    return newElement;
  }
})();
