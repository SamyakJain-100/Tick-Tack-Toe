
var hr ;
var mn ;
var sec ;
var clock_image ;
function preload (){
  clock_image = loadImage ("images (2).jpg")
}
function setup() {
  createCanvas(800,400);
 
 angleMode(DEGREES);
}

function draw() {
  background(0,0,0); 
  
  translate(400,200); 
  imageMode (CENTER)
  image(clock_image,20,10,400,280)
  rotate(-90);
  hr = hour();
 mn = minute();
 sc = second();
 
  
  scAngle = map (sc , 0 , 60 ,  0 ,360 );
  mnAngle = map (mn , 0 , 60 ,  0 ,360 );
  hrAngle = map (hr , 0 , 12,  0 ,360 );
  push();
  
  rotate(scAngle);
  stroke(255,0,0)
  strokeWeight(7);
  line(0 , 0 ,100 ,0)
  pop();
 
  push();
  
  rotate(mnAngle);
  stroke(0,255,0)
  strokeWeight(7);
  line(0 , 0 ,70 ,0)
  pop();
 
  push();
  
  rotate(hrAngle);
  stroke(0,0,255)
  strokeWeight(7);
  line(0 , 0 ,40 ,0)
  pop();
  
  noFill();
  stroke(255,0,0);
  strokeWeight(7);
  arc(0,0,300,300,0,scAngle);
  
  noFill();
  stroke(0,255,0);
  strokeWeight(7);
  arc(0,0,280,280,0,mnAngle);
  
  noFill();
  stroke(0,0,255);
  strokeWeight(7);
  arc(0,0,260,260,0,hrAngle);
 
  
  drawSprites();


}
