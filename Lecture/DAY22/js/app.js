
// 의존 모듈 주입 (Dependency Module Injection)
// DOM_Helper 모듈
(function(global, $){
  'use strict';
  // $ === DOM_Helper 라이브러리
  // 라이브러리 정보 출력

  console.log('$.name:', $.name);
  console.log('$.version:', $.version);


  var gnb = $.id('gnb');
  console.log('gnb:', gnb);

  // tag(tag_name[, context_obj]);  // 각괄호는 옵션으로 사용해도되고 안해도 된다.
  // var gnb_links = $.tag('a', gnb);
  var gnb_links = $.queryAll('a', gnb);
  console.log('gnb_links:', gnb_links);


})(this, this.DOM_Helper);
