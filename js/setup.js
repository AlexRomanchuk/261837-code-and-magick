﻿'use strict';
var shopElement = document.querySelector('.setup-artifacts-shop');
var cellElement = document.querySelector('.setup-artifacts-cell');
var draggedItems = cellElement.querySelectorAll('img');
var cellsArtifacts = document.querySelector('.setup-artifacts');

for (var i = 0; i < draggedItems.length; i++) {
  // Все элементы в .setup-artifacts-cell и .setup-artifacts-shop получают draggable=true
  draggedItems[i].draggable = true;

  (function (index) {
    shopElement.addEventListener('dragstart', function (evt) {
      evt.dataTransfer.setData('text/plain', draggedItems[index].alt);
    });

    cellsArtifacts.addEventListener('dragover', function (evt) {
      evt.preventDefault();
      return false;
    });

    cellsArtifacts.addEventListener('drop', function (evt) {
      evt.target.style.backgroundColor = '';
      evt.target.appendChild(draggedItems[index]);
      evt.preventDefault();
      evt.preventDefault();
      return true;
    });

    cellsArtifacts.addEventListener('dragenter', function (evt) {
      cellsArtifacts.style.outline = '2px dashed red';
      evt.target.style.backgroundColor = 'yellow';
      evt.preventDefault();
    });

    cellsArtifacts.addEventListener('dragleave', function (evt) {
      cellsArtifacts.style.outline = '';
      evt.target.style.backgroundColor = '';
      evt.preventDefault();
    });

    // Функции настройки цветов элементов игры
    var fillElement = function (elem, color) {
      elem.style.fill = color;
    };

    var changeElementBackground = function (elem, color) {
      elem.style.backgroundColor = color;
    };

    window.colorizeElement(window.mainSetup.coat, window.mainSetup.coatColors, fillElement);
    window.colorizeElement(window.mainSetup.eyes, window.mainSetup.eyesColors, fillElement);
    window.colorizeElement(window.mainSetup.fireball, window.mainSetup.fireballColors, changeElementBackground);
  })(i);
}
