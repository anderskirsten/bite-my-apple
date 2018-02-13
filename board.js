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

  // ensure space is available and force selection to bottom most available row
  function spaceAvailable(xCoord) {
    let available = false;
    let yCoord = 5;

    while (!available) {
      let spaceId = '#' + yCoord + '-' + xCoord + "-coord";
      if ($(spaceId + ' > button').hasClass("default-img")) {
        available = true;
        return spaceId;
      } else {
        if (yCoord < 0) {
          return false;
        } else {
          yCoord -= 1;
        }
      }
    }
    return spaceId;
  }

  // place currentPlayer icon in selected space
  function addPlayerIcon(currentPlayer, spaceId) {
    let iconClass;
    currentPlayer.id === 1 ? iconClass = 'ambrosia' : iconClass = 'jupiter';

    $(spaceId + ' > button').removeClass('default-img').addClass(iconClass);
  }

  // game is a tie
  function gameIsDraw() {
    let x = 0;

    while (x <= 6) {
      if (spaceAvailable(x)) {
        return false
      } else {
        x++;
      }
    }
    return true;
  }

  function checkSpaceOccupant(y, x) {
    let spaceId = '#' + y + '-' + x + "-coord";
    if ($(spaceId + ' > button').hasClass(currentPlayer.name.toLowerCase())) {
        return true;
    } else {
      return false;
    }
  }

  // ways to win : horizontal, vertical, diagonal
  function horizontalWin() {
    let winTally = 0;
    // loop through each cell by row, loop through all rows
    for (let y = 5; y >= 0; y--) {
      for (let x = 0; x <= 6; x++) {
        if (checkSpaceOccupant(y, x)) {
          winTally++;
          if (winTally >= 4) { return true };
        } else {
          // reset tally as occupied spaces aren't consecutive
          winTally = 0;
        }
      }
      // set tally back to zero before looping through the next row
      winTally = 0;
    }
    // return false if no winner is found
    return false;
  }

  function verticalWin() {
    let winTally = 0;

    // loop through each cell by column, loop through all columns
    for (let x = 0; x <= 6; x++) {
      for (let y = 5; y >= 0; y--) {
        if (checkSpaceOccupant(y, x)) {
          winTally++;
          // if player fills 4 consecutive vertical spaces, return winner as true
          if (winTally >= 4) { return true };
          // reset tally as occupied spaces aren't consecutive
        } else {
          winTally = 0;
        }
      }
      // set tally back to zero before looping through the next column
      winTally = 0;
    }
    // return false if no winner is found
    return false;
  }

  function diagonalWin() {
    let winTally = 0;
    let y = 5;

    // start bottom left moving up right to check for win
    //console.log("Looking up to the right...");
    for (let x = 0; x <= 6; x++) {
      let xUp = x;
      //console.log("x is currently: " + x + " and y is currently: " + y);

      while (y > 0 && xUp <= 6) {
         if (checkSpaceOccupant(y, xUp)) {
          winTally++;
          // if player fills 4 consecutive diagonal spaces, return winner as true
          if (winTally >= 4) { return true };
          // set tally back to zero if filled spaces are not consecutive
        } else {
          // reset tally as occupied spaces aren't consecutive
          winTally = 0;
        }
        y--;
        xUp++;
      }
      // set tally back to zero and y back to bottom row before looping through the next diagonal
      winTally = 0;
      y = 5;
    }

    // start bottom right moving up left to check for win
    for (let x = 6; x >= 0; x--) {
      let xUp = x;

      while (y > 0 && xUp >= 0) {
        if (checkSpaceOccupant(y, xUp)) {
          winTally++;
          // if player fills 4 consecutive horizontal spaces, return winner as true
          if (winTally >= 4) { return true }
        } else {
          // reset tally as occupied spaces aren't consecutive
          winTally = 0;
        }
        y--;
        xUp--;
      }
      // set tally back to zero and y back to bottom row before looping through the next diagonal
      winTally = 0;
      y = 5;
    }
  }

buildBoard(board);
