var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = {};
  newQueue.storage = {};
  _.extend(newQueue, queueMethods);

  return newQueue;

};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  var defaultKey = Object.keys(this.storage).length;
  while (this.storage[defaultKey] !== undefined) {
    defaultKey ++;
  }
  this.storage[defaultKey] = value;
};

queueMethods.dequeue = function() {
  var first = Object.keys(this.storage)[0];
  var value = this.storage[first];
  delete this.storage[first];
  return value;
};

queueMethods.size = function() {
  return Object.keys(this.storage).length;
};



