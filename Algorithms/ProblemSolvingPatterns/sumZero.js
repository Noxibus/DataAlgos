//Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum = 0. Return an array that includes both values that sum to zero or undefined if a paif does not exist

//NOTE: THIS SOLUTION ONLY REALLY APPLIES TO SORTED DATA
//sumZero([-3,-2,-1,0,1,2,3])      //[-3,3]
//sumZero([-2,0,1,3])     //undefined
//sumZero([1,2,3])       //undefined

//Multiple pointers pattern

//NAIVE SOLUTION: time: O(n^2) space: O(1). Only one pointer
function sumZero1(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

//REFECTOR using 2 pointers: time : O(n) space: O(1)
function sumZero2(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}
//two pointers move in to the middle
