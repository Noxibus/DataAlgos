//helper function to return the digit in num at the given place value. Important for sorting into buckets
function getDigit(num, place) {
  //passing in Math.abs ensures this still works with negative numbers
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

console.log(getDigit(7323, 2));

//We need to figure out how many times to iterate through bucket sort based on how many digits long our largest number is. eg 300 = 3 times / 3300 = 4 times

//returns the number of digits in num
function digitCount(num) {
  if (num === 0) {
    //10 to what power (log10_ gives us this number)
    return Math.floor(Math.log10(Math.abs(num))) + 1;
  }
}

//given an array of numbers, returns the number of digits in the largest nums in the list
function mostDigits(nums) {}
