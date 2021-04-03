class Paper {
    constructor(x,y){
        this.size=70;
        this.body=Bodies.circle(x,y,25,{restitution:0.3, friction:0.5, density:1.2});
        World.add(world, this.body);
    }
    display() {
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        image(paperPNG,0,0,this.size,this.size)
        pop();
    }
}