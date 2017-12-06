'use strict';

(function () {
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = window.mainSetup.setup.querySelector('.setup-close');

  var openPopup = function () {
    window.mainSetup.setup.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };

  var closePopup = function () {
    window.mainSetup.setup.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
  };

  setupOpen.addEventListener('click', function () {
    openPopup();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, openPopup);
  });

  setupClose.addEventListener('click', function () {
    closePopup();
  });

  setupClose.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, closePopup);
  });

  var focused = false;

  window.mainSetup.userNameInput.addEventListener('focus', function () {
    focused = true;
    return focused;
  });

  window.mainSetup.userNameInput.addEventListener('blur', function () {
    focused = false;
    return focused;
  });

  var onPopupEscPress = function (evt) {
    if (evt.keyCode === window.mainSetup.escKeycode && !focused) {
      closePopup();
    }
  };

  // Функции настройки цветов элементов игры
  var setCoatColor = function (coatColors) {
    window.mainSetup.coat.style.fill = coatColors;
  };

  window.mainSetup.coat.addEventListener('click', function () {
    setCoatColor(window.util.getRandData(window.mainSetup.coatColors));
  });

  var setEyesColor = function (eyesColors) {
    window.mainSetup.eyes.style.fill = eyesColors;
  };

  window.mainSetup.eyes.addEventListener('click', function () {
    setEyesColor(window.util.getRandData(window.mainSetup.eyesColors));
  });

  var setFireballColor = function (fireBallColors) {
    window.mainSetup.fireball.style.backgroundColor = fireBallColors;
  };

  window.mainSetup.fireball.addEventListener('click', function () {
    setFireballColor(window.util.getRandData(window.mainSetup.fireballColors));
  });

  window.util.showBlock('.setup-similar');

  (function () {
    var userNameInput = window.mainSetup.userNameInput;
    userNameInput.addEventListener('invalid', function () {
      if (userNameInput.validity.tooShort) {
        userNameInput.setCustomValidity('Имя должно содержать минимум 2 символа!');
      } else if (userNameInput.validity.tooLong) {
        userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов!');
      } else if (userNameInput.validity.valueMissing) {
        userNameInput.setCustomValidity('Без имени не принимаем!');
      } else {
        userNameInput.setCustomValidity('');
      }
    });
    userNameInput.addEventListener('input', function (evt) {
      var target = evt.target;
      var minSimbols = target.value.length;
      var errMessage = '';
      errMessage = minSimbols < 2 ? 'Имя должно содержать минимум 2 символа!' : '';
      target.setCustomValidity(errMessage);
    });
  })();
})();
