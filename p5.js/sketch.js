//sketch-topdown using objects
let disk;

function setup() {
  createCanvas(innerWidth, innerHeight);
  //object - (variable name : value , )
  disk = { x: width / 2, y: height / 2, d: 40, vx: 5, vy: 5 }
  disk.update = function () {
    //logic
    this.x += this.vx;
    this.y += this.vy;
    //radius
    let r = this.d / 2;
    //won't go off x
    if (this.x < 0 + r || this.x > width - r) {
      this.vx = -this.vx;
    }
    //won't go off y
    if (this.y < 0 + r || this.y > height - r) {
      this.vy = -this.vy;
    }
  }
}

function draw() {
  background(220);
  //call function in setup()
  disk.update();
  //draw
  circle(disk.x, disk.y, disk.d);
}
