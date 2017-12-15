'use strict';

(function () {
  var similarListElement = window.mainSetup.setup.querySelector('.setup-similar-list');

  window.backend.load(onSuccessLoad, window.messageError);

  function createWizardElement(arrayName) {
    var newElement = window.mainSetup.template.cloneNode(true);
    newElement.querySelector('.setup-similar-label').textContent = arrayName.name;
    newElement.querySelector('.wizard-coat').style.fill = arrayName.colorCoat;
    newElement.querySelector('.wizard-eyes').style.fill = arrayName.colorEyes;
    return newElement;
  }

  function render(data) {
    var takeNumber = data.length > 4 ? 4 : data.length;
    similarListElement.textContent = '';
    for (var i = 0; i < takeNumber; i++) {
      similarListElement.appendChild(createWizardElement(data[i]));
    }
  }

  var coatColor;
  var eyesColor;
  var wizards = [];

  var getRank = function (wizard) {
    var rank = 0;

    if (wizard.colorCoat === coatColor) {
      rank += 2;
    }
    if (wizard.colorEyes === eyesColor) {
      rank += 1;
    }

    return rank;
  }

  var namesComparator = function (left, right) {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  }

  var updateWizards = function () {
    render(wizards.sort(function (left, right) {
      var rankDiff = getRank(right) - getRank(left);
      if (rankDiff === 0) {
        rankDiff = namesComparator(left.name, right.name);
      }
      return rankDiff;
    }));
  }

  var wizardElement = document.querySelector('.setup-wizard');

  var wizardCoatElement = wizardElement.querySelector('.wizard-coat');
  wizardCoatElement.addEventListener('click', function () {
    var newColor = window.util.getRandData(window.mainSetup.coatColors);
    this.style.fill = newColor;
    coatColor = newColor;
    updateWizards();
  });

  var wizardEyesElement = wizardElement.querySelector('.wizard-eyes');
  wizardEyesElement.addEventListener('click', function () {
    var newColor = window.util.getRandData(window.mainSetup.eyesColors);
    this.style.fill = newColor;
    eyesColor = newColor;
    updateWizards();
  });

  function onSuccessLoad(data) {
    wizards = data;
    updateWizards();
  }

})();
