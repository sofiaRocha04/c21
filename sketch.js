
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine , world , ball , chao , direita , esquerda , raio = 40 
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var options = {
		isStatic : false , 
		restitution:0.3 , 
		friction:0, 
		density: 1.2 


	}
	ball=Bodies.circle (260,100,raio/2 , options)
	World.add(world,ball)
	chao = new Chao (width/2,670,width,20)
	esquerda = new Chao (1100,600,20,120)
	direita =  new Chao (1350,600,20,120)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse (ball.position.x,ball.position.y,raio,raio)
  chao.display ()
  esquerda.display () 
  direita.display () 
  drawSprites();
 
}

function keyPressed () {
	if(keyCode===UP_ARROW) {
		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85})
	}
}

