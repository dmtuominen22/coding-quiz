/*assignment to create a quiz with a start button timer answer questions answer question time is substracted if wrong answer game if out of questions or time runs out, save my initials and score.*/

var generateBtn = document.querySelector("#generate");
var questionEl = document.getElementById("question");

var counter = document.getElementById("counter");

var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");

// Add event listener to generate button
generateBtn.addEventListener("click", StartQuiz);

//let timer;

var questions = [
    {
        question: "What does CSS stand for",
        choiceA : "Cascade Style Sheet",
        choiceB : "Covert Styles Sheet",  
        choiceC : "Cascadeing Style Sheet",    
        choiceD : "Color and Style Sheet",
        correct: "A"
    }

    {
        question: "What are people who write computer code called?",
        choiceA: "Manufacturers",
        choiceB: "Crptographers",
        choiceC: "Programmers",
        choiceD: "Professors",
        correct: "C"
    },  

    {
        question: "What are variables used for in JavaScript Programs?",
        choiceA: "Storing numbers, dates, or other values",
        choiceB: "Varying randomly",
        choiceC: "Causing high-school algebra flashbacks",
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
        question: "what can loop offer JaveScript code as a whole?",
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
    },  


];

 questions.innerHTML=questions[0].questionEl
 choiceA.innerHTML=questions[0].choiceA
 choiceB.innerHTML=questions[0].choiceB
 choiceC.innerHTML=questions[0].choiceC
 choiceD.innerHTML=questions[0].choiceD

//keeping track of the score
var score = 0;

function checkAnswer (choicePicked){
    if (choicePicked === questions[0].correct)
    { score ++
        alert("Correct");
    }
    else {
        alert("Wrong!");
    } 
};


