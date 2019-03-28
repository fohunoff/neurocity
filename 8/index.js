'use strict';

(function () {
  var button = document.querySelector('.button');
  var boxes = document.querySelectorAll('.box');
  var isOpen = false;

  var PriceImages = {
    car: 'img/car.png',
    plant: 'img/plant.png',
    tickets: 'img/tickets.png',
    robot: 'img/robot.png',
    duck: 'img/duckling.png',
    sword: 'img/sword.png',
  };

  var Prices = Object.keys(PriceImages);

  var superPrice = function (elem) {
    elem.classList.add('super-price');
  }

  var openBox = function (box, index, priceImage) {
    var cover = box.querySelector('.box__cover');
    var price = box.querySelector('.box__inner');
    var priceName = priceImage[index];

    cover.classList.toggle('box__cover--opened');
    price.classList.toggle('box__inner--show');
    price.style.backgroundImage = 'url(' + PriceImages[priceName] + ')';
    
    if (priceName === 'car') {
      superPrice(price);
    }
    
    isOpen ? price.classList.remove('super-price') : null;
  }
  
  button.addEventListener('click', function () {
    if (!isOpen) {
      Prices.sort(function (a, b) {
        return Math.random() - 0.5;
      });
    };

    for (var i = 0; i < 3; i++) {
      openBox(boxes[i], i, Prices);
    }

    isOpen = !isOpen;


  });
})();