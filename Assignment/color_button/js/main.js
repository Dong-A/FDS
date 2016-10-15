var hexadecimal_array = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f' ];

function randomColor(num) {
  var rgb_array = [];
  for ( var i = 0; i < 6; i++) {
    var hexadecimal_pick = hexadecimal_array[Math.floor( Math.random() * 16 )];
    rgb_array.push(hexadecimal_pick);
  }
  var color = rgb_array.join("");
  document.querySelector(".button-"+num).style.backgroundColor = '#' + color;
  // console.log(color);

  var btn_1 = document.querySelector(".button-1").style.backgroundColor;
  var btn_2 = document.querySelector(".button-2").style.backgroundColor;
  var btn_3 = document.querySelector(".button-3").style.backgroundColor;

  var button_1 = (btn_1.replace( /[rgb\(\)]| /gi, "" )).split(",");
  var button_2 = (btn_2.replace( /[rgb\(\)]| /gi, "" )).split(",");
  var button_3 = (btn_3.replace( /[rgb\(\)]| /gi, "" )).split(",");

  console.log(button_1);
  console.log(button_2);
  console.log(button_3);

  var merge_red = Math.floor((Number(button_1[0]) + Number(button_2[0]) + Number(button_3[0]))/3);
  var merge_green = Math.floor((Number(button_1[1]) + Number(button_2[1]) + Number(button_3[1]))/3);
  var merge_blue = Math.floor((Number(button_1[2]) + Number(button_2[2]) + Number(button_3[2]))/3);

  console.log(merge_red);
  console.log(merge_green);
  console.log(merge_blue);

  document.querySelector(".button-wrap").style.backgroundColor = 'rgb(' + merge_red + ',' + merge_green + ',' + merge_blue + ')';
}
