

let sound, amplitude, cnv;

function preload(){
  sound = loadSound('The beautiful sunset_88.mp3');
}
function setup() {
  cnv = createCanvas(600,600,WEBGL);
  cnv.parent('canvas2');
  amplitude = new p5.Amplitude();

  // start / stop the sound when canvas is clicked
  cnv.mouseClicked(function() {
    if (sound.isPlaying() ){
      sound.stop();
    } else {
      sound.play();
    }
  });
}
function draw() {
  background(0);
  noFill();
  stroke(100, 100, 240);
  strokeWeight(1);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  let level = amplitude.getLevel();
  let size = map(level, 0, 1, 0, 100);
  box(100+size,100+size);

  rotateX(frameCount * 0.015);
  rotateY(frameCount * 0.015);
  box(160+size,160+size);

  rotateX(frameCount * 0.02);
  rotateY(frameCount * 0.02);
  box(40+size,40+size);

  strokeWeight(30);
  point(0,0);
  
}