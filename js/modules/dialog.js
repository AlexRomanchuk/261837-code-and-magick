'use strict';

(function () {
  var setup = window.mainSetup.setup;
  var userNameInput = window.mainSetup.userNameInput;
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');

  window.validityForm;

  var openPopup = function () {
    setup.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };

  var closePopup = function () {
    setup.classList.add('hidden');
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

  userNameInput.addEventListener('focus', function () {
    focused = true;
    return focused;
  });

  userNameInput.addEventListener('blur', function () {
    focused = false;
    return focused;
  });

  var onPopupEscPress = function (evt) {
    if (evt.keyCode === window.util.escKeyCode && !focused) {
      closePopup();
    } else {
      window.validityForm;
    }
  };

  window.util.showBlock('.setup-similar');
})();
