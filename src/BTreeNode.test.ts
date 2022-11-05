import { BTreeNode } from './BTreeNode';

describe(BTreeNode, () => {
  it('instantiates without crashing', () => {
    expect(() => new BTreeNode(0)).not.toThrow();
  });
});
