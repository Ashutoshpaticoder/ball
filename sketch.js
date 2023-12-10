
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var left;
var right;
var ball;
var radius = 40;




function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER)


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground =new Ground(width/2,620,width,20);
    right = new Ground(1300,550,20,120);
    left = new Ground(1100,550,20,120);

	var ball_options = {
		isStatic:false,
		density:1.2,
		restitution: 0.95,
		friction:0.3
	}

	

	ball = Bodies.circle(200,585,radius/2,ball_options);
  World.add(world,ball);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,radius,radius);

  ground.show()
  right.show()
  left.show()

  
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:100,y:-70})
	}
}





