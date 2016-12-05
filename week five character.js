/**
** Kevin's comments:  Nice!  Good to see this parametric!  
It looks like the eyeSize gets a little funky if you double the size to 80.  See if you can do this without curves, but instead using arc.

**/
var eyeCenterX = 275;
var eyeCenterY = 275;
var eyeSize = 40;

function setup() {
  createCanvas(600,600);
  ellipseMode(CENTER);
  colorMode(RGB);
}  

function catEye(){
  var irisColor = random(255);
  strokeWeight(1);
  //why noLoop here?
  noLoop();
  stroke(0);
  fill(255);
  stroke(0);
  fill(0,irisColor,0);
  //top
  curve( 
  eyeCenterX+75, eyeCenterY+eyeSize*3,
  eyeCenterX+50, eyeCenterY,
  eyeCenterX+110+(eyeSize), eyeCenterY,
  eyeCenterX+120+(eyeSize/10), eyeCenterY+eyeSize*5);
  //bottom curve
  curve( 
  eyeCenterX+75, eyeCenterY-eyeSize*3,
  eyeCenterX+50, eyeCenterY,
  eyeCenterX+110+(eyeSize), eyeCenterY,
  eyeCenterX+120+(eyeSize/10), eyeCenterY-eyeSize*3);
  //pupil
  fill(0);
  ellipse(eyeCenterX+105, eyeCenterY-2, eyeSize/2,eyeSize-4);
}

function cat(){
  //draws head
  fill(32,32,32);
  ellipse(width/2, height/2, 300,300);
  
  //draws outer ears
  fill(32,32,32);
  noStroke();
  triangle(130,100, 220, 190, 155, 285);
  triangle(width-130,100, width-220, 190, width-155, 285);
  //draws inside of ears
  fill(183,155,155);
  triangle(130,105, 180, 220, 155, 265);
  triangle(width-130,105, width-180, 220, width-155, 265); 
  
  
  //draws nose
  fill(244,194,207);
  triangle(280, 310, 320, 310, 300,340);
  
  //draws mouth
  fill(255, 255, 247);
  ellipse(270, 375, 80, 70);
  ellipse(330, 375, 80, 70);
  stroke(0);
  strokeWeight(5);
  
  //draws right eye
  catEye();
  
  //draws left eye
  translate(-150, 0);
  catEye();
}

function draw(){
  cat();
  
}
