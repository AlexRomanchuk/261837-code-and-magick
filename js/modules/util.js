'use strict';

window.util = (function () {
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  return {
    escKeyCode: ESC_KEYCODE,
    enterKeyCode: ENTER_KEYCODE,
    isEnterEvent: function (evt, action) {
      if (evt.keyCode === ENTER_KEYCODE) {
        action();
      }
    },
    isEscEvent: function (evt, action) {
      if (evt.keyCode === ESC_KEYCODE) {
        action();
      }
    },
    getRandData: function(arr) {
      return arr[Math.floor(Math.random() * arr.length)];
    },
    showBlock: function (nameSelector) {
      var setupWindow = document.querySelector(nameSelector);
      setupWindow.classList.remove('hidden');
    }
  }
})();