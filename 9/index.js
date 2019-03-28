'use strict';

(function () {

  var container = document.querySelector('.container');

  /**
   * @param {Number} min 
   * @param {Number} max 
   * 
   * @return {Number} - целое случайное число в диапазоне агрументов
   */
  var createRandomNumber = function(min, max) {
    return Math.round(Math.random() * (max - min)  + min);
  }

  /**
   * @return {String} - оисание цвета в формате HSL для фона элемента
   */
  var createHSL = function () {
    var hue = createRandomNumber(0, 360);
    var saturation = createRandomNumber(0, 100);
    var lightness = createRandomNumber(0, 100);

    return 'hsl(' + hue + ', ' + saturation + '%, ' + lightness + '%)';
  }

  /**
   * @param {Node} parent - элемент разметки, в котороый вставляется квадрат
   */
  var createSquare = function (parent) {
    var square = document.createElement('div');
    square.classList.add('square');
    square.style.backgroundColor = createHSL();

    parent.appendChild(square);
  }

  /**
   * Генерируем случайное число квадратов, которые нужно отрендерить
   */
  var renderSquares = function () {
    var blockCount = createRandomNumber(10, 100);

    for (var i = 0; i < blockCount; i++) {
      createSquare(container);
    }
  };

  renderSquares();

})();