
function setup() {
  createCanvas(500, 500);
  smooth();
  rectMode(CENTER);
}

function draw() {
  background(220);
  strokeWeight(0.2);
  noFill();
  var numRect = 70;
  var anim = Math.sin(frameCount * 0.01);
  for (var i = 0; i < numRect; i++){
    push();
    var fi = i/numRect;
    var ptr = 1-fi;
    translate(width/2, height/2);
    strokeWeight(fi);
    rotate(PI * 0.5 * fi * anim);
    scale(ptr);
    rect(0, 0, width, height);
    pop();
  }

  // drawGrid();
}
function drawGrid(){
  push();
  noFill();
  stroke(0,100);
  for(var x = 0; x<width; x+=10){
    line(x,0,x,height);
  }
  for(var y = 0; y<width; y+=10){
    line(0,y,width,y);
}
  pop();
}
