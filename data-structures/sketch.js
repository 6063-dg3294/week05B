let xPos = [0, 50]
let yPos = [150, 400]
let xVel = [2, 10]
let cDiam = [40,50]


function setup() {
  createCanvas(800, 600);
  for (let i = 0; i < 10; i++){
    xPos.push(0); 
    yPos.push(0)
  }
}

function draw() {
  strokeWeight(0)
  background("lightblue");
  fill(220, 10, 100);

  for (let i = 0; i < 2; i += 1){
    ellipse(xPos[i], yPos[i], cDiam[i], cDiam[i]);
    xPos[i] = xPos[i] + xVel[i]

    // if reset is needed: pick random diameter and reset x
  if (xPos[i] > width + cDiam[i]) {
    cDiam[i] = random(20, 150);
    xPos[i] = 0 - cDiam[i];
  }

  if (yPos[i] > height + cDiam[i]){
    cDiam[i] = random(20,75);
    yPos[i] = 0 - cDiam[i];
  }

  }


  


}
