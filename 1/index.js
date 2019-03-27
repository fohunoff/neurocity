'use strict';

(function () {

  var slider = document.getElementById('touch-slider');
  var images = slider.querySelectorAll('img');

  var coordinate = {
    startX: 0,
    currentX: 0,
    moveX: 0,
  };
  

  /** Устанавливаем максималььную ширину слайдера
   * 
   * @param {Nodes} listElements - элемент списка слайдера
   * @return {Number} - целое число, сумма всех ширин элементов в слайдере
   * 
   */
  var setMaxWidthForSlider = function(listElements) {
    var sum = 0;
    [].map.call(listElements, elem => sum += elem.width);
    return sum;
  };

  /** Установка координат и смещение слайдера
   * 
   */
  var moveSlider = function() {
    slider.style.marginLeft = Number(coordinate.currentX) - Number(coordinate.startX - coordinate.moveX) + 'px';
    coordinate.currentX = slider.style.marginLeft.replace('px', '');
    coordinate.startX = coordinate.moveX;
  };

  /** Переписываение координат при движении
   * 
   * @param {Event} evt - объект события
   */
  var touchmoveHandler = function (evt) {
    coordinate.moveX = evt.targetTouches[0].pageX;
    moveSlider(coordinate);
  };

  /** Возвращаем слайдер в началао (или конец) списка элементов слайдера
   * 
   * @param {Number} maxSize - размер слайдера (ширина всех блоков)
   * @param {Number} screenSize - размер экрана устройства
   * 
   */
  var returnSliderBack = function (maxSize, screenSize) {
    if (coordinate.currentX > 0) {
      slider.style.marginLeft = '0px';
    }
    if (Math.abs(coordinate.currentX) > (maxSize - screenSize)) {
      slider.style.marginLeft = 0 - (maxSize - screenSize) + 'px';
    }
  };

  
  // Сами обработчики (К.О.)

  slider.addEventListener('touchstart', function(evt) {
    coordinate.startX = Math.round(evt.targetTouches[0].pageX);
    coordinate.currentX = slider.style.marginLeft.replace('px', '');
    
    window.addEventListener('touchmove', touchmoveHandler);
  });

  
  slider.addEventListener('touchend', function(evt) {
    var screenSize = evt.view.innerWidth;
    var maxWidth = setMaxWidthForSlider(images);

    returnSliderBack(maxWidth, screenSize);

    // Удаляем обработчик (чтобы не висел на window)
    window.removeEventListener('touchmove', touchmoveHandler);
  });

})();