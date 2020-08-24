class TicTacToe {
  constructor() {
    this.grid = [];
    this.currentPlayer = "X";
  }

  alternatePlayer() {
    this.currentPlayer = this.currentPlayer === "X" ? "O" : "X";
  }

  play(square) {
    this.grid[square] = this.currentPlayer;
    this.alternatePlayer();
  }
}

module.exports = TicTacToe;
