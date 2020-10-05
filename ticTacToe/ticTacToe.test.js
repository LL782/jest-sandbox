const ticTacToe = require("./ticTacToe");

describe("Tic Tac Toe", () => {
  it("the board is initially blank (9 empty square)", () => {
    expect(ticTacToe.grid).toEqual(["", "", "", "", "", "", "", "", "", ""]);
  });

  it("player X goes first", () => {
    ticTacToe.play();
    expect(ticTacToe.grid).toEqual(["X", "", "", "", "", "", "", "", "", ""]);
  });
  it("player O goes second", () => {
    ticTacToe.play();
    expect(ticTacToe.grid).toEqual(["O", "", "", "", "", "", "", "", "", ""]);
  });
});
