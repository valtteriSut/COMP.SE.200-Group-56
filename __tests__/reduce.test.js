import reduce from '../src/reduce.js';

describe("reduce", () => {
    test('Positiiviset luvut', () => {
        expect(reduce([1, 2, 3], (sum, n) => sum + n, 0)).toBe(6);
    });
    test('Negatiivinen luku ja nollia', () => {
        expect(reduce([-10, 0, 0, 0], (sum, n) => sum + n, 0)).toBe(-10);
    });
    test('Kaksi negatiivista lukua', () => {
        expect(reduce([-10, -10], (sum, n) => sum + n, 0)).toBe(-20);
    });
    test('String tyyppinen numero', () => {
        expect(reduce(['1', 1], (sum, n) => sum + n, 0)).toBe(2);
    });


    test('satunnaisia arvoja normaaleilla luvuilla', () => {
        expect(reduce({ '1': 'a', '2': 2, '3': 'a', 394: 190238}, (result, value, key) => {
        (result[value] || (result[value] = [])).push(key)
        return result
        }, {}))
        .toStrictEqual({ 'a': ['1', '3'], '2': ['2'], 190238: ['394'] });
    });

    test('satunnaiset arvot negatiivisilla luvuilla', () => {
        expect(reduce({ '1': 'a', 2: 'b', 'a': '1', '3': -10, 2: 'b', 2: 'b'}, (result, value, key) => {
        (result[value] || (result[value] = [])).push(key)
        return result
        }, {}))
        .toStrictEqual({'a': ['1'], 'b': ['2'], '1': ['a'], '-10': ['3']});
    });

    test('satunnaiset negatiiviset ja positiiviset desimaali arvot', () => {
        expect(reduce({ '-0.2309': 'b', '0.2309': 'c' }, (result, value, key) => {
        (result[value] || (result[value] = [])).push(key)
        return result
        }, {}))
        .toStrictEqual({ 'b': ['-0.2309'], 'c':['0.2309'] });
    });

    test('null, boolean ja undefined arvot', () => {
        expect(reduce({ null: 'a', false: 'a', undefined: 'a'}, (result, value, key) => {
        (result[value] || (result[value] = [])).push(key)
        return result
        }, {}))
        .toStrictEqual({ 'a': ['null', 'false', 'undefined'] });
    });

});
 
