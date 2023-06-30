//Graphs data structure

//Edge  List
const graph = [
  [0, 2],
  [2, 3],
  [2, 1],
  [1, 3],
];

//Adjacent List
const graphAdjacent = [[2], [2, 3], [0, 1, 3], [1, 2]];

//Adjacent Matrix
const graphMatrix = [
  [0, 0, 1, 0],
  [0, 0, 1, 1],
  [1, 1, 0, 1],
  [0, 1, 1, 0],
];

class Graphs {
  constructor() {
    this.numberOfNodes = 0;
    this.adjacentList = {};
  }
  addVertex(node) {
    this.adjacentList[node] = [];
    this.numberOfNodes++;
  }
  addEdge(node1, node2) {
    this.adjacentList[node1].push(node2);
    this.adjacentList[node1].push(node1);
  }
  showConnection() {}
}
const myGraphs = new Graphs();
myGraphs.addVertex('1');
myGraphs.addVertex('3');
myGraphs.addVertex('4');
myGraphs.addVertex('2');
myGraphs.addVertex('4');
myGraphs.addVertex('5');
myGraphs.addEdge('3', '1');
myGraphs.addEdge('3', '4');
myGraphs.addEdge('4', '2');
myGraphs.addEdge('4', '5');
myGraphs.addEdge('1', '2');
myGraphs.addEdge('1', '0');
