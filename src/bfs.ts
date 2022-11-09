import { Queue } from './Queue';
import { Graphable } from './types';

export type BfsPredicate<T extends Graphable<T>> = (node: T) => boolean;

export const bfs = <T extends Graphable<T>>(root: T, predicate: BfsPredicate<T>): T | null => {
  const queue = new Queue<T>();

  queue.enqueue(root);
  while (!queue.isEmpty()) {
    const node = queue.dequeue()!;
    if (predicate(node)) {
      return node;
    }
    for (const child of node.getChildren()) {
      queue.enqueue(child as T);
    }
  }

  return null;
};
