import get from '../src/get'

const object1 = { 'a': [{ 'b': { 'c': [1,4, {'c': 10}] } }] }
const object2 = { 1:{1:[{'-0.29':-10}, {'0': -10}], 2:[1, {'a': null}, undefined]} }
const object3 = { true: [{ false: { null: 3 } }] }


describe("get funktio", () => {
    test('', () => {
        expect(get(object1, 'a[0].b.c[2].c')).toBe(10);
    });

    test('satunnaisia, positiivisia ja negatiivisia lukuja ', () => {
        expect(get(object2, '1.1[1].0')).toBe(-10);
    });

    test('satunnaisia desimaali, positiivisia ja negatiivisia lukuja ', () => {
        expect(get(object2, '1.1[0].-0.29')).toBe(-10);
    });

    test('satunnaisia desimaali, positiivisia ja negatiivisia lukuja ', () => {
        expect(get(object2, '[1,1,0,-0.29]')).toBe(-10);
    });

    test('null arvon käsittely kun on asetettu default', () => {
        expect(get(object2, '[1, 2, 1, a]', 10)).toBe(10);
    });

    test('null arvon käsittely', () => {
        expect(get(object2, '[1, 2, 1, a]')).toBe(undefined);
    });

    test('undefined arvon käsittely', () => {
        expect(get(object2, '1.2[2]')).toBe(undefined);
    });

    test('palauttaa default arvon kun määritelty', () => {
        expect(get(object2, '[1, 2, 1, a]', 0.329)).toBe(0.329);
    });

    test('boolean ja null arvot', () => {
        expect(get(object3, 'true[0].false.null')).toBe(3);
    });

});
