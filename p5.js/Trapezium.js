class Trapezium extends Shape {

    constructor(x, y, d) {
        super(x, y, d);
    }

    draw() {
        fill(this.colour);
        strokeWeight(0);
        //radius
        let r = this.d / 2;

        beginShape(TRIANGLE_STRIP);
        vertex(this.x - r*1.4, this.y + r);
        vertex(this.x + r/-1.2, this.y - r);
        vertex(this.x + r/-3, this.y + r);
        vertex(this.x + r/2, this.y - r);
        vertex(this.x + r/1.5, this.y + r);
        vertex(this.x + r/1.2, this.y - r);
        vertex(this.x + r*1.4 , this.y + r);
        endShape();

    }

}