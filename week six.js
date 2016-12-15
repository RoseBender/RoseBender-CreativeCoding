/**
* Kevin's comments inline...
**/

var from, to;

function setup(){
  createCanvas(400, 400);
}
function draw() {
  
  from = color(200,80,105);
  to = color(80,200,175);
  //watch this variable.  you seem to be resetting the lerpAmt to 0 every loop and then incrementing it to 1
  //on line 18
  var lerpAmt = 0;
  
  colorMode(RGB); 
  lerpAmt++;
  lerpAmt%=100;
  //lerpAmt never really moves because you set it back to 0 on each draw call
  var strokeColor = lerpColor(from, to, lerpAmt);
  
  background(200,175,80);
  noStroke();
  translate(width/2,height/2);
  fill(0);
  rotate(radians(frameCount%360));
  for(var i =0; i < 36; i++){
    push();

    rotate(PI * i / 18);

    stroke(strokeColor);
    strokeWeight(3);
    noFill();
    rect(frameCount % (width),0,40,40);
    pop();
  }
}
