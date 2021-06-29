const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var snow=[];
var maxSnow=30;
var snowfall;
var bg;
//var snowF1,snowF2,snowflake;
//var snowFCreatedFrame = 0;


function preload(){
    
  bg = loadImage("snow4.png");
  snowF1 = loadImage("snow4.webp");
  snowF2 = loadImage("snow4.webp");

}


function setup() {
  createCanvas(600, 450);

  engine = Engine.create();

	world = engine.world;
 
  if(frameCount%150 === 0){
    for(var i=0; i<maxSnow; i++){
        snow.push( new Snow(random(0,600), random(0,450) ,7));
      }
    }

Engine.run(engine);


}

function draw() {
  background(bg);  

  for(var i =0;i<maxSnow;i++){
   snow[i].display();
   snow[i].update();
    }

   


  drawSprites();
}