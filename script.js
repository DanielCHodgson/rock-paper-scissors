let roundNumber = 0;
let playerScore = 0;
let computerScore = 0;

const humanSelection = getplayerChoice().toLocaleLowerCase();
const computerSelection = getComputerChoice().toLocaleLowerCase();

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


function isValidEntry(playerChoice) {
    return (playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors");
}


function playRound(playerChoice, computerChoice) {

    console.log("Player choice: " + playerChoice);
    console.log("Computer choice: " + computerChoice);

    let outcome = "";

    if(!isValidEntry(playerChoice)) {
        outcome = "invalid";
        console.log(outcome);
        return outcome;
    }

    if (playerChoice === computerChoice) {
        outcome = "draw"
        console.log(outcome);
        return outcome;
    } 


    switch(playerChoice) {
        case "rock":
            computerChoice === "scissors" ? outcome = "win" : outcome = "lose";
            console.log(outcome);
            break; 
        case "paper":
            computerChoice === "rock" ? outcome = "win" : outcome = "lose";
            console.log(outcome);
            break;

        case "scissors":
            computerChoice === "paper" ? outcome = "win" : outcome = "lose";
            console.log(outcome);
            break;
    }

    return outcome;
}


playRound(humanSelection, computerSelection);





