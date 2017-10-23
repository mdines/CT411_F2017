//Cities

//Detroit - Motor City
var img1 = {
    loc: 0,
    size: 250,
    x: 100,
    y: 100,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0   
};


//Pittsburgh - Steel City
//var img2 = {
//    loc: 0,
//    size: 250,
//    x: 400,
//    y: 100,
//    left: 0,
//    right: 0,
//    top: 0,
//    bottom: 0   
//};

//New York City - The Big Apple
//var img3 = {
//    loc: 0,
//    size: 250,
//    x: 700,
//    y: 100,
//    left: 0,
//    right: 0,
//    top: 0,
//    bottom: 0   
//};



//Chicago - The Windy City
var img4 = {
    loc: 0,
    size: 250,
    x: 100,
    y: 400,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0   
};

//New Orleans - The Big Easy
var img5 = {
    loc: 0,
    size: 250,
    x: 400,
    y: 400,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0   
};


//Las Vegas - Sin City
var img6 = {
    loc: 0,
    size: 250,
    x: 700,
    y: 400,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0   
};


//Cleveland - The mistake by the lake
var img7 = {
    loc: 0,
    size: 250,
    x: 100,
    y: 705,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0   
};


//Nashville - Music City
var img8 = {
    loc: 0,
    size: 250,
    x: 400,
    y: 100,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0   
};


//Louisville - Derby City
var img9 = {
    loc: 0,
    size: 250,
    x: 700,
    y: 100,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0   
};




//Sounds


var motor;

//var steel;

//var apple;

var wind;

var jazz;

var slot;

var lake;

var music;

var horses;

var col = 255;

function preload(){
    img1.loc = loadImage("Nicknames/detroit.png");
//    img2.loc = loadImage("Nicknames/pitts.png");
//    img3.loc = loadImage("Nicknames/nyc.png");
    img4.loc = loadImage("Nicknames/chicago.png");
    img5.loc = loadImage("Nicknames/neworleans.png");
    img6.loc = loadImage("Nicknames/vegas.png");
    img7.loc = loadImage("Nicknames/cleveland.png");
    img8.loc = loadImage("Nicknames/nashville.png");
    img9.loc = loadImage("Nicknames/louisville.png");
    
    motor = loadSound("Sounds/motor.mp3");
//    steel = loadSound("Sounds/steel.mp3");
//    apple = loadSound("Sounds/apple.mp3");
    wind = loadSound("Sounds/wind.mp3");
    jazz = loadSound("Sounds/Jazz.wav");
    slot = loadSound("Sounds/slot.wav");
    lake = loadSound("Sounds/lake.wav");
    music = loadSound("Sounds/music.wav");
    horses = loadSound("Sounds/horses.mp3")
}

function setup(){
    createCanvas(1050,760);
//    imageSize = 400; this is now defined with var json
    


}

function draw(){
    background(col);
    image(img1.loc, img1.x, img1.y, img1.size, img1.size);
//    image(img2.loc, img2.x, img2.y, img2.size, img2.size);
//    image(img3.loc, img3.x, img3.y, img3.size, img3.size);
    image(img4.loc, img4.x, img4.y, img4.size, img4.size);
    image(img5.loc, img5.x, img5.y, img5.size, img5.size);
    image(img6.loc, img6.x, img6.y, img6.size, img6.size);
//    image(img7.loc, img7.x, img7.y, img7.size, img7.size);
    image(img8.loc, img8.x, img8.y, img8.size, img8.size);
    image(img9.loc, img9.x, img9.y, img9.size, img9.size);
}

function mousePressed(){
//Detroit
    img1.top = img1.y;
    img1.left = img1.x;
    img1.right = img1.x + img1.size;
    img1.bottom = img1.y + img1.size;
    
    if (mouseX > img1.left && mouseX < img1.right && mouseY > img1.top && mouseY < img1.bottom){
        col = 40;
        //this makes the sound play when clicked
        motor.play();
    } 
   
//Pittsburgh
    
//    img2.top = img2.y;
//    img2.left = img2.x;
//    img2.right = img2.x + img2.size;
//    img2.bottom = img2.y + img2.size;
//    
//    if (mouseX > img2.left && mouseX < img2.right && mouseY > img2.top && mouseY < img2.bottom){
//        col = 125;
//        //this makes the sound play when clicked
//        steel.play();
//    } 
    
    
//NYC
    
//    img3.top = img3.y;
//    img3.left = img3.x;
//    img3.right = img3.x + img3.size;
//    img3.bottom = img3.y + img3.size;
//    
//    if (mouseX > img3.left && mouseX < img3.right && mouseY > img3.top && mouseY < img3.bottom){
//        col = 255;
//        //this makes the sound play when clicked
//        apple.play();
//    } 
    

//Chicago    
    
    img4.top = img4.y;
    img4.left = img4.x;
    img4.right = img4.x + img4.size;
    img4.bottom = img4.y + img4.size;
    
    if (mouseX > img4.left && mouseX < img4.right && mouseY > img4.top && mouseY < img4.bottom){
        col = 65;
        //this makes the sound play when clicked
        wind.play();
    } 

    
//New Orleans    
    
    img5.top = img5.y;
    img5.left = img5.x;
    img5.right = img5.x + img5.size;
    img5.bottom = img5.y + img5.size;
    
    if (mouseX > img5.left && mouseX < img5.right && mouseY > img5.top && mouseY < img5.bottom){
        col = 55;
        //this makes the sound play when clicked
        jazz.play();
    }     
    

//Las Vegas   
    
    img6.top = img6.y;
    img6.left = img6.x;
    img6.right = img6.x + img6.size;
    img6.bottom = img6.y + img6.size;
    
    if (mouseX > img6.left && mouseX < img6.right && mouseY > img6.top && mouseY < img6.bottom){
        col = 155;
        //this makes the sound play when clicked
        slot.play();
    } 
    
    
    
//Cleveland   
    
//    img7.top = img7.y;
//    img7.left = img7.x;
//    img7.right = img7.x + img7.size;
//    img7.bottom = img7.y + img7.size;
//    
//    if (mouseX > img7.left && mouseX < img7.right && mouseY > img7.top && mouseY < img7.bottom){
//        col = 40;
//        //this makes the sound play when clicked
//        lake.play();
//    }

    
    
//Nashville  
    
    img8.top = img8.y;
    img8.left = img8.x;
    img8.right = img8.x + img8.size;
    img8.bottom = img8.y + img8.size;
    
    if (mouseX > img8.left && mouseX < img8.right && mouseY > img8.top && mouseY < img8.bottom){
        col = 140;
        //this makes the sound play when clicked
        music.play();
    }
    
    
//Louisville  
    
    img9.top = img9.y;
    img9.left = img9.x;
    img9.right = img9.x + img9.size;
    img9.bottom = img9.y + img9.size;
    
    if (mouseX > img9.left && mouseX < img9.right && mouseY > img9.top && mouseY < img9.bottom){
        col = 20;
        //this makes the sound play when clicked
        horses.play();
    }
    
    
}