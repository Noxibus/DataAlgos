//node class
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

//doubly linked list class
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  //add a node to the end of the doubly linked list
  push(val) {
    //create a new node with the value passed to the function
    let newNode = new Node(val);
    //if the head property is null set the head and tail to be the newly created node
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      //if not, set the next property on the tail to be that node
      this.tail.next = newNode;
      //set the previous property on the newly created node to be the tail
      newNode.prev = this.tail;
      //set the tail to be the newly created node
      this.tail = newNode;
    }
    //increment length
    this.length++;
    //return list
    return this;
  }

  //Remove a node from the end of a doubly linked list
  pop() {
    //if there is no tail return undefined
    if (!this.head) return undefined;
    //store the current tail in a variable to return later
    let poppedNode = this.tail;
    //if the length is 1 set the head and tail to be null
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      //update the tail to be the previous node
      this.tail = poppedNode.prev;
      //set the newTail's next to be null
      this.tail.next = null;
      //clear the previous popped node
      poppedNode.prev = null;
    }
    //decrement the length
    this.length--;
    //return the value removed
    return poppedNode;
  }

  //Remove a node from the beginning of the doubly linked list
  shift() {
    //if the length is 0 return undefined
    if (this.length === 0) return undefined;
    //store the current head property in a variable
    let oldHead = this.head;
    //if the length is 1 set the head and tail to be null
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      //Update the head to be the next of the old head
      this.head = oldHead.next;
      //Set the head's previous property to null
      this.head.prev = null;
      //Set the old head's next to null
      oldHead.next = null;
    }
    //Decrement the length
    this.length--;
    //Return the old head
    return oldHead;
  }
  //add node to the beginning of list
  unshift(val) {
    //create a new node with the value passed to the function
    let newNode = new Node(val);
    //if the length is 0
    if (this.length === 0) {
      //set the head to be the new node
      this.head = newNode;
      //se the tail to be the new node
      this.tail = newNode;
      //otherwise
    } else {
      //set the prev property on the head of the list to be the new node
      this.head.prev = newNode;
      //Set the next property on the new node to be the head property
      newNode.next = this.head;
      //Update the head to be the new node
      this.head = newNode;
    }
    //increment the length
    this.length++;
    //return the list
    return this;
  }
  //Access a node in a list by its position
  get(index) {
    //if the index is less than 0 or >= the length return null
    if (index < 0 || index >= this.length) return null;
    //if index is less than or equal to half the length of the list:
    if (index <= this.length / 2) {
      console.log("Working from the beginning");
      let count = 0;
      let current = this.head;
      //loop through list starting from the head and loop towards the middle
      while (count != index) {
        current = current.next;
        count++;
      }

      //checking which end of the list we're working from
    } else {
      console.log("Working from end");
      //if index is greater than half the length of the list
      let count = this.length - 1;
      let current = this.tail;
      while (count !== index) {
        current = current.prev;
        count--;
      }
    }
    //return node once found
    return current;
  }
  //Replace a value in a list
  set(index, val) {
    //Create a variable which is the result of the get() method at the index passed to the function
    let foundNode = this.get(index);
    //if the get methof returns a valid node, set the value of that node to be the value passed to the function
    if (foundNode != null) {
      foundNode.val = val;
      //return true
      return true;
    }
    //otherwise return false
    return false;
  }
  //insert a node at a certain position
  insert(index, val) {
    //if the index is less than 0 of >= the length return false
    if (index < 0 || index > this.length) return false;
    //if the index is 0 unshift
    if (index === 0) return this.unshift(val);
    //if the index is the same as the length, push
    if (index === this.length) return this.push(val);
    //use get method to access the index -1
    let newNode = new Node(val);
    let beforeNode = this.get(index - 1);
    let afterNode = beforeNode.nect;
    //set the next and prev properties on the correct nodes to link everything together
    beforeNode.next = newNode;
    newNode.prev = beforeNode;
    afterNode.prev = newNode;
    //increment the length
    this.length++;
    //return true
    return true;
  }
  //remove a node at a certain position
  remove(index) {
    //if the index < 0 or >= the length return undefined
    if (index < 0 || index >= this.length) return undefined;
    //if the index is 0 shift
    if (index === 0) return this.shift();
    //if the index is the same as the length-1 pop
    if (index === this.length - 1) return this.pop();
    //use the get method to retrieve the item to be removed
    let removedNode = this.get(index);
    let beforeNode = removedNode.prev;
    let afterNode = removedNode.next;
    beforeNode.next = afterNode(
      //update the next and prev properties to remove the found node from the list
      (removedNode.prev.next = removedNode.next)
    );

    //watch the video
    removedNode.next.prev = removedNode.prev;
    //set the next and prev to null on the found node
    removedNode.prev = null;
    this.length--;
    //return the removed node
    return removedNode;
  }
}

//store old tail in a variable
//let oldTail = list.pop()
let list = new DoublyLinkedList();
list.push("1");
list.push("2");
list.push("3");
