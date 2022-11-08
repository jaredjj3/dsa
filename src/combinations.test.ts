import { combinations } from './combinations';

describe('combinations', () => {
  describe.each([
    { name: 'default', combinations: combinations.default },
    { name: 'iterative', combinations: combinations.iterative },
    { name: 'recursive', combinations: combinations.recursive },
  ])(`combinations variant: '$name'`, (spec) => {
    const combinations = spec.combinations;

    it.todo('calculates all combinations of an array of items');

    it.todo('calculates the combinations of an empty array');
  });
});
