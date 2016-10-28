(function(global){
  var document = global.document;
  var html = document.documentElement;
  var head, body;
  head = document.head;
  body = document.body;

  // 예전방식
  var p_element = document.getElementsByTagName('p'); // 문서에서 <p> 요소의 집합
  var first_p = p_element.item(0);

  var strong_element = first_p.firstChild;
  var last_text_in_first_p = first_p.lastChild;

  console.log('strong_element:', strong_element);
  console.log('last_text_in_first_p:', last_text_in_first_p);

  console.log( strong_element.parentNode === last_text_in_first_p.parentNode );

  // 부모 노드에서 자식을 찾을 때
  // .firstChild, .lastChild

  // 자식 노드에서 부모를 찾을 때
  // .parentNode

  // 형제 노드 사이 서로를 찾을 때
  // .nextSibling
  // .previousSibling

  console.log( strong_element.nextSibling === last_text_in_first_p );
  console.log( strong_element === last_text_in_first_p.previousSibling );

  var first_ele = p_element.firstElementChild;
  console.log('first_ele:',first_ele);

  function addTitle(node, content) {
    if ( typeof content !== 'string' ) { throw new Error(); }
    if ( node.nodeType !== 1 ) { throw new Error(); }
    // HTML DOM 방식
    node.title = content;
    // XML DOM 방식
    node.setAttribute('title', content);
  }

  function addDataAttr(node, data, value) {
    if ( typeof content !== 'string' ) { throw new Error(); }
    if ( node.nodeType !== 1 ) { throw new Error(); }
    // XML DOM 방식만 가능하다
    node.setAttribute('date-'+date, value);
  }
}(this));
