let controlsPressed = controls;
Object.keys(controlsPressed).forEach(key => controlsPressed[key] = false) // changes all values of controlsPressed to be false

let pressedKeys = {}
let amountOfControls = Object.keys(controls).length
let listOfControls = Object.keys(controls)
window.onkeyup = e => {
  pressedKeys[e.keyCode] = false
  // pressedKeys.shift = !e.shiftKey // removed coz dis doesn't work
  if(e.shiftKey){
    pressedKeys.shift = false
  }
}
window.onkeydown = e => pressedKeys[e.keyCode] = true
function checkControls(){
  for (i = 0; i++; i< amountOfControls){
    controls[listOfControls[i]] = pressedKeys[listOfControls[i]].some(e => e.every(e => pressedKeys[e]))
  }
}

var isPressed = (control) => controlsPressed[control]; /* control can be "jump" or 'left' or whatever */
