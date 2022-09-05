function insertionSort(arr) {
  //Start by picking the 2nd element in the array [1]
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    //Compare the 2nd element with the previous element(s) and swap if necessary
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[i];
    }
    //Continue to next element. If it is in the incorrect order iterate through aorted portion and place in correct position
    arr[j + 1] = currentVal;
  }

  return arr;
}

console.log(insertionSort([2, 1, 9, 76, 4]));
