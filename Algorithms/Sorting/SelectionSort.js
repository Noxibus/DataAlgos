function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    //store the first element as the index of the smallest value seen so far
    let lowest = i;
    //Compare this item to the next item in the array until you find a smaller number
    for (j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        //If a smaller number is found designate that smaller number to be the new minmum and continue until the end of the array
        lowest = j;
      }
    }

    //If the minimum is not the value (index) you initially began with, swap the values
    if (i !== lowest) {
      let temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
    }
  }

  return arr;
}
console.log(selectionSort[(34, 22, 10, 19, 17)]);
