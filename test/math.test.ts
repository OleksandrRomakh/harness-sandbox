import { describe, expect, it } from 'vitest';
import { add, multiply } from '../src/math.js';

describe('add', () => {
  it('adds two positive numbers', () => {
    expect(add(2, 3)).toBe(5);
  });

  it('adds two negative numbers', () => {
    expect(add(-2, -3)).toBe(-5);
  });

  it('adds zero', () => {
    expect(add(0, 5)).toBe(5);
  });
});

describe('multiply', () => {
  it('multiplies two positive numbers', () => {
    expect(multiply(2, 3)).toBe(6);
  });

  it('multiplies two negative numbers', () => {
    expect(multiply(-2, -3)).toBe(6);
  });

  it('multiplies by zero', () => {
    expect(multiply(5, 0)).toBe(0);
  });
});
