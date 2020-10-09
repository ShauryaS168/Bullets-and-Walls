

var car, wall;
function setup() {
  var canvas = createCanvas(800,800);
  speed = random(55,200);
    weight = random(400,1500);
   thickness = random(22,83);
    car = createSprite(50,200,50,50);
    wall = createSprite(600,200,thickness,height/2);
    
    car.velocityX = speed;
  

  
   
}

function draw() {
  background(0);
  car.display();
  
  wall.display();
  if(hasCollided(car,wall)){
    car.velocityX = 0;
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(damage>20){
      wall.shapeColor = "red";
      if(damage<20){
        wall.shapeColor = "blue";
      }
    }
  
  }
  
 

  

  
 
 







  drawSprites();
}

function hasCollided(b,w){
  bulletRightEdge = 1*b.x+1*b.width
  wallLeftEdge = 1*w.x
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  else{
    return false}
}

































