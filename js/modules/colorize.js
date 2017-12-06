'use strict';

(function () {

  var setup = window.mainSetup.setup;
  var coat = setup.querySelector('.setup-wizard .wizard-coat');
  var eyes = setup.querySelector('.setup-wizard .wizard-eyes');
  var fireball = setup.querySelector('.setup-fireball-wrap');

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
    setFireballColor(window.util.getRandData(window.mainSetup.fireballColors));
  });
})();
