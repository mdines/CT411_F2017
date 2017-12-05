
var me = ["Hi", "My", "name", "is", "Michelle", "I", "love", "fish tacos", "and", "margaritas"];
var index = 0;



function setup() {
  createCanvas(windowWidth, windowHeight);
    background(0);
    fill(random(175), 255, 125);
    textSize(75);
    text("click—to find out more", 50, height/2);
}

function draw() {
  
}


function mousePressed(){
    background(0);
    fill("#FFFFFF");
    textSize(60);
    text(me[index], 50, height/2);
    index = index +1;
    
    if(index == me.length){
        index = 0;
    }
    
}