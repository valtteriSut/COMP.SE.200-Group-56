import add from '../src/add.js';

describe('add', () => {
  test('lisää kaksi positiivista lukua', () => {
    expect(add(6, 4)).toBe(10);
  });

  test('lisää negatiivisia lukuja', () => {
    expect(add(-6, -4)).toBe(-10);
  });

  test('lisää positiivisen ja negatiivisen luvun', () => {
    expect(add(6, -4)).toBe(2);
  });

  test('lisää nollan toiseen lukuun', () => {
    expect(add(0, 5)).toBe(5);
    expect(add(5, 0)).toBe(5);
  });

  test('palauttaa 0 jos molemmat arvot puuttuvat', () => {
    expect(add()).toBe(0);
  });

  test('palauttaa arvon jos vain yksi argumentti annetaan', () => {
    expect(add(5)).toBe(5);
  });

  test('käsittelee desimaalilukuja oikein', () => {
    expect(add(0.1, 0.2)).toBeCloseTo(0.3);
  });

  test('käsittelee erittäin suuria lukuja', () => {
    expect(add(Number.MAX_SAFE_INTEGER, 1)).toBe(Number.MAX_SAFE_INTEGER + 1);
  });

  test('käsittelee Infinity-arvoja', () => {
    expect(add(Infinity, 1)).toBe(Infinity);
    expect(add(-Infinity, 10)).toBe(-Infinity);
  });

  test('käsittelee NaN-arvoja', () => {
    expect(Number.isNaN(add(NaN, 5))).toBe(true);
    expect(Number.isNaN(add(5, NaN))).toBe(true);
  });

  test('käsittelee string-muotoisia numeroita (implisiittinen tyyppimuunnos)', () => {
    expect(add('6', '4')).toBe(10);
    expect(add('6', 4)).toBe(10);
  });
});
