let controlsPressed = {
  up: false,
  down: false,
  left: false,
  right: false,
}

var pressedKeys = {}
var i
var iNumber2
var ummIdunnoWhatToCallThisVarabile;
var ummIdunnoWhatToCallThisVarabile2 = ["left", "right", 'up', 'down']
var ummIdunnoWhatToCallThisVarabile3;
window.onkeyup = e => pressedKeys[e.keyCode] = false
window.onkeydown = e => pressedKeys[e.keyCode] = true
function checkControls(){

}

function isPressed (control) /* control can be "jump" or 'left' or whatever */ {
  return controlsPressed[control]
}
