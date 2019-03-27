'use strict';

(function () {

  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  
  // Квадрат
  ctx.fillStyle = "green";
  ctx.fillRect(10, 10, 100, 100);

  // Прямоугольник
  ctx.fillStyle = "red";
  ctx.fillRect(590, 10, 200, 100);

  // Круг
  ctx.fillStyle = "black";
  ctx.beginPath();
  ctx.arc(60, 540, 50, 0, Math.PI*2, true);
  ctx.fill();

  // Треугольник
  ctx.fillStyle = "yellow";
  ctx.beginPath();
  ctx.moveTo(790, 590);
  ctx.lineTo(590, 590);
  ctx.lineTo(690, 490);
  ctx.closePath();
  ctx.fill();
  
})();