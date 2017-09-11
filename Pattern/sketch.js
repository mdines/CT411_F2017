function setup() {
    
createCanvas(1440, 1024);   
  
    
}



function draw() {

 background(0);
 strokeWeight(0);
 stroke(255);
    
for (var x = 0; x <= width; x += 50) {
    for (var y = 0; y <= height; y += 50){
        fill(224, 124, random(255));
        ellipse(x, y, 50, 50);
        }
    }    
    
for (var x = 2; x <= width; x += 10) {
    for (var y = 0; y <= height; y += 10){
        fill(random(255), 204, random(255));
        ellipse(x, y, 100, 100);
        }
    }    
    
    
    
    
    
}