(function(XHR){
  'use strict';

  global.createXHR = function() {
    if ( this.XMLHttpRequest ) {
      return this.XMLHttpRequest();
    }
  };

 // 또는
 var createXHR;

 if ( this.XMLHttpRequest ) {
   // IE 7+, Modern Web Browser
   createXHR = function() {
      return this.XMLHttpRequest();
    };
  }
  else {
    // IE 6
    createXHR = function() {
      return ActiveXObject('Microsoft.XMLHTTP');
    };
 }
})(this)

(function(global, Ajax){
  'use strict';

  var xhr = new Ajax();

  console.dir(xhr);

  // 동기(Sync) 방식으로 통신
  // 전달인자 1 : '통신 방법'
  // 전달인자 2 : '파일 경로'
  // 전달인자 3 : '비동기 설정' [동기 : false, 비동기: true]
  xhr.open('GET', './data/data.txt');


  // 버튼 클릭 이벤트 핸들링
  var ajax_call_btn         = document.querySelector('.call-ajax-data');
  var ajax_call_data_result = document.querySelector('.ajax-data-result');

  // 동기/비동기 방식에 대한 이해
  xhr.send(); // 데이터 요청..............................

  // 비동기 통신일 경우는 아래 코드가 바로 실행
  // console.log('xhr.status:', xhr.status); //0

  // 비동기 통신 상태를 감지하여 콜백 처리하는 이벤트 구문
  // 신형 이벤트 모델
  xhr.addEventListener('readystatechange', checkAjaxCommunication);
  // 구형 이벤트 모델
  // xhr.onreadystatechange = checkAjaxCommunication;

  function checkAjaxCommunication() {
    if ( xhr.status === 200 && xhr.readyState === 4 ) {
      console.log('데이터 통신 성공!');
      console.log('xhr.response:', xhr.response);
      console.log('xhr.responseText:', xhr.responseText);
      ajax_call_data_result.innerHTML = xhr.responseText;
    }
  }


  // ajax_call_btn.addEventListener('click', callAjaxData);
  //
  // function callAjaxData() {
  //   console.log('콜백 Ajax 데이터');
  //   // 200: success, 404: client error
  //   console.log('xhr.status:', xhr.status);
  //   if ( xhr.status === 200 ) {
  //     console.log('데이터 통신에 성공했습니다. :-)');
  //     ajax_call_data_result.innerHTML = xhr.responseText;
  //   } else {
  //     console.error('데이터 통신에 실패했습니다. :-(');
  //     ajax_call_data_result.innerHTML = '데이터 통신에 실패했습니다. :-(';
  //     ajax_call_data_result.classList.add('error');
  //   }
  // }

})(this, this.XMLHttpRequest);
