let userScore = 0;
let userScoreText = document.querySelector("#user-score");
let reset_btn = document.querySelector(".reset-btn");
let computerScore = 0;
let computerScoreText = document.querySelector("#computer-score");

let userWin; 

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

const stats = document.querySelector("#game-stats");

const genComputerChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
};

const drawGame = (userChoice, computerChoice) => {
    msg.innerHTML = "Game Draw";
    msg.style.backgroundColor = "purple";
    stats.innerHTML = `Your Choice = ${userChoice} & Computer Choice = ${computerChoice}`;
};

const showWinner = (userWin, userChoice, computerChoice) => {
    if(userWin) {
        userScore++;
        userScoreText.innerHTML = userScore;
        msg.innerHTML = "You Win";
        msg.style.backgroundColor = "green";
        stats.innerHTML = `Your Choice = ${userChoice} & Computer Choice = ${computerChoice}`;
    } else {
        computerScore++;
        computerScoreText.innerHTML = computerScore;
        msg.innerHTML = "You Lose";
        msg.style.backgroundColor = "red";
        stats.innerHTML = `Your Choice = ${userChoice} & Computer Choice = ${computerChoice}`;
    }
};

const playGame = (userChoice) => {
    const computerChoice = genComputerChoice();

    if(userChoice === computerChoice){
        drawGame(userChoice, computerChoice);
        return;
    } else {
        userWin = true;
        if(userChoice === "rock"){
            userWin = computerChoice === "paper" ? false : true;
        } else if(userChoice === "paper") {
            userWin = computerChoice === "scissor" ? false : true;
        } else {
            userWin = computerChoice === "rock" ? false : true;
        }
    }
    showWinner(userWin, userChoice, computerChoice);
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});

const resetGame = () => {
    location.reload();
};

reset_btn.addEventListener("click", resetGame);