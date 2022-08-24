//Write a function called maxSubArraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array

//naive solution
//num = number of digits we are trying to sum together
function maxSubArraySum1(arr, num) {
  //edge case management
  if (num > arr.length) {
    return null;
  }
  //accounting for negative numbers
  var max = -Infinity;
  //figuring out where the last place in the array is we can do our sum
  for (let i = 0; i < arr.length - num + 1; i++) {
    temp = 0;
    for (let j = 0; j < num; j++) {}
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

console.log(maxSubArraySum1([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));
//5 is the last place we can do our sum

//refactored solution, time: O(n)
//multiple loops, but we know what we only go over the nested loop one time no matter how large the array is
function maxSubArraySum1(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    //updates maxSum if temp sum is larger than maxSum
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

console.log(maxSubArraySum2([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));
//unlike the naive solution where we keep looping over the array we keep the sum of the first 3 values in a variable, then add the next number while subtracting the first number
//eg subtract the 6, add the 1, keep doing this all the way through the array
