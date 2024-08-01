let scoreBoard = document.getElementById("score");
let computer = document.getElementById("computerChoice");
let player = document.getElementById("playerChoice");
let loseOrWin = document.getElementById("loseOrWin");
let playBtn = document.getElementById("playBtn");
let cScore = document.getElementById("computerScore");
let eraseScoreboard = document.getElementById("eraser");

let score = 0;
let computerScore = 0;

if(window.localStorage.getItem("playerScore") === null && window.localStorage.getItem("computerScore") === null){
    window.localStorage.setItem("playerScore", score);
    window.localStorage.setItem("computerScore", computerScore);
}else{
    score = window.localStorage.getItem("playerScore");
    computerScore = window.localStorage.getItem("computerScore");
}

scoreBoard.innerHTML = score.toString();
cScore.innerHTML = computerScore.toString();

const winConditions = { // Win conditions to the game. Ex: if the player selects Rock, so the win condition is the CPU selects Scissor.
    rock: "scissor",
    paper: "rock",
    scissor: "paper"
}

const getComputerChoice = () => {
    const computerChoide = Math.floor(Math.random() * 3)
    switch (computerChoide) {
        case 0:
            return "rock"
        case 1:
            return "paper"
        case 2:
            return "scissor"
        default:
            break;
    }
}

const getUserChoice = () => {
    let userChoice = prompt("Rock Paper Or Scissor?").toLowerCase(); // Pick the user input and turns the text into lowerCase
    if(userChoice.toLowerCase() === "rock" || userChoice.toLowerCase() === "paper" || userChoice.toLowerCase() === "scissor"){
        return userChoice.toLowerCase(); // Verify if the text is one of the Rock, Paper or Scissor.   
    }
    return alert("Incorrect Word!"); 
}

const playRound = (pChoice, cChoice) => { // Verfify the win conditions to determine who wins.
    pChoice.toLowerCase();
    cChoice.toLowerCase();

    if(pChoice === cChoice){
        player.innerHTML = pChoice;
        computer.innerHTML = cChoice;
        loseOrWin.innerHTML = "It's a Draw!";
    }else if(winConditions[pChoice] === cChoice){
        player.innerHTML = pChoice;
        computer.innerHTML = cChoice;
        loseOrWin.innerHTML = "You Win!";
        score++;
        scoreBoard.innerHTML = score.toString();
        window.localStorage.setItem("playerScore", score);
    }else{
        player.innerHTML = pChoice;
        computer.innerHTML = cChoice;
        loseOrWin.innerHTML = "You Lose!";
        computerScore++;
        cScore.innerHTML = computerScore.toString();
        window.localStorage.setItem("computerScore", computerScore);
    }
};

const playGame = () => { // Initiate all the code above.
    let pChoice = getUserChoice();
    let cChoice = getComputerChoice();
    playRound(pChoice, cChoice);
};

playBtn.addEventListener("click", playGame);
eraseScoreboard.addEventListener("click", () => {
    window.localStorage.clear();
    scoreBoard.innerHTML = "0";
    cScore.innerHTML = "0";
});


/*
    When I do the user input validation, if the user input is invalid, the code throws an alert box that shows the input is an incorrect value.
    However, if you look at the console, you will see an error. This error happens because the validation occurs before the playGame function is called.
    This means I would need to include validation in the playGame function, but I won't do that because it doesn't influence how the game works.
*/