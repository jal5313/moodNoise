/*angry*/    
var resolution = 360; // how many points in the circle
var rad = 150;
var x = 1;
var y = 1;

var t = 0; // time passed
var tChange = .01; // how quick time flies

var nVal; // noise value
var nInt = 1; // noise intensity
var nAmp = 1; // noise amplitude

function setup() {    
  createCanvas(window.innerWidth, window.innerHeight);
  background(0);
  stroke(255, 40, 40, 30);
  strokeWeight(2);
  noFill();
  t = 0;
}
function draw() {    
  translate(width/2, height/2);
  nInt = 30; // .1 to 30
  nAmp = .3; // 0.0 to 1.0

  beginShape();
  for (var a=0; a<=TWO_PI; a+=TWO_PI/resolution) {

    nVal = map(noise( cos(a)*nInt+1, sin(a)*nInt+1, t ), 0.0, 1.0, nAmp, 1.0); 

    x = cos(a)*rad *nVal;
    y = sin(a)*rad *nVal;
    vertex(x, y);
    
    }
  endShape(CLOSE);

  t += tChange;
    
    
  background(0, 10);
}
