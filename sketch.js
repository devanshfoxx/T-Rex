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
greenb = createButton ("green");
greenb.position (200,50);
greenb.mousePressed (green_bg);
}
function red_bg () {
r = 255; 
g = 0;
b = 0;
}
function green_bg () {
r = 0;
g = 255;
b = 0;
}
function draw() 
{
  background(r,g,b);

}




