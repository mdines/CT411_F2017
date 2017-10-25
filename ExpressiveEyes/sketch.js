var isBright = false;
var x = 0;
var speed = 3;

function setup(){
    createCanvas(windowWidth, windowHeight);
    
    
    
    
}

function draw(){
    if(isBright == false){
        
        background(0);
    
    }else{
        background(255, 16,96);
        
    }
 
     

stroke(255);
strokeWeight(10);

//intersecting eyeballs
//noFill();
//ellipse(x, 400, 400, 400);
//fill(255);
//ellipse(x, 400, 200, 200);
//fill(0);
//ellipse(x, 400, 100, 100);
//
//
//    
//noFill();
//ellipse(800, x, 400, 400);
//fill(255);
//ellipse(800, x, 200, 200);
//fill(0);
//ellipse(800, x, 100, 100);



//connected eyeballs
noFill();
ellipse(500, x, 200, 200);
fill(255);
ellipse(500, x, 100, 100);
fill(0);
ellipse(500, x, 50, 50);
    
    

noFill();
ellipse(700, x, 200, 200);
fill(255);
ellipse(700, x, 100, 100);
fill(0);
ellipse(700, x, 50, 50);



    if (x > height || x < 0) {
    
    speed = speed * -1;
       
}

  x = x + speed;  


}


function mousePressed(){
    
    isBright = !isBright;
    
}


