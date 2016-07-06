var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;
var ballRadius = 10;
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width-paddleWidth/2)
var rightPressed = false;
var leftPressed = false;

// Listens to key pressed Left and Right
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
  if (e.keyCode == 39) {
    rightPressed = true;
  }
  else if (e.keyCode == 37) {
    leftPressed = true;
  }
}

function keyUpHandler(e) {
  if (e.keyCode == 39) {
    rightPressed = false;
  }
  else if (e.keyCode == 37) {
    leftPressed = false;
  }
}

function init() {
// getContext(ctxType, ctxAttributes) = returns a drawing context on the canvas. Creates an object representing a two-dimensional rendering context.
  context = myCanvas.getContext('2d');
  setInterval(draw, 30);
}

function drawBall() {
// ctx.beginPath() = This creates a new path. Starts a new path by emptying the list of sub-paths.
  context.beginPath();
// ctx.arc (x, y, radius, startAngle, endAngle, anticlockwise) = DRAWS A CIRCLE!
// Math.PI = Ratio of the circumference of a circle to its diameter, approximately 3.14159
  context.arc(x, y, ballRadius, 0, Math.PI * 2);
  context.fillStyle = "#8AFF57";
  context.fill();
// ctx.closePath() = causes the point of the pen to move back to the start of the current sub-path aka - beginPath()
  context.closePath();
}

function drawPaddle() {
  context.beginPath();
// ctx.rect(x, y, width, height) = creates a path for a rectangle at position (x, y) with a size that is determined by width and height
  context.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
  context.fillStyle = "grey";
  context.fill();
  context.closePath();
}

function draw() {
  // ctx.clearReact(x, y, width, height); = Sets all pixels in the rectangle defined by starting point (x, y) and size (width, height) to transparent black, erasing any previously drawn content.
  context.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  drawPaddle();

// Boundery Logic
  // Top Border Only
  if (y + dy < ballRadius) {
  // This replicates the movement but in the opposite direction
    dy = -dy;
      // This indicates "Game Over" when ball hits the bottom frame
  } else if (y + dy > canvas.height-ballRadius) {
      alert("GAME OVER");
      document.location.reload();
    }
  // Right and Left Borders
  if (x + dx >= 295 || x + dx < ballRadius) {
   // This replicates the movement but in the opposite direction
    dx = -dx;
  };
// Paddle moving logic
  if (rightPressed && paddleX < canvas.width-paddleWidth) {
    paddleX += 7;
  }
  else if (leftPressed && paddleX > 0) {
    paddleX -= 7;
  }

  x += dx;
  y += dy;
}

// when the DOM is loaded, run the init function
$(document).ready(function(){
  init();
})

var button = $("#colorbutton")
button.on('click', function(e){
// Need to target the canvas
// Need jQuery to change the background of the canvas
  var bgcanvas = $("#myCanvas")
  bgcanvas.css("background", "#457F2C")
});