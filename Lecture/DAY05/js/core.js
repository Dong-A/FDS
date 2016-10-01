var fds_model = '문자라우';
var current_state = 123;
var is_finished = true;
var your_name;
var container = null;


var fds_view = fds_model;

console.log("fds_model:", fds_model);
console.log("fds_view:", fds_view);

var fds_model = "모델바꿔치기";

console.log("fds_model:", fds_model);
console.log("fds_view:", fds_view);

var fds_view = fds_model;

console.log("fds_model:", fds_model);
console.log("fds_view:", fds_view);



var my_parent = document.getElementById("my-parent");
var child_1 = document.getElementById("child-one");
var child_2 = document.getElementById("child-two");
// var parent_baby= parent.firstChild.nodeValue;

console.log("my_parent:", my_parent);
console.log("child_1:", child_1);
console.log("child_2:", child_2);

// 문서 객체 제어
my_parent.style.border = '1px solid violet';
child_1.style.color = 'pink';
child_2.style.background = 'powderblue';
