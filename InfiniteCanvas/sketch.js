//var img



var bubbles = [];

var cols = 100;
var rows = 100;


//function preload(){
//    
// img = loadImage();   
//    
//}

function setup() {
  createCanvas(windowWidth, windowHeight);    
 
    for (var i = 0; i < cols; i++) {

    for (var j = 0; j< rows; j++)     
        
    var x = random(width);
    var y = random(height);
    var r = random(20, 60);
    var b = new Bubble(x, y, r);
    bubbles.push(b);
        }
  }


function mousePressed() {
  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].clicked(mouseX, mouseY);
  }


}


function draw() {
  background(0);

//image(img, 0, 0);    
    
    
  for (var i = 0; i < cols; i++){
        for (var j = 0; j < rows; j++) {
               var x = i * 50;
               var y = j * 50;

        }
  }
    
  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].show();
  }
}

class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.color = color(255);
      
      
    this.changeColor = function(){
        
    this.col = color(random(255), random(255), random(255))
        
        
    }  
      
      
  }

  clicked(px, py) {
    var d = dist(px, py, this.x, this.y);
    if (d < this.r) {
      this.color = color(random(255), random(10),random(200));
    }
  }


  show() {
    noStroke(0);
    fill(this.color, 150);
    ellipse(this.x, this.y, this.r * 2);
  }
}

