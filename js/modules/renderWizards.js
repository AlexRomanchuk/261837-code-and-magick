'use strict';

(function () {
  var maximumWizards = 4;
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
    var takeNumber = Math.min(data.length, maximumWizards);
    similarListElement.textContent = '';
    for (var i = 0; i < takeNumber; i++) {
      similarListElement.appendChild(createWizardElement(data[i]));
    }
  }

  var coatColor = 0;
  var eyesColor = 0;
  var wizards = [];

  function getRank(wizard) {
    var rank = 0;
    var x = (wizard.colorCoat === coatColor) ? 2 : 0;
    rank += x;
    var y = (wizard.colorEyes === eyesColor) ? 1 : 0;
    rank += y;
    return rank;
  }

  function namesComparator(left, right) {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  }

  function updateWizards() {
    render(wizards.sort(function (left, right) {
      var rankDifferency = getRank(right) - getRank(left);
      if (rankDifferency === 0) {
        rankDifferency = namesComparator(left.name, right.name);
      }
      return rankDifferency;
    }));
  }

  var timer = 500;

  window.onEyesChange = function (color) {
    eyesColor = color;
    window.debounce(updateWizards, timer);
  };

  window.onCoatChange = function (color) {
    coatColor = color;
    window.debounce(updateWizards, timer);
  };

  function onSuccessLoad(data) {
    wizards = data;
    updateWizards();
  }

})();
