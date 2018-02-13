const messages = {
  currentPlayer: "The current player is: ",
  occupiedSpace: "That apple has already been bitten. Choose another, ",
  weHaveAWinner: "The winner is: ",
  weHaveATie: "You are both very hungry. The game is a draw."
}

function haveWinner() {
  if ( horizontalWin() || verticalWin() || diagonalWin() ) {
    return true
  }
  return false;
}

function playAgain() {
  $('.play-again').show();
  $('.play-again').click(function(e) {
    location.reload();
  });
}

$(document).ready(function() {

  // display initial message shown
  $('#player').removeClass().addClass("player-id-" + currentPlayer.id).text(currentPlayer.name);
  $('.pre-msg').text(messages.currentPlayer);

  // set up event listener on all clickable board buttons
  $('.board-cell').click(function(e) {
    let xCoord = $(this).closest('tr').find('td').index($(this).closest('td'));

    // check to see if space is available, if not direct player to choose another space
    if (!spaceAvailable(xCoord)) {
      $('.pre-msg').text(messages.occupiedSpace);

    // if space is available, show player icon in chosen space and update message shown
    } else {
      let spaceId = spaceAvailable(xCoord);
      addPlayerIcon(currentPlayer, spaceId);
      $('.pre-msg').text(messages.currentPlayer);

      // check for winner or tie after each player's turn
      if (haveWinner()) {
        $('.board-cell').unbind('click');
        $('.pre-msg').text(messages.weHaveAWinner);
        playAgain();
        return;
      }

      if (gameIsDraw()) {
        $('#player').removeClass().addClass().empty();
        $('.board-cell').unbind('click');
        $('.pre-msg').text(messages.weHaveATie);
        playAgain();
        return;
      }
      currentPlayer = nextPlayer();
    }
  })
});
