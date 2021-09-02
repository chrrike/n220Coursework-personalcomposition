function setup() {
    createCanvas(400, 400);
  }
  
  
  function draw() {
    background(220);
    let tanColor = color(219, 172, 105);
    let blackColor = color(0,0,0);
    fill(tanColor);
    circle(150, 150, 70);
    triangle(105, 125, 115, 140, 125, 125);
    triangle(175, 125, 185, 140, 195, 125);
    fill(blackColor);
    circle(130, 150, 10);
    circle(160, 150, 10);
    line(110, 160, 130, 170);
    line(110, 165, 130, 170);
    line(170, 170, 190, 160);
    line(170, 170, 190, 165);
    triangle(140, 165, 155, 165, 148, 175);
  }