export type PermutationsGenerator<T> = (items: T[]) => T[];

const recursive = <T>(items: T[]): T[][] => {
  if (items.length <= 1) {
    return [items];
  }

  const probe = items[0];
  const perms = recursive(items.slice(1));
  const results: T[][] = [];

  for (const perm of perms) {
    for (let i = 0; i <= perms.length; i++) {
      results.push([...perm.slice(0, i), probe, ...perm.slice(i)]);
    }
  }

  return results;
};

const iterative = <T>(items: T[]): T[][] => {
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
