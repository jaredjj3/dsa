import { BTreeNode } from './BTreeNode';

describe(BTreeNode, () => {
  describe('getChildren', () => {
    it('returns the left and right child when present', () => {
      const root = new BTreeNode(0);
      const left = new BTreeNode(1);
      const right = new BTreeNode(2);
      root.left = left;
      root.right = right;

      expect(root.getChildren()).toStrictEqual([left, right]);
    });

    it('omits the left child when null', () => {
      const root = new BTreeNode(0);
      const right = new BTreeNode(2);
      root.right = right;

      expect(root.getChildren()).toStrictEqual([right]);
    });

    it('omits the right child when null', () => {
      const root = new BTreeNode(0);
      const left = new BTreeNode(1);
      root.left = left;

      expect(root.getChildren()).toStrictEqual([left]);
    });

    it('returns an empty array when no child', () => {
      const root = new BTreeNode(0);

      expect(root.getChildren()).toStrictEqual([]);
    });
  });
});
