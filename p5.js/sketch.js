//global variables
let x;
let y;
let d = 50;
let vx = 5;
let vy = 5;

function setup() {
  createCanvas(innerWidth, innerHeight);
  x = width/2;
  y = height/2;
}

function draw() {
  background(220);
  //logic
  x += vx;
  y += vy;
  let r = d/2;
  if(x < 0 + r || x > width - r) {
    
  }
  //draw
  circle(x, y, d);
}
