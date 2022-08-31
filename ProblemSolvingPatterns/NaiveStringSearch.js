//Counting the number of times a smaller string appears in a longer string
function naiveSearch(long, short) {
  let count = 0;
  //Loop over the longer string and the shorter string
  //lorie
  for (var i = 0; i < long.length; i++) {
    //lord
    for (let j = 0; j < short.length; j++) {}

    //if the characters don't match break out of the inner loop
    if (short[j] !== long[i + j]) {
      break;
    }
    //if the characters do match keep going and oncrement count of matches
    if (j === short.length - 1) {
      count++;
    }
    //return the count
    return count;
  }
}
console.log(naiveSearch("lorie lord", "lord"));
