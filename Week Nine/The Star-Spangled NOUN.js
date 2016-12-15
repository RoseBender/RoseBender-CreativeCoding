/**
 * by Allison Parrish
 */
var lexicon;
function setup() {
  createCanvas(windowWidth, windowHeight);
  lexicon = new RiLexicon();
  background(50);
  fill(255);
  noStroke();
  textSize(18);
  textAlign(CENTER, CENTER);
  text("Click for fun", width/2, height/2);
}
function draw() {
}
function mouseClicked() {
  background(50);
  textAlign(CENTER, TOP);
  var output = "O! thus be it ever, when freemen shall " +
    lexicon.randomWord("vb") + "\nBetween their " + 
    lexicon.randomWord("jj") + " homes and the war's " +
    lexicon.randomWord("nn") + "\nBlest with victory and " +
    lexicon.randomWord("nn") + ", may the heav'n-rescued land\n" +
    lexicon.randomWord("vb") + " the power that hath made and " + 
    lexicon.randomWord("vbd") + " us a nation.\nThen conquer we must, for our cause it is " +
    lexicon.randomWord("jj") + "\nAnd this be our motto 'In God is our " + 
    lexicon.randomWord("nn") + "\nAnd the star-spangled " + 
    lexicon.randomWord("nn") + " in " + 
    lexicon.randomWord("nn") + " shall wave\n O'er the land of the " + 
    lexicon.randomWord("jj") + ", and the home of the " + 
    lexicon.randomWord("jj")
    ;
  text(output, 10, 10, width-20, height-20);
}