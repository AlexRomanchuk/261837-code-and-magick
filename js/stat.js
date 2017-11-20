'use strict';

/* window.renderStatistics = function (ctx, names, times) {
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
 */

/* window.renderStatistics = function (ctx, names, times) {
  var textX = 150;
  var textY = 25;
  drawCloud (ctx);
  drawText (ctx, 'Ура вы победили!', 'PT Mono', '000', 16, textX, textY);
  drawText (ctx, 'Список результатов:', 'PT Mono', '000', 16, textX, (textY + 20));
  var max = -1;
  maximum (times, max);
  var histogrammHeight = 150; // px
  var step = histogrammHeight / (max - 0);
  var columnWidth = 40; // px
  var columnSpace = 50; // px
  var startX = 150;
  var startY = 270; // начальные координаты
  // дополнительные параметры
  var columnHeight = 0; // px, рассчитывается в цикле
  var timeY = 20; // добавочный коэффициент к ординате для отображения времени над столбцами гистограммы
  for (var i = 0; i < times.length; i++) {
    columnHeight = step.toFixed(0) * times[i].toFixed(0);
    drawColumn (ctx, startX, startY, columnWidth, columnHeight, names, i);
    drawText (ctx, names[i], 'PT Mono', '000', 16, startX, startY);
    startX += (columnSpace + columnWidth);
  }
}; */

window.renderStatistics = function (ctx, names, times) {
  var textX = 150;
  var textY = 25;
  drawCloud (ctx);
  drawText (ctx, 'Ура вы победили!', 'PT Mono', '000', 16, textX, textY);
  drawText (ctx, 'Список результатов:', 'PT Mono', '000', 16, textX, (textY + 20));
  var max = -1;
  maximum (times, max);
  var histogrammHeight = 150; // px
  var step = histogrammHeight / (max - 0);
  var columnWidth = 40; // px
  var columnSpace = 50; // px
  var startX = 150;
  var startY = 270; // начальные координаты
  // дополнительные параметры
  var columnHeight = 0; // px, рассчитывается в цикле
  var timeY = 20; // добавочный коэффициент к ординате для отображения времени над столбцами гистограммы
  for (var i = 0; i < times.length; i++) {
    columnHeight = step.toFixed(0) * times[i].toFixed(0);
    drawColumn (ctx, startX, startY, columnWidth, columnHeight, names, i);
    drawText (ctx, names[i], 'PT Mono', '000', 16, startX, startY);
    startX += (columnSpace + columnWidth);
  }
};

function drawCloud (ctx) {
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
};

function maximum (times, max) {
  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
    }
  }
  return max;
}

function getRandom (a, b, fixNum) {
  return (Math.floor( Math.random( ) * (b - a + 1) ) + a).toFixed(fixNum);
};

function randColor () {
  var r = getRandom(0, 256, 0);
  var b = getRandom(0, 256, 0);
  var g = getRandom(0, 256, 0);
  var o = getRandom(0.4, 0.8, 2);
  return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + o + ')';
};

function drawColumn (ctx, startX, startY, columnWidth, columnHeight, names, i) {
  var columnY = 15;
  // Определение цвета колонки, в конце функция индекса rgba, задаваемого случайным образом
  ctx.fillStyle = (names[i] === 'Вы') ? 'rgba(256, 0, 0, 1.0)' : randColor ();
  ctx.fillRect(startX, (startY - columnHeight - columnY), columnWidth, columnHeight);
};

function drawText(ctx, drawingText, textFont, textColor, fontSize, textX, textY) {
  ctx.fillStyle = '#' + textColor; // в шестнадцатиричной системе
  ctx.font = fontSize + 'px ' + textFont;
  ctx.fillText(drawingText, textX, textY);
};
