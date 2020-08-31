// Given a sorted array nums, remove the duplicates in-place such
// that each element appear only once and return the new length.

// Do not allocate extra space for another array, you must do this
// by modifying the input array in-place with O(1) extra memory.

const removeDuplicates = (nums) => {
  // If array weren't sorted, sort in place
  // nums.sort();
  let j = 1;

  for (let i = 0; i < nums.length; i++) {
    while (nums[j] === nums[i]) {
      // Splice out 1 element
      nums.splice(j, 1);
    }
    j++;
  }
  return nums.length;
};

// Easy peasy version
// const removeDuplicates = (nums) => {
//   return [...new Set(nums)].length;
// };

// console.log(removeDuplicates([10, 10, 10, 20, 30, 30]));
// console.log(removeDuplicates([1, 1, 2, 2, 3, 3, 4, 4]));
// console.log(removeDuplicates([10, 30, 40, 50, 20, 20, 30]));
// console.log(removeDuplicates([5, 5, 5, 5]));
// console.log(removeDuplicates([1, 1, 2]));
