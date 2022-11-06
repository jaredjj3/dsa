import { bsearch, BsearchGps, equals } from './bsearch';

describe('bsearch', () => {
  describe.each([
    { name: 'default', bsearch: bsearch.default },
    { name: 'iterative', bsearch: bsearch.iterative },
    { name: 'recursive', bsearch: bsearch.recursive },
  ])(`bsearch variant: '$name'`, (spec) => {
    const bsearch = spec.bsearch;

    it.each([
      { name: 'beginning of array', target: 1, array: [1, 2, 3], expectation: 0 },
      { name: 'middle of array', target: 2, array: [1, 2, 3], expectation: 1 },
      { name: 'end of array', target: 3, array: [1, 2, 3], expectation: 2 },
    ])('returns the index of an element at $name', (t) => {
      const index = bsearch(equals(t.target))(t.array);
      expect(index).toBe(t.expectation);
    });

    it('returns -1 when the element is not in the array', () => {
      const index = bsearch(equals(1))([0, 0, 4]);
      expect(index).toBe(-1);
    });

    it('returns -1 for empty arrays', () => {
      const index = bsearch(equals(1))([]);
      expect(index).toBe(-1);
    });
  });
});
