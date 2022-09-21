// //array stack - filo. THIS ONLY WORKS WITH STRAIGHTFORWARD PUSH/POP METHODS
// let FIFOstack = [];
// stack.push("google");
// stack.push("instagram");
// stack.push("facebook");
// //popping last item off array
// stack.pop();

// //LIFO : not effieicnt because we have to reindex with every pass
// let LIFOstack = [];
// stack.unshift("create new file");
// stack.unshift("resize file");
// stack.unshift("clone stamp");
// stack.shift();

//stack from scratch
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    //create new node with param value
    let newNode = new Node(val);
    //if there are no new nodes in the stack set the first and last property to be the newly created node
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      //If there is at least one node create a variable that stores the current first property on the stack
      let temp = this.first;

      //Reset the first property to be the newly created node
      this.first = newNode;
      //Set the next property on the node to be the previously created variale
      this.first.next = temp;
    }
    //increment size of stack by 1
    return ++this.size;
  }
  //pop item from the end of stack
  pop() {
    //if there are no nodes in the stack return null
    if (!this.first) return null;
    //create a temp variable to store the first property on the stack
    let temp = this.first;
    //if there is only one node set the first and last property to be null
    //edge case
    if (this.first === this.last) {
      this.last = null;
    }
    //if there is only one node set the first and last property to be null
    //If there is more than one node set the first property to be the next property on the current first
    this.first = this.first.next;
    //decrement size by 1
    this.size--;
    //return the value of the node removed
    return temp.value;
  }
}

let stack = new Stack();
stack.push("first");
stack.push("second");
stack.push("third");
stack.push("fourth");
// stack.pop("second");
// stack.pop("third");
// stack.pop("fourth");
