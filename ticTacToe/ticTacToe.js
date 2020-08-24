const grid = ["X"];

const play = position => {
  if (position === 1) {
    grid.push("O");
  }
};

export { grid, play };
