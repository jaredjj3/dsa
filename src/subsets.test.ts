import { subsets } from './subsets';

describe('subsets', () => {
  describe.each([{ name: 'recursive', subsets: subsets.recursive }])(`subsets variant: '$name'`, (spec) => {
    const subsets = spec.subsets;

    it.each([
      { items: [1], expected: [[], [1]] },
      { items: [1, 2], expected: [[], [1], [2], [1, 2]] },
      { items: [1, 2, 3], expected: [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]] },
    ])('calculates all subsets of an array of items: $items', (t) => {
      const combos = subsets(t.items);
      expect(combos).toIncludeAllMembers(t.expected);
    });

    it('calculates the subsets of an empty array', () => {
      const combos = subsets([]);
      expect(combos).toIncludeAllMembers([[]]);
    });
  });
});
