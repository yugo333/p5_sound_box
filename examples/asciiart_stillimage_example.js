
var myAsciiArt;

var asciiart_width = 120; var asciiart_height = 60;

var images = ["example_image_American_Gothic.jpg"];


var gfx;


var ascii_arr;


var cyclic_t;

function preload() {
  // "Young man reading by candlelight", Matthias Stom, 1600-1650
  images[0] =
    loadImage('eee.jpg');
  // "Le Penseur", Auguste Rodin, 1880
  // images[1] =loadImage('example_image_Thinking-Man.jpg');
  // // "American Gothic", Grant DeVolson Wood, 1930
  // images[2] = loadImage('example_image_American_Gothic.jpg');
  // // "La Liseuse", Jean-Honoré Fragonard, 1770
  // images[3] = loadImage('example_image_young_girl_reading.jpg');
}

function setup() {
  // createCanvas(1500, 800); // we need some space...
  let canvas = createCanvas(1500, 800);
  canvas.parent('canvas1');

  gfx = createGraphics(asciiart_width, asciiart_height);
  gfx.pixelDensity(1);

  myAsciiArt = new AsciiArt(this);

  myAsciiArt.printWeightTable();

  textAlign(CENTER, CENTER); textFont('monospace', 8); textStyle(NORMAL);
  noStroke(); fill(255);

  frameRate(30);
}

function draw() {
    background(0);

    cyclic_t = millis() * 0.0002 % images.length;
   
    gfx.image(images[floor(cyclic_t)], 0, 0, gfx.width, gfx.height);

    gfx.filter(POSTERIZE, 3);
  

    ascii_arr = myAsciiArt.convert(gfx);
 
    myAsciiArt.typeArray2d(ascii_arr, this);

    tint(255, pow(1.0 - (cyclic_t % 1.0), 4) * 255);
    image(images[floor(cyclic_t)], 0, 0, width, height);
    noTint();
}


typeArray2d = function(_arr2d, _dst, _x, _y, _w, _h) {

  switch(arguments.length) {
    case 2: _x = 0; _y = 0; _w = width; _h = height; break;
    case 4: _w = width; _h = height; break;
    case 6: /* nothing to do */ break;
    default:
      console.log(
        '[typeArray2d] bad number of arguments: ' + arguments.length
      );
      return;
    }
  }
  