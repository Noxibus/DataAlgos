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
  DFS(vertex) {
    //create empty list to store the end result, return at the very end. Stores the order of visited verteices
    //create an object to store visited vertices
    //
  }
  //helper function
  //place the vertex param into the visited object and push it into result array
  //loop over all values in adjList for that vertex
  //if any of those values haven't been visited, recursively invoke the helper function with that vertex
}

let g = new Graph();
g.addVertex("Tokyo");
g.addVertex("Dallas");
g.addVertex("New York");
