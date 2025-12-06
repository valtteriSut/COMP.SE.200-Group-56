import add from '../src/add.js'

describe("add funktio", () => {
    test('Nollien lisäys', () => {
        expect(add(0,0)).toBe(0);
    });

    test('Negatiivisen ja positiivisen numeron lisäys', () => {
        expect(add(-3,2)).toBe(-1);
    });

    test('Positiivisen numeron ja negatiivisen lisäys', () => {
        expect(add(4,-6)).toBe(-2);
    });

    test('Negatiivisten lukujen lisäys', () => {
        expect(add(-1,-1)).toBe(-2);
    });

    test('Desimaali lukujen lisäys', () => {
        expect(add(-0.11,0.2)).toBe(0.09);
    });

    test('String tyyppisten numeroiden lisäystä', () => {
        expect(add("1","2")).toBe(3);
    });

    test('Boolean arvot', () => {
        expect(add(true,false)).toBe(1);
    });


});
