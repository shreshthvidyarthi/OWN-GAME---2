var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;

var player, form,game;
var player1,player2;
var players;
var enemy , enemyGroup ; 

var city1 , city2 , city3, city4 , city5 , city6 , city7 , city8 , city9 , city10 , city11 , city12 , city13 , city14 ;
var doc1  , doc2 , doc3 , doc4 , doc5 , doc6 , doc7 , doc8 , doc9 ;

function preload(){
  player1Image = loadImage("PLAYERS/PLAYER1.png")
  player2Image = loadImage("PLAYERS/PLAYER2.png")
  
  enemy1Img = loadImage("ENEMY/V- 1.png")
  enemy2Img = loadImage("ENEMY/v-2.png")
  enemy3Img = loadImage("ENEMY/v-3.png")
  
  city1Img = loadImage("CITIZENS/C - 1.png")
  city2Img = loadImage("CITIZENS/C-2.png")
  city3Img = loadImage("CITIZENS/C-3.png")
  city4Img = loadImage("CITIZENS/C-4.png")
  city5Img = loadImage("CITIZENS/C-5.png")
  city6Img = loadImage("CITIZENS/C-6.png")
  city7Img = loadImage("CITIZENS/C-7.png")
  city8Img = loadImage("CITIZENS/C-8.png")
  city9Img = loadImage("CITIZENS/C-9.png")
  city10Img = loadImage("CITIZENS/C-10.png")
  city11Img = loadImage("CITIZENS/C-11.png")
  city12Img = loadImage("CITIZENS/C-12.png")
  city13Img = loadImage("CITIZENS/C-13.png")
  city14Img = loadImage("CITIZENS/C-14.png")
 
  doc1Img = loadImage("DOCTORS/M-1.png")
  doc2Img = loadImage("DOCTORS/M-2.png")
  doc3Img = loadImage("DOCTORS/M-3.png")
  doc4Img = loadImage("DOCTORS/M-4.png")
  doc5Img = loadImage("DOCTORS/M-5.png")
  doc6Img = loadImage("DOCTORS/M-6.png")
  doc7Img = loadImage("DOCTORS/M-7.png")
  doc8Img = loadImage("DOCTORS/M-8.png")
  doc9Img = loadImage("DOCTORS/M-9.png")
  
  pol1Img = loadImage("POLICE/P-1.png")
  pol2Img = loadImage("POLICE/P-2.png")
  pol3Img = loadImage("POLICE/P-3.png")
  pol4Img = loadImage("POLICE/P-4.png")
  pol5Img = loadImage("POLICE/P-5.png")
  pol6Img = loadImage("POLICE/P-6.png")
  pol7Img = loadImage("POLICE/P-7.png")
  pol8Img = loadImage("POLICE/P-8.png")
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  enemyGroup = new Group()


}

function draw() {
  background("white");
  
   if (playerCount === 2) {
     game.update(1);
   }
   if (gameState === 1) {
     clear(); 
     game.play();
   }
   if (gameState === 2) {
    
     game.end();
   }
}
