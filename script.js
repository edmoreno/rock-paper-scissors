
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

function getHumanChoice() {
    let humanChoice = prompt("Choose rock, paper, or scissors.");
    return humanChoice;
}

function playRound(humanSelection, computerSelection) {
    let humanChoice = humanSelection.toLowerCase();
    let computerChoice = computerSelection.toLowerCase();
    // if human gives paper:
    if (humanChoice === 'paper') {
        // wins if computer gives rock
        if (computerChoice === 'rock') {
            console.log("You win! Paper beats Rock");
            return "human";
        } else if (computerChoice === 'scissors') {
        // loses if computer gives scissors
            console.log("You lose! Scissors beats Rock");
            return "computer";
        } else {
            console.log("You tied!");
            return "tie";
        }
    // if human gives rock:
    } else if (humanChoice === 'rock') {
        // wins if computer gives scissors
        if (computerChoice === 'scissors') {
            console.log("You win! Rock beats Scissors");
            return "human";
        // loses if computer gives paper
        } else if (computerChoice === 'paper') {
            console.log("You lose! Paper beats Rock");
            return "computer";
        } else {
            console.log("You tied!");
            return "tie";
        }
    // if human gives scissors:
    } else if (humanChoice === 'scissors') {
        // wins if computer gives paper
        // loses if computer gives rock
        if (computerChoice === 'paper') {
            console.log('You win! Scissors beats Paper');
            return "human";
        } else if (computerChoice === 'rock') {
            console.log('You lose! Rock beats Scissors');
            return "computer";
        } else{
            console.log("You tied!");
            return "tie";
        }
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    
    for (let i = 0; i < 5; ) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        let winner = playRound(humanSelection, computerSelection);
        if (winner === 'human') {
            humanScore++;
            i++;
        } else if (winner === 'computer') {
            computerScore++;
            i++;
        }
    }

    if (humanScore > computerScore) {
        console.log("You win!");
    } else {
        console.log("Computer wins!");
    }
}

playGame();