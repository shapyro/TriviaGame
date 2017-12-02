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
  img: "./images/jupiter.png"
  },{
  question: "What is the only planet we can live on comfortably?",
  choice: [
    "Earth",
    "Uranus",
    "Mercury",
    "Pluto"],
  answer: "Earth",
  img: "./images/earth.jpg"
  },{
  question: "What is the most prominent gaseous element in Earth's atmoshpere?",
  choice: [
    "Argon",
    "Oxygen",
    "Nitrogen",
    "Krypton"],
  answer: "Nitrogen",
  img: "./images/Nitrogen-Symbol.jpg"
  },{
  question: "What recent Zodiac sign did NASA declare, altering many relationships",
  choice: [
    "Taurus",
    "Gemini",
    "Aquarius",
    "Ophiuchus"],
  answer: "Ophiuchus",
  img: "./images/ophiucus.jpg"
}];

$(document).ready(function(){


  //  Start Game
  $("#start").click(function() {
    $("#start").hide();
    restart();
    next();
  });

  var intervalId; // = setInterval(function(){restart()}, 1000);
  
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
      if (qCount < qaArray.length) {
        restart();
        next();
      } 
      // restart();
      // next();
      gameEnd();
       //keepGoing();
    }
  }

  //   //  STOP BUTTON FOR TESTING PURPOSES
  //   $("#stop").click(function(){
  //     stop();
  //   });
  //   //

  //   function stop() {
  //     clearInterval(intervalId);
  //     timer = 0;
  //   }
  //   stop();
  //   run();
  // }
    
  var qCount = 0;

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
      var userGuess = $(this).text();
      yes();
      gameEnd();
        

      function yes(){
        if (userGuess === qaArray[qCount].answer) {
          correct++;
          console.log(userGuess);
          console.log("correct: " + correct);
          qCount++;
          stop();
          $('.content').empty();
          if (qCount < qaArray.length) {
            restart();
            next();
          } 
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
        if (qCount < qaArray.length) {
          restart();
          next();
        }    
      }
    });
  }

  // function keepGoing() {
  //   if (qCount <= qaArray.length ) {
  //     next();
  //   }
  //   if ($('.qaDisplay').length > 0) {
  //     restart();
  //     //  setTimer();
  //   }
  // }

  //  Still need to show image of correct answer with an intermission

  //  GAME END  
  function gameEnd() {
    if ((correct + incorrect + unanswered) === qaArray.length) {
        clearInterval(intervalId);
        var closeOut =    $("<div>");
        $(closeOut).addClass('finalDisplay');
        $(closeOut).html(
            `<div>${"Correct: " + correct}</div>
             <div>${"Incorrect: " + incorrect}</div>
             <div>${"Unanswered: " + unanswered}</div>
            `
        );
        $('.content').append(closeOut);
        //    <img src=${?}/>    
        restartGame();    
    }
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



