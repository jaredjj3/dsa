export class TreeNode<T> {
  constructor(public readonly val: T, public children: Array<TreeNode<T>> = []) {}
}
