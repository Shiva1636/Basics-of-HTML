const cells = document.querySelectorAll('[data-cell]');
const board = document.getElementById('game-board');
const messageBox = document.getElementById('message');
const winnerMessage = document.getElementById('winner-message');
const restartButton = document.getElementById('restart-btn');

const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

let oTurn;

startGame();

restartButton.addEventListener('click', startGame);

function startGame() {
  oTurn = false;
  cells.forEach(cell => {
    cell.classList.remove('x', 'o');
    cell.removeEventListener('click', handleClick);
    cell.addEventListener('click', handleClick, { once: true });
  });
  messageBox.classList.add('hidden');
}

function handleClick(e) {
  const cell = e.target;
  const currentClass = oTurn ? 'o' : 'x';
  placeMark(cell, currentClass);
  if (checkWin(currentClass)) {
    endGame(false);
  } else if (isDraw()) {
    endGame(true);
  } else {
    swapTurns();
  }
}

function placeMark(cell, currentClass) {
  cell.classList.add(currentClass);
}

function swapTurns() {
  oTurn = !oTurn;
}

function checkWin(currentClass) {
  return WINNING_COMBINATIONS.some(combination => {
    return combination.every(index => {
      return cells[index].classList.contains(currentClass);
    });
  });
}

function isDraw() {
  return [...cells].every(cell => {
    return cell.classList.contains('x') || cell.classList.contains('o');
  });
}

function endGame(draw) {
  if (draw) {
    winnerMessage.innerText = "It's a Draw!";
  } else {
    winnerMessage.innerText = `${oTurn ? "O" : "X"} Wins!`;
  }
  messageBox.classList.remove('hidden');
}
