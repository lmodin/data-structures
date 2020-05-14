var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
};

Queue.prototype.enqueue = function(value) {
  var thisKey = Object.keys(this.storage).length;
  while(this.storage[thisKey] !== undefined) {
    thisKey ++;
  }
  this.storage[thisKey] = value;
};

Queue.prototype.dequeue = function() {
  var first = Object.keys(this.storage)[0];
  var value = this.storage[first];
  delete this.storage[first];
  return value;
};

Queue.prototype.size = function() {
  return Object.keys(this.storage).length;
};


