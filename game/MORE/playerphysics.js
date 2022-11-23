let playerHeight
, playerWidth
, playerX
, playerY
, playerHealth

function damagePlayer(amount){
  if (iFrameEnd <= new Date.time){
    playerHealth -= amount
    iFrameEnd = new Date().getTime() + 100
    iFrameAmount = amount
    return
  }
}
