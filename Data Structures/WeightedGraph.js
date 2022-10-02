//simple priority queue O(n * log(n)), faster implementation uses a heap
class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    return this.values.shift();
  }
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }

  Dijkstra(start, finish) {
    const nodes = new PriorityQueue();
    //create an distances object
    const distances = {};
    //create another object called previous
    const previous = {};
    let path = []; //to return at end
    let smallest;
    //build up initial state
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        //set each key in the adjacency list with a value of infinity, except for the starting vertex which should have a value of 0
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        //after setting a value in the distances ovject, add each vertex witha priority of infinity to the priority queue, except the starting vertex which should have a priority of 0 as this is where we begin
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      //set each key to be every vertex in the adjacency list with a value of null
      previous[vertex] = null;
    }
    // as long as there is something to visit
    //nodes is our priority queue
    while (nodes.values.length) {
      //dequeue a vertex from the priority queue
      smallest = nodes.dequeue().val;
      if (smallest === finish) {
        //WE ARE DONE
        //BUILD UP PATH TO RETURN AT END
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }
      //otherwise loop through each value in the adacency list at that vertex
      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbor in this.adjacencyList[smallest]) {
          //find neighboring node
          let nextNode = this.adjacencyList[smallest][neighbor];
          //calculate new distance to neighboring node
          //smallest = the node we are visiting
          let candidate = distances[smallest] + nextNode.weight;
          let nextNeighbor = nextNode.node;
          if (candidate < distances[nextNeighbor]) {
            //updating new smallest distance to neighbor
            distances[nextNeighbor] = candidate;
            //updating previous - How we got to neighbor
            previous[nextNeighbor] = smallest;
            //enqueue in priority queue with new priority
            nodes.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }
    return path.concat(smallest).reverse();
  }
}

var graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");
//weight = distance between points in the graph
graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);

graph.Dijkstra("A", "E");

//output of points we visited in the shortest path
// ["A", "C", "D", "F", "E"]
