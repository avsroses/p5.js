class Disk extends Shape {

    constructor(x, y, d) {
        super(x, y, d);
    }

    draw() {
        fill(this.colour);
        strokeWeight(0);
        circle(this.x, this.y, this.d);
    }

}