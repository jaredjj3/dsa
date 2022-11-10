/**
 * A doubly-linked list node.
 *
 * This data structure is used to store sequences of data. Its main advantage over an array is that it supports adding
 * and removing nodes in O(1) time. However, coordinating pointers usually results in slightly less maintainable code,
 * and callers must have a reference to a node in order to perform a mutation.
 */
export class ListNode<T> {
  private next: ListNode<T> | null = null;
  private prev: ListNode<T> | null = null;

  constructor(public val: T) {}

  getNext() {
    return this.next;
  }

  setNext(next: ListNode<T> | null): void {
    this.next = next;
    if (next) {
      next.prev = this;
    }
  }

  getPrev() {
    return this.prev;
  }

  setPrev(prev: ListNode<T> | null) {
    this.prev = prev;
    if (prev) {
      prev.next = this;
    }
  }
}
