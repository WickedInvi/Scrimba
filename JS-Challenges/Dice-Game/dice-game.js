// Game state
const winCondition = 20;
let playerOneScore = 0;
playerTwoScore = 0;
playerOneTurn = true;
// Additional to challenge adding a turn as Player one always has advantege
let playerOneRolls = 0;
playerTwoRolls = 0;

// Selectors
const playerOneScoreboard = document.getElementById('playerOneScoreboard');
const playerTwoScoreboard = document.getElementById('playerTwoScoreboard');

const playerOneDice = document.getElementById('playerOneDice');
const playerTwoDice = document.getElementById('playerTwoDice');

const rollBtn = document.getElementById('rollBtn');
const resetBtn = document.getElementById('resetBtn');

const message = document.getElementById('message');

// Logic
const gameReset = () => {
  playerOneScore = 0;
  playerTwoScore = 0;
  playerOneTurn = true;
  playerOneScoreboard.textContent = 0;
  playerTwoScoreboard.textContent = 0;
  playerOneDice.textContent = '-';
  playerTwoDice.textContent = '-';
  playerOneRolls = 0;
  playerTwoRolls = 0;
  rollBtn.style.display = 'block';
  resetBtn.style.display = 'none';
};

const gameOver = () => {
  rollBtn.style.display = 'none';
  resetBtn.style.display = 'block';
};

rollBtn.addEventListener('click', () => {
  const randomNumber = Math.floor(Math.random() * 6) + 1;

  if (playerOneTurn) {
    playerOneDice.textContent = randomNumber;
    playerOneScore += randomNumber;
    playerOneScoreboard.textContent = playerOneScore;
    message.textContent = 'Player 2 Turn';
    playerOneRolls++;
  } else {
    playerTwoDice.textContent = randomNumber;
    playerTwoScore += randomNumber;
    playerTwoScoreboard.textContent = playerTwoScore;
    message.textContent = 'Player 1 Turn';
    playerTwoRolls++;
  }

  playerOneTurn = !playerOneTurn;
  playerOneDice.classList.toggle('active');
  playerTwoDice.classList.toggle('active');

  if (playerOneRolls === playerTwoRolls) {
    if (playerOneScore >= winCondition && playerOneScore > playerTwoScore) {
      message.textContent = 'Player 1 Wins';
      gameOver();
    } else if (playerTwoScore >= winCondition && playerTwoScore > playerOneScore) {
      message.textContent = 'Player 2 Wins';
      gameOver();
    }
  }
});

resetBtn.addEventListener('click', gameReset);
