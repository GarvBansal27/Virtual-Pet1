//Create variables here
var dog, happyDog, database, foodS, foodStock;
var dogImage, happyDogImage;

function preload()
{
  //load images here
  dogImage=loadImage("images/doglmg.png");
  happyDogImage=loadImage("images/doglmg1.png");
}

function setup() {
  database=firebase.database();
  
  dog=createSprite(250,250,20,50);
  dog.addImage("dog",dogImage);

  foodStock=databse.ref('food');
  foodStock.on("value",readStock);
  
}


function draw() {  
  createCanvas(500, 500);
  background(46,139,87);

  if(keyDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage("dog",happyDogImage);
    foodStock=foodStock-1;
  }

  drawSprites();

  //add styles here
  textSize(10);
  fill("red");
  stroke(4);
  text("Note:Press UP_ARROW Key to Feed Drago Milk!");

}

function readStock(data){
  food=data.val();
}

function writeStock(x){
  database.ref('/').update({
    food:x
  })
}

