const question = document.getElementById('question');
const choices  = Array.from(document.getElementsByClassName('choice-text'));
const progressText = document.getElementById('progressText');
const scoreText = document.getElementById('score');
const progressBarFull = document.getElementById('progressBarFull');
const loader = document.getElementById('loader');
const game = document.getElementById('game');

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];



//let questions = [
//    {
//        question: "Inside which HTML element do we put Javascript?",
//        choice1: "<script>",
//        choice2: "<javascript>",
//        choice3: "<js>",
//        choice4: "<scripting>",
//        answer: 1
//    },
//    {
//        question: " Choose the correct JavaScript syntax to change the content of the following HTML code.",
//        choice1: "document.getElement(“geek”).innerHTML=”I am a Geek”;",
//        choice2: " document.getElementById(“geek”).innerHTML=”I am a Geek”;",
//        choice3: "document.getId(“geek”)=”I am a Geek”;",
//        choice4: "document.getElementById(“geek”).innerHTML=I am a Geek;",
//        answer: 2
//    },
//    {
//        question: " What is the correct syntax for referring to an external script called “app.js”?",
//        choice1: "<script src=”geek.js",
//        choice2: "<script href=”geek.js”>",
//        choice3: "<script ref=”geek.js”>",
//        choice4: "<script name=”geek.js”>",
//        answer: 1
//    }]

let questions = [];

//fetch('https://opentdb.com/api.php?amount=10&category=18')
// fetch('http://localhost:3000/questions.json')
// //fetch('questions.json')
//     .then(res => {
//         return res.json();
//     })
//     .then(loadedQuestions => {
//         console.log(loadedQuestions);
//         questions = loadedQuestions;
//         startGame();
//     }).catch(err => {
//         console.log(err)
//     });

fetch('https://opentdb.com/api.php?amount=10&category=18&type=multiple&encode=url3986')
    .then(res => {
        return res.json();
    })
    .then(loadedQuestions => {
        //console.log(loadedQuestions.results);
        questions = loadedQuestions.results.map(loadedQuestion => {
            const formattedQuestion = {
                question: loadedQuestion.question
            };
            const answerChoices = [... loadedQuestion.incorrect_answers];
            formattedQuestion.answer = Math.floor(Math.random() * 3) + 1;
            answerChoices.splice(formattedQuestion.answer -1, 0, loadedQuestion.correct_answer);
            answerChoices.forEach((choice, index) => {
                formattedQuestion["choice" + (index+1)] = decodeURIComponent(choice);
            })
            return formattedQuestion;
            
        });
        console.log(questions);
        startGame();
    }).catch(err => {
        console.log(err)
    });


// constants
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 10;

const startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
    game.classList.remove("hidden");
    loader.classList.add("hidden");
};

const getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem("mostRecentScore", score);
        // go to next page
        return window.location.assign("end.html");
    }
    questionCounter++;
    //questionCounterText.innerText = questionCounter + "/" + MAX_QUESTIONS;
    progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;

    progressBarFull.style.width = `${100 * questionCounter / MAX_QUESTIONS}%`;

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = decodeURIComponent(currentQuestion.question);

    choices.forEach( choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    })
    availableQuestions.splice(questionIndex, 1);
    acceptingAnswers = true;
};

choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if(!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        // const classToApply = 'incorrect';
        // if(parseInt(selectedAnswer) === currentQuestion.answer){
        //     classToApply = 'correct';
        // }
        
        const classToApply = (
            parseInt(selectedAnswer) === currentQuestion.answer)?
              "correct" :
              "incorrect";
        if(classToApply === "correct") {
            incrementScore(CORRECT_BONUS);
        };
        
        selectedChoice.parentElement.classList.add(classToApply);        

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);        
            getNewQuestion();
        }, 500);

    });
});

const incrementScore = num => {
    score += num;
    scoreText.innerText = score;
};


//startGame();
