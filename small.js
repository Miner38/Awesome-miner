(function reloadGame () {
  game.height = window.screen.availHeight
  game.width = window.screen.availWidth
})()

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
    case "credits":
      openCredits()
      break;
    case "main menu":
      mainmenu()
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



