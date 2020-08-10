// Fizzbuzz challenge given starting number (N) up to M, inclusive

const run = (N, M) => {
  let sequence = "";

  for (let i = N; i <= M; i++) {
    i % 5 === 0 && i % 3 === 0
      ? (sequence += "FizzBuzz,")
      : i % 5 === 0
      ? (sequence += "Buzz,")
      : i % 3 === 0
      ? (sequence += "Fizz,")
      : (sequence += `${i},`);
  }

  return sequence.slice(0, sequence.length - 1);
};

// console.log(run(1, 5)); // -> "1,2,Fizz,4,Buzz"
// console.log(run(20, 30));
