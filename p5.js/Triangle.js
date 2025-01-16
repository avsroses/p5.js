class Triangle extends Shape{

    constructor(x, y, d) {
        super(x,y,d)       
    }

    draw() {
        fill(this.colour);
        strokeWeight(0);
        let r = this.d / 2;
        triangle(this.x - r, this.y + r, this.x + 75 - r, this.y - 150 + r, this.x + 150 - r, this.y + r);
    }

    update() {
        super.update();
    }
}