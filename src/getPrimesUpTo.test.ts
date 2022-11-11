import { getPrimesUpTo } from './getPrimesUpTo';

describe('getPrimesUpTo', () => {
  it.each([
    { n: 5, expected: [2, 3, 5] },
    { n: 2, expected: [2] },
    { n: 1, expected: [] },
  ])('returns primes up to: $n', (t) => {
    const primes = getPrimesUpTo(t.n);
    expect(primes).toStrictEqual(t.expected);
  });
});
