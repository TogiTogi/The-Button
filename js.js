const theButton = document.getElementById("theButton")
const scoreText = document.getElementById("score")
const highscoreText = document.getElementById("highscore")
const totalClicksText = document.getElementById("totalClicks")

var totalClicks = 0
var score = 0
var resetter = Math.floor(Math.random() * 100) + 1 //creates a random number 1 - 100.
var highscore = 0

//Assigns variables to text in index.html. This will set them a default value, making them always appear.
totalClicksText.innerText = `Total clicks: ${totalClicks}`;
highscoreText.innerText = `High score: ${highscore}`;
scoreText.innerText = `Score: ${score}`;

//When the button is clicked, the resetter gets a new random number.
theButton.addEventListener("click", () => {
    resetter = Math.floor(Math.random() * 100) + 1 
    if (score > resetter) { //If the score is greater than the resetter, the score is reset to 0. Else it increases by 1.
        score = 0
    } else {
        score += 1
    }
    console.log('resetter: ', resetter, '\nscore: ', score)//Simple console log to see the resetter and score.
    scoreText.innerText = `Score: ${score}`;//Updates score field.
    totalClicks += 1
    totalClicksText.innerText = `Total clicks: ${totalClicks}`;//Updates total clicks.
    if (score > highscore) {//Updates highscore if the score is greater than the current highscore.
        highscore = score
        console.log('highscore: ', highscore)
        highscoreText.innerText = `High score: ${highscore}`;//Udates highscore field
    }
});