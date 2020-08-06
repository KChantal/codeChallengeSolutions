def findDuplicates(nums):
    dups = []
    tracker_dict = {}
    
    for i in range(0, len(nums)):
        try:
            if (tracker_dict[nums[i]] == 1):
                dups.append(nums[i])
        except KeyError:
            tracker_dict[nums[i]] = 1
            
    return dups


# print(findDuplicates([4,3,2,7,8,2,3,1]))
# print(findDuplicates([2,3,4,5,6,7,6,5,4,3,2,1]))