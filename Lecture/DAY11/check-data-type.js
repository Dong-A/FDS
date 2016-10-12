var num = 102,
    str = 'typeof는 함수가 아니다.',
    boo = !false,
    fnc = function() {},
    arr = [num, boo, fnc],
    obj = {'number_type': num, 'boolean': boo };

// 1. typeof

console.log( '변수에 복사된 데이터 유형:', typeof  num );
console.log( '변수에 복사된 데이터 유형:', typeof  str );
console.log( '변수에 복사된 데이터 유형:', typeof  boo );
console.log( '변수에 참조된 데이터 유형:', typeof  fnc );
// Array 데이터 유형의 경우, typeof로만 정확하게 체크할 수 없다.
// 원래는 'array'인데 결과값으로 'object'가 출력됨.
console.log( '변수에 참조된 데이터 유형:', typeof  arr );
console.log( '변수에 참조된 데이터 유형:', typeof  obj );


console.log(typeof num + str);
console.log(typeof (num + str));




// 2. instanceof 이것은 원형(모체)를 말한다.
// BOOLEAN을 return한다.

console.log( 'obj instanceof Object:', obj instanceof Object);
console.log( 'arr instanceof Array:', arr instanceof Array);
console.log( 'fnc instanceof Function:', fnc instanceof Function);

// instanceof로 원시데이터 유형을 체크할 경우 기대한 값이 나오지 않는다. 원시데이터 유형은 실상 객체가 아닌 그저 값이기에 때문이다.
// 다만 자바스크립트 엔진이 원시 데이터 유형(null, undefined 제외)의 값을 마치 객체인 것처럼 사용할 수 있게 만들어준다.
console.log( 'boo instanceof Boolean:', boo instanceof Boolean);
console.log( 'str instanceof String:', str instanceof String);




// 3. constructor 속성
// 자바스크립트 객체라면 모두 가지고 있는 속성으로
// 자신을 생성한 생섯ㅇ자를 가리켜서 알려준다.

console.log( 'arr.construcotr:', arr.constructor );

console.log( 'num.constructor === Number:', num.constructor === Number );
console.log( 'str.constructor === String:', str.constructor === String );
console.log( 'boo.constructor === Boolean:', boo.constructor === Boolean );
console.log( 'fnc.constructor === Function:', fnc.constructor === Function );
console.log( 'arr.constructor === Array:', arr.constructor === Array);
console.log( 'obj.constructor === Object:', obj.constructor === Object);


// 4. 언어 차원에서 지원되지 않는 사용자 정의 함수
// isType()을 만들자. - 유틸리티, 헬퍼 함수라고 한다.
// 이것은 객체가 아닌 유형도 검증가능하다.

function isType(data) {
  return Object.prototype.toString.call(data).toLowerCase().slice(8, -1);
}

console.log(isType(num));
console.log(isType(str));
console.log(isType(boo));
console.log(isType(fnc));
console.log(isType(arr));
console.log(isType(obj));
console.log(isType(undefined));
console.log(isType(null));
