// //creating queue with arrays
// let queue = [];
// queue.push("First");
// queue.push("second");
// queue.push("Third");
// //pop wont work for queue because we need to remove the element from the start of the array, but we can use shift
// queue.shift();
// queue.shift();
// //can also do unshift() combined with pop()

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(val) {
    //create a new node using the value passed to the function
    let newNode = new Node(val);
    //if there are no nodes in the queue, set this node to be the first and last priperty of the queue
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;

      //otherwise set the next property on the current last to be that node and then set the last property of thr queue to be that node
    } else {
      this.last.next = newNode;
      //moving the pointer
      this.last = newNode;
    }
    //increment the queue size by 1
    return ++this.size;
  }
  //remove from the beginning
  dequeue(val) {
    //if there is no first property just return null
    if (!this.first) return null;
    //store the first property in a variable
    let temp = this.first;
    //See if the first is the same as the last (check if there is only one node). If so set the first and last to be null
    if (this.first === this.last) {
      //edge case
      this.last = null;
    }
    //If there is more than 1 node set the first property to be the nest property of first
    //update to be next item
    this.first = this.first.next;
    //decrement the size by 1
    //return the value of the node dequeued
    this.size--;
    return temp.value;
  }
}
