/*calm*/
var t; 
var firstX;
var firstY;
var secondX;
var secondY;
var thirdX;
var thirdY;

function setup() {
	createCanvas(window.innerWidth, window.innerHeight);
	background(0);
	stroke(102, 255, 194, 30);
	noFill();
	t = 0;
}

function draw() {
	translate(width / 2, height / 2);
	beginShape();
	for (var i = 0; i < 750; i++) {
		var ang = map(i, 0, 360, 0, TWO_PI);
		var rad = 250 * noise(i * 0.01, t * 0.005);
		var x = rad * cos(ang);
		var y = rad * sin(ang);
		
		curveVertex(x,y);
		
		if (i == 0){
			firstX = x;
			firstY = y;
		}
		if (i == 1){
			secondX = x;
			secondY = y;
		}
		if (i == 2){
			thirdX = x;
			thirdY = y;
		}
		if (i == 359){
			curveVertex(firstX,firstY);
			curveVertex(secondX,secondY);
			curveVertex(thirdX,thirdY);
		}
		
	}
	
	endShape();

	t += .5;

	// clear the background every 600 frames using mod (%) operator
	if (frameCount % 600 == 0) {
		background(0);
	}

}