export class Stack<T> {
  private arr = new Array<T>();

  push(val: T) {
    this.arr.push(val);
  }

  pop(): T | undefined {
    return this.arr.pop();
  }

  peek(): T | undefined {
    const len = this.arr.length;
    return this.arr[len - 1];
  }
}
