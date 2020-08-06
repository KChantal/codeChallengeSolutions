const findDuplicates = (nums) => {
  const dups = [];
  const trackerObj = {};

  for (let i = 0; i < nums.length; i++) {
    if (trackerObj[nums[i]]) dups.push(nums[i]);
    else trackerObj[nums[i]] = 1;
  }

  return dups;
};

// console.log(findDuplicates([2, 3, 4, 5, 6, 7, 5, 4, 3, 2, 1]));
