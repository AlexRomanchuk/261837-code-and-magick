'use strict';

window.colorizeElement = function (elem, colors, callback) {
  elem.addEventListener('click', function () {
    var color = window.util.getRandData(colors);
    callback(elem, color);
  });
};
