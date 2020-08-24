class TicTacToe {
  constructor() {
    this.grid = [];
    this.currentPlayer = "X";
  }

  alternatePlayer() {
    this.currentPlayer = this.currentPlayer === "X" ? "O" : "X";
  }

  play(square) {
    if (!!this.grid[square]) {
      return;
    }
    this.grid[square] = this.currentPlayer;
    this.alternatePlayer();
  }
}

module.exports = TicTacToe;
