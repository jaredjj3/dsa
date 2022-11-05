import { ListNode } from "./ListNode";

describe(ListNode, () => {
  describe('getNext', () => {
    it('returns the next node', () => {
      const node1 = new ListNode(1);
      const node2 = new ListNode(2);
      node1.setNext(node2);

      const node = node1.getNext();

      expect(node).toBe(node2);
    });
  });
});