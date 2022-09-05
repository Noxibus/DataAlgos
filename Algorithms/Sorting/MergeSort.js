//HELPER FUNCTION to merge two arrays into one sorted array, o(n+m) time, should not modify params
function merge(arr1, arr2) {
  //Create an empty array, look at smallest values in each input array
  let results = [];
  let i = 0;
  let j = 0;
  //While there are values we still haven't looked at...
  while (i < arr1.length && j < arr2.length) {
    //If the val in array1 < val in array2...push the value in array1 into results and move to next value in array1
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      //If the value in array1 > value in array2 push the value in array2 to results and move to next value in array2
      results.push(arr2[j]);
      j++;
    }
  }
  //Once we exhaust one array, push in all remaining values from the other array
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  return results;
}

//THE ACTUAL SORTING ALGORITHM. Uses recursion
function mergeSort(arr) {
  //break the array up into halves until you have arrays that are empty or have 1 element. This is the base case
  if (arr.length <= 1) return arr;
  //define mid-piont of array
  let mid = Math.floor(arr.length / 2);
  //merge those arrays with other sorted arrays using helper function until we have an array of the original length
  //using recursion
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  //once the array has been merged back together return the merged and sorted array
  return merge(left, right);
}

console.log(mergeSort([10, 24, 76, 73, 1, 9]));
