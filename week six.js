var from, to;

function setup(){
  createCanvas(400, 400);
}
function draw() {
  
  from = color(200,80,105);
  to = color(80,200,175);
  var lerpAmt = 0;
  
  colorMode(RGB); 
  lerpAmt++;
  lerpAmt%=100;
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