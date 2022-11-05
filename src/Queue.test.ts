import { Queue } from './Queue';

describe(Queue, () => {
  let queue: Queue<number>;

  beforeEach(() => {
    queue = new Queue();
  });

  it('queues and dequeues numbers in FIFO order', () => {
    queue.enqueue(0);
    queue.enqueue(1);
    queue.enqueue(2);

    expect(queue.dequeue()).toBe(0);
    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(2);
  });

  it('interleaves queueing and dequeuing correctly', () => {
    queue.enqueue(0);
    queue.enqueue(1);
    expect(queue.dequeue()).toBe(0);
    queue.enqueue(2);
    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(2);
  });

  it('returns undefined when dequeuing an empty queue', () => {
    expect(queue.dequeue()).toBeUndefined();
  });

  it('returns undefined when peeking an empty queue', () => {
    expect(queue.peek()).toBeUndefined();
  });

  it('calculates emptiness for empty queues', () => {
    expect(queue.isEmpty()).toBe(true);
  });

  it('calculates emptiness for non-empty queues', () => {
    queue.enqueue(0);
    expect(queue.isEmpty()).toBe(false);
  });
});
