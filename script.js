const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const playerChoiceEl = document.getElementById("playerСhoice");
const computerChoiceEl = document.getElementById("computerСhoice");
const resultEl = document.getElementById("result");
const playScore = document.getElementById("playScore");
const compScore = document.getElementById("compScore");
let playScoreCount = 0;
let computerScoreCount = 0;
let drawCount = 0;
let maxRounds = 5;

rockBtn.addEventListener("click", () => playGame("rock"));
paperBtn.addEventListener("click", () => playGame("paper"));
scissorsBtn.addEventListener("click", () => playGame("scissors"));

function playGame(playerChoice) {
  const computerChoice = getComputerChoice();
  playerChoiceEl.textContent = `ИГРОК : ${playerChoice}`;
  computerChoiceEl.textContent = `КОМПЬЮТЕР : ${computerChoice}`;
  const result = getWinner(playerChoice, computerChoice);
  resultEl.textContent = result;
}

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

function getWinner(playerChoice, computerChoice) {
  if (playScoreCount === maxRounds) {
    alert("GAME OVER! ПОБЕДИТЕЛЬ: ИГРОК");
    finishPlay();
    return;
  }
  if (computerScoreCount === maxRounds) {
    alert("GAME OVER! ПОБЕДИТЕЛЬ: КОМПЬЮТЕР");
    finishPlay();
    return;
  }
  if (drawCount === maxRounds) {
    alert("GAME OVER! НИЧЬЯ");
    finishPlay();
    return;
  }
  if (playerChoice === computerChoice) {
    drawCount++;
    return "НИЧЬЯ!";
  }
  if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    playScoreCount++;
    playScore.textContent = playScoreCount;
    return "ТЫ ВЫИГРАЛ!";
  } else {
    computerScoreCount++;
    compScore.textContent = computerScoreCount;
    return "КОМПЬЮТЕР ВЫИГРАЛ!";
  }
}
function finishPlay() {
  playScoreCount = 0;
  computerScoreCount = 0;
  drawCount = 0;
  playScore.textContent = playScoreCount;
  compScore.textContent = computerScoreCount;
}
