import { jest } from '@jest/globals';
import isEmpty from '../src/isEmpty.js';

describe('isEmpty()', () => {

  //
  // ---- perusarvot ----
  //
  test('palauttaa true null-arvolle', () => {
    expect(isEmpty(null)).toBe(true);
  });

  test('palauttaa true undefined-arvolle', () => {
    expect(isEmpty(undefined)).toBe(true);
  });

  test('palauttaa true boolean-arvoille', () => {
    expect(isEmpty(true)).toBe(true);
    expect(isEmpty(false)).toBe(true);
  });

  test('palauttaa true numeroille', () => {
    expect(isEmpty(0)).toBe(true);
    expect(isEmpty(123)).toBe(true);
  });

  //
  // ---- array-like ----
  //
  test('palauttaa false ei-tyhjälle taulukolle', () => {
    expect(isEmpty([1, 2, 3])).toBe(false);
  });

  test('palauttaa true tyhjälle taulukolle', () => {
    expect(isEmpty([])).toBe(true);
  });

  test('palauttaa false ei-tyhjälle merkkijonolle', () => {
    expect(isEmpty('abc')).toBe(false);
  });

  test('palauttaa true tyhjälle merkkijonolle', () => {
    expect(isEmpty('')).toBe(true);
  });

  //
  // ---- Set ja Map ----
  //
  test('palauttaa true tyhjälle Setille', () => {
    expect(isEmpty(new Set())).toBe(true);
  });

  test('palauttaa false ei-tyhjälle Setille', () => {
    const s = new Set([1]);
    expect(isEmpty(s)).toBe(false);
  });

  test('palauttaa true tyhjälle Mapille', () => {
    expect(isEmpty(new Map())).toBe(true);
  });

  test('palauttaa false ei-tyhjälle Mapille', () => {
    const m = new Map([['a', 1]]);
    expect(isEmpty(m)).toBe(false);
  });

  //
  // ---- objektit ----
  //
  test('palauttaa true tyhjälle objektille', () => {
    expect(isEmpty({})).toBe(true);
  });

  test('palauttaa false objektille, jossa on omia propertyja', () => {
    expect(isEmpty({ a: 1 })).toBe(false);
  });

  test('palauttaa true objektiprototyypille ilman omia propertyja', () => {
    function A() {}
    expect(isEmpty(A.prototype)).toBe(true);
  });

  test('palauttaa false objektiprototyypille, jossa on oma property', () => {
    function A() {}
    A.prototype.x = 1;
    expect(isEmpty(A.prototype)).toBe(false);
  });

});
