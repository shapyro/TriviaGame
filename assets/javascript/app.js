//  Question and Answer Objects
//  Timer for each question
//  if timer ends or answer is selected, display correct answer for a few seconds

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
  answer: "Jupiter",
  img: "assets/images/jupiter.png"
  },{
  question: "What is the only planet we can live on comfortably?",
  choice: [
    "Earth",
    "Uranus",
    "Mercury",
    "Pluto"],
  answer: "Earth",
  img: "assets/images/earth.jpg"
  },{
  question: "What is the most prominent gaseous element in Earth's atmoshpere?",
  choice: [
    "Argon",
    "Oxygen",
    "Nitrogen",
    "Krypton"],
  answer: "Nitrogen",
  img: "assets/images/Nitrogen-Symbol.jpg"
  },{
  question: "What recent Zodiac sign did NASA declare, altering many relationships",
  choice: [
    "Taurus",
    "Gemini",
    "Aquarius",
    "Ophiuchus"],
  answer: "Ophiuchus",
  img: "assets/images/ophiucus.jpg"
}];

$(document).ready(function(){

  //  Start Game
  $("#start").click(function() {
    $("#start").hide();
    restart();
    next();
  });

  var intervalId;
  
  function restart() {
    clearInterval(intervalId)
    //  SET TIMER HERE:
    timer = 10;

    var timeLeft = $("<div>");
    $(timeLeft).addClass('time-left');
    $(timeLeft).html("<h2>Time Remaining: " + timer + "</h2>");
    $(".content").append(timeLeft);
    
    intervalId = setInterval(function() {
      timer--;
      $(timeLeft).html("<h2>Time Remaining: " + timer + "</h2>");
      checkTime();
    }, 1000);
  }

  function checkTime() {
    if (timer === 0) {
      unanswered++;
      qCount++;
      $('.content').empty();
      showAnswer();
      intermission();
    }
  }
    
  var qCount = 0;
  var correctAnswer;
  var correctImg;

  function next(){
    var display =  $("<div>");
    $(display).addClass('qaDisplay');
    //  show question
    $(display).text(qaArray[qCount].question);
    correctAnswer = qaArray[qCount].answer;
    correctImg = qaArray[qCount].img;
    $('.content').append(display);
    //  loop through choice array and create choice divs to be presented
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
      var userGuess = $(this).text();
      yes();
      showAnswer();
      intermission();

      function yes(){
        if (userGuess === qaArray[qCount].answer) {
          correct++;
          console.log(userGuess);
          console.log("correct: " + correct);
          qCount++;
          $('.content').empty();
        } else {
          no();
        }
      }

      function no() {
        incorrect++;
        console.log(userGuess);
        console.log("incorrect: " + incorrect);
        qCount++;
        $('.content').empty();  
      }
    });
  }

  function showAnswer () {
    //  answer
    answerDiv = $('<div>')
    $(answerDiv).addClass('answer');
    $(answerDiv).html('The correct answer is: ' + correctAnswer);
    $('.content').append(answerDiv);
    //  image
    answerImg = $('<img>');
    $(answerImg).attr('id', 'correctImg');
    $(answerImg).attr('src', correctImg);
    $('.content').append(answerImg);
  }
  
  //  allow answer to be presented befor proceeding
  function intermission () {
    setTimeout(function(){
      $('.content').empty();
      if ((correct + incorrect + unanswered) === qaArray.length) {
        gameEnd();
      } else {
        restart();
        next();
      }    
    }, 5000);
  }

  //  GAME END  
  function gameEnd() {
    clearInterval(intervalId);
    var closeOut = $("<div>");
    $(closeOut).addClass('finalDisplay');
    $(closeOut).html(
      `<div>${"Correct: " + correct}</div>
      <div>${"Incorrect: " + incorrect}</div>
      <div>${"Unanswered: " + unanswered}</div>
      `
    );
    $('.content').append(closeOut);   
    restartGame();    
  }

  function restartGame() {
    qCount = 0;
    correct = 0;
    incorrect = 0;
    unanswered = 0;
    var startOver = $("<button>")
    $(startOver).addClass('startOver');
    $(startOver).text('START OVER');
    $('.content').append(startOver);
    $(startOver).click(function() {
      $('.startOver').hide();
      $('.content').empty();
      restart();
      next();
      });
    }
});



