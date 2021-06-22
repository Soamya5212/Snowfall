var backgroundImage;
var snowI;

function preload() {
  backgroundImage = loadImage("snow3.jpg");
  snowI = loadImage("snow4.webp");
}

function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(backgroundImage);
  createSnow();
  drawSprites();
}
function createSnow(){
if (frameCount % 3 === 0) {
 
    var snow = createSprite(random(0,800),0);
    snow.addImage(snowI);
    snow.scale = 0.09
    snow.velocityY = random(2,5)
    snow.lifetime = 150
  }
}


