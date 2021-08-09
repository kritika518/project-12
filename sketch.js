var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleImg;
var leaf,leafImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("leaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
rabbit.mouseX=5;
}
function createApples(){
  apple=createSprite(random(50,350),40,10,10);
  apple.addImage(appleImg);
  apple.velocity.y=0.5;
  apple.lifetime=300;
}
function createLeaves(){
  leaf=createSprite(random(50,350),40,10,10);
  leaf.addImage(leafImg);
  leaf.velocity.y=0.5;
  leaf.lifetime=300;
}

if(frameCount % 80 == 0){
  if(select_sprites == 1){
    createApple=Math.round(random(1,2));
  }
  else{
    createLeaves=Math.round(random(1,2));
  }
}

function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
}