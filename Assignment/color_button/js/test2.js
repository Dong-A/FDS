var hexadecimal_array = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f' ];

function randomColor(num) {
  var rgb_array = [];
  for ( var i = 0; i < 6; i++) {
    var hexadecimal_pick = hexadecimal_array[Math.floor( Math.random() * 16 )];
    rgb_array.push(hexadecimal_pick);
  }
  var color = '#' + rgb_array.join("");
  document.querySelector(".button-"+num).style.backgroundColor = color;
  console.log(color);
}
