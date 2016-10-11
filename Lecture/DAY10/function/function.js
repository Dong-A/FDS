var button, link, eventHandler;

button = document.querySelector('button');
link = document.querySelector('a');

eventHandler = function() {
  console.log('call me');
};

button.onclick = eventHandler;
link.onmouseover = eventHandler;


// 함수 객체 생성
  var fnObj = new Function('console.log("something");');

// 함수 표현식: 변수에 값으로 할당 (권장)
// 아무 곳에나 정의하면 오류가 발생한다


// 함수 선언식 (권장)
// * 아무 곳에나 정의하지 말고 영억의 상단에 정의하는 것을 권장한다.
// 아무곳에나 써도 작동은 되나 관리가 어렵기에 상단에 작성한다.



// 배열
var members = new Array('기중', '근희', '세진');
var memeber1 = '기중';
var memeber2 = '근희';
var memeber3 = '세진';
members.push('서연');
members.push('종훈');




console.log('members : ', members);
console.log('members[0] : ', members[0]);
console.log('members[1] : ', members[1]);
console.log('members[2] : ', members[2]);
