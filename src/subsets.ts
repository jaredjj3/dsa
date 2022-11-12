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

  let frame: StackFrame<[items: T[]], T[][]> = {
    args: [items],
    onReturn: (subs) => {
      ret = subs;
    },
  };

  while (true) {
    const items = frame.args[0];
    const onReturn = frame.onReturn;

    if (items.length === 0) {
      onReturn([[]]);
      break;
    } else {
      frame = {
        args: [items.slice(0, -1)],
        onReturn: (subs: T[][]) => {
          const last = items[items.length - 1];
          onReturn([...subs, ...subs.map((sub) => [...sub, last])]);
        },
      };
    }
  }

  return ret;
};

/**
 * Calculates the subsets of an array of items.
 */
export const subsets = {
  default: iterative,
  iterative,
  recursive,
};
