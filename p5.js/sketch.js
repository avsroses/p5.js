//global variables
let disk;
let disk2;
let disk3;
let disk4;

let mySquare;
let mySquare2;
let mySquare3;
let mySquare4;


function setup() {
  createCanvas(innerWidth, innerHeight);
  //each Disk needs three values for the contrsuctor function
  disk = new Disk(width/2, height/2, 150);
  disk2 = new Disk(width/2, height/2, 150);
  disk3 = new Disk(width/2, height/2, 150);
  disk4 = new Disk(width/2, height/2, 150);

  mySquare = new Square(width/2, height/2, 150);
  mySquare2 = new Square(width/2, height/2, 150);
  mySquare3 = new Square(width/2, height/2, 150);
  mySquare4 = new Square(width/2, height/2, 150);

}

function draw() {
  background(220, 15);
  //disk1
  disk.draw();
  disk.update();
  //disk2
  disk2.draw();
  disk2.update();
  //disk3
  disk3.draw();
  disk3.update();
  //disk4
  disk4.draw();
  disk4.update();

  //square1
  mySquare.draw();
  mySquare.update();
  //square2
  mySquare2.draw();
  mySquare2.update();
  //square3
  mySquare3.draw();
  mySquare3.update();
  //square4
  mySquare4.draw();
  mySquare4.update();
}
