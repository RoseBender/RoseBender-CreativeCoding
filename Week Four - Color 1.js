function setup() {
  createCanvas(600, 800);
  noStroke();
}

function draw() {
  //Background Shapes
  //draws top left background shape
  fill(255,179,25);
  noStroke();
  beginShape(QUADS);
  vertex(0,0);
  vertex(width/2,0);
  vertex((width/2)+50,height/3);
  vertex(0,(height/3)-50);
  endShape();
  
  //draws top right background shape
  fill(175, 0, 255);
  beginShape(QUADS);
  vertex(width/2,0);
  vertex(width,0);
  vertex(width, (height/3)+80);
  vertex((width/2)+50,height/3);
  endShape();
  
  //draws middle left background shape
  fill(9,178,97);
  beginShape(QUADS);
  vertex(0,(height/3)-50);
  vertex((width/2)+50,height/3);
  vertex((width/2)-40, (height/3)*2);
  vertex(0,((height/3)*2)+40)
  endShape();
  
  //draws middle right background shape
  fill(153,61,115);
  beginShape(QUADS);
  vertex((width/2)+50,height/3);
  vertex(width, (height/3)+80);
  vertex(width, ((height/3)*2)+60);
  vertex((width/2)-40, (height/3)*2);
  endShape();
  
  //draws bottom left background shape
  fill(175, 0, 255);
  beginShape(QUADS);
  vertex(0,((height/3)*2)+40);
  vertex((width/2)-40, (height/3)*2);
  vertex((width/2)+40, height);
  vertex(0,height);
  endShape();
  
  //draws bottom right background shape
  fill(9,178,97);
  beginShape(QUADS);
  vertex((width/2)-40, (height/3)*2);
  vertex(width, ((height/3)*2)+60);
  vertex(width, height);
  vertex((width/2)+40, height);
  endShape();
  
  //begin foreground shapes
  //draws top left triangle
  stroke(153,61,115);
  strokeWeight(5);
  noFill();
  strokeCap(ROUND);
  beginShape(TRIANGLES);
  vertex(80, 75);
  vertex(198, 200);
  vertex(74, 200);
  endShape();
  
  //draws top right ellipse
  noStroke();
  fill(9,178,97);
  ellipse((width/3)*2.5, (height/3)-40,135,70);
  
  //draws middle arc
  fill(175, 0, 255);
  arc(width/3, 400, 170, 180, 0, PI+QUARTER_PI, PIE);
  
  //draws middle right foreground shape
  noFill();
  stroke(255,179,25);
  strokeWeight(15);
  strokeCap(ROUND);
  beginShape(QUADS);
  vertex((width/2)+70,(height/3)+70);
  vertex(width-40, (height/3)+90);
  vertex(width-60, ((height/3)*2)+20);
  vertex(width/2, (height/3)*2);
  endShape();
  
  //draws bottom lines
  stroke(255,179,25);
  strokeWeight(20);
  strokeCap(SQUARE);
  line(width/4, (height/4)*3, (width/4)*3, (height/4)*3+60);
}
