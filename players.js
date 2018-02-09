const playerOne = {
  id: 1,
  name: "Ambrosia",
  icon: 'assets/images/player_one_mouth.png'
}

const playerTwo = {
  id: 2,
  name: "Jupiter",
  icon: 'assets/images/player_two_mouth.png'
}

// player related helper functions

function nextPlayer(player) {
  if (currentPlayer.id === 1) {
    currentPlayer = playerTwo;
  } else {
    currentPlayer = playerOne;
  }
  console.log(currentPlayer.name);
  $('#player').removeClass().addClass(currentPlayer.id).text(currentPlayer.name);
  return currentPlayer;
}

let currentPlayer = playerOne;
