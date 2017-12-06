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
    }
  };
})();
