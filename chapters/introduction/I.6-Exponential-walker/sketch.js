var walker;

function Walker(){
  this.x = width/2;
  this.y = height/2;
}

Walker.prototype.step = function() {
  var r = random(1);
  var step = stepSize();
  var stepX = random(-step, step)
  var stepY = random(-step, step)

  this.x += stepX;
  this.y += stepY;
};

Walker.prototype.display = function() {
  stroke(0);
  point(this.x, this.y);
}

function stepSize(){
 while(true){
  var r1 = random(1);
  var probability = sq(r1);

  var r2 = random(1);

  if(r2 < probability){
    return r1 * 2;
  }
 }
}

function setup() {
  // put setup code here
  createCanvas(640, 360);

  walker = new Walker();
  background(255);
}

function draw() {
  // put drawing code here
  walker.step();
  walker.display();
}
