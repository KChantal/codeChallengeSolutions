# Given a sorted array nums, remove the duplicates in-place such
# that each element appear only once and return the new length.

# Do not allocate extra space for another array, you must do this
# by modifying the input array in-place with O(1) extra memory.

def removeDuplicates(nums):
    j = 1

    for i in range(0, len(nums)):
        try:
            while (nums[j] == nums[i]):
                del nums[j]

        except IndexError:
            break

        j += 1

    return nums

# # Alternative easy peasy solution
# def removeDuplicates(nums):
#     # Create a set out of input, then turn back to list, and return length
#     return len(list(set(nums)))


# print(removeDuplicates([1, 1, 1, 2, 2, 2, 2]))
# print(removeDuplicates([1, 1, 1, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5]))
# print(removeDuplicates([10, 10, 20, 20, 20, 20, 30, 30, 40, 40, 50]))
