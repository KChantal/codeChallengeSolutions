# Leetcode challenge
# Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
# You may assume that each input would have exactly one solution, and you may not use the same element twice.
# You can return the answer in any order.

def twoSum(nums, target):
    indeces = []
    pairs = {}

    for i in range(len(nums)):
        summand = target - nums[i]

        if summand in pairs:
            indeces.extend([i, pairs[summand]])
            return indeces
        else:
            pairs[nums[i]] = i

    return indeces
