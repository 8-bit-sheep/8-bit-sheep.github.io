const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const questionCounterText = document.getElementById("questionCounter");
const scoreText = document.getElementById("score");
const source = document.getElementById("source");
const section = document.getElementById("section");
// state
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
let questions = []; // new


const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 50;

const startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
}

const getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS - 1) return window.location.assign("end.html"); // -1
        
        
    questionCounter++;
    questionCounterText.innerText = 
        questionCounter + "/" + MAX_QUESTIONS;
    

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;
    source.innerText = currentQuestion.course;
    section.innerText = currentQuestion.episode;
    choices.forEach(choice => {
        const number = choice.dataset["number"];
        choice.innerText = currentQuestion["choice" + number]; 
    })
    availableQuestions.splice(questionIndex, 1);
    acceptingAnswers = true;
}


choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if(!acceptingAnswers) return;
        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];

        const classToApply = (selectedAnswer === currentQuestion.answer)? "correct" : "incorrect";

        if(classToApply === "correct") {
            incrementScore(CORRECT_BONUS);
        }

        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 500);

    })
})

const incrementScore = num => {
    score += num;
    scoreText.innerText = score;
}


d3.csv("https://docs.google.com/spreadsheets/d/e/2PACX-1vSfBk-rwrIauBPn7iuoLXBxP2sSYOXRYCbJ2GflzSK6wxGVGDr_fAqORJ0JWPdajFLxnGegmrlI26HB/pub?output=csv")
    .then(function(data) {
        questions = data;
        startGame(); // this was moved here

    })
    .catch(function(error){
        console.log(error)
    })

