

// 영역을 설정해서 그 안에서만 엄격 모드를 실행할 수 있다.
function localScope() {
  'use strict';
}


/////////////
/// 클로저 ///
////////////

//자바스크립트 함수를 'First Class Object'라고 부르는 이유 중 하나.
function localScope(callback) {
  'use strict';
  // 특정 코드 수행 ...
  for (var i = 0, l = 100; i < l; i += 4) {
    console.log('i:',i);
  }
  // 전달받은 함수인자를 실행
  // 그 전에 조건 구문을 사용하여 올바른 데이터 유형을 감지한 후 실행
  // 전달받은 인자의 유형이 함수일 경우에만 callback() 실행

  // 1. if문을 사용할 경우
  var is_callback = typeof callback === 'function';
  if ( is_callback ) {
    callback();
  }
  // 2. 3항 연산자를 사용한 조건 처리
  is_callback ? callback() : null;
  // 3. 논리 연산자를 사용한 조건 처리
  is_callback && callback();
  // 4. switch 문을 사용하는 조건 처리
  switch( is_callback ) {
    case true: callback();
    break;
    case false: console.info('함수를 전달할 경우 콜백 처리됩니다.');
  }
}

// 경우 1. 함수 인자가 있을 경우
localScope(function() {
  console.log('abc');
});

// 경우 2. 함수 인자가 없을 경우
localScope();




// -----------------------------------------------------------------------------
// 함수가 일급객체인 이유 2
// 함수는 함수를 인자로 받을 수 있을 뿐만 아니라, 함수를 반환(return)할 수도 있다.
function returnFunction (data) {

}
returnFunction([ 10, 20, function(a, b){ return a + b; }]);

// 자바스크립트 함수에서 함수를 반환하다.
function createCountDown(count) {
  // count 매개변수(Parameter) 값 초기 설정
  count = ( typeof count !== 'number' ? false : count ) || 10;
  // 위와 아래 코드는 같다.
  if ( typeof count !== 'number') { count = 10; }
  console.log(count);
}


createCountDown(90);
createCountDown('90');

// 전역을 오염시키지말아라 (전역 변수를 사용하지 않는다.)
// 함수 실행 과정에서 기억해두기 위한 변수는 동일한 영역에 존재하지 않아야 한다.
// 또한 변수는 초기 선언과정에서 값이 할당되면 그 순간으로 더 이상 코드가 다시 실행되지 않는다.
var count = 10;

function countDown() {
  count--;
  return count;
  }
}
countDown();

// -----------------------------------------------------------------------------
// 객체를 전달받는 함수, 객체를 반환하는 함수
// 문서 객체에 스타일을 설정하는 함수







// 자바스크립트 함수의 특징
// 어떤 데이터 유형도 전달 인자로 받을 수 있고
// 어떤 데이터 유형도 반환할 수 있따.
// 이 과정에서 객체[함수,배열,객체]를 반환할 경우
// 반환된 객체가 함ㅅ





//IIFE 패턴
//function (){} // 문법 오류
//function (){}() // () 실행 연산자 붙은 이 코드도.. 문법 오류다.

// 아래 코드는 정상적으로 함수가 실행된다. 즉시!!!
+function(){ console.log('IIFE Patter'); }();
!function(){ console.log('IIFE Patter'); }();
~function(){ console.log('IIFE Patter'); }();

// 하지만 정체모를 위 코드 보다는 아래와 같은 유형으로 작성하길 권장한다.
( function(){ ... }() ); // 권장
( function(){ ... } )();



(function(global){
  console.log('count:', count);
  // 노출 패턴
  global.count = count;
})(window);

// A팀
(function(global){
  'use strict';
  var fds = '프론트엔드 개발 A팀';
})(this);

// B팀
(function(global){
  'use strict';
  var fds = '프론트엔드 개발 B팀';
})(this);
