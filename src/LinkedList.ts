import { ListNode } from './ListNode';

export class LinkedList<T> {
  private head: ListNode<T> | null = null;
  private tail: ListNode<T> | null = null;
  private size: number = 0;

  /**
   * Returns how many unique nodes are in the list, even in cyclic LinkedLists.
   */
  getSize(): number {
    return this.size;
  }

  add(val: T) {
    const node = new ListNode(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail!.setNext(node);
      this.tail = node;
    }
    this.size++;
  }

  peek(): T | undefined {
    if (this.head) {
      return this.head.val;
    }
    return undefined;
  }

  poll(): T | undefined {
    if (!this.head) {
      return undefined;
    }
    const val = this.head.val;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      const next = this.head.getNext()!;
      this.head.setNext(null);
      next.setPrev(null);
      this.head = next;
    }
    this.size--;
    return val;
  }

  [Symbol.iterator](): Iterator<T | null> {
    let node = this.head;
    return {
      next(): IteratorResult<T | null> {
        const value = node?.val;
        const next = node?.getNext();
        node = next ?? null;
        if (value) {
          return { done: false, value };
        } else {
          return { done: true, value };
        }
      },
    };
  }
}
