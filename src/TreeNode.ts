export class TreeNode<T> {
  constructor(public readonly val: T, public readonly children: Array<TreeNode<T>> = []) {}
}
