class Disk {
    x;
    y;
    d;
    vx;
    vy;
    constructor(x,y,d,vx,vy){
        this.x = x;
        this.y = y;
        this.d = d;
        this.vx = vx;
        this.vy = vy;
    }
    draw(){
        circle(this.x, this.y, this.d);
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