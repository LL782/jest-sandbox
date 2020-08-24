class TicTacToe {
  constructor() {
    this.grid = ["X"];
  }

  play(position) {
    if (position === 1) {
      this.grid.push("O");
    }
  }
}

module.exports = TicTacToe;
