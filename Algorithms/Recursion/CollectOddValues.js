//using helper recursion pattern
function collectOddValues(arr) {
  //empty array to store odd numbers in
  //each time you run through this function reursively the array is reset to empty
  let result = [];
  function helper(helperInput) {
    //base case
    if (helperInput.length === 0) {
      return;
    }
    //if input modulo 2 is not equal to 0  === odd number
    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput);
    }
    helper(helperInput.slice(1));
  }
  helper(arr);
  return result;
}

console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]));

//pure recursion

function collectOddValuesPureRec(arr) {
  let newArr = [];
  //base case
  if (arr.length === 0) {
    return newArr;
  }
  //skip even nums
  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }
  //instead of resetting to an empty array each time we call the function we concatenate old arrays onto new empty array
  newArr = newArr.concat(collectOddValuesPureRec(arr.slice(1)));
  return newArr;
}

console.log();
collectOddValuesPureRec([1, 2, 3, 4, 5, 6, 7, 8, 9]);
