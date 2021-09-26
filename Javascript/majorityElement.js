/**
 * @param {number[]} nums
 * @return {number}
 */

 const majorityElement = (nums) => {
  const count = {};
  
  for (let i = 0; i < nums.length; i++) {
      if (!count[nums[i]]) {
          count[nums[i]] = 1;
      } else {
          count[nums[i]] += 1;
      }
  }
  
  let highest = 0;
  let majorityEl;
  
  Object.keys(count).forEach(num => {
      if (count[num] > highest) {
          highest = count[num];
          majorityEl = num;
      } 
  });
  
  return majorityEl;
};