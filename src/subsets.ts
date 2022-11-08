export type SubsetsGenerator<T> = (items: T[]) => T[];

const recursive = <T>(items: T[]): T[] => {
  return [];
};

const iterative = <T>(items: T[]): T[] => {
  return [];
};

export const subsets = {
  default: iterative,
  iterative,
  recursive,
};
