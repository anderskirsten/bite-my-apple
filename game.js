const messages = {
  currentPlayer: "The current player is: ",
  occupiedSpace: "That apple has already been bitten. Choose another.",
  weHaveAWinner: "The winner is: ",
  weHaveATie: "You are both very hungry. The game is a draw.",
  playAgain: "Play again?"
}

//const haveWinner = function() {}

//const playAgain = function() {}

$(document).ready(function() {

  $('#player').removeClass().addClass("player-id-" + currentPlayer.id).text(currentPlayer.name);
  $('.pre-msg').text(messages.currentPlayer);

  // set up event listener on all clickable board buttons
  $('.board-cell').click(function(e) {
    let yCoord = $('#board tr').index($(this).closest('tr'));
    let xCoord = $(this).closest('tr').find('td').index($(this).closest('td'));

    console.log("y coordinates = " + yCoord + " and x coordinates = " + xCoord);

    addPlayerIcon(currentPlayer, yCoord, xCoord);
    console.log(currentPlayer.name);
    currentPlayer = nextPlayer(currentPlayer);
    console.log(currentPlayer.name);
  })
});
