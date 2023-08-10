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

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));