(function(global){
  'use strict';

// console.log('global === window:', global === window); // global === window: true

//문서에서 제어할 객체를 각 변수에 참조합니다.
//#gnb, #print-area
var gnb, print_area, gnb_links, doc = global.document;
gnb = doc.querySelector('#gnb');
gnb_links = doc.querySelectorAll('a');
console.log(gnb_links);
print_area = doc.querySelector('#print-area');
var updatePrintMessage = function() {
 // 함수 내부의 this 키워드는 함수를 실행한 주체를 가리킨다.
 // console.log(this)
 var message = this.getAttribute('data-print-message');



 //내용바꿈
 //프린트 에이에 뿌려준다.
};
console.log( 'gnb_links.length:', gnb_links.length );

})(this);
// console.log(global); // 오류발생
