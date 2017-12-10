'use strict';

window.colorizeElement = function (elem, colors, colorize) {
  elem.addEventListener('click', function () {
    var color = window.util.getRandData(colors);
    colorize(elem, color);
  });
};
