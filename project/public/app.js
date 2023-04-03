let grassBrushes = [];

let pos;

function setup() {
  randomSeed(int(fxrand() * 999999));
  noiseSeed(int(fxrand() * 999999));

  createCanvas(1000, 800);
  colorMode(HSB, 360, 100, 100, 100);
  angleMode(DEGREES);
  background(0, 0, 100);
}

function draw() {
  // background(0, 0, 100);
}
