var angle = 0;  // initialize angle variable
var scalar = 300;  // set the radius of circle of rotation
var startX = 800;  // set the x-coordinate for the circle center
var startY = 400;  // set the y-coordinate for the circle center
var side = 10;
var fr = 15;
var song;
function preload(){
  song = loadSound('song.mp3');
}

function setup() {
  createCanvas(1900, 1200);
  frameRate(fr);
  angleMode(DEGREES);// change the angle mode from radians to degrees
}

function draw() {
  background(0);
  song.play();
  
  for(side = 10; side<300; side = side + 30)
  {
  	var x = startX + scalar * cos(angle*side/1200);
 	var y = startY + scalar * sin(angle*side/1200)/1.5;
  	noFill();

  	stroke(247, 103, 240);
  	strokeWeight(3.5);
  	triangle(x, y, x+side, y, x + (Math.sqrt(1)/2)*side, y + (Math.sqrt(3)/2)*side );
  	angle++; // increment angle for the next frame


  	stroke(187, 53, 190);
  	strokeWeight(3);
  	triangle(x, y, x+side, y, x + (Math.sqrt(1)/2)*side, y + (Math.sqrt(3)/2)*side );
  	angle++; // increment angle for the next frame
  }

  for(side = 10; side<300; side = side + 30)
  {
  	var x = startX-300 - scalar * cos(angle*side/1200);
 	var y = startY + scalar * sin(angle*side/1200)/1.5;
  	noFill();

  	stroke(247, 183, 240);
  	strokeWeight(3);
  	triangle(x, y, x+side, y, x + (Math.sqrt(1)/2)*side, y + (Math.sqrt(3)/2)*side );


  	stroke(210, 53, 80);
  	strokeWeight(3);
  	triangle(x, y, x+side, y, x + (Math.sqrt(1)/2)*side, y + (Math.sqrt(3)/2)*side );



  	angle++; // increment angle for the next frame
  }

  
}
