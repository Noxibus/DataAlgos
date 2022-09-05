//Pivot helper function
//params: array, start index, end index (these can default to 0 and the array length -1)
function pivot(arr, start = 0, end = arr.length + 1) {
  function swap(array, i, j) {
    var temp = array[i];
    //swap vars
    array[i] = array[j];
    array[j] = temp;
  }
  //grab pivot from the start of the array, store the current pivot index in a variable
  let pivot = arr[start];
  let swapIndex = start;
  //loop through array
  for (var i = start + 1; i < arr.length; i++) {
    //if pivot is greater than current element, increment pivot index and swap current element with the element at the pivot index
    if (pivot > arr[i]) {
      //increment swap index by 1
      swapIndex++;

      swap(arr, swapIndex, i);
    }
  }
  //Swap the starting element (the pivot) with the pivot index
  swap(arr, start, swapIndex);
  //return the pivot index
  return swapIndex;
}

console.log("Pivot Element: " + pivot([4, 8, 2, 1, 5, 7, 6, 3])); //should return 3 (4 wll be at index 3)

//default values the same as helper function
function quicksort(arr, left = 0, right = arr.length) {
  //implement base case. Base case ocurs when you consider a subarray with less than 2 elements. When this is implemented return sorted array
  if (left < right) {
    //call pivot helper on array
    let pivotIndex = pivot(arr, left, right);
    //
    //when the helper returns the updated pivot index recursively call the helper on the subarrays to the left and right of that index
    //
    //RECURSIVE CALLS
    //working on left subarray first (right = pivotIndex-1)
    quicksort(arr, left, pivotIndex - 1);
    //right (left = pivotIndex+1)
    quicksort(arr, pivotIndex + 1, right);
  }
  return arr;
}

console.log(quicksort([4, 6, 9, 1, 2, 5, 3]));
