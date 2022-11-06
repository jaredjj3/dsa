import { Queue } from './Queue';
import { TreeNode } from './TreeNode';

export type Predicate<T> = (node: TreeNode<T>) => boolean;

export const bfs = <T>(root: TreeNode<T>, predicate: Predicate<T>): TreeNode<T> | null => {
  const queue = new Queue<TreeNode<T>>();

  queue.enqueue(root);
  while (!queue.isEmpty()) {
    const node = queue.dequeue()!;
    if (predicate(node)) {
      return node;
    }
    for (const child of node.children) {
      queue.enqueue(child);
    }
  }

  return null;
};
