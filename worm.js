ballPos = [0, 0]
ballPosInc = [2, 1]
ballVelocity = [5, 5]
ballColor = [0, 0, 0]

colorIndex = 0
colorInc = [1, 1, 1]
screenDim = [800, 800]

myScale = 0
scaleInc = 1
timeInc = 0.1
time = 0

waveMax = 10

function setup() {
    const sketchHolder = document.getElementById('sketch-holder');
    const { width, height } = sketchHolder.getBoundingClientRect();
    createCanvas(width, height).parent('sketch-holder');
}

function mousePressed() {
  clear();
  background(255);
}


function fillBall(stroke=false){
  if (!stroke){
    noStroke();
  }
  
  ballColor[colorIndex] += colorInc[colorIndex];
  fill(ballColor[0], ballColor[1], ballColor[2]);

  if (ballColor[colorIndex] == 255 || ballColor[colorIndex] == 0){
    colorInc[colorIndex] = colorInc[colorIndex] * -1;
    colorIndex = (colorIndex + 1) % colorInc.length;
  }
}

function fillBallRandom(stroke=false){
  if (!stroke){
    noStroke();
  }
  ballColor[colorIndex] += colorInc[colorIndex];
  fill(ballColor[0], ballColor[1], ballColor[2]);

  if (ballColor[colorIndex] == 255 || ballColor[colorIndex] == 0){
    colorInc[colorIndex] = colorInc[colorIndex] * -1;
    colorIndex = randomInt(0, colorInc.length);
  }
  if (Math.random() < 0.5) {
    colorIndex = randomInt(0, colorInc.length);
  }
}

function randomInt(min, max){
  return Math.floor(Math.random() * max) + min;
}

function outOfBounds() {
  return (ballPos[0] >= screenDim[0] + 10 || ballPos[0] <= -10 || ballPos[1] >= screenDim[1] + 10|| ballPos[1] <= -20);
}


function updateBallPos() {
  if (ballPos[0] >= width || ballPos[0] <= 0){
    ballVelocity[0] =  (-1*(Math.random() + 0.1)) * (Math.sign(ballVelocity[0])*10);

  }
  if(ballPos[1] >= 800 || ballPos[1] <= 0){
    ballVelocity[1] = (-1*(Math.random() + 0.1)) * (Math.sign(ballVelocity[1])*10);
  }
  ballPos[0] += ballVelocity[0];
  ballPos[1] += ballVelocity[1];

  if (outOfBounds()){
    ballPos = [375, 375];
  }
}

function updateBallPosFlower() {
  r = Math.cos(time);
  ballPos[0] = ((r*Math.cos(time)) * scale + 200);
  ballPos[1] = ((r*Math.sin(time)) * scale + 400);
}

function updateBallPosCircle() {
  r = Math.cos(time);
  ballPos[0] = ((r*Math.cos(time)) * scale + 200);
  ballPos[1] = ((r*Math.sin(time)) * scale + 400);
}

function updateBallPosWave() {
  ballPos[1] = Math.cos(time) * myScale + 400;
  ballPos[0] += ballPosInc[0]
  if (ballPos[0] > 800 || ballPos[0] < 0) {
    ballPosInc[0] = ballPosInc[0] * -1;
  }
}

function updateBallPosDynamicWave() {
  ballPos[1] = Math.cos(time) * myScale + 400;
  ballPos[0] += ballPosInc[0]
  myScale += scaleInc
  if (ballPos[0] > width || ballPos[0] < 0) {
    ballPosInc[0] = ballPosInc[0] * -1;
  }
  if (myScale >= waveMax || myScale <= 0) {
    scaleInc = scaleInc * -1
    waveMax = randInt(10, 200)
  }
  
}

function randInt(min, max) {
  return Math.random() * (max - min) + min;
}

function updateBall(){
  time += timeInc;
  fillBallRandom(stroke=true);
  updateBallPosDynamicWave();
  
  ellipse(ballPos[0], ballPos[1], width/30, width/30);
  
}

function draw() {
  updateBall()

}

// Resize the canvas whenever the window is resized
function windowResized() {
    // Get the dimensions of the sketch holder element
    const sketchHolder = document.getElementById('sketch-holder');
    const { width, height } = sketchHolder.getBoundingClientRect();
  
    // Resize the canvas to match the dimensions of the sketch holder element
    resizeCanvas(width, height);
  }