// const canvas1 = document.getElementById("canvas1").getContext("2d");
// const canvas2 = document.getElementById("canvas2").getContext("2d");
// const canvas3 = document.getElementById("canvas3").getContext("2d");
// const canvas4 = document.getElementById("canvas4").getContext("2d");

let c2;
let w = window.innerWidth;
let h = window.innerWidth;

function setup() {
  createCanvas(w, h);
  c2 = createGraphics(w, h);
  // hSlider = createSlider(0, 500, 0)
  // hSlider.position(400, 50)
  // vSlider = createSlider(0, 500, 0)
  // vSlider.position(200, 200)

}

function draw() {
  background(100);
  c2.background(250, 0, 250);
  noStroke();
  c2.noStroke();

  // shape(pX, pY, w, h)
  if(frameCount % 5 == 0) {
    rect(random(width), 50, 50, 50);
  }
  if(frameCount % 5 == 0) {
    rect(200, random(height), 200, 50);
  }
}

window.onresize = function() {
  
  // assigns new values for width and height variables
  w = window.innerWidth;
  h = window.innerHeight;  
  canvas.size(w,h);
}


