//write a funcction called SAME which accepts two arrays. The4 function should return true if every value in the array has its corresponding value squared in the second array. The frequency of values must be the same

//same([1,2,3], [4,1,9]) //true
//same([1,2,3], [1,9]) //false
//same([1,2,1], [4,4,1,])  //false, must be the same frequency

//naive solution, O(n^2)
function same1(arr1, arr2) {
  //need to check if arrays are the same length
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }
  return true;
}
