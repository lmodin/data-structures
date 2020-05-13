var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = {};
  newStack.storage = {};
  _.extend(newStack, stackMethods);

  return newStack;
};

var stackMethods = {};

stackMethods.push = function(value) {
  var defaultKey = Object.keys(this.storage).length;
  while (this.storage[defaultKey] !== undefined) {
    defaultKey++;
  }
  this.storage[defaultKey] = value;
}

stackMethods.pop = function() {
  var last = Object.keys(this.storage)[Object.keys(this.storage).length - 1];
  var value = this.storage[last];
  delete this.storage[last];
  return value;
}

stackMethods.size = function() {
  return Object.keys(this.storage).length;
}

