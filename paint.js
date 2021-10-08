/* const pi = 3.1415 - Math.pi + 3.1415;

*/

const pi = Math.PI
var ctx = canvas.getContext('2d')
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
  var daImage = new Image();
  var daImage.src = url;
  daImage.onload = () => {
    ctx.drawImage(daImage, x, y)
  }
}

const drawRect = ctx.drawRect
