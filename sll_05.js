class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

class SLL {
  constructor() {
    this.head = null;
  }

  isEmpty() {
    return this.head == null;
  }

  toArray() {
    var arr = [];
    if (this.isEmpty()) {
      return arr;
    }
    var runner = this.head;
    while (runner) {
      arr.push(runner.data);
      runner = runner.next;
    }
    return arr;
  }

  insertAtBack(val) {
    if (this.isEmpty()) {
      this.head = new Node(val);
    } else {
      var runner = this.head;
      while (runner.next != null) {
        runner = runner.next;
      }
      runner.next = new Node(val);
    }
  }

  // insertAtFront()
  insertAtFront(val) {
    var newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
  }

  removeHead() {
    if (this.head == null) {
      console.log("list is empty");
      return;
    }
    var v = this.head.data;
    this.head = this.head.next;
    return v;
  }

  average() {
    if (this.head == null) {
      return 0;
    }

    var sum = 0;
    var length = 0;
    var runner = this.head;

    while (runner != null) {
      sum += runner.data;
      length++;
      runner = runner.next;
    }
    return sum / length;
  }
  // figure out non numbers

  contains(val) {
    var runner = this.head;
    while (runner != null) {
      if (val == runner.data) {
        return true;
      }
      runner = runner.next;
    }
    return false;
  }

  removeFromBack() {
    var runner = this.head;
    while (runner.next.next != null) {
      runner = runner.next;
    }
    runner.next = null;
  }

  containsRecursive(runner, val) {
    // check base case
    if (runner == null) {
      return false;
    } else if (runner.data == val) {
      return true;
    }

    // return calling itself
    return this.containsRecursive(runner.next, val);
  }

  containsRecursiveKevin(val, runner = this.head) {
    if (runner.data === null) {
      return false;
    }
    if (runner.data == val) {
      return true;
    }
    runner = runner.next;
    containsRecursiveKevin(val, runner);
  }

  // Return (don't remove) the second to last value in your list (ex: if your list is 2, 5, 6, 3, 9, you should return 3)
  secondToLast() {
    if (this.head == null) {
      return -1;
    }
    if (this.head.next == null) {
      return -1;
    }
    var runner = this.head;
    while (runner.next.next != null) {
      runner = runner.next;
    }
    return runner.data;
  }

  // Given a value, remove that value from the list and return true or false whether it was removed
  // removeVal(val) {
  //   console.log(val);
  //   if (this.head == null) {
  //     return false;
  //   }
  //   if (this.head.data == val) {
  //     this.head = this.head.next;
  //     return true;
  //   }

  //   var runner = this.head;
  //   while (runner != null) {
  //     if (runner.next.data == val) {
  //       runner.next = runner.next.next;
  //       return true;
  //     }
  //     runner = runner.next;
  //   }
  //   return false;
  // }
  // Note: how would this code look if you only wanted to remove one instance of the value? How would this code look if you wanted to remove ALL instances of the value? (ie: plan for duplicates)

  // EXTRA: Given ValueA and ValueB, insert a node with ValueA BEFORE the node containing ValueB (this is called a prepend) and return true or false whether it was pre-pended

  concat(secondList) {
    if (this.head == null) {
      this.head = secondList.head;
      return true;
    }
    var runner = this.head;
    while (runner.next != null) {
      runner = runner.next;
    }
    runner.next = secondList.head;

    return true;
  }

  moveMinToFront() {
    var runner = this.head;
    var minNode = this.head;
    while (runner != null) {
      if (runner.data < minNode.data) {
        minNode = runner;
      }
      runner = runner.next;
    }

    if (minNode == this.head){
      return true;
    }

    runner = this.head; 
    while (runner.next != minNode) {
      runner = runner.next;
    }

    runner.next = minNode.next;
    minNode.next = this.head;
    this.head = minNode;
  }
}

var mySLL2 = new SLL();
mySLL2.insertAtBack(1);
mySLL2.insertAtBack(2);
mySLL2.insertAtBack(3);
var mySLL = new SLL();
mySLL.insertAtBack(4);
mySLL.insertAtBack(5);
mySLL.insertAtBack(6);
console.log(mySLL);
console.log(mySLL.toArray());
console.log("______________________");
mySLL.insertAtFront(7);
console.log(mySLL.toArray());
console.log("______________________");
mySLL.removeHead();
console.log(mySLL.toArray());
console.log("______________________");
mySLL.insertAtFront(8);
console.log(mySLL.toArray());
console.log("______________________");
mySLL.insertAtFront(8);
console.log(mySLL.toArray());

console.log(mySLL.containsRecursive(mySLL.head, 5) ? "FOUND" : "NOT FOUND");
console.log(mySLL.contains(5) ? "FOUND" : "NOT FOUND");
console.log(mySLL.average());

console.log(mySLL.secondToLast());
console.log("______________________");
// console.log(mySLL.removeVal(5));
// console.log(mySLL.toArray());
// console.log("______________________");
// console.log(mySLL.removeVal(6));
// console.log(mySLL.toArray());
// console.log("______________________");
// console.log(mySLL.removeVal(4));
// console.log(mySLL.toArray());
// console.log("______________________");
// console.log(mySLL.removeVal(4));
// console.log(mySLL.toArray());
// console.log("______________________");

mySLL.concat(mySLL2);
console.log("2");
console.log(mySLL2.toArray());
console.log("1");
console.log(mySLL.toArray());
mySLL.moveMinToFront();
console.log(mySLL.toArray());
