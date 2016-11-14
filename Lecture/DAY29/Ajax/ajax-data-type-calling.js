/*! ajax-data-type-calling.js © yamoo9.net, 2016 */
(function(global, Ajax){
  'use strict';

  var buttons  = document.querySelectorAll('.call-ajax-data');
  var print_el = document.querySelector('.ajax-data-result');

  [].forEach.call(buttons, function(button) {
    button.addEventListener('click', AjaxCalling);
  });

  function AjaxCalling() {
    var data_type = this.classList.item(1);
    // Ajax 설정
    var xhr       = new XMLHttpRequest(),
        method    = 'GET',
        url       = ('./data/' + data_type).replace(/-/, '.');
    xhr.open(method, url);
    // 비동기 통신 요청에 따른 데이터를 받는 상황(이벤트)이 오면 printData() 함수 실행
    xhr.addEventListener('readystatechange', printData.bind(xhr, url));
    xhr.send(); // 서버 데이터 요청
  }

  function printData(url) {
    url = url.split('.'); // 'txt', 'html', 'xml', 'json'
    var type = url[url.length - 1];
    if(this.status === 200 && this.readyState === 4) {
      switch(type) {
        case 'txt':
        case 'html':
          print_el.innerHTML = this.responseText;
        break;
        case 'xml':
          // print_el.innerHTML = 'print xml data type';
          var xml_doc = this.responseXML;
          var people = xml_doc.getElementsByTagName('person');
          console.log(people);
          var html_template = '';
          for ( var i=0, l=people.length; i<l; i++ ) {
            var person = people[i];
            var person_name = person.querySelector('name').textContent;
            console.log(person_name);
            var person_tel  = person.querySelector('tel').textContent;
            var person_mail = person.querySelector('mail').textContent;
            html_template += '<ul>';
            html_template +=  '<li>'+ person_name + '</li>';
            html_template +=  '<li>'+ person_tel + '</li>';
            html_template +=  '<li>'+ person_mail + '</li>';
            html_template += '</ul>';

            print_el.innerHTML = html_template;
          }

        break;
        case 'json':
          var text2json_obj = global.JSON.parse(this.response);
          text2json_obj.results.forEach(function(obj) {
            console.log('name: ', obj.name.first + ' ' + obj.name.last);
          });
        break;
      }
    }
  }

})(this, this.XMLHttpRequest);
