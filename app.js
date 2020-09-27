// const canvas1 = document.getElementById("canvas1").getContext("2d");
// const canvas2 = document.getElementById("canvas2").getContext("2d");
// const canvas3 = document.getElementById("canvas3").getContext("2d");
// const canvas4 = document.getElementById("canvas4").getContext("2d");

let c2;

function setup() {
  createCanvas(700, 700);
  c2 = createGraphics(700, 700);
}

function draw() {
  background(100);
  c2.background(250, 0, 250);
  noStroke();
  c2.noStroke();

  // shape(pX, pY, w, h)
  // if(frameCount % 10 == 0) {
  //   rect(random(width), 200, 50, 200);
  // }
  // if(frameCount % 10 == 0) {
  //   rect(200, random(height), 200, 50);
  // }
}


