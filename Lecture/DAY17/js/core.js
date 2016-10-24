// 자바스크립트 반복문

// 1. while
// 조건이 참인 동안(while condition is true) 코드 반복 실행.
var num = 0;

while (num < 10) {
  console.log('num:', num);
  num = num + 1;
}
console.log('num:', num);


// 2. do~ while
// while문과 유사하나, while문과 달리 조건이 거짓일지라도 1회는 반드시 수행.
var num = 14;

do {
  console.log('num:', num);
  num = num - 2;
} while (num > 10);


// 3. for
// i = iterator
// for문의 실행 흐름
for (var i = 0; i < 10; i++) {
  console.log('i:', i);
}
console.log('i:', i);

for (var i = 20; i > 10; i--) {
  console.log('in > i:', i);
}
console.log('out > i:', i);
//위 코드와 아래 코드는 동일하게 동작한다.
var k = 20;
for (; k > 10;) {
  console.log('in > k:', k);
  k--;
}
console.log('out > k:', k);
// 2차원 for문

var fruits = ['apple', 'banana', 'orange', 'melon'];

var fruits_total = fruits.length;




// 4. for ~ in : object
var obj = {name: '객체', age: '21년'};
obj.computer = 'Apple Computer';
obj.keyboard = true;
obj.getKey = function() {
  return this.keyboard;
};

for ( var prop in obj) {
  var value = obj[prop];
  console.log('prop:', prop);
  console.log('value:', value);
}



// 5. forEach
//
// 6. map
// 7. for ~ of
