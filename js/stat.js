'use strict';

window.renderStatistics = function (ctx, names, times) {
  // Тень
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.beginPath(110, 20);
  ctx.moveTo(110, 20);
  ctx.lineTo(530, 20);
  ctx.lineTo(510, 155);
  ctx.lineTo(530, 290);
  ctx.lineTo(110, 290);
  ctx.lineTo(130, 155);
  ctx.stroke();
  ctx.fill();
  // Белое облако
  ctx.fillStyle = 'rgba(256, 256, 256, 1.0)';
  ctx.beginPath(100, 10);
  ctx.moveTo(100, 10);
  ctx.lineTo(520, 10);
  ctx.lineTo(500, 145);
  ctx.lineTo(520, 280);
  ctx.lineTo(100, 280);
  ctx.lineTo(120, 145);
  ctx.closePath(100, 10);
  ctx.stroke();
  ctx.fill();

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 150, 25);
  ctx.fillText('Список результатов:', 150, 45);

  var max = -1;

  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
    }
  }

  // Гистограмма
  var histogrammHeight = 150; // px
  var step = histogrammHeight / (max - 0);
  var columnWidth = 40; // px
  var columnSpace = 50; // px
  var startX = 150;
  var startY = 270; // начальные координаты
  // дополнительные параметры
  var columnHeight = 0; // px, рассчитывается в цикле
  var timeY = 20; // добавочный коэффициент к ординате для отображения времени над столбцами гистограммы
  var columnY = 15; // добавочный коэффициент к ординате для отображения столбца гистограммы над именем

  for (i = 0; i < times.length; i++) {
    columnHeight = step * times[i];
    ctx.fillText(times[i].toFixed(0), startX, (startY - columnHeight - timeY));
    // Определение цвета колонки, в конце параметр прозрачности для rgba, задаваемый случайным образом
    ctx.fillStyle = (names[i] === 'Вы') ? 'rgba(256, 0, 0, 1.0)' : 'rgba(0, 0, 256, ' + Math.random(0.4, 1).toFixed(2) + ')';
    ctx.fillRect(startX, (startY - columnHeight - columnY), columnWidth, columnHeight);
    startX += (columnSpace + columnWidth);
    ctx.fillStyle = '#000';
    ctx.fillText(names[i], (startX - 90), startY);
  }
};
