var counter = 0;

var speed = 3;

var speed2 = 5;

var wheel;

var needle;



function preload(){
    
    wheel = loadImage("images/wheel.png");
    
    needle = loadImage("images/needle.png");
    
    
}


function setup(){
    
    createCanvas(1200,1200);
    imageMode(CENTER);
    
    
}

function draw(){
    
    background(242, 175, 151);

    
    
//    the push and pop is only happening to the first rect
        push();
        translate(600, 600);
        rotate(radians(counter));
        scale(1);
        image(wheel, 0, 0);
        pop();
    
    
        push();
//          
            translate( 600, 575);
            image(needle, 0, 0);
        pop();
    




    
//    if(counter >-1440) use this so that the rotations stop (rotate 360 4 times and then stops)
    
    
    if(counter >-1080){
    

//    counter = counter + speed;
//    use counter-= speed; FOR BACKWARDS ROTATION        
    
//        translate(200, 800);
//        rotate(radians(counter2));    
//        rect(0, 0, 200, 200);
//    pop();    
    counter+= speed;
    }
    
    
    
}