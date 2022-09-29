class MaxBinaryHeap {
  constructor() {
    //we store our heap values in an empty array
    this.values = [];
  }
  //insert
  insert(element) {
    //push the value into the values property on the heap
    this.values.push(element);
    //bubble the value up to its correct spot:
    this.bubbleUp();

    //keep looping as long as the values element at the parentIndex is less than the values element att he child index
  }
  bubbleUp() {
    //create index variavle which is the length of the values
    let idx = this.values.length - 1;
    const element = this.values[idx];
    //keep looping as long as the values element at the parentIndex is less than the values element att he child index
    while (idx > 0) {
      //create a variable called parentIndex which is the floor of (index-1)/2
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      //check if the element needs to be swapped
      if (element <= parent) break;
      //swap the value of the values element at the parentIndex with the value of the element property at the child index
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      //set the index to be the parentIndex and start over
      idx = parentIdx;
    }
  }
  //remove/extractMax
  extractMax() {
    //swap the first value in the values property with the last one
    const max = this.values[0];
    //pop from the values property so you can return the value at the end. Note that this can cause issues when we get to the last value
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      //Trickle down: Have the new root 'sink down' to the currect spot
      this.sinkDown();
    }

    //return the old root
    return max;
  }
  //note this is a very verbose solution
  sinkDown() {
    //start at top then sink down
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      //your parent index starts at 0 ie the root
      //find the index of the left child 2* index + 1 (make sure its not out of bounds
      let leftChildIdx = 2 * idx + 1;
      //find the infex of the right child) 2* index + 2 (make sure its not out of bounds
      let rightChildIdx = 2 * idx + 2;
      //edge case
      let rightChild, leftChild;
      //if the left or right child is greater than the element...swap
      //variable to track swaps
      let swap = null;
      //checking if out of bounds
      //if both left and right are larger swap with larger child
      //the child index you swapped to now becomes the new parent index
      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild > element) {
          //keep track of position we want to swap with
          swap = leftChildIdx;
        }
      }
      //keep looping until neither child is larger than the element
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          //swap never set to left child
          (swap === null && rightChild > element) ||
          //left child larger but right child larger than left child
          (swap !== null && rightChild > leftChild)
        ) {
          //set this to be the value at the index
          swap = rightChildIdx;
        }
      }
      //if we never swap break out of the loop
      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[(swap = element)];
      idx = swap;
    }
  }
}

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
//let nums = [41, 39, 33, 18, 27, 12, 55];
