
let playerScore = 0;
let computerScore = 0;
const winningScore = 1;


const playerScoreEl = document.getElementById('your-score');
// const computerScoreEl = document.getElementById('computer-score');
const resultText = document.getElementById('result-text');


function playRound(playerSelection) {
    const computerSelection = computerPlay();
    console.log(computerSelection);
    const result = getResult(playerSelection, computerSelection);
    console.log(result);
    if (result === 'win') {
        playerScore++;
    } else if (result === 'lose') {
        computerScore++;
    }
      else if (playerScore < computerScore) {
        window.location.href = 'youlose.html'; 
    } 
     else{
        window.location.href = 'tie.html'; 

    }

    updateScores();

    if (playerScore === winningScore || computerScore === winningScore) {
        setTimeout(() => endGame(), 1000); 
    }
}


function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}


function getResult(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'draw';
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'rock')
    ) {
        return 'win';
    } else {
        return 'lose';
    }
}


function updateScores() {
    playerScoreEl.textContent = playerScore;
    ///computerScoreEl.textContent = computerScore;
}


function endGame() {
    if (playerScore === computerScore) {
        window.location.href = 'tie.html'; 
    } else if (playerScore > computerScore) {
        window.location.href = 'winning.html'; 
    } else {
        window.location.href = 'youwin.html'; 
    }
}




document.getElementById('rules-btn').addEventListener('click', function() {
    document.getElementById('popup').classList.add('show');
});

document.getElementById('close-popup').addEventListener('click', function() {
    document.getElementById('popup').classList.remove('show');
});
