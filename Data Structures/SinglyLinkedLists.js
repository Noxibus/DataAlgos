//define a class for each node. Node stores a piece of data
class Node {
  constructor(val) {
    this.val = val;
    //reference to next node. Defaulting tail to null
    this.next = null;
  }
}

//eww. Naive implementation of linked list
// var first = new Node("Hi");
// first.next = new Node("there");
// first.next.next = new Node("how");
// first.next.next.next = new Node("are");
// first.next.next.next.next = new Node("you");

// console.log(first, first.next);

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.tail = null;
    this.head = null;
  }

  //add new values to the tail of the linked list
  push(val) {
    //assign a new node to the end the list after the tail (or create a new head if empty) using val
    let newNode = new Node(val);
    if (!this.head) {
      //only runs if empty
      this.head = newNode;
      this.tail = this.head;
    }
    //otherwise set the next value on the tail to be the new node and set the tail property to be the newly created node
    else {
      this.tail.next = newNode;
      //move tail pointer
      this.tail = newNode;
    }
    //increment length by 1
    this.length++;
    //return linked list
    return this;
  }
  //traverse list
  //   traverse() {
  //     let current = this.head;
  //     while (current) {
  //       console.log(current.val);
  //       current = current.next;
  //     }
  //   }

  //remove node from end of linked list
  pop() {
    //if there are no nodes in the list return undefined
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    //loop through the list until you reach the tail
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    //set the next property of thr 2nd to last node to be null
    this.tail.next = null;
    //decrement the length of the list by 1
    this.length--;
    //if the list is empty reset values to null. Stops us going into negative numbers
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    //return the value of the node removed
    return current;
  }

  //remove node from the beginning of linked list
  shift() {
    //if there are no nodes return undefined
    if (!this.head) return undefined;
    //store the current head property in a variable
    let oldHead = this.head;
    //set the head property to be the current head's property
    this.head = currentHead.next;
    //decremtnt the length by 1
    this.length--;
    //return the value of the head node that has been removed
    return oldHead;
  }

  //add new node to beginning of linked list
  unshift(val) {
    //Create a new node using input param
    let newNode = new Node(val);
    //if there is no head set the head and tail to be the newly created node
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      //Otherwise set the newly created node's next property to be the current head property on the list
      newNode.next = this.head;
      //Set the head property on the list to be that newly created node
      this.head = newNode;
    }
    //Increment length of the list by 1
    this.length++;
    //return linked list
    return this;
  }

  //retrive a node by its position in the linked list
  get(index) {
    //detect edge cases
    //if the index is less than 0 or greater than or equal to the length of the list return null
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;
    //Loop through the list until you reach the index and return the node at that specific index
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    //return value
    return current;
  }

  //changing the value of a node based on its position in the linked list
  set(val, index) {
    //use get function to find the specific node
    let foundNode = this.get(index);
    //if the node is not found return false
    if (foundNode) {
      //if the node is found set the value of that node to be the value passed to the function and return true
      foundNode.val = val;
      return true;
    }
    //otherwise return false
    return false;
  }

  //Add a node to the linked list as a spacific position
  insert(index, val) {
    //if the index is less than sero of greater than the length retrun false
    if (index < 0 || index > this.length) return false;
    //if the index is the same as the length push a new node to the end of the list. Note that push method does not return a boolean so it needs adjusted
    //!! coerce convert to boolean. If something is present in the list = true
    if (index === this.length) return !!this.push(val);
    //if the index is 0 unshift a new node to the start of the list
    //otherwise using the get methid access the node at the index -1
    //!! coerce convert to boolean. If something is present in the list = true
    if (index === 0) return !!this.unshift(val);
    //create new node
    let newNode = new Node(val);
    //find item before index
    let prev = this.get(index - 1);
    //Set the next property on the new node to be the previous next
    let temp = prev.next;
    newNode.next = temp;
    //indrement the length
    this.length++;
    //if insert was successful return true, if not return false
    return true;
  }

  //remove a node from the list at a specified index
  remove(index) {
    //if the index is negative or greater than the length return undefined
    if (index < 0 || index >= this.length) return undefined;
    //if the index is the same as the length -1 use pop method
    if (index === this.length - 1) return this.pop();
    //if the index = 0  use shift method
    if (index === 0) return this.shift();
    //otherwise use the get method to access the node at index -1
    let previousNode = this.get(index - 1);
    //set the next property on that nose to be the next of the next node
    let removed = previousNode.next;
    previousNode.next = removed.next;
    //decrement the length
    this.length--;
    //return the value of the node removed
    return removed;
  }
  //Reverse linked list in place. Traverse and reverse
  reverse() {
    //swap the head and tail
    //Create node variable and initialise to head property
    let node = this.head;
    this.head = this.tail;
    //because we have changed the tail we need to point to node variable
    this.tail = node;
    //create next/prev variables
    let next;
    let prev = null;
    //loop through list
    for (let i = 0; i < this.length; i++) {
      //set next to be the next property on whatever node is
      //set next property on the node to be whatever prev is
      //set prev to tbe the value of the node variable
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}

let list = new SinglyLinkedList();
list.push("Hello");
list.push("Goodbye");
list.push("!");
list.push("<3");
list.push(":)");
console.log(list);
