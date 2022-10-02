class Graph {
  constructor() {
    //building an undirected graph
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    //add key to the adjacency list with th name of the vertex and set its value to be an empty array
    //managing duplicates
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }
  //connect vertices
  addEdge(v1, v2) {
    //NOTE: IF THIS WAS A DIRECTED GRAPH WE WOULD ONLY USE ONE OF THESE STATEMENTS, ORDER OF VERTICES WOULD ALSO MATTER
    //find in the adjacency list the key of vertex21 and push vertex2 to the array
    this.adjacencyList[v1].push(v2);
    //find in the adjacency list the key of vertex2 and push vertex1 to the array
    this.adjacencyList[v2].push(v1);
    //NOTE: CAN ADD ERROR HANDLING HERE, EG TO CHECK IF KEYS ARE VALID
  }
  removeEdge(v1, v2) {
    //reassign the key of v1 to be an array that does not contain v2
    this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v !== v2);
    //reassign th key of v2 to be an array that does not contain v1
    this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v !== v1);
  }
  removeVertex(vertex) {
    //loop as long as there are any other vertices in the adj list for that vertex
    while (this.adjacencyList[vertex].length) {
      const adjVertex = this.adjacencyList[vertex].pop();
      //inside the loop call removeEdge with the vertex we are removing and any values in the list for that vertex
      this.removeEdge(vertex, adjVertex);
    }
    //delete the key in the list for that vertex
    delete this.adjacencyList[vertex];
  }
  //depth first search(recursive)
  DFSrecursive(start) {
    //create empty list to store the end result, return at the very end. Stores the order of visited verteices
    const result = [];
    //create an object to store visited vertices
    const visited = {};
    //preserving the meaning of 'this' for helper functions
    const adjacencyList = this.adjacencyList;
    //helper function
    (function dfs(vertex) {
      //base case no vertex
      if (!vertex) return null;
      //we have visited the vertex
      visited[vertex] = true;
      //place the vertex param into the visited object and push it into result array
      result.push(vertex);
      adjacencyList[vertex].forEach((neighbour) => {
        if (!visited[neighbour]) {
          return dfs(neighbour);
        }
      });
    })(start);
    return result;
    //loop over all values in adjList for that vertex
    //if any of those values haven't been visited, recursively invoke the helper function with that vertex
  }
  DFSiterative(start) {
    //create a stack to keep track of vertices, initialise starting vertex in here
    const stack = [start];
    //create a list to store end result
    const result = [];
    //create an object to store visited vertices
    const visited = {};
    let currentVertex;
    //add starting vertex to the stack and mark it as visited
    visited[start] = true;
    //while the stack has something in it:
    while (stack.length) {
      //pop the next vertex from the stack
      currentVertex = stack.pop();
      result.push(currentVertex);
      //mark it as visited
      this.adjacencyList[currentVertex].forEach((neighbour) => {
        if (!visited[neighbour]) {
          visited[neighbour] = true;
          //push all of its neighbours into the stack
          stack.push(neighbour);
        }
      });
    }
    return result;
  }
  BFS(start) {
    //create a queue/array and place the starting vertex in it
    const queue = [start];
    const result = [];
    const visited = {};
    let currentVertex;
    //remove veteices that have been visited, stop them getting added to result array
    visited[start] = true;
    ///loop while there is something in the queue
    while (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);
      this.adjacencyList[currentVertex].forEach((neighbour) => {
        //if it is not inside the object that stores nodes visited mark it as visited and enqueue that vertex
        if (!visited[neighbour]) {
          visited[neighbour] = true;
          queue.push(neighbour);
        }
      });
    }
    //once you have finished looping return the array of visited nodes
    return result;
  }
}

let g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");
