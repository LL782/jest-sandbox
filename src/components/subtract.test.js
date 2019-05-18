const subtract = require("./subtract");

describe("subtract", () => {
  it("subtracts", () => {
    expect(subtract(4, 2)).toBe(2);
  });
});
