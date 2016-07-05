var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var context;
var x = 50;
var y = 25;
var dx = 2;
var dy = -2;
var ballRadius = 10;

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

function draw() {
  // ctx.clearReact(x, y, width, height); = Sets all pixels in the rectangle defined by starting point (x, y) and size (width, height) to transparent black, erasing any previously drawn content.
  context.clearRect(0, 0, 300, 400);
  drawBall();
  if (y + dy < ballRadius || y + dy > 395) {
    dy = -dy;
   // if (y + dy > 395) {
   //    window.alert("Hello");
   //  }
  };
  if (x + dx >= 295 || x + dx < ballRadius) {
    dx = -dx;
  };
  x += dx;
  y += dy;
}

  // Boundary Logic
//
// if (x < 10 || x > 290) dx = -dx;
// if (y < 10 || y > 390) dy = -dy;

// }

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




// var dx= 4;
// var dy=4;
// var y=150;
// var x=10;
// function draw(){
//   context= myCanvas.getContext('2d');
//   context.clearRect(0,0,300,400);
//   context.beginPath();
//   context.fillStyle="#0000ff";
//   context.arc(x,y,20,0,Math.PI*2,true);
//   context.closePath();
//   context.fill();
//   if( x<0 || x>280)
//   dx=-dx;
//   if( y<0 || y>380)
//     dy=-dy;
//     x+=dx;
//     y+=dy;
//   }
// setInterval(draw,10);


// ctx.beginPath();
// ctx.moveTo(10,10);
// ctx.lineWidth = 15;
// ctx.lineCap = "round";
// ctx.lineTo(100,100);
// ctx.stroke()


