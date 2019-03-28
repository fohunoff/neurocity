'use strict';

(function () {

  var socket = new WebSocket("ws://echo.websocket.org/");

  var obj = {
    name: "Иван",
    age: 32
  };

  socket.onopen = function() {
    console.log("Соединение установлено.");

    socket.send(JSON.stringify(obj));
  };

  socket.onclose = function(evt) {
    if (evt.wasClean) {
      console.log('Соединение закрыто чисто');
    } else {
      console.log('Обрыв соединения'); // например, "убит" процесс сервера
    }
    console.log('Код: ' + evt.code + ' причина: ' + evt.reason);
  };
  
  socket.onmessage = function(evt) {
    console.log("Получены данные:");
    console.log(JSON.parse(evt.data));
  };
  
  socket.onerror = function(error) {
    console.log("Ошибка " + error.message);
  };

})();