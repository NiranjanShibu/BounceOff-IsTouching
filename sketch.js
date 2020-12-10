var fixedRect;
var movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(100, 200, 100, 200);
  fixedRect.shapeColor = "green";
  movingRect = createSprite(600, 200, 200, 100);
  movingRect.shapeColor = "blue";
  fixedRect.velocityX = 4;
  movingRect.velocityX = -4;
}

function draw() {
  background(255,255,255);  

  //movingRect.x = mouseX;
  //movingRect.y = mouseY;

  if (movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2 && 
    fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2){

      movingRect.velocityX = movingRect.velocityX * (-1);
      fixedRect.velocityX = fixedRect.velocityX * (-1);

    }


    if (movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2 && 
    fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2){

      movingRect.velocityY = movingRect.velocityY * (-1);
      fixedRect.velocityY = fixedRect.velocityY * (-1);

  }
  

  drawSprites();
}