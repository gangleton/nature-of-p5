function Splatter(){
  var mean = 350;
  var sd = 50;

  var x = randomGaussian(mean, sd);
  var y = randomGaussian(mean, sd);

  randomColor();
  ellipse(x, y, 3, 3);
}

function randomColor(){
  var red = randomGaussian(127, 40);
  fill(red, 120, 120);
}

function setup() {
  // put setup code here

  createCanvas(700, 500);
  background(255);
  noStroke();
}

function draw() {
  // put drawing code here
  new Splatter();
}
