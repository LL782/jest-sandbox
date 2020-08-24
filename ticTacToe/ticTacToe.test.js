const TicTacToe = require("./ticTacToe");

describe("ticTacToe", () => {
  let ticTacToe;
  let play;

  beforeEach(() => {
    ticTacToe = new TicTacToe();
    play = ticTacToe.play.bind(ticTacToe);
  });
  it("Player X goes first by placing an X on the grid", () => {
    ticTacToe.play(0);
    expect(ticTacToe.grid[0]).toBe("X");
  });
  it("Player O goes second by placing an O on the grid", () => {
    play(1);
    expect(ticTacToe.grid[1]).toBe("O");
  });
});
