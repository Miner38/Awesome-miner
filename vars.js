const game = document.querySelector("canvas")
let controls = {
  up: [[32]], // up in island 1 / 2 / you get the point // 32 = space
  down: [],
  left: [],
  right: [],
  sneak: [], // in island 3
  jump: [[32]], // jump in island 3 // 32 = space
  openSettings: [[27]],
  openDebug: [],
  showHideVars: [],
  information: [],
  credits: [],
  crash: [[127]], // delete
  crashBrowserTab: [[127, 'shift']],
}

let island = 1

let tick = 0

var resourcePack = "./default/default1"
