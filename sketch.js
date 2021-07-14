var garden,rabbit,apple;
var gardenImg,rabbitImg,appleImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
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
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  spawnApple();

  drawSprites();
}

function spawnApple(){
  //spawn the cloud

  if(frameCount%150===0){
      apple = createSprite(100, 340, 20, 20);
      apple.scale =0.05;
      apple.addImage(appleImg);
      apple.y=Math.round(random(20, 380));
      apple.x=Math.round(random(20, 380));
      
      //adjust the depth
      apple.depth=rabbit.depth;
      rabbit.depth=rabbit.depth+1;
  }
}