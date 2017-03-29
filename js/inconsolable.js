/*inconsolable*/
var t;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(0);
  stroke(21, 0, 255, 30);
  strokeWeight(2);
  noFill();
  t = 0;
}
function draw() {
  translate(width/2, height/2);
  beginShape();
  for (var i = 0; i < 200; i++) {
    var ang = map(i, 0, 200, 0, TWO_PI);
    var rad = 200 * noise(i * 0.05, t * 0.01);
    var x = rad * cos(ang);
    var y = rad * sin(ang);
    curveVertex(x, y);
  }
  endShape(CLOSE);

  t += .5;

  // clear
	background(0, 10);

}
