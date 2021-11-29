var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
var 

var timer;
var timerCount;

var QuizQuestions = [{
    Question: "How many continents are on Earth?",
    AnswerChoices: [
        "5",
        "6",
        "7",
        "8"
    ],
    CorrectAnswer: "7"
    },
    {
    Question: "The largest island in the world is...",  
    AnswerChoices: [
        "New Guinea",
        "Greenland",
        "Madagascar",
        "Victoria Island"
    ],
    CorrectAnswer: "Greenland"  
    },
    {
    Question: "The largest island in the world is...",  
    AnswerChoices: [
        "New Guinea",
        "Greenland",
        "Madagascar",
        "Victoria Island"
    ],
    CorrectAnswer: "Greenland"  
    },
     {
    Question: "The largest state in the United States is...",  
    AnswerChoices: [
        "Texas",
        "California",
        "Washington",
        "Alaska"
    ],
    CorrectAnswer: "Alaska"  
    },
    {
    Question: "What is the most common spoken language in the United States after English?",  
    AnswerChoices: [
        "Spanish",
        "Chinese",
        "Tagalog",
        "Vietnamese"
    ],
    CorrectAnswer: "Spanish"  
    },
    {
    Question: "Which ocean is located between North America and Europe",  
    AnswerChoices: [
        "Pacific Ocean",
        "Blue Ocean",
        "Atlantic Ocean",
        "Indian Ocean"
    ],
    CorrectAnswer: "Atlantic Ocean"  
    },
]

startButton.addEventListener("click", startQuiz);