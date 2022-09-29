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

  find(value) {
    //start at the root
    //check if there is a root, if not we're done searching
    if (this.root === null) return false;
    //if there is a root check if the value of the new node is the value we are looking for. If we found it we are finished
    let current = this.root;
    let found = false;
    while (current && !found) {
      //If not check to see if the value if greater or less than the value of the root
      if (value < current.value) {
        //figuring out if we are going left or right
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    //if never found:
    if (!found) return undefined;
    return current;
  }
  ////////TREE TRAVERSAL/////////////

  //breadth first search
  BFS() {
    //create a queue (Can be an array) and a variable to store the values of the nodes visited
    let data = [],
      queue = [],
      node = this.root;
    //Place the root node in the queue
    queue.push(this.root);
    //Loop as long as there is anything in the queue
    while (queue.length) {
      //dequeue (shift) a node from the queue and push the value of the node into the variable that stores the nodes

      node = queue.shift();
      // data.push(node);
      data.push(node.value);
      //if there is a left property on the node dequeued add it to the queue
      if (node.left) queue.push(node.left);
      //if there is a right property on the node dequeued add it to the queue
      if (node.right) queue.push(node.right);
    }
    //return the variable that stores the values
    return data;
  }

  //depth first search algos below
  //recursively visiting the left side then the right side
  DFSPreOrder() {
    //create a variable to store the values of nodes visited
    let data = [];
    //store the root of the BST in a variable called current
    let current = this.root;
    //helper function which accepts a node
    function traverse(node) {
      //push the value of the node to the variable that stores the values
      data.push(node.value);
      //if the node has a left property, call the helper function with the left property on the node
      if (node.left) traverse(node.left);
      //if the node has a right property call the helper function with the right property on the node
      if (node.right) traverse(node.right);
    }
    //invoke the helper function with the current variable
    traverse(current);
    //return the array of values
    return data;
  }

  DFSPostOrder() {
    //Create a variable to store the values of nodes visited
    //visit the node by addind it to the array
    let data = [];
    //Store the root of the BST in a variable called current
    let current = this.root;
    //Write a helper function which accepts a node (recursive)
    function traverse(node) {
      //if the node has a left property, call the helper function with the left property on the node
      if (node.left) traverse(node.left);
      //If the node has a right prperty call the helper function with the right property on the node
      if (node.right) traverse(node.right);
      //push the value of the node to the varible that stores the values
      data.push(node.value);
    }
    //invoke the helper function with the current variable
    traverse(current);
    //return the array of values
    return data;
  }

  DFSInOrder() {
    //Create a variable to store the values of the nodes visited
    let data = [];
    let current = this.root;
    //write a helper function which accepts a node
    function traverse(node) {
      //if the node has a left property, call the helper fu ction with the left property on the node
      if (node.left) traverse(node.left);
      //push the value of the node to the variable that stores the values
      data.push(node.value);
      //if the node has a right property call the helper funtion with the right property on the node
      if (node.right) traverse(node.right);
      //invoke the helper function with the current variable
    }
    traverse(current);
    //return the array of values
    return data;
  }
}

let tree = new BinarySearchTree();

//       10
//   5       13
// 2   7   11  16

tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
