import { LinkedList } from './LinkedList';
import { ListNode } from './ListNode';

describe(LinkedList, () => {
  let list: LinkedList<number>;

  beforeEach(() => {
    list = new LinkedList();
  });

  describe('getSize', () => {
    it('returns 0 for empty lists', () => {
      const size = list.getSize();
      expect(size).toBe(0);
    });

    it('returns the number of nodes for non-empty lists', () => {
      list.add(1);
      list.add(2);
      const size = list.getSize();
      expect(size).toBe(2);
    });
  });

  describe('add', () => {
    it('adds a node to an empty list', () => {
      list.add(1);
      const nodes = Array.from(list);
      expect(nodes).toStrictEqual([1]);
    });

    it('adds multiple nodes to a list', () => {
      list.add(1);
      list.add(2);
      const nodes = Array.from(list);
      expect(nodes).toStrictEqual([1, 2]);
    });
  });

  describe('iterator', () => {
    it('iterates over the nodes in order', () => {
      list.add(1);
      list.add(2);
      list.add(3);

      const nodes = Array.from(list);

      expect(nodes).toStrictEqual([1, 2, 3]);
    });
  });

  describe('poll', () => {
    it('removes the node in FIFO order', () => {
      list.add(1);
      list.add(2);

      const val = list.poll();
      const size = list.getSize();

      expect(val).toBeDefined();
      expect(val).toBe(1);
      expect(size).toBe(1);
    });

    it('returns undefined for an empty list', () => {
      expect(list.poll()).toBeUndefined();
      expect(list.getSize()).toBe(0);
    });
  });
});
