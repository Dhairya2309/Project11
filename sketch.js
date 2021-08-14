var jaxon, jaxon_running, jaxon_collided;
var path, invisiblePath, invisiblePath2, pathImage;
function preload(){
  jaxon_running = loadAnimation("Runner-1.png","Runner-2.png");
  pathImage = loadImage("path.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,200);
  path.addImage(pathImage);
  path.velocityY = 4;
  path.scale = 1.2;
  jaxon = createSprite(200,350,20,50);
  jaxon.addAnimation("running", jaxon_running);
  jaxon.scale = 0.06;

  
}

function draw() {
  background(255);
  jaxon.x = World.mouseX;
  if (path.y > 400){
    path.y = height/2;
  }
  invisiblePath = createSprite(50,200,10,400);
  invisiblePath.visible = false;

  invisiblePath2 = createSprite(350,200,5,400);
  invisiblePath2.visible = false;
  
  jaxon.collide(invisiblePath);
  jaxon.collide(invisiblePath2);
  
  drawSprites();
}
