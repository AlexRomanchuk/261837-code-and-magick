'use strict';

var fillElement = function(elem, color) {
  elem.style.fill = color;
};

var changeElementBackground = function(elem, color) {
  elem.style.backgroundColor = color;
};

window.colorizeElement(window.mainSetup.coat, window.mainSetup.coatColors, fillElement);
window.colorizeElement(window.mainSetup.eyes, window.mainSetup.eyesColors, fillElement);
window.colorizeElement(window.mainSetup.fireball, window.mainSetup.fireballColors, changeElementBackground);
