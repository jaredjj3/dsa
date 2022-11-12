export type PermutationsGenerator<T> = (items: T[]) => T[];

const recursive = <T>(items: T[]): T[] => {
  return [];
};

const iterative = <T>(items: T[]): T[] => {
  return [];
};

/**
 * Calculates all permutations of an object.
 */
export const permutations = {
  default: iterative,
  iterative,
  recursive,
};
