let roundNumber = 0;
let playerScore = 0;
let computerScore = 0;

const humanSelection = getplayerChoice();
const computerSelection = getComputerChoice();

function getComputerChoice() {

    let random = Math.floor(Math.random() * 3) + 1

    switch (random) {

        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
}


function getplayerChoice() {
    return prompt("Choose rock, paper or scissors");
}


function playRound(playerChoice, computerChoice) {

    console.log("Player choice: " + playerChoice.toLowerCase());
    console.log("Computer choice: " + computerChoice.toLowerCase())

    if (playerChoice.toLowerCase() === computerChoice.toLowerCase()) {
        console.log("Draw!");
        roundNumber += 1;
        return;
    } else if (playerChoice.toLowerCase() === "rock" && computerChoice.toLowerCase() === "scissors") {
        console.log("You win! Rock beats scissors!");
        playerScore += 1;
        roundNumber += 1;
        return;
    } else if (playerChoice.toLowerCase() === "rock" && computerChoice.toLowerCase() === "paper") {
        console.log("You lose! Paper beats rock!");
        computerScore += 1;
        roundNumber += 1;
        return;
    }
    else if (playerChoice.toLowerCase() === "scissors" && computerChoice.toLowerCase() === "rock") {
        console.log("You lose! Rock beats scissors!");
        computerScore += 1;
        roundNumber += 1;
        return;
    } else if (playerChoice.toLowerCase() === "scissors" && computerChoice.toLowerCase() === "paper") {
        console.log("You win! Scissors beats paper!");
        playerScore += 1;
        roundNumber += 1;
        return;
    } else if (playerChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === "scissors") {
        console.log("You lose! Scissors beats paper!");
        computerScore += 1;
        roundNumber += 1;
        return;
    } else if (playerChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === "rock") {
        console.log("You win! Paper beats rock!");
        playerScore += 1;
        roundNumber += 1;
        return;
    } else {
        console.log("invalid entry!");
    }
}


playRound(humanSelection, computerSelection);





