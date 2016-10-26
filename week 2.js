function setup() {
  createCanvas(300, 650);
}

function draw() {
  background(190, 184, 168);

  //**start top left shapes

  //black line
  strokeWeight(2);
  line(20, 10, 125, 40);

  //top red left quad
  strokeWeight(0);
  fill(187, 34, 18);
  quad(35, 2, 80, 15, 78, 18, 32, 4);

  //top red right quad
  strokeWeight(0);
  fill(187, 34, 18);
  quad(85, 15, 130, 28, 128, 35, 82, 21);

  //bottom red left quad
  strokeWeight(0);
  fill(187, 34, 18);
  quad(40, 18, 90, 33, 86, 45, 36, 28);

  //bottom red right quad
  strokeWeight(0);
  fill(187, 34, 18);
  quad(60, 40, 90, 49, 88, 57, 58, 47);

  //**end top left shapes

  //**start right upper blocks

  //yellow line
  strokeWeight(8);
  strokeCap(SQUARE);
  stroke(196, 148, 4);
  line(230, 49, 140, 230);
  
  //red line
  strokeWeight(10);
  strokeCap(SQUARE);
  stroke(187, 34, 18);
  line(125, 100, 200, 190);
  
  //black squares
  noStroke();
  fill(0);
  quad(205,60, 213,63, 211,70, 203,67);
  quad(200,73, 208,76, 206,83, 198,80);
  rect(225,65,30,30);
  
  //black lines
  quad(215,97, 222,103, 208,143, 198,138);
  quad(222,123, 229,127, 215,160, 205,158);
  quad(255,100, 262,102, 257,130, 250,127);
  quad(270,104, 276,106, 271,125, 265,122);
  quad(275,127, 280,132, 278,150, 270,150);
  
  //red square
  fill(187, 34, 18);
  rect(150,220,40,40);
  
  //blue rectangle
  fill(3, 47, 82);
  quad(220,240, 300,304, 267,340, 190,275);
  
  //**end top figures
  
  //**begin middle figures
  //black rectangle
  fill(0);
  quad(120,250, 290,400, 260,440, 88,285);
  
  //burgandy rectanlge
  fill(114,46,27);
  quad(35,237, 170,360, 135,400, 0,275);
  
  //red rectanlges & lines
  fill(193,35,31);
  quad(275,425, 300,450, 250,510, 220,490);
  quad(275,485, 285,495, 275,507, 260,500);
  stroke(193,35,3);
  strokeWeight(3);
  line(283,505,275,515);
  line(290,515,277,517);
  strokeWeight(5);
  line(50,275,50,340);
  strokeWeight(10);
  line(70,305,70,440);
  line(175,425,220,465)
  strokeWeight(15);
  line(167,405,140,435)
  
  //yellow line
  strokeWeight(20);
  stroke(196, 148, 4);
  line(170,390,260,465)
  
  //blacklines
  strokeWeight(25);
  stroke(0);
  line(52,400,52,650);
  strokeWeight(7);
  line(90,510,80,650);
  strokeWeight(2);
  line(10,500,162,475);
  line(90,498,122,490);
  line(100,508,132,500); 
  line(124,498,110,495); 
}