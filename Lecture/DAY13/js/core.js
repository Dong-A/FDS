var num, str, boo;

num = 1;
str = "string";
boo = !0;

var obj, arr, fnc;

fnc = function() {
  console.log('this is function literal');
};
arr = [];
obj = {};

console.log('num : ', num);
console.log('str : ', str);
console.log('boo : ', boo);
console.log('obj : ', obj);
console.log('arr : ', arr);
console.log('fnc : ', fnc);


var html, head, body;

html = document.querySelector('html');
head = document.querySelector('head');
body = document.querySelector('body');

console.log('html type:', isType(html));
console.log('head type:', isType(head));
console.log('body type:', isType(body));

//html type: htmlhtmlelement
//head type: htmlheadelement
//body type: null


var page, wapper, brand, slogan;

page = document.querySelector('#page');
wapper = document.querySelector('.wrapper');
brand = document.querySelector('.brand');
slogan = document.querySelector('.slogan');

console.log('page type:', isType(page));
console.log('wapper type:', isType(wapper));
console.log('brand type:', isType(brand));
console.log('slogan type:', isType(slogan));



//if 조건 문 사용
//if (조건) {
//  조건이 참일 경우 코드 수행
//}
if ( isType(wapper) === 'null') {
  console.info('문서에 <div class = "wrapper"> 요소가 존재하는지를 확인해보세요.');
}

//if ~ else 조건 문 사용
// if (조건) {
//  조건이 참일 경우 코드 수행
// } else {
//  조건이 거짓일 경우 코드 수행
// }

if ( isType(wapper) === 'null') {
  console.info('문서에 <div class = "wrapper"> 요소가 존재하는지를 확인해보세요.');
} else {
  console.info('문서 잘 찾았습니다.');
}


var count = 100;

// if ( count - 100) {
if ((count = count - 100)) {
  console.log ('123');
} else {
  console.log ('321');
}
console.log('count:', count);

var demo = page.querySelector(".demo");
console.log(demo);
console.log(isType(demo));

if ( demo === null ) {
  page.setAttribute('title', 'demo 없다~');
} else {
  page.setAttribute('title', 'demo 있다~');
}
