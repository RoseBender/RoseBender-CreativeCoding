var theta = 0.0;
var ellipseWidthMultiplier = 10;
var ellipseHeightMultiplier = 20;
var rotationSpeed = 0.001;
function setup() {
  createCanvas(400,400);
  ellipseMode(CENTER);
}

function draw() {
  background(255);
  noFill();

  //stationary ellipse
  push();
  translate(width/2, height/2);
  for(var i =0; i < 25; i++){
    ellipse(0, 0,
    i*ellipseWidthMultiplier,
    i*(ellipseHeightMultiplier/2));
  }
  pop();

  //top left ellipse
  push();
  translate(width/4, height/4);
  rotate(theta);
  for(var i =0; i < 25; i++){
    ellipse(0, 0,
    i*ellipseWidthMultiplier,
    i*ellipseHeightMultiplier);
  }
  pop();
  theta += rotationSpeed
  
  //top right ellipse
  push();
  translate((width/4)*3, height/4);
  rotate(theta);
  for(var i =0; i < 25; i++){
    ellipse(0, 0,
    i*(ellipseWidthMultiplier*2),
    i*(ellipseHeightMultiplier/2));
  }
  pop();
  theta += rotationSpeed;
  
  //bottom left ellipse
  push();
  translate(width/2, (height/4*3));
  rotate(theta);
  for(var i =0; i < 25; i++){
    ellipse(0, 0,
    i*(ellipseWidthMultiplier2),
    i*(ellipseHeightMultiplier/2));
  }
  pop();
  theta += rotationSpeed;
}
    