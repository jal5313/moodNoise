/*stressed*/
var t; 

function setup() {
	createCanvas(window.innerWidth, window.innerHeight);
	background(0);
	stroke(254, 19, 180, 30);
    strokeWeight(2);
	noFill();
	t = 0;
}

function draw() {
	translate(width / 2, height / 2);
	beginShape();
	for (var i = 0; i < 353; i++) {
		var ang = map(i, 0, 350, 0, TWO_PI);
		var rad = 200 * noise(0, t * 0.005);
		var x = rad * cos(ang);
		var y = rad * sin(ang);
		
		curveVertex(x,y);
		if ( i == 0){
			firstX = x;
			firstY = y;
		}
		if ( i == 2){
			secondX = x;
			secondY = y;
		}
		if ( i == 3){
			thirdX = x;
			thirdY = y;
		}
		if (i == 349){
			curveVertex(firstX,firstY);
			
		}
	}
	endShape();

	t += .5;

	// clear
	background(0, 10);
}