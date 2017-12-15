'use strict';
(function () {
  window.wizard = {
    onEyesChange: function (elem, color) {},
    onCoatChange: function (elem, color) {}
  }

  window.mainSetup.coat.addEventListener('click', function () {
    var newColor = window.util.getRandData(window.mainSetup.coatColors);
    this.style.fill = newColor;
    coatColor = newColor;
    updateWizards();
  });

  window.mainSetup.eyes.addEventListener('click', function () {
    var newColor = window.util.getRandData(window.mainSetup.eyesColors);
    this.style.fill = newColor;
    eyesColor = newColor;
    updateWizards();
  });
})();