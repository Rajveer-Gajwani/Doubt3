class Boy extends mango {
    constructor(x,y,width,height){
        super(x,y,width,height);
        this.image = loadImage("Plucking mangoes/boy.png");
    }
    display(){
        super.display();
        image(this.image,this.body.position.x,this.body.position.y,300,300);
    }
}