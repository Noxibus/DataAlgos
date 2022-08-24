//Implement a function called countUniqueValues which accepts a sorted array, and counts the unique values in the array. There can be negative nums in the array but it will always be sorted

//NOTE: This is not an optimal solution for unsorted sets of numbers

function countUniqueValues(arr) {
  //short-circuit if there is nothing in the array
  if (arr.length === 0) return 0;
  var i = 0;
  for (var j = i; j < arr.length; j++) {
    //if i and j are not equal move pointer
    if (arr[i] !== arr[j]) {
      i++;
      //loop moves on to next value
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

console.log(countUniqueValues([1, 1, 2, 3, 3, 4, 5, 6, 6, 7]));
