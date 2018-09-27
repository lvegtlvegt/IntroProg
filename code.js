// setup canvas
var c = document.getElementById("c");
c.width = 500;
c.height = 500;
var ctx = c.getContext("2d");  // the object that does the drawing

// create variables
var sunY = 0;

var baby = new Image();
baby.src = "baby.png";

var babyX = 100;
var babyY = 100;

var treeX = 300;
var treeY = 200;

var left = false;
var right = false;
var up = false;
var down = false;

var frame = function(){
	ctx.fillStyle = "cyan"; //sky
	ctx.fillRect(0,0,500,350);
	ctx.fillStyle = "orange";
	ctx.beginPath();
	ctx.arc(300,sunY,50,0,2*Math.PI); // sun
	ctx.fill();
	ctx.fillStyle = "rgb(0,0,0)";
	ctx.fillRect(100,250,100,100); // house
	ctx.beginPath();
	ctx.moveTo(100,250);
	ctx.lineTo(200,250);
	ctx.lineTo(150,200);
	ctx.fill();
	ctx.fillStyle = "green";
	ctx.fillRect(0,350,500,150);
	tree(treeX,treeY);
	tree(50,300);
	ctx.drawImage(baby,babyX,babyY);
	sunY = sunY + 1;
	if(sunY > 500)
		sunY = -100;
	
	if(left)
		treeX = treeX - 5;
	if(right)
		treeX = treeX + 5;
	if(up)
		treeY = treeY -5;
	if(down)
		treeY = treeY + 5;
}

var tree = function(x,y){
	ctx.fillStyle = "brown";
	ctx.fillRect(x-15,y+45,30,60);
	ctx.fillStyle = "green";
	ctx.beginPath();
	ctx.arc(x,y,50,0,2*Math.PI);
	ctx.fill();
}

document.onmousemove = function(event){
	babyX = event.pageX;
	babyY = event.pageY;
}

document.onkeydown = function(event){
	
	if(event.keyCode == 37)
		left = true;
	if(event.keyCode == 39)
		right = true;
	if(event.keyCode == 38)
		up = true;
	if(event.keyCode == 40)
		down = true;
}

document.onkeyup = function(event){
	
	if(event.keyCode == 37)
		left = false;
	if(event.keyCode == 39)
		right = false;
	if(event.keyCode == 38)
		up = false;
	if(event.keyCode == 40)
		down = false;
}

var frameLoop = function(){
	frame();
	setTimeout(frameLoop, 10);
};

frameLoop();  // start the drawing