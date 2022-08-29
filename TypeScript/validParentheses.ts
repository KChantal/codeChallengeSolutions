// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:
// 1. Open brackets must be closed by the same type of brackets.
// 2. Open brackets must be closed in the correct order.

interface BracketPairs {
  [key: string]: string
}

const isValid = (s: string): boolean => {
  if (!s.length) return false;

  const bracketPairs: BracketPairs = {
    '(': ')',
    '[': ']',
    '{': '}',
  };
  const stack: string[] = [];

  for (let i = 0; i < s.length; i++) {
    const currentBracket= s[i];
    const lastItemInStack = stack[stack.length - 1];

    if (Object.keys(bracketPairs).includes(currentBracket)) {
      stack.push(currentBracket);
    } else if (bracketPairs[lastItemInStack] === currentBracket) {
      stack.pop();
    } else {
      return false;
    }
  }
  return stack.length === 0;
}

// const test1 = '()'; 
// const test2 = '({[]})';
// const test3 = '())';
// const test4 = '([)]';
// const test5 = '()[]([]){[()]}';


// console.log('Test for test1: ', isValid(test1)); // true
// console.log('Test for test2: ', isValid(test2)); // true
// console.log('Test for test3: ', isValid(test3)); // false
// console.log('Test for test4: ', isValid(test4)); // false
// console.log('Test for test5: ', isValid(test5)); // true
