

// Instantiate a new graph
var Graph = function() {
  this.nodes = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  //include an object where we can add edges
  this.nodes[node] = {};

};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  //call the node key provided in the this.nodes
  if (this.nodes[node] !== undefined) {
    return true;
  } else {
    return false;
  }
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  //use the delete modifier to remove the key node from this.nodes
  //get a list of all the nodes that node is connected to
  var connections = Object.keys(this.nodes[node]);
  //Object.keys(this.nodes[node]) gives an array of the connected nodes
  //iterate through list of connected nodes
  for (var i = 0; i < connections.length; i++) {
    //delete every this.nodes[list[i]] if it equals node
    var connectedNode = connections[i];
    delete this.nodes[connectedNode][node];
  }
  if (this.nodes[node]) {
    delete this.nodes[node];
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  //goes to the fromNode object inside the this.nodes
  if (this.nodes[fromNode][toNode] === true) {
    return true;
  } else {
    return false;
  }

};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {

  this.nodes[fromNode][toNode] = true;
  this.nodes[toNode][fromNode] = true;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this.nodes[fromNode][toNode];
  delete this.nodes[toNode][fromNode];
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  //make a list of all the nodes
  //iterate through the nodes
  //call cb on each node.

  for (var key in this.nodes){
    cb(key);
  }
};

Graph.prototype.display = function(node) {
  if (this.nodes[node]) {
    console.log(this.nodes[node]);
    return (this.nodes[node]);
  } else {
    return undefined;
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 addNode: constant
 contains: constant
 removeNode: linear
 addEdge: constant
 hasEdge: constant
 removeEdge: constant
 forEachNode: linear
 */


