import { permutations } from './permutations';

describe('permutations', () => {
  describe.each([{ name: 'recursive', permutations: permutations.recursive }])(
    `permutations variant: '$name'`,
    (spec) => {
      const permutations = spec.permutations;

      it.each([
        {
          items: [1, 2, 3],
          expected: [
            [1, 2, 3],
            [1, 3, 2],
            [2, 1, 3],
            [2, 3, 1],
            [3, 1, 2],
            [3, 2, 1],
          ],
        },
      ])('calculates all permutations of an array of items', (t) => {
        expect(permutations(t.items)).toIncludeAllMembers(t.expected);
      });

      it('calculates the permutations of an empty array', () => {
        expect(permutations([])).toStrictEqual([[]]);
      });
    }
  );
});
