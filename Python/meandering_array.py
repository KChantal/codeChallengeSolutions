import math


def meandering_array(unsorted):
    sortedList = sorted(unsorted)
    output = []
    j = len(sortedList) - 1
    middle = math.ceil(len(sortedList) / 2)

    for i in range(0, middle):
        if (i == j):
            output.append(sortedList[i])
        else:
            output.extend([sortedList[j], sortedList[i]])
        j -= 1

    return output


# print(meandering_array([-20, -10, -5, 10, 20]))
# print(meandering_array([-20, -10, -5, 10, 20, -50]))
# print(meandering_array([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]))
