//1.
//
//
//2.
//switch 내부에서는 엄격한 비교 실행
//
//3. srcset?
//https://www.html5rocks.com/ko/tutorials/responsive/picture-element/
//https://webkit.org/demos/srcset/
//
//4. flexbox
//flex:1 은 flex 1 1 auto와 동일
//flex:none은 0 0 auto와 동일
//
//5. node-sass 단축키
//-t : ruby에서 쓰인다
//
//6. 비교연산자
//
//7. 자바스크립트 함수에 대한 설명 중 옳은 것
//1급?
//
//8. sass출력 스타일
//
//9. 대체선택자와 믹스인의 차이점과 상용법
//대체 선택자는 코드 블록을 생성하지 않고 선택자를 묶음으로이를 공유한다
//믹스인은 호출과정을 통해 각 코드 블록을 생성ㄴ한다.
//
//대체 선택자는 고정된 코드를 재 사용하여 선택자를 묶어 처리할때 유리하다.
//믹스인은 절달되는 인자 값에 따라 각각 다른 코드 묶음을 제공할 때 유용하다
//
//10.
//@mixin flexAlign( $position: cm, $flow: row wrap) {
// display: felx;
// flex-flow: $flow;
// @if $position
//}
//
//11. 자바스크립트 반복 구문이 아닌 것은
//each 라는 구문은 없다
// 비슷한 것으로 sass에 @each라는 것이 있땨
//
// 12. for, for ~in
// for문은 배열 반복
// for in은 객체
//
// 13. while, do while
// while은 조건이 참일 때만 반복 수행
// do while은 조건이 거짓이라도 한번은 반복 수행한다
//
// 14. sass map순환에 유용한 반복문은
// @each
//
// 15. sass @for구문에서 to, through의 차이점
//
// 16.
// @debug:
// @warn: 더 이상 쓰지 않는 속성 등을 썻을때 권고하는 느낌
// @error: 사용자에게 경고를출력


///////////////////////
// 자바스크립트 반복문 /////
///////////////////////

// ES 3
//// while() { ... }
var condition = true, count = 0;
while (condition) {
  // 조건이 참일 경우 코드 블록 반복 수행
  // '선증가''와 '후증가'는 반복횟수에 차이를 일으킨다.
  // ++code : 선증가
  // code++ : 후증가
  // if ( count++ > 3 ) {  // 0, 1, 2, 3, 4
  if ( ++count > 3 ) { // 1, 2, 3, 4,
    condition = !condition;
  }
  console.log('count:', count); // 1, 2, 3, 4
}

//// do { ... } while();
do {
  if ( ++count > 3 ) { // 5, 6
    condition = !condition;
  }
} while (condition);
console.log('count:', count);

//// for ( ; ; ) { ... }
// 기본적인 for문 형태
for ( var i=0; i<10; i++) {
  console.log('i:', i);
}
console.log('i:', i);
// 다른 형태의 for문
for (var count = 0, condition = true; condition;) {
  if ( ++count > 3 ) { // 1, 2, 3, 4,
    condition = !condition;
}
  console.log('count:', count); // 1, 2, 3, 4
}
// 1부터 100까지 숫자를 합한 값을 for문으로 구하시오.
var result = 0;
for (var i = 1; i < 101; i++) {
  result = result + i;
}
console.log(sum);


//// for ( var property in object ) { ... }
var fds = {};
fds.name = 'Front-End Develop SCHOOL';

//아래 두 표기법은 객체의 속성에 접근하는 방법으로 역할 상의 차이가 없다
//대만 각괄호 표기법에서는 내부의 속성 이름을 변수로 설정할 수 있따.
//그런 이유로 for ~ in문 내부에서는 각괄호 표기법을 사용한다
//fds['name'] = fds.name

//'속성' in 객체('{}')
console.log( fds['name'], 'name' in fds );

for ( var prop in fds ) {
  console.log('prop:', prop);
  console.log('fds[prop]:', fds[prop]);
  console.log('fds[prop] === fds,name:', fds.name);
}

//
var kijoong = {
  'name': '기중',
  'role': '학생',
  'age': '20',
  'height': '200',
  'weight': '50kg'
};
for (var p in kijoong) {
  console.log('속성: ' + p + ', 값: ' + kijoong[p]);
}


//// forEach()
// for ( var property in object ) { ... }

// ES 5
// [].forEach(function(item, index){ ... });
// [].map
//
// ES 6 (ECMA Script 2015)
// for ( var [key, value] of [Array, Object, Map] ) { ... }
//
//
//
//
///////////////////
//자바스크립트 함수////
///////////////////
//
//
//함수는 코드의 묶음이다.
//함수명은 공백없이 카멜케이스표기법을 사용한다.
//with문은 쓰지 않는 것이 좋다.
//
//호출할 때 괄호필요
//
//함수 정의 3가지
//1. 함수 선언식
//function fnName() {}
//2. 함수 표현식 (함수 리터널)
//var fnName2 = function() {};
//
//함수 실행은 모두
//fnName();
//fnName2();
//return이 명시적이지 않을 때는 undefined가 출력된다.
//
//

////////////////////////////////////////////
///전역 (global Scope) vs 지역 (Local Scope)//
////////////////////////////////////////////
//
//전역 (Global Scope) === Client Env. window {}
//웹 브라우저(클라이언트, 프론트엔드) 환경에서 전역 객체라 함은?
//window {} 객체를 말한다.
var coffee = "아메리카노"; //window.coffee와 동일
console.log('coffee === window.coffee:', coffee === window.coffee);

console.log('fnDeclaration === window.fnDeclaration:', fnDeclaration === window.fnDeclaration);

// * 전역 변수, 함수는 웹 브라우저 환경에서 전역 객체인 window {}의 속성이다.
//
// 전역 변수, 전역 함수에서의 this는??
var global_valiable = this;
var globalFunction = function() {
  console.log('this:', this);
}

globalFunction(); //전역 함수를 실행, 함수를 실행시킨 주체는 누구인가?
//위 함수의 실행은 아래 코드와 동일하다. 결국 함수를 싫애시킨 주체는
//전역 객체인 window이므로 함수 내부의 this는 window를 가리킨다.
// === window.globalFunction();
// globalFunction 함수는 전역 함수로 window 객체의 속성이지만...
// 다른 누군가가 이 함수를 빌려 사용할 수 있다.
// 함수를 document객체의 onclick속성에 참조함으로써 함수 내부의 this는 document객체를 가리키도록 변경되었다.
document.onclick = globalFunction;
//
/////////
// 전역이라 함은 Global Scope로 window 객체의 영역을 말한다.
// 지역이라 함은 함수 내부의 공간을 지역이라고 볼 수 있다.
//
// 전역
var scope_variable = '전역 변수'
console.log('전역 scope_variable:', scope_variable);
//
// 블록문 (지역을 생산하나?)
// if, else, while, for, switch 구문에서는 별도의 지역이 생성되지 않는다.
{
  var scope_variable = '지역 변수?';
  console.log('블록문 내부 scope_variable:', scope_variable);
}
console.log('블록문 외부 scope_variable:', scope_variable);
//
// 그렇다면 블록문이 아닌, 어떤 경우에 전역과 구분되는 지역이 생성되나?
// 그것은 바로 자바스크립트 '함수'이다.
function createLocalScope() {
  var scope_variable = '함수 내부 지역 변수?';
  console.log('함수 내부 scope_variable:', scope_variable);
}
createLocalScope();
console.log('함수 외부 scope_variable:', scope_variable);
//////////
//전역에서  this, self, window는 모두 동일한 객체를 말합니다.
console.log('this:', this)
console.log('self:', self)
console.log('window:', window)
// 아래와 같은 with(){}구문은 사용하지 말자!!
with(console) {
  log('this:', this)
  log('self:', self)
  log('window:', window)
}
//http://bonsaiden.github.io/JavaScript-Garden/ko/
//
//
//스코프란?
//영역.
//context 영역, 흐름
//ㄴ 전역의 context
//ㄴ 함수 안의 지역 context 등
//
//전역
var hadoom = '하둠';

function localFn() {
  //지역
  haddom = 'Hadoom';

  function inLoclFn() {
    //지역 내 지역
    hadoom = '하아둠';
    //window.hadoom
  }
}
localFn();
console.log('hadoom:', hadoom); // ????
// 거슬러 올라가서 '하둠'을 찾게된다.
// 거슬러 올라가는 시간이 걸려서 안좋다.
// 그래서 var를 써주는 게 좋다.
// 아니면 해당 스코프를 명시적(window)으로 써주는게 좋다.
var hadoom = '하둠';

function localFn() {
  //지역
  var haddom = 'Hadoom';

  function inLoclFn() {
    //지역 내 지역
    var hadoom = '하아둠';
  }
}
//
// 자바스크립트 hoist 호이스트(호이스팅)  현상
// 호이스팅 : 영역의 가장 상위에 끌어 올려지다.
// 현상 1. function 선언문(함수 표현식은 아님)의 몸체가 통째로 끌어 올려진다.
// 현상 2. var 선언문에서 할당된 값이 아닌, 변수 이름만 끌어 올려진다.
//
function understandingHosit() {
  // 독립된 공간(영역, scope)
  goKimgdom();
  var king = '왕';
  var goKingdom = function () { ... }
  awayKingdom();
  function awayKingdom() { ... }
}
//
function understandingHosit() {
  function awayKingdom() { ... };
  var king, goKingdom;
  goKingdomg(); // undefined, Type error
  king = '왕';
  goKingdom = function() { ... };
  awayKingdom();
}
// 함수는 코드 블럭 까지 통째로 끌어올려진다.
// 변수는 변수 선언된 것만 올려진다.(할당되는 값을 빼고)
// 정보 할당은 런타임 중에 실행된다.
//
// 호이스팅 문제
// -- Scope ----------------------------
var course = 'design';

fn();

function fn() {
  if (coures) {
    var course = 'develop';
    console.log(course); // ????
  }
  console.log(course); // ????
}
console.log(course); // ????
///////////
//
// 함수 선언, 함수 확장(매개변수 설정)
function showMessage() {
  console.log('이것은 메시지 입니다.');
}
showMessage();
showMessage();
showMessage();
//
function showMessage(message) {
  // message = 'this is message.';
  // message = 'this is messagnger.';
  // message = 'this is cook.'
  // 초기 값 설정
  message = message || 'default message';
  console.log(mesage);

showMessage('this is message.');
showMessage('this is messagnger.');
showMessage('this is cook.');

//
//
//함수 내부에서 자체에서 형을 검증하자
function sum(num1, num2) {
  // 기대하는 데이터 유형을 감별하여 문제가 발생한 경우
  // 사용자에게 안내해줘야 한다. 유효성검사 Validation
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    // console.error('전달된 인자 값은 숫자 유형이 아닙니다. 숫자 유형을 넣어주세요.'); // 경고는 하지만 동작은 실행됨.
    throw new Error('전달된 인자 값은 숫자 유형이 아닙니다. 숫자 유형을 넣어주세요.'); // 오류 발생시, 코드 중단
  }
  return num1 + num2; // return 키워드는 함수를 종료, 값을 반환한다.
  // return 뒤의 구문은 실행되지 않는다.
  // 함수가 종료되었기 때문에
  var demo = '데모';
  console.log(demo);
}
/**
 * @function sum
 * @param {number} num1
 * @param {number} num2
 * @return {number} 두 수의 합을 반환
 */
//이렇게 함수에 대해 정보를 표현할 수 있다. (패키지 : docblockr)
//
////////
//반환 값이 없는 함수
//목적(쓰임새)에 맞지 않는 함수!
function getWindowWidth() {
  // 창 크기의 가로 폭 길이 (너비, width)
  var _window_width = window.innerWidth;
  console.log('창 크기의 가로 폭 길이 (너비, width):', _window_width);
}
//반환 값이 있는 함수
//목적에 맞는 함수
function getWindowWidth() {
  // 창 크기의 가로 폭 길이 (너비, width)
  var _window_width = window.innerWidth;
  console.log('창 크기의 가로 폭 길이 (너비, width):', _window_width);
  return _window_width;
  //return window.innerWidth; //한 줄로 간단하게 표현할 수 있다.
}
//
//
// 함수 내부에 전달되는 인자들의 집합
// arguments: 유사 배열 (like Array Object)
// length 속성을 가짐, .push(), .pop() 배열 메소드는 없음.

// 1부터 100까지 숫자를 합한 값을 for문으로 구하시오.
// var result = 0;
// for (var i = 1; i < 101; i++) {
//   result = result + i;
// }
// console.log(sum);

// function sum(n1, n2, n3) {
//   if ( typeof n1 !== 'number' || typeof n2 !== 'number' || typeof n2 !== 'number') {
//     throw new Error('전달인자는 모두 숫자 유형이어야 합니다.');
//   }
//   return n1 + n2 + n3;
// }

function sum() {
  //arguments 객체 (전달된 인자들의 집합)
  //arguments 객체의 원소 개수: arguments.length
  //length 속성 값을 알고 있다면 순환 처리(for, do ~ while, while)가 가능
  arguments[0] = ''; // 설정도 가능하다.
  for ( var i = 0, l = arguments.length; i < l; i++ ) {
    console.log(arguments[i]);

    // sum = sum + arguments[i];
    sum += arguments[i];
  }
  return sum;
}

sum(1, 2, 3);
sum(10, 20, 30);
sum(10, 20, 30, 40, 50, 60); // ????

while ( i < l) {


}
//
//
//전역 함수
function showMe() {
  console.log(this);
}
//전역 객체의 내부(context)에서 함수 실행
showMe();
//

//
//
//
//
//
//
//
//
