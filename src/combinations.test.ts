import { combinations } from './combinations';

describe('combinations', () => {
  describe.each([{ name: 'recursive', combinations: combinations.recursive }])(
    `combinations variant: '$name'`,
    (spec) => {
      const combinations = spec.combinations;

      it.each([
        { items: [1], expected: [[], [1]] },
        { items: [1, 2], expected: [[], [1], [2], [1, 2]] },
        { items: [1, 2, 3], expected: [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]] },
      ])('calculates all combinations of an array of items: $items', (t) => {
        const combos = combinations(t.items);
        expect(combos).toIncludeAllMembers(t.expected);
      });

      it('calculates the combinations of an empty array', () => {
        const combos = combinations([]);
        expect(combos).toIncludeAllMembers([[]]);
      });
    }
  );
});
