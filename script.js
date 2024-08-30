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


function playRound() {

    let playerChoice = getplayerChoice().toLocaleLowerCase();
    let computerChoice = getComputerChoice().toLocaleLowerCase();

    console.log("Player choice: " + playerChoice);
    console.log("Computer choice: " + computerChoice);

    let outcome = "";

    if (!isValidEntry(playerChoice)) {
        outcome = "invalid";
        console.log("Invalid entry, enter 'rock', 'paper' or 'scissors'");
        return outcome;
    }

    if (playerChoice === computerChoice) {
        outcome = "draw"
        console.log("It's a draw!");
        return outcome;
    }


    switch (playerChoice) {
        case "rock":
            computerChoice === "scissors" ? outcome = "win" : outcome = "lose";
            console.log("You " + outcome + "!");
            break;
        case "paper":
            computerChoice === "rock" ? outcome = "win" : outcome = "lose";
            console.log("You " + outcome + "!");
            break;

        case "scissors":
            computerChoice === "paper" ? outcome = "win" : outcome = "lose";
            console.log("You " + outcome + "!");
            break;
    }

    return outcome;
}




function playGame() {

    let roundNumber = 1;
    let playerScore = 0;
    let computerScore = 0;

    for (i = roundNumber; roundNumber <= 5; i++) {

        console.log("Round: " + roundNumber)

        switch (playRound()) {
            case "win":
                playerScore += 1;
                roundNumber += 1;
                console
                break;

            case "lose":
                computerScore += 1;
                roundNumber += 1;
                break;

            case "draw":
                roundNumber += 1;
                break;

            case "invalid":
                break;
        }

        console.log("================")
    }

    if (roundNumber >= 5 && playerScore > computerScore) {
        console.log("Congratulations! You win " + playerScore + " to " + computerScore + "!");
    }
    else if (roundNumber >= 5 && playerScore < computerScore) {
        console.log("You lose " + computerScore + " to " + playerScore + "! better luck next time!");
    }
    else console.log("Game tied " + playerScore + ":" + computerScore + "!");
}

playGame();





