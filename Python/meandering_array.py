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
