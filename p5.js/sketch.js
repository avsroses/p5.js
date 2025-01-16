//global variables
let shapes = [];


function setup() {
  createCanvas(innerWidth, innerHeight);
  //each Disk needs three values for the contrsuctor function
  for (let i = 0; i < 5; i++) {
    shapes.push(new Disk(width / 2, height / 2, 150));
    shapes.push(new Square(width / 2, height / 2, 150));
  }

}

function draw() {
  background(220, 15);

  for (let i = 0; i < shapes.length; i++) {
    shapes[i].update();
    shapes[i].draw();
  }

}
