import { ListNode } from './ListNode';

/**
 * A unbounded queue data structure.
 *
 * This queue supports enqueuing and dequeuing in constant time.
 */
export class Queue<T> {
  private readonly head: ListNode<T> = new ListNode(Symbol.for('head') as any);
  private readonly tail: ListNode<T> = new ListNode(Symbol.for('tail') as any);

  constructor() {
    this.head.setNext(this.tail);
  }

  enqueue(val: T) {
    const node = new ListNode(val);
    const next = this.head.getNext();
    this.head.setNext(node);
    node.setNext(next);
  }

  dequeue(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }
    const node = this.tail.getPrev()!;
    this.tail.setPrev(node.getPrev());
    return node.val;
  }

  peek(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }
    const node = this.tail.getPrev()!;
    return node.val;
  }

  isEmpty() {
    return this.head.getNext() === this.tail;
  }
}
