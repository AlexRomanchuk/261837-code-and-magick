'use strict';

(function () {
  var MAXIMUM_WIZARDS = 4;
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
    var takeNumber = Math.min(data.length, MAXIMUM_WIZARDS);
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
    // return left > right ? 1 : left < right ? -1 : 0; не проходит npm test
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
  // Попробовал сделать по-другому - использовал замыкание: return function () {...}
  var doWithDebounce = window.debounce(updateWizards, timer);

  window.onEyesChange = function (color) {
    eyesColor = color;
    doWithDebounce();
  };

  window.onCoatChange = function (color) {
    coatColor = color;
    doWithDebounce();
  };

  function onSuccessLoad(data) {
    wizards = data;
    updateWizards();
  }

})();
