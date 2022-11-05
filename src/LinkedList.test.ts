import { LinkedList } from './LinkedList';
import { ListNode } from './ListNode';

describe(LinkedList, () => {
  let list: LinkedList<number>;
  let node1: ListNode<number>;
  let node2: ListNode<number>;
  let node3: ListNode<number>;

  beforeEach(() => {
    list = new LinkedList();
    node1 = new ListNode(1);
    node2 = new ListNode(2);
    node3 = new ListNode(3);
  });

  describe('getHead', () => {
    it('returns null for an empty list', () => {
      const head = list.getHead();
      expect(head).toBeNull();
    });

    it('returns the head of a list', () => {
      list.add(node1);
      list.add(node2);
      const head = list.getHead();
      expect(head).toBe(node1);
    });
  });

  describe('getTail', () => {
    it('returns null for an empty list', () => {
      const tail = list.getTail();
      expect(tail).toBeNull();
    });

    it('returns the tail of a list', () => {
      list.add(node1);
      list.add(node2);
      const tail = list.getTail();
      expect(tail).toBe(node2);
    });
  });

  describe('hasCycle', () => {
    it('returns false for empty lists', () => {
      const hasCycle = list.hasCycle();
      expect(hasCycle).toBe(false);
    });

    it('returns false for non-empty lists without cycles', () => {
      list.add(node1);
      list.add(node2);
      const hasCycle = list.hasCycle();
      expect(hasCycle).toBe(false);
    });

    it('returns true for lists with cycles', () => {
      list.add(node1);
      list.add(node2);
      node1.setPrev(node2);

      const hasCycle = list.hasCycle();

      expect(hasCycle).toBe(true);
    });

    it('detects cycles for self-cyclic nodes', () => {
      list.add(node1);
      list.add(node1);

      const hasCycle = list.hasCycle();

      expect(hasCycle).toBe(true);
    });
  });

  describe('isTampered', () => {
    it('returns false for empty lists', () => {
      const isTampered = list.isTampered();
      expect(isTampered).toBe(false);
    });

    it('returns true for non-empty lists', () => {
      list.add(node1);
      const isTampered = list.isTampered();
      expect(isTampered).toBe(false);
    });

    it('returns true for lists whose nodes have been tampered with', () => {
      list.add(node1);
      node1.setNext(node2); // tamper
      const isTampered = list.isTampered();
      expect(isTampered).toBe(true);
    });
  });

  describe('getSize', () => {
    it('returns 0 for empty lists', () => {
      const size = list.getSize();
      expect(size).toBe(0);
    });

    it('returns the number of nodes for non-empty lists', () => {
      list.add(node1);
      list.add(node2);
      const size = list.getSize();
      expect(size).toBe(2);
    });

    it('returns number of unique nodes for cyclic lists', () => {
      list.add(node1);
      list.add(node2);
      node1.setPrev(node2);

      const size = list.getSize();

      expect(size).toBe(2);
    });
  });

  describe('add', () => {
    it('adds a node to an empty list', () => {
      list.add(node1);
      const nodes = Array.from(list);
      expect(nodes).toStrictEqual([node1]);
    });

    it('adds multiple nodes to a list', () => {
      list.add(node1);
      list.add(node2);
      const nodes = Array.from(list);
      expect(nodes).toStrictEqual([node1, node2]);
    });
  });

  describe('insert', () => {
    it('inserts a node at the index', () => {
      list.add(node1);
      list.add(node2);
      list.insert(1, node3);

      const nodes = Array.from(list);

      expect(nodes).toStrictEqual([node1, node3, node2]);
    });

    it('throws when the index does not exist', () => {
      list.add(node1);
      expect(() => list.insert(4, node2)).toThrow();
    });
  });

  describe('iterator', () => {
    it('iterates over the nodes in order', () => {
      list.add(node1);
      list.add(node2);
      list.add(node3);

      const nodes = Array.from(list);

      expect(nodes).toStrictEqual([node1, node2, node3]);
    });
  });
});
