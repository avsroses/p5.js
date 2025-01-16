//sketch-topdown using objects
let disk;

function setup() {
  createCanvas(innerWidth, innerHeight);
  //object - (variable name : value , )
  disk = {x:width/2, y:height/2, d:40, vx:5, vy:5}
}

function draw() {
  background(220);
  //logic
  disk.x += disk.vx;
  disk.y += disk.vy;
  //radius
  let r = disk.d/2;
  //won't go off x
  if(disk.x < 0 + r || disk.x > width - r) {
    disk.vx = -disk.vx;
  }
  //won't go off y
  if(disk.y < 0 + r || disk.y > height - r) {
    disk.vy = -disk.vy;
  }
  //draw
  circle(disk.x, disk.y, disk.d);
}
