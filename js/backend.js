'use ctrict';
window.backend = (function () {
  return {
    load: function (onLoad, onError) {
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'json';

      xhr.timeout = 15000;

      xhr.addEventListener('load', function () {
      if (xhr.status === 200) {
          onLoad(xhr.response);
        } else {
          onError('Неизвестный статус: ' + xhr.status + ' ' + xhr.statusText);
        }
      });

      xhr.addEventListener('error', function () {
        onError('Произошла ошибка соединения');
      });

      xhr.addEventListener('timeout', function () {
        onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
      });

      xhr.open('GET', 'https://1510.dump.academy/code-and-magick/data');

      xhr.send();
    },

    save: function (data, onLoad, onError) {

    }
  }
})();
