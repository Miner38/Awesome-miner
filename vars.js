const game = document.querySelector("canvas")
let controls = {
  up: [32],
  down: [],
  left: [],
  right: [],
  sneak: [],
  jump: [],
  openSettings: [],
  openDebug: [],
  showHideVars: [],
  information: [],
  credits: [],
  crash: [],
}

let island = 1

let controlsPressed = {
  up: false,
  down: false,
  left: false,
  right: false,
}
