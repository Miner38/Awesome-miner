var pressedKeys = {}
var i
var iNumber2
var ummIdunnoWhatToCallThisVarabile;
var ummIdunnoWhatToCallThisVarabile2 = ["left", "right", 'up', 'down']
var ummIdunnoWhatToCallThisVarabile3;
window.onkeyup = function(e) { pressedKeys[e.keyCode] = false; }
window.onkeydown = function(e) { pressedKeys[e.keyCode] = true; }
function checkControls(){
  ummIdunnoWhatToCallThisVarabile = "left"
  controlsPressed[ummIdunnoWhatToCallThisVarabile] = false
  for (ummIdunnoWhatToCallThisVarabile3 = 1; ummIdunnoWhatToCallThisVarabile3 < ummIdunnoWhatToCallThisVarabile2.length; ummIdunnoWhatToCallThisVarabile3++) {
    for (ummIdunnoWhatToCallThisVarabile = 1; ummIdunnoWhatToCallThisVarabile <= ummIdunnoWhatToCallThisVarabile2.length; ummIdunnoWhatToCallThisVarabile++){
      for (i = 1; i < controls[ummIdunnoWhatToCallThisVarabile].length; i++) {
        if (pressedKeys[controls[ummIdunnoWhatToCallThisVarabile][i]]) {
          controlsPressed[ummIdunnoWhatToCallThisVarabile] = true
          break // get rid of lag!
        }
      }
      ummIdunnoWhatToCallThisVarabile = ummIdunnoWhatToCallThisVarabile2[ummIdunnoWhatToCallThisVarabile3]
    }
  }
  // done (oof)
}

function isSomethingPressed (control) /* control can be "jump" or 'left' or whatever */ {
  return controlsPressed[control]
}
