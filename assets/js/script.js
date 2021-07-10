/*assignment to create a quiz with a start button timer answer questions answer question time is substracted if wrong answer game if out of questions or time runs out, save my initials and score.*/

var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var questionEl = document.getElementById("question");

var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var counter = document.getElementById("counter");



var question = [
    {
        question : "What does CSS stand for",
        choiceA : "Cascade Style Sheet",
        choiceB : "Covert Styles Sheet",  
        choiceC : "Cascadeing Style Sheet",    
        choiceD : "Color and Style Sheet",
        correct: "A"
    },

    {
        question : "What are people who write computer code called?",
        choiceA : "Manufacturers",
        choiceB : "Crptographers",
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
        choiceA: "<td>",
        choiceB: "<footer>",
        choiceC: "<h1> to <h6>",
        choiceD: "<button>",
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
        choiceA: "<strong>",
        choiceB: "<em>",
        choiceC: "<blockquote>",
        choiceD: "<a>",
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
        question: "What is the language or list of instructions that are executed by the computer (how JavaScript is built)?",
        choiceA: "JSON",
        choiceB: "Scope",
        choiceC: "Output",
        choiceD: "Syntax",
        correct: "D"
    } 
];

question.innerHTML=question[0].questionEl
choiceA.innerHTML=question[0].choiceA
choiceB.innerHTML=question[0].choiceB
choiceC.innerHTML=question[0].choiceC
choiceD.innerHTML=question[0].choiceD

//keeping track of score
var score = 0;


// Add event listener to generate button
start.addEventListener("click", startQuiz);


//start quiz
    function startQuiz(){
       //what do I put here UGH
    }

//check answers
   function checkAnswer (choicePicked){
    if (choicePicked === questions[0].correct)
    { score ++
        alert("Correct");
    }
    else {
        alert("Wrong!");
    } 
}
  