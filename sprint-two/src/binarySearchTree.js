var BinarySearchTree = function(value) {
  var tree = {};
  tree.value = value;
  tree.left = null;//can do null or false i think
  tree.right = null;

  _.extend(tree, binaryMethods);
  return tree;
};

binaryMethods = {};

binaryMethods.insert = function(value) {
  //if higher than node, go right
  if (value > this.value) {
    //check if right is undefined
    if (this.right === null) {
      //if it is, create new node there
      this.right = BinarySearchTree(value);
    } else { //if not, repeat search/tests with the node there
      this.right.insert(value);
    }
  } else if (value < this.value) {
  //if lower than node, go left and repeat
    if (this.left === null) {
      //if it is, create new node there
      this.left = BinarySearchTree(value);
    } else {
      //if not, repeat search/tests with the node there
      this.left.insert(value);
    }
  }
};

binaryMethods.contains = function(value) {
//create a contains function
  if (this.value === value) {
    return true;
  } else if (this.value > value) {
    //call contains again on the right side
    if (this.left !== null) {
      return this.left.contains(value);
    } else {
      return false;
    }
  } else if (this.value < value) {
    if (this.right !== null) {
      return this.right.contains(value);
    } else {
      return false;
    }
  }
  return false;
};

binaryMethods.depthFirstLog = function(callback) {
//create a depthFirstLog function
  //accepts a callback and executes it on all values

  //use a recursor function to get through them all
  callback(this.value);
  if (this.left) {
    this.left.depthFirstLog(callback);
  }
  if (this.right) {
    this.right.depthFirstLog(callback);
  }


};



/*
 * Complexity: What is the time complexity of the above functions?
 insert: linear
 contains: linear
 depthFirstLog: linear
 */
