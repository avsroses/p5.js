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
  //radius
  let r = d/2;
  //won't go off x
  if(x < 0 + r || x > width - r) {
    vx = -vx;
  }
  //won't go off y
  if(y < 0 + r || y > height - r) {
    vy = -vy;
  }
  //draw
  circle(x, y, d);
}
