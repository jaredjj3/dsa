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
