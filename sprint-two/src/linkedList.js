var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    node = Node(value);

    if (!list.head) {
      list.head = node;
    } else {
      list.tail.next = node;
    }
    list.tail = node;

  };

  list.removeHead = function() {
    //save the current head...to be return
    var saveValue = list.head.value;
    delete list.head.value;

    list.head = list.head.next;
    return saveValue;
  };

  list.contains = function(target) {
    var start = list.head;
    while(start !== null) {
      if (start.value ===target) {
        return true;
      }
      start = start.next;
    }
    return false;
  };

  return list;
};



var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
  Contains is linear
  remove head and add tail are constant
 */