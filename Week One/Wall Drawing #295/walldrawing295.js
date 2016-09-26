/**
* Kevin's comments:  Great work!  A couple of things to keep in mind-
* stroke and fill commands should always go before you call the draw command themself.  See comment inline
* for more detail.
* Also, for future assignments, think about how you could replace hard coded numbers with dynamic variables.
*/
function setup() {
  createCanvas(900,500);
  background(0);
}

function draw() {
  //triangle
  //stroke and fill should go before triangle line
  triangle(111,20,20,220,222,220);
  stroke(255);
  fill(0);
  
  //square
  //stroke and fill should go before rect line
  rect(300,20,220,200);
  stroke(255);
  fill(0);
  
  //cirlce
  //stroke and fill should go before ellipse line
  ellipse(720,120,220,220);
  stroke(255);
  fill(0);
  
  //rhombus
  //stroke and fill should go before quad line
  quad(111,275,275,275,200,480,35,480);
  stroke(255);
  fill(0);
  
  //rectangle
  //stroke and fill should go before rect line
  rect(300,275,250,200);
  stroke(255);
  fill(0);
  
  //oval
  //stroke and fill should go before ellipse line
  ellipse(720,378,220,110);
  stroke(255);
  fill(0);
}
