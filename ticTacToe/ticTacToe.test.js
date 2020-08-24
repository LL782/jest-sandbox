const TicTacToe = require("./ticTacToe");

describe("ticTacToe", () => {
  let grid;
  let play;

  beforeEach(() => {
    ticTacToe = new TicTacToe();
    play = ticTacToe.play.bind(ticTacToe);
    grid = ticTacToe.grid;
  });
  it("Player X goes first by placing an X in the first square of the grid", () => {
    play(0);
    expect(grid[0]).toBe("X");
  });
  it("Player O goes second by placing an O in the second square of the grid", () => {
    play(0);
    play(1);
    expect(grid[1]).toBe("O");
  });
  it("Play alternative between players X and O", () => {
    play(0);
    play(1);
    play(2);
    expect(grid[0]).toBe("X");
    expect(grid[1]).toBe("O");
    expect(grid[2]).toBe("X");
  });
});
