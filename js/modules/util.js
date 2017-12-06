'use strict';

window.util = (function () {
  return {
    isEnterEvent: function (evt, action) {
      if (evt.keyCode === window.mainSetup.enterKeycode) {
        action();
      }
    },
    isEscEvent: function (evt, action) {
      if (evt.keyCode === window.mainSetup.escKeycode) {
        action();
      }
    },
    getRandData: function (arr) {
      return arr[Math.floor(Math.random() * arr.length)];
    },
    showBlock: function (nameSelector) {
      var setupWindow = document.querySelector(nameSelector);
      setupWindow.classList.remove('hidden');
    },
    validityForm: function () {
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
    }
  };
})();
