
let scoreBoard = document.getElementById("score");
let computer = document.getElementById("computerChoice");
let player = document.getElementById("playerChoice");

let score = 0;
scoreBoard.innerHTML = score.toString();

console.log(scoreBoard)
const getComputerChoice = () => {
    const computerChoide = Math.floor(Math.random() * 3)
    switch (computerChoide) {
        case 0:
            return "Rock"
        case 1:
            return "Paper"
        case 2:
            return "Scissor"
        default:
            break;
    }
}

const getUserChoice = () => {
    let userChoice = prompt("Rock Paper Or Scissor?");
    console.log(userChoice);
}
