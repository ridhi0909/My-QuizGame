class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
   question.hide();
    
    //write code to change the background color here
    background("yellow");
    //write code to show a heading for showing the result of Quiz
    fill("Blue");
    textSize(40);
    text("Results of the quiz!")
    //call getContestantInfo( ) here
    Contestant.getPlayerInfo();

    //write condition to check if contestantInfor is not undefined

    //write code to add a note here
    if (allContestants !== undefined){
      var ypos = 250
      fill("Red");
      textSize(20);
      text("* NOTE: Contestent who answered correct are hilighted in green!", 130, 230);
      
      for(var plr in allContestants){
        var correctAns = "2";
        if (correctAns === allContestants[plr].answer){
        fill("Green");}
        else{
          fill("Red");
        }
        textSize(15);
        text(allContestants[plr].name+":"+ allContestants[plr].answer, 250, ypos);
        ypos= ypos+40
      }

    }
    //write code to highlight contest who answered correctly
    
  }

}
