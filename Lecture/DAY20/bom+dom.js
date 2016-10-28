// Module Pattern
(function(global){
//////////////////////////
//  BOM 브라우저 객체 모델  //
/////////////////////////
// 브라우저를 구성하는 객체들
// window {} : Global Object
// window 객체에 종속된 하위 객체들
//// 1. window.screen {}
// 사용자의 스크린에 관한 정보를 제공하는 객체
var screen = global.screen;
var screen_width = screen.width;
var screen_height = screen.height;

console.log('사용자의 스크린 해상도는 ' + screen_width + 'x' + screen_height + '입니다.');

var screen_resoulation = screen_width + 'x' + screen_height;

var console_style = 'color: tomato; font-weight: bold';

// 실제 사용자의 가용(Avail)가능한 스크린 해상도 구하기
var screen_avail_width = screen.availWidth;
var screen_avail_height = screen.availHeight;
var screen_avail_resolution = screen_avail_width + 'x' + screen_avail_height;

console.log('사용자의 가용 가능한 스크린 해상도는 %c' + screen_avail_resolution, console_style);

// 스크린의 실제 사이즈와 가용 가능한 사이즈가 다르다면
// 얼마큼의 차이가 있는지 콘솔에 출력하세요.

// step 1. 조건 비교 후
// step 2. 결과출력
var screen_width_gap = screen_width - screen_avail_width;
var screen_height_gap = screen_height - screen_avail_height;

if ( screen_width !== screen_avail_width ) {
  console.log('실제 가로 폭 - 가용 가로 폭:', screen_width_gap);
}
if ( screen_height !== screen_avail_height ) {
  console.log('실제 세로 폭 - 가용 세로 폭:', screen_height_gap);
}
// step 3. 함수 갈무리
function screenInfo() {
  var screen = global.screen;
  var _screen_info = {};

  _screen_info.screen_width = screen.width;
  _screen_info.screen_height = screen.height;
  _screen_info.screen_avail_width = screen.availWidth;
  _screen_info.screen_avail_height = screen.availHeight;
  _screen_info.screen_avail_top = screen.availTop;
  _screen_info.screen_avail_left = screen.availLeft;
  _screen_info.screen_resoulation = _screen_info.screen_width + 'x' + _screen_info.screen_height;
  _screen_info.screen_avail_resolution = _screen_info.screen_avail_width + 'x' + _screen_info.screen_avail_height;

  // 객체 반환
  return _screen_info;

}
// 모듈 내에서만 사용 가능
// 모듈 내부에 은폐된 함수
console.log( screenInfo() );

// 외부에 해당 함수를 공개하고 싶다.
// 노출 패턴
global.screenInfo = screenInfo(); // 함수를 실행한 결과 값을 screenInfo에 참조
global.screenInfo = screenInfo;  // 함수 객체를 screenInfo에 참조





//// 2. window.location
// 웹 브라우저의 주소 창의 정보를 가지고 있는 객체
console.dir( global.location );
// hash 정보 값 : location.hash
// protocol 정보 값 : location.protocol
// host 정보 값 : location.host
// hostname 정보 값 : location.hostname
// pathname 정보 값 : location.pathname
// search 정보 값 : location.search
// replace() 메소드 : 다른 페이지로 대체 변경
// reload() 메소드 : 현재 페이지를 새로 고침





//// 3. window.history
// 사용자가 현재 윈도우에서 탐색한 페이지를 기억하는 객체
// 이전(back)/다음(forward)/특정(go) 페이지로 이동





//// 4. window.navigator



// 페이지 로드 시에 주소창의 hash값을 가져와서
// 해당


//// 5. window.document


//////////////////////////
//  DOM 문서 객체 모델  //
/////////////////////////

}(this));



//
// (function(global){
//   'use strict';
//
//   var document   = global.document;
//   var location   = global.location;
//   var setTimeout = global.setTimeout;
//   var bg_color   = '#8b73ba';
//   var duration   = 1000; // 1000ms === 1s
//
//   // 페이지 로드 시에 주소창의 hash 값을 가져와서
//   // 해당 요소를 찾아서 스타일링한다.
//   var stylingHashElement = function () {
//
//     // var target_element, hash = location.hash;
//     var hash = location.hash;
//     var target_element = null;
//
//     // 임의 정의된 hash 값이 있다면
//     if ( hash ) {
//       target_element = document.querySelector(hash);
//       console.log(target_element);
//     }
//
//     if ( target_element ) {
//       // 스타일 추가
//       target_element.style.background = bg_color;
//       target_element.style.transition = 'background 0.3s';
//       // 특정 시간이 지나면 스타일 제거
//       setTimeout(removeStyleTargetElement, duration);
//     }
//   };
//
//   var removeStyleTargetElement = function() {
//     console.log('try setTimeout');
//   };
//   // window 객체의 load 이벤트가 발생하면
//   // styleHashElement 함수를 실행하라.
//   global.onload = stylingHashElement;
// }(this));
//
// // window 객체의 load 이벤트가 발생하면
// // styleHashElement 함수를 실행하라
// // global.onload = styleHashElement;
// global.onload = assignAction;
//
// function assignAction() {
//   var go_to_point = document.querySelector('#go-to-point');
//   var go_to_links = go_to_point.querySelectorAll('a');
//   for ( var i = 0, l = go_to_links.length; i < l; i++ ) {
//
//   }
// }



// 사용자 에이전트의 식별자를 통해 기기 판별 응용
(function(global){
  'use strict';

  var navigator = global.navigator;
  var userAgent = navigator.userAgent.toLowerCase(); // 브라우저 식별자 (판별)

  console.log('userAgent:', userAgent);

  function isDevice(device) {
    if ( typeof device !== 'string' ) { throw new Error('전달인자는 문자열 요구됨'); }
    return userAgent.indexOf(device) > -1;
  }

  function checkDevices(devices) {
    //배열화
    if ( typeof devices === 'string' ) {
      devices = devices.split(' ');
    }
    // 유효성 검증
    if ( !(devices instanceof Array) ) {
      throw new Error('전달인자는 배열 또는 문자유형이어야 합니다.');
    }
    // 기기의 식별자를 가진 배열을 순환
    for ( var i = 0, l = devices.length; i < l; i++ ) {
      var device = devices[i];
      if ( isDevice(device) ) { console.log(device); }
    }
  }

  // iPhone, Android, iPad 감지
  if ( userAgent.indexOf('iphone') > -1 ) {
    console.log('iphone');
  }
  if ( userAgent.indexOf('android') > -1 ) {
    console.log('android');
  }
  if ( userAgent.indexOf('ipad') > -1 ) {
    console.log('ipad');
  }
})(this);
