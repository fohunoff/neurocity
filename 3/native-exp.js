'use strict';

(function () {
  var printHeWo = function () {
    return console.log('HeWo');
  };
  
  window.printHeWo = printHeWo;
})();