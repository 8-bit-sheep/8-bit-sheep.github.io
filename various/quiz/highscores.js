const highScoresList = document.getElementById("highScoreList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
console.log(highScores);
highScoresList.innerHTML =
    highScores.map(score => {
        return `<li class="high-score">${score.name}\t${score.score}</li>`;
    }).join("")


