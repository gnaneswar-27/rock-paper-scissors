let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
    msg.style.color = "white";
    userScore++;
    userScorePara.innerText = `${userScore}`;
  } else {
    msg.innerText = `You lose! ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
    msg.style.color = "white";
    compScore++;
    compScorePara.innerText = `${compScore}`;
  }
};

const playGame = (userChoice) => {
  console.log("user choice =", userChoice);
  const compChoice = generateCompChoice();
  console.log("comp choice = ", compChoice);

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissor" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

const generateCompChoice = () => {
  const options = ["rock", "paper", "scissor"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
  console.log("draw game");
  msg.innerText = "Draw";
  msg.style.backgroundColor = "blue";
  msg.style.color = "white";
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
