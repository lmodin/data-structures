var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  //shared methods
  _.extend(newTree, treeMethods);
  newTree.children = [];

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  //add that value to the children array
  var tree = Tree(value);
  this.children.push(tree);
};


treeMethods.contains = function(target) {
  //check if current node's value is target
  if (this.value === target) {
    return true;
  }
  //if not, we'll iterate through the node's children array... as long as there are children
  for (var i = 0; i < this.children.length; i++) {
    var child = this.children[i];
    //call contains again on each child, return value
    if (child.contains(target)) {
      return true;
    }
  }
  //if all loops fail, return false
  return false;

};




/*
 * Complexity: What is the time complexity of the above functions?
  addChild: constant
  contains: linear when searching

 */
