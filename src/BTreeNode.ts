export class BTreeNode<T> {
  constructor(
    public readonly val: T,
    public left: BTreeNode<T> | null = null,
    public right: BTreeNode<T> | null = null
  ) {}

  get children(): BTreeNode<T>[] {
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
