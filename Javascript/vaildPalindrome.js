// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

const isPalindrome = (str) => {
  const reversed = str
    .toLowerCase()
    .replace(/\W|_/g, "")
    .split("")
    .reverse()
    .join("");
  const unreversed = str.toLowerCase().replace(/\W|_/g, "");

  return reversed === unreversed;
};
