# Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
# Return the running sum of nums.

def running_sum(nums):
    sum_list = []

    for i in range(0, len(nums)):
        if i == 0:
            sum_list.append(nums[i])
        else:
            sum_list.append(nums[i] + sum_list[i - 1])

    return sum_list
