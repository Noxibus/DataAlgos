//helper function to return the digit in num at the given place value. Important for sorting into buckets
function getDigit(num, place) {
  //passing in Math.abs ensures this still works with negative numbers
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

console.log(getDigit(7323, 2));

//We need to figure out how many times to iterate through bucket sort based on how many digits long our largest number is. eg 300 = 3 times / 3300 = 4 times

//returns the number of digits in num
function digitCount(num) {
  if (num === 0) return 1;
  //10 to what power (log10_ gives us this number)
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

//given an array of numbers, returns the number of digits in the largest nums in the list
function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

//radix sort implementation, params: list of numbers
function radixSort(nums) {
  //figure out how many digits the largest number has
  let maxDigitCount = mostDigits(nums);
  //this tells us we have to loop n times (eg 4)
  console.log(maxDigitCount);
  //loop from k=0 up to this largest number of digits
  for (let k = 0; k < maxDigitCount; k++) {
    //for each iteration of the loop create buckets (empty array with 10 subarrays) for each digit 0-9
    let digitBuckets = Array.from({ length: 10 }, () => []);
    //place each number in the corresponding bucket based on kth digit
    for (let i = 0; i < nums.length; i++) {
      //Replace our existing array with values in our buckets starting with 0 and going up to 9
      let digit = getDigit(nums[i], k);
      //index of digit
      digitBuckets[digit].push(nums[i]);
      //console.log(getDigit(nums[i], k));
    }
    //concat the sorted buckets - an array of smaller arrays combined back into one larger array
    console.log(digitBuckets);
    nums = [].concat(...digitBuckets);
    console.log(nums);
  }
  //return the sorted list
  return nums;
}

radixSort([23, 345, 5467, 12, 2345, 9852]);
