// Selectors
const scoreboard = document.getElementById('scoreboard');
const game = document.getElementById('game');
const setRules = document.getElementById('setRules');

const playerOneWins = document.getElementById('playerOneWins');
const playerTwoWins = document.getElementById('playerTwoWins');

const playerOneScoreboard = document.getElementById('playerOneScoreboard');
const playerTwoScoreboard = document.getElementById('playerTwoScoreboard');

const playerOneDice = document.getElementById('playerOneDice');
const playerTwoDice = document.getElementById('playerTwoDice');

const rollBtn = document.getElementById('rollBtn');
const resetBtn = document.getElementById('resetBtn');
const setGamesBtn = document.getElementById('setGamesBtn');

const message = document.getElementById('message');
const numberOfWinsTitle = document.getElementById('numberOfWinsTitle');
const winsRequired = document.getElementById('winsRequired');

// Game state
const winCondition = 20;
let maxWins = 0;
let playerOneScore = 0;
playerTwoScore = 0;
playerOneTurn = true;
playerOneTotalWins = 0;
playerTwoTotalWins = 0;
// Additional to challenge adding a turn as Player one always has advantege
let playerOneRolls = 0;
playerTwoRolls = 0;

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
  resetBtn.style.display = 'none';
  rollBtn.style.display = 'block';
  message.textContent = 'Player 1 Turn';
};

const masterReset = () => {
  console.log('Master Reset has been executed');
  gameReset();
  numberOfWinsTitle.textContent = 'Select number required to win 1-10';
  maxWins = 0;
  game.style.display = 'none';
  setRules.style.display = 'block';
  playerOneWins.textContent = '0';
  playerTwoWins.textContent = '0';
  winsRequired.textContent = 'Are you ready to roll 🎲🎲🎲';

  let rounds = playerOneTotalWins + playerTwoTotalWins;
  for (i = 0; i <= rounds; i++) {
    scoreboard.deleteRow(2);
  }
};
const gameOver = () => {
  addResults(playerOneScore, playerTwoScore);
  rollBtn.style.display = 'none';
  resetBtn.style.display = 'block';
};

const addResults = (playerOneScore, playerTwoScore) => {
  const finalScoreRow = document.createElement('tr');
  const playerOneFinalScore = document.createElement('td');
  const playerTwoFinalScore = document.createElement('td');
  const winner = document.createElement('td');

  playerOneFinalScore.textContent = playerOneScore;
  playerTwoFinalScore.textContent = playerTwoScore;
  if (playerOneScore > playerTwoScore) {
    winner.textContent = 'Player 1';
    playerOneTotalWins++;
    playerOneWins.textContent = playerOneTotalWins;
  } else {
    winner.textContent = 'Player 2';
    playerTwoTotalWins++;
    playerTwoWins.textContent = playerTwoTotalWins;
  }

  finalScoreRow.appendChild(playerOneFinalScore);
  finalScoreRow.appendChild(playerTwoFinalScore);
  finalScoreRow.appendChild(winner);

  scoreboard.appendChild(finalScoreRow);
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

resetBtn.addEventListener('click', () => {
  gameReset();
  if (playerOneTotalWins == maxWins || playerTwoTotalWins == maxWins) {
    masterReset();
  }
});

setGamesBtn.addEventListener('click', () => {
  maxWins = document.getElementById('numberOfWins').value;
  if (maxWins <= 0 || maxWins > 10) {
    alert('Invalid number of wins');
  } else {
    winsRequired.textContent = `First to win ${maxWins} out of ${maxWins * 2 - 1}`;
    game.style.display = 'block';
    setRules.style.display = 'none';
  }
});
