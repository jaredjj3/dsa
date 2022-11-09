import { Graphable } from './types';

export class TreeNode<T> implements Graphable<T> {
  constructor(public readonly val: T, public children: Array<TreeNode<T>> = []) {}

  getChildren(): Graphable<T>[] {
    return this.children;
  }
}
