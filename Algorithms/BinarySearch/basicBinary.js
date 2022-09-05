//this function accepts a sorted array and a value
// function binarySearch(array, n) {
//   //create a left pointer at the start of the array, and a right pointer at the end of the array
//   let start = 0;
//   let end = array.length - 1;
//   //middle pointer: average of start and end, floor avoids decimals throwing off things
//   let middle = Math.floor((start + end) / 2);
//   //While the middle pointer != what we are looking for
//   //REMEMBER: We need a stop condition here  (&&)
//   while (array[middle] !== n && start <= end) {
//     //behaviour dependent on if n is greater or smaller than middle pointer
//     if (n < array[middle]) {
//       end = middle - 1;
//     } else {
//       start = middle + 1;
//     }
//     //realculate middle
//     middle = Math.floor((start + end) / 2);
//   }
//   console.log(middle);
//   if (array[middle] === n) {
//     return middle;
//   }
//   return -1;
// }

//shorter version
function binarySearch(array, n) {
  let start = 0;
  let end = array.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (array[middle] !== n && start <= end) {
    if (n < array[middle]) end = middle - 1;
    else start = middle + 1;
    middle = Math.floor((start + end) / 2);
  }
  return array[middle] === n ? middle : -1;
}
console.log(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 30));
