# Given a column title as appear in an Excel sheet, return its corresponding column number.

def titleToNumber(s):
    length = len(s)
    sum = 0

    for i in range(0, length):
        sum += (ord(s[i]) - 64) * 26 ** (length - i - 1)

    return sum


# print(titleToNumber('A'))  # 1
# print(titleToNumber('AB'))  # 28
# print(titleToNumber('ZY'))  # 701
# print(titleToNumber('AAA'))  # 703
