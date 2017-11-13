

function setup(){
    createCanvas(windowWidth, windowHeight);
    
}

function draw(){
    background(0);
    
    
    for ( var i = 0; i<20; i++){
        
        circle(i*155,150, random(5,10));
        spark(i*155,250, random(5,10));
        circle(i*155,350, random(5,10));
        spark(i*155,450, random(5,10));
        circle(i*155,550, random(5,10));
        spark(i*155,650, random(5,10));
        circle(i*155,750, random(5,10));
        spark(i*155,850, random(5,10));
    }
       
}


function circle(x, y, size){
    
    noStroke(0);
    ellipseMode(CORNERS);
    fill(251, 106, 139);
    ellipse(x, y, x-size*4, y-size*4);
    ellipse(x, y, x+size*4, y-size*4);
    ellipse(x, y, x+size*4, y+size*4);
    ellipse(x, y, x-size*4, y+size*4);
    stroke(0);
    fill(0);
    strokeWeight(size/5); 
       
}


function spark(x, y, size){
    
    noStroke(0);
    ellipseMode(CORNERS);
    fill(249, 80, 207);
    ellipse(x, y, x-size*4, y-size*4);
    ellipse(x, y, x+size*4, y-size*4);
    ellipse(x, y, x+size*4, y+size*4);
    ellipse(x, y, x-size*4, y+size*4);
    stroke(0);
    fill(0);
    strokeWeight(size/5); 
       
}

