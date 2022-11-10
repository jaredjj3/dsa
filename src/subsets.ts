export type SubsetsGenerator<T> = (items: T[]) => T[];

const recursive = <T>(items: T[]): T[][] => {
  if (items.length === 0) {
    return [[]];
  }
  const subs = recursive(items.slice(0, -1));
  const last = items[items.length - 1];
  return [...subs, ...subs.map((sub) => [...sub, last])];
};

export const subsets = {
  default: recursive,
  recursive,
};
