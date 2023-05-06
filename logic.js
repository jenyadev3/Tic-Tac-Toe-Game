let activePlayer;
let secondPlayer;
let board;

function startGame() {
  board = [
    ['', '', '', ''],
    ['', '', '', ''],
    ['', '', '', ''],
    ['', '', '', '']
  ];
  activePlayer = 'x';
  secondPlayer = 'o';
  renderBoard(board);   
}

function click(row, col) {
  board[row][col] = activePlayer; 
  renderBoard(board);  
  let column = board.map(row => row[col]);
  let diag1 = board.map((row, i) => row[i]);
  let diag2 = board.map((row, i) => row[board.length - 1 - i]);

  if ((board[row].every(element => element === 'x')) || (column.every(element => element === 'x')) || (diag1.every(element => element === 'x')) || (diag2.every(element => element === 'x'))) {
    showWinner('1');
  }  
  else if ((board[row].every(element => element === 'o')) || (column.every(element => element === 'o')) || (diag1.every(element => element === 'o')) || (diag2.every(element => element === 'o'))) {
    showWinner('2');
  } else {
  // Меняем игроков, если никто не выиграл
  let tempPlayer = activePlayer;
  activePlayer = secondPlayer;
  secondPlayer = tempPlayer;    
  }  
}


