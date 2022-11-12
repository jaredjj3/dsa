import { Graphable } from './types';

/**
 * A n-ary tree node.
 */
export class TreeNode<T> implements Graphable<T> {
  constructor(public readonly val: T, public children: Array<TreeNode<T>> = []) {}

  getChildren(): Graphable<T>[] {
    return this.children;
  }
}
