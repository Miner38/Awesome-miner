(function reloadGame () {
  game.height = window.screen.availHeight
  game.width = window.screen.availWidth
})()

function handleKeys (){
  window.onkeydown = (key) => {
    if (controls.up.includes(key.keyCode)){
      keyspressed = keyspressed.push("up")
    } else if (controls.down.includes(key.keyCode)) {
      keyspressed.down = true
    } else if (controls.right.includes(key.keyCode)) {
      keyspressed.right = true
    } else if (controls.left.includes(key.keyCode)) {
      keyspressed.left = true
    }
  }
}

handleKeys()

function tick (){
  switch (island){
    case 1:
      // island is 1!
      island1tick()
      break;
    case 2:
      // island is 2!
      island2tick()
      break;
    case 3:
      // island is 3!
      island3tick()
      break;
    default:
      // lol island is not 1, 2 or 3
      harharislandnotfound()
      break;
  }
}

function gameLoop(){
  while (true){
    tick()
  }
}

gameLoop()
