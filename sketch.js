

//this is me!
var moving_sprite, fixed_sprite,box1,box2,car1,car2;

function setup() {
  createCanvas(800,400);
 fixed_sprite = createSprite(400, 200, 50, 50);
 moving_sprite = createSprite(500,300,30,70);
 box1 = createSprite(500,300,10,30);
 box2 = createSprite(400,100,80,50);
 car1 = createSprite(200,300,40,40);
 car2 = createSprite(300,300,50,50);
 car1.velocityX = 2;
 car2.velocityX = -2;
}

function draw() {
  background(255,255,255);  

  moving_sprite.x = mouseX;
  moving_sprite.y = mouseY;
  //if the difference bet the x positions is <= sum of half widths - 40
  
  if(collision(moving_sprite,fixed_sprite)){
    moving_sprite.shapeColor = "Black";
  }
  else{
    moving_sprite.shapeColor = "Yellow";
  }
  
  if(collision(moving_sprite,box1)){
    box1.width = box1.width + 1;
  }

  bounce(car1,car2);
  
  drawSprites();
}

// boolean value - true/false - yes/no
//Math.round(4.8) ---> return 5

//parameters, arguments
