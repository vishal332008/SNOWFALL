const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var boy,boyImg;
var rain = [];

function preload() {
  ground = loadImage("snow1.jpg");

  boyImg = loadImage("boy0.png");

}

function setup() {
  createCanvas(1000,600);

  engine = Engine.create();
  world = engine.world;

  boy = createSprite(500, 450, 50, 90);
  boy.addImage("boy",boyImg);
  boy.scale = 0.7;

  for(var i = 0;i < 100;i=i+1){
    rain.push(new Snow(random(10,990),random(-300,50)));
 }
}

function draw() {
  background(ground);

  Engine.update(engine);
  
  boy.velocityX = 0;
  boy.velocityY = 0;

  if (keyDown("left")) {
    boy.velocityX = -6;
    boy.velocityY = 0;
  }
  if (keyDown("right")) {
    boy.velocityX = 6;
    boy.velocityY = 0;
  }

  drawSprites();

  for(var i=0;i<rain.length;i++){
    rain[i].display();
  }
}