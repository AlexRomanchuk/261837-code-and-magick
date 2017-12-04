'use strict';

window.mainSetup = (function () {
  var SETUP = document.querySelector('.setup');
  var SETUP_WINDOW = document.querySelector('.setup');
  var USER_NAME_INPUT = SETUP.querySelector('.setup-user-name');

  return {
    coatColors: [
      'rgb(101, 137, 164)',
      'rgb(241, 43, 107)',
      'rgb(146, 100, 161)',
      'rgb(56, 159, 117)',
      'rgb(215, 210, 55)',
      'rgb(0, 0, 0)'
    ],
    eyesColors: ['black', 'blue', 'yellow', 'green', 'red'],
    userNameInput: USER_NAME_INPUT,
    setupWindow: SETUP_WINDOW,
    setup: SETUP,
    wizard: SETUP.querySelector('.wizard')
  }
})();