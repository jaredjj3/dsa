import { Stack } from './Stack';

describe(Stack, () => {
  let stack: Stack<number>;

  beforeEach(() => {
    stack = new Stack();
  });

  it('pushes and pops values in LIFO order', () => {
    stack.push(0);
    stack.push(1);
    stack.push(2);

    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
    expect(stack.pop()).toBe(0);
  });

  it('returns undefined when popping an empty stack', () => {
    expect(stack.pop()).toBeUndefined();
  });

  it('peeks at the value about to be popped', () => {
    stack.push(0);
    expect(stack.peek()).toBe(stack.pop());
  });

  it('returns undefined when peeking at an empty stack', () => {
    expect(stack.peek()).toBeUndefined();
  });
});
