'use strict';

var cellElement = document.querySelector('.setup-artifacts-cell');
var shopElement = document.querySelector('.setup-artifacts-shop');
var draggedItem = null;
var cellsArtifacts = document.querySelector('.setup-artifacts');

shopElement.addEventListener('dragstart', function (evt) {
  if (evt.target.tagName.toLowerCase() === 'img') {
    draggedItem = evt.target;
    evt.dataTransfer.setData('text/plain', evt.target.alt);
  }
});

cellsArtifacts.addEventListener('dragover', function (evt) {
  evt.preventDefault();
  return false;
});

cellsArtifacts.addEventListener('drop', function (evt) {
  cellElement.style.backgroundColor = '';
  evt.target.appendChild(draggedItem);
  evt.preventDefault();
});

cellsArtifacts.addEventListener('dragenter', function (evt) {
  cellElement.style.backgroundColor = 'yellow';
  evt.preventDefault();
});

cellsArtifacts.addEventListener('dragleave', function (evt) {
  cellElement.style.backgroundColor = '';
  evt.preventDefault();
});

