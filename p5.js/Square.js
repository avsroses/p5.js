class Square {
    x;
    y;
    d;
    vx;
    vy;
    colour;
    constructor(x, y, d) {
        this.x = x;
        this.y = y;
        this.d = d;
        this.vx = random(-10, 10);
        this.vy = random(-10, 10);
        this.colour = color(random(255), random(255), random(255));
    }

    draw() {
        fill(this.colour);
        strokeWeight(0);
        square(this.x, this.y, this.d);
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
    }
}