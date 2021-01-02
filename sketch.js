var bullet, wall;
var thickness,speed, weight;

function setup() {
  createCanvas(1600,400);
  speed = random (223,321);
  weight = random (30,52);


  bullet = createSprite(200, 200, 50, 50);
  wall = createSprite(1500,200,60, 100);

  bullet.velocityX = 5;

  thickness=random(22,83)

}

function draw() {
  background("black");  
  
  if(hascollided(bullet,wall))
  {
  bullet.velocityX=0;
  var damage=0.5 * weight * speed*speed/(thickness *thickness *thickness);

   if(damage>10)
   {
    wall.shapeColor=color(255,0,0);
   }

   if(damage>10)
   {
    wall.shapeColor=color(0,255,0);
   }
  }
 
  drawSprites();

  hascollided(bullet,wall);
  }

  function hascollided(lbullet,lwall)
  {
  bulletRightEgde=lbullet.x + lbullet.width;
  wallLeftEgde=lwall.x;
  if(bulletRightEgde>=wallLeftEgde)
  {
    return true
  }
    return false;


  }