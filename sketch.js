const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ground, stand;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11;
var box12, box13, box14, box15, box16;
var polygon, polygon_image;


function preload() {
  polygon_image = loadImage('polygon.png');
}


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, height, 800, 20)
  stand = new Ground(300, 200, 20, 20);

  //level 1
  box1 = new Box(120, 275, 30, 40);
  box2 = new Box(150, 275, 30, 40);
  box3 = new Box(180, 275, 30, 40);
  box4 = new Box(210, 275, 30, 40);
  box5 = new Box(240, 275, 30, 40);
  box6 = new Box(270, 275, 30, 40);
  box7 = new Box(300, 275, 30, 40);

  //level 2
  box8 = new Box(330, 235, 30, 40);
  box9 = new Box(360, 235, 30, 40);
  box10 = new Box(390, 235, 30, 40);
  box11 = new Box(420, 235, 30, 40);
  box12 = new Box(450, 235, 30, 40);

  //level 3
  box13 = new Box(360, 195, 30, 40);
  box14 = new Box(390, 195, 30, 40);
  box15 = new Box(420, 195, 30, 40);

//top
  box16 = new Box(390, 155, 30, 40);

  polygon = Bodies.circle(50, 200, 20);
  World.add(world, polygon);
  

  slingshot = new SlingShot(this.polygon,{x:100, y:200});
}

function draw() {
  background("darkbrown"); 
  Engine.update(engine);
  
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();

  ground.display();
  stand.display();

  polygon.display();

  slingshot.display();
  imageMode(CENTER)
  image(polygon_image, polygon.position.x, polygon.position.y, 40, 40);

  
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32){
      slingshot.attach(this.polygon);

  }
}