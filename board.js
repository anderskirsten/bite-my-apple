const board = document.getElementById('board');

const buildBoard = function (board) {
  // create 6 rows
  for (let y = 0; y < 6; y++) {
    let boardRow = board.insertRow(y);
    // create 7 columns by inserting 7 cells in each row
    for (let x = 0; x < 7; x++) {
      let boardCell = boardRow.insertCell(x);
      let cellCoord = y + ":" + x;

      // insert a button with class 'board-cell' and id yx coordinates
      boardCell.innerHTML = "<button class='board-cell default-img'></button>";
      boardCell.setAttribute("id", y + "-" + x + "-coord");
    }
  }
}

// helper functions to deal with board state
  // force selection to bottom most available row
  //const lowestAvailableRow = function(yCoord, xCoord) {}

  // space is occupied

  // place currentPlayer icon in selected space
  function addPlayerIcon(currentPlayer, yCoord, xCoord) {
    console.log("current player is " + currentPlayer.name + ". Current player id is " + currentPlayer.id);
    let iconClass;
    if (currentPlayer.id === 1) {
      iconClass = 'ambrosia';
    } else {
      iconClass = 'jupiter';
    }
    let spaceId = '#' + yCoord + '-' + xCoord + "-coord";

    $(spaceId + ' > button').removeClass('default-img').addClass(iconClass);
  }

  // game is a tie
  // ways to win : horizontal, vertical, diagonal

buildBoard(board);
