const Node = (value) => ({ value, nextNode: null });

const LinkedList = () => {
  let _head = null,
    _tail = null,
    _size = 0;

  return {
    get head() {
      return _head;
    },
    get tail() {
      return _tail;
    },
    get size() {
      return _size;
    },
    append(value) {
      const node = Node(value);

      if (!_head) {
        _head = node;
        _tail = node;
      } else {
        _tail.nextNode = node;
        _tail = node;
      }
      _size += 1;
      return this.toString();
    },
    prepend(value) {
      const node = Node(value);
      if (!_head) {
        _head = node;
        _tail = node;
      } else {
        node.nextNode = _head;
        _head = node;
      }
      _size += 1;
      return this.toString();
    },
    at(index) {
      if (index < 0 || index >= _size) return null;
      if (index === 0) return _head;
      if (index === _size - 1) return _tail;
      let current = _head;
      let counter = 1;

      while (counter !== index) {
        current = current.nextNode;
        counter += 1;
      }

      return current;
    },
    pop() {
      if (!_tail) return null;

      if (_size === 1) {
        _head = null;
        _tail = null;
        _size = 0;
        return null;
      }

      _tail = this.at(_size - 2);
      _size -= 1;
      _tail.nextNode = null;
      return this.toString();
    },
    contains(value) {
      let current = _head;

      while (current) {
        if (current.value === value) return true;
        current = current.nextNode;
      }

      return false;
    },
    find(value) {
      if (_head.value === value) return 0;
      if (_tail.value === value) return _size - 1;
      let current = _head;
      let counter = 0;

      while (current) {
        if (current.value === value) return counter;
        current = current.nextNode;
        counter += 1;
      }

      return null;
    },
    toString() {
      let current = _head;
      let str = "";
      while (current) {
        str += `( ${current.value} ) -> `;
        current = current.nextNode;
      }

      return (str += " null");
    },
    insert(value, index) {
      if (index === 0) return this.prepend(value);

      const node = Node(value);
      const previous = this.at(index - 1);
      node.nextNode = previous.nextNode;
      previous.nextNode = node;
      _size += 1;

      return this.toString();
    },
    remove(index) {
      const previous = this.at(index - 1);
      const removed = previous.nextNode;
      previous.nextNode = removed.nextNode;
      _size -= 1;
      return this.toString();
    },
  };
};

const ll = LinkedList();

console.log(ll.append(8));
console.log(ll.append(4));
console.log(ll.append(12));
console.log(ll.prepend(9));
console.log(ll.append(4));
console.log(ll.append(7));
console.log(ll.prepend(14));
console.log(ll.append(1));
console.log(ll.pop());
console.log(ll.pop());
console.log(ll.at(0));
console.log(ll.at(4));
console.log(ll.contains(12), "contains 12");
console.log(ll.contains(14), "contains 14");
console.log(ll.contains(241), "contains 241");
console.log(ll.contains(-6), "contains -6");
console.log(ll.find(14), "find 14");
console.log(ll.find(7), "find 7");
console.log(ll.find(4), "find 4");
console.log(ll.insert(99, 1), "insert 99 at index 1");
console.log(ll.insert(55, 5), "insert 55 at index 5");
console.log(ll.remove(5), "remove at index 5");
console.log(ll.remove(1), "remove at index 1");
console.log(ll.pop());
console.log(ll.pop());
console.log(ll.pop());
console.log(ll.pop());
console.log(ll.pop());
console.log(ll.pop());
console.log(ll.pop());
console.log(ll.pop());
