const dfs = (grid: string[][], i: number, j: number) => {
  if (i < 0 || i >= grid.length || j < 0 || j >= grid[i].length || grid[i][j] !== '1') {
    return 0;
  }
  grid[i][j] = '2';

  dfs(grid, i+1, j);
  dfs(grid, i, j+1);
  dfs(grid, i-1, j);
  dfs(grid, i, j-1);

  return 1;
};

const numIslands = (grid: string[][]): number => {
  let islands = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === '1') {
        islands += dfs(grid, i, j); 
      }
    }
  }
  return islands;
}


// const grid1 = [
//   ["1", "1", "1", "1", "0"],
//   ["1", "1", "0", "1", "0"],
//   ["1", "1", "0", "0", "0"],
//   ["0", "0", "0", "0", "0"]
// ]

// const grid2 = [
//   ["1", "1", "0", "0", "0"],
//   ["1", "1", "0", "0", "0"],
//   ["0", "0", "1", "0", "0"],
//   ["0", "0", "0", "1", "1"]
// ]

// const grid3 = [
//   ["1", "0", "1", "1", "0"],
//   ["1", "0", "0", "0", "1"],
//   ["0", "0", "1", "0", "0"],
//   ["1", "1", "0", "1", "1"]
// ]


// const result1 = numIslands(grid1); // 1
// const result2 = numIslands(grid2); // 3
// const result3 = numIslands(grid3); // 6

// console.log('result1: ', result1);
// console.log('result2: ', result2);
// console.log('result3: ', result3);