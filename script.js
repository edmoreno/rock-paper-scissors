let humanScore = 0;
let computerScore = 0;
let resultDiv = document.querySelector('#results');
const currentScoreDiv = document.querySelector('#current-score');

const currentScore = document.createElement('p');
currentScore.textContent = `Human: ${humanScore} Computer: ${computerScore}`;
currentScoreDiv.appendChild(currentScore);

function getComputerChoice() {
    let randomVal = Math.random() * 100;
    if (randomVal <= 33) {
        return "rock";
    } else if (randomVal > 66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(humanSelection, computerSelection) {
    let humanChoice = humanSelection.toLowerCase();
    let computerChoice = computerSelection.toLowerCase();
    const results = document.createElement('p');
    // if human gives paper:
    if (humanChoice === 'paper') {
        // wins if computer gives rock
        if (computerChoice === 'rock') {
            results.textContent = "You win! Paper beats Rock.";
            resultDiv.appendChild(results);
            return "human";
        } else if (computerChoice === 'scissors') {
        // loses if computer gives scissors
            results.textContent = "You lose! Scissors beats Rock";
            resultDiv.appendChild(results);
            return "computer";
        } else {
            results.textContent = "You tied!";
            resultDiv.appendChild(results);
            return "tie";
        }
    // if human gives rock:
    } else if (humanChoice === 'rock') {
        // wins if computer gives scissors
        if (computerChoice === 'scissors') {
            results.textContent = "You win! Rock beats Scissors";
            resultDiv.appendChild(results);
            return "human";
        // loses if computer gives paper
        } else if (computerChoice === 'paper') {
            results.textContent = "You lose! Paper beats Rock";
            resultDiv.appendChild(results);
            return "computer";
        } else {
            results.textContent = "You tied!";
            resultDiv.appendChild(results);
        }
    // if human gives scissors:
    } else if (humanChoice === 'scissors') {
        // wins if computer gives paper
        // loses if computer gives rock
        if (computerChoice === 'paper') {
            results.textContent = 'You win! Scissors beats Paper';
            resultDiv.appendChild(results);
            return "human";
        } else if (computerChoice === 'rock') {
            results.textContent = 'You lose! Rock beats Scissors';
            resultDiv.appendChild(results);
            return "computer";
        } else{
            results.textContent = "You tied!";
            resultDiv.appendChild(results);
        }
    }
}

// Add event listeners to buttons
const rockBtn = document.querySelector('#rock-btn');
rockBtn.addEventListener('click', () => {
    let winner = playRound("rock", getComputerChoice());
    updateScore(winner);
});

const paperBtn = document.querySelector('#paper-btn');
paperBtn.addEventListener('click', () => {
    let winner = playRound("paper", getComputerChoice());
    updateScore(winner);
});

const scissorsBtn = document.querySelector('#scissors-btn');
scissorsBtn.addEventListener('click', () => {
    let winner = playRound("scissors", getComputerChoice());
    updateScore(winner);
});

function updateScore(winner) {
    if (winner == "human") {
        humanScore++;
        currentScore.textContent = `Human: ${humanScore} Computer: ${computerScore}`;
    } else if (winner == "computer") {
        computerScore++;
        currentScore.textContent = `Human: ${humanScore} Computer: ${computerScore}`;

    }
    if (humanScore == 5) {
        const finalResult = document.createElement('p');
        finalResult.textContent = "You won the game!";
        resultDiv.appendChild(finalResult);   
    } else if (computerScore == 5) {
        const finalResult = document.createElement('p');
        finalResult.textContent = "You lost the game!";
        resultDiv.appendChild(finalResult);   
    }
}

