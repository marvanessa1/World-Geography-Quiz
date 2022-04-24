//HTML elemements by Id

// header
var timerEl = document.getElementById('timer')

// Welcome section
var welcomeEl = document.getElementById('welcomeMessage');
var startButton = document.getElementById('startButton');

// Question section

var questionsEl = document.getElementById('quizQuestions');
var answerButton1 = document.getElementById('answerButton1');
var answerButton2 = document.getElementById('answerButton2');
var answerButton3 = document.getElementById('answerButton3');
var answerButton4 = document.getElementById('answerButton4');
var answerChoiceEl = document.getElementById('answerResult')

// Results section: form

var resultsFormEl = document.getElementById('resultsForm');
var finalScoreEl = document.getElementById('finalScore');
var initialsEL = document.getElementById('scoreInitials');
var submitScoreEl = document.getElementById('submitScore')

// quiz questions object containing: question, answer, and correct answer arrays

var quizQuestions = [{
    question: "How many continents are on Earth?",
    answer: ["5", "6", "7", "8" ],
    correctAnswer: "7"
    },

    {
    question: "The largest island in the world is...",  
    answer: ["New Guinea","Greenland", "Madagascar", "Victoria Island"],
    correctAnswer: "Greenland"  
    },

    {
    question: "The largest island in the world is...",  
    answer: ["New Guinea", "Greenland", "Madagascar", "Victoria Island"],
    correctAnswer: "Greenland"  
    },

    {
    question: "The largest state in the United States is...",  
    answer: ["Texas","California","Washington","Alaska"],
    correctAnswer: "Alaska"  
    },

    {
    question: "What is the most common spoken language in the United States after English?",  
    answer: ["Spanish","Chinese","Tagalog","Vietnamese"],
    correctAnswer: "Spanish"  
    },

    {
    question: "Which ocean is located between North America and Europe",  
    answer: ["Pacific Ocean","Blue Ocean","Atlantic Ocean","Indian Ocean"],
    correctAnswer: "Atlantic Ocean"  
    },

]

// function to start timer

function startTimer() {
    var timeLeft = 75;
  
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
      // As long as the `timeLeft` is greater than 1

        // Set the `textContent` of `timerEl` to show the remaining seconds
        timeLeft--;
        timerEl.textContent = timeLeft;
    
        if (timeLeft <= 0) {
        // Once `timeLeft` gets to 0, set `timerEl` to an empty string
        timerEl.textContent = '';
        // Use `clearInterval()` to stop the timer
        clearInterval(timeInterval);
        endQuiz()
      }
    }, 1000);
  }

  

  function endQuiz(){

  }







