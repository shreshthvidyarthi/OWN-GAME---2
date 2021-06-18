class Game{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
            if (gameState === 0) {
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    player.getCount();
                }
                form = new Form()
                form.display();
            }
    player1 = createSprite(windowWidth/2+50 ,windowHeight/2+50);
    player1.addImage("player1",player1Image);
    player1.scale = 1.5
    
    player2 = createSprite(windowWidth/2+50 ,windowHeight/2+50);
    player2.addImage("player2", player2Image);
    players=[player1,player2];
    player2.scale = 1.5

    city1 = createSprite(150,windowHeight-150)
    city1.addImage("city1",city1Img)

    city2 = createSprite(400,windowHeight-150)
    city2.addImage("city2",city2Img)
    city2.scale = 4
    
    city3 = createSprite(650,windowHeight-150)
    city3.addImage("city3",city3Img)
    city3.scale = 2.2

    city4 = createSprite(900,windowHeight-150)
    city4.addImage("city4",city4Img)
    city4.scale = 3.9

    city5 = createSprite(1150,windowHeight-150)
    city5.addImage("city5",city5Img)
    city5.scale = 3
    
    city6 = createSprite(1550,windowHeight-150)
    city6.addImage("city6",city6Img)
    city6.scale = 2.8

    city7 = createSprite(2000,windowHeight-150)
    city7.addImage("city7",city7Img)
    city7.scale = 3.8

    city8 = createSprite(2400,windowHeight-150)
    city8.addImage("city8",city8Img)
    city8.scale = 4

    city9 = createSprite(2800,windowHeight-200)
    city9.addImage("city9",city9Img)
    city9.scale = 3.9

    city10= createSprite(3200,windowHeight-110)
    city10.addImage("city10",city10Img)
    city10.scale = 3

    city11 = createSprite(3700,windowHeight-150)
    city11.addImage("city11",city11Img)
    city11.scale = 3

    city12 = createSprite(4000,windowHeight-150)
    city12.addImage("city12",city12Img)
    city12.scale = 4

    city13 = createSprite(4400,windowHeight-150)
    city13.addImage("city13",city13Img)
    city13.scale = 3

    city14 = createSprite(4800,windowHeight-150)
    city14.addImage("city14",city14Img)
    city14.scale = 4

    doc1 = createSprite(150, windowHeight-600)
    doc1.addImage("doc1",doc1Img)

    doc2 = createSprite(750, windowHeight-600)
    doc2.addImage("doc2",doc2Img)

    doc3 = createSprite(1350, windowHeight-600)
    doc3.addImage("doc3",doc3Img)

    doc4 = createSprite(1950, windowHeight-600)
    doc4.addImage("doc4",doc4Img)

    doc5 = createSprite(2400, windowHeight-600)
    doc5.addImage("doc5",doc5Img)

    doc6 = createSprite(2850, windowHeight-600)
    doc6.addImage("doc6",doc6Img)

    doc7 = createSprite(3300, windowHeight-600)
    doc7.addImage("doc7",doc7Img)

    doc8 = createSprite(3750, windowHeight-600)
    doc8.addImage("doc8",doc8Img)

    doc9 = createSprite(4250, windowHeight-600)
    doc9.addImage("doc9",doc9Img)

    

        }
    
    play(){
        
                form.hide();

                Player.getPlayerInfo();
                 
                 var x =windowWidth/2
                 var y= windowHeight/2
                 var index =0;
                 drawSprites();
                 for(var plr in allPlayers){
                    
                    
                     index = index+1;
                     x = windowWidth/2-allPlayers[plr].distance;
                     y=windowHeight/2;
                     
                     players[index -1].x = x;
                     players[index - 1].y = y;
                       
                     if(index === player.index){
                         
                        fill("black");
                        textSize(25);
                        text(allPlayers[plr].name ,x-25,y+25);

                         
                     }
                    
                      fill("white");
                     textSize(25);
                     text("Player :" + index + allPlayers[plr].score, 100,400 );
                 

                     
                 
                 }
                
                
                 

                if (keyIsDown(RIGHT_ARROW) && player.index !== null) {
                    player.distance -= 10
                    player.update();
                }
                if (keyIsDown(LEFT_ARROW) && player.index !== null) {
                    player.distance += 10
                    player.update();
                }
            
                 if (frameCount % 20 === 0) {
                     enemy = createSprite(random(100, windowWidth-50), 0, 100, 100);
                     enemy.velocityY = 6;
                     var rand = Math.round(random(1,3));
                     switch(rand){
                         case 1: enemy.addImage("enemy1",enemy1Img);
                         break;
                         case 2: enemy.addImage("enemy2", enemy2Img);
                         break;
                         case 3: enemy.addImage("enemy3", enemy3Img);
                         break;
                         
                     }
                     enemyGroup.add(enemy);
                     enemy.scale = 0.8
                 }
                 
                  if (player.index !== null) {
                     
                     for(var i=0;i<enemyGroup.length;i++){
                        if(enemyGroup.get(i).isTouching(players[player.index-1])){
                            
                           enemyGroup.get(i).destroy();
                     
                     console.log(player1);
                     player.update();
                        }
                    }
                    }
                
                  

         
         
        
         

    }

    end(){
       console.log("Game Ended");
    }
}