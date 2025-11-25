import add from '../src/add.js'

describe("add", () => {
    test('add', () => {
        expect(add(0,0)).toBe(0);
    });

    test('add', () => {
        expect(add(-3,2)).toBe(-1);
    });

    test('add', () => {
        expect(add(-1,-1)).toBe(-2);
    });

    test('add', () => {
        expect(add(-0.11,0.2)).toBe(0.09);
    });

    test('add', () => {
        expect(add(4,-6)).toBe(-2);
    });

});