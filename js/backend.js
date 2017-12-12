'use ctrict';
widow.backend = (function () {
  return {
    load: function (onLoad, onError) {
      var xhr = new XMLHttpRequest()
      xhr.open(
        'GET',
        'https://1510.dump.academy/code-and-magick/data',
        true
      );
      xhr.send()

      xhr.onreadystatechange = function() {
        if (xhr.readyState !== 4) {
          return 0;
        }
        console.log('end')
      }
    },
    save: function (data, onLoad, onError) {

    }
  }
})();
