import { GraphLike } from './types';

export class TreeNode<T> implements GraphLike<T> {
  constructor(public readonly val: T, public children: Array<TreeNode<T>> = []) {}
}
