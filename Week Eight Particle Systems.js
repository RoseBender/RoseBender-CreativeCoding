function Particle(posX)  {
  this.speed = 5;
  this.color = "gray";
  this.pos = posX;
  this.lifespan = 255;
};

Particle.prototype = {
  constructor : Particle,
  bounce : function(){
    this.pos += this.speed;
    this.lifespan--;
  }
};

var particle = [];

function setup() {
  createCanvas(500,500);
  textAlign(CENTER);
}

function draw() {
  frameRate(15);
 background(255);
 translate(random(width),0);
 
 for(var i = 0; i < particle.length; i++){
   if(particle[i].lifespan <= 0){
     particle.splice(i, 1);
   } else {
     fill(particle[i].color);
  // fill(
    // red(particle[i].color),
     //green(particle[i].color),
     //blue(particle[i].color),
     //particle[i].lifespan
     //);
   line(random(width),particle[i].pos, random(width), particle[i].pos+15);
   particle[i].bounce();
   }
 }

}
function mouseMoved(){
  particle.push(new Particle(mouseY));
}