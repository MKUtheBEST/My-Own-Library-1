function collision(sprite1, sprite2){
    if(sprite1.x - sprite2.x <= sprite1.width/2 + sprite2.width/2 
      && sprite2.x - sprite1.x <= sprite1.width/2 + sprite2.width/2
      && sprite1.y - sprite2.y <= sprite1.height/2 + sprite2.height/2 
      && sprite2.y - sprite1.y <= sprite1.height/2 + sprite2.height/2){
      //fixed_sprite.shapeColor = "Green";
      //moving_sprite.shapeColor = "Orange";
      return true;
    }
    else{
      return false;
    }
  }
  //camelCase
  function bounce(sprite1,sprite2){
    // when touching from x direction
    if(sprite1.x - sprite2.x <= sprite1.width/2 + sprite2.width/2 
      && sprite2.x - sprite1.x <= sprite1.width/2 + sprite2.width/2){
      sprite1.velocityX = -sprite1.velocityX;
      sprite2.velocityX = -sprite2.velocityX;    
    }
    if(sprite1.y - sprite2.y <= sprite1.height/2 + sprite2.height/2 
      && sprite2.y - sprite1.y <= sprite1.height/2 + sprite2.height/2){
        sprite1.velocityY = -sprite1.velocityY;
        sprite2.velocityY = -sprite2.velocityY;
      }
      
  }