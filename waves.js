let frequencySlider;
let amplitudeSlider;
let colorSlider;
let envelopeSlider;

function setup() {
  // Get the dimensions of the sketch holder element
  const sketchHolder = document.getElementById('sketch-holder');
  const { width, height } = sketchHolder.getBoundingClientRect();

  // Create the canvas with the dimensions of the sketch holder element
  createCanvas(width, height).parent('sketch-holder');
  colorSlider = 0;
}

function draw() {
  colorSlider = document.getElementById("color-slider").value
  background(colorSlider); // Set the background color based on the color slider
  
  // Get the values from the sliders
  const frequency = document.getElementById("frequency-slider").value;
  const amplitude = document.getElementById("amplitude-slider").value;

  // Set the stroke color
  stroke(255 - colorSlider);

  // Draw the wave
  beginShape();
  for (let x = 0; x < width; x++) {
    const y = amplitude * Math.sin(x * frequency + frameCount / 100) + height / 2;
    vertex(x, y);
  }
  endShape();
}

// Resize the canvas whenever the window is resized
function windowResized() {
  // Get the dimensions of the sketch holder element
  const sketchHolder = document.getElementById('sketch-holder');
  const { width, height } = sketchHolder.getBoundingClientRect();

  // Resize the canvas to match the dimensions of the sketch holder element
  resizeCanvas(width, height);
}
