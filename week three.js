/**
** Kevin's comments: I like the start of this idea.  I'd like to see you push yourself a little further in terms of the design,
maybe try different colors or dynamic positioning of the ellipses.  Also, the code as-is will not run because you have an undefined
variable error.  See my inline comments for more details...
**/
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
  //since you repeat a for loop like this 4 times, it's a perfect
  //opportunity to use a function so that you don't have to write out the for loop each time.
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
    // it looks like you have a typo with ellipseWidthMultiplier2.  Perhaps you left off a / operator?
    i*(ellipseWidthMultiplier2),
    i*(ellipseHeightMultiplier/2));
  }
  pop();
  theta += rotationSpeed;
}
    
