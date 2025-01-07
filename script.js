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

    let inputs = document.querySelectorAll("button");

    inputs.forEach(btn => {
        btn.addEventListener("click", (e) => playRound(e.target.id));
    })
}


function playRound(playerChoice) {

    let message = document.querySelector(".message p");

    let computerChoice = getComputerChoice();
    message.setAttribute('style', 'white-space: pre;');
    message.textContent = `Player choice: ${playerChoice}\r\nComputer choice: ${computerChoice}`;

    let outcome = "";

    if (playerChoice === computerChoice) {
        outcome = "draw"
        message.textContent += "\r\nYou " + outcome + "!";
        return outcome;
    }

    switch (playerChoice) {
        case "rock":
            computerChoice === "scissors" ? outcome = "win" : outcome = "lose";
            message.textContent += "\r\nYou " + outcome + "!";
            break;
        case "paper":
            computerChoice === "rock" ? outcome = "win" : outcome = "lose";
            message.textContent += "\r\nYou " + outcome + "!";
            break;

        case "scissors":
            computerChoice === "paper" ? outcome = "win" : outcome = "lose";
            message.textContent += "\r\nYou " + outcome + "!";
            break;
    }

    return outcome;
}


getplayerChoice();