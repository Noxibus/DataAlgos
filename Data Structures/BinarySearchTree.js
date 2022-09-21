class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    //create a new node
    let newNode = new Node(value);
    //starting at the root node:
    //check if there is a root. If not, the root now becomes the new node
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      //current will start as the root
      let current = this.root;
      //If there is a root, check if the value of the new node is greater than or less than the value of the root
      while (true) {
        //edge case manage duplicates
        if (value === current.value) return undefined;
        //if it is greater:
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            //moving value to the left if it is greater than current value
            current = current.left;
          }
        } else if (value > current.value) {
          //check to see if there is a node to the right
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            //if there is move to that node and repeat these steps
            //If not, add that node as the right property
            current = current.right;
          }
        }
      }

      //if it is less;
      //check to see if there is a node to the left
      //if there is, move to that node and repeat these steps
      //if there is not add that node as the left property
    }
  }

  find() {
    //start at the root
    //check if there is a root, if not we're done searching
    //if there is a root check if the value of the new node is the value we are looking for. If we found it we are finished
    //If not check to see if the value if greater or less than the value of the root
    //if it is greater:
    //check to see if there is a node to the right
    //if there is move to that node and repeat these steps
    //if not we're done searching
    //if it is less|:
    //check to see if there is a node to the left
    //if there is move to that node and repeat these steps
    //if not we're done searching
  }
}

let tree = new BinarySearchTree();

//       10
//   5       13
// 2   7   11  16

// tree.root = new Node(10);
// tree.root.right = new Node(15);
// tree.root.left = new Node(7);
