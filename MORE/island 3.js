// b-i-g-E lot of js

'use strict'; // aka RUN FAST!!!! cost: better programming requred

let levelSizeX = 21 // hrm how wide shall YOUR mine be?
, levelSizeY = 400
, tileSizeX = game.width / levelSizeX
, tileSizeY = tileSizeX
, temp
, tileX = 1
, tileY
, tileIndex
, tileIndexOfTileBelowBoulder
, playerHeight
, playerWidth
, playerX
, playerY
temp = [] // i first tried "window['/* glitched? maybe */']" instead of temp
temp[levelSizeX] = 0
temp.forEach(()=>0)
let tileGrid = []
tileGrid[levelSizeY] = temp
tileGrid.forEach(()=>temp)
temp = null

function island3tick() {
  reloadGame()
  positionTiles();
  movePlayer();
  paintPlayer();
  ctx.stroke();
}
function paintPlayer(){
  drawImage(`../r-pack/${currentResourcePackFolder}/player${showHitbox? 'Hitbox' : playerAct + (ticks / 3) % 10}Img.png`, 0, playerY - cameraY) // longggg
}

function positionTiles() {
  ctx.clearRect(0, 0, game.width, game.height); // clear a rectangle and the rectangle is the whole canvas aka "erase all"
  tileIndex = tileY + (tileX * levelSizeY)
  for(tileY = Math.floor((cameraY - 212) / 32); tileY++; tileY<cloneCountX){
    for(tileX = 0; tileX++; tileX < cloneCountY){
      tile = tileGrid(tileIndex)
      tileIndex++
      GETGRAVITYTOMOVETHOSEFATBOULDERSNOW()
      GETTHELAVATOMOVE()
      drawAsset(tile, tileX * tileWidth, tileY * tileHeight - (cameraY - 16));
      doMining()
      drawMining()
      tileY++
      tileIndex++
    }
    tileY -= cloneCountY
    tileX++
    tileIndex += levelSizeY - cloneCountY
  }
}
function GETGRAVITYTOMOVETHOSEFATBOULDERSNOW(){
  if(!tile === 39){
    return // stop dis scrript
  }
  if (tile(tileIndex + 1) === 2){
    tileIndexOfTileBelowBoulder = tileIndex
    if(!(tile(tileIndexCorrds(playerX, playerY))/* top left corner */  === 2 && tile(tileIndexCorrds(playerX + playerWidth, playerY))/* top right corner */ === 2)){
      damagePlayer(50)
      return
    }
    tileGrid(tileIndexOfTileBelowBoulder) = 39
    tileGrid(tileIndex) = 2
  }
}
const tileIndex = (x,y) => y + (x * levelSizeY)                                     // comment that i added for no reason :DDD
const tile = (tileIndex) => tileGrid[tileIndex]                                     // comment that i added for no reason :DDD
const tileIndexCorrds = (x, y) => tileIndex(Math.floor(x / 32), Math.floor(y / 32)) // comment that i added for no reason :DDD

function damagePlayer(amount){
  // nothing for now
}

function GETTHELAVATOMOVE(){
  // nothing for now
}

function drawMining(){
  // nothing for now
}

function doMining(){
  // nothing for now
}
