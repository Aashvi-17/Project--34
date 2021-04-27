//Create variables here
var dog,happydog;
 
var database;
var foodS,foodStock;;
var score=foodS=20;
 
function preload()
{
	dog=loadImage("dogImg.png");
  happydog=loadImage("dogImg1.png");
  milk=loadImage("milk.png");

  barking=loadSound("barking.mp3");
}

function setup() {
 
	createCanvas(500, 500);
  Doggie=createSprite(250,240,10,10);
  Doggie.addImage(dog);
  Doggie.scale=0.5;

  milk1=createSprite(200,450,10,10);
  milk1.addImage(milk);
  milk1.scale=0.1;


  milk2=createSprite(220,450,10,10);
  milk2.addImage(milk);
  milk2.scale=0.1;


  milk3=createSprite(240,450,10,10);
  milk3.addImage(milk);
  milk3.scale=0.1;


  milk4=createSprite(260,450,10,10);
  milk4.addImage(milk);
  milk4.scale=0.1;


  milk5=createSprite(280,450,10,10);
  milk5.addImage(milk);
  milk5.scale=0.1;

  database=firebase.database();
  foodStock=database.ref('Food');
  foodStock.on("value", readStock);
 
}


function draw() {  
background(46,139,87);

  
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    Doggie.addImage(happydog);
    barking.play();
    milk1.visible=false;
    score=score-1;
}

drawSprites();

strokeWeight(5);
textSize(15);
stroke("red");
fill("white");

text("Food Remainig : " + foodS,180,490);
textSize(15);
text("You have " + score + " chances",200,20);
text("Feed Dodo",230,40);
}
function readStock(data){
  foodS=data.val();
}
function writeStock(x){
if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
  database.ref('/').update({
    Food: x
  })






}

