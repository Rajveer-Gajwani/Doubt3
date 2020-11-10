
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;



function preload()
{
	
}

function setup() {
	createCanvas(1200, 550);
  

	engine = Engine.create();
	world = engine.world;


	//Create the Bodies Here.
treeE = new Tree(1000,250);
mango1 = new mango(800,200);
mango2 = new mango(850,100);
stone1 = new stone(200,200);
slingshot = new SlingShot(stone1.body,{x:200, y:300});
boy1 = new Boy(175,280);
  

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(360);

  Engine.update(engine);

  
  treeE.display();
  mango1.display();
  mango2.display();
 stone1.display();
 
  boy1.display();

 
}


function mouseDragged(){
  Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}


function keyPressed(){
  if(keyCode === 32){
    slingshot.attach(stone1.body);
  }
} 