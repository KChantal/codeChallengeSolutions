# Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

# An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.
# You may assume all four edges of the grid are all surrounded by water.

def dfs(grid, i, j):
    if (i < 0 or
        i >= len(grid) or
        j < 0 or
        j >= len(grid[i]) or
            grid[i][j] != '1'):
        return 0

    grid[i][j] = '2'

    dfs(grid, i + 1, j)
    dfs(grid, i, j + 1)
    dfs(grid, i - 1, j)
    dfs(grid, i, j - 1)

    return 1


def num_islands(grid):
    islands = 0

    for i in range(len(grid)):
        for j in range(len(grid[i])):
            if grid[i][j] == '1':
                islands += dfs(grid, i, j)

    return islands


# Test cases

# grid1 = [
#     ["1", "1", "1", "1", "0"],
#     ["1", "1", "0", "1", "0"],
#     ["1", "1", "0", "0", "0"],
#     ["0", "0", "0", "0", "0"]
# ]

# grid2 = [
#     ["1", "1", "0", "0", "0"],
#     ["1", "1", "0", "0", "0"],
#     ["0", "0", "1", "0", "0"],
#     ["0", "0", "0", "1", "1"]
# ]

# grid3 = [
#     ["1", "0", "1", "1", "0"],
#     ["1", "0", "0", "0", "1"],
#     ["0", "0", "1", "0", "0"],
#     ["1", "1", "0", "1", "1"]
# ]

# grid1_result = num_islands(grid1)  # 1
# grid2_result = num_islands(grid2)  # 3
# grid3_result = num_islands(grid3)  # 6

# print('grid1_result: ', grid1_result)
# print('grid2_result: ', grid2_result)
# print('grid3_result: ', grid3_result)
