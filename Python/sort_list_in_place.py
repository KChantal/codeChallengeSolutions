import math


def sort_list(list):
    if not list:
        return []

    j = len(list) - 1
    halfway = math.floor(len(list) / 2)

    for i in range(0, halfway):
        temp = list[i]
        list[i] = list[j]
        list[j] = temp
        j -= 1

    return list


# print(sort_list([5, 4, 3, 2, 1]))
# print(sort_list([10,20,30,40,50,60,70,80,90,100]))
