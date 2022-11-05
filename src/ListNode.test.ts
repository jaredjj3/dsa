import { ListNode } from './ListNode';

describe(ListNode, () => {
  let node1: ListNode<number>;
  let node2: ListNode<number>;

  beforeEach(() => {
    node1 = new ListNode(1);
    node2 = new ListNode(2);
  });

  describe('getNext', () => {
    it('returns the next node', () => {
      node1.setNext(node2);
      const node = node1.getNext();
      expect(node).toBe(node2);
    });

    it('returns null when no next node', () => {
      const node = node1.getNext();
      expect(node).toBeNull();
    });
  });

  describe('setNext', () => {
    it('sets the next node', () => {
      node1.setNext(node2);
      const node = node1.getNext();
      expect(node).toBe(node2);
    });

    it('sets the previous node of the next node', () => {
      node1.setNext(node2);
      const node = node2.getPrev();
      expect(node).toBe(node1);
    });

    it('sets the next node to null without crashing', () => {
      expect(() => node1.setNext(null)).not.toThrow();
      const node = node1.getNext();
      expect(node).toBeNull();
    });
  });

  describe('getPrev', () => {
    it('returns the previous node', () => {
      node1.setNext(node2);
      const node = node2.getPrev();
      expect(node).toBe(node1);
    });

    it('returns null when no previous node', () => {
      const node = node1.getPrev();
      expect(node).toBeNull();
    });
  });

  describe('setPrev', () => {
    it('sets the previous node', () => {
      node2.setPrev(node1);
      const node = node2.getPrev();
      expect(node).toBe(node1);
    });

    it('sets the next node of the previous node', () => {
      node2.setPrev(node1);
      const node = node1.getNext();
      expect(node).toBe(node2);
    });

    it('sets the previous node to null without crashing', () => {
      expect(() => node1.setPrev(null)).not.toThrow();
      const node = node1.getPrev();
      expect(node).toBeNull();
    });
  });
});
