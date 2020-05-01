let playerNumberScore = 0;
let computerNumberScore = 0;
const playerScore = document.querySelector('#player-score');
const computerScore = document.querySelector('#computer-score');
const scores = document.querySelector('#results');

const choices = document.querySelectorAll('button');
console.log(choices);

choices.forEach(
    function(button) {
    button.addEventListener('click', playerMove);
});

function playerMove(e) {
    let playerMove = e.target.id;
    playRound(computerPlay(), playerMove);
}

function computerPlay() {
    let num = Math.floor(Math.random() * 3);
    let choice;
    if (num === 0) {
        choice = "rock";
    } else if (num === 1) {
        choice = "paper";
    } else if (num === 2) {
        choice = "scissors";
        }
    return choice;
}

function playRound(computerChoice, playerChoice) {
    if (playerChoice === computerChoice) {
        scores.textContent = "Tie!";
    } else if ((playerChoice === "rock" && computerChoice === "scissors")
        || (playerChoice === "paper" && computerChoice === "rock")
        || (playerChoice === "scissors" && computerChoice === "paper")) {
            scores.textContent = "Player wins!";
            playerNumberScore++;
            playerScore.textContent = playerNumberScore;
    } else {
        scores.textContent = "Computer wins!";
        computerNumberScore++;
        computerScore.textContent = computerNumberScore;
        }
    if (computerScore.textContent === '5') {
        scores.textContent = "Computer wins all rounds :( Better luck next time! Refresh to play again!";
        scores.style.color = 'red';
    }
        
    else if (playerScore.textContent === '5') {
        scores.textContent = "You win all rounds!! :D Refresh to play again!";
        scores.style.color = 'red';
    }
}

