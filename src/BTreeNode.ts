import { TreeNode } from './TreeNode';

export class BTreeNode<T> {
  constructor(
    public readonly val: T,
    public left: BTreeNode<T> | null = null,
    public right: BTreeNode<T> | null = null
  ) {}
}
