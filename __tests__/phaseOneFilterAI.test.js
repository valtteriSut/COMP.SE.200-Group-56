import filter from '../src/filter.js';
import { jest } from '@jest/globals';

describe('filter()', () => {

  const alwaysTrue = () => true;
  const alwaysFalse = () => false;

  test('1. palauttaa alkiot, jotka täyttävät ehdon (x > 2)', () => {
    const result = filter([1, 2, 3, 4], x => x > 2);
    expect(result).toEqual([3, 4]);
  });

  test('2. palauttaa tyhjän, jos mikään arvo ei täytä ehtoa', () => {
    const result = filter([1, 2, 3, 4], x => x > 5);
    expect(result).toEqual([]);
  });

  test('3. palauttaa tyhjän, jos taulukko on tyhjä', () => {
    const result = filter([], alwaysTrue);
    expect(result).toEqual([]);
  });

  test('4. palauttaa tyhjän, jos syöte on null', () => {
    const result = filter(null, alwaysTrue);
    expect(result).toEqual([]);
  });

  test('5. palauttaa kaikki alkiot, jos ehto on aina tosi', () => {
    const result = filter([true, false], alwaysTrue);
    expect(result).toEqual([true, false]);
  });

  test('6. indeksipohjainen suodatus toimii oikein', () => {
    const result = filter(['a', 'b', 'c'], (_, index) => index % 2 === 0);
    expect(result).toEqual(['a', 'c']);
  });

  test('7. ei muuta alkuperäistä taulukkoa', () => {
    const arr = [1, 2, 3];
    const clone = [...arr];
    filter(arr, x => x > 1);
    expect(arr).toEqual(clone);
  });

  test('predicate saa oikeat argumentit (value, index, array)', () => {
    const mockFn = jest.fn(() => true);
    const arr = ['x', 'y'];
    filter(arr, mockFn);

    expect(mockFn).toHaveBeenCalledTimes(2);
    expect(mockFn).toHaveBeenNthCalledWith(1, 'x', 0, arr);
    expect(mockFn).toHaveBeenNthCalledWith(2, 'y', 1, arr);
  });

});
