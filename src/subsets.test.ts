import { subsets } from './subsets';

describe('subsets', () => {
  describe.each([
    { name: 'default', subsets: subsets.default },
    { name: 'iterative', subsets: subsets.iterative },
    { name: 'recursive', subsets: subsets.recursive },
  ])(`subsets variant: '$name'`, (spec) => {
    const subsets = spec.subsets;

    it.todo('calculates all subsets of an array of items');

    it.todo('calculates the subsets of an empty array');
  });
});
