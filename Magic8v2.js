var answers = ["Yes, absolutely", "Maybe", "Don't even think about it!", "I'm not sure", "Ask me again", "I have a good feeling about this", "Are you kidding?", "You are crazy!", "Why not!"];
playerquestion  = false ;
var index = 0;
setText("answerOutput", "Are you the player or programmer?");
var previousanswers = [];
 for(var j = 0 ; j < answers.length;j++){
   appendItem(previousanswers,answers[j]);
 }
onEvent("programmerbutton","click",function(){
 
  createResponses();
  setScreen("Gameover");
  setText("Gameovertext","Original: " + previousanswers); 
  setText("gameover2","Updated: " + answers); 
  
});
onEvent("PlayerButton","click",function(){
  getResponse(answers);
  if(answers.length == 0){
    setScreen("Gameover");
    setText("Gameovertext","Original: " + previousanswers); 
    setText("gameover2","Updated: " + answers); 
  }
});
onEvent("End","click",function(){
    setScreen("Gameover");
    setText("Gameovertext","Original: " + previousanswers); 
    setText("gameover2","Updated: " + answers); 
});


function createResponses(){
  appendItem(answers, "Definetley");
  appendItem(answers, "Depends");
  appendItem(answers, "Sure");
}

function getResponse(list){
  index =  randomNumber(0,list.length-1);
  setText("answerOutput", list[index]);
  removeItem(list, index);
  return list;
}
