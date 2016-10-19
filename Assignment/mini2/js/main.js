var box_1 = document.querySelector('.c2.r2');
var box_2 = document.querySelector('.c2.r3');
var box_3 = document.querySelector('.c2.r4');
var box_4 = document.querySelector('.c3.r4');
var box_5 = document.querySelector('.c4.r4');
var box_6 = document.querySelector('.c4.r3');
var box_7 = document.querySelector('.c4.r2');
var box_8 = document.querySelector('.c3.r2');

var turn_btn = document.querySelector('.turn-btn');
console.log(turn_btn);

box_1_class = box_1.getAttribute('class').replace('box box-1 col-1', '');
box_2_class = box_2.getAttribute('class').replace('box box-2 col-1', '');
box_3_class = box_3.getAttribute('class').replace('box box-3 col-1', '');
box_4_class = box_4.getAttribute('class').replace('box box-4 col-1', '');
box_5_class = box_5.getAttribute('class').replace('box box-5 col-1', '');
box_6_class = box_6.getAttribute('class').replace('box box-6 col-1', '');
box_7_class = box_7.getAttribute('class').replace('box box-7 col-1', '');
box_8_class = box_8.getAttribute('class').replace('box box-8 col-1', '');

var box_1_pre_assigned_class = 'box box-1 col-1';
var box_2_pre_assigned_class = 'box box-2 col-1';
var box_3_pre_assigned_class = 'box box-3 col-1';
var box_4_pre_assigned_class = 'box box-4 col-1';
var box_5_pre_assigned_class = 'box box-5 col-1';
var box_6_pre_assigned_class = 'box box-6 col-1';
var box_7_pre_assigned_class = 'box box-7 col-1';
var box_8_pre_assigned_class = 'box box-8 col-1';

// console.log(box_1);
// console.log(box_2);
// console.log(box_3);
// console.log(box_4);
// console.log(box_5);
// console.log(box_6);
// console.log(box_7);
// console.log(box_8);

turn_btn.onclick = function() {
  if ( box_1_class === 'c2', 'r2' ) {
    box_1_class_replace = box_1_class.replace('r2', 'r3');
    box_1.setAttribute('class', box_1_pre_assigned_class + box_1_class_replace);
  } else if ( box_1_class === 'c2', 'r3') {
    box_1_class_replace = box_1_class.replace('r3', 'r4');
    box_1.setAttribute('class', box_1_pre_assigned_class + box_1_class_replace);
  } else if ( box_1_class === 'c2', 'r4') {
    box_1_class_replace = box_1_class.replace('c2', 'c3');
    box_1.setAttribute('class', box_1_pre_assigned_class + box_1_class_replace);
  } else if ( box_1_class === 'c3', 'r4') {
    box_1_class_replace = box_1_class.replace('c3', 'c4');
    box_1.setAttribute('class', box_1_pre_assigned_class + box_1_class_replace);
  } else if ( box_1_class === 'c4', 'r4') {
    box_1_class_replace = box_1_class.replace('r4', 'r3');
    box_1.setAttribute('class', box_1_pre_assigned_class + box_1_class_replace);
  } else if ( box_1_class === 'c4', 'r3') {
    box_1_class_replace = box_1_class.replace('r3', 'r2');
    box_1.setAttribute('class', box_1_pre_assigned_class + box_1_class_replace);
  } else if ( box_1_class === 'c4', 'r2') {
    box_1_class_replace = box_1_class.replace('c4', 'c3');
    box_1.setAttribute('class', box_1_pre_assigned_class + box_1_class_replace);
  } else if ( box_1_class === 'c3', 'r2') {
    box_1_class_replace = box_1_class.replace('c3', 'c2');
    box_1.setAttribute('class', box_1_pre_assigned_class + box_1_class_replace);
  }

  if ( box_2_class === 'c2', 'r3' ) {
    box_2_class_replace = box_2_class.replace('r3', 'r4');
    box_2.setAttribute('class', box_2_pre_assigned_class + box_2_class_replace);
  } else if ( box_2_class === 'c2', 'r4' ) {
    box_2_class_replace = box_2_class.replace('c2', 'c3');
    box_2.setAttribute('class', box_2_pre_assigned_class + box_2_class_replace);
  } else if ( box_2_class === 'c3', 'r4' ) {
    box_2_class_replace = box_2_class.replace('c3', 'c4');
    box_2.setAttribute('class', box_2_pre_assigned_class + box_2_class_replace);
  } else if ( box_2_class === 'c4', 'r4' ) {
    box_2_class_replace = box_2_class.replace('r4', 'r3');
    box_2.setAttribute('class', box_2_pre_assigned_class + box_2_class_replace);
  } else if ( box_2_class === 'c4', 'r3' ) {
    box_2_class_replace = box_2_class.replace('r3', 'r2');
    box_2.setAttribute('class', box_2_pre_assigned_class + box_2_class_replace);
  } else if ( box_2_class === 'c4', 'r2' ) {
    box_2_class_replace = box_2_class.replace('c4', 'c3');
    box_2.setAttribute('class', box_2_pre_assigned_class + box_2_class_replace);
  } else if ( box_2_class === 'c3', 'r2' ) {
    box_2_class_replace = box_2_class.replace('c3', 'c2');
    box_2.setAttribute('class', box_2_pre_assigned_class + box_2_class_replace);
  } else if ( box_2_class === 'c2', 'r2') {
    box_2_class_replace = box_2_class.replace('r2', 'r3');
    box_2.setAttribute('class', box_2_pre_assigned_class + box_2_class_replace);
  }

  if ( box_3_class === 'c2', 'r4' ) {
    box_3_class_replace = box_3_class.replace('c2', 'c3');
    box_3.setAttribute('class', box_3_pre_assigned_class + box_3_class_replace);
  } else if ( box_3_class === 'c3', 'r4' ) {
    box_3_class_replace = box_3_class.replace('c3', 'c4');
    box_3.setAttribute('class', box_3_pre_assigned_class + box_3_class_replace);
  } else if ( box_3_class === 'c4', 'r4' ) {
    box_3_class_replace = box_3_class.replace('r4', 'r3');
    box_3.setAttribute('class', box_3_pre_assigned_class + box_3_class_replace);
  } else if ( box_3_class === 'c4', 'r3' ) {
    box_3_class_replace = box_3_class.replace('r3', 'r2');
    box_3.setAttribute('class', box_3_pre_assigned_class + box_3_class_replace);
  } else if ( box_3_class === 'c4', 'r2' ) {
    box_3_class_replace = box_3_class.replace('c4', 'c3');
    box_3.setAttribute('class', box_3_pre_assigned_class + box_3_class_replace);
  } else if ( box_3_class === 'c3', 'r2' ) {
    box_3_class_replace = box_3_class.replace('c3', 'c2');
    box_3.setAttribute('class', box_3_pre_assigned_class + box_3_class_replace);
  } else if ( box_3_class === 'c2', 'r2' ) {
    box_3_class_replace = box_3_class.replace('r2', 'r3');
    box_3.setAttribute('class', box_3_pre_assigned_class + box_3_class_replace);
  } else if ( box_3_class === 'c2', 'r3') {
    box_3_class_replace = box_3_class.replace('r3', 'r4');
    box_3.setAttribute('class', box_3_pre_assigned_class + box_3_class_replace);
  }

  if ( box_4_class === 'c3', 'r4' ) {
    box_4_class_replace = box_4_class.replace('c3', 'c4');
    box_4.setAttribute('class', box_4_pre_assigned_class + box_4_class_replace);
  } else if ( box_4_class === 'c4', 'r4'  ) {
    box_4_class_replace = box_4_class.replace('r4', 'r3');
    box_4.setAttribute('class', box_4_pre_assigned_class + box_4_class_replace);
  } else if ( box_4_class === 'c4', 'r3'  ) {
    box_4_class_replace = box_4_class.replace('r3', 'r2');
    box_4.setAttribute('class', box_4_pre_assigned_class + box_4_class_replace);
  } else if ( box_4_class === 'c4', 'r2'  ) {
    box_4_class_replace = box_4_class.replace('c4', 'c3');
    box_4.setAttribute('class', box_4_pre_assigned_class + box_4_class_replace);
  } else if ( box_4_class === 'c3', 'r2'  ) {
    box_4_class_replace = box_4_class.replace('c3', 'c2');
    box_4.setAttribute('class', box_4_pre_assigned_class + box_4_class_replace);
  } else if ( box_4_class === 'c2', 'r2'  ) {
    box_4_class_replace = box_4_class.replace('r2', 'r3');
    box_4.setAttribute('class', box_4_pre_assigned_class + box_4_class_replace);
  } else if ( box_4_class === 'c2', 'r3'  ) {
    box_4_class_replace = box_4_class.replace('r3', 'r4');
    box_4.setAttribute('class', box_4_pre_assigned_class + box_4_class_replace);
  } else if ( box_4_class === 'c2', 'r4') {
    box_4_class_replace = box_4_class.replace('c2', 'c3');
    box_4.setAttribute('class', box_4_pre_assigned_class + box_4_class_replace);
  }

  if ( box_5_class === 'c4', 'r4' ) {
    box_5_class_replace = box_5_class.replace('r4', 'r3');
    box_5.setAttribute('class', box_5_pre_assigned_class + box_5_class_replace);
  } else if ( box_5_class === 'c4', 'r3'  ) {
    box_5_class_replace = box_5_class.replace('r3', 'r2');
    box_5.setAttribute('class', box_5_pre_assigned_class + box_5_class_replace);
  } else if ( box_5_class === 'c4', 'r2'  ) {
    box_5_class_replace = box_5_class.replace('c4', 'c3');
    box_5.setAttribute('class', box_5_pre_assigned_class + box_5_class_replace);
  } else if ( box_5_class === 'c3', 'r2'  ) {
    box_5_class_replace = box_5_class.replace('c3', 'c2');
    box_5.setAttribute('class', box_5_pre_assigned_class + box_5_class_replace);
  } else if ( box_5_class === 'c2', 'r2'  ) {
    box_5_class_replace = box_5_class.replace('r2', 'r3');
    box_5.setAttribute('class', box_5_pre_assigned_class + box_5_class_replace);
  } else if ( box_5_class === 'c2', 'r3'  ) {
    box_5_class_replace = box_5_class.replace('r3', 'r4');
    box_5.setAttribute('class', box_5_pre_assigned_class + box_5_class_replace);
  } else if ( box_5_class === 'c2', 'r4'  ) {
    box_5_class_replace = box_5_class.replace('c2', 'c3');
    box_5.setAttribute('class', box_5_pre_assigned_class + box_5_class_replace);
  } else if ( box_5_class === 'c3', 'r4') {
    box_5_class_replace = box_5_class.replace('c3', 'c4');
    box_5.setAttribute('class', box_5_pre_assigned_class + box_5_class_replace);
  }

  if ( box_6_class ===  'c4', 'r3' ) {
    box_6_class_replace = box_6_class.replace('r3', 'r2');
    box_6.setAttribute('class', box_6_pre_assigned_class + box_6_class_replace);
  } else if ( box_6_class === 'c4', 'r2' ) {
    box_6_class_replace = box_6_class.replace('c4', 'c3');
    box_6.setAttribute('class', box_6_pre_assigned_class + box_6_class_replace);
  } else if ( box_6_class === 'c3', 'r2' ) {
    box_6_class_replace = box_6_class.replace('c3', 'c2');
    box_6.setAttribute('class', box_6_pre_assigned_class + box_6_class_replace);
  } else if ( box_6_class === 'c2', 'r2' ) {
    box_6_class_replace = box_6_class.replace('r2', 'r3');
    box_6.setAttribute('class', box_6_pre_assigned_class + box_6_class_replace);
  } else if ( box_6_class === 'c2', 'r3' ) {
    box_6_class_replace = box_6_class.replace('r3', 'r4');
    box_6.setAttribute('class', box_6_pre_assigned_class + box_6_class_replace);
  } else if ( box_6_class === 'c2', 'r4' ) {
    box_6_class_replace = box_6_class.replace('c2', 'c3');
    box_6.setAttribute('class', box_6_pre_assigned_class + box_6_class_replace);
  } else if ( box_6_class === 'c3', 'r4' ) {
    box_6_class_replace = box_6_class.replace('c3', 'c4');
    box_6.setAttribute('class', box_6_pre_assigned_class + box_6_class_replace);
  } else if ( box_6_class === 'c4', 'r4') {
    box_6_class_replace = box_6_class.replace('r4', 'r3');
    box_6.setAttribute('class', box_6_pre_assigned_class + box_6_class_replace);
  }

  if ( box_7_class === 'c4', 'r2' ) {
    box_7_class_replace = box_7_class.replace('c4', 'c3');
    box_7.setAttribute('class', box_7_pre_assigned_class + box_7_class_replace);
  } else if ( box_7_class === 'c3', 'r2' ) {
    box_7_class_replace = box_7_class.replace('c3', 'c2');
    box_7.setAttribute('class', box_7_pre_assigned_class + box_7_class_replace);
  } else if ( box_7_class === 'c2', 'r2' ) {
    box_7_class_replace = box_7_class.replace('r2', 'r3');
    box_7.setAttribute('class', box_7_pre_assigned_class + box_7_class_replace);
  } else if ( box_7_class === 'c2', 'r3' ) {
    box_7_class_replace = box_7_class.replace('r3', 'r4');
    box_7.setAttribute('class', box_7_pre_assigned_class + box_7_class_replace);
  } else if ( box_7_class === 'c2', 'r4' ) {
    box_7_class_replace = box_7_class.replace('c2', 'c3');
    box_7.setAttribute('class', box_7_pre_assigned_class + box_7_class_replace);
  } else if ( box_7_class === 'c3', 'r4' ) {
    box_7_class_replace = box_7_class.replace('c3', 'c4');
    box_7.setAttribute('class', box_7_pre_assigned_class + box_7_class_replace);
  } else if ( box_7_class === 'c4', 'r4' ) {
    box_7_class_replace = box_7_class.replace('r4', 'r3');
    box_7.setAttribute('class', box_7_pre_assigned_class + box_7_class_replace);
  } else if ( box_7_class === 'c4', 'r3') {
    box_7_class_replace = box_7_class.replace('r3', 'r2');
    box_7.setAttribute('class', box_7_pre_assigned_class + box_7_class_replace);
  }

  if ( box_8_class === 'c3', 'r2' ) {
    box_8_class_replace = box_8_class.replace('c3', 'c2');
    box_8.setAttribute('class', box_8_pre_assigned_class + box_8_class_replace);
  } else if ( box_8_class === 'c2', 'r2'  ) {
    box_8_class_replace = box_8_class.replace('r2', 'r3');
    box_8.setAttribute('class', box_8_pre_assigned_class + box_8_class_replace);
  } else if ( box_8_class === 'c2', 'r3'  ) {
    box_8_class_replace = box_8_class.replace('r3', 'r4');
    box_8.setAttribute('class', box_8_pre_assigned_class + box_8_class_replace);
  } else if ( box_8_class === 'c2', 'r4'  ) {
    box_8_class_replace = box_8_class.replace('c2', 'c3');
    box_8.setAttribute('class', box_8_pre_assigned_class + box_8_class_replace);
  } else if ( box_8_class === 'c3', 'r4'  ) {
    box_8_class_replace = box_8_class.replace('c3', 'c4');
    box_8.setAttribute('class', box_8_pre_assigned_class + box_8_class_replace);
  } else if ( box_8_class === 'c4', 'r4'  ) {
    box_8_class_replace = box_8_class.replace('r4', 'r3');
    box_8.setAttribute('class', box_8_pre_assigned_class + box_8_class_replace);
  } else if ( box_8_class === 'c4', 'r3'  ) {
    box_8_class_replace = box_8_class.replace('r3', 'r2');
    box_8.setAttribute('class', box_8_pre_assigned_class + box_8_class_replace);
  } else if ( box_8_class === 'c4', 'r2') {
    box_8_class_replace = box_8_class.replace('c4', 'c3');
    box_8.setAttribute('class', box_8_pre_assigned_class + box_8_class_replace);
  }

};
