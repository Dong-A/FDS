(function($){
  'use strict';
  // GET
  // .width()
  // .height()

  // SET
  // value type: number or string(e.g %, em, rem)
  // .width(value)
  // .height(value)

  // Arrow Function
  // var myFn = (who) => {
  //   who + 'my arrow function';
  // };

var box_width = 100;


  $('.box').one('click', function() {
    box_width -= 10;
    fireEffectSound();
    $(this)
      .css({
        'flex': 'none',
        'border-radius': '50%'
      })
      .addClass('clicked')
      .width( box_width )
      .height( box_width );

  });


// 오프셋 상태 변수
//
  $('.box').on('click', function() {
    $(this).offset();
  });
})
})(jQuery);
