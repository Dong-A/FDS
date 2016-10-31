
//
//
// mkdir sass css js images
//
// mv DOM_script.sass sass/DOM_script.sass
//
// mv DOM_script.js js/DOM_script.js (파일이동 move의 약자 cp는 copy의 약자)
//
// npm list -g node-sass
//
// node-sass -w -r sass -o css --source-map ./css --output-style compressed
//
// npm -v
//
// npm init (초기화)
// package.json file가 필요해서...
//
// (DAY21) dom-script-using-sass
// (1.0.0) 0.0.1
// description: my DOM Script project using sass
// entry point: 넘어감
// test command: console.log('this is projcect started...');
// git repository:
// keywords: sass, domscript
// author: 저자
//
//
//
//
// rm package.json (remove의 약자)
//
// npm init -y   (자동으로 만들어줌)
//
// json 문자열은 쌍따옴표로 감싸준다.
//
// 이렇게 만들어두면 npm run sass를 하면 sass명령어를 안쳐도 된다.
//
// npm start하면 start에 지정한 내용이 실행된다.
//
// // Review
// 문서객체 모델 (DOM) API
// Lv0, Lv1, Lv2, Lv3, Lv4

// W3C에서 제정한 DOM API를 사용하여
// HTML 문서를 JavaScript를 사용하여
// 객체를 생성하거나, 제거하거나, 조작하는 것을 말한다.


////////////////////
// Node Interface //
// /////////////////
//
// window.document 객체는 노드의 집합
//
// 각 노드는 유형이 구분된다.
// 1 요소노드 ( Element Node )
// 2 속성노드 ( Attribute Node )
// 3 텍스트노드 ( Text Node )
// 8 주석노드 ( Comment Node )
// 문서유형정의노드 ( Doctype Node )

// 노드의 속성
// DOM Lv0에서 사용되던 오래된 속성은 아래와 같은 방법으로 접근이 가능하다.
// HTML DOM 방식 [Getter | Setter]
// .id
// .title
// .className
// 반면 새롭게 등장한 속성들은 XML DOM 방식으로 속성 값을 가져와야 한다.
// [Getter] .getAttribute(key),
// [Setter] .setAttribute(key, value)
//
//
//
//
///
////----------------------------------------------------------------------------
///
//
// 문서의 객체를 찾는(선택하는) 방법(Method)
//
var page, main;
page = document.getElementById('page');
main = document.getElementById('main');

// 문서에서 요소 객체를 이름으로 찾는 방법 (집합)
var headings2, paragraphs;

headings2 = document.getElementsByTagName('h2');
paragraphs = document.getElementsByTagName('p');

// 문서에서 클래스 속성으로 요소를 찾는 방법 (집합)
var issues, issue_contents;
issues = document.getElementsByClassName('issue');
issue_contents = document.getElementsByClassName('issue-content');

// 문서에서 CSS 선택자로 대상 객체를 찾아오는 방법 (단수, 노드)
var issue = document.querySelector('.issue');
// 문서에서 CSS 선택자로 대상 객체를 찾아오는 방법 (집합, 노드리스트)
var all_in_issue = issue.querySelectorAll('*');

console.log('id 속성으로 찾은 문서 요소 객체');
console.log('page:', page);
console.log('main:', main);

console.log('%c------------------------------', 'color: #3d9a21');

console.log('요소(태그)이름으로 찾은 문서 요소 객체들');
console.log('headings2:', headings2);
console.log('paragraphs:', paragraphs);

console.log('%c------------------------------', 'color: #3d9a21');

console.log('클래스 속성 이름으로 찾은 문서 요소 객체들');
console.log('issues:', issues);
console.log('issue_contents:', issue_contents);

console.log('%c------------------------------', 'color: #3d9a21');

console.log('CSS 선택자로 찾은 문서 요소 객체 또는 객체들');
console.log('issue:', issue);
console.log('all_in_issue:', all_in_issue);


(function(global){
  'use strict';

  var document = global.document,
        page,
        main,
        brand,
        slogan,
        issues,
        issue_headlines = [],
        issue_contents = [];

    page   = document.querySelector('#page');
    main   = document.querySelector('#main');
    brand  = page.querySelector('.brand');
    slogan = page.querySelector('.slogan');
    issues = main.querySelectorAll('.issue');

    // for ( var i=0, l=issues.length; i<l; i++ ) {
    //   issue_headlines.push( issues[i].querySelectorAll('.issue-headline') );
    //   issue_contents.push( issues[i].querySelectorAll('.issue-content') );
    // }
    // Depth 1
    for ( var i=0, l=issues.length; i<l; i++ ) {
      var issue = issues[i];
      var _issue_headlines = issue.querySelectorAll('.issue-headline');
      var _issue_contents  = issue.querySelectorAll('.issue-content');
      // Depth 2
      for ( var ii=0, ll=_issue_headlines.length; ii<ll; ii++ ) {
        var _issue_headline = _issue_headlines[ii];
        var _issue_content  = _issue_contents[ii];
        issue_headlines.push(_issue_headline);
        issue_contents.push(_issue_content);
      }
    }

    console.log('issue_headlines:', issue_headlines);
    console.log('issue_contents:', issue_contents);

})(this);




//------------------------------------------------------------------------------
//
//
//
//
//
(function(global){
'use strict';

// 동적으로 아래 HTML 구조화를 생성해본다.
// <div id="page"></div>


// 요소노드를 생성해보자.
// creadte Elemen tNode
// document.createElement()
var page_div = document.createElement('div');

// 생성된 요소노드에 속성을 추가해보자.
// Create Attribute 속성을 써보자
var page_div_id = document.createAttribute('id');
page_div_id.value = 'page';
console.log(page_div_id);
// id 값만 만들어내고 값을 넣기위해 또 코드를 한줄 써줘야한다
// 그래서 비효율적이므로 안쓰는 것이 좋다.

// Add(Set) Attribute
// NODE.setAttribute(key, value);
page_div.setAttribute('id', 'page');

console.log(page_div);

// ---------------
var page_brand = document.createElement('h1');
page_brand.setAttribute('class', 'brand');

// Create Text Node
// document.createTextNode()
var page_brand_text = document.createTextNode('JavaScript Future');

// 자식노드로 텍스트 노드를 요소 노드에 추가
// Append Child
// 문법 : ELEMENT_NODE.appendChild(NODE)
page_brand.appendChild(page_brand_text);

var page_slogan = document.createElement('p');
page_slogan.setAttribute('class', 'slogan');
var page_slogan_text = document.createTextNode('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, cupiditate?');

page_slogan.appendChild(page_slogan_text);

// console.log(page_brand);
// console.log(page_slogan);

page_div.appendChild(page_brand);
page_div.appendChild(page_slogan);

console.log(page_div);

var body = document.querySelector('body');

body.appendChild(page_div);

}(this));


//////////////////////////
// DOM API: Creation 2  //
//////////////////////////


(function(global){
  'use strict';

  // 모달 윈도우 생성
  // 버튼 이벤트 핸들링

  // .create-modal-button 요소 변수에 참조
  var body = document.body,
      create_modal_btn,
      createModalWindow,
      createDim,
      createModal,
      createModalLayer,
      createModalHeadline,
      createModalContent,
      createModalCloseButton,
      removeDimModal;

  create_modal_btn = document.querySelector('.create-modal-button');

  /** @function createModalWindow */
  createModalWindow = function() {
    console.log('created modal window.');
    createDim();
    createModal();
  };

  // dim 레이어를 생성
  createDim = function() {
    console.log('created dim layer.');
    var dim_layer = document.createElement('div');
    dim_layer.setAttribute('class', 'dim');
    body.appendChild(dim_layer);
    // 제거 이벤트 연결
    dim_layer.onclick = removeDimModal;


  };
  // modal 레이어를 생성
  createModal = function() {
    console.log('created modal layer.');
    // 코드가 길어지니 쪼개서 작업한다.
    var container = createModalLayer();
    var headline = createModalHeadline();
    var paragraph = createModalContent();
    var button = createModalCloseButton();

    console.log(container);
    console.log(headline);
    console.log(paragraph);
    console.log(button);

    container.appendChild(headline);
    container.appendChild(paragraph);
    container.appendChild(button);
    body.appendChild(container);

    //button 요소에 dim, modal 제거 이벤트 연결
    button.onclick = removeDimModal;
  };

  // modal 윈도우 레이어 생성
  createModalLayer = function() {
    var modal_layer = document.createElement('div');
    modal_layer.setAttribute('class', 'modal-window');
    return modal_layer;
  };

  // 모달 헤드라인 생성
  createModalHeadline = function() {
    var headline = document.createElement('h3');
    headline.setAttribute('class', 'modal-headline');
    var headline_text = document.createTextNode('Modal UI Component');
    headline.appendChild(headline_text);
    return headline;
  };

  // 모달 콘텐츠 생성
  createModalContent = function(){
    var paragraph = document.createElement('p');
    paragraph.setAttribute('class', 'modal-contents');
    var paragraph_text = document.createTextNode('Modal Window is Popular Component of Web Design. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error recusandae, mollitia doloribus.');
    paragraph.appendChild(paragraph_text);
    return paragraph;
  };
  // 모달 클로즈 버튼 생성
  createModalCloseButton = function(){
    var button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.setAttribute('class', 'modal-close-button');
    button.setAttribute('aria-label', 'Close Modal Window');
    var button_text = document.createTextNode('x');
    button.appendChild(button_text);
    return button;
  };
  // 딤, 모달 제거
  removeDimModal = function() {
    // var modal = this.parentNode;
    var modal = document.querySelector('.modal-window');
    var dim = document.querySelector('.dim');
    modal.parentNode.removeChild(modal);
    dim.parentNode.removeChild(dim);
  };


  // 버튼 요소 객체에 이벤트 연결
  create_modal_btn.onclick = createModalWindow;



})(this);


//////////////////////////////////
// DOM API: Insertion + remove  //
//////////////////////////////////
(function(global){
  'use strict';
  // DOM API Standard Method
  // 어떤 노드를 목표가 되는 노드 앞에 삽입한다.
  // insertBefore()
  // target_node.parentNode.insertBefore(insert_node, target_node);  타겟 노드의 부모를 통해 삽입하는 문법이다.

  // 이런 함수는 날 도와주므로 Helper(Utility) 함수라고 한다.
  function createEl(element_name) {
    if ( typeof element_name !== 'string' ) { throw new Error('인자는 문자열로!'); }
    return document.createElement(element_name);
  }

  var div = createEl('div');
  var ul = createEl('ul');
  var li = createEl('li');
  var a = createEl('a');
  var span = createEl('span');

  // console.log('div:', div);
  // console.log('ul:', ul);
  // console.log('li:', li);
  // console.log('a:', a);
  // console.log('span:', span);

  var main = document.querySelector('#main');
  var main_parent = main.parentNode;
  var divider = createEl('hr');

  // main 요소노드 앞에 divider 요소노드를 삽입하자.
  main_parent.insertBefore(divider, main);


  /////// Issue 4, 5, 6 위에 구분선이 오도록 짜보자
  // 밑에는 내가 한거
  // var articles = document.querySelectorAll('.issue');
  // console.log(articles);
  // var articles_parent = articles.parentNode;
  // console.log(articles_parent);
  // var articles_divider = createEl('hr');
  //
  // articles_parent.insertBefore(articles_divider, articles);
  // 내가 한거 끝.
  //
  var issue;
  var issues = document.querySelectorAll('.issue');
  var issues_count = issues.length;
  while ( (issue = issues[--issues_count]) ) {
    if (issues_count === 0) { break; }
    divider = createEl('hr'); // divider가 한번밖에 안만들어지므로 계속 만들어질 수 있도록 해준다. 반복 구문을 통해...
    issue.parentNode.insertBefore(divider, issue);
  }

  var remove_divider_button = document.querySelector('.remove-divider-button');
  remove_divider_button.onclick = function() {
    var dividers = document.querySelectorAll('hr');
    // console.log(dividers_length === 0);
    // if(dividers_length === 0) {
    //  this.setAttribute('disabled', 'disabled');
    // }
    // 하지만 두 번째 클릭에서야 작동한다.
    // 즉 조건이 필요하지 않다.
    // 그래서 반복문이 끝나고 실행시키기 위해 반복문 뒤에 넣어준다.
    for ( var divider, i=0, l=dividers.length; i<l; i++) {
      divider = dividers[i];
      divider.parentNode.removeChild(divider);
      // dividers[i].parentNode.removeChild(dividers[i]); 위에 코드와 같다. 이 코드는 dividers[i]가 두번들어가므로 번거롭다?
    }
    this.setAttribute('disabled', 'disabled');
  };

})(this);
