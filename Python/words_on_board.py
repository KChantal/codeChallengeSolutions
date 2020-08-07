# Given a 'board' (matrix) of letters, write a function to find out if the given word exists on the board


def exist(board, word):
    curr_word = ''
    curr_index = 0

    def find_letters(i, j, next):
        nonlocal curr_word
        nonlocal curr_index

        if i < 0 or i >= len(board) or j < 0 or j >= len(board[0]):
            return

        # print('board: ', board)
        # print('next letter to find: ', next)
        # print('current letter [i][j]: ', board[i][j])
        # print('curr_word', curr_word)

        if board[i][j] == next:
            curr_index += 1
            curr_word += board[i][j]
            board[i][j] = '-'

            if word == curr_word:
                return True

            find_letters(i - 1, j, word[curr_index])
            find_letters(i + 1, j, word[curr_index])
            find_letters(i, j - 1, word[curr_index])
            find_letters(i, j + 1, word[curr_index])

        elif board[i][j] != next or curr_index >= len(board[0]) or not next:
            return

    for row_item in range(0, len(board[0])):
        for col_item in range(0, len(board)):
            try:
                find_letters(row_item, col_item, word[curr_index])
            except IndexError:
                continue

    print(curr_word)
    return curr_word == word


board1 = [
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'C', 'S'],
    ['A', 'D', 'E', 'E']
]
board2 = [
    ['D', 'A'],
    ['O', 'G']
]

print(exist(board1, 'SEE'))
