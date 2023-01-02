let circleX, circleY; // Variables to store the circle's x and y position
let circleSize = 50; // Variable to store the circle's size
let gravity = 0.5; // Variable to store the strength of gravity
let circleVelocity = 0; // Variable to store the circle's velocity
let isDragging = false; // Variable to store whether the circle is being dragged
let hue = 0; // Variable to store the circle's hue

function setup() {
  // Get the dimensions of the sketch holder element
  const sketchHolder = document.getElementById('sketch-holder');
  const { width, height } = sketchHolder.getBoundingClientRect();

  // Create the canvas with the dimensions of the sketch holder element
  createCanvas(width, height).parent('sketch-holder');
  circleX = width / 2; // Set the initial x position of the circle
  circleY = height / 2; // Set the initial y position of the circle
  colorMode(HSB, 255); // Set the color mode to HSB with a range of 0-255 for the hue
}

function draw() {
    background(255); // Set the background color to white
  
    if (isDragging) { // If the circle is being dragged
      // Update the circle's x and y position based on the mouse position
      circleX = mouseX;
      circleY = mouseY;
    } else { // If the circle is not being dragged
      // Update the circle's y position based on its velocity and gravity
      circleY += circleVelocity;
      circleVelocity += gravity;
    }
  
    // Check if the circle has reached the bottom of the screen
    if (circleY + circleSize / 2 > height) {
    // Set the circle's y position to the bottom of the screen
    circleY = height - circleSize / 2;
    // Set the circle's velocity to 0
    circleVelocity = 0;
    }
    
    // Draw the circle
    fill(0); // Set the fill color to black
    ellipse(circleX, circleY, circleSize, circleSize); // Draw the circle
}
    
function mousePressed() {
// Check if the mouse is inside the circle
if (dist(mouseX, mouseY, circleX, circleY) < circleSize / 2) {
isDragging = true; // Set isDragging to true
}
}

function mouseReleased() {
isDragging = false; // Set isDragging to false
}

// Resize the canvas whenever the window is resized
function windowResized() {
// Get the dimensions of the sketch holder element
const sketchHolder = document.getElementById('sketch-holder');
const { width, height } = sketchHolder.getBoundingClientRect();

// Resize the canvas to match the dimensions of the sketch holder element
resizeCanvas(width, height);
}
  