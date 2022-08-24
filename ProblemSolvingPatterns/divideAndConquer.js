//Given a sorted array of integers, write a function called 'search' that accepts a value and returns the index where the value passed to the function is located. If the value is not found return -1

//Linear Search
//naive approach: go through entire array. Time: O(n)
function linearSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}

//Binary search, dividing the array and sorting through smaller chunks
//Refactored solution time: log(n)
function binarySearch(array, val) {
  let min = 0;
  let max = array.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let currentElement = array[middle];

    if (array[middle] < val) {
      min = middle + 1;
    } else if (array[middle] > val) {
      max = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
}

console.log(linearSearch[(1, 2, 3, 5, 6, 8, 9, 12, 15, 16, 29)]);
console.log(binarySearch[(1, 2, 3, 5, 6, 8, 9, 12, 15, 16, 29)]);
