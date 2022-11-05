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

  isTampered(): boolean {
    let tail = null;
    for (const node of this) {
      tail = node;
    }
    return tail !== this.tail;
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
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail!.setNext(node);
      this.tail = node;
    }
  }

  insert(index: number, node: ListNode<T>) {
    let ndx = 0;
    let prevNdx = index - 1;
    let prev: ListNode<T> | null = null;
    for (const probe of this) {
      if (ndx === prevNdx) {
        prev = probe;
        break;
      }
      ndx++;
    }
    if (!prev) {
      throw new Error(`could not find node before index: ${index}`);
    }
    const next = prev.getNext();
    prev.setNext(node);
    node.setNext(next);
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
    const next = this.node?.getNext();
    this.node = next ?? null;
    if (value) {
      return { done: false, value };
    } else {
      return { done: true, value };
    }
  }
}
