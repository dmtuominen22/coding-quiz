/*assignment to create a quiz with a start button timer answer questions answer question time is substracted if wrong answer game if out of questions or time runs out, save my initials and  show high score on home screen of the quiz.*/

var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var questionEl = document.getElementById("question");
var validate = document.getElementById("validate");
var currentQ = 0;
var countTime = document.getElementById("timer");
var time =0;
var myTimer;
var title = document.getElementById("title");
var intro = document.getElementById("intro");
var highScore = new Array();
var addHighScore =document.getElementById("addHighScore");

var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");




//keeping track of score
var score = 0;

var question = [
    {
        question : "What does CSS stand for",
        choiceA : "Cascade Style Sheet",
        choiceB : "Covert Styles Sheet",  
        choiceC : "Cascadeing Style Sheet",    
        choiceD : "Color and Style Sheet",
        correct : "A"
    },

    {
        question : "What are people who write computer code called?",
        choiceA : "Manufacturers",
        choiceB : "Teacher",
        choiceC : "Programmers",
        choiceD : "Professors",
        correct : "C"
    },  

    {
        question : "What are variables used for in JavaScript Programs?",
        choiceA : "Storing numbers, dates, or other values",
        choiceB : "Varying randomly",
        choiceC : "Causing high-school algebra flashbacks",
        choiceD: "None of the above",
        correct: "A"
    },

    {
        question: "What group of tags are used to define the text headers in the body of the HTML document?",
        choiceA: "&lt;td&gt;",
        choiceB: "&lt;footer&gt;",
        choiceC: "&lt;h1&gt; to &lt;h6&gt;",
        choiceD: "&lt;button&gt;",
        correct: "C"
    },

    {
        question: "Which of thses is NOT a programming language?",
        choiceA: "Python",
        choiceB: "Java",
        choiceC: "Ruby",
        choiceD: "Banana",
        correct: "D"
    },  

    {
        question: "What word describes the set of instructions that computers need to do work?",
        choiceA: "Blueprint",
        choiceB: "Agenda",
        choiceC: "Program",
        choiceD: "Synopsis",
        correct: "C"
    },  

    {
        question: "What is computer coding?",
        choiceA: "A list of functions",
        choiceB: "Telling a compuer what to do",
        choiceC: "A TV show",
        choiceD: "A radio show",
        correct: "B"
    },  

    {
        question: "What tag is used to define a hyperlink, or link to anoher page?",
        choiceA: "&lt;strong&gt;",
        choiceB: "&lt;em&gt;",
        choiceC: "&lt;blockquote&gt;",
        choiceD: "&lt;a&gt;",
        correct: "D"
    },  

    {
        question: "What can loop offer JaveScript code as a whole?",
        choiceA: "improved performance",
        choiceB: "Added plug-ins",
        choiceC: "Cleaner syntax",
        choiceD: "Cross-platform support",
        correct: "A"
    },  

    {
        question: "Inside which HTML element do we put the JavaScript?",
        choiceA: "&lt;Pizza&gt;",
        choiceB: "&lt;javaScript&gt;",
        choiceC: "&lt;js&gt;",
        choiceD: "&lt;script&gt;",
        correct: "D"
    } 
];

function timer (){
    myTimer = setInterval (function () {
        if (time > 1) {
           countTime.innerHTML = "Timer: " + time;
        }
        else {
            countTime.innerHTML = 'complete';
            quizComplete();
        }
        time--;
    }, 1000);
}


// Add event listener to generate button
start.addEventListener("click", function (){
    validate.innerHTML = "";
    start.style.display = "none";
    quiz.style.display = "block";
    title.style.display = "none";
    intro.style.display = "none";
    score=0;

    currentQ = 0;
    time=150;
    timer();
    showQuestion (currentQ);

    showHighScore();
}) ;


//show quesiton
function showQuestion (questionNumber){
    if (questionNumber < question.length){
        questionEl.innerHTML=question[questionNumber].question;
        choiceA.innerHTML=question[questionNumber].choiceA;
        choiceB.innerHTML=question[questionNumber].choiceB;
        choiceC.innerHTML=question[questionNumber].choiceC;
        choiceD.innerHTML=question[questionNumber].choiceD;
    }
    else {
        quizComplete();
    }
  }
function quizComplete() {
    clearInterval(myTimer);
    start.style.display = "block";
    quiz.style.display = "none"; 
    validate.innerHTML= "Your Score Is " + score;
    addHighScore.style.display = "block";
}

//add high score
function submitHighScore () {
    highScore.push ( {
        initials: document.getElementById("initials").value,
        topScore: score
    });
    addHighScore.style.display = "none";
    showHighScore();
}

//FUNCTION show high score
function showHighScore () {
    let highScoreText = "<h2>High Scores</h2>";
    for (var i = 0; i <highScore.length; i++){
        highScoreText += "<p>" + highScore[i].initials + ": "+ highScore[i].topScore + "</p>";    
    }
    validate.innerHTML = highScoreText;
}

//check answers
   function checkAnswer (choicePicked){
    if (choicePicked === question[currentQ].correct)
    { score ++
         validate.innerHTML="Correct"; 
         
    }
    else {
        validate.innerHTML="Wrong";
        time -= 10;
    } 
    currentQ++; 
    showQuestion(currentQ);

}

