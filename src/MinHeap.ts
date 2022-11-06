export class MinHeap {
  private nodes = new Array<number>();

  public get size(): number {
    return this.nodes.length;
  }

  public peek() {
    if (this.size === 0) {
      throw new Error('heap is empty');
    }
    return this.nodes[0];
  }

  public poll() {
    if (this.size === 0) {
      throw new Error('heap is empty');
    }
    const node = this.nodes[0];
    this.nodes[0] = this.nodes[this.size - 1];
    this.heapifyDown();
    return node;
  }

  public add(node: number) {
    this.nodes[this.size - 1] = node;
    this.heapifyUp();
  }

  private heapifyUp() {
    let index = this.size - 1;
    while (this.hasParent(index) && this.parent(index)! > this.nodes[index]) {
      this.swap(this.getParentIndex(index), index);
      index = this.getParentIndex(index);
    }
  }

  private heapifyDown() {
    let index = 0;
    while (this.hasLeftChild(index)) {
      let smallerChildIndex = this.getLeftChildIndex(index);
      if (this.hasRightChild(index) && this.rightChild(index)! < this.leftChild(index)!) {
        smallerChildIndex = this.getRightChildIndex(index);
      }
      if (this.nodes[index] < this.nodes[smallerChildIndex]) {
        break;
      } else {
        this.swap(index, smallerChildIndex);
      }
      index = smallerChildIndex;
    }
  }

  private swap(index1: number, index2: number) {
    [this.nodes[index1], this.nodes[index2]] = [this.nodes[index2], this.nodes[index1]];
  }

  private getLeftChildIndex(parentIndex: number) {
    return 2 * parentIndex + 1;
  }

  private getRightChildIndex(parentIndex: number) {
    return 2 * parentIndex + 2;
  }

  private getParentIndex(childIndex: number) {
    return (childIndex - 1) / 2;
  }

  private hasLeftChild(index: number) {
    return this.getLeftChildIndex(index) < this.size;
  }

  private hasRightChild(index: number) {
    return this.getRightChildIndex(index) < this.size;
  }

  private hasParent(index: number) {
    return this.getParentIndex(index) >= 0;
  }

  private leftChild(index: number): number | null {
    return this.nodes[this.getLeftChildIndex(index)] ?? null;
  }

  private rightChild(index: number): number | null {
    return this.nodes[this.getRightChildIndex(index)] ?? null;
  }

  private parent(index: number): number | null {
    return this.nodes[this.getParentIndex(index)];
  }
}
