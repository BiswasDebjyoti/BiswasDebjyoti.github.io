var song,myCallback = function() {
  //alert("Song Stopped");
  /*var num = Math.floor(Math.random() * 105);
  song = loadSound(num.toString()+'.webm');
  song.onended(myCallback);*/
  preload;
  song.play();
  song.onended(myCallback);
       };
var amp;
var button;

var volhistory = [];


function preload() {
  var songNum = Math.floor(Math.random() * 105);
  console.log(songNum);
  song = loadSound(songNum+'.webm');
  //song.onended(myCallback);
}

function setup() {
  createCanvas(200, 200);
  angleMode(DEGREES);
  
  song.play();
  song.onended(myCallback);
  amp = new p5.Amplitude();
}

function draw() {
  background(0);
  var vol = amp.getLevel();
  volhistory.push(vol);
  stroke(255);
  noFill();

  translate(width / 2, height / 2);
  beginShape();
  for (var i = 0; i < 360; i++) {
    var r = map(volhistory[i], 0, 1, 10, 100);
    var x = r * cos(i);
    var y = r * sin(i);
    vertex(x, y);
  }
  endShape();

  if (volhistory.length > 360) {
    volhistory.splice(0, 1);
  }
}
