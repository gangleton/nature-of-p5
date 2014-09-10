var walker;

function Walker(){
  this.x = width/2;
  this.y = height/2;
}

Walker.prototype.step = function() {
  var r = random(1);
  var step = randomGaussian(1, 1);

  if(r < .25){
    this.x = this.x + step;
  }else if(r < .5){
    this.x = this.x - step;
  }else if(r < .75){
    this.y = this.y + step;
  }else{
    this.y = this.y - step;
  }
};

Walker.prototype.display = function() {
  stroke(0);
  point(this.x, this.y);
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
