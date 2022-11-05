import { ListNode } from './ListNode';

export class LinkedList<T> {
  private head: ListNode<T> | null = null;
  private tail: ListNode<T> | null = null;

  getHead() {
    return this.head;
  }

  getTail() {
    return this.tail;
  }

  hasCycle(): boolean {
    const head = this.head;

    if (!head) {
      return false;
    }

    let slow: ListNode<T> | null | undefined = head;
    let fast: ListNode<T> | null | undefined = head;

    while (true) {
      slow = slow?.getNext();
      fast = fast?.getNext()?.getNext();

      if (!fast) {
        return false;
      }
      if (!slow) {
        return false;
      }
      if (slow === fast) {
        return true;
      }
    }
  }

  /**
   * Returns how many unique nodes are in the list, even in cyclic LinkedLists.
   */
  getSize(): number {
    let seen = new Set<ListNode<T> | null>();
    for (const node of this) {
      if (seen.has(node)) {
        break;
      }
      seen.add(node);
    }
    return seen.size;
  }

  add(node: ListNode<T>) {
    this.tail?.setNext(node);
    if (!this.head) {
      this.head = node;
    } else if (!this.tail) {
      this.head.setNext(node);
    } else {
      this.tail.setNext(node);
      this.tail = node;
    }
  }

  [Symbol.iterator](): Iterator<ListNode<T> | null> {
    return new LinkedListIterator(this);
  }
}

class LinkedListIterator<T> implements Iterator<ListNode<T> | null> {
  private node: ListNode<T> | null;

  constructor(list: LinkedList<T>) {
    this.node = list.getHead();
  }

  next(): IteratorResult<ListNode<T> | null> {
    const value = this.node;
    const next = this.node?.getNext() ?? null;
    this.node = next;
    if (next) {
      return { done: false, value };
    } else {
      return { done: true, value };
    }
  }
}
