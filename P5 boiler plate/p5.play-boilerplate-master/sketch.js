var fixed_rectangle;
var moving_rectangle

function setup() {
createCanvas(800,400);

fixed_rectangle = createSprite(600,300,50,100);
fixed_rectangle.shapeColor = "green";

moving_rectangle = createSprite(150,200,100,50);
moving_rectangle.shapeColor = "green"

moving_rectangle.debug = true;
fixed_rectangle.debug = true;

}

function draw() {

background(0,0,0);

moving_rectangle.x = World.mouseX;

moving_rectangle.y = World.mouseY;  

if(fixed_rectangle.x - moving_rectangle.x < fixed_rectangle.width/2 + moving_rectangle.width/2 &&
  moving_rectangle.x - fixed_rectangle.x < fixed_rectangle.width/2 + moving_rectangle.width/2
  &&fixed_rectangle.y - moving_rectangle.y < fixed_rectangle.height/2 + moving_rectangle.height/2 &&
  moving_rectangle.y - fixed_rectangle.y < fixed_rectangle.height/2 + moving_rectangle.height/2 ){

fixed_rectangle.shapeColor = "red";
moving_rectangle.shapeColor = "red";

}

else{

fixed_rectangle.shapeColor = "green";
moving_rectangle.shapeColor = "green";

}

drawSprites();

}