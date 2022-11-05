import { TreeNode } from './TreeNode';

describe(TreeNode, () => {
  it('instantiates without crashing', () => {
    expect(() => new TreeNode(1)).not.toThrow();
  });
});
