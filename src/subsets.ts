import { Stack } from './Stack';
import { StackFrame } from './types';

export type SubsetsGenerator<T> = (items: T[]) => T[];

const recursive = <T>(items: T[]): T[][] => {
  if (items.length === 0) {
    return [[]];
  }
  const subs = recursive(items.slice(0, -1));
  const last = items[items.length - 1];
  return [...subs, ...subs.map((sub) => [...sub, last])];
};

const iterative = <T>(items: T[]): T[][] => {
  let ret = new Array<Array<T>>();

  const stack = new Stack<StackFrame<[items: T[]], T[][]>>();
  stack.push({
    args: [items],
    onReturn: (subs) => {
      ret = subs;
    },
  });

  while (!stack.isEmpty()) {
    const frame = stack.pop()!;
    const items = frame.args[0];
    const onReturn = frame.onReturn;

    if (items.length === 0) {
      onReturn([[]]);
    } else {
      stack.push({
        args: [items.slice(0, -1)],
        onReturn: (subs: T[][]) => {
          const last = items[items.length - 1];
          onReturn([...subs, ...subs.map((sub) => [...sub, last])]);
        },
      });
    }
  }

  return ret;
};

export const subsets = {
  default: iterative,
  iterative,
  recursive,
};
