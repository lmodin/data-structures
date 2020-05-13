var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    var defaultKey = Object.keys(storage).length;
    while (storage[defaultKey] !== undefined) {
      defaultKey++;
    }
    storage[defaultKey] = value;
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
