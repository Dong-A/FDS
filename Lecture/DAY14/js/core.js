var is_button_pressed = false;

var button_state = is_button_pressed;
var toggle_button = document.querySelector(".toggle-button");

function toggleButton() {
  if ( button_state === true ) {
    console.log ("Hi");
  }
  else {
    console.log ("Hey");
  }
}

toggle_button.toggleButton();
