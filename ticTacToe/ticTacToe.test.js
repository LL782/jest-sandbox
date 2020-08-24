const TicTacToe = require("./ticTacToe");

describe("ticTacToe", () => {
  let grid;
  let play;

  beforeEach(() => {
    ticTacToe = new TicTacToe();
    play = ticTacToe.play.bind(ticTacToe);
    grid = ticTacToe.grid;
  });
  it("Players take it in turns", () => {
    play(0);
    play(1);
    play(2);
    expect(grid[0]).toBe("X");
    expect(grid[1]).toBe("O");
    expect(grid[2]).toBe("X");
  });
  it("Players can only play in an empty square", () => {
    play(0);
    play(0);
    play(1);
    expect(grid[0]).toBe("X");
    expect(grid[1]).toBe("O");
  });
});
