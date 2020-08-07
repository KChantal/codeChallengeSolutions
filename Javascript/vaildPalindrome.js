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

const str1 = "A man, a plan, a canal: Panama";
const str2 = "Two wonderful dogs!";

// console.log(isPalindrome(str1));
// console.log(isPalindrome(str2));
// console.log(isPalindrome("ab_a"));
