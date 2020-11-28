
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//box1=new Dustbin(500,600,20,100);
	//box2=new Dustbin(700,600,20,100);
	//box3=new Dustbin(600,630,200,20);
	
	paper=new Paper(100,580,50);

	ground=new Ground(400,650,800,20);
	box4=new Dustbin(600,540,200,200);


	Engine.run(engine);
  
}


function draw() {
  
  background(256);
  
  drawSprites();
  //box3.display();
  //box1.display();
  //box2.display();
  paper.display();
  ground.display();
  box4.display();
  
  
  
  
  
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:200,y:-200})
	}
}



