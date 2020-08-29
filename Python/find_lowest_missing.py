# Given an array of integers, return the lowest number not in the array
# e.g. [1,2,3,5] --> 4

def find_missing_num(arr):
    sorted_set = list(set(arr))
    lowest = 1

    for i in range(0, len(sorted_set)):
        if lowest != sorted_set[i]:
            return lowest
        lowest += 1

    return lowest


# print(find_missing_num([1, 2, 3, 5])) # 4
# print(find_missing_num([5,4,3,1])) # 2
# print(find_missing_num([1, 1, 3, 3, 6, 4, 1, 2])) # 5
