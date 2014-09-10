var walker;

function Walker(){
  this.x = width/2;
  this.y = height/2;
}

Walker.prototype.step = function() {
  var r = random(1);

  if(r < .4){
    var xDiff = Math.abs(this.x - mouseX);
    var yDiff = Math.abs(this.y - mouseY);
    if(xDiff > yDiff){
      if(this.x < mouseX){
        this.x++;
      }else{
        this.x--;
      }
    }else{
      if(this.y < mouseY){
        this.y++;
      }else{
        this.y--;
      }
    }
  }else if(r < .55){
    this.x--;
  }else if(r < .7){
    this.x++;
  }else if(r < .85){
    this.y++;
  }else{
    this.y--;
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
