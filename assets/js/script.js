/*assignment to create a quiz with a start button timer answer questions answer question time is substracted if wrong answer game if out of questions or time runs out, save my initials and score.*/

var generateBtn = document.querySelector("#generate");
var startQuiz = document.getElementById("start");
var questionEl = document.getElementById("question");

var counter = document.getElementById("counter");

var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");

// Add event listener to generate button
generateBtn.addEventListener("click", startQuiz);

var questions = [
    {
        question: "What does CSS stand for",
        choiceA : "Cascade Style Sheet",
        choiceB : "Covert Styles Sheet",  
        choiceC : "Cascadeing Style Sheet",    
        choiceD : "Color and Style Sheet",
        correct: "A"
    },

    {
        question: "Which is the correct way to write a JavaScript array?",
        choiceA: "var txt = new Array(1:"tim",2:"kim",3:"jim")",
        choiceB: "var txt = new Array:1=("tim")2=("kim")3=("jim")",
        choiceC: "var txt = new Array("tim","kim","jim")",
        choiceD: "var txt = new Array="tim","kim","jim"",
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
        question: "Which of the following is not a valid JavaScript variable name?",
        choiceA: "Storing numbers, dates, or other values",
        choiceB: "Varying randomly",
        choiceC: "Causing high-school algebra flashbacks",
        choiceD: "None of the above",
        correct: "C"
    },

    {
        question: "?",
        choiceA: "",
        choiceB: "",
        choiceC: "",
        choiceD: "",
        correct: "D"
    },  

    {
        question: "?",
        choiceA: "",
        choiceB: "",
        choiceC: "",
        choiceD: "",
        correct: "C"
    },  

    {
        question: "?",
        choiceA: "",
        choiceB: "",
        choiceC: "",
        choiceD: "",
        correct: "A"
    },  

    {
        question: "?",
        choiceA: "",
        choiceB: "",
        choiceC: "",
        choiceD: "",
        correct: "B"
    },  

    {
        question: "?",
        choiceA: "",
        choiceB: "",
        choiceC: "",
        choiceD: "",
        correct: "C"
    },  

    {
        question: "?",
        choiceA: "",
        choiceB: "",
        choiceC: "",
        choiceD: "",
        correct: "A"
    },  
];

questionEl.innerHTML=questions[0].question
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
}

//function (set up the timer)

//when click if they click correct answer (true) we add 1 to score  if wrong get prompt wrong!!!

// for (let index =0; index < question.length; index++) {
    
//     if (answer ===a && question[index].a === 'a'
//     )
// }