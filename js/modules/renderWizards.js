'use strict';

(function () {
  var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var similarListElement = window.mainSetup.setup.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  function wizards (n, wizardsNames, wizardsSurnemes, eyesColors, coatColors) {
    var arr = [];
    for (var i = 0; i < n; i++) {
      arr.push(
        {
          name: window.util.getRandData(WIZARD_NAMES) + ' ' + window.util.getRandData(WIZARD_SURNAMES),
          coatColor: window.util.getRandData(window.mainSetup.coatColors),
          eyesColor: window.util.getRandData(window.mainSetup.eyesColors)
        }
      );
    }
    return arr;
  }

  function createWizardElement (arrayName) {
    var newElement = similarWizardTemplate.cloneNode(true);
    newElement.querySelector('.setup-similar-label').textContent = arrayName.name;
    newElement.querySelector('.wizard-coat').style.fill = arrayName.coatColor;
    newElement.querySelector('.wizard-eyes').style.fill = arrayName.eyesColor;
    return newElement;
  }

  function renderWizardsElements (arrayName, functionName) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < arrayName.length; i++) {
      fragment.appendChild(functionName(arrayName[i]));
    }
    similarListElement.appendChild(fragment);
  }

  renderWizardsElements(wizards(4), createWizardElement);

})();
