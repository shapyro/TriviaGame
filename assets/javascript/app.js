//  Questions and Answer Objects
//  Timer for each question
//  if timer or answer is selected, display win or loss for a few seconds

//  Question and Answer Objects
var qaArray = [{
  question: "What is the largest planet in our Solar System?",
  choice: [
    "Jupiter",
    "Mars",
    "Venus",
    "Saturn"],
  answer: 0
  },{
  question: "What is the only planet we can live on comfortably?",
  choice: [
    "Earth",
    "Uranus",
    "Mercury",
    "Pluto"],
  answer: 0
  },{
  question: "What is the most prominent gaseous element in Earth's atmoshpere?",
  choice: [
    "Argon",
    "Oxygen",
    "Nitrogen",
    "Krypton"],
  answer: 2
  },{
  question: "What recent Zodiac sign did NASA declare, altering many relationships",
  choice: [
    "Taurus",
    "Gemini",
    "Aquarius",
    "Ophiuchus"],
  answer: 3
}];

  //    <div id=time>Time Remaining:</div>
  //    <div id=question>Question</div>

$(document).ready(function(){

  //  Start Game
  $("#start").click(function() {
    $("#start").hide();
    setTimer();
    qaDisplay();
  });
  
  function setTimer(){
    var timer = 60;
    var intervalID;

    var timeLeft = $("<div>");
    $(timeLeft).addClass('time-left');
    $(timeLeft).html("<h2>Time Remaining: " + timer + "</h2>");
    $(".content").append(timeLeft);

    function run() {
      intervalId = setInterval(decrement, 1000);
    }
    function decrement() {
      timer--;
      $(timeLeft).html("<h2>Time Remaining: " + timer + "</h2>");
      if (timer === 0) {
        stop();
        alert("Time Up!");
      }
    }

    //  STOP BUTTON FOR TESTING PURPOSES
    $("#stop").click(function(){
      stop();
    });
    //

    function stop() {
      clearInterval(intervalId);
    }
    run();
  }

  
  //  array check
  console.log(qaArray[1].answer);
  //  Need to get Divs appended with Questions
  //  Divs need to be selectable
  function qaDisplay() {
    var display =  $("<div>");
    $(display).addClass('qaDisplay');
    $(display).text(qaArray[0].question);
    $('.content').append(display);
    for (var i = 0; i < qaArray[0].choice.length; i++) {
      var choiceDiv = $('<div>');
      $(choiceDiv).addClass('choices');
      $(choiceDiv).text(qaArray[0].choice[i]);
      $('.qaDisplay').append(choiceDiv);
    }
  }

//  GAME END  
});



