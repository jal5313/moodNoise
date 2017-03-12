/*calm*/
var t; 
var firstX;
var firstY;

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
	for (var i = 0; i < 360; i++) {
		var ang = map(i, 0, 360, 0, TWO_PI);
		var rad = 250 * noise(i * 0.01, t * 0.005);
		var x = rad * cos(ang);
		var y = rad * sin(ang);
		if ( i == 0)
			{
				
			}
		curveVertex(x, y);
	}
	
	endShape(CLOSE);

	t += .4;

	// clear the background every 600 frames using mod (%) operator
	if (frameCount % 600 == 0) {
		background(0);
	}

}