'use strict';
(function () {
  window.mainSetup.coat.addEventListener('click', function () {
    var newColor = window.util.getRandData(window.mainSetup.coatColors);
    window.mainSetup.coat.style.fill = newColor;
    window.onCoatChange(newColor);
  });

  window.mainSetup.eyes.addEventListener('click', function () {
    var newColor = window.util.getRandData(window.mainSetup.eyesColors);
    window.mainSetup.eyes.style.fill = newColor;
    window.onEyesChange(newColor);
  });
})();
