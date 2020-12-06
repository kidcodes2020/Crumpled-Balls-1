
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var trashBin, waste, ground1;
var world;

function setup() {
	createCanvas(1600, 700);
	

	engine = Engine.create();
	world = engine.world;
	trashBin= new basket(1200,650);
	ground1= new ground(width/2,670,width,20);
	waste= new paper(200,450,40);
	//Create the Bodies Here.

	/*var render= Render.create({
		element:document.body,
		engine:engine,
		options:{
			width:1200,
			height:700,
			wireframes:false
		}
	});*/

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  trashBin.display();
  waste.display();
  ground1.display();

  keyPressed();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(waste.body,waste.body.position,{x:85,y:-85});
	}
}



