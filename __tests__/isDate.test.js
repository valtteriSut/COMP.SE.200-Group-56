import { jest } from '@jest/globals';
import isDate from '../src/isDate.js';

describe('isDate()', () => {

  test('palauttaa true Date-olioille', () => {
    expect(isDate(new Date())).toBe(true);
  });

  test('palauttaa false string-arvoille', () => {
    expect(isDate('2024-01-01')).toBe(false);
  });

  test('palauttaa false numeroille', () => {
    expect(isDate(123)).toBe(false);
  });

  test('palauttaa false null-arvolle', () => {
    expect(isDate(null)).toBe(false);
  });

  test('palauttaa false undefined-arvolle', () => {
    expect(isDate(undefined)).toBe(false);
  });

  test('palauttaa false tavallisille objekteille', () => {
    expect(isDate({})).toBe(false);
  });

  test('ei käsittele satunnaisia olioita dateinä', () => {
    const fake = { a: 1 };
    expect(isDate(fake)).toBe(false);
  });

});

