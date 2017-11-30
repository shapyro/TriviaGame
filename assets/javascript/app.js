//  Questions and Answer Objects
//  Timer for each question
//  if timer or answer is selected, display win or loss for a few seconds

correct = 0;
incorrect = 0;
unanswered = 0;

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

$(document).ready(function(){

  //  Start Game
  $("#start").click(function() {
    $("#start").hide();
    setTimer();
    next();
    //  qaDisplay();
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
      checkTime();
    }

    function checkTime() {
      if (timer === 0) {
        unanswered++;
        qCount++;
        stop();
        $('.content').empty();
        keepGoing();
        console.log(timer);
      }
    }

    //  STOP BUTTON FOR TESTING PURPOSES
    $("#stop").click(function(){
      stop();
    });
    //

    function stop() {
      clearInterval(intervalId);
      timer = 0;
    }
    run();
  }

  //  Display Questions and Answers
  //  function qaDisplay() {
    
    var qCount = 0;
    //  next();

    function next(){
      var display =  $("<div>");
      $(display).addClass('qaDisplay');
      //  show question
      $(display).text(qaArray[qCount].question);
      $('.content').append(display);
      //  loop through choice array and create choice divs
      for (var i = 0; i < qaArray[qCount].choice.length; i++) {
        var choiceDiv = $('<button>');
        $(choiceDiv).addClass('choices');
        $(choiceDiv).text(qaArray[qCount].choice[i]);
        $('.qaDisplay').append(choiceDiv);
        clickBtn();
      }
    }

    //  click a choice to see if you got the answer
    function clickBtn(){
      $('.choices').unbind().click(function (){
        //  probably need correct/incorrect functions
        var userGuess = $(this).text();
        yes();
        

        function yes(){
          if (userGuess === qaArray[qCount].answer) {
            correct++;
            console.log(userGuess);
            console.log("correct: " + correct);
            qCount++;
            stop();
            $('.content').empty();
            if (qCount < qaArray.length) {
              setTimer();
              next();
            } 
          } else {
            no();
          }
          gameEnd();
        }
        function no() {
            incorrect++;
            console.log(userGuess);
            console.log("incorrect: " + incorrect);
            qCount++;
            stop();
            $('.content').empty();
            //  keepGoing();
            //  gameEnd();
            if (qCount < qaArray.length) {
              setTimer();
              next();
            }   
        }

      });
    }
  //  }

  function keepGoing() {
    if (qCount <= qaArray.length ) {
      next();
    }
    if ($('.qaDisplay').length > 0) {
      setTimer();
    }
  }
  //  Still need to display wins/losses/unanswered
  //  Still need to show image of correct answer with an intermission
  //  Is the timer still running from previous Trivia questions???

//  GAME END  
//  gameEnd();

function gameEnd() {
  if ((correct + incorrect + unanswered) === qaArray.length) {
    stop();
    var closeOut =  $("<div>");
    $(closeOut).addClass('finalDisplay');
    //  show question
    $(closeOut).html(
      '<h2> Correct: ' + correct + '</h2>'
      + '<h2> Incorrect ' + incorrect + '</h2>'
      + '<h2> Unanswered ' + unanswered + '</h2>'
    )
    $('.content').append(closeOut);

    // $(".content").append(
    //   `<div>${correct}</div>
    //    <div>${incorrect}</div>
    //    <div>${unanswered}</div>
    //   `
    // );
    //  <img src=${response.Poster}/>
      
  }
}
});



