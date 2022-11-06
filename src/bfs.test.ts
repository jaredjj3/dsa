import { bfs } from './bfs';
import { TreeNode } from './TreeNode';

describe('bfs', () => {
  let root: TreeNode<number>;

  beforeEach(() => {
    root = new TreeNode(0);
    const node1 = new TreeNode(1);
    const node2 = new TreeNode(2);
    const node3 = new TreeNode(3);
    const node4 = new TreeNode(4);
    const node5 = new TreeNode(5);
    const node6 = new TreeNode(6);

    root.children = [node1, node2];
    node1.children = [node3, node4];
    node2.children = [node5];
    node5.children = [node6];
  });

  it('returns the node matching the predicate', () => {
    const node = bfs(root, (n) => n.val === 4);
    expect(node).not.toBeNull();
    expect(node!.val).toBe(4);
  });

  it('returns null if no node matches the predicate', () => {
    const node = bfs(root, (n) => n.val === 42);
    expect(node).toBeNull();
  });
});
