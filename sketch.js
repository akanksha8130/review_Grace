const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function preload(){


}
function setup() {
  createCanvas(900,400);
  engine=Engine.create()
world=engine.world
ball=Bodies.circle(20,200,30)
World.add(world,ball)


box=Bodies.rectangle(300,200,50,50)
World.add(world,box)

ground=Bodies.rectangle(450,380,900,20,{isStatic:true})
World.add(world,ground)

ball2=new Ball(200,100,10)
ball3=new Ball(400,10,30)
}
function draw(){
  Engine.update(engine)
  background("cyan")
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,30,30)

  rectMode(CENTER)
  rect(box.position.x,box.position.y,50,50)

  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,900,20)

  ball2.display()
  ball3.display()
}