'use strict';

(function () {
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = window.mainSetup.setup.querySelector('.setup-close');

  var openPopup = function () {
    window.mainSetup.setup.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
    window.mainSetup.setup.style.top = '';
    window.mainSetup.setup.style.left = '';
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

  var wizardForm = window.mainSetup.setup.querySelector('.setup-wizard-form');

  wizardForm.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(wizardForm), function () {
      window.mainSetup.setup.classList.add('hidden');
    });
    evt.preventDefault();
  }, window.messageError);

  var dialogHandle = window.mainSetup.setup.querySelector('.setup-user-pic');
  dialogHandle.style.zIndex = 1;

  dialogHandle.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    window.startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });

  var onMouseMove = function (moveEvt) {
    moveEvt.preventDefault();

    var drag = {
      x: window.startCoords.x - moveEvt.clientX,
      y: window.startCoords.y - moveEvt.clientY,
    };

    window.startCoords = {
      x: moveEvt.clientX,
      y: moveEvt.clientY
    };

    window.mainSetup.setup.style.top = (window.mainSetup.setup.offsetTop - drag.y) + 'px';
    window.mainSetup.setup.style.left = (window.mainSetup.setup.offsetLeft - drag.x) + 'px';
  };

  var onMouseUp = function (upEvt) {
    upEvt.preventDefault();
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
  };
})();
