import { TreeNode } from './TreeNode';

describe(TreeNode, () => {
  describe('getChildren', () => {
    it('returns the children of the node', () => {
      const root = new TreeNode(0);
      const node1 = new TreeNode(1);
      const node2 = new TreeNode(2);
      root.children = [node1, node2];

      expect(root.getChildren()).toStrictEqual([node1, node2]);
    });
  });
});
