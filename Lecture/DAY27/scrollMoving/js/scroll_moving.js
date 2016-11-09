jQuery(function($){
  'use strict';

  // var $win = $(window);
  var $doc = $('html, body');
  var $scroll_menu_ul = $('.scroll-menu ul');

  $('.scroll-menu a').on('click', function(evt) {
    var scroll_menu_ul_height = window.parseInt($(this).find('ul').css('height'),10);
    var target_id             = this.getAttribute('href');
    var $target               = $(target_id);

    // 목적지로 바로 점핑
    // window.scrollTo(0,$target.offset().top - scroll_menu_ul_height);
    // $win.scrollTop($target.offset().top - scroll_menu_ul_height);


    // 목적지로 수직 방향 스크롤 애니메이션
    $doc.animate({
      'scrollTop': $target.offset().top - scroll_menu_ul_height}, 1500, 'easeOutElastic');

    });
  });
