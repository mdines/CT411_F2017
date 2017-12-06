//var img


var rectX = 800;
var rectY = 382;
var rectSize = 20;
var rectTop = rectY;
var rectBottom = rectY + rectSize;
var rectLeft = rectX;
var rectRight = rectX + rectSize;

var bubbles = [];

var cols = 100;
var rows = 100;

var state = 1;



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

  if(mouseX > rectLeft && mouseX < rectRight && mouseY > rectTop && mouseY < rectBottom && state ==1){
      state = 2;
  }


}  




function draw() {
  

//image(img, 0, 0);    
   
    
 if(state == 1){
     background(0);
     
     fill(195, 0, 155);
     textSize(25);
//     textMode(CENTER);
//     rectMode(CENTER);
     rect(rectX, rectY, rectSize, rectSize);
     text("welcome to infinite canvas!!", 400, height/2);
     text("click the square creative", 530, 400);
     rect(windowWidth, windowHeight);
     
 } else if (state == 2) {
     background(0);
   
    
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

