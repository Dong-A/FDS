function randomColor(num) {
  var color = '#' + Math.random().toString(16).substr(2, 6);
  document.querySelector(".button-"+num).style.backgroundColor = color;

  // document.querySelector(".button-"+num).innerHTML = color;
  console.log(color);
}


console.log(Math.random().toString(16));
console.log(Math.random());
