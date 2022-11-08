import { Queue } from './Queue';

export type GraphLike<T> = {
  children: T[];
};

export type BfsPredicate<T extends GraphLike<T>> = (node: T) => boolean;

export const bfs = <T extends GraphLike<T>>(root: T, predicate: BfsPredicate<T>): T | null => {
  const queue = new Queue<T>();

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
