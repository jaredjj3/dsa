import { forEachDigit } from './forEachDigit';

describe('forEachDigit', () => {
  it.each([
    { n: 8, expected: [8] },
    { n: 100, expected: [0, 0, 1] },
    { n: 1111, expected: [1, 1, 1, 1] },
    { n: 1293, expected: [3, 9, 2, 1] },
  ])('calculates each digit for $n', (t) => {
    const digits = new Array<number>();
    forEachDigit(t.n, (digit) => {
      digits.push(digit);
    });

    expect(digits).toStrictEqual(t.expected);
  });

  it('throws if n is negative', () => {
    expect(() => forEachDigit(-1, () => {})).toThrow();
  });

  it('throws if n is not an integer', () => {
    expect(() => forEachDigit(1.5, () => {})).toThrow();
  });
});
