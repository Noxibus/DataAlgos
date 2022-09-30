//write min binary heap, lower number means higher priority
//reverse greater than/less than logic for min/max heaps
class PriorityQueue {
  constructor() {
    //val doesn't matter, heap is constructed using priority
    this.values = [];
  }
  //enqueue method accepts a value and a priority, makes a new node, and puts it in the right spot based on priority
  enqueue(val, priority) {
    //each node has a val and a priority, use the priority to build the heap
    let newNode = new Node(val, priority);
    //push the value into the values property on the heap
    this.values.push(newNode);
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
      if (element.priority >= parent.priority) break;
      //swap the value of the values element at the parentIndex with the value of the element property at the child index
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      //set the index to be the parentIndex and start over
      idx = parentIdx;
    }
  }
  //dequeue method removes the root element, returns it, and rearranges the heap using priority
  dequeue() {
    //swap the first value in the values property with the last one
    const min = this.values[0];
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
        if (leftChild.priority < element.priority) {
          //keep track of position we want to swap with
          swap = leftChildIdx;
        }
      }
      //keep looping until neither child is larger than the element
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          //swap never set to left child
          (swap === null && rightChild.priority < element.priority) ||
          //left child larger but right child larger than left child
          (swap !== null && rightChild.priority < leftChild.priority)
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

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

let ER = new PriorityQueue();
ER.enqueue("common cold", 5);
ER.enqueue("gunshot wound", 1);
ER.enqueue("high fever", 4);
