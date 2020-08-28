// Given an array of integers, return the lowest number not in the array
// e.g. [1,2,3,5] --> 4

const findMissingNumber = (arr) => {
  const sortedSet = [...new Set(arr.sort((a, b) => a - b))];
  let lowest = 1;

  for (let i = 0; i < sortedSet.length; i++) {
    if (lowest !== sortedSet[i]) return lowest;
    lowest++;
  }

  return lowest > 1 ? lowest : 1;
};

console.log(findMissingNumber([1, 2, 3, 5])); // 4
console.log(findMissingNumber([1, 1, 3, 6, 4, 1, 2])); // 5
console.log(findMissingNumber([1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12])); // 9
