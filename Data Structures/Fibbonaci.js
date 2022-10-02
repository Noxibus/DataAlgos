//recursive solution, big O = O(2 ^ n), ie awful
function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

//memoised solution
//answers to completed sub-problems stored in memo array
function memoFib(n, memo = []) {
  //check if we have solved something already
  if (memo[n] !== undefined) return memo[n];
  //base case
  if (n <= 2) return 1;
  //calculate sub-problem outputs and store in memo
  let res = fib(n - 1, memo) + fib(n - 2, memo);
  memo[n] = res;
  return res;
}

//tabulated solution
function tabFin(n) {
  if (n <= 2) return 1;
  let fibNums = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
  }
  return fibNums[n];
}
