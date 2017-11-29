//  Questions and Answer Objects
//  Timer for each question
//  if timer or answer is selected, display win or loss for a few seconds

//  Question and Answer Object Array
var qaArray = [{
  question: "What is the largest planet in our Solar System?",
  choice: [
    "Jupiter",
    "Mars",
    "Venus",
    "Saturn"],
  answer: "Jupiter"
  },{
  question: "What is the only planet we can live on comfortably?",
  choice: [
    "Earth",
    "Uranus",
    "Mercury",
    "Pluto"],
  answer: "Earth"
  },{
  question: "What is the most prominent gaseous element in Earth's atmoshpere?",
  choice: [
    "Argon",
    "Oxygen",
    "Nitrogen",
    "Krypton"],
  answer: "Nitrogen"
  },{
  question: "What recent Zodiac sign did NASA declare, altering many relationships",
  choice: [
    "Taurus",
    "Gemini",
    "Aquarius",
    "Ophiuchus"],
  answer: "Ophiuchus"
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
    var timer = 20;
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
        let timer = 0;
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

  //  Display Questions and Answers
  function qaDisplay() {
    
    var qCount = 0;
    next();

    function next(){
      var display =  $("<div>");
      $(display).addClass('qaDisplay');
      //  show question
      $(display).text(qaArray[qCount].question);
      $('.content').append(display);
      //  loop through choice array and create choice divs
      for (var i = 0; i < qaArray[qCount].choice.length; i++) {
        var choiceDiv = $('<div>');
        $(choiceDiv).addClass('choices');
        $(choiceDiv).text(qaArray[qCount].choice[i]);
        $('.qaDisplay').append(choiceDiv);
        click();
      }
    }

    //  click a choice to see if you got the answer
    function click(){
      $('.choices').click(function (){
        console.log($(this).text());
        if ($(this).text() === qaArray[qCount].answer) {
          alert("correct!");
          qCount++;
          stop();
          $('.content').empty();
          if (qCount < qaArray.length) {
            setTimer();
            next();
          }
        }
      });

    }

  }

//  GAME END  
});



