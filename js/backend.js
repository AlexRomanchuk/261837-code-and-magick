'use strict';

window.backend = (function () {
  var url = 'https://1510.dump.academy/code-and-magick';
  var errorStyle = 'background: red; border: 5px dashed white';
  var emergencyStyle = 'color: black; background: #e5be01; border: 5px dashed black';

  window.messageError = function (message, alertStyle) {
    var header = document.querySelector('.header-clouds');
    var errorAlert = document.createElement('div');
    errorAlert.style = alertStyle;
    errorAlert.textContent = message;
    header.appendChild(errorAlert);
  };

  function actionXhr(onLoad, onError, method, link, data) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.timeout = 15000;

    xhr.addEventListener('load', function () {
      switch (xhr.status) {
        case 200:
          onLoad(xhr.response);
          break;
        case 404:
          onError('Мы не нашли url ' + url + '... Ошибка ' + xhr.status + ' ' + xhr.statusText, errorStyle);
          break;
        default:
          onError('Какая-то авария... Неизвестная ошибка: ' + xhr.status + ' ' + xhr.statusText, errorStyle);
          break;
      }
    });

    xhr.addEventListener('error', function () {
      onError('Авария... Произошла ошибка соединения', emergencyStyle);
    });

    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс', emergencyStyle);
    });

    xhr.open(method, url + link);

    xhr.send(data);
  }

  return {
    load: function (onLoad, onError) {
      actionXhr(onLoad, onError, 'GET', '/data');
    },

    save: function (formdata, onLoad, onError) {
      actionXhr(onLoad, onError, 'POST', '', formdata);
    }
  };
})();
