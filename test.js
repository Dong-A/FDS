//목적(쓰임새)에 맞지 않는 함수!
function getWindowWidth1() {
  // 창 크기의 가로 폭 길이 (너비, width)
  var _window_width = window.innerWidth;
  console.log('창 크기의 가로 폭 길이 (너비, width):', _window_width);
}
//반환 값이 있는 함수
//목적에 맞는 함수
function getWindowWidth2() {
  // 창 크기의 가로 폭 길이 (너비, width)
  var _window_width = window.innerWidth;
  console.log('창 크기의 가로 폭 길이 (너비, width):', _window_width);
  return _window_width;
  //return window.innerWidth; //한 줄로 간단하게 표현할 수 있다.
}
var get_width_1 = getWindowWidth1();
var get_width_2 = getWindowWidth2();
console.log(get_width_1);
console.log(get_width_2);
