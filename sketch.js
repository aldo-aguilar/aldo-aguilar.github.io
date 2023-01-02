let angle = 0;
let hue = 0;

function setup() {
    createCanvas(800, 600).parent('sketch-holder');
  colorMode(HSB, 360);
  noStroke();
}

function draw() {
  background(0);

  for (let x = 0; x < width; x += 50) {
    let y = height / 2 + sin(angle + x / 50) * 100;
    fill(hue, 360, 360);
    ellipse(x, y, 50, 50);
  }

  angle += 0.01;
  hue = (hue + 1) % 360;
}