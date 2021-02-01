
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, sling;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12;
var world,boy;

function preload(){
	boy=loadImage("boy.png");
  }

function setup() {
createCanvas(1370, 610);
engine = Engine.create();
world = engine.world;

stoneObj=new Stone(235,420,30); 


mango1=new Mango(1170,130,30);
mango2=new Mango(1100,100,30);
mango3=new Mango(1140,150,40);
mango4=new Mango(1000,70,30);
mango5=new Mango(1100,70,30);
mango6=new Mango(1000,230,30);
mango7=new Mango(900,230,40);
mango8=new Mango(900,160,40);
mango9=new Mango(1010,140,30);
mango10=new Mango(1200,200,40);
mango11=new Mango(1120,50,40);


treeObj=new Tree(1050,580);
groundObject=new Ground(width/2,600,width,20);
sling=new Slingshot(stoneObj.body,{x:240,y:460})  
Engine.run(engine);
 
}

function draw() {

  background("cyan");
  textSize(30);
  fill('purple');
  textFont("Broadway");
  text("Press Space to get another stone to Play!!",50 ,50);
  image(boy ,200,380,200,300);
  
  

  treeObj.display();
  stoneObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango6.display();
 mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  
  stoneObj.display();

  groundObject.display();
  sling.display();
  detectollision(stoneObj,mango1);
  detectollision(stoneObj,mango2);
  detectollision(stoneObj,mango3);
  detectollision(stoneObj,mango4);
  detectollision(stoneObj,mango5);
  detectollision(stoneObj,mango6);
  detectollision(stoneObj,mango7);
  detectollision(stoneObj,mango8);
  detectollision(stoneObj,mango9);
  detectollision(stoneObj,mango10);
  detectollision(stoneObj,mango11);
  
}

function mouseDragged(){
	Matter.Body.setPosition(stoneObj.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased(){
	sling.fly();
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stoneObj.body, {x:235, y:420}) 
	  sling.attach(stoneObj.body);
	}
}

  function detectollision(lstone,lmango){
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position

  
  var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
  if (distance<=lmango.r+lstone.r)
 {
   Matter.Body.setStatic(lmango.body , false);
 } 
}
