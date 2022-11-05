import { TreeNode } from './TreeNode';

describe(TreeNode, () => {
  it('can be instantiated without crashing', () => {
    expect(() => new TreeNode(1)).not.toThrow();
  });
});
