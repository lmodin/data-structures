var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = Object.create(stackMethods);
  newStack.storage = {};
  return newStack;
};

var stackMethods = {};

stackMethods.push = function(value) {
  var thisKey = Object.keys(this.storage).length;
  while (this.storage[thisKey] !== undefined) {
    thisKey ++;
  }
  this.storage[thisKey] = value;
};

stackMethods.pop = function() {
  var last = Object.keys(this.storage)[Object.keys(this.storage).length - 1];
  var value = this.storage[last];
  delete this.storage[last];
  return value;
};

stackMethods.size = function() {
  return Object.keys(this.storage).length;
};