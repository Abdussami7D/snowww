const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine;
var world;
var Snow = [];
var bg;
var boy,boyImg;

function preload(){

  bg = loadImage("snow2.jpg");
  boyImg = loadImage("boy.png");

}

function setup(){

    engine = Engine.create();
    world = engine.world;

    createCanvas(1000,800)

     boy = createSprite(500,710,20,20);
     boy.addImage("kid",boyImg)
     boy.scale = 0.15;

    for(var i=0;i<100;i++){
      Snow.push(new snow(random(0,800),random(0,800) ));
         }

   
    
}

function draw(){
  
  background(bg);
    Engine.update(engine);


   

    for(var i=0;i<100;i++){
        Snow[i].display();
        Snow[i].update();
    }
   

    drawSprites();
}   

function keyPressed(){

  if(keyCode === RIGHT_ARROW){
    boy.velocityX =  5
  }

  if(keyCode === LEFT_ARROW){
    boy.velocityX = -5
  }

}