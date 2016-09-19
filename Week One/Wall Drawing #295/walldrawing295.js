function setup() {
  createCanvas(900,500);
  background(0);
}

function draw() {
  //triangle
  triangle(111,20,20,220,222,220);
  stroke(255);
  fill(0);
  
  //square
  rect(300,20,220,200);
  stroke(255);
  fill(0);
  
  //cirlce
  ellipse(720,120,220,220);
  stroke(255);
  fill(0);
  
  //rhombus
  quad(111,275,275,275,200,480,35,480);
  stroke(255);
  fill(0);
  
  //rectangle
  rect(300,275,250,200);
  stroke(255);
  fill(0);
  
  //oval
  ellipse(720,378,220,110);
  stroke(255);
  fill(0);
}