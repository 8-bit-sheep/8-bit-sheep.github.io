const highscoreList = document.getElementById("highscoreList");
const highscores = JSON.parse(localStorage.getItem("highscores")) || [];

highscoreList.innerHTML = highscores.map(score =>
    `<tr>
    <th class="highscoreNames">${score.name.substring(0,16)}</th><th class="highscoreScores">${score.score}</th></tr>`).join("");

