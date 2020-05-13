var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {


  };

  // Implement the methods below

  someInstance.enqueue = function(value) {
    var length = someInstance.size;
    storage[value] = value;
    return storage;
  };

  someInstance.dequeue = function() {
    var first = Object.keys(storage)[0];
    var value = storage[first];
    delete storage[first];
    return value;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
