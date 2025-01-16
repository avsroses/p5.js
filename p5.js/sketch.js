//shapes array
let shapes = [];


function setup() {
  createCanvas(innerWidth, innerHeight);
  //create multiple disk and squares 
  for (let i = 0; i < 5; i++) {
    shapes.push(new Disk(width / 2, height / 2, 150));
    shapes.push(new Square(width / 2, height / 2, 150));
  }

}

function draw() {
  background(220, 15);

  //for each shape in array - update and draw
  for (let i = 0; i < shapes.length; i++) {
    shapes[i].update();
    shapes[i].draw();
  }

}
