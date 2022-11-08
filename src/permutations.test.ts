import { permutations } from './permutations';

describe('permutations', () => {
  describe.each([
    { name: 'default', permutations: permutations.default },
    { name: 'iterative', permutations: permutations.iterative },
    { name: 'recursive', permutations: permutations.recursive },
  ])(`permutations variant: '$name'`, (spec) => {
    const permutations = spec.permutations;

    it.todo('calculates all permutations of an array of items');

    it.todo('calculates the permutations of an empty array');
  });
});
