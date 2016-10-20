



function moveBox() {

  var c2r2 = document.querySelector('.c2.r2');
  var c2r3 = document.querySelector('.c2.r3');
  var c2r4 = document.querySelector('.c2.r4');
  var c3r4 = document.querySelector('.c3.r4');
  var c4r4 = document.querySelector('.c4.r4');
  var c4r3 = document.querySelector('.c4.r3');
  var c4r2 = document.querySelector('.c4.r2');
  var c3r2 = document.querySelector('.c3.r2');

  // console.log(box_1);
  // console.log(box_2);
  // console.log(box_3);
  // console.log(box_4);
  // console.log(box_5);
  // console.log(box_6);
  // console.log(box_7);
  // console.log(box_8);

  // var turn_btn = document.querySelector('.turn-btn');
  // console.log(turn_btn);

  var c2r2_class = c2r2.getAttribute('class').replace('box box-1 col-1', '');
  var c2r3_class = c2r3.getAttribute('class').replace('box box-2 col-1', '');
  var c2r4_class = c2r4.getAttribute('class').replace('box box-3 col-1', '');
  var c3r4_class = c3r4.getAttribute('class').replace('box box-4 col-1', '');
  var c4r4_class = c4r4.getAttribute('class').replace('box box-5 col-1', '');
  var c4r3_class = c4r3.getAttribute('class').replace('box box-6 col-1', '');
  var c4r2_class = c4r2.getAttribute('class').replace('box box-7 col-1', '');
  var c3r2_class = c3r2.getAttribute('class').replace('box box-8 col-1', '');

  // console.log(c2r2_class);
  // console.log(c2r3_class);
  // console.log(c2r4_class);
  // console.log(c3r4_class);
  // console.log(c4r4_class);
  // console.log(c4r3_class);
  // console.log(c4r2_class);
  // console.log(c3r2_class);


  var c2r2_pre_assigned_class = c2r2.getAttribute('class').replace('c2 r2', '');
  var c2r3_pre_assigned_class = c2r3.getAttribute('class').replace('c2 r3', '');
  var c2r4_pre_assigned_class = c2r4.getAttribute('class').replace('c2 r4', '');
  var c3r4_pre_assigned_class = c3r4.getAttribute('class').replace('c3 r4', '');
  var c4r4_pre_assigned_class = c4r4.getAttribute('class').replace('c4 r4', '');
  var c4r3_pre_assigned_class = c4r3.getAttribute('class').replace('c4 r3', '');
  var c4r2_pre_assigned_class = c4r2.getAttribute('class').replace('c4 r2', '');
  var c3r2_pre_assigned_class = c3r2.getAttribute('class').replace('c3 r2', '');

  // console.log(c2r2_pre_assigned_class);
  // console.log(c2r3_pre_assigned_class);
  // console.log(c2r4_pre_assigned_class);
  // console.log(c3r4_pre_assigned_class);
  // console.log(c4r4_pre_assigned_class);
  // console.log(c4r3_pre_assigned_class);
  // console.log(c4r2_pre_assigned_class);
  // console.log(c3r2_pre_assigned_class);





  if ( c2r2_class === 'c2', 'r2' ) {
    c2r2_class_replace = c2r2_class.replace('r2', 'r3');
    c2r2.setAttribute('class', c2r2_pre_assigned_class + c2r2_class_replace);
    console.log(c2r2);
  } else if ( c2r2_class === 'c2', 'r3') {
    c2r2_class_replace = c2r2_class.replace('r3', 'r4');
    c2r2.setAttribute('class', c2r2_pre_assigned_class + ' ' + c2r2_class_replace);
  } else if ( c2r2_class === 'c2', 'r4') {
    c2r2_class_replace = c2r2_class.replace('c2', 'c3');
    c2r2.setAttribute('class', c2r2_pre_assigned_class + ' ' + c2r2_class_replace);
  } else if ( c2r2_class === 'c3', 'r4') {
    c2r2_class_replace = c2r2_class.replace('c3', 'c4');
    c2r2.setAttribute('class', c2r2_pre_assigned_class + ' ' + c2r2_class_replace);
  } else if ( c2r2_class === 'c4', 'r4') {
    c2r2_class_replace = c2r2_class.replace('r4', 'r3');
    c2r2.setAttribute('class', c2r2_pre_assigned_class + ' ' + c2r2_class_replace);
  } else if ( c2r2_class === 'c4', 'r3') {
    c2r2_class_replace = c2r2_class.replace('r3', 'r2');
    c2r2.setAttribute('class', c2r2_pre_assigned_class + ' ' + c2r2_class_replace);
  } else if ( c2r2_class === 'c4', 'r2') {
    c2r2_class_replace = c2r2_class.replace('c4', 'c3');
    c2r2.setAttribute('class', c2r2_pre_assigned_class + ' ' + c2r2_class_replace);
  } else if ( c2r2_class === 'c3', 'r2') {
    c2r2_class_replace = c2r2_class.replace('c3', 'c2');
    c2r2.setAttribute('class', c2r2_pre_assigned_class + ' ' + c2r2_class_replace);
  }


  if ( c2r3_class === 'c2', 'r3' ) {
    c2r3_class_replace = c2r3_class.replace('r3', 'r4');
    c2r3.setAttribute('class', c2r3_pre_assigned_class + c2r3_class_replace);
  } else if ( c2r3_class === 'c2', 'r4' ) {
    c2r3_class_replace = c2r3_class.replace('c2', 'c3');
    c2r3.setAttribute('class', c2r3_pre_assigned_class + c2r3_class_replace);
  } else if ( c2r3_class === 'c3', 'r4' ) {
    c2r3_class_replace = c2r3_class.replace('c3', 'c4');
    c2r3.setAttribute('class', c2r3_pre_assigned_class + c2r3_class_replace);
  } else if ( c2r3_class === 'c4', 'r4' ) {
    c2r3_class_replace = c2r3_class.replace('r4', 'r3');
    c2r3.setAttribute('class', c2r3_pre_assigned_class + c2r3_class_replace);
  } else if ( c2r3_class === 'c4', 'r3' ) {
    c2r3_class_replace = c2r3_class.replace('r3', 'r2');
    c2r3.setAttribute('class', c2r3_pre_assigned_class + c2r3_class_replace);
  } else if ( c2r3_class === 'c4', 'r2' ) {
    c2r3_class_replace = c2r3_class.replace('c4', 'c3');
    c2r3.setAttribute('class', c2r3_pre_assigned_class + c2r3_class_replace);
  } else if ( c2r3_class === 'c3', 'r2' ) {
    c2r3_class_replace = c2r3_class.replace('c3', 'c2');
    c2r3.setAttribute('class', c2r3_pre_assigned_class + c2r3_class_replace);
  } else if ( c2r3_class === 'c2', 'r2') {
    c2r3_class_replace = c2r3_class.replace('r2', 'r3');
    c2r3.setAttribute('class', c2r3_pre_assigned_class + c2r3_class_replace);
  }

  if ( c2r4_class === 'c2', 'r4' ) {
    c2r4_class_replace = c2r4_class.replace('c2', 'c3');
    c2r4.setAttribute('class', c2r4_pre_assigned_class + c2r4_class_replace);
  } else if ( c2r4_class === 'c3', 'r4' ) {
    c2r4_class_replace = c2r4_class.replace('c3', 'c4');
    c2r4.setAttribute('class', c2r4_pre_assigned_class + c2r4_class_replace);
  } else if ( c2r4_class === 'c4', 'r4' ) {
    c2r4_class_replace = c2r4_class.replace('r4', 'r3');
    c2r4.setAttribute('class', c2r4_pre_assigned_class + c2r4_class_replace);
  } else if ( c2r4_class === 'c4', 'r3' ) {
    c2r4_class_replace = c2r4_class.replace('r3', 'r2');
    c2r4.setAttribute('class', c2r4_pre_assigned_class + c2r4_class_replace);
  } else if ( c2r4_class === 'c4', 'r2' ) {
    c2r4_class_replace = c2r4_class.replace('c4', 'c3');
    c2r4.setAttribute('class', c2r4_pre_assigned_class + c2r4_class_replace);
  } else if ( c2r4_class === 'c3', 'r2' ) {
    c2r4_class_replace = c2r4_class.replace('c3', 'c2');
    c2r4.setAttribute('class', c2r4_pre_assigned_class + c2r4_class_replace);
  } else if ( c2r4_class === 'c2', 'r2' ) {
    c2r4_class_replace = c2r4_class.replace('r2', 'r3');
    c2r4.setAttribute('class', c2r4_pre_assigned_class + c2r4_class_replace);
  } else if ( c2r4_class === 'c2', 'r3') {
    c2r4_class_replace = c2r4_class.replace('r3', 'r4');
    c2r4.setAttribute('class', c2r4_pre_assigned_class + c2r4_class_replace);
  }

  if ( c3r4_class === 'c3', 'r4' ) {
    c3r4_class_replace = c3r4_class.replace('c3', 'c4');
    c3r4.setAttribute('class', c3r4_pre_assigned_class + c3r4_class_replace);
  } else if ( c3r4_class === 'c4', 'r4'  ) {
    c3r4_class_replace = c3r4_class.replace('r4', 'r3');
    c3r4.setAttribute('class', c3r4_pre_assigned_class + c3r4_class_replace);
  } else if ( c3r4_class === 'c4', 'r3'  ) {
    c3r4_class_replace = c3r4_class.replace('r3', 'r2');
    c3r4.setAttribute('class', c3r4_pre_assigned_class + c3r4_class_replace);
  } else if ( c3r4_class === 'c4', 'r2'  ) {
    c3r4_class_replace = c3r4_class.replace('c4', 'c3');
    c3r4.setAttribute('class', c3r4_pre_assigned_class + c3r4_class_replace);
  } else if ( c3r4_class === 'c3', 'r2'  ) {
    c3r4_class_replace = c3r4_class.replace('c3', 'c2');
    c3r4.setAttribute('class', c3r4_pre_assigned_class + c3r4_class_replace);
  } else if ( c3r4_class === 'c2', 'r2'  ) {
    c3r4_class_replace = c3r4_class.replace('r2', 'r3');
    c3r4.setAttribute('class', c3r4_pre_assigned_class + c3r4_class_replace);
  } else if ( c3r4_class === 'c2', 'r3'  ) {
    c3r4_class_replace = c3r4_class.replace('r3', 'r4');
    c3r4.setAttribute('class', c3r4_pre_assigned_class + c3r4_class_replace);
  } else if ( c3r4_class === 'c2', 'r4') {
    c3r4_class_replace = c3r4_class.replace('c2', 'c3');
    c3r4.setAttribute('class', c3r4_pre_assigned_class + c3r4_class_replace);
  }

  if ( c4r4_class === 'c4', 'r4' ) {
    c4r4_class = c4r4_class.replace('r4', 'r3');
    c4r4.setAttribute('class', c4r4_pre_assigned_class + c4r4_class);
  } else if ( c4r4_class === 'c4', 'r3'  ) {
    c4r4_class = c4r4_class.replace('r3', 'r2');
    c4r4.setAttribute('class', c4r4_pre_assigned_class + c4r4_class);
  } else if ( c4r4_class === 'c4', 'r2'  ) {
    c4r4_class = c4r4_class.replace('c4', 'c3');
    c4r4.setAttribute('class', c4r4_pre_assigned_class + c4r4_class);
  } else if ( c4r4_class === 'c3', 'r2'  ) {
    c4r4_class = c4r4_class.replace('c3', 'c2');
    c4r4.setAttribute('class', c4r4_pre_assigned_class + c4r4_class);
  } else if ( c4r4_class === 'c2', 'r2'  ) {
    c4r4_class = c4r4_class.replace('r2', 'r3');
    c4r4.setAttribute('class', c4r4_pre_assigned_class + c4r4_class);
  } else if ( c4r4_class === 'c2', 'r3'  ) {
    c4r4_class = c4r4_class.replace('r3', 'r4');
    c4r4.setAttribute('class', c4r4_pre_assigned_class + c4r4_class);
  } else if ( c4r4_class === 'c2', 'r4'  ) {
    c4r4_class = c4r4_class.replace('c2', 'c3');
    c4r4.setAttribute('class', c4r4_pre_assigned_class + c4r4_class);
  } else if ( c4r4_class === 'c3', 'r4') {
    c4r4_class = c4r4_class.replace('c3', 'c4');
    c4r4.setAttribute('class', c4r4_pre_assigned_class + c4r4_class);
  }

  if ( c4r3_class ===  'c4', 'r3' ) {
    c4r3_class_replace = c4r3_class.replace('r3', 'r2');
    c4r3.setAttribute('class', c4r3_pre_assigned_class + c4r3_class_replace);
  } else if ( c4r3_class === 'c4', 'r2' ) {
    c4r3_class_replace = c4r3_class.replace('c4', 'c3');
    c4r3.setAttribute('class', c4r3_pre_assigned_class + c4r3_class_replace);
  } else if ( c4r3_class === 'c3', 'r2' ) {
    c4r3_class_replace = c4r3_class.replace('c3', 'c2');
    c4r3.setAttribute('class', c4r3_pre_assigned_class + c4r3_class_replace);
  } else if ( c4r3_class === 'c2', 'r2' ) {
    c4r3_class_replace = c4r3_class.replace('r2', 'r3');
    c4r3.setAttribute('class', c4r3_pre_assigned_class + c4r3_class_replace);
  } else if ( c4r3_class === 'c2', 'r3' ) {
    c4r3_class_replace = c4r3_class.replace('r3', 'r4');
    c4r3.setAttribute('class', c4r3_pre_assigned_class + c4r3_class_replace);
  } else if ( c4r3_class === 'c2', 'r4' ) {
    c4r3_class_replace = c4r3_class.replace('c2', 'c3');
    c4r3.setAttribute('class', c4r3_pre_assigned_class + c4r3_class_replace);
  } else if ( c4r3_class === 'c3', 'r4' ) {
    c4r3_class_replace = c4r3_class.replace('c3', 'c4');
    c4r3.setAttribute('class', c4r3_pre_assigned_class + c4r3_class_replace);
  } else if ( c4r3_class === 'c4', 'r4') {
    c4r3_class_replace = c4r3_class.replace('r4', 'r3');
    c4r3.setAttribute('class', c4r3_pre_assigned_class + c4r3_class_replace);
  }

  if ( c4r2_class === 'c4', 'r2' ) {
    c4r2_class_replace = c4r2_class.replace('c4', 'c3');
    c4r2.setAttribute('class', c4r2_pre_assigned_class + c4r2_class_replace);
  } else if ( c4r2_class === 'c3', 'r2' ) {
    c4r2_class_replace = c4r2_class.replace('c3', 'c2');
    c4r2.setAttribute('class', c4r2_pre_assigned_class + c4r2_class_replace);
  } else if ( c4r2_class === 'c2', 'r2' ) {
    c4r2_class_replace = c4r2_class.replace('r2', 'r3');
    c4r2.setAttribute('class', c4r2_pre_assigned_class + c4r2_class_replace);
  } else if ( c4r2_class === 'c2', 'r3' ) {
    c4r2_class_replace = c4r2_class.replace('r3', 'r4');
    c4r2.setAttribute('class', c4r2_pre_assigned_class + c4r2_class_replace);
  } else if ( c4r2_class === 'c2', 'r4' ) {
    c4r2_class_replace = c4r2_class.replace('c2', 'c3');
    c4r2.setAttribute('class', c4r2_pre_assigned_class + c4r2_class_replace);
  } else if ( c4r2_class === 'c3', 'r4' ) {
    c4r2_class_replace = c4r2_class.replace('c3', 'c4');
    c4r2.setAttribute('class', c4r2_pre_assigned_class + c4r2_class_replace);
  } else if ( c4r2_class === 'c4', 'r4' ) {
    c4r2_class_replace = c4r2_class.replace('r4', 'r3');
    c4r2.setAttribute('class', c4r2_pre_assigned_class + c4r2_class_replace);
  } else if ( c4r2_class === 'c4', 'r3') {
    c4r2_class_replace = c4r2_class.replace('r3', 'r2');
    c4r2.setAttribute('class', c4r2_pre_assigned_class + c4r2_class_replace);
  }

  if ( c3r2_class === 'c3', 'r2' ) {
    c3r2_class_replace = c3r2_class.replace('c3', 'c2');
    c3r2.setAttribute('class', c3r2_pre_assigned_class + c3r2_class_replace);
  } else if ( c3r2_class === 'c2', 'r2'  ) {
    c3r2_class_replace = c3r2_class.replace('r2', 'r3');
    c3r2.setAttribute('class', c3r2_pre_assigned_class + c3r2_class_replace);
  } else if ( c3r2_class === 'c2', 'r3'  ) {
    c3r2_class_replace = c3r2_class.replace('r3', 'r4');
    c3r2.setAttribute('class', c3r2_pre_assigned_class + c3r2_class_replace);
  } else if ( c3r2_class === 'c2', 'r4'  ) {
    c3r2_class_replace = c3r2_class.replace('c2', 'c3');
    c3r2.setAttribute('class', c3r2_pre_assigned_class + c3r2_class_replace);
  } else if ( c3r2_class === 'c3', 'r4'  ) {
    c3r2_class_replace = c3r2_class.replace('c3', 'c4');
    c3r2.setAttribute('class', c3r2_pre_assigned_class + c3r2_class_replace);
  } else if ( c3r2_class === 'c4', 'r4'  ) {
    c3r2_class_replace = c3r2_class.replace('r4', 'r3');
    c3r2.setAttribute('class', c3r2_pre_assigned_class + c3r2_class_replace);
  } else if ( c3r2_class === 'c4', 'r3'  ) {
    c3r2_class_replace = c3r2_class.replace('r3', 'r2');
    c3r2.setAttribute('class', c3r2_pre_assigned_class + c3r2_class_replace);
  } else if ( c3r2_class === 'c4', 'r2') {
    c3r2_class_replace = c3r2_class.replace('c4', 'c3');
    c3r2.setAttribute('class', c3r2_pre_assigned_class + c3r2_class_replace);
  }

}
