
let playerScore = 0;
let computerScore = 0;

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function getComputerChoice() {

    let random = Math.floor(Math.random() * 3) + 1

    switch (random) {

        case 1:
            console.log("rock")
            return "rock";
        case 2:
            console.log("paper")
            return "paper";
        case 3:
            console.log("scissors")
            return "scissors";
    }
}


function getHumanChoice() {
    return prompt("Choose rock, paper or scissors");
}


function playRound(humanChoice, computerChoice) {

   let formattedHumanChoice = humanChoice.toLowerCase();
   let formattedComputerChoice = computerChoice.toLowerCase();
}





