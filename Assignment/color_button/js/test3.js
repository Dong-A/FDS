function randomColor(num) {
  var red = Math.floor( Math.random() * 256 );
  var green = Math.floor( Math.random() * 256 );
  var blue = Math.floor( Math.random() * 256 );

  console.log(red);
  console.log(green);
  console.log(blue);

  document.querySelector(".button-"+num).style.backgroundColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
  return [red, green, blue];
}



function mergeColor(num) {
  var btn_1 = randomColor(num);
  var btn_2 = randomColor(num);
  var btn_3 = randomColor(num);

  console.log(btn_1);
  console.log(btn_2);
  console.log(btn_3);

  var merge_red = Math.floor((btn_1[0] + btn_2[0] + btn_3[0])/3);
  var merge_green = Math.floor((btn_1[1] + btn_2[1] + btn_3[1])/3);
  var merge_blue = Math.floor((btn_1[2] + btn_2[2] + btn_3[2])/3);

  console.log(merge_red);
  console.log(merge_green);
  console.log(merge_blue);

  document.querySelector(".container").style.backgroundColor = 'rgb(' + merge_red + ',' + merge_green + ',' + merge_blue + ')';
}



// mergeColor(1);
// mergeColor(2);
// mergeColor(3);
