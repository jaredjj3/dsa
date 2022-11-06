import { MinHeap } from './MinHeap';

describe(MinHeap, () => {
  let heap: MinHeap;

  beforeEach(() => {
    heap = new MinHeap();
  });

  describe('size', () => {
    it('returns the size of the min heap', () => {
      heap.add(0);
      expect(heap.size).toBe(1);
    });
  });

  describe('peek', () => {
    it('returns the min node', () => {
      heap.add(0);
      heap.add(1);
      heap.add(-1);

      expect(heap.peek()).toBe(-1);
    });

    it('can be called multiple times without affecting the structure', () => {
      heap.add(0);

      const peek1 = heap.peek();
      const peek2 = heap.peek();

      expect(peek1).toBe(0);
      expect(peek2).toBe(0);
    });

    it('returns the next min node after polling', () => {
      heap.add(0);
      heap.add(1);

      heap.poll();

      expect(heap.peek()).toBe(1);
    });

    it('throws for an empty min heap', () => {
      expect(() => heap.peek()).toThrow();
    });
  });

  describe('poll', () => {
    it('returns the min node', () => {
      heap.add(0);
      heap.add(1);
      heap.add(-1);

      expect(heap.poll()).toBe(-1);
    });

    it('returns the next min node after polling', () => {
      heap.add(0);
      heap.add(1);

      heap.poll();

      expect(heap.poll()).toBe(1);
    });

    it('throws for an empty min heap', () => {
      expect(() => heap.poll()).toThrow();
    });
  });

  describe('add', () => {
    it('adds a node to the heap', () => {
      heap.add(0);
      expect(heap.size).toBe(1);
    });
  });
});
