/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  push(element) {
    if (!this[0]) {
      this[0] = [];
      this[0].push(element);
    } else {
      this[0] = this[0].reverse();
      this[0].push(element);
      this[0].reverse();
    }
  }

  pop() {
    const tmp = this[0][0];
    this[0].splice(0, 1);
    return tmp;
  }

  peek() {
    return this[0][0];
  }
}

module.exports = Stack;
