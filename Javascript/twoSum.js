// Leetcode challenge
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

const twoSum = (nums, target) => {
  const indeces = [];

  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i];
    const complement = target - currentNum;
    const lastIndexOfNum = nums.lastIndexOf(currentNum);

    if ((currentNum !== complement) || (currentNum === complement && i !== lastIndexOfNum)) {
      if (currentNum === complement && i !== lastIndexOfNum) {
        indeces.push(i, lastIndexOfNum);
        return indeces;
      }

      if (nums.includes(complement)) {
        indeces.push(i, nums.indexOf(complement));
        return indeces;
      }
    }
  }
};

// console.log(twoSum([2,7,11,15], 9)); // ---> [0, 1]
// console.log(twoSum([3,2,4], 6)); // ---> [1, 2]
// console.log(twoSum([9, 3, 4, 2, 8, 1], 9)); // --> [4, 5]
// console.log(twoSum([3,7,3], 6)); // ---> [0, 2]
