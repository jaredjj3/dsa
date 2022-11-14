/**
 * Returns the longest common subsequences.
 */
export const lcs = (str1: string, str2: string): string[] => {
  const results = new Array<string>();

  const dfs = (i: number, j: number, result: string = ''): void => {
    if (i === str1.length || j === str2.length) {
      results.push(result);
      return;
    }
    if (str1[i] === str2[j]) {
      dfs(i + 1, j + 1, result + str1[i]);
    }
    dfs(i + 1, j, '');
    dfs(i, j + 1, '');
  };

  dfs(0, 0);

  const max = Math.max(...results.map((str) => str.length));
  return results.filter((str) => str.length === max);
};
