'use strict';

(function () {
  var lastTimeout = 0;
  window.debounce = function (callback, timeout) {
    var debounceInterval = timeout;
    if (lastTimeout !== 0) {
      window.clearTimeout(lastTimeout);
    }
    lastTimeout = window.setTimeout(callback, debounceInterval);
  };
})();
