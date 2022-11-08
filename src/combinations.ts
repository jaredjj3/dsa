export type CombinationsGenerator<T> = (items: T[]) => T[];

const recursive = <T>(items: T[]): T[] => {
  return [];
};

const iterative = <T>(items: T[]): T[] => {
  return [];
};

export const combinations = {
  default: iterative,
  iterative,
  recursive,
};
