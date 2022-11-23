function islandswitch(toIsland){
  // // how to code like yandev
  // // expect, better*
  // switch (island){
  //   case 1:
  //     // island is 1!
  //     island1tick()
  //     break;
  //   case 2:
  //     // island is 2!
  //     island2tick()
  //     break;
  //   case 3:
  //     // island is 3!
  //     island3tick()
  //     break;
  //   case "credits":
  //     openCredits()
  //     break;
  //   case "main menu":
  //     mainmenu()
  //     break;
  //   default:
  //     // island is not 1, 2 or 3
  //     harharislandnotfound()
  //     break;
  // }
  gameloop = windows[`island${toIsland}gameloop`]
}