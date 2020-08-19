const sortArray = (arr) => {
  if (!arr) return [];

  let j = arr.length - 1;

  for (let i = 0; i < Math.floor(arr.length) / 2; i++) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    j--;
  }

  return arr;
};

// console.log(sortArray([1, 2, 3, 4, 5]));
// console.log(sortArray([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));
// console.log(sortArray([]));
