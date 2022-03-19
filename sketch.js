var garden,rabbit;
var gardenImg,rabbitImg;
var redL,redImg,orange,orangeImg,apple,appleImg;
function preload(){
  gardenImg=loadImage("garden.png");
  rabbitImg=loadImage("rabbit.png");
  appleImg=loadImage("apple.png");
  orangeImg=loadImage("leaf.png");
  redImg=loadImage("redImage.png"); 
}

function setup(){
  
  createCanvas(400,400);
  
// mover o fundo
garden=createSprite(200,200);
garden.addImage(gardenImg);

//criar sprite do coelho
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

}


function draw() {
  background(0);
  edges=createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x=World.mouseX
  spawaleatorio()
  drawSprites();
}
function spawaleatorio(){
  var select_sprites=Math.round(random(1,3))
  if (frameCount%80==0){
if (select_sprites==1){
  createOrange()
}
if(select_sprites==2){
  createApples()
}
if(select_sprites==3){
  createRed()
}
  }
}
function createOrange(){
  orange=createSprite(random(50,350),40,10,10)
  orange.addImage(orangeImg)
  orange.scale=0.5
  orange.velocityY=3
  orange.lifetime=150
}
function createRed(){
  redL=createSprite(random(50,350),40,10,10)
  redL.addImage(redImg)
  redL.scale=0.5
  redL.velocityY=3
  redL.lifetime=150
} 
function createApples() {
  apple=createSprite(random(50,350),40,10,10)
  apple.addImage(appleImg)
  apple.scale=0.5
  apple.velocityY=3
  apple.lifetime=150
}
