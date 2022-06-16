function crashingWeights(grid) {
  for (let i = 0; i < grid[0].length; i++) {
    for (let j = 0; j < grid.length - 1; j++) {
      if (grid[j][i] > grid[j + 1][i]) {
        grid[j + 1][i] += grid[j][i];
      }
    }
  }

  return grid[grid.length - 1];
}
console.log(
  crashingWeights([
    [1, 3, 3, 2, 2],
    [2, 2, 2, 2, 1],
    [4, 2, 6, 2, 1],
  ])
);
