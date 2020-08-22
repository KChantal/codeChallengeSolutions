# Given an array A of non-negative integers,
# return an array consisting of all the even elements of A, followed by all the odd elements of A.

def sortArrayByParity(array):
    even = [n for n in array if n % 2 == 0]
    odd = [n for n in array if n % 2 != 0]

    return even + odd


# print(sortArrayByParity([3, 1, 2, 4]))
# print(sortArrayByParity([7, 8, 9, 4, 5, 6, 2, 3, 4, 1, 10]))
