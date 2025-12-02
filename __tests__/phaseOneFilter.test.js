import filter from '../src/filter.js';

describe('filter function', () => {

  test('1. Palauttaa arvot, jotka täyttävät ehdon (x > 2)', () => {
    const input = [1, 2, 3, 4];
    const result = filter(input, x => x > 2);
    expect(result).toEqual([3, 4]);
  });

  test.failing('2. Palauttaa tyhjän, jos mikään arvo ei täytä ehtoa (x > 5)', () => {
    const input = [1, 2, 3, 4];
    const result = filter(input, x => x > 5);
    expect(result).toEqual([]);
  });

  test.failing('3. Palauttaa tyhjän, jos taulukko on tyhjä', () => {
    const input = [];
    const result = filter(input, x => true);
    expect(result).toEqual([]);
  });

  test.failing('4. Palauttaa tyhjän, jos syöte on null', () => {
    const input = null;
    const result = filter(input, x => true);
    expect(result).toEqual([]);
  });

  test('5. Palauttaa kaikki alkiot, jos ehto on aina tosi', () => {
    const input = [true, false];
    const result = filter(input, () => true);
    expect(result).toEqual([true, false]);
  });

  test('6. Palauttaa alkiot indeksin perusteella (parilliset indeksit)', () => {
    const input = ['a', 'b', 'c'];
    const result = filter(input, (value, index) => index % 2 === 0);
    expect(result).toEqual(['a', 'c']);
  });

  test('7. Ei muuta alkuperäistä taulukkoa', () => {
    const input = [1, 2, 3];
    const copy = [...input];
    const result = filter(input, x => x > 1);
    expect(result).toEqual([2, 3]);
    expect(input).toEqual(copy); // alkuperäinen ei saa muuttua
  });

});
