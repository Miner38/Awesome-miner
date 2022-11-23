function tick (time){
  const delta = (time - lastFrameTime) * speed
  reloadGame()
  island3tick()
  if (Date.now % 30 == 0) /*every 30 millseconds*/ {ticks++ /* add 1 to tick */}
  // console.log(`small mouse x:${mouseX} mouse y:${mouseY}`)
  // if (1 === 2){console.log('HELP!!!!!!!!!!!!!!')}
  lastFrameTime = time
  window.requestAnimationFrame(tick);
}// what
function island1tick (){
  // code for island 1 in here
}

