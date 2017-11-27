//  Questions and Answer Objects
//  Timer for each question
//  if timer or answer is selected, display win or loss for a few seconds

//  Question and Answer Objects
var q1 = {
  question: "What is the largest planet in our Solar System?",
  answer: [
    "Jupiter",
    "Mars",
    "Venus",
    "Saturn"
  ]
}
var q2 = {
  question: "What is the only planet we can live on comfortably?",
  answer: [
    "Earth",
    "Uranus",
    "Mercury",
    "Pluto"
  ]
}
var q3 = {
  question: "What is the most prominent gasious element in Earth's atmoshpere?",
  answer: [
    "Argon",
    "Oxygen",
    "Nitrogen",
    "Krypton"
  ]
}
var q4 = {
  question: "What recent Zodiac sign did NASA declare, altering many relationships",
  answer: [
    "Taurus",
    "Gemini",
    "Aquarius",
    "Ophiuchus"
  ]
}

$(document).ready(function(){

  setTimer();

  function setTimer(){
    var timer = 60;
    var intervalID;

    function run() {
      intervalId = setInterval(decrement, 1000);
    }
    function decrement() {
      timer--;
      $("#time").html("<h2>Time Remaining: " + timer + "</h2>");
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


});



