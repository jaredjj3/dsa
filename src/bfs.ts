import { Queue } from './Queue';
import { TreeNode } from './TreeNode';

export type Predicate<T> = (node: TreeNode<T>) => boolean;

export const bfs = <T>(root: TreeNode<T>, predicate: Predicate<T>): TreeNode<T> | null => {
  const queue = new Queue<TreeNode<T>>();
  const seen = new Set<TreeNode<T>>();

  queue.enqueue(root);
  while (!queue.isEmpty()) {
    const node = queue.dequeue()!;
    seen.add(node);

    if (predicate(node)) {
      return node;
    }

    for (const child of node.children) {
      if (!seen.has(child)) {
        queue.enqueue(child);
      }
    }
  }

  return null;
};
