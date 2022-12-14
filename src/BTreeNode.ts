import { Graphable } from './types';

/**
 * A binary tree node.
 */
export class BTreeNode<T> implements Graphable<T> {
  constructor(
    public readonly val: T,
    public left: BTreeNode<T> | null = null,
    public right: BTreeNode<T> | null = null
  ) {}

  getChildren(): BTreeNode<T>[] {
    const children = new Array<BTreeNode<T>>();
    if (this.left) {
      children.push(this.left);
    }
    if (this.right) {
      children.push(this.right);
    }
    return children;
  }
}
