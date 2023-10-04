let xPos = [0, 50]
let yPos = [150, 400]
let xVel = [2, 10]
let cDiam = [40,50]



function setup() {
  createCanvas(800, 600);
}

function draw() {
  strokeWeight(0)
  background("lightblue");
  fill(220, 10, 100);

  // draw circle
  ellipse(xPos[0], yPos[0], cDiam[0], cDiam[0]);
  fill("orange")
  ellipse(xPos[1], yPos[1], cDiam[1], cDiam[1]);

  // update pos
  xPos[0] = xPos[0] + xVel[0];
  yPos[1] = yPos[1] + xVel[1]

  // if reset is needed: pick random diameter and reset x
  if (xPos[0] > width + cDiam[0]) {
    cDiam[0] = random(20, 150);
    xPos[0] = 0 - cDiam[0];
  }

  if (yPos[1] > height + cDiam[1]){
    cDiam[1] = random(20,75);
    yPos[1] = 0 - cDiam[1];
  }


}
