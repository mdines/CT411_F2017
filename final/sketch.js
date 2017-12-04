
var cols = 100;
var rows = 100;

var colors = [];

// for red, green, and blue color values
var r, g, b;


//**constructor function**
//var spark ={
//   x:0,
//   y:0,
//   speed:10,
//   speedY:10,
//   drawRow : function(){
//       ellipse(this.x, this.y, 25, 25);
//       
//       }
//    
//    
//}
//
//var sparks = [];


function make2Darray(cols, rows){
 var arr = new Array(cols);
 for (var i = 0; i <arr.length; i++){
     
     arr[i] = new Array(rows);
 }

    return arr;
}


function setup(){
    createCanvas(windowWidth, windowHeight);

    colors = make2Darray(cols, rows);
    
    for (var i = 0; i < cols; i++){
            for (var j = 0; j < rows; j++) {
                colors[i][j] = random(145), random(135), random(76);
            
        }
    }
}


function draw(){
    background(0);

        for (var i = 0; i < cols; i++){
        for (var j = 0; j < rows; j++) {
               var x = i * 30;
               var y = j * 30;
               
               fill(colors[i][j]);
               noStroke();
               ellipse (x,y, 25, 25);
               
           }
        }

 
  noStroke();
  fill(r, g, b, 127);
  ellipse(mouseX, mouseY, 25, 25);
   
    }


function mousePressed() {
  // Check if mouse is inside the circle
  var d = dist(mouseX, mouseY, 25, 25);
  if (d < 100) {
    // Pick new random color values
    r = random(255);
    g = random(255);
    b = random(255);
  }
}
