
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var hammer;
var plane;
var iron;
var circle;
var sand1, sand2, sand3, sand4, sand5, sand6, sand7, sand8, sand9, sand10;

function preload()
{
	
}

function setup()
 {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	
	hammer = new Hammer(10,100);
	iron = new Iron(400,300,90,100);
	plane = new Plane (600,height,1200,20);
	rubber = new Rubber (950,350,70);
	stone = new Stone(700,300,100,100);

	sand1 = new Sand(100,300,10);
    sand2 = new Sand(200,300,10);
    sand3 = new Sand(300,300,10);
    sand4 = new Sand(400,300,10);
    sand5 = new Sand(500,300,10);
    sand6 = new Sand(600,300,10);
    sand7 = new Sand(700,300,10);
    sand8 = new Sand(800,300,10);
    sand9 = new Sand(900,300,10);
    sand10 = new Sand(1000,300,10);



	Engine.run(engine);
  
}


function draw() 
{
  rectMode(CENTER);
  background("azure");
  
hammer.display();
iron.display();
plane.display();
rubber.display();
stone.display();

sand1.display(); 
sand2.display();
sand3.display();
sand4.display(); 
sand5.display();
sand6.display();
sand7.display();
sand8.display(); 
sand9.display(); 
sand10.display();

  drawSprites();
 
}



