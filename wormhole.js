let sketch = function(p) {
    let numPoints = 10;

    p.setup = function() {
        let canvas = p.createCanvas(180, 180);
        p.angleMode(p.DEGREES);
        p.frameRate(5);
    };

    p.draw = function() {
        p.background(255);
        let radius = p.min(p.width, p.height) / 2 - 50;
        let angle = 360 / numPoints;
        p.translate(p.width / 2, p.height / 2);

        for (let i = 0; i < numPoints; i++) {
            let randomAngle = 4 * p.random(-0.5, 0.5);
            let randomRadius = p.random(-radius * 0.1, radius * 0.1);
            let rradius = radius + randomRadius;
            let x = rradius * p.cos(i * angle + randomAngle);
            let y = rradius * p.sin(i * angle + randomAngle);

            p.fill(p.random(255), p.random(255), p.random(255));
            p.ellipse(x, y, 20, 20); 
            p.fill(0);
            p.ellipse(x - 5, y - 5, 3, 3); 
            p.ellipse(x + 5, y - 5, 3, 3); 
            p.noFill();
            p.arc(x, y + 3, 10, 10, 0, 180);
        }
    };

    p.mousePressed = function() {
        let distance = p.dist(p.mouseX, p.mouseY, p.width / 2, p.height / 2);
        if (distance <= p.min(p.width, p.height) / 2 - 50) {
            window.location.href = 'https://hugofloresgarcia.github.io/';
        }
    };
};

new p5(sketch, 'wormhole');
