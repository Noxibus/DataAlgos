//Write a finction that calculates the sum of all numbers from 1 up to, and including, some number (n)

function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}
function addUpToImproved(n) {
  return (n * (n + 1)) / 2;
}

console.log(addUpTo(3));
console.log(addUpToImproved(3));

//Calsulate speed of the above functions
let t1 = performance.now();
addUpTo(1000000000);
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);

function countUpAndDown(n) {
  //O(n)
  console.log("Going up....");
  for (let k = 0; k < n; k++) {
    console.log(k);
  }
  console.log("At the top!!! \n Going down now....");
  //O(n)
  for (let j = n - 1; j >= 0; j--) {
    console.log(j);
  }
  console.log("Going back down...");
}

console.log(countUpAndDown(10));

//nested loops
function printAllPairs(n) {
  //0(n)
  for (var i = 0; i < n; i++) {
    //O(n)
    for (var j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}

console.log(printAllPairs(5));
