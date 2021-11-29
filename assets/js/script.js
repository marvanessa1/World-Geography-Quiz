var QuizQuestions = [{
    Question: "How many continents are on Earth?",
    AnswerChoices: ["5", "6", "7", "8" ],
    CorrectAnswer: "7"
    },

    {
    Question: "The largest island in the world is...",  
    AnswerChoices: ["New Guinea","Greenland", "Madagascar", "Victoria Island"],
    CorrectAnswer: "Greenland"  
    },

    {
    Question: "The largest island in the world is...",  
    AnswerChoices: ["New Guinea", "Greenland", "Madagascar", "Victoria Island"],
    CorrectAnswer: "Greenland"  
    },

    {
    Question: "The largest state in the United States is...",  
    AnswerChoices: ["Texas","California","Washington","Alaska"],
    CorrectAnswer: "Alaska"  
    },

    {
    Question: "What is the most common spoken language in the United States after English?",  
    AnswerChoices: ["Spanish","Chinese","Tagalog","Vietnamese"],
    CorrectAnswer: "Spanish"  
    },

    {
    Question: "Which ocean is located between North America and Europe",  
    AnswerChoices: ["Pacific Ocean","Blue Ocean","Atlantic Ocean","Indian Ocean"],
    CorrectAnswer: "Atlantic Ocean"  
    },

]

// Start Page

var mainContentEl = document.querySelector('.mainContent');

var QuizInstructions = document.createElement("h3");
var StartQuiz = document.createElement("button");

QuizInstructions.textContent = "Up for a challenge? You have 75 seconds to finish this quiz regarding word geography.  For razzle dazzle, incorrect answers will dock off 10 seconds from your timer, thus 10 seconds from your score";
StartQuiz.textContent = "Start";

mainContentEl.appendChild(QuizInstructions);
mainContentEl.appendChild(StartQuiz);

QuizInstructions.className = "mainContentHeader";
QuizInstructions.id = "QuizInstructions";
QuizInstructions.setAttribute("style", "margin:auto; padding 15px; line-height: 1.25");
StartQuiz.id = "StartQuizButton";

var StartQuizButton = document.querySelector('#StartQuizButton');
var QuizInstructionsEl = document.querySelector('#QuizIntructions');

// StartQuizButton.addEventListener("click", QuizCountdown);

// Clear Content

function clearMainContent(){
    mainContentEl.innerHTML = "";
};

function clearQuizCountdown (){
    var quizCountdown = document.querySelector('#QuizCountdown')
    quizCountdown.innerHTML = "";
}

function BeginQuiz(){

}

function DeliverQuestion (){

}

function DeliverNextQuestion (){

}

function QuizCountdown (){

}

function FinishQuiz (){

}

function IncompleteQuiz(){

}

function RestartQuiz (){

}





