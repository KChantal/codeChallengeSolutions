const titleToNumber = (s) => {
  let sum = 0;

  for (let i = 0; i < s.length; i++) {
    console.log(s.length - i - 1);
    const letterCode = (s[i].charCodeAt(0) - 64) * 26 ** (s.length - i - 1);
    sum += letterCode;
  }

  return sum;
};

// console.log(titleToNumber("A")); // -> 1
// console.log(titleToNumber("AB")); // -> 28
// console.log(titleToNumber("ZY")); // -> 701
// console.log(titleToNumber("AAA")); // -> 703
