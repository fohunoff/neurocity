'use strict';

(function () {

  var REQUEST_TIMEOUT = 600000; // 10 min

  var STATUS_CODE = {
    ok: 200,
    badRequest: 400,
    notAuthorized: 401,
    notFound: 404,
    serverError: 500
  };


  /* Функция запроса на сервер */
  function executeRequest(method, url, successHandler, checkStatusHandler, data) {
    var xhr = new XMLHttpRequest();

    xhr.responseType = 'json';

    xhr.addEventListener('error', function () {
      // Функция обработки ошибки
      // вывод в консоль -- для тестового
      console.log('Произошла ошибка соединения');
    });

    xhr.addEventListener('timeout', function () {
      // Функция обработки ошибки не написана
      // вывод в консоль -- для тестового
      console.log('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });

    xhr.timeout = REQUEST_TIMEOUT; // Ограничение по времени

    // Функция проверки состояния ответа сервера
    var readyStateHandler = function () {
      if (xhr.readyState !== 4) {
        // checkStatusHandler();
      } else {
        var error;
        switch (xhr.status) {
          case STATUS_CODE.ok:
            successHandler(xhr.response, 'xhr');
            break;
          case STATUS_CODE.badRequest:
            error = 'Неверный запрос';
            break;
          case STATUS_CODE.notFound:
            error = 'Ничего не найдено';
            break;
          case STATUS_CODE.notAuthorized:
            error = 'Пользователь не авторизован';
            break;
          case STATUS_CODE.serverError:
            error = 'Ошибка на стороне сервера';
            break;
          default:
            error = 'Cтатус ответа: : ' + xhr.status + ' ' + xhr.statusText;
        }

        if (error) {
          // Функция обработки ошибки
          // вывод в консоль -- для тестового
          console.log(error);
        }
      }
    };

    xhr.addEventListener('readystatechange', readyStateHandler);

    xhr.open(method, url);
    xhr.send(data);
  }

  var methodGET = function (url, successHandler, checkStatusHandler) {
    executeRequest('GET', url, successHandler, checkStatusHandler);
  };

  var methodPOST = function (successHandler, checkStatusHandler, data) {
    executeRequest('POST', url, successHandler, checkStatusHandler, data);
  };

  window.xhr = {
    methodGET: methodGET,
    methodPOST: methodPOST,
  };

})();