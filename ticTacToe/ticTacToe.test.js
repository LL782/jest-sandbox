const TicTacToe = require("./ticTacToe");

describe("ticTacToe", () => {
  let grid;
  let play;

  beforeEach(() => {
    ticTacToe = new TicTacToe();
    play = ticTacToe.play.bind(ticTacToe);
    grid = ticTacToe.grid;
  });
  it("Player X goes first by placing an X on the grid", () => {
    play(0);
    expect(grid[0]).toBe("X");
  });
  it("Player O goes second by placing an O on the grid", () => {
    play(0);
    play(1);
    expect(grid[1]).toBe("O");
  });
});
