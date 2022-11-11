export const getPrimesUpTo = (n: number): number[] => {
  const p = new Array<boolean>(n + 1).fill(true);
  for (let i = 2; i * i <= n; i++) {
    if (p[i]) {
      for (let j = i * i; j <= n; j += i) {
        p[j] = false;
      }
    }
  }

  const result = new Array<number>();
  for (let i = 2; i < p.length; i++) {
    if (p[i]) {
      result.push(i);
    }
  }
  return result;
};
