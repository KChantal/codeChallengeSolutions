const meanderingArray = (unsorted) => {
  const sortedArr = unsorted.sort((a, b) => a - b);
  const outputArr = [];
  let j = sortedArr.length - 1;

  for (let i = 0; i < Math.ceil(sortedArr.length / 2); i++) {
    outputArr.push(sortedArr[j], sortedArr[i]);
    j--;
  }
  if (outputArr.length > sortedArr.length) outputArr.pop();

  return outputArr;
};

// const arr1 = [-1, 1,2,3,-5];
// const arr2 = [-20, -10, -5, 10, 20];

// console.log(meanderingArray(arr1));
// console.log(meanderingArray(arr2));
