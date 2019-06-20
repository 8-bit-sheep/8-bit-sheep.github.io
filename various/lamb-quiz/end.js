const username = document.getElementById("username");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");
const saveScoreBtn = document.getElementById("saveScoreButton");
const highscores = JSON.parse(localStorage.getItem("highscores")) || [];
const MAX_HIGHSCORES = 5;

finalScore.innerText = mostRecentScore;
username.addEventListener("keyup",() => saveScoreBtn.disabled = !username.value);

const saveHighscore = e => {
    e.preventDefault();
    const currentScore = {
        score: mostRecentScore,
        name: username.value
    }
    highscores.push(currentScore)
    highscores.sort((x,y) => y.score-x.score);
    highscores.splice(MAX_HIGHSCORES);
    localStorage.setItem("highscores", JSON.stringify(highscores));
    window.location.assign("highscores.html");
} 

