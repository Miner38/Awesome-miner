(function reloadGame () {
  game.height = window.screen.availHeight
  game.width = window.screen.availWidth
})()

function tick (){
  // how to code like yandev
  // expect, better*
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
  if (Date.time % 30 == 0) /*every 30 millseconds*/ {tick++ /* add 1 to tick */}

}1

function gameLoop(){
  while (true){
    tick()
  }
}

gameLoop()
