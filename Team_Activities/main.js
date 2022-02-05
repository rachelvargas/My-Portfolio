const board = document.querySelector('.board');
const divBoard = document.querySelector('.divBoard');
const resetButton = document.getElementById('reset');
const player1 = 'X';
const player2 = 'O';
let current_player = player1;

function addPiece(e) {
    console.log(e.target.getAttribute('class'));
    let score_keeper = [];
    e.target.innerHTML = current_player;
    
    if (current_player === player1) current_player = player2;
    else current_player = player1;
    
    }
// table version(first table)
function resetBoard() {
  console.dir(board);
  for (let i = 0; i < board.rows.length; i++) {
    let row = board.rows[i];
    for (let x = 0;  x < row.cells.length; x++) {
      row.cells[x].innerHTML = '';
    }
  }
}
// div version(second tablr)
function resetBoardDiv() {
  const divBoard = document.querySelector('.divBoard');
  for (let i = 0; i < divBoard.children.length; i++) {
    divBoard.children[i].innerText = '';
  }
  const children = Array.from(divBoard.children);
  const empty = children.filter(function(child) {
    return child.innerText == 'X' || child.innerText == 'O';
  });
  console.log(empty);
}
board.addEventListener('click', addPiece);
divBoard.addEventListener('click', addPiece);
reset.addEventListener('click', resetBoardDiv);
reset.addEventListener('click', resetBoard);
