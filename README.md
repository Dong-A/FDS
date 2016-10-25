# FDS
# DAY 18
## 1. 자바스크립트 반복문 (ES 3)
###  1.1. While문
- 기본 문법
```js
while() { ... }
```
- 예제
```js
var condition = true, count = 0;
while (condition) {
	// 조건(condition)이 참일 경우 코드 블록 반속 수행.
	if ( ++count > 3 ) {
	// ++CODE : 선증가
	// CODE++ : 후증가
	// '선증가'와 '후증가'는 반복횟수에 차이가 있다.
	// if (++count > 3) -> 1, 2, 3, 4
	// if (count++ > 3) -> 0, 1, 2, 3, 4
		condition = !condition;
	}
	console.log('count:', count);
```

### 1.2. Do While문

- 기본 문법
```js
do { ... } while(condition);
```
- 예제
```js
do {
  if ( ++count > 3 ) {
    condition = !condition;
  }
} while (condition);
console.log('count:', count);
```

### 1.3. for문

- 기본 문법
```js
for ( ; ; ) { ... }
```

- 예제

```js

	// 1부터 100까지 숫자를 합한 값을 for문으로 구하시오.
for ( var i=0; i<10; i++ ) {
  console.log('i:', i);
}
console.log('i:', i); // 10

for ( var count = 0, condition = true; condition; ) {
  // 코드 블록 반복 수행
  // if ( count++ > 3 ) { // 0, 1, 2, 3, 4
  if ( ++count > 3 ) { // 1, 2, 3, 4
    condition = !condition;
  }
  console.log('count:', count); // 1, 2, 3, 4
}
```

### 1.4. for in문

- 기본 문법
```js
for ( var property in object ) { ... }
```
- 예제

```js
console.log( fds['name'], 'name' in fds );

for ( var prop in fds ) {
  console.log('prop:', prop); // name
  console.log('fds[prop]:', fds[prop]); // 'Front-End Develop SCHOOL'
  console.log('fds[prop] === fds.name:', fds.name); // 'Front-End Develop SCHOOL'
}

var kijoong = {
  'name': '기중',
  'role': '학생',
  'age': 20,
  'height': '2m 30cm',
  'weight': '32kg'
};

for (var p in kijoong) {
  console.log('속성: ' + p + ', 값: ' + kijoong[p]);
}
```
---
## 2. 자바스크립트 함수
### 2.1. 함수 정의 2가지 방법
- 함수 선언식
```js
function fnName() {}
```

- 함수 표현식 (함수 리터널)
```js
var fnName2 = function() {};
```

- 함수 선언식과 함수 표현식의 차이
```
스코프 호이스트(Scope Hoist)로 인한 결과 차이가 있다.
```

### 2.2. 전역 VS 지역

#### 2.2.1 전역 Global Scope
- 전역이란?
```js
웹 브라우저 환경에서 window {} 객체를 말한다.
```
- 확인 예제

```js
var coffee = "아메리카노"; //window.coffee와 동일
console.log('coffee === window.coffee:', coffee === window.coffee);

console.log('fnDeclaration === window.fnDeclaration:', fnDeclaration === window.fnDeclaration);
```
##### 2.2.1.1 전역 변수 & 전역 함수
- 전역 변수, 전역 함수란?
```js
웹 브라우저 환경에서 전역 객체인 window {}의 속성이다.
```
- 전역 변수, 전역 함수에서의 this는?
```js
this는 window를 가리킨다.
```
- 확인 예제
```js
var global_valiable = this; // ???
var globalFunction = function() {
  console.log('this:', this); // ??
};

// 전역 함수 실행, 함수를 실행시킨 주체는 누구인가?
globalFunction();
// 위 함수의 실행은 아래 코드와 동일하다. 결국 함수를 실행시킨 주체는
// 전역 객체인 window 이므로 함수 내부의 this는 window를 가리킨다.
// window.globalFunction();

// globalFunction 함수는 전역 함수로 widnow 객체의 속성이지만...
// 다른 누군가가 이 함수를 빌려 사용할 수 있다.
// 함수를 document객체의 onclick 속성에 참조함으로서 함수 내부의 this는 document 객체를 가리키도록 변경되었다.
document.onclick = globalFunction;

```
