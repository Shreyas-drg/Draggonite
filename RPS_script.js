let userscore = 0;
let compscore = 0;
const targetScore = 30;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const gencompChoice = () => {
    const options = ['ROCK', 'PAPER', 'SCISSOR'];
    const randidx = Math.floor(Math.random() * 3);
    return options[randidx];
};

const showwinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userscore++;
        userScorePara.innerText = userscore;
        msg.innerText = `You Win! Your ${userChoice} beats Computer's ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compscore++;
        compScorePara.innerText = compscore;
        msg.innerText = `You Lose! Computer's ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const drawGame = () => {
    msg.innerText = "Draw! Play Again.";
    msg.style.backgroundColor = "#081b31";
};

const endGame = (winner) => {
    msg.innerText = `${winner} reached ${targetScore} points and won the game!`;
    msg.style.backgroundColor = winner === "You" ? "green" : "red";

    // Disable further clicks
    choices.forEach((choice) => {
        choice.disabled = true;
        choice.style.pointerEvents = "none";
    });
};

const playgame = (userChoice) => {
    if (userscore >= targetScore || compscore >= targetScore) {
        return; // Stop playing once target score is reached
    }

    const compChoice = gencompChoice();

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;

        if (userChoice === "ROCK") {
            userWin = compChoice === "PAPER" ? false : true;
        } else if (userChoice === "PAPER") {
            userWin = compChoice === "SCISSOR" ? false : true;
        } else {
            userWin = compChoice === "ROCK" ? false : true;
        }

        showwinner(userWin, userChoice, compChoice);

        // Check for end condition
        if (userscore >= targetScore) {
            endGame("You");
        } else if (compscore >= targetScore) {
            endGame("Computer");
        }
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playgame(userChoice);
    });
});
