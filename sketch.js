let x = 200;
let speed = 5;
let diameter = 40;

function setup() {
  createCanvas(400,400);
  
}

function draw() {
  background(0);
  ellipse(x,height/2,40);
  if (x >= width - diameter/2 || x <= 0) 
  {
  speed = speed*-1;
  }
  x += speed;

}

