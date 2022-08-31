//not optimised
function bubbleSort(arr) {
  //Start looping with a variable called i from the end of the array towards the start
  //using i in the fedinition of the loop for j
  for (let i = arr.length; i > 0; i--) {
    //Start an inner loop with a variable called j from the beginning until i-1
    for (let j = 0; j < i - 1; j++) {
      //if arr[j] is greater than arr[j+1] swap the two values
      if ((arr[j], arr[j + 1])) {
        //save old version in temp variab;e
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  //Return sorted array
  return arr;
}

console.log(bubbleSort[(37, 45, 29, 8)]);

//optimised: short circuit if already sorted
function bubbleSort2(arr) {
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    //assume there are no swaps by default
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if ((arr[j], arr[j + 1])) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
    if (noSwaps) {
      breal = k;
    }
  }
  //Return sorted array
  return arr;
}
