const OPTIONS = ["rock", "paper", "scissors"];

// randomly choices one of the 3 options
function getComputerChoice() {

    const computerChoice = OPTIONS[Math.floor(Math.random() * OPTIONS.length)];
    return computerChoice;
    
}

// play a round of rock paper scissors
function playRound(playerSelection, computerSelection) {

    // for case insensitivity
    playerSelect = playerSelection.toLowerCase();

    // tie condition
    if(playerSelect === computerSelection) {
        return "It's a tie!";
    }
    else if ( // win condition for player
            (playerSelect == "rock" && computerSelection == "scissors") ||
            (playerSelect == "paper" && computerSelection == "rock") ||
            (playerSelect == "scissors" && computerSelection == "paper")
    ) {
        return `You Win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}!`;
    } else {
    return `You Lose! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}!`;
    }
}

function game() {

    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {

        const playerSelection = prompt("Choose rock, paper, or scissors.");
        const computerSelection = getComputerChoice();
        
        const result = playRound(playerSelection, computerSelection);
        console.log(result);


        if (result.startsWith("You Win")) {
            playerScore++;
        } else if (result.startsWith("You Lose")) {
            computerScore++;
        }
        
        console.log(`Player: ${playerScore} Computer: ${computerScore}`);
    }

    if (playerScore > computerScore) {
        return `You won the game! Score: ${playerScore} to ${computerScore}.`;
    } else if (playerScore < computerScore) {
        return `Computer won the game! Score: ${computerScore} to ${playerScore}.`;
    } else {
        return `It's a tie! Score: ${playerScore} to ${computerScore}.`;
    }
}

console.log(game());
