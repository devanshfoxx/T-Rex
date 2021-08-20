var greenb;
var redb;
var r = 0;
var g = 0;
var b = 0;

function setup() {
  createCanvas(400,400);
redb = createButton ("red");
redb.position (100,50);
redb.mousePressed (red_bg);
}
function red_bg () {
r = 255; 
g = 0;
b = 0;
}

function draw() 
{
  background(r,g,b);

}




