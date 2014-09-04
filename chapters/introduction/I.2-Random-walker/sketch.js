var walker;

function Walker(){
  this.x = width/2;
  this.y = height/2;
}

Walker.prototype.step = function() {
  var choice = Math.floor(random(4));

  if(choice == 0){
    this.x++;
  }else if(choice == 1){
    this.x--;
  }else if(choice == 2){
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
