
let activePlayer;
let secondPlayer;
let winner;
let board;

function startGame() {
  board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
  activePlayer = 'x';
  secondPlayer = 'o';
  renderBoard(board);   
}


function click(row, col) {

  board[row][col] = activePlayer; 
  renderBoard(board);  

  if (board[0][0] === 'x' && board[0][1] === 'x' && board[0][2] === 'x'||
    board[1][0] === 'x' && board[1][1] === 'x' && board[1][2] === 'x' ||
    board[2][0] === 'x' && board[2][1] === 'x' && board[2][2] === 'x' ||
    board[0][0] === 'x' && board[1][0] === 'x' && board[2][0] === 'x' ||
    board[0][1] === 'x' && board[1][1] === 'x' && board[2][1] === 'x' ||
    board[0][2] === 'x' && board[1][2] === 'x' && board[2][2] === 'x' ||
    board[0][0] === 'x' && board[1][1] === 'x' && board[2][2] === 'x' ||
    board[0][2] === 'x' && board[1][1] === 'x' && board[2][0] === 'x') {
    showWinner('1');
    } else if 
      (board[0][0] === 'o' && board[0][1] === 'o' && board[0][2] === 'o'||
      board[1][0] === 'o' && board[1][1] === 'o' && board[1][2] === 'o' ||
      board[2][0] === 'o' && board[2][1] === 'o' && board[2][2] === 'o' ||
      board[0][0] === 'o' && board[1][0] === 'o' && board[2][0] === 'o' ||
      board[0][1] === 'o' && board[1][1] === 'o' && board[2][1] === 'o' ||
      board[0][2] === 'o' && board[1][2] === 'o' && board[2][2] === 'o' ||
      board[0][0] === 'o' && board[1][1] === 'o' && board[2][2] === 'o' ||
      board[0][2] === 'o' && board[1][1] === 'o' && board[2][0] === 'o'){
      showWinner('2'); 
    } else { //смена хода
    let tempPlayer = activePlayer;
    activePlayer = secondPlayer;
    secondPlayer = tempPlayer;
  }
}


