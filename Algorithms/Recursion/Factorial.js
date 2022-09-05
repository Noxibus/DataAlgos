//Writing a factiorial iteratively

//4! === 4 * 3 * 2 * 1

function iterativeFactorial(num) {
  let total = 1;
  for(let i = nu,; i > 0; i--) {
    //wow I didn't know you could do this!
    total *= i
  }
  return total
}

console.log(iterativeFactorial(4));

//writing a factorial recursively

function recursiveFactorial(num){
    //base case
    if(num===1) return 1
    return num *recursiveFactorial(num-1)
}