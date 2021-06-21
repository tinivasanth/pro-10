var sea,ship;
var seaImg,shipImg1;

function preload(){
seaImg = loadImage("sea.png")
shipImg1 = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
}

function setup(){
  createCanvas(400,400);
  

  sea = createSprite(400,200);
  sea.addImage(seaImg);
  
  sea.scale = 0.3;

  ship = createSprite(130,200,30,30)
  
  ship.addAnimation("shipping",shipImg1);
  ship.scale = 0.2
}

function draw() {
//include background color

  sea.velocityX = -3
  if(sea.x<0){
    sea.x = sea.width/8;
  }
  //include draw sprites

}