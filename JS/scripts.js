var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var context;
var x = 10;
var y = 10;
var dx = 5;
var dy = 5;

function init() {
// getContext(ctxType, ctxAttributes) = returns a drawing context on the canvas. Creates an object representing a two-dimensional rendering context.
  context = myCanvas.getContext('2d');
  setInterval(draw,10);
}
function draw() {
// ctx.clearReact(x, y, width, height); = Sets all pixels in the rectangle defined by starting point (x, y) and size (width, height) to transparent black, erasing any previously drawn content.
  context.clearRect(0, 0, 300, 400)
// ctx.beginPath() = This creates a new path. Starts a new path by emptying the list of sub-paths.
  context.beginPath();
  context.fillStyle = "#8AFF57"
// ctx.arc (x, y, radius, startAngle, endAngle, anticlockwise); = Draws a CIRCLE!
// Math.PI = Ratio of the circumference of a circle to its diameter, approximately 3.14159
  context.arc(x, y, 8, 0, Math.PI * 2, true);
// ctx.closePath() = causes the point of the pen to move back to the start of the current sub-path aka - beginPath()
  context.closePath();
  context.fill();
  x+=dx;
  y+=dy;
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
  bgcanvas.css("background", "red")
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


