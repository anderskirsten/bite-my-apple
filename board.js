var board = document.getElementById('board');

var buildBoard = function (board) {
  // create 6 rows
  for (var y = 0; y < 6; y++) {
    var boardRow = board.insertRow(y);
    // create 7 columns by inserting 7 cells in each row
    for (var x = 0; x < 7; x++) {
      var boardCell = boardRow.insertCell(x);
      // insert a button with class 'board-cell' and id yx coordinates
      boardCell.innerHTML = '<button class="board-cell default-img"></button>';
      boardCell.setAttribute("id", y + ":" + x);
    }
  }
}

buildBoard(board);
