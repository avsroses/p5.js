let disk;

function setup() {
  createCanvas(innerWidth, innerHeight);
  disk = new Disk(width/2, height/2, 50, 5, 5)
}

function draw() {
  background(220);
  disk.draw();
  disk.update();
}
