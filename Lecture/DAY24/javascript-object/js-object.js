/**
 * ----------------------------------------------------------------
 * 자바스크립트에서 객체가 아닌 것들
 * ---------------------------------------------------------------- */

// 배열이란? '값'의 집합
// 객체란? '속성'의 집합 { '속성(key, property)': '값(value)' }

///////////////////////////////
// 자바스크립트에서 객체가 아닌 것들 //
///////////////////////////////

// 원시데이터 유형은 객체가 아니다.
// 속성을 가지지 못한다.

// 원시데이터 유형의 종류
// null
// undefined

// ※ 자바스크립트에서는 마치 객체인 것 마냥 속성을 가져다 쓸 수 있다.
// 숫자 9 값(Literal)
// 문자 'javascript' 값
// 불리언 false 값

/////////////////////
// 객체가 생성되는 과정 //
/////////////////////

// 객체를 생성해서 사용한다.
// 객체를 생성하는 생성자(Constructor)가 객체를 생성(생성된 객체: Instance)한다.

// 숫자 객체를 생성하는 생성자(함수)로부터 숫자 객체를 생성하는 과정
// 생성자 함수와 일반 함수를 구분하기 위한 자바스크립트 이름 관례는
// 생성자 함수 이름의 첫글자를 대문자로 작성한다.

// 생성자 함수
// Number()
// String()
// Boolean()

/////////////////////////
// 본래의 목적과 다른 사용법 //
/////////////////////////

// 위 생성자 함수는 생성자로 사용되기도 하지만, 자바스크립트에서는
// 데이터 유형을 변경하는데 사용되기도 한다.
// String(109203) -> '109203'
// Number(null) -> 1

/////////////////////////////////
// 생성자 함수를 사용한 객체 생성 과정 //
// new 생성자 함수() -> 객체 생성 ///
///////////////////////////////

var maked_number_object = new Number(838372);

console.dir(maked_number_object);


/////////////////////////////////
// 객체는 속성을 포함하는 컨테이너이다. //
/////////////////////////////////

// 속성들의 집합이 객체이다.
// 속성은 변수, 함수 유형을 모두 말한다.
// 단, 함수 유형은 특별히 메소드(Method)라고도 부른다.
// 메소드 이름 작성 관례는 camelCase 표기법을 따른다.
// 메소드(방법) -> 동사 형태 e.g) getName(), setName(), lookHim(), showMeTheMoney()

// 함수객체() : 실행됨
// 함수객체   : 실행안됨

//////////////
// HTML/CSS //
//////////////

// 《어떤 표기법이 맞냐가 아니라, 우리 팀이 어떤 이름 규칙을 쓰느냐이다》

// 하이픈(-)
// 언더스코어(_)
// 카멜케이스()


///////////////////////////
// 네이티브 객체 리터럴 표기법 //
///////////////////////////

var num = 9,
    str = 'nine',
    boo = false,
    fnc = function(){},
    arr = [],
    obj = {};


////////////////////////
// 사용자 정의 생성자 함수 //
////////////////////////

function Atom(name, power) {
  // 방법 1.
  // 'use strict';
  // 엄격한 모드로 하면 this는 더 이상 window가 아니게 된다.
  // 명시적으로 실행하지 않고 암묵적으로 실행했을 경우 e.g) window.Atom()이 아닌 경우
  // 오류가 발생하므로 new를 쓰지않고 쓸 때의 실수를 확인할 수 있다.

  // 방법 2.
  // new를 강제화하는 패턴
  // if (this.constructor !== Atom) {
  //  return new Atrom(name, n);
  // }

  this.name = name;
  this.power = power;
}

var zero = new Atom('고고', 100000);
console.log('zero');




// 사용자 정의 객체를 생성 (new 생성자 함수)
var atom_one = Atom('제롬', 10);
var zero     = new Atom('제로', 100);

// 객체 생성 방법 (리터럴)
var omega = { 'name': '플레인 오브젝트' }; // new Object()



function Car(name, maker) {
  'use strict';
  this.name = name;
  this.maker = maker;
}

/**
 * --------------------------------
 * 자바스크립트 네이티브(내장, 빌트인) 객체
 * Number
 * String ★★★
 * Boolean
 * Function ★★★
 * Array ★★★★
 * Object
 * ----------------------------- */

console.dir(Number);
console.log('%c------------------------------', 'color: #3d9a21');
console.dir(String);
console.log('%c------------------------------', 'color: #3d9a21');
console.dir(Boolean);
console.log('%c------------------------------', 'color: #3d9a21');
console.dir(Function);
console.log('%c------------------------------', 'color: #3d9a21');
console.dir(Array);
console.log('%c------------------------------', 'color: #3d9a21');
console.dir(Object);


// Number 또한 별 거 좀 있어요.
// Boolean 별 거 없어요.
// String, Array 별 거 아주 많아요!!!

// .substring(start, end-1) VS .substr(start, count)

// [뒤에 삽입] .push() VS [앞에 삽입] .unshift()
// [뒤에서 빼냄] .pop() VS [앞에서 빼냄] .shift()

// Function 3가지만 유의하자!!


/** @function clineArray()
전달 받은 배열을 복제한 후, 복제된 배열을 반환하는 함수 */
function cloneArray(arr) {
  // 전달인자 유효성 검증
  if ( !(arr instanceof Array) ) {
    throw new Error('배열을 전달받아야 합니다.');
  }
  // 배열 복제
  var _clone_arr = [];
  for (var i=0, l=arr.length; i<l; i++) {
    _clone_arr.push(arr[i]);
  }
  return _clone_arr;
}

// ----------------------------------------------------

function cloneArraySimple(arr) {
  // 전달인자 유효성 검증
  if ( !(arr instanceof Array) ) {
    throw new Error('배열을 전달받아야 합니다.');
  }
  return arr.slice(0);
}

// ----------------------------------------------------

function makeArray(data) {
  // return Array.prototype.slice.call(data, 0);
  return [].slice.call(data, 0);
}


// 배열의 메소드를 빌려쓰는 패턴
[].forEach.call(all_els, function(el) {
  console.log(el);
});

// 노드리스트(유사배열)를 배열화하는 패턴
all_els = makeArray(all_els);
all_els.forEach(function(el){
  console.log(el);
});
