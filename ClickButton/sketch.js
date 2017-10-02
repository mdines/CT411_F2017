var circX;
var circY;
var circDiameter = 200;
var circRadius = circDiameter/2;
var d;
var redCol =55;
var isClicked = false;

var img;
function preload(){
    img = loadImage("ampersand.png");}

function setup(){
   createCanvas(windowWidth, windowHeight); 
   circX = width/2;
   circY = height/2;
}

function draw(){
    background(redCol,50,55);
//    ellipse(circX, circY, circDiameter, circDiameter);
    d = dist(circX, circY, mouseX, mouseY);
    
    
    imageMode(CENTER);
    image(img,width/2,height/2);
    
//    if(d < circRadius){
//        redCol = 0;
//    }else{
//        redCol= 255;
//    }
}

function mousePressed(){
    if(d < circRadius && isClicked == true){
        redCol = 0;
        isClicked = !isClicked;
    }else if(d < circRadius && isClicked == false){
        redCol= 255;
        isClicked = !isClicked;
    }
}