// const canvas1 = document.getElementById("canvas1").getContext("2d");
// const canvas2 = document.getElementById("canvas2").getContext("2d");
// const canvas3 = document.getElementById("canvas3").getContext("2d");
// const canvas4 = document.getElementById("canvas4").getContext("2d");
// import * as Tone from 'tone';

let cnv;
let cnv2;
let w = window.innerWidth;
let h = window.innerWidth;
let hSlider;
let vSlider;

const player = new Tone.Player('two_days_post.mp3').toDestination();
Tone.loaded().then(() => {
	player.start();
});

const distortion = new Tone.Distortion(0.4).toDestination();
//connect a player to the distortion
player.connect(distortion);

document.querySelector('play')?.addEventListener('click', async () => {
	await Tone.start()
	console.log('audio is ready')
})

document.querySelector('stop')?.addEventListener('click', async () => {
	await Tone.start()
	console.log('audio is stopped')
})

function setup() {
  cnv = createCanvas(600, 600);
  cnv2 = createGraphics(600, 600);
  cnv.parent('canvasContainer');
  hSlider = createSlider(0, 61, 0);
  hSlider.position(60, 600);
  vSlider = createSlider(0, 61, 0);
  vSlider.position(60, 675);
}

function draw() {
  // let frameCount = hSlider.value()
  background(100);
  cnv2.background(250, 0, 250);
  noStroke();
  cnv2.noStroke();

  // shape(pX, pY, w, h)
  if ((hSlider.value() * -1) + 61 === 61) {
    hSlider.value() === 0; 
  } else if (frameCount % ((hSlider.value() * -1) + 60) == 0) {
    rect(random(width), 125, random(width), random(height));
  }


  if ((vSlider.value() * -1) + 61 === 61) {
    vSlider.value() === 0; 
  } 
   else if(frameCount % ((vSlider.value() * -1) + 60) == 0) {
    ellipse(125, random(height), 200, 200);
  }
}

window.onResize = function() {
  
  // assigns new values for width and height variables
  w = window.innerWidth;
  h = window.innerHeight;  
  canvas.size(w,h);
}


