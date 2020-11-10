class stone{
    constructor(x,y){
      var options = {
      isStatic : false,
      restitution : 1,
      friction : 0,
      density : 0.5
        }
        this.body = Bodies.circle(x,y,50,options);
        this.radius = 50;
        this.image =loadImage("Plucking mangoes/stone.png");
        World.add(world,this.body);
    }

    display(){
        var ang = this.body.angle;
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(ang);
        imageMode(CENTER);
        image(this.image,0,0,50,50);
        pop();
    }
}