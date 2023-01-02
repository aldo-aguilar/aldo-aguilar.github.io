let hue = 0;
let size = 50;

function setup() {
  // Get the dimensions of the sketch holder element
  const sketchHolder = document.getElementById('sketch-holder');
  const { width, height } = sketchHolder.getBoundingClientRect();

  // Create the canvas with the dimensions of the sketch holder element
  createCanvas(width, height).parent('sketch-holder');
  colorSlider = 0;

  colorMode(HSB, 255, 100, 100);
  noStroke();
}

function draw() {
  // Check if mouse is pressed
  if (!mouseIsPressed) {
    // Update the hue and size
    size = 50 + 25 * Math.sin(sizeIncrement);
  }
}

function generateCircle() {
  // Check if cursor is off screen
  if (mouseX < 0 || mouseX > width || mouseY < 0 || mouseY > height) {
    return;
  }

  // Draw the circle
  fill(Math.abs(hue), 100, 100);
  ellipse(mouseX, mouseY, size, size);
  console.log("circle generated");
}

// Call the generateCircle function every 2 seconds
setInterval(generateCircle, 20);

// Update the size of the circles based on arrow key input
document.addEventListener('keydown', event => {
  if (event.code === 'ArrowUp') {
    size += 5;
  } else if (event.code === 'ArrowDown') {
    size -= 5;
  }
});

// Update the hue of the circles based on mouse wheel input
document.addEventListener('wheel', event => {
  console.log(hue)
  hue = (Math.sign(event.deltaY) * 3 + hue) % 255;
});

// Resize the canvas whenever the window is resized
function windowResized() {
  // Get the dimensions of the sketch holder element
  const sketchHolder = document.getElementById('sketch-holder');
  const { width, height } = sketchHolder.getBoundingClientRect();

  // Resize the canvas to match the dimensions of the sketch holder element
  resizeCanvas(width, height);
}