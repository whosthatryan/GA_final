const volume = -10;
let mouse;
let cnv;
let synth;
const reverb = new Tone.Freeverb({}).toMaster();
let rVal;

function setup() {

  let cnv = createCanvas(600, 600);
  cnv.parent('canvasContainer');
  cnv.mousePressed(inCanvas);

  background(100);

  Tone.Master.volume.value = volume;

  synth = new Tone.Synth({
    oscillator: {
      type: 'sine'
    },
    envelope: {
      attack: 0.3,
      decay: 0,
      sustain: 0.8,
      release: 5
    }
  });

  synth.connect(Tone.Master);

  const reverb = new Tone.Freeverb().toMaster();

  let rVal = document.getElementById('rSlider').value;

  reverb.wet = 1;
  reverb.roomSize.input.value = 1;
  reverb.dampening = 0;
  reverb.context = 0;

  synth.connect(reverb);

  console.log(rVal);
  console.log(reverb)
}

window.onResize = function() {
  
  // assigns new values for width and height variables
  w = window.innerWidth;
  h = window.innerHeight;  
  canvas.size(w,h);
}

function draw() {
  const dim = Math.min(width, height);

  const opacity = 0.085;
  background(140);
  
  // If we have a mouse position, draw it
  if (mouse) {
    noFill();
    stroke(300);
    strokeWeight(dim * 0.02);
    rect(mouse[0], mouse[1], dim * 0.3);
    
    mouse = null;
  }

  // reverb.roomSize = rSlider.value();

}

// function adjustSound(val1) {
//   synth.reverb.roomSize.value = map(val1, 0.001, 1.0, 0.10, 0.80);
  // synth.delay.feedback.value = map(val2, -1.0, 1.0, 0.0, 1.0);

  // synth.filter.frequency.value = map(val3, -1.0, 1.0, 1.0, 500.0);
// }
// function setReverb(rVal) {
//   rVal = document.getElementById('rSlider').value;
//   reverb.roomSize = rVal;
// }

window.onResize = function() {
  w = window.innerWidth;
  h = window.innerHeight;  
  canvas.size(w,h);
}

// Update mouse position and play a sound
function inCanvas() {
  // Store mouse position when pressed
  mouse = [ mouseX, mouseY ];
  
  // Hirajoshi scale in C
  // https://www.pianoscales.org/hirajoshi.html
  const notes = ['B', 'F', 'E', 'C', 'G'];
  const octaves = [ 3, 5 ];
  const octave = random(octaves);
  const note = random(notes);
  synth.triggerAttackRelease(note + octave, '4n');
}

// Draw a basic polygon, handles triangles, squares, pentagons, etc
function polygon(x, y, radius, sides = 3, angle = 0) {
  beginShape();
  for (let i = 0; i < sides; i++) {
    const a = angle + TWO_PI * (i / sides);
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}



/////////////////////////////////////////




  // rSlider = createSlider(0, 500, 0);
  // rSlider.position(60, 535);
  // dSlider = createSlider(0, 1000, 0);
  // dSlider.position(60, 590);
  // fSlider = createSlider(0, 1000, 0);
  // fSlider.position(60, 645);
  // pSlider = createSlider(0, 1000, 0);
  // pSlider.position(60, 700);


    // reverb.roomSize.value = rSlider.value()
  // reverb.wet.value = rSlider.value();

  // const reverb = new Tone.Freeverb({
  //   roomSize: rSlider.value(),
  //   wet: rSlider.value()
  // }).toMaster();
  // synth.connect(reverb);

  // const delay = new Tone.FeedbackDelay().toMaster();
  // synth.connect(delay);
  // delay.feedback = dSlider.value();
  // delay.wet = dSlider.value();

  // const filter = new Tone.AutoFilter().toMaster();
  // synth.connect(filter);
  // filter.frequency = fSlider.value();
  // filter.wet = fSlider.value();

  // const phaser = new Tone.Phaser().toMaster();
  // synth.connect(phaser);
  // phaser.Q = pSlider.value();
  // phaser.wet = pSlider.value();



    // // let frameCount = hSlider.value()
  // background(100);
  // cnv2.background(250, 0, 250);
  // noStroke();
  // cnv2.noStroke();

  // // shape(pX, pY, w, h)
  // if ((hSlider.value() * -1) + 61 === 61) {
  //   hSlider.value() === 0; 
  // } else if (frameCount % ((hSlider.value() * -1) + 60) == 0) {
  //   rect(random(width), 125, random(width), random(height));
  // }


  // if ((vSlider.value() * -1) + 61 === 61) {
  //   vSlider.value() === 0; 
  // } 
  //  else if(frameCount % ((vSlider.value() * -1) + 60) == 0) {
  //   ellipse(125, random(height), 200, 200);
  // }