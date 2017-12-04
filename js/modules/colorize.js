'use strict';

(function () {

  var setup = window.mainSetup.setup;
  var coat = setup.querySelector('.setup-wizard .wizard-coat');
  var eyes = setup.querySelector('.setup-wizard .wizard-eyes');
  var fireball = setup.querySelector('.setup-fireball-wrap');
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  // Функции настройки цветов элементов игры
  var setCoatColor = function (coatColors) {
    coat.style.fill = coatColors;
  };

  coat.addEventListener('click', function () {
    setCoatColor(window.util.getRandData(window.mainSetup.coatColors));
  });

  var setEyesColor = function (eyesColors) {
    eyes.style.fill = eyesColors;
  };

  eyes.addEventListener('click', function () {
    setEyesColor(window.util.getRandData(window.mainSetup.eyesColors));
  });

  var setFireballColor = function (fireBallColors) {
    fireball.style.backgroundColor = fireBallColors;
  };

  fireball.addEventListener('click', function () {
    setFireballColor(window.util.getRandData(FIREBALL_COLORS));
  });
})();
