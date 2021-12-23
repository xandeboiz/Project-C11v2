var mar;
var sea;
var navio;
var ship;

function preload(){
ship = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
sea = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  mar = createSprite(-430,200);
  mar.addImage(sea);
  mar.scale = 0.4;
  mar.velocityX = 3;
  navio = createSprite(200,250);
  navio.addAnimation("naviopng",ship);
  navio.scale = 0.4;
}

function draw() {
  background("blue");
  mar.velocityX = 3;
    if(mar.x > 800){
      mar.x = -430;
      mar.velocityX = 3;
    }
    drawSprites();
}
