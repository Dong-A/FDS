(function(global){
  'use strict';

  // 선택 ---------------------------------------------------------------------------------

  // (ELEMENT_NODE || document).getElementById();         // ELEMENT_NODE
  // (ELEMENT_NODE || document).getElementsByTagName();   // NODE_LIST (Like Array Object)
  // (ELEMENT_NODE || document).getElementsByClassName(); // NODE_LIST (Like Array Object)
  // (ELEMENT_NODE || document).querySelector();          // ELEMENT_NODE
  // (ELEMENT_NODE || document).querySelectorAll();       // NODE_LIST (Like Array Object)

  // 탐색 ---------------------------------------------------------------------------------

  // PARENT_NODE: .parentNode

  // CHILD_NODE | NODE_LIST:
  // .firstChild, .lastChild, .childNodes, .children
  // .firstElementChild, .lastElementChild

  // SIBLING_NODE:
  // .nextSibling, .previousSibling
  // .nextElementSibling, .previousElementSibling

  // 삽입(추가) ----------------------------------------------------------------------------

  // PARENT_NODE.appendChild(CHILD_NODE)
  // TARGET_NODE.appendChild(CHILD_NODE)
  // TARGET_NODE.parentNode.insertBefore(INSERT_NODE, TARGET_NODE)

  // 제거 ---------------------------------------------------------------------------------

  // PARENT_NODE.removeChild(CHILD_NODE)
  // CHILD_NODE.parentNode.removeChild(CHILD_NODE)

  // 대체 ---------------------------------------------------------------------------------

  // NODE를 다른 NODE와 위치를 서로 변경하는 것이 아닙니다.
  // 기존 NODE를 제거(반환)한 후, 새로운 NODE를 그 위치에 대체시키는 것입니다.
  // TARGET_NODE.parentNode.replaceChild(REPLACE_NODE, TARGET_NODE)

  var gnb      = document.querySelector('#gnb');
  var target_p = document.querySelector('.target-paragraph');

  // console.log('gnb:', gnb);
  // console.log('target_p:', target_p);

  function bindEvent(container_el, target_selector) {
    if ( !conteainer_el || container_el.nodeType !== 1 ) {
      throw new Error('첫번째 인자는 요소노드를 전달해야 합니다.');
    }
    target_selector = target_selector || 'a';
    // start: 이벤트 연결 구문
    var bind_els = container_el.querySelectorAll(target_selector);


  }

  var gnb_links = gnb.querySelectorAll('a');

  for ( var i=0, l=gnb_links.length; i<l; i++ ) {
    var gnb_link = gnb_links[i];
    // gnb_link.onclick = replaceStrongElement;
    gnb_link.onclick = changePositionStrongElement;
  }

  function changePositionStrongElement() {
    var parent = this.parentNode;
    var target_strong = target_p.querySelector('strong');
    var target_strong_next_sibling = target_strong.nextSibling;
    // console.log(target_strong_next_sibling);
    var replaced_node = parent.replaceChild(target_strong, this);
    // console.log(replaced_node);
    // 텍스트 노드 앞에 제거된 <a> 요소를 삽입힌다.
    target_strong_next_sibling.parentNode.insertBefore(this, target_strong_next_sibling);
  }

  function replaceStrongElement() {

    // 대체 요소 탐색(선택)
    var target_strong = target_p.querySelector('strong');
    // console.log('target_strong:', target_strong);

    // 대체 요소를 자신의 위치로 대체
    // <a> 요소 클릭하면, 해당 <a> 요소 위치에 <strong> 요소가 대체된다.
    var replaced_el = this.parentNode.replaceChild(target_strong, this);
    // console.log('replaced_el:', replaced_el);

    // 웹 브라우저 기본 동작 차단
    // 오래 전 방법
    return false;
    // 이 아래 코드는 실행 X

  }

  // 복사 ---------------------------------------------------------------------------------



// 넣을 코드를 먼저 짜준다.



var fds_table = document.querySelector('.fds-table');
console.log(fds_table);



})(this);













// 사진 옮기기
(function(global){
  'use strict';

  var left_area = document.querySelector('.left');
  console.log(left_area);
  var left_area_images = left_area.querySelectorAll('img');
  console.log(left_area_images);

  for ( var i = 0, l = left_area_images.length; i < l; i++ ) {
    var left_area_image = left_area_images[i];
    // left_area_image.onclick = changeImage;
  }

  // function chagneImage() {
  //   var parent = this.parent;
  //   // 해당 이미지에 접근한다
  //   // 이미지의 스타일 접근
  //   // 이미지의 스타일 바꿔주고
  // }
  //

  // nav 요소의 앞에 형제요소 <div>를 추가하라
  nav.insertAdjacentHTML('beforebegin', '<div class="insert-div">beforebegin insert-div</div>')
})(this);
