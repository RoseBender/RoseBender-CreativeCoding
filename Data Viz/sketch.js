var table;
var toothBrushingData = [];

function preload() {
  //my table is comma separated value "csv"
  //and has a header specifying the columns labels
  table = loadTable("data/brushing.csv", "csv", "header");
  tooth = loadImage("/images.png");
}
function setup() {
  createCanvas(600,200);
  textSize(14);
}

function draw(){
  background(255);
  translate(20,20);
  //nested for loop
  //the inner loop is by rowCount so that we move
  //downward, then from left to right
  for(var c =0; c < table.getColumnCount(); c++){
    for(var r =0; r < table.getRowCount(); r++){
      push();  
      var cellData = table.getString(r, c);
      if(cellData != undefined){
        if(c < 1){
          translate(0, r * 20);
           text(cellData , 0,0 );
        }
        else {
          translate( (c * 50) + 150, r * 50);
           image(tooth, 0,0,50,50);
        }
       
      }
      pop();
    }
  }
}