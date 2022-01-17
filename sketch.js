var square 
function setup() {
  createCanvas(400,400);
  square = createSprite(200, 200, 50, 50)
}

function draw() 
{
  background(30);
  if(keyDown(LEFT_ARROW)){
    square.x = square.x -3
  }
  if(keyDown(RIGHT_ARROW)){
    square.x = square.x +3
  }
  if(keyDown(UP_ARROW)){
    square.y = square.y -3
  }
  if(keyDown(DOWN_ARROW)){
    square.y = square.y +3
  }
  
  drawSprites()
}




