/**
** Kevin's comments:  Off to a good start here, but why not use variables for color?  Hard coded numbers make it extremely 
difficult to tweak and design.  
**/

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  noLoop();
}

function draw() {
  //top rect
  fill(116,71,114);
  rect(0,0,width,height/4);
  //second rect
  fill(73,71,116);
  rect(0,height/4,width,height/4);
  //third rect
  fill(114,116,71);
  rect(0,height/2,width,height/4);
  //fourth rect
  fill(71,116,73);
  rect(0,(height/4*3),width,height/4);
}

function mousePressed(){
  noStroke();
  //move these two calls into your setup function.
  colorMode(HSB);
  ellipseMode(CENTER);
  for(var i=0; i < width; i+=30){
    for(var j=0; j < height; j+=30){
      push();
      translate(i, j);
      ellipse(0,0,30,30);
      pop();
        fill(random(360),50,50);
  }
  }

}
