const playerOne = {
  id: 1,
  name: "Ambrosia"
}

const playerTwo = {
  id: 2,
  name: "Jupiter"
}

function nextPlayer (currentPlayer) {
  currentPlayer.id === 1 ? currentPlayer = playerTwo : currentPlayer = playerOne;

  ('#player').removeClass().addClass(currentPlayer.id).text(currentPlayer.name);
}
