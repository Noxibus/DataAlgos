//write a funcction called SAME which accepts two arrays. The function should return true if every value in the array has its corresponding value squared in the second array. The frequency of values must be the same

//same([1,2,3], [4,1,9]) //true
//same([1,2,3], [1,9]) //false
//same([1,2,1], [4,4,1,])  //false, must be the same frequency
//same([1,2,3,2], [9,1,4,4])  //true

//NOTE: THIS SOLUTION CAN ALSO BE USED FOR ANAGRAM PROBLEMS

//naive solution, O(n^2). Nested loops = quadratic relationship
function same1(arr1, arr2) {
  //need to check if arrays are the same length
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    //if correct index isn't in the array....return false
    if (correctIndex === -1) {
      return false;
    }
    //if we have the correct index remove it from array 2
    arr2.splice(correctIndex, 1);
  }
  return true;
}

//REFACTORED uring frequency counter pattern, time complexity of O(n)
function same2(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  //two separate loops will have better performance than a nested loop
  //val = each item in the array
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

//Calling these tests within browser window causes error, likely due to scoping issues. Works when called here
console.log(same2([1, 2, 3, 2], [9, 1, 4, 4]));
console.log(same2([1, 2, 3], [4, 1, 9]));
console.log(same2([1, 2, 3], [1, 9]));
console.log(same2([1, 2, 1], [4, 4, 1]));
