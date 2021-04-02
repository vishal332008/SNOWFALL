class Snow{
    constructor(x, y) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, 20, 20, options);
        this.width = 20;
        this.height = 20;
        this.x = x;
        this.y = y;
        this.image = loadImage("snow4.webp");
        World.add(world, this.body);
      }
      display(){
        if(this.body.position.y>1010){
            Matter.Body.setPosition(this.body,{x:this.x,y:this.y});
        }
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0,this.width,this.height);
        pop();
      }
}