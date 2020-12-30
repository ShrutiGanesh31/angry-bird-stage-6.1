/*var boolean = "Shruti";
console.log(boolean)
var object = null;
console.log(object);
var object1;
console.log(object1);
var Array1 = [45,46,76,31,21];
console.log(Array1[3]);
var Array2=["whitehatjr",46,21,false,null,object1];
console.log(Array2);
var Array3=[[46,7,6,0,9],Array2,76,"WHJR"];
console.log(Array3[1][2]);
Array3.push(76);
console.log(Array3);
Array2.pop();
console.log(Array2);*/
const Constraint= Matter.Constraint;

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var backgroundimg;
var engine, world;
var box1,box2,box3,box4,box5;
var pig1,pig2;
var log1,log2,log3,log4;
var bird;
var slingshot;
var platform;
var gameState=0;
var score = 0;
function preload(){
   backgroundimg=loadImage("images/bg.png");
   // getBackground();
}
function setup(){
    
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);

    platform=new Ground(150,455,300,270);

    box1 = new Box(700,520,70,70);
    box2 = new Box(920,520,70,70);
    pig1 = new Pig(810,520);
    log1 = new Log(810,460,20,300,PI/2);
    
    box3 = new Box(700,440,70,70);
    box4 = new Box(920,440,70,70);
    pig2 = new Pig(810,440);
    log2 = new Log(810,420,20,300,PI/2);
    box5 = new Box(810,360,70,70);
    log3 = new Log(760,320,20,150,PI/7);
    log4 = new Log(870,320,20,150,-PI/7);

    bird= new Abird(200,150,50,50);
    
    
    slingshot=new Slingshot(bird.body,{x:200,y:150})
    
}

function draw(){
  if(backgroundimg)  
  background(backgroundimg);
  textSize(35);
  fill("white");
  text("SCORE: "+score,width-300,50);

    Engine.update(engine);
    
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    pig1.scoring();
    log1.display();
    box3.display();
    box4.display();
    box5.display();
    pig2.display();
    pig2.scoring();
    log2.display();
    log3.display();
    log4.display();
    bird.display(); 
    slingshot.display();  
    platform.display(); 
}

function mouseDragged(){
    if(gameState==0){
    Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY});
}
}
function mouseReleased(){
    slingshot.fly();
    gameState=1;
}
function keyPressed(){
    if(keyCode==27&&bird.body.speed<1){
        bird.path=[];
        Matter.Body.setPosition(bird.body,{x:200,y:150});
     slingshot.attach(bird.body); 
     bird.visible=255; 
     gameState=0; 

    }
}

async function getBackground(){
    var response =await fetch("https://worldtimeapi.org/api/timezone/Asia/kolkata");
    var responseJSON = await response.json();
    var daytime=responseJSON.datetime;
    var hour = daytime.slice(11,13);
    console.log(hour);
    if(hour>=07&&hour<17){
        bg="images/bg.png"
    }
    else
    {bg="images/bg2.jpg"
    
}
backgroundimg=loadImage(bg);

}




