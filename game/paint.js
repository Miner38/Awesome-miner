/* const pi = 3.1415 - Math.pi + 3.1415;

*/

const pi = Math.PI
var ctx = game.getContext('2d')
function makeRect(color, x, y, width, height) {
  ctx.fillStyle = color
  ctx.fillRect(x, y, width, height)
}
function drawLine(fromX, fromY, toX, toY){
  ctx.moveTo(fromX, fromY)
  ctx.lineTo(toX, toY)
  ctx.stroke()
}

function drawApieWithAsliceCutOut(centerX, centerY, radius, fillColor = "transparent", outlineColor = "black", outlineThickness = "0", startAngle = 0, endAngle = 2 * pi){
  ctx.beginPath()
  ctx.arc(centerX, centerY, radius, startAngle, endAngle)
  ctx.fillStyle = fillColor
  ctx.fill()
  ctx.strokeStyle = outlineColor
  ctx.lineWidth = outlineThickness
  ctx.stroke()
}

function drawAcircle(centerX, centerY, radius, fillColor = "transparent", outlineColor = "black", outlineThickness = '0'){
  drawApieWithAsliceCutOut(centerX, centerY, radius, fillColor, outlineColor, outlineThickness)
}

function drawImage(url, x, y) {
  daImage = new Image();
  daImage.src = url;
  daImage.onload = () => {
    ctx.drawImage(daImage, x, y)
  }
}

function drawAsset(assetName, x, y, svg, opacity = 1) {
  ctx.globalAlpha = opacity
  daImage = new Image();
  daImage.src = `./r-pack/${currentResourcePackFolder}/assets/${assetName}.${svg? 'svg' : 'png'}`;
  daImage.onload = () => {
    ctx.drawImage(daImage, x, y)
  }
}
function addButton(asset, x, y, sizeX, sizeY, onclick, onhover, id){
  buttons[id] = {
    asset: asset,
    x: x, // position
    y: y, // position
    sizeX: sizeX,
    sizeY: sizeY,
    onclick: onclick,
    onhover: onhover,
  }
}
function removeButton(id){
  delete buttons[id]
}
function buttonUpdateAll (){
  Object.keys(obj).forEach(function(key,index) {
    // key: the name of the object key
    // index: the ordinal position of the key within the object
    buttonUpdate(key)

    // copied from https://stackoverflow.com/questions/8312459/iterate-through-object-properties#:~:text=Object.keys(obj).forEach(function(key%2Cindex)%20%7B%0A%20%20%20%20//%20key%3A%20the%20name%20of%20the%20object%20key%0A%20%20%20%20//%20index%3A%20the%20ordinal%20position%20of%20the%20key%20within%20the%20object%20%0A%7D)%3B
  })
}
function buttonUpdate (id){
  button = buttons[id]
  if (((mouseX - button.x) < button.sizeX) && (mouseY - button.y) < button.sizeY) {
    // mouse is hovering / clicking
    if (mouseDown){
      // click
      button.onclick()
    } else {
      // hover
      button.onhover()
    }
  }
  drawAsset(button.asset, x, y)
}

function drawBackground() {

}

function drawTiles() {

}

function drawTheRest() {

}

const drawRect = ctx.drawRect

function render(params) {
  drawBackground()
  drawtiles()
  drawTheRest()
  ctx.stroke() // basicly screen refesh in scratch
}
