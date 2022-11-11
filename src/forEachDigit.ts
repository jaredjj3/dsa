export const forEachDigit = (n: number, callback: (n: number) => void) => {
  if (n < 0) {
    throw new Error('does not work on negative numbers');
  }
  if (!Number.isInteger(n)) {
    throw new Error(`n must be an integer, got: ${n}`);
  }
  while (n > 0) {
    callback(n % 10);
    n = Math.floor(n / 10);
  }
};
