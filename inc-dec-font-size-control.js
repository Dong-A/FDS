

var btn_inc = document.querySelector('.button-increase-font-size');
console.log('btn_inc: ', btn_inc);

var btn_dec = document.querySelector('.button-decrease-font-size');
console.log('btn_dec: ', btn_dec);

var demo_text = document.querySelector('.demo-text-area');
console.log('demo_text: ', demo_text);

btn_inc.onclick = function() {
  console.log('clicked btn_inc');
  var current_font_size = window.getComputedStyle(demo_text).fontSize;
  current_font_size = window.parseInt(current_font_size, 10);
  var changed_font_size = current_font_size + 2;
  demo_text.style.fontSize = changed_font_size + 'px';
};

btn_dec.onclick = function() {
  console.log('clicked btn_dec');
  var current_font_size = window.getComputedStyle(demo_text).fontSize;
  current_font_size = window.parseInt(current_font_size, 10);
  var changed_font_size = current_font_size - 2;
  demo_text.style.fontSize = changed_font_size + 'px';
};

// To do
// 변화 시킬 문서를 새로운 변수에 참조한다.
// 그 문서의 폰트 값을 가져온다.
// 그 폰트값은 단위가 붙어있어 문자열이므로 계산이 안된다. 따라서 단위를 제거하고 넘버값만 가져오도록 한다.
// 버튼을 눌렀을 때 가져온 넘버값에 숫자를 더 하도록 한다.
// 산술된 값을 해당 문서의 인라인 스타일로 넣도록 한다.
