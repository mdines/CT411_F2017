
var x = 0;
var speed = 3;
var img;


function preload(){
    img = loadImage("pizza.png");
    }

function setup(){
    
    createCanvas (1027, 780);
    
    
}



function draw (){
    
    background (68, 199, 244);
    imageMode(CENTER);
    image(img,width/2,height/2);
    
    
//pepperoni
noStroke();
fill(239, 78, 82);
ellipse(x, 400, 50, 50);    

noStroke();
fill(239, 78, 82);
ellipse(x, 300, 50, 50);    
    
noStroke();
fill(239, 78, 82);
ellipse(600, x, 95, 95);
    
noStroke();
fill(239, 78, 82);
ellipse(400, x, 95, 95);

    
//olives
    
stroke(0);
strokeWeight(10);
noFill();
ellipse(x, 150, 25, 25);    
    
stroke(0);
strokeWeight(10);
noFill();
ellipse(175, x, 25, 25); 

stroke(0);
strokeWeight(10);
noFill();
ellipse(x, 225, 25, 25); 

    
    
    
    
if (x > width || x < 0) {
    
    speed = speed * -1;
       
}

  x = x + speed;  


}

