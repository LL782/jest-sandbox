const ticTacToe = {
  currentPlayer: "X",
  grid: ["", "", "", "", "", "", "", "", "", ""],
  play: function() {
    ticTacToe.grid[0] = ticTacToe.currentPlayer;
    ticTacToe.changePlayer();
  },
  changePlayer: function() {
    ticTacToe.currentPlayer = ticTacToe.currentPlayer === "X" ? "O" : "X";
  }
};

module.exports = ticTacToe;
