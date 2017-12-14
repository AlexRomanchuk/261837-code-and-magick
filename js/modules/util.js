'use strict';

window.util = (function () {
  function getRandomNumber(num1, num2) {
    return (Math.floor(Math.random() * (num2 - num1 + 1)) + num1);
  }

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
    shuffleArray: function (arr, n) {
      var collection = arr.slice(0);
      var newArr = [];
      for (var i = 0; i < n; i++) {
        var rand = getRandomNumber(0, collection.length - 1);
        var randomElement = collection[rand];
        newArr.push(randomElement);
        collection.splice(rand, 1);
      }
      return newArr;
    }
  };
})();
