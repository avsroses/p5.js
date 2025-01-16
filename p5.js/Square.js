class Square extends Shape{

    constructor(x, y, d) {
        this.x = x;
        this.y = y;
        this.d = d;
        this.vx = random(-10, 10);
        this.vy = random(-10, 10);
        this.colour = color(random(255), random(255), random(255));
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
        this.rotation+=5;
    }
}