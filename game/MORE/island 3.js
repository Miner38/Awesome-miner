// b-i-g-E lot of js

'use strict'; // aka RUN FAST!!!! cost: better programming requred

// i wanted to make the above line a meme but the meme maker isn't working

import { encode, decode } from 'base65536'

let levelSizeX = 21 // hrm how wide shall YOUR mine be?
, levelSizeY = 400
, tileSizeX = game.width / levelSizeX
, tileSizeY = tileSizeX
, temp
, tileX = 1
, tileY
, tileIndex
, tileIndexOfTileBelowBoulder
, iFrameEnd
temp = [] // i first tried "window['/* glitched? maybe */']" instead of temp
temp[levelSizeX] = 0
temp.forEach(()=>0)
let tileGrid = []
tileGrid[levelSizeY] = temp
tileGrid.forEach(()=>temp)
temp = null

function paintPlayer(){
  drawAsset(`assets/player${showHitbox? 'Hitbox' : playerAct + (ticks / 3) % 10}Img.png`, 0, playerY - cameraY) // longggg
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
      drawAsset(`tiles/${tile}`, tileX * tileWidth, tileY * tileHeight - (cameraY - 16));
      doMining()
      tileY++
      tileIndex++
    }
    tileY -= cloneCountY
    tileX++
    tileIndex += levelSizeY - cloneCountY
  }
}
function GETGRAVITYTOMOVETHOSEFATBOULDERSNOW(){
  if(tile !== 39) return // stop dis scrript. LEARN JS WITH SCRATCH!
  if (tile(tileIndex + 1) === 2){
    tileIndexOfTileBelowBoulder = tileIndex
    if(tile(tileIndexCorrds(playerX, playerY)) /* top left corner */  === 2 && tile(tileIndexCorrds(playerX + playerWidth, playerY)) /* top right corner */ === 2){
      tileGrid(tileIndexOfTileBelowBoulder) = 39
      tileGrid(tileIndex) = 2
    }
    damagePlayer(50)
    return
  }
}
const tileIndexAt = (x,y) => y + (x * levelSizeY)                                   // comment that i added for no reason :DDD
const tile = (tileIndex) => tileGrid[tileIndex]                                     // comment that i added for no reason :DDD
const tileIndexCorrds = (x, y) => tileIndex(Math.floor(x / 32), Math.floor(y / 32)) // comment that i added for no reason :DDD
const tileIndexAtMouse = () => tileIndexCorrds(mouseX, mouseY)                      // comment that i added for no reason :DDD

function GETTHELAVATOMOVE(){
  if(tile < 29 || tile > 38) return
  if(tile === 38 || tile === 39) flowThisLavaDOWN(); return
}

function doMining(){
  if (tile === 1) return
  if(tileStengthes[tile] === -1) return
  tileHealth[tileIndex] -= pickaxe * deltaTime
  if (tileHealth[tileIndex] <= 0){
    tileGrid[tileIndex] = 2
    return
  }
  drawAsset(`tiles/miningCracks/crack${(
    Math.floor(tileStrengthes[tile] / tileHealth[tileIndex]) * 8
  )}`, tileX * 32, tileY * 32)
}
function saveMine (){
  // do stuff
  console.log(new Uint8Array([104, 101, 108, 108, 111, 32, 119, 111, 114, 108, 100, "T", 'e', 's', 't']))
}
function island3gameloop () {
  while (controlVars.changeIsland){
    tick(island3frame)
  }
  saveMine()
}

function island3frame() {
  positionTiles();
  movePlayer();
  paintPlayer();
  ctx.stroke();
}
