'use strict';

window.renderStatistics = function (ctx, names, times) {
  var textX = 150;
  var textY = 25;
  drawCloud(ctx);
  drawText(ctx, 'Ура вы победили!', 'PT Mono', '000', 16, textX, textY);
  drawText(ctx, 'Список результатов:', 'PT Mono', '000', 16, textX, (textY + 20));
  var max = getMaximum(times);
  var histogrammHeight = 150; // px
  var step = histogrammHeight / (max - 0);
  var columnWidth = 40; // px
  var columnSpace = 50; // px
  var startX = 150;
  var startY = 270; // начальные координаты
  // дополнительные параметры
  var columnHeight = 0; // px, рассчитывается в цикле
  var timeX = 90;
  var timeY = 20; // добавочные коэффициенты к координатам для отображения времени над столбцами гистограммы
  for (var i = 0; i < times.length; i++) {
    columnHeight = step * times[i];
    drawColumn(ctx, startX, startY, columnWidth, columnHeight, names, i);
    drawText(ctx, names[i], 'PT Mono', '000', 16, startX, startY);
    startX += (columnSpace + columnWidth);
    drawText(ctx, times[i].toFixed(0), 'PT Mono', '000', 16, startX - timeX, (startY - columnHeight - timeY));
  }
};

function drawCloud(ctx) {
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
}

function getMaximum(times) {
  var maximum = -1;
  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > maximum) {
      maximum = time;
    }
  }
  return maximum;
}

function getRandom(num1, num2, fixNum) {
  return (Math.floor(Math.random() * (num2 - num1 + 1)) + num1).toFixed(fixNum);
}

function randColor() {
  var colorRed = getRandom(0, 256, 0);
  var colorBlue = getRandom(0, 256, 0);
  var colorGreen = getRandom(0, 256, 0);
  var colorOpacity = getRandom(0.4, 0.9, 2);
  return 'rgba(' + colorRed + ', ' + colorGreen + ', ' + colorBlue + ', ' + colorOpacity + ')';
}

function drawColumn(ctx, startX, startY, columnWidth, columnHeight, names, i) {
  var columnY = 15;
  // Определение цвета колонки, в конце функция индекса rgba, задаваемого случайным образом
  ctx.fillStyle = (names[i] === 'Вы') ? 'rgba(256, 0, 0, 1.0)' : randColor();
  ctx.fillRect(startX, (startY - columnHeight - columnY), columnWidth, columnHeight);
}

function drawText(ctx, drawingText, textFont, textColor, fontSize, textX, textY) {
  ctx.fillStyle = '#' + textColor; // в шестнадцатиричной системе
  ctx.font = fontSize + 'px ' + textFont;
  ctx.fillText(drawingText, textX, textY);
}
