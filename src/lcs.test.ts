import { lcs } from './lcs';

describe('lcs', () => {
  it.each([
    { name: 'same strings', str1: 'abc', str2: 'abc', expected: ['abc'] },
    { name: 'similar strings', str1: 'sea', str2: 'eat', expected: ['ea'] },
    { name: 'similar strings with multiple lcs', str1: 'abcd', str2: 'cdab', expected: ['ab', 'cd'] },
  ])('returns the longest common substrings: $name', (t) => {
    const subs = lcs(t.str1, t.str2);
    expect(subs).toIncludeAllMembers(t.expected);
  });
});
