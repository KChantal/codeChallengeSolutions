// Given a column title as appear in an Excel sheet, return its corresponding column number.

const titleToNumber = (s) => {
  let sum = 0;
  const len = s.length;

  for (let i = 0; i < len; i++) {
    const letterCode = (s[i].charCodeAt(0) - 64) * 26 ** (len - i - 1);
    sum += letterCode;
  }

  return sum;
};

// console.log(titleToNumber("A")); // -> 1
// console.log(titleToNumber("AB")); // -> 28
// console.log(titleToNumber("ZY")); // -> 701
// console.log(titleToNumber("AAA")); // -> 703
