var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    var defaultKey = Object.keys(storage).length;
    while (storage[defaultKey] !== undefined) {
      defaultKey++;
    }
    storage[defaultKey] = value;
  };

  someInstance.pop = function() {
    var length = Object.keys(storage).length;
    var last = Object.keys(storage)[length - 1];
    var value = storage[last];
    delete storage[last];
    return value;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
