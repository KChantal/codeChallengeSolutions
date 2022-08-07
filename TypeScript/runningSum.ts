const runningSum = (nums: number[]): number[] => {
  const sumArray: number[] = [];
  
  nums.forEach((num, index) => {
      if (index === 0) {
          sumArray.push(num);
      } else {
          sumArray.push(num + sumArray[index - 1]);
      }
  });
  return sumArray;
};