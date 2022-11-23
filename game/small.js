function wait(amount) {
  let waitStart = Date.time
  let waitEnd = waitStart + amount
  while (Date.time < waitEnd) { }
  return `waited for ${amount} seconds`
}

// moving to somewhere else

document.onmousemove = function (e) {
  mouseX = e.pageX
  mouseY = e.pageY
  // console.log(`mousemove mouse x:${mouseX} mouse y:${mouseY}`)
}
game.onmousedown = () => mouseDown = true
game.onmouseup = () => mouseDown = false
window.onload = () => window.requestAnimationFrame(tick)

function reloadGame () {
  game.height = window.screen.availHeight
  game.width = window.screen.availWidth
  portalPositions = {
    true: [15, ctx.height - 40],
    false:  []
  }
}

let delta, lastFrameTime, deltaFramerate = 30 /* 35 FPS!!! like RB1's 31FPS hee hee */ /* nah i love ruining the fun... 30 FPS*/, speed = 1 / deltaFramerate

// function tick (time){
//   // how to code like yandev
//   // expect, better*
//   // nah replaced
//   const delta = (time - lastFrameTime) * speed
//   reloadGame()
//   switchisland()
//   if (Date.now % 30 == 0) /*every 30 millseconds*/ {ticks++ /* add 1 to tick */}
//   // console.log(`small mouse x:${mouseX} mouse y:${mouseY}`)
//   // if (1 === 2){console.log('HELP!!!!!!!!!!!!!!')}
//   lastFrameTime = time
//   window.requestAnimationFrame(tick)
// }

// function gameLoop(){
//   tick()
// }

IEbrowserwarning()

// gameLoop()

function startFrame (){
  const delta = (time - lastFrameTime) * speed
  setInterval(function(){ticks++}, 30)
  reloadGame()
  // if (Date.now % 30 == 0) /*every 30 millseconds*/ {ticks++ /* add 1 to ticks */}
  // like frames, but not frames. See minecraft wiki (why not minecraft) for more information
  // console.log(`small mouse x:${mouseX} mouse y:${mouseY}`)
  // if (1 === 2){console.log('HELP!!!!!!!!!!!!!!')}

  // code under here
  

  render() // at the end
  // code over here

  lastFrameTime = time
}
