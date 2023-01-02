numTriangles = 5
numTrianglesMax = 0
priorNum = -1
backgroundColor = 255
drawingQueue = []
zoomStep = 100

function distance(p1, p2){
    return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2))
}
function setup() {
    const sketchHolder = document.getElementById('sketch-holder');
    const { width, height } = sketchHolder.getBoundingClientRect();
    createCanvas(width, height).parent('sketch-holder');

    colorMode(HSB);

    

    slider = createSlider(0, 10, 1);
    slider.position(width/8, height);
    slider.style('width', '300px');

    button = createButton('update triangle');
    button.position(10, height/6);
    button.mousePressed(updateTriangle);

    button = createButton('+');
    button.position(120, height/6);
    button.mousePressed(zoomPlus);

    button = createButton('-');
    button.position(150, height/6);
    button.mousePressed(zoomMinus);

    baseTriangle = new Triangle(width/2, height/2, height)
    drawTRecur(baseTriangle, 1)
}

function updateTriangle() {
    clear()
    background(backgroundColor);
    drawTRecur(baseTriangle, slider.value())
}

function zoomPlus() {
    clear()
    background(backgroundColor);
    baseTriangle.incrementSl();
    drawTRecur(baseTriangle, slider.value())
}

function zoomMinus() {
    clear()
    background(backgroundColor);
    baseTriangle.decrementSl();
    drawTRecur(baseTriangle, slider.value())
}

class Pos {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
}

class LineSegment {
    constructor(x1, y1, x2, y2){
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
    }
}

class Triangle {
    constructor(cx, cy, sl, drawLines=false, depth=0) {
      this.c = new Pos(cx, cy)
      this.sl = sl
      this.children = []
      this.calculateVerticies()
      this.depth = depth
      this.drawLines = drawLines
    }

    calculateVerticies() {
      this.h = (Math.sqrt(3)/2)*this.sl 
      this.p1 = new Pos(this.c.x-this.sl/2, this.c.y + this.h/2)
      this.p2 = new Pos(this.c.x, this.c.y-this.h/2)
      this.p3 = new Pos(this.c.x + this.sl/2, this.c.y +this.h/2)
      if (this.children.length > 0) {
        for (c in this.children) {
            this.children[c].calculateVerticies()
        }
      }
    }

    checkoutofbounds() {
        if (this.p1.x < 0 || this.p1.y > height){
            return true
        }
        if (this.p2.x < 0 || this.p2.y > height){
            return true
        }
        if (this.p3.x < 0 || this.p3.y > height){
            return true
        }
    }
    checkIfOnScreen() {
        if (this.p1.x > 0 || this.p1.y < height){
            return true
        }
        if (this.p2.x > 0 || this.p2.y < height){
            return true
        }
        if (this.p3.x > 0 || this.p3.y < height){
            return true
        }
    }

    drawT() {
        if (this.checkIfOnScreen()){
            if (this.drawLines && this.checkIfOnScreen()) {
                line(this.p1.x, this.p1.y, this.p2.x, this.p2.y)
                line(this.p2.x, this.p2.y, this.p3.x, this.p3.y)
                line(this.p3.x, this.p3.y, this.p1.x, this.p1.y)
            }
            else {
                triangle(this.p1.x, this.p1.y, this.p2.x, this.p2.y, this.p3.x, this.p3.y)
            }
            
            this.fracT()
        }
    }

    fracT() {
        if (this.children.length == 0){
            this.children.push(new Triangle(this.c.x, this.c.y - (this.h /4), this.sl/2, this.drawLines, this.depth + 1))
            this.children.push(new Triangle(this.c.x - this.sl/4, this.c.y + (this.h /4), this.sl/2, this.drawLines, this.depth + 1))
            this.children.push(new Triangle(this.c.x + this.sl/4, this.c.y + (this.h /4), this.sl/2, this.drawLines, this.depth + 1))
        }
    }

    incrementSl() {
        this.sl += zoomStep
        this.children = []
        this.calculateVerticies()
    }

    decrementSl() {
        this.sl -= zoomStep
        this.children = []
        this.calculateVerticies()
    }
}

function drawTRecur(currTri, maxDepth) {
    if (currTri.depth > maxDepth) {
        return
    }
    else {
        currTri.drawT()
        for (c in currTri.children) {
            drawTRecur(currTri.children[c], maxDepth)
        }
    }
}

function draw() {
    rect(10, height/10 - 30, 220, 50)
    textSize(28);
    text('current depth: ' + slider.value(), 12, height/10);
}