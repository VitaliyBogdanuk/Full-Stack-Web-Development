import { describe, it, expect } from 'vitest';
import { sum } from '../src/sum.js';

describe('sum', () => {
  it('adds numbers', () => {
    expect(sum(2, 3)).toBe(5);
  });
});
