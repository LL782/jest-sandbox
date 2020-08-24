import { grid, play } from "./ticTacToe";

describe("ticTacToe", () => {
  it("Player X goes first by placing an X on the grid", () => {
    play(0);
    expect(grid[0]).toBe("X");
  });
});
