'use strict';

(function () {

  var container = document.querySelector('.container');
  var mockURL = 'https://my-json-server.typicode.com/typicode/demo/posts';

  /**
   * 
   * @param {Object} data 
   */
  var successRender = function (data, title) {
    console.log('[Метод]: ' + title);
    console.log(data);
    var ul = document.createElement('ul');
    var p = document.createElement('p');

    data.map(el => {
      var li = document.createElement('li');
      li.textContent = 'id: ' + el.id + ', post: ' + el.title;
      ul.appendChild(li);
    });

    p.innerHTML = 'Список подготовлен через: <b>' + title + '</b>';

    container.appendChild(p);
    container.appendChild(ul);
  }

  // xhr
  window.xhr.methodGET(mockURL, successRender);

  // fetch
  fetch(mockURL, {
    method: 'get'
  })
  .then(response => response.json())
  .then(response => successRender(response, 'fetch'))
  .catch(e => console.log(e));

})();
