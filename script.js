let timerEl = document.querySelector(".timerCountdown");
let timeSecond = 60;
let startTime = document.querySelector(".start");
let startQuiz = document.querySelector(".start");
let button = document.querySelector(".start")
let timerElement = document.querySelector(".timerCountdown")
let answerEls = document.querySelectorAll(".answer")
let questionEl = document.getElementById(".questions")
let a1 = document.getElementById("#a1")
let b2 = document.getElementById("#b2")
let c3 = document.getElementById("#c3")
let d4 = document.getElementById("#d4")
let i = 60;
let timer;
let currentQuestion = 0;
let score = 0;

// when the start button is clicked, here is where you will start the timerCountdown function and start the startQuestions function
startTime.addEventListener ("click", function() {
    timerCountdown ();
    startQuestions ();
});

// this is where the function will be to start counting down the time 
function timerCountdown(){
    timer = setInterval(function() {
        timerEl.textContent = i;
        i--;

        if ( i === 0){
            clearInterval(timer)
            alert("GAME OVER")
        }
    }, 1000);
};

function startQuestions () { 
    
}


let myQuestions = [
    {
      question: "this is where my question will be ",
      answers: {
        a: "answer 1",
        b: "answer 2",
        c: "answer 3"
      },
      correctAnswer: "c"
    },
    {
        question: "this is where my question will be ",
        answers: {
          a: "answer 1",
          b: "answer 2",
          c: "answer 3"
        },
        correctAnswer: "c"
    },
    {
        question: "this is where my question will be ",
        answers: {
          a: "answer 1",
          b: "answer 2",
          c: "answer 3"
        },
        correctAnswer: "c"
    }
];
























// countdown.addEventListener ("click", function () {
//     if (timeLeft > 0) {
//         timerEl.textContent = timerEl.innerHTML;
//         timeLeft--;
//     }
//     else if (timeLeft === 0) {
//         timerEl.textContent = "time's up!";
//         clearInterval.timerCountdown;
//         displayMessage();
//     }
// },1000) 

// let 