const ogFibonacci = (n) => {
  if (n < 2) return n;
  return ogFibonacci(n - 1) + ogFibonacci(n - 2);
}

const fibonacci = (n, memo = {}) => {
  console.log('calculating');
  if (n < 2) return n;
  const nMinus1 = memo[n - 1] ? memo[n - 1] : fibonacci(n - 1, memo);
  if (!memo[n - 1]) memo[n - 1] = nMinus1;
  const nMinus2 = memo[n - 2] ? memo[n - 2] : fibonacci(n - 2, memo);
  if (!memo[n - 2]) memo[n - 2] = nMinus2;
  return nMinus1 + nMinus2;
}

// ************************************************************************
// ************************************************************************

const memo = {};
console.log(ogFibonacci(10));
console.log('177 calculations for ogFibonacci(10)...');
console.log(fibonacci(10, memo));
console.log('11 calculations for fibonacci(10)...');
console.log(memo);
