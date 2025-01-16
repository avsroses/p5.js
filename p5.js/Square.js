class Square extends Shape{

    constructor(x, y, d) {
        super(x,y,d)
        //variables specific to square
        this.rotation = 10;
        angleMode(DEGREES);
        rectMode(CENTER);
    }

    draw() {
        fill(this.colour);
        strokeWeight(0);
        push();
        translate(this.x, this.y);
        rotate(this.rotation);
        square(0, 0, this.d);
        pop();
    }

    update() {
        super.update();
        //variable specific to square
        this.rotation+=5;
    }
}